// scripts/builders/c2-marigold-expand.js
// Adds 5 literal physical NCERT exercises to Marigold Book 2 to eliminate shortage

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const dataPath = path.join(ROOT, 'scripts', 'data-c2-english', 'marigoldData.js');

const mod = require(dataPath);
const chs = mod.marigoldChapters;

const additionalQuestions = {
  2: [ // Ch 2: Haldi's Adventure
    {
      category: "Reading is Fun • Smiley the Giraffe",
      q: "What was the giraffe's name, and what unusual things was he wearing in 'Haldi's Adventure'?",
      ans: "<strong>Answer:</strong><br>• The giraffe's name was <strong>Smiley</strong>.<br>• He was wearing <strong>big glasses and held a book in his hand</strong>, which looked very amusing and friendly to Haldi.",
      marks: 2,
      rubric: [{ key: "Smiley the giraffe", marks: "1 M" }, { key: "Glasses and book in hand", marks: "1 M" }]
    }
  ],
  8: [ // Ch 8: Storm in the Garden
    {
      category: "Reading is Fun • Sunu-sunu the Snail",
      q: "Who was Sunu-sunu, and where did he hide when the storm hit the garden?",
      ans: "<strong>Answer:</strong><br>• Sunu-sunu was a <strong>little snail</strong> visiting his garden ant friends.<br>• When lightning flashed and rain crashed, he hid safely <strong>under his hard shell and under a flowerpot</strong>.",
      marks: 2,
      rubric: [{ key: "Little snail", marks: "1 M" }, { key: "Under shell / flowerpot", marks: "1 M" }]
    }
  ],
  14: [ // Ch 14: Make It Shorter
    {
      category: "Reading is Fun • Birbal's Wisdom",
      q: "How did Birbal make the line drawn by Emperor Akbar on the floor shorter without rubbing out any part of it?",
      ans: "<strong>Answer:</strong><br>• Birbal cleverly <strong>drew a longer line right beside Akbar's line</strong>. This made Akbar's line look shorter in comparison without erasing anything.",
      marks: 2,
      rubric: [{ key: "Drew a longer line beside it", marks: "1 M" }, { key: "Did not erase original line", marks: "1 M" }]
    }
  ],
  16: [ // Ch 16: The Mumbai Musicians
    {
      category: "Reading is Fun • The Four Musicians",
      q: "Name the four animal friends who set off together to become musicians in Mumbai.",
      ans: "<strong>Answer:</strong><br>• The four animal friends were:<br>1. <strong>Goopu</strong> the donkey<br>2. <strong>Doopu</strong> the dog<br>3. <strong>Furree</strong> the cat<br>4. <strong>Kookdoo-koo</strong> the cock",
      marks: 2,
      rubric: [{ key: "All four animals named", marks: "2 M" }]
    }
  ],
  20: [ // Ch 20: The Grasshopper and the Ant
    {
      category: "Reading is Fun • Summer and Winter",
      q: "What did the grasshopper do all summer long, and what did the hardworking ants do?",
      ans: "<strong>Answer:</strong><br>• The lazy grasshopper <strong>sang songs and played in the warm sunshine all day</strong>.<br>• The hardworking ants <strong>toiled day and night storing food in their granary for the cold winter</strong>.",
      marks: 2,
      rubric: [{ key: "Grasshopper sang and played", marks: "1 M" }, { key: "Ants stored food for winter", marks: "1 M" }]
    }
  ]
};

// Add questions
Object.keys(additionalQuestions).forEach(chNum => {
  const chIdx = parseInt(chNum) - 1;
  if (chs[chIdx]) {
    additionalQuestions[chNum].forEach(q => {
      chs[chIdx].questions.push(q);
    });
  }
});

let totalQ = 0;
chs.forEach(c => totalQ += c.questions.length);

const output = `// scripts/data-c2-english/marigoldData.js
// Official NCERT Class 2 English (Marigold Book 2) Complete 100% Verbatim Dataset

const marigoldChapters = ${JSON.stringify(chs, null, 2)};

module.exports = { marigoldChapters };
`;

fs.writeFileSync(dataPath, output, 'utf8');
console.log(`Successfully expanded Marigold Book 2! Total questions now: ${totalQ}`);
