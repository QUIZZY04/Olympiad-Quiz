import { getApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

class OlympiadMentorChatbot {
    constructor() {
        this.db = null;
        this.auth = null;
        this.isOpen = false;
        this.mode = 'ai'; // 'ai' or 'live'
        this.liveChatDocId = null;
        this.hasWelcomed = sessionStorage.getItem('oq_cb_welcomed') === 'true';

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        // Wait slightly to ensure main app scripts have initialized Firebase
        setTimeout(() => {
            try {
                if (getApps().length > 0) {
                    const app = getApp();
                    this.db = getFirestore(app);
                    this.auth = getAuth(app);
                }
            } catch (e) {
                console.warn("Chatbot: Firebase not initialized properly. Support requests will run in offline fallback mode.");
            }
        }, 1500);

        this.injectCSS();
        this.injectHTML();
        this.bindEvents();

        // Delay the pulse badge to not distract immediately on page load
        setTimeout(() => {
            if (!this.isOpen && !this.hasWelcomed) {
                document.getElementById('oq-cb-badge').style.display = 'flex';
                document.getElementById('oq-cb-trigger').classList.add('oq-cb-pulse');
            }
        }, 5000);
    }

    injectCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
            :root {
                --oqcb-brand: #2563EB;
                --oqcb-accent: #7C3AED;
                --oqcb-bg: #f8fafc;
                --oqcb-surface: #ffffff;
                --oqcb-text: #0f172a;
                --oqcb-muted: #64748b;
                --oqcb-border: #e2e8f0;
                --oqcb-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
            #oq-cb-trigger {
            position: fixed; bottom: 25px; right: 25px; height: 60px; padding: 0 25px; gap: 10px;
            border-radius: 30px; background: linear-gradient(135deg, var(--oqcb-brand), var(--oqcb-accent));
                color: white; display: flex; align-items: center; justify-content: center;
            cursor: pointer; box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
                z-index: 99999; transition: transform 0.3s;
            }
            #oq-cb-trigger:hover { transform: scale(1.05); }
            .oq-cb-pulse { animation: oqCbPulseAnim 2s infinite; }
            #oq-wa-button {
                position: fixed; bottom: 100px; right: 25px; height: 52px; padding: 0 18px 0 14px; gap: 9px;
                border-radius: 26px; background: #25D366; display: flex; align-items: center; justify-content: center;
                cursor: pointer; box-shadow: 0 10px 25px rgba(37, 211, 102, 0.45);
                z-index: 99998; transition: transform 0.3s; text-decoration: none;
            }
            #oq-wa-button:hover { transform: scale(1.05); }
            #oq-wa-button svg { width: 26px; height: 26px; flex-shrink: 0; }
            #oq-wa-button span { color: white; font-weight: 600; font-size: 13.5px; white-space: nowrap; font-family: 'Poppins', sans-serif; }
            @media (max-width: 360px) {
                #oq-wa-button span { display: none; }
                #oq-wa-button { padding: 0; width: 52px; border-radius: 50%; }
            }
            @keyframes oqCbPulseAnim {
                0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.6); }
                70% { box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
                100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
            }
            #oq-cb-badge {
            position: absolute; top: -5px; right: -5px; background: #ef4444; color: white;
                font-size: 11px; font-weight: 800; width: 20px; height: 20px; border-radius: 50%;
                display: none; align-items: center; justify-content: center; font-family: sans-serif;
                border: 2px solid white;
            }
            #oq-cb-window {
            position: fixed; bottom: 0; right: 25px; width: 380px; max-height: 85vh; height: 600px;
            background: var(--oqcb-surface); border-radius: 24px 24px 0 0; box-shadow: var(--oqcb-shadow);
                display: none; flex-direction: column; z-index: 99999; border: 1px solid var(--oqcb-border);
                font-family: 'Poppins', sans-serif; overflow: hidden;
                transform-origin: bottom right; animation: cbScaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            @keyframes cbScaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            .oq-cb-header {
                background: linear-gradient(135deg, var(--oqcb-brand), var(--oqcb-accent)); color: white;
                padding: 20px; display: flex; justify-content: space-between; align-items: center;
            }
            .oq-cb-header-info { display: flex; align-items: center; gap: 12px; }
            .oq-cb-header-icon { font-size: 28px; background: rgba(255,255,255,0.2); padding: 8px; border-radius: 12px; }
            .oq-cb-header h4 { margin: 0; font-size: 16px; font-weight: 800; letter-spacing: 0.5px; }
            .oq-cb-header p { margin: 0; font-size: 11px; opacity: 0.9; font-weight: 500; }
            .oq-cb-close { background: none; border: none; color: white; font-size: 24px; cursor: pointer; transition: 0.2s; }
            .oq-cb-close:hover { transform: rotate(90deg); }
            
            .oq-cb-messages { flex: 1; padding: 20px; overflow-y: auto; background: var(--oqcb-bg); display: flex; flex-direction: column; gap: 15px; scroll-behavior: smooth; }
            
            .oq-msg { max-width: 85%; padding: 12px 16px; border-radius: 16px; font-size: 14px; line-height: 1.5; word-wrap: break-word; animation: msgFade 0.3s ease; }
            @keyframes msgFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .oq-msg-bot { background: white; color: var(--oqcb-text); align-self: flex-start; border-bottom-left-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); border: 1px solid var(--oqcb-border); }
            .oq-msg-user { background: var(--oqcb-brand); color: white; align-self: flex-end; border-bottom-right-radius: 4px; box-shadow: 0 2px 5px rgba(37,99,235,0.2); }
            
            .oq-cb-link { color: var(--oqcb-brand); font-weight: 700; text-decoration: underline; cursor: pointer; }
            
            .oq-cb-quick-actions { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
            .oq-cb-qa-group h5 { margin: 0 0 5px 0; font-size: 10px; color: var(--oqcb-muted); text-transform: uppercase; letter-spacing: 1px; }
            .oq-cb-qa-group button { 
                background: white; border: 1px solid var(--oqcb-brand); color: var(--oqcb-brand); 
                padding: 8px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; 
                cursor: pointer; transition: 0.2s; margin: 0 5px 5px 0; display: inline-block;
            }
            .oq-cb-qa-group button:hover { background: var(--oqcb-brand); color: white; }
            
            .oq-cb-input-area { padding: 15px; background: white; border-top: 1px solid var(--oqcb-border); display: flex; gap: 10px; }
            .oq-cb-input-area input { flex: 1; padding: 12px 15px; border-radius: 20px; border: 1px solid var(--oqcb-border); font-size: 14px; outline: none; background: var(--oqcb-bg); font-family: inherit; }
            .oq-cb-input-area input:focus { border-color: var(--oqcb-brand); }
            .oq-cb-send { background: var(--oqcb-brand); color: white; border: none; width: 45px; height: 45px; border-radius: 50%; font-size: 18px; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; }
            .oq-cb-send:hover { transform: scale(1.1); background: var(--oqcb-accent); }
            
            .oq-typing { display: none; padding: 12px 16px; background: white; border-radius: 16px; align-self: flex-start; border: 1px solid var(--oqcb-border); }
            .oq-dot { display: inline-block; width: 6px; height: 6px; background: var(--oqcb-muted); border-radius: 50%; margin: 0 2px; animation: cbTyping 1.4s infinite ease-in-out both; }
            .oq-dot:nth-child(1) { animation-delay: -0.32s; } .oq-dot:nth-child(2) { animation-delay: -0.16s; }
            @keyframes cbTyping { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }

            .cb-form input, .cb-form select, .cb-form textarea { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid var(--oqcb-border); border-radius: 8px; font-family: inherit; font-size: 13px;}
            .cb-form button { width: 100%; padding: 10px; background: var(--oqcb-brand); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }

            @media (max-width: 480px) {
                #oq-cb-window { bottom: 0; right: 0; width: 100%; height: 100dvh; max-height: 100dvh; border-radius: 0; border: none; }
                #oq-cb-trigger { bottom: 80px; } /* Above mobile footer */
                #oq-wa-button { bottom: 155px; } /* Stacked above mobile chat trigger */
            }
        `;
        document.head.appendChild(style);
    }

    injectHTML() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <a id="oq-wa-button" href="https://wa.me/919431813838?text=${encodeURIComponent("Hi")}" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp - Send Hi for details">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.258.594 4.428 1.72 6.35L3.2 28.8l6.62-1.686a12.74 12.74 0 0 0 6.181 1.586h.006c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.806-12.7zm0 23.36a10.53 10.53 0 0 1-5.37-1.47l-.385-.228-3.928 1.001 1.05-3.83-.25-.393a10.55 10.55 0 0 1-1.617-5.64c0-5.83 4.746-10.576 10.582-10.576 2.827 0 5.484 1.102 7.48 3.1a10.51 10.51 0 0 1 3.096 7.48c0 5.836-4.746 10.556-10.658 10.556zm5.79-7.914c-.317-.159-1.878-.927-2.169-1.033-.291-.106-.503-.159-.715.16-.212.317-.822 1.032-1.008 1.244-.185.212-.37.238-.688.08-.317-.16-1.34-.494-2.552-1.575-.943-.84-1.58-1.878-1.765-2.196-.185-.318-.02-.49.14-.648.143-.143.318-.37.476-.556.16-.185.212-.318.318-.53.106-.212.053-.397-.026-.556-.08-.16-.715-1.723-.98-2.36-.258-.62-.52-.536-.715-.546l-.61-.011c-.212 0-.556.08-.847.397-.291.318-1.111 1.086-1.111 2.65s1.138 3.072 1.297 3.284c.16.212 2.24 3.42 5.427 4.797.758.328 1.35.523 1.812.669.762.242 1.454.208 2.002.126.61-.091 1.878-.767 2.143-1.508.265-.74.265-1.375.185-1.508-.08-.132-.291-.212-.608-.37z"/></svg>
                <span>Send Hi for details</span>
            </a>
            <div id="oq-cb-trigger"><span style="font-size: 26px;">🧠</span> <span style="font-weight: 600; font-size: 15px; white-space: nowrap;">Chat with us</span><span id="oq-cb-badge">1</span></div>
            <div id="oq-cb-window">
                <div class="oq-cb-header">
                    <div class="oq-cb-header-info">
                        <div class="oq-cb-header-icon">🧠</div>
                        <div><h4>Olympiad Mentor AI</h4><p>Ask. Learn. Practice. Excel.</p></div>
                    </div>
                    <button id="oq-cb-close" class="oq-cb-close">&times;</button>
                </div>
                <div class="oq-cb-messages" id="oq-cb-messages">
                    <div class="oq-typing" id="oq-cb-typing"><span class="oq-dot"></span><span class="oq-dot"></span><span class="oq-dot"></span></div>
                </div>
                <div class="oq-cb-input-area">
                    <input type="text" id="oq-cb-input" placeholder="Ask me anything..." autocomplete="off"/>
                    <button id="oq-cb-send">➤</button>
                </div>
            </div>
        `;
        document.body.appendChild(wrapper);
        window.oqCb = this; // Expose for inline HTML handlers
    }

    bindEvents() {
        document.getElementById('oq-cb-trigger').addEventListener('click', () => this.toggleChat());
        document.getElementById('oq-cb-close').addEventListener('click', () => this.toggleChat());
        document.getElementById('oq-cb-send').addEventListener('click', () => this.handleUserSubmit());
        document.getElementById('oq-cb-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserSubmit();
        });
    }

    async toggleChat() {
        const win = document.getElementById('oq-cb-window');
        const trigger = document.getElementById('oq-cb-trigger');
        const badge = document.getElementById('oq-cb-badge');
        const waBtn = document.getElementById('oq-wa-button');

        if (this.isOpen) {
            win.style.display = 'none';
            trigger.style.display = 'flex';
            if (waBtn) waBtn.style.display = 'flex';
            this.isOpen = false;
        } else {
            win.style.display = 'flex';
            trigger.style.display = 'none';
            if (waBtn) waBtn.style.display = 'none';
            trigger.classList.remove('oq-cb-pulse');
            badge.style.display = 'none';
            this.isOpen = true;
            
            if (!this.hasWelcomed) {
                this.hasWelcomed = true;
                sessionStorage.setItem('oq_cb_welcomed', 'true');
                await this.showSmartGreeting();
            }
        }
    }

    showTyping() {
        const typing = document.getElementById('oq-cb-typing');
        const messages = document.getElementById('oq-cb-messages');
        messages.appendChild(typing);
        typing.style.display = 'block';
        messages.scrollTop = messages.scrollHeight;
    }

    hideTyping() {
        document.getElementById('oq-cb-typing').style.display = 'none';
    }

    addMessage(text, sender = 'bot') {
        const messages = document.getElementById('oq-cb-messages');
        const msgDiv = document.createElement('div');
        msgDiv.className = `oq-msg oq-msg-${sender}`;
        msgDiv.innerHTML = text;
        
        const typing = document.getElementById('oq-cb-typing');
        messages.insertBefore(msgDiv, typing);
        messages.scrollTop = messages.scrollHeight;
    }

    async showSmartGreeting() {
        this.showTyping();
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        let greeting = `👋 Welcome to <b>OlympiadQuiz.org</b>!<br><br>I'm Olympiad Mentor AI.<br>How can I help you excel today?`;
        let quickActionsHtml = `
            <div class="oq-cb-quick-actions">
                <div class="oq-cb-qa-group"><h5>PREPARATION & PRACTICE</h5>
                    <button onclick="window.oqCb.handleAction('Prepare for IMO')">📐 IMO</button>
                    <button onclick="window.oqCb.handleAction('Prepare for NSO')">🔬 NSO</button>
                    <button onclick="window.oqCb.handleAction('Free Mock Tests')">📝 Mocks</button>
                    <button onclick="window.oqCb.handleAction('Live Tests')">🏆 Live Arena</button>
                </div>
                <div class="oq-cb-qa-group"><h5>GUIDANCE & SUPPORT</h5>
                    <button onclick="window.oqCb.handleAction('Create Study Plan')">🎯 Study Plan</button>
                    <button onclick="window.oqCb.handleAction('Analyze My Performance')">📊 My Performance</button>
                    <button onclick="window.oqCb.handleAction('Live Chat with Expert')">💬 Live Chat</button>
                    <button onclick="window.oqCb.handleAction('Request Callback')">📞 Callback</button>
                </div>
            </div>`;

        if (isLoggedIn && this.auth && this.auth.currentUser && this.db) {
            try {
                const q = query(collection(this.db, "leaderboard"), where("uid", "==", this.auth.currentUser.uid));
                const snap = await getDocs(q);
                const completed = snap.size;
                const name = this.auth.currentUser.displayName || "Student";
                greeting = `👋 Welcome back, <b>${name}</b>!<br>You have completed <b>${completed}</b> tests so far.<br><br><b>Recommended Next Step:</b> Try a Chapter-wise test to fix weak spots.`;
            } catch (e) { /* fallback to standard greeting */ }
        }

        setTimeout(() => {
            this.hideTyping();
            this.addMessage(greeting + quickActionsHtml, 'bot');
        }, 1000);
    }

    handleAction(action) {
        this.addMessage(action, 'user');
        this.processInput(action.toLowerCase());
    }

    handleUserSubmit() {
        const input = document.getElementById('oq-cb-input');
        const text = input.value.trim();
        if (!text) return;
        
        input.value = '';
        this.addMessage(text, 'user');

        if (this.mode === 'live') {
            this.sendToLiveChat(text);
        } else {
            this.processInput(text.toLowerCase());
        }
    }

    processInput(text) {
        this.showTyping();
        setTimeout(() => {
            this.hideTyping();
            let response = "";

            const escalationKeywords = ['payment','refund','technical','login','contact support','human','expert','mentor','administrator','call me','account', 'callback', 'message'];
            const greetingKeywords = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'how are you', 'hii', 'namaste', 'hola'];
            
            if (escalationKeywords.some(kw => text.includes(kw)) || text.includes('chat')) {
                if (text.includes('request callback') || text.includes('call me')) {
                    this.renderCallbackForm(); return;
                } else if (text.includes('leave message') || text.includes('message')) {
                    this.renderMessageForm(); return;
                } else if (text.includes('live chat') || text.includes('human')) {
                    this.startLiveChat(); return;
                } else {
                    response = `<p>I can connect you with our support team. Please choose an option:</p>
                    <div class="oq-cb-qa-group">
                        <button onclick="window.oqCb.handleAction('Live Chat with Expert')">💬 Live Chat</button>
                        <button onclick="window.oqCb.handleAction('Request Callback')">📞 Request Callback</button>
                        <button onclick="window.oqCb.handleAction('Leave Message')">📧 Leave Message</button>
                    </div>`;
                }
            } else if (greetingKeywords.some(kw => text === kw || text.startsWith(kw + ' ') || text.endsWith(' ' + kw))) {
                const hour = new Date().getHours();
                let timeGreeting = "Hello there!";
                if (hour < 12) timeGreeting = "Good morning!";
                else if (hour < 17) timeGreeting = "Good afternoon!";
                else timeGreeting = "Good evening!";
                
                response = `👋 ${timeGreeting} I am your Olympiad Mentor AI.<br><br>How can I help you today? You can ask me about:<br>• Free Mock Tests<br>• Olympiads (IMO, NSO, etc.)<br>• JEE & NEET preparation<br>• Study Plans & Strategy`;
            } else if (text.includes('imo') || text.includes('maths')) {
                response = `The <b>International Mathematics Olympiad (IMO)</b> is a prestigious exam that tests your mathematical and logical reasoning skills.<br><br><b>To excel in IMO, you should:</b><br>1. Master your school syllabus.<br>2. Practice High-Order Thinking (H.O.T.S) questions.<br>3. Take timed mock tests.<br><br>We have a huge collection of chapter-wise quizzes and full-length mock tests to help you prepare.<br><br><a href="imo-free-mock-test.html" class="oq-cb-link">Start IMO Practice 🚀</a>`;
            } else if (text.includes('nso') || text.includes('science')) {
                response = `The <b>National Science Olympiad (NSO)</b> evaluates your conceptual understanding of Physics, Chemistry, and Biology (or general science).<br><br><b>Key to success:</b> Understand the 'Why' behind every scientific phenomenon and practice application-based questions.<br><br>Try our comprehensive NSO mock tests and detailed analytics to boost your score!<br><br><a href="nso-free-mock-test.html" class="oq-cb-link">Start NSO Practice 🔬</a>`;
            } else if (text.includes('ieo') || text.includes('english')) {
                response = `The <b>International English Olympiad (IEO)</b> focuses on grammar, vocabulary, and reading comprehension.<br><br><b>Preparation Tips:</b><br>1. Read English newspapers or storybooks daily.<br>2. Practice tenses and prepositions.<br>3. Attempt our chapter-wise grammar quizzes.<br><br><a href="ieo-free-mock-test.html" class="oq-cb-link">Start IEO Practice 📚</a>`;
            } else if (text.includes('igko') || text.includes('gk') || text.includes('general knowledge')) {
                response = `The <b>International General Knowledge Olympiad (IGKO)</b> covers current affairs, life skills, and general awareness.<br><br><b>How to Prepare:</b><br>Stay updated with recent events and practice our comprehensive mock tests to boost your confidence.<br><br><a href="igko-free-mock-test.html" class="oq-cb-link">Start IGKO Practice 🌍</a>`;
            } else if (text.includes('syllabus')) {
                response = `Our syllabus is strictly aligned with the latest guidelines from SOF, SilverZone, and other major Olympiad bodies.<br><br><b>Quick Links:</b><br>• <a href="sof-syllabus.html" class="oq-cb-link">SOF Syllabus</a><br>• <a href="silverzone-syllabus.html" class="oq-cb-link">SilverZone Syllabus</a><br>• <a href="crest-syllabus.html" class="oq-cb-link">CREST Syllabus</a><br><br>Select a specific subject if you want more details!`;
            } else if (text.includes('study plan') || text.includes('plan')) {
                response = `Here is a highly effective <b>30-Day Master Study Plan</b> for competitive exams:<br><br><ul><li><b>Phase 1 (Days 1-10) - Foundation:</b> Focus purely on clearing basic concepts using NCERT and our Study Material section.</li><li><b>Phase 2 (Days 11-20) - Targeted Practice:</b> Take chapter-wise quizzes to identify weak spots.</li><li><b>Phase 3 (Days 21-25) - PYQs:</b> Solve Previous Year Questions to understand the exam pattern.</li><li><b>Phase 4 (Days 26-30) - Exam Simulation:</b> Attempt full-length Mock Tests with a strict timer. Review every mistake!</li></ul>`;
            } else if (text.includes('improve') || text.includes('performance') || text.includes('score') || text.includes('analyze')) {
                response = `To significantly improve your score and rank, follow this strategy:<br><br>1. <b>Analyze:</b> Check your Dashboard analytics to pinpoint exact weak chapters.<br>2. <b>Target:</b> Practice those specific chapters in our Chapter-wise section.<br>3. <b>Review:</b> Never skip the detailed solutions after a test—understanding your mistakes is how you grow.<br>4. <b>Compete:</b> Participate in Live Arenas to build exam temperament.<br><br><a href="chapterwise.html" class="oq-cb-link">Start Chapter-wise Practice 🎯</a>`;
            } else if (text.includes('suggestion') || text.includes('tips') || text.includes('strategy')) {
                response = `Here are some general <b>Pro Tips</b> for cracking any competitive exam:<br><br>1. <b>Consistency:</b> Practice for at least 30-45 minutes daily.<br>2. <b>Analyze:</b> Always review your mistakes after taking a mock test.<br>3. <b>Time Management:</b> Use a timer while solving chapter-wise questions.<br>4. <b>Concepts First:</b> Clear your basic concepts before jumping to complex H.O.T.S problems.<br><br>Would you like a study plan? Just type <b>"Study Plan"</b>!`;
            } else if (text.includes('mock test') || text.includes('practice')) {
                response = `We offer an extensive library of <b>100% Free Mock Tests</b> for IMO, NSO, IEO, IGKO, JEE, and NEET.<br><br>Our mock tests feature an authentic CBT (Computer Based Test) interface, instant performance analytics, and detailed step-by-step solutions for every question.<br><br><a href="mock.html" class="oq-cb-link">Explore Mock Tests 📝</a>`;
            } else if (text.includes('live test') || text.includes('arena')) {
                response = `Our <b>Live Quiz Arena</b> is the ultimate battleground! 🏆<br><br>It allows you to compete nationally in real-time against thousands of students. You get an <b>All India Rank (AIR)</b>, percentile score, and a participation certificate upon completion.<br><br><a href="live.html" class="oq-cb-link">Join the Live Arena ⚡</a>`;
            } else if (text.includes('jee') || text.includes('neet')) {
                response = `We have dedicated, high-quality CBT mock tests for <b>JEE Main, JEE Advanced, and NEET</b>, strictly based on the latest NTA/NMC syllabus.<br><br>You'll find full syllabus mocks, chapter-wise practice, and Previous Year Questions (PYQs) to accelerate your prep.<br><br><a href="jee_main.html" class="oq-cb-link">Explore JEE Main 📐</a> | <a href="neet.html" class="oq-cb-link">Explore NEET ⚕️</a>`;
            } else {
                response = `I may not have accurate information for this query. Would you like to connect with an expert?<br>
                <div class="oq-cb-qa-group" style="margin-top:10px;">
                    <button onclick="window.oqCb.handleAction('Live Chat with Expert')">💬 Live Chat</button>
                    <button onclick="window.oqCb.handleAction('Request Callback')">📞 Request Callback</button>
                </div>`;
            }

            this.addMessage(response, 'bot');
            
            if (Math.random() > 0.8) {
                setTimeout(() => this.addMessage(`Would you like free Olympiad updates and preparation tips?<br><a href="signup.html" class="oq-cb-link">Subscribe for Free</a>`, 'bot'), 2000);
            }
        }, 1200);
    }

    renderCallbackForm() {
        const formHtml = `
        <div class="cb-form">
            <p style="margin-top:0; font-weight:bold;">Request a Callback</p>
            <input type="text" id="cb-f-name" placeholder="Your Name" required/>
            <input type="tel" id="cb-f-mobile" placeholder="Mobile Number" required/>
            <select id="cb-f-time">
                <option value="Morning">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening">Evening (4 PM - 7 PM)</option>
            </select>
            <select id="cb-f-cat">
                <option value="Olympiad Guidance">Olympiad Guidance</option>
                <option value="Payment Issue">Payment Issue</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Other">Other</option>
            </select>
            <button onclick="window.oqCb.submitCallback()">Submit Request</button>
        </div>`;
        this.addMessage(formHtml, 'bot');
    }

    async submitCallback() {
        const name = document.getElementById('cb-f-name').value;
        const mobile = document.getElementById('cb-f-mobile').value;
        if (!name || !mobile) { alert("Name and mobile are required."); return; }
        try {
            if(!this.db) throw new Error("DB not connected");
            await addDoc(collection(this.db, "support_callbacks"), {
                name, mobile, preferredTime: document.getElementById('cb-f-time').value,
                category: document.getElementById('cb-f-cat').value, status: "pending", timestamp: serverTimestamp()
            });
            this.addMessage("✅ Your callback request has been submitted. Our experts will reach out soon.", "bot");
        } catch(e) { this.addMessage("❌ Failed to submit. Our offline system caught an error.", "bot"); }
    }

    renderMessageForm() {
        const formHtml = `
        <div class="cb-form">
            <p style="margin-top:0; font-weight:bold;">Leave a Message</p>
            <input type="text" id="cb-m-name" placeholder="Your Name" required/>
            <input type="email" id="cb-m-email" placeholder="Email Address" required/>
            <input type="text" id="cb-m-sub" placeholder="Subject" required/>
            <textarea id="cb-m-msg" placeholder="Your Message..." rows="3" required></textarea>
            <button onclick="window.oqCb.submitMessage()">Send Message</button>
        </div>`;
        this.addMessage(formHtml, 'bot');
    }

    async submitMessage() {
        const name = document.getElementById('cb-m-name').value;
        const email = document.getElementById('cb-m-email').value;
        const msg = document.getElementById('cb-m-msg').value;
        if (!name || !email || !msg) { alert("Please fill all fields."); return; }
        try {
            if(!this.db) throw new Error("DB not connected");
            await addDoc(collection(this.db, "support_messages"), {
                name, email, subject: document.getElementById('cb-m-sub').value,
                message: msg, status: "pending", timestamp: serverTimestamp()
            });
            this.addMessage("✅ Your message has been sent to our support team.", "bot");
        } catch(e) { this.addMessage("❌ Failed to send message.", "bot"); }
    }

    async startLiveChat() {
        const hour = new Date().getHours();
        if (hour < 9 || hour > 18) {
            this.addMessage("Our support team is currently offline (Available 9 AM - 6 PM). Please leave a message or request a callback.", "bot");
            this.renderMessageForm();
            return;
        }
        
        this.mode = 'live';
        this.addMessage("Connecting you to a human expert... You can start typing your query.", "bot");
        try {
            if(!this.db) return;
            const docRef = await addDoc(collection(this.db, "support_chats"), {
                userId: this.auth?.currentUser?.uid || 'anonymous',
                name: this.auth?.currentUser?.displayName || 'Student',
                email: this.auth?.currentUser?.email || 'N/A',
                status: "open", timestamp: serverTimestamp()
            });
            this.liveChatDocId = docRef.id;
        } catch(e) { console.warn("Could not initiate live chat session in DB."); }
    }

    async sendToLiveChat(text) {
        if (this.liveChatDocId && this.db) {
            try {
                await addDoc(collection(this.db, `support_chats/${this.liveChatDocId}/messages`), {
                    sender: 'user', text: text, timestamp: serverTimestamp()
                });
                setTimeout(() => this.addMessage("<i>An agent will reply shortly...</i>", "bot"), 1500);
            } catch(e) { }
        } else {
            // Fallback if db connectivity drops
            setTimeout(() => this.addMessage("<i>Our agents are currently busy. Please leave a message.</i>", "bot"), 1500);
            this.mode = 'ai';
        }
    }
}

// Initialize the Chatbot globally
new OlympiadMentorChatbot();