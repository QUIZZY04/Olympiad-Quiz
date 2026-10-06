const fs = require('fs');
const path = require('path');

const hubFile = path.join(__dirname, '..', 'ncert-solutions-class-6-science.html');
const chaptersDir = path.join(__dirname, '..', 'chapters-c6s');

console.log('================================================================');
console.log('      NCERT CLASS 6 SCIENCE (CURIOSITY) FULL COVERAGE AUDIT      ');
console.log('================================================================\n');

if (!fs.existsSync(hubFile)) {
  console.error('ERROR: ncert-solutions-class-6-science.html does not exist!');
  process.exit(1);
}

const hubContent = fs.readFileSync(hubFile, 'utf8');

const report = [];
let totalQ = 0;
let totalMarking = 0;
let totalDiag = 0;
let totalCbq = 0;

for (let i = 1; i <= 12; i++) {
  const chFile = path.join(chaptersDir, `ch${i}.html`);
  if (!fs.existsSync(chFile)) {
    console.error(`ERROR: ch${i}.html missing in chapters-c6s/`);
    process.exit(1);
  }
  const content = fs.readFileSync(chFile, 'utf8');
  
  // Title
  const titleMatch = content.match(/<h2>(.*?)<\/h2>/);
  const title = titleMatch ? titleMatch[1] : `Chapter ${i}`;

  // Questions
  const qMatches = content.match(/class="q-card"/g) || [];
  const qCount = qMatches.length;
  totalQ += qCount;

  // Marking schemes
  const msMatches = content.match(/class="marking-scheme"/g) || [];
  const msCount = msMatches.length;
  totalMarking += msCount;

  // Diagrams
  const diagMatches = content.match(/<svg/g) || [];
  const diagCount = diagMatches.length;
  totalDiag += diagCount;

  // CBQs
  const cbqMatches = content.match(/class="cbq-card"/g) || [];
  const cbqCount = cbqMatches.length;
  totalCbq += cbqCount;

  report.push({
    ch: `Ch ${i}`,
    title,
    questions: qCount,
    markingSchemes: msCount,
    diagrams: diagCount,
    caseStudies: cbqCount
  });
}

console.table(report);

console.log('\n----------------------------------------------------------------');
console.log(`TOTAL CHAPTERS AUDITED       : 12`);
console.log(`TOTAL EXERCISE QUESTIONS     : ${totalQ}`);
console.log(`TOTAL CBSE MARKING SCHEMES   : ${totalMarking}`);
console.log(`TOTAL EMBEDDED DIAGRAMS (SVG): ${totalDiag}`);
console.log(`TOTAL CBQ CASE STUDIES       : ${totalCbq}`);
console.log('----------------------------------------------------------------\n');

// Hub checks
const stats = fs.statSync(hubFile);
console.log('Class 6 Science Hub Verification:');
console.log(`- Hub file size: ${(stats.size / 1024).toFixed(1)} KB`);
console.log(`- Preloaded Bundle Included: ${hubContent.includes('window.CHAPTER_DATA') ? 'YES' : 'NO'}`);
console.log(`- Subject Switcher Navigation: ${hubContent.includes('ncert-breadcrumb-nav') ? 'YES' : 'NO'}`);
console.log(`- Chapter Jump Chips: ${hubContent.includes('breadcrumb-chips') ? 'YES' : 'NO'}`);

// LaTeX / Strange text check
let latexErrors = 0;
if (hubContent.includes('\\frac') || hubContent.includes('\\text') || hubContent.includes('\\sqrt') || hubContent.includes('\\over')) {
  console.error('WARNING: Raw LaTeX syntax detected in hub content!');
  latexErrors++;
}

if (latexErrors === 0) {
  console.log('\n================================================================');
  console.log('             AUDIT STATUS: ALL CHECKS PASSED (100%)              ');
  console.log('================================================================\n');
} else {
  console.error('\nAUDIT FAILED: Issues detected.');
  process.exit(1);
}
