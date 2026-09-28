/**
 * Cloud Function Cron and OnCall handler for Monday Live Quiz Generation
 * Runs on Monday 6:00 AM IST, generating a 50-question live quiz for the coming Sunday 11:00 AM IST.
 * 40 Regular questions (1 mark) + 10 Achiever questions (2 marks) = 60 Marks total.
 */

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { db, admin } = require("../config");
const { getNextSubject } = require("./syllabus");
const { generateFullLiveQuizForClass } = require("./geminiEngine");
const { uploadQuizSessions } = require("./sessionUploader");

const TIME_ZONE = "Asia/Kolkata";

/**
 * Calculates the upcoming Sunday date (YYYY-MM-DD) in Asia/Kolkata time
 * If run on Monday, Sunday is 6 days away.
 */
function getComingSundayDateStr() {
  const now = new Date();
  const d = new Date(now.toLocaleString("en-US", { timeZone: TIME_ZONE }));
  const currentDay = d.getDay(); // 0 is Sunday, 1 is Monday
  let daysUntilSunday = (7 - currentDay) % 7;
  if (daysUntilSunday === 0) daysUntilSunday = 7; // Target next Sunday
  d.setDate(d.getDate() + daysUntilSunday);

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Resolves both provider keys (env var override first, then the same
 * system_settings/ai_keys Firestore doc the Admin Panel's quizAgentLive.js
 * tool saves to) - so saving an OpenAI key there also switches the
 * automated Monday cron job over to OpenAI, with zero extra configuration.
 * OpenAI is preferred as the primary provider when both are available
 * (higher/more predictable rate limits than Gemini's free tier).
 */
async function resolveApiKeys() {
  let openAIKey = process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.trim() ? process.env.OPENAI_API_KEY.trim() : null;
  let geminiKey = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() ? process.env.GEMINI_API_KEY.trim() : null;

  if (openAIKey && geminiKey) return { openAIKey, geminiKey };

  try {
    const docSnap = await db.collection("system_settings").doc("ai_keys").get();
    if (docSnap.exists) {
      const data = docSnap.data();
      if (!openAIKey && data.openAIApiKey && data.openAIApiKey.trim()) {
        openAIKey = data.openAIApiKey.trim();
      }
      if (!geminiKey && data.geminiApiKey && data.geminiApiKey.trim()) {
        geminiKey = data.geminiApiKey.trim();
      }
    }
  } catch (err) {
    console.warn("Could not read ai_keys from system_settings/ai_keys:", err.message);
  }

  return { openAIKey, geminiKey };
}

/**
 * Core generation runner
 */
async function runMondayQuizPipeline({
  targetSubject = null,
  classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  targetSundayDate = null,
  startTimeStr = "11:00",
  duration = 60,
  price = 99,
  priceAfterCoupon = 59,
  apiKey = null,
  openAIApiKey = null
}) {
  const resolved = await resolveApiKeys();
  // apiKey (legacy param name) is treated as a Gemini key override, kept for
  // backward compatibility with any existing manual caller.
  const effectiveGeminiKey = apiKey || resolved.geminiKey;
  const effectiveOpenAIKey = openAIApiKey || resolved.openAIKey;
  if (!effectiveOpenAIKey && !effectiveGeminiKey) {
    throw new Error("No AI API key is configured. Please save an OpenAI or Gemini key in the Admin Panel.");
  }

  // Determine current rotation subject if not provided
  let subject = targetSubject;
  if (!subject) {
    const rotationSnap = await db.collection("system_settings").doc("live_quiz_rotation").get();
    if (rotationSnap.exists) {
      const rotData = rotationSnap.data();
      subject = rotData.nextSubject || getNextSubject(rotData.lastSubject);
    } else {
      subject = "maths";
    }
  }

  const effectiveSunday = targetSundayDate || getComingSundayDateStr();
  const dateCompact = effectiveSunday.replace(/-/g, "");

  console.log(`[QUIZ AGENT] Creating Live Quiz on Monday 6 AM for Coming Sunday: ${effectiveSunday} 11:00 AM IST`);
  console.log(`[QUIZ AGENT] Subject: ${subject} | Classes: ${classes.join(",")}`);

  const classResults = [];
  const errors = [];

  for (let i = 0; i < classes.length; i++) {
    const classNum = classes[i];
    try {
      console.log(`[QUIZ AGENT] Generating Class ${classNum} (40 Regular + 10 Achievers)...`);
      const quiz = await generateFullLiveQuizForClass({
        openAIKey: effectiveOpenAIKey,
        geminiKey: effectiveGeminiKey,
        classNum,
        subject,
        dateCompact
      });

      classResults.push(quiz);
      console.log(`   ✅ Class ${classNum}: ${quiz.regularQuestions.length} Regular + ${quiz.achieverQuestions.length} Achiever questions ready.`);

      // Pacing pause (2 seconds) for free tier rate limits
      if (i < classes.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (err) {
      console.error(`[QUIZ AGENT] Failed generating for Class ${classNum}:`, err.message);
      errors.push({ classNum, error: err.message });
    }
  }

  if (classResults.length === 0) {
    throw new Error(`Failed to generate questions for any class. Errors: ${JSON.stringify(errors)}`);
  }

  // Upload to Firestore: Writes questions & creates test_sessions for coming Sunday 11:00 AM IST
  console.log(`[QUIZ AGENT] Uploading ${classResults.length} classes to Firestore for Sunday ${effectiveSunday} 11:00 AM...`);
  const uploadResult = await uploadQuizSessions({
    db,
    admin,
    classResults,
    targetSundayDateStr: effectiveSunday,
    startTimeStr,
    duration,
    price,
    priceAfterCoupon
  });

  // Log execution
  await db.collection("system_settings").doc("live_quiz_logs").collection("runs").add({
    subject,
    classesGenerated: classResults.map(c => c.classNum),
    targetSunday: effectiveSunday,
    liveStartTime: `${effectiveSunday} ${startTimeStr} IST`,
    errors,
    totalRegular: uploadResult.totalRegularUploaded,
    totalAchiever: uploadResult.totalAchieverUploaded,
    totalQuestions: uploadResult.totalQuestionsUploaded,
    sessionIds: uploadResult.createdSessions.map(s => s.id),
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    aiProviderPreferred: effectiveOpenAIKey ? "openai" : "gemini",
    triggeredBy: (apiKey || openAIApiKey) ? "manual_admin" : "scheduled_cron"
  });

  return {
    success: true,
    subject,
    targetSunday: effectiveSunday,
    liveTime: `${effectiveSunday} 11:00 AM IST`,
    classesCount: classResults.length,
    sessions: uploadResult.createdSessions,
    totalQuestions: uploadResult.totalQuestionsUploaded,
    errors
  };
}

/**
 * 1. Scheduled Function: Runs every Monday at 06:00 AM IST
 */
const mondayLiveQuizScheduler = onSchedule(
  {
    schedule: "0 6 * * 1",
    timeZone: TIME_ZONE,
    timeoutSeconds: 540,
    memory: "512MiB"
  },
  async (event) => {
    console.log("[CRON] Monday Live Quiz Scheduler triggered at 6:00 AM IST");
    try {
      const result = await runMondayQuizPipeline({});
      console.log("[CRON] Monday Live Quiz generation successful for coming Sunday:", result);
    } catch (err) {
      console.error("[CRON] Monday Live Quiz Scheduler error:", err);
    }
  }
);

/**
 * 2. OnCall Function: Triggered manually from Admin Panel
 */
const generateMondayQuizManual = onCall(
  {
    timeoutSeconds: 540,
    memory: "512MiB"
  },
  async (request) => {
    if (!request.auth || request.auth.token.email !== "madhhu52@gmail.com") {
      throw new HttpsError("permission-denied", "Only site administrators can trigger the quiz generator.");
    }

    const { subject, classes, date, startTime, duration, price, priceAfterCoupon, apiKey, openAIApiKey } = request.data || {};

    try {
      const result = await runMondayQuizPipeline({
        targetSubject: subject,
        classes: classes || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        targetSundayDate: date,
        startTimeStr: startTime || "11:00",
        duration: duration || 60,
        price: price != null ? price : 99,
        priceAfterCoupon: priceAfterCoupon != null ? priceAfterCoupon : 59,
        apiKey,
        openAIApiKey
      });

      return result;
    } catch (err) {
      console.error("[MANUAL] Quiz generation error:", err);
      throw new HttpsError("internal", err.message);
    }
  }
);

module.exports = {
  getComingSundayDateStr,
  mondayLiveQuizScheduler,
  generateMondayQuizManual,
  runMondayQuizPipeline
};
