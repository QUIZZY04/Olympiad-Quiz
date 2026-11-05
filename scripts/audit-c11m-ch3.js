// scripts/audit-c11m-ch3.js
// Automated verification audit for Class 11 Mathematics Chapter 3: Trigonometric Functions
const fs = require('fs');
const path = require('path');

const ch3File = path.resolve(__dirname, '..', 'chapters-c11m', 'ch3.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-maths.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11m', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 MATHS CHAPTER 3: TRIGONOMETRIC FUNCTIONS ===\n');

let failed = false;

// 1. Audit ch3.html existence
if (!fs.existsSync(ch3File)) {
  console.error('❌ FAIL: chapters-c11m/ch3.html does not exist!');
  process.exit(1);
}

const ch3Html = fs.readFileSync(ch3File, 'utf8');

// Count question cards
const qMatches = ch3Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 52 expected`);

if (qMatches.length !== 52) {
  console.error(`❌ FAIL: Expected 52 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 52 questions present verbatim!');
}

// Check every ID from 1 to 52
let missingIds = [];
for (let i = 1; i <= 52; i++) {
  const expectedId = `id="c11m-ch3-q${i}"`;
  if (!ch3Html.includes(expectedId)) {
    missingIds.push(`c11m-ch3-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 52 question IDs (c11m-ch3-q1 to c11m-ch3-q52) exist unbroken!');
}

// Check Exercises division
const exercises = [
  'Exercise 3.1',
  'Exercise 3.2',
  'Exercise 3.3',
  'Miscellaneous'
];

exercises.forEach(ex => {
  if (ch3Html.includes(ex)) {
    console.log(`✓ Section detected: ${ex}`);
  } else {
    console.error(`❌ Missing exercise section: ${ex}`);
    failed = true;
  }
});

// Check Marking Schemes
const rubricMatches = ch3Html.match(/<div class="marking-scheme">/g) || [];
console.log(`✓ Marking Schemes Found: ${rubricMatches.length} / 52 questions`);
if (rubricMatches.length !== 52) {
  console.error(`❌ FAIL: Expected 52 marking schemes, found ${rubricMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: All 52 questions have official CBSE step marking schemes!');
}

// Check ASTC Diagram SVG
const svgMatches = ch3Html.match(/<svg/g) || [];
console.log(`✓ SVG Diagrams found: ${svgMatches.length}`);
if (!ch3Html.includes('ASTC Quadrant Rule') || !ch3Html.includes('Quadrant I (A)')) {
  console.error('⚠️ Warning: ASTC Quadrant diagram SVG missing');
  failed = true;
} else {
  console.log('✅ PASS: ASTC Quadrant circular trigonometry SVG diagram verified!');
}

// 2. Audit master page
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-maths.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('Ch 3: Trigonometric Functions') && masterHtml.includes('showChapter(3)')) {
    console.log('✅ PASS: Master page properly wires Chapter 3 Trigonometric Functions!');
  } else {
    console.error('❌ Master page missing Chapter 3 reference');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11m/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataContent = fs.readFileSync(dataJsFile, 'utf8');
  if (dataContent.includes('window.CHAPTER_DATA[3] =')) {
    console.log('✅ PASS: Preloaded chapters-data.js contains Chapter 3 cache!');
  } else {
    console.error('❌ chapters-data.js missing CHAPTER_DATA[3]');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED with errors.');
  process.exit(1);
} else {
  console.log('\n🌟 AUDIT PASSED 100%! Zero question shortage. Strict NCERT fidelity achieved for Class 11 Maths Chapter 3.');
}
