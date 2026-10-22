// Generator for NCERT Class 3 EVS Solutions (100% Question Coverage: Our Wondrous World + Looking Around)
// Fully Aligned with Official NCERT Curriculum (New NEP 2020 Wondrous World + Classic CBSE Looking Around)
const fs = require('fs');
const path = require('path');

const { wondrousWorldChapters } = require('./data-c3-evs/wondrousWorldData.js');
const { lookingAroundChapters } = require('./data-c3-evs/lookingAroundData.js');

console.log("=== BUILDING NCERT CLASS 3 EVS SOLUTIONS (WONDROUS WORLD + LOOKING AROUND) ===");
console.log(`Loaded ${wondrousWorldChapters.length} Wondrous World Chapters and ${lookingAroundChapters.length} Looking Around Chapters`);

// -------------------------------------------------------------
// PART 1: RENDERING FUNCTIONS
// -------------------------------------------------------------

function renderQuestionCard(qObj, idx, prefix) {
  const qId = `q_${prefix}_${idx}`;
  const rubricRows = qObj.rubric.map(r => `
    <div class="marking-row">
      <span class="marking-key">${r.key}</span>
      <span class="marking-marks">${r.marks}</span>
    </div>
  `).join('');

  return `
  <div class="q-card" id="${qId}">
    <div class="q-head" onclick="toggleQ('${qId}')">
      <span class="q-num">Q${idx + 1}</span>
      <span class="q-text">${qObj.q}</span>
      ${qObj.category ? `<span class="q-cat">${qObj.category}</span>` : ''}
      <span class="q-marks">${qObj.marks} Marks</span>
      <svg class="q-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">Model Answer &amp; Step-by-Step Explanation:</div>
        <div class="answer-text">${qObj.ans}</div>
        <div class="marking-scheme">
          <div class="marking-title">📋 CBSE Official Step Marking Rubric (${qObj.marks} Marks):</div>
          ${rubricRows}
        </div>
      </div>
    </div>
  </div>`;
}

function renderChapterSection(ch, bookKey) {
  const prefix = `${bookKey}_${ch.num || ch.id}`;
  const conceptsHtml = ch.concepts.map(c => `<li>${c}</li>`).join('');
  const questionsHtml = ch.questions.map((q, idx) => renderQuestionCard(q, idx, prefix)).join('');

  return `
  <section class="chapter-section" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <span class="unit-tag">${ch.unit}</span>
        <h2>Chapter ${ch.num}: ${ch.title}</h2>
        <p>${ch.subtitle}</p>
      </div>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Scientific Principles, Environmental Values &amp; Key Inquiries</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>
    </div>

    <!-- Complete Exercise Questions & Solutions -->
    <div class="ex-div">📖 NCERT Textbook Exercise Solutions &amp; Inquiry Tasks (100% Coverage)</div>
    <div class="questions-container">
      ${questionsHtml}
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #059669;"><strong>Real-Life Context:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Analytical Task:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #a7f3d0;font-size:0.8rem;font-weight:700;color:#047857;">CBSE Assessment Rubric: ${ch.cbq.rubric}</div>
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const wondrousWorldSections = wondrousWorldChapters.map(ch => renderChapterSection(ch, "ww")).join('\n');
const lookingAroundSections = lookingAroundChapters.map(ch => renderChapterSection(ch, "la")).join('\n');

const wondrousWorldChips = wondrousWorldChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </button>
`).join('');

const lookingAroundChips = lookingAroundChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('!')[0].trim()}
  </button>
`).join('');

const wondrousWorldSidebar = wondrousWorldChapters.map(ch => `
  <li>
    <a href="javascript:void(0)" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit}</span>
      </div>
    </a>
  </li>
`).join('');

const lookingAroundSidebar = lookingAroundChapters.map(ch => `
  <li>
    <a href="javascript:void(0)" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit}</span>
      </div>
    </a>
  </li>
`).join('');

// -------------------------------------------------------------
// PART 3: FULL HTML DOCUMENT
// -------------------------------------------------------------

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 3 EVS (Our Wondrous World &amp; Looking Around) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Complete Class 3 NCERT EVS (Environmental Studies) Solutions covering both textbooks: New NEP 2020 Our Wondrous World (12 Chapters) and Classic CBSE Looking Around (24 Chapters). Step-by-step answers, diagrams, CBSE rubrics, and CBQs.">
  <meta name="keywords" content="ncert solutions class 3 evs, class 3 looking around solutions, our wondrous world class 3 ncert, cbse class 3 evs 2026-27, poonam's day out, plant fairy, water o water, our first school, chhotu's house, foods we eat, saying without speaking, flying high, web of life, drop by drop">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-3-evs.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-3-evs.html">
  <meta property="og:title" content="NCERT Solutions for Class 3 EVS (Our Wondrous World &amp; Looking Around) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% complete textbook question coverage for Class 3 EVS across all 36 chapters of Our Wondrous World and Looking Around with CBSE rubrics and competency case studies.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 3 EVS (Our Wondrous World &amp; Looking Around) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook solutions for Class 3 EVS across Our Wondrous World and Looking Around with environmental diagrams, experiments, and case studies.">
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
      { "@type": "ListItem", "position": 3, "name": "Class 3", "item": "https://olympiadquiz.org/ncert-solutions-class-3.html" },
      { "@type": "ListItem", "position": 4, "name": "EVS", "item": "https://olympiadquiz.org/ncert-solutions-class-3-evs.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 3 EVS (Our Wondrous World & Looking Around)",
    "description": "Comprehensive textbook solutions, environmental diagrams, step-by-step explanations, and competency case studies for CBSE Class 3 EVS 2026-27.",
    "educationalLevel": "Grade 3 / Class 3",
    "learningResourceType": "Textbook Solutions and Assessment Rubrics",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org"
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
        "name": "Are both New NCF 2023 'Our Wondrous World' and classic CBSE 'Looking Around' covered for Class 3 EVS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, OlympiadQuiz provides complete 100% textbook question coverage for both textbooks: New NEP 2020 'Our Wondrous World' (12 Chapters) and Classic CBSE 'Looking Around / आस-पास' (24 Chapters), totaling 36 comprehensive chapters."
        }
      },
      {
        "@type": "Question",
        "name": "Does every chapter include CBSE official marking schemes and rubrics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every question features step-by-step model answers paired with official CBSE step-marking rubrics showing exactly how marks are awarded in school examinations."
        }
      },
      {
        "@type": "Question",
        "name": "Are NEP 2020 Competency-Based Case Studies (CBQs) included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, each chapter concludes with a real-life contextual Competency-Based Question (CBQ) aligned with NEP 2020 to foster critical thinking, environmental ethics, and problem-solving skills."
        }
      }
    ]
  }
  </script>

  <style>
    :root {
      --primary: #059669;
      --primary-dark: #047857;
      --primary-light: #ecfdf5;
      --secondary: #0284c7;
      --secondary-light: #e0f2fe;
      --navy-900: #0f172a;
      --slate-800: #1e293b;
      --slate-600: #475569;
      --slate-100: #f1f5f9;
      --slate-50: #f8fafc;
      --border-color: #e2e8f0;
      --card-bg: #ffffff;
      --font-main: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-main);
      background-color: #f8fafc;
      color: #1e293b;
      line-height: 1.6;
    }

    /* Reading Progress Bar */
    .reading-progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 4px;
      background: linear-gradient(90deg, #059669, #0284c7);
      z-index: 9999;
      transition: width 0.1s ease;
    }

    /* Top Nav */
    .site-header {
      background: #0f172a;
      color: #ffffff;
      padding: 14px 24px;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .header-inner {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #ffffff;
      font-weight: 800;
      font-size: 1.25rem;
    }
    .brand-badge {
      background: #059669;
      color: #ffffff;
      font-size: 0.72rem;
      padding: 2px 8px;
      border-radius: 6px;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .top-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .top-links a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 600;
      transition: color 0.2s;
    }
    .top-links a:hover, .top-links a.active {
      color: #6ee7b7;
    }

    /* Breadcrumbs */
    .breadcrumb-bar {
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 10px 24px;
      font-size: 0.85rem;
    }
    .breadcrumb-inner {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #64748b;
    }
    .breadcrumb-inner a {
      color: #64748b;
      text-decoration: none;
      transition: color 0.2s;
    }
    .breadcrumb-inner a:hover { color: #059669; }
    .breadcrumb-inner .sep { color: #cbd5e1; }
    .breadcrumb-inner .cur { color: #0f172a; font-weight: 700; }

    /* Hero Banner */
    .hero-banner {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #ffffff;
      padding: 44px 24px 36px;
      border-bottom: 4px solid #059669;
    }
    .hero-inner {
      max-width: 1240px;
      margin: 0 auto;
    }
    .hero-badge {
      display: inline-block;
      background: rgba(5, 150, 105, 0.25);
      border: 1px solid #059669;
      color: #6ee7b7;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 9999px;
      margin-bottom: 12px;
    }
    .hero-title {
      font-size: 2.1rem;
      font-weight: 900;
      line-height: 1.25;
      margin-bottom: 12px;
    }
    .hero-desc {
      font-size: 1rem;
      color: #cbd5e1;
      max-width: 820px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    /* Track Switcher */
    .book-toggle-bar {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }
    .track-btn {
      background: rgba(255, 255, 255, 0.1);
      color: #e2e8f0;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 10px 22px;
      border-radius: 10px;
      cursor: pointer;
      font-weight: 700;
      font-size: 0.95rem;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .track-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: #6ee7b7;
    }
    .track-btn.active {
      background: #059669;
      color: #ffffff;
      border-color: #059669;
      box-shadow: 0 4px 14px rgba(5, 150, 105, 0.4);
    }

    /* Sticky Chapter Chips Bar */
    .chip-bar {
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 12px 24px;
      position: sticky;
      top: 56px;
      z-index: 990;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .chip-bar-inner {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 12px;
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: thin;
      padding-bottom: 4px;
    }
    .chip-label {
      font-size: 0.8rem;
      font-weight: 800;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      flex-shrink: 0;
    }
    .chips-wrapper {
      display: flex;
      gap: 8px;
    }
    .bc-chip {
      background: #f1f5f9;
      color: #334155;
      border: 1px solid #e2e8f0;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }
    .bc-chip:hover {
      background: #e2e8f0;
      color: #0f172a;
    }
    .bc-chip.active {
      background: #059669;
      color: #ffffff;
      border-color: #059669;
    }
    .bc-n {
      background: rgba(0,0,0,0.1);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
    }

    /* Layout */
    .content-layout {
      max-width: 1240px;
      margin: 32px auto;
      padding: 0 24px;
      display: grid;
      grid-template-columns: 290px 1fr;
      gap: 32px;
      align-items: start;
    }

    /* Sidebar */
    .sidebar {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 20px;
      position: sticky;
      top: 130px;
      max-height: calc(100vh - 160px);
      overflow-y: auto;
    }
    .sidebar-head {
      font-size: 0.95rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sidebar-search {
      width: 100%;
      padding: 9px 12px;
      border: 1.5px solid #cbd5e1;
      border-radius: 10px;
      font-size: 0.85rem;
      margin-bottom: 16px;
      outline: none;
      transition: border-color 0.2s;
    }
    .sidebar-search:focus {
      border-color: #059669;
    }
    .chapter-nav {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .chapter-nav li a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 12px;
      border-radius: 8px;
      color: #334155;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      transition: all 0.15s;
    }
    .chapter-nav li a:hover {
      background: #f1f5f9;
      color: #059669;
    }
    .chapter-nav li a.active {
      background: #ecfdf5;
      color: #047857;
      font-weight: 800;
    }
    .chapter-nav .ch-num {
      width: 24px;
      height: 24px;
      background: #e2e8f0;
      color: #475569;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 800;
      flex-shrink: 0;
    }
    .chapter-nav li a.active .ch-num {
      background: #059669;
      color: #ffffff;
    }
    .ch-meta {
      display: flex;
      flex-direction: column;
      line-height: 1.3;
      overflow: hidden;
    }
    .ch-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ch-sub {
      font-size: 0.7rem;
      color: #64748b;
    }

    /* Chapter Main Section */
    .chapter-section {
      display: none;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
      margin-bottom: 24px;
    }
    .chapter-section.active {
      display: block;
      animation: fadeIn 0.25s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .chapter-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      border-bottom: 2px solid #f1f5f9;
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    .ch-badge {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #059669, #047857);
      color: #ffffff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.35rem;
      font-weight: 900;
      flex-shrink: 0;
      box-shadow: 0 4px 10px rgba(5, 150, 105, 0.3);
    }
    .chapter-header-info {
      flex: 1;
    }
    .unit-tag {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #059669;
      background: #ecfdf5;
      padding: 3px 9px;
      border-radius: 6px;
      margin-bottom: 6px;
    }
    .chapter-header-info h2 {
      font-size: 1.5rem;
      font-weight: 900;
      color: #0f172a;
      line-height: 1.3;
    }
    .chapter-header-info p {
      color: #64748b;
      font-size: 0.92rem;
      margin-top: 4px;
    }

    /* Key Concepts Card */
    .concept-card {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      border-radius: 14px;
      padding: 20px 22px;
      margin-bottom: 28px;
    }
    .concept-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.95rem;
      font-weight: 800;
      color: #065f46;
      margin-bottom: 12px;
    }
    .concept-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 0.9rem;
      color: #334155;
    }
    .concept-list li {
      position: relative;
      padding-left: 20px;
      line-height: 1.5;
    }
    .concept-list li::before {
      content: "•";
      position: absolute;
      left: 6px;
      color: #059669;
      font-weight: 900;
    }

    /* Exercise Header */
    .ex-div {
      background: #f0fdf4;
      border-left: 4px solid #059669;
      padding: 12px 18px;
      border-radius: 0 10px 10px 0;
      font-weight: 800;
      font-size: 0.98rem;
      color: #166534;
      margin-bottom: 20px;
    }

    /* Question Cards Accordion */
    .q-card {
      border: 1.5px solid #e2e8f0;
      border-radius: 14px;
      margin-bottom: 14px;
      overflow: hidden;
      transition: border-color 0.2s;
    }
    .q-card:hover { border-color: #cbd5e1; }
    .q-head {
      background: #ffffff;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      user-select: none;
    }
    .q-num {
      background: #f1f5f9;
      color: #1e293b;
      width: 28px;
      height: 28px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.78rem;
      font-weight: 800;
      flex-shrink: 0;
    }
    .q-text {
      font-size: 0.92rem;
      font-weight: 700;
      color: #0f172a;
      flex: 1;
      line-height: 1.4;
    }
    .q-cat {
      background: #f1f5f9;
      color: #475569;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .q-marks {
      background: #fef3c7;
      color: #92400e;
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .q-toggle {
      width: 18px;
      height: 18px;
      color: #64748b;
      transition: transform 0.2s ease;
      flex-shrink: 0;
    }
    .q-card.open .q-toggle {
      transform: rotate(45deg);
      color: #059669;
    }

    .q-answer {
      display: none;
      padding: 0 20px 20px;
      background: #ffffff;
    }
    .q-card.open .q-answer { display: block; }
    .answer-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 18px;
      margin-top: 4px;
    }
    .answer-label {
      font-size: 0.78rem;
      font-weight: 800;
      color: #059669;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 8px;
    }
    .answer-text {
      font-size: 0.9rem;
      color: #1e293b;
      line-height: 1.6;
      margin-bottom: 14px;
    }
    
    /* Marking Scheme */
    .marking-scheme {
      background: #ffffff;
      border: 1px solid #a7f3d0;
      border-radius: 10px;
      padding: 12px 16px;
      margin-top: 12px;
    }
    .marking-title {
      font-size: 0.8rem;
      font-weight: 800;
      color: #047857;
      margin-bottom: 8px;
    }
    .marking-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #334155;
      padding: 3px 0;
      border-bottom: 1px dashed #e2e8f0;
    }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { flex: 1; }
    .marking-marks { font-weight: 700; color: #059669; }

    /* CBQ Card */
    .cbq-card {
      background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
      border: 1.5px solid #a7f3d0;
      border-radius: 16px;
      padding: 24px;
      margin-top: 28px;
    }
    .cbq-badge {
      display: inline-block;
      background: #059669;
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }

    /* Footer */
    .site-footer {
      background: #0f172a;
      color: #94a3b8;
      text-align: center;
      padding: 32px 24px;
      margin-top: 64px;
      font-size: 0.88rem;
      border-top: 1px solid #1e293b;
    }
    .site-footer a { color: #6ee7b7; text-decoration: none; }

    /* Responsive */
    @media (max-width: 900px) {
      .content-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
      .hero-title { font-size: 1.65rem; }
    }
  </style>
</head>
<body>
  <!-- Progress Bar -->
  <div class="reading-progress-bar" id="progressBar"></div>

  <!-- Header -->
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand">
        <span>OlympiadQuiz</span>
        <span class="brand-badge">NCERT Solutions</span>
      </a>
      <nav class="top-links">
        <a href="index.html">Home</a>
        <a href="ncert-solutions.html" class="active">NCERT Solutions</a>
        <a href="dashboard.html">Dashboard</a>
      </nav>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <div class="breadcrumb-bar">
    <div class="breadcrumb-inner">
      <a href="index.html">Home</a>
      <span class="sep">/</span>
      <a href="ncert-solutions.html">NCERT Solutions</a>
      <span class="sep">/</span>
      <a href="ncert-solutions-class-3.html">Class 3 Hub</a>
      <span class="sep">/</span>
      <span class="cur">EVS</span>
    </div>
  </div>

  <!-- Hero Banner -->
  <section class="hero-banner">
    <div class="hero-inner">
      <div class="hero-badge">CBSE 2026-27 Session • 100% NCERT Solutions</div>
      <h1 class="hero-title">NCERT Class 3 EVS Solutions</h1>
      <p class="hero-desc">Complete textbook exercise solutions, environmental diagrams, scientific inquiry tasks, CBSE step rubrics, and NEP 2020 competency-based case studies across Our Wondrous World and Looking Around.</p>
      
      <!-- Track Switcher -->
      <div class="book-toggle-bar">
        <button id="btnWondrousWorld" class="track-btn active" onclick="switchBook('wondrousWorld')">
          🌿 Our Wondrous World (New NCF 2023 - 12 Chapters)
        </button>
        <button id="btnLookingAround" class="track-btn" onclick="switchBook('lookingAround')">
          🌍 Looking Around (Classic CBSE - 24 Chapters)
        </button>
      </div>
    </div>
  </section>

  <!-- Sticky Chapter Chips Bar -->
  <div class="chip-bar">
    <div class="chip-bar-inner">
      <span class="chip-label" id="chipBarLabel">Quick Jump To Chapter — Our Wondrous World (NEP 2020):</span>
      <div class="chips-wrapper" id="chipsWondrousWorld">
        ${wondrousWorldChips}
      </div>
      <div class="chips-wrapper" id="chipsLookingAround" style="display:none;">
        ${lookingAroundChips}
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="content-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-head">
        <span id="sidebarTitleText">🌿 Our Wondrous World (Chapters)</span>
        <span id="sidebarCount" style="font-size:0.75rem;background:#ecfdf5;color:#047857;padding:2px 8px;border-radius:6px;">12 Chapters</span>
      </div>
      <input type="text" class="sidebar-search" placeholder="Search chapters..." oninput="filterChapters(this.value)">
      <ul class="chapter-nav" id="navWondrousWorld">
        ${wondrousWorldSidebar}
      </ul>
      <ul class="chapter-nav" id="navLookingAround" style="display:none;">
        ${lookingAroundSidebar}
      </ul>
    </aside>

    <!-- Content Containers -->
    <main class="main-content">
      <div id="containerWondrousWorld">
        ${wondrousWorldSections}
      </div>
      <div id="containerLookingAround" style="display:none;">
        ${lookingAroundSections}
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <p>© 2026 OlympiadQuiz — <a href="index.html">Home</a> · <a href="ncert-solutions.html">NCERT Solutions Hub</a> · <a href="ncert-solutions-class-3.html">Class 3 Solutions</a></p>
  </footer>

  <script>
    let currentBook = 'wondrousWorld';

    function switchBook(book) {
      currentBook = book;
      const isWondrousWorld = (book === 'wondrousWorld');

      // Update tabs
      document.getElementById('btnWondrousWorld').classList.toggle('active', isWondrousWorld);
      document.getElementById('btnLookingAround').classList.toggle('active', !isWondrousWorld);

      // Update chips & sidebars
      document.getElementById('chipsWondrousWorld').style.display = isWondrousWorld ? 'flex' : 'none';
      document.getElementById('chipsLookingAround').style.display = isWondrousWorld ? 'none' : 'flex';
      document.getElementById('navWondrousWorld').style.display = isWondrousWorld ? 'flex' : 'none';
      document.getElementById('navLookingAround').style.display = isWondrousWorld ? 'none' : 'flex';

      document.getElementById('containerWondrousWorld').style.display = isWondrousWorld ? 'block' : 'none';
      document.getElementById('containerLookingAround').style.display = isWondrousWorld ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isWondrousWorld ? 'Quick Jump To Chapter — Our Wondrous World (NEP 2020):' : 'Quick Jump To Chapter — Looking Around:';
      document.getElementById('sidebarTitleText').innerText = isWondrousWorld ? '🌿 Our Wondrous World (Chapters)' : '🌍 Looking Around (Chapters)';
      document.getElementById('sidebarCount').innerText = isWondrousWorld ? '12 Chapters' : '24 Chapters';

      // Show first chapter of that book
      const defaultId = isWondrousWorld ? 'ch_ww1' : 'ch_la1';
      showChapter(defaultId);
    }

    function showChapter(targetId) {
      document.querySelectorAll('.chapter-section').forEach(sec => sec.classList.remove('active'));
      const activeSec = document.getElementById(targetId);
      if (activeSec) {
        activeSec.classList.add('active');
        // Open first question accordion by default
        const firstQ = activeSec.querySelector('.q-card');
        if (firstQ) firstQ.classList.add('open');
      }

      // Update chips
      document.querySelectorAll('.bc-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-target') === targetId);
      });

      // Update sidebar
      document.querySelectorAll('.chapter-nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-target') === targetId);
      });

      // Scroll chip into view
      const activeChip = document.querySelector('.bc-chip[data-target="' + targetId + '"]');
      if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      // Update URL hash
      history.replaceState(null, null, '#' + targetId);
    }

    function toggleQ(qId) {
      const card = document.getElementById(qId);
      if (card) card.classList.toggle('open');
    }

    function filterChapters(query) {
      const q = query.toLowerCase().trim();
      const activeNavId = (currentBook === 'wondrousWorld') ? 'navWondrousWorld' : 'navLookingAround';
      document.querySelectorAll('#' + activeNavId + ' li').forEach(li => {
        const text = li.innerText.toLowerCase();
        li.style.display = text.includes(q) ? 'block' : 'none';
      });
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
        if (hash.startsWith('ch_la')) {
          switchBook('lookingAround');
          showChapter(hash);
          return;
        } else if (hash.startsWith('ch_ww')) {
          switchBook('wondrousWorld');
          showChapter(hash);
          return;
        }
      }
      // default: Wondrous World Chapter 1
      showChapter('ch_ww1');
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-3-evs.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-3-evs.html (${htmlContent.length} bytes)!`);
