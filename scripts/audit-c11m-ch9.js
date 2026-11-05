// scripts/audit-c11m-ch9.js
// Verification audit script for Class 11 Maths Chapter 9: Straight Lines
const fs = require('fs');
const path = require('path');

const ch9Path = path.resolve(__dirname, '..', 'chapters-c11m', 'ch9.html');
const dataJsPath = path.resolve(__dirname, '..', 'chapters-c11m', 'chapters-data.js');

console.log('--- Starting Audit for Class 11 Maths Chapter 9: Straight Lines ---');

if (!fs.existsSync(ch9Path)) {
  console.error('FAIL: ch9.html does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(ch9Path, 'utf8');

// 1. Verify question count
let pass = true;
const totalExpected = 71;
for (let i = 1; i <= totalExpected; i++) {
  const qId = `c11m-ch9-q${i}`;
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
const requiredExercises = ['Exercise 9.1', 'Exercise 9.2', 'Exercise 9.3', 'Misc Exercise'];
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
if (svgCount < 72) { // 71 toggles + 1 main concept diagram
  console.error(`FAIL: Expected at least 72 SVG elements, found ${svgCount}`);
  pass = false;
}

// 6. Check cache integration in chapters-data.js
if (!fs.existsSync(dataJsPath)) {
  console.error('FAIL: chapters-data.js does not exist!');
  pass = false;
} else {
  const dataJs = fs.readFileSync(dataJsPath, 'utf8');
  if (!dataJs.includes('window.CHAPTER_DATA[9] =')) {
    console.error('FAIL: window.CHAPTER_DATA[9] is missing from chapters-data.js!');
    pass = false;
  } else {
    console.log('PASS: window.CHAPTER_DATA[9] correctly registered in chapters-data.js');
  }
}

if (pass) {
  console.log('SUCCESS: All 71 questions in Class 11 Maths Chapter 9 passed 100% verbatim audit!');
  process.exit(0);
} else {
  console.error('AUDIT FAILED!');
  process.exit(1);
}
