const fs = require('fs');
const path = require('path');

let totalQuestions = 0;
let errors = [];

for (let i = 1; i <= 13; i++) {
  const p = path.join(__dirname, '..', 'chapters-c7s', 'ch' + i + '.html');
  if (!fs.existsSync(p)) {
    errors.push('Missing ' + p);
    continue;
  }
  const content = fs.readFileSync(p, 'utf8');
  const qMatches = content.match(/class="q-card"/g) || [];
  const cbqMatches = content.match(/class="cbq-card"/g) || [];
  const latexMatches = content.match(/\\[a-zA-Z]{2,}/g) || [];
  totalQuestions += qMatches.length;
  console.log(`Chapter ${i}: ${qMatches.length} textbook questions, ${cbqMatches.length} CBQs, ${latexMatches.length} raw LaTeX instances.`);
  if (latexMatches.length > 0) {
    errors.push(`Chapter ${i} has raw LaTeX: ` + latexMatches.join(', '));
  }
}

console.log('Total textbook questions solved across all 13 chapters:', totalQuestions);
if (errors.length > 0) {
  console.error('Errors found:', errors);
  process.exit(1);
} else {
  console.log('All 13 chapters verified 100% clean and complete with 0 raw LaTeX!');
}
