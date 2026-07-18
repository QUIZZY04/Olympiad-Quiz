/**
 * =====================================================================
 * WHATSAPP MESSAGE TEMPLATES
 * =====================================================================
 * Pure, side-effect-free builders that turn plain JS data into the JSON
 * payloads the WhatsApp Cloud API expects. Nothing in this file talks to
 * Firestore or the network - it only builds request bodies.
 *
 * IMPORTANT - Meta template rules:
 *   Outside a customer's 24-hour "service window" (i.e. they haven't
 *   messaged you in the last 24h), WhatsApp ONLY allows pre-approved
 *   "template" messages - free-form text (type: "text") will be
 *   rejected by the API. Every one of the template names below must be
 *   created and APPROVED in Meta Business Manager
 *   (business.facebook.com > WhatsApp Manager > Message Templates)
 *   BEFORE it can be used, with a matching category, language, and
 *   number/order of {{1}}, {{2}}... body variables. See README.md for
 *   the exact body text to submit for approval for each template below.
 * =====================================================================
 */

/** Template names as registered in Meta Business Manager. Rename here if
 *  you register them under different names - nothing else needs to change. */
const TEMPLATE_NAMES = {
  OTP: "otp_verification",
  PAYMENT_SUCCESS: "payment_success",
  REGISTRATION_SUCCESS: "registration_success",
  REMINDER_24H: "reminder_24h",
  REMINDER_1H: "reminder_1h",
  RESULT: "result_notification",
  CERTIFICATE: "certificate_ready",
  WEEKLY_NEWSLETTER: "weekly_newsletter",
  FESTIVAL_GREETING: "festival_greeting",
  BIRTHDAY_GREETING: "birthday_greeting",
};

const DEFAULT_LANGUAGE = "en";

/**
 * Builds a free-form text message payload (only valid inside the 24h
 * customer service window - see note above).
 * @param {string} to - Recipient phone number, digits only (e.g. "919999999999").
 * @param {string} body - Message text.
 */
function buildTextMessagePayload(to, body) {
  return {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: { preview_url: false, body },
  };
}

/**
 * Builds a generic template message payload.
 * @param {string} to
 * @param {string} templateName
 * @param {string} [languageCode]
 * @param {Array<string|number>} [bodyParams] - Values substituted into {{1}}, {{2}}, ... in order.
 */
function buildTemplateMessagePayload(to, templateName, languageCode = DEFAULT_LANGUAGE, bodyParams = []) {
  const components = bodyParams.length
    ? [
        {
          type: "body",
          parameters: bodyParams.map((value) => ({ type: "text", text: String(value) })),
        },
      ]
    : [];

  return {
    messaging_product: "whatsapp",
    to,
    type: "template",
    template: {
      name: templateName,
      language: { code: languageCode },
      components,
    },
  };
}

/**
 * Builds an interactive reply-buttons payload (session message, no
 * template approval required). Used by the chatbot for a nicer main menu.
 * @param {string} to
 * @param {string} bodyText
 * @param {Array<{id: string, title: string}>} buttons - Max 3 per WhatsApp limits.
 */
function buildButtonsPayload(to, bodyText, buttons) {
  return {
    messaging_product: "whatsapp",
    to,
    type: "interactive",
    interactive: {
      type: "button",
      body: { text: bodyText },
      action: {
        buttons: buttons.slice(0, 3).map((b) => ({
          type: "reply",
          reply: { id: b.id, title: b.title.slice(0, 20) },
        })),
      },
    },
  };
}

// ---------------------------------------------------------------------
// Suggested body text for each template, to submit to Meta for approval.
// Order of placeholders below MUST match the order params are passed in
// whatsappService.js.
// ---------------------------------------------------------------------

/** {{1}} name, {{2}} otp code, {{3}} expiry minutes */
function otpParams({ name, otp, expiryMinutes = 10 }) {
  return [name, otp, String(expiryMinutes)];
}

/** {{1}} name, {{2}} amount, {{3}} test/session title, {{4}} order id */
function paymentSuccessParams({ name, amount, sessionTitle, orderId }) {
  return [name, `₹${amount}`, sessionTitle, orderId];
}

/** {{1}} name, {{2}} session title, {{3}} class/grade, {{4}} date & time (IST) */
function registrationSuccessParams({ name, sessionTitle, grade, dateTimeText }) {
  return [name, sessionTitle, String(grade), dateTimeText];
}

/** {{1}} name, {{2}} session title, {{3}} date & time (IST) */
function reminderParams({ name, sessionTitle, dateTimeText }) {
  return [name, sessionTitle, dateTimeText];
}

/** {{1}} name, {{2}} subject, {{3}} score, {{4}} total, {{5}} rank */
function resultParams({ name, subject, score, total, rank }) {
  return [name, subject, String(score), String(total), rank ? String(rank) : "N/A"];
}

/** {{1}} name, {{2}} subject/exam name */
function certificateParams({ name, subject }) {
  return [name, subject];
}

/** {{1}} name, {{2}} festival name */
function festivalGreetingParams({ name, festivalName }) {
  return [name, festivalName];
}

/** {{1}} name */
function birthdayGreetingParams({ name }) {
  return [name];
}

/** {{1}} name, {{2}} weekly highlight/topic line */
function newsletterParams({ name, highlight }) {
  return [name, highlight];
}

module.exports = {
  TEMPLATE_NAMES,
  DEFAULT_LANGUAGE,
  buildTextMessagePayload,
  buildTemplateMessagePayload,
  buildButtonsPayload,
  otpParams,
  paymentSuccessParams,
  registrationSuccessParams,
  reminderParams,
  resultParams,
  certificateParams,
  festivalGreetingParams,
  birthdayGreetingParams,
  newsletterParams,
};
