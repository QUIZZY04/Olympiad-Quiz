const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c8m');

console.log('=== Checking Toggle IDs and Accordion Integrity ===');
let mismatchCount = 0;

for (let i = 1; i <= 14; i++) {
  const f = path.join(chDir, `ch${i}.html`);
  const content = fs.readFileSync(f, 'utf8');

  // Check toggleQ calls
  const toggleMatches = content.matchAll(/onclick="toggleQ\('([^']+)'\)"/g);
  for (const m of toggleMatches) {
    const id = m[1];
    if (!content.includes(`id="${id}"`)) {
      console.error(`Ch ${i}: Toggle ID "${id}" has no matching element!`);
      mismatchCount++;
    }
  }

  // Check LaTeX
  const latexPatterns = [/\\frac\{/, /\\text\{/, /\\sqrt\{/, /\\times/, /\\pm/, /\\le/, /\\ge/];
  for (const p of latexPatterns) {
    if (p.test(content)) {
      console.error(`Ch ${i}: Found raw LaTeX ${p}`);
      mismatchCount++;
    }
  }
}

if (mismatchCount === 0) {
  console.log('✓ 100% Accordion toggle IDs match elements! Zero raw LaTeX violations!');
} else {
  console.error(`Found ${mismatchCount} issues!`);
}
