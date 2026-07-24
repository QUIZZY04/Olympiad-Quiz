const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const crypto = require("crypto");

const { onDocumentWritten, onDocumentCreated } = require("firebase-functions/v2/firestore");

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

/**
 * Initializes and returns the Brevo Transactional SMS API client.
 * @returns {SibApiV3Sdk.TransactionalSMSApi} The Brevo SMS API client.
 */
function getBrevoSMSClient() {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications["api-key"];
  // Use the same secret managed by Firebase
  apiKey.apiKey = process.env.BREVO_API_KEY;
  return new SibApiV3Sdk.TransactionalSMSApi();
}

const SENDER_INFO = {
  email: "admin@olympiadquiz.org",
  name: "Olympiad Portal",
  name: "OlympiadQuiz",
};

// =================================================================
// 1. WELCOME EMAIL SYSTEM (V1 AUTH + V2 FIRESTORE)
// =================================================================

/**
 * Triggered when a new user is created in Firebase Authentication.
 * This 1st Gen function's only job is to create a user document in Firestore.
 * Its name and type are preserved to avoid a V1-to-V2 deployment conflict.
 * The creation of the document will then trigger `triggerWelcomeEmail`.
 */
exports.sendWelcomeEmailOnSignup = functions.auth.user().onCreate(async (user) => {
  const { uid, email, displayName } = user;
  try {
    await db.collection("users").doc(uid).set({
      uid: uid,
      email: email || null,
      name: displayName || "Student",
      onboardingState: 'NEW_USER',
      registrationCompleted: false,
      email_consent: true,
      promo_consent: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    console.log(`User document created for UID: ${uid}. This will trigger the welcome email function.`);
  } catch (error) {
    console.error(`Error creating user document for UID ${uid}:`, error.message);
  }
});

/**
 * Triggered when a user document is created or updated in Firestore.
 * - Sends a welcome email to the user once an email address is available.
 * - Avoids duplicate emails using a 'welcomeEmailSent' flag.
 */
exports.triggerWelcomeEmail = onDocumentWritten(
  {
    document: "users/{uid}",
    secrets: ["BREVO_API_KEY"],
  },
  async (event) => {
    const uid = event.params.uid;
    const afterData = event.data?.after.data();

    // Exit if document was deleted or has no data
    if (!afterData) {
      return;
    }

    const { email, name, welcomeEmailSent, email_consent, registrationCompleted } = afterData;

    // Exit if email already sent, no email exists, opted out, or registration incomplete
    if (welcomeEmailSent || !email || email_consent === false || registrationCompleted !== true) {
      return;
    }

    console.log(`Welcome trigger fired for: ${email}`);

    try {
      const brevoApi = getBrevoClient();
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: email, name: name || "Student" }];
      sendSmtpEmail.subject = "Welcome to Olympiad Portal! 🎓";
      sendSmtpEmail.subject = "Welcome to OlympiadQuiz! 🎓";
      sendSmtpEmail.htmlContent = `<body style="background-color: #f5f7fb; margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%); padding: 40px 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800;">Welcome, ${name || 'Student'}! 🎉</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 35px 30px; color: #0f172a; line-height: 1.6;">
              <p style="font-size: 16px; margin: 0 0 20px;">Thank you for joining <strong>Olympiad Portal</strong>, your ultimate destination for mastering competitive exams. You're all set to start your journey!</p>
              <p style="font-size: 16px; margin: 0 0 20px;">Thank you for joining <strong>OlympiadQuiz</strong>, your ultimate destination for mastering competitive exams. You're all set to start your journey!</p>
              
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <p style="margin: 0 0 10px; font-size: 14px; color: #64748b;">Your account has been created with the following email:</p>
                <p style="margin: 0; font-size: 16px; font-weight: bold; color: #4f46e5; word-break: break-all;">${email}</p>
              </div>

              <p style="font-size: 16px; margin: 0 0 30px;">🔐 Please keep your login details safe. Here's what you can do next:</p>
              <ul style="padding-left: 20px; margin: 0 0 30px; font-size: 16px;">
                <li style="margin-bottom: 10px;">📚 Take a <strong>Full Mock Test</strong> to simulate the real exam experience.</li>
                <li style="margin-bottom: 10px;">📖 Practice specific topics with our <strong>Chapter-wise Quizzes</strong>.</li>
                <li style="margin-bottom: 10px;">⚡ Compete with students nationwide in the <strong>Live Quiz Arena</strong>.</li>
              </ul>

              <!-- CTA Button -->
              <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="https://olympiadquiz.org/dashboard.html" target="_blank" style="background-color: #4f46e5; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block;">
                      Start Your First Test
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                © 2024 Olympiad Portal. All rights reserved.<br>
                © 2024 OlympiadQuiz. All rights reserved.<br>
                If you did not sign up for this account, you can safely ignore this email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      console.log(`Welcome email sent to: ${email}`);

      // Set flag to prevent sending email again
      await event.data.after.ref.update({ welcomeEmailSent: true });
    } catch (error) {
      console.error(`Error in triggerWelcomeEmail for user ${uid}:`, error.message);
    }
  },
);

// =================================================================
// 2. BULK EMAIL SYSTEM (V2 ONCALL FUNCTION)
// =================================================================

/**
 * An admin-only callable function to send bulk emails to all users.
 * - Authenticates the caller as an admin.
 * - Fetches all users, de-duplicates emails.
 * - Sends emails in batches using BCC to avoid exposing user emails.
 */
exports.sendBulkEmail = onCall({
  secrets: ["BREVO_API_KEY"],
  timeoutSeconds: 540,
  memory: "1GiB"
}, async (request) => {
  // 1. Admin Authentication
  if (request.auth?.token?.email !== "madhhu52@gmail.com") {
    console.error("Permission denied for sendBulkEmail. Caller:", request.auth?.token?.email);
    throw new HttpsError("permission-denied", "You must be an admin to perform this action.");
  }

  const { subject, htmlContent, targetEmails, extraContacts, consentAttested } = request.data;

  // Strict email validator — Brevo rejects anything that doesn't match RFC format
  const isValidEmail = (email) => {
    if (!email || typeof email !== "string") return false;
    const trimmed = email.trim();
    // Must be non-empty, contain exactly one @, no spaces, and match basic RFC pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
  };

  // 2. Input Validation
  if (!subject || !htmlContent) {
    throw new HttpsError("invalid-argument", "The function must be called with 'subject' and 'htmlContent' arguments.");
  }
  // extraContacts = CSV-uploaded addresses that aren't Firestore users at
  // all (e.g. unregistered leads) - require the same on-screen attestation
  // pattern already used for WhatsApp's CSV contact upload, since these
  // people never went through email_consent (there's no Firestore doc to
  // check consent against in the first place).
  if (Array.isArray(extraContacts) && extraContacts.length && !consentAttested) {
    throw new HttpsError(
      "invalid-argument",
      "consentAttested must be true to include CSV-uploaded contacts - confirm they're OK to receive promotional email first."
    );
  }

  console.log("Starting bulk email process...");

  try {
    // 3. Fetch and clean email list using pagination to avoid memory overflow
    const uniqueEmails = new Set();
    
    if (targetEmails && Array.isArray(targetEmails) && targetEmails.length > 0) {
      targetEmails.forEach((email) => {
        const trimmed = (email || "").trim();
        if (isValidEmail(trimmed)) {
          uniqueEmails.add(trimmed);
        } else if (trimmed) {
          console.warn(`Skipping invalid email from targetEmails: "${trimmed}"`);
        }
      });
    } else {
      let lastDoc = null;
      let hasMore = true;

      while (hasMore) {
        let usersQuery = db.collection("users").select("email").limit(500);
        if (lastDoc) {
          usersQuery = usersQuery.startAfter(lastDoc);
        }
        const snapshot = await usersQuery.get();

        if (snapshot.empty) {
          hasMore = false;
          break;
        }

        snapshot.docs.forEach((doc) => {
          if (doc.data().email_consent === false) return;
          const email = (doc.data().email || "").trim();
          if (isValidEmail(email)) {
            uniqueEmails.add(email);
          } else if (email) {
            console.warn(`Skipping invalid email from Firestore doc ${doc.id}: "${email}"`);
          }
        });

        lastDoc = snapshot.docs[snapshot.docs.length - 1];
      }
    }

    // CSV-uploaded contacts (unregistered leads) - merged in only with the
    // admin's explicit consent attestation (checked above). Additive to
    // whichever path (targetEmails / all Firestore users) ran above.
    if (consentAttested && Array.isArray(extraContacts)) {
      extraContacts.forEach((contact) => {
        const trimmed = (contact?.email || "").trim();
        if (isValidEmail(trimmed)) {
          uniqueEmails.add(trimmed);
        } else if (trimmed) {
          console.warn(`Skipping invalid email from extraContacts: "${trimmed}"`);
        }
      });
    }

    const emailList = Array.from(uniqueEmails);
    console.log(`Found ${emailList.length} unique valid emails to send to.`);

    if (emailList.length === 0) {
      console.log("No emails found. Aborting bulk send.");
      return { success: true, message: "No users with emails found." };
    }

    // 4. Send emails in batches
    const brevoApi = getBrevoClient();
    const batchSize = 50; // Keep batch size safe for API limits
    const delayBetweenBatches = 500; // ms

    for (let i = 0; i < emailList.length; i += batchSize) {
      const batch = emailList.slice(i, i + batchSize);
      // Final safety filter — ensures no malformed email reaches Brevo
      const bccList = batch
        .filter((email) => isValidEmail(email))
        .map((email) => ({ email: email.trim() }));

      if (bccList.length === 0) {
        console.warn(`Batch ${Math.floor(i / batchSize) + 1} had no valid emails after final filter. Skipping.`);
        continue;
      }

      console.log(`Sending batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(emailList.length / batchSize)}...`);

      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: SENDER_INFO.email, name: SENDER_INFO.name }];
      sendSmtpEmail.bcc = bccList;
      sendSmtpEmail.subject = subject;
      sendSmtpEmail.htmlContent = htmlContent;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      
      // Delay to respect rate limits
      if (i + batchSize < emailList.length) {
        await new Promise((resolve) => setTimeout(resolve, delayBetweenBatches));
      }
    }

    console.log("Bulk email process completed successfully.");
    return { success: true, message: `Successfully sent emails to ${emailList.length} users.` };
  } catch (error) {
    // Detailed error logging
    const errorDetails = error.response ? error.response.text : error.message;
    console.error("Error during bulk email sending:", errorDetails);
    
    // Return a proper JSON response instead of a generic HttpsError("internal")
    // This avoids the "❌ Error: Failed: internal" masking issue on the frontend
    return { 
      success: false, 
      message: "An error occurred while sending bulk emails.", 
      errorDetails: errorDetails 
    };
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
                if (userDoc.data().email_consent === false) {
                    console.log("Email consent false. Skipping.");
                    return;
                }
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
    const isLiveQuiz = afterData.isChampionship === true;
    const testType = isLiveQuiz ? "Live Quiz Arena" : (afterData.topicName ? "Chapterwise Practice" : "Full Mock Test");
    const subject = afterData.subject ? afterData.subject.charAt(0).toUpperCase() + afterData.subject.slice(1) : "General";

    try {
      const brevoApi = getBrevoClient();
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: userEmail, name: userName }];
      sendSmtpEmail.subject = isLiveQuiz 
        ? `🏆 E-Certificate of Participation: ${subject} Live Olympiad` 
        : `Your Olympiad Test Result: ${score}/${total} in ${subject} 🏆`;

      let htmlContent = "";

      if (isLiveQuiz) {
        const issueDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
        htmlContent = `<body style="background-color: #f5f7fb; margin: 0; padding: 20px; font-family: 'Georgia', serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table width="700" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 15px solid #1e293b; padding: 10px; text-align: center; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
          <tr>
            <td style="border: 2px solid #cbd5e1; padding: 50px 40px;">
              <h1 style="color: #1e293b; font-size: 38px; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 2px;">Certificate of Participation</h1>
              <div style="width: 120px; height: 3px; background-color: #ff6b00; margin: 0 auto 35px auto;"></div>
              
              <p style="font-size: 20px; color: #475569; margin: 0 0 25px 0; font-family: 'Arial', sans-serif;">This is proudly presented to</p>
              
              <h2 style="font-size: 46px; color: #ff6b00; margin: 0 0 25px 0; font-family: 'Times New Roman', serif; font-style: italic;">${userName}</h2>
              
              <p style="font-size: 18px; color: #475569; line-height: 1.8; margin: 0 0 40px 0; font-family: 'Arial', sans-serif;">
                For successfully participating and demonstrating exceptional effort in the<br>
                <strong style="color: #1e293b; font-size: 20px;">${subject} Live Olympiad Quiz</strong><br>
                conducted by Olympiad Portal.
                conducted by OlympiadQuiz.
              </p>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 0 auto 40px auto; width: 70%; font-family: 'Arial', sans-serif;">
                <table width="100%">
                  <tr>
                    <td align="center" style="font-size: 14px; color: #64748b; text-transform: uppercase; padding-bottom: 5px;">Score Achieved</td>
                    <td align="center" style="font-size: 14px; color: #64748b; text-transform: uppercase; padding-bottom: 5px;">Accuracy</td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size: 26px; font-weight: bold; color: #1e293b;">${score}/${total}</td>
                    <td align="center" style="font-size: 26px; font-weight: bold; color: #10b981;">${accuracy}%</td>
                  </tr>
                </table>
              </div>

              <table width="100%" style="margin-top: 30px; font-family: 'Arial', sans-serif;">
                <tr>
                  <td align="center" width="50%">
                    <p style="margin: 0; font-size: 18px; color: #1e293b; font-weight: bold; border-bottom: 1px solid #94a3b8; display: inline-block; padding-bottom: 5px; width: 160px;">${issueDate}</p>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #64748b; text-transform: uppercase;">Date of Issue</p>
                  </td>
                  <td align="center" width="50%">
                    <p style="margin: 0; font-size: 24px; color: #1e293b; font-weight: bold; font-family: 'Brush Script MT', cursive; border-bottom: 1px solid #94a3b8; display: inline-block; padding-bottom: 5px; width: 160px;">Olympiad Portal</p>
                    <p style="margin: 0; font-size: 24px; color: #1e293b; font-weight: bold; font-family: 'Brush Script MT', cursive; border-bottom: 1px solid #94a3b8; display: inline-block; padding-bottom: 5px; width: 160px;">OlympiadQuiz</p>
                    <p style="margin: 8px 0 0 0; font-size: 13px; color: #64748b; text-transform: uppercase;">Official Organizer</p>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
        </table>
        
        <p style="font-family: Arial, sans-serif; font-size: 15px; color: #64748b; margin-top: 25px;">
          Save this email or take a screenshot to preserve your certificate.<br>
          View your detailed analysis on the <a href="https://olympiadquiz.org/dashboard.html" style="color: #4f46e5; text-decoration: none;">Dashboard</a>.
        </p>
      </td>
    </tr>
  </table>
</body>`;
      } else {
        htmlContent = `<body style="background-color: #f5f7fb; margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%); padding: 40px 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800;">Your Test Result 🎯</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 35px 30px; color: #0f172a; line-height: 1.6;">
              <h2 style="font-size: 22px; margin: 0 0 20px 0; font-weight: 700;">Hello ${userName},</h2>
              <p style="font-size: 16px; color: #64748b; margin: 0 0 25px 0;">
                Your result for the <strong>${testType} - ${subject}</strong> is in. Here's a summary of your performance:
              </p>

              <!-- Result Card -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; text-align: center;">
                
                <!-- Score -->
                <div style="margin-bottom: 20px;">
                  <span style="font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Your Score</span>
                  <p style="margin: 8px 0 0 0; font-size: 52px; font-weight: 800; color: #1e293b; line-height: 1;">
                    ${score}<span style="font-size: 28px; color: #94a3b8; font-weight: 600;"> / ${total}</span>
                  </p>
                </div>

                <!-- Accuracy -->
                <div>
                  <span style="font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Accuracy</span>
                  <p style="margin: 8px 0 15px 0; font-size: 36px; font-weight: 800; color: ${accuracy >= 80 ? '#10b981' : (accuracy >= 50 ? '#f59e0b' : '#ef4444')};">
                    ${accuracy}%
                  </p>
                  
                  <!-- Progress Bar -->
                  <div style="background-color: #e2e8f0; border-radius: 50px; height: 12px; width: 100%; overflow: hidden;">
                    <div style="width: ${accuracy}%; height: 100%; background-color: ${accuracy >= 80 ? '#10b981' : (accuracy >= 50 ? '#f59e0b' : '#ef4444')}; border-radius: 50px; transition: width 0.5s ease-in-out;"></div>
                  </div>
                </div>

              </div>

              <!-- Motivational Message -->
              <p style="font-size: 16px; color: #64748b; text-align: center; margin: 25px 0; font-style: italic;">
                "${accuracy >= 80 ? 'Excellent performance! You are on the path to mastery. 🏆' : (accuracy >= 50 ? 'Good effort! Keep practicing to reach the top. 👍' : 'Every master was once a beginner. Keep practicing, and you will improve! 💪')}"
              </p>

              <!-- CTA Button -->
              <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                  <td align="center" style="padding: 15px 0;">
                    <a href="https://olympiadquiz.org/dashboard.html" target="_blank" style="background-color: #4f46e5; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block;">
                      Practice More Tests
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 16px; color: #64748b; margin-top: 15px;">
                Best of luck, and see you at the top! 🚀<br>
                The Olympiad Portal Team
                The OlympiadQuiz Team
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                © 2024 Olympiad Portal. All rights reserved.<br>
                © 2024 OlympiadQuiz. All rights reserved.<br>
                You are receiving this email because you completed a test on our platform.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`;
      }

      sendSmtpEmail.htmlContent = htmlContent;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      console.log(`Result email successfully sent to: ${userEmail} for result ID: ${resultId}`);
    } catch (error) {
      console.error(`Failed to send result email to ${userEmail}. Error:`, error.message);
    }
  }
);

// =================================================================
// 7. BULK SMS SYSTEM (BREVO)
// =================================================================

/**
 * An admin-only callable function to send transactional SMS alerts.
 */
exports.sendBulkSMS = onCall({
  secrets: ["BREVO_API_KEY"],
  timeoutSeconds: 540,
  memory: "512MiB"
}, async (request) => {
  // 1. Admin Authentication
  if (request.auth?.token?.email !== "madhhu52@gmail.com") {
    throw new HttpsError("permission-denied", "You must be an admin to perform this action.");
  }

  const { message, targetType, targetValue } = request.data;
  if (!message || !targetType) {
    throw new HttpsError("invalid-argument", "Message and targetType are required.");
  }

  try {
    const snapshot = await db.collection("users").get();
    const uniqueNumbers = new Set();
    const now = new Date().getTime();

    snapshot.docs.forEach(doc => {
      const data = doc.data();
      let add = false;
      
      if (targetType === "All Users") {
        add = true;
      } else if (targetType === "By Class" && targetValue) {
        if (String(data.class) === String(targetValue) || String(data.studentClass) === String(targetValue)) {
          add = true;
        }
      } else if (targetType === "Recent Registrations") {
        if (data.createdAt && data.createdAt.toDate) {
          const diff = now - data.createdAt.toDate().getTime();
          if (diff <= 7 * 24 * 60 * 60 * 1000) add = true; // Last 7 days
        }
      } else if (targetType === "Selected Users" && targetValue) {
        const targets = targetValue.split(",").map(t => t.trim().toLowerCase());
        if (targets.includes(String(data.email).toLowerCase()) || targets.includes(String(data.phone))) {
          add = true;
        }
      }

      // Format and deduplicate phone numbers safely, check consent
      if (add && data.phone && data.promo_consent === true) {
        let phone = String(data.phone).replace(/\D/g, '');
        if (phone.length === 10) phone = '91' + phone; // Add Indian country code default if 10 digits
        if (phone.length >= 11) uniqueNumbers.add('+' + phone);
      }
    });

    const phoneList = Array.from(uniqueNumbers);
    if (phoneList.length === 0) {
      return { success: true, sentCount: 0, failedCount: 0, message: "No valid phone numbers found for the selected target." };
    }

    const smsApi = getBrevoSMSClient();
    let sentCount = 0;
    let failedCount = 0;

    // Send SMS one by one (Brevo SMS API doesn't support bulk arrays natively in transactional endpoint)
    for (const phone of phoneList) {
      const sendTransacSms = new SibApiV3Sdk.SendTransacSms();
      sendTransacSms.sender = "Olympiad"; // Max 11 alphanumeric characters allowed by Brevo
      sendTransacSms.recipient = phone;
      sendTransacSms.content = message;

      try {
        await smsApi.sendTransacSms(sendTransacSms);
        sentCount++;
      } catch (err) {
        console.error(`Failed to send SMS to ${phone}:`, err.response ? err.response.text : err.message);
        failedCount++;
      }
      await new Promise(r => setTimeout(r, 50)); // Tiny delay to respect API rate limits
    }

    // Safely log the results in Firestore
    await db.collection("smsLogs").add({ message, targetType, targetValue: targetValue || "", totalUsers: phoneList.length, sentCount, failedCount, sentBy: request.auth.token.email, createdAt: admin.firestore.FieldValue.serverTimestamp() });
    return { success: true, sentCount, failedCount, totalUsers: phoneList.length, message: `Successfully sent ${sentCount} SMS. Failed: ${failedCount}.` };
  } catch (error) {
    console.error("SMS Broadcast Error:", error);
    throw new HttpsError("internal", "Failed to send SMS broadcast.");
  }
});

// =================================================================
// 6. PUSH NOTIFICATION SYSTEM
// =================================================================

/**
 * Sends push notifications to users. Admin only.
 */
exports.sendPushNotification = onCall({
  timeoutSeconds: 300,
  memory: "512MiB"
}, async (request) => {
  // 1. Admin Authorization
  if (request.auth?.token?.email !== "madhhu52@gmail.com") {
    throw new HttpsError("permission-denied", "You must be an admin to send notifications.");
  }

  const { title, body, link, targetType } = request.data;
  if (!title || !body) {
    throw new HttpsError("invalid-argument", "Notification title and body are required.");
  }

  try {
    console.log(`Preparing to send push notification. Target: ${targetType}`);
    const tokens = [];
    const tokensDocs = []; // Kept to remove inactive tokens

    // Fetch all active tokens
    const tokensSnapshot = await db.collection("userTokens").where("notificationsEnabled", "==", true).get();
    
    tokensSnapshot.forEach(doc => {
      const data = doc.data();
      // Legacy support for older devices with single token strings
      if (data.token) {
        tokens.push(data.token);
        tokensDocs.push({ id: doc.id, token: data.token, isArray: false });
      }
      // Support for modern multi-device token arrays
      if (data.tokens && Array.isArray(data.tokens)) {
        data.tokens.forEach(t => {
          tokens.push(t);
          tokensDocs.push({ id: doc.id, token: t, isArray: true });
        });
      }
    });

    if (tokens.length === 0) {
      console.log("No registered device tokens found.");
      return { success: true, message: "No active user tokens found to receive notifications." };
    }

    const message = {
      notification: { title, body },
      webpush: {
        notification: {
          icon: "https://olympiadquiz.org/favicon.png",
          click_action: link || "https://olympiadquiz.org/dashboard.html"
        }
      },
      data: { url: link || "/" },
      tokens: tokens
    };

    const response = await admin.messaging().sendEachForMulticast(message);
    console.log(`Successfully sent ${response.successCount} notifications. Failed: ${response.failureCount}`);

    // Safe Cleanup: Remove bad/expired tokens
    if (response.failureCount > 0) {
      const batch = db.batch();
      let purgeCount = 0;

      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          const errCode = resp.error?.code;
          if (errCode === 'messaging/invalid-registration-token' || errCode === 'messaging/registration-token-not-registered') {
            const badTokenInfo = tokensDocs[idx];
            if (badTokenInfo.isArray) {
              batch.update(db.collection("userTokens").doc(badTokenInfo.id), {
                tokens: admin.firestore.FieldValue.arrayRemove(badTokenInfo.token)
              });
            } else {
              batch.delete(db.collection("userTokens").doc(badTokenInfo.id));
            }
            purgeCount++;
          }
        }
      });
      
      if (purgeCount > 0) {
        await batch.commit();
        console.log(`Purged ${purgeCount} invalid tokens from database.`);
      }
    }

    // Logging
    await db.collection("notificationLogs").add({
      title,
      body,
      link: link || "",
      targetType: targetType || "All Users",
      totalTokens: tokens.length,
      successCount: response.successCount,
      failedCount: response.failureCount,
      sentBy: request.auth.token.email,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return {
      success: true,
      totalTokens: tokens.length,
      successCount: response.successCount,
      failedCount: response.failureCount
    };

  } catch (error) {
    console.error("Push Notification Error:", error);
    throw new HttpsError("internal", "Failed to send push notifications.");
  }
});

// =================================================================
// 5. RAZORPAY PAYMENT INTEGRATION
// =================================================================

/**
 * Creates a Razorpay order with auto-capture enabled.
 */
exports.createRazorpayOrder = onCall({
  secrets: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"]
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "User must be logged in to initiate payment.");
  }

  const { amount, sessionId } = request.data;
  if (!amount || !sessionId) {
    throw new HttpsError("invalid-argument", "Missing required amount or sessionId.");
  }

  try {
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from(process.env.RAZORPAY_KEY_ID + ":" + process.env.RAZORPAY_KEY_SECRET).toString("base64")
      },
      body: JSON.stringify({
        amount: Math.round(Number(amount) * 100), // Secure conversion to paise
        currency: "INR",
        receipt: `rcpt_${request.auth.uid.substring(0,5)}_${sessionId.substring(0,5)}`
      })
    });

    const order = await response.json();
    if (order.error) {
      throw new Error(order.error.description);
    }

    console.log("Returning Razorpay Key ID");
    return {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID, // Ensures frontend uses the exact same key as backend
      key: process.env.RAZORPAY_KEY_ID
    };
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    throw new HttpsError("internal", "Failed to create payment order.");
  }
});

/**
 * Verifies the Razorpay payment signature securely and marks as success.
 */
exports.verifyRazorpayPayment = onCall({
  secrets: ["RAZORPAY_KEY_SECRET"]
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "User must be logged in.");
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, sessionId, amount, couponUsed } = request.data;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !sessionId) {
    throw new HttpsError("invalid-argument", "Missing payment verification details.");
  }

  const secret = process.env.RAZORPAY_KEY_SECRET;
  
  // Generate HMAC SHA256 signature
  const generated_signature = crypto.createHmac('sha256', secret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex');

  // Verify if signatures match
  if (generated_signature === razorpay_signature) {
    const uid = request.auth.uid;
    try {
      // Signature is valid. Create the purchase document.
      // ⚠️ IMPORTANT: This database write is what triggers `sendLiveQuizRegistrationEmail`
      await db.collection("users").doc(uid).collection("purchases").doc(sessionId).set({
        sessionId: sessionId,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        amount: amount || 0,
        email: request.auth.token.email || null,
        status: "CAPTURED",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        time: admin.firestore.FieldValue.serverTimestamp(),
        couponUsed: couponUsed || null
      }, { merge: true });

      return { success: true, message: "Payment verified successfully." };
    } catch (error) {
      console.error("Error saving purchase to Firestore:", error);
      throw new HttpsError("internal", "Payment verified but failed to save record.");
    }
  } else {
    throw new HttpsError("permission-denied", "Invalid payment signature. Verification failed.");
  }
});

// =================================================================
// 4. LIVE QUIZ REGISTRATION ACKNOWLEDGEMENT EMAIL
// =================================================================

/**
 * Triggered when a new document is created in a user's 'purchases' subcollection.
 * This indicates a successful registration for a live quiz.
 */
exports.sendLiveQuizRegistrationEmail = onDocumentCreated(
  {
    document: "users/{uid}/purchases/{sessionId}",
    secrets: ["BREVO_API_KEY"],
  },
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
      console.log("No data associated with the event");
      return;
    }

    const purchaseData = snapshot.data();
    const uid = event.params.uid;
    const sessionId = event.params.sessionId;

    // Prevent duplicate sending if already flagged
    if (purchaseData.ackEmailSent) {
      console.log(`Ack email already sent for user ${uid}, session ${sessionId}`);
      return;
    }

    console.log(`Registration trigger fired for user: ${uid}, session: ${sessionId}`);

    try {
      // Fetch User Data
      const userDoc = await db.collection("users").doc(uid).get();
      if (!userDoc.exists) {
        console.error(`User ${uid} not found.`);
        return;
      }
      const userData = userDoc.data();
      if (userData.email_consent === false) {
        return;
      }
      const userEmail = userData.email;
      const userName = userData.name || "Student";

      if (!userEmail) {
        console.error(`No email found for user ${uid}`);
        return;
      }

      // Fetch Session Data
      const sessionDoc = await db.collection("test_sessions").doc(sessionId).get();
      if (!sessionDoc.exists) {
        console.error(`Session ${sessionId} not found.`);
        return;
      }
      const sessionData = sessionDoc.data();
      const sessionTitle = sessionData.title || "LIVE Olympiad Test";
      const subject = sessionData.subject ? sessionData.subject.charAt(0).toUpperCase() + sessionData.subject.slice(1) : "General";
      const grade = sessionData.class || "1-10";

      // Format Date and Time
      let istDateTime = "19 April 2026, To be announced";
      if (sessionData.startTime) {
        const startDate = sessionData.startTime.toDate();
        istDateTime = startDate.toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "medium",
          timeStyle: "short",
        });
      }

      // Prepare Brevo Email
      const brevoApi = getBrevoClient();
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: userEmail, name: userName }];
      sendSmtpEmail.subject = `✅ Registration Confirmed – ${sessionTitle}`;
      sendSmtpEmail.htmlContent = `<body style="background-color: #f5f7fb; margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden;">
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800;">Registration Confirmed! ✅</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 35px 30px; color: #0f172a; line-height: 1.6;">
              <p style="font-size: 16px; margin: 0 0 20px;">Hello <strong>${userName}</strong>,</p>
              <p style="font-size: 16px; margin: 0 0 20px;">You have successfully registered for the upcoming LIVE Quiz. Get ready to compete and showcase your skills!</p>
              
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <h3 style="margin: 0 0 15px; color: #4f46e5; font-size: 18px;">📝 Test Details</h3>
                <p style="margin: 0 0 8px; font-size: 15px;"><strong>Test Name:</strong> ${sessionTitle} (Class ${grade} ${subject})</p>
                <p style="margin: 0 0 0; font-size: 15px;"><strong>Date & Time (IST):</strong> ${istDateTime}</p>
              </div>

              <h3 style="margin: 25px 0 10px; color: #0f172a; font-size: 18px;">🔑 Login Instructions</h3>
              <ul style="padding-left: 20px; margin: 0 0 20px; font-size: 15px; color: #475569;">
                <li style="margin-bottom: 8px;">Visit the Live Arena: <a href="https://olympiadquiz.org/live.html" style="color: #4f46e5; text-decoration: none; font-weight: bold;">olympiadquiz.org/live.html</a></li>
                <li style="margin-bottom: 8px;">Login using your registered email ID.</li>
                <li style="margin-bottom: 8px;">Click "Join Quiz" when the countdown timer ends.</li>
              </ul>

              <h3 style="margin: 25px 0 10px; color: #0f172a; font-size: 18px;">⚠️ Test Rules</h3>
              <ul style="padding-left: 20px; margin: 0 0 20px; font-size: 15px; color: #475569;">
                <li style="margin-bottom: 8px;">The test is strictly time-bound.</li>
                <li style="margin-bottom: 8px;">There is <strong>no negative marking</strong>.</li>
                <li style="margin-bottom: 8px;">Do <strong>NOT</strong> refresh the page during the test.</li>
                <li style="margin-bottom: 8px;">Ensure a stable internet connection before starting.</li>
              </ul>

              <h3 style="margin: 25px 0 10px; color: #0f172a; font-size: 18px;">🌟 Post-Test Features</h3>
              <ul style="padding-left: 20px; margin: 0 0 30px; font-size: 15px; color: #475569;">
                <li style="margin-bottom: 8px;">Instant results and performance analytics.</li>
                <li style="margin-bottom: 8px;">Detailed step-by-step solutions for every question.</li>
                <li style="margin-bottom: 8px;">Global leaderboard ranking.</li>
              </ul>

              <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="https://olympiadquiz.org/live.html" target="_blank" style="background-color: #10b981; color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block;">
                      Go to Live Arena
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                © 2024 Olympiad Portal. All rights reserved.<br>
                © 2024 OlympiadQuiz. All rights reserved.<br>
                Prepare well, and best of luck! 🚀
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      console.log(`Registration email successfully sent to: ${userEmail} for session: ${sessionId}`);

      // Mark as sent in the document to prevent duplicate emails from accidental retries
      await snapshot.ref.update({ ackEmailSent: true });

    } catch (error) {
      console.error(`Failed to send registration email to user ${uid} for session ${sessionId}. Error:`, error.message);
    }
  }
);

// =================================================================
// 8. FEEDBACK & ERROR REPORT ACKNOWLEDGEMENT EMAILS
// =================================================================

const ackEmailHtml = (name, title, message) => `<body style="background-color: #f5f7fb; margin: 0; padding: 0; font-family: Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden;">
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%); padding: 40px 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800;">${title}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 35px 30px; color: #0f172a; line-height: 1.6;">
              <p style="font-size: 16px; margin: 0 0 20px;">Hello <strong>${name}</strong>,</p>
              <p style="font-size: 16px; margin: 0 0 20px;">${message}</p>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <p style="margin: 0; font-size: 15px; color: #475569;">
                  In case of any more suggestions, issues, or if you need further help, please feel free to reach out to us directly at:<br><br>
                  <a href="mailto:admin@olympiadquiz.org" style="color: #4f46e5; font-weight: bold; text-decoration: none;">admin@olympiadquiz.org</a>
                </p>
              </div>
              <p style="font-size: 16px; color: #64748b; margin-top: 15px;">
                Best regards,<br>
                The Olympiad Portal Team
                The OlympiadQuiz Team
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                © 2024 Olympiad Portal. All rights reserved.
                © 2024 OlympiadQuiz. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`;

/**
 * Triggered when a new document is created in the 'feedbacks' collection (General Experience Feedback).
 */
exports.sendFeedbackAckEmail = onDocumentCreated(
  {
    document: "feedbacks/{docId}",
    secrets: ["BREVO_API_KEY"],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data || !data.email || data.email === "N/A") return;

    try {
      const brevoApi = getBrevoClient();
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: data.email, name: data.name || "Student" }];
      sendSmtpEmail.subject = "Thank you for your Feedback! 🌟";
      const msg = "Thank you for taking the time to share your experience and feedback with us. Your insights are incredibly valuable and help us continuously improve our platform for all students.";
      sendSmtpEmail.htmlContent = ackEmailHtml(data.name || "Student", "Thank You for Your Feedback! 🌟", msg);
      await brevoApi.sendTransacEmail(sendSmtpEmail);
    } catch (error) { console.error("Error sending feedback ack email:", error.message); }
  }
);

/**
 * Triggered when a new document is created in the 'feedback' collection (Question Error Reports).
 */
exports.sendErrorReportAckEmail = onDocumentCreated(
  {
    document: "feedback/{docId}",
    secrets: ["BREVO_API_KEY"],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data || !data.email || data.email === "N/A") return;

    try {
      const brevoApi = getBrevoClient();
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: data.email, name: data.name || "Student" }];
      sendSmtpEmail.subject = "Error Report Received 🛠️";
      const msg = "Thank you for reporting an issue regarding a question on our platform. Our academic team has received your report and will review it immediately to ensure accuracy.";
      sendSmtpEmail.htmlContent = ackEmailHtml(data.name || "Student", "Error Report Received 🛠️", msg);
      await brevoApi.sendTransacEmail(sendSmtpEmail);
    } catch (error) { console.error("Error sending error report ack email:", error.message); }
  }
);

// =================================================================
// 8. WHATSAPP CLOUD API INTEGRATION (NEW - ADDITIVE ONLY)
// =================================================================
// Everything below is new. It does not modify, remove, or re-declare
// any export above this line. It reuses `onCall`, `HttpsError`,
// `onDocumentCreated`, `onDocumentWritten`, `admin`, and `db` already
// imported/initialized earlier in this file. See functions/whatsapp/
// and functions/config.js for the implementation, and
// functions/whatsapp/README.md for full setup + deployment docs.

const { WHATSAPP_SECRETS, COLLECTIONS: WHATSAPP_COLLECTIONS } = require("./config");
const { whatsappWebhook } = require("./whatsapp/webhook");
const {
  whatsappReminder24h,
  whatsappReminder1h,
  whatsappWeeklyNewsletter,
  whatsappFestivalGreeting,
  whatsappBirthdayGreeting,
  whatsappScheduledBroadcastPoller,
} = require("./whatsapp/scheduler");
const whatsappService = require("./whatsapp/whatsappService");
const whatsappAdmin = require("./whatsapp/admin");
const liveTestData = require("./whatsapp/liveTestData");

// --- 8a. Webhook (GET verify + POST events) ---
exports.whatsappWebhook = whatsappWebhook;

// --- 8b. Scheduled jobs (24h/1h reminders, newsletter, festival & birthday greetings) ---
exports.whatsappReminder24h = whatsappReminder24h;
exports.whatsappReminder1h = whatsappReminder1h;
exports.whatsappWeeklyNewsletter = whatsappWeeklyNewsletter;
exports.whatsappFestivalGreeting = whatsappFestivalGreeting;
exports.whatsappBirthdayGreeting = whatsappBirthdayGreeting;
exports.whatsappScheduledBroadcastPoller = whatsappScheduledBroadcastPoller;

/**
 * Admin-only: send a one-off WhatsApp broadcast to a filtered slice of
 * the `users` collection. Mirrors the exact admin check already used by
 * sendBulkSMS / sendPushNotification above.
 */
exports.sendWhatsAppBroadcast = onCall({
  secrets: WHATSAPP_SECRETS,
  timeoutSeconds: 540,
  memory: "512MiB",
}, async (request) => {
  if (request.auth?.token?.email !== "madhhu52@gmail.com") {
    throw new HttpsError("permission-denied", "You must be an admin to perform this action.");
  }

  const {
    message,
    targetType,
    targetValue,
    useTemplate,
    templateName,
    campaignName,
    extraContacts,
    consentAttested,
    sessionId,
    activityDays,
    explicitPhones,
    couponCode,
  } = request.data;
  if (!targetType) {
    throw new HttpsError("invalid-argument", "targetType is required.");
  }
  if ((targetType === "Live Test Registered" || targetType === "Live Test Not Registered") && !sessionId && !(explicitPhones && explicitPhones.length)) {
    throw new HttpsError("invalid-argument", "sessionId is required for the Live Test Registered/Not Registered filters.");
  }
  if (Array.isArray(extraContacts) && extraContacts.length && !consentAttested) {
    throw new HttpsError(
      "invalid-argument",
      "consentAttested must be true to include CSV-uploaded contacts - confirm they opted in to WhatsApp messages first."
    );
  }

  try {
    return await whatsappService.sendBroadcast({
      message,
      targetType,
      targetValue,
      useTemplate,
      templateName,
      campaignName,
      extraContacts,
      consentAttested,
      sessionId,
      explicitPhones,
      activityDays,
      couponCode,
    });
  } catch (error) {
    console.error("WhatsApp Broadcast Error:", error);
    throw new HttpsError("internal", "Failed to send WhatsApp broadcast.");
  }
});

/**
 * Admin-only: sends oq_live_test_result_v1 to every participant of a
 * completed live test session - the manual counterpart to
 * notifyWhatsAppOnResult's automatic per-student trigger. Same admin
 * gate as sendWhatsAppBroadcast above.
 */
exports.sendLiveTestResultCampaign = onCall({
  secrets: WHATSAPP_SECRETS,
  timeoutSeconds: 540,
  memory: "512MiB",
}, async (request) => {
  if (request.auth?.token?.email !== "madhhu52@gmail.com") {
    throw new HttpsError("permission-denied", "You must be an admin to perform this action.");
  }

  const { sessionId } = request.data;
  if (!sessionId) {
    throw new HttpsError("invalid-argument", "sessionId is required.");
  }

  try {
    return await whatsappService.sendLiveTestResultCampaign({ sessionId });
  } catch (error) {
    console.error("Live Test Result Campaign Error:", error);
    throw new HttpsError("internal", "Failed to send live test result campaign.");
  }
});

/**
 * Admin-only, read-only: computed oq_live_test_result_v1 variables
 * (testName/className/score/total/rank/percentile) for ONE student in
 * ONE session - powers the Send Individual tab's auto-population for
 * this template, reusing the exact same ranking computation as the
 * automatic trigger and the bulk campaign (functions/whatsapp/liveTestData.js)
 * rather than duplicating it client-side.
 */
exports.getLiveTestResultPreview = onCall({}, async (request) => {
  if (request.auth?.token?.email !== "madhhu52@gmail.com") {
    throw new HttpsError("permission-denied", "You must be an admin to perform this action.");
  }

  const { sessionId, uid } = request.data;
  if (!sessionId || !uid) {
    throw new HttpsError("invalid-argument", "sessionId and uid are required.");
  }

  const [sessionPromo, rankings] = await Promise.all([
    liveTestData.getSessionPromoData(sessionId),
    liveTestData.computeLiveTestRankings(sessionId),
  ]);
  if (!sessionPromo) throw new HttpsError("not-found", "Session not found.");

  const ranking = rankings.get(uid);
  if (!ranking) throw new HttpsError("not-found", "This student has no result for that session yet.");

  return {
    testName: sessionPromo.testName,
    className: sessionPromo.className,
    score: ranking.score,
    total: ranking.total,
    rank: ranking.rank,
    percentile: ranking.percentile,
  };
});

/**
 * Generates and sends a WhatsApp OTP. Standalone utility, independent of
 * Firebase Phone Auth - does not touch the existing login/signup OTP flow.
 * Callable by any authenticated user (rate limiting is the caller's
 * responsibility if exposed to end users; tighten to admin-only if this
 * is only meant for internal/support use).
 */
exports.generateAndSendWhatsAppOtp = onCall({
  secrets: WHATSAPP_SECRETS,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in.");
  }
  const { phoneNumber } = request.data;
  if (!phoneNumber) {
    throw new HttpsError("invalid-argument", "phoneNumber is required.");
  }
  try {
    return await whatsappService.generateAndSendOtp(phoneNumber);
  } catch (error) {
    console.error("WhatsApp OTP send error:", error);
    throw new HttpsError("internal", "Failed to send WhatsApp OTP.");
  }
});

/** Verifies a code sent by generateAndSendWhatsAppOtp(). */
exports.verifyWhatsAppOtp = onCall({}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in.");
  }
  const { otpId, code } = request.data;
  if (!otpId || !code) {
    throw new HttpsError("invalid-argument", "otpId and code are required.");
  }
  try {
    return await whatsappService.verifyOtp(otpId, code);
  } catch (error) {
    console.error("WhatsApp OTP verify error:", error);
    throw new HttpsError("internal", "Failed to verify WhatsApp OTP.");
  }
});

/**
 * NEW Firestore trigger on the SAME document path already watched by
 * `sendLiveQuizRegistrationEmail` above (users/{uid}/purchases/{sessionId}).
 * Firestore supports multiple independent triggers on one document path,
 * so this runs alongside the existing email function without altering it.
 * Sends both a payment-success and a registration-success WhatsApp message.
 */
exports.notifyWhatsAppOnPurchase = onDocumentCreated(
  {
    document: "users/{uid}/purchases/{sessionId}",
    secrets: WHATSAPP_SECRETS,
  },
  async (event) => {
    const { uid, sessionId } = event.params;
    const purchase = event.data?.data();
    if (!purchase) return;

    const { enabled: registrationEnabled } = await whatsappAdmin.getAutomationSetting("live_test_registration");
    if (!registrationEnabled) return;

    try {
      const userSnap = await db.collection("users").doc(uid).get();
      if (!userSnap.exists) return;
      const user = userSnap.data();
      if (!user.phone) return;

      const sessionSnap = await db.collection("test_sessions").doc(sessionId).get();
      const session = sessionSnap.exists ? sessionSnap.data() : {};
      const sessionTitle = session.title || "LIVE Olympiad Test";
      const testDate = session.startTime
        ? session.startTime.toDate().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium" })
        : "To be announced";
      const testTime = session.startTime
        ? session.startTime.toDate().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", timeStyle: "short" })
        : "-";

      await whatsappService.sendLiveRegistrationWhatsApp(user.phone, {
        name: user.name || "Student",
        testName: sessionTitle,
        testDate,
        testTime,
      });
    } catch (error) {
      console.error(`notifyWhatsAppOnPurchase failed for user ${uid}, session ${sessionId}:`, error.message);
    }
  }
);

/**
 * NEW Firestore trigger on the SAME document path already watched by
 * `sendResultEmail` above (leaderboard/{resultId}). Sends the Phase 1
 * "Live Test Result Notification" WhatsApp message. Certificate-ready
 * notification is deferred to a future phase - see the comment below.
 */
exports.notifyWhatsAppOnResult = onDocumentWritten(
  {
    document: "leaderboard/{resultId}",
    secrets: WHATSAPP_SECRETS,
  },
  async (event) => {
    const afterData = event.data?.after.data();
    const beforeData = event.data?.before.data();
    if (!afterData) return;

    // Same "unchanged" guard as sendResultEmail, so a background write
    // doesn't trigger a duplicate WhatsApp notification.
    if (beforeData) {
      const scoreUnchanged = beforeData.score === afterData.score;
      const dateUnchanged = beforeData.date?.toMillis() === afterData.date?.toMillis();
      if (scoreUnchanged && dateUnchanged) return;
    }

    const { uid, score, total, sessionId, isChampionship } = afterData;
    if (typeof score === "undefined" || typeof total === "undefined" || !uid) return;

    // oq_live_test_result_v1 is explicitly live-test wording ("Live Test
    // result," "National Rank") - only send it for actual live-test
    // (championship) attempts, not mock/chapterwise/HOTS leaderboard
    // writes this same trigger also fires on today. Real rank/percentile
    // also only make sense against a session's championship participants.
    if (!isChampionship || !sessionId) return;

    try {
      const userSnap = await db.collection("users").doc(uid).get();
      if (!userSnap.exists) return;
      const user = userSnap.data();
      if (!user.phone) return;

      const { enabled: resultEnabled } = await whatsappAdmin.getAutomationSetting("live_test_result");
      if (resultEnabled) {
        const [sessionPromo, rankings] = await Promise.all([
          liveTestData.getSessionPromoData(sessionId),
          liveTestData.computeLiveTestRankings(sessionId),
        ]);
        const ranking = rankings.get(uid);

        await whatsappService.sendResultWhatsApp(user.phone, {
          name: user.name || "Student",
          testName: sessionPromo?.testName || "Live Olympiad Test",
          className: sessionPromo?.className || "-",
          score,
          total,
          rank: ranking?.rank ?? "-",
          percentile: ranking?.percentile ?? "-",
          uid,
          sessionId,
        });
      }

      // Certificate-ready WhatsApp notification is intentionally not
      // automated (only 3 automated notifications are approved for
      // production). Wire this back in via whatsappService.sendCertificate()
      // + a "certificate_notification" automation setting if/when approved.
    } catch (error) {
      console.error(`notifyWhatsAppOnResult failed for uid ${uid}:`, error.message);
    }
  }
);

/**
 * NEW Firestore trigger on the SAME document path already watched by
 * `triggerWelcomeEmail` above (users/{uid}). Sends the approved
 * oq_account_created_v1 WhatsApp template once registration is complete -
 * same `registrationCompleted` gate as the welcome email, so this fires at
 * the exact same moment (both triggered together off the same write),
 * well after Firebase Auth/OTP has already finished. Independent of
 * `triggerWelcomeEmail`: the welcome email keeps sending exactly as
 * before, this is purely an additional channel. If Firebase Auth account
 * creation had failed, no user document would exist to write this
 * trigger's `registrationCompleted: true` in the first place, so there is
 * nothing to gate separately for that case.
 */
exports.notifyWhatsAppOnAccountCreated = onDocumentWritten(
  {
    document: "users/{uid}",
    secrets: WHATSAPP_SECRETS,
  },
  async (event) => {
    const uid = event.params.uid;
    const afterData = event.data?.after.data();
    if (!afterData) return;

    const { phone, whatsappWelcomeSent, registrationCompleted } = afterData;
    if (whatsappWelcomeSent || !phone || registrationCompleted !== true) return;

    const { enabled } = await whatsappAdmin.getAutomationSetting("account_creation");
    if (!enabled) return;

    const userRef = event.data.after.ref;

    // The signup wizard writes this doc several times in quick succession
    // (NEW_USER -> AUTHENTICATED -> ACTIVE_USER, plus syncProviderState from
    // both login.html and signup.html), each of which can retrigger this
    // Firestore-write listener as a separate concurrent invocation. The
    // whatsappWelcomeSent check above is only safe against a SINGLE prior
    // invocation - it can't stop several of them racing each other and all
    // reading `false` before any of them commits `true`, which produced the
    // duplicate WhatsApp sends. A transaction closes that race: only one
    // concurrent invocation's read-then-write can win, so only one proceeds
    // to actually send. Same atomic-claim idiom as claimWebhookEvent() in
    // functions/whatsapp/messageLogger.js.
    const claimed = await db.runTransaction(async (tx) => {
      const snap = await tx.get(userRef);
      if (snap.data()?.whatsappWelcomeSent) return false;
      tx.update(userRef, { whatsappWelcomeSent: true });
      return true;
    });
    if (!claimed) return;

    try {
      // Same name-resolution fallback chain already used by sendResultEmail
      // above: prefer the Firestore profile, fall back to the Auth display
      // name, then a generic default.
      let studentName = afterData.name;
      if (!studentName) {
        try {
          const userRecord = await admin.auth().getUser(uid);
          studentName = userRecord.displayName;
        } catch (lookupError) {
          console.warn(`notifyWhatsAppOnAccountCreated: could not resolve Auth displayName for uid ${uid}:`, lookupError.message);
        }
      }
      studentName = studentName || "Student";

      const result = await whatsappService.sendAccountCreatedWhatsApp(phone, { name: studentName, uid });
      if (!result.success) {
        // Fallback: template not found/disabled/rejected/unavailable, or any
        // other Meta error. Already logged with the full Meta response by
        // sendAndLog. Release the claim so a later write to this doc (or a
        // manual retry) can try again instead of being permanently skipped.
        console.warn(`notifyWhatsAppOnAccountCreated: WhatsApp send skipped for uid ${uid}:`, result.error);
        await userRef.update({ whatsappWelcomeSent: false }).catch(() => {});
        return;
      }
      // whatsappWelcomeSent was already set true by the transaction above.
    } catch (error) {
      // Never let a WhatsApp failure affect signup/email - already logged above.
      console.error(`notifyWhatsAppOnAccountCreated failed for uid ${uid}:`, error.message);
      await userRef.update({ whatsappWelcomeSent: false }).catch(() => {});
    }
  }
);

// --- 8f. Admin console additions (NEW) - WhatsApp Manager panel backend ---
// See functions/whatsapp/admin.js. Every callable there uses the same
// admin-email gate as sendBulkEmail/sendBulkSMS/sendPushNotification/
// sendWhatsAppBroadcast above.
exports.lookupWhatsAppUser = whatsappAdmin.lookupWhatsAppUser;
exports.sendWhatsApp = whatsappAdmin.sendWhatsApp;
exports.scheduleBroadcast = whatsappAdmin.scheduleBroadcast;
exports.pauseScheduledBroadcast = whatsappAdmin.pauseScheduledBroadcast;
exports.resumeScheduledBroadcast = whatsappAdmin.resumeScheduledBroadcast;
exports.cancelScheduledBroadcast = whatsappAdmin.cancelScheduledBroadcast;
exports.syncTemplates = whatsappAdmin.syncTemplates;
exports.getTemplateList = whatsappAdmin.getTemplateList;
exports.getWhatsAppStats = whatsappAdmin.getWhatsAppStats;
exports.getAutomatedMessageStats = whatsappAdmin.getAutomatedMessageStats;
exports.retryFailedMessage = whatsappAdmin.retryFailedMessage;
exports.getWhatsAppSettingsInfo = whatsappAdmin.getWhatsAppSettingsInfo;
exports.getAutomationSettings = whatsappAdmin.getAutomationSettings;
exports.saveAutomationSetting = whatsappAdmin.saveAutomationSetting;
exports.getScheduledBroadcasts = whatsappAdmin.getScheduledBroadcasts;
exports.getWhatsAppLogs = whatsappAdmin.getWhatsAppLogs;
exports.getCampaignHistory = whatsappAdmin.getCampaignHistory;
exports.getCampaignDetail = whatsappAdmin.getCampaignDetail;

// =================================================================
// 9. PHONE VERIFICATION REMINDER EMAIL (NEW - ADDITIVE ONLY)
// =================================================================
// See functions/emailReminders.js. Nudges Google signups who never
// verified a mobile number to come back and finish registration.
exports.phoneVerificationReminderEmail = require("./emailReminders").phoneVerificationReminderEmail;
