const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const c10eDir = path.join(rootDir, 'chapters-c10e');

console.log('=== VERIFYING CLASS 10 ENGLISH NCERT SOLUTIONS ===\n');

// 1. Verify Hub HTML
const hubFile = path.join(rootDir, 'ncert-solutions-class-10-english.html');
if (!fs.existsSync(hubFile)) {
  console.error('FAIL: ncert-solutions-class-10-english.html does not exist!');
  process.exit(1);
}
const hubStat = fs.statSync(hubFile);
console.log(`PASS: ncert-solutions-class-10-english.html exists (${Math.round(hubStat.size / 1024)} KB)`);

// 2. Verify chapters-data.js
const dataFile = path.join(c10eDir, 'chapters-data.js');
if (!fs.existsSync(dataFile)) {
  console.error('FAIL: chapters-data.js does not exist!');
  process.exit(1);
}
const dataStat = fs.statSync(dataFile);
console.log(`PASS: chapters-c10e/chapters-data.js exists (${Math.round(dataStat.size / 1024)} KB)`);

// Check bundle content
const bundleContent = fs.readFileSync(dataFile, 'utf8');
const match = bundleContent.match(/window\.CHAPTERS_DATA\s*=\s*(\{[\s\S]*\});?\s*$/);
if (!match) {
  console.error('FAIL: Could not parse window.CHAPTERS_DATA in chapters-data.js');
  process.exit(1);
}

let parsedData;
try {
  parsedData = JSON.parse(match[1]);
  console.log('PASS: window.CHAPTERS_DATA is valid JSON');
} catch (e) {
  console.error('FAIL: JSON.parse error:', e);
  process.exit(1);
}

// 3. Verify each unit (1 to 28)
let totalQuestions = 0;
let totalMarkingRows = 0;
let totalCBQs = 0;

for (let i = 1; i <= 28; i++) {
  const chFile = path.join(c10eDir, `ch${i}.html`);
  if (!fs.existsSync(chFile)) {
    console.error(`FAIL: ch${i}.html missing!`);
    process.exit(1);
  }
  const content = fs.readFileSync(chFile, 'utf8');
  if (!parsedData[String(i)]) {
    console.error(`FAIL: Unit ${i} missing from window.CHAPTERS_DATA!`);
    process.exit(1);
  }

  // Count questions
  const qMatches = content.match(/<div class="q-card"/g) || [];
  const mMatches = content.match(/<div class="marking-row"/g) || [];
  const cMatches = content.match(/<div class="cbq-card"/g) || [];

  if (qMatches.length === 0) {
    console.error(`FAIL: Unit ${i} has 0 questions!`);
    process.exit(1);
  }

  totalQuestions += qMatches.length;
  totalMarkingRows += mMatches.length;
  totalCBQs += cMatches.length;
}

console.log(`PASS: All 28 units validated successfully!`);
console.log(`- Total Questions: ${totalQuestions}`);
console.log(`- Total Marking Scheme Allocations: ${totalMarkingRows}`);
console.log(`- Total Competency-Based / HOTS / Extract Questions: ${totalCBQs}`);

// 4. Verify cross links
const hubContent = fs.readFileSync(hubFile, 'utf8');
if (!hubContent.includes('chapters-c10e/chapters-data.js')) {
  console.error('FAIL: hub does not link to chapters-c10e/chapters-data.js');
  process.exit(1);
}
console.log('PASS: Hub properly links to chapters-c10e/chapters-data.js');

console.log('\n=== ALL VERIFICATIONS PASSED 100%! ===');
