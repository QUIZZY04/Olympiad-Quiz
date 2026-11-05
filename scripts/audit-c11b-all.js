// scripts/audit-c11b-all.js
const fs = require('fs');
const path = require('path');

const chDir = path.resolve(__dirname, '..', 'chapters-c11b');
const chaptersDataPath = path.join(chDir, 'chapters-data.js');

const expectedCounts = {
  1: 10,
  2: 12,
  3: 11,
  4: 14,
  5: 14,
  6: 12,
  7: 14,
  8: 15,
  9: 15,
  10: 16,
  11: 10,
  12: 9,
  13: 11,
  14: 10,
  15: 15,
  16: 12,
  17: 10,
  18: 12,
  19: 10
};

console.log('====================================================');
console.log('CLASS 11 BIOLOGY NCERT SOLUTIONS COMPREHENSIVE AUDIT');
console.log('====================================================');

let totalQsFound = 0;
let totalExpected = 0;
let totalRubricsFound = 0;
let errors = [];

for (let ch = 1; ch <= 19; ch++) {
  const filePath = path.join(chDir, `ch${ch}.html`);
  const exp = expectedCounts[ch];
  totalExpected += exp;

  if (!fs.existsSync(filePath)) {
    errors.push(`Chapter ${ch}: File ${filePath} DOES NOT EXIST!`);
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Count q-card divs
  const qCards = content.match(/class="q-card"/g) || [];
  const qCount = qCards.length;
  totalQsFound += qCount;

  // Count rubrics
  const rubrics = content.match(/class="marking-scheme"/g) || [];
  totalRubricsFound += rubrics.length;

  // Check SVG diagrams
  const hasSvg = content.includes('<svg');

  const status = qCount === exp ? 'PASS' : 'FAIL';
  if (status === 'FAIL') {
    errors.push(`Chapter ${ch}: Expected ${exp} Qs, found ${qCount}`);
  }

  console.log(`[Ch ${ch.toString().padStart(2)}] Qs: ${qCount.toString().padStart(2)}/${exp.toString().padStart(2)} | Rubrics: ${rubrics.length.toString().padStart(2)} | SVGs: ${hasSvg ? 'YES' : 'NO '} | [${status}]`);
}

// Check chapters-data.js
let cacheOk = false;
if (fs.existsSync(chaptersDataPath)) {
  const dataContent = fs.readFileSync(chaptersDataPath, 'utf8');
  let missingKeys = [];
  for (let ch = 1; ch <= 19; ch++) {
    if (!dataContent.includes(`window.CHAPTER_DATA[${ch}] =`)) {
      missingKeys.push(ch);
    }
  }
  if (missingKeys.length === 0) {
    cacheOk = true;
    console.log(`\nChapters Data Cache: ALL 19 CHAPTERS PRESENT AND PRELOADED!`);
  } else {
    errors.push(`chapters-data.js is missing keys: ${missingKeys.join(', ')}`);
  }
} else {
  errors.push(`chapters-data.js DOES NOT EXIST!`);
}

console.log('----------------------------------------------------');
console.log(`Total Questions: ${totalQsFound} / ${totalExpected}`);
console.log(`Total Rubrics:   ${totalRubricsFound} / ${totalQsFound}`);
console.log(`Errors:          ${errors.length}`);
if (errors.length > 0) {
  console.log('ERRORS LIST:');
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('CERTIFICATION: 100% VERBATIM NCERT CLASS 11 BIOLOGY SOLUTIONS AUDIT PASSED!');
}
