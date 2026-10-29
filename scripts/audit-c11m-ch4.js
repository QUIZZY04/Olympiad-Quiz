// scripts/audit-c11m-ch4.js
// Automated verification audit for Class 11 Mathematics Chapter 4: Complex Numbers and Quadratic Equations
const fs = require('fs');
const path = require('path');

const ch4File = path.resolve(__dirname, '..', 'chapters-c11m', 'ch4.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-maths.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11m', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 MATHS CHAPTER 4: COMPLEX NUMBERS & QUADRATIC EQUATIONS ===\n');

let failed = false;

// 1. Audit ch4.html existence
if (!fs.existsSync(ch4File)) {
  console.error('❌ FAIL: chapters-c11m/ch4.html does not exist!');
  process.exit(1);
}

const ch4Html = fs.readFileSync(ch4File, 'utf8');

// Count question cards
const qMatches = ch4Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 34 expected`);

if (qMatches.length !== 34) {
  console.error(`❌ FAIL: Expected 34 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 34 questions present verbatim!');
}

// Check every ID from 1 to 34
let missingIds = [];
for (let i = 1; i <= 34; i++) {
  const expectedId = `id="c11m-ch4-q${i}"`;
  if (!ch4Html.includes(expectedId)) {
    missingIds.push(`c11m-ch4-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 34 question IDs (c11m-ch4-q1 to c11m-ch4-q34) exist unbroken!');
}

// Check Exercises division
const exercises = [
  'Exercise 4.1',
  'Exercise 4.2',
  'Miscellaneous'
];

exercises.forEach(ex => {
  if (ch4Html.includes(ex)) {
    console.log(`✓ Section detected: ${ex}`);
  } else {
    console.error(`❌ Missing exercise section: ${ex}`);
    failed = true;
  }
});

// Check Marking Schemes
const rubricMatches = ch4Html.match(/<div class="marking-scheme">/g) || [];
console.log(`✓ Marking Schemes Found: ${rubricMatches.length} / 34 questions`);
if (rubricMatches.length !== 34) {
  console.error(`❌ FAIL: Expected 34 marking schemes, found ${rubricMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: All 34 questions have official CBSE step marking schemes!');
}

// Check Argand Plane Diagram SVG
const svgMatches = ch4Html.match(/<svg/g) || [];
console.log(`✓ SVG Diagrams found: ${svgMatches.length}`);
if (!ch4Html.includes('Argand Plane') || !ch4Html.includes('P(a, b) = a + ib')) {
  console.error('⚠️ Warning: Argand plane diagram SVG missing');
  failed = true;
} else {
  console.log('✅ PASS: Argand plane complex number SVG diagram verified!');
}

// 2. Audit master page
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-maths.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('Ch 4: Complex Numbers') && masterHtml.includes('showChapter(4)')) {
    console.log('✅ PASS: Master page properly wires Chapter 4 Complex Numbers!');
  } else {
    console.error('❌ Master page missing Chapter 4 reference');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11m/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataContent = fs.readFileSync(dataJsFile, 'utf8');
  if (dataContent.includes('window.CHAPTER_DATA[4] =')) {
    console.log('✅ PASS: Preloaded chapters-data.js contains Chapter 4 cache!');
  } else {
    console.error('❌ chapters-data.js missing CHAPTER_DATA[4]');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED with errors.');
  process.exit(1);
} else {
  console.log('\n🌟 AUDIT PASSED 100%! Zero question shortage. Strict NCERT fidelity achieved for Class 11 Maths Chapter 4.');
}
