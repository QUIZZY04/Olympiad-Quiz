// scripts/inspect-c6-modules.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const DIRS = [
  { name: 'Maths Modules', dir: 'chapters-c6m' },
  { name: 'Science Modules', dir: 'chapters-c6s' },
  { name: 'SST Modules', dir: 'chapters-c6sst' },
  { name: 'English Modules', dir: 'chapters-c6eng' },
  { name: 'Hindi Modules', dir: 'chapters-c6h' }
];

console.log('=== INSPECTING CLASS 6 STANDALONE MODULES ===');

for (const d of DIRS) {
  const dirPath = path.join(ROOT, d.dir);
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${d.dir}`);
    continue;
  }
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));
  let totalCards = 0;
  let totalCBQ = 0;
  const fileSummary = [];

  for (const f of files) {
    const html = fs.readFileSync(path.join(dirPath, f), 'utf8');
    const q = (html.match(/<div class="q-card"/g) || []).length;
    const cbq = (html.match(/<div class="cbq-card"/g) || []).length;
    totalCards += q;
    totalCBQ += cbq;
    fileSummary.push(`${f}: ${q}Q`);
  }

  console.log(`\n📁 ${d.name} (${d.dir}): ${files.length} files | ${totalCards} q-cards | ${totalCBQ} cbq-cards`);
  console.log(`   Sample: ${fileSummary.slice(0, 10).join(', ')} ...`);
}
