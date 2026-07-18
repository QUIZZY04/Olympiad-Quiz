/**
 * =====================================================================
 * WHATSAPP CHATBOT
 * =====================================================================
 * Simple, dependency-free keyword-matching chatbot. Kept deliberately
 * modular: `getReply()` is the only thing webhook.js calls, so swapping
 * the matching strategy (or wiring in a real AI backend later) never
 * requires touching webhook.js.
 * =====================================================================
 */

/**
 * Ordered list of {keywords, reply} rules. First match wins, so put more
 * specific phrases before generic ones if you add new rules.
 */
const RULES = [
  {
    keywords: ["hi", "hello", "hey", "menu", "start"],
    reply:
      "Hi! 👋 Welcome to *OlympiadQuiz*.\n\n" +
      "Reply with any of these to continue:\n" +
      "• *Mock Test* - free practice tests\n" +
      "• *Result* - check your latest score\n" +
      "• *Certificate* - about your e-certificate\n" +
      "• *Payment* - payment/subscription help\n" +
      "• *Contact* - talk to our support team",
  },
  {
    keywords: ["mock test", "mock", "test", "practice"],
    reply:
      "You can attempt free IMO, NSO, IEO, IRO, IGKO, JEE Main & NEET mock tests here:\n" +
      "https://olympiadquiz.org/mock.html",
  },
  {
    keywords: ["result", "score", "rank"],
    reply:
      "You can view your latest results and All India Rank by logging in at:\n" +
      "https://olympiadquiz.org/dashboard.html",
  },
  {
    keywords: ["certificate"],
    reply:
      "Your e-certificate (for Live Arena participation) is emailed to your registered email address after the event. " +
      "Check your inbox/spam folder, or log in to your dashboard to confirm your participation status.",
  },
  {
    keywords: ["payment", "refund", "subscription", "razorpay"],
    reply:
      "For payment or subscription queries, please share your registered email/phone and order ID here, " +
      "or reach us at https://olympiadquiz.org/contact.html - our team will help you shortly.",
  },
  {
    keywords: ["contact", "help", "support"],
    reply:
      "You can reach our support team anytime at https://olympiadquiz.org/contact.html, " +
      "or just describe your issue here and we'll get back to you.",
  },
];

const FALLBACK_REPLY =
  "Sorry, I didn't quite get that. 🙏 Reply *Hi* to see the menu, or visit https://olympiadquiz.org for help.";

/**
 * Matches free-text input against the keyword rules above.
 * @param {string} incomingText
 * @returns {string|null} A reply, or null if nothing matched at all
 *                          (distinct from the fallback, so callers can
 *                          decide whether to hand off elsewhere).
 */
function matchKeywordReply(incomingText) {
  if (!incomingText) return null;
  const normalized = incomingText.trim().toLowerCase();

  for (const rule of RULES) {
    if (rule.keywords.some((keyword) => normalized.includes(keyword))) {
      return rule.reply;
    }
  }
  return null;
}

/**
 * =====================================================================
 * FUTURE AI PLACEHOLDER (feature #19)
 * =====================================================================
 * Swap this out once an OpenAI (or other LLM) backend is wired up.
 * Signature is intentionally async + accepts a `context` object now so
 * adding a real implementation later needs no caller changes.
 *
 * @param {string} incomingText
 * @param {Object} [context] - e.g. { phone, name, history } for future use.
 * @returns {Promise<string|null>} A generated reply, or null to fall
 *                                   through to FALLBACK_REPLY.
 */
async function getAiReply(incomingText, context = {}) {
  // TODO: integrate OpenAI (or similar) here. Example shape:
  //   const completion = await openai.chat.completions.create({...});
  //   return completion.choices[0].message.content;
  return null;
}

/**
 * Main entry point used by webhook.js. Tries the keyword rules first
 * (fast, free, deterministic), then falls back to the AI placeholder,
 * then a generic fallback message.
 *
 * @param {string} incomingText
 * @param {Object} [context]
 * @returns {Promise<string>}
 */
async function getReply(incomingText, context = {}) {
  const keywordReply = matchKeywordReply(incomingText);
  if (keywordReply) return keywordReply;

  const aiReply = await getAiReply(incomingText, context);
  if (aiReply) return aiReply;

  return FALLBACK_REPLY;
}

module.exports = {
  getReply,
  matchKeywordReply,
  getAiReply,
  FALLBACK_REPLY,
};
