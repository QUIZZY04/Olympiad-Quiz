// scripts/builders/joyful-maths-part2.js
// Exact Literal NCERT Questions for Joyful Mathematics Chapters 3, 4, 5, 6

function makeQ(category, q, ans, marks, rubric) {
  return { category, q, ans, marks, rubric };
}

const joyfulPart2 = [
  // -------------------------------------------------------------------------
  // CHAPTER 3: Mango Treat (Numbers 1 to 9)
  // -------------------------------------------------------------------------
  {
    id: "jm3",
    num: 3,
    unit: "Unit 2: Number Operations",
    title: "Mango Treat",
    subtitle: "Counting 1 to 9, As Many As, More or Less, Zero Concept",
    concepts: [
      "Counting physical objects from 1 to 9 with one-to-one correspondence.",
      "Comparing quantities: As Many As, More, and Less.",
      "Concept of Zero as an empty collection or none left.",
      "Number names (One to Nine) and numeral writing.",
      "Missing numbers on a number track and ordering."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><circle cx="50" cy="50" r="14" fill="#f59e0b"/><text x="50" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">1</text><circle cx="100" cy="50" r="14" fill="#f59e0b"/><text x="100" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">2</text><circle cx="150" cy="50" r="14" fill="#f59e0b"/><text x="150" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">3</text><circle cx="200" cy="50" r="14" fill="#f59e0b"/><text x="200" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">4</text><circle cx="250" cy="50" r="14" fill="#f59e0b"/><text x="250" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">5</text><circle cx="300" cy="50" r="14" fill="#f59e0b"/><text x="300" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">6</text><circle cx="350" cy="50" r="14" fill="#f59e0b"/><text x="350" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">7</text><circle cx="400" cy="50" r="14" fill="#f59e0b"/><text x="400" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">8</text><circle cx="450" cy="50" r="14" fill="#f59e0b"/><text x="450" y="54" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">9</text><text x="250" y="102" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">Numbers 1 to 9 &amp; Concept of Zero</text></svg>`,
    cbq: {
      title: "Orchard Mango Harvest Case Study",
      text: "Grandpa gives Anaya 5 ripe yellow mangoes and gives Kabir 3 ripe yellow mangoes in cane baskets.",
      question: "Who has more mangoes and by how many? If Anaya eats all 5 of her mangoes, how many mangoes remain in her basket?",
      answer: "1. Anaya has 5 and Kabir has 3. Since 5 > 3, <strong>Anaya has more mangoes</strong>.<br>2. Difference = 5 - 3 = <strong>2 more mangoes</strong>.<br>3. If Anaya eats all 5, her basket has 5 - 5 = <strong>0 (Zero) mangoes left</strong>.",
      rubric: "1 M for comparison + 1 M for difference + 1 M for zero calculation"
    },
    questions: [
      makeQ(
        "Textbook Exercise • As Many As",
        "There are 5 hungry rabbits and 5 crunchy carrots. Draw lines to match each rabbit to a carrot. Is there a carrot for every rabbit?",
        "<strong>Step-by-Step Solution:</strong><br>1. Count of rabbits = 5.<br>2. Count of carrots = 5.<br>3. Since 5 equals 5, there are <strong>as many carrots as rabbits</strong>. Every rabbit gets exactly 1 carrot without any left over.",
        2,
        [{ key: "Matched 5 rabbits to 5 carrots", marks: "1 M" }, { key: "Used 'as many as' accurately", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • More or Less",
        "Group A has 7 butterflies. Group B has 4 butterflies. Tick (✓) the group that has MORE butterflies.",
        "<strong>Step-by-Step Solution:</strong><br>• Count of Group A = 7<br>• Count of Group B = 4<br>• Comparing: 7 is greater than 4 (7 > 4).<br>• Therefore, <strong>Group A has more butterflies</strong>.",
        2,
        [{ key: "Group A ticked", marks: "1 M" }, { key: "Comparison 7 > 4 stated", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting Mangoes",
        "Look at the mango tree: 6 ripe yellow mangoes are hanging on the tree, and 3 mangoes have fallen on the ground. How many mangoes are on the tree?",
        "<strong>Step-by-Step Solution:</strong><br>• Count of mangoes hanging on the tree = <strong>6 mangoes</strong>.<br>• Count of fallen mangoes = 3 mangoes.<br>• Total mangoes = 6 + 3 = 9 mangoes.",
        2,
        [{ key: "6 mangoes on the tree", marks: "1 M" }, { key: "Total count of 9 noted", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Count and Match",
        "Match the objects to their correct numeral: (a) 3 Bananas, (b) 5 Marbles, (c) 8 Leaves, (d) 1 Sun.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 3 Bananas → <strong>3</strong><br>• (b) 5 Marbles → <strong>5</strong><br>• (c) 8 Leaves → <strong>8</strong><br>• (d) 1 Sun → <strong>1</strong>",
        2,
        [{ key: "All 4 numerals correctly matched", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Concept of Zero",
        "There are 4 little green parrots sitting on a branch. One by one, all 4 parrots fly away into the sky. How many parrots are on the branch now?",
        "<strong>Step-by-Step Solution:</strong><br>1. Starting parrots = 4<br>2. Parrots that flew away = 4<br>3. Remaining parrots = 4 - 4 = <strong>0 (Zero)</strong>.<br>4. Zero means none is left on the branch.",
        2,
        [{ key: "4 - 4 = 0", marks: "1 M" }, { key: "Zero explained as none left", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • One More Parrot Rhyme",
        "One little parrot green singing cheep, cheep, cheep; one more joins in, making them: ___.",
        "<strong>Step-by-Step Solution:</strong><br>• Starting parrots = 1<br>• One more joins: 1 + 1 = <strong>2 parrots</strong> (Two).",
        2,
        [{ key: "1 + 1 = 2", marks: "1 M" }, { key: "Number name 'Two'", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Number Names 1 to 9",
        "Write the number name for: (a) 4, (b) 7, (c) 9, (d) 2.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 = <strong>Four</strong><br>• 7 = <strong>Seven</strong><br>• 9 = <strong>Nine</strong><br>• 2 = <strong>Two</strong>",
        2,
        [{ key: "All 4 number names spelled correctly", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Number Train Missing Wagons",
        "Fill the missing numbers on the train wagons: 1, 2, __, 4, __, 6, 7, __, 9.",
        "<strong>Step-by-Step Solution:</strong><br>Counting from 1 to 9 in sequential order:<br>1, 2, <strong>3</strong>, 4, <strong>5</strong>, 6, 7, <strong>8</strong>, 9.",
        2,
        [{ key: "Filled in 3, 5, 8 correctly", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Before & After?",
        "What number comes: (a) Just before 6? (b) Just after 7? (c) Between 4 and 6?",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Just before 6 is <strong>5</strong>.<br>• (b) Just after 7 is <strong>8</strong>.<br>• (c) Between 4 and 6 is <strong>5</strong>.",
        3,
        [{ key: "Before 6 = 5", marks: "1 M" }, { key: "After 7 = 8", marks: "1 M" }, { key: "Between 4 and 6 = 5", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Dot Pattern Pairing",
        "A ladybug has 4 black dots on its left wing and 5 black dots on its right wing. How many dots does the ladybug have altogether?",
        "<strong>Step-by-Step Solution:</strong><br>• Left wing dots = 4<br>• Right wing dots = 5<br>• Total dots = 4 + 5 = <strong>9 dots</strong>.",
        2,
        [{ key: "Addition 4 + 5", marks: "1 M" }, { key: "Answer: 9 dots", marks: "1 M" }]
      ),
      makeQ(
        "In-Text Prompt • Finger Counting",
        "Show 5 fingers on your left hand. How many fingers must you show on your right hand to make 7 fingers in total?",
        "<strong>Step-by-Step Solution:</strong><br>1. Starting with 5 fingers.<br>2. Count on: 6 (one finger), 7 (two fingers).<br>3. You must show <strong>2 fingers</strong> on the right hand (5 + 2 = 7).",
        2,
        [{ key: "Counting forward by 2", marks: "1 M" }, { key: "Answer: 2 fingers", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Circling More Objects",
        "Set X has 8 blue beads. Set Y has 6 red beads. Circle the set with more beads.",
        "<strong>Step-by-Step Solution:</strong><br>• 8 is more than 6.<br>• Circle <strong>Set X (8 blue beads)</strong>.",
        2,
        [{ key: "Set X circled", marks: "1 M" }, { key: "8 > 6 reasoning", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Make Groups of 4",
        "There are 8 balloons in the sky. Draw a circle around a group of 4 balloons. How many balloons are outside the circle?",
        "<strong>Step-by-Step Solution:</strong><br>• Total balloons = 8<br>• Group circled = 4<br>• Balloons outside the circle = 8 - 4 = <strong>4 balloons</strong>.",
        2,
        [{ key: "Group of 4 circled", marks: "1 M" }, { key: "4 remaining calculated", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Empty Plates",
        "Plate 1 has 3 laddoos. Plate 2 has 0 laddoos. Which plate is empty?",
        "<strong>Step-by-Step Solution:</strong><br>• Plate 2 has 0 laddoos, which means it has no laddoos at all.<br>• Therefore, <strong>Plate 2 is empty</strong>.",
        2,
        [{ key: "Plate 2 is empty", marks: "1 M" }, { key: "0 means empty", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Counting Backward",
        "Count backward from 5 to 1: 5, 4, 3, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>Counting backward by subtracting 1 each time:<br>5, 4, 3, <strong>2</strong>, <strong>1</strong>.",
        2,
        [{ key: "Filled in 2 and 1", marks: "2 M" }]
      ),
      makeQ(
        "Competency Drill • Comparing Three Numbers",
        "Which is the greatest number among 3, 9, and 6? Which is the smallest?",
        "<strong>Step-by-Step Solution:</strong><br>• Comparing: 3 < 6 < 9.<br>• <strong>Greatest number:</strong> 9.<br>• <strong>Smallest number:</strong> 3.",
        2,
        [{ key: "Greatest = 9", marks: "1 M" }, { key: "Smallest = 3", marks: "1 M" }]
      ),
      makeQ(
        "Word Problem • Sparrows on a Fence",
        "Two sparrows are on a fence. Three more fly down and join them. How many sparrows are on the fence?",
        "<strong>Step-by-Step Solution:</strong><br>• Initial sparrows = 2<br>• Sparrows joining = 3<br>• Total = 2 + 3 = <strong>5 sparrows</strong>.",
        2,
        [{ key: "Addition 2 + 3 = 5", marks: "1 M" }, { key: "Answer with unit: 5 sparrows", marks: "1 M" }]
      ),
      makeQ(
        "Activity • Match Numeral to Dots",
        "Draw lines: 6 to (••••••), 3 to (•••), 8 to (••••••••).",
        "<strong>Step-by-Step Solution:</strong><br>• 6 matches the group of 6 dots.<br>• 3 matches the group of 3 dots.<br>• 8 matches the group of 8 dots.",
        2,
        [{ key: "Correct one-to-one matching", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: Making 10
  // -------------------------------------------------------------------------
  {
    id: "jm4",
    num: 4,
    unit: "Unit 2: Number Operations",
    title: "Making 10",
    subtitle: "Combinations of 10, Ten-Frames, Bundling & Tens/Ones",
    concepts: [
      "Understanding 10 as a group of ten ones (1 ten = 10 ones).",
      "Using ten-frames to discover number pairs that sum to 10 (e.g. 1+9, 2+8, 5+5).",
      "Bundling loose sticks into packets/bundles of 10.",
      "Numbers from 10 to 20: 10 and 1 is 11, 10 and 2 is 12, up to 20."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fff7ed" rx="10"/><rect x="60" y="30" width="200" height="60" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="4"/><line x1="100" y1="30" x2="100" y2="90" stroke="#ea580c" stroke-width="2"/><line x1="140" y1="30" x2="140" y2="90" stroke="#ea580c" stroke-width="2"/><line x1="180" y1="30" x2="180" y2="90" stroke="#ea580c" stroke-width="2"/><line x1="220" y1="30" x2="220" y2="90" stroke="#ea580c" stroke-width="2"/><line x1="60" y1="60" x2="260" y2="60" stroke="#ea580c" stroke-width="2"/><circle cx="80" cy="45" r="8" fill="#ea580c"/><circle cx="120" cy="45" r="8" fill="#ea580c"/><circle cx="160" cy="45" r="8" fill="#ea580c"/><circle cx="200" cy="45" r="8" fill="#ea580c"/><circle cx="240" cy="45" r="8" fill="#ea580c"/><circle cx="80" cy="75" r="8" fill="#ea580c"/><circle cx="120" cy="75" r="8" fill="#ea580c"/><circle cx="160" cy="75" r="8" fill="#9a3412"/><circle cx="200" cy="75" r="8" fill="#9a3412"/><circle cx="240" cy="75" r="8" fill="#9a3412"/><text x="380" y="55" font-family="sans-serif" font-size="14" font-weight="700" fill="#9a3412" text-anchor="middle">7 + 3 = 10</text><text x="380" y="85" font-family="sans-serif" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">Ten-Frame Model</text></svg>`,
    cbq: {
      title: "Making Bead Garlands Case Study",
      text: "Simran wants to make a necklace of 10 red beads. She already has 6 red beads on her string.",
      question: "How many more beads does Simran need to complete her necklace of 10? If her friend gives her 8 beads, can they make another complete garland of 10?",
      answer: "1. Total beads needed = 10. Beads currently on string = 6.<br>2. More beads needed = 10 - 6 = <strong>4 more beads</strong>.<br>3. With 8 beads, they cannot make a full garland of 10 because 8 is less than 10 (needs 2 more).",
      rubric: "1.5 M for 10 - 6 = 4 beads + 1.5 M for 8 < 10 analysis"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Ten-Frame Pairs",
        "Look at the 10-frame: 7 boxes have red counters. How many empty boxes are left to make 10?",
        "<strong>Step-by-Step Solution:</strong><br>1. Total boxes in a ten-frame = 10.<br>2. Filled boxes = 7.<br>3. Empty boxes = 10 - 7 = <strong>3 empty boxes</strong>.<br>4. Therefore, 7 + 3 = 10.",
        2,
        [{ key: "10 - 7 = 3", marks: "1 M" }, { key: "Pair: 7 and 3 make 10", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Finger Counting to 10",
        "Hold up all the fingers of both hands. How many fingers do you have in total? If you fold 4 fingers down, how many stay upright?",
        "<strong>Step-by-Step Solution:</strong><br>• Total fingers on both hands = 5 + 5 = <strong>10 fingers</strong>.<br>• Fold 4 fingers down: 10 - 4 = <strong>6 fingers upright</strong>.",
        2,
        [{ key: "Total 10 fingers", marks: "1 M" }, { key: "6 upright (10 - 4 = 6)", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Pairs that Make 10",
        "Fill in the blanks to make 10:<br>(a) 1 + __ = 10<br>(b) 2 + __ = 10<br>(c) 5 + __ = 10<br>(d) 8 + __ = 10",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 1 + <strong>9</strong> = 10<br>• (b) 2 + <strong>8</strong> = 10<br>• (c) 5 + <strong>5</strong> = 10<br>• (d) 8 + <strong>2</strong> = 10",
        2,
        [{ key: "All 4 pairs filled correctly", marks: "2 M" }]
      ),
      makeQ(
        "Hands-on Activity • Bundling Sticks",
        "Rohan has 10 loose matchsticks. He ties them together with a rubber band. What do we call this tied bundle in mathematics?",
        "<strong>Step-by-Step Solution:</strong><br>• A bundle of 10 loose ones is called <strong>1 Ten</strong> (One Ten = 10 Ones).<br>• This forms the foundation of the place-value system.",
        2,
        [{ key: "Called 1 Ten", marks: "1 M" }, { key: "1 Ten = 10 Ones", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Numbers 10 to 20",
        "A bundle of 10 pencils and 3 loose pencils makes what number? Write the numeral and number name.",
        "<strong>Step-by-Step Solution:</strong><br>• 1 bundle of 10 = 10<br>• 3 loose pencils = 3<br>• 10 + 3 = <strong>13</strong>.<br>• Number name: <strong>Thirteen</strong>.",
        2,
        [{ key: "Numeral 13", marks: "1 M" }, { key: "Number name Thirteen", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • 10 and More",
        "Write the number for:<br>(a) 10 and 1<br>(b) 10 and 5<br>(c) 10 and 7<br>(d) 10 and 10",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 10 and 1 = <strong>11 (Eleven)</strong><br>• (b) 10 and 5 = <strong>15 (Fifteen)</strong><br>• (c) 10 and 7 = <strong>17 (Seventeen)</strong><br>• (d) 10 and 10 = <strong>20 (Twenty)</strong>",
        2,
        [{ key: "All 4 numbers correct", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Circle Groups of 10",
        "Look at 14 ice cream cones. Circle a group of 10 cones. How many cones are left outside the circle?",
        "<strong>Step-by-Step Solution:</strong><br>1. Total cones = 14.<br>2. Circle 10 cones (1 group of 10).<br>3. Cones left outside = 14 - 10 = <strong>4 loose cones</strong>.<br>4. 14 = 1 Ten and 4 Ones.",
        2,
        [{ key: "Circled 10 cones", marks: "1 M" }, { key: "4 loose cones remaining", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Number 10 Rainbow Pair",
        "If you have 6 blue marbles, how many yellow marbles must you add to make a full bowl of 10 marbles?",
        "<strong>Step-by-Step Solution:</strong><br>• Blue marbles = 6<br>• Total needed = 10<br>• Yellow marbles = 10 - 6 = <strong>4 yellow marbles</strong>.",
        2,
        [{ key: "10 - 6 = 4", marks: "1 M" }, { key: "Answer: 4 yellow marbles", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones Table",
        "Fill in Tens and Ones for: (a) 18, (b) 12.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 18 = <strong>1 Ten and 8 Ones</strong><br>• (b) 12 = <strong>1 Ten and 2 Ones</strong>",
        2,
        [{ key: "18 = 1 Ten, 8 Ones", marks: "1 M" }, { key: "12 = 1 Ten, 2 Ones", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Number Strip 10 to 20",
        "Fill the missing numbers: 10, 11, __, 13, __, 15, 16, __, 18, 19, 20.",
        "<strong>Step-by-Step Solution:</strong><br>Counting from 10 to 20 sequentially:<br>10, 11, <strong>12</strong>, 13, <strong>14</strong>, 15, 16, <strong>17</strong>, 18, 19, 20.",
        2,
        [{ key: "Filled 12, 14, 17 correctly", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Greater and Smaller in Teens",
        "Circle the greater number in each pair: (a) 11 and 16, (b) 19 and 15.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 16 is greater than 11 → Circle <strong>16</strong>.<br>• (b) 19 is greater than 15 → Circle <strong>19</strong>.",
        2,
        [{ key: "16 circled", marks: "1 M" }, { key: "19 circled", marks: "1 M" }]
      ),
      makeQ(
        "Word Problem • Eggs in a Carton",
        "An egg tray holds 10 eggs. Farmer Ali placed 10 eggs in the tray and kept 6 extra eggs in a basket. How many eggs does he have in total?",
        "<strong>Step-by-Step Solution:</strong><br>• Eggs in tray = 10 (1 ten)<br>• Extra eggs = 6 (6 ones)<br>• Total eggs = 10 + 6 = <strong>16 eggs</strong>.",
        2,
        [{ key: "10 + 6 = 16", marks: "1 M" }, { key: "Answer with unit: 16 eggs", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • How Many Ones in 20?",
        "How many tens make the number 20? How many bundles of 10 matchsticks would you tie?",
        "<strong>Step-by-Step Solution:</strong><br>• 10 + 10 = 20.<br>• Therefore, <strong>2 tens</strong> make 20.<br>• You would tie <strong>2 bundles of 10 matchsticks</strong> with 0 loose ones.",
        2,
        [{ key: "2 tens make 20", marks: "1 M" }, { key: "2 bundles tied", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Just After 19?",
        "What number comes just before 15? What number comes just after 19?",
        "<strong>Step-by-Step Solution:</strong><br>• Just before 15 is <strong>14</strong>.<br>• Just after 19 is <strong>20</strong>.",
        2,
        [{ key: "Before 15 = 14", marks: "1 M" }, { key: "After 19 = 20", marks: "1 M" }]
      ),
      makeQ(
        "Activity • Match Numeral to Ten-Frame",
        "Match: (1) Full 10-frame and 2 dots → 12. (2) Full 10-frame and 5 dots → 15.",
        "<strong>Step-by-Step Solution:</strong><br>• 10 + 2 = <strong>12</strong><br>• 10 + 5 = <strong>15</strong>",
        2,
        [{ key: "Correct matches verified", marks: "2 M" }]
      ),
      makeQ(
        "Competency Drill • Smallest in the Group",
        "Find the smallest number among: 13, 17, 10, 15.",
        "<strong>Step-by-Step Solution:</strong><br>• Comparing: 10 < 13 < 15 < 17.<br>• The smallest number is <strong>10</strong>.",
        2,
        [{ key: "Identified 10 as smallest", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Bead String of 10",
        "Draw a necklace with 10 beads: color 5 red and 5 green. Does 5 + 5 equal 10?",
        "<strong>Step-by-Step Solution:</strong><br>• Yes, 5 red beads + 5 green beads = <strong>10 beads</strong>.<br>• 5 and 5 are doubles that make 10.",
        2,
        [{ key: "5 + 5 = 10", marks: "1 M" }, { key: "Recognized equal doubles", marks: "1 M" }]
      )
    ]
  }
];

module.exports = { joyfulPart2 };
