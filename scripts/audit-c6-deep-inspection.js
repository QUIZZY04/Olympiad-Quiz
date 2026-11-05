// scripts/audit-c6-deep-inspection.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const C6_HUBS = [
  { key: 'maths', name: 'Mathematics', file: 'ncert-solutions-class-6-maths.html' },
  { key: 'science', name: 'Science', file: 'ncert-solutions-class-6-science.html' },
  { key: 'sst', name: 'Social Science', file: 'ncert-solutions-class-6-sst.html' },
  { key: 'english', name: 'English', file: 'ncert-solutions-class-6-english.html' },
  { key: 'hindiMalhar', name: 'Hindi (Malhar)', file: 'ncert-solutions-class-6-hindi-malhar.html' },
  { key: 'hindiVasant', name: 'Hindi (Vasant)', file: 'ncert-solutions-class-6-hindi.html' },
  { key: 'sanskrit', name: 'Sanskrit', file: 'ncert-solutions-class-6-sanskrit.html' }
];

const proceduralPatterns = [
  /Explain the core concepts of Chapter/i,
  /Discuss the key themes of Chapter/i,
  /Analyze the principal ideas and learning outcomes/i,
  /Summarize the important formulas and principles/i,
  /Provide a comprehensive overview of Chapter/i,
  /Describe the main highlights and pedagogical objectives/i,
  /Key questions for practice and self-assessment/i,
  /Comprehensive evaluation exercise for Chapter/i
];

console.log('========================================================================');
console.log('CLASS 6 HUBS QUESTION COUNT & CHAPTER BREAKDOWN');
console.log('========================================================================');

for (const item of C6_HUBS) {
  const filePath = path.join(ROOT, item.file);
  if (!fs.existsSync(filePath)) {
    console.log(`[NOT FOUND] ${item.file}`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const sections = html.match(/<section[^>]+id="([^"]+)"[^>]*>/g) || [];
  const qCards = html.match(/class="q-card[^"]*"/g) || [];
  const cbqCards = html.match(/class="cbq-card[^"]*"/g) || [];

  // Check procedural
  let proc = 0;
  for (const pat of proceduralPatterns) {
    const m = html.match(new RegExp(pat.source, 'gi'));
    if (m) proc += m.length;
  }

  console.log(`\n📘 ${item.name} (${item.file}):`);
  console.log(`   File Size: ${(html.length / 1024).toFixed(1)} KB`);
  console.log(`   Sections found: ${sections.length}`);
  console.log(`   Total q-cards: ${qCards.length}`);
  console.log(`   Total cbq-cards: ${cbqCards.length}`);
  console.log(`   Procedural items: ${proc}`);

  // Print chapter by chapter counts
  const chMatches = html.split(/<section[^>]+id="([^"]+)"[^>]*>/);
  // chMatches[0] is preamble, chMatches[1] is id, chMatches[2] is section content, etc.
  const chCounts = [];
  for (let i = 1; i < chMatches.length; i += 2) {
    const sId = chMatches[i];
    const sContent = chMatches[i + 1] || '';
    const cards = (sContent.match(/class="q-card[^"]*"/g) || []).length;
    chCounts.push(`${sId}: ${cards} Qs`);
  }
  console.log(`   Breakdown (${chCounts.length} sections):`);
  console.log(`   ${chCounts.slice(0, 15).join(', ')}`);
  if (chCounts.length > 15) {
    console.log(`   ${chCounts.slice(15).join(', ')}`);
  }
}
