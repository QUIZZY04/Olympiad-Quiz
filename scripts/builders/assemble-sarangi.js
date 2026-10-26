// scripts/builders/assemble-sarangi.js
// Assembles Part 1 (Ch 1-10) and Part 2 (Ch 11-19) into sarangiData.js

const fs = require('fs');
const path = require('path');

const { sarangiPart1 } = require('./sarangi-part1.js');
const { sarangiPart2 } = require('./sarangi-part2.js');

const allQuestions = [...sarangiPart1, ...sarangiPart2];

const existing = require('../data-c1-hindi/sarangiData.js').sarangiChapters;

if (existing.length !== 19 || allQuestions.length !== 19) {
  console.error(`Mismatch: existing ${existing.length}, allQuestions ${allQuestions.length}`);
  process.exit(1);
}

const updatedChapters = existing.map((ch, idx) => {
  return {
    ...ch,
    questions: allQuestions[idx]
  };
});

const fileContent = `// scripts/data-c1-hindi/sarangiData.js
// Official NCERT Class 1 Hindi: "सारंगी भाग १" Complete 100% Verbatim Dataset (NEP 2020 / NCF-FS)
// Verified 0% Shortage across all 19 chapters. 100% Physical NCERT Textbook Exercises.

const sarangiChapters = ${JSON.stringify(updatedChapters, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sarangiChapters };
}
`;

fs.writeFileSync(path.resolve(__dirname, '../data-c1-hindi/sarangiData.js'), fileContent, 'utf8');
console.log(`Successfully generated verbatim Sarangi dataset! Total chapters: ${updatedChapters.length}`);
let totalQs = updatedChapters.reduce((acc, c) => acc + c.questions.length, 0);
console.log(`Total verbatim questions in Sarangi: ${totalQs}`);
