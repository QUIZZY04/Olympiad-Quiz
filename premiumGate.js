/**
 * =====================================================================
 * PREMIUM GATE WIDGET
 * =====================================================================
 * Two small UI pieces for the free-tier test-attempt rate limit:
 *   - showRemainingNotice(remaining) - shown after canStartTest allows a
 *     test, if the response says only 1 attempt is left in the window.
 *   - showBlockedModal(unlocksAtMs, onUpgrade) - the full-screen, non-
 *     dismissible-past-it modal shown when canStartTest returns
 *     allowed:false. The countdown ticks using the LOCAL clock only to
 *     redraw the "time remaining" text every second - the actual target
 *     time (unlocksAtMs) always comes from the server's canStartTest
 *     response, never computed or guessed client-side.
 *
 * Styled with the same CSS custom properties already defined in
 * quiz.html's <style> block (--brand, --brand-text, --surface, --border,
 * --muted, --text, --danger, --shadow-lg) so it matches the existing
 * fullscreenOverlay/warningModal look without inventing new colors.
 *
 * The blocked modal also opens a LIVE Firestore listener on the user's own
 * doc while it's showing - if isPremium flips true (the webhook fires
 * after a successful upgrade, possibly completed in a different tab), the
 * modal clears itself immediately without the user needing to refresh or
 * even return focus to this tab. Same auto-clear happens if the countdown
 * simply reaches zero naturally.
 * =====================================================================
 */

import { onSnapshot, doc, getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js";

let injected = false;

function injectStyles() {
  if (injected) return;
  injected = true;
  const style = document.createElement("style");
  style.innerHTML = `
    #pgNotice {
      position: fixed; bottom: 20px; right: 20px; z-index: 9500;
      background: var(--surface); border: 1px solid var(--border);
      border-left: 4px solid var(--brand); border-radius: 12px;
      padding: 14px 18px; box-shadow: var(--shadow-lg, 0 10px 25px rgba(0,0,0,0.15));
      font-size: 13px; font-weight: 600; color: var(--text);
      max-width: 300px; display: flex; align-items: center; gap: 10px;
      animation: pgSlideIn 0.3s ease;
    }
    @keyframes pgSlideIn { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    #pgNotice .pg-close { cursor: pointer; color: var(--muted); font-size: 16px; line-height: 1; margin-left: auto; }

    #pgBlockOverlay {
      display: none; position: fixed; inset: 0; z-index: 10500;
      background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(5px);
      align-items: center; justify-content: center; padding: 24px;
      overflow-y: auto;
    }
    #pgBlockOverlay .pg-box {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 24px; padding: 40px 44px; max-width: 980px; width: 100%;
      text-align: center; box-shadow: var(--shadow-lg, 0 25px 50px rgba(0,0,0,0.35));
      margin: auto;
    }
    #pgBlockOverlay .pg-icon { font-size: 48px; margin-bottom: 14px; }
    #pgBlockOverlay h2 { color: var(--brand-text); font-size: 1.7rem; font-weight: 800; margin-bottom: 10px; letter-spacing: -0.02em; }
    #pgBlockOverlay .pg-lead { color: var(--muted); font-size: 1rem; line-height: 1.5; margin-bottom: 22px; }
    #pgCountdown {
      font-size: 2.1rem; font-weight: 800; color: var(--danger, #ef4444);
      background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2);
      border-radius: 14px; padding: 14px; margin: 0 auto 30px; letter-spacing: 1px;
      max-width: 320px;
    }
    #pgBlockOverlay .pg-plans-heading {
      font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--muted); margin-bottom: 18px;
    }
    #pgBlockOverlay .pg-plans {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
      margin-bottom: 24px; align-items: stretch;
    }
    #pgBlockOverlay .pg-plan {
      background: var(--bg, #f8fafc); border: 1.5px solid var(--border);
      border-radius: 18px; padding: 26px 20px; display: flex; flex-direction: column;
      text-align: left; position: relative;
    }
    #pgBlockOverlay .pg-plan-gold {
      background: linear-gradient(180deg, rgba(217,164,6,0.08), rgba(217,164,6,0.02));
      border: 2px solid #d9a406; transform: scale(1.03);
      box-shadow: 0 12px 28px rgba(217,164,6,0.18);
    }
    #pgBlockOverlay .pg-plan-badge {
      position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
      background: #d9a406; color: #fff; font-size: 11px; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.05em; padding: 5px 14px;
      border-radius: 999px; white-space: nowrap; box-shadow: 0 4px 8px rgba(217,164,6,0.35);
    }
    #pgBlockOverlay .pg-plan-name { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 8px; }
    #pgBlockOverlay .pg-plan-gold .pg-plan-name { color: #a3760a; }
    #pgBlockOverlay .pg-plan-price { font-size: 1.9rem; font-weight: 800; color: var(--text); line-height: 1.1; }
    #pgBlockOverlay .pg-plan-price span { font-size: 0.85rem; font-weight: 600; color: var(--muted); }
    #pgBlockOverlay .pg-plan-save { font-size: 0.78rem; font-weight: 700; color: #15803d; margin-top: 4px; margin-bottom: 4px; }
    #pgBlockOverlay .pg-plan-features { list-style: none; margin: 16px 0 20px; padding: 0; flex: 1; }
    #pgBlockOverlay .pg-plan-features li {
      display: flex; align-items: flex-start; gap: 8px; font-size: 0.85rem;
      color: var(--text); margin-bottom: 10px; line-height: 1.35;
    }
    #pgBlockOverlay .pg-plan-features li.pg-feature-off { color: var(--muted); }
    #pgBlockOverlay .pg-feature-icon { flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; margin-top: 1px; }
    #pgBlockOverlay .pg-feature-icon.pg-yes { background: #dcfce7; color: #15803d; }
    #pgBlockOverlay .pg-feature-icon.pg-no { background: var(--border); color: var(--muted); }
    #pgBlockOverlay .pg-plan-btn {
      width: 100%; padding: 12px 14px; border-radius: 10px; font-weight: 800;
      font-size: 0.9rem; cursor: pointer; border: 1.5px solid var(--brand);
      background: var(--surface); color: var(--brand-text); transition: 0.2s;
    }
    #pgBlockOverlay .pg-plan-btn:hover { background: var(--subtle, #fff7ed); }
    #pgBlockOverlay .pg-plan-btn-gold { background: #d9a406; border-color: #d9a406; color: #fff; }
    #pgBlockOverlay .pg-plan-btn-gold:hover { background: #b8890a; }
    #pgBlockOverlay .pg-plan-btn-disabled { background: var(--border); border-color: var(--border); color: var(--muted); cursor: default; }
    #pgBlockOverlay .pg-plan-btn-disabled:hover { background: var(--border); }
    #pgBlockOverlay .pg-back-link { color: var(--muted); font-size: 13px; text-decoration: underline; cursor: pointer; background: none; border: none; }

    @media (max-width: 760px) {
      #pgBlockOverlay .pg-box { padding: 28px 20px; }
      #pgBlockOverlay .pg-plans { grid-template-columns: 1fr; }
      #pgBlockOverlay .pg-plan-gold { transform: none; }
    }
  `;
  document.head.appendChild(style);
}

/** Shown once, after canStartTest allows a test with exactly 1 remaining
 * in the current window - never a surprise on the 2nd attempt. */
export function showRemainingNotice(remaining) {
  injectStyles();
  const existing = document.getElementById("pgNotice");
  if (existing) existing.remove();

  const el = document.createElement("div");
  el.id = "pgNotice";
  el.innerHTML = `
    <span style="font-size:20px;">⏳</span>
    <span>${remaining} free test${remaining === 1 ? "" : "s"} remaining in the next 4 hours.</span>
    <span class="pg-close" title="Dismiss">&times;</span>
  `;
  document.body.appendChild(el);
  el.querySelector(".pg-close").onclick = () => el.remove();
  setTimeout(() => { if (el.parentNode) el.remove(); }, 10000);
}

let countdownTimer = null;
let premiumUnsubscribe = null;

// Pricing display copy - mirrors functions/premium/config.js's PREMIUM_TIERS.
// If those prices ever change, update both places (backend is the source
// of truth for what's actually charged; this is display-only).
const SILVER_PRICE_INR = 199;
const GOLD_PRICE_INR = 999;
const GOLD_SAVINGS_PCT = Math.round((1 - GOLD_PRICE_INR / (SILVER_PRICE_INR * 12)) * 100);

function featureLi(text, included) {
  const icon = included
    ? `<span class="pg-feature-icon pg-yes">&#10003;</span>`
    : `<span class="pg-feature-icon pg-no">&#8211;</span>`;
  return `<li class="${included ? "" : "pg-feature-off"}">${icon}<span>${text}</span></li>`;
}

/**
 * Full-screen modal blocking test access until unlocksAtMs, showing a
 * professional 3-column pricing table (Current/Silver/Gold) so the
 * upgrade decision is presented clearly, not squeezed into an afterthought
 * button. Doesn't touch navigation (no history/redirect manipulation) -
 * the user can still use the navbar/back button to go elsewhere, they
 * just can't get past this overlay to reach the quiz itself.
 * @param {number} unlocksAtMs - epoch ms from canStartTest's response.
 * @param {(tier: "silver"|"gold") => void} onUpgrade - called with the chosen tier when a plan button is clicked.
 * @param {() => void} [onBack] - called when "Go back" is clicked.
 * @param {{db: import("firebase/firestore").Firestore, uid: string, onResolved: () => void}} [live] -
 *   when provided, opens a live onSnapshot listener on users/{uid} so the
 *   modal clears itself the instant isPremium flips true (e.g. upgraded in
 *   another tab) - onResolved is also called when the countdown reaches
 *   zero naturally, so neither path ever needs a manual page refresh.
 */
export function showBlockedModal(unlocksAtMs, onUpgrade, onBack, live) {
  injectStyles();
  let overlay = document.getElementById("pgBlockOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "pgBlockOverlay";
    overlay.innerHTML = `
      <div class="pg-box">
        <div class="pg-icon">⏱️</div>
        <h2>Free Test Limit Reached</h2>
        <p class="pg-lead">You've used your 2 free tests for this 4-hour window. Your next free test unlocks in:</p>
        <div id="pgCountdown">--:--:--</div>
        <div class="pg-plans-heading">Or continue right now with unlimited tests</div>
        <div class="pg-plans">
          <div class="pg-plan">
            <div class="pg-plan-name">Current Plan</div>
            <div class="pg-plan-price">Free</div>
            <ul class="pg-plan-features">
              ${featureLi("2 tests every 4 hours", true)}
              ${featureLi("All chapterwise &amp; mock tests", true)}
              ${featureLi("Basic performance analytics", true)}
              ${featureLi("Unlimited test attempts", false)}
              ${featureLi("Priority support", false)}
            </ul>
            <button class="pg-plan-btn pg-plan-btn-disabled" disabled>Your Current Plan</button>
          </div>
          <div class="pg-plan">
            <div class="pg-plan-name">Silver Plan</div>
            <div class="pg-plan-price">&#8377;${SILVER_PRICE_INR}<span>/month</span></div>
            <ul class="pg-plan-features">
              ${featureLi("Unlimited test attempts", true)}
              ${featureLi("All chapterwise &amp; mock tests", true)}
              ${featureLi("Detailed performance analytics", true)}
              ${featureLi("No waiting between tests", true)}
              ${featureLi("Priority support", false)}
            </ul>
            <button class="pg-plan-btn" id="pgSilverBtn">Choose Silver</button>
          </div>
          <div class="pg-plan pg-plan-gold">
            <div class="pg-plan-badge">Best Value</div>
            <div class="pg-plan-name">Gold Plan</div>
            <div class="pg-plan-price">&#8377;${GOLD_PRICE_INR}<span>/year</span></div>
            <div class="pg-plan-save">Save ${GOLD_SAVINGS_PCT}% vs. monthly</div>
            <ul class="pg-plan-features">
              ${featureLi("Unlimited test attempts", true)}
              ${featureLi("All chapterwise &amp; mock tests", true)}
              ${featureLi("Detailed performance analytics", true)}
              ${featureLi("No waiting between tests", true)}
              ${featureLi("Priority support", true)}
            </ul>
            <button class="pg-plan-btn pg-plan-btn-gold" id="pgGoldBtn">Choose Gold</button>
          </div>
        </div>
        <button class="pg-back-link" id="pgBackBtn">Go back</button>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  document.getElementById("pgSilverBtn").onclick = () => onUpgrade && onUpgrade("silver");
  document.getElementById("pgGoldBtn").onclick = () => onUpgrade && onUpgrade("gold");
  document.getElementById("pgBackBtn").onclick = () => {
    hideBlockedModal();
    onBack && onBack();
  };

  overlay.style.display = "flex";

  const countdownEl = document.getElementById("pgCountdown");
  function tick() {
    const remainingMs = unlocksAtMs - Date.now();
    if (remainingMs <= 0) {
      countdownEl.textContent = "Unlocked! Loading your test...";
      clearInterval(countdownTimer);
      if (live?.onResolved) live.onResolved();
      return;
    }
    const h = Math.floor(remainingMs / 3600000);
    const m = Math.floor((remainingMs % 3600000) / 60000);
    const s = Math.floor((remainingMs % 60000) / 1000);
    countdownEl.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  if (countdownTimer) clearInterval(countdownTimer);
  tick();
  countdownTimer = setInterval(tick, 1000);

  if (premiumUnsubscribe) { premiumUnsubscribe(); premiumUnsubscribe = null; }
  if (live?.db && live?.uid) {
    premiumUnsubscribe = onSnapshot(doc(live.db, "users", live.uid), (snap) => {
      if (snap.exists() && snap.data().isPremium === true) {
        countdownEl.textContent = "Premium activated! Loading your test...";
        clearInterval(countdownTimer);
        if (live.onResolved) live.onResolved();
      }
    });
  }
}

export function hideBlockedModal() {
  const overlay = document.getElementById("pgBlockOverlay");
  if (overlay) overlay.style.display = "none";
  if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
  if (premiumUnsubscribe) { premiumUnsubscribe(); premiumUnsubscribe = null; }
}

/**
 * Shared Razorpay-subscription-checkout flow for the Silver/Gold plan
 * buttons - one implementation used by every page that can show the
 * pricing modal (quiz.html, chapterwise.html, mock.html, hots.html)
 * instead of each duplicating the same Checkout.js wiring. Requires
 * https://checkout.razorpay.com/v1/checkout.js to already be loaded on
 * the page. isPremium itself is only ever set by the razorpayWebhook
 * Cloud Function once Razorpay confirms the first charge, never here.
 * @param {import("firebase/app").FirebaseApp} app
 * @param {"silver"|"gold"} tier
 */
export async function startUpgradeCheckout(app, tier) {
  const auth = getAuth(app);
  const functions = getFunctions(app);
  const btn = document.getElementById(tier === "gold" ? "pgGoldBtn" : "pgSilverBtn");
  const originalText = btn ? btn.textContent : "";
  if (btn) { btn.disabled = true; btn.textContent = "Preparing checkout..."; }
  const tierLabel = tier === "gold" ? `Gold - ₹${GOLD_PRICE_INR}/year` : `Silver - ₹${SILVER_PRICE_INR}/month`;
  try {
    const createPremiumSubscription = httpsCallable(functions, 'createPremiumSubscription');
    const { data: sub } = await createPremiumSubscription({ tier });

    const options = {
      key: sub.keyId,
      subscription_id: sub.subscriptionId,
      name: "OlympiadQuiz",
      description: `Premium ${tierLabel} - unlimited test attempts`,
      handler: function () {
        hideBlockedModal();
        alert("Payment received! Premium activates within a minute or two once it's confirmed - refresh the page then.");
      },
      modal: {
        ondismiss: function () {
          if (btn) { btn.disabled = false; btn.textContent = originalText; }
        }
      },
      prefill: {
        name: auth.currentUser?.displayName || "Student",
        email: auth.currentUser?.email || "",
        contact: auth.currentUser?.phoneNumber || ""
      },
      theme: { color: tier === "gold" ? "#d9a406" : "#ff6b00" }
    };
    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function () {
      alert("Payment was not completed.");
      if (btn) { btn.disabled = false; btn.textContent = originalText; }
    });
    rzp.open();
  } catch (err) {
    console.error("Upgrade flow failed:", err);
    alert("Couldn't start checkout right now. Please try again in a moment.");
    if (btn) { btn.disabled = false; btn.textContent = originalText; }
  }
}

/**
 * Call this right before navigating a selection page (chapterwise.html/
 * mock.html/hots.html) to quiz.html. Runs a DRY-RUN canStartTest check -
 * dryRun never creates an attempt record, quiz.html's own (non-dry-run)
 * check does that - so a blocked user sees the pricing modal right here,
 * on the selection page, instead of quiz.html opening and bouncing them
 * back. Fails OPEN (navigates anyway) on any check error, same reasoning
 * as quiz.html's own gate: this is a business/UX limit, not a security
 * gate, so a transient failure should never block a legitimate test.
 * @param {import("firebase/app").FirebaseApp} app
 * @param {"chapterwise"|"mock"|"hots"} testType
 * @param {() => void} navigate - called once it's safe to go to quiz.html.
 * @param {() => void} [onBlocked] - called right before the pricing modal is
 *        shown, so the caller can reset any "Opening Test..." loading state
 *        it put up while this dry-run check was in flight. Not called on
 *        the allowed path, since navigate() unloads the page anyway.
 */
export async function guardQuizNavigation(app, testType, navigate, onBlocked) {
  const auth = getAuth(app);
  const user = auth.currentUser;
  if (!user) { navigate(); return; } // not logged in - the page's own login-guard handles this
  try {
    const functions = getFunctions(app);
    const canStartTest = httpsCallable(functions, 'canStartTest');
    const { data: gate } = await canStartTest({ testType, dryRun: true });
    if (!gate.allowed) {
      onBlocked?.();
      showBlockedModal(gate.unlocksAt, (tier) => startUpgradeCheckout(app, tier), () => hideBlockedModal(), {
        db: getFirestore(app),
        uid: user.uid,
        onResolved: () => { hideBlockedModal(); navigate(); },
      });
      return;
    }
  } catch (e) {
    console.error("guardQuizNavigation: canStartTest dry-run failed - allowing:", e);
  }
  navigate();
}
