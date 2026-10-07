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

console.log('=== Step 1: Standardizing Navigation Buttons on all 14 chapters ===');
const chapterContents = {};

chapters.forEach((ch, idx) => {
  const filePath = path.join(chDir, ch.file);
  let html = fs.readFileSync(filePath, 'utf8').trim();

  // Strip any old ch-nav-btns if already present
  html = html.replace(/<div class="ch-nav-btns">[\s\S]*?<\/div>\s*<\/section>/i, '</section>');

  // Create clean nav buttons
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
const chaptersDataJs = `// Class 9 Maths (Ganit Manzari) Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapterContents)};\n`;
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
    // Add 'hidden' class to section tag
    content = content.replace(/<section class="chapter-section"/i, '<section class="chapter-section hidden"');
  }
  return content;
}).join('\n\n');

// Update Title
hubHtml = hubHtml.replace(
  /<title>[\s\S]*?<\/title>/i,
  `<title>NCERT Solutions Class 9 Maths (Ganit Manzari) — All 14 Chapters | 100% Questions Solved CBSE 2026-27</title>`
);

// Update Meta Description
hubHtml = hubHtml.replace(
  /<meta name="description" content="[\s\S]*?">/i,
  `<meta name="description" content="Complete NCERT Solutions for Class 9 Mathematics based on the latest NCERT textbook Ganit Manzari (Ganita Manjari Part 1 &amp; Part 2) for CBSE 2026-27. 100% questions solved with step-by-step CBSE marking schemes, formulas, and proofs for all 14 chapters.">`
);

// Update Meta Keywords
hubHtml = hubHtml.replace(
  /<meta name="keywords" content="[\s\S]*?">/i,
  `<meta name="keywords" content="NCERT Solutions Class 9 Maths Ganit Manzari, Class 9 Ganita Manjari Solutions, CBSE Class 9 Maths 2026-27, Coordinates, Linear Polynomials, The World of Numbers, Algebraic Identities, Perimeter and Area, Probability, Sequences, Propositions, Understanding Data, Algorithms, Quadrilaterals, Two Variables One Line, Surface Area and Volume, NEP 2020 NCF-SE">`
);

// Update Open Graph
hubHtml = hubHtml.replace(
  /<meta property="og:title" content="[\s\S]*?">/i,
  `<meta property="og:title" content="NCERT Solutions Class 9 Maths (Ganit Manzari) — All 14 Chapters | CBSE 2026-27">`
);
hubHtml = hubHtml.replace(
  /<meta property="og:description" content="[\s\S]*?">/i,
  `<meta property="og:description" content="100% complete exercise solutions for Class 9 Mathematics Ganit Manzari (Part I &amp; II) with CBSE marking scheme, key formulas, coordinate geometry, polynomials, and all 14 chapters.">`
);

// Update Twitter
hubHtml = hubHtml.replace(
  /<meta name="twitter:title" content="[\s\S]*?">/i,
  `<meta name="twitter:title" content="NCERT Solutions Class 9 Maths (Ganit Manzari) — All 14 Chapters | CBSE 2026-27">`
);
hubHtml = hubHtml.replace(
  /<meta name="twitter:description" content="[\s\S]*?">/i,
  `<meta name="twitter:description" content="100% complete exercise solutions for Class 9 Mathematics Ganit Manzari (Part I &amp; II) with CBSE marking scheme, key formulas, coordinate geometry, polynomials, and all 14 chapters.">`
);

// Update BreadcrumbList schema
hubHtml = hubHtml.replace(
  /"name":\s*"Mathematics",\s*"item":\s*"https:\/\/olympiadquiz\.org\/ncert-solutions-class-9-maths\.html"/i,
  `"name": "Mathematics (Ganit Manzari)",\n        "item": "https://olympiadquiz.org/ncert-solutions-class-9-maths.html"`
);

// Update LearningResource schema
hubHtml = hubHtml.replace(
  /"name":\s*"NCERT Solutions for Class 9 Maths[^"]*",\s*"description":\s*"[^"]*",/i,
  `"name": "NCERT Solutions Class 9 Maths (Ganit Manzari) — All 14 Chapters Step-by-Step | OlympiadQuiz",\n    "description": "Free complete NCERT Solutions for Class 9 Mathematics based on the latest textbook Ganit Manzari (Part 1 & Part 2) for CBSE 2026-27. Complete proofs, derivations, step-by-step CBSE marking schemes, and exercises for all 14 chapters.",`
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
        "name": "How many chapters are in Class 9 Maths NCERT textbook Ganit Manzari for 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The latest NCERT Class 9 Mathematics textbook Ganit Manzari (Ganita Manjari) consists of 14 chapters across Part 1 and Part 2: Chapter 1: Orienting Yourself — The Use of Coordinates, Chapter 2: Introduction to Linear Polynomials, Chapter 3: The World of Numbers, Chapter 4: Exploring Algebraic Identities, Chapter 5: I’m Up and Down, and Round and Round, Chapter 6: Measuring Space — Perimeter and Area, Chapter 7: The Mathematics of Maybe — Introduction to Probability, Chapter 8: Predicting What Comes Next — Exploring Sequences, Chapter 9: Propositions and Their Converses, Chapter 10: How Quantities Combine — Understanding Data, Chapter 11: The World of Algorithms, Chapter 12: Quadrilaterals, Chapter 13: Two Variables, One Line, and Chapter 14: Surface Area and Volume."
        }
      },
      {
        "@type": "Question",
        "name": "Are these Class 9 Mathematics NCERT solutions updated for CBSE 2026-27 as per Ganit Manzari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all solutions are 100% updated and strictly aligned with the latest NCERT Ganit Manzari textbook and CBSE guidelines for academic year 2026-27."
        }
      },
      {
        "@type": "Question",
        "name": "Do these solutions provide step-by-step CBSE marking schemes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every question is solved following official CBSE marking rubrics, with explicit marks awarded for given data, formulas, derivations, and final conclusions."
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

// Ensure CSS includes .chapter-section.hidden { display: none !important; }
if (!hubHtml.includes('.chapter-section.hidden')) {
  hubHtml = hubHtml.replace(
    /\.chapter-section\{/i,
    '.chapter-section.hidden{display:none !important;}\n    .chapter-section{'
  );
}

// Update Hero banner
hubHtml = hubHtml.replace(
  /<header class="hero-banner">[\s\S]*?<\/header>/i,
  `<header class="hero-banner">
  <h1>Class 9 Maths — NCERT Ganit Manzari Solutions</h1>
  <p>Complete <strong>100% question coverage</strong> for all exercise sets across <strong>all 14 chapters</strong> of NCERT Class 9 Mathematics <em>Ganit Manzari</em> (Part 1 &amp; Part 2 | CBSE 2026-27). Step-by-step solutions as per CBSE Marking Scheme with key formulas, graphs, proofs, and real-life mathematical modeling.</p>
  <div class="hero-badges">
    <span class="hero-badge">📘 Ganit Manzari (Part 1 &amp; 2)</span>
    <span class="hero-badge">✅ All 14 Chapters (100% Solved)</span>
    <span class="hero-badge">📐 NEP 2020 &amp; NCF-SE 2023</span>
    <span class="hero-badge">🔢 CBSE Marking Scheme 2026-27</span>
    <span class="hero-badge">🎯 85+ Solved Questions</span>
  </div>
</header>`
);

// Update Breadcrumb bar & chips
hubHtml = hubHtml.replace(
  /<div class="breadcrumb-label">[\s\S]*?<\/div>\s*<div class="breadcrumb-chips" id="breadcrumbChips">[\s\S]*?<\/div>/i,
  `<div class="breadcrumb-label">📐 Class 9 Maths (Ganit Manzari) — Jump to Chapter</div>
  <div class="breadcrumb-chips" id="breadcrumbChips">
${chipsHtml}
  </div>`
);

// Update Sidebar Title and Navigation
hubHtml = hubHtml.replace(
  /<div class="sidebar-title">[\s\S]*?<\/div>/i,
  `<div class="sidebar-title">
      <span>14 Chapters (Ganit Manzari)</span>
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

// Update script implementation for showChapter and event listeners
const scriptReplacement = `
<script>
  let currentCh = 1;

  // Scroll Progress
  window.addEventListener('scroll', () => {
    const el = document.documentElement;
    const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = progress + '%';
  });

  // Toggle question accordion
  function toggleQ(id) {
    const card = document.getElementById(id);
    if (card) card.classList.toggle('open');
  }

  // Toggle CBQ Answer
  function toggleCBQ(btn) {
    const ans = btn.nextElementSibling;
    if (ans) {
      if (ans.style.display === 'block') {
        ans.style.display = 'none';
        btn.textContent = '▶ Show Answer';
      } else {
        ans.style.display = 'block';
        btn.textContent = '▼ Hide Answer';
      }
    }
  }

  // Instant Chapter Switcher (All 14 Chapters Pre-rendered in DOM)
  function showChapter(n, updateHistory = true) {
    if (n < 1 || n > 14) return;
    currentCh = n;

    // Update active chip
    document.querySelectorAll('.bc-chip').forEach(c => {
      c.classList.toggle('active', parseInt(c.dataset.ch) === n);
    });

    // Scroll active chip into view smoothly
    const activeChip = document.querySelector(\`.bc-chip[data-ch="\${n}"]\`);
    if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    // Update active sidebar link
    document.querySelectorAll('#chapterNav li a').forEach(a => {
      a.classList.toggle('active', parseInt(a.dataset.ch) === n);
    });

    // Close mobile sidebar if open
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebarOverlay');
    if (sb && sb.classList.contains('open')) sb.classList.remove('open');
    if (ov && ov.classList.contains('show')) ov.classList.remove('show');

    // Instantly toggle sections
    document.querySelectorAll('.chapter-section').forEach(sec => {
      sec.classList.toggle('hidden', sec.id !== 'ch' + n);
    });

    if (updateHistory) window.location.hash = 'ch' + n;
    scrollToContentTop();
  }

  function scrollToContentTop() {
    const bc = document.querySelector('.breadcrumb-bar');
    if (bc) {
      const topOffset = bc.getBoundingClientRect().bottom + window.pageYOffset;
      window.scrollTo({ top: topOffset - 75, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Handle URL hash on initial load
  window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    const match = hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 14) {
        showChapter(ch, false);
      } else {
        showChapter(1, false);
      }
    } else {
      showChapter(1, false);
    }
  });

  window.addEventListener('hashchange', () => {
    const match = window.location.hash.match(/^#ch(\\d+)$/);
    if (match) {
      const ch = parseInt(match[1]);
      if (ch >= 1 && ch <= 14 && ch !== currentCh) {
        showChapter(ch, false);
      }
    }
  });

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('show');
  }

  const sbOverlay = document.getElementById('sidebarOverlay');
  if (sbOverlay) {
    sbOverlay.addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sidebarOverlay').classList.remove('show');
    });
  }

  function filterChapters(v) {
    document.querySelectorAll('#chapterNav li').forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(v.toLowerCase()) ? '' : 'none';
    });
  }

  const mobToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('navLinks');
  if (mobToggle && navLinks) {
    mobToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobToggle.classList.toggle('active');
    });
  }
</script>`;

hubHtml = hubHtml.replace(/<script>[\s\S]*?<\/script>\s*<\/body>/i, `${scriptReplacement}\n</body>`);

fs.writeFileSync(hubFile, hubHtml, 'utf8');
console.log(`ncert-solutions-class-9-maths.html successfully built and saved (${hubHtml.length} bytes)!`);
