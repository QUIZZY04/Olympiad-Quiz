const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c9m');
const hubFile = path.join(__dirname, '..', 'ncert-solutions-class-9-maths.html');

const chapters = [
  { n: 1, title: 'Orienting Yourself — The Use of Coordinates', shortTitle: 'Coordinates', part: 'Part 1', file: 'ch1.html' },
  { n: 2, title: 'Introduction to Linear Polynomials', shortTitle: 'Linear Polynomials', part: 'Part 1', file: 'ch2.html' },
  { n: 3, title: 'The World of Numbers', shortTitle: 'World of Numbers', part: 'Part 1', file: 'ch3.html' },
  { n: 4, title: 'Exploring Algebraic Identities', shortTitle: 'Algebraic Identities', part: 'Part 1', file: 'ch4.html' },
  { n: 5, title: 'I’m Up and Down, and Round and Round', shortTitle: 'Angles & Oscillations', part: 'Part 1', file: 'ch5.html' },
  { n: 6, title: 'Measuring Space — Perimeter and Area', shortTitle: 'Perimeter & Area', part: 'Part 1', file: 'ch6.html' },
  { n: 7, title: 'The Mathematics of Maybe — Introduction to Probability', shortTitle: 'Probability', part: 'Part 1', file: 'ch7.html' },
  { n: 8, title: 'Predicting What Comes Next — Exploring Sequences', shortTitle: 'Sequences & Patterns', part: 'Part 2', file: 'ch8.html' },
  { n: 9, title: 'Propositions and Their Converses', shortTitle: 'Propositions & Logic', part: 'Part 2', file: 'ch9.html' },
  { n: 10, title: 'How Quantities Combine — Understanding Data', shortTitle: 'Understanding Data', part: 'Part 2', file: 'ch10.html' },
  { n: 11, title: 'The World of Algorithms', shortTitle: 'World of Algorithms', part: 'Part 2', file: 'ch11.html' },
  { n: 12, title: 'Quadrilaterals', shortTitle: 'Quadrilaterals', part: 'Part 2', file: 'ch12.html' },
  { n: 13, title: 'Two Variables, One Line', shortTitle: 'Two Variables, One Line', part: 'Part 2', file: 'ch13.html' },
  { n: 14, title: 'Surface Area and Volume', shortTitle: 'Surface Area & Volume', part: 'Part 2', file: 'ch14.html' }
];

console.log('=== Step 1: Cleaning and Standardizing Class 9 Chapter Files ===');
const chapterContents = {};

chapters.forEach((ch, idx) => {
  const filePath = path.join(chDir, ch.file);
  let html = fs.readFileSync(filePath, 'utf8').trim();

  // Strip any old ch-nav-btns if already present
  html = html.replace(/<div class="ch-nav-btns">[\s\S]*?<\/div>\s*<\/section>/i, '</section>');

  // 1. Correct book spelling
  html = html.replace(/Ganit\s+Manzari/gi, 'Ganita Manjari');
  html = html.replace(/Ganit\s+Manjari/gi, 'Ganita Manjari');

  // 2. Remove false "CBSE Marking Scheme" claims in subtitles, answer labels, and marking boxes
  html = html.replace(/CBSE\s+Standard\s+Answer/gi, 'Suggested Step-by-Step Solution');
  html = html.replace(/CBSE\s+Marking\s+Scheme\s+2026-27/gi, 'Suggested Marks Distribution');
  html = html.replace(/CBSE\s+Marking\s+Scheme/gi, 'Suggested Marks Distribution');
  html = html.replace(/\[CBSE\s+(\d+\s+Marks?)\]/gi, '[Suggested: $1]');
  html = html.replace(/\[CBSE\s+(\d+\s+Mark)\]/gi, '[Suggested: $1]');

  // In chapter-header-info subtitle: e.g. "Ganita Manjari (Part I) — Exercise Sets 1.1 & 1.2 — Suggested Marks Distribution" -> "... — Suggested Step-by-Step Solutions"
  html = html.replace(/—\s*Suggested\s+Marks\s+Distribution(?=<\/p>)/gi, '— Suggested Step-by-Step Solutions');

  // 3. Clear differentiation of questions
  // Update Competency-Based & HOTS section header if needed
  html = html.replace(/<span>🎯\s*Competency-Based Questions \(CBQ\) &amp; HOTS<\/span>/gi, '<span>🎯 Competency-Based Practice Questions (CBQ) &amp; HOTS</span>');

  // 4. Create clean navigation buttons
  let prevBtn = idx === 0 
    ? `<button class="ch-nav-btn" disabled style="opacity:.35;">← Previous</button>`
    : `<button class="ch-nav-btn" onclick="showChapter(${chapters[idx - 1].n})">← Chapter ${chapters[idx - 1].n}: ${chapters[idx - 1].shortTitle}</button>`;

  let nextBtn = idx === chapters.length - 1
    ? `<button class="ch-nav-btn next" onclick="showChapter(1)" style="background:#10b981;border-color:#10b981;">⌂ Back to Chapter 1</button>`
    : `<button class="ch-nav-btn next" onclick="showChapter(${chapters[idx + 1].n})">Chapter ${chapters[idx + 1].n}: ${chapters[idx + 1].shortTitle} →</button>`;

  const navHtml = `\n  <div class="ch-nav-btns">\n    ${prevBtn}\n    ${nextBtn}\n  </div>\n</section>`;
  html = html.replace(/<\/section>$/i, navHtml);

  // Write updated chapter HTML back to individual chapter file
  fs.writeFileSync(filePath, html, 'utf8');

  chapterContents[ch.n] = html;
  console.log(`Updated Ch ${ch.n}: ${ch.title} (${html.length} bytes)`);
});

// Step 2: Generate chapters-c9m/chapters-data.js
console.log('\n=== Step 2: Generating chapters-c9m/chapters-data.js ===');
const chaptersDataJs = `// Class 9 Maths (Ganita Manjari) Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapterContents)};\n`;
fs.writeFileSync(path.join(chDir, 'chapters-data.js'), chaptersDataJs, 'utf8');
console.log(`chapters-data.js successfully written (${chaptersDataJs.length} bytes).`);

// Step 3: Build new ncert-solutions-class-9-maths.html
console.log('\n=== Step 3: Building and Updating ncert-solutions-class-9-maths.html ===');
let hubHtml = fs.readFileSync(hubFile, 'utf8');

// Build breadcrumb chips
const chipsHtml = chapters.map(ch => {
  const activeClass = ch.n === 1 ? ' active' : '';
  return `    <span class="bc-chip${activeClass}" onclick="showChapter(${ch.n})" data-ch="${ch.n}"><span class="bc-n">${ch.n}</span>${ch.shortTitle}</span>`;
}).join('\n');

// Build sidebar nav links
const sidebarNavHtml = chapters.map(ch => {
  const activeClass = ch.n === 1 ? ' active' : '';
  return `      <li><a onclick="showChapter(${ch.n})" data-ch="${ch.n}" class="${activeClass}"><span class="ch-num">${ch.n}</span><span>${ch.title}</span></a></li>`;
}).join('\n');

// Build chapter sections for DOM
const sectionsHtml = chapters.map(ch => {
  let content = chapterContents[ch.n];
  if (ch.n !== 1) {
    content = content.replace(/<section class="chapter-section"/i, '<section class="chapter-section hidden"');
  }
  return content;
}).join('\n\n');

// Update Title (Exact requested template: NCERT Solutions Class 9 Maths Ganita Manjari 2026-27 | Chapter-wise Solutions)
hubHtml = hubHtml.replace(
  /<title>[\s\S]*?<\/title>/i,
  `<title>NCERT Solutions Class 9 Maths Ganita Manjari 2026-27 | Chapter-wise Solutions</title>`
);

// Update Meta Description
hubHtml = hubHtml.replace(
  /<meta name="description" content="[\s\S]*?">/i,
  `<meta name="description" content="Complete NCERT Solutions for Class 9 Mathematics based on the latest NCERT textbook Ganita Manjari (Part 1 &amp; Part 2) for CBSE 2026-27. Comprehensive chapter exercises, suggested marks distributions, step-by-step solutions, formulas, and proofs for all 14 chapters.">`
);

// Update Meta Keywords
hubHtml = hubHtml.replace(
  /<meta name="keywords" content="[\s\S]*?">/i,
  `<meta name="keywords" content="NCERT Solutions Class 9 Maths Ganita Manjari, Class 9 Ganita Manjari Solutions, CBSE Class 9 Maths 2026-27, Coordinates, Linear Polynomials, The World of Numbers, Algebraic Identities, Perimeter and Area, Probability, Sequences, Propositions, Understanding Data, Algorithms, Quadrilaterals, Two Variables One Line, Surface Area and Volume, NEP 2020 NCF-SE">`
);

// Update Open Graph
hubHtml = hubHtml.replace(
  /<meta property="og:title" content="[\s\S]*?">/i,
  `<meta property="og:title" content="NCERT Solutions Class 9 Maths Ganita Manjari 2026-27 | Chapter-wise Solutions">`
);
hubHtml = hubHtml.replace(
  /<meta property="og:description" content="[\s\S]*?">/i,
  `<meta property="og:description" content="Complete exercise solutions for Class 9 Mathematics Ganita Manjari (Part I &amp; II) with suggested marks distributions, key formulas, coordinate geometry, polynomials, and all 14 chapters.">`
);

// Update Twitter
hubHtml = hubHtml.replace(
  /<meta name="twitter:title" content="[\s\S]*?">/i,
  `<meta name="twitter:title" content="NCERT Solutions Class 9 Maths Ganita Manjari 2026-27 | Chapter-wise Solutions">`
);
hubHtml = hubHtml.replace(
  /<meta name="twitter:description" content="[\s\S]*?">/i,
  `<meta name="twitter:description" content="Complete exercise solutions for Class 9 Mathematics Ganita Manjari (Part I &amp; II) with suggested marks distributions, key formulas, coordinate geometry, polynomials, and all 14 chapters.">`
);

// Update Breadcrumb Navigation HTML (Step 14: Home -> NCERT Solutions -> Class 9 -> Maths -> Ganita Manjari)
hubHtml = hubHtml.replace(
  /<nav class="ncert-breadcrumb-nav" aria-label="Breadcrumb">[\s\S]*?<\/nav>/i,
  `<nav class="ncert-breadcrumb-nav" aria-label="Breadcrumb">
  <div class="ncert-bc-container">
    <ol class="ncert-bc-list">
      <li><a href="index.html">Home</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions.html">NCERT Solutions</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions.html#class9">Class 9</a></li>
      <li class="ncert-bc-sep">/</li>
      <li><a href="ncert-solutions-class-9-maths.html">Maths</a></li>
      <li class="ncert-bc-sep">/</li>
      <li class="ncert-bc-current">Ganita Manjari</li>
    </ol>
    <div class="ncert-bc-switch">
      <span class="ncert-bc-switch-label">Switch Subject:</span>
      <a href="ncert-solutions-class-9-maths.html" class="ncert-bc-pill active">Maths</a>
      <a href="ncert-solutions-class-9-science.html" class="ncert-bc-pill">Science</a>
      <a href="ncert-solutions-class-9-social-science.html" class="ncert-bc-pill">Social Science</a>
      <a href="ncert-solutions-class-9-english.html" class="ncert-bc-pill">English</a>
      <a href="ncert-solutions-class-9-hindi.html" class="ncert-bc-pill">Hindi</a>
    </div>
  </div>
</nav>`
);

// Update BreadcrumbList schema
hubHtml = hubHtml.replace(
  /<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"BreadcrumbList"[\s\S]*?<\/script>/i,
  `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://olympiadquiz.org/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NCERT Solutions",
        "item": "https://olympiadquiz.org/ncert-solutions.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Class 9",
        "item": "https://olympiadquiz.org/ncert-solutions.html#class9"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Maths",
        "item": "https://olympiadquiz.org/ncert-solutions-class-9-maths.html"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Ganita Manjari",
        "item": "https://olympiadquiz.org/ncert-solutions-class-9-maths.html"
      }
    ]
  }
  </script>`
);

// Update LearningResource schema
hubHtml = hubHtml.replace(
  /<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"LearningResource"[\s\S]*?<\/script>/i,
  `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "NCERT Solutions Class 9 Maths Ganita Manjari 2026-27 | OlympiadQuiz",
    "description": "Complete NCERT Solutions for Class 9 Mathematics based on the latest textbook Ganita Manjari (Part 1 & Part 2) for CBSE 2026-27. Step-by-step solutions, suggested marks distributions, and practice exercises for all 14 chapters.",
    "educationalLevel": "Class 9",
    "learningResourceType": "Textbook Solutions",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "provider": {
      "@type": "Organization",
      "name": "OlympiadQuiz",
      "url": "https://olympiadquiz.org"
    }
  }
  </script>`
);

// Update FAQPage schema
hubHtml = hubHtml.replace(
  /<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"FAQPage"[\s\S]*?<\/script>/i,
  `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the official NCERT Class 9 Mathematics textbook for 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official NCERT textbook for Class 9 Mathematics is Ganita Manjari, published in two parts (Part 1 and Part 2) comprising 14 chapters aligned with NEP 2020 and NCF-SE 2023."
        }
      },
      {
        "@type": "Question",
        "name": "How many chapters are in Class 9 Maths NCERT textbook Ganita Manjari for 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ganita Manjari consists of 14 chapters across Part 1 and Part 2: Chapter 1: Orienting Yourself — The Use of Coordinates, Chapter 2: Introduction to Linear Polynomials, Chapter 3: The World of Numbers, Chapter 4: Exploring Algebraic Identities, Chapter 5: I’m Up and Down, and Round and Round, Chapter 6: Measuring Space — Perimeter and Area, Chapter 7: The Mathematics of Maybe — Introduction to Probability, Chapter 8: Predicting What Comes Next — Exploring Sequences, Chapter 9: Propositions and Their Converses, Chapter 10: How Quantities Combine — Understanding Data, Chapter 11: The World of Algorithms, Chapter 12: Quadrilaterals, Chapter 13: Two Variables, One Line, and Chapter 14: Surface Area and Volume."
        }
      },
      {
        "@type": "Question",
        "name": "Do these Class 9 Maths solutions provide suggested step-by-step marks distributions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, each question includes clear step-by-step explanations with suggested marks distributions to guide exam-oriented preparation."
        }
      },
      {
        "@type": "Question",
        "name": "Is registration or payment required to read these solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all NCERT solutions on OlympiadQuiz are 100% free with immediate access and no login or subscription required."
        }
      }
    ]
  }
  </script>`
);

// Update Hero banner (Exact requested H1: NCERT Solutions for Class 9 Maths – Ganita Manjari)
hubHtml = hubHtml.replace(
  /<header class="hero-banner">[\s\S]*?<\/header>/i,
  `<header class="hero-banner">
  <h1>NCERT Solutions for Class 9 Maths – Ganita Manjari</h1>
  <p>Complete <strong>chapter-wise solutions</strong> for all exercise sets across <strong>all 14 chapters</strong> of NCERT Class 9 Mathematics <em>Ganita Manjari</em> (Part 1 &amp; Part 2 | CBSE 2026-27). Step-by-step solutions with suggested marks distributions, key formulas, graphs, proofs, and real-life mathematical modeling.</p>
  <div class="hero-badges">
    <span class="hero-badge">📘 Ganita Manjari (Part 1 &amp; 2)</span>
    <span class="hero-badge">✅ All 14 Chapters</span>
    <span class="hero-badge">📐 NEP 2020 &amp; NCF-SE 2023</span>
    <span class="hero-badge">🔢 Suggested Marks Distribution</span>
    <span class="hero-badge">🎯 Competency &amp; HOTS Practice</span>
  </div>
</header>`
);

// Update Breadcrumb bar & chips
hubHtml = hubHtml.replace(
  /<div class="breadcrumb-label">[\s\S]*?<\/div>\s*<div class="breadcrumb-chips" id="breadcrumbChips">[\s\S]*?<\/div>/i,
  `<div class="breadcrumb-label">📐 Class 9 Maths (Ganita Manjari) — Jump to Chapter</div>
  <div class="breadcrumb-chips" id="breadcrumbChips">
${chipsHtml}
  </div>`
);

// Update Sidebar Title and Navigation
hubHtml = hubHtml.replace(
  /<div class="sidebar-title">[\s\S]*?<\/div>/i,
  `<div class="sidebar-title">
      <span>14 Chapters (Ganita Manjari)</span>
      <span style="font-size:0.75rem;background:#eef2ff;color:#3730a3;padding:2px 8px;border-radius:10px;">100% Solved</span>
    </div>`
);

hubHtml = hubHtml.replace(
  /<ul class="chapter-nav" id="chapterNav">[\s\S]*?<\/ul>/i,
  `<ul class="chapter-nav" id="chapterNav">
${sidebarNavHtml}
    </ul>`
);

// Update Content Area
hubHtml = hubHtml.replace(
  /<div id="chapter-content-area">[\s\S]*?<\/div>\s*<\/main>/i,
  `<div id="chapter-content-area">
${sectionsHtml}
    </div>
  </main>`
);

// Global replacements in hubHtml for any lingering "Manzari" or "CBSE Marking Scheme"
hubHtml = hubHtml.replace(/Ganit\s+Manzari/gi, 'Ganita Manjari');
hubHtml = hubHtml.replace(/Ganit\s+Manjari/gi, 'Ganita Manjari');
hubHtml = hubHtml.replace(/CBSE\s+Standard\s+Answer/gi, 'Suggested Step-by-Step Solution');
hubHtml = hubHtml.replace(/CBSE\s+Marking\s+Scheme\s+2026-27/gi, 'Suggested Marks Distribution');
hubHtml = hubHtml.replace(/CBSE\s+Marking\s+Scheme/gi, 'Suggested Marks Distribution');
hubHtml = hubHtml.replace(/as per CBSE Marking Scheme/gi, 'with suggested marks distributions and step-by-step solutions');

fs.writeFileSync(hubFile, hubHtml, 'utf8');
console.log(`ncert-solutions-class-9-maths.html successfully built and saved (${hubHtml.length} bytes)!`);
