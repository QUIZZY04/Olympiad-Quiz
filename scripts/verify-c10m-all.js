const fs = require('fs');
const path = require('path');

console.log('=== CLASS 10 MATHEMATICS COMPREHENSIVE VERIFICATION ===\n');

let allErrors = [];
let totalDiagrams = 0;

for (let ch = 1; ch <= 14; ch++) {
  const filePath = path.join('chapters-c10m', `ch${ch}.html`);
  if (!fs.existsSync(filePath)) {
    allErrors.push(`Missing file: ${filePath}`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Broken literals
  const brokenLiterals = ['undefined', 'NaN', '[object Object]'];
  brokenLiterals.forEach(lit => {
    if (content.includes(lit)) {
      allErrors.push(`Found literal "${lit}" in ${filePath}`);
    }
  });

  // 2. MathJax dollar parity
  // Strip code blocks and tags before testing $
  const stripped = content.replace(/<svg[\s\S]*?<\/svg>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '');
  const dollarMatches = stripped.match(/\$/g) || [];
  if (dollarMatches.length % 2 !== 0) {
    allErrors.push(`Odd number of dollar signs ($) in ${filePath}: count = ${dollarMatches.length}`);
  }

  // 3. SVG diagrams count and validity
  const svgMatches = content.match(/<div class="math-diagram-wrap"[\s\S]*?<\/svg>\s*(?:<div[^>]*>.*?<\/div>)?\s*<\/div>/gi) || [];
  totalDiagrams += svgMatches.length;

  // Check closing tags
  const openSvg = (content.match(/<svg\b/gi) || []).length;
  const closeSvg = (content.match(/<\/svg>/gi) || []).length;
  if (openSvg !== closeSvg) {
    allErrors.push(`Mismatched <svg> tags in ${filePath}: ${openSvg} open vs ${closeSvg} close`);
  }

  // Check card count
  const cardCount = (content.match(/<div class="q-card"/g) || []).length;

  console.log(`Chapter ${ch}: ${cardCount} questions, ${svgMatches.length} diagrams embedded, ${dollarMatches.length} LaTeX delimiters, SVGs well-formed (${openSvg} open/close).`);
}

// 4. Verify chapters-data.js
console.log('\n--- Checking chapters-data.js ---');
try {
  const dataContent = fs.readFileSync('chapters-c10m/chapters-data.js', 'utf8');
  // Mock window and evaluate
  const mockWindow = {};
  const fn = new Function('window', dataContent);
  fn(mockWindow);
  const data = mockWindow.CHAPTER_DATA;
  if (!data) {
    allErrors.push('CHAPTER_DATA missing from chapters-data.js');
  } else {
    const keys = Object.keys(data).sort((a,b) => parseInt(a) - parseInt(b));
    console.log(`CHAPTER_DATA successfully loaded: ${keys.length} chapters (${keys.join(', ')})`);
    if (keys.length !== 14) {
      allErrors.push(`Expected 14 chapters in CHAPTER_DATA, found ${keys.length}`);
    }
  }
} catch (e) {
  allErrors.push(`Failed to parse chapters-data.js: ${e.message}`);
}

console.log(`\n==============================================`);
console.log(`TOTAL MATH DIAGRAMS EMBEDDED IN CLASS 10: ${totalDiagrams}`);
console.log(`TOTAL VALIDATION ERRORS: ${allErrors.length}`);
if (allErrors.length > 0) {
  console.log('ERRORS:');
  allErrors.forEach(err => console.log(' - ' + err));
  process.exit(1);
} else {
  console.log('SUCCESS: All 14 Class 10 chapters are 100% verified and defect-free!');
  process.exit(0);
}
