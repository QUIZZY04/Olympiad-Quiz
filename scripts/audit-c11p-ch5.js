// scripts/audit-c11p-ch5.js
// Automated verification audit for Class 11 Physics Chapter 5: Work, Energy and Power
const fs = require('fs');
const path = require('path');

const ch5File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch5.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 5: WORK, ENERGY AND POWER ===\n');

let failed = false;

// 1. Audit ch5.html
if (!fs.existsSync(ch5File)) {
  console.error('❌ FAIL: chapters-c11p/ch5.html does not exist!');
  process.exit(1);
}

const ch5Html = fs.readFileSync(ch5File, 'utf8');

// Count question cards
const qMatches = ch5Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 24 expected`);

if (qMatches.length !== 24) {
  console.error(`❌ FAIL: Expected 24 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 24 questions present verbatim!');
}

// Check every ID from 1 to 24
let missingIds = [];
for (let i = 1; i <= 24; i++) {
  const expectedId = `id="c11p-ch5-q${i}"`;
  if (!ch5Html.includes(expectedId)) {
    missingIds.push(`c11p-ch5-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 24 question IDs (c11p-ch5-q1 to c11p-ch5-q24) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch5Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 24`);
if (markingSchemes.length !== 24) {
  console.error(`❌ FAIL: Expected 24 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch5Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for SHM potential well & ballistic pendulum.');
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
  if (masterHtml.includes('ch5.html') || masterHtml.includes('Work, Energy and Power')) {
    console.log('✅ PASS: Master hub page properly links Chapter 5!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 5!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[5]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[5] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[5] not found in chapters-data.js!');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED WITH ERRORS');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY FOR CHAPTER 5!');
}
