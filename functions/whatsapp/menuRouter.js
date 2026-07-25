/**
 * =====================================================================
 * AI ASSISTANT - DETERMINISTIC MENU ROUTER
 * =====================================================================
 * Answers as many student questions as possible with ZERO OpenAI calls:
 * an interactive WhatsApp list menu + keyword-matched intents, both
 * backed by the SAME real Firestore data the AI tools use (via
 * aiTools.executeTool) - never a hallucination, never a stale hardcoded
 * string pretending to be live data.
 *
 * OpenAI (aiEngine.js) is only ever reached for free text that matches
 * NEITHER an interactive tap NOR a keyword intent below - i.e. genuinely
 * open-ended questions ("explain photosynthesis", ambiguous phrasing).
 * This is deliberately the FIRST thing chatbot.js checks, before the AI
 * settings/engine are even consulted, so it works whether or not the AI
 * Assistant is enabled - it's a cheaper, faster layer on its own.
 *
 * Every handler returns one of:
 *   - a plain string (sent as a normal text message)
 *   - {interactiveList: {...}} (sent as a tappable list message)
 *   - null (no match - caller falls through to the next layer)
 * =====================================================================
 */

const aiTools = require("./aiTools");

// ---------------------------------------------------------------------
// Keyword -> action intent classifier (replaces the old static RULES -
// same trigger words, but now routed to real-data-backed handlers below
// instead of fixed canned text).
// ---------------------------------------------------------------------
const KEYWORD_ACTIONS = [
  { keywords: ["hi", "hello", "hey", "menu", "start", "help"], action: "menu_root" },
  { keywords: ["live test", "live arena", "upcoming test", "upcoming live"], action: "menu_live_tests" },
  { keywords: ["mock test", "mock", "practice"], action: "menu_mock_tests" },
  { keywords: ["result", "score", "rank"], action: "menu_my_result" },
  { keywords: ["performance", "how am i doing", "progress", "analytics"], action: "menu_performance" },
  { keywords: ["coupon", "offer", "discount"], action: "menu_coupons" },
  { keywords: ["certificate"], action: "menu_certificate" },
  { keywords: ["payment", "refund", "subscription", "razorpay"], action: "menu_payment" },
  { keywords: ["register", "registration", "signup", "sign up"], action: "menu_registration" },
  { keywords: ["contact"], action: "menu_root" },
  { keywords: ["human", "agent", "support team", "talk to someone", "talk to support", "real person"], action: "menu_human" },
];

/** @returns {string|null} a menu action id, or null if nothing matched. */
function classifyIntent(text) {
  if (!text) return null;
  const normalized = text.trim().toLowerCase();
  for (const rule of KEYWORD_ACTIONS) {
    if (rule.keywords.some((k) => normalized.includes(k))) return rule.action;
  }
  return null;
}

const STATIC_REPLIES = {
  mock_tests:
    "You can attempt free IMO, NSO, IEO, IRO, IGKO, JEE Main & NEET mock tests here:\nhttps://olympiadquiz.org/mock.html",
  registration:
    "To register, visit https://olympiadquiz.org/signup.html and sign in with Google or your mobile number - it takes less than a minute! 🎉",
  certificate:
    "Your e-certificate (for Live Arena participation) is emailed to your registered email address after the event. Check your inbox/spam folder, or log in to your dashboard to confirm your participation status.",
  payment:
    "For payment or subscription queries, please share your registered email/phone and order ID here, or reach us at https://olympiadquiz.org/contact.html - our team will help you shortly.",
  askAnything: "Sure! 😊 Type your question and I'll do my best to help.",
};

// ---------------------------------------------------------------------
// Formatters - plain JS, no LLM involved. Each takes the exact object
// shape aiTools.executeTool() already returns for that tool.
// ---------------------------------------------------------------------

function formatUpcomingTests(result) {
  if (result?.error) return "Sorry, I couldn't load upcoming tests right now. Please try again shortly, or visit https://olympiadquiz.org/live.html.";
  const tests = result?.tests || [];
  if (tests.length === 0) {
    return "There are no upcoming live tests scheduled right now. 📭 Check back soon, or try a free mock test here: https://olympiadquiz.org/mock.html";
  }
  const lines = tests.slice(0, 5).map((t) => {
    const priceLine = t.discountedPrice !== undefined && Number(t.discountedPrice) !== Number(t.testPrice)
      ? `💰 ₹${t.testPrice} (₹${t.discountedPrice} with coupon)`
      : `💰 ₹${t.testPrice ?? 0}`;
    return `📅 *${t.testName}* (Class ${t.className})\n🗓️ ${t.testDate}, ${t.testTime}\n${priceLine}`;
  });
  return `Here are the upcoming live tests:\n\n${lines.join("\n\n")}\n\nRegister here: https://olympiadquiz.org/live.html`;
}

function formatLatestResult(result) {
  if (result?.error === "no_linked_account") return result.message;
  if (result?.error) return "Sorry, I couldn't fetch your result right now. Please try again shortly.";
  if (!result.hasResult) return "You haven't attempted any test yet. 🎯 Take a free mock test here: https://olympiadquiz.org/mock.html";

  let msg = `🏆 *${result.testName}*${result.subject ? ` (${result.subject})` : ""}\nScore: *${result.score}/${result.total}*`;
  if (result.accuracy) msg += `\nAccuracy: ${result.accuracy}%`;
  if (result.rank) msg += `\nRank: *#${result.rank}* of ${result.totalParticipants} (Top ${(100 - result.percentile).toFixed(1)}%)`;
  msg += `\n\nSee full details: https://olympiadquiz.org/dashboard.html`;
  return msg;
}

function formatPerformance(result) {
  if (result?.error === "no_linked_account") return result.message;
  if (result?.error) return "Sorry, I couldn't fetch your performance right now. Please try again shortly.";
  if (!result.testsAttempted) return result.message || "No test attempts found yet - take a mock test to get started! https://olympiadquiz.org/mock.html";

  let msg = `📊 *Your Performance*\nTests Attempted: ${result.testsAttempted}\nAverage: ${result.averagePercent}%\nHighest: ${result.highestPercent}% | Lowest: ${result.lowestPercent}%`;
  if (result.bestRank) msg += `\nBest Rank: #${result.bestRank}`;
  if (result.weakestSubjects?.length) {
    msg += `\n\n⚠️ Focus areas: ${result.weakestSubjects.map((s) => `${s.subject} (${s.averagePercent}%)`).join(", ")}`;
  }
  if (result.strongestSubjects?.length) {
    msg += `\n💪 Strong areas: ${result.strongestSubjects.map((s) => `${s.subject} (${s.averagePercent}%)`).join(", ")}`;
  }
  return msg;
}

function formatCoupons(result) {
  const coupons = result?.coupons || [];
  if (coupons.length === 0) return "There are no active coupons right now. Check back soon! 🎟️";
  const lines = coupons.map(
    (c) => `🎟️ *${c.code}*${c.expiresAt ? ` (expires ${new Date(c.expiresAt).toLocaleDateString("en-IN")})` : ""}`
  );
  return `Active coupons:\n\n${lines.join("\n")}\n\nApply at checkout on https://olympiadquiz.org`;
}

async function handleHuman(serverContext) {
  await aiTools.executeTool("escalateToHuman", { reason: "Requested via WhatsApp menu/keyword" }, serverContext);
  return "Sure! 🙋 Connecting you with our support team - they'll reply here shortly.";
}

/** The main entry-point menu, sent for "Hi"/"menu"/first contact - zero
 * OpenAI cost. Tapping a row sends its `id` back on the next webhook
 * event, which routes straight into handleAction() below. */
function buildMainMenu() {
  return {
    interactiveList: {
      header: "OlympiadQuiz Assistant",
      bodyText: "Hi! 👋 How can I help you today? Tap an option below, or just type your question.",
      buttonText: "View Options",
      sections: [
        {
          title: "How can we help?",
          rows: [
            { id: "menu_live_tests", title: "📅 Live Tests", description: "Upcoming tests & registration" },
            { id: "menu_mock_tests", title: "📝 Mock Tests", description: "Free practice tests" },
            { id: "menu_my_result", title: "🏆 My Result", description: "Your latest score & rank" },
            { id: "menu_performance", title: "📊 My Performance", description: "Trend & weak areas" },
            { id: "menu_coupons", title: "🎟️ Coupons & Offers", description: "Active discount codes" },
            { id: "menu_registration", title: "🧾 Registration Help", description: "How to sign up" },
            { id: "menu_human", title: "🙋 Talk to Support", description: "Connect with our team" },
            { id: "menu_ask_anything", title: "💬 Ask Anything Else", description: "Type your own question" },
          ],
        },
      ],
    },
  };
}

/**
 * @param {string} actionId - a menu_* id, either tapped (interactive
 *        reply) or classified from free text (classifyIntent above).
 * @param {{phone: string, uid: string|null}} serverContext
 * @returns {Promise<string|{interactiveList: Object}|null>} null means
 *          "not a recognized action" - caller should fall through
 *          (e.g. to the AI engine).
 */
async function handleAction(actionId, serverContext) {
  switch (actionId) {
    case "menu_root":
      return buildMainMenu();
    case "menu_live_tests":
      return formatUpcomingTests(await aiTools.executeTool("getUpcomingTests", {}, serverContext));
    case "menu_mock_tests":
      return STATIC_REPLIES.mock_tests;
    case "menu_my_result":
      return formatLatestResult(await aiTools.executeTool("getLatestResult", {}, serverContext));
    case "menu_performance":
      return formatPerformance(await aiTools.executeTool("getPerformanceAnalytics", {}, serverContext));
    case "menu_coupons":
      return formatCoupons(await aiTools.executeTool("getCoupons", {}, serverContext));
    case "menu_registration":
      return STATIC_REPLIES.registration;
    case "menu_certificate":
      return STATIC_REPLIES.certificate;
    case "menu_payment":
      return STATIC_REPLIES.payment;
    case "menu_human":
      return handleHuman(serverContext);
    case "menu_ask_anything":
      return STATIC_REPLIES.askAnything;
    default:
      return null;
  }
}

module.exports = { classifyIntent, handleAction, buildMainMenu };
