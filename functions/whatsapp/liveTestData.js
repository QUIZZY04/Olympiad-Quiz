/**
 * =====================================================================
 * LIVE TEST DATA HELPERS
 * =====================================================================
 * Shared read-only helpers for the two live-test WhatsApp templates
 * (oq_live_test_promotion_v1, oq_live_test_result_v1), used by both the
 * automatic result trigger (functions/index.js) and the manual admin
 * campaigns (functions/whatsapp/admin.js) so this logic exists in
 * exactly one place.
 *
 * Nothing here writes anything - purely reads test_sessions/leaderboard
 * and shapes the values these templates' variables need.
 * =====================================================================
 */

const { db } = require("../config");

/**
 * Reads a test_sessions doc and shapes it into the 7 session-driven
 * variables oq_live_test_promotion_v1 needs ({{2}} through {{8}} - {{1}}
 * is always the recipient's own name, resolved by the caller).
 *
 * IMPORTANT: testPrice/discountedPrice are read straight off the session
 * document, never hardcoded. Coupon code is deliberately NOT read here -
 * this app already has a separate, global Coupon Management system (the
 * `coupons` collection, admin.html's "Coupon Management" panel) that
 * isn't tied to any one session; the admin picks which existing coupon
 * to advertise at campaign-send time instead (see sendBroadcast's
 * `couponCode` param), rather than this reading a session-level field
 * that doesn't exist in that system.
 *
 * @param {string} sessionId
 * @returns {Promise<{testName: string, className: string, testDate: string, testTime: string, testPrice: number|string, discountedPrice: number|string}|null>}
 */
async function getSessionPromoData(sessionId) {
  const snap = await db.collection("test_sessions").doc(sessionId).get();
  if (!snap.exists) return null;
  const s = snap.data();

  const testDate = s.startTime?.toDate
    ? s.startTime.toDate().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium" })
    : "To be announced";
  const testTime = s.startTime?.toDate
    ? s.startTime.toDate().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", timeStyle: "short" })
    : "-";

  return {
    testName: s.title || "Live Olympiad Test",
    className: s.class !== undefined && s.class !== null ? String(s.class) : "-",
    testDate,
    testTime,
    testPrice: s.price !== undefined && s.price !== null ? s.price : 0,
    discountedPrice: s.priceAfterCoupon !== undefined && s.priceAfterCoupon !== null ? s.priceAfterCoupon : (s.price ?? 0),
  };
}

/**
 * Computes REAL rank + percentile for every participant of a live test
 * session, from the `leaderboard` collection. Nothing in this codebase
 * persists rank/percentile anywhere today (the number shown on
 * result.html is a hash, not a real calculation) - this is a fresh,
 * on-demand computation used only for the WhatsApp result template.
 *
 * Ranking: score descending; ties broken by earlier submission (`date`)
 * ranking higher. Percentile: (1 - (rank-1)/total) * 100, one decimal -
 * i.e. "you scored better than X% of participants."
 *
 * @param {string} sessionId
 * @returns {Promise<Map<string, {rank: number, percentile: number, totalParticipants: number, score: number, total: number}>>} keyed by uid
 */
async function computeLiveTestRankings(sessionId) {
  const snap = await db
    .collection("leaderboard")
    .where("sessionId", "==", sessionId)
    .where("isChampionship", "==", true)
    .get();

  const entries = snap.docs.map((d) => {
    const data = d.data();
    return {
      uid: data.uid,
      score: Number(data.score) || 0,
      total: Number(data.total) || 0,
      dateMs: data.date?.toMillis ? data.date.toMillis() : 0,
    };
  });

  entries.sort((a, b) => (b.score !== a.score ? b.score - a.score : a.dateMs - b.dateMs));

  const totalParticipants = entries.length;
  const rankings = new Map();
  entries.forEach((entry, index) => {
    const rank = index + 1;
    const percentile = totalParticipants > 1
      ? Math.round((1 - (rank - 1) / totalParticipants) * 1000) / 10
      : 100;
    rankings.set(entry.uid, { rank, percentile, totalParticipants, score: entry.score, total: entry.total });
  });

  return rankings;
}

module.exports = { getSessionPromoData, computeLiveTestRankings };
