/**
 * =====================================================================
 * WHATSAPP CHATBOT - MAIN ROUTER
 * =====================================================================
 * `getReply()` is the only thing webhook.js calls. Precedence, cheapest
 * (and most deterministic) first - the goal is to resolve as many
 * student questions as possible with zero OpenAI cost, using real
 * Firestore data via the same tool layer the AI uses, and only fall
 * through to OpenAI for genuinely open-ended free text:
 *
 *   1. Human handover gate - if a conversation is flagged
 *      human_required (a real human ticket), everything stays silent
 *      (shared check, see conversationStore.js) so a real admin can take
 *      over the thread from admin.html's WhatsApp Manager > AI Assistant
 *      tab without the bot talking over them.
 *   2. "Talk to Support" tap/keyword - ALWAYS an instant, real handover
 *      (menuRouter.handleHuman -> escalateToHuman), never an AI persona.
 *      The student gets an immediate "connecting you" reply and the
 *      conversation flips to human_required right away, regardless of
 *      whether the AI Assistant is enabled for everything else.
 *   3. Otherwise: interactive tap or keyword-classified free text routes
 *      to menuRouter.js's tappable information portal (Live Tests, Mock
 *      Tests, Olympiad Guidance, Registration, Payments, etc.) - zero
 *      OpenAI cost either way.
 *   4. Only once nothing above matched: if the AI Assistant is enabled,
 *      fall through to aiEngine.js's general assistant for free-form
 *      questions ("explain photosynthesis", ambiguous follow-ups).
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
  const settings = await aiSettings.getAiSettings();

  const actionId = context.interactiveId || menuRouter.classifyIntent(incomingText);

  if (actionId) {
    const menuReply = await menuRouter.handleAction(actionId, serverContext);
    if (menuReply !== null) {
      // Menus/sub-menus ARE the "what next" moment, and a few actions
      // (escalation, goodbye) don't want a "anything else?" prompt
      // tacked on - everything else (an actual answer) does.
      if (typeof menuReply === "string" && !menuRouter.NO_FOLLOWUP_ACTIONS.has(actionId)) {
        return { text: menuReply, followUpButtons: menuRouter.FOLLOWUP_BUTTONS };
      }
      return menuReply;
    }
    // actionId was an interactive id the router doesn't recognize (e.g.
    // a stale button from before a menu redesign) - fall through below
    // rather than silently dropping the message.
  }

  // --- OpenAI layer: only genuinely open-ended text that didn't match
  // any menu action. "Talk to Support" never reaches here - it's always
  // handled above as an instant real handover. ---
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
