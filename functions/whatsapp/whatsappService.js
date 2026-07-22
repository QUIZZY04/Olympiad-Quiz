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
      metaResponse: error.graphError || null,
    });
    return { success: false, error: error.message };
  }
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
 * Sends an approved template message with dynamic body parameters.
 *
 * @param {string} phoneNumber
 * @param {string} templateName - Must exist & be approved in Meta Business Manager.
 * @param {Array<string|number>} [bodyParams] - Values for {{1}}, {{2}}, ... in order.
 * @param {string} [languageCode]
 */
async function sendTemplateMessage(phoneNumber, templateName, bodyParams = [], languageCode = templates.DEFAULT_LANGUAGE) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const payload = templates.buildTemplateMessagePayload(to, templateName, languageCode, bodyParams);
  return sendAndLog(payload, { category: `template:${templateName}` });
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
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.paymentSuccessParams(details);
  const payload = templates.buildTemplateMessagePayload(to, templates.TEMPLATE_NAMES.PAYMENT_SUCCESS, templates.DEFAULT_LANGUAGE, params);
  return sendAndLog(payload, { category: "payment_success" });
}

// ---------------------------------------------------------------------
// 7. Registration success
// ---------------------------------------------------------------------

/**
 * @param {string} phoneNumber
 * @param {{name: string, sessionTitle: string, grade: string|number, dateTimeText: string}} details
 */
async function sendRegistrationSuccess(phoneNumber, details) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.registrationSuccessParams(details);
  const payload = templates.buildTemplateMessagePayload(to, templates.TEMPLATE_NAMES.REGISTRATION_SUCCESS, templates.DEFAULT_LANGUAGE, params);
  return sendAndLog(payload, { category: "registration_success" });
}

// ---------------------------------------------------------------------
// 8. Live test reminders
// ---------------------------------------------------------------------

/** @param {string} phoneNumber @param {{name: string, sessionTitle: string, dateTimeText: string}} details */
async function sendReminder24Hours(phoneNumber, details) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.reminderParams(details);
  const payload = templates.buildTemplateMessagePayload(to, templates.TEMPLATE_NAMES.REMINDER_24H, templates.DEFAULT_LANGUAGE, params);
  return sendAndLog(payload, { category: "reminder_24h" });
}

/** @param {string} phoneNumber @param {{name: string, sessionTitle: string, dateTimeText: string}} details */
async function sendReminder1Hour(phoneNumber, details) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.reminderParams(details);
  const payload = templates.buildTemplateMessagePayload(to, templates.TEMPLATE_NAMES.REMINDER_1H, templates.DEFAULT_LANGUAGE, params);
  return sendAndLog(payload, { category: "reminder_1h" });
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
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.certificateParams(details);
  const payload = templates.buildTemplateMessagePayload(to, templates.TEMPLATE_NAMES.CERTIFICATE, templates.DEFAULT_LANGUAGE, params);
  return sendAndLog(payload, { category: "certificate" });
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
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.accountCreatedParams(details);
  const payload = templates.buildTemplateMessagePayload(
    to, templates.TEMPLATE_NAMES.ACCOUNT_CREATED, templates.DEFAULT_LANGUAGE, params, templates.OLYMPIADQUIZ_LOGO_URL
  );
  return sendAndLog(payload, { category: "account_created", uid: details.uid, studentName: details.name });
}

/**
 * Live Test Registration Confirmation - single unified template (name,
 * test name, date, time); no payment amount/order id in this message.
 * @param {string} phoneNumber @param {{name: string, testName: string, testDate: string, testTime: string}} details
 */
async function sendLiveRegistrationWhatsApp(phoneNumber, details) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.liveTestRegistrationParams(details);
  const payload = templates.buildTemplateMessagePayload(
    to, templates.TEMPLATE_NAMES.LIVE_TEST_REGISTRATION, templates.DEFAULT_LANGUAGE, params, templates.OLYMPIADQUIZ_LOGO_URL
  );
  return sendAndLog(payload, { category: "live_test_registration" });
}

/**
 * Live Test Result Notification. Certificate-ready notification remains a
 * deliberately separate, not-yet-automated event - see sendCertificate() above.
 * @param {string} phoneNumber @param {{name: string, testName: string}} details
 */
async function sendResultWhatsApp(phoneNumber, details) {
  const to = normalizePhoneNumber(phoneNumber);
  if (!to) return { success: false, error: "Invalid phone number" };

  const params = templates.liveResultParams(details);
  const payload = templates.buildTemplateMessagePayload(
    to, templates.TEMPLATE_NAMES.LIVE_RESULT, templates.DEFAULT_LANGUAGE, params, templates.OLYMPIADQUIZ_LOGO_URL
  );
  return sendAndLog(payload, { category: "live_test_result" });
}

// ---------------------------------------------------------------------
// 11. Broadcast
// ---------------------------------------------------------------------

const BROADCAST_SEND_DELAY_MS = 60; // Small pacing delay, mirrors existing SMS broadcast throttling.

/**
 * Sends a message to a filtered slice of the `users` collection.
 * Mirrors the exact same targeting rules as the existing sendBulkSMS
 * Cloud Function (All Users / By Class / Recent Registrations / Selected
 * Users) so admins get consistent behavior across SMS and WhatsApp.
 *
 * @param {Object} options
 * @param {string} options.message - Free text (sent as a template body param
 *                                    via a generic template, or as plain
 *                                    text if `useTemplate` is false and you
 *                                    are certain every recipient is inside
 *                                    an open 24h session window).
 * @param {"All Users"|"By Class"|"Recent Registrations"|"Selected Users"} options.targetType
 * @param {string} [options.targetValue]
 * @param {boolean} [options.useTemplate=true] - Send via WEEKLY_NEWSLETTER
 *                                                template (recommended);
 *                                                set false only for testing
 *                                                inside your own session window.
 * @returns {Promise<{success: boolean, sentCount: number, failedCount: number, totalUsers: number}>}
 */
async function sendBroadcast({ message, targetType, targetValue, useTemplate = true }) {
  const snapshot = await db.collection("users").get();
  const uniqueNumbers = new Set();
  const now = Date.now();

  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    let include = false;

    if (targetType === "All Users") {
      include = true;
    } else if (targetType === "By Class" && targetValue) {
      if (String(data.class) === String(targetValue) || String(data.studentClass) === String(targetValue)) {
        include = true;
      }
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
    }

    // Same consent flag already used to gate promotional SMS.
    if (include && data.phone && data.promo_consent === true) {
      const normalized = normalizePhoneNumber(data.phone);
      if (normalized) uniqueNumbers.add(normalized);
    }
  });

  const phoneList = Array.from(uniqueNumbers);
  let sentCount = 0;
  let failedCount = 0;

  for (const phone of phoneList) {
    const result = useTemplate
      ? await sendTemplateMessage(phone, templates.TEMPLATE_NAMES.WEEKLY_NEWSLETTER, templates.newsletterParams({ name: "there", highlight: message }))
      : await sendWhatsAppMessage(phone, message);

    if (result.success) sentCount++;
    else failedCount++;

    await sleep(BROADCAST_SEND_DELAY_MS);
  }

  await logBroadcastSummary({
    message,
    targetType,
    targetValue: targetValue || "",
    totalUsers: phoneList.length,
    sentCount,
    failedCount,
  });

  return { success: true, sentCount, failedCount, totalUsers: phoneList.length };
}

module.exports = {
  normalizePhoneNumber,
  callGraphApi,
  sendWhatsAppMessage,
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
  sendAccountCreatedWhatsApp,
  sendLiveRegistrationWhatsApp,
  sendResultWhatsApp,
};
