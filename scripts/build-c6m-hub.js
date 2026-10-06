const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

const allChapters = {};
for (let i = 1; i <= 12; i++) {
  allChapters[i] = fs.readFileSync(path.join(dir, `ch${i}.html`), 'utf8');
}

const chapters = [
  { num: 1, title: 'Patterns in Mathematics', short: 'Patterns in Maths', desc: 'Number Sequences & Rule Formulation' },
  { num: 2, title: 'Lines and Angles', short: 'Lines & Angles', desc: 'Points, Rays, Angles & Revolutions' },
  { num: 3, title: 'Number Play', short: 'Number Play', desc: 'Place Values, Large Numbers & Magic Squares' },
  { num: 4, title: 'Data Handling and Presentation', short: 'Data Handling', desc: 'Tally Marks, Pictographs & Bar Graphs' },
  { num: 5, title: 'Prime Time', short: 'Prime Time', desc: 'Divisibility Tests, Factor Trees, HCF & LCM' },
  { num: 6, title: 'Perimeter and Area', short: 'Perimeter & Area', desc: 'Mensuration, Polygons, Area Formulas' },
  { num: 7, title: 'Fractions', short: 'Fractions', desc: 'Visual Models, Number Line, Arithmetic' },
  { num: 8, title: 'Playing with Constructions', short: 'Constructions', desc: 'Compass Bisectors & Standard Angles' },
  { num: 9, title: 'Symmetry', short: 'Symmetry', desc: 'Lines of Symmetry & Mirror Reflections' },
  { num: 10, title: 'The Other Side of Zero', short: 'Other Side of Zero', desc: 'Integers, Number Line Jumps & Arithmetic' },
  { num: 11, title: 'Introduction to Algebra', short: 'Algebra', desc: 'Variables, Expressions & Simple Equations' },
  { num: 12, title: 'Ratio and Proportion', short: 'Ratio & Proportion', desc: 'Simplest Form, Proportions & Unitary Method' }
];

// Generate chips HTML (with concise short titles like Class 9)
const chipsHtml = chapters.map(ch => 
  `    <span class="bc-chip${ch.num === 1 ? ' active' : ''}" onclick="showChapter(${ch.num})" data-ch="${ch.num}"><span class="bc-n">${ch.num}</span>${ch.short}</span>`
).join('\n');

// Generate sidebar HTML
const sidebarHtml = chapters.map(ch => 
  `      <li><a href="javascript:void(0)" onclick="showChapter(${ch.num})" data-ch="${ch.num}" ${ch.num === 1 ? 'class="active"' : ''}><span class="ch-num">${ch.num}</span><div class="ch-info"><strong>${ch.title}</strong><small style="display:block;font-size:0.75rem;color:#64748b;">${ch.desc}</small></div></a></li>`
).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 6 Maths (Ganita Prakash) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Free NCERT Solutions for Class 6 Mathematics (Ganita Prakash & Foundation) for CBSE 2026-27. Complete exercise solutions with labeled diagrams, CBSE step marking schemes & CBQs.">
  <meta name="keywords" content="ncert solutions class 6 maths, class 6 maths ganita prakash solutions, ncert class 6 maths 2026-27, cbse class 6 maths chapter wise, patterns in mathematics class 6, lines and angles class 6, prime time class 6, fractions class 6">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-6-maths.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph Meta Tags -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-6-maths.html">
  <meta property="og:title" content="NCERT Solutions for Class 6 Maths (Ganita Prakash) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="Complete 100% chapter-wise NCERT solutions for Class 6 Maths with labeled geometric diagrams, step-by-step CBSE marking schemes and competency-based questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 6 Maths (Ganita Prakash) CBSE 2026-27">
  <meta name="twitter:description" content="Complete 100% chapter-wise NCERT solutions for Class 6 Maths with labeled diagrams and CBSE rubrics.">
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
      { "@type": "ListItem", "position": 3, "name": "Class 6", "item": "https://olympiadquiz.org/ncert-solutions.html#class6" },
      { "@type": "ListItem", "position": 4, "name": "Mathematics", "item": "https://olympiadquiz.org/ncert-solutions-class-6-maths.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 6 Maths (Ganita Prakash) CBSE 2026-27",
    "description": "Comprehensive chapter-wise solutions for Class 6 Mathematics with geometric diagrams, step-by-step CBSE marking schemes, and competency-based questions.",
    "educationalLevel": "CBSE Class 6",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org/",
      "logo": { "@type": "ImageObject", "url": "https://olympiadquiz.org/favicon.png" }
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
        "name": "Are these solutions based on the new Class 6 textbook 'Ganita Prakash'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, these solutions are 100% updated and strictly aligned with the new NCERT Class 6 Mathematics textbook 'Ganita Prakash' under NEP 2020 for the academic session 2026-27."
        }
      },
      {
        "@type": "Question",
        "name": "Are geometrical diagrams and number lines labeled properly in the answers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every geometric construction, angle classification, polygon perimeter, and number line solution includes high-resolution, labeled vector diagrams with precise measurements."
        }
      },
      {
        "@type": "Question",
        "name": "Do these answers include the official CBSE marking scheme breakdown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every question includes the official CBSE Board 2026-27 step marking scheme rubric indicating exact mark distribution for formula, calculation, and final unit answer."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --brand: #4f46e5;
      --brand-hover: #4338ca;
      --brand-light: #eef2ff;
      --brand-text: #3730a3;
      --navy: #0f172a;
      --slate: #334155;
      --muted: #64748b;
      --light-bg: #f8fafc;
      --border: #e2e8f0;
      --shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      --shadow-hover: 0 10px 15px -3px rgba(0,0,0,0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: var(--light-bg); color: var(--slate); line-height: 1.6; }

    /* Top progress */
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: var(--brand); z-index: 1000; width: 0%; transition: width .15s; }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.08); position: sticky; top: 0; z-index: 900; }
    .navbar-inner { max-width: 1380px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .navbar-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .logo-text { font-size: 1.15rem; font-weight: 800; color: white; }
    .logo-text span { color: #818cf8; }
    .navbar-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; padding: 6px 12px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: white; border: 1px solid #e2e8f0; border-radius: 10px; min-width: 240px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); z-index: 1000; padding: 6px; }
    .nav-dropdown-content a { display: block; padding: 8px 14px; color: #334155; text-decoration: none; font-size: 0.85rem; border-radius: 6px; transition: 0.2s; }
    .nav-dropdown-content a:hover { background: #f1f5f9; color: #0f172a !important; }
    .navbar-actions { display: flex; align-items: center; gap: 10px; }
    .btn-login { background: #4f46e5; color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; }
    .btn-login:hover { background: #4338ca; }
    .navbar-toggle { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 6px; }
    .navbar-toggle span { display: block; width: 22px; height: 2px; background: white; border-radius: 2px; }

    /* ── NCERT SUBJECT BREADCRUMB & SWITCHER (Matches Class 9 Maths) ── */
    .ncert-breadcrumb-nav {
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 10px 24px;
      position: relative;
      z-index: 100;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
    }
    .ncert-bc-container {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }
    .ncert-bc-list {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 0.85rem;
      color: #64748b;
      flex-wrap: wrap;
    }
    .ncert-bc-list a {
      color: #0f172a;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.15s ease;
    }
    .ncert-bc-list a:hover {
      color: #ff6b00;
      text-decoration: underline;
    }
    .ncert-bc-sep {
      color: #cbd5e1;
      font-size: 0.75rem;
    }
    .ncert-bc-current {
      color: #ff6b00;
      font-weight: 700;
    }
    .ncert-bc-switch {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .ncert-bc-switch-label {
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #94a3b8;
      margin-right: 4px;
    }
    .ncert-bc-pill {
      font-size: 0.78rem;
      font-weight: 700;
      padding: 5px 12px;
      border-radius: 999px;
      text-decoration: none;
      background: #f1f5f9;
      color: #334155;
      border: 1px solid #e2e8f0;
      transition: all 0.18s ease;
      white-space: nowrap;
    }
    .ncert-bc-pill:hover {
      background: #fff7ed;
      color: #ea580c;
      border-color: #fdba74;
      transform: translateY(-1px);
    }
    .ncert-bc-pill.active {
      background: #ff6b00;
      color: #ffffff;
      border-color: #ff6b00;
      box-shadow: 0 2px 6px rgba(255,107,0,0.3);
    }
    @media (max-width: 768px) {
      .ncert-breadcrumb-nav { padding: 8px 16px; }
      .ncert-bc-switch { overflow-x: auto; width: 100%; padding-bottom: 2px; }
    }

    /* ── HERO BANNER (Matches Class 9 Maths) ── */
    .hero-banner { background: linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%); color: white; padding: 36px 24px; text-align: center; border-bottom: 3px solid var(--brand); }
    .hero-banner h1 { font-size: 1.85rem; font-weight: 800; margin-bottom: 8px; }
    .hero-banner p { color: #a5b4fc; font-size: .95rem; max-width: 720px; margin: 0 auto 16px; }
    .hero-badges { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .hero-badge { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); padding: 6px 14px; border-radius: 20px; font-size: .8rem; font-weight: 600; color: #e2e8f0; }

    /* ── CHAPTER JUMP BREADCRUMB BAR (Matches Class 9 Maths) ── */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 14px 36px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    .breadcrumb-label { font-size: .72rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .06em; margin-bottom: 10px; }
    .breadcrumb-chips { display: flex; gap: 6px; flex-wrap: wrap; }
    .bc-chip { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 20px; font-size: .78rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: all .18s; user-select: none; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(79,70,229,.35); }
    .bc-chip .bc-n { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: rgba(0,0,0,.12); border-radius: 50%; font-size: .68rem; font-weight: 800; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,.25); }

    /* Layout */
    .main-layout { display: flex; max-width: 1380px; margin: 0 auto; }
    .sidebar { width: 300px; background: white; border-right: 1px solid var(--border); padding: 20px 16px; position: sticky; top: 117px; height: calc(100vh - 117px); overflow-y: auto; flex-shrink: 0; }
    .sidebar-title { font-size: .85rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .05em; margin-bottom: 12px; }
    .search-box { width: 100%; padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px; font-size: .85rem; margin-bottom: 16px; font-family: inherit; }
    .search-box:focus { outline: none; border-color: var(--brand); }
    .chapter-nav { list-style: none; }
    .chapter-nav li { margin-bottom: 4px; }
    .chapter-nav li a { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; color: var(--slate); text-decoration: none; font-size: .85rem; font-weight: 500; transition: all .15s; cursor: pointer; }
    .chapter-nav li a:hover { background: var(--brand-light); color: var(--brand-text); }
    .chapter-nav li a.active { background: var(--brand); color: white; font-weight: 600; }
    .chapter-nav li a.active small { color: #dbeafe !important; }
    .ch-num { width: 22px; height: 22px; background: rgba(0,0,0,.06); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .75rem; font-weight: 700; flex-shrink: 0; }
    .chapter-nav li a.active .ch-num { background: rgba(255,255,255,.25); color: white; }

    /* Main Content */
    .main-content { flex: 1; padding: 0 36px 36px; min-width: 0; }
    .chapter-section { margin-bottom: 48px; scroll-margin-top: 130px; padding-top: 28px; }
    .chapter-header { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 2px solid var(--border); }
    .ch-badge { width: 42px; height: 42px; background: var(--brand); color: white; border-radius: 12px; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .chapter-header-info h2 { font-size: 1.4rem; font-weight: 800; color: var(--navy); }
    .chapter-header-info p { font-size: .825rem; color: var(--muted); margin-top: 2px; }

    /* Concept Card */
    .concept-card { background: white; border: 1.5px solid var(--border); border-left: 5px solid var(--brand); border-radius: 12px; padding: 20px 24px; margin-bottom: 28px; box-shadow: var(--shadow); }
    .concept-header { font-size: .95rem; font-weight: 800; color: var(--brand-text); margin-bottom: 12px; }
    .concept-list { padding-left: 20px; font-size: .88rem; color: var(--slate); display: flex; flex-direction: column; gap: 8px; }
    .concept-list ul { margin-top: 6px; padding-left: 20px; display: flex; flex-direction: column; gap: 4px; }

    /* Exercise Divider */
    .ex-div { font-size: .82rem; font-weight: 700; text-transform: uppercase; color: var(--brand-text); background: var(--brand-light); border: 1px solid #c7d2fe; border-radius: 8px; padding: 8px 16px; margin: 24px 0 16px; display: inline-block; letter-spacing: .04em; }

    /* Question Card */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 18px; box-shadow: var(--shadow); transition: all .2s; overflow: hidden; }
    .q-card:hover { border-color: #c7d2fe; box-shadow: var(--shadow-hover); }
    .q-head { padding: 16px 20px; display: flex; align-items: flex-start; gap: 14px; cursor: pointer; user-select: none; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-weight: 700; font-size: .8rem; padding: 4px 10px; border-radius: 6px; flex-shrink: 0; margin-top: 2px; }
    .q-text { flex: 1; font-weight: 600; color: var(--navy); font-size: .95rem; line-height: 1.5; }
    .q-marks { background: #f1f5f9; color: var(--slate); font-size: .725rem; font-weight: 600; padding: 4px 10px; border-radius: 12px; flex-shrink: 0; white-space: nowrap; }
    .q-toggle { color: var(--muted); transition: transform .2s; flex-shrink: 0; margin-top: 4px; }
    .q-toggle svg { width: 20px; height: 20px; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: var(--brand); }

    /* Answer Body */
    .q-answer { display: none; padding: 0 16px 18px; border-top: 2px dashed rgba(79,70,229,.12); }
    .q-card.open .q-answer { display: block; }
    .answer-box { border: 1px solid rgba(0,0,0,.08); border-radius: 12px; padding: 18px; margin-top: 14px; background: rgba(255,255,255,.9); }
    .answer-label { font-size: .75rem; font-weight: 700; text-transform: uppercase; color: #16a34a; letter-spacing: .04em; margin-bottom: 10px; }
    .answer-text { font-size: .9rem; color: #1e293b; line-height: 1.7; }
    .answer-text p { margin-bottom: 10px; }
    .answer-text .step { display: block; background: #f8fafc; border-left: 3px solid var(--brand); padding: 8px 12px; margin: 6px 0; border-radius: 0 6px 6px 0; font-size: .88rem; }

    /* Marking Scheme */
    .marking-scheme { margin-top: 14px; background: #f8fafc; border: 1px solid rgba(0,0,0,.07); border-radius: 8px; padding: 12px 14px; font-size: .8rem; }
    .marking-title { font-weight: 700; color: var(--navy); margin-bottom: 6px; }
    .marking-row { display: flex; justify-content: space-between; border-bottom: 1px solid #edf2f7; padding: 4px 0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); }
    .marking-marks { font-weight: 700; color: var(--brand-text); }

    /* Competency Card */
    .cbq-card { background: linear-gradient(to right, #fdf4ff, #faf5ff); border: 1.5px solid #e9d5ff; border-radius: 12px; padding: 22px; margin: 30px 0 20px; }
    .cbq-badge { display: inline-block; font-size: .75rem; font-weight: 800; text-transform: uppercase; color: #9333ea; background: #f3e8ff; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; letter-spacing: .04em; }

    /* Math Diagram Styling */
    .math-diagram-wrap { transition: transform .2s ease; }
    .math-diagram-wrap:hover { transform: translateY(-2px); }

    /* Responsive */
    @media (max-width: 900px) {
      .main-layout { flex-direction: column; }
      .sidebar { width: 100%; height: auto; position: static; border-right: none; border-bottom: 1px solid var(--border); }
      .main-content { padding: 0 16px 28px; }
      .breadcrumb-bar { padding: 12px 16px; top: 57px; }
    }
  </style>
</head>
<body>
  <div class="top-progress" id="progressBar"></div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;" loading="lazy">
        <span class="logo-text">Olympiad<span>Quiz</span></span>
      </a>
      <div class="navbar-links" id="navLinks">
        <a href="index.html" class="nav-link">Home</a>
        <div class="nav-dropdown" style="position:relative;">
          <a href="ncert-solutions.html" style="color:white;text-decoration:none;font-size:0.9rem;font-weight:600;display:flex;align-items:center;gap:4px;">NCERT Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top:2px;"><path d="m6 9 6 6 6-6"/></svg></a>
          <div class="nav-dropdown-content">
            <a href="ncert-solutions.html" style="font-weight:700;color:#c2410c;">📚 All NCERT Hub (2026-27)</a>
            <a href="ncert-solutions-class-10-maths.html">Class 10 Maths 📐</a>
            <a href="ncert-solutions-class-9-maths.html">Class 9 Maths ✨</a>
            <a href="ncert-solutions-class-8-maths.html">Class 8 Maths</a>
            <a href="ncert-solutions-class-7-maths.html">Class 7 Maths</a>
            <a href="ncert-solutions-class-6-maths.html" style="font-weight:700;color:#4f46e5;background:#eef2ff;">Class 6 Maths ✨ (Active)</a>
          </div>
        </div>
        <a href="blog.html" class="nav-link">Guides &amp; Blog</a>
      </div>
      <div class="navbar-actions">
        <a href="login.html" class="btn-login">Login</a>
        <button class="navbar-toggle" id="mobile-menu-toggle" aria-label="Toggle Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- NCERT SUBJECT BREADCRUMB (Matching Class 9 Maths) -->
  <nav class="ncert-breadcrumb-nav" aria-label="Breadcrumb">
    <div class="ncert-bc-container">
      <ol class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html#class6">Class 6</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">Mathematics</li>
      </ol>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill active">Maths</a>
        <a href="ncert-solutions.html#class6" class="ncert-bc-pill">All Class 6 Subjects</a>
      </div>
    </div>
  </nav>

  <!-- HERO BANNER (Matching Class 9 Maths) -->
  <header class="hero-banner">
    <h1>Class 6 Maths — NCERT Exercise Solutions</h1>
    <p>Complete <strong>100% question coverage</strong> for all exercises across <strong>all 12 chapters</strong> of NCERT Class 6 Mathematics (Ganita Prakash &amp; Foundation — CBSE 2026-27). Step-by-step solutions as per CBSE Marking Scheme with Labeled Diagrams &amp; Case Study Questions.</p>
    <div class="hero-badges">
      <span class="hero-badge">✅ All 12 Chapters (100% Questions)</span>
      <span class="hero-badge">📐 Ganita Prakash (NEP 2020)</span>
      <span class="hero-badge">🔢 Step-by-Step Marking Scheme</span>
      <span class="hero-badge">📊 Labeled Vector Diagrams</span>
      <span class="hero-badge">🎯 Case Study Questions</span>
    </div>
  </header>

  <!-- CHAPTER JUMP BREADCRUMB BAR (Matching Class 9 Maths) -->
  <div class="breadcrumb-bar">
    <div class="breadcrumb-label">📐 Class 6 Maths — Jump to Chapter</div>
    <div class="breadcrumb-chips" id="breadcrumbChips">
${chipsHtml}
    </div>
  </div>

  <!-- Main Layout -->
  <div class="main-layout">
    <!-- Chapter Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">All Chapters</div>
      <input type="text" class="search-box" id="chapterSearch" placeholder="Search chapters..." oninput="filterChapters(this.value)">
      <ul class="chapter-nav" id="chapterNav">
${sidebarHtml}
      </ul>
    </aside>

    <!-- Main Content Area -->
    <main class="main-content" id="chapterContainer">
${allChapters[1]}
    </main>
  </div>

  <!-- Inlined Preloaded Chapter Data Bundle: Guaranteed Instant Load Offline with Zero Cache Issues -->
  <script>
    window.CHAPTER_DATA = ${JSON.stringify(allChapters)};
  </script>

  <script>
    let currentCh = 1;

    function toggleQ(id) {
      const card = document.getElementById(id);
      if (card) {
        card.classList.toggle('open');
      }
    }

    function showChapter(n, updateHistory = true) {
      currentCh = n;

      // Update chip active states
      document.querySelectorAll('.bc-chip').forEach(c => {
        c.classList.toggle('active', parseInt(c.dataset.ch) === n);
      });

      // Scroll active chip into view smoothly
      const activeChip = document.querySelector(\`.bc-chip[data-ch="\${n}"]\`);
      if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

      // Update sidebar active link
      document.querySelectorAll('#chapterNav li a').forEach(a => {
        a.classList.toggle('active', parseInt(a.dataset.ch) === n);
      });

      // Load Chapter Content directly from inlined bundle
      const container = document.getElementById('chapterContainer');
      if (window.CHAPTER_DATA && window.CHAPTER_DATA[n]) {
        container.innerHTML = window.CHAPTER_DATA[n];
      }

      if (updateHistory) {
        window.location.hash = 'ch' + n;
      }
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }

    // Filter chapters in sidebar
    function filterChapters(val) {
      const q = val.toLowerCase();
      document.querySelectorAll('#chapterNav li').forEach(li => {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(q) ? '' : 'none';
      });
    }

    // Hash navigation on initial load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash;
      const match = hash.match(/^#ch(\\d+)$/);
      if (match) {
        const ch = parseInt(match[1]);
        if (ch >= 1 && ch <= 12) {
          showChapter(ch, false);
          return;
        }
      }
    });

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      const match = hash.match(/^#ch(\\d+)$/);
      if (match) {
        const ch = parseInt(match[1]);
        if (ch >= 1 && ch <= 12 && ch !== currentCh) {
          showChapter(ch, false);
        }
      }
    });

    // Mobile nav toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-maths.html'), html, 'utf8');
console.log('Successfully generated ncert-solutions-class-6-maths.html matching Class 9 Maths design!');
