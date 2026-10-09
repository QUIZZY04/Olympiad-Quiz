// scripts/build-c6sst-hub.js
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6sst');

const allChapters = {};
for (let i = 1; i <= 14; i++) {
  const filePath = path.join(dir, `ch${i}.html`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing chapter file: ${filePath}`);
  }
  allChapters[i] = fs.readFileSync(filePath, 'utf8');
}

const chapters = [
  { num: 1, title: 'Locating Places on the Earth', short: 'Locating Places', desc: 'Latitudes, Longitudes, Grid & Standard Time (IST)' },
  { num: 2, title: 'Oceans and Continents', short: 'Oceans & Continents', desc: '7 Continents, 5 Oceans, Hydrosphere & Tectonic Drift' },
  { num: 3, title: 'Landforms and Life', short: 'Landforms & Life', desc: 'Mountains, Plateaus, Plains & Human Adaptations' },
  { num: 4, title: 'Timeline and Sources of History', short: 'Timeline & Sources', desc: 'Archaeological vs Literary Sources, BCE/CE & Carbon Dating' },
  { num: 5, title: 'India, That Is Bharat', short: 'India, That Is Bharat', desc: 'Bharatvarsha, Jambudvipa, Sindhu, Article 1 & Natural Frontiers' },
  { num: 6, title: 'The Beginnings of Indian Civilisation', short: 'Beginnings of Civilisation', desc: 'Harappa, Mohenjo-daro, Town Planning, Great Bath & Lothal' },
  { num: 7, title: "India’s Cultural Roots", short: "Cultural Roots", desc: 'Vedas, Upanishads, Mahavira, Buddha & Epics' },
  { num: 8, title: 'Unity in Diversity', short: 'Unity in Diversity', desc: 'Ladakh vs Kerala Case Studies & Nehru’s Discovery of India' },
  { num: 9, title: 'Family and Community', short: 'Family & Community', desc: 'Family Types, Equal Chores, Community Living & Civic Sense' },
  { num: 10, title: 'Grassroots Democracy — Part 1: Governance', short: 'Governance (Part 1)', desc: 'Three Levels of Government, Rule of Law & Universal Franchise' },
  { num: 11, title: 'Grassroots Democracy — Part 2: Rural Areas', short: 'Rural Governance (Part 2)', desc: 'Panchayati Raj, Gram Sabha, Sarpanch & Secretary' },
  { num: 12, title: 'Grassroots Democracy — Part 3: Urban Areas', short: 'Urban Governance (Part 3)', desc: 'Municipal Corporations, Ward Councillors & Civic Services' },
  { num: 13, title: 'The Value of Work', short: 'The Value of Work', desc: 'Dignity of Labour, Paid vs Unpaid Care Work & Shramdaan' },
  { num: 14, title: 'Economic Activities Around Us', short: 'Economic Activities', desc: 'Primary, Secondary, Tertiary Sectors & Interdependence' }
];

// Generate chips HTML
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
  <title>NCERT Solutions for Class 6 Social Science (Exploring Society: India and Beyond) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Free NCERT Solutions for Class 6 Social Science (Exploring Society: India and Beyond) CBSE 2026-27. Complete all 14 chapters with diagrams, maps, CBSE step marking schemes & CBQs.">
  <meta name="keywords" content="ncert solutions class 6 social science, class 6 sst solutions exploring society india and beyond, class 6 social science ncert 2026-27, locating places on the earth class 6, oceans and continents class 6, india that is bharat class 6, beginnings of indian civilisation class 6, grassroots democracy class 6">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-6-sst.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph Meta Tags -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-6-sst.html">
  <meta property="og:title" content="NCERT Solutions for Class 6 Social Science (Exploring Society: India and Beyond) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="Complete 100% chapter-wise NCERT solutions for Class 6 Social Science with clear diagrams, maps, step-by-step CBSE marking schemes and competency-based questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 6 Social Science (Exploring Society) CBSE 2026-27">
  <meta name="twitter:description" content="Complete 100% chapter-wise NCERT solutions for Class 6 Social Science covering all 14 chapters strictly based on the latest NCERT book.">
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
      { "@type": "ListItem", "position": 4, "name": "Social Science", "item": "https://olympiadquiz.org/ncert-solutions-class-6-sst.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 6 Social Science (Exploring Society: India and Beyond) CBSE 2026-27",
    "description": "Comprehensive chapter-wise solutions for Class 6 Social Science with labeled historical and geographical diagrams, step-by-step CBSE marking schemes, and competency-based questions.",
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
        "name": "Are these solutions strictly based on the new Class 6 Social Science textbook 'Exploring Society: India and Beyond'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, these solutions strictly follow the latest integrated NCERT Class 6 Social Science textbook 'Exploring Society: India and Beyond' designed under NEP 2020 and NCF-SE for CBSE 2024–25 to 2026–27."
        }
      },
      {
        "@type": "Question",
        "name": "Are all 14 chapters and all textbook exercise questions 100% covered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all 14 chapters across all 5 themes (Land & People, Tapestry of Past, Cultural Heritage, Governance, and Economic Life) are 100% strictly covered with comprehensive answers and marking scheme rubrics."
        }
      },
      {
        "@type": "Question",
        "name": "Are visual maps, diagrams, and marking schemes included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every chapter features high-resolution vector SVG diagrams (Earth grid, continents and oceans, plate boundaries, Harappan city layout, spiritual streams, governance pyramids, care economy iceberg, and economic sectors) paired with CBSE exam rubrics."
        }
      },
      {
        "@type": "Question",
        "name": "Is access completely free without payment or login?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all NCERT solutions on OlympiadQuiz are 100% free with instant, preloaded offline access and no paywall or mandatory login."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">

  <style>
    :root {
      --brand: #0d9488;
      --brand-hover: #0f766e;
      --brand-light: #f0fdfa;
      --brand-text: #115e59;
      --accent: #14b8a6;
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
    .logo-text { font-size: 1.15rem; font-weight: 800; color: white; font-family: 'Outfit', sans-serif; }
    .logo-text span { color: #2dd4bf; }
    .navbar-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; padding: 6px 12px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: white; border: 1px solid #e2e8f0; border-radius: 10px; min-width: 250px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); z-index: 1000; padding: 6px; }
    .nav-dropdown-content a { display: block; padding: 8px 14px; color: #334155; text-decoration: none; font-size: 0.85rem; border-radius: 6px; transition: 0.2s; }
    .nav-dropdown-content a:hover { background: #f1f5f9; color: #0f172a !important; }
    .navbar-actions { display: flex; align-items: center; gap: 10px; }
    .btn-login { background: #0d9488; color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; }
    .btn-login:hover { background: #0f766e; }
    .navbar-toggle { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 6px; }
    .navbar-toggle span { display: block; width: 22px; height: 2px; background: white; border-radius: 2px; }

    /* ── NCERT SUBJECT BREADCRUMB & SWITCHER ── */
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
      color: #0d9488;
      text-decoration: underline;
    }
    .ncert-bc-sep {
      color: #cbd5e1;
      font-size: 0.75rem;
    }
    .ncert-bc-current {
      color: #0d9488;
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
      background: #f0fdfa;
      color: #0d9488;
      border-color: #99f6e4;
      transform: translateY(-1px);
    }
    .ncert-bc-pill.active {
      background: #0d9488;
      color: #ffffff;
      border-color: #0d9488;
      box-shadow: 0 2px 6px rgba(13,148,136,0.3);
    }
    @media (max-width: 768px) {
      .ncert-breadcrumb-nav { padding: 8px 16px; }
      .ncert-bc-switch { overflow-x: auto; width: 100%; padding-bottom: 2px; }
    }

    /* ── HERO BANNER ── */
    .hero-banner { background: linear-gradient(135deg, #042f2e 0%, #0f172a 100%); color: white; padding: 36px 24px; text-align: center; border-bottom: 3px solid var(--brand); }
    .hero-banner h1 { font-size: 1.85rem; font-weight: 800; margin-bottom: 8px; font-family: 'Outfit', sans-serif; }
    .hero-banner p { color: #99f6e4; font-size: .95rem; max-width: 780px; margin: 0 auto 16px; }
    .hero-badges { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .hero-badge { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); padding: 6px 14px; border-radius: 20px; font-size: .8rem; font-weight: 600; color: #e2e8f0; }

    /* ── CHAPTER JUMP BREADCRUMB BAR ── */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 14px 36px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    .breadcrumb-label { font-size: .72rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .06em; margin-bottom: 10px; }
    .breadcrumb-chips { display: flex; gap: 6px; flex-wrap: wrap; }
    .bc-chip { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 20px; font-size: .78rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: all .18s; user-select: none; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(13,148,136,.35); }
    .bc-chip .bc-n { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: rgba(0,0,0,.12); border-radius: 50%; font-size: .68rem; font-weight: 800; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,.25); }

    /* Layout */
    .main-layout { display: flex; max-width: 1380px; margin: 0 auto; }
    .sidebar { width: 320px; background: white; border-right: 1px solid var(--border); padding: 20px 16px; position: sticky; top: 117px; height: calc(100vh - 117px); overflow-y: auto; flex-shrink: 0; }
    .sidebar-title { font-size: .85rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .05em; margin-bottom: 12px; }
    .search-box { width: 100%; padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px; font-size: .85rem; margin-bottom: 16px; font-family: inherit; }
    .search-box:focus { outline: none; border-color: var(--brand); }
    .chapter-nav { list-style: none; }
    .chapter-nav li { margin-bottom: 4px; }
    .chapter-nav li a { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; color: var(--slate); text-decoration: none; font-size: .85rem; font-weight: 500; transition: all .15s; cursor: pointer; }
    .chapter-nav li a:hover { background: var(--brand-light); color: var(--brand-text); }
    .chapter-nav li a.active { background: var(--brand); color: white; font-weight: 600; }
    .chapter-nav li a.active small { color: #ccfbf1 !important; }
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
    .ex-div { width: 100%; margin: 28px 0 16px; }
    .ex-heading { font-size: .85rem; font-weight: 750; text-transform: uppercase; color: var(--brand-text); background: var(--brand-light); border: 1.5px solid #99f6e4; border-radius: 8px; padding: 10px 18px; display: inline-block; letter-spacing: .04em; }

    /* Question Card */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 20px; box-shadow: var(--shadow); transition: all .2s; overflow: hidden; }
    .q-card:hover { border-color: #99f6e4; box-shadow: var(--shadow-hover); }
    .q-header { padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; cursor: pointer; user-select: none; background: #fafafa; border-bottom: 1px solid #f1f5f9; }
    .q-title { font-weight: 700; color: var(--navy); font-size: .95rem; flex: 1; }
    .q-type { font-size: .72rem; font-weight: 700; padding: 4px 10px; border-radius: 12px; text-transform: uppercase; letter-spacing: .04em; }
    .badge-mcq { background: #e0f2fe; color: #0369a1; }
    .badge-short { background: #fef3c7; color: #b45309; }
    .badge-long { background: #fce7f3; color: #be185d; }
    .badge-explain { background: #dcfce7; color: #15803d; }
    .badge-compare { background: #f3e8ff; color: #7e22ce; }
    .badge-define { background: #ffedd5; color: #c2410c; }
    .badge-describe { background: #ede9fe; color: #6d28d9; }
    .badge-analyze { background: #e2e8f0; color: #334155; }
    .badge-analysis { background: #e2e8f0; color: #334155; }
    .badge-concept { background: #cffafe; color: #0e7490; }
    .badge-application { background: #dbeafe; color: #1d4ed8; }
    .badge-value-based { background: #fef08a; color: #854d0e; }
    .badge-think { background: #fef9c3; color: #a16207; }

    .toggle-icon { color: var(--muted); font-size: 0.8rem; transition: transform .2s ease; }

    /* Question Body */
    .q-body { padding: 18px 20px; }
    .question-text { font-size: .95rem; color: #0f172a; margin-bottom: 14px; line-height: 1.6; }
    .answer-box { background: #fbfcfe; border: 1.5px solid #f1f5f9; border-radius: 10px; padding: 16px; margin-bottom: 12px; }
    .answer-box p { margin-bottom: 8px; font-size: .9rem; line-height: 1.65; }
    .answer-box .step { display: block; background: #f0fdfa; border-left: 3.5px solid var(--brand); padding: 8px 12px; margin: 8px 0; border-radius: 0 6px 6px 0; font-size: .88rem; }
    .answer-box .step-list { padding-left: 20px; font-size: .88rem; margin: 6px 0 10px; display: flex; flex-direction: column; gap: 4px; }

    /* Marking Scheme */
    .marking-scheme { background: #fffbeb; border: 1px solid #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 10px 14px; font-size: .82rem; color: #92400e; margin-top: 12px; }
    .ms-title { font-weight: 750; display: block; margin-bottom: 4px; color: #b45309; }

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
            <a href="ncert-solutions-class-10-sst.html">Class 10 Social Science 🏛️</a>
            <a href="ncert-solutions-class-9-maths.html">Class 9 Maths ✨</a>
            <a href="ncert-solutions-class-9-science.html">Class 9 Science 🔬</a>
            <a href="ncert-solutions-class-6-maths.html">Class 6 Maths 📐</a>
            <a href="ncert-solutions-class-6-science.html">Class 6 Science 🔬</a>
            <a href="ncert-solutions-class-6-sst.html" style="font-weight:700;color:#0d9488;background:#f0fdfa;">Class 6 Social Science 🌍 (Active)</a>
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

  <!-- NCERT SUBJECT BREADCRUMB -->
  <nav class="ncert-breadcrumb-nav" aria-label="NCERT Navigation">
    <div class="ncert-bc-container">
      <ul class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html#class6">Class 6</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">Social Science</li>
      </ul>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Class 6 Subjects:</span>
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill">Maths (Ganita Prakash)</a>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill">Science (Curiosity)</a>
        <a href="ncert-solutions-class-6-sst.html" class="ncert-bc-pill active">Social Science (Exploring Society)</a>
      </div>
    </div>
  </nav>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <h1>NCERT Solutions for Class 6 Social Science</h1>
    <p>Complete 100% Chapter-Wise Step-by-Step Solutions for <em>Exploring Society: India and Beyond</em> (CBSE 2026-27). Strictly covers all 14 chapters across Geography, History, Civics &amp; Economics with custom diagrams &amp; marking schemes.</p>
    <div class="hero-badges">
      <div class="hero-badge">📘 Exploring Society: India and Beyond</div>
      <div class="hero-badge">✨ NEP 2020 &amp; NCF-SE Aligned</div>
      <div class="hero-badge">🎯 100% Chapters Covered (14/14)</div>
      <div class="hero-badge">📊 CBSE Step Marking Schemes</div>
    </div>
  </header>

  <!-- Quick Chapter Jump Chips Bar -->
  <div class="breadcrumb-bar">
    <div class="breadcrumb-label">Jump to Chapter:</div>
    <div class="breadcrumb-chips">
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

  <!-- Inlined Preloaded Chapter Data Bundle: Instant Load Offline with Zero CORS issues -->
  <script>
    window.CHAPTER_DATA = ${JSON.stringify(allChapters)};

    let currentCh = 1;

    // Toggle question card
    function toggleQ(id) {
      const card = document.getElementById(id);
      if (card) {
        const body = card.querySelector('.q-body');
        const icon = card.querySelector('.toggle-icon');
        if (body) {
          const isClosed = body.style.display === 'none';
          body.style.display = isClosed ? 'block' : 'none';
          if (icon) {
            icon.style.transform = isClosed ? 'rotate(0deg)' : 'rotate(-90deg)';
          }
        } else {
          card.classList.toggle('open');
        }
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
        if (ch >= 1 && ch <= 14) {
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
        if (ch >= 1 && ch <= 14 && ch !== currentCh) {
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

    // Reading progress bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('progressBar');
      if (bar) bar.style.width = scrolled + '%';
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-sst.html'), html, 'utf8');
console.log('Successfully generated ncert-solutions-class-6-sst.html with all 14 chapters!');

// Also create alias / mirror ncert-solutions-class-6-social-science.html
fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-social-science.html'), html, 'utf8');
console.log('Successfully generated ncert-solutions-class-6-social-science.html alias!');
