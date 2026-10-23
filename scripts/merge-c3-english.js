// Merge extra authentic questions into Santoor and Marigold data files
const fs = require('fs');
const path = require('path');

const santoorDataPath = path.join(__dirname, 'data-c3-english', 'santoorData.js');
const marigoldDataPath = path.join(__dirname, 'data-c3-english', 'marigoldData.js');

const { santoorChapters } = require('./data-c3-english/santoorData.js');
const { santoorExtra } = require('./data-c3-english/santoorExtra.js');
const { marigoldUnits } = require('./data-c3-english/marigoldData.js');
const { marigoldExtra } = require('./data-c3-english/marigoldExtra.js');

console.log('Merging Santoor...');
santoorChapters.forEach(ch => {
  const extras = santoorExtra[ch.id] || [];
  if (extras.length > 0) {
    extras.forEach(eq => {
      const exists = ch.questions.some(q => q.q === eq.q);
      if (!exists) {
        ch.questions.push(eq);
      }
    });
  }
});

const stContent = `// Official NCERT Class 3 English (Santoor) Complete Dataset - Chapters 1 to 12
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const santoorChapters = ${JSON.stringify(santoorChapters, null, 2)};

module.exports = { santoorChapters };
`;
fs.writeFileSync(santoorDataPath, stContent, 'utf8');
console.log('Saved updated santoorData.js');

console.log('Merging Marigold...');
marigoldUnits.forEach(ch => {
  const extras = marigoldExtra[ch.id] || [];
  if (extras.length > 0) {
    extras.forEach(eq => {
      const exists = ch.questions.some(q => q.q === eq.q);
      if (!exists) {
        ch.questions.push(eq);
      }
    });
  }
});

const mgContent = `// Official NCERT Class 3 English (Marigold Book 3) Complete Dataset - Units 1 to 10
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const marigoldUnits = ${JSON.stringify(marigoldUnits, null, 2)};

module.exports = { marigoldUnits };
`;
fs.writeFileSync(marigoldDataPath, mgContent, 'utf8');
console.log('Saved updated marigoldData.js');

console.log('English merge complete! Rebuilding HTML...');
require('./build-c3-english.js');
