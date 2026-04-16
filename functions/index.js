const functions = require("firebase-functions");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const logger = require("firebase-functions/logger");
const SibApiV3Sdk = require("sib-api-v3-sdk");

initializeApp();
const db = getFirestore();

// Brevo Client
function getBrevoClient() {
const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;
return new SibApiV3Sdk.TransactionalEmailsApi();
}

// Verified Sender
const SENDER = {
email: "[admin@olympiadquiz.org](mailto:admin@olympiadquiz.org)",
name: "Olympiad Portal",
};

// ==========================
// USER CREATE + WELCOME EMAIL
// ==========================
exports.createuser = functions.auth.user().onCreate(async (user) => {
const uid = user.uid;
const email = user.email;
const displayName = user.displayName;
const phoneNumber = user.phoneNumber;

try {
await db.collection("users").doc(uid).set({
uid: uid,
email: email || null,
phone: phoneNumber || null,
name: displayName || (email ? email.split("@")[0] : "New User"),
createdAt: new Date(),
});

```
logger.info("User created: " + uid);

if (email) {
  const brevoApi = getBrevoClient();

  await brevoApi.sendTransacEmail({
    sender: SENDER,
    to: [{ email: email }],
    subject: "Welcome to Olympiad Portal!",
    htmlContent: "<h2>Welcome!</h2><p>Your account has been created successfully.</p>"
  });

  logger.info("Welcome email sent to " + email);
}
```

} catch (error) {
logger.error("Error in createuser", error);
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
otp: otp,
expiresAt: new Date(Date.now() + 10 * 60 * 1000),
});

```
const brevoApi = getBrevoClient();

await brevoApi.sendTransacEmail({
  sender: SENDER,
  to: [{ email: email }],
  subject: "Your OTP Code",
  htmlContent: "<h2>Your OTP is: " + otp + "</h2>"
});

return { success: true };
```

} catch (error) {
logger.error(error);
throw new HttpsError("internal", "OTP failed");
}
});

// ==========================
// VERIFY OTP
// ==========================
exports.verifyOtp = onCall(async (request) => {
const email = request.data.email;
const otp = request.data.otp;

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

const subject = request.data.subject;
const htmlContent = request.data.htmlContent;

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
  subject: subject,
  htmlContent: htmlContent,
  bcc: batch.map(e => ({ email: e })),
});

await new Promise(resolve => setTimeout(resolve, 500));
```

}

return { success: true };
});

// ==========================
// RESULT EMAIL
// ==========================
exports.sendTestResultEmail = onCall({ secrets: ["BREVO_API_KEY"] }, async (request) => {
const email = request.data.email;
const score = request.data.score;
const total = request.data.total;

const percentage = Math.round((score / total) * 100);

const brevoApi = getBrevoClient();

await brevoApi.sendTransacEmail({
sender: SENDER,
to: [{ email: email }],
subject: "Your Test Result",
htmlContent:
"<h2>Your Score: " + score + "/" + total + "</h2>" +
"<p>Accuracy: " + percentage + "%</p>"
});

return { success: true };
});
