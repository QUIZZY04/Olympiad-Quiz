/**
 * =====================================================================
 * PREMIUM / TEST-ATTEMPT RATE LIMITING - SHARED CONFIGURATION
 * =====================================================================
 * Every tunable number for the free-tier rate limit and the Premium
 * subscription lives here ONLY - nothing in testLimits.js, subscriptions.js,
 * or the frontend widgets hardcodes these. The frontend never needs to
 * know FREE_TEST_LIMIT/WINDOW_HOURS itself - canStartTest() returns them
 * (and the live unlocksAt) in its response, so the UI is purely reactive
 * to whatever the server says.
 * =====================================================================
 */

const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

// ---------------------------------------------------------------------
// Free-tier rolling window rate limit
// ---------------------------------------------------------------------
const FREE_TEST_LIMIT = 2;              // attempts allowed per rolling window
const FREE_TEST_WINDOW_HOURS = 4;       // rolling window size
const ABANDON_VOID_WINDOW_MINUTES = 2;   // an attempt with 0 answers older than this doesn't count

// Only these test types are rate-limited. Live championship tests
// (isChampionship / test_sessions-based) already have their own per-session
// Razorpay Orders paywall and are deliberately NOT double-gated here.
const RATE_LIMITED_TEST_TYPES = ["chapterwise", "mock", "hots"];

// ---------------------------------------------------------------------
// Premium subscription
// ---------------------------------------------------------------------
const PREMIUM_PRICE_INR = 299;
const PREMIUM_PLAN_PERIOD = "monthly";
const PREMIUM_PLAN_INTERVAL = 1; // bill every 1 month
// Set once createPremiumPlan (see subscriptions.js) has been run and its
// plan_id captured - every createPremiumSubscription call references this.
const PREMIUM_PLAN_ID = process.env.RAZORPAY_PREMIUM_PLAN_ID || null;

// ---------------------------------------------------------------------
// Firestore collection names
// ---------------------------------------------------------------------
const COLLECTIONS = {
  TEST_ATTEMPTS: "testAttempts",
  PAYMENT_FAILURES: "paymentFailures", // visibility log only - never gates isPremium on its own
};

module.exports = {
  admin,
  db,
  FREE_TEST_LIMIT,
  FREE_TEST_WINDOW_HOURS,
  ABANDON_VOID_WINDOW_MINUTES,
  RATE_LIMITED_TEST_TYPES,
  PREMIUM_PRICE_INR,
  PREMIUM_PLAN_PERIOD,
  PREMIUM_PLAN_INTERVAL,
  PREMIUM_PLAN_ID,
  COLLECTIONS,
};
