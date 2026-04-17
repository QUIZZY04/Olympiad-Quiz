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

const SENDER_INFO = {
  email: "admin@olympiadquiz.org",
  name: "Olympiad Portal",
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

    const { email, name, welcomeEmailSent } = afterData;

    // Exit if email already sent or no email exists
    if (welcomeEmailSent || !email) {
      return;
    }

    console.log(`Welcome trigger fired for: ${email}`);

    try {
      const brevoApi = getBrevoClient();
      const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

      sendSmtpEmail.sender = SENDER_INFO;
      sendSmtpEmail.to = [{ email: email, name: name || "Student" }];
      sendSmtpEmail.subject = "Welcome to Olympiad Portal! 🎓";
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

  const { subject, htmlContent } = request.data;

  // 2. Input Validation
  if (!subject || !htmlContent) {
    throw new HttpsError("invalid-argument", "The function must be called with 'subject' and 'htmlContent' arguments.");
  }

  console.log("Starting bulk email process...");

  try {
    // 3. Fetch and clean email list using pagination to avoid memory overflow
    const uniqueEmails = new Set();
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
        const email = doc.data().email;
        if (email && typeof email === "string" && email.includes("@")) {
          uniqueEmails.add(email.trim());
        }
      });

      lastDoc = snapshot.docs[snapshot.docs.length - 1];
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
      const bccList = batch.map((email) => ({ email }));

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
      sendSmtpEmail.htmlContent = `<body style="background-color: #f5f7fb; margin: 0; padding: 0; font-family: Arial, sans-serif;">
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
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                © 2024 Olympiad Portal. All rights reserved.<br>
                You are receiving this email because you completed a test on our platform.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>`;

      await brevoApi.sendTransacEmail(sendSmtpEmail);
      console.log(`Result email successfully sent to: ${userEmail} for result ID: ${resultId}`);
    } catch (error) {
      console.error(`Failed to send result email to ${userEmail}. Error:`, error.message);
    }
  }
);

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
        amount: amount * 100, // Convert to paise
        currency: "INR",
        receipt: `rcpt_${request.auth.uid.substring(0,5)}_${sessionId.substring(0,5)}`,
        payment_capture: 1 // Forces Razorpay to Auto-Capture the payment immediately
      })
    });

    const order = await response.json();
    if (order.error) {
      throw new Error(order.error.description);
    }

    return {
      id: order.id,
      amount: order.amount,
      currency: order.currency
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

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, sessionId, amount } = request.data;

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
