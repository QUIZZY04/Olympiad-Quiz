// Build script for Class 10 English NCERT Solutions (All 28 Units)
// Generates chapters-c10e/ch*.html and chapters-c10e/chapters-data.js

const fs = require('fs');
const path = require('path');

const { PROSE_CHAPTERS } = require('./data-c10e-prose');
const { POETRY_CHAPTERS } = require('./data-c10e-poetry');
const { FOOTPRINTS_CHAPTERS } = require('./data-c10e-footprints');

const ALL_CHAPTERS = {
  ...PROSE_CHAPTERS,
  ...POETRY_CHAPTERS,
  ...FOOTPRINTS_CHAPTERS
};

const outputDir = path.join(__dirname, '..', 'chapters-c10e');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function renderChapterHTML(data) {
  const chNum = data.unit;
  let html = `<section class="chapter-section" id="ch${chNum}" data-book="${data.book}">\n`;
  html += `  <div class="chapter-header">\n`;
  html += `    <div class="ch-badge">${data.badge}</div>\n`;
  html += `    <div class="chapter-header-info">\n`;
  html += `      <div class="ch-category">${data.category}</div>\n`;
  html += `      <h2>${data.title}</h2>\n`;
  html += `      <p>${data.author}</p>\n`;
  html += `    </div>\n`;
  html += `  </div>\n`;

  if (data.poem) {
    html += `  <div class="poem-display-box">\n`;
    html += `    <div class="poem-body">${data.poem}</div>\n`;
    if (data.poet) {
      html += `    <div class="poet-name">${data.poet}</div>\n`;
    }
    html += `  </div>\n\n`;
  }

  html += `  <div class="ex-div">I. Textbook Exercise Solutions & Important Questions — CBSE Marking Scheme 2026-27</div>\n\n`;

  data.questions.forEach((q) => {
    html += `  <div class="q-card" id="${q.id}">\n`;
    html += `    <div class="q-head" onclick="toggleQ('${q.id}')">\n`;
    html += `      <div class="q-num">${q.num}</div>\n`;
    html += `      <div class="q-text">${q.text}</div>\n`;
    html += `      <div class="q-marks">${q.marks}</div>\n`;
    html += `      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>\n`;
    html += `    </div>\n`;
    html += `    <div class="q-answer">\n`;
    html += `      <div class="answer-box">\n`;
    html += `        <div class="answer-label">✅ CBSE Standard Answer (Max Word Count)</div>\n`;
    html += `        <div class="answer-text">\n`;
    html += `${q.answer}\n`;
    html += `        </div>\n`;
    if (q.marking && q.marking.length > 0) {
      html += `        <div class="marking-scheme">\n`;
      html += `          <div class="marking-title">CBSE Marking Scheme Breakdown 2026-27</div>\n`;
      q.marking.forEach(m => {
        html += `          <div class="marking-row"><span class="marking-key">${m.key}</span><span class="marking-marks">${m.marks}</span></div>\n`;
      });
      html += `        </div>\n`;
    }
    html += `      </div>\n`;
    html += `    </div>\n`;
    html += `  </div>\n`;
  });

  if (data.cbq && data.cbq.length > 0) {
    html += `  <div class="cbq-section">\n`;
    html += `    <div class="cbq-header"><span>🎯 Competency-Based & Value-Based Questions — Unit ${chNum}</span><span class="cbq-badge">CBSE 2026-27</span></div>\n`;
    html += `    <div class="cbq-body">\n`;
    data.cbq.forEach(c => {
      html += `      <div class="cbq-card" style="border-left:4px solid ${c.color};">\n`;
      html += `        <div class="cbq-type" style="color:${c.color};">${c.type}</div>\n`;
      html += `        <div class="cbq-question"><strong>Analysis:</strong> ${c.question}</div>\n`;
      html += `        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>\n`;
      html += `        <div class="cbq-answer"><p>${c.answer}</p></div>\n`;
      html += `      </div>\n`;
    });
    html += `    </div>\n`;
    html += `  </div>\n`;
  }

  html += `  <div class="chapter-nav-btns">\n`;
  if (chNum > 1) {
    html += `    <button class="ch-nav-btn" onclick="showChapter(${chNum - 1})">← Previous Unit</button>\n`;
  } else {
    html += `    <div></div>\n`;
  }
  html += `    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>\n`;
  if (chNum < 28) {
    html += `    <button class="ch-nav-btn next" onclick="showChapter(${chNum + 1})">Next Unit →</button>\n`;
  } else {
    html += `    <div></div>\n`;
  }
  html += `  </div>\n`;
  html += `</section>\n`;

  return html;
}

const chaptersBundle = {};

for (let i = 1; i <= 28; i++) {
  const chData = ALL_CHAPTERS[i];
  if (!chData) {
    console.error(`Missing data for unit ${i}`);
    continue;
  }
  const rendered = renderChapterHTML(chData);
  chaptersBundle[String(i)] = rendered;
  const filePath = path.join(outputDir, `ch${i}.html`);
  fs.writeFileSync(filePath, rendered, 'utf8');
}

const bundleContent = `// Class 10 English Preloaded NCERT Solutions Data Bundle (All 28 Units)\nwindow.CHAPTERS_DATA = ${JSON.stringify(chaptersBundle)};\n`;
fs.writeFileSync(path.join(outputDir, 'chapters-data.js'), bundleContent, 'utf8');

console.log('Successfully generated all 28 chapter files and chapters-data.js!');
