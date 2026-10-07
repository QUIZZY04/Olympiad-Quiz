const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 14; i++) {
  const p = path.join(__dirname, '..', 'chapters-c8m', `ch${i}.html`);
  if (!fs.existsSync(p)) continue;
  const c = fs.readFileSync(p, 'utf8');
  const h2 = (c.match(/<h2>(.*?)<\/h2>/) || [])[1] || '';
  const qs = [...c.matchAll(/<div class="q-text">([\s\S]*?)<\/div>/g)].map(x => x[1].replace(/<[^>]+>/g, '').trim());
  console.log(`Ch ${i}: ${h2} (Total Qs: ${qs.length})`);
  for (let k = 0; k < Math.min(3, qs.length); k++) {
    console.log(`   Q${k+1}: ${qs[k].slice(0, 90)}...`);
  }
}
