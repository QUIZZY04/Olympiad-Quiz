/**
 * =====================================================================
 * FREE-TIER TEST ATTEMPT RATE LIMITING
 * =====================================================================
 * Enforced entirely server-side. A client can never bypass this by
 * skipping the frontend check - testAttempts docs can ONLY be created by
 * canStartTest (Firestore rules deny all direct client writes to that
 * collection, see firestore.rules), and premium status is read straight
 * from the user's Firestore doc here, never trusted from the client.
 *
 * "Abandoned" attempts (0 answers, started more than
 * ABANDON_VOID_WINDOW_MINUTES ago, never completed) are excluded from the
 * rolling-window count computed on the fly in countActiveAttempts() below -
 * there's no need for a separate scheduled sweep job, since the only place
 * this distinction matters is right here, at count time.
 * =====================================================================
 */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const {
  admin,
  db,
  FREE_TEST_LIMIT,
  FREE_TEST_WINDOW_HOURS,
  ABANDON_VOID_WINDOW_MINUTES,
  RATE_LIMITED_TEST_TYPES,
  COLLECTIONS,
} = require("./config");

const WINDOW_MS = FREE_TEST_WINDOW_HOURS * 60 * 60 * 1000;
const VOID_CUTOFF_MS = ABANDON_VOID_WINDOW_MINUTES * 60 * 1000;

/**
 * @param {FirebaseFirestore.QueryDocumentSnapshot[]} docs - attempts within the window, ordered by startedAt asc.
 * @returns {FirebaseFirestore.QueryDocumentSnapshot[]} the subset that actually count against the limit.
 */
function filterCountedAttempts(docs) {
  const now = Date.now();
  return docs.filter((docSnap) => {
    const data = docSnap.data();
    if (data.voided) return false;
    const startedAtMs = data.startedAt?.toMillis ? data.startedAt.toMillis() : 0;
    const isStaleAbandon = !data.completedAt && (data.questionsAnswered || 0) === 0 && (now - startedAtMs) > VOID_CUTOFF_MS;
    return !isStaleAbandon;
  });
}

async function isPremiumActive(uid) {
  const userSnap = await db.collection("users").doc(uid).get();
  if (!userSnap.exists) return false;
  const data = userSnap.data();
  if (data.isPremium !== true) return false;
  if (!data.premiumExpiresAt) return true; // no expiry on file - treat as active
  const expiresMs = data.premiumExpiresAt.toMillis ? data.premiumExpiresAt.toMillis() : 0;
  return expiresMs > Date.now();
}

/**
 * Callable. Call before rendering any chapterwise/mock/HOTS test.
 * @param {{testType: string, testId?: string}} request.data
 * @returns {{allowed: true, attemptId: string, isPremium?: true, remaining?: number, limit?: number, windowHours?: number} |
 *           {allowed: false, unlocksAt: number, limit: number, windowHours: number}}
 */
exports.canStartTest = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in to start a test.");
  }
  const uid = request.auth.uid;
  const { testType, testId } = request.data || {};

  // Only chapterwise/mock/HOTS are rate-limited - live championship tests
  // already have their own per-session Razorpay paywall and aren't
  // double-gated here. Anything else just passes through with no tracking.
  if (!RATE_LIMITED_TEST_TYPES.includes(testType)) {
    return { allowed: true };
  }

  if (await isPremiumActive(uid)) {
    const attemptRef = await db.collection(COLLECTIONS.TEST_ATTEMPTS).add({
      uid,
      testId: testId || null,
      testType,
      startedAt: admin.firestore.FieldValue.serverTimestamp(),
      completedAt: null,
      questionsAnswered: 0,
      voided: false,
      premiumAtStart: true,
    });
    return { allowed: true, attemptId: attemptRef.id, isPremium: true };
  }

  const windowStart = admin.firestore.Timestamp.fromMillis(Date.now() - WINDOW_MS);
  const snap = await db.collection(COLLECTIONS.TEST_ATTEMPTS)
    .where("uid", "==", uid)
    .where("startedAt", ">=", windowStart)
    .orderBy("startedAt", "asc")
    .get();

  const counted = filterCountedAttempts(snap.docs);

  if (counted.length >= FREE_TEST_LIMIT) {
    const oldest = counted[0];
    const oldestStartMs = oldest.data().startedAt.toMillis();
    return {
      allowed: false,
      unlocksAt: oldestStartMs + WINDOW_MS,
      limit: FREE_TEST_LIMIT,
      windowHours: FREE_TEST_WINDOW_HOURS,
    };
  }

  const attemptRef = await db.collection(COLLECTIONS.TEST_ATTEMPTS).add({
    uid,
    testId: testId || null,
    testType,
    startedAt: admin.firestore.FieldValue.serverTimestamp(),
    completedAt: null,
    questionsAnswered: 0,
    voided: false,
    premiumAtStart: false,
  });

  return {
    allowed: true,
    attemptId: attemptRef.id,
    remaining: FREE_TEST_LIMIT - counted.length - 1,
    limit: FREE_TEST_LIMIT,
    windowHours: FREE_TEST_WINDOW_HOURS,
  };
});

/**
 * Callable. Frontend calls this once, on the user's first answer selection -
 * enough signal to prove the attempt wasn't abandoned untouched, without
 * needing per-question sync.
 * @param {{attemptId: string}} request.data
 */
exports.markTestAttemptProgress = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "You must be logged in.");
  const { attemptId } = request.data || {};
  if (!attemptId) throw new HttpsError("invalid-argument", "attemptId is required.");

  const ref = db.collection(COLLECTIONS.TEST_ATTEMPTS).doc(attemptId);
  const snap = await ref.get();
  if (!snap.exists || snap.data().uid !== request.auth.uid) {
    throw new HttpsError("permission-denied", "That attempt doesn't belong to you.");
  }

  await ref.update({ questionsAnswered: admin.firestore.FieldValue.increment(1) });
  return { success: true };
});

/**
 * Callable. Frontend calls this once, alongside the existing leaderboard
 * write, when a test is finished/submitted.
 * @param {{attemptId: string}} request.data
 */
exports.completeTestAttempt = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "You must be logged in.");
  const { attemptId } = request.data || {};
  if (!attemptId) throw new HttpsError("invalid-argument", "attemptId is required.");

  const ref = db.collection(COLLECTIONS.TEST_ATTEMPTS).doc(attemptId);
  const snap = await ref.get();
  if (!snap.exists || snap.data().uid !== request.auth.uid) {
    throw new HttpsError("permission-denied", "That attempt doesn't belong to you.");
  }

  await ref.update({ completedAt: admin.firestore.FieldValue.serverTimestamp() });
  return { success: true };
});
