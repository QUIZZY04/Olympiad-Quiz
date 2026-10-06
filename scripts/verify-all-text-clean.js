const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');

const oddities = [];

for (let ch = 1; ch <= 12; ch++) {
  const content = fs.readFileSync(path.join(dir, `ch${ch}.html`), 'utf8');
  
  // Search for any occurrence of:
  // - "ext" attached to words (like extcm, extm, extPerimeter, extside)
  // - "imes" attached to words (like 6imes, 3imes)
  // - "mathbf"
  // - "rac{"
  // - control characters
  // - stray $ or $$
  // - backslash followed by letters
  
  const badPatterns = [
    /ext[a-zA-Z]+/g,
    /[0-9]imes/g,
    /imes[a-zA-Z]+/g,
    /mathbf/g,
    /rac\{/g,
    /\$+/g,
    /\\[a-zA-Z]+/g,
    /[\x00-\x08\x0b\x0c\x0e-\x1f]/g
  ];

  badPatterns.forEach((pat, pidx) => {
    let m;
    while ((m = pat.exec(content)) !== null) {
      // Ignore valid English words that start with "ext": extra, extend, extension, exterior, extreme, external
      const matchWord = m[0];
      const validEnglish = ['extra', 'extend', 'extension', 'exterior', 'extreme', 'external', 'extremes', 'extending'];
      if (pidx === 0 && validEnglish.some(w => matchWord.toLowerCase().startsWith(w))) {
        continue;
      }
      
      const start = Math.max(0, m.index - 20);
      const end = Math.min(content.length, m.index + m[0].length + 20);
      oddities.push({
        ch,
        pattern: pat.toString(),
        match: m[0],
        snippet: content.substring(start, end).replace(/[\r\n]+/g, ' ')
      });
    }
  });
}

console.log(`Verification found ${oddities.length} oddities.`);
if (oddities.length > 0) {
  console.log(JSON.stringify(oddities, null, 2));
} else {
  console.log('PERFECT! Zero LaTeX or corrupted tokens found across all 12 chapters!');
}
