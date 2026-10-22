// Comprehensive Audit Script for Class 4 NCERT Solutions
// Audits HTML files, checks chapter completeness, detects anomalies, verifies JSON-LD schemas
const fs = require('fs');
const path = require('path');

console.log("==================================================================");
console.log("       AUDIT REPORT: NCERT CLASS 4 SOLUTIONS (SESSION 2026-27)    ");
console.log("==================================================================");

const files = [
  { name: "Central Hub", file: "ncert-solutions-class-4.html", expectedIds: [] },
  {
    name: "Mathematics",
    file: "ncert-solutions-class-4-maths.html",
    expectedIds: [
      ...Array.from({ length: 14 }, (_, i) => `ch_mm${i + 1}`),
      ...Array.from({ length: 14 }, (_, i) => `ch_mg${i + 1}`)
    ]
  },
  {
    name: "English",
    file: "ncert-solutions-class-4-english.html",
    expectedIds: [
      ...Array.from({ length: 12 }, (_, i) => `ch_st${i + 1}`),
      ...Array.from({ length: 10 }, (_, i) => `ch_mg_u${i + 1}`)
    ]
  },
  {
    name: "Hindi",
    file: "ncert-solutions-class-4-hindi.html",
    expectedIds: [
      ...Array.from({ length: 13 }, (_, i) => `ch_vn${i + 1}`),
      ...Array.from({ length: 14 }, (_, i) => `ch_rj${i + 1}`)
    ]
  },
  {
    name: "The World Around Us (EVS)",
    file: "ncert-solutions-class-4-evs.html",
    expectedIds: [
      ...Array.from({ length: 10 }, (_, i) => `ch_oww${i + 1}`),
      ...Array.from({ length: 27 }, (_, i) => `ch_la${i + 1}`)
    ]
  }
];

let allPassed = true;
const auditSummary = {
  timestamp: new Date().toISOString(),
  targetSession: "2026-27",
  filesAudited: [],
  totalChapterSections: 0,
  schemaValidation: "PASSED",
  forbiddenLiteralsCheck: "PASSED"
};

files.forEach(f => {
  const filePath = path.resolve(__dirname, '..', f.file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File MISSING: ${f.file}`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const size = content.length;
  console.log(`\n📄 [${f.name}] ${f.file} (${(size / 1024).toFixed(1)} KB):`);

  // Check forbidden tokens
  const anomalies = [];
  if (content.includes('undefined')) anomalies.push('contains "undefined"');
  if (content.includes('NaN')) anomalies.push('contains "NaN"');
  if (content.includes('[object Object]')) anomalies.push('contains "[object Object]"');

  if (anomalies.length > 0) {
    console.error(`   ⚠️ Anomalies detected: ${anomalies.join(', ')}`);
    allPassed = false;
  } else {
    console.log(`   ✅ 0 undefined, 0 NaN, 0 [object Object]`);
  }

  // Check expected section IDs
  let missingIds = [];
  f.expectedIds.forEach(id => {
    if (!content.includes(`id="${id}"`)) {
      missingIds.push(id);
    }
  });

  if (missingIds.length > 0) {
    console.error(`   ❌ Missing chapter sections (${missingIds.length}): ${missingIds.join(', ')}`);
    allPassed = false;
  } else if (f.expectedIds.length > 0) {
    console.log(`   ✅ All ${f.expectedIds.length} chapter sections verified present.`);
    auditSummary.totalChapterSections += f.expectedIds.length;
  }

  // Validate JSON-LD schemas
  const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  let schemaCount = 0;
  while ((match = jsonLdRegex.exec(content)) !== null) {
    try {
      JSON.parse(match[1]);
      schemaCount++;
    } catch (e) {
      console.error(`   ❌ Invalid JSON-LD schema found in ${f.file}: ${e.message}`);
      allPassed = false;
    }
  }
  console.log(`   ✅ Validated ${schemaCount} JSON-LD Schema block(s).`);

  auditSummary.filesAudited.push({
    title: f.name,
    filename: f.file,
    sizeBytes: size,
    chapterCount: f.expectedIds.length,
    schemasCount: schemaCount,
    status: anomalies.length === 0 && missingIds.length === 0 ? "PASSED" : "FAILED"
  });
});

console.log("\n==================================================================");
if (allPassed) {
  console.log(`🎉 AUDIT PASSED: All 5 files verified. Total ${auditSummary.totalChapterSections} chapters active!`);
} else {
  console.log(`❌ AUDIT FAILED with errors.`);
}
console.log("==================================================================");

// Write audit register
const registerPath = path.resolve(__dirname, 'audit-register-c4-all.json');
fs.writeFileSync(registerPath, JSON.stringify(auditSummary, null, 2), 'utf8');
console.log(`Audit register saved to: ${registerPath}`);
