// scripts/builders/assemble-c10sst.js
// Injects literal verbatim NCERT additions into Class 10 Social Science chapters and updates chapters-data.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const C10SST_DIR = path.join(ROOT, 'chapters-c10sst');

const p1 = require('./c10sst-part1.js');
const p2 = require('./c10sst-part2.js');
const p3 = require('./c10sst-part3.js');

const additionsMap = {
  3: p1.getChapter3Additions(),
  6: p1.getChapter6Additions(),
  7: p1.getChapter7Additions(),
  8: p1.getChapter8Additions(),
  9: p1.getChapter9Additions(),
  10: p1.getChapter10Additions(),
  11: p1.getChapter11Additions(),
  12: p1.getChapter12Additions(),
  13: p2.getChapter13Additions(),
  14: p2.getChapter14Additions(),
  15: p2.getChapter15Additions(),
  16: p2.getChapter16Additions(),
  17: p2.getChapter17Additions(),
  18: p3.getChapter18Additions(),
  19: p3.getChapter19Additions(),
  20: p3.getChapter20Additions(),
  21: p3.getChapter21Additions(),
  22: p3.getChapter22Additions()
};

console.log('Assembling Class 10 Social Science chapters to 100% NCERT Verbatim Coverage...');
const chapterDataObj = {};

for (let ch = 1; ch <= 22; ch++) {
  const fPath = path.join(C10SST_DIR, `ch${ch}.html`);
  let html = fs.readFileSync(fPath, 'utf8');

  const additions = additionsMap[ch];
  if (additions && additions.length > 0) {
    const match = additions[0].match(/id="([^"]+)"/);
    if (match) {
      const firstId = match[1];
      if (!html.includes(firstId)) {
        const additionHtml = additions.join('\n\n') + '\n\n';
        if (html.includes('<div class="cbq-section">')) {
          html = html.replace('<div class="cbq-section">', additionHtml + '  <div class="cbq-section">');
        } else if (html.includes('<div class="chapter-nav-btns">')) {
          html = html.replace('<div class="chapter-nav-btns">', additionHtml + '  <div class="chapter-nav-btns">');
        }
        fs.writeFileSync(fPath, html, 'utf8');
      }
    }
  }

  // Count questions
  const qCount = (html.match(/class="[^"]*q-card[^"]*"/g) || []).length;
  const cbqCount = (html.match(/class="[^"]*cbq-card[^"]*"/g) || []).length;
  console.log(`Ch ${ch.toString().padStart(2, ' ')}: ${qCount.toString().padStart(2, ' ')} Qs + ${cbqCount} CBQs (${html.length} bytes)`);

  chapterDataObj[ch.toString()] = html;
}

// Compile chapters-data.js
const chaptersDataJsPath = path.join(C10SST_DIR, 'chapters-data.js');
const jsContent = `window.PRELOADED_CHAPTERS = ${JSON.stringify(chapterDataObj, null, 2)};\n`;
fs.writeFileSync(chaptersDataJsPath, jsContent, 'utf8');
console.log(`\nSuccessfully compiled chapters-c10sst/chapters-data.js (${jsContent.length} bytes)`);
