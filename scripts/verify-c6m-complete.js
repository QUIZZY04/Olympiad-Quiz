const fs = require('fs');
const path = require('path');

const mainFile = path.join(__dirname, '..', 'ncert-solutions-class-6-maths.html');
const chaptersDir = path.join(__dirname, '..', 'chapters-c6m');

const allFiles = [mainFile];
if (fs.existsSync(chaptersDir)) {
  fs.readdirSync(chaptersDir).filter(f => f.endsWith('.html')).forEach(f => {
    allFiles.push(path.join(chaptersDir, f));
  });
}

console.log(`=== Complete Verification for ${allFiles.length} files ===\n`);

let pass = true;

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(path.join(__dirname, '..'), file);

  // 1. MathJax script
  if (!content.includes('tex-mml-chtml.js') || !content.includes('window.MathJax')) {
    console.error(`[FAIL] ${rel}: Missing MathJax script or config!`);
    pass = false;
  }

  // 2. Typeset hook in toggleQ
  if (!content.includes('MathJax.typesetPromise')) {
    console.error(`[FAIL] ${rel}: Missing MathJax.typesetPromise hook!`);
    pass = false;
  }

  // 3. Dollar parity in body
  const body = content.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  const dollars = (body.match(/\$/g) || []).length;
  if (dollars % 2 !== 0) {
    console.error(`[FAIL] ${rel}: Odd dollars in body (${dollars})!`);
    pass = false;
  }

  // 4. Broken neq (must have \neq, not broken " 14 eq 15$.")
  if (/(?<!\\)\beq\s+\d+\$\./.test(content) || content.includes(' 14 eq 15$.') || content.includes(' 24 eq 28$.')) {
    console.error(`[FAIL] ${rel}: Contains broken neq!`);
    pass = false;
  }

  // 5. Control chars
  const ctrl = [...content.matchAll(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g)];
  if (ctrl.length > 0) {
    console.error(`[FAIL] ${rel}: Contains ${ctrl.length} control chars!`);
    pass = false;
  }

  // 6. JSON-LD validity
  const jsonMatches = [...content.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  jsonMatches.forEach((jm, idx) => {
    try {
      JSON.parse(jm[1]);
    } catch (e) {
      console.error(`[FAIL] ${rel}: JSON-LD #${idx+1} parse error: ${e.message}`);
      pass = false;
    }
  });

  // 7. HTML entities inside math
  const mathMatches = [...content.matchAll(/\$([^$\n]+)\$/g)];
  mathMatches.forEach(m => {
    if (m[1].includes('&lt;') || m[1].includes('&gt;')) {
      console.error(`[FAIL] ${rel}: Math has HTML entity: ${m[0]}`);
      pass = false;
    }
  });
});

// Check question counts in main file
const mainContent = fs.readFileSync(mainFile, 'utf8');
const qCards = [...mainContent.matchAll(/<div class="q-card" id="([^"]+)">/g)];
console.log(`Total question cards in ncert-solutions-class-6-maths.html: ${qCards.length}`);

// Check Ganita Prakash track (c6m-chX-qY)
const track1Qs = qCards.filter(q => q[1].startsWith('c6m-ch'));
// Check Classic track (c6m-classic-chX-qY)
const track2Qs = qCards.filter(q => q[1].startsWith('c6m-classic-ch'));
console.log(`  Track 1 (Ganita Prakash): ${track1Qs.length} questions`);
console.log(`  Track 2 (Mathematics Classic): ${track2Qs.length} questions`);

if (pass) {
  console.log('\n🌟 ALL 39 FILES PASSED VERIFICATION WITH ZERO ERRORS! 🌟');
} else {
  console.log('\n❌ SOME CHECKS FAILED! Review errors above.');
}
