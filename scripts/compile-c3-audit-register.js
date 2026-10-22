// Compile Machine-Readable Audit Register for Class 3 NCERT Solutions (All 8 Books, 118 Chapters)
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

console.log("=== COMPILING CLASS 3 NCERT AUDIT REGISTER LEDGER ===");

function processBook(bookKey, bookName, track, subject, chapters) {
  return {
    bookKey,
    bookName,
    track,
    subject,
    chapterCount: chapters.length,
    chapters: chapters.map(ch => {
      const questionsCount = (ch.questions || []).length;
      let totalMarks = 0;
      let totalRubricItems = 0;

      (ch.questions || []).forEach(q => {
        totalMarks += (q.marks || 0);
        totalRubricItems += (q.rubric || []).length;
      });

      return {
        id: ch.id,
        num: ch.num,
        unit: ch.unit,
        title: ch.title,
        conceptsCount: (ch.concepts || []).length,
        hasSvgDiagram: Boolean(ch.svg && ch.svg.includes('<svg')),
        questionsCount,
        totalMarks,
        totalRubricItems,
        hasCbq: Boolean(ch.cbq && ch.cbq.title && ch.cbq.question && ch.cbq.answer),
        cbqTitle: ch.cbq ? ch.cbq.title : null
      };
    })
  };
}

const auditData = {
  academicSession: "2026-27",
  targetClass: "Class 3",
  auditTimestamp: new Date().toISOString(),
  standardsCompliance: ["NEP 2020", "NCF-FS / NCF-SE 2023", "CBSE Official Curriculum"],
  summary: {
    totalCoreSubjects: 4,
    totalOfficialTextbooks: 8,
    totalChapters: 0,
    totalQuestions: 0,
    totalSvgDiagrams: 0,
    totalCompetencyCaseStudies: 0,
    totalStepMarkingRubrics: 0
  },
  textbooks: [
    processBook("maths_mela", "Maths Mela", "Track 1 (New NCF 2023 / NEP 2020)", "Mathematics", mathsMelaChapters),
    processBook("math_magic", "Math-Magic", "Track 2 (Classic CBSE)", "Mathematics", mathMagicChapters),
    processBook("santoor", "Santoor", "Track 1 (New NCF 2023 / NEP 2020)", "English", santoorChapters),
    processBook("marigold", "Marigold", "Track 2 (Classic CBSE)", "English", marigoldUnits),
    processBook("veena", "Veena (वीणा भाग 1)", "Track 1 (New NCF 2023 / NEP 2020)", "Hindi", veenaChapters),
    processBook("rimjhim", "Rimjhim (रिमझिम भाग 3)", "Track 2 (Classic CBSE)", "Hindi", rimjhimChapters),
    processBook("wondrous_world", "Our Wondrous World", "Track 1 (New NCF 2023 / NEP 2020)", "The World Around Us / EVS", wondrousWorldChapters),
    processBook("looking_around", "Looking Around (आस-पास)", "Track 2 (Classic CBSE)", "The World Around Us / EVS", lookingAroundChapters)
  ]
};

// Compute aggregates
auditData.textbooks.forEach(tb => {
  auditData.summary.totalChapters += tb.chapterCount;
  tb.chapters.forEach(ch => {
    auditData.summary.totalQuestions += ch.questionsCount;
    if (ch.hasSvgDiagram) auditData.summary.totalSvgDiagrams += 1;
    if (ch.hasCbq) auditData.summary.totalCompetencyCaseStudies += 1;
    auditData.summary.totalStepMarkingRubrics += ch.totalRubricItems;
  });
});

const outputPath = path.resolve(__dirname, 'audit-register-c3-all.json');
fs.writeFileSync(outputPath, JSON.stringify(auditData, null, 2), 'utf8');

console.log("✅ Successfully generated scripts/audit-register-c3-all.json!");
console.log(`Summary: ${auditData.summary.totalOfficialTextbooks} Books, ${auditData.summary.totalChapters} Chapters, ${auditData.summary.totalQuestions} Questions, ${auditData.summary.totalSvgDiagrams} SVGs, ${auditData.summary.totalCompetencyCaseStudies} CBQs.`);
