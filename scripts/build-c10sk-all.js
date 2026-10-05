// Build script for Class 10 Sanskrit NCERT Solutions (All 12 Chapters)
// Generates chapters-c10sk/ch*.html and chapters-c10sk/chapters-data.js
// Incorporates 100% textbook questions, CBSE Word Limits, and Marking Scheme Step Rubrics

const fs = require('fs');
const path = require('path');

const { PART1_CHAPTERS } = require('./data-c10sk-part1');
const { PART2_CHAPTERS } = require('./data-c10sk-part2');

const ALL_CHAPTERS = {
  ...PART1_CHAPTERS,
  ...PART2_CHAPTERS
};

const outputDir = path.join(__dirname, '..', 'chapters-c10sk');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function renderChapterHTML(data) {
  const chNum = data.unit;
  let html = `<section class="chapter-section" id="ch${chNum}" data-book="${data.book}">\n`;
  html += `  <div class="chapter-header">\n`;
  html += `    <div class="ch-badge">${data.badge}</div>\n`;
  html += `    <div class="chapter-header-info">\n`;
  html += `      <div class="ch-category">${data.category} • शेमुषी भाग - २ (Code 122)</div>\n`;
  html += `      <h2>${data.title}</h2>\n`;
  html += `      <p class="ch-author">${data.author}</p>\n`;
  html += `    </div>\n`;
  html += `  </div>\n\n`;

  // Central Theme Card
  html += `  <div class="theme-card">\n`;
  html += `    <div class="theme-header">\n`;
  html += `      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>\n`;
  html += `      <span>पाठ-सारः एवं मुख्य-सन्देशः (Chapter Summary & Central Theme)</span>\n`;
  html += `    </div>\n`;
  html += `    <div class="theme-body">\n`;
  html += `      <p>${data.theme}</p>\n`;
  if (data.shlokaIntro) {
    html += `      <p style="margin-top:8px;font-style:italic;color:#6b21a8;"><strong>विशेष-टिप्पणी:</strong> ${data.shlokaIntro}</p>\n`;
  }
  html += `    </div>\n`;
  html += `  </div>\n\n`;

  // Exercise Divider
  html += `  <div class="ex-div">📖 एनसीईआरटी अभ्यास-प्रश्नोत्तराणि एवं सीबीएसई अंक-योजना (CBSE Marking Scheme & Word Limits 2026-27)</div>\n\n`;

  data.questions.forEach((q) => {
    html += `  <div class="q-card" id="${q.id}">\n`;
    html += `    <div class="q-head" onclick="toggleQ('${q.id}')">\n`;
    html += `      <div class="q-head-left">\n`;
    html += `        <span class="q-num">${q.num}</span>\n`;
    if (q.wordLimit) {
      html += `        <span class="word-limit-pill">${q.wordLimit}</span>\n`;
    }
    html += `      </div>\n`;
    html += `      <div class="q-text">${q.text}</div>\n`;
    html += `      <div class="q-marks">${q.marks}</div>\n`;
    html += `      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>\n`;
    html += `    </div>\n`;
    html += `    <div class="q-answer">\n`;
    html += `      <div class="answer-box">\n`;
    html += `        <div class="answer-label">✅ सीबीएसई मानक उत्तरम् (CBSE Model Answer & Detailed Explanation)</div>\n`;
    html += `        <div class="answer-text">\n`;
    html += `${q.answer}\n`;
    html += `        </div>\n`;
    if (q.marking && q.marking.length > 0) {
      html += `        <div class="marking-scheme">\n`;
      html += `          <div class="marking-title">📋 सीबीएसई चरणबद्ध अंक-विभाजन योजना (CBSE Step Marking Rubrics 2026-27)</div>\n`;
      q.marking.forEach(m => {
        html += `          <div class="marking-row"><span class="marking-key">${m.key}</span><span class="marking-marks">${m.marks}</span></div>\n`;
      });
      html += `        </div>\n`;
    }
    html += `      </div>\n`;
    html += `    </div>\n`;
    html += `  </div>\n\n`;
  });

  // Competency section
  if (data.cbq && data.cbq.length > 0) {
    html += `  <div class="cbq-section">\n`;
    html += `    <div class="cbq-header">\n`;
    html += `      <span>🎯 योग्यता-आधारिताः एवं मूल्यपरक-प्रश्नाः (CBSE Competency-Based / HOTS Questions)</span>\n`;
    html += `      <span class="cbq-badge">NEP 2020 Aligned</span>\n`;
    html += `    </div>\n`;
    html += `    <div class="cbq-body">\n`;
    data.cbq.forEach(c => {
      html += `      <div class="cbq-card" style="border-left:4px solid ${c.color};">\n`;
      html += `        <div class="cbq-type" style="color:${c.color};">${c.type}</div>\n`;
      html += `        <div class="cbq-question"><strong>प्रश्नः:</strong> ${c.question}</div>\n`;
      html += `        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ उत्तरं पश्यतु (Show Answer)</button>\n`;
      html += `        <div class="cbq-answer"><p>${c.answer}</p></div>\n`;
      html += `      </div>\n`;
    });
    html += `    </div>\n`;
    html += `  </div>\n\n`;
  }

  // Navigation Buttons
  html += `  <div class="chapter-nav-btns">\n`;
  if (chNum > 1) {
    html += `    <button class="ch-nav-btn" onclick="showChapter(${chNum - 1})">← पूर्वतनः पाठः (Ch ${chNum - 1})</button>\n`;
  } else {
    html += `    <div></div>\n`;
  }
  html += `    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ शीर्षं प्रति (Back to Top)</button>\n`;
  if (chNum < 12) {
    html += `    <button class="ch-nav-btn next" onclick="showChapter(${chNum + 1})">अग्रिमः पाठः (Ch ${chNum + 1}) →</button>\n`;
  } else {
    html += `    <div></div>\n`;
  }
  html += `  </div>\n`;
  html += `</section>`;

  return html;
}

// 1. Generate standalone files
const preloadedData = {};
let totalQ = 0;
let totalMarking = 0;

for (let i = 1; i <= 12; i++) {
  const chData = ALL_CHAPTERS[i];
  if (!chData) {
    console.error(`Missing data for chapter ${i}`);
    continue;
  }
  const rendered = renderChapterHTML(chData);
  const filePath = path.join(outputDir, `ch${i}.html`);
  fs.writeFileSync(filePath, rendered, 'utf8');
  preloadedData[i] = rendered;

  const qCount = chData.questions.length;
  const mCount = chData.questions.reduce((acc, q) => acc + (q.marking ? q.marking.length : 0), 0);
  totalQ += qCount;
  totalMarking += mCount;
  console.log(`Generated ch${i}.html: ${chData.title} (${qCount} Qs, ${mCount} Marking steps)`);
}

// 2. Generate preloaded bundle chapters-data.js
const dataJsPath = path.join(outputDir, 'chapters-data.js');
const jsContent = `// Preloaded Class 10 Sanskrit NCERT Solutions Bundle (All 12 Chapters)
// Provides instant 0ms switching with zero latency
window.PRELOADED_CHAPTERS_C10SK = ${JSON.stringify(preloadedData)};
`;
fs.writeFileSync(dataJsPath, jsContent, 'utf8');
console.log(`\nGenerated chapters-data.js successfully!`);
console.log(`Summary: All 12 Chapters rendered. Total Question Groups: ${totalQ}, Total Marking Steps: ${totalMarking}`);
