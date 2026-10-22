// Official NCERT Class 3 Mathematics (Math-Magic / गणित का जादू) Complete Dataset - Chapters 1 to 14
// Classic CBSE Track (Session 2026-27) - 100% Comprehensive Question & Activity Coverage

const mathMagicChapters = [
  {
    id: "mmg1",
    num: 1,
    unit: "Unit 1: Spatial Understanding & Symmetry",
    title: "Where to Look From",
    subtitle: "Top View, Front View, Side View, Dot Grid Drawings & Mirror Halves (Lines of Symmetry)",
    concepts: [
      "Viewing 3D objects from different perspectives: top view, side view, and front view.",
      "Using a square dot grid (Rangoli patterns) to draw shapes and objects.",
      "Mirror halves: understanding symmetry and finding lines of symmetry.",
      "Recognizing symmetric alphabet letters, numbers, and geometric shapes."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Where to Look From — Top, Side &amp; Front Perspectives of a Car</text>
      <!-- Side View -->
      <g transform="translate(60, 50)">
        <path d="M10,40 L30,40 L45,20 L85,20 L95,40 L120,40 L125,55 L5,55 Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
        <circle cx="35" cy="55" r="10" fill="#1e293b"/>
        <circle cx="95" cy="55" r="10" fill="#1e293b"/>
        <text x="65" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Side View</text>
      </g>
      <!-- Top View -->
      <g transform="translate(240, 48)">
        <rect x="15" y="5" width="70" height="45" rx="12" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
        <rect x="25" y="12" width="50" height="12" fill="#60a5fa" rx="3"/>
        <rect x="25" y="30" width="50" height="12" fill="#60a5fa" rx="3"/>
        <text x="50" y="82" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Top View</text>
      </g>
      <!-- Front View -->
      <g transform="translate(420, 50)">
        <rect x="15" y="15" width="60" height="40" rx="8" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
        <circle cx="28" cy="42" r="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
        <circle cx="62" cy="42" r="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
        <text x="45" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Front View</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#2563eb" text-anchor="middle">An object looks completely different when viewed from top, side, or front.</text>
    </svg>`,
    questions: [
      {
        category: "Perspective Drawing • Views",
        q: "How does a staircase look when viewed from: (a) The side? (b) The top? (c) The front? Explain with a short description.",
        ans: "<strong>Perspective Descriptions:</strong><br>• <strong>(a) Side View:</strong> From the side, a staircase looks like a continuous zigzag step pattern going upward like a ladder.<br>• <strong>(b) Top View:</strong> From directly above, you see a set of parallel rectangular stripes or bars placed one after another.<br>• <strong>(c) Front View:</strong> Looking straight from the front, you see a series of horizontal rectangular risers stacked vertically.",
        marks: 3,
        rubric: [
          { key: "Accurate description of side view (zigzag steps)", marks: "1.0 M" },
          { key: "Accurate description of top view (parallel stripes)", marks: "1.0 M" },
          { key: "Accurate description of front view", marks: "1.0 M" }
        ]
      },
      {
        category: "Mirror Halves • Symmetry Investigation",
        q: "Look at the letters of the English alphabet: A, B, C, D, E, H, M, X. Which of these letters have: (a) A vertical line of symmetry? (b) A horizontal line of symmetry? (c) Both vertical and horizontal lines of symmetry?",
        ans: "<strong>Classification of Symmetric Letters:</strong><br>• <strong>(a) Vertical line of symmetry (cut down the middle | ):</strong> A, M, H, X.<br>• <strong>(b) Horizontal line of symmetry (cut across the middle — ):</strong> B, C, D, E, H, X.<br>• <strong>(c) Both vertical and horizontal symmetry:</strong> <strong>H</strong> and <strong>X</strong> (folding along either line gives matching halves).",
        marks: 3,
        rubric: [
          { key: "Correct vertical symmetry identification", marks: "1.0 M" },
          { key: "Correct horizontal symmetry identification", marks: "1.0 M" },
          { key: "Correct dual symmetry identification (H, X)", marks: "1.0 M" }
        ]
      },
      {
        category: "Dot Grid Pattern • Activity Solution",
        q: "Using a square dot grid, how do you construct a symmetric leaf or kite? Describe the step-by-step method using mirror halves.",
        ans: "<strong>Step-by-step Dot Grid Construction:</strong><br>1. Draw a central vertical axis connecting 6 dots straight down.<br>2. On the left side, count 3 dots out to the side and draw the left curved wing/outline.<br>3. Count the exact same number of dots (3 dots) on the right side and draw a matching mirror curve.<br>4. Joining the matching dots to the top and bottom central points produces a perfectly symmetric kite or leaf.",
        marks: 2,
        rubric: [
          { key: "Mention of central axis and equal dot distances", marks: "1.0 M" },
          { key: "Explanation of mirror symmetry completion", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Architectural Floor Plan Perspective",
      text: "An architect looks down at a school building model from above (aerial top view). She notices the roof is shaped like a giant rectangle with two circular courtyards inside.",
      question: "If each circular courtyard has a diameter of 10 metres and they are placed side by side with 5 metres gap between them, what is the distance from the left edge of the first courtyard to the right edge of the second?",
      answer: "1. Width of 1st courtyard = 10 m.<br>2. Gap between courtyards = 5 m.<br>3. Width of 2nd courtyard = 10 m.<br>4. <strong>Total span</strong> = 10 + 5 + 10 = <strong>25 metres</strong>.",
      rubric: "1.5M identifying diameter dimensions + 1.5M addition of spans and gap."
    }
  },
  {
    id: "mmg2",
    num: 2,
    unit: "Unit 2: Number Concepts & Place Value",
    title: "Fun with Numbers",
    subtitle: "3-Digit Numbers, Cricket Centuries, Skip Counting, Comparing & Word Problems",
    concepts: [
      "Reading and writing 3-digit numbers in figures and words up to 999.",
      "Cricket scorecards: half-century (50), century (100), and double century (200).",
      "Skip counting forward and backward by 2s, 5s, 10s, and 50s.",
      "Finding predecessor (one less) and successor (one more)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">Skip Counting by 50s — Jumping from 100 to 400</text>
      <!-- Number line -->
      <line x1="60" y1="90" x2="520" y2="90" stroke="#d97706" stroke-width="2.5"/>
      <!-- Ticks and arcs -->
      <g font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">
        <circle cx="90" cy="90" r="5" fill="#d97706"/><text x="90" y="115">100</text>
        <path d="M90,85 Q125,50 160,85" fill="none" stroke="#ea580c" stroke-width="2"/>
        <circle cx="160" cy="90" r="5" fill="#d97706"/><text x="160" y="115">150</text>
        <path d="M160,85 Q195,50 230,85" fill="none" stroke="#ea580c" stroke-width="2"/>
        <circle cx="230" cy="90" r="5" fill="#d97706"/><text x="230" y="115">200</text>
        <path d="M230,85 Q265,50 300,85" fill="none" stroke="#ea580c" stroke-width="2"/>
        <circle cx="300" cy="90" r="5" fill="#d97706"/><text x="300" y="115">250</text>
        <path d="M300,85 Q335,50 370,85" fill="none" stroke="#ea580c" stroke-width="2"/>
        <circle cx="370" cy="90" r="5" fill="#d97706"/><text x="370" y="115">300</text>
        <path d="M370,85 Q405,50 440,85" fill="none" stroke="#ea580c" stroke-width="2"/>
        <circle cx="440" cy="90" r="5" fill="#d97706"/><text x="440" y="115">350</text>
        <path d="M440,85 Q475,50 510,85" fill="none" stroke="#ea580c" stroke-width="2"/>
        <circle cx="510" cy="90" r="5" fill="#d97706"/><text x="510" y="115">400</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Each leap adds exactly 50 units (+50)</text>
    </svg>`,
    questions: [
      {
        category: "Cricket Score Analysis • Centuries",
        q: "Look at the World Cup scorecard: C.K. scored 99 runs, A.S. scored 162 runs, and P.K. scored 105 runs. (a) How many more runs did C.K. need to complete a century? (b) Who scored more than a century and by how many runs?",
        ans: "<strong>Step-by-step Solution:</strong><br>• 1 Century = 100 runs.<br><strong>(a) C.K.'s Century Shortfall:</strong><br>100 - 99 = <strong>1 run needed</strong>.<br><br><strong>(b) Scorers above a Century:</strong><br>• P.K. scored 105: 105 - 100 = <strong>5 runs more than a century</strong>.<br>• A.S. scored 162: 162 - 100 = <strong>62 runs more than a century</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct shortfall for C.K. (1 run)", marks: "1.0 M" },
          { key: "Correct excess runs for P.K. (5 runs)", marks: "1.0 M" },
          { key: "Correct excess runs for A.S. (62 runs)", marks: "1.0 M" }
        ]
      },
      {
        category: "Skip Counting Sequences • Patterns",
        q: "Fill in the missing numbers for the patterns: (a) 550, 600, 650, ___, ___, ___. (b) 280, 260, 240, ___, ___, ___ (Counting backwards by 20).",
        ans: "<strong>Solutions:</strong><br>• <strong>(a) Forward by 50:</strong> 550, 600, 650, <strong>700, 750, 800</strong>.<br>• <strong>(b) Backward by 20:</strong> 280, 260, 240, <strong>220, 200, 180</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct forward sequence (+50)", marks: "1.0 M" },
          { key: "Correct backward sequence (-20)", marks: "1.0 M" }
        ]
      },
      {
        category: "Place Value Riddles • Problem Solving",
        q: "Solve the riddles: (1) 'I am between 70 and 80 and have a 5 in my name.' (2) 'I have 9 in my name and am very close to 90.' (3) 'If you hit a 4 after me, you score a century.'",
        ans: "<strong>Riddle Answers:</strong><br>1. Between 70 and 80 with 5 → <strong>75</strong>.<br>2. Very close to 90 with 9 → <strong>89</strong> (since 89 + 1 = 90).<br>3. Hit a 4 to score a century (100) → 100 - 4 = <strong>96</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct deduction for riddle 1 (75)", marks: "1.0 M" },
          { key: "Correct deduction for riddle 2 (89)", marks: "1.0 M" },
          { key: "Correct deduction for riddle 3 (96)", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Wildlife Sanctuary Deer Count",
      text: "Forest rangers recorded deer sightings across four zones: North Zone (214), South Zone (189), East Zone (305), and West Zone (292).",
      question: "Which zone recorded the lowest deer count? How many total deer were sighted in the North and West Zones combined?",
      answer: "1. Comparing sightings: 189 < 214 < 292 < 305.<br>• <strong>Lowest count:</strong> South Zone with 189 deer.<br>2. North Zone (214) + West Zone (292) = 214 + 292 = <strong>506 deer</strong>.",
      rubric: "1.5M comparison and lowest zone + 1.5M addition of 214 + 292."
    }
  },
  {
    id: "mmg3",
    num: 3,
    unit: "Unit 2: Number Concepts & Place Value",
    title: "Give and Take",
    subtitle: "Addition, 100-Chart Jumps, Word Problems & Story-Based Arithmetic",
    concepts: [
      "Using a 100-chart to add: jumping up by 10s and right by 1s.",
      "Mental addition: adding 10, 20, or 30 quickly to any 2-digit number.",
      "Addition of 3-digit numbers with regrouping across ones and tens.",
      "Breaking numbers into easy tens to solve word problems mentally."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">100-Grid Navigation — 34 + 23 = 57</text>
      <!-- Grid Simulation -->
      <rect x="70" y="45" width="200" height="95" rx="6" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
      <rect x="80" y="110" width="30" height="20" fill="#bbf7d0" rx="3"/><text x="95" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">34</text>
      <!-- Up arrows for +20 -->
      <path d="M95,108 L95,85" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)"/>
      <rect x="80" y="80" width="30" height="20" fill="#dcfce7" rx="3"/><text x="95" y="94" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">44</text>
      <path d="M95,78 L95,55" stroke="#16a34a" stroke-width="2"/>
      <rect x="80" y="50" width="30" height="20" fill="#dcfce7" rx="3"/><text x="95" y="64" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">54</text>
      <!-- Right arrow for +3 -->
      <path d="M112,60 L170,60" stroke="#16a34a" stroke-width="2"/>
      <rect x="175" y="50" width="30" height="20" fill="#22c55e" rx="3"/><text x="190" y="64" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">57</text>
      <!-- Explanation Card -->
      <rect x="300" y="45" width="210" height="95" rx="6" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
      <text x="315" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#14532d">Kittu's Home Jump Steps:</text>
      <text x="315" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#166534">• Start at room 34</text>
      <text x="315" y="106" font-family="system-ui, sans-serif" font-size="10" fill="#166534">• Jump 2 rows up (+20) → 54</text>
      <text x="315" y="124" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d">• Step 3 rooms right (+3) → 57</text>
    </svg>`,
    questions: [
      {
        category: "100-Chart Jump Strategy • Mental Addition",
        q: "Using the 100-chart jump strategy, solve: (a) 47 + 20, (b) 28 + 35, (c) 65 + 19. Show the jumps.",
        ans: "<strong>Solutions:</strong><br>• <strong>(a) 47 + 20:</strong> From 47, jump 2 rows directly up (+20) = <strong>67</strong>.<br>• <strong>(b) 28 + 35:</strong> From 28, jump 3 rows up (+30) to 58; then step 5 rooms right (+5) = <strong>63</strong>.<br>• <strong>(c) 65 + 19:</strong> Adding 19 is jumping 2 rows up (+20 to 85) and taking 1 step back (-1) = <strong>84</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct mental jump for (a)", marks: "1.0 M" },
          { key: "Correct mental jump for (b)", marks: "1.0 M" },
          { key: "Clever +20 and -1 jump for (c)", marks: "1.0 M" }
        ]
      },
      {
        category: "3-Digit Addition with Regrouping",
        q: "A train compartment has 132 passengers. At the next junction, 69 more passengers get in. How many passengers are in the compartment now? Show the column working.",
        ans: "<strong>Column Addition:</strong><br>&nbsp;&nbsp;H&nbsp;&nbsp;T&nbsp;&nbsp;O<br>&nbsp;&nbsp;1&nbsp;&nbsp;3&nbsp;&nbsp;2<br>+&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;9<br>---------<br>&nbsp;&nbsp;<strong>2&nbsp;&nbsp;0&nbsp;&nbsp;1</strong><br>• <strong>Working:</strong><br>1. Ones: 2 + 9 = 11 → Write 1 in Ones place, carry 1 Ten.<br>2. Tens: 3 + 6 + 1 (carry) = 10 → Write 0 in Tens place, carry 1 Hundred.<br>3. Hundreds: 1 + 1 (carry) = 2 Hundreds.<br>• <strong>Total passengers = 201</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct column alignment and regrouping steps", marks: "1.5 M" },
          { key: "Correct final sum (201 passengers)", marks: "1.5 M" }
        ]
      },
      {
        category: "Real-Life Problem Solving • Animal Count",
        q: "A factory made 270 light bulbs on the first day and 149 light bulbs on the second day. How many bulbs were made altogether? Did they cross 400 bulbs?",
        ans: "<strong>Solution:</strong><br>• Day 1 bulbs = 270<br>• Day 2 bulbs = 149<br>• Total bulbs = 270 + 149 = <strong>419 bulbs</strong>.<br>• Since 419 is greater than 400, <strong>yes, they successfully crossed 400 bulbs</strong> by 19 bulbs.",
        marks: 2,
        rubric: [
          { key: "Correct addition (270 + 149 = 419)", marks: "1.0 M" },
          { key: "Accurate comparison with 400 threshold", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Wildlife Forest Census",
      text: "During an annual bird count in Keoladeo National Park, volunteers spotted 147 migratory cranes and 185 resident ducks on Saturday.",
      question: "What was the total number of birds spotted? If the birders expected at least 350 birds, how many more birds were needed to meet their expectation?",
      answer: "1. Total birds = 147 + 185 = 332 birds.<br>2. Expected count = 350 birds.<br>3. Shortfall = 350 - 332 = <strong>18 birds</strong>.",
      rubric: "1.5M addition of 147 + 185 + 1.5M subtraction from 350."
    }
  },
  {
    id: "mmg4",
    num: 4,
    unit: "Unit 3: Measurement & Geometry",
    title: "Long and Short",
    subtitle: "Length Measurement, Centimetres (cm) & Metres (m), Ruler Usage & Height Charts",
    concepts: [
      "Measuring length using non-standard units (fingers, hand spans) vs standard units.",
      "Using a 15 cm ruler correctly: starting from 0, not from 1.",
      "Understanding standard units: Centimetre (cm), Metre (m), and Kilometre (km).",
      "1 Metre = 100 Centimetres (1 m = 100 cm); 1 Kilometre = 1000 Metres."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Ruler Measurement Principle — Measuring a 7 cm Pencil</text>
      <!-- Ruler -->
      <rect x="70" y="70" width="440" height="40" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <!-- Ticks from 0 to 15 -->
      <g stroke="#92400e" stroke-width="1.2">
        <line x1="80" y1="70" x2="80" y2="85"/><text x="80" y="100" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">0</text>
        <line x1="110" y1="70" x2="110" y2="80"/>
        <line x1="140" y1="70" x2="140" y2="85"/><text x="140" y="100" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">2</text>
        <line x1="170" y1="70" x2="170" y2="80"/>
        <line x1="200" y1="70" x2="200" y2="85"/><text x="200" y="100" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">4</text>
        <line x1="230" y1="70" x2="230" y2="80"/>
        <line x1="260" y1="70" x2="260" y2="85"/><text x="260" y="100" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">6</text>
        <line x1="290" y1="70" x2="290" y2="85"/><text x="290" y="100" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">7</text>
      </g>
      <!-- Pencil -->
      <rect x="80" y="48" width="200" height="14" rx="2" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
      <polygon points="280,48 290,55 280,62" fill="#fde047"/>
      <polygon points="287,53 290,55 287,57" fill="#0f172a"/>
      <text x="180" y="40" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Length: 7 cm (Measured from 0 to 7)</text>
      <text x="290" y="142" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412" text-anchor="middle">Critical Rule: Always align the starting edge with the 0 mark of the ruler.</text>
    </svg>`,
    questions: [
      {
        category: "Unit Selection • cm, m, or km",
        q: "Which unit (cm, m, or km) is best suited to measure: (a) The length of a safety pin, (b) The height of a coconut tree, (c) The distance between Delhi and Agra, (d) The length of a 500-rupee currency note?",
        ans: "<strong>Appropriate Units:</strong><br>• (a) Safety pin: <strong>Centimetres (cm)</strong> (small object)<br>• (b) Coconut tree: <strong>Metres (m)</strong> (tall height)<br>• (c) Distance between Delhi and Agra: <strong>Kilometres (km)</strong> (intercity travel)<br>• (d) Currency note: <strong>Centimetres (cm)</strong> (approx 15 cm).",
        marks: 2,
        rubric: [
          { key: "Correct units for small objects (cm)", marks: "1.0 M" },
          { key: "Correct units for tree (m) and intercity distance (km)", marks: "1.0 M" }
        ]
      },
      {
        category: "Ruler Measurement Error Analysis",
        q: "Rohan broke his ruler. The scale now starts from 3 cm instead of 0. If he places a wooden crayon with its left tip at 3 cm and the right tip reaches 11 cm, what is the actual length of the crayon?",
        ans: "<strong>Calculation:</strong><br>• Starting point = 3 cm<br>• Ending point = 11 cm<br>• <strong>Actual length</strong> = Ending point - Starting point = 11 cm - 3 cm = <strong>8 cm</strong>.",
        marks: 2,
        rubric: [
          { key: "Recognizing subtraction of starting offset", marks: "1.0 M" },
          { key: "Correct calculation (11 - 3 = 8 cm)", marks: "1.0 M" }
        ]
      },
      {
        category: "Height Chart Comparison • Word Problem",
        q: "In Class 3, Amit's height is 1 metre 25 centimetres. Sanya is 18 cm taller than Amit. What is Sanya's height in metres and centimetres?",
        ans: "<strong>Solution:</strong><br>• Amit's height = 1 m 25 cm<br>• Sanya's additional height = 18 cm<br>• Sanya's height = 1 m + (25 cm + 18 cm)<br>• 25 + 18 = 43 cm<br>• <strong>Sanya's total height</strong> = <strong>1 metre 43 centimetres (1 m 43 cm)</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct addition of centimetre values (25 + 18 = 43)", marks: "1.0 M" },
          { key: "Clear final representation in m and cm", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Inter-School Long Jump Competition",
      text: "In the primary sports day long jump final, Danish jumped 2 metres 80 centimetres. Gurjeet jumped 15 cm less than Danish, while Rehana jumped 35 cm more than Danish.",
      question: "How far did Gurjeet jump? How far did Rehana jump? Did Rehana cross the 3-metre mark?",
      answer: "1. Danish = 2 m 80 cm.<br>2. Gurjeet = 2 m 80 cm - 15 cm = <strong>2 metres 65 centimetres</strong>.<br>3. Rehana = 2 m 80 cm + 35 cm = 2 m + 115 cm = 2 m + 1 m 15 cm = <strong>3 metres 15 centimetres</strong>.<br>4. Since 3 m 15 cm > 3 m, <strong>yes, Rehana crossed the 3-metre mark</strong>.",
      rubric: "1M Gurjeet calculation + 1M Rehana calculation + 1M 3m threshold check."
    }
  },
  {
    id: "mmg5",
    num: 5,
    unit: "Unit 3: Measurement & Geometry",
    title: "Shapes and Designs",
    subtitle: "2D Geometrical Shapes, Corners, Edges, Floor Patterns, Weaving & Tangrams",
    concepts: [
      "Comparing edges: straight edges vs curved edges.",
      "Corners (vertices) in 2D shapes: triangles (3), quadrilaterals (4), circles (0).",
      "Floor tiling patterns: tessellations that tile without gaps.",
      "Traditional Indian textile weaving patterns and borders."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Straight Edges vs Curved Edges &amp; Corners</text>
      <!-- Rectangle -->
      <rect x="60" y="55" width="80" height="50" rx="0" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <circle cx="60" cy="55" r="4" fill="#dc2626"/><circle cx="140" cy="55" r="4" fill="#dc2626"/>
      <circle cx="60" cy="105" r="4" fill="#dc2626"/><circle cx="140" cy="105" r="4" fill="#dc2626"/>
      <text x="100" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">4 Straight Edges</text>
      <text x="100" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#dc2626" text-anchor="middle">4 Corners (Red)</text>
      <!-- Oval / Curved -->
      <ellipse cx="260" cy="80" rx="50" ry="30" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
      <text x="260" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">1 Continuous Curved Edge</text>
      <text x="260" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">0 Corners</text>
      <!-- Hexagon -->
      <polygon points="420,55 450,55 465,80 450,105 420,105 405,80" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
      <text x="435" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">6 Straight Edges</text>
      <text x="435" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">6 Corners</text>
    </svg>`,
    questions: [
      {
        category: "Corner & Edge Classification",
        q: "Look at these objects: (1) A sheet of paper, (2) A wheel, (3) A blackboard, (4) An egg. State whether each object has straight edges or curved edges, and how many corners it has.",
        ans: "<strong>Classification:</strong><br>• <strong>1. Sheet of paper:</strong> Straight edges (4) → <strong>4 corners</strong>.<br>• <strong>2. Wheel:</strong> Curved edge (1 continuous circular boundary) → <strong>0 corners</strong>.<br>• <strong>3. Blackboard:</strong> Straight edges (4) → <strong>4 corners</strong>.<br>• <strong>4. Egg:</strong> Curved surface → <strong>0 corners</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct straight/curved edge identification", marks: "1.0 M" },
          { key: "Correct corner counts for all 4 items", marks: "1.0 M" }
        ]
      },
      {
        category: "Tangram Dissection • 7-Piece Tangram",
        q: "In a standard 7-piece Tangram puzzle: (a) How many triangles are there? (b) Are all triangles of the same size? (c) Name the two other shapes in the puzzle.",
        ans: "<strong>Tangram Composition:</strong><br>• <strong>(a) Triangles:</strong> There are <strong>5 triangles</strong>.<br>• <strong>(b) Sizes:</strong> <strong>No</strong>, they are of different sizes: 2 large triangles, 1 medium triangle, and 2 small triangles.<br>• <strong>(c) Other shapes:</strong> <strong>1 Square</strong> and <strong>1 Parallelogram</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct count of triangles (5)", marks: "1.0 M" },
          { key: "Distinction between large, medium, small triangles", marks: "1.0 M" },
          { key: "Naming square and parallelogram", marks: "1.0 M" }
        ]
      },
      {
        category: "Tessellation & Floor Patterns",
        q: "Explain what a tessellation is. Draw or describe how a combination of triangles can tile a floor completely without leaving any gaps.",
        ans: "<strong>Explanation:</strong><br>• A <strong>tessellation</strong> is a pattern made of repeating geometric shapes that covers a flat surface completely without any gaps or overlaps.<br>• <strong>Triangle Tiling:</strong> Two identical triangles can be placed together along their diagonal to form a rectangle. These rectangles can then be arranged in neat rows and columns to cover any floor seamlessly.",
        marks: 2,
        rubric: [
          { key: "Definition of tessellation (no gaps, no overlaps)", marks: "1.0 M" },
          { key: "Explanation of triangle pairing to form rectangles", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Handloom Saree Border Design",
      text: "A master weaver from Varanasi designs a border pattern using alternating red squares and yellow triangles. Every 10 cm repeat of the pattern uses 2 squares and 4 triangles.",
      question: "How many squares and how many triangles will be woven along a 1-metre (100 cm) saree border?",
      answer: "1. Total border length = 1 metre = 100 cm.<br>2. Number of 10 cm pattern repeats = 100 ÷ 10 = 10 repeats.<br>3. <strong>Squares needed</strong> = 10 × 2 = <strong>20 squares</strong>.<br>4. <strong>Triangles needed</strong> = 10 × 4 = <strong>40 triangles</strong>.",
      rubric: "1M meter to cm conversion + 1M pattern repeats + 1M shape counts."
    }
  },
  {
    id: "mmg6",
    num: 6,
    unit: "Unit 4: Advanced Operations & Practical Math",
    title: "Fun with Give and Take",
    subtitle: "Subtraction with Borrowing, Checking by Addition, Cricket Runs & Story Problems",
    concepts: [
      "Subtraction of 3-digit numbers with regrouping across tens and hundreds.",
      "Verifying subtraction using inverse addition (Difference + Subtrahend = Minuend).",
      "Estimating differences by rounding to nearest 10 or 100.",
      "Solving multi-step real-world problems involving shopping and transport."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf2f8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be185d" text-anchor="middle">Verification of Subtraction Using Addition</text>
      <!-- Subtraction Box -->
      <rect x="70" y="50" width="180" height="70" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
      <text x="160" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#9d174d" text-anchor="middle">384 - 156 = 228</text>
      <text x="160" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#be185d" text-anchor="middle">(Subtracting with borrowing)</text>
      <!-- Arrow -->
      <path d="M265,85 L315,85" stroke="#db2777" stroke-width="2.5" marker-end="url(#arrow)"/>
      <!-- Addition Verification -->
      <rect x="330" y="50" width="180" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="420" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#15803d" text-anchor="middle">228 + 156 = 384 ✓</text>
      <text x="420" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#166534" text-anchor="middle">(Answer matches original!)</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9d174d" text-anchor="middle">Always check: Difference + What you took away = What you started with!</text>
    </svg>`,
    questions: [
      {
        category: "Subtraction with Regrouping • Column Working",
        q: "Solve: 503 - 247. Show step-by-step regrouping across zeroes. Then check your answer by addition.",
        ans: "<strong>Working:</strong><br>&nbsp;&nbsp;H&nbsp;&nbsp;T&nbsp;&nbsp;O<br>&nbsp;&nbsp;5&nbsp;&nbsp;0&nbsp;&nbsp;3<br>- 2&nbsp;&nbsp;4&nbsp;&nbsp;7<br>---------<br>&nbsp;&nbsp;<strong>2&nbsp;&nbsp;5&nbsp;&nbsp;6</strong><br><br><strong>Regrouping Explanation:</strong><br>1. Ones: 3 - 7 cannot be done. Tens place has 0, so borrow from Hundreds place.<br>2. Borrow 1 Hundred from 5 (leaves 4 Hundreds) → Tens becomes 10.<br>3. Borrow 1 Ten from 10 (leaves 9 Tens) → Ones becomes 13.<br>4. Ones: 13 - 7 = <strong>6</strong>.<br>5. Tens: 9 - 4 = <strong>5</strong>.<br>6. Hundreds: 4 - 2 = <strong>2</strong>.<br><br><strong>Check by Addition:</strong> 256 + 247 = 503 ✓ Verified correct.",
        marks: 4,
        rubric: [
          { key: "Correct borrowing across zero", marks: "2.0 M" },
          { key: "Correct difference (256)", marks: "1.0 M" },
          { key: "Correct addition check (256 + 247 = 503)", marks: "1.0 M" }
        ]
      },
      {
        category: "Cricket Match Scoreboard • Target Problem",
        q: "In a one-day cricket match, Sri Lanka made 232 runs. India has scored 123 runs so far. How many runs does India still need to win the match?",
        ans: "<strong>Solution:</strong><br>• Sri Lanka's score = 232 runs<br>• Runs needed to win = Sri Lanka's score + 1 = 232 + 1 = <strong>233 runs</strong>.<br>• India's current score = 123 runs<br>• Runs still needed to win = 233 - 123 = <strong>110 runs</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct identification of winning target (233 runs)", marks: "1.5 M" },
          { key: "Correct subtraction (233 - 123 = 110 runs)", marks: "1.5 M" }
        ]
      },
      {
        category: "Estimation Check • Shopping Math",
        q: "Mohan went shopping with ₹400. He bought a shirt for ₹195 and trousers for ₹148. Without exact calculation, estimate if he has enough money. Then find his exact change.",
        ans: "<strong>Solution:</strong><br>1. <strong>Estimation:</strong><br>• ₹195 is approx ₹200.<br>• ₹148 is approx ₹150.<br>• Total estimate = ₹200 + ₹150 = ₹350.<br>• Since ₹350 &lt; ₹400, he <strong>has enough money</strong>.<br><br>2. <strong>Exact Calculation:</strong><br>• Total cost = ₹195 + ₹148 = ₹343.<br>• Change received = ₹400 - ₹343 = <strong>₹57</strong>.",
        marks: 3,
        rubric: [
          { key: "Clear estimation reasoning with rounded numbers", marks: "1.5 M" },
          { key: "Exact addition (₹343) and change calculation (₹57)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Village Water Tank Maintenance",
      text: "A village overhead water tank has a capacity of 850 litres. In the morning, 475 litres of water were consumed by households. Later, the pump filled 320 litres of fresh water into the tank.",
      question: "How much water was in the tank at the end of the day? Can the tank take another 200 litres without overflowing?",
      answer: "1. Water left after morning usage = 850 - 475 = 375 litres.<br>2. Water after fresh pumping = 375 + 320 = <strong>695 litres</strong>.<br>3. Space remaining in tank = 850 - 695 = 155 litres.<br>4. Since 155 litres < 200 litres, <strong>no, adding 200 litres will cause the tank to overflow</strong> (by 45 litres).",
      rubric: "1M morning subtraction + 1M pumping addition + 1M capacity check."
    }
  },
  {
    id: "mmg7",
    num: 7,
    unit: "Unit 4: Advanced Operations & Practical Math",
    title: "Time Goes on...",
    subtitle: "Seconds, Minutes, Hours, Days, Months, Years, Timeline & Age Problems",
    concepts: [
      "Categorizing events by duration: taking seconds, minutes, hours, days, months, or years.",
      "Reading dates and understanding different date notations (DD/MM/YYYY).",
      "Building a personal life timeline: chronological ordering of milestone events.",
      "Calculating age difference between family members."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#a16207" text-anchor="middle">Personal Milestone Timeline — Chronological Ordering</text>
      <!-- Timeline line -->
      <line x1="60" y1="85" x2="520" y2="85" stroke="#ca8a04" stroke-width="3"/>
      <!-- Milestone nodes -->
      <circle cx="100" cy="85" r="7" fill="#ea580c"/>
      <text x="100" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Born</text>
      <text x="100" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#713f12" text-anchor="middle">Age 0</text>
      <circle cx="200" cy="85" r="7" fill="#ea580c"/>
      <text x="200" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">First Steps</text>
      <text x="200" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#713f12" text-anchor="middle">Age 1</text>
      <circle cx="320" cy="85" r="7" fill="#ea580c"/>
      <text x="320" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Joined School</text>
      <text x="320" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#713f12" text-anchor="middle">Age 4</text>
      <circle cx="480" cy="85" r="7" fill="#ea580c"/>
      <text x="480" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Class 3 Now</text>
      <text x="480" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#713f12" text-anchor="middle">Age 8</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#854d0e" text-anchor="middle">A timeline arranges historical events in the exact order they occurred.</text>
    </svg>`,
    questions: [
      {
        category: "Time Duration Estimation • Categorization",
        q: "Classify each activity into 'Seconds', 'Minutes', 'Hours', or 'Days': (a) To blink your eyes, (b) To knit a woollen sweater, (c) To boil a cup of milk, (d) For curd to set from warm milk.",
        ans: "<strong>Classifications:</strong><br>• (a) Blink your eyes: <strong>Seconds</strong> (fraction of a second)<br>• (b) Knit a sweater: <strong>Days</strong> (usually several days or weeks)<br>• (c) Boil a cup of milk: <strong>Minutes</strong> (approx 3 to 5 minutes)<br>• (d) For curd to set: <strong>Hours</strong> (approx 6 to 8 hours).",
        marks: 2,
        rubric: [
          { key: "Correct duration category for all 4 activities", marks: "2.0 M" }
        ]
      },
      {
        category: "Birth Certificate Analysis • Date Calculations",
        q: "Look at Bincy's birth certificate: Date of birth: 02/05/2018 (2 May 2018). (a) How old was Bincy on 2 May 2026? (b) In which year did she celebrate her 5th birthday?",
        ans: "<strong>Analysis:</strong><br>• <strong>(a) Age on 2 May 2026:</strong><br>2026 - 2018 = <strong>8 years old</strong>.<br>• <strong>(b) 5th Birthday Year:</strong><br>2018 + 5 = <strong>2023</strong> (on 2 May 2023).",
        marks: 2,
        rubric: [
          { key: "Correct subtraction for age (8 years)", marks: "1.0 M" },
          { key: "Correct year calculation for 5th birthday (2023)", marks: "1.0 M" }
        ]
      },
      {
        category: "Age Difference Word Problem",
        q: "Rohan's mother is 34 years old. His grandmother is 62 years old. (a) What is the age difference between Rohan's mother and grandmother? (b) If Rohan is 8 years old, by how many years is his mother older than him?",
        ans: "<strong>Calculations:</strong><br>• <strong>(a) Mother &amp; Grandmother:</strong><br>62 - 34 = <strong>28 years</strong>.<br>• <strong>(b) Mother &amp; Rohan:</strong><br>34 - 8 = <strong>26 years</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct subtraction for grandmother & mother (28 years)", marks: "1.0 M" },
          { key: "Correct subtraction for mother & Rohan (26 years)", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Family Mango Tree Planting Record",
      text: "Grandfather planted a mango sapling in the family orchard in July 2016. The tree bore its first batch of mangoes in July 2021.",
      question: "How many years did the sapling take to bear fruit? If it is now July 2026, for how many years has the tree been bearing fruit?",
      answer: "1. Years to first fruit = 2021 - 2016 = <strong>5 years</strong>.<br>2. Years bearing fruit up to 2026 = 2026 - 2021 = <strong>5 years</strong> (or 6 harvest seasons including 2021).",
      rubric: "1.5M years to first fruit + 1.5M active fruiting years."
    }
  },
  {
    id: "mmg8",
    num: 8,
    unit: "Unit 5: Weight, Multiplication & Grouping",
    title: "Who Is Heavier?",
    subtitle: "Mass / Weight (kg & g), Pan Balance, Pumpkin Prize & Grocery Packing",
    concepts: [
      "Understanding mass and weight: heavier vs lighter.",
      "Standard units: Kilogram (kg) and Gram (g).",
      "1 Kilogram = 1000 Grams (1 kg = 1000 g); 1/2 kg = 500 g.",
      "Balancing pans: when both pans are level, weights are equal."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Pan Balance — Comparing Weights (Watermelon vs Apples)</text>
      <!-- Stand -->
      <line x1="290" y1="45" x2="290" y2="120" stroke="#334155" stroke-width="4"/>
      <polygon points="270,120 310,120 290,110" fill="#334155"/>
      <!-- Beam tilted (left heavier) -->
      <line x1="160" y1="75" x2="420" y2="55" stroke="#334155" stroke-width="3"/>
      <!-- Left Pan (Down) -->
      <line x1="160" y1="75" x2="140" y2="105" stroke="#64748b" stroke-width="1.5"/>
      <line x1="160" y1="75" x2="180" y2="105" stroke="#64748b" stroke-width="1.5"/>
      <path d="M130,105 Q160,120 190,105" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <circle cx="160" cy="98" r="14" fill="#15803d"/>
      <text x="160" y="138" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#166534" text-anchor="middle">Watermelon (3 kg)</text>
      <!-- Right Pan (Up) -->
      <line x1="420" y1="55" x2="400" y2="85" stroke="#64748b" stroke-width="1.5"/>
      <line x1="420" y1="55" x2="440" y2="85" stroke="#64748b" stroke-width="1.5"/>
      <path d="M390,85 Q420,100 450,85" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
      <circle cx="410" cy="80" r="7" fill="#dc2626"/>
      <circle cx="430" cy="80" r="7" fill="#dc2626"/>
      <text x="420" y="118" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">2 Apples (400 g)</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#c2410c" text-anchor="middle">The heavier pan always tips down!</text>
    </svg>`,
    questions: [
      {
        category: "Weight Unit Selection • Real-World Items",
        q: "State whether you would measure the weight of the following in 'Kilograms (kg)' or 'Grams (g)': (a) A sack of wheat, (b) A gold ring, (c) A geometry compass, (d) A bag of cement.",
        ans: "<strong>Appropriate Units:</strong><br>• (a) Sack of wheat: <strong>Kilograms (kg)</strong> (heavy staple, e.g., 25 kg)<br>• (b) Gold ring: <strong>Grams (g)</strong> (light jewellery, e.g., 5-8 g)<br>• (c) Geometry compass: <strong>Grams (g)</strong> (light tool, e.g., 50 g)<br>• (d) Bag of cement: <strong>Kilograms (kg)</strong> (heavy industrial bag, 50 kg).",
        marks: 2,
        rubric: [
          { key: "Correct units for wheat and cement (kg)", marks: "1.0 M" },
          { key: "Correct units for ring and compass (g)", marks: "1.0 M" }
        ]
      },
      {
        category: "Balance Calculations • Grams & Kilograms",
        q: "A grocery shopkeeper has to weigh 2 kg of sugar. He has only 500 g weights. (a) How many 500 g weights must he put on the weight pan? (b) How many grams are in 2 kg?",
        ans: "<strong>Solution:</strong><br>• <strong>(b) Conversion:</strong> 1 kg = 1000 g, therefore 2 kg = 2 × 1000 g = <strong>2,000 grams</strong>.<br>• <strong>(a) Weights needed:</strong> 2,000 g ÷ 500 g = <strong>4 weights of 500 g</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct conversion to 2000 g", marks: "1.0 M" },
          { key: "Correct number of 500 g weights (4)", marks: "1.0 M" }
        ]
      },
      {
        category: "Equal Weight Comparison • Volume vs Mass",
        q: "Which is heavier: 1 kg of iron or 1 kg of cotton wool? Explain why many people mistakenly think iron is heavier.",
        ans: "<strong>Explanation:</strong><br>• <strong>Answer:</strong> <strong>Both are equally heavy.</strong> Both weigh exactly 1 kilogram (1 kg = 1 kg).<br>• <strong>Reason for Common Mistake:</strong> Iron is dense and occupies a very small volume, whereas 1 kg of cotton is fluffy and occupies a huge bag. People confuse larger size or density with weight, but on a balance scale, both balance each other perfectly.",
        marks: 3,
        rubric: [
          { key: "Clear assertion that both weigh the same (1 kg)", marks: "1.5 M" },
          { key: "Scientific explanation distinguishing volume/density from mass", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "School Sports Equipment Delivery",
      text: "The sports department received a parcel containing 4 footballs (each weighing 400 g) and 2 cricket bats (each weighing 1 kg 200 g).",
      question: "What is the total weight of all the footballs? What is the combined total weight of all sports equipment in kilograms and grams?",
      answer: "1. Total footballs weight = 4 × 400 g = 1,600 g = 1 kg 600 g.<br>2. Total cricket bats weight = 2 × (1 kg 200 g) = 2 kg 400 g.<br>3. Combined weight = (1 kg 600 g) + (2 kg 400 g) = 3 kg + 1000 g = 3 kg + 1 kg = <strong>4 kilograms (4 kg)</strong>.",
      rubric: "1M footballs multiplication + 1M bats multiplication + 1M combined weight in kg."
    }
  },
  {
    id: "mmg9",
    num: 9,
    unit: "Unit 5: Weight, Multiplication & Grouping",
    title: "How Many Times?",
    subtitle: "Repeated Addition, Multiplication Tables, Stick Multiplication & Word Problems",
    concepts: [
      "Multiplication as 'times' or repeated addition: 4 times 3 = 3 + 3 + 3 + 3 = 12.",
      "Drawing stick patterns to understand multiplication intersections.",
      "Multiplication properties: multiplying by 0 gives 0, multiplying by 1 gives the same number.",
      "Solving 2-digit by 1-digit multiplication problems."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#faf5ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#6b21a8" text-anchor="middle">Stick Multiplication Method — 3 Sticks Crossing 4 Sticks = 12 Dots</text>
      <!-- 3 Horizontal sticks -->
      <line x1="120" y1="55" x2="380" y2="55" stroke="#7e22ce" stroke-width="2.5"/>
      <line x1="120" y1="80" x2="380" y2="80" stroke="#7e22ce" stroke-width="2.5"/>
      <line x1="120" y1="105" x2="380" y2="105" stroke="#7e22ce" stroke-width="2.5"/>
      <!-- 4 Vertical sticks -->
      <line x1="160" y1="40" x2="160" y2="120" stroke="#a855f7" stroke-width="2.5"/>
      <line x1="210" y1="40" x2="210" y2="120" stroke="#a855f7" stroke-width="2.5"/>
      <line x1="260" y1="40" x2="260" y2="120" stroke="#a855f7" stroke-width="2.5"/>
      <line x1="310" y1="40" x2="310" y2="120" stroke="#a855f7" stroke-width="2.5"/>
      <!-- Dots at intersections -->
      <g fill="#ec4899">
        <circle cx="160" cy="55" r="4"/><circle cx="210" cy="55" r="4"/><circle cx="260" cy="55" r="4"/><circle cx="310" cy="55" r="4"/>
        <circle cx="160" cy="80" r="4"/><circle cx="210" cy="80" r="4"/><circle cx="260" cy="80" r="4"/><circle cx="310" cy="80" r="4"/>
        <circle cx="160" cy="105" r="4"/><circle cx="210" cy="105" r="4"/><circle cx="260" cy="105" r="4"/><circle cx="310" cy="105" r="4"/>
      </g>
      <rect x="420" y="55" width="120" height="60" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
      <text x="480" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#581c87" text-anchor="middle">3 × 4 = 12</text>
      <text x="480" y="100" font-family="system-ui, sans-serif" font-size="10" fill="#7e22ce" text-anchor="middle">12 Crossing Points</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6b21a8" text-anchor="middle">Counting the crossing points gives the product without memorizing tables!</text>
    </svg>`,
    questions: [
      {
        category: "Stick Crossing Multiplication • Concept",
        q: "Using the stick crossing method: (a) How many sticks crossing in each direction would you draw for 4 × 5? (b) How many crossing points (dots) will you count?",
        ans: "<strong>Solution:</strong><br>• <strong>(a) Sticks:</strong> Draw <strong>4 horizontal sticks</strong> and <strong>5 vertical sticks</strong> crossing them.<br>• <strong>(b) Crossing Points:</strong> Each of the 4 horizontal sticks crosses all 5 vertical sticks. Total crossing points = 4 × 5 = <strong>20 dots</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct number of horizontal and vertical sticks", marks: "1.0 M" },
          { key: "Correct product calculation (20 dots)", marks: "1.0 M" }
        ]
      },
      {
        category: "Word Problem • Repeated Grouping",
        q: "A spider has 8 legs. How many legs do 6 spiders have altogether? Write both the repeated addition sentence and the multiplication fact.",
        ans: "<strong>Solution:</strong><br>• Legs per spider = 8<br>• Number of spiders = 6<br>• <strong>Repeated Addition:</strong> 8 + 8 + 8 + 8 + 8 + 8 = <strong>48 legs</strong>.<br>• <strong>Multiplication Fact:</strong> 6 × 8 = <strong>48 legs</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct repeated addition statement", marks: "1.0 M" },
          { key: "Correct multiplication statement (6 × 8 = 48)", marks: "1.0 M" }
        ]
      },
      {
        category: "2-Digit Multiplication • Box Method",
        q: "Solve 23 × 4 using the split/box multiplication method. Show the breakdown into tens and ones.",
        ans: "<strong>Step-by-step Box Method:</strong><br>1. Split 23 into 20 + 3.<br>2. Multiply each part by 4:<br>• 20 × 4 = <strong>80</strong><br>• 3 × 4 = <strong>12</strong><br>3. Add the two partial products:<br>• 80 + 12 = <strong>92</strong>.<br>Therefore, <strong>23 × 4 = 92</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct splitting of 23 into 20 and 3", marks: "1.0 M" },
          { key: "Correct partial products (80 and 12)", marks: "1.0 M" },
          { key: "Correct final sum (92)", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Garden Flowerbed Rows",
      text: "A municipal botanical garden has 14 flowerbeds. Each flowerbed is planted with 6 marigold plants.",
      question: "How many marigold plants are in the garden? If 5 plants dry up, how many healthy plants remain?",
      answer: "1. Total marigold plants = 14 × 6 = (10 × 6) + (4 × 6) = 60 + 24 = <strong>84 plants</strong>.<br>2. Healthy plants remaining = 84 - 5 = <strong>79 healthy plants</strong>.",
      rubric: "1.5M multiplication of 14 × 6 + 1.5M subtraction of 5 dried plants."
    }
  },
  {
    id: "mmg10",
    num: 10,
    unit: "Unit 6: Patterns, Capacity & Sharing",
    title: "Play with Patterns",
    subtitle: "Repeating Patterns, Growing Patterns, Number Sequences & Secret Coded Messages",
    concepts: [
      "Identifying rules of repeating shape patterns (AB, AAB, ABC).",
      "Growing patterns in shapes and numbers (e.g., triangular numbers, square sequences).",
      "Even and odd number patterns: ending digits (0, 2, 4, 6, 8 vs 1, 3, 5, 7, 9).",
      "Secret messages: decoding messages with letter-to-number replacement rules."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Growing Number Patterns &amp; Secret Decoding</text>
      <!-- Growing block pattern -->
      <rect x="70" y="90" width="20" height="20" fill="#93c5fd" stroke="#1d4ed8"/>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">1</text>
      <rect x="130" y="70" width="20" height="40" fill="#93c5fd" stroke="#1d4ed8"/>
      <rect x="150" y="90" width="20" height="20" fill="#93c5fd" stroke="#1d4ed8"/>
      <text x="150" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">3</text>
      <rect x="210" y="50" width="20" height="60" fill="#93c5fd" stroke="#1d4ed8"/>
      <rect x="230" y="70" width="20" height="40" fill="#93c5fd" stroke="#1d4ed8"/>
      <rect x="250" y="90" width="20" height="20" fill="#93c5fd" stroke="#1d4ed8"/>
      <text x="240" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">6</text>
      <!-- Secret Code Box -->
      <rect x="330" y="50" width="200" height="70" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="430" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e3a8a" text-anchor="middle">Rule: A=1, B=2, C=3...</text>
      <text x="430" y="100" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#2563eb" text-anchor="middle">Code: 13-1-20-8 = MATH</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e40af" text-anchor="middle">Patterns can grow by rules, repeat in cycles, or hide secret words!</text>
    </svg>`,
    questions: [
      {
        category: "Growing Patterns • Number Rules",
        q: "Look at the pattern: 1, 3, 6, 10, ___, ___. (a) What are the next two numbers? (b) State the mathematical rule for how the pattern grows.",
        ans: "<strong>Analysis:</strong><br>• From 1 to 3: +2<br>• From 3 to 6: +3<br>• From 6 to 10: +4<br>• Next step: +5 → 10 + 5 = <strong>15</strong>.<br>• Next step: +6 → 15 + 6 = <strong>21</strong>.<br>• <strong>(a) Next two numbers:</strong> <strong>15, 21</strong> (Triangular numbers).<br>• <strong>(b) Rule:</strong> Each step adds 1 more than was added in the previous step (+2, +3, +4, +5, +6...).",
        marks: 3,
        rubric: [
          { key: "Correct calculation of 15 and 21", marks: "1.5 M" },
          { key: "Clear rule formulation explaining growing increments", marks: "1.5 M" }
        ]
      },
      {
        category: "Even and Odd Patterns • Properties",
        q: "Classify the following as Even or Odd: 246, 381, 500, 789. What happens when you add two odd numbers together? Give an example.",
        ans: "<strong>Classification:</strong><br>• 246: Ends in 6 → <strong>EVEN</strong><br>• 381: Ends in 1 → <strong>ODD</strong><br>• 500: Ends in 0 → <strong>EVEN</strong><br>• 789: Ends in 9 → <strong>ODD</strong>.<br><br><strong>Rule:</strong> The sum of any two odd numbers is always an <strong>EVEN number</strong>.<br>• <em>Example:</em> 3 (Odd) + 5 (Odd) = 8 (Even); 7 + 9 = 16 (Even).",
        marks: 3,
        rubric: [
          { key: "Correct even/odd classification for all 4 numbers", marks: "1.5 M" },
          { key: "Correct rule and supporting example (Odd + Odd = Even)", marks: "1.5 M" }
        ]
      },
      {
        category: "Secret Coded Message • Decoding",
        q: "If each letter is replaced by its alphabetical position (A=1, B=2, C=3... Z=26): (a) Decode the message: '7 - 15 - 15 - 4'. (b) Encode the word 'BOOK' in numbers.",
        ans: "<strong>Solutions:</strong><br>• <strong>(a) Decoding '7 - 15 - 15 - 4':</strong><br>7 = G, 15 = O, 15 = O, 4 = D → <strong>GOOD</strong>.<br>• <strong>(b) Encoding 'BOOK':</strong><br>B = 2, O = 15, O = 15, K = 11 → <strong>2 - 15 - 15 - 11</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct decoding to GOOD", marks: "1.0 M" },
          { key: "Correct encoding for BOOK (2-15-15-11)", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Tile Border Geometric Pattern",
      text: "A walkway is paved with a repeating 4-tile sequence: [Circle, Square, Triangle, Hexagon] that repeats continuously along a path of 50 tiles.",
      question: "Which shape will be on the 20th tile? Which shape will be on the 47th tile?",
      answer: "1. Sequence length = 4 shapes.<br>• 1 = Circle, 2 = Square, 3 = Triangle, 4 = Hexagon.<br>2. <strong>20th tile:</strong> 20 ÷ 4 = 5 with remainder 0 (4th shape) → <strong>Hexagon</strong>.<br>3. <strong>47th tile:</strong> 47 ÷ 4 = 11 with remainder 3 (3rd shape) → <strong>Triangle</strong>.",
      rubric: "1.5M modulo calculation for 20th tile + 1.5M modulo calculation for 47th tile."
    }
  },
  {
    id: "mmg11",
    num: 11,
    unit: "Unit 6: Patterns, Capacity & Sharing",
    title: "Jugs and Mugs",
    subtitle: "Liquid Capacity, Litres (L) & Millilitres (mL), Kheer Party & Medicine Doses",
    concepts: [
      "Estimating and measuring capacity using non-standard vs standard units.",
      "1 Litre = 1000 Millilitres (1 L = 1000 mL).",
      "Equivalent fractions: 500 mL = 1/2 Litre; 250 mL = 1/4 Litre.",
      "Calculating daily water intake and beverage preparation for guests."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfeff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0e7490" text-anchor="middle">Jugs and Mugs — Building 1 Litre from Millilitres</text>
      <!-- Big 1L Jug -->
      <rect x="70" y="45" width="55" height="75" rx="6" fill="#a5f3fc" stroke="#0891b2" stroke-width="2"/>
      <rect x="60" y="60" width="10" height="40" fill="none" stroke="#0891b2" stroke-width="2"/>
      <text x="97" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#0e7490" text-anchor="middle">1 LITRE</text>
      <text x="97" y="105" font-family="system-ui, sans-serif" font-size="9" fill="#0891b2" text-anchor="middle">(1000 mL)</text>
      <text x="180" y="85" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0891b2" text-anchor="middle">=</text>
      <!-- 4 glasses of 250 mL -->
      <g transform="translate(220, 60)">
        <rect x="0" y="0" width="22" height="45" rx="3" fill="#cffafe" stroke="#0891b2" stroke-width="1.5"/>
        <text x="11" y="60" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#0e7490" text-anchor="middle">250</text>
        <rect x="35" y="0" width="22" height="45" rx="3" fill="#cffafe" stroke="#0891b2" stroke-width="1.5"/>
        <text x="46" y="60" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#0e7490" text-anchor="middle">250</text>
        <rect x="70" y="0" width="22" height="45" rx="3" fill="#cffafe" stroke="#0891b2" stroke-width="1.5"/>
        <text x="81" y="60" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#0e7490" text-anchor="middle">250</text>
        <rect x="105" y="0" width="22" height="45" rx="3" fill="#cffafe" stroke="#0891b2" stroke-width="1.5"/>
        <text x="116" y="60" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#0e7490" text-anchor="middle">250</text>
      </g>
      <!-- Right breakdown box -->
      <rect x="390" y="48" width="150" height="70" rx="8" fill="#cffafe" stroke="#06b6d4" stroke-width="1.5"/>
      <text x="465" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#155e75" text-anchor="middle">Ways to make 1,000 mL:</text>
      <text x="465" y="88" font-family="system-ui, sans-serif" font-size="10" fill="#0e7490" text-anchor="middle">• 500 mL + 500 mL</text>
      <text x="465" y="104" font-family="system-ui, sans-serif" font-size="10" fill="#0e7490" text-anchor="middle">• 4 × 250 mL</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0e7490" text-anchor="middle">1000 millilitres equal 1 standard litre</text>
    </svg>`,
    questions: [
      {
        category: "Capacity Combinations • Making 1 Litre",
        q: "How many of each container will you need to make exactly 1 Litre (1,000 mL)? (a) 200 mL glasses, (b) 100 mL medicine cups, (c) 500 mL bottles.",
        ans: "<strong>Calculations for 1,000 mL:</strong><br>• <strong>(a) 200 mL glasses:</strong> 1,000 ÷ 200 = <strong>5 glasses</strong>.<br>• <strong>(b) 100 mL medicine cups:</strong> 1,000 ÷ 100 = <strong>10 cups</strong>.<br>• <strong>(c) 500 mL bottles:</strong> 1,000 ÷ 500 = <strong>2 bottles</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct count for 200 mL (5)", marks: "1.0 M" },
          { key: "Correct count for 100 mL (10)", marks: "1.0 M" },
          { key: "Correct count for 500 mL (2)", marks: "1.0 M" }
        ]
      },
      {
        category: "Medicine Dosage Calculation • Practical Math",
        q: "A doctor prescribes 5 mL of cough syrup to be taken 3 times a day for 5 days. (a) How many mL of syrup does the patient take in one day? (b) How many total mL are needed for the full 5-day course?",
        ans: "<strong>Solution:</strong><br>• Dose per time = 5 mL<br>• Times per day = 3<br><strong>(a) Daily consumption:</strong> 5 mL × 3 = <strong>15 mL per day</strong>.<br><br><strong>(b) 5-Day course total:</strong> 15 mL × 5 days = <strong>75 mL in total</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct daily dosage calculation (15 mL)", marks: "1.5 M" },
          { key: "Correct 5-day course calculation (75 mL)", marks: "1.5 M" }
        ]
      },
      {
        category: "Kheer Party • Real-World Sharing",
        q: "At the wedding party of the squirrels, 10 litres of sweet kheer was cooked. If each bowl holds 100 mL, how many guests can be served with kheer?",
        ans: "<strong>Step-by-step Solution:</strong><br>1. Total kheer = 10 litres.<br>2. Convert litres to millilitres: 10 × 1000 mL = <strong>10,000 mL</strong>.<br>3. Capacity of 1 bowl = 100 mL.<br>4. Number of guests served = 10,000 ÷ 100 = <strong>100 guests</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct conversion of 10 L to 10,000 mL", marks: "1.5 M" },
          { key: "Correct division to find 100 guests", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "School Drinking Water Conservation",
      text: "A leaking tap in the school corridor drips 100 mL of water every hour. The plumber was able to fix it after 12 hours.",
      question: "How much water was wasted in millilitres? How much is that in litres and millilitres?",
      answer: "1. Water wasted in 12 hours = 12 × 100 mL = <strong>1,200 mL</strong>.<br>2. In litres and millilitres: 1,200 mL = 1,000 mL + 200 mL = <strong>1 Litre 200 Millilitres (1 L 200 mL)</strong>.",
      rubric: "1.5M multiplication calculation + 1.5M conversion to litres and millilitres."
    }
  },
  {
    id: "mmg12",
    num: 12,
    unit: "Unit 6: Patterns, Capacity & Sharing",
    title: "Can We Share?",
    subtitle: "Division as Equal Distribution, Equal Jumps on Number Line, Remainders & Word Problems",
    concepts: [
      "Equal sharing among individuals: understanding dividend, divisor, and quotient.",
      "Grouping objects into bundles of equal size.",
      "Division on the number line using backward jumps.",
      "Handling remainders: what happens when items cannot be shared equally."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">Division on Number Line — 18 ÷ 3 = 6 Backward Jumps</text>
      <!-- Number line -->
      <line x1="50" y1="95" x2="530" y2="95" stroke="#16a34a" stroke-width="2.5"/>
      <!-- Jumps backward from 18 to 0 in steps of 3 -->
      <g font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">
        <circle cx="500" cy="95" r="4" fill="#15803d"/><text x="500" y="115">18</text>
        <path d="M500,90 Q465,55 430,90" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="430" cy="95" r="4" fill="#15803d"/><text x="430" y="115">15</text>
        <path d="M430,90 Q395,55 360,90" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="360" cy="95" r="4" fill="#15803d"/><text x="360" y="115">12</text>
        <path d="M360,90 Q325,55 290,90" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="290" cy="95" r="4" fill="#15803d"/><text x="290" y="115">9</text>
        <path d="M290,90 Q255,55 220,90" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="220" cy="95" r="4" fill="#15803d"/><text x="220" y="115">6</text>
        <path d="M220,90 Q185,55 150,90" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="95" r="4" fill="#15803d"/><text x="150" y="115">3</text>
        <path d="M150,90 Q115,55 80,90" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="80" cy="95" r="4" fill="#15803d"/><text x="80" y="115">0</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">6 jumps of 3 taken backwards from 18 to reach 0 → 18 ÷ 3 = 6</text>
    </svg>`,
    questions: [
      {
        category: "Equal Sharing • Division Facts",
        q: "There are 28 laddoos. Mother shares them equally among 4 plates. (a) How many laddoos are on each plate? (b) Write the related multiplication fact.",
        ans: "<strong>Solution:</strong><br>• Total laddoos = 28<br>• Number of plates = 4<br>• <strong>(a) Division Fact:</strong> 28 ÷ 4 = <strong>7 laddoos per plate</strong>.<br>• <strong>(b) Related Multiplication Fact:</strong> 4 × 7 = <strong>28</strong> (or 7 × 4 = 28).",
        marks: 2,
        rubric: [
          { key: "Correct division quotient (7)", marks: "1.0 M" },
          { key: "Correct related multiplication statement", marks: "1.0 M" }
        ]
      },
      {
        category: "Division with Remainder • Problem Solving",
        q: "A teacher has 35 craft ribbons. She gives 4 ribbons to each group for an art project. (a) How many groups will receive ribbons? (b) How many ribbons will be left over?",
        ans: "<strong>Step-by-step Solution:</strong><br>1. Divide 35 by 4:<br>• 4 × 8 = 32<br>• 35 - 32 = 3<br>2. <strong>(a) Groups receiving ribbons:</strong> <strong>8 groups</strong>.<br>3. <strong>(b) Ribbons left over (remainder):</strong> <strong>3 ribbons</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct division calculation and quotient (8)", marks: "1.5 M" },
          { key: "Correct remainder identification (3 ribbons)", marks: "1.5 M" }
        ]
      },
      {
        category: "Frog Jump Division • Number Line",
        q: "A frog takes jumps of 3 steps at a time on a numbered track. How many jumps will it take to reach: (a) 15? (b) 27? Show the division sentences.",
        ans: "<strong>Jumps:</strong><br>• <strong>(a) To reach 15:</strong> 15 ÷ 3 = <strong>5 jumps</strong>.<br>• <strong>(b) To reach 27:</strong> 27 ÷ 3 = <strong>9 jumps</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct jumps for 15 (5 jumps)", marks: "1.0 M" },
          { key: "Correct jumps for 27 (9 jumps)", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Library Bookshelf Organization",
      text: "The primary section library has 54 new storybooks. Each shelf can hold exactly 9 books.",
      question: "How many shelves will be completely filled? If 2 more books arrive, can another shelf be filled?",
      answer: "1. Shelves filled = 54 ÷ 9 = <strong>6 shelves completely filled</strong>.<br>2. If 2 more books arrive, total books = 54 + 2 = 56.<br>3. To fill another (7th) shelf, they would need 9 books. Since they only have 2 extra books (7 books short), <strong>no, another shelf cannot be filled</strong>.",
      rubric: "1.5M division of 54 ÷ 9 = 6 + 1.5M remainder analysis for extra books."
    }
  },
  {
    id: "mmg13",
    num: 13,
    unit: "Unit 7: Data Handling & Money",
    title: "Smart Charts!",
    subtitle: "Tally Marks, Bar Charts, Tables, Traffic Surveys & Drawing Inferences",
    concepts: [
      "Using tally marks (bundles of 5: four vertical lines crossed by one diagonal line).",
      "Constructing and reading frequency tables from real-world surveys.",
      "Reading simple bar charts with labeled axes and scales.",
      "Interpreting data: finding the most popular, least popular, and total counts."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Smart Bar Chart — Favourite Sports of Class 3 Students</text>
      <!-- Axes -->
      <line x1="80" y1="35" x2="80" y2="125" stroke="#64748b" stroke-width="2"/>
      <line x1="80" y1="125" x2="520" y2="125" stroke="#64748b" stroke-width="2"/>
      <!-- Y-ticks -->
      <text x="70" y="128" font-family="system-ui, sans-serif" font-size="9" fill="#64748b" text-anchor="end">0</text>
      <text x="70" y="95" font-family="system-ui, sans-serif" font-size="9" fill="#64748b" text-anchor="end">10</text>
      <text x="70" y="60" font-family="system-ui, sans-serif" font-size="9" fill="#64748b" text-anchor="end">20</text>
      <!-- Bar 1: Cricket (18) -->
      <rect x="110" y="65" width="45" height="60" fill="#3b82f6" rx="4"/>
      <text x="132" y="58" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1d4ed8" text-anchor="middle">18</text>
      <text x="132" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">Cricket</text>
      <!-- Bar 2: Football (12) -->
      <rect x="190" y="85" width="45" height="40" fill="#10b981" rx="4"/>
      <text x="212" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">12</text>
      <text x="212" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">Football</text>
      <!-- Bar 3: Badminton (15) -->
      <rect x="270" y="75" width="45" height="50" fill="#f59e0b" rx="4"/>
      <text x="292" y="68" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">15</text>
      <text x="292" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">Badminton</text>
      <!-- Bar 4: Chess (5) -->
      <rect x="350" y="108" width="45" height="17" fill="#8b5cf6" rx="4"/>
      <text x="372" y="102" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#6d28d9" text-anchor="middle">5</text>
      <text x="372" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">Chess</text>
      <text x="460" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">Total = 50</text>
    </svg>`,
    questions: [
      {
        category: "Bar Chart Interpretation • Sports Survey",
        q: "Look at the bar chart above: (a) Which is the most popular sport? (b) How many more students prefer cricket over football? (c) How many total students participated in the survey?",
        ans: "<strong>Data Reading:</strong><br>• <strong>(a) Most popular sport:</strong> <strong>Cricket</strong> (18 students, highest bar).<br>• <strong>(b) Difference between Cricket and Football:</strong> 18 - 12 = <strong>6 more students</strong>.<br>• <strong>(c) Total students:</strong> 18 + 12 + 15 + 5 = <strong>50 students</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct most popular sport identified", marks: "1.0 M" },
          { key: "Correct difference calculation (18 - 12 = 6)", marks: "1.0 M" },
          { key: "Correct total students sum (50)", marks: "1.0 M" }
        ]
      },
      {
        category: "Tally Marks Representation",
        q: "Draw tally marks for the following frequency counts: (a) 7 cars, (b) 14 bicycles, (c) 19 pedestrians.",
        ans: "<strong>Tally Mark Representations (Bundles of 5):</strong><br>• <strong>(a) 7 cars:</strong> <s>||||</s> || (One bundle of 5 + 2 lines)<br>• <strong>(b) 14 bicycles:</strong> <s>||||</s> <s>||||</s> |||| (Two bundles of 5 + 4 lines)<br>• <strong>(c) 19 pedestrians:</strong> <s>||||</s> <s>||||</s> <s>||||</s> |||| (Three bundles of 5 + 4 lines).",
        marks: 3,
        rubric: [
          { key: "Correct tally bundle for 7", marks: "1.0 M" },
          { key: "Correct tally bundles for 14", marks: "1.0 M" },
          { key: "Correct tally bundles for 19", marks: "1.0 M" }
        ]
      },
      {
        category: "Data Table Analysis • Family Helpers",
        q: "In a class of 30 children, 10 help in setting the dinner table, 12 help in market shopping, and 8 help in cleaning rooms. Represent this data in a clean frequency table with tally marks.",
        ans: "<strong>Frequency Table:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:8px;'><thead><tr style='background:#f1f5f9;border-bottom:2px solid #cbd5e1;'><th style='padding:6px;border:1px solid #cbd5e1;'>Help Activity</th><th style='padding:6px;border:1px solid #cbd5e1;'>Tally Marks</th><th style='padding:6px;border:1px solid #cbd5e1;'>Number of Children</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Setting Dinner Table</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> <s>||||</s></td><td style='padding:6px;border:1px solid #cbd5e1;'>10</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Market Shopping</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> <s>||||</s> ||</td><td style='padding:6px;border:1px solid #cbd5e1;'>12</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Cleaning Rooms</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> |||</td><td style='padding:6px;border:1px solid #cbd5e1;'>8</td></tr><tr style='background:#f8fafc;font-weight:700;'><td style='padding:6px;border:1px solid #cbd5e1;'>Total</td><td style='padding:6px;border:1px solid #cbd5e1;'>—</td><td style='padding:6px;border:1px solid #cbd5e1;'>30</td></tr></tbody></table>",
        marks: 3,
        rubric: [
          { key: "Correct table layout and categories", marks: "1.5 M" },
          { key: "Correct tally grouping and frequency total (30)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "School Canteen Fruit Survey",
      text: "The canteen manager tracked fruit sales on Wednesday: Bananas (45), Apples (30), Oranges (25), and Guavas (20).",
      question: "Which fruit was the most demanded? What fraction of the total fruit sales did bananas represent?",
      answer: "1. Total fruits sold = 45 + 30 + 25 + 20 = 120 fruits.<br>2. <strong>Most demanded fruit:</strong> Bananas with 45 sold.<br>3. <strong>Fraction of bananas:</strong> 45 out of 120 = 45/120 = 15/40 = <strong>3/8 (three-eighths)</strong>.",
      rubric: "1M total summation + 1M most demanded + 1M simplified fraction."
    }
  },
  {
    id: "mmg14",
    num: 14,
    unit: "Unit 7: Data Handling & Money",
    title: "Rupees and Paise",
    subtitle: "Indian Currency, Converting Rupees to Paise, Self-Service Store Bills & Cash Receipts",
    concepts: [
      "Indian currency: coins (₹1, ₹2, ₹5, ₹10, ₹20) and notes (₹10, ₹20, ₹50, ₹100, ₹200, ₹500).",
      "1 Rupee = 100 Paise (₹1 = 100 p).",
      "Writing amounts in rupees and paise with decimal points (e.g., ₹12.50).",
      "Preparing itemized shopping bills and checking total amounts and change."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">Self-Service Cash Memo — Stationery Shopping Bill</text>
      <!-- Bill Layout -->
      <rect x="90" y="45" width="400" height="95" rx="6" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <line x1="90" y1="70" x2="490" y2="70" stroke="#fcd34d" stroke-width="1.5"/>
      <text x="105" y="62" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e">Item</text>
      <text x="260" y="62" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e">Rate</text>
      <text x="350" y="62" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e">Qty</text>
      <text x="440" y="62" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e">Amount</text>
      <!-- Row 1 -->
      <text x="105" y="85" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">Pencil Box</text>
      <text x="260" y="85" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">₹35.00</text>
      <text x="355" y="85" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">1</text>
      <text x="440" y="85" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">₹35.00</text>
      <!-- Row 2 -->
      <text x="105" y="102" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">Eraser</text>
      <text x="260" y="102" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">₹5.50</text>
      <text x="355" y="102" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">2</text>
      <text x="440" y="102" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b">₹11.00</text>
      <!-- Total Line -->
      <line x1="90" y1="112" x2="490" y2="112" stroke="#d97706" stroke-width="1"/>
      <text x="320" y="128" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#b45309">TOTAL BILL:</text>
      <text x="440" y="128" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#92400e">₹46.00</text>
    </svg>`,
    questions: [
      {
        category: "Rupees & Paise Conversion • Arithmetic",
        q: "Convert: (a) ₹7 into paise, (b) 850 paise into rupees and paise, (c) ₹12.75 into paise.",
        ans: "<strong>Conversions (1 Rupee = 100 Paise):</strong><br>• <strong>(a) ₹7:</strong> 7 × 100 p = <strong>700 paise</strong>.<br>• <strong>(b) 850 paise:</strong> 800 p + 50 p = <strong>8 rupees and 50 paise (₹8.50)</strong>.<br>• <strong>(c) ₹12.75:</strong> (12 × 100) + 75 = 1200 + 75 = <strong>1,275 paise</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct conversion for ₹7 (700 p)", marks: "1.0 M" },
          { key: "Correct conversion for 850 p (₹8.50)", marks: "1.0 M" },
          { key: "Correct conversion for ₹12.75 (1275 p)", marks: "1.0 M" }
        ]
      },
      {
        category: "Cash Memo Preparation • Bill Calculation",
        q: "Prepare a cash memo for the following purchases: 1 notebook for ₹24.50, 2 pencils at ₹6.00 each, and 1 sharpener for ₹4.50. What is the total bill amount?",
        ans: "<strong>Cash Memo:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:8px;'><thead><tr style='background:#f1f5f9;border-bottom:2px solid #cbd5e1;'><th style='padding:6px;border:1px solid #cbd5e1;'>Item</th><th style='padding:6px;border:1px solid #cbd5e1;'>Rate (₹)</th><th style='padding:6px;border:1px solid #cbd5e1;'>Qty</th><th style='padding:6px;border:1px solid #cbd5e1;'>Amount (₹)</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Notebook</td><td style='padding:6px;border:1px solid #cbd5e1;'>24.50</td><td style='padding:6px;border:1px solid #cbd5e1;'>1</td><td style='padding:6px;border:1px solid #cbd5e1;'>24.50</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Pencils</td><td style='padding:6px;border:1px solid #cbd5e1;'>6.00</td><td style='padding:6px;border:1px solid #cbd5e1;'>2</td><td style='padding:6px;border:1px solid #cbd5e1;'>12.00</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Sharpener</td><td style='padding:6px;border:1px solid #cbd5e1;'>4.50</td><td style='padding:6px;border:1px solid #cbd5e1;'>1</td><td style='padding:6px;border:1px solid #cbd5e1;'>4.50</td></tr><tr style='background:#f8fafc;font-weight:700;'><td colspan='3' style='padding:6px;border:1px solid #cbd5e1;text-align:right;'>TOTAL AMOUNT:</td><td style='padding:6px;border:1px solid #cbd5e1;'><strong>₹41.00</strong></td></tr></tbody></table><br>• Total bill = 24.50 + 12.00 + 4.50 = <strong>₹41.00</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct itemised extensions", marks: "1.5 M" },
          { key: "Correct total addition (₹41.00)", marks: "1.5 M" }
        ]
      },
      {
        category: "Railway Ticket Booking • Money Word Problem",
        q: "A railway ticket from Station A to Station B costs ₹62.50. (a) What is the total fare for two such tickets? (b) If you hand over a ₹200 note to the ticket booking clerk, how much balance will you receive back?",
        ans: "<strong>Step-by-step Solution:</strong><br><strong>(a) Total Ticket Fare:</strong><br>2 × ₹62.50 = ₹(62.50 + 62.50) = <strong>₹125.00</strong>.<br><br><strong>(b) Balance Received Back:</strong><br>Amount given = ₹200.00<br>Total fare = ₹125.00<br>Change = ₹200.00 - ₹125.00 = <strong>₹75.00</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct calculation of 2 tickets fare (₹125)", marks: "1.5 M" },
          { key: "Correct subtraction for balance change (₹75)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "School Tuck Shop Purchasing",
      text: "Kabir buys a sandwich for ₹32.50, an apple juice bottle for ₹25.00, and a fruit bun for ₹15.50 at the school canteen. He pays with a ₹100 note.",
      question: "What is his total canteen bill? How much change should the canteen cashier return to him?",
      answer: "1. Total bill = ₹32.50 + ₹25.00 + ₹15.50 = ₹(32.50 + 15.50) + ₹25.00 = ₹48.00 + ₹25.00 = <strong>₹73.00</strong>.<br>2. Amount paid = ₹100.00.<br>3. <strong>Change to receive</strong> = ₹100.00 - ₹73.00 = <strong>₹27.00</strong>.",
      rubric: "1.5M addition of rupees and paise + 1.5M change subtraction from ₹100."
    }
  }
];

module.exports = { mathMagicChapters };
