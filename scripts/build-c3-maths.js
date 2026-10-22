// Generator for NCERT Class 3 Mathematics Solutions (100% Question Coverage: Maths Mela + Math-Magic)
// Fully Aligned with Official NCERT Curriculum (New NEP 2020 Maths Mela + Classic CBSE Math-Magic)
const fs = require('fs');
const path = require('path');

const { mathsMelaChapters } = require('./data-c3-maths/mathsMelaData.js');
const { mathMagicChapters } = require('./data-c3-maths/mathMagicData.js');

console.log("=== BUILDING NCERT CLASS 3 MATHEMATICS SOLUTIONS (MATHS MELA + MATH-MAGIC) ===");
console.log(`Loaded ${mathsMelaChapters.length} Maths Mela Chapters and ${mathMagicChapters.length} Math-Magic Chapters`);

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
        <div class="answer-label">Step-by-Step Model Answer &amp; Solution:</div>
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
        <h2>Chapter ${ch.num}: ${ch.title}</h2>
        <p>${ch.subtitle}</p>
      </div>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Chapter Highlights, Mathematical Ideas &amp; Key Properties</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>
    </div>

    <!-- Complete Exercise Questions & Solutions -->
    <div class="ex-div">📖 NCERT Textbook Exercise Solutions &amp; Step-by-Step Working (100% Coverage)</div>
    <div class="questions-container">
      ${questionsHtml}
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #2563eb;"><strong>Real-World Math Context:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Analytical Task:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #bfdbfe;font-size:0.8rem;font-weight:700;color:#1d4ed8;">CBSE Assessment Rubric: ${ch.cbq.rubric}</div>
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const melaSections = mathsMelaChapters.map(ch => renderChapterSection(ch, "mela")).join('\n');
const magicSections = mathMagicChapters.map(ch => renderChapterSection(ch, "magic")).join('\n');

const melaChips = mathsMelaChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </button>
`).join('');

const magicChips = mathMagicChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </button>
`).join('');

const melaSidebar = mathsMelaChapters.map(ch => `
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

const magicSidebar = mathMagicChapters.map(ch => `
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
  <title>NCERT Solutions for Class 3 Maths (Maths Mela &amp; Math-Magic) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Complete Class 3 NCERT Mathematics Solutions covering both textbooks: New NEP 2020 Maths Mela (14 Chapters) and Math-Magic (14 Chapters). Step-by-step model solutions, vector diagrams, CBSE marking rubrics, and NEP 2020 competency case studies.">
  <meta name="keywords" content="ncert solutions class 3 maths, maths mela class 3 solutions, math magic class 3 ncert, cbse class 3 maths 2026-27, where to look from ncert, fun with numbers class 3, give and take class 3, long and short class 3, shapes and designs, time goes on, who is heavier, how many times, play with patterns, jugs and mugs, can we share, smart charts, rupees and paise">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-3-maths.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-3-maths.html">
  <meta property="og:title" content="NCERT Solutions for Class 3 Maths (Maths Mela &amp; Math-Magic) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% question coverage for Class 3 Mathematics across all 28 chapters of Maths Mela and Math-Magic with vector diagrams, CBSE marking schemes and NEP 2020 competency questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 3 Maths (Maths Mela &amp; Math-Magic) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook exercise solutions for Class 3 Mathematics across Maths Mela and Math-Magic with diagrams, CBSE marking rubrics, and case studies.">
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
      { "@type": "ListItem", "position": 4, "name": "Mathematics", "item": "https://olympiadquiz.org/ncert-solutions-class-3-maths.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 3 Mathematics (Maths Mela & Math-Magic) CBSE 2026-27",
    "description": "Comprehensive 100% textbook exercise solutions for NCERT Class 3 Maths covering all 14 chapters of Maths Mela and 14 chapters of Math-Magic with CBSE step rubrics, diagrams, and competency-based questions.",
    "educationalLevel": "CBSE Class 3",
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
        "name": "Which textbooks are covered under Class 3 NCERT Mathematics on OlympiadQuiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both official NCERT Class 3 Mathematics textbooks are fully covered: the new NEP 2020 textbook 'Maths Mela' (14 chapters) and the classic CBSE textbook 'Math-Magic' (14 chapters)."
        }
      },
      {
        "@type": "Question",
        "name": "Are labeled geometric diagrams and visual models included in these solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every single chapter features high-resolution vector SVG diagrams illustrating 2D/3D shapes, place value blocks, ruler measurements, clock angles, weight balances, and bar charts."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions contain official CBSE step-by-step marking rubrics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every question provides a transparent step marking scheme showing exactly how marks are awarded for given data, formulas, intermediate steps, and unit conclusions."
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
      --brand-dark: #1d4ed8;
      --brand-light: #eff6ff;
      --brand-text: #1e40af;
      --navy: #0f172a;
      --slate: #475569;
      --border: #bfdbfe;
      --card-bg: #ffffff;
      --bg: #f8fafc;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, sans-serif; background: var(--bg); color: #1e293b; line-height: 1.6; }
    
    /* Top Progress Bar */
    #progressBar { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #2563eb, #3b82f6); width: 0%; z-index: 1000; transition: width 0.1s ease; }

    /* Header & Navigation */
    .site-header { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 12px 24px; position: sticky; top: 0; z-index: 99; }
    .header-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
    .logo { color: #ffffff; text-decoration: none; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px; }
    .logo span { color: #ff6b00; }
    .header-links { display: flex; align-items: center; gap: 16px; }
    .header-links a { color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: color 0.2s; }
    .header-links a:hover, .header-links a.active { color: #ffffff; }

    /* Breadcrumbs Bar */
    .breadcrumb-bar { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 10px 24px; font-size: 0.85rem; }
    .breadcrumb-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; gap: 8px; color: #64748b; flex-wrap: wrap; }
    .breadcrumb-inner a { color: #2563eb; text-decoration: none; font-weight: 600; }
    .breadcrumb-inner a:hover { text-decoration: underline; }
    .breadcrumb-inner span.sep { color: #cbd5e1; }
    .breadcrumb-inner span.cur { color: #0f172a; font-weight: 700; }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%); color: #ffffff; padding: 48px 24px; text-align: center; }
    .hero-inner { max-width: 900px; margin: 0 auto; }
    .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 999px; padding: 4px 14px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
    .hero-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 900; line-height: 1.2; margin-bottom: 12px; }
    .hero-desc { font-size: 1rem; color: #dbeafe; max-width: 760px; margin: 0 auto 24px; line-height: 1.6; }
    
    /* Dual Track Toggle */
    .book-toggle-bar { display: inline-flex; background: rgba(15, 23, 42, 0.4); border-radius: 12px; padding: 4px; gap: 4px; margin-top: 8px; }
    .track-btn { border: none; background: transparent; color: #e2e8f0; padding: 10px 22px; border-radius: 9px; font-size: 0.88rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; gap: 8px; }
    .track-btn.active { background: #ffffff; color: #1e3a8a; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }

    /* Chip Scrollbar */
    .chip-bar { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 10px 24px; position: sticky; top: 57px; z-index: 90; box-shadow: 0 2px 4px rgba(0,0,0,0.03); }
    .chip-bar-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; gap: 12px; }
    .chip-label { font-size: 0.8rem; font-weight: 700; color: #64748b; white-space: nowrap; flex-shrink: 0; }
    .chips-wrapper { display: flex; align-items: center; gap: 6px; overflow-x: auto; padding: 2px 0; scrollbar-width: thin; }
    .chips-wrapper::-webkit-scrollbar { height: 4px; }
    .chips-wrapper::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .bc-chip { background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 999px; padding: 5px 14px; font-size: 0.8rem; font-weight: 600; color: #334155; white-space: nowrap; cursor: pointer; transition: all 0.15s ease; flex-shrink: 0; display: inline-flex; align-items: center; gap: 6px; }
    .bc-chip .bc-n { background: #cbd5e1; color: #0f172a; width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800; }
    .bc-chip:hover { background: #e2e8f0; }
    .bc-chip.active { background: #2563eb; color: #ffffff; border-color: #2563eb; }
    .bc-chip.active .bc-n { background: #ffffff; color: #2563eb; }

    /* Main Layout */
    .content-layout { max-width: 1400px; margin: 28px auto; padding: 0 24px; display: grid; grid-template-columns: 290px 1fr; gap: 32px; align-items: start; }
    @media (max-width: 960px) {
      .content-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
    }

    /* Sidebar */
    .sidebar { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; position: sticky; top: 120px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .sidebar-head { font-size: 0.95rem; font-weight: 800; color: #0f172a; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; }
    .sidebar-search { width: 100%; border: 1.5px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; font-size: 0.85rem; margin-bottom: 12px; outline: none; }
    .sidebar-search:focus { border-color: #2563eb; }
    .chapter-nav { list-style: none; max-height: calc(100vh - 280px); overflow-y: auto; padding-right: 4px; }
    .chapter-nav li { margin-bottom: 4px; }
    .chapter-nav a { display: flex; align-items: flex-start; gap: 10px; padding: 8px 10px; border-radius: 8px; text-decoration: none; color: #334155; font-size: 0.82rem; font-weight: 600; line-height: 1.35; transition: all 0.15s ease; }
    .chapter-nav a:hover { background: #f8fafc; color: #2563eb; }
    .chapter-nav a.active { background: #eff6ff; color: #1e40af; font-weight: 700; border-left: 3px solid #2563eb; }
    .chapter-nav .ch-num { background: #f1f5f9; color: #64748b; min-width: 20px; height: 20px; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800; margin-top: 1px; }
    .chapter-nav a.active .ch-num { background: #2563eb; color: #ffffff; }
    .chapter-nav .ch-meta { display: flex; flex-direction: column; }
    .chapter-nav .ch-sub { font-size: 0.72rem; color: #94a3b8; font-weight: 500; margin-top: 2px; }

    /* Chapter Content Sections */
    .chapter-section { display: none; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); margin-bottom: 24px; }
    .chapter-section.active { display: block; animation: fadeIn 0.25s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    .chapter-header { display: flex; align-items: flex-start; gap: 18px; margin-bottom: 24px; padding-bottom: 18px; border-bottom: 2px solid #f1f5f9; }
    .ch-badge { width: 54px; height: 54px; border-radius: 14px; background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 900; flex-shrink: 0; }
    .chapter-header-info h2 { font-size: 1.55rem; font-weight: 800; color: #0f172a; line-height: 1.25; margin-bottom: 4px; }
    .chapter-header-info p { color: #64748b; font-size: 0.95rem; }
    .unit-tag { display: inline-block; background: #dbeafe; color: #1e40af; border-radius: 6px; padding: 2px 8px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; margin-bottom: 6px; }

    /* Concept Card */
    .concept-card { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 20px; margin-bottom: 28px; }
    .concept-header { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.95rem; color: #1e40af; margin-bottom: 12px; }
    .concept-list { list-style: none; }
    .concept-list li { position: relative; padding-left: 20px; margin-bottom: 8px; font-size: 0.88rem; color: #334155; line-height: 1.5; }
    .concept-list li::before { content: "•"; position: absolute; left: 6px; color: #2563eb; font-weight: 900; }

    /* Exercise Header */
    .ex-div { background: #eff6ff; border-left: 4px solid #2563eb; padding: 12px 18px; border-radius: 0 10px 10px 0; font-weight: 800; font-size: 0.98rem; color: #1e3a8a; margin-bottom: 20px; }

    /* Question Cards Accordion */
    .q-card { border: 1.5px solid #e2e8f0; border-radius: 14px; margin-bottom: 14px; overflow: hidden; transition: border-color 0.2s; }
    .q-card:hover { border-color: #cbd5e1; }
    .q-head { background: #ffffff; padding: 16px 20px; display: flex; align-items: center; gap: 12px; cursor: pointer; user-select: none; }
    .q-num { background: #f1f5f9; color: #1e293b; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 800; flex-shrink: 0; }
    .q-text { font-size: 0.92rem; font-weight: 700; color: #0f172a; flex: 1; line-height: 1.4; }
    .q-cat { background: #f1f5f9; color: #475569; font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; white-space: nowrap; }
    .q-marks { background: #fef3c7; color: #92400e; font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; white-space: nowrap; }
    .q-toggle { width: 18px; height: 18px; color: #64748b; transition: transform 0.2s ease; flex-shrink: 0; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: #2563eb; }

    .q-answer { display: none; padding: 0 20px 20px; background: #ffffff; }
    .q-card.open .q-answer { display: block; }
    .answer-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-top: 4px; }
    .answer-label { font-size: 0.78rem; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px; }
    .answer-text { font-size: 0.9rem; color: #1e293b; line-height: 1.6; margin-bottom: 14px; }
    
    /* Marking Scheme */
    .marking-scheme { background: #ffffff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 12px 16px; margin-top: 12px; }
    .marking-title { font-size: 0.8rem; font-weight: 800; color: #1e40af; margin-bottom: 8px; }
    .marking-row { display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: #334155; padding: 3px 0; border-bottom: 1px dashed #e2e8f0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-marks { font-weight: 800; color: #047857; background: #d1fae5; padding: 1px 6px; border-radius: 4px; }

    /* CBQ Card */
    .cbq-card { background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%); border: 1.5px solid #bfdbfe; border-radius: 16px; padding: 22px; margin-top: 28px; }
    .cbq-badge { display: inline-block; background: #2563eb; color: #ffffff; border-radius: 6px; padding: 3px 10px; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; }

    /* Footer */
    .site-footer { background: #0f172a; color: #94a3b8; padding: 40px 24px; text-align: center; font-size: 0.85rem; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 48px; }
    .site-footer a { color: #38bdf8; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div id="progressBar"></div>

  <!-- Header -->
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <span>Olympiad</span>Quiz
      </a>
      <nav class="header-links">
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
      <span class="cur">Mathematics</span>
    </div>
  </div>

  <!-- Hero Banner -->
  <section class="hero-banner">
    <div class="hero-inner">
      <div class="hero-badge">CBSE 2026-27 Session • 100% NCERT Solutions</div>
      <h1 class="hero-title">NCERT Class 3 Mathematics Solutions</h1>
      <p class="hero-desc">Complete chapter-wise textbook exercise solutions, labeled vector diagrams, CBSE step marking schemes, and NEP 2020 competency-based case studies across both official books.</p>
      
      <!-- Track Switcher -->
      <div class="book-toggle-bar">
        <button id="btnMela" class="track-btn active" onclick="switchBook('mela')">
          📘 Maths Mela (New NCF 2023 - 14 Chapters)
        </button>
        <button id="btnMagic" class="track-btn" onclick="switchBook('magic')">
          📙 Math-Magic (Classic CBSE - 14 Chapters)
        </button>
      </div>
    </div>
  </section>

  <!-- Sticky Chapter Chips Bar -->
  <div class="chip-bar">
    <div class="chip-bar-inner">
      <span class="chip-label" id="chipBarLabel">Quick Jump To Chapter — Maths Mela (NEP 2020):</span>
      <div class="chips-wrapper" id="chipsMela">
        ${melaChips}
      </div>
      <div class="chips-wrapper" id="chipsMagic" style="display:none;">
        ${magicChips}
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="content-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-head">
        <span id="sidebarTitleText">📘 Maths Mela (Chapters)</span>
        <span id="sidebarCount" style="font-size:0.75rem;background:#eff6ff;color:#1e40af;padding:2px 8px;border-radius:6px;">14 Chapters</span>
      </div>
      <input type="text" class="sidebar-search" placeholder="Search chapters..." oninput="filterChapters(this.value)">
      <ul class="chapter-nav" id="navMela">
        ${melaSidebar}
      </ul>
      <ul class="chapter-nav" id="navMagic" style="display:none;">
        ${magicSidebar}
      </ul>
    </aside>

    <!-- Content Containers -->
    <main class="main-content">
      <div id="containerMela">
        ${melaSections}
      </div>
      <div id="containerMagic" style="display:none;">
        ${magicSections}
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <p>© 2026 OlympiadQuiz — <a href="index.html">Home</a> · <a href="ncert-solutions.html">NCERT Solutions Hub</a> · <a href="ncert-solutions-class-3.html">Class 3 Solutions</a></p>
  </footer>

  <script>
    let currentBook = 'mela';

    function switchBook(book) {
      currentBook = book;
      const isMela = (book === 'mela');

      // Update tabs
      document.getElementById('btnMela').classList.toggle('active', isMela);
      document.getElementById('btnMagic').classList.toggle('active', !isMela);

      // Update chips & sidebars
      document.getElementById('chipsMela').style.display = isMela ? 'flex' : 'none';
      document.getElementById('chipsMagic').style.display = isMela ? 'none' : 'flex';
      document.getElementById('navMela').style.display = isMela ? 'flex' : 'none';
      document.getElementById('navMagic').style.display = isMela ? 'none' : 'flex';

      document.getElementById('containerMela').style.display = isMela ? 'block' : 'none';
      document.getElementById('containerMagic').style.display = isMela ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isMela ? 'Quick Jump To Chapter — Maths Mela (NEP 2020):' : 'Quick Jump To Chapter — Math-Magic:';
      document.getElementById('sidebarTitleText').innerText = isMela ? '📘 Maths Mela (Chapters)' : '📙 Math-Magic (Chapters)';
      document.getElementById('sidebarCount').innerText = isMela ? '14 Chapters' : '14 Chapters';

      // Show first chapter of that book
      const defaultId = isMela ? 'ch_mm1' : 'ch_mmg1';
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
      const activeNavId = (currentBook === 'mela') ? 'navMela' : 'navMagic';
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
        if (hash.startsWith('ch_mmg')) {
          switchBook('magic');
          showChapter(hash);
          return;
        } else if (hash.startsWith('ch_mm')) {
          switchBook('mela');
          showChapter(hash);
          return;
        }
      }
      // default: Maths Mela Chapter 1
      showChapter('ch_mm1');
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-3-maths.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-3-maths.html (${htmlContent.length} bytes)!`);
