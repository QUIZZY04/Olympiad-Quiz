/**
 * Centralized Authentication System for OlympiadQuiz
 * Protects test launches and features while keeping SEO pages strictly public.
 *
 * Profile-completion enforcement (2026 update):
 *   - protectPage()   → full-page guard (hard redirect if not auth'd or profile incomplete)
 *   - requireLogin()  → inline guard for "Start Test" buttons on public pages
 *   Both now verify Firestore `registrationCompleted || signupCompleted || profileCompleted`
 *   AND a phone number on file, before granting access. Incomplete-profile or
 *   phoneless users (including pre-existing Google-only accounts) are sent to
 *   signup.html?mode=completion, which forces phone verification.
 */
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

 
const firebaseConfig = {
    apiKey: "AIzaSyB49W61ggHHJcAJ5WyYTmX13I8NofsggSY",
    authDomain: "olympiad-portal-d2a5e.firebaseapp.com",
    projectId: "olympiad-portal-d2a5e",
    storageBucket: "olympiad-portal-d2a5e.firebasestorage.app",
    messagingSenderId: "341855557503",
    appId: "1:341855557503:web:5cb0c3a9ee424a6db0ec4a"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

let currentUser = null;
let isAuthReady = false;
let authCallbacks = [];

onAuthStateChanged(auth, (user) => {
    currentUser = user;
    isAuthReady = true;
    if (user) {
        localStorage.setItem("isLoggedIn", "true");
    } else {
        localStorage.removeItem("isLoggedIn");
    }
    authCallbacks.forEach(cb => cb(user));
    authCallbacks = [];
});

/**
 * Returns true if the Firestore user document indicates a completed profile.
 * Checks all three legacy + current flags for backward compatibility.
 */
async function isProfileComplete(uid) {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (!userDoc.exists()) return false;
        const data = userDoc.data();
        const hasCompletedProfile = !!(data.registrationCompleted || data.signupCompleted || data.profileCompleted);
        const hasPhone = !!(data.phone || data.phoneNumber);
        return hasCompletedProfile && hasPhone;
    } catch (e) {
        console.warn("[AuthGuard] Firestore profile check failed:", e);
        // Fail-open on network error to avoid false lockouts on intermittent failures
        return true;
    }
}

export const AuthGuard = {
    checkAuth: function(callback) {
        if (isAuthReady) {
            callback(currentUser);
        } else {
            authCallbacks.push(callback);
        }
    },

    /**
     * Use on public HTML pages for "Start Test" / feature buttons.
     * Checks: authenticated AND profile complete.
     * If not authenticated → shows login modal.
     * If authenticated but profile incomplete → redirects to signup completion.
     */
    requireLogin: function(actionCallback) {
        this.checkAuth(async (user) => {
            if (!user) {
                this.showLoginModal(actionCallback);
                return;
            }
            // Check profile completion
            const complete = await isProfileComplete(user.uid);
            if (!complete) {
                sessionStorage.setItem("redirectAfterLogin", window.location.href);
                window.location.replace("signup.html?mode=completion");
                return;
            }
            if (actionCallback) actionCallback();
        });
    },

    showLoginModal: function(actionCallback) {
        let modal = document.getElementById('authGuardModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'authGuardModal';
            modal.innerHTML = `
                <div style="position:fixed;inset:0;background:rgba(15,23,42,0.8);backdrop-filter:blur(5px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation: agFadeIn 0.3s ease;font-family:'Poppins',sans-serif;">
                    <div style="background:#fff;border-radius:24px;padding:40px 30px;max-width:420px;width:100%;text-align:center;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);border-top:4px solid #ff6b00;position:relative;">
                        <div style="width:64px;height:64px;background:rgba(255,107,0,0.1);color:#ff6b00;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 15px;">
                            🔐
                        </div>
                        <h2 style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:10px;">Login Required</h2>
                        <p style="color:#64748b;font-size:14px;margin-bottom:25px;line-height:1.6;">You must be logged in to attempt tests, save your progress, and view rankings.</p>
                        
                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:20px; margin-bottom:15px; text-align: left;">
                            <p style="font-size:13px; color:#475569; margin:0 0 12px 0; font-weight:600;">If you are a registered user</p>
                            <button id="agSignInBtn" style="width:100%;background:#0f172a;color:#fff;border:none;padding:12px;border-radius:10px;font-weight:700;font-size:15px;cursor:pointer;transition:all 0.2s; text-align: center;">
                                Sign In securely
                            </button>
                        </div>
                        
                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:20px; margin-bottom:20px; text-align: left;">
                            <p style="font-size:13px; color:#475569; margin:0 0 12px 0; font-weight:600;">If you don't have an account</p>
                            <button id="agRegisterBtn" style="width:100%;background:#fff;color:#c2410c;border:1px solid #c2410c;padding:12px;border-radius:10px;font-weight:700;font-size:15px;cursor:pointer;transition:all 0.2s; text-align: center;">
                                Register for free
                            </button>
                        </div>
                        
                        <button id="agCancelBtn" style="background:transparent;color:#475569;border:none;padding:10px;font-weight:600;font-size:14px;cursor:pointer;transition:0.2s;text-decoration:underline;">
                            Cancel and go back
                        </button>
                    </div>
                </div>
                <style>
                    @keyframes agFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                    #agSignInBtn:hover { background: #1e293b; transform: translateY(-1px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                    #agRegisterBtn:hover { background: #fff7ed; transform: translateY(-1px); box-shadow: 0 4px 6px rgba(194,65,12,0.15); }
                    #agCancelBtn:hover { color: #0f172a; }
                </style>
            `;
            document.body.appendChild(modal);

            document.getElementById('agSignInBtn').addEventListener('click', () => {
                sessionStorage.setItem("redirectAfterLogin", window.location.href);
                window.location.href = 'login.html';
            });

            document.getElementById('agRegisterBtn').addEventListener('click', () => {
                sessionStorage.setItem("redirectAfterLogin", window.location.href);
                window.location.href = 'signup.html';
            });

            document.getElementById('agCancelBtn').addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        modal.style.display = 'flex';
    },

    /**
     * Full-page protection guard.
     * Call at the top of any fully-authenticated page.
     * Checks: authenticated AND profile complete.
     * If not authenticated → redirects to login.html.
     * If profile incomplete → redirects to signup.html?mode=completion.
     */
    protectPage: function() {
        this.checkAuth(async (user) => {
            if (!user) {
                sessionStorage.setItem("redirectAfterLogin", window.location.href);
                window.location.replace("login.html");
                return;
            }
            // Check profile completion in Firestore
            const complete = await isProfileComplete(user.uid);
            if (!complete) {
                sessionStorage.setItem("redirectAfterLogin", window.location.href);
                window.location.replace("signup.html?mode=completion");
            }
        });
    }
};

window.AuthGuard = AuthGuard;