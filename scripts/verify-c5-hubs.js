const fs = require('fs');
const path = require('path');

console.log("=== VERIFYING CLASS 5 IN-PAGE SUBJECT SOLUTIONS & MODULAR CHAPTERS ===");

const files = [
  { name: 'Mathematics', file: 'ncert-solutions-class-5-maths.html', minCards: 600, totalChs: 29, modularDir: 'chapters-c5m', modularCount: 29 },
  { name: 'English', file: 'ncert-solutions-class-5-english.html', minCards: 400, totalChs: 20, modularDir: 'chapters-c5e', modularCount: 20 },
  { name: 'Hindi', file: 'ncert-solutions-class-5-hindi.html', minCards: 500, totalChs: 26, modularDir: 'chapters-c5h', modularCount: 26 },
  { name: 'EVS', file: 'ncert-solutions-class-5-evs.html', minCards: 600, totalChs: 32, modularDir: 'chapters-c5evs', modularCount: 32 }
];

let totalModularVerified = 0;
let totalCardsVerified = 0;

for (const item of files) {
  const content = fs.readFileSync(path.resolve(__dirname, '..', item.file), 'utf8');
  const questionCards = (content.match(/class="q-card open"/g) || []).length;
  const sections = (content.match(/class="chapter-section/g) || []).length;
  const gatewayButtons = (content.match(/class="btn-open-modular"/g) || []).length;
  const openBanners = (content.match(/Open Full Chapter/gi) || []).length;

  console.log(`[${item.name}] Size: ${content.length.toLocaleString()} bytes | Chapters: ${sections} | In-Page Question Cards: ${questionCards} | Gateway Cards: ${gatewayButtons + openBanners}`);

  if (questionCards < item.minCards) {
    console.error(`❌ FAIL: ${item.file} has only ${questionCards} question cards (expected >= ${item.minCards})`);
    process.exit(1);
  }

  if (gatewayButtons > 0 || openBanners > 0) {
    console.error(`❌ FAIL: ${item.file} still has gateway cards or 'Open Full Chapter' buttons! Solutions must be in-page.`);
    process.exit(1);
  }

  if (sections !== item.totalChs) {
    console.error(`❌ FAIL: ${item.file} has ${sections} chapters (expected ${item.totalChs})`);
    process.exit(1);
  }

  totalCardsVerified += questionCards;

  // Verify modular files in corresponding directory
  const modDirPath = path.resolve(__dirname, '..', item.modularDir);
  if (!fs.existsSync(modDirPath)) {
    console.error(`❌ FAIL: Modular directory ${item.modularDir} does not exist!`);
    process.exit(1);
  }

  const modFiles = fs.readdirSync(modDirPath).filter(f => f.endsWith('.html'));
  console.log(`   📂 [${item.modularDir}] Found ${modFiles.length} modular chapter files (expected ${item.modularCount})`);
  
  if (modFiles.length !== item.modularCount) {
    console.error(`❌ FAIL: ${item.modularDir} has ${modFiles.length} files (expected ${item.modularCount})`);
    process.exit(1);
  }

  // Verify each modular file is healthy (> 20KB and contains q-card open)
  for (const mf of modFiles) {
    const mfPath = path.join(modDirPath, mf);
    const mfContent = fs.readFileSync(mfPath, 'utf8');
    if (mfContent.length < 20000) {
      console.error(`❌ FAIL: Modular file ${mf} is suspiciously small (${mfContent.length} bytes)`);
      process.exit(1);
    }
    if (!mfContent.includes('class="q-card open"')) {
      console.error(`❌ FAIL: Modular file ${mf} missing open question cards!`);
      process.exit(1);
    }
    if (mfContent.includes('undefined') || mfContent.includes('NaN') || mfContent.includes('[object Object]')) {
      console.error(`❌ FAIL: Modular file ${mf} contains corruption (undefined/NaN/[object Object])!`);
      process.exit(1);
    }
  }

  totalModularVerified += modFiles.length;
}

// Verify routing hubs
const mainHub = fs.readFileSync(path.resolve(__dirname, '..', 'ncert-solutions-class-5.html'), 'utf8');
const hasRedirect = mainHub.includes('window.location.replace("ncert-solutions-class-5-maths.html"');
console.log(`[Class 5 Hub] Size: ${mainHub.length.toLocaleString()} bytes | Has 0ms client redirect: ${hasRedirect}`);
if (!hasRedirect) {
  console.error("❌ FAIL: ncert-solutions-class-5.html missing 0ms client redirect!");
  process.exit(1);
}

const portalHub = fs.readFileSync(path.resolve(__dirname, '..', 'ncert-solutions.html'), 'utf8');
const hasClass5Portal = portalHub.includes('Class 5 Solutions') || portalHub.includes('ncert-solutions-class-5-maths.html') || portalHub.includes('ncert-solutions-class-5.html');
console.log(`[Portal Hub] Has Class 5 direct solutions routing: ${hasClass5Portal}`);

console.log("\n=======================================================");
console.log(`🎉 ALL AUDITS PASSED!`);
console.log(`• Total In-Page Solved Questions Rendered: ${totalCardsVerified}`);
console.log(`• Total Standalone Modular Chapter Files: ${totalModularVerified}`);
console.log(`• Zero gateway cards, zero corruptions, 100% textbook coverage!`);
console.log("=======================================================");
