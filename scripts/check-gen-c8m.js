const fs = require('fs');
const path = require('path');

const files = [
  { ch: 1, file: 'gen-c8m-ch1.js' },
  { ch: 2, file: 'gen-c8m-gp-part1.js' },
  { ch: 3, file: 'gen-c8m-gp-part1b.js' },
  { ch: 4, file: 'gen-c8m-ch4.js' },
  { ch: 5, file: 'gen-c8m-ch5.js' },
  { ch: 6, file: 'gen-c8m-ch6.js' },
  { ch: 7, file: 'gen-c8m-ch7.js' },
  { ch: 8, file: 'gen-c8m-ch8.js' },
  { ch: 9, file: 'gen-c8m-ch9.js' },
  { ch: 10, file: 'gen-c8m-ch10.js' },
  { ch: 11, file: 'gen-c8m-ch11.js' },
  { ch: 12, file: 'gen-c8m-ch12.js' },
  { ch: 13, file: 'gen-c8m-ch13.js' },
  { ch: 14, file: 'gen-c8m-ch14.js' }
];

console.log('=== Checking Ganita Prakash Generator Scripts ===');
let totalQs = 0;
files.forEach(f => {
  const p = path.join(__dirname, f.file);
  if (!fs.existsSync(p)) {
    console.log(`Ch ${f.ch}: File ${f.file} MISSING`);
    return;
  }
  const content = fs.readFileSync(p, 'utf8');
  const qMatches = content.match(/class="q-card"/g) || [];
  const cbqMatches = content.match(/class="case-study-box"|class="cbq-card"/g) || [];
  totalQs += qMatches.length;
  console.log(`Ch ${f.ch} (${f.file}): ${qMatches.length} Qs, ${cbqMatches.length} CBQs`);
});
console.log(`Total questions across all 14 generator scripts: ${totalQs}`);
