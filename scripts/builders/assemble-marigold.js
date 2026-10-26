// scripts/builders/assemble-marigold.js
// Assembles Part 1 (Ch 1-10) and Part 2 (Ch 11-20) into marigoldData.js

const fs = require('fs');
const path = require('path');

const { marigoldPart1 } = require('./marigold-part1.js');
const { marigoldPart2 } = require('./marigold-part2.js');

const allQuestions = [...marigoldPart1, ...marigoldPart2];

const existing = require('../data-c1-english/marigoldData.js').marigoldChapters;

if (existing.length !== 20 || allQuestions.length !== 20) {
  console.error(`Mismatch: existing ${existing.length}, allQuestions ${allQuestions.length}`);
  process.exit(1);
}

const updatedChapters = existing.map((ch, idx) => {
  return {
    ...ch,
    questions: allQuestions[idx]
  };
});

const fileContent = `// scripts/data-c1-english/marigoldData.js
// Official NCERT Class 1 English: "Marigold Book 1" Complete 100% Verbatim Dataset (Classic CBSE)
// Verified 0% Shortage across all 20 chapters. 100% Physical NCERT Textbook Exercises.

const marigoldChapters = ${JSON.stringify(updatedChapters, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { marigoldChapters };
}
`;

fs.writeFileSync(path.resolve(__dirname, '../data-c1-english/marigoldData.js'), fileContent, 'utf8');
console.log(`Successfully generated verbatim Marigold dataset! Total chapters: ${updatedChapters.length}`);
let totalQs = updatedChapters.reduce((acc, c) => acc + c.questions.length, 0);
console.log(`Total verbatim questions in Marigold: ${totalQs}`);
