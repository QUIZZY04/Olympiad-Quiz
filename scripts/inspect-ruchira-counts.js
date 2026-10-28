const fs = require('fs');
const s = fs.readFileSync('ncert-solutions-class-6-sanskrit.html', 'utf8');

for (let i = 1; i <= 15; i++) {
  const chId = `ruchira_ch${i}`;
  const m = s.match(new RegExp(`<section id="${chId}"[\\s\\S]*?(?=<section id="|<!-- ===|</div>\\s*<!-- RUCHIRA|$)`));
  if (m) {
    const qMatches = m[0].match(/<div class="q-card/g) || [];
    const cbqMatches = m[0].match(/<div class="cbq-card/g) || [];
    console.log(`${chId}: ${qMatches.length} Qs, ${cbqMatches.length} CBQs`);
  } else {
    console.log(`${chId}: NOT FOUND`);
  }
}
