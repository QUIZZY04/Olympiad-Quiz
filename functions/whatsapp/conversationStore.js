/**
 * =====================================================================
 * AI ASSISTANT - SHARED CONVERSATION STATE
 * =====================================================================
 * Small helpers shared by BOTH the deterministic menu router
 * (menuRouter.js, zero-OpenAI-cost path) and the AI engine
 * (aiEngine.js, OpenAI path) so a conversation flagged human_required
 * silences EITHER path identically, and phone->uid resolution isn't
 * duplicated/drifted between the two.
 * =====================================================================
 */

const { db, admin } = require("../config");

const FieldValue = admin.firestore.FieldValue;
const CONV = "whatsapp_conversations";
const HANDOVER_HOLDING_MSG = "Thanks for your patience — our team will reply here shortly. 🙏";
const HANDOVER_COOLDOWN_MS = 60 * 60 * 1000; // don't repeat the holding message more than once/hour

/** @returns {Promise<{ref: FirebaseFirestore.DocumentReference, data: Object}>} */
async function getOrCreateConversation(phone) {
  const ref = db.collection(CONV).doc(phone);
  const snap = await ref.get();
  if (snap.exists) return { ref, data: snap.data() };

  const initial = {
    phone,
    uid: null,
    status: "active",
    turnCount: 0,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  };
  await ref.set(initial);
  return { ref, data: initial };
}

/** Resolves a WhatsApp phone number to an existing users/{uid}. Hedges
 * against `users.phone`/`phoneNumber` being stored with or without a "+"
 * prefix (both forms exist in the data) and with or without the country
 * code. Cache the result on the conversation doc (pass it back in as
 * `cachedUid` next time) so this query runs at most once per number. */
async function resolveUid(phone, cachedUid) {
  if (cachedUid) return cachedUid;
  const last10 = phone.slice(-10);
  const candidates = [phone, last10, `+${phone}`, `+${last10}`];
  for (const field of ["phone", "phoneNumber"]) {
    try {
      const snap = await db.collection("users").where(field, "in", candidates).limit(1).get();
      if (!snap.empty) return snap.docs[0].id;
    } catch (error) {
      console.error(`conversationStore.resolveUid: query on ${field} failed:`, error.message);
    }
  }
  return null;
}

/**
 * Checks the human-handover gate. If the conversation is flagged
 * human_required, BOTH the menu router and the AI engine must stay
 * silent (a human owns this conversation now) - this is the one shared
 * check that makes that true regardless of which path a message would
 * otherwise take.
 * @returns {Promise<{blocked: boolean, reply: string|null}>} blocked=true
 *          means the caller should return `reply` (possibly null, i.e.
 *          truly silent) and do nothing else.
 */
async function checkHandoverGate(ref, conv) {
  if (conv.status !== "human_required") return { blocked: false, reply: null };

  const lastAck = conv.lastHandoverAckAt?.toMillis?.() || 0;
  if (Date.now() - lastAck > HANDOVER_COOLDOWN_MS) {
    await ref.update({ lastHandoverAckAt: FieldValue.serverTimestamp() });
    return { blocked: true, reply: HANDOVER_HOLDING_MSG };
  }
  return { blocked: true, reply: null };
}

module.exports = { getOrCreateConversation, resolveUid, checkHandoverGate, CONV };
