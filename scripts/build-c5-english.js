// Generator for NCERT Class 5 English Solutions (100% Question Coverage: Santoor + Marigold)
// Fully Aligned with Official NCERT Curriculum (New NEP 2020 Santoor + Classic CBSE Marigold)
const fs = require('fs');
const path = require('path');

const { santoorChapters } = require('./data-c5-english/santoorData.js');
const { marigoldUnits } = require('./data-c5-english/marigoldData.js');

console.log("=== BUILDING NCERT CLASS 5 ENGLISH SOLUTIONS (SANTOOR + MARIGOLD) ===");
console.log(`Loaded ${santoorChapters.length} Santoor Chapters and ${marigoldUnits.length} Marigold Units`);

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
        <div class="answer-label">Detailed Step-by-Step Solution:</div>
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
  const prefix = `${bookKey}_${ch.num}`;
  const conceptsHtml = ch.concepts.map(c => `<li>${c}</li>`).join('');
  const questionsHtml = ch.questions.map((q, idx) => renderQuestionCard(q, idx, prefix)).join('');

  return `
  <section class="chapter-section" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <span class="unit-tag">${ch.unit}</span>
        <h2>${ch.title}</h2>
        <p>${ch.subtitle}</p>
      </div>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Chapter Highlights, Thematic Summary & Key Vocabulary</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>
    </div>

    <!-- Complete Exercise Questions & Solutions -->
    <div class="ex-div">📖 NCERT Textbook Exercise Solutions & Comprehension (100% Coverage)</div>
    <div class="questions-container">
      ${questionsHtml}
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #059669;"><strong>Case Scenario:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Question:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #6ee7b7;font-size:0.8rem;font-weight:700;color:#047857;">Rubric: ${ch.cbq.rubric}</div>
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const santoorSections = santoorChapters.map(ch => renderChapterSection(ch, "santoor")).join('\n');
const marigoldSections = marigoldUnits.map(ch => renderChapterSection(ch, "marigold")).join('\n');

const santoorChips = santoorChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('&')[0].trim()}
  </button>
`).join('');

const marigoldChips = marigoldUnits.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('&')[0].trim()}
  </button>
`).join('');

const santoorSidebar = santoorChapters.map(ch => `
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

const marigoldSidebar = marigoldUnits.map(ch => `
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
  <title>NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Complete NCERT Solutions for Class 5 English covering BOTH textbooks: New NEP 2020 Santoor (Chapters 1 to 10) and Classic Marigold (Units 1 to 10). Complete exercise solutions, CBSE step marking schemes, grammar, diagrams, and competency-based questions.">
  <meta name="keywords" content="ncert solutions class 5 english, santoor class 5 english solutions, marigold class 5 ncert solutions, cbse class 5 english 2026-27, papas spectacles class 5, gone with the scooter, the rainbow ncert, the wise parrot, the frog class 5, what a tank class 5, gilli danda ncert, the decision of the panchayat, vocation class 5 tagore, glass bangles ncert, ice cream man ncert, wonderful waste avial, flying together panchatantra, robinson crusoe class 5, bade bhai sahab class 5, rip van winkle ncert, who will be ningthou class 5">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-5-english.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-5-english.html">
  <meta property="og:title" content="NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% question coverage for Class 5 English across both Santoor (New NEP 2020) and Marigold textbooks with diagrams, step marking schemes and NEP 2020 competency questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook exercise solutions for Class 5 English with diagrams, CBSE marking schemes, and case studies.">
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
      { "@type": "ListItem", "position": 3, "name": "Class 5", "item": "https://olympiadquiz.org/ncert-solutions.html#class5" },
      { "@type": "ListItem", "position": 4, "name": "English", "item": "https://olympiadquiz.org/ncert-solutions-class-5-english.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 5 English (Santoor & Marigold) CBSE 2026-27",
    "description": "Comprehensive 100% textbook exercise solutions for NCERT Class 5 English covering all 10 chapters of Santoor (New NEP 2020) and all 10 units of Marigold with CBSE rubrics and diagrams.",
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

  <!-- Schema.org FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are both textbooks 'Santoor' and 'Marigold' covered for Class 5 English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this portal provides 100% question coverage for BOTH the new NEP 2020 NCERT textbook 'Santoor' (10 chapters) and the classic CBSE textbook 'Marigold' (10 units / 20 chapters)."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions include the official CBSE step marking scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every single question is provided with an exact CBSE marking rubric showing point allocations for content, grammar, character insight, and vocabulary."
        }
      },
      {
        "@type": "Question",
        "name": "Are competency-based questions (CBQs) and diagrams included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, interactive vector SVG diagrams and NEP 2020 real-world case study questions are provided for every chapter and unit."
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --brand: #2563eb;
      --brand-dark: #1d4ed8;
      --brand-light: #eff6ff;
      --brand-text: #1e40af;
      --navy: #0f172a;
      --slate: #475569;
      --border: #e2e8f0;
      --bg: #f8fafc;
      --surface: #ffffff;
      --accent: #ea580c;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: var(--bg); color: #1e293b; line-height: 1.6; }

    /* Top Progress Bar */
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #3b82f6, #1d4ed8); z-index: 1000; width: 0%; transition: width .1s ease; }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid #1e293b; padding: 0 20px; position: sticky; top: 0; z-index: 99; }
    .navbar-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 60px; }
    .navbar-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 800; font-size: 1.15rem; }
    .navbar-logo span span { color: #3b82f6; }
    .navbar-links { display: flex; gap: 20px; align-items: center; }
    .nav-link { color: #cbd5e1; text-decoration: none; font-size: .9rem; font-weight: 600; transition: color .2s; }
    .nav-link:hover { color: white; }
    .nav-dropdown { position: relative; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: #ffffff; min-width: 270px; box-shadow: 0 10px 25px rgba(0,0,0,.15); border-radius: 12px; padding: 10px; border: 1px solid #e2e8f0; z-index: 100; }
    .nav-dropdown:hover .nav-dropdown-content { display: block; }
    .nav-dropdown-content a { display: block; padding: 8px 12px; color: #1e293b; text-decoration: none; font-size: .85rem; font-weight: 600; border-radius: 6px; transition: background .15s; }
    .nav-dropdown-content a:hover { background: #eff6ff; color: #1d4ed8; }
    .btn-login { background: #2563eb; color: white; padding: 6px 16px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: .85rem; }

    /* Breadcrumbs Nav */
    .ncert-breadcrumb-nav { background: #ffffff; border-bottom: 1px solid var(--border); padding: 10px 20px; }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .ncert-bc-list { display: flex; align-items: center; gap: 6px; list-style: none; font-size: .85rem; }
    .ncert-bc-list a { color: var(--slate); text-decoration: none; font-weight: 500; }
    .ncert-bc-list a:hover { color: var(--brand); }
    .ncert-bc-sep { color: #94a3b8; }
    .ncert-bc-current { color: var(--navy); font-weight: 700; }
    .ncert-bc-switch { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; font-size: .82rem; }
    .ncert-bc-switch-label { color: var(--slate); font-weight: 600; }
    .ncert-bc-pill { padding: 4px 10px; border-radius: 20px; text-decoration: none; color: var(--slate); border: 1px solid var(--border); font-weight: 600; transition: all .2s; }
    .ncert-bc-pill:hover, .ncert-bc-pill.active { background: var(--brand); color: white; border-color: var(--brand); }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%); color: white; padding: 36px 20px 32px; text-align: center; }
    .hero-banner h1 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 900; margin-bottom: 12px; letter-spacing: -.02em; }
    .hero-banner p { font-size: .95rem; max-width: 800px; margin: 0 auto 20px; color: #bfdbfe; line-height: 1.6; }
    .hero-badges { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; }
    .hero-badge { background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.25); padding: 5px 14px; border-radius: 20px; font-size: .82rem; font-weight: 600; }

    /* Book Switcher Tabs */
    .book-tab-bar { background: #ffffff; border-bottom: 1px solid var(--border); padding: 14px 20px; text-align: center; position: sticky; top: 60px; z-index: 95; }
    .book-tab-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .btn-book-tab { padding: 8px 20px; border-radius: 24px; font-weight: 700; font-size: .88rem; border: 2px solid var(--border); background: var(--bg); color: var(--slate); cursor: pointer; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; }
    .btn-book-tab:hover { border-color: var(--brand); color: var(--brand); }
    .btn-book-tab.active { background: var(--brand); border-color: var(--brand); color: white; box-shadow: 0 4px 12px rgba(37,99,235,.25); }
    .btn-book-tab .badge { background: rgba(0,0,0,.15); padding: 2px 8px; border-radius: 12px; font-size: .75rem; }

    /* Breadcrumb Chips Jump Bar */
    .breadcrumb-bar { background: #ffffff; border-bottom: 1px solid var(--border); padding: 10px 20px; position: sticky; top: 118px; z-index: 90; box-shadow: 0 2px 8px rgba(0,0,0,.03); }
    .breadcrumb-label { font-size: .78rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--slate); margin-bottom: 6px; }
    .breadcrumb-chips { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; }
    .bc-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 20px; border: 1px solid var(--border); background: var(--bg); color: var(--slate); font-size: .8rem; font-weight: 600; cursor: pointer; white-space: nowrap; transition: all .15s; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-dark); }
    .bc-chip.active { background: var(--brand); border-color: var(--brand); color: white; }
    .bc-n { background: rgba(0,0,0,.15); border-radius: 50%; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; font-size: .7rem; }

    /* Main Layout */
    .main-layout { max-width: 1400px; margin: 24px auto; display: flex; gap: 24px; padding: 0 20px; }
    .sidebar { width: 320px; flex-shrink: 0; background: #ffffff; border: 1px solid var(--border); border-radius: 16px; padding: 16px; height: calc(100vh - 180px); position: sticky; top: 180px; overflow-y: auto; }
    .sidebar-title { font-size: .95rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid var(--brand); display: flex; justify-content: space-between; align-items: center; }
    .search-box { width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 8px; font-size: .85rem; margin-bottom: 12px; outline: none; }
    .search-box:focus { border-color: var(--brand); }
    .chapter-nav { list-style: none; display: flex; flex-direction: column; gap: 4px; }
    .chapter-nav a { display: flex; align-items: flex-start; gap: 10px; padding: 8px 10px; border-radius: 8px; text-decoration: none; color: var(--slate); transition: all .15s; }
    .chapter-nav a:hover, .chapter-nav a.active { background: var(--brand-light); color: var(--brand-text); }
    .ch-num { width: 22px; height: 22px; border-radius: 6px; background: var(--border); display: flex; align-items: center; justify-content: center; font-size: .75rem; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
    .chapter-nav a.active .ch-num { background: var(--brand); color: white; }
    .ch-meta { display: flex; flex-direction: column; }
    .ch-name { font-size: .85rem; font-weight: 700; line-height: 1.3; }
    .ch-sub { font-size: .75rem; color: #64748b; }

    /* Main Content */
    .main-content { flex: 1; min-width: 0; }
    .chapter-section { display: none; }
    .chapter-section.active { display: block; animation: fadeIn .2s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

    .chapter-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px; background: white; border: 1px solid var(--border); border-radius: 16px; padding: 20px; }
    .ch-badge { width: 44px; height: 44px; border-radius: 12px; background: var(--brand); color: white; font-weight: 900; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .chapter-header-info { flex: 1; }
    .unit-tag { display: inline-block; font-size: .75rem; font-weight: 700; text-transform: uppercase; color: var(--brand-text); background: var(--brand-light); padding: 2px 8px; border-radius: 4px; margin-bottom: 4px; letter-spacing: .04em; }
    .chapter-header-info h2 { font-size: 1.35rem; font-weight: 800; color: var(--navy); line-height: 1.3; margin-bottom: 4px; }
    .chapter-header-info p { font-size: .85rem; color: var(--slate); }

    .concept-card { background: white; border: 1px solid var(--border); border-radius: 16px; padding: 20px; margin-bottom: 24px; }
    .concept-header { font-size: .95rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
    .concept-list { padding-left: 20px; font-size: .88rem; color: #334155; display: flex; flex-direction: column; gap: 6px; }

    .ex-div { font-size: 1rem; font-weight: 800; color: var(--navy); padding: 10px 16px; background: #e2e8f0; border-radius: 8px; margin: 28px 0 16px; border-left: 4px solid var(--brand); }

    /* Question Cards */
    .q-card { background: white; border: 1px solid var(--border); border-radius: 14px; margin-bottom: 14px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,.02); transition: all .2s; }
    .q-head { display: flex; align-items: center; gap: 14px; padding: 16px 20px; cursor: pointer; user-select: none; flex-wrap: wrap; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-weight: 800; font-size: .8rem; padding: 4px 10px; border-radius: 6px; flex-shrink: 0; }
    .q-text { font-size: .95rem; font-weight: 700; color: var(--navy); flex: 1; min-width: 200px; line-height: 1.4; }
    .q-cat { font-size: .72rem; font-weight: 700; color: #1e40af; background: #dbeafe; border: 1px solid #bfdbfe; padding: 3px 8px; border-radius: 4px; white-space: nowrap; flex-shrink: 0; }
    .q-marks { font-size: .75rem; font-weight: 700; color: var(--accent); background: #fff7ed; padding: 3px 8px; border-radius: 4px; border: 1px solid #fed7aa; flex-shrink: 0; }
    .q-toggle { width: 24px; height: 24px; color: var(--slate); transition: transform .2s; flex-shrink: 0; }
    .q-card.open .q-toggle { transform: rotate(45deg); }
    .q-answer { display: none; padding: 0 20px 20px; border-top: 1px solid #f1f5f9; background: #fafafa; }
    .q-card.open .q-answer { display: block; }

    .answer-box { padding-top: 16px; }
    .answer-label { font-size: .78rem; font-weight: 800; text-transform: uppercase; color: var(--brand); margin-bottom: 8px; letter-spacing: .04em; }
    .answer-text { font-size: .92rem; color: #1e293b; line-height: 1.7; }
    .answer-text ul, .answer-text ol { margin: 8px 0 8px 20px; }
    .answer-text li { margin-bottom: 4px; }

    /* Marking Scheme */
    .marking-scheme { margin-top: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; font-size: .8rem; }
    .marking-title { font-weight: 700; color: var(--navy); margin-bottom: 6px; }
    .marking-row { display: flex; justify-content: space-between; border-bottom: 1px solid #f1f5f9; padding: 4px 0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: var(--slate); }
    .marking-marks { font-weight: 700; color: var(--brand); }

    /* Competency Card */
    .cbq-card { background: linear-gradient(to right, #eff6ff, #f0fdf4); border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 22px; margin: 30px 0 20px; }
    .cbq-badge { display: inline-block; font-size: .75rem; font-weight: 800; text-transform: uppercase; color: #1e40af; background: #dbeafe; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; letter-spacing: .04em; }

    /* Responsive */
    @media (max-width: 900px) {
      .main-layout { flex-direction: column; }
      .sidebar { width: 100%; height: auto; position: static; }
      .book-tab-bar { top: 57px; }
      .breadcrumb-bar { top: 115px; }
    }
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
        <div class="nav-dropdown">
          <a href="ncert-solutions.html" style="color:white;text-decoration:none;font-size:0.9rem;font-weight:600;display:flex;align-items:center;gap:4px;">NCERT Solutions <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top:2px;"><path d="m6 9 6 6 6-6"/></svg></a>
          <div class="nav-dropdown-content">
            <a href="ncert-solutions.html" style="font-weight:700;color:#c2410c;">📚 All NCERT Hub (2026-27)</a>
            <a href="ncert-solutions-class-5-english.html" style="font-weight:700;color:#2563eb;background:#eff6ff;">Class 5 English 📖 (Active)</a>
            <a href="ncert-solutions-class-5-hindi.html">Class 5 Hindi 📖</a>
            <a href="ncert-solutions-class-5-maths.html">Class 5 Maths 📐</a>
            <a href="ncert-solutions-class-5-evs.html">Class 5 EVS 🌿</a>
            <a href="ncert-solutions-class-6-english.html">Class 6 English 📖</a>
            <a href="ncert-solutions-class-6-science.html">Class 6 Science 🔬</a>
          </div>
        </div>
        <a href="mock.html" class="nav-link">Mock Tests</a>
        <a href="dashboard.html" class="btn-login">Dashboard</a>
      </div>
    </div>
  </nav>

  <!-- Secondary Breadcrumbs & Class 5 Subject Switcher -->
  <div class="ncert-breadcrumb-nav">
    <div class="ncert-bc-container">
      <ul class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html#class5">Class 5</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">English (Santoor & Marigold)</li>
      </ul>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Class 5 Subjects:</span>
        <a href="ncert-solutions-class-5-english.html" class="ncert-bc-pill active">English (Santoor / Marigold) 📖</a>
        <a href="ncert-solutions-class-5-hindi.html" class="ncert-bc-pill">Hindi (वीणा / रिमझिम) 📖</a>
        <a href="ncert-solutions-class-5-maths.html" class="ncert-bc-pill">Maths (Maths Mela & Math-Magic) 📐</a>
        <a href="ncert-solutions-class-5-evs.html" class="ncert-bc-pill">The World Around Us (Our Wondrous World) 🌿</a>
      </div>
    </div>
  </div>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <div style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;color:#93c5fd;margin-bottom:8px;">CBSE Academic Session 2026-27 • 100% Comprehensive Coverage</div>
    <h1>NCERT Solutions for Class 5 English</h1>
    <p>Complete step-by-step textbook solutions covering both <strong>Santoor (New NEP 2020 Textbook)</strong> and <strong>Marigold (Classic CBSE Curriculum)</strong>. Features labeled diagrams, CBSE step rubrics, and NEP 2020 competency questions.</p>
    <div class="hero-badges">
      <span class="hero-badge">📘 Book 1: Santoor (10 Chapters)</span>
      <span class="hero-badge">📙 Book 2: Marigold (10 Units / 20 Chapters)</span>
      <span class="hero-badge">✨ 100% Questions Solved</span>
      <span class="hero-badge">🎯 CBSE Marking Rubrics</span>
      <span class="hero-badge">💡 Free Access &bull; Zero Paywall</span>
    </div>
  </header>

  <!-- Book Switcher Tab Bar -->
  <div class="book-tab-bar">
    <div class="book-tab-container">
      <button class="btn-book-tab active" id="btnSantoor" onclick="switchBook('santoor')">
        <span>📘 Santoor</span>
        <span class="badge">New NEP 2020 (Ch 1-10)</span>
      </button>
      <button class="btn-book-tab" id="btnMarigold" onclick="switchBook('marigold')">
        <span>📙 Marigold</span>
        <span class="badge">Classic CBSE (Units 1-10)</span>
      </button>
    </div>
  </div>

  <!-- Breadcrumb Quick Jump Chips Bar -->
  <div class="breadcrumb-bar">
    <div style="max-width:1400px;margin:0 auto;">
      <div class="breadcrumb-label" id="chipBarLabel">Quick Chapter Jump — Santoor:</div>
      <div class="breadcrumb-chips" id="chipsSantoor">
        ${santoorChips}
      </div>
      <div class="breadcrumb-chips" id="chipsMarigold" style="display:none;">
        ${marigoldChips}
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="main-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">
        <span id="sidebarTitleText">📘 Santoor Chapters</span>
        <span style="font-size:0.75rem;background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:12px;" id="sidebarCount">10 Chapters</span>
      </div>
      <input type="text" class="search-box" id="chapterSearch" placeholder="Search chapters..." oninput="filterChapters(this.value)">
      <ul class="chapter-nav" id="navSantoor">
        ${santoorSidebar}
      </ul>
      <ul class="chapter-nav" id="navMarigold" style="display:none;">
        ${marigoldSidebar}
      </ul>
    </aside>

    <!-- Content Sections -->
    <main class="main-content">
      <div id="containerSantoor">
        ${santoorSections}
      </div>
      <div id="containerMarigold" style="display:none;">
        ${marigoldSections}
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer style="background:#0f172a;color:#94a3b8;padding:30px 20px;text-align:center;font-size:0.85rem;border-top:1px solid #1e293b;margin-top:60px;">
    <p>© 2026 OlympiadQuiz — 100% Free Educational Resources &bull; <a href="ncert-solutions.html" style="color:#3b82f6;">NCERT Solutions Hub</a> &bull; <a href="ncert-solutions-class-5-maths.html" style="color:#3b82f6;">Class 5 Maths</a> &bull; <a href="ncert-solutions-class-5-evs.html" style="color:#3b82f6;">Class 5 EVS</a></p>
  </footer>

  <script>
    let currentBook = 'santoor';

    function switchBook(book) {
      currentBook = book;
      const isSantoor = (book === 'santoor');

      // Update tabs
      document.getElementById('btnSantoor').classList.toggle('active', isSantoor);
      document.getElementById('btnMarigold').classList.toggle('active', !isSantoor);

      // Update chips & sidebars
      document.getElementById('chipsSantoor').style.display = isSantoor ? 'flex' : 'none';
      document.getElementById('chipsMarigold').style.display = isSantoor ? 'none' : 'flex';
      document.getElementById('navSantoor').style.display = isSantoor ? 'flex' : 'none';
      document.getElementById('navMarigold').style.display = isSantoor ? 'none' : 'flex';

      document.getElementById('containerSantoor').style.display = isSantoor ? 'block' : 'none';
      document.getElementById('containerMarigold').style.display = isSantoor ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isSantoor ? 'Quick Chapter Jump — Santoor:' : 'Quick Unit Jump — Marigold:';
      document.getElementById('sidebarTitleText').innerText = isSantoor ? '📘 Santoor Chapters' : '📙 Marigold Units';
      document.getElementById('sidebarCount').innerText = isSantoor ? '10 Chapters' : '10 Units';

      // Show first chapter of that book
      const defaultId = isSantoor ? 'ch_s1' : 'ch_m1';
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
      const activeNavId = (currentBook === 'santoor') ? 'navSantoor' : 'navMarigold';
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
      document.getElementById('progressBar').style.width = scrolled + '%';
    });

    // Handle hash on initial load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('ch_m')) {
          switchBook('marigold');
          showChapter(hash);
          return;
        } else if (hash.startsWith('ch_s')) {
          switchBook('santoor');
          showChapter(hash);
          return;
        }
      }
      // default: Santoor Chapter 1
      showChapter('ch_s1');
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-5-english.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-5-english.html (${htmlContent.length} bytes)!`);
