// scripts/builders/joyful-maths-part4.js
// Exact Literal NCERT Questions for Joyful Mathematics Chapters 7, 8, 9, 10

function makeQ(category, q, ans, marks, rubric) {
  return { category, q, ans, marks, rubric };
}

const joyfulPart4 = [
  // -------------------------------------------------------------------------
  // CHAPTER 7: Lina's Family (Measurement)
  // -------------------------------------------------------------------------
  {
    id: "jm7",
    num: 7,
    unit: "Unit 3: Measurement & Patterns",
    title: "Lina's Family",
    subtitle: "Non-Standard Lengths, Handspans, Footsteps, Heavy vs Light",
    concepts: [
      "Measuring length using non-standard body units: handspan, fingers, and footsteps (paces).",
      "Understanding why non-standard units vary between children and adults.",
      "Comparing lengths: longer vs shorter, longest vs shortest.",
      "Comparing heights: taller vs shorter, tallest vs shortest.",
      "Comparing weights qualitatively: heavier vs lighter."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef2f2" rx="10"/><line x1="60" y1="60" x2="220" y2="60" stroke="#ef4444" stroke-width="4"/><circle cx="60" cy="60" r="5" fill="#991b1b"/><circle cx="220" cy="60" r="5" fill="#991b1b"/><text x="140" y="50" font-size="12" fill="#991b1b" font-weight="bold" text-anchor="middle">Longer Pencil (12 cm)</text><line x1="280" y1="60" x2="360" y2="60" stroke="#3b82f6" stroke-width="4"/><circle cx="280" cy="60" r="5" fill="#1e3a8a"/><circle cx="360" cy="60" r="5" fill="#1e3a8a"/><text x="320" y="50" font-size="12" fill="#1e3a8a" font-weight="bold" text-anchor="middle">Shorter (6 cm)</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#991b1b" text-anchor="middle">Measuring with Handspans &amp; Paces</text></svg>`,
    cbq: {
      title: "Measuring the Study Table Case Study",
      text: "Lina measures the length of her dining table using her handspan. She finds it is 10 handspans long. Her father measures the same table and finds it is only 6 handspans long.",
      question: "Why did Lina get 10 handspans while her father got only 6 handspans? Whose handspan is bigger?",
      answer: "1. Father's handspan is <strong>bigger</strong> because he is an adult.<br>2. Because father's handspan is bigger, fewer handspans (6) are needed to cover the same table.<br>3. Lina's hand is smaller, so she needed more handspans (10).",
      rubric: "1.5 M for father's handspan is bigger + 1.5 M for fewer spans needed"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Measuring with Handspan",
        "What is a 'handspan'? Measure the length of your mathematics textbook using your handspan. How many handspans long is it?",
        "<strong>Step-by-Step Solution:</strong><br>1. A handspan is the distance from the tip of the thumb to the tip of the little finger when the hand is stretched wide open.<br>2. When measured by a Class 1 student, the Joyful Mathematics book is approximately <strong>2 to 3 handspans long</strong>.",
        2,
        [{ key: "Definition of handspan", marks: "1 M" }, { key: "Measurement: ~2 to 3 handspans", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Longer and Shorter Pencils",
        "Look at two pencils: Pencil A has not been sharpened, and Pencil B is a small stub after many days of use. Which pencil is longer?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Pencil A is longer</strong> (new, unsharpened pencil).<br>• Pencil B is shorter (used stub).",
        2,
        [{ key: "Pencil A is longer", marks: "1 M" }, { key: "Reason based on sharpening", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Measuring Classroom with Footsteps",
        "Walk from the classroom door to the teacher's blackboard counting your footsteps (paces). If it takes you 15 footsteps and your teacher takes 10 footsteps, explain why.",
        "<strong>Step-by-Step Solution:</strong><br>1. The distance between the door and board is the same.<br>2. The teacher is an adult with longer legs, so her footsteps are bigger (takes 10 steps).<br>3. A student's steps are shorter, requiring <strong>more footsteps (15 steps)</strong>.",
        2,
        [{ key: "Teacher steps are longer", marks: "1 M" }, { key: "Student needs more steps", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Taller and Shorter in the Family",
        "In Lina's family, who is the tallest person and who is the shortest: Grandfather, Mother, Lina, or Baby Brother?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Tallest:</strong> Grandfather (or Father).<br>• <strong>Shortest:</strong> Baby Brother (crawling toddler).",
        2,
        [{ key: "Tallest identified", marks: "1 M" }, { key: "Shortest identified", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Measuring with Eraser / Paperclips",
        "How many erasers long is your wooden pencil? Place erasers end-to-end to measure.",
        "<strong>Step-by-Step Solution:</strong><br>• A standard new wooden pencil is about <strong>4 to 5 standard erasers long</strong>.",
        2,
        [{ key: "Valid estimate (4 to 5 erasers)", marks: "1 M" }, { key: "End-to-end placement method", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Heavier and Lighter",
        "Hold a watermelon in one hand and a lemon in the other hand. Which fruit is heavier and which is lighter?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Heavier:</strong> Watermelon (pulls down heavily on your hand).<br>• <strong>Lighter:</strong> Lemon (feels very light and easy to hold).",
        2,
        [{ key: "Watermelon is heavier", marks: "1 M" }, { key: "Lemon is lighter", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Comparing Ladders",
        "Two painters have ladders: Ladder 1 has 12 rungs, and Ladder 2 has 6 rungs. Which ladder is longer?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Ladder 1 is longer</strong> because it has 12 rungs reaching higher up.<br>• Ladder 2 with 6 rungs is shorter.",
        2,
        [{ key: "Ladder 1 is longer", marks: "1 M" }, { key: "12 rungs > 6 rungs", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Longest Ribbon",
        "Three girls have hair ribbons: Sita has a 20 cm ribbon, Gita has a 40 cm ribbon, and Rita has a 10 cm ribbon. Whose ribbon is the longest and whose is the shortest?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Longest ribbon:</strong> Gita (40 cm).<br>• <strong>Shortest ribbon:</strong> Rita (10 cm).",
        2,
        [{ key: "Gita's ribbon is longest", marks: "1 M" }, { key: "Rita's ribbon is shortest", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Measuring Desk with Finger-Widths",
        "How many finger-widths wide is your eraser? Place fingers side-by-side.",
        "<strong>Step-by-Step Solution:</strong><br>• A standard eraser is about <strong>2 to 3 finger-widths wide</strong>.",
        2,
        [{ key: "2 to 3 finger-widths", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Seesaw Balance",
        "An elephant and an ant sit on opposite ends of a seesaw in a funny cartoon. Which side will touch the ground?",
        "<strong>Step-by-Step Solution:</strong><br>1. The elephant is much <strong>heavier</strong> than the tiny ant.<br>2. Therefore, the <strong>elephant's side will touch the ground</strong>, and the ant's side will shoot up into the air.",
        2,
        [{ key: "Elephant's side touches ground", marks: "1 M" }, { key: "Elephant is heavier", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Thick and Thin",
        "Compare a dictionary and a comic book. Which book is thicker and which is thinner?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Thicker:</strong> The dictionary (has hundreds of pages).<br>• <strong>Thinner:</strong> The comic book (has only a few thin pages).",
        2,
        [{ key: "Dictionary is thicker", marks: "1 M" }, { key: "Comic book is thinner", marks: "1 M" }]
      ),
      makeQ(
        "Observation Task • Tallest Animal",
        "Among a dog, a giraffe, and a cat, which animal is the tallest?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>The giraffe is the tallest animal</strong> with its long neck standing high above trees.<br>• The cat is the shortest among the three.",
        2,
        [{ key: "Giraffe is tallest", marks: "1 M" }, { key: "Cat is shortest", marks: "1 M" }]
      ),
      makeQ(
        "Activity • Arm-Span vs Handspan",
        "What is larger: your arm-span (both arms stretched out wide) or your single handspan?",
        "<strong>Step-by-Step Solution:</strong><br>• Your <strong>arm-span is much larger</strong> than a single handspan.<br>• An arm-span equals several handspans together.",
        2,
        [{ key: "Arm-span is larger", marks: "1 M" }, { key: "Explains stretching both arms", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Heavy School Bag vs Light Pencil",
        "Which is heavier: your school bag full of books or a single wooden pencil?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Heavier:</strong> School bag full of books.<br>• <strong>Lighter:</strong> A single wooden pencil.",
        2,
        [{ key: "School bag is heavier", marks: "1 M" }, { key: "Pencil is lighter", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Comparing Rope Lengths",
        "Rope Red is 8 footsteps long. Rope Blue is 11 footsteps long. Which rope is longer and by how many footsteps?",
        "<strong>Step-by-Step Solution:</strong><br>• 11 is greater than 8, so <strong>Rope Blue is longer</strong>.<br>• Difference = 11 - 8 = <strong>3 footsteps longer</strong>.",
        2,
        [{ key: "Rope Blue is longer", marks: "1 M" }, { key: "3 footsteps difference", marks: "1 M" }]
      ),
      makeQ(
        "Competency Review • Standard vs Non-Standard",
        "Why do we need a standard ruler to measure cloth in a shop instead of using the shopkeeper's handspan?",
        "<strong>Step-by-Step Solution:</strong><br>1. Every person's hand has a different size.<br>2. A standard wooden or plastic ruler is fixed and equal everywhere, ensuring fair and accurate measurement.",
        2,
        [{ key: "Handspans differ per person", marks: "1 M" }, { key: "Ruler is fixed and equal", marks: "1 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 8: Fun with Numbers (Numbers 21 to 99)
  // -------------------------------------------------------------------------
  {
    id: "jm8",
    num: 8,
    unit: "Unit 3: Measurement & Patterns",
    title: "Fun with Numbers",
    subtitle: "Numbers 21 to 99, Matchstick Bundles of 10, Tens & Ones",
    concepts: [
      "Extending place value to two-digit numbers up to 99.",
      "Grouping items into bundles of 10 and counting loose ones.",
      "Writing numbers in expanded notation (e.g., 45 = 4 tens and 5 ones = 40 + 5).",
      "Reading and completing the 1 to 100 number chart.",
      "Comparing 2-digit numbers using tens place first, then ones place."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f8fafc" rx="10"/><rect x="50" y="30" width="70" height="55" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="4"/><text x="85" y="62" font-size="12" fill="#0369a1" font-weight="bold" text-anchor="middle">10</text><rect x="130" y="30" width="70" height="55" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="4"/><text x="165" y="62" font-size="12" fill="#0369a1" font-weight="bold" text-anchor="middle">10</text><rect x="210" y="30" width="70" height="55" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="4"/><text x="245" y="62" font-size="12" fill="#0369a1" font-weight="bold" text-anchor="middle">10</text><circle cx="310" cy="55" r="6" fill="#0284c7"/><circle cx="330" cy="55" r="6" fill="#0284c7"/><circle cx="350" cy="55" r="6" fill="#0284c7"/><circle cx="370" cy="55" r="6" fill="#0284c7"/><text x="430" y="62" font-size="16" fill="#0369a1" font-weight="bold">34</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#0369a1" text-anchor="middle">3 Tens + 4 Ones = 30 + 4 = 34</text></svg>`,
    cbq: {
      title: "Flower Garlands at the Temple Case Study",
      text: "Meena stringed 3 garlands of 10 marigold flowers each, and she has 7 loose flowers remaining in her basket.",
      question: "How many total flowers does Meena have? How many more loose flowers does she need to complete a fourth garland of 10?",
      answer: "1. 3 garlands of 10 = 30 flowers. Loose flowers = 7. Total = 30 + 7 = <strong>37 flowers</strong>.<br>2. To make a full garland of 10 from 7 flowers, she needs: 10 - 7 = <strong>3 more flowers</strong>.",
      rubric: "1.5 M for 30 + 7 = 37 flowers + 1.5 M for 10 - 7 = 3 flowers"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Counting Bundles of 10",
        "Look at the picture: There are 2 bundles of 10 matchsticks and 4 loose matchsticks. What number is this?",
        "<strong>Step-by-Step Solution:</strong><br>• 2 bundles of 10 = 20<br>• 4 loose sticks = 4<br>• Total = 20 + 4 = <strong>24</strong> (Twenty-four).",
        2,
        [{ key: "20 + 4 = 24", marks: "1 M" }, { key: "Number name Twenty-four", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones Table",
        "Write the Tens and Ones for: (a) 35, (b) 52, (c) 60, (d) 78.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 35 = <strong>3 Tens and 5 Ones</strong><br>• (b) 52 = <strong>5 Tens and 2 Ones</strong><br>• (c) 60 = <strong>6 Tens and 0 Ones</strong><br>• (d) 78 = <strong>7 Tens and 8 Ones</strong>",
        2,
        [{ key: "All 4 correctly partitioned", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Making Bundles",
        "How many bundles of 10 can you tie from 46 matchsticks? How many loose sticks will be left over?",
        "<strong>Step-by-Step Solution:</strong><br>• In 46, the tens digit is 4 and the ones digit is 6.<br>• Therefore, you can tie <strong>4 complete bundles of 10</strong>.<br>• <strong>6 loose sticks</strong> will be left over.",
        2,
        [{ key: "4 bundles of 10", marks: "1 M" }, { key: "6 loose sticks left", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Strips 21 to 30",
        "Fill the missing numbers on the strip: 21, 22, __, 24, __, 26, 27, __, 29, 30.",
        "<strong>Step-by-Step Solution:</strong><br>Counting sequentially:<br>21, 22, <strong>23</strong>, 24, <strong>25</strong>, 26, 27, <strong>28</strong>, 29, 30.",
        2,
        [{ key: "Filled 23, 25, 28 correctly", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Strips 51 to 60",
        "Write the numbers from 51 to 60 in correct order.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>51, 52, 53, 54, 55, 56, 57, 58, 59, 60</strong>.",
        2,
        [{ key: "All 10 numbers in order", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Number Strips 91 to 100",
        "Fill the missing numbers: 91, __, 93, 94, __, 96, __, 98, 99, 100.",
        "<strong>Step-by-Step Solution:</strong><br>• 91, <strong>92</strong>, 93, 94, <strong>95</strong>, 96, <strong>97</strong>, 98, 99, 100.",
        2,
        [{ key: "Filled 92, 95, 97 accurately", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Expanded Form",
        "Write in expanded form:<br>(a) 48 = __ + __<br>(b) 63 = __ + __<br>(c) 85 = __ + __",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 48 = <strong>40 + 8</strong><br>• (b) 63 = <strong>60 + 3</strong><br>• (c) 85 = <strong>80 + 5</strong>",
        3,
        [{ key: "40 + 8", marks: "1 M" }, { key: "60 + 3", marks: "1 M" }, { key: "80 + 5", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • What Comes Before and After?",
        "Write what comes:<br>(a) Just before 40<br>(b) Just after 69<br>(c) Between 88 and 90",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Just before 40 is <strong>39</strong>.<br>• (b) Just after 69 is <strong>70</strong>.<br>• (c) Between 88 and 90 is <strong>89</strong>.",
        3,
        [{ key: "Before 40 = 39", marks: "1 M" }, { key: "After 69 = 70", marks: "1 M" }, { key: "Between 88 & 90 = 89", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Comparing 2-Digit Numbers",
        "Circle the greater number in each pair: (a) 42 and 24, (b) 67 and 76.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 4 tens is greater than 2 tens → <strong>42 is greater</strong>.<br>• (b) 7 tens is greater than 6 tens → <strong>76 is greater</strong>.",
        2,
        [{ key: "42 circled", marks: "1 M" }, { key: "76 circled", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Number Riddle",
        "I have 5 tens and 3 ones. Who am I?",
        "<strong>Step-by-Step Solution:</strong><br>• 5 tens = 50<br>• 3 ones = 3<br>• 50 + 3 = <strong>53 (Fifty-three)</strong>.",
        2,
        [{ key: "Identified 53", marks: "1 M" }, { key: "Number name Fifty-three", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting in Tens",
        "Write the sequence counting in tens from 10 to 100: 10, 20, 30, __, __, __, __, __, __, 100.",
        "<strong>Step-by-Step Solution:</strong><br>• 10, 20, 30, <strong>40, 50, 60, 70, 80, 90</strong>, 100.",
        2,
        [{ key: "All tens filled correctly", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Bindi Packets",
        "A packet has 10 bindis. Suman buys 3 packets and has 4 loose bindis. How many bindis does Suman have in total?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 packets of 10 = 30 bindis<br>• Loose bindis = 4<br>• Total = 30 + 4 = <strong>34 bindis</strong>.",
        2,
        [{ key: "30 + 4 = 34", marks: "1 M" }, { key: "Answer with unit: 34 bindis", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Smallest 2-Digit Number",
        "What is the smallest 2-digit number? What is the largest 2-digit number?",
        "<strong>Step-by-Step Solution:</strong><br>• The smallest 2-digit number is <strong>10</strong>.<br>• The largest 2-digit number is <strong>99</strong>.",
        2,
        [{ key: "Smallest = 10", marks: "1 M" }, { key: "Largest = 99", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Circle the Smallest",
        "Circle the smallest number among: 45, 19, 72, 33.",
        "<strong>Step-by-Step Solution:</strong><br>• Comparing tens digits: 1 ten is smallest.<br>• Therefore, <strong>19 is the smallest number</strong>.",
        2,
        [{ key: "Identified 19 as smallest", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Match Number to Bundles",
        "Match: (1) 5 bundles and 2 sticks → 52. (2) 6 bundles and 9 sticks → 69.",
        "<strong>Step-by-Step Solution:</strong><br>• 5 tens + 2 ones = <strong>52</strong><br>• 6 tens + 9 ones = <strong>69</strong>",
        2,
        [{ key: "Correct matches verified", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Adding 1 to 99",
        "What number comes right after 99? How many digits does it have?",
        "<strong>Step-by-Step Solution:</strong><br>• 99 + 1 = <strong>100 (One Hundred)</strong>.<br>• 100 has <strong>3 digits</strong> (1 hundred, 0 tens, 0 ones).",
        2,
        [{ key: "100 (One Hundred)", marks: "1 M" }, { key: "It has 3 digits", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Ascending Order",
        "Arrange in order from smallest to biggest: 34, 12, 65, 48.",
        "<strong>Step-by-Step Solution:</strong><br>• Comparing tens digits: 12 < 34 < 48 < 65.<br>• Ascending order: <strong>12, 34, 48, 65</strong>.",
        2,
        [{ key: "Correct order: 12, 34, 48, 65", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Descending Order",
        "Arrange in order from biggest to smallest: 71, 95, 28, 50.",
        "<strong>Step-by-Step Solution:</strong><br>• Comparing tens digits: 95 > 71 > 50 > 28.<br>• Descending order: <strong>95, 71, 50, 28</strong>.",
        2,
        [{ key: "Correct order: 95, 71, 50, 28", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Beads on a String",
        "Grandma made 4 necklaces of 10 pearls each. She has 9 extra loose pearls. How many pearls does she have in all?",
        "<strong>Step-by-Step Solution:</strong><br>• 4 necklaces = 40 pearls<br>• Loose pearls = 9<br>• Total = 40 + 9 = <strong>49 pearls</strong>.",
        2,
        [{ key: "40 + 9 = 49", marks: "1 M" }, { key: "Answer: 49 pearls", marks: "1 M" }]
      ),
      makeQ(
        "Mental Math • Same Digits",
        "Write any two numbers where the tens digit and the ones digit are exactly the same (e.g. 11).",
        "<strong>Step-by-Step Solution:</strong><br>• Examples: <strong>22, 33, 44, 55, 66, 77, 88, 99</strong>.<br>• Any two of these are correct.",
        2,
        [{ key: "Two valid double-digit numbers", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Tens Strip Jump",
        "If you are at 37 on the 100-chart and you jump down 1 box (add 10), what number do you reach?",
        "<strong>Step-by-Step Solution:</strong><br>• 37 + 10 = <strong>47</strong>.<br>• Jumping down one row in a 100-grid always increases the number by 1 ten (10).",
        2,
        [{ key: "Reaches 47", marks: "1 M" }, { key: "Explains adding 10", marks: "1 M" }]
      ),
      makeQ(
        "Competency Review • Making Tens from Loose Sticks",
        "Aman has 28 loose sticks. How many bundles of 10 can he make, and how many sticks will remain?",
        "<strong>Step-by-Step Solution:</strong><br>• 28 = 20 + 8 = 2 tens and 8 ones.<br>• Aman can make <strong>2 bundles of 10</strong>, and <strong>8 sticks will remain</strong>.",
        2,
        [{ key: "2 bundles of 10", marks: "1 M" }, { key: "8 sticks remain", marks: "1 M" }]
      )
    ]
  }
];

module.exports = { joyfulPart4 };
