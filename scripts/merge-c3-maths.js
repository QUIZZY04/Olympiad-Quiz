// Merge extra authentic questions into Maths Mela and Math-Magic data files
const fs = require('fs');
const path = require('path');

const mathsMelaDataPath = path.join(__dirname, 'data-c3-maths', 'mathsMelaData.js');
const mathMagicDataPath = path.join(__dirname, 'data-c3-maths', 'mathMagicData.js');

const { mathsMelaChapters } = require('./data-c3-maths/mathsMelaData.js');
const { mathsMelaExtra } = require('./data-c3-maths/mathsMelaExtra.js');
const { mathMagicChapters } = require('./data-c3-maths/mathMagicData.js');
const { mathMagicExtra } = require('./data-c3-maths/mathMagicExtra.js');

console.log('Merging Maths Mela...');
mathsMelaChapters.forEach(ch => {
  const extras = mathsMelaExtra[ch.id] || [];
  if (extras.length > 0) {
    // Only add if not already present
    extras.forEach(eq => {
      const exists = ch.questions.some(q => q.q === eq.q);
      if (!exists) {
        ch.questions.push(eq);
      }
    });
  }
});

const mmContent = `// Official NCERT Class 3 Mathematics (Maths Mela / आनन्दमय गणित) Complete Dataset - Chapters 1 to 14
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const mathsMelaChapters = ${JSON.stringify(mathsMelaChapters, null, 2)};

module.exports = { mathsMelaChapters };
`;
fs.writeFileSync(mathsMelaDataPath, mmContent, 'utf8');
console.log('Saved updated mathsMelaData.js');

console.log('Merging Math-Magic...');
mathMagicChapters.forEach(ch => {
  const extras = mathMagicExtra[ch.id] || [];
  if (extras.length > 0) {
    extras.forEach(eq => {
      const exists = ch.questions.some(q => q.q === eq.q);
      if (!exists) {
        ch.questions.push(eq);
      }
    });
  }
});

const mmgContent = `// Official NCERT Class 3 Mathematics (Math-Magic / गणित का जादू) Complete Dataset - Chapters 1 to 14
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const mathMagicChapters = ${JSON.stringify(mathMagicChapters, null, 2)};

module.exports = { mathMagicChapters };
`;
fs.writeFileSync(mathMagicDataPath, mmgContent, 'utf8');
console.log('Saved updated mathMagicData.js');

console.log('Maths merge complete! Rebuilding HTML...');
require('./build-c3-maths.js');
