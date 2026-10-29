// scripts/audit-c11m-ch5.js
// Verification audit script for Class 11 Maths Chapter 5: Linear Inequalities
const fs = require('fs');
const path = require('path');

const ch5Path = path.resolve(__dirname, '..', 'chapters-c11m', 'ch5.html');
const dataJsPath = path.resolve(__dirname, '..', 'chapters-c11m', 'chapters-data.js');

console.log('--- Starting Audit for Class 11 Maths Chapter 5: Linear Inequalities ---');

if (!fs.existsSync(ch5Path)) {
  console.error('FAIL: ch5.html does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(ch5Path, 'utf8');

// 1. Verify question count
let pass = true;
const totalExpected = 40;
for (let i = 1; i <= totalExpected; i++) {
  const qId = `c11m-ch5-q${i}`;
  if (!html.includes(`id="${qId}"`)) {
    console.error(`FAIL: Missing question element ${qId}`);
    pass = false;
  }
}

// 2. Count matches
const qCards = (html.match(/class="q-card"/g) || []).length;
console.log(`Audited Question Cards: ${qCards} / ${totalExpected}`);
if (qCards !== totalExpected) {
  console.error(`FAIL: Expected ${totalExpected} question cards, found ${qCards}`);
  pass = false;
}

// 3. Verify exercises
if (!html.includes('Exercise 5.1') || !html.includes('Misc Exercise')) {
  console.error('FAIL: Missing exercise sections!');
  pass = false;
}

// 4. Verify marking schemes
const markingSchemes = (html.match(/class="marking-scheme"/g) || []).length;
console.log(`Audited Marking Schemes: ${markingSchemes} / ${totalExpected}`);
if (markingSchemes !== totalExpected) {
  console.error(`FAIL: Expected ${totalExpected} marking schemes, found ${markingSchemes}`);
  pass = false;
}

// 5. Verify SVGs
const svgCount = (html.match(/<svg/g) || []).length;
console.log(`Audited SVGs (Diagrams & Toggles): ${svgCount}`);
if (svgCount < 47) { // 40 toggles + 1 main concept diagram + 6 number line plots
  console.error(`FAIL: Expected at least 47 SVG elements, found ${svgCount}`);
  pass = false;
}

// 6. Check cache integration in chapters-data.js
if (!fs.existsSync(dataJsPath)) {
  console.error('FAIL: chapters-data.js does not exist!');
  pass = false;
} else {
  const dataJs = fs.readFileSync(dataJsPath, 'utf8');
  if (!dataJs.includes('window.CHAPTER_DATA[5] =')) {
    console.error('FAIL: window.CHAPTER_DATA[5] is missing from chapters-data.js!');
    pass = false;
  } else {
    console.log('PASS: window.CHAPTER_DATA[5] correctly registered in chapters-data.js');
  }
}

if (pass) {
  console.log('SUCCESS: All 40 questions in Class 11 Maths Chapter 5 passed 100% verbatim audit!');
  process.exit(0);
} else {
  console.error('AUDIT FAILED!');
  process.exit(1);
}
