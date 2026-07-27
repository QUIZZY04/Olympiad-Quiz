/**
 * =====================================================================
 * PHONE VERIFICATION REMINDER EMAIL
 * =====================================================================
 * Nudges users who signed up with Google but never verified a mobile
 * number (and so never finished registration - see signup.html's
 * ACTIVE_USER state) to come back and complete it, since verification
 * gates access to Free Mock Tests and other facilities via auth-guard.js.
 *
 * Two send paths share the same email-building/send logic
 * (sendReminderEmailToUser below):
 *   - The scheduled job (automatic, once daily) - gated OFF by default
 *     via email_reminder_settings/config.autoSendEnabled (admin.html has
 *     a toggle for this in the Phone Verification Reminders panel).
 *     Only ever auto-sends once per user (skips anyone already emailed).
 *   - The admin.html "Send Reminder" button (manual, per-user, on
 *     demand) - functions/index.js's sendPhoneReminderEmailManually
 *     callable. No dedup - the admin can resend as many times as they
 *     choose; phoneReminderEmailSentCount tracks how many times total.
 * =====================================================================
 */

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { admin, db } = require("./config");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const GRACE_PERIOD_MS = 15 * 60 * 1000; // don't email someone still mid-OTP-entry
const DAILY_SEND_LIMIT = 15;
const MAX_CANDIDATES_PER_RUN = 5000; // outer guard on reads, not on emails sent
const SITE_URL = "https://olympiadquiz.org/signup.html?mode=completion";
const SETTINGS_DOC = "email_reminder_settings/config";

const SENDER_INFO = {
  email: "admin@olympiadquiz.org",
  name: "OlympiadQuiz",
};

function getBrevoClient() {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  defaultClient.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;
  return new SibApiV3Sdk.TransactionalEmailsApi();
}

function buildReminderEmail(name, email) {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.sender = SENDER_INFO;
  sendSmtpEmail.to = [{ email, name: name || "Student" }];
  sendSmtpEmail.subject = "Finish setting up your OlympiadQuiz account";
  sendSmtpEmail.htmlContent = `<body style="background-color: #f5f7fb; margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden;">
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #ff6b00 0%, #ff8c1a 100%); padding: 40px 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800;">You're almost in, ${name}!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 35px 30px; color: #0f172a; line-height: 1.6;">
              <p style="font-size: 16px; margin: 0 0 20px;">You started creating your <strong>OlympiadQuiz</strong> account with Google, but haven't verified your mobile number yet.</p>
              <p style="font-size: 16px; margin: 0 0 20px;">Verifying your number is the last step to unlock <strong>Free Mock Tests</strong>, Chapterwise Quizzes, and the Live Quiz Arena.</p>
              <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="${SITE_URL}" target="_blank" style="background-color: #ff6b00; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block;">
                      Verify My Mobile Number
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                If you did not start creating this account, you can safely ignore this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`;
  return sendSmtpEmail;
}

/**
 * Sends the reminder to one user doc and records the send (increments
 * phoneReminderEmailSentCount, updates phoneReminderEmailSentAt to now).
 * Shared by both the scheduled job and the manual admin-triggered send -
 * one place owns "what does sending a reminder actually do".
 * @param {FirebaseFirestore.DocumentReference} userRef
 * @param {{name?: string, email?: string}} data - the user doc's data.
 * @throws if the user has no email, or the Brevo send itself fails.
 */
async function sendReminderEmailToUser(userRef, data) {
  if (!data.email) throw new Error("This user has no email on file.");
  const brevoApi = getBrevoClient();
  await brevoApi.sendTransacEmail(buildReminderEmail(data.name || "Student", data.email));
  await userRef.update({
    phoneReminderEmailSentAt: admin.firestore.FieldValue.serverTimestamp(),
    phoneReminderEmailSentCount: admin.firestore.FieldValue.increment(1),
  });
}

exports.phoneVerificationReminderEmail = onSchedule(
  { schedule: "0 10 * * *", timeZone: "Asia/Kolkata", secrets: ["BREVO_API_KEY"] },
  async () => {
    // Default OFF - an admin must explicitly enable this in admin.html's
    // Phone Verification Reminders panel. Manual per-user sends (the
    // "Send Reminder" button) are NOT gated by this - only the automatic
    // daily batch is.
    const settingsSnap = await db.doc(SETTINGS_DOC).get();
    if (!settingsSnap.exists || settingsSnap.data().autoSendEnabled !== true) {
      console.log("phoneVerificationReminderEmail: autoSendEnabled is false - skipping automatic run.");
      return;
    }

    const cutoff = new Date(Date.now() - GRACE_PERIOD_MS);

    const snap = await db
      .collection("users")
      .where("registrationCompleted", "==", false)
      .where("googleLinked", "==", true)
      .where("createdAt", "<=", cutoff)
      .orderBy("createdAt", "asc")
      .limit(MAX_CANDIDATES_PER_RUN)
      .get();

    if (snap.empty) return;

    let sentCount = 0;

    for (const userDoc of snap.docs) {
      if (sentCount >= DAILY_SEND_LIMIT) break;

      const data = userDoc.data();
      if (data.phone || data.phoneNumber) continue; // already verified, stuck elsewhere
      if (data.phoneReminderEmailSentAt) continue; // automatic send is one-time-only per user
      if (!data.email) continue;

      try {
        await sendReminderEmailToUser(userDoc.ref, data);
        sentCount++;
        console.log(`Phone verification reminder sent to: ${data.email}`);
      } catch (error) {
        console.error(`phoneVerificationReminderEmail failed for uid ${userDoc.id}:`, error.message);
      }
    }

    console.log(`phoneVerificationReminderEmail: sent ${sentCount}/${DAILY_SEND_LIMIT} today (${snap.docs.length} candidates read)`);
  }
);

exports.sendReminderEmailToUser = sendReminderEmailToUser;
exports.SETTINGS_DOC = SETTINGS_DOC;
