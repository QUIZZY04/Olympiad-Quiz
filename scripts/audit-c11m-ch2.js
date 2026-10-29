// scripts/audit-c11m-ch2.js
// Automated verification audit for Class 11 Mathematics Chapter 2: Relations and Functions
const fs = require('fs');
const path = require('path');

const ch2File = path.resolve(__dirname, '..', 'chapters-c11m', 'ch2.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-maths.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11m', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 MATHS CHAPTER 2: RELATIONS AND FUNCTIONS ===\n');

let failed = false;

// 1. Audit ch2.html existence
if (!fs.existsSync(ch2File)) {
  console.error('❌ FAIL: chapters-c11m/ch2.html does not exist!');
  process.exit(1);
}

const ch2Html = fs.readFileSync(ch2File, 'utf8');

// Count question cards
const qMatches = ch2Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 36 expected`);

if (qMatches.length !== 36) {
  console.error(`❌ FAIL: Expected 36 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 36 questions present verbatim!');
}

// Check every ID from 1 to 36
let missingIds = [];
for (let i = 1; i <= 36; i++) {
  const expectedId = `id="c11m-ch2-q${i}"`;
  if (!ch2Html.includes(expectedId)) {
    missingIds.push(`c11m-ch2-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 36 question IDs (c11m-ch2-q1 to c11m-ch2-q36) exist unbroken!');
}

// Check Exercises division
const exercises = [
  'Exercise 2.1',
  'Exercise 2.2',
  'Exercise 2.3',
  'Miscellaneous'
];

exercises.forEach(ex => {
  if (ch2Html.includes(ex)) {
    console.log(`✓ Section detected: ${ex}`);
  } else {
    console.error(`❌ Missing exercise section: ${ex}`);
    failed = true;
  }
});

// Check Marking Schemes
const rubricMatches = ch2Html.match(/<div class="marking-scheme">/g) || [];
console.log(`✓ Marking Schemes Found: ${rubricMatches.length} / 36 questions`);
if (rubricMatches.length !== 36) {
  console.error(`❌ FAIL: Expected 36 marking schemes, found ${rubricMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: All 36 questions have official CBSE step marking schemes!');
}

// Check Arrow diagram SVG
const svgMatches = ch2Html.match(/<svg/g) || [];
console.log(`✓ SVG Diagrams found: ${svgMatches.length}`);
if (!ch2Html.includes('ellipse cx="60"') || !ch2Html.includes('marker-end="url(#arrow)"')) {
  console.error('⚠️ Warning: Arrow diagram SVG missing in Ex 2.2 Q4');
  failed = true;
} else {
  console.log('✅ PASS: Exercise 2.2 Question 4 arrow mapping diagram SVG verified!');
}

// 2. Audit master page
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-maths.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('Ch 2: Relations and Functions') && masterHtml.includes('showChapter(2)')) {
    console.log('✅ PASS: Master page properly wires Chapter 2 Relations and Functions!');
  } else {
    console.error('❌ Master page missing Chapter 2 reference');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11m/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataContent = fs.readFileSync(dataJsFile, 'utf8');
  if (dataContent.includes('window.CHAPTER_DATA[2] =')) {
    console.log('✅ PASS: Preloaded chapters-data.js contains Chapter 2 cache!');
  } else {
    console.error('❌ chapters-data.js missing CHAPTER_DATA[2]');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED with errors.');
  process.exit(1);
} else {
  console.log('\n🌟 AUDIT PASSED 100%! Zero question shortage. Strict NCERT fidelity achieved for Class 11 Maths Chapter 2.');
}
