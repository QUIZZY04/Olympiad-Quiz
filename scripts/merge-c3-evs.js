// Merge extra authentic questions into Our Wondrous World and Looking Around data files
const fs = require('fs');
const path = require('path');

const wwDataPath = path.join(__dirname, 'data-c3-evs', 'wondrousWorldData.js');
const laDataPath = path.join(__dirname, 'data-c3-evs', 'lookingAroundData.js');

const { wondrousWorldChapters } = require('./data-c3-evs/wondrousWorldData.js');
const { wondrousWorldExtra } = require('./data-c3-evs/wondrousWorldExtra.js');
const { lookingAroundChapters } = require('./data-c3-evs/lookingAroundData.js');
const { lookingAroundExtra } = require('./data-c3-evs/lookingAroundExtra.js');

console.log('Merging Our Wondrous World...');
wondrousWorldChapters.forEach(ch => {
  const extras = wondrousWorldExtra[ch.id] || [];
  if (extras.length > 0) {
    extras.forEach(eq => {
      const exists = ch.questions.some(q => q.q === eq.q);
      if (!exists) {
        ch.questions.push(eq);
      }
    });
  }
});

const wwContent = `// Official NCERT Class 3 The World Around Us / EVS (Our Wondrous World) Complete Dataset - Chapters 1 to 12
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const wondrousWorldChapters = ${JSON.stringify(wondrousWorldChapters, null, 2)};

module.exports = { wondrousWorldChapters };
`;
fs.writeFileSync(wwDataPath, wwContent, 'utf8');
console.log('Saved updated wondrousWorldData.js');

console.log('Merging Looking Around...');
lookingAroundChapters.forEach(ch => {
  const extras = lookingAroundExtra[ch.id] || [];
  if (extras.length > 0) {
    extras.forEach(eq => {
      const exists = ch.questions.some(q => q.q === eq.q);
      if (!exists) {
        ch.questions.push(eq);
      }
    });
  }
});

const laContent = `// Official NCERT Class 3 Environmental Studies (Looking Around / आस-पास) Complete Dataset - Chapters 1 to 24
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const lookingAroundChapters = ${JSON.stringify(lookingAroundChapters, null, 2)};

module.exports = { lookingAroundChapters };
`;
fs.writeFileSync(laDataPath, laContent, 'utf8');
console.log('Saved updated lookingAroundData.js');

console.log('EVS merge complete! Rebuilding HTML...');
require('./build-c3-evs.js');
