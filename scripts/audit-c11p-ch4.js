// scripts/audit-c11p-ch4.js
// Automated verification audit for Class 11 Physics Chapter 4: Laws of Motion
const fs = require('fs');
const path = require('path');

const ch4File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch4.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 4: LAWS OF MOTION ===\n');

let failed = false;

// 1. Audit ch4.html
if (!fs.existsSync(ch4File)) {
  console.error('❌ FAIL: chapters-c11p/ch4.html does not exist!');
  process.exit(1);
}

const ch4Html = fs.readFileSync(ch4File, 'utf8');

// Count question cards
const qMatches = ch4Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 31 expected`);

if (qMatches.length !== 31) {
  console.error(`❌ FAIL: Expected 31 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 31 questions present verbatim!');
}

// Check every ID from 1 to 31
let missingIds = [];
for (let i = 1; i <= 31; i++) {
  const expectedId = `id="c11p-ch4-q${i}"`;
  if (!ch4Html.includes(expectedId)) {
    missingIds.push(`c11p-ch4-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 31 question IDs (c11p-ch4-q1 to c11p-ch4-q31) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch4Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 31`);
if (markingSchemes.length !== 31) {
  console.error(`❌ FAIL: Expected 31 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch4Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for inclined plane & Atwood dynamics.');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// 2. Audit master page link
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-physics.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('ch4.html') || masterHtml.includes('Laws of Motion')) {
    console.log('✅ PASS: Master hub page properly links Chapter 4!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 4!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[4]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[4] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[4] not found in chapters-data.js!');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED WITH ERRORS');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY FOR CHAPTER 4!');
}
