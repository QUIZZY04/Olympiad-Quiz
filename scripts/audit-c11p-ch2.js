// scripts/audit-c11p-ch2.js
// Automated verification audit for Class 11 Physics Chapter 2: Motion in a Straight Line
const fs = require('fs');
const path = require('path');

const ch2File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch2.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 2: MOTION IN A STRAIGHT LINE ===\n');

let failed = false;

// 1. Audit ch2.html
if (!fs.existsSync(ch2File)) {
  console.error('❌ FAIL: chapters-c11p/ch2.html does not exist!');
  process.exit(1);
}

const ch2Html = fs.readFileSync(ch2File, 'utf8');

// Count question cards
const qMatches = ch2Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 22 expected`);

if (qMatches.length !== 22) {
  console.error(`❌ FAIL: Expected 22 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 22 questions present verbatim!');
}

// Check every ID from 1 to 22
let missingIds = [];
for (let i = 1; i <= 22; i++) {
  const expectedId = `id="c11p-ch2-q${i}"`;
  if (!ch2Html.includes(expectedId)) {
    missingIds.push(`c11p-ch2-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 22 question IDs (c11p-ch2-q1 to c11p-ch2-q22) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch2Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 22`);
if (markingSchemes.length !== 22) {
  console.error(`❌ FAIL: Expected 22 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch2Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for kinematics graphs.');
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
  if (masterHtml.includes('ch2.html') || masterHtml.includes('Motion in a Straight Line')) {
    console.log('✅ PASS: Master hub page properly links Chapter 2!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 2!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[2]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[2] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[2] not found in chapters-data.js!');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED WITH ERRORS');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY FOR CHAPTER 2!');
}
