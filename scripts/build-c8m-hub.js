const fs = require('fs');
const path = require('path');

const chapters = [
  { num: 1, name: "Rational Numbers" },
  { num: 2, name: "Linear Equations in One Variable" },
  { num: 3, name: "Understanding Quadrilaterals" },
  { num: 4, name: "Data Handling" },
  { num: 5, name: "Squares and Square Roots" },
  { num: 6, name: "Cubes and Cube Roots" },
  { num: 7, name: "Comparing Quantities" },
  { num: 8, name: "Algebraic Expressions & Identities" },
  { num: 9, name: "Mensuration" },
  { num: 10, name: "Exponents and Powers" },
  { num: 11, name: "Direct & Inverse Proportions" },
  { num: 12, name: "Factorisation" },
  { num: 13, name: "Introduction to Graphs" }
];

const allChaptersHtml = chapters.map(ch => {
  let content = fs.readFileSync(path.join(__dirname, '..', 'chapters-c8m', `ch${ch.num}.html`), 'utf8');
  if (ch.num > 1) {
    content = content.replace('<section class="chapter-section"', '<section class="chapter-section hidden"');
  }
  return content;
}).join('\n\n');

const breadcrumbChips = chapters.map(ch => 
  `<span class="bc-chip${ch.num === 1 ? ' active' : ''}" onclick="showChapter(${ch.num})" data-ch="${ch.num}"><span class="bc-n">${ch.num}</span>${ch.name}</span>`
).join('\n      ');

const sidebarList = chapters.map(ch => 
  `<li><a onclick="showChapter(${ch.num})" data-ch="${ch.num}" class="${ch.num === 1 ? 'active' : ''}"><span class="ch-num">${ch.num}</span><span>${ch.name}</span></a></li>`
).join('\n        ');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions Class 8 Maths — All 13 Chapters | 100% Questions Solved CBSE 2026-27</title>
  <meta name="description" content="Free chapter-wise NCERT Solutions for Class 8 Mathematics (Rationalized Syllabus 2026-27). 100% complete exercise questions, step-by-step answers, CBSE marking scheme, and Competency-Based Questions (CBQ) for all 13 chapters.">
  <meta name="keywords" content="NCERT Solutions Class 8 Maths, Class 8 Maths NCERT Solutions, NCERT Maths Class 8, CBSE Class 8 Maths solutions 2026-27, rational numbers, linear equations in one variable, understanding quadrilaterals, data handling, squares and square roots, cubes and cube roots, comparing quantities, algebraic expressions, mensuration, exponents and powers, direct and inverse proportions, factorisation, introduction to graphs">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-8-maths.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="NCERT Solutions Class 8 Maths — All 13 Chapters | CBSE 2026-27">
  <meta property="og:description" content="Complete 100% exercise question solutions for Class 8 Maths with CBSE marking scheme, key formulas, and competency-based questions.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-8-maths.html">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="NCERT Solutions Class 8 Maths — 100% Questions Solved | CBSE 2026-27">
  <meta name="twitter:description" content="100% complete NCERT Class 8 Mathematics exercise questions with step-by-step CBSE marking scheme solutions.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org Breadcrumb -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/"},
      {"@type": "ListItem", "position": 2, "name": "NCERT Solutions Hub", "item": "https://olympiadquiz.org/ncert-solutions.html"},
      {"@type": "ListItem", "position": 3, "name": "Class 8 Maths", "item": "https://olympiadquiz.org/ncert-solutions-class-8-maths.html"}
    ]
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
        "name": "How many chapters are in Class 8 Maths NCERT textbook for 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The latest rationalized CBSE Class 8 Mathematics textbook contains 13 chapters: Rational Numbers, Linear Equations in One Variable, Understanding Quadrilaterals, Data Handling, Squares and Square Roots, Cubes and Cube Roots, Comparing Quantities, Algebraic Expressions and Identities, Mensuration, Exponents and Powers, Direct and Inverse Proportions, Factorisation, and Introduction to Graphs."
        }
      },
      {
        "@type": "Question",
        "name": "Are 100% of questions and exercises covered in these Class 8 Maths solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100% of all exercise questions across all 13 chapters are solved step-by-step with CBSE standard marking schemes, formulas, and HOTS/Competency-Based Questions."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root{--brand:#4f46e5;--brand-hover:#4338ca;--brand-light:#eef2ff;--brand-text:#3730a3;--navy:#0f172a;--slate:#334155;--muted:#64748b;--light-bg:#f8fafc;--border:#e2e8f0;--shadow:0 4px 6px -1px rgba(0,0,0,0.05);--shadow-hover:0 10px 15px -3px rgba(0,0,0,0.1);}
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Inter',sans-serif;background:var(--light-bg);color:var(--slate);line-height:1.6;}
    .top-progress{position:fixed;top:0;left:0;height:3px;background:var(--brand);z-index:1000;transition:width .1s;}
    .navbar{background:#0f172a;border-bottom:1px solid rgba(255,255,255,0.08);position:sticky;top:0;z-index:900;}
    .navbar-inner{max-width:1380px;margin:0 auto;padding:0 24px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
    .navbar-logo{display:flex;align-items:center;gap:10px;text-decoration:none;}
    .logo-text{font-size:1.15rem;font-weight:800;color:white;}
    .logo-text span{color:#818cf8;}
    .navbar-links{display:flex;align-items:center;gap:8px;}
    .nav-link{color:#94a3b8;font-size:0.85rem;font-weight:600;padding:6px 12px;border-radius:8px;text-decoration:none;transition:0.2s;display:flex;align-items:center;gap:4px;}
    .nav-link:hover{color:white;background:rgba(255,255,255,0.06);}
    .nav-dropdown{position:relative;}
    .nav-dropdown:hover .nav-dropdown-content{display:block !important;}
    .nav-dropdown-content{display:none;position:absolute;top:100%;left:0;background:white;border:1px solid #e2e8f0;border-radius:10px;min-width:240px;box-shadow:0 8px 24px rgba(0,0,0,0.12);z-index:1000;padding:6px;}
    .nav-dropdown-content a{display:block;padding:8px 14px;color:#334155;text-decoration:none;font-size:0.85rem;border-radius:6px;transition:0.2s;}
    .nav-dropdown-content a:hover{background:#f1f5f9;color:#0f172a !important;}
    .navbar-actions{display:flex;align-items:center;gap:10px;}
    .btn-login{background:#4f46e5;color:white;font-size:0.82rem;font-weight:700;padding:7px 18px;border-radius:8px;text-decoration:none;transition:0.2s;}
    .btn-login:hover{background:#4338ca;}
    .navbar-toggle{display:none;background:none;border:none;cursor:pointer;flex-direction:column;gap:5px;padding:6px;}
    .navbar-toggle span{display:block;width:22px;height:2px;background:white;border-radius:2px;}
    
    /* NCERT SUBJECT BREADCRUMB */
    .ncert-breadcrumb-nav { background: #1e1b4b; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 10px 24px; }
    .ncert-bc-container { max-width: 1380px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
    .ncert-bc-list { list-style: none; display: flex; align-items: center; gap: 6px; font-size: 0.82rem; padding: 0; margin: 0; }
    .ncert-bc-list a { color: #a5b4fc; text-decoration: none; font-weight: 500; }
    .ncert-bc-list a:hover { color: #ffffff; }
    .ncert-bc-sep { color: #6366f1; }
    .ncert-bc-current { color: #ffffff; font-weight: 700; }
    .ncert-bc-switch { display: flex; align-items: center; gap: 6px; }
    .ncert-bc-switch-label { font-size: 0.75rem; color: #a5b4fc; font-weight: 600; }
    .ncert-bc-pill { font-size: 0.72rem; padding: 3px 10px; border-radius: 12px; background: rgba(255,255,255,0.08); color: #cbd5e1; text-decoration: none; border: 1px solid rgba(255,255,255,0.15); transition: 0.2s; font-weight: 600; }
    .ncert-bc-pill:hover { background: rgba(255,255,255,0.18); color: #ffffff; }
    .ncert-bc-pill.active { background: #4f46e5; color: #ffffff; border-color: #4f46e5; box-shadow: 0 2px 6px rgba(79,70,229,0.3); }

    .hero-banner{background:linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%);color:white;padding:36px 24px;text-align:center;border-bottom:3px solid var(--brand);}
    .hero-banner h1{font-size:1.85rem;font-weight:800;margin-bottom:8px;}
    .hero-banner p{color:#a5b4fc;font-size:.95rem;max-width:760px;margin:0 auto 16px;}
    .hero-badges{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;}
    .hero-badge{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);padding:6px 14px;border-radius:20px;font-size:.8rem;font-weight:600;color:#e2e8f0;}
    .breadcrumb-bar{background:white;border-bottom:1px solid var(--border);padding:14px 24px;position:sticky;top:60px;z-index:800;box-shadow:0 2px 8px rgba(0,0,0,.04);}
    .breadcrumb-inner{max-width:1380px;margin:0 auto;}
    .breadcrumb-label{font-size:.72rem;font-weight:700;text-transform:uppercase;color:var(--muted);letter-spacing:.06em;margin-bottom:10px;}
    .breadcrumb-chips{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;}
    .breadcrumb-chips::-webkit-scrollbar{height:4px;}
    .breadcrumb-chips::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px;}
    .bc-chip{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:20px;font-size:.78rem;font-weight:600;cursor:pointer;border:1.5px solid var(--border);background:#f8fafc;color:var(--slate);transition:all .18s;user-select:none;white-space:nowrap;flex-shrink:0;}
    .bc-chip:hover{border-color:var(--brand);color:var(--brand-text);background:var(--brand-light);}
    .bc-chip.active{background:var(--brand);color:white;border-color:var(--brand);box-shadow:0 3px 10px rgba(79,70,229,.35);}
    .bc-chip .bc-n{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:rgba(0,0,0,.12);border-radius:50%;font-size:.68rem;font-weight:800;}
    .bc-chip.active .bc-n{background:rgba(255,255,255,.25);}
    .main-layout{display:flex;max-width:1380px;margin:0 auto;}
    .sidebar{width:300px;background:white;border-right:1px solid var(--border);padding:20px 16px;position:sticky;top:125px;height:calc(100vh - 125px);overflow-y:auto;flex-shrink:0;}
    .sidebar-title{font-size:.85rem;font-weight:700;text-transform:uppercase;color:var(--muted);letter-spacing:.05em;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;}
    .search-box{width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-size:.85rem;margin-bottom:16px;font-family:inherit;}
    .search-box:focus{outline:none;border-color:var(--brand);}
    .chapter-nav{list-style:none;}
    .chapter-nav li{margin-bottom:4px;}
    .chapter-nav li a{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;color:var(--slate);text-decoration:none;font-size:.85rem;font-weight:500;transition:all .15s;cursor:pointer;}
    .chapter-nav li a:hover{background:var(--brand-light);color:var(--brand-text);}
    .chapter-nav li a.active{background:var(--brand);color:white;font-weight:600;}
    .ch-num{width:22px;height:22px;background:rgba(0,0,0,.06);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;flex-shrink:0;}
    .chapter-nav li a.active .ch-num{background:rgba(255,255,255,.25);color:white;}
    .main-content{flex:1;padding:0 36px 36px;min-width:0;max-width:1060px;}
    
    .chapter-section{margin-bottom:48px;scroll-margin-top:130px;padding-top:28px;}
    .chapter-section.hidden{display:none !important;}

    .chapter-header{display:flex;align-items:center;gap:14px;margin-bottom:24px;padding-bottom:14px;border-bottom:2px solid var(--border);}
    .ch-badge{width:42px;height:42px;background:var(--brand);color:white;border-radius:12px;font-size:1.15rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .chapter-header-info h2{font-size:1.4rem;font-weight:800;color:var(--navy);}
    .chapter-header-info p{font-size:.825rem;color:var(--muted);margin-top:2px;}
    
    .concept-card{background:linear-gradient(135deg,#f8fafc 0%,#f1f5f9 100%);border:1px solid #cbd5e1;border-radius:12px;padding:16px 20px;margin-bottom:24px;}
    .concept-header{font-size:0.82rem;font-weight:800;color:var(--brand-text);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;display:flex;align-items:center;gap:6px;}
    .concept-list{margin-left:18px;font-size:0.88rem;color:var(--slate);line-height:1.6;}
    .concept-list li{margin-bottom:4px;}

    .q-card{background:white;border:1px solid var(--border);border-radius:12px;margin-bottom:18px;box-shadow:var(--shadow);transition:all .2s;overflow:hidden;}
    .q-card:hover{border-color:#c7d2fe;box-shadow:var(--shadow-hover);}
    .q-head{padding:16px 20px;display:flex;align-items:flex-start;gap:14px;cursor:pointer;user-select:none;}
    .q-num{background:var(--brand-light);color:var(--brand-text);font-weight:700;font-size:.8rem;padding:4px 10px;border-radius:6px;flex-shrink:0;margin-top:2px;}
    .q-text{flex:1;font-weight:600;color:var(--navy);font-size:.95rem;line-height:1.5;}
    .q-marks{background:#f1f5f9;color:var(--slate);font-size:.725rem;font-weight:600;padding:4px 10px;border-radius:12px;flex-shrink:0;white-space:nowrap;}
    .q-toggle{color:var(--muted);transition:transform .2s;flex-shrink:0;margin-top:4px;}
    .q-toggle svg{width:20px;height:20px;}
    .q-card.open .q-toggle{transform:rotate(45deg);color:var(--brand);}
    .q-answer{display:none;padding:0 16px 18px;border-top:2px dashed rgba(79,70,229,.12);}
    .q-card.open .q-answer{display:block;}
    .answer-box{border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:18px;margin-top:14px;background:rgba(255,255,255,.9);}
    .answer-label{font-size:.75rem;font-weight:700;text-transform:uppercase;color:#16a34a;letter-spacing:.04em;margin-bottom:10px;}
    .answer-text{font-size:.9rem;color:#1e293b;line-height:1.7;}
    .answer-text p{margin-bottom:10px;}
    .answer-text p:last-child{margin-bottom:0;}
    .answer-text ul,.answer-text ol{margin-left:20px;margin-bottom:10px;}
    .answer-text li{margin-bottom:6px;}
    .math{font-family:'Inter',sans-serif;background:rgba(79,70,229,.07);padding:2px 8px;border-radius:6px;font-size:.9rem;font-weight:600;color:#312e81;display:inline-block;}
    .step{display:block;background:#f8fafc;border-left:3px solid var(--brand);padding:8px 12px;margin:6px 0;border-radius:0 6px 6px 0;font-size:.88rem;}
    .marking-scheme{margin-top:14px;background:#f8fafc;border:1px solid rgba(0,0,0,.07);border-radius:8px;padding:12px 14px;font-size:.8rem;}
    .marking-title{font-weight:700;color:var(--navy);margin-bottom:6px;}
    .marking-row{display:flex;justify-content:space-between;border-bottom:1px solid #edf2f7;padding:4px 0;}
    .marking-row:last-child{border-bottom:none;}
    .marking-key{color:var(--slate);}
    .marking-marks{font-weight:700;color:var(--brand-text);}
    
    .cbq-section{margin-top:40px;border:2px solid var(--brand);border-radius:12px;overflow:hidden;box-shadow:0 4px 15px rgba(79,70,229,.1);}
    .cbq-header{background:linear-gradient(90deg,#3730a3,#4f46e5);color:white;padding:16px 20px;font-weight:800;font-size:1.05rem;display:flex;align-items:center;justify-content:space-between;}
    .cbq-badge{font-size:.75rem;background:rgba(255,255,255,.2);padding:4px 10px;border-radius:12px;}
    .cbq-body{padding:20px;background:linear-gradient(to right,#eef2ff,#fff);}
    .cbq-card{border:1px solid #c7d2fe;background:white;padding:16px;border-radius:8px;margin-bottom:16px;}
    .cbq-type{font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:8px;}
    .cbq-question{font-size:.95rem;color:#334155;margin-bottom:12px;line-height:1.6;}
    .cbq-show-btn{text-align:left;padding:10px 14px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:6px;cursor:pointer;font-size:.9rem;font-family:inherit;width:100%;transition:0.2s;}
    .cbq-show-btn:hover{background:#eef2ff;border-color:var(--brand);color:var(--brand-text);}
    .cbq-answer{display:none;margin-top:12px;padding:12px;background:#eef2ff;border:1px solid #c7d2fe;border-radius:6px;font-size:.9rem;color:#312e81;line-height:1.65;}
    
    .ex-div{font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--brand-text);background:var(--brand-light);border:1px solid #c7d2fe;border-radius:8px;padding:8px 16px;margin:24px 0 16px;display:inline-block;letter-spacing:.04em;}
    .ch-nav-btns{display:flex;justify-content:space-between;margin-top:32px;padding-top:20px;border-top:1px solid var(--border);}
    .ch-nav-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:10px;font-weight:700;font-size:.88rem;cursor:pointer;border:1.5px solid var(--border);background:white;color:var(--slate);transition:all .2s;font-family:inherit;}
    .ch-nav-btn:hover:not(:disabled){background:var(--brand);color:white;border-color:var(--brand);}
    .ch-nav-btn:disabled{opacity:.35;cursor:not-allowed;}
    .ch-nav-btn.next{background:var(--brand);color:white;border-color:var(--brand);}
    
    .mob-toggle{display:none;position:fixed;bottom:20px;right:20px;background:var(--brand);color:white;border:none;padding:12px 20px;border-radius:30px;font-weight:700;font-size:.9rem;box-shadow:0 4px 14px rgba(79,70,229,.4);z-index:999;cursor:pointer;}
    .sidebar-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:950;}
    @keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
    
    @media(max-width:960px){
      .main-layout{flex-direction:column;}
      .sidebar{position:fixed;left:-320px;top:0;height:100vh;z-index:960;transition:left .3s;}
      .sidebar.open{left:0;}
      .sidebar-overlay.show{display:block;}
      .mob-toggle{display:block;}
      .main-content{padding:0 16px 28px;}
      .breadcrumb-bar{padding:12px 16px;top:57px;}
    }
  </style>
</head>
<body>
<div class="top-progress" id="progressBar"></div>

<nav class="navbar">
  <div class="navbar-inner">
    <a href="index.html" class="navbar-logo">
      <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;" loading="lazy">
      <span class="logo-text">Olympiad<span>Quiz</span></span>
    </a>
    <div class="navbar-links" id="navLinks">
      <a href="index.html" class="nav-link">Home</a>
      <div class="nav-dropdown">
        <a href="ncert-solutions.html" class="nav-link" style="color:white;">NCERT Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top:2px;"><path d="m6 9 6 6 6-6"/></svg></a>
        <div class="nav-dropdown-content">
          <a href="ncert-solutions.html" style="font-weight:700;color:#c2410c;">📚 All NCERT Hub (2026-27)</a>
          <a href="ncert-solutions-class-10-maths.html">Class 10 Mathematics</a>
          <a href="ncert-solutions-class-10-social-science.html">Class 10 Social Science</a>
          <a href="ncert-solutions-class-9-maths.html">Class 9 Mathematics</a>
          <a href="ncert-solutions-class-9-science.html">Class 9 Science</a>
          <a href="ncert-solutions-class-8-maths.html" style="font-weight:700;color:#4f46e5;background:#eef2ff;">Class 8 Mathematics ✨ (Active)</a>
          <a href="ncert-solutions-class-8-science.html">Class 8 Science</a>
          <a href="ncert-solutions-class-8-sst.html">Class 8 Social Science</a>
          <a href="ncert-solutions-class-8-sanskrit.html">Class 8 Sanskrit</a>
          <a href="ncert-solutions-class-8-english.html">Class 8 English</a>
          <a href="ncert-solutions-class-8-hindi.html">Class 8 Hindi</a>
          <a href="ncert-solutions-class-7-maths.html">Class 7 Mathematics</a>
        </div>
      </div>
      <a href="study.html" class="nav-link">Study Material</a>
      <a href="chapterwise.html" class="nav-link">Chapterwise Test</a>
      <a href="mock.html" class="nav-link">Mock Tests</a>
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
<nav class="ncert-breadcrumb-nav" aria-label="Breadcrumb">
  <div class="ncert-bc-container">
    <ol class="ncert-bc-list">
      <li><a href="index.html">Home</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions.html#class8">Class 8</a></li>
      <li class="ncert-bc-sep">/</li>
      <li class="ncert-bc-current">Mathematics</li>
    </ol>
    <div class="ncert-bc-switch">
      <span class="ncert-bc-switch-label">Switch Subject:</span>
      <a href="ncert-solutions-class-8-maths.html" class="ncert-bc-pill active">Maths</a>
      <a href="ncert-solutions-class-8-science.html" class="ncert-bc-pill">Science</a>
      <a href="ncert-solutions-class-8-sst.html" class="ncert-bc-pill">Social Science</a>
      <a href="ncert-solutions-class-8-english.html" class="ncert-bc-pill">English</a>
      <a href="ncert-solutions-class-8-hindi.html" class="ncert-bc-pill">Hindi</a>
      <a href="ncert-solutions-class-8-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>
    </div>
  </div>
</nav>

<header class="hero-banner">
  <h1>Class 8 Maths — NCERT Exercise Solutions</h1>
  <p>Complete <strong>100% question coverage</strong> for all exercises across <strong>all 13 chapters</strong> of NCERT Class 8 Mathematics (Rationalized Syllabus 2026-27). Step-by-step solutions as per CBSE Marking Scheme with Case Study Questions &amp; HOTS.</p>
  <div class="hero-badges">
    <span class="hero-badge">✅ All 13 Chapters (100% Solved)</span>
    <span class="hero-badge">📐 Rationalized CBSE 2026-27</span>
    <span class="hero-badge">🔢 Step-by-Step Marking Scheme</span>
    <span class="hero-badge">🎯 Case Study Questions</span>
    <span class="hero-badge">🧠 HOTS Included</span>
  </div>
</header>

<div class="breadcrumb-bar">
  <div class="breadcrumb-inner">
    <div class="breadcrumb-label">📐 Class 8 Maths — Jump to Chapter</div>
    <div class="breadcrumb-chips" id="breadcrumbChips">
      ${breadcrumbChips}
    </div>
  </div>
</div>

<div class="main-layout">
  <div class="sidebar-overlay" id="sidebarOverlay"></div>
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-title">
      <span>13 Chapters</span>
      <span style="font-size:0.75rem;background:#eef2ff;color:#3730a3;padding:2px 8px;border-radius:10px;">100% Solved</span>
    </div>
    <input type="text" class="search-box" id="chapterSearch" placeholder="Search chapters or topics..." oninput="filterChapters(this.value)">
    <ul class="chapter-nav" id="chapterNav">
      ${sidebarList}
    </ul>
  </aside>

  <main class="main-content">
    <div id="chapter-content-area">
${allChaptersHtml}
    </div>
  </main>
</div>

<button class="mob-toggle" onclick="toggleSidebar()">☰ Chapters</button>

<!-- Fallback Preloaded Chapter Data -->
<script src="chapters-c8m/chapters-data.js"></script>

<script>
  let currentCh = 1;

  // Scroll Progress
  window.addEventListener('scroll', () => {
    const el = document.documentElement;
    const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = progress + '%';
  });

  // Toggle question accordion
  function toggleQ(id) {
    const card = document.getElementById(id);
    if (card) card.classList.toggle('open');
  }

  // Toggle CBQ Answer
  function toggleCBQ(btn) {
    const ans = btn.nextElementSibling;
    if (ans) {
      if (ans.style.display === 'block') {
        ans.style.display = 'none';
        btn.textContent = '▶ Show Answer';
      } else {
        ans.style.display = 'block';
        btn.textContent = '▼ Hide Answer';
      }
    }
  }

  // Instant Chapter Switcher (All 13 Chapters Pre-rendered in DOM)
  function showChapter(n, updateHistory = true) {
    if (n < 1 || n > 13) return;
    currentCh = n;

    // Update active chip
    document.querySelectorAll('.bc-chip').forEach(c => {
      c.classList.toggle('active', parseInt(c.dataset.ch) === n);
    });

    // Scroll active chip into view smoothly
    const activeChip = document.querySelector(\`.bc-chip[data-ch="\${n}"]\`);
    if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    // Update active sidebar link
    document.querySelectorAll('#chapterNav li a').forEach(a => {
      a.classList.toggle('active', parseInt(a.dataset.ch) === n);
    });

    // Close mobile sidebar if open
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebarOverlay');
    if (sb && sb.classList.contains('open')) sb.classList.remove('open');
    if (ov && ov.classList.contains('show')) ov.classList.remove('show');

    // Instantly toggle sections
    document.querySelectorAll('.chapter-section').forEach(sec => {
      sec.classList.toggle('hidden', sec.id !== 'ch' + n);
    });

    if (updateHistory) window.location.hash = 'ch' + n;
    scrollToContentTop();
  }

  function scrollToContentTop() {
    const bc = document.querySelector('.breadcrumb-bar');
    if (bc) {
      const topOffset = bc.getBoundingClientRect().bottom + window.pageYOffset;
      window.scrollTo({ top: topOffset - 75, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Handle URL hash on initial load
  window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    const match = hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 13) {
        showChapter(ch, false);
      } else {
        showChapter(1, false);
      }
    } else {
      showChapter(1, false);
    }
  });

  window.addEventListener('hashchange', () => {
    const match = window.location.hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 13 && ch !== currentCh) {
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

  const mobToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('navLinks');
  if (mobToggle && navLinks) {
    mobToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobToggle.classList.toggle('active');
    });
  }
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-8-maths.html'), html, 'utf8');
console.log('Successfully generated ncert-solutions-class-8-maths.html with all 13 chapters embedded.');
