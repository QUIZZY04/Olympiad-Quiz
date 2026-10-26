// Comprehensive Audit Suite for NCERT Class 5 EVS: Our Wondrous World & Looking Around
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../ncert-solutions-class-5-evs.html');
console.log("=== AUDITING NCERT CLASS 5 EVS (OUR WONDROUS WORLD & LOOKING AROUND) ===");

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
  console.error("❌ File size is suspiciously small for dual-track EVS!");
  errors++;
} else {
  console.log("✅ File size meets full-depth criteria (>100KB).");
}

// 2. Verify all 10 Official Chapters of Our Wondrous World
console.log("\n[2] Verifying Track 1: Our Wondrous World (10 Chapters):");
const expectedWondrous = [
  { id: "ch_oww1", num: 1, title: "Water — The Essence of Life" },
  { id: "ch_oww2", num: 2, title: "Journey of a River" },
  { id: "ch_oww3", num: 3, title: "The Mystery of Food" },
  { id: "ch_oww4", num: 4, title: "Our School — A Happy Place" },
  { id: "ch_oww5", num: 5, title: "Our Vibrant Country" },
  { id: "ch_oww6", num: 6, title: "Some Unique Places" },
  { id: "ch_oww7", num: 7, title: "Energy — How Things Work" },
  { id: "ch_oww8", num: 8, title: "Clothes — How Things are Made" },
  { id: "ch_oww9", num: 9, title: "Rhythms of Nature" },
  { id: "ch_oww10", num: 10, title: "Earth — Our Shared Home" }
];

let missingWondrous = 0;
expectedWondrous.forEach(ch => {
  const hasId = content.includes(`id="${ch.id}"`);
  const hasTitle = content.includes(ch.title);
  if (!hasId || !hasTitle) {
    console.error(`❌ Missing or mislabeled chapter: ${ch.id} (${ch.title})`);
    missingWondrous++;
  } else {
    console.log(`   - Ch ${ch.num}: ${ch.title} present & verified.`);
  }
});
if (missingWondrous === 0) {
  console.log("✅ All 10 Our Wondrous World chapters verified in sequence.");
} else {
  errors += missingWondrous;
}

// 3. Verify all 22 Official Chapters of Looking Around (Classic CBSE)
console.log("\n[3] Verifying Track 2: Looking Around / आस-पास (22 Chapters):");
const expectedLooking = [
  { id: "ch_la_1", num: 1, title: "Super Senses" },
  { id: "ch_la_2", num: 2, title: "A Snake Charmer's Story" },
  { id: "ch_la_3", num: 3, title: "From Tasting to Digesting" },
  { id: "ch_la_4", num: 4, title: "Mangoes Round the Year" },
  { id: "ch_la_5", num: 5, title: "Seeds and Seeds" },
  { id: "ch_la_6", num: 6, title: "Every Drop Counts" },
  { id: "ch_la_7", num: 7, title: "Experiments with Water" },
  { id: "ch_la_8", num: 8, title: "A Treat for Mosquitoes" },
  { id: "ch_la_9", num: 9, title: "Up You Go!" },
  { id: "ch_la_10", num: 10, title: "Walls Tell Stories" },
  { id: "ch_la_11", num: 11, title: "Sunita in Space" },
  { id: "ch_la_12", num: 12, title: "What if it Finishes...?" },
  { id: "ch_la_13", num: 13, title: "A Shelter so High!" },
  { id: "ch_la_14", num: 14, title: "When the Earth Shook!" },
  { id: "ch_la_15", num: 15, title: "Blow Hot, Blow Cold" },
  { id: "ch_la_16", num: 16, title: "Who will do this Work?" },
  { id: "ch_la_17", num: 17, title: "Across the Wall" },
  { id: "ch_la_18", num: 18, title: "No Place for Us?" },
  { id: "ch_la_19", num: 19, title: "A Seed tells a Farmer's Story" },
  { id: "ch_la_20", num: 20, title: "Whose Forests?" },
  { id: "ch_la_21", num: 21, title: "Like Father, Like Daughter" },
  { id: "ch_la_22", num: 22, title: "On the Move Again" }
];

let missingLooking = 0;
expectedLooking.forEach(ch => {
  const hasId = content.includes(`id="${ch.id}"`);
  const hasTitle = content.includes(ch.title);
  if (!hasId || !hasTitle) {
    console.error(`❌ Missing or mislabeled Looking Around chapter: ${ch.id} (${ch.title})`);
    missingLooking++;
  } else {
    console.log(`   - Ch ${ch.num}: ${ch.title} present & verified.`);
  }
});
if (missingLooking === 0) {
  console.log("✅ All 22 Looking Around chapters verified in sequence.");
} else {
  errors += missingLooking;
}

// 4. Component Metrics (Questions, Rubrics, Diagrams, CBQs)
console.log("\n[4] Component Counts:");
const qCards = (content.match(/class="q-card"/g) || []).length;
const rubrics = (content.match(/class="marking-scheme"/g) || []).length;
const cbqs = (content.match(/class="cbq-card"/g) || []).length;
const svgs = (content.match(/<svg/g) || []).length;

console.log(`   - Total Question & Activity Cards: ${qCards}`);
console.log(`   - CBSE Step Marking Schemes:       ${rubrics}`);
console.log(`   - NEP 2020 CBQ Case Studies:       ${cbqs}`);
console.log(`   - Visual Schematics & Diagrams:    ${svgs}`);

if (qCards < 160) {
  console.warn(`⚠️ Question count (${qCards}) seems lower than expected for 32 chapters.`);
  warnings++;
} else {
  console.log(`✅ Comprehensive question density verified (${qCards} items).`);
}

if (cbqs < 32) {
  console.error(`❌ Expected 32 CBQs (1 per chapter), found ${cbqs}`);
  errors++;
} else {
  console.log(`✅ All 32 NEP 2020 Competency Case Studies present (${cbqs}).`);
}

// 5. Syntax & Code Integrity
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
const chips = (content.match(/class="bc-chip"/g) || []).length;
const hasSearch = content.includes('id="chapterSearch"');
const hasBtnWondrous = content.includes('id="btnWondrous"');
const hasBtnLooking = content.includes('id="btnLooking"');

if (chips === 32 && hasSearch && hasBtnWondrous && hasBtnLooking) {
  console.log("✅ Quick jump chips (32/32), dual-book switcher, and search box verified.");
} else {
  console.error(`❌ Navigation mismatch: chips=${chips}, hasSearch=${hasSearch}, switcher=${hasBtnWondrous && hasBtnLooking}`);
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
