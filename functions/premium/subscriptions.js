/**
 * =====================================================================
 * PREMIUM SUBSCRIPTION - RAZORPAY SUBSCRIPTIONS API
 * =====================================================================
 * Separate from the existing createRazorpayOrder/verifyRazorpayPayment
 * pair in index.js (one-time Orders, used for live-test session
 * purchases) - Premium is recurring billing, which Razorpay models as a
 * completely different object: a Plan (created once, see
 * createPremiumPlan) that Subscriptions are created against per user.
 *
 * Same raw-fetch-to-api.razorpay.com style as the existing Orders
 * integration (no SDK dependency), same RAZORPAY_KEY_ID/RAZORPAY_KEY_SECRET
 * secrets for authenticating outbound calls. The webhook needs its OWN
 * secret (RAZORPAY_WEBHOOK_SECRET) - that's a separate value you set in
 * the Razorpay Dashboard when registering the webhook URL, distinct from
 * the API key secret used to verify payment signatures elsewhere.
 * =====================================================================
 */

const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const crypto = require("crypto");
const {
  admin,
  db,
  ADMIN_EMAIL,
  PREMIUM_TIERS,
  COLLECTIONS,
} = require("./config");

const RAZORPAY_API_BASE = "https://api.razorpay.com/v1";

// Every secret any tier's planId might read from, declared statically (v2
// functions require secrets to be listed up front, not chosen at runtime).
const ALL_PLAN_ID_SECRETS = ["RAZORPAY_SILVER_PLAN_ID", "RAZORPAY_GOLD_PLAN_ID", "RAZORPAY_DIAMOND_PLAN_ID", "RAZORPAY_PREMIUM_PLAN_ID"];

function razorpayAuthHeader() {
  return "Basic " + Buffer.from(process.env.RAZORPAY_KEY_ID + ":" + process.env.RAZORPAY_KEY_SECRET).toString("base64");
}

/**
 * One-time bootstrap, admin-only. Creates the recurring Plan in Razorpay
 * for the given tier ("silver", "gold", or "diamond") and returns its
 * plan_id. Run once per tier (e.g. from the browser console on admin.html
 * via httpsCallable), then:
 *   firebase functions:secrets:set RAZORPAY_SILVER_PLAN_ID   (or _GOLD_/_DIAMOND_)
 * pasting the returned id as the value, and redeploy createPremiumSubscription.
 * Safe to call again if needed - Razorpay just creates another Plan object,
 * it doesn't mutate/duplicate-detect, so only ever run this when you
 * actually want a new Plan (e.g. changing a tier's price later).
 */
exports.createPremiumPlan = onCall({
  secrets: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"],
}, async (request) => {
  if (!request.auth || request.auth.token.email !== ADMIN_EMAIL) {
    throw new HttpsError("permission-denied", "Admin only.");
  }
  const tier = request.data?.tier;
  const tierConfig = PREMIUM_TIERS[tier];
  if (!tierConfig) {
    throw new HttpsError("invalid-argument", `tier must be one of: ${Object.keys(PREMIUM_TIERS).join(", ")}`);
  }

  const response = await fetch(`${RAZORPAY_API_BASE}/plans`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": razorpayAuthHeader(),
    },
    body: JSON.stringify({
      period: tierConfig.period,
      interval: tierConfig.interval,
      item: {
        name: `OlympiadQuiz ${tierConfig.label}`,
        amount: tierConfig.priceInr * 100, // paise
        currency: "INR",
        description: "Unlimited test attempts on OlympiadQuiz",
      },
    }),
  });

  const plan = await response.json();
  if (plan.error) {
    throw new HttpsError("internal", "Razorpay plan creation failed: " + plan.error.description);
  }

  const secretName = tier === "diamond" ? "RAZORPAY_DIAMOND_PLAN_ID" : tier === "gold" ? "RAZORPAY_GOLD_PLAN_ID" : "RAZORPAY_SILVER_PLAN_ID";
  console.log(`${tierConfig.label} Plan created:`, plan.id, `- set this as ${secretName}.`);
  return { planId: plan.id };
});

/**
 * Callable. Creates a Razorpay Subscription for the logged-in user against
 * the requested tier's plan ("silver", "gold", or "diamond"). Returns just enough for
 * the frontend to open Razorpay Checkout in subscription mode
 * (subscription_id instead of order_id) - actual isPremium/premiumExpiresAt/
 * premiumTier is only ever set by the webhook below, never here (this
 * function only creates the subscription object, it doesn't know whether
 * the user actually completes payment).
 */
exports.createPremiumSubscription = onCall({
  secrets: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET", ...ALL_PLAN_ID_SECRETS],
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in to subscribe.");
  }
  const tier = request.data?.tier;
  const tierConfig = PREMIUM_TIERS[tier];
  if (!tierConfig) {
    throw new HttpsError("invalid-argument", `tier must be one of: ${Object.keys(PREMIUM_TIERS).join(", ")}`);
  }
  const planId = tierConfig.planId;
  if (!planId) {
    throw new HttpsError("failed-precondition", `The ${tierConfig.label} plan isn't configured yet.`);
  }

  const uid = request.auth.uid;
  const response = await fetch(`${RAZORPAY_API_BASE}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": razorpayAuthHeader(),
    },
    body: JSON.stringify({
      plan_id: planId,
      customer_notify: 1,
      total_count: tierConfig.totalCount, // Razorpay requires a fixed count; picked per-tier to be effectively "until cancelled"
      notes: { uid, tier }, // read back in the webhook payload to identify the user + tier
    }),
  });

  const subscription = await response.json();
  if (subscription.error) {
    throw new HttpsError("internal", "Razorpay subscription creation failed: " + subscription.error.description);
  }

  await db.collection("users").doc(uid).set({
    razorpaySubscriptionId: subscription.id,
  }, { merge: true });

  return {
    subscriptionId: subscription.id,
    keyId: process.env.RAZORPAY_KEY_ID,
  };
});

/**
 * Sets the user's Premium status from a subscription id, looking the uid
 * up via razorpaySubscriptionId (set in createPremiumSubscription above) -
 * webhooks don't carry Firebase auth context, only the notes.uid we passed
 * in at subscription-creation time, which is used as a fallback below.
 */
async function setPremiumBySubscriptionId(subscriptionId, notesUid, updates) {
  let uid = notesUid || null;
  if (!uid) {
    const matches = await db.collection("users").where("razorpaySubscriptionId", "==", subscriptionId).limit(1).get();
    if (matches.empty) {
      console.warn("razorpayWebhook: no user found for subscription", subscriptionId);
      return;
    }
    uid = matches.docs[0].id;
  }
  await db.collection("users").doc(uid).set(updates, { merge: true });
}

/**
 * Razorpay webhook (onRequest, not onCall - Razorpay calls this directly,
 * there's no Firebase Auth context on the request). Signature verification
 * is mandatory and checked BEFORE trusting any payload content - uses the
 * raw request body (request.rawBody), not a re-serialized JSON.stringify,
 * since Razorpay computes the HMAC over the exact bytes it sent and any
 * re-serialization could silently produce a different byte sequence.
 *
 * Register this function's URL in the Razorpay Dashboard (Settings ->
 * Webhooks), subscribing to: subscription.activated, subscription.charged,
 * subscription.cancelled, subscription.completed, subscription.halted,
 * payment.failed. Copy the "Webhook Secret" shown there and set it via:
 *   firebase functions:secrets:set RAZORPAY_WEBHOOK_SECRET
 *
 * payment.failed is logged (paymentFailures collection) for visibility but
 * deliberately does NOT revoke isPremium on its own - Razorpay auto-retries
 * a failed renewal charge over several days before giving up, and a single
 * failure is usually transient (temporary insufficient balance, a bank OTP
 * timeout, etc.), not an actual cancellation. Only subscription.halted
 * (retries exhausted), subscription.cancelled, and subscription.completed
 * revoke access - punishing a paying customer for one transient failure
 * that resolves itself on retry would be wrong.
 */
exports.razorpayWebhook = onRequest({
  secrets: ["RAZORPAY_WEBHOOK_SECRET", ...ALL_PLAN_ID_SECRETS],
}, async (req, res) => {
  const signature = req.headers["x-razorpay-signature"];
  if (!signature) {
    res.status(400).send("Missing signature.");
    return;
  }

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(req.rawBody)
    .digest("hex");

  if (expectedSignature !== signature) {
    console.error("razorpayWebhook: signature mismatch - rejecting.");
    res.status(400).send("Invalid signature.");
    return;
  }

  const event = req.body.event;
  const subEntity = req.body.payload?.subscription?.entity;
  const subscriptionId = subEntity?.id;
  const notesUid = subEntity?.notes?.uid;

  if (!subscriptionId) {
    // Not a subscription-related event we care about (e.g. a plain
    // payment.failed for a one-off order) - acknowledge and ignore.
    res.status(200).send("ignored");
    return;
  }

  // Tier comes primarily from notes.tier (set at subscription-creation
  // time in createPremiumSubscription above); falls back to matching
  // plan_id against the configured tiers for older subscriptions created
  // before notes.tier existed.
  function resolveTier() {
    if (subEntity.notes?.tier && PREMIUM_TIERS[subEntity.notes.tier]) return subEntity.notes.tier;
    const planId = subEntity.plan_id;
    for (const [tierKey, tierConfig] of Object.entries(PREMIUM_TIERS)) {
      if (tierConfig.planId && tierConfig.planId === planId) return tierKey;
    }
    return null;
  }

  try {
    switch (event) {
      // Fires once, the first time a subscription's payment succeeds - the
      // only point where we know the true subscription start date. Records
      // premiumStartedAt (from Razorpay's start_at) so the admin panel's
      // Premium Subscriptions view can show it; subscription.charged below
      // (fired on every renewal) deliberately does NOT touch this field.
      case "subscription.activated": {
        const premiumExpiresAt = subEntity.current_end
          ? admin.firestore.Timestamp.fromMillis(subEntity.current_end * 1000)
          : null;
        const premiumStartedAt = subEntity.start_at
          ? admin.firestore.Timestamp.fromMillis(subEntity.start_at * 1000)
          : admin.firestore.FieldValue.serverTimestamp();
        await setPremiumBySubscriptionId(subscriptionId, notesUid, {
          isPremium: true,
          premiumExpiresAt,
          premiumTier: resolveTier(),
          razorpaySubscriptionId: subscriptionId,
          premiumStartedAt,
          premiumCancelledAt: null,
        });
        break;
      }
      case "subscription.charged": {
        const premiumExpiresAt = subEntity.current_end
          ? admin.firestore.Timestamp.fromMillis(subEntity.current_end * 1000)
          : null;
        await setPremiumBySubscriptionId(subscriptionId, notesUid, {
          isPremium: true,
          premiumExpiresAt,
          premiumTier: resolveTier(),
          razorpaySubscriptionId: subscriptionId,
        });
        break;
      }
      case "subscription.cancelled":
      case "subscription.completed":
      case "subscription.halted": {
        await setPremiumBySubscriptionId(subscriptionId, notesUid, {
          isPremium: false,
          premiumCancelledAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        break;
      }
      case "payment.failed": {
        // Visibility only - does NOT touch isPremium. See doc comment above.
        const paymentEntity = req.body.payload?.payment?.entity;
        console.warn("razorpayWebhook: payment.failed for subscription", subscriptionId, "- isPremium NOT revoked (waiting for halted/cancelled/completed).");
        await db.collection(COLLECTIONS.PAYMENT_FAILURES).add({
          subscriptionId,
          uid: notesUid || null,
          errorCode: paymentEntity?.error_code || null,
          errorDescription: paymentEntity?.error_description || null,
          amount: paymentEntity?.amount ?? null,
          occurredAt: admin.firestore.FieldValue.serverTimestamp(),
        });
        break;
      }
      default:
        console.log("razorpayWebhook: unhandled event type", event);
    }
    res.status(200).send("ok");
  } catch (error) {
    console.error("razorpayWebhook: error processing event", event, error);
    // 500 so Razorpay retries delivery later instead of silently dropping it.
    res.status(500).send("processing error");
  }
});
