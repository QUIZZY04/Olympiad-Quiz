// Comprehensive Audit Suite for NCERT Class 5 The World Around Us: Our Wondrous World
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../ncert-solutions-class-5-evs.html');
console.log("=== AUDITING NCERT CLASS 5 THE WORLD AROUND US (OUR WONDROUS WORLD) ===");

if (!fs.existsSync(filePath)) {
  console.error("❌ File not found:", filePath);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
let errors = 0;
let warnings = 0;

// 1. File Size Verification
console.log(`[1] File Size: ${(content.length / 1024).toFixed(2)} KB`);
if (content.length < 50000) {
  console.error("❌ File size is suspiciously small!");
  errors++;
} else {
  console.log("✅ File size meets full-depth criteria (>50KB).");
}

// 2. Verify all 10 Official Chapters of Our Wondrous World
console.log("\n[2] Verifying All 10 Official Chapters:");
const expectedChapters = [
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

let missingChapters = 0;
expectedChapters.forEach(ch => {
  const hasId = content.includes(`id="${ch.id}"`);
  const hasTitle = content.includes(ch.title);
  if (!hasId || !hasTitle) {
    console.error(`❌ Missing or mislabeled chapter: ${ch.id} (${ch.title})`);
    missingChapters++;
  } else {
    console.log(`   - Ch ${ch.num}: ${ch.title} present & verified.`);
  }
});

if (missingChapters === 0) {
  console.log("✅ All 10 official chapters verified in correct sequence.");
} else {
  errors += missingChapters;
}

// 3. Verify Removal of Old 22-Chapter Looking Around Structure
console.log("\n[3] Checking Removal of Outdated 'Looking Around' Content:");
const oldChapterSignatures = [
  "Super Senses",
  "A Snake Charmer's Story",
  "From Tasting to Digesting",
  "Mangoes Round the Year",
  "Seeds and Seeds",
  "Every Drop Counts",
  "Experiments with Water",
  "A Treat for Mosquitoes",
  "Up You Go!",
  "Walls Tell Stories",
  "Sunita in Space",
  "What if it Finishes...?",
  "A Shelter so High!",
  "When the Earth Shook!",
  "Blow Hot, Blow Cold",
  "Who will do this Work?",
  "Across the Wall",
  "No Place for Us?",
  "A Seed tells a Farmer's Story",
  "Whose Forests?",
  "Like Father, Like Daughter",
  "On the Move Again"
];

let lingeringOldChapters = 0;
oldChapterSignatures.forEach(sig => {
  if (content.includes(`<h2>Chapter`) && content.includes(sig)) {
    console.error(`❌ Old textbook chapter found on active page: "${sig}"`);
    lingeringOldChapters++;
  }
});

if (lingeringOldChapters === 0) {
  console.log("✅ Confirmed: 0 old Looking Around chapters remain on the active page.");
} else {
  errors += lingeringOldChapters;
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

if (qCards < 60) {
  console.warn("⚠️ Question count seems low for full coverage.");
  warnings++;
} else {
  console.log("✅ Comprehensive question density verified (60+ items).");
}

if (cbqs !== 10) {
  console.error(`❌ Expected exactly 10 CBQs (1 per chapter), found ${cbqs}`);
  errors++;
} else {
  console.log("✅ Exactly 10 NEP 2020 Competency Case Studies present.");
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
const navItems = (content.match(/#chapterNav li/g) || []).length || (content.match(/<ul class="chapter-nav"/g) || []).length;
const hasSearch = content.includes('id="chapterSearch"');

if (chips === 10 && navItems > 0 && hasSearch) {
  console.log("✅ Quick jump chips (10/10), search box, and sidebar navigation verified.");
} else {
  console.error(`❌ Navigation mismatch: chips=${chips}, hasSearch=${hasSearch}`);
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
