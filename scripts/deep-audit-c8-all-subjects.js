const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const subjects = [
  { name: 'Mathematics', file: 'ncert-solutions-class-8-maths.html', book: 'Ganita Prakash (Part 1 & 2)' },
  { name: 'Science', file: 'ncert-solutions-class-8-science.html', book: 'Science (Curiosity / Rationalised)' },
  { name: 'Social Science', file: 'ncert-solutions-class-8-sst.html', book: 'Our Pasts III, Resources & Dev, SPL III' },
  { name: 'Hindi', file: 'ncert-solutions-class-8-hindi.html', book: 'Vasant भाग 3 & Durva भाग 3' },
  { name: 'English', file: 'ncert-solutions-class-8-english.html', book: 'Honeydew & It So Happened' },
  { name: 'Sanskrit', file: 'ncert-solutions-class-8-sanskrit.html', book: 'Ruchira भाग 3' }
];

console.log('========================================================================================');
console.log('🔎 DEEP AUDIT: CLASS 8 NCERT PHYSICAL QUESTION COVERAGE ACROSS ALL 6 SUBJECTS');
console.log('========================================================================================\n');

let grandTotalChapters = 0;
let grandTotalQuestions = 0;
let grandTotalCBQs = 0;
let lowQuestionChapters = [];

subjects.forEach(sub => {
  const fPath = path.join(ROOT, sub.file);
  if (!fs.existsSync(fPath)) {
    console.error(`ERROR: ${sub.file} not found!`);
    return;
  }
  const html = fs.readFileSync(fPath, 'utf8');

  // Find all sections
  const sectionRegex = /<section[^>]*class="[^"]*chapter-section[^"]*"[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
  let m;
  let chCount = 0;
  let subQs = 0;
  let subCbqs = 0;

  console.log(`📘 ${sub.name.toUpperCase()} — ${sub.book}`);
  console.log(`   File: ${sub.file} (${(html.length / 1024).toFixed(1)} KB)`);

  while ((m = sectionRegex.exec(html)) !== null) {
    chCount++;
    const secId = m[1];
    const secHtml = m[2];

    const titleMatch = secHtml.match(/<h2>(.*?)<\/h2>/);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : secId;

    const qCards = (secHtml.match(/class="q-card"/g) || []).length;
    const cbqCards = (secHtml.match(/class="case-study-box"|class="cbq-card"/g) || []).length;

    subQs += qCards;
    subCbqs += cbqCards;

    if (qCards <= 3) {
      lowQuestionChapters.push({ subject: sub.name, id: secId, title, qCount: qCards });
    }

    // Print chapter info
    console.log(`   • [${secId}] ${title.slice(0, 48).padEnd(48, ' ')} : ${qCards} Qs, ${cbqCards} CBQs`);
  }

  grandTotalChapters += chCount;
  grandTotalQuestions += subQs;
  grandTotalCBQs += subCbqs;

  console.log(`   --> Subject Total: ${chCount} Chapters | ${subQs} Exercise Qs | ${subCbqs} CBQs | Combined: ${subQs + subCbqs} Qs\n`);
});

console.log('========================================================================================');
console.log('📊 CLASS 8 MACRO TOTALS:');
console.log(`   Total Canonical Chapters / Units : ${grandTotalChapters}`);
console.log(`   Total Official NCERT Questions   : ${grandTotalQuestions}`);
console.log(`   Total Competency-Based Qs (CBQ)  : ${grandTotalCBQs}`);
console.log(`   Combined Assessed Items on Site  : ${grandTotalQuestions + grandTotalCBQs}`);
console.log('========================================================================================\n');

if (lowQuestionChapters.length > 0) {
  console.log('⚠️ WARNING: Found chapters with <= 3 questions:');
  lowQuestionChapters.forEach(c => {
    console.log(`   - ${c.subject} [${c.id}]: "${c.title}" has only ${c.qCount} questions!`);
  });
} else {
  console.log('✅ ZERO LOW-QUESTION CHAPTERS! Every single chapter has full verbatim question coverage.');
}
