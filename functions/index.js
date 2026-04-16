const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onUserCreated } = require("firebase-functions/v2/auth");
const { onDocumentWritten } = require("firebase-functions/v2/firestore");
rm -rf node_modules package-lock.json
const Brevo = require("@getbrevo/brevo");

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();


// =================================================================
// BREVO (SENDINBLUE) CONFIGURATION
// =================================================================

/**
 * Initializes and returns the Brevo Transactional Emails API client.
 * It uses the API key stored in Firebase Secrets.
 * @returns {SibApiV3Sdk.TransactionalEmailsApi} The Brevo API client.
 */
function getBrevoClient() {
  // Configure API key authorization: api-key
  const defaultClient = Brevo.ApiClient.instance;
  const apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = process.env.BREVO_API_KEY;
  return new Brevo.TransactionalEmailsApi();
}

const SENDER_INFO = {
  email: "admin@olympiadquiz.org",
  name: "Olympiad Portal",
};

// =================================================================
// 1. WELCOME EMAIL SYSTEM (V1 AUTH TRIGGER)
// =================================================================

/**
 * Triggered when a new user is created in Firebase Authentication.
 * 1. Creates a corresponding user document in Firestore.
 * 2. Sends a welcome email to the user.
 */
exports.sendWelcomeEmailOnSignup = onUserCreated({ secrets: ["BREVO_API_KEY"] }, async (event) => {
    const user = event.data; // The user object from the event
    const { uid, email, displayName } = user;

    try {
      // 1. Save user profile to Firestore
      await db.collection("users").doc(uid).set({
        uid: uid,
        email: email || null,
        name: displayName || "Student",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      console.log(`User document created for UID: ${uid}`);

      // 2. Send welcome email if an email address exists
      if (!email) {
        console.log(`Skipping welcome email for user ${uid} (no email address).`);
        return;
      }

      const brevoApi = getBrevoClient();
      const sendSmtpEmail = new Brevo.SendSmtpEmail();

      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: email, name: displayName || "Student" }];
      sendSmtpEmail.subject = "Welcome to Olympiad Portal! 🎓";
      sendSmtpEmail.htmlContent = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Welcome, ${displayName || "Student"}!</h2>
            <p>Thank you for joining the Olympiad Portal, your ultimate destination for mastering competitive exams.</p>
            <p>You're all set to start your journey. Here's what you can do next:</p>
            <ul>
              <li>Take a <strong>Full Mock Test</strong> to simulate the real exam experience.</li>
              <li>Practice specific topics with our <strong>Chapter-wise Quizzes</strong>.</li>
              <li>Compete with students nationwide in the <strong>Live Quiz Arena</strong>.</li>
            </ul>
            <p>Ready to begin? Head over to your dashboard and start practicing!</p>
            <p><strong><a href="https://olympiadquiz.org/dashboard.html" style="color: #4f46e5;">Go to Dashboard</a></strong></p>
            <br>
            <p>Happy learning, and may the best minds win! 🚀</p>
            <p>Best regards,<br>The Olympiad Portal Team</p>
          </div>
        `;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      console.log(`Welcome email successfully sent to: ${email}`);
    } catch (error) {
      console.error(`Error in sendWelcomeEmailOnSignup for user ${uid}:`, error.message);
    }
});


// =================================================================
// 2. BULK EMAIL SYSTEM (V2 ONCALL FUNCTION)
// =================================================================

/**
 * An admin-only callable function to send bulk emails to all users.
 * - Authenticates the caller as an admin.
 * - Fetches all users, de-duplicates emails.
 * - Sends emails in batches using BCC to avoid exposing user emails.
 */
exports.sendBulkEmail = onCall({ secrets: ["BREVO_API_KEY"] }, async (request) => {
  // 1. Admin Authentication
  if (request.auth?.token.email !== "madhhu52@gmail.com") {
    console.error("Permission denied for sendBulkEmail. Caller:", request.auth?.token.email);
    throw new HttpsError("permission-denied", "You must be an admin to perform this action.");
  }

  const { subject, htmlContent } = request.data;

  // 2. Input Validation
  if (!subject || !htmlContent) {
    throw new HttpsError("invalid-argument", "The function must be called with 'subject' and 'htmlContent' arguments.");
  }

  console.log("Starting bulk email process...");

  try {
    // 3. Fetch and clean email list
    const usersSnapshot = await db.collection("users").get();
    const allEmails = usersSnapshot.docs.map((doc) => doc.data().email).filter((email) => email && typeof email === "string");
    const uniqueEmails = [...new Set(allEmails)];

    console.log(`Found ${uniqueEmails.length} unique emails to send to.`);

    if (uniqueEmails.length === 0) {
      console.log("No emails found. Aborting bulk send.");
      return { success: true, message: "No users with emails found." };
    }

    // 4. Send emails in batches
    const brevoApi = getBrevoClient();
    const batchSize = 50; // Brevo allows up to 1000, but smaller is safer
    const delayBetweenBatches = 400; // ms

    for (let i = 0; i < uniqueEmails.length; i += batchSize) {
      const batch = uniqueEmails.slice(i, i + batchSize);
      const bccList = batch.map((email) => ({ email }));

      console.log(`Sending batch ${i / batchSize + 1} of ${Math.ceil(uniqueEmails.length / batchSize)}...`);

      const sendSmtpEmail = new Brevo.SendSmtpEmail();
      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: SENDER_INFO.email, name: SENDER_INFO.name }];
      sendSmtpEmail.bcc = bccList;
      sendSmtpEmail.subject = subject;
      sendSmtpEmail.htmlContent = htmlContent;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      
      // Add a delay to respect rate limits
      await new Promise((resolve) => setTimeout(resolve, delayBetweenBatches));
    }

    console.log("Bulk email process completed successfully.");
    return { success: true, message: `Successfully sent emails to ${uniqueEmails.length} users.` };
  } catch (error) {
    console.error("Error during bulk email sending:", error.message);
    throw new HttpsError("internal", "An error occurred while sending bulk emails.", error.message);
  }
});


// =================================================================
// 3. RESULT EMAIL SYSTEM (V2 FIRESTORE TRIGGER)
// =================================================================

/**
 * Triggered on create or update of a document in the 'leaderboard' collection.
 * Sends a test result email to the user.
 */
exports.sendResultEmail = onDocumentWritten(
  {
    document: "leaderboard/{resultId}",
    secrets: ["BREVO_API_KEY"],
  },
  async (event) => {
    const resultId = event.params.resultId;
    const afterData = event.data?.after.data();
    const beforeData = event.data?.before.data();

    console.log(`Leaderboard trigger fired for document: ${resultId}`);

    // Exit if the document was deleted
    if (!afterData) {
      console.log("Document deleted. No email sent.");
      return;
    }

    // Exit if score hasn't changed on an update, to prevent duplicate emails
    if (beforeData && beforeData.score === afterData.score) {
      console.log("Score is unchanged. No email sent.");
      return;
    }

    const { uid, score, total } = afterData;

    // Validate essential data
    if (typeof score === "undefined" || typeof total === "undefined") {
      console.error("Invalid score/total data in leaderboard document:", resultId);
      return;
    }

    let userEmail = null;
    let userName = "Student";

    // Start with the email from the trigger data as a baseline/fallback.
    if (afterData.email) {
      userEmail = afterData.email;
    }

    if (uid) {
        try {
            // Fetch both Auth and Firestore user data in parallel for efficiency.
            const [userRecord, userDoc] = await Promise.all([
                admin.auth().getUser(uid),
                db.collection("users").doc(uid).get(),
            ]);

            // The email from the Auth record is the most reliable source.
            if (userRecord.email) {
                userEmail = userRecord.email;
            }

            // The 'name' from the Firestore doc is the most up-to-date display name.
            if (userDoc.exists() && userDoc.data().name) {
                userName = userDoc.data().name;
            } else if (userRecord.displayName) {
                // Fallback to the Auth display name if Firestore one isn't set.
                userName = userRecord.displayName;
            }
        } catch (error) {
            console.warn(`Could not fully resolve user data for UID ${uid}. Proceeding with available data. Error:`, error.message);
        }
    }

    if (!userEmail) {
      console.error(`Could not find a valid email for result processing: ${resultId}`);
      return;
    }

    const accuracy = Math.round((Number(score) / Number(total)) * 100);
    const testType = afterData.isChampionship ? "Live Quiz Arena" : (afterData.topicName ? "Chapterwise Practice" : "Full Mock Test");
    const subject = afterData.subject ? afterData.subject.charAt(0).toUpperCase() + afterData.subject.slice(1) : "General";

    try {
      const brevoApi = getBrevoClient();
      const sendSmtpEmail = new Brevo.SendSmtpEmail();

      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: userEmail, name: userName }];
      sendSmtpEmail.subject = `Your Olympiad Test Result: ${score}/${total} in ${subject} 🏆`;
      sendSmtpEmail.htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
            <h2 style="color: #4f46e5;">Hello ${userName},</h2>
            <p>Your test result is ready! Here's how you performed:</p>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-size: 16px; color: #64748b;">${testType} - ${subject}</p>
              <p style="margin: 10px 0; font-size: 36px; font-weight: bold; color: #0f172a;">
                ${score} <span style="font-size: 24px; color: #64748b;">/ ${total}</span>
              </p>
              <p style="margin: 0; font-size: 18px; font-weight: bold; color: ${accuracy >= 80 ? "#10b981" : (accuracy >= 50 ? "#f59e0b" : "#ef4444")};">
                Accuracy: ${accuracy}%
              </p>
            </div>
            <p style="margin-top: 20px;">Keep practicing to sharpen your skills and climb the leaderboard. Every attempt is a step towards excellence!</p>
            <p><strong><a href="https://olympiadquiz.org/dashboard.html" style="color: #4f46e5;">Practice More Quizzes</a></strong></p>
            <br>
            <p>Best of luck, and see you at the top! 🚀</p>
            <p>The Olympiad Portal Team</p>
          </div>
        `;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      console.log(`Result email successfully sent to: ${userEmail} for result ID: ${resultId}`);
    } catch (error) {
      console.error(`Failed to send result email to ${userEmail}. Error:`, error.message);
    }
  }
);
