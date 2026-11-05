const fs = require('fs');
const path = require('path');

const chFiles = fs.readdirSync('chapters-c10m')
  .filter(f => f.startsWith('ch') && f.endsWith('.html'))
  .sort((a,b) => parseInt(a.replace(/\D/g, '')) - parseInt(b.replace(/\D/g, '')));

for (const file of chFiles) {
  const content = fs.readFileSync(path.join('chapters-c10m', file), 'utf8');
  const cardRegex = /<div class="q-card"\s+id="([^"]+)">/g;
  const ids = [];
  let m;
  while ((m = cardRegex.exec(content)) !== null) {
    ids.push(m[1]);
  }
  // Check if svg exists already
  const svgCount = (content.match(/<svg/g) || []).length;
  // Also check for "Fig" or "figure"
  const figMatches = content.match(/Fig\.\s*\d+\.\d+|Figure|In the given figure|In Fig/gi) || [];
  console.log(`${file}: ${ids.length} questions, ${svgCount} existing SVGs, ${figMatches.length} figure references. First: ${ids[0]}, Last: ${ids[ids.length - 1]}`);
}
