// Compile Machine-Readable Audit Register for Class 5 NCERT Solutions (All 8 Books)
const fs = require('fs');
const path = require('path');

const { santoorChapters } = require('./data-c5-english/santoorData.js');
const { marigoldUnits } = require('./data-c5-english/marigoldData.js');
const { veenaChapters } = require('./data-c5-hindi/veenaData.js');
const { rimjhimUnits } = require('./data-c5-hindi/rimjhimData.js');
const { wondrousWorldChapters } = require('./data-c5-evs/wondrousWorldData.js');
const { lookingAroundChapters } = require('./data-c5-evs/lookingAroundData.js');

console.log("=== COMPILING CLASS 5 NCERT AUDIT REGISTER LEDGER ===");

function processGenericBook(bookKey, bookName, track, subject, chapters) {
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
        totalMarks += (q.marks || 3);
        totalRubricItems += (q.rubric || []).length;
      });

      return {
        id: ch.id || ('ch_' + ch.num),
        num: ch.num,
        unit: ch.unit || ch.title,
        title: ch.title,
        conceptsCount: (ch.concepts || []).length,
        hasSvgDiagram: Boolean(ch.svg && ch.svg.includes('<svg')),
        questionsCount,
        totalMarks,
        totalRubricItems,
        hasCbq: Boolean(ch.cbq),
        cbqTitle: ch.cbq ? (ch.cbq.title || 'Case Analysis') : null
      };
    })
  };
}

// Parse Maths from ncert-solutions-class-5-maths.html
function parseMathsBook(trackKey, trackName, track, prefix, count) {
  const mathsHtml = fs.readFileSync(path.resolve(__dirname, '../ncert-solutions-class-5-maths.html'), 'utf8');
  const chapters = [];

  for (let i = 1; i <= count; i++) {
    const artId = `${prefix}-ch${i}`;
    const artStart = mathsHtml.indexOf(`id="${artId}"`);
    if (artStart === -1) continue;
    const artEnd = mathsHtml.indexOf('</article>', artStart);
    const snippet = mathsHtml.substring(artStart, artEnd);

    const titleMatch = snippet.match(/<h2 class="ch-title">([^<]+)<\/h2>/);
    const title = titleMatch ? titleMatch[1].trim() : `Chapter ${i}`;

    const qCards = snippet.match(/class="q-card"/g) || [];
    const rubrics = snippet.match(/class="marking-row"/g) || [];
    const hasSvg = snippet.includes('<svg');
    const hasCbq = snippet.includes('class="cbq-card"') || snippet.includes('NEP 2020');

    chapters.push({
      id: artId,
      num: i,
      unit: `Chapter ${i}`,
      title,
      conceptsCount: (snippet.match(/<li>/g) || []).length,
      hasSvgDiagram: hasSvg,
      questionsCount: qCards.length,
      totalMarks: qCards.length * 3,
      totalRubricItems: rubrics.length,
      hasCbq: hasCbq,
      cbqTitle: hasCbq ? `Competency Case Study ${i}` : null
    });
  }

  return {
    bookKey: trackKey,
    bookName: trackName,
    track,
    subject: "Mathematics",
    chapterCount: chapters.length,
    chapters
  };
}

const auditData = {
  academicSession: "2026-27",
  targetClass: "Class 5",
  auditTimestamp: new Date().toISOString(),
  standardsCompliance: ["NEP 2020", "NCF-FS / NCF-SE 2023", "CBSE Official Curriculum", "Tiwari Academy Reference Standards"],
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
    parseMathsBook("maths_mela", "Maths Mela", "Track 1 (New NCF 2023 / NEP 2020)", "mela", 15),
    parseMathsBook("math_magic", "Math-Magic", "Track 2 (Classic CBSE)", "magic", 14),
    processGenericBook("santoor", "Santoor", "Track 1 (New NCF 2023 / NEP 2020)", "English", santoorChapters),
    processGenericBook("marigold", "Marigold", "Track 2 (Classic CBSE)", "English", marigoldUnits),
    processGenericBook("veena", "Veena (वीणा भाग 2)", "Track 1 (New NCF 2023 / NEP 2020)", "Hindi", veenaChapters),
    processGenericBook("rimjhim", "Rimjhim (रिमझिम भाग 5)", "Track 2 (Classic CBSE)", "Hindi", rimjhimUnits),
    processGenericBook("wondrous_world", "Our Wondrous World", "Track 1 (New NCF 2023 / NEP 2020)", "The World Around Us / EVS", wondrousWorldChapters),
    processGenericBook("looking_around", "Looking Around (आस-पास)", "Track 2 (Classic CBSE)", "The World Around Us / EVS", lookingAroundChapters)
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

const outputPath = path.resolve(__dirname, 'audit-register-c5-all.json');
fs.writeFileSync(outputPath, JSON.stringify(auditData, null, 2), 'utf8');

console.log("✅ Successfully generated scripts/audit-register-c5-all.json!");
console.log(`Summary: ${auditData.summary.totalOfficialTextbooks} Books, ${auditData.summary.totalChapters} Chapters, ${auditData.summary.totalQuestions} Questions, ${auditData.summary.totalSvgDiagrams} SVGs, ${auditData.summary.totalCompetencyCaseStudies} CBQs.`);
