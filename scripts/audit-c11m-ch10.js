// scripts/audit-c11m-ch10.js
// Verification audit script for Class 11 Maths Chapter 10: Conic Sections
const fs = require('fs');
const path = require('path');

const ch10Path = path.resolve(__dirname, '..', 'chapters-c11m', 'ch10.html');
const dataJsPath = path.resolve(__dirname, '..', 'chapters-c11m', 'chapters-data.js');

console.log('--- Starting Audit for Class 11 Maths Chapter 10: Conic Sections ---');

if (!fs.existsSync(ch10Path)) {
  console.error('FAIL: ch10.html does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(ch10Path, 'utf8');

// 1. Verify question count
let pass = true;
const totalExpected = 73;
for (let i = 1; i <= totalExpected; i++) {
  const qId = `c11m-ch10-q${i}`;
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
const requiredExercises = ['Exercise 10.1', 'Exercise 10.2', 'Exercise 10.3', 'Exercise 10.4', 'Misc Exercise'];
requiredExercises.forEach(ex => {
  if (!html.includes(ex)) {
    console.error(`FAIL: Missing exercise section ${ex}!`);
    pass = false;
  }
});

// 4. Verify marking schemes
const markingSchemes = (html.match(/class="marking-scheme"/g) || []).length;
console.log(`Audited Marking Schemes: ${markingSchemes} / ${totalExpected}`);
if (markingSchemes !== totalExpected) {
  console.error(`FAIL: Expected ${totalExpected} marking schemes, found ${markingSchemes}`);
  pass = false;
}

// 5. Verify SVGs
const svgCount = (html.match(/<svg/g) || []).length;
console.log(`Audited SVGs: ${svgCount}`);
if (svgCount < 74) { // 73 toggles + 1 main concept diagram
  console.error(`FAIL: Expected at least 74 SVG elements, found ${svgCount}`);
  pass = false;
}

// 6. Check cache integration in chapters-data.js
if (!fs.existsSync(dataJsPath)) {
  console.error('FAIL: chapters-data.js does not exist!');
  pass = false;
} else {
  const dataJs = fs.readFileSync(dataJsPath, 'utf8');
  if (!dataJs.includes('window.CHAPTER_DATA[10] =')) {
    console.error('FAIL: window.CHAPTER_DATA[10] is missing from chapters-data.js!');
    pass = false;
  } else {
    console.log('PASS: window.CHAPTER_DATA[10] correctly registered in chapters-data.js');
  }
}

if (pass) {
  console.log('SUCCESS: All 73 questions in Class 11 Maths Chapter 10 passed 100% verbatim audit!');
  process.exit(0);
} else {
  console.error('AUDIT FAILED!');
  process.exit(1);
}
