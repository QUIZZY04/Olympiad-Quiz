/**
 * =====================================================================
 * AI ASSISTANT - CONVERSATION LOGGING
 * =====================================================================
 * Writes one doc per AI turn to `whatsapp_ai_logs` - phone, prompt,
 * response, tools used, latency, token usage, estimated cost. Always
 * called fire-and-forget from aiEngine.js (`.catch()`-swallowed by the
 * caller) - a logging failure must never prevent a reply from sending,
 * same "never throw" spirit as whatsappService.js's sendAndLog().
 * =====================================================================
 */

const { db, admin, COLLECTIONS } = require("../config");

const FieldValue = admin.firestore.FieldValue;

// $ per 1M tokens. Update as OpenAI pricing changes / new models are added
// via whatsapp_ai_settings.model.
const MODEL_PRICING_PER_1M = {
  "gpt-4o-mini": { input: 0.15, output: 0.6 },
  "gpt-4o": { input: 2.5, output: 10.0 },
};

function estimateCostUsd(model, tokensUsed) {
  const pricing = MODEL_PRICING_PER_1M[model] || { input: 0, output: 0 };
  return (tokensUsed.input / 1e6) * pricing.input + (tokensUsed.output / 1e6) * pricing.output;
}

/**
 * @param {Object} turn
 * @param {string} turn.phone
 * @param {string|null} turn.uid
 * @param {string} turn.model
 * @param {string} turn.promptText - this turn's inbound text only (not full history).
 * @param {string} turn.finalReplyText
 * @param {string[]} turn.toolCalls - tool NAMES only, never args/results (avoids PII duplication).
 * @param {number} turn.toolIterations
 * @param {number} turn.latencyMs
 * @param {{input_tokens?: number, output_tokens?: number, total_tokens?: number}} [turn.usage]
 * @param {boolean} turn.handoverTriggered
 * @param {string} [turn.status] - "ok" | "fallback" | "human_required_skip"
 */
async function logAiTurn(turn) {
  const tokensUsed = {
    input: turn.usage?.input_tokens || 0,
    output: turn.usage?.output_tokens || 0,
    total: turn.usage?.total_tokens || 0,
  };

  await db.collection(COLLECTIONS.AI_LOGS).add({
    phone: turn.phone,
    uid: turn.uid || null,
    model: turn.model,
    promptText: turn.promptText || "",
    finalReplyText: turn.finalReplyText || "",
    toolCalls: turn.toolCalls || [],
    toolIterations: turn.toolIterations || 0,
    latencyMs: turn.latencyMs || 0,
    tokensUsed,
    estimatedCostUsd: estimateCostUsd(turn.model, tokensUsed),
    handoverTriggered: !!turn.handoverTriggered,
    status: turn.status || "ok",
    createdAt: FieldValue.serverTimestamp(),
  });
}

module.exports = { logAiTurn, estimateCostUsd, MODEL_PRICING_PER_1M };
