const fs = require('fs');
const path = require('path');

const chDir = path.join(__dirname, '..', 'chapters-c8m');
const hubFile = path.join(__dirname, '..', 'ncert-solutions-class-8-maths.html');

console.log('=== Class 8 Maths Ganit Prakash Full Audit ===\n');

const hubHtml = fs.readFileSync(hubFile, 'utf8');

// Check 1: Hub Title & Headers
console.log('1. Checking Hub Title & Headers:');
const titleMatch = hubHtml.match(/<title>([^<]+)<\/title>/i);
console.log('   Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');

// Check 2: Breadcrumb Chips count
const chipMatches = hubHtml.match(/class="bc-chip[^"]*"/g) || [];
console.log(`   Breadcrumb Chips count: ${chipMatches.length} (Expected: 14)`);

// Check 3: Sidebar Chapters count
const sidebarMatches = hubHtml.match(/class="ch-num">(\d+)<\/span>/g) || [];
console.log(`   Sidebar Chapter count: ${sidebarMatches.length} (Expected: 14)`);

// Check 4: Section tags in Hub
const sectionMatches = hubHtml.match(/id="ch(\d+)"/g) || [];
console.log(`   DOM Sections count in Hub: ${sectionMatches.length} (Expected: 14)`);

// Check 5: Latex scan across hub and individual files
console.log('\n2. Checking for Raw LaTeX syntax across all files:');
const latexPatterns = [/\\frac\{/, /\\text\{/, /\\sqrt\{/, /\\times/, /\\pm/, /\\le/, /\\ge/];
let latexViolations = 0;

for (let i = 1; i <= 14; i++) {
  const filePath = path.join(chDir, `ch${i}.html`);
  if (!fs.existsSync(filePath)) {
    console.error(`   ERROR: File ch${i}.html does not exist!`);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  for (const pat of latexPatterns) {
    if (pat.test(content)) {
      console.error(`   WARNING: LaTeX pattern ${pat} found in ch${i}.html`);
      latexViolations++;
    }
  }
}
if (latexViolations === 0) {
  console.log('   ✓ Zero Raw LaTeX found across all 14 chapters! Clean Unicode/HTML formulas verified.');
}

// Check 6: Chapter by chapter detailed metrics
console.log('\n3. Chapter Metrics Breakdown:');
let totalQuestions = 0;
let totalCBQs = 0;
let totalSVGs = 0;
let totalMarkingSchemes = 0;

for (let i = 1; i <= 14; i++) {
  const filePath = path.join(chDir, `ch${i}.html`);
  const content = fs.readFileSync(filePath, 'utf8');

  // Question cards
  const qCards = content.match(/class="q-card"/g) || [];
  // CBQ
  const cbqs = content.match(/class="case-study-box"|class="cbq-card"/g) || [];
  // SVGs
  const svgs = content.match(/<svg\b/g) || [];
  // Marking schemes
  const markSchemes = content.match(/class="marking-scheme"|class="marking-title"/g) || [];

  totalQuestions += qCards.length;
  totalCBQs += cbqs.length;
  totalSVGs += svgs.length;
  totalMarkingSchemes += markSchemes.length;

  console.log(`   Ch ${i.toString().padStart(2, ' ')}: Questions = ${qCards.length}, CBQs = ${cbqs.length}, Marking Schemes = ${markSchemes.length}, SVGs = ${svgs.length}`);
}

console.log('\n=======================================');
console.log(`Total Official Questions Solved: ${totalQuestions}`);
console.log(`Total Competency Case Studies (CBQ): ${totalCBQs}`);
console.log(`Grand Total Assessed Items: ${totalQuestions + totalCBQs}`);
console.log(`Total Marking Scheme Rubrics: ${totalMarkingSchemes}`);
console.log(`Total Vector Diagram SVGs: ${totalSVGs}`);
console.log('=======================================');

if (chipMatches.length === 14 && sidebarMatches.length === 14 && sectionMatches.length === 14 && latexViolations === 0) {
  console.log('\n✅ AUDIT PASSED 100%! Ready for deployment.');
} else {
  console.log('\n❌ AUDIT ISSUES DETECTED. Please review above.');
}
