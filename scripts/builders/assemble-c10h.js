// scripts/builders/assemble-c10h.js
// Injects literal verbatim NCERT additions into Class 10 Hindi chapters and updates chapters-data.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const C10H_DIR = path.join(ROOT, 'chapters-c10h');

const additionsModule = require('./c10h-additions.js');
const additionsMap = additionsModule.getAdditions();

console.log('Assembling Class 10 Hindi chapters to 100% NCERT Verbatim Coverage...');
const chapterDataObj = {};

for (let ch = 1; ch <= 32; ch++) {
  const fPath = path.join(C10H_DIR, `ch${ch}.html`);
  if (!fs.existsSync(fPath)) {
    console.error(`Missing file: ${fPath}`);
    continue;
  }
  let html = fs.readFileSync(fPath, 'utf8');

  const addition = additionsMap[ch];
  if (addition) {
    const match = addition.match(/id="([^"]+)"/);
    if (match) {
      const qId = match[1];
      if (!html.includes(qId)) {
        const additionHtml = addition + '\n\n';
        if (html.includes('<div class="cbq-section">')) {
          html = html.replace('<div class="cbq-section">', additionHtml + '  <div class="cbq-section">');
        } else if (html.includes('<div class="chapter-nav-btns">')) {
          html = html.replace('<div class="chapter-nav-btns">', additionHtml + '  <div class="chapter-nav-btns">');
        } else {
          // append before closing </section>
          html = html.replace('</section>', additionHtml + '</section>');
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
const chaptersDataJsPath = path.join(C10H_DIR, 'chapters-data.js');
const jsContent = `// Class 10 Hindi Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapterDataObj)};\n`;
fs.writeFileSync(chaptersDataJsPath, jsContent, 'utf8');
console.log(`\nSuccessfully compiled chapters-c10h/chapters-data.js (${jsContent.length} bytes)`);
