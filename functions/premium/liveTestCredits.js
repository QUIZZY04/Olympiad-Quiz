/**
 * =====================================================================
 * GOLD / DIAMOND - INCLUDED ALL INDIA LIVE TEST CREDITS
 * =====================================================================
 * Gold and Diamond subscribers get a handful of All India Live Test
 * entries included free each calendar month (2 for Gold, 4 for Diamond -
 * see LIVE_TEST_MONTHLY_CREDITS in config.js). Silver and free users pay
 * the normal per-session Razorpay Orders price (see createRazorpayOrder/
 * verifyRazorpayPayment in index.js) - this file only handles the
 * plan-included path.
 *
 * live.html calls claimIncludedLiveTest BEFORE falling back to the paid
 * Razorpay flow. The monthly counter lives server-side in a transaction
 * (liveTestCreditClaims/{uid}_{yyyy-MM}) so a client can't just call this
 * repeatedly to get unlimited free entries - the increment and the
 * resulting purchases/{sessionId} doc are written atomically in the same
 * transaction, same collection/shape verifyRazorpayPayment already writes
 * to for a paid entry, so every downstream page that checks
 * users/{uid}/purchases/{sessionId} for access works unchanged.
 * =====================================================================
 */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const {
  admin,
  db,
  IST_OFFSET_MS,
  LIVE_TEST_MONTHLY_CREDITS,
  COLLECTIONS,
} = require("./config");

/** "YYYY-M" key for whichever IST calendar month `nowMs` falls in. */
function getIstMonthKey(nowMs) {
  const shifted = new Date(nowMs + IST_OFFSET_MS);
  return `${shifted.getUTCFullYear()}-${shifted.getUTCMonth()}`;
}

/**
 * Callable. Call right before starting checkout for a live test session -
 * if the user's plan still has a free credit left this month, this claims
 * one and unlocks the session directly (no Razorpay involved). Returns
 * granted:false (never throws for the "not eligible"/"quota exhausted"
 * cases) so the caller can just fall back to the normal paid flow.
 * @param {{sessionId: string}} request.data
 * @returns {{granted: boolean, alreadyClaimed?: true, remaining?: number, reason?: "not_eligible"|"quota_exhausted"}}
 */
exports.claimIncludedLiveTest = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in to register for a live test.");
  }
  const uid = request.auth.uid;
  const { sessionId } = request.data || {};
  if (!sessionId) {
    throw new HttpsError("invalid-argument", "sessionId is required.");
  }

  const userSnap = await db.collection("users").doc(uid).get();
  const userData = userSnap.exists ? userSnap.data() : {};
  const isPremium = userData.isPremium === true &&
    (!userData.premiumExpiresAt || (userData.premiumExpiresAt.toMillis ? userData.premiumExpiresAt.toMillis() : 0) > Date.now());
  const tier = userData.premiumTier;
  const quota = isPremium ? LIVE_TEST_MONTHLY_CREDITS[tier] : undefined;

  if (!quota) {
    return { granted: false, reason: "not_eligible" };
  }

  const purchaseRef = db.collection("users").doc(uid).collection("purchases").doc(sessionId);
  const monthKey = getIstMonthKey(Date.now());
  const claimRef = db.collection(COLLECTIONS.LIVE_TEST_CREDIT_CLAIMS).doc(`${uid}_${monthKey}`);

  return db.runTransaction(async (tx) => {
    const [purchaseSnap, claimSnap] = await Promise.all([tx.get(purchaseRef), tx.get(claimRef)]);

    if (purchaseSnap.exists) {
      return { granted: true, alreadyClaimed: true };
    }

    const usedSoFar = claimSnap.exists ? (claimSnap.data().count || 0) : 0;
    if (usedSoFar >= quota) {
      return { granted: false, reason: "quota_exhausted", remaining: 0 };
    }

    tx.set(purchaseRef, {
      paid: true,
      amount: 0,
      sessionId,
      planIncluded: true,
      premiumTier: tier,
      time: admin.firestore.FieldValue.serverTimestamp(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    tx.set(claimRef, {
      uid,
      month: monthKey,
      tier,
      count: usedSoFar + 1,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    return { granted: true, remaining: quota - usedSoFar - 1 };
  });
});
