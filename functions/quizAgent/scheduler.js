/**
 * Cloud Function Cron and OnCall handler for Monday Live Quiz Generation
 */

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { db, admin } = require("../config");
const { getNextSubject } = require("./syllabus");
const { generateQuizForClass } = require("./geminiEngine");
const { uploadQuizSessions } = require("./sessionUploader");

const TIME_ZONE = "Asia/Kolkata";

/**
 * Helper to fetch Gemini API Key
 * Checks environment, process.env, and Firestore settings
 */
async function resolveGeminiApiKey() {
  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim()) {
    return process.env.GEMINI_API_KEY.trim();
  }

  try {
    const docSnap = await db.collection("system_settings").doc("ai_keys").get();
    if (docSnap.exists) {
      const data = docSnap.data();
      if (data.geminiApiKey && data.geminiApiKey.trim()) {
        return data.geminiApiKey.trim();
      }
    }
  } catch (err) {
    console.warn("Could not read geminiApiKey from system_settings/ai_keys:", err.message);
  }

  return null;
}

/**
 * Core generation runner that can be called by both cron and onCall
 */
async function runMondayQuizPipeline({
  targetSubject = null,
  classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  questionsPerClass = 15,
  dateStr = null,
  startTimeStr = "18:00",
  duration = 40,
  price = 0,
  apiKey = null
}) {
  const effectiveApiKey = apiKey || (await resolveGeminiApiKey());
  if (!effectiveApiKey) {
    throw new Error("Gemini API key is not configured. Please set GEMINI_API_KEY in environment or Admin Settings.");
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

  // Default target date: Today if running on Monday, or the coming Monday
  let targetDate = dateStr;
  if (!targetDate) {
    const now = new Date();
    // In Asia/Kolkata timezone:
    const kolkataDateStr = new Intl.DateTimeFormat("en-CA", {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(now);
    targetDate = kolkataDateStr; // YYYY-MM-DD
  }

  const dateCompact = targetDate.replace(/-/g, "");
  console.log(`[QUIZ AGENT] Starting live quiz generation for Subject: ${subject}, Date: ${targetDate}, Classes: ${classes.join(",")}`);

  const classResults = [];
  const errors = [];

  for (let i = 0; i < classes.length; i++) {
    const classNum = classes[i];
    try {
      console.log(`[QUIZ AGENT] Generating Class ${classNum} ${subject}...`);
      const questions = await generateQuizForClass({
        apiKey: effectiveApiKey,
        classNum,
        subject,
        count: questionsPerClass,
        dateStr: dateCompact
      });

      classResults.push({
        classNum,
        subject,
        questions
      });

      // Pause 2 seconds between calls to adhere comfortably to Gemini Free Tier RPM (15 RPM)
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

  // Upload to Firestore
  console.log(`[QUIZ AGENT] Uploading ${classResults.length} classes to Firestore...`);
  const uploadResult = await uploadQuizSessions({
    db,
    admin,
    classResults,
    dateStr: targetDate,
    startTimeStr,
    duration,
    price
  });

  // Log execution
  await db.collection("system_settings").doc("live_quiz_logs").collection("runs").add({
    subject,
    classesGenerated: classResults.map(c => c.classNum),
    errors,
    totalQuestions: uploadResult.totalQuestionsUploaded,
    sessionIds: uploadResult.createdSessions.map(s => s.id),
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    triggeredBy: apiKey ? "manual_admin" : "scheduled_cron"
  });

  return {
    success: true,
    subject,
    date: targetDate,
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
    timeoutSeconds: 540, // 9 minutes to allow rate-limited generation
    memory: "512MiB"
  },
  async (event) => {
    console.log("[CRON] Monday Live Quiz Scheduler triggered at 6:00 AM IST");
    try {
      const result = await runMondayQuizPipeline({});
      console.log("[CRON] Monday Live Quiz generation successful:", result);
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

    const { subject, classes, count, date, startTime, duration, price, apiKey } = request.data || {};

    try {
      const result = await runMondayQuizPipeline({
        targetSubject: subject,
        classes: classes || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        questionsPerClass: count || 15,
        dateStr: date,
        startTimeStr: startTime || "18:00",
        duration: duration || 40,
        price: price || 0,
        apiKey
      });

      return result;
    } catch (err) {
      console.error("[MANUAL] Quiz generation error:", err);
      throw new HttpsError("internal", err.message);
    }
  }
);

module.exports = {
  mondayLiveQuizScheduler,
  generateMondayQuizManual,
  runMondayQuizPipeline
};
