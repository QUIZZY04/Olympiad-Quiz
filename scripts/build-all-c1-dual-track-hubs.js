// scripts/build-all-c1-dual-track-hubs.js
// Production compiler for NCERT Class 1 Dual-Track Subject Hubs and Central Class 1 Hub
// Uniform Class 2 / Class 3 Gold-Standard Design & Direct-ID In-Page Navigation Architecture
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// 1. DATASETS IMPORT (ALL 8 TEXTBOOKS, 117 CHAPTERS)
const { joyfulMathsChapters } = require('./data-c1-maths/joyfulMathsData.js');
const { mathMagicChapters } = require('./data-c1-maths/mathMagicData.js');

const { mridangChapters } = require('./data-c1-english/mridangData.js');
const { marigoldChapters } = require('./data-c1-english/marigoldData.js');

const { sarangiChapters } = require('./data-c1-hindi/sarangiData.js');
const { rimjhimChapters } = require('./data-c1-hindi/rimjhimData.js');

const { livingWorldChapters } = require('./data-c1-evs/livingWorldData.js');
const { surroundingsChapters } = require('./data-c1-evs/surroundingsData.js');

console.log("=== COMPILING ALL 4 NCERT CLASS 1 DUAL-TRACK HUBS & CENTRAL HUB ===");

// --------------------------------------------------------------------------
// SECTION RENDERER: DIRECT FROM DATA OBJECTS (ZERO REGEX SCRAPING)
// --------------------------------------------------------------------------
function renderChapterSection(ch, trackKey, idx, arr, standaloneDir, standalonePrefix, isFirstChapterOverall, subjectTitle) {
  const conceptsHtml = (ch.concepts || []).map(c => `<li>${c}</li>`).join('');
  const prevCh = idx > 0 ? arr[idx - 1] : null;
  const nextCh = idx < arr.length - 1 ? arr[idx + 1] : null;

  // Question cards with model answers and CBSE step marking scheme
  const qCardsHtml = (ch.questions || []).map((q, qIdx) => {
    const qId = `${ch.id}_q${qIdx + 1}`;
    let rubricHtml = '';

    if (q.rubric && Array.isArray(q.rubric)) {
      rubricHtml = `
        <div class="marking-scheme">
          <div class="marking-title">CBSE Step-by-Step Marking Scheme</div>
          ${q.rubric.map(r => `
            <div class="marking-row">
              <span class="marking-key">${r.key}</span>
              <span class="marking-marks">${r.marks}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (typeof q.rubric === 'string') {
      rubricHtml = `
        <div class="marking-scheme">
          <div class="marking-title">CBSE Step-by-Step Marking Scheme</div>
          <div class="marking-row">
            <span class="marking-key">${q.rubric}</span>
            <span class="marking-marks">${q.marks || 2} Marks</span>
          </div>
        </div>
      `;
    }

    return `
    <div class="q-card open" id="${qId}">
      <div class="q-head" onclick="toggleQ('${qId}')">
        <span class="q-num">Q${qIdx + 1}</span>
        <span class="q-text">${q.q}</span>
        <span class="q-cat">${q.category || 'Textbook Exercise'}</span>
        <span class="q-marks">${q.marks || 2} Marks</span>
        <svg class="q-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <div class="q-answer">
        <div class="answer-box">
          <div class="answer-label">✅ Step-by-Step Model Answer &amp; Solution:</div>
          <div class="answer-text">${q.ans}</div>
          ${rubricHtml}
        </div>
      </div>
    </div>`;
  }).join('\n');

  // NEP 2020 Competency Based Question (CBQ) if present
  let cbqHtml = '';
  if (ch.cbq && ch.cbq.title) {
    cbqHtml = `
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid var(--brand);"><strong>Real-World Context:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Analytical Task:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #bfdbfe;font-size:0.8rem;font-weight:700;color:var(--brand-text);">CBSE Assessment Rubric: ${ch.cbq.rubric}</div>
    </div>`;
  }

  const standaloneUrl = `${standaloneDir}/${standalonePrefix}-ch${ch.num}.html`;

  return `
  <section class="chapter-section${isFirstChapterOverall ? ' active' : ''}" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <div class="ch-category">${ch.unit ? ch.unit + ' • ' : ''}Class 1 ${subjectTitle}</div>
        <h2>Chapter ${ch.num}: ${ch.title}</h2>
        <p>${ch.subtitle || ''}</p>
      </div>
      <div class="ch-header-action">
        <a href="${standaloneUrl}" class="btn-standalone" target="_blank" rel="noopener">Open Dedicated Chapter Page ↗</a>
      </div>
    </div>

    <!-- Key Concepts Card -->
    ${(ch.concepts && ch.concepts.length > 0) || (ch.svg && ch.svg.length > 20) ? `
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>Chapter Highlights, Key Concepts &amp; Visual Models</span>
      </div>
      ${ch.concepts && ch.concepts.length > 0 ? `<ul class="concept-list">${conceptsHtml}</ul>` : ''}
      ${ch.svg && ch.svg.length > 20 ? `<div class="svg-diagram-wrapper" style="margin-top:18px;">${ch.svg}</div>` : ''}
    </div>` : ''}

    <!-- Exercise Solutions Header -->
    <div class="ex-div">📖 NCERT Textbook Exercise Solutions &amp; Step-by-Step Working (${(ch.questions || []).length} Solved Questions)</div>
    <div class="questions-container">
      ${qCardsHtml}
    </div>

    <!-- Competency Card -->
    ${cbqHtml}

    <!-- Chapter Navigation Buttons -->
    <div class="ch-nav-btns">
      ${prevCh ? `<button class="ch-nav-btn prev" onclick="showChapter('ch_${prevCh.id}')">← Ch ${prevCh.num}: ${prevCh.title.split('—')[0].trim()}</button>` : `<button class="ch-nav-btn prev" disabled>← Previous Chapter</button>`}
      ${nextCh ? `<button class="ch-nav-btn next" onclick="showChapter('ch_${nextCh.id}')">Ch ${nextCh.num}: ${nextCh.title.split('—')[0].trim()} →</button>` : `<button class="ch-nav-btn next" disabled>Next Chapter →</button>`}
    </div>
  </section>`;
}

// --------------------------------------------------------------------------
// HUB BUILDER FUNCTION
// --------------------------------------------------------------------------
function buildSubjectHub({
  subjectTitle,
  subjectSlug,
  brandColor,
  brandHover,
  brandLight,
  brandText,
  track1,
  track2,
  metaDesc,
  keywords,
  faqItems
}) {
  const track1Sections = track1.chapters.map((ch, idx, arr) => 
    renderChapterSection(ch, 'track1', idx, arr, track1.dir, track1.prefix, idx === 0, subjectTitle)
  ).join('\n');

  const track2Sections = track2.chapters.map((ch, idx, arr) => 
    renderChapterSection(ch, 'track2', idx, arr, track2.dir, track2.prefix, false, subjectTitle)
  ).join('\n');

  const track1Chips = track1.chapters.map((ch, idx) => `
    <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
      <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
    </span>
  `).join('');

  const track2Chips = track2.chapters.map((ch, idx) => `
    <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
      <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
    </span>
  `).join('');

  const track1Sidebar = track1.chapters.map((ch, idx) => `
    <li>
      <a onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}" class="${idx === 0 ? 'active' : ''}">
        <span class="ch-num">${ch.num}</span>
        <div class="ch-meta">
          <span class="ch-name">${ch.title}</span>
          <span class="ch-sub">${ch.unit || ch.subtitle || ''}</span>
        </div>
      </a>
    </li>
  `).join('');

  const track2Sidebar = track2.chapters.map((ch, idx) => `
    <li>
      <a onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}" class="${idx === 0 ? 'active' : ''}">
        <span class="ch-num">${ch.num}</span>
        <div class="ch-meta">
          <span class="ch-name">${ch.title}</span>
          <span class="ch-sub">${ch.unit || ch.subtitle || ''}</span>
        </div>
      </a>
    </li>
  `).join('');

  const track1Ids = JSON.stringify(track1.chapters.map(c => `ch_${c.id}`));
  const track2Ids = JSON.stringify(track2.chapters.map(c => `ch_${c.id}`));

  const defaultTrack1Id = `ch_${track1.chapters[0].id}`;
  const defaultTrack2Id = `ch_${track2.chapters[0].id}`;

  const totalQuestions = track1.chapters.reduce((acc, c) => acc + (c.questions || []).length, 0) +
                         track2.chapters.reduce((acc, c) => acc + (c.questions || []).length, 0);

  const totalChapters = track1.chapters.length + track2.chapters.length;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 1 ${subjectTitle} (${track1.name} &amp; ${track2.name}) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="${metaDesc}">
  <meta name="keywords" content="${keywords}">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-1-${subjectSlug}.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-1-${subjectSlug}.html">
  <meta property="og:title" content="NCERT Solutions for Class 1 ${subjectTitle} (${track1.name} &amp; ${track2.name}) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% textbook question coverage for Class 1 ${subjectTitle} across all ${totalChapters} chapters of ${track1.name} and ${track2.name} with vector diagrams, CBSE marking schemes and NEP 2020 competency questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 1 ${subjectTitle} (${track1.name} &amp; ${track2.name}) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook exercise solutions for Class 1 ${subjectTitle} across ${track1.name} and ${track2.name} with diagrams, CBSE marking rubrics, and case studies.">
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
      { "@type": "ListItem", "position": 3, "name": "Class 1", "item": "https://olympiadquiz.org/ncert-solutions-class-1.html" },
      { "@type": "ListItem", "position": 4, "name": "${subjectTitle}", "item": "https://olympiadquiz.org/ncert-solutions-class-1-${subjectSlug}.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 1 ${subjectTitle} (${track1.name} & ${track2.name})",
    "description": "${metaDesc}",
    "educationalLevel": "CBSE Class 1",
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

  <!-- Schema.org FAQPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${faqItems.map(f => `{
        "@type": "Question",
        "name": "${f.q.replace(/"/g, '\\"')}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${f.a.replace(/"/g, '\\"')}"
        }
      }`).join(',\n      ')}
    ]
  }
  </script>

  <style>
    :root {
      --brand: ${brandColor};
      --brand-hover: ${brandHover};
      --brand-light: ${brandLight};
      --brand-text: ${brandText};
      --text: #1e293b;
      --text-muted: #64748b;
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --border: #e2e8f0;
      --radius: 12px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
      --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
      --sidebar-w: 340px;
    }
    * { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
    body { background:var(--bg); color:var(--text); line-height:1.6; }
    a { color:inherit; text-decoration:none; }

    /* Progress bar */
    .progress-bar-wrap { position:fixed; top:0; left:0; width:100%; height:3px; background:rgba(0,0,0,0.05); z-index:1001; }
    .progress-bar { height:100%; width:0%; background:var(--brand); transition:width 0.1s; }

    /* Top Navigation */
    .top-navbar {
      position:sticky; top:0; z-index:1000;
      background:#ffffff; border-bottom:1px solid var(--border);
      padding:10px 24px; display:flex; align-items:center; justify-content:space-between;
      box-shadow:var(--shadow-sm);
    }
    .nav-left { display:flex; align-items:center; gap:16px; }
    .brand-logo { display:flex; align-items:center; gap:8px; font-weight:800; font-size:1.25rem; color:#0f172a; }
    .brand-badge { background:var(--brand-light); color:var(--brand-text); font-size:0.75rem; font-weight:700; padding:3px 8px; border-radius:6px; border:1px solid var(--brand); }
    .nav-links { display:flex; align-items:center; gap:20px; font-size:0.9rem; font-weight:600; color:#334155; }
    .nav-links a:hover { color:var(--brand); }
    .mobile-menu-btn { display:none; background:none; border:none; cursor:pointer; padding:6px; }

    /* Breadcrumbs */
    .breadcrumb-bar {
      background:#ffffff; border-bottom:1px solid var(--border);
      padding:10px 24px; font-size:0.85rem; color:var(--text-muted);
      display:flex; align-items:center; gap:8px; flex-wrap:wrap;
    }
    .breadcrumb-bar a { color:var(--text-muted); }
    .breadcrumb-bar a:hover { color:var(--brand); }
    .breadcrumb-bar span.sep { color:#cbd5e1; }
    .breadcrumb-bar .cur { color:var(--brand); font-weight:700; }

    /* Hero Section */
    .hero-banner {
      background:linear-gradient(135deg, var(--brand-light) 0%, #ffffff 100%);
      border-bottom:1px solid var(--border); padding:32px 24px; text-align:center;
    }
    .hero-banner h1 { font-size:1.85rem; font-weight:900; color:#0f172a; margin-bottom:8px; }
    .hero-banner p { font-size:0.95rem; color:#475569; max-width:760px; margin:0 auto 16px; }
    .hero-meta-pills { display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-bottom:18px; }
    .pill { display:inline-flex; align-items:center; gap:6px; background:#ffffff; border:1px solid var(--border); padding:6px 14px; border-radius:30px; font-size:0.82rem; font-weight:700; color:#334155; box-shadow:var(--shadow-sm); }
    .pill.highlight { background:var(--brand); color:#ffffff; border-color:var(--brand); }

    /* Dual Book Selector Tabs */
    .book-tabs {
      display:inline-flex; background:#e2e8f0; padding:4px; border-radius:40px;
      margin-top:8px; max-width:100%;
    }
    .book-tab-btn {
      padding:9px 22px; font-size:0.88rem; font-weight:700; border-radius:30px;
      cursor:pointer; border:none; background:transparent; color:#475569;
      transition:all 0.2s; display:inline-flex; align-items:center; gap:8px;
    }
    .book-tab-btn.active {
      background:#ffffff; color:var(--brand); box-shadow:0 2px 8px rgba(0,0,0,0.12);
    }

    /* Horizontal Chapter Quick-Nav Bar */
    .chapter-chips-bar {
      background:#ffffff; border-bottom:1px solid var(--border);
      padding:10px 24px; display:flex; align-items:center; gap:12px;
      overflow-x:auto; -webkit-overflow-scrolling:touch;
      position:sticky; top:57px; z-index:998;
    }
    .chapter-chips-bar::-webkit-scrollbar { height:4px; }
    .chapter-chips-bar::-webkit-scrollbar-thumb { background:#cbd5e1; border-radius:4px; }
    .chip-bar-label { font-size:0.8rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); white-space:nowrap; }
    .chips-group { display:flex; align-items:center; gap:8px; flex-shrink:0; }
    .bc-chip {
      padding:6px 14px; font-size:0.82rem; font-weight:700; border-radius:20px;
      background:#f1f5f9; color:#334155; cursor:pointer; border:1px solid var(--border);
      white-space:nowrap; transition:all 0.15s; display:inline-flex; align-items:center; gap:6px;
    }
    .bc-chip:hover { background:#e2e8f0; }
    .bc-chip.active { background:var(--brand); color:#ffffff; border-color:var(--brand); }
    .bc-chip .bc-n {
      display:inline-block; width:18px; height:18px; line-height:18px;
      border-radius:50%; background:rgba(0,0,0,0.08); font-size:0.7rem; text-align:center;
    }
    .bc-chip.active .bc-n { background:rgba(255,255,255,0.25); color:#ffffff; }

    /* Layout */
    .layout-wrapper { display:flex; min-height:calc(100vh - 200px); max-width:1440px; margin:0 auto; width:100%; }

    /* Sidebar Navigation */
    .sidebar {
      width:var(--sidebar-w); flex-shrink:0; background:#ffffff;
      border-right:1px solid var(--border); height:calc(100vh - 105px);
      position:sticky; top:105px; overflow-y:auto; padding:20px;
      display:flex; flex-direction:column; gap:16px;
    }
    .sidebar-header { display:flex; align-items:center; justify-content:space-between; }
    .sidebar-title { font-size:0.95rem; font-weight:800; color:#0f172a; }
    .search-box {
      width:100%; padding:8px 12px; font-size:0.85rem; border:1px solid var(--border);
      border-radius:8px; outline:none; background:#f8fafc;
    }
    .search-box:focus { border-color:var(--brand); background:#ffffff; }
    .sidebar-book-tabs { display:flex; gap:6px; border-bottom:1px solid var(--border); padding-bottom:10px; }
    .sb-tab { flex:1; padding:7px; font-size:0.78rem; font-weight:700; border-radius:6px; background:#f1f5f9; border:none; cursor:pointer; text-align:center; color:#475569; }
    .sb-tab.active { background:var(--brand); color:#ffffff; }
    .chapter-nav { list-style:none; display:flex; flex-direction:column; gap:6px; }
    .chapter-nav li a {
      display:flex; align-items:center; gap:10px; padding:8px 12px;
      border-radius:8px; font-size:0.85rem; font-weight:600; color:#334155;
      cursor:pointer; transition:all 0.15s; border:1px solid transparent;
    }
    .chapter-nav li a:hover { background:var(--brand-light); color:var(--brand-text); }
    .chapter-nav li a.active {
      background:var(--brand-light); color:var(--brand-text);
      border-color:var(--brand); font-weight:700;
    }
    .chapter-nav .ch-num {
      width:24px; height:24px; line-height:24px; border-radius:6px;
      background:#e2e8f0; font-size:0.75rem; text-align:center; flex-shrink:0; font-weight:800;
    }
    .chapter-nav li a.active .ch-num { background:var(--brand); color:#ffffff; }
    .chapter-nav .ch-meta { display:flex; flex-direction:column; overflow:hidden; }
    .chapter-nav .ch-name { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .chapter-nav .ch-sub { font-size:0.72rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }

    /* Main Content Area */
    .main-content { flex:1; min-width:0; padding:28px 36px 60px; }

    /* Chapter Section Styling */
    .chapter-section { display:none; }
    .chapter-section.active { display:block; animation:fadeIn 0.2s ease-in; }
    @keyframes fadeIn { from { opacity:0.6; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }

    .chapter-header {
      background:#ffffff; border:1px solid var(--border); border-radius:var(--radius);
      padding:24px; display:flex; align-items:center; justify-content:space-between;
      gap:20px; box-shadow:var(--shadow-sm); margin-bottom:24px; flex-wrap:wrap;
    }
    .chapter-header-info { flex:1; min-width:280px; }
    .ch-badge {
      width:48px; height:48px; line-height:48px; border-radius:12px;
      background:var(--brand); color:#ffffff; font-size:1.4rem; font-weight:900;
      text-align:center; flex-shrink:0;
    }
    .ch-category { font-size:0.8rem; font-weight:800; text-transform:uppercase; color:var(--brand); letter-spacing:0.5px; margin-bottom:4px; }
    .chapter-header h2 { font-size:1.5rem; font-weight:900; color:#0f172a; margin-bottom:4px; }
    .chapter-header p { font-size:0.92rem; color:var(--text-muted); }
    .btn-standalone {
      display:inline-flex; align-items:center; gap:6px; background:var(--brand-light);
      color:var(--brand-text); border:1px solid var(--brand); padding:8px 16px;
      border-radius:8px; font-size:0.84rem; font-weight:700; white-space:nowrap;
    }
    .btn-standalone:hover { background:var(--brand); color:#ffffff; }

    /* Key Concept Card */
    .concept-card {
      background:var(--card-bg); border:1px solid var(--border);
      border-left:4px solid var(--brand); border-radius:var(--radius);
      padding:20px 24px; margin-bottom:28px; box-shadow:var(--shadow-sm);
    }
    .concept-header { display:flex; align-items:center; gap:8px; font-weight:800; font-size:1.02rem; color:#0f172a; margin-bottom:12px; }
    .concept-header svg { color:var(--brand); }
    .concept-list { padding-left:22px; font-size:0.92rem; color:#334155; }
    .concept-list li { margin-bottom:6px; }

    /* Section divider */
    .ex-div {
      font-size:1.15rem; font-weight:800; color:#0f172a; margin:30px 0 16px;
      display:flex; align-items:center; gap:10px;
    }

    /* Question Cards */
    .questions-container { display:flex; flex-direction:column; gap:16px; margin-bottom:30px; }
    .q-card {
      background:#ffffff; border:1px solid var(--border); border-radius:var(--radius);
      box-shadow:var(--shadow-sm); overflow:hidden; transition:border-color 0.15s;
    }
    .q-card:hover { border-color:#cbd5e1; }
    .q-head {
      padding:16px 20px; display:flex; align-items:flex-start; gap:12px;
      cursor:pointer; background:#ffffff; user-select:none;
    }
    .q-num {
      background:var(--brand-light); color:var(--brand-text); font-size:0.75rem;
      font-weight:800; padding:3px 8px; border-radius:6px; flex-shrink:0; margin-top:2px;
    }
    .q-text { flex:1; font-size:0.96rem; font-weight:700; color:#0f172a; line-height:1.5; }
    .q-cat { font-size:0.75rem; font-weight:700; color:var(--text-muted); background:#f1f5f9; padding:2px 8px; border-radius:4px; flex-shrink:0; }
    .q-marks { font-size:0.75rem; font-weight:800; color:#059669; background:#dcfce7; padding:2px 8px; border-radius:4px; flex-shrink:0; }
    .q-toggle { width:18px; height:18px; flex-shrink:0; margin-top:3px; color:#94a3b8; transition:transform 0.2s; }
    .q-card.open .q-toggle { transform:rotate(45deg); color:var(--brand); }

    .q-answer { display:none; padding:0 20px 20px; border-top:1px dashed var(--border); }
    .q-card.open .q-answer { display:block; }
    .answer-box { background:#f8fafc; border-radius:8px; padding:16px; margin-top:16px; }
    .answer-label { font-size:0.8rem; font-weight:800; text-transform:uppercase; color:var(--brand-text); margin-bottom:8px; }
    .answer-text { font-size:0.92rem; color:#1e293b; line-height:1.7; }
    .answer-text strong { color:#0f172a; }

    /* Marking scheme */
    .marking-scheme {
      margin-top:14px; padding-top:12px; border-top:1px dashed #cbd5e1;
      font-size:0.82rem;
    }
    .marking-title { font-weight:800; color:#475569; margin-bottom:6px; text-transform:uppercase; font-size:0.75rem; letter-spacing:0.5px; }
    .marking-row { display:flex; justify-content:space-between; padding:3px 0; color:#334155; }
    .marking-key { flex:1; }
    .marking-marks { font-weight:700; color:#059669; }

    /* Competency Card (NEP 2020) */
    .cbq-card {
      background:linear-gradient(135deg, #fefce8 0%, #ffffff 100%);
      border:1px solid #fde047; border-left:4px solid #eab308;
      border-radius:var(--radius); padding:22px; margin-bottom:28px;
    }
    .cbq-badge {
      display:inline-block; background:#fef08a; color:#854d0e;
      font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:4px;
      text-transform:uppercase; margin-bottom:10px;
    }

    /* Pager Buttons */
    .ch-nav-btns { display:flex; justify-content:space-between; gap:16px; margin-top:36px; padding-top:20px; border-top:1px solid var(--border); }
    .ch-nav-btn {
      padding:10px 20px; font-size:0.88rem; font-weight:700; border-radius:8px;
      background:#ffffff; border:1px solid var(--border); color:#334155; cursor:pointer;
      transition:all 0.15s; display:inline-flex; align-items:center; gap:8px;
    }
    .ch-nav-btn:hover:not(:disabled) { background:var(--brand-light); color:var(--brand-text); border-color:var(--brand); }
    .ch-nav-btn:disabled { opacity:0.4; cursor:not-allowed; }

    /* FAQ Section */
    .faq-section { background:#ffffff; border:1px solid var(--border); border-radius:var(--radius); padding:28px; margin-top:40px; }
    .faq-title { font-size:1.25rem; font-weight:800; color:#0f172a; margin-bottom:16px; }
    .faq-item { margin-bottom:16px; padding-bottom:16px; border-bottom:1px solid var(--border); }
    .faq-item:last-child { margin-bottom:0; padding-bottom:0; border-bottom:none; }
    .faq-q { font-size:0.95rem; font-weight:700; color:#0f172a; margin-bottom:6px; }
    .faq-a { font-size:0.9rem; color:#475569; line-height:1.6; }

    /* Footer */
    .hub-footer {
      background:#ffffff; border-top:1px solid var(--border); padding:30px 24px;
      text-align:center; font-size:0.85rem; color:var(--text-muted); margin-top:40px;
    }
    .hub-footer a { color:var(--brand); font-weight:600; }

    /* Mobile Drawer */
    .mobile-sidebar-toggle {
      display:none; position:fixed; bottom:20px; right:20px; z-index:999;
      background:var(--brand); color:#ffffff; border:none; padding:12px 20px;
      border-radius:30px; font-size:0.88rem; font-weight:700; cursor:pointer;
      box-shadow:var(--shadow-md); align-items:center; gap:8px;
    }
    .sidebar-overlay {
      display:none; position:fixed; top:0; left:0; width:100%; height:100%;
      background:rgba(0,0,0,0.4); z-index:999;
    }

    /* Responsive */
    @media (max-width: 960px) {
      .sidebar {
        position:fixed; top:0; left:0; z-index:1000; height:100%;
        transform:translateX(-100%); transition:transform 0.25s ease-in-out;
        box-shadow:var(--shadow-md);
      }
      .sidebar.open { transform:translateX(0); }
      .sidebar-overlay.show { display:block; }
      .mobile-sidebar-toggle { display:inline-flex; }
      .main-content { padding:20px 16px 80px; }
      .chapter-header { padding:18px; }
    }
  </style>
</head>
<body>
  <!-- Reading Progress -->
  <div class="progress-bar-wrap"><div class="progress-bar" id="progressBar"></div></div>

  <!-- Top Navigation -->
  <header class="top-navbar">
    <div class="nav-left">
      <a href="index.html" class="brand-logo">
        <span>⚡ OlympiadQuiz</span>
        <span class="brand-badge">CBSE 2026-27</span>
      </a>
    </div>
    <nav class="nav-links" id="navLinks">
      <a href="index.html">Home</a>
      <a href="ncert-solutions.html">NCERT Solutions</a>
      <a href="ncert-solutions-class-1.html">Class 1 Hub</a>
      <a href="dashboard.html">Dashboard</a>
    </nav>
  </header>

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-bar" aria-label="Breadcrumb">
    <a href="index.html">Home</a>
    <span class="sep">/</span>
    <a href="ncert-solutions.html">NCERT Solutions</a>
    <span class="sep">/</span>
    <a href="ncert-solutions-class-1.html">Class 1</a>
    <span class="sep">/</span>
    <span class="cur">${subjectTitle} Solutions</span>
  </nav>

  <!-- Hero Header -->
  <section class="hero-banner">
    <div class="hero-meta-pills">
      <span class="pill highlight">✨ Official NCERT Curriculum</span>
      <span class="pill">📚 Dual-Track System</span>
      <span class="pill">💯 100% Exercise Coverage</span>
      <span class="pill">🎯 CBSE Step Marking</span>
    </div>
    <h1>NCERT Solutions for Class 1 ${subjectTitle}</h1>
    <p>Comprehensive step-by-step solutions for <strong>${track1.name}</strong> (New NEP 2020) and <strong>${track2.name}</strong> (Classic CBSE). Covering all ${totalChapters} chapters with model answers, step-by-step marking rubrics, vector illustrations, and competency-based questions.</p>
    
    <!-- Dual-Book Toggle Tabs -->
    <div class="book-tabs">
      <button class="book-tab-btn active" id="btnTrack1" onclick="switchBook('track1')">${track1.tabLabel}</button>
      <button class="book-tab-btn" id="btnTrack2" onclick="switchBook('track2')">${track2.tabLabel}</button>
    </div>
  </section>

  <!-- Horizontal Chapter Quick Jump Bar -->
  <div class="chapter-chips-bar" id="chipsBar">
    <div class="chip-bar-label" id="chipBarLabel">📐 Quick Jump To Chapter — ${track1.name}:</div>
    <div class="chips-group" id="chipsTrack1">${track1Chips}</div>
    <div class="chips-group" id="chipsTrack2" style="display:none;">${track2Chips}</div>
  </div>

  <!-- Layout: Sidebar + Main Content -->
  <div class="layout-wrapper">
    <!-- Sidebar Overlay for Mobile -->
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <span class="sidebar-title" id="sidebarTitleText">${track1.name} (${track1.chapters.length} Chapters)</span>
        <button onclick="toggleSidebar()" style="background:none;border:none;cursor:pointer;font-size:1.2rem;display:none;" id="sidebarCloseBtn">✕</button>
      </div>

      <input type="text" class="search-box" placeholder="🔍 Search chapter or topic..." onkeyup="filterChapters(this.value)">

      <div class="sidebar-book-tabs">
        <button class="sb-tab active" id="sbTab1" onclick="switchBook('track1')">${track1.tabLabel}</button>
        <button class="sb-tab" id="sbTab2" onclick="switchBook('track2')">${track2.tabLabel}</button>
      </div>

      <!-- Navigation for Track 1 -->
      <ul class="chapter-nav" id="navTrack1">${track1Sidebar}</ul>

      <!-- Navigation for Track 2 -->
      <ul class="chapter-nav" id="navTrack2" style="display:none;">${track2Sidebar}</ul>
    </aside>

    <!-- Main Content Area with Chapters -->
    <main class="main-content">
      <!-- Container Track 1 Chapters -->
      <div id="containerTrack1">
        ${track1Sections}
      </div>

      <!-- Container Track 2 Chapters -->
      <div id="containerTrack2">
        ${track2Sections}
      </div>

      <!-- FAQ Section -->
      <section class="faq-section">
        <h2 class="faq-title">Frequently Asked Questions — Class 1 ${subjectTitle} NCERT Solutions</h2>
        ${faqItems.map(f => `
          <div class="faq-item">
            <h3 class="faq-q">❓ ${f.q}</h3>
            <p class="faq-a">${f.a}</p>
          </div>
        `).join('')}
      </section>
    </main>
  </div>

  <!-- Mobile Floating Trigger -->
  <button class="mobile-sidebar-toggle" onclick="toggleSidebar()">
    <span>📑 Chapters Index</span>
  </button>

  <!-- Footer -->
  <footer class="hub-footer">
    <p>© 2026 OlympiadQuiz. Official NCERT Class 1 ${subjectTitle} Dual-Track Academic Portal. Aligned with NEP 2020 / NCF-FS and CBSE 2026-27 Guidelines.</p>
    <p style="margin-top:6px;">Explore <a href="ncert-solutions-class-1.html">All Class 1 Subjects</a> • <a href="ncert-solutions.html">All Classes (1 to 10)</a></p>
  </footer>

  <!-- Direct DOM Element Navigation Client Script -->
  <script>
    let currentBook = 'track1';
    const track1Ids = ${track1Ids};
    const track2Ids = ${track2Ids};
    const track1Name = "${track1.name.replace(/"/g, '\\"')}";
    const track2Name = "${track2.name.replace(/"/g, '\\"')}";
    const track1Count = ${track1.chapters.length};
    const track2Count = ${track2.chapters.length};

    function syncBookUi(book) {
      const isT1 = (book === 'track1');
      document.getElementById('btnTrack1').classList.toggle('active', isT1);
      document.getElementById('btnTrack2').classList.toggle('active', !isT1);
      const sbTab1 = document.getElementById('sbTab1');
      const sbTab2 = document.getElementById('sbTab2');
      if (sbTab1) sbTab1.classList.toggle('active', isT1);
      if (sbTab2) sbTab2.classList.toggle('active', !isT1);

      document.getElementById('chipsTrack1').style.display = isT1 ? 'flex' : 'none';
      document.getElementById('chipsTrack2').style.display = isT1 ? 'none' : 'flex';
      document.getElementById('navTrack1').style.display = isT1 ? 'block' : 'none';
      document.getElementById('navTrack2').style.display = isT1 ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isT1 ? '📐 Quick Jump To Chapter — ' + track1Name + ':' : '📐 Quick Jump To Chapter — ' + track2Name + ':';
      document.getElementById('sidebarTitleText').innerText = isT1 ? track1Name + ' (' + track1Count + ' Chapters)' : track2Name + ' (' + track2Count + ' Chapters)';
    }

    function switchBook(book) {
      currentBook = book;
      syncBookUi(book);
      const defaultId = (book === 'track1') ? '${defaultTrack1Id}' : '${defaultTrack2Id}';
      showChapter(defaultId);
    }

    function showChapter(targetId, updateHistory = true) {
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      // Auto-switch book if chapter belongs to the other track
      if (track2Ids.includes(targetId) && currentBook !== 'track2') {
        currentBook = 'track2';
        syncBookUi('track2');
      } else if (track1Ids.includes(targetId) && currentBook !== 'track1') {
        currentBook = 'track1';
        syncBookUi('track1');
      }

      // Toggle active chapter section
      document.querySelectorAll('.chapter-section').forEach(s => s.classList.remove('active'));
      targetEl.classList.add('active');

      // Toggle active chips
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
      const activeNavId = (currentBook === 'track1') ? 'navTrack1' : 'navTrack2';
      document.querySelectorAll('#' + activeNavId + ' li').forEach(li => {
        const text = li.innerText.toLowerCase();
        li.style.display = text.includes(q) ? 'block' : 'none';
      });
    }

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('sidebarOverlay').classList.toggle('show');
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
      if (hash && document.getElementById(hash)) {
        showChapter(hash, false);
        return;
      }
      // default: Chapter 1 of Track 1
      showChapter('${defaultTrack1Id}', false);
    });
  </script>
</body>
</html>`;
}

// --------------------------------------------------------------------------
// 1. MATHEMATICS DUAL-TRACK HUB
// --------------------------------------------------------------------------
const mathsHtml = buildSubjectHub({
  subjectTitle: 'Mathematics',
  subjectSlug: 'maths',
  brandColor: '#2563eb',
  brandHover: '#1d4ed8',
  brandLight: '#eff6ff',
  brandText: '#1e40af',
  track1: {
    name: 'Joyful Mathematics',
    code: 'joyful',
    label: '📘 Joyful Mathematics (NEP 2020) — 13 Chapters',
    tabLabel: '📘 Joyful Maths',
    chapters: joyfulMathsChapters,
    dir: 'chapters-c1m',
    prefix: 'joyful-maths'
  },
  track2: {
    name: 'Math-Magic Book 1',
    code: 'magic',
    label: '📙 Math-Magic (Classic CBSE) — 13 Chapters',
    tabLabel: '📙 Math-Magic',
    chapters: mathMagicChapters,
    dir: 'chapters-c1m',
    prefix: 'math-magic'
  },
  metaDesc: '100% Complete NCERT Solutions for Class 1 Mathematics covering Joyful Mathematics (13 Ch) & Math-Magic Book 1 (13 Ch) with step-by-step CBSE marking schemes, vector diagrams, and NEP 2020 competency case studies.',
  keywords: 'ncert solutions class 1 maths, joyful mathematics class 1, math magic class 1 solutions, finding the furry cat class 1, making 10 class 1, shapes and space class 1, cbse class 1 maths 2026-27',
  faqItems: [
    {
      q: 'Which textbooks are covered under Class 1 NCERT Mathematics?',
      a: 'Both official NCERT Class 1 Mathematics textbooks are fully covered: the new NEP 2020 textbook Joyful Mathematics (13 chapters) and the classic CBSE textbook Math-Magic Book 1 (13 chapters), totaling 26 chapters.'
    },
    {
      q: 'Are labeled diagrams and visual models included in these solutions?',
      a: 'Yes, every single chapter features high-resolution vector SVG diagrams illustrating spatial positions, shapes, bundles of 10, addition, subtraction, money coins, and patterns.'
    },
    {
      q: 'Do these solutions contain official CBSE step-by-step marking rubrics?',
      a: 'Yes, each solution provides a transparent step marking scheme showing exactly how marks are awarded for counting, method of grouping, calculation steps, and final units.'
    }
  ]
});
fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-1-maths.html'), mathsHtml, 'utf8');
console.log(`✅ Generated ncert-solutions-class-1-maths.html (${mathsHtml.length.toLocaleString()} bytes)`);

// --------------------------------------------------------------------------
// 2. ENGLISH DUAL-TRACK HUB
// --------------------------------------------------------------------------
const englishHtml = buildSubjectHub({
  subjectTitle: 'English',
  subjectSlug: 'english',
  brandColor: '#0284c7',
  brandHover: '#0369a1',
  brandLight: '#f0f9ff',
  brandText: '#075985',
  track1: {
    name: 'Mridang',
    code: 'mridang',
    label: '📘 Mridang (NEP 2020) — 9 Chapters',
    tabLabel: '📘 Mridang',
    chapters: mridangChapters,
    dir: 'chapters-c1e',
    prefix: 'mridang'
  },
  track2: {
    name: 'Marigold Book 1',
    code: 'marigold',
    label: '📙 Marigold (Classic CBSE) — 20 Chapters',
    tabLabel: '📙 Marigold',
    chapters: marigoldChapters,
    dir: 'chapters-c1e',
    prefix: 'marigold'
  },
  metaDesc: '100% Complete NCERT Solutions for Class 1 English covering Mridang (9 Ch) & Marigold Book 1 (20 Ch) with reading comprehension, rhyming words, grammar worksheets, and CBSE step marking rubrics.',
  keywords: 'ncert solutions class 1 english, mridang class 1 solutions, marigold class 1 ncert, two little hands class 1, the cap seller and the monkeys, a happy child, three little pigs, cbse class 1 english 2026-27',
  faqItems: [
    {
      q: 'Which textbooks are covered under Class 1 NCERT English?',
      a: 'Both official NCERT Class 1 English textbooks are fully covered: the new NEP 2020 textbook Mridang (9 chapters) and the classic CBSE textbook Marigold Book 1 (20 chapters), totaling 29 chapters.'
    },
    {
      q: 'Are rhyming words, sight words, and phonetic drills included?',
      a: 'Yes, all exercises include sound recognition, word tracing, vocabulary banks, sentence formation, and interactive reading comprehension questions.'
    },
    {
      q: 'Do solutions include grammar concepts for foundational grade 1?',
      a: 'Yes, foundational grammar including naming words (nouns), action words (verbs), opposites (antonyms), and simple sentences are systematically solved.'
    }
  ]
});
fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-1-english.html'), englishHtml, 'utf8');
console.log(`✅ Generated ncert-solutions-class-1-english.html (${englishHtml.length.toLocaleString()} bytes)`);

// --------------------------------------------------------------------------
// 3. HINDI DUAL-TRACK HUB
// --------------------------------------------------------------------------
const hindiHtml = buildSubjectHub({
  subjectTitle: 'Hindi (हिंदी)',
  subjectSlug: 'hindi',
  brandColor: '#ea580c',
  brandHover: '#c2410c',
  brandLight: '#fff7ed',
  brandText: '#9a3412',
  track1: {
    name: 'सारंगी (Sarangi)',
    code: 'sarangi',
    label: '📕 सारंगी (NEP 2020) — 19 पाठ',
    tabLabel: '📕 सारंगी',
    chapters: sarangiChapters,
    dir: 'chapters-c1h',
    prefix: 'sarangi'
  },
  track2: {
    name: 'रिमझिम भाग १ (Rimjhim)',
    code: 'rimjhim',
    label: '📙 रिमझिम भाग १ (Classic CBSE) — 23 पाठ',
    tabLabel: '📙 रिमझिम १',
    chapters: rimjhimChapters,
    dir: 'chapters-c1h',
    prefix: 'rimjhim'
  },
  metaDesc: 'कक्षा 1 हिंदी के संपूर्ण एनसीईआरटी समाधान: सारंगी (19 पाठ) एवं रिमझिम भाग १ (23 पाठ) - भावार्थ, शब्दार्थ, प्रश्नोत्तर, भाषा की बात (व्याकरण) एवं योग्यता-आधारित प्रश्न।',
  keywords: 'ncert solutions class 1 hindi, sarangi class 1 solutions, rimjhim class 1 ncert, मीना का परिवार, झूला, आम की कहानी, सारंगी कक्षा 1 समाधान, cbse class 1 hindi',
  faqItems: [
    {
      q: 'कक्षा 1 हिंदी के कौन-से पाठ्यक्रम उपलब्ध हैं?',
      a: 'कक्षा 1 हिंदी की दोनों आधिकारिक पाठ्यपुस्तकों का 100% समाधान उपलब्ध है: नई NEP 2020 पाठ्यपुस्तक सारंगी (19 पाठ) एवं क्लासिक सीबीएसई पाठ्यपुस्तक रिमझिम भाग १ (23 पाठ), कुल 42 पाठ।'
    },
    {
      q: 'क्या प्रत्येक पाठ के शब्दार्थ एवं भाषा की बात (व्याकरण) शामिल हैं?',
      a: 'हाँ, प्रत्येक पाठ में कठिन शब्दों के सरल अर्थ, तुकांत शब्द, विलोम शब्द, वाक्य रचना, वर्णमाला एवं रचनात्मक लेखन का संपूर्ण विवरण है।'
    },
    {
      q: 'क्या सीबीएसई मूल्यांकन पद्धति के अनुसार अंक आवंटन दिया गया है?',
      a: 'हाँ, प्रत्येक प्रश्न के साथ सीबीएसई की आधिकारिक स्टेप-मार्किंग रूब्रिक दी गई है ताकि बच्चे सही उत्तर लेखन शैली सीख सकें।'
    }
  ]
});
fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-1-hindi.html'), hindiHtml, 'utf8');
console.log(`✅ Generated ncert-solutions-class-1-hindi.html (${hindiHtml.length.toLocaleString()} bytes)`);

// --------------------------------------------------------------------------
// 4. ENVIRONMENTAL STUDIES DUAL-TRACK HUB
// --------------------------------------------------------------------------
const evsHtml = buildSubjectHub({
  subjectTitle: 'Environmental Studies (EVS)',
  subjectSlug: 'evs',
  brandColor: '#059669',
  brandHover: '#047857',
  brandLight: '#ecfdf5',
  brandText: '#065f46',
  track1: {
    name: 'Our Living World & Nature',
    code: 'living',
    label: '🌿 Our Living World (NEP Foundational) — 10 Chapters',
    tabLabel: '🌿 Living World',
    chapters: livingWorldChapters,
    dir: 'chapters-c1evs',
    prefix: 'living-world'
  },
  track2: {
    name: 'Our Surroundings & Community',
    code: 'surroundings',
    label: '🌍 Surroundings & Community (Classic) — 10 Chapters',
    tabLabel: '🌍 Surroundings',
    chapters: surroundingsChapters,
    dir: 'chapters-c1evs',
    prefix: 'surroundings'
  },
  metaDesc: '100% Complete NCERT Solutions for Class 1 EVS covering Our Living World & Nature (10 Ch) and Surroundings & Community (10 Ch) with step marking rubrics and vector diagrams.',
  keywords: 'ncert solutions class 1 evs, living world class 1 solutions, surroundings class 1 ncert, about me and my body, plants around us, air water weather, safety everywhere',
  faqItems: [
    {
      q: 'Which textbooks and themes are covered in Class 1 EVS?',
      a: 'Class 1 Environmental Studies comprehensively covers foundational environmental literacy across 20 chapters: Our Living World & Nature (10 chapters) and Surroundings & Community (10 chapters).'
    },
    {
      q: 'Are environmental protection and hygiene practices included?',
      a: 'Yes, solutions include healthy eating habits, clean water, personal hygiene, plant care, animal compassion, and traffic safety.'
    },
    {
      q: 'Do solutions provide observation activities for young learners?',
      a: 'Yes, inquiry-based observational activities, nature journaling prompts, and sensory exploration tasks are woven throughout the solutions.'
    }
  ]
});
fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-1-evs.html'), evsHtml, 'utf8');
console.log(`✅ Generated ncert-solutions-class-1-evs.html (${evsHtml.length.toLocaleString()} bytes)`);

// --------------------------------------------------------------------------
// 5. CENTRAL CLASS 1 HUB PAGE (ncert-solutions-class-1.html)
// --------------------------------------------------------------------------
const centralHubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 1 All Subjects CBSE 2026-27 | Maths, English, Hindi, EVS | OlympiadQuiz</title>
  <meta name="description" content="100% Free &amp; Complete NCERT Class 1 Solutions for all subjects (Session 2026–27). Chapter-wise solutions for Maths (Joyful Mathematics &amp; Math-Magic), English (Mridang &amp; Marigold), Hindi (Sarangi &amp; Rimjhim), and EVS (Our Living World &amp; Surroundings). Step-by-step marking schemes, diagrams &amp; NEP 2020 CBQs.">
  <meta name="keywords" content="ncert solutions class 1, class 1 ncert solutions all subjects, cbse class 1 2026-27, class 1 joyful mathematics, class 1 math magic, class 1 mridang english, class 1 marigold, class 1 sarangi hindi, class 1 rimjhim, class 1 evs living world, free class 1 ncert solutions">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-1.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-1.html">
  <meta property="og:title" content="NCERT Solutions for Class 1 All Subjects CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% complete chapter-wise NCERT solutions for Class 1 Maths, English, Hindi, and EVS covering both NEP 2020 and Classic CBSE textbooks across 117 chapters.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Schema.org BreadcrumbList -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://olympiadquiz.org/" },
      { "@type": "ListItem", "position": 2, "name": "NCERT Solutions", "item": "https://olympiadquiz.org/ncert-solutions.html" },
      { "@type": "ListItem", "position": 3, "name": "Class 1 Hub", "item": "https://olympiadquiz.org/ncert-solutions-class-1.html" }
    ]
  }
  </script>

  <style>
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --text: #0f172a;
      --text-muted: #64748b;
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --border: #e2e8f0;
      --radius: 16px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
      --shadow-md: 0 10px 25px -5px rgba(0,0,0,0.08);
      --shadow-lg: 0 20px 30px -10px rgba(0,0,0,0.12);
    }
    * { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
    body { background:var(--bg); color:var(--text); line-height:1.6; }
    a { color:inherit; text-decoration:none; }

    /* Top Navigation */
    .top-navbar {
      position:sticky; top:0; z-index:1000;
      background:#ffffff; border-bottom:1px solid var(--border);
      padding:12px 24px; display:flex; align-items:center; justify-content:space-between;
      box-shadow:var(--shadow-sm);
    }
    .brand-logo { display:flex; align-items:center; gap:8px; font-weight:800; font-size:1.25rem; color:#0f172a; }
    .brand-badge { background:#eff6ff; color:#1d4ed8; font-size:0.75rem; font-weight:700; padding:3px 8px; border-radius:6px; border:1px solid #bfdbfe; }
    .nav-links { display:flex; align-items:center; gap:20px; font-size:0.9rem; font-weight:600; color:#334155; }
    .nav-links a:hover { color:var(--primary); }

    /* Breadcrumbs */
    .breadcrumb-bar {
      background:#ffffff; border-bottom:1px solid var(--border);
      padding:10px 24px; font-size:0.85rem; color:var(--text-muted);
      display:flex; align-items:center; gap:8px;
    }
    .breadcrumb-bar a { color:var(--text-muted); }
    .breadcrumb-bar a:hover { color:var(--primary); }
    .breadcrumb-bar span.sep { color:#cbd5e1; }
    .breadcrumb-bar .cur { color:var(--primary); font-weight:700; }

    /* Hero Banner */
    .hero-banner {
      background:linear-gradient(135deg, #eff6ff 0%, #f0fdf4 50%, #ffffff 100%);
      padding:48px 24px; text-align:center; border-bottom:1px solid var(--border);
    }
    .hero-badge { display:inline-flex; align-items:center; gap:6px; background:#dbeafe; color:#1e40af; font-size:0.82rem; font-weight:800; padding:6px 16px; border-radius:30px; margin-bottom:16px; text-transform:uppercase; letter-spacing:0.5px; }
    .hero-banner h1 { font-size:2.4rem; font-weight:900; color:#0f172a; margin-bottom:12px; }
    .hero-banner p { font-size:1.05rem; color:#475569; max-width:800px; margin:0 auto 24px; line-height:1.7; }
    .hero-stats { display:flex; justify-content:center; gap:32px; flex-wrap:wrap; margin-top:20px; }
    .stat-item { text-align:center; }
    .stat-num { font-size:1.8rem; font-weight:900; color:var(--primary); }
    .stat-label { font-size:0.82rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; }

    /* Content Container */
    .container { max-width:1200px; margin:0 auto; padding:40px 24px; }
    .section-title { font-size:1.6rem; font-weight:900; color:#0f172a; margin-bottom:8px; text-align:center; }
    .section-sub { font-size:0.95rem; color:var(--text-muted); text-align:center; margin-bottom:36px; max-width:650px; margin-left:auto; margin-right:auto; }

    /* Subject Cards Grid */
    .subject-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(270px, 1fr)); gap:24px; margin-bottom:50px; }
    .subject-card {
      background:var(--card-bg); border:1px solid var(--border); border-radius:var(--radius);
      padding:28px 24px; box-shadow:var(--shadow-sm); transition:all 0.25s ease;
      display:flex; flex-direction:column; justify-content:space-between; position:relative; overflow:hidden;
    }
    .subject-card:hover { transform:translateY(-6px); box-shadow:var(--shadow-lg); border-color:#cbd5e1; }
    .subject-card::before { content:''; position:absolute; top:0; left:0; right:0; height:5px; }
    .subject-card.maths::before { background:#2563eb; }
    .subject-card.english::before { background:#0284c7; }
    .subject-card.hindi::before { background:#ea580c; }
    .subject-card.evs::before { background:#059669; }

    .sub-icon { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:1.6rem; margin-bottom:16px; }
    .maths .sub-icon { background:#eff6ff; color:#2563eb; }
    .english .sub-icon { background:#f0f9ff; color:#0284c7; }
    .hindi .sub-icon { background:#fff7ed; color:#ea580c; }
    .evs .sub-icon { background:#ecfdf5; color:#059669; }

    .sub-title { font-size:1.25rem; font-weight:800; color:#0f172a; margin-bottom:6px; }
    .sub-desc { font-size:0.88rem; color:#475569; margin-bottom:16px; line-height:1.5; }
    .sub-tracks { display:flex; flex-direction:column; gap:6px; margin-bottom:20px; }
    .sub-track-pill { font-size:0.78rem; font-weight:700; padding:4px 10px; border-radius:6px; display:inline-flex; align-items:center; gap:6px; }
    .maths .sub-track-pill { background:#eff6ff; color:#1e40af; }
    .english .sub-track-pill { background:#f0f9ff; color:#075985; }
    .hindi .sub-track-pill { background:#fff7ed; color:#9a3412; }
    .evs .sub-track-pill { background:#ecfdf5; color:#065f46; }

    .sub-btn {
      display:inline-flex; align-items:center; justify-content:center; gap:8px;
      padding:11px 18px; border-radius:10px; font-size:0.9rem; font-weight:700;
      color:#ffffff; transition:opacity 0.2s; text-align:center;
    }
    .maths .sub-btn { background:#2563eb; }
    .english .sub-btn { background:#0284c7; }
    .hindi .sub-btn { background:#ea580c; }
    .evs .sub-btn { background:#059669; }
    .sub-btn:hover { opacity:0.9; }

    /* Features Grid */
    .features-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px; margin-top:20px; margin-bottom:50px; }
    .feature-card { background:#ffffff; border:1px solid var(--border); border-radius:12px; padding:20px; box-shadow:var(--shadow-sm); }
    .feature-card h3 { font-size:1rem; font-weight:800; color:#0f172a; margin-bottom:6px; }
    .feature-card p { font-size:0.86rem; color:#475569; }

    /* Footer */
    .hub-footer { background:#ffffff; border-top:1px solid var(--border); padding:32px 24px; text-align:center; font-size:0.85rem; color:var(--text-muted); }
    .hub-footer a { color:var(--primary); font-weight:600; }
  </style>
</head>
<body>
  <!-- Top Navbar -->
  <header class="top-navbar">
    <a href="index.html" class="brand-logo">
      <span>⚡ OlympiadQuiz</span>
      <span class="brand-badge">CBSE 2026-27</span>
    </a>
    <nav class="nav-links">
      <a href="index.html">Home</a>
      <a href="ncert-solutions.html">NCERT Solutions</a>
      <a href="dashboard.html">Dashboard</a>
    </nav>
  </header>

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-bar" aria-label="Breadcrumb">
    <a href="index.html">Home</a>
    <span class="sep">/</span>
    <a href="ncert-solutions.html">NCERT Solutions</a>
    <span class="sep">/</span>
    <span class="cur">Class 1 Hub</span>
  </nav>

  <!-- Hero Banner -->
  <section class="hero-banner">
    <div class="hero-badge">🌟 NCERT Class 1 Complete Portal (2026–27)</div>
    <h1>NCERT Solutions for Class 1</h1>
    <p>100% Genuine, Comprehensive Chapter-wise Solutions across all 4 Core Subjects and 8 Official Textbooks. Built according to the New NEP 2020 (NCF-FS) &amp; Classic CBSE Curriculums with step-by-step model answers, vector diagrams, and competency case studies.</p>
    
    <div class="hero-stats">
      <div class="stat-item"><div class="stat-num">4</div><div class="stat-label">Core Subjects</div></div>
      <div class="stat-item"><div class="stat-num">8</div><div class="stat-label">NCERT Textbooks</div></div>
      <div class="stat-item"><div class="stat-num">117</div><div class="stat-label">Chapters Covered</div></div>
      <div class="stat-item"><div class="stat-num">100%</div><div class="stat-label">Exercise Coverage</div></div>
    </div>
  </section>

  <!-- Main Content -->
  <div class="container">
    <h2 class="section-title">Select Your Subject</h2>
    <p class="section-sub">Choose a subject to explore its interactive dual-track solutions hub, switch between textbooks, and access dedicated standalone chapter guides.</p>

    <!-- Subject Cards Grid -->
    <div class="subject-grid">
      <!-- 1. Mathematics -->
      <div class="subject-card maths">
        <div>
          <div class="sub-icon">📐</div>
          <h3 class="sub-title">Mathematics</h3>
          <p class="sub-desc">Spatial relationships, shapes, numbers 1 to 100, tens &amp; ones bundles, measurement, money, and patterns.</p>
          <div class="sub-tracks">
            <span class="sub-track-pill">📘 Joyful Mathematics (13 Ch)</span>
            <span class="sub-track-pill">📙 Math-Magic Book 1 (13 Ch)</span>
          </div>
        </div>
        <a href="ncert-solutions-class-1-maths.html" class="sub-btn">Explore Maths Solutions (26 Ch) →</a>
      </div>

      <!-- 2. English -->
      <div class="subject-card english">
        <div>
          <div class="sub-icon">📖</div>
          <h3 class="sub-title">English</h3>
          <p class="sub-desc">Action rhymes, phonics, story comprehension, naming words, animal sounds, seasons, and rainbow colours.</p>
          <div class="sub-tracks">
            <span class="sub-track-pill">📘 Mridang (9 Ch)</span>
            <span class="sub-track-pill">📙 Marigold Book 1 (20 Ch)</span>
          </div>
        </div>
        <a href="ncert-solutions-class-1-english.html" class="sub-btn">Explore English Solutions (29 Ch) →</a>
      </div>

      <!-- 3. Hindi -->
      <div class="subject-card hindi">
        <div>
          <div class="sub-icon">🇮🇳</div>
          <h3 class="sub-title">Hindi (हिंदी)</h3>
          <p class="sub-desc">सरल भावार्थ, वर्णमाला, तुकांत शब्द, बालगीत, दैनिक दिनचर्या, बातचीत के लिए एवं रचनात्मक लेखन।</p>
          <div class="sub-tracks">
            <span class="sub-track-pill">📕 सारंगी - Sarangi (19 पाठ)</span>
            <span class="sub-track-pill">📙 रिमझिम भाग १ (23 पाठ)</span>
          </div>
        </div>
        <a href="ncert-solutions-class-1-hindi.html" class="sub-btn">हिंदी समाधान देखें (42 पाठ) →</a>
      </div>

      <!-- 4. EVS -->
      <div class="subject-card evs">
        <div>
          <div class="sub-icon">🌿</div>
          <h3 class="sub-title">Environmental Studies</h3>
          <p class="sub-desc">Sense organs, body hygiene, family, plants, animals, weather, neighbourhood helpers, and traffic safety.</p>
          <div class="sub-tracks">
            <span class="sub-track-pill">🌿 Our Living World &amp; Nature (10 Ch)</span>
            <span class="sub-track-pill">🌍 Surroundings &amp; Community (10 Ch)</span>
          </div>
        </div>
        <a href="ncert-solutions-class-1-evs.html" class="sub-btn">Explore EVS Solutions (20 Ch) →</a>
      </div>
    </div>

    <!-- Pedagogy Pillars -->
    <h2 class="section-title" style="margin-top:60px;">Why Choose OlympiadQuiz Class 1 Solutions?</h2>
    <p class="section-sub">Engineered specifically for young foundational learners, parents, and educators in compliance with NEP 2020.</p>

    <div class="features-grid">
      <div class="feature-card">
        <h3>🔍 100% Real Exercise Coverage</h3>
        <p>Zero questions omitted. Covers every textbook activity, let-us-do question, conversation prompt, and picture comprehension exercise.</p>
      </div>
      <div class="feature-card">
        <h3>🎯 CBSE Step-by-Step Marking</h3>
        <p>Every problem includes a transparent scoring rubric breaking down marks for conceptual steps, diagrams, and answers.</p>
      </div>
      <div class="feature-card">
        <h3>📊 High-Definition Vector SVGs</h3>
        <p>Clear, colorful geometric illustrations, number lines, tens-frames, and scene diagrams rendered in clean SVG format.</p>
      </div>
      <div class="feature-card">
        <h3>💡 NEP 2020 Competency Cases</h3>
        <p>Includes higher-order thinking (HOTS) case studies and daily life applications to foster early analytical skills.</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="hub-footer">
    <p>© 2026 OlympiadQuiz. Official NCERT Class 1 Academic Portal. Aligned with NEP 2020 / NCF-FS and CBSE 2026-27 Guidelines.</p>
    <p style="margin-top:6px;"><a href="ncert-solutions.html">Explore All Classes (1 to 10)</a> • <a href="dashboard.html">Student Dashboard</a></p>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, 'ncert-solutions-class-1.html'), centralHubHtml, 'utf8');
console.log(`✅ Generated ncert-solutions-class-1.html (${centralHubHtml.length.toLocaleString()} bytes)`);

console.log("\n🎉 ALL 4 DUAL-TRACK SUBJECT HUBS AND CENTRAL CLASS 1 HUB COMPILED SUCCESSFULLY!");
