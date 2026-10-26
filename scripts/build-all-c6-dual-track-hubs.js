// scripts/build-all-c6-dual-track-hubs.js
// Compiles all 4 Subject Hubs with Full Dual-Track (NEP 2020 + Classic CBSE)
// Generates:
// 1. ncert-solutions-class-6-maths.html (Ganita Prakash 12 Ch + Maths Classic 14 Ch)
// 2. ncert-solutions-class-6-science.html (Curiosity 12 Ch + Science Classic 11 Ch)
// 3. ncert-solutions-class-6-english.html (Poorvi 15 Ch + Honeysuckle & Pact with the Sun 15 Ch)
// 4. ncert-solutions-class-6-sst.html (Exploring Society 14 Ch + History/Civics/Geography 24 Ch)

const fs = require('fs');
const path = require('path');

function extractSection(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error("Missing file:", filePath);
    return '';
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/<section[\s\S]*?<\/section>/);
  return match ? match[0] : content;
}

// --------------------------------------------------------------------------
// 1. MATHEMATICS DUAL-TRACK HUB
// --------------------------------------------------------------------------
console.log("=== COMPILING MATHEMATICS DUAL-TRACK HUB ===");
const mDir = path.join(__dirname, '..', 'chapters-c6m');
const sDir = path.join(__dirname, '..', 'chapters-c6s');
const engDir = path.join(__dirname, '..', 'chapters-c6eng');
const sstDir = path.join(__dirname, '..', 'chapters-c6sst');

const gpList = [
  { num: 1, title: 'Patterns in Mathematics', short: 'Patterns in Maths', desc: 'Number Sequences & Rule Formulation', id: 'c6m-ch1' },
  { num: 2, title: 'Lines and Angles', short: 'Lines & Angles', desc: 'Points, Rays, Angles & Revolutions', id: 'c6m-ch2' },
  { num: 3, title: 'Number Play', short: 'Number Play', desc: 'Place Values, Large Numbers & Magic Squares', id: 'c6m-ch3' },
  { num: 4, title: 'Data Handling and Presentation', short: 'Data Handling', desc: 'Tally Marks, Pictographs & Bar Graphs', id: 'c6m-ch4' },
  { num: 5, title: 'Prime Time', short: 'Prime Time', desc: 'Divisibility Tests, Factor Trees, HCF & LCM', id: 'c6m-ch5' },
  { num: 6, title: 'Perimeter and Area', short: 'Perimeter & Area', desc: 'Mensuration, Polygons, Area Formulas', id: 'c6m-ch6' },
  { num: 7, title: 'Fractions', short: 'Fractions', desc: 'Visual Models, Number Line, Arithmetic', id: 'c6m-ch7' },
  { num: 8, title: 'Playing with Constructions', short: 'Constructions', desc: 'Compass Bisectors & Standard Angles', id: 'c6m-ch8' },
  { num: 9, title: 'Symmetry', short: 'Symmetry', desc: 'Lines of Symmetry & Mirror Reflections', id: 'c6m-ch9' },
  { num: 10, title: 'The Other Side of Zero', short: 'Other Side of Zero', desc: 'Integers, Number Line Jumps & Arithmetic', id: 'c6m-ch10' },
  { num: 11, title: 'Introduction to Algebra', short: 'Algebra', desc: 'Variables, Expressions & Simple Equations', id: 'c6m-ch11' },
  { num: 12, title: 'Ratio and Proportion', short: 'Ratio & Proportion', desc: 'Simplest Form, Proportions & Unitary Method', id: 'c6m-ch12' }
];

const cmList = [
  { num: 1, title: 'Knowing Our Numbers', short: 'Knowing Numbers', desc: 'Large Numbers & Roman Numerals', id: 'ch_cm1' },
  { num: 2, title: 'Whole Numbers', short: 'Whole Numbers', desc: 'Properties & Distributive Law', id: 'ch_cm2' },
  { num: 3, title: 'Playing with Numbers', short: 'Playing Numbers', desc: 'Factors, Multiples, HCF & LCM', id: 'ch_cm3' },
  { num: 4, title: 'Basic Geometrical Ideas', short: 'Geometrical Ideas', desc: 'Points, Lines, Polygons & Circles', id: 'ch_cm4' },
  { num: 5, title: 'Understanding Elementary Shapes', short: 'Elementary Shapes', desc: 'Angles, Triangles & 3D Shapes', id: 'ch_cm5' },
  { num: 6, title: 'Integers', short: 'Integers', desc: 'Negative Numbers & Arithmetic', id: 'ch_cm6' },
  { num: 7, title: 'Fractions', short: 'Fractions', desc: 'Proper, Improper & Operations', id: 'ch_cm7' },
  { num: 8, title: 'Decimals', short: 'Decimals', desc: 'Tenths, Hundredths & Arithmetic', id: 'ch_cm8' },
  { num: 9, title: 'Data Handling', short: 'Data Handling', desc: 'Tally Marks & Bar Graphs', id: 'ch_cm9' },
  { num: 10, title: 'Mensuration', short: 'Mensuration', desc: 'Perimeter & Area Formulas', id: 'ch_cm10' },
  { num: 11, title: 'Algebra', short: 'Algebra', desc: 'Variables, Expressions & Equations', id: 'ch_cm11' },
  { num: 12, title: 'Ratio and Proportion', short: 'Ratio & Proportion', desc: 'Ratios, Proportions & Unitary', id: 'ch_cm12' },
  { num: 13, title: 'Symmetry', short: 'Symmetry', desc: 'Lines of Symmetry & Reflection', id: 'ch_cm13' },
  { num: 14, title: 'Practical Geometry', short: 'Practical Geometry', desc: 'Ruler & Compass Constructions', id: 'ch_cm14' }
];

const gpSectionsHtml = gpList.map(ch => extractSection(path.join(mDir, `ganita-prakash-ch${ch.num}.html`))).join('\n');
const cmSectionsHtml = cmList.map(ch => extractSection(path.join(mDir, `maths-classic-ch${ch.num}.html`))).join('\n');

function buildHubHtml({
  subjectTitle,
  subjectSlug,
  brandColor,
  brandDark,
  track1Name,
  track1Badge,
  track1Chapters,
  track1SectionsHtml,
  track2Name,
  track2Badge,
  track2Chapters,
  track2SectionsHtml,
  metaDesc
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 6 ${subjectTitle} (Dual Track: NEP 2020 & Classic CBSE) | OlympiadQuiz</title>
  <meta name="description" content="${metaDesc}">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-6-${subjectSlug}.html">
  <link rel="icon" type="image/png" href="favicon.png">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 6", "item": "https://olympiadquiz.org/ncert-solutions-class-6.html" },
      { "@type": "ListItem", "position": 4, "name": "${subjectTitle}", "item": "https://olympiadquiz.org/ncert-solutions-class-6-${subjectSlug}.html" }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --brand: ${brandColor};
      --brand-hover: ${brandDark};
      --brand-light: #eff6ff;
      --navy: #0f172a;
      --slate: #334155;
      --muted: #64748b;
      --light-bg: #f8fafc;
      --border: #e2e8f0;
      --shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      --shadow-hover: 0 10px 15px -3px rgba(0,0,0,0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, sans-serif; background: var(--light-bg); color: var(--slate); line-height: 1.6; }
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: var(--brand); z-index: 1000; width: 0%; transition: width .15s; }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.08); position: sticky; top: 0; z-index: 900; }
    .navbar-inner { max-width: 1400px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; }
    .navbar-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; font-size: 1.15rem; font-weight: 800; color: white; }
    .navbar-logo span span { color: #818cf8; }
    .navbar-links { display: flex; align-items: center; gap: 14px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; text-decoration: none; transition: 0.2s; }
    .nav-link:hover { color: white; }

    /* Breadcrumbs & Switcher */
    .ncert-breadcrumb-nav { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 10px 0; }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .ncert-bc-list { display: flex; align-items: center; list-style: none; gap: 8px; font-size: 0.82rem; font-weight: 500; color: #64748b; }
    .ncert-bc-list a { color: #2563eb; text-decoration: none; font-weight: 600; }
    .ncert-bc-switch { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .ncert-bc-pill { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px; font-size: 0.75rem; font-weight: 700; text-decoration: none; color: #475569; background: #f1f5f9; border: 1px solid #cbd5e1; transition: 0.15s; }
    .ncert-bc-pill.active { background: var(--brand); color: white; border-color: var(--brand); }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%); color: white; padding: 44px 24px 36px; text-align: center; }
    .hero-banner h1 { font-size: 2.1rem; font-weight: 900; margin-bottom: 12px; letter-spacing: -0.02em; }
    .hero-banner p { max-width: 840px; margin: 0 auto 20px; font-size: 0.96rem; opacity: 0.9; line-height: 1.65; }
    .hero-badges { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
    .hero-badge { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.22); color: white; font-size: 0.78rem; font-weight: 700; padding: 5px 14px; border-radius: 999px; }

    /* Dual Track Selector Bar */
    .track-toggle-bar { display: inline-flex; background: rgba(15,23,42,0.6); padding: 5px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); gap: 6px; }
    .track-btn { background: transparent; color: #cbd5e1; border: none; padding: 10px 22px; border-radius: 8px; font-size: 0.88rem; font-weight: 800; cursor: pointer; transition: 0.2s; }
    .track-btn.active { background: #ffffff; color: #0f172a; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }

    /* Quick Filter Chips */
    .filter-bar { background: #ffffff; border-bottom: 1px solid #e2e8f0; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
    .filter-chips { max-width: 1400px; margin: 0 auto; padding: 10px 24px; display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; }
    .bc-chip { flex-shrink: 0; padding: 6px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; background: #f8fafc; border: 1.5px solid #e2e8f0; color: #475569; cursor: pointer; transition: 0.15s; }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); }
    .bc-n { display: inline-block; width: 18px; height: 18px; line-height: 18px; text-align: center; border-radius: 4px; background: rgba(0,0,0,0.08); margin-right: 6px; font-size: 0.72rem; }

    /* Main Layout */
    .main-layout { max-width: 1400px; margin: 0 auto; display: flex; gap: 28px; padding: 28px 24px 60px; }
    .sidebar { width: 320px; flex-shrink: 0; position: sticky; top: 120px; height: calc(100vh - 140px); overflow-y: auto; background: white; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; box-shadow: var(--shadow); }
    .sidebar-title { font-size: 0.82rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 12px; }
    .sidebar-list { list-style: none; }
    .sidebar-list li a { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 8px; color: #334155; text-decoration: none; font-size: 0.86rem; font-weight: 600; margin-bottom: 4px; transition: 0.15s; }
    .sidebar-list li a:hover { background: #f1f5f9; color: var(--brand); }
    .sidebar-list li a.active { background: var(--brand-light); color: var(--brand); font-weight: 800; border-left: 3px solid var(--brand); }
    .ch-num { width: 22px; height: 22px; border-radius: 50%; background: #e2e8f0; color: #475569; font-size: 0.75rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .sidebar-list li a.active .ch-num { background: var(--brand); color: white; }

    .content-area { flex-grow: 1; min-width: 0; }
    .chapter-section { display: none; background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; margin-bottom: 30px; box-shadow: var(--shadow); }
    .chapter-section.active { display: block; }

    /* Chapter Header */
    .chapter-header { display: flex; align-items: center; gap: 18px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1.5px solid #f1f5f9; }
    .ch-badge { width: 48px; height: 48px; border-radius: 14px; background: var(--brand); color: white; font-size: 1.4rem; font-weight: 900; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .chapter-header-info h2 { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
    .chapter-header-info p { font-size: 0.88rem; color: #64748b; }

    /* Question Cards */
    .concept-card { background: #f8fafc; border-left: 4px solid var(--brand); padding: 18px 22px; border-radius: 12px; margin-bottom: 24px; }
    .concept-header { font-weight: 800; font-size: 0.94rem; color: #0f172a; margin-bottom: 8px; }
    .concept-list { margin-left: 20px; font-size: 0.9rem; color: #334155; }
    .ex-div { background: #f1f5f9; font-weight: 800; font-size: 0.9rem; padding: 10px 16px; border-radius: 8px; margin: 28px 0 16px; border-left: 4px solid var(--brand); }
    
    .q-card { border: 1.5px solid #e2e8f0; border-radius: 12px; margin-bottom: 16px; overflow: hidden; background: white; transition: 0.2s; }
    .q-head { padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; gap: 14px; background: #ffffff; }
    .q-head:hover { background: #f8fafc; }
    .q-num { font-weight: 900; color: var(--brand); font-size: 0.9rem; min-width: 32px; }
    .q-text { flex-grow: 1; font-weight: 700; font-size: 0.92rem; color: #1e293b; }
    .q-marks { font-size: 0.78rem; font-weight: 800; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 6px; white-space: nowrap; }
    .q-toggle svg { width: 18px; height: 18px; stroke: #94a3b8; transition: transform 0.2s; }
    .q-card.open .q-toggle svg { transform: rotate(45deg); stroke: #ef4444; }
    
    .q-answer { display: none; padding: 20px 24px; background: #fafafa; border-top: 1px solid #f1f5f9; }
    .q-card.open .q-answer { display: block; }
    .answer-label { font-weight: 800; font-size: 0.84rem; text-transform: uppercase; color: #16a34a; margin-bottom: 12px; }
    .answer-text { font-size: 0.92rem; line-height: 1.8; color: #334155; }
    .marking-scheme { margin-top: 16px; padding: 14px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; }
    .marking-title { font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #475569; margin-bottom: 6px; }
    .marking-row { display: flex; justify-content: space-between; font-size: 0.84rem; padding: 3px 0; border-bottom: 1px dotted #e2e8f0; }
    .marking-key { color: #475569; }
    .marking-marks { font-weight: 700; color: #16a34a; }

    /* CBQ Card */
    .cbq-card { background: #fdf4ff; border: 1.5px solid #f0abfc; border-radius: 12px; padding: 22px; margin-top: 28px; }
    .cbq-badge { display: inline-block; background: #c026d3; color: white; padding: 3px 10px; border-radius: 999px; font-size: 0.74rem; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; }

    @media (max-width: 1024px) {
      .sidebar { display: none; }
      .main-layout { padding: 20px 16px; }
      .chapter-section { padding: 20px; }
    }
  </style>
</head>
<body>

  <div class="top-progress" id="progressBar"></div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <img src="favicon.png" alt="OlympiadQuiz" width="28" height="28">
        <span>Olympiad<span>Quiz</span></span>
      </a>
      <div class="navbar-links">
        <a href="ncert-solutions.html" class="nav-link">📚 All NCERT</a>
        <a href="ncert-solutions-class-6.html" class="nav-link">Class 6 Hub</a>
      </div>
    </div>
  </nav>

  <!-- Breadcrumbs & Subject Switcher -->
  <nav class="ncert-breadcrumb-nav" aria-label="Breadcrumb">
    <div class="ncert-bc-container">
      <ol class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li>/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li>/</li>
        <li><a href="ncert-solutions-class-6.html">Class 6</a></li>
        <li>/</li>
        <li style="color:#0f172a;font-weight:700;">${subjectTitle} (Dual Track)</li>
      </ol>
      <div class="ncert-bc-switch">
        <a href="ncert-solutions-class-6-maths.html" class="ncert-bc-pill ${subjectSlug === 'maths' ? 'active' : ''}">Maths</a>
        <a href="ncert-solutions-class-6-science.html" class="ncert-bc-pill ${subjectSlug === 'science' ? 'active' : ''}">Science</a>
        <a href="ncert-solutions-class-6-sst.html" class="ncert-bc-pill ${subjectSlug === 'sst' ? 'active' : ''}">Social Science</a>
        <a href="ncert-solutions-class-6-english.html" class="ncert-bc-pill ${subjectSlug === 'english' ? 'active' : ''}">English</a>
        <a href="ncert-solutions-class-6-hindi-malhar.html" class="ncert-bc-pill">Hindi (Malhar)</a>
        <a href="ncert-solutions-class-6-hindi.html" class="ncert-bc-pill">Hindi (Vasant)</a>
        <a href="ncert-solutions-class-6-sanskrit.html" class="ncert-bc-pill">Sanskrit</a>
      </div>
    </div>
  </nav>

  <!-- Hero Banner with Track Switcher -->
  <header class="hero-banner">
    <div class="hero-badges">
      <span class="hero-badge">🎓 Session 2026-27</span>
      <span class="hero-badge">100% True Textbook Coverage</span>
      <span class="hero-badge">CBSE Step Marking</span>
      <span class="hero-badge">NEP 2020 Aligned</span>
    </div>
    <h1>NCERT Solutions for Class 6 ${subjectTitle}</h1>
    <p>Complete chapter-wise step-by-step model solutions covering both official curriculum tracks: the new <strong>${track1Name}</strong> and the established <strong>${track2Name}</strong>.</p>
    
    <div class="track-toggle-bar">
      <button class="track-btn active" id="btnTrack1" onclick="switchTrack('track1')">${track1Badge}</button>
      <button class="track-btn" id="btnTrack2" onclick="switchTrack('track2')">${track2Badge}</button>
    </div>
  </header>

  <!-- Quick Filter Chips -->
  <div class="filter-bar">
    <div class="filter-chips" id="chipsTrack1">
      ${track1Chapters.map((ch, idx) => `
        <span class="bc-chip ${idx === 0 ? 'active' : ''}" onclick="showChapter('track1', ${ch.num})" data-t1="${ch.num}"><span class="bc-n">${ch.num}</span>${ch.short}</span>
      `).join('')}
    </div>
    <div class="filter-chips" id="chipsTrack2" style="display:none;">
      ${track2Chapters.map((ch, idx) => `
        <span class="bc-chip ${idx === 0 ? 'active' : ''}" onclick="showChapter('track2', ${ch.num})" data-t2="${ch.num}"><span class="bc-n">${ch.num}</span>${ch.short}</span>
      `).join('')}
    </div>
  </div>

  <!-- Main Layout -->
  <div class="main-layout">
    
    <!-- Sidebar -->
    <aside class="sidebar">
      <div id="sideNavTrack1">
        <div class="sidebar-title">${track1Name}</div>
        <ul class="sidebar-list">
          ${track1Chapters.map((ch, idx) => `
            <li><a href="javascript:void(0)" onclick="showChapter('track1', ${ch.num})" data-s1="${ch.num}" class="${idx === 0 ? 'active' : ''}"><span class="ch-num">${ch.num}</span><div><div>${ch.title}</div><small style="color:#64748b;font-size:0.75rem;">${ch.desc}</small></div></a></li>
          `).join('')}
        </ul>
      </div>

      <div id="sideNavTrack2" style="display:none;">
        <div class="sidebar-title">${track2Name}</div>
        <ul class="sidebar-list">
          ${track2Chapters.map((ch, idx) => `
            <li><a href="javascript:void(0)" onclick="showChapter('track2', ${ch.num})" data-s2="${ch.num}" class="${idx === 0 ? 'active' : ''}"><span class="ch-num">${ch.num}</span><div><div>${ch.title}</div><small style="color:#64748b;font-size:0.75rem;">${ch.desc}</small></div></a></li>
          `).join('')}
        </ul>
      </div>
    </aside>

    <!-- Content Area -->
    <main class="content-area">
      <div id="containerTrack1">
        ${track1SectionsHtml}
      </div>
      <div id="containerTrack2" style="display:none;">
        ${track2SectionsHtml}
      </div>
    </main>
  </div>

  <script>
    let activeTrack = 'track1';

    function switchTrack(track) {
      activeTrack = track;
      const isT1 = (track === 'track1');
      
      document.getElementById('btnTrack1').classList.toggle('active', isT1);
      document.getElementById('btnTrack2').classList.toggle('active', !isT1);
      
      document.getElementById('chipsTrack1').style.display = isT1 ? 'flex' : 'none';
      document.getElementById('chipsTrack2').style.display = isT1 ? 'none' : 'flex';
      
      document.getElementById('sideNavTrack1').style.display = isT1 ? 'block' : 'none';
      document.getElementById('sideNavTrack2').style.display = isT1 ? 'none' : 'block';
      
      document.getElementById('containerTrack1').style.display = isT1 ? 'block' : 'none';
      document.getElementById('containerTrack2').style.display = isT1 ? 'none' : 'block';

      showChapter(track, 1);
    }

    function showChapter(track, num) {
      const containerId = (track === 'track1') ? 'containerTrack1' : 'containerTrack2';
      const sections = document.querySelectorAll('#' + containerId + ' .chapter-section');
      
      sections.forEach((sec, idx) => {
        if (idx === (num - 1)) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });

      if (track === 'track1') {
        document.querySelectorAll('#chipsTrack1 .bc-chip').forEach(c => c.classList.toggle('active', c.getAttribute('data-t1') == num));
        document.querySelectorAll('#sideNavTrack1 a').forEach(a => a.classList.toggle('active', a.getAttribute('data-s1') == num));
      } else {
        document.querySelectorAll('#chipsTrack2 .bc-chip').forEach(c => c.classList.toggle('active', c.getAttribute('data-t2') == num));
        document.querySelectorAll('#sideNavTrack2 a').forEach(a => a.classList.toggle('active', a.getAttribute('data-s2') == num));
      }

      window.scrollTo({ top: 260, behavior: 'smooth' });
    }

    function toggleQ(qId) {
      const card = document.getElementById(qId);
      if (card) card.classList.toggle('open');
    }

    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / h) * 100;
      const bar = document.getElementById('progressBar');
      if (bar) bar.style.width = scrolled + '%';
    });

    // Initialize first chapter active
    document.addEventListener('DOMContentLoaded', () => {
      showChapter('track1', 1);
    });
    showChapter('track1', 1);
  </script>
</body>
</html>`;
}

// Write Mathematics Hub
const mathsHubHtml = buildHubHtml({
  subjectTitle: 'Mathematics',
  subjectSlug: 'maths',
  brandColor: '#2563eb',
  brandDark: '#1d4ed8',
  track1Name: 'Ganita Prakash (NEP 2020)',
  track1Badge: '📘 Ganita Prakash (NEP 2020) — 12 Chapters',
  track1Chapters: gpList,
  track1SectionsHtml: gpSectionsHtml,
  track2Name: 'Mathematics (Classic CBSE)',
  track2Badge: '📙 Mathematics Classic — 14 Chapters',
  track2Chapters: cmList,
  track2SectionsHtml: cmSectionsHtml,
  metaDesc: 'Complete 100% chapter-wise NCERT solutions for Class 6 Mathematics covering both Ganita Prakash (NEP 2020) and Mathematics Classic CBSE tracks with step marking and diagrams.'
});
fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-maths.html'), mathsHubHtml, 'utf-8');
console.log("✓ Successfully updated ncert-solutions-class-6-maths.html (Dual-Track, size:", mathsHubHtml.length.toLocaleString(), "bytes)");

// --------------------------------------------------------------------------
// 2. SCIENCE DUAL-TRACK HUB
// --------------------------------------------------------------------------
console.log("\n=== COMPILING SCIENCE DUAL-TRACK HUB ===");
const sListCur = [
  { num: 1, title: 'The Wonderful World of Science', short: 'World of Science', desc: 'Scientific Method & Observation' },
  { num: 2, title: 'Diversity in the Living World', short: 'Living Diversity', desc: 'Plants, Animals & Habitat Adaptation' },
  { num: 3, title: 'Mindful Eating: A Path to a Healthy Body', short: 'Mindful Eating', desc: 'Nutrition, Nutrients & Balanced Diet' },
  { num: 4, title: 'Exploring Magnets', short: 'Exploring Magnets', desc: 'Magnetic Poles, Attraction & Compasses' },
  { num: 5, title: 'Measurement of Length and Motion', short: 'Length & Motion', desc: 'SI Units, Standard Measurements & Motion' },
  { num: 6, title: 'Materials Around Us', short: 'Materials Around Us', desc: 'Physical Properties & States of Matter' },
  { num: 7, title: 'Temperature and its Measurement', short: 'Temperature', desc: 'Clinical & Laboratory Thermometers' },
  { num: 8, title: 'Water: A Precious Resource', short: 'Water Resource', desc: 'Water Cycle & Rainwater Harvesting' },
  { num: 9, title: 'Methods of Separation in Daily Life', short: 'Separation Methods', desc: 'Sedimentation, Decantation & Filtration' },
  { num: 10, title: 'Living Creatures: Exploring Characteristics', short: 'Living Creatures', desc: 'Respiration, Stimuli & Reproduction' },
  { num: 11, title: "Nature's Treasures", short: "Nature's Treasures", desc: 'Renewable Resources & Conservation' },
  { num: 12, title: 'Beyond Earth: The Sun, Moon and Stars', short: 'Beyond Earth', desc: 'Solar System & Celestial Bodies' }
];

const sListClassic = [
  { num: 1, title: 'Components of Food', short: 'Components Food', desc: 'Carbohydrates, Fats, Proteins & Vitamins' },
  { num: 2, title: 'Sorting Materials into Groups', short: 'Sorting Materials', desc: 'Lustre, Hardness & Transparency' },
  { num: 3, title: 'Separation of Substances', short: 'Separation', desc: 'Winnowing, Sieving & Filtration' },
  { num: 4, title: 'Getting to Know Plants', short: 'Know Plants', desc: 'Herbs, Shrubs, Trees & Flowers' },
  { num: 5, title: 'Body Movements', short: 'Body Movements', desc: 'Joints, Skeleton & Gait of Animals' },
  { num: 6, title: 'Living Organisms & Habitats', short: 'Habitats', desc: 'Adaptation & Biotic/Abiotic Factors' },
  { num: 7, title: 'Motion & Measurement of Distances', short: 'Motion & Distance', desc: 'SI Units & Types of Motion' },
  { num: 8, title: 'Light, Shadows and Reflections', short: 'Light & Shadows', desc: 'Pinhole Camera & Mirrors' },
  { num: 9, title: 'Electricity and Circuits', short: 'Electricity', desc: 'Cells, Bulbs, Conductors & Insulators' },
  { num: 10, title: 'Fun with Magnets', short: 'Fun with Magnets', desc: 'Poles, Compass & Magnetic Storage' },
  { num: 11, title: 'Air Around Us', short: 'Air Around Us', desc: 'Atmosphere, Oxygen & Respiration' }
];

const sCurSectionsHtml = sListCur.map(ch => extractSection(path.join(sDir, `curiosity-ch${ch.num}.html`))).join('\n');
const sClassicSectionsHtml = sListClassic.map(ch => extractSection(path.join(sDir, `science-classic-ch${ch.num}.html`))).join('\n');

const scienceHubHtml = buildHubHtml({
  subjectTitle: 'Science',
  subjectSlug: 'science',
  brandColor: '#059669',
  brandDark: '#047857',
  track1Name: 'Curiosity (NEP 2020)',
  track1Badge: '📘 Curiosity (NEP 2020) — 12 Chapters',
  track1Chapters: sListCur,
  track1SectionsHtml: sCurSectionsHtml,
  track2Name: 'Science (Classic CBSE)',
  track2Badge: '📙 Science Classic — 11 Chapters',
  track2Chapters: sListClassic,
  track2SectionsHtml: sClassicSectionsHtml,
  metaDesc: 'Complete NCERT solutions for Class 6 Science covering both Curiosity (NEP 2020) and Science Classic CBSE tracks with labeled diagrams and step marking.'
});
fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-science.html'), scienceHubHtml, 'utf-8');
console.log("✓ Successfully updated ncert-solutions-class-6-science.html (Dual-Track, size:", scienceHubHtml.length.toLocaleString(), "bytes)");

// --------------------------------------------------------------------------
// 3. ENGLISH DUAL-TRACK HUB
// --------------------------------------------------------------------------
console.log("\n=== COMPILING ENGLISH DUAL-TRACK HUB ===");
const engPoorviList = [
  { num: 1, title: 'A Bottle of Dew', short: 'Bottle of Dew', desc: 'Fables & Folk Tales' },
  { num: 2, title: 'The Raven and the Fox', short: 'Raven & Fox', desc: 'Fables & Folk Tales' },
  { num: 3, title: 'Rama to the Rescue', short: 'Rama to Rescue', desc: 'Fables & Folk Tales' },
  { num: 4, title: 'The Unlikely Best Friends', short: 'Best Friends', desc: 'Friendship' },
  { num: 5, title: 'A Friend’s Prayer', short: "Friend's Prayer", desc: 'Friendship' },
  { num: 6, title: 'The Chair', short: 'The Chair', desc: 'Friendship' },
  { num: 7, title: 'Neem Baba', short: 'Neem Baba', desc: 'Nurturing Nature' },
  { num: 8, title: 'What a Bird Thought', short: 'What Bird Thought', desc: 'Nurturing Nature' },
  { num: 9, title: 'Spices that Heal Us', short: 'Spices that Heal', desc: 'Nurturing Nature' },
  { num: 10, title: 'Change of Heart', short: 'Change of Heart', desc: 'Sports & Wellness' },
  { num: 11, title: 'The Winner', short: 'The Winner', desc: 'Sports & Wellness' },
  { num: 12, title: 'Yoga — A Way of Life', short: 'Yoga Way of Life', desc: 'Sports & Wellness' },
  { num: 13, title: 'Hamara Bharat — Incredible India!', short: 'Hamara Bharat', desc: 'Culture & Tradition' },
  { num: 14, title: 'The Kites', short: 'The Kites', desc: 'Culture & Tradition' },
  { num: 15, title: 'Ila Sachani: Embroidering Dreams', short: 'Ila Sachani', desc: 'Culture & Tradition' }
];

const engClassicList = [
  { num: 1, title: 'Who Did Patrick’s Homework?', short: "Patrick's Homework", desc: 'Honeysuckle Unit 1' },
  { num: 2, title: 'How the Dog Found a Master!', short: 'Dog Found Master', desc: 'Honeysuckle Unit 2' },
  { num: 3, title: "Taro's Reward", short: "Taro's Reward", desc: 'Honeysuckle Unit 3' },
  { num: 4, title: 'Kalpana Chawla in Space', short: 'Kalpana Chawla', desc: 'Honeysuckle Unit 4' },
  { num: 5, title: 'A Different Kind of School', short: 'Different School', desc: 'Honeysuckle Unit 5' },
  { num: 6, title: 'Who I Am', short: 'Who I Am', desc: 'Honeysuckle Unit 6' },
  { num: 7, title: 'Fair Play', short: 'Fair Play', desc: 'Honeysuckle Unit 7' },
  { num: 8, title: 'A Game of Chance', short: 'Game of Chance', desc: 'Honeysuckle Unit 8' },
  { num: 9, title: 'A Tale of Two Birds', short: 'Two Birds', desc: 'A Pact with the Sun Ch 1' },
  { num: 10, title: 'The Friendly Mongoose', short: 'Friendly Mongoose', desc: 'A Pact with the Sun Ch 2' },
  { num: 11, title: "The Shepherd's Treasure", short: "Shepherd's Treasure", desc: 'A Pact with the Sun Ch 3' },
  { num: 12, title: 'Tansen', short: 'Tansen', desc: 'A Pact with the Sun Ch 4' },
  { num: 13, title: 'The Monkey and the Crocodile', short: 'Monkey & Crocodile', desc: 'A Pact with the Sun Ch 5' },
  { num: 14, title: 'The Wonder Called Sleep', short: 'Wonder of Sleep', desc: 'A Pact with the Sun Ch 6' },
  { num: 15, title: 'A Pact with the Sun', short: 'Pact with the Sun', desc: 'A Pact with the Sun Ch 7' }
];

const engPoorviSectionsHtml = engPoorviList.map(ch => extractSection(path.join(engDir, `poorvi-ch${ch.num}.html`))).join('\n');
const engClassicSectionsHtml = engClassicList.map(ch => {
  const fname = ch.num <= 8 ? `honeysuckle-ch${ch.num}.html` : `pact-with-the-sun-ch${ch.num - 8}.html`;
  return extractSection(path.join(engDir, fname));
}).join('\n');

const englishHubHtml = buildHubHtml({
  subjectTitle: 'English',
  subjectSlug: 'english',
  brandColor: '#7c3aed',
  brandDark: '#6d28d9',
  track1Name: 'Poorvi (NEP 2020)',
  track1Badge: '📘 Poorvi (NEP 2020) — 15 Chapters',
  track1Chapters: engPoorviList,
  track1SectionsHtml: engPoorviSectionsHtml,
  track2Name: 'Honeysuckle & A Pact with the Sun',
  track2Badge: '📙 Honeysuckle & Pact with the Sun — 15 Chapters',
  track2Chapters: engClassicList,
  track2SectionsHtml: engClassicSectionsHtml,
  metaDesc: 'Complete NCERT solutions for Class 6 English covering both Poorvi (NEP 2020) and Honeysuckle & A Pact with the Sun (Classic CBSE) tracks.'
});
fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-english.html'), englishHubHtml, 'utf-8');
fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-eng.html'), englishHubHtml, 'utf-8');
console.log("✓ Successfully updated ncert-solutions-class-6-english.html (Dual-Track, size:", englishHubHtml.length.toLocaleString(), "bytes)");

// --------------------------------------------------------------------------
// 4. SOCIAL SCIENCE DUAL-TRACK HUB
// --------------------------------------------------------------------------
console.log("\n=== COMPILING SOCIAL SCIENCE DUAL-TRACK HUB ===");
const sstEsList = [
  { num: 1, title: 'Locating Places on the Earth', short: 'Locating Places', desc: 'Theme A: Geography' },
  { num: 2, title: 'Oceans and Continents', short: 'Oceans & Continents', desc: 'Theme A: Geography' },
  { num: 3, title: 'Landforms and Life', short: 'Landforms & Life', desc: 'Theme A: Geography' },
  { num: 4, title: 'Timeline and Sources of History', short: 'Timeline & Sources', desc: 'Theme B: History' },
  { num: 5, title: 'India, That is Bharat', short: 'India that is Bharat', desc: 'Theme B: History' },
  { num: 6, title: 'The Beginning of Indian Civilisation', short: 'Early Civilisation', desc: 'Theme B: History' },
  { num: 7, title: "India's Cultural Roots", short: 'Cultural Roots', desc: 'Theme C: Culture' },
  { num: 8, title: "Unity in Diversity, or 'Many in the One'", short: 'Unity in Diversity', desc: 'Theme C: Culture' },
  { num: 9, title: 'Family and Community', short: 'Family & Community', desc: 'Theme D: Civics' },
  { num: 10, title: 'Grassroots Democracy — Part 1: Governance', short: 'Grassroots Part 1', desc: 'Theme D: Civics' },
  { num: 11, title: 'Grassroots Democracy — Part 2: Rural Areas', short: 'Grassroots Part 2', desc: 'Theme D: Civics' },
  { num: 12, title: 'The Value of Work', short: 'Value of Work', desc: 'Theme E: Economics' },
  { num: 13, title: 'Economic Activities Around Us', short: 'Economic Activities', desc: 'Theme E: Economics' },
  { num: 14, title: 'Protecting Public Property', short: 'Public Property', desc: 'Theme E: Economics' }
];

const sstClassicList = [
  { num: 1, title: 'What, Where, How and When?', short: 'What Where How', desc: 'History Ch 1' },
  { num: 2, title: 'From Hunting-Gathering to Growing Food', short: 'Hunting to Farming', desc: 'History Ch 2' },
  { num: 3, title: 'In the Earliest Cities', short: 'Earliest Cities', desc: 'History Ch 3' },
  { num: 4, title: 'What Books and Burials Tell Us', short: 'Books & Burials', desc: 'History Ch 4' },
  { num: 5, title: 'Kingdoms, Kings & Early Republic', short: 'Kingdoms & Kings', desc: 'History Ch 5' },
  { num: 6, title: 'New Questions and Ideas', short: 'New Questions', desc: 'History Ch 6' },
  { num: 7, title: 'Ashoka: Emperor Who Gave Up War', short: 'Ashoka Emperor', desc: 'History Ch 7' },
  { num: 8, title: 'Vital Villages, Thriving Towns', short: 'Villages & Towns', desc: 'History Ch 8' },
  { num: 9, title: 'Traders, Kings and Pilgrims', short: 'Traders & Pilgrims', desc: 'History Ch 9' },
  { num: 10, title: 'Buildings, Paintings and Books', short: 'Buildings & Books', desc: 'History Ch 10' },
  { num: 11, title: 'The Earth in the Solar System', short: 'Solar System', desc: 'Geography Ch 1' },
  { num: 12, title: 'Globe: Latitudes and Longitudes', short: 'Latitudes Longitudes', desc: 'Geography Ch 2' },
  { num: 13, title: 'Motions of the Earth', short: 'Earth Motions', desc: 'Geography Ch 3' },
  { num: 14, title: 'Maps', short: 'Maps', desc: 'Geography Ch 4' },
  { num: 15, title: 'Major Domains of the Earth', short: 'Major Domains', desc: 'Geography Ch 5' },
  { num: 16, title: 'Our Country: India', short: 'Our Country India', desc: 'Geography Ch 6' },
  { num: 17, title: 'Understanding Diversity', short: 'Diversity', desc: 'Civics Ch 1' },
  { num: 18, title: 'Diversity and Discrimination', short: 'Discrimination', desc: 'Civics Ch 2' },
  { num: 19, title: 'What is Government?', short: 'What is Govt', desc: 'Civics Ch 3' },
  { num: 20, title: 'Key Elements of Democratic Govt', short: 'Democratic Govt', desc: 'Civics Ch 4' },
  { num: 21, title: 'Panchayati Raj', short: 'Panchayati Raj', desc: 'Civics Ch 5' },
  { num: 22, title: 'Rural Administration', short: 'Rural Admin', desc: 'Civics Ch 6' },
  { num: 23, title: 'Urban Administration', short: 'Urban Admin', desc: 'Civics Ch 7' },
  { num: 24, title: 'Rural & Urban Livelihoods', short: 'Livelihoods', desc: 'Civics Ch 8' }
];

const sstEsSectionsHtml = sstEsList.map(ch => extractSection(path.join(sstDir, `exploring-society-ch${ch.num}.html`))).join('\n');
const sstClassicSectionsHtml = sstClassicList.map(ch => {
  let fname = "";
  if (ch.num <= 10) fname = `history-ch${ch.num}.html`;
  else if (ch.num <= 16) fname = `geography-ch${ch.num - 10}.html`;
  else fname = `civics-ch${ch.num - 16}.html`;
  return extractSection(path.join(sstDir, fname));
}).join('\n');

const sstHubHtml = buildHubHtml({
  subjectTitle: 'Social Science',
  subjectSlug: 'sst',
  brandColor: '#d97706',
  brandDark: '#b45309',
  track1Name: 'Exploring Society (NEP 2020)',
  track1Badge: '📘 Exploring Society (NEP 2020) — 14 Chapters',
  track1Chapters: sstEsList,
  track1SectionsHtml: sstEsSectionsHtml,
  track2Name: 'History, Civics & Geography (Classic)',
  track2Badge: '📙 History, Civics & Geography — 24 Chapters',
  track2Chapters: sstClassicList,
  track2SectionsHtml: sstClassicSectionsHtml,
  metaDesc: 'Complete NCERT solutions for Class 6 Social Science covering both Exploring Society (NEP 2020) and History, Civics & Geography (Classic CBSE) tracks.'
});
fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-sst.html'), sstHubHtml, 'utf-8');
fs.writeFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-social-science.html'), sstHubHtml, 'utf-8');
console.log("✓ Successfully updated ncert-solutions-class-6-sst.html (Dual-Track, size:", sstHubHtml.length.toLocaleString(), "bytes)");

console.log("\n=======================================================");
console.log("✅ ALL 4 DUAL-TRACK HUBS SUCCESSFULLY GENERATED!");
console.log("=======================================================");
