// scripts/builders/chapterTemplateC6.js
// Master Modular Chapter HTML Template for Class 6 NCERT Solutions
// Generates standalone, responsive, high-performance, SEO-optimized HTML pages for each chapter.

const THEMES = {
  maths: {
    primary: '#2563eb',
    primaryDark: '#1e40af',
    primaryLight: '#eff6ff',
    border: '#dbeafe',
    badgeText: '#1e40af',
    accent: '#ff6b00'
  },
  science: {
    primary: '#059669',
    primaryDark: '#065f46',
    primaryLight: '#ecfdf5',
    border: '#a7f3d0',
    badgeText: '#065f46',
    accent: '#d97706'
  },
  sst: {
    primary: '#d97706',
    primaryDark: '#92400e',
    primaryLight: '#fef3c7',
    border: '#fde68a',
    badgeText: '#92400e',
    accent: '#0d9488'
  },
  english: {
    primary: '#7c3aed',
    primaryDark: '#5b21b6',
    primaryLight: '#f5f3ff',
    border: '#ddd6fe',
    badgeText: '#5b21b6',
    accent: '#ea580c'
  },
  hindi: {
    primary: '#ea580c',
    primaryDark: '#9a3412',
    primaryLight: '#fff7ed',
    border: '#fed7aa',
    badgeText: '#9a3412',
    accent: '#2563eb'
  },
  'hindi-malhar': {
    primary: '#ea580c',
    primaryDark: '#9a3412',
    primaryLight: '#fff7ed',
    border: '#fed7aa',
    badgeText: '#9a3412',
    accent: '#2563eb'
  }
};

function extractQuestionsForFaq(bodyHtml) {
  const matches = [];
  const qMatches = Array.from(bodyHtml.matchAll(/<div class="q-text">([\s\S]*?)<\/div>[\s\S]*?<div class="answer-text">([\s\S]*?)<\/div>/g));
  for (const m of qMatches.slice(0, 10)) {
    const qText = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 160);
    const ansText = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 300);
    if (qText && ansText) {
      matches.push({
        "@type": "Question",
        "name": qText,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ansText
        }
      });
    }
  }
  return matches;
}

function generateChapterPageC6({
  classNum = 6,
  subjectName,
  subjectSlug,
  bookTitle,
  bookSlug,
  trackName = 'NEP 2020 New Syllabus',
  chNum,
  totalChs,
  chId,
  title,
  subtitle = '',
  bodyContentHtml,
  prevLink,
  nextLink,
  sidebarChapters = [],
  canonicalUrl
}) {
  const theme = THEMES[subjectSlug] || THEMES.maths;
  const faqEntities = extractQuestionsForFaq(bodyContentHtml);

  // Sidebar Links HTML
  const sidebarLinksHtml = sidebarChapters.map(ch => `
    <li>
      <a href="${ch.filename}" class="${ch.num === chNum ? 'active' : ''}">
        <span class="ch-badge-num">${ch.num}</span>
        <span class="ch-name-txt">${ch.title}</span>
      </a>
    </li>
  `).join('');

  // Hub link targets
  const subjectHubFile = subjectSlug === 'hindi-malhar' 
    ? 'ncert-solutions-class-6-hindi-malhar.html' 
    : `ncert-solutions-class-6-${subjectSlug}.html`;

  // Top & Bottom Pagers
  const prevButton = prevLink 
    ? `<a href="${prevLink.filename}" class="btn-pager">⬅️ ${prevLink.label}</a>`
    : `<a href="../${subjectHubFile}" class="btn-pager">⬅️ ${subjectName} Hub</a>`;
  
  const nextButton = nextLink
    ? `<a href="${nextLink.filename}" class="btn-pager">${nextLink.label} ➡️</a>`
    : `<a href="../${subjectHubFile}" class="btn-pager">Back to ${subjectName} Hub ➡️</a>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class ${classNum} ${subjectName} Chapter ${chNum}: ${title} (${bookTitle}) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Comprehensive NCERT Solutions for Class ${classNum} ${subjectName} (${bookTitle}) Chapter ${chNum}: ${title}. Complete textbook exercises, in-text activities, labeled diagrams, CBSE step marking schemes, and NEP 2020 case studies.">
  <meta name="keywords" content="ncert solutions class ${classNum} ${subjectSlug} chapter ${chNum}, ${title.toLowerCase()} class ${classNum}, ${bookSlug} chapter ${chNum} solutions, class ${classNum} ${subjectSlug} ncert 2026-27, cbse class ${classNum} ${subjectSlug} tiwari academy, ${bookTitle.toLowerCase()} chapter ${chNum}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/png" href="../favicon.png">
  <link rel="apple-touch-icon" href="../favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="NCERT Solutions Class ${classNum} ${subjectName} Chapter ${chNum}: ${title} (100% Full Exercises)">
  <meta property="og:description" content="Complete step-by-step solutions for Chapter ${chNum}: ${title} (${bookTitle}) with CBSE marking schemes, custom diagrams, and competency-based questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions Class ${classNum} ${subjectName} Chapter ${chNum}: ${title}">
  <meta name="twitter:description" content="100% textbook exercises and marking schemes for Class ${classNum} ${subjectName} Chapter ${chNum}.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class ${classNum}", "item": "https://olympiadquiz.org/ncert-solutions-class-${classNum}.html" },
      { "@type": "ListItem", "position": 4, "name": "Class ${classNum} ${subjectName}", "item": "https://olympiadquiz.org/${subjectHubFile}" },
      { "@type": "ListItem", "position": 5, "name": "${bookTitle} Chapter ${chNum}", "item": "${canonicalUrl}" }
    ]
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Class ${classNum} ${subjectName} Chapter ${chNum} Solutions - ${title}",
    "description": "Comprehensive textbook solutions for Class ${classNum} ${bookTitle} Chapter ${chNum}: ${title}.",
    "learningResourceType": "Textbook Solutions",
    "educationalLevel": "Grade ${classNum}",
    "audience": "Students, Teachers, Parents",
    "inLanguage": "en",
    "isAccessibleForFree": true
  }
  </script>

  ${faqEntities.length > 0 ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ${JSON.stringify(faqEntities)}
  }
  </script>
  ` : ''}

  <style>
    :root {
      --primary: ${theme.primary};
      --primary-dark: ${theme.primaryDark};
      --primary-light: ${theme.primaryLight};
      --primary-border: ${theme.border};
      --accent: ${theme.accent};
      --navy: #0f172a;
      --slate: #334155;
      --muted: #64748b;
      --bg-page: #f8fafc;
      --bg-card: #ffffff;
      --border: #e2e8f0;
      --radius: 14px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
      --shadow: 0 4px 14px rgba(0,0,0,0.08);
      --font-body: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans Devanagari', Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-body);
      background: var(--bg-page);
      color: var(--slate);
      line-height: 1.65;
    }

    /* Reading Progress Bar */
    .top-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      width: 0%;
      z-index: 2000;
      transition: width 0.1s ease;
    }

    /* Sticky Navbar */
    .site-nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--navy);
      color: #ffffff;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }
    .site-nav a { color: #ffffff; text-decoration: none; font-weight: 600; font-size: 0.92rem; }
    .site-nav-logo { display: flex; align-items: center; gap: 8px; font-size: 1.15rem; font-weight: 800; }
    .site-nav-links { display: flex; gap: 16px; align-items: center; }
    .site-nav-links a { color: #94a3b8; transition: color 0.2s; }
    .site-nav-links a:hover { color: #ffffff; }
    .btn-hub-nav {
      background: var(--primary);
      color: #ffffff !important;
      padding: 6px 14px;
      border-radius: 8px;
      font-weight: 700 !important;
      font-size: 0.85rem !important;
    }

    /* Breadcrumbs */
    .bc-nav {
      background: #ffffff;
      border-bottom: 1px solid var(--border);
      padding: 10px 24px;
      font-size: 0.85rem;
      color: var(--muted);
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }
    .bc-container {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
    }
    .bc-list { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
    .bc-list a { color: var(--navy); text-decoration: none; font-weight: 600; }
    .bc-list a:hover { color: var(--primary); text-decoration: underline; }
    .bc-sep { color: #cbd5e1; font-size: 0.75rem; }
    .bc-active { color: var(--primary); font-weight: 700; }
    .bc-switch-pills { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
    .bc-pill {
      font-size: 0.76rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 999px;
      text-decoration: none;
      background: #f1f5f9;
      color: #334155;
      border: 1px solid #e2e8f0;
      transition: all 0.15s;
    }
    .bc-pill:hover, .bc-pill.active { background: var(--primary); color: white; border-color: var(--primary); }

    /* Page Layout */
    .page-layout {
      max-width: 1400px;
      margin: 24px auto 60px;
      padding: 0 24px;
      display: grid;
      grid-template-columns: 310px 1fr;
      gap: 32px;
      align-items: start;
    }

    /* Sidebar Navigation */
    .sidebar {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 20px;
      position: sticky;
      top: 76px;
      max-height: calc(100vh - 96px);
      overflow-y: auto;
      box-shadow: var(--shadow-sm);
    }
    .sidebar-title {
      font-size: 0.92rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--navy);
      margin-bottom: 14px;
      border-bottom: 2px solid var(--primary-border);
      padding-bottom: 8px;
    }
    .sidebar-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
    .sidebar-list a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      font-size: 0.86rem;
      color: #334155;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.15s ease;
      border: 1px solid transparent;
    }
    .sidebar-list a:hover { background: var(--primary-light); color: var(--primary); }
    .sidebar-list a.active {
      background: var(--primary);
      color: #ffffff;
      font-weight: 700;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    }
    .ch-badge-num {
      width: 24px;
      height: 24px;
      background: rgba(0,0,0,0.06);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.78rem;
      font-weight: 800;
      flex-shrink: 0;
    }
    .sidebar-list a.active .ch-badge-num {
      background: rgba(255,255,255,0.25);
      color: white;
    }

    /* Content Area */
    .content-area {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px 36px;
      box-shadow: var(--shadow-sm);
      min-width: 0;
    }

    /* Chapter Pager (Top & Bottom) */
    .chapter-pager {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      padding: 12px 16px;
      background: #f8fafc;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      flex-wrap: wrap;
    }
    .btn-pager {
      padding: 7px 14px;
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--primary-dark);
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.15s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn-pager:hover {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    /* Chapter Header */
    .chapter-header {
      background: var(--primary-light);
      border: 1.5px solid var(--primary-border);
      border-radius: 14px;
      padding: 24px 28px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .ch-badge {
      width: 52px;
      height: 52px;
      background: var(--primary);
      color: white;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 800;
      flex-shrink: 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.12);
    }
    .chapter-header-info h2 {
      font-size: 1.45rem;
      font-weight: 800;
      color: var(--navy);
      margin-bottom: 4px;
    }
    .chapter-header-info p {
      font-size: 0.9rem;
      color: var(--slate);
      line-height: 1.5;
    }

    /* Concepts Box */
    .concept-card {
      background: #fafaf9;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 18px 22px;
      margin-bottom: 24px;
      border-left: 4px solid var(--primary);
    }
    .concept-header {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--navy);
      margin-bottom: 10px;
    }
    .concept-list {
      padding-left: 20px;
      font-size: 0.92rem;
      color: var(--slate);
      line-height: 1.8;
    }
    .concept-list li { margin-bottom: 6px; }

    /* Visual Diagrams */
    .math-diagram-wrap, .diagram-wrap {
      background: #ffffff;
      border: 1.5px solid var(--border);
      border-radius: 12px;
      padding: 18px;
      margin: 22px auto;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      max-width: 640px;
    }

    /* Exercise Heading Dividers */
    .ex-div {
      background: #f1f5f9;
      color: var(--navy);
      font-weight: 800;
      font-size: 0.95rem;
      padding: 12px 18px;
      border-radius: 10px;
      margin: 30px 0 16px;
      border-left: 4px solid var(--primary);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Q-Cards Accordions */
    .q-card {
      background: #ffffff;
      border: 1px solid var(--border);
      border-radius: 12px;
      margin-bottom: 16px;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: all 0.2s ease;
    }
    .q-card:hover {
      box-shadow: var(--shadow);
      border-color: #cbd5e1;
    }
    .q-head {
      padding: 16px 20px;
      cursor: pointer;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      background: #ffffff;
      user-select: none;
    }
    .q-num {
      min-width: 42px;
      height: 36px;
      background: var(--primary);
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .q-text {
      flex: 1;
      font-size: 0.98rem;
      font-weight: 700;
      color: var(--navy);
      line-height: 1.6;
    }
    .q-marks {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--primary-dark);
      background: var(--primary-light);
      padding: 3px 10px;
      border-radius: 999px;
      white-space: nowrap;
      border: 1px solid var(--primary-border);
    }
    .q-toggle {
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--muted);
      transition: transform 0.2s ease;
    }
    .q-card.open .q-toggle svg { transform: rotate(180deg); }
    .q-answer {
      display: none;
      border-top: 1px solid var(--border);
      background: #fafaf9;
    }
    .q-card.open .q-answer { display: block; }
    .answer-box { padding: 20px 24px; }
    .answer-label {
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #15803d;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .answer-text {
      font-size: 0.95rem;
      line-height: 1.8;
      color: var(--slate);
    }
    .answer-text p { margin-bottom: 10px; }
    .answer-text ul, .answer-text ol { padding-left: 24px; margin-bottom: 10px; }
    .answer-text li { margin-bottom: 6px; }
    .step {
      background: #ffffff;
      border-left: 3px solid var(--primary);
      padding: 12px 16px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 12px;
      border: 1px solid #f1f5f9;
      border-left-width: 3px;
    }

    /* Marking Scheme */
    .marking-scheme {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px dashed #cbd5e1;
      background: #f8fafc;
      padding: 12px 16px;
      border-radius: 8px;
    }
    .marking-title {
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--muted);
      margin-bottom: 8px;
    }
    .marking-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.84rem;
      padding: 4px 0;
      border-bottom: 1px solid #f1f5f9;
    }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); font-weight: 500; }
    .marking-marks { font-weight: 700; color: var(--primary-dark); }

    /* Competency-Based Case Study (CBQ) */
    .cbq-card, .cbq-box {
      background: #fdf4ff;
      border: 1.5px solid #f0abfc;
      border-radius: 14px;
      padding: 24px;
      margin: 32px 0 20px;
    }
    .cbq-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #c026d3;
      color: white;
      padding: 4px 12px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }

    /* Footer */
    .page-footer {
      background: var(--navy);
      color: #94a3b8;
      padding: 40px 24px;
      text-align: center;
      font-size: 0.88rem;
      border-top: 1px solid #1e293b;
      margin-top: 60px;
    }
    .page-footer a { color: #93c5fd; text-decoration: none; font-weight: 600; }
    .page-footer a:hover { text-decoration: underline; }

    @media (max-width: 1024px) {
      .page-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
      .content-area { padding: 24px 20px; }
      .chapter-header { flex-direction: column; align-items: flex-start; gap: 14px; }
    }
  </style>
</head>
<body>

  <div class="top-progress" id="progressBar"></div>

  <!-- Sticky Navbar -->
  <nav class="site-nav">
    <a href="../index.html" class="site-nav-logo">
      <img src="../favicon.png" alt="OlympiadQuiz Logo" width="28" height="28" style="vertical-align: middle;">
      <span>Olympiad<span>Quiz</span></span>
    </a>
    <div class="site-nav-links">
      <a href="../ncert-solutions.html">📚 All NCERT</a>
      <a href="../ncert-solutions-class-${classNum}.html">Class ${classNum} Hub</a>
      <a href="../${subjectHubFile}" class="btn-hub-nav">${subjectName} Hub →</a>
    </div>
  </nav>

  <!-- Breadcrumbs -->
  <nav class="bc-nav" aria-label="Breadcrumb">
    <div class="bc-container">
      <ul class="bc-list">
        <li><a href="../index.html">Home</a></li>
        <li class="bc-sep">/</li>
        <li><a href="../ncert-solutions.html">NCERT Solutions</a></li>
        <li class="bc-sep">/</li>
        <li><a href="../ncert-solutions-class-${classNum}.html">Class ${classNum}</a></li>
        <li class="bc-sep">/</li>
        <li><a href="../${subjectHubFile}">${subjectName}</a></li>
        <li class="bc-sep">/</li>
        <li class="bc-active">${bookTitle} Ch ${chNum}</li>
      </ul>
      <div class="bc-switch-pills">
        <a href="../ncert-solutions-class-6-maths.html" class="bc-pill ${subjectSlug === 'maths' ? 'active' : ''}">Maths</a>
        <a href="../ncert-solutions-class-6-science.html" class="bc-pill ${subjectSlug === 'science' ? 'active' : ''}">Science</a>
        <a href="../ncert-solutions-class-6-sst.html" class="bc-pill ${subjectSlug === 'sst' ? 'active' : ''}">Social Science</a>
        <a href="../ncert-solutions-class-6-english.html" class="bc-pill ${subjectSlug === 'english' ? 'active' : ''}">English</a>
        <a href="../ncert-solutions-class-6-hindi-malhar.html" class="bc-pill ${subjectSlug === 'hindi-malhar' || subjectSlug === 'hindi' ? 'active' : ''}">Hindi</a>
        <a href="../ncert-solutions-class-6-sanskrit.html" class="bc-pill">Sanskrit</a>
      </div>
    </div>
  </nav>

  <div class="page-layout">
    
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">${bookTitle} (${totalChs} Chapters)</div>
      <ul class="sidebar-list">
        ${sidebarLinksHtml}
      </ul>
      <div class="sidebar-title" style="margin-top: 24px;">Hub Navigation</div>
      <ul class="sidebar-list">
        <li><a href="../${subjectHubFile}">← ${subjectName} Main Page</a></li>
        <li><a href="../ncert-solutions-class-${classNum}.html">← Class ${classNum} Central Hub</a></li>
        <li><a href="../ncert-solutions.html">← All NCERT Solutions</a></li>
      </ul>
    </aside>

    <!-- Content Area -->
    <main class="content-area">

      <!-- Pager Top -->
      <div class="chapter-pager">
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 700;">Chapter ${chNum} of ${totalChs}</span>
        <div style="display: flex; gap: 8px;">
          ${prevButton}
          ${nextButton}
        </div>
      </div>

      <!-- Ingested Chapter Content -->
      <div class="chapter-module-body">
        ${bodyContentHtml}
      </div>

      <!-- Pager Bottom -->
      <div class="chapter-pager" style="margin-top: 36px;">
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 700;">Chapter ${chNum} of ${totalChs}</span>
        <div style="display: flex; gap: 8px;">
          ${prevButton}
          ${nextButton}
        </div>
      </div>

    </main>

  </div>

  <!-- Footer -->
  <footer class="page-footer">
    <div style="margin-bottom: 12px;">
      <a href="../index.html">Home</a> •
      <a href="../ncert-solutions-class-${classNum}.html">Class ${classNum} Hub</a> •
      <a href="../${subjectHubFile}">${subjectName} Solutions</a> •
      <a href="../ncert-solutions.html">All Classes</a>
    </div>
    <p>© 2026–27 OlympiadQuiz.org — 100% Free Complete NCERT Solutions for CBSE &amp; State Boards.</p>
  </footer>

  <script>
    // Toggle Question Accordion
    function toggleQ(id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('open');
    }

    // Toggle Competency Answer
    function toggleCbq(id) {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('show');
    }

    // Reading Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('progressBar');
      if (bar) bar.style.width = scrolled + '%';
    });
  </script>

</body>
</html>`;
}

module.exports = { generateChapterPageC6 };
