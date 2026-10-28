const fs = require('fs');
const content = fs.readFileSync('chapters-c10m/ch14.html', 'utf8');
const cardRegex = /<div class="q-card"\s+id="([^"]+)">([\s\S]*?)<div class="q-text">([\s\S]*?)<\/div>/g;
let m;
while ((m = cardRegex.exec(content)) !== null) {
  console.log(`[${m[1]}] ${m[3].substring(0, 80)}...`);
}
