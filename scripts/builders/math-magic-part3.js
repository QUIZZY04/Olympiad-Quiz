// scripts/builders/math-magic-part3.js
// Exact Literal NCERT Textbook Questions for Math-Magic Book 1: Chapters 9 to 13

function makeQ(category, q, ans, marks, rubric) {
  return { category, q, ans, marks, rubric };
}

const mathMagicPart3 = [
  // -------------------------------------------------------------------------
  // CHAPTER 9: Data Handling
  // -------------------------------------------------------------------------
  {
    id: "mm9",
    num: 9,
    unit: "Unit 3: Math-Magic Classic",
    title: "Data Handling",
    subtitle: "Counting Shapes in Pictures, Letter Counts in Names & Frequency",
    concepts: [
      "Counting distinct geometric shapes (triangles, circles, squares, rectangles) in a composite picture.",
      "Identifying which shape occurs the most and which occurs the least.",
      "Counting letters in names of friends.",
      "Finding which letter repeats most frequently across names."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 9: Data Handling</text></svg>`,
    cbq: {
      title: "Joker's Geometric Costume Case Study",
      text: "In the circus picture, the joker's funny costume is made entirely of shapes: 8 triangles for the hat and collar, 5 circles for buttons and eyes, 6 rectangles for arms and legs, and 4 squares for the body pockets.",
      question: "Which shape is used the most in the joker's costume? Which shape is used the least? How many shapes were used in all?",
      answer: "1. <strong>Triangles (8)</strong> are used the most.<br>2. <strong>Squares (4)</strong> are used the least.<br>3. Total shapes = 8 + 5 + 6 + 4 = <strong>23 shapes in all</strong>.",
      rubric: "1 M for Triangles (most) + 1 M for Squares (least) + 1 M for total 23 shapes"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Counting Triangles in Joker",
        "Look at the composite joker picture in the textbook. Count all the Triangles (▲).",
        "<strong>Step-by-Step Solution:</strong><br>• Count of triangles in the hat, face, and collar = <strong>8 triangles</strong>.",
        2,
        [{ key: "8 triangles counted", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting Circles in Joker",
        "Count all the Circles (●) in the joker picture.",
        "<strong>Step-by-Step Solution:</strong><br>• Count of circles (eyes, nose, buttons, and ball in hand) = <strong>5 circles</strong>.",
        2,
        [{ key: "5 circles counted", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting Squares in Joker",
        "Count all the Squares (■) in the joker picture.",
        "<strong>Step-by-Step Solution:</strong><br>• Count of squares on the jacket and shoes = <strong>4 squares</strong>.",
        2,
        [{ key: "4 squares counted", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting Rectangles in Joker",
        "Count all the Rectangles (▭) in the joker picture.",
        "<strong>Step-by-Step Solution:</strong><br>• Count of rectangles (arms, legs, torso body) = <strong>6 rectangles</strong>.",
        2,
        [{ key: "6 rectangles counted", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Name the Shape that Occurs Most",
        "From the joker shape counts (Triangles: 8, Circles: 5, Squares: 4, Rectangles: 6): Name the shape that occurs the most.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Triangle</strong> occurs the most (8 times).",
        2,
        [{ key: "Triangle occurs most", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Name the Shape that Occurs Least",
        "From the joker shape counts above: Name the shape that occurs the least.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Square</strong> occurs the least (4 times).",
        2,
        [{ key: "Square occurs least", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Letters in Friends' Names",
        "Count the number of letters in each name:<br>(a) SAROJ<br>(b) RADHA<br>(c) AARAV<br>(d) GEETA",
        "<strong>Step-by-Step Solution:</strong><br>• (a) SAROJ = <strong>5 letters</strong><br>• (b) RADHA = <strong>5 letters</strong><br>• (c) AARAV = <strong>5 letters</strong><br>• (d) GEETA = <strong>5 letters</strong><br>All four names have exactly 5 letters.",
        2,
        [{ key: "All counts correct (5 letters each)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • How Many Names Have 5 Letters?",
        "Look at the list of friends: RAMESH, SANTOSH, RAJESH, MURLI, ROHAN. How many names have 6 letters?",
        "<strong>Step-by-Step Solution:</strong><br>• RAMESH = 6 letters<br>• SANTOSH = 7 letters<br>• RAJESH = 6 letters<br>• MURLI = 5 letters<br>• ROHAN = 5 letters<br>• Exactly <strong>2 names (Ramesh, Rajesh)</strong> have 6 letters.",
        2,
        [{ key: "2 names have 6 letters", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Most Common Starting Letter",
        "In the list: RAM, ROHIT, RADHA, RANI, AMIT. Which letter comes at the start of most names?",
        "<strong>Step-by-Step Solution:</strong><br>• Letter <strong>'R'</strong> starts 4 out of the 5 names (Ram, Rohit, Radha, Rani).<br>• 'R' is the most common starting letter.",
        2,
        [{ key: "Letter 'R'", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Finding Letter Frequency",
        "How many times does the letter 'A' appear in the word 'BANANA'?",
        "<strong>Step-by-Step Solution:</strong><br>• In B-A-N-A-N-A, the letter 'A' appears <strong>3 times</strong>.",
        2,
        [{ key: "3 times", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Fruit Chart in Kitchen",
        "Count fruits in the basket: 4 Apples, 7 Bananas, 2 Melons. Which fruit is greatest in number?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Bananas (7)</strong> are greatest in number.",
        2,
        [{ key: "Bananas (7)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Least Number of Fruits",
        "From the fruit counts above (Apples: 4, Bananas: 7, Melons: 2), which fruit is the least?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Melons (2)</strong> are the least.",
        2,
        [{ key: "Melons (2)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Vehicle Tally on Road",
        "Watching the road from the window: 5 Cars, 3 Buses, 8 Bicycles pass by. Which vehicle was seen the most?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Bicycles (8)</strong> were seen the most.",
        2,
        [{ key: "Bicycles (8)", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Vowels Count",
        "How many vowels (A, E, I, O, U) are in the name 'INDIA'?",
        "<strong>Step-by-Step Solution:</strong><br>• I, I, A are vowels.<br>• There are <strong>3 vowels</strong> in the name INDIA.",
        2,
        [{ key: "3 vowels (I, I, A)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Total Letters",
        "Find the total letters in 'SUN' and 'MOON'.",
        "<strong>Step-by-Step Solution:</strong><br>• SUN = 3 letters<br>• MOON = 4 letters<br>• Total = 3 + 4 = <strong>7 letters</strong>.",
        2,
        [{ key: "3 + 4 = 7 letters", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Bar Line Comparison",
        "Draw 4 tally marks for 4 pencils and 6 tally marks for 6 crayons. Which row is longer?",
        "<strong>Step-by-Step Solution:</strong><br>• The row of <strong>6 crayons is longer</strong> because 6 > 4.",
        2,
        [{ key: "Row of 6 crayons is longer", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: Patterns
  // -------------------------------------------------------------------------
  {
    id: "mm10",
    num: 10,
    unit: "Unit 3: Math-Magic Classic",
    title: "Patterns",
    subtitle: "Extending Sequences, T-Shapes, Arrow Patterns & Number Sequences",
    concepts: [
      "Extending sequences of basic 2D shapes (circles, squares, triangles).",
      "Alternating letter and symbol patterns (T, ⊥, T, ⊥).",
      "Arrow direction patterns (Up, Down, Up, Down).",
      "Number patterns: counting in 1s, 2s, 5s, 10s.",
      "Patterns with dots, leaf prints, and growing geometric shapes."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 10: Patterns</text></svg>`,
    cbq: {
      title: "Iron Grill Window Pattern Case Study",
      text: "A blacksmith creates an ornamental window grill using alternating upright hearts and inverted hearts: ♡, ♢, ♡, ♢, ♡, ♢.",
      question: "What symbol comes next in the grill sequence? If the window frame has 10 upright hearts, how many total symbols are in the row?",
      answer: "1. Following the alternation, the next symbol is an <strong>upright heart (♡)</strong>.<br>2. Since upright and inverted hearts alternate equally, 10 upright + 10 inverted = <strong>20 total symbols</strong>.",
      rubric: "1.5 M for upright heart + 1.5 M for 20 total symbols"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Extending T Pattern",
        "Complete the pattern: T, ⊥, T, ⊥, T, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• The pattern alternates between upright 'T' and upside-down '⊥'.<br>• Next two symbols: <strong>⊥, T</strong>.",
        2,
        [{ key: "Filled ⊥, then T", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Circle and Cross Pattern",
        "Complete the sequence: O, X, O, X, O, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• The pattern alternates O and X.<br>• Next symbols: <strong>X, O</strong>.",
        2,
        [{ key: "Filled X, then O", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Arrow Direction Pattern",
        "Fill the next arrows: ↑, ↓, ↑, ↓, ↑, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Next arrows: <strong>↓ (Down), ↑ (Up)</strong>.",
        2,
        [{ key: "Down then Up", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Double Up and Double Down",
        "Complete the sequence: ↑↑, ↓↓, ↑↑, ↓↓, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Next symbols: <strong>↑↑, ↓↓</strong>.",
        2,
        [{ key: "Double up then double down", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Shape Sequence (Circle & Triangle)",
        "Extend the pattern: ●, ▲, ●, ▲, ●, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Next shapes: <strong>▲ (Triangle), ● (Circle)</strong>.",
        2,
        [{ key: "Triangle then Circle", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Growing Dot Pattern",
        "Look at the dots: (•), (••), (•••), (••••), _____. Draw the next group.",
        "<strong>Step-by-Step Solution:</strong><br>• Rule: Add 1 dot each time.<br>• Next group: <strong>5 dots (•••••)</strong>.",
        2,
        [{ key: "5 dots drawn", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Growing Line Pattern",
        "Look at lines: 1 stick, 2 sticks, 3 sticks, 4 sticks. How many sticks come next?",
        "<strong>Step-by-Step Solution:</strong><br>• Rule: Add 1 stick.<br>• Next is <strong>5 sticks</strong>.",
        2,
        [{ key: "5 sticks", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Pattern Counting in 2s",
        "Complete the chain: 2, 4, 6, 8, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Adding 2 each time:<br>• 8 + 2 = <strong>10</strong><br>• 10 + 2 = <strong>12</strong>",
        2,
        [{ key: "10 and 12", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Pattern Counting in 5s",
        "Fill the missing numbers: 5, 10, 15, 20, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Adding 5 each time:<br>• 20 + 5 = <strong>25</strong><br>• 25 + 5 = <strong>30</strong>",
        2,
        [{ key: "25 and 30", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Pattern Counting in 10s",
        "Complete the sequence: 10, 20, 30, 40, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• 40 + 10 = <strong>50</strong><br>• 50 + 10 = <strong>60</strong>",
        2,
        [{ key: "50 and 60", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Odd Numbers Pattern",
        "Fill the missing numbers: 1, 3, 5, 7, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Adding 2 to odd numbers:<br>• 7 + 2 = <strong>9</strong><br>• 9 + 2 = <strong>11</strong>",
        2,
        [{ key: "9 and 11", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Backward Number Pattern",
        "Complete the backward count: 20, 19, 18, 17, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Subtracting 1 each time:<br>• 17 - 1 = <strong>16</strong><br>• 16 - 1 = <strong>15</strong>",
        2,
        [{ key: "16 and 15", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Backward in 10s",
        "Fill the blank: 50, 40, 30, __, 10.",
        "<strong>Step-by-Step Solution:</strong><br>• Subtracting 10 each time:<br>• 30 - 10 = <strong>20</strong>.",
        2,
        [{ key: "20", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Repeating Letters ABC",
        "Complete the pattern: AB, CD, EF, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Letter pairs in alphabetical order:<br>• Next pairs: <strong>GH, IJ</strong>.",
        2,
        [{ key: "GH, IJ", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Day and Night Pattern",
        "Morning, Afternoon, Evening, Night, Morning, __, __. What comes next?",
        "<strong>Step-by-Step Solution:</strong><br>• Following the cycle of the day: <strong>Afternoon, Evening</strong>.",
        2,
        [{ key: "Afternoon, Evening", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Alternating Leaf Prints",
        "A leaf is stamped: pointing Left, then Right, then Left, then Right. What direction will the 5th print point?",
        "<strong>Step-by-Step Solution:</strong><br>• The 5th print will point <strong>Left</strong>.",
        2,
        [{ key: "Left", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Triangle and Square Alternating",
        "Draw the next two shapes: ▲, ■, ▲, ■, ▲, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Next shapes: <strong>■ (Square), ▲ (Triangle)</strong>.",
        2,
        [{ key: "Square then Triangle", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Find the Pattern Rule",
        "Look at: 3, 6, 9, 12. What is the secret rule of this pattern?",
        "<strong>Step-by-Step Solution:</strong><br>• The secret rule is: <strong>Add 3 each time (counting by 3s)</strong>.",
        2,
        [{ key: "Add 3 each time", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 11: Numbers (Fifty-one to Hundred)
  // -------------------------------------------------------------------------
  {
    id: "mm11",
    num: 11,
    unit: "Unit 4: Math-Magic Classic",
    title: "Numbers",
    subtitle: "Numbers 51 to 100, Sugarcane Bundles of 10 & 100-Chart",
    concepts: [
      "Extending place value to numbers from 51 to 100.",
      "Grouping by 10s: 5 tens = 50 up to 10 tens = 100.",
      "Writing numerals and number names up to One Hundred.",
      "Completing missing numbers in the 51-100 grid."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 11: Numbers (51 to 100)</text></svg>`,
    cbq: {
      title: "Sugarcane Harvesting Case Study",
      text: "Farmer Sham Lal ties sugarcane stalks into bundles of 10 stalks each. He has 6 full bundles and 4 loose stalks on his cart.",
      question: "How many sugarcane stalks does Sham Lal have in total? How many bundles will he have if he cuts 6 more stalks?",
      answer: "1. 6 bundles of 10 = 60. Loose stalks = 4. Total = 60 + 4 = <strong>64 sugarcane stalks</strong>.<br>2. With 6 more stalks, loose stalks = 4 + 6 = 10 (which makes 1 new bundle).<br>3. Total bundles = 6 + 1 = <strong>7 full bundles of 10 (70 stalks)</strong>.",
      rubric: "1.5 M for 64 stalks + 1.5 M for 7 full bundles"
    },
    questions: [
      makeQ(
        "Textbook Exercise • 5 Bundles and 1 Stick",
        "Write the number for 5 bundles of 10 matchsticks and 1 loose stick.",
        "<strong>Step-by-Step Solution:</strong><br>• 5 tens + 1 one = 50 + 1 = <strong>51 (Fifty-one)</strong>.",
        2,
        [{ key: "51 (Fifty-one)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • 6 Bundles and 5 Sticks",
        "Write the number for 6 bundles of 10 and 5 loose sticks.",
        "<strong>Step-by-Step Solution:</strong><br>• 6 tens + 5 ones = 60 + 5 = <strong>65 (Sixty-five)</strong>.",
        2,
        [{ key: "65 (Sixty-five)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • 7 Bundles and 3 Sticks",
        "Write the number for 7 bundles of 10 and 3 loose sticks.",
        "<strong>Step-by-Step Solution:</strong><br>• 7 tens + 3 ones = 70 + 3 = <strong>73 (Seventy-three)</strong>.",
        2,
        [{ key: "73 (Seventy-three)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • 8 Bundles and 8 Sticks",
        "Write the number for 8 bundles of 10 and 8 loose sticks.",
        "<strong>Step-by-Step Solution:</strong><br>• 8 tens + 8 ones = 80 + 8 = <strong>88 (Eighty-eight)</strong>.",
        2,
        [{ key: "88 (Eighty-eight)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • 9 Bundles and 9 Sticks",
        "Write the number for 9 bundles of 10 and 9 loose sticks. What is special about this number?",
        "<strong>Step-by-Step Solution:</strong><br>• 9 tens + 9 ones = <strong>99 (Ninety-nine)</strong>.<br>• 99 is the <strong>largest 2-digit number</strong>.",
        2,
        [{ key: "99 (Ninety-nine)", marks: "1 M" }, { key: "Largest 2-digit number", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • 10 Bundles of 10",
        "What number is formed by 10 bundles of 10 matchsticks?",
        "<strong>Step-by-Step Solution:</strong><br>• 10 tens = <strong>100 (One Hundred)</strong>.<br>• 100 is the first 3-digit number.",
        2,
        [{ key: "100 (One Hundred)", marks: "1 M" }, { key: "First 3-digit number", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 51 to 60",
        "Fill the missing numbers: 51, 52, __, 54, __, 56, 57, __, 59, 60.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>53, 55, 58</strong>.",
        2,
        [{ key: "Filled 53, 55, 58", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 61 to 70",
        "Fill the missing numbers: 61, __, 63, 64, __, 66, __, 68, 69, 70.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>62, 65, 67</strong>.",
        2,
        [{ key: "Filled 62, 65, 67", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 71 to 80",
        "Fill the missing numbers: 71, 72, __, 74, __, 76, 77, __, 79, 80.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>73, 75, 78</strong>.",
        2,
        [{ key: "Filled 73, 75, 78", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 81 to 90",
        "Fill the missing numbers: 81, __, 83, 84, __, 86, __, 88, 89, 90.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>82, 85, 87</strong>.",
        2,
        [{ key: "Filled 82, 85, 87", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 91 to 100",
        "Fill the missing numbers: 91, 92, __, 94, __, 96, 97, __, 99, 100.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>93, 95, 98</strong>.",
        2,
        [{ key: "Filled 93, 95, 98", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones for 64",
        "Break 64 into Tens and Ones.",
        "<strong>Step-by-Step Solution:</strong><br>• 64 = <strong>6 Tens and 4 Ones</strong>.",
        2,
        [{ key: "6 Tens and 4 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones for 89",
        "Break 89 into Tens and Ones.",
        "<strong>Step-by-Step Solution:</strong><br>• 89 = <strong>8 Tens and 9 Ones</strong>.",
        2,
        [{ key: "8 Tens and 9 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Names 60, 70, 80, 90",
        "Write the spellings for: 60, 70, 80, 90.",
        "<strong>Step-by-Step Solution:</strong><br>• 60 = <strong>Sixty</strong><br>• 70 = <strong>Seventy</strong><br>• 80 = <strong>Eighty</strong><br>• 90 = <strong>Ninety</strong>",
        2,
        [{ key: "All 4 spelled correctly", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Just After 79?",
        "What number comes just after 79?",
        "<strong>Step-by-Step Solution:</strong><br>• 79 + 1 = <strong>80</strong>.",
        2,
        [{ key: "80", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Just Before 90?",
        "What number comes just before 90?",
        "<strong>Step-by-Step Solution:</strong><br>• 90 - 1 = <strong>89</strong>.",
        2,
        [{ key: "89", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Between 65 and 67",
        "What number lies between 65 and 67?",
        "<strong>Step-by-Step Solution:</strong><br>• The number is <strong>66</strong>.",
        2,
        [{ key: "66", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Circle Greater Number (50-100)",
        "Circle the greater number: (a) 54 and 74, (b) 86 and 68.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 7 tens > 5 tens → <strong>74 is greater</strong>.<br>• (b) 8 tens > 6 tens → <strong>86 is greater</strong>.",
        2,
        [{ key: "74 circled", marks: "1 M" }, { key: "86 circled", marks: "1 M" }]
      ),
      makeQ(
        "Word Problem • Marbles in Jars",
        "A jar has 7 bundles of 10 marbles and 5 loose marbles. How many marbles in all?",
        "<strong>Step-by-Step Solution:</strong><br>• 70 + 5 = <strong>75 marbles</strong>.",
        2,
        [{ key: "70 + 5 = 75 marbles", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Match 10s to Hundreds",
        "Match: 10 tens → 100; 5 tens → 50; 8 tens → 80.",
        "<strong>Step-by-Step Solution:</strong><br>• 10 tens = 100<br>• 5 tens = 50<br>• 8 tens = 80",
        2,
        [{ key: "Matches verified", marks: "2 M" }]
      ),
      makeQ(
        "Mental Math • Adding 10 to 60",
        "Solve: 60 + 10 = __.",
        "<strong>Step-by-Step Solution:</strong><br>• 6 tens + 1 ten = 7 tens = <strong>70</strong>.",
        2,
        [{ key: "70", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Century in Cricket",
        "In a cricket match, a player scores 100 runs. What is this score called?",
        "<strong>Step-by-Step Solution:</strong><br>• A score of 100 runs is called a <strong>Century</strong>.",
        2,
        [{ key: "Century", marks: "2 M" }]
      ),
      makeQ(
        "Summary Drill • Count by 10s to 100",
        "Write the numbers counting in tens from 10 to 100.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>10, 20, 30, 40, 50, 60, 70, 80, 90, 100</strong>.",
        2,
        [{ key: "Complete sequence in tens", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 12: Money
  // -------------------------------------------------------------------------
  {
    id: "mm12",
    num: 12,
    unit: "Unit 4: Math-Magic Classic",
    title: "Money",
    subtitle: "Coins, Currency Notes, Combining Coins to Pay Exact Price & Change",
    concepts: [
      "Coins used in India: ₹1, ₹2, ₹5, ₹10.",
      "Notes used in India: ₹10, ₹20, ₹50, ₹100.",
      "Making different amounts using combinations of coins.",
      "Calculating the cost of buying toys and stationery.",
      "Calculating balance change returned by shopkeeper."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 12: Money</text></svg>`,
    cbq: {
      title: "Village Fair Toy Stall Case Study",
      text: "At the village fair, a clay flute costs ₹8 and a paper pinwheel costs ₹4. Meena has a ₹20 note in her purse.",
      question: "What is the total cost of the flute and pinwheel? How much change should the stall owner give back to Meena?",
      answer: "1. Total cost = ₹8 + ₹4 = <strong>₹12</strong>.<br>2. Change returned = ₹20 - ₹12 = <strong>₹8</strong> (e.g. a ₹5 coin, a ₹2 coin, and a ₹1 coin).",
      rubric: "1.5 M for ₹8 + ₹4 = ₹12 + 1.5 M for ₹20 - ₹12 = ₹8 change"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Common Coins in India",
        "Name the four coins shown in the textbook that we use to buy things in India.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>₹1 coin, ₹2 coin, ₹5 coin, and ₹10 coin</strong>.",
        2,
        [{ key: "All 4 coins named", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make ₹1 Using Coins",
        "How do you pay ₹1 using coins?",
        "<strong>Step-by-Step Solution:</strong><br>• Pay with <strong>one ₹1 coin</strong>.",
        2,
        [{ key: "One ₹1 coin", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make ₹2 in Two Different Ways",
        "Show two different ways to pay ₹2 using coins.",
        "<strong>Step-by-Step Solution:</strong><br>• Way 1: One <strong>₹2 coin</strong>.<br>• Way 2: Two <strong>₹1 coins</strong> (₹1 + ₹1 = ₹2).",
        2,
        [{ key: "Way 1: One ₹2 coin", marks: "1 M" }, { key: "Way 2: Two ₹1 coins", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make ₹3 Using Coins",
        "How can you pay ₹3 using ₹1 and ₹2 coins?",
        "<strong>Step-by-Step Solution:</strong><br>• One <strong>₹2 coin</strong> and one <strong>₹1 coin</strong> (₹2 + ₹1 = ₹3).",
        2,
        [{ key: "₹2 + ₹1 = ₹3", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make ₹4 Using Coins",
        "Show two ways to pay ₹4 using coins.",
        "<strong>Step-by-Step Solution:</strong><br>• Way 1: Two <strong>₹2 coins</strong> (₹2 + ₹2 = ₹4).<br>• Way 2: Four <strong>₹1 coins</strong> (₹1 + ₹1 + ₹1 + ₹1 = ₹4).",
        2,
        [{ key: "Two ₹2 coins", marks: "1 M" }, { key: "Four ₹1 coins", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make ₹5 in Different Ways",
        "Show three ways to pay ₹5 using coins.",
        "<strong>Step-by-Step Solution:</strong><br>• Way 1: One <strong>₹5 coin</strong>.<br>• Way 2: Two ₹2 coins and one ₹1 coin (₹2 + ₹2 + ₹1 = ₹5).<br>• Way 3: Five ₹1 coins.",
        3,
        [{ key: "Three valid coin combinations", marks: "3 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make ₹6 Using Coins",
        "How do you pay ₹6 using a ₹5 coin and a ₹1 coin?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹1 = <strong>₹6</strong>.",
        2,
        [{ key: "₹5 + ₹1 = ₹6", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Currency Notes in India",
        "Name three currency notes shown in your textbook.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>₹10 note, ₹20 note, ₹50 note</strong> (and ₹100 note).",
        2,
        [{ key: "Three notes named", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Cost of a Kite",
        "A paper kite costs ₹5. If you buy 2 kites, how much money do you need?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹5 = <strong>₹10</strong>.",
        2,
        [{ key: "₹5 + ₹5 = ₹10", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Cost of Pen and Eraser",
        "A pen costs ₹7 and an eraser costs ₹2. What is the total cost?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹7 + ₹2 = <strong>₹9</strong>.",
        2,
        [{ key: "₹7 + ₹2 = ₹9", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Change from ₹10 Note",
        "Sita buys a pencil for ₹6 and pays with a ₹10 note. How much change does she receive?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹10 - ₹6 = <strong>₹4 change</strong>.",
        2,
        [{ key: "₹10 - ₹6 = ₹4", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Coin Rubbing Impression",
        "Describe what happens when you rub a pencil over paper with a coin beneath.",
        "<strong>Step-by-Step Solution:</strong><br>• The raised metal number (like 5 or 10) and the national emblem emboss clearly on the paper.",
        2,
        [{ key: "Number and emblem emboss on paper", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Can You Pay ₹8 with Three Coins?",
        "Which three coins make ₹8?",
        "<strong>Step-by-Step Solution:</strong><br>• One <strong>₹5 coin</strong>, one <strong>₹2 coin</strong>, and one <strong>₹1 coin</strong>.<br>• ₹5 + ₹2 + ₹1 = <strong>₹8</strong>.",
        2,
        [{ key: "₹5 + ₹2 + ₹1 = ₹8", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Match Price Tags",
        "Match: A ruler for ₹5 → ₹5 coin; A storybook for ₹20 → ₹20 note.",
        "<strong>Step-by-Step Solution:</strong><br>• Ruler = ₹5 coin<br>• Storybook = ₹20 note",
        2,
        [{ key: "Matches verified", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Two Packets of Biscuits",
        "One packet of glucose biscuits costs ₹5. How much do two packets cost?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹5 = <strong>₹10</strong>.",
        2,
        [{ key: "₹5 + ₹5 = ₹10", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • National Emblem on Coins",
        "What animal symbol is engraved on Indian coins?",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>Lion Capital of Ashoka (Four Lions)</strong> is engraved on Indian coins.",
        2,
        [{ key: "Lion Capital / Lions", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Piggy Bank Savings",
        "Aarav saves two ₹10 notes in his piggy bank. How much money has he saved?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹10 + ₹10 = <strong>₹20</strong>.",
        2,
        [{ key: "₹20 saved", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 13: How Many
  // -------------------------------------------------------------------------
  {
    id: "mm13",
    num: 13,
    unit: "Unit 4: Math-Magic Classic",
    title: "How Many",
    subtitle: "Counting Beads, Bundles, Stick Totals, Number Names & Word Problems",
    concepts: [
      "Counting beads on a necklace and loose beads.",
      "Counting bundles of 10 and loose sticks to write numerals.",
      "Writing number names from given collections.",
      "Solving simple everyday word problems combining groups."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 13: How Many</text></svg>`,
    cbq: {
      title: "Pearl Necklace Project Case Study",
      text: "Razia strings 3 necklaces with 10 pearls each and has 9 loose pearls left on her wooden craft tray.",
      question: "How many total pearls does Razia have? How many more loose pearls does she need to complete a 4th necklace of 10?",
      answer: "1. 3 necklaces of 10 = 30 pearls. Loose pearls = 9. Total = 30 + 9 = <strong>39 pearls in all</strong>.<br>2. To make 10 from 9 pearls, she needs: 10 - 9 = <strong>1 more pearl</strong>.",
      rubric: "1.5 M for 30 + 9 = 39 pearls + 1.5 M for 10 - 9 = 1 pearl"
    },
    questions: [
      makeQ(
        "Textbook Exercise • How Many Sticks in Bundles?",
        "Look at the picture: 3 bundles of 10 sticks and 7 loose sticks. Write the numeral.",
        "<strong>Step-by-Step Solution:</strong><br>• 3 tens + 7 ones = 30 + 7 = <strong>37</strong>.",
        2,
        [{ key: "Numeral 37", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • 4 Bundles and 5 Sticks",
        "Write the numeral for 4 bundles of 10 and 5 loose sticks.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 tens + 5 ones = 40 + 5 = <strong>45</strong>.",
        2,
        [{ key: "Numeral 45", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • How Many Beads on String?",
        "A string has 10 beads. There are 2 full strings and 4 loose beads. How many beads in all?",
        "<strong>Step-by-Step Solution:</strong><br>• 2 tens + 4 ones = 20 + 4 = <strong>24 beads</strong>.",
        2,
        [{ key: "24 beads", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • How Many Bananas?",
        "There are 2 bunches of 10 bananas and 3 loose bananas. Write the total count.",
        "<strong>Step-by-Step Solution:</strong><br>• 2 tens + 3 ones = 20 + 3 = <strong>23 bananas</strong>.",
        2,
        [{ key: "23 bananas", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Write the Number Name for 15",
        "Write the number name for 15.",
        "<strong>Step-by-Step Solution:</strong><br>• 15 = <strong>Fifteen</strong>.",
        2,
        [{ key: "Fifteen", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • How Many Tens in 24?",
        "In the number 24, how many tens are there?",
        "<strong>Step-by-Step Solution:</strong><br>• In 24, there are <strong>2 tens</strong> (and 4 ones).",
        2,
        [{ key: "2 tens", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Which is Bigger: 13 or 26?",
        "Which number is bigger: 13 or 26?",
        "<strong>Step-by-Step Solution:</strong><br>• 26 has 2 tens, while 13 has only 1 ten.<br>• Therefore, <strong>26 is bigger</strong>.",
        2,
        [{ key: "26 is bigger", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Cost of 3 Toffees",
        "If 1 toffee costs ₹1, how much do 3 toffees cost?",
        "<strong>Step-by-Step Solution:</strong><br>• 1 toffee = ₹1<br>• 3 toffees = 1 + 1 + 1 = <strong>₹3</strong>.",
        2,
        [{ key: "₹3", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • How Many Birds in Trees?",
        "Tree A has 6 birds. Tree B has 3 birds. How many birds in total?",
        "<strong>Step-by-Step Solution:</strong><br>• 6 + 3 = <strong>9 birds</strong>.",
        2,
        [{ key: "6 + 3 = 9 birds", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Develop a Story on a Picture",
        "A picture shows a girl holding 5 red flowers and giving 2 to her teacher. Write the math sentence.",
        "<strong>Step-by-Step Solution:</strong><br>• Math sentence: <strong>5 - 2 = 3 flowers left</strong>.",
        2,
        [{ key: "5 - 2 = 3 flowers", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Tens and Ones for 43",
        "Write Tens and Ones for 43.",
        "<strong>Step-by-Step Solution:</strong><br>• 43 = <strong>4 Tens and 3 Ones</strong>.",
        2,
        [{ key: "4 Tens and 3 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Match Dots to Numeral",
        "Draw 8 dots in a row and match with the numeral 8.",
        "<strong>Step-by-Step Solution:</strong><br>• (••••••••) = <strong>8 (Eight)</strong>.",
        2,
        [{ key: "8 dots matched to 8", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Name for 47",
        "Write the spelling of 47.",
        "<strong>Step-by-Step Solution:</strong><br>• 47 = <strong>Forty-seven</strong>.",
        2,
        [{ key: "Forty-seven", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting Goats",
        "There are 4 goats eating grass. 2 more goats join them. How many goats altogether?",
        "<strong>Step-by-Step Solution:</strong><br>• 4 + 2 = <strong>6 goats</strong>.",
        2,
        [{ key: "4 + 2 = 6 goats", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Bundles of 10 for 50",
        "How many bundles of 10 make 50?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>5 bundles of 10</strong> make 50.",
        2,
        [{ key: "5 bundles", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Summary of All Math Concepts",
        "Name 3 important things you learned in Class 1 Math-Magic.",
        "<strong>Step-by-Step Solution:</strong><br>• 1. Counting numbers from 1 to 100 using tens and ones.<br>• 2. Addition and subtraction facts.<br>• 3. Shapes, patterns, time, and money.",
        2,
        [{ key: "Three core math areas summarized", marks: "2 M" }]
      )
    ]
  }
];

module.exports = { mathMagicPart3 };
