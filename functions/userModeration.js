/**
 * =====================================================================
 * USER MODERATION - DISABLE / ENABLE A USER ACCOUNT
 * =====================================================================
 * Single admin-only callable that flips a user's Firebase Auth `disabled`
 * flag (blocks sign-in and invalidates their session on next token
 * refresh) and mirrors the status onto their Firestore users/{uid} doc so
 * the admin panel can show it without a separate Auth lookup. Surfaced
 * from the Error Reports and Experience Feedback admin panels, where a
 * misbehaving user's uid is already on screen.
 * =====================================================================
 */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { admin, db, ADMIN_EMAIL } = require("./config");

exports.setUserDisabledStatus = onCall(async (request) => {
  if (!request.auth || request.auth.token.email !== ADMIN_EMAIL) {
    throw new HttpsError("permission-denied", "Admin only.");
  }

  const { uid, disabled } = request.data || {};
  if (!uid || typeof uid !== "string") {
    throw new HttpsError("invalid-argument", "uid is required.");
  }
  if (typeof disabled !== "boolean") {
    throw new HttpsError("invalid-argument", "disabled (boolean) is required.");
  }
  if (uid === request.auth.uid) {
    throw new HttpsError("failed-precondition", "You cannot disable your own admin account.");
  }

  try {
    await admin.auth().updateUser(uid, { disabled });
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      throw new HttpsError("not-found", "No Firebase Auth account found for this user.");
    }
    throw new HttpsError("internal", `Failed to update Auth account: ${err.message}`);
  }

  await db.collection("users").doc(uid).set({
    disabled,
    disabledAt: disabled ? admin.firestore.FieldValue.serverTimestamp() : admin.firestore.FieldValue.delete(),
    disabledBy: disabled ? request.auth.token.email : admin.firestore.FieldValue.delete(),
  }, { merge: true });

  return { success: true, uid, disabled };
});
