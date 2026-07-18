/**
 * =====================================================================
 * WHATSAPP SCHEDULER
 * =====================================================================
 * All time-triggered (cron) WhatsApp Cloud Functions. Each one is a
 * standalone onSchedule function; none of them touch any existing
 * scheduled function or collection field used elsewhere in the app.
 *
 * Data model this file relies on (already in use elsewhere in the app -
 * see functions/index.js `createRazorpayOrder` / `sendLiveQuizRegistrationEmail`):
 *   test_sessions/{sessionId}            { title, subject, class, startTime }
 *   users/{uid}/purchases/{sessionId}    { sessionId, status, createdAt }
 *   users/{uid}                          { name, phone, dob ("YYYY-MM-DD"), promo_consent }
 *
 * Reminder dedup: rather than a tight cron window, each reminder marks
 * the purchase document it just notified (whatsappReminder24hSentAt /
 * whatsappReminder1hSentAt) and skips anything already marked - safe
 * even if the schedule window overlaps between runs.
 * =====================================================================
 */

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { db, WHATSAPP_SECRETS } = require("../config");
const {
  sendReminder24Hours,
  sendReminder1Hour,
  sendBroadcast,
  sendWhatsAppMessage,
} = require("./whatsappService");

const TIME_ZONE = "Asia/Kolkata";

/**
 * Finds test_sessions whose startTime falls inside [now + fromHours, now + toHours],
 * then resolves each registered (CAPTURED) purchase to its user, skipping
 * anyone already notified for this reminder stage.
 *
 * @param {number} fromHours
 * @param {number} toHours
 * @param {"whatsappReminder24hSentAt"|"whatsappReminder1hSentAt"} sentFlagField
 * @returns {Promise<Array<{phone: string, name: string, sessionTitle: string, dateTimeText: string, purchaseRef: FirebaseFirestore.DocumentReference}>>}
 */
async function findPendingReminders(fromHours, toHours, sentFlagField) {
  const now = Date.now();
  const windowStart = new Date(now + fromHours * 60 * 60 * 1000);
  const windowEnd = new Date(now + toHours * 60 * 60 * 1000);

  const sessionsSnap = await db
    .collection("test_sessions")
    .where("startTime", ">=", windowStart)
    .where("startTime", "<=", windowEnd)
    .get();

  if (sessionsSnap.empty) return [];

  const recipients = [];

  for (const sessionDoc of sessionsSnap.docs) {
    const session = sessionDoc.data();
    const sessionId = sessionDoc.id;
    const dateTimeText = session.startTime.toDate().toLocaleString("en-IN", {
      timeZone: TIME_ZONE,
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Collection-group query: purchases live under users/{uid}/purchases/{sessionId},
    // so we search across every user's subcollection for this sessionId.
    // NOTE: this requires a Firestore composite index on the `purchases`
    // collection group (sessionId ASC, status ASC) - Firestore will log a
    // direct console link to create it the first time this runs if missing.
    const purchasesSnap = await db
      .collectionGroup("purchases")
      .where("sessionId", "==", sessionId)
      .where("status", "==", "CAPTURED")
      .get();

    for (const purchaseDoc of purchasesSnap.docs) {
      const purchase = purchaseDoc.data();
      if (purchase[sentFlagField]) continue; // Already notified for this stage.

      const userRef = purchaseDoc.ref.parent.parent; // users/{uid}
      const userSnap = await userRef.get();
      if (!userSnap.exists) continue;

      const user = userSnap.data();
      if (!user.phone) continue;

      recipients.push({
        phone: user.phone,
        name: user.name || "Student",
        sessionTitle: session.title || "your LIVE Olympiad test",
        dateTimeText,
        purchaseRef: purchaseDoc.ref,
      });
    }
  }

  return recipients;
}

/**
 * Sends a batch of reminders and marks each purchase as notified so the
 * next run (or an overlapping window) never double-sends.
 */
async function sendReminderBatch(recipients, sendFn, sentFlagField) {
  let sentCount = 0;
  for (const recipient of recipients) {
    const result = await sendFn(recipient.phone, {
      name: recipient.name,
      sessionTitle: recipient.sessionTitle,
      dateTimeText: recipient.dateTimeText,
    });
    if (result.success) {
      sentCount++;
      await recipient.purchaseRef.update({ [sentFlagField]: new Date() });
    }
  }
  return sentCount;
}

// ---------------------------------------------------------------------
// 16a. 24-hour reminder - runs hourly, looks 23-25h ahead
// ---------------------------------------------------------------------
const whatsappReminder24h = onSchedule(
  { schedule: "every 60 minutes", timeZone: TIME_ZONE, secrets: WHATSAPP_SECRETS },
  async () => {
    const recipients = await findPendingReminders(23, 25, "whatsappReminder24hSentAt");
    const sentCount = await sendReminderBatch(recipients, sendReminder24Hours, "whatsappReminder24hSentAt");
    console.log(`whatsappReminder24h: sent ${sentCount}/${recipients.length} reminders.`);
  }
);

// ---------------------------------------------------------------------
// 16b. 1-hour reminder - runs every 15 minutes, looks 45-75min ahead
// ---------------------------------------------------------------------
const whatsappReminder1h = onSchedule(
  { schedule: "every 15 minutes", timeZone: TIME_ZONE, secrets: WHATSAPP_SECRETS },
  async () => {
    const recipients = await findPendingReminders(0.75, 1.25, "whatsappReminder1hSentAt");
    const sentCount = await sendReminderBatch(recipients, sendReminder1Hour, "whatsappReminder1hSentAt");
    console.log(`whatsappReminder1h: sent ${sentCount}/${recipients.length} reminders.`);
  }
);

// ---------------------------------------------------------------------
// 16c. Weekly newsletter - every Monday 10:00 AM IST
// ---------------------------------------------------------------------
const whatsappWeeklyNewsletter = onSchedule(
  { schedule: "0 10 * * 1", timeZone: TIME_ZONE, secrets: WHATSAPP_SECRETS },
  async () => {
    // TODO: customize this weekly highlight, or pull it from a Firestore
    // "content"/"announcements" doc if you want it editable from the admin panel.
    const highlight = "New mock tests and study guides are live this week on OlympiadQuiz!";
    const result = await sendBroadcast({ message: highlight, targetType: "All Users" });
    console.log("whatsappWeeklyNewsletter:", result);
  }
);

// ---------------------------------------------------------------------
// 16d. Festival greeting - runs daily, checks a fixed-date calendar
// ---------------------------------------------------------------------
// Only fixed-date (Gregorian) festivals are listed here. Lunar-calendar
// festivals (Diwali, Holi, Eid, etc.) move every year - add this year's
// exact date manually before the season, e.g. "11-01": "Diwali".
const FIXED_DATE_FESTIVALS = {
  "01-26": "Republic Day",
  "08-15": "Independence Day",
  "10-02": "Gandhi Jayanti",
};

const whatsappFestivalGreeting = onSchedule(
  { schedule: "0 9 * * *", timeZone: TIME_ZONE, secrets: WHATSAPP_SECRETS },
  async () => {
    const todayKey = new Date().toLocaleDateString("en-CA", { timeZone: TIME_ZONE }).slice(5); // "MM-DD"
    const festivalName = FIXED_DATE_FESTIVALS[todayKey];
    if (!festivalName) return;

    const result = await sendBroadcast({
      message: `Happy ${festivalName} from all of us at OlympiadQuiz! 🎉`,
      targetType: "All Users",
    });
    console.log(`whatsappFestivalGreeting (${festivalName}):`, result);
  }
);

// ---------------------------------------------------------------------
// 16e. Birthday greeting - runs daily, checks users.dob ("YYYY-MM-DD")
// ---------------------------------------------------------------------
const whatsappBirthdayGreeting = onSchedule(
  { schedule: "0 9 * * *", timeZone: TIME_ZONE, secrets: WHATSAPP_SECRETS },
  async () => {
    const todayKey = new Date().toLocaleDateString("en-CA", { timeZone: TIME_ZONE }).slice(5); // "MM-DD"

    // `dob` is a plain string field (from an <input type="date">, see
    // profile.html), so we fetch and filter in-memory rather than
    // relying on a Firestore range query across arbitrary years.
    const usersSnap = await db.collection("users").where("dob", ">", "").get();

    let sentCount = 0;
    for (const doc of usersSnap.docs) {
      const user = doc.data();
      if (!user.dob || !user.phone) continue;
      if (user.dob.slice(5) !== todayKey) continue;

      const result = await sendWhatsAppMessage(
        user.phone,
        `🎂 Happy Birthday, ${user.name || "Student"}! Wishing you a fantastic year ahead from the OlympiadQuiz team.`
      );
      if (result.success) sentCount++;
    }
    console.log(`whatsappBirthdayGreeting: sent ${sentCount}/${usersSnap.size} candidates.`);
  }
);

module.exports = {
  whatsappReminder24h,
  whatsappReminder1h,
  whatsappWeeklyNewsletter,
  whatsappFestivalGreeting,
  whatsappBirthdayGreeting,
};
