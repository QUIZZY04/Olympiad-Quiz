/**
 * =====================================================================
 * PERFORMANCE INSIGHTS (analytics.html strengths/weaknesses)
 * =====================================================================
 * Computes subject-level strengths/weaknesses server-side so the real
 * breakdown never reaches a free user's browser. The `leaderboard`
 * collection's Firestore rule is `allow read: if true` (public, by
 * design elsewhere in this project) - reading it from the client, even
 * filtered to "my own uid", means any blur/hide done purely in the UI
 * is cosmetic, not a real lock. Reading it here instead, with the
 * Admin SDK, means a free caller's response never contains anything
 * beyond aggregate counts.
 *
 * Mirrors the exact subject-average and >=60%/<60% strength/weakness
 * thresholds analytics.html already used client-side (now dead code
 * there, since liveTopics was never populated) - same logic, same
 * cutoffs, just computed here and gated by plan before returning.
 * =====================================================================
 */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { db, ADMIN_EMAIL } = require("./config");

exports.getPerformanceInsights = onCall({}, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in.");
  }

  const uid = request.auth.uid;
  const callerEmail = (request.auth.token?.email || "").trim().toLowerCase();
  const isAdmin = callerEmail === ADMIN_EMAIL;

  let isPremium = isAdmin;
  if (!isAdmin) {
    const userSnap = await db.collection("users").doc(uid).get();
    const u = userSnap.exists ? userSnap.data() : {};
    const expiresMs = u.premiumExpiresAt?.toMillis ? u.premiumExpiresAt.toMillis() : 0;
    isPremium = u.isPremium === true && (!expiresMs || expiresMs > Date.now());
  }

  const resultsSnap = await db.collection("leaderboard").where("uid", "==", uid).get();

  const subjectData = { maths: 0, science: 0, english: 0, reasoning: 0 };
  const subjectCounts = { maths: 0, science: 0, english: 0, reasoning: 0 };

  resultsSnap.forEach((doc) => {
    const data = doc.data();
    const percentage = parseFloat(data.accuracy) || ((data.score / (data.total || 30)) * 100) || 0;
    const sub = data.subject || "maths";
    if (subjectData[sub] !== undefined) {
      subjectData[sub] += percentage;
      subjectCounts[sub]++;
    }
  });

  const subjectAverages = Object.keys(subjectData)
    .filter((s) => subjectCounts[s] > 0)
    .map((s) => ({ name: s, avg: subjectData[s] / subjectCounts[s] }));
  subjectAverages.sort((a, b) => b.avg - a.avg);

  const strengths = subjectAverages.filter((t) => t.avg >= 60).slice(0, 3);
  const weaknesses = subjectAverages
    .filter((t) => t.avg < 60)
    .reverse()
    .slice(0, 3);

  if (isPremium) {
    return {
      isPremium: true,
      strengths: strengths.map((t) => ({ name: t.name, avg: t.avg })),
      weaknesses: weaknesses.map((t) => ({ name: t.name, avg: t.avg })),
    };
  }

  // Free/expired caller: counts only, no subject names or percentages.
  return {
    isPremium: false,
    strengthCount: strengths.length,
    weaknessCount: weaknesses.length,
  };
});
