// scripts/build-all-c2-dual-track-hubs.js
// Compiles all 4 Subject Hubs for Class 2 with Full Dual-Track (NEP 2020 + Classic CBSE)
// 1. ncert-solutions-class-2-maths.html (Joyful Mathematics 11 Ch + Math-Magic 15 Ch)
// 2. ncert-solutions-class-2-english.html (Mridang 9 Ch + Marigold 20 Ch)
// 3. ncert-solutions-class-2-hindi.html (Sarangi 26 Ch + Rimjhim 15 Ch)
// 4. ncert-solutions-class-2-evs.html (Living World 12 Ch + Surroundings 12 Ch)

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const mDir = path.join(ROOT, 'chapters-c2m');
const eDir = path.join(ROOT, 'chapters-c2e');
const hDir = path.join(ROOT, 'chapters-c2h');
const evsDir = path.join(ROOT, 'chapters-c2evs');

function extractMainContent(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error("Missing file:", filePath);
    return '';
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/<main class="content-area">([\s\S]*?)<\/main>/);
  if (!match) return content;
  // Strip out the top and bottom chapter-pager from the inner section since the hub has its own navigation
  let inner = match[1];
  inner = inner.replace(/<div class="chapter-pager"[\s\S]*?<\/div>/g, '');
  return inner;
}

function buildHubHtml({
  subjectTitle,
  subjectSlug,
  brandColor,
  brandDark,
  track1Name,
  track1Badge,
  track1Chapters,
  track1Prefix,
  track1Dir,
  track2Name,
  track2Badge,
  track2Chapters,
  track2Prefix,
  track2Dir,
  metaDesc
}) {
  const track1SectionsHtml = track1Chapters.map((ch, idx) => {
    const fPath = path.join(track1Dir, `${track1Prefix}-ch${ch.num}.html`);
    const content = extractMainContent(fPath);
    return `
      <section class="chapter-section ${idx === 0 ? 'active' : ''}" id="t1-sec-${ch.num}">
        <div style="margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; background:#f8fafc; padding:10px 16px; border-radius:8px; border:1px solid #e2e8f0;">
          <span style="font-size:0.85rem; font-weight:700; color:#475569;">${track1Name} • Chapter ${ch.num} of ${track1Chapters.length}</span>
          <a href="chapters-c2${subjectSlug === 'evs' ? 'evs' : (subjectSlug === 'english' ? 'e' : subjectSlug[0])}/${track1Prefix}-ch${ch.num}.html" class="btn-standalone" target="_blank">Open Dedicated Chapter Module ↗</a>
        </div>
        ${content}
      </section>
    `;
  }).join('\n');

  const track2SectionsHtml = track2Chapters.map((ch, idx) => {
    const fPath = path.join(track2Dir, `${track2Prefix}-ch${ch.num}.html`);
    const content = extractMainContent(fPath);
    return `
      <section class="chapter-section ${idx === 0 ? 'active' : ''}" id="t2-sec-${ch.num}">
        <div style="margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; background:#f8fafc; padding:10px 16px; border-radius:8px; border:1px solid #e2e8f0;">
          <span style="font-size:0.85rem; font-weight:700; color:#475569;">${track2Name} • Chapter ${ch.num} of ${track2Chapters.length}</span>
          <a href="chapters-c2${subjectSlug === 'evs' ? 'evs' : (subjectSlug === 'english' ? 'e' : subjectSlug[0])}/${track2Prefix}-ch${ch.num}.html" class="btn-standalone" target="_blank">Open Dedicated Chapter Module ↗</a>
        </div>
        ${content}
      </section>
    `;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 2 ${subjectTitle} (Dual Track: NEP 2020 & Classic CBSE) | OlympiadQuiz</title>
  <meta name="description" content="${metaDesc}">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-2-${subjectSlug}.html">
  <link rel="icon" type="image/png" href="favicon.png">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 2", "item": "https://olympiadquiz.org/ncert-solutions-class-2.html" },
      { "@type": "ListItem", "position": 4, "name": "${subjectTitle}", "item": "https://olympiadquiz.org/ncert-solutions-class-2-${subjectSlug}.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 2 ${subjectTitle} (Dual Track: ${track1Name} & ${track2Name})",
    "description": "${metaDesc}",
    "educationalLevel": "Grade 2",
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
    .nav-link { color: #94a3b8; text-decoration: none; font-size: 0.88rem; font-weight: 600; padding: 6px 12px; border-radius: 6px; transition: all .2s; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
    .btn-login { background: var(--brand); color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; }
    .btn-login:hover { background: var(--brand-hover); }

    /* Breadcrumbs */
    .ncert-breadcrumb-nav { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 12px 24px; font-size: 0.85rem; }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .ncert-bc-list { list-style: none; display: flex; align-items: center; gap: 8px; margin: 0; padding: 0; }
    .ncert-bc-list a { color: #2563eb; text-decoration: none; font-weight: 600; }
    .ncert-bc-switch { display: flex; gap: 6px; flex-wrap: wrap; }
    .ncert-bc-pill { font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; text-decoration: none; color: #475569; background: #f1f5f9; border: 1px solid #e2e8f0; }
    .ncert-bc-pill.active { background: var(--brand); color: white; border-color: var(--brand); }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, ${brandDark} 100%); color: white; padding: 44px 24px; text-align: center; }
    .hero-badges { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
    .hero-badge { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 999px; font-size: 0.78rem; font-weight: 700; color: #e2e8f0; }
    .hero-banner h1 { font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 900; margin-bottom: 12px; }
    .hero-banner p { max-width: 860px; margin: 0 auto 24px; font-size: 0.98rem; color: #cbd5e1; line-height: 1.6; }
    
    /* Track Toggle Switcher */
    .track-toggle-bar { display: inline-flex; background: rgba(15,23,42,0.8); border: 1.5px solid rgba(255,255,255,0.25); border-radius: 999px; padding: 4px; gap: 4px; max-width: 95%; flex-wrap: wrap; justify-content: center; }
    .track-btn { background: transparent; border: none; color: #cbd5e1; padding: 9px 20px; font-size: 0.88rem; font-weight: 700; border-radius: 999px; cursor: pointer; transition: all 0.2s ease; }
    .track-btn.active { background: var(--brand); color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }

    /* Quick Filter Chips */
    .filter-bar { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 10px 24px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
    .filter-chips { max-width: 1400px; margin: 0 auto; display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; }
    .bc-chip { white-space: nowrap; font-size: 0.8rem; font-weight: 700; color: #475569; background: #f8fafc; border: 1px solid #e2e8f0; padding: 6px 14px; border-radius: 999px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.15s; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); }
    .bc-chip .bc-n { width: 20px; height: 20px; border-radius: 50%; background: rgba(0,0,0,0.08); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,0.25); color: white; }

    /* Main Layout */
    .main-layout { max-width: 1400px; margin: 30px auto; padding: 0 24px; display: grid; grid-template-columns: 320px 1fr; gap: 32px; align-items: start; }
    @media (max-width: 1024px) {
      .main-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
    }

    /* Sidebar */
    .sidebar { background: white; border: 1px solid var(--border); border-radius: 14px; padding: 20px; position: sticky; top: 124px; max-height: calc(100vh - 140px); overflow-y: auto; }
    .sidebar-title { font-size: 0.82rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); margin-bottom: 12px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; }
    .sidebar-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
    .sidebar-list a { display: flex; align-items: flex-start; gap: 10px; padding: 8px 12px; font-size: 0.84rem; font-weight: 600; color: #334155; text-decoration: none; border-radius: 8px; transition: all 0.15s; }
    .sidebar-list a:hover { background: #f8fafc; color: var(--brand); }
    .sidebar-list a.active { background: var(--brand); color: white; font-weight: 700; }
    .sidebar-list a.active small { color: rgba(255,255,255,0.8) !important; }
    .ch-num { width: 22px; height: 22px; border-radius: 6px; background: rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: center; font-size: 0.74rem; font-weight: 800; flex-shrink: 0; }
    .sidebar-list a.active .ch-num { background: rgba(255,255,255,0.25); color: white; }

    /* Content Area & Sections */
    .content-area { min-width: 0; }
    .chapter-section { display: none; background: white; border: 1px solid var(--border); border-radius: 16px; padding: 32px; margin-bottom: 30px; box-shadow: var(--shadow); }
    .chapter-section.active { display: block; }
    .btn-standalone { font-size: 0.78rem; font-weight: 700; color: var(--brand); text-decoration: none; padding: 4px 10px; background: white; border: 1px solid #cbd5e1; border-radius: 6px; }
    .btn-standalone:hover { background: var(--brand); color: white; border-color: var(--brand); }

    /* Chapter Module Styling */
    .chapter-hero { border-bottom: 2px solid var(--border); padding-bottom: 20px; margin-bottom: 24px; }
    .chapter-hero h1 { font-size: 1.5rem; font-weight: 800; color: #0f172a; margin: 8px 0; }
    .badge-pill { display: inline-block; font-size: 0.78rem; font-weight: 800; background: #eff6ff; color: #1d4ed8; padding: 4px 12px; border-radius: 999px; }
    .concepts-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    .concepts-title { font-weight: 800; font-size: 0.95rem; color: #1e293b; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
    .concepts-list { padding-left: 20px; font-size: 0.9rem; color: #475569; }
    .concepts-list li { margin-bottom: 6px; }
    .diagram-wrap { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 24px; }

    /* Q-Cards */
    .q-card { background: #ffffff; border: 1.5px solid var(--border); border-radius: 12px; margin-bottom: 16px; overflow: hidden; }
    .q-head { padding: 14px 18px; cursor: pointer; display: flex; gap: 12px; align-items: flex-start; background: #f8fafc; border-bottom: 1px solid transparent; }
    .q-card.open .q-head { background: #ffffff; border-bottom-color: var(--border); }
    .q-badge-wrap { display: flex; flex-direction: column; gap: 4px; }
    .q-num { font-size: 0.8rem; font-weight: 800; background: var(--brand); color: white; padding: 3px 8px; border-radius: 6px; text-align: center; }
    .q-category { font-size: 0.7rem; font-weight: 700; color: #64748b; white-space: nowrap; }
    .q-text { flex: 1; font-size: 0.94rem; font-weight: 700; color: #1e293b; line-height: 1.5; }
    .q-marks { font-size: 0.78rem; font-weight: 700; color: #ea580c; white-space: nowrap; }
    .q-toggle svg { width: 18px; height: 18px; transition: transform 0.2s ease; color: #64748b; }
    .q-card.open .q-toggle svg { transform: rotate(180deg); }
    .q-answer { display: none; padding: 18px; background: #ffffff; border-top: 1px solid #f1f5f9; }
    .q-card.open .q-answer { display: block; }
    .answer-box { background: #f8fafc; border-radius: 8px; padding: 16px; border: 1px solid #e2e8f0; }
    .answer-label { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: #15803d; letter-spacing: 0.05em; margin-bottom: 8px; }
    .answer-text { font-size: 0.92rem; line-height: 1.7; color: #334155; }
    .marking-scheme { margin-top: 14px; padding-top: 12px; border-top: 1px dashed #cbd5e1; }
    .marking-title { font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: #1e293b; margin-bottom: 8px; }
    .marking-row { display: flex; justify-content: space-between; font-size: 0.82rem; padding: 4px 0; border-bottom: 1px dotted #e2e8f0; }
    .marking-key { color: #475569; }
    .marking-marks { font-weight: 700; color: #0284c7; }

    /* CBQ Card */
    .cbq-card { background: #faf5ff; border: 1.5px solid #d8b4fe; border-radius: 12px; padding: 22px; margin-top: 24px; }
    .cbq-badge { display: inline-block; font-size: 0.75rem; font-weight: 800; background: #7c3aed; color: white; padding: 3px 10px; border-radius: 999px; margin-bottom: 10px; }

    /* Footer */
    .footer { background: #0f172a; color: #94a3b8; padding: 40px 24px; text-align: center; font-size: 0.85rem; border-top: 1px solid #1e293b; margin-top: 60px; }
    .footer a { color: #60a5fa; text-decoration: none; }
    .footer a:hover { text-decoration: underline; }
  </style>
</head>
<body>

  <div class="top-progress" id="progressBar"></div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <img src="favicon.png" alt="OlympiadQuiz Logo" width="28" height="28" style="vertical-align: middle;">
        <span>Olympiad<span>Quiz</span></span>
      </a>
      <div class="navbar-links">
        <a href="ncert-solutions.html" class="nav-link">All NCERT</a>
        <a href="ncert-solutions-class-2.html" class="nav-link">Class 2 Hub</a>
        <a href="ncert-solutions-class-3.html" class="nav-link">Class 3</a>
        <a href="ncert-solutions-class-4.html" class="nav-link">Class 4</a>
        <a href="dashboard.html" class="btn-login">Dashboard</a>
      </div>
    </div>
  </nav>

  <!-- Secondary Breadcrumbs -->
  <nav class="ncert-breadcrumb-nav" aria-label="Breadcrumb">
    <div class="ncert-bc-container">
      <ol class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li>/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li>/</li>
        <li><a href="ncert-solutions-class-2.html">Class 2</a></li>
        <li>/</li>
        <li style="color:#0f172a;font-weight:700;">${subjectTitle} (Dual Track)</li>
      </ol>
      <div class="ncert-bc-switch">
        <a href="ncert-solutions-class-2-maths.html" class="ncert-bc-pill ${subjectSlug === 'maths' ? 'active' : ''}">Maths</a>
        <a href="ncert-solutions-class-2-english.html" class="ncert-bc-pill ${subjectSlug === 'english' ? 'active' : ''}">English</a>
        <a href="ncert-solutions-class-2-hindi.html" class="ncert-bc-pill ${subjectSlug === 'hindi' ? 'active' : ''}">Hindi</a>
        <a href="ncert-solutions-class-2-evs.html" class="ncert-bc-pill ${subjectSlug === 'evs' ? 'active' : ''}">EVS</a>
      </div>
    </div>
  </nav>

  <!-- Hero Banner with Track Switcher -->
  <header class="hero-banner">
    <div class="hero-badges">
      <span class="hero-badge">🎓 Session 2026-27</span>
      <span class="hero-badge">100% True Textbook Coverage</span>
      <span class="hero-badge">CBSE Step Marking</span>
      <span class="hero-badge">NEP 2020 &amp; Classic CBSE</span>
    </div>
    <h1>NCERT Solutions for Class 2 ${subjectTitle}</h1>
    <p>Comprehensive chapter-wise step-by-step model solutions covering both official curriculum tracks: the new <strong>${track1Name}</strong> and the established <strong>${track2Name}</strong>.</p>
    
    <div class="track-toggle-bar">
      <button class="track-btn active" id="btnTrack1" onclick="switchTrack('track1')">${track1Badge}</button>
      <button class="track-btn" id="btnTrack2" onclick="switchTrack('track2')">${track2Badge}</button>
    </div>
  </header>

  <!-- Quick Filter Chips -->
  <div class="filter-bar">
    <div class="filter-chips" id="chipsTrack1">
      ${track1Chapters.map((ch, idx) => `
        <span class="bc-chip ${idx === 0 ? 'active' : ''}" onclick="showChapter('track1', ${ch.num})" data-t1="${ch.num}"><span class="bc-n">${ch.num}</span>${ch.title.substring(0, 18)}...</span>
      `).join('')}
    </div>
    <div class="filter-chips" id="chipsTrack2" style="display:none;">
      ${track2Chapters.map((ch, idx) => `
        <span class="bc-chip ${idx === 0 ? 'active' : ''}" onclick="showChapter('track2', ${ch.num})" data-t2="${ch.num}"><span class="bc-n">${ch.num}</span>${ch.title.substring(0, 18)}...</span>
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
            <li><a href="javascript:void(0)" onclick="showChapter('track1', ${ch.num})" data-s1="${ch.num}" class="${idx === 0 ? 'active' : ''}"><span class="ch-num">${ch.num}</span><div><div>${ch.title}</div><small style="color:#64748b;font-size:0.75rem;">${ch.subtitle ? ch.subtitle.substring(0, 28) + '...' : ''}</small></div></a></li>
          `).join('')}
        </ul>
      </div>

      <div id="sideNavTrack2" style="display:none;">
        <div class="sidebar-title">${track2Name}</div>
        <ul class="sidebar-list">
          ${track2Chapters.map((ch, idx) => `
            <li><a href="javascript:void(0)" onclick="showChapter('track2', ${ch.num})" data-s2="${ch.num}" class="${idx === 0 ? 'active' : ''}"><span class="ch-num">${ch.num}</span><div><div>${ch.title}</div><small style="color:#64748b;font-size:0.75rem;">${ch.subtitle ? ch.subtitle.substring(0, 28) + '...' : ''}</small></div></a></li>
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

  <!-- Footer -->
  <footer class="footer">
    <div style="margin-bottom:12px;">
      <a href="index.html">Home</a> •
      <a href="ncert-solutions.html">NCERT Solutions</a> •
      <a href="ncert-solutions-class-2.html">Class 2 Hub</a> •
      <a href="ncert-solutions-class-3.html">Class 3 Solutions</a>
    </div>
    <p>© 2026–27 OlympiadQuiz.org — 100% Free Complete NCERT Solutions for CBSE &amp; State Boards.</p>
  </footer>

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
  </script>
</body>
</html>
  `;
}

console.log("=== COMPILING ALL 4 DUAL-TRACK HUBS FOR CLASS 2 ===\n");

// 1. MATHEMATICS DUAL-TRACK HUB
const { joyfulMathsChapters } = require('./data-c2-maths/joyfulMathsData.js');
const { mathMagicChapters } = require('./data-c2-maths/mathMagicData.js');

const mathsHubHtml = buildHubHtml({
  subjectTitle: 'Mathematics',
  subjectSlug: 'maths',
  brandColor: '#2563eb',
  brandDark: '#1d4ed8',
  track1Name: 'Joyful Mathematics (NEP 2020)',
  track1Badge: '📘 Joyful Mathematics (NEP 2020) — 11 Chapters',
  track1Chapters: joyfulMathsChapters,
  track1Prefix: 'joyful-maths',
  track1Dir: mDir,
  track2Name: 'Math-Magic (Classic CBSE)',
  track2Badge: '📙 Math-Magic Classic — 15 Chapters',
  track2Chapters: mathMagicChapters,
  track2Prefix: 'math-magic',
  track2Dir: mDir,
  metaDesc: 'Complete NCERT solutions for Class 2 Mathematics covering Joyful Mathematics (NEP 2020) and Math-Magic Book 2 (Classic CBSE) tracks with step marking and diagrams.'
});
fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-2-maths.html'), mathsHubHtml, 'utf8');
console.log(`✓ Generated ncert-solutions-class-2-maths.html (${mathsHubHtml.length.toLocaleString()} bytes)`);

// 2. ENGLISH DUAL-TRACK HUB
const { mridangChapters } = require('./data-c2-english/mridangData.js');
const { marigoldChapters } = require('./data-c2-english/marigoldData.js');

const englishHubHtml = buildHubHtml({
  subjectTitle: 'English',
  subjectSlug: 'english',
  brandColor: '#0284c7',
  brandDark: '#0369a1',
  track1Name: 'Mridang (NEP 2020)',
  track1Badge: '📘 Mridang (NEP 2020) — 9 Chapters',
  track1Chapters: mridangChapters,
  track1Prefix: 'mridang',
  track1Dir: eDir,
  track2Name: 'Marigold (Classic CBSE)',
  track2Badge: '📙 Marigold Classic — 20 Chapters',
  track2Chapters: marigoldChapters,
  track2Prefix: 'marigold',
  track2Dir: eDir,
  metaDesc: 'Complete NCERT solutions for Class 2 English covering Mridang (NEP 2020) and Marigold Book 2 (Classic CBSE) tracks with reading comprehension, rhymes and activities.'
});
fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-2-english.html'), englishHubHtml, 'utf8');
console.log(`✓ Generated ncert-solutions-class-2-english.html (${englishHubHtml.length.toLocaleString()} bytes)`);

// 3. HINDI DUAL-TRACK HUB
const { sarangiChapters } = require('./data-c2-hindi/sarangiData.js');
const { rimjhimChapters } = require('./data-c2-hindi/rimjhimData.js');

const hindiHubHtml = buildHubHtml({
  subjectTitle: 'Hindi (हिंदी)',
  subjectSlug: 'hindi',
  brandColor: '#ea580c',
  brandDark: '#c2410c',
  track1Name: 'सारंगी - Sarangi (NEP 2020)',
  track1Badge: '📕 सारंगी (NEP 2020) — 26 पाठ',
  track1Chapters: sarangiChapters,
  track1Prefix: 'sarangi',
  track1Dir: hDir,
  track2Name: 'रिमझिम - Rimjhim (Classic CBSE)',
  track2Badge: '📙 रिमझिम भाग २ — 15 पाठ',
  track2Chapters: rimjhimChapters,
  track2Prefix: 'rimjhim',
  track2Dir: hDir,
  metaDesc: 'कक्षा 2 हिंदी के संपूर्ण एनसीईआरटी समाधान: सारंगी (26 पाठ) एवं रिमझिम भाग २ (15 पाठ) - भावार्थ, शब्दार्थ, प्रश्नोत्तर एवं भाषा की बात।'
});
fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-2-hindi.html'), hindiHubHtml, 'utf8');
console.log(`✓ Generated ncert-solutions-class-2-hindi.html (${hindiHubHtml.length.toLocaleString()} bytes)`);

// 4. ENVIRONMENTAL STUDIES DUAL-TRACK HUB
const { livingWorldChapters } = require('./data-c2-evs/livingWorldData.js');
const { surroundingsChapters } = require('./data-c2-evs/surroundingsData.js');

const evsHubHtml = buildHubHtml({
  subjectTitle: 'Environmental Studies (EVS)',
  subjectSlug: 'evs',
  brandColor: '#059669',
  brandDark: '#047857',
  track1Name: 'Our Living World & Nature',
  track1Badge: '🌿 Our Living World (NEP Foundational) — 12 Chapters',
  track1Chapters: livingWorldChapters,
  track1Prefix: 'living-world',
  track1Dir: evsDir,
  track2Name: 'Surroundings & Community',
  track2Badge: '🌍 Surroundings & Community (Classic) — 12 Chapters',
  track2Chapters: surroundingsChapters,
  track2Prefix: 'surroundings',
  track2Dir: evsDir,
  metaDesc: 'Complete Foundational Environmental Studies (EVS) solutions for Class 2 covering Our Living World & Nature and Surroundings & Community with eco-activities.'
});
fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-2-evs.html'), evsHubHtml, 'utf8');
console.log(`✓ Generated ncert-solutions-class-2-evs.html (${evsHubHtml.length.toLocaleString()} bytes)`);

console.log("\n=======================================================");
console.log("✅ ALL 4 CLASS 2 DUAL-TRACK HUBS SUCCESSFULLY GENERATED!");
console.log("=======================================================");
