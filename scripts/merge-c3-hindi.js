// Merge extra authentic questions into Veena and Rimjhim data files
const fs = require('fs');
const path = require('path');

const veenaDataPath = path.join(__dirname, 'data-c3-hindi', 'veenaData.js');
const rimjhimDataPath = path.join(__dirname, 'data-c3-hindi', 'rimjhimData.js');

const { veenaChapters } = require('./data-c3-hindi/veenaData.js');
const { veenaExtra } = require('./data-c3-hindi/veenaExtra.js');
const { rimjhimChapters } = require('./data-c3-hindi/rimjhimData.js');
const { rimjhimExtra } = require('./data-c3-hindi/rimjhimExtra.js');

console.log('Merging Veena...');
veenaChapters.forEach(ch => {
  const extras = veenaExtra[ch.id] || [];
  if (extras.length > 0) {
    extras.forEach(eq => {
      const exists = ch.questions.some(q => q.q === eq.q);
      if (!exists) {
        ch.questions.push(eq);
      }
    });
  }
});

const vnContent = `// Official NCERT Class 3 Hindi (Veena / वीणा भाग 1) Complete Dataset - Chapters 1 to 18
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const veenaChapters = ${JSON.stringify(veenaChapters, null, 2)};

module.exports = { veenaChapters };
`;
fs.writeFileSync(veenaDataPath, vnContent, 'utf8');
console.log('Saved updated veenaData.js');

console.log('Merging Rimjhim...');
rimjhimChapters.forEach(ch => {
  const extras = rimjhimExtra[ch.id] || [];
  if (extras.length > 0) {
    extras.forEach(eq => {
      const exists = ch.questions.some(q => q.q === eq.q);
      if (!exists) {
        ch.questions.push(eq);
      }
    });
  }
});

const rjContent = `// Official NCERT Class 3 Hindi (Rimjhim - रिमझिम भाग 3) Complete Dataset - Chapters 1 to 14
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const rimjhimChapters = ${JSON.stringify(rimjhimChapters, null, 2)};

module.exports = { rimjhimChapters };
`;
fs.writeFileSync(rimjhimDataPath, rjContent, 'utf8');
console.log('Saved updated rimjhimData.js');

console.log('Hindi merge complete! Rebuilding HTML...');
require('./build-c3-hindi.js');
