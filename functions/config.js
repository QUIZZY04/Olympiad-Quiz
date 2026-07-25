/**
 * =====================================================================
 * WHATSAPP CLOUD API - SHARED CONFIGURATION
 * =====================================================================
 * Central place for constants, Firebase Secret Manager secret names,
 * and the shared Firestore/Admin handles used across the `whatsapp/`
 * module. Nothing here touches any existing collection, secret, or
 * function used by the rest of the app.
 *
 * Secrets are NEVER hardcoded. They are declared here as NAME strings
 * only. The actual values live in Firebase Secret Manager and are
 * injected into `process.env` at runtime by Cloud Functions, but only
 * for functions that explicitly list the secret name in their
 * `secrets: [...]` option (same pattern already used for
 * BREVO_API_KEY / RAZORPAY_KEY_ID elsewhere in this codebase).
 *
 * Set the values once via the Firebase CLI, e.g.:
 *   firebase functions:secrets:set WHATSAPP_TOKEN
 *   firebase functions:secrets:set WHATSAPP_PHONE_NUMBER_ID
 *   firebase functions:secrets:set WHATSAPP_VERIFY_TOKEN
 *   firebase functions:secrets:set WHATSAPP_APP_SECRET
 *   firebase functions:secrets:set WHATSAPP_BUSINESS_ACCOUNT_ID
 * =====================================================================
 */

const admin = require("firebase-admin");

// Firebase Admin may already be initialized by functions/index.js. Guard
// against double-initialization so this file can also be required in
// isolation (unit tests, emulator shell) without crashing.
if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

// ---------------------------------------------------------------------
// Secret Manager secret NAMES (not values). Pass these into a function's
// `secrets: [...]` array, then read the real value from
// `process.env.<NAME>` inside that function at runtime.
// ---------------------------------------------------------------------
const SECRET_NAMES = {
  TOKEN: "WHATSAPP_TOKEN",                         // Permanent/system-user access token
  PHONE_NUMBER_ID: "WHATSAPP_PHONE_NUMBER_ID",     // Meta Phone Number ID
  VERIFY_TOKEN: "WHATSAPP_VERIFY_TOKEN",           // Custom string used for GET /webhook handshake
  APP_SECRET: "WHATSAPP_APP_SECRET",               // Meta App Secret, used to verify X-Hub-Signature-256
  BUSINESS_ACCOUNT_ID: "WHATSAPP_BUSINESS_ACCOUNT_ID", // WABA ID (optional, for template management)
  OPENAI_API_KEY: "OPENAI_API_KEY",                // OpenAI Responses API key (AI WhatsApp Assistant)
};

// Convenience array: pass this to any function's `secrets` option to make
// every WhatsApp secret available on process.env for that invocation.
const WHATSAPP_SECRETS = [
  SECRET_NAMES.TOKEN,
  SECRET_NAMES.PHONE_NUMBER_ID,
  SECRET_NAMES.APP_SECRET,
];

// The webhook GET-verification handshake only ever needs the verify token,
// so it gets its own (smaller) secret list.
const WEBHOOK_VERIFY_SECRETS = [SECRET_NAMES.VERIFY_TOKEN];

// Secrets needed by the AI Assistant engine (functions/whatsapp/aiEngine.js).
// Kept separate from WHATSAPP_SECRETS so non-AI functions never need to
// declare an OpenAI dependency.
const AI_SECRETS = [SECRET_NAMES.OPENAI_API_KEY];

// ---------------------------------------------------------------------
// Meta Graph API
// ---------------------------------------------------------------------
const GRAPH_API_VERSION = "v23.0";
const GRAPH_BASE_URL = `https://graph.facebook.com/${GRAPH_API_VERSION}`;

/**
 * Builds the Graph API endpoint used to send messages for the configured
 * WhatsApp Business phone number.
 * @param {string} phoneNumberId - value of process.env.WHATSAPP_PHONE_NUMBER_ID
 * @returns {string}
 */
function getMessagesEndpoint(phoneNumberId) {
  return `${GRAPH_BASE_URL}/${phoneNumberId}/messages`;
}

// ---------------------------------------------------------------------
// Firestore collection names used ONLY by this module. None of these
// collide with existing collections (users, purchases, leaderboard,
// test_sessions, smsLogs, userTokens, notificationLogs, feedback).
// ---------------------------------------------------------------------
const COLLECTIONS = {
  LOGS: "whatsapp_logs",                 // every inbound/outbound message
  PROCESSED_EVENTS: "whatsapp_processed_events", // webhook dedup ledger
  BROADCAST_LOGS: "whatsapp_broadcast_logs",     // summary per broadcast run
  OTP_CODES: "whatsapp_otp_codes",       // standalone WhatsApp OTP utility (NOT Firebase Auth)
  TEMPLATES: "whatsapp_templates",       // admin console: cached Meta template metadata
  SCHEDULE: "whatsapp_schedule",         // admin console: scheduled broadcasts
  SETTINGS: "whatsapp_settings",         // admin console: automation on/off + delay per type
  CONVERSATIONS: "whatsapp_conversations", // AI Assistant: one doc per WhatsApp number (uid link, status, lock)
  AI_SETTINGS: "whatsapp_ai_settings",     // AI Assistant: singleton config doc (enabled, model, prompt, FAQs)
  AI_LOGS: "whatsapp_ai_logs",             // AI Assistant: one doc per AI turn (tokens, cost, latency)
  HANDOVER: "whatsapp_handover",           // AI Assistant: human-handover requests
};

// Reuses the same single-admin model already hardcoded in index.js
// (request.auth.token.email !== "madhhu52@gmail.com") so admin-gated
// WhatsApp endpoints follow the exact same authorization rule as the
// existing sendBulkSMS / sendPushNotification functions.
const ADMIN_EMAIL = "madhhu52@gmail.com";

module.exports = {
  admin,
  db,
  SECRET_NAMES,
  WHATSAPP_SECRETS,
  WEBHOOK_VERIFY_SECRETS,
  AI_SECRETS,
  GRAPH_API_VERSION,
  GRAPH_BASE_URL,
  getMessagesEndpoint,
  COLLECTIONS,
  ADMIN_EMAIL,
};
