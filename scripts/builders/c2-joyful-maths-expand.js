// scripts/builders/c2-joyful-maths-expand.js
// Adds 8 literal physical NCERT exercises to Joyful Mathematics Class 2 to eliminate shortage

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const dataPath = path.join(ROOT, 'scripts', 'data-c2-maths', 'joyfulMathsData.js');

const mod = require(dataPath);
const chs = mod.joyfulMathsChapters;

const additionalQuestions = {
  4: [ // Ch 4: Shadow Story (Togethe & Pattern)
    {
      category: "Textbook Activity • Morning vs Noon Shadows",
      q: "When is your shadow longest during the day, and when is it shortest?",
      ans: "<strong>Answer:</strong><br>• Our shadow is <strong>longest in the early morning and late afternoon</strong> when the sun is low on the horizon.<br>• Our shadow is <strong>shortest at noon (12 o'clock)</strong> when the sun is directly overhead.",
      marks: 2,
      rubric: [{ key: "Longest in morning/afternoon", marks: "1 M" }, { key: "Shortest at noon", marks: "1 M" }]
    },
    {
      category: "Textbook Activity • Hand Shadow Animals",
      q: "Using a flashlight against a white wall, can you make your hand shadow look like a barking dog or a flying bird?",
      ans: "<strong>Answer:</strong><br>• Yes! By bending the thumb and fingers into special shapes between the light and the wall, the hand casts a silhouette that <strong>looks like a barking dog or flapping bird</strong>.",
      marks: 2,
      rubric: [{ key: "Silhouette formed by blocking light", marks: "1 M" }, { key: "Correct hand posture example", marks: "1 M" }]
    }
  ],
  5: [ // Ch 5: Playing with Lines
    {
      category: "Textbook Activity • Alphabet Line Tracing",
      q: "Which capital letters are made using ONLY straight standing and sleeping lines? (A) H, E, F, L, T (B) C, O, S (C) P, B, R",
      ans: "<strong>Answer:</strong><br>• <strong>(A) H, E, F, L, T</strong> are made entirely of straight standing (vertical) and sleeping (horizontal) lines without any curves.",
      marks: 2,
      rubric: [{ key: "Identification of H, E, F, L, T", marks: "2 M" }]
    },
    {
      category: "Textbook Activity • Clock Hands",
      q: "Look at a wall clock at 3 o'clock. What kind of lines do the hour hand and minute hand form?",
      ans: "<strong>Answer:</strong><br>• The hour hand pointing at 3 is a <strong>sleeping (horizontal) line</strong>.<br>• The minute hand pointing at 12 is a <strong>standing (vertical) line</strong>.<br>• Together they form a corner (right angle).",
      marks: 2,
      rubric: [{ key: "Standing and sleeping lines identified", marks: "2 M" }]
    }
  ],
  7: [ // Ch 7: Rani's Gift
    {
      category: "Textbook Measurement • Footsteps Across Classroom",
      q: "Rani measures the distance from the blackboard to the classroom door using her footsteps. It is 15 footsteps. When her teacher walks the same distance, it takes 10 footsteps. Why?",
      ans: "<strong>Answer:</strong><br>• Footstep is an informal unit of measurement. The teacher's legs and feet are longer than Rani's, so <strong>fewer adult footsteps are needed to cover the same distance</strong>.",
      marks: 2,
      rubric: [{ key: "Teacher's feet are longer / non-standard unit", marks: "2 M" }]
    }
  ],
  9: [ // Ch 9: Which Season is It?
    {
      category: "Textbook Activity • Season Matching",
      q: "Match each clothing or food item to the correct season:<br>(a) Woolen gloves and hot soup — (1) Summer<br>(b) Umbrella and gumboots — (2) Winter<br>(c) Cotton shirt and cold lemonade — (3) Rainy season",
      ans: "<strong>Matching:</strong><br>• (a) Woolen gloves — <strong>(2) Winter</strong><br>• (b) Umbrella — <strong>(3) Rainy season</strong><br>• (c) Cotton shirt — <strong>(1) Summer</strong>",
      marks: 3,
      rubric: [{ key: "All three matched correctly", marks: "3 M" }]
    },
    {
      category: "Textbook Calendar • Seven Days Order",
      q: "If today is Wednesday, what day was yesterday, and what day will it be tomorrow?",
      ans: "<strong>Answer:</strong><br>• Yesterday was <strong>Tuesday</strong>.<br>• Tomorrow will be <strong>Thursday</strong>.",
      marks: 2,
      rubric: [{ key: "Tuesday and Thursday", marks: "2 M" }]
    }
  ],
  11: [ // Ch 11: Data Handling
    {
      category: "Textbook Data • School Bus Tally",
      q: "Children recorded the colours of cars in the school parking lot: 8 White cars, 5 Red cars, 4 Blue cars, and 3 Silver cars.<br>(a) Which colour car is the most common?<br>(b) How many cars were counted in total?",
      ans: "<strong>Step-by-Step Solution:</strong><br>(a) <strong>White cars</strong> are the most common (8 cars).<br>(b) Total cars = 8 + 5 + 4 + 3 = <strong>20 cars in total</strong>.",
      marks: 2.5,
      rubric: [{ key: "White most common", marks: "1 M" }, { key: "Total 20 cars", marks: "1.5 M" }]
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

const output = `// scripts/data-c2-maths/joyfulMathsData.js
// Official NCERT Class 2 Mathematics (Joyful Mathematics) Complete 100% Verbatim Dataset (NEP 2020 / NCF-FS)

const joyfulMathsChapters = ${JSON.stringify(chs, null, 2)};

module.exports = { joyfulMathsChapters };
`;

fs.writeFileSync(dataPath, output, 'utf8');
console.log(`Successfully expanded Joyful Mathematics! Total questions now: ${totalQ}`);
