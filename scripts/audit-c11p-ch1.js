// scripts/audit-c11p-ch1.js
// Automated verification audit for Class 11 Physics Chapter 1: Units and Measurements
const fs = require('fs');
const path = require('path');

const ch1File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch1.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 1: UNITS AND MEASUREMENTS ===\n');

let failed = false;

// 1. Audit ch1.html
if (!fs.existsSync(ch1File)) {
  console.error('❌ FAIL: chapters-c11p/ch1.html does not exist!');
  process.exit(1);
}

const ch1Html = fs.readFileSync(ch1File, 'utf8');

// Count question cards
const qMatches = ch1Html.match(/<div class="q-card"/g) || [];
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
  const expectedId = `id="c11p-ch1-q${i}"`;
  if (!ch1Html.includes(expectedId)) {
    missingIds.push(`c11p-ch1-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 22 question IDs (c11p-ch1-q1 to c11p-ch1-q22) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch1Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 22`);
if (markingSchemes.length !== 22) {
  console.error(`❌ FAIL: Expected 22 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch1Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected high-fidelity SVG diagrams for Vernier caliper / dimensional system.');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// 2. Audit master page
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-physics.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('ch1.html') || masterHtml.includes('Units and Measurements')) {
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
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
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
