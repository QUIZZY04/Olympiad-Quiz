// Script to patch Class 5 builder scripts so that their navbar, breadcrumb nav (with switch pills),
// hero banner (with dark gradient, badges & dual-track switcher), breadcrumb chips bar, and sidebar
// match Class 3 & Class 4 with 100% uniformity.

const fs = require('fs');
const path = require('path');

// 1. MATHS CONFIG
const mathsConfig = {
  file: 'build-c5-maths.js',
  outHtml: 'ncert-solutions-class-5-maths.html',
  subjectName: 'Mathematics',
  subjectShort: 'Maths',
  brandColor: '#2563eb',
  brandHover: '#1d4ed8',
  brandLight: '#eff6ff',
  brandText: '#1e40af',
  heroGradient: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
  heroTextColor: '#c7d2fe',
  pageTitle: 'NCERT Solutions for Class 5 Maths (Maths Mela & Math-Magic) CBSE 2026-27 | OlympiadQuiz',
  metaDesc: '100% Complete Class 5 NCERT Mathematics Solutions covering both textbooks: New NEP 2020 Maths Mela (15 Chapters) and Math-Magic (14 Chapters). Step-by-step model solutions, vector diagrams, CBSE marking rubrics, and NEP 2020 competency case studies.',
  keywords: 'ncert solutions class 5 maths, maths mela class 5 solutions, math magic class 5 ncert, cbse class 5 maths 2026-27, the fish tale, shapes and angles, how many squares, parts and wholes, tenths and hundredths, area and its boundary, smart charts',
  heroH1: 'Class 5 Maths — NCERT Solutions (CBSE 2026-27)',
  heroP: 'Complete <strong>100% textbook question coverage</strong> across all 29 chapters of Maths Mela (New NEP 2020 - 15 Ch) and Math-Magic (14 Ch) with step-by-step CBSE marking schemes, vector diagrams, and competency case studies.',
  badges: [
    '✅ All 29 Chapters (100% Questions)',
    '📘 Maths Mela (15 Ch) & 📙 Math-Magic (14 Ch)',
    '📐 Vector Visual Diagrams',
    '🔢 Step-by-Step Marking Schemes',
    '🎯 NEP 2020 Competency CBQs'
  ],
  book1: { key: 'mela', name: '📘 Maths Mela (New NCF 2023 - 15 Ch)', tabName: '📘 Maths Mela', prefix: 'ch_mela', firstId: 'ch_mela1', titleText: '📘 Maths Mela (15 Chapters)', chipLabel: '📐 Quick Jump To Chapter — Maths Mela (NEP 2020):', varChips: '${melaChips}', varSidebar: '${melaSidebar}', varSections: '${melaSections}' },
  book2: { key: 'magic', name: '📙 Math-Magic (Classic CBSE - 14 Ch)', tabName: '📙 Math-Magic', prefix: 'ch_magic', firstId: 'ch_magic1', titleText: '📙 Math-Magic (14 Chapters)', chipLabel: '📙 Quick Jump To Chapter — Math-Magic (Classic CBSE):', varChips: '${magicChips}', varSidebar: '${magicSidebar}', varSections: '${magicSections}' },
  activePill: 'maths'
};

// 2. ENGLISH CONFIG
const englishConfig = {
  file: 'build-c5-english.js',
  outHtml: 'ncert-solutions-class-5-english.html',
  subjectName: 'English',
  subjectShort: 'English',
  brandColor: '#0284c7',
  brandHover: '#0369a1',
  brandLight: '#f0f9ff',
  brandText: '#0369a1',
  heroGradient: 'linear-gradient(135deg, #0c4a6e 0%, #0f172a 100%)',
  heroTextColor: '#bae6fd',
  pageTitle: 'NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27 | OlympiadQuiz',
  metaDesc: '100% Complete Class 5 NCERT English Solutions covering both textbooks: New NEP 2020 Santoor (10 Chapters) and Marigold (10 Units). Reading comprehension, vocabulary, grammar, and CBSE marking rubrics.',
  keywords: 'ncert solutions class 5 english, santoor class 5 solutions, marigold class 5 ncert, cbse class 5 english 2026-27, ice cream man, teamwork, flying together, my shadow, robinson crusoe',
  heroH1: 'Class 5 English — NCERT Solutions (CBSE 2026-27)',
  heroP: 'Complete <strong>100% textbook question coverage</strong> across all 20 chapters of Santoor (New NEP 2020 - 10 Ch) and Marigold (10 Units) with reading comprehension, grammar drills, vocabulary worksheets, and CBSE step-by-step marking rubrics.',
  badges: [
    '✅ All 20 Chapters (100% Questions)',
    '📘 Santoor (10 Ch) & 📙 Marigold (10 Units)',
    '📖 Reading & Literature Analysis',
    '📝 Step-by-Step Marking Schemes',
    '🌟 NEP 2020 Competency Case Studies'
  ],
  book1: { key: 'santoor', name: '📘 Santoor (New NCF 2023 - 10 Ch)', tabName: '📘 Santoor', prefix: 'ch_s', firstId: 'ch_s1', titleText: '📘 Santoor (10 Chapters)', chipLabel: '📖 Quick Jump To Chapter — Santoor (NEP 2020):', varChips: '${santoorChips}', varSidebar: '${santoorSidebar}', varSections: '${santoorSections}' },
  book2: { key: 'marigold', name: '📙 Marigold (Classic CBSE - 10 Units)', tabName: '📙 Marigold', prefix: 'ch_m', firstId: 'ch_m1', titleText: '📙 Marigold (10 Units)', chipLabel: '📙 Quick Jump To Unit — Marigold (Classic CBSE):', varChips: '${marigoldChips}', varSidebar: '${marigoldSidebar}', varSections: '${marigoldSections}' },
  activePill: 'english'
};

// 3. HINDI CONFIG
const hindiConfig = {
  file: 'build-c5-hindi.js',
  outHtml: 'ncert-solutions-class-5-hindi.html',
  subjectName: 'Hindi',
  subjectShort: 'Hindi',
  brandColor: '#c2410c',
  brandHover: '#9a3412',
  brandLight: '#fff7ed',
  brandText: '#9a3412',
  heroGradient: 'linear-gradient(135deg, #78350f 0%, #0f172a 100%)',
  heroTextColor: '#fed7aa',
  pageTitle: 'NCERT Solutions for Class 5 Hindi (Veena & Rimjhim) CBSE 2026-27 | OlympiadQuiz',
  metaDesc: '100% Complete Class 5 NCERT Hindi Solutions covering both textbooks: New NEP 2020 Veena (12 Chapters) and Rimjhim (14 Chapters). Step-by-step model answers, word meanings, grammar, and CBSE marking schemes.',
  keywords: 'ncert solutions class 5 hindi, veena class 5 ncert, rimjhim class 5 solutions, cbse class 5 hindi 2026-27, kiran sohanlal dwivedi, rakh ki rassi, faslon ke tyohar, khilonewala, nanha fankar',
  heroH1: 'कक्षा 5 हिंदी — एनसीईआरटी समाधान (CBSE 2026-27)',
  heroP: 'संपूर्ण <strong>100% पाठ्यपुस्तक प्रश्न कवरेज</strong>: वीणा (नई शिक्षा नीति NEP 2020 - 12 पाठ) एवं रिमझिम (14 पाठ)। आदर्श उत्तर, विस्तृत भावार्थ, व्याकरण कार्यपत्रक, शब्द-संपदा एवं सीबीएसई चरणबद्ध अंक योजना।',
  badges: [
    '✅ सभी 26 पाठ (100% प्रश्न)',
    '📘 वीणा (12 पाठ) & 📙 रिमझिम (14 पाठ)',
    '📝 व्याकरण व शब्द-संपदा',
    '📋 सीबीएसई आधिकारिक अंक योजना',
    '🌟 NEP 2020 योग्यता केस स्टडी'
  ],
  book1: { key: 'veena', name: '📘 वीणा (नई शिक्षा नीति NEP 2020 - 12 पाठ)', tabName: '📘 वीणा', prefix: 'ch_v', firstId: 'ch_v1', titleText: '📘 वीणा (12 पाठ)', chipLabel: '📖 त्वरित पाठ चयन — वीणा (NEP 2020):', varChips: '${veenaChips}', varSidebar: '${veenaSidebar}', varSections: '${veenaSections}' },
  book2: { key: 'rimjhim', name: '📙 रिमझिम (क्लासिक सीबीएसई - 14 पाठ)', tabName: '📙 रिमझिम', prefix: 'ch_r', firstId: 'ch_r1', titleText: '📙 रिमझिम (14 पाठ)', chipLabel: '📙 त्वरित पाठ चयन — रिमझिम (क्लासिक सीबीएसई):', varChips: '${rimjhimChips}', varSidebar: '${rimjhimSidebar}', varSections: '${rimjhimSections}' },
  activePill: 'hindi'
};

// 4. EVS CONFIG
const evsConfig = {
  file: 'build-c5-evs.js',
  outHtml: 'ncert-solutions-class-5-evs.html',
  subjectName: 'EVS',
  subjectShort: 'EVS',
  brandColor: '#059669',
  brandHover: '#047857',
  brandLight: '#ecfdf5',
  brandText: '#065f46',
  heroGradient: 'linear-gradient(135deg, #064e3b 0%, #0f172a 100%)',
  heroTextColor: '#a7f3d0',
  pageTitle: 'NCERT Solutions for Class 5 EVS (Our Wondrous World & Looking Around) CBSE 2026-27 | OlympiadQuiz',
  metaDesc: '100% Complete Class 5 NCERT EVS Solutions covering both textbooks: New NEP 2020 Our Wondrous World (10 Chapters) and Looking Around (22 Chapters). Inquiry activities, maps, nature logs, and CBSE marking schemes.',
  keywords: 'ncert solutions class 5 evs, our wondrous world class 5 solutions, looking around class 5 ncert, cbse class 5 evs 2026-27, super senses, a snake charmer story, from tasting to digesting, mangoes round the year, seeds and seeds, every drop counts',
  heroH1: 'Class 5 EVS — NCERT Solutions (CBSE 2026-27)',
  heroP: 'Complete <strong>100% textbook question coverage</strong> across all 32 chapters of Our Wondrous World (New NEP 2020 - 10 Ch) and Looking Around (22 Ch). Environmental inquiry, nature journals, diagrams, and CBSE step-by-step marking rubrics.',
  badges: [
    '✅ All 32 Chapters (100% Questions)',
    '📘 Our Wondrous World (10 Ch) & 📙 Looking Around (22 Ch)',
    '🌿 Environmental Inquiry & Field Studies',
    '📋 Official CBSE Marking Schemes',
    '🌟 NEP 2020 Competency Case Studies'
  ],
  book1: { key: 'wondrous', name: '📘 Our Wondrous World (New NCF 2023 - 10 Ch)', tabName: '📘 Our Wondrous World', prefix: 'ch_oww', firstId: 'ch_oww1', titleText: '📘 Our Wondrous World (10 Chapters)', chipLabel: '🌿 Quick Jump To Chapter — Our Wondrous World (NEP 2020):', varChips: '${wondrousChips}', varSidebar: '${wondrousSidebar}', varSections: '${wondrousSections}' },
  book2: { key: 'looking', name: '📙 Looking Around (Classic CBSE - 22 Ch)', tabName: '📙 Looking Around', prefix: 'ch_la_', firstId: 'ch_la_1', titleText: '📙 Looking Around (22 Chapters)', chipLabel: '📙 Quick Jump To Chapter — Looking Around (Classic CBSE):', varChips: '${lookingChips}', varSidebar: '${lookingSidebar}', varSections: '${lookingSections}' },
  activePill: 'evs'
};

function generatePart3(cfg) {
  const capB1 = cfg.book1.key.charAt(0).toUpperCase() + cfg.book1.key.slice(1);
  const capB2 = cfg.book2.key.charAt(0).toUpperCase() + cfg.book2.key.slice(1);

  return `// -------------------------------------------------------------
// PART 3: FULL HTML DOCUMENT
// -------------------------------------------------------------

const htmlContent = \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cfg.pageTitle}</title>
  <meta name="description" content="${cfg.metaDesc}">
  <meta name="keywords" content="${cfg.keywords}">
  <link rel="canonical" href="https://olympiadquiz.org/${cfg.outHtml}">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/${cfg.outHtml}">
  <meta property="og:title" content="${cfg.pageTitle}">
  <meta property="og:description" content="${cfg.metaDesc}">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="${cfg.pageTitle}">
  <meta name="twitter:description" content="${cfg.metaDesc}">
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
      { "@type": "ListItem", "position": 3, "name": "Class 5", "item": "https://olympiadquiz.org/ncert-solutions-class-5.html" },
      { "@type": "ListItem", "position": 4, "name": "${cfg.subjectName}", "item": "https://olympiadquiz.org/${cfg.outHtml}" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "${cfg.pageTitle}",
    "description": "${cfg.metaDesc}",
    "educationalLevel": "CBSE Class 5",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "en",
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
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --brand: ${cfg.brandColor};
      --brand-hover: ${cfg.brandHover};
      --brand-light: ${cfg.brandLight};
      --brand-text: ${cfg.brandText};
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
    .logo-text span { color: #818cf8; }
    .navbar-links { display: flex; align-items: center; gap: 8px; }
    .nav-link { color: #94a3b8; font-size: 0.85rem; font-weight: 600; padding: 6px 12px; border-radius: 8px; text-decoration: none; transition: 0.2s; display: flex; align-items: center; gap: 4px; }
    .nav-link:hover { color: white; background: rgba(255,255,255,0.06); }
    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: white; border: 1px solid #e2e8f0; border-radius: 10px; min-width: 250px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); z-index: 1000; padding: 6px; }
    .nav-dropdown-content a { display: block; padding: 8px 14px; color: #334155; text-decoration: none; font-size: 0.85rem; border-radius: 6px; transition: 0.2s; }
    .nav-dropdown-content a:hover { background: #f1f5f9; color: #0f172a !important; }
    .navbar-actions { display: flex; align-items: center; gap: 10px; }
    .btn-login { background: #2563eb; color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; }
    .btn-login:hover { background: #1d4ed8; }
    .navbar-toggle { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 6px; }
    .navbar-toggle span { display: block; width: 22px; height: 2px; background: white; border-radius: 2px; }

    /* NCERT Breadcrumb & Switcher */
    .ncert-breadcrumb-nav { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 10px 24px; position: relative; z-index: 100; box-shadow: 0 1px 3px rgba(0,0,0,0.03); }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
    .ncert-bc-list { display: flex; align-items: center; gap: 8px; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #64748b; flex-wrap: wrap; }
    .ncert-bc-list a { color: #0f172a; text-decoration: none; font-weight: 600; transition: color 0.15s ease; }
    .ncert-bc-list a:hover { color: var(--brand); text-decoration: underline; }
    .ncert-bc-sep { color: #cbd5e1; font-size: 0.75rem; }
    .ncert-bc-current { color: var(--brand); font-weight: 700; }
    .ncert-bc-switch { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .ncert-bc-switch-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-right: 4px; }
    .ncert-bc-pill { font-size: 0.78rem; font-weight: 700; padding: 5px 12px; border-radius: 999px; text-decoration: none; background: #f1f5f9; color: #334155; border: 1px solid #e2e8f0; transition: all 0.18s ease; white-space: nowrap; }
    .ncert-bc-pill:hover { background: var(--brand-light); color: var(--brand-text); border-color: var(--brand); transform: translateY(-1px); }
    .ncert-bc-pill.active { background: var(--brand); color: #ffffff; border-color: var(--brand); box-shadow: 0 2px 6px rgba(0,0,0,0.25); }

    /* Hero Banner */
    .hero-banner { background: ${cfg.heroGradient}; color: white; padding: 40px 24px; text-align: center; border-bottom: 3px solid var(--brand); }
    .hero-banner h1 { font-size: 2rem; font-weight: 800; margin-bottom: 10px; letter-spacing: -0.02em; }
    .hero-banner p { color: ${cfg.heroTextColor}; font-size: 0.98rem; max-width: 780px; margin: 0 auto 18px; line-height: 1.65; }
    .hero-badges { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
    .hero-badge { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); padding: 6px 14px; border-radius: 20px; font-size: .8rem; font-weight: 600; color: #e2e8f0; }

    /* Track / Book Switcher in Hero */
    .book-toggle-bar { display: inline-flex; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 4px; gap: 4px; margin-top: 14px; }
    .track-btn { border: none; background: transparent; color: #e2e8f0; padding: 8px 18px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 6px; }
    .track-btn.active { background: var(--brand); color: #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.25); }

    /* Breadcrumb Chips Bar */
    .breadcrumb-bar { background: white; border-bottom: 1px solid var(--border); padding: 14px 32px; position: sticky; top: 60px; z-index: 800; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    .breadcrumb-label { font-size: .72rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .06em; margin-bottom: 10px; }
    .breadcrumb-chips { display: flex; gap: 6px; flex-wrap: wrap; }
    .bc-chip { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 20px; font-size: .78rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border); background: #f8fafc; color: var(--slate); transition: all .18s; user-select: none; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-text); background: var(--brand-light); }
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(0,0,0,.25); }
    .bc-chip .bc-n { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; background: rgba(0,0,0,.12); border-radius: 50%; font-size: .68rem; font-weight: 800; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,.25); }

    /* Main Layout */
    .main-layout { display: flex; max-width: 1400px; margin: 0 auto; }
    .sidebar { width: 310px; background: white; border-right: 1px solid var(--border); padding: 20px 16px; position: sticky; top: 117px; height: calc(100vh - 117px); overflow-y: auto; flex-shrink: 0; }
    .sidebar-title { font-size: .85rem; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: .05em; margin-bottom: 12px; }
    .search-box { width: 100%; padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px; font-size: .85rem; margin-bottom: 16px; font-family: inherit; }
    .search-box:focus { outline: none; border-color: var(--brand); }
    .chapter-nav { list-style: none; }
    .chapter-nav li { margin-bottom: 4px; }
    .chapter-nav li a { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; color: var(--slate); text-decoration: none; font-size: .84rem; font-weight: 500; transition: all .15s; cursor: pointer; }
    .chapter-nav li a:hover { background: var(--brand-light); color: var(--brand-text); }
    .chapter-nav li a.active { background: var(--brand); color: white; font-weight: 600; }
    .ch-num { width: 22px; height: 22px; background: rgba(0,0,0,.06); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .75rem; font-weight: 700; flex-shrink: 0; }
    .chapter-nav li a.active .ch-num { background: rgba(255,255,255,.25); color: white; }
    .ch-meta { display: flex; flex-direction: column; min-width: 0; }
    .ch-name { font-weight: 600; font-size: 0.83rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .ch-sub { font-size: 0.72rem; opacity: 0.75; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    .main-content { flex: 1; padding: 0 36px 36px; min-width: 0; }
    .chapter-section { display: none; margin-bottom: 48px; scroll-margin-top: 130px; padding-top: 28px; }
    .chapter-section.active { display: block; animation: fadeIn .25s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    .chapter-header { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 2px solid var(--border); }
    .ch-badge { width: 44px; height: 44px; background: var(--brand); color: white; border-radius: 12px; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
    .chapter-header-info .ch-category { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--brand); letter-spacing: 0.05em; margin-bottom: 2px; }
    .chapter-header-info h2 { font-size: 1.45rem; font-weight: 800; color: var(--navy); }
    .chapter-header-info p { font-size: .825rem; color: var(--muted); margin-top: 2px; }

    /* Concept Card */
    .concept-card { background: white; border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: var(--shadow); }
    .concept-header { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.95rem; color: var(--brand); margin-bottom: 12px; }
    .concept-list { list-style: none; }
    .concept-list li { position: relative; padding-left: 20px; margin-bottom: 8px; font-size: 0.88rem; color: var(--slate); line-height: 1.5; }
    .concept-list li::before { content: "•"; position: absolute; left: 6px; color: var(--brand); font-weight: 900; }
    .svg-diagram-wrapper { background: #ffffff; border: 1px solid var(--border); border-radius: 8px; padding: 12px; text-align: center; overflow-x: auto; }

    /* Exercise Section Title */
    .ex-div { font-size: 1.02rem; font-weight: 800; color: var(--navy); padding: 12px 18px; background: var(--brand-light); border-radius: 10px; margin: 28px 0 18px; border-left: 4px solid var(--brand); letter-spacing: -0.01em; display: flex; align-items: center; gap: 8px; }

    /* Question Cards */
    .questions-container { display: flex; flex-direction: column; gap: 14px; }
    .q-card { background: white; border: 1.5px solid var(--border); border-radius: 14px; margin-bottom: 16px; overflow: hidden; box-shadow: var(--shadow); transition: all .2s; }
    .q-card:hover { border-color: #cbd5e1; box-shadow: var(--shadow-hover); }
    .q-head { display: flex; align-items: center; gap: 14px; padding: 16px 20px; cursor: pointer; user-select: none; flex-wrap: wrap; background: #ffffff; }
    .q-head:hover { background: #fafafa; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-weight: 800; font-size: .82rem; padding: 4px 10px; border-radius: 6px; flex-shrink: 0; }
    .q-text { font-size: .98rem; font-weight: 700; color: var(--navy); flex: 1; min-width: 220px; line-height: 1.55; }
    .q-cat { font-size: .74rem; font-weight: 700; color: var(--brand-text); background: var(--brand-light); border: 1px solid var(--border); padding: 3px 10px; border-radius: 4px; white-space: nowrap; flex-shrink: 0; }
    .q-marks { font-size: .74rem; font-weight: 700; color: #047857; background: #ecfdf5; padding: 3px 10px; border-radius: 4px; border: 1px solid #a7f3d0; flex-shrink: 0; }
    .q-toggle { width: 22px; height: 22px; color: var(--slate); transition: transform .2s; flex-shrink: 0; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: var(--brand); }
    .q-answer { display: none; padding: 0 20px 20px; border-top: 1px dashed var(--border); background: #fdfdfd; }
    .q-card.open .q-answer { display: block; }

    .answer-box { padding-top: 16px; }
    .answer-label { font-size: .8rem; font-weight: 800; text-transform: uppercase; color: var(--brand); margin-bottom: 8px; letter-spacing: .04em; }
    .answer-text { font-size: .95rem; color: #1e293b; line-height: 1.8; }
    .answer-text ul, .answer-text ol { margin: 8px 0 8px 22px; }
    .answer-text li { margin-bottom: 6px; }
    .answer-text strong { color: #0f172a; }

    /* Marking Scheme */
    .marking-scheme { margin-top: 16px; background: var(--brand-light); border: 1px solid var(--border); border-radius: 8px; padding: 12px 16px; font-size: .82rem; }
    .marking-title { font-weight: 800; color: var(--brand-text); margin-bottom: 8px; text-transform: uppercase; font-size: 0.76rem; letter-spacing: 0.04em; }
    .marking-row { display: flex; justify-content: space-between; border-bottom: 1px solid rgba(0,0,0,0.06); padding: 5px 0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); font-weight: 500; }
    .marking-marks { font-weight: 700; color: var(--brand-text); }

    /* CBQ Card */
    .cbq-card { border: 1.5px solid var(--border); border-radius: 12px; padding: 22px; background: #ffffff; margin-top: 24px; box-shadow: var(--shadow); }
    .cbq-badge { display: inline-block; background: var(--brand-light); color: var(--brand-text); border: 1px solid var(--border); border-radius: 6px; padding: 3px 10px; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; }

    /* Navigation buttons */
    .ch-nav-btns { display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border); gap: 12px; flex-wrap: wrap; }
    .ch-nav-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 8px; font-weight: 700; font-size: .88rem; cursor: pointer; border: 1.5px solid var(--border); background: white; color: var(--slate); transition: all .2s; font-family: inherit; text-decoration: none; }
    .ch-nav-btn:hover:not(:disabled) { background: var(--brand); color: white; border-color: var(--brand); }
    .ch-nav-btn:disabled { opacity: .35; cursor: not-allowed; }
    .ch-nav-btn.next { background: var(--brand); color: white; border-color: var(--brand); }

    .mob-toggle { display: none; position: fixed; bottom: 20px; right: 20px; background: var(--brand); color: white; border: none; padding: 12px 20px; border-radius: 30px; font-weight: 700; font-size: .9rem; box-shadow: 0 4px 14px rgba(0,0,0,.25); z-index: 999; cursor: pointer; }
    .sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 950; }

    .sidebar-book-tabs { display: flex; gap: 4px; background: #f1f5f9; padding: 4px; border-radius: 10px; margin-bottom: 12px; }
    .sb-tab { flex: 1; border: none; background: transparent; padding: 7px 6px; font-size: 0.74rem; font-weight: 700; color: var(--slate); border-radius: 8px; cursor: pointer; transition: all 0.18s ease; font-family: inherit; }
    .sb-tab.active { background: white; color: var(--brand); box-shadow: 0 1px 4px rgba(0,0,0,0.08); }

    @media (max-width: 900px) {
      .main-layout { flex-direction: column; }
      .sidebar { position: fixed; left: -330px; top: 0; height: 100vh; z-index: 960; transition: left .3s; }
      .sidebar.open { left: 0; }
      .sidebar-overlay.show { display: block; }
      .mob-toggle { display: block; }
      .main-content { padding: 0 16px 28px; }
      .breadcrumb-bar { padding: 12px 16px; top: 57px; }
    }

    /* Footer */
    .site-footer { background: #0f172a; color: #94a3b8; padding: 40px 24px; text-align: center; font-size: 0.85rem; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 48px; }
    .site-footer a { color: #38bdf8; text-decoration: none; font-weight: 600; }
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
            <a href="ncert-solutions-class-5-maths.html" style="${cfg.activePill === 'maths' ? 'font-weight:700;color:#2563eb;background:#eff6ff;' : ''}">Class 5 Maths</a>
            <a href="ncert-solutions-class-5-english.html" style="${cfg.activePill === 'english' ? 'font-weight:700;color:#0284c7;background:#f0f9ff;' : ''}">Class 5 English</a>
            <a href="ncert-solutions-class-5-hindi.html" style="${cfg.activePill === 'hindi' ? 'font-weight:700;color:#c2410c;background:#fff7ed;' : ''}">Class 5 Hindi</a>
            <a href="ncert-solutions-class-5-evs.html" style="${cfg.activePill === 'evs' ? 'font-weight:700;color:#059669;background:#ecfdf5;' : ''}">Class 5 EVS</a>
            <a href="ncert-solutions-class-4-maths.html">Class 4 Solutions</a>
            <a href="ncert-solutions-class-3-maths.html">Class 3 Solutions</a>
          </div>
        </div>
        <a href="blog.html" class="nav-link">Guides &amp; Blog</a>
      </div>
      <div class="navbar-actions">
        <a href="login.html" class="btn-login">Login</a>
        <button class="navbar-toggle" id="mobile-menu-toggle" aria-label="Toggle Menu" onclick="toggleMobileNav()">
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
        <li><a href="ncert-solutions-class-5.html">Class 5</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">${cfg.subjectName}</li>
      </ol>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-5-maths.html" class="ncert-bc-pill${cfg.activePill === 'maths' ? ' active' : ''}">Maths</a>
        <a href="ncert-solutions-class-5-english.html" class="ncert-bc-pill${cfg.activePill === 'english' ? ' active' : ''}">English</a>
        <a href="ncert-solutions-class-5-hindi.html" class="ncert-bc-pill${cfg.activePill === 'hindi' ? ' active' : ''}">Hindi</a>
        <a href="ncert-solutions-class-5-evs.html" class="ncert-bc-pill${cfg.activePill === 'evs' ? ' active' : ''}">EVS</a>
      </div>
    </div>
  </nav>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <h1>${cfg.heroH1}</h1>
    <p>${cfg.heroP}</p>
    <div class="hero-badges">
      ${cfg.badges.map(b => `<span class="hero-badge">${b}</span>`).join('\n      ')}
    </div>
    
    <!-- Track Switcher -->
    <div class="book-toggle-bar">
      <button id="btn${capB1}" class="track-btn active" onclick="switchBook('${cfg.book1.key}')">
        ${cfg.book1.name}
      </button>
      <button id="btn${capB2}" class="track-btn" onclick="switchBook('${cfg.book2.key}')">
        ${cfg.book2.name}
      </button>
    </div>
  </header>

  <!-- Sticky Chapter Chips Bar -->
  <div class="breadcrumb-bar">
    <div class="breadcrumb-label" id="chipBarLabel">${cfg.book1.chipLabel}</div>
    <div class="breadcrumb-chips" id="chips${capB1}">
      ${cfg.book1.varChips}
    </div>
    <div class="breadcrumb-chips" id="chips${capB2}" style="display:none;">
      ${cfg.book2.varChips}
    </div>
  </div>

  <!-- Main Layout -->
  <div class="main-layout">
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-title" id="sidebarTitleText">${cfg.book1.titleText}</div>
      <div class="sidebar-book-tabs">
        <button id="sbTab${capB1}" class="sb-tab active" onclick="switchBook('${cfg.book1.key}')">${cfg.book1.tabName}</button>
        <button id="sbTab${capB2}" class="sb-tab" onclick="switchBook('${cfg.book2.key}')">${cfg.book2.tabName}</button>
      </div>
      <input type="text" class="search-box" placeholder="Search chapters..." onkeyup="filterChapters(this.value)">
      <ul class="chapter-nav" id="nav${capB1}">
        ${cfg.book1.varSidebar}
      </ul>
      <ul class="chapter-nav" id="nav${capB2}" style="display:none;">
        ${cfg.book2.varSidebar}
      </ul>
    </aside>

    <main class="main-content">
      ${cfg.book1.varSections}
      ${cfg.book2.varSections}
    </main>
  </div>

  <button class="mob-toggle" onclick="toggleSidebar()">☰ Chapters</button>

  <!-- Footer -->
  <footer class="site-footer">
    <div style="max-width:1200px;margin:0 auto;">
      <p style="margin-bottom:8px;">© 2026-27 OlympiadQuiz. All official NCERT textbook questions and solutions are strictly aligned with CBSE curriculum guidelines.</p>
      <p><a href="index.html">Home</a> • <a href="ncert-solutions.html">NCERT Solutions Directory</a> • <a href="ncert-solutions-class-5.html">Class 5 Hub</a> • <a href="privacy-policy.html">Privacy</a></p>
    </div>
  </footer>

  <script>
    let currentBook = '${cfg.book1.key}';

    function switchBook(book) {
      currentBook = book;
      const isB1 = (book === '${cfg.book1.key}');

      // Toggle Hero Track Buttons
      document.getElementById('btn${capB1}').classList.toggle('active', isB1);
      document.getElementById('btn${capB2}').classList.toggle('active', !isB1);

      // Toggle Sidebar Book Tabs
      const sb1 = document.getElementById('sbTab${capB1}');
      const sb2 = document.getElementById('sbTab${capB2}');
      if (sb1) sb1.classList.toggle('active', isB1);
      if (sb2) sb2.classList.toggle('active', !isB1);

      // Toggle Sidebar Nav Lists
      const nav1 = document.getElementById('nav${capB1}');
      const nav2 = document.getElementById('nav${capB2}');
      if (nav1) nav1.style.display = isB1 ? 'block' : 'none';
      if (nav2) nav2.style.display = isB1 ? 'none' : 'block';

      // Toggle Breadcrumb Chips
      document.getElementById('chips${capB1}').style.display = isB1 ? 'flex' : 'none';
      document.getElementById('chips${capB2}').style.display = isB1 ? 'none' : 'flex';

      // Update Label
      document.getElementById('chipBarLabel').innerText = isB1
        ? '${cfg.book1.chipLabel}'
        : '${cfg.book2.chipLabel}';

      const sbTitle = document.getElementById('sidebarTitleText');
      if (sbTitle) {
        sbTitle.innerText = isB1 ? '${cfg.book1.titleText}' : '${cfg.book2.titleText}';
      }

      // Show First Chapter of Selected Book
      const firstId = isB1 ? '${cfg.book1.firstId}' : '${cfg.book2.firstId}';
      showChapter(firstId, true);
    }

    function showChapter(targetId, updateHistory = true) {
      if (!targetId) return;

      // Ensure correct book tab is active
      const isB2 = targetId.startsWith('${cfg.book2.prefix}');
      const neededBook = isB2 ? '${cfg.book2.key}' : '${cfg.book1.key}';
      if (currentBook !== neededBook) {
        currentBook = neededBook;
        document.getElementById('btn${capB1}').classList.toggle('active', !isB2);
        document.getElementById('btn${capB2}').classList.toggle('active', isB2);

        const sb1 = document.getElementById('sbTab${capB1}');
        const sb2 = document.getElementById('sbTab${capB2}');
        if (sb1) sb1.classList.toggle('active', !isB2);
        if (sb2) sb2.classList.toggle('active', isB2);

        const nav1 = document.getElementById('nav${capB1}');
        const nav2 = document.getElementById('nav${capB2}');
        if (nav1) nav1.style.display = !isB2 ? 'block' : 'none';
        if (nav2) nav2.style.display = isB2 ? 'block' : 'none';

        document.getElementById('chips${capB1}').style.display = !isB2 ? 'flex' : 'none';
        document.getElementById('chips${capB2}').style.display = isB2 ? 'flex' : 'none';

        document.getElementById('chipBarLabel').innerText = isB2
          ? '${cfg.book2.chipLabel}'
          : '${cfg.book1.chipLabel}';

        const sbTitle = document.getElementById('sidebarTitleText');
        if (sbTitle) {
          sbTitle.innerText = isB2 ? '${cfg.book2.titleText}' : '${cfg.book1.titleText}';
        }
      }

      // Hide all chapters, show target
      document.querySelectorAll('.chapter-section').forEach(sec => sec.classList.remove('active'));
      const targetSec = document.getElementById(targetId);
      if (targetSec) {
        targetSec.classList.add('active');
      }

      // Toggle active chip
      document.querySelectorAll('.bc-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-target') === targetId);
      });

      // Toggle active sidebar items
      document.querySelectorAll('.chapter-nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-target') === targetId);
      });

      // Close mobile drawer if open
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('show');

      // Scroll active chip into view
      const activeChip = document.querySelector('.bc-chip[data-target="' + targetId + '"]');
      if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      // Update hash
      if (updateHistory) {
        history.replaceState(null, null, '#' + targetId);
      }

      // Smooth scroll to content top
      const bc = document.querySelector('.breadcrumb-bar');
      if (bc) {
        const topOffset = bc.getBoundingClientRect().bottom + window.pageYOffset;
        window.scrollTo({ top: topOffset - 75, behavior: 'smooth' });
      }
    }

    function toggleQ(qId) {
      const card = document.getElementById(qId);
      if (card) {
        card.classList.toggle('open');
      }
    }

    function filterChapters(query) {
      const q = query.toLowerCase().trim();
      const activeNavId = (currentBook === '${cfg.book1.key}') ? 'nav${capB1}' : 'nav${capB2}';
      document.querySelectorAll('#' + activeNavId + ' li').forEach(li => {
        const text = li.innerText.toLowerCase();
        li.style.display = text.includes(q) ? 'block' : 'none';
      });
    }

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('sidebarOverlay').classList.toggle('show');
    }

    function toggleMobileNav() {
      const navLinks = document.getElementById('navLinks');
      if (navLinks) navLinks.classList.toggle('active');
    }

    // Scroll reading progress
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const prog = document.getElementById('progressBar');
      if (prog) prog.style.width = scrolled + '%';
    });

    // Handle hash on initial load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('${cfg.book2.prefix}')) {
          switchBook('${cfg.book2.key}');
          showChapter(hash, false);
          return;
        } else if (hash.startsWith('${cfg.book1.prefix}')) {
          switchBook('${cfg.book1.key}');
          showChapter(hash, false);
          return;
        }
      }
      showChapter('${cfg.book1.firstId}', false);
    });
  </script>
</body>
</html>\`;

const outputPath = path.resolve(__dirname, '../${cfg.outHtml}');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(\`✅ Successfully generated ${cfg.outHtml} (\${htmlContent.length} bytes)!\`);
`;
}

function patchBuilder(cfg) {
  const filePath = path.resolve(__dirname, cfg.file);
  const src = fs.readFileSync(filePath, 'utf8');
  
  // Cut at // PART 3: FULL HTML DOCUMENT
  const marker = '// PART 3: FULL HTML DOCUMENT';
  const markerIdx = src.indexOf(marker);
  if (markerIdx === -1) {
    console.error(`Marker not found in ${cfg.file}`);
    return;
  }
  
  const part1And2 = src.substring(0, markerIdx);
  const part3 = generatePart3(cfg);
  const updatedSrc = part1And2 + part3;
  
  fs.writeFileSync(filePath, updatedSrc, 'utf8');
  console.log(`✅ Patched ${cfg.file} with uniform Class 3/4 design!`);
}

// Execute patches
patchBuilder(mathsConfig);
patchBuilder(englishConfig);
patchBuilder(hindiConfig);
patchBuilder(evsConfig);
console.log("ALL CLASS 5 BUILDERS PATCHED SUCCESSFULLY!");
