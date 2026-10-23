// Generator for NCERT Class 3 Hindi Solutions (100% Question Coverage: Veena + Rimjhim)
// Fully Aligned with Official NCERT Curriculum (New NEP 2020 Veena + Classic CBSE Rimjhim)
const fs = require('fs');
const path = require('path');

const { veenaChapters } = require('./data-c3-hindi/veenaData.js');
const { rimjhimChapters } = require('./data-c3-hindi/rimjhimData.js');

console.log("=== BUILDING NCERT CLASS 3 HINDI SOLUTIONS (VEENA + RIMJHIM) ===");
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
      <span class="q-num">प्र.${idx + 1}</span>
      <span class="q-text">${qObj.q}</span>
      ${qObj.category ? `<span class="q-cat">${qObj.category}</span>` : ''}
      <span class="q-marks">${qObj.marks} अंक</span>
      <svg class="q-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">आदर्श उत्तर एवं विस्तृत व्याख्या:</div>
        <div class="answer-text">${qObj.ans}</div>
        <div class="marking-scheme">
          <div class="marking-title">📋 सीबीएसई आधिकारिक अंक योजना एवं रूब्रिक (${qObj.marks} अंक):</div>
          ${rubricRows}
        </div>
      </div>
    </div>
  </div>`;
}

function renderChapterSection(ch, bookKey) {
  const conceptsHtml = ch.concepts.map(c => `<li>${c}</li>`).join('');

  const isVeena = bookKey === 'vn';
  const modularUrl = isVeena ? `chapters-c3h/veena-ch${ch.num}.html` : `chapters-c3h/rimjhim-ch${ch.num}.html`;
  const bookName = isVeena ? 'वीणा (Veena)' : 'रिमझिम (Rimjhim)';
  const qCount = isVeena ? 14 : 16;

  return `
  <section class="chapter-section" id="ch_${ch.id}">
    <div class="chapter-header">
      <div class="ch-badge">${ch.num}</div>
      <div class="chapter-header-info">
        <span class="unit-tag">${ch.unit}</span>
        <h2>पाठ ${ch.num}: ${ch.title}</h2>
        <p>${ch.subtitle}</p>
      </div>
    </div>

    <!-- 100% Modular Solutions Banner -->
    <div style="background: linear-gradient(135deg, #b45309 0%, #d97706 100%); color: #ffffff; border-radius: 14px; padding: 20px 24px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; box-shadow: 0 4px 14px rgba(217,119,6,0.22);">
      <div>
        <div style="display: inline-block; background: #fef3c7; color: #78350f; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 6px;">🚀 100% संपूर्ण पाठ्यपुस्तक अभ्यास समाहित</div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #ffffff;">सभी ${qCount}+ अभ्यास प्रश्न एवं व्याकरण कार्य</div>
        <div style="font-size: 0.88rem; color: #fef3c7; margin-top: 3px;">पाठ के सभी प्रश्नोत्तर, भाषा की बात (व्याकरण), सोचिए और लिखिए, एवं सीबीएसई अंकन योजना उपलब्ध है।</div>
      </div>
      <a href="${modularUrl}" style="background: #ffffff; color: #92400e; padding: 12px 24px; border-radius: 8px; font-weight: 800; font-size: 0.95rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.15); white-space: nowrap;">
        पूरा पाठ ${ch.num} खोलें (${qCount}+ प्रश्न) ➔
      </a>
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

    <!-- 100% Complete Exercise Solutions Gateway Card -->
    <div style="background: #ffffff; border: 2px solid #fed7aa; border-radius: 16px; padding: 28px; margin: 24px 0; box-shadow: 0 4px 16px rgba(217,119,6,0.08); text-align: center;">
      <div style="display: inline-flex; align-items: center; gap: 8px; background: #dcfce7; color: #15803d; font-size: 0.82rem; font-weight: 800; padding: 5px 16px; border-radius: 999px; text-transform: uppercase; margin-bottom: 12px;">
        <span>✅ 100% प्रश्न कवरेज</span> • <span>सभी ${qCount}+ हल प्रश्नोत्तर</span>
      </div>
      <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">पाठ ${ch.num}: ${ch.title} — संपूर्ण एनसीईआरटी समाधान</h3>
      <p style="font-size: 0.92rem; color: #475569; max-width: 680px; margin: 0 auto 20px; line-height: 1.6;">
        पाठ के सभी <strong>${qCount}+ बोध प्रश्नोत्तर, शब्दार्थ, तुकबंदी, भाषा की बात (व्याकरण), एवं योग्यता-आधारित कार्य</strong> आधिकारिक सीबीएसई मार्किंग स्कीम के साथ उपलब्ध हैं।
      </p>
      <a href="${modularUrl}" style="display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #d97706 0%, #b45309 100%); color: #ffffff; font-weight: 800; font-size: 1.05rem; padding: 14px 34px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 14px rgba(217,119,6,0.3); transition: transform 0.15s ease;">
        <span>📖 पाठ ${ch.num} का संपूर्ण समाधान देखें (${qCount}+ प्रश्न)</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>

    <!-- NEP 2020 Competency Based Question (CBQ) -->
    <div class="cbq-card">
      <span class="cbq-badge">🌟 एनईपी 2020 योग्यता-आधारित केस स्टडी (CBQ)</span>
      <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">${ch.cbq.title}</h3>
      <p style="font-size:0.9rem;color:#334155;margin-bottom:12px;background:rgba(255,255,255,0.7);padding:12px;border-radius:8px;border-left:3px solid #d97706;"><strong>दैनिक जीवन प्रसंग:</strong> ${ch.cbq.text}</p>
      <p style="font-size:0.92rem;font-weight:700;color:#0f172a;margin-bottom:10px;"><strong>विश्लेषणात्मक प्रश्न:</strong> ${ch.cbq.question}</p>
      <div style="font-size:0.88rem;line-height:1.6;color:#1e293b;">${ch.cbq.answer}</div>
      <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #fed7aa;font-size:0.8rem;font-weight:700;color:#b45309;">सीबीएसई मूल्यांकन रूब्रिक: ${ch.cbq.rubric}</div>
    </div>
  </section>`;
}

// -------------------------------------------------------------
// PART 2: GENERATE SECTIONS & NAVIGATION
// -------------------------------------------------------------

const veenaSections = veenaChapters.map(ch => renderChapterSection(ch, "vn")).join('\n');
const rimjhimSections = rimjhimChapters.map(ch => renderChapterSection(ch, "rj")).join('\n');

const veenaChapterDirectoryCards = veenaChapters.map(ch => `
  <a href="chapters-c3h/veena-ch${ch.num}.html" style="display: flex; flex-direction: column; justify-content: space-between; background: #f8fafc; border: 1.5px solid #fed7aa; border-radius: 12px; padding: 14px 16px; text-decoration: none; transition: all 0.2s ease; color: inherit;">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
        <span style="font-size: 0.75rem; font-weight: 800; color: #9a3412; background: #ffedd5; padding: 2px 8px; border-radius: 4px;">पाठ ${ch.num}</span>
        <span style="font-size: 0.72rem; font-weight: 800; color: #15803d; background: #dcfce7; padding: 2px 8px; border-radius: 4px;">14+ हल प्रश्न</span>
      </div>
      <div style="font-size: 0.95rem; font-weight: 700; color: #0f172a; line-height: 1.35; margin-bottom: 4px;">${ch.title}</div>
      <div style="font-size: 0.78rem; color: #64748b;">${ch.subtitle}</div>
    </div>
    <div style="margin-top: 12px; font-size: 0.82rem; font-weight: 800; color: #d97706; display: flex; align-items: center; gap: 4px;">
      संपूर्ण समाधान देखें ➔
    </div>
  </a>
`).join('\n');

const rimjhimChapterDirectoryCards = rimjhimChapters.map(ch => `
  <a href="chapters-c3h/rimjhim-ch${ch.num}.html" style="display: flex; flex-direction: column; justify-content: space-between; background: #f8fafc; border: 1.5px solid #fed7aa; border-radius: 12px; padding: 14px 16px; text-decoration: none; transition: all 0.2s ease; color: inherit;">
    <div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
        <span style="font-size: 0.75rem; font-weight: 800; color: #9a3412; background: #ffedd5; padding: 2px 8px; border-radius: 4px;">पाठ ${ch.num}</span>
        <span style="font-size: 0.72rem; font-weight: 800; color: #15803d; background: #dcfce7; padding: 2px 8px; border-radius: 4px;">16+ हल प्रश्न</span>
      </div>
      <div style="font-size: 0.95rem; font-weight: 700; color: #0f172a; line-height: 1.35; margin-bottom: 4px;">${ch.title}</div>
      <div style="font-size: 0.78rem; color: #64748b;">${ch.subtitle}</div>
    </div>
    <div style="margin-top: 12px; font-size: 0.82rem; font-weight: 800; color: #ea580c; display: flex; align-items: center; gap: 4px;">
      संपूर्ण समाधान देखें ➔
    </div>
  </a>
`).join('\n');

const veenaChips = veenaChapters.map(ch => `
  <a class="bc-chip" href="chapters-c3h/veena-ch${ch.num}.html">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('(')[0].trim()}
  </a>
`).join('');

const rimjhimChips = rimjhimChapters.map(ch => `
  <a class="bc-chip" href="chapters-c3h/rimjhim-ch${ch.num}.html">
    <span class="bc-n">${ch.num}</span> ${ch.title.split('(')[0].trim()}
  </a>
`).join('');

const veenaSidebar = veenaChapters.map(ch => `
  <li>
    <a href="chapters-c3h/veena-ch${ch.num}.html">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit} • 14+ प्रश्न ➔</span>
      </div>
    </a>
  </li>
`).join('');

const rimjhimSidebar = rimjhimChapters.map(ch => `
  <li>
    <a href="chapters-c3h/rimjhim-ch${ch.num}.html">
      <span class="ch-num">${ch.num}</span>
      <div class="ch-meta">
        <span class="ch-name">${ch.title}</span>
        <span class="ch-sub">${ch.unit} • 16+ प्रश्न ➔</span>
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
  <title>NCERT Solutions for Class 3 Hindi (वीणा भाग 1 &amp; रिमझिम भाग 3) CBSE 2026-27 | OlympiadQuiz</title>
  <meta name="description" content="100% सम्पूर्ण कक्षा 3 एनसीईआरटी हिंदी समाधान — नई राष्ट्रीय शिक्षा नीति (NEP 2020) वीणा (18 पाठ) एवं क्लासिक सीबीएसई रिमझिम (14 पाठ)। सभी प्रश्नोत्तर, शब्दार्थ, व्याकरण, सीबीएसई अंक योजना एवं योग्यता आधारित केस स्टडी।">
  <meta name="keywords" content="ncert solutions class 3 hindi, class 3 veena solutions, rimjhim class 3 solutions ncert, cbse class 3 hindi 2026-27, kakku, shekhibaaz makkhi, chand wali amma, man karta hai, bahadur bitto, tiptipwa, bandar baant, akl badi ya bhains, mirch ka maza, sabse accha ped">
  <link rel="canonical" href="https://olympiadquiz.org/ncert-solutions-class-3-hindi.html">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OlympiadQuiz">
  <meta property="og:url" content="https://olympiadquiz.org/ncert-solutions-class-3-hindi.html">
  <meta property="og:title" content="NCERT Solutions for Class 3 Hindi (वीणा &amp; रिमझिम) CBSE 2026-27 | OlympiadQuiz">
  <meta property="og:description" content="100% सम्पूर्ण एनसीईआरटी समाधान — कक्षा 3 हिंदी की दोनों पुस्तकों (वीणा के 18 पाठ और रिमझिम के 14 पाठ) के सभी प्रश्नोत्तर एवं सीबीएसई रूब्रिक्स।">
  <meta property="og:image" content="https://olympiadquiz.org/favicon.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@OlympiadQuiz">
  <meta name="twitter:title" content="NCERT Solutions for Class 3 Hindi (Veena &amp; Rimjhim) CBSE 2026-27">
  <meta name="twitter:description" content="Complete textbook solutions for Class 3 Hindi across Veena and Rimjhim with vocabulary, grammar exercises, and CBSE rubrics.">
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
    "name": "NCERT Solutions for Class 3 Hindi (Veena & Rimjhim)",
    "description": "Comprehensive textbook question answers, poems explanation, grammar exercises, and case studies for CBSE Class 3 Hindi 2026-27.",
    "educationalLevel": "Grade 3 / Class 3",
    "learningResourceType": "Textbook Solutions and Assessment Rubrics",
    "inLanguage": "hi",
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
        "name": "क्या कक्षा 3 हिंदी में नई पुस्तक 'वीणा' और पुरानी पुस्तक 'रिमझिम' दोनों के समाधान उपलब्ध हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, OlympiadQuiz पर राष्ट्रीय शिक्षा नीति (NEP 2020) की नई पाठ्यपुस्तक 'वीणा' (18 पाठ) और क्लासिक सीबीएसई पाठ्यपुस्तक 'रिमझिम' (14 पाठ) दोनों के शत-प्रतिशत प्रश्नों के प्रामाणिक समाधान उपलब्ध हैं।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या इन समाधानों में सीबीएसई आधिकारिक स्टेप मार्किंग स्कीम शामिल है?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, प्रत्येक प्रश्न के साथ सीबीएसई की आधिकारिक स्टेप मार्किंग स्कीम (Rubric) दी गई है ताकि छात्र परीक्षा में पूरे अंक प्राप्त करने की उचित लेखन शैली सीख सकें।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या प्रत्येक पाठ में एनईपी 2020 योग्यता-आधारित प्रश्न (CBQ) भी दिए गए हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, प्रत्येक पाठ के अंत में वास्तविक जीवन से जुड़े व्यावहारिक एवं विश्लेषणात्मक योग्यता-आधारित प्रश्न (Competency-Based Questions) सम्मिलित किए गए हैं।"
        }
      }
    ]
  }
  </script>

  <style>
    :root {
      --primary: #d97706;
      --primary-dark: #b45309;
      --primary-light: #fef3c7;
      --secondary: #059669;
      --secondary-light: #ecfdf5;
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
      background: linear-gradient(90deg, #d97706, #059669);
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
      background: #d97706;
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
      color: #fde68a;
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
    .breadcrumb-inner a:hover { color: #d97706; }
    .breadcrumb-inner .sep { color: #cbd5e1; }
    .breadcrumb-inner .cur { color: #0f172a; font-weight: 700; }

    /* Hero Banner */
    .hero-banner {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #ffffff;
      padding: 44px 24px 36px;
      border-bottom: 4px solid #d97706;
    }
    .hero-inner {
      max-width: 1240px;
      margin: 0 auto;
    }
    .hero-badge {
      display: inline-block;
      background: rgba(217, 119, 6, 0.25);
      border: 1px solid #d97706;
      color: #fde68a;
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
      border-color: #fde68a;
    }
    .track-btn.active {
      background: #d97706;
      color: #ffffff;
      border-color: #d97706;
      box-shadow: 0 4px 14px rgba(217, 119, 6, 0.4);
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
      background: #d97706;
      color: #ffffff;
      border-color: #d97706;
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
      border-color: #d97706;
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
      color: #d97706;
    }
    .chapter-nav li a.active {
      background: #fef3c7;
      color: #b45309;
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
      background: #d97706;
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
      background: linear-gradient(135deg, #d97706, #b45309);
      color: #ffffff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.35rem;
      font-weight: 900;
      flex-shrink: 0;
      box-shadow: 0 4px 10px rgba(217, 119, 6, 0.3);
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
      color: #d97706;
      background: #fef3c7;
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
      background: #fefce8;
      border: 1px solid #fef08a;
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
      color: #854d0e;
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
      color: #d97706;
      font-weight: 900;
    }

    /* Exercise Header */
    .ex-div {
      background: #fffbeb;
      border-left: 4px solid #d97706;
      padding: 12px 18px;
      border-radius: 0 10px 10px 0;
      font-weight: 800;
      font-size: 0.98rem;
      color: #92400e;
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
      padding: 4px 8px;
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
      color: #d97706;
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
      color: #d97706;
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
      border: 1px solid #fed7aa;
      border-radius: 10px;
      padding: 12px 16px;
      margin-top: 12px;
    }
    .marking-title {
      font-size: 0.8rem;
      font-weight: 800;
      color: #c2410c;
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
    .marking-marks { font-weight: 700; color: #b45309; }

    /* CBQ Card */
    .cbq-card {
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
      border: 1.5px solid #fed7aa;
      border-radius: 16px;
      padding: 24px;
      margin-top: 28px;
    }
    .cbq-badge {
      display: inline-block;
      background: #d97706;
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
    .site-footer a { color: #fde68a; text-decoration: none; }

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
        <a href="index.html">होम</a>
        <a href="ncert-solutions.html" class="active">एनसीईआरटी समाधान</a>
        <a href="dashboard.html">डैशबोर्ड</a>
      </nav>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <div class="breadcrumb-bar">
    <div class="breadcrumb-inner">
      <a href="index.html">होम</a>
      <span class="sep">/</span>
      <a href="ncert-solutions.html">एनसीईआरटी समाधान</a>
      <span class="sep">/</span>
      <a href="ncert-solutions-class-3.html">कक्षा 3 हब</a>
      <span class="sep">/</span>
      <span class="cur">हिंदी</span>
    </div>
  </div>

  <!-- Hero Banner -->
  <section class="hero-banner">
    <div class="hero-inner">
      <div class="hero-badge">सीबीएसई 2026-27 सत्र • 100% एनसीईआरटी संपूर्ण समाधान</div>
      <h1 class="hero-title">एनसीईआरटी कक्षा 3 हिंदी समाधान</h1>
      <p class="hero-desc">नवीनतम राष्ट्रीय शिक्षा नीति (NEP 2020) पाठ्यपुस्तक 'वीणा भाग 1' (18 पाठ) एवं क्लासिक सीबीएसई पाठ्यपुस्तक 'रिमझिम भाग 3' (14 पाठ) के सभी पाठ्यपुस्तक अभ्यास, बोध प्रश्न, भाषा-व्याकरण रूब्रिक्स और योग्यता-आधारित केस स्टडीज।</p>
      
      <!-- Track Switcher -->
      <div class="book-toggle-bar">
        <button id="btnVeena" class="track-btn active" onclick="switchBook('veena')">
          📕 वीणा भाग 1 (New NCF 2023 - 18 पाठ)
        </button>
        <button id="btnRimjhim" class="track-btn" onclick="switchBook('rimjhim')">
          📙 रिमझिम भाग 3 (Classic CBSE - 14 पाठ)
        </button>
      </div>
    </div>
  </section>

  <!-- Sticky Chapter Chips Bar -->
  <div class="chip-bar">
    <div class="chip-bar-inner">
      <span class="chip-label" id="chipBarLabel">पाठ पर तुरंत जाएँ — वीणा (NEP 2020):</span>
      <div class="chips-wrapper" id="chipsVeena">
        ${veenaChips}
      </div>
      <div class="chips-wrapper" id="chipsRimjhim" style="display:none;">
        ${rimjhimChips}
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="content-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-head">
        <span id="sidebarTitleText">📕 वीणा भाग 1 (पाठ)</span>
        <span id="sidebarCount" style="font-size:0.75rem;background:#fffbeb;color:#b45309;padding:2px 8px;border-radius:6px;">18 पाठ</span>
      </div>
      <input type="text" class="sidebar-search" placeholder="पाठ खोजें..." oninput="filterChapters(this.value)">
      <ul class="chapter-nav" id="navVeena">
        ${veenaSidebar}
      </ul>
      <ul class="chapter-nav" id="navRimjhim" style="display:none;">
        ${rimjhimSidebar}
      </ul>
    </aside>

    <!-- Content Containers -->
    <main class="main-content">
      <div id="containerVeena">
        <!-- Direct Chapter Directory Banner -->
        <div style="background: #ffffff; border: 1.5px solid #fed7aa; border-radius: 16px; padding: 24px; margin-bottom: 28px; box-shadow: 0 4px 12px rgba(217,119,6,0.06);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 2px solid #fffbeb; padding-bottom: 12px;">
            <div>
              <h2 style="font-size: 1.25rem; font-weight: 800; color: #9a3412; margin: 0;">📕 वीणा भाग 1 — समर्पित पाठ पृष्ठ (100% संपूर्ण कवरेज)</h2>
              <p style="font-size: 0.88rem; color: #64748b; margin: 4px 0 0;">पाठ्यपुस्तक के सभी 14+ अभ्यास प्रश्न, भाषा की बात एवं व्याकरण समाधान देखने हेतु पाठ चुनें।</p>
            </div>
            <span style="font-size: 0.8rem; font-weight: 700; color: #15803d; background: #dcfce7; padding: 4px 12px; border-radius: 999px;">18 समर्पित पाठ पृष्ठ</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
            ${veenaChapterDirectoryCards}
          </div>
        </div>
        ${veenaSections}
      </div>
      <div id="containerRimjhim" style="display:none;">
        <!-- Direct Chapter Directory Banner -->
        <div style="background: #ffffff; border: 1.5px solid #fed7aa; border-radius: 16px; padding: 24px; margin-bottom: 28px; box-shadow: 0 4px 12px rgba(234,88,12,0.06);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; border-bottom: 2px solid #fff7ed; padding-bottom: 12px;">
            <div>
              <h2 style="font-size: 1.25rem; font-weight: 800; color: #9a3412; margin: 0;">📙 रिमझिम भाग 3 — समर्पित पाठ पृष्ठ (100% संपूर्ण कवरेज)</h2>
              <p style="font-size: 0.88rem; color: #64748b; margin: 4px 0 0;">पाठ्यपुस्तक के सभी 16+ अभ्यास प्रश्न, कविता से आगे एवं व्याकरण समाधान देखने हेतु पाठ चुनें।</p>
            </div>
            <span style="font-size: 0.8rem; font-weight: 700; color: #c2410c; background: #ffedd5; padding: 4px 12px; border-radius: 999px;">14 समर्पित पाठ पृष्ठ</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 14px;">
            ${rimjhimChapterDirectoryCards}
          </div>
        </div>
        ${rimjhimSections}
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <p>© 2026 OlympiadQuiz — <a href="index.html">होम</a> · <a href="ncert-solutions.html">एनसीईआरटी समाधान हब</a> · <a href="ncert-solutions-class-3.html">कक्षा 3 समाधान</a></p>
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

      document.getElementById('chipBarLabel').innerText = isVeena ? 'पाठ पर तुरंत जाएँ — वीणा (NEP 2020):' : 'पाठ पर तुरंत जाएँ — रिमझिम:';
      document.getElementById('sidebarTitleText').innerText = isVeena ? '📕 वीणा भाग 1 (पाठ)' : '📙 रिमझिम भाग 3 (पाठ)';
      document.getElementById('sidebarCount').innerText = isVeena ? '18 पाठ' : '14 पाठ';

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
      const prog = document.getElementById('progressBar');
      if (prog) prog.style.width = scrolled + '%';
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

const outputPath = path.resolve(__dirname, '../ncert-solutions-class-3-hindi.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`✅ Successfully generated ncert-solutions-class-3-hindi.html (${htmlContent.length} bytes)!`);
