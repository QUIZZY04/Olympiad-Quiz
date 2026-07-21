/**
 * =====================================================================
 * WHATSAPP MESSAGE LOGGER
 * =====================================================================
 * All Firestore writes related to the WhatsApp module live here:
 *   - whatsapp_logs             append-only audit trail of every
 *                                inbound/outbound message + status update
 *   - whatsapp_processed_events atomic dedup ledger for webhook events
 *   - whatsapp_broadcast_logs   one summary document per broadcast run
 *
 * None of these collections are read or written by any existing
 * function, so this file cannot affect current behavior.
 * =====================================================================
 */

const { db, admin, COLLECTIONS } = require("../config");

const FieldValue = admin.firestore.FieldValue;

/**
 * Logs a single message (inbound or outbound) to `whatsapp_logs`.
 *
 * @param {Object} entry
 * @param {string} entry.phone - E.164-ish phone number (digits only, no '+').
 * @param {string} entry.direction - "inbound" | "outbound".
 * @param {string} entry.status - "sent" | "delivered" | "read" | "failed" | "received".
 * @param {string} [entry.message] - Plain text body (for text messages / chatbot replies).
 * @param {string} [entry.templateName] - Name of the template used, if any.
 * @param {string} [entry.messageId] - Meta's wamid, when available.
 * @param {string} [entry.category] - Logical category: otp | payment_success | registration_success |
 *                                     reminder_24h | reminder_1h | result | certificate | broadcast |
 *                                     chatbot | newsletter | greeting | inbound.
 * @param {Object} [entry.error] - Error details, if the send/receive failed.
 * @returns {Promise<string>} The new log document ID.
 */
async function logMessage(entry) {
  const doc = await db.collection(COLLECTIONS.LOGS).add({
    phone: entry.phone || null,
    direction: entry.direction,
    status: entry.status,
    message: entry.message || null,
    templateName: entry.templateName || null,
    messageId: entry.messageId || null,
    category: entry.category || "general",
    error: entry.error ? String(entry.error.message || entry.error) : null,
    // Optional, caller-supplied extras - null for every existing caller that
    // doesn't pass them (no behavior change for any existing log entry shape).
    uid: entry.uid || null,
    studentName: entry.studentName || null,
    metaResponse: entry.metaResponse || null,
    timestamp: FieldValue.serverTimestamp(),
  });
  return doc.id;
}

/** Convenience wrapper for outbound sends. */
function logOutbound(entry) {
  return logMessage({ ...entry, direction: "outbound" });
}

/** Convenience wrapper for inbound messages received from users. */
function logInbound(entry) {
  return logMessage({ ...entry, direction: "inbound", status: "received" });
}

/**
 * Updates the status of a previously logged outbound message when Meta
 * sends a "sent" / "delivered" / "read" / "failed" status callback.
 * We can't always find the original log row (Meta's wamid isn't stored
 * until after the send responds), so this simply appends a new status
 * row keyed by messageId rather than mutating history in place -
 * keeping `whatsapp_logs` a pure append-only audit trail.
 *
 * @param {Object} status
 * @param {string} status.messageId - Meta's wamid.
 * @param {string} status.status - "sent" | "delivered" | "read" | "failed".
 * @param {string} [status.phone]
 * @param {Object} [status.error]
 */
async function logStatusUpdate(status) {
  return logMessage({
    phone: status.phone,
    status: status.status,
    messageId: status.messageId,
    category: "status_update",
    error: status.error,
    direction: "outbound",
  });
}

/**
 * Atomically records that a Meta webhook event has been processed, so a
 * retried delivery (Meta retries on non-2xx or timeout) is never handled
 * twice. Uses `.create()` which fails if the document already exists -
 * this is race-safe across concurrent invocations, unlike a get-then-set.
 *
 * @param {string} eventId - A stable id for the event (e.g. the message's
 *                            `id` field, or `${field}_${timestamp}` for
 *                            status callbacks that have no message id).
 * @returns {Promise<boolean>} true if this is the FIRST time we've seen
 *                              the event (caller should process it),
 *                              false if it's a duplicate (caller should skip).
 */
async function claimWebhookEvent(eventId) {
  if (!eventId) {
    // No stable id to dedup on - process it, but don't crash.
    return true;
  }
  try {
    await db.collection(COLLECTIONS.PROCESSED_EVENTS).doc(eventId).create({
      processedAt: FieldValue.serverTimestamp(),
    });
    return true;
  } catch (error) {
    // ALREADY_EXISTS (code 6) means we've handled this event before.
    if (error.code === 6 || /already exists/i.test(error.message || "")) {
      return false;
    }
    // Any other error (e.g. transient Firestore issue): fail open and
    // process the event rather than silently dropping a real message.
    console.error("claimWebhookEvent: unexpected error, processing anyway:", error.message);
    return true;
  }
}

/**
 * Writes a single summary document for a completed broadcast run.
 */
async function logBroadcastSummary(summary) {
  const doc = await db.collection(COLLECTIONS.BROADCAST_LOGS).add({
    ...summary,
    createdAt: FieldValue.serverTimestamp(),
  });
  return doc.id;
}

module.exports = {
  logMessage,
  logOutbound,
  logInbound,
  logStatusUpdate,
  claimWebhookEvent,
  logBroadcastSummary,
};
