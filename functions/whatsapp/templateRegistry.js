/**
 * =====================================================================
 * WHATSAPP TEMPLATE REGISTRY
 * =====================================================================
 * Single source of truth for every WhatsApp template this app sends
 * through automated triggers or the admin panel's campaign tools.
 * sendTemplate() (whatsappService.js) looks templates up here first -
 * adding a new template the app has real automation/marketing logic for
 * means adding one entry below; sendTemplate() itself never changes.
 *
 * Templates NOT listed here (e.g. an admin picks an arbitrary approved
 * template from the live Meta-synced list for a one-off ad-hoc send)
 * still work via sendTemplate()'s fallback path - this registry is a
 * strict gate only for templates the app has deliberately staged.
 *
 * status:
 *   "ACTIVE"  - approved in Meta AND safe to send right now.
 *   "PENDING" - NOT safe to send yet (not approved, or details below
 *               are still placeholders). sendTemplate() hard-refuses
 *               any PENDING template from every send path (automated
 *               trigger, Send Individual, Broadcast) - this is the
 *               enforcement mechanism, not just a convention.
 *
 * language/category/header MUST match what Meta actually has stored -
 * verify via `GET /{waba_id}/message_templates?name=...` before trusting
 * anything else. The WhatsApp Manager UI's "English" label does NOT
 * reliably tell you the API language code - assuming "English" -> en_US
 * caused every oq_account_created_v1 send to fail with Meta error
 * #132001 ("Template name does not exist in the translation") earlier
 * this session; the real stored value was "en". Re-verify per template,
 * don't copy the language code from a spec/ticket without checking.
 * =====================================================================
 */

const { ACCOUNT_CREATED_HEADER_IMAGE_URL, OLYMPIADQUIZ_LOGO_URL, DEFAULT_LANGUAGE } = require("./templates");

const REGISTRY = {
  // -------------------------------------------------------------------
  // Currently approved & active
  // -------------------------------------------------------------------
  oq_account_created_v1: {
    name: "oq_account_created_v1",
    category: "UTILITY",
    language: "en", // verified via Graph API 2026-07-22
    status: "ACTIVE",
    header: { type: "IMAGE", defaultMediaUrl: ACCOUNT_CREATED_HEADER_IMAGE_URL },
    variableCount: 1, // {{1}} = full name
    trigger: "Automatic - immediately after registrationCompleted flips to true (any signup method).",
  },
  oq_free_mock_tests_v1: {
    name: "oq_free_mock_tests_v1",
    category: "MARKETING",
    language: "en", // verified via Graph API 2026-07-22 (spec said en_US - wrong, see file header)
    status: "ACTIVE",
    header: { type: "IMAGE", defaultMediaUrl: ACCOUNT_CREATED_HEADER_IMAGE_URL },
    variableCount: 0,
    trigger: "Manual only - Send Individual / Broadcast campaigns. No automatic trigger.",
  },
  oq_live_test_promotion_v1: {
    name: "oq_live_test_promotion_v1",
    category: "MARKETING",
    language: "en", // verified via Graph API 2026-07-24 (spec said en_US - wrong, same recurring gotcha)
    status: "ACTIVE",
    header: { type: "IMAGE", defaultMediaUrl: ACCOUNT_CREATED_HEADER_IMAGE_URL }, // reuse existing banner until a dedicated live-test banner is uploaded
    variableCount: 8, // name, testName, className, testDate, testTime, testPrice, couponCode, discountedPrice
    trigger: "Manual only - Broadcast campaigns, session-driven (see functions/whatsapp/liveTestData.js). No automatic trigger.",
  },
  oq_live_test_result_v1: {
    name: "oq_live_test_result_v1",
    category: "UTILITY",
    language: "en", // verified via Graph API 2026-07-24 (spec said en_US - wrong)
    status: "ACTIVE",
    // Verified via Graph API: this template's header format is TEXT ("LIVE
    // TEST RESULT"), NOT an image as an earlier spec claimed - a static
    // text header needs no media parameter at send time.
    header: { type: "NONE" },
    variableCount: 7, // name, testName, className, score, total, rank, percentile
    trigger: "Automatic - notifyWhatsAppOnResult (index.js), per student immediately on their live-test leaderboard write. Also sendable as a manual per-session campaign. This is the real approved name - supersedes the old oq_live_result_v1 guess below.",
  },

  // -------------------------------------------------------------------
  // Pre-existing production templates (unchanged behavior - registered
  // here so they also route through sendTemplate() like everything else).
  // -------------------------------------------------------------------
  otp_verification: {
    name: "otp_verification", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 3, trigger: "Manual - sendOTP()/generateAndSendOtp() (not the site's Firebase Auth OTP).",
  },
  payment_success: {
    name: "payment_success", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 4, trigger: "Manual - sendPaymentSuccess().",
  },
  registration_success: {
    name: "registration_success", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 4, trigger: "Manual - sendRegistrationSuccess().",
  },
  reminder_24h: {
    name: "reminder_24h", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 3, trigger: "Automatic - whatsappReminder24h cron (scheduler.js).",
  },
  reminder_1h: {
    name: "reminder_1h", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 3, trigger: "Automatic - whatsappReminder1h cron (scheduler.js).",
  },
  result_notification: {
    name: "result_notification", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 5, trigger: "Manual - sendResult().",
  },
  certificate_ready: {
    name: "certificate_ready", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 2, trigger: "Defined but not wired to any trigger yet (see sendCertificate()).",
  },
  weekly_newsletter: {
    name: "weekly_newsletter", category: "MARKETING", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 2, trigger: "Automatic - whatsappWeeklyNewsletter cron (scheduler.js).",
  },
  festival_greeting: {
    name: "festival_greeting", category: "MARKETING", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 2, trigger: "Automatic - whatsappFestivalGreeting cron (scheduler.js).",
  },
  birthday_greeting: {
    name: "birthday_greeting", category: "MARKETING", language: DEFAULT_LANGUAGE, status: "ACTIVE",
    header: { type: "NONE" }, variableCount: 1, trigger: "Automatic - whatsappBirthdayGreeting cron (scheduler.js).",
  },
  // -------------------------------------------------------------------
  // Future templates - registered so the architecture already supports
  // them, but PENDING (unsendable via any path) until each is verified
  // APPROVED in Meta and its real language/header/variableCount replace
  // these placeholders. notifyWhatsAppOnPurchase/notifyWhatsAppOnResult
  // (index.js) already call sendLiveRegistrationWhatsApp/sendResultWhatsApp
  // in production, but both target names below were confirmed NOT FOUND
  // via a direct Graph API query this session (GET .../message_templates)
  // - so those triggers already fail today (harmlessly - errors are
  // caught and logged, nothing crashes); marking PENDING here just makes
  // that explicit and matches the spec's own "Pending Approval" label for
  // oq_live_test_registration_v1, instead of relying on Meta to reject an
  // unknown template name on every attempt.
  oq_live_test_registration_v1: {
    name: "oq_live_test_registration_v1", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "PENDING",
    header: { type: "IMAGE", defaultMediaUrl: OLYMPIADQUIZ_LOGO_URL }, variableCount: 4,
    trigger: "Automatic once ACTIVE - notifyWhatsAppOnPurchase (index.js). Confirmed NOT in Meta yet - re-verify via Graph API before flipping to ACTIVE.",
  },
  oq_live_result_v1: {
    name: "oq_live_result_v1", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "PENDING",
    header: { type: "IMAGE", defaultMediaUrl: OLYMPIADQUIZ_LOGO_URL }, variableCount: 2,
    trigger: "SUPERSEDED - Meta approved 'oq_live_test_result_v1' (with 'test') instead, registered above and now wired to notifyWhatsAppOnResult. This name was never created in Meta; kept PENDING (unsendable) rather than deleted in case it's ever revived under this exact name.",
  },
  oq_test_reminder_v1: {
    name: "oq_test_reminder_v1", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "PENDING",
    header: { type: "IMAGE", defaultMediaUrl: OLYMPIADQUIZ_LOGO_URL }, variableCount: null, trigger: "Not yet approved in Meta.",
  },
  oq_payment_confirmation_v1: {
    name: "oq_payment_confirmation_v1", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "PENDING",
    header: { type: "IMAGE", defaultMediaUrl: OLYMPIADQUIZ_LOGO_URL }, variableCount: null, trigger: "Not yet approved in Meta.",
  },
  oq_certificate_available_v1: {
    name: "oq_certificate_available_v1", category: "UTILITY", language: DEFAULT_LANGUAGE, status: "PENDING",
    header: { type: "IMAGE", defaultMediaUrl: OLYMPIADQUIZ_LOGO_URL }, variableCount: null, trigger: "Not yet approved in Meta.",
  },
  oq_live_quiz_promo_v1: {
    name: "oq_live_quiz_promo_v1", category: "MARKETING", language: DEFAULT_LANGUAGE, status: "PENDING",
    header: { type: "IMAGE", defaultMediaUrl: OLYMPIADQUIZ_LOGO_URL }, variableCount: null, trigger: "Not yet approved in Meta.",
  },
  oq_live_quiz_reminder_v1: {
    name: "oq_live_quiz_reminder_v1", category: "MARKETING", language: DEFAULT_LANGUAGE, status: "PENDING",
    header: { type: "IMAGE", defaultMediaUrl: OLYMPIADQUIZ_LOGO_URL }, variableCount: null, trigger: "Not yet approved in Meta.",
  },
};

function get(templateName) {
  return REGISTRY[templateName] || null;
}

function list() {
  return Object.values(REGISTRY);
}

function isActive(templateName) {
  return REGISTRY[templateName]?.status === "ACTIVE";
}

module.exports = { REGISTRY, get, list, isActive };
