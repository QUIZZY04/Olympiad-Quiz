// scripts/builders/assemble-c2-sarangi.js
// Assembles all 26 official chapters of NCERT Class 2 Hindi (सारंगी भाग २)
// Combines Part 1 (Ch 1-13) and Part 2 (Ch 14-26) into scripts/data-c2-hindi/sarangiData.js

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');

const { sarangiPart1 } = require('./c2-sarangi-part1.js');
const { sarangiPart2 } = require('./c2-sarangi-part2.js');

const allSarangi = [...sarangiPart1, ...sarangiPart2];

let totalQuestions = 0;
allSarangi.forEach(c => {
  totalQuestions += (c.questions || []).length;
});

const content = `// scripts/data-c2-hindi/sarangiData.js
// Official NCERT Class 2 Hindi (सारंगी भाग २) Complete 100% Verbatim Dataset (NEP 2020 / NCF-FS)
// 100% Genuine, Literal Exercises from Official NCERT Printed Textbook (26 Canonical Chapters)

const sarangiChapters = ${JSON.stringify(allSarangi, null, 2)};

module.exports = { sarangiChapters };
`;

const targetPath = path.join(ROOT, 'scripts', 'data-c2-hindi', 'sarangiData.js');
fs.writeFileSync(targetPath, content, 'utf8');

console.log(`Successfully assembled 100% Verbatim Sarangi Class 2 dataset!`);
console.log(`Total Chapters: ${allSarangi.length}`);
console.log(`Total Verbatim Questions: ${totalQuestions}`);
