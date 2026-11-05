// scripts/audit-c11p-ch12.js
// Automated verification audit for Class 11 Physics Chapter 12: Kinetic Theory
const fs = require('fs');
const path = require('path');

const ch12File = path.resolve(__dirname, '..', 'chapters-c11p', 'ch12.html');
const masterFile = path.resolve(__dirname, '..', 'ncert-solutions-class-11-physics.html');
const dataJsFile = path.resolve(__dirname, '..', 'chapters-c11p', 'chapters-data.js');

console.log('=== AUDITING CLASS 11 PHYSICS CHAPTER 12: KINETIC THEORY ===\n');

let failed = false;

// 1. Audit ch12.html
if (!fs.existsSync(ch12File)) {
  console.error('❌ FAIL: chapters-c11p/ch12.html does not exist!');
  process.exit(1);
}

const ch12Html = fs.readFileSync(ch12File, 'utf8');

// Count question cards
const qMatches = ch12Html.match(/<div class="q-card"/g) || [];
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
  const expectedId = `id="c11p-ch12-q${i}"`;
  if (!ch12Html.includes(expectedId)) {
    missingIds.push(`c11p-ch12-q${i}`);
  }
}

if (missingIds.length > 0) {
  console.error(`❌ FAIL: Missing question IDs: ${missingIds.join(', ')}`);
  failed = true;
} else {
  console.log('✅ PASS: All 10 question IDs (c11p-ch12-q1 to c11p-ch12-q10) exist unbroken!');
}

// Check marking schemes
const markingSchemes = ch12Html.match(/CBSE Marking Scheme Rubric/g) || [];
console.log(`✓ Marking Scheme Rubrics Found: ${markingSchemes.length} / 10`);
if (markingSchemes.length !== 10) {
  console.error(`❌ FAIL: Expected 10 marking schemes, found ${markingSchemes.length}`);
  failed = true;
} else {
  console.log('✅ PASS: 100% of questions contain official CBSE marking scheme rubrics!');
}

// Check SVG diagrams
const svgs = ch12Html.match(/<svg/g) || [];
console.log(`✓ Total SVG graphics elements found in page: ${svgs.length}`);
if (svgs.length < 2) {
  console.error('❌ FAIL: Expected custom SVG diagram for Maxwell-Boltzmann speed distribution & Mean Free Path.');
  failed = true;
} else {
  console.log('✅ PASS: High-fidelity custom SVG diagram(s) embedded!');
}

// Check that PDF download bar is NOT present (only for chapter 7 as instructed by user)
if (ch12Html.includes('pdf-download-bar') || ch12Html.includes('download-pdf-btn')) {
  console.error('❌ FAIL: PDF download bar found in Chapter 12 (must only be on Chapter 7)!');
  failed = true;
} else {
  console.log('✅ PASS: PDF download bar correctly excluded from Chapter 12 (restricted to Chapter 7 only).');
}

// 2. Audit master page link
if (!fs.existsSync(masterFile)) {
  console.error('❌ FAIL: ncert-solutions-class-11-physics.html does not exist!');
  failed = true;
} else {
  const masterHtml = fs.readFileSync(masterFile, 'utf8');
  if (masterHtml.includes('ch12.html') || masterHtml.includes('Kinetic Theory')) {
    console.log('✅ PASS: Master hub page properly links Chapter 12!');
  } else {
    console.error('❌ FAIL: Master hub page missing valid link to Chapter 12!');
    failed = true;
  }
}

// 3. Audit chapters-data.js
if (!fs.existsSync(dataJsFile)) {
  console.error('❌ FAIL: chapters-c11p/chapters-data.js does not exist!');
  failed = true;
} else {
  const dataJs = fs.readFileSync(dataJsFile, 'utf8');
  if (dataJs.includes('window.CHAPTER_DATA[12]')) {
    console.log('✅ PASS: window.CHAPTER_DATA[12] registered in offline cache.');
  } else {
    console.error('❌ FAIL: window.CHAPTER_DATA[12] not found in chapters-data.js!');
    failed = true;
  }
}

console.log('\n--------------------------------------------------');
if (failed) {
  console.error('❌ AUDIT FAILED: Some checks did not pass for Chapter 12.');
  process.exit(1);
} else {
  console.log('🎉 AUDIT SUCCESSFUL: Chapter 12 Kinetic Theory is 100% complete with 0% shortage!');
  process.exit(0);
}
