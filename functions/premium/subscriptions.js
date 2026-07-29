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
  PREMIUM_PRICE_INR,
  PREMIUM_PLAN_PERIOD,
  PREMIUM_PLAN_INTERVAL,
} = require("./config");

const RAZORPAY_API_BASE = "https://api.razorpay.com/v1";

function razorpayAuthHeader() {
  return "Basic " + Buffer.from(process.env.RAZORPAY_KEY_ID + ":" + process.env.RAZORPAY_KEY_SECRET).toString("base64");
}

/**
 * One-time bootstrap, admin-only. Creates the recurring ₹299/month Plan in
 * Razorpay and returns its plan_id. Run this ONCE (e.g. from the browser
 * console on admin.html, or any authenticated admin context, via
 * httpsCallable), then:
 *   firebase functions:secrets:set RAZORPAY_PREMIUM_PLAN_ID
 * pasting the returned id as the value, and redeploy createPremiumSubscription.
 * Safe to call again if needed - Razorpay just creates another Plan object,
 * it doesn't mutate/duplicate-detect, so only ever run this when you
 * actually want a new Plan (e.g. changing the price later).
 */
exports.createPremiumPlan = onCall({
  secrets: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"],
}, async (request) => {
  if (!request.auth || request.auth.token.email !== ADMIN_EMAIL) {
    throw new HttpsError("permission-denied", "Admin only.");
  }

  const response = await fetch(`${RAZORPAY_API_BASE}/plans`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": razorpayAuthHeader(),
    },
    body: JSON.stringify({
      period: PREMIUM_PLAN_PERIOD,
      interval: PREMIUM_PLAN_INTERVAL,
      item: {
        name: "OlympiadQuiz Premium",
        amount: PREMIUM_PRICE_INR * 100, // paise
        currency: "INR",
        description: "Unlimited test attempts on OlympiadQuiz",
      },
    }),
  });

  const plan = await response.json();
  if (plan.error) {
    throw new HttpsError("internal", "Razorpay plan creation failed: " + plan.error.description);
  }

  console.log("Premium Plan created:", plan.id, "- set this as RAZORPAY_PREMIUM_PLAN_ID.");
  return { planId: plan.id };
});

/**
 * Callable. Creates a Razorpay Subscription for the logged-in user against
 * the configured Premium plan. Returns just enough for the frontend to
 * open Razorpay Checkout in subscription mode (subscription_id instead of
 * order_id) - actual isPremium/premiumExpiresAt is only ever set by the
 * webhook below, never here (this function only creates the subscription
 * object, it doesn't know whether the user actually completes payment).
 */
exports.createPremiumSubscription = onCall({
  secrets: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET", "RAZORPAY_PREMIUM_PLAN_ID"],
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in to subscribe.");
  }
  const planId = process.env.RAZORPAY_PREMIUM_PLAN_ID;
  if (!planId) {
    throw new HttpsError("failed-precondition", "Premium plan isn't configured yet.");
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
      total_count: 120, // 10 years of monthly cycles - Razorpay requires a count; this is effectively "until cancelled"
      notes: { uid }, // read back in the webhook payload to identify the user
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
 */
exports.razorpayWebhook = onRequest({
  secrets: ["RAZORPAY_WEBHOOK_SECRET"],
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

  try {
    switch (event) {
      case "subscription.activated":
      case "subscription.charged": {
        const premiumExpiresAt = subEntity.current_end
          ? admin.firestore.Timestamp.fromMillis(subEntity.current_end * 1000)
          : null;
        await setPremiumBySubscriptionId(subscriptionId, notesUid, {
          isPremium: true,
          premiumExpiresAt,
          razorpaySubscriptionId: subscriptionId,
        });
        break;
      }
      case "subscription.cancelled":
      case "subscription.completed":
      case "subscription.halted":
      case "payment.failed": {
        await setPremiumBySubscriptionId(subscriptionId, notesUid, {
          isPremium: false,
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
