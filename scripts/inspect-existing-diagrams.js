const fs = require('fs');
const path = require('path');

const chFiles = fs.readdirSync('chapters-c10m')
  .filter(f => f.startsWith('ch') && f.endsWith('.html'))
  .sort((a,b) => parseInt(a.replace(/\D/g, '')) - parseInt(b.replace(/\D/g, '')));

for (const file of chFiles) {
  const content = fs.readFileSync(path.join('chapters-c10m', file), 'utf8');
  // find math diagrams
  const diagramMatches = content.match(/<div class="math-diagram-wrap"[\s\S]*?<\/svg>\s*(?:<div[^>]*>.*?<\/div>)?\s*<\/div>/gi) || [];
  const otherSvgMatches = content.match(/<svg(?!\s+viewBox="0 0 24 24")[\s\S]*?<\/svg>/gi) || [];
  console.log(`\n=== ${file} ===`);
  console.log(`math-diagram-wrap count: ${diagramMatches.length}`);
  console.log(`non-toggle svg count: ${otherSvgMatches.length}`);
  if (diagramMatches.length > 0) {
    diagramMatches.forEach((d, idx) => {
      const title = (d.match(/<div[^>]*>(.*?)<\/div>/) || [])[1] || 'No title';
      console.log(`  Diagram ${idx+1}: ${title.substring(0, 80)}`);
    });
  }
}
