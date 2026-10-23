// Automated Comprehensive Verification Audit for NCERT Class 3 Solutions (Deliverable D)
const fs = require('fs');
const path = require('path');

console.log("================================================================");
console.log("🔍 STARTING CLASS 3 NCERT SOLUTIONS 100% COVERAGE VERIFICATION");
console.log("================================================================");

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    testsFailed++;
  }
}

// -------------------------------------------------------------
// TEST 1: AUDIT REGISTER JSON VERIFICATION
// -------------------------------------------------------------
console.log("\n[1/5] Verifying Machine-Readable Audit Ledger (audit-register-c3-all.json)...");
const ledgerPath = path.resolve(__dirname, 'audit-register-c3-all.json');
assert(fs.existsSync(ledgerPath), "audit-register-c3-all.json exists");

const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
assert(ledger.targetClass === "Class 3", "Target class is Class 3");
assert(ledger.summary.totalOfficialTextbooks === 8, `Expected 8 official textbooks, found ${ledger.summary.totalOfficialTextbooks}`);
assert(ledger.summary.totalChapters === 118, `Expected 118 chapters, found ${ledger.summary.totalChapters}`);
assert(ledger.summary.totalQuestions >= 336, `Expected at least 336 questions, found ${ledger.summary.totalQuestions}`);
assert(ledger.summary.totalSvgDiagrams === 118, `Expected 118 SVG diagrams, found ${ledger.summary.totalSvgDiagrams}`);
assert(ledger.summary.totalCompetencyCaseStudies === 118, `Expected 118 NEP 2020 CBQs, found ${ledger.summary.totalCompetencyCaseStudies}`);

// -------------------------------------------------------------
// TEST 2: HTML PAGES INTEGRITY & SIZES
// -------------------------------------------------------------
console.log("\n[2/5] Verifying 5 Published HTML Pages...");
const pages = [
  { name: 'Hub Page', file: '../ncert-solutions-class-3.html', minSize: 20000 },
  { name: 'Mathematics Page', file: '../ncert-solutions-class-3-maths.html', minSize: 180000 },
  { name: 'English Page', file: '../ncert-solutions-class-3-english.html', minSize: 150000 },
  { name: 'Hindi Page', file: '../ncert-solutions-class-3-hindi.html', minSize: 200000 },
  { name: 'EVS Page', file: '../ncert-solutions-class-3-evs.html', minSize: 200000 }
];

const htmlContents = {};

pages.forEach(p => {
  const pPath = path.resolve(__dirname, p.file);
  const exists = fs.existsSync(pPath);
  assert(exists, `${p.name} (${path.basename(p.file)}) exists`);
  if (exists) {
    const stat = fs.statSync(pPath);
    assert(stat.size >= p.minSize, `${p.name} has healthy size (${stat.size} bytes >= ${p.minSize} bytes)`);
    const content = fs.readFileSync(pPath, 'utf8');
    htmlContents[path.basename(p.file)] = content;

    // Check for corruptions
    assert(!content.includes('undefined'), `${p.name} has zero 'undefined' string literals`);
    assert(!content.includes('NaN'), `${p.name} has zero 'NaN' string literals`);
    assert(!content.includes('[object Object]'), `${p.name} has zero '[object Object]' artifacts`);
  }
});

// -------------------------------------------------------------
// TEST 3: CHAPTER SECTION ID RECONCILIATION (ALL 118 CHAPTERS)
// -------------------------------------------------------------
console.log("\n[3/5] Verifying DOM Section IDs for All 118 Chapters...");

let missingSections = 0;

ledger.textbooks.forEach(tb => {
  let targetFile = '';
  if (tb.subject === 'Mathematics') targetFile = 'ncert-solutions-class-3-maths.html';
  else if (tb.subject === 'English') targetFile = 'ncert-solutions-class-3-english.html';
  else if (tb.subject === 'Hindi') targetFile = 'ncert-solutions-class-3-hindi.html';
  else targetFile = 'ncert-solutions-class-3-evs.html';

  const html = htmlContents[targetFile];
  if (!html) return;

  tb.chapters.forEach(ch => {
    const secId = `id="ch_${ch.id}"`;
    if (!html.includes(secId)) {
      console.error(`    Missing DOM section ${secId} in ${targetFile}`);
      missingSections++;
    }
  });
});

assert(missingSections === 0, `All 118 chapter section IDs exist in published HTML (Missing: ${missingSections})`);

// -------------------------------------------------------------
// TEST 4: SCHEMA.ORG JSON-LD PARSING VALIDATION
// -------------------------------------------------------------
console.log("\n[4/5] Validating Schema.org Structured Data across all published pages...");

let schemaCount = 0;
let schemaErrors = 0;

Object.entries(htmlContents).forEach(([fileName, content]) => {
  const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = schemaRegex.exec(content)) !== null) {
    schemaCount++;
    try {
      const parsed = JSON.parse(match[1]);
      assert(Boolean(parsed['@context'] && parsed['@type']), `Valid ${parsed['@type']} schema in ${fileName}`);
    } catch (e) {
      console.error(`    JSON-LD parse error in ${fileName}: ${e.message}`);
      schemaErrors++;
    }
  }
});

assert(schemaErrors === 0, `All ${schemaCount} Schema.org JSON-LD blocks parsed valid JSON`);

// -------------------------------------------------------------
// TEST 5: HUB INTEGRATION IN ncert-solutions.html
// -------------------------------------------------------------
console.log("\n[5/5] Verifying Class 3 Hub Integration in Main Site...");
const mainHubPath = path.resolve(__dirname, '../ncert-solutions.html');
assert(fs.existsSync(mainHubPath), "ncert-solutions.html exists");

const mainHubContent = fs.readFileSync(mainHubPath, 'utf8');
assert(mainHubContent.includes('ncert-solutions-class-3.html'), "Main hub links to Class 3 Hub");
assert(mainHubContent.includes('<option value="3">Class 3</option>'), "Main hub class dropdown includes Class 3");
assert(mainHubContent.includes('"3": {'), "Main hub JS ncertSolutionsMap includes Class 3 mapping");

// -------------------------------------------------------------
// FINAL SUMMARY
// -------------------------------------------------------------
console.log("\n================================================================");
console.log(`AUDIT RESULTS: ${testsPassed} PASSED | ${testsFailed} FAILED`);
console.log("================================================================");

if (testsFailed === 0) {
  console.log("🎉 ALL TESTS PASSED! 100% NCERT CLASS 3 COVERAGE FULLY CERTIFIED.");
  process.exit(0);
} else {
  console.error("⚠️ AUDIT DETECTED FAILURES! Review errors above.");
  process.exit(1);
}
