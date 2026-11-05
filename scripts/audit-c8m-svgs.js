const fs = require('fs');
const path = require('path');

const chDir = 'chapters-c8m';
const report = [];

for (let i = 1; i <= 14; i++) {
  const file = path.join(chDir, `ch${i}.html`);
  if (!fs.existsSync(file)) {
    report.push({ ch: i, exists: false });
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  const titleMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || content.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : `Chapter ${i}`;
  const svgMatches = content.match(/<svg[\s\S]*?<\/svg>/gi) || [];
  const qMatches = content.match(/class=["']q-card["']/gi) || content.match(/class=["']solution-box["']/gi) || [];
  
  report.push({
    ch: i,
    title,
    svgCount: svgMatches.length,
    qCount: qMatches.length,
    size: content.length
  });
}

console.log('Class 8 Maths Chapter SVG & Question Audit:');
console.table(report);
