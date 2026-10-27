const benchmarks = require('../c7-benchmarks.js');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');

console.log('=== ENGLISH SHORTAGES ===');
benchmarks.english.forEach(bm => {
  const fPath = path.join(root, 'chapters-c7e', `${bm.id}.html`);
  const html = fs.existsSync(fPath) ? fs.readFileSync(fPath, 'utf8') : '';
  const count = (html.match(/class="[^"]*q-card[^"]*"/g) || []).length;
  const shortage = Math.max(0, bm.physicalQ - count);
  if (shortage > 0) {
    console.log(`English [${bm.id}] ${bm.title}: onSite=${count}, target=${bm.physicalQ}, shortage=${shortage}`);
  }
});

console.log('\n=== HINDI SHORTAGES ===');
let totalHindiShortage = 0;
benchmarks.hindi.forEach(bm => {
  const fPath = path.join(root, 'chapters-c7h', `${bm.id}.html`);
  const html = fs.existsSync(fPath) ? fs.readFileSync(fPath, 'utf8') : '';
  const count = (html.match(/class="[^"]*q-card[^"]*"/g) || []).length;
  const shortage = Math.max(0, bm.physicalQ - count);
  if (shortage > 0) {
    console.log(`Hindi [${bm.id}] ${bm.title}: onSite=${count}, target=${bm.physicalQ}, shortage=${shortage}`);
    totalHindiShortage += shortage;
  }
});
console.log(`Total Hindi Shortage: ${totalHindiShortage}`);
