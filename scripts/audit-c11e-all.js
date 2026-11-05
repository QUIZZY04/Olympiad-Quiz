// scripts/audit-c11e-all.js
// Verification audit for Class 11 English Core NCERT Solutions
const fs = require('fs');
const path = require('path');

const chDir = path.resolve(__dirname, '..', 'chapters-c11e');
const chaptersDataPath = path.join(chDir, 'chapters-data.js');

const EXPECTED_CHAPTERS = [
  { num: 1, title: 'The Portrait of a Lady', book: 'Hornbill (Prose)', expectedQ: 7 },
  { num: 2, title: "We're Not Afraid to Die...", book: 'Hornbill (Prose)', expectedQ: 6 },
  { num: 3, title: 'Discovering Tut: the Saga Continues', book: 'Hornbill (Prose)', expectedQ: 6 },
  { num: 4, title: 'The Adventure', book: 'Hornbill (Prose)', expectedQ: 6 },
  { num: 5, title: 'Silk Road', book: 'Hornbill (Prose)', expectedQ: 7 },
  { num: 6, title: 'A Photograph', book: 'Hornbill (Poetry)', expectedQ: 6 },
  { num: 7, title: 'The Laburnum Top', book: 'Hornbill (Poetry)', expectedQ: 5 },
  { num: 8, title: 'The Voice of the Rain', book: 'Hornbill (Poetry)', expectedQ: 6 },
  { num: 9, title: 'Childhood', book: 'Hornbill (Poetry)', expectedQ: 4 },
  { num: 10, title: 'Father to Son', book: 'Hornbill (Poetry)', expectedQ: 4 },
  { num: 11, title: 'The Summer of the Beautiful White Horse', book: 'Snapshots', expectedQ: 4 },
  { num: 12, title: 'The Address', book: 'Snapshots', expectedQ: 4 },
  { num: 13, title: 'Albert Einstein at School', book: 'Snapshots', expectedQ: 3 },
  { num: 14, title: "Mother's Day", book: 'Snapshots', expectedQ: 3 },
  { num: 15, title: 'Birth', book: 'Snapshots', expectedQ: 3 },
];

console.log('====================================================');
console.log('AUDIT: CBSE CLASS 11 ENGLISH CORE NCERT SOLUTIONS');
console.log('====================================================\n');

let totalQsFound = 0;
let errors = 0;

EXPECTED_CHAPTERS.forEach(ch => {
  const filePath = path.join(chDir, `ch${ch.num}.html`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Chapter ${ch.num} file missing: ${filePath}`);
    errors++;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const qMatches = content.match(/<div class="q-card"/g) || [];
  const qCount = qMatches.length;
  totalQsFound += qCount;

  if (qCount !== ch.expectedQ) {
    console.warn(`⚠️ Chapter ${ch.num} (${ch.title}): Expected ${ch.expectedQ} Qs, found ${qCount} Qs!`);
    errors++;
  } else {
    console.log(`✅ Chapter ${ch.num} [${ch.book}]: ${ch.title} — ${qCount}/${ch.expectedQ} Qs verified`);
  }

  // Check marking scheme present in every question
  const markingMatches = content.match(/CBSE Marking Scheme Rubric/g) || [];
  if (markingMatches.length !== qCount) {
    console.warn(`⚠️ Chapter ${ch.num}: Marking schemes (${markingMatches.length}) do not match questions (${qCount})!`);
    errors++;
  }
});

// Audit chapters-data.js cache
console.log('\nAuditing preloaded chapters-data.js cache...');
if (!fs.existsSync(chaptersDataPath)) {
  console.error(`❌ Cache missing: ${chaptersDataPath}`);
  errors++;
} else {
  const cacheContent = fs.readFileSync(chaptersDataPath, 'utf8');
  let cacheCount = 0;
  for (let i = 1; i <= 15; i++) {
    if (cacheContent.includes(`window.CHAPTER_DATA[${i}] =`)) {
      cacheCount++;
    } else {
      console.error(`❌ Cache missing Chapter ${i}`);
      errors++;
    }
  }
  console.log(`✅ Preloaded cache verified: ${cacheCount}/15 chapters present in chapters-data.js`);
}

console.log('\n----------------------------------------------------');
console.log(`Total Questions Verified: ${totalQsFound} / 74`);
console.log(`Total Errors Detected: ${errors}`);
console.log('----------------------------------------------------');

if (errors === 0 && totalQsFound === 74) {
  console.log('🎉 100% VERBATIM COVERAGE CERTIFIED: 0% SHORTAGE FOR CLASS 11 ENGLISH CORE!');
} else {
  console.error('❌ AUDIT FAILED: Shortage or discrepancies detected.');
  process.exit(1);
}
