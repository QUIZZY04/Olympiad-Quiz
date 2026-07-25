/**
 * =====================================================================
 * WHATSAPP WEBHOOK
 * =====================================================================
 * Single HTTP endpoint that handles BOTH parts of the Meta integration,
 * because Meta only lets you register one Callback URL per app:
 *
 *   GET  /whatsappWebhook  -> verification handshake (hub.challenge)
 *   POST /whatsappWebhook  -> incoming messages, delivery/read/failed
 *                             status callbacks
 *
 * Security:
 *   - GET requests must present the exact WHATSAPP_VERIFY_TOKEN.
 *   - POST requests must carry a valid X-Hub-Signature-256 computed
 *     with WHATSAPP_APP_SECRET over the raw request body.
 *   - Every event is deduped via messageLogger.claimWebhookEvent()
 *     before any side effect (send, log) runs, so Meta's automatic
 *     retries (on timeout / non-2xx) never cause double sends.
 * =====================================================================
 */

const crypto = require("crypto");
const { onRequest } = require("firebase-functions/v2/https");
const { WHATSAPP_SECRETS, WEBHOOK_VERIFY_SECRETS, AI_SECRETS, SECRET_NAMES } = require("../config");
const { logInbound, logStatusUpdate, claimWebhookEvent } = require("./messageLogger");
const chatbot = require("./chatbot");
const { sendWhatsAppMessage, sendInteractiveList, sendInteractiveButtons, sendTypingIndicator } = require("./whatsappService");

/**
 * Validates Meta's X-Hub-Signature-256 header against the raw request
 * body using the App Secret. Uses a timing-safe comparison to avoid
 * leaking information via response-time side channels.
 *
 * @param {import('express').Request} req
 * @returns {boolean}
 */
function isValidSignature(req) {
  const signatureHeader = req.get("X-Hub-Signature-256");
  const appSecret = process.env.WHATSAPP_APP_SECRET;

  if (!signatureHeader || !appSecret) return false;
  if (!req.rawBody) return false; // Firebase/Express always provides this for onRequest.

  const expectedSignature =
    "sha256=" + crypto.createHmac("sha256", appSecret).update(req.rawBody).digest("hex");

  const a = Buffer.from(signatureHeader);
  const b = Buffer.from(expectedSignature);

  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/**
 * Handles the one-time GET verification handshake Meta performs when you
 * save the Callback URL in the App Dashboard.
 * https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
 */
function handleVerification(req, res) {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    console.log("WhatsApp webhook verified successfully.");
    res.status(200).send(challenge);
  } else {
    console.warn("WhatsApp webhook verification failed: mode/token mismatch.");
    res.sendStatus(403);
  }
}

/**
 * Processes one "value" object from a webhook entry/change. A single
 * POST can contain multiple entries and multiple changes, each with
 * either `messages` (incoming) or `statuses` (delivery/read/failed).
 */
async function processValue(value) {
  const inboundMessages = value.messages || [];
  const statuses = value.statuses || [];

  for (const msg of inboundMessages) {
    const isNew = await claimWebhookEvent(msg.id);
    if (!isNew) {
      console.log(`Skipping duplicate inbound message: ${msg.id}`);
      continue;
    }

    const fromPhone = msg.from;
    // Interactive taps carry a stable `id` (menu_* action) - text-typed
    // messages don't. `text` still captures a human-readable fallback
    // (button/list title) for logging even when interactiveId drives
    // the actual routing.
    const interactiveId = msg.interactive?.list_reply?.id || msg.interactive?.button_reply?.id || null;
    const text = msg.text?.body || msg.button?.text || msg.interactive?.list_reply?.title || msg.interactive?.button_reply?.title || "";

    await logInbound({ phone: fromPhone, message: text, messageId: msg.id, category: "chatbot" });

    // Fire-and-forget: shows the "typing..." indicator immediately so the
    // student knows their message is being handled, whether the actual
    // reply ends up being an instant menu lookup or a slower AI call.
    // Never awaited - a slow/failed Graph API call here must not delay
    // (or break) generating the real reply.
    sendTypingIndicator(msg.id).catch(() => {});

    try {
      const reply = await chatbot.getReply(text, { phone: fromPhone, interactiveId });
      // `reply` can be null (e.g. a conversation flagged human_required),
      // a plain string (normal text reply), {interactiveList:...} (the
      // deterministic menu router's tappable main menu),
      // {interactiveButtons:...} (a standalone quick-reply prompt), or
      // {text, followUpButtons} (an answer followed by a "want anything
      // else?" quick-reply prompt as a second message).
      if (reply?.interactiveList) {
        await sendInteractiveList(fromPhone, reply.interactiveList);
      } else if (reply?.interactiveButtons) {
        await sendInteractiveButtons(fromPhone, reply.interactiveButtons.bodyText, reply.interactiveButtons.buttons);
      } else if (reply?.text !== undefined) {
        await sendWhatsAppMessage(fromPhone, reply.text);
        if (reply.followUpButtons) {
          await sendInteractiveButtons(fromPhone, reply.followUpButtons.bodyText, reply.followUpButtons.buttons);
        }
      } else if (reply) {
        await sendWhatsAppMessage(fromPhone, reply);
      }
    } catch (error) {
      console.error(`Chatbot reply failed for ${fromPhone}:`, error.message);
    }
  }

  for (const status of statuses) {
    // Statuses (sent/delivered/read/failed) can repeat legitimately as a
    // message moves through states, so we key the dedup on
    // id + status rather than id alone.
    const eventId = `${status.id}_${status.status}`;
    const isNew = await claimWebhookEvent(eventId);
    if (!isNew) continue;

    await logStatusUpdate({
      messageId: status.id,
      phone: status.recipient_id,
      status: status.status, // "sent" | "delivered" | "read" | "failed"
      error: status.errors?.[0],
    });
  }
}

/**
 * Handles the POST body Meta sends for every message/status event.
 * Always responds 200 quickly (even on internal errors) so Meta doesn't
 * treat a transient failure as a delivery failure and retry-storm the
 * endpoint; real errors are logged server-side for follow-up instead.
 */
async function handleIncomingEvent(req, res) {
  if (!isValidSignature(req)) {
    console.warn("WhatsApp webhook: invalid or missing signature. Rejecting request.");
    res.sendStatus(401);
    return;
  }

  try {
    const entries = req.body?.entry || [];
    for (const entry of entries) {
      const changes = entry.changes || [];
      for (const change of changes) {
        if (change.field === "messages") {
          await processValue(change.value || {});
        }
      }
    }
  } catch (error) {
    console.error("Error processing WhatsApp webhook payload:", error);
    // Fall through to a 200 response below - see comment above.
  }

  res.sendStatus(200);
}

/**
 * The single deployed Cloud Function for both webhook operations.
 */
const whatsappWebhook = onRequest(
  {
    secrets: [...new Set([...WHATSAPP_SECRETS, ...WEBHOOK_VERIFY_SECRETS, ...AI_SECRETS])],
    cors: false,
    // Bumped from 30s/256MiB: the AI Assistant's tool-calling loop (when
    // enabled) can involve several sequential OpenAI round-trips per
    // inbound message. Harmless while whatsapp_ai_settings.enabled=false.
    timeoutSeconds: 60,
    memory: "512MiB",
  },
  async (req, res) => {
    if (req.method === "GET") {
      return handleVerification(req, res);
    }
    if (req.method === "POST") {
      return handleIncomingEvent(req, res);
    }
    res.sendStatus(405);
  }
);

module.exports = { whatsappWebhook, isValidSignature };
