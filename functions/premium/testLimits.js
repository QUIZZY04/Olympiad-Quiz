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
 * day's count computed on the fly in filterCountedAttempts() below -
 * there's no need for a separate scheduled sweep job, since the only place
 * this distinction matters is right here, at count time.
 * =====================================================================
 */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const {
  admin,
  db,
  FREE_TEST_LIMIT,
  FREE_TEST_WEEKLY_LIMIT,
  SILVER_DAILY_LIMIT,
  SILVER_MONTHLY_LIMIT,
  IST_OFFSET_MS,
  ABANDON_VOID_WINDOW_MINUTES,
  RATE_LIMITED_TEST_TYPES,
  COLLECTIONS,
} = require("./config");

const DAY_MS = 24 * 60 * 60 * 1000;
const VOID_CUTOFF_MS = ABANDON_VOID_WINDOW_MINUTES * 60 * 1000;

/**
 * Calendar-day boundaries in IST for whichever instant `nowMs` falls in.
 * A free user's daily attempt resets at 00:00 IST, not on a rolling 24h
 * timer - so someone who tests at 11:55pm is blocked until midnight (~5 min
 * later), not until ~11:55pm the next day.
 * @param {number} nowMs
 * @returns {{startOfDayMs: number, startOfNextDayMs: number}}
 */
function getIstDayBounds(nowMs) {
  const shifted = nowMs + IST_OFFSET_MS;
  const startOfDayMs = Math.floor(shifted / DAY_MS) * DAY_MS - IST_OFFSET_MS;
  return { startOfDayMs, startOfNextDayMs: startOfDayMs + DAY_MS };
}

/**
 * Calendar-week boundaries in IST (Monday 00:00 - the following Monday
 * 00:00), for whichever instant `nowMs` falls in.
 * @param {number} nowMs
 * @returns {{startOfWeekMs: number, startOfNextWeekMs: number}}
 */
function getIstWeekBounds(nowMs) {
  const { startOfDayMs } = getIstDayBounds(nowMs);
  const shiftedDay = new Date(startOfDayMs + IST_OFFSET_MS);
  const isoDow = shiftedDay.getUTCDay() || 7; // Mon=1 ... Sun=7 (getUTCDay: Sun=0)
  const startOfWeekMs = startOfDayMs - (isoDow - 1) * DAY_MS;
  return { startOfWeekMs, startOfNextWeekMs: startOfWeekMs + 7 * DAY_MS };
}

/**
 * Calendar-month boundaries in IST (1st 00:00 - the 1st of the next month
 * 00:00), for whichever instant `nowMs` falls in. Used for Silver's monthly
 * cap - always a superset of the day/week windows, so a single query scoped
 * to the month start covers the free tier's day+week caps AND Silver's
 * day+month caps without needing separate queries per tier.
 * @param {number} nowMs
 * @returns {{startOfMonthMs: number, startOfNextMonthMs: number}}
 */
function getIstMonthBounds(nowMs) {
  const shifted = new Date(nowMs + IST_OFFSET_MS);
  const y = shifted.getUTCFullYear();
  const m = shifted.getUTCMonth();
  return {
    startOfMonthMs: Date.UTC(y, m, 1) - IST_OFFSET_MS,
    startOfNextMonthMs: Date.UTC(y, m + 1, 1) - IST_OFFSET_MS,
  };
}

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

/**
 * @param {FirebaseFirestore.DocumentData} data - the users/{uid} doc data (or {} if it doesn't exist).
 * @returns {boolean} true if isPremium is set and not expired.
 */
function isPremiumActive(data) {
  if (data.isPremium !== true) return false;
  if (!data.premiumExpiresAt) return true; // no expiry on file - treat as active
  const expiresMs = data.premiumExpiresAt.toMillis ? data.premiumExpiresAt.toMillis() : 0;
  return expiresMs > Date.now();
}

/**
 * Callable. Call before rendering any chapterwise/mock/HOTS test.
 *
 * @param {{testType: string, testId?: string, dryRun?: boolean}} request.data
 *   dryRun:true checks the limit WITHOUT creating an attempt record - used
 *   by the selection pages (chapterwise.html/mock.html/hots.html) to decide
 *   whether to navigate to quiz.html at all, so a blocked user sees the
 *   pricing modal right there instead of a flash of quiz.html before it
 *   bounces them back. quiz.html itself still calls this WITHOUT dryRun
 *   right before rendering - that's the one authoritative, attempt-
 *   creating call; the dry-run pre-check never writes anything, so the
 *   two calls together never double-count a single test as 2 attempts.
 * @returns {{allowed: true, attemptId?: string, isPremium?: true, remaining?: number, limit?: number} |
 *           {allowed: false, unlocksAt: number, limit: number}}
 */
exports.canStartTest = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in to start a test.");
  }
  const uid = request.auth.uid;
  const { testType, testId, dryRun } = request.data || {};

  // Only chapterwise/mock/HOTS are rate-limited - live championship tests
  // already have their own per-session Razorpay paywall and aren't
  // double-gated here. Anything else just passes through with no tracking.
  if (!RATE_LIMITED_TEST_TYPES.includes(testType)) {
    return { allowed: true };
  }

  // The user-doc read and the attempt-window query are independent - run
  // them concurrently to cut this function's own latency roughly in half.
  // The query is always scoped to the MONTH start, not day/week - that's
  // the broadest window any tier below Gold/Diamond ever needs (Silver's
  // monthly cap; the free tier's day+week caps are just narrower, client-
  // side filters of this same result set), so one query serves all of them.
  const now = Date.now();
  const { startOfDayMs, startOfNextDayMs } = getIstDayBounds(now);
  const { startOfWeekMs, startOfNextWeekMs } = getIstWeekBounds(now);
  const { startOfMonthMs, startOfNextMonthMs } = getIstMonthBounds(now);
  const monthStart = admin.firestore.Timestamp.fromMillis(startOfMonthMs);
  const [userSnap, snap] = await Promise.all([
    db.collection("users").doc(uid).get(),
    db.collection(COLLECTIONS.TEST_ATTEMPTS)
      .where("uid", "==", uid)
      .where("startedAt", ">=", monthStart)
      .orderBy("startedAt", "asc")
      .get(),
  ]);

  const userData = userSnap.exists ? userSnap.data() : {};
  const isPremium = isPremiumActive(userData);
  const tier = userData.premiumTier;

  const createAttempt = (premiumAtStart) => db.collection(COLLECTIONS.TEST_ATTEMPTS).add({
    uid,
    testId: testId || null,
    testType,
    startedAt: admin.firestore.FieldValue.serverTimestamp(),
    completedAt: null,
    questionsAnswered: 0,
    voided: false,
    premiumAtStart,
  });

  // Gold/Diamond: fully unlimited, no tracking needed beyond the attempt
  // record itself (kept for analytics/admin visibility, never counted).
  if (isPremium && (tier === "gold" || tier === "diamond")) {
    if (dryRun) return { allowed: true, isPremium: true };
    const attemptRef = await createAttempt(true);
    return { allowed: true, attemptId: attemptRef.id, isPremium: true };
  }

  const monthCounted = filterCountedAttempts(snap.docs); // this month's counted attempts
  const dailyCounted = monthCounted.filter((docSnap) => {
    const startedAtMs = docSnap.data().startedAt?.toMillis ? docSnap.data().startedAt.toMillis() : 0;
    return startedAtMs >= startOfDayMs;
  });

  // Silver: capped, not unlimited - 4/day AND 40/month, both must be satisfied.
  if (isPremium && tier === "silver") {
    if (dailyCounted.length >= SILVER_DAILY_LIMIT) {
      return { allowed: false, unlocksAt: startOfNextDayMs, limit: SILVER_DAILY_LIMIT, isPremium: true };
    }
    if (monthCounted.length >= SILVER_MONTHLY_LIMIT) {
      return { allowed: false, unlocksAt: startOfNextMonthMs, limit: SILVER_MONTHLY_LIMIT, isPremium: true };
    }
    const remaining = Math.min(
      SILVER_DAILY_LIMIT - dailyCounted.length - 1,
      SILVER_MONTHLY_LIMIT - monthCounted.length - 1
    );
    if (dryRun) return { allowed: true, isPremium: true, remaining, limit: SILVER_DAILY_LIMIT };
    const attemptRef = await createAttempt(true);
    return { allowed: true, attemptId: attemptRef.id, isPremium: true, remaining, limit: SILVER_DAILY_LIMIT };
  }

  // Free tier: 1/day AND 4/week, both must be satisfied. The week window is
  // narrower than the month window already queried above.
  const weekCounted = monthCounted.filter((docSnap) => {
    const startedAtMs = docSnap.data().startedAt?.toMillis ? docSnap.data().startedAt.toMillis() : 0;
    return startedAtMs >= startOfWeekMs;
  });

  if (dailyCounted.length >= FREE_TEST_LIMIT) {
    return { allowed: false, unlocksAt: startOfNextDayMs, limit: FREE_TEST_LIMIT };
  }
  if (weekCounted.length >= FREE_TEST_WEEKLY_LIMIT) {
    return { allowed: false, unlocksAt: startOfNextWeekMs, limit: FREE_TEST_WEEKLY_LIMIT };
  }

  // Remaining reflects whichever cap is tighter after this attempt - with a
  // daily limit of 1, this is 0 the instant the day's attempt is used, so
  // it only ever shows as 1 right before the very first test of the day.
  const remaining = Math.min(
    FREE_TEST_LIMIT - dailyCounted.length - 1,
    FREE_TEST_WEEKLY_LIMIT - weekCounted.length - 1
  );

  if (dryRun) {
    return { allowed: true, remaining, limit: FREE_TEST_LIMIT };
  }

  const attemptRef = await createAttempt(false);

  return {
    allowed: true,
    attemptId: attemptRef.id,
    remaining,
    limit: FREE_TEST_LIMIT,
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
