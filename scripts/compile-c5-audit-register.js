// Compile Machine-Readable Audit Register for Class 5 NCERT Solutions (All 8 Books, 107 Chapters)
const fs = require('fs');
const path = require('path');

console.log("=== COMPILING CLASS 5 NCERT AUDIT REGISTER LEDGER ===");

function parseSubjectHtml(filePath, bookKey, bookName, track, subject, prefix, count, isUnit = false) {
  const html = fs.readFileSync(filePath, 'utf8');
  const chapters = [];

  for (let i = 1; i <= count; i++) {
    const secId = `ch_${prefix}${i}`;
    const startIdx = html.indexOf(`id="${secId}"`);
    if (startIdx === -1) {
      console.warn(`Could not find ${secId} in ${filePath}`);
      continue;
    }
    const endIdx = html.indexOf('</section>', startIdx);
    const snip = html.substring(startIdx, endIdx);

    const titleMatch = snip.match(/<h2>([^<]+)<\/h2>/);
    let fullTitle = titleMatch ? titleMatch[1].trim() : `Chapter ${i}`;
    let chTitle = fullTitle;
    if (fullTitle.includes(':')) {
      chTitle = fullTitle.split(':')[1].trim();
    }

    const qCards = (snip.match(/class="q-card/g) || []).length;
    const rubrics = (snip.match(/class="marking-row"/g) || []).length;
    const hasSvg = snip.includes('<svg');
    const hasCbq = snip.includes('class="cbq-card"');
    const cbqTitleMatch = snip.match(/<h3[^>]*>([^<]+)<\/h3>/);

    chapters.push({
      id: `${prefix}${i}`,
      num: i,
      unit: `${isUnit ? 'Unit' : 'Chapter'} ${i}`,
      title: chTitle,
      conceptsCount: (snip.match(/<li>/g) || []).length,
      hasSvgDiagram: hasSvg,
      questionsCount: qCards,
      totalMarks: qCards * 3,
      totalRubricItems: rubrics,
      hasCbq: hasCbq,
      cbqTitle: cbqTitleMatch ? cbqTitleMatch[1].trim() : `Competency Case Study ${i}`
    });
  }

  return {
    bookKey,
    bookName,
    track,
    subject,
    chapterCount: chapters.length,
    chapters
  };
}

const mathsHtmlPath = path.resolve(__dirname, '../ncert-solutions-class-5-maths.html');
const englishHtmlPath = path.resolve(__dirname, '../ncert-solutions-class-5-english.html');
const hindiHtmlPath = path.resolve(__dirname, '../ncert-solutions-class-5-hindi.html');
const evsHtmlPath = path.resolve(__dirname, '../ncert-solutions-class-5-evs.html');

const auditData = {
  academicSession: "2026-27",
  targetClass: "Class 5",
  auditTimestamp: new Date().toISOString(),
  standardsCompliance: [
    "NEP 2020",
    "NCF-FS / NCF-SE 2023",
    "CBSE Official Curriculum",
    "Tiwari Academy Reference Standards"
  ],
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
    parseSubjectHtml(mathsHtmlPath, "maths_mela", "Maths Mela", "Track 1 (New NCF 2023 / NEP 2020)", "Mathematics", "mela", 15),
    parseSubjectHtml(mathsHtmlPath, "math_magic", "Math-Magic", "Track 2 (Classic CBSE)", "Mathematics", "magic", 14),
    parseSubjectHtml(englishHtmlPath, "santoor", "Santoor", "Track 1 (New NCF 2023 / NEP 2020)", "English", "s", 10),
    parseSubjectHtml(englishHtmlPath, "marigold", "Marigold", "Track 2 (Classic CBSE)", "English", "m", 10, true),
    parseSubjectHtml(hindiHtmlPath, "veena", "Veena (वीणा भाग 2)", "Track 1 (New NCF 2023 / NEP 2020)", "Hindi", "v", 12),
    parseSubjectHtml(hindiHtmlPath, "rimjhim", "Rimjhim (रिमझिम भाग 5)", "Track 2 (Classic CBSE)", "Hindi", "r", 18),
    parseSubjectHtml(evsHtmlPath, "wondrous_world", "Our Wondrous World", "Track 1 (New NCF 2023 / NEP 2020)", "The World Around Us / EVS", "oww", 10),
    parseSubjectHtml(evsHtmlPath, "looking_around", "Looking Around (आस-पास)", "Track 2 (Classic CBSE)", "The World Around Us / EVS", "la_", 22)
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
console.log(`Summary: ${auditData.summary.totalOfficialTextbooks} Books, ${auditData.summary.totalChapters} Chapters, ${auditData.summary.totalQuestions} Questions, ${auditData.summary.totalSvgDiagrams} SVGs, ${auditData.summary.totalCompetencyCaseStudies} CBQs, ${auditData.summary.totalStepMarkingRubrics} Rubric Items.`);
