const fs = require('fs');
const path = require('path');
const benchmarks = require('./c8-benchmarks.js').english;

const html = fs.readFileSync(path.join(__dirname, '..', 'ncert-solutions-class-8-english.html'), 'utf8');

const sectionMap = {};
const sectionRegex = /<section[^>]*class="[^"]*chapter-section[^"]*"[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
let m;
while ((m = sectionRegex.exec(html)) !== null) {
  sectionMap[m[1]] = m[2];
}

console.log('=== CLASS 8 ENGLISH CHAPTER INSPECTION ===');
let totalShortage = 0;
benchmarks.forEach(bm => {
  const sec = sectionMap[bm.id] || '';
  const qCards = sec.match(/class="[^"]*q-card[^"]*"/g) || [];
  const cbqCards = sec.match(/class="[^"]*cbq-card[^"]*"/g) || [];
  const shortage = bm.physicalQ - qCards.length;
  totalShortage += Math.max(0, shortage);
  console.log(`[${bm.id}] ${bm.title.padEnd(45, ' ')} | Book: ${bm.book.padEnd(16, ' ')} | Target: ${bm.physicalQ} | OnSite: ${qCards.length} | Shortage: ${shortage}`);
});
console.log('Total English Shortage:', totalShortage);
