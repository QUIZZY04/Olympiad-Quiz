// scripts/clean-c5-duplicates.js
const fs = require('fs');
const path = require('path');

function dedupeChapterQuestions(chapters, bookName) {
  let removedCount = 0;
  const updated = chapters.map(ch => {
    const seen = new Set();
    const cleanQuestions = [];
    ch.questions.forEach(q => {
      const norm = q.q.replace(/<[^>]+>/g, '').trim().toLowerCase();
      if (!seen.has(norm)) {
        seen.add(norm);
        cleanQuestions.push(q);
      } else {
        removedCount++;
      }
    });
    return {
      ...ch,
      questions: cleanQuestions
    };
  });
  console.log(`[${bookName}] Removed ${removedCount} duplicates. Remaining clean questions: ${updated.reduce((s, c) => s + c.questions.length, 0)}`);
  return updated;
}

// 1. Clean Marigold
const marigoldPath = path.resolve(__dirname, 'data-c5-english/marigoldData.js');
const marigoldData = require(marigoldPath);
const cleanMarigold = dedupeChapterQuestions(marigoldData.marigoldUnits, 'Marigold');
fs.writeFileSync(marigoldPath, `// Official NCERT Class 5 English: "Marigold" (Classic CBSE Track)
// 100% Comprehensive Question Dataset - Units 1 to 10
// Aligned with CBSE Marking Scheme (2026-27 Session)

const marigoldUnits = ${JSON.stringify(cleanMarigold, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { marigoldUnits };
}
`, 'utf8');

// 2. Clean Rimjhim
const rimjhimPath = path.resolve(__dirname, 'data-c5-hindi/rimjhimData.js');
const rimjhimData = require(rimjhimPath);
const cleanRimjhim = dedupeChapterQuestions(rimjhimData.rimjhimChapters, 'Rimjhim');
fs.writeFileSync(rimjhimPath, `// Official NCERT Class 5 Hindi: "Rimjhim" (Classic CBSE Track)
// 100% Comprehensive Question Dataset - Chapters 1 to 14
// Aligned with CBSE Marking Scheme (2026-27 Session)

const rimjhimChapters = ${JSON.stringify(cleanRimjhim, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { rimjhimChapters };
}
`, 'utf8');

// 3. Clean Looking Around
const laPath = path.resolve(__dirname, 'data-c5-evs/lookingAroundData.js');
const laData = require(laPath);
const cleanLA = dedupeChapterQuestions(laData.lookingAroundChapters, 'Looking Around');
fs.writeFileSync(laPath, `// Official NCERT Class 5 EVS: "Looking Around" (Classic CBSE Track)
// 100% Comprehensive Question Dataset - Chapters 1 to 22
// Aligned with CBSE Marking Scheme (2026-27 Session)

const lookingAroundChapters = ${JSON.stringify(cleanLA, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { lookingAroundChapters };
}
`, 'utf8');

console.log('All duplicates purged successfully!');
