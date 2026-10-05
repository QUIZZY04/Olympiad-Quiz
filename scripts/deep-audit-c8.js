const fs = require('fs');
const path = require('path');

function auditSubject(name, filename) {
  const filePath = path.join(__dirname, '..', filename);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${name}: ${filename} missing!`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  console.log(`\n======================================================`);
  console.log(`📘 AUDIT: CLASS 8 ${name.toUpperCase()} (${filename})`);
  console.log(`======================================================`);

  // Extract chapters / sections flexibly
  const sectionRegex = /<section[^>]*class="[^"]*chapter-section[^"]*"[^>]*id="([^"]+)"[^>]*>([\s\S]*?)(?=<\/section>)/g;
  let match;
  let chIndex = 0;
  let totalQs = 0;
  let totalCbqs = 0;
  let totalMarking = 0;

  const chapters = [];

  while ((match = sectionRegex.exec(html)) !== null) {
    chIndex++;
    const secId = match[1];
    const secBody = match[2];

    // Find title
    const titleMatch = secBody.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : secId;

    // Find sub/book info
    const subMatch = secBody.match(/<p[^>]*class="[^"]*ch-sub[^"]*"[^>]*>([\s\S]*?)<\/p>/) || secBody.match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const sub = subMatch ? subMatch[1].replace(/<[^>]+>/g, '').trim() : '';

    // Count Qs
    const qCards = secBody.match(/class="[^"]*q-card[^"]*"/g) || [];
    const cbqCards = secBody.match(/class="[^"]*cbq-card[^"]*"/g) || [];
    const markingSchemes = secBody.match(/class="[^"]*marking-scheme[^"]*"/g) || [];
    const exDivs = secBody.match(/class="[^"]*ex-div[^"]*"[^>]*>([\s\S]*?)<\/div>/g) || [];
    const exNames = exDivs.map(e => e.replace(/<[^>]+>/g, '').trim());

    totalQs += qCards.length;
    totalCbqs += cbqCards.length;
    totalMarking += markingSchemes.length;

    chapters.push({
      index: chIndex,
      id: secId,
      title,
      sub: sub.slice(0, 70),
      qCount: qCards.length,
      cbqCount: cbqCards.length,
      markingCount: markingSchemes.length,
      exercises: exNames
    });
  }

  console.log(`Total Chapters Detected: ${chapters.length}`);
  console.log(`Total NCERT Questions:   ${totalQs}`);
  console.log(`Total CBQs:              ${totalCbqs}`);
  console.log(`Total Questions (Qs+CBQ):${totalQs + totalCbqs}`);
  console.log(`Total Marking Schemes:   ${totalMarking}\n`);

  chapters.forEach(ch => {
    const exStr = ch.exercises.length > 0 ? ` | Ex: [${ch.exercises.join(', ')}]` : '';
    console.log(`  ${ch.index.toString().padStart(2, ' ')}. [${ch.id}] ${ch.title} — ${ch.qCount} Qs, ${ch.cbqCount} CBQs${exStr}`);
  });

  return { name, filename, chapters, totalQs, totalCbqs, totalMarking };
}

const subjects = [
  { name: 'Mathematics', file: 'ncert-solutions-class-8-maths.html' },
  { name: 'Science', file: 'ncert-solutions-class-8-science.html' },
  { name: 'Social Science', file: 'ncert-solutions-class-8-sst.html' },
  { name: 'Hindi', file: 'ncert-solutions-class-8-hindi.html' },
  { name: 'English', file: 'ncert-solutions-class-8-english.html' },
  { name: 'Sanskrit', file: 'ncert-solutions-class-8-sanskrit.html' }
];

subjects.forEach(s => auditSubject(s.name, s.file));
