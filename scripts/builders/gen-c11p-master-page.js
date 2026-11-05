// scripts/builders/gen-c11p-master-page.js
// Builds ncert-solutions-class-11-physics.html
const fs = require('fs');
const path = require('path');

const chapters = [
  { n: 1, name: 'Units and Measurements', qs: 22, topics: 'SI Units, Dimensional Analysis, Error Analysis & Propagation, Significant Figures & Instruments' },
  { n: 2, name: 'Motion in a Straight Line', qs: 22, topics: 'Position-Time Graphs, Velocity, Acceleration, Kinematic Equations & Relative Velocity' },
  { n: 3, name: 'Motion in a Plane', qs: 25, topics: 'Scalars & Vectors, Vector Algebra, Projectile Motion & Uniform Circular Motion' },
  { n: 4, name: 'Laws of Motion', qs: 31, topics: 'Newton\'s Laws, Impulse, Momentum Conservation, Equilibrium, Friction & Banking of Roads' },
  { n: 5, name: 'Work, Energy and Power', qs: 24, topics: 'Work by Constant/Variable Force, Work-Energy Theorem, Kinetic & Potential Energy, Collisions' },
  { n: 6, name: 'System of Particles & Rotational Motion', qs: 26, topics: 'Centre of Mass, Torque, Angular Momentum, Moment of Inertia & Rolling Motion' },
  { n: 7, name: 'Gravitation', qs: 21, topics: 'Kepler\'s Laws, Universal Law of Gravitation, Acceleration g, Escape Speed & Satellite Orbits' },
  { n: 8, name: 'Mechanical Properties of Solids', qs: 18, topics: 'Stress-Strain Curve, Hooke\'s Law, Young\'s Modulus, Bulk Modulus & Modulus of Rigidity' },
  { n: 9, name: 'Mechanical Properties of Fluids', qs: 26, topics: 'Pascal\'s Law, Atmospheric Pressure, Streamline Flow, Bernoulli\'s Theorem & Viscosity' },
  { n: 10, name: 'Thermal Properties of Matter', qs: 21, topics: 'Thermal Expansion, Specific Heat, Calorimetry, Change of State, Conduction & Newton\'s Law of Cooling' },
  { n: 11, name: 'Thermodynamics', qs: 10, topics: 'Thermal Equilibrium, Zeroth Law, First Law, Heat Engines, Refrigerators & Second Law' },
  { n: 12, name: 'Kinetic Theory', qs: 10, topics: 'Ideal Gas Laws, Kinetic Interpretation of Temperature, Degrees of Freedom & Mean Free Path' },
  { n: 13, name: 'Oscillations', qs: 24, topics: 'Simple Harmonic Motion (SHM), Displacement, Velocity, Acceleration, Energy & Simple Pendulum' },
  { n: 14, name: 'Waves', qs: 15, topics: 'Transverse & Longitudinal Waves, Speed of Waves, Superposition, Standing Waves & Beats' }
];

const totalQs = chapters.reduce((acc, c) => acc + c.qs, 0);

const navLis = chapters.map(c => `
        <li>
          <a onclick="showChapter(${c.n})" id="nav-ch${c.n}" ${c.n === 1 ? 'class="active"' : ''}>
            <span class="ch-num">${c.n}</span>
            <div style="flex:1;">
              <div style="font-weight:700;">Ch ${c.n}: ${c.name}</div>
              <div style="font-size:0.72rem; color:var(--muted);">${c.qs} Questions</div>
            </div>
          </a>
        </li>`).join('');

const chips = chapters.map(c => `
      <div class="bc-chip ${c.n === 1 ? 'active' : ''}" data-ch="${c.n}" onclick="showChapter(${c.n})">
        <span class="bc-n">${c.n}</span>
        <span>${c.name}</span>
      </div>`).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 11 Physics (CBSE 2026–27) — Complete Verbatim Solutions | OlympiadQuiz</title>
  <meta name="description" content="100% complete, free NCERT Solutions for CBSE Class 11 Physics (2026-27 rationalised syllabus). All 14 chapters, ${totalQs}+ questions solved verbatim with step-by-step working, derivations, vector diagrams and CBSE marking schemes.">
  <meta name="keywords" content="ncert solutions class 11 physics, class 11 physics ncert solutions, ncert class 11 physics 2026-27, class 11 physics units and measurements, class 11 physics laws of motion, class 11 physics rotational motion solutions">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-11-physics.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph / Social Sharing -->
  <meta property="og:locale" content="en_IN">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-11-physics.html">
  <meta property="og:title" content="NCERT Solutions for Class 11 Physics (CBSE 2026–27) — Complete Verbatim Solutions | OlympiadQuiz">
  <meta property="og:description" content="100% complete, free NCERT Solutions for CBSE Class 11 Physics (2026-27 rationalised syllabus). All 14 chapters, ${totalQs}+ questions solved verbatim with step-by-step working and CBSE marking schemes.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 11 Physics (CBSE 2026–27) | OlympiadQuiz">
  <meta name="twitter:description" content="Complete chapter-wise NCERT Physics solutions for Class 11 with derivations, vector diagrams and CBSE marking schemes.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Search Engine Crawling -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 11", "item": "https://olympiadquiz.org/ncert-solutions-class-11.html" },
      { "@type": "ListItem", "position": 4, "name": "Physics", "item": "https://olympiadquiz.org/ncert-solutions-class-11-physics.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 11 Physics (CBSE 2026–27)",
    "description": "Comprehensive, 100% verbatim chapter-wise textbook solutions for CBSE Class 11 Physics with derivations, vector illustrations and step-by-step marking schemes covering all 14 chapters.",
    "educationalLevel": "CBSE Class 11",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org/",
      "logo": { "@type": "ImageObject", "url": "https://olympiadquiz.org/favicon.png" }
    }
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

  <!-- MathJax 3 configuration -->
  <script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
      displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
      processEscapes: true
    },
    options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] },
    startup: { pageReady: () => MathJax.startup.defaultPageReady() }
  };
  </script>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" id="MathJax-script" async></script>

  <style>
    :root {
      --brand: #7c3aed;
      --brand-hover: #6d28d9;
      --brand-light: #f5f3ff;
      --brand-text: #5b21b6;
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
    .logo-text span { color: #a78bfa; }
    .navbar-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; padding: 6px 12px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: white; border: 1px solid #e2e8f0; border-radius: 10px; min-width: 250px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); z-index: 1000; padding: 6px; }
    .nav-dropdown-content a { display: block; padding: 8px 14px; color: #334155; text-decoration: none; font-size: 0.85rem; border-radius: 6px; transition: 0.2s; }
    .nav-dropdown-content a:hover { background: #f1f5f9; color: #0f172a !important; }
    .navbar-actions { display: flex; align-items: center; gap: 10px; }
    .btn-login { background: var(--brand); color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; }
    .btn-login:hover { background: var(--brand-hover); }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #0f172a 0%, #312e81 100%); color: white; padding: 42px 24px; text-align: center; border-bottom: 3px solid var(--brand); }
    .hero-banner h1 { font-size: 2.1rem; font-weight: 800; margin-bottom: 12px; letter-spacing: -0.02em; }
    .hero-banner p { color: #e0e7ff; font-size: 1rem; max-width: 820px; margin: 0 auto 18px; line-height: 1.65; }
    .hero-badges { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
    .hero-badge { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18); padding: 6px 14px; border-radius: 20px; font-size: .8rem; font-weight: 600; color: #e2e8f0; }

    /* Breadcrumb Chips */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 14px 32px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    .breadcrumb-label { font-size: .72rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .06em; margin-bottom: 10px; }
    .breadcrumb-chips { display: flex; gap: 6px; flex-wrap: wrap; }
    .bc-chip { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 20px; font-size: .78rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: all .18s; user-select: none; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(124,58,237,.35); }
    .bc-chip .bc-n { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: rgba(0,0,0,.12); border-radius: 50%; font-size: .68rem; font-weight: 800; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,.25); }

    /* Main Layout */
    .main-layout { display: flex; max-width: 1400px; margin: 0 auto; }
    .sidebar { width: 320px; background: white; border-right: 1px solid var(--border); padding: 20px 16px; position: sticky; top: 117px; height: calc(100vh - 117px); overflow-y: auto; flex-shrink: 0; }
    .sidebar-title { font-size: .85rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .05em; margin-bottom: 12px; }
    .search-box { width: 100%; padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px; font-size: .85rem; margin-bottom: 16px; font-family: inherit; }
    .search-box:focus { outline: none; border-color: var(--brand); }
    .chapter-nav { list-style: none; }
    .chapter-nav li { margin-bottom: 4px; }
    .chapter-nav li a { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; color: var(--slate); text-decoration: none; font-size: .84rem; font-weight: 500; transition: all .15s; cursor: pointer; }
    .chapter-nav li a:hover { background: var(--brand-light); color: var(--brand-text); }
    .chapter-nav li a.active { background: var(--brand); color: white; font-weight: 600; }
    .ch-num { width: 24px; height: 24px; background: rgba(0,0,0,.06); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .75rem; font-weight: 700; flex-shrink: 0; }
    .chapter-nav li a.active .ch-num { background: rgba(255,255,255,.25); color: white; }

    .main-content { flex: 1; padding: 0 36px 36px; min-width: 0; }
    .chapter-section { margin-bottom: 48px; scroll-margin-top: 130px; padding-top: 28px; }
    .chapter-header { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 2px solid var(--border); }
    .ch-badge { width: 44px; height: 44px; background: var(--brand); color: white; border-radius: 12px; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(124,58,237,0.3); }
    .chapter-header-info .ch-category { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--brand); letter-spacing: 0.05em; margin-bottom: 2px; }
    .chapter-header-info h2 { font-size: 1.45rem; font-weight: 800; color: var(--navy); }
    .chapter-header-info p { font-size: .825rem; color: var(--muted); margin-top: 2px; }

    .ex-div { background: #f8fafc; border-left: 4px solid var(--brand); padding: 10px 14px; font-size: 0.88rem; font-weight: 700; color: #1e293b; border-radius: 0 8px 8px 0; margin-bottom: 16px; }

    /* Question Cards & Marking Schemes */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 18px; box-shadow: var(--shadow); transition: all .2s; overflow: hidden; }
    .q-card:hover { border-color: #cbd5e1; }
    .q-head { display: flex; align-items: flex-start; gap: 12px; padding: 16px 20px; cursor: pointer; user-select: none; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-size: .75rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; flex-shrink: 0; margin-top: 2px; }
    .q-text { font-size: .925rem; font-weight: 600; color: var(--navy); flex: 1; line-height: 1.55; }
    .q-marks { font-size: .72rem; font-weight: 700; color: var(--muted); background: #f1f5f9; padding: 2px 7px; border-radius: 4px; flex-shrink: 0; }
    .q-toggle { width: 20px; height: 20px; color: var(--muted); flex-shrink: 0; transition: transform .2s; display: flex; align-items: center; justify-content: center; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: var(--brand); }
    .q-answer { display: none; padding: 0 20px 20px; }
    .q-card.open .q-answer { display: block; }
    .answer-box { background: #fafafa; border: 1px solid #f1f5f9; border-radius: 10px; padding: 18px 20px; }
    .answer-label { font-size: .75rem; font-weight: 800; text-transform: uppercase; color: var(--brand); letter-spacing: .06em; margin-bottom: 10px; }
    .answer-text { font-size: .9rem; color: #334155; line-height: 1.7; }
    .step { margin-bottom: 8px; }
    .marking-scheme { margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--border); }
    .marking-title { font-size: .72rem; font-weight: 800; text-transform: uppercase; color: var(--muted); letter-spacing: .05em; margin-bottom: 6px; }
    .marking-row { display: flex; justify-content: space-between; font-size: .78rem; color: #475569; padding: 3px 0; border-bottom: 1px dotted #f1f5f9; }
    .marking-marks { font-weight: 700; color: var(--brand-text); }

    /* Footer */
    .site-footer { background: #0f172a; color: #94a3b8; padding: 40px 24px; font-size: 0.85rem; border-top: 1px solid #1e293b; margin-top: 60px; }
    .site-footer a { color: #a78bfa; text-decoration: none; }
    .site-footer a:hover { text-decoration: underline; }

    @media (max-width: 900px) {
      .main-layout { flex-direction: column; }
      .sidebar { width: 100%; height: auto; position: static; border-right: none; border-bottom: 1px solid var(--border); }
      .main-content { padding: 0 16px 24px; }
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <header class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <div class="logo-text">Olympiad<span>Quiz</span></div>
      </a>
      <nav class="navbar-links">
        <a href="index.html" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="ncert-solutions.html" class="nav-link">NCERT Solutions &#9662;</a>
          <div class="nav-dropdown-content">
            <a href="ncert-solutions-class-11.html">Class 11 Hub (All Subjects)</a>
            <a href="ncert-solutions-class-11-maths.html">Class 11 Mathematics</a>
            <a href="ncert-solutions-class-11-physics.html" style="font-weight:700;color:#7c3aed;">Class 11 Physics (Current)</a>
          </div>
        </div>
      </nav>
      <div class="navbar-actions">
        <a href="ncert-solutions-class-11.html" class="btn-login">&larr; Class 11 Hub</a>
      </div>
    </div>
  </header>

  <!-- Hero Banner -->
  <section class="hero-banner">
    <h1>NCERT Solutions for Class 11 Physics</h1>
    <p>Complete chapter-wise textbook solutions with step-by-step derivations, vector physics diagrams, and official CBSE marking schemes (Academic Session 2026–27).</p>
    <div class="hero-badges">
      <div class="hero-badge">100% Verbatim Coverage</div>
      <div class="hero-badge">All 14 Chapters</div>
      <div class="hero-badge">${totalQs} Solved Numerical &amp; Theoretical Problems</div>
      <div class="hero-badge">Instant Client Cache</div>
    </div>
  </section>

  <!-- Sticky Chapter Chips -->
  <nav class="breadcrumb-bar" aria-label="Chapter quick navigation">
    <div class="breadcrumb-label">Quick Jump to Chapter:</div>
    <div class="breadcrumb-chips">
      ${chips}
    </div>
  </nav>

  <!-- Main Layout -->
  <div class="main-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">Physics Chapters</div>
      <input type="text" class="search-box" id="chapter-search" placeholder="Search exercises, derivations..." oninput="filterNav(this.value)">
      <ul class="chapter-nav" id="chapter-nav-list">
        ${navLis}
      </ul>
    </aside>

    <!-- Main Content Chapter Display Area -->
    <main class="main-content" id="chapter-content-area">
      <!-- Chapter content is dynamically loaded here -->
    </main>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <div style="max-width:1400px; margin:0 auto; display:flex; justify-content:space-between; flex-wrap:wrap; gap:20px;">
      <div>
        <div style="font-size:1.1rem; font-weight:800; color:white; margin-bottom:8px;">Olympiad<span>Quiz</span></div>
        <p>Empowering CBSE students across India with 100% free, verbatim textbook solutions and competitive Olympiad prep.</p>
      </div>
      <div>
        <div style="font-weight:700; color:white; margin-bottom:8px;">Class 11 Subjects</div>
        <ul style="list-style:none; line-height:1.8;">
          <li><a href="ncert-solutions-class-11-maths.html">Mathematics (14 Chapters)</a></li>
          <li><a href="ncert-solutions-class-11-physics.html">Physics (14 Chapters)</a></li>
          <li><a href="ncert-solutions-class-11.html">All Class 11 Subjects</a></li>
        </ul>
      </div>
    </div>
    <div style="text-align:center; margin-top:24px; border-top:1px solid #1e293b; padding-top:16px;">
      &copy; 2026 OlympiadQuiz.org. All Rights Reserved. Strictly aligned with CBSE / NCERT rationalised curriculum 2026–27.
    </div>
  </footer>

  <!-- Script for Chapter Switching & Interactive Accordions -->
  <script src="chapters-c11p/chapters-data.js"></script>
  <script>
    let currentChapter = 1;

    function toggleQ(id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('open');
    }

    function showChapter(n) {
      currentChapter = n;
      const contentArea = document.getElementById('chapter-content-area');
      
      // Update chips & sidebar active states
      document.querySelectorAll('.bc-chip').forEach(c => c.classList.remove('active'));
      const activeChip = document.querySelector('.bc-chip[data-ch="' + n + '"]');
      if (activeChip) activeChip.classList.add('active');

      document.querySelectorAll('.chapter-nav a').forEach(a => a.classList.remove('active'));
      const activeNav = document.getElementById('nav-ch' + n);
      if (activeNav) activeNav.classList.add('active');

      // Check preloaded cache
      if (window.CHAPTER_DATA && window.CHAPTER_DATA[n]) {
        contentArea.innerHTML = window.CHAPTER_DATA[n];
        if (window.MathJax) MathJax.typesetPromise([contentArea]);
        window.scrollTo({ top: 120, behavior: 'smooth' });
      } else {
        // Fetch HTML dynamically if not in memory
        contentArea.innerHTML = '<div style="padding:60px 20px; text-align:center; color:#64748b;">Loading Chapter ' + n + '...</div>';
        fetch('chapters-c11p/ch' + n + '.html')
          .then(r => {
            if (!r.ok) throw new Error('Chapter file not found');
            return r.text();
          })
          .then(html => {
            if (!window.CHAPTER_DATA) window.CHAPTER_DATA = {};
            window.CHAPTER_DATA[n] = html;
            contentArea.innerHTML = html;
            if (window.MathJax) MathJax.typesetPromise([contentArea]);
            window.scrollTo({ top: 120, behavior: 'smooth' });
          })
          .catch(err => {
            contentArea.innerHTML = '<div style="padding:60px 20px; text-align:center; color:#ef4444;"><h3>Chapter In Preparation</h3><p>Chapter ' + n + ' solutions are currently being compiled according to NCERT 2026–27 verbatim requirements.</p></div>';
          });
      }
    }

    function filterNav(val) {
      const query = val.toLowerCase().trim();
      document.querySelectorAll('#chapter-nav-list li').forEach(li => {
        const text = li.innerText.toLowerCase();
        li.style.display = text.includes(query) ? '' : 'none';
      });
    }

    // Initialize Chapter 1 on DOM ready
    window.addEventListener('DOMContentLoaded', () => {
      showChapter(1);
    });
  </script>
</body>
</html>
`;

const masterPath = path.resolve(__dirname, '..', '..', 'ncert-solutions-class-11-physics.html');
fs.writeFileSync(masterPath, html.trim(), 'utf8');
console.log(`Successfully generated master page: ${masterPath} (${html.length} bytes)`);
