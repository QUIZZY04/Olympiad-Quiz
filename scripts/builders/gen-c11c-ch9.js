/**
 * Generator for Class 11 Chemistry - Chapter 9: Hydrocarbons
 * NCERT Rationalised 2026-27 Syllabus - All 25 Verbatim Questions (9.1 to 9.25)
 * Strictly zero shortage, CBSE marking rubrics, custom SVG diagrams, offline cache.
 * NO PDF download button/bar (restricted to Physics Ch 7).
 */
const fs = require('fs');
const path = require('path');

const ch9Path = path.join(__dirname, '..', '..', 'chapters-c11c', 'ch9.html');
const cachePath = path.join(__dirname, '..', '..', 'chapters-c11c', 'chapters-data.js');

// High-fidelity custom SVG: Ethane Conformations, Markovnikov Addition & SEAr Mechanism
const svgDiagram = `
  <div style="margin:24px 0; background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      Hydrocarbon Mechanics: Ethane Conformations, Markovnikov/Peroxide Regiochemistry &amp; S<sub>E</sub>Ar Mechanism
    </h3>
    <svg viewBox="0 0 780 260" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Panel 1: Conformational Isomerism of Ethane -->
      <rect x="15" y="15" width="375" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="30" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">1. Ethane Conformations &amp; Torsional Energy:</text>

      <!-- Newman Staggered & Eclipsed Diagrams -->
      <g transform="translate(30, 48)">
        <!-- Eclipsed Box -->
        <rect x="0" y="0" width="165" height="180" rx="5" fill="#fff" stroke="#e2e8f0"/>
        <text x="12" y="18" font-size="8.8" font-weight="bold" fill="#dc2626">Eclipsed Form (&theta; = 0&deg;):</text>
        <circle cx="82" cy="76" r="32" fill="none" stroke="#dc2626" stroke-width="2"/>
        <!-- Front Y -->
        <line x1="82" y1="76" x2="82" y2="44" stroke="#1e293b" stroke-width="2"/>
        <line x1="82" y1="76" x2="54" y2="92" stroke="#1e293b" stroke-width="2"/>
        <line x1="82" y1="76" x2="110" y2="92" stroke="#1e293b" stroke-width="2"/>
        <text x="80" y="40" font-size="7.5" font-weight="bold" fill="#1e293b">H</text>
        <text x="44" y="98" font-size="7.5" font-weight="bold" fill="#1e293b">H</text>
        <text x="114" y="98" font-size="7.5" font-weight="bold" fill="#1e293b">H</text>
        <!-- Rear lines slightly offset for visibility -->
        <line x1="82" y1="76" x2="86" y2="43" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="2,2"/>
        <line x1="82" y1="76" x2="57" y2="96" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="2,2"/>
        <line x1="82" y1="76" x2="113" y2="88" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="2,2"/>
        <text x="8" y="126" font-size="7.5" fill="#b91c1c">&bull; Max torsional strain</text>
        <text x="8" y="140" font-size="7.5" fill="#b91c1c">&bull; Potential energy peak</text>
        <text x="8" y="156" font-size="8" font-weight="bold" fill="#991b1b">&Delta;E = +12.55 kJ/mol</text>
        <text x="8" y="170" font-size="7" fill="#64748b">(Repulsion of C-H pairs)</text>
      </g>

      <g transform="translate(205, 48)">
        <!-- Staggered Box -->
        <rect x="0" y="0" width="175" height="180" rx="5" fill="#fff" stroke="#e2e8f0"/>
        <text x="12" y="18" font-size="8.8" font-weight="bold" fill="#059669">Staggered Form (&theta; = 60&deg;):</text>
        <circle cx="87" cy="76" r="32" fill="none" stroke="#059669" stroke-width="2"/>
        <!-- Front Y -->
        <line x1="87" y1="76" x2="87" y2="44" stroke="#1e293b" stroke-width="2"/>
        <line x1="87" y1="76" x2="59" y2="92" stroke="#1e293b" stroke-width="2"/>
        <line x1="87" y1="76" x2="115" y2="92" stroke="#1e293b" stroke-width="2"/>
        <text x="85" y="40" font-size="7.5" font-weight="bold" fill="#1e293b">H</text>
        <text x="49" y="98" font-size="7.5" font-weight="bold" fill="#1e293b">H</text>
        <text x="119" y="98" font-size="7.5" font-weight="bold" fill="#1e293b">H</text>
        <!-- Rear inverted Y -->
        <line x1="87" y1="76" x2="87" y2="108" stroke="#059669" stroke-width="2"/>
        <line x1="87" y1="76" x2="59" y2="60" stroke="#059669" stroke-width="2"/>
        <line x1="87" y1="76" x2="115" y2="60" stroke="#059669" stroke-width="2"/>
        <text x="85" y="118" font-size="7.5" font-weight="bold" fill="#059669">H</text>
        <text x="49" y="58" font-size="7.5" font-weight="bold" fill="#059669">H</text>
        <text x="119" y="58" font-size="7.5" font-weight="bold" fill="#059669">H</text>
        <text x="8" y="132" font-size="7.5" fill="#065f46">&bull; Min torsional repulsion</text>
        <text x="8" y="146" font-size="7.5" fill="#065f46">&bull; Max C-H bond distance</text>
        <text x="8" y="160" font-size="8" font-weight="bold" fill="#047857">&bull; Most stable conformation</text>
        <text x="8" y="172" font-size="7" fill="#64748b">(99%+ ethane at 298 K)</text>
      </g>

      <!-- Panel 2: Alkene Regiochemistry & SEAr Mechanism -->
      <rect x="405" y="15" width="360" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="420" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">2. Alkene Addition &amp; S<sub>E</sub>Ar Aromatic Substitution:</text>

      <!-- Markovnikov vs Anti-Markovnikov box -->
      <rect x="420" y="52" width="330" height="82" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <text x="428" y="68" font-size="8.4" font-weight="bold" fill="#2563eb">Addition to Propene (CH_3-CH=CH_2 + HBr):</text>
      <!-- Markovnikov -->
      <text x="428" y="84" font-size="7.5" font-weight="bold" fill="#1e40af">&bull; Without Peroxide (Markovnikov):</text>
      <text x="438" y="97" font-size="7.2" fill="#334155">&rarr; CH_3-CH(Br)-CH_3 (2-Bromopropane) via stable 2&deg; carbocation</text>
      <!-- Anti-Markovnikov -->
      <text x="428" y="112" font-size="7.5" font-weight="bold" fill="#c026d3">&bull; With Benzoyl Peroxide (Kharasch Effect):</text>
      <text x="438" y="125" font-size="7.2" fill="#334155">&rarr; CH_3-CH_2-CH_2Br (1-Bromopropane) via stable 2&deg; free radical</text>

      <!-- SEAr Mechanism Box -->
      <rect x="420" y="142" width="330" height="92" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <text x="428" y="158" font-size="8.4" font-weight="bold" fill="#d97706">Electrophilic Aromatic Substitution (S_EAr):</text>
      <text x="428" y="172" font-size="7.4" fill="#334155"><b>Step 1:</b> Electrophile generation (Cl_2 + FeCl_3 &rarr; Cl^+ + FeCl_4^-)</text>
      <text x="428" y="188" font-size="7.4" fill="#334155"><b>Step 2:</b> Attack of E^+ &rarr; Arenium ion / &sigma;-complex (Resonance stabilized)</text>
      <text x="428" y="204" font-size="7.4" fill="#334155"><b>Step 3:</b> Loss of H^+ to base FeCl_4^- &rarr; Aromatic sextet restored + HCl</text>
      <text x="428" y="222" font-size="7.8" font-weight="bold" fill="#059669">&bull; Activating/o,p-directors: -OH, -NH_2, -CH_3 | Deactivating/m-directors: -NO_2, -COOH</text>
    </svg>
  </div>
`;

// Import questions data generator
console.log('Compiling 25 verbatim questions for Class 11 Chemistry Chapter 9...');
const { getQuestions } = require('./c11c-ch9-data.js');
const questions = getQuestions();

console.log(`Loaded ${questions.length} questions.`);
if (questions.length !== 25) {
  console.error(`ERROR: Expected 25 questions, got ${questions.length}!`);
  process.exit(1);
}

// Generate the complete HTML content
let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 11 Chemistry Chapter 9: Hydrocarbons (2026–27)</title>
  <meta name="description" content="100% Verbatim NCERT Solutions for Class 11 Chemistry Chapter 9: Hydrocarbons (Rationalised 2026-27). Complete step-by-step solutions for all 25 questions with CBSE marking rubrics.">
  <meta name="keywords" content="NCERT Solutions Class 11 Chemistry Chapter 9, Hydrocarbons, Alkanes, Alkenes, Alkynes, Benzene, Markovnikov Rule, Kharasch Effect, Ozonolysis, Friedel-Crafts, CBSE Class 11 Chemistry 2026-27">
  <link rel="canonical" href="https://olympiadquiz.org/chapters-c11c/ch9.html">
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
    .q-head { padding: 18px 22px; cursor: pointer; display: flex; align-items: flex-start; gap: 16px; user-select: none; background: #fff; transition: background 0.15s; }
    .q-head:hover { background: #fcfdfd; }
    .q-num { font-size: 0.88rem; font-weight: 800; color: var(--brand); background: var(--brand-light); padding: 4px 12px; border-radius: 8px; flex-shrink: 0; border: 1px solid rgba(5,150,105,0.2); }
    .q-text { flex: 1; font-size: 0.95rem; font-weight: 600; color: var(--navy); line-height: 1.5; }
    .q-marks { font-size: 0.8rem; font-weight: 700; color: var(--muted); background: #f1f5f9; padding: 4px 10px; border-radius: 6px; flex-shrink: 0; }
    .q-toggle { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f1f5f9; color: var(--slate); flex-shrink: 0; transition: transform 0.2s ease; }
    .q-toggle svg { width: 14px; height: 14px; }
    .q-card.open .q-toggle { transform: rotate(45deg); background: #fee2e2; color: #dc2626; }

    /* Answer Body */
    .q-answer { display: none; padding: 0 22px 22px; border-top: 1px solid #f1f5f9; background: #fafbfc; }
    .q-card.open .q-answer { display: block; animation: slideDown 0.25s ease-out; }
    @keyframes slideDown { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }

    .answer-box { background: white; border: 1px solid var(--border); border-radius: 10px; padding: 20px; margin-top: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.02); }
    .answer-label { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--brand); margin-bottom: 12px; display: flex; align-items: center; gap: 6px; }
    .answer-text { font-size: 0.92rem; color: var(--slate); line-height: 1.65; }
    .answer-text p { margin-bottom: 12px; }
    .answer-text ul, .answer-text ol { margin-left: 20px; margin-bottom: 12px; }
    .answer-text li { margin-bottom: 6px; }

    /* Marking Scheme */
    .marking-scheme { margin-top: 18px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 14px 18px; }
    .marking-title { font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; margin-bottom: 10px; }
    .marking-row { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid #e2e8f0; font-size: 0.84rem; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); }
    .marking-marks { font-weight: 700; color: var(--brand); }

    /* Controls bar */
    .controls-bar { display: flex; justify-content: space-between; align-items: center; margin: 20px 0; flex-wrap: wrap; gap: 12px; }
    .btn-toggle-all { background: white; border: 1px solid var(--border); padding: 8px 16px; border-radius: 8px; font-size: 0.84rem; font-weight: 600; color: var(--slate); cursor: pointer; transition: 0.15s; }
    .btn-toggle-all:hover { background: #f8fafc; border-color: #cbd5e1; }

    /* Footer */
    footer { background: #0f172a; color: #94a3b8; text-align: center; padding: 32px 24px; font-size: 0.85rem; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 60px; }
    footer p { margin-bottom: 8px; }
  </style>
</head>
<body>
  <!-- Navbar -->
  <header class="navbar">
    <div class="navbar-inner">
      <a href="../index.html" class="navbar-logo">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <div class="logo-text">Olympiad<span>Quiz</span></div>
      </a>
      <nav class="navbar-links">
        <a href="../ncert-solutions-class-11-chemistry.html" class="nav-link">Class 11 Chemistry Portal</a>
        <div class="nav-dropdown">
          <a href="#" class="nav-link">Select Chapter &#9662;</a>
          <div class="nav-dropdown-content">
            <a href="ch1.html">Ch 1: Some Basic Concepts</a>
            <a href="ch2.html">Ch 2: Structure of Atom</a>
            <a href="ch3.html">Ch 3: Classification of Elements</a>
            <a href="ch4.html">Ch 4: Chemical Bonding</a>
            <a href="ch5.html">Ch 5: Chemical Thermodynamics</a>
            <a href="ch6.html">Ch 6: Equilibrium</a>
            <a href="ch7.html">Ch 7: Redox Reactions</a>
            <a href="ch8.html">Ch 8: Organic Chemistry Principles</a>
            <a href="ch9.html"><b>Ch 9: Hydrocarbons</b></a>
          </div>
        </div>
        <a href="../index.html" class="btn-login">Home</a>
      </nav>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <div class="breadcrumb-bar">
    <div class="bc-inner">
      <a href="../index.html">Home</a>
      <span class="bc-sep">&rsaquo;</span>
      <a href="../ncert-solutions-class-11-chemistry.html">Class 11 Chemistry</a>
      <span class="bc-sep">&rsaquo;</span>
      <span class="bc-current">Chapter 9: Hydrocarbons</span>
    </div>
  </div>

  <div class="content-wrap">
    <!-- Chapter Header -->
    <div class="chapter-header">
      <div class="ch-badge">9</div>
      <div class="chapter-header-info">
        <div class="ch-category">CBSE Class 11 Chemistry &bull; Chapter 9</div>
        <h1>Hydrocarbons</h1>
        <p>NCERT Rationalised 2026–27 Syllabus &bull; All 25 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
      </div>
    </div>

    <!-- High-Fidelity SVG Diagram -->
    ${svgDiagram}

    <!-- Exercise Divider & Controls -->
    <div class="controls-bar">
      <div class="ex-div" style="margin:0;">NCERT Textbook Exercise 9.1 to 9.25: Alkanes, Conformations, Alkenes, Alkynes &amp; Aromatic Hydrocarbons</div>
      <div>
        <button class="btn-toggle-all" onclick="toggleAllCards(true)">Expand All Solutions</button>
        <button class="btn-toggle-all" onclick="toggleAllCards(false)">Collapse All</button>
      </div>
    </div>
`;

// Append Question Cards
questions.forEach((q) => {
  const rubricHtml = q.rubricRows.map(r => `
          <div class="marking-row">
            <span class="marking-key">${r.key}</span>
            <span class="marking-marks">${r.marks}</span>
          </div>`).join('');

  html += `
    <!-- ${q.id} (NCERT Exercise) -->
    <div class="q-card" id="${q.id}">
      <div class="q-head" onclick="toggleQ('${q.id}')">
        <div class="q-num">Question ${q.ncertRef}</div>
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

// Write ch9.html
fs.writeFileSync(ch9Path, html, 'utf8');
console.log(`Successfully generated: ${ch9Path} (${html.length} bytes)`);

// Append to cache chapters-data.js
const cacheLine = `\nwindow.CHAPTER_DATA[9] = ${JSON.stringify(html)};\n`;
fs.appendFileSync(cachePath, cacheLine, 'utf8');
console.log(`Appended Chapter 9 to preloaded cache: ${cachePath}`);
