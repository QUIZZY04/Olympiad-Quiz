const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

for (let ch = 1; ch <= 12; ch++) {
  const file = `ch${ch}.html`;
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');

  console.log(`\n=================== CHAPTER ${ch} ===================`);
  lines.forEach((line, idx) => {
    // Check if line contains LaTeX command, control char, or unformatted math
    if (
      line.includes('\\') ||
      line.includes('$') ||
      line.includes('\x0c') ||
      line.includes('rac{') ||
      line.includes('mathbf') ||
      line.includes('ext{') ||
      line.includes('t ×') ||
      /\bfrac\b/.test(line) ||
      /\btheta\b/.test(line) ||
      /\bangle\b/.test(line) ||
      /\bcdot\b/.test(line) ||
      /\bimplies\b/.test(line) ||
      /\bdots\b/.test(line) ||
      /\bperp\b/.test(line)
    ) {
      console.log(`L${idx + 1}: ${line.trim()}`);
    }
  });
}
