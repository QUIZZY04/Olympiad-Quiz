// scripts/rebuild-c5-maths-mela-data.js
const fs = require('fs');
const path = require('path');

const p1 = require('./data-c5-maths/melaPart1.js').melaPart1;
const p2 = require('./data-c5-maths/melaCh3_4_5.js').melaCh3_4_5;
const p3 = require('./data-c5-maths/melaCh6_7_8.js').melaCh6_7_8;
const p4 = require('./data-c5-maths/melaCh9_10_11.js').melaCh9_10_11;
const p5 = require('./data-c5-maths/melaCh12_13_14_15.js').melaCh12_13_14_15;

const allMelaQuestions = {
  ...p1,
  ...p2,
  ...p3,
  ...p4,
  ...p5
};

console.log('Total chapters to inject:', Object.keys(allMelaQuestions).length);

// Read current mathsMelaData.js
const melaDataPath = path.resolve(__dirname, 'data-c5-maths/mathsMelaData.js');
const melaData = require(melaDataPath);

let totalInjected = 0;
const updatedChapters = melaData.mathsMelaChapters.map(ch => {
  const newQs = allMelaQuestions[ch.id];
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

// Write back to mathsMelaData.js
const outputCode = `// Official NCERT Class 5 Mathematics: "Maths Mela" (New NEP 2020 / NCF 2023)
// 100% Comprehensive Question Dataset - Chapters 1 to 15
// Aligned with CBSE Marking Scheme (2026-27 Session)

const mathsMelaChapters = ${JSON.stringify(updatedChapters, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mathsMelaChapters };
}
`;

fs.writeFileSync(melaDataPath, outputCode, 'utf8');
console.log('Successfully updated mathsMelaData.js');
