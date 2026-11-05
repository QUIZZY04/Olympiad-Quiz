// scripts/builders/sync-cache.js
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '..', 'chapters-c11b');
const dataJsPath = path.join(outDir, 'chapters-data.js');

let output = 'window.CHAPTER_DATA = {};\n';

for (let i = 1; i <= 19; i++) {
  const filePath = path.join(outDir, `ch${i}.html`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8').trim();
    output += `\nwindow.CHAPTER_DATA[${i}] = ${JSON.stringify(content)};\n`;
    console.log(`Cached Chapter ${i} (${content.length} chars)`);
  } else {
    console.warn(`Missing ch${i}.html`);
  }
}

fs.writeFileSync(dataJsPath, output, 'utf8');
console.log(`Successfully synced all 19 chapters to ${dataJsPath} (${output.length} bytes total)`);
