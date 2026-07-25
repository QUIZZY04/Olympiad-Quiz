/**
 * =====================================================================
 * WHATSAPP CHATBOT
 * =====================================================================
 * `getReply()` is the only thing webhook.js calls, so swapping the
 * matching strategy never requires touching webhook.js. Two modes,
 * switched by the admin.html "AI Assistant" tab
 * (whatsapp_ai_settings.enabled, DEFAULT: false):
 *
 *   - enabled=false (default): the original dependency-free keyword
 *     matcher below, unchanged, byte-for-byte identical to before the AI
 *     Assistant existed.
 *   - enabled=true: every message routes through aiEngine.js's real
 *     OpenAI-powered conversational agent instead (including greetings
 *     like "Hi" - it replaces the keyword menu, not just supplements it,
 *     per the AI Assistant spec's own example flow). Any error from the
 *     engine gracefully degrades to the keyword+fallback path below for
 *     that single message, so a bad AI response never breaks a reply.
 * =====================================================================
 */

const aiSettings = require("./aiSettings");
const aiEngine = require("./aiEngine");

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
 * Main entry point used by webhook.js.
 *
 * @param {string} incomingText
 * @param {Object} [context] - { phone } at minimum.
 * @returns {Promise<string|null>} A reply to send, or null to send
 *          nothing at all (e.g. a conversation already flagged
 *          human_required by the AI Assistant - see aiEngine.js).
 */
async function getReply(incomingText, context = {}) {
  const settings = await aiSettings.getAiSettings();

  if (settings.enabled) {
    try {
      return await aiEngine.handleTurn({ phone: context.phone, text: incomingText, settings });
    } catch (error) {
      console.error("chatbot.getReply: aiEngine.handleTurn failed, falling back to keyword flow:", error.message);
      // Fall through to the legacy behavior below for this one message -
      // the AI Assistant misbehaving must never break a reply entirely.
    }
  }

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
