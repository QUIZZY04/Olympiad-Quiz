// scripts/builders/joyful-maths-part3.js
// Exact Literal NCERT Questions for Joyful Mathematics Chapters 5, 6, 7, 8

function makeQ(category, q, ans, marks, rubric) {
  return { category, q, ans, marks, rubric };
}

const joyfulPart3 = [
  // -------------------------------------------------------------------------
  // CHAPTER 5: How Many? (Addition & Subtraction within 10)
  // -------------------------------------------------------------------------
  {
    id: "jm5",
    num: 5,
    unit: "Unit 2: Number Operations",
    title: "How Many?",
    subtitle: "Addition & Subtraction within 10, Word Problems & Story Contexts",
    concepts: [
      "Combining two collections to find 'How many altogether?' (Addition).",
      "Taking away items from a group to find 'How many left?' (Subtraction).",
      "Using fingers, dot cards, and pictures for addition facts.",
      "Properties of Zero in addition and subtraction (adding 0 gives same number).",
      "Solving simple everyday addition and subtraction story problems."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="70" cy="50" r="14" fill="#3b82f6"/><circle cx="105" cy="50" r="14" fill="#3b82f6"/><circle cx="140" cy="50" r="14" fill="#3b82f6"/><text x="175" y="56" font-size="20" fill="#1e3a8a" font-weight="bold">+</text><circle cx="210" cy="50" r="14" fill="#10b981"/><circle cx="245" cy="50" r="14" fill="#10b981"/><text x="280" y="56" font-size="20" fill="#1e3a8a" font-weight="bold">=</text><circle cx="320" cy="50" r="12" fill="#3b82f6"/><circle cx="348" cy="50" r="12" fill="#3b82f6"/><circle cx="376" cy="50" r="12" fill="#3b82f6"/><circle cx="404" cy="50" r="12" fill="#10b981"/><circle cx="432" cy="50" r="12" fill="#10b981"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">3 + 2 = 5 (Combining Groups)</text></svg>`,
    cbq: {
      title: "Frogs in the Pond Case Study",
      text: "Four green frogs were sitting on a lotus leaf in the pond. Three more frogs leaped onto the leaf. Soon after, two frogs jumped back into the cool water.",
      question: "How many frogs were on the leaf after the three leaped in? How many frogs remained on the leaf after two jumped into the water?",
      answer: "1. After three frogs joined: 4 + 3 = <strong>7 frogs on the leaf</strong>.<br>2. After two jumped away: 7 - 2 = <strong>5 frogs remaining</strong>.",
      rubric: "1.5 M for 4 + 3 = 7 frogs + 1.5 M for 7 - 2 = 5 frogs"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Adding Flowers",
        "Rohan has 3 red roses in his hand. Maya gives him 2 yellow roses. How many roses does Rohan have altogether?",
        "<strong>Step-by-Step Solution:</strong><br>1. Red roses = 3<br>2. Yellow roses = 2<br>3. Total roses = 3 + 2 = <strong>5 roses altogether</strong>.",
        2,
        [{ key: "Addition expression 3 + 2", marks: "1 M" }, { key: "Answer: 5 roses", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Taking Away Balloons",
        "A balloon seller held 6 colorful balloons. 2 balloons popped with a bang. How many balloons are left?",
        "<strong>Step-by-Step Solution:</strong><br>1. Initial balloons = 6<br>2. Popped balloons = 2<br>3. Balloons left = 6 - 2 = <strong>4 balloons</strong>.",
        2,
        [{ key: "Subtraction expression 6 - 2", marks: "1 M" }, { key: "Answer: 4 balloons", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Frogs on Water Lilies",
        "Look at the pond picture: 5 frogs are sitting on water lily pads. 2 more frogs jump out of the water onto the pads. How many frogs in all?",
        "<strong>Step-by-Step Solution:</strong><br>• Frogs on pads = 5<br>• New frogs joining = 2<br>• Total frogs = 5 + 2 = <strong>7 frogs</strong>.",
        2,
        [{ key: "5 + 2 = 7", marks: "1 M" }, { key: "Correct total with unit", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Adding Zero",
        "A fruit plate has 4 sweet bananas. No more bananas were added (0 bananas added). How many bananas are on the plate?",
        "<strong>Step-by-Step Solution:</strong><br>• 4 + 0 = <strong>4 bananas</strong>.<br>• Adding zero to any number leaves the number unchanged.",
        2,
        [{ key: "4 + 0 = 4", marks: "1 M" }, { key: "Property of zero explained", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtracting Zero",
        "Ankit had 5 toy cars. He did not give any car to his brother (gave 0 cars). How many toy cars does Ankit still have?",
        "<strong>Step-by-Step Solution:</strong><br>• 5 - 0 = <strong>5 toy cars</strong>.<br>• Subtracting zero does not decrease the collection.",
        2,
        [{ key: "5 - 0 = 5", marks: "1 M" }, { key: "Property of zero in subtraction", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Addition Facts of 6",
        "Write three different addition pairs that equal 6.",
        "<strong>Step-by-Step Solution:</strong><br>• 1 + 5 = 6<br>• 2 + 4 = 6<br>• 3 + 3 = 6 (also 0 + 6 = 6).",
        2,
        [{ key: "Three valid pairs provided", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Sparrows on a Wire",
        "7 sparrows were resting on an electric wire. 3 sparrows flew away to catch insects. How many sparrows remained on the wire?",
        "<strong>Step-by-Step Solution:</strong><br>• Initial sparrows = 7<br>• Sparrows that flew away = 3<br>• Sparrows left = 7 - 3 = <strong>4 sparrows</strong>.",
        2,
        [{ key: "7 - 3 = 4", marks: "1 M" }, { key: "Answer: 4 sparrows", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Number Line Addition",
        "Start at number 4 on the number line. Take 3 hops forward. Where do you land?",
        "<strong>Step-by-Step Solution:</strong><br>• Starting point = 4<br>• Jump 3 forward: 4 → 5 → 6 → 7.<br>• You land on <strong>7</strong> (4 + 3 = 7).",
        2,
        [{ key: "Shows 3 forward hops", marks: "1 M" }, { key: "Lands on 7", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Number Line Subtraction",
        "Start at number 8 on the number line. Take 3 hops backward. Where do you land?",
        "<strong>Step-by-Step Solution:</strong><br>• Starting point = 8<br>• Jump 3 backward: 8 → 7 → 6 → 5.<br>• You land on <strong>5</strong> (8 - 3 = 5).",
        2,
        [{ key: "Shows 3 backward hops", marks: "1 M" }, { key: "Lands on 5", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Match the Sum",
        "Match each expression to its result: (a) 4 + 4, (b) 2 + 7, (c) 9 - 4, (d) 8 - 6.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 4 + 4 = <strong>8</strong><br>• (b) 2 + 7 = <strong>9</strong><br>• (c) 9 - 4 = <strong>5</strong><br>• (d) 8 - 6 = <strong>2</strong>",
        2,
        [{ key: "All 4 correctly matched", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Pencils in a Box",
        "Neha has 5 sharpened pencils. Her mother gives her 4 more sharpened pencils. How many pencils does Neha have in her box now?",
        "<strong>Step-by-Step Solution:</strong><br>• Pencils with Neha = 5<br>• Pencils given by mother = 4<br>• Total pencils = 5 + 4 = <strong>9 pencils</strong>.",
        2,
        [{ key: "5 + 4 = 9", marks: "1 M" }, { key: "Answer with unit: 9 pencils", marks: "1 M" }]
      ),
      makeQ(
        "Word Problem • Apples on a Tree",
        "There were 8 red apples hanging on a branch. The wind blew and 5 apples fell to the ground. How many apples are still on the branch?",
        "<strong>Step-by-Step Solution:</strong><br>• Apples on branch = 8<br>• Apples fallen = 5<br>• Apples left on branch = 8 - 5 = <strong>3 apples</strong>.",
        2,
        [{ key: "8 - 5 = 3", marks: "1 M" }, { key: "Answer with unit: 3 apples", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Domino Dots Adding",
        "A domino tile has 3 dots on one side and 3 dots on the other side. What is the total sum of dots?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 3 = <strong>6 dots</strong> (doubles fact).",
        2,
        [{ key: "3 + 3 = 6", marks: "1 M" }, { key: "Correct total", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtracting Everything",
        "Geeta had 6 candies. She gave all 6 candies to her friends. How many candies does she have left?",
        "<strong>Step-by-Step Solution:</strong><br>• 6 - 6 = <strong>0 candies</strong>.<br>• When you subtract a number from itself, the result is always zero.",
        2,
        [{ key: "6 - 6 = 0", marks: "1 M" }, { key: "Explanation of zero remainder", marks: "1 M" }]
      ),
      makeQ(
        "Mental Math • Missing Addend",
        "What number must you add to 6 to make 9? Write the missing number: 6 + __ = 9.",
        "<strong>Step-by-Step Solution:</strong><br>• Count forward from 6: 7, 8, 9 (3 counts).<br>• 6 + <strong>3</strong> = 9.",
        2,
        [{ key: "Identified 3", marks: "1 M" }, { key: "Workings shown", marks: "1 M" }]
      ),
      makeQ(
        "Mental Math • Missing Subtrahend",
        "Fill the blank: 8 - __ = 5.",
        "<strong>Step-by-Step Solution:</strong><br>• 8 - 5 = 3.<br>• Therefore, 8 - <strong>3</strong> = 5.",
        2,
        [{ key: "Identified 3", marks: "1 M" }, { key: "Correct subtraction balance", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • True or False",
        "State True or False: 3 + 4 gives the same answer as 4 + 3.",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 4 = 7 and 4 + 3 = 7.<br>• <strong>True.</strong> Changing the order of numbers in addition does not change the sum.",
        2,
        [{ key: "True with correct sums (7 = 7)", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Finger Addition",
        "Raise 4 fingers on your left hand and 4 fingers on your right hand. Count all upright fingers.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 fingers + 4 fingers = <strong>8 fingers</strong>.",
        2,
        [{ key: "4 + 4 = 8", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Making 10 from Two Groups",
        "A fruit basket has 7 oranges. How many more oranges must be placed in the basket so that it contains 10 oranges?",
        "<strong>Step-by-Step Solution:</strong><br>• Target = 10 oranges<br>• Existing = 7 oranges<br>• Needed = 10 - 7 = <strong>3 oranges</strong>.",
        2,
        [{ key: "10 - 7 = 3", marks: "1 M" }, { key: "Answer: 3 oranges", marks: "1 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: Vegetable Farm (Addition & Subtraction within 20)
  // -------------------------------------------------------------------------
  {
    id: "jm6",
    num: 6,
    unit: "Unit 2: Number Operations",
    title: "Vegetable Farm",
    subtitle: "Addition & Subtraction within 20, Double Ten-Frames & Word Problems",
    concepts: [
      "Extending addition and subtraction to teen numbers (10 to 20).",
      "Using double ten-frames to bridge 10 and add single digits.",
      "Partitioning numbers: 14 = 10 + 4, 17 = 10 + 7.",
      "Real-life harvest and market word problems with vegetables."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0fdf4" rx="10"/><rect x="50" y="30" width="160" height="50" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" rx="4"/><text x="130" y="60" font-size="12" fill="#15803d" font-weight="bold" text-anchor="middle">Full Frame: 10</text><rect x="230" y="30" width="160" height="50" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" rx="4"/><circle cx="250" cy="55" r="7" fill="#16a34a"/><circle cx="275" cy="55" r="7" fill="#16a34a"/><circle cx="300" cy="55" r="7" fill="#16a34a"/><circle cx="325" cy="55" r="7" fill="#16a34a"/><text x="360" y="60" font-size="12" fill="#15803d" font-weight="bold">4</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle">10 + 4 = 14 Vegetables Harvested</text></svg>`,
    cbq: {
      title: "Vegetable Basket Distribution Case Study",
      text: "Farmer Kalu harvests 12 orange carrots and 6 red radishes from his organic garden beds. He puts them into a large jute sack.",
      question: "How many total vegetables did Farmer Kalu harvest? If he sells 5 carrots at the morning market, how many carrots remain?",
      answer: "1. Total vegetables harvested = 12 + 6 = <strong>18 vegetables</strong>.<br>2. Carrots remaining = 12 - 5 = <strong>7 carrots left</strong>.",
      rubric: "1.5 M for 12 + 6 = 18 vegetables + 1.5 M for 12 - 5 = 7 carrots"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Carrot Harvest Addition",
        "Rani pulls 9 carrots from the first garden patch and 4 carrots from the second patch. How many carrots did Rani pull altogether?",
        "<strong>Step-by-Step Solution:</strong><br>1. First patch = 9 carrots<br>2. Second patch = 4 carrots<br>3. 9 + 4 = 9 + 1 + 3 = 10 + 3 = <strong>13 carrots</strong>.",
        2,
        [{ key: "Making 10 strategy (9+1+3)", marks: "1 M" }, { key: "Answer: 13 carrots", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Pumpkin Subtraction",
        "There were 15 pumpkins lying in the farm shed. 4 pumpkins were loaded onto a wooden cart. How many pumpkins remain in the shed?",
        "<strong>Step-by-Step Solution:</strong><br>1. Total pumpkins = 15<br>2. Loaded pumpkins = 4<br>3. Pumpkins remaining = 15 - 4 = <strong>11 pumpkins</strong>.",
        2,
        [{ key: "15 - 4 = 11", marks: "1 M" }, { key: "Answer with unit: 11 pumpkins", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Double Ten-Frame Counting",
        "One ten-frame is completely full (10 dots), and the second ten-frame has 6 dots. What total number do they represent?",
        "<strong>Step-by-Step Solution:</strong><br>• Full ten-frame = 10<br>• Second frame = 6<br>• Total = 10 + 6 = <strong>16</strong> (Sixteen).",
        2,
        [{ key: "10 + 6 = 16", marks: "1 M" }, { key: "Number name Sixteen", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Adding to 10",
        "Solve:<br>(a) 10 + 3 = __<br>(b) 10 + 7 = __<br>(c) 10 + 9 = __<br>(d) 10 + 5 = __",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 10 + 3 = <strong>13</strong><br>• (b) 10 + 7 = <strong>17</strong><br>• (c) 10 + 9 = <strong>19</strong><br>• (d) 10 + 5 = <strong>15</strong>",
        2,
        [{ key: "All 4 sums evaluated correctly", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtracting from Teen Numbers",
        "Solve:<br>(a) 14 - 4 = __<br>(b) 18 - 8 = __<br>(c) 17 - 10 = __<br>(d) 12 - 2 = __",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 14 - 4 = <strong>10</strong><br>• (b) 18 - 8 = <strong>10</strong><br>• (c) 17 - 10 = <strong>7</strong><br>• (d) 12 - 2 = <strong>10</strong>",
        2,
        [{ key: "All 4 differences evaluated correctly", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Tomatoes in Baskets",
        "Simran's basket has 11 red tomatoes. Her brother adds 5 green tomatoes to the basket. How many tomatoes are in the basket now?",
        "<strong>Step-by-Step Solution:</strong><br>• Red tomatoes = 11<br>• Green tomatoes = 5<br>• Total = 11 + 5 = <strong>16 tomatoes</strong>.",
        2,
        [{ key: "11 + 5 = 16", marks: "1 M" }, { key: "Answer: 16 tomatoes", marks: "1 M" }]
      ),
      makeQ(
        "Word Problem • Cucumbers Sold",
        "Farmer Hari had 16 cucumbers. He sold 6 cucumbers to a customer. How many cucumbers does he have left?",
        "<strong>Step-by-Step Solution:</strong><br>• Total cucumbers = 16<br>• Cucumbers sold = 6<br>• Cucumbers left = 16 - 6 = <strong>10 cucumbers</strong>.",
        2,
        [{ key: "16 - 6 = 10", marks: "1 M" }, { key: "Answer: 10 cucumbers", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Number Line Jump within 20",
        "Start at 12 on the number line. Jump forward by 5 steps. Where do you land?",
        "<strong>Step-by-Step Solution:</strong><br>• Starting point = 12<br>• Steps forward = 5<br>• 12 + 5 = <strong>17</strong>.",
        2,
        [{ key: "12 + 5 = 17", marks: "1 M" }, { key: "Correct destination on number line", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Number Line Backward Jump",
        "Start at 19 on the number line. Jump backward by 4 steps. Where do you land?",
        "<strong>Step-by-Step Solution:</strong><br>• Starting point = 19<br>• Steps backward = 4<br>• 19 - 4 = <strong>15</strong>.",
        2,
        [{ key: "19 - 4 = 15", marks: "1 M" }, { key: "Correct destination on number line", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Adding Doubles",
        "Find the double sum: (a) 5 + 5 = __, (b) 6 + 6 = __, (c) 7 + 7 = __.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 5 + 5 = <strong>10</strong><br>• (b) 6 + 6 = <strong>12</strong><br>• (c) 7 + 7 = <strong>14</strong>",
        3,
        [{ key: "5+5 = 10", marks: "1 M" }, { key: "6+6 = 12", marks: "1 M" }, { key: "7+7 = 14", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Making 10 to Add",
        "How do you add 8 + 5 using the 'Make 10' strategy?",
        "<strong>Step-by-Step Solution:</strong><br>1. 8 needs 2 to make 10.<br>2. Break 5 into 2 + 3.<br>3. 8 + 2 = 10.<br>4. 10 + 3 = <strong>13</strong>.",
        2,
        [{ key: "Break 5 into 2 + 3", marks: "1 M" }, { key: "10 + 3 = 13", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtracting from 20",
        "A crate had 20 cabbages. The cook used 8 cabbages to make dinner. How many cabbages remain in the crate?",
        "<strong>Step-by-Step Solution:</strong><br>• Initial cabbages = 20<br>• Cabbages used = 8<br>• Remaining = 20 - 8 = <strong>12 cabbages</strong>.",
        2,
        [{ key: "20 - 8 = 12", marks: "1 M" }, { key: "Answer with unit: 12 cabbages", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Tens and Ones Deconstruction",
        "Break these numbers into Tens and Ones: (a) 15, (b) 19, (c) 11.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 15 = <strong>1 Ten and 5 Ones</strong><br>• (b) 19 = <strong>1 Ten and 9 Ones</strong><br>• (c) 11 = <strong>1 Ten and 1 One</strong>",
        2,
        [{ key: "All 3 broken down correctly", marks: "2 M" }]
      ),
      makeQ(
        "Mental Math • Missing Number in Equation",
        "Fill the blank: 13 + __ = 18.",
        "<strong>Step-by-Step Solution:</strong><br>• 18 - 13 = 5.<br>• 13 + <strong>5</strong> = 18.",
        2,
        [{ key: "Identified 5", marks: "2 M" }]
      ),
      makeQ(
        "Mental Math • Subtraction Balance",
        "Fill the blank: 17 - __ = 11.",
        "<strong>Step-by-Step Solution:</strong><br>• 17 - 11 = 6.<br>• 17 - <strong>6</strong> = 11.",
        2,
        [{ key: "Identified 6", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Match Expression to Answer",
        "Match: (1) 9 + 9, (2) 15 - 3, (3) 8 + 6.<br>Answers: [12, 14, 18].",
        "<strong>Step-by-Step Solution:</strong><br>• (1) 9 + 9 = <strong>18</strong><br>• (2) 15 - 3 = <strong>12</strong><br>• (3) 8 + 6 = <strong>14</strong>",
        2,
        [{ key: "All 3 correctly matched", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Radishes and Turnips",
        "Grandmother harvested 7 white radishes and 8 purple turnips. How many root vegetables did she harvest in all?",
        "<strong>Step-by-Step Solution:</strong><br>• Radishes = 7<br>• Turnips = 8<br>• Total = 7 + 8 = <strong>15 root vegetables</strong>.",
        2,
        [{ key: "7 + 8 = 15", marks: "1 M" }, { key: "Answer: 15 vegetables", marks: "1 M" }]
      ),
      makeQ(
        "Competency Review • Comparing Differences",
        "Which gives a greater answer: (16 - 4) or (11 + 2)?",
        "<strong>Step-by-Step Solution:</strong><br>• 16 - 4 = 12.<br>• 11 + 2 = 13.<br>• Comparing: 13 > 12.<br>• <strong>(11 + 2) gives the greater answer</strong>.",
        2,
        [{ key: "Calculated 12 and 13", marks: "1 M" }, { key: "(11 + 2) is greater", marks: "1 M" }]
      )
    ]
  }
];

module.exports = { joyfulPart3 };
