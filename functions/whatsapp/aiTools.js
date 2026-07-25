/**
 * =====================================================================
 * AI ASSISTANT - TOOL LAYER (Phase 1, 7 core tools)
 * =====================================================================
 * Every tool here reads EXISTING Firestore collections/helpers - nothing
 * is duplicated. Reused as-is: `liveTestData.getSessionPromoData()` (same
 * shaping already used for WhatsApp promo templates), the global
 * `coupons` collection (the existing Coupon Management panel), the
 * `users`/`leaderboard`/`test_sessions` collections the rest of the app
 * already writes.
 *
 * SECURITY BOUNDARY (structural, not just convention): "personal" tools
 * (a student's own profile/result/performance) are wrapped by
 * personalTool() below, which ONLY ever passes `serverContext.uid` -
 * resolved server-side from the verified inbound WhatsApp sender number,
 * in aiEngine.js - into the underlying implementation. The model's own
 * tool-call arguments for these tools are accepted (to match a normal
 * function-calling shape) but structurally discarded; their JSON schemas
 * also don't declare a uid/phone parameter at all, so the model has
 * nothing to even try to fill in. This means a hallucinating or
 * adversarially-prompted model can never make these tools return another
 * user's data - there is no code path where a model-supplied identifier
 * reaches a personal-data Firestore read.
 * =====================================================================
 */

const { db, admin } = require("../config");
const liveTestData = require("./liveTestData");

const FieldValue = admin.firestore.FieldValue;

// ---------------------------------------------------------------------
// Schema helpers - Responses API tool shape is FLAT:
// {type:"function", name, description, parameters}
// (not nested under a "function" key like the older Chat Completions API)
// ---------------------------------------------------------------------

function schemaNoParams(name, description) {
  return {
    type: "function",
    name,
    description,
    parameters: { type: "object", properties: {}, additionalProperties: false, required: [] },
  };
}

function schemaWithParams(name, description, properties) {
  return {
    type: "function",
    name,
    description,
    parameters: { type: "object", properties, additionalProperties: false, required: [] },
  };
}

/** Wraps a personal-data tool implementation so ONLY serverContext.uid can
 * ever reach it - modelArgs is accepted but never forwarded. */
function personalTool(implFn) {
  return async (_modelArgs, serverContext) => {
    if (!serverContext?.uid) {
      return { error: "no_linked_account", message: "This WhatsApp number isn't linked to an OlympiadQuiz account yet. Please sign up or log in at https://olympiadquiz.org first." };
    }
    return implFn(serverContext.uid);
  };
}

// ---------------------------------------------------------------------
// 1. getUserProfile - personal
// ---------------------------------------------------------------------
async function getUserProfileImpl(uid) {
  const snap = await db.collection("users").doc(uid).get();
  if (!snap.exists) return { error: "not_found" };
  const u = snap.data();
  return {
    name: u.name || u.fullName || "Student",
    class: u.class || u.studentClass || null,
    email: u.email || null,
    phoneVerified: u.phoneVerified === true || u.mobileVerified === true,
    registrationCompleted: u.registrationCompleted === true,
    schoolName: u.schoolName || null,
    city: u.city || null,
    state: u.state || null,
  };
}

// ---------------------------------------------------------------------
// 2. getUpcomingTests - non-personal, real filter args OK
// ---------------------------------------------------------------------
async function getUpcomingTestsImpl(classFilter, subjectFilter) {
  const now = admin.firestore.Timestamp.now();
  const snap = await db
    .collection("test_sessions")
    .orderBy("startTime", "asc")
    .limit(50)
    .get();

  const upcoming = snap.docs.filter((d) => {
    const s = d.data();
    if (s.endTime && s.endTime.toMillis() <= now.toMillis()) return false;
    if (classFilter && String(s.class) !== String(classFilter)) return false;
    if (subjectFilter && s.subject && String(s.subject).toLowerCase() !== String(subjectFilter).toLowerCase()) return false;
    return true;
  });

  const promoDataById = await Promise.all(upcoming.map((d) => liveTestData.getSessionPromoData(d.id)));
  return {
    tests: upcoming.map((d, i) => ({ sessionId: d.id, ...promoDataById[i] })).filter((t) => t.testName),
  };
}

// ---------------------------------------------------------------------
// 3. getLatestResult - personal
// ---------------------------------------------------------------------
async function getLatestResultImpl(uid) {
  const snap = await db.collection("leaderboard").where("uid", "==", uid).orderBy("date", "desc").limit(1).get();
  if (snap.empty) return { hasResult: false, message: "No test attempts found yet." };

  const r = snap.docs[0].data();
  const base = {
    hasResult: true,
    testName: r.testTitle || (r.isChampionship ? "Live Test" : "Mock Test"),
    subject: r.subject || null,
    class: r.studentClass || null,
    score: r.score,
    total: r.total,
    accuracy: r.accuracy || null,
  };

  if (r.isChampionship && r.sessionId) {
    const rankings = await liveTestData.computeLiveTestRankings(r.sessionId);
    const mine = rankings.get(uid);
    if (mine) {
      base.rank = mine.rank;
      base.percentile = mine.percentile;
      base.totalParticipants = mine.totalParticipants;
    }
  }
  return base;
}

// ---------------------------------------------------------------------
// 4. getPerformanceAnalytics - personal
// ---------------------------------------------------------------------
async function getPerformanceAnalyticsImpl(uid) {
  const snap = await db.collection("leaderboard").where("uid", "==", uid).orderBy("date", "desc").limit(200).get();
  if (snap.empty) return { testsAttempted: 0, message: "No test attempts found yet - encourage a first mock test!" };

  const entries = snap.docs.map((d) => d.data());
  const scores = entries.map((e) => (Number(e.total) > 0 ? (Number(e.score) / Number(e.total)) * 100 : null)).filter((v) => v !== null);

  const bySubject = {};
  entries.forEach((e) => {
    const subj = e.subject || "General";
    if (!bySubject[subj]) bySubject[subj] = [];
    const total = Number(e.total);
    if (total > 0) bySubject[subj].push((Number(e.score) / total) * 100);
  });
  const subjectAverages = Object.entries(bySubject).map(([subject, pcts]) => ({
    subject,
    averagePercent: Math.round((pcts.reduce((a, b) => a + b, 0) / pcts.length) * 10) / 10,
    attempts: pcts.length,
  }));
  subjectAverages.sort((a, b) => a.averagePercent - b.averagePercent);

  const championshipEntries = entries.filter((e) => e.isChampionship && e.sessionId);
  let bestRank = null;
  if (championshipEntries.length) {
    const rankingsBySession = await Promise.all(
      [...new Set(championshipEntries.map((e) => e.sessionId))].map((sid) => liveTestData.computeLiveTestRankings(sid))
    );
    rankingsBySession.forEach((rankings) => {
      const mine = rankings.get(uid);
      if (mine && (bestRank === null || mine.rank < bestRank)) bestRank = mine.rank;
    });
  }

  return {
    testsAttempted: entries.length,
    averagePercent: scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10 : null,
    highestPercent: scores.length ? Math.round(Math.max(...scores) * 10) / 10 : null,
    lowestPercent: scores.length ? Math.round(Math.min(...scores) * 10) / 10 : null,
    bestRank,
    weakestSubjects: subjectAverages.slice(0, 2),
    strongestSubjects: subjectAverages.slice(-2).reverse(),
  };
}

// ---------------------------------------------------------------------
// 5. getCoupons - non-personal
// ---------------------------------------------------------------------
async function getCouponsImpl() {
  const snap = await db.collection("coupons").get();
  const now = Date.now();
  const coupons = snap.docs
    .map((d) => d.data())
    .filter((c) => !c.expiry || (c.expiry.toDate ? c.expiry.toDate().getTime() >= now : true))
    .map((c) => ({ code: c.name, expiresAt: c.expiry?.toDate ? c.expiry.toDate().toISOString() : null }));
  return { coupons };
}

// ---------------------------------------------------------------------
// 6. getFAQs - non-personal, reads whatsapp_ai_settings.faqs (serverContext)
// ---------------------------------------------------------------------
async function getFAQsImpl(topic, serverContext) {
  const faqs = serverContext?.faqs || [];
  if (!topic) return { faqs };
  const needle = String(topic).toLowerCase();
  const matched = faqs.filter(
    (f) => (f.q || "").toLowerCase().includes(needle) || (f.a || "").toLowerCase().includes(needle)
  );
  return { faqs: matched.length ? matched : faqs };
}

// ---------------------------------------------------------------------
// 7. escalateToHuman - action tool, identity-scoped via serverContext only
// ---------------------------------------------------------------------
async function escalateToHumanImpl(reason, serverContext) {
  const handoverRef = db.collection("whatsapp_handover").doc();
  await handoverRef.set({
    phone: serverContext.phone,
    uid: serverContext.uid || null,
    reason: reason || "Student requested human support.",
    status: "open",
    createdAt: FieldValue.serverTimestamp(),
    resolvedAt: null,
    resolvedBy: null,
  });
  await db.collection("whatsapp_conversations").doc(serverContext.phone).set(
    {
      status: "human_required",
      handoverReason: reason || "Student requested human support.",
      handoverAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  return { success: true };
}

// ---------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------

const TOOL_REGISTRY = {
  getUserProfile: {
    schema: schemaNoParams("getUserProfile", "Get the current student's own profile (name, class, school, etc)."),
    execute: personalTool(getUserProfileImpl),
  },
  getLatestResult: {
    schema: schemaNoParams("getLatestResult", "Get the current student's most recent test result, including rank/percentile for live tests."),
    execute: personalTool(getLatestResultImpl),
  },
  getPerformanceAnalytics: {
    schema: schemaNoParams("getPerformanceAnalytics", "Get the current student's overall performance trend: average/highest/lowest scores, best rank, weak and strong subjects."),
    execute: personalTool(getPerformanceAnalyticsImpl),
  },
  getUpcomingTests: {
    schema: schemaWithParams("getUpcomingTests", "List upcoming live tests, optionally filtered by class and/or subject.", {
      class: { type: "string", description: "e.g. '6' - omit for all classes" },
      subject: { type: "string", description: "e.g. 'Science' - omit for all subjects" },
    }),
    execute: (args) => getUpcomingTestsImpl(args.class, args.subject),
  },
  getCoupons: {
    schema: schemaWithParams("getCoupons", "List currently active (non-expired) discount coupon codes.", {}),
    execute: () => getCouponsImpl(),
  },
  getFAQs: {
    schema: schemaWithParams("getFAQs", "Look up frequently asked questions, optionally filtered by topic.", {
      topic: { type: "string", description: "Keyword to filter FAQs by, e.g. 'certificate'" },
    }),
    execute: (args, ctx) => getFAQsImpl(args.topic, ctx),
  },
  escalateToHuman: {
    schema: schemaWithParams("escalateToHuman", "Escalate the conversation to a human support agent. Use this when the student explicitly asks for a human/support, or the request is clearly outside what you can help with (e.g. a payment dispute).", {
      reason: { type: "string", description: "Brief reason for escalation" },
    }),
    execute: (args, ctx) => escalateToHumanImpl(args.reason, ctx),
  },
};

const TOOL_DEFS = Object.values(TOOL_REGISTRY).map((t) => t.schema);

/**
 * @param {string} name
 * @param {Object} modelArgs - raw arguments the model supplied (may be {}).
 * @param {{phone: string, uid: string|null, faqs?: Array}} serverContext
 * @returns {Promise<Object>} JSON-serializable tool result. Never throws -
 *          errors are caught and returned as {error: "tool_failed"} so a
 *          single tool failure can't crash the whole conversation turn.
 */
async function executeTool(name, modelArgs, serverContext) {
  const tool = TOOL_REGISTRY[name];
  if (!tool) return { error: `unknown_tool:${name}` };
  try {
    return await tool.execute(modelArgs || {}, serverContext || {});
  } catch (error) {
    console.error(`aiTools.executeTool: "${name}" failed:`, error.message);
    return { error: "tool_failed" };
  }
}

module.exports = { TOOL_DEFS, executeTool };
