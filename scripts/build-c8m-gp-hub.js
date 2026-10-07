const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c8m');
const hubFile = path.join(__dirname, '..', 'ncert-solutions-class-8-maths.html');

const chapters = [
  { n: 1, title: 'A Square and A Cube', file: 'ch1.html', part: 'Part 1' },
  { n: 2, title: 'Power Play', file: 'ch2.html', part: 'Part 1' },
  { n: 3, title: 'A Story of Numbers', file: 'ch3.html', part: 'Part 1' },
  { n: 4, title: 'Quadrilaterals', file: 'ch4.html', part: 'Part 1' },
  { n: 5, title: 'Number Play', file: 'ch5.html', part: 'Part 1' },
  { n: 6, title: 'We Distribute, Yet Things Multiply', file: 'ch6.html', part: 'Part 1' },
  { n: 7, title: 'Proportional Reasoning - 1', file: 'ch7.html', part: 'Part 1' },
  { n: 8, title: 'Fractions in Disguise', file: 'ch8.html', part: 'Part 2' },
  { n: 9, title: 'The Baudhāyana - Pythagoras Theorem', file: 'ch9.html', part: 'Part 2' },
  { n: 10, title: 'Proportional Reasoning - 2', file: 'ch10.html', part: 'Part 2' },
  { n: 11, title: 'Exploring Some Geometric Themes', file: 'ch11.html', part: 'Part 2' },
  { n: 12, title: 'Tales by Dots and Lines', file: 'ch12.html', part: 'Part 2' },
  { n: 13, title: 'Algebra Play', file: 'ch13.html', part: 'Part 2' },
  { n: 14, title: 'Area', file: 'ch14.html', part: 'Part 2' }
];

console.log('Step 1: Reading and ensuring navigation buttons on all 14 chapters...');
const chapterContents = {};

chapters.forEach((ch, idx) => {
  const filePath = path.join(chDir, ch.file);
  let html = fs.readFileSync(filePath, 'utf8').trim();

  // Strip any old ch-nav-btns if already present
  html = html.replace(/<div class="ch-nav-btns">[\s\S]*?<\/div>\s*<\/section>/i, '</section>');

  // Create clean nav buttons
  let prevBtn = idx === 0 
    ? `<button class="ch-nav-btn" disabled style="opacity:.35;">← Previous</button>`
    : `<button class="ch-nav-btn" onclick="showChapter(${chapters[idx - 1].n})">← Chapter ${chapters[idx - 1].n}: ${chapters[idx - 1].title}</button>`;

  let nextBtn = idx === chapters.length - 1
    ? `<button class="ch-nav-btn" disabled style="opacity:.35;">Next Chapter →</button>`
    : `<button class="ch-nav-btn next" onclick="showChapter(${chapters[idx + 1].n})">Chapter ${chapters[idx + 1].n}: ${chapters[idx + 1].title} →</button>`;

  const navHtml = `\n  <div class="ch-nav-btns">\n    ${prevBtn}\n    ${nextBtn}\n  </div>\n</section>`;
  html = html.replace(/<\/section>$/i, navHtml);

  // Write updated chapter HTML back to individual chapter file
  fs.writeFileSync(filePath, html, 'utf8');

  chapterContents[ch.n] = html;
  console.log(`Updated and loaded Chapter ${ch.n}: ${ch.title} (${html.length} bytes)`);
});

// Step 2: Generate chapters-data.js
console.log('\nStep 2: Generating chapters-c8m/chapters-data.js...');
const chaptersDataJs = `// Class 8 Maths (Ganit Prakash) Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapterContents)};\n`;
fs.writeFileSync(path.join(chDir, 'chapters-data.js'), chaptersDataJs, 'utf8');
console.log('chapters-data.js successfully written.');

// Step 3: Build new ncert-solutions-class-8-maths.html
console.log('\nStep 3: Updating ncert-solutions-class-8-maths.html...');
const hubHtml = fs.readFileSync(hubFile, 'utf8');

// Build breadcrumb chips
const chipsHtml = chapters.map(ch => {
  const activeClass = ch.n === 1 ? ' active' : '';
  return `      <span class="bc-chip${activeClass}" onclick="showChapter(${ch.n})" data-ch="${ch.n}"><span class="bc-n">${ch.n}</span>${ch.title}</span>`;
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
    // Add 'hidden' class to section tag
    content = content.replace(/<section class="chapter-section"/i, '<section class="chapter-section hidden"');
  }
  return content;
}).join('\n\n');

// Update Head & Meta Tags
let newHub = hubHtml;

// Title & Meta tags
newHub = newHub.replace(
  /<title>[\s\S]*?<\/title>/i,
  `<title>NCERT Solutions Class 8 Maths (Ganit Prakash) — All 14 Chapters | 100% Questions Solved CBSE 2026-27</title>`
);

newHub = newHub.replace(
  /<meta name="description" content="[\s\S]*?">/i,
  `<meta name="description" content="Complete NCERT Solutions for Class 8 Mathematics based on latest NCERT textbook Ganit Prakash (Part 1 &amp; Part 2) for CBSE 2026-27. 100% question coverage with step-by-step solutions, marking schemes, formulas, and Competency-Based Questions (CBQs) for all 14 chapters.">`
);

newHub = newHub.replace(
  /<meta name="keywords" content="[\s\S]*?">/i,
  `<meta name="keywords" content="NCERT Solutions Class 8 Maths Ganit Prakash, Class 8 Ganit Prakash Solutions, CBSE Class 8 Maths 2026-27, A Square and A Cube, Power Play, A Story of Numbers, Quadrilaterals, Number Play, We Distribute Yet Things Multiply, Proportional Reasoning, Fractions in Disguise, Baudhayana Pythagoras Theorem, Geometric Themes, Tales by Dots and Lines, Algebra Play, Area, NEP 2020 NCF-SE">`
);

newHub = newHub.replace(
  /<meta property="og:title" content="[\s\S]*?">/i,
  `<meta property="og:title" content="NCERT Solutions Class 8 Maths (Ganit Prakash) — All 14 Chapters | CBSE 2026-27">`
);

newHub = newHub.replace(
  /<meta property="og:description" content="[\s\S]*?">/i,
  `<meta property="og:description" content="100% complete exercise solutions for Class 8 Mathematics Ganit Prakash with CBSE marking scheme, key formulas, vector diagrams, and competency-based questions.">`
);

// Update Schema FAQ
newHub = newHub.replace(
  /"name":\s*"How many chapters are in Class 8 Maths NCERT textbook for 2026-27\?",[\s\S]*?"text":\s*"[\s\S]*?"/i,
  `"name": "How many chapters are in Class 8 Maths NCERT textbook Ganit Prakash for 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The latest NCERT Class 8 Mathematics textbook Ganit Prakash consists of 14 chapters across Part 1 and Part 2: Chapter 1: A Square and A Cube, Chapter 2: Power Play, Chapter 3: A Story of Numbers, Chapter 4: Quadrilaterals, Chapter 5: Number Play, Chapter 6: We Distribute Yet Things Multiply, Chapter 7: Proportional Reasoning - 1, Chapter 8: Fractions in Disguise, Chapter 9: The Baudhāyana - Pythagoras Theorem, Chapter 10: Proportional Reasoning - 2, Chapter 11: Exploring Some Geometric Themes, Chapter 12: Tales by Dots and Lines, Chapter 13: Algebra Play, and Chapter 14: Area."
        }`
);

newHub = newHub.replace(
  /"name":\s*"Are 100% of questions and exercises covered in these Class 8 Maths solutions\?",[\s\S]*?"text":\s*"[\s\S]*?"/i,
  `"name": "Are 100% of questions and exercises covered in these Class 8 Maths Ganit Prakash solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100% of all Figure It Out problems and end-of-chapter exercise questions across all 14 chapters of Ganit Prakash are fully solved step-by-step with CBSE marking schemes and competency-based case study questions."
        }`
);

// Update Hero banner
newHub = newHub.replace(
  /<header class="hero-banner">[\s\S]*?<\/header>/i,
  `<header class="hero-banner">
  <h1>Class 8 Maths — NCERT Ganit Prakash Solutions</h1>
  <p>Complete <strong>100% question coverage</strong> for all 'Figure It Out' sections &amp; exercises across <strong>all 14 chapters</strong> of NCERT Class 8 Mathematics <em>Ganit Prakash</em> (Part 1 &amp; Part 2 | CBSE 2026-27). Step-by-step solutions as per CBSE Marking Scheme with Vector Diagrams &amp; Competency-Based Case Studies (CBQ).</p>
  <div class="hero-badges">
    <span class="hero-badge">📘 Ganit Prakash (Part 1 &amp; 2)</span>
    <span class="hero-badge">✅ All 14 Chapters (100% Solved)</span>
    <span class="hero-badge">📐 NEP 2020 &amp; NCF-SE 2023</span>
    <span class="hero-badge">🔢 CBSE Marking Scheme 2026-27</span>
    <span class="hero-badge">🎯 Case Study Questions</span>
  </div>
</header>`
);

// Update Breadcrumb chips
newHub = newHub.replace(
  /<div class="breadcrumb-chips" id="breadcrumbChips">[\s\S]*?<\/div>/i,
  `<div class="breadcrumb-chips" id="breadcrumbChips">\n${chipsHtml}\n    </div>`
);

// Update Sidebar Title and Navigation
newHub = newHub.replace(
  /<div class="sidebar-title">[\s\S]*?<\/div>/i,
  `<div class="sidebar-title">
      <span>14 Chapters (Ganit Prakash)</span>
      <span style="font-size:0.75rem;background:#eef2ff;color:#3730a3;padding:2px 8px;border-radius:10px;">100% Solved</span>
    </div>`
);

newHub = newHub.replace(
  /<ul class="chapter-nav" id="chapterNav">[\s\S]*?<\/ul>/i,
  `<ul class="chapter-nav" id="chapterNav">\n${sidebarNavHtml}\n    </ul>`
);

// Update Content Area
newHub = newHub.replace(
  /<div id="chapter-content-area">[\s\S]*?<\/div>\s*<\/main>/i,
  `<div id="chapter-content-area">\n${sectionsHtml}\n    </div>\n  </main>`
);

// Update JavaScript boundary check from 13 to 14
newHub = newHub.replace(/if\s*\(\s*n\s*<\s*1\s*\|\|\s*n\s*>\s*13\s*\)\s*return;/g, 'if (n < 1 || n > 14) return;');
newHub = newHub.replace(/if\s*\(\s*ch\s*>=\s*1\s*&&\s*ch\s*<=\s*13\s*\)/g, 'if (ch >= 1 && ch <= 14)');
newHub = newHub.replace(/if\s*\(\s*ch\s*>=\s*1\s*&&\s*ch\s*<=\s*13\s*&&\s*ch\s*!==\s*currentCh\s*\)/g, 'if (ch >= 1 && ch <= 14 && ch !== currentCh)');

// Write updated Hub file
fs.writeFileSync(hubFile, newHub, 'utf8');
console.log('ncert-solutions-class-8-maths.html successfully updated with all 14 Ganit Prakash chapters!');
