// scripts/builders/assemble-c10m.js
// Injects literal verbatim NCERT additions into Class 10 Maths chapters and updates chapters-data.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const C10M_DIR = path.join(ROOT, 'chapters-c10m');

const p1 = require('./c10m-part1.js');
const p2 = require('./c10m-part2.js');
const p3 = require('./c10m-part3.js');
const p4 = require('./c10m-part4.js');
const p5 = require('./c10m-part5.js');

const additionsMap = {
  2: [p3.getChapter2Additions()],
  3: [p1.getChapter3Additions(), p3.getChapter3ExtraAdditions()],
  4: [p1.getChapter4Additions(), p3.getChapter4ExtraAdditions()],
  5: [p1.getChapter5Additions(), p3.getChapter5ExtraAdditions()],
  6: [p2.getChapter6Additions(), p4.getChapter6ExtraAdditions()],
  7: [p2.getChapter7Additions(), p4.getChapter7ExtraAdditions()],
  8: [p2.getChapter8Additions(), p4.getChapter8ExtraAdditions()],
  9: [p2.getChapter9Additions()],
  10: [p2.getChapter10Additions(), p4.getChapter10ExtraAdditions()],
  11: [p2.getChapter11Additions(), p4.getChapter11ExtraAdditions()],
  12: [p2.getChapter12Additions(), p5.getChapter12ExtraAdditions()],
  13: [p2.getChapter13Additions(), p5.getChapter13ExtraAdditions()],
  14: [p2.getChapter14Additions(), p5.getChapter14ExtraAdditions()]
};

console.log('Assembling Class 10 Mathematics chapters to 100% NCERT Verbatim Coverage...');
const chapterDataObj = {};

for (let ch = 1; ch <= 14; ch++) {
  const fPath = path.join(C10M_DIR, `ch${ch}.html`);
  let html = fs.readFileSync(fPath, 'utf8');

  const additionsList = additionsMap[ch] || [];
  for (const additions of additionsList) {
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
  }

  // Count questions
  const qCount = (html.match(/class="[^"]*q-card[^"]*"/g) || []).length;
  const cbqCount = (html.match(/class="[^"]*cbq-card[^"]*"/g) || []).length;
  console.log(`Ch ${ch.toString().padStart(2, ' ')}: ${qCount.toString().padStart(2, ' ')} Qs + ${cbqCount} CBQs (${html.length} bytes)`);

  chapterDataObj[ch.toString()] = html;
}

// Compile chapters-data.js
const chaptersDataJsPath = path.join(C10M_DIR, 'chapters-data.js');
const jsContent = `// Class 10 Mathematics Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapterDataObj, null, 2)};\n`;
fs.writeFileSync(chaptersDataJsPath, jsContent, 'utf8');
console.log(`\nSuccessfully compiled chapters-c10m/chapters-data.js (${jsContent.length} bytes)`);
