const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

const allChapters = {};
for (let i = 1; i <= 12; i++) {
  allChapters[i] = fs.readFileSync(path.join(dir, `ch${i}.html`), 'utf8');
}

const chapters = [
  { num: 1, title: 'Patterns in Mathematics', book: 'ganita-prakash', short: 'Ch 1', desc: 'Number Sequences & Rule Formulation' },
  { num: 2, title: 'Lines and Angles', book: 'ganita-prakash', short: 'Ch 2', desc: 'Points, Rays, Angles & Revolutions' },
  { num: 3, title: 'Number Play', book: 'ganita-prakash', short: 'Ch 3', desc: 'Place Values, Large Numbers & Magic Squares' },
  { num: 4, title: 'Data Handling and Presentation', book: 'ganita-prakash', short: 'Ch 4', desc: 'Tally Marks, Pictographs & Bar Graphs' },
  { num: 5, title: 'Prime Time', book: 'ganita-prakash', short: 'Ch 5', desc: 'Divisibility Tests, Factor Trees, HCF & LCM' },
  { num: 6, title: 'Perimeter and Area', book: 'ganita-prakash', short: 'Ch 6', desc: 'Mensuration, Polygons, Area Formulas' },
  { num: 7, title: 'Fractions', book: 'ganita-prakash', short: 'Ch 7', desc: 'Visual Models, Number Line, Arithmetic' },
  { num: 8, title: 'Playing with Constructions', book: 'ganita-prakash', short: 'Ch 8', desc: 'Compass Bisectors & Standard Angles' },
  { num: 9, title: 'Symmetry', book: 'ganita-prakash', short: 'Ch 9', desc: 'Lines of Symmetry & Mirror Reflections' },
  { num: 10, title: 'The Other Side of Zero', book: 'ganita-prakash', short: 'Ch 10', desc: 'Integers, Number Line Jumps & Arithmetic' },
  { num: 11, title: 'Introduction to Algebra', book: 'foundation', short: 'Ch 11', desc: 'Variables, Expressions & Simple Equations' },
  { num: 12, title: 'Ratio and Proportion', book: 'foundation', short: 'Ch 12', desc: 'Simplest Form, Proportions & Unitary Method' }
];

// Generate chips HTML
const chipsHtml = chapters.map(ch => 
  `    <span class="bc-chip${ch.num === 1 ? ' active' : ''}" onclick="showChapter(${ch.num})" data-ch="${ch.num}"><span class="bc-n">${ch.num}</span>${ch.title}</span>`
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
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

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
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: var(--light-bg); color: var(--navy); line-height: 1.6; }

    /* Top progress */
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #2563eb, #3b82f6); z-index: 1000; width: 0%; transition: width .15s; }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.08); position: sticky; top: 0; z-index: 900; }
    .navbar-inner { max-width: 1380px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .navbar-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
    .logo-text { font-size: 1.15rem; font-weight: 800; color: white; }
    .logo-text span { color: #60a5fa; }
    .navbar-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; padding: 6px 12px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
    .navbar-actions { display: flex; align-items: center; gap: 10px; }
    .btn-login { background: #2563eb; color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; }
    .btn-login:hover { background: #1d4ed8; }
    .navbar-toggle { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 6px; }
    .navbar-toggle span { display: block; width: 22px; height: 2px; background: white; border-radius: 2px; }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: white; padding: 36px 24px; text-align: center; border-bottom: 3px solid var(--brand); }
    .hero-banner h1 { font-size: 1.85rem; font-weight: 800; margin-bottom: 8px; }
    .hero-banner p { color: #bfdbfe; font-size: .95rem; max-width: 740px; margin: 0 auto 16px; }
    .hero-badges { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .hero-badge { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); padding: 6px 14px; border-radius: 20px; font-size: .8rem; font-weight: 600; color: #e2e8f0; }

    /* Breadcrumb Chips Bar */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 14px 24px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    .breadcrumb-inner { max-width: 1380px; margin: 0 auto; }
    .breadcrumb-label { font-size: .72rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .06em; margin-bottom: 10px; }
    .breadcrumb-chips { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; -webkit-overflow-scrolling: touch; }
    .breadcrumb-chips::-webkit-scrollbar { height: 4px; }
    .breadcrumb-chips::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .bc-chip { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 20px; font-size: .78rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: all .18s; user-select: none; white-space: nowrap; flex-shrink: 0; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(37,99,235,.35); }
    .bc-chip .bc-n { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: rgba(0,0,0,.12); border-radius: 50%; font-size: .68rem; font-weight: 800; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,.25); }

    /* Layout */
    .main-layout { display: flex; max-width: 1380px; margin: 0 auto; }
    .sidebar { width: 310px; background: white; border-right: 1px solid var(--border); padding: 20px 16px; position: sticky; top: 135px; height: calc(100vh - 135px); overflow-y: auto; flex-shrink: 0; }
    .sidebar-title { font-size: .85rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .05em; margin-bottom: 12px; }
    .search-box { width: 100%; padding: 10px 14px; border: 1.5px solid var(--border); border-radius: 8px; font-size: .85rem; margin-bottom: 16px; font-family: inherit; }
    .search-box:focus { outline: none; border-color: var(--brand); }
    .chapter-nav { list-style: none; display: flex; flex-direction: column; gap: 4px; }
    .chapter-nav a { display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; border-radius: 8px; text-decoration: none; color: var(--slate); font-size: .82rem; font-weight: 500; transition: .18s; }
    .chapter-nav a:hover { background: var(--brand-light); color: var(--brand-text); }
    .chapter-nav a.active { background: var(--brand); color: white; font-weight: 700; }
    .chapter-nav a.active small { color: #dbeafe !important; }
    .chapter-nav .ch-num { width: 22px; height: 22px; border-radius: 6px; background: rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: center; font-size: .75rem; font-weight: 700; flex-shrink: 0; }
    .chapter-nav a.active .ch-num { background: rgba(255,255,255,0.25); color: white; }

    /* Main Content */
    .main-content { flex: 1; min-width: 0; padding: 24px 32px 60px; }
    .chapter-section { display: block; animation: fadeIn .25s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

    .chapter-header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--border); }
    .chapter-header .ch-badge { width: 44px; height: 44px; border-radius: 12px; background: var(--brand); color: white; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 800; flex-shrink: 0; }
    .chapter-header h2 { font-size: 1.45rem; font-weight: 800; color: var(--navy); }
    .chapter-header p { font-size: .85rem; color: var(--muted); margin-top: 2px; }

    /* Concept Card */
    .concept-card { background: white; border: 1.5px solid var(--border); border-left: 5px solid var(--brand); border-radius: 12px; padding: 20px 24px; margin-bottom: 28px; box-shadow: var(--shadow); }
    .concept-header { font-size: .95rem; font-weight: 800; color: var(--brand-text); margin-bottom: 12px; }
    .concept-list { padding-left: 20px; font-size: .88rem; color: var(--slate); display: flex; flex-direction: column; gap: 8px; }
    .concept-list ul { margin-top: 6px; padding-left: 20px; display: flex; flex-direction: column; gap: 4px; }

    /* Exercise Divider */
    .ex-div { background: #f1f5f9; border-left: 4px solid #64748b; padding: 8px 16px; font-size: .88rem; font-weight: 700; color: var(--slate); border-radius: 0 8px 8px 0; margin: 32px 0 16px; }

    /* Question Card */
    .q-card { background: white; border: 1.5px solid var(--border); border-radius: 12px; margin-bottom: 16px; box-shadow: var(--shadow); overflow: hidden; transition: box-shadow .2s; }
    .q-card:hover { box-shadow: var(--shadow-hover); }
    .q-head { display: flex; align-items: flex-start; gap: 14px; padding: 18px 20px; cursor: pointer; user-select: none; background: white; transition: background .15s; }
    .q-head:hover { background: #f8fafc; }
    .q-num { font-size: .85rem; font-weight: 800; color: var(--brand); background: var(--brand-light); padding: 4px 10px; border-radius: 6px; flex-shrink: 0; }
    .q-text { flex: 1; font-size: .92rem; font-weight: 600; color: var(--navy); line-height: 1.6; }
    .q-marks { font-size: .78rem; font-weight: 700; color: #059669; background: #ecfdf5; padding: 4px 10px; border-radius: 20px; white-space: nowrap; flex-shrink: 0; }
    .q-toggle { width: 24px; height: 24px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; color: var(--muted); flex-shrink: 0; transition: transform .2s; }
    .q-toggle svg { width: 14px; height: 14px; }
    .q-card.open .q-toggle { transform: rotate(45deg); background: #fee2e2; color: #dc2626; }

    /* Answer Body */
    .q-answer { display: none; padding: 0 20px 20px; }
    .q-card.open .q-answer { display: block; }
    .answer-box { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 10px; padding: 18px 20px; }
    .answer-label { font-size: .82rem; font-weight: 800; text-transform: uppercase; color: #059669; letter-spacing: .04em; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; }
    .answer-text { font-size: .9rem; color: var(--slate); line-height: 1.7; }
    .answer-text p { margin-bottom: 10px; }
    .answer-text .step { background: white; border: 1px solid #e2e8f0; border-left: 3px solid #2563eb; border-radius: 6px; padding: 10px 14px; margin-bottom: 10px; }

    /* Marking Scheme */
    .marking-scheme { margin-top: 14px; padding: 12px 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px; }
    .marking-title { font-size: .78rem; font-weight: 800; color: var(--navy); text-transform: uppercase; letter-spacing: .04em; margin-bottom: 8px; }
    .marking-row { display: flex; justify-content: space-between; align-items: center; font-size: .82rem; padding: 5px 0; border-bottom: 1px dashed #e2e8f0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); }
    .marking-marks { font-weight: 700; color: #2563eb; }

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
      .main-content { padding: 20px 16px; }
    }
  </style>
</head>
<body>
  <div class="top-progress" id="progressBar"></div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <span class="logo-text">Olympiad<span>Quiz</span></span>
      </a>
      <div class="navbar-links">
        <a href="index.html" class="nav-link">Home</a>
        <a href="ncert-solutions.html" class="nav-link" style="color:white;font-weight:700;">NCERT Hub</a>
        <a href="ncert-solutions.html#class6" class="nav-link" style="color:#60a5fa;">Class 6</a>
        <a href="dashboard.html" class="nav-link">Dashboard</a>
      </div>
      <div class="navbar-actions">
        <a href="ncert-solutions.html" class="btn-login">All NCERT Hub</a>
      </div>
    </div>
  </nav>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <div class="hero-badges">
      <span class="hero-badge">CBSE Curriculum 2026-27</span>
      <span class="hero-badge">NCERT Ganita Prakash (गणित प्रकाश)</span>
      <span class="hero-badge">100% Questions &amp; Marking Rubrics</span>
    </div>
    <h1 style="margin-top:14px;">NCERT Solutions for Class 6 Mathematics</h1>
    <p>Comprehensive step-by-step textbook solutions with high-definition labeled geometric diagrams, step marking schemes, and competency-based case studies.</p>
  </header>

  <!-- Sticky Breadcrumb Chips Bar -->
  <nav class="breadcrumb-bar" aria-label="Chapter quick selection">
    <div class="breadcrumb-inner">
      <div class="breadcrumb-label">Jump to Chapter</div>
      <div class="breadcrumb-chips" id="chipsBar">
${chipsHtml}
      </div>
    </div>
  </nav>

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
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-maths.html'), html, 'utf8');
console.log('Successfully generated ncert-solutions-class-6-maths.html with inlined CHAPTER_DATA!');
