/**
 * =====================================================================
 * WHATSAPP CHATBOT - MAIN ROUTER
 * =====================================================================
 * `getReply()` is the only thing webhook.js calls. Precedence, cheapest
 * (and most deterministic) first - the goal is to resolve as many
 * student questions as possible with zero OpenAI cost, using real
 * Firestore data via the same tool layer the AI uses, and only fall
 * through to OpenAI for genuinely open-ended free text or an active
 * "Talk to Support" conversation:
 *
 *   1. Human handover gate - if a conversation is flagged
 *      human_required (a REAL human ticket, escalated by the AI support
 *      persona or the no-AI fallback), everything stays silent (shared
 *      check, see conversationStore.js).
 *   2. "Talk to Support" tap/keyword - if the AI Assistant is enabled,
 *      this does NOT create an instant human ticket anymore. It starts
 *      an OpenAI-powered support-persona conversation (conversation.mode
 *      = "support") that introduces itself like a human teammate and
 *      keeps discussion scoped to OlympiadQuiz - see aiEngine.js's
 *      supportMode handling. If AI is disabled, it falls back to the
 *      old instant-escalation behavior (menuRouter.handleHuman).
 *   3. While mode="support": free text is NOT re-classified into menu
 *      actions (so a student describing their issue in normal words
 *      isn't hijacked back into the menu) - it goes straight to the AI
 *      support persona. Typing "menu" (or any explicit interactive tap)
 *      still exits back to the main menu.
 *   4. Otherwise: interactive tap or keyword-classified free text routes
 *      to menuRouter.js's tappable information portal (Live Tests, Mock
 *      Tests, Olympiad Guidance, Registration, Payments, etc.) - zero
 *      OpenAI cost either way.
 *   5. Only once nothing above matched: if the AI Assistant is enabled,
 *      fall through to aiEngine.js's general assistant for free-form
 *      questions ("explain photosynthesis", ambiguous follow-ups).
 *   6. If AI is disabled or the engine errors: FALLBACK_REPLY, nudging
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
  const inSupportMode = conversation.data.mode === "support";

  // While mid support-persona conversation, only an explicit menu
  // re-entry (a tap, or typing "hi"/"menu"/etc.) breaks out - any other
  // free text is the student continuing to describe their issue, and
  // must reach the AI support persona untouched, not get reinterpreted
  // as a menu keyword.
  const classified = menuRouter.classifyIntent(incomingText);
  const actionId = context.interactiveId || (!inSupportMode ? classified : (classified === "menu_root" ? "menu_root" : null));

  // "Talk to Support": with AI enabled, this starts a persona
  // conversation instead of an instant ticket - see aiEngine.js.
  if (actionId === "menu_human" && settings.enabled) {
    await conversation.ref.set({ mode: "support" }, { merge: true });
    return menuRouter.SUPPORT_GREETING;
  }

  if (actionId) {
    if (inSupportMode) await conversation.ref.set({ mode: null }, { merge: true });
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

  // --- OpenAI layer: genuinely open-ended text, or an ongoing "Talk to
  // Support" persona conversation. ---
  if (settings.enabled) {
    try {
      const result = await aiEngine.handleTurn({ phone, text: incomingText, settings, conversation, supportMode: inSupportMode });
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
