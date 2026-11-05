// scripts/audit-c9-full.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const SUBJECTS = [
  {
    key: 'maths',
    name: 'Mathematics',
    monolithic: 'ncert-solutions-class-9-maths.html',
    dir: 'chapters-c9m',
    book: 'Ganit Manzari (Ganita Manjari Part I & II)',
    totalChapters: 14
  },
  {
    key: 'science',
    name: 'Science',
    monolithic: 'ncert-solutions-class-9-science.html',
    dir: 'chapters-c9s',
    book: 'Class 9 Science (NCERT Rationalised)',
    totalChapters: 12
  },
  {
    key: 'socialScience',
    name: 'Social Science',
    monolithic: 'ncert-solutions-class-9-social-science.html',
    dir: 'chapters-c9sst',
    book: 'History, Geography, Civics, Economics',
    totalChapters: 20
  },
  {
    key: 'hindi',
    name: 'Hindi',
    monolithic: 'ncert-solutions-class-9-hindi.html',
    dir: 'chapters-c9h',
    book: 'Kshitij-1, Kritika-1, Sparsh-1, Sanchayan-1',
    totalChapters: 30
  },
  {
    key: 'english',
    name: 'English',
    monolithic: 'ncert-solutions-class-9-english.html',
    dir: 'chapters-c9e',
    book: 'Beehive (Prose & Poems), Moments',
    totalChapters: 26
  }
];

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

console.log('========================================================================');
console.log('CLASS 9 VERBATIM NCERT AUDIT - DETAILED INSPECTION');
console.log('========================================================================');

const auditReport = [];

for (const subj of SUBJECTS) {
  const monoPath = path.join(ROOT, subj.monolithic);
  const dirPath = path.join(ROOT, subj.dir);
  
  let monoHtml = fs.existsSync(monoPath) ? fs.readFileSync(monoPath, 'utf8') : '';
  const monoQCards = (monoHtml.match(/<div class="q-card"/g) || []).length;
  const monoCBQCards = (monoHtml.match(/<div class="cbq-card"/g) || []).length;
  
  // Inspect chapters in directory
  let dirQCards = 0;
  let dirCBQCards = 0;
  let dirFilesCount = 0;
  const chapterBreakdown = [];
  
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(f => f.match(/^ch\d+\.html$/));
    dirFilesCount = files.length;
    
    // Sort numerically
    files.sort((a, b) => {
      const numA = parseInt(a.replace(/[^\d]/g, ''));
      const numB = parseInt(b.replace(/[^\d]/g, ''));
      return numA - numB;
    });
    
    for (const f of files) {
      const fHtml = fs.readFileSync(path.join(dirPath, f), 'utf8');
      const qCount = (fHtml.match(/<div class="q-card"/g) || []).length;
      const cbqCount = (fHtml.match(/<div class="cbq-card"/g) || []).length;
      dirQCards += qCount;
      dirCBQCards += cbqCount;
      
      // Check procedural
      let proc = 0;
      for (const pat of proceduralPatterns) {
        if (pat.test(fHtml)) proc++;
      }
      
      chapterBreakdown.push({
        file: f,
        q: qCount,
        cbq: cbqCount,
        procedural: proc
      });
    }
  }

  // Check procedural in monolithic
  let monoProc = 0;
  for (const pat of proceduralPatterns) {
    if (pat.test(monoHtml)) monoProc++;
  }

  // Check data.js
  const dataJsPath = path.join(dirPath, 'chapters-data.js');
  let dataJsExists = fs.existsSync(dataJsPath);
  let dataJsSize = dataJsExists ? (fs.readFileSync(dataJsPath, 'utf8').length / 1024).toFixed(1) + ' KB' : 'None';

  auditReport.push({
    subject: subj.name,
    monolithicCards: monoQCards,
    dirChapters: dirFilesCount,
    dirQCards: dirQCards,
    dirCBQCards: dirCBQCards,
    totalDirCards: dirQCards + dirCBQCards,
    proceduralInDir: chapterBreakdown.reduce((a, b) => a + b.procedural, 0),
    dataJsSize: dataJsSize
  });
}

console.table(auditReport);
