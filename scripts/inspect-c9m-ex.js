const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c9m');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.sort((a, b) => {
  const na = parseInt(a.replace(/\D/g, ''));
  const nb = parseInt(b.replace(/\D/g, ''));
  return na - nb;
});

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const exDivs = content.match(/<div class="ex-div">[\s\S]*?<\/div>/g) || [];
  console.log(`${f}: ${exDivs.map(e => e.replace(/<[^>]+>/g, '').trim()).join(' | ')}`);
});
