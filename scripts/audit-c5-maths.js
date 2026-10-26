// Comprehensive Audit Suite for NCERT Class 5 Mathematics: Maths Mela & Math-Magic
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../ncert-solutions-class-5-maths.html');
console.log("=== AUDITING NCERT CLASS 5 MATHEMATICS (MATHS MELA & MATH-MAGIC) ===");

if (!fs.existsSync(filePath)) {
  console.error("❌ File not found:", filePath);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
let errors = 0;
let warnings = 0;

// 1. File Size Verification
console.log(`[1] File Size: ${(content.length / 1024).toFixed(2)} KB`);
if (content.length < 100000) {
  console.error("❌ File size is suspiciously small for dual-track Maths!");
  errors++;
} else {
  console.log("✅ File size meets full-depth criteria (>100KB).");
}

// 2. Verify all 15 Chapters of Maths Mela (NEP 2020)
console.log("\n[2] Verifying Track 1: Maths Mela (15 Chapters):");
for (let i = 1; i <= 15; i++) {
  const artId = `id="mela-ch${i}"`;
  const chipNav = `data-chnum="${i}"`;
  if (!content.includes(artId)) {
    console.error(`❌ Missing article id for Maths Mela chapter: ${artId}`);
    errors++;
  } else {
    console.log(`   - Ch ${i}: mela-ch${i} present & verified.`);
  }
}

// 3. Verify all 14 Chapters of Math-Magic (Classic CBSE)
console.log("\n[3] Verifying Track 2: Math-Magic (14 Chapters):");
for (let i = 1; i <= 14; i++) {
  const artId = `id="magic-ch${i}"`;
  if (!content.includes(artId)) {
    console.error(`❌ Missing article id for Math-Magic chapter: ${artId}`);
    errors++;
  } else {
    console.log(`   - Ch ${i}: magic-ch${i} present & verified.`);
  }
}

// 4. Component Metrics (Questions, Rubrics, Diagrams, CBQs)
console.log("\n[4] Component Counts:");
const qCards = (content.match(/class="q-card"/g) || []).length;
const rubrics = (content.match(/class="marking-scheme"/g) || []).length;
const cbqs = (content.match(/class="cbq-card"/g) || []).length;
const svgs = (content.match(/<svg/g) || []).length;

console.log(`   - Total Question & Exercise Cards: ${qCards}`);
console.log(`   - CBSE Step Marking Schemes:       ${rubrics}`);
console.log(`   - NEP 2020 CBQ Case Studies:       ${cbqs}`);
console.log(`   - SVG Explanatory Diagrams:        ${svgs}`);

if (qCards < 100) {
  console.warn(`⚠️ Question count (${qCards}) seems lower than expected for 29 chapters.`);
  warnings++;
} else {
  console.log(`✅ Comprehensive question density verified (${qCards} items).`);
}

// 5. Syntax & Template Integrity
console.log("\n[5] Syntax & Template Integrity:");
const unrendered = content.match(/\$\{[^}]+\}/g);
if (unrendered) {
  console.error(`❌ Found ${unrendered.length} unrendered template literals:`, unrendered);
  errors += unrendered.length;
} else {
  console.log("✅ Zero unrendered template literals (${...}).");
}

// 6. Schema.org JSON-LD Structured Data
console.log("\n[6] Validating Schema.org Structured Data:");
const jsonLdMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
if (!jsonLdMatches || jsonLdMatches.length < 3) {
  console.error(`❌ Expected at least 3 JSON-LD blocks, found ${jsonLdMatches ? jsonLdMatches.length : 0}`);
  errors++;
} else {
  console.log(`✅ Found ${jsonLdMatches.length} Schema.org JSON-LD blocks.`);
  jsonLdMatches.forEach((block, idx) => {
    const raw = block.replace(/<\/?script[^>]*>/gi, '');
    try {
      const parsed = JSON.parse(raw);
      console.log(`   - Block #${idx + 1}: @type "${parsed['@type']}" parsed valid.`);
    } catch (e) {
      console.error(`❌ Block #${idx + 1} JSON parsing failed: ${e.message}`);
      errors++;
    }
  });
}

// 7. Navigation Sanity
console.log("\n[7] Checking Navigation Elements:");
const hasTabMela = content.includes('id="tab-mela"');
const hasTabMagic = content.includes('id="tab-magic"');
const hasSearch = content.includes('id="chapterSearch"');

if (hasTabMela && hasTabMagic && hasSearch) {
  console.log("✅ Dual book switcher tabs (Maths Mela & Math-Magic) and search verified.");
} else {
  console.error(`❌ Navigation error: tabMela=${hasTabMela}, tabMagic=${hasTabMagic}, hasSearch=${hasSearch}`);
  errors++;
}

// Final Summary
console.log("\n=======================================================");
if (errors === 0) {
  console.log(`🎉 AUDIT PASSED 100%! All checks validated with ${warnings} warnings.`);
} else {
  console.error(`💥 AUDIT FAILED with ${errors} errors and ${warnings} warnings.`);
  process.exit(1);
}
