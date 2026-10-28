// Official NCERT Class 3 Mathematics (Math-Magic / गणित का जादू) Complete Dataset - Chapters 1 to 14
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const mathMagicChapters = [
  {
    "id": "mmg1",
    "num": 1,
    "unit": "Unit 1: Spatial Understanding & Symmetry",
    "title": "Where to Look From",
    "subtitle": "Top View, Front View, Side View, Dot Grid Drawings & Mirror Halves (Lines of Symmetry)",
    "concepts": [
      "Viewing 3D objects from different perspectives: top view, side view, and front view.",
      "Using a square dot grid (Rangoli patterns) to draw shapes and objects.",
      "Mirror halves: understanding symmetry and finding lines of symmetry.",
      "Recognizing symmetric alphabet letters, numbers, and geometric shapes."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Where to Look From — Top, Side &amp; Front Perspectives of a Car</text>\n      <!-- Side View -->\n      <g transform=\"translate(60, 50)\">\n        <path d=\"M10,40 L30,40 L45,20 L85,20 L95,40 L120,40 L125,55 L5,55 Z\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n        <circle cx=\"35\" cy=\"55\" r=\"10\" fill=\"#1e293b\"/>\n        <circle cx=\"95\" cy=\"55\" r=\"10\" fill=\"#1e293b\"/>\n        <text x=\"65\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Side View</text>\n      </g>\n      <!-- Top View -->\n      <g transform=\"translate(240, 48)\">\n        <rect x=\"15\" y=\"5\" width=\"70\" height=\"45\" rx=\"12\" fill=\"#bfdbfe\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n        <rect x=\"25\" y=\"12\" width=\"50\" height=\"12\" fill=\"#60a5fa\" rx=\"3\"/>\n        <rect x=\"25\" y=\"30\" width=\"50\" height=\"12\" fill=\"#60a5fa\" rx=\"3\"/>\n        <text x=\"50\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Top View</text>\n      </g>\n      <!-- Front View -->\n      <g transform=\"translate(420, 50)\">\n        <rect x=\"15\" y=\"15\" width=\"60\" height=\"40\" rx=\"8\" fill=\"#93c5fd\" stroke=\"#1d4ed8\" stroke-width=\"1.5\"/>\n        <circle cx=\"28\" cy=\"42\" r=\"6\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1\"/>\n        <circle cx=\"62\" cy=\"42\" r=\"6\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1\"/>\n        <text x=\"45\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Front View</text>\n      </g>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#2563eb\" text-anchor=\"middle\">An object looks completely different when viewed from top, side, or front.</text>\n    </svg>",
    "questions": [
      {
        "category": "Perspective Drawing • Views",
        "q": "How does a staircase look when viewed from: (a) The side? (b) The top? (c) The front? Explain with a short description.",
        "ans": "<strong>Perspective Descriptions:</strong><br>• <strong>(a) Side View:</strong> From the side, a staircase looks like a continuous zigzag step pattern going upward like a ladder.<br>• <strong>(b) Top View:</strong> From directly above, you see a set of parallel rectangular stripes or bars placed one after another.<br>• <strong>(c) Front View:</strong> Looking straight from the front, you see a series of horizontal rectangular risers stacked vertically.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate description of side view (zigzag steps)",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate description of top view (parallel stripes)",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate description of front view",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mirror Halves • Symmetry Investigation",
        "q": "Look at the letters of the English alphabet: A, B, C, D, E, H, M, X. Which of these letters have: (a) A vertical line of symmetry? (b) A horizontal line of symmetry? (c) Both vertical and horizontal lines of symmetry?",
        "ans": "<strong>Classification of Symmetric Letters:</strong><br>• <strong>(a) Vertical line of symmetry (cut down the middle | ):</strong> A, M, H, X.<br>• <strong>(b) Horizontal line of symmetry (cut across the middle — ):</strong> B, C, D, E, H, X.<br>• <strong>(c) Both vertical and horizontal symmetry:</strong> <strong>H</strong> and <strong>X</strong> (folding along either line gives matching halves).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct vertical symmetry identification",
            "marks": "1.0 M"
          },
          {
            "key": "Correct horizontal symmetry identification",
            "marks": "1.0 M"
          },
          {
            "key": "Correct dual symmetry identification (H, X)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Dot Grid Pattern • Activity Solution",
        "q": "Using a square dot grid, how do you construct a symmetric leaf or kite? Describe the step-by-step method using mirror halves.",
        "ans": "<strong>Step-by-step Dot Grid Construction:</strong><br>1. Draw a central vertical axis connecting 6 dots straight down.<br>2. On the left side, count 3 dots out to the side and draw the left curved wing/outline.<br>3. Count the exact same number of dots (3 dots) on the right side and draw a matching mirror curve.<br>4. Joining the matching dots to the top and bottom central points produces a perfectly symmetric kite or leaf.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mention of central axis and equal dot distances",
            "marks": "1.0 M"
          },
          {
            "key": "Explanation of mirror symmetry completion",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Perspective & Observation • Cat in the Classroom",
        "q": "A cat is peeping into a classroom from a high window above.<br>(a) What view of the classroom does the cat see: Top View, Side View, or Front View?<br>(b) Can you help the cat find where the teacher is sitting?<br>(c) Draw or describe how a staircase looks from the side versus from the top.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Cat's Perspective:</strong><br>• The cat is looking down from above, so it sees the <strong>Top View</strong> (or Aerial View) of the students' desks and heads.<br><br><strong>(b) Locating the Teacher:</strong><br>• The teacher is standing/sitting at the front of the classroom near the large rectangular teacher's table facing the rows of student desks.<br><br><strong>(c) Staircase Views:</strong><br>• <strong>Side View:</strong> Shows a step-like zig-zag pattern going upward like a ladder.<br>• <strong>Top View:</strong> Shows only a series of parallel horizontal rectangular steps.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct perspective identification (Top View)",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate description of teacher's location in classroom",
            "marks": "1.0 M"
          },
          {
            "key": "Clear contrast between side view and top view of staircase",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tit for Tat • Mirror Halves and Symmetry",
        "q": "In the story 'Tit for Tat', a clever painter drew only half of Amina's picture and asked for payment. Amina placed a mirror next to it.<br>(a) Why did Amina use a mirror?<br>(b) Which of these letters can be divided into two identical mirror halves by a dotted line: <strong>A, B, C, F, H, P</strong>?<br>(c) Give an English word whose upper and lower halves look identical in a horizontal mirror.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Mirror Trick:</strong><br>• The mirror reflects the drawn half to complete the full symmetrical image, showing Amina's full face just as the painter claimed.<br><br><strong>(b) Symmetrical Letters:</strong><br>• <strong>A:</strong> Vertical mirror line down the middle.<br>• <strong>B:</strong> Horizontal mirror line across the middle.<br>• <strong>C:</strong> Horizontal mirror line across the middle.<br>• <strong>H:</strong> Both vertical and horizontal mirror lines.<br>• <em>(F and P cannot be divided into identical mirror halves).</em><br><br><strong>(c) Horizontal Mirror Words:</strong><br>• Words like <strong>COOKED</strong>, <strong>DICE</strong>, <strong>CHECK</strong>, or <strong>BOOK</strong> have horizontal symmetry.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct explanation of the mirror reflection concept",
            "marks": "1.0 M"
          },
          {
            "key": "Correct identification of symmetrical letters (A, B, C, H)",
            "marks": "1.0 M"
          },
          {
            "key": "Valid horizontally symmetrical word example",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Dot-Grid Rangoli • Symmetry and Patterns",
        "q": "Using a grid of dots to make traditional Indian rangoli designs:<br>(a) How can a line of symmetry help in drawing a balanced rangoli?<br>(b) Name four geometric shapes that can be created by joining dots on a dot grid.<br>(c) If you draw a diya on one side of a dotted line, how do you complete it on the other side?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Symmetry in Rangoli:</strong><br>• A central line or point of symmetry ensures that every curve, petal, or corner drawn on the left is matched exactly at an equal distance on the right, creating a balanced and harmonious design.<br><br><strong>(b) Shapes on a Dot Grid:</strong><br>• <strong>Square</strong>, <strong>Rectangle</strong>, <strong>Triangle</strong>, and <strong>Rhombus (Diamond)</strong>.<br><br><strong>(c) Completing the Diya:</strong><br>• Count the exact number of dots outward and downward from the mirror line for each vertex of the diya, and connect corresponding dots symmetrically on the opposite side.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of symmetry creating balance in art",
            "marks": "1.0 M"
          },
          {
            "key": "Listing four valid polygon shapes",
            "marks": "1.0 M"
          },
          {
            "key": "Methodical explanation of reflection across dot-grid",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mirror Halves Identification • Figures",
        "q": "State whether a dotted line through the center divides each figure into mirror halves (Write 'Yes' or 'No'):<br>(a) A standard butterfly with dotted line along its body.<br>(b) A pair of scissors with dotted line between the two blades.<br>(c) A watering can with a spout on one side and a handle on the other.<br>(d) An equilateral triangle with dotted line from top vertex to base midpoint.",
        "ans": "<strong>Mirror Halves Check:</strong><br>• <strong>(a) Butterfly:</strong> <strong>Yes</strong> (Left wing is an exact mirror image of the right wing).<br>• <strong>(b) Scissors:</strong> <strong>Yes</strong> (The two halves fold over each other symmetrically).<br>• <strong>(c) Watering Can:</strong> <strong>No</strong> (Spout on one side does not match handle on the other).<br>• <strong>(d) Equilateral Triangle:</strong> <strong>Yes</strong> (Bisects the triangle into two identical right-angled triangles).",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct answers for (a) and (b)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct answers for (c) and (d)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Views of Everyday Objects",
        "q": "Dheeraj drew a car from the terrace (top view) and Anshul drew the same car from the side. Dheeraj's drawing looked like a small box kept inside a bigger box, while Anshul's showed doors and wheels. Were both drawings correct? Explain.",
        "ans": "<strong>Answer:</strong><br>• <strong>Yes, both drawings were correct!</strong><br>• The appearance of an object changes depending on the position from which you look at it.<br>• From the <strong>side view</strong>, you see the wheels, windows, and doors.<br>• From the <strong>top view</strong> (looking from above), you only see the roof and bonnet, which looks like a box inside a box.",
        "marks": 3,
        "rubric": [
          {
            "key": "Both are correct",
            "marks": "1 M"
          },
          {
            "key": "Side view explanation",
            "marks": "1 M"
          },
          {
            "key": "Top view explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Dot Grid Drawing • Rangoli Patterns",
        "q": "Using a 5x5 dot grid, what geometric shapes can you draw by joining dots with straight lines? Name at least three different shapes.",
        "ans": "<strong>Dot Grid Geometry:</strong><br>By connecting dots with straight line segments, we can construct:<br>1. <strong>Squares</strong> (by joining 4 dots with equal horizontal and vertical sides).<br>2. <strong>Rectangles</strong> (by joining dots with unequal length and width).<br>3. <strong>Triangles</strong> (by joining any 3 non-collinear dots).<br>4. <strong>Kite / Rhombus shapes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid shapes named",
            "marks": "1.5 M"
          },
          {
            "key": "Explanation of connecting dots",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mirror Halves • Symmetry Line",
        "q": "Does a dotted line divide each of the following letters into two identical mirror halves?<br>(a) The letter 'A' with a vertical dotted line down the center.<br>(b) The letter 'B' with a horizontal dotted line across the middle.<br>(c) The letter 'F' with any straight line.",
        "ans": "<strong>Symmetry Analysis:</strong><br>• <strong>(a) Letter 'A':</strong> <strong>Yes</strong>. A vertical mirror line divides 'A' into matching left and right halves.<br>• <strong>(b) Letter 'B':</strong> <strong>Yes</strong>. A horizontal mirror line divides 'B' into matching top and bottom loops.<br>• <strong>(c) Letter 'F':</strong> <strong>No</strong>. 'F' has no line of symmetry; neither vertical nor horizontal line can divide it into mirror halves.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Yes with explanation",
            "marks": "1 M"
          },
          {
            "key": "(b) Yes with explanation",
            "marks": "1 M"
          },
          {
            "key": "(c) No with explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mask Making • Half Face Art",
        "q": "How can you make a cat mask by folding a piece of paper in half and cutting only one side? Explain the mathematical principle involved.",
        "ans": "<strong>Step-by-Step Procedure & Principle:</strong><br>1. Fold a sheet of drawing paper exactly in half.<br>2. Draw one ear, one eye, half the nose, and half the whiskers along the folded edge.<br>3. Cut along the drawn outline while the paper remains folded.<br>4. Unfold the paper: A complete, perfectly symmetrical cat face appears!<br>• <strong>Mathematical Principle:</strong> <strong>Bilateral Symmetry (Reflection)</strong>. The crease acts as a mirror line.",
        "marks": 3,
        "rubric": [
          {
            "key": "Folding and cutting procedure explained",
            "marks": "1.5 M"
          },
          {
            "key": "Concept of mirror symmetry / reflection identified",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Top, Side, Front Classification",
        "q": "Look at a staircase:<br>(a) From which view does it look like steps going up: Top, Side, or Front?<br>(b) From which view does it look like a flat series of horizontal bars: Top, Side, or Front?",
        "ans": "<strong>Staircase Views:</strong><br>• (a) Looking like steps going upwards: <strong>Side view</strong>.<br>• (b) Looking like flat horizontal strips/bars: <strong>Top view</strong> (or front view from directly ahead).",
        "marks": 2,
        "rubric": [
          {
            "key": "Side view for steps",
            "marks": "1 M"
          },
          {
            "key": "Top view for strips",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Exploration • Words with Mirror Halves",
        "q": "Guess the words by looking at their top halves:<br>(a) H A I L<br>(b) C H O O K<br>(c) D I C E.<br>Explain why these words can be identified from their top halves.",
        "ans": "<strong>Explanation:</strong><br>• Letters like C, D, E, H, I, K, O, X possess <strong>horizontal symmetry</strong>.<br>• Their top halves mirror their bottom halves across a central horizontal line, allowing complete word recognition even when only the upper half is visible.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identification of letters with horizontal symmetry",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Hands-on Exercise • Tit for Tat Story",
        "q": "In the story 'Tit for Tat', a clever painter painted only half a portrait for Ameena and asked for full payment. How did Ameena pay him back using a mirror?",
        "ans": "<strong>Story Explanation:</strong><br>• The painter told Ameena: 'Put a mirror next to it, and you will see the complete picture!'<br>• Ameena gave him a ₹100 note and kept a mirror beside it, saying: 'Look in the mirror, now you have your full ₹200!'<br>• She used the <strong>exact same mirror reflection trick</strong> on the painter.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ameena's mirror response explained",
            "marks": "2 M"
          },
          {
            "key": "Connection to reflection concept",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Dot Grid Pattern • Flower and Leaf",
        "q": "On a dot grid, if a square has 4 dots on each side, how many dots are on its perimeter in total? (Be careful not to count the corners twice).",
        "ans": "<strong>Perimeter Dot Calculation:</strong><br>• A square has 4 sides.<br>• Dots per side = 4.<br>• Total = 4 sides × (4 - 1 dots) = 4 × 3 = <strong>12 dots</strong> on the perimeter.<br>Alternatively: 4 corners + (2 inner dots on 4 sides) = 4 + 8 = 12 dots.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct count = 12 dots with explanation",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Geometry • Line of Symmetry in Everyday Objects",
        "q": "Which of the following objects can be cut into two identical halves by a straight knife cut?<br>(a) A round apple (sliced vertically down stem)<br>(b) A pair of scissors<br>(c) A shoe.",
        "ans": "<strong>Symmetry Assessment:</strong><br>• <strong>(a) Round apple:</strong> <strong>Yes</strong>, a vertical cut down the center yields two symmetric halves.<br>• <strong>(b) Scissors:</strong> <strong>Yes</strong>, sliced along the center line between blades.<br>• <strong>(c) Shoe:</strong> <strong>No</strong>, a shoe is curved for left or right foot and has no line of symmetry.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apple = Yes",
            "marks": "1 M"
          },
          {
            "key": "Scissors = Yes",
            "marks": "1 M"
          },
          {
            "key": "Shoe = No",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Review Questions • Symmetrical Numbers",
        "q": "Which digits among 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 have at least one line of symmetry when written in standard block form?",
        "ans": "<strong>Symmetrical Digits:</strong><br>• <strong>0</strong> (both vertical and horizontal symmetry)<br>• <strong>3</strong> (horizontal line of symmetry)<br>• <strong>8</strong> (both vertical and horizontal symmetry).<br>Digits 2, 4, 5, 6, 7, 9 do not have lines of symmetry in standard form.",
        "marks": 2,
        "rubric": [
          {
            "key": "0, 3, 8 identified correctly",
            "marks": "2 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Architectural Floor Plan Perspective",
      "text": "An architect looks down at a school building model from above (aerial top view). She notices the roof is shaped like a giant rectangle with two circular courtyards inside.",
      "question": "If each circular courtyard has a diameter of 10 metres and they are placed side by side with 5 metres gap between them, what is the distance from the left edge of the first courtyard to the right edge of the second?",
      "answer": "1. Width of 1st courtyard = 10 m.<br>2. Gap between courtyards = 5 m.<br>3. Width of 2nd courtyard = 10 m.<br>4. <strong>Total span</strong> = 10 + 5 + 10 = <strong>25 metres</strong>.",
      "rubric": "1.5M identifying diameter dimensions + 1.5M addition of spans and gap."
    }
  },
  {
    "id": "mmg2",
    "num": 2,
    "unit": "Unit 2: Number Concepts & Place Value",
    "title": "Fun with Numbers",
    "subtitle": "3-Digit Numbers, Cricket Centuries, Skip Counting, Comparing & Word Problems",
    "concepts": [
      "Reading and writing 3-digit numbers in figures and words up to 999.",
      "Cricket scorecards: half-century (50), century (100), and double century (200).",
      "Skip counting forward and backward by 2s, 5s, 10s, and 50s.",
      "Finding predecessor (one less) and successor (one more)."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Skip Counting by 50s — Jumping from 100 to 400</text>\n      <!-- Number line -->\n      <line x1=\"60\" y1=\"90\" x2=\"520\" y2=\"90\" stroke=\"#d97706\" stroke-width=\"2.5\"/>\n      <!-- Ticks and arcs -->\n      <g font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">\n        <circle cx=\"90\" cy=\"90\" r=\"5\" fill=\"#d97706\"/><text x=\"90\" y=\"115\">100</text>\n        <path d=\"M90,85 Q125,50 160,85\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n        <circle cx=\"160\" cy=\"90\" r=\"5\" fill=\"#d97706\"/><text x=\"160\" y=\"115\">150</text>\n        <path d=\"M160,85 Q195,50 230,85\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n        <circle cx=\"230\" cy=\"90\" r=\"5\" fill=\"#d97706\"/><text x=\"230\" y=\"115\">200</text>\n        <path d=\"M230,85 Q265,50 300,85\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n        <circle cx=\"300\" cy=\"90\" r=\"5\" fill=\"#d97706\"/><text x=\"300\" y=\"115\">250</text>\n        <path d=\"M300,85 Q335,50 370,85\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n        <circle cx=\"370\" cy=\"90\" r=\"5\" fill=\"#d97706\"/><text x=\"370\" y=\"115\">300</text>\n        <path d=\"M370,85 Q405,50 440,85\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n        <circle cx=\"440\" cy=\"90\" r=\"5\" fill=\"#d97706\"/><text x=\"440\" y=\"115\">350</text>\n        <path d=\"M440,85 Q475,50 510,85\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n        <circle cx=\"510\" cy=\"90\" r=\"5\" fill=\"#d97706\"/><text x=\"510\" y=\"115\">400</text>\n      </g>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Each leap adds exactly 50 units (+50)</text>\n    </svg>",
    "questions": [
      {
        "category": "Cricket Score Analysis • Centuries",
        "q": "Look at the World Cup scorecard: C.K. scored 99 runs, A.S. scored 162 runs, and P.K. scored 105 runs. (a) How many more runs did C.K. need to complete a century? (b) Who scored more than a century and by how many runs?",
        "ans": "<strong>Step-by-step Solution:</strong><br>• 1 Century = 100 runs.<br><strong>(a) C.K.'s Century Shortfall:</strong><br>100 - 99 = <strong>1 run needed</strong>.<br><br><strong>(b) Scorers above a Century:</strong><br>• P.K. scored 105: 105 - 100 = <strong>5 runs more than a century</strong>.<br>• A.S. scored 162: 162 - 100 = <strong>62 runs more than a century</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct shortfall for C.K. (1 run)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct excess runs for P.K. (5 runs)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct excess runs for A.S. (62 runs)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Skip Counting Sequences • Patterns",
        "q": "Fill in the missing numbers for the patterns: (a) 550, 600, 650, ___, ___, ___. (b) 280, 260, 240, ___, ___, ___ (Counting backwards by 20).",
        "ans": "<strong>Solutions:</strong><br>• <strong>(a) Forward by 50:</strong> 550, 600, 650, <strong>700, 750, 800</strong>.<br>• <strong>(b) Backward by 20:</strong> 280, 260, 240, <strong>220, 200, 180</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct forward sequence (+50)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct backward sequence (-20)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Place Value Riddles • Problem Solving",
        "q": "Solve the riddles: (1) 'I am between 70 and 80 and have a 5 in my name.' (2) 'I have 9 in my name and am very close to 90.' (3) 'If you hit a 4 after me, you score a century.'",
        "ans": "<strong>Riddle Answers:</strong><br>1. Between 70 and 80 with 5 → <strong>75</strong>.<br>2. Very close to 90 with 9 → <strong>89</strong> (since 89 + 1 = 90).<br>3. Hit a 4 to score a century (100) → 100 - 4 = <strong>96</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct deduction for riddle 1 (75)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct deduction for riddle 2 (89)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct deduction for riddle 3 (96)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tamarind Seeds Collection • Comparison",
        "q": "Radhika, Gauri, Vicky, Indra, and Sunil were collecting tamarind (imli) seeds:<br>• Radhika collected 24 seeds<br>• Gauri collected 47 seeds<br>• Sunil collected 38 seeds<br>• Indra collected 54 seeds<br>• Vicky collected 42 seeds<br>(a) Who collected the most seeds, and who collected the least seeds?<br>(b) How many more seeds does Sunil need to collect to have 40 seeds?<br>(c) If Radhika gets 6 more seeds, how many seeds will she have?",
        "ans": "<strong>Step-by-Step Analysis:</strong><br><strong>(a) Most and Least:</strong><br>• Most seeds: <strong>Indra (54 seeds)</strong>.<br>• Least seeds: <strong>Radhika (24 seeds)</strong>.<br><br><strong>(b) Sunil's Target:</strong><br>• Sunil has = 38 seeds.<br>• Seeds needed = 40 - 38 = <strong>2 seeds</strong>.<br><br><strong>(c) Radhika's New Total:</strong><br>• 24 + 6 = <strong>30 seeds</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct most (54) and least (24) identified",
            "marks": "1.0 M"
          },
          {
            "key": "Correct calculation for Sunil (40 - 38 = 2)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct addition for Radhika (24 + 6 = 30)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Centuries in Cricket • C.K. Nayudu & Players",
        "q": "Study the runs scored by top batsmen:<br>• C.K. Nayudu: 99 runs<br>• Kapil Dev: 122 runs<br>• Gavaskar: 100 runs<br>• Tendulkar: 162 runs<br>(a) Did C.K. Nayudu make a century? How many runs did he miss by?<br>(b) Who scored an exact century?<br>(c) How many runs did Tendulkar score beyond a century?",
        "ans": "<strong>Step-by-Step Cricket Analysis:</strong><br>• 1 Century = 100 runs.<br><strong>(a) C.K. Nayudu:</strong><br>• <strong>No</strong>, he scored 99 runs.<br>• Missed century by = 100 - 99 = <strong>1 run</strong>.<br><br><strong>(b) Exact Century:</strong><br>• <strong>Gavaskar</strong> scored exactly <strong>100 runs</strong>.<br><br><strong>(c) Tendulkar's Extra Runs:</strong><br>• Tendulkar scored = 162 runs.<br>• Runs beyond century = 162 - 100 = <strong>62 runs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct analysis for C.K. Nayudu (No, missed by 1)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct player identified for exact century (Gavaskar)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct excess runs calculation for Tendulkar (62 runs)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Jumping Animals • Number Track Game",
        "q": "On a number track from 90 to 150:<br>• Gabru the deer jumps on every 7th square starting from 90.<br>• Bunny the rabbit jumps on every 5th square starting from 99.<br>(a) Write Gabru's first 4 landing numbers after 90.<br>(b) Write Bunny's first 4 landing numbers after 99.",
        "ans": "<strong>Step-by-Step Sequences:</strong><br><strong>(a) Gabru (+7):</strong><br>• 90 + 7 = <strong>97</strong><br>• 97 + 7 = <strong>104</strong><br>• 104 + 7 = <strong>111</strong><br>• 111 + 7 = <strong>118</strong>.<br><br><strong>(b) Bunny (+5):</strong><br>• 99 + 5 = <strong>104</strong><br>• 104 + 5 = <strong>109</strong><br>• 109 + 5 = <strong>114</strong><br>• 114 + 5 = <strong>119</strong>.<br><em>(Notice that both Gabru and Bunny land on square 104!)</em>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct sequence for Gabru (97, 104, 111, 118)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct sequence for Bunny (104, 109, 114, 119)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Counting by 50s • Century Jumps",
        "q": "Fill in the blanks by counting in 50s:<br>200, 250, 300, ___, ___, 450, ___, 550.<br>How many 50s make 500 starting from 0?",
        "ans": "<strong>Solution:</strong><br>• <strong>Completed Sequence:</strong> 200, 250, 300, <strong>350</strong>, <strong>400</strong>, 450, <strong>500</strong>, 550.<br>• <strong>50s in 500:</strong> 500 ÷ 50 = <strong>10 fifty-rupee notes / steps</strong> make 500.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct blanks in sequence: 350, 400, 500",
            "marks": "2.0 M"
          },
          {
            "key": "Correct division fact (10 fifties make 500)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Story • Radhika's Tamarind Seeds",
        "q": "Radhika, Gauri, Vicky, Indra, and Sunil were collecting Imli (tamarind) seeds:<br>• Radhika collected 24 seeds<br>• Gauri collected 47 seeds<br>• Sunil collected 38 seeds<br>• Indra collected 54 seeds<br>• Vicky collected 42 seeds.<br>(a) Who collected the most seeds?<br>(b) Sunil will collect ___ more seeds to equal Gauri.<br>(c) How many children collected more than 40 seeds?",
        "ans": "<strong>Step-by-Step Analysis:</strong><br>• <strong>(a) Most seeds:</strong> <strong>Indra</strong> with 54 seeds.<br>• <strong>(b) Seeds Sunil needs to equal Gauri:</strong> 47 - 38 = <strong>9 more seeds</strong>.<br>• <strong>(c) Children with >40 seeds:</strong> Gauri (47), Indra (54), and Vicky (42) = <strong>3 children</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Indra (54)",
            "marks": "1 M"
          },
          {
            "key": "9 seeds needed",
            "marks": "1 M"
          },
          {
            "key": "3 children",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Cricket Records • One-Day International Scores",
        "q": "Top batsman scores in a match: C.K. (99), Dhoni (102), Kumble (162), Rahane (152), Dhawan (178), Kapil (127).<br>(a) How many players scored more than a century (100 runs)?<br>(b) What is the difference between Dhawan's score and Dhoni's score?<br>(c) Who scored two runs less than a century and a half (148 runs)?",
        "ans": "<strong>Calculations:</strong><br>• <strong>(a) Players scoring >100:</strong> Dhoni (102), Kumble (162), Rahane (152), Dhawan (178), Kapil (127) = <strong>5 players</strong>.<br>• <strong>(b) Difference:</strong> 178 - 102 = <strong>76 runs</strong>.<br>• <strong>(c) Score = 148 runs:</strong> (None on list scored exactly 148; closest was Rahane at 152).",
        "marks": 3,
        "rubric": [
          {
            "key": "5 players scored >100",
            "marks": "1 M"
          },
          {
            "key": "Difference 178 - 102 = 76",
            "marks": "1 M"
          },
          {
            "key": "148 analysis",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Lazy Crazy Shop • Bundles and Packets",
        "q": "Lazy Crazy shop sells items only in packets of 100, packets of 10, and loose items. Find how a customer buying 243 items will receive them.",
        "ans": "<strong>Place Value Packaging:</strong><br>• Number of items = 243.<br>• Hundreds place = 2 → <strong>2 packets of 100</strong> (200 items).<br>• Tens place = 4 → <strong>4 packets of 10</strong> (40 items).<br>• Ones place = 3 → <strong>3 loose items</strong>.<br>Total = 200 + 40 + 3 = 243.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 packets of 100, 4 of 10, 3 loose items",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Lazy Crazy Money • Currency Note Bundles",
        "q": "At the Lazy Crazy shop, customers pay only in ₹100 notes, ₹10 notes, and ₹1 coins. How will an animal pay ₹420 and ₹143?",
        "ans": "<strong>Currency Breakdown:</strong><br>• <strong>For ₹420:</strong><br>• 4 notes of ₹100 = ₹400<br>• 2 notes of ₹10 = ₹20<br>• 0 coins of ₹1 = ₹0.<br>• <strong>For ₹143:</strong><br>• 1 note of ₹100 = ₹100<br>• 4 notes of ₹10 = ₹40<br>• 3 coins of ₹1 = ₹3.",
        "marks": 3,
        "rubric": [
          {
            "key": "₹420 breakdown correct",
            "marks": "1.5 M"
          },
          {
            "key": "₹143 breakdown correct",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Who Am I? • Match the Number",
        "q": "Match the clues with the correct numbers:<br>(1) I have 9 in my name and am very close to 90 — (A) 100<br>(2) If you hit a 4 after me you score a century — (B) 89<br>(3) I am equal to ten notes of 10 — (C) 96.",
        "ans": "<strong>Matching:</strong><br>• (1) Close to 90 with 9 in name = <strong>(B) 89</strong>.<br>• (2) 100 - 4 = <strong>(C) 96</strong>.<br>• (3) Ten notes of 10 = 10 × 10 = <strong>(A) 100</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "1-B, 2-C, 3-A correct",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Jump Steps • Number Patterns",
        "q": "Write the next three numbers for each jump pattern:<br>(a) Jump 2 steps forward: 110, 112, 114, ___, ___, ___<br>(b) Jump 5 steps forward: 150, 155, 160, ___, ___, ___<br>(c) Jump 10 steps backward: 190, 180, 170, ___, ___, ___.",
        "ans": "<strong>Patterns:</strong><br>• (a) Adding 2: <strong>116, 118, 120</strong>.<br>• (b) Adding 5: <strong>165, 170, 175</strong>.<br>• (c) Subtracting 10: <strong>160, 150, 140</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) 116, 118, 120",
            "marks": "1 M"
          },
          {
            "key": "(b) 165, 170, 175",
            "marks": "1 M"
          },
          {
            "key": "(c) 160, 150, 140",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Time • Comparing Number Pairs",
        "q": "Circle the larger number in each pair: (a) 149 and 194 (b) 170 and 107 (c) 199 and 200.",
        "ans": "<strong>Larger Numbers:</strong><br>• (a) <strong>194</strong> is larger than 149 (194 > 149).<br>• (b) <strong>170</strong> is larger than 107 (170 > 107).<br>• (c) <strong>200</strong> is larger than 199 (200 > 199).",
        "marks": 1.5,
        "rubric": [
          {
            "key": "194, 170, 200 identified",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Expanded Form • Three Digits",
        "q": "Write in expanded form: (a) 198 (b) 105 (c) 176.",
        "ans": "<strong>Expanded Forms:</strong><br>• (a) 198 = <strong>100 + 90 + 8</strong>.<br>• (b) 105 = <strong>100 + 0 + 5</strong>.<br>• (c) 176 = <strong>100 + 70 + 6</strong>.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "All 3 correct expanded forms",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Word Problem • Shells Collection",
        "q": "Amina has 124 sea shells. Her brother gives her 36 more shells. How many shells does Amina have now?",
        "ans": "<strong>Addition:</strong><br>124 + 36 = 124 + 6 + 30 = 130 + 30 = <strong>160 shells</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "124 + 36 = 160 with working",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Century Milestone • Runs Needed",
        "q": "A cricketer is batting on 78 runs. How many runs does he need to reach: (a) 100 runs (a century)? (b) 150 runs?",
        "ans": "<strong>Calculations:</strong><br>• (a) For century: 100 - 78 = <strong>22 runs</strong>.<br>• (b) For 150 runs: 150 - 78 = <strong>72 runs</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "22 runs for century",
            "marks": "1 M"
          },
          {
            "key": "72 runs for 150",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Wildlife Sanctuary Deer Count",
      "text": "Forest rangers recorded deer sightings across four zones: North Zone (214), South Zone (189), East Zone (305), and West Zone (292).",
      "question": "Which zone recorded the lowest deer count? How many total deer were sighted in the North and West Zones combined?",
      "answer": "1. Comparing sightings: 189 < 214 < 292 < 305.<br>• <strong>Lowest count:</strong> South Zone with 189 deer.<br>2. North Zone (214) + West Zone (292) = 214 + 292 = <strong>506 deer</strong>.",
      "rubric": "1.5M comparison and lowest zone + 1.5M addition of 214 + 292."
    }
  },
  {
    "id": "mmg3",
    "num": 3,
    "unit": "Unit 2: Number Concepts & Place Value",
    "title": "Give and Take",
    "subtitle": "Addition, 100-Chart Jumps, Word Problems & Story-Based Arithmetic",
    "concepts": [
      "Using a 100-chart to add: jumping up by 10s and right by 1s.",
      "Mental addition: adding 10, 20, or 30 quickly to any 2-digit number.",
      "Addition of 3-digit numbers with regrouping across ones and tens.",
      "Breaking numbers into easy tens to solve word problems mentally."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">100-Grid Navigation — 34 + 23 = 57</text>\n      <!-- Grid Simulation -->\n      <rect x=\"70\" y=\"45\" width=\"200\" height=\"95\" rx=\"6\" fill=\"#ffffff\" stroke=\"#86efac\" stroke-width=\"1.5\"/>\n      <rect x=\"80\" y=\"110\" width=\"30\" height=\"20\" fill=\"#bbf7d0\" rx=\"3\"/><text x=\"95\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">34</text>\n      <!-- Up arrows for +20 -->\n      <path d=\"M95,108 L95,85\" stroke=\"#16a34a\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n      <rect x=\"80\" y=\"80\" width=\"30\" height=\"20\" fill=\"#dcfce7\" rx=\"3\"/><text x=\"95\" y=\"94\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">44</text>\n      <path d=\"M95,78 L95,55\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <rect x=\"80\" y=\"50\" width=\"30\" height=\"20\" fill=\"#dcfce7\" rx=\"3\"/><text x=\"95\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">54</text>\n      <!-- Right arrow for +3 -->\n      <path d=\"M112,60 L170,60\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <rect x=\"175\" y=\"50\" width=\"30\" height=\"20\" fill=\"#22c55e\" rx=\"3\"/><text x=\"190\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">57</text>\n      <!-- Explanation Card -->\n      <rect x=\"300\" y=\"45\" width=\"210\" height=\"95\" rx=\"6\" fill=\"#dcfce7\" stroke=\"#22c55e\" stroke-width=\"1.5\"/>\n      <text x=\"315\" y=\"70\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#14532d\">Kittu's Home Jump Steps:</text>\n      <text x=\"315\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#166534\">• Start at room 34</text>\n      <text x=\"315\" y=\"106\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#166534\">• Jump 2 rows up (+20) → 54</text>\n      <text x=\"315\" y=\"124\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\">• Step 3 rooms right (+3) → 57</text>\n    </svg>",
    "questions": [
      {
        "category": "100-Chart Jump Strategy • Mental Addition",
        "q": "Using the 100-chart jump strategy, solve: (a) 47 + 20, (b) 28 + 35, (c) 65 + 19. Show the jumps.",
        "ans": "<strong>Solutions:</strong><br>• <strong>(a) 47 + 20:</strong> From 47, jump 2 rows directly up (+20) = <strong>67</strong>.<br>• <strong>(b) 28 + 35:</strong> From 28, jump 3 rows up (+30) to 58; then step 5 rooms right (+5) = <strong>63</strong>.<br>• <strong>(c) 65 + 19:</strong> Adding 19 is jumping 2 rows up (+20 to 85) and taking 1 step back (-1) = <strong>84</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct mental jump for (a)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct mental jump for (b)",
            "marks": "1.0 M"
          },
          {
            "key": "Clever +20 and -1 jump for (c)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "3-Digit Addition with Regrouping",
        "q": "A train compartment has 132 passengers. At the next junction, 69 more passengers get in. How many passengers are in the compartment now? Show the column working.",
        "ans": "<strong>Column Addition:</strong><br>&nbsp;&nbsp;H&nbsp;&nbsp;T&nbsp;&nbsp;O<br>&nbsp;&nbsp;1&nbsp;&nbsp;3&nbsp;&nbsp;2<br>+&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;9<br>---------<br>&nbsp;&nbsp;<strong>2&nbsp;&nbsp;0&nbsp;&nbsp;1</strong><br>• <strong>Working:</strong><br>1. Ones: 2 + 9 = 11 → Write 1 in Ones place, carry 1 Ten.<br>2. Tens: 3 + 6 + 1 (carry) = 10 → Write 0 in Tens place, carry 1 Hundred.<br>3. Hundreds: 1 + 1 (carry) = 2 Hundreds.<br>• <strong>Total passengers = 201</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct column alignment and regrouping steps",
            "marks": "1.5 M"
          },
          {
            "key": "Correct final sum (201 passengers)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Real-Life Problem Solving • Animal Count",
        "q": "A factory made 270 light bulbs on the first day and 149 light bulbs on the second day. How many bulbs were made altogether? Did they cross 400 bulbs?",
        "ans": "<strong>Solution:</strong><br>• Day 1 bulbs = 270<br>• Day 2 bulbs = 149<br>• Total bulbs = 270 + 149 = <strong>419 bulbs</strong>.<br>• Since 419 is greater than 400, <strong>yes, they successfully crossed 400 bulbs</strong> by 19 bulbs.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct addition (270 + 149 = 419)",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate comparison with 400 threshold",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Kittu's Home Maze • Jumping 10s on a 100-Grid",
        "q": "Kittu has a house with 100 rooms numbered 1 to 100. Jumping up one row means adding 10 (+10).<br>(a) Kittu starts at room 14 and jumps 2 rows up. Which room does he reach?<br>(b) He is in room 47 and jumps 1 row down and 2 steps left. Which room is he in now?<br>(c) Write the shortcut to go from room 28 to room 58.",
        "ans": "<strong>Step-by-Step Grid Navigation:</strong><br><strong>(a) Room 14 + 2 rows:</strong><br>• 14 + 10 + 10 = 14 + 20 = <strong>Room 34</strong>.<br><br><strong>(b) From 47: 1 row down, 2 steps left:</strong><br>• 1 row down = 47 - 10 = 37.<br>• 2 steps left = 37 - 2 = <strong>Room 35</strong>.<br><br><strong>(c) From 28 to 58:</strong><br>• Difference = 58 - 28 = 30.<br>• <strong>Shortcut:</strong> Jump <strong>3 rows straight up</strong> (3 jumps of 10).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct room for (a): Room 34",
            "marks": "1.0 M"
          },
          {
            "key": "Correct room for (b): Room 35",
            "marks": "1.0 M"
          },
          {
            "key": "Correct shortcut for (c): 3 rows straight up (30)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Mental Addition Tricks • Making Tens",
        "q": "Solve the following additions using mental breakdown (splitting into tens and ones):<br>(a) 37 + 22<br>(b) 73 + 24<br>(c) 56 + 21",
        "ans": "<strong>Mental Splitting Method:</strong><br>• <strong>(a) 37 + 22:</strong> (30 + 20) + (7 + 2) = 50 + 9 = <strong>59</strong>.<br>• <strong>(b) 73 + 24:</strong> (70 + 20) + (3 + 4) = 90 + 7 = <strong>97</strong>.<br>• <strong>(c) 56 + 21:</strong> (50 + 20) + (6 + 1) = 70 + 7 = <strong>77</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct breakdown and answer for (a): 59",
            "marks": "1.0 M"
          },
          {
            "key": "Correct breakdown and answer for (b): 97",
            "marks": "1.0 M"
          },
          {
            "key": "Correct breakdown and answer for (c): 77",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Grasshopper & Leaves",
        "q": "A grasshopper ate 68 green leaves on Monday and 47 green leaves on Tuesday.<br>(a) How many leaves did it eat altogether on both days?<br>(b) How many more leaves did it eat on Monday than on Tuesday?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Leaves:</strong><br>• 68 + 47 = (60 + 40) + (8 + 7) = 100 + 15 = <strong>115 leaves</strong>.<br><br><strong>(b) Difference:</strong><br>• 68 - 47 = (68 - 40) - 7 = 28 - 7 = <strong>21 more leaves</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct sum (115 leaves)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct difference (21 leaves)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Puzzle • Finding Hidden Pairs",
        "q": "Find two numbers whose sum is 75 and whose difference is 15.",
        "ans": "<strong>Step-by-Step Puzzle Solution:</strong><br>• Let the two numbers be A and B.<br>• Sum = A + B = 75.<br>• Difference = A - B = 15.<br>• Adding the two equations: 2 × A = 75 + 15 = 90.<br>• Larger number (A) = 90 ÷ 2 = <strong>45</strong>.<br>• Smaller number (B) = 75 - 45 = <strong>30</strong>.<br>• <strong>Verification:</strong><br>  - Sum: 45 + 30 = 75.<br>  - Difference: 45 - 30 = 15.<br>• The numbers are <strong>45 and 30</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Systematic method shown to find numbers",
            "marks": "1.5 M"
          },
          {
            "key": "Correct numbers (45 and 30) with verification",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 3 ('Give and Take'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Give and Take', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Wildlife Forest Census",
      "text": "During an annual bird count in Keoladeo National Park, volunteers spotted 147 migratory cranes and 185 resident ducks on Saturday.",
      "question": "What was the total number of birds spotted? If the birders expected at least 350 birds, how many more birds were needed to meet their expectation?",
      "answer": "1. Total birds = 147 + 185 = 332 birds.<br>2. Expected count = 350 birds.<br>3. Shortfall = 350 - 332 = <strong>18 birds</strong>.",
      "rubric": "1.5M addition of 147 + 185 + 1.5M subtraction from 350."
    }
  },
  {
    "id": "mmg4",
    "num": 4,
    "unit": "Unit 3: Measurement & Geometry",
    "title": "Long and Short",
    "subtitle": "Length Measurement, Centimetres (cm) & Metres (m), Ruler Usage & Height Charts",
    "concepts": [
      "Measuring length using non-standard units (fingers, hand spans) vs standard units.",
      "Using a 15 cm ruler correctly: starting from 0, not from 1.",
      "Understanding standard units: Centimetre (cm), Metre (m), and Kilometre (km).",
      "1 Metre = 100 Centimetres (1 m = 100 cm); 1 Kilometre = 1000 Metres."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Ruler Measurement Principle — Measuring a 7 cm Pencil</text>\n      <!-- Ruler -->\n      <rect x=\"70\" y=\"70\" width=\"440\" height=\"40\" rx=\"4\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n      <!-- Ticks from 0 to 15 -->\n      <g stroke=\"#92400e\" stroke-width=\"1.2\">\n        <line x1=\"80\" y1=\"70\" x2=\"80\" y2=\"85\"/><text x=\"80\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#92400e\" text-anchor=\"middle\">0</text>\n        <line x1=\"110\" y1=\"70\" x2=\"110\" y2=\"80\"/>\n        <line x1=\"140\" y1=\"70\" x2=\"140\" y2=\"85\"/><text x=\"140\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#92400e\" text-anchor=\"middle\">2</text>\n        <line x1=\"170\" y1=\"70\" x2=\"170\" y2=\"80\"/>\n        <line x1=\"200\" y1=\"70\" x2=\"200\" y2=\"85\"/><text x=\"200\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#92400e\" text-anchor=\"middle\">4</text>\n        <line x1=\"230\" y1=\"70\" x2=\"230\" y2=\"80\"/>\n        <line x1=\"260\" y1=\"70\" x2=\"260\" y2=\"85\"/><text x=\"260\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#92400e\" text-anchor=\"middle\">6</text>\n        <line x1=\"290\" y1=\"70\" x2=\"290\" y2=\"85\"/><text x=\"290\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#92400e\" text-anchor=\"middle\">7</text>\n      </g>\n      <!-- Pencil -->\n      <rect x=\"80\" y=\"48\" width=\"200\" height=\"14\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"1\"/>\n      <polygon points=\"280,48 290,55 280,62\" fill=\"#fde047\"/>\n      <polygon points=\"287,53 290,55 287,57\" fill=\"#0f172a\"/>\n      <text x=\"180\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Length: 7 cm (Measured from 0 to 7)</text>\n      <text x=\"290\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Critical Rule: Always align the starting edge with the 0 mark of the ruler.</text>\n    </svg>",
    "questions": [
      {
        "category": "Unit Selection • cm, m, or km",
        "q": "Which unit (cm, m, or km) is best suited to measure: (a) The length of a safety pin, (b) The height of a coconut tree, (c) The distance between Delhi and Agra, (d) The length of a 500-rupee currency note?",
        "ans": "<strong>Appropriate Units:</strong><br>• (a) Safety pin: <strong>Centimetres (cm)</strong> (small object)<br>• (b) Coconut tree: <strong>Metres (m)</strong> (tall height)<br>• (c) Distance between Delhi and Agra: <strong>Kilometres (km)</strong> (intercity travel)<br>• (d) Currency note: <strong>Centimetres (cm)</strong> (approx 15 cm).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct units for small objects (cm)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct units for tree (m) and intercity distance (km)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Ruler Measurement Error Analysis",
        "q": "Rohan broke his ruler. The scale now starts from 3 cm instead of 0. If he places a wooden crayon with its left tip at 3 cm and the right tip reaches 11 cm, what is the actual length of the crayon?",
        "ans": "<strong>Calculation:</strong><br>• Starting point = 3 cm<br>• Ending point = 11 cm<br>• <strong>Actual length</strong> = Ending point - Starting point = 11 cm - 3 cm = <strong>8 cm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Recognizing subtraction of starting offset",
            "marks": "1.0 M"
          },
          {
            "key": "Correct calculation (11 - 3 = 8 cm)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Height Chart Comparison • Word Problem",
        "q": "In Class 3, Amit's height is 1 metre 25 centimetres. Sanya is 18 cm taller than Amit. What is Sanya's height in metres and centimetres?",
        "ans": "<strong>Solution:</strong><br>• Amit's height = 1 m 25 cm<br>• Sanya's additional height = 18 cm<br>• Sanya's height = 1 m + (25 cm + 18 cm)<br>• 25 + 18 = 43 cm<br>• <strong>Sanya's total height</strong> = <strong>1 metre 43 centimetres (1 m 43 cm)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct addition of centimetre values (25 + 18 = 43)",
            "marks": "1.0 M"
          },
          {
            "key": "Clear final representation in m and cm",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Measurement Units • Centimetre vs Metre",
        "q": "Which unit will you use to measure the following: Centimetre (cm) or Metre (m)?<br>(a) Length of a pencil.<br>(b) Height of a sugarcane plant.<br>(c) Width of your fingernail.<br>(d) Distance between two lampposts on a road.",
        "ans": "<strong>Appropriate Units:</strong><br>• <strong>(a) Length of a pencil:</strong> <strong>Centimetre (cm)</strong>.<br>• <strong>(b) Height of a sugarcane plant:</strong> <strong>Metre (m)</strong>.<br>• <strong>(c) Width of your fingernail:</strong> <strong>Centimetre (cm)</strong> (or millimetre).<br>• <strong>(d) Distance between two lampposts:</strong> <strong>Metre (m)</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct units for (a) and (b)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct units for (c) and (d)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Lali's Rope Measurement • Non-Standard Units",
        "q": "In the story, a farmer comes to Lali to buy 7 arms of rope. Lali measures the rope with her small arm.<br>(a) Why was the rope short when the farmer measured it with his own arm?<br>(b) What should the farmer do to get the right length using non-standard units?<br>(c) Why do we use standard rulers instead of arm-spans?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br><strong>(a) Reason:</strong><br>• The farmer is an adult and has a much longer arm than young Lali. 7 arms of Lali's length is shorter than 7 arms of the farmer's length.<br><br><strong>(b) Solution with Non-Standard Unit:</strong><br>• The farmer should measure the rope using his own arm, or measure 7 times his own arm-span.<br><br><strong>(c) Need for Standard Rulers:</strong><br>• Standard units like metres and centimetres do not change from person to person. A 1-metre ruler is exactly the same length worldwide, ensuring fairness in trade.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of arm length difference between adult and child",
            "marks": "1.0 M"
          },
          {
            "key": "Correct solution for farmer measuring himself",
            "marks": "1.0 M"
          },
          {
            "key": "Need for universal standard units (m, cm)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Ruler Measurement • Reading cm Scales",
        "q": "Look at a standard 15 cm plastic ruler:<br>(a) An eraser starts at mark 2 cm and ends at mark 7 cm. What is the length of the eraser?<br>(b) A leaf starts at mark 4 cm and ends at mark 12 cm. What is the length of the leaf?",
        "ans": "<strong>Step-by-Step Calculations:</strong><br><strong>(a) Eraser Length:</strong><br>• End mark - Start mark = 7 cm - 2 cm = <strong>5 cm</strong>.<br><br><strong>(b) Leaf Length:</strong><br>• End mark - Start mark = 12 cm - 4 cm = <strong>8 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation for eraser (7 - 2 = 5 cm)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct calculation for leaf (12 - 4 = 8 cm)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Unit Conversions • Metres and Centimetres",
        "q": "Convert the following measurements:<br>(a) 4 m into centimetres.<br>(b) 2 m 75 cm into centimetres.<br>(c) 350 cm into metres and centimetres.",
        "ans": "<strong>Conversions (1 m = 100 cm):</strong><br>• <strong>(a) 4 m:</strong> 4 × 100 = <strong>400 cm</strong>.<br>• <strong>(b) 2 m 75 cm:</strong> (2 × 100) + 75 = 200 + 75 = <strong>275 cm</strong>.<br>• <strong>(c) 350 cm:</strong> 300 cm + 50 cm = <strong>3 m 50 cm</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct answer for (a): 400 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Correct answer for (b): 275 cm",
            "marks": "1.0 M"
          },
          {
            "key": "Correct answer for (c): 3 m 50 cm",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 4 ('Long and Short'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Long and Short', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Inter-School Long Jump Competition",
      "text": "In the primary sports day long jump final, Danish jumped 2 metres 80 centimetres. Gurjeet jumped 15 cm less than Danish, while Rehana jumped 35 cm more than Danish.",
      "question": "How far did Gurjeet jump? How far did Rehana jump? Did Rehana cross the 3-metre mark?",
      "answer": "1. Danish = 2 m 80 cm.<br>2. Gurjeet = 2 m 80 cm - 15 cm = <strong>2 metres 65 centimetres</strong>.<br>3. Rehana = 2 m 80 cm + 35 cm = 2 m + 115 cm = 2 m + 1 m 15 cm = <strong>3 metres 15 centimetres</strong>.<br>4. Since 3 m 15 cm > 3 m, <strong>yes, Rehana crossed the 3-metre mark</strong>.",
      "rubric": "1M Gurjeet calculation + 1M Rehana calculation + 1M 3m threshold check."
    }
  },
  {
    "id": "mmg5",
    "num": 5,
    "unit": "Unit 3: Measurement & Geometry",
    "title": "Shapes and Designs",
    "subtitle": "2D Geometrical Shapes, Corners, Edges, Floor Patterns, Weaving & Tangrams",
    "concepts": [
      "Comparing edges: straight edges vs curved edges.",
      "Corners (vertices) in 2D shapes: triangles (3), quadrilaterals (4), circles (0).",
      "Floor tiling patterns: tessellations that tile without gaps.",
      "Traditional Indian textile weaving patterns and borders."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Straight Edges vs Curved Edges &amp; Corners</text>\n      <!-- Rectangle -->\n      <rect x=\"60\" y=\"55\" width=\"80\" height=\"50\" rx=\"0\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n      <circle cx=\"60\" cy=\"55\" r=\"4\" fill=\"#dc2626\"/><circle cx=\"140\" cy=\"55\" r=\"4\" fill=\"#dc2626\"/>\n      <circle cx=\"60\" cy=\"105\" r=\"4\" fill=\"#dc2626\"/><circle cx=\"140\" cy=\"105\" r=\"4\" fill=\"#dc2626\"/>\n      <text x=\"100\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">4 Straight Edges</text>\n      <text x=\"100\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#dc2626\" text-anchor=\"middle\">4 Corners (Red)</text>\n      <!-- Oval / Curved -->\n      <ellipse cx=\"260\" cy=\"80\" rx=\"50\" ry=\"30\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <text x=\"260\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">1 Continuous Curved Edge</text>\n      <text x=\"260\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#c2410c\" text-anchor=\"middle\">0 Corners</text>\n      <!-- Hexagon -->\n      <polygon points=\"420,55 450,55 465,80 450,105 420,105 405,80\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <text x=\"435\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">6 Straight Edges</text>\n      <text x=\"435\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#15803d\" text-anchor=\"middle\">6 Corners</text>\n    </svg>",
    "questions": [
      {
        "category": "Corner & Edge Classification",
        "q": "Look at these objects: (1) A sheet of paper, (2) A wheel, (3) A blackboard, (4) An egg. State whether each object has straight edges or curved edges, and how many corners it has.",
        "ans": "<strong>Classification:</strong><br>• <strong>1. Sheet of paper:</strong> Straight edges (4) → <strong>4 corners</strong>.<br>• <strong>2. Wheel:</strong> Curved edge (1 continuous circular boundary) → <strong>0 corners</strong>.<br>• <strong>3. Blackboard:</strong> Straight edges (4) → <strong>4 corners</strong>.<br>• <strong>4. Egg:</strong> Curved surface → <strong>0 corners</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct straight/curved edge identification",
            "marks": "1.0 M"
          },
          {
            "key": "Correct corner counts for all 4 items",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tangram Dissection • 7-Piece Tangram",
        "q": "In a standard 7-piece Tangram puzzle: (a) How many triangles are there? (b) Are all triangles of the same size? (c) Name the two other shapes in the puzzle.",
        "ans": "<strong>Tangram Composition:</strong><br>• <strong>(a) Triangles:</strong> There are <strong>5 triangles</strong>.<br>• <strong>(b) Sizes:</strong> <strong>No</strong>, they are of different sizes: 2 large triangles, 1 medium triangle, and 2 small triangles.<br>• <strong>(c) Other shapes:</strong> <strong>1 Square</strong> and <strong>1 Parallelogram</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct count of triangles (5)",
            "marks": "1.0 M"
          },
          {
            "key": "Distinction between large, medium, small triangles",
            "marks": "1.0 M"
          },
          {
            "key": "Naming square and parallelogram",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tessellation & Floor Patterns",
        "q": "Explain what a tessellation is. Draw or describe how a combination of triangles can tile a floor completely without leaving any gaps.",
        "ans": "<strong>Explanation:</strong><br>• A <strong>tessellation</strong> is a pattern made of repeating geometric shapes that covers a flat surface completely without any gaps or overlaps.<br>• <strong>Triangle Tiling:</strong> Two identical triangles can be placed together along their diagonal to form a rectangle. These rectangles can then be arranged in neat rows and columns to cover any floor seamlessly.",
        "marks": 2,
        "rubric": [
          {
            "key": "Definition of tessellation (no gaps, no overlaps)",
            "marks": "1.0 M"
          },
          {
            "key": "Explanation of triangle pairing to form rectangles",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Counting Shapes • Star and Geometrical Figures",
        "q": "Look at a standard 6-pointed star figure made of overlapping triangles:<br>(a) How many small triangles can you count?<br>(b) How many corners (vertices) does the 6-pointed star have?<br>(c) Does a circle have any corners?",
        "ans": "<strong>Shape Analysis:</strong><br>• <strong>(a) Small Triangles:</strong> There are <strong>6 outer pointed triangles</strong>, plus 2 large central overlapping triangles = <strong>8 triangles</strong> in total.<br>• <strong>(b) Corners:</strong> The 6 outward points form <strong>6 corners</strong> (or 12 vertices counting inner corners).<br>• <strong>(c) Circle Corners:</strong> <strong>No</strong>, a circle is a continuous smooth curve with <strong>0 corners</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct triangle count with explanation",
            "marks": "1.0 M"
          },
          {
            "key": "Correct corner identification",
            "marks": "1.0 M"
          },
          {
            "key": "Correct circle property (0 corners)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Weaver's Borders • Repeating Patterns",
        "q": "Identify the repeating rule (unit of pattern) in each border design:<br>(a) ▲ ▼ ▲ ▼ ▲ ▼ ___ ___<br>(b) 🔲 ⚪ 🔲 ⚪ 🔲 ⚪ ___ ___<br>(c) Draw the next two figures for each pattern.",
        "ans": "<strong>Patterns & Next Terms:</strong><br>• <strong>(a) Up and Down Triangles:</strong><br>  - Repeating unit: [▲, ▼]<br>  - Next two figures: <strong>▲</strong>, <strong>▼</strong>.<br><br>• <strong>(b) Square and Circle:</strong><br>  - Repeating unit: [🔲, ⚪]<br>  - Next two figures: <strong>🔲</strong>, <strong>⚪</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of repeating core unit for both patterns",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate continuation with next two shapes",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Clapper Activity • Paper Craft Geometry",
        "q": "In the 'Paper Clapper' activity described in the textbook:<br>(a) What shape of paper is used to begin with?<br>(b) How many times is the paper folded along its edges?<br>(c) What causes the loud 'pop' or clapping sound when swung down sharply?",
        "ans": "<strong>Paper Clapper Mechanics:</strong><br>• <strong>(a) Paper Shape:</strong> A standard <strong>rectangular sheet</strong> of paper (like newspaper or scrap notebook paper).<br>• <strong>(b) Folds:</strong> It is folded lengthwise in half, then folded down several times into a thick band, and finally folded in half across the middle.<br>• <strong>(c) The Clapping Sound:</strong> When swung sharply downward, the sudden rush of air opens the inner folded pocket violently, snapping the paper open to produce the loud clapping sound.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct initial paper shape (rectangular)",
            "marks": "1.0 M"
          },
          {
            "key": "Clear description of folding sequence",
            "marks": "1.0 M"
          },
          {
            "key": "Physical explanation of air pressure opening paper pocket",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Straight Edges vs Curved Edges",
        "q": "Classify the following 6 objects into 'Straight Edges Only' and 'Curved Edges / Both':<br>Postcard, Coin, Blackboard, CD/DVD, Book, Bottle cap.",
        "ans": "<strong>Classification:</strong><br>• <strong>Straight Edges Only:</strong><br>  1. Postcard<br>  2. Blackboard<br>  3. Book<br><br>• <strong>Curved Edges / Both:</strong><br>  1. Coin (Curved circular edge)<br>  2. CD/DVD (Curved circular edge)<br>  3. Bottle cap (Curved circular edge).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct straight-edge objects classified (3 objects)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct curved-edge objects classified (3 objects)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 5 ('Shapes and Designs'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Shapes and Designs', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Handloom Saree Border Design",
      "text": "A master weaver from Varanasi designs a border pattern using alternating red squares and yellow triangles. Every 10 cm repeat of the pattern uses 2 squares and 4 triangles.",
      "question": "How many squares and how many triangles will be woven along a 1-metre (100 cm) saree border?",
      "answer": "1. Total border length = 1 metre = 100 cm.<br>2. Number of 10 cm pattern repeats = 100 ÷ 10 = 10 repeats.<br>3. <strong>Squares needed</strong> = 10 × 2 = <strong>20 squares</strong>.<br>4. <strong>Triangles needed</strong> = 10 × 4 = <strong>40 triangles</strong>.",
      "rubric": "1M meter to cm conversion + 1M pattern repeats + 1M shape counts."
    }
  },
  {
    "id": "mmg6",
    "num": 6,
    "unit": "Unit 4: Advanced Operations & Practical Math",
    "title": "Fun with Give and Take",
    "subtitle": "Subtraction with Borrowing, Checking by Addition, Cricket Runs & Story Problems",
    "concepts": [
      "Subtraction of 3-digit numbers with regrouping across tens and hundreds.",
      "Verifying subtraction using inverse addition (Difference + Subtrahend = Minuend).",
      "Estimating differences by rounding to nearest 10 or 100.",
      "Solving multi-step real-world problems involving shopping and transport."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fdf2f8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">Verification of Subtraction Using Addition</text>\n      <!-- Subtraction Box -->\n      <rect x=\"70\" y=\"50\" width=\"180\" height=\"70\" rx=\"8\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"1.5\"/>\n      <text x=\"160\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#9d174d\" text-anchor=\"middle\">384 - 156 = 228</text>\n      <text x=\"160\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#be185d\" text-anchor=\"middle\">(Subtracting with borrowing)</text>\n      <!-- Arrow -->\n      <path d=\"M265,85 L315,85\" stroke=\"#db2777\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n      <!-- Addition Verification -->\n      <rect x=\"330\" y=\"50\" width=\"180\" height=\"70\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n      <text x=\"420\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">228 + 156 = 384 ✓</text>\n      <text x=\"420\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"#166534\" text-anchor=\"middle\">(Answer matches original!)</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">Always check: Difference + What you took away = What you started with!</text>\n    </svg>",
    "questions": [
      {
        "category": "Subtraction with Regrouping • Column Working",
        "q": "Solve: 503 - 247. Show step-by-step regrouping across zeroes. Then check your answer by addition.",
        "ans": "<strong>Working:</strong><br>&nbsp;&nbsp;H&nbsp;&nbsp;T&nbsp;&nbsp;O<br>&nbsp;&nbsp;5&nbsp;&nbsp;0&nbsp;&nbsp;3<br>- 2&nbsp;&nbsp;4&nbsp;&nbsp;7<br>---------<br>&nbsp;&nbsp;<strong>2&nbsp;&nbsp;5&nbsp;&nbsp;6</strong><br><br><strong>Regrouping Explanation:</strong><br>1. Ones: 3 - 7 cannot be done. Tens place has 0, so borrow from Hundreds place.<br>2. Borrow 1 Hundred from 5 (leaves 4 Hundreds) → Tens becomes 10.<br>3. Borrow 1 Ten from 10 (leaves 9 Tens) → Ones becomes 13.<br>4. Ones: 13 - 7 = <strong>6</strong>.<br>5. Tens: 9 - 4 = <strong>5</strong>.<br>6. Hundreds: 4 - 2 = <strong>2</strong>.<br><br><strong>Check by Addition:</strong> 256 + 247 = 503 ✓ Verified correct.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct borrowing across zero",
            "marks": "2.0 M"
          },
          {
            "key": "Correct difference (256)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct addition check (256 + 247 = 503)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Cricket Match Scoreboard • Target Problem",
        "q": "In a one-day cricket match, Sri Lanka made 232 runs. India has scored 123 runs so far. How many runs does India still need to win the match?",
        "ans": "<strong>Solution:</strong><br>• Sri Lanka's score = 232 runs<br>• Runs needed to win = Sri Lanka's score + 1 = 232 + 1 = <strong>233 runs</strong>.<br>• India's current score = 123 runs<br>• Runs still needed to win = 233 - 123 = <strong>110 runs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct identification of winning target (233 runs)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction (233 - 123 = 110 runs)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Estimation Check • Shopping Math",
        "q": "Mohan went shopping with ₹400. He bought a shirt for ₹195 and trousers for ₹148. Without exact calculation, estimate if he has enough money. Then find his exact change.",
        "ans": "<strong>Solution:</strong><br>1. <strong>Estimation:</strong><br>• ₹195 is approx ₹200.<br>• ₹148 is approx ₹150.<br>• Total estimate = ₹200 + ₹150 = ₹350.<br>• Since ₹350 &lt; ₹400, he <strong>has enough money</strong>.<br><br>2. <strong>Exact Calculation:</strong><br>• Total cost = ₹195 + ₹148 = ₹343.<br>• Change received = ₹400 - ₹343 = <strong>₹57</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear estimation reasoning with rounded numbers",
            "marks": "1.5 M"
          },
          {
            "key": "Exact addition (₹343) and change calculation (₹57)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cricket Match Chase • Runs Needed",
        "q": "In a one-day cricket match, Pakistan scored 232 runs. India has scored 123 runs so far.<br>(a) How many runs does India need to win?<br>(b) If Rohit scores 45 runs and Virat scores 55 runs in the next partnership, will India reach the target? Show calculations.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Runs Needed:</strong><br>• Pakistan scored = 232 runs.<br>• Winning target = 232 + 1 = <strong>233 runs</strong>.<br>• Runs scored so far = 123 runs.<br>• Runs needed to win = 233 - 123 = <strong>110 runs</strong>.<br><br><strong>(b) Partnership Runs:</strong><br>• Rohit (45) + Virat (55) = <strong>100 runs</strong>.<br>• New total score = 123 + 100 = 223 runs.<br>• Still needed to win = 233 - 223 = 10 runs.<br>• <strong>No</strong>, India will not reach the target yet; they will still need 10 more runs to win.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct winning target (233) and subtraction (110 runs)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct partnership sum (100) and conclusion (still needs 10 runs)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Geeta's Purse • Subtraction and Checking",
        "q": "Geeta had ₹368 in her purse. She bought a book for ₹123.<br>(a) How much money is left in her purse?<br>(b) Check Geeta's remaining balance using addition.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Money Left:</strong><br>• Total in purse = ₹368.<br>• Book cost = ₹123.<br>• Subtraction: 368 - 123 = (300 - 100) + (60 - 20) + (8 - 3) = 200 + 40 + 5 = <strong>₹245</strong>.<br><br><strong>(b) Checking with Addition:</strong><br>• Remaining money + Book cost = Total original money<br>• 245 + 123 = 368.<br>• <strong>Verified:</strong> The answer ₹245 is correct.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct subtraction (₹245)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct addition verification (245 + 123 = 368)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Electricity Meter Reading • Units Consumed",
        "q": "Khushboo's mother checked the electricity meter on the 1st of the month. It read 118 units. At the end of the month, the meter read 193 units.<br>(a) How many electricity units did the family use during the month?<br>(b) If each unit costs ₹5, what is the total electricity charge for the month?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Units Consumed:</strong><br>• Final reading = 193 units.<br>• Initial reading = 118 units.<br>• Units used = 193 - 118 = <strong>75 units</strong>.<br><br><strong>(b) Electricity Charge:</strong><br>• 75 units × ₹5 per unit = <strong>₹375</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct units consumed (193 - 118 = 75 units)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct cost multiplication (75 × 5 = ₹375)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Train Journey • Distance Between Stations",
        "q": "A train travels from New Delhi to Kanpur. The distances from New Delhi are:<br>• Aligarh: 130 km<br>• Tundla: 204 km<br>• Kanpur: 435 km<br>(a) Find the distance between Aligarh and Tundla.<br>(b) Find the distance between Tundla and Kanpur.",
        "ans": "<strong>Step-by-Step Subtraction:</strong><br><strong>(a) Aligarh to Tundla:</strong><br>• 204 km - 130 km = <strong>74 km</strong>.<br><br><strong>(b) Tundla to Kanpur:</strong><br>• 435 km - 204 km = <strong>231 km</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct distance for (a): 74 km",
            "marks": "1.5 M"
          },
          {
            "key": "Correct distance for (b): 231 km",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 6 ('Fun with Give and Take'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Fun with Give and Take', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Village Water Tank Maintenance",
      "text": "A village overhead water tank has a capacity of 850 litres. In the morning, 475 litres of water were consumed by households. Later, the pump filled 320 litres of fresh water into the tank.",
      "question": "How much water was in the tank at the end of the day? Can the tank take another 200 litres without overflowing?",
      "answer": "1. Water left after morning usage = 850 - 475 = 375 litres.<br>2. Water after fresh pumping = 375 + 320 = <strong>695 litres</strong>.<br>3. Space remaining in tank = 850 - 695 = 155 litres.<br>4. Since 155 litres < 200 litres, <strong>no, adding 200 litres will cause the tank to overflow</strong> (by 45 litres).",
      "rubric": "1M morning subtraction + 1M pumping addition + 1M capacity check."
    }
  },
  {
    "id": "mmg7",
    "num": 7,
    "unit": "Unit 4: Advanced Operations & Practical Math",
    "title": "Time Goes on...",
    "subtitle": "Seconds, Minutes, Hours, Days, Months, Years, Timeline & Age Problems",
    "concepts": [
      "Categorizing events by duration: taking seconds, minutes, hours, days, months, or years.",
      "Reading dates and understanding different date notations (DD/MM/YYYY).",
      "Building a personal life timeline: chronological ordering of milestone events.",
      "Calculating age difference between family members."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#a16207\" text-anchor=\"middle\">Personal Milestone Timeline — Chronological Ordering</text>\n      <!-- Timeline line -->\n      <line x1=\"60\" y1=\"85\" x2=\"520\" y2=\"85\" stroke=\"#ca8a04\" stroke-width=\"3\"/>\n      <!-- Milestone nodes -->\n      <circle cx=\"100\" cy=\"85\" r=\"7\" fill=\"#ea580c\"/>\n      <text x=\"100\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Born</text>\n      <text x=\"100\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#713f12\" text-anchor=\"middle\">Age 0</text>\n      <circle cx=\"200\" cy=\"85\" r=\"7\" fill=\"#ea580c\"/>\n      <text x=\"200\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">First Steps</text>\n      <text x=\"200\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#713f12\" text-anchor=\"middle\">Age 1</text>\n      <circle cx=\"320\" cy=\"85\" r=\"7\" fill=\"#ea580c\"/>\n      <text x=\"320\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Joined School</text>\n      <text x=\"320\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#713f12\" text-anchor=\"middle\">Age 4</text>\n      <circle cx=\"480\" cy=\"85\" r=\"7\" fill=\"#ea580c\"/>\n      <text x=\"480\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Class 3 Now</text>\n      <text x=\"480\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#713f12\" text-anchor=\"middle\">Age 8</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#854d0e\" text-anchor=\"middle\">A timeline arranges historical events in the exact order they occurred.</text>\n    </svg>",
    "questions": [
      {
        "category": "Time Duration Estimation • Categorization",
        "q": "Classify each activity into 'Seconds', 'Minutes', 'Hours', or 'Days': (a) To blink your eyes, (b) To knit a woollen sweater, (c) To boil a cup of milk, (d) For curd to set from warm milk.",
        "ans": "<strong>Classifications:</strong><br>• (a) Blink your eyes: <strong>Seconds</strong> (fraction of a second)<br>• (b) Knit a sweater: <strong>Days</strong> (usually several days or weeks)<br>• (c) Boil a cup of milk: <strong>Minutes</strong> (approx 3 to 5 minutes)<br>• (d) For curd to set: <strong>Hours</strong> (approx 6 to 8 hours).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct duration category for all 4 activities",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Birth Certificate Analysis • Date Calculations",
        "q": "Look at Bincy's birth certificate: Date of birth: 02/05/2018 (2 May 2018). (a) How old was Bincy on 2 May 2026? (b) In which year did she celebrate her 5th birthday?",
        "ans": "<strong>Analysis:</strong><br>• <strong>(a) Age on 2 May 2026:</strong><br>2026 - 2018 = <strong>8 years old</strong>.<br>• <strong>(b) 5th Birthday Year:</strong><br>2018 + 5 = <strong>2023</strong> (on 2 May 2023).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct subtraction for age (8 years)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct year calculation for 5th birthday (2023)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Age Difference Word Problem",
        "q": "Rohan's mother is 34 years old. His grandmother is 62 years old. (a) What is the age difference between Rohan's mother and grandmother? (b) If Rohan is 8 years old, by how many years is his mother older than him?",
        "ans": "<strong>Calculations:</strong><br>• <strong>(a) Mother &amp; Grandmother:</strong><br>62 - 34 = <strong>28 years</strong>.<br>• <strong>(b) Mother &amp; Rohan:</strong><br>34 - 8 = <strong>26 years</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct subtraction for grandmother & mother (28 years)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct subtraction for mother & Rohan (26 years)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Ultat-Pulta Story • Absurd Time Units Correction",
        "q": "Correct the ridiculous time words in this funny story:<br><em>'As the sun rises in the evening, Sumana wakes up. She washes her face quickly in 2 hours and runs out to the pond. She takes 10 months to reach the pond and catches a fish in 2 days.'</em><br>Rewrite the story with sensible time units (seconds, minutes, morning, hours).",
        "ans": "<strong>Corrected Sensible Story:</strong><br>• 'As the sun rises in the <strong>morning</strong> (not evening), Sumana wakes up. She washes her face quickly in <strong>2 minutes</strong> (not 2 hours) and runs out to the pond. She takes <strong>10 minutes</strong> (not 10 months) to reach the pond and catches a fish in <strong>2 minutes/seconds</strong> (not 2 days).'",
        "marks": 3,
        "rubric": [
          {
            "key": "Corrected morning for sunrise",
            "marks": "1.0 M"
          },
          {
            "key": "Corrected minutes for washing face and walking",
            "marks": "1.0 M"
          },
          {
            "key": "Sensible duration for catching fish",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Calendar Magic • 3x3 Magic Square Sum",
        "q": "On any standard monthly calendar page, draw a 3x3 square covering 9 dates.<br>(a) If the date in the exact center of the 3x3 box is 14, what is the sum of all 9 dates in the box?<br>(b) Explain the quick trick to find this sum in 2 seconds.",
        "ans": "<strong>Step-by-Step Calendar Magic:</strong><br><strong>(a) Sum of 9 Dates:</strong><br>• Quick Magic Formula: <strong>Center Number × 9</strong>.<br>• Center number = 14.<br>• Sum = 14 × 9 = <strong>126</strong>.<br><br><strong>(b) The Trick Explained:</strong><br>• On a calendar, the numbers symmetrically surround the center number (e.g., 14-8 and 14+8, 14-7 and 14+7, 14-1 and 14+1).<br>• The average of all 9 numbers is exactly the center number. Therefore, simply multiplying the center date by 9 gives the exact total of all 9 dates instantly!",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct total sum (126)",
            "marks": "1.5 M"
          },
          {
            "key": "Clear mathematical explanation of multiplying center date by 9",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Birth Certificate Analysis • Bindo's Record",
        "q": "Study Bindo's birth certificate details:<br>• Date of Birth: 02/05/2012 (2nd May 2012)<br>• Registration Date: 02/06/2012<br>(a) In which month and year was Bindo born?<br>(b) How old was Bindo on 2nd May 2020?<br>(c) After how many days was the birth registered?",
        "ans": "<strong>Birth Certificate Data:</strong><br>• <strong>(a) Birth Month & Year:</strong> Born in <strong>May 2012</strong> (Month 05 is May).<br>• <strong>(b) Age on 02/05/2020:</strong> 2020 - 2012 = <strong>8 years old</strong>.<br>• <strong>(c) Registration Duration:</strong> From 2nd May to 2nd June = <strong>1 month (or 31 days)</strong> later.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct month (May) and year (2012)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct age calculation (8 years)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct registration duration (1 month / 31 days)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "How Long Does It Take? • Duration Estimates",
        "q": "Categorize the following activities into 'Takes Minutes', 'Takes Hours', and 'Takes Days/Months':<br>(a) Boiling an egg<br>(b) Knitting a woolen sweater<br>(c) Watching a movie<br>(d) Brushing your teeth<br>(e) Ripening of a mango on a tree",
        "ans": "<strong>Duration Categorization:</strong><br>• <strong>Takes Minutes:</strong><br>  - Brushing your teeth (~2-3 minutes)<br>  - Boiling an egg (~10 minutes)<br><br>• <strong>Takes Hours:</strong><br>  - Watching a movie (~2-3 hours)<br><br>• <strong>Takes Days or Months:</strong><br>  - Knitting a sweater (~several days/weeks)<br>  - Ripening of a mango (~a few weeks/months).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct minute-duration activities",
            "marks": "1.0 M"
          },
          {
            "key": "Correct hour-duration activities",
            "marks": "1.0 M"
          },
          {
            "key": "Correct days/months-duration activities",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 7 ('Time Goes on...'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Time Goes on...', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Family Mango Tree Planting Record",
      "text": "Grandfather planted a mango sapling in the family orchard in July 2016. The tree bore its first batch of mangoes in July 2021.",
      "question": "How many years did the sapling take to bear fruit? If it is now July 2026, for how many years has the tree been bearing fruit?",
      "answer": "1. Years to first fruit = 2021 - 2016 = <strong>5 years</strong>.<br>2. Years bearing fruit up to 2026 = 2026 - 2021 = <strong>5 years</strong> (or 6 harvest seasons including 2021).",
      "rubric": "1.5M years to first fruit + 1.5M active fruiting years."
    }
  },
  {
    "id": "mmg8",
    "num": 8,
    "unit": "Unit 5: Weight, Multiplication & Grouping",
    "title": "Who Is Heavier?",
    "subtitle": "Mass / Weight (kg & g), Pan Balance, Pumpkin Prize & Grocery Packing",
    "concepts": [
      "Understanding mass and weight: heavier vs lighter.",
      "Standard units: Kilogram (kg) and Gram (g).",
      "1 Kilogram = 1000 Grams (1 kg = 1000 g); 1/2 kg = 500 g.",
      "Balancing pans: when both pans are level, weights are equal."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Pan Balance — Comparing Weights (Watermelon vs Apples)</text>\n      <!-- Stand -->\n      <line x1=\"290\" y1=\"45\" x2=\"290\" y2=\"120\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <polygon points=\"270,120 310,120 290,110\" fill=\"#334155\"/>\n      <!-- Beam tilted (left heavier) -->\n      <line x1=\"160\" y1=\"75\" x2=\"420\" y2=\"55\" stroke=\"#334155\" stroke-width=\"3\"/>\n      <!-- Left Pan (Down) -->\n      <line x1=\"160\" y1=\"75\" x2=\"140\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <line x1=\"160\" y1=\"75\" x2=\"180\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <path d=\"M130,105 Q160,120 190,105\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n      <circle cx=\"160\" cy=\"98\" r=\"14\" fill=\"#15803d\"/>\n      <text x=\"160\" y=\"138\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Watermelon (3 kg)</text>\n      <!-- Right Pan (Up) -->\n      <line x1=\"420\" y1=\"55\" x2=\"400\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <line x1=\"420\" y1=\"55\" x2=\"440\" y2=\"85\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <path d=\"M390,85 Q420,100 450,85\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n      <circle cx=\"410\" cy=\"80\" r=\"7\" fill=\"#dc2626\"/>\n      <circle cx=\"430\" cy=\"80\" r=\"7\" fill=\"#dc2626\"/>\n      <text x=\"420\" y=\"118\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">2 Apples (400 g)</text>\n      <text x=\"290\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#c2410c\" text-anchor=\"middle\">The heavier pan always tips down!</text>\n    </svg>",
    "questions": [
      {
        "category": "Weight Unit Selection • Real-World Items",
        "q": "State whether you would measure the weight of the following in 'Kilograms (kg)' or 'Grams (g)': (a) A sack of wheat, (b) A gold ring, (c) A geometry compass, (d) A bag of cement.",
        "ans": "<strong>Appropriate Units:</strong><br>• (a) Sack of wheat: <strong>Kilograms (kg)</strong> (heavy staple, e.g., 25 kg)<br>• (b) Gold ring: <strong>Grams (g)</strong> (light jewellery, e.g., 5-8 g)<br>• (c) Geometry compass: <strong>Grams (g)</strong> (light tool, e.g., 50 g)<br>• (d) Bag of cement: <strong>Kilograms (kg)</strong> (heavy industrial bag, 50 kg).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct units for wheat and cement (kg)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct units for ring and compass (g)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Balance Calculations • Grams & Kilograms",
        "q": "A grocery shopkeeper has to weigh 2 kg of sugar. He has only 500 g weights. (a) How many 500 g weights must he put on the weight pan? (b) How many grams are in 2 kg?",
        "ans": "<strong>Solution:</strong><br>• <strong>(b) Conversion:</strong> 1 kg = 1000 g, therefore 2 kg = 2 × 1000 g = <strong>2,000 grams</strong>.<br>• <strong>(a) Weights needed:</strong> 2,000 g ÷ 500 g = <strong>4 weights of 500 g</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conversion to 2000 g",
            "marks": "1.0 M"
          },
          {
            "key": "Correct number of 500 g weights (4)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Equal Weight Comparison • Volume vs Mass",
        "q": "Which is heavier: 1 kg of iron or 1 kg of cotton wool? Explain why many people mistakenly think iron is heavier.",
        "ans": "<strong>Explanation:</strong><br>• <strong>Answer:</strong> <strong>Both are equally heavy.</strong> Both weigh exactly 1 kilogram (1 kg = 1 kg).<br>• <strong>Reason for Common Mistake:</strong> Iron is dense and occupies a very small volume, whereas 1 kg of cotton is fluffy and occupies a huge bag. People confuse larger size or density with weight, but on a balance scale, both balance each other perfectly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear assertion that both weigh the same (1 kg)",
            "marks": "1.5 M"
          },
          {
            "key": "Scientific explanation distinguishing volume/density from mass",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Gur and Groundnuts • Volume vs Weight",
        "q": "Shabnam bought 1 kg of jaggery (gur) and 1 kg of groundnuts in the market.<br>(a) Which is heavier: 1 kg of jaggery or 1 kg of groundnuts?<br>(b) Why does the bag of groundnuts look so much bigger than the bag of jaggery?",
        "ans": "<strong>Step-by-Step Physics & Math:</strong><br><strong>(a) Weight Comparison:</strong><br>• Both weigh <strong>exactly the same</strong> (1 kg = 1 kg). Neither is heavier.<br><br><strong>(b) Volume Difference:</strong><br>• Groundnuts are light and hollow with air spaces inside their shells (low density), so 1 kg takes up a large space (volume).<br>• Jaggery is dense and solid (high density), so 1 kg occupies a small, compact volume.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct conclusion that both weigh equal (1 kg)",
            "marks": "1.5 M"
          },
          {
            "key": "Scientific explanation of density and volume differences",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Double Your Weight • Kunjamma's Parents Tradition",
        "q": "At Kunjamma's birth, her parents distributed sweets equal to double her weight. Kunjamma weighed 3 kg at birth.<br>(a) How many kilograms of sweets did they distribute at her birth?<br>(b) On her 4th birthday, Kunjamma weighed 15 kg. How many kilograms of sweets were distributed then?",
        "ans": "<strong>Step-by-Step Calculations:</strong><br><strong>(a) Sweets at Birth:</strong><br>• Weight at birth = 3 kg.<br>• Double her weight = 2 × 3 kg = <strong>6 kg of sweets</strong>.<br><br><strong>(b) Sweets on 4th Birthday:</strong><br>• Weight on 4th birthday = 15 kg.<br>• Double her weight = 2 × 15 kg = <strong>30 kg of sweets</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation for birth (6 kg)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct calculation for 4th birthday (30 kg)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Balance Scale Estimation • Heavier or Lighter",
        "q": "Guess which object is heavier than 1 kg and which is lighter than 1 kg:<br>(a) Your school bag full of books.<br>(b) A geometry box compass.<br>(c) A brick.<br>(d) A pair of socks.",
        "ans": "<strong>Weight Estimation:</strong><br>• <strong>(a) School bag full of books:</strong> <strong>Heavier than 1 kg</strong> (~3 to 5 kg).<br>• <strong>(b) Geometry box compass:</strong> <strong>Lighter than 1 kg</strong> (~50 grams).<br>• <strong>(c) A brick:</strong> <strong>Heavier than 1 kg</strong> (~2.5 to 3 kg).<br>• <strong>(d) A pair of socks:</strong> <strong>Lighter than 1 kg</strong> (~40 grams).",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct classifications for (a) and (b)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct classifications for (c) and (d)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Grocery Package Weights • Finding Total Weight",
        "q": "Ramesh bought from the supermarket:<br>• 2 kg of rice<br>• 500 g of dal<br>• 250 g of tea leaves<br>• 250 g of almonds<br>(a) Find the total weight of items bought in kilograms and grams.<br>(b) Is the total weight more than 3 kg or less than 3 kg?",
        "ans": "<strong>Step-by-Step Addition:</strong><br>• Rice = 2 kg 000 g.<br>• Dal = 500 g.<br>• Tea leaves = 250 g.<br>• Almonds = 250 g.<br>• Grams total: 500 + 250 + 250 = 1000 g = 1 kg.<br>• Kilograms total: 2 kg + 1 kg = <strong>3 kg 000 g (exactly 3 kg)</strong>.<br><br><strong>(b) Comparison:</strong><br>• The total weight is <strong>exactly 3 kg</strong> (neither more nor less).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct conversion and addition (3 kg 000 g)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct equality comparison",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 8 ('Who Is Heavier?'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Who Is Heavier?', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Sports Equipment Delivery",
      "text": "The sports department received a parcel containing 4 footballs (each weighing 400 g) and 2 cricket bats (each weighing 1 kg 200 g).",
      "question": "What is the total weight of all the footballs? What is the combined total weight of all sports equipment in kilograms and grams?",
      "answer": "1. Total footballs weight = 4 × 400 g = 1,600 g = 1 kg 600 g.<br>2. Total cricket bats weight = 2 × (1 kg 200 g) = 2 kg 400 g.<br>3. Combined weight = (1 kg 600 g) + (2 kg 400 g) = 3 kg + 1000 g = 3 kg + 1 kg = <strong>4 kilograms (4 kg)</strong>.",
      "rubric": "1M footballs multiplication + 1M bats multiplication + 1M combined weight in kg."
    }
  },
  {
    "id": "mmg9",
    "num": 9,
    "unit": "Unit 5: Weight, Multiplication & Grouping",
    "title": "How Many Times?",
    "subtitle": "Repeated Addition, Multiplication Tables, Stick Multiplication & Word Problems",
    "concepts": [
      "Multiplication as 'times' or repeated addition: 4 times 3 = 3 + 3 + 3 + 3 = 12.",
      "Drawing stick patterns to understand multiplication intersections.",
      "Multiplication properties: multiplying by 0 gives 0, multiplying by 1 gives the same number.",
      "Solving 2-digit by 1-digit multiplication problems."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#faf5ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#6b21a8\" text-anchor=\"middle\">Stick Multiplication Method — 3 Sticks Crossing 4 Sticks = 12 Dots</text>\n      <!-- 3 Horizontal sticks -->\n      <line x1=\"120\" y1=\"55\" x2=\"380\" y2=\"55\" stroke=\"#7e22ce\" stroke-width=\"2.5\"/>\n      <line x1=\"120\" y1=\"80\" x2=\"380\" y2=\"80\" stroke=\"#7e22ce\" stroke-width=\"2.5\"/>\n      <line x1=\"120\" y1=\"105\" x2=\"380\" y2=\"105\" stroke=\"#7e22ce\" stroke-width=\"2.5\"/>\n      <!-- 4 Vertical sticks -->\n      <line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"120\" stroke=\"#a855f7\" stroke-width=\"2.5\"/>\n      <line x1=\"210\" y1=\"40\" x2=\"210\" y2=\"120\" stroke=\"#a855f7\" stroke-width=\"2.5\"/>\n      <line x1=\"260\" y1=\"40\" x2=\"260\" y2=\"120\" stroke=\"#a855f7\" stroke-width=\"2.5\"/>\n      <line x1=\"310\" y1=\"40\" x2=\"310\" y2=\"120\" stroke=\"#a855f7\" stroke-width=\"2.5\"/>\n      <!-- Dots at intersections -->\n      <g fill=\"#ec4899\">\n        <circle cx=\"160\" cy=\"55\" r=\"4\"/><circle cx=\"210\" cy=\"55\" r=\"4\"/><circle cx=\"260\" cy=\"55\" r=\"4\"/><circle cx=\"310\" cy=\"55\" r=\"4\"/>\n        <circle cx=\"160\" cy=\"80\" r=\"4\"/><circle cx=\"210\" cy=\"80\" r=\"4\"/><circle cx=\"260\" cy=\"80\" r=\"4\"/><circle cx=\"310\" cy=\"80\" r=\"4\"/>\n        <circle cx=\"160\" cy=\"105\" r=\"4\"/><circle cx=\"210\" cy=\"105\" r=\"4\"/><circle cx=\"260\" cy=\"105\" r=\"4\"/><circle cx=\"310\" cy=\"105\" r=\"4\"/>\n      </g>\n      <rect x=\"420\" y=\"55\" width=\"120\" height=\"60\" rx=\"8\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"1.5\"/>\n      <text x=\"480\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#581c87\" text-anchor=\"middle\">3 × 4 = 12</text>\n      <text x=\"480\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#7e22ce\" text-anchor=\"middle\">12 Crossing Points</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#6b21a8\" text-anchor=\"middle\">Counting the crossing points gives the product without memorizing tables!</text>\n    </svg>",
    "questions": [
      {
        "category": "Stick Crossing Multiplication • Concept",
        "q": "Using the stick crossing method: (a) How many sticks crossing in each direction would you draw for 4 × 5? (b) How many crossing points (dots) will you count?",
        "ans": "<strong>Solution:</strong><br>• <strong>(a) Sticks:</strong> Draw <strong>4 horizontal sticks</strong> and <strong>5 vertical sticks</strong> crossing them.<br>• <strong>(b) Crossing Points:</strong> Each of the 4 horizontal sticks crosses all 5 vertical sticks. Total crossing points = 4 × 5 = <strong>20 dots</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct number of horizontal and vertical sticks",
            "marks": "1.0 M"
          },
          {
            "key": "Correct product calculation (20 dots)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Word Problem • Repeated Grouping",
        "q": "A spider has 8 legs. How many legs do 6 spiders have altogether? Write both the repeated addition sentence and the multiplication fact.",
        "ans": "<strong>Solution:</strong><br>• Legs per spider = 8<br>• Number of spiders = 6<br>• <strong>Repeated Addition:</strong> 8 + 8 + 8 + 8 + 8 + 8 = <strong>48 legs</strong>.<br>• <strong>Multiplication Fact:</strong> 6 × 8 = <strong>48 legs</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct repeated addition statement",
            "marks": "1.0 M"
          },
          {
            "key": "Correct multiplication statement (6 × 8 = 48)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "2-Digit Multiplication • Box Method",
        "q": "Solve 23 × 4 using the split/box multiplication method. Show the breakdown into tens and ones.",
        "ans": "<strong>Step-by-step Box Method:</strong><br>1. Split 23 into 20 + 3.<br>2. Multiply each part by 4:<br>• 20 × 4 = <strong>80</strong><br>• 3 × 4 = <strong>12</strong><br>3. Add the two partial products:<br>• 80 + 12 = <strong>92</strong>.<br>Therefore, <strong>23 × 4 = 92</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct splitting of 23 into 20 and 3",
            "marks": "1.0 M"
          },
          {
            "key": "Correct partial products (80 and 12)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct final sum (92)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Leggy Animals • Multiplication as Repeated Addition",
        "q": "There are 5 spiders in a web. Each spider has 8 legs.<br>(a) How many legs are there altogether? Show using repeated addition.<br>(b) Write the multiplication fact.<br>(c) If 3 octopuses join them (each with 8 arms), how many arms do the octopuses have?",
        "ans": "<strong>Step-by-Step Multiplication:</strong><br><strong>(a) Repeated Addition:</strong><br>• 8 + 8 + 8 + 8 + 8 = <strong>40 legs</strong>.<br><br><strong>(b) Multiplication Fact:</strong><br>• 5 × 8 = <strong>40 legs</strong>.<br><br><strong>(c) Octopuses:</strong><br>• 3 octopuses × 8 arms = <strong>24 arms</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct repeated addition string (8+8+8+8+8 = 40)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct multiplication fact (5 × 8 = 40)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct octopus calculation (3 × 8 = 24)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Multiplication with Sticks • Vedic Method",
        "q": "Mithu had some matchsticks. She arranged them: 2 vertical sticks crossed by 3 horizontal sticks.<br>(a) How many crossing intersection points are formed?<br>(b) How can you find 4 × 5 using sticks?<br>(c) What is 4 × 5?",
        "ans": "<strong>Stick Multiplication Method:</strong><br><strong>(a) 2 by 3 Sticks:</strong><br>• 2 vertical sticks crossed by 3 horizontal sticks create 2 × 3 = <strong>6 intersection points</strong>.<br><br><strong>(b) Method for 4 × 5:</strong><br>• Place <strong>4 vertical sticks</strong> parallel to each other.<br>• Cross them with <strong>5 horizontal sticks</strong>.<br>• Count all the points where the sticks cross each other.<br><br><strong>(c) Result:</strong><br>• 4 × 5 = <strong>20 intersection points</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct intersection points for 2x3 (6 points)",
            "marks": "1.0 M"
          },
          {
            "key": "Clear procedural explanation of stick arrangement",
            "marks": "1.0 M"
          },
          {
            "key": "Correct product for 4 × 5 = 20",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tarva Frog Jumps • Step Multiplication",
        "q": "Tarva the frog jumps 3 steps at a time along a number line.<br>(a) Write the numbers Tarva lands on during his first 6 jumps.<br>(b) Which jump will land Tarva on number 27?",
        "ans": "<strong>Multiplication by 3:</strong><br><strong>(a) First 6 jumps:</strong><br>• 1 jump: 1 × 3 = <strong>3</strong><br>• 2 jumps: 2 × 3 = <strong>6</strong><br>• 3 jumps: 3 × 3 = <strong>9</strong><br>• 4 jumps: 4 × 3 = <strong>12</strong><br>• 5 jumps: 5 × 3 = <strong>15</strong><br>• 6 jumps: 6 × 3 = <strong>18</strong>.<br><br><strong>(b) Jump to reach 27:</strong><br>• 27 ÷ 3 = <strong>9th jump</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct first 6 multiples of 3 (3, 6, 9, 12, 15, 18)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct division to find 9th jump",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Word Problem • Classroom Desks",
        "q": "In Class 3, there are 8 rows of desks. In each row, there are 6 desks.<br>(a) How many desks are in the classroom in total?<br>(b) If 2 children sit at every desk, how many children can sit in the classroom?",
        "ans": "<strong>Step-by-Step Multiplication:</strong><br><strong>(a) Total Desks:</strong><br>• 8 rows × 6 desks per row = <strong>48 desks</strong>.<br><br><strong>(b) Total Seating Capacity:</strong><br>• 48 desks × 2 children per desk = <strong>96 children</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct desks multiplication (8 × 6 = 48)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct seating multiplication (48 × 2 = 96)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 9 ('How Many Times?'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'How Many Times?', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Garden Flowerbed Rows",
      "text": "A municipal botanical garden has 14 flowerbeds. Each flowerbed is planted with 6 marigold plants.",
      "question": "How many marigold plants are in the garden? If 5 plants dry up, how many healthy plants remain?",
      "answer": "1. Total marigold plants = 14 × 6 = (10 × 6) + (4 × 6) = 60 + 24 = <strong>84 plants</strong>.<br>2. Healthy plants remaining = 84 - 5 = <strong>79 healthy plants</strong>.",
      "rubric": "1.5M multiplication of 14 × 6 + 1.5M subtraction of 5 dried plants."
    }
  },
  {
    "id": "mmg10",
    "num": 10,
    "unit": "Unit 6: Patterns, Capacity & Sharing",
    "title": "Play with Patterns",
    "subtitle": "Repeating Patterns, Growing Patterns, Number Sequences & Secret Coded Messages",
    "concepts": [
      "Identifying rules of repeating shape patterns (AB, AAB, ABC).",
      "Growing patterns in shapes and numbers (e.g., triangular numbers, square sequences).",
      "Even and odd number patterns: ending digits (0, 2, 4, 6, 8 vs 1, 3, 5, 7, 9).",
      "Secret messages: decoding messages with letter-to-number replacement rules."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Growing Number Patterns &amp; Secret Decoding</text>\n      <!-- Growing block pattern -->\n      <rect x=\"70\" y=\"90\" width=\"20\" height=\"20\" fill=\"#93c5fd\" stroke=\"#1d4ed8\"/>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">1</text>\n      <rect x=\"130\" y=\"70\" width=\"20\" height=\"40\" fill=\"#93c5fd\" stroke=\"#1d4ed8\"/>\n      <rect x=\"150\" y=\"90\" width=\"20\" height=\"20\" fill=\"#93c5fd\" stroke=\"#1d4ed8\"/>\n      <text x=\"150\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">3</text>\n      <rect x=\"210\" y=\"50\" width=\"20\" height=\"60\" fill=\"#93c5fd\" stroke=\"#1d4ed8\"/>\n      <rect x=\"230\" y=\"70\" width=\"20\" height=\"40\" fill=\"#93c5fd\" stroke=\"#1d4ed8\"/>\n      <rect x=\"250\" y=\"90\" width=\"20\" height=\"20\" fill=\"#93c5fd\" stroke=\"#1d4ed8\"/>\n      <text x=\"240\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">6</text>\n      <!-- Secret Code Box -->\n      <rect x=\"330\" y=\"50\" width=\"200\" height=\"70\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n      <text x=\"430\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#1e3a8a\" text-anchor=\"middle\">Rule: A=1, B=2, C=3...</text>\n      <text x=\"430\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"900\" fill=\"#2563eb\" text-anchor=\"middle\">Code: 13-1-20-8 = MATH</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#1e40af\" text-anchor=\"middle\">Patterns can grow by rules, repeat in cycles, or hide secret words!</text>\n    </svg>",
    "questions": [
      {
        "category": "Growing Patterns • Number Rules",
        "q": "Look at the pattern: 1, 3, 6, 10, ___, ___. (a) What are the next two numbers? (b) State the mathematical rule for how the pattern grows.",
        "ans": "<strong>Analysis:</strong><br>• From 1 to 3: +2<br>• From 3 to 6: +3<br>• From 6 to 10: +4<br>• Next step: +5 → 10 + 5 = <strong>15</strong>.<br>• Next step: +6 → 15 + 6 = <strong>21</strong>.<br>• <strong>(a) Next two numbers:</strong> <strong>15, 21</strong> (Triangular numbers).<br>• <strong>(b) Rule:</strong> Each step adds 1 more than was added in the previous step (+2, +3, +4, +5, +6...).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation of 15 and 21",
            "marks": "1.5 M"
          },
          {
            "key": "Clear rule formulation explaining growing increments",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Even and Odd Patterns • Properties",
        "q": "Classify the following as Even or Odd: 246, 381, 500, 789. What happens when you add two odd numbers together? Give an example.",
        "ans": "<strong>Classification:</strong><br>• 246: Ends in 6 → <strong>EVEN</strong><br>• 381: Ends in 1 → <strong>ODD</strong><br>• 500: Ends in 0 → <strong>EVEN</strong><br>• 789: Ends in 9 → <strong>ODD</strong>.<br><br><strong>Rule:</strong> The sum of any two odd numbers is always an <strong>EVEN number</strong>.<br>• <em>Example:</em> 3 (Odd) + 5 (Odd) = 8 (Even); 7 + 9 = 16 (Even).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct even/odd classification for all 4 numbers",
            "marks": "1.5 M"
          },
          {
            "key": "Correct rule and supporting example (Odd + Odd = Even)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Secret Coded Message • Decoding",
        "q": "If each letter is replaced by its alphabetical position (A=1, B=2, C=3... Z=26): (a) Decode the message: '7 - 15 - 15 - 4'. (b) Encode the word 'BOOK' in numbers.",
        "ans": "<strong>Solutions:</strong><br>• <strong>(a) Decoding '7 - 15 - 15 - 4':</strong><br>7 = G, 15 = O, 15 = O, 4 = D → <strong>GOOD</strong>.<br>• <strong>(b) Encoding 'BOOK':</strong><br>B = 2, O = 15, O = 15, K = 11 → <strong>2 - 15 - 15 - 11</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct decoding to GOOD",
            "marks": "1.0 M"
          },
          {
            "key": "Correct encoding for BOOK (2-15-15-11)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Number Towers • Pyramid Patterns",
        "q": "In a number tower, the number in each block is the sum of the two blocks directly below it.<br>The bottom row has blocks: [10], [20], [30].<br>(a) Find the numbers in the two blocks of the second row.<br>(b) Find the number in the top block of the tower.",
        "ans": "<strong>Step-by-Step Number Tower:</strong><br>• Bottom row: [10], [20], [30].<br><strong>(a) Second Row:</strong><br>• First block = 10 + 20 = <strong>30</strong>.<br>• Second block = 20 + 30 = <strong>50</strong>.<br><br><strong>(b) Top Block:</strong><br>• Top block = 30 + 50 = <strong>80</strong>.<br><br><strong>Completed Tower:</strong><br>      [ 80 ]<br>    [ 30 ] [ 50 ]<br>  [ 10 ] [ 20 ] [ 30 ]",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct second row blocks (30 and 50)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct top block (80)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Secret Messages • Number-Alphabet Code",
        "q": "Teenu and Jaggu are sending secret messages using the rule: A = 1, B = 2, C = 3 ... Z = 26.<br>(a) Decode the secret message: '7 - 15 - 15 - 4'<br>(b) Encode the word 'MATHS' into numbers.",
        "ans": "<strong>Step-by-Step Cryptography:</strong><br><strong>(a) Decoding '7 - 15 - 15 - 4':</strong><br>• 7 = G<br>• 15 = O<br>• 15 = O<br>• 4 = D<br>• Decoded word: <strong>GOOD</strong>.<br><br><strong>(b) Encoding 'MATHS':</strong><br>• M = 13<br>• A = 1<br>• T = 20<br>• H = 8<br>• S = 19<br>• Secret code: <strong>13 - 1 - 20 - 8 - 19</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct decoding of 'GOOD'",
            "marks": "1.5 M"
          },
          {
            "key": "Correct encoding of 'MATHS' (13-1-20-8-19)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Growing Patterns • Geometric Series",
        "q": "Look at the growing dot patterns:<br>Figure 1: 1 dot<br>Figure 2: 3 dots (1 + 2)<br>Figure 3: 6 dots (1 + 2 + 3)<br>(a) How many dots will be in Figure 4?<br>(b) How many dots will be in Figure 5?<br>(c) What kind of numbers are these called?",
        "ans": "<strong>Growing Pattern (Triangular Numbers):</strong><br>• <strong>(a) Figure 4:</strong> 1 + 2 + 3 + 4 = <strong>10 dots</strong>.<br>• <strong>(b) Figure 5:</strong> 1 + 2 + 3 + 4 + 5 = <strong>15 dots</strong>.<br>• <strong>(c) Number Type:</strong> These are called <strong>Triangular Numbers</strong> because dots arranged in these quantities form equilateral triangles.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct dots in Figure 4 (10 dots)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct dots in Figure 5 (15 dots)",
            "marks": "1.0 M"
          },
          {
            "key": "Identification of triangular numbers",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Even and Odd Patterns • Digit Endings",
        "q": "(a) Write all even numbers between 41 and 51.<br>(b) What digits do all even numbers end with?<br>(c) Is the sum of two even numbers always even or odd? Give an example.",
        "ans": "<strong>Even & Odd Rules:</strong><br>• <strong>(a) Even Numbers:</strong> <strong>42, 44, 46, 48, 50</strong>.<br>• <strong>(b) Even Endings:</strong> All even numbers end in <strong>0, 2, 4, 6, or 8</strong> in the ones place.<br>• <strong>(c) Sum Rule:</strong> The sum of two even numbers is <strong>always Even</strong>.<br>  - Example: 4 + 6 = 10 (Even), 12 + 14 = 26 (Even).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct even numbers listed",
            "marks": "1.0 M"
          },
          {
            "key": "Correct ending digits (0, 2, 4, 6, 8)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct sum rule with clear example",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 10 ('Play with Patterns'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Play with Patterns', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Tile Border Geometric Pattern",
      "text": "A walkway is paved with a repeating 4-tile sequence: [Circle, Square, Triangle, Hexagon] that repeats continuously along a path of 50 tiles.",
      "question": "Which shape will be on the 20th tile? Which shape will be on the 47th tile?",
      "answer": "1. Sequence length = 4 shapes.<br>• 1 = Circle, 2 = Square, 3 = Triangle, 4 = Hexagon.<br>2. <strong>20th tile:</strong> 20 ÷ 4 = 5 with remainder 0 (4th shape) → <strong>Hexagon</strong>.<br>3. <strong>47th tile:</strong> 47 ÷ 4 = 11 with remainder 3 (3rd shape) → <strong>Triangle</strong>.",
      "rubric": "1.5M modulo calculation for 20th tile + 1.5M modulo calculation for 47th tile."
    }
  },
  {
    "id": "mmg11",
    "num": 11,
    "unit": "Unit 6: Patterns, Capacity & Sharing",
    "title": "Jugs and Mugs",
    "subtitle": "Liquid Capacity, Litres (L) & Millilitres (mL), Kheer Party & Medicine Doses",
    "concepts": [
      "Estimating and measuring capacity using non-standard vs standard units.",
      "1 Litre = 1000 Millilitres (1 L = 1000 mL).",
      "Equivalent fractions: 500 mL = 1/2 Litre; 250 mL = 1/4 Litre.",
      "Calculating daily water intake and beverage preparation for guests."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfeff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">Jugs and Mugs — Building 1 Litre from Millilitres</text>\n      <!-- Big 1L Jug -->\n      <rect x=\"70\" y=\"45\" width=\"55\" height=\"75\" rx=\"6\" fill=\"#a5f3fc\" stroke=\"#0891b2\" stroke-width=\"2\"/>\n      <rect x=\"60\" y=\"60\" width=\"10\" height=\"40\" fill=\"none\" stroke=\"#0891b2\" stroke-width=\"2\"/>\n      <text x=\"97\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"900\" fill=\"#0e7490\" text-anchor=\"middle\">1 LITRE</text>\n      <text x=\"97\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#0891b2\" text-anchor=\"middle\">(1000 mL)</text>\n      <text x=\"180\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"20\" font-weight=\"800\" fill=\"#0891b2\" text-anchor=\"middle\">=</text>\n      <!-- 4 glasses of 250 mL -->\n      <g transform=\"translate(220, 60)\">\n        <rect x=\"0\" y=\"0\" width=\"22\" height=\"45\" rx=\"3\" fill=\"#cffafe\" stroke=\"#0891b2\" stroke-width=\"1.5\"/>\n        <text x=\"11\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">250</text>\n        <rect x=\"35\" y=\"0\" width=\"22\" height=\"45\" rx=\"3\" fill=\"#cffafe\" stroke=\"#0891b2\" stroke-width=\"1.5\"/>\n        <text x=\"46\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">250</text>\n        <rect x=\"70\" y=\"0\" width=\"22\" height=\"45\" rx=\"3\" fill=\"#cffafe\" stroke=\"#0891b2\" stroke-width=\"1.5\"/>\n        <text x=\"81\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">250</text>\n        <rect x=\"105\" y=\"0\" width=\"22\" height=\"45\" rx=\"3\" fill=\"#cffafe\" stroke=\"#0891b2\" stroke-width=\"1.5\"/>\n        <text x=\"116\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">250</text>\n      </g>\n      <!-- Right breakdown box -->\n      <rect x=\"390\" y=\"48\" width=\"150\" height=\"70\" rx=\"8\" fill=\"#cffafe\" stroke=\"#06b6d4\" stroke-width=\"1.5\"/>\n      <text x=\"465\" y=\"70\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#155e75\" text-anchor=\"middle\">Ways to make 1,000 mL:</text>\n      <text x=\"465\" y=\"88\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#0e7490\" text-anchor=\"middle\">• 500 mL + 500 mL</text>\n      <text x=\"465\" y=\"104\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#0e7490\" text-anchor=\"middle\">• 4 × 250 mL</text>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0e7490\" text-anchor=\"middle\">1000 millilitres equal 1 standard litre</text>\n    </svg>",
    "questions": [
      {
        "category": "Capacity Combinations • Making 1 Litre",
        "q": "How many of each container will you need to make exactly 1 Litre (1,000 mL)? (a) 200 mL glasses, (b) 100 mL medicine cups, (c) 500 mL bottles.",
        "ans": "<strong>Calculations for 1,000 mL:</strong><br>• <strong>(a) 200 mL glasses:</strong> 1,000 ÷ 200 = <strong>5 glasses</strong>.<br>• <strong>(b) 100 mL medicine cups:</strong> 1,000 ÷ 100 = <strong>10 cups</strong>.<br>• <strong>(c) 500 mL bottles:</strong> 1,000 ÷ 500 = <strong>2 bottles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct count for 200 mL (5)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct count for 100 mL (10)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct count for 500 mL (2)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Medicine Dosage Calculation • Practical Math",
        "q": "A doctor prescribes 5 mL of cough syrup to be taken 3 times a day for 5 days. (a) How many mL of syrup does the patient take in one day? (b) How many total mL are needed for the full 5-day course?",
        "ans": "<strong>Solution:</strong><br>• Dose per time = 5 mL<br>• Times per day = 3<br><strong>(a) Daily consumption:</strong> 5 mL × 3 = <strong>15 mL per day</strong>.<br><br><strong>(b) 5-Day course total:</strong> 15 mL × 5 days = <strong>75 mL in total</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct daily dosage calculation (15 mL)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct 5-day course calculation (75 mL)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Kheer Party • Real-World Sharing",
        "q": "At the wedding party of the squirrels, 10 litres of sweet kheer was cooked. If each bowl holds 100 mL, how many guests can be served with kheer?",
        "ans": "<strong>Step-by-step Solution:</strong><br>1. Total kheer = 10 litres.<br>2. Convert litres to millilitres: 10 × 1000 mL = <strong>10,000 mL</strong>.<br>3. Capacity of 1 bowl = 100 mL.<br>4. Number of guests served = 10,000 ÷ 100 = <strong>100 guests</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct conversion of 10 L to 10,000 mL",
            "marks": "1.5 M"
          },
          {
            "key": "Correct division to find 100 guests",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Bunny and Banno's Wedding Feast • Kheer Consumption",
        "q": "At Bunny and Banno's wedding feast, delicious kheer was served:<br>• The donkey drank 10 glasses of 100 mL each.<br>• The monkey drank 5 glasses of 200 mL each.<br>• The elephant drank 10 litres.<br>(a) How many millilitres of kheer did the donkey drink? Convert to litres.<br>(b) How many millilitres did the monkey drink? Convert to litres.<br>(c) Who drank more kheer: the donkey or the monkey?",
        "ans": "<strong>Step-by-Step Capacity Math:</strong><br><strong>(a) Donkey's Kheer:</strong><br>• 10 glasses × 100 mL = 1000 mL = <strong>1 Litre</strong>.<br><br><strong>(b) Monkey's Kheer:</strong><br>• 5 glasses × 200 mL = 1000 mL = <strong>1 Litre</strong>.<br><br><strong>(c) Comparison:</strong><br>• Both the donkey and the monkey drank <strong>exactly the same amount</strong> (1 Litre each).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation for donkey (1000 mL = 1 L)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct calculation for monkey (1000 mL = 1 L)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct equality conclusion",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Clever Crow Story • Water Displacement",
        "q": "A thirsty crow found a pitcher with water deep at the bottom. He dropped 10 small pebbles into the pitcher.<br>(a) Why did the water level rise when pebbles were dropped?<br>(b) If each pebble displaced 50 mL of water, by how many mL did the water level rise in total?",
        "ans": "<strong>Water Displacement Science & Math:</strong><br><strong>(a) Why Water Rises:</strong><br>• Pebbles take up space (volume) at the bottom of the pitcher. Because two objects cannot occupy the same space at the same time, the solid pebbles push the water upward.<br><br><strong>(b) Total Water Rise:</strong><br>• 10 pebbles × 50 mL = <strong>500 mL</strong> (or half a litre).",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear physical explanation of volume displacement",
            "marks": "1.5 M"
          },
          {
            "key": "Correct multiplication (10 × 50 mL = 500 mL)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Measuring 1 Litre • Fractional Bottle Volumes",
        "q": "How many of each container are required to fill a 1-litre (1000 mL) bottle completely?<br>(a) 500 mL bottles<br>(b) 250 mL glasses<br>(c) 200 mL cups<br>(d) 100 mL ladles",
        "ans": "<strong>Conversions into 1000 mL:</strong><br>• <strong>(a) 500 mL:</strong> 1000 ÷ 500 = <strong>2 bottles</strong>.<br>• <strong>(b) 250 mL:</strong> 1000 ÷ 250 = <strong>4 glasses</strong>.<br>• <strong>(c) 200 mL:</strong> 1000 ÷ 200 = <strong>5 cups</strong>.<br>• <strong>(d) 100 mL:</strong> 1000 ÷ 100 = <strong>10 ladles</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct values for (a): 2 and (b): 4",
            "marks": "2.0 M"
          },
          {
            "key": "Correct values for (c): 5 and (d): 10",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Household Water Usage • Daily Estimation",
        "q": "An average family uses:<br>• Cooking & drinking: 25 Litres<br>• Bathing: 80 Litres<br>• Washing clothes & utensils: 65 Litres<br>(a) What is the total water used by the family in one day?<br>(b) If their overhead water tank holds 500 Litres, how many litres of water remain in the tank at the end of the day?",
        "ans": "<strong>Step-by-Step Usage:</strong><br><strong>(a) Total Daily Usage:</strong><br>• 25 L + 80 L + 65 L = <strong>170 Litres</strong>.<br><br><strong>(b) Remaining Water:</strong><br>• Tank capacity = 500 Litres.<br>• Used = 170 Litres.<br>• Remaining = 500 - 170 = <strong>330 Litres</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct total usage sum (170 L)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct tank remainder (330 L)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 11 ('Jugs and Mugs'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Jugs and Mugs', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Drinking Water Conservation",
      "text": "A leaking tap in the school corridor drips 100 mL of water every hour. The plumber was able to fix it after 12 hours.",
      "question": "How much water was wasted in millilitres? How much is that in litres and millilitres?",
      "answer": "1. Water wasted in 12 hours = 12 × 100 mL = <strong>1,200 mL</strong>.<br>2. In litres and millilitres: 1,200 mL = 1,000 mL + 200 mL = <strong>1 Litre 200 Millilitres (1 L 200 mL)</strong>.",
      "rubric": "1.5M multiplication calculation + 1.5M conversion to litres and millilitres."
    }
  },
  {
    "id": "mmg12",
    "num": 12,
    "unit": "Unit 6: Patterns, Capacity & Sharing",
    "title": "Can We Share?",
    "subtitle": "Division as Equal Distribution, Equal Jumps on Number Line, Remainders & Word Problems",
    "concepts": [
      "Equal sharing among individuals: understanding dividend, divisor, and quotient.",
      "Grouping objects into bundles of equal size.",
      "Division on the number line using backward jumps.",
      "Handling remainders: what happens when items cannot be shared equally."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Division on Number Line — 18 ÷ 3 = 6 Backward Jumps</text>\n      <!-- Number line -->\n      <line x1=\"50\" y1=\"95\" x2=\"530\" y2=\"95\" stroke=\"#16a34a\" stroke-width=\"2.5\"/>\n      <!-- Jumps backward from 18 to 0 in steps of 3 -->\n      <g font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">\n        <circle cx=\"500\" cy=\"95\" r=\"4\" fill=\"#15803d\"/><text x=\"500\" y=\"115\">18</text>\n        <path d=\"M500,90 Q465,55 430,90\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <circle cx=\"430\" cy=\"95\" r=\"4\" fill=\"#15803d\"/><text x=\"430\" y=\"115\">15</text>\n        <path d=\"M430,90 Q395,55 360,90\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <circle cx=\"360\" cy=\"95\" r=\"4\" fill=\"#15803d\"/><text x=\"360\" y=\"115\">12</text>\n        <path d=\"M360,90 Q325,55 290,90\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <circle cx=\"290\" cy=\"95\" r=\"4\" fill=\"#15803d\"/><text x=\"290\" y=\"115\">9</text>\n        <path d=\"M290,90 Q255,55 220,90\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <circle cx=\"220\" cy=\"95\" r=\"4\" fill=\"#15803d\"/><text x=\"220\" y=\"115\">6</text>\n        <path d=\"M220,90 Q185,55 150,90\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <circle cx=\"150\" cy=\"95\" r=\"4\" fill=\"#15803d\"/><text x=\"150\" y=\"115\">3</text>\n        <path d=\"M150,90 Q115,55 80,90\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <circle cx=\"80\" cy=\"95\" r=\"4\" fill=\"#15803d\"/><text x=\"80\" y=\"115\">0</text>\n      </g>\n      <text x=\"290\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">6 jumps of 3 taken backwards from 18 to reach 0 → 18 ÷ 3 = 6</text>\n    </svg>",
    "questions": [
      {
        "category": "Equal Sharing • Division Facts",
        "q": "There are 28 laddoos. Mother shares them equally among 4 plates. (a) How many laddoos are on each plate? (b) Write the related multiplication fact.",
        "ans": "<strong>Solution:</strong><br>• Total laddoos = 28<br>• Number of plates = 4<br>• <strong>(a) Division Fact:</strong> 28 ÷ 4 = <strong>7 laddoos per plate</strong>.<br>• <strong>(b) Related Multiplication Fact:</strong> 4 × 7 = <strong>28</strong> (or 7 × 4 = 28).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct division quotient (7)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct related multiplication statement",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Division with Remainder • Problem Solving",
        "q": "A teacher has 35 craft ribbons. She gives 4 ribbons to each group for an art project. (a) How many groups will receive ribbons? (b) How many ribbons will be left over?",
        "ans": "<strong>Step-by-step Solution:</strong><br>1. Divide 35 by 4:<br>• 4 × 8 = 32<br>• 35 - 32 = 3<br>2. <strong>(a) Groups receiving ribbons:</strong> <strong>8 groups</strong>.<br>3. <strong>(b) Ribbons left over (remainder):</strong> <strong>3 ribbons</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct division calculation and quotient (8)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct remainder identification (3 ribbons)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Frog Jump Division • Number Line",
        "q": "A frog takes jumps of 3 steps at a time on a numbered track. How many jumps will it take to reach: (a) 15? (b) 27? Show the division sentences.",
        "ans": "<strong>Jumps:</strong><br>• <strong>(a) To reach 15:</strong> 15 ÷ 3 = <strong>5 jumps</strong>.<br>• <strong>(b) To reach 27:</strong> 27 ÷ 3 = <strong>9 jumps</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct jumps for 15 (5 jumps)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct jumps for 27 (9 jumps)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Caterpillars on Leaves • Grouping & Division",
        "q": "There are 21 caterpillars. They are sitting equally on 3 green leaves.<br>(a) How many caterpillars are on each leaf?<br>(b) Write the division sentence and multiplication check fact.",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Caterpillars per Leaf:</strong><br>• Total caterpillars = 21.<br>• Number of leaves = 3.<br>• Caterpillars on each leaf = 21 ÷ 3 = <strong>7 caterpillars</strong>.<br><br><strong>(b) Mathematical Sentences:</strong><br>• <strong>Division Sentence:</strong> 21 ÷ 3 = 7.<br>• <strong>Multiplication Check Fact:</strong> 3 × 7 = 21.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct caterpillars per leaf (7)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct division sentence (21 ÷ 3 = 7)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct multiplication check fact (3 × 7 = 21)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Sharing Grains • Mother Bird and Chicks",
        "q": "Mummy bird has 12 grains of corn. She distributes them equally among her 4 baby chicks.<br>(a) How many grains does each chick get?<br>(b) If Mummy bird brings 8 more grains, how many total grains does each chick get now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br><strong>(a) Initial Sharing:</strong><br>• 12 grains ÷ 4 chicks = <strong>3 grains per chick</strong>.<br><br><strong>(b) After Bringing 8 More Grains:</strong><br>• Extra grains per chick = 8 ÷ 4 = 2 grains.<br>• Total grains per chick = 3 + 2 = <strong>5 grains per chick</strong> (or 20 ÷ 4 = 5).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct initial share (3 grains)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct updated share (5 grains)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Money Sharing • ₹10 Notes",
        "q": "Grandmother gave ₹60 to be divided equally among her 3 grandchildren: Anu, Bitoo, and Chintu.<br>(a) How many ₹10 notes will each child get?<br>(b) How much money does each child receive in rupees?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total money = ₹60.<br>• In ₹10 notes: ₹60 = six ₹10 notes.<br><strong>(a) ₹10 Notes per Child:</strong><br>• 6 notes ÷ 3 children = <strong>two ₹10 notes each</strong>.<br><br><strong>(b) Amount in Rupees:</strong><br>• 2 × ₹10 = <strong>₹20 each</strong> (or ₹60 ÷ 3 = ₹20).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct number of ₹10 notes (2 notes)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct amount in rupees (₹20)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Jumps of Frog • Division on Number Line",
        "q": "A frog starts at 18 on a number line and jumps 2 steps backward at a time towards 0.<br>(a) How many jumps does it take to reach 0?<br>(b) Write this as a division problem.",
        "ans": "<strong>Division as Repeated Subtraction:</strong><br><strong>(a) Jumps:</strong><br>• 18 - 2 = 16 (1 jump)<br>• 16 - 2 = 14 (2 jumps)<br>• ...<br>• 18 ÷ 2 = <strong>9 jumps</strong> to reach 0.<br><br><strong>(b) Division Problem:</strong><br>• <strong>18 ÷ 2 = 9</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct jump count (9 jumps)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct division expression (18 ÷ 2 = 9)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 12 ('Can We Share?'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Can We Share?', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Library Bookshelf Organization",
      "text": "The primary section library has 54 new storybooks. Each shelf can hold exactly 9 books.",
      "question": "How many shelves will be completely filled? If 2 more books arrive, can another shelf be filled?",
      "answer": "1. Shelves filled = 54 ÷ 9 = <strong>6 shelves completely filled</strong>.<br>2. If 2 more books arrive, total books = 54 + 2 = 56.<br>3. To fill another (7th) shelf, they would need 9 books. Since they only have 2 extra books (7 books short), <strong>no, another shelf cannot be filled</strong>.",
      "rubric": "1.5M division of 54 ÷ 9 = 6 + 1.5M remainder analysis for extra books."
    }
  },
  {
    "id": "mmg13",
    "num": 13,
    "unit": "Unit 7: Data Handling & Money",
    "title": "Smart Charts!",
    "subtitle": "Tally Marks, Bar Charts, Tables, Traffic Surveys & Drawing Inferences",
    "concepts": [
      "Using tally marks (bundles of 5: four vertical lines crossed by one diagonal line).",
      "Constructing and reading frequency tables from real-world surveys.",
      "Reading simple bar charts with labeled axes and scales.",
      "Interpreting data: finding the most popular, least popular, and total counts."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Smart Bar Chart — Favourite Sports of Class 3 Students</text>\n      <!-- Axes -->\n      <line x1=\"80\" y1=\"35\" x2=\"80\" y2=\"125\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <line x1=\"80\" y1=\"125\" x2=\"520\" y2=\"125\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <!-- Y-ticks -->\n      <text x=\"70\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">0</text>\n      <text x=\"70\" y=\"95\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">10</text>\n      <text x=\"70\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#64748b\" text-anchor=\"end\">20</text>\n      <!-- Bar 1: Cricket (18) -->\n      <rect x=\"110\" y=\"65\" width=\"45\" height=\"60\" fill=\"#3b82f6\" rx=\"4\"/>\n      <text x=\"132\" y=\"58\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">18</text>\n      <text x=\"132\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Cricket</text>\n      <!-- Bar 2: Football (12) -->\n      <rect x=\"190\" y=\"85\" width=\"45\" height=\"40\" fill=\"#10b981\" rx=\"4\"/>\n      <text x=\"212\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">12</text>\n      <text x=\"212\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Football</text>\n      <!-- Bar 3: Badminton (15) -->\n      <rect x=\"270\" y=\"75\" width=\"45\" height=\"50\" fill=\"#f59e0b\" rx=\"4\"/>\n      <text x=\"292\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">15</text>\n      <text x=\"292\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Badminton</text>\n      <!-- Bar 4: Chess (5) -->\n      <rect x=\"350\" y=\"108\" width=\"45\" height=\"17\" fill=\"#8b5cf6\" rx=\"4\"/>\n      <text x=\"372\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#6d28d9\" text-anchor=\"middle\">5</text>\n      <text x=\"372\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Chess</text>\n      <text x=\"460\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0f172a\">Total = 50</text>\n    </svg>",
    "questions": [
      {
        "category": "Bar Chart Interpretation • Sports Survey",
        "q": "Look at the bar chart above: (a) Which is the most popular sport? (b) How many more students prefer cricket over football? (c) How many total students participated in the survey?",
        "ans": "<strong>Data Reading:</strong><br>• <strong>(a) Most popular sport:</strong> <strong>Cricket</strong> (18 students, highest bar).<br>• <strong>(b) Difference between Cricket and Football:</strong> 18 - 12 = <strong>6 more students</strong>.<br>• <strong>(c) Total students:</strong> 18 + 12 + 15 + 5 = <strong>50 students</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct most popular sport identified",
            "marks": "1.0 M"
          },
          {
            "key": "Correct difference calculation (18 - 12 = 6)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct total students sum (50)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Tally Marks Representation",
        "q": "Draw tally marks for the following frequency counts: (a) 7 cars, (b) 14 bicycles, (c) 19 pedestrians.",
        "ans": "<strong>Tally Mark Representations (Bundles of 5):</strong><br>• <strong>(a) 7 cars:</strong> <s>||||</s> || (One bundle of 5 + 2 lines)<br>• <strong>(b) 14 bicycles:</strong> <s>||||</s> <s>||||</s> |||| (Two bundles of 5 + 4 lines)<br>• <strong>(c) 19 pedestrians:</strong> <s>||||</s> <s>||||</s> <s>||||</s> |||| (Three bundles of 5 + 4 lines).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct tally bundle for 7",
            "marks": "1.0 M"
          },
          {
            "key": "Correct tally bundles for 14",
            "marks": "1.0 M"
          },
          {
            "key": "Correct tally bundles for 19",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Data Table Analysis • Family Helpers",
        "q": "In a class of 30 children, 10 help in setting the dinner table, 12 help in market shopping, and 8 help in cleaning rooms. Represent this data in a clean frequency table with tally marks.",
        "ans": "<strong>Frequency Table:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:8px;'><thead><tr style='background:#f1f5f9;border-bottom:2px solid #cbd5e1;'><th style='padding:6px;border:1px solid #cbd5e1;'>Help Activity</th><th style='padding:6px;border:1px solid #cbd5e1;'>Tally Marks</th><th style='padding:6px;border:1px solid #cbd5e1;'>Number of Children</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Setting Dinner Table</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> <s>||||</s></td><td style='padding:6px;border:1px solid #cbd5e1;'>10</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Market Shopping</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> <s>||||</s> ||</td><td style='padding:6px;border:1px solid #cbd5e1;'>12</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Cleaning Rooms</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> |||</td><td style='padding:6px;border:1px solid #cbd5e1;'>8</td></tr><tr style='background:#f8fafc;font-weight:700;'><td style='padding:6px;border:1px solid #cbd5e1;'>Total</td><td style='padding:6px;border:1px solid #cbd5e1;'>—</td><td style='padding:6px;border:1px solid #cbd5e1;'>30</td></tr></tbody></table>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct table layout and categories",
            "marks": "1.5 M"
          },
          {
            "key": "Correct tally grouping and frequency total (30)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Traffic on the Road • Tally Chart",
        "q": "Anu stood at a road crossing for 15 minutes and made tally marks for passing vehicles:<br>• Bicycles: <s>||||</s> <s>||||</s> || (12)<br>• Cars: <s>||||</s> ||| (8)<br>• Auto-rickshaws: <s>||||</s> <s>||||</s> (10)<br>• Buses: |||| (4)<br>(a) How many vehicles did Anu count in total?<br>(b) Which vehicle was seen the most, and which the least?<br>(c) How many more bicycles passed than buses?",
        "ans": "<strong>Step-by-Step Traffic Analysis:</strong><br><strong>(a) Total Vehicles:</strong><br>• 12 + 8 + 10 + 4 = <strong>34 vehicles</strong>.<br><br><strong>(b) Most & Least:</strong><br>• Most: <strong>Bicycles (12)</strong>.<br>• Least: <strong>Buses (4)</strong>.<br><br><strong>(c) Difference (Bicycles vs Buses):</strong><br>• 12 - 4 = <strong>8 more bicycles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct total count (34 vehicles)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct most (bicycles) and least (buses)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct difference (8)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Favourite Pets • Bar Chart Reading",
        "q": "A bar chart of children's favorite pets shows:<br>• Dogs: 10 children<br>• Cats: 8 children<br>• Parrots: 6 children<br>• Rabbits: 4 children<br>(a) Which is the most popular pet in the class?<br>(b) How many children like cats or parrots in total?<br>(c) What is the total number of children surveyed?",
        "ans": "<strong>Bar Chart Data:</strong><br>• <strong>(a) Most Popular Pet:</strong> <strong>Dog</strong> (chosen by 10 children).<br>• <strong>(b) Cats or Parrots:</strong> 8 (Cats) + 6 (Parrots) = <strong>14 children</strong>.<br>• <strong>(c) Total Surveyed:</strong> 10 + 8 + 6 + 4 = <strong>28 children</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct most popular pet (Dog)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct sum for cats + parrots (14)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct total surveyed (28)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Flowers in the Garden • Smart Chart",
        "q": "In a botanical garden, flowers are counted by color:<br>• Red roses: 25<br>• Yellow marigolds: 35<br>• Blue orchids: 15<br>• White lilies: 20<br>(a) Create a frequency table showing the colors and numbers of flowers.<br>(b) How many yellow marigolds and blue orchids are there combined?",
        "ans": "<strong>(a) Frequency Table:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:6px;'><thead><tr style='background:#f1f5f9;'><th style='padding:6px;border:1px solid #cbd5e1;'>Flower Type &amp; Color</th><th style='padding:6px;border:1px solid #cbd5e1;'>Number of Flowers</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Red Roses</td><td style='padding:6px;border:1px solid #cbd5e1;'>25</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Yellow Marigolds</td><td style='padding:6px;border:1px solid #cbd5e1;'>35</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Blue Orchids</td><td style='padding:6px;border:1px solid #cbd5e1;'>15</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>White Lilies</td><td style='padding:6px;border:1px solid #cbd5e1;'>20</td></tr><tr style='font-weight:700;'><td style='padding:6px;border:1px solid #cbd5e1;'>Total</td><td style='padding:6px;border:1px solid #cbd5e1;'>95</td></tr></tbody></table><br><strong>(b) Combined Count:</strong><br>• 35 (Yellow) + 15 (Blue) = <strong>50 flowers</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate table construction with all 4 flowers",
            "marks": "1.5 M"
          },
          {
            "key": "Correct sum of yellow and blue flowers (50)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Dice Roll Experiment • Data Recording",
        "q": "Rohan rolled a die 20 times and recorded the outcomes:<br>• Number 1: 3 times<br>• Number 2: 4 times<br>• Number 3: 2 times<br>• Number 4: 5 times<br>• Number 5: 3 times<br>• Number 6: 3 times<br>(a) Which face appeared the maximum number of times?<br>(b) Which face appeared the minimum number of times?<br>(c) Did any faces appear the same number of times?",
        "ans": "<strong>Data Analysis:</strong><br>• <strong>(a) Maximum Face:</strong> Face <strong>4</strong> (appeared 5 times).<br>• <strong>(b) Minimum Face:</strong> Face <strong>3</strong> (appeared 2 times).<br>• <strong>(c) Equal Faces:</strong> Yes, Faces <strong>1, 5, and 6</strong> each appeared <strong>3 times</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct maximum face (4)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct minimum face (3)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct identification of tied faces (1, 5, 6)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 13 ('Smart Charts!'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Smart Charts!', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Canteen Fruit Survey",
      "text": "The canteen manager tracked fruit sales on Wednesday: Bananas (45), Apples (30), Oranges (25), and Guavas (20).",
      "question": "Which fruit was the most demanded? What fraction of the total fruit sales did bananas represent?",
      "answer": "1. Total fruits sold = 45 + 30 + 25 + 20 = 120 fruits.<br>2. <strong>Most demanded fruit:</strong> Bananas with 45 sold.<br>3. <strong>Fraction of bananas:</strong> 45 out of 120 = 45/120 = 15/40 = <strong>3/8 (three-eighths)</strong>.",
      "rubric": "1M total summation + 1M most demanded + 1M simplified fraction."
    }
  },
  {
    "id": "mmg14",
    "num": 14,
    "unit": "Unit 7: Data Handling & Money",
    "title": "Rupees and Paise",
    "subtitle": "Indian Currency, Converting Rupees to Paise, Self-Service Store Bills & Cash Receipts",
    "concepts": [
      "Indian currency: coins (₹1, ₹2, ₹5, ₹10, ₹20) and notes (₹10, ₹20, ₹50, ₹100, ₹200, ₹500).",
      "1 Rupee = 100 Paise (₹1 = 100 p).",
      "Writing amounts in rupees and paise with decimal points (e.g., ₹12.50).",
      "Preparing itemized shopping bills and checking total amounts and change."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Self-Service Cash Memo — Stationery Shopping Bill</text>\n      <!-- Bill Layout -->\n      <rect x=\"90\" y=\"45\" width=\"400\" height=\"95\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n      <line x1=\"90\" y1=\"70\" x2=\"490\" y2=\"70\" stroke=\"#fcd34d\" stroke-width=\"1.5\"/>\n      <text x=\"105\" y=\"62\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\">Item</text>\n      <text x=\"260\" y=\"62\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\">Rate</text>\n      <text x=\"350\" y=\"62\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\">Qty</text>\n      <text x=\"440\" y=\"62\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\">Amount</text>\n      <!-- Row 1 -->\n      <text x=\"105\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">Pencil Box</text>\n      <text x=\"260\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">₹35.00</text>\n      <text x=\"355\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">1</text>\n      <text x=\"440\" y=\"85\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">₹35.00</text>\n      <!-- Row 2 -->\n      <text x=\"105\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">Eraser</text>\n      <text x=\"260\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">₹5.50</text>\n      <text x=\"355\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">2</text>\n      <text x=\"440\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">₹11.00</text>\n      <!-- Total Line -->\n      <line x1=\"90\" y1=\"112\" x2=\"490\" y2=\"112\" stroke=\"#d97706\" stroke-width=\"1\"/>\n      <text x=\"320\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#b45309\">TOTAL BILL:</text>\n      <text x=\"440\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"900\" fill=\"#92400e\">₹46.00</text>\n    </svg>",
    "questions": [
      {
        "category": "Rupees & Paise Conversion • Arithmetic",
        "q": "Convert: (a) ₹7 into paise, (b) 850 paise into rupees and paise, (c) ₹12.75 into paise.",
        "ans": "<strong>Conversions (1 Rupee = 100 Paise):</strong><br>• <strong>(a) ₹7:</strong> 7 × 100 p = <strong>700 paise</strong>.<br>• <strong>(b) 850 paise:</strong> 800 p + 50 p = <strong>8 rupees and 50 paise (₹8.50)</strong>.<br>• <strong>(c) ₹12.75:</strong> (12 × 100) + 75 = 1200 + 75 = <strong>1,275 paise</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct conversion for ₹7 (700 p)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct conversion for 850 p (₹8.50)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct conversion for ₹12.75 (1275 p)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Cash Memo Preparation • Bill Calculation",
        "q": "Prepare a cash memo for the following purchases: 1 notebook for ₹24.50, 2 pencils at ₹6.00 each, and 1 sharpener for ₹4.50. What is the total bill amount?",
        "ans": "<strong>Cash Memo:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:8px;'><thead><tr style='background:#f1f5f9;border-bottom:2px solid #cbd5e1;'><th style='padding:6px;border:1px solid #cbd5e1;'>Item</th><th style='padding:6px;border:1px solid #cbd5e1;'>Rate (₹)</th><th style='padding:6px;border:1px solid #cbd5e1;'>Qty</th><th style='padding:6px;border:1px solid #cbd5e1;'>Amount (₹)</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Notebook</td><td style='padding:6px;border:1px solid #cbd5e1;'>24.50</td><td style='padding:6px;border:1px solid #cbd5e1;'>1</td><td style='padding:6px;border:1px solid #cbd5e1;'>24.50</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Pencils</td><td style='padding:6px;border:1px solid #cbd5e1;'>6.00</td><td style='padding:6px;border:1px solid #cbd5e1;'>2</td><td style='padding:6px;border:1px solid #cbd5e1;'>12.00</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Sharpener</td><td style='padding:6px;border:1px solid #cbd5e1;'>4.50</td><td style='padding:6px;border:1px solid #cbd5e1;'>1</td><td style='padding:6px;border:1px solid #cbd5e1;'>4.50</td></tr><tr style='background:#f8fafc;font-weight:700;'><td colspan='3' style='padding:6px;border:1px solid #cbd5e1;text-align:right;'>TOTAL AMOUNT:</td><td style='padding:6px;border:1px solid #cbd5e1;'><strong>₹41.00</strong></td></tr></tbody></table><br>• Total bill = 24.50 + 12.00 + 4.50 = <strong>₹41.00</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct itemised extensions",
            "marks": "1.5 M"
          },
          {
            "key": "Correct total addition (₹41.00)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Railway Ticket Booking • Money Word Problem",
        "q": "A railway ticket from Station A to Station B costs ₹62.50. (a) What is the total fare for two such tickets? (b) If you hand over a ₹200 note to the ticket booking clerk, how much balance will you receive back?",
        "ans": "<strong>Step-by-step Solution:</strong><br><strong>(a) Total Ticket Fare:</strong><br>2 × ₹62.50 = ₹(62.50 + 62.50) = <strong>₹125.00</strong>.<br><br><strong>(b) Balance Received Back:</strong><br>Amount given = ₹200.00<br>Total fare = ₹125.00<br>Change = ₹200.00 - ₹125.00 = <strong>₹75.00</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation of 2 tickets fare (₹125)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction for balance change (₹75)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Self-Made Cash Memo • Toy Purchases",
        "q": "Prepare a cash memo for the following shopping trip:<br>• 1 toy car for ₹15.50<br>• 3 pencils at ₹2.50 each<br>• 2 toffees at ₹0.50 each<br>(a) Find the total amount of the bill.<br>(b) If you give a ₹50 note, how much change should you get back?",
        "ans": "<strong>Itemized Cash Memo:</strong><br>• 1 Toy Car: ₹15.50.<br>• 3 Pencils: 3 × ₹2.50 = ₹7.50.<br>• 2 Toffees: 2 × ₹0.50 = ₹1.00.<br>• <strong>Total Bill:</strong> ₹15.50 + ₹7.50 + ₹1.00 = <strong>₹24.00</strong>.<br><br><strong>Change from ₹50:</strong><br>• Change = ₹50.00 - ₹24.00 = <strong>₹26.00</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct itemised sub-totals and sum (₹24.00)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct change subtraction (₹26.00)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Train Ticket Fare Table • Route Math",
        "q": "Study the railway fare chart from New Jalpaiguri:<br>• To Siliguri (10 km): ₹12.50<br>• To Malbazar (45 km): ₹28.00<br>• To Alipurduar (120 km): ₹62.50<br>(a) What is the ticket fare for two persons traveling to Malbazar?<br>(b) How much more expensive is a ticket to Alipurduar than to Siliguri?",
        "ans": "<strong>Railway Fare Calculations:</strong><br><strong>(a) Two Tickets to Malbazar:</strong><br>• 2 × ₹28.00 = <strong>₹56.00</strong>.<br><br><strong>(b) Price Difference:</strong><br>• Alipurduar fare = ₹62.50.<br>• Siliguri fare = ₹12.50.<br>• Difference = ₹62.50 - ₹12.50 = <strong>₹50.00</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct multiplication for 2 tickets (₹56.00)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct subtraction for difference (₹50.00)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Coin Rubbing & Currency Recognition",
        "q": "In the textbook activity, children place a coin under paper and rub a pencil over it:<br>(a) What design appears when you rub a ₹5 coin?<br>(b) How many 50-paise coins make ₹1?<br>(c) How many 25-paise coins make ₹1?",
        "ans": "<strong>Coin Mathematics:</strong><br>• <strong>(a) Coin Rubbing:</strong> The impression shows the Lion Capital of Ashoka (emblem), the numeral '5', and the rupee symbol (₹).<br>• <strong>(b) 50-Paise Coins in ₹1:</strong> 100 paise ÷ 50 paise = <strong>2 coins</strong>.<br>• <strong>(c) 25-Paise Coins in ₹1:</strong> 100 paise ÷ 25 paise = <strong>4 coins</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate visual impression description",
            "marks": "1.0 M"
          },
          {
            "key": "Correct count of 50-paise coins (2)",
            "marks": "1.0 M"
          },
          {
            "key": "Correct count of 25-paise coins (4)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Money Addition with Paise • Regrouping",
        "q": "Solve the following money additions:<br>(a) ₹45.50 + ₹23.75<br>(b) ₹120.25 + ₹85.80",
        "ans": "<strong>Step-by-Step Money Addition:</strong><br>• <strong>(a) ₹45.50 + ₹23.75:</strong><br>  - Paise: 50 + 75 = 125 paise = ₹1 and 25 paise.<br>  - Rupees: 45 + 23 + 1 (carry) = 69.<br>  - Total = <strong>₹69.25</strong>.<br><br>• <strong>(b) ₹120.25 + ₹85.80:</strong><br>  - Paise: 25 + 80 = 105 paise = ₹1 and 05 paise.<br>  - Rupees: 120 + 85 + 1 (carry) = 206.<br>  - Total = <strong>₹206.05</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct addition with paise regrouping for (a): ₹69.25",
            "marks": "1.5 M"
          },
          {
            "key": "Correct addition with paise regrouping for (b): ₹206.05",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Real-Life Math",
        "q": "In Chapter 14 ('Rupees and Paise'), a student solves an NCERT word problem: If 1 kg of apples costs ₹60 and 1 kg of oranges costs ₹40, how much do 2 kg of apples and 3 kg of oranges cost altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Cost of 2 kg apples = 2 × ₹60 = <strong>₹120</strong>.<br>2. Cost of 3 kg oranges = 3 × ₹40 = <strong>₹120</strong>.<br>3. Total cost = ₹120 + ₹120 = <strong>₹240</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Apples = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Oranges = ₹120",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹240",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Hands-on Investigation",
        "q": "In 'Rupees and Paise', how do you measure and compare quantities accurately? Explain with an example using standard units.",
        "ans": "<strong>Measurement Explanation:</strong><br>• Standard units provide consistent and reliable measurements across the world.<br>• For length, we use <strong>metres (m)</strong> and <strong>centimetres (cm)</strong>.<br>• For weight, we use <strong>kilograms (kg)</strong> and <strong>grams (g)</strong>.<br>• For liquids, we use <strong>litres (L)</strong> and <strong>millilitres (mL)</strong>.<br>• Unlike non-standard units (such as footsteps or handspans), standard units give the exact same measurement no matter who measures.",
        "marks": 3,
        "rubric": [
          {
            "key": "Standard units defined",
            "marks": "1.5 M"
          },
          {
            "key": "Examples for length, weight, liquid",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Practice Time • Two-Step Word Problem",
        "q": "Suresh bought a school bag for ₹175 and a pencil box for ₹45. He gave a ₹500 note to the shopkeeper. How much change did he receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total money spent = ₹175 + ₹45 = <strong>₹220</strong>.<br>2. Amount paid = ₹500.<br>3. Change returned = ₹500 - ₹220 = <strong>₹280</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total spent = ₹220",
            "marks": "1.5 M"
          },
          {
            "key": "Change = ₹280",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Calculations",
        "q": "Calculate mentally without writing long columns:<br>(a) 250 + 150 = ?<br>(b) 500 - 180 = ?<br>(c) 4 × 25 = ?<br>(d) 100 ÷ 4 = ?",
        "ans": "<strong>Mental Calculations:</strong><br>• (a) 250 + 150 = <strong>400</strong>.<br>• (b) 500 - 180 = <strong>320</strong>.<br>• (c) 4 × 25 = <strong>100</strong>.<br>• (d) 100 ÷ 4 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 mental results correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Geometry & Shapes • Edge and Corner Counting",
        "q": "Name a 3D solid shape that has:<br>(a) 6 flat square faces, 12 straight edges, and 8 corners.<br>(b) 1 curved surface and 2 flat circular faces.<br>(c) Only 1 curved surface and 0 corners.",
        "ans": "<strong>Solid Shapes:</strong><br>• (a) 6 square faces, 12 edges, 8 corners: <strong>Cube</strong>.<br>• (b) 1 curved and 2 circular faces: <strong>Cylinder</strong>.<br>• (c) Only 1 curved surface, 0 corners: <strong>Sphere</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cube",
            "marks": "1 M"
          },
          {
            "key": "Cylinder",
            "marks": "1 M"
          },
          {
            "key": "Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Time • Sequences and Rules",
        "q": "Identify the rule and find the next two terms: 5, 10, 20, 40, ___, ___.",
        "ans": "<strong>Rule:</strong> Each term is multiplied by 2 (doubled).<br>• 40 × 2 = <strong>80</strong><br>• 80 × 2 = <strong>160</strong>.<br>Next terms are <strong>80, 160</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next terms 80, 160",
            "marks": "1 M"
          },
          {
            "key": "Rule: multiplying by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time & Calendar • Date Calculation",
        "q": "Rohan's summer vacation starts on 15th May and ends on 30th June. How many total days of vacation does Rohan get? (Remember: May has 31 days).",
        "ans": "<strong>Days Count:</strong><br>• Days in May: From 15th to 31st = (31 - 15) + 1 = <strong>17 days</strong>.<br>• Days in June: Full 30 days = <strong>30 days</strong>.<br>• Total vacation days = 17 + 30 = <strong>47 days</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "May days = 17",
            "marks": "1.5 M"
          },
          {
            "key": "June days = 30; Total = 47 days",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Division Problem",
        "q": "Mother bakes 36 cookies and wants to distribute them equally among 4 children. How many cookies does each child receive? Write the division sentence.",
        "ans": "<strong>Equal Sharing:</strong><br>• Total cookies = 36.<br>• Number of children = 4.<br>• Cookies per child = 36 ÷ 4 = <strong>9 cookies</strong>.<br>• Division sentence: <strong>36 ÷ 4 = 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36 ÷ 4 = 9 cookies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Data Handling • Reading a Bar Chart",
        "q": "A survey of pets owned by children: Dog (14), Cat (10), Parrot (6), Fish (8).<br>(a) Which pet is owned by the least number of children?<br>(b) How many total pets are there?<br>(c) How many more dogs are there than parrots?",
        "ans": "<strong>Survey Analysis:</strong><br>• (a) Least owned pet: <strong>Parrot</strong> (only 6).<br>• (b) Total pets: 14 + 10 + 6 + 8 = <strong>38 pets</strong>.<br>• (c) Difference: 14 Dogs - 6 Parrots = <strong>8 more dogs</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Parrot least",
            "marks": "1 M"
          },
          {
            "key": "Total = 38",
            "marks": "1 M"
          },
          {
            "key": "Difference = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money • Making a Change",
        "q": "A toy train costs ₹85. You pay with a ₹100 note. The shopkeeper gives you change in 5-rupee coins only. How many 5-rupee coins do you receive?",
        "ans": "<strong>Calculations:</strong><br>• Change due = ₹100 - ₹85 = <strong>₹15</strong>.<br>• Number of 5-rupee coins = ₹15 ÷ ₹5 = <strong>3 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Change = ₹15",
            "marks": "1 M"
          },
          {
            "key": "3 coins of ₹5",
            "marks": "1 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Tuck Shop Purchasing",
      "text": "Kabir buys a sandwich for ₹32.50, an apple juice bottle for ₹25.00, and a fruit bun for ₹15.50 at the school canteen. He pays with a ₹100 note.",
      "question": "What is his total canteen bill? How much change should the canteen cashier return to him?",
      "answer": "1. Total bill = ₹32.50 + ₹25.00 + ₹15.50 = ₹(32.50 + 15.50) + ₹25.00 = ₹48.00 + ₹25.00 = <strong>₹73.00</strong>.<br>2. Amount paid = ₹100.00.<br>3. <strong>Change to receive</strong> = ₹100.00 - ₹73.00 = <strong>₹27.00</strong>.",
      "rubric": "1.5M addition of rupees and paise + 1.5M change subtraction from ₹100."
    }
  }
];

module.exports = { mathMagicChapters };
