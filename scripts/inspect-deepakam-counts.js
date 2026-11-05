const fs = require('fs');
const s = fs.readFileSync('ncert-solutions-class-6-sanskrit.html', 'utf8');

for (let i = 1; i <= 16; i++) {
  const chId = `ch${i}`;
  const m = s.match(new RegExp(`<section id="${chId}"[\\s\\S]*?(?=<section id="|<!-- ===|</div>\\s*<!-- RUCHIRA|$)`));
  if (m) {
    const qMatches = m[0].match(/<div class="q-card/g) || [];
    const cbqMatches = m[0].match(/<div class="cbq-card/g) || [];
    const qNums = (m[0].match(/<div class="q-num">([^<]+)<\/div>/g) || []).map(x => x.replace(/<[^>]+>/g, '').trim());
    console.log(`ch${i}: ${qMatches.length} Qs, ${cbqMatches.length} CBQs. Existing QNums: ${qNums.join(', ')}`);
  } else {
    console.log(`ch${i}: NOT FOUND`);
  }
}
