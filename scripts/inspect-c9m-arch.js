const fs = require('fs');
const path = require('path');

const chFiles = fs.readdirSync('chapters-c9m')
  .filter(f => f.startsWith('ch') && f.endsWith('.html'))
  .sort((a,b) => parseInt(a.replace(/\D/g, '')) - parseInt(b.replace(/\D/g, '')));

for (const file of chFiles) {
  const content = fs.readFileSync(path.join('chapters-c9m', file), 'utf8');
  const titleMatch = content.match(/<h2>(.*?)<\/h2>/);
  const title = titleMatch ? titleMatch[1] : 'No title';
  const cardRegex = /<div class="q-card"\s+id="([^"]+)">/g;
  const ids = [];
  let m;
  while ((m = cardRegex.exec(content)) !== null) {
    ids.push(m[1]);
  }
  const svgCount = (content.match(/<svg/g) || []).length;
  const mathDiagramCount = (content.match(/<div class="math-diagram-wrap"/g) || []).length;
  console.log(`${file}: "${title}" | ${ids.length} questions | ${mathDiagramCount} math diagrams | ${svgCount} total SVGs | First: ${ids[0]}`);
}
