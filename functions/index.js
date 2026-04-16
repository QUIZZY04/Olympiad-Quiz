const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { onCall, HttpsError } = require("firebase-functions/v2/https");

const { onDocumentWritten } = require("firebase-functions/v2/firestore");

const SibApiV3Sdk = require("sib-api-v3-sdk");

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
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications["api-key"];
  // Use the secret managed by Firebase, using environment variables
  apiKey.apiKey = process.env.BREVO_API_KEY;
  return new SibApiV3Sdk.TransactionalEmailsApi();
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
exports.sendWelcomeEmailOnSignup = functions.runWith({ secrets: ["BREVO_API_KEY"] }).auth.user().onCreate(async (user) => {
     // The user object from the event
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
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

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

      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
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
    console.log(`[DEBUG] sendResultEmail trigger is successfully working for resultId: ${resultId}`);

    // Exit if the document was deleted
    if (!afterData) {
      console.log("Document deleted. No email sent.");
      return;
    }

    // Exit if this is an update and neither the score nor the timestamp has changed.
    // This ensures an email is sent if a student retakes a test and gets the EXACT SAME score.
    if (beforeData) {
      const scoreUnchanged = beforeData.score === afterData.score;
      const dateUnchanged = beforeData.date?.toMillis() === afterData.date?.toMillis();

      if (scoreUnchanged && dateUnchanged) {
        console.log("Score and date are unchanged. Treating as a background update. No email sent.");
        return;
      }
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
            if (userDoc.exists && userDoc.data().name) {
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
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: userEmail, name: userName }];
      sendSmtpEmail.subject = `Your Olympiad Test Result: ${score}/${total} in ${subject} 🏆`;
      sendSmtpEmail.htmlContent = `
          <div style="font-family: Arial, sans-serif; background-color: #f1f5f9; padding: 20px 10px;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%); color: #ffffff; padding: 30px 25px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; font-weight: 800;">Test Result Ready!</h1>
              </div>

              <!-- Body -->
              <div style="padding: 30px 25px; color: #0f172a;">
                <h2 style="font-size: 22px; margin: 0 0 20px 0; font-weight: 700;">Hello ${userName},</h2>
                <p style="font-size: 16px; color: #64748b; margin: 0 0 25px 0; line-height: 1.6;">
                  Your result for the <strong>${testType} - ${subject}</strong> is in. Here's a summary of your performance:
                </p>

                <!-- Result Card -->
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; text-align: center;">
                  
                  <!-- Score -->
                  <div style="margin-bottom: 20px;">
                    <span style="font-size: 16px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Your Score 🏆</span>
                    <p style="margin: 8px 0 0 0; font-size: 52px; font-weight: 800; color: #1e293b; line-height: 1;">
                      ${score}<span style="font-size: 28px; color: #94a3b8; font-weight: 600;"> / ${total}</span>
                    </p>
                  </div>

                  <!-- Accuracy -->
                  <div>
                    <span style="font-size: 16px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Accuracy 🎯</span>
                    <p style="margin: 8px 0 15px 0; font-size: 36px; font-weight: 800; color: ${accuracy >= 80 ? "#10b981" : (accuracy >= 50 ? "#f59e0b" : "#ef4444")};">
                      ${accuracy}%
                    </p>
                    
                    <!-- Progress Bar -->
                    <div style="background-color: #e2e8f0; border-radius: 50px; height: 12px; width: 100%; overflow: hidden;">
                      <div style="width: ${accuracy}%; height: 100%; background-color: ${accuracy >= 80 ? "#10b981" : (accuracy >= 50 ? "#f59e0b" : "#ef4444")}; border-radius: 50px; transition: width 0.5s ease-in-out;"></div>
                    </div>
                  </div>

                </div>

                <!-- Motivational Message -->
                <p style="font-size: 16px; color: #64748b; text-align: center; margin: 25px 0; font-style: italic;">
                  "${accuracy >= 80 ? "Excellent work! You're on the path to mastery." : (accuracy >= 50 ? "Good effort! Keep practicing to reach the top." : "Every master was once a beginner. Keep practicing, and you will improve!")}"
                </p>

                <!-- CTA Button -->
                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://olympiadquiz.org/dashboard.html" target="_blank" style="background-color: #4f46e5; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block;">
                    Practice More Tests
                  </a>
                </div>

                <p style="font-size: 16px; color: #64748b; line-height: 1.6;">
                  Every attempt is a step towards excellence. Keep practicing to sharpen your skills and climb the leaderboard!
                </p>
                
                <p style="font-size: 16px; color: #64748b; margin-top: 30px; line-height: 1.6;">
                  Best of luck, and see you at the top! 🚀<br>
                  The Olympiad Portal Team
                </p>
              </div>

              <!-- Footer -->
              <div style="background-color: #f8fafc; padding: 20px 25px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                  © 2024 Olympiad Portal. All rights reserved.<br>
                  You are receiving this email because you completed a test on our platform.
                </p>
              </div>

            </div>
          </div>
        `;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      console.log(`Result email successfully sent to: ${userEmail} for result ID: ${resultId}`);
    } catch (error) {
      console.error(`Failed to send result email to ${userEmail}. Error:`, error.message);
    }
  }
);
