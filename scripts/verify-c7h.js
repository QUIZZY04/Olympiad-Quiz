const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const hubFile = path.join(rootDir, 'ncert-solutions-class-7-hindi.html');
const chaptersDir = path.join(rootDir, 'chapters-c7h');
const dataFile = path.join(chaptersDir, 'chapters-data.js');

console.log('--- Starting Class 7 Hindi Solutions Verification ---');

// 1. Check hub file exists
if (!fs.existsSync(hubFile)) {
  console.error('ERROR: ncert-solutions-class-7-hindi.html does not exist!');
  process.exit(1);
}
const hubHtml = fs.readFileSync(hubFile, 'utf8');
console.log(`Hub file size: ${(hubHtml.length / 1024).toFixed(1)} KB`);

// 2. Check for raw LaTeX
const rawLatexRegex = /\\(frac|sqrt|times|text|mathbf|alpha|beta|theta|cdot|\$)/g;
const latexMatches = hubHtml.match(rawLatexRegex);
if (latexMatches) {
  console.error(`ERROR: Found raw LaTeX artifacts: ${latexMatches.slice(0, 5).join(', ')}`);
  process.exit(1);
} else {
  console.log('✓ Zero raw LaTeX detected in Devanagari text.');
}

// 3. Check all 48 chapter sections
const vasantIds = Array.from({ length: 20 }, (_, i) => `v${i + 1}`);
const mahabharatIds = Array.from({ length: 10 }, (_, i) => `m${i + 1}`);
const durvaIds = Array.from({ length: 18 }, (_, i) => `d${i + 1}`);
const allExpectedIds = [...vasantIds, ...mahabharatIds, ...durvaIds];

let missingSections = 0;
allExpectedIds.forEach(id => {
  if (!hubHtml.includes(`id="ch-${id}"`)) {
    console.error(`ERROR: Missing chapter section id="ch-${id}" in hub!`);
    missingSections++;
  }
  const chFile = path.join(chaptersDir, `${id}.html`);
  if (!fs.existsSync(chFile)) {
    console.error(`ERROR: Missing individual chapter file: ${id}.html!`);
    missingSections++;
  }
});

if (missingSections === 0) {
  console.log(`✓ All 48 chapter sections present in hub and all 48 chapter HTML files exist.`);
} else {
  console.error(`ERROR: Found ${missingSections} missing chapters/sections!`);
  process.exit(1);
}

// 4. Check data file
if (!fs.existsSync(dataFile)) {
  console.error('ERROR: chapters-c7h/chapters-data.js does not exist!');
  process.exit(1);
}
const dataContent = fs.readFileSync(dataFile, 'utf8');
if (dataContent.includes('window.C7H_CHAPTERS') && dataContent.includes('"id": "v1"') && dataContent.includes('"id": "m1"') && dataContent.includes('"id": "d1"')) {
  console.log('✓ chapters-data.js is properly structured with metadata for all 3 books.');
} else {
  console.error('ERROR: chapters-data.js validation failed!');
  process.exit(1);
}

// 5. Check Marking Scheme & CBQ counts
const markingCount = (hubHtml.match(/marking-scheme/g) || []).length;
const cbqCount = (hubHtml.match(/cbq-section/g) || []).length;
console.log(`✓ Total Marking Schemes in Hub: ${markingCount}`);
console.log(`✓ Total CBQ/HOTS Sections in Hub: ${cbqCount}`);

console.log('--- All Class 7 Hindi Verifications Passed Successfully! ---');
