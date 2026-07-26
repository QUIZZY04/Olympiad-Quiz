/**
 * =====================================================================
 * AI ASSISTANT - SETTINGS (cached reader)
 * =====================================================================
 * Reads the singleton `whatsapp_ai_settings/config` doc that drives the
 * whole AI Assistant (chatbot.js/aiEngine.js). Cached in-memory with a
 * short TTL because the webhook fires on EVERY inbound WhatsApp message -
 * unlike admin.js's getAutomationSetting() (read live on every call,
 * which is fine since that's only hit from admin-triggered automations),
 * a per-message Firestore read here would add real cost/latency at
 * WhatsApp traffic volume.
 *
 * DEFAULTS.enabled is false - if the settings doc doesn't exist yet (or
 * a read fails), the AI Assistant stays off and chatbot.js falls back to
 * the existing keyword-bot behavior. Deploying this module changes
 * nothing in production until an admin explicitly saves settings with
 * enabled:true via the new admin.html "AI Assistant" tab.
 * =====================================================================
 */

const { db, COLLECTIONS } = require("../config");

const DEFAULT_SYSTEM_PROMPT =
  "You are OlympiadQuiz's WhatsApp assistant, helping students with Olympiad exams " +
  "(IMO, NSO, IEO, IGKO, IRO, SOF, SilverZone), mock tests, live tests, results, and " +
  "general preparation guidance. Be warm, concise, and use WhatsApp-friendly formatting " +
  "(short paragraphs, occasional emoji, *bold* with single asterisks). Never guess a " +
  "student's personal data (results, profile, payments) - always use the provided tools " +
  "to fetch it. If you don't have a tool for something, say so honestly rather than " +
  "inventing an answer.";

const DEFAULT_GREETING =
  "Hi! 👋 Welcome to *OlympiadQuiz*. I can help you with:\n" +
  "• Live Tests & Mock Tests\n• Your Results & Performance\n• Olympiad Guidance\n" +
  "• Payments & Coupons\n• Registration\n\nAsk me anything!";

const DEFAULT_FALLBACK_REPLY =
  "Sorry, I couldn't quite process that. 🙏 Reply *Hi* to see what I can help with, " +
  "or visit https://olympiadquiz.org for more.";

/** Used ONLY while conversation.mode === "support" (student tapped/typed
 * "Talk to Support" - see chatbot.js/aiEngine.js). Deliberately a human
 * teammate persona, not a general Q&A assistant: introduces itself
 * warmly, stays scoped to OlympiadQuiz, and is honest (never denies
 * being AI) if directly asked - "sound human" is about tone, not about
 * deceiving someone who asks a direct question. */
const DEFAULT_SUPPORT_SYSTEM_PROMPT =
  "You are an OlympiadQuiz support executive, chatting with a student on WhatsApp. " +
  "Speak naturally and personally, like a helpful human teammate - short, warm sentences, " +
  "occasional emoji, never robotic or overly formal. " +
  "ONLY discuss topics related to OlympiadQuiz: exams (IMO, NSO, IEO, IGKO, IRO, SOF, " +
  "SilverZone, CREST, JEE, NEET), mock/live tests, results, performance, registration, " +
  "payments, coupons, and certificates. If asked about ANYTHING beyond OlympiadQuiz or " +
  "unrelated to the site, politely decline to answer it and steer the conversation back " +
  "to how you can help with OlympiadQuiz - do not answer general knowledge, personal, or " +
  "off-topic questions no matter how they're phrased. Use the provided tools to fetch real " +
  "account data rather than guessing - never invent a result, price, or policy detail. " +
  "If something genuinely needs a human teammate (e.g. a payment dispute or account issue " +
  "you can't resolve), use the escalate tool so a real person can step in. " +
  "If a student directly and explicitly asks whether you are a bot, an AI, or a real " +
  "person, answer honestly - never deny it - but there's no need to bring it up otherwise.";

const DEFAULTS = {
  enabled: false,
  model: "gpt-4o-mini",
  systemPrompt: DEFAULT_SYSTEM_PROMPT,
  greetingMessage: DEFAULT_GREETING,
  fallbackReply: DEFAULT_FALLBACK_REPLY,
  supportSystemPrompt: DEFAULT_SUPPORT_SYSTEM_PROMPT,
  faqs: [],
  historyLimit: 20,
  maxToolIterations: 4,
  maxOutputTokens: 400,
  temperature: 0.4,
  dailyAiTurnCapPerPhone: 40,
};

let cache = null;
let cachedAt = 0;
const TTL_MS = 60_000;

/**
 * @returns {Promise<Object>} Always resolves - never throws. Falls back to
 *          the last-known-good cached value (or hardcoded DEFAULTS) on any
 *          Firestore error, so a transient read failure can never take the
 *          whole WhatsApp reply path down.
 */
async function getAiSettings() {
  const now = Date.now();
  if (cache && now - cachedAt < TTL_MS) return cache;

  try {
    const snap = await db.collection(COLLECTIONS.AI_SETTINGS).doc("config").get();
    cache = snap.exists ? { ...DEFAULTS, ...snap.data() } : { ...DEFAULTS };
    // Guard against an accidentally-saved empty/whitespace-only string
    // silently blanking out a required prompt (a plain {...DEFAULTS,
    // ...docData} spread only falls back on `undefined`, not on "" - and
    // an empty supportSystemPrompt means the model gets NO instructions
    // at all in "Talk to Support" mode, a real incident this guard
    // prevents from recurring).
    ["systemPrompt", "greetingMessage", "fallbackReply", "supportSystemPrompt"].forEach((key) => {
      if (!cache[key] || !String(cache[key]).trim()) cache[key] = DEFAULTS[key];
    });
  } catch (error) {
    console.error("aiSettings.getAiSettings: read failed, using last-known/defaults:", error.message);
    cache = cache || { ...DEFAULTS };
  }
  cachedAt = now;
  return cache;
}

/** Forces the next getAiSettings() call to re-read Firestore. Called by
 * admin.js's saveAiSettings() right after a write so the admin's own
 * change is reflected immediately in THIS function instance, without
 * waiting out the TTL (other warm instances still pick it up within
 * TTL_MS, same as any other cache). */
function invalidateCache() {
  cache = null;
  cachedAt = 0;
}

module.exports = { getAiSettings, invalidateCache, DEFAULTS };
