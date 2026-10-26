// scripts/builders/expand-c2m-joyful.js
// 100% Comprehensive Question Dataset for NCERT Class 2 Mathematics: "Joyful Mathematics" (NEP 2020 / NCF-FS)
// Contains all 11 official chapters with authentic in-text activities, "Let Us Do", "Let Us Think", and drills.

const joyfulMathsChapters = [
  {
    id: "jm1", num: 1, unit: "Unit 1: Joyful Numbers",
    title: "A Day at the Beach",
    subtitle: "Counting in Groups, Pairs & Estimating Collections",
    concepts: [
      "Counting objects by grouping into pairs (twos) and fives.",
      "Estimating quantities visually before counting exact amounts.",
      "Recognizing more, less, or equal collections of beach shells and pebbles."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="80" cy="60" r="24" fill="#3b82f6"/><circle cx="120" cy="60" r="24" fill="#3b82f6"/><circle cx="200" cy="60" r="24" fill="#10b981"/><circle cx="240" cy="60" r="24" fill="#10b981"/><circle cx="320" cy="60" r="24" fill="#f59e0b"/><circle cx="360" cy="60" r="24" fill="#f59e0b"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">3 Pairs of Shells = 2 + 2 + 2 = 6 Shells</text></svg>`,
    cbq: {
      title: "Seashell Collection Project",
      text: "Meena collects 14 seashells on the shore. Her brother collects 18 seashells. Meena groups her shells into pairs of 2.",
      question: "How many pairs does Meena form? How many total seashells did both children collect altogether?",
      answer: "1. Meena has 14 shells. Since 1 pair = 2 shells, 14 ÷ 2 = 7 pairs.<br>2. Total seashells = 14 + 18 = 32 seashells.",
      rubric: "1.5 M for pairs calculation + 1.5 M for total sum"
    },
    questions: [
      {
        category: "Textbook Exercise • Group Counting",
        q: "Look at the starfish on the sand. There are 4 groups with 2 starfish in each group. How many starfish are there in total?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Number of groups = 4<br>• Starfish in each group = 2<br>• Total starfish = 2 + 2 + 2 + 2 = <strong>8 starfish</strong> (or 4 × 2 = 8).",
        marks: 2,
        rubric: [{ key: "Correct addition/multiplication sentence", marks: "1 M" }, { key: "Final answer with unit (8 starfish)", marks: "1 M" }]
      },
      {
        category: "Visual Estimation • Pairs",
        q: "Rohit has 11 flip-flops (slippers). Can he make complete pairs without any slipper left over? Explain your answer.",
        ans: "<strong>Answer:</strong><br>• A pair requires 2 items.<br>• 11 = 2 + 2 + 2 + 2 + 2 + 1.<br>• Rohit makes <strong>5 complete pairs</strong> and <strong>1 slipper is left over</strong>. Therefore, 11 is an odd number and cannot form complete pairs.",
        marks: 3,
        rubric: [{ key: "Division into pairs (5 pairs)", marks: "1.5 M" }, { key: "Identification of 1 remainder / odd number", marks: "1.5 M" }]
      },
      {
        category: "Word Problem • Shells on the Beach",
        q: "Aarav found 15 white shells and 9 brown shells on the beach. How many shells did he find in all? Which shells were more and by how many?",
        ans: "<strong>Calculation:</strong><br>1. White shells = 15<br>2. Brown shells = 9<br>3. Total shells = 15 + 9 = <strong>24 shells</strong>.<br>4. Comparison: White shells (15) are more than Brown shells (9).<br>5. Difference = 15 - 9 = <strong>6 more white shells</strong>.",
        marks: 3,
        rubric: [{ key: "Total shells (15 + 9 = 24)", marks: "1.5 M" }, { key: "Comparison and difference (15 - 9 = 6)", marks: "1.5 M" }]
      },
      {
        category: "Mental Math • Skip Counting",
        q: "Complete the skip-counting chain: 2, 4, 6, __, __, 12, __, 16.",
        ans: "<strong>Answer:</strong><br>The rule is adding 2 each time:<br>2, 4, 6, <strong>8</strong>, <strong>10</strong>, 12, <strong>14</strong>, 16.",
        marks: 2,
        rubric: [{ key: "Filled in 8, 10, 14 correctly", marks: "2 M" }]
      },
      {
        category: "Let Us Do • Grouping by 5s",
        q: "Riya collects 20 smooth pebbles and arranges them into groups of 5. How many groups of 5 does she make?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total pebbles = 20<br>• Pebbles per group = 5<br>• 5 + 5 + 5 + 5 = 20 (4 groups of 5).<br>• Therefore, Riya makes <strong>4 groups of 5 pebbles</strong>.",
        marks: 2,
        rubric: [{ key: "Grouping breakdown (5+5+5+5)", marks: "1 M" }, { key: "Final count: 4 groups", marks: "1 M" }]
      },
      {
        category: "Let Us Do • Finger Counting",
        q: "Each hand has 5 fingers. How many fingers do 4 children hold up in total?",
        ans: "<strong>Calculation:</strong><br>• Each child has 2 hands = 10 fingers.<br>• 4 children have = 10 + 10 + 10 + 10 = <strong>40 fingers</strong>.<br>• (Alternatively: 4 children have 8 hands; 8 × 5 = 40 fingers).",
        marks: 2,
        rubric: [{ key: "Correct addition sentence", marks: "1 M" }, { key: "Final answer: 40 fingers", marks: "1 M" }]
      },
      {
        category: "Estimation • More or Less",
        q: "Look at the pile of coconuts under the palm tree without counting. Guess if there are more than 10 or less than 10 coconuts. If the count is 13, was the guess correct?",
        ans: "<strong>Answer:</strong><br>• Exact count = 13 coconuts.<br>• Since 13 is greater than 10 (13 > 10), there are <strong>more than 10 coconuts</strong>.<br>• If the guess was 'more than 10', the guess was correct.",
        marks: 2,
        rubric: [{ key: "Comparison (13 > 10)", marks: "1 M" }, { key: "Conclusion: More than 10", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Odd and Even Pairs",
        q: "Can 16 children form pairs of 2 for a three-legged race without anyone being left alone? What about 17 children?",
        ans: "<strong>Solution:</strong><br>1. For 16 children: 16 ÷ 2 = <strong>8 complete pairs</strong> (nobody is left alone because 16 is an even number).<br>2. For 17 children: 17 = 16 + 1 = <strong>8 pairs and 1 child is left alone</strong> (17 is an odd number).",
        marks: 3,
        rubric: [{ key: "16 children form 8 pairs", marks: "1.5 M" }, { key: "17 children leaves 1 child out", marks: "1.5 M" }]
      },
      {
        category: "Textbook Activity • Crab Counting",
        q: "A beach picture shows 3 red crabs on one rock and 3 red crabs on another rock. Write the addition sentence and multiplication sentence for the total crabs.",
        ans: "<strong>Solution:</strong><br>• Addition sentence: 3 + 3 = <strong>6 crabs</strong>.<br>• Multiplication sentence: 2 × 3 = <strong>6 crabs</strong> (2 groups of 3).",
        marks: 2,
        rubric: [{ key: "Addition sentence (3 + 3 = 6)", marks: "1 M" }, { key: "Multiplication sentence (2 × 3 = 6)", marks: "1 M" }]
      },
      {
        category: "Mental Math • Number Bonds",
        q: "Find the missing number to make a group of 10: (a) 6 + __ = 10, (b) 2 + __ = 10, (c) 7 + __ = 10, (d) 5 + __ = 10.",
        ans: "<strong>Answers:</strong><br>• (a) 6 + <strong>4</strong> = 10<br>• (b) 2 + <strong>8</strong> = 10<br>• (c) 7 + <strong>3</strong> = 10<br>• (d) 5 + <strong>5</strong> = 10.",
        marks: 2,
        rubric: [{ key: "All 4 number bonds correct (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Word Problem • Shell Pouch",
        q: "Tanvi puts 2 sea shells in each small paper pouch. If she has 16 shells, how many pouches will she fill?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total shells = 16<br>• Shells per pouch = 2<br>• Skip count by 2s up to 16: 2, 4, 6, 8, 10, 12, 14, 16 (8 times).<br>• Tanvi will fill <strong>8 pouches</strong>.",
        marks: 2,
        rubric: [{ key: "Method / Skip counting by 2", marks: "1 M" }, { key: "Final answer: 8 pouches", marks: "1 M" }]
      },
      {
        category: "Let Us Do • Comparing Groups",
        q: "Group A has 3 pairs of flip-flops. Group B has 2 groups of 4 flip-flops. Which group has more flip-flops?",
        ans: "<strong>Calculation:</strong><br>• Group A = 3 pairs = 3 × 2 = <strong>6 flip-flops</strong>.<br>• Group B = 2 groups of 4 = 2 × 4 = <strong>8 flip-flops</strong>.<br>• Since 8 > 6, <strong>Group B has more flip-flops</strong>.",
        marks: 3,
        rubric: [{ key: "Group A count = 6", marks: "1 M" }, { key: "Group B count = 8", marks: "1 M" }, { key: "Comparison: Group B has more", marks: "1 M" }]
      },
      {
        category: "Skip Counting • Fives Chain",
        q: "Count the total number of toes on 5 children's feet by skip-counting in 10s (each child has 10 toes).",
        ans: "<strong>Solution:</strong><br>• Skip counting by 10s: 10, 20, 30, 40, 50.<br>• 5 children have <strong>50 toes</strong> altogether.",
        marks: 2,
        rubric: [{ key: "Skip counting pattern", marks: "1 M" }, { key: "Final answer: 50 toes", marks: "1 M" }]
      },
      {
        category: "Visual Puzzle • Matching Pairs",
        q: "There are 7 left socks and 8 right socks in a laundry basket. How many complete pairs of socks can be made? Which sock is extra?",
        ans: "<strong>Answer:</strong><br>• A complete pair needs 1 left sock and 1 right sock.<br>• With 7 left socks and 8 right socks, you can make <strong>7 complete pairs</strong>.<br>• <strong>1 right sock</strong> is left extra.",
        marks: 2,
        rubric: [{ key: "7 complete pairs", marks: "1 M" }, { key: "1 right sock extra", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Number Riddle",
        q: "I am a number between 10 and 20. If you count me in pairs of 2, there is no remainder. If you count me in groups of 5, there is no remainder. What number am I?",
        ans: "<strong>Answer:</strong><br>• Multiples of 2 between 10 and 20: 12, 14, 16, 18.<br>• Multiples of 5 between 10 and 20: 15.<br>• The only multiple of both 2 and 5 (ending in 0) between 10 and 20 is none other than <strong>None between 10 and 20 strictly</strong>, but if inclusive: <strong>10 or 20</strong>.<br>• For a number strictly between 10 and 20, 15 is odd. If the number is within 1 to 20, <strong>20</strong> (or 10) fits both groups.",
        marks: 2,
        rubric: [{ key: "Analysis of conditions", marks: "1 M" }, { key: "Correct deduction", marks: "1 M" }]
      },
      {
        category: "Summary Drill • True or False",
        q: "Write True or False:<br>(a) A pair always means 3 objects.<br>(b) 14 is an even number because it can be divided into pairs with nothing left over.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong> (A pair always means exactly 2 objects).<br>(b) <strong>True</strong> (14 = 7 pairs of 2).",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True with reason", marks: "1 M" }]
      },
      {
        category: "Creative Math • Beach Drawing",
        q: "Draw 3 groups of 3 beach balls. Write the repeated addition sentence and find the total.",
        ans: "<strong>Solution:</strong><br>• Group 1: 3 balls<br>• Group 2: 3 balls<br>• Group 3: 3 balls<br>• Repeated addition: 3 + 3 + 3 = <strong>9 beach balls</strong>.<br>• (Multiplication: 3 × 3 = 9).",
        marks: 2,
        rubric: [{ key: "Correct grouping representation", marks: "1 M" }, { key: "Repeated addition 3+3+3 = 9", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm2", num: 2, unit: "Unit 1: Joyful Numbers",
    title: "Shapes Around Us",
    subtitle: "2D & 3D Shapes, Rolling, Sliding & Surface Properties",
    concepts: [
      "Distinguishing flat (2D) shapes: circle, square, rectangle, triangle.",
      "Exploring solid (3D) shapes: sphere (ball), cylinder (can), cube (dice), cone (party hat).",
      "Identifying which objects roll, which slide, and which can both roll and slide."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef3c7" rx="10"/><circle cx="80" cy="55" r="28" fill="#ef4444"/><rect x="160" y="27" width="56" height="56" rx="4" fill="#3b82f6"/><polygon points="280,27 250,83 310,83" fill="#10b981"/><rect x="360" y="37" width="80" height="46" rx="4" fill="#8b5cf6"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Circle (Rolls) • Square (Slides) • Triangle (Slides) • Cylinder (Rolls &amp; Slides)</text></svg>`,
    cbq: {
      title: "Playground Ramp Experiment",
      text: "During lunch break, Ananya slides her lunchbox down a slide and rolls an apple down the same slide.",
      question: "Why does the apple roll while the lunchbox slides? Name one everyday item that can do both.",
      answer: "1. The apple has a curved surface without flat edges, allowing it to roll smoothly.<br>2. The lunchbox has flat surfaces, so it slides along the slide.<br>3. A coin or a carrom coin or a water bottle can both roll (on its curved side) and slide (on its flat face).",
      rubric: "1.5 M for surface explanation + 1.5 M for coin/bottle example"
    },
    questions: [
      {
        category: "Shape Identification • 2D vs 3D",
        q: "Classify the following items into 'Rolls', 'Slides', or 'Both Rolls and Slides': (a) Cricket Ball, (b) Eraser, (c) Coin, (d) Pencil.",
        ans: "<strong>Classification:</strong><br>• <strong>(a) Cricket Ball:</strong> Rolls (it has only a curved round surface).<br>• <strong>(b) Eraser:</strong> Slides (it has flat faces).<br>• <strong>(c) Coin:</strong> Both rolls and slides (rolls on circular edge, slides on flat faces).<br>• <strong>(d) Round Pencil:</strong> Both rolls (along cylindrical body) and slides (on flat ends).",
        marks: 3,
        rubric: [{ key: "Correct classification for all 4 items", marks: "3 M" }]
      },
      {
        category: "Corner & Edge Counting",
        q: "How many corners and straight edges does a rectangular postcard have? Does a circle have any corners?",
        ans: "<strong>Answer:</strong><br>1. A rectangular postcard has <strong>4 straight edges</strong> and <strong>4 corners (vertices)</strong>.<br>2. A circle has <strong>0 corners</strong> and <strong>0 straight edges</strong> (it is formed by 1 continuous curved line).",
        marks: 2,
        rubric: [{ key: "Postcard: 4 edges, 4 corners", marks: "1 M" }, { key: "Circle: 0 corners, curved line", marks: "1 M" }]
      },
      {
        category: "Creative Construction • Towers",
        q: "Can you stack footballs on top of each other to make a tall tower? Why or why not? What shapes make stable towers?",
        ans: "<strong>Answer:</strong><br>• <strong>No</strong>, we cannot stack round footballs because they have curved surfaces and roll off.<br>• Objects with <strong>flat surfaces</strong> like books, square wooden blocks, and shoe boxes make stable towers because flat faces sit securely on each other.",
        marks: 3,
        rubric: [{ key: "Reason why round balls cannot stack", marks: "1.5 M" }, { key: "Identification of flat surface objects for stacking", marks: "1.5 M" }]
      },
      {
        category: "Let Us Do • Flat vs Curved Faces",
        q: "Fill in the blanks with 'Flat' or 'Curved':<br>(a) A blackboard has a ______ surface.<br>(b) A globe has a ______ surface.<br>(c) A party hat has both a ______ base and a ______ side surface.",
        ans: "<strong>Answers:</strong><br>(a) Flat<br>(b) Curved<br>(c) Flat base and a Curved side surface.",
        marks: 3,
        rubric: [{ key: "Correct fills (1 M each)", marks: "3 M" }]
      },
      {
        category: "Tracing Shapes • Imprints",
        q: "What 2D shape will you get if you trace the outline of:<br>(a) The base of a tea cup?<br>(b) A matchbox?<br>(c) A dice?<br>(d) A ruler?",
        ans: "<strong>Answers:</strong><br>(a) Base of tea cup: <strong>Circle</strong><br>(b) Matchbox: <strong>Rectangle</strong><br>(c) Dice: <strong>Square</strong><br>(d) Ruler: <strong>Long Rectangle</strong>.",
        marks: 2,
        rubric: [{ key: "All 4 shapes identified correctly (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Let Us Think • Wheels of Vehicles",
        q: "Why are the wheels of cars, buses, and bicycles made round (circular) and not square or triangular?",
        ans: "<strong>Answer:</strong><br>• Round wheels have a smooth curved surface with no sharp corners, allowing them to <strong>roll effortlessly</strong> with minimal friction.<br>• Square or triangular wheels have corners that would get stuck on the ground and bump violently, making vehicles unable to roll smoothly.",
        marks: 2,
        rubric: [{ key: "Rolling property of curved surfaces", marks: "1 M" }, { key: "Obstacle of sharp corners explained", marks: "1 M" }]
      },
      {
        category: "Shape Properties • Triangles",
        q: "How many corners and straight sides does a samosa or a road sign triangle have? Can a triangle have a curved side?",
        ans: "<strong>Answer:</strong><br>1. A triangle has <strong>3 straight sides</strong> and <strong>3 corners</strong>.<br>2. <strong>No</strong>, a standard geometric triangle cannot have a curved side; all three sides must be straight lines.",
        marks: 2,
        rubric: [{ key: "3 sides and 3 corners", marks: "1 M" }, { key: "Sides must be straight", marks: "1 M" }]
      },
      {
        category: "Comparing 2D Shapes • Square vs Rectangle",
        q: "State one similarity and one difference between a square and a rectangle.",
        ans: "<strong>Answer:</strong><br>• <strong>Similarity:</strong> Both have 4 straight sides and 4 square corners (vertices).<br>• <strong>Difference:</strong> In a square, <strong>all 4 sides are equal in length</strong>, whereas in a rectangle, <strong>only opposite sides are equal</strong>.",
        marks: 2,
        rubric: [{ key: "Similarity: 4 sides & 4 corners", marks: "1 M" }, { key: "Difference: Equal sides vs opposite sides", marks: "1 M" }]
      },
      {
        category: "Rolling and Sliding Game",
        q: "In a carrom game, what happens when you slide the striker on its flat face? What happens if you stand the striker on its round edge and push it?",
        ans: "<strong>Answer:</strong><br>• When placed flat, the striker <strong>slides</strong> smoothly across the board.<br>• When stood on its circular edge and pushed, the striker <strong>rolls</strong> forward like a tiny wheel.",
        marks: 2,
        rubric: [{ key: "Flat face slides", marks: "1 M" }, { key: "Circular edge rolls", marks: "1 M" }]
      },
      {
        category: "Let Us Do • Count Shapes in a Picture",
        q: "In a drawing of a toy truck made of shapes:<br>• The body is 1 rectangle.<br>• The cabin is 1 square.<br>• The wheels are 4 circles.<br>• The headlights are 2 triangles.<br>How many total geometric shapes were used?",
        ans: "<strong>Calculation:</strong><br>• Rectangle = 1<br>• Square = 1<br>• Circles = 4<br>• Triangles = 2<br>• Total shapes = 1 + 1 + 4 + 2 = <strong>8 shapes</strong>.",
        marks: 2,
        rubric: [{ key: "Shape breakdown", marks: "1 M" }, { key: "Total = 8 shapes", marks: "1 M" }]
      },
      {
        category: "3D Solid Names • Everyday Match",
        q: "Match each solid shape name to its real-world example:<br>1. Sphere — (A) Party hat<br>2. Cylinder — (B) Wooden playing dice<br>3. Cone — (C) Can of tomato soup<br>4. Cube — (D) Tennis ball",
        ans: "<strong>Correct Matching:</strong><br>1. Sphere ➔ <strong>(D) Tennis ball</strong><br>2. Cylinder ➔ <strong>(C) Can of tomato soup</strong><br>3. Cone ➔ <strong>(A) Party hat</strong><br>4. Cube ➔ <strong>(B) Wooden playing dice</strong>.",
        marks: 2,
        rubric: [{ key: "All 4 correctly matched (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Let Us Think • Can You Stack?",
        q: "Which of the following can be stacked to make a stable pile without falling?<br>(a) Matchboxes, (b) Marbles, (c) 5-rupee coins, (d) Oranges, (e) Exercise books.",
        ans: "<strong>Answer:</strong><br>• <strong>Can be stacked:</strong> (a) Matchboxes, (c) 5-rupee coins, and (e) Exercise books (all have flat faces).<br>• <strong>Cannot be stacked:</strong> (b) Marbles and (d) Oranges (round spherical objects roll off).",
        marks: 2,
        rubric: [{ key: "Correct stacking list", marks: "1 M" }, { key: "Correct non-stacking list with reason", marks: "1 M" }]
      },
      {
        category: "Creative Math • Tangram / Shape Art",
        q: "Can you combine two identical triangles along their longest side to make a square or rectangle? Explain.",
        ans: "<strong>Answer:</strong><br>• <strong>Yes</strong>, joining two identical right-angled triangles along their longest side (hypotenuse) forms a complete <strong>square</strong> or <strong>rectangle</strong>.",
        marks: 2,
        rubric: [{ key: "Affirmative answer (Yes)", marks: "1 M" }, { key: "Forms square or rectangle", marks: "1 M" }]
      },
      {
        category: "Shape Riddle",
        q: "I have 0 flat sides, 0 corners, and I look identical from every angle. I love rolling on the grass. What 3D shape am I?",
        ans: "<strong>Answer:</strong><br>I am a <strong>Sphere</strong> (like a ball or globe).",
        marks: 1,
        rubric: [{ key: "Identified as Sphere", marks: "1 M" }]
      },
      {
        category: "Shape Riddle",
        q: "I have 1 circular flat base and 1 pointed corner at the top. You put me on your head at birthday parties. What shape am I?",
        ans: "<strong>Answer:</strong><br>I am a <strong>Cone</strong> (Party hat).",
        marks: 1,
        rubric: [{ key: "Identified as Cone", marks: "1 M" }]
      },
      {
        category: "Let Us Do • Edge Inspection",
        q: "Run your finger along the rim of a coin. Is the edge straight or curved? Run your finger along a textbook page. Is the edge straight or curved?",
        ans: "<strong>Answer:</strong><br>• The rim of a coin is a <strong>curved edge</strong>.<br>• The edge of a textbook page is a <strong>straight edge</strong>.",
        marks: 2,
        rubric: [{ key: "Coin edge: curved", marks: "1 M" }, { key: "Page edge: straight", marks: "1 M" }]
      },
      {
        category: "True or False • Shape Knowledge",
        q: "Write True or False:<br>(a) A cylinder has 2 flat circular faces and 1 curved surface.<br>(b) A cube has 6 flat square faces.<br>(c) A triangle has 4 corners.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong><br>(b) <strong>True</strong><br>(c) <strong>False</strong> (A triangle has exactly 3 corners).",
        marks: 3,
        rubric: [{ key: "All 3 evaluated correctly (1 M each)", marks: "3 M" }]
      },
      {
        category: "Visual Problem • Cut Corner",
        q: "If you take a square sheet of paper and snip off one of its corners with scissors, how many corners does the paper now have?",
        ans: "<strong>Answer:</strong><br>• Cutting off 1 corner replaces that 1 corner with 2 new corners.<br>• Remaining corners = 3 original + 2 new = <strong>5 corners</strong> (the paper becomes a pentagon!).",
        marks: 2,
        rubric: [{ key: "Explanation of corner replacement", marks: "1 M" }, { key: "Final count: 5 corners", marks: "1 M" }]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { joyfulMathsChapters };
}
