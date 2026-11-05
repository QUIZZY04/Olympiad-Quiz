/**
 * Generator for Class 11 Chemistry - Chapter 8: Organic Chemistry – Some Basic Principles and Techniques
 * NCERT Rationalised 2026-27 Syllabus - All 40 Verbatim Questions (8.1 to 8.40)
 * Strictly zero shortage, CBSE marking rubrics, custom SVG diagrams, offline cache.
 * NO PDF download button/bar (restricted to Physics Ch 7).
 */
const fs = require('fs');
const path = require('path');

const ch8Path = path.join(__dirname, '..', '..', 'chapters-c11c', 'ch8.html');
const cachePath = path.join(__dirname, '..', '..', 'chapters-c11c', 'chapters-data.js');

// High-fidelity custom SVG: Carbocation Stability & Lassaigne's Detection Chemistry
const svgDiagram = `
  <div style="margin:24px 0; background:white; padding:20px; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <h3 style="font-size:1.05rem; font-weight:800; color:#1e293b; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      Organic Fundamentals: Carbocation-Carbanion Stabilities &amp; Lassaigne's Qualitative Elemental Detection
    </h3>
    <svg viewBox="0 0 780 260" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', system-ui, sans-serif;">
      <!-- Panel 1: Reaction Intermediates & Hyperconjugation -->
      <rect x="15" y="15" width="375" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="30" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">1. Carbocations, Carbanions &amp; Hyperconjugation:</text>

      <!-- Carbocation Stability Ladder -->
      <rect x="30" y="52" width="165" height="175" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <text x="38" y="68" font-size="8.5" font-weight="bold" fill="#dc2626">Carbocation Stability ($sp^2$):</text>
      <!-- 3 deg -->
      <rect x="38" y="78" width="148" height="26" rx="3" fill="#fee2e2"/>
      <text x="44" y="93" font-size="8" font-weight="bold" fill="#991b1b">3&deg; (CH_3)_3C^+ (9 &alpha;-H) [Max]</text>
      <!-- 2 deg -->
      <rect x="38" y="110" width="128" height="26" rx="3" fill="#ffedd5"/>
      <text x="44" y="125" font-size="8" font-weight="bold" fill="#9a3412">2&deg; (CH_3)_2CH^+ (6 &alpha;-H)</text>
      <!-- 1 deg -->
      <rect x="38" y="142" width="108" height="26" rx="3" fill="#fef9c3"/>
      <text x="44" y="157" font-size="8" font-weight="bold" fill="#854d0e">1&deg; CH_3CH_2^+ (3 &alpha;-H)</text>
      <!-- methyl -->
      <rect x="38" y="174" width="88" height="26" rx="3" fill="#f1f5f9"/>
      <text x="44" y="189" font-size="8" font-weight="bold" fill="#475569">CH_3^+ (0 &alpha;-H) [Min]</text>
      <text x="38" y="218" font-size="7.5" fill="#64748b">&bull; Driven by +I &amp; &sigma;-p delocalisation</text>

      <!-- Carbanion & Cleavage box -->
      <rect x="205" y="52" width="175" height="175" rx="5" fill="#fff" stroke="#e2e8f0"/>
      <text x="215" y="68" font-size="8.5" font-weight="bold" fill="#2563eb">Carbanion Stability ($sp^3$):</text>
      <text x="215" y="85" font-size="8" font-weight="bold" fill="#1e40af">CH_3^- &gt; 1&deg; &gt; 2&deg; &gt; 3&deg;</text>
      <text x="215" y="98" font-size="7.2" fill="#475569">(+I destabilises negative charge!)</text>

      <line x1="215" y1="108" x2="370" y2="108" stroke="#e2e8f0" stroke-width="1"/>
      <text x="215" y="122" font-size="8" font-weight="bold" fill="#065f46">Covalent Bond Cleavage:</text>
      <text x="215" y="136" font-size="7.5" fill="#334155">&bull; <b>Homolytic:</b> A&minus;B &rarr; A&bull; + B&bull; (Radicals)</text>
      <text x="215" y="148" font-size="7.2" fill="#64748b">(Non-polar, UV light / Peroxide)</text>
      <text x="215" y="164" font-size="7.5" fill="#334155">&bull; <b>Heterolytic:</b> A&minus;B &rarr; A^+ + :B^-</text>
      <text x="215" y="176" font-size="7.2" fill="#64748b">(Polar solvent, Electrophiles / Nucleophiles)</text>
      <text x="215" y="196" font-size="7.8" font-weight="bold" fill="#059669">Inductive vs Resonance:</text>
      <text x="215" y="210" font-size="7.2" fill="#334155">Resonance ($R$) &gt; Hyperconjugation &gt; $I$</text>

      <!-- Panel 2: Lassaigne's Detection Chemistry -->
      <rect x="405" y="15" width="360" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="420" y="36" font-size="11.5" font-weight="bold" fill="#0f172a">2. Qualitative Lassaigne's Elemental Tests:</text>

      <!-- Test 1: Nitrogen (Prussian Blue) -->
      <rect x="420" y="52" width="160" height="78" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="428" y="68" font-size="8.2" font-weight="bold" fill="#1e40af">Nitrogen Test (NaCN):</text>
      <text x="428" y="82" font-size="7.2" fill="#334155">Na + C + N &rarr; NaCN</text>
      <text x="428" y="94" font-size="7.2" fill="#334155">FeSO_4 + NaOH &rarr; Na_4[Fe(CN)_6]</text>
      <text x="428" y="108" font-size="7.5" font-weight="bold" fill="#1d4ed8">+ Fe^{3+} &rarr; Fe_4[Fe(CN)_6]_3&darr;</text>
      <text x="428" y="122" font-size="7.8" font-weight="bold" fill="#1e3a8a">&bull; Prussian Blue ppt</text>

      <!-- Test 2: Sulphur (Purple & Black) -->
      <rect x="590" y="52" width="165" height="78" rx="4" fill="#fdf4ff" stroke="#f0abfc"/>
      <text x="598" y="68" font-size="8.2" font-weight="bold" fill="#86198f">Sulphur Test (Na_2S):</text>
      <text x="598" y="82" font-size="7.2" fill="#334155">2Na + S &rarr; Na_2S</text>
      <text x="598" y="94" font-size="7.2" fill="#334155">+ Na_2[Fe(CN)_5NO] Nitroprusside</text>
      <text x="598" y="108" font-size="7.8" font-weight="bold" fill="#a21caf">&rarr; [Fe(CN)_5NOS]^{4-} (Purple)</text>
      <text x="598" y="122" font-size="7.2" fill="#475569">+ (CH_3COO)_2Pb &rarr; PbS&darr; (Black)</text>

      <!-- Test 3: Halogens (AgX) -->
      <rect x="420" y="138" width="160" height="90" rx="4" fill="#f0fdf4" stroke="#bbf7d0"/>
      <text x="428" y="154" font-size="8.2" font-weight="bold" fill="#15803d">Halogens Test (NaX + AgNO_3):</text>
      <text x="428" y="168" font-size="7.2" fill="#334155">&bull; Cl&macr; &rarr; AgCl&darr; (White, sol in NH_4OH)</text>
      <text x="428" y="182" font-size="7.2" fill="#334155">&bull; Br&macr; &rarr; AgBr&darr; (Pale yellow, spar. sol)</text>
      <text x="428" y="196" font-size="7.2" fill="#334155">&bull; I&macr; &rarr; AgI&darr; (Yellow, insol in NH_4OH)</text>
      <text x="428" y="214" font-size="6.8" fill="#64748b">(Boil with HNO_3 first to expel HCN/H_2S!)</text>

      <!-- Test 4: Both N & S (Blood Red) -->
      <rect x="590" y="138" width="165" height="90" rx="4" fill="#fef2f2" stroke="#fecaca"/>
      <text x="598" y="154" font-size="8.2" font-weight="bold" fill="#b91c1c">Both N &amp; S Present (NaSCN):</text>
      <text x="598" y="170" font-size="7.2" fill="#334155">Na + C + N + S &rarr; NaSCN</text>
      <text x="598" y="186" font-size="7.2" fill="#334155">NaSCN + Fe^{3+} &rarr;</text>
      <text x="598" y="202" font-size="8" font-weight="bold" fill="#dc2626">[Fe(SCN)]^{2+} Blood Red!</text>
      <text x="598" y="216" font-size="7" fill="#64748b">(No Prussian blue formed)</text>
    </svg>
  </div>
`;

// Import questions data generator
console.log('Compiling 40 verbatim questions for Class 11 Chemistry Chapter 8...');
const { getQuestions } = require('./c11c-ch8-data.js');
const questions = getQuestions();

console.log(`Loaded ${questions.length} questions.`);
if (questions.length !== 40) {
  console.error(`ERROR: Expected 40 questions, got ${questions.length}!`);
  process.exit(1);
}

// Generate the complete HTML content
let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 11 Chemistry Chapter 8: Organic Chemistry – Some Basic Principles and Techniques (2026–27)</title>
  <meta name="description" content="100% Verbatim NCERT Solutions for Class 11 Chemistry Chapter 8: Organic Chemistry - Some Basic Principles and Techniques (Rationalised 2026-27). Complete step-by-step solutions for all 40 questions with CBSE marking rubrics.">
  <meta name="keywords" content="NCERT Solutions Class 11 Chemistry Chapter 8, Organic Chemistry Principles, IUPAC Nomenclature, Carbocations, Lassaigne Test, Dumas Method, Kjeldahl Method, Carius Method, CBSE Class 11 Chemistry 2026-27">
  <link rel="canonical" href="https://olympiadquiz.org/chapters-c11c/ch8.html">
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
      <span class="bc-current">Chapter 8: Organic Chemistry Principles</span>
    </div>
  </div>

  <!-- Content Wrap -->
  <div class="content-wrap">
    <!-- Chapter Header -->
    <div class="chapter-header">
      <div class="ch-badge">8</div>
      <div class="chapter-header-info">
        <div class="ch-category">Class 11 Chemistry &bull; Organic Chemistry</div>
        <h1>Chapter 8: Organic Chemistry – Some Basic Principles and Techniques</h1>
        <p>NCERT Rationalised 2026–27 Syllabus &bull; All 40 Verbatim Questions with Official Step-by-Step Marking Rubrics</p>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="action-bar">
      <div>
        <span style="font-weight:700; color:var(--navy); font-size:0.92rem;">40 / 40 Questions</span> &bull;
        <span style="color:var(--muted); font-size:0.85rem;">Rationalised Syllabus Complete</span>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn-action" onclick="toggleAllCards(true)">Expand All</button>
        <button class="btn-action" onclick="toggleAllCards(false)">Collapse All</button>
      </div>
    </div>

    ${svgDiagram}

    <div class="ex-div">NCERT Textbook Exercise 8.1 to 8.40: Tetravalence &amp; Hybridisation of Carbon, IUPAC Nomenclature, Structural &amp; Geometrical Isomerism, Electronic Effects (Inductive, Resonance, Hyperconjugation), Reactive Intermediates, Purification Techniques &amp; Quantitative Elemental Analysis (Dumas, Kjeldahl, Carius)</div>
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

// Write ch8.html
fs.writeFileSync(ch8Path, html, 'utf8');
console.log(`Successfully generated: ${ch8Path} (${html.length} bytes)`);

// Append to cache chapters-data.js
const cacheLine = `\nwindow.CHAPTER_DATA[8] = ${JSON.stringify(html)};\n`;
fs.appendFileSync(cachePath, cacheLine, 'utf8');
console.log(`Appended Chapter 8 to preloaded cache: ${cachePath}`);
