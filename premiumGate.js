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
 * =====================================================================
 */

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
      align-items: center; justify-content: center; padding: 20px;
    }
    #pgBlockOverlay .pg-box {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 20px; padding: 32px 28px; max-width: 420px; width: 100%;
      text-align: center; box-shadow: var(--shadow-lg, 0 20px 40px rgba(0,0,0,0.3));
    }
    #pgBlockOverlay .pg-icon { font-size: 44px; margin-bottom: 12px; }
    #pgBlockOverlay h2 { color: var(--brand-text); font-size: 1.4rem; font-weight: 800; margin-bottom: 10px; }
    #pgBlockOverlay p { color: var(--muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 20px; }
    #pgCountdown {
      font-size: 2rem; font-weight: 800; color: var(--danger, #ef4444);
      background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2);
      border-radius: 14px; padding: 14px; margin-bottom: 22px; letter-spacing: 1px;
    }
    #pgBlockOverlay .pg-upgrade-btn {
      width: 100%; padding: 14px 16px; background: var(--brand); color: #111827;
      border: none; border-radius: 12px; font-weight: 800; font-size: 15px;
      cursor: pointer; margin-bottom: 10px; transition: 0.2s;
    }
    #pgBlockOverlay .pg-upgrade-btn:hover { transform: translateY(-2px); }
    #pgBlockOverlay .pg-back-link { color: var(--muted); font-size: 13px; text-decoration: underline; cursor: pointer; background: none; border: none; }
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

/**
 * Full-screen modal blocking test access until unlocksAtMs. Doesn't touch
 * navigation (no history/redirect manipulation) - the user can still use
 * the navbar/back button to go elsewhere, they just can't get past this
 * overlay to reach the quiz itself.
 * @param {number} unlocksAtMs - epoch ms from canStartTest's response.
 * @param {() => void} onUpgrade - called when the Upgrade button is clicked.
 * @param {() => void} [onBack] - called when "Go back" is clicked.
 */
export function showBlockedModal(unlocksAtMs, onUpgrade, onBack) {
  injectStyles();
  let overlay = document.getElementById("pgBlockOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "pgBlockOverlay";
    overlay.innerHTML = `
      <div class="pg-box">
        <div class="pg-icon">⏱️</div>
        <h2>Free Test Limit Reached</h2>
        <p>You've used your 2 free tests for this 4-hour window. Your next free test unlocks in:</p>
        <div id="pgCountdown">--:--:--</div>
        <button class="pg-upgrade-btn" id="pgUpgradeBtn">⭐ Upgrade to Premium - ₹299/month, unlimited tests</button>
        <button class="pg-back-link" id="pgBackBtn">Go back</button>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  document.getElementById("pgUpgradeBtn").onclick = () => onUpgrade && onUpgrade();
  document.getElementById("pgBackBtn").onclick = () => {
    hideBlockedModal();
    onBack && onBack();
  };

  overlay.style.display = "flex";

  const countdownEl = document.getElementById("pgCountdown");
  function tick() {
    const remainingMs = unlocksAtMs - Date.now();
    if (remainingMs <= 0) {
      countdownEl.textContent = "Unlocked! Refresh to start.";
      clearInterval(countdownTimer);
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
}

export function hideBlockedModal() {
  const overlay = document.getElementById("pgBlockOverlay");
  if (overlay) overlay.style.display = "none";
  if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
}
