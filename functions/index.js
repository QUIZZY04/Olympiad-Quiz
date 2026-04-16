const {onUserCreate} = require("firebase-functions/v2/auth");
const {onCall, HttpsError} = require("firebase-functions/v2/https");
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const logger = require("firebase-functions/logger");
const SibApiV3Sdk = require("sib-api-v3-sdk");

// Initialize the Firebase Admin SDK.
initializeApp();
const db = getFirestore();

/**
 * Securely initializes and returns the Brevo API client.
 * It uses the BREVO_API_KEY stored in Firebase Secrets.
 * @returns {SibApiV3Sdk.TransactionalEmailsApi}
 */
function getBrevoClient() {
  const client = SibApiV3Sdk.ApiClient.instance;
  const apiKey = client.authentications["api-key"];
  apiKey.apiKey = process.env.BREVO_API_KEY;
  return new SibApiV3Sdk.TransactionalEmailsApi();
}

// Define a consistent sender for all emails.
// IMPORTANT: Replace with an email address you have verified in your Brevo account.
const SENDER = {
  email: "your-verified-brevo-sender@example.com",
  name: "Olympiad Portal",
};

/**
 * 1. Creates a user document in Firestore AND sends a Welcome Email
 */
exports.createuser = onUserCreate({secrets: ["BREVO_API_KEY"]}, async (user) => {
  const {uid, email, displayName, phoneNumber} = user;

  try {
    const userDocRef = db.collection("users").doc(uid);

    await userDocRef.set({
      uid: uid,
      email: email || null,
      phone: phoneNumber || null,
      name: displayName || (email ? email.split("@")[0] : "New User"),
      createdAt: new Date(),
    });

    logger.info(`User document created for UID: ${uid}`);

    // Send Welcome Email if the user signed up with an email address
    if (email) {
      const mailOptions = {
        sender: SENDER,
        to: [{email, name: displayName || "Student"}],
        subject: "Welcome to Olympiad Portal! 🎓",
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #4f46e5;">Welcome to Olympiad Portal!</h2>
            <p>Hi ${displayName || 'Student'},</p>
            <p>Your account has been successfully created. We are thrilled to have you join our community of learners!</p>
            <p>Start your preparation by taking our free mock tests or chapterwise quizzes. Track your progress live on your dashboard.</p>
            <br>
            <p>Best Regards,</p>
            <p><strong>The Olympiad Portal Team</strong></p>
          </div>
        `
      };
      
      try {
        const brevoApi = getBrevoClient();
        await brevoApi.sendTransacEmail(mailOptions);
        logger.info(`Welcome email sent to ${email}`);
      } catch (emailError) {
        logger.error(`Failed to send welcome email to ${email}`, emailError);
      }
    }
  } catch (error) {
    logger.error(`Error in createuser function for UID: ${uid}`, error);
  }
});

/**
 * 2. OTP Verification Functions (Generate & Verify)
 */
exports.generateOtp = onCall({secrets: ["BREVO_API_KEY"]}, async (request) => {
  const { email, phone } = request.data;
  if (!email && !phone) {
    throw new HttpsError("invalid-argument", "Email or phone number is required.");
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  const identifier = email || phone;

  try {
    // Save OTP to Firestore with a 10-minute expiration
    await db.collection("otps").doc(identifier).set({
      otp: otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000)
    });

    // Send OTP via Email
    if (email) {
      const brevoApi = getBrevoClient();
      await brevoApi.sendTransacEmail({
        sender: {...SENDER, name: "Olympiad Portal Support"},
        to: [{email}],
        subject: "Your Account Verification OTP",
        htmlContent: `<p>Your verification code is: <strong style="font-size: 24px; color: #4f46e5;">${otp}</strong></p><p>This code will expire in 10 minutes.</p>`,
      });
    }
    
    // NOTE: If using an SMS Gateway (Fast2SMS, Twilio) for Phone OTPs, hook it up here using the 'phone' variable.

    return { success: true, message: "OTP generated and sent successfully." };
  } catch (error) {
    logger.error("Error generating OTP", error);
    throw new HttpsError("internal", "Failed to send OTP.");
  }
});

exports.verifyOtp = onCall(async (request) => {
  const { identifier, otp } = request.data;
  if (!identifier || !otp) {
    throw new HttpsError("invalid-argument", "Identifier and OTP are required.");
  }

  try {
    const otpDoc = await db.collection("otps").doc(identifier).get();
    if (!otpDoc.exists) {
      return { success: false, message: "No OTP found or OTP has already expired." };
    }

    const data = otpDoc.data();
    if (data.expiresAt.toDate() < new Date()) {
      await db.collection("otps").doc(identifier).delete();
      return { success: false, message: "OTP has expired." };
    }

    if (data.otp === otp) {
      await db.collection("otps").doc(identifier).delete(); // Cleanup after successful verification
      return { success: true, message: "OTP verified successfully." };
    } else {
      return { success: false, message: "Invalid OTP provided." };
    }
  } catch (error) {
    logger.error("Error verifying OTP", error);
    throw new HttpsError("internal", "An error occurred while verifying the OTP.");
  }
});

/**
 * 3. Bulk Email Sending System (Admin Only)
 */
exports.sendBulkEmails = onCall({secrets: ["BREVO_API_KEY"]}, async (request) => {
  // Security Check: Ensure caller is authenticated
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in to send bulk emails.");
  }
  
  // Security Check: Match the admin email used across your platform
  if (request.auth.token.email !== "madhhu52@gmail.com") {
    throw new HttpsError("permission-denied", "Only administrators can send bulk emails.");
  }

  const { subject, htmlContent, senderEmail } = request.data;
  if (!subject || !htmlContent) {
    throw new HttpsError("invalid-argument", "Subject and HTML content are required.");
  }

  try {
    const brevoApi = getBrevoClient();
    const usersSnap = await db.collection("users").get();
    const emails = [];

    usersSnap.forEach(doc => {
      const user = doc.data();
      if (user.email) {
        emails.push(user.email);
      }
    });

    if (emails.length === 0) {
      return { success: true, message: "No users with emails found." };
    }

    // Batch emails to stay within API limits (e.g., 900 per call)
    const batchSize = 900;
    const emailBatches = [];
    for (let i = 0; i < emails.length; i += batchSize) {
      emailBatches.push(emails.slice(i, i + batchSize));
    }

    const sendPromises = emailBatches.map((batch) => {
      const bcc = batch.map((email) => ({email}));
      return brevoApi.sendTransacEmail({
        sender: { ...SENDER, email: senderEmail || SENDER.email },
        subject,
        htmlContent,
        bcc,
      });
    });

    const results = await Promise.allSettled(sendPromises);

    let successCount = 0;
    let failCount = 0;
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        successCount += emailBatches[index].length;
      } else {
        failCount += emailBatches[index].length;
        logger.error(`Bulk email batch ${index + 1} failed`, result.reason);
      }
    });

    const message = `Bulk email process finished. Sent: ${successCount}, Failed: ${failCount}.`;
    logger.info(message);
    return { success: failCount === 0, message, successCount, failCount };
  } catch (error) {
    logger.error("Error sending bulk emails", error);
    throw new HttpsError("internal", "Failed to send bulk emails.");
  }
});

/**
 * 4. Test Result Email System
 * Sends a formatted email to the user with their score after submitting a test.
 */
exports.sendTestResultEmail = onCall({secrets: ["BREVO_API_KEY"]}, async (request) => {
  const { email, name, subject, score, total, grade } = request.data;
  
  if (!email) {
    throw new HttpsError("invalid-argument", "Email is required to send the result.");
  }

  try {
    const percentage = Math.round((score / total) * 100);
    const brevoApi = getBrevoClient();
    const mailOptions = {
      sender: SENDER,
      to: [{email, name: name || "Student"}],
      subject: `Your ${subject.toUpperCase()} Olympiad Mock Test Result 📊`,
      htmlContent: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #4f46e5;">Test Submitted Successfully!</h2>
          <p>Hi ${name || 'Student'},</p>
          <p>Great job completing your <strong>${grade} ${subject.toUpperCase()}</strong> test.</p>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="margin: 0 0 10px 0; color: #0f172a;">Your Score: <span style="color: #10b981;">${score} / ${total}</span></h3>
            <p style="margin: 0; color: #64748b;">Accuracy: ${percentage}%</p>
          </div>
          <p>Review your detailed analytics on your dashboard and keep practicing to improve your global rank!</p>
          <br>
          <p>Best Regards,</p>
          <p><strong>The Olympiad Portal Team</strong></p>
        </div>
      `
    };

    await brevoApi.sendTransacEmail(mailOptions);
    logger.info(`Test result email sent successfully to ${email}`);
    
    return { success: true, message: "Result email sent successfully." };
  } catch (error) {
    logger.error("Error sending test result email", error);
    throw new HttpsError("internal", "Failed to send result email.");
  }
});