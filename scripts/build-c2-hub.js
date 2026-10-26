// scripts/build-c2-hub.js
// Generator for Class 2 NCERT Solutions Central Hub (ncert-solutions-class-2.html)
// Connects all 4 subjects and 8 textbooks across 120 chapters for Academic Session 2026-27

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Load Data for links and titles
const { joyfulMathsChapters } = require('./data-c2-maths/joyfulMathsData.js');
const { mathMagicChapters } = require('./data-c2-maths/mathMagicData.js');

const { mridangChapters } = require('./data-c2-english/mridangData.js');
const { marigoldChapters } = require('./data-c2-english/marigoldData.js');

const { sarangiChapters } = require('./data-c2-hindi/sarangiData.js');
const { rimjhimChapters } = require('./data-c2-hindi/rimjhimData.js');

const { livingWorldChapters } = require('./data-c2-evs/livingWorldData.js');
const { surroundingsChapters } = require('./data-c2-evs/surroundingsData.js');

console.log("=== BUILDING NCERT CLASS 2 CENTRAL HUB PAGE ===");

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 2 All Subjects CBSE 2026-27 | Maths, English, Hindi, EVS | OlympiadQuiz</title>
  <meta name="description" content="100% Free &amp; Complete NCERT Class 2 Solutions for all subjects (Session 2026–27). Chapter-wise solutions for Maths (Joyful Mathematics &amp; Math-Magic), English (Mridang &amp; Marigold), Hindi (Sarangi &amp; Rimjhim), and EVS (Our Living World &amp; Surroundings). Step-by-step marking schemes, diagrams &amp; NEP 2020 CBQs.">
  <meta name="keywords" content="ncert solutions class 2, class 2 ncert solutions all subjects, cbse class 2 2026-27, class 2 joyful mathematics, class 2 math magic, class 2 mridang english, class 2 marigold, class 2 sarangi hindi, class 2 rimjhim, class 2 evs living world, free class 2 ncert solutions">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-2.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-2.html">
  <meta property="og:title" content="NCERT Solutions for Class 2 All Subjects CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% complete chapter-wise NCERT solutions for Class 2 Maths, English, Hindi, and EVS covering both NEP 2020 and Classic CBSE textbooks across 120 chapters.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 2 All Subjects CBSE 2026-27 | OlympiadQuiz">
  <meta name="twitter:description" content="Complete textbook solutions for Class 2 Maths, English, Hindi, and EVS across 8 official NCERT textbooks with step-by-step marking rubrics.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 2 Hub", "item": "https://olympiadquiz.org/ncert-solutions-class-2.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 2 All Subjects CBSE 2026-27",
    "description": "Comprehensive NCERT Solutions for Class 2 covering Mathematics (Joyful Mathematics & Math-Magic), English (Mridang & Marigold), Hindi (Sarangi & Rimjhim), and Environmental Studies (Our Living World & Surroundings).",
    "educationalLevel": "CBSE Class 2",
    "learningResourceType": "Textbook Solutions Hub",
    "inLanguage": ["en", "hi"],
    "isAccessibleForFree": true,
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
        "name": "Which textbooks and subjects are covered in Class 2 NCERT Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All 4 core subjects are 100% covered across both NEP 2020 (New NCF-FS) and Classic CBSE tracks: Mathematics (Joyful Mathematics & Math-Magic), English (Mridang & Marigold), Hindi (Sarangi & Rimjhim), and EVS (Our Living World & Surroundings), totaling 8 textbooks and 120 standalone chapters."
        }
      },
      {
        "@type": "Question",
        "name": "Are the Class 2 solutions updated for the latest academic session 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all solutions are strictly aligned with the latest CBSE 2026-27 curriculum, NCF-FS guidelines, official step-marking schemes, and NEP 2020 competency-based questions."
        }
      },
      {
        "@type": "Question",
        "name": "Is access to Class 2 NCERT solutions free on OlympiadQuiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all Class 2 NCERT solutions are 100% free with no subscription, paywall, or mandatory login required."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --navy: #0f172a;
      --slate: #475569;
      --border: #e2e8f0;
      --brand: #2563eb;
      --brand-orange: #ea580c;
      --brand-green: #059669;
      --brand-purple: #7c3aed;
      --bg: #f8fafc;
      --surface: #ffffff;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: var(--bg); color: #1e293b; line-height: 1.6; }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid #1e293b; padding: 0 20px; position: sticky; top: 0; z-index: 99; }
    .navbar-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 60px; }
    .navbar-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 800; font-size: 1.15rem; }
    .navbar-logo span span { color: #f97316; }
    .navbar-links { display: flex; gap: 20px; align-items: center; }
    .nav-link { color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: color 0.2s; }
    .nav-link:hover, .nav-link.active { color: white; }
    .nav-dropdown { position: relative; display: inline-block; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: #1e293b; min-width: 220px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); border-radius: 8px; padding: 8px 0; z-index: 100; border: 1px solid #334155; }
    .nav-dropdown:hover .nav-dropdown-content { display: block; }
    .nav-dropdown-content a { color: #cbd5e1; padding: 8px 16px; text-decoration: none; display: block; font-size: 0.85rem; font-weight: 500; transition: all 0.2s; }
    .nav-dropdown-content a:hover { background: #334155; color: #38bdf8; padding-left: 20px; }
    .btn-login { background: #2563eb; color: white; padding: 6px 16px; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: background 0.2s; }
    .btn-login:hover { background: #1d4ed8; }

    /* Breadcrumbs */
    .ncert-breadcrumb-nav { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 12px 20px; font-size: 0.88rem; }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .ncert-bc-list { list-style: none; display: flex; align-items: center; gap: 8px; margin: 0; padding: 0; }
    .ncert-bc-list a { color: #2563eb; text-decoration: none; font-weight: 500; }
    .ncert-bc-list a:hover { text-decoration: underline; }
    .ncert-bc-sep { color: #94a3b8; }
    .ncert-bc-current { color: #475569; font-weight: 700; }

    /* Hero */
    .hero { background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #1e3a8a 100%); color: white; padding: 48px 20px 42px; text-align: center; }
    .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.2); padding: 4px 14px; border-radius: 20px; font-size: .82rem; font-weight: 700; color: #bfdbfe; margin-bottom: 16px; }
    .hero h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; letter-spacing: -.02em; margin-bottom: 14px; line-height: 1.25; }
    .hero p { font-size: 1.05rem; max-width: 860px; margin: 0 auto 24px; color: #cbd5e1; line-height: 1.7; }
    .hero-stats { display: flex; justify-content: center; flex-wrap: wrap; gap: 24px; margin-top: 10px; }
    .stat-box { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); border-radius: 12px; padding: 12px 20px; min-width: 140px; }
    .stat-num { font-size: 1.5rem; font-weight: 900; color: #60a5fa; }
    .stat-label { font-size: .78rem; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; font-weight: 700; }

    /* Main Container */
    .main-wrap { max-width: 1400px; margin: 40px auto 60px; padding: 0 20px; }

    /* Section Headings */
    .sec-head { text-align: center; margin-bottom: 32px; }
    .sec-badge { font-size: .8rem; font-weight: 800; text-transform: uppercase; letter-spacing: .06em; color: var(--brand); background: #eff6ff; padding: 4px 12px; border-radius: 20px; display: inline-block; margin-bottom: 8px; }
    .sec-title { font-size: 1.8rem; font-weight: 900; color: var(--navy); }
    .sec-sub { font-size: .95rem; color: var(--slate); margin-top: 4px; }

    /* Subject Grid */
    .subject-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 48px; }
    .subject-card { background: white; border: 1.5px solid var(--border); border-radius: 20px; padding: 26px; box-shadow: 0 4px 12px rgba(0,0,0,.03); transition: all .25s ease; display: flex; flex-direction: column; justify-content: space-between; }
    .subject-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,.08); border-color: #cbd5e1; }
    .subject-card-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
    .sub-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; }
    .sub-card-maths .sub-icon { background: #eff6ff; }
    .sub-card-english .sub-icon { background: #f0f9ff; }
    .sub-card-hindi .sub-icon { background: #fff7ed; }
    .sub-card-evs .sub-icon { background: #ecfdf5; }

    .sub-badge { font-size: .75rem; font-weight: 800; padding: 3px 10px; border-radius: 20px; }
    .sub-card-maths .sub-badge { background: #eff6ff; color: #1d4ed8; }
    .sub-card-english .sub-badge { background: #f0f9ff; color: #0284c7; }
    .sub-card-hindi .sub-badge { background: #fff7ed; color: #ea580c; }
    .sub-card-evs .sub-badge { background: #ecfdf5; color: #059669; }

    .sub-title { font-size: 1.35rem; font-weight: 900; color: var(--navy); margin-bottom: 8px; }
    .sub-desc { font-size: .9rem; color: var(--slate); margin-bottom: 20px; line-height: 1.6; }
    .sub-books { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; }
    .sub-book-item { display: flex; align-items: center; justify-content: space-between; background: #f8fafc; border: 1px solid var(--border); padding: 8px 12px; border-radius: 8px; font-size: .84rem; font-weight: 600; color: #334155; }
    .sub-book-count { font-size: .78rem; font-weight: 700; color: #64748b; background: white; padding: 2px 8px; border-radius: 12px; border: 1px solid #e2e8f0; }

    .btn-view-sub { display: block; text-align: center; padding: 12px; border-radius: 10px; font-size: .92rem; font-weight: 700; text-decoration: none; transition: background .2s; }
    .sub-card-maths .btn-view-sub { background: #2563eb; color: white; }
    .sub-card-maths .btn-view-sub:hover { background: #1d4ed8; }
    .sub-card-english .btn-view-sub { background: #0284c7; color: white; }
    .sub-card-english .btn-view-sub:hover { background: #0369a1; }
    .sub-card-hindi .btn-view-sub { background: #ea580c; color: white; }
    .sub-card-hindi .btn-view-sub:hover { background: #c2410c; }
    .sub-card-evs .btn-view-sub { background: #059669; color: white; }
    .sub-card-evs .btn-view-sub:hover { background: #047857; }

    .ch-dir-pill { display: inline-block; padding: 4px 8px; font-size: 0.76rem; font-weight: 700; color: #334155; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-decoration: none; transition: all .15s; }
    .ch-dir-pill:hover { background: #2563eb; color: white; border-color: #2563eb; }

    /* Footer */
    .footer { background: #0f172a; color: #94a3b8; padding: 40px 20px; text-align: center; font-size: .85rem; border-top: 1px solid #1e293b; }
    .footer a { color: #60a5fa; text-decoration: none; }
    .footer a:hover { text-decoration: underline; }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;" loading="lazy">
        <span>Olympiad<span>Quiz</span></span>
      </a>
      <div class="navbar-links">
        <a href="index.html" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="ncert-solutions.html" class="nav-link" style="color:white;">NCERT Solutions ▾</a>
          <div class="nav-dropdown-content">
            <a href="ncert-solutions-class-2.html"><strong>Class 2 Solutions (All Subjects)</strong></a>
            <a href="ncert-solutions-class-3.html">Class 3 Solutions</a>
            <a href="ncert-solutions-class-4.html">Class 4 Solutions</a>
            <a href="ncert-solutions-class-5.html">Class 5 Solutions</a>
            <a href="ncert-solutions-class-6.html">Class 6 Solutions</a>
          </div>
        </div>
        <a href="mock.html" class="nav-link">Mock Tests</a>
        <a href="dashboard.html" class="btn-login">Dashboard</a>
      </div>
    </div>
  </nav>

  <!-- Secondary Breadcrumbs -->
  <div class="ncert-breadcrumb-nav">
    <div class="ncert-bc-container">
      <ul class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">Class 2 Hub</li>
      </ul>
      <span style="font-size:0.8rem;color:#059669;font-weight:700;">Academic Session 2026–27 • 100% Free</span>
    </div>
  </div>

  <!-- Hero Banner -->
  <header class="hero">
    <div class="hero-badge">CBSE Academic Session 2026–27 • Complete NCERT Solutions</div>
    <h1>NCERT Solutions for Class 2</h1>
    <p>Comprehensive chapter-wise NCERT solutions for Class 2 across all 4 core subjects: <strong>Mathematics, English, Hindi, and Environmental Studies (EVS)</strong>. Fully aligned with the <strong>New NEP 2020 (NCF-FS)</strong> and official textbooks alongside classic CBSE track reference modules. Featuring step-by-step CBSE marking schemes, high-resolution vector SVG diagrams, and competency-based case studies.</p>
    <div class="hero-stats">
      <div class="stat-box">
        <div class="stat-num">4</div>
        <div class="stat-label">Core Subjects</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">8</div>
        <div class="stat-label">Official Books</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">120</div>
        <div class="stat-label">Total Chapters</div>
      </div>
      <div class="stat-box">
        <div class="stat-num">100%</div>
        <div class="stat-label">Dual-Track Coverage</div>
      </div>
    </div>
  </header>

  <!-- Main Content Wrap -->
  <main class="main-wrap">

    <!-- Subject Directory -->
    <div class="sec-head">
      <span class="sec-badge">Class 2 Directory</span>
      <h2 class="sec-title">Explore Class 2 Subjects (Dual Track)</h2>
      <p class="sec-sub">Select a subject below to access chapter-wise solutions with dual-book toggles (NEP 2020 + Classic CBSE) and complete CBSE rubrics.</p>
    </div>

    <div class="subject-grid">

      <!-- Mathematics -->
      <div class="subject-card sub-card-maths">
        <div>
          <div class="subject-card-top">
            <div class="sub-icon">📐</div>
            <span class="sub-badge">26 Chapters Total</span>
          </div>
          <h3 class="sub-title">Mathematics</h3>
          <p class="sub-desc">Comprehensive step-by-step solutions for Joyful Mathematics and Math-Magic covering grouping, place value, 2D &amp; 3D shapes, money, measurements, capacity, and data handling.</p>
          <div class="sub-books">
            <div class="sub-book-item">
              <span class="sub-book-name">📘 Joyful Mathematics (NEP 2020)</span>
              <span class="sub-book-count">11 Chapters</span>
            </div>
            <div class="sub-book-item">
              <span class="sub-book-name">📙 Math-Magic Book 2 (Classic CBSE)</span>
              <span class="sub-book-count">15 Chapters</span>
            </div>
          </div>
        </div>
        <a href="ncert-solutions-class-2-maths.html" class="btn-view-sub">View Maths Solutions →</a>
      </div>

      <!-- English -->
      <div class="subject-card sub-card-english">
        <div>
          <div class="subject-card-top">
            <div class="sub-icon">📖</div>
            <span class="sub-badge">29 Chapters Total</span>
          </div>
          <h3 class="sub-title">English</h3>
          <p class="sub-desc">Exhaustive chapter modules for Mridang and Marigold Book 2 across joyful poems and stories. Complete reading comprehension, vocabulary banks, grammar, and writing rubrics.</p>
          <div class="sub-books">
            <div class="sub-book-item">
              <span class="sub-book-name">📘 Mridang (NEP 2020)</span>
              <span class="sub-book-count">9 Chapters</span>
            </div>
            <div class="sub-book-item">
              <span class="sub-book-name">📙 Marigold Book 2 (Classic CBSE)</span>
              <span class="sub-book-count">20 Chapters</span>
            </div>
          </div>
        </div>
        <a href="ncert-solutions-class-2-english.html" class="btn-view-sub">View English Solutions →</a>
      </div>

      <!-- Hindi -->
      <div class="subject-card sub-card-hindi">
        <div>
          <div class="subject-card-top">
            <div class="sub-icon">📚</div>
            <span class="sub-badge">41 पाठ / अध्याय</span>
          </div>
          <h3 class="sub-title">Hindi (हिंदी)</h3>
          <p class="sub-desc">कक्षा 2 हिंदी की आधिकारिक पाठ्यपुस्तकों (सारंगी एवं रिमझिम भाग २) का संपूर्ण समाधान: काव्यांश भावार्थ, शब्दार्थ, पाठ्यपुस्तक प्रश्नोत्तर, भाषा की बात (व्याकरण), एवं योग्यता-आधारित प्रश्न।</p>
          <div class="sub-books">
            <div class="sub-book-item">
              <span class="sub-book-name">📕 सारंगी - Sarangi (NEP 2020)</span>
              <span class="sub-book-count">26 पाठ</span>
            </div>
            <div class="sub-book-item">
              <span class="sub-book-name">📙 रिमझिम भाग २ - Rimjhim (Classic)</span>
              <span class="sub-book-count">15 पाठ</span>
            </div>
          </div>
        </div>
        <a href="ncert-solutions-class-2-hindi.html" class="btn-view-sub">हिंदी समाधान देखें →</a>
      </div>

      <!-- EVS -->
      <div class="subject-card sub-card-evs">
        <div>
          <div class="subject-card-top">
            <div class="sub-icon">🌿</div>
            <span class="sub-badge">24 Chapters Total</span>
          </div>
          <h3 class="sub-title">Environmental Studies (EVS)</h3>
          <p class="sub-desc">Foundational environmental awareness: body parts, senses, family, living creatures, plants, water conservation, community helpers, seasons, and protecting Mother Earth.</p>
          <div class="sub-books">
            <div class="sub-book-item">
              <span class="sub-book-name">🌿 Our Living World &amp; Nature (NEP)</span>
              <span class="sub-book-count">12 Chapters</span>
            </div>
            <div class="sub-book-item">
              <span class="sub-book-name">🌍 Surroundings &amp; Community (Classic)</span>
              <span class="sub-book-count">12 Chapters</span>
            </div>
          </div>
        </div>
        <a href="ncert-solutions-class-2-evs.html" class="btn-view-sub">View EVS Solutions →</a>
      </div>

    </div>

    <!-- Chapterwise Modular Directory (100% Comprehensive Coverage) -->
    <section class="sec-head" style="margin-top: 50px;">
      <span class="sec-badge" style="background:#dcfce7;color:#15803d;">🚀 Modular Chapter-Wise Pages (100% Coverage)</span>
      <h2 class="sec-title">Quick Direct Chapter Directory (All 120 Chapters)</h2>
      <p class="sec-sub">Access dedicated, standalone chapter pages with every single exercise, in-text activity, and CBSE marking rubric from NCERT &amp; Tiwari Academy.</p>
    </section>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
      
      <!-- Maths Card -->
      <div style="background:#ffffff; border:1.5px solid #bfdbfe; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(37,99,235,0.06);">
        <h4 style="color:#1d4ed8; font-size:1.05rem; font-weight:800; margin-bottom:10px;">📐 Mathematics (26 Chapters)</h4>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📘 Joyful Mathematics (11 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
          ${joyfulMathsChapters.map(ch => `<a href="chapters-c2m/joyful-maths-ch${ch.num}.html" class="ch-dir-pill">Ch ${ch.num}</a>`).join('')}
        </div>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📙 Math-Magic (15 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${mathMagicChapters.map(ch => `<a href="chapters-c2m/math-magic-ch${ch.num}.html" class="ch-dir-pill">Ch ${ch.num}</a>`).join('')}
        </div>
      </div>

      <!-- English Card -->
      <div style="background:#ffffff; border:1.5px solid #bae6fd; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(2,132,199,0.06);">
        <h4 style="color:#0369a1; font-size:1.05rem; font-weight:800; margin-bottom:10px;">📖 English (29 Chapters)</h4>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📘 Mridang (9 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
          ${mridangChapters.map(ch => `<a href="chapters-c2e/mridang-ch${ch.num}.html" class="ch-dir-pill">Ch ${ch.num}</a>`).join('')}
        </div>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📙 Marigold Book 2 (20 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${marigoldChapters.map(ch => `<a href="chapters-c2e/marigold-ch${ch.num}.html" class="ch-dir-pill">Ch ${ch.num}</a>`).join('')}
        </div>
      </div>

      <!-- Hindi Card -->
      <div style="background:#ffffff; border:1.5px solid #fed7aa; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(234,88,12,0.06);">
        <h4 style="color:#c2410c; font-size:1.05rem; font-weight:800; margin-bottom:10px;">📚 Hindi (41 पाठ)</h4>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📕 सारंगी (26 पाठ):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
          ${sarangiChapters.map(ch => `<a href="chapters-c2h/sarangi-ch${ch.num}.html" class="ch-dir-pill">पाठ ${ch.num}</a>`).join('')}
        </div>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">📙 रिमझिम भाग २ (15 पाठ):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${rimjhimChapters.map(ch => `<a href="chapters-c2h/rimjhim-ch${ch.num}.html" class="ch-dir-pill">पाठ ${ch.num}</a>`).join('')}
        </div>
      </div>

      <!-- EVS Card -->
      <div style="background:#ffffff; border:1.5px solid #a7f3d0; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(5,150,105,0.06);">
        <h4 style="color:#047857; font-size:1.05rem; font-weight:800; margin-bottom:10px;">🌿 Environmental Studies (24 Chapters)</h4>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">🌿 Our Living World (12 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
          ${livingWorldChapters.map(ch => `<a href="chapters-c2evs/living-world-ch${ch.num}.html" class="ch-dir-pill">Ch ${ch.num}</a>`).join('')}
        </div>
        <div style="font-size:0.8rem; font-weight:700; color:#475569; margin-bottom:6px;">🌍 Surroundings &amp; Community (12 Chs):</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${surroundingsChapters.map(ch => `<a href="chapters-c2evs/surroundings-ch${ch.num}.html" class="ch-dir-pill">Ch ${ch.num}</a>`).join('')}
        </div>
      </div>

    </div>

  </main>

  <!-- Footer -->
  <footer class="footer">
    <div style="margin-bottom: 12px;">
      <a href="index.html">Home</a> •
      <a href="ncert-solutions.html">NCERT Solutions</a> •
      <a href="ncert-solutions-class-2.html">Class 2 Hub</a> •
      <a href="ncert-solutions-class-3.html">Class 3 Solutions</a> •
      <a href="ncert-solutions-class-4.html">Class 4 Solutions</a>
    </div>
    <p>© 2026–27 OlympiadQuiz.org — 100% Free Complete NCERT Solutions for CBSE &amp; State Boards.</p>
  </footer>

</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-2.html'), htmlContent, 'utf8');
console.log(`✓ Successfully generated ncert-solutions-class-2.html (${htmlContent.length.toLocaleString()} bytes)!`);
