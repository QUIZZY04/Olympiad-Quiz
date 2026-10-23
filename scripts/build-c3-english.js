// Generator for NCERT Class 3 English Solutions (100% Question Coverage: Santoor + Marigold)
// Fully Aligned with Official NCERT Curriculum (New NEP 2020 Santoor + Classic CBSE Marigold)
const fs = require('fs');
const path = require('path');

const { santoorChapters } = require('./data-c3-english/santoorData.js');
const { marigoldUnits } = require('./data-c3-english/marigoldData.js');

console.log("=== BUILDING NCERT CLASS 3 ENGLISH SOLUTIONS (SANTOOR + MARIGOLD) ===");
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
  const conceptsHtml = ch.concepts.map(c => `<li>${c}</li>`).join('');

  const isSantoor = bookKey === 'st';
  const modularUrl = isSantoor ? `chapters-c3e/santoor-ch${ch.num}.html` : `chapters-c3e/marigold-unit${ch.num}.html`;
  const bookName = isSantoor ? 'Santoor' : 'Marigold';
  const qCount = 20;

  return `
  <section class="chapter-section" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <span class="unit-tag">${ch.unit}</span>
        <h2>${isSantoor ? `Chapter ${ch.num}: ${ch.title}` : `Unit ${ch.num}: ${ch.title}`}</h2>
        <p>${ch.subtitle}</p>
      </div>
    </div>

    <!-- 100% Modular Solutions Banner -->
    <div style="background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%); color: #ffffff; border-radius: 14px; padding: 20px 24px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; box-shadow: 0 4px 14px rgba(2,132,199,0.22);">
      <div>
        <div style="display: inline-block; background: #fef08a; color: #854d0e; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 6px;">🚀 100% Comprehensive Textbook Solutions Ingested</div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #ffffff;">All ${qCount}+ Questions &amp; Reading Activities</div>
        <div style="font-size: 0.88rem; color: #e0f2fe; margin-top: 3px;">Get every single exercise question with reading comprehension, word power, grammar rubrics, and creative writing.</div>
      </div>
      <a href="${modularUrl}" style="background: #ffffff; color: #0369a1; padding: 12px 24px; border-radius: 8px; font-weight: 800; font-size: 0.95rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15); white-space: nowrap;">
        Open Full ${isSantoor ? `Chapter ${ch.num}` : `Unit ${ch.num}`} (${qCount}+ Qs) ➔
      </a>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Chapter Themes, Poetic Devices &amp; Vocabulary Highlights</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>
    </div>

    <!-- 100% Complete Exercise Solutions Gateway Card -->
    <div style="background: #ffffff; border: 2px solid #bae6fd; border-radius: 16px; padding: 28px; margin: 24px 0; box-shadow: 0 4px 16px rgba(2,132,199,0.08); text-align: center;">
      <div style="display: inline-flex; align-items: center; gap: 8px; background: #dcfce7; color: #15803d; font-size: 0.82rem; font-weight: 800; padding: 5px 16px; border-radius: 999px; text-transform: uppercase; margin-bottom: 12px;">
        <span>✅ 100% Question Coverage</span> • <span>All ${qCount}+ Solved Questions</span>
      </div>
      <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">${isSantoor ? `Chapter ${ch.num}: ${ch.title}` : `Unit ${ch.num}: ${ch.title}`} — Full NCERT Solutions</h3>
      <p style="font-size: 0.92rem; color: #475569; max-width: 680px; margin: 0 auto 20px; line-height: 1.6;">
        Access all <strong>${qCount}+ comprehension questions, word fun, rhyming exercises, and grammar worksheets</strong> with step-by-step CBSE marking schemes.
      </p>
      <a href="${modularUrl}" style="display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #ffffff; font-weight: 800; font-size: 1.05rem; padding: 14px 34px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 14px rgba(2,132,199,0.3); transition: transform 0.15s ease;">
        <span>📖 Open ${isSantoor ? `Chapter ${ch.num}` : `Unit ${ch.num}`} Complete Solutions (${qCount}+ Questions)</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #0284c7;"><strong>Real-Life Context:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Analytical Task:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #bae6fd;font-size:0.8rem;font-weight:700;color:#0369a1;">CBSE Assessment Rubric: ${ch.cbq.rubric}</div>
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const santoorSections = santoorChapters.map(ch => renderChapterSection(ch, "st")).join('\n');
const marigoldSections = marigoldUnits.map(ch => renderChapterSection(ch, "mg")).join('\n');

const santoorChapterDirectoryCards = santoorChapters.map(ch => `
  <a href="chapters-c3e/santoor-ch${ch.num}.html" style="display: flex; flex-direction: column; justify-content: space-between; background: #f8fafc; border: 1.5px solid #bae6fd; border-radius: 12px; padding: 14px 16px; text-decoration: none; transition: all 0.2s ease; color: inherit;">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
        <span style="font-size: 0.75rem; font-weight: 800; color: #0369a1; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">Chapter ${ch.num}</span>
        <span style="font-size: 0.72rem; font-weight: 800; color: #15803d; background: #dcfce7; padding: 2px 8px; border-radius: 4px;">20+ Solved Qs</span>
      </div>
      <div style="font-size: 0.95rem; font-weight: 700; color: #0f172a; line-height: 1.35; margin-bottom: 4px;">${ch.title}</div>
      <div style="font-size: 0.78rem; color: #64748b;">${ch.subtitle}</div>
    </div>
    <div style="margin-top: 12px; font-size: 0.82rem; font-weight: 800; color: #0284c7; display: flex; align-items: center; gap: 4px;">
      View Complete Solutions ➔
    </div>
  </a>
`).join('\n');

const marigoldChapterDirectoryCards = marigoldUnits.map(ch => `
  <a href="chapters-c3e/marigold-unit${ch.num}.html" style="display: flex; flex-direction: column; justify-content: space-between; background: #f8fafc; border: 1.5px solid #fed7aa; border-radius: 12px; padding: 14px 16px; text-decoration: none; transition: all 0.2s ease; color: inherit;">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
        <span style="font-size: 0.75rem; font-weight: 800; color: #9a3412; background: #ffedd5; padding: 2px 8px; border-radius: 4px;">Unit ${ch.num}</span>
        <span style="font-size: 0.72rem; font-weight: 800; color: #15803d; background: #dcfce7; padding: 2px 8px; border-radius: 4px;">20+ Solved Qs</span>
      </div>
      <div style="font-size: 0.95rem; font-weight: 700; color: #0f172a; line-height: 1.35; margin-bottom: 4px;">${ch.title}</div>
      <div style="font-size: 0.78rem; color: #64748b;">${ch.subtitle}</div>
    </div>
    <div style="margin-top: 12px; font-size: 0.82rem; font-weight: 800; color: #ea580c; display: flex; align-items: center; gap: 4px;">
      View Complete Solutions ➔
    </div>
  </a>
`).join('\n');

const santoorChips = santoorChapters.map(ch => `
  <a class="bc-chip" href="chapters-c3e/santoor-ch${ch.num}.html">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('&')[0].trim()}
  </a>
`).join('');

const marigoldChips = marigoldUnits.map(ch => `
  <a class="bc-chip" href="chapters-c3e/marigold-unit${ch.num}.html">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('&')[0].trim()}
  </a>
`).join('');

const santoorSidebar = santoorChapters.map(ch => `
  <li>
    <a href="chapters-c3e/santoor-ch${ch.num}.html">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit} • 20+ Qs ➔</span>
      </div>
    </a>
  </li>
`).join('');

const marigoldSidebar = marigoldUnits.map(ch => `
  <li>
    <a href="chapters-c3e/marigold-unit${ch.num}.html">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit} • 20+ Qs ➔</span>
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
  <title>NCERT Solutions for Class 3 English (Santoor &amp; Marigold) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Complete Class 3 NCERT English Solutions covering both textbooks: New NEP 2020 Santoor (12 Chapters) and Classic Marigold (10 Units). Reading comprehension, word meanings, grammar, CBSE step rubrics, and NEP 2020 case studies.">
  <meta name="keywords" content="ncert solutions class 3 english, class 3 santoor solutions, marigold class 3 ncert, cbse class 3 english 2026-27, fun with friends, badal and moti, paper boats, good morning, the magic garden, bird talk, nina and the baby sparrows, the enormous turnip, little fish story, ship of the desert">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-3-english.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-3-english.html">
  <meta property="og:title" content="NCERT Solutions for Class 3 English (Santoor &amp; Marigold) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% complete textbook question coverage for Class 3 English across all 22 chapters of Santoor and Marigold with CBSE rubrics and competency case studies.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 3 English (Santoor &amp; Marigold) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook solutions for Class 3 English across Santoor and Marigold with comprehension, grammar exercises, and case studies.">
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
      { "@type": "ListItem", "position": 4, "name": "English", "item": "https://olympiadquiz.org/ncert-solutions-class-3-english.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 3 English (Santoor & Marigold) CBSE 2026-27",
    "description": "Comprehensive chapter-wise solutions for Class 3 English covering both Santoor (12 Chapters) and Marigold (10 Units) with reading comprehension, grammar exercises, and NEP 2020 competency case studies.",
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
        "name": "Which English textbooks are covered for Class 3 on OlympiadQuiz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both official NCERT Class 3 English textbooks are covered: the new NEP 2020 textbook 'Santoor' (12 chapters) and the classic CBSE textbook 'Marigold' (10 units)."
        }
      },
      {
        "@type": "Question",
        "name": "Do these English solutions include grammar and vocabulary exercises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every chapter includes full coverage of reading comprehension, word power, compound words, prepositions, singular-plural nouns, and descriptive adjectives."
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
      --brand: #0284c7;
      --brand-dark: #0369a1;
      --brand-light: #f0f9ff;
      --navy: #0f172a;
      --slate: #475569;
      --border: #bae6fd;
      --card-bg: #ffffff;
      --bg: #f8fafc;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', system-ui, sans-serif; background: var(--bg); color: #1e293b; line-height: 1.6; }
    
    #progressBar { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #0284c7, #38bdf8); width: 0%; z-index: 1000; }

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
    .breadcrumb-inner a { color: #0284c7; text-decoration: none; font-weight: 600; }
    .breadcrumb-inner a:hover { text-decoration: underline; }
    .breadcrumb-inner span.sep { color: #cbd5e1; }
    .breadcrumb-inner span.cur { color: #0f172a; font-weight: 700; }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #075985 0%, #0284c7 50%, #0369a1 100%); color: #ffffff; padding: 48px 24px; text-align: center; }
    .hero-inner { max-width: 900px; margin: 0 auto; }
    .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 999px; padding: 4px 14px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; }
    .hero-title { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 900; line-height: 1.2; margin-bottom: 12px; }
    .hero-desc { font-size: 1rem; color: #e0f2fe; max-width: 760px; margin: 0 auto 24px; line-height: 1.6; }
    
    /* Dual Track Toggle */
    .book-toggle-bar { display: inline-flex; background: rgba(15, 23, 42, 0.4); border-radius: 12px; padding: 4px; gap: 4px; margin-top: 8px; }
    .track-btn { border: none; background: transparent; color: #e2e8f0; padding: 10px 22px; border-radius: 9px; font-size: 0.88rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; gap: 8px; }
    .track-btn.active { background: #ffffff; color: #0369a1; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }

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
    .bc-chip.active { background: #0284c7; color: #ffffff; border-color: #0284c7; }
    .bc-chip.active .bc-n { background: #ffffff; color: #0284c7; }

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
    .sidebar-search:focus { border-color: #0284c7; }
    .chapter-nav { list-style: none; max-height: calc(100vh - 280px); overflow-y: auto; padding-right: 4px; }
    .chapter-nav li { margin-bottom: 4px; }
    .chapter-nav a { display: flex; align-items: flex-start; gap: 10px; padding: 8px 10px; border-radius: 8px; text-decoration: none; color: #334155; font-size: 0.82rem; font-weight: 600; line-height: 1.35; transition: all 0.15s ease; }
    .chapter-nav a:hover { background: #f8fafc; color: #0284c7; }
    .chapter-nav a.active { background: #f0f9ff; color: #0369a1; font-weight: 700; border-left: 3px solid #0284c7; }
    .chapter-nav .ch-num { background: #f1f5f9; color: #64748b; min-width: 20px; height: 20px; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800; margin-top: 1px; }
    .chapter-nav a.active .ch-num { background: #0284c7; color: #ffffff; }
    .chapter-nav .ch-meta { display: flex; flex-direction: column; }
    .chapter-nav .ch-sub { font-size: 0.72rem; color: #94a3b8; font-weight: 500; margin-top: 2px; }

    /* Chapter Content Sections */
    .chapter-section { display: none; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); margin-bottom: 24px; }
    .chapter-section.active { display: block; animation: fadeIn 0.25s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    .chapter-header { display: flex; align-items: flex-start; gap: 18px; margin-bottom: 24px; padding-bottom: 18px; border-bottom: 2px solid #f1f5f9; }
    .ch-badge { width: 54px; height: 54px; border-radius: 14px; background: linear-gradient(135deg, #0284c7, #0369a1); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 900; flex-shrink: 0; }
    .chapter-header-info h2 { font-size: 1.55rem; font-weight: 800; color: #0f172a; line-height: 1.25; margin-bottom: 4px; }
    .chapter-header-info p { color: #64748b; font-size: 0.95rem; }
    .unit-tag { display: inline-block; background: #e0f2fe; color: #0369a1; border-radius: 6px; padding: 2px 8px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; margin-bottom: 6px; }

    /* Concept Card */
    .concept-card { background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 14px; padding: 20px; margin-bottom: 28px; }
    .concept-header { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.95rem; color: #0369a1; margin-bottom: 12px; }
    .concept-list { list-style: none; }
    .concept-list li { position: relative; padding-left: 20px; margin-bottom: 8px; font-size: 0.88rem; color: #334155; line-height: 1.5; }
    .concept-list li::before { content: "•"; position: absolute; left: 6px; color: #0284c7; font-weight: 900; }

    /* Exercise Header */
    .ex-div { background: #f0f9ff; border-left: 4px solid #0284c7; padding: 12px 18px; border-radius: 0 10px 10px 0; font-weight: 800; font-size: 0.98rem; color: #075985; margin-bottom: 20px; }

    /* Question Cards Accordion */
    .q-card { border: 1.5px solid #e2e8f0; border-radius: 14px; margin-bottom: 14px; overflow: hidden; transition: border-color 0.2s; }
    .q-card:hover { border-color: #cbd5e1; }
    .q-head { background: #ffffff; padding: 16px 20px; display: flex; align-items: center; gap: 12px; cursor: pointer; user-select: none; }
    .q-num { background: #f1f5f9; color: #1e293b; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 800; flex-shrink: 0; }
    .q-text { font-size: 0.92rem; font-weight: 700; color: #0f172a; flex: 1; line-height: 1.4; }
    .q-cat { background: #f1f5f9; color: #475569; font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; white-space: nowrap; }
    .q-marks { background: #fef3c7; color: #92400e; font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; white-space: nowrap; }
    .q-toggle { width: 18px; height: 18px; color: #64748b; transition: transform 0.2s ease; flex-shrink: 0; }
    .q-card.open .q-toggle { transform: rotate(45deg); color: #0284c7; }

    .q-answer { display: none; padding: 0 20px 20px; background: #ffffff; }
    .q-card.open .q-answer { display: block; }
    .answer-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-top: 4px; }
    .answer-label { font-size: 0.78rem; font-weight: 800; color: #0284c7; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px; }
    .answer-text { font-size: 0.9rem; color: #1e293b; line-height: 1.6; margin-bottom: 14px; }
    
    /* Marking Scheme */
    .marking-scheme { background: #ffffff; border: 1px solid #bae6fd; border-radius: 10px; padding: 12px 16px; margin-top: 12px; }
    .marking-title { font-size: 0.8rem; font-weight: 800; color: #0369a1; margin-bottom: 8px; }
    .marking-row { display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: #334155; padding: 3px 0; border-bottom: 1px dashed #e2e8f0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-marks { font-weight: 800; color: #047857; background: #d1fae5; padding: 1px 6px; border-radius: 4px; }

    /* CBQ Card */
    .cbq-card { background: linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%); border: 1.5px solid #bae6fd; border-radius: 16px; padding: 22px; margin-top: 28px; }
    .cbq-badge { display: inline-block; background: #0284c7; color: #ffffff; border-radius: 6px; padding: 3px 10px; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; }

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
      <span class="cur">English</span>
    </div>
  </div>

  <!-- Hero Banner -->
  <section class="hero-banner">
    <div class="hero-inner">
      <div class="hero-badge">CBSE 2026-27 Session • 100% NCERT Solutions</div>
      <h1 class="hero-title">NCERT Class 3 English Solutions</h1>
      <p class="hero-desc">Complete textbook exercise solutions, reading comprehension, vocabulary, grammar rubrics, and NEP 2020 competency-based case studies across Santoor and Marigold.</p>
      
      <!-- Track Switcher -->
      <div class="book-toggle-bar">
        <button id="btnSantoor" class="track-btn active" onclick="switchBook('santoor')">
          📘 Santoor (New NCF 2023 - 12 Chapters)
        </button>
        <button id="btnMarigold" class="track-btn" onclick="switchBook('marigold')">
          📙 Marigold (Classic CBSE - 10 Units)
        </button>
      </div>
    </div>
  </section>

  <!-- Sticky Chapter Chips Bar -->
  <div class="chip-bar">
    <div class="chip-bar-inner">
      <span class="chip-label" id="chipBarLabel">Quick Jump To Chapter — Santoor (NEP 2020):</span>
      <div class="chips-wrapper" id="chipsSantoor">
        ${santoorChips}
      </div>
      <div class="chips-wrapper" id="chipsMarigold" style="display:none;">
        ${marigoldChips}
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="content-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-head">
        <span id="sidebarTitleText">📘 Santoor (Chapters)</span>
        <span id="sidebarCount" style="font-size:0.75rem;background:#f0f9ff;color:#0369a1;padding:2px 8px;border-radius:6px;">12 Chapters</span>
      </div>
      <input type="text" class="sidebar-search" placeholder="Search chapters..." oninput="filterChapters(this.value)">
      <ul class="chapter-nav" id="navSantoor">
        ${santoorSidebar}
      </ul>
      <ul class="chapter-nav" id="navMarigold" style="display:none;">
        ${marigoldSidebar}
      </ul>
    </aside>

    <!-- Content Containers -->
    <main class="main-content">
      <div id="containerSantoor">
        <!-- Direct Chapter Directory Banner -->
        <div style="background: #ffffff; border: 1.5px solid #bae6fd; border-radius: 16px; padding: 24px; margin-bottom: 28px; box-shadow: 0 4px 12px rgba(2,132,199,0.06);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 2px solid #f0f9ff; padding-bottom: 12px;">
            <div>
              <h2 style="font-size: 1.25rem; font-weight: 800; color: #0369a1; margin: 0;">📘 Santoor — Dedicated Standalone Chapter Pages (100% Ingestion)</h2>
              <p style="font-size: 0.88rem; color: #64748b; margin: 4px 0 0;">Click any chapter below to access all 20+ questions, reading comprehension, and activities without browser lag.</p>
            </div>
            <span style="font-size: 0.8rem; font-weight: 700; color: #15803d; background: #dcfce7; padding: 4px 12px; border-radius: 999px;">12 Dedicated Chapter Pages</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
            ${santoorChapterDirectoryCards}
          </div>
        </div>
        ${santoorSections}
      </div>
      <div id="containerMarigold" style="display:none;">
        <!-- Direct Chapter Directory Banner -->
        <div style="background: #ffffff; border: 1.5px solid #fed7aa; border-radius: 16px; padding: 24px; margin-bottom: 28px; box-shadow: 0 4px 12px rgba(234,88,12,0.06);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 2px solid #fff7ed; padding-bottom: 12px;">
            <div>
              <h2 style="font-size: 1.25rem; font-weight: 800; color: #9a3412; margin: 0;">📙 Marigold — Dedicated Standalone Chapter Pages (100% Ingestion)</h2>
              <p style="font-size: 0.88rem; color: #64748b; margin: 4px 0 0;">Click any unit below to access all 20+ questions, reading comprehension, and activities without browser lag.</p>
            </div>
            <span style="font-size: 0.8rem; font-weight: 700; color: #c2410c; background: #ffedd5; padding: 4px 12px; border-radius: 999px;">10 Dedicated Unit Pages</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
            ${marigoldChapterDirectoryCards}
          </div>
        </div>
        ${marigoldSections}
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <p>© 2026 OlympiadQuiz — <a href="index.html">Home</a> · <a href="ncert-solutions.html">NCERT Solutions Hub</a> · <a href="ncert-solutions-class-3.html">Class 3 Solutions</a></p>
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

      document.getElementById('chipBarLabel').innerText = isSantoor ? 'Quick Jump To Chapter — Santoor (NEP 2020):' : 'Quick Jump To Chapter — Marigold:';
      document.getElementById('sidebarTitleText').innerText = isSantoor ? '📘 Santoor (Chapters)' : '📙 Marigold (Units)';
      document.getElementById('sidebarCount').innerText = isSantoor ? '12 Chapters' : '10 Units';

      // Show first chapter of that book
      const defaultId = isSantoor ? 'ch_st1' : 'ch_mg_u1';
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
      const prog = document.getElementById('progressBar');
      if (prog) prog.style.width = scrolled + '%';
    });

    // Handle hash on initial load
    window.addEventListener('DOMContentLoaded', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('ch_mg')) {
          switchBook('marigold');
          showChapter(hash);
          return;
        } else if (hash.startsWith('ch_st')) {
          switchBook('santoor');
          showChapter(hash);
          return;
        }
      }
      // default: Santoor Chapter 1
      showChapter('ch_st1');
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-3-english.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-3-english.html (${htmlContent.length} bytes)!`);
