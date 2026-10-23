// Generator for NCERT Class 5 The World Around Us / EVS Solutions
// Textbooks: Our Wondrous World (NEP 2020: 10 Chapters) + Looking Around (Classic CBSE: 22 Chapters)
// Fully Aligned with Official NCERT Curriculum & Tiwari Academy standards (CBSE 2026-27 Session)
const fs = require('fs');
const path = require('path');

const { wondrousWorldChapters } = require('./data-c5-evs/wondrousWorldData.js');
const { lookingAroundChapters } = require('./data-c5-evs/lookingAroundData.js');

console.log("=== BUILDING NCERT CLASS 5 THE WORLD AROUND US / EVS SOLUTIONS ===");
console.log(`Loaded ${wondrousWorldChapters.length} Our Wondrous World Chapters and ${lookingAroundChapters.length} Looking Around Chapters`);

// -------------------------------------------------------------
// PART 1: RENDERING FUNCTIONS
// -------------------------------------------------------------

function renderQuestionCard(qObj, idx, prefix) {
  const qId = `q_${prefix}_${idx}`;
  const rubricRows = (qObj.rubric || []).map(r => `
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
      <span class="q-marks">${qObj.marks || 3} Marks</span>
      <svg class="q-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">Step-by-Step Model Answer &amp; Explanation:</div>
        <div class="answer-text">${qObj.ans}</div>
        <div class="marking-scheme">
          <div class="marking-title">📋 CBSE Official Step Marking Rubric (${qObj.marks || 3} Marks):</div>
          ${rubricRows}
        </div>
      </div>
    </div>
  </div>`;
}

function renderChapterSection(ch, bookKey) {
  const prefix = `${bookKey}_${ch.num}`;
  const conceptsHtml = (ch.concepts || []).map(c => `<li>${c}</li>`).join('');
  const questionsHtml = (ch.questions || []).map((q, idx) => renderQuestionCard(q, idx, prefix)).join('');

  const cbqHtml = ch.cbq ? `
    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title || 'Case Analysis'}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #059669;"><strong>Real-World Case Scenario:</strong> ${ch.cbq.text || ch.cbq.story || ''}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Analytical Task:</strong> ${ch.cbq.question || ch.cbq.q || ''}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer || ch.cbq.ans || ''}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #a7f3d0;font-size:0.8rem;font-weight:700;color:#047857;">CBSE Assessment Rubric: ${ch.cbq.rubric || ch.cbq.marking || '2 Marks for factual reasoning, 2 Marks for environmental application'}</div>
    </div>` : '';

  return `
  <section class="chapter-section" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <span class="unit-tag">${ch.unit}</span>
        <h2>Chapter ${ch.num}: ${ch.title} ${ch.hindiTitle ? `<span style="font-weight:500;font-size:0.85em;color:#e2e8f0;">(${ch.hindiTitle})</span>` : ''}</h2>
        <p>${ch.subtitle}</p>
      </div>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Chapter Highlights, Environmental Insights &amp; Learning Objectives</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      ${ch.svg ? `
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>` : ''}
    </div>

    <!-- Complete Exercise Questions & Solutions -->
    <div class="ex-div">📖 NCERT Textbook Exercise Solutions, In-Text Questions &amp; Activities (100% Coverage)</div>
    <div class="questions-container">
      ${questionsHtml}
    </div>

    ${cbqHtml}
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const wondrousSections = wondrousWorldChapters.map(ch => renderChapterSection(ch, "oww")).join('\n');
const lookingSections = lookingAroundChapters.map(ch => renderChapterSection(ch, "la")).join('\n');

const wondrousChips = wondrousWorldChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </button>
`).join('');

const lookingChips = lookingAroundChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </button>
`).join('');

const wondrousSidebar = wondrousWorldChapters.map(ch => `
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

const lookingSidebar = lookingAroundChapters.map(ch => `
  <li>
    <a href="javascript:void(0)" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">Ch ${ch.num}: ${ch.title}</span>
        <span class="ch-sub">${ch.hindiTitle || ch.unit}</span>
      </div>
    </a>
  </li>
`).join('');

// -------------------------------------------------------------
// PART 3: FULL PAGE HTML TEMPLATE
// -------------------------------------------------------------

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 5 EVS &amp; The World Around Us CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Free NCERT Class 5 EVS &amp; The World Around Us solutions for both official textbooks: New NEP 2020 Our Wondrous World (10 Chapters) &amp; Classic CBSE Looking Around / आस-पास (22 Chapters). Complete with step-by-step model answers, CBSE marking schemes, SVG diagrams, and NEP 2020 CBQs.">
  <meta name="keywords" content="ncert solutions class 5 evs, class 5 our wondrous world solutions, class 5 looking around ncert, aas paas class 5 solutions, cbse class 5 evs solutions 2026-27, tiwari academy class 5 evs solutions, free ncert class 5 evs pdf">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-5-evs.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-5-evs.html">
  <meta property="og:title" content="NCERT Solutions for Class 5 EVS &amp; The World Around Us CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% complete chapter-wise NCERT solutions for Class 5 Environmental Studies covering both Our Wondrous World and Looking Around textbooks.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 5 EVS CBSE 2026-27 | OlympiadQuiz">
  <meta name="twitter:description" content="Complete textbook solutions for Class 5 EVS across both official NCERT books with step marking schemes and vector diagrams.">
  <meta name="twitter:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 5", "item": "https://olympiadquiz.org/ncert-solutions-class-5.html" },
      { "@type": "ListItem", "position": 4, "name": "The World Around Us / EVS", "item": "https://olympiadquiz.org/ncert-solutions-class-5-evs.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 5 The World Around Us & EVS (Our Wondrous World & Looking Around) CBSE 2026-27",
    "description": "Complete chapter-wise NCERT solutions for Class 5 EVS covering 10 chapters of Our Wondrous World and 22 chapters of Looking Around with CBSE step rubrics and diagrams.",
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
        "name": "Which NCERT EVS textbooks are prescribed for CBSE Class 5 in 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under NEP 2020 / NCF-SE 2023, the new NCERT textbook is 'Our Wondrous World' (10 chapters). In addition, CBSE schools transitioning from the classic curriculum use 'Looking Around / आस-पास' (22 chapters). OlympiadQuiz provides 100% verified solutions for both tracks."
        }
      },
      {
        "@type": "Question",
        "name": "Are in-text experiments and observation activities included in these solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every single in-text question, experiment observation log, Think and Discuss prompt, and end-of-chapter exercise is solved with comprehensive scientific explanations matching Tiwari Academy standards."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions include official CBSE step marking rubrics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every question provides a transparent CBSE-style step rubric allocating marks for definitions, conceptual principles, environmental impacts, and practical daily life solutions."
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
      --navy: #0f172a;
      --slate: #475569;
      --border: #e2e8f0;
      --green: #059669;
      --green-dark: #065f46;
      --green-light: #ecfdf5;
      --bg: #f8fafc;
      --surface: #ffffff;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: var(--bg); color: #1e293b; line-height: 1.6; }

    /* Progress bar */
    .progress-bar-wrap { position: fixed; top: 0; left: 0; width: 100%; height: 3px; background: rgba(0,0,0,0.05); z-index: 1000; }
    .progress-bar { height: 100%; width: 0%; background: linear-gradient(90deg, #10b981, #059669); }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid #1e293b; padding: 0 20px; position: sticky; top: 0; z-index: 99; }
    .navbar-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 60px; }
    .navbar-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 800; font-size: 1.15rem; }
    .navbar-logo span span { color: #f97316; }
    .navbar-links { display: flex; gap: 20px; align-items: center; }
    .nav-link { color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: color 0.2s; }
    .nav-link:hover, .nav-link.active { color: white; }
    .nav-dropdown { position: relative; display: inline-block; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: #1e293b; min-width: 220px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); border-radius: 8px; padding: 8px 0; z-index: 100; border: 1px solid #334155; }
    .nav-dropdown:hover .nav-dropdown-content { display: block; }
    .nav-dropdown-content a { color: #cbd5e1; padding: 8px 16px; text-decoration: none; display: block; font-size: 0.85rem; font-weight: 500; transition: all 0.2s; }
    .nav-dropdown-content a:hover { background: #334155; color: #34d399; padding-left: 20px; }
    .btn-login { background: #059669; color: white; padding: 6px 16px; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: background 0.2s; }
    .btn-login:hover { background: #047857; }

    /* Secondary Breadcrumbs */
    .ncert-breadcrumb-nav { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 12px 20px; font-size: 0.88rem; }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
    .ncert-bc-list { list-style: none; display: flex; align-items: center; gap: 8px; margin: 0; padding: 0; }
    .ncert-bc-list a { color: #059669; text-decoration: none; font-weight: 500; }
    .ncert-bc-list a:hover { text-decoration: underline; }
    .ncert-bc-sep { color: #94a3b8; }
    .ncert-bc-current { color: #475569; font-weight: 700; }

    /* Hero Banner */
    .hero { background: linear-gradient(135deg, #064e3b 0%, #022c22 100%); color: white; padding: 48px 20px 40px; text-align: center; border-bottom: 1px solid #065f46; position: relative; }
    .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(52,211,153,0.18); border: 1px solid rgba(52,211,153,0.35); color: #a7f3d0; padding: 6px 16px; border-radius: 9999px; font-size: 0.82rem; font-weight: 700; margin-bottom: 16px; }
    .hero h1 { font-size: clamp(1.8rem, 4vw, 2.7rem); font-weight: 900; letter-spacing: -0.02em; margin-bottom: 12px; }
    .hero p { font-size: 1.05rem; max-width: 820px; margin: 0 auto 24px; color: #d1fae5; line-height: 1.6; }

    /* Book Switcher Tabs */
    .book-switcher { display: flex; justify-content: center; gap: 14px; max-width: 760px; margin: 0 auto; flex-wrap: wrap; }
    .btn-book-tab { flex: 1; min-width: 260px; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.2); color: white; padding: 14px 20px; border-radius: 14px; cursor: pointer; text-align: left; transition: all 0.25s ease; display: flex; align-items: center; gap: 12px; }
    .btn-book-tab:hover { background: rgba(255,255,255,0.14); border-color: #34d399; }
    .btn-book-tab.active { background: #ffffff; color: #064e3b; border-color: #ffffff; box-shadow: 0 10px 25px rgba(0,0,0,0.25); }
    .btn-book-tab.active .book-tag { background: #ecfdf5; color: #065f46; }
    .book-tab-icon { font-size: 1.8rem; }
    .book-tab-info { flex: 1; }
    .book-tab-title { font-weight: 800; font-size: 1.05rem; display: block; }
    .book-tab-sub { font-size: 0.78rem; opacity: 0.85; display: block; margin-top: 2px; }
    .book-tag { font-size: 0.7rem; font-weight: 800; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.05em; }

    /* Chapter Quick-Jump Bar */
    .chip-bar { background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 12px 20px; position: sticky; top: 60px; z-index: 90; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
    .chip-bar-inner { max-width: 1400px; margin: 0 auto; }
    .chip-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 8px; display: block; }
    .chip-scroll { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; }
    .chip-scroll::-webkit-scrollbar { height: 4px; }
    .chip-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    .bc-chip { background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 9999px; padding: 6px 14px; font-size: 0.8rem; font-weight: 600; color: #334155; white-space: nowrap; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 6px; }
    .bc-chip:hover { background: #e2e8f0; color: #0f172a; border-color: #94a3b8; }
    .bc-chip.active { background: #059669; color: white; border-color: #059669; box-shadow: 0 2px 6px rgba(5,150,105,0.3); }
    .bc-chip .bc-n { background: rgba(0,0,0,0.15); border-radius: 50%; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800; }
    .bc-chip.active .bc-n { background: rgba(255,255,255,0.25); color: white; }

    /* Main Grid Layout */
    .content-grid { max-width: 1400px; margin: 30px auto; padding: 0 20px; display: grid; grid-template-columns: 310px 1fr; gap: 30px; align-items: start; }
    @media (max-width: 1024px) {
      .content-grid { grid-template-columns: 1fr; }
      .sidebar { display: none; }
    }

    /* Sidebar Navigation */
    .sidebar { background: white; border: 1px solid var(--border); border-radius: 16px; padding: 20px; position: sticky; top: 160px; max-height: calc(100vh - 180px); overflow-y: auto; }
    .sidebar-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9; }
    .sidebar-title { font-size: 0.95rem; font-weight: 800; color: var(--navy); }
    .chapter-search { width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 8px; font-size: 0.85rem; margin-bottom: 14px; outline: none; transition: border-color 0.2s; }
    .chapter-search:focus { border-color: var(--green); }
    .chapter-nav { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
    .chapter-nav a { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 8px; text-decoration: none; color: #334155; font-size: 0.85rem; font-weight: 600; transition: all 0.2s; }
    .chapter-nav a:hover { background: #f8fafc; color: var(--green); }
    .chapter-nav a.active { background: var(--green-light); color: var(--green-dark); font-weight: 700; border-left: 3px solid var(--green); }
    .chapter-nav .ch-num { width: 22px; height: 22px; border-radius: 6px; background: #e2e8f0; display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; flex-shrink: 0; }
    .chapter-nav a.active .ch-num { background: var(--green); color: white; }
    .ch-meta { display: flex; flex-direction: column; min-width: 0; }
    .ch-name { font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .ch-sub { font-size: 0.72rem; color: #64748b; font-weight: 500; }

    /* Chapter Section Display */
    .chapter-section { display: none; background: white; border: 1px solid var(--border); border-radius: 20px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); margin-bottom: 30px; }
    .chapter-section.active { display: block; animation: fadeIn 0.3s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    .chapter-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid #f1f5f9; }
    .ch-badge { width: 48px; height: 48px; border-radius: 14px; background: #059669; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; font-weight: 900; flex-shrink: 0; box-shadow: 0 4px 10px rgba(5,150,105,0.25); }
    .chapter-header-info { flex: 1; }
    .unit-tag { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: #059669; background: #ecfdf5; padding: 3px 10px; border-radius: 6px; display: inline-block; margin-bottom: 6px; }
    .chapter-header h2 { font-size: 1.6rem; font-weight: 900; color: var(--navy); line-height: 1.3; }
    .chapter-header p { font-size: 0.95rem; color: var(--slate); margin-top: 4px; }

    /* Concept Highlights Card */
    .concept-card { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 14px; padding: 20px; margin-bottom: 28px; }
    .concept-header { display: flex; align-items: center; gap: 8px; font-weight: 800; color: #065f46; font-size: 0.95rem; margin-bottom: 12px; }
    .concept-list { margin: 0; padding-left: 20px; color: #166534; font-size: 0.88rem; line-height: 1.7; }
    .svg-diagram-wrapper { background: white; border: 1px solid #bbf7d0; border-radius: 10px; padding: 14px; margin-top: 14px; overflow-x: auto; }

    /* Exercise Separator */
    .ex-div { background: #f8fafc; border-left: 4px solid #059669; padding: 10px 16px; font-weight: 800; font-size: 0.92rem; color: #0f172a; margin: 24px 0 16px; border-radius: 0 8px 8px 0; }

    /* Question Cards Accordion */
    .questions-container { display: flex; flex-direction: column; gap: 14px; }
    .q-card { border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; transition: all 0.2s ease; background: white; }
    .q-card:hover { border-color: #cbd5e1; }
    .q-head { display: flex; align-items: center; gap: 12px; padding: 14px 18px; cursor: pointer; user-select: none; background: #ffffff; transition: background 0.2s; }
    .q-head:hover { background: #f8fafc; }
    .q-num { font-weight: 900; color: #059669; font-size: 0.95rem; flex-shrink: 0; width: 34px; }
    .q-text { font-weight: 700; color: #0f172a; font-size: 0.95rem; flex: 1; line-height: 1.45; }
    .q-cat { font-size: 0.72rem; font-weight: 700; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; flex-shrink: 0; }
    .q-marks { font-size: 0.72rem; font-weight: 800; background: #f1f5f9; color: #475569; padding: 2px 8px; border-radius: 4px; flex-shrink: 0; }
    .q-toggle { width: 18px; height: 18px; color: #64748b; transition: transform 0.25s ease; flex-shrink: 0; }
    .q-card.open .q-toggle { transform: rotate(45deg); }
    .q-answer { display: none; padding: 0 18px 18px; border-top: 1px solid #f1f5f9; background: #fafafa; }
    .q-card.open .q-answer { display: block; animation: slideDown 0.25s ease; }
    @keyframes slideDown { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

    .answer-box { background: white; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; margin-top: 14px; }
    .answer-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #059669; margin-bottom: 8px; }
    .answer-text { font-size: 0.92rem; color: #1e293b; line-height: 1.7; }
    .answer-text ol, .answer-text ul { padding-left: 20px; margin: 8px 0; }
    .answer-text li { margin-bottom: 6px; }

    /* Marking Scheme Rubric */
    .marking-scheme { background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 12px 14px; margin-top: 16px; font-size: 0.82rem; }
    .marking-title { font-weight: 800; color: #334155; margin-bottom: 8px; }
    .marking-row { display: flex; justify-content: space-between; align-items: center; padding: 4px 0; border-bottom: 1px solid #f1f5f9; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: #475569; flex: 1; }
    .marking-marks { font-weight: 700; color: #059669; margin-left: 10px; }

    /* NEP 2020 CBQ Card */
    .cbq-card { background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 2px solid #86efac; border-radius: 14px; padding: 22px; margin-top: 28px; position: relative; }
    .cbq-badge { display: inline-block; background: #059669; color: white; font-size: 0.72rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; }
  </style>
</head>
<body>

  <!-- Reading Progress Bar -->
  <div class="progress-bar-wrap">
    <div class="progress-bar" id="progressBar"></div>
  </div>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <img src="favicon.png" alt="OlympiadQuiz Logo" width="32" height="32" style="height:32px;width:auto;" loading="lazy">
        <span class="logo-text">Olympiad<span>Quiz</span></span>
      </a>
      <div class="navbar-links">
        <a href="index.html" class="nav-link">Home</a>
        <div class="nav-dropdown">
          <a href="ncert-solutions.html" class="nav-link" style="color:white;">NCERT Solutions ▾</a>
          <div class="nav-dropdown-content">
            <a href="ncert-solutions-class-3.html">Class 3 Solutions</a>
            <a href="ncert-solutions-class-4.html">Class 4 Solutions</a>
            <a href="ncert-solutions-class-5.html">Class 5 Hub</a>
            <a href="ncert-solutions-class-6-maths.html">Class 6 Solutions</a>
            <a href="ncert-solutions-class-7-maths.html">Class 7 Solutions</a>
            <a href="ncert-solutions-class-8-maths.html">Class 8 Solutions</a>
            <a href="ncert-solutions-class-9-maths.html">Class 9 Solutions</a>
            <a href="ncert-solutions-class-10-maths.html">Class 10 Solutions</a>
          </div>
        </div>
        <a href="ncert-solutions-class-5.html" class="nav-link active">Class 5 Hub</a>
        <a href="dashboard.html" class="btn-login">Dashboard</a>
      </div>
    </div>
  </nav>

  <!-- Secondary Breadcrumbs -->
  <div class="ncert-breadcrumb-nav">
    <div class="ncert-bc-container">
      <ul class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions-class-5.html">Class 5</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">The World Around Us (EVS)</li>
      </ul>
      <div style="font-size:0.85rem;font-weight:700;color:#059669;">
        CBSE Class 5 &bull; 2026–27 Session
      </div>
    </div>
  </div>

  <!-- Hero Banner -->
  <header class="hero">
    <div class="hero-badge">
      <span>🌿</span> 100% Free Complete NCERT Solutions • Both Textbooks
    </div>
    <h1>NCERT Solutions for Class 5 EVS</h1>
    <p>Comprehensive step-by-step solutions for <strong>Our Wondrous World</strong> (NEP 2020) and <strong>Looking Around / आस-पास</strong> (Classic CBSE) with vector diagrams, CBSE marking rubrics, and NEP 2020 competency case studies.</p>

    <!-- Book Switcher Tabs -->
    <div class="book-switcher">
      <button class="btn-book-tab active" id="btnWondrous" onclick="switchBook('wondrous')">
        <span class="book-tab-icon">📘</span>
        <div class="book-tab-info">
          <span class="book-tab-title">Our Wondrous World</span>
          <span class="book-tab-sub">New NEP 2020 / NCF 2023 &bull; 10 Chapters</span>
        </div>
        <span class="book-tag">NEP 2020</span>
      </button>

      <button class="btn-book-tab" id="btnLooking" onclick="switchBook('looking')">
        <span class="book-tab-icon">📙</span>
        <div class="book-tab-info">
          <span class="book-tab-title">Looking Around (आस-पास)</span>
          <span class="book-tab-sub">Classic CBSE Curriculum &bull; 22 Chapters</span>
        </div>
        <span class="book-tag">Classic CBSE</span>
      </button>
    </div>
  </header>

  <!-- Quick-Jump Horizontal Chip Bar -->
  <div class="chip-bar">
    <div class="chip-bar-inner">
      <span class="chip-label" id="chipBarLabel">Quick Jump To Chapter — Our Wondrous World (NEP 2020):</span>
      <div class="chip-scroll" id="chipsWondrous">
        ${wondrousChips}
      </div>
      <div class="chip-scroll" id="chipsLooking" style="display:none;">
        ${lookingChips}
      </div>
    </div>
  </div>

  <!-- Main Content Grid -->
  <div class="content-grid">
    <!-- Sidebar Navigation -->
    <aside class="sidebar">
      <div class="sidebar-head">
        <span class="sidebar-title" id="sidebarTitleText">📘 Our Wondrous World (Chapters)</span>
        <span style="font-size:0.75rem;font-weight:800;color:#059669;" id="sidebarCount">10 Chapters</span>
      </div>
      <input type="text" class="chapter-search" placeholder="Search chapters..." oninput="filterChapters(this.value)" id="chapterSearch">
      <ul class="chapter-nav" id="navWondrous">
        ${wondrousSidebar}
      </ul>
      <ul class="chapter-nav" id="navLooking" style="display:none;">
        ${lookingSidebar}
      </ul>
    </aside>

    <!-- Content Sections -->
    <main class="main-content">
      <div id="containerWondrous">
        ${wondrousSections}
      </div>
      <div id="containerLooking" style="display:none;">
        ${lookingSections}
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer style="background:#0f172a;color:#94a3b8;padding:30px 20px;text-align:center;font-size:0.85rem;border-top:1px solid #1e293b;margin-top:60px;">
    <p>© 2026 OlympiadQuiz — 100% Free Educational Resources &bull; <a href="ncert-solutions.html" style="color:#34d399;">NCERT Solutions Hub</a> &bull; <a href="ncert-solutions-class-5.html" style="color:#34d399;">Class 5 Hub</a> &bull; <a href="ncert-solutions-class-5-english.html" style="color:#34d399;">Class 5 English</a> &bull; <a href="ncert-solutions-class-5-maths.html" style="color:#34d399;">Class 5 Maths</a> &bull; <a href="ncert-solutions-class-5-hindi.html" style="color:#34d399;">Class 5 Hindi</a></p>
  </footer>

  <script>
    let currentBook = 'wondrous';

    function switchBook(book) {
      currentBook = book;
      const isWondrous = (book === 'wondrous');

      // Update tabs
      document.getElementById('btnWondrous').classList.toggle('active', isWondrous);
      document.getElementById('btnLooking').classList.toggle('active', !isWondrous);

      // Update chips & sidebars
      document.getElementById('chipsWondrous').style.display = isWondrous ? 'flex' : 'none';
      document.getElementById('chipsLooking').style.display = isWondrous ? 'none' : 'flex';
      document.getElementById('navWondrous').style.display = isWondrous ? 'flex' : 'none';
      document.getElementById('navLooking').style.display = isWondrous ? 'none' : 'flex';

      document.getElementById('containerWondrous').style.display = isWondrous ? 'block' : 'none';
      document.getElementById('containerLooking').style.display = isWondrous ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isWondrous ? 'Quick Jump To Chapter — Our Wondrous World (NEP 2020):' : 'Quick Jump To Chapter — Looking Around:';
      document.getElementById('sidebarTitleText').innerText = isWondrous ? '📘 Our Wondrous World (Chapters)' : '📙 Looking Around (Chapters)';
      document.getElementById('sidebarCount').innerText = isWondrous ? '10 Chapters' : '22 Chapters';

      // Show first chapter of that book
      const defaultId = isWondrous ? 'ch_oww1' : 'ch_la_1';
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
      const activeNavId = (currentBook === 'wondrous') ? 'navWondrous' : 'navLooking';
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
        if (hash.startsWith('ch_la')) {
          switchBook('looking');
          showChapter(hash);
          return;
        } else if (hash.startsWith('ch_oww')) {
          switchBook('wondrous');
          showChapter(hash);
          return;
        }
      }
      // default: Our Wondrous World Chapter 1
      showChapter('ch_oww1');
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-5-evs.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-5-evs.html (${htmlContent.length} bytes)!`);
