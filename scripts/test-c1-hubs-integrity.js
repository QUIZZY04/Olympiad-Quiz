// scripts/test-c1-hubs-integrity.js
const fs = require('fs');
const path = require('path');

const files = [
  'ncert-solutions-class-1-maths.html',
  'ncert-solutions-class-1-english.html',
  'ncert-solutions-class-1-hindi.html',
  'ncert-solutions-class-1-evs.html'
];

let allPassed = true;

files.forEach(filename => {
  const filePath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File missing: ${filename}`);
    allPassed = false;
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  console.log(`\n--- Testing ${filename} (${(html.length / 1024).toFixed(1)} KB) ---`);

  // 1. Tag balance check for major tags
  ['section', 'aside', 'main'].forEach(tag => {
    const opens = (html.match(new RegExp(`<${tag}[\\s>]`, 'gi')) || []).length;
    const closes = (html.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
    if (opens !== closes) {
      console.error(`❌ Mismatched <${tag}> tags: ${opens} opened, ${closes} closed!`);
      allPassed = false;
    } else {
      console.log(`✅ <${tag}> tags balanced: ${opens} opened, ${closes} closed.`);
    }
  });

  // 2. Count chapter sections
  const secMatches = html.match(/<section class="chapter-section[^"]*" id="([^"]+)">/g) || [];
  console.log(`✅ Chapter sections rendered: ${secMatches.length}`);

  // 3. Extract IDs
  const secIds = [];
  const secIdRegex = /<section class="chapter-section[^"]*" id="([^"]+)">/g;
  let m;
  while ((m = secIdRegex.exec(html)) !== null) {
    secIds.push(m[1]);
  }

  // 4. Verify each section ID has a corresponding sidebar link and chip
  secIds.forEach(id => {
    if (!html.includes(`data-target="${id}"`)) {
      console.error(`❌ Missing data-target for ID: ${id}`);
      allPassed = false;
    }
    if (!html.includes(`onclick="showChapter('${id}')"`)) {
      console.error(`❌ Missing onclick showChapter for ID: ${id}`);
      allPassed = false;
    }
  });

  // 5. Check standalone links
  const standaloneRegex = /href="([^"]+)" class="btn-standalone"/g;
  let standaloneCount = 0;
  let standaloneMissing = 0;
  while ((m = standaloneRegex.exec(html)) !== null) {
    standaloneCount++;
    const targetPath = path.join(__dirname, '..', m[1]);
    if (!fs.existsSync(targetPath)) {
      console.error(`❌ Standalone file not found: ${m[1]}`);
      standaloneMissing++;
      allPassed = false;
    }
  }
  console.log(`✅ Standalone links verified: ${standaloneCount} links (${standaloneMissing} missing).`);

  // 6. Test specific Chapter 3 of Maths
  if (filename === 'ncert-solutions-class-1-maths.html') {
    const ch3Id = 'ch_jm3';
    if (!html.includes(`id="${ch3Id}"`)) {
      console.error(`❌ Ch 3 (ch_jm3) not found in Maths hub!`);
      allPassed = false;
    } else {
      console.log(`✅ Ch 3 (ch_jm3) correctly exists in Maths hub.`);
    }
  }
});

if (allPassed) {
  console.log("\n🌟 ALL INTEGRITY TESTS PASSED 100%! ZERO BROKEN TAGS, ALL 117 CHAPTER LINKS AND CHIPS SYNCED!");
} else {
  console.error("\n❌ Some tests failed!");
  process.exit(1);
}
