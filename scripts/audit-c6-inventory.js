const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function countQuestions(content) {
  const matches = content.match(/class=["'](?:q-card|faq-card|qa-card|faq-item)["']/g) || [];
  return matches.length;
}

function countInDir(dirRel, pattern) {
  const dir = path.join(ROOT, dirRel);
  if (!fs.existsSync(dir)) return { files: 0, questions: 0, list: [] };
  const files = fs.readdirSync(dir).filter(f => pattern.test(f)).sort((a,b) => {
    const na = parseInt(a.replace(/\D/g, '')) || 0;
    const nb = parseInt(b.replace(/\D/g, '')) || 0;
    return na - nb;
  });
  let totalQ = 0;
  const list = [];
  for (const f of files) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const cnt = countQuestions(content);
    totalQ += cnt;
    list.push({ file: f, count: cnt });
  }
  return { files: files.length, questions: totalQ, list };
}

function countInFile(fileRel) {
  const file = path.join(ROOT, fileRel);
  if (!fs.existsSync(file)) return 0;
  const content = fs.readFileSync(file, 'utf8');
  return countQuestions(content);
}

console.log('=== CLASS 6 NCERT COMPLETE INVENTORY AUDIT ===\n');

const c6m = countInDir('chapters-c6m', /^ch\d+\.html$/);
console.log(`1. Mathematics (Ganita Prakash): ${c6m.files} chapters, ${c6m.questions} chapter questions, ${countInFile('ncert-solutions-class-6-maths.html')} hub questions.`);
c6m.list.forEach(i => console.log(`   - ${i.file}: ${i.count} questions`));

const c6s = countInDir('chapters-c6s', /^ch\d+\.html$/);
console.log(`\n2. Science (Curiosity): ${c6s.files} chapters, ${c6s.questions} chapter questions, ${countInFile('ncert-solutions-class-6-science.html')} hub questions.`);
c6s.list.forEach(i => console.log(`   - ${i.file}: ${i.count} questions`));

const c6sst = countInDir('chapters-c6sst', /^ch\d+\.html$/);
console.log(`\n3. Social Science (Exploring Society): ${c6sst.files} chapters, ${c6sst.questions} chapter questions, ${countInFile('ncert-solutions-class-6-sst.html')} hub questions.`);
c6sst.list.forEach(i => console.log(`   - ${i.file}: ${i.count} questions`));

const c6eng = countInDir('chapters-c6eng', /^ch\d+\.html$/);
console.log(`\n4. English (Poorvi): ${c6eng.files} chapters, ${c6eng.questions} chapter questions, ${countInFile('ncert-solutions-class-6-english.html')} hub questions.`);
c6eng.list.forEach(i => console.log(`   - ${i.file}: ${i.count} questions`));

const c6h = countInDir('chapters-c6h', /^ch\d+\.html$/);
console.log(`\n5. Hindi Malhar (NEP 2020): ${c6h.files} chapters, ${c6h.questions} chapter questions.`);
c6h.list.forEach(i => console.log(`   - ${i.file}: ${i.count} questions`));

const c6hVasant = countInFile('ncert-solutions-class-6-hindi.html');
console.log(`\n6. Hindi Vasant (Classic CBSE): ${c6hVasant} hub questions.`);

const c6skt = countInFile('ncert-solutions-class-6-sanskrit.html');
console.log(`\n7. Sanskrit (Deepakam & Ruchira Hub): ${c6skt} hub questions.`);

const totalAll = c6m.questions + c6s.questions + c6sst.questions + c6eng.questions + c6h.questions + c6hVasant + c6skt;
console.log(`\nTOTAL QUESTIONS ACROSS ALL CLASS 6 MODULES & HUBS: ${totalAll}`);
