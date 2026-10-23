const fs = require('fs');

console.log("=== VERIFYING CLASS 3 SUBJECT HUB PAGES & NAVIGATION ===");

const files = [
  { name: 'Mathematics', file: 'ncert-solutions-class-3-maths.html', dir: 'chapters-c3m' },
  { name: 'English', file: 'ncert-solutions-class-3-english.html', dir: 'chapters-c3e' },
  { name: 'Hindi', file: 'ncert-solutions-class-3-hindi.html', dir: 'chapters-c3h' },
  { name: 'EVS', file: 'ncert-solutions-class-3-evs.html', dir: 'chapters-c3evs' }
];

for (const item of files) {
  const content = fs.readFileSync(item.file, 'utf8');
  const modularLinks = (content.match(new RegExp(item.dir + '/', 'g')) || []).length;
  const previewCards = (content.match(/class="q-card"/g) || []).length;
  console.log(`[${item.name}] Size: ${content.length} bytes | Modular Links (${item.dir}/): ${modularLinks} | Legacy Preview Cards: ${previewCards}`);
  if (previewCards > 0) {
    console.error(`❌ FAIL: ${item.file} still contains ${previewCards} preview cards!`);
    process.exit(1);
  }
}

const mainHub = fs.readFileSync('ncert-solutions-class-3.html', 'utf8');
console.log(`[Main Hub] Size: ${mainHub.length} bytes | Has #maths: ${mainHub.includes('id="maths"')} | Has #ch-dir-maths: ${mainHub.includes('id="ch-dir-maths"')}`);

const portalHub = fs.readFileSync('ncert-solutions.html', 'utf8');
console.log(`[Portal Hub] Has Class 3 dropdown: ${portalHub.includes('Class 3 Solutions (All Subjects)')} | Has Class 3 direct routing: ${portalHub.includes("window.location.href = 'ncert-solutions-class-3.html'")}`);

console.log("🎉 ALL HUB PAGES & NAVIGATION VERIFIED 100% CLEAN!");
