// scripts/audit-c2-inventory.js
// Complete inventory audit and verification for Class 2 NCERT Solutions (Session 2026-27)

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function countQuestions(content) {
  const matches = content.match(/class=["'][^"']*\b(?:q-card|faq-card|qa-card|faq-item)\b/g) || [];
  return matches.length;
}

function countInDir(dirRel, pattern, label) {
  const dir = path.join(ROOT, dirRel);
  if (!fs.existsSync(dir)) return { label, files: 0, questions: 0, list: [] };
  const allFiles = fs.readdirSync(dir);
  const matched = allFiles.filter(f => pattern.test(f)).sort((a,b) => {
    const na = parseInt(a.replace(/\D/g, '')) || 0;
    const nb = parseInt(b.replace(/\D/g, '')) || 0;
    return na - nb;
  });

  let totalQ = 0;
  const list = [];
  for (const f of matched) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const cnt = countQuestions(content);
    totalQ += cnt;
    list.push({ file: f, count: cnt, size: content.length });
  }
  return { label, files: matched.length, questions: totalQ, list };
}

function countInFile(fileRel) {
  const file = path.join(ROOT, fileRel);
  if (!fs.existsSync(file)) return 0;
  const content = fs.readFileSync(file, 'utf8');
  return countQuestions(content);
}

console.log('================================================================');
console.log('📊 CLASS 2 NCERT COMPLETE DUAL-TRACK INVENTORY & AUDIT');
console.log('================================================================\n');

const inventory = [
  // 1. Mathematics
  {
    subject: 'Mathematics',
    hub: 'ncert-solutions-class-2-maths.html',
    hubQ: countInFile('ncert-solutions-class-2-maths.html'),
    t1: countInDir('chapters-c2m', /^joyful-maths-ch\d+\.html$/, 'Joyful Mathematics (NEP 2020)'),
    t2: countInDir('chapters-c2m', /^math-magic-ch\d+\.html$/, 'Math-Magic Book 2 (Classic CBSE)')
  },
  // 2. English
  {
    subject: 'English',
    hub: 'ncert-solutions-class-2-english.html',
    hubQ: countInFile('ncert-solutions-class-2-english.html'),
    t1: countInDir('chapters-c2e', /^mridang-ch\d+\.html$/, 'Mridang (NEP 2020)'),
    t2: countInDir('chapters-c2e', /^marigold-ch\d+\.html$/, 'Marigold Book 2 (Classic CBSE)')
  },
  // 3. Hindi
  {
    subject: 'Hindi',
    hub: 'ncert-solutions-class-2-hindi.html',
    hubQ: countInFile('ncert-solutions-class-2-hindi.html'),
    t1: countInDir('chapters-c2h', /^sarangi-ch\d+\.html$/, 'सारंगी - Sarangi (NEP 2020)'),
    t2: countInDir('chapters-c2h', /^rimjhim-ch\d+\.html$/, 'रिमझिम भाग २ (Classic CBSE)')
  },
  // 4. EVS
  {
    subject: 'Environmental Studies (EVS)',
    hub: 'ncert-solutions-class-2-evs.html',
    hubQ: countInFile('ncert-solutions-class-2-evs.html'),
    t1: countInDir('chapters-c2evs', /^living-world-ch\d+\.html$/, 'Our Living World & Nature (NEP)'),
    t2: countInDir('chapters-c2evs', /^surroundings-ch\d+\.html$/, 'Surroundings & Community (Classic)')
  }
];

let grandTotalModules = 0;
let grandTotalModuleQuestions = 0;
let grandTotalHubQuestions = 0;

inventory.forEach((sub, idx) => {
  const subModules = sub.t1.files + sub.t2.files;
  const subModuleQ = sub.t1.questions + sub.t2.questions;
  grandTotalModules += subModules;
  grandTotalModuleQuestions += subModuleQ;
  grandTotalHubQuestions += sub.hubQ;

  console.log(`${idx + 1}. ${sub.subject.toUpperCase()}`);
  console.log(`   - Hub Page: ${sub.hub} (${sub.hubQ} interactive questions)`);
  console.log(`   - Track 1 [${sub.t1.label}]: ${sub.t1.files} modules (${sub.t1.questions} questions)`);
  console.log(`   - Track 2 [${sub.t2.label}]: ${sub.t2.files} modules (${sub.t2.questions} questions)`);
  console.log(`   - Subject Total: ${subModules} standalone modules, ${subModuleQ} questions\n`);
});

// Central Hub Verification
const centralHub = path.join(ROOT, 'ncert-solutions-class-2.html');
const centralHubExists = fs.existsSync(centralHub);
const centralHubSize = centralHubExists ? fs.statSync(centralHub).size : 0;
console.log(`5. CENTRAL HUB (ncert-solutions-class-2.html): ${centralHubExists ? 'EXISTS' : 'MISSING'} (${centralHubSize.toLocaleString()} bytes)`);

console.log('\n================================================================');
console.log(`🎯 CLASS 2 GRAND TOTALS:`);
console.log(`   - Total Core Subjects: 4`);
console.log(`   - Total Official Textbooks: 8`);
console.log(`   - Total Standalone Chapter Modules: ${grandTotalModules} (Expected: 120)`);
console.log(`   - Total Module Questions: ${grandTotalModuleQuestions}`);
console.log(`   - Total Central Hub Questions: ${grandTotalHubQuestions}`);
console.log(`   - Combined Class 2 Corpus: ${grandTotalModuleQuestions + grandTotalHubQuestions} Q&A units`);
console.log(`   - Status: ${grandTotalModules === 120 ? '✅ 100% COVERAGE VERIFIED ACROSS BOTH TRACKS!' : '❌ INCOMPLETE'}`);
console.log('================================================================');
