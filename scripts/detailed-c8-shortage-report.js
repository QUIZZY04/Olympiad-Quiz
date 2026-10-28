const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const BENCHMARKS = require('./c8-benchmarks.js');

const subs = [
  { name: 'Science', file: 'ncert-solutions-class-8-science.html', b: BENCHMARKS.science },
  { name: 'Social Science', file: 'ncert-solutions-class-8-sst.html', b: BENCHMARKS.socialScience },
  { name: 'Hindi', file: 'ncert-solutions-class-8-hindi.html', b: BENCHMARKS.hindi },
  { name: 'English', file: 'ncert-solutions-class-8-english.html', b: BENCHMARKS.english },
  { name: 'Sanskrit', file: 'ncert-solutions-class-8-sanskrit.html', b: BENCHMARKS.sanskrit }
];

let grandMissing = 0;

subs.forEach(s => {
  const html = fs.readFileSync(path.join(ROOT, s.file), 'utf8');
  console.log(`\n=== ${s.name.toUpperCase()} ===`);
  let subMissing = 0;
  s.b.forEach(bm => {
    const secId = bm.id || `ch${bm.ch}`;
    const secRegex = new RegExp(`<section[^>]*id="${secId}"[^>]*>([\\s\\S]*?)</section>`);
    const m = html.match(secRegex);
    const qc = m ? (m[1].match(/class="q-card"/g) || []).length : 0;
    const diff = bm.physicalQ - qc;
    if (diff > 0) {
      console.log(`  ${secId} (${bm.title}): current = ${qc}, benchmark = ${bm.physicalQ}, missing = ${diff}`);
      subMissing += diff;
    }
  });
  console.log(`Subtotal missing for ${s.name}: ${subMissing}`);
  grandMissing += subMissing;
});

console.log(`\nTOTAL MISSING PHYSICAL QUESTIONS ACROSS CLASS 8: ${grandMissing}`);
