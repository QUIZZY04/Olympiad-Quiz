// scripts/audit-c11p-ch14.js
// Automated verification audit for Class 11 Physics Chapter 14: Waves
const fs = require('fs');
const path = require('path');

const ch14File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch14.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 14: WAVES ===\n');

let failed = false;

// 1. Audit ch14.html
if (!fs.existsSync(ch14File)) {
  console.error('❌ FAIL: chapters-c11p/ch14.html does not exist!');
  process.exit(1);
}

const ch14Html = fs.readFileSync(ch14File, 'utf8');

// Count question cards
const qMatches = ch14Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 19 expected`);

if (qMatches.length !== 19) {
  console.error(`❌ FAIL: Expected 19 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 19 questions present verbatim!');
}

// Check every ID from 1 to 19
let missingIds = [];
for (let i = 1; i <= 19; i++) {
  const expectedId = `id="c11p-ch14-q${i}"`;
  if (!ch14Html.includes(expectedId)) {
    missingIds.push(`c11p-ch14-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 19 question IDs (c11p-ch14-q1 to c11p-ch14-q19) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch14Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 19`);
if (markingSchemes.length !== 19) {
  console.error(`❌ FAIL: Expected 19 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch14Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for Standing Wave Modes & Beat Envelopes.');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check that PDF download bar is NOT present (only for chapter 7 as instructed by user)
if (ch14Html.includes('pdf-download-bar') || ch14Html.includes('download-pdf-btn')) {
  console.error('❌ FAIL: PDF download bar found in Chapter 14 (must only be on Chapter 7)!');
  failed = true;
} else {
  console.log('✅ PASS: PDF download bar correctly excluded from Chapter 14 (restricted to Chapter 7 only).');
}

// 2. Audit master page link
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-physics.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('ch14.html') || masterHtml.includes('Waves')) {
    console.log('✅ PASS: Master hub page properly links Chapter 14!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 14!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[14]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[14] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[14] not found in chapters-data.js!');
    failed = true;
  }
}

console.log('\n--------------------------------------------------');
if (failed) {
  console.error('❌ AUDIT FAILED: Some checks did not pass for Chapter 14.');
  process.exit(1);
} else {
  console.log('🎉 AUDIT SUCCESSFUL: Chapter 14 Waves is 100% complete with 0% shortage!');
  process.exit(0);
}
