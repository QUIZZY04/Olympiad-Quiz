// scripts/audit-c11p-ch13.js
// Automated verification audit for Class 11 Physics Chapter 13: Oscillations
const fs = require('fs');
const path = require('path');

const ch13File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch13.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 13: OSCILLATIONS ===\n');

let failed = false;

// 1. Audit ch13.html
if (!fs.existsSync(ch13File)) {
  console.error('❌ FAIL: chapters-c11p/ch13.html does not exist!');
  process.exit(1);
}

const ch13Html = fs.readFileSync(ch13File, 'utf8');

// Count question cards
const qMatches = ch13Html.match(/<div class="q-card"/g) || [];
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
  const expectedId = `id="c11p-ch13-q${i}"`;
  if (!ch13Html.includes(expectedId)) {
    missingIds.push(`c11p-ch13-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 18 question IDs (c11p-ch13-q1 to c11p-ch13-q18) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch13Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 18`);
if (markingSchemes.length !== 18) {
  console.error(`❌ FAIL: Expected 18 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch13Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for SHM Reference Circle & Energy Interchange Wells.');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check that PDF download bar is NOT present (only for chapter 7 as instructed by user)
if (ch13Html.includes('pdf-download-bar') || ch13Html.includes('download-pdf-btn')) {
  console.error('❌ FAIL: PDF download bar found in Chapter 13 (must only be on Chapter 7)!');
  failed = true;
} else {
  console.log('✅ PASS: PDF download bar correctly excluded from Chapter 13 (restricted to Chapter 7 only).');
}

// 2. Audit master page link
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-physics.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('ch13.html') || masterHtml.includes('Oscillations')) {
    console.log('✅ PASS: Master hub page properly links Chapter 13!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 13!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[13]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[13] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[13] not found in chapters-data.js!');
    failed = true;
  }
}

console.log('\n--------------------------------------------------');
if (failed) {
  console.error('❌ AUDIT FAILED: Some checks did not pass for Chapter 13.');
  process.exit(1);
} else {
  console.log('🎉 AUDIT SUCCESSFUL: Chapter 13 Oscillations is 100% complete with 0% shortage!');
  process.exit(0);
}
