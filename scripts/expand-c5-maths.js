// Script to inject comprehensive Tiwari Academy aligned question coverage into Class 5 Maths solutions
const fs = require('fs');
const path = require('path');

const { mathMagicExtra } = require('./data-c5-maths/mathsExtraData.js');
const { mathsMelaExtra } = require('./data-c5-maths/mathsMelaExtraData.js');

const mathsFilePath = path.join(__dirname, '../ncert-solutions-class-5-maths.html');
let html = fs.readFileSync(mathsFilePath, 'utf8');

console.log("=== EXPANDING NCERT CLASS 5 MATHEMATICS SOLUTIONS ===");
console.log(`Original HTML file size: ${html.length} bytes`);

function renderQuestionCard(qObj, qNum, qId) {
  const rubricRows = (qObj.rubric || []).map(r => `
    <div class="marking-row"><span class="marking-key">${r.key}</span><span class="marking-marks">${r.marks}</span></div>
  `).join('');

  return `
          <div class="q-card" id="${qId}">
            <div class="q-head" onclick="toggleQ('${qId}')">
              <div class="q-num">Q${qNum}</div>
              <div class="q-text">${qObj.q}</div>
              <div class="q-marks">[${qObj.marks || 3} Marks]</div>
              <div class="q-toggle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
            </div>
            <div class="q-answer">
              <div class="answer-box">
                <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
                <div class="answer-text">
                  ${qObj.ans}
                </div>
                <div class="marking-scheme">
                  <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
                  ${rubricRows}
                </div>
              </div>
            </div>
          </div>
`;
}

// Expand Math-Magic Chapters
let magicInjected = 0;
for (const [chNum, questions] of Object.entries(mathMagicExtra)) {
  const artId = `magic-ch${chNum}`;
  const artStart = html.indexOf(`id="${artId}"`);
  if (artStart === -1) {
    console.warn(`Could not find ${artId} in HTML!`);
    continue;
  }
  const artEnd = html.indexOf('</article>', artStart);
  let artSnippet = html.substring(artStart, artEnd);

  // Count existing questions in this article
  const existingCount = (artSnippet.match(/class="q-card"/g) || []).length;

  // Render extra questions
  let extraHtml = '';
  questions.forEach((q, idx) => {
    const qNum = existingCount + idx + 1;
    const qId = `magic_ch${chNum}_q${qNum}`;
    extraHtml += renderQuestionCard(q, qNum, qId);
    magicInjected++;
  });

  // Insertion target: right before <div class="cbq-card" or end of article
  const cbqPos = artSnippet.indexOf('<div class="cbq-card"');
  if (cbqPos !== -1) {
    artSnippet = artSnippet.slice(0, cbqPos) + extraHtml + artSnippet.slice(cbqPos);
  } else {
    artSnippet += extraHtml;
  }

  html = html.substring(0, artStart) + artSnippet + html.substring(artEnd);
}

// Expand Maths Mela Chapters
let melaInjected = 0;
for (const [chNum, questions] of Object.entries(mathsMelaExtra)) {
  const artId = `mela-ch${chNum}`;
  const artStart = html.indexOf(`id="${artId}"`);
  if (artStart === -1) {
    console.warn(`Could not find ${artId} in HTML!`);
    continue;
  }
  const artEnd = html.indexOf('</article>', artStart);
  let artSnippet = html.substring(artStart, artEnd);

  // Count existing questions in this article
  const existingCount = (artSnippet.match(/class="q-card"/g) || []).length;

  // Render extra questions
  let extraHtml = '';
  questions.forEach((q, idx) => {
    const qNum = existingCount + idx + 1;
    const qId = `mela_ch${chNum}_q${qNum}`;
    extraHtml += renderQuestionCard(q, qNum, qId);
    melaInjected++;
  });

  const cbqPos = artSnippet.indexOf('<div class="cbq-card"');
  if (cbqPos !== -1) {
    artSnippet = artSnippet.slice(0, cbqPos) + extraHtml + artSnippet.slice(cbqPos);
  } else {
    artSnippet += extraHtml;
  }

  html = html.substring(0, artStart) + artSnippet + html.substring(artEnd);
}

fs.writeFileSync(mathsFilePath, html, 'utf8');
console.log(`✅ Successfully injected ${magicInjected} Math-Magic and ${melaInjected} Maths Mela questions!`);
console.log(`New HTML file size: ${html.length} bytes`);

// Verification
const totalQ = (html.match(/class="q-card"/g) || []).length;
console.log(`Total questions across all 29 Class 5 Maths chapters now: ${totalQ}`);
