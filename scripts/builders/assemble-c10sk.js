// scripts/builders/assemble-c10sk.js
// Injects literal verbatim NCERT additions into Class 10 Sanskrit (Shemushi भाग - २) chapters and updates chapters-data.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const C10SK_DIR = path.join(ROOT, 'chapters-c10sk');

const additionsModule = require('./c10sk-additions.js');
const additionsMap = additionsModule.getAdditions();

console.log('Assembling Class 10 Sanskrit (Shemushi भाग - २) chapters to 100% NCERT Verbatim Coverage...');
const chapterDataObj = {};

for (let ch = 1; ch <= 12; ch++) {
  const fPath = path.join(C10SK_DIR, `ch${ch}.html`);
  if (!fs.existsSync(fPath)) {
    console.error(`Missing file: ${fPath}`);
    continue;
  }
  let html = fs.readFileSync(fPath, 'utf8');

  const additions = additionsMap[ch];
  if (additions && additions.length > 0) {
    additions.forEach(add => {
      const match = add.match(/id="([^"]+)"/);
      if (match) {
        const qId = match[1];
        if (!html.includes(qId)) {
          const additionHtml = add + '\n\n';
          if (html.includes('<div class="cbq-section">')) {
            html = html.replace('<div class="cbq-section">', additionHtml + '  <div class="cbq-section">');
          } else if (html.includes('<div class="chapter-nav-btns">')) {
            html = html.replace('<div class="chapter-nav-btns">', additionHtml + '  <div class="chapter-nav-btns">');
          } else {
            html = html.replace('</section>', additionHtml + '</section>');
          }
          fs.writeFileSync(fPath, html, 'utf8');
        }
      }
    });
  }

  // Count questions
  const qCount = (html.match(/class="[^"]*q-card[^"]*"/g) || []).length;
  const cbqCount = (html.match(/class="[^"]*cbq-card[^"]*"/g) || []).length;
  console.log(`Ch ${ch.toString().padStart(2, ' ')}: ${qCount.toString().padStart(2, ' ')} Qs + ${cbqCount} CBQs (${html.length} bytes)`);

  chapterDataObj[ch.toString()] = html;
}

// Compile chapters-data.js
const chaptersDataJsPath = path.join(C10SK_DIR, 'chapters-data.js');
const jsContent = `// Preloaded Class 10 Sanskrit NCERT Solutions Bundle (All 12 Chapters)\n// Provides instant 0ms switching with zero latency\nwindow.PRELOADED_CHAPTERS_C10SK = ${JSON.stringify(chapterDataObj)};\n`;
fs.writeFileSync(chaptersDataJsPath, jsContent, 'utf8');
console.log(`\nSuccessfully compiled chapters-c10sk/chapters-data.js (${jsContent.length} bytes)`);
