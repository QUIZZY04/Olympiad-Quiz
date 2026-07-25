/**
 * =====================================================================
 * WHATSAPP ADMIN CONSOLE — BACKEND
 * =====================================================================
 * Callable functions backing the "WhatsApp Manager" admin.html panel:
 * individual sends, template sync/list, broadcast scheduling, stats,
 * failed-message retry, and read-only settings info.
 *
 * Every callable here uses the exact same admin gate already used by
 * every other admin-only function in this codebase (sendBulkEmail,
 * sendBulkSMS, sendPushNotification, sendWhatsAppBroadcast) - no new
 * authorization mechanism is introduced.
 *
 * This file only ever calls into the EXISTING whatsappService.js send
 * functions - it never re-implements sending/logging logic. The one
 * genuinely new Graph API call path is syncTemplates() (a GET to the
 * Message Templates endpoint, distinct from whatsappService.js's POST
 * -to-/messages path), which lives entirely here.
 * =====================================================================
 */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const {
  db,
  admin,
  WHATSAPP_SECRETS,
  SECRET_NAMES,
  COLLECTIONS,
  GRAPH_API_VERSION,
  GRAPH_BASE_URL,
  ADMIN_EMAIL,
} = require("../config");
const whatsappService = require("./whatsappService");
const templateRegistry = require("./templateRegistry");

const FieldValue = admin.firestore.FieldValue;
const Timestamp = admin.firestore.Timestamp;

function assertAdmin(request) {
  if (request.auth?.token?.email !== ADMIN_EMAIL) {
    throw new HttpsError("permission-denied", "You must be an admin to perform this action.");
  }
}

/**
 * Reads whatsapp_settings/{key}. Fails OPEN (enabled, no delay) if the
 * doc doesn't exist yet, so this gate never changes current behavior
 * merely because an admin hasn't visited the Settings tab yet. Used by
 * the settings-gate inserted into the existing purchase/result triggers
 * (functions/index.js) and the existing scheduled jobs (scheduler.js).
 */
async function getAutomationSetting(key) {
  const snap = await db.collection(COLLECTIONS.SETTINGS).doc(key).get();
  if (!snap.exists) return { enabled: true, delayMinutes: 0 };
  const data = snap.data();
  return { enabled: data.enabled !== false, delayMinutes: Number(data.delayMinutes) || 0 };
}

// ---------------------------------------------------------------------
// User lookup (shared by lookupWhatsAppUser and sendWhatsApp)
// ---------------------------------------------------------------------

async function resolveUserByLookup(lookupType, lookupValue) {
  if (lookupType === "phone") {
    const normalized = whatsappService.normalizePhoneNumber(lookupValue);
    if (!normalized) throw new HttpsError("invalid-argument", "Invalid phone number.");
    const snap = await db.collection("users").where("phone", "==", lookupValue).limit(1).get();
    if (!snap.empty) {
      return { id: snap.docs[0].id, ...snap.docs[0].data(), _resolvedPhone: normalized };
    }
    // No matching user document - still a valid send target (e.g. a lead not yet registered).
    return { id: null, _resolvedPhone: normalized };
  }

  if (lookupType === "uid") {
    const snap = await db.collection("users").doc(lookupValue).get();
    if (!snap.exists) throw new HttpsError("not-found", "No matching user found.");
    const data = snap.data();
    if (!data.phone) throw new HttpsError("failed-precondition", "This user has no phone number on file.");
    return { id: snap.id, ...data, _resolvedPhone: data.phone };
  }

  if (lookupType === "email") {
    const snap = await db.collection("users").where("email", "==", String(lookupValue).toLowerCase()).limit(1).get();
    if (snap.empty) throw new HttpsError("not-found", "No matching user found.");
    const data = snap.docs[0].data();
    if (!data.phone) throw new HttpsError("failed-precondition", "This user has no phone number on file.");
    return { id: snap.docs[0].id, ...data, _resolvedPhone: data.phone };
  }

  if (lookupType === "name") {
    const snap = await db.collection("users").where("name", "==", lookupValue).limit(5).get();
    if (snap.empty) throw new HttpsError("not-found", "No matching user found.");
    if (snap.size > 1) {
      throw new HttpsError("failed-precondition", "Multiple users matched this name; use email or phone instead.");
    }
    const data = snap.docs[0].data();
    if (!data.phone) throw new HttpsError("failed-precondition", "This user has no phone number on file.");
    return { id: snap.docs[0].id, ...data, _resolvedPhone: data.phone };
  }

  throw new HttpsError("invalid-argument", "lookupType must be one of: uid, email, phone, name.");
}

/** Search-and-preview for the "Send Individual" tab, before actually sending. */
exports.lookupWhatsAppUser = onCall({}, async (request) => {
  assertAdmin(request);
  const { lookupType, lookupValue } = request.data || {};
  if (!lookupType || !lookupValue) {
    throw new HttpsError("invalid-argument", "lookupType and lookupValue are required.");
  }
  const user = await resolveUserByLookup(lookupType, lookupValue);
  return {
    uid: user.id,
    name: user.name || null,
    email: user.email || null,
    phone: user._resolvedPhone,
    class: user.class || user.studentClass || null,
    promoConsent: user.promo_consent === true,
  };
});

/** Sends a single template or free-text message to one user/number. */
exports.sendWhatsApp = onCall({ secrets: WHATSAPP_SECRETS, timeoutSeconds: 60 }, async (request) => {
  assertAdmin(request);
  const { lookupType, lookupValue, useTemplate, templateName, bodyParams, message } = request.data || {};

  if (!lookupType || !lookupValue) {
    throw new HttpsError("invalid-argument", "lookupType and lookupValue are required.");
  }
  if (useTemplate && !templateName) {
    throw new HttpsError("invalid-argument", "templateName is required when useTemplate is true.");
  }
  if (!useTemplate && !message) {
    throw new HttpsError("invalid-argument", "message is required when useTemplate is false.");
  }

  const user = await resolveUserByLookup(lookupType, lookupValue);
  const phone = user._resolvedPhone;

  if (!useTemplate) {
    return await whatsappService.sendWhatsAppMessage(phone, message);
  }

  const variables = {};
  (bodyParams || []).forEach((value, i) => { variables[i + 1] = value; });
  return await whatsappService.sendTemplate({
    templateName,
    phoneNumber: phone,
    variables,
    uid: user.id,
    studentName: user.name,
  });
});

// ---------------------------------------------------------------------
// Scheduled broadcasts (write-only; a separate onSchedule poller in
// functions/whatsapp/scheduler.js does the actual sending)
// ---------------------------------------------------------------------

exports.scheduleBroadcast = onCall({}, async (request) => {
  assertAdmin(request);
  const { scheduledFor, message, templateName, targetType, targetValue, useTemplate } = request.data || {};

  if (!message || !targetType) {
    throw new HttpsError("invalid-argument", "message and targetType are required.");
  }
  const scheduledDate = new Date(scheduledFor);
  if (isNaN(scheduledDate.getTime()) || scheduledDate.getTime() <= Date.now()) {
    throw new HttpsError("invalid-argument", "scheduledFor must be a valid future date/time.");
  }

  const docRef = await db.collection(COLLECTIONS.SCHEDULE).add({
    scheduledFor: Timestamp.fromDate(scheduledDate),
    status: "scheduled",
    message,
    templateName: templateName || null,
    targetType,
    targetValue: targetValue || "",
    useTemplate: useTemplate !== false,
    createdBy: request.auth.token.email,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
    attemptedAt: null,
    result: null,
    error: null,
  });

  return { success: true, scheduleId: docRef.id };
});

async function updateScheduleStatus(request, allowedFromStatuses, newStatus) {
  assertAdmin(request);
  const { scheduleId } = request.data || {};
  if (!scheduleId) throw new HttpsError("invalid-argument", "scheduleId is required.");

  const ref = db.collection(COLLECTIONS.SCHEDULE).doc(scheduleId);
  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError("not-found", "Scheduled broadcast not found.");

  const currentStatus = snap.data().status;
  if (!allowedFromStatuses.includes(currentStatus)) {
    throw new HttpsError(
      "failed-precondition",
      `Cannot move to "${newStatus}" from current status "${currentStatus}".`
    );
  }

  await ref.update({ status: newStatus, updatedAt: FieldValue.serverTimestamp() });
  return { success: true };
}

exports.pauseScheduledBroadcast = onCall({}, (request) => updateScheduleStatus(request, ["scheduled"], "paused"));
exports.resumeScheduledBroadcast = onCall({}, (request) => updateScheduleStatus(request, ["paused"], "scheduled"));
exports.cancelScheduledBroadcast = onCall({}, (request) =>
  updateScheduleStatus(request, ["scheduled", "paused"], "cancelled")
);

// ---------------------------------------------------------------------
// Template sync (live Meta API) + cached list read
// ---------------------------------------------------------------------

async function fetchAllTemplates(wabaId, token) {
  const templates = [];
  let url =
    `${GRAPH_BASE_URL}/${wabaId}/message_templates` +
    `?fields=id,name,category,language,status,components,rejected_reason&limit=100`;

  while (url) {
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const json = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new HttpsError("internal", json?.error?.message || `Meta API error (HTTP ${response.status})`);
    }
    templates.push(...(json.data || []));
    url = json.paging?.next || null;
  }
  return templates;
}

exports.syncTemplates = onCall(
  { secrets: [...WHATSAPP_SECRETS, SECRET_NAMES.BUSINESS_ACCOUNT_ID] },
  async (request) => {
    assertAdmin(request);

    const wabaId = process.env.WHATSAPP_BUSINESS_ACCOUNT_ID;
    if (!wabaId) {
      throw new HttpsError(
        "failed-precondition",
        "WHATSAPP_BUSINESS_ACCOUNT_ID secret is not set. Run: " +
          "firebase functions:secrets:set WHATSAPP_BUSINESS_ACCOUNT_ID, then redeploy syncTemplates before trying again."
      );
    }

    const metaTemplates = await fetchAllTemplates(wabaId, process.env.WHATSAPP_TOKEN);
    const seenIds = new Set();
    const batch = db.batch();

    for (const t of metaTemplates) {
      seenIds.add(t.id);
      const bodyComponent = (t.components || []).find((c) => c.type === "BODY");
      const bodyText = bodyComponent?.text || "";
      const variableCount = (bodyText.match(/\{\{\d+\}\}/g) || []).length;

      batch.set(db.collection(COLLECTIONS.TEMPLATES).doc(t.id), {
        name: t.name,
        category: t.category || null,
        language: t.language || null,
        status: t.status || null,
        // Stored as JSON strings, not raw objects: Meta's BODY component
        // includes example.body_text as an array of arrays (one example
        // row per variable set, e.g. [["Rahul Sharma"]]), which Firestore
        // flatly rejects ("Property array contains an invalid nested
        // entity" - arrays can't directly contain other arrays). Nothing
        // in admin.html reads these fields structurally (only bodyText/
        // variableCount below), so JSON-stringifying costs nothing.
        components: JSON.stringify(t.components || []),
        bodyText,
        variableCount,
        rejectedReason: t.rejected_reason || null,
        syncedAt: FieldValue.serverTimestamp(),
        raw: JSON.stringify(t),
      });
    }

    // Remove cached templates Meta no longer returns (deleted/renamed there).
    const existingSnap = await db.collection(COLLECTIONS.TEMPLATES).select().get();
    let deletedStaleCount = 0;
    existingSnap.docs.forEach((doc) => {
      if (!seenIds.has(doc.id)) {
        batch.delete(doc.ref);
        deletedStaleCount++;
      }
    });

    batch.set(db.collection(COLLECTIONS.SETTINGS).doc("_template_sync_meta"), {
      lastSyncedAt: FieldValue.serverTimestamp(),
      syncedTemplateCount: metaTemplates.length,
    });

    await batch.commit();

    return { success: true, syncedCount: metaTemplates.length, deletedStaleCount };
  }
);

/**
 * Cached read only - no live Graph API call. Powers all template dropdowns.
 * Cross-references templateRegistry.js so the Templates tab shows, per
 * template, whether the app itself has it wired up and active:
 *   - "ACTIVE"          - approved in Meta AND safe to send (registry + Meta agree)
 *   - "PENDING"         - registered in the app but deliberately not sendable yet
 *   - "NOT_REGISTERED"  - approved in Meta but the app has no registry entry for it
 *                         (still sendable ad-hoc via Send Individual/Broadcast)
 * Also surfaces registry entries Meta hasn't returned at all (e.g. not yet
 * approved, or a sync hasn't run since it was approved) as "NOT_SYNCED".
 */
exports.getTemplateList = onCall({}, async (request) => {
  assertAdmin(request);
  const snap = await db.collection(COLLECTIONS.TEMPLATES).orderBy("name").get();
  const metaTemplates = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  const syncedNames = new Set(metaTemplates.map((t) => t.name));

  const withAppStatus = metaTemplates.map((t) => ({
    ...t,
    appStatus: templateRegistry.get(t.name)?.status || "NOT_REGISTERED",
  }));

  const unsynced = templateRegistry
    .list()
    .filter((t) => !syncedNames.has(t.name))
    .map((t) => ({
      id: null,
      name: t.name,
      category: t.category,
      language: t.language,
      status: "NOT_SYNCED",
      variableCount: t.variableCount,
      appStatus: t.status,
    }));

  return { templates: [...withAppStatus, ...unsynced] };
});

// ---------------------------------------------------------------------
// Dashboard / Analytics stats
// ---------------------------------------------------------------------

exports.getWhatsAppStats = onCall({}, async (request) => {
  assertAdmin(request);

  const logsRef = db.collection(COLLECTIONS.LOGS);
  const now = Date.now();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const startOfWeek = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const startOfMonth = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const [
    todaySnap,
    weekSnap,
    monthSnap,
    successSnap,
    failedSnap,
    deliveredSnap,
    readSnap,
    lastMsgSnap,
    broadcastSnap,
    trendSnap,
  ] = await Promise.all([
    logsRef.where("direction", "==", "outbound").where("timestamp", ">=", Timestamp.fromDate(startOfToday)).count().get(),
    logsRef.where("direction", "==", "outbound").where("timestamp", ">=", Timestamp.fromDate(startOfWeek)).count().get(),
    logsRef.where("direction", "==", "outbound").where("timestamp", ">=", Timestamp.fromDate(startOfMonth)).count().get(),
    logsRef.where("direction", "==", "outbound").where("status", "==", "sent").count().get(),
    logsRef.where("direction", "==", "outbound").where("status", "==", "failed").count().get(),
    logsRef.where("status", "==", "delivered").count().get(),
    logsRef.where("status", "==", "read").count().get(),
    logsRef.where("direction", "==", "outbound").orderBy("timestamp", "desc").limit(1).get(),
    db.collection(COLLECTIONS.BROADCAST_LOGS).orderBy("createdAt", "desc").limit(20).get(),
    logsRef.where("timestamp", ">=", Timestamp.fromDate(startOfMonth)).select("timestamp", "status", "direction").get(),
  ]);

  const successCount = successSnap.data().count;
  const failedCount = failedSnap.data().count;
  const deliveredCount = deliveredSnap.data().count;
  const readCount = readSnap.data().count;
  const totalOutbound = successCount + failedCount;

  // "Pending" is an approximation: whatsapp_logs is an append-only trail of
  // per-status rows (see messageLogger.js), not a per-message state machine,
  // so this is successful sends minus the ones we've since seen a delivered
  // or read callback for - not an exact distinct-message count.
  const pending = Math.max(successCount - deliveredCount - readCount, 0);

  const trendMap = {};
  trendSnap.docs.forEach((doc) => {
    const data = doc.data();
    if (!data.timestamp) return;
    const day = data.timestamp.toDate().toISOString().slice(0, 10);
    if (!trendMap[day]) trendMap[day] = { day, sent: 0, failed: 0, delivered: 0, read: 0 };
    if (data.direction === "outbound" && data.status === "sent") trendMap[day].sent++;
    if (data.direction === "outbound" && data.status === "failed") trendMap[day].failed++;
    if (data.status === "delivered") trendMap[day].delivered++;
    if (data.status === "read") trendMap[day].read++;
  });
  const trend = Object.values(trendMap).sort((a, b) => a.day.localeCompare(b.day));

  const recentBroadcasts = broadcastSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

  const round1 = (n) => Math.round(n * 10) / 10;

  return {
    messagesToday: todaySnap.data().count,
    messagesThisWeek: weekSnap.data().count,
    messagesThisMonth: monthSnap.data().count,
    successful: successCount,
    failed: failedCount,
    pending,
    deliveredCount,
    readCount,
    deliveryRate: totalOutbound ? round1((deliveredCount / totalOutbound) * 100) : 0,
    readRate: totalOutbound ? round1((readCount / totalOutbound) * 100) : 0,
    failureRate: totalOutbound ? round1((failedCount / totalOutbound) * 100) : 0,
    lastMessageSent: lastMsgSnap.empty ? null : { id: lastMsgSnap.docs[0].id, ...lastMsgSnap.docs[0].data() },
    lastBroadcast: recentBroadcasts[0] || null,
    recentBroadcasts,
    trend,
  };
});

// ---------------------------------------------------------------------
// Per-automation stats for the "Automated Messages" admin section - the
// ONLY 3 categories that exist here are the 3 approved automations.
// Reuses the same whatsapp_logs collection every other send already
// writes to (see messageLogger.js) - no new logging path.
// ---------------------------------------------------------------------

const AUTOMATED_MESSAGE_CATEGORIES = ["account_created", "live_test_registration", "live_test_result"];

exports.getAutomatedMessageStats = onCall({}, async (request) => {
  assertAdmin(request);

  const logsRef = db.collection(COLLECTIONS.LOGS);
  const perCategory = await Promise.all(
    AUTOMATED_MESSAGE_CATEGORIES.map(async (category) => {
      const [successSnap, failedSnap, lastSnap] = await Promise.all([
        logsRef.where("category", "==", category).where("status", "==", "sent").count().get(),
        logsRef.where("category", "==", category).where("status", "==", "failed").count().get(),
        logsRef.where("category", "==", category).orderBy("timestamp", "desc").limit(1).get(),
      ]);
      return {
        category,
        successCount: successSnap.data().count,
        failureCount: failedSnap.data().count,
        lastSentAt: lastSnap.empty ? null : lastSnap.docs[0].data().timestamp?.toDate?.().toISOString() || null,
      };
    })
  );

  return { stats: perCategory };
});

// ---------------------------------------------------------------------
// Server-side reads/writes for whatsapp_settings, whatsapp_schedule, and
// whatsapp_logs - these collections are new and this project's deployed
// Firestore rules (managed outside this repo) have no rule for them, so
// admin.html can't read/write them directly from the client (it gets
// "Missing or insufficient permissions"). Routing through the Admin SDK
// here sidesteps that entirely without touching Firestore rules at all -
// the same approach every other WhatsApp Manager tab already uses.
// ---------------------------------------------------------------------

const AUTOMATION_SETTING_KEYS = ["account_creation", "live_test_registration", "live_test_result"];

exports.getAutomationSettings = onCall({}, async (request) => {
  assertAdmin(request);
  const snaps = await Promise.all(AUTOMATION_SETTING_KEYS.map((key) => db.collection(COLLECTIONS.SETTINGS).doc(key).get()));
  const settings = {};
  AUTOMATION_SETTING_KEYS.forEach((key, i) => {
    settings[key] = snaps[i].exists ? snaps[i].data() : { enabled: true };
  });
  return { settings };
});

exports.saveAutomationSetting = onCall({}, async (request) => {
  assertAdmin(request);
  const { key, enabled } = request.data || {};
  if (!key || typeof enabled !== "boolean") {
    throw new HttpsError("invalid-argument", "key and enabled (boolean) are required.");
  }
  await db.collection(COLLECTIONS.SETTINGS).doc(key).set(
    { enabled, updatedAt: FieldValue.serverTimestamp(), updatedBy: request.auth.token.email },
    { merge: true }
  );
  return { success: true };
});

exports.getScheduledBroadcasts = onCall({}, async (request) => {
  assertAdmin(request);
  const snap = await db.collection(COLLECTIONS.SCHEDULE).orderBy("scheduledFor", "desc").limit(100).get();
  return { schedules: snap.docs.map((d) => ({ id: d.id, ...d.data() })) };
});

exports.getWhatsAppLogs = onCall({}, async (request) => {
  assertAdmin(request);
  const limitCount = Math.min(Number(request.data?.limit) || 500, 1000);
  const snap = await db.collection(COLLECTIONS.LOGS).orderBy("timestamp", "desc").limit(limitCount).get();
  return { logs: snap.docs.map((d) => ({ id: d.id, ...d.data() })) };
});

// ---------------------------------------------------------------------
// Campaign History - whatsapp_broadcast_logs already gets one summary
// doc per completed sendBroadcast() run (messageLogger.js); this just
// gives that collection its own list + per-recipient detail view instead
// of only surfacing the last 20 inside Dashboard stats.
// ---------------------------------------------------------------------

exports.getCampaignHistory = onCall({}, async (request) => {
  assertAdmin(request);
  const limitCount = Math.min(Number(request.data?.limit) || 100, 500);
  const snap = await db.collection(COLLECTIONS.BROADCAST_LOGS).orderBy("createdAt", "desc").limit(limitCount).get();
  return { campaigns: snap.docs.map((d) => ({ id: d.id, ...d.data() })) };
});

exports.getCampaignDetail = onCall({}, async (request) => {
  assertAdmin(request);
  const { campaignId } = request.data || {};
  if (!campaignId) throw new HttpsError("invalid-argument", "campaignId is required.");

  const campaignRef = db.collection(COLLECTIONS.BROADCAST_LOGS).doc(campaignId);
  const [campaignSnap, logsSnap] = await Promise.all([
    campaignRef.get(),
    db.collection(COLLECTIONS.LOGS).where("campaignId", "==", campaignId).orderBy("timestamp", "desc").limit(1000).get(),
  ]);
  if (!campaignSnap.exists) throw new HttpsError("not-found", "Campaign not found.");

  const logs = logsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
  const delivered = logs.filter((l) => l.status === "delivered" || l.status === "read").length;
  const failed = logs.filter((l) => l.status === "failed").length;
  const sent = logs.filter((l) => l.status === "sent").length;
  const pending = Math.max(sent - delivered, 0);

  return {
    campaign: { id: campaignSnap.id, ...campaignSnap.data() },
    logs,
    summary: { delivered, failed, pending, total: logs.length },
  };
});

// ---------------------------------------------------------------------
// Retry a failed send (append-only - writes a NEW log row, never
// mutates the original, matching messageLogger.js's existing design)
// ---------------------------------------------------------------------

exports.retryFailedMessage = onCall({ secrets: WHATSAPP_SECRETS }, async (request) => {
  assertAdmin(request);
  const { logId } = request.data || {};
  if (!logId) throw new HttpsError("invalid-argument", "logId is required.");

  const ref = db.collection(COLLECTIONS.LOGS).doc(logId);
  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError("not-found", "Log entry not found.");

  const data = snap.data();
  if (data.status !== "failed") {
    throw new HttpsError("failed-precondition", "Only failed messages can be retried.");
  }
  if (!data.phone) {
    throw new HttpsError("failed-precondition", "This log entry has no recipient phone number on file.");
  }

  let result;
  if (data.templateName) {
    const templateSnap = await db.collection(COLLECTIONS.TEMPLATES).where("name", "==", data.templateName).limit(1).get();
    if (templateSnap.empty) {
      throw new HttpsError(
        "failed-precondition",
        "Template metadata isn't cached yet - open Templates and click Sync Templates, then retry."
      );
    }
    const variableCount = templateSnap.docs[0].data().variableCount || 0;
    if (variableCount > 0) {
      throw new HttpsError(
        "failed-precondition",
        "This message used a parameterized template; its original values weren't logged. " +
          "Resend it manually from Send Individual instead of Retry."
      );
    }
    result = await whatsappService.sendTemplateMessage(data.phone, data.templateName, []);
  } else {
    result = await whatsappService.sendWhatsAppMessage(data.phone, data.message || "");
  }

  if (result.success && result.messageId) {
    await ref.update({ retriedAsMessageId: result.messageId, retriedAt: FieldValue.serverTimestamp() }).catch(() => {});
  }

  return result;
});

// ---------------------------------------------------------------------
// Settings tab - read-only operational info. NEVER returns a secret
// VALUE, only booleans indicating whether each secret is configured.
// ---------------------------------------------------------------------

exports.getWhatsAppSettingsInfo = onCall(
  { secrets: [...WHATSAPP_SECRETS, SECRET_NAMES.VERIFY_TOKEN, SECRET_NAMES.BUSINESS_ACCOUNT_ID] },
  async (request) => {
    assertAdmin(request);

    const [syncMetaSnap, lastEventSnap] = await Promise.all([
      db.collection(COLLECTIONS.SETTINGS).doc("_template_sync_meta").get(),
      db.collection(COLLECTIONS.LOGS).where("category", "==", "status_update").orderBy("timestamp", "desc").limit(1).get(),
    ]);

    return {
      phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || null,
      businessAccountId: process.env.WHATSAPP_BUSINESS_ACCOUNT_ID || null,
      tokenConfigured: !!process.env.WHATSAPP_TOKEN,
      appSecretConfigured: !!process.env.WHATSAPP_APP_SECRET,
      verifyTokenConfigured: !!process.env.WHATSAPP_VERIFY_TOKEN,
      graphApiVersion: GRAPH_API_VERSION,
      lastTemplateSync: syncMetaSnap.exists ? syncMetaSnap.data().lastSyncedAt?.toDate?.().toISOString() || null : null,
      lastWebhookEventAt: lastEventSnap.empty ? null : lastEventSnap.docs[0].data().timestamp?.toDate?.().toISOString() || null,
    };
  }
);

module.exports.getAutomationSetting = getAutomationSetting;

// ---------------------------------------------------------------------
// AI Assistant tab (admin.html "🤖 AI Assistant") - basic Phase-1 admin
// surface for whatsapp_ai_settings / whatsapp_ai_logs / whatsapp_handover.
// Same assertAdmin() gate as every callable above. Never returns the
// OPENAI_API_KEY value - settings docs never store secrets, only config.
// ---------------------------------------------------------------------

const aiSettingsModule = require("./aiSettings");

exports.getAiSettings = onCall({}, async (request) => {
  assertAdmin(request);
  const settings = await aiSettingsModule.getAiSettings();
  return { settings };
});

exports.saveAiSettings = onCall({}, async (request) => {
  assertAdmin(request);
  const data = request.data || {};
  const allowedFields = [
    "enabled", "model", "systemPrompt", "greetingMessage", "fallbackReply",
    "faqs", "historyLimit", "maxToolIterations", "maxOutputTokens", "temperature",
    "dailyAiTurnCapPerPhone",
  ];
  const update = {};
  allowedFields.forEach((key) => {
    if (data[key] !== undefined) update[key] = data[key];
  });
  if (Object.keys(update).length === 0) {
    throw new HttpsError("invalid-argument", "No valid settings fields provided.");
  }
  update.updatedAt = FieldValue.serverTimestamp();
  update.updatedBy = request.auth.token.email;

  await db.collection(COLLECTIONS.AI_SETTINGS).doc("config").set(update, { merge: true });
  aiSettingsModule.invalidateCache();
  return { success: true };
});

exports.getAiLogs = onCall({}, async (request) => {
  assertAdmin(request);
  const limitCount = Math.min(Number(request.data?.limit) || 100, 500);
  const snap = await db.collection(COLLECTIONS.AI_LOGS).orderBy("createdAt", "desc").limit(limitCount).get();
  return { logs: snap.docs.map((d) => ({ id: d.id, ...d.data() })) };
});

exports.getOpenHandovers = onCall({}, async (request) => {
  assertAdmin(request);
  const snap = await db
    .collection(COLLECTIONS.HANDOVER)
    .where("status", "==", "open")
    .orderBy("createdAt", "asc")
    .limit(200)
    .get();
  return { handovers: snap.docs.map((d) => ({ id: d.id, ...d.data() })) };
});

exports.resolveHandover = onCall({}, async (request) => {
  assertAdmin(request);
  const { handoverId } = request.data || {};
  if (!handoverId) throw new HttpsError("invalid-argument", "handoverId is required.");

  const handoverRef = db.collection(COLLECTIONS.HANDOVER).doc(handoverId);
  const handoverSnap = await handoverRef.get();
  if (!handoverSnap.exists) throw new HttpsError("not-found", "Handover request not found.");

  const { phone } = handoverSnap.data();
  await handoverRef.update({
    status: "resolved",
    resolvedAt: FieldValue.serverTimestamp(),
    resolvedBy: request.auth.token.email,
  });
  if (phone) {
    await db.collection(COLLECTIONS.CONVERSATIONS).doc(phone).set(
      { status: "active", handoverReason: null, handoverAt: null },
      { merge: true }
    );
  }
  return { success: true };
});

/**
 * Powers the Handover "💬 Chat" panel - the full message thread for one
 * phone number, so an admin can see what the student has said (and
 * everything sent back, whether by the bot or by a human) in one place
 * before replying via the existing sendWhatsApp callable. Reuses
 * whatsapp_logs as-is (already records every inbound/outbound message
 * via messageLogger.js) - no new collection needed. status_update rows
 * (delivered/read receipts, not actual messages) are excluded.
 */
exports.getConversationThread = onCall({}, async (request) => {
  assertAdmin(request);
  const { phone } = request.data || {};
  if (!phone) throw new HttpsError("invalid-argument", "phone is required.");

  const limitCount = Math.min(Number(request.data?.limit) || 200, 500);
  const snap = await db
    .collection(COLLECTIONS.LOGS)
    .where("phone", "==", phone)
    .orderBy("timestamp", "asc")
    .limit(limitCount)
    .get();

  const messages = snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((m) => m.category !== "status_update");

  return { messages };
});
