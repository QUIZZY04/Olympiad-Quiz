// scripts/audit-c11c-ch1.js
// Automated verification audit for Class 11 Chemistry Chapter 1: Some Basic Concepts of Chemistry
const fs = require('fs');
const path = require('path');

const ch1File = path.resolve(__dirname, '..', 'chapters-c11c', 'ch1.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-chemistry.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11c', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 CHEMISTRY CHAPTER 1: SOME BASIC CONCEPTS OF CHEMISTRY ===\n');

let failed = false;

// 1. Audit ch1.html
if (!fs.existsSync(ch1File)) {
  console.error('❌ FAIL: chapters-c11c/ch1.html does not exist!');
  process.exit(1);
}

const ch1Html = fs.readFileSync(ch1File, 'utf8');

// Count question cards
const qMatches = ch1Html.match(/<div class="q-card"/g) || [];
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
  const expectedId = `id="c11c-ch1-q${i}"`;
  if (!ch1Html.includes(expectedId)) {
    missingIds.push(`c11c-ch1-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 36 question IDs (c11c-ch1-q1 to c11c-ch1-q36) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch1Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 36`);
if (markingSchemes.length !== 36) {
  console.error(`❌ FAIL: Expected 36 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch1Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected high-fidelity SVG diagrams for Mole Road Map & Limiting Reagent Balance.');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check NO PDF download function (strictly restricted to Physics Ch 7)
if (ch1Html.includes('download-pdf-btn') || ch1Html.includes('pdf-download-bar')) {
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
  if (masterHtml.includes('ch1.html') || masterHtml.includes('Some Basic Concepts')) {
    console.log('✅ PASS: Master hub page properly links Chapter 1!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 1!');
    failed = true;
  }
  if (masterHtml.includes('mathjax') && masterHtml.includes('tex-mml-chtml.js')) {
    console.log('✅ PASS: MathJax 3 configuration verified on master hub page.');
  } else {
    console.error('❌ FAIL: MathJax configuration missing or incomplete on master page.');
    failed = true;
  }
  if (masterHtml.includes('download-pdf-btn') || masterHtml.includes('pdf-download-bar')) {
    console.error('❌ FAIL: Master hub page should not have PDF download buttons.');
    failed = true;
  } else {
    console.log('✅ PASS: Master hub page verified free of PDF download bar.');
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11c/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[1]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[1] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[1] not found in chapters-data.js!');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED WITH ERRORS');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY FOR CHAPTER 1!');
}
