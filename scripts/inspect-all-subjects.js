const fs = require('fs');
const path = require('path');

function inspectSubject(filePath, exportName) {
  const fullPath = path.resolve(process.cwd(), filePath);
  const mod = require(fullPath);
  const chapters = mod[exportName] || [];
  console.log(`\n======================================================`);
  console.log(`INSPECTING: ${exportName} in ${filePath}`);
  console.log(`======================================================`);
  chapters.forEach((ch, idx) => {
    const qs = ch.questions || [];
    let placeholderCount = 0;
    let duplicateCount = 0;
    const seen = new Set();
    qs.forEach((q, qIdx) => {
      const text = (q.q || q.question || '').trim();
      if (text.includes('[Ex ') || 
          text.includes('Based on the curriculum of') ||
          text.includes('solve the practical application problem') ||
          text.includes('analyze the following arithmetic progression') ||
          text.includes('mystery number $N$') ||
          text.includes('Textbook Extension & Inquiry') ||
          text.includes('Additional In-Text Task') ||
          text.includes('Practical Task') ||
          text.includes('Competency Drill') ||
          text.includes('Thinking Question')) {
        placeholderCount++;
      }
      if (seen.has(text)) {
        duplicateCount++;
      }
      seen.add(text);
    });
    console.log(`Ch ${idx+1} [${ch.id}] "${ch.title}": Total ${qs.length} | Placeholders: ${placeholderCount} | Duplicates: ${duplicateCount} | Authentic: ${qs.length - placeholderCount - duplicateCount}`);
  });
}

inspectSubject('scripts/data-c5-maths/mathMagicData.js', 'mathMagicChapters');
inspectSubject('scripts/data-c5-english/santoorData.js', 'santoorChapters');
inspectSubject('scripts/data-c5-english/marigoldData.js', 'marigoldUnits');
inspectSubject('scripts/data-c5-hindi/veenaData.js', 'veenaChapters');
inspectSubject('scripts/data-c5-hindi/rimjhimData.js', 'rimjhimChapters');
inspectSubject('scripts/data-c5-evs/wondrousWorldData.js', 'wondrousWorldChapters');
inspectSubject('scripts/data-c5-evs/lookingAroundData.js', 'lookingAroundChapters');
