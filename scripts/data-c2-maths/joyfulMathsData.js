// scripts/data-c2-maths/joyfulMathsData.js
// Official NCERT Class 2 Mathematics (Joyful Mathematics) Complete Dataset

const joyfulMathsChapters = [
  {
    "id": "jm1",
    "num": 1,
    "unit": "Unit 1: Joyful Numbers",
    "title": "A Day at the Beach",
    "subtitle": "Counting in Groups, Pairs & Estimating Collections",
    "concepts": [
      "Counting objects by grouping into pairs (twos) and fives.",
      "Estimating quantities visually before counting exact amounts.",
      "Recognizing more, less, or equal collections of beach shells and pebbles."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"80\" cy=\"60\" r=\"24\" fill=\"#3b82f6\"/><circle cx=\"120\" cy=\"60\" r=\"24\" fill=\"#3b82f6\"/><circle cx=\"200\" cy=\"60\" r=\"24\" fill=\"#10b981\"/><circle cx=\"240\" cy=\"60\" r=\"24\" fill=\"#10b981\"/><circle cx=\"320\" cy=\"60\" r=\"24\" fill=\"#f59e0b\"/><circle cx=\"360\" cy=\"60\" r=\"24\" fill=\"#f59e0b\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">3 Pairs of Shells = 2 + 2 + 2 = 6 Shells</text></svg>",
    "cbq": {
      "title": "Seashell Collection Project",
      "text": "Meena collects 14 seashells on the shore. Her brother collects 18 seashells. Meena groups her shells into pairs of 2.",
      "question": "How many pairs does Meena form? How many total seashells did both children collect altogether?",
      "answer": "1. Meena has 14 shells. Since 1 pair = 2 shells, 14 ÷ 2 = 7 pairs.<br>2. Total seashells = 14 + 18 = 32 seashells.",
      "rubric": "1.5 M for pairs calculation + 1.5 M for total sum"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Group Counting",
        "q": "Look at the starfish on the sand. There are 4 groups with 2 starfish in each group. How many starfish are there in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Number of groups = 4<br>• Starfish in each group = 2<br>• Total starfish = 2 + 2 + 2 + 2 = <strong>8 starfish</strong> (or 4 × 2 = 8).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct addition/multiplication sentence",
            "marks": "1 M"
          },
          {
            "key": "Final answer with unit (8 starfish)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Visual Estimation • Pairs",
        "q": "Rohit has 11 flip-flops (slippers). Can he make complete pairs without any slipper left over? Explain your answer.",
        "ans": "<strong>Answer:</strong><br>• A pair requires 2 items.<br>• 11 = 2 + 2 + 2 + 2 + 2 + 1.<br>• Rohit makes <strong>5 complete pairs</strong> and <strong>1 slipper is left over</strong>. Therefore, 11 is an odd number and cannot form complete pairs.",
        "marks": 3,
        "rubric": [
          {
            "key": "Division into pairs (5 pairs)",
            "marks": "1.5 M"
          },
          {
            "key": "Identification of 1 remainder / odd number",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Word Problem • Shells on the Beach",
        "q": "Aarav found 15 white shells and 9 brown shells on the beach. How many shells did he find in all? Which shells were more and by how many?",
        "ans": "<strong>Calculation:</strong><br>1. White shells = 15<br>2. Brown shells = 9<br>3. Total shells = 15 + 9 = <strong>24 shells</strong>.<br>4. Comparison: White shells (15) are more than Brown shells (9).<br>5. Difference = 15 - 9 = <strong>6 more white shells</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total shells (15 + 9 = 24)",
            "marks": "1.5 M"
          },
          {
            "key": "Comparison and difference (15 - 9 = 6)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Skip Counting",
        "q": "Complete the skip-counting chain: 2, 4, 6, __, __, 12, __, 16.",
        "ans": "<strong>Answer:</strong><br>The rule is adding 2 each time:<br>2, 4, 6, <strong>8</strong>, <strong>10</strong>, 12, <strong>14</strong>, 16.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled in 8, 10, 14 correctly",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm2",
    "num": 2,
    "unit": "Unit 1: Joyful Numbers",
    "title": "Shapes Around Us",
    "subtitle": "2D & 3D Shapes, Rolling, Sliding & Surface Properties",
    "concepts": [
      "Distinguishing flat (2D) shapes: circle, square, rectangle, triangle.",
      "Exploring solid (3D) shapes: sphere (ball), cylinder (can), cube (dice), cone (party hat).",
      "Identifying which objects roll, which slide, and which can both roll and slide."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef3c7\" rx=\"10\"/><circle cx=\"80\" cy=\"55\" r=\"28\" fill=\"#ef4444\"/><rect x=\"160\" y=\"27\" width=\"56\" height=\"56\" rx=\"4\" fill=\"#3b82f6\"/><polygon points=\"280,27 250,83 310,83\" fill=\"#10b981\"/><rect x=\"360\" y=\"37\" width=\"80\" height=\"46\" rx=\"4\" fill=\"#8b5cf6\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">Circle (Rolls) • Square (Slides) • Triangle (Slides) • Cylinder (Rolls &amp; Slides)</text></svg>",
    "cbq": {
      "title": "Playground Ramp Experiment",
      "text": "During lunch break, Ananya slides her lunchbox down a slide and rolls an apple down the same slide.",
      "question": "Why does the apple roll while the lunchbox slides? Name one everyday item that can do both.",
      "answer": "1. The apple has a curved surface without flat edges, allowing it to roll smoothly.<br>2. The lunchbox has flat surfaces, so it slides along the slide.<br>3. A coin or a carrom coin or a water bottle can both roll (on its curved side) and slide (on its flat face).",
      "rubric": "1.5 M for surface explanation + 1.5 M for coin/bottle example"
    },
    "questions": [
      {
        "category": "Shape Identification • 2D vs 3D",
        "q": "Classify the following items into 'Rolls', 'Slides', or 'Both Rolls and Slides': (a) Cricket Ball, (b) Eraser, (c) Coin, (d) Pencil.",
        "ans": "<strong>Classification:</strong><br>• <strong>(a) Cricket Ball:</strong> Rolls (it has only a curved round surface).<br>• <strong>(b) Eraser:</strong> Slides (it has flat faces).<br>• <strong>(c) Coin:</strong> Both rolls and slides (rolls on circular edge, slides on flat faces).<br>• <strong>(d) Round Pencil:</strong> Both rolls (along cylindrical body) and slides (on flat ends).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct classification for all 4 items",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Corner & Edge Counting",
        "q": "How many corners and straight edges does a rectangular postcard have? Does a circle have any corners?",
        "ans": "<strong>Answer:</strong><br>1. A rectangular postcard has <strong>4 straight edges</strong> and <strong>4 corners (vertices)</strong>.<br>2. A circle has <strong>0 corners</strong> and <strong>0 straight edges</strong> (it is formed by 1 continuous curved line).",
        "marks": 2,
        "rubric": [
          {
            "key": "Postcard: 4 edges, 4 corners",
            "marks": "1 M"
          },
          {
            "key": "Circle: 0 corners, curved line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Construction • Towers",
        "q": "Can you stack footballs on top of each other to make a tall tower? Why or why not? What shapes make stable towers?",
        "ans": "<strong>Answer:</strong><br>• <strong>No</strong>, we cannot stack round footballs because they have curved surfaces and roll off.<br>• Objects with <strong>flat surfaces</strong> like books, square wooden blocks, and shoe boxes make stable towers because flat faces sit securely on each other.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason why round balls cannot stack",
            "marks": "1.5 M"
          },
          {
            "key": "Identification of flat surface objects for stacking",
            "marks": "1.5 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm3",
    "num": 3,
    "unit": "Unit 2: Number Operations",
    "title": "Fun with Numbers",
    "subtitle": "Numbers up to 100, Place Value, Number Lines & Skip Counting",
    "concepts": [
      "Representing two-digit numbers up to 99 with tens and ones.",
      "Using the 100-chart and number line for forward and backward jumps.",
      "Comparing numbers using greater than (>), less than (<), and equal to (=)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><line x1=\"40\" y1=\"60\" x2=\"460\" y2=\"60\" stroke=\"#059669\" stroke-width=\"3\"/><circle cx=\"100\" cy=\"60\" r=\"6\" fill=\"#047857\"/><text x=\"100\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">30</text><circle cx=\"200\" cy=\"60\" r=\"6\" fill=\"#047857\"/><text x=\"200\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">40</text><circle cx=\"300\" cy=\"60\" r=\"6\" fill=\"#047857\"/><text x=\"300\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">50</text><circle cx=\"400\" cy=\"60\" r=\"6\" fill=\"#047857\"/><text x=\"400\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">60</text><path d=\"M100 50 Q150 20 200 50\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4\"/><path d=\"M200 50 Q250 20 300 50\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4\"/><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Jumping in Tens: 30 → 40 → 50 → 60</text></svg>",
    "cbq": {
      "title": "Cricket Scoreboard Case Study",
      "text": "In a friendly gully cricket match, Priya scored 47 runs and Kabir scored 63 runs.",
      "question": "Who scored more runs? How many more runs did the top scorer make? How many runs does Priya need to reach 50?",
      "answer": "1. Kabir scored 63 runs and Priya scored 47 runs. Since 63 > 47, <strong>Kabir scored more runs</strong>.<br>2. Difference = 63 - 47 = <strong>16 more runs</strong>.<br>3. Priya needs: 50 - 47 = <strong>3 runs</strong> to reach 50.",
      "rubric": "1M comparison + 1M subtraction + 1M target calculation"
    },
    "questions": [
      {
        "category": "Place Value • Tens and Ones",
        "q": "Break down the following numbers into Tens and Ones:<br>(a) 58<br>(b) 84<br>(c) 90.",
        "ans": "<strong>Answer:</strong><br>• <strong>(a) 58:</strong> 5 Tens and 8 Ones (50 + 8).<br>• <strong>(b) 84:</strong> 8 Tens and 4 Ones (80 + 4).<br>• <strong>(c) 90:</strong> 9 Tens and 0 Ones (90 + 0).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct tens and ones breakdown for all 3",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Number Line • Missing Values",
        "q": "What number comes:<br>(a) Just before 70?<br>(b) Just after 89?<br>(c) Between 54 and 56?",
        "ans": "<strong>Answer:</strong><br>• (a) Just before 70 is <strong>69</strong>.<br>• (b) Just after 89 is <strong>90</strong>.<br>• (c) Between 54 and 56 is <strong>55</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Each correct number 1 mark each",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Comparison • Inequality Signs",
        "q": "Fill in >, < or = in the blanks:<br>(a) 46 ___ 64<br>(b) 78 ___ 78<br>(c) 91 ___ 89.",
        "ans": "<strong>Answer:</strong><br>• (a) 46 <strong>&lt;</strong> 64 (4 tens is less than 6 tens)<br>• (b) 78 <strong>=</strong> 78 (both values are identical)<br>• (c) 91 <strong>&gt;</strong> 89 (9 tens is greater than 8 tens).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct signs for (a), (b), (c)",
            "marks": "3 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm4",
    "num": 4,
    "unit": "Unit 2: Geometry & Art",
    "title": "Shadow Story",
    "subtitle": "2D Outlines, Footprints & Tracing Shadows",
    "concepts": [
      "Tracing everyday objects (leaves, coins, bottle caps) to discover 2D outlines.",
      "Observing shadows cast by the sun at morning, noon, and evening.",
      "Associating shapes with animal footprints in nature."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f1f5f9\" rx=\"10\"/><circle cx=\"100\" cy=\"60\" r=\"30\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/><rect x=\"190\" y=\"30\" width=\"60\" height=\"60\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/><ellipse cx=\"330\" cy=\"60\" rx=\"35\" ry=\"20\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Tracing Shadows: Bangle (Circle) • Dice (Square) • Leaf (Oval)</text></svg>",
    "cbq": {
      "title": "Sundial Tree Experiment",
      "text": "Tanvi measures the shadow of a small school tree at 8:00 AM, 12:00 PM, and 4:30 PM.",
      "question": "At which time was the tree's shadow the shortest? Why does shadow length change during the day?",
      "answer": "1. The shadow was shortest at <strong>12:00 PM (Noon)</strong>.<br>2. Because at noon the sun is directly overhead, causing shadows to be short. In early morning and late afternoon, the sun is lower in the sky, creating longer shadows.",
      "rubric": "1.5 M for 12:00 PM + 1.5 M for sun position explanation"
    },
    "questions": [
      {
        "category": "Tracing Activity • Object Outlines",
        "q": "What 2D shape will you get if you trace around the base of:<br>(a) A ₹5 coin?<br>(b) An eraser?<br>(c) A matchbox?",
        "ans": "<strong>Answer:</strong><br>• <strong>(a) ₹5 Coin:</strong> A <strong>Circle</strong>.<br>• <strong>(b) Eraser:</strong> A <strong>Rectangle</strong>.<br>• <strong>(c) Matchbox:</strong> A <strong>Rectangle</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Circle, Rectangle, Rectangle identified",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Footprints • Matching",
        "q": "Match the animal with its footprint: Duck, Elephant, Dog. Who has webbed feet and who has large round footprints?",
        "ans": "<strong>Answer:</strong><br>• <strong>Duck:</strong> Webbed feet with three connected toes for swimming.<br>• <strong>Elephant:</strong> Large, heavy, round footprint.<br>• <strong>Dog:</strong> Small paw print with claw marks and pads.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate animal-footprint description",
            "marks": "3 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm5",
    "num": 5,
    "unit": "Unit 2: Patterns",
    "title": "Playing with Patterns",
    "subtitle": "Repeating Sequences, Shape & Number Transformations",
    "concepts": [
      "Identifying the core repeating rule in shapes, colors, and numbers.",
      "Creating growing number patterns (odd, even, multiples of 5).",
      "Finding errors in disrupted pattern sequences."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf2f8\" rx=\"10\"/><circle cx=\"70\" cy=\"55\" r=\"22\" fill=\"#ec4899\"/><polygon points=\"130,33 110,77 150,77\" fill=\"#8b5cf6\"/><circle cx=\"190\" cy=\"55\" r=\"22\" fill=\"#ec4899\"/><polygon points=\"250,33 230,77 270,77\" fill=\"#8b5cf6\"/><circle cx=\"310\" cy=\"55\" r=\"22\" fill=\"#ec4899\"/><polygon points=\"370,33 350,77 390,77\" fill=\"#8b5cf6\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\" text-anchor=\"middle\">Rule: Circle → Triangle → Circle → Triangle</text></svg>",
    "cbq": {
      "title": "Border Tile Designer",
      "text": "Rohan is tiling a border for his mother's vegetable garden. He places 1 red brick, 2 yellow stones, 1 red brick, 2 yellow stones.",
      "question": "What is the repeating pattern rule? If he uses 5 red bricks, how many yellow stones will he need?",
      "answer": "1. The rule is: <strong>1 Red Brick followed by 2 Yellow Stones</strong>.<br>2. For every 1 red brick, there are 2 yellow stones.<br>3. For 5 red bricks: 5 × 2 = <strong>10 yellow stones</strong>.",
      "rubric": "1.5 M for pattern rule + 1.5 M for calculation"
    },
    "questions": [
      {
        "category": "Number Sequences • Growing Patterns",
        "q": "Extend each number pattern by writing the next three numbers:<br>(a) 5, 10, 15, 20, __, __, __<br>(b) 20, 18, 16, 14, __, __, __<br>(c) 1, 4, 7, 10, __, __, __",
        "ans": "<strong>Answer:</strong><br>• <strong>(a)</strong> Rule is +5: 20 + 5 = <strong>25</strong>, 25 + 5 = <strong>30</strong>, 30 + 5 = <strong>35</strong>.<br>• <strong>(b)</strong> Rule is -2: 14 - 2 = <strong>12</strong>, 12 - 2 = <strong>10</strong>, 10 - 2 = <strong>8</strong>.<br>• <strong>(c)</strong> Rule is +3: 10 + 3 = <strong>13</strong>, 13 + 3 = <strong>16</strong>, 16 + 3 = <strong>19</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Each sequence correctly extended with rule",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shape Patterns • Direction Turns",
        "q": "Draw or describe what comes next in the arrow sequence: ↑, →, ↓, ←, __, __.",
        "ans": "<strong>Answer:</strong><br>The arrow turns clockwise by a quarter turn each time.<br>After pointing Left (←), the next arrows will point <strong>Up (↑)</strong> and then <strong>Right (→)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct orientation (Up, Right)",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm6",
    "num": 6,
    "unit": "Unit 3: Measurement",
    "title": "Water Footprints",
    "subtitle": "Capacity, Measuring with Cups/Bottles & Conservation",
    "concepts": [
      "Understanding volume/capacity: comparing which container holds more or less.",
      "Measuring capacity using non-standard containers (glasses, mugs, spoons).",
      "Appreciating daily water conservation at home and school."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#e0f2fe\" rx=\"10\"/><rect x=\"80\" y=\"45\" width=\"40\" height=\"50\" rx=\"4\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"100\" y=\"40\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Cup (250 mL)</text><rect x=\"220\" y=\"25\" width=\"60\" height=\"70\" rx=\"6\" fill=\"#0284c7\" stroke=\"#075985\" stroke-width=\"2\"/><text x=\"250\" y=\"20\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Jug (1 L)</text><rect x=\"360\" y=\"15\" width=\"80\" height=\"80\" rx=\"8\" fill=\"#0369a1\" stroke=\"#0c4a6e\" stroke-width=\"2\"/><text x=\"400\" y=\"12\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Bucket (10 L)</text><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#075985\" text-anchor=\"middle\">Capacity Order: Cup &lt; Jug &lt; Bucket</text></svg>",
    "cbq": {
      "title": "Lemonade Stand Activity",
      "text": "Simran prepares fresh lemonade for a sports day. 1 large jug of lemonade fills exactly 6 small glasses.",
      "question": "How many small glasses can she fill using 3 such large jugs? If she serves 15 glasses, will she have any lemonade left?",
      "answer": "1. 1 jug = 6 glasses.<br>2. 3 jugs = 3 × 6 = <strong>18 glasses</strong>.<br>3. If she serves 15 glasses, lemonade left = 18 - 15 = <strong>3 glasses left over</strong>.",
      "rubric": "1.5 M for 18 glasses + 1.5 M for 3 glasses remainder"
    },
    "questions": [
      {
        "category": "Capacity Comparison • More or Less",
        "q": "Which container holds more liquid in each pair?<br>(a) A teacup or a water bottle?<br>(b) A bucket or a soup spoon?<br>(c) A bathtub or a jug?",
        "ans": "<strong>Answer:</strong><br>• (a) A <strong>water bottle</strong> holds more liquid than a teacup.<br>• (b) A <strong>bucket</strong> holds more liquid than a soup spoon.<br>• (c) A <strong>bathtub</strong> holds more liquid than a jug.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct choice for all three pairs",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Practical Measurement • Units",
        "q": "If 1 jug fills 4 glasses of water, how many jugs of water are needed to fill 12 glasses?",
        "ans": "<strong>Calculation:</strong><br>• 4 glasses = 1 jug<br>• 12 glasses = 12 ÷ 4 = <strong>3 jugs</strong> (since 4 + 4 + 4 = 12).",
        "marks": 2,
        "rubric": [
          {
            "key": "Division or repeated addition shown",
            "marks": "1 M"
          },
          {
            "key": "Answer = 3 jugs",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm7",
    "num": 7,
    "unit": "Unit 3: Addition & Subtraction",
    "title": "Rana’s Gift",
    "subtitle": "Two-Digit Addition and Subtraction with Word Problems",
    "concepts": [
      "Adding two-digit numbers with regrouping (carrying over tens).",
      "Subtracting two-digit numbers using backward jumps and place value blocks.",
      "Solving contextual real-life story problems involving gifts and sharing."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"10\"/><rect x=\"80\" y=\"30\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#fca5a5\" stroke=\"#ef4444\" stroke-width=\"2\"/><text x=\"130\" y=\"55\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Tens: 3</text><text x=\"130\" y=\"75\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#7f1d1d\" text-anchor=\"middle\">Ones: 6 (36)</text><text x=\"210\" y=\"65\" font-family=\"sans-serif\" font-size=\"24\" font-weight=\"800\" fill=\"#ef4444\" text-anchor=\"middle\">+</text><rect x=\"240\" y=\"30\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#86efac\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"290\" y=\"55\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Tens: 2</text><text x=\"290\" y=\"75\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#14532d\" text-anchor=\"middle\">Ones: 7 (27)</text><text x=\"370\" y=\"65\" font-family=\"sans-serif\" font-size=\"24\" font-weight=\"800\" fill=\"#16a34a\" text-anchor=\"middle\">=</text><text x=\"425\" y=\"68\" font-family=\"sans-serif\" font-size=\"22\" font-weight=\"900\" fill=\"#1e3a8a\" text-anchor=\"middle\">63</text><text x=\"250\" y=\"108\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">36 + 27 = (30 + 20) + (6 + 7) = 50 + 13 = 63</text></svg>",
    "cbq": {
      "title": "Birthday Gift Distribution",
      "text": "On his birthday, Rana brought 54 crayons to share with his classmates. He gifted 28 crayons to his table group.",
      "question": "How many crayons does Rana have left? Write the mathematical subtraction statement.",
      "answer": "1. Total crayons = 54.<br>2. Crayons gifted = 28.<br>3. Subtraction: 54 - 28.<br>• Subtract ones: 4 cannot subtract 8, borrow 1 ten (14 - 8 = 6 ones).<br>• Subtract tens: 4 tens - 2 tens = 2 tens.<br>4. <strong>Crayons left = 26</strong>.",
      "rubric": "1.5 M for borrowing step + 1.5 M for final answer 26"
    },
    "questions": [
      {
        "category": "Arithmetic Drill • Addition with Carryover",
        "q": "Solve the following additions:<br>(a) 38 + 25<br>(b) 47 + 36<br>(c) 59 + 18.",
        "ans": "<strong>Step-by-Step Solutions:</strong><br>• <strong>(a) 38 + 25:</strong> 8 + 5 = 13 (3 ones, carry 1 ten). 3 + 2 + 1 = 6 tens. Result = <strong>63</strong>.<br>• <strong>(b) 47 + 36:</strong> 7 + 6 = 13 (carry 1). 4 + 3 + 1 = 8. Result = <strong>83</strong>.<br>• <strong>(c) 59 + 18:</strong> 9 + 8 = 17 (carry 1). 5 + 1 + 1 = 7. Result = <strong>77</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 Mark each with correct carryover working",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Story Problem • Subtraction",
        "q": "A toy shop had 65 rubber balls. In the morning, children bought 32 balls. How many balls are left in the shop?",
        "ans": "<strong>Solution:</strong><br>• Initial balls = 65<br>• Balls sold = 32<br>• Balls remaining = 65 - 32 = <strong>33 balls</strong>.<br>• Verification: 33 + 32 = 65.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct subtraction statement (65 - 32)",
            "marks": "1 M"
          },
          {
            "key": "Final answer: 33 balls",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm8",
    "num": 8,
    "unit": "Unit 3: Money & Place Value",
    "title": "Tens and Ones",
    "subtitle": "Bundles of 10, Currency Notes (₹10, ₹20, ₹50) & Coins",
    "concepts": [
      "Grouping loose items into bundles of ten.",
      "Recognizing Indian currency notes and coins: ₹1, ₹2, ₹5, ₹10, ₹20, ₹50, ₹100.",
      "Combining ₹10 notes and ₹1 coins to pay exact amounts in a shop."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><rect x=\"60\" y=\"35\" width=\"80\" height=\"45\" rx=\"4\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"100\" y=\"62\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#713f12\" text-anchor=\"middle\">₹10</text><rect x=\"155\" y=\"35\" width=\"80\" height=\"45\" rx=\"4\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"195\" y=\"62\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#713f12\" text-anchor=\"middle\">₹10</text><rect x=\"250\" y=\"35\" width=\"80\" height=\"45\" rx=\"4\" fill=\"#facc15\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"290\" y=\"62\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#713f12\" text-anchor=\"middle\">₹10</text><circle cx=\"370\" cy=\"57\" r=\"16\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"370\" y=\"62\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\" text-anchor=\"middle\">₹1</text><circle cx=\"415\" cy=\"57\" r=\"16\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"415\" y=\"62\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#1e293b\" text-anchor=\"middle\">₹1</text><text x=\"250\" y=\"108\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">3 Notes of ₹10 + 2 Coins of ₹1 = ₹30 + ₹2 = ₹32</text></svg>",
    "cbq": {
      "title": "Stationery Shopping Spree",
      "text": "Harman goes to a bookshop to buy a notebook for ₹35 and a pencil box for ₹42. The shopkeeper only accepts ₹10 notes and ₹1 coins.",
      "question": "How much is the total bill? How many ₹10 notes and ₹1 coins should Harman give the shopkeeper?",
      "answer": "1. Total bill = ₹35 + ₹42 = <strong>₹77</strong>.<br>2. Breaking ₹77 into tens and ones:<br>• ₹77 = 7 Tens and 7 Ones.<br>3. Harman gives <strong>7 notes of ₹10</strong> and <strong>7 coins of ₹1</strong>.",
      "rubric": "1.5 M for total sum + 1.5 M for 7 notes and 7 coins"
    },
    "questions": [
      {
        "category": "Money Representation • Notes and Coins",
        "q": "How many ₹10 notes and ₹1 coins are needed to make:<br>(a) ₹46?<br>(b) ₹63?<br>(c) ₹80?",
        "ans": "<strong>Answer:</strong><br>• <strong>(a) ₹46:</strong> 4 notes of ₹10 and 6 coins of ₹1.<br>• <strong>(b) ₹63:</strong> 6 notes of ₹10 and 3 coins of ₹1.<br>• <strong>(c) ₹80:</strong> 8 notes of ₹10 and 0 coins of ₹1.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct breakdown for all three amounts",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Total Value",
        "q": "Grandma gave Riya two ₹20 notes and one ₹10 note. How much money did Riya receive in total?",
        "ans": "<strong>Calculation:</strong><br>• Two ₹20 notes = ₹20 + ₹20 = ₹40<br>• One ₹10 note = ₹10<br>• Total amount = ₹40 + ₹10 = <strong>₹50</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition step shown",
            "marks": "1 M"
          },
          {
            "key": "Answer = ₹50",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm9",
    "num": 9,
    "unit": "Unit 4: Measurement of Length",
    "title": "My Measurement Day",
    "subtitle": "Non-standard Units: Handspan, Footsteps, Fingers & Paces",
    "concepts": [
      "Measuring lengths using body parts (handspans, footsteps, fingers, cubits).",
      "Discovering why different people get different counts with non-standard units.",
      "Introducing standard rulers and comparing longer vs. shorter items."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"10\"/><line x1=\"50\" y1=\"60\" x2=\"450\" y2=\"60\" stroke=\"#16a34a\" stroke-width=\"4\"/><circle cx=\"50\" cy=\"60\" r=\"6\" fill=\"#15803d\"/><circle cx=\"150\" cy=\"60\" r=\"6\" fill=\"#15803d\"/><circle cx=\"250\" cy=\"60\" r=\"6\" fill=\"#15803d\"/><circle cx=\"350\" cy=\"60\" r=\"6\" fill=\"#15803d\"/><circle cx=\"450\" cy=\"60\" r=\"6\" fill=\"#15803d\"/><text x=\"100\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Step 1</text><text x=\"200\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Step 2</text><text x=\"300\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Step 3</text><text x=\"400\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Step 4</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Measuring Classroom Floor: 4 Footsteps Long</text></svg>",
    "cbq": {
      "title": "Desk Length Investigation",
      "text": "Aman measures the teacher's desk using his handspan and finds it is 8 handspans long. His teacher measures the same desk and finds it is 5 handspans long.",
      "question": "Why did the teacher get fewer handspans than Aman? Whose handspan is bigger?",
      "answer": "1. The teacher's hand is larger than Aman's hand, so each handspan covers more distance.<br>2. Because the teacher's handspan is longer, fewer handspans are needed to cover the same desk length.",
      "rubric": "1.5 M for hand size comparison + 1.5 M for inverse span-count relationship"
    },
    "questions": [
      {
        "category": "Estimation • Body Units",
        "q": "Which body unit is most suitable to measure:<br>(a) The length of your eraser (fingers or footsteps)?<br>(b) The length of your math textbook (handspans or paces)?<br>(c) The distance from the classroom door to your desk (footsteps or fingers)?",
        "ans": "<strong>Answer:</strong><br>• (a) Eraser: <strong>Fingers</strong>.<br>• (b) Math textbook: <strong>Handspans</strong>.<br>• (c) Door to desk: <strong>Footsteps</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct unit selected for each item",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Comparison • Lengths",
        "q": "Pooja's ribbon is 12 fingers long. Neha's ribbon is 17 fingers long. Whose ribbon is longer and by how many fingers?",
        "ans": "<strong>Calculation:</strong><br>• Neha's ribbon = 17 fingers<br>• Pooja's ribbon = 12 fingers<br>• <strong>Neha's ribbon is longer.</strong><br>• Difference = 17 - 12 = <strong>5 fingers longer</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identifying Neha's ribbon",
            "marks": "1 M"
          },
          {
            "key": "Difference = 5 fingers",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm10",
    "num": 10,
    "unit": "Unit 4: Measurement of Weight",
    "title": "Fun at the Fair",
    "subtitle": "Comparing Weights: Heavy vs Light & Pan Balance",
    "concepts": [
      "Comparing weights of familiar items (balloon vs. watermelon).",
      "Understanding how a simple two-pan balance works: heavier pan goes down, lighter pan goes up.",
      "Estimating weights visually and checking balance."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"10\"/><line x1=\"250\" y1=\"20\" x2=\"250\" y2=\"80\" stroke=\"#c2410c\" stroke-width=\"4\"/><line x1=\"150\" y1=\"45\" x2=\"350\" y2=\"55\" stroke=\"#c2410c\" stroke-width=\"4\"/><circle cx=\"150\" cy=\"75\" r=\"24\" fill=\"#3b82f6\"/><text x=\"150\" y=\"80\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Apple</text><circle cx=\"350\" cy=\"85\" r=\"32\" fill=\"#10b981\"/><text x=\"350\" y=\"90\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Melon</text><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Watermelon is Heavier (Pan goes down) • Apple is Lighter (Pan goes up)</text></svg>",
    "cbq": {
      "title": "Vegetable Vendor Balance Case",
      "text": "At the weekly village fair, a farmer places a pumpkin on the left pan of his balance and 4 mangoes on the right pan. The pumpkin's pan sinks down.",
      "question": "Which fruit is heavier? How can the farmer make both pans balance equally?",
      "answer": "1. The <strong>pumpkin is heavier</strong> because its side sinks down.<br>2. To balance the scale, the farmer must add more mangoes (or weights) to the right pan until both pans rest at the same level.",
      "rubric": "1.5 M for identifying heavier pumpkin + 1.5 M for adding weight to balance"
    },
    "questions": [
      {
        "category": "Weight Comparison • Real World",
        "q": "Circle or identify the heavier item in each pair:<br>(a) A balloon or an orange?<br>(b) A school bag full of books or an empty pencil box?<br>(c) A feather or an apple?",
        "ans": "<strong>Answer:</strong><br>• (a) An <strong>orange</strong> is heavier than a balloon.<br>• (b) A <strong>school bag full of books</strong> is heavier than an empty pencil box.<br>• (c) An <strong>apple</strong> is heavier than a feather.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct identification for (a), (b), (c)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Pan Balance Logic",
        "q": "When two pans of a balance are at the exact same level, what does it mean about the weights of the objects in both pans?",
        "ans": "<strong>Answer:</strong><br>When both pans are at the exact same level, it means the objects in both pans have <strong>equal weight</strong> (they balance each other).",
        "marks": 2,
        "rubric": [
          {
            "key": "Understanding equal weight / balance",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm11",
    "num": 11,
    "unit": "Unit 5: Data & Information",
    "title": "Data Handling",
    "subtitle": "Tally Marks, Pictographs & Organizing Information",
    "concepts": [
      "Collecting data from classmates (favorite fruits, sports, birth months).",
      "Representing data using simple tally marks and picture charts (pictographs).",
      "Reading tables to answer questions about the most popular and least popular choices."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#faf5ff\" rx=\"10\"/><rect x=\"50\" y=\"30\" width=\"80\" height=\"20\" rx=\"3\" fill=\"#a855f7\"/><text x=\"140\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#6b21a8\">Apple (4)</text><rect x=\"50\" y=\"55\" width=\"140\" height=\"20\" rx=\"3\" fill=\"#f59e0b\"/><text x=\"200\" y=\"70\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\">Mango (7)</text><rect x=\"50\" y=\"80\" width=\"100\" height=\"20\" rx=\"3\" fill=\"#10b981\"/><text x=\"160\" y=\"95\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">Banana (5)</text><text x=\"350\" y=\"65\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#581c87\" text-anchor=\"middle\">Most Popular: Mango (7)<br/>Total Children: 16</text></svg>",
    "cbq": {
      "title": "Class Pet Survey",
      "text": "A teacher asked 20 students which pet they like most: 8 chose Dog, 6 chose Cat, 4 chose Parrot, and 2 chose Rabbit.",
      "question": "Which pet is most favored? Which pet is least favored? How many more students prefer Dogs over Cats?",
      "answer": "1. <strong>Most favored:</strong> Dog (8 students).<br>2. <strong>Least favored:</strong> Rabbit (2 students).<br>3. Difference between Dogs and Cats = 8 - 6 = <strong>2 more students</strong> prefer Dogs.",
      "rubric": "1M most favored + 1M least favored + 1M difference"
    },
    "questions": [
      {
        "category": "Pictograph Reading • Tables",
        "q": "Look at the vehicle count on a street: Car: 6, Bicycle: 9, Bus: 3, Motorcycle: 5.<br>(a) Which vehicle was seen the most?<br>(b) Which vehicle was seen the least?<br>(c) What is the total number of vehicles counted?",
        "ans": "<strong>Answer:</strong><br>• <strong>(a)</strong> <strong>Bicycle</strong> was seen the most (9 bicycles).<br>• <strong>(b)</strong> <strong>Bus</strong> was seen the least (3 buses).<br>• <strong>(c)</strong> Total vehicles = 6 + 9 + 3 + 5 = <strong>23 vehicles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct most (Bicycle)",
            "marks": "1 M"
          },
          {
            "key": "Correct least (Bus)",
            "marks": "1 M"
          },
          {
            "key": "Total count = 23",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tally Marks Practice",
        "q": "Draw tally marks for the number 7 and the number 12.",
        "ans": "<strong>Answer:</strong><br>• <strong>Number 7:</strong> |||| (bundle of 5) and || (2 marks) = 卌 ||.<br>• <strong>Number 12:</strong> Two bundles of 5 and two single marks = 卌 卌 ||.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct tally for 7",
            "marks": "1 M"
          },
          {
            "key": "Correct tally for 12",
            "marks": "1 M"
          }
        ]
      }
    ]
  }
];

module.exports = { joyfulMathsChapters };
