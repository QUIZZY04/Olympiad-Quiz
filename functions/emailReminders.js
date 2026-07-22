/**
 * =====================================================================
 * PHONE VERIFICATION REMINDER EMAIL
 * =====================================================================
 * Additive-only: a single scheduled function that nudges users who
 * signed up with Google but never verified a mobile number (and so
 * never finished registration - see signup.html's ACTIVE_USER state)
 * to come back and complete it, since verification gates access to
 * Free Mock Tests and other facilities via auth-guard.js.
 * =====================================================================
 */

const { onSchedule } = require("firebase-functions/v2/scheduler");
const { admin, db } = require("./config");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const GRACE_PERIOD_MS = 15 * 60 * 1000; // don't email someone still mid-OTP-entry
const SITE_URL = "https://olympiadquiz.org/signup.html?mode=completion";

const SENDER_INFO = {
  email: "admin@olympiadquiz.org",
  name: "OlympiadQuiz",
};

function getBrevoClient() {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  defaultClient.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;
  return new SibApiV3Sdk.TransactionalEmailsApi();
}

function buildReminderEmail(name) {
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.sender = SENDER_INFO;
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

exports.phoneVerificationReminderEmail = onSchedule(
  { schedule: "every 10 minutes", timeZone: "Asia/Kolkata", secrets: ["BREVO_API_KEY"] },
  async () => {
    const cutoff = new Date(Date.now() - GRACE_PERIOD_MS);

    const snap = await db
      .collection("users")
      .where("registrationCompleted", "==", false)
      .where("googleLinked", "==", true)
      .where("createdAt", "<=", cutoff)
      .get();

    if (snap.empty) return;

    const brevoApi = getBrevoClient();

    for (const userDoc of snap.docs) {
      const data = userDoc.data();
      if (data.phone || data.phoneNumber) continue; // already verified, stuck elsewhere
      if (data.phoneReminderEmailSentAt) continue; // already emailed once
      if (!data.email) continue;

      try {
        await brevoApi.sendTransacEmail(buildReminderEmail(data.name || "Student"));
        await userDoc.ref.update({ phoneReminderEmailSentAt: admin.firestore.FieldValue.serverTimestamp() });
        console.log(`Phone verification reminder sent to: ${data.email}`);
      } catch (error) {
        console.error(`phoneVerificationReminderEmail failed for uid ${userDoc.id}:`, error.message);
      }
    }
  }
);
