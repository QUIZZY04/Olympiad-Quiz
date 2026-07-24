/**
 * =====================================================================
 * WHATSAPP SERVICE
 * =====================================================================
 * Reusable, transport-level functions for sending WhatsApp messages via
 * the Meta Cloud API, plus the higher-level notification helpers built
 * on top of them (OTP, payment success, registration success, reminders,
 * result, certificate, broadcast).
 *
 * This file has NO Cloud Function exports of its own (no onCall /
 * onRequest / onSchedule). It is a pure service layer, imported by
 * functions/index.js and functions/whatsapp/{webhook,scheduler}.js,
 * which are the only places actual Cloud Functions are declared. This
 * keeps a single, easy-to-audit list of every deployed endpoint.
 *
 * All functions here are async and safe to call concurrently.
 * =====================================================================
 */

const { getMessagesEndpoint, COLLECTIONS, db, admin } = require("../config");
const templates = require("./templates");
const templateRegistry = require("./templateRegistry");
const mediaService = require("./mediaService");
const liveTestData = require("./liveTestData");
const { logOutbound, logBroadcastSummary } = require("./messageLogger");

const FieldValue = admin.firestore.FieldValue;

// ---------------------------------------------------------------------
// Phone number helpers
// ---------------------------------------------------------------------

/**
 * Normalizes a phone number into the digits-only, country-code-prefixed
 * format the WhatsApp Cloud API expects (e.g. "919999999999"). Mirrors
 * the same normalization already used for SMS broadcast in index.js so
 * numbers stored in Firestore behave consistently across both channels.
 *
 * @param {string} rawPhone
 * @returns {string|null} Normalized number, or null if it can't be made valid.
 */
function normalizePhoneNumber(rawPhone) {
  if (!rawPhone) return null;
  let digits = String(rawPhone).replace(/\D/g, "");
  if (digits.length === 10) {
    digits = "91" + digits; // Default to India country code, matching existing SMS logic.
  }
  return digits.length >= 11 && digits.length <= 15 ? digits : null;
}

// ---------------------------------------------------------------------
// Low-level Graph API call with retry + exponential backoff
// ---------------------------------------------------------------------

const RETRYABLE_STATUS_CODES = new Set([429, 500, 502, 503, 504]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * POSTs a message payload to the Graph API, retrying transient failures
 * (rate limits, 5xx) with exponential backoff + jitter.
 *
 * @param {Object} payload - A payload built by functions/whatsapp/templates.js.
 * @param {Object} [options]
 * @param {number} [options.maxRetries=3]
 * @returns {Promise<Object>} Parsed JSON response from Meta on success.
 * @throws {Error} If the request fails after all retries, or on a
 *                  non-retryable (4xx, e.g. bad request/invalid number) error.
 */
async function callGraphApi(payload, { maxRetries = 3 } = {}) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneNumberId) {
    throw new Error(
      "WhatsApp secrets are not configured. Ensure the calling function declares " +
        "secrets: WHATSAPP_SECRETS and that WHATSAPP_TOKEN / WHATSAPP_PHONE_NUMBER_ID " +
        "have been set via `firebase functions:secrets:set`."
    );
  }

  const url = getMessagesEndpoint(phoneNumberId);
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const json = await response.json().catch(() => ({}));

      if (response.ok) {
        return json;
      }

      const isRetryable = RETRYABLE_STATUS_CODES.has(response.status);
      const errorMessage = json?.error?.message || `Graph API error (HTTP ${response.status})`;
      lastError = new Error(errorMessage);
      lastError.status = response.status;
      lastError.graphError = json?.error;

      if (!isRetryable || attempt === maxRetries) {
        throw lastError;
      }
    } catch (error) {
      lastError = error;
      if (attempt === maxRetries) {
        throw lastError;
      }
    }

    // Exponential backoff with jitter: 500ms, 1s, 2s, ... capped at 8s.
    const backoffMs = Math.min(500 * 2 ** attempt, 8000) + Math.floor(Math.random() * 250);
    console.warn(`WhatsApp Graph API call failed (attempt ${attempt + 1}/${maxRetries + 1}), retrying in ${backoffMs}ms:`, lastError.message);
    await sleep(backoffMs);
  }

  throw lastError;
}

/**
 * Sends a payload and logs the outcome (success or failure) to
 * whatsapp_logs. Never throws - callers get a { success, error } result
 * so a single failed send can never crash a broadcast loop or webhook.
 */
async function sendAndLog(payload, logMeta) {
  try {
    const result = await callGraphApi(payload);
    const messageId = result?.messages?.[0]?.id || null;
    await logOutbound({
      phone: payload.to,
      status: "sent",
      message: payload.text?.body || null,
      templateName: payload.template?.name || null,
      messageId,
      category: logMeta.category,
      uid: logMeta.uid,
      studentName: logMeta.studentName,
      language: logMeta.language,
      variables: logMeta.variables,
      headerMedia: logMeta.headerMedia,
      campaignId: logMeta.campaignId,
      sessionId: logMeta.sessionId,
      metaResponse: result || null,
    });
    return { success: true, messageId };
  } catch (error) {
    console.error(`Failed to send WhatsApp message (${logMeta.category}) to ${payload.to}:`, error.message);
    await logOutbound({
      phone: payload.to,
      status: "failed",
      message: payload.text?.body || null,
      templateName: payload.template?.name || null,
      category: logMeta.category,
      error,
      uid: logMeta.uid,
      studentName: logMeta.studentName,
      language: logMeta.language,
      variables: logMeta.variables,
      headerMedia: logMeta.headerMedia,
      campaignId: logMeta.campaignId,
      sessionId: logMeta.sessionId,
      metaResponse: error.graphError || null,
    });
    return { success: false, error: error.message };
  }
}

// ---------------------------------------------------------------------
// 2b. Centralized template send - the ONE function every template send
// in this app (automated trigger, admin Send Individual, admin
// Broadcast, future features) should go through. No other part of the
// codebase should call the Meta Graph API directly.
// ---------------------------------------------------------------------

/**
 * Converts a {1: "Rahul", 2: "IMO"} variables object into the positional
 * ["Rahul", "IMO"] array buildTemplateMessagePayload expects, in {{1}},
 * {{2}}, ... order regardless of key insertion order.
 * @param {Object<number|string, string|number>} variables
 */
function variablesToParams(variables = {}) {
  return Object.keys(variables)
    .map(Number)
    .sort((a, b) => a - b)
    .map((key) => variables[key]);
}

/**
 * The generic notification primitive: sendTemplate({templateName,
 * phoneNumber, language, variables, media}). Looks the template up in
 * templateRegistry.js first:
 *   - If registered and NOT "ACTIVE" (i.e. "PENDING"), refuses to send -
 *     this is the actual enforcement behind "must remain inactive until
 *     Meta approves it", not just a comment/convention.
 *   - If registered and ACTIVE, uses its known language/header as
 *     defaults (still overridable per-call).
 *   - If NOT registered at all, falls through and trusts the caller -
 *     preserves the admin panel's existing ability to ad-hoc send ANY
 *     template that's approved in Meta (synced into whatsapp_templates)
 *     without requiring a registry entry for every possible template.
 *
 * @param {Object} args
 * @param {string} args.templateName
 * @param {string} args.phoneNumber
 * @param {string} [args.language] - Overrides the registry's language if passed.
 * @param {Object<number|string,string|number>} [args.variables] - e.g. {1: "Rahul Sharma"}.
 * @param {{type: "image"|"video"|"document", url: string}} [args.media] - Overrides the registry's default header media if passed.
 * @param {string} [args.uid]
 * @param {string} [args.studentName]
 * @param {string} [args.campaignId] - Set by sendBroadcast() to correlate a campaign's log rows.
 * @param {string} [args.sessionId] - test_sessions id, when this send is tied to a live
 *   test (promotion campaign or result notification) - logged for Campaign Logs' "Live
 *   Test ID"/"Session ID" requirement (this codebase has no separate "Live Test" entity;
 *   test_sessions IS the live test, so one field covers both).
 * @param {string} [args.category] - Overrides the default `template:${templateName}` log
 *   category. Existing admin stats (getAutomatedMessageStats in admin.js) hard-code the
 *   legacy category strings ("account_created", "live_test_registration", "live_test_result")
 *   for the 3 Phase-1 automations - their wrappers below pass this explicitly so those
 *   dashboards keep working unchanged. New callers should just omit it.
 * @returns {Promise<{success: boolean, messageId?: string, error?: string}>}
 */
async function sendTemplate({ templateName, phoneNumber, language, variables = {}, media, uid, studentName, campaignId, sessionId, category }) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const entry = templateRegistry.get(templateName);
  if (entry && entry.status !== "ACTIVE") {
    console.warn(`sendTemplate: refused to send "${templateName}" - registry status is ${entry.status}, not ACTIVE.`);
    return { success: false, error: `Template ${templateName} is not active (${entry.status})` };
  }

  let headerMedia;
  try {
    headerMedia = mediaService.resolve(entry?.header, media);
  } catch (mediaError) {
    console.error(`sendTemplate: media resolution failed for "${templateName}":`, mediaError.message);
    return { success: false, error: mediaError.message };
  }

  const resolvedLanguage = language || entry?.language || templates.DEFAULT_LANGUAGE;
  const params = variablesToParams(variables);
  const payload = templates.buildTemplateMessagePayload(to, templateName, resolvedLanguage, params, headerMedia);

  return sendAndLog(payload, {
    category: category || `template:${templateName}`,
    uid,
    studentName,
    language: resolvedLanguage,
    variables,
    headerMedia,
    campaignId,
    sessionId,
  });
}

// ---------------------------------------------------------------------
// 3. Free-form text message
// ---------------------------------------------------------------------

/**
 * Sends a plain text WhatsApp message. Only deliverable within an open
 * 24-hour customer service window (i.e. the user messaged you recently) -
 * for anything outside that window, use sendTemplateMessage() instead.
 *
 * @param {string} phoneNumber - Raw phone number; will be normalized.
 * @param {string} message
 */
async function sendWhatsAppMessage(phoneNumber, message) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const payload = templates.buildTextMessagePayload(to, message);
  return sendAndLog(payload, { category: "text" });
}

// ---------------------------------------------------------------------
// 4. Template message
// ---------------------------------------------------------------------

/**
 * Legacy-shaped entry point (positional params array instead of a
 * variables object) kept for any external caller expecting the old
 * signature. Delegates to sendTemplate() - no direct Graph API/payload
 * building here anymore.
 *
 * @param {string} phoneNumber
 * @param {string} templateName - Must exist & be approved in Meta Business Manager.
 * @param {Array<string|number>} [bodyParams] - Values for {{1}}, {{2}}, ... in order.
 * @param {string} [languageCode]
 */
async function sendTemplateMessage(phoneNumber, templateName, bodyParams = [], languageCode) {
  const variables = {};
  bodyParams.forEach((value, i) => { variables[i + 1] = value; });
  return sendTemplate({ templateName, phoneNumber, language: languageCode, variables });
}

// ---------------------------------------------------------------------
// 5. OTP
// ---------------------------------------------------------------------

/**
 * Sends a one-time-password code over WhatsApp.
 *
 * IMPORTANT: This is a pure "send this code" helper. It does NOT
 * generate, store, or verify OTPs, and it is completely independent of
 * Firebase Phone Auth - it exists for future flows (e.g. verifying a
 * support request) that want WhatsApp delivery without touching the
 * site's existing login/signup OTP system. See generateAndSendOtp() /
 * verifyOtp() below for a self-contained (opt-in) implementation.
 *
 * @param {string} phoneNumber
 * @param {string} otpCode
 * @param {number} [expiryMinutes=10]
 */
async function sendOTP(phoneNumber, otpCode, expiryMinutes = 10) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.otpParams({ name: "there", otp: otpCode, expiryMinutes });
  const payload = templates.buildTemplateMessagePayload(to, templates.TEMPLATE_NAMES.OTP, templates.DEFAULT_LANGUAGE, params);
  return sendAndLog(payload, { category: "otp" });
}

/**
 * Self-contained WhatsApp OTP utility: generates a 6-digit code, stores
 * it (hashed-by-nothing, short expiry, single collection dedicated to
 * this feature) and sends it via sendOTP(). Entirely separate from
 * Firebase Authentication / the site's mobile OTP login - safe to call
 * from anywhere without touching the auth flow.
 *
 * @param {string} phoneNumber
 * @returns {Promise<{success: boolean, otpId?: string, error?: string}>}
 */
async function generateAndSendOtp(phoneNumber) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const code = String(Math.floor(100000 + Math.random() * 900000));
  const expiryMinutes = 10;

  const docRef = await db.collection(COLLECTIONS.OTP_CODES).add({
    phone: to,
    code,
    consumed: false,
    createdAt: FieldValue.serverTimestamp(),
    expiresAt: new Date(Date.now() + expiryMinutes * 60 * 1000),
  });

  const sendResult = await sendOTP(to, code, expiryMinutes);
  return { ...sendResult, otpId: docRef.id };
}

/**
 * Verifies a previously generated WhatsApp OTP code.
 *
 * @param {string} otpId - Document ID returned by generateAndSendOtp().
 * @param {string} code - Code entered by the user.
 * @returns {Promise<{success: boolean, error?: string}>}
 */
async function verifyOtp(otpId, code) {
  const ref = db.collection(COLLECTIONS.OTP_CODES).doc(otpId);
  const snap = await ref.get();

  if (!snap.exists) return { success: false, error: "OTP not found" };
  const data = snap.data();

  if (data.consumed) return { success: false, error: "OTP already used" };
  if (data.expiresAt.toDate() < new Date()) return { success: false, error: "OTP expired" };
  if (String(data.code) !== String(code)) return { success: false, error: "Incorrect OTP" };

  await ref.update({ consumed: true, consumedAt: FieldValue.serverTimestamp() });
  return { success: true };
}

// ---------------------------------------------------------------------
// 6. Payment success
// ---------------------------------------------------------------------

/**
 * @param {string} phoneNumber
 * @param {{name: string, amount: number|string, sessionTitle: string, orderId: string}} details
 */
async function sendPaymentSuccess(phoneNumber, details) {
  const [name, amount, sessionTitle, orderId] = templates.paymentSuccessParams(details);
  return sendTemplate({
    templateName: templates.TEMPLATE_NAMES.PAYMENT_SUCCESS,
    phoneNumber,
    variables: { 1: name, 2: amount, 3: sessionTitle, 4: orderId },
    category: "payment_success",
  });
}

// ---------------------------------------------------------------------
// 7. Registration success
// ---------------------------------------------------------------------

/**
 * @param {string} phoneNumber
 * @param {{name: string, sessionTitle: string, grade: string|number, dateTimeText: string}} details
 */
async function sendRegistrationSuccess(phoneNumber, details) {
  const [name, sessionTitle, grade, dateTimeText] = templates.registrationSuccessParams(details);
  return sendTemplate({
    templateName: templates.TEMPLATE_NAMES.REGISTRATION_SUCCESS,
    phoneNumber,
    variables: { 1: name, 2: sessionTitle, 3: grade, 4: dateTimeText },
    category: "registration_success",
  });
}

// ---------------------------------------------------------------------
// 8. Live test reminders
// ---------------------------------------------------------------------

/** @param {string} phoneNumber @param {{name: string, sessionTitle: string, dateTimeText: string}} details */
async function sendReminder24Hours(phoneNumber, details) {
  const [name, sessionTitle, dateTimeText] = templates.reminderParams(details);
  return sendTemplate({
    templateName: templates.TEMPLATE_NAMES.REMINDER_24H,
    phoneNumber,
    variables: { 1: name, 2: sessionTitle, 3: dateTimeText },
    category: "reminder_24h",
  });
}

/** @param {string} phoneNumber @param {{name: string, sessionTitle: string, dateTimeText: string}} details */
async function sendReminder1Hour(phoneNumber, details) {
  const [name, sessionTitle, dateTimeText] = templates.reminderParams(details);
  return sendTemplate({
    templateName: templates.TEMPLATE_NAMES.REMINDER_1H,
    phoneNumber,
    variables: { 1: name, 2: sessionTitle, 3: dateTimeText },
    category: "reminder_1h",
  });
}

// ---------------------------------------------------------------------
// 9. Result notification
// ---------------------------------------------------------------------

/** @param {string} phoneNumber @param {{name, subject, score, total, rank}} details */
async function sendResult(phoneNumber, details) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.resultParams(details);
  const payload = templates.buildTemplateMessagePayload(to, templates.TEMPLATE_NAMES.RESULT, templates.DEFAULT_LANGUAGE, params);
  return sendAndLog(payload, { category: "result" });
}

// ---------------------------------------------------------------------
// 10. Certificate notification
// ---------------------------------------------------------------------

/** @param {string} phoneNumber @param {{name, subject}} details */
async function sendCertificate(phoneNumber, details) {
  const [name, subject] = templates.certificateParams(details);
  return sendTemplate({
    templateName: templates.TEMPLATE_NAMES.CERTIFICATE,
    phoneNumber,
    variables: { 1: name, 2: subject },
    category: "certificate",
  });
}

// ---------------------------------------------------------------------
// Phase 1 automated notification wrappers
// ---------------------------------------------------------------------
// Thin, purpose-named entry points for the ONLY 3 automated WhatsApp
// notifications approved for production (account creation, live test
// registration, live test result). Each one builds its own single
// unified-template payload via buildTemplateMessagePayload/sendAndLog -
// the same transport, retry, and logging path every other send in this
// file uses. Header/footer/button are per-template: sendAccountCreatedWhatsApp's
// oq_account_created_v1 has these already configured in Meta (body-only
// payload); the other two still pass a code-side IMAGE header until their
// templates are confirmed approved with a header already baked in.
//
// Future automations (payment reminder, test reminder, certificate ready,
// broadcast campaigns, OTP, etc.) should follow this exact shape: one
// small wrapper here per event, its own template + params in templates.js,
// and one trigger/callable invoking it - never inline payload-building in
// a trigger, and never duplicating what's already here.

/**
 * Account Creation Confirmation - oq_account_created_v1 (APPROVED). Footer
 * and button are static (no variables) on the approved template, so they
 * need no component here - Meta renders them from the template definition
 * alone. The header is a different case: its format is IMAGE, and Meta's
 * Cloud API requires the media to be supplied in the header component on
 * every send regardless of format - the "example" image given at template
 * submission is only used for Meta's review, never reused at send time.
 * Omitting it causes the send to fail (missing header parameter), so it's
 * included here even though the header itself isn't parameterized text.
 * @param {string} phoneNumber
 * @param {{name: string, uid?: string}} details
 */
async function sendAccountCreatedWhatsApp(phoneNumber, details) {
  const [name] = templates.accountCreatedParams(details);
  return sendTemplate({
    templateName: templates.TEMPLATE_NAMES.ACCOUNT_CREATED,
    phoneNumber,
    variables: { 1: name },
    uid: details.uid,
    studentName: details.name,
    category: "account_created",
  });
}

/**
 * Live Test Registration Confirmation - single unified template (name,
 * test name, date, time); no payment amount/order id in this message.
 * @param {string} phoneNumber @param {{name: string, testName: string, testDate: string, testTime: string}} details
 */
async function sendLiveRegistrationWhatsApp(phoneNumber, details) {
  const [name, testName, testDate, testTime] = templates.liveTestRegistrationParams(details);
  return sendTemplate({
    templateName: templates.TEMPLATE_NAMES.LIVE_TEST_REGISTRATION,
    phoneNumber,
    variables: { 1: name, 2: testName, 3: testDate, 4: testTime },
    category: "live_test_registration",
  });
}

/**
 * Live Test Result Notification - oq_live_test_result_v1 (APPROVED, header
 * is a static TEXT header, no media parameter needed). Certificate-ready
 * notification remains a deliberately separate, not-yet-automated event -
 * see sendCertificate() above.
 * @param {string} phoneNumber
 * @param {{name: string, testName: string, className: string|number, score: number, total: number, rank: number, percentile: number, uid?: string, sessionId?: string}} details
 */
async function sendResultWhatsApp(phoneNumber, details) {
  const [name, testName, className, score, total, rank, percentile] = templates.liveResultParams(details);
  return sendTemplate({
    templateName: templates.TEMPLATE_NAMES.LIVE_RESULT,
    phoneNumber,
    variables: { 1: name, 2: testName, 3: className, 4: score, 5: total, 6: rank, 7: percentile },
    category: "live_test_result",
    uid: details.uid,
    sessionId: details.sessionId,
  });
}

// ---------------------------------------------------------------------
// 11. Broadcast
// ---------------------------------------------------------------------

const BROADCAST_SEND_DELAY_MS = 60; // Small pacing delay, mirrors existing SMS broadcast throttling.

/**
 * Extracts a numeric class/grade from a user doc (`class`/`studentClass`,
 * either a bare number or a string like "Class 11"), or null if absent/
 * unparseable. Used by the Class 1-10 / Class 11-12 broadcast filters so
 * junior and senior students can be targeted with separate campaigns
 * (e.g. senior-only exam promotions) instead of one message to everyone.
 */
function parseClassNumber(data) {
  const raw = data.class ?? data.studentClass;
  if (raw === undefined || raw === null || raw === "") return null;
  const n = parseInt(String(raw).replace(/[^0-9]/g, ""), 10);
  return Number.isNaN(n) ? null : n;
}

/**
 * Picks the variables object for a broadcast's chosen template. The
 * broadcast UI only offers one free-text box, so this only fully covers
 * 0- and 1-variable templates (e.g. oq_free_mock_tests_v1 = 0,
 * weekly_newsletter's highlight slot = 1); a 2+-variable template only
 * gets {{1}} filled - extend the admin UI with per-variable inputs
 * before using this for anything richer. The one exception is
 * oq_live_test_promotion_v1: its {{2}}-{{6}} and {{8}} come from
 * `sessionPromoData` (pre-fetched once per broadcast run by
 * sendBroadcast(), never per recipient) and are never hardcoded, per the
 * session-driven pricing requirement; {{7}} (coupon code) comes from the
 * admin's own pre-existing Coupon Management system instead - picked at
 * campaign-send time, not stored on the session (there is no per-session
 * coupon concept in this app - coupons are global and admin-selected).
 * Only {{1}} (the recipient's own name) varies per person.
 *
 * @param {string} templateName
 * @param {string} message - Free text for single-variable templates.
 * @param {string} [recipientName] - This recipient's name, if known.
 * @param {Object} [sessionPromoData] - Result of liveTestData.getSessionPromoData(), for the promotion template only.
 * @param {string} [couponCode] - Admin-selected code from the existing `coupons` collection, for the promotion template only.
 */
function buildBroadcastVariables(templateName, message, recipientName, sessionPromoData, couponCode) {
  if (templateName === templates.TEMPLATE_NAMES.WEEKLY_NEWSLETTER) {
    return { 1: "there", 2: message }; // exact legacy shape, unchanged
  }
  if (templateName === templates.TEMPLATE_NAMES.LIVE_TEST_PROMOTION && sessionPromoData) {
    return {
      1: recipientName || "Student",
      2: sessionPromoData.testName,
      3: sessionPromoData.className,
      4: sessionPromoData.testDate,
      5: sessionPromoData.testTime,
      6: sessionPromoData.testPrice,
      7: couponCode || "N/A",
      8: sessionPromoData.discountedPrice,
    };
  }
  const entry = templateRegistry.get(templateName);
  const variableCount = entry?.variableCount ?? (message ? 1 : 0);
  if (!variableCount) return {};
  return { 1: message || "" };
}

/**
 * Sends a message/template to a filtered slice of the `users` collection,
 * optionally merged with CSV-uploaded contacts. Mirrors the existing
 * sendBulkSMS targeting rules (All Users / By Class / Recent
 * Registrations / Selected Users) plus newer filters for the WhatsApp
 * Manager's campaign builder.
 *
 * @param {Object} options
 * @param {string} [options.message] - Free text; used as the chosen template's
 *                                      single body variable when it has one
 *                                      (see buildBroadcastVariables), or sent
 *                                      as plain text if `useTemplate` is false.
 * @param {"All Users"|"By Class"|"Class 1-10 (Junior)"|"Class 11-12 (Senior)"|
 *         "Recent Registrations"|"Selected Users"|"Mobile Verified"|
 *         "WhatsApp Opt-in"|"Live Test Registered"|"Live Test Not Registered"|
 *         "Activity"} options.targetType
 * @param {string} [options.targetValue] - Class number (By Class) or comma
 *                                          list of emails/phones (Selected Users).
 * @param {boolean} [options.useTemplate=true] - Set false only for testing
 *                                                inside your own session window.
 * @param {string} [options.templateName] - Defaults to WEEKLY_NEWSLETTER,
 *                                           matching every existing caller
 *                                           (scheduler crons, legacy admin UI)
 *                                           that doesn't pass one.
 * @param {string} [options.campaignName] - Label shown in Campaign History.
 * @param {Array<{phone: string, name?: string}>} [options.extraContacts] -
 *          CSV-uploaded contacts, merged in only if `consentAttested` is true.
 * @param {boolean} [options.consentAttested=false] - Admin's on-screen
 *          confirmation that extraContacts opted in to WhatsApp messages -
 *          required because these aren't Firestore users and have no
 *          promo_consent field to check.
 * @param {string} [options.sessionId] - Required for the two Live Test filters.
 * @param {number} [options.activityDays] - Required for the Activity filter
 *          ("active in the last N days", based on lastLoginAt).
 * @param {Array<string>} [options.explicitPhones] - When provided (non-empty),
 *          completely overrides the targetType-based filtering below: only
 *          these exact phone numbers are considered (still consent-gated).
 *          This is how the admin panel's per-filter checkbox list ("load the
 *          matching students, let the admin uncheck a few") actually sends -
 *          targetType/targetValue are still recorded for Campaign History
 *          readability, but explicitPhones is what decides who receives it.
 * @param {string} [options.couponCode] - For oq_live_test_promotion_v1 only:
 *          the admin's chosen code from the existing Coupon Management
 *          system (the `coupons` collection) - {{7}} on that template.
 * @returns {Promise<{success: boolean, campaignId: string, sentCount: number, failedCount: number, totalUsers: number}>}
 */
async function sendBroadcast({
  message,
  targetType,
  targetValue,
  useTemplate = true,
  templateName,
  campaignName,
  extraContacts = [],
  consentAttested = false,
  sessionId,
  activityDays,
  explicitPhones,
  couponCode,
}) {
  // "Not Opted-in" is a view/export-only filter in the admin UI (for
  // following up by another channel) - never a sendable target. Rejected
  // here too, not just in the UI, in case this callable is ever hit
  // directly. The unconditional promo_consent === true gate below would
  // already exclude everyone in this filter anyway, but reject outright so
  // the failure mode is obvious rather than "0 sent, no explanation."
  if (targetType === "Not Opted-in") {
    return { success: false, error: "\"Not Opted-in\" is a view/export-only filter and cannot be used to send a broadcast." };
  }

  const resolvedTemplateName = templateName || templates.TEMPLATE_NAMES.WEEKLY_NEWSLETTER;
  const now = Date.now();
  const uniqueNumbers = new Map(); // phone -> recipient name

  const explicitSet = explicitPhones && explicitPhones.length
    ? new Set(explicitPhones.map(normalizePhoneNumber).filter(Boolean))
    : null;

  // One query up front for the live-test filters, rather than per-doc.
  // Skipped entirely when explicitPhones is set - the admin already
  // resolved and reviewed the exact recipient list client-side.
  let liveTestUids = null;
  if (!explicitSet && (targetType === "Live Test Registered" || targetType === "Live Test Not Registered") && sessionId) {
    const purchasesSnap = await db
      .collectionGroup("purchases")
      .where("sessionId", "==", sessionId)
      .where("status", "==", "CAPTURED")
      .get();
    liveTestUids = new Set(purchasesSnap.docs.map((d) => d.ref.parent.parent.id));
  }

  const snapshot = await db.collection("users").get();

  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    let include = false;

    if (explicitSet) {
      const normalized = data.phone ? normalizePhoneNumber(data.phone) : null;
      include = !!(normalized && explicitSet.has(normalized));
    } else if (targetType === "All Users") {
      include = true;
    } else if (targetType === "By Class" && targetValue) {
      if (String(data.class) === String(targetValue) || String(data.studentClass) === String(targetValue)) {
        include = true;
      }
    } else if (targetType === "Class 1-10 (Junior)") {
      const cls = parseClassNumber(data);
      if (cls !== null && cls >= 1 && cls <= 10) include = true;
    } else if (targetType === "Class 11-12 (Senior)") {
      const cls = parseClassNumber(data);
      if (cls !== null && cls >= 11 && cls <= 12) include = true;
    } else if (targetType === "Recent Registrations") {
      if (data.createdAt?.toDate) {
        const diff = now - data.createdAt.toDate().getTime();
        if (diff <= 7 * 24 * 60 * 60 * 1000) include = true;
      }
    } else if (targetType === "Selected Users" && targetValue) {
      const targets = targetValue.split(",").map((t) => t.trim().toLowerCase());
      if (targets.includes(String(data.email).toLowerCase()) || targets.includes(String(data.phone))) {
        include = true;
      }
    } else if (targetType === "Mobile Verified") {
      if (data.phoneVerified === true || data.mobileVerified === true) include = true;
    } else if (targetType === "WhatsApp Opt-in") {
      // Explicit, visible version of the consent gate below - same
      // result, since that gate is always enforced regardless of
      // targetType, but this makes the filter's intent clear in the UI.
      if (data.promo_consent === true) include = true;
    } else if (targetType === "Live Test Registered" && liveTestUids) {
      if (liveTestUids.has(doc.id)) include = true;
    } else if (targetType === "Live Test Not Registered" && liveTestUids) {
      if (!liveTestUids.has(doc.id)) include = true;
    } else if (targetType === "Activity" && activityDays) {
      if (data.lastLoginAt?.toDate) {
        const diff = now - data.lastLoginAt.toDate().getTime();
        if (diff <= activityDays * 24 * 60 * 60 * 1000) include = true;
      }
    }

    // Same consent flag already used to gate promotional SMS - applies
    // regardless of targetType, unchanged from before.
    if (include && data.phone && data.promo_consent === true) {
      const normalized = normalizePhoneNumber(data.phone);
      if (normalized) uniqueNumbers.set(normalized, data.name || data.fullName || "Student");
    }
  });

  // CSV-uploaded contacts aren't Firestore users, so there's no
  // promo_consent field to check - only merged in with an explicit
  // admin attestation that they opted in (see AskUserQuestion decision).
  if (consentAttested) {
    extraContacts.forEach((contact) => {
      const normalized = normalizePhoneNumber(contact.phone);
      if (normalized) uniqueNumbers.set(normalized, contact.name || "there");
    });
  }

  // For the live-test promotion template, session-driven vars {{2}}-{{8}}
  // are fetched ONCE here (never per-recipient, never hardcoded) - see
  // buildBroadcastVariables() above.
  let sessionPromoData = null;
  if (resolvedTemplateName === templates.TEMPLATE_NAMES.LIVE_TEST_PROMOTION && sessionId) {
    sessionPromoData = await liveTestData.getSessionPromoData(sessionId);
  }

  const recipients = Array.from(uniqueNumbers.entries()); // [phone, name][]
  let sentCount = 0;
  let failedCount = 0;

  // Pre-generate the campaign id so every recipient's whatsapp_logs row
  // (written inside the loop below) can carry it, before the summary
  // document itself is written at the end.
  const campaignId = db.collection(COLLECTIONS.BROADCAST_LOGS).doc().id;

  for (const [phone, name] of recipients) {
    const result = useTemplate
      ? await sendTemplate({
          templateName: resolvedTemplateName,
          phoneNumber: phone,
          variables: buildBroadcastVariables(resolvedTemplateName, message, name, sessionPromoData, couponCode),
          campaignId,
          sessionId,
        })
      : await sendWhatsAppMessage(phone, message);

    if (result.success) sentCount++;
    else failedCount++;

    await sleep(BROADCAST_SEND_DELAY_MS);
  }

  await logBroadcastSummary({
    campaignId,
    campaignName: campaignName || "",
    templateName: useTemplate ? resolvedTemplateName : null,
    message,
    targetType,
    targetValue: targetValue || "",
    sessionId: sessionId || null,
    totalUsers: recipients.length,
    sentCount,
    failedCount,
  });

  return { success: true, campaignId, sentCount, failedCount, totalUsers: recipients.length };
}

/**
 * Sends oq_live_test_result_v1 to every participant of a completed live
 * test session - the manual counterpart to notifyWhatsAppOnResult's
 * automatic per-student trigger. Doesn't fit sendBroadcast()'s model:
 * results are inherently per-student data (score/rank differ for every
 * recipient), not a shared-variables campaign, so this is its own small
 * loop reusing the same rank/percentile computation, campaignId, and
 * Campaign History logging pattern.
 *
 * No promo_consent gate - matches the existing precedent that UTILITY/
 * transactional automated sends (oq_account_created_v1, and this exact
 * template's own automatic trigger) never check it; only a phone number
 * on file is required.
 *
 * @param {Object} options
 * @param {string} options.sessionId
 * @returns {Promise<{success: boolean, campaignId?: string, sentCount: number, failedCount: number, totalUsers: number, error?: string}>}
 */
async function sendLiveTestResultCampaign({ sessionId }) {
  if (!sessionId) return { success: false, error: "sessionId is required.", sentCount: 0, failedCount: 0, totalUsers: 0 };

  const [sessionPromo, rankings] = await Promise.all([
    liveTestData.getSessionPromoData(sessionId),
    liveTestData.computeLiveTestRankings(sessionId),
  ]);
  if (!sessionPromo) return { success: false, error: "Session not found.", sentCount: 0, failedCount: 0, totalUsers: 0 };
  if (rankings.size === 0) return { success: true, sentCount: 0, failedCount: 0, totalUsers: 0 };

  const uids = Array.from(rankings.keys());
  const userSnaps = await Promise.all(uids.map((uid) => db.collection("users").doc(uid).get()));

  const campaignId = db.collection(COLLECTIONS.BROADCAST_LOGS).doc().id;
  let sentCount = 0;
  let failedCount = 0;
  let totalUsers = 0;

  for (let i = 0; i < uids.length; i++) {
    const uid = uids[i];
    const userSnap = userSnaps[i];
    if (!userSnap.exists) continue;
    const user = userSnap.data();
    if (!user.phone) continue;

    totalUsers++;
    const ranking = rankings.get(uid);

    const result = await sendResultWhatsApp(user.phone, {
      name: user.name || "Student",
      testName: sessionPromo.testName,
      className: sessionPromo.className,
      score: ranking.score,
      total: ranking.total,
      rank: ranking.rank,
      percentile: ranking.percentile,
      uid,
      sessionId,
    });

    if (result.success) sentCount++;
    else failedCount++;

    await sleep(BROADCAST_SEND_DELAY_MS);
  }

  await logBroadcastSummary({
    campaignId,
    campaignName: `Live Test Results - ${sessionPromo.testName}`,
    templateName: templates.TEMPLATE_NAMES.LIVE_RESULT,
    targetType: "Live Test Results (manual)",
    sessionId,
    totalUsers,
    sentCount,
    failedCount,
  });

  return { success: true, campaignId, sentCount, failedCount, totalUsers };
}

module.exports = {
  normalizePhoneNumber,
  callGraphApi,
  sendWhatsAppMessage,
  sendTemplate,
  sendTemplateMessage,
  sendOTP,
  generateAndSendOtp,
  verifyOtp,
  sendPaymentSuccess,
  sendRegistrationSuccess,
  sendReminder24Hours,
  sendReminder1Hour,
  sendResult,
  sendCertificate,
  sendBroadcast,
  sendLiveTestResultCampaign,
  sendAccountCreatedWhatsApp,
  sendLiveRegistrationWhatsApp,
  sendResultWhatsApp,
};
