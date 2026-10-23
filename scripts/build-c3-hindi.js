// Generator for NCERT Class 3 Hindi Solutions (100% Question Coverage: Veena + Rimjhim)
// Uniform Class 10 Design & Navigation Architecture
const fs = require('fs');
const path = require('path');

const { veenaChapters } = require('./data-c3-hindi/veenaData.js');
const { rimjhimChapters } = require('./data-c3-hindi/rimjhimData.js');

console.log("=== BUILDING NCERT CLASS 3 HINDI SOLUTIONS (VEENA + RIMJHIM) ===");
console.log(`Loaded ${veenaChapters.length} Veena Chapters and ${rimjhimChapters.length} Rimjhim Chapters`);

// -------------------------------------------------------------
// PART 1: RENDERING FUNCTIONS
// -------------------------------------------------------------

function renderChapterSection(ch, bookKey, idx, arr) {
  const conceptsHtml = ch.concepts.map(c => `<li>${c}</li>`).join('');

  const isVeena = bookKey === 'vn';
  const modularUrl = isVeena ? `chapters-c3h/veena-ch${ch.num}.html` : `chapters-c3h/rimjhim-ch${ch.num}.html`;
  const qCount = isVeena ? 14 : 16;

  const prevCh = idx > 0 ? arr[idx - 1] : null;
  const nextCh = idx < arr.length - 1 ? arr[idx + 1] : null;

  return `
  <section class="chapter-section${(bookKey === 'vn' && idx === 0) ? ' active' : ''}" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <div class="ch-category">${ch.unit} • कक्षा 3 हिंदी (${isVeena ? 'नई शिक्षा नीति NCF 2023' : 'पारंपरिक सीबीएसई'})</div>
        <h2>पाठ ${ch.num}: ${ch.title}</h2>
        <p>${ch.subtitle}</p>
      </div>
    </div>

    <!-- Key Concepts Card -->
    <div class="concept-card">
      <div class="concept-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        <span>पाठ के मुख्य भाव, भाषा कौशल एवं नैतिक मूल्य</span>
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
        <span>✅ 100% प्रश्न कवरेज</span> • <span>सभी ${qCount}+ हल प्रश्नोत्तर</span>
      </div>
      <h3 class="gateway-title">पाठ ${ch.num}: ${ch.title} — संपूर्ण एनसीईआरटी समाधान</h3>
      <p class="gateway-desc">
        पाठ के सभी <strong>${qCount}+ बोध प्रश्नोत्तर, शब्दार्थ, तुकबंदी, भाषा की बात (व्याकरण), एवं योग्यता-आधारित कार्य</strong> आधिकारिक सीबीएसई मार्किंग स्कीम के साथ उपलब्ध हैं।
      </p>
      <a href="${modularUrl}" class="btn-open-modular">
        <span>📖 पाठ ${ch.num} का संपूर्ण समाधान देखें (${qCount}+ प्रश्न)</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 एनईपी 2020 योग्यता-आधारित केस स्टडी (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid var(--brand);"><strong>दैनिक जीवन प्रसंग:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>विश्लेषणात्मक प्रश्न:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #fed7aa;font-size:0.8rem;font-weight:700;color:var(--brand-text);">सीबीएसई मूल्यांकन रूब्रिक: ${ch.cbq.rubric}</div>
    </div>

    <!-- Chapter Navigation Buttons -->
    <div class="ch-nav-btns">
      ${prevCh ? `<button class="ch-nav-btn prev" onclick="showChapter('ch_${prevCh.id}')">← पाठ ${prevCh.num}: ${prevCh.title.split('(')[0].trim()}</button>` : `<button class="ch-nav-btn prev" disabled>← पिछला पाठ</button>`}
      <a href="${modularUrl}" class="ch-nav-btn next" style="background:var(--brand);color:white;border-color:var(--brand);">पाठ ${ch.num} संपूर्ण समाधान ➔</a>
      ${nextCh ? `<button class="ch-nav-btn next" onclick="showChapter('ch_${nextCh.id}')">पाठ ${nextCh.num}: ${nextCh.title.split('(')[0].trim()} →</button>` : `<button class="ch-nav-btn next" disabled>अगला पाठ →</button>`}
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const veenaSections = veenaChapters.map((ch, idx, arr) => renderChapterSection(ch, "vn", idx, arr)).join('\n');
const rimjhimSections = rimjhimChapters.map((ch, idx, arr) => renderChapterSection(ch, "rj", idx, arr)).join('\n');

const veenaChips = veenaChapters.map((ch, idx) => `
  <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('(')[0].trim()}
  </span>
`).join('');

const rimjhimChips = rimjhimChapters.map((ch, idx) => `
  <span class="bc-chip${idx === 0 ? ' active' : ''}" onclick="showChapter('ch_${ch.id}')" data-target="ch_${ch.id}">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('(')[0].trim()}
  </span>
`).join('');

const veenaSidebar = veenaChapters.map((ch, idx) => `
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

const rimjhimSidebar = rimjhimChapters.map((ch, idx) => `
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
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 3 Hindi (Veena &amp; Rimjhim) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% Complete Class 3 NCERT Hindi Solutions covering both textbooks: New NEP 2020 Veena (16 Chapters) and Classic CBSE Rimjhim (16 Chapters). Comprehensive textbook questions, vyakaran (grammar), CBSE marking schemes, and NEP 2020 competency case studies.">
  <meta name="keywords" content="ncert solutions class 3 hindi, veena class 3 hindi solutions, rimjhim class 3 ncert, cbse class 3 hindi 2026-27, chulbuli boond veena, shekhibaz makkhi, kukku kavita, chand wali amma, man karta hai, bahadur bitto, humse sab kahte, bandar baant, akal badi ya bhains">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-3-hindi.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-3-hindi.html">
  <meta property="og:title" content="NCERT Solutions for Class 3 Hindi (Veena &amp; Rimjhim) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% question coverage for Class 3 Hindi across all 32 chapters of Veena and Rimjhim with vyakaran, CBSE marking schemes and NEP 2020 competency questions.">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 3 Hindi (Veena &amp; Rimjhim) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook solutions for Class 3 Hindi across Veena and Rimjhim with step-by-step marking rubrics and case studies.">
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
      { "@type": "ListItem", "position": 4, "name": "Hindi", "item": "https://olympiadquiz.org/ncert-solutions-class-3-hindi.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 3 Hindi (Veena & Rimjhim) CBSE 2026-27",
    "description": "Comprehensive 100% textbook exercise solutions for NCERT Class 3 Hindi covering all 16 chapters of Veena and 16 chapters of Rimjhim with CBSE step rubrics, vyakaran worksheets, and competency-based questions.",
    "educationalLevel": "CBSE Class 3",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "hi",
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
        "name": "कक्षा 3 हिंदी के लिए कौन-सी पुस्तकें ओलंपियाडक्विज पर उपलब्ध हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "दोनों आधिकारिक पुस्तकें पूर्णतः उपलब्ध हैं: नई शिक्षा नीति 2020 की नई पाठ्यपुस्तक 'वीणा' (16 पाठ) एवं पारंपरिक सीबीएसई पाठ्यपुस्तक 'रिमझिम' (16 पाठ)।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या इन समाधानों में भाषा की बात (व्याकरण) एवं शब्दार्थ शामिल हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, प्रत्येक पाठ में पाठ्यपुस्तक के सभी अभ्यास प्रश्न, शब्दार्थ, तुकबंदी, विलोम शब्द, पर्यायवाची शब्द, एवं भाषा की बात व्याकरण कार्य पूर्णतः हल किए गए हैं।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या उत्तरों में सीबीएसई अंकन योजना (Marking Scheme) दी गई है?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, प्रत्येक प्रश्न के साथ आधिकारिक सीबीएसई अंकन योजना दी गई है जिससे विद्यार्थियों को परीक्षा में सटीक उत्तर लिखने का मार्गदर्शन मिलता है।"
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
      --brand: #d97706;
      --brand-hover: #b45309;
      --brand-light: #fffbeb;
      --brand-text: #92400e;
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
    .btn-login { background: var(--brand); color: white; font-size: 0.82rem; font-weight: 700; padding: 7px 18px; border-radius: 8px; text-decoration: none; transition: 0.2s; }
    .btn-login:hover { background: var(--brand-hover); }
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
    .ncert-bc-pill.active { background: var(--brand); color: #ffffff; border-color: var(--brand); box-shadow: 0 2px 6px rgba(217,119,6,0.3); }

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
    .bc-chip.active { background: var(--brand); color: white; border-color: var(--brand); box-shadow: 0 3px 10px rgba(217,119,6,.35); }
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
    .ch-badge { width: 44px; height: 44px; background: var(--brand); color: white; border-radius: 12px; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(217,119,6,0.3); }
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
            <a href="ncert-solutions-class-3.html" style="font-weight:700;color:#d97706;background:#fffbeb;">Class 3 Solutions Hub ✨ (Active)</a>
            <a href="ncert-solutions-class-3-maths.html">Class 3 Maths</a>
            <a href="ncert-solutions-class-3-english.html">Class 3 English</a>
            <a href="ncert-solutions-class-3-hindi.html">Class 3 Hindi</a>
            <a href="ncert-solutions-class-3-evs.html">Class 3 EVS</a>
            <a href="ncert-solutions-class-10-maths.html">Class 10 Maths</a>
            <a href="ncert-solutions-class-10-hindi.html">Class 10 Hindi</a>
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
        <li class="ncert-bc-current">Hindi</li>
      </ol>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">Switch Subject:</span>
        <a href="ncert-solutions-class-3-maths.html" class="ncert-bc-pill">Maths</a>
        <a href="ncert-solutions-class-3-english.html" class="ncert-bc-pill">English</a>
        <a href="ncert-solutions-class-3-hindi.html" class="ncert-bc-pill active">Hindi</a>
        <a href="ncert-solutions-class-3-evs.html" class="ncert-bc-pill">EVS</a>
      </div>
    </div>
  </nav>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <h1>Class 3 Hindi — NCERT Solutions (CBSE 2026-27)</h1>
    <p>Complete <strong>100% textbook question coverage</strong> across all 32 chapters of Veena (New NEP 2020) and Rimjhim with step-by-step CBSE marking schemes, vyakaran, and competency case studies.</p>
    <div class="hero-badges">
      <span class="hero-badge">✅ All 32 Chapters (100% Questions)</span>
      <span class="hero-badge">📘 वीणा / Veena (16 पाठ) &amp; 📙 रिमझिम / Rimjhim (16 पाठ)</span>
      <span class="hero-badge">📝 व्याकरण एवं भाषा की बात</span>
      <span class="hero-badge">🔢 Step-by-Step Marking Schemes</span>
      <span class="hero-badge">🎯 NEP 2020 Competency CBQs</span>
    </div>
    
    <!-- Track Switcher -->
    <div class="book-toggle-bar">
      <button id="btnVeena" class="track-btn active" onclick="switchBook('veena')">
        📘 वीणा भाग 1 (New NCF 2023 - 16 पाठ)
      </button>
      <button id="btnRimjhim" class="track-btn" onclick="switchBook('rimjhim')">
        📙 रिमझिम भाग 3 (Classic CBSE - 16 पाठ)
      </button>
    </div>
  </header>

  <!-- Sticky Chapter Chips Bar -->
  <div class="breadcrumb-bar">
    <div class="breadcrumb-label" id="chipBarLabel">📖 पाठ पर तुरंत जाएँ — वीणा (NEP 2020):</div>
    <div class="breadcrumb-chips" id="chipsVeena">
      ${veenaChips}
    </div>
    <div class="breadcrumb-chips" id="chipsRimjhim" style="display:none;">
      ${rimjhimChips}
    </div>
  </div>

  <!-- Main Layout -->
  <div class="main-layout">
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-title" id="sidebarTitleText">📘 वीणा (16 पाठ)</div>
      <input type="text" class="search-box" placeholder="पाठ खोजें..." onkeyup="filterChapters(this.value)">
      <ul class="chapter-nav" id="navVeena">
        ${veenaSidebar}
      </ul>
      <ul class="chapter-nav" id="navRimjhim" style="display:none;">
        ${rimjhimSidebar}
      </ul>
    </aside>

    <main class="main-content">
      <div id="chapter-content-area">
        ${veenaSections}
        ${rimjhimSections}
      </div>
    </main>
  </div>

  <button class="mob-toggle" onclick="toggleSidebar()">📑 Chapters</button>

  <!-- Footer -->
  <footer class="site-footer">
    <p>© 2026 OlympiadQuiz — <a href="index.html">Home</a> · <a href="ncert-solutions.html">NCERT Solutions Hub</a> · <a href="ncert-solutions-class-3.html">Class 3 Solutions Hub</a></p>
  </footer>

  <script>
    let currentBook = 'veena';

    function switchBook(book) {
      currentBook = book;
      const isVeena = (book === 'veena');

      // Update tabs
      document.getElementById('btnVeena').classList.toggle('active', isVeena);
      document.getElementById('btnRimjhim').classList.toggle('active', !isVeena);

      // Update chips & sidebars
      document.getElementById('chipsVeena').style.display = isVeena ? 'flex' : 'none';
      document.getElementById('chipsRimjhim').style.display = isVeena ? 'none' : 'flex';
      document.getElementById('navVeena').style.display = isVeena ? 'block' : 'none';
      document.getElementById('navRimjhim').style.display = isVeena ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isVeena ? '📖 पाठ पर तुरंत जाएँ — वीणा (NEP 2020):' : '📖 पाठ पर तुरंत जाएँ — रिमझिम:';
      document.getElementById('sidebarTitleText').innerText = isVeena ? '📘 वीणा (16 पाठ)' : '📙 रिमझिम (16 पाठ)';

      // Show first chapter of that book
      const defaultId = isVeena ? 'ch_vn1' : 'ch_rj1';
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
      const activeNavId = (currentBook === 'veena') ? 'navVeena' : 'navRimjhim';
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
        if (hash.startsWith('ch_rj')) {
          switchBook('rimjhim');
          showChapter(hash, false);
          return;
        } else if (hash.startsWith('ch_vn')) {
          switchBook('veena');
          showChapter(hash, false);
          return;
        }
      }
      // default: Veena Chapter 1
      showChapter('ch_vn1', false);
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-3-hindi.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-3-hindi.html (${htmlContent.length} bytes)!`);
