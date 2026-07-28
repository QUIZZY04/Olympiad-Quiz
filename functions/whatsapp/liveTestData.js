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
 * Reads one or more test_sessions docs and shapes them into the 7
 * session-driven variables oq_live_test_promotion_v1 needs ({{2}}
 * through {{8}} - {{1}} is always the recipient's own name, resolved by
 * the caller).
 *
 * Accepts EITHER a single session id OR a comma-separated list of them -
 * the admin panel lets the admin freely tick any combination of upcoming
 * sessions (e.g. an IMO Maths session plus an IRO Reasoning session on the
 * same day). testDate/testTime/testPrice/discountedPrice are taken from
 * the first session in the group (date/time/coupon are meant to be shared
 * across whatever's picked); className becomes a range ("1 to 10") when
 * the group spans more than one class, or the single class number when
 * there's just one session. testName lists every DISTINCT title in the
 * group as "Title (Subject)" (e.g. "IMO (Maths), IRO (Reasoning)") - if
 * every selected session shares the same title (the common case of one
 * test split into a same-day session per class), testName stays a plain
 * single title with no subject suffix.
 *
 * IMPORTANT: testPrice/discountedPrice are read straight off the session
 * document(s), never hardcoded. Coupon code is deliberately NOT read here -
 * this app already has a separate, global Coupon Management system (the
 * `coupons` collection, admin.html's "Coupon Management" panel) that
 * isn't tied to any one session; the admin picks which existing coupon
 * to advertise at campaign-send time instead (see sendBroadcast's
 * `couponCode` param), rather than this reading a session-level field
 * that doesn't exist in that system.
 *
 * @param {string} sessionId - single id, or comma-separated ids for a group.
 * @returns {Promise<{testName: string, className: string, testDate: string, testTime: string, testPrice: number|string, discountedPrice: number|string}|null>}
 */
async function getSessionPromoData(sessionId) {
  const ids = String(sessionId).split(",").map((id) => id.trim()).filter(Boolean);
  if (ids.length === 0) return null;

  const snaps = await Promise.all(ids.map((id) => db.collection("test_sessions").doc(id).get()));
  const sessions = snaps.filter((snap) => snap.exists).map((snap) => snap.data());
  if (sessions.length === 0) return null;

  const first = sessions[0];
  const testDate = first.startTime?.toDate
    ? first.startTime.toDate().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium" })
    : "To be announced";
  const testTime = first.startTime?.toDate
    ? first.startTime.toDate().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", timeStyle: "short" })
    : "-";

  const classNumbers = sessions.map((s) => s.class).filter((c) => c !== undefined && c !== null);
  let className = "-";
  if (classNumbers.length === 1) {
    className = String(classNumbers[0]);
  } else if (classNumbers.length > 1) {
    const min = Math.min(...classNumbers);
    const max = Math.max(...classNumbers);
    className = min === max ? String(min) : `${min} to ${max}`;
  }

  const distinctTitles = [];
  sessions.forEach((s) => {
    const title = s.title || "Live Olympiad Test";
    if (!distinctTitles.some((t) => t.title === title)) distinctTitles.push({ title, subject: s.subject });
  });
  const testName = distinctTitles.length <= 1
    ? distinctTitles[0].title
    : distinctTitles.map((t) => (t.subject ? `${t.title} (${t.subject})` : t.title)).join(", ");

  return {
    testName,
    className,
    testDate,
    testTime,
    testPrice: first.price !== undefined && first.price !== null ? first.price : 0,
    discountedPrice: first.priceAfterCoupon !== undefined && first.priceAfterCoupon !== null ? first.priceAfterCoupon : (first.price ?? 0),
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
