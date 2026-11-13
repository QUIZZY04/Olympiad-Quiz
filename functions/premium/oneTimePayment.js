/**
 * =====================================================================
 * PREMIUM - ONE-TIME (NO AUTO-RENEWAL) PAYMENT
 * =====================================================================
 * Parallel path to subscriptions.js's createPremiumSubscription /
 * razorpayWebhook pair. That pair ALWAYS creates a recurring Razorpay
 * Subscription (autopay mandate). This file is for the "Auto-Pay" toggle
 * unchecked case: a plain Razorpay Order (same API shape as
 * index.js's createRazorpayOrder, which is for live-test purchases and
 * hardcoded to that semantics) charged once for a tier's full period,
 * with NO mandate - premium simply expires at the end of that period
 * with no renewal, exactly like a free user's until they buy again.
 *
 * Deliberately a separate pair of functions rather than reusing
 * createRazorpayOrder/verifyRazorpayPayment: those are hardcoded to
 * live-test-session semantics (mandatory sessionId, writes only to
 * users/{uid}/purchases/{sessionId}, triggers the live-quiz registration
 * email) - overloading them for premium would conflate two different
 * products and misfire that trigger.
 * =====================================================================
 */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const crypto = require("crypto");
const { admin, db, PREMIUM_TIERS } = require("./config");

const RAZORPAY_API_BASE = "https://api.razorpay.com/v1";

function razorpayAuthHeader() {
  return "Basic " + Buffer.from(process.env.RAZORPAY_KEY_ID + ":" + process.env.RAZORPAY_KEY_SECRET).toString("base64");
}

/**
 * Callable. Creates a one-time Razorpay Order for the full price of one
 * billing period of `tier` (no recurring mandate attached).
 * @param {{tier: "silver"|"gold"|"diamond"}} request.data
 */
exports.createPremiumOrder = onCall({
  secrets: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"],
}, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "You must be logged in.");

  const tier = request.data?.tier;
  const tierConfig = PREMIUM_TIERS[tier];
  if (!tierConfig) throw new HttpsError("invalid-argument", "Invalid tier.");

  const uid = request.auth.uid;
  const amountPaise = Math.round(tierConfig.priceInr * 100);

  const response = await fetch(`${RAZORPAY_API_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: razorpayAuthHeader() },
    body: JSON.stringify({
      amount: amountPaise,
      currency: "INR",
      receipt: `prem1x_${uid.substring(0, 8)}_${Date.now()}`,
      notes: { uid, tier, purpose: "premium_onetime" },
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new HttpsError("internal", `Razorpay order creation failed: ${errText}`);
  }

  const order = await response.json();
  return {
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    keyId: process.env.RAZORPAY_KEY_ID,
    tier,
  };
});

/**
 * Callable. Verifies the Razorpay payment signature for a one-time
 * premium Order, then grants premium access for exactly one period
 * (tierConfig.interval months from now) with no auto-renewal -
 * razorpaySubscriptionId is explicitly cleared so nothing downstream
 * mistakes this for a recurring-mandate account.
 * @param {{razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string, tier: string}} request.data
 */
exports.verifyPremiumOrderPayment = onCall({
  secrets: ["RAZORPAY_KEY_SECRET"],
}, async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "You must be logged in.");

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, tier } = request.data || {};
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    throw new HttpsError("invalid-argument", "Missing payment verification fields.");
  }
  const tierConfig = PREMIUM_TIERS[tier];
  if (!tierConfig) throw new HttpsError("invalid-argument", "Invalid tier.");

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");
  if (expectedSignature !== razorpay_signature) {
    throw new HttpsError("permission-denied", "Payment signature verification failed.");
  }

  const uid = request.auth.uid;
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + tierConfig.interval);

  await db.collection("users").doc(uid).set({
    isPremium: true,
    premiumTier: tier,
    premiumExpiresAt: admin.firestore.Timestamp.fromDate(expiresAt),
    premiumStartedAt: admin.firestore.FieldValue.serverTimestamp(),
    autoPay: false,
    // Explicitly not a subscription - clears any stale value from a
    // previous recurring plan so nothing downstream treats this account
    // as having an active mandate.
    razorpaySubscriptionId: admin.firestore.FieldValue.delete(),
    premiumCancelledAt: admin.firestore.FieldValue.delete(),
  }, { merge: true });

  await db.collection("oneTimePremiumPayments").add({
    uid,
    tier,
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    amountInr: tierConfig.priceInr,
    expiresAt: admin.firestore.Timestamp.fromDate(expiresAt),
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return { success: true, premiumExpiresAt: expiresAt.toISOString() };
});
