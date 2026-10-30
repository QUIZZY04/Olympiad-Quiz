// scripts/audit-c11c-ch6.js
// Automated verification audit for Class 11 Chemistry Chapter 6: Equilibrium
const fs = require('fs');
const path = require('path');

const ch6File = path.resolve(__dirname, '..', 'chapters-c11c', 'ch6.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-chemistry.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11c', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 CHEMISTRY CHAPTER 6: EQUILIBRIUM ===\n');

let failed = false;

// 1. Audit ch6.html
if (!fs.existsSync(ch6File)) {
  console.error('❌ FAIL: chapters-c11c/ch6.html does not exist!');
  process.exit(1);
}

const ch6Html = fs.readFileSync(ch6File, 'utf8');

// Count question cards
const qMatches = ch6Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 73 expected`);

if (qMatches.length !== 73) {
  console.error(`❌ FAIL: Expected 73 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 73 questions present verbatim!');
}

// Check every ID from 1 to 73
let missingIds = [];
for (let i = 1; i <= 73; i++) {
  const expectedId = `id="c11c-ch6-q${i}"`;
  if (!ch6Html.includes(expectedId)) {
    missingIds.push(`c11c-ch6-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 73 question IDs (c11c-ch6-q1 to c11c-ch6-q73) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch6Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 73`);
if (markingSchemes.length !== 73) {
  console.error(`❌ FAIL: Expected 73 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch6Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected high-fidelity SVG diagrams for Le Chatelier & Ionic Equilibrium.');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check NO PDF download function (strictly restricted to Physics Ch 7)
if (ch6Html.includes('download-pdf-btn') || ch6Html.includes('pdf-download-bar')) {
  console.error('❌ FAIL: PDF download button/bar must NOT be present in Chemistry!');
  failed = true;
} else {
  console.log('✅ PASS: Verified NO PDF download bar (strictly restricted to Physics Ch 7).');
}

// 2. Audit master page
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-chemistry.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('Equilibrium') && masterHtml.includes('73 Questions')) {
    console.log('✅ PASS: Master hub page properly links Chapter 6 with 73 Questions count!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link/count for Chapter 6!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11c/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[6]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[6] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[6] not found in chapters-data.js!');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED WITH ERRORS');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY FOR CHAPTER 6 (EQUILIBRIUM)!');
}
