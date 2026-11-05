// scripts/builders/c12c-helper.js
// Shared helper for generating Class 12 Chemistry NCERT Solutions (10 Chapters)
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '..', 'chapters-c12c');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function createQCard(id, num, exercise, qText, answerHtml, marks, rubricRows) {
  const rubricHtml = rubricRows.map(r => `
          <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('');

  return `
  <!-- ${id} (${exercise}) -->
  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">${num}</div>
      <div class="q-text">
        <span style="display:inline-block; font-size:0.75rem; font-weight:800; text-transform:uppercase; background:#ecfdf5; color:#059669; padding:2px 8px; border-radius:4px; margin-bottom:4px;">${exercise}</span><br>
        ${qText}
      </div>
      <div class="q-marks">[${marks}]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Step-by-Step Solution</div>
        <div class="answer-text">
          ${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Marking Scheme Rubric (Session 2026–27)</div>
          ${rubricHtml}
        </div>
      </div>
    </div>
  </div>`;
}

function saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, nextChTitle = '') {
  const prevBtn = chNum === 1
    ? `<a href="../ncert-solutions-class-12-chemistry.html" class="ch-nav-btn prev" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; text-decoration:none; color:#334155;">← Class 12 Chemistry Hub</a>`
    : `<button class="ch-nav-btn prev" onclick="showChapter(${chNum - 1})" style="padding:10px 24px; border-radius:8px; border:1px solid #cbd5e1; background:white; font-weight:700; cursor:pointer; color:#334155;">← Ch ${chNum - 1}</button>`;

  const nextBtn = chNum === 10
    ? `<a href="../ncert-solutions-class-12.html" class="ch-nav-btn next" style="padding:10px 24px; border-radius:8px; border:none; background:#059669; color:white; font-weight:700; text-decoration:none;">Class 12 All Subjects Hub →</a>`
    : `<button class="ch-nav-btn next" onclick="showChapter(${chNum + 1})" style="padding:10px 24px; border-radius:8px; border:none; background:#059669; color:white; font-weight:700; cursor:pointer;">Next: Ch ${chNum + 1} (${nextChTitle}) →</button>`;

  const chapterHtml = `
<section class="chapter-section" id="c12c-ch${chNum}">
  <div class="chapter-header">
    <div class="ch-badge" style="background:#059669;">${chNum}</div>
    <div class="chapter-header-info">
      <div class="ch-category" style="color:#059669;">CBSE Class 12 Chemistry &bull; Chapter ${chNum}</div>
      <h2>${chTitle}</h2>
      <p>NCERT Rationalised 2026–27 Syllabus &bull; All ${questions.length} Verbatim Questions (In-Text &amp; Exercise) with Step-by-Step Marking Rubrics</p>
    </div>
  </div>

  ${svgDiagram || ''}

  <div class="ex-div">${exTitle}</div>
${questions.join('\n')}

  <div class="chapter-nav-btns" style="margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
    ${prevBtn}
    ${nextBtn}
  </div>
</section>
`.trim();

  // 1. Write individual chapter HTML file
  const chFilePath = path.join(outDir, `ch${chNum}.html`);
  fs.writeFileSync(chFilePath, chapterHtml, 'utf8');
  console.log(`Generated: ${chFilePath} (${chapterHtml.length} bytes, ${questions.length} Qs)`);

  // 2. Append/Update chapters-data.js cache
  const dataJsPath = path.join(outDir, 'chapters-data.js');
  let existingData = '';
  if (fs.existsSync(dataJsPath)) {
    existingData = fs.readFileSync(dataJsPath, 'utf8');
  } else {
    existingData = 'window.CHAPTER_DATA = {};\n';
  }

  const chKey = `window.CHAPTER_DATA[${chNum}] =`;
  if (!existingData.includes(chKey)) {
    fs.appendFileSync(dataJsPath, `\nwindow.CHAPTER_DATA[${chNum}] = ${JSON.stringify(chapterHtml)};\n`, 'utf8');
    console.log(`Appended Chapter ${chNum} to preloaded cache: ${dataJsPath}`);
  } else {
    const regex = new RegExp(`window\\.CHAPTER_DATA\\[${chNum}\\]\\s*=\\s*[\\s\\S]*?;\\n`, 'g');
    const updated = existingData.replace(regex, `window.CHAPTER_DATA[${chNum}] = ${JSON.stringify(chapterHtml)};\n`);
    fs.writeFileSync(dataJsPath, updated, 'utf8');
    console.log(`Updated Chapter ${chNum} in preloaded cache: ${dataJsPath}`);
  }
}

module.exports = { createQCard, saveChapter };
