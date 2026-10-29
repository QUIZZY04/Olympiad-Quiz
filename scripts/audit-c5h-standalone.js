const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'chapters-c5h');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let totalQs = 0;
let hasDummy = false;
let duplicatesFound = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  if (content.includes('[अभ्यास प्रश्न')) {
    console.error('DUMMY FOUND in ' + f);
    hasDummy = true;
  }
  const matches = content.match(/<div class="q-text">([\s\S]*?)<\/div>/g) || [];
  totalQs += matches.length;
  
  const seen = new Set();
  matches.forEach(m => {
    const clean = m.replace(/<[^>]+>/g, '').trim();
    if (seen.has(clean)) {
      duplicatesFound.push({ file: f, q: clean });
    }
    seen.add(clean);
  });
});

console.log('Audited ' + files.length + ' chapter files in chapters-c5h/');
console.log('Total Questions across standalone files: ' + totalQs);
console.log('Dummy placeholders found: ' + (hasDummy ? 'YES' : 'NONE (0)'));
console.log('Duplicate questions found: ' + duplicatesFound.length);
