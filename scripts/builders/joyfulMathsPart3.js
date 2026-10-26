// scripts/builders/joyfulMathsPart3.js
// Chapters 6, 7, 8 of Joyful Mathematics (Class 2 NCERT)

const joyfulMathsPart3 = [
  {
    id: "jm6", num: 6, unit: "Unit 3: Lines, Patterns & Measures",
    title: "Decoration for Festival",
    subtitle: "Repeating & Growing Patterns, Rangoli Symmetry & Border Tessellations",
    concepts: [
      "Identifying repeating design units in torans, rangoli, and fabric borders.",
      "Recognizing growing geometric and number patterns (e.g. 2, 4, 6...; 10, 20, 30...).",
      "Completing symmetrical Rangoli dot grids and alternating tile arrangements."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fffbeb" rx="10"/><circle cx="60" cy="60" r="18" fill="#f59e0b"/><polygon points="120,40 100,80 140,80" fill="#dc2626"/><circle cx="180" cy="60" r="18" fill="#f59e0b"/><polygon points="240,40 220,80 260,80" fill="#dc2626"/><circle cx="300" cy="60" r="18" fill="#f59e0b"/><polygon points="360,40 340,80 380,80" fill="#dc2626"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">Repeating Toran Pattern: Circle, Triangle, Circle, Triangle...</text></svg>`,
    cbq: {
      title: "Diwali Toran Stringing Task",
      text: "Simran strings a door toran using yellow marigolds and green mango leaves. She follows the rule: 2 leaves followed by 1 marigold.",
      question: "If her toran has 6 marigolds in total, how many mango leaves did Simran use? How many items are on the toran altogether?",
      answer: "1. For every 1 marigold, she uses 2 leaves.<br>2. For 6 marigolds: 6 × 2 = 12 mango leaves.<br>3. Total items on toran = 12 leaves + 6 marigolds = 18 items.",
      rubric: "1.5 M for leaves calculation (12) + 1.5 M for total items (18)"
    },
    questions: [
      {
        category: "Repeating Shape Patterns",
        q: "Look at the pattern: 🔴, 🔷, 🔴, 🔷, 🔴, __, __.<br>What comes in the next two blanks?",
        ans: "<strong>Answer:</strong><br>• The pattern alternates between red circle and blue diamond.<br>• Next two shapes: <strong>🔷 (Blue diamond)</strong> and <strong>🔴 (Red circle)</strong>.",
        marks: 2,
        rubric: [{ key: "Pattern rule identified", marks: "1 M" }, { key: "Both shapes correct", marks: "1 M" }]
      },
      {
        category: "Growing Shape Patterns",
        q: "Observe the growing pattern:<br>Step 1: 1 square (🟩)<br>Step 2: 2 squares (🟩 🟩)<br>Step 3: 3 squares (🟩 🟩 🟩)<br>How many squares will be in Step 5? What is the growing rule?",
        ans: "<strong>Answer:</strong><br>• Growing rule: Add 1 square at each step.<br>• Step 4 = 4 squares.<br>• Step 5 = <strong>5 squares</strong>.",
        marks: 2,
        rubric: [{ key: "Growing rule stated (+1 each step)", marks: "1 M" }, { key: "Step 5 has 5 squares", marks: "1 M" }]
      },
      {
        category: "Number Patterns • Adding 2",
        q: "Complete the growing number pattern: 3, 5, 7, 9, __, __, 15.",
        ans: "<strong>Answer:</strong><br>• Rule: Add 2 to each number (consecutive odd numbers).<br>• 9 + 2 = <strong>11</strong><br>• 11 + 2 = <strong>13</strong><br>• The missing numbers are <strong>11 and 13</strong>.",
        marks: 2,
        rubric: [{ key: "Rule identified (+2)", marks: "1 M" }, { key: "11 and 13 correct", marks: "1 M" }]
      },
      {
        category: "Number Patterns • Adding 5",
        q: "Complete the skip sequence: 10, 15, 20, __, __, 35, __.",
        ans: "<strong>Answer:</strong><br>• Rule: Adding 5 each step.<br>• Series: 10, 15, 20, <strong>25</strong>, <strong>30</strong>, 35, <strong>40</strong>.",
        marks: 2,
        rubric: [{ key: "25, 30, and 40 filled correctly", marks: "2 M" }]
      },
      {
        category: "Decreasing Number Patterns",
        q: "Complete the countdown pattern: 80, 70, 60, __, __, 30, __.",
        ans: "<strong>Answer:</strong><br>• Rule: Subtracting 10 each step.<br>• Series: 80, 70, 60, <strong>50</strong>, <strong>40</strong>, 30, <strong>20</strong>.",
        marks: 2,
        rubric: [{ key: "Rule: minus 10", marks: "1 M" }, { key: "50, 40, 20 correct", marks: "1 M" }]
      },
      {
        category: "Letter Patterns",
        q: "Complete the letter series: AA, BB, CC, __, __, FF.",
        ans: "<strong>Answer:</strong><br>• Rule: Doubling each English alphabet letter in alphabetical order.<br>• Missing pairs are <strong>DD</strong> and <strong>EE</strong>.",
        marks: 2,
        rubric: [{ key: "DD and EE correct", marks: "2 M" }]
      },
      {
        category: "Letter and Number Patterns",
        q: "Find the next two terms: A1, B2, C3, D4, __, __.",
        ans: "<strong>Answer:</strong><br>• Rule: Next alphabet letter paired with next counting number.<br>• Next two terms: <strong>E5</strong> and <strong>F6</strong>.",
        marks: 2,
        rubric: [{ key: "E5 and F6 correct", marks: "2 M" }]
      },
      {
        category: "Arrow Direction Patterns",
        q: "Complete the rotating arrow pattern: ⬆ (Up), ➡ (Right), ⬇ (Down), ⬅ (Left), ⬆ (Up), __, __.",
        ans: "<strong>Answer:</strong><br>• Rule: 90° clockwise rotation.<br>• Next two arrows: <strong>➡ (Right)</strong> and <strong>⬇ (Down)</strong>.",
        marks: 2,
        rubric: [{ key: "Clockwise turn rule", marks: "1 M" }, { key: "Right and Down arrows", marks: "1 M" }]
      },
      {
        category: "Rangoli Dot Grid Symmetry",
        q: "In a 4-by-4 dot rangoli grid, if you draw a curved petal on the left side, what must you do on the right side to keep it symmetrical?",
        ans: "<strong>Answer:</strong><br>• To make it symmetrical, you must draw an <strong>identical curved petal mirrored on the right side</strong> at the exact same distance from the center line.",
        marks: 2,
        rubric: [{ key: "Mirror image concept", marks: "1 M" }, { key: "Same distance from center line", marks: "1 M" }]
      },
      {
        category: "Spot the Mistake",
        q: "Find the mistake in this pattern: 2, 4, 6, 9, 10, 12. Which number is wrong and what should it be?",
        ans: "<strong>Answer:</strong><br>• The pattern is counting by 2s (even numbers).<br>• The number <strong>9 is wrong</strong>.<br>• It should be <strong>8</strong> (because 6 + 2 = 8).",
        marks: 2,
        rubric: [{ key: "Identified 9 as wrong", marks: "1 M" }, { key: "Correct replacement: 8", marks: "1 M" }]
      },
      {
        category: "Floor Tiling Tessellation",
        q: "Why can square floor tiles cover a rectangular hall completely without leaving empty gaps, while round circular tiles cannot?",
        ans: "<strong>Answer:</strong><br>• Squares have <strong>straight edges and 90° corners</strong> that fit snugly side-by-side without any empty spaces.<br>• Circles have curved rims, so when placed together, they always leave <strong>gaps (holes)</strong> between them.",
        marks: 2,
        rubric: [{ key: "Straight edges fit seamlessly", marks: "1 M" }, { key: "Curved rims leave gaps", marks: "1 M" }]
      },
      {
        category: "Alternating Color Pattern",
        q: "A strip of 10 diyas is painted in alternating colors: Gold, Silver, Gold, Silver...<br>(a) What color is the 7th diya?<br>(b) What color is the 10th diya?",
        ans: "<strong>Answer:</strong><br>• Odd positions (1st, 3rd, 5th, 7th, 9th) are <strong>Gold</strong>.<br>• Even positions (2nd, 4th, 6th, 8th, 10th) are <strong>Silver</strong>.<br>(a) The 7th diya is <strong>Gold</strong>.<br>(b) The 10th diya is <strong>Silver</strong>.",
        marks: 2,
        rubric: [{ key: "7th is Gold", marks: "1 M" }, { key: "10th is Silver", marks: "1 M" }]
      },
      {
        category: "Number Tower Pattern",
        q: "Look at the pattern of adding consecutive numbers:<br>1 + 2 = 3<br>2 + 3 = 5<br>3 + 4 = 7<br>What is 4 + 5? What is 5 + 6? What pattern do the answers make?",
        ans: "<strong>Answer:</strong><br>• 4 + 5 = <strong>9</strong><br>• 5 + 6 = <strong>11</strong><br>• The answers (3, 5, 7, 9, 11) form a pattern of <strong>odd numbers growing by 2 each time</strong>.",
        marks: 3,
        rubric: [{ key: "4+5=9", marks: "1 M" }, { key: "5+6=11", marks: "1 M" }, { key: "Pattern: Odd numbers increasing by 2", marks: "1 M" }]
      },
      {
        category: "Saree Border Pattern",
        q: "A border pattern has: 2 leaves pointing UP, then 2 leaves pointing DOWN, then 2 leaves pointing UP. What comes next?",
        ans: "<strong>Answer:</strong><br>Next comes <strong>2 leaves pointing DOWN</strong> (following the repeating pair rule).",
        marks: 1,
        rubric: [{ key: "2 leaves pointing Down", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Nature Patterns",
        q: "Name two animals that have beautiful natural patterns on their bodies.",
        ans: "<strong>Answer:</strong><br>1. <strong>Zebra:</strong> Black and white alternating stripes.<br>2. <strong>Tiger:</strong> Orange body with dark black stripes.<br>*(Also: Leopard with circular rosettes, Peacock with eye-spot feathers)*.",
        marks: 2,
        rubric: [{ key: "Two animals with pattern described", marks: "2 M" }]
      },
      {
        category: "Pattern Riddle",
        q: "I start at 1. Every step I double: 1, 2, 4, 8, __. What is my next number?",
        ans: "<strong>Answer:</strong><br>• Double of 8 is 8 + 8 = <strong>16</strong>.<br>• The next number is 16.",
        marks: 1,
        rubric: [{ key: "16 correct", marks: "1 M" }]
      },
      {
        category: "Creative Pattern Task",
        q: "Create a repeating 3-element pattern using shapes (Circle, Triangle, Star). Write out 9 terms.",
        ans: "<strong>Answer:</strong><br>• Repeating unit: Circle (⭕), Triangle (🔺), Star (⭐).<br>• 9 terms: <strong>⭕, 🔺, ⭐, ⭕, 🔺, ⭐, ⭕, 🔺, ⭐</strong>.",
        marks: 2,
        rubric: [{ key: "Repeating unit of 3 elements", marks: "1 M" }, { key: "9 complete terms correctly written", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm7", num: 7, unit: "Unit 3: Lines, Patterns & Measures",
    title: "Rani's Gift",
    subtitle: "Non-Standard Units of Length: Handspan, Footsteps, Cubit & Comparisons",
    concepts: [
      "Measuring length using non-standard body units: finger-widths, handspans, footsteps, cubits.",
      "Understanding why non-standard units vary between children and adults.",
      "Comparing lengths and heights using words: longer/shorter, taller/shorter, thicker/thinner."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><line x1="60" y1="60" x2="440" y2="60" stroke="#2563eb" stroke-width="4"/><circle cx="60" cy="60" r="6" fill="#1e40af"/><circle cx="155" cy="60" r="6" fill="#1e40af"/><circle cx="250" cy="60" r="6" fill="#1e40af"/><circle cx="345" cy="60" r="6" fill="#1e40af"/><circle cx="440" cy="60" r="6" fill="#1e40af"/><text x="250" y="95" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">Desk Length = 4 Handspans Long</text></svg>`,
    cbq: {
      title: "Measuring the Classroom Carpet",
      text: "Aman measures the class carpet with his footsteps and counts 16 footsteps. His teacher measures the exact same carpet with her footsteps and counts only 10 footsteps.",
      question: "Why did the teacher get fewer footsteps than Aman? Did the carpet shrink?",
      answer: "1. The carpet did not shrink; its length stayed exactly the same.<br>2. The teacher's footsteps are much longer than Aman's footsteps. Therefore, fewer adult footsteps are needed to cover the same distance.",
      rubric: "1.5 M for confirming carpet didn't change + 1.5 M for footstep size comparison"
    },
    questions: [
      {
        category: "Body Units of Measurement",
        q: "Name 4 parts of your body that you can use to measure length without a ruler.",
        ans: "<strong>Answer:</strong><br>1. <strong>Handspan</strong> (from tip of thumb to tip of little finger stretched)<br>2. <strong>Fingers / Finger-width</strong><br>3. <strong>Footstep / Pace</strong><br>4. <strong>Cubit</strong> (from elbow to tip of middle finger).",
        marks: 2,
        rubric: [{ key: "All 4 valid body units named (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Comparing Lengths • Handspan",
        q: "Rohan measures his math textbook and finds it is 2 handspans long. His teacher measures the same book and says it is only 1 handspan long. Explain why.",
        ans: "<strong>Answer:</strong><br>• The teacher's hand is an adult hand, which is <strong>much bigger and broader</strong> than child Rohan's hand.<br>• Since the teacher's handspan is twice as long, she needs only 1 handspan while Rohan needs 2.",
        marks: 2,
        rubric: [{ key: "Adult hand is larger explained", marks: "1 M" }, { key: "Inverse relationship with unit count", marks: "1 M" }]
      },
      {
        category: "Selecting Appropriate Unit",
        q: "Which body unit would be best to measure:<br>(a) The length of an eraser?<br>(b) The length of your classroom floor?<br>(c) The length of your study table?",
        ans: "<strong>Answers:</strong><br>(a) Eraser: <strong>Finger-widths</strong> (very small object).<br>(b) Classroom floor: <strong>Footsteps / Paces</strong> (long distance).<br>(c) Study table: <strong>Handspan or Cubit</strong> (medium object).",
        marks: 3,
        rubric: [{ key: "All 3 appropriate units matched (1 M each)", marks: "3 M" }]
      },
      {
        category: "Taller vs Shorter",
        q: "Look at a giraffe and a rabbit:<br>(a) Who is taller?<br>(b) Who is shorter?",
        ans: "<strong>Answer:</strong><br>(a) The <strong>Giraffe is taller</strong>.<br>(b) The <strong>Rabbit is shorter</strong>.",
        marks: 1,
        rubric: [{ key: "Both identified correctly", marks: "1 M" }]
      },
      {
        category: "Thicker vs Thinner",
        q: "Compare the trunk of a banyan tree and the stem of a rose plant. Which one is thicker and which is thinner?",
        ans: "<strong>Answer:</strong><br>• The trunk of the banyan tree is <strong>thicker</strong>.<br>• The stem of the rose plant is <strong>thinner</strong>.",
        marks: 1,
        rubric: [{ key: "Thicker and thinner identified", marks: "1 M" }]
      },
      {
        category: "Ordering by Length",
        q: "Arrange from shortest to longest:<br>[ Cricket bat, Safety pin, Toothbrush, Walking stick ].",
        ans: "<strong>Answer:</strong><br>1. <strong>Safety pin</strong> (shortest)<br>2. <strong>Toothbrush</strong><br>3. <strong>Cricket bat</strong><br>4. <strong>Walking stick</strong> (longest).",
        marks: 2,
        rubric: [{ key: "Correct ascending length order", marks: "2 M" }]
      },
      {
        category: "Let Us Do • Pencil Measurement",
        q: "A notebook is measured using new wooden pencils. It is exactly 3 pencils long. If each pencil is 6 fingers long, how many fingers long is the notebook?",
        ans: "<strong>Calculation:</strong><br>• Notebook = 3 pencils<br>• Each pencil = 6 fingers<br>• Total length = 6 + 6 + 6 = <strong>18 fingers long</strong> (or 3 × 6 = 18).",
        marks: 2,
        rubric: [{ key: "Addition/multiplication setup", marks: "1 M" }, { key: "Total = 18 fingers", marks: "1 M" }]
      },
      {
        category: "Measuring Distance between Objects",
        q: "Two trees stand in a park. Suman takes 15 footsteps to walk between them. Her father takes 10 footsteps. Whose footsteps are longer?",
        ans: "<strong>Answer:</strong><br>• Her <strong>father's footsteps are longer</strong> because he covers the exact same distance in fewer steps (10 < 15).",
        marks: 2,
        rubric: [{ key: "Father's steps are longer", marks: "1 M" }, { key: "Fewer steps for same distance explained", marks: "1 M" }]
      },
      {
        category: "Cubit Definition",
        q: "What is a 'Cubit'? Which people traditionally used cubits to measure cloth and flower garlands?",
        ans: "<strong>Answer:</strong><br>• A <strong>cubit</strong> is the length from a person's elbow to the tip of their outstretched middle finger.<br>• Cloth merchants and flower sellers (garland makers) traditionally used cubits (hath).",
        marks: 2,
        rubric: [{ key: "Elbow to middle fingertip defined", marks: "1 M" }, { key: "Garland/cloth sellers named", marks: "1 M" }]
      },
      {
        category: "Why We Need a Ruler",
        q: "If every student's handspan is different, why do we need standard instruments like rulers and measuring tapes?",
        ans: "<strong>Answer:</strong><br>• Standard rulers give the <strong>exact same measurement</strong> no matter who measures.<br>• This avoids confusion and disputes when buying clothes, building houses, or cutting wood.",
        marks: 2,
        rubric: [{ key: "Uniform measurement for everyone", marks: "1 M" }, { key: "Fairness and accuracy in trade", marks: "1 M" }]
      },
      {
        category: "True or False • Measurement",
        q: "Write True or False:<br>(a) A handspan is measured with all fingers tightly closed into a fist.<br>(b) Your desk length measured in your handspans will always be a whole number.<br>(c) A puppy's footstep is shorter than a horse's stride.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong> (Handspan requires fingers stretched wide apart).<br>(b) <strong>False</strong> (It can be 3 handspans and 2 fingers).<br>(c) <strong>True</strong> (Puppy is much smaller than horse).",
        marks: 3,
        rubric: [{ key: "All 3 correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Estimating Length",
        q: "Guess the length of your pencil box: Is it more than 1 handspan or less than 1 handspan? Measure and check.",
        ans: "<strong>Answer:</strong><br>• For most primary students, a pencil box is roughly <strong>1 handspan long</strong> (or slightly more than 1 handspan, about 1 handspan and 2 fingers).",
        marks: 1,
        rubric: [{ key: "Reasonable estimation stated", marks: "1 M" }]
      },
      {
        category: "Word Problem • Ribbon Measurement",
        q: "Pooja has a blue ribbon that is 8 handspans long. She cuts off 3 handspans for her doll's dress. How many handspans of ribbon are left?",
        ans: "<strong>Calculation:</strong><br>• Original length = 8 handspans<br>• Ribbon cut off = 3 handspans<br>• Remaining ribbon = 8 - 3 = <strong>5 handspans</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction setup (8 - 3)", marks: "1 M" }, { key: "Answer: 5 handspans", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Animal Race Steps",
        q: "In an animal race, a frog takes 8 leaps to reach the pond, while a deer takes 2 long strides. Who has the longer step?",
        ans: "<strong>Answer:</strong><br>The <strong>Deer has the longer step</strong> because 2 deer strides equal the distance of 8 frog leaps.",
        marks: 2,
        rubric: [{ key: "Deer has longer step", marks: "1 M" }, { key: "Explanation based on fewer steps", marks: "1 M" }]
      },
      {
        category: "Practical Activity • Blackboard Height",
        q: "How can two children measure the height of the classroom door without a ladder?",
        ans: "<strong>Answer:</strong><br>• They can hold a long stick or rope against the door, mark the top height with chalk, and then lay the rope on the floor to count handspans or cubits.",
        marks: 2,
        rubric: [{ key: "Rope/stick transfer method explained", marks: "2 M" }]
      },
      {
        category: "Comparing Three Objects",
        q: "A tree is taller than a lamp post. The lamp post is taller than a car. Which of the three is the tallest, and which is the shortest?",
        ans: "<strong>Answer:</strong><br>• <strong>Tallest:</strong> The Tree.<br>• <strong>Shortest:</strong> The Car.",
        marks: 2,
        rubric: [{ key: "Tree tallest", marks: "1 M" }, { key: "Car shortest", marks: "1 M" }]
      },
      {
        category: "Measurement Riddle",
        q: "I stretch from your thumb to your pinky finger spread wide. What unit of length am I?",
        ans: "<strong>Answer:</strong><br>I am a <strong>Handspan</strong> (बित्ता).",
        marks: 1,
        rubric: [{ key: "Identified Handspan", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm8", num: 8, unit: "Unit 4: Sharing & Multiplication Readiness",
    title: "Grouping and Sharing",
    subtitle: "Equal Distribution, Visual Arrays, Repeated Addition & Multiplication Readiness",
    concepts: [
      "Distributing collections equally among a given number of groups.",
      "Connecting repeated addition of equal groups to multiplication (e.g. 4 + 4 + 4 = 3 × 4 = 12).",
      "Finding totals from everyday arrays: animal legs, bicycle wheels, flower petals."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0fdf4" rx="10"/><rect x="60" y="30" width="100" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><circle cx="85" cy="50" r="10" fill="#15803d"/><circle cx="110" cy="50" r="10" fill="#15803d"/><circle cx="135" cy="50" r="10" fill="#15803d"/><circle cx="110" cy="72" r="10" fill="#15803d"/><rect x="200" y="30" width="100" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><circle cx="225" cy="50" r="10" fill="#15803d"/><circle cx="250" cy="50" r="10" fill="#15803d"/><circle cx="275" cy="50" r="10" fill="#15803d"/><circle cx="250" cy="72" r="10" fill="#15803d"/><text x="250" y="110" font-family="sans-serif" font-size="12" font-weight="700" fill="#166534" text-anchor="middle">2 Groups of 4 Laddoos = 4 + 4 = 8 Laddoos</text></svg>`,
    cbq: {
      title: "Equal Sharing of Gulab Jamuns",
      text: "Grandmother prepares 18 fresh gulab jamuns for 3 grandchildren: Rohit, Tanu, and Yash. She wants to distribute them equally with none left over.",
      question: "How many gulab jamuns does each grandchild receive? If 2 more friends arrive (making 5 children), can 18 jamuns be divided equally without remainders?",
      answer: "1. 18 shared equally among 3 children = 18 ÷ 3 = 6 gulab jamuns each.<br>2. For 5 children: 18 ÷ 5 = 3 jamuns each with 3 jamuns left over. Therefore, 18 cannot be divided equally among 5 children without remainder.",
      rubric: "1.5 M for 6 jamuns calculation + 1.5 M for 5-children remainder analysis"
    },
    questions: [
      {
        category: "Equal Sharing • Basic Division",
        q: "Share 15 bananas equally among 3 monkeys. Draw or write how many bananas each monkey gets.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total bananas = 15<br>• Monkeys = 3<br>• Give 1 by 1 until finished: 15 ÷ 3 = <strong>5 bananas each</strong>.<br>• Check: 5 + 5 + 5 = 15.",
        marks: 2,
        rubric: [{ key: "Equal sharing method", marks: "1 M" }, { key: "Answer: 5 bananas each", marks: "1 M" }]
      },
      {
        category: "Repeated Addition to Multiplication",
        q: "Write the repeated addition sentence and multiplication sentence for:<br>4 plates with 3 cookies on each plate.",
        ans: "<strong>Solution:</strong><br>• Repeated addition: 3 + 3 + 3 + 3 = <strong>12 cookies</strong>.<br>• Multiplication sentence: 4 × 3 = <strong>12 cookies</strong> (4 groups of 3).",
        marks: 2,
        rubric: [{ key: "Addition: 3+3+3+3=12", marks: "1 M" }, { key: "Multiplication: 4×3=12", marks: "1 M" }]
      },
      {
        category: "Animal Legs Array",
        q: "There are 5 cows grazing in a meadow. Each cow has 4 legs. How many cow legs are there altogether?",
        ans: "<strong>Calculation:</strong><br>• Number of cows = 5<br>• Legs per cow = 4<br>• Repeated addition: 4 + 4 + 4 + 4 + 4 = <strong>20 legs</strong>.<br>• (5 × 4 = 20 legs).",
        marks: 2,
        rubric: [{ key: "Repeated addition setup", marks: "1 M" }, { key: "Final answer: 20 legs", marks: "1 M" }]
      },
      {
        category: "Bicycle Wheels Array",
        q: "There are 6 bicycles parked outside a school. Each bicycle has 2 wheels. What is the total number of wheels?",
        ans: "<strong>Calculation:</strong><br>• Number of bicycles = 6<br>• Wheels per bicycle = 2<br>• 2 + 2 + 2 + 2 + 2 + 2 = <strong>12 wheels</strong>.<br>• (6 × 2 = 12 wheels).",
        marks: 2,
        rubric: [{ key: "Skip counting by 2", marks: "1 M" }, { key: "Answer: 12 wheels", marks: "1 M" }]
      },
      {
        category: "Tricycle Wheels Array",
        q: "A toy shop has 4 tricycles. Each tricycle has 3 wheels. How many wheels in all?",
        ans: "<strong>Calculation:</strong><br>• 4 tricycles × 3 wheels = 3 + 3 + 3 + 3 = <strong>12 wheels</strong>.",
        marks: 2,
        rubric: [{ key: "Working shown", marks: "1 M" }, { key: "Answer: 12 wheels", marks: "1 M" }]
      },
      {
        category: "Equal Sharing • Remainder Concept",
        q: "Mother has 14 apples. She divides them equally between Rahul and Ananya. Does she have any apples left over?",
        ans: "<strong>Solution:</strong><br>• Total apples = 14<br>• Number of children = 2<br>• 14 ÷ 2 = <strong>7 apples each</strong>.<br>• Since 14 is an even number, <strong>0 apples are left over</strong> (no remainder).",
        marks: 2,
        rubric: [{ key: "7 apples each", marks: "1 M" }, { key: "0 left over confirmed", marks: "1 M" }]
      },
      {
        category: "Equal Sharing with Leftover",
        q: "Divide 11 marbles equally between 2 friends. How many marbles does each friend get, and how many marbles are left over?",
        ans: "<strong>Solution:</strong><br>• 11 = 5 + 5 + 1.<br>• Each friend gets <strong>5 marbles</strong>.<br>• <strong>1 marble is left over</strong>.",
        marks: 2,
        rubric: [{ key: "5 marbles each", marks: "1 M" }, { key: "1 marble remainder", marks: "1 M" }]
      },
      {
        category: "Array Multiplication • Rows and Columns",
        q: "An egg tray has 3 rows of eggs. Each row contains 6 eggs. How many eggs are in the tray?",
        ans: "<strong>Calculation:</strong><br>• Rows = 3<br>• Eggs per row = 6<br>• Total eggs = 6 + 6 + 6 = <strong>18 eggs</strong> (3 × 6 = 18).",
        marks: 2,
        rubric: [{ key: "6 + 6 + 6 setup", marks: "1 M" }, { key: "Answer: 18 eggs", marks: "1 M" }]
      },
      {
        category: "Flower Petals",
        q: "A sunflower has 5 petals in a small drawing. If there are 4 sunflowers, how many petals are there in total?",
        ans: "<strong>Calculation:</strong><br>• 4 sunflowers × 5 petals = 5 + 5 + 5 + 5 = <strong>20 petals</strong>.",
        marks: 2,
        rubric: [{ key: "Skip count by 5", marks: "1 M" }, { key: "Answer: 20 petals", marks: "1 M" }]
      },
      {
        category: "Grouping into Pouches",
        q: "Deepak has 24 buttons. He puts 4 buttons in each packet. How many packets can he prepare?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total buttons = 24<br>• Buttons per packet = 4<br>• Skip counting by 4: 4, 8, 12, 16, 20, 24 (6 packets).<br>• Deepak can prepare <strong>6 packets</strong>.",
        marks: 2,
        rubric: [{ key: "Division/Skip counting by 4", marks: "1 M" }, { key: "Answer: 6 packets", marks: "1 M" }]
      },
      {
        category: "Number Line Jumps • Frog Jumps",
        q: "A frog takes jumps of 3 steps each along a number line starting at 0. After 5 jumps, which number does it reach?",
        ans: "<strong>Solution:</strong><br>• Jump 1: 3<br>• Jump 2: 6<br>• Jump 3: 9<br>• Jump 4: 12<br>• Jump 5: <strong>15</strong>.<br>• The frog reaches the number <strong>15</strong> (5 × 3 = 15).",
        marks: 2,
        rubric: [{ key: "Jump steps shown", marks: "1 M" }, { key: "Final number: 15", marks: "1 M" }]
      },
      {
        category: "Comparing Equal Groups",
        q: "Which gives more chocolates:<br>(a) 3 packets of 5 chocolates each, or<br>(b) 2 packets of 8 chocolates each?",
        ans: "<strong>Calculation:</strong><br>• Option (a) = 3 × 5 = <strong>15 chocolates</strong>.<br>• Option (b) = 2 × 8 = <strong>16 chocolates</strong>.<br>• Since 16 > 15, <strong>Option (b) gives more chocolates</strong>.",
        marks: 3,
        rubric: [{ key: "Option A = 15", marks: "1 M" }, { key: "Option B = 16", marks: "1 M" }, { key: "Conclusion: Option B gives more", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Commutative Property",
        q: "Does 2 groups of 6 give the same total as 6 groups of 2? Show by calculating both.",
        ans: "<strong>Answer:</strong><br>• 2 groups of 6 = 6 + 6 = <strong>12</strong>.<br>• 6 groups of 2 = 2 + 2 + 2 + 2 + 2 + 2 = <strong>12</strong>.<br>• <strong>Yes</strong>, both give the exact same total: 2 × 6 = 6 × 2 = 12.",
        marks: 2,
        rubric: [{ key: "Both sums calculated (12)", marks: "1 M" }, { key: "Yes, verified identical", marks: "1 M" }]
      },
      {
        category: "Word Problem • Sharing Crayons",
        q: "A teacher has 20 crayons. She shares them equally among 4 art tables. How many crayons does each table get?",
        ans: "<strong>Solution:</strong><br>• Total crayons = 20<br>• Tables = 4<br>• 20 ÷ 4 = <strong>5 crayons per table</strong>.",
        marks: 2,
        rubric: [{ key: "Division setup (20 ÷ 4)", marks: "1 M" }, { key: "Answer: 5 crayons", marks: "1 M" }]
      },
      {
        category: "True or False • Grouping Rules",
        q: "Write True or False:<br>(a) Sharing 10 items equally among 5 people gives 2 items each.<br>(b) 4 + 4 + 4 is the same as 3 × 4.<br>(c) 7 items can be divided equally between 2 people with no leftover.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong> (10 ÷ 5 = 2).<br>(b) <strong>True</strong> (both equal 12).<br>(c) <strong>False</strong> (7 is odd, 1 item is left over).",
        marks: 3,
        rubric: [{ key: "All 3 correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Grouping Riddle",
        q: "We are 4 cats sitting in a porch. How many total paws and ears do we have together?",
        ans: "<strong>Calculation:</strong><br>• Paws: 4 cats × 4 paws = <strong>16 paws</strong>.<br>• Ears: 4 cats × 2 ears = <strong>8 ears</strong>.<br>• Total paws and ears = 16 + 8 = <strong>24 altogether</strong>.",
        marks: 2,
        rubric: [{ key: "16 paws", marks: "1 M" }, { key: "8 ears (total 24)", marks: "1 M" }]
      },
      {
        category: "Mental Math • Zero in Sharing",
        q: "If there are 0 apples in a bowl and 3 children share it, how many apples does each child get?",
        ans: "<strong>Answer:</strong><br>• 0 shared among 3 = 0 ÷ 3 = <strong>0 apples each</strong>.<br>• You cannot get apples from an empty bowl!",
        marks: 1,
        rubric: [{ key: "Answer: 0 apples", marks: "1 M" }]
      },
      {
        category: "Creative Math Array",
        q: "Draw an array with 2 rows of 5 stars (⭐). Write the repeated addition and total.",
        ans: "<strong>Solution:</strong><br>• Row 1: ⭐ ⭐ ⭐ ⭐ ⭐ (5)<br>• Row 2: ⭐ ⭐ ⭐ ⭐ ⭐ (5)<br>• Repeated addition: 5 + 5 = <strong>10 stars</strong> (2 × 5 = 10).",
        marks: 2,
        rubric: [{ key: "2 rows of 5 represented", marks: "1 M" }, { key: "5 + 5 = 10 stars", marks: "1 M" }]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { joyfulMathsPart3 };
}
