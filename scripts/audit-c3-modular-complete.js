const fs = require('fs');
const path = require('path');

console.log("================================================================");
console.log("🔍 MASTER AUDIT: CLASS 3 NCERT SOLUTIONS MODULAR CHAPTERS (100%)");
console.log("================================================================\n");

const dirs = [
  { name: 'Mathematics', dir: 'chapters-c3m', expectedFiles: 28, minQs: 682 },
  { name: 'English', dir: 'chapters-c3e', expectedFiles: 22, minQs: 433 },
  { name: 'Hindi', dir: 'chapters-c3h', expectedFiles: 32, minQs: 478 },
  { name: 'EVS / World Around Us', dir: 'chapters-c3evs', expectedFiles: 36, minQs: 590 }
];

let totalFiles = 0;
let totalQs = 0;
let totalCbqs = 0;
let totalRubrics = 0;
let totalSchemas = 0;
let failedTests = 0;
let passedTests = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failedTests++;
  }
}

// 1. Audit each subject directory
dirs.forEach(d => {
  const dirPath = path.join(__dirname, '..', d.dir);
  console.log(`[Subject Audit] Checking ${d.name} (${d.dir})...`);
  
  assert(fs.existsSync(dirPath), `Directory ${d.dir} exists`);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));
  assert(files.length === d.expectedFiles, `${d.name} has ${files.length} files (expected ${d.expectedFiles})`);
  
  let subQs = 0;
  let subCbqs = 0;
  let subRubrics = 0;
  let subErrors = 0;

  files.forEach(f => {
    const filePath = path.join(dirPath, f);
    const content = fs.readFileSync(filePath, 'utf8');
    const qCount = (content.match(/class="q-card/g) || []).length;
    const cbqCount = (content.match(/class="cbq-card/g) || []).length;
    const rubricCount = (content.match(/class="marking-row/g) || []).length;
    const undefCount = (content.match(/undefined/g) || []).length;
    const nanCount = (content.match(/NaN/g) || []).length;
    const objCount = (content.match(/\[object Object\]/g) || []).length;

    subQs += qCount;
    subCbqs += cbqCount;
    subRubrics += rubricCount;

    // Schema check
    const schemas = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
    totalSchemas += schemas.length;
    schemas.forEach(s => {
      const jsonStr = s.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
      try {
        JSON.parse(jsonStr);
      } catch (e) {
        subErrors++;
      }
    });

    if (undefCount > 0 || nanCount > 0 || objCount > 0 || qCount === 0) {
      subErrors++;
    }
  });

  totalFiles += files.length;
  totalQs += subQs;
  totalCbqs += subCbqs;
  totalRubrics += subRubrics;

  assert(subErrors === 0, `${d.name} has zero corruptions (undefined/NaN/[object Object])`);
  assert(subQs >= d.minQs, `${d.name} question count = ${subQs} (meets or exceeds target of ${d.minQs})`);
});

// 2. Class 3 Central Hub Audit
console.log("\n[Hub Audit] Checking Class 3 Central Hub (ncert-solutions-class-3.html)...");
const hubPath = path.join(__dirname, '..', 'ncert-solutions-class-3.html');
assert(fs.existsSync(hubPath), "ncert-solutions-class-3.html exists");
const hubContent = fs.readFileSync(hubPath, 'utf8');
assert(hubContent.includes('Quick Direct Chapter Directory'), "Hub includes Quick Direct Chapter Directory");
assert(hubContent.includes('chapters-c3m/maths-mela-ch1.html'), "Hub links to Maths Mela Chapter 1");
assert(hubContent.includes('chapters-c3e/santoor-ch1.html'), "Hub links to Santoor Chapter 1");
assert(hubContent.includes('chapters-c3h/veena-ch1.html'), "Hub links to Veena Chapter 1");
assert(hubContent.includes('chapters-c3evs/wondrous-world-ch1.html'), "Hub links to Our Wondrous World Chapter 1");

// 3. Sitemap Audit
console.log("\n[Sitemap Audit] Checking sitemap.xml...");
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
assert(fs.existsSync(sitemapPath), "sitemap.xml exists");
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
assert(sitemapContent.includes('https://olympiadquiz.org/chapters-c3m/maths-mela-ch1.html'), "sitemap.xml includes Class 3 Maths chapter URL");
assert(sitemapContent.includes('https://olympiadquiz.org/chapters-c3e/santoor-ch1.html'), "sitemap.xml includes Class 3 English chapter URL");
assert(sitemapContent.includes('https://olympiadquiz.org/chapters-c3h/veena-ch1.html'), "sitemap.xml includes Class 3 Hindi chapter URL");
assert(sitemapContent.includes('https://olympiadquiz.org/chapters-c3evs/wondrous-world-ch1.html'), "sitemap.xml includes Class 3 EVS chapter URL");

console.log("\n================================================================");
console.log(`TOTAL STATS ACROSS ALL MODULAR CHAPTERS:`);
console.log(`- Total Standalone Chapter Files: ${totalFiles} (Target: 118)`);
console.log(`- Total Exercise Questions: ${totalQs} (NCERT Book Target: 2,183)`);
console.log(`- Total Competency Case Studies (CBQ): ${totalCbqs} (Target: 118)`);
console.log(`- Total Educational Solution Items: ${totalQs + totalCbqs}`);
console.log(`- Total CBSE Step Marking Rows: ${totalRubrics}`);
console.log(`- Total Valid Schema.org JSON-LD Blocks: ${totalSchemas}`);
console.log(`AUDIT RESULT: ${passedTests} PASSED | ${failedTests} FAILED`);
console.log("================================================================");

if (failedTests === 0 && totalFiles === 118 && totalQs >= 2183) {
  console.log("🎉 100% COMPLETE CLASS 3 MODULAR NCERT SOLUTIONS CERTIFIED!");
} else {
  console.error("❌ AUDIT FAILED!");
  process.exit(1);
}
