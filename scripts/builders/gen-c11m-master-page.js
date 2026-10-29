// scripts/builders/gen-c11m-master-page.js
// Builds ncert-solutions-class-11-maths.html
const fs = require('fs');
const path = require('path');

const ch1Content = fs.readFileSync(path.resolve(__dirname, '..', '..', 'chapters-c11m', 'ch1.html'), 'utf8');

const chapters = [
  { n: 1, name: 'Sets', qs: 56, topics: 'Roster & Set-Builder, Empty/Finite/Infinite Sets, Subsets, Power Sets, Universal Set, Venn Diagrams, Union, Intersection, Difference & Practical Problems' },
  { n: 2, name: 'Relations and Functions', qs: 36, topics: 'Cartesian Product of Sets, Relations, Domain & Range, Functions, Types of Functions & Algebra of Functions' },
  { n: 3, name: 'Trigonometric Functions', qs: 52, topics: 'Radian & Degree Measures, Signs of Trig Functions, Identities, Sum & Difference of Angles, Multiple & Sub-multiple Angles' },
  { n: 4, name: 'Complex Numbers & Quadratic Equations', qs: 34, topics: 'Imaginary Numbers, Algebra of Complex Numbers, Modulus, Conjugate, Argand Plane & Complex Roots of Quadratics' },
  { n: 5, name: 'Linear Inequalities', qs: 40, topics: 'Algebraic Solutions of Linear Inequalities in One Variable & Graphical Representation on Real Line' },
  { n: 6, name: 'Permutations and Combinations', qs: 42, topics: 'Fundamental Principle of Counting, Factorial Notation, Permutations nPr, Combinations nCr & Practical Applications' },
  { n: 7, name: 'Binomial Theorem', qs: 29, topics: 'Binomial Theorem for Positive Integral Indices, General Term & Middle Term Calculations' },
  { n: 8, name: 'Sequences and Series', qs: 78, topics: 'Arithmetic Progression (AP), Geometric Progression (GP), General Term, Sum of n Terms, AM and GM Relationship' },
  { n: 9, name: 'Straight Lines', qs: 71, topics: 'Slope of a Line, Various Forms of Equations of a Line, General Equation, Distance of a Point from a Line' },
  { n: 10, name: 'Conic Sections', qs: 73, topics: 'Sections of a Cone: Circles, Parabolas, Ellipses, Hyperbolas — Standard Equations & Geometric Properties' },
  { n: 11, name: 'Introduction to 3D Geometry', qs: 16, topics: 'Coordinate Axes & Coordinate Planes in 3D, Coordinates of a Point, Distance Between Two Points & Section Formula' },
  { n: 12, name: 'Limits and Derivatives', qs: 44, topics: 'Intuitive Idea of Derivatives, Limits of Polynomials, Rational & Trigonometric Functions, First Principle & Product/Quotient Rules' },
  { n: 13, name: 'Statistics', qs: 30, topics: 'Measures of Dispersion: Range, Mean Deviation about Mean & Median, Variance & Standard Deviation for Grouped Data' },
  { n: 14, name: 'Probability', qs: 36, topics: 'Random Experiments, Sample Spaces, Events, Types of Events, Axiomatic Approach to Probability & Addition Rule' }
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
  <title>NCERT Solutions for Class 11 Maths (CBSE 2026–27) — Complete Verbatim Solutions | OlympiadQuiz</title>
  <meta name="description" content="100% complete, free NCERT Solutions for CBSE Class 11 Mathematics (2026-27 rationalised syllabus). All 14 chapters, 637+ questions solved verbatim with step-by-step working and CBSE marking schemes.">
  <meta name="keywords" content="ncert solutions class 11 maths, class 11 maths ncert solutions, ncert class 11 mathematics, cbse class 11 maths 2026-27, class 11 maths chapter 1 sets solutions, ncert solutions for class 11 maths miscellaneous">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-11-maths.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph / Social Sharing -->
  <meta property="og:locale" content="en_IN">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-11-maths.html">
  <meta property="og:title" content="NCERT Solutions for Class 11 Maths (CBSE 2026–27) — Complete Verbatim Solutions | OlympiadQuiz">
  <meta property="og:description" content="100% complete, free NCERT Solutions for CBSE Class 11 Mathematics (2026-27 rationalised syllabus). All 14 chapters, 637+ questions solved verbatim with step-by-step working and CBSE marking schemes.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 11 Maths (CBSE 2026–27) | OlympiadQuiz">
  <meta name="twitter:description" content="Complete chapter-wise NCERT Mathematics solutions for Class 11 with step-by-step CBSE marking schemes.">
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
      { "@type": "ListItem", "position": 4, "name": "Mathematics", "item": "https://olympiadquiz.org/ncert-solutions-class-11-maths.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 11 Maths (CBSE 2026–27)",
    "description": "Comprehensive, 100% verbatim chapter-wise textbook solutions for CBSE Class 11 Mathematics with official step-by-step marking schemes covering all 14 chapters.",
    "educationalLevel": "CBSE Class 11",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://olympiadquiz.org/favicon.png"
      }
    }
  }
  </script>

  <!-- Schema.org FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are these Class 11 Mathematics NCERT solutions based on the latest 2026–27 rationalised syllabus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all solutions are strictly aligned with the latest rationalised NCERT textbook and CBSE guidelines for academic year 2026–27, covering all 14 chapters verbatim without omitting a single exercise or miscellaneous question."
        }
      },
      {
        "@type": "Question",
        "name": "Are Miscellaneous Exercise questions included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every single question from all in-text exercises and end-of-chapter Miscellaneous Exercises is solved with comprehensive mathematical derivations and Venn diagrams."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions provide official CBSE marking schemes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every question is accompanied by an authentic CBSE marking scheme rubric showing mark distribution for formulas, steps, diagrams, and final conclusions."
        }
      },
      {
        "@type": "Question",
        "name": "Is registration or login required to access Class 11 NCERT Maths solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all solutions are 100% free with immediate access and no login or paywall required."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- MathJax Configuration for crisp formulas -->
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
        processEscapes: true
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      }
    };
  </script>
  <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <style>
    :root {
      --brand: #2563eb;
      --brand-hover: #1d4ed8;
      --brand-light: #eff6ff;
      --brand-text: #1e40af;
      --navy: #0f172a;
      --slate: #334155;
      --muted: #64748b;
      --light-bg: #f8fafc;
      --border: #e2e8f0;
      --shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      --shadow-hover: 0 10px 15px -3px rgba(0,0,0,0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: var(--light-bg); color: var(--slate); line-height: 1.6; }
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: var(--brand); z-index: 1000; transition: width .1s; }
    
    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.08); position: sticky; top: 0; z-index: 900; }
    .navbar-inner { max-width: 1400px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .navbar-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .logo-text { font-size: 1.15rem; font-weight: 800; color: white; }
    .logo-text span { color: #60a5fa; }
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
    .hero-banner { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: white; padding: 42px 24px; text-align: center; border-bottom: 3px solid var(--brand); }
    .hero-banner h1 { font-size: 2.1rem; font-weight: 800; margin-bottom: 12px; letter-spacing: -0.02em; }
    .hero-banner p { color: #bfdbfe; font-size: 1rem; max-width: 820px; margin: 0 auto 18px; line-height: 1.65; }
    .hero-badges { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
    .hero-badge { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18); padding: 6px 14px; border-radius: 20px; font-size: .8rem; font-weight: 600; color: #e2e8f0; }

    /* Breadcrumb Chips */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 14px 32px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    .breadcrumb-label { font-size: .72rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .06em; margin-bottom: 10px; }
    .breadcrumb-chips { display: flex; gap: 6px; flex-wrap: wrap; }
    .bc-chip { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 20px; font-size: .78rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: all .18s; user-select: none; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(37,99,235,.35); }
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
    .ch-badge { width: 44px; height: 44px; background: var(--brand); color: white; border-radius: 12px; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(37,99,235,0.3); }
    .chapter-header-info .ch-category { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--brand); letter-spacing: 0.05em; margin-bottom: 2px; }
    .chapter-header-info h2 { font-size: 1.45rem; font-weight: 800; color: var(--navy); }
    .chapter-header-info p { font-size: .825rem; color: var(--muted); margin-top: 2px; }

    .ex-div { background: #f1f5f9; border-left: 4px solid var(--brand); padding: 10px 14px; font-size: 0.88rem; font-weight: 700; color: #1e293b; border-radius: 0 8px 8px 0; margin-bottom: 16px; }

    /* Question Cards & Marking Schemes */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 18px; box-shadow: var(--shadow); transition: all .2s; overflow: hidden; }
    .q-card:hover { border-color: #93c5fd; box-shadow: var(--shadow-hover); }
    .q-head { padding: 16px 20px; display: flex; align-items: flex-start; gap: 14px; cursor: pointer; user-select: none; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-weight: 700; font-size: .8rem; padding: 4px 10px; border-radius: 6px; flex-shrink: 0; margin-top: 2px; }
    .q-text { flex: 1; font-weight: 600; color: var(--navy); font-size: .95rem; line-height: 1.5; }
    .q-marks { background: #f1f5f9; color: var(--slate); font-size: .725rem; font-weight: 600; padding: 4px 10px; border-radius: 12px; flex-shrink: 0; white-space: nowrap; }
    .q-toggle { color: var(--muted); transition: transform .2s; flex-shrink: 0; margin-top: 4px; }
    .q-toggle svg { width: 20px; height: 20px; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: var(--brand); }
    .q-answer { display: none; padding: 0 16px 18px; border-top: 2px dashed rgba(37,99,235,.15); }
    .q-card.open .q-answer { display: block; }
    .answer-box { border: 1px solid rgba(0,0,0,.08); border-radius: 12px; padding: 18px; margin-top: 14px; background: rgba(255,255,255,.95); }
    .answer-label { font-size: .75rem; font-weight: 700; text-transform: uppercase; color: #16a34a; letter-spacing: .04em; margin-bottom: 10px; }
    .answer-text { font-size: .92rem; color: #1e293b; line-height: 1.7; }
    .answer-text p { margin-bottom: 10px; }
    .answer-text p:last-child { margin-bottom: 0; }
    .answer-text ul, .answer-text ol { margin-left: 20px; margin-bottom: 10px; }
    .answer-text li { margin-bottom: 6px; }

    .marking-scheme { margin-top: 16px; background: #f8fafc; border: 1px solid rgba(0,0,0,.07); border-radius: 8px; padding: 12px 14px; font-size: .8rem; }
    .marking-title { font-weight: 700; color: var(--navy); margin-bottom: 6px; }
    .marking-row { display: flex; justify-content: space-between; border-bottom: 1px solid #edf2f7; padding: 4px 0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); }
    .marking-marks { font-weight: 700; color: var(--brand-text); }

    .mob-toggle { display: none; position: fixed; bottom: 20px; right: 20px; background: var(--brand); color: white; border: none; border-radius: 30px; padding: 12px 22px; font-weight: 700; font-size: 0.9rem; box-shadow: 0 4px 15px rgba(37,99,235,0.4); z-index: 1000; cursor: pointer; }
    .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 950; }

    @media (max-width: 900px) {
      .sidebar { position: fixed; left: -320px; top: 0; height: 100vh; z-index: 999; transition: left 0.3s; }
      .sidebar.open { left: 0; }
      .sidebar-overlay.show { display: block; }
      .mob-toggle { display: block; }
      .main-content { padding: 0 16px 24px; }
      .breadcrumb-bar { padding: 12px 16px; }
    }
  </style>
</head>
<body>

<div class="top-progress" id="progressBar"></div>

<!-- Navigation -->
<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-logo">
      <div class="logo-text">Olympiad<span>Quiz</span></div>
    </a>
    <div class="navbar-links" id="navLinks">
      <a href="index.html" class="nav-link">Home</a>
      <div class="nav-dropdown">
        <a href="ncert-solutions.html" class="nav-link">NCERT Solutions ▾</a>
        <div class="nav-dropdown-content">
          <a href="ncert-solutions-class-11.html" style="font-weight:700; color:#2563eb;">Class 11 Hub (All Subjects)</a>
          <a href="ncert-solutions-class-11-maths.html">Class 11 Mathematics</a>
          <a href="ncert-solutions-class-10.html">Class 10 Solutions</a>
          <a href="ncert-solutions-class-9.html">Class 9 Solutions</a>
          <a href="ncert-solutions-class-8.html">Class 8 Solutions</a>
          <a href="ncert-solutions.html">Browse All Classes (1 to 12)</a>
        </div>
      </div>
      <a href="ncert-solutions-class-11.html" class="nav-link">Class 11</a>
      <a href="about.html" class="nav-link">About</a>
      <a href="contact.html" class="nav-link">Contact</a>
    </div>
    <div class="navbar-actions">
      <a href="login.html" class="btn-login">Free Access</a>
    </div>
  </div>
</nav>

<!-- Hero Banner -->
<header class="hero-banner">
  <h1>NCERT Solutions for Class 11 Mathematics</h1>
  <p>100% complete, verbatim NCERT textbook solutions for CBSE Class 11 (Academic Session 2026–27). Comprehensive step-by-step mathematical working, Venn diagrams, and official CBSE marking scheme rubrics for all 14 chapters.</p>
  <div class="hero-badges">
    <span class="hero-badge">📚 14 Rationalised Chapters</span>
    <span class="hero-badge">🔢 ${totalQs}+ Verbatim Questions</span>
    <span class="hero-badge">🎯 Full In-Text &amp; Misc Exercises</span>
    <span class="hero-badge">✅ 100% Free • No Login</span>
  </div>
</header>

<!-- Chapter Fast Selector Chips -->
<div class="breadcrumb-bar">
  <div class="breadcrumb-label">Quick Chapter Jump (Class 11 Maths):</div>
  <div class="breadcrumb-chips">
    ${chips}
  </div>
</div>

<div class="sidebar-overlay" id="sidebarOverlay"></div>

<!-- Main Layout -->
<div class="main-layout">
  <!-- Sidebar -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-title">All 14 Chapters</div>
    <input type="text" class="search-box" placeholder="🔍 Search chapter or topic..." oninput="filterChapters(this.value)">
    <ul class="chapter-nav" id="chapterNav">
      ${navLis}
    </ul>
  </aside>

  <!-- Content Area -->
  <main class="main-content">
    <div id="chapter-content-area">
      ${ch1Content}
    </div>
  </main>
</div>

<button class="mob-toggle" onclick="toggleSidebar()">☰ Chapters</button>

<!-- Fallback Preloaded Chapter Data for offline/file:// protocol support -->
<script src="chapters-c11m/chapters-data.js"></script>

<script>
  window.addEventListener('scroll', () => {
    const d = document.documentElement;
    document.getElementById('progressBar').style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + '%';
  });

  function toggleQ(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('open');
  }

  let currentCh = 1;
  const chapterCache = {};

  async function showChapter(n, updateHistory = true) {
    if (n < 1 || n > 14) return;
    currentCh = n;

    // Update chips & sidebar active states
    document.querySelectorAll('.bc-chip').forEach(c => c.classList.toggle('active', parseInt(c.dataset.ch) === n));
    document.querySelectorAll('#chapterNav a').forEach((a, i) => a.classList.toggle('active', i + 1 === n));

    // Close mobile drawer
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');

    const container = document.getElementById('chapter-content-area');

    function renderContent(html) {
      chapterCache[n] = html;
      container.innerHTML = html;
      if (updateHistory) window.location.hash = 'ch' + n;
      scrollToContentTop();
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([container]);
      }
    }

    // 1. Check in-memory cache
    if (chapterCache[n]) {
      renderContent(chapterCache[n]);
      return;
    }

    // 2. Check preloaded global object
    if (window.CHAPTER_DATA && window.CHAPTER_DATA[n]) {
      renderContent(window.CHAPTER_DATA[n]);
      return;
    }

    // 3. Fallback to fetch for server environments
    container.innerHTML = \`
      <div style="text-align:center;padding:70px 20px;color:var(--muted);">
        <div style="font-size:2.5rem;margin-bottom:12px;animation:spin 1s infinite linear;">⚙️</div>
        <div style="font-size:1.1rem;font-weight:700;color:var(--navy);">Loading Chapter \${n} Solutions...</div>
        <div style="font-size:0.85rem;margin-top:6px;">CBSE Step-by-Step Marking Scheme</div>
      </div>\`;

    try {
      const res = await fetch(\`chapters-c11m/ch\${n}.html\`);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      const html = await res.text();
      renderContent(html);
    } catch (err) {
      if (window.CHAPTER_DATA && window.CHAPTER_DATA[n]) {
        renderContent(window.CHAPTER_DATA[n]);
      } else {
        container.innerHTML = \`
          <div style="text-align:center;padding:50px 20px;background:#fef2f2;border:1px solid #fecaca;border-radius:12px;margin:30px 0;">
            <div style="font-size:2rem;margin-bottom:10px;">⚠️</div>
            <h3 style="color:#b91c1c;margin-bottom:8px;">Chapter \${n} Solutions</h3>
            <p style="color:#7f1d1d;font-size:0.9rem;margin-bottom:16px;">Direct chapter file available below:</p>
            <a href="chapters-c11m/ch\${n}.html" target="_blank" style="display:inline-block;padding:10px 20px;background:var(--brand);color:white;text-decoration:none;border-radius:8px;font-weight:700;">Open Chapter \${n} HTML File →</a>
          </div>\`;
      }
    }
  }

  function scrollToContentTop() {
    const bc = document.querySelector('.breadcrumb-bar');
    if (bc) {
      const topOffset = bc.getBoundingClientRect().bottom + window.pageYOffset;
      window.scrollTo({ top: topOffset - 75, behavior: 'smooth' });
    }
  }

  // Handle URL hash on initial load
  window.addEventListener('DOMContentLoaded', () => {
    const initialContent = document.getElementById('chapter-content-area');
    if (initialContent && initialContent.innerHTML.trim().length > 100) {
      chapterCache[1] = initialContent.innerHTML;
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([initialContent]);
      }
    }
    const hash = window.location.hash;
    const match = hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 14) {
        showChapter(ch, false);
      }
    }
  });

  window.addEventListener('hashchange', () => {
    const match = window.location.hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 14 && ch !== currentCh) {
        showChapter(ch, false);
      }
    }
  });

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('show');
  }

  document.getElementById('sidebarOverlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
  });

  function filterChapters(v) {
    document.querySelectorAll('#chapterNav li').forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(v.toLowerCase()) ? '' : 'none';
    });
  }
</script>
</body>
</html>
`;

const outPath = path.resolve(__dirname, '..', '..', 'ncert-solutions-class-11-maths.html');
fs.writeFileSync(outPath, html.trim(), 'utf8');
console.log(`Successfully generated master page: ${outPath} (${html.length} bytes)`);
