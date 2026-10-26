// Deep Question-Level Coverage & Integrity Auditor for NCERT Class 3 Solutions
const fs = require('fs');
const path = require('path');

const { mathsMelaChapters } = require('./data-c3-maths/mathsMelaData.js');
const { mathMagicChapters } = require('./data-c3-maths/mathMagicData.js');
const { santoorChapters } = require('./data-c3-english/santoorData.js');
const { marigoldUnits } = require('./data-c3-english/marigoldData.js');
const { veenaChapters } = require('./data-c3-hindi/veenaData.js');
const { rimjhimChapters } = require('./data-c3-hindi/rimjhimData.js');
const { wondrousWorldChapters } = require('./data-c3-evs/wondrousWorldData.js');
const { lookingAroundChapters } = require('./data-c3-evs/lookingAroundData.js');

console.log("================================================================================");
console.log("🔍 RUNNING DEEP QUESTION-LEVEL COVERAGE AUDIT FOR CLASS 3 NCERT SOLUTIONS");
console.log("================================================================================");

const allBooks = [
  { key: 'maths_mela', name: 'Maths Mela', track: 'New NCF 2023', subject: 'Mathematics', data: mathsMelaChapters, expectedCh: 14 },
  { key: 'math_magic', name: 'Math-Magic', track: 'Classic CBSE', subject: 'Mathematics', data: mathMagicChapters, expectedCh: 14 },
  { key: 'santoor', name: 'Santoor', track: 'New NCF 2023', subject: 'English', data: santoorChapters, expectedCh: 12 },
  { key: 'marigold', name: 'Marigold', track: 'Classic CBSE', subject: 'English', data: marigoldUnits, expectedCh: 10 },
  { key: 'veena', name: 'Veena (वीणा भाग 1)', track: 'New NCF 2023', subject: 'Hindi', data: veenaChapters, expectedCh: 18 },
  { key: 'rimjhim', name: 'Rimjhim (रिमझिम भाग 3)', track: 'Classic CBSE', subject: 'Hindi', data: rimjhimChapters, expectedCh: 14 },
  { key: 'wondrous_world', name: 'Our Wondrous World', track: 'New NCF 2023', subject: 'EVS', data: wondrousWorldChapters, expectedCh: 12 },
  { key: 'looking_around', name: 'Looking Around (आस-पास)', track: 'Classic CBSE', subject: 'EVS', data: lookingAroundChapters, expectedCh: 24 }
];

let totalBooks = allBooks.length;
let totalChapters = 0;
let totalExerciseQuestions = 0;
let totalCbqs = 0;
let totalRubrics = 0;
let totalSvgs = 0;
let issuesFound = [];

console.log("\n--- DETAILED BOOK-BY-BOOK QUESTION AUDIT ---");

allBooks.forEach((book, bIdx) => {
  const chs = book.data;
  totalChapters += chs.length;
  let bookQuestions = 0;
  let bookCbqs = 0;
  let bookRubrics = 0;
  let bookSvgs = 0;

  if (chs.length !== book.expectedCh) {
    issuesFound.push(`Book ${book.name}: Expected ${book.expectedCh} chapters, found ${chs.length}`);
  }

  chs.forEach((ch, idx) => {
    // Check chapter properties
    if (!ch.id || !ch.title || !ch.subtitle) {
      issuesFound.push(`Book ${book.name} Chapter ${idx + 1}: Missing id/title/subtitle`);
    }

    // Check SVG
    if (ch.svg && ch.svg.includes('<svg') && ch.svg.includes('</svg>')) {
      bookSvgs++;
      totalSvgs++;
    } else {
      issuesFound.push(`Book ${book.name} Chapter ${ch.id}: Missing or malformed SVG`);
    }

    // Check Questions
    if (!ch.questions || ch.questions.length === 0) {
      issuesFound.push(`Book ${book.name} Chapter ${ch.id}: Has 0 questions!`);
    } else {
      ch.questions.forEach((q, qIdx) => {
        bookQuestions++;
        totalExerciseQuestions++;

        if (!q.q || q.q.trim().length === 0) {
          issuesFound.push(`Book ${book.name} Chapter ${ch.id} Q${qIdx + 1}: Empty question text`);
        }
        if (!q.ans || q.ans.trim().length === 0) {
          issuesFound.push(`Book ${book.name} Chapter ${ch.id} Q${qIdx + 1}: Empty answer text`);
        }
        if (q.ans && (q.ans.includes('TODO') || q.ans.includes('TBD') || q.ans.includes('Lorem ipsum'))) {
          issuesFound.push(`Book ${book.name} Chapter ${ch.id} Q${qIdx + 1}: Placeholder text in answer`);
        }
        if (!q.marks || typeof q.marks !== 'number') {
          issuesFound.push(`Book ${book.name} Chapter ${ch.id} Q${qIdx + 1}: Missing numeric marks`);
        }
        if (!q.rubric || q.rubric.length === 0) {
          issuesFound.push(`Book ${book.name} Chapter ${ch.id} Q${qIdx + 1}: Missing marking rubric`);
        } else {
          bookRubrics += q.rubric.length;
          totalRubrics += q.rubric.length;
        }
      });
    }

    // Check CBQ
    if (ch.cbq && ch.cbq.title && ch.cbq.text && ch.cbq.question && ch.cbq.answer && ch.cbq.rubric) {
      bookCbqs++;
      totalCbqs++;
      if (ch.cbq.answer.includes('TODO') || ch.cbq.answer.includes('TBD')) {
        issuesFound.push(`Book ${book.name} Chapter ${ch.id} CBQ: Placeholder in answer`);
      }
    } else {
      issuesFound.push(`Book ${book.name} Chapter ${ch.id}: Incomplete CBQ task`);
    }
  });

  console.log(`[${bIdx + 1}/8] ${book.subject.padEnd(12)} | ${book.name.padEnd(25)} | ${chs.length.toString().padStart(2)} Chs | ${bookQuestions.toString().padStart(3)} Questions | ${bookCbqs.toString().padStart(2)} CBQs | ${bookRubrics.toString().padStart(3)} Rubrics | ${bookSvgs.toString().padStart(2)} SVGs`);
});

const grandTotalItems = totalExerciseQuestions + totalCbqs;

console.log("\n--- AGGREGATE COVERAGE AUDIT SUMMARY ---");
console.log(`Total Textbooks Audited:        ${totalBooks} of 8 (100%)`);
console.log(`Total Chapters Verified:        ${totalChapters} of 118 (100%)`);
console.log(`Total Exercise Questions:       ${totalExerciseQuestions}`);
console.log(`Total NEP 2020 CBQ Studies:     ${totalCbqs}`);
console.log(`Grand Total Solved Items:       ${grandTotalItems}`);
console.log(`Total CBSE Step Rubrics:        ${totalRubrics}`);
console.log(`Total Scalable SVG Diagrams:    ${totalSvgs}`);
console.log(`Total Coverage Anomalies:       ${issuesFound.length}`);

if (issuesFound.length > 0) {
  console.error("\n❌ ANOMALIES DETECTED:");
  issuesFound.forEach(err => console.error("  - " + err));
  process.exit(1);
} else {
  console.log("\n✅ ZERO ANOMALIES FOUND! 100% Comprehensive Coverage Confirmed.");
}
