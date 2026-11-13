const fs = require('fs');

const oldHub = fs.readFileSync('scripts/temp-old-maths.html', 'utf8');

console.log('Old hub length:', oldHub.length);
// Check title
const title = oldHub.match(/<title>([^<]+)<\/title>/);
console.log('Title:', title ? title[1] : 'No title');

// Count cards in old ch1, ch2, ch3
const regex = /<section[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
let m;
while ((m = regex.exec(oldHub)) !== null) {
  const chId = m[1];
  const cards = (m[2].match(/class="q-card"/g) || []).length;
  console.log(`${chId}: ${cards} cards`);
}
