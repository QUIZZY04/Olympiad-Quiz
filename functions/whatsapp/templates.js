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
  // Phase 1 automated notifications (production names, versioned per Meta's convention).
  ACCOUNT_CREATED: "oq_account_created_v1",
  LIVE_TEST_REGISTRATION: "oq_live_test_registration_v1",
  // Repointed to the actually-approved name (verified via Graph API) -
  // the old "oq_live_result_v1" guess was never created in Meta.
  LIVE_RESULT: "oq_live_test_result_v1",
  LIVE_TEST_PROMOTION: "oq_live_test_promotion_v1",

  // Existing/reserved templates - unused by the Phase 1 triggers, kept for
  // whatever else already references them (generic send helpers, admin
  // console ad-hoc sends).
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

// Must exactly match the language code Meta stores for each approved
// template, not just what the WhatsApp Manager UI label says. Verified
// directly against the Graph API (GET /{waba_id}/message_templates) for
// oq_account_created_v1: Meta has it stored as "en", not "en_US" - the
// previous assumption that plain "English" resolves to "en_US" was wrong
// and caused every send to fail with error #132001 "Template name does
// not exist in the translation". Re-verify per-template if this default
// is ever wrong for a newly approved template with a different locale.
const DEFAULT_LANGUAGE = "en";

// Used as the (static, non-parameterized) IMAGE header on the 2 Phase 1
// templates that aren't created in Meta yet (live test registration,
// live test result). Reuses the same asset already treated as "the logo"
// elsewhere in this codebase (see the push-notification icon in
// functions/index.js).
const OLYMPIADQUIZ_LOGO_URL = "https://olympiadquiz.org/favicon.png";

// Rectangular (16:9) promotional banner used only as the account-creation
// confirmation's header - deliberately separate from OLYMPIADQUIZ_LOGO_URL
// above so the other two templates keep the square logo by default.
const ACCOUNT_CREATED_HEADER_IMAGE_URL = "https://olympiadquiz.org/whatsapp_header.png";

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
 * @param {{format: "IMAGE"|"VIDEO"|"DOCUMENT", url: string}|string|null} [headerMedia] -
 *   Result of mediaService.resolve(), or (for backward compatibility with
 *   any external caller still passing a plain URL) a bare image URL string.
 *   Omit for templates with no header or a non-media header.
 */
function buildTemplateMessagePayload(to, templateName, languageCode = DEFAULT_LANGUAGE, bodyParams = [], headerMedia = null) {
  const components = [];

  const media = typeof headerMedia === "string" ? { format: "IMAGE", url: headerMedia } : headerMedia;
  if (media?.url) {
    const key = media.format.toLowerCase(); // "image" | "video" | "document"
    components.push({ type: "header", parameters: [{ type: key, [key]: { link: media.url } }] });
  }
  if (bodyParams.length) {
    components.push({ type: "body", parameters: bodyParams.map((value) => ({ type: "text", text: String(value) })) });
  }

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

/**
 * Builds an interactive LIST payload (session message, no template
 * approval required) - used for the AI Assistant's main menu, which
 * needs more than the 3 options a reply-buttons message allows (up to
 * 10 rows across sections). Tapping a row sends back
 * `interactive.list_reply.id` on the next inbound webhook event.
 * @param {string} to
 * @param {{header?: string, bodyText: string, buttonText: string, sections: Array<{title: string, rows: Array<{id: string, title: string, description?: string}>}>}} opts
 */
function buildListPayload(to, { header, bodyText, buttonText, sections }) {
  const interactive = {
    type: "list",
    body: { text: bodyText },
    action: {
      button: (buttonText || "Menu").slice(0, 20),
      sections: sections.map((s) => ({
        title: s.title.slice(0, 24),
        rows: s.rows.slice(0, 10).map((r) => ({
          id: r.id,
          title: r.title.slice(0, 24),
          description: r.description ? r.description.slice(0, 72) : undefined,
        })),
      })),
    },
  };
  if (header) interactive.header = { type: "text", text: header.slice(0, 60) };

  return { messaging_product: "whatsapp", to, type: "interactive", interactive };
}

// ---------------------------------------------------------------------
// Suggested body text for each template, to submit to Meta for approval.
// Order of placeholders below MUST match the order params are passed in
// whatsappService.js.
// ---------------------------------------------------------------------

/** {{1}} name */
function accountCreatedParams({ name }) {
  return [name];
}

/** {{1}} name, {{2}} test name, {{3}} test date, {{4}} test time */
function liveTestRegistrationParams({ name, testName, testDate, testTime }) {
  return [name, testName, testDate, testTime];
}

/** {{1}} name, {{2}} test name, {{3}} class, {{4}} score, {{5}} total marks, {{6}} national rank, {{7}} percentile */
function liveResultParams({ name, testName, className, score, total, rank, percentile }) {
  return [name, testName, className, score, total, rank, percentile];
}

/** {{1}} name, {{2}} test name, {{3}} class, {{4}} test date, {{5}} test time, {{6}} test price, {{7}} coupon code, {{8}} discounted price */
function liveTestPromotionParams({ name, testName, className, testDate, testTime, testPrice, couponCode, discountedPrice }) {
  return [name, testName, className, testDate, testTime, testPrice, couponCode, discountedPrice];
}

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
  OLYMPIADQUIZ_LOGO_URL,
  ACCOUNT_CREATED_HEADER_IMAGE_URL,
  buildTextMessagePayload,
  buildTemplateMessagePayload,
  buildButtonsPayload,
  buildListPayload,
  accountCreatedParams,
  liveTestRegistrationParams,
  liveResultParams,
  liveTestPromotionParams,
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
