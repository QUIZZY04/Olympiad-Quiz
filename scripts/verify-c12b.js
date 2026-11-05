// scripts/verify-c12b.js
const fs = require('fs');
const path = require('path');
const outDir = path.resolve(__dirname, '..', 'chapters-c12b');

let totalQs = 0;
for (let i = 1; i <= 13; i++) {
  const file = path.join(outDir, `ch${i}.html`);
  if (!fs.existsSync(file)) {
    console.error(`Missing ch${i}.html`);
  } else {
    const content = fs.readFileSync(file, 'utf8');
    const qCount = (content.match(/class="q-card"/g) || []).length;
    totalQs += qCount;
    console.log(`Chapter ${i}: ${qCount} Qs, size: ${fs.statSync(file).size} bytes`);
  }
}
console.log('Total Biology Questions:', totalQs);

const dataJs = path.join(outDir, 'chapters-data.js');
const cacheContent = fs.readFileSync(dataJs, 'utf8');
let cachedChapters = 0;
for (let i = 1; i <= 13; i++) {
  if (cacheContent.includes(`window.CHAPTER_DATA[${i}] =`)) {
    cachedChapters++;
  } else {
    console.error(`Missing cache for Ch ${i}`);
  }
}
console.log(`Cached Chapters in chapters-data.js: ${cachedChapters} / 13`);
console.log(`chapters-data.js size: ${fs.statSync(dataJs).size} bytes`);
