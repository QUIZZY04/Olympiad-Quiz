const fs = require('fs');
const path = require('path');
const benchmarks = require('../c7-benchmarks.js').maths;

const dir = path.resolve(__dirname, '../../chapters-c7m');

console.log('Class 7 Mathematics Current HTML Files vs Physical Benchmark:');
let totalPhysicalTarget = 0;
let totalCurrent = 0;
let totalShortage = 0;

benchmarks.forEach(bm => {
  const fPath = path.join(dir, `ch${bm.ch}.html`);
  const html = fs.readFileSync(fPath, 'utf8');
  const currentCount = (html.match(/class="[^"]*q-card[^"]*"/g) || []).length;
  totalPhysicalTarget += bm.physicalQ;
  totalCurrent += currentCount;
  const shortage = Math.max(0, bm.physicalQ - currentCount);
  totalShortage += shortage;
  console.log(`Ch ${bm.ch.toString().padStart(2, ' ')} (${bm.title.padEnd(32, ' ')}): onSite=${currentCount.toString().padStart(2, ' ')}, target=${bm.physicalQ.toString().padStart(2, ' ')}, shortage=${shortage}`);
});

console.log(`\nTOTALS: onSite=${totalCurrent}, target=${totalPhysicalTarget}, totalShortage=${totalShortage}`);


