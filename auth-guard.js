/**
 * Centralized Authentication System for Olympiad Portal
 * Protects test launches and features while keeping SEO pages strictly public.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB49W61ggHHJcAJ5WyYTmX13I8NofsggSY",
    authDomain: "olympiad-portal-d2a5e.firebaseapp.com",
    projectId: "olympiad-portal-d2a5e",
    storageBucket: "olympiad-portal-d2a5e.firebasestorage.app",
    messagingSenderId: "341855557503",
    appId: "1:341855557503:web:5cb0c3a9ee424a6db0ec4a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

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

export const AuthGuard = {
    checkAuth: function(callback) {
        if (isAuthReady) {
            callback(currentUser);
        } else {
            authCallbacks.push(callback);
        }
    },

    // Use this function on public HTML pages for "Start Test" buttons
    requireLogin: function(actionCallback) {
        if (localStorage.getItem("isLoggedIn") === "true") {
            if (actionCallback) actionCallback();
            return;
        }
        this.showLoginModal(actionCallback);
    },

    showLoginModal: function(actionCallback) {
        let modal = document.getElementById('authGuardModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'authGuardModal';
            modal.innerHTML = `
                <div style="position:fixed;inset:0;background:rgba(15,23,42,0.8);backdrop-filter:blur(5px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation: agFadeIn 0.3s ease;font-family:'Poppins',sans-serif;">
                    <div style="background:#fff;border-radius:24px;padding:40px;max-width:400px;width:100%;text-align:center;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 8px 10px -6px rgba(0,0,0,0.1);border-top:4px solid #ff6b00;position:relative;">
                        <button onclick="document.getElementById('authGuardModal').style.display='none'" style="position:absolute;top:20px;right:20px;background:none;border:none;font-size:24px;color:#64748b;cursor:pointer;line-height:1;">&times;</button>
                        <div style="width:64px;height:64px;background:rgba(255,107,0,0.1);color:#ff6b00;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 20px;">
                            🔐
                        </div>
                        <h2 style="font-size:24px;font-weight:800;color:#0f172a;margin-bottom:12px;">Login Required</h2>
                        <p style="color:#64748b;font-size:14px;margin-bottom:30px;line-height:1.6;">Create a free account to attempt tests, save your progress, view rankings, and track your performance.</p>
                        
                        <button id="agGoogleBtn" style="width:100%;background:#fff;color:#0f172a;border:1px solid #e2e8f0;padding:14px;border-radius:12px;font-weight:700;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:15px;transition:0.2s;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" style="width:20px;height:20px;" alt="Google"> Continue with Google
                        </button>
                        
                        <button id="agLoginBtn" style="width:100%;background:#0f172a;color:#fff;border:none;padding:14px;border-radius:12px;font-weight:700;font-size:15px;cursor:pointer;margin-bottom:15px;transition:0.2s;">
                            Login with Email
                        </button>
                        
                        <p style="font-size:14px;color:#64748b;margin:0;">
                            New here? <a href="signup.html" style="color:#ff6b00;font-weight:700;text-decoration:none;">Register</a>
                        </p>
                    </div>
                </div>
                <style>
                    @keyframes agFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                    #agGoogleBtn:hover { background: #f8fafc; border-color: #cbd5e1; }
                    #agLoginBtn:hover { background: #1e293b; }
                </style>
            `;
            document.body.appendChild(modal);

            document.getElementById('agGoogleBtn').addEventListener('click', async () => {
                const btn = document.getElementById('agGoogleBtn');
                btn.innerHTML = 'Signing in...';
                btn.style.opacity = '0.7';
                btn.style.pointerEvents = 'none';
                try {
                    const result = await signInWithPopup(auth, googleProvider);
                    if (result.user) {
                        modal.style.display = 'none';
                        if (actionCallback) actionCallback();
                        else window.location.reload();
                    }
                } catch (error) {
                    console.error("Google Sign-In Error:", error);
                    alert("Authentication failed. Please try again.");
                    btn.innerHTML = `<img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" style="width:20px;height:20px;"> Continue with Google`;
                    btn.style.opacity = '1';
                    btn.style.pointerEvents = 'auto';
                }
            });

            document.getElementById('agLoginBtn').addEventListener('click', () => {
                sessionStorage.setItem("redirectAfterLogin", window.location.href);
                window.location.href = 'login.html';
            });
        }
        modal.style.display = 'flex';
    },

    protectPage: function() {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            sessionStorage.setItem("redirectAfterLogin", window.location.href);
            window.location.replace("login.html");
        }
    }
};

window.AuthGuard = AuthGuard;