// scripts/builders/c12m-helper.js
// Shared helper for generating Class 12 Mathematics NCERT Solutions (13 Chapters)
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '..', 'chapters-c12m');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function createQCard(id, num, exercise, qText, answerHtml, marks, rubricRows) {
  const rubricHtml = rubricRows.map(r => `
          <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('');

  return `
  <!-- ${id} (${exercise}) -->
  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num" style="background:#4f46e5;">${num}</div>
      <div class="q-text">
        <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#eef2ff; color:#4f46e5; padding:2px 8px; border-radius:4px; margin-bottom:4px;">${exercise}</span><br>
        ${qText}
      </div>
      <div class="q-marks" style="color:#4f46e5; background:#eef2ff; border-color:#c7d2fe;">[${marks}]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box" style="border-left-color:#4f46e5;">
        <div class="answer-label" style="color:#4f46e5;">✅ CBSE Step-by-Step Mathematical Solution</div>
        <div class="answer-text">
          ${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title" style="color:#4f46e5;">CBSE Marking Scheme Rubric (Session 2026–27)</div>
          ${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

function saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, nextChTitle = '') {
  const prevBtn = chNum === 1
    ? `<a href="../ncert-solutions-class-12-maths.html" class="ch-nav-btn prev" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; text-decoration:none; color:#334155;">← Class 12 Maths Hub</a>`
    : `<button class="ch-nav-btn prev" onclick="showChapter(${chNum - 1})" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer; color:#334155;">← Ch ${chNum - 1}</button>`;

  const nextBtn = chNum === 13
    ? `<a href="../ncert-solutions-class-12.html" class="ch-nav-btn next" style="padding:10px 24px; border-radius:8px; border:none; background:#4f46e5; color:white; font-weight:700; text-decoration:none;">Class 12 All Subjects Hub →</a>`
    : `<button class="ch-nav-btn next" onclick="showChapter(${chNum + 1})" style="padding:10px 24px; border-radius:8px; border:none; background:#4f46e5; color:white; font-weight:700; cursor:pointer;">Next: Ch ${chNum + 1} (${nextChTitle}) →</button>`;

  const chapterHtml = `
<section class="chapter-section" id="c12m-ch${chNum}">
  <div class="chapter-header">
    <div class="ch-badge" style="background:#4f46e5;">${chNum}</div>
    <div class="chapter-header-info">
      <div class="ch-category" style="color:#4f46e5;">CBSE Class 12 Mathematics &bull; Chapter ${chNum}</div>
      <h2>${chTitle}</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All ${questions.length} Verbatim Questions with Official CBSE Marking Rubrics</p>
    </div>
  </div>

  ${svgDiagram || ''}

  <div class="ex-div" style="font-size:0.88rem; font-weight:700; color:#334155; margin-bottom:16px; padding:8px 14px; background:#eef2ff; border-radius:8px; border-left:4px solid #4f46e5;">${exTitle}</div>

  <div class="questions-container">
    ${questions.join('\n')}
  </div>

  <div class="chapter-nav-btns" style="display:flex; justify-content:space-between; align-items:center; margin-top:36px; padding-top:20px; border-top:1px solid #e2e8f0;">
    ${prevBtn}
    ${nextBtn}
  </div>
</section>
`;

  // Write standalone ch{N}.html
  const chFile = path.join(outDir, `ch${chNum}.html`);
  fs.writeFileSync(chFile, chapterHtml.trim(), 'utf8');
  console.log(`Generated: ${chFile} (${chapterHtml.length} bytes, ${questions.length} Qs)`);

  // Append to chapters-data.js cache
  appendToPreloadedCache(chNum, chapterHtml.trim());
}

function appendToPreloadedCache(chNum, chapterHtml) {
  const dataJsPath = path.join(outDir, 'chapters-data.js');
  let content = '';
  if (fs.existsSync(dataJsPath)) {
    content = fs.readFileSync(dataJsPath, 'utf8');
  } else {
    content = 'if (!window.CHAPTER_DATA) window.CHAPTER_DATA = {};\n';
  }

  const regex = new RegExp(`window\\.CHAPTER_DATA\\[${chNum}\\]\\s*=\\s*[\\s\\S]*?;\\n`, 'g');
  const entry = `window.CHAPTER_DATA[${chNum}] = ${JSON.stringify(chapterHtml)};\n`;

  if (regex.test(content)) {
    content = content.replace(regex, entry);
  } else {
    content += entry;
  }

  fs.writeFileSync(dataJsPath, content, 'utf8');
  console.log(`Appended Chapter ${chNum} to preloaded cache: ${dataJsPath}`);
}

module.exports = {
  createQCard,
  saveChapter,
  appendToPreloadedCache
};
