/**
 * Firestore Uploader for Questions and Live Test Sessions
 */

const { getNextSubject, SUBJECT_DETAILS } = require("./syllabus");

/**
 * Uploads all generated questions and creates live test sessions in Firestore
 */
async function uploadQuizSessions({ db, admin, classResults, dateStr, startTimeStr = "18:00", duration = 40, price = 0 }) {
  if (!classResults || classResults.length === 0) {
    throw new Error("No class results provided for upload.");
  }

  const results = {
    totalQuestionsUploaded: 0,
    createdSessions: [],
    errors: []
  };

  const FieldValue = admin.firestore.FieldValue;
  const Timestamp = admin.firestore.Timestamp;

  // 1. Batch upload questions in chunks of 450 (Firestore limit is 500)
  const allQuestions = [];
  classResults.forEach(cr => {
    if (Array.isArray(cr.questions)) {
      allQuestions.push(...cr.questions);
    }
  });

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
    results.totalQuestionsUploaded += chunk.length;
  }

  // 2. Calculate Start & End Timestamps
  // Parse date and time in IST (+05:30)
  const isoString = `${dateStr}T${startTimeStr}:00+05:30`;
  const startDate = new Date(isoString);
  if (isNaN(startDate.getTime())) {
    throw new Error(`Invalid date/time combination: ${dateStr} ${startTimeStr}`);
  }
  const durationMs = parseInt(duration, 10) * 60000;
  const endDate = new Date(startDate.getTime() + durationMs);

  // 3. Create test_sessions for each class
  let currentSubject = "";
  for (const cr of classResults) {
    const { classNum, subject, questions } = cr;
    currentSubject = subject;
    const subMeta = SUBJECT_DETAILS[subject] || { name: subject };
    const title = `Weekly Olympiad Championship - Class ${classNum} ${subMeta.name}`;

    const sessionData = {
      title,
      subject: subject.toLowerCase(),
      class: parseInt(classNum, 10),
      startTime: Timestamp.fromDate(startDate),
      endTime: Timestamp.fromDate(endDate),
      duration: parseInt(duration, 10),
      price: parseInt(price, 10) || 0,
      priceAfterCoupon: null,
      questionIds: questions.map(q => q.id),
      achieverQuestionIds: [],
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
      questionCount: questions.length
    });
  }

  // 4. Update the rotation state in system_settings
  if (currentSubject) {
    const nextSubject = getNextSubject(currentSubject);
    await db.collection("system_settings").doc("live_quiz_rotation").set({
      lastSubject: currentSubject,
      nextSubject: nextSubject,
      lastRunDate: dateStr,
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
