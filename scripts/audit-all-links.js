const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const brokenLinks = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match href="something"
  const hrefMatches = content.matchAll(/href=["']([^"'#]+)(?:#[^"']*)?["']/gi);
  for (const match of hrefMatches) {
    const rawHref = match[1];
    if (rawHref.startsWith('http://') || rawHref.startsWith('https://') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('javascript:') || rawHref === '') {
      continue;
    }
    
    // Local file
    let target = rawHref.split('?')[0];
    if (target.startsWith('/')) {
      target = target.substring(1);
    }
    if (target === '') target = 'index.html';

    if (!fs.existsSync(target)) {
      brokenLinks.push({
        sourceFile: f,
        target,
        fullMatch: match[0]
      });
    }
  }
});

console.log('Total broken link references found:', brokenLinks.length);
const uniqueTargets = [...new Set(brokenLinks.map(b => b.target))];
console.log('Unique missing targets:', uniqueTargets);

uniqueTargets.forEach(t => {
  const sources = brokenLinks.filter(b => b.target === t).map(b => b.sourceFile);
  console.log(`- ${t} (referenced in ${sources.length} files: ${sources.slice(0, 5).join(', ')}${sources.length > 5 ? '...' : ''})`);
});
