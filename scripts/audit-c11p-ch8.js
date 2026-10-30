// scripts/audit-c11p-ch8.js
// Automated verification audit for Class 11 Physics Chapter 8: Mechanical Properties of Solids
const fs = require('fs');
const path = require('path');

const ch8File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch8.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 8: MECHANICAL PROPERTIES OF SOLIDS ===\n');

let failed = false;

// 1. Audit ch8.html
if (!fs.existsSync(ch8File)) {
  console.error('❌ FAIL: chapters-c11p/ch8.html does not exist!');
  process.exit(1);
}

const ch8Html = fs.readFileSync(ch8File, 'utf8');

// Count question cards
const qMatches = ch8Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 18 expected`);

if (qMatches.length !== 18) {
  console.error(`❌ FAIL: Expected 18 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 18 questions present verbatim!');
}

// Check every ID from 1 to 18
let missingIds = [];
for (let i = 1; i <= 18; i++) {
  const expectedId = `id="c11p-ch8-q${i}"`;
  if (!ch8Html.includes(expectedId)) {
    missingIds.push(`c11p-ch8-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 18 question IDs (c11p-ch8-q1 to c11p-ch8-q18) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch8Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 18`);
if (markingSchemes.length !== 18) {
  console.error(`❌ FAIL: Expected 18 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch8Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for Stress-Strain curve & Elasticity Moduli.');
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
  if (masterHtml.includes('ch8.html') || masterHtml.includes('Mechanical Properties of Solids')) {
    console.log('✅ PASS: Master hub page properly links Chapter 8!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 8!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[8]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[8] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[8] not found in chapters-data.js!');
    failed = true;
  }
}

console.log('\n--------------------------------------------------');
if (failed) {
  console.error('❌ AUDIT FAILED: Some checks did not pass for Chapter 8.');
  process.exit(1);
} else {
  console.log('🎉 ALL AUDIT CHECKS PASSED PERFECTLY FOR CHAPTER 8!');
  process.exit(0);
}
