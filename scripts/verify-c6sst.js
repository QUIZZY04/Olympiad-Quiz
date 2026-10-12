// scripts/verify-c6sst.js
const fs = require('fs');
const path = require('path');

const hub = fs.readFileSync(path.join(__dirname, '..', 'ncert-solutions-class-6-sst.html'), 'utf8');
const count = (hub.match(/class="q-card"/g) || []).length;
console.log('Total question cards in hub:', count);

console.log('\n--- Chapter-wise Breakdown ---');
let sum = 0;
for (let i = 1; i <= 14; i++) {
  const ch = fs.readFileSync(path.join(__dirname, '..', 'chapters-c6sst', `ch${i}.html`), 'utf8');
  const chCount = (ch.match(/class="q-card"/g) || []).length;
  console.log(`Chapter ${i.toString().padStart(2, ' ')}: ${chCount} questions & activities`);
  sum += chCount;
}
console.log('Sum of chapters:', sum);
