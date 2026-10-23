// Generator for NCERT Class 3 Mathematics Solutions (100% Question Coverage: Maths Mela + Math-Magic)
// Uniform Class 10 Design & Navigation Architecture
const fs = require('fs');
const path = require('path');

const { mathsMelaChapters } = require('./data-c3-maths/mathsMelaData.js');
const { mathMagicChapters } = require('./data-c3-maths/mathMagicData.js');

console.log("=== BUILDING NCERT CLASS 3 MATHEMATICS SOLUTIONS (MATHS MELA + MATH-MAGIC) ===");
console.log(`Loaded ${mathsMelaChapters.length} Maths Mela Chapters and ${mathMagicChapters.length} Math-Magic Chapters`);

// -------------------------------------------------------------
// PART 1: RENDERING FUNCTIONS
// -------------------------------------------------------------

function renderChapterSection(ch, bookKey, idx, arr) {
  const conceptsHtml = ch.concepts.map(c => `<li>${c}</li>`).join('');
  
  const isMela = bookKey === 'mela';
  const modularUrl = isMela ? `chapters-c3m/maths-mela-ch${ch.num}.html` : `chapters-c3m/math-magic-ch${ch.num}.html`;
  const qCount = isMela ? 22 : 27;

  const prevCh = idx > 0 ? arr[idx - 1] : null;
  const nextCh = idx < arr.length - 1 ? arr[idx + 1] : null;

  return `
  <section class="chapter-section${(bookKey === 'mela' && idx === 0) ? ' active' : ''}" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <div class="ch-category">${ch.unit} • Class 3 Mathematics (${isMela ? 'New NEP 2020' : 'Classic CBSE'})</div>
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

    <!-- Single 100% Complete Exercise Solutions Gateway Card -->
    <div class="gateway-card">
      <div class="gateway-pill">
        <span>✅ 100% Question Coverage</span> • <span>All ${qCount}+ Solved Questions</span>
      </div>
      <h3 class="gateway-title">Chapter ${ch.num}: ${ch.title} — Full NCERT Solutions</h3>
      <p class="gateway-desc">
        Access all <strong>${qCount}+ textbook exercises, in-text activities, classroom projects, and puzzles</strong> with step-by-step CBSE marking schemes and labeled vector diagrams.
      </p>
      <a href="${modularUrl}" class="btn-open-modular">
        <span>📖 Open Chapter ${ch.num} Complete Solutions (${qCount}+ Questions)</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 Competency-Based Case Study (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid var(--brand);"><strong>Real-World Math Context:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>Analytical Task:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #bfdbfe;font-size:0.8rem;font-weight:700;color:var(--brand-text);">CBSE Assessment Rubric: ${ch.cbq.rubric}</div>
    </div>

    <!-- Chapter Navigation Buttons -->
    <div class="ch-nav-btns">
      ${prevCh ? `<button class="ch-nav-btn prev" onclick="showChapter('ch_${prevCh.id}')">← Ch ${prevCh.num}: ${prevCh.title.split('—')[0].trim()}</button>` : `<button class="ch-nav-btn prev" disabled>← Previous Chapter</button>`}
      <a href="${modularUrl}" class="ch-nav-btn next" style="background:var(--brand);color:white;border-color:var(--brand);">Open Chapter ${ch.num} Solutions ➔</a>
      ${nextCh ? `<button class="ch-nav-btn next" onclick="showChapter('ch_${nextCh.id}')">Ch ${nextCh.num}: ${nextCh.title.split('—')[0].trim()} →</button>` : `<button class="ch-nav-btn next" disabled>Next Chapter →</button>`}
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const melaSections = mathsMelaChapters.map((ch, idx, arr) => renderChapterSection(ch, "mela", idx, arr)).join('\n');
const magicSections = mathMagicChapters.map((ch, idx, arr) => renderChapterSection(ch, "magic", idx, arr)).join('\n');

const melaChips = mathsMelaChapters.map((ch, idx) => `
  <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </span>
`).join('');

const magicChips = mathMagicChapters.map((ch, idx) => `
  <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('—')[0].trim()}
  </span>
`).join('');

const melaSidebar = mathsMelaChapters.map((ch, idx) => `
  <li>
    <a onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}" class="${idx === 0 ? 'active' : ''}">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit}</span>
      </div>
    </a>
  </li>
`).join('');

const magicSidebar = mathMagicChapters.map((ch, idx) => `
  <li>
    <a onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}" class="${idx === 0 ? 'active' : ''}">
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
      --brand-hover: #1d4ed8;
      --brand-light: #eff6ff;
      --brand-text: #1e40af;
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
    .ncert-bc-pill.active { background: var(--brand); color: #ffffff; border-color: var(--brand); box-shadow: 0 2px 6px rgba(37,99,235,0.3); }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); color: white; padding: 40px 24px; text-align: center; border-bottom: 3px solid var(--brand); }
    .hero-banner h1 { font-size: 2rem; font-weight: 800; margin-bottom: 10px; letter-spacing: -0.02em; }
    .hero-banner p { color: #c7d2fe; font-size: 0.98rem; max-width: 780px; margin: 0 auto 18px; line-height: 1.65; }
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
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(37,99,235,.35); }
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
    .ch-badge { width: 44px; height: 44px; background: var(--brand); color: white; border-radius: 12px; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(37,99,235,0.3); }
    .chapter-header-info .ch-category { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--brand); letter-spacing: 0.05em; margin-bottom: 2px; }
    .chapter-header-info h2 { font-size: 1.45rem; font-weight: 800; color: var(--navy); }
    .chapter-header-info p { font-size: .825rem; color: var(--muted); margin-top: 2px; }

    /* Concept & Gateway Cards */
    .concept-card { background: white; border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: var(--shadow); }
    .concept-header { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 0.95rem; color: var(--brand); margin-bottom: 12px; }
    .concept-list { list-style: none; }
    .concept-list li { position: relative; padding-left: 20px; margin-bottom: 8px; font-size: 0.88rem; color: var(--slate); line-height: 1.5; }
    .concept-list li::before { content: "•"; position: absolute; left: 6px; color: var(--brand); font-weight: 900; }

    /* Single Gateway Card */
    .gateway-card { background: linear-gradient(135deg, var(--brand-light) 0%, #ffffff 100%); border: 1.5px solid var(--border); border-left: 4px solid var(--brand); border-radius: 12px; padding: 24px; margin: 24px 0; box-shadow: var(--shadow); text-align: center; }
    .gateway-pill { display: inline-flex; align-items: center; gap: 6px; background: #dcfce7; color: #15803d; font-size: 0.78rem; font-weight: 800; padding: 4px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 10px; }
    .gateway-title { font-size: 1.25rem; font-weight: 800; color: var(--navy); margin-bottom: 6px; }
    .gateway-desc { font-size: 0.9rem; color: var(--slate); max-width: 650px; margin: 0 auto 18px; line-height: 1.6; }
    .btn-open-modular { display: inline-flex; align-items: center; gap: 8px; background: var(--brand); color: white; font-weight: 700; font-size: 0.95rem; padding: 12px 28px; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 12px rgba(0,0,0,0.12); transition: all 0.2s; }
    .btn-open-modular:hover { background: var(--brand-hover); transform: translateY(-1px); }

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
            <a href="ncert-solutions-class-3.html" style="font-weight:700;color:#2563eb;background:#eff6ff;">Class 3 Solutions Hub ✨ (Active)</a>
            <a href="ncert-solutions-class-3-maths.html">Class 3 Maths</a>
            <a href="ncert-solutions-class-3-english.html">Class 3 English</a>
            <a href="ncert-solutions-class-3-hindi.html">Class 3 Hindi</a>
            <a href="ncert-solutions-class-3-evs.html">Class 3 EVS</a>
            <a href="ncert-solutions-class-10-maths.html">Class 10 Maths</a>
            <a href="ncert-solutions-class-10-science.html">Class 10 Science</a>
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
        <li><a href="ncert-solutions-class-3.html">Class 3</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">Mathematics</li>
      </ol>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-3-maths.html" class="ncert-bc-pill active">Maths</a>
        <a href="ncert-solutions-class-3-english.html" class="ncert-bc-pill">English</a>
        <a href="ncert-solutions-class-3-hindi.html" class="ncert-bc-pill">Hindi</a>
        <a href="ncert-solutions-class-3-evs.html" class="ncert-bc-pill">EVS</a>
      </div>
    </div>
  </nav>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <h1>Class 3 Maths — NCERT Solutions (CBSE 2026-27)</h1>
    <p>Complete <strong>100% textbook question coverage</strong> across all 28 chapters of Maths Mela (New NEP 2020) and Math-Magic with step-by-step CBSE marking schemes, vector diagrams, and competency case studies.</p>
    <div class="hero-badges">
      <span class="hero-badge">✅ All 28 Chapters (100% Questions)</span>
      <span class="hero-badge">📘 Maths Mela (14 Ch) &amp; 📙 Math-Magic (14 Ch)</span>
      <span class="hero-badge">📐 Vector Visual Diagrams</span>
      <span class="hero-badge">🔢 Step-by-Step Marking Schemes</span>
      <span class="hero-badge">🎯 NEP 2020 Competency CBQs</span>
    </div>
    
    <!-- Track Switcher -->
    <div class="book-toggle-bar">
      <button id="btnMela" class="track-btn active" onclick="switchBook('mela')">
        📘 Maths Mela (New NCF 2023 - 14 Ch)
      </button>
      <button id="btnMagic" class="track-btn" onclick="switchBook('magic')">
        📙 Math-Magic (Classic CBSE - 14 Ch)
      </button>
    </div>
  </header>

  <!-- Sticky Chapter Chips Bar -->
  <div class="breadcrumb-bar">
    <div class="breadcrumb-label" id="chipBarLabel">📐 Quick Jump To Chapter — Maths Mela (NEP 2020):</div>
    <div class="breadcrumb-chips" id="chipsMela">
      ${melaChips}
    </div>
    <div class="breadcrumb-chips" id="chipsMagic" style="display:none;">
      ${magicChips}
    </div>
  </div>

  <!-- Main Layout -->
  <div class="main-layout">
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-title" id="sidebarTitleText">📘 Maths Mela (14 Chapters)</div>
      <input type="text" class="search-box" placeholder="Search chapters..." onkeyup="filterChapters(this.value)">
      <ul class="chapter-nav" id="navMela">
        ${melaSidebar}
      </ul>
      <ul class="chapter-nav" id="navMagic" style="display:none;">
        ${magicSidebar}
      </ul>
    </aside>

    <main class="main-content">
      <div id="chapter-content-area">
        ${melaSections}
        ${magicSections}
      </div>
    </main>
  </div>

  <button class="mob-toggle" onclick="toggleSidebar()">📑 Chapters</button>

  <!-- Footer -->
  <footer class="site-footer">
    <p>© 2026 OlympiadQuiz — <a href="index.html">Home</a> · <a href="ncert-solutions.html">NCERT Solutions Hub</a> · <a href="ncert-solutions-class-3.html">Class 3 Solutions Hub</a></p>
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
      document.getElementById('navMela').style.display = isMela ? 'block' : 'none';
      document.getElementById('navMagic').style.display = isMela ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isMela ? '📐 Quick Jump To Chapter — Maths Mela (NEP 2020):' : '📐 Quick Jump To Chapter — Math-Magic:';
      document.getElementById('sidebarTitleText').innerText = isMela ? '📘 Maths Mela (14 Chapters)' : '📙 Math-Magic (14 Chapters)';

      // Show first chapter of that book
      const defaultId = isMela ? 'ch_mm1' : 'ch_mmg1';
      showChapter(defaultId);
    }

    function showChapter(targetId, updateHistory = true) {
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

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

    function filterChapters(query) {
      const q = query.toLowerCase().trim();
      const activeNavId = (currentBook === 'mela') ? 'navMela' : 'navMagic';
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
        if (hash.startsWith('ch_mmg')) {
          switchBook('magic');
          showChapter(hash, false);
          return;
        } else if (hash.startsWith('ch_mm')) {
          switchBook('mela');
          showChapter(hash, false);
          return;
        }
      }
      // default: Maths Mela Chapter 1
      showChapter('ch_mm1', false);
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-3-maths.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-3-maths.html (${htmlContent.length} bytes)!`);
