const fs = require('fs');
const path = require('path');

const ch1Html = fs.readFileSync(path.join(__dirname, '..', 'chapters-c6m', 'ch1.html'), 'utf8');

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
    body { font-family: 'Inter', sans-serif; background: var(--light-bg); color: var(--slate); line-height: 1.6; }
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: var(--brand); z-index: 1000; transition: width .1s; }
    
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
    .chapter-nav { list-style: none; }
    .chapter-nav li { margin-bottom: 6px; }
    .chapter-nav li a { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 8px; color: var(--slate); text-decoration: none; font-size: .85rem; font-weight: 500; transition: all .15s; cursor: pointer; }
    .chapter-nav li a:hover { background: var(--brand-light); color: var(--brand-text); }
    .chapter-nav li a.active { background: var(--brand); color: white; font-weight: 600; }
    .chapter-nav li a.active strong { color: white; }
    .chapter-nav li a.active small { color: #dbeafe !important; }
    .ch-num { width: 24px; height: 24px; background: rgba(0,0,0,.06); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .75rem; font-weight: 700; flex-shrink: 0; }
    .chapter-nav li a.active .ch-num { background: rgba(255,255,255,.25); color: white; }
    
    .main-content { flex: 1; padding: 28px 36px 48px; min-width: 0; max-width: 1070px; }

    /* Chapter Content */
    .chapter-section { margin-bottom: 48px; scroll-margin-top: 140px; }
    .chapter-header { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 2px solid var(--border); }
    .ch-badge { width: 44px; height: 44px; background: var(--brand); color: white; border-radius: 12px; font-size: 1.2rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .chapter-header-info h2 { font-size: 1.45rem; font-weight: 800; color: var(--navy); }
    .chapter-header-info p { font-size: .825rem; color: var(--muted); margin-top: 2px; }

    .concept-card { background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 18px 22px; margin-bottom: 24px; }
    .concept-header { font-size: 0.85rem; font-weight: 800; color: var(--brand-text); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
    .concept-list { margin-left: 20px; font-size: 0.9rem; color: var(--slate); line-height: 1.65; }
    .concept-list li { margin-bottom: 6px; }

    .ex-div { background: #e0e7ff; color: #3730a3; font-weight: 800; font-size: 0.95rem; padding: 10px 16px; border-radius: 8px; margin: 30px 0 16px; border-left: 4px solid var(--brand); }

    /* Question Cards */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 18px; box-shadow: var(--shadow); transition: all .2s; overflow: hidden; }
    .q-card:hover { border-color: #bfdbfe; box-shadow: var(--shadow-hover); }
    .q-head { padding: 16px 20px; display: flex; align-items: flex-start; gap: 14px; cursor: pointer; user-select: none; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-weight: 700; font-size: .8rem; padding: 4px 10px; border-radius: 6px; flex-shrink: 0; margin-top: 2px; }
    .q-text { flex: 1; font-weight: 600; color: var(--navy); font-size: .95rem; line-height: 1.55; }
    .q-marks { background: #f1f5f9; color: var(--slate); font-size: .725rem; font-weight: 600; padding: 4px 10px; border-radius: 12px; flex-shrink: 0; white-space: nowrap; }
    .q-toggle { color: var(--muted); transition: transform .2s; flex-shrink: 0; margin-top: 4px; }
    .q-toggle svg { width: 20px; height: 20px; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: var(--brand); }
    .q-answer { display: none; padding: 0 18px 20px; border-top: 2px dashed rgba(37,99,235,.15); }
    .q-card.open .q-answer { display: block; }
    .answer-box { border: 1px solid rgba(0,0,0,.08); border-radius: 12px; padding: 18px; margin-top: 14px; background: rgba(255,255,255,.95); }
    .answer-label { font-size: .75rem; font-weight: 700; text-transform: uppercase; color: #16a34a; letter-spacing: .04em; margin-bottom: 10px; }
    .answer-text { font-size: .9rem; color: #1e293b; line-height: 1.7; }
    .step { display: block; background: #f8fafc; border-left: 3px solid var(--brand); padding: 8px 14px; margin: 8px 0; border-radius: 0 6px 6px 0; font-size: .88rem; }
    
    .marking-scheme { margin-top: 14px; background: #f8fafc; border: 1px solid rgba(0,0,0,.08); border-radius: 8px; padding: 12px 14px; font-size: .8rem; }
    .marking-title { font-weight: 700; color: var(--navy); margin-bottom: 6px; }
    .marking-row { display: flex; justify-content: space-between; border-bottom: 1px solid #edf2f7; padding: 4px 0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); }
    .marking-marks { font-weight: 700; color: var(--brand-text); }

    /* Competency-Based Card */
    .cbq-card { border: 1.5px solid #93c5fd; background: #f0f9ff; padding: 18px; border-radius: 10px; margin-top: 28px; }
    .cbq-badge { display: inline-block; background: #0284c7; color: white; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 12px; margin-bottom: 10px; text-transform: uppercase; }

    /* Mobile Responsive */
    @media (max-width: 900px) {
      .sidebar { display: none; }
      .main-content { padding: 20px 16px 36px; }
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
        <a href="ncert-solutions.html" class="nav-link">← All NCERT Solutions</a>
        <a href="ncert-solutions-class-7-maths.html" class="nav-link">Class 7 Maths</a>
        <a href="ncert-solutions-class-8-maths.html" class="nav-link">Class 8 Maths</a>
        <a href="ncert-solutions-class-9-maths.html" class="nav-link">Class 9 Maths</a>
        <a href="ncert-solutions-class-10-maths.html" class="nav-link">Class 10 Maths</a>
      </div>
      <div class="navbar-actions">
        <a href="index.html#quiz" class="btn-login">Practice Quizzes</a>
      </div>
    </div>
  </nav>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <h1>NCERT Solutions for Class 6 Maths (CBSE 2026-27)</h1>
    <p>Complete chapter-wise textbook solutions for <strong>Ganita Prakash</strong> and foundation modules. Step-by-step working with properly labeled geometric diagrams and official CBSE marking schemes.</p>
    <div class="hero-badges">
      <span class="hero-badge">📘 Prescribed Book: Ganita Prakash</span>
      <span class="hero-badge">📐 100% Labeled Geometric Diagrams</span>
      <span class="hero-badge">🎯 CBSE Marking Scheme 2026-27</span>
      <span class="hero-badge">💡 Competency-Based Case Studies</span>
    </div>
  </header>

  <!-- Horizontal Scrolling Breadcrumb Chips -->
  <div class="breadcrumb-bar">
    <div class="breadcrumb-inner">
      <div class="breadcrumb-label">Jump Directly to Chapter:</div>
      <div class="breadcrumb-chips" id="chipsBar">
${chipsHtml}
      </div>
    </div>
  </div>

  <!-- Main Layout -->
  <div class="main-layout">
    <!-- Sidebar Navigation -->
    <aside class="sidebar">
      <div class="sidebar-title">All Chapters (1 to 12)</div>
      <input type="text" class="search-box" id="searchBox" placeholder="Search chapters, topics..." onkeyup="filterChapters(this.value)">
      <ul class="chapter-nav" id="chapterNav">
${sidebarHtml}
      </ul>
    </aside>

    <!-- Main Content Area -->
    <main class="main-content" id="chapterContainer">
${ch1Html}
    </main>
  </div>

  <!-- Preloaded Chapter Data Bundle for Instant Offline / Fast Switch -->
  <script src="chapters-c6m/chapters-data.js"></script>

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

      // Load Chapter Content
      const container = document.getElementById('chapterContainer');
      if (window.CHAPTER_DATA && window.CHAPTER_DATA[n]) {
        container.innerHTML = window.CHAPTER_DATA[n];
      } else {
        fetch(\`chapters-c6m/ch\${n}.html\`)
          .then(res => res.text())
          .then(html => {
            container.innerHTML = html;
          })
          .catch(err => {
            console.error('Error loading chapter:', err);
          });
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
console.log('Successfully generated ncert-solutions-class-6-maths.html');
