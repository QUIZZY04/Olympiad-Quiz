// scripts/inspect-c8-detailed.js
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const files = [
  { sub: 'Mathematics', file: 'ncert-solutions-class-8-maths.html' },
  { sub: 'Science', file: 'ncert-solutions-class-8-science.html' },
  { sub: 'Social Science', file: 'ncert-solutions-class-8-sst.html' }
];

console.log('=== CLASS 8 DETAILED INSPECTION ===\n');

files.forEach(({ sub, file }) => {
  const fPath = path.join(root, file);
  if (!fs.existsSync(fPath)) {
    console.log(`[${sub}] Missing file: ${file}`);
    return;
  }
  const html = fs.readFileSync(fPath, 'utf8');
  const sections = [...html.matchAll(/<section[^>]*class="[^"]*chapter-section[^"]*"[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)];
  
  let totalQ = 0;
  let totalCBQ = 0;
  
  console.log(`\n======================================================`);
  console.log(`📘 ${sub.toUpperCase()} (${file}) — ${sections.length} Sections`);
  console.log(`======================================================`);

  sections.forEach((sec, idx) => {
    const id = sec[1];
    const content = sec[2];
    const h2M = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const title = h2M ? h2M[1].replace(/<[^>]+>/g, '').trim() : id;
    const qCards = content.match(/class="[^"]*q-card[^"]*"/g) || [];
    const cbqCards = content.match(/class="[^"]*cbq-card[^"]*"/g) || [];
    const exDivs = [...content.matchAll(/class="[^"]*ex-div[^"]*"[^>]*>([\s\S]*?)<\/div>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

    totalQ += qCards.length;
    totalCBQ += cbqCards.length;

    console.log(`  ${(idx + 1).toString().padStart(2, ' ')}. [${id}] ${title.substring(0, 50).padEnd(52, ' ')} : ${qCards.length.toString().padStart(2, ' ')} Qs, ${cbqCards.length} CBQs ${exDivs.length > 0 ? `| Exs: ${exDivs.slice(0, 2).join('; ')}` : ''}`);
  });

  console.log(`\nTOTAL: ${totalQ} Qs + ${totalCBQ} CBQs = ${totalQ + totalCBQ} Total Items`);
});
