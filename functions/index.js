const functions = require("firebase-functions");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const logger = require("firebase-functions/logger");
const SibApiV3Sdk = require("sib-api-v3-sdk");

initializeApp();
const db = getFirestore();

// ==========================
// BREVO CLIENT
// ==========================
function getBrevoClient() {
const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;
return new SibApiV3Sdk.TransactionalEmailsApi();
}

// ==========================
// SENDER
// ==========================
const SENDER = {
email: "[admin@olympiadquiz.org](mailto:admin@olympiadquiz.org)",
name: "Olympiad Portal",
};

// ==========================
// USER CREATE + WELCOME EMAIL
// ==========================
exports.createuser = functions.auth.user().onCreate(async (user) => {
const { uid, email, displayName, phoneNumber } = user;

try {
await db.collection("users").doc(uid).set({
uid,
email: email || null,
phone: phoneNumber || null,
name: displayName || (email ? email.split("@")[0] : "New User"),
createdAt: new Date(),
});

```
logger.info("User created:", uid);

if (email) {
  const brevoApi = getBrevoClient();

  await brevoApi.sendTransacEmail({
    sender: SENDER,
    to: [{ email }],
    subject: "Welcome to Olympiad Portal!",
    htmlContent: "<h2>Welcome!</h2><p>Your account has been created successfully.</p>",
  });

  logger.info("Welcome email sent:", email);
}
```

} catch (error) {
logger.error("createuser error:", error);
}
});

// ==========================
// OTP SYSTEM
// ==========================
exports.generateOtp = onCall({ secrets: ["BREVO_API_KEY"] }, async (request) => {
const email = request.data.email;

if (!email) {
throw new HttpsError("invalid-argument", "Email required");
}

const otp = Math.floor(100000 + Math.random() * 900000).toString();

try {
await db.collection("otps").doc(email).set({
otp,
expiresAt: new Date(Date.now() + 10 * 60 * 1000),
});

```
const brevoApi = getBrevoClient();

await brevoApi.sendTransacEmail({
  sender: SENDER,
  to: [{ email }],
  subject: "Your OTP Code",
  htmlContent: "<h2>Your OTP is: " + otp + "</h2>",
});

logger.info("OTP sent:", email);

return { success: true };
```

} catch (error) {
logger.error("OTP error:", error);
throw new HttpsError("internal", "OTP failed");
}
});

// ==========================
// VERIFY OTP
// ==========================
exports.verifyOtp = onCall(async (request) => {
const { email, otp } = request.data;

const doc = await db.collection("otps").doc(email).get();

if (!doc.exists) return { success: false };

const data = doc.data();

if (data.otp === otp) {
await db.collection("otps").doc(email).delete();
return { success: true };
}

return { success: false };
});

// ==========================
// BULK EMAIL
// ==========================
exports.sendBulkEmails = onCall({ secrets: ["BREVO_API_KEY"] }, async (request) => {
if (!request.auth) throw new HttpsError("unauthenticated");

if (request.auth.token.email !== "[madhhu52@gmail.com](mailto:madhhu52@gmail.com)") {
throw new HttpsError("permission-denied");
}

const { subject, htmlContent } = request.data;

const users = await db.collection("users").get();
const emails = [];

users.forEach(doc => {
const user = doc.data();
if (user.email) emails.push(user.email);
});

const brevoApi = getBrevoClient();
const batchSize = 500;

for (let i = 0; i < emails.length; i += batchSize) {
const batch = emails.slice(i, i + batchSize);

```
await brevoApi.sendTransacEmail({
  sender: SENDER,
  subject,
  htmlContent,
  bcc: batch.map(e => ({ email: e })),
});

await new Promise(resolve => setTimeout(resolve, 500));
```

}

logger.info("Bulk email sent");

return { success: true };
});

// ==========================
// RESULT EMAIL (FIXED + DEBUG)
// ==========================
exports.sendTestResultEmail = onCall({ secrets: ["BREVO_API_KEY"] }, async (request) => {
const { email, score, total } = request.data;

logger.info("Result email triggered", { email, score, total });

// 🔴 STRICT VALIDATION
if (!email || isNaN(score) || isNaN(total) || Number(total) === 0) {
logger.error("Invalid result email data", request.data);
throw new HttpsError("invalid-argument", "Invalid data");
}

const scoreNum = Number(score);
const totalNum = Number(total);
const percentage = Math.round((scoreNum / totalNum) * 100);

try {
const brevoApi = getBrevoClient();

```
await brevoApi.sendTransacEmail({
  sender: SENDER,
  to: [{ email }],
  subject: "Your Olympiad Quiz Result",
  htmlContent:
    "<h2>Your Score: " + scoreNum + "/" + totalNum + "</h2>" +
    "<p>Accuracy: " + percentage + "%</p>",
});

logger.info("Result email sent:", email);

return { success: true };
```

} catch (error) {
logger.error("Result email error:", error);
throw new HttpsError("internal", "Email failed");
}
});
