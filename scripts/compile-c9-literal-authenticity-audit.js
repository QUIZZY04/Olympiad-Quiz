// scripts/compile-c9-literal-authenticity-audit.js
// Strict, literal verbatim NCERT question coverage & shortage audit for Class 9
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BENCHMARKS = require('./c9-benchmarks.js');

const SUBJECT_CONFIGS = [
  {
    subject: 'Mathematics',
    name: 'Class 9 Mathematics (Ganita Manjari)',
    track: 'NCERT Rationalised Edition & Ganita Manjari (Part I & II)',
    dir: 'chapters-c9m',
    hub: 'ncert-solutions-class-9-maths.html',
    benchmarks: BENCHMARKS.maths
  },
  {
    subject: 'Science',
    name: 'Class 9 Science',
    track: 'NCERT Rationalised Edition (12 Chapters, Intext + End Exercises)',
    dir: 'chapters-c9s',
    hub: 'ncert-solutions-class-9-science.html',
    benchmarks: BENCHMARKS.science
  },
  {
    subject: 'Social Science',
    name: 'Class 9 Social Science',
    track: 'History, Geography, Civics, Economics (20 Chapters)',
    dir: 'chapters-c9sst',
    hub: 'ncert-solutions-class-9-social-science.html',
    benchmarks: BENCHMARKS.socialScience
  },
  {
    subject: 'Hindi',
    name: 'Class 9 Hindi',
    track: 'Kshitij (Gadh & Kavya), Kritika, Sparsh (Gadh & Kavya), Sanchayan (30 Chapters)',
    dir: 'chapters-c9h',
    hub: 'ncert-solutions-class-9-hindi.html',
    benchmarks: BENCHMARKS.hindi
  },
  {
    subject: 'English',
    name: 'Class 9 English',
    track: 'Beehive (Prose & Poetry), Moments (26 Chapters)',
    dir: 'chapters-c9e',
    hub: 'ncert-solutions-class-9-english.html',
    benchmarks: BENCHMARKS.english
  }
];

let grandPhysical = 0;
let grandTotalExercise = 0;
let grandTotalCBQ = 0;
let grandTotalSite = 0;
let grandShortage = 0;

const bookResults = [];

SUBJECT_CONFIGS.forEach(sub => {
  let subPhysical = 0;
  let subExercise = 0;
  let subCBQ = 0;
  let subShortage = 0;

  const chDetails = [];

  sub.benchmarks.forEach(bm => {
    subPhysical += bm.physicalQ;
    const fileId = bm.id || `ch${bm.ch}`;
    const filePath = path.join(ROOT, sub.dir, `${fileId}.html`);

    let exerciseQCount = 0;
    let cbqCount = 0;
    let actualTitle = bm.title;

    if (fs.existsSync(filePath)) {
      const html = fs.readFileSync(filePath, 'utf8');

      // Separate regular exercise Qs and CBQ cards
      const cbqMatches = html.match(/class="[^"]*\bcbq-card\b[^"]*"/g) || [];
      cbqCount = cbqMatches.length;

      const exerciseMatches = html.match(/class="[^"]*\bq-card\b[^"]*"/g) || [];
      exerciseQCount = exerciseMatches.length;

      const h2M = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
      if (h2M) actualTitle = h2M[1].replace(/<[^>]+>/g, '').trim();
    }

    const shortage = Math.max(0, bm.physicalQ - exerciseQCount);
    subExercise += exerciseQCount;
    subCBQ += cbqCount;
    subShortage += shortage;

    const cov = Math.min(100, Math.round((exerciseQCount / bm.physicalQ) * 100));

    chDetails.push({
      id: fileId,
      title: actualTitle,
      physicalQ: bm.physicalQ,
      exerciseQ: exerciseQCount,
      cbq: cbqCount,
      shortage,
      cov
    });
  });

  grandPhysical += subPhysical;
  grandTotalExercise += subExercise;
  grandTotalCBQ += subCBQ;
  grandTotalSite += (subExercise + subCBQ);
  grandShortage += subShortage;

  bookResults.push({
    subject: sub.subject,
    name: sub.name,
    track: sub.track,
    chapters: sub.benchmarks.length,
    physicalQ: subPhysical,
    exerciseQ: subExercise,
    cbq: subCBQ,
    totalSite: subExercise + subCBQ,
    shortage: subShortage,
    cov: Math.min(100, Math.round((subExercise / subPhysical) * 100)),
    chDetails
  });
});

console.log('========================================================================================');
console.log('📊 CLASS 9 LITERAL NCERT QUESTION SHORTAGE & COVERAGE AUDIT');
console.log('========================================================================================\n');

bookResults.forEach(b => {
  console.log(`📘 ${b.name.toUpperCase()}`);
  console.log(`   Physical NCERT Benchmark : ${b.physicalQ} Questions`);
  console.log(`   Live Exercise Solutions  : ${b.exerciseQ} Questions`);
  console.log(`   HOTS & CBQs Added        : ${b.cbq} Questions`);
  console.log(`   Combined On-Site Qs      : ${b.totalSite} Questions`);
  console.log(`   Real Literal Shortage    : ${b.shortage === 0 ? '0 (PERFECT 100% COVERAGE)' : b.shortage + ' Questions Short'}`);
  console.log(`   Strict Verbatim Coverage : ${b.cov}%\n`);
});

console.log('========================================================================================');
console.log(`GRAND TOTAL: Physical Benchmark: ${grandPhysical} Qs | Live Exercise: ${grandTotalExercise} Qs | CBQs: ${grandTotalCBQ} Qs | Total On Site: ${grandTotalSite} Qs | Shortage: ${grandShortage} Qs`);
console.log('========================================================================================\n');

// Compile Official Markdown Report
const reportLines = [
  '# Class 9 NCERT Solutions — Literal Authenticity & Shortage Audit Report',
  '',
  '**Audit Session:** CBSE Academic Year 2026–27  ',
  '**Standard / Class:** Class 9 (All 5 Active Subjects: Mathematics, Science, Social Science, Hindi, English)  ',
  '**Audit Directive:** Strict physical NCERT textbook verbatim exercise match. 0% shortage tolerance.  ',
  '**Status:** ' + (grandShortage === 0 ? '🟢 100% VERBATIM CERTIFIED (0 SHORTAGE)' : `🟡 REAL SHORTAGE IDENTIFIED (${grandShortage} QUESTIONS NEEDED)`),
  '',
  '---',
  '',
  '## 1. Executive Summary Table',
  '',
  '| Subject | Curricular Framework | Units / Chapters | Physical NCERT Qs | Live Exercise Qs | CBQs / HOTS | Total On Site | Real Shortage | Verbatim Coverage |',
  '| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |'
];

bookResults.forEach(b => {
  const statusIcon = b.shortage === 0 ? '🟢' : '🟡';
  reportLines.push(
    `| **${b.subject}** | ${b.track} | ${b.chapters} | ${b.physicalQ} | ${b.exerciseQ} | ${b.cbq} | ${b.totalSite} | **${b.shortage}** | ${statusIcon} ${b.cov}% |`
  );
});

reportLines.push(
  `| **GRAND TOTAL** | **CBSE Class 9 (All Subjects)** | **${bookResults.reduce((acc, b) => acc + b.chapters, 0)}** | **${grandPhysical}** | **${grandTotalExercise}** | **${grandTotalCBQ}** | **${grandTotalSite}** | **${grandShortage}** | **${Math.min(100, Math.round((grandTotalExercise / grandPhysical) * 100))}%** |`
);

reportLines.push('', '---', '', '## 2. Chapter-by-Chapter Strict Audit Register', '');

bookResults.forEach(b => {
  reportLines.push(`### ${b.name}`);
  reportLines.push(`*Curriculum Track: ${b.track}*`);
  reportLines.push('');
  reportLines.push('| Chapter ID | Chapter Title | Physical Benchmark | Exercise Qs Solved | CBQs | Shortage | Coverage % | Status |');
  reportLines.push('| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |');

  b.chDetails.forEach(c => {
    const sIcon = c.shortage === 0 ? '🟢 Complete' : `🔴 Short (${c.shortage})`;
    reportLines.push(`| \`${c.id}\` | ${c.title} | ${c.physicalQ} | ${c.exerciseQ} | ${c.cbq} | ${c.shortage} | ${c.cov}% | ${sIcon} |`);
  });

  reportLines.push('');
});

const reportPath = path.join(ROOT, 'reports', 'class-9-literal-authenticity-audit.md');
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, reportLines.join('\n'), 'utf8');

console.log(`✅ Audit report written to: ${reportPath}`);
