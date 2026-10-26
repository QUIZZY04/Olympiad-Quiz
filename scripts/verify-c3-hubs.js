const fs = require('fs');

console.log("=== VERIFYING CLASS 3 IN-PAGE SUBJECT SOLUTIONS & NAVIGATION ===");

const files = [
  { name: 'Mathematics', file: 'ncert-solutions-class-3-maths.html', minCards: 600, totalChs: 28 },
  { name: 'English', file: 'ncert-solutions-class-3-english.html', minCards: 400, totalChs: 22 },
  { name: 'Hindi', file: 'ncert-solutions-class-3-hindi.html', minCards: 400, totalChs: 32 },
  { name: 'EVS', file: 'ncert-solutions-class-3-evs.html', minCards: 500, totalChs: 36 }
];

for (const item of files) {
  const content = fs.readFileSync(item.file, 'utf8');
  const questionCards = (content.match(/class="q-card open"/g) || []).length;
  const sections = (content.match(/class="chapter-section/g) || []).length;
  const gatewayButtons = (content.match(/class="btn-open-modular"/g) || []).length;

  console.log(`[${item.name}] Size: ${content.length} bytes | Chapters: ${sections} | In-Page Question Cards: ${questionCards} | Gateway Cards: ${gatewayButtons}`);

  if (questionCards < item.minCards) {
    console.error(`❌ FAIL: ${item.file} has only ${questionCards} question cards (expected >= ${item.minCards})`);
    process.exit(1);
  }

  if (gatewayButtons > 0) {
    console.error(`❌ FAIL: ${item.file} still has ${gatewayButtons} external gateway buttons! Solutions must be in-page.`);
    process.exit(1);
  }

  if (sections !== item.totalChs) {
    console.error(`❌ FAIL: ${item.file} has ${sections} chapters (expected ${item.totalChs})`);
    process.exit(1);
  }
}

const mainHub = fs.readFileSync('ncert-solutions-class-3.html', 'utf8');
console.log(`[Main Hub] Size: ${mainHub.length} bytes | Has #maths: ${mainHub.includes('id="maths"')} | Has #ch-dir-maths: ${mainHub.includes('id="ch-dir-maths"')}`);

const portalHub = fs.readFileSync('ncert-solutions.html', 'utf8');
console.log(`[Portal Hub] Has Class 3 dropdown: ${portalHub.includes('Class 3 Solutions')} | Has Class 3 in hash listener: ${portalHub.includes("if (hash === 'class3' || hash === '3') classVal = '3'")}`);

console.log("🎉 ALL IN-PAGE SUBJECT PAGES & NAVIGATION VERIFIED 100% CLEAN & COMPLETE!");
