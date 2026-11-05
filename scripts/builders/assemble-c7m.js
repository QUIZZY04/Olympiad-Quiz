// scripts/builders/assemble-c7m.js
// Assembles all verbatim physical NCERT additions into Class 7 Mathematics chapters
// and compiles chapters-data.js

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const C7M_DIR = path.join(ROOT, 'chapters-c7m');

const p1 = require('./c7m-additions-part1.js').getAdditions();
const p2 = require('./c7m-additions-part2.js').getAdditions();
const p3 = require('./c7m-additions-part3.js').getAdditions();
const p4 = require('./c7m-additions-part4.js').getAdditions();
const p5 = require('./c7m-additions-part5.js').getAdditions();
const p6 = require('./c7m-additions-part6.js').getAdditions();
const p7 = require('./c7m-additions-part7.js').getAdditions();
const pDef = require('./c7m-final-deficit.js').getAdditions();

const parts = [p1, p2, p3, p4, p5, p6, p7, pDef];

console.log('Assembling Class 7 Mathematics chapters with 100% Verbatim NCERT coverage...');

for (let ch = 1; ch <= 13; ch++) {
  const fPath = path.join(C7M_DIR, `ch${ch}.html`);
  if (!fs.existsSync(fPath)) {
    console.error(`Chapter file not found: ${fPath}`);
    continue;
  }
  let html = fs.readFileSync(fPath, 'utf8');

  // Collect all additions for this chapter across all parts
  const chapterAdditions = [];
  for (const part of parts) {
    if (part[ch] && Array.isArray(part[ch])) {
      for (const card of part[ch]) {
        // Extract card ID to prevent duplicate insertions
        const idMatch = card.match(/id="([^"]+)"/);
        if (idMatch) {
          const cardId = idMatch[1];
          if (!html.includes(`id="${cardId}"`)) {
            chapterAdditions.push(card);
          }
        }
      }
    }
  }

  if (chapterAdditions.length > 0) {
    const additionHtml = chapterAdditions.join('\n\n') + '\n\n';
    if (html.includes('<!-- CBQ SECTION -->')) {
      html = html.replace('<!-- CBQ SECTION -->', additionHtml + '  <!-- CBQ SECTION -->');
    } else if (html.includes('<div class="cbq-section">')) {
      html = html.replace('<div class="cbq-section">', additionHtml + '  <div class="cbq-section">');
    } else if (html.includes('<div class="ch-nav-btns">')) {
      html = html.replace('<div class="ch-nav-btns">', additionHtml + '  <div class="ch-nav-btns">');
    } else if (html.includes('</section>')) {
      html = html.replace('</section>', additionHtml + '</section>');
    }
    fs.writeFileSync(fPath, html, 'utf8');
  }

  const qCount = (html.match(/class="[^"]*q-card[^"]*"/g) || []).length;
  console.log(`Ch ${ch.toString().padStart(2, ' ')}: ${qCount} Qs (added ${chapterAdditions.length})`);
}

// Regenerate chapters-data.js
console.log('\nRegenerating chapters-c7m/chapters-data.js...');
const outData = {};
for (let i = 1; i <= 13; i++) {
  const filePath = path.join(C7M_DIR, `ch${i}.html`);
  if (fs.existsSync(filePath)) {
    outData[i] = fs.readFileSync(filePath, 'utf8');
  }
}

const outFile = path.join(C7M_DIR, 'chapters-data.js');
const jsContent = '// Class 7 Maths Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ' + JSON.stringify(outData) + ';\n';
fs.writeFileSync(outFile, jsContent, 'utf8');
console.log('Successfully generated ' + outFile + ' with ' + Object.keys(outData).length + ' chapters.');
