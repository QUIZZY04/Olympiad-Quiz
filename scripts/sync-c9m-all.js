const fs = require('fs');
const path = require('path');

console.log('Synchronizing Class 9 chapters data and main landing page...');

// 1. Sync chapters-data.js
const chapters = {};
for (let i = 1; i <= 14; i++) {
  const filePath = path.join('chapters-c9m', `ch${i}.html`);
  const content = fs.readFileSync(filePath, 'utf8');
  chapters[String(i)] = content;
}

const jsDataContent = `// Class 9 Maths (Ganit Manzari) Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapters, null, 2)};\n`;
fs.writeFileSync(path.join('chapters-c9m', 'chapters-data.js'), jsDataContent, 'utf8');
console.log('Updated chapters-c9m/chapters-data.js');

// 2. Sync ncert-solutions-class-9-maths.html
let mainHtml = fs.readFileSync('ncert-solutions-class-9-maths.html', 'utf8');

for (let i = 1; i <= 14; i++) {
  const isCh1 = (i === 1);
  const startPattern = isCh1 ? '<section class="chapter-section" id="ch1">' : `<section class="chapter-section hidden" id="ch${i}">`;
  const startIndex = mainHtml.indexOf(startPattern);
  if (startIndex === -1) {
    console.error(`ERROR: Could not find start of section ${i} in mainHtml!`);
    process.exit(1);
  }

  // Find end of this section
  let nextStartIndex;
  if (i < 14) {
    nextStartIndex = mainHtml.indexOf(`<section class="chapter-section hidden" id="ch${i+1}">`, startIndex + startPattern.length);
  } else {
    nextStartIndex = mainHtml.indexOf('</section>', startIndex) + '</section>'.length;
  }

  if (nextStartIndex === -1) {
    console.error(`ERROR: Could not find end of section ${i} in mainHtml!`);
    process.exit(1);
  }

  let newSectionContent = chapters[String(i)];
  if (!isCh1) {
    // Add "hidden" class to section tag for pre-rendered sections 2..14
    newSectionContent = newSectionContent.replace(
      `<section class="chapter-section" id="ch${i}">`,
      `<section class="chapter-section hidden" id="ch${i}">`
    );
  }

  mainHtml = mainHtml.substring(0, startIndex) +
    newSectionContent +
    '\n' +
    mainHtml.substring(nextStartIndex);
}

fs.writeFileSync('ncert-solutions-class-9-maths.html', mainHtml, 'utf8');
console.log('Updated ncert-solutions-class-9-maths.html with all 14 updated chapters in DOM!');
