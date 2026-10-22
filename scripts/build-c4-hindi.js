// Generator for NCERT Class 4 Hindi Solutions (100% Question Coverage: Veena + Rimjhim)
// Fully Aligned with Official NCERT Curriculum (New NEP 2020 Veena + Classic CBSE Rimjhim)
const fs = require('fs');
const path = require('path');

const { veenaChapters } = require('./data-c4-hindi/veenaData.js');
const { rimjhimChapters } = require('./data-c4-hindi/rimjhimData.js');

console.log("=== BUILDING NCERT CLASS 4 HINDI SOLUTIONS (VEENA + RIMJHIM) ===");
console.log(`Loaded ${veenaChapters.length} Veena Chapters and ${rimjhimChapters.length} Rimjhim Chapters`);

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
      <span class="q-num">प्रश्न ${idx + 1}</span>
      <span class="q-text">${qObj.q}</span>
      ${qObj.category ? `<span class="q-cat">${qObj.category}</span>` : ''}
      <span class="q-marks">${qObj.marks} अंक</span>
      <svg class="q-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">विस्तृत चरणबद्ध समाधान (Step-by-Step Model Answer):</div>
        <div class="answer-text">${qObj.ans}</div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई आधिकारिक अंकन योजना (CBSE Step Marking Rubric - ${qObj.marks} अंक):</div>
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
        <span>पाठ का मूल भाव, मुख्य बिंदु व शब्दार्थ-बोध (Chapter Highlights & Thematic Summary)</span>
      </div>
      <ul class="concept-list">
        ${conceptsHtml}
      </ul>
      <div class="svg-diagram-wrapper" style="margin-top:18px;">
        ${ch.svg}
      </div>
    </div>

    <!-- Complete Exercise Questions & Solutions -->
    <div class="ex-div">📖 NCERT पाठ्यपुस्तक के मूल अभ्यास एवं समाधान (100% पूर्ण कवरेज)</div>
    <div class="questions-container">
      ${questionsHtml}
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 NEP 2020 योग्यता-आधारित प्रश्न (Competency-Based Case Study)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #c2410c;"><strong>स्थिति / संदर्भ (Case Scenario):</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>विश्लेषणात्मक प्रश्न:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #fed7aa;font-size:0.8rem;font-weight:700;color:#9a3412;">अंकन मानदंड (Rubric): ${ch.cbq.rubric}</div>
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const veenaSections = veenaChapters.map(ch => renderChapterSection(ch, "veena")).join('\n');
const rimjhimSections = rimjhimChapters.map(ch => renderChapterSection(ch, "rimjhim")).join('\n');

const veenaChips = veenaChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('(')[0].trim()}
  </button>
`).join('');

const rimjhimChips = rimjhimChapters.map(ch => `
  <button class="bc-chip" data-target="ch_${ch.id}" onclick="showChapter('ch_${ch.id}')">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('(')[0].trim()}
  </button>
`).join('');

const veenaSidebar = veenaChapters.map(ch => `
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

const rimjhimSidebar = rimjhimChapters.map(ch => `
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
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NCERT Solutions for Class 4 Hindi (वीणा - Veena &amp; रिमझिम - Rimjhim) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="कक्षा 4 हिंदी के लिए 100% संपूर्ण NCERT समाधान। नवीन NEP 2020 पाठ्यपुस्तक 'वीणा' (13 अध्याय) तथा पारंपरिक 'रिमझिम' (14 पाठ)। सभी पाठ-बोध, व्याकरण, शब्दार्थ, चरणबद्ध अंकन योजना व योग्यता-आधारित प्रश्नोत्तर।">
  <meta name="keywords" content="ncert solutions class 4 hindi, veena class 4 hindi solutions, rimjhim class 4 hindi solutions, cbse class 4 hindi 2026-27, man ke bhole bhale badal, jaisa sawal waisa jawab, kirmich ki gend, papa jab bachhe the, dost ki madad, naav banao naav banao, daan ka hisab, kaun ncert, swatantrata ki oor, thapp roti thapp daal, padhaku ki soojh, sunita ki pahiya kursi, hudhud ncert, muft hi muft">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-4-hindi.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-4-hindi.html">
  <meta property="og:title" content="NCERT Solutions for Class 4 Hindi (वीणा &amp; रिमझिम) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% प्रश्न कवरेज: कक्षा 4 हिंदी पाठ्यपुस्तक 'वीणा' (NEP 2020) और 'रिमझिम'। रेखाचित्र, चरणबद्ध अंकन योजना एवं दक्षता आधारित प्रश्नोत्तर।">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 4 Hindi (Veena &amp; Rimjhim) CBSE 2026-27">
  <meta name="twitter:description" content="कक्षा 4 हिंदी के 100% संपूर्ण व प्रामाणिक समाधान। वीणा व रिमझिम के सभी अध्यायों के विस्तृत उत्तर।">
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
      { "@type": "ListItem", "position": 3, "name": "Class 4", "item": "https://olympiadquiz.org/ncert-solutions-class-4.html" },
      { "@type": "ListItem", "position": 4, "name": "Hindi", "item": "https://olympiadquiz.org/ncert-solutions-class-4-hindi.html" }
    ]
  }
  </script>

  <!-- Schema.org LearningResource -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions for Class 4 Hindi (वीणा - Veena & रिमझिम - Rimjhim) CBSE 2026-27",
    "description": "कक्षा 4 हिंदी के 100% संपूर्ण पाठ्यपुस्तक अभ्यास समाधान। नवीन राष्ट्रीय शिक्षा नीति (NEP 2020) के अंतर्गत 'वीणा' (13 अध्याय) और 'रिमझिम' (14 पाठ) के सभी प्रश्नोत्तर, शब्द-ज्ञान, व्याकरण, चित्रात्मक आरेख एवं अंकन योजना।",
    "educationalLevel": "CBSE Class 4",
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
        "name": "क्या कक्षा 4 हिंदी के लिए नवीन पुस्तक 'वीणा' और पारंपरिक पुस्तक 'रिमझिम' दोनों के समाधान उपलब्ध हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, इस पोर्टल पर राष्ट्रीय शिक्षा नीति (NEP 2020) के नवीनतम पाठ्यक्रम के तहत प्रकाशित पुस्तक 'वीणा' (13 अध्याय) और सीबीएसई की लोकप्रिय पुस्तक 'रिमझिम' (14 पाठ) दोनों के 100% प्रामाणिक प्रश्नोत्तर दिए गए हैं।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या प्रत्येक प्रश्न के साथ आधिकारिक सीबीएसई चरणबद्ध अंकन योजना (Marking Rubric) दी गई है?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "जी हाँ, विद्यार्थियों और शिक्षकों की सुविधा के लिए प्रत्येक प्रश्न के साथ स्पष्ट अंकन योजना (Step Rubric) उपलब्ध कराई गई है ताकि परीक्षा में पूरे अंक प्राप्त किए जा सकें।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या इसमें योग्यता-आधारित प्रश्न (NEP 2020 Competency Based Questions) भी सम्मिलित हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, प्रत्येक अध्याय के अंत में वास्तविक जीवन एवं तार्किक सोच पर आधारित योग्यता-आधारित केस स्टडी प्रश्न (CBQ) जोड़े गए हैं।"
        }
      }
    ]
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --brand: #c2410c;
      --brand-dark: #9a3412;
      --brand-light: #fff7ed;
      --brand-text: #9a3412;
      --navy: #0f172a;
      --slate: #475569;
      --border: #fed7aa;
      --border-subtle: #e2e8f0;
      --bg: #fdfbf7;
      --surface: #ffffff;
      --accent: #d97706;
      --accent-green: #059669;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Noto Sans Devanagari', 'Inter', system-ui, sans-serif; background: var(--bg); color: #1e293b; line-height: 1.7; }

    /* Top Progress Bar */
    .top-progress { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #ea580c, #c2410c); z-index: 1000; width: 0%; transition: width .1s ease; }

    /* Navbar */
    .navbar { background: #0f172a; border-bottom: 1px solid #1e293b; padding: 0 20px; position: sticky; top: 0; z-index: 99; }
    .navbar-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 60px; }
    .navbar-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; color: white; font-weight: 800; font-size: 1.15rem; font-family: 'Inter', sans-serif; }
    .navbar-logo span span { color: #f97316; }
    .navbar-links { display: flex; gap: 20px; align-items: center; }
    .nav-link { color: #cbd5e1; text-decoration: none; font-size: .9rem; font-weight: 600; transition: color .2s; font-family: 'Inter', sans-serif; }
    .nav-link:hover { color: white; }
    .nav-dropdown { position: relative; }
    .nav-dropdown-content { display: none; position: absolute; top: 100%; left: 0; background: #ffffff; min-width: 270px; box-shadow: 0 10px 25px rgba(0,0,0,.15); border-radius: 12px; padding: 10px; border: 1px solid #e2e8f0; z-index: 100; }
    .nav-dropdown:hover .nav-dropdown-content { display: block; }
    .nav-dropdown-content a { display: block; padding: 8px 12px; color: #1e293b; text-decoration: none; font-size: .85rem; font-weight: 600; border-radius: 6px; transition: background .15s; font-family: 'Inter', sans-serif; }
    .nav-dropdown-content a:hover { background: #fff7ed; color: #c2410c; }
    .btn-login { background: #c2410c; color: white; padding: 6px 16px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: .85rem; font-family: 'Inter', sans-serif; }
    .btn-login:hover { background: #9a3412; }

    /* Breadcrumbs Nav */
    .ncert-breadcrumb-nav { background: #ffffff; border-bottom: 1px solid var(--border-subtle); padding: 10px 20px; }
    .ncert-bc-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .ncert-bc-list { display: flex; align-items: center; gap: 6px; list-style: none; font-size: .85rem; }
    .ncert-bc-list a { color: var(--slate); text-decoration: none; font-weight: 500; }
    .ncert-bc-list a:hover { color: var(--brand); }
    .ncert-bc-sep { color: #94a3b8; }
    .ncert-bc-current { color: var(--navy); font-weight: 700; }
    .ncert-bc-switch { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; font-size: .82rem; }
    .ncert-bc-switch-label { color: var(--slate); font-weight: 600; }
    .ncert-bc-pill { padding: 4px 10px; border-radius: 20px; text-decoration: none; color: var(--slate); border: 1px solid var(--border-subtle); font-weight: 600; transition: all .2s; }
    .ncert-bc-pill:hover, .ncert-bc-pill.active { background: var(--brand); color: white; border-color: var(--brand); }

    /* Hero Banner */
    .hero-banner { background: linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #c2410c 100%); color: white; padding: 36px 20px 32px; text-align: center; }
    .hero-banner h1 { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 900; margin-bottom: 12px; letter-spacing: -.02em; line-height: 1.3; }
    .hero-banner p { font-size: .95rem; max-width: 860px; margin: 0 auto 20px; color: #ffedd5; line-height: 1.7; }
    .hero-badges { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; }
    .hero-badge { background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.25); padding: 5px 14px; border-radius: 20px; font-size: .82rem; font-weight: 600; }

    /* Book Switcher Tabs */
    .book-tab-bar { background: #ffffff; border-bottom: 1px solid var(--border-subtle); padding: 14px 20px; text-align: center; position: sticky; top: 60px; z-index: 95; }
    .book-tab-container { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .btn-book-tab { padding: 8px 20px; border-radius: 24px; font-weight: 700; font-size: .9rem; border: 2px solid var(--border-subtle); background: var(--bg); color: var(--slate); cursor: pointer; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; font-family: inherit; }
    .btn-book-tab:hover { border-color: var(--brand); color: var(--brand); }
    .btn-book-tab.active { background: var(--brand); border-color: var(--brand); color: white; box-shadow: 0 4px 12px rgba(194,65,12,.25); }
    .btn-book-tab .badge { background: rgba(0,0,0,.15); padding: 2px 8px; border-radius: 12px; font-size: .75rem; }

    /* Breadcrumb Chips Jump Bar */
    .breadcrumb-bar { background: #ffffff; border-bottom: 1px solid var(--border-subtle); padding: 10px 20px; position: sticky; top: 118px; z-index: 90; box-shadow: 0 2px 8px rgba(0,0,0,.03); }
    .breadcrumb-label { font-size: .78rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: var(--slate); margin-bottom: 6px; }
    .breadcrumb-chips { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; }
    .bc-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 20px; border: 1px solid var(--border-subtle); background: var(--bg); color: var(--slate); font-size: .82rem; font-weight: 600; cursor: pointer; white-space: nowrap; transition: all .15s; font-family: inherit; }
    .bc-chip:hover { border-color: var(--brand); color: var(--brand-dark); }
    .bc-chip.active { background: var(--brand); border-color: var(--brand); color: white; }
    .bc-n { background: rgba(0,0,0,.15); border-radius: 50%; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; font-size: .7rem; }

    /* Main Layout */
    .main-layout { max-width: 1400px; margin: 24px auto; display: flex; gap: 24px; padding: 0 20px; }
    .sidebar { width: 320px; flex-shrink: 0; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: 16px; padding: 16px; height: calc(100vh - 180px); position: sticky; top: 180px; overflow-y: auto; }
    .sidebar-title { font-size: .95rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid var(--brand); display: flex; justify-content: space-between; align-items: center; }
    .search-box { width: 100%; padding: 8px 12px; border: 1px solid var(--border-subtle); border-radius: 8px; font-size: .85rem; margin-bottom: 12px; outline: none; font-family: inherit; }
    .search-box:focus { border-color: var(--brand); box-shadow: 0 0 0 2px rgba(194,65,12,.15); }
    .chapter-nav { list-style: none; display: flex; flex-direction: column; gap: 4px; }
    .chapter-nav a { display: flex; align-items: flex-start; gap: 10px; padding: 8px 10px; border-radius: 8px; text-decoration: none; color: var(--slate); transition: all .15s; }
    .chapter-nav a:hover, .chapter-nav a.active { background: var(--brand-light); color: var(--brand-text); }
    .ch-num { width: 22px; height: 22px; border-radius: 6px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; font-size: .75rem; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
    .chapter-nav a.active .ch-num { background: var(--brand); color: white; }
    .ch-meta { display: flex; flex-direction: column; }
    .ch-name { font-size: .88rem; font-weight: 700; line-height: 1.3; }
    .ch-sub { font-size: .75rem; color: #64748b; }

    /* Main Content */
    .main-content { flex: 1; min-width: 0; }
    .chapter-section { display: none; }
    .chapter-section.active { display: block; animation: fadeIn .2s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }

    .chapter-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px; background: white; border: 1px solid var(--border-subtle); border-radius: 16px; padding: 20px; }
    .ch-badge { width: 44px; height: 44px; border-radius: 12px; background: var(--brand); color: white; font-weight: 900; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .chapter-header-info { flex: 1; }
    .unit-tag { display: inline-block; font-size: .75rem; font-weight: 700; text-transform: uppercase; color: var(--brand-text); background: var(--brand-light); padding: 2px 8px; border-radius: 4px; margin-bottom: 4px; letter-spacing: .04em; }
    .chapter-header-info h2 { font-size: 1.4rem; font-weight: 800; color: var(--navy); line-height: 1.3; margin-bottom: 4px; }
    .chapter-header-info p { font-size: .88rem; color: var(--slate); }

    .concept-card { background: white; border: 1px solid var(--border-subtle); border-radius: 16px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 6px rgba(0,0,0,.02); }
    .concept-header { font-size: .95rem; font-weight: 800; color: var(--navy); margin-bottom: 12px; display: flex; align-items: center; gap: 8px; }
    .concept-list { padding-left: 20px; font-size: .9rem; color: #334155; display: flex; flex-direction: column; gap: 6px; }

    .ex-div { font-size: 1.05rem; font-weight: 800; color: var(--navy); padding: 10px 16px; background: #ffedd5; border-radius: 8px; margin: 28px 0 16px; border-left: 4px solid var(--brand); }

    /* Question Cards */
    .q-card { background: white; border: 1px solid var(--border-subtle); border-radius: 14px; margin-bottom: 14px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,.02); transition: all .2s; }
    .q-head { display: flex; align-items: center; gap: 14px; padding: 16px 20px; cursor: pointer; user-select: none; flex-wrap: wrap; }
    .q-num { background: var(--brand-light); color: var(--brand-text); font-weight: 800; font-size: .82rem; padding: 4px 10px; border-radius: 6px; flex-shrink: 0; }
    .q-text { font-size: .98rem; font-weight: 700; color: var(--navy); flex: 1; min-width: 200px; line-height: 1.5; }
    .q-cat { font-size: .75rem; font-weight: 700; color: #9a3412; background: #ffedd5; border: 1px solid #fed7aa; padding: 3px 8px; border-radius: 4px; white-space: nowrap; flex-shrink: 0; }
    .q-marks { font-size: .75rem; font-weight: 700; color: #047857; background: #ecfdf5; padding: 3px 8px; border-radius: 4px; border: 1px solid #a7f3d0; flex-shrink: 0; }
    .q-toggle { width: 24px; height: 24px; color: var(--slate); transition: transform .2s; flex-shrink: 0; }
    .q-card.open .q-toggle { transform: rotate(45deg); }
    .q-answer { display: none; padding: 0 20px 20px; border-top: 1px solid #f8fafc; background: #fdfdfd; }
    .q-card.open .q-answer { display: block; }

    .answer-box { padding-top: 16px; }
    .answer-label { font-size: .8rem; font-weight: 800; text-transform: uppercase; color: var(--brand); margin-bottom: 8px; letter-spacing: .04em; }
    .answer-text { font-size: .95rem; color: #1e293b; line-height: 1.8; }
    .answer-text ul, .answer-text ol { margin: 8px 0 8px 20px; }
    .answer-text li { margin-bottom: 6px; }
    .answer-text strong { color: #0f172a; }

    /* Marking Scheme */
    .marking-scheme { margin-top: 14px; background: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 12px 14px; font-size: .82rem; }
    .marking-title { font-weight: 700; color: #92400e; margin-bottom: 6px; }
    .marking-row { display: flex; justify-content: space-between; border-bottom: 1px solid #fde68a; padding: 4px 0; }
    .marking-row:last-child { border-bottom: none; }
    .marking-key { color: #78350f; }
    .marking-marks { font-weight: 700; color: #b45309; }

    /* Competency Card */
    .cbq-card { background: linear-gradient(to right, #fff7ed, #fef2f2); border: 1.5px solid #fed7aa; border-radius: 12px; padding: 22px; margin: 30px 0 20px; }
    .cbq-badge { display: inline-block; font-size: .75rem; font-weight: 800; text-transform: uppercase; color: #9a3412; background: #ffedd5; padding: 4px 12px; border-radius: 20px; margin-bottom: 12px; letter-spacing: .04em; }

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
            <a href="ncert-solutions-class-4.html" style="font-weight:700;color:#c2410c;background:#fff7ed;">Class 4 Hub 🏫</a>
            <a href="ncert-solutions-class-4-hindi.html" style="font-weight:700;color:#c2410c;background:#fff7ed;">Class 4 Hindi 📖 (Active)</a>
            <a href="ncert-solutions-class-4-english.html">Class 4 English 📖</a>
            <a href="ncert-solutions-class-4-maths.html">Class 4 Maths 📐</a>
            <a href="ncert-solutions-class-4-evs.html">Class 4 The World Around Us 🌿</a>
            <a href="ncert-solutions-class-5-hindi.html">Class 5 Hindi 📖</a>
          </div>
        </div>
        <a href="mock.html" class="nav-link">Mock Tests</a>
        <a href="dashboard.html" class="btn-login">Dashboard</a>
      </div>
    </div>
  </nav>

  <!-- Secondary Breadcrumbs & Class 4 Subject Switcher -->
  <div class="ncert-breadcrumb-nav">
    <div class="ncert-bc-container">
      <ul class="ncert-bc-list">
        <li><a href="index.html">Home</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
        <li class="ncert-bc-sep">/</li>
        <li><a href="ncert-solutions-class-4.html">Class 4</a></li>
        <li class="ncert-bc-sep">/</li>
        <li class="ncert-bc-current">Hindi (वीणा व रिमझिम)</li>
      </ul>
      <div class="ncert-bc-switch">
        <span class="ncert-bc-switch-label">कक्षा 4 विषय:</span>
        <a href="ncert-solutions-class-4-hindi.html" class="ncert-bc-pill active">Hindi (वीणा / रिमझिम) 📖</a>
        <a href="ncert-solutions-class-4-english.html" class="ncert-bc-pill">English (Santoor / Marigold) 📖</a>
        <a href="ncert-solutions-class-4-maths.html" class="ncert-bc-pill">Maths (Maths Mela &amp; Math-Magic) 📐</a>
        <a href="ncert-solutions-class-4-evs.html" class="ncert-bc-pill">The World Around Us (Our Wondrous World) 🌿</a>
      </div>
    </div>
  </div>

  <!-- Hero Banner -->
  <header class="hero-banner">
    <div style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;color:#fed7aa;margin-bottom:8px;">सीबीएसई शैक्षणिक सत्र 2026-27 • 100% प्रामाणिक व संपूर्ण समाधान</div>
    <h1>NCERT Solutions for Class 4 Hindi</h1>
    <p>कक्षा 4 हिंदी की दोनों पाठ्यपुस्तकों का 100% सटीक व चरणबद्ध समाधान: <strong>वीणा (नवीन NEP 2020 पाठ्यपुस्तक)</strong> एवं <strong>रिमझिम (पारंपरिक सीबीएसई पाठ्यक्रम)</strong>। रेखाचित्र, सीबीएसई चरणबद्ध अंकन योजना (Step Rubrics) व योग्यता-आधारित प्रश्नोत्तर।</p>
    <div class="hero-badges">
      <span class="hero-badge">📘 पुस्तक 1: वीणा (13 अध्याय - NEP 2020)</span>
      <span class="hero-badge">📙 पुस्तक 2: रिमझिम (14 पाठ - Classic CBSE)</span>
      <span class="hero-badge">✨ 100% मूल प्रश्नोत्तर हल</span>
      <span class="hero-badge">🎯 CBSE चरणबद्ध अंकन योजना</span>
      <span class="hero-badge">💡 100% निःशुल्क एवं सुरक्षित</span>
    </div>
  </header>

  <!-- Book Switcher Tab Bar -->
  <div class="book-tab-bar">
    <div class="book-tab-container">
      <button class="btn-book-tab active" id="btnVeena" onclick="switchBook('veena')">
        <span>📘 वीणा (Veena)</span>
        <span class="badge">नवीन NEP 2020 (अध्याय 1-13)</span>
      </button>
      <button class="btn-book-tab" id="btnRimjhim" onclick="switchBook('rimjhim')">
        <span>📙 रिमझिम (Rimjhim)</span>
        <span class="badge">पारंपरिक CBSE (पाठ 1-14)</span>
      </button>
    </div>
  </div>

  <!-- Breadcrumb Quick Jump Chips Bar -->
  <div class="breadcrumb-bar">
    <div style="max-width:1400px;margin:0 auto;">
      <div class="breadcrumb-label" id="chipBarLabel">अध्याय पर सीधे पहुँचें — वीणा (NEP 2020):</div>
      <div class="breadcrumb-chips" id="chipsVeena">
        ${veenaChips}
      </div>
      <div class="breadcrumb-chips" id="chipsRimjhim" style="display:none;">
        ${rimjhimChips}
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="main-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-title">
        <span id="sidebarTitleText">📘 वीणा (अध्याय सूची)</span>
        <span style="font-size:0.75rem;background:#ffedd5;color:#9a3412;padding:2px 8px;border-radius:12px;" id="sidebarCount">13 अध्याय</span>
      </div>
      <input type="text" class="search-box" id="chapterSearch" placeholder="अध्याय खोजें..." oninput="filterChapters(this.value)">
      <ul class="chapter-nav" id="navVeena">
        ${veenaSidebar}
      </ul>
      <ul class="chapter-nav" id="navRimjhim" style="display:none;">
        ${rimjhimSidebar}
      </ul>
    </aside>

    <!-- Content Sections -->
    <main class="main-content">
      <div id="containerVeena">
        ${veenaSections}
      </div>
      <div id="containerRimjhim" style="display:none;">
        ${rimjhimSections}
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer style="background:#0f172a;color:#94a3b8;padding:30px 20px;text-align:center;font-size:0.85rem;border-top:1px solid #1e293b;margin-top:60px;">
    <p>© 2026 OlympiadQuiz — 100% Free Educational Resources &bull; <a href="ncert-solutions.html" style="color:#f97316;">NCERT Solutions Hub</a> &bull; <a href="ncert-solutions-class-4.html" style="color:#f97316;">Class 4 Hub</a> &bull; <a href="ncert-solutions-class-4-english.html" style="color:#f97316;">Class 4 English</a> &bull; <a href="ncert-solutions-class-4-maths.html" style="color:#f97316;">Class 4 Maths</a> &bull; <a href="ncert-solutions-class-4-evs.html" style="color:#f97316;">Class 4 EVS</a></p>
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
      document.getElementById('navVeena').style.display = isVeena ? 'flex' : 'none';
      document.getElementById('navRimjhim').style.display = isVeena ? 'none' : 'flex';

      document.getElementById('containerVeena').style.display = isVeena ? 'block' : 'none';
      document.getElementById('containerRimjhim').style.display = isVeena ? 'none' : 'block';

      document.getElementById('chipBarLabel').innerText = isVeena ? 'अध्याय पर सीधे पहुँचें — वीणा (NEP 2020):' : 'पाठ पर सीधे पहुँचें — रिमझिम:';
      document.getElementById('sidebarTitleText').innerText = isVeena ? '📘 वीणा (अध्याय सूची)' : '📙 रिमझिम (पाठ सूची)';
      document.getElementById('sidebarCount').innerText = isVeena ? '13 अध्याय' : '14 पाठ';

      // Show first chapter of that book
      const defaultId = isVeena ? 'ch_vn1' : 'ch_rj1';
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
      const activeNavId = (currentBook === 'veena') ? 'navVeena' : 'navRimjhim';
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
        if (hash.startsWith('ch_rj')) {
          switchBook('rimjhim');
          showChapter(hash);
          return;
        } else if (hash.startsWith('ch_vn')) {
          switchBook('veena');
          showChapter(hash);
          return;
        }
      }
      // default: Veena Chapter 1
      showChapter('ch_vn1');
    });
  </script>
</body>
</html>
`;

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-4-hindi.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-4-hindi.html (${htmlContent.length} bytes)!`);
