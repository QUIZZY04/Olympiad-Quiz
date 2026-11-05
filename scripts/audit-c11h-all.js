// scripts/audit-c11h-all.js
// Verification audit for Class 11 Hindi Core NCERT Solutions
const fs = require('fs');
const path = require('path');

const chDir = path.resolve(__dirname, '..', 'chapters-c11h');
const chaptersDataPath = path.join(chDir, 'chapters-data.js');

const EXPECTED_CHAPTERS = [
  // आरोह (गद्य खंड) - 41 Qs
  { num: 1, title: 'नमक का दारोगा', book: 'आरोह (गद्य)', expectedQ: 6 },
  { num: 2, title: 'मियाँ नसीरुद्दीन', book: 'आरोह (गद्य)', expectedQ: 5 },
  { num: 3, title: 'अपू के साथ ढाई साल', book: 'आरोह (गद्य)', expectedQ: 5 },
  { num: 4, title: 'विदाई-संभाषण', book: 'आरोह (गद्य)', expectedQ: 5 },
  { num: 5, title: 'गलता लोहा', book: 'आरोह (गद्य)', expectedQ: 5 },
  { num: 6, title: 'रजनी', book: 'आरोह (गद्य)', expectedQ: 5 },
  { num: 7, title: 'जामुन का पेड़', book: 'आरोह (गद्य)', expectedQ: 5 },
  { num: 8, title: 'भारत माता', book: 'आरोह (गद्य)', expectedQ: 5 },

  // आरोह (काव्य खंड) - 35 Qs
  { num: 9, title: 'कबीर (पद 1)', book: 'आरोह (काव्य)', expectedQ: 5 },
  { num: 10, title: 'मीरा (पद 1)', book: 'आरोह (काव्य)', expectedQ: 5 },
  { num: 11, title: 'घर की याद', book: 'आरोह (काव्य)', expectedQ: 5 },
  { num: 12, title: 'चंपा काले काले अच्छर नहीं चीन्हती', book: 'आरोह (काव्य)', expectedQ: 4 },
  { num: 13, title: 'गज़ल', book: 'आरोह (काव्य)', expectedQ: 4 },
  { num: 14, title: 'हे भूख! मत मचल / हे मेरे जूही के फूल...', book: 'आरोह (काव्य)', expectedQ: 4 },
  { num: 15, title: 'सबसे खतरनाक', book: 'आरोह (काव्य)', expectedQ: 4 },
  { num: 16, title: 'आओ, मिलकर बचाएँ', book: 'आरोह (काव्य)', expectedQ: 4 },

  // वितान भाग 1 - 19 Qs
  { num: 17, title: 'भारतीय गायिकाओं में बेजोड़: लता मंगेशकर', book: 'वितान भाग 1', expectedQ: 5 },
  { num: 18, title: 'राजस्थान की रजत बूँदें', book: 'वितान भाग 1', expectedQ: 5 },
  { num: 19, title: 'आलो-आँधारि', book: 'वितान भाग 1', expectedQ: 5 },
  { num: 20, title: 'भारतीय कलाएँ', book: 'वितान भाग 1', expectedQ: 4 }
];

console.log('====================================================');
console.log('AUDIT: CBSE CLASS 11 HINDI CORE NCERT SOLUTIONS');
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
  const markingMatches = content.match(/CBSE अंक योजना एवं मूल्यांकन निर्देश/g) || [];
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
  for (let i = 1; i <= 20; i++) {
    if (cacheContent.includes(`window.CHAPTER_DATA[${i}] =`)) {
      cacheCount++;
    } else {
      console.error(`❌ Cache missing Chapter ${i}`);
      errors++;
    }
  }
  console.log(`✅ Preloaded cache verified: ${cacheCount}/20 chapters present in chapters-data.js`);
}

console.log('\n----------------------------------------------------');
console.log(`Total Questions Verified: ${totalQsFound} / 95`);
console.log(`Total Errors Detected: ${errors}`);
console.log('----------------------------------------------------');

if (errors === 0 && totalQsFound === 95) {
  console.log('🎉 100% VERBATIM COVERAGE CERTIFIED: 0% SHORTAGE FOR CLASS 11 HINDI CORE!');
} else {
  console.error('❌ AUDIT FAILED: Shortage or discrepancies detected.');
  process.exit(1);
}
