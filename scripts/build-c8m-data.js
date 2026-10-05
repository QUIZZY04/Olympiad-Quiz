const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c8m');
const outData = {};

for (let i = 1; i <= 13; i++) {
  const filePath = path.join(dir, `ch${i}.html`);
  if (fs.existsSync(filePath)) {
    outData[i] = fs.readFileSync(filePath, 'utf8');
  } else {
    console.error(`Missing ch${i}.html`);
  }
}

const outFile = path.join(dir, 'chapters-data.js');
const jsContent = '// Class 8 Maths Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ' + JSON.stringify(outData) + ';\n';
fs.writeFileSync(outFile, jsContent, 'utf8');
console.log('Successfully generated ' + outFile + ' with ' + Object.keys(outData).length + ' chapters.');
