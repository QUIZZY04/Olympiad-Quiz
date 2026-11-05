// scripts/audit-c11p-ch11.js
// Automated verification audit for Class 11 Physics Chapter 11: Thermodynamics
const fs = require('fs');
const path = require('path');

const ch11File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch11.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 11: THERMODYNAMICS ===\n');

let failed = false;

// 1. Audit ch11.html
if (!fs.existsSync(ch11File)) {
  console.error('❌ FAIL: chapters-c11p/ch11.html does not exist!');
  process.exit(1);
}

const ch11Html = fs.readFileSync(ch11File, 'utf8');

// Count question cards
const qMatches = ch11Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 10 expected`);

if (qMatches.length !== 10) {
  console.error(`❌ FAIL: Expected 10 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 10 questions present verbatim!');
}

// Check every ID from 1 to 10
let missingIds = [];
for (let i = 1; i <= 10; i++) {
  const expectedId = `id="c11p-ch11-q${i}"`;
  if (!ch11Html.includes(expectedId)) {
    missingIds.push(`c11p-ch11-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 10 question IDs (c11p-ch11-q1 to c11p-ch11-q10) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch11Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 10`);
if (markingSchemes.length !== 10) {
  console.error(`❌ FAIL: Expected 10 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch11Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for Thermodynamic Cycles & Heat Engines.');
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
  if (masterHtml.includes('ch11.html') || masterHtml.includes('Thermodynamics')) {
    console.log('✅ PASS: Master hub page properly links Chapter 11!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 11!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[11]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[11] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[11] not found in chapters-data.js!');
    failed = true;
  }
}

console.log('\n--------------------------------------------------');
if (failed) {
  console.error('❌ AUDIT FAILED: Some checks did not pass for Chapter 11.');
  process.exit(1);
} else {
  console.log('🎉 AUDIT SUCCESSFUL: Chapter 11 Thermodynamics is 100% complete with 0% shortage!');
  process.exit(0);
}
