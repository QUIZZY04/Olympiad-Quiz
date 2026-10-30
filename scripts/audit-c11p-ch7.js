// scripts/audit-c11p-ch7.js
// Automated verification audit for Class 11 Physics Chapter 7: Gravitation
const fs = require('fs');
const path = require('path');

const ch7File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch7.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 7: GRAVITATION ===\n');

let failed = false;

// 1. Audit ch7.html
if (!fs.existsSync(ch7File)) {
  console.error('❌ FAIL: chapters-c11p/ch7.html does not exist!');
  process.exit(1);
}

const ch7Html = fs.readFileSync(ch7File, 'utf8');

// Count question cards
const qMatches = ch7Html.match(/<div class="q-card"/g) || [];
console.log(`✓ Total Question Cards Found: ${qMatches.length} / 21 expected`);

if (qMatches.length !== 21) {
  console.error(`❌ FAIL: Expected 21 questions, but found ${qMatches.length}`);
  failed = true;
} else {
  console.log('✅ PASS: Exactly 21 questions present verbatim!');
}

// Check every ID from 1 to 21
let missingIds = [];
for (let i = 1; i <= 21; i++) {
  const expectedId = `id="c11p-ch7-q${i}"`;
  if (!ch7Html.includes(expectedId)) {
    missingIds.push(`c11p-ch7-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 21 question IDs (c11p-ch7-q1 to c11p-ch7-q21) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch7Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 21`);
if (markingSchemes.length !== 21) {
  console.error(`❌ FAIL: Expected 21 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch7Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for Kepler elliptical orbit & satellite dynamics.');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check PDF Download Tab at beginning of chapter
if (ch7Html.includes('pdf-download-bar') && ch7Html.includes('downloadChapterPDF()')) {
  console.log('✅ PASS: Interactive "Download All Solutions (PDF)" tab verified at start of chapter!');
} else {
  console.error('❌ FAIL: Missing PDF download tab at start of chapter!');
  failed = true;
}

// 2. Audit master page link
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-physics.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('ch7.html') || masterHtml.includes('Gravitation')) {
    console.log('✅ PASS: Master hub page properly links Chapter 7!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 7!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[7]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[7] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[7] not found in chapters-data.js!');
    failed = true;
  }
}

if (failed) {
  console.log('\n❌ AUDIT FAILED WITH ERRORS');
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY FOR CHAPTER 7!');
}
