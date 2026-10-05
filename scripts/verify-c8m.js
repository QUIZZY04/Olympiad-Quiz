const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c8m');
const hubFile = path.join(__dirname, '..', 'ncert-solutions-class-8-maths.html');

console.log('=== AUDITING CLASS 8 MATHS NCERT COVERAGE ===\n');

let totalQuestions = 0;
let totalCBQs = 0;
let totalMarkingSchemes = 0;
let allOk = true;

for (let ch = 1; ch <= 13; ch++) {
  const filePath = path.join(dir, `ch${ch}.html`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Chapter ${ch} file missing!`);
    allOk = false;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Count questions
  const qMatches = content.match(/class="q-card"/g) || [];
  const cbqMatches = content.match(/class="cbq-card"/g) || [];
  const markingMatches = content.match(/class="marking-scheme"/g) || [];
  const exMatches = content.match(/class="ex-div">([^<]+)<\/div>/g) || [];

  const exercises = exMatches.map(e => e.replace(/<[^>]+>/g, '').trim());

  totalQuestions += qMatches.length;
  totalCBQs += cbqMatches.length;
  totalMarkingSchemes += markingMatches.length;

  console.log(`Ch ${ch.toString().padStart(2, ' ')}: ${qMatches.length.toString().padStart(2, ' ')} Qs, ${cbqMatches.length} CBQs, ${markingMatches.length.toString().padStart(2, ' ')} Marking Schemes | Exercises: [${exercises.join(', ')}]`);
}

console.log('\n----------------------------------------------');
console.log(`Total NCERT Question Cards: ${totalQuestions}`);
console.log(`Total CBQ / Case Study Cards: ${totalCBQs}`);
console.log(`Total Questions + CBQs: ${totalQuestions + totalCBQs}`);
console.log(`Total CBSE Marking Schemes: ${totalMarkingSchemes}`);

// Check hub file
if (fs.existsSync(hubFile)) {
  const hubContent = fs.readFileSync(hubFile, 'utf8');
  const hubChs = hubContent.match(/id="ch\d+"/g) || [];
  console.log(`Hub HTML chapters embedded: ${hubChs.length}/13`);
  if (hubChs.length === 13) {
    console.log('✅ Hub HTML has all 13 chapters properly embedded and navigable.');
  } else {
    console.error(`❌ Hub HTML only has ${hubChs.length} chapters.`);
    allOk = false;
  }
} else {
  console.error('❌ Hub file ncert-solutions-class-8-maths.html not found.');
  allOk = false;
}

if (allOk) {
  console.log('\n🎉 ALL 13 CHAPTERS 100% AUDIT PASSED!');
} else {
  console.log('\n⚠️ Some issues found in audit.');
}
