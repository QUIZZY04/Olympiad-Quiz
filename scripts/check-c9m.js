const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c9m');

for (let i = 1; i <= 14; i++) {
  const p = path.join(chDir, `ch${i}.html`);
  const content = fs.readFileSync(p, 'utf8');
  const h2 = (content.match(/<h2>(.*?)<\/h2>/) || [])[1] || 'No h2';
  const exs = (content.match(/<div class="ex-div">(.*?)<\/div>/g) || []).map(e => e.replace(/<[^>]+>/g, ''));
  const qs = (content.match(/<div class="q-card"/g) || []).length;
  console.log(`Chapter ${i}: ${h2}`);
  console.log(`  Exercises: ${exs.join(' | ')}`);
  console.log(`  Total Qs: ${qs}, Length: ${content.length}`);
}
