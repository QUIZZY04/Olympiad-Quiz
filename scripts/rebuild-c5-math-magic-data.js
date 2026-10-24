// scripts/rebuild-c5-math-magic-data.js
const fs = require('fs');
const path = require('path');

const p1 = require('./data-c5-maths/magicCh1_2_3.js').magicCh1_2_3;
const p2 = require('./data-c5-maths/magicCh4_5_6_7.js').magicCh4_5_6_7;
const p3 = require('./data-c5-maths/magicCh8_9_10.js').magicCh8_9_10;
const p4 = require('./data-c5-maths/magicCh11_12_13_14.js').magicCh11_12_13_14;

const allMagicQuestions = {
  ...p1,
  ...p2,
  ...p3,
  ...p4
};

console.log('Total Math-Magic chapters to inject:', Object.keys(allMagicQuestions).length);

// Read current mathMagicData.js
const magicDataPath = path.resolve(__dirname, 'data-c5-maths/mathMagicData.js');
const magicData = require(magicDataPath);

let totalInjected = 0;
const updatedChapters = magicData.mathMagicChapters.map(ch => {
  const newQs = allMagicQuestions[ch.id];
  if (newQs && newQs.length > 0) {
    totalInjected += newQs.length;
    return {
      ...ch,
      questions: newQs
    };
  } else {
    console.warn(`Warning: No replacement questions found for ${ch.id}`);
    return ch;
  }
});

console.log(`Replaced questions in ${updatedChapters.length} chapters. Total authentic questions: ${totalInjected}`);

// Write back to mathMagicData.js
const outputCode = `// Official NCERT Class 5 Mathematics: "Math-Magic" (Classic CBSE Track)
// 100% Comprehensive Question Dataset - Chapters 1 to 14
// Aligned with CBSE Marking Scheme (2026-27 Session)

const mathMagicChapters = ${JSON.stringify(updatedChapters, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mathMagicChapters };
}
`;

fs.writeFileSync(magicDataPath, outputCode, 'utf8');
console.log('Successfully updated mathMagicData.js');
