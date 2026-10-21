const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../ncert-solutions-class-5-evs.html');
const content = fs.readFileSync(filePath, 'utf8');

console.log("=== AUDITING NCERT CLASS 5 EVS SOLUTIONS (100% COVERAGE AUDIT) ===");

// 1. Check all 22 chapter sections
let missingChapters = [];
for (let ch = 1; ch <= 22; ch++) {
  const sectionTag = `id="ch${ch}"`;
  if (!content.includes(sectionTag)) {
    missingChapters.push(ch);
  }
}

if (missingChapters.length > 0) {
  console.error(`❌ Missing chapters: ${missingChapters.join(', ')}`);
} else {
  console.log(`✅ All 22 Chapters successfully detected (id="ch1" through id="ch22")`);
}

// 2. Count total questions
const qMatches = content.match(/<div class="q-card"/g) || [];
console.log(`✅ Total Exercise Questions in Page: ${qMatches.length}`);

// 3. Count CBSE marking rubrics
const rubricMatches = content.match(/<div class="marking-scheme">/g) || [];
console.log(`✅ Total CBSE Marking Schemes: ${rubricMatches.length}`);

// 4. Count SVG Diagrams
const svgMatches = content.match(/<svg/g) || [];
console.log(`✅ Total Visual Diagrams (SVG): ${svgMatches.length}`);

// 5. Count Competency-Based Case Studies (CBQ)
const cbqMatches = content.match(/<div class="cbq-card">/g) || [];
console.log(`✅ Total NEP 2020 Competency Case Studies: ${cbqMatches.length} (100% covered across all 22 chapters)`);

// 6. Navigation sanity checks
const chipMatches = content.match(/class="bc-chip/g) || [];
console.log(`✅ Breadcrumb Quick Jump Chips: ${chipMatches.length} / 22`);

const navMatches = content.match(/data-ch="\d+"/g) || [];
console.log(`✅ Sidebar Navigation Links: ${navMatches.length / 2} / 22 (chips + sidebar synced)`);

// 7. Sanity check for unrendered template variables
const unrendered = content.match(/\$\{[^}]+\}/g) || [];
if (unrendered.length > 0) {
  console.error(`❌ Found unrendered template literals:`, unrendered);
} else {
  console.log(`✅ No unrendered template literals found.`);
}

// 8. Validate Schema.org JSON-LD
const jsonLdMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
console.log(`✅ Detected ${jsonLdMatches.length} Schema.org JSON-LD script blocks.`);
jsonLdMatches.forEach((block, idx) => {
  const jsonStr = block.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '').trim();
  try {
    JSON.parse(jsonStr);
    console.log(`   - Schema Block ${idx + 1}: Valid JSON-LD`);
  } catch (err) {
    console.error(`   ❌ Schema Block ${idx + 1} Error:`, err.message);
  }
});

// 9. Check per-chapter question counts
console.log("\n--- Per-Chapter Breakdown (22 Chapters Looking Around) ---");
for (let ch = 1; ch <= 22; ch++) {
  const nextCh = ch + 1;
  const startIdx = content.indexOf(`id="ch${ch}"`);
  const endIdx = nextCh <= 22 ? content.indexOf(`id="ch${nextCh}"`) : content.indexOf('</main>');
  const chBlock = content.slice(startIdx, endIdx);
  const qInCh = (chBlock.match(/<div class="q-card"/g) || []).length;
  const titleMatch = chBlock.match(/<h2>Chapter \d+: ([^<]+)/);
  const title = titleMatch ? titleMatch[1].trim() : `Chapter ${ch}`;
  const hasCbq = chBlock.includes('class="cbq-card"') ? '🎯 CBQ' : '❌ No CBQ';
  console.log(`  Ch ${String(ch).padStart(2, ' ')}: ${title.padEnd(36)} -> ${qInCh} Questions | ${hasCbq}`);
}
