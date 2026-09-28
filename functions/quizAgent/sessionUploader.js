/**
 * Firestore Uploader for Questions and Live Test Sessions
 * Configured for 40 Regular (1 Mark) + 10 Achiever (2 Marks) Live Quiz Sessions
 */

const { getNextSubject } = require("./syllabus");
const { OLYMPIAD_CODES } = require("./geminiEngine");

/**
 * Uploads all generated questions and creates live test sessions in Firestore
 */
async function uploadQuizSessions({
  db,
  admin,
  classResults,
  targetSundayDateStr,
  startTimeStr = "11:00",
  duration = 60,
  price = 99,
  priceAfterCoupon = 59
}) {
  if (!classResults || classResults.length === 0) {
    throw new Error("No class results provided for upload.");
  }

  const results = {
    totalRegularUploaded: 0,
    totalAchieverUploaded: 0,
    totalQuestionsUploaded: 0,
    createdSessions: [],
    errors: []
  };

  const FieldValue = admin.firestore.FieldValue;
  const Timestamp = admin.firestore.Timestamp;

  // 1. Gather all questions
  const allQuestions = [];
  classResults.forEach(cr => {
    if (Array.isArray(cr.regularQuestions)) {
      allQuestions.push(...cr.regularQuestions);
      results.totalRegularUploaded += cr.regularQuestions.length;
    }
    if (Array.isArray(cr.achieverQuestions)) {
      allQuestions.push(...cr.achieverQuestions);
      results.totalAchieverUploaded += cr.achieverQuestions.length;
    }
  });

  // Batch upload to 'questions' in chunks of 450
  const BATCH_SIZE = 450;
  for (let i = 0; i < allQuestions.length; i += BATCH_SIZE) {
    const chunk = allQuestions.slice(i, i + BATCH_SIZE);
    const batch = db.batch();
    chunk.forEach(q => {
      const docRef = db.collection("questions").doc(q.id);
      batch.set(docRef, {
        ...q,
        uploadedAt: FieldValue.serverTimestamp()
      }, { merge: true });
    });
    await batch.commit();
  }
  results.totalQuestionsUploaded = allQuestions.length;

  // 2. Calculate Start & End Timestamps for Sunday 11:00 AM IST
  // In IST (+05:30)
  const isoString = `${targetSundayDateStr}T${startTimeStr}:00+05:30`;
  const startDate = new Date(isoString);
  if (isNaN(startDate.getTime())) {
    throw new Error(`Invalid date/time combination: ${targetSundayDateStr} ${startTimeStr}`);
  }
  const durationMs = parseInt(duration, 10) * 60000;
  const endDate = new Date(startDate.getTime() + durationMs);

  // 3. Create test_sessions for each class
  let currentSubject = "";
  for (const cr of classResults) {
    const { classNum, subject, regularQuestions = [], achieverQuestions = [] } = cr;
    currentSubject = subject;
    const olympiadName = OLYMPIAD_CODES[subject] || subject.toUpperCase();
    
    // Title matching historical Olympiad pattern:
    const title = `OLYMPIAD ${olympiadName} LIVE TEST FOR CLASS 1 TO 10`;

    const sessionData = {
      title,
      subject: subject.toLowerCase(),
      class: parseInt(classNum, 10),
      startTime: Timestamp.fromDate(startDate),
      endTime: Timestamp.fromDate(endDate),
      duration: parseInt(duration, 10),
      price: parseInt(price, 10),
      priceAfterCoupon: priceAfterCoupon != null ? parseInt(priceAfterCoupon, 10) : 59,
      questionIds: regularQuestions.map(q => q.id),
      achieverQuestionIds: achieverQuestions.map(q => q.id),
      archived: false,
      aiGenerated: true,
      createdAt: FieldValue.serverTimestamp()
    };

    const sessionRef = await db.collection("test_sessions").add(sessionData);
    results.createdSessions.push({
      id: sessionRef.id,
      classNum,
      subject,
      title,
      regularCount: regularQuestions.length,
      achieverCount: achieverQuestions.length,
      totalCount: regularQuestions.length + achieverQuestions.length,
      scheduledFor: startDate.toISOString()
    });
  }

  // 4. Update the rotation state in system_settings
  if (currentSubject) {
    const nextSubject = getNextSubject(currentSubject);
    await db.collection("system_settings").doc("live_quiz_rotation").set({
      lastSubject: currentSubject,
      nextSubject: nextSubject,
      targetSundayDate: targetSundayDateStr,
      liveQuizStartTime: startDate.toISOString(),
      lastRunAt: FieldValue.serverTimestamp(),
      sessionCountLastRun: classResults.length,
      totalQuestionsLastRun: results.totalQuestionsUploaded
    }, { merge: true });
  }

  return results;
}

module.exports = {
  uploadQuizSessions
};
