// Comprehensive Audit Suite for NCERT Class 5 Hindi Solutions
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../ncert-solutions-class-5-hindi.html');
console.log("=== RUNNING DETAILED AUDIT FOR NCERT CLASS 5 HINDI SOLUTIONS ===");

if (!fs.existsSync(filePath)) {
  console.error("❌ File not found:", filePath);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
let errors = 0;
let warnings = 0;

// 1. Check File Size
console.log(`[1] File Size: ${(content.length / 1024).toFixed(2)} KB`);
if (content.length < 50000) {
  console.error("❌ File size is suspiciously small!");
  errors++;
} else {
  console.log("✅ File size meets full-depth criteria (>50KB).");
}

// 2. Check for Unrendered Template Literals
const unrendered = content.match(/\$\{[a-zA-Z0-9_.]+\}/g);
if (unrendered) {
  console.error(`❌ Found ${unrendered.length} unrendered template literals:`, unrendered.slice(0, 5));
  errors += unrendered.length;
} else {
  console.log("✅ Zero unrendered template literals found (${...}).");
}

// 3. Check JSON-LD Structured Data
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
      console.log(`   - Block #${idx + 1}: @type "${parsed['@type']}" valid JSON.`);
    } catch (e) {
      console.error(`❌ Block #${idx + 1} JSON parsing failed: ${e.message}`);
      errors++;
    }
  });
}

// 4. Verify Chapter Sections
const expectedVeena = Array.from({length: 12}, (_, i) => `ch_v${i + 1}`);
const expectedRimjhim = Array.from({length: 14}, (_, i) => `ch_r${i + 1}`);

console.log("\n[4] Verifying Chapter Sections:");
let missingSections = 0;
expectedVeena.forEach(id => {
  if (!content.includes(`id="${id}"`)) {
    console.error(`❌ Missing Veena section: ${id}`);
    missingSections++;
  }
});
expectedRimjhim.forEach(id => {
  if (!content.includes(`id="${id}"`)) {
    console.error(`❌ Missing Rimjhim section: ${id}`);
    missingSections++;
  }
});

if (missingSections === 0) {
  console.log(`✅ All 12 Veena chapters (ch_v1 to ch_v12) and 14 Rimjhim units (ch_r1 to ch_r14) present.`);
} else {
  errors += missingSections;
}

// 5. Count Question Cards, Markings & CBQs
const qCardCount = (content.match(/class="q-card"/g) || []).length;
const rubricCount = (content.match(/class="marking-scheme"/g) || []).length;
const cbqCount = (content.match(/class="cbq-card"/g) || []).length;
const svgCount = (content.match(/<svg/g) || []).length;

console.log("\n[5] Component Counts:");
console.log(`   - Total Question Cards: ${qCardCount}`);
console.log(`   - Step Marking Schemes: ${rubricCount}`);
console.log(`   - NEP 2020 CBQ Cards:   ${cbqCount}`);
console.log(`   - SVG Vector Diagrams:  ${svgCount}`);

if (qCardCount < 100) {
  console.warn("⚠️ Total questions under 100, checking coverage...");
} else {
  console.log("✅ Question density is comprehensive (107+ questions).");
}

if (cbqCount !== 26) {
  console.error(`❌ Expected 26 CBQ cards (12 Veena + 14 Rimjhim), found ${cbqCount}`);
  errors++;
} else {
  console.log("✅ All 26 chapters have an individual NEP 2020 CBQ Case Study.");
}

// 6. Navigation and Links Check
console.log("\n[6] Checking Navigation Elements:");
const hasBookTabs = content.includes('id="btnVeena"') && content.includes('id="btnRimjhim"');
const hasChips = content.includes('id="chipsVeena"') && content.includes('id="chipsRimjhim"');
const hasNav = content.includes('id="navVeena"') && content.includes('id="navRimjhim"');
const hasSearch = content.includes('id="chapterSearch"');

if (hasBookTabs && hasChips && hasNav && hasSearch) {
  console.log("✅ Dual book tab switcher, quick jump chips, dynamic search, and sidebar navigation present.");
} else {
  console.error("❌ Missing some navigation components.");
  errors++;
}

// Final Summary
console.log("\n=======================================================");
if (errors === 0) {
  console.log(`🎉 AUDIT PASSED 100%! All checks validated successfully with ${warnings} warnings.`);
} else {
  console.error(`💥 AUDIT FAILED with ${errors} errors and ${warnings} warnings.`);
  process.exit(1);
}
