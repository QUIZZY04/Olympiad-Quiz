const {onUserCreate} = require("firebase-functions/v2/auth");
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const logger = require("firebase-functions/logger");

// Initialize the Firebase Admin SDK.
initializeApp();

/**
 * Creates a user document in Firestore when a new user signs up.
 * This ensures every authenticated user has a corresponding database record.
 */
exports.createuser = onUserCreate(async (user) => {
  const {uid, email, displayName} = user;

  try {
    const db = getFirestore();
    const userDocRef = db.collection("users").doc(uid);

    await userDocRef.set({
      uid: uid,
      email: email,
      name: displayName || (email ? email.split("@")[0] : "New User"),
      createdAt: new Date(),
      // The 'class' and 'phone' fields are expected to be added
      // by the client-side logic after signup or phone linking.
    });

    logger.info(`User document created for UID: ${uid}`);
  } catch (error) {
    logger.error(`Error creating user document for UID: ${uid}`, error);
  }
});