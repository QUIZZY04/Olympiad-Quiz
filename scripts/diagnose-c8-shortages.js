const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BENCHMARKS = require('./c8-benchmarks.js');

const subjects = [
  { name: 'Science', file: 'ncert-solutions-class-8-science.html', benchmarks: BENCHMARKS.science },
  { name: 'Social Science', file: 'ncert-solutions-class-8-sst.html', benchmarks: BENCHMARKS.socialScience },
  { name: 'Hindi', file: 'ncert-solutions-class-8-hindi.html', benchmarks: BENCHMARKS.hindi },
  { name: 'English', file: 'ncert-solutions-class-8-english.html', benchmarks: BENCHMARKS.english },
  { name: 'Sanskrit', file: 'ncert-solutions-class-8-sanskrit.html', benchmarks: BENCHMARKS.sanskrit }
];

let totalShortageAcrossAll = 0;

subjects.forEach(sub => {
  const fPath = path.join(ROOT, sub.file);
  const html = fs.readFileSync(fPath, 'utf8');

  const secRegex = /<section[^>]*class="[^"]*chapter-section[^"]*"[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
  let m;
  let idx = 0;
  let subShortage = 0;
  let chShortages = [];

  while ((m = secRegex.exec(html)) !== null) {
    const secId = m[1];
    const secHtml = m[2];
    const qCards = (secHtml.match(/class="q-card"/g) || []).length;
    
    const bench = sub.benchmarks && sub.benchmarks[idx] ? sub.benchmarks[idx].physicalQ : 0;
    const diff = bench - qCards;
    if (diff > 0) {
      subShortage += diff;
      chShortages.push(`${secId}(-${diff})`);
    }
    idx++;
  }
  totalShortageAcrossAll += subShortage;
  console.log(`• ${sub.name.padEnd(16, ' ')}: Shortage = ${subShortage.toString().padStart(2, ' ')} Qs across chapters: ${chShortages.join(', ')}`);
});

console.log(`\nTOTAL PHYSICAL EXERCISE SHORTAGE TO FIX: ${totalShortageAcrossAll} Questions`);

