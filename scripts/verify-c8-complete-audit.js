// scripts/verify-c8-complete-audit.js
const fs = require('fs');
const path = require('path');
const BENCHMARKS = require('./c8-benchmarks');
const ROOT = path.resolve(__dirname, '..');

const FILES = {
  maths: { file: 'ncert-solutions-class-8-maths.html', benchKey: 'maths' },
  science: { file: 'ncert-solutions-class-8-science.html', benchKey: 'science' },
  socialScience: { file: 'ncert-solutions-class-8-sst.html', benchKey: 'socialScience' },
  hindi: { file: 'ncert-solutions-class-8-hindi.html', benchKey: 'hindi' },
  english: { file: 'ncert-solutions-class-8-english.html', benchKey: 'english' },
  sanskrit: { file: 'ncert-solutions-class-8-sanskrit.html', benchKey: 'sanskrit' }
};

const proceduralPatterns = [
  /Explain the core concepts of Chapter/i,
  /Discuss the key themes of Chapter/i,
  /Analyze the principal ideas and learning outcomes/i,
  /Summarize the important formulas and principles/i,
  /Provide a comprehensive overview of Chapter/i,
  /Describe the main highlights and pedagogical objectives/i,
  /Key questions for practice and self-assessment/i,
  /Comprehensive evaluation exercise for Chapter/i
];

let grandBenchmark = 0;
let grandActual = 0;
let totalProceduralFound = 0;
let totalSyntaxIssues = 0;

const subjectResults = {};

for (const [subj, info] of Object.entries(FILES)) {
  const filePath = path.join(ROOT, info.file);
  const html = fs.readFileSync(filePath, 'utf8');

  // Count question cards
  const qCards = html.match(/<div class="q-card"/g) || [];
  const cardCount = qCards.length;

  // Check procedural
  let proceduralCount = 0;
  for (const pat of proceduralPatterns) {
    const m = html.match(new RegExp(pat.source, 'gi'));
    if (m) proceduralCount += m.length;
  }
  totalProceduralFound += proceduralCount;

  // Check integrity
  const issues = [];
  if (html.includes('undefined')) issues.push('Contains "undefined"');
  if (html.includes('NaN')) issues.push('Contains "NaN"');
  if (html.includes('[object Object]')) issues.push('Contains "[object Object]"');
  if (html.includes('>null<')) issues.push('Contains raw ">null<" text');

  // Count benchmark for this subject
  let subjBenchmark = 0;
  const bList = BENCHMARKS[info.benchKey] || [];
  for (const item of bList) {
    subjBenchmark += (item.physicalQ || 0);
  }

  grandBenchmark += subjBenchmark;
  grandActual += cardCount;

  subjectResults[subj] = {
    file: info.file,
    benchmark: subjBenchmark,
    actual: cardCount,
    shortage: Math.max(0, subjBenchmark - cardCount),
    procedural: proceduralCount,
    issues: issues.length
  };
}

console.log('========================================================================');
console.log('CLASS 8 VERBATIM PHYSICAL QUESTIONS NCERT AUDIT REGISTER');
console.log('========================================================================');
console.table(subjectResults);
console.log('------------------------------------------------------------------------');
console.log(`GRAND BENCHMARK REQUIRED : ${grandBenchmark}`);
console.log(`GRAND ACTUAL PHYSICAL QS : ${grandActual}`);
console.log(`NET SHORTAGE             : ${grandBenchmark - grandActual}`);
console.log(`PROCEDURAL ITEMS FOUND   : ${totalProceduralFound}`);
console.log(`SYNTAX / DOM ISSUES      : ${totalSyntaxIssues}`);
console.log('========================================================================');

if (grandActual >= grandBenchmark && totalProceduralFound === 0) {
  console.log('VERDICT: 100% LITERAL VERBATIM COMPLIANCE ACHIEVED!');
} else {
  console.log('VERDICT: NON-COMPLIANT - FURTHER WORK REQUIRED');
}
