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
// Free-tier daily rate limit
// ---------------------------------------------------------------------
const FREE_TEST_LIMIT = 2;              // attempts allowed per calendar day
// India has no DST, so a fixed UTC+5:30 offset is always correct for
// computing "today"/"tomorrow" boundaries - no timezone library needed.
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;
const ABANDON_VOID_WINDOW_MINUTES = 2;   // an attempt with 0 answers older than this doesn't count

// Only these test types are rate-limited. Live championship tests
// (isChampionship / test_sessions-based) already have their own per-session
// Razorpay Orders paywall and are deliberately NOT double-gated here.
const RATE_LIMITED_TEST_TYPES = ["chapterwise", "mock", "hots"];

// ---------------------------------------------------------------------
// Premium subscription - three tiers, all grant the same unlimited-tests
// bypass in canStartTest (isPremium is a single boolean regardless of
// tier); premiumTier ("silver"|"gold"|"diamond") is stored on the user doc
// to tell them apart for display and for the live-test credit perk below.
// totalCount is Razorpay's required subscription cycle count - picked per
// tier so each renews for roughly 10 years before Razorpay would need a
// fresh subscription (silver/monthly=120, gold/quarterly=40, diamond/
// yearly=10), effectively "until cancelled" for any real subscriber.
// ---------------------------------------------------------------------
const PREMIUM_TIERS = {
  silver: {
    label: "Silver",
    priceInr: 199,
    period: "monthly",
    interval: 1, // bill every 1 month
    totalCount: 120,
    // Set once createPremiumPlan (see subscriptions.js) has been run for
    // this tier and its plan_id captured - createPremiumSubscription reads
    // this at call time.
    planId: process.env.RAZORPAY_SILVER_PLAN_ID || process.env.RAZORPAY_PREMIUM_PLAN_ID || null,
  },
  gold: {
    label: "Gold",
    priceInr: 399,
    period: "monthly",
    interval: 3, // bill every 3 months (quarterly)
    totalCount: 40,
    planId: process.env.RAZORPAY_GOLD_PLAN_ID || null,
  },
  diamond: {
    label: "Diamond",
    priceInr: 999,
    period: "yearly",
    interval: 1, // bill every 1 year
    totalCount: 10,
    planId: process.env.RAZORPAY_DIAMOND_PLAN_ID || null,
  },
};

// ---------------------------------------------------------------------
// All India Live Test credits included free each calendar month for
// Gold/Diamond subscribers (Silver doesn't include any - same pay-per-test
// pricing as a free user). Value below is display-only, matching the
// live-test entry fee (see LIVE_TEST_CREDIT_VALUE_INR) so the pricing card
// can show "worth ₹X" - the actual per-session price is still set wherever
// live.html reads it, this constant is not the source of truth for that.
// ---------------------------------------------------------------------
const LIVE_TEST_MONTHLY_CREDITS = {
  gold: 2,
  diamond: 4,
};
const LIVE_TEST_CREDIT_VALUE_INR = 99;

// Tiers that include free 1:1 guidance ahead of upcoming Olympiads -
// display-only flag; the guidance itself is delivered manually (e.g. via
// WhatsApp/email outreach), not something this codebase automates.
const PERSONAL_GUIDANCE_TIERS = ["diamond"];

// ---------------------------------------------------------------------
// Firestore collection names
// ---------------------------------------------------------------------
const COLLECTIONS = {
  TEST_ATTEMPTS: "testAttempts",
  PAYMENT_FAILURES: "paymentFailures", // visibility log only - never gates isPremium on its own
  LIVE_TEST_CREDIT_CLAIMS: "liveTestCreditClaims",
};

module.exports = {
  admin,
  db,
  FREE_TEST_LIMIT,
  IST_OFFSET_MS,
  ABANDON_VOID_WINDOW_MINUTES,
  RATE_LIMITED_TEST_TYPES,
  PREMIUM_TIERS,
  LIVE_TEST_MONTHLY_CREDITS,
  LIVE_TEST_CREDIT_VALUE_INR,
  PERSONAL_GUIDANCE_TIERS,
  COLLECTIONS,
};
