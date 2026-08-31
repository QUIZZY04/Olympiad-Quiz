/**
 * =====================================================================
 * AI ASSISTANT - DETERMINISTIC MENU ROUTER
 * =====================================================================
 * A full "information portal" for OlympiadQuiz, answered with ZERO
 * OpenAI calls wherever possible: a tappable WhatsApp list menu with
 * elaborate sub-menus (Live Tests, Mock Tests, Olympiad Guidance,
 * Registration & Account, Payments & Certificates), each backed by
 * either real Firestore data (via aiTools.executeTool - never a
 * hallucination) or curated static content mirroring the site's own
 * copy. Free text is also keyword-classified into the same actions, so
 * typing "IMO" gets the same elaborate answer as tapping through the
 * Mock Tests submenu.
 *
 * "Talk to Support" (menu_human) always resolves right here, via
 * handleHuman() below - an instant, real handover ticket
 * (escalateToHuman), never an AI persona. See admin.html's WhatsApp
 * Manager > AI Assistant tab for the open-handovers inbox and one-on-one
 * chat UI a real admin uses to actually reply.
 *
 * Every handler returns one of:
 *   - a plain string (sent as a normal text message)
 *   - {interactiveList: {...}} (sent as a tappable list message)
 *   - null (no match - caller falls through to the next layer)
 * =====================================================================
 */

const aiTools = require("./aiTools");

// ---------------------------------------------------------------------
// Keyword -> action intent classifier. Specific exam names resolve
// straight to their elaborate answer (matching what tapping through a
// submenu would give); generic category words open the relevant
// submenu instead.
// ---------------------------------------------------------------------
// Ordered MOST-SPECIFIC-FIRST: classifyIntent uses first-match-wins, so a
// longer/more specific phrase (e.g. "improve score", "login help") must be
// listed BEFORE any shorter rule whose keyword it happens to contain
// (e.g. "score" alone, or the generic "help" catch-all) - otherwise the
// generic rule would win by appearing earlier, which is exactly backwards.
// The greeting/menu catch-all is deliberately LAST for this reason.
const KEYWORD_ACTIONS = [
  { keywords: ["imo", "maths olympiad", "math olympiad"], action: "mock_imo" },
  { keywords: ["nso"], action: "mock_nso" },
  { keywords: ["ieo"], action: "mock_ieo" },
  { keywords: ["igko", "general knowledge"], action: "mock_igko" },
  { keywords: ["iro", "reasoning olympiad"], action: "mock_iro" },
  { keywords: ["jee", "neet"], action: "mock_jee_neet" },
  { keywords: ["live test", "live arena", "upcoming test", "upcoming live"], action: "menu_live_tests" },
  { keywords: ["mock test", "mock", "practice test"], action: "menu_mock_tests" },
  { keywords: ["olympiad guidance", "guidance", "how to prepare"], action: "menu_guidance" },
  { keywords: ["study plan"], action: "guide_study_plan" },
  { keywords: ["improve score", "improve rank", "boost score", "improve my"], action: "guide_improve_score" },
  { keywords: ["tips", "suggestion", "strategy", "pro tips"], action: "guide_prep_tips" },
  { keywords: ["syllabus"], action: "guide_syllabus" },
  { keywords: ["success guide", "success guides", "study guide", "blog", "article"], action: "guide_success_guides" },
  { keywords: ["result", "score", "rank"], action: "menu_my_result" },
  { keywords: ["performance", "how am i doing", "progress", "analytics"], action: "menu_performance" },
  { keywords: ["coupon", "offer", "discount"], action: "menu_coupons" },
  { keywords: ["certificate"], action: "cert_info" },
  { keywords: ["how to subscribe", "take subscription", "buy premium", "upgrade to premium", "silver plan", "gold plan", "premium plan", "go premium"], action: "pay_subscribe_howto" },
  { keywords: ["payment", "refund", "subscription", "razorpay"], action: "pay_help" },
  { keywords: ["login", "log in", "forgot password", "can't login", "cannot login"], action: "reg_login_help" },
  { keywords: ["register", "registration", "signup", "sign up"], action: "reg_how_to" },
  { keywords: ["human", "agent", "support team", "talk to someone", "talk to support", "real person"], action: "menu_human" },
  { keywords: ["hi", "hello", "hey", "menu", "start", "help", "contact"], action: "menu_root" },
];

/** Multi-word phrases are safe as plain substring checks. Single-word
 * keywords use a word-boundary regex instead - a plain .includes("hi")
 * would false-positive-match "hi" inside "this"/"history"/etc. */
function keywordMatches(normalized, keyword) {
  if (keyword.includes(" ")) return normalized.includes(keyword);
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|[^a-z])${escaped}(?:$|[^a-z])`).test(normalized);
}

/** @returns {string|null} a menu action id, or null if nothing matched. */
function classifyIntent(text) {
  if (!text) return null;
  const normalized = text.trim().toLowerCase();
  for (const rule of KEYWORD_ACTIONS) {
    if (rule.keywords.some((k) => keywordMatches(normalized, k))) return rule.action;
  }
  return null;
}

const STATIC_REPLIES = {
  live_how_it_works:
    "🏆 *Live Quiz Arena* is the ultimate battleground — compete nationally in real-time against thousands of students.\n\n" +
    "You get an *All India Rank (AIR)*, a percentile score, and a participation certificate upon completion.\n\n" +
    "Join here: https://olympiadquiz.org/live.html",
  live_fees:
    "💰 *Live Test Fees & Registration*\n\n" +
    "Each live test has its own registration fee, shown when you open it. Coupon codes (if available) apply automatically at checkout for a discounted price.\n\n" +
    "Check *Coupons & Offers* in the menu for currently active codes, and *Live Tests* for exact pricing per session.\n\n" +
    "Register here: https://olympiadquiz.org/live.html",
  mock_start: "📝 All our mock tests (IMO, NSO, IEO, IGKO, JEE, NEET) in one place:\nhttps://olympiadquiz.org/mock.html",
  mock_imo:
    "📐 *International Mathematics Olympiad (IMO)* tests your mathematical and logical reasoning skills.\n\n" +
    "*To excel:*\n1. Master your school syllabus\n2. Practice High-Order Thinking (H.O.T.S) questions\n3. Take timed mock tests\n\n" +
    "We have chapter-wise quizzes and full-length mock tests to help you prepare.\n\n" +
    "Start here: https://olympiadquiz.org/imo-free-mock-test.html",
  mock_nso:
    "🔬 *National Science Olympiad (NSO)* evaluates your conceptual understanding of Physics, Chemistry, and Biology.\n\n" +
    "*Key to success:* understand the 'why' behind every phenomenon and practice application-based questions.\n\n" +
    "Start here: https://olympiadquiz.org/nso-free-mock-test.html",
  mock_ieo:
    "📚 *International English Olympiad (IEO)* focuses on grammar, vocabulary, and reading comprehension.\n\n" +
    "*Preparation tips:*\n1. Read English newspapers/storybooks daily\n2. Practice tenses and prepositions\n3. Attempt our chapter-wise grammar quizzes\n\n" +
    "Start here: https://olympiadquiz.org/ieo-free-mock-test.html",
  mock_igko:
    "🌍 *International General Knowledge Olympiad (IGKO)* covers current affairs, life skills, and general awareness.\n\n" +
    "*How to prepare:* stay updated with recent events and practice our mock tests.\n\n" +
    "Start here: https://olympiadquiz.org/igko-free-mock-test.html",
  mock_iro:
    "🧩 *International Reasoning Olympiad (IRO)* tests verbal and non-verbal logical reasoning skills.\n\n" +
    "*How to prepare:* practice pattern recognition, analogies, and puzzle-style questions regularly.\n\n" +
    "Start here: https://olympiadquiz.org/iro-free-mock-test.html",
  mock_jee_neet:
    "⚕️📐 We have dedicated CBT mock tests for *JEE Main, JEE Advanced, and NEET*, based on the latest NTA/NMC syllabus — full syllabus mocks, chapter-wise practice, and Previous Year Questions.\n\n" +
    "JEE Main: https://olympiadquiz.org/jee_main.html\nNEET: https://olympiadquiz.org/neet.html",
  guide_prep_tips:
    "🌟 *Pro Tips for cracking any competitive exam:*\n\n" +
    "1. *Consistency* — practice 30-45 min daily\n2. *Analyze* — always review mistakes after a mock test\n" +
    "3. *Time Management* — use a timer while practicing\n4. *Concepts First* — clear basics before H.O.T.S problems\n\n" +
    "Want the full 30-day study plan? Just ask, or check the Olympiad Guidance menu!",
  guide_study_plan:
    "📅 *30-Day Master Study Plan:*\n\n" +
    "*Days 1-10 (Foundation):* clear basic concepts using NCERT + our Study Material\n" +
    "*Days 11-20 (Targeted Practice):* chapter-wise quizzes to find weak spots\n" +
    "*Days 21-25 (PYQs):* solve Previous Year Questions to learn the exam pattern\n" +
    "*Days 26-30 (Simulation):* full-length mock tests with a strict timer — review every mistake!\n\n" +
    "Study Material: https://olympiadquiz.org/study.html",
  guide_improve_score:
    "📈 *To improve your score and rank:*\n\n" +
    "1. *Analyze* — check your Dashboard for weak chapters\n2. *Target* — practice those chapters in Chapter-wise Practice\n" +
    "3. *Review* — always read the detailed solutions after a test\n4. *Compete* — join Live Arenas to build exam temperament\n\n" +
    "Chapter-wise Practice: https://olympiadquiz.org/chapterwise.html",
  guide_syllabus:
    "📋 Our syllabus follows the latest SOF, SilverZone, and other Olympiad body guidelines.\n\n" +
    "SOF Syllabus: https://olympiadquiz.org/sof-syllabus.html\n" +
    "SilverZone Syllabus: https://olympiadquiz.org/silverzone-syllabus.html\n" +
    "CREST Syllabus: https://olympiadquiz.org/crest-syllabus.html",
  guide_success_guides:
    "📖 *Success Guides* — free, in-depth articles written by our team on exam strategy, time management, and topper habits.\n\n" +
    "Browse all of them here: https://olympiadquiz.org/blog.html",
  reg_how_to:
    "To register, visit https://olympiadquiz.org/signup.html and sign in with Google or your mobile number - it takes less than a minute! 🎉",
  reg_login_help:
    "🔑 *Login / Access Help*\n\n" +
    "Sign in with Google or your registered mobile number: https://olympiadquiz.org/login.html\n\n" +
    "Forgot your password (email login)? Reset it here: https://olympiadquiz.org/forgot-password.html\n\n" +
    "Still stuck? Tap *Talk to Support* from the menu.",
  cert_info:
    "Your e-certificate (for Live Arena participation) is emailed to your registered email address after the event. Check your inbox/spam folder, or log in to your dashboard to confirm your participation status.",
  pay_subscribe_howto:
    "💎 *Go Premium — Unlimited Tests*\n\n" +
    "Free accounts get 2 tests per day. Upgrade for unlimited access:\n\n" +
    "🥈 *Silver* — ₹199/month\n🥇 *Gold* — ₹399/3 months (+2 free All India Live Tests/month)\n💎 *Diamond* — ₹999/year (+4 free All India Live Tests/month + personal Olympiad guidance, best value)\n\n" +
    "*How to subscribe:*\n1. Log in at https://olympiadquiz.org/dashboard.html\n2. Start any Mock/Chapterwise/HOTS test\n3. Once you hit the free-test limit, tap *Upgrade* on the popup and choose Silver, Gold, or Diamond\n4. Pay securely via Razorpay — Premium activates instantly\n\n" +
    "Already subscribed but facing an issue? Tap *Payment Issue* from the menu instead.",
  pay_help:
    "❗ *Payment / Subscription Issue*\n\nFor billing problems, failed payments, or refund queries, please share your registered email/phone and order ID here, or reach us at https://olympiadquiz.org/contact.html - our team will help you shortly.",
  goodbye: "Thank you for chatting with *OlympiadQuiz*! 🎓 Keep practicing, stay curious, and best of luck with your exams. Bye for now, and happy learning! 👋✨",
};

/** Shown by chatbot.js after most replies, prompting the student to
 * either keep going or wrap up - see NO_FOLLOWUP_ACTIONS below for the
 * cases (menus, escalation, goodbye, etc.) that skip this. */
const FOLLOWUP_BUTTONS = {
  bodyText: "Would you like anything else? 😊",
  buttons: [
    { id: "menu_continue", title: "Yes, more help" },
    { id: "menu_close", title: "No, that's all" },
  ],
};

/** Action ids whose own reply already IS the "what next" moment (a
 * menu/submenu list), or a natural conversation end/handoff - chatbot.js
 * skips appending FOLLOWUP_BUTTONS after these. */
const NO_FOLLOWUP_ACTIONS = new Set([
  "menu_root", "menu_continue", "menu_close", "menu_human",
  "menu_live_tests", "menu_mock_tests", "menu_guidance", "menu_registration", "menu_payment",
]);

// ---------------------------------------------------------------------
// Formatters for tool-backed (real data) answers - plain JS, no LLM.
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

/** "Talk to Support" - creates a real human-handover ticket immediately,
 * regardless of whether the AI Assistant is enabled. An admin sees it in
 * admin.html's WhatsApp Manager > AI Assistant tab (open handovers list +
 * one-on-one chat modal) and replies manually. */
async function handleHuman(serverContext) {
  await aiTools.executeTool("escalateToHuman", { reason: "Requested via WhatsApp menu/keyword" }, serverContext);
  return "Sure! 🙋 Connecting you with our support team - they'll reply here shortly.";
}

function buildSubmenu(header, bodyText, rows) {
  return {
    interactiveList: {
      header,
      bodyText,
      buttonText: "View Options",
      sections: [{ title: header, rows: [...rows, { id: "menu_root", title: "🏠 Main Menu", description: "Back to the start" }] }],
    },
  };
}

/** The main entry-point menu, sent for "Hi"/"menu"/first contact - zero
 * OpenAI cost. Tapping a row sends its `id` back on the next webhook
 * event, which routes straight into handleAction() below. */
function buildMainMenu() {
  return {
    interactiveList: {
      header: "OlympiadQuiz Assistant",
      bodyText: "Hi! 👋 Welcome to OlympiadQuiz - your complete information portal. Tap an option below, or just type your question.",
      buttonText: "View Options",
      sections: [
        {
          title: "How can we help?",
          rows: [
            { id: "menu_live_tests", title: "📅 Live Tests", description: "Upcoming tests, fees & how it works" },
            { id: "menu_mock_tests", title: "📝 Mock Tests", description: "IMO, NSO, IEO, IGKO, JEE, NEET" },
            { id: "menu_guidance", title: "🎓 Olympiad Guidance", description: "Study plans, tips & syllabus" },
            { id: "menu_my_result", title: "🏆 My Result", description: "Your latest score & rank" },
            { id: "menu_performance", title: "📊 My Performance", description: "Trend & weak areas" },
            { id: "menu_coupons", title: "🎟️ Coupons & Offers", description: "Active discount codes" },
            { id: "menu_registration", title: "🧾 Registration & Account", description: "Sign up & login help" },
            { id: "menu_payment", title: "💳 Payments & Certificates", description: "Billing & e-certificates" },
            { id: "menu_human", title: "🙋 Talk to Support", description: "Chat with our team" },
          ],
        },
      ],
    },
  };
}

function buildLiveTestsMenu() {
  return buildSubmenu("Live Tests", "📅 Everything about our Live Quiz Arena:", [
    { id: "live_upcoming", title: "🗓️ Upcoming Tests", description: "See what's scheduled" },
    { id: "live_how_it_works", title: "ℹ️ How It Works", description: "Rank, percentile & certificate" },
    { id: "live_fees", title: "💰 Fees & Registration", description: "Pricing & coupons" },
  ]);
}

function buildMockTestsMenu() {
  return buildSubmenu("Mock Tests", "📝 Free mock tests by exam:", [
    { id: "mock_imo", title: "📐 IMO", description: "Maths Olympiad" },
    { id: "mock_nso", title: "🔬 NSO", description: "Science Olympiad" },
    { id: "mock_ieo", title: "📚 IEO", description: "English Olympiad" },
    { id: "mock_igko", title: "🌍 IGKO", description: "General Knowledge" },
    { id: "mock_iro", title: "🧩 IRO", description: "Reasoning Olympiad" },
    { id: "mock_jee_neet", title: "⚕️ JEE & NEET", description: "Engineering & Medical" },
    { id: "mock_start", title: "🚀 Start a Mock Test", description: "Jump straight in" },
  ]);
}

function buildGuidanceMenu() {
  return buildSubmenu("Olympiad Guidance", "🎓 Preparation guidance & resources:", [
    { id: "guide_prep_tips", title: "🌟 Pro Tips", description: "General exam strategy" },
    { id: "guide_study_plan", title: "📅 30-Day Study Plan", description: "Step-by-step roadmap" },
    { id: "guide_improve_score", title: "📈 Improve My Score", description: "How to raise your rank" },
    { id: "guide_syllabus", title: "📋 Syllabus", description: "SOF, SilverZone, CREST" },
    { id: "guide_success_guides", title: "📖 Success Guides", description: "Full articles & strategies" },
  ]);
}

function buildRegistrationMenu() {
  return buildSubmenu("Registration & Account", "🧾 Account help:", [
    { id: "reg_how_to", title: "✍️ How to Register", description: "Sign up in a minute" },
    { id: "reg_login_help", title: "🔑 Login / Forgot Password", description: "Access issues" },
  ]);
}

function buildPaymentMenu() {
  return buildSubmenu("Payments & Certificates", "💳 Billing & certificates:", [
    { id: "pay_subscribe_howto", title: "💎 How to Subscribe", description: "Silver & Gold plans" },
    { id: "pay_help", title: "❗ Payment Issue", description: "Billing, refund & failed payment" },
    { id: "cert_info", title: "📜 Certificate Info", description: "When & how you get it" },
  ]);
}

/**
 * @param {string} actionId - a menu or submenu-item id, either tapped
 *        (interactive reply) or classified from free text (see
 *        classifyIntent above).
 * @param {{phone: string, uid: string|null}} serverContext
 * @returns {Promise<string|{interactiveList: Object}|null>} null means
 *          "not a recognized action" - caller should fall through
 *          (e.g. to the AI engine).
 */
async function handleAction(actionId, serverContext) {
  switch (actionId) {
    case "menu_root":
    case "menu_continue":
      return buildMainMenu();
    case "menu_live_tests":
      return buildLiveTestsMenu();
    case "live_upcoming":
      return formatUpcomingTests(await aiTools.executeTool("getUpcomingTests", {}, serverContext));
    case "live_how_it_works":
      return STATIC_REPLIES.live_how_it_works;
    case "live_fees":
      return STATIC_REPLIES.live_fees;
    case "menu_mock_tests":
      return buildMockTestsMenu();
    case "mock_imo":
      return STATIC_REPLIES.mock_imo;
    case "mock_nso":
      return STATIC_REPLIES.mock_nso;
    case "mock_ieo":
      return STATIC_REPLIES.mock_ieo;
    case "mock_igko":
      return STATIC_REPLIES.mock_igko;
    case "mock_iro":
      return STATIC_REPLIES.mock_iro;
    case "mock_jee_neet":
      return STATIC_REPLIES.mock_jee_neet;
    case "mock_start":
      return STATIC_REPLIES.mock_start;
    case "menu_guidance":
      return buildGuidanceMenu();
    case "guide_prep_tips":
      return STATIC_REPLIES.guide_prep_tips;
    case "guide_study_plan":
      return STATIC_REPLIES.guide_study_plan;
    case "guide_improve_score":
      return STATIC_REPLIES.guide_improve_score;
    case "guide_syllabus":
      return STATIC_REPLIES.guide_syllabus;
    case "guide_success_guides":
      return STATIC_REPLIES.guide_success_guides;
    case "menu_my_result":
      return formatLatestResult(await aiTools.executeTool("getLatestResult", {}, serverContext));
    case "menu_performance":
      return formatPerformance(await aiTools.executeTool("getPerformanceAnalytics", {}, serverContext));
    case "menu_coupons":
      return formatCoupons(await aiTools.executeTool("getCoupons", {}, serverContext));
    case "menu_registration":
      return buildRegistrationMenu();
    case "reg_how_to":
      return STATIC_REPLIES.reg_how_to;
    case "reg_login_help":
      return STATIC_REPLIES.reg_login_help;
    case "menu_payment":
      return buildPaymentMenu();
    case "pay_subscribe_howto":
      return STATIC_REPLIES.pay_subscribe_howto;
    case "pay_help":
      return STATIC_REPLIES.pay_help;
    case "cert_info":
      return STATIC_REPLIES.cert_info;
    case "menu_human":
      return handleHuman(serverContext);
    case "menu_close":
      return STATIC_REPLIES.goodbye;
    default:
      return null;
  }
}

module.exports = {
  classifyIntent,
  handleAction,
  buildMainMenu,
  FOLLOWUP_BUTTONS,
  NO_FOLLOWUP_ACTIONS,
};
