const fs = require('fs');
const path = require('path');

const ch1Html = fs.readFileSync(path.join(__dirname, '..', 'chapters-c7s', 'ch1.html'), 'utf8');

const chapters = [
  { num: 1, name: "Nutrition in Plants" },
  { num: 2, name: "Nutrition in Animals" },
  { num: 3, name: "Heat" },
  { num: 4, name: "Acids, Bases and Salts" },
  { num: 5, name: "Physical and Chemical Changes" },
  { num: 6, name: "Respiration in Organisms" },
  { num: 7, name: "Transportation in Animals & Plants" },
  { num: 8, name: "Reproduction in Plants" },
  { num: 9, name: "Motion and Time" },
  { num: 10, name: "Electric Current & its Effects" },
  { num: 11, name: "Light" },
  { num: 12, name: "Forests: Our Lifeline" },
  { num: 13, name: "Wastewater Story" }
];

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
  <title>NCERT Solutions Class 7 Science — All 13 Chapters | CBSE Marking Scheme 2026-27</title>
  <meta name="description" content="Free chapter-wise NCERT Solutions for Class 7 Science (Rationalized Syllabus 2026-27). 100% complete exercise questions, step-by-step answers, CBSE marking scheme, and Competency-Based Questions (CBQ) for all 13 chapters.">
  <meta name="keywords" content="NCERT Solutions Class 7 Science, Class 7 Science NCERT Solutions, NCERT Science Class 7, CBSE Class 7 Science solutions 2026-27, nutrition in plants, nutrition in animals, heat, acids bases and salts, physical and chemical changes, respiration in organisms, transportation in animals and plants, reproduction in plants, motion and time, electric current and its effects, light, forests our lifeline, wastewater story">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-7-science.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="NCERT Solutions Class 7 Science — All 13 Chapters | CBSE 2026-27">
  <meta property="og:description" content="Complete step-by-step NCERT solutions for Class 7 Science with CBSE marking scheme, key formulas, diagrams, and competency-based questions.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-7-science.html">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org Breadcrumb -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/"},
      {"@type": "ListItem", "position": 2, "name": "NCERT Solutions Hub", "item": "https://olympiadquiz.org/ncert-solutions.html"},
      {"@type": "ListItem", "position": 3, "name": "Class 7 Science", "item": "https://olympiadquiz.org/ncert-solutions-class-7-science.html"}
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
        "name": "How many chapters are there in Class 7 Science NCERT textbook for 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The latest rationalized CBSE Class 7 Science textbook contains 13 chapters: Nutrition in Plants, Nutrition in Animals, Heat, Acids, Bases and Salts, Physical and Chemical Changes, Respiration in Organisms, Transportation in Animals and Plants, Reproduction in Plants, Motion and Time, Electric Current and its Effects, Light, Forests: Our Lifeline, and Wastewater Story."
        }
      },
      {
        "@type": "Question",
        "name": "Are these Class 7 Science NCERT solutions based on the latest CBSE rationalized syllabus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, these solutions strictly adhere to the latest rationalized NCERT curriculum for 2026-27, with 100% question coverage, step-by-step CBSE marking schemes, and Competency-Based Questions (CBQ)."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root{--brand:#059669;--brand-hover:#047857;--brand-light:#ecfdf5;--brand-text:#065f46;--navy:#0f172a;--slate:#334155;--muted:#64748b;--light-bg:#f8fafc;--border:#e2e8f0;--shadow:0 4px 6px -1px rgba(0,0,0,0.05);--shadow-hover:0 10px 15px -3px rgba(0,0,0,0.1);}
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Inter',sans-serif;background:var(--light-bg);color:var(--slate);line-height:1.6;}
    .top-progress{position:fixed;top:0;left:0;height:3px;background:var(--brand);z-index:1000;transition:width .1s;}
    .navbar{background:#0f172a;border-bottom:1px solid rgba(255,255,255,0.08);position:sticky;top:0;z-index:900;}
    .navbar-inner{max-width:1380px;margin:0 auto;padding:0 24px;height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
    .navbar-logo{display:flex;align-items:center;gap:10px;text-decoration:none;}
    .logo-text{font-size:1.15rem;font-weight:800;color:white;}
    .logo-text span{color:#34d399;}
    .navbar-links{display:flex;align-items:center;gap:8px;}
    .nav-link{color:#94a3b8;font-size:0.85rem;font-weight:600;padding:6px 12px;border-radius:8px;text-decoration:none;transition:0.2s;display:flex;align-items:center;gap:4px;}
    .nav-link:hover{color:white;background:rgba(255,255,255,0.06);}
    .nav-dropdown{position:relative;}
    .nav-dropdown:hover .nav-dropdown-content{display:block !important;}
    .nav-dropdown-content{display:none;position:absolute;top:100%;left:0;background:white;border:1px solid #e2e8f0;border-radius:10px;min-width:240px;box-shadow:0 8px 24px rgba(0,0,0,0.12);z-index:1000;padding:6px;}
    .nav-dropdown-content a{display:block;padding:8px 14px;color:#334155;text-decoration:none;font-size:0.85rem;border-radius:6px;transition:0.2s;}
    .nav-dropdown-content a:hover{background:#f1f5f9;color:#0f172a !important;}
    .navbar-actions{display:flex;align-items:center;gap:10px;}
    .btn-login{background:#059669;color:white;font-size:0.82rem;font-weight:700;padding:7px 18px;border-radius:8px;text-decoration:none;transition:0.2s;}
    .btn-login:hover{background:#047857;}
    .navbar-toggle{display:none;background:none;border:none;cursor:pointer;flex-direction:column;gap:5px;padding:6px;}
    .navbar-toggle span{display:block;width:22px;height:2px;background:white;border-radius:2px;}
    .hero-banner{background:linear-gradient(135deg,#064e3b 0%,#022c22 100%);color:white;padding:36px 24px;text-align:center;border-bottom:3px solid var(--brand);}
    .hero-banner h1{font-size:1.85rem;font-weight:800;margin-bottom:8px;}
    .hero-banner p{color:#a7f3d0;font-size:.95rem;max-width:740px;margin:0 auto 16px;}
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
    .bc-chip.active{background:var(--brand);color:white;border-color:var(--brand);box-shadow:0 3px 10px rgba(5,150,105,.35);}
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
    .chapter-header{display:flex;align-items:center;gap:14px;margin-bottom:24px;padding-bottom:14px;border-bottom:2px solid var(--border);}
    .ch-badge{width:42px;height:42px;background:var(--brand);color:white;border-radius:12px;font-size:1.15rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .chapter-header-info h2{font-size:1.4rem;font-weight:800;color:var(--navy);}
    .chapter-header-info p{font-size:.825rem;color:var(--muted);margin-top:2px;}
    
    .concept-card{background:linear-gradient(135deg,#f8fafc 0%,#ecfdf5 100%);border:1px solid #a7f3d0;border-radius:12px;padding:16px 20px;margin-bottom:24px;}
    .concept-header{font-size:0.82rem;font-weight:800;color:var(--brand-text);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;display:flex;align-items:center;gap:6px;}
    .concept-list{margin-left:18px;font-size:0.88rem;color:var(--slate);line-height:1.6;}
    .concept-list li{margin-bottom:4px;}

    .q-card{background:white;border:1px solid var(--border);border-radius:12px;margin-bottom:18px;box-shadow:var(--shadow);transition:all .2s;overflow:hidden;}
    .q-card:hover{border-color:#a7f3d0;box-shadow:var(--shadow-hover);}
    .q-head{padding:16px 20px;display:flex;align-items:flex-start;gap:14px;cursor:pointer;user-select:none;}
    .q-num{background:var(--brand-light);color:var(--brand-text);font-weight:700;font-size:.8rem;padding:4px 10px;border-radius:6px;flex-shrink:0;margin-top:2px;}
    .q-text{flex:1;font-weight:600;color:var(--navy);font-size:.95rem;line-height:1.5;}
    .q-marks{background:#f1f5f9;color:var(--slate);font-size:.725rem;font-weight:600;padding:4px 10px;border-radius:12px;flex-shrink:0;white-space:nowrap;}
    .q-toggle{color:var(--muted);transition:transform .2s;flex-shrink:0;margin-top:4px;}
    .q-toggle svg{width:20px;height:20px;}
    .q-card.open .q-toggle{transform:rotate(45deg);color:var(--brand);}
    .q-answer{display:none;padding:0 16px 18px;border-top:2px dashed rgba(5,150,105,.15);}
    .q-card.open .q-answer{display:block;}
    .answer-box{border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:18px;margin-top:14px;background:rgba(255,255,255,.9);}
    .answer-label{font-size:.75rem;font-weight:700;text-transform:uppercase;color:#059669;letter-spacing:.04em;margin-bottom:10px;}
    .answer-text{font-size:.9rem;color:#1e293b;line-height:1.7;}
    .answer-text p{margin-bottom:10px;}
    .answer-text p:last-child{margin-bottom:0;}
    .answer-text ul,.answer-text ol{margin-left:20px;margin-bottom:10px;}
    .answer-text li{margin-bottom:6px;}
    .math{font-family:'Inter',sans-serif;background:rgba(5,150,105,.08);padding:2px 8px;border-radius:6px;font-size:.9rem;font-weight:600;color:#065f46;display:inline-block;}
    .step{display:block;background:#f8fafc;border-left:3px solid var(--brand);padding:8px 12px;margin:6px 0;border-radius:0 6px 6px 0;font-size:.88rem;}
    .marking-scheme{margin-top:14px;background:#f8fafc;border:1px solid rgba(0,0,0,.07);border-radius:8px;padding:12px 14px;font-size:.8rem;}
    .marking-title{font-weight:700;color:var(--navy);margin-bottom:6px;}
    .marking-row{display:flex;justify-content:space-between;border-bottom:1px solid #edf2f7;padding:4px 0;}
    .marking-row:last-child{border-bottom:none;}
    .marking-key{color:var(--slate);}
    .marking-marks{font-weight:700;color:var(--brand-text);}
    
    .data-table{width:100%;border-collapse:collapse;margin:12px 0;font-size:.88rem;}
    .data-table th,.data-table td{border:1px solid #cbd5e1;padding:8px 12px;text-align:left;}
    .data-table th{background:#f1f5f9;color:var(--navy);font-weight:700;}

    .cbq-section{margin-top:40px;border:2px solid var(--brand);border-radius:12px;overflow:hidden;box-shadow:0 4px 15px rgba(5,150,105,.1);}
    .cbq-header{background:linear-gradient(90deg,#065f46,#059669);color:white;padding:16px 20px;font-weight:800;font-size:1.05rem;display:flex;align-items:center;justify-content:space-between;}
    .cbq-badge{font-size:.75rem;background:rgba(255,255,255,.2);padding:4px 10px;border-radius:12px;}
    .cbq-body{padding:20px;background:linear-gradient(to right,#ecfdf5,#fff);}
    .cbq-card{border:1px solid #a7f3d0;background:white;padding:16px;border-radius:8px;margin-bottom:16px;}
    .cbq-type{font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:8px;}
    .cbq-question{font-size:.95rem;color:#334155;margin-bottom:12px;line-height:1.6;}
    .cbq-show-btn{text-align:left;padding:10px 14px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:6px;cursor:pointer;font-size:.9rem;font-family:inherit;width:100%;transition:0.2s;}
    .cbq-show-btn:hover{background:#ecfdf5;border-color:var(--brand);color:var(--brand-text);}
    .cbq-answer{display:none;margin-top:12px;padding:12px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:6px;font-size:.9rem;color:#065f46;line-height:1.65;}
    
    .ex-div{font-size:.82rem;font-weight:700;text-transform:uppercase;color:var(--brand-text);background:var(--brand-light);border:1px solid #a7f3d0;border-radius:8px;padding:8px 16px;margin:24px 0 16px;display:inline-block;letter-spacing:.04em;}
    .ch-nav-btns{display:flex;justify-content:space-between;margin-top:32px;padding-top:20px;border-top:1px solid var(--border);}
    .ch-nav-btn{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:10px;font-weight:700;font-size:.88rem;cursor:pointer;border:1.5px solid var(--border);background:white;color:var(--slate);transition:all .2s;font-family:inherit;}
    .ch-nav-btn:hover:not(:disabled){background:var(--brand);color:white;border-color:var(--brand);}
    .ch-nav-btn:disabled{opacity:.35;cursor:not-allowed;}
    .ch-nav-btn.next{background:var(--brand);color:white;border-color:var(--brand);}
    
    .mob-toggle{display:none;position:fixed;bottom:20px;right:20px;background:var(--brand);color:white;border:none;padding:12px 20px;border-radius:30px;font-weight:700;font-size:.9rem;box-shadow:0 4px 14px rgba(5,150,105,.4);z-index:999;cursor:pointer;}
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
          <a href="ncert-solutions-class-8-maths.html">Class 8 Mathematics</a>
          <a href="ncert-solutions-class-7-maths.html">Class 7 Mathematics</a>
          <a href="ncert-solutions-class-7-science.html" style="font-weight:700;color:#059669;background:#ecfdf5;">Class 7 Science ✨ (Active)</a>
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

<header class="hero-banner">
  <h1>Class 7 Science — NCERT Exercise Solutions</h1>
  <p>Complete <strong>100% question coverage</strong> for all exercises across <strong>all 13 chapters</strong> of NCERT Class 7 Science (Rationalized Syllabus 2026-27). Step-by-step solutions as per CBSE Marking Scheme with Case Study Questions &amp; HOTS.</p>
  <div class="hero-badges">
    <span class="hero-badge">✅ All 13 Chapters (100% Questions)</span>
    <span class="hero-badge">🔬 Rationalized CBSE 2026-27</span>
    <span class="hero-badge">📝 Step-by-Step Marking Scheme</span>
    <span class="hero-badge">🎯 Case Study Questions</span>
    <span class="hero-badge">🧠 HOTS Included</span>
  </div>
</header>

<div class="breadcrumb-bar">
  <div class="breadcrumb-inner">
    <div class="breadcrumb-label">🔬 Class 7 Science — Jump to Chapter</div>
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
      <span style="font-size:0.75rem;background:#ecfdf5;color:#065f46;padding:2px 8px;border-radius:10px;">100% Solved</span>
    </div>
    <input type="text" class="search-box" id="chapterSearch" placeholder="Search chapters or topics..." oninput="filterChapters(this.value)">
    <ul class="chapter-nav" id="chapterNav">
      ${sidebarList}
    </ul>
  </aside>

  <main class="main-content">
    <div id="chapter-content-area">
${ch1Html}
    </div>
  </main>
</div>

<button class="mob-toggle" onclick="toggleSidebar()">☰ Chapters</button>

<script src="chapters-c7s/chapters-data.js"></script>
<script>
  let currentCh = 1;
  const chapterCache = {};

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

  // Chapter Loader
  async function showChapter(n, updateHistory = true) {
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

    const container = document.getElementById('chapter-content-area');

    // 1. Check in-memory cache
    if (chapterCache[n]) {
      container.innerHTML = chapterCache[n];
      if (updateHistory) window.location.hash = 'ch' + n;
      scrollToContentTop();
      return;
    }

    // 2. Check offline preloaded data (instant zero-latency for file:// protocol)
    if (window.CHAPTER_DATA && window.CHAPTER_DATA[n]) {
      chapterCache[n] = window.CHAPTER_DATA[n];
      container.innerHTML = window.CHAPTER_DATA[n];
      if (updateHistory) window.location.hash = 'ch' + n;
      scrollToContentTop();
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
      const res = await fetch(\`chapters-c7s/ch\${n}.html\`);
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
      const html = await res.text();
      chapterCache[n] = html;
      container.innerHTML = html;
      if (updateHistory) window.location.hash = 'ch' + n;
      scrollToContentTop();
    } catch (err) {
      if (window.CHAPTER_DATA && window.CHAPTER_DATA[n]) {
        chapterCache[n] = window.CHAPTER_DATA[n];
        container.innerHTML = window.CHAPTER_DATA[n];
        if (updateHistory) window.location.hash = 'ch' + n;
        scrollToContentTop();
      } else {
        container.innerHTML = \`
          <div style="text-align:center;padding:50px 20px;background:#fef2f2;border:1px solid #fecaca;border-radius:12px;margin:30px 0;">
            <div style="font-size:2rem;margin-bottom:10px;">⚠️</div>
            <h3 style="color:#b91c1c;margin-bottom:8px;">Chapter \${n} Solutions</h3>
            <p style="color:#7f1d1d;font-size:0.9rem;margin-bottom:16px;">Direct chapter file available below:</p>
            <a href="chapters-c7s/ch\${n}.html" target="_blank" style="display:inline-block;padding:10px 20px;background:var(--brand);color:white;text-decoration:none;border-radius:8px;font-weight:700;">Open Chapter \${n} HTML File →</a>
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
    // Cache preloaded chapter 1
    const initialContent = document.getElementById('chapter-content-area');
    if (initialContent && initialContent.innerHTML.trim().length > 100) {
      chapterCache[1] = initialContent.innerHTML;
    }
    const hash = window.location.hash;
    const match = hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 13) {
        showChapter(ch, false);
      }
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

fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-7-science.html'), html, 'utf8');
console.log('Successfully generated ncert-solutions-class-7-science.html');
