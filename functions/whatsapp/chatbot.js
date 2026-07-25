/**
 * =====================================================================
 * WHATSAPP CHATBOT - MAIN ROUTER
 * =====================================================================
 * `getReply()` is the only thing webhook.js calls. Precedence, cheapest
 * (and most deterministic) first - this is deliberate: the goal is to
 * resolve as many student questions as possible with zero OpenAI cost,
 * using real Firestore data via the same tool layer the AI uses, and
 * only fall through to OpenAI for genuinely open-ended free text:
 *
 *   1. Human handover gate - if a conversation is flagged
 *      human_required, BOTH the menu router and the AI stay silent
 *      (shared check, see conversationStore.js).
 *   2. Interactive tap (button/list reply) - always deterministic,
 *      routed straight to menuRouter.js, never touches OpenAI.
 *   3. Keyword-classified free text ("hi", "result", "mock test", ...) -
 *      ALSO routed to menuRouter.js (same handlers as #2, just reached
 *      via typed words instead of a tap) - still zero OpenAI cost.
 *   4. Only once neither #2 nor #3 matched: if the AI Assistant is
 *      enabled (admin.html toggle, default OFF), fall through to
 *      aiEngine.js's real OpenAI-powered agent for free-form questions
 *      ("explain photosynthesis", ambiguous phrasing, follow-ups).
 *   5. If AI is disabled or the engine errors: FALLBACK_REPLY, nudging
 *      the student back to the menu.
 * =====================================================================
 */

const aiSettings = require("./aiSettings");
const aiEngine = require("./aiEngine");
const menuRouter = require("./menuRouter");
const conversationStore = require("./conversationStore");
const { normalizePhoneNumber } = require("./whatsappService");

const FALLBACK_REPLY =
  "Sorry, I didn't quite get that. 🙏 Reply *Menu* to see what I can help with, or visit https://olympiadquiz.org for help.";

/**
 * Main entry point used by webhook.js.
 *
 * @param {string} incomingText
 * @param {Object} [context] - { phone, interactiveId } - interactiveId is
 *        set when the inbound message is a button/list tap (its `id`),
 *        extracted by webhook.js from Meta's payload.
 * @returns {Promise<string|{interactiveList:Object}|{text:string,followUpButtons:Object|null}|null>}
 *          A reply to send - plain text, an interactive list payload, or
 *          text paired with a "want anything else?" follow-up prompt -
 *          or null to send nothing at all (e.g. human_required silence).
 */
async function getReply(incomingText, context = {}) {
  const rawPhone = context.phone;
  const phone = normalizePhoneNumber(rawPhone) || rawPhone;

  const conversation = await conversationStore.getOrCreateConversation(phone);
  const handoverCheck = await conversationStore.checkHandoverGate(conversation.ref, conversation.data);
  if (handoverCheck.blocked) return handoverCheck.reply;

  const uid = await conversationStore.resolveUid(phone, conversation.data.uid);
  if (uid && uid !== conversation.data.uid) {
    await conversation.ref.update({ uid, uidResolvedAt: new Date() }).catch(() => {});
  }
  const serverContext = { phone, uid };

  // --- Deterministic layer: interactive tap first, then keyword intent -
  // both zero OpenAI cost, both backed by real Firestore data. ---
  const actionId = context.interactiveId || menuRouter.classifyIntent(incomingText);
  if (actionId) {
    const menuReply = await menuRouter.handleAction(actionId, serverContext);
    if (menuReply !== null) {
      // The main menu IS the "what next" moment, and a few actions
      // (escalation, goodbye, the free-text bridge) don't want a
      // "anything else?" prompt tacked on - everything else does.
      if (typeof menuReply === "string" && !menuRouter.NO_FOLLOWUP_ACTIONS.has(actionId)) {
        return { text: menuReply, followUpButtons: menuRouter.FOLLOWUP_BUTTONS };
      }
      return menuReply;
    }
    // actionId was an interactive id the router doesn't recognize (e.g.
    // a stale button from before a menu redesign) - fall through below
    // rather than silently dropping the message.
  }

  // --- OpenAI layer: only for text that matched nothing deterministic. ---
  const settings = await aiSettings.getAiSettings();
  if (settings.enabled) {
    try {
      const result = await aiEngine.handleTurn({ phone, text: incomingText, settings, conversation });
      if (!result.text) return null;
      if (result.skipFollowUp) return result.text;
      return { text: result.text, followUpButtons: menuRouter.FOLLOWUP_BUTTONS };
    } catch (error) {
      console.error("chatbot.getReply: aiEngine.handleTurn failed, falling back:", error.message);
    }
  }

  return FALLBACK_REPLY;
}

module.exports = { getReply, FALLBACK_REPLY };
