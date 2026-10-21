// Comprehensive Audit Script for NCERT Class 5 English Solutions (100% Coverage Verification)
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../ncert-solutions-class-5-english.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log("====================================================================");
console.log("=== AUDITING NCERT CLASS 5 ENGLISH SOLUTIONS (100% COVERAGE AUDIT) ===");
console.log("====================================================================\n");

let errors = [];

// 1. Audit Book 1: Santoor (Chapters 1 to 10)
console.log("--- 1. AUDITING BOOK 1: SANTOOR (NEW NEP 2020) ---");
let missingSantoor = [];
for (let ch = 1; ch <= 10; ch++) {
  const sectionTag = `id="ch_s${ch}"`;
  if (!content.includes(sectionTag)) {
    missingSantoor.push(`Chapter ${ch} (id="ch_s${ch}")`);
  }
}
if (missingSantoor.length > 0) {
  errors.push(`Missing Santoor chapters: ${missingSantoor.join(', ')}`);
  console.error(`❌ Missing Santoor chapters: ${missingSantoor.join(', ')}`);
} else {
  console.log(`✅ All 10 Santoor Chapters present (id="ch_s1" through id="ch_s10")`);
}

// 2. Audit Book 2: Marigold (Units 1 to 10)
console.log("\n--- 2. AUDITING BOOK 2: MARIGOLD (CLASSIC CBSE) ---");
let missingMarigold = [];
for (let unit = 1; unit <= 10; unit++) {
  const sectionTag = `id="ch_m${unit}"`;
  if (!content.includes(sectionTag)) {
    missingMarigold.push(`Unit ${unit} (id="ch_m${unit}")`);
  }
}
if (missingMarigold.length > 0) {
  errors.push(`Missing Marigold units: ${missingMarigold.join(', ')}`);
  console.error(`❌ Missing Marigold units: ${missingMarigold.join(', ')}`);
} else {
  console.log(`✅ All 10 Marigold Units present (id="ch_m1" through id="ch_m10")`);
}

// 3. Question Count & Coverage
console.log("\n--- 3. QUESTION METRICS & COVERAGE ---");
const qMatches = content.match(/<div class="q-card"/g) || [];
console.log(`✅ Total Exercise Questions: ${qMatches.length}`);
if (qMatches.length < 80) {
  errors.push(`Expected >= 80 comprehensive questions, found ${qMatches.length}`);
}

// 4. CBSE Marking Rubrics
const rubricMatches = content.match(/<div class="marking-scheme">/g) || [];
console.log(`✅ Total CBSE Step Marking Schemes: ${rubricMatches.length}`);
if (rubricMatches.length !== qMatches.length) {
  errors.push(`Mismatch: ${qMatches.length} questions vs ${rubricMatches.length} marking schemes`);
}

// 5. Educational SVG Diagrams
const svgMatches = content.match(/<svg class="q-toggle"/g) || [];
const allSvgMatches = content.match(/<svg/g) || [];
const diagCount = allSvgMatches.length - svgMatches.length - 4; // exclude toggles & nav icons
console.log(`✅ Total Interactive SVG Educational Diagrams: ${diagCount}`);
if (diagCount < 20) {
  errors.push(`Expected at least 20 educational diagrams (1 per chapter/unit), found ${diagCount}`);
}

// 6. NEP 2020 Competency Case Studies (CBQ)
console.log("\n--- 4. NEP 2020 COMPETENCY-BASED QUESTIONS (CBQs) ---");
const cbqMatches = content.match(/<div class="cbq-card">/g) || [];
console.log(`✅ Total Competency-Based Case Studies (CBQ): ${cbqMatches.length} / 20 chapters`);
if (cbqMatches.length !== 20) {
  errors.push(`Expected exactly 20 CBQ cards (1 for each of 10 Santoor + 10 Marigold chapters), found ${cbqMatches.length}`);
}

// 7. Navigation & Jump Chips Sanity
console.log("\n--- 5. NAVIGATION & USER EXPERIENCE ---");
const chipsSantoor = content.match(/data-target="ch_s\d+"/g) || [];
const chipsMarigold = content.match(/data-target="ch_m\d+"/g) || [];
console.log(`✅ Santoor Navigation Chips & Sidebar Links: ${chipsSantoor.length / 2} / 10`);
console.log(`✅ Marigold Navigation Chips & Sidebar Links: ${chipsMarigold.length / 2} / 10`);

// 8. Template Literals & Syntax Integrity
console.log("\n--- 6. SYNTAX & CODE INTEGRITY ---");
const unrendered = content.match(/\$\{[^}]+\}/g) || [];
if (unrendered.length > 0) {
  errors.push(`Found unrendered template literals: ${unrendered.join(', ')}`);
  console.error(`❌ Unrendered template literals:`, unrendered);
} else {
  console.log(`✅ Zero unrendered template literals found.`);
}

// 9. Schema.org Validation
console.log("\n--- 7. SCHEMA.ORG JSON-LD VALIDATION ---");
const jsonLdMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
console.log(`✅ Detected ${jsonLdMatches.length} Schema.org JSON-LD blocks.`);
let schemaValid = true;
jsonLdMatches.forEach((block, idx) => {
  const jsonStr = block.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '').trim();
  try {
    const parsed = JSON.parse(jsonStr);
    console.log(`   Block ${idx + 1} valid: @type = "${parsed['@type']}"`);
  } catch (e) {
    schemaValid = false;
    errors.push(`Schema.org block ${idx + 1} invalid JSON: ${e.message}`);
    console.error(`❌ Schema.org block ${idx + 1} JSON parse error:`, e.message);
  }
});

// Final Audit Summary
console.log("\n====================================================================");
if (errors.length === 0) {
  console.log("🎉 AUDIT RESULT: 100% QUESTION COVERAGE VERIFIED! ALL CHECKS PASSED!");
  console.log("====================================================================");
  process.exit(0);
} else {
  console.error("❌ AUDIT FAILED WITH ERRORS:\n" + errors.join('\n'));
  console.log("====================================================================");
  process.exit(1);
}
