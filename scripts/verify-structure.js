const fs = require('fs');
const path = require('path');

const hubHtml = fs.readFileSync('ncert-solutions-class-6-science.html', 'utf8');

// Extract the CHAPTER_DATA JSON
const match = hubHtml.match(/window\.CHAPTER_DATA\s*=\s*(\{[\s\S]*?\});\s*\n/);
if (!match) {
  console.error('ERROR: window.CHAPTER_DATA not found in hub HTML!');
  process.exit(1);
}

const chapterData = JSON.parse(match[1]);

console.log('Hub file size (bytes):', hubHtml.length);
console.log('Preloaded chapters in CHAPTER_DATA:', Object.keys(chapterData).length);

let totalQ = 0;
let totalMarks = 0;
let totalSvg = 0;
let totalCbq = 0;

for (let ch = 1; ch <= 12; ch++) {
  const content = chapterData[ch];
  if (!content) {
    console.error(`Missing chapter ${ch} in CHAPTER_DATA!`);
    continue;
  }
  const qMatches = content.match(/class="q-card"/g) || [];
  const svgMatches = content.match(/<svg/g) || [];
  const cbqMatches = content.match(/class="cbq-card"/g) || [];
  const markMatches = content.match(/class="marking-scheme"/g) || [];

  totalQ += qMatches.length;
  totalMarks += markMatches.length;
  totalSvg += svgMatches.length;
  totalCbq += cbqMatches.length;

  console.log(`Ch ${ch.toString().padStart(2)}: ${qMatches.length.toString().padStart(2)} Questions | ${markMatches.length.toString().padStart(2)} Marking Schemes | ${svgMatches.length.toString().padStart(2)} SVGs | ${cbqMatches.length} CBQ`);
}

console.log('----------------------------------------------------');
console.log(`TOTALS: ${totalQ} Exercise Questions | ${totalMarks} Marking Schemes | ${totalSvg} SVGs | ${totalCbq} CBQs`);
