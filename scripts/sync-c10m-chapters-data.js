const fs = require('fs');
const path = require('path');

const chapters = {};
for (let i = 1; i <= 14; i++) {
  const filePath = path.join('chapters-c10m', `ch${i}.html`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing ${filePath}!`);
    process.exit(1);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  chapters[String(i)] = content;
}

const jsContent = `// Class 10 Mathematics Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapters, null, 2)};\n`;
fs.writeFileSync(path.join('chapters-c10m', 'chapters-data.js'), jsContent, 'utf8');
console.log('Successfully synchronized chapters-c10m/chapters-data.js with all 14 updated chapter files!');
