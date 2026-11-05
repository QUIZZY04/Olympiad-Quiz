/**
 * Generator for Class 11 Chemistry - Chapter 6: Equilibrium
 * NCERT Rationalised 2026-27 Syllabus - All 73 Verbatim Questions (6.1 to 6.73)
 * Strictly zero shortage, CBSE marking rubrics, custom SVG diagrams, offline cache.
 * NO PDF download button/bar (restricted to Physics Ch 7).
 */
const fs = require('fs');
const path = require('path');

const ch6Path = path.join(__dirname, '..', '..', 'chapters-c11c', 'ch6.html');
const cachePath = path.join(__dirname, '..', '..', 'chapters-c11c', 'chapters-data.js');

// High-fidelity custom SVG: Dynamic Equilibrium, Le Chatelier Shifts & Ionic Equilibrium pH Map
const svgDiagram = `
  <div style="margin:24px 0; background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2"><path d="M12 3v18M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4"/></svg>
      Chemical &amp; Ionic Equilibrium Master Framework: Le Chatelier Dynamics &amp; pH-Buffer-$K_{sp}$ Landscape
    </h3>
    <svg viewBox="0 0 780 260" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Panel 1: Dynamic Equilibrium & Le Chatelier Perturbation -->
      <rect x="15" y="15" width="375" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="30" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">1. Dynamic Reaction Rates &amp; Le Chatelier Response:</text>

      <!-- Rate vs Time Axes -->
      <line x1="45" y1="55" x2="45" y2="185" stroke="#334155" stroke-width="1.8"/>
      <line x1="45" y1="185" x2="225" y2="185" stroke="#334155" stroke-width="1.8"/>
      <text x="25" y="65" font-size="8.5" font-weight="bold" fill="#334155">Rate</text>
      <text x="220" y="200" font-size="8.5" font-weight="bold" fill="#334155">Time</text>

      <!-- Forward rate curve (starts high, decreases) -->
      <path d="M 45 70 C 85 110, 110 125, 145 125" fill="none" stroke="#dc2626" stroke-width="2.2"/>
      <text x="50" y="90" font-size="8" font-weight="bold" fill="#dc2626">r_f (Forward)</text>

      <!-- Reverse rate curve (starts zero, increases) -->
      <path d="M 45 185 C 85 140, 110 125, 145 125" fill="none" stroke="#2563eb" stroke-width="2.2"/>
      <text x="50" y="170" font-size="8" font-weight="bold" fill="#2563eb">r_b (Reverse)</text>

      <!-- Dynamic equilibrium line -->
      <line x1="145" y1="55" x2="145" y2="185" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="125" y="50" font-size="7.5" font-weight="bold" fill="#059669">Equilibrium: r_f = r_b</text>
      <line x1="145" y1="125" x2="180" y2="125" stroke="#059669" stroke-width="2.5"/>

      <!-- Perturbation spike (e.g., adding reactant) -->
      <line x1="180" y1="55" x2="180" y2="185" stroke="#d97706" stroke-width="1.2" stroke-dasharray="2,2"/>
      <text x="175" y="48" font-size="7.5" font-weight="bold" fill="#d97706">&uarr; Reactant</text>
      <path d="M 180 85 C 195 105, 205 115, 225 115" fill="none" stroke="#dc2626" stroke-width="2.2"/>
      <path d="M 180 125 C 195 120, 205 115, 225 115" fill="none" stroke="#2563eb" stroke-width="2.2"/>

      <!-- Formula Card Right -->
      <rect x="235" y="55" width="145" height="135" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <text x="245" y="73" font-size="8.5" font-weight="bold" fill="#065f46">Mass Action &amp; K_p / K_c:</text>
      <text x="245" y="88" font-size="7.8" fill="#334155">K_p = K_c (RT)^(&Delta;n_g)</text>
      <text x="245" y="105" font-size="8.5" font-weight="bold" fill="#065f46">Reaction Quotient Q:</text>
      <text x="245" y="119" font-size="7.5" fill="#334155">Q &lt; K &rarr; Shift Forward (&rarr;)</text>
      <text x="245" y="131" font-size="7.5" fill="#334155">Q &gt; K &rarr; Shift Reverse (&larr;)</text>
      <text x="245" y="148" font-size="8.5" font-weight="bold" fill="#065f46">Thermodynamics:</text>
      <text x="245" y="162" font-size="7.5" fill="#334155">&Delta;G&deg; = -2.303 RT log K</text>
      <text x="245" y="176" font-size="7.5" fill="#64748b">&Delta;G = &Delta;G&deg; + RT ln Q</text>

      <!-- Bottom Principle Note -->
      <text x="35" y="228" font-size="8" fill="#475569">&bull; Le Chatelier: System opposes stress (Pressure &uarr; favors fewer gas moles; Temp &uarr; favors endothermic).</text>

      <!-- Panel 2: Ionic Equilibrium, pH Scale, Buffers & K_sp -->
      <rect x="405" y="15" width="360" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="420" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">2. Ionic Equilibrium, Buffers &amp; Solubility ($K_{sp}$):</text>

      <!-- pH Color Bar (0 to 14) -->
      <defs>
        <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="25%" stop-color="#f97316"/>
          <stop offset="50%" stop-color="#eab308"/>
          <stop offset="60%" stop-color="#22c55e"/>
          <stop offset="75%" stop-color="#06b6d4"/>
          <stop offset="100%" stop-color="#3b82f6"/>
        </linearGradient>
      </defs>
      <rect x="420" y="55" width="330" height="18" rx="4" fill="url(#phGrad)"/>
      <text x="422" y="86" font-size="8" font-weight="bold" fill="#b91c1c">pH 0 (Acidic)</text>
      <text x="568" y="86" font-size="8" font-weight="bold" fill="#15803d">pH 7 (Neutral, K_w=10^-14)</text>
      <text x="700" y="86" font-size="8" font-weight="bold" fill="#1d4ed8">pH 14 (Basic)</text>

      <!-- 3 Key Mini Pillars: Ostwald / Buffer / Ksp -->
      <!-- Pillar A: Weak Acid & Ostwald -->
      <rect x="420" y="98" width="105" height="110" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <text x="426" y="112" font-size="8" font-weight="bold" fill="#065f46">Weak Electrolyte:</text>
      <text x="426" y="126" font-size="7.2" fill="#334155">K_a = C&alpha;&sup2; / (1-&alpha;)</text>
      <text x="426" y="140" font-size="7.2" fill="#334155">&alpha; &asymp; &radic;(K_a / C)</text>
      <text x="426" y="156" font-size="7.2" fill="#334155">[H&sdot;] = &radic;(K_a &times; C)</text>
      <text x="426" y="172" font-size="7.2" fill="#64748b">pH = &frac12;(pK_a - log C)</text>
      <text x="426" y="196" font-size="6.8" fill="#059669">Ostwald Dilution</text>

      <!-- Pillar B: Buffer Solutions -->
      <rect x="532" y="98" width="105" height="110" rx="5" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="538" y="112" font-size="8" font-weight="bold" fill="#065f46">Buffer Solutions:</text>
      <text x="538" y="126" font-size="7" font-weight="bold" fill="#047857">Acidic Buffer (HA + A&macr;):</text>
      <text x="538" y="140" font-size="7" fill="#064e3b">pH = pK_a + log[Salt]/[Acid]</text>
      <text x="538" y="156" font-size="7" font-weight="bold" fill="#047857">Basic Buffer (B + BH&sdot;):</text>
      <text x="538" y="170" font-size="7" fill="#064e3b">pOH = pK_b + log[Salt]/[Base]</text>
      <text x="538" y="196" font-size="6.8" fill="#047857">Henderson-Hasselbalch</text>

      <!-- Pillar C: Solubility Product K_sp -->
      <rect x="645" y="98" width="105" height="110" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <text x="651" y="112" font-size="8" font-weight="bold" fill="#065f46">Solubility K_sp:</text>
      <text x="651" y="126" font-size="7" fill="#334155">A_x B_y &rightleftharpoons; xA^(y+) + yB^(x-)</text>
      <text x="651" y="140" font-size="7.2" fill="#334155">K_sp = x^x y^y S^(x+y)</text>
      <text x="651" y="156" font-size="7" font-weight="bold" fill="#2563eb">Precipitation Rule:</text>
      <text x="651" y="170" font-size="7.2" fill="#b91c1c">Q_sp &gt; K_sp &rarr; PPT</text>
      <text x="651" y="184" font-size="7.2" fill="#15803d">Q_sp &le; K_sp &rarr; No PPT</text>
      <text x="651" y="198" font-size="6.8" fill="#64748b">Common Ion Suppresses S</text>

      <!-- Bottom Note -->
      <text x="420" y="228" font-size="8" fill="#475569">&bull; Salt Hydrolysis: Strong Acid + Weak Base &rarr; pH &lt; 7; Weak Acid + Strong Base &rarr; pH &gt; 7.</text>
    </svg>
  </div>
`;

// Helper function to build question objects
function createQ(id, ncertRef, marks, questionHtml, solutionStepsHtml, rubricRows) {
  return { id, ncertRef, marks, questionHtml, solutionStepsHtml, rubricRows };
}

// Data array for all 73 questions
const questions = [];

// Load question bank from modular sub-builders or embedded comprehensive list
console.log('Compiling 73 verbatim questions for Class 11 Chemistry Chapter 6...');

// Import questions data generator
const { getQuestions } = require('./c11c-ch6-data.js');
const allQData = getQuestions();
allQData.forEach(q => questions.push(q));

console.log(`Loaded ${questions.length} questions.`);
if (questions.length !== 73) {
  console.error(`ERROR: Expected 73 questions, got ${questions.length}!`);
  process.exit(1);
}

// Generate the complete HTML content
let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 11 Chemistry Chapter 6: Equilibrium (2026–27)</title>
  <meta name="description" content="100% Verbatim NCERT Solutions for Class 11 Chemistry Chapter 6: Equilibrium (Rationalised 2026-27). Complete step-by-step solutions for all 73 questions with CBSE marking rubrics.">
  <meta name="keywords" content="NCERT Solutions Class 11 Chemistry Chapter 6, Equilibrium, Kc and Kp, Le Chatelier principle, pH calculations, buffer solutions, solubility product Ksp, CBSE Class 11 Chemistry 2026-27">
  <link rel="canonical" href="https://olympiadquiz.org/chapters-c11c/ch6.html">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
  <script>
    window.MathJax = {
      tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']], displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']] },
      svg: { fontCache: 'global' }
    };
  </script>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
  <style>
    :root {
      --brand: #059669;
      --brand-hover: #047857;
      --brand-light: #ecfdf5;
      --brand-text: #065f46;
      --navy: #0f172a;
      --slate: #334155;
      --muted: #64748b;
      --border: #e2e8f0;
      --bg: #f8fafc;
      --shadow: 0 4px 16px rgba(0,0,0,0.06);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; background: var(--bg); color: #1e293b; line-height: 1.6; }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.08); position: sticky; top: 0; z-index: 900; }
    .navbar-inner { max-width: 1400px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .navbar-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .logo-text { font-size: 1.15rem; font-weight: 800; color: white; }
    .logo-text span { color: #34d399; }
    .navbar-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; padding: 6px 12px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: white; border: 1px solid #e2e8f0; border-radius: 10px; min-width: 250px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); z-index: 1000; padding: 6px; }
    .nav-dropdown-content a { display: block; padding: 8px 14px; color: #334155; text-decoration: none; font-size: 0.85rem; border-radius: 6px; transition: 0.2s; }
    .nav-dropdown-content a:hover { background: #f1f5f9; color: #0f172a !important; }
    .btn-login { background: var(--brand); color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; }
    .btn-login:hover { background: var(--brand-hover); }

    /* Breadcrumbs */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 12px 24px; }
    .bc-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 500; color: var(--muted); flex-wrap: wrap; }
    .bc-inner a { color: var(--slate); text-decoration: none; transition: 0.15s; }
    .bc-inner a:hover { color: var(--brand); }
    .bc-sep { color: #cbd5e1; font-weight: 400; }
    .bc-current { color: var(--brand-text); font-weight: 700; }

    /* Chapter Header Container */
    .content-wrap { max-width: 1400px; margin: 0 auto; padding: 32px 24px 60px; }
    .chapter-header { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 24px; border-bottom: 2px solid var(--border); padding-bottom: 24px; }
    .ch-badge { width: 56px; height: 56px; background: var(--brand); color: white; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 900; flex-shrink: 0; box-shadow: 0 4px 14px rgba(5,150,105,0.3); }
    .chapter-header-info h1 { font-size: 1.75rem; font-weight: 800; color: var(--navy); line-height: 1.25; margin-bottom: 6px; }
    .chapter-header-info p { color: var(--muted); font-size: 0.92rem; }
    .chapter-header-info .ch-category { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--brand-text); letter-spacing: 0.06em; margin-bottom: 2px; }

    /* Section divider */
    .ex-div { background: #f8fafc; border-left: 4px solid var(--brand); padding: 12px 18px; border-radius: 0 8px 8px 0; margin: 28px 0 20px; font-weight: 700; font-size: 0.88rem; color: var(--navy); }

    /* Question Cards */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 20px; box-shadow: var(--shadow); overflow: hidden; transition: all 0.2s ease; }
    .q-card:hover { border-color: #cbd5e1; box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
    .q-head { padding: 18px 22px; display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; cursor: pointer; user-select: none; background: #fff; }
    .q-head:hover { background: #fafafa; }
    .q-num { font-size: 0.85rem; font-weight: 800; color: var(--brand-text); background: var(--brand-light); padding: 4px 10px; border-radius: 6px; flex-shrink: 0; height: fit-content; }
    .q-text { font-size: 0.95rem; font-weight: 600; color: #1e293b; flex: 1; line-height: 1.55; }
    .q-marks { font-size: 0.8rem; font-weight: 700; color: var(--muted); background: #f1f5f9; padding: 4px 8px; border-radius: 6px; flex-shrink: 0; }
    .q-toggle { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; color: var(--muted); transition: transform 0.2s; flex-shrink: 0; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: var(--brand); }

    .q-answer { display: none; padding: 0 22px 22px; border-top: 1px solid #f1f5f9; }
    .q-card.open .q-answer { display: block; }

    .answer-box { background: #fdfdfd; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin-top: 14px; }
    .answer-label { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--brand); letter-spacing: 0.05em; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
    .answer-text { font-size: 0.93rem; color: #334155; line-height: 1.7; }
    .answer-text p { margin-bottom: 10px; }
    .answer-text ul, .answer-text ol { margin-left: 20px; margin-bottom: 10px; }
    .answer-text li { margin-bottom: 4px; }

    /* Marking scheme */
    .marking-scheme { margin-top: 16px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 12px 16px; }
    .marking-title { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #475569; letter-spacing: 0.05em; margin-bottom: 8px; }
    .marking-row { display: flex; justify-content: space-between; font-size: 0.82rem; color: #475569; padding: 3px 0; border-bottom: 1px solid #f1f5f9; }
    .marking-row:last-child { border-bottom: none; font-weight: 700; color: #1e293b; }
    .marking-key { flex: 1; }
    .marking-marks { font-weight: 700; color: var(--brand); }

    /* Interactive Toggle All */
    .action-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 12px; flex-wrap: wrap; }
    .btn-action { background: white; border: 1.5px solid var(--border); color: var(--slate); font-size: 0.82rem; font-weight: 700; padding: 8px 16px; border-radius: 8px; cursor: pointer; transition: 0.15s; display: inline-flex; align-items: center; gap: 6px; }
    .btn-action:hover { border-color: var(--brand); color: var(--brand); background: var(--brand-light); }

    /* Footer */
    footer { background: #0f172a; color: #94a3b8; padding: 48px 24px; text-align: center; font-size: 0.85rem; margin-top: 60px; border-top: 1px solid rgba(255,255,255,0.08); }
    footer a { color: #34d399; text-decoration: none; }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="../index.html" class="navbar-logo">
        <div class="logo-text">Olympiad<span>Quiz</span></div>
      </a>
      <div class="navbar-links">
        <a href="../index.html" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="../ncert-solutions.html" class="nav-link active">NCERT Solutions ▾</a>
          <div class="nav-dropdown-content">
            <a href="../ncert-solutions-class-11.html" style="font-weight:700; color:var(--brand);">Class 11 Hub</a>
            <a href="../ncert-solutions-class-11-maths.html">Class 11 Mathematics</a>
            <a href="../ncert-solutions-class-11-physics.html">Class 11 Physics</a>
            <a href="../ncert-solutions-class-11-chemistry.html" style="font-weight:700; color:#059669;">Class 11 Chemistry</a>
          </div>
        </div>
        <a href="../mock.html" class="nav-link">Mock Tests</a>
      </div>
      <div class="navbar-actions">
        <a href="../dashboard.html" class="btn-login">Dashboard</a>
      </div>
    </div>
  </nav>

  <!-- Breadcrumb Bar -->
  <div class="breadcrumb-bar">
    <div class="bc-inner">
      <a href="../index.html">Home</a>
      <span class="bc-sep">/</span>
      <a href="../ncert-solutions.html">NCERT Solutions</a>
      <span class="bc-sep">/</span>
      <a href="../ncert-solutions-class-11-chemistry.html">Class 11 Chemistry</a>
      <span class="bc-sep">/</span>
      <span class="bc-current">Chapter 6: Equilibrium</span>
    </div>
  </div>

  <!-- Content Wrap -->
  <div class="content-wrap">
    <!-- Chapter Header -->
    <div class="chapter-header">
      <div class="ch-badge">6</div>
      <div class="chapter-header-info">
        <div class="ch-category">Class 11 Chemistry &bull; Physical Chemistry</div>
        <h1>Chapter 6: Equilibrium</h1>
        <p>NCERT Rationalised 2026–27 Syllabus &bull; All 73 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="action-bar">
      <div>
        <span style="font-weight:700; color:var(--navy); font-size:0.92rem;">73 / 73 Questions</span> &bull;
        <span style="color:var(--muted); font-size:0.85rem;">Rationalised Syllabus Complete</span>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn-action" onclick="toggleAllCards(true)">Expand All</button>
        <button class="btn-action" onclick="toggleAllCards(false)">Collapse All</button>
      </div>
    </div>

    ${svgDiagram}

    <div class="ex-div">NCERT Textbook Exercise 6.1 to 6.73: Chemical Equilibrium, Law of Mass Action, $K_c$ &amp; $K_p$, Reaction Quotient $Q$, Le Chatelier's Principle, Ionic Equilibrium, Acids, Bases &amp; Salts, pH Calculations, Buffers &amp; Solubility Product ($K_{sp}$)</div>
`;

// Build Question Cards
questions.forEach(q => {
  let rubricHtml = '';
  q.rubricRows.forEach(r => {
    rubricHtml += `          <div class="marking-row"><span class="marking-key">${r.key}</span><span class="marking-marks">${r.marks}</span></div>\n`;
  });

  html += `
    <!-- ${q.id} (NCERT Exercise) -->
    <div class="q-card" id="${q.id}">
      <div class="q-head" onclick="toggleQ('${q.id}')">
        <div class="q-num">${q.ncertRef}</div>
        <div class="q-text">
          <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#ecfdf5; color:#059669; padding:2px 8px; border-radius:4px; margin-bottom:4px;">NCERT Exercise</span><br>
          ${q.questionHtml}
        </div>
        <div class="q-marks">[${q.marks}]</div>
        <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
      </div>
      <div class="q-answer">
        <div class="answer-box">
          <div class="answer-label">✅ CBSE Step-by-Step Solution</div>
          <div class="answer-text">
            ${q.solutionStepsHtml}
          </div>
          <div class="marking-scheme">
            <div class="marking-title">CBSE Marking Scheme Rubric (Session 2026–27)</div>
            ${rubricHtml}          </div>
        </div>
      </div>
    </div>
`;
});

html += `
  </div>

  <!-- Footer -->
  <footer>
    <p>&copy; 2026 OlympiadQuiz.org &bull; CBSE Class 11 Chemistry NCERT Solutions &bull; Empowering Conceptual Mastery</p>
  </footer>

  <script>
    function toggleQ(id) {
      const card = document.getElementById(id);
      if (card) {
        card.classList.toggle('open');
      }
    }

    function toggleAllCards(open) {
      document.querySelectorAll('.q-card').forEach(card => {
        if (open) card.classList.add('open');
        else card.classList.remove('open');
      });
    }
  </script>
</body>
</html>
`;

// Write ch6.html
fs.writeFileSync(ch6Path, html, 'utf8');
console.log(`Successfully generated: ${ch6Path} (${html.length} bytes)`);

// Append to cache chapters-data.js
const cacheLine = `\nwindow.CHAPTER_DATA[6] = ${JSON.stringify(html)};\n`;
fs.appendFileSync(cachePath, cacheLine, 'utf8');
console.log(`Appended Chapter 6 to preloaded cache: ${cachePath}`);
