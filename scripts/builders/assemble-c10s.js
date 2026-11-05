// scripts/builders/assemble-c10s.js
// Assembles all 13 Class 10 Science Chapters with 100% Verbatim Physical NCERT Questions & CBSE Marking Schemes
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const C10S_DIR = path.join(ROOT, 'chapters-c10s');

const p1 = require('./c10s-part1.js');
const p2 = require('./c10s-part2.js');
const p3 = require('./c10s-part3.js');

const chapters = [
  { num: 1, getHtml: p1.getChapter1Html },
  { num: 2, getHtml: p1.getChapter2Html },
  { num: 3, getHtml: p1.getChapter3Html },
  { num: 4, getHtml: p1.getChapter4Html },
  { num: 5, getHtml: p2.getChapter5Html },
  { num: 6, getHtml: p2.getChapter6Html },
  { num: 7, getHtml: p2.getChapter7Html },
  { num: 8, getHtml: p2.getChapter8Html },
  { num: 9, getHtml: p3.getChapter9Html },
  { num: 10, getHtml: p3.getChapter10Html },
  { num: 11, getHtml: p3.getChapter11Html },
  { num: 12, getHtml: p3.getChapter12Html },
  { num: 13, getHtml: p3.getChapter13Html }
];

console.log('Writing Class 10 Science chapter files...');
const chapterDataObj = {};

chapters.forEach(({ num, getHtml }) => {
  const html = getHtml();
  const filePath = path.join(C10S_DIR, `ch${num}.html`);
  fs.writeFileSync(filePath, html, 'utf8');

  // Count questions
  const qCount = (html.match(/class="[^"]*q-card[^"]*"/g) || []).length;
  const cbqCount = (html.match(/class="[^"]*cbq-card[^"]*"/g) || []).length;
  console.log(`Ch ${num}: ${qCount} Qs + ${cbqCount} CBQ written to ${path.basename(filePath)} (${html.length} bytes)`);

  chapterDataObj[num.toString()] = html;
});

// Compile chapters-data.js
const chaptersDataJsPath = path.join(C10S_DIR, 'chapters-data.js');
const jsContent = `// Class 10 Science Preloaded Chapter Data for offline/file:// protocol fallback\nwindow.CHAPTER_DATA = ${JSON.stringify(chapterDataObj, null, 2)};\n`;
fs.writeFileSync(chaptersDataJsPath, jsContent, 'utf8');
console.log(`\nSuccessfully compiled chapters-data.js (${jsContent.length} bytes)`);
