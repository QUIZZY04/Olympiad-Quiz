/**
 * =====================================================================
 * AI ASSISTANT - CONVERSATION ENGINE (Phase 1)
 * =====================================================================
 * The bounded, single-turn tool-calling loop against OpenAI's Responses
 * API. Called from chatbot.js's getReply() ONLY when
 * whatsapp_ai_settings.enabled === true - see chatbot.js for the
 * default-off/graceful-fallback branching.
 *
 * Conversation state is entirely OUR OWN Firestore data (manual `input`
 * accumulation within a turn, `store:false` on every call) rather than
 * relying on OpenAI-side retention (`previous_response_id`) - this keeps
 * continuity fully under this codebase's control and easy to reason
 * about/replay/debug.
 *
 * `handleTurn()` returns the SINGLE final reply string (or null to stay
 * silent, e.g. once a conversation is flagged human_required) - the
 * caller (webhook.js) sends it exactly once. Nothing in this file ever
 * calls sendWhatsAppMessage itself.
 * =====================================================================
 */

const OpenAI = require("openai");
const { db, admin } = require("../config");
const { normalizePhoneNumber } = require("./whatsappService");
const { TOOL_DEFS, executeTool } = require("./aiTools");
const { logAiTurn } = require("./aiLogger");
const conversationStore = require("./conversationStore");

const FieldValue = admin.firestore.FieldValue;
const MSGS = "whatsapp_messages";

const LOCK_LEASE_MS = 20000; // self-expiring in-flight lock, survives a crashed invocation
const DAILY_CAP_FALLBACK =
  "You've reached today's automated-reply limit for this number. Please try again tomorrow, or visit https://olympiadquiz.org.";

let _client = null;
function client() {
  if (!_client) _client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return _client;
}

async function loadHistory(convRef, historyLimit) {
  const snap = await convRef.collection(MSGS).orderBy("createdAt", "desc").limit(historyLimit).get();
  return snap.docs.map((d) => d.data()).reverse();
}

/** Folds any tool_summary rows in the loaded history into one synthetic
 * note, and converts user/assistant rows into the simple {role, content}
 * "easy input message" shape the Responses API accepts. Tool-call items
 * from a DIFFERENT, already-finished `responses.create()` call are not
 * documented as safe to replay verbatim across turns, so we deliberately
 * don't try - a condensed text note keeps the model informed without it. */
function historyToInput(history) {
  const toolNotes = history.filter((m) => m.role === "tool_summary").map((m) => m.content);
  const turns = history
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role, content: m.content }));

  if (toolNotes.length) {
    turns.unshift({
      role: "assistant",
      content: `(Internal context, not shown to the student: earlier in this conversation I already looked up: ${toolNotes.join("; ")})`,
    });
  }
  return turns;
}

async function persistTurn(convRef, userText, assistantText, toolNamesUsed) {
  const batch = db.batch();
  const msgsRef = convRef.collection(MSGS);
  batch.set(msgsRef.doc(), { role: "user", content: userText, toolName: null, createdAt: FieldValue.serverTimestamp() });
  if (toolNamesUsed.length) {
    batch.set(msgsRef.doc(), {
      role: "tool_summary",
      content: `Called ${toolNamesUsed.join(", ")}`,
      toolName: toolNamesUsed.join(","),
      createdAt: FieldValue.serverTimestamp(),
    });
  }
  batch.set(msgsRef.doc(), { role: "assistant", content: assistantText, toolName: null, createdAt: FieldValue.serverTimestamp() });
  await batch.commit();
}

/**
 * @param {Object} args
 * @param {string} args.phone - raw inbound sender number (Meta's `msg.from`).
 * @param {string} args.text - the inbound message text.
 * @param {Object} args.settings - result of aiSettings.getAiSettings().
 * @param {{ref, data}} [args.conversation] - already resolved by the caller
 *        (chatbot.js) to check the handover gate before routing here -
 *        pass it through to avoid a second Firestore read. Falls back to
 *        resolving it here if omitted (e.g. direct/test invocation).
 * @returns {Promise<string|null>} the reply to send, or null to send nothing.
 */
async function handleTurn({ phone: rawPhone, text, settings, conversation }) {
  const phone = normalizePhoneNumber(rawPhone) || rawPhone;
  const { ref: convRef, data: conv } = conversation || (await conversationStore.getOrCreateConversation(phone));

  // --- Gate 1: human handover already requested - stay silent (with an
  // occasional holding message) and spend zero tokens. Normally already
  // caught by chatbot.js before this is even called; kept here too as
  // defense-in-depth for any direct caller. ---
  const handoverCheck = await conversationStore.checkHandoverGate(convRef, conv);
  if (handoverCheck.blocked) return handoverCheck.reply;

  // --- Gate 2: short in-flight lease lock, guards against two inbound
  // messages from the same number racing each other into overlapping
  // OpenAI calls (a real risk once a turn can take several seconds). ---
  const lockUntil = conv.aiLockUntil?.toMillis?.() || 0;
  if (lockUntil > Date.now()) return null;
  await convRef.update({ aiLockUntil: admin.firestore.Timestamp.fromMillis(Date.now() + LOCK_LEASE_MS) });

  // --- Gate 3: per-phone daily cost cap. ---
  const today = new Date().toISOString().slice(0, 10);
  const dailyCount = conv.dailyTurnCountDate === today ? conv.dailyTurnCount || 0 : 0;
  if (dailyCount >= (settings.dailyAiTurnCapPerPhone || 40)) {
    await convRef.update({ aiLockUntil: FieldValue.delete() });
    return DAILY_CAP_FALLBACK;
  }

  const uid = await conversationStore.resolveUid(phone, conv.uid);
  if (uid && uid !== conv.uid) {
    await convRef.update({ uid, uidResolvedAt: FieldValue.serverTimestamp() });
  }

  const history = await loadHistory(convRef, settings.historyLimit || 20);
  const serverContext = { phone, uid, faqs: settings.faqs || [] };
  const startedAt = Date.now();

  const instructions = `${settings.systemPrompt}\n\nSuggested greeting style for a new/greeting message (adapt naturally, don't repeat verbatim every time): ${settings.greetingMessage}`;
  let input = [...historyToInput(history), { role: "user", content: text }];

  let response;
  let finalText;
  let toolNamesUsed = [];
  let iterations = 0;
  let status = "ok";

  try {
    response = await client().responses.create({
      model: settings.model,
      instructions,
      input,
      tools: TOOL_DEFS,
      tool_choice: "auto",
      max_output_tokens: settings.maxOutputTokens || 400,
      temperature: settings.temperature ?? 0.4,
      store: false,
    });

    const maxIter = settings.maxToolIterations || 4;
    while (iterations < maxIter) {
      const calls = (response.output || []).filter((item) => item.type === "function_call");
      if (calls.length === 0) break;

      input.push(...response.output);
      for (const call of calls) {
        toolNamesUsed.push(call.name);
        let callArgs = {};
        try { callArgs = JSON.parse(call.arguments || "{}"); } catch (_) { /* malformed args -> treat as empty */ }

        const result = await executeTool(call.name, callArgs, serverContext);
        input.push({ type: "function_call_output", call_id: call.call_id, output: JSON.stringify(result) });
      }

      iterations++;
      const isLastAllowedRound = iterations >= maxIter;
      response = await client().responses.create({
        model: settings.model,
        instructions,
        input,
        tools: TOOL_DEFS,
        // Forces a text-only answer on the last allowed round - this, not
        // just the loop bound, is what GUARANTEES a real reply instead of
        // discarding a 5th tool-call request.
        tool_choice: isLastAllowedRound ? "none" : "auto",
        max_output_tokens: settings.maxOutputTokens || 400,
        store: false,
      });
    }

    finalText = (response.output_text || "").trim() || settings.fallbackReply;
  } catch (error) {
    console.error("aiEngine.handleTurn: OpenAI call failed:", error.message);
    finalText = settings.fallbackReply;
    status = "fallback";
  }

  const latencyMs = Date.now() - startedAt;
  const handoverTriggered = toolNamesUsed.includes("escalateToHuman");

  await convRef
    .update({
      aiLockUntil: FieldValue.delete(),
      turnCount: FieldValue.increment(1),
      dailyTurnCount: dailyCount + 1,
      dailyTurnCountDate: today,
      lastMessageAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    })
    .catch((e) => console.error("aiEngine: conversation doc update failed:", e.message));

  persistTurn(convRef, text, finalText, toolNamesUsed).catch((e) =>
    console.error("aiEngine: history persist failed:", e.message)
  );

  logAiTurn({
    phone,
    uid,
    model: settings.model,
    promptText: text,
    finalReplyText: finalText,
    toolCalls: toolNamesUsed,
    toolIterations: iterations,
    latencyMs,
    usage: response?.usage,
    handoverTriggered,
    status,
  }).catch((e) => console.error("aiEngine: whatsapp_ai_logs write failed:", e.message));

  // If the model itself called escalateToHuman this turn, still deliver
  // its final natural-language reply (e.g. "Sure, connecting you now...")
  // - the SILENCE behavior only kicks in on the student's NEXT message,
  // once conv.status is already human_required (Gate 1 above).
  return finalText;
}

module.exports = { handleTurn };
