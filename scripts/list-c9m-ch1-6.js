const fs = require('fs');

for (let ch = 1; ch <= 6; ch++) {
  const frag = fs.readFileSync(`chapters-c9m/ch${ch}.html`, 'utf8');
  const title = (frag.match(/<h2>(.*?)<\/h2>/) || [])[1] || '';
  const cardRegex = /<div class="q-card"\s+id="([^"]+)">([\s\S]*?)<div class="q-num">([^<]+)<\/div>\s*<div class="q-text">([\s\S]*?)<\/div>/g;
  let m;
  console.log(`\n========================================`);
  console.log(`CHAPTER ${ch}: ${title}`);
  console.log(`========================================`);
  while ((m = cardRegex.exec(frag)) !== null) {
    const id = m[1];
    const qNum = m[3];
    const text = m[4].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&#8722;/g, '-').trim();
    console.log(`[${id}] (${qNum}): ${text.substring(0, 105)}`);
  }
}
