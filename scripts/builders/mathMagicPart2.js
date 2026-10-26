// scripts/builders/mathMagicPart2.js
// NCERT Class 2 Math-Magic Book 2: Chapters 5 to 8
// Patterns, Footprints, Jugs & Mugs, Tens & Ones

const mathMagicPart2 = [
  {
    id: "mmg5", num: 5, unit: "Unit 5: Patterns & Sequences",
    title: "Patterns",
    subtitle: "Border Patterns, Tile Shapes, Number Patterns & Secret Messages",
    concepts: [
      "Identifying repeating units in border patterns on dupattas, sarees, and iron grills.",
      "Tessellation and tiling: shapes that tile a floor without leaving any gaps.",
      "Number patterns: skip counting by 2s, 3s, 5s, 10s, and finding missing terms.",
      "Decoding secret messages written with alternating letters and numbers."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef2f2" rx="10"/><circle cx="50" cy="50" r="16" fill="#ef4444"/><rect x="80" y="34" width="32" height="32" fill="#3b82f6" rx="3"/><circle cx="140" cy="50" r="16" fill="#ef4444"/><rect x="170" y="34" width="32" height="32" fill="#3b82f6" rx="3"/><circle cx="230" cy="50" r="16" fill="#ef4444"/><rect x="260" y="34" width="32" height="32" fill="#3b82f6" rx="3"/><circle cx="320" cy="50" r="16" fill="#ef4444"/><rect x="350" y="34" width="32" height="32" fill="#3b82f6" rx="3"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#991b1b" text-anchor="middle">Repeating Unit: Circle, Square, Circle, Square...</text></svg>`,
    cbq: {
      title: "School Cleanliness Day Teams (Tens & Ones)",
      text: "Students in a school are forming teams of 10 for Clean School Day. Class 1 has 53 students, Class 2 has 42 students, and Class 3 has 35 students.",
      question: "How many teams of 10 can be made from Class 2? How many students will be left over? If leftover students from all three classes join together, how many additional teams of 10 can they form?",
      answer: "1. For Class 2 (42 students): <strong>4 teams of 10</strong> can be formed, and <strong>2 students</strong> are left over.<br>2. Leftovers from all 3 classes: Class 1 leaves 3, Class 2 leaves 2, Class 3 leaves 5. Total leftovers = 3 + 2 + 5 = 10 students.<br>3. These 10 students form exactly <strong>1 more team of 10</strong> with 0 students remaining.",
      rubric: "1 M for Class 2 teams & leftover + 1 M for total leftovers + 1 M for new team calculation"
    },
    questions: [
      {
        category: "Textbook Exercise • Bindi & Leaf Patterns",
        q: "Look at the pattern on Bini and Ginni's mother's saree border: Leaf pointing UP, Leaf pointing DOWN, Leaf pointing UP, Leaf pointing DOWN... Draw or describe the next two leaves in this pattern.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• The pattern alternates direction: UP, DOWN, UP, DOWN...<br>• The next leaf will point <strong>UP</strong>.<br>• The following leaf will point <strong>DOWN</strong>.",
        marks: 2,
        rubric: [{ key: "Next leaf points UP", marks: "1 M" }, { key: "Following leaf points DOWN", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Iron Grill Patterns",
        q: "Bini and Ginni saw an iron window grill made of curved loop shapes. When they walked in the park, they saw the same grill turned sideways. Can a single pattern unit look different when rotated?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• <strong>Yes</strong>, rotating a design changes its orientation from vertical to horizontal.<br>• The basic shape remains the same, but the overall design appears completely transformed when turned 90 degrees.",
        marks: 2,
        rubric: [{ key: "Affirmative answer (Yes)", marks: "1 M" }, { key: "Rotation effect on pattern explained", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Floor Tiling",
        q: "Why can square and rectangular tiles cover an entire bathroom floor without leaving any empty gaps?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>1. Squares and rectangles have straight edges and 90-degree square corners.<br>2. When placed edge-to-edge, they fit flush against each other, completely covering the flat surface without any gaps or overlaps (this is called <strong>tessellation</strong>).",
        marks: 2,
        rubric: [{ key: "Straight edges & corners fitting flush explained", marks: "1 M" }, { key: "No gaps or overlaps concept", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Number Patterns (Skip Counting)",
        q: "Find the rule and fill in the missing numbers in the following patterns:<br>(a) 20, 30, 40, ___, ___, 70, 80<br>(b) 2, 4, 6, 8, ___, ___, 14",
        ans: "<strong>Step-by-Step Solution:</strong><br>(a) <strong>Rule:</strong> Adding 10 each time.<br>Missing numbers: 40 + 10 = <strong>50</strong>, 50 + 10 = <strong>60</strong>.<br>(b) <strong>Rule:</strong> Adding 2 each time.<br>Missing numbers: 8 + 2 = <strong>10</strong>, 10 + 2 = <strong>12</strong>.",
        marks: 2,
        rubric: [{ key: "(a) 50, 60 with rule +10", marks: "1 M" }, { key: "(b) 10, 12 with rule +2", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Skip by Threes and Fives",
        q: "Fill in the missing numbers:<br>(a) 3, 6, 9, 12, ___, ___, 21<br>(b) 5, 10, 15, 20, ___, ___, 35",
        ans: "<strong>Answers:</strong><br>(a) Rule: Skip counting by 3s.<br>12 + 3 = <strong>15</strong>, 15 + 3 = <strong>18</strong>.<br>(b) Rule: Skip counting by 5s.<br>20 + 5 = <strong>25</strong>, 25 + 5 = <strong>30</strong>.",
        marks: 2,
        rubric: [{ key: "(a) 15, 18", marks: "1 M" }, { key: "(b) 25, 30", marks: "1 M" }]
      },
      {
        category: "NCERT Secret Message • Letter Patterns",
        q: "Shablu wrote a secret message to Jaggu by placing a number before each letter:<br><strong>1G 2O 3O 4D 5M 6O 7R 8N 9I 10N 11G</strong><br>Remove the numbers and decode the secret message.",
        ans: "<strong>Step-by-Step Decoding:</strong><br>• Numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11.<br>• Letters: G - O - O - D - M - O - R - N - I - N - G.<br>• Secret Message: <strong>GOOD MORNING</strong>.",
        marks: 2,
        rubric: [{ key: "Pattern logic identified", marks: "1 M" }, { key: "Correct message 'GOOD MORNING'", marks: "1 M" }]
      },
      {
        category: "Textbook Creative • Secret Message Challenge",
        q: "Write the secret message 'I LOVE MATHS' using alternating numbers (1, 2, 3...).",
        ans: "<strong>Solution:</strong><br>• 1I 2L 3O 4V 5E 6M 7A 8T 9H 10S (or <strong>1I 2L 3O 4V 5E 6M 7A 8T 9H 10S</strong>).",
        marks: 2,
        rubric: [{ key: "Correct application of alternating numbers to message", marks: "2 M" }]
      },
      {
        category: "Odd and Even Number Pattern",
        q: "Look at the pattern of numbers: 95, 96, 97, 98, 99, 100.<br>(a) Which of these end in 5, 7, or 9 (odd)?<br>(b) Which of these end in 6, 8, or 0 (even)?",
        ans: "<strong>Classification:</strong><br>(a) <strong>Odd numbers (ending in 5, 7, 9):</strong> 95, 97, 99.<br>(b) <strong>Even numbers (ending in 6, 8, 0):</strong> 96, 98, 100.",
        marks: 2,
        rubric: [{ key: "Odd numbers identified", marks: "1 M" }, { key: "Even numbers identified", marks: "1 M" }]
      },
      {
        category: "Geometric Growth Pattern",
        q: "Look at the growth pattern:<br>1 circle, then 2 circles, then 3 circles...<br>How many circles will be in the 5th step of this pattern?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Step 1 = 1 circle<br>• Step 2 = 2 circles<br>• Step 3 = 3 circles<br>• Step 4 = 4 circles<br>• Step 5 = <strong>5 circles</strong>.",
        marks: 2,
        rubric: [{ key: "Growth rule identified (+1 circle per step)", marks: "1 M" }, { key: "Step 5 = 5 circles correct", marks: "1 M" }]
      },
      {
        category: "Alphabet Sequence Pattern",
        q: "Complete the alphabet pattern:<br>AA, BB, CC, DD, ___, ___, GG.",
        ans: "<strong>Solution:</strong><br>The pattern doubles each successive English alphabet letter:<br>AA, BB, CC, DD, <strong>EE</strong>, <strong>FF</strong>, GG.",
        marks: 2,
        rubric: [{ key: "Missing pairs EE and FF filled correctly", marks: "2 M" }]
      },
      {
        category: "Backward Counting Pattern",
        q: "Find the rule and fill in the blanks: 40, 38, 36, 34, ___, ___, 28.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• <strong>Rule:</strong> Subtracting 2 at each step (counting backward by 2s).<br>• 34 - 2 = <strong>32</strong><br>• 32 - 2 = <strong>30</strong><br>• Complete sequence: 40, 38, 36, 34, <strong>32</strong>, <strong>30</strong>, 28.",
        marks: 2,
        rubric: [{ key: "Subtracting 2 rule stated", marks: "1 M" }, { key: "Terms 32 and 30 filled correctly", marks: "1 M" }]
      },
      {
        category: "Floor Tile Shape Analysis",
        q: "Can circular plates be used as floor tiles to cover a kitchen floor without any spaces between them? Explain why or why not.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• <strong>No</strong>, circular shapes cannot tile a floor without gaps.<br>• <strong>Reason:</strong> Circles have curved rims. When round plates are placed together touching each other, curved empty spaces (gaps) are always left between them.",
        marks: 2,
        rubric: [{ key: "Negative answer (No)", marks: "1 M" }, { key: "Gaps between touching circles explained", marks: "1 M" }]
      },
      {
        category: "Day & Night Natural Pattern",
        q: "Explain how Day and Night form a natural repeating pattern in our life.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• The Sun rises to give Day, and sets to give Night, followed again by Sunrise and Day.<br>• This cycle repeats continuously every 24 hours without end, making it one of the most fundamental natural patterns on Earth.",
        marks: 2,
        rubric: [{ key: "Day and night cycle described", marks: "1 M" }, { key: "Repeating 24-hour nature explained", marks: "1 M" }]
      },
      {
        category: "Pattern in Multiples of 10",
        q: "What is common among the units digits of the numbers 10, 20, 30, 40, 50, 60, 70, 80, 90, 100?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• In every multiple of 10, the digit in the units (ones) place is always <strong>0</strong>.<br>• Only the tens digit increases by 1 each time.",
        marks: 2,
        rubric: [{ key: "Identifies 0 in ones place", marks: "1 M" }, { key: "Identifies tens digit increasing by 1", marks: "1 M" }]
      },
      {
        category: "Colour Sequence Pattern",
        q: "A string of festival lights flashes in the sequence: Red, Blue, Green, Red, Blue, Green, Red... What colour will the 10th light bulb be?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Repeating unit = Red (1), Blue (2), Green (3) [Group of 3]<br>• 1st=Red, 2nd=Blue, 3rd=Green<br>• 4th=Red, 5th=Blue, 6th=Green<br>• 7th=Red, 8th=Blue, 9th=Green<br>• 10th light bulb = <strong>Red</strong>.",
        marks: 2,
        rubric: [{ key: "Group of 3 cycle identified", marks: "1 M" }, { key: "10th bulb = Red correct", marks: "1 M" }]
      },
      {
        category: "Triangle Orientation Pattern",
        q: "Look at the pattern: ▲, ▼, ▲, ▼, ▲... What will be the 6th and 7th shapes in this pattern?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Odd positions (1st, 3rd, 5th, 7th) = ▲ (Pointing UP)<br>• Even positions (2nd, 4th, 6th) = ▼ (Pointing DOWN)<br>• Therefore, the 6th shape is <strong>▼ (Pointing DOWN)</strong>, and the 7th shape is <strong>▲ (Pointing UP)</strong>.",
        marks: 2,
        rubric: [{ key: "6th shape: ▼", marks: "1 M" }, { key: "7th shape: ▲", marks: "1 M" }]
      },
      {
        category: "Chapter Summary • Pattern Rules",
        q: "What is a pattern in mathematics?",
        ans: "<strong>Definition & Summary:</strong><br>• A pattern is an arrangement of lines, shapes, colours, or numbers that repeats or grows following a definite, predictable <strong>rule</strong>.<br>• By finding the rule, we can easily predict what comes next.",
        marks: 2,
        rubric: [{ key: "Arrangement with definite rule defined", marks: "1 M" }, { key: "Predictive nature of pattern explained", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "What comes next in the pattern: 10A, 20B, 30C, 40D, _____?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Numbers increase by 10: 10, 20, 30, 40 -> 50.<br>• Letters follow the alphabet: A, B, C, D -> E.<br>• The next term is <strong>50E</strong>.",
        marks: 2,
        rubric: [{ key: "Number part 50", marks: "1 M" }, { key: "Letter part E (combined: 50E)", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg6", num: 6, unit: "Unit 6: Geometry & Shapes",
    title: "Footprints",
    subtitle: "Tracing 2D Outlines, Animal Footprints & Tarani's Shapes",
    concepts: [
      "Bholu and animal footprints: matching footprints of elephant, dog, frog, and duck.",
      "Tracing everyday objects (coins, bowls, bottle caps, erasers) to reveal 2D flat shapes.",
      "Recognizing fundamental 2D shapes: Circle, Square, Rectangle, and Triangle.",
      "Tarani's picture puzzle: counting the occurrences of each geometric shape."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="70" cy="55" r="25" fill="#3b82f6"/><rect x="140" y="30" width="50" height="50" fill="#10b981" rx="2"/><rect x="230" y="35" width="70" height="40" fill="#f59e0b" rx="2"/><polygon points="370,30 340,80 400,80" fill="#ec4899"/><text x="70" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Circle</text><text x="165" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#065f46" text-anchor="middle">Square</text><text x="265" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Rectangle</text><text x="370" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#be185d" text-anchor="middle">Triangle</text></svg>`,
    cbq: {
      title: "Tarani's Geometric Robot Puzzle",
      text: "Tarani drew a friendly robot and garden scene using only four basic shapes: Circles for head and wheels, Squares for the body, Rectangles for arms and legs, and Triangles for party hats and tree tops. Her picture contains 12 circles, 5 squares, 8 rectangles, and 7 triangles.",
      question: "Which geometric shape was used the most by Tarani? Which shape was used the least? How many total geometric shapes did she draw altogether?",
      answer: "1. <strong>Most used shape:</strong> <strong>Circle</strong> (12 circles).<br>2. <strong>Least used shape:</strong> <strong>Square</strong> (5 squares).<br>3. <strong>Total shapes drawn:</strong> 12 + 5 + 8 + 7 = <strong>32 shapes</strong>.",
      rubric: "1 M for circle (most) + 1 M for square (least) + 1 M for total sum (32)"
    },
    questions: [
      {
        category: "Textbook Exercise • Bholu's Footprints",
        q: "One morning, Bholu saw footprints of animals on the muddy village pathway. Whose footprint is the biggest: an elephant's footprint or a dog's footprint? Why?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The <strong>elephant's footprint</strong> is the biggest.<br>• <strong>Reason:</strong> An elephant is a huge, heavy animal with massive round feet to support its weight, leaving a very large circular footprint in the mud.",
        marks: 2,
        rubric: [{ key: "Elephant footprint identified as biggest", marks: "1 M" }, { key: "Animal size and foot area explained", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Animal Footprint Matching",
        q: "Match the animal to the shape of its footprint:<br>(a) Duck (b) Dog (c) Elephant<br>Footprint description: (1) Huge round impression (2) Webbed foot with 3 toes (3) Paw print with four toe pads and claw marks",
        ans: "<strong>Matching:</strong><br>• <strong>(a) Duck:</strong> (2) Webbed foot with 3 toes.<br>• <strong>(b) Dog:</strong> (3) Paw print with four toe pads and claw marks.<br>• <strong>(c) Elephant:</strong> (1) Huge round impression.",
        marks: 3,
        rubric: [{ key: "Duck correctly matched", marks: "1 M" }, { key: "Dog correctly matched", marks: "1 M" }, { key: "Elephant correctly matched", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Tracing Outlines",
        q: "When you place a 1-rupee coin on paper and trace along its edge with a pencil, what 2D shape do you get?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• When you trace around the outer edge of a coin, you get a <strong>Circle</strong>.",
        marks: 1,
        rubric: [{ key: "Circle identified correctly", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Tracing a Matchbox",
        q: "If you trace different faces of a matchbox on paper, what shapes do you get? Are all the faces square or rectangular?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• All faces of a standard matchbox are <strong>Rectangles</strong> (some longer, some narrower).<br>• None of the faces are square.",
        marks: 2,
        rubric: [{ key: "Rectangle identified", marks: "1 M" }, { key: "Absence of squares confirmed", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Two Different Shapes from One Object",
        q: "Can you name an object that gives two different shapes when traced from different sides?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A <strong>glass tumbler or steel bowl</strong>:<br>1. Tracing the circular top rim gives a <strong>circle</strong>.<br>2. Placing it on its side and tracing the side profile gives a <strong>trapezium / rectangle</strong> outline.",
        marks: 2,
        rubric: [{ key: "Valid object named (e.g. glass tumbler/bowl/pencil sharpener)", marks: "1 M" }, { key: "Two distinct shapes described", marks: "1 M" }]
      },
      {
        category: "Shape Properties • Square vs Rectangle",
        q: "What is the key difference between a square and a rectangle?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• In a <strong>square</strong>, all 4 sides are equal in length.<br>• In a <strong>rectangle</strong>, opposite sides are equal (it has a longer pair of lengths and a shorter pair of breadths).",
        marks: 2,
        rubric: [{ key: "All 4 sides equal for square", marks: "1 M" }, { key: "Opposite sides equal for rectangle", marks: "1 M" }]
      },
      {
        category: "Shape Identification • Triangle",
        q: "How many sides and how many corners (vertices) does a triangle have? Give two real-world examples of triangular shapes.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A triangle has <strong>3 straight sides</strong> and <strong>3 corners</strong>.<br>• <strong>Examples:</strong> A slice of pizza, a samosa, a traffic yield sign, or the roof of a hut.",
        marks: 2,
        rubric: [{ key: "3 sides and 3 corners stated", marks: "1 M" }, { key: "Two valid real-world examples", marks: "1 M" }]
      },
      {
        category: "Shape Identification • Circle",
        q: "Does a circle have any straight sides or sharp corners? Name two things you wear that are circular.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>No</strong>, a circle has no straight sides and <strong>no corners</strong>; it is a single smooth closed curve.<br>• <strong>Circular things worn:</strong> Bangles, wrist watches (dial), finger rings.",
        marks: 2,
        rubric: [{ key: "No corners / straight sides stated", marks: "1 M" }, { key: "Two wearable items named", marks: "1 M" }]
      },
      {
        category: "Dress-Up Activity • Shapes for Dancer",
        q: "In the NCERT activity, children dress up a classical dancer using shapes:<br>(a) Draw earrings using triangles.<br>(b) Draw a bindi using a circle.<br>(c) Draw bangles using circles.<br>Explain why bangles are always shaped like circles.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Bangles are circular because human wrists and hands are rounded.<br>• A circular ring slips smoothly over the hand onto the wrist without sharp corners hurting the skin.",
        marks: 2,
        rubric: [{ key: "Wrist anatomy connection", marks: "1 M" }, { key: "Smooth circular fit without corners explained", marks: "1 M" }]
      },
      {
        category: "Tracing Kitchen Utensils",
        q: "Look around your kitchen. What shape will you get if you trace around the base of:<br>(a) A spice container jar lid<br>(b) A rectangular sandwich biscuit",
        ans: "<strong>Answers:</strong><br>(a) A spice jar lid gives a <strong>Circle</strong>.<br>(b) A rectangular sandwich biscuit gives a <strong>Rectangle</strong>.",
        marks: 2,
        rubric: [{ key: "(a) Circle", marks: "1 M" }, { key: "(b) Rectangle", marks: "1 M" }]
      },
      {
        category: "Footprint Investigation",
        q: "Whose footprint will be smaller: a baby's footprint or your mother's footprint? Why?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The <strong>baby's footprint</strong> will be much smaller.<br>• A baby's feet are tiny because their body is still growing, whereas an adult mother has fully grown feet.",
        marks: 2,
        rubric: [{ key: "Baby's footprint identified as smaller", marks: "1 M" }, { key: "Growth reason provided", marks: "1 M" }]
      },
      {
        category: "Drawing with Shapes",
        q: "Can you draw a house using 1 triangle, 1 square, and 2 rectangles? Describe where each shape will go.",
        ans: "<strong>Step-by-Step Description:</strong><br>• <strong>Square:</strong> The main wall/room of the house.<br>• <strong>Triangle:</strong> The sloping roof placed on top of the square.<br>• <strong>Rectangle 1:</strong> The front door.<br>• <strong>Rectangle 2:</strong> A window or the chimney on the roof.",
        marks: 2,
        rubric: [{ key: "All 4 shapes allocated logically", marks: "2 M" }]
      },
      {
        category: "Flat Shapes vs Solid Objects",
        q: "Is a football a circle or a sphere? Explain the difference to a Class 2 student.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• A football is a <strong>sphere</strong> (a 3D solid ball that you can hold in your hands).<br>• A circle is a <strong>flat 2D shape</strong> drawn on a flat sheet of paper (like drawing a round coin outline).",
        marks: 2,
        rubric: [{ key: "Football identified as sphere", marks: "1 M" }, { key: "Difference between 3D solid and 2D drawing explained", marks: "1 M" }]
      },
      {
        category: "Leaf Tracing Activity",
        q: "What happens when you place a fallen peepal or mango leaf under a sheet of paper and rub gently over it with a crayon?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• The crayon catches the raised veins and outer border of the leaf.<br>• A beautiful, detailed <strong>leaf print/rubbing</strong> showing the leaf's shape and vein pattern appears on the paper.",
        marks: 2,
        rubric: [{ key: "Leaf rubbing technique explained", marks: "1 M" }, { key: "Appearance of veins and border noted", marks: "1 M" }]
      },
      {
        category: "Counting Corners (Vertices)",
        q: "How many corners are there in:<br>(a) A square<br>(b) A rectangle<br>(c) A circle<br>(d) A triangle",
        ans: "<strong>Answers:</strong><br>(a) Square: <strong>4 corners</strong><br>(b) Rectangle: <strong>4 corners</strong><br>(c) Circle: <strong>0 corners</strong><br>(d) Triangle: <strong>3 corners</strong>",
        marks: 2,
        rubric: [{ key: "All 4 counts correct", marks: "2 M (0.5 M each)" }]
      },
      {
        category: "Shape Riddle",
        q: "I have 4 sides. All my 4 sides are exactly equal in length. I have 4 corners. What shape am I?",
        ans: "<strong>Answer:</strong><br>• You are a <strong>Square</strong>.",
        marks: 1,
        rubric: [{ key: "Square identified correctly", marks: "1 M" }]
      },
      {
        category: "Hands-on Geometry",
        q: "Take a square piece of origami craft paper. If you fold it diagonally from corner to opposite corner, what shape do you get?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Folding a square along its diagonal divides it cleanly into two equal halves.<br>• Each half is a <strong>Triangle</strong>.",
        marks: 2,
        rubric: [{ key: "Triangle identified", marks: "1 M" }, { key: "Diagonal folding logic explained", marks: "1 M" }]
      },
      {
        category: "Chapter Summary",
        q: "What is the main lesson we learn from Chapter 6 'Footprints'?",
        ans: "<strong>Summary:</strong><br>1. Every 3D physical object leaves a 2D flat footprint or trace when pressed or outlined.<br>2. By tracing everyday objects, we discover the four basic geometric shapes: circles, squares, rectangles, and triangles.<br>3. Complex pictures and living creatures can be represented using combinations of these shapes.",
        marks: 3,
        rubric: [{ key: "2D outline from 3D object concept", marks: "1 M" }, { key: "Four basic geometric shapes named", marks: "1 M" }, { key: "Composite drawings with shapes", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg7", num: 7, unit: "Unit 7: Measurement of Capacity",
    title: "Jugs and Mugs",
    subtitle: "Lemon Drink Stall, Measuring Liquid Volume, The Thirsty Crow",
    concepts: [
      "Understanding liquid capacity (volume) using non-standard units (glasses, mugs, spoons, jugs).",
      "Setting up a Lemon Drink (Nimbu Paani) stall: calculating ingredients for multiple glasses.",
      "Comparing capacity of containers: which holds the most, which holds the least.",
      "The Thirsty Crow experiment: water level rises when stones/pebbles are dropped in."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><rect x="60" y="40" width="40" height="50" fill="#fde047" stroke="#ca8a04" stroke-width="2" rx="3"/><rect x="150" y="30" width="60" height="65" fill="#facc15" stroke="#a16207" stroke-width="2" rx="4"/><path d="M 270 95 L 300 35 L 340 35 L 370 95 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><text x="80" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#713f12" text-anchor="middle">Glass (Small)</text><text x="180" y="110" font-family="sans-serif" font-size="11" font-weight="700" fill="#713f12" text-anchor="middle">Mug (Medium)</text><text x="320" y="110" font-family="sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Pitcher / Jug (Large)</text></svg>`,
    cbq: {
      title: "School Village Fair Nimbu Paani Stall",
      text: "Chaitra, Nazma, and Shabnam set up a Lemon Drink stall at the village fair. To make 1 glass of lemon drink, they need: half a lemon, 2 spoonfuls of sugar, and 1 pinch of salt. They sell small glasses for ₹5 and big glasses for ₹10.",
      question: "How many whole lemons are needed to make 6 glasses of lemon drink? If they sell 8 small glasses and 4 big glasses, how much total money do they earn?",
      answer: "1. 1 glass needs 1/2 lemon. For 6 glasses, they need: 6 × 1/2 = <strong>3 whole lemons</strong>.<br>2. Money from small glasses: 8 × ₹5 = ₹40.<br>3. Money from big glasses: 4 × ₹10 = ₹40.<br>4. Total money earned = ₹40 + ₹40 = <strong>₹80</strong>.",
      rubric: "1 M for lemons calculation (3) + 1 M for glass sales breakdown + 1 M for total earnings (₹80)"
    },
    questions: [
      {
        category: "Textbook Exercise • Nimbu Paani Ingredients",
        q: "To make 1 glass of lemon drink, you need 2 spoons of sugar. How many spoons of sugar are needed to make 5 glasses of lemon drink?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Sugar for 1 glass = 2 spoons<br>• Sugar for 5 glasses = 5 × 2 = <strong>10 spoons of sugar</strong>.",
        marks: 2,
        rubric: [{ key: "Multiplication 5 × 2 shown", marks: "1 M" }, { key: "10 spoons calculated correctly", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Filling Containers",
        q: "Sunaina and Jaspreet brought different vessels from their kitchen: a cup, a glass, a small pot, and a jug. Which vessel holds the least water? Which vessel holds the most water?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The <strong>cup</strong> holds the least water.<br>• The <strong>jug (or large pot)</strong> holds the most water.",
        marks: 2,
        rubric: [{ key: "Cup identified as holding least", marks: "1 M" }, { key: "Jug/pot identified as holding most", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Glasses to Fill a Jug",
        q: "Jaspreet found that 1 jug can be filled completely with 8 glasses of water. How many glasses of water are needed to fill 2 such jugs?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 1 jug = 8 glasses<br>• 2 jugs = 8 × 2 = <strong>16 glasses of water</strong>.",
        marks: 2,
        rubric: [{ key: "Multiplication 8 × 2 shown", marks: "1 M" }, { key: "16 glasses correct", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Capacity Comparison",
        q: "A small bowl takes 3 cups of water to fill. A soup bowl takes 5 cups of water to fill. Which bowl has greater capacity and by how many cups?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Small bowl = 3 cups<br>• Soup bowl = 5 cups<br>• Since 5 > 3, the <strong>soup bowl has greater capacity</strong>.<br>• Difference = 5 - 3 = <strong>2 cups more</strong>.",
        marks: 2,
        rubric: [{ key: "Soup bowl identified", marks: "1 M" }, { key: "Difference of 2 cups calculated", marks: "1 M" }]
      },
      {
        category: "NCERT Story • Thirsty Crow Experiment",
        q: "Chirpy the crow was very thirsty. There was very little water in the pitcher at the bottom, and his beak could not reach it. Chirpy picked up pebbles one by one and dropped them into the pitcher. What happened to the water level?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• As pebbles sank to the bottom of the pitcher, they took up space (volume).<br>• This displaced the water and pushed the <strong>water level up</strong> until Chirpy could drink easily and fly away happily.",
        marks: 2,
        rubric: [{ key: "Pebbles taking up volume explained", marks: "1 M" }, { key: "Water level rising stated", marks: "1 M" }]
      },
      {
        category: "Textbook Activity • Drops in a Spoon",
        q: "Using an eye dropper, guess how many drops of water will fill a teaspoon. If it takes about 20 to 25 drops, will a tablespoon take more drops or fewer drops?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A tablespoon is much bigger than a teaspoon.<br>• Therefore, it will take <strong>more drops</strong> (around 60 to 75 drops) to fill a tablespoon.",
        marks: 2,
        rubric: [{ key: "More drops identified", marks: "1 M" }, { key: "Tablespoon size comparison explained", marks: "1 M" }]
      },
      {
        category: "NCERT Investigation • The Milkman Mystery",
        q: "Rani's mother takes milk from Shyamu the milkman every day. Shyamu uses his metal mug 3 times to fill Rani's pot. One day, Rani brought a wide flat vessel, and the milk reached only halfway up. Did the milkman give less milk that day? Explain.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• <strong>No</strong>, the milkman gave the exact same amount of milk (3 full mugs).<br>• <strong>Reason:</strong> The wide flat vessel has a broader bottom, so the same volume of milk spreads out sideways and appears lower in height. Liquid changes its shape to match the container without changing its quantity.",
        marks: 3,
        rubric: [{ key: "Affirmative confirmation: same milk given", marks: "1 M" }, { key: "Wider container bottom spreads liquid explained", marks: "1 M" }, { key: "Volume conservation concept", marks: "1 M" }]
      },
      {
        category: "Ordering Containers by Capacity",
        q: "Arrange these 4 containers in order from LEAST capacity to GREATEST capacity: Bucket, Teaspoon, Water Bottle, Mug.",
        ans: "<strong>Arrangement (Least to Greatest):</strong><br>1. <strong>Teaspoon</strong> (holds smallest amount)<br>2. <strong>Mug</strong><br>3. <strong>Water Bottle</strong><br>4. <strong>Bucket</strong> (holds largest amount).",
        marks: 2,
        rubric: [{ key: "Correct order from teaspoon to bucket", marks: "2 M" }]
      },
      {
        category: "Everyday Math • Drinking Water Goal",
        q: "Doctor uncle advises Rahul to drink 8 glasses of water every day. If Rahul drinks 2 glasses in the morning, 3 glasses in the afternoon, and 2 glasses in the evening, has he reached his goal? How many more glasses should he drink?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Water drunk so far = 2 + 3 + 2 = 7 glasses.<br>• Daily target = 8 glasses.<br>• Rahul has not reached his goal yet. He needs to drink: 8 - 7 = <strong>1 more glass</strong>.",
        marks: 2,
        rubric: [{ key: "Sum of 7 glasses calculated", marks: "1 M" }, { key: "1 more glass needed correct", marks: "1 M" }]
      },
      {
        category: "Practical Conservation • Water Waste",
        q: "A leaking bathroom tap drips 1 cup of water every hour. How many cups of clean water are wasted in 6 hours?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Water wasted in 1 hour = 1 cup<br>• Water wasted in 6 hours = 6 × 1 = <strong>6 cups of water</strong>.",
        marks: 2,
        rubric: [{ key: "Multiplication 6 × 1 shown", marks: "1 M" }, { key: "6 cups answer correct", marks: "1 M" }]
      },
      {
        category: "Capacity Unit Sense",
        q: "Which unit would be more suitable to measure the water in an overhead water tank: mugs or buckets?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• An overhead water tank holds hundreds of litres of water.<br>• <strong>Buckets</strong> are much more suitable than tiny mugs to measure such a large volume.",
        marks: 1,
        rubric: [{ key: "Buckets selected with reason", marks: "1 M" }]
      },
      {
        category: "Comparative Problem • Water Bottle Capacity",
        q: "Arun's water bottle holds 4 glasses of water. Geeta's water bottle holds 6 glasses of water. If both pour their full bottles into an empty jug, how many glasses of water are in the jug?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Arun's bottle = 4 glasses<br>• Geeta's bottle = 6 glasses<br>• Total water in jug = 4 + 6 = <strong>10 glasses of water</strong>.",
        marks: 2,
        rubric: [{ key: "Addition 4 + 6 shown", marks: "1 M" }, { key: "10 glasses answer correct", marks: "1 M" }]
      },
      {
        category: "Hands-on Science • Marble Displacement",
        q: "A transparent glass is filled halfway with water. If you gently drop 5 glass marbles into the water, what happens to the water level?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The water level <strong>rises higher</strong>.<br>• The solid marbles take up space at the bottom and push the water upwards.",
        marks: 2,
        rubric: [{ key: "Water level rises stated", marks: "1 M" }, { key: "Displacement explanation", marks: "1 M" }]
      },
      {
        category: "Everyday Cooking • Rice Pot",
        q: "To cook 1 cup of rice, mother adds 2 cups of water. How many cups of water must she add to cook 3 cups of rice?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 1 cup rice = 2 cups water<br>• 3 cups rice = 3 × 2 = <strong>6 cups of water</strong>.",
        marks: 2,
        rubric: [{ key: "3 × 2 shown", marks: "1 M" }, { key: "6 cups of water correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A tea cup holds more liquid than a bucket.<br>(b) Pouring water from a tall thin bottle into a round bowl changes the total amount of water.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. A bucket holds much more liquid than a tiny tea cup.<br>(b) <strong>False</strong>. Pouring changes the shape of the liquid, but the total amount (volume) remains exactly the same.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) False with volume conservation reason", marks: "1 M" }]
      },
      {
        category: "Bucket Bath vs Shower",
        q: "Taking a bath with 1 bucket of water uses about 15 litres. A 10-minute running shower uses about 60 litres. Which uses less water and helps save water?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>A bucket bath</strong> uses only 15 litres compared to 60 litres for a shower.<br>• Taking a bucket bath saves 45 litres of clean water every time and is very environment-friendly.",
        marks: 2,
        rubric: [{ key: "Bucket bath identified as using less water", marks: "1 M" }, { key: "Water saving calculation (60 - 15 = 45 litres)", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What does the word 'capacity' mean in simple words?",
        ans: "<strong>Definition:</strong><br>• <strong>Capacity</strong> is the maximum amount of liquid (like water, milk, or juice) that a container can hold inside it.",
        marks: 1,
        rubric: [{ key: "Clear simple definition of capacity", marks: "1 M" }]
      },
      {
        category: "Quick Math Problem",
        q: "If 1 teapot fills 4 cups of tea, how many teapots are needed to serve 12 cups of tea to guests?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 1 teapot = 4 cups<br>• Teapots needed for 12 cups = 12 ÷ 4 = <strong>3 teapots</strong>.",
        marks: 2,
        rubric: [{ key: "Division 12 ÷ 4 shown", marks: "1 M" }, { key: "3 teapots calculated correctly", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg8", num: 8, unit: "Unit 8: Place Value & Currency",
    title: "Tens and Ones",
    subtitle: "Uncle's Shop, Notes and Coins, Ring Throw & Token Cards",
    concepts: [
      "Decomposing money amounts into ₹10 currency notes and ₹1 coins.",
      "Splitting 2-digit numbers into tens and ones (e.g. 19 = 10 + 9, 45 = 40 + 5).",
      "Ring throw game: calculating total score using red dots (10 points) and green dots (1 point).",
      "Token card representation: using square [10] and triangle [1] cards to count collections."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><rect x="60" y="35" width="80" height="45" fill="#047857" rx="4"/><text x="100" y="62" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">₹10 Note</text><circle cx="200" cy="58" r="16" fill="#f59e0b" stroke="#b45309" stroke-width="2"/><text x="200" y="63" font-family="sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">₹1</text><circle cx="240" cy="58" r="16" fill="#f59e0b" stroke="#b45309" stroke-width="2"/><text x="240" y="63" font-family="sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">₹1</text><circle cx="280" cy="58" r="16" fill="#f59e0b" stroke="#b45309" stroke-width="2"/><text x="280" y="63" font-family="sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">₹1</text><text x="390" y="62" font-family="sans-serif" font-size="13" font-weight="800" fill="#065f46" text-anchor="middle">₹10 + ₹3 = ₹13</text></svg>`,
    cbq: {
      title: "Stationery Uncle's Exact Change Rule",
      text: "Uncle runs a school bookshop. He tells children: 'I have only 10-rupee notes and 1-rupee coins. Give me exact money for your purchase.' Priya buys a notebook for ₹24, Aman buys a sketch pen set for ₹37, and Rohan buys a geometry box for ₹50.",
      question: "How many ₹10 notes and how many ₹1 coins must Priya give? How many ₹10 notes and ₹1 coins must Aman give? What must Rohan give?",
      answer: "1. <strong>Priya (₹24):</strong> Two ₹10 notes (₹20) and 4 one-rupee coins (₹4).<br>2. <strong>Aman (₹37):</strong> Three ₹10 notes (₹30) and 7 one-rupee coins (₹7).<br>3. <strong>Rohan (₹50):</strong> Five ₹10 notes (₹50) and 0 one-rupee coins.",
      rubric: "1 M for Priya (2 notes + 4 coins) + 1 M for Aman (3 notes + 7 coins) + 1 M for Rohan (5 notes + 0 coins)"
    },
    questions: [
      {
        category: "Textbook Exercise • Money Breakdown",
        q: "How many 10-rupee notes and 1-rupee coins do you need to pay for:<br>(a) A doll costing ₹18<br>(b) A water bottle costing ₹43",
        ans: "<strong>Step-by-Step Solution:</strong><br>(a) ₹18 = One ₹10 note and 8 one-rupee coins.<br>(b) ₹43 = Four ₹10 notes and 3 one-rupee coins.",
        marks: 2,
        rubric: [{ key: "(a) 1 note of ₹10 + 8 coins of ₹1", marks: "1 M" }, { key: "(b) 4 notes of ₹10 + 3 coins of ₹1", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • How Much Money?",
        q: "Count the total money:<br>(a) 3 notes of ₹10 and 5 coins of ₹1 = ₹______<br>(b) 6 notes of ₹10 and 2 coins of ₹1 = ₹______",
        ans: "<strong>Answers:</strong><br>(a) (3 × 10) + 5 = 30 + 5 = <strong>₹35</strong><br>(b) (6 × 10) + 2 = 60 + 2 = <strong>₹62</strong>",
        marks: 2,
        rubric: [{ key: "(a) ₹35", marks: "1 M" }, { key: "(b) ₹62", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Break-Up of Numbers",
        q: "Break up the following numbers into tens and ones:<br>(a) 27 = 20 + 7<br>(b) 31 = ___ + ___<br>(c) 54 = ___ + ___<br>(d) 89 = ___ + ___",
        ans: "<strong>Answers:</strong><br>(b) 31 = <strong>30 + 1</strong><br>(c) 54 = <strong>50 + 4</strong><br>(d) 89 = <strong>80 + 9</strong>",
        marks: 3,
        rubric: [{ key: "(b) 30 + 1", marks: "1 M" }, { key: "(c) 50 + 4", marks: "1 M" }, { key: "(d) 80 + 9", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Bangle Throw Game",
        q: "Karma and Gesar are playing a bangle throw game on a board with dots. Each RED dot counts for 10 points. Each GREEN dot counts for 1 point.<br>Karma's ring encircles 4 red dots and 4 green dots. What is Karma's total score?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 4 red dots = 4 × 10 = 40 points<br>• 4 green dots = 4 × 1 = 4 points<br>• Karma's total score = 40 + 4 = <strong>44 points</strong>.",
        marks: 2,
        rubric: [{ key: "Red dots = 40, Green dots = 4 shown", marks: "1 M" }, { key: "Total 44 points correct", marks: "1 M" }]
      },
      {
        category: "Bangle Throw Game • Round 2",
        q: "In round 2 of the bangle throw game, Gesar's ring encircles 3 red dots and 6 green dots. Karma's ring encircles 2 red dots and 8 green dots. Who won round 2?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Gesar's score = (3 × 10) + 6 = 30 + 6 = 36 points.<br>• Karma's score = (2 × 10) + 8 = 20 + 8 = 28 points.<br>• Since 36 > 28, <strong>Gesar won round 2</strong>.",
        marks: 2,
        rubric: [{ key: "Gesar 36, Karma 28 calculated", marks: "1 M" }, { key: "Gesar identified as winner", marks: "1 M" }]
      },
      {
        category: "NCERT Flute Man • Rat Token Cards",
        q: "The Flute Man in the story uses cards to count the town's rats:<br>• A yellow square card [10] represents 10 rats.<br>• A blue triangle card [1] represents 1 rat.<br>Which cards will he use to show 23 rats?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• In 23, there are 2 tens and 3 ones.<br>• Flute Man uses: <strong>Two [10] cards</strong> and <strong>three [1] cards</strong>.",
        marks: 2,
        rubric: [{ key: "Two [10] cards identified", marks: "1 M" }, { key: "Three [1] cards identified", marks: "1 M" }]
      },
      {
        category: "Token Card Decoding",
        q: "What number of rats is shown by four [10] cards and seven [1] cards?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 4 cards of [10] = 4 × 10 = 40<br>• 7 cards of [1] = 7 × 1 = 7<br>• Total number = 40 + 7 = <strong>47 rats</strong>.",
        marks: 2,
        rubric: [{ key: "40 + 7 shown", marks: "1 M" }, { key: "47 rats correct", marks: "1 M" }]
      },
      {
        category: "Money Problem • School Canteen",
        q: "Anita buys a samosa for ₹12 and a fruit juice for ₹15. How many 10-rupee notes and 1-rupee coins does she need to pay the total bill?",
        ans: "<strong>Step-by-Step Solution:</strong><br>1. Total cost = 12 + 15 = ₹27.<br>2. In ₹27, tens = 2 and ones = 7.<br>3. She needs <strong>two ₹10 notes</strong> and <strong>7 one-rupee coins</strong>.",
        marks: 2,
        rubric: [{ key: "Total bill ₹27 calculated", marks: "1 M" }, { key: "2 notes of ₹10 + 7 coins of ₹1", marks: "1 M" }]
      },
      {
        category: "Tens and Ones Addition",
        q: "Add using tens and ones breakdown:<br>25 + 32 = (20 + 5) + (30 + 2)",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Add tens: 20 + 30 = 50<br>• Add ones: 5 + 2 = 7<br>• Total sum = 50 + 7 = <strong>57</strong>.",
        marks: 2,
        rubric: [{ key: "Tens sum (50) and ones sum (7) shown", marks: "1 M" }, { key: "Final sum 57 correct", marks: "1 M" }]
      },
      {
        category: "Word Problem • Library Books",
        q: "A librarian has 76 storybooks. How many bundles of 10 books can he tie? How many loose books will remain?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• In 76, tens = 7 and ones = 6.<br>• He can tie <strong>7 bundles of 10 books</strong>.<br>• <strong>6 loose books</strong> will remain.",
        marks: 2,
        rubric: [{ key: "7 bundles of 10", marks: "1 M" }, { key: "6 loose books", marks: "1 M" }]
      },
      {
        category: "Money Thinking • Exact Change",
        q: "If an item costs ₹30, what is the least number of 10-rupee notes you can use to pay without using any 1-rupee coins?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 30 ÷ 10 = <strong>3 notes of ₹10</strong>.",
        marks: 1,
        rubric: [{ key: "3 notes of ₹10 identified", marks: "1 M" }]
      },
      {
        category: "Place Value Reversal",
        q: "What number has 6 in the ones place and 4 in the tens place? Is it 64 or 46?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Tens place = 4 (value = 40)<br>• Ones place = 6 (value = 6)<br>• Number = 40 + 6 = <strong>46</strong> (not 64).",
        marks: 2,
        rubric: [{ key: "Tens and ones value written", marks: "1 M" }, { key: "46 correctly chosen", marks: "1 M" }]
      },
      {
        category: "Mental Math • Quick Break",
        q: "Can you break 19 into 10 + 9? Now write the break-up for: 11, 15, and 17.",
        ans: "<strong>Answers:</strong><br>• 11 = <strong>10 + 1</strong><br>• 15 = <strong>10 + 5</strong><br>• 17 = <strong>10 + 7</strong>",
        marks: 3,
        rubric: [{ key: "10 + 1", marks: "1 M" }, { key: "10 + 5", marks: "1 M" }, { key: "10 + 7", marks: "1 M" }]
      },
      {
        category: "Token Card Exercise",
        q: "A student drew five [10] cards and two [1] cards. Then his friend gave him one more [10] card and three [1] cards. What is his new total number?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Initial cards = (5 × 10) + 2 = 52<br>• Added cards = (1 × 10) + 3 = 13<br>• New total = 52 + 13 = <strong>65</strong>.<br>(Alternatively: 5 tens + 1 ten = 6 tens; 2 ones + 3 ones = 5 ones -> 65).",
        marks: 2,
        rubric: [{ key: "Step-by-step tens and ones addition", marks: "1 M" }, { key: "Total 65 calculated correctly", marks: "1 M" }]
      },
      {
        category: "Comparative Value Problem",
        q: "Which represents more money: 5 notes of ₹10 OR 40 coins of ₹1? Explain by finding both amounts.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 5 notes of ₹10 = 5 × 10 = ₹50.<br>• 40 coins of ₹1 = 40 × 1 = ₹40.<br>• Since ₹50 > ₹40, <strong>5 notes of ₹10 is more money</strong> (by ₹10).",
        marks: 2,
        rubric: [{ key: "Both amounts ₹50 and ₹40 calculated", marks: "1 M" }, { key: "5 notes of ₹10 identified as more", marks: "1 M" }]
      },
      {
        category: "Zero in Tens & Ones",
        q: "What does the 0 represent in the number 70?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• In 70, the 0 represents <strong>zero ones</strong>.<br>• It acts as a place-holder to show that there are exactly 7 full tens and no loose units remaining.",
        marks: 2,
        rubric: [{ key: "Zero ones explained", marks: "1 M" }, { key: "Place-holder concept explained", marks: "1 M" }]
      },
      {
        category: "Chapter Summary",
        q: "Why is breaking numbers into tens and ones useful when adding or shopping?",
        ans: "<strong>Summary:</strong><br>1. Breaking into tens and ones simplifies mental calculation (we can add tens first, then ones).<br>2. In daily shopping, it directly matches real currency notes (₹10 notes) and coins (₹1 coins), making payment fast and error-free.",
        marks: 2,
        rubric: [{ key: "Mental addition simplification", marks: "1 M" }, { key: "Currency notes connection", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "How many ₹10 notes make ₹100?",
        ans: "<strong>Calculation:</strong><br>• 100 ÷ 10 = <strong>10 notes of ₹10</strong>.",
        marks: 1,
        rubric: [{ key: "10 notes of ₹10 correct", marks: "1 M" }]
      }
    ]
  }
];

module.exports = { mathMagicPart2 };
