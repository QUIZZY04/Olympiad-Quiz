const fs = require('fs');
const path = require('path');

const subjects = [
  { name: 'Mathematics', dir: 'chapters-c10m', hub: 'ncert-solutions-class-10-maths.html', totalExpected: 14 },
  { name: 'Science', dir: 'chapters-c10s', hub: 'ncert-solutions-class-10-science.html', totalExpected: 13 },
  { name: 'Social Science', dir: 'chapters-c10sst', hub: 'ncert-solutions-class-10-sst.html', totalExpected: 22 },
  { name: 'English (Language & Literature)', dir: 'chapters-c10e', hub: 'ncert-solutions-class-10-english.html', totalExpected: 28 },
  { name: 'English (Communicative)', dir: 'chapters-c10ec', hub: 'ncert-solutions-class-10-english-communicative.html', totalExpected: 13 },
  { name: 'Sanskrit (Shemushi)', dir: 'chapters-c10sk', hub: 'ncert-solutions-class-10-sanskrit.html', totalExpected: 12 }
];

console.log('================================================================');
console.log('🏆 COMPREHENSIVE AUDIT: CLASS 10 ALL SUBJECTS NCERT SOLUTIONS');
console.log('================================================================\n');

const overallSummary = [];

subjects.forEach(sub => {
  const dirPath = path.join(__dirname, '..', sub.dir);
  const hubPath = path.join(__dirname, '..', sub.hub);

  const hubExists = fs.existsSync(hubPath);
  const hubSize = hubExists ? (fs.readFileSync(hubPath, 'utf8').length / 1024).toFixed(1) : 0;

  // Read all chapter HTML files in dir
  const files = fs.readdirSync(dirPath).filter(f => f.startsWith('ch') && f.endsWith('.html'));

  // Sort numerically
  files.sort((a, b) => {
    const na = parseInt(a.replace('ch', '').replace('.html', ''));
    const nb = parseInt(b.replace('ch', '').replace('.html', ''));
    return na - nb;
  });

  let totalQuestions = 0;
  let totalCBQs = 0;
  let totalMarkingSchemes = 0;
  let totalExercises = 0;

  const chaptersInfo = [];

  files.forEach(f => {
    const fPath = path.join(dirPath, f);
    const content = fs.readFileSync(fPath, 'utf8');

    // Title
    const titleMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : f;

    // Sub / description
    const pMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const subDesc = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : '';

    // Q cards
    const qMatches = content.match(/class="[^"]*q-card[^"]*"/g) || [];
    const cbqMatches = content.match(/class="[^"]*cbq-card[^"]*"/g) || [];
    const markingMatches = content.match(/class="[^"]*marking-scheme[^"]*"/g) || [];
    const exMatches = content.match(/class="[^"]*ex-div[^"]*"[^>]*>([\s\S]*?)<\/div>/g) || [];

    totalQuestions += qMatches.length;
    totalCBQs += cbqMatches.length;
    totalMarkingSchemes += markingMatches.length;
    totalExercises += exMatches.length;

    const num = parseInt(f.replace('ch', '').replace('.html', ''));

    chaptersInfo.push({
      num,
      file: f,
      title,
      qCount: qMatches.length,
      cbqCount: cbqMatches.length,
      markingCount: markingMatches.length,
      exCount: exMatches.length
    });
  });

  // Check chapters-data.js
  const dataJsPath = path.join(dirPath, 'chapters-data.js');
  let dataJsChapters = 0;
  if (fs.existsSync(dataJsPath)) {
    const dataContent = fs.readFileSync(dataJsPath, 'utf8');
    const keys = (dataContent.match(/"\d+":/g) || []).length;
    dataJsChapters = keys;
  }

  overallSummary.push({
    subject: sub.name,
    hub: sub.hub,
    hubSize,
    chaptersCount: files.length,
    expectedChapters: sub.totalExpected,
    totalQuestions,
    totalCBQs,
    totalQsCombined: totalQuestions + totalCBQs,
    totalMarkingSchemes,
    dataJsChapters
  });

  console.log(`📘 SUBJECT: ${sub.name.toUpperCase()}`);
  console.log(`   - Hub File:           ${sub.hub} (${hubSize} KB) [${hubExists ? 'EXISTS' : 'MISSING'}]`);
  console.log(`   - Chapter Directory:  ${sub.dir}/ (${files.length} chapter files)`);
  console.log(`   - Preloaded Data:     ${sub.dir}/chapters-data.js contains ${dataJsChapters} chapters`);
  console.log(`   - Total NCERT Qs:     ${totalQuestions}`);
  console.log(`   - Total CBQs / HOTS:  ${totalCBQs}`);
  console.log(`   - Combined Qs:        ${totalQuestions + totalCBQs}`);
  console.log(`   - Marking Schemes:    ${totalMarkingSchemes}`);
  console.log('   --- Chapters Detail ---');
  chaptersInfo.forEach(c => {
    console.log(`      Ch ${c.num.toString().padStart(2, ' ')}: ${c.title.padEnd(45, ' ')} | ${c.qCount.toString().padStart(2, ' ')} Qs, ${c.cbqCount} CBQs, ${c.markingCount.toString().padStart(2, ' ')} Rubrics, ${c.exCount} Ex`);
  });
  console.log('');
});

console.log('================================================================');
console.log('📊 CLASS 10 ALL SUBJECTS OVERALL COVERAGE MATRIX');
console.log('================================================================');
console.table(overallSummary);
