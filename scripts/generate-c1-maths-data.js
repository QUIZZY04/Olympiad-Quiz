// scripts/generate-c1-maths-data.js
// Generates official NCERT Class 1 Mathematics Datasets:
// 1. Joyful Mathematics (NEP 2020 / NCF-FS) - 13 Chapters
// 2. Math-Magic Book 1 (Classic CBSE) - 13 Chapters

const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'data-c1-maths');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

// --- 1. JOYFUL MATHEMATICS (13 CHAPTERS) ---
const joyfulMathsChapters = [
  {
    id: "jm1",
    num: 1,
    unit: "Unit 1: Spatial Understanding & Shapes",
    title: "Finding the Furry Cat",
    subtitle: "Pre-Number Spatial Concepts: Inside/Outside, Top/Bottom, Nearer/Farther, On/Under",
    concepts: [
      "Identifying spatial positions: inside and outside, on and under, top and bottom.",
      "Comparing distances: nearer to and farther from a reference object.",
      "Developing spatial vocabulary through visual observation and classroom games."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><rect x="40" y="40" width="80" height="50" fill="#3b82f6" rx="6"/><circle cx="80" cy="65" r="14" fill="#fef08a"/><text x="80" y="69" font-size="10" font-weight="700" text-anchor="middle" fill="#854d0e">Cat</text><text x="80" y="105" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Inside Box</text><rect x="180" y="70" width="100" height="15" fill="#8b5cf6" rx="3"/><circle cx="230" cy="55" r="14" fill="#fed7aa"/><text x="230" y="59" font-size="10" font-weight="700" text-anchor="middle" fill="#9a3412">Cat</text><text x="230" y="105" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">On the Table</text><line x1="330" y1="80" x2="470" y2="80" stroke="#94a3b8" stroke-width="4"/><circle cx="360" cy="70" r="14" fill="#bbf7d0"/><circle cx="450" cy="70" r="14" fill="#fecaca"/><text x="360" y="105" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">Near Tree</text><text x="450" y="105" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">Far from Tree</text></svg>`,
    cbq: {
      title: "Playground Spatial Clues",
      text: "Lina and Kabir are playing hide and seek in the school garden. Lina spots her kitten sitting under a wooden bench, Kabir is standing on top of the slide, and a squirrel is inside a hollow log.",
      question: "Which animal is underneath a playground object? Where is Kabir located relative to the slide?",
      answer: "1. The kitten is underneath the playground object (sitting under the wooden bench).<br>2. Kabir is at the top of the slide (on top).",
      rubric: "1 M for kitten under bench + 1 M for Kabir on top of slide"
    },
    questions: [
      {
        category: "Textbook Activity • Inside or Outside",
        q: "In the picture on Page 4, the furry cat is sleeping in a basket. Is the cat inside the basket or outside the basket?",
        ans: "<strong>Answer:</strong><br>The furry cat is <strong>inside the basket</strong> because its entire body is resting within the borders of the basket.",
        marks: 2,
        rubric: [{ key: "Correct position identified as 'inside'", marks: "1 M" }, { key: "Explanation using boundary", marks: "1 M" }]
      },
      {
        category: "Concept Check • Top and Bottom",
        q: "Look at the big mango tree. A red bird is sitting on the highest branch and a puppy is playing on the grass below. Who is at the top and who is at the bottom?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The red bird is at the <strong>top</strong> (highest branch of the tree).<br>• The puppy is at the <strong>bottom</strong> (on the grass under the tree).",
        marks: 2,
        rubric: [{ key: "Bird at the top", marks: "1 M" }, { key: "Puppy at the bottom", marks: "1 M" }]
      },
      {
        category: "Spatial Comparison • Nearer and Farther",
        q: "Two children, Rohan and Priya, are walking to school. Rohan is 5 steps away from the school gate, while Priya is 25 steps away. Who is nearer to the school gate and who is farther from it?",
        ans: "<strong>Step-by-Step Comparison:</strong><br>• Rohan is 5 steps away, so Rohan is <strong>nearer</strong> to the school gate.<br>• Priya is 25 steps away, so Priya is <strong>farther</strong> from the school gate.",
        marks: 3,
        rubric: [{ key: "Rohan identified as nearer", marks: "1.5 M" }, { key: "Priya identified as farther", marks: "1.5 M" }]
      },
      {
        category: "Observation • On and Under",
        q: "A book is placed on the table, and a ball is kept under the table. What will happen if you drop an eraser from above the table? Where does it fall?",
        ans: "<strong>Answer:</strong><br>The eraser starts from <strong>above</strong> the table. If dropped, it will land <strong>on</strong> the table or bounce onto the floor <strong>under</strong> the table.",
        marks: 2,
        rubric: [{ key: "Identifying 'above' and 'on/under' table", marks: "2 M" }]
      },
      {
        category: "Think & Discuss • Bigger or Smaller",
        q: "Draw or name two fruits found in your kitchen: one that is bigger and one that is smaller.",
        ans: "<strong>Answer:</strong><br>• <strong>Bigger fruit:</strong> Watermelon (तरबूज) or Papaya (पपीता).<br>• <strong>Smaller fruit:</strong> Lemon (नींबू) or Grape (अंगूर).<br>Watermelon is much bigger in size than a lemon.",
        marks: 2,
        rubric: [{ key: "Correct example of bigger fruit", marks: "1 M" }, { key: "Correct example of smaller fruit", marks: "1 M" }]
      },
      {
        category: "Everyday Math • Above and Below",
        q: "A ceiling fan is spinning above the bed, and a pair of slippers is kept below the bed. Which object is above and which is below?",
        ans: "<strong>Answer:</strong><br>• The <strong>ceiling fan</strong> is <strong>above</strong> the bed.<br>• The <strong>slippers</strong> are <strong>below</strong> (under) the bed.",
        marks: 2,
        rubric: [{ key: "Fan identified as above", marks: "1 M" }, { key: "Slippers identified as below", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm2",
    num: 2,
    unit: "Unit 1: Spatial Understanding & Shapes",
    title: "What is Long? What is Round?",
    subtitle: "Exploring 3D & 2D Shapes: Rolling, Sliding, and Sorting Objects",
    concepts: [
      "Distinguishing between long objects and round objects.",
      "Understanding rolling vs sliding based on flat and curved surfaces.",
      "Sorting daily life objects by shape and building towers."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><rect x="50" y="45" width="110" height="15" fill="#f59e0b" rx="4"/><text x="105" y="80" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Long (Pencil/Stick)</text><circle cx="250" cy="52" r="22" fill="#ef4444"/><text x="250" y="90" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">Round (Ball/Orange)</text><rect x="360" y="32" width="40" height="40" fill="#3b82f6" rx="3"/><text x="380" y="90" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Slides (Box)</text><circle cx="450" cy="52" r="18" fill="#10b981"/><text x="450" y="90" font-size="11" font-weight="700" fill="#065f46" text-anchor="middle">Rolls (Wheel)</text></svg>`,
    cbq: {
      title: "Tower Building Challenge",
      text: "During art class, Rohan tries to build a high tower using 5 round tennis balls, but the balls roll away and the tower falls down. Meena uses 5 matchboxes and successfully builds a tall tower.",
      question: "Why did Rohan's tower collapse while Meena's tower stood firmly? Which shape is best for stacking?",
      answer: "1. Rohan used round balls with curved surfaces which roll easily and have no flat faces to balance on.<br>2. Meena used matchboxes with flat faces that slide and stack stably without rolling. Flat-faced objects are best for stacking.",
      rubric: "1.5 M for curved surfaces roll + 1.5 M for flat surfaces stack"
    },
    questions: [
      {
        category: "Textbook Exercise • Long vs Round",
        q: "Classify the following items into 'Long' and 'Round': Ruler, Cricket Ball, Flute (Bansuri), Orange, Carrot, Coin.",
        ans: "<strong>Classification:</strong><br>• <strong>Long Objects:</strong> Ruler, Flute (Bansuri), Carrot.<br>• <strong>Round Objects:</strong> Cricket Ball, Orange, Coin (circular face).",
        marks: 3,
        rubric: [{ key: "Correctly classified long objects", marks: "1.5 M" }, { key: "Correctly classified round objects", marks: "1.5 M" }]
      },
      {
        category: "Action Investigation • Rolling and Sliding",
        q: "Will a football roll or slide on a smooth slide in the park? What about a wooden block?",
        ans: "<strong>Answer:</strong><br>• A <strong>football rolls</strong> because it has a curved round surface.<br>• A <strong>wooden block slides</strong> because it has flat surfaces.",
        marks: 2,
        rubric: [{ key: "Football rolls explained", marks: "1 M" }, { key: "Wooden block slides explained", marks: "1 M" }]
      },
      {
        category: "Hands-on Math • Both Roll and Slide",
        q: "Name two objects that can both roll and slide.",
        ans: "<strong>Answer:</strong><br>1. <strong>A Coin:</strong> It rolls when pushed on its round edge, and it slides when pushed flat on its face.<br>2. <strong>A Water Bottle or Glass Tumbler:</strong> It rolls when kept on its curved side, and slides when standing on its flat bottom.",
        marks: 2,
        rubric: [{ key: "Two objects identified", marks: "1 M" }, { key: "Explanation of how both happen", marks: "1 M" }]
      },
      {
        category: "Let Us Do • Making Towers",
        q: "Can you stack coins to make a tower? Why does a coin tower stand, but a marble tower cannot be made?",
        ans: "<strong>Answer:</strong><br>• Yes, coins can be stacked into a tower because coins have <strong>flat top and bottom surfaces</strong>.<br>• Marbles cannot be stacked because they are completely <strong>round with only curved surfaces</strong>, so they roll off.",
        marks: 3,
        rubric: [{ key: "Coins stack due to flat faces", marks: "1.5 M" }, { key: "Marbles roll off due to curved surfaces", marks: "1.5 M" }]
      },
      {
        category: "Riddle Time • Guess the Shape",
        q: "'Round all around, has no corners, I can roll in your hand.' What am I?",
        ans: "<strong>Answer:</strong><br>You are a <strong>Ball</strong> (or an Orange / Lemon / Marble / Ladoo).",
        marks: 1,
        rubric: [{ key: "Correct answer (Ball/Circle)", marks: "1 M" }]
      },
      {
        category: "Creative Thinking • Drawing Shapes",
        q: "Draw or describe an object that is long and pointed at one end.",
        ans: "<strong>Answer:</strong><br>A <strong>Pencil</strong> or a <strong>Crayon</strong> or a <strong>Chili</strong>. It has a long cylindrical body with a sharp pointed tip at one end.",
        marks: 2,
        rubric: [{ key: "Object named and described", marks: "2 M" }]
      }
    ]
  },
  {
    id: "jm3",
    num: 3,
    unit: "Unit 2: Number Sense (1 to 9)",
    title: "Mango Treat",
    subtitle: "Counting 1 to 9, Number Names, One-to-One Matching & Comparison",
    concepts: [
      "Counting physical objects from 1 to 9 with one-to-one correspondence.",
      "Writing numerals and matching with number names: One to Nine.",
      "Comparing sets: More than, Less than, and Equal to."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fff7ed" rx="10"/><circle cx="50" cy="50" r="16" fill="#f97316"/><text x="50" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">1</text><circle cx="100" cy="50" r="16" fill="#f97316"/><text x="100" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">2</text><circle cx="150" cy="50" r="16" fill="#f97316"/><text x="150" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">3</text><circle cx="200" cy="50" r="16" fill="#f97316"/><text x="200" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">4</text><circle cx="250" cy="50" r="16" fill="#f97316"/><text x="250" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">5</text><circle cx="300" cy="50" r="16" fill="#f97316"/><text x="300" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">6</text><circle cx="350" cy="50" r="16" fill="#f97316"/><text x="350" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">7</text><circle cx="400" cy="50" r="16" fill="#f97316"/><text x="400" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">8</text><circle cx="450" cy="50" r="16" fill="#f97316"/><text x="450" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">9</text><text x="250" y="100" font-size="12" font-weight="700" fill="#c2410c" text-anchor="middle">Numbers 1 to 9 with One-to-One Correspondence</text></svg>`,
    cbq: {
      title: "Grandmother's Mango Basket",
      text: "Dadi brings a basket of ripe mangoes from the orchard. Ankit counts 7 mangoes in the basket, while Simran counts 5 mangoes in her bag.",
      question: "Who has more mangoes? How many more mangoes are there in the basket than in the bag?",
      answer: "1. Ankit has more mangoes (7 > 5).<br>2. 7 - 5 = 2 more mangoes in Dadi's basket.",
      rubric: "1.5 M for Ankit / 7 > 5 + 1.5 M for 2 more mangoes"
    },
    questions: [
      {
        category: "Counting • Number Matching",
        q: "Count the objects and write the number and number name: 🍎🍎🍎🍎🍎 (5 apples).",
        ans: "<strong>Answer:</strong><br>• Count: 1, 2, 3, 4, 5<br>• Number: <strong>5</strong><br>• Number Name: <strong>FIVE</strong>",
        marks: 2,
        rubric: [{ key: "Correct numeral 5", marks: "1 M" }, { key: "Correct number name FIVE", marks: "1 M" }]
      },
      {
        category: "Comparison • More or Less",
        q: "Set A has 6 butterflies. Set B has 4 flowers. Which set has more objects? Can every butterfly sit on a flower?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Set A = 6 butterflies<br>• Set B = 4 flowers<br>• 6 is more than 4 (6 > 4). Set A has more objects.<br>• No, only 4 butterflies will get a flower; 2 butterflies will be left without a flower.",
        marks: 3,
        rubric: [{ key: "Set A has more (6 > 4)", marks: "1.5 M" }, { key: "Explanation of 2 left without flower", marks: "1.5 M" }]
      },
      {
        category: "Number Sequence • Missing Numbers",
        q: "Fill in the missing numbers in the train: 1, 2, __, 4, __, 6, 7, __, 9.",
        ans: "<strong>Answer:</strong><br>The missing numbers are <strong>3</strong>, <strong>5</strong>, and <strong>8</strong>.<br>Complete sequence: 1, 2, <strong>3</strong>, 4, <strong>5</strong>, 6, 7, <strong>8</strong>, 9.",
        marks: 3,
        rubric: [{ key: "3, 5, 8 identified correctly", marks: "3 M" }]
      },
      {
        category: "Concept of Zero • Empty Plate",
        q: "There were 3 laddoos on a plate. Chintu ate all 3 laddoos. How many laddoos are left on the plate?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Starting laddoos = 3<br>• Laddoos eaten = 3<br>• Remaining laddoos = 3 - 3 = <strong>0 (Zero)</strong>.<br>There are no laddoos left.",
        marks: 2,
        rubric: [{ key: "Calculation 3 - 3 = 0", marks: "1 M" }, { key: "Concept of Zero explained", marks: "1 M" }]
      },
      {
        category: "Before, After and Between",
        q: "Write what comes before, after, and between:<br>(a) What comes before 5?<br>(b) What comes after 7?<br>(c) What comes between 3 and 5?",
        ans: "<strong>Answer:</strong><br>(a) Number before 5 is <strong>4</strong>.<br>(b) Number after 7 is <strong>8</strong>.<br>(c) Number between 3 and 5 is <strong>4</strong>.",
        marks: 3,
        rubric: [{ key: "Part (a): 4", marks: "1 M" }, { key: "Part (b): 8", marks: "1 M" }, { key: "Part (c): 4", marks: "1 M" }]
      },
      {
        category: "Mental Math • Make 5",
        q: "Show two different ways to make the number 5 using two groups.",
        ans: "<strong>Answer:</strong><br>• Way 1: 2 + 3 = 5 (2 red dots and 3 blue dots)<br>• Way 2: 1 + 4 = 5 (1 green leaf and 4 yellow leaves)<br>• Way 3: 0 + 5 = 5.",
        marks: 2,
        rubric: [{ key: "Two valid combinations given", marks: "2 M" }]
      }
    ]
  },
  {
    id: "jm4",
    num: 4,
    unit: "Unit 2: Number Sense (10 to 20)",
    title: "Making 10",
    subtitle: "Understanding a Bundle of 10, Place Value: Tens and Ones",
    concepts: [
      "Grouping 10 loose sticks into 1 bundle of ten.",
      "Understanding two-digit numbers 10 to 20 as Tens and Ones.",
      "Number bonds to 10 (combinations that add up to 10)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0fdf4" rx="10"/><rect x="60" y="30" width="60" height="60" fill="#22c55e" rx="6"/><text x="90" y="65" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">1 Bundle</text><text x="90" y="80" font-size="10" font-weight="700" fill="#dcfce7" text-anchor="middle">(10 Sticks)</text><text x="140" y="65" font-size="20" font-weight="700" fill="#166534">+</text><circle cx="180" cy="45" r="8" fill="#16a34a"/><circle cx="180" cy="75" r="8" fill="#16a34a"/><circle cx="205" cy="60" r="8" fill="#16a34a"/><text x="195" y="105" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">3 Ones</text><text x="245" y="65" font-size="20" font-weight="700" fill="#166534">=</text><rect x="280" y="30" width="140" height="60" fill="#15803d" rx="8"/><text x="350" y="58" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">13</text><text x="350" y="78" font-size="11" font-weight="700" fill="#dcfce7" text-anchor="middle">1 Ten + 3 Ones</text></svg>`,
    cbq: {
      title: "Matchstick Bundles Activity",
      text: "Farmer Ramu has 15 matchsticks. His teacher tells him to tie 10 sticks with a rubber band to make one bundle of Ten.",
      question: "How many bundles of 10 does Ramu make, and how many loose sticks are left over?",
      answer: "1. Ramu makes <strong>1 bundle of 10</strong>.<br>2. <strong>5 loose sticks (ones)</strong> are left over.<br>15 = 1 Ten + 5 Ones.",
      rubric: "1.5 M for 1 bundle + 1.5 M for 5 loose sticks"
    },
    questions: [
      {
        category: "Number Bonds • Making 10",
        q: "Fill in the blanks to make 10:<br>(a) 7 + __ = 10<br>(b) 4 + __ = 10<br>(c) 5 + __ = 10",
        ans: "<strong>Answer:</strong><br>(a) 7 + <strong>3</strong> = 10<br>(b) 4 + <strong>6</strong> = 10<br>(c) 5 + <strong>5</strong> = 10",
        marks: 3,
        rubric: [{ key: "(a) 3", marks: "1 M" }, { key: "(b) 6", marks: "1 M" }, { key: "(c) 5", marks: "1 M" }]
      },
      {
        category: "Place Value • Tens and Ones",
        q: "Break up the number 16 into Tens and Ones.",
        ans: "<strong>Answer:</strong><br>16 = <strong>1 Ten</strong> and <strong>6 Ones</strong> (10 + 6 = 16).",
        marks: 2,
        rubric: [{ key: "1 Ten identified", marks: "1 M" }, { key: "6 Ones identified", marks: "1 M" }]
      },
      {
        category: "Counting • 10 to 20",
        q: "Write the number names for the following numerals: 11, 14, 18, 20.",
        ans: "<strong>Answer:</strong><br>• 11 = <strong>Eleven</strong><br>• 14 = <strong>Fourteen</strong><br>• 18 = <strong>Eighteen</strong><br>• 20 = <strong>Twenty</strong>",
        marks: 2,
        rubric: [{ key: "All 4 number names spelled correctly", marks: "2 M" }]
      },
      {
        category: "Comparison • Bigger Number",
        q: "Which number is greater: 12 or 17? Explain using tens and ones.",
        ans: "<strong>Explanation:</strong><br>• 12 = 1 ten and 2 ones.<br>• 17 = 1 ten and 7 ones.<br>Both numbers have 1 ten, but 17 has 7 ones, which is more than 2 ones. Therefore, <strong>17 is greater than 12</strong> (17 > 12).",
        marks: 2,
        rubric: [{ key: "17 identified as greater", marks: "1 M" }, { key: "Explanation using ones", marks: "1 M" }]
      },
      {
        category: "Story Sum • Beads on a String",
        q: "Meera strung 10 red beads and 4 yellow beads onto a necklace. How many total beads did she put on the necklace?",
        ans: "<strong>Calculation:</strong><br>• Red beads = 10 (1 ten)<br>• Yellow beads = 4 (4 ones)<br>• Total beads = 10 + 4 = <strong>14 beads</strong>.",
        marks: 2,
        rubric: [{ key: "Addition statement 10 + 4", marks: "1 M" }, { key: "Final sum: 14 beads", marks: "1 M" }]
      },
      {
        category: "Let Us Do • Tens Frame",
        q: "A ten-frame has 8 counters placed in it. How many more counters are needed to fill the whole ten-frame?",
        ans: "<strong>Answer:</strong><br>A full frame holds 10 counters.<br>Counters present = 8.<br>Counters needed = 10 - 8 = <strong>2 counters</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 10 - 8 = 2", marks: "2 M" }]
      }
    ]
  },
  {
    id: "jm5",
    num: 5,
    unit: "Unit 3: Operations & Measurement",
    title: "How Many?",
    subtitle: "Addition & Subtraction within 20: Joining, Separating & Comparing",
    concepts: [
      "Understanding addition as putting together or counting on.",
      "Understanding subtraction as taking away or finding the difference.",
      "Solving simple everyday word problems within 20."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fdf4ff" rx="10"/><circle cx="80" cy="50" r="18" fill="#d946ef"/><circle cx="125" cy="50" r="18" fill="#d946ef"/><text x="102" y="90" font-size="12" font-weight="700" fill="#a21caf" text-anchor="middle">8 Balloons</text><text x="180" y="55" font-size="24" font-weight="800" fill="#a21caf">+</text><circle cx="230" cy="50" r="18" fill="#ec4899"/><text x="230" y="90" font-size="12" font-weight="700" fill="#9d174d" text-anchor="middle">5 Balloons</text><text x="290" y="55" font-size="24" font-weight="800" fill="#a21caf">=</text><rect x="330" y="25" width="120" height="50" fill="#a21caf" rx="8"/><text x="390" y="56" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">13 Balloons</text><text x="390" y="95" font-size="11" font-weight="700" fill="#86198f" text-anchor="middle">8 + 5 = 13 (Put Together)</text></svg>`,
    cbq: {
      title: "Birdwatching at the Lake",
      text: "Sonu saw 9 ducks swimming in the pond. 4 more ducks flew in and joined them. Later, 3 ducks walked out to rest on the bank.",
      question: "How many ducks were in the pond after 4 joined? How many ducks remained swimming when 3 walked out?",
      answer: "1. Ducks after 4 joined: 9 + 4 = 13 ducks.<br>2. Ducks remaining swimming: 13 - 3 = 10 ducks.",
      rubric: "1.5 M for 9 + 4 = 13 + 1.5 M for 13 - 3 = 10"
    },
    questions: [
      {
        category: "Addition • Counting On",
        q: "Solve: 8 + 5 using the 'count on' method.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Start at 8.<br>• Count on 5 numbers: 9, 10, 11, 12, 13.<br>• 8 + 5 = <strong>13</strong>.",
        marks: 2,
        rubric: [{ key: "Showing counting on sequence", marks: "1 M" }, { key: "Correct sum: 13", marks: "1 M" }]
      },
      {
        category: "Subtraction • Taking Away",
        q: "There were 14 apples in a fruit crate. Ravi took 6 apples for his friends. How many apples are left in the crate?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total apples = 14<br>• Apples taken = 6<br>• Apples left = 14 - 6 = <strong>8 apples</strong>.",
        marks: 2,
        rubric: [{ key: "Correct subtraction formula 14 - 6", marks: "1 M" }, { key: "Final answer with unit (8 apples)", marks: "1 M" }]
      },
      {
        category: "Number Pairs • Addition Sentences",
        q: "Find the missing number in each sentence:<br>(a) 9 + __ = 15<br>(b) 12 - __ = 7",
        ans: "<strong>Answer:</strong><br>(a) 9 + <strong>6</strong> = 15 (since 15 - 9 = 6)<br>(b) 12 - <strong>5</strong> = 7 (since 12 - 7 = 5)",
        marks: 2,
        rubric: [{ key: "Part (a): 6", marks: "1 M" }, { key: "Part (b): 5", marks: "1 M" }]
      },
      {
        category: "Word Problem • Combining Groups",
        q: "Pooja has 7 crayons. Her mother gave her 7 more crayons on her birthday. How many crayons does Pooja have now?",
        ans: "<strong>Calculation:</strong><br>• Existing crayons = 7<br>• New crayons = 7<br>• Total crayons = 7 + 7 = <strong>14 crayons</strong> (Double fact: 7 + 7 = 14).",
        marks: 2,
        rubric: [{ key: "Addition 7 + 7", marks: "1 M" }, { key: "Result: 14 crayons", marks: "1 M" }]
      },
      {
        category: "Mental Math • Subtracting Zero",
        q: "What is 18 - 0? What happens when you subtract zero from any number?",
        ans: "<strong>Answer:</strong><br>• 18 - 0 = <strong>18</strong>.<br>• When you subtract zero from any number, the number remains unchanged because zero means taking away nothing.",
        marks: 2,
        rubric: [{ key: "Result 18", marks: "1 M" }, { key: "Rule explanation", marks: "1 M" }]
      },
      {
        category: "Let Us Do • Subtraction on Number Line",
        q: "Use the number line to calculate 16 - 4. Draw or explain the hops.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Start at 16 on the number line.<br>• Take 4 hops backward: 15, 14, 13, 12.<br>• You land on <strong>12</strong>. Therefore, 16 - 4 = 12.",
        marks: 2,
        rubric: [{ key: "Backward hops shown", marks: "1 M" }, { key: "Answer 12", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm6",
    num: 6,
    unit: "Unit 3: Operations & Measurement",
    title: "Vegetable Farm",
    subtitle: "Story Problems, Word Scenarios & Practical Arithmetic",
    concepts: [
      "Solving contextual addition and subtraction problems from farm life.",
      "Comparing quantities of different vegetables harvested.",
      "Formulating mathematical questions based on visual pictures."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef2f2" rx="10"/><circle cx="70" cy="50" r="16" fill="#ef4444"/><text x="70" y="55" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">Tomato</text><circle cx="120" cy="50" r="16" fill="#ef4444"/><circle cx="170" cy="50" r="16" fill="#ef4444"/><text x="120" y="90" font-size="12" font-weight="700" fill="#991b1b" text-anchor="middle">12 Tomatoes</text><rect x="250" y="35" width="25" height="35" fill="#f97316" rx="4"/><rect x="290" y="35" width="25" height="35" fill="#f97316" rx="4"/><text x="282" y="90" font-size="12" font-weight="700" fill="#c2410c" text-anchor="middle">8 Carrots</text><text x="400" y="50" font-size="14" font-weight="800" fill="#1e293b">Total: 12 + 8 = 20</text><text x="400" y="75" font-size="12" font-weight="700" fill="#166534">Difference: 12 - 8 = 4</text></svg>`,
    cbq: {
      title: "Harvest Day at Kaka's Farm",
      text: "Kaka harvested 11 red pumpkins and 7 green cabbages in the morning. In the afternoon, he sold 6 pumpkins at the mandi.",
      question: "How many total vegetables did Kaka harvest in the morning? How many pumpkins are left with him?",
      answer: "1. Total vegetables harvested = 11 + 7 = 18 vegetables.<br>2. Pumpkins left = 11 - 6 = 5 pumpkins.",
      rubric: "1.5 M for 11 + 7 = 18 + 1.5 M for 11 - 6 = 5"
    },
    questions: [
      {
        category: "Farm Story • Addition",
        q: "A farmer plucked 9 cucumbers from one plant and 8 cucumbers from another plant. How many cucumbers did he pluck altogether?",
        ans: "<strong>Calculation:</strong><br>• Cucumbers from 1st plant = 9<br>• Cucumbers from 2nd plant = 8<br>• Total cucumbers = 9 + 8 = <strong>17 cucumbers</strong>.",
        marks: 2,
        rubric: [{ key: "Number sentence 9 + 8", marks: "1 M" }, { key: "Correct sum: 17 cucumbers", marks: "1 M" }]
      },
      {
        category: "Farm Story • Subtraction",
        q: "There were 16 carrots in the vegetable basket. Bunnies ate 7 carrots. How many carrots were left in the basket?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total carrots = 16<br>• Carrots eaten = 7<br>• Remaining carrots = 16 - 7 = <strong>9 carrots</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 16 - 7", marks: "1 M" }, { key: "Answer: 9 carrots", marks: "1 M" }]
      },
      {
        category: "Comparison • More or Fewer",
        q: "Radha picked 15 tomatoes and 10 potatoes. Which vegetable did she pick more of, and by how many?",
        ans: "<strong>Comparison:</strong><br>• Tomatoes = 15<br>• Potatoes = 10<br>• 15 > 10, so she picked <strong>more tomatoes</strong>.<br>• Difference = 15 - 10 = <strong>5 more tomatoes</strong>.",
        marks: 3,
        rubric: [{ key: "Identified more tomatoes", marks: "1.5 M" }, { key: "Difference calculated as 5", marks: "1.5 M" }]
      },
      {
        category: "Make a Math Problem",
        q: "Look at this number sentence: 10 + 4 = 14. Make up your own farm story for this sentence.",
        ans: "<strong>Sample Story:</strong><br>'Farmer Hari planted 10 chili plants in the morning. His daughter planted 4 chili plants in the evening. Together they planted 14 chili plants.'",
        marks: 2,
        rubric: [{ key: "Valid creative story context", marks: "1 M" }, { key: "Math aligns with 10 + 4 = 14", marks: "1 M" }]
      },
      {
        category: "Two-Step Story • Real Life",
        q: "A vegetable cart had 18 watermelons. 5 were sold in the morning and 3 were sold in the afternoon. How many watermelons were left on the cart?",
        ans: "<strong>Step-by-Step Solution:</strong><br>1. Total watermelons sold = 5 + 3 = 8 watermelons.<br>2. Watermelons left = 18 - 8 = <strong>10 watermelons</strong>.",
        marks: 3,
        rubric: [{ key: "Sum of sold: 5 + 3 = 8", marks: "1.5 M" }, { key: "Remaining: 18 - 8 = 10", marks: "1.5 M" }]
      },
      {
        category: "Mental Arithmetic • Quick Facts",
        q: "Quickly answer:<br>(a) 10 + 10 = __<br>(b) 20 - 5 = __",
        ans: "<strong>Answer:</strong><br>(a) 10 + 10 = <strong>20</strong><br>(b) 20 - 5 = <strong>15</strong>",
        marks: 2,
        rubric: [{ key: "Part (a): 20", marks: "1 M" }, { key: "Part (b): 15", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm7",
    num: 7,
    unit: "Unit 3: Operations & Measurement",
    title: "Lina's Family",
    subtitle: "Measurement: Comparing Length, Height & Weight using Non-Standard Units",
    concepts: [
      "Comparing lengths and heights: Longer/Shorter, Taller/Shorter.",
      "Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.",
      "Comparing weights: Heavier and Lighter."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><rect x="40" y="30" width="20" height="70" fill="#047857" rx="3"/><rect x="80" y="55" width="20" height="45" fill="#10b981" rx="3"/><text x="50" y="112" font-size="10" font-weight="700" fill="#065f46" text-anchor="middle">Taller</text><text x="90" y="112" font-size="10" font-weight="700" fill="#065f46" text-anchor="middle">Shorter</text><line x1="160" y1="50" x2="310" y2="50" stroke="#059669" stroke-width="6" stroke-linecap="round"/><line x1="160" y1="75" x2="240" y2="75" stroke="#34d399" stroke-width="6" stroke-linecap="round"/><text x="330" y="54" font-size="11" font-weight="700" fill="#065f46">Longer Pencil</text><text x="260" y="79" font-size="11" font-weight="700" fill="#065f46">Shorter Crayon</text><circle cx="420" cy="50" r="22" fill="#059669"/><circle cx="465" cy="55" r="12" fill="#6ee7b7"/><text x="420" y="90" font-size="10" font-weight="700" fill="#065f46" text-anchor="middle">Heavier</text><text x="465" y="90" font-size="10" font-weight="700" fill="#065f46" text-anchor="middle">Lighter</text></svg>`,
    cbq: {
      title: "Measuring the Study Table",
      text: "Lina measures the length of her study table using her handspan (बित्ता) and finds it is 8 handspans long. Her father measures the same table and counts only 5 handspans.",
      question: "Why did Lina get 8 handspans while her father got only 5 handspans for the very same table?",
      answer: "1. Lina's hand is smaller than her father's hand.<br>2. Since her father's handspan is wider and longer, fewer handspans are needed to cover the same length.",
      rubric: "1.5 M for father's hand is larger + 1.5 M for inverse relation of unit size"
    },
    questions: [
      {
        category: "Length Comparison • Longer and Shorter",
        q: "Look at a ruler (30 cm) and a pencil (15 cm). Which one is longer and which one is shorter?",
        ans: "<strong>Answer:</strong><br>• The <strong>ruler</strong> is <strong>longer</strong>.<br>• The <strong>pencil</strong> is <strong>shorter</strong>.",
        marks: 2,
        rubric: [{ key: "Ruler is longer", marks: "1 M" }, { key: "Pencil is shorter", marks: "1 M" }]
      },
      {
        category: "Height Comparison • Taller and Shorter",
        q: "In Lina's family, who is taller: Lina or her Grandmother? Who is the tallest member in most families?",
        ans: "<strong>Answer:</strong><br>• Her Grandmother is <strong>taller</strong> than Lina (Lina is shorter).<br>• In most families, the parents (Father or Mother) or elder adults are the <strong>tallest</strong>.",
        marks: 2,
        rubric: [{ key: "Grandmother is taller", marks: "1 M" }, { key: "Tallest identified", marks: "1 M" }]
      },
      {
        category: "Hands-on Measurement • Handspan",
        q: "What is a 'Handspan' (बित्ता)? How do you measure the width of your math textbook using it?",
        ans: "<strong>Answer:</strong><br>• A handspan is the distance from the tip of the thumb to the tip of the little finger when the hand is stretched wide open.<br>• To measure the book: Place the thumb at one edge, stretch fingers, and count how many handspans fit across the book width (usually about 1 to 2 handspans for a child).",
        marks: 3,
        rubric: [{ key: "Definition of handspan", marks: "1.5 M" }, { key: "Practical measurement step", marks: "1.5 M" }]
      },
      {
        category: "Weight Comparison • Heavier and Lighter",
        q: "Which is heavier: a school bag full of books or a pencil box? Why?",
        ans: "<strong>Answer:</strong><br>• The <strong>school bag full of books is heavier</strong>.<br>• The <strong>pencil box is lighter</strong>.<br>• Reason: The school bag contains many thick books and notebooks, which have much more weight than a small plastic pencil box.",
        marks: 2,
        rubric: [{ key: "School bag is heavier", marks: "1 M" }, { key: "Reasoning with contents", marks: "1 M" }]
      },
      {
        category: "Paces and Footsteps",
        q: "How can you measure the distance from your classroom door to the blackboard without using a measuring tape?",
        ans: "<strong>Answer:</strong><br>You can measure the distance by counting your <strong>footsteps (paces/कदम)</strong> while walking in a straight line from the door to the blackboard.",
        marks: 2,
        rubric: [{ key: "Paces/footsteps method explained", marks: "2 M" }]
      },
      {
        category: "Let Us Do • Ordering by Size",
        q: "Arrange these three objects from shortest to longest: Leaf, Broom, Safety Pin.",
        ans: "<strong>Answer:</strong><br>Shortest to longest order:<br>1. <strong>Safety Pin</strong> (shortest)<br>2. <strong>Leaf</strong><br>3. <strong>Broom</strong> (longest).",
        marks: 2,
        rubric: [{ key: "Correct order: Safety Pin < Leaf < Broom", marks: "2 M" }]
      }
    ]
  },
  {
    id: "jm8",
    num: 8,
    unit: "Unit 4: Numbers Beyond 20",
    title: "Fun with Numbers",
    subtitle: "Numbers from 21 to 99: Tens, Ones, Place Value & Patterns",
    concepts: [
      "Counting in groups of tens from 20 up to 99.",
      "Understanding place value in 2-digit numbers: Tens place and Ones place.",
      "Finding predecessor, successor, and ordering numbers up to 99."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f8fafc" rx="10"/><rect x="50" y="30" width="50" height="60" fill="#3b82f6" rx="6"/><text x="75" y="65" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">10</text><rect x="110" y="30" width="50" height="60" fill="#3b82f6" rx="6"/><text x="135" y="65" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">10</text><rect x="170" y="30" width="50" height="60" fill="#3b82f6" rx="6"/><text x="195" y="65" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">10</text><text x="135" y="105" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">3 Tens = 30</text><circle cx="260" cy="50" r="8" fill="#f59e0b"/><circle cx="280" cy="50" r="8" fill="#f59e0b"/><circle cx="300" cy="50" r="8" fill="#f59e0b"/><circle cx="320" cy="50" r="8" fill="#f59e0b"/><text x="290" y="105" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">4 Ones = 4</text><text x="350" y="65" font-size="20" font-weight="800" fill="#0f172a">=</text><rect x="380" y="30" width="80" height="60" fill="#0284c7" rx="8"/><text x="420" y="68" font-size="22" font-weight="800" fill="#fff" text-anchor="middle">34</text></svg>`,
    cbq: {
      title: "Garlands for the School Annual Function",
      text: "Students are stringing marigold garlands. Each garland has 10 flowers. Team Alpha makes 4 full garlands and has 6 loose flowers left over.",
      question: "How many flowers does Team Alpha have in all? What is the digit in the tens place and the ones place?",
      answer: "1. 4 garlands of 10 = 4 × 10 = 40 flowers.<br>2. 6 loose flowers = 6 ones.<br>3. Total flowers = 40 + 6 = <strong>46 flowers</strong>.<br>Tens digit = <strong>4</strong>, Ones digit = <strong>6</strong>.",
      rubric: "1.5 M for 46 total + 1.5 M for Tens:4, Ones:6"
    },
    questions: [
      {
        category: "Tens and Ones • Place Value",
        q: "What is the number for: 5 Tens and 3 Ones? Write the numeral and number name.",
        ans: "<strong>Answer:</strong><br>• 5 Tens = 50<br>• 3 Ones = 3<br>• Numeral = <strong>53</strong><br>• Number Name = <strong>Fifty-three</strong>.",
        marks: 2,
        rubric: [{ key: "Numeral 53", marks: "1 M" }, { key: "Number name Fifty-three", marks: "1 M" }]
      },
      {
        category: "Counting by 10s • Skip Counting",
        q: "Complete the tens chain: 10, 20, 30, __, __, 60, __, 80, __.",
        ans: "<strong>Answer:</strong><br>Counting by tens:<br>10, 20, 30, <strong>40</strong>, <strong>50</strong>, 60, <strong>70</strong>, 80, <strong>90</strong>.",
        marks: 2,
        rubric: [{ key: "Filled in 40, 50, 70, 90 correctly", marks: "2 M" }]
      },
      {
        category: "Before and After • Numbers up to 50",
        q: "Write the number that comes:<br>(a) Just before 30<br>(b) Just after 49<br>(c) Between 39 and 41",
        ans: "<strong>Answer:</strong><br>(a) Just before 30 is <strong>29</strong>.<br>(b) Just after 49 is <strong>50</strong>.<br>(c) Between 39 and 41 is <strong>40</strong>.",
        marks: 3,
        rubric: [{ key: "29", marks: "1 M" }, { key: "50", marks: "1 M" }, { key: "40", marks: "1 M" }]
      },
      {
        category: "Number Comparison • Greater or Smaller",
        q: "Compare using > or <: 64 __ 46. Which number is greater and why?",
        ans: "<strong>Comparison:</strong><br>• In 64, the tens digit is 6 (6 tens = 60).<br>• In 46, the tens digit is 4 (4 tens = 40).<br>• Since 6 tens > 4 tens, <strong>64 > 46</strong>.<br>64 is greater than 46.",
        marks: 2,
        rubric: [{ key: "Sign: 64 > 46", marks: "1 M" }, { key: "Explanation using tens digit", marks: "1 M" }]
      },
      {
        category: "Expansion • Decomposing Numbers",
        q: "Expand the following numbers into tens and ones:<br>(a) 28<br>(b) 75",
        ans: "<strong>Answer:</strong><br>(a) 28 = <strong>20 + 8</strong> (2 Tens + 8 Ones)<br>(b) 75 = <strong>70 + 5</strong> (7 Tens + 5 Ones)",
        marks: 2,
        rubric: [{ key: "Part (a): 20 + 8", marks: "1 M" }, { key: "Part (b): 70 + 5", marks: "1 M" }]
      },
      {
        category: "Riddle Time • Who Am I?",
        q: "I have 9 in the ones place and 8 in the tens place. What number am I?",
        ans: "<strong>Answer:</strong><br>• Tens place = 8<br>• Ones place = 9<br>• The number is <strong>89 (Eighty-nine)</strong>.",
        marks: 1,
        rubric: [{ key: "Correct number 89", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm9",
    num: 9,
    unit: "Unit 4: Patterns & Spatial Thinking",
    title: "Utsav",
    subtitle: "Festive Patterns: Repeating Sequences in Shapes, Colours & Numbers",
    concepts: [
      "Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).",
      "Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).",
      "Finding number patterns with simple step increments (+1, +2, +5, +10)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fffbeb" rx="10"/><circle cx="50" cy="50" r="16" fill="#f59e0b"/><rect x="85" y="34" width="32" height="32" fill="#ef4444" rx="4"/><circle cx="145" cy="50" r="16" fill="#f59e0b"/><rect x="180" y="34" width="32" height="32" fill="#ef4444" rx="4"/><circle cx="240" cy="50" r="16" fill="#f59e0b"/><rect x="275" y="34" width="32" height="32" fill="#ef4444" rx="4"/><circle cx="335" cy="50" r="16" fill="#f59e0b"/><rect x="370" y="34" width="32" height="32" fill="#ef4444" rx="4"/><text x="440" y="55" font-size="20" font-weight="800" fill="#b45309">...</text><text x="250" y="100" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">Festive Toran Pattern: Circle, Square, Circle, Square...</text></svg>`,
    cbq: {
      title: "Diwali Rangoli Border Pattern",
      text: "Simi is making a festive border using Diyas and Marigold flowers: Diya, Flower, Flower, Diya, Flower, Flower, Diya...",
      question: "What comes next after the third Diya? What is the repeating rule (pattern unit)?",
      answer: "1. After the third Diya, two <strong>Flowers</strong> will come.<br>2. The repeating unit is <strong>1 Diya followed by 2 Flowers</strong> (Pattern: A-B-B).",
      rubric: "1.5 M for two flowers + 1.5 M for rule (1 Diya + 2 Flowers)"
    },
    questions: [
      {
        category: "Pattern Completion • Shapes",
        q: "Extend the shape pattern: △, ◯, △, ◯, △, __, __.",
        ans: "<strong>Answer:</strong><br>The pattern alternates between Triangle and Circle.<br>The next two shapes are <strong>◯ (Circle)</strong> and <strong>△ (Triangle)</strong>.",
        marks: 2,
        rubric: [{ key: "Circle identified", marks: "1 M" }, { key: "Triangle identified", marks: "1 M" }]
      },
      {
        category: "Number Patterns • Growing Sequence",
        q: "Look at the pattern and write the next two numbers: 2, 4, 6, 8, __, __.",
        ans: "<strong>Step-by-Step Rule:</strong><br>• The numbers increase by 2 each time (+2).<br>• 8 + 2 = 10<br>• 10 + 2 = 12<br>Next numbers are <strong>10</strong> and <strong>12</strong>.",
        marks: 2,
        rubric: [{ key: "Identification of rule (+2)", marks: "1 M" }, { key: "Numbers 10 and 12", marks: "1 M" }]
      },
      {
        category: "Visual Observation • Border Toran",
        q: "A door hanging (Toran) has mango leaves and orange flowers: Leaf, Flower, Leaf, Flower. What will be the 7th item in this Toran?",
        ans: "<strong>Step-by-Step Counting:</strong><br>1: Leaf<br>2: Flower<br>3: Leaf<br>4: Flower<br>5: Leaf<br>6: Flower<br>7: <strong>Leaf</strong>.<br>The 7th item will be a <strong>Leaf</strong>.",
        marks: 2,
        rubric: [{ key: "Sequence counted to 7", marks: "1 M" }, { key: "Answer: Leaf", marks: "1 M" }]
      },
      {
        category: "Pattern Rule • Decreasing Numbers",
        q: "Find the missing numbers in this countdown pattern: 10, 9, 8, __, 6, __, 4.",
        ans: "<strong>Answer:</strong><br>Rule: Counting backwards by 1 (-1 each time).<br>10, 9, 8, <strong>7</strong>, 6, <strong>5</strong>, 4.<br>The missing numbers are <strong>7</strong> and <strong>5</strong>.",
        marks: 2,
        rubric: [{ key: "7 identified", marks: "1 M" }, { key: "5 identified", marks: "1 M" }]
      },
      {
        category: "Creative Pattern • Body Movement",
        q: "Can you create a pattern using body sounds? Give an example.",
        ans: "<strong>Answer:</strong><br>Yes! Example: <strong>Clap, Snap, Clap, Snap, Clap, Snap...</strong><br>Or: <strong>Stomp foot, Clap hands, Stomp foot, Clap hands...</strong>",
        marks: 2,
        rubric: [{ key: "Valid sound/movement pattern described", marks: "2 M" }]
      },
      {
        category: "Letter Pattern",
        q: "Complete the alphabet pattern: AB, CD, EF, __, __.",
        ans: "<strong>Answer:</strong><br>The sequence takes two consecutive letters from the alphabet:<br>AB, CD, EF, <strong>GH</strong>, <strong>IJ</strong>.",
        marks: 2,
        rubric: [{ key: "GH and IJ filled correctly", marks: "2 M" }]
      }
    ]
  },
  {
    id: "jm10",
    num: 10,
    unit: "Unit 5: Time & Everyday Routine",
    title: "How do I Spend my Day?",
    subtitle: "Daily Routine, Sequencing Events, Day and Night, Clock Awareness",
    concepts: [
      "Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.",
      "Recognizing activities that take longer time vs shorter time.",
      "Understanding days of the week and daily rhythms."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f9ff" rx="10"/><circle cx="70" cy="55" r="24" fill="#fbbf24"/><text x="70" y="100" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Morning (Sunrise)</text><circle cx="180" cy="55" r="24" fill="#f59e0b"/><text x="180" y="100" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Afternoon (School/Lunch)</text><circle cx="300" cy="55" r="24" fill="#f97316"/><text x="300" y="100" font-size="11" font-weight="700" fill="#c2410c" text-anchor="middle">Evening (Play)</text><circle cx="420" cy="55" r="24" fill="#1e293b"/><circle cx="428" cy="51" r="20" fill="#f0f9ff"/><text x="420" y="100" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Night (Sleep)</text></svg>`,
    cbq: {
      title: "Chintu's Sunday Schedule",
      text: "On Sunday, Chintu has breakfast at 8:00 in the morning, plays cricket in the park at 5:00 in the evening, studies for school at 6:30 PM, and sleeps at 9:00 PM at night.",
      question: "Which activity does Chintu do in the evening? Arrange breakfast, sleeping, and cricket in order from earliest to latest in the day.",
      answer: "1. Playing cricket is done in the evening (5:00 PM).<br>2. Earliest to latest order: <strong>Breakfast (Morning) → Playing Cricket (Evening) → Sleeping (Night)</strong>.",
      rubric: "1.5 M for evening cricket + 1.5 M for correct chronological order"
    },
    questions: [
      {
        category: "Sequencing • Morning Routine",
        q: "Arrange these actions in the correct order for the morning: (A) Going to school, (B) Brushing teeth, (C) Waking up from bed, (D) Eating breakfast.",
        ans: "<strong>Correct Order:</strong><br>1. <strong>(C) Waking up from bed</strong><br>2. <strong>(B) Brushing teeth</strong><br>3. <strong>(D) Eating breakfast</strong><br>4. <strong>(A) Going to school</strong>.",
        marks: 2,
        rubric: [{ key: "Correct sequence C → B → D → A", marks: "2 M" }]
      },
      {
        category: "Time Duration • Longer vs Shorter",
        q: "Which activity takes a longer time: (a) Blinking your eyes once, or (b) Taking a bath?",
        ans: "<strong>Answer:</strong><br>• <strong>Taking a bath</strong> takes a <strong>longer time</strong> (a few minutes).<br>• Blinking your eyes takes a very short time (less than a second).",
        marks: 2,
        rubric: [{ key: "Taking bath identified as longer", marks: "1 M" }, { key: "Explanation of duration", marks: "1 M" }]
      },
      {
        category: "Parts of the Day • Matching",
        q: "Match the activity with the time of day:<br>(a) Seeing stars and the moon<br>(b) Having lunch<br>(c) Eating dinner",
        ans: "<strong>Answer:</strong><br>(a) Seeing stars and the moon → <strong>Night</strong><br>(b) Having lunch → <strong>Afternoon</strong><br>(c) Eating dinner → <strong>Night / Late Evening</strong>",
        marks: 3,
        rubric: [{ key: "All 3 matched correctly", marks: "3 M" }]
      },
      {
        category: "Daily Life • Cooking Steps",
        q: "What takes more time: Boiling a pot of milk or drinking a sip of milk?",
        ans: "<strong>Answer:</strong><br><strong>Boiling a pot of milk</strong> takes more time because it requires heating on the gas stove for several minutes.",
        marks: 1,
        rubric: [{ key: "Boiling milk takes more time", marks: "1 M" }]
      },
      {
        category: "Days of the Week",
        q: "How many days are there in a week? Which day is usually a school holiday?",
        ans: "<strong>Answer:</strong><br>• There are <strong>7 days</strong> in a week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday).<br>• <strong>Sunday</strong> is usually a school holiday.",
        marks: 2,
        rubric: [{ key: "7 days in a week", marks: "1 M" }, { key: "Sunday identified as holiday", marks: "1 M" }]
      },
      {
        category: "Observation • Sun Movement",
        q: "From which direction does the Sun rise in the morning, and where does it set in the evening?",
        ans: "<strong>Answer:</strong><br>• The Sun rises in the <strong>East</strong> in the morning.<br>• The Sun sets in the <strong>West</strong> in the evening.",
        marks: 2,
        rubric: [{ key: "Rises in the East", marks: "1 M" }, { key: "Sets in the West", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm11",
    num: 11,
    unit: "Unit 5: Equal Groups & Early Multiplication",
    title: "How Many Times?",
    subtitle: "Repeated Addition, Equal Groups, Skip Counting & Introduction to Multiplication",
    concepts: [
      "Understanding equal groups as 'repeated addition'.",
      "Using the 'times' symbol (×) to represent equal groups.",
      "Solving simple equal-sharing and grouping scenarios."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#faf5ff" rx="10"/><rect x="40" y="30" width="80" height="50" fill="#e9d5ff" rx="6"/><circle cx="65" cy="55" r="12" fill="#9333ea"/><circle cx="95" cy="55" r="12" fill="#9333ea"/><text x="80" y="100" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">Group 1 (2)</text><rect x="150" y="30" width="80" height="50" fill="#e9d5ff" rx="6"/><circle cx="175" cy="55" r="12" fill="#9333ea"/><circle cx="205" cy="55" r="12" fill="#9333ea"/><text x="190" y="100" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">Group 2 (2)</text><rect x="260" y="30" width="80" height="50" fill="#e9d5ff" rx="6"/><circle cx="285" cy="55" r="12" fill="#9333ea"/><circle cx="315" cy="55" r="12" fill="#9333ea"/><text x="300" y="100" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">Group 3 (2)</text><text x="420" y="55" font-size="15" font-weight="800" fill="#6b21a8">3 times 2 = 6</text><text x="420" y="80" font-size="13" font-weight="700" fill="#7e22ce">2 + 2 + 2 = 6</text></svg>`,
    cbq: {
      title: "Frogs on Lily Pads",
      text: "There are 4 lily pads floating on a pond. On each lily pad, 3 small green frogs are sitting comfortably.",
      question: "Write this as repeated addition and as a multiplication sentence. How many frogs are on the pond altogether?",
      answer: "1. Repeated addition: 3 + 3 + 3 + 3 = 12 frogs.<br>2. Multiplication sentence: 4 × 3 = 12 frogs.<br>Total = <strong>12 frogs</strong>.",
      rubric: "1.5 M for 3+3+3+3=12 + 1.5 M for 4×3=12"
    },
    questions: [
      {
        category: "Equal Groups • Repeated Addition",
        q: "There are 3 plates. Each plate has 4 cookies. How many cookies are there in all?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Plate 1 = 4 cookies<br>• Plate 2 = 4 cookies<br>• Plate 3 = 4 cookies<br>• Total = 4 + 4 + 4 = <strong>12 cookies</strong>.<br>Or 3 times 4 = 12.",
        marks: 2,
        rubric: [{ key: "Repeated addition 4 + 4 + 4", marks: "1 M" }, { key: "Total 12 cookies", marks: "1 M" }]
      },
      {
        category: "Bicycle Wheels • Groups of 2",
        q: "A bicycle has 2 wheels. How many wheels do 5 bicycles have?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Number of bicycles = 5<br>• Wheels per bicycle = 2<br>• 2 + 2 + 2 + 2 + 2 = <strong>10 wheels</strong> (5 × 2 = 10).",
        marks: 2,
        rubric: [{ key: "Addition or multiplication sentence", marks: "1 M" }, { key: "Final answer: 10 wheels", marks: "1 M" }]
      },
      {
        category: "Skip Counting • Threes",
        q: "Skip count by 3s up to 15: 3, 6, __, __, 15.",
        ans: "<strong>Answer:</strong><br>Adding 3 each step:<br>3, 6, <strong>9</strong>, <strong>12</strong>, 15.",
        marks: 2,
        rubric: [{ key: "9 and 12 identified correctly", marks: "2 M" }]
      },
      {
        category: "Table Legs • Groups of 4",
        q: "Each study table has 4 legs. If there are 2 tables in the room, how many legs are there altogether?",
        ans: "<strong>Answer:</strong><br>• 4 legs + 4 legs = <strong>8 legs</strong>.<br>• 2 times 4 = 8 legs.",
        marks: 2,
        rubric: [{ key: "4 + 4 = 8 legs", marks: "2 M" }]
      },
      {
        category: "Hands and Fingers • Groups of 5",
        q: "One hand has 5 fingers. How many fingers do 4 hands have? Write the addition sentence.",
        ans: "<strong>Calculation:</strong><br>• 5 + 5 + 5 + 5 = <strong>20 fingers</strong>.<br>• 4 hands have 20 fingers.",
        marks: 2,
        rubric: [{ key: "Addition sentence 5+5+5+5", marks: "1 M" }, { key: "Result 20 fingers", marks: "1 M" }]
      },
      {
        category: "Understanding 'Times'",
        q: "Express 6 + 6 + 6 using the word 'times'. What is the total?",
        ans: "<strong>Answer:</strong><br>• 6 + 6 + 6 = <strong>3 times 6</strong>.<br>• Total = <strong>18</strong>.",
        marks: 2,
        rubric: [{ key: "3 times 6", marks: "1 M" }, { key: "18", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm12",
    num: 12,
    unit: "Unit 6: Financial Literacy & Real World",
    title: "How Much Can We Spend?",
    subtitle: "Indian Currency: Coins, Currency Notes & Making Amounts",
    concepts: [
      "Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).",
      "Making given amounts using combinations of coins and notes.",
      "Solving simple shopping and change calculation scenarios."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0fdf4" rx="10"/><circle cx="60" cy="55" r="20" fill="#94a3b8"/><text x="60" y="61" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">₹1</text><circle cx="120" cy="55" r="22" fill="#cbd5e1"/><text x="120" y="61" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">₹2</text><circle cx="185" cy="55" r="24" fill="#fbbf24"/><text x="185" y="61" font-size="14" font-weight="800" fill="#78350f" text-anchor="middle">₹5</text><circle cx="255" cy="55" r="26" fill="#f59e0b"/><text x="255" y="62" font-size="15" font-weight="800" fill="#78350f" text-anchor="middle">₹10</text><rect x="315" y="32" width="70" height="46" fill="#86efac" rx="4"/><text x="350" y="60" font-size="14" font-weight="800" fill="#14532d" text-anchor="middle">₹20</text><rect x="405" y="32" width="75" height="46" fill="#93c5fd" rx="4"/><text x="442" y="60" font-size="14" font-weight="800" fill="#1e3a8a" text-anchor="middle">₹50</text></svg>`,
    cbq: {
      title: "School Stationery Shop",
      text: "Aarav visits the school stationery shop with a ₹20 note. He buys an eraser for ₹5 and a sharpener for ₹5.",
      question: "What is the total money Aarav spent? How much change should the shopkeeper return to him?",
      answer: "1. Total spent = ₹5 + ₹5 = <strong>₹10</strong>.<br>2. Change returned = ₹20 - ₹10 = <strong>₹10</strong>.",
      rubric: "1.5 M for ₹5+₹5=₹10 + 1.5 M for ₹20-₹10=₹10"
    },
    questions: [
      {
        category: "Coin Combination • Make ₹5",
        q: "Show two different ways to make ₹5 using coins.",
        ans: "<strong>Answer:</strong><br>• <strong>Way 1:</strong> One ₹5 coin.<br>• <strong>Way 2:</strong> Two ₹2 coins and one ₹1 coin (₹2 + ₹2 + ₹1 = ₹5).<br>• <strong>Way 3:</strong> Five ₹1 coins (1 + 1 + 1 + 1 + 1 = ₹5).",
        marks: 2,
        rubric: [{ key: "Two valid combinations provided", marks: "2 M" }]
      },
      {
        category: "Money Addition • Buying Toys",
        q: "Riya wants to buy a toy car for ₹12 and a balloon for ₹4. How much total money does she need?",
        ans: "<strong>Calculation:</strong><br>• Cost of toy car = ₹12<br>• Cost of balloon = ₹4<br>• Total money needed = ₹12 + ₹4 = <strong>₹16</strong>.",
        marks: 2,
        rubric: [{ key: "Addition statement ₹12 + ₹4", marks: "1 M" }, { key: "Total ₹16", marks: "1 M" }]
      },
      {
        category: "Currency Recognition",
        q: "Name the colour and value of any two currency notes used in India.",
        ans: "<strong>Answer:</strong><br>1. <strong>₹10 note:</strong> Chocolate brown in colour.<br>2. <strong>₹20 note:</strong> Greenish-yellow in colour.<br>3. <strong>₹50 note:</strong> Fluorescent blue in colour.",
        marks: 2,
        rubric: [{ key: "Two currency notes with colour/value correctly stated", marks: "2 M" }]
      },
      {
        category: "Subtraction • Shopping Change",
        q: "Kabir gives a ₹10 coin to buy an ice-cream stick that costs ₹7. How much money will he get back?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Money given = ₹10<br>• Cost of ice-cream = ₹7<br>• Money back = ₹10 - ₹7 = <strong>₹3</strong> (or one ₹2 coin and one ₹1 coin).",
        marks: 2,
        rubric: [{ key: "Subtraction ₹10 - ₹7", marks: "1 M" }, { key: "Change: ₹3", marks: "1 M" }]
      },
      {
        category: "Making Amounts • Make ₹15",
        q: "How can you pay ₹15 using only ₹5 coins?",
        ans: "<strong>Answer:</strong><br>• 5 + 5 + 5 = 15.<br>• You need <strong>three ₹5 coins</strong> to pay ₹15.",
        marks: 2,
        rubric: [{ key: "Three ₹5 coins identified", marks: "2 M" }]
      },
      {
        category: "Mental Math • Notes",
        q: "How many ₹10 notes make ₹50?",
        ans: "<strong>Answer:</strong><br>10, 20, 30, 40, 50.<br>It takes <strong>five ₹10 notes</strong> to make ₹50 (5 × ₹10 = ₹50).",
        marks: 2,
        rubric: [{ key: "Five ₹10 notes", marks: "2 M" }]
      }
    ]
  },
  {
    id: "jm13",
    num: 13,
    unit: "Unit 6: Data Handling & Problem Solving",
    title: "So Many Toys and Puzzles",
    subtitle: "Data Handling: Sorting, Counting, Pictorial Tables & Mathematical Puzzles",
    concepts: [
      "Collecting, organizing, and counting objects into categories.",
      "Reading simple picture charts and answering comparison questions.",
      "Solving fun mathematical riddles and spatial puzzles."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef3c7" rx="10"/><rect x="50" y="25" width="80" height="70" fill="#fff" rx="6" stroke="#f59e0b"/><text x="90" y="45" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Teddy Bears</text><text x="90" y="75" font-size="22" font-weight="800" fill="#d97706" text-anchor="middle">6</text><rect x="150" y="25" width="80" height="70" fill="#fff" rx="6" stroke="#f59e0b"/><text x="190" y="45" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Toy Cars</text><text x="190" y="75" font-size="22" font-weight="800" fill="#d97706" text-anchor="middle">9</text><rect x="250" y="25" width="80" height="70" fill="#fff" rx="6" stroke="#f59e0b"/><text x="290" y="45" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Dolls</text><text x="290" y="75" font-size="22" font-weight="800" fill="#d97706" text-anchor="middle">4</text><text x="410" y="55" font-size="12" font-weight="800" fill="#92400e">Most: Toy Cars (9)</text><text x="410" y="80" font-size="12" font-weight="800" fill="#b45309">Least: Dolls (4)</text></svg>`,
    cbq: {
      title: "Classroom Toy Corner Audit",
      text: "The teacher placed all classroom toys in a basket: 8 building blocks, 5 spin tops, and 10 finger puppets.",
      question: "Which toy is the most in number? Which toy is the least in number? How many toys are there in total?",
      answer: "1. <strong>Most in number:</strong> Finger puppets (10).<br>2. <strong>Least in number:</strong> Spin tops (5).<br>3. <strong>Total toys:</strong> 8 + 5 + 10 = <strong>23 toys</strong>.",
      rubric: "1 M for most + 1 M for least + 1 M for total 23"
    },
    questions: [
      {
        category: "Data Table • Counting Objects",
        q: "Look at the list of stationery items: 7 Pencils, 3 Sharpeners, 5 Erasers. Which item is maximum in number?",
        ans: "<strong>Answer:</strong><br>• Pencils = 7<br>• Sharpeners = 3<br>• Erasers = 5<br><strong>Pencils (7)</strong> are maximum in number.",
        marks: 2,
        rubric: [{ key: "List compared", marks: "1 M" }, { key: "Pencils identified as maximum", marks: "1 M" }]
      },
      {
        category: "Data Comparison • Difference",
        q: "Using the same stationery list (7 Pencils, 3 Sharpeners, 5 Erasers), how many more pencils are there than sharpeners?",
        ans: "<strong>Calculation:</strong><br>• Pencils = 7<br>• Sharpeners = 3<br>• Difference = 7 - 3 = <strong>4 more pencils</strong>.",
        marks: 2,
        rubric: [{ key: "7 - 3 = 4", marks: "2 M" }]
      },
      {
        category: "Letter Counting • Name Data",
        q: "Count the number of letters in each child's name: (a) AMAN, (b) PRIYANKA, (c) ALI. Whose name has the most letters?",
        ans: "<strong>Answer:</strong><br>• AMAN = 4 letters<br>• PRIYANKA = 8 letters<br>• ALI = 3 letters<br><strong>PRIYANKA</strong> has the most letters (8 letters).",
        marks: 3,
        rubric: [{ key: "Count for each name", marks: "1.5 M" }, { key: "Priyanka identified as longest", marks: "1.5 M" }]
      },
      {
        category: "Math Puzzle • Number Riddle",
        q: "I am a two-digit number. My tens digit is 4 and my ones digit is 2 more than my tens digit. What number am I?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Tens digit = 4<br>• Ones digit = 4 + 2 = 6<br>• The number is <strong>46</strong>.",
        marks: 2,
        rubric: [{ key: "Ones digit calculated (4+2=6)", marks: "1 M" }, { key: "Number identified as 46", marks: "1 M" }]
      },
      {
        category: "Tangram & Shape Puzzle",
        q: "How many corners does a square piece of paper have? If you fold it in half corner-to-corner, what shape do you get?",
        ans: "<strong>Answer:</strong><br>• A square piece of paper has <strong>4 corners</strong>.<br>• When folded corner-to-corner across the diagonal, you get a <strong>Triangle</strong>.",
        marks: 2,
        rubric: [{ key: "4 corners", marks: "1 M" }, { key: "Triangle identified", marks: "1 M" }]
      },
      {
        category: "Data Summary",
        q: "In a fruit bowl there are 4 apples, 6 bananas, and 2 guavas. How many total fruits are in the bowl?",
        ans: "<strong>Calculation:</strong><br>• 4 + 6 + 2 = <strong>12 fruits</strong> in total.",
        marks: 2,
        rubric: [{ key: "Sum 4 + 6 + 2 = 12", marks: "2 M" }]
      }
    ]
  }
];

// --- 2. MATH-MAGIC BOOK 1 (13 CHAPTERS) ---
const mathMagicChapters = [
  {
    id: "mm1",
    num: 1,
    unit: "Unit 1: Spatial Sense & Shapes",
    title: "Shapes and Space",
    subtitle: "Inside-Outside, Bigger-Smaller, Top-Bottom, Nearer-Farther, Rolling-Sliding",
    concepts: [
      "Comparing sizes: Bigger vs Smaller, Biggest vs Smallest.",
      "Relative positions: Top vs Bottom, Inside vs Outside, On vs Under.",
      "Movement properties of 3D objects: Rolling vs Sliding."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f1f5f9" rx="10"/><circle cx="80" cy="60" r="30" fill="#3b82f6"/><text x="80" y="65" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">Bigger</text><circle cx="160" cy="60" r="14" fill="#3b82f6"/><text x="160" y="64" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">Smaller</text><line x1="220" y1="90" x2="330" y2="40" stroke="#64748b" stroke-width="4"/><circle cx="250" cy="65" r="14" fill="#ef4444"/><text x="250" y="95" font-size="10" font-weight="700" fill="#991b1b">Rolls</text><rect x="300" y="30" width="22" height="22" fill="#10b981" rx="2"/><text x="310" y="20" font-size="10" font-weight="700" fill="#065f46">Slides</text><text x="420" y="50" font-size="12" font-weight="700" fill="#1e293b">Top &amp; Bottom</text><text x="420" y="75" font-size="11" font-weight="700" fill="#475569">On &amp; Under</text></svg>`,
    cbq: {
      title: "The Arab and his Camel",
      text: "On a cold winter night, the Arab was pitching his tent in the desert. The camel stood outside in the cold wind and asked if he could put his head inside the tent. Slowly, the camel stepped inside, and the Arab was pushed outside into the cold.",
      question: "Who was inside the tent at the start of the story? Who ended up inside the tent at the end?",
      answer: "1. At the start: The Arab was inside the tent and the camel was outside.<br>2. At the end: The camel was inside the tent and the Arab was outside.",
      rubric: "1.5 M for start state + 1.5 M for end state"
    },
    questions: [
      {
        category: "Textbook Exercise • Inside & Outside",
        q: "In the story 'The Arab and his Camel', why did the camel want to come inside the tent?",
        ans: "<strong>Answer:</strong><br>The camel wanted to come inside the tent because it was <strong>very cold outside</strong> in the desert at night.",
        marks: 2,
        rubric: [{ key: "Mention of cold outside", marks: "1 M" }, { key: "Contrast between inside and outside", marks: "1 M" }]
      },
      {
        category: "Size Comparison • Bigger and Smaller",
        q: "Tick (or name) the smaller animal: Elephant or Goat?",
        ans: "<strong>Answer:</strong><br>The <strong>Goat</strong> is smaller. The Elephant is much bigger.",
        marks: 1,
        rubric: [{ key: "Goat correctly identified", marks: "1 M" }]
      },
      {
        category: "Extreme Comparison • Biggest and Smallest",
        q: "Look at three fruits: Watermelon, Mango, and Cherry. Name the biggest fruit and the smallest fruit.",
        ans: "<strong>Answer:</strong><br>• <strong>Biggest fruit:</strong> Watermelon.<br>• <strong>Smallest fruit:</strong> Cherry.<br>Mango is between the watermelon and cherry in size.",
        marks: 2,
        rubric: [{ key: "Watermelon is biggest", marks: "1 M" }, { key: "Cherry is smallest", marks: "1 M" }]
      },
      {
        category: "Spatial Positions • Top and Bottom",
        q: "Three children are on a playground slide: Sonu is sitting at the top ready to slide down, and Monu is standing at the bottom on the grass. Who is at the top?",
        ans: "<strong>Answer:</strong><br><strong>Sonu</strong> is at the top of the slide.",
        marks: 1,
        rubric: [{ key: "Sonu identified at the top", marks: "1 M" }]
      },
      {
        category: "Distance • Nearer and Farther",
        q: "A bird is flying in the sky. House A is right below the bird, and House B is far down the road. Which house is nearer to the bird?",
        ans: "<strong>Answer:</strong><br><strong>House A</strong> is nearer to the bird.",
        marks: 2,
        rubric: [{ key: "House A is nearer", marks: "1 M" }, { key: "Distance reasoning", marks: "1 M" }]
      },
      {
        category: "Physical Properties • Rolling and Sliding",
        q: "Which of the following will roll: A battery cell, a book, an onion, a shoebox?",
        ans: "<strong>Answer:</strong><br>• <strong>Will Roll:</strong> Battery cell (on its round side) and Onion.<br>• <strong>Will Slide:</strong> Book and Shoebox (because they have flat faces).",
        marks: 2,
        rubric: [{ key: "Battery cell and onion roll", marks: "1 M" }, { key: "Book and shoebox slide", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mm2",
    num: 2,
    unit: "Unit 2: Numbers from One to Nine",
    title: "Numbers from One to Nine",
    subtitle: "One-to-One Matching, Counting, Writing Numerals & Concept of Zero",
    concepts: [
      "Counting items up to 9 with one-to-one matching (As many as).",
      "Writing numbers 1 to 9 with number words.",
      "Understanding more, less, and equal collections.",
      "Introduction to Zero (शून्य) as nothing left."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="50" cy="50" r="14" fill="#2563eb"/><circle cx="90" cy="50" r="14" fill="#2563eb"/><circle cx="130" cy="50" r="14" fill="#2563eb"/><circle cx="170" cy="50" r="14" fill="#2563eb"/><circle cx="210" cy="50" r="14" fill="#2563eb"/><text x="130" y="90" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">5 Blue Dots</text><circle cx="310" cy="50" r="14" fill="#10b981"/><circle cx="350" cy="50" r="14" fill="#10b981"/><circle cx="390" cy="50" r="14" fill="#10b981"/><circle cx="430" cy="50" r="14" fill="#10b981"/><circle cx="470" cy="50" r="14" fill="#10b981"/><text x="390" y="90" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">5 Green Dots (As Many As)</text></svg>`,
    cbq: {
      title: "Five Little Monkeys Rhyme",
      text: "Five little monkeys were jumping on the bed. One fell off and bumped his head. Mamma called the doctor and the doctor said, 'No more monkeys jumping on the bed!'",
      question: "How many monkeys were jumping at first? How many monkeys were left jumping on the bed after one fell off?",
      answer: "1. At first, there were <strong>5 monkeys</strong> jumping.<br>2. After 1 fell off: 5 - 1 = <strong>4 monkeys</strong> were left jumping on the bed.",
      rubric: "1 M for 5 monkeys at first + 1 M for 4 monkeys left"
    },
    questions: [
      {
        category: "Matching • As Many As",
        q: "There are 5 cats and 5 bowls of milk. Can each cat have its own bowl of milk? What is this called?",
        ans: "<strong>Answer:</strong><br>• Yes, each cat gets exactly one bowl of milk.<br>• This is called <strong>one-to-one matching</strong> (or 'as many cats as bowls').",
        marks: 2,
        rubric: [{ key: "Yes, each cat gets a bowl", marks: "1 M" }, { key: "One-to-one matching explained", marks: "1 M" }]
      },
      {
        category: "Counting • Group Creation",
        q: "Make a group of 4 bottles from a row of 7 bottles. How many bottles will be left out?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total bottles = 7<br>• Group selected = 4 bottles<br>• Bottles left out = 7 - 4 = <strong>3 bottles</strong>.",
        marks: 2,
        rubric: [{ key: "7 - 4 = 3 bottles", marks: "2 M" }]
      },
      {
        category: "Comparison • More or Less",
        q: "Collection A has 8 balloons. Collection B has 6 balloons. Tick the collection which has more.",
        ans: "<strong>Answer:</strong><br><strong>Collection A</strong> has more balloons because 8 is greater than 6 (8 > 6).",
        marks: 2,
        rubric: [{ key: "Collection A has more", marks: "1 M" }, { key: "8 > 6 statement", marks: "1 M" }]
      },
      {
        category: "Number Names • 1 to 9",
        q: "Match each numeral with its correct spelling: 3, 6, 8, 9 with Nine, Eight, Three, Six.",
        ans: "<strong>Answer:</strong><br>• 3 = Three<br>• 6 = Six<br>• 8 = Eight<br>• 9 = Nine.",
        marks: 2,
        rubric: [{ key: "All 4 correctly matched", marks: "2 M" }]
      },
      {
        category: "Zero Concept • Empty Branch",
        q: "There were 4 birds sitting on a tree branch. All 4 flew away one by one. How many birds are on the branch now?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Starting birds = 4<br>• Birds that flew away = 4<br>• Remaining birds = 4 - 4 = <strong>0 (Zero)</strong>.",
        marks: 2,
        rubric: [{ key: "4 - 4 = 0", marks: "1 M" }, { key: "Zero clearly identified", marks: "1 M" }]
      },
      {
        category: "Number Order • Between",
        q: "What numbers come between 4 and 8?",
        ans: "<strong>Answer:</strong><br>The numbers between 4 and 8 are <strong>5, 6, and 7</strong>.",
        marks: 2,
        rubric: [{ key: "5, 6, 7 listed correctly", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mm3",
    num: 3,
    unit: "Unit 3: Addition within 10",
    title: "Addition",
    subtitle: "One More, How Many Altogether, Addition Facts up to 9",
    concepts: [
      "Concept of addition as 'putting together' and 'one more'.",
      "Using the plus (+) and equal (=) signs.",
      "Solving horizontal and vertical addition problems."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fff1f2" rx="10"/><circle cx="60" cy="55" r="16" fill="#e11d48"/><circle cx="100" cy="55" r="16" fill="#e11d48"/><circle cx="140" cy="55" r="16" fill="#e11d48"/><text x="100" y="95" font-size="11" font-weight="700" fill="#9f1239" text-anchor="middle">3 Strawberries</text><text x="190" y="60" font-size="24" font-weight="800" fill="#e11d48">+</text><circle cx="240" cy="55" r="16" fill="#fb7185"/><circle cx="280" cy="55" r="16" fill="#fb7185"/><text x="260" y="95" font-size="11" font-weight="700" fill="#9f1239" text-anchor="middle">2 Strawberries</text><text x="330" y="60" font-size="24" font-weight="800" fill="#e11d48">=</text><rect x="370" y="30" width="100" height="50" fill="#be123c" rx="8"/><text x="420" y="62" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">5</text></svg>`,
    cbq: {
      title: "One More Parrot Rhyme",
      text: "Two green parrots flying in the sky, another little parrot joined them as they flew high. Then one more joined to sing and play.",
      question: "How many parrots were flying after the first one joined? How many parrots were flying when another one joined after that?",
      answer: "1. 2 parrots + 1 parrot = 3 parrots.<br>2. 3 parrots + 1 more parrot = 4 parrots altogether.",
      rubric: "1 M for 2+1=3 + 1 M for 3+1=4"
    },
    questions: [
      {
        category: "Addition Concept • How Many Altogether",
        q: "Two cows are grazing in the field. 1 more cow joins them. How many cows are there altogether?",
        ans: "<strong>Answer:</strong><br>• 2 + 1 = <strong>3 cows</strong> altogether.",
        marks: 1,
        rubric: [{ key: "2 + 1 = 3 cows", marks: "1 M" }]
      },
      {
        category: "Number Pairs • Make 6",
        q: "Write three different addition pairs that equal 6.",
        ans: "<strong>Answer:</strong><br>• Pair 1: 5 + 1 = 6<br>• Pair 2: 4 + 2 = 6<br>• Pair 3: 3 + 3 = 6 (also 6 + 0 = 6).",
        marks: 3,
        rubric: [{ key: "Three valid pairs provided", marks: "3 M" }]
      },
      {
        category: "Adding Zero",
        q: "What is 4 + 0? Explain why adding zero does not change the number.",
        ans: "<strong>Answer:</strong><br>• 4 + 0 = <strong>4</strong>.<br>• Adding zero means adding nothing to the group, so the original quantity stays exactly the same.",
        marks: 2,
        rubric: [{ key: "4 + 0 = 4", marks: "1 M" }, { key: "Explanation of adding nothing", marks: "1 M" }]
      },
      {
        category: "Word Problem • Combining Marbles",
        q: "Rohan has 4 blue marbles and 3 green marbles. How many marbles does Rohan have in total?",
        ans: "<strong>Calculation:</strong><br>• Blue marbles = 4<br>• Green marbles = 3<br>• Total marbles = 4 + 3 = <strong>7 marbles</strong>.",
        marks: 2,
        rubric: [{ key: "4 + 3 statement", marks: "1 M" }, { key: "Answer: 7 marbles", marks: "1 M" }]
      },
      {
        category: "Vertical Addition",
        q: "Solve vertically:<br>&nbsp;&nbsp;5<br>+ 4<br>---",
        ans: "<strong>Answer:</strong><br>&nbsp;&nbsp;5<br>+ 4<br>---<br>&nbsp;&nbsp;<strong>9</strong>",
        marks: 1,
        rubric: [{ key: "Correct sum: 9", marks: "1 M" }]
      },
      {
        category: "Visual Problem • Ants on a Log",
        q: "There are 6 ants marching in a line. 2 more ants join the back of the line. How many ants are in line now?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Existing ants = 6<br>• Joined ants = 2<br>• Total ants = 6 + 2 = <strong>8 ants</strong>.",
        marks: 2,
        rubric: [{ key: "6 + 2 = 8 ants", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mm4",
    num: 4,
    unit: "Unit 3: Subtraction within 10",
    title: "Subtraction",
    subtitle: "Take Away, How Many Left, Subtraction Facts up to 9",
    concepts: [
      "Concept of subtraction as 'taking away' or 'separating'.",
      "Using the minus sign (-) and equal sign (=).",
      "Finding differences and remaining items in everyday situations."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><circle cx="60" cy="55" r="16" fill="#eab308"/><circle cx="100" cy="55" r="16" fill="#eab308"/><circle cx="140" cy="55" r="16" fill="#eab308"/><circle cx="180" cy="55" r="16" fill="#eab308"/><circle cx="220" cy="55" r="16" fill="#eab308"/><text x="140" y="95" font-size="11" font-weight="700" fill="#a16207" text-anchor="middle">5 Lemons</text><text x="270" y="60" font-size="24" font-weight="800" fill="#ca8a04">-</text><circle cx="320" cy="55" r="16" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4" fill="none"/><circle cx="360" cy="55" r="16" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4" fill="none"/><text x="340" y="95" font-size="11" font-weight="700" fill="#a16207" text-anchor="middle">Take Away 2</text><text x="410" y="60" font-size="24" font-weight="800" fill="#ca8a04">=</text><text x="455" y="68" font-size="24" font-weight="800" fill="#854d0e">3</text></svg>`,
    cbq: {
      title: "Leaves on a Branch",
      text: "A twig had 6 fresh green leaves. In the autumn breeze, 2 leaves fell off onto the garden grass.",
      question: "How many leaves remained attached to the twig? Write the subtraction fact.",
      answer: "1. Leaves remaining = 6 - 2 = <strong>4 leaves</strong>.<br>2. Subtraction fact: <strong>6 - 2 = 4</strong>.",
      rubric: "1 M for 4 leaves remaining + 1 M for fact 6 - 2 = 4"
    },
    questions: [
      {
        category: "Subtraction Concept • Take Away",
        q: "There were 5 cups on the dining table. 2 cups broke. How many cups are left?",
        ans: "<strong>Answer:</strong><br>• Total cups = 5<br>• Cups broken = 2<br>• Cups left = 5 - 2 = <strong>3 cups</strong>.",
        marks: 2,
        rubric: [{ key: "5 - 2 = 3 cups", marks: "2 M" }]
      },
      {
        category: "Subtracting All",
        q: "A boy had 3 balloons. All 3 balloons burst with a pop. How many balloons are left with him?",
        ans: "<strong>Answer:</strong><br>• 3 - 3 = <strong>0 balloons</strong>.<br>When you take away all items from a group, zero items are left.",
        marks: 2,
        rubric: [{ key: "3 - 3 = 0", marks: "1 M" }, { key: "Explanation of zero remainder", marks: "1 M" }]
      },
      {
        category: "Vertical Subtraction",
        q: "Solve vertically:<br>&nbsp;&nbsp;8<br>- 3<br>---",
        ans: "<strong>Answer:</strong><br>&nbsp;&nbsp;8<br>- 3<br>---<br>&nbsp;&nbsp;<strong>5</strong>",
        marks: 1,
        rubric: [{ key: "Answer: 5", marks: "1 M" }]
      },
      {
        category: "Missing Subtrahend",
        q: "Fill in the blank: 7 - __ = 2.",
        ans: "<strong>Answer:</strong><br>7 - <strong>5</strong> = 2 (since 7 - 2 = 5).",
        marks: 1,
        rubric: [{ key: "5", marks: "1 M" }]
      },
      {
        category: "Word Problem • Frogs on a Rock",
        q: "9 frogs were sitting on a river rock. 4 frogs jumped into the water. How many frogs are still sitting on the rock?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Frogs on rock = 9<br>• Frogs jumped in = 4<br>• Frogs remaining = 9 - 4 = <strong>5 frogs</strong>.",
        marks: 2,
        rubric: [{ key: "9 - 4 statement", marks: "1 M" }, { key: "Answer: 5 frogs", marks: "1 M" }]
      },
      {
        category: "Comparison • Difference",
        q: "Tina has 7 pencils and Meenu has 4 pencils. How many more pencils does Tina have than Meenu?",
        ans: "<strong>Calculation:</strong><br>• Tina = 7 pencils<br>• Meenu = 4 pencils<br>• Difference = 7 - 4 = <strong>3 pencils</strong>.<br>Tina has 3 more pencils.",
        marks: 2,
        rubric: [{ key: "Difference 7 - 4 = 3", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mm5",
    num: 5,
    unit: "Unit 4: Numbers from Ten to Twenty",
    title: "Numbers from Ten to Twenty",
    subtitle: "Make a Group of 10, Tens and Ones, Addition & Subtraction up to 20",
    concepts: [
      "Grouping 10 items into 1 Ten and understanding numbers 11 to 20.",
      "Writing numbers in tens and ones format.",
      "Adding and subtracting single-digit numbers to/from teen numbers."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0fdfa" rx="10"/><rect x="50" y="30" width="120" height="60" fill="#0d9488" rx="6"/><text x="110" y="65" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">Group of 10</text><text x="200" y="65" font-size="24" font-weight="800" fill="#0d9488">+</text><circle cx="250" cy="60" r="12" fill="#14b8a6"/><circle cx="280" cy="60" r="12" fill="#14b8a6"/><circle cx="310" cy="60" r="12" fill="#14b8a6"/><text x="280" y="95" font-size="11" font-weight="700" fill="#0f766e" text-anchor="middle">3 Ones</text><text x="355" y="65" font-size="24" font-weight="800" fill="#0d9488">=</text><text x="420" y="70" font-size="26" font-weight="800" fill="#115e59">13</text></svg>`,
    cbq: {
      title: "Counting Bananas for the Zoo Monkeys",
      text: "The zookeeper has 17 bananas in a crate. He ties 10 bananas in a bunch for the mother monkey and gives the remaining loose bananas to the baby monkeys.",
      question: "How many bunches of 10 does the keeper make? How many loose bananas do the baby monkeys get?",
      answer: "1. 1 bunch of 10 bananas.<br>2. 7 loose bananas (ones) for the baby monkeys (17 = 1 Ten + 7 Ones).",
      rubric: "1.5 M for 1 bunch of 10 + 1.5 M for 7 loose bananas"
    },
    questions: [
      {
        category: "Tens and Ones • Decomposition",
        q: "Write the tens and ones for the following numbers:<br>(a) 15<br>(b) 19",
        ans: "<strong>Answer:</strong><br>(a) 15 = <strong>1 Ten and 5 Ones</strong> (10 + 5)<br>(b) 19 = <strong>1 Ten and 9 Ones</strong> (10 + 9)",
        marks: 2,
        rubric: [{ key: "(a) 1 Ten, 5 Ones", marks: "1 M" }, { key: "(b) 1 Ten, 9 Ones", marks: "1 M" }]
      },
      {
        category: "Addition within 20",
        q: "Solve: 12 + 5.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 12 + 5 = 10 + 2 + 5 = 10 + 7 = <strong>17</strong>.<br>Or count on from 12: 13, 14, 15, 16, 17.",
        marks: 2,
        rubric: [{ key: "Showing method", marks: "1 M" }, { key: "Answer: 17", marks: "1 M" }]
      },
      {
        category: "Subtraction within 20",
        q: "Solve: 18 - 6.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 8 ones - 6 ones = 2 ones.<br>• 1 ten + 2 ones = <strong>12</strong>.<br>18 - 6 = 12.",
        marks: 2,
        rubric: [{ key: "Step shown", marks: "1 M" }, { key: "Answer: 12", marks: "1 M" }]
      },
      {
        category: "Comparison • Circle the Greater Number",
        q: "Circle the greater number in each pair:<br>(a) 11 or 14<br>(b) 16 or 13",
        ans: "<strong>Answer:</strong><br>(a) In (11, 14), <strong>14</strong> is greater.<br>(b) In (16, 13), <strong>16</strong> is greater.",
        marks: 2,
        rubric: [{ key: "14", marks: "1 M" }, { key: "16", marks: "1 M" }]
      },
      {
        category: "Story Sum • Beads on Thread",
        q: "Kavita had 11 wooden beads. Her aunt gave her 4 more beads. How many beads does Kavita have altogether?",
        ans: "<strong>Calculation:</strong><br>• Initial beads = 11<br>• Added beads = 4<br>• Total beads = 11 + 4 = <strong>15 beads</strong>.",
        marks: 2,
        rubric: [{ key: "11 + 4 = 15 beads", marks: "2 M" }]
      },
      {
        category: "Story Sum • Bird Flight",
        q: "15 birds were resting on a wire. 5 birds flew away. How many birds are still on the wire?",
        ans: "<strong>Calculation:</strong><br>• Total birds = 15<br>• Birds flew away = 5<br>• Birds left = 15 - 5 = <strong>10 birds</strong>.",
        marks: 2,
        rubric: [{ key: "15 - 5 = 10 birds", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mm6",
    num: 6,
    unit: "Unit 5: Time & Routine",
    title: "Time",
    subtitle: "Sampurna's Day: Chronological Order, Duration of Activities",
    concepts: [
      "Sequencing daily life events from morning to evening.",
      "Understanding activities that take more time vs less time.",
      "Connecting daily activities with appropriate times of day."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef2f2" rx="10"/><rect x="40" y="30" width="90" height="55" fill="#fca5a5" rx="6"/><text x="85" y="55" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">1. Wake Up</text><text x="85" y="70" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">&amp; Brush</text><text x="145" y="60" font-size="16" font-weight="800" fill="#ef4444">→</text><rect x="165" y="30" width="90" height="55" fill="#fca5a5" rx="6"/><text x="210" y="55" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">2. Breakfast</text><text x="210" y="70" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">&amp; School</text><text x="270" y="60" font-size="16" font-weight="800" fill="#ef4444">→</text><rect x="290" y="30" width="90" height="55" fill="#fca5a5" rx="6"/><text x="335" y="55" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">3. Study</text><text x="335" y="70" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">&amp; Play</text><text x="395" y="60" font-size="16" font-weight="800" fill="#ef4444">→</text><rect x="415" y="30" width="70" height="55" fill="#fca5a5" rx="6"/><text x="450" y="62" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">4. Sleep</text></svg>`,
    cbq: {
      title: "Baking a Roti Routine",
      text: "Mother is making rotis for dinner. She needs to: knead the dough in a bowl, light the stove, roll the dough into flat circles, and roast the roti on the tawa.",
      question: "Which step must Mother do first? What happens if she tries to roll before kneading?",
      answer: "1. Mother must <strong>knead the dough</strong> first.<br>2. If she does not knead, the dry flour cannot be rolled into flat circles. Cooking requires a fixed sequence of steps over time.",
      rubric: "1.5 M for kneading first + 1.5 M for logical sequencing reasoning"
    },
    questions: [
      {
        category: "Sequencing • Daily Routine",
        q: "What do you do first in the morning: Put on school uniform or take a bath?",
        ans: "<strong>Answer:</strong><br>You <strong>take a bath first</strong>, and then you put on your clean school uniform.",
        marks: 1,
        rubric: [{ key: "Take bath first", marks: "1 M" }]
      },
      {
        category: "Time Duration • Tick the Longer Activity",
        q: "Which takes more time: (a) Walking to school, or (b) Travelling to school in a school bus?",
        ans: "<strong>Answer:</strong><br>• <strong>Walking to school takes more time</strong> because walking speed is slow.<br>A bus travels much faster and takes less time.",
        marks: 2,
        rubric: [{ key: "Walking takes more time", marks: "1 M" }, { key: "Explanation with speed", marks: "1 M" }]
      },
      {
        category: "Daily Life • Water Filling",
        q: "Which bucket takes longer to fill from a tap: A 5-litre bucket or a 15-litre bucket?",
        ans: "<strong>Answer:</strong><br>The <strong>15-litre bucket</strong> takes longer to fill because it holds much more water.",
        marks: 2,
        rubric: [{ key: "15-litre bucket", marks: "1 M" }, { key: "Greater capacity explanation", marks: "1 M" }]
      },
      {
        category: "Day and Night Activities",
        q: "Name two activities you only do at night.",
        ans: "<strong>Answer:</strong><br>1. Looking at the moon and stars.<br>2. Sleeping in bed under the blanket.",
        marks: 2,
        rubric: [{ key: "Two valid night activities listed", marks: "2 M" }]
      },
      {
        category: "Meal Times",
        q: "What are the three main meals of the day, and when are they eaten?",
        ans: "<strong>Answer:</strong><br>1. <strong>Breakfast:</strong> Eaten in the morning.<br>2. <strong>Lunch:</strong> Eaten in the afternoon.<br>3. <strong>Dinner:</strong> Eaten at night.",
        marks: 3,
        rubric: [{ key: "All 3 meals with times", marks: "3 M" }]
      },
      {
        category: "Quick Action",
        q: "Name an action that takes less than one second.",
        ans: "<strong>Answer:</strong><br><strong>Snapping your fingers</strong> (or blinking your eye, or clapping once).",
        marks: 1,
        rubric: [{ key: "Valid instantaneous action", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mm7",
    num: 7,
    unit: "Unit 5: Measurement of Length & Weight",
    title: "Measurement",
    subtitle: "Longer-Shorter, Longest-Shortest, Taller-Shorter, Heavier-Lighter",
    concepts: [
      "Comparing lengths: Longer and Shorter, Longest and Shortest.",
      "Comparing heights: Taller and Shorter, Tallest and Shortest.",
      "Comparing mass/weight: Heavier and Lighter, Heaviest and Lightest.",
      "Measuring using handspans and footpaces."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f8fafc" rx="10"/><line x1="40" y1="40" x2="220" y2="40" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/><text x="130" y="25" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Longer Ribbon</text><line x1="40" y1="70" x2="130" y2="70" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/><text x="85" y="95" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Shorter Ribbon</text><rect x="300" y="20" width="18" height="80" fill="#16a34a" rx="2"/><rect x="340" y="50" width="18" height="50" fill="#4ade80" rx="2"/><text x="309" y="112" font-size="10" font-weight="700" fill="#166534" text-anchor="middle">Taller</text><text x="349" y="112" font-size="10" font-weight="700" fill="#166534" text-anchor="middle">Shorter</text><circle cx="430" cy="50" r="24" fill="#f59e0b"/><circle cx="475" cy="55" r="12" fill="#fbbf24"/><text x="430" y="90" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Heavier</text><text x="475" y="90" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Lighter</text></svg>`,
    cbq: {
      title: "The Playground Carpet",
      text: "The teacher wants to lay a runner carpet in the corridor. She asks Anu to measure the corridor with her footsteps. Anu counts 30 footsteps. The teacher then walks the corridor and counts 18 footsteps.",
      question: "Why did Anu count 30 footsteps while the teacher counted only 18 footsteps?",
      answer: "1. Anu is a child, so her stride (footstep) is smaller.<br>2. The teacher is an adult with longer legs and bigger strides. A longer step requires fewer footsteps to cover the same corridor distance.",
      rubric: "1.5 M for child's stride is smaller + 1.5 M for adult stride is longer"
    },
    questions: [
      {
        category: "Length • Longer or Shorter",
        q: "Look at a ladder and a stool. Which one is taller?",
        ans: "<strong>Answer:</strong><br>The <strong>ladder</strong> is taller than the stool.",
        marks: 1,
        rubric: [{ key: "Ladder is taller", marks: "1 M" }]
      },
      {
        category: "Extreme Comparison • Longest",
        q: "Among a pencil, an injection needle, and a cricket bat, which is the longest and which is the shortest?",
        ans: "<strong>Answer:</strong><br>• <strong>Longest:</strong> Cricket bat.<br>• <strong>Shortest:</strong> Injection needle.",
        marks: 2,
        rubric: [{ key: "Cricket bat is longest", marks: "1 M" }, { key: "Injection needle is shortest", marks: "1 M" }]
      },
      {
        category: "Weight • Heavier and Lighter",
        q: "Which object is lighter: A feather or an apple?",
        ans: "<strong>Answer:</strong><br>The <strong>feather</strong> is lighter. The apple is much heavier than the feather.",
        marks: 1,
        rubric: [{ key: "Feather is lighter", marks: "1 M" }]
      },
      {
        category: "Heaviest in a Group",
        q: "Which is the heaviest among: A pumpkin, a tomato, and a lemon?",
        ans: "<strong>Answer:</strong><br>The <strong>pumpkin</strong> is the heaviest.",
        marks: 1,
        rubric: [{ key: "Pumpkin identified as heaviest", marks: "1 M" }]
      },
      {
        category: "Non-standard Units • Span",
        q: "Measure your pencil with your fingers. Approximately how many finger-widths long is a new pencil?",
        ans: "<strong>Answer:</strong><br>A standard new pencil is approximately <strong>10 to 12 finger-widths</strong> long.",
        marks: 2,
        rubric: [{ key: "Realistic estimate between 8-15 finger widths", marks: "2 M" }]
      },
      {
        category: "Seesaw Science",
        q: "When an elephant and an ant sit on opposite ends of a seesaw, which end goes down?",
        ans: "<strong>Answer:</strong><br>The <strong>elephant's end</strong> goes down to the ground because the elephant is immensely heavier than the ant.",
        marks: 2,
        rubric: [{ key: "Elephant's side goes down", marks: "1 M" }, { key: "Heavier side moves down explanation", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mm8",
    num: 8,
    unit: "Unit 6: Numbers from Twenty-one to Fifty",
    title: "Numbers from Twenty-one to Fifty",
    subtitle: "Tens and Ones, Number Lines, Writing Missing Numbers 21 to 50",
    concepts: [
      "Counting bundles of 10s and loose sticks up to 50.",
      "Writing numerals and number names from 21 to 50.",
      "Identifying missing numbers in sequences up to 50."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><rect x="50" y="30" width="50" height="60" fill="#3b82f6" rx="6"/><text x="75" y="65" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">10</text><rect x="115" y="30" width="50" height="60" fill="#3b82f6" rx="6"/><text x="140" y="65" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">10</text><text x="110" y="105" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">2 Tens = 20</text><circle cx="210" cy="45" r="7" fill="#f97316"/><circle cx="210" cy="75" r="7" fill="#f97316"/><circle cx="230" cy="60" r="7" fill="#f97316"/><text x="220" y="105" font-size="11" font-weight="700" fill="#c2410c" text-anchor="middle">3 Ones = 3</text><text x="270" y="65" font-size="20" font-weight="800" fill="#0f172a">=</text><rect x="310" y="30" width="90" height="60" fill="#1d4ed8" rx="8"/><text x="355" y="68" font-size="24" font-weight="800" fill="#fff" text-anchor="middle">23</text><text x="355" y="105" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Twenty-three</text></svg>`,
    cbq: {
      title: "Counting Matchstick Bundles",
      text: "Deepak has 3 bundles of 10 matchsticks and 7 loose matchsticks. His friend gives him 3 more loose matchsticks.",
      question: "How many total matchsticks did Deepak have at first? How many bundles can he make after receiving 3 more loose matchsticks?",
      answer: "1. At first: 3 tens + 7 ones = <strong>37 matchsticks</strong>.<br>2. 7 loose + 3 loose = 10 loose matchsticks, which makes 1 new bundle.<br>3 + 1 = <strong>4 full bundles of 10 (40 matchsticks)</strong>.",
      rubric: "1.5 M for 37 matchsticks + 1.5 M for 4 bundles (40)"
    },
    questions: [
      {
        category: "Tens and Ones • Identification",
        q: "What number is formed by 4 Tens and 5 Ones?",
        ans: "<strong>Answer:</strong><br>• 4 Tens = 40<br>• 5 Ones = 5<br>• 40 + 5 = <strong>45 (Forty-five)</strong>.",
        marks: 2,
        rubric: [{ key: "40 + 5", marks: "1 M" }, { key: "45", marks: "1 M" }]
      },
      {
        category: "Missing Numbers • 21 to 30",
        q: "Fill in the missing numbers: 21, 22, __, 24, 25, __, 27, 28, __, 30.",
        ans: "<strong>Answer:</strong><br>The missing numbers are <strong>23</strong>, <strong>26</strong>, and <strong>29</strong>.",
        marks: 3,
        rubric: [{ key: "23, 26, 29 identified", marks: "3 M" }]
      },
      {
        category: "Number Names • 30 to 50",
        q: "Write the number name for:<br>(a) 32<br>(b) 48",
        ans: "<strong>Answer:</strong><br>(a) 32 = <strong>Thirty-two</strong><br>(b) 48 = <strong>Forty-eight</strong>",
        marks: 2,
        rubric: [{ key: "Thirty-two", marks: "1 M" }, { key: "Forty-eight", marks: "1 M" }]
      },
      {
        category: "Place Value Table",
        q: "In the number 42, which digit is in the tens place and which is in the ones place?",
        ans: "<strong>Answer:</strong><br>• Tens place digit = <strong>4</strong> (value = 40)<br>• Ones place digit = <strong>2</strong> (value = 2).",
        marks: 2,
        rubric: [{ key: "Tens = 4", marks: "1 M" }, { key: "Ones = 2", marks: "1 M" }]
      },
      {
        category: "Before and After • 21 to 50",
        q: "Write the number just before 40 and the number just after 40.",
        ans: "<strong>Answer:</strong><br>• Number just before 40 is <strong>39</strong>.<br>• Number just after 40 is <strong>41</strong>.",
        marks: 2,
        rubric: [{ key: "Before: 39", marks: "1 M" }, { key: "After: 41", marks: "1 M" }]
      },
      {
        category: "Mental Arithmetic • Group of 10",
        q: "How many tens are there in the number 50?",
        ans: "<strong>Answer:</strong><br>There are <strong>5 tens</strong> in 50 (5 × 10 = 50).",
        marks: 1,
        rubric: [{ key: "5 tens", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mm9",
    num: 9,
    unit: "Unit 7: Data Handling",
    title: "Data Handling",
    subtitle: "Counting Shapes, Picture Charts, Frequency & Name Length Analysis",
    concepts: [
      "Counting different geometric shapes within a composite drawing.",
      "Comparing which shape occurs the most and the least.",
      "Counting letters in names and identifying most common letters."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fdf2f8" rx="10"/><polygon points="80,25 50,75 110,75" fill="#ec4899"/><text x="80" y="100" font-size="11" font-weight="700" fill="#9d174d" text-anchor="middle">Triangles: 8</text><circle cx="200" cy="50" r="25" fill="#3b82f6"/><text x="200" y="100" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Circles: 5</text><rect x="310" y="30" width="40" height="40" fill="#10b981" rx="4"/><text x="330" y="100" font-size="11" font-weight="700" fill="#065f46" text-anchor="middle">Squares: 3</text><text x="430" y="55" font-size="12" font-weight="800" fill="#831843">Most: Triangle (8)</text><text x="430" y="80" font-size="12" font-weight="800" fill="#831843">Least: Square (3)</text></svg>`,
    cbq: {
      title: "Scenery Shape Count",
      text: "Children drew a landscape featuring a house, mountains, and the sun. The drawing contains 12 Triangles (mountains and roof), 4 Circles (sun and flowers), 6 Squares (windows), and 3 Rectangles (doors).",
      question: "Which shape appears the most times in the drawing? Which shape appears the least times? How many total shapes were used?",
      answer: "1. <strong>Most:</strong> Triangles (12 times).<br>2. <strong>Least:</strong> Rectangles (3 times).<br>3. <strong>Total shapes:</strong> 12 + 4 + 6 + 3 = <strong>25 shapes</strong>.",
      rubric: "1 M for most + 1 M for least + 1 M for total 25"
    },
    questions: [
      {
        category: "Counting Shapes • Picture Reading",
        q: "Look at the robot drawing. It has 4 circles for joints, 2 rectangles for legs, 1 square for head, and 1 rectangle for body. How many rectangles are there in total?",
        ans: "<strong>Answer:</strong><br>• Legs = 2 rectangles<br>• Body = 1 rectangle<br>• Total rectangles = 2 + 1 = <strong>3 rectangles</strong>.",
        marks: 2,
        rubric: [{ key: "Legs: 2, Body: 1", marks: "1 M" }, { key: "Total 3 rectangles", marks: "1 M" }]
      },
      {
        category: "Letter Count in Names",
        q: "Count the number of letters in each friend's name:<br>(a) RAM<br>(b) GEETA<br>(c) SUBHASH",
        ans: "<strong>Answer:</strong><br>(a) RAM = <strong>3 letters</strong><br>(b) GEETA = <strong>5 letters</strong><br>(c) SUBHASH = <strong>7 letters</strong>",
        marks: 3,
        rubric: [{ key: "RAM = 3", marks: "1 M" }, { key: "GEETA = 5", marks: "1 M" }, { key: "SUBHASH = 7", marks: "1 M" }]
      },
      {
        category: "Data Comparison • Highest Frequency",
        q: "In the names RAM, GEETA, and SUBHASH, which name has the highest number of letters?",
        ans: "<strong>Answer:</strong><br><strong>SUBHASH</strong> has the highest number of letters (7 letters).",
        marks: 1,
        rubric: [{ key: "Subhash identified", marks: "1 M" }]
      },
      {
        category: "Finding Common Letters",
        q: "How many times does the letter 'A' appear in the names RAM, GEETA, and SUBHASH combined?",
        ans: "<strong>Counting:</strong><br>• R<strong>A</strong>M → 1 time<br>• GEET<strong>A</strong> → 1 time<br>• SUBH<strong>A</strong>SH → 1 time<br>• Total = 1 + 1 + 1 = <strong>3 times</strong>.",
        marks: 2,
        rubric: [{ key: "Occurrences shown", marks: "1 M" }, { key: "Total: 3 times", marks: "1 M" }]
      },
      {
        category: "Shape Comparison",
        q: "In a diagram, there are 9 circles and 5 triangles. How many more circles are there than triangles?",
        ans: "<strong>Calculation:</strong><br>• Circles = 9<br>• Triangles = 5<br>• Difference = 9 - 5 = <strong>4 more circles</strong>.",
        marks: 2,
        rubric: [{ key: "9 - 5 = 4 circles", marks: "2 M" }]
      },
      {
        category: "Simple Tally Observation",
        q: "Why do we make a table when counting many items in a room?",
        ans: "<strong>Answer:</strong><br>We make a table so that we do not miss any item or count the same item twice. A table makes counting <strong>organized, clear, and easy to read</strong>.",
        marks: 2,
        rubric: [{ key: "Organization and avoiding mistakes explained", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mm10",
    num: 10,
    unit: "Unit 7: Patterns",
    title: "Patterns",
    subtitle: "Visual Patterns, Number Sequences & Growing Patterns",
    concepts: [
      "Recognizing patterns in shapes, symbols, and objects around us.",
      "Extending growing and repeating sequences.",
      "Creating number patterns with addition rules."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><rect x="40" y="40" width="30" height="30" fill="#f59e0b" rx="4"/><polygon points="100,70 115,40 130,70" fill="#3b82f6"/><rect x="150" y="40" width="30" height="30" fill="#f59e0b" rx="4"/><polygon points="210,70 225,40 240,70" fill="#3b82f6"/><rect x="260" y="40" width="30" height="30" fill="#f59e0b" rx="4"/><polygon points="320,70 335,40 350,70" fill="#3b82f6"/><text x="410" y="60" font-size="14" font-weight="800" fill="#b45309">Next: Square, △</text><text x="250" y="105" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">Repeating Shape Pattern: Square, Triangle, Square, Triangle...</text></svg>`,
    cbq: {
      title: "Granny's Saree Border",
      text: "Granny's silk saree has a beautiful printed border with alternating red leaves and gold flowers: Leaf, Flower, Leaf, Flower, Leaf, Flower...",
      question: "What will be the 9th design on the saree border? What comes after every flower?",
      answer: "1. 9th design: Odd positions (1, 3, 5, 7, 9) are Leaves. So the 9th design will be a <strong>Leaf</strong>.<br>2. After every flower comes a <strong>Leaf</strong>.",
      rubric: "1.5 M for 9th design is Leaf + 1.5 M for Leaf after every flower"
    },
    questions: [
      {
        category: "Pattern Extension • Shapes",
        q: "Extend the pattern: ⬆, ⬇, ⬆, ⬇, ⬆, __, __.",
        ans: "<strong>Answer:</strong><br>The arrow points up, then down.<br>Next two arrows are <strong>⬇ (Down)</strong> and <strong>⬆ (Up)</strong>.",
        marks: 2,
        rubric: [{ key: "Down arrow", marks: "1 M" }, { key: "Up arrow", marks: "1 M" }]
      },
      {
        category: "Number Patterns • Skip Counting",
        q: "Fill in the blanks: 5, 10, 15, __, 25, __.",
        ans: "<strong>Step-by-Step Rule:</strong><br>• The pattern adds 5 each time (+5).<br>• 15 + 5 = 20<br>• 25 + 5 = 30<br>Missing numbers are <strong>20</strong> and <strong>30</strong>.",
        marks: 2,
        rubric: [{ key: "20", marks: "1 M" }, { key: "30", marks: "1 M" }]
      },
      {
        category: "Growing Pattern • Dots",
        q: "Pattern: •, ••, •••, ••••. How many dots will be in the next step?",
        ans: "<strong>Answer:</strong><br>The number of dots grows by 1 each time (1, 2, 3, 4...).<br>The next step will have <strong>5 dots (•••••)</strong>.",
        marks: 2,
        rubric: [{ key: "Growing rule (+1)", marks: "1 M" }, { key: "5 dots identified", marks: "1 M" }]
      },
      {
        category: "Letter Pattern • Repetition",
        q: "Continue the pattern: A, B, A, B, A, B, __, __.",
        ans: "<strong>Answer:</strong><br>The next two letters are <strong>A</strong> and <strong>B</strong>.",
        marks: 1,
        rubric: [{ key: "A and B", marks: "1 M" }]
      },
      {
        category: "Backwards Number Pattern",
        q: "Complete the backward sequence: 20, 19, 18, 17, __, __, 14.",
        ans: "<strong>Answer:</strong><br>Counting down by 1:<br>20, 19, 18, 17, <strong>16</strong>, <strong>15</strong>, 14.<br>Missing numbers are <strong>16</strong> and <strong>15</strong>.",
        marks: 2,
        rubric: [{ key: "16 and 15 identified", marks: "2 M" }]
      },
      {
        category: "Real World Observation",
        q: "Where can you see patterns in everyday life? Give two examples.",
        ans: "<strong>Answer:</strong><br>1. <strong>Zebra crossings</strong> on roads (alternating black and white stripes).<br>2. <strong>Floor tiles</strong> or brick walls (repeating rectangular blocks).",
        marks: 2,
        rubric: [{ key: "Two valid real world examples", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mm11",
    num: 11,
    unit: "Unit 8: Numbers from Fifty-one to Hundred",
    title: "Numbers",
    subtitle: "Counting 51 to 100, Bundles of Tens and Ones, Place Value Mastery",
    concepts: [
      "Counting in groups of tens from 50 to 100.",
      "Writing numerals and number names up to 100.",
      "Understanding that 10 tens make 100 (One Hundred)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0fdf4" rx="10"/><rect x="40" y="30" width="220" height="60" fill="#16a34a" rx="6"/><text x="150" y="55" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">7 Bundles of 10</text><text x="150" y="75" font-size="13" font-weight="800" fill="#dcfce7" text-anchor="middle">= 70</text><text x="285" y="65" font-size="24" font-weight="800" fill="#16a34a">+</text><circle cx="320" cy="60" r="10" fill="#22c55e"/><circle cx="345" cy="60" r="10" fill="#22c55e"/><text x="332" y="95" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">2 Ones</text><text x="385" y="65" font-size="24" font-weight="800" fill="#16a34a">=</text><text x="440" y="70" font-size="26" font-weight="800" fill="#14532d">72</text></svg>`,
    cbq: {
      title: "Centurions on the Cricket Pitch",
      text: "Batsman Virat has scored 90 runs. He hits a boundary (4 runs) and then two singles (1 run each).",
      question: "What is Virat's score now? How many more runs does he need to reach a century (100 runs)?",
      answer: "1. Virat's score: 90 + 4 + 1 + 1 = <strong>96 runs</strong>.<br>2. Century = 100 runs. Runs needed: 100 - 96 = <strong>4 runs</strong>.",
      rubric: "1.5 M for score 96 + 1.5 M for 4 runs needed"
    },
    questions: [
      {
        category: "Tens and Ones • Place Value",
        q: "What number is 6 Tens and 4 Ones?",
        ans: "<strong>Answer:</strong><br>• 6 Tens = 60<br>• 4 Ones = 4<br>• 60 + 4 = <strong>64 (Sixty-four)</strong>.",
        marks: 2,
        rubric: [{ key: "60 + 4", marks: "1 M" }, { key: "64", marks: "1 M" }]
      },
      {
        category: "Number Names • 51 to 100",
        q: "Write the numeral for:<br>(a) Seventy-eight<br>(b) Ninety-five",
        ans: "<strong>Answer:</strong><br>(a) Seventy-eight = <strong>78</strong><br>(b) Ninety-five = <strong>95</strong>",
        marks: 2,
        rubric: [{ key: "78", marks: "1 M" }, { key: "95", marks: "1 M" }]
      },
      {
        category: "Counting by 10s • Up to 100",
        q: "Count by tens from 50 to 100.",
        ans: "<strong>Answer:</strong><br>50, 60, 70, 80, 90, <strong>100</strong>.",
        marks: 2,
        rubric: [{ key: "All tens listed correctly", marks: "2 M" }]
      },
      {
        category: "Before and After • Late 90s",
        q: "What comes just before 100, and what comes just after 89?",
        ans: "<strong>Answer:</strong><br>• Just before 100: <strong>99</strong><br>• Just after 89: <strong>90</strong>",
        marks: 2,
        rubric: [{ key: "99", marks: "1 M" }, { key: "90", marks: "1 M" }]
      },
      {
        category: "Century Concept • Making 100",
        q: "How many tens are needed to make 100?",
        ans: "<strong>Answer:</strong><br><strong>10 tens</strong> make 100 (10 × 10 = 100).",
        marks: 1,
        rubric: [{ key: "10 tens", marks: "1 M" }]
      },
      {
        category: "Comparison • Two-Digit Numbers",
        q: "Which number is greater: 87 or 78? Explain why.",
        ans: "<strong>Explanation:</strong><br>• 87 has 8 tens.<br>• 78 has 7 tens.<br>Since 8 tens is greater than 7 tens, <strong>87 is greater than 78 (87 > 78)</strong>.",
        marks: 2,
        rubric: [{ key: "87 > 78", marks: "1 M" }, { key: "Reasoning with tens digit", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mm12",
    num: 12,
    unit: "Unit 8: Money & Financial Foundations",
    title: "Money",
    subtitle: "Coins, Currency Notes, Pricing, Simple Purchases & Addition of Money",
    concepts: [
      "Recognizing currency coins: 1, 2, 5, 10 rupees.",
      "Recognizing currency notes: 10, 20, 50, 100 rupees.",
      "Combining coins to pay for items up to ₹20."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fffbeb" rx="10"/><circle cx="70" cy="55" r="22" fill="#d97706"/><text x="70" y="61" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">₹5</text><text x="120" y="62" font-size="20" font-weight="800" fill="#b45309">+</text><circle cx="165" cy="55" r="22" fill="#d97706"/><text x="165" y="61" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">₹5</text><text x="215" y="62" font-size="20" font-weight="800" fill="#b45309">=</text><rect x="250" y="32" width="80" height="46" fill="#f59e0b" rx="4"/><text x="290" y="60" font-size="15" font-weight="800" fill="#fff" text-anchor="middle">₹10</text><rect x="365" y="32" width="95" height="46" fill="#60a5fa" rx="4"/><text x="412" y="60" font-size="14" font-weight="800" fill="#1e3a8a" text-anchor="middle">₹100 Note</text></svg>`,
    cbq: {
      title: "Buying Kites for Makar Sankranti",
      text: "A shopkeeper sells colourful kites for ₹6 each and rolls of string (charkhi) for ₹10 each. Aman buys one kite and one roll of string.",
      question: "How much total money must Aman pay to the shopkeeper? If he gives a ₹20 note, how much change will he receive?",
      answer: "1. Total cost = ₹6 + ₹10 = <strong>₹16</strong>.<br>2. Change from ₹20 = ₹20 - ₹16 = <strong>₹4</strong> (or two ₹2 coins).",
      rubric: "1.5 M for total ₹16 + 1.5 M for change ₹4"
    },
    questions: [
      {
        category: "Coin Combination • Make ₹8",
        q: "How can you make ₹8 using ₹2 coins?",
        ans: "<strong>Answer:</strong><br>• 2 + 2 + 2 + 2 = 8.<br>• You need <strong>four ₹2 coins</strong> to make ₹8.",
        marks: 2,
        rubric: [{ key: "Four ₹2 coins identified", marks: "2 M" }]
      },
      {
        category: "Shopping Sum • Pen and Notebook",
        q: "A notebook costs ₹10 and a pencil costs ₹3. How much do both items cost together?",
        ans: "<strong>Calculation:</strong><br>• Notebook = ₹10<br>• Pencil = ₹3<br>• Total cost = ₹10 + ₹3 = <strong>₹13</strong>.",
        marks: 2,
        rubric: [{ key: "₹10 + ₹3", marks: "1 M" }, { key: "Total ₹13", marks: "1 M" }]
      },
      {
        category: "Change Calculation",
        q: "Tina gives a ₹10 note to buy a packet of biscuits that costs ₹8. How much change does the shopkeeper give her back?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Money given = ₹10<br>• Cost of biscuits = ₹8<br>• Change = ₹10 - ₹8 = <strong>₹2</strong>.",
        marks: 2,
        rubric: [{ key: "₹10 - ₹8 = ₹2", marks: "2 M" }]
      },
      {
        category: "Currency Symbol",
        q: "What is the official currency symbol of India? Draw it.",
        ans: "<strong>Answer:</strong><br>The official currency symbol of India is <strong>₹ (Indian Rupee)</strong>. It was designed by Udaya Kumar Dharmalingam.",
        marks: 1,
        rubric: [{ key: "Symbol ₹ correctly drawn/named", marks: "1 M" }]
      },
      {
        category: "Different Ways to Pay ₹10",
        q: "Show two different ways to pay ₹10 using coins.",
        ans: "<strong>Answer:</strong><br>• Way 1: One single ₹10 coin.<br>• Way 2: Two ₹5 coins (₹5 + ₹5 = ₹10).<br>• Way 3: Five ₹2 coins (2 + 2 + 2 + 2 + 2 = ₹10).",
        marks: 2,
        rubric: [{ key: "Two valid methods provided", marks: "2 M" }]
      },
      {
        category: "Mental Math • Notes",
        q: "How many ₹20 notes make ₹100?",
        ans: "<strong>Answer:</strong><br>20 + 20 + 20 + 20 + 20 = 100.<br>It takes <strong>five ₹20 notes</strong> to make ₹100 (5 × ₹20 = ₹100).",
        marks: 2,
        rubric: [{ key: "Five ₹20 notes", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mm13",
    num: 13,
    unit: "Unit 8: Review & Problem Solving",
    title: "How Many",
    subtitle: "Comprehensive Counting, Story Problems & Number Sense Review",
    concepts: [
      "Consolidating counting of objects and writing numerals.",
      "Solving multi-step addition and subtraction story problems.",
      "Synthesizing place value concepts across numbers 1 to 100."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f8fafc" rx="10"/><circle cx="60" cy="50" r="16" fill="#6366f1"/><circle cx="100" cy="50" r="16" fill="#6366f1"/><circle cx="140" cy="50" r="16" fill="#6366f1"/><circle cx="180" cy="50" r="16" fill="#6366f1"/><text x="120" y="90" font-size="11" font-weight="700" fill="#4338ca" text-anchor="middle">Count and Write</text><rect x="240" y="30" width="100" height="50" fill="#4f46e5" rx="6"/><text x="290" y="60" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">Tens &amp; Ones</text><text x="420" y="50" font-size="14" font-weight="800" fill="#312e81">Story Sums</text><text x="420" y="75" font-size="12" font-weight="700" fill="#4338ca">Mastery: 1 to 100</text></svg>`,
    cbq: {
      title: "The School Garden Harvest Festival",
      text: "Grade 1 children gathered 24 radishes, 18 carrots, and 10 turnip roots from the class organic patch.",
      question: "Write 24 in tens and ones. Which vegetable was harvested the most, and how many carrots and radishes were there altogether?",
      answer: "1. 24 = <strong>2 Tens and 4 Ones</strong>.<br>2. <strong>Radishes (24)</strong> were harvested the most.<br>3. Total carrots and radishes = 18 + 24 = <strong>42 vegetables</strong>.",
      rubric: "1 M for 2 tens 4 ones + 1 M for radishes most + 1 M for sum 42"
    },
    questions: [
      {
        category: "Counting • Place Value Review",
        q: "Look at 3 bundles of 10 pencils and 6 loose pencils. How many pencils are there altogether? Write in tens and ones.",
        ans: "<strong>Answer:</strong><br>• 3 bundles = 3 Tens (30)<br>• 6 loose = 6 Ones (6)<br>• Total = <strong>36 pencils</strong> (3 Tens + 6 Ones).",
        marks: 2,
        rubric: [{ key: "36 pencils", marks: "1 M" }, { key: "3 Tens and 6 Ones", marks: "1 M" }]
      },
      {
        category: "Addition Story Sum",
        q: "In an orchard, there are 13 guava trees and 6 lemon trees. How many fruit trees are there in all?",
        ans: "<strong>Calculation:</strong><br>• Guava trees = 13<br>• Lemon trees = 6<br>• Total trees = 13 + 6 = <strong>19 trees</strong>.",
        marks: 2,
        rubric: [{ key: "13 + 6 statement", marks: "1 M" }, { key: "19 trees", marks: "1 M" }]
      },
      {
        category: "Subtraction Story Sum",
        q: "A vendor had 20 coconuts. He sold 8 coconuts by noon. How many coconuts were left with him?",
        ans: "<strong>Calculation:</strong><br>• Total coconuts = 20<br>• Coconuts sold = 8<br>• Coconuts left = 20 - 8 = <strong>12 coconuts</strong>.",
        marks: 2,
        rubric: [{ key: "20 - 8 statement", marks: "1 M" }, { key: "12 coconuts", marks: "1 M" }]
      },
      {
        category: "Number Name to Numeral",
        q: "Write the numeral for: Forty-seven.",
        ans: "<strong>Answer:</strong><br>Forty-seven = <strong>47</strong>.",
        marks: 1,
        rubric: [{ key: "47", marks: "1 M" }]
      },
      {
        category: "Comparison • Smallest to Largest",
        q: "Arrange these numbers from smallest to largest: 34, 12, 45, 23.",
        ans: "<strong>Answer:</strong><br>Smallest to largest (Ascending order):<br><strong>12, 23, 34, 45</strong>.",
        marks: 2,
        rubric: [{ key: "Correct ascending order", marks: "2 M" }]
      },
      {
        category: "Mental Math • Tens",
        q: "What is 10 more than 30? What is 10 less than 30?",
        ans: "<strong>Answer:</strong><br>• 10 more than 30 is <strong>40</strong> (30 + 10 = 40).<br>• 10 less than 30 is <strong>20</strong> (30 - 10 = 20).",
        marks: 2,
        rubric: [{ key: "40", marks: "1 M" }, { key: "20", marks: "1 M" }]
      }
    ]
  }
];

// Write to files
fs.writeFileSync(
  path.join(targetDir, 'joyfulMathsData.js'),
  `// scripts/data-c1-maths/joyfulMathsData.js\n// Official NCERT Class 1 Joyful Mathematics Complete 100% Dataset (NEP 2020 / NCF-FS)\n\nconst joyfulMathsChapters = ${JSON.stringify(joyfulMathsChapters, null, 2)};\n\nmodule.exports = { joyfulMathsChapters };\n`,
  'utf8'
);
console.log(`✓ Created joyfulMathsData.js (${joyfulMathsChapters.length} chapters, ${joyfulMathsChapters.reduce((acc, c) => acc + c.questions.length, 0)} questions)`);

fs.writeFileSync(
  path.join(targetDir, 'mathMagicData.js'),
  `// scripts/data-c1-maths/mathMagicData.js\n// Official NCERT Class 1 Math-Magic Book 1 Complete 100% Dataset (Classic CBSE)\n\nconst mathMagicChapters = ${JSON.stringify(mathMagicChapters, null, 2)};\n\nmodule.exports = { mathMagicChapters };\n`,
  'utf8'
);
console.log(`✓ Created mathMagicData.js (${mathMagicChapters.length} chapters, ${mathMagicChapters.reduce((acc, c) => acc + c.questions.length, 0)} questions)`);
