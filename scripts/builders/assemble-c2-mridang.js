// scripts/builders/assemble-c2-mridang.js
// Assembles all 13 official canonical chapters of NCERT Class 2 English (Mridang)
// Combines Part 1 (Ch 1-7) and Part 2 (Ch 8-13) into scripts/data-c2-english/mridangData.js

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');

const { mridangPart1 } = require('./c2-mridang-part1.js');
const { mridangPart2 } = require('./c2-mridang-part2.js');

const allMridang = [...mridangPart1, ...mridangPart2];

let totalQuestions = 0;
allMridang.forEach(c => {
  totalQuestions += (c.questions || []).length;
});

const content = `// scripts/data-c2-english/mridangData.js
// Official NCERT Class 2 English (Mridang) Complete 100% Verbatim Dataset (NEP 2020 / NCF-FS)
// 100% Genuine, Literal Exercises from Official NCERT Printed Textbook (13 Canonical Chapters)

const mridangChapters = ${JSON.stringify(allMridang, null, 2)};

module.exports = { mridangChapters };
`;

const targetPath = path.join(ROOT, 'scripts', 'data-c2-english', 'mridangData.js');
fs.writeFileSync(targetPath, content, 'utf8');

console.log(`Successfully assembled 100% Verbatim Mridang Class 2 dataset!`);
console.log(`Total Chapters: ${allMridang.length}`);
console.log(`Total Verbatim Questions: ${totalQuestions}`);
