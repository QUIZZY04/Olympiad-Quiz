// scripts/inspect-c9-structure.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const C9_FILES = {
  maths: 'ncert-solutions-class-9-maths.html',
  science: 'ncert-solutions-class-9-science.html',
  socialScience: 'ncert-solutions-class-9-social-science.html',
  hindi: 'ncert-solutions-class-9-hindi.html',
  english: 'ncert-solutions-class-9-english.html'
};

const CHAPTER_DIRS = {
  maths: 'chapters-c9m',
  science: 'chapters-c9s',
  socialScience: 'chapters-c9sst',
  hindi: 'chapters-c9h',
  english: 'chapters-c9e'
};

console.log('=== CLASS 9 MONOLITHIC HTML FILES ===');
for (const [subj, file] of Object.entries(C9_FILES)) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.log(`${subj}: File NOT found: ${file}`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const sections = html.match(/<section[^>]+id="([^"]+)"/g) || [];
  const qCards = html.match(/<div class="q-card"/g) || [];
  const cbqCards = html.match(/<div class="cbq-card"/g) || [];
  const fetches = html.match(/fetch\(['"`][^'"`]+['"`]\)/g) || [];
  
  console.log(`${subj} (${file}):`);
  console.log(`  File size: ${(html.length / 1024).toFixed(1)} KB`);
  console.log(`  Sections (${sections.length}):`, sections.slice(0, 5).join(', '), sections.length > 5 ? '...' : '');
  console.log(`  Total q-cards: ${qCards.length}`);
  console.log(`  Total cbq-cards: ${cbqCards.length}`);
  console.log(`  Dynamic fetches: ${fetches.length ? fetches.slice(0, 3).join(', ') : 'none'}`);
}

console.log('\n=== CLASS 9 CHAPTER DIRECTORIES ===');
for (const [subj, dir] of Object.entries(CHAPTER_DIRS)) {
  const dirPath = path.join(ROOT, dir);
  if (!fs.existsSync(dirPath)) {
    console.log(`${subj}: Dir NOT found: ${dir}`);
    continue;
  }
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));
  let totalCardsInDir = 0;
  for (const f of files) {
    const fHtml = fs.readFileSync(path.join(dirPath, f), 'utf8');
    const c = (fHtml.match(/<div class="q-card"/g) || []).length;
    totalCardsInDir += c;
  }
  console.log(`${subj} (${dir}): ${files.length} html files, ${totalCardsInDir} total q-cards in dir`);
}
