// Official NCERT Class 4 Mathematics (Math-Magic Book 4) Complete Dataset - Chapters 1 to 14
// Aligned with CBSE Curriculum (2026-27 Session)

const mathMagicChapters = [
  // -------------------------------------------------------------------------
  // CHAPTER 1: BUILDING WITH BRICKS
  // -------------------------------------------------------------------------
  {
    id: "mg1",
    num: 1,
    unit: "Classic Track: Math-Magic",
    title: "Building with Bricks",
    subtitle: "Brick Patterns, Arch Designs (Mehrab, Jharokha), Brick Geometry & Brick Kiln Arithmetic",
    concepts: [
      "Architectural brick patterns from Jagriti School, Murshidabad: floor patterns, circular patterns, and mirror patterns.",
      "Geometric dimensions and faces of a standard brick: 6 rectangular faces, 12 edges, 8 corners.",
      "Traditional Indian architectural arches: Mehrab, circular arches, and decorative Jharokhas.",
      "Large number calculations: Indian brick kilns producing 1,00,000 (one lakh) bricks; calculating the cost of thousands of bricks."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Building with Bricks — Isometric View & Face Dimensions</text>
      <!-- Brick Isometric -->
      <polygon points="120,70 240,70 290,45 170,45" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
      <polygon points="120,70 240,70 240,115 120,115" fill="#f97316" stroke="#9a3412" stroke-width="2"/>
      <polygon points="240,70 290,45 290,90 240,115" fill="#c2410c" stroke="#9a3412" stroke-width="2"/>
      <text x="180" y="98" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">Front Face</text>
      <text x="205" y="60" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Top Face</text>
      <text x="265" y="85" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Side</text>
      <!-- Arch Diagram -->
      <path d="M370 120 L370 75 Q425 35 480 75 L480 120" fill="none" stroke="#b45309" stroke-width="5"/>
      <path d="M385 120 L385 80 Q425 45 465 80 L465 120" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="425" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e" text-anchor="middle">Mehrab Arch</text>
      <text x="425" y="142" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">Traditional Brick Arch</text>
    </svg>`,
    questions: [
      {
        category: "Textbook Exercise • Geometric Properties of a Brick",
        q: "Answer the following questions about a brick: (a) How many faces does a brick have? (b) Is any face of a standard brick a square? (c) Draw the smallest face of a brick. (d) Which of the following shapes can be a face of a brick: Triangle, Square, Rectangle, Circle?",
        ans: `<strong>(a)</strong> A standard brick has <strong>6 rectangular faces</strong>.<br>
<strong>(b)</strong> No, in standard construction bricks, all 6 faces are rectangles of varying dimensions (length × width, length × height, width × height). None of the faces is a square.<br>
<strong>(c) Smallest face:</strong> The side face measuring width × height (approximately 10 cm × 7 cm) is the smallest face.<br>
<strong>(d) Face shape:</strong> Only a <strong>Rectangle</strong> can be a face of a standard brick (triangles and circles cannot form brick faces).`,
        marks: 3,
        rubric: [
          { key: "Correct face count (6) and shape verification", marks: "1.5 M" },
          { key: "Smallest face description and rectangle identification", marks: "1.5 M" }
        ]
      },
      {
        category: "Brick Kiln Cost Calculation",
        q: "Bhajan went to buy bricks. The rate was ₹1,800 for 1,000 old bricks, ₹2,000 for 1,000 new bricks from Brickabad, and ₹1,200 for 1,000 bricks from Itapur. If Bhajan buys 3,000 new bricks from Brickabad and 500 old bricks, how much money will he pay in total?",
        ans: `<strong>Step 1: Cost of 3,000 new bricks from Brickabad:</strong><br>
• Cost of 1,000 new bricks = ₹2,000.<br>
• Cost of 3,000 new bricks = 3 × ₹2,000 = <strong>₹6,000</strong>.<br><br>
<strong>Step 2: Cost of 500 old bricks:</strong><br>
• Cost of 1,000 old bricks = ₹1,800.<br>
• Cost of 500 bricks (half of 1,000) = ₹1,800 ÷ 2 = <strong>₹900</strong>.<br><br>
<strong>Step 3: Total Payment:</strong><br>
• Total = ₹6,000 + ₹900 = <strong>₹6,900</strong>.`,
        marks: 3,
        rubric: [
          { key: "Calculation for 3,000 new bricks (₹6,000)", marks: "1.0 M" },
          { key: "Calculation for 500 old bricks (₹900)", marks: "1.0 M" },
          { key: "Total payment ₹6,900 with clear working", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Estimating Bricks for a Compound Wall",
      text: "A mason calculates that 1 metre length of a 1-metre high boundary wall requires 100 bricks. The school desires to construct a 45-metre long and 1-metre high wall.",
      question: "How many bricks should the school order? If each truck carries 2,500 bricks, how many truckloads are needed?",
      answer: "<strong>Step 1: Total bricks needed:</strong><br>45 m × 100 bricks/m = <strong>4,500 bricks</strong>.<br><strong>Step 2: Number of truckloads:</strong><br>4,500 ÷ 2,500 = 1 full truck (2,500 bricks) with 2,000 bricks remaining.<br>Therefore, <strong>2 truckloads</strong> must be ordered so the project has enough bricks.",
      rubric: "1 Mark for 4,500 bricks; 1 Mark for practical answer of 2 truckloads."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 2: LONG AND SHORT
  // -------------------------------------------------------------------------
  {
    id: "mg2",
    num: 2,
    unit: "Classic Track: Math-Magic",
    title: "Long and Short",
    subtitle: "Measuring Heights, Distances, Conversions (cm, m, km), Sports Records & Marathon Math",
    concepts: [
      "Comparing lengths visually and measuring accurately using a ruler and measuring tape.",
      "Units of length: 1 m = 100 cm; 1 km = 1,000 m.",
      "Analyzing world records and Indian records in high jump and long jump.",
      "Calculating distances in round tracks and solving marathon running problems."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Long and Short — High Jump & Long Jump Comparison</text>
      <!-- High Jump Post -->
      <line x1="120" y1="40" x2="120" y2="120" stroke="#1e40af" stroke-width="3"/>
      <line x1="200" y1="40" x2="200" y2="120" stroke="#1e40af" stroke-width="3"/>
      <line x1="115" y1="55" x2="205" y2="55" stroke="#ef4444" stroke-width="2.5"/>
      <text x="160" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Javier S. (World)</text>
      <text x="160" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#dc2626" text-anchor="middle">2 m 45 cm</text>
      <text x="160" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">High Jump</text>
      <!-- Long Jump Sandpit -->
      <rect x="300" y="75" width="220" height="40" fill="#fef08a" stroke="#ca8a04" stroke-width="2" rx="4"/>
      <line x1="300" y1="65" x2="520" y2="65" stroke="#d97706" stroke-width="2"/>
      <circle cx="300" cy="65" r="4" fill="#dc2626"/>
      <circle cx="520" cy="65" r="4" fill="#dc2626"/>
      <text x="410" y="98" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#854d0e" text-anchor="middle">Mike P. (World) = 8 m 95 cm</text>
      <text x="410" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">Long Jump Sandpit</text>
    </svg>`,
    questions: [
      {
        category: "Sports Records Comparison",
        q: "Look at the athletic records: Javier S. holds the Men's World Record for High Jump at 2 m 45 cm. Chandrapal holds the Indian Record for High Jump at 2 m 17 cm. (a) How many more centimetres must Chandrapal jump to equal Javier's world record? (b) How many centimetres short of 2 and a half metres is Javier's jump?",
        ans: `<strong>(a) Difference between World and Indian High Jump records:</strong><br>
• Javier S. (World Record) = 2 m 45 cm = 245 cm.<br>
• Chandrapal (Indian Record) = 2 m 17 cm = 217 cm.<br>
• Difference = 245 cm - 217 cm = <strong>28 cm</strong>.<br>
Chandrapal must jump <strong>28 cm higher</strong>.<br><br>
<strong>(b) Short of 2 and a half metres (2 m 50 cm):</strong><br>
• 2 and a half metres = 2 m 50 cm = 250 cm.<br>
• Javier's jump = 245 cm.<br>
• Difference = 250 cm - 245 cm = <strong>5 cm</strong>.<br>
Javier's jump is only <strong>5 cm short</strong> of 2.5 metres.`,
        marks: 3,
        rubric: [
          { key: "Correct difference of 28 cm with conversion", marks: "1.5 M" },
          { key: "Correct calculation showing 5 cm short of 2.5 m", marks: "1.5 M" }
        ]
      },
      {
        category: "Marathon & Stadium Track Math",
        q: "A stadium running track is 400 metres long for one complete lap. People run a marathon race of 40 kilometres. How many complete rounds of the stadium track must a runner make to complete the 40 km marathon?",
        ans: `<strong>Step 1: Convert marathon distance into metres:</strong><br>
• 1 kilometre = 1,000 metres.<br>
• 40 km = 40 × 1,000 = <strong>40,000 metres</strong>.<br><br>
<strong>Step 2: Calculate number of rounds:</strong><br>
• Length of 1 round of stadium = 400 metres.<br>
• Number of rounds = Total distance ÷ Track length<br>
• Number of rounds = 40,000 ÷ 400 = <strong>100 rounds</strong>.<br><br>
A runner must complete exactly <strong>100 rounds</strong> of the stadium track.`,
        marks: 3,
        rubric: [
          { key: "Unit conversion 40 km = 40,000 m", marks: "1.5 M" },
          { key: "Division 40,000 ÷ 400 = 100 rounds", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Daily Walking Distance Goal",
      text: "Doctor advises grandfather to walk 2 kilometres every day to stay fit. Grandfather walks around a square park that measures 125 metres on each side.",
      question: "How many complete rounds of the park must grandfather take to achieve his 2 km goal?",
      answer: "<strong>Step 1: Perimeter of square park:</strong><br>Perimeter = 4 × 125 m = <strong>500 metres per round</strong>.<br><strong>Step 2: Rounds for 2 km:</strong><br>2 km = 2,000 metres.<br>Rounds required = 2,000 m ÷ 500 m = <strong>4 rounds</strong>.<br>Grandfather must walk <strong>4 complete rounds</strong>.",
      rubric: "1 Mark for park perimeter 500 m; 1 Mark for 4 rounds."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 3: A TRIP TO BHOPAL
  // -------------------------------------------------------------------------
  {
    id: "mg3",
    num: 3,
    unit: "Classic Track: Math-Magic",
    title: "A Trip to Bhopal",
    subtitle: "Excursion Planning, Bus Seating, Petrol Pumps, Narmada Bridge & Bhimbetka Time Math",
    concepts: [
      "Calculating bus requirements based on total students and seat capacities (50-seater vs 35-seater mini-buses).",
      "Bridge length, river water level differences, and speed calculations over the Narmada River.",
      "Fuel costs, diesel filling rates, and time taken at petrol pumps.",
      "Prehistoric cave paintings at Bhimbetka: counting animal and human figures; boat ride ticket budgeting at Upper Lake Bhopal."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdfa" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f766e" text-anchor="middle">Trip to Bhopal — Narmada River Bridge & Water Levels</text>
      <!-- Bridge -->
      <line x1="60" y1="65" x2="520" y2="65" stroke="#0d9488" stroke-width="6"/>
      <text x="290" y="55" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#115e59" text-anchor="middle">Victoria Bridge Length = 756.82 metres</text>
      <!-- Pillars -->
      <line x1="120" y1="65" x2="120" y2="125" stroke="#134e4a" stroke-width="4"/>
      <line x1="240" y1="65" x2="240" y2="125" stroke="#134e4a" stroke-width="4"/>
      <line x1="360" y1="65" x2="360" y2="125" stroke="#134e4a" stroke-width="4"/>
      <line x1="480" y1="65" x2="480" y2="125" stroke="#134e4a" stroke-width="4"/>
      <!-- River Water -->
      <rect x="60" y="105" width="460" height="30" fill="#99f6e4" opacity="0.7"/>
      <line x1="60" y1="105" x2="520" y2="105" stroke="#14b8a6" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="290" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f766e" text-anchor="middle">Normal Season: 40 m below bridge | Rainy Season: only 15 m below</text>
    </svg>`,
    questions: [
      {
        category: "Excursion Bus Seating Calculation",
        q: "Total students going on the Bhopal trip from Class 1 to Class 5 are: Class 1: 33, Class 2: 32, Class 3: 42, Class 4: 50, Class 5: 53. (a) How many total children are going on the trip? (b) If the school hires 4 buses with 50 seats each, how many children will get seats? (c) How many children will be left without seats?",
        ans: `<strong>(a) Total Children Going on the Trip:</strong><br>
&nbsp;&nbsp; 33 (Class 1)<br>
+ 32 (Class 2)<br>
+ 42 (Class 3)<br>
+ 50 (Class 4)<br>
+ 53 (Class 5)<br>
-------<br>
  <strong>210 total children</strong>.<br><br>
<strong>(b) Seating Capacity of 4 Buses:</strong><br>
• Each bus has 50 seats.<br>
• 4 buses have 4 × 50 = <strong>200 seats</strong>.<br>
So, <strong>200 children</strong> will get seats.<br><br>
<strong>(c) Children Left Without Seats:</strong><br>
• 210 - 200 = <strong>10 children</strong> will be left without seats.<br>
(They will share seats with classmates).`,
        marks: 3,
        rubric: [
          { key: "Correct sum of 210 children", marks: "1.0 M" },
          { key: "Correct calculation of 200 seats in 4 buses", marks: "1.0 M" },
          { key: "Difference of 10 children without seats", marks: "1.0 M" }
        ]
      },
      {
        category: "Boat Ride Rates & Time Budgeting",
        q: "At the Bhopal lake, ticket prices are: Double-Decker Boat: ₹30 (45 mins), Motor Boat: ₹25 (20 mins), Paddle Boat: ₹15 (30 mins), Oar Boat: ₹15 (45 mins). (a) Indra and Bhanu first took the motor boat and then the oar boat. How much total did they pay for both? (b) Which boat makes two trips in 1 hour?",
        ans: `<strong>(a) Cost for Indra and Bhanu:</strong><br>
• <em>Motor boat:</em> Ticket = ₹25 per person. For 2 persons = 2 × ₹25 = ₹50.<br>
• <em>Oar boat:</em> Ticket = ₹15 per person. For 2 persons = 2 × ₹15 = ₹30.<br>
• Total amount paid = ₹50 + ₹30 = <strong>₹80</strong>.<br><br>
<strong>(b) Boat that makes 2 trips in 1 hour:</strong><br>
• 1 hour = 60 minutes.<br>
• Time for 1 trip must be 60 ÷ 2 = 30 minutes.<br>
• Looking at the table, the <strong>Paddle Boat</strong> has a trip duration of 30 minutes. Hence, the paddle boat makes two trips in 1 hour.`,
        marks: 3,
        rubric: [
          { key: "Correct total fare of ₹80 for 2 children", marks: "1.5 M" },
          { key: "Correct identification of Paddle Boat with 30 min duration", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Petrol Pump Refueling Time",
      text: "Two buses stop at a petrol pump to refill diesel. Each bus needs 50 litres of diesel. 1 litre of diesel costs ₹45. The pump fills diesel at a rate of 10 litres per minute.",
      question: "What is the total bill for both buses, and how long does it take to fill both buses?",
      answer: "<strong>Step 1: Total diesel required:</strong><br>2 buses × 50 litres = 100 litres.<br><strong>Step 2: Total cost:</strong><br>100 litres × ₹45/litre = <strong>₹4,500</strong>.<br><strong>Step 3: Total filling time:</strong><br>100 litres ÷ 10 litres/min = <strong>10 minutes</strong>.",
      rubric: "1 Mark for cost ₹4,500; 1 Mark for time 10 minutes."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: TICK-TICK-TICK
  // -------------------------------------------------------------------------
  {
    id: "mg4",
    num: 4,
    unit: "Classic Track: Math-Magic",
    title: "Tick-Tick-Tick",
    subtitle: "Clock Reading, Movement of Minute Hand, 12h vs 24h Formats & Expiry Date Verification",
    concepts: [
      "Understanding clock mechanics: the minute hand moves 1 small mark (6°) in 1 minute, 5 marks (30°) from one number to the next.",
      "Calculating the time taken by the minute hand to move from one digit to another.",
      "Differentiating morning (am) and afternoon/evening (pm).",
      "Reading manufacturing (MFG) and expiry dates on ghee tins, medicines, and butter packets."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Clock Face Minute Hand Movement (from 2 to 7 = 25 minutes)</text>
      <!-- Clock Face -->
      <circle cx="290" cy="90" r="50" fill="#ffffff" stroke="#ca8a04" stroke-width="3"/>
      <!-- Hour Marks -->
      <text x="290" y="55" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e" text-anchor="middle">12</text>
      <text x="330" y="94" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e" text-anchor="middle">3</text>
      <text x="290" y="132" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e" text-anchor="middle">6</text>
      <text x="250" y="94" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e" text-anchor="middle">9</text>
      <!-- Numbers 2 and 7 highlighted -->
      <text x="323" y="70" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#dc2626" text-anchor="middle">2</text>
      <text x="268" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#16a34a" text-anchor="middle">7</text>
      <!-- Arc -->
      <path d="M 325 65 A 42 42 0 0 1 270 125" fill="none" stroke="#eab308" stroke-width="4" stroke-dasharray="3,3"/>
      <text x="140" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#a16207" text-anchor="middle">Start at 2</text>
      <text x="440" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#15803d" text-anchor="middle">Ends at 7 = 5 steps × 5m = 25m</text>
    </svg>`,
    questions: [
      {
        category: "Minute Hand Movement",
        q: "How many minutes does it take the minute hand to move from: (a) 2 to 7, (b) 12 to 8, (c) 1 to 4, (d) 7 to 10?",
        ans: `Each number on the clock represents <strong>5 minutes</strong>.<br>
• <strong>(a) From 2 to 7:</strong> (7 - 2) = 5 numbers. 5 × 5 = <strong>25 minutes</strong>.<br>
• <strong>(b) From 12 to 8:</strong> 8 numbers forward. 8 × 5 = <strong>40 minutes</strong>.<br>
• <strong>(c) From 1 to 4:</strong> (4 - 1) = 3 numbers. 3 × 5 = <strong>15 minutes</strong>.<br>
• <strong>(d) From 7 to 10:</strong> (10 - 7) = 3 numbers. 3 × 5 = <strong>15 minutes</strong>.`,
        marks: 3,
        rubric: [
          { key: "Correct answers for (a) and (b)", marks: "1.5 M" },
          { key: "Correct answers for (c) and (d)", marks: "1.5 M" }
        ]
      },
      {
        category: "Product Expiry Date Check",
        q: "Amrit bought butter on 15 May 2026. It was written on the packet 'Best before 180 days from the date of packing'. The date of packing was 15/01/2026. Should Amrit eat this butter or not? Explain your calculation.",
        ans: `<strong>Step 1: Calculate days from 15 January 2026 to 15 May 2026:</strong><br>
• January: 31 - 15 = 16 days remaining.<br>
• February 2026 (non-leap year) = 28 days.<br>
• March = 31 days.<br>
• April = 30 days.<br>
• May (up to 15th) = 15 days.<br>
• Total days passed = 16 + 28 + 31 + 30 + 15 = <strong>120 days</strong>.<br><br>
<strong>Step 2: Compare with expiry limit:</strong><br>
• The packet is safe for 180 days.<br>
• Since 120 days < 180 days, the butter has NOT expired.<br>
• <strong>Conclusion:</strong> Yes, Amrit can safely eat the butter.`,
        marks: 3,
        rubric: [
          { key: "Accurate monthly day count sum = 120 days", marks: "2.0 M" },
          { key: "Valid comparison and safe consumption verdict", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Missing a Train Due to 24-Hour Time Format",
      text: "Ranjit has a train ticket with departure time printed as '05:30'. He reaches the railway station at 5:00 in the evening on the same day.",
      question: "Did Ranjit catch his train or miss it? Explain why the railway ticket printed 05:30.",
      answer: "<strong>Ranjit missed his train.</strong><br><strong>Explanation:</strong> Indian Railways uses the 24-hour clock. '05:30' represents 5:30 am in the early morning. If the train were at 5:30 in the evening, the ticket would have printed '17:30'. Since Ranjit arrived at 5:00 pm (17:00), his train had already departed 11 hours and 30 minutes earlier.",
      rubric: "1 Mark for missed train conclusion; 1 Mark for explaining 05:30 am vs 17:30 pm."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 5: THE WAY THE WORLD LOOKS
  // -------------------------------------------------------------------------
  {
    id: "mg5",
    num: 5,
    unit: "Classic Track: Math-Magic",
    title: "The Way The World Looks",
    subtitle: "Gappu's Balloon Journey, Aerial Maps, Matching Top Views & Perspective Drawing",
    concepts: [
      "Perspective changes with distance: objects look big and wide at the near end, but small and narrow at the distant end.",
      "Gappu's view from a gas balloon: seeing the top of the bed, fan blades, chairs, and park benches.",
      "Matching top view (bird's-eye view) with ground view for bowls, shoes, cars, and railway lines.",
      "Navigating classroom floor maps and finding doors, windows, and blackboards."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">Gappu's Balloon View: Matching Bowl Positions</text>
      <!-- Right Side Up Bowl (Side) -->
      <path d="M70 70 Q110 120 150 70 Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
      <text x="110" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Side View (Upright)</text>
      <!-- Upside Down Bowl (Side) -->
      <path d="M220 115 Q260 65 300 115 Z" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
      <text x="260" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Side View (Upside Down)</text>
      <!-- Top View Upright -->
      <circle cx="410" cy="85" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <circle cx="410" cy="85" r="14" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
      <text x="410" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Top View (Inner rim visible)</text>
      <!-- Top View Inverted -->
      <circle cx="510" cy="85" r="28" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <circle cx="510" cy="85" r="12" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <text x="510" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Top View (Base visible)</text>
    </svg>`,
    questions: [
      {
        category: "Perspective Illusion Explanation",
        q: "Why do the two sides of a railway track or road look wide and far apart near your feet, but appear to meet at a single point in the far distance?",
        ans: `<strong>Scientific & Geometric Reason:</strong><br>
This phenomenon is called <strong>Perspective Convergence</strong>.<br>
• Objects or distances that are close to our eyes subtend a larger visual angle, so they appear wider and larger.<br>
• As objects move farther away, their visual angle shrinks, so they appear smaller and narrower.<br>
• Although the two rails of a train track are strictly parallel and always equal distance apart on the ground, our eye's perspective causes them to appear to converge toward a 'vanishing point' on the horizon.`,
        marks: 3,
        rubric: [
          { key: "Mentions perspective / visual angle effect", marks: "1.5 M" },
          { key: "Explains parallel lines appearing to converge at horizon", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Classroom Blackboard Location Map",
      text: "In a classroom top-view plan, the teacher's table is at (3, 5), the entrance door is at (1, 1), and student benches are arranged in 4 columns from X = 2 to 5.",
      question: "If a student enters through the door and walks straight North along the left aisle, which direction should she turn to face the teacher's table?",
      answer: "She should walk North up to Y = 5, and then turn <strong>Right (East)</strong> to face the teacher's table at (3, 5).",
      rubric: "1 Mark for North direction; 1 Mark for Right / East turn."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: THE JUNK SELLER
  // -------------------------------------------------------------------------
  {
    id: "mg6",
    num: 6,
    unit: "Classic Track: Math-Magic",
    title: "The Junk Seller",
    subtitle: "Kiran's Junk Shop, Rate Lists, Loan Interest, Calculating Earnings & Column Multiplication",
    concepts: [
      "Real-life entrepreneurship: Kiran's story of establishing a junk shop in Patna.",
      "Understanding bank loans vs. moneylenders: calculating simple interest and monthly installments.",
      "Rate lists for scrap materials: waste paper, newspaper, iron, brass, plastic.",
      "Multiplication of currency and mental math strategies (e.g., 9 × 12 = 9 × 10 + 9 × 2)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Kiran's Junk Rate List & Daily Scrap Value</text>
      <!-- Rate Table -->
      <rect x="90" y="45" width="400" height="25" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="180" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#713f12" text-anchor="middle">Item</text>
      <text x="360" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#713f12" text-anchor="middle">Cost of 1 kg</text>
      <!-- Rows -->
      <rect x="90" y="70" width="400" height="20" fill="#ffffff" stroke="#eab308" stroke-width="1"/>
      <text x="180" y="85" font-family="system-ui, sans-serif" font-size="10" fill="#1e293b" text-anchor="middle">1. Waste Paper</text>
      <text x="360" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#854d0e" text-anchor="middle">₹4</text>
      <rect x="90" y="90" width="400" height="20" fill="#fefce8" stroke="#eab308" stroke-width="1"/>
      <text x="180" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#1e293b" text-anchor="middle">2. Newspaper</text>
      <text x="360" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#854d0e" text-anchor="middle">₹5</text>
      <rect x="90" y="110" width="400" height="20" fill="#ffffff" stroke="#eab308" stroke-width="1"/>
      <text x="180" y="125" font-family="system-ui, sans-serif" font-size="10" fill="#1e293b" text-anchor="middle">3. Iron</text>
      <text x="360" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#854d0e" text-anchor="middle">₹12</text>
      <rect x="90" y="130" width="400" height="20" fill="#fefce8" stroke="#eab308" stroke-width="1"/>
      <text x="180" y="145" font-family="system-ui, sans-serif" font-size="10" fill="#1e293b" text-anchor="middle">4. Brass</text>
      <text x="360" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#854d0e" text-anchor="middle">₹180</text>
    </svg>`,
    questions: [
      {
        category: "Loan Comparison: Bank vs. Moneylender",
        q: "Hari and Babu each wanted to buy a handcart worth ₹300. (a) Hari took a loan of ₹300 from a bank. He pays back ₹51 every month for 6 months. How much does he pay back in total? (b) Babu took a loan of ₹300 from Chuni Lal (moneylender). After 6 months, he pays back ₹360. Who has to pay back more money, and by how much?",
        ans: `<strong>(a) Hari's Bank Loan Repayment:</strong><br>
• Monthly installment = ₹51.<br>
• Duration = 6 months.<br>
• Total paid = 6 × ₹51 = <strong>₹306</strong>.<br>
(Extra interest paid to bank = ₹306 - ₹300 = ₹6).<br><br>
<strong>(b) Babu's Moneylender Loan Repayment:</strong><br>
• Total paid to Chuni Lal = <strong>₹360</strong>.<br>
(Extra interest paid to moneylender = ₹360 - ₹300 = ₹60).<br><br>
<strong>Comparison:</strong><br>
• <strong>Babu pays back more money.</strong><br>
• Difference = ₹360 - ₹306 = <strong>₹54 more</strong>.<br>
This demonstrates why institutional bank loans are far fairer than unregulated moneylenders.`,
        marks: 4,
        rubric: [
          { key: "Hari's total repayment ₹306", marks: "1.5 M" },
          { key: "Babu's total repayment ₹360", marks: "1.0 M" },
          { key: "Comparison showing Babu pays ₹54 more", marks: "1.5 M" }
        ]
      },
      {
        category: "Scrap Rate Calculation",
        q: "Using Kiran's rate list (Newspaper: ₹5/kg, Iron: ₹12/kg, Brass: ₹180/kg, Plastic: ₹10/kg), calculate the total amount Kiran pays for: (a) 42 kg of newspaper, (b) 25 kg of iron, (c) 3 kg of brass.",
        ans: `<strong>(a) 42 kg of Newspaper at ₹5/kg:</strong><br>
• 42 × 5 = 42 × (10 ÷ 2) = 420 ÷ 2 = <strong>₹210</strong>.<br><br>
<strong>(b) 25 kg of Iron at ₹12/kg:</strong><br>
• 25 × 12 = 25 × (10 + 2) = 250 + 50 = <strong>₹300</strong>.<br><br>
<strong>(c) 3 kg of Brass at ₹180/kg:</strong><br>
• 3 × 180 = <strong>₹540</strong>.<br><br>
<strong>Total amount Kiran pays:</strong><br>
Total = ₹210 + ₹300 + ₹540 = <strong>₹1,050</strong>.`,
        marks: 3,
        rubric: [
          { key: "Correct calculation for all three items", marks: "2.0 M" },
          { key: "Total bill sum ₹1,050", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Kiran's Reselling Profit Margin",
      text: "Kiran buys 152 kg of plastic from scrap collectors at ₹10 per kg. She transports it to a big recycling factory and sells it at ₹12 per kg.",
      question: "How much money does Kiran earn as profit on this plastic sale?",
      answer: "<strong>Step 1: Profit per kg:</strong><br>Selling Price - Cost Price = ₹12 - ₹10 = <strong>₹2 per kg</strong>.<br><strong>Step 2: Total profit on 152 kg:</strong><br>152 kg × ₹2/kg = <strong>₹304 profit</strong>.",
      rubric: "1 Mark for ₹2/kg margin; 1 Mark for ₹304 total profit."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 7: JUGS AND MUGS
  // -------------------------------------------------------------------------
  {
    id: "mg7",
    num: 7,
    unit: "Classic Track: Math-Magic",
    title: "Jugs and Mugs",
    subtitle: "Bunny and Banno's Wedding Feast, Capacity in Litres & Millilitres & Medical Doses",
    concepts: [
      "Bunny and Banno celebrate their wedding anniversary: animals drink kheer in millilitres and litres.",
      "Capacity conversion: 1 Litre (l) = 1,000 Millilitres (ml).",
      "Combinations that make 1 Litre: 500 ml + 500 ml; 250 ml × 4; 200 ml × 5; 100 ml × 10.",
      "Estimating liquid usage: water used in bathing, cooking, washing clothes, and eye-drop droppers."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Combinations Making Exactly 1 Litre (1,000 ml)</text>
      <!-- Center Circle 1L -->
      <circle cx="290" cy="90" r="32" fill="#2563eb" stroke="#1e40af" stroke-width="2"/>
      <text x="290" y="88" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">1 LITRE</text>
      <text x="290" y="102" font-family="system-ui, sans-serif" font-size="9" fill="#bfdbfe" text-anchor="middle">1000 ml</text>
      <!-- Branch 1: 500 + 500 -->
      <rect x="40" y="70" width="120" height="40" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5" rx="6"/>
      <text x="100" y="94" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">500 ml + 500 ml</text>
      <line x1="160" y1="90" x2="258" y2="90" stroke="#3b82f6" stroke-width="2"/>
      <!-- Branch 2: 250 x 4 -->
      <rect x="420" y="70" width="120" height="40" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5" rx="6"/>
      <text x="480" y="94" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">250 ml × 4 glasses</text>
      <line x1="322" y1="90" x2="420" y2="90" stroke="#3b82f6" stroke-width="2"/>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Also: 200 ml × 5 = 1000 ml | 100 ml × 10 = 1000 ml</text>
    </svg>`,
    questions: [
      {
        category: "Bunny and Banno's Wedding Feast Arithmetic",
        q: "At the wedding party: (a) 1,000 ants arrive. Each ant drinks only 1 ml of kheer. How much kheer do all 1,000 ants drink together? (b) A donkey wonders how 1,000 ants can drink kheer. 10 frogs also arrive, and each frog drinks 100 ml. How much kheer do 10 frogs drink?",
        ans: `<strong>(a) Kheer for 1,000 ants:</strong><br>
• Each ant drinks 1 ml.<br>
• Total kheer = 1,000 × 1 ml = <strong>1,000 ml = 1 Litre</strong>.<br><br>
<strong>(b) Kheer for 10 frogs:</strong><br>
• Each frog drinks 100 ml.<br>
• Total kheer = 10 × 100 ml = <strong>1,000 ml = 1 Litre</strong>.<br><br>
<em>Interesting observation:</em> Both the 1,000 tiny ants and the 10 frogs drink the exact same total amount of kheer (1 Litre each!).`,
        marks: 3,
        rubric: [
          { key: "Correct calculation for ants (1,000 ml = 1 l)", marks: "1.5 M" },
          { key: "Correct calculation for frogs (1,000 ml = 1 l)", marks: "1.5 M" }
        ]
      },
      {
        category: "Household Water Usage & Conservation",
        q: "Look at the table of water used by a family of 4 people in one day: Cooking and drinking: 30 l, Washing clothes: 40 l, Cleaning pots and pans: 20 l, Bathing: 75 l. (a) What is the total water used by the family in one day? (b) How much water will they use in 1 week (7 days)?",
        ans: `<strong>(a) Total water used in 1 day:</strong><br>
&nbsp;&nbsp; 30 l (cooking/drinking)<br>
+ 40 l (washing clothes)<br>
+ 20 l (cleaning pans)<br>
+ 75 l (bathing)<br>
-------<br>
  <strong>165 Litres per day</strong>.<br><br>
<strong>(b) Water used in 1 week (7 days):</strong><br>
• 165 l × 7 days = <strong>1,155 Litres</strong>.<br>
(Working: 100 × 7 = 700; 60 × 7 = 420; 5 × 7 = 35; 700 + 420 + 35 = 1,155 l).`,
        marks: 3,
        rubric: [
          { key: "Correct sum of 165 Litres for 1 day", marks: "1.5 M" },
          { key: "Accurate multiplication 165 × 7 = 1,155 Litres", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Hospital Intravenous (IV) Saline Bottle Rate",
      text: "A hospital saline bottle holds 500 ml of fluid. A nurse sets the drip so that the patient receives 2 ml of saline every minute.",
      question: "How many minutes will it take for the entire 500 ml bottle to finish? Express your answer in hours and minutes.",
      answer: "<strong>Step 1: Calculate total minutes:</strong><br>500 ml ÷ 2 ml/min = <strong>250 minutes</strong>.<br><strong>Step 2: Convert into hours and minutes:</strong><br>250 ÷ 60 = 4 with a remainder of 10.<br>So, 250 minutes = <strong>4 hours and 10 minutes</strong>.",
      rubric: "1 Mark for 250 minutes; 1 Mark for 4 hours 10 minutes."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 8: CARTS AND WHEELS
  // -------------------------------------------------------------------------
  {
    id: "mg8",
    num: 8,
    unit: "Classic Track: Math-Magic",
    title: "Carts and Wheels",
    subtitle: "Circles, Centre, Radius, Diameter, Compass Drawing & Spinning Tops (Charkhi)",
    concepts: [
      "Identifying round circular objects: bullock cart wheels, bicycle wheels, bangles, coins, chapati.",
      "Key circle vocabulary: Centre, Radius (r), Diameter (d), and Circumference.",
      "Relationship between radius and diameter: Diameter = 2 × Radius; Radius = Diameter ÷ 2.",
      "Technique for drawing a circle using a nail and string, or a geometric compass.",
      "Making spinning tops (charkhi) and balancing the stick at the exact centre."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fafaf9" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#292524" text-anchor="middle">Circle Anatomy: Centre, Radius & Diameter</text>
      <!-- Circle -->
      <circle cx="290" cy="92" r="50" fill="#f5f5f4" stroke="#44403c" stroke-width="2.5"/>
      <!-- Centre Point -->
      <circle cx="290" cy="92" r="4" fill="#dc2626"/>
      <text x="290" y="84" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">Centre (O)</text>
      <!-- Diameter line -->
      <line x1="240" y1="92" x2="340" y2="92" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="240" cy="92" r="3" fill="#2563eb"/>
      <circle cx="340" cy="92" r="3" fill="#2563eb"/>
      <!-- Radius Arrow -->
      <line x1="290" y1="92" x2="325" y2="57" stroke="#16a34a" stroke-width="2"/>
      <circle cx="325" cy="57" r="3" fill="#16a34a"/>
      <text x="325" y="48" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#16a34a" text-anchor="middle">Radius (r)</text>
      <text x="140" y="96" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#2563eb" text-anchor="middle">Diameter = 2 × r</text>
      <text x="440" y="96" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#44403c" text-anchor="middle">Circumference (Boundary)</text>
    </svg>`,
    questions: [
      {
        category: "Radius and Diameter Relationships",
        q: "Fill in the blanks: (a) If the radius of a circle is 4 cm, its diameter is __ cm. (b) If the diameter of a wheel is 18 cm, its radius is __ cm. (c) Which circle is larger: Circle A with radius 6 cm or Circle B with diameter 10 cm?",
        ans: `<strong>(a)</strong> Formula: <em>Diameter = 2 × Radius</em><br>
• Diameter = 2 × 4 cm = <strong>8 cm</strong>.<br><br>
<strong>(b)</strong> Formula: <em>Radius = Diameter ÷ 2</em><br>
• Radius = 18 cm ÷ 2 = <strong>9 cm</strong>.<br><br>
<strong>(c) Comparison between Circle A and Circle B:</strong><br>
• Circle A radius = 6 cm (so Diameter = 2 × 6 = 12 cm).<br>
• Circle B diameter = 10 cm (so Radius = 10 ÷ 2 = 5 cm).<br>
• Since 6 cm > 5 cm, <strong>Circle A is larger</strong>.`,
        marks: 3,
        rubric: [
          { key: "Correct answers for (a) and (b)", marks: "1.5 M" },
          { key: "Accurate comparison showing Circle A is larger", marks: "1.5 M" }
        ]
      },
      {
        category: "Spinning Top Physics & Circle Centre",
        q: "Zakir, Appu, Naina, and Guddo made cardboard spinning tops. Zakir put his stick near the edge, Appu put it halfway between center and edge, Naina put it slightly off-center, while Guddo put her stick at the exact geometric centre. (a) Whose top will not spin at all? (b) Whose top will spin the best? Explain why.",
        ans: `<strong>(a) Top that will not spin at all:</strong><br>
<strong>Zakir's top</strong> will not spin at all (or will wobble and instantly fall over) because placing the stick at the outer edge creates an extreme weight imbalance.<br><br>
<strong>(b) Top that will spin the best:</strong><br>
<strong>Guddo's top</strong> will spin the best.<br>
• <strong>Reason:</strong> When the pivot stick is placed at the exact <strong>center of the circle</strong>, the radius is equal in all directions. This distributes mass uniformly and balances the gravitational forces evenly around the axis of rotation, allowing the top to spin smoothly and stably for a long time.`,
        marks: 3,
        rubric: [
          { key: "Identifies Zakir's top as failing", marks: "1.0 M" },
          { key: "Identifies Guddo's top as best with center balance explanation", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Playground Circle Marker with String",
      text: "The sports teacher needs to draw a circular kabaddi ring on the ground with a diameter of 8 metres. She has a wooden peg and a coil of rope.",
      question: "How long should she cut the rope to tie between the central peg and the chalk stick?",
      answer: "<strong>Answer: 4 metres.</strong><br><strong>Explanation:</strong> The length of the rope between the central fixed peg (centre) and the rotating chalk stick represents the <strong>radius</strong> of the circle.<br>Radius = Diameter ÷ 2 = 8 m ÷ 2 = <strong>4 metres</strong>.",
      rubric: "1 Mark for identifying rope as radius; 1 Mark for calculating 4 metres."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 9: HALVES AND QUARTERS
  // -------------------------------------------------------------------------
  {
    id: "mg9",
    num: 9,
    unit: "Classic Track: Math-Magic",
    title: "Halves and Quarters",
    subtitle: "Fractions: 1/2, 1/4, 3/4, Fraction Walls, Splitting Objects & Metric Fractions",
    concepts: [
      "Concept of a fraction: equal parts of a whole.",
      "Half (1/2), One-quarter (1/4), and Three-quarters (3/4).",
      "Two quarters make one half: 1/4 + 1/4 = 2/4 = 1/2.",
      "Four quarters make one whole: 4/4 = 1.",
      "Fractions of collections (e.g., half of 20 apples = 10; quarter of ₹100 = ₹25)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Fraction Strip Wall: Whole, Halves and Quarters</text>
      <!-- Whole -->
      <rect x="90" y="45" width="400" height="25" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
      <text x="290" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#78350f" text-anchor="middle">1 Whole (1)</text>
      <!-- Halves -->
      <rect x="90" y="75" width="200" height="25" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <text x="190" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9a3412" text-anchor="middle">1/2 (Half)</text>
      <rect x="290" y="75" width="200" height="25" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
      <text x="390" y="92" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9a3412" text-anchor="middle">1/2 (Half)</text>
      <!-- Quarters -->
      <rect x="90" y="105" width="100" height="25" fill="#fed7d7" stroke="#e11d48" stroke-width="1.5"/>
      <text x="140" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#881337" text-anchor="middle">1/4</text>
      <rect x="190" y="105" width="100" height="25" fill="#fed7d7" stroke="#e11d48" stroke-width="1.5"/>
      <text x="240" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#881337" text-anchor="middle">1/4</text>
      <rect x="290" y="105" width="100" height="25" fill="#fed7d7" stroke="#e11d48" stroke-width="1.5"/>
      <text x="340" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#881337" text-anchor="middle">1/4</text>
      <rect x="390" y="105" width="100" height="25" fill="#fed7d7" stroke="#e11d48" stroke-width="1.5"/>
      <text x="440" y="122" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#881337" text-anchor="middle">1/4</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">1/4 + 1/4 = 2/4 = 1/2 | 1/4 + 1/4 + 1/4 = 3/4 (Three-Quarters)</text>
    </svg>`,
    questions: [
      {
        category: "Fraction of Amounts & Metric Conversions",
        q: "Calculate: (a) 1/2 of ₹100, (b) 1/4 of a metre (in cm), (c) 3/4 of a kilogram (in grams), (d) 1/2 of a litre (in ml).",
        ans: `<strong>(a) 1/2 of ₹100:</strong><br>
• ₹100 ÷ 2 = <strong>₹50</strong>.<br><br>
<strong>(b) 1/4 of a metre:</strong><br>
• 1 m = 100 cm.<br>
• 100 cm ÷ 4 = <strong>25 cm</strong>.<br><br>
<strong>(c) 3/4 of a kilogram:</strong><br>
• 1 kg = 1,000 g.<br>
• 1/4 of 1,000 g = 250 g.<br>
• 3/4 = 3 × 250 g = <strong>750 grams</strong>.<br><br>
<strong>(d) 1/2 of a litre:</strong><br>
• 1 l = 1,000 ml.<br>
• 1,000 ml ÷ 2 = <strong>500 ml</strong>.`,
        marks: 4,
        rubric: [
          { key: "Correct values for (a) and (b)", marks: "2.0 M" },
          { key: "Correct values for (c) and (d)", marks: "2.0 M" }
        ]
      },
      {
        category: "Word Problem on Splitting Food",
        q: "Rani had a chocolate bar with 12 equal pieces. She gave 1/4 of it to Reena, 1/3 of it to Sugatha, and ate the rest herself. How many pieces did each girl get?",
        ans: `Total pieces in chocolate bar = 12.<br><br>
• <strong>Reena's share:</strong> 1/4 of 12 = 12 ÷ 4 = <strong>3 pieces</strong>.<br>
• <strong>Sugatha's share:</strong> 1/3 of 12 = 12 ÷ 3 = <strong>4 pieces</strong>.<br>
• <strong>Pieces given away:</strong> 3 + 4 = 7 pieces.<br>
• <strong>Rani's share:</strong> 12 - 7 = <strong>5 pieces</strong>.<br><br>
<em>Check:</em> 3 + 4 + 5 = 12 pieces. Correct!`,
        marks: 3,
        rubric: [
          { key: "Reena = 3 pieces; Sugatha = 4 pieces", marks: "2.0 M" },
          { key: "Rani = 5 pieces with verification", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Vegetable Price List Fraction Math",
      text: "At the sabzi mandi: Tomato costs ₹16 per kg, Potato costs ₹20 per kg, and Onion costs ₹24 per kg. Mrs. Sharma buys 1/2 kg tomatoes, 3/4 kg potatoes, and 1/4 kg onions.",
      question: "How much total money does Mrs. Sharma spend?",
      answer: "<strong>Cost breakdown:</strong><br>• Tomatoes: 1/2 × ₹16 = <strong>₹8</strong>.<br>• Potatoes: 3/4 × ₹20 = 3 × ₹5 = <strong>₹15</strong>.<br>• Onions: 1/4 × ₹24 = <strong>₹6</strong>.<br>• Total spent = ₹8 + ₹15 + ₹6 = <strong>₹29</strong>.",
      rubric: "1.5 Marks for itemized fractions; 1.5 Marks for total ₹29."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: PLAY WITH PATTERNS
  // -------------------------------------------------------------------------
  {
    id: "mg10",
    num: 10,
    unit: "Classic Track: Math-Magic",
    title: "Play with Patterns",
    subtitle: "Tiling Patterns, Number Towers, Magic Squares & Secret Message Decryption",
    concepts: [
      "Tiling patterns (tessellations) on floors and historical monuments.",
      "Number towers: each box is the sum of the two boxes directly below it.",
      "Magic Squares (3×3 grid): where every row, column, and diagonal adds up to the exact same magic sum (e.g., 15 or 45).",
      "Secret message decoding using alphabet-number substitutions."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf4ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#701a75" text-anchor="middle">Number Tower & 3×3 Magic Square</text>
      <!-- Number Tower -->
      <g transform="translate(60, 45)">
        <rect x="50" y="0" width="40" height="22" fill="#f5d0fe" stroke="#a21caf" stroke-width="1.5" rx="3"/>
        <text x="70" y="15" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#701a75" text-anchor="middle">50</text>
        <rect x="25" y="24" width="40" height="22" fill="#fae8ff" stroke="#c026d3" stroke-width="1.5" rx="3"/>
        <text x="45" y="39" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#701a75" text-anchor="middle">25</text>
        <rect x="75" y="24" width="40" height="22" fill="#fae8ff" stroke="#c026d3" stroke-width="1.5" rx="3"/>
        <text x="95" y="39" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#701a75" text-anchor="middle">25</text>
        <rect x="0" y="48" width="40" height="22" fill="#ffffff" stroke="#c026d3" stroke-width="1.5" rx="3"/>
        <text x="20" y="63" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#701a75" text-anchor="middle">10</text>
        <rect x="50" y="48" width="40" height="22" fill="#ffffff" stroke="#c026d3" stroke-width="1.5" rx="3"/>
        <text x="70" y="63" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#701a75" text-anchor="middle">15</text>
        <rect x="100" y="48" width="40" height="22" fill="#ffffff" stroke="#c026d3" stroke-width="1.5" rx="3"/>
        <text x="120" y="63" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#701a75" text-anchor="middle">10</text>
        <text x="70" y="88" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#86198f" text-anchor="middle">Number Tower</text>
      </g>
      <!-- 3x3 Magic Square (Sum 15) -->
      <g transform="translate(340, 45)">
        <rect width="90" height="90" fill="#ffffff" stroke="#a21caf" stroke-width="2"/>
        <line x1="30" y1="0" x2="30" y2="90" stroke="#a21caf" stroke-width="1.5"/>
        <line x1="60" y1="0" x2="60" y2="90" stroke="#a21caf" stroke-width="1.5"/>
        <line x1="0" y1="30" x2="90" y2="30" stroke="#a21caf" stroke-width="1.5"/>
        <line x1="0" y1="60" x2="90" y2="60" stroke="#a21caf" stroke-width="1.5"/>
        <text x="15" y="20" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">8</text>
        <text x="45" y="20" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">1</text>
        <text x="75" y="20" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">6</text>
        <text x="15" y="50" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">3</text>
        <text x="45" y="50" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">5</text>
        <text x="75" y="50" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">7</text>
        <text x="15" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">4</text>
        <text x="45" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">9</text>
        <text x="75" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#701a75" text-anchor="middle">2</text>
        <text x="45" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#86198f" text-anchor="middle">Magic Sum = 15</text>
      </g>
    </svg>`,
    questions: [
      {
        category: "Number Tower Solving Rule",
        q: "In a number tower, the bottom row has the numbers 20, 30, and 50. Fill in the missing numbers for the middle row and the top box. State the rule used.",
        ans: `<strong>Rule of the Number Tower:</strong><br>
The number in each higher box is the sum of the two boxes directly below it.<br><br>
• <strong>Middle row left box:</strong> 20 + 30 = <strong>50</strong>.<br>
• <strong>Middle row right box:</strong> 30 + 50 = <strong>80</strong>.<br>
• <strong>Top box:</strong> Sum of middle row = 50 + 80 = <strong>130</strong>.<br><br>
<strong>Completed Tower:</strong><br>
&nbsp;&nbsp;&nbsp;&nbsp;[ 130 ]<br>
&nbsp;&nbsp;[ 50 ] [ 80 ]<br>
[ 20 ] [ 30 ] [ 50 ]`,
        marks: 3,
        rubric: [
          { key: "States addition rule of number tower", marks: "1.0 M" },
          { key: "Correct values: middle row 50, 80; top box 130", marks: "2.0 M" }
        ]
      },
      {
        category: "Magic Square Construction",
        q: "Complete a 3×3 magic square using numbers from 1 to 9 so that every row, column, and diagonal adds up to 15.",
        ans: `The standard 3×3 magic square with sum 15 is:<br>
<table style="border-collapse:collapse;margin:10px auto;font-weight:bold;text-align:center;">
  <tr><td style="border:2px solid #a21caf;padding:8px 16px;">8</td><td style="border:2px solid #a21caf;padding:8px 16px;">1</td><td style="border:2px solid #a21caf;padding:8px 16px;">6</td></tr>
  <tr><td style="border:2px solid #a21caf;padding:8px 16px;">3</td><td style="border:2px solid #a21caf;padding:8px 16px;">5</td><td style="border:2px solid #a21caf;padding:8px 16px;">7</td></tr>
  <tr><td style="border:2px solid #a21caf;padding:8px 16px;">4</td><td style="border:2px solid #a21caf;padding:8px 16px;">9</td><td style="border:2px solid #a21caf;padding:8px 16px;">2</td></tr>
</table>
• <strong>Rows:</strong> 8+1+6 = 15; 3+5+7 = 15; 4+9+2 = 15.<br>
• <strong>Columns:</strong> 8+3+4 = 15; 1+5+9 = 15; 6+7+2 = 15.<br>
• <strong>Diagonals:</strong> 8+5+2 = 15; 6+5+4 = 15. All equal 15!`,
        marks: 3,
        rubric: [
          { key: "Correct 3x3 grid layout with numbers 1 to 9", marks: "2.0 M" },
          { key: "Verification of rows, columns, and diagonals = 15", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Coded Message for Class Picnic",
      text: "Teenu writes a secret note using numbers for letters: A=1, B=2, C=3, ... Z=26. Her note reads: '13-5-5-20 &nbsp; 13-5 &nbsp; 1-20 &nbsp; 14-15-15-14'.",
      question: "Decrypt Teenu's secret note.",
      answer: "<strong>Decoded Note: 'MEET ME AT NOON'.</strong><br>• 13=M, 5=E, 5=E, 20=T (MEET)<br>• 13=M, 5=E (ME)<br>• 1=A, 20=T (AT)<br>• 14=N, 15=O, 15=O, 14=N (NOON)",
      rubric: "1 Mark for letter substitution method; 1 Mark for 'MEET ME AT NOON'."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 11: TABLES AND SHARES
  // -------------------------------------------------------------------------
  {
    id: "mg11",
    num: 11,
    unit: "Classic Track: Math-Magic",
    title: "Tables and Shares",
    subtitle: "Counting Legs of Animals, Division as Equal Shelving & Group Distribution",
    concepts: [
      "Multiplying by grouping: counting legs of cats (4 legs each), spiders (8 legs each), and frogs.",
      "Arranging pots, almirah shelves, and plants in arrays (rows × columns).",
      "Division strategies: jumping backwards on a number line and repeated subtraction.",
      "Distributing items among people with equal shares and determining leftovers."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">Tables and Shares — Leg Counting & Array Shelving</text>
      <!-- Cats in Box -->
      <rect x="60" y="50" width="180" height="70" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="8"/>
      <text x="150" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#14532d" text-anchor="middle">28 Legs Peeping Out</text>
      <text x="150" y="95" font-size="18" text-anchor="middle">🐾🐾🐾🐾🐾🐾🐾</text>
      <text x="150" y="112" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d" text-anchor="middle">28 ÷ 4 = 7 Cats</text>
      <!-- Almirah Shelves -->
      <g transform="translate(300, 50)">
        <rect width="220" height="70" fill="#ffffff" stroke="#15803d" stroke-width="2"/>
        <line x1="0" y1="35" x2="220" y2="35" stroke="#15803d" stroke-width="2"/>
        <text x="110" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">Shelf 1: 15 Books</text>
        <text x="110" y="58" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">Shelf 2: 15 Books</text>
      </g>
      <text x="410" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">30 Books on 2 Shelves = 15 each</text>
    </svg>`,
    questions: [
      {
        category: "Leg Counting & Grouping",
        q: "(a) Gayatri saw 28 cat legs peeping out from under a wooden cupboard. How many cats were there inside? (b) Some ducks and cows are standing in a field. Together they have 20 legs. If there are 3 cows, how many ducks are there?",
        ans: `<strong>(a) Cats under the cupboard:</strong><br>
• 1 cat has 4 legs.<br>
• Number of cats = Total legs ÷ 4<br>
• Number of cats = 28 ÷ 4 = <strong>7 cats</strong>.<br><br>
<strong>(b) Ducks and Cows leg puzzle:</strong><br>
• 1 cow has 4 legs. 3 cows have 3 × 4 = <strong>12 legs</strong>.<br>
• Remaining legs = Total legs - Cow legs = 20 - 12 = <strong>8 legs</strong>.<br>
• 1 duck has 2 legs.<br>
• Number of ducks = 8 ÷ 2 = <strong>4 ducks</strong>.<br>
<em>Check:</em> (3 cows × 4 legs) + (4 ducks × 2 legs) = 12 + 8 = 20 legs. Correct!`,
        marks: 3,
        rubric: [
          { key: "Correct calculation for cats (7 cats)", marks: "1.5 M" },
          { key: "Correct two-step deduction for ducks (4 ducks)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Flower Garland Distribution",
      text: "A gardener has 84 marigold flowers. She needs 8 flowers to weave 1 garland.",
      question: "How many complete garlands can she make, and how many flowers will be left over?",
      answer: "84 ÷ 8 = <strong>10 garlands</strong> with <strong>4 flowers left over</strong>.<br>Working: 10 × 8 = 80 flowers used; 84 - 80 = 4 remaining.",
      rubric: "1 Mark for 10 garlands; 1 Mark for 4 leftover flowers."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 12: HOW HEAVY? HOW LIGHT?
  // -------------------------------------------------------------------------
  {
    id: "mg12",
    num: 12,
    unit: "Classic Track: Math-Magic",
    title: "How Heavy? How Light?",
    subtitle: "Pan Balance Weighing, Grams & Kilograms, Postal Tariffs & Weight Estimation",
    concepts: [
      "Comparing weights using a beam balance scale.",
      "1 Kilogram (kg) = 1,000 Grams (g); 1/2 kg = 500 g; 1/4 kg = 250 g.",
      "Indian Post Office parcel and letter tariff rates based on weight increments.",
      "Estimating weights of heavy objects (elephant, tractor, sack of wheat) vs light objects (pencil, feather)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff1f2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9f1239" text-anchor="middle">Post Office Parcel Weighing Tariff</text>
      <!-- Table -->
      <rect x="80" y="45" width="420" height="25" fill="#fecdd3" stroke="#e11d48" stroke-width="1.5"/>
      <text x="200" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#881337" text-anchor="middle">Postal Item Weight</text>
      <text x="380" y="62" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#881337" text-anchor="middle">Postal Rates</text>
      <rect x="80" y="70" width="420" height="22" fill="#ffffff" stroke="#fda4af" stroke-width="1"/>
      <text x="200" y="86" font-family="system-ui, sans-serif" font-size="10" fill="#1e293b" text-anchor="middle">Parcel weighing 50 g or less</text>
      <text x="380" y="86" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9f1239" text-anchor="middle">₹5.00</text>
      <rect x="80" y="92" width="420" height="22" fill="#fff1f2" stroke="#fda4af" stroke-width="1"/>
      <text x="200" y="108" font-family="system-ui, sans-serif" font-size="10" fill="#1e293b" text-anchor="middle">For every additional 50 g</text>
      <text x="380" y="108" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#9f1239" text-anchor="middle">₹3.00</text>
      <text x="290" y="142" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#be123c" text-anchor="middle">Parcel of 150 g: ₹5 (first 50g) + ₹3 (next 50g) + ₹3 (last 50g) = ₹11</text>
    </svg>`,
    questions: [
      {
        category: "Postal Tariff Calculation",
        q: "Look at the postal rates: A parcel weighing 50 grams or less costs ₹5. For every additional 50 grams or part thereof, it costs ₹3. Radha wants to send a book parcel weighing 225 grams to her friend. How much postal stamp value must she affix on the parcel?",
        ans: `<strong>Step 1: Break down the weight of 225 grams into 50 g slabs:</strong><br>
• First 50 grams = 50 g (remaining = 225 - 50 = 175 g).<br>
• Next 50 grams = 50 g (remaining = 125 g).<br>
• Next 50 grams = 50 g (remaining = 75 g).<br>
• Next 50 grams = 50 g (remaining = 25 g).<br>
• Final 25 grams counts as an additional 50 g slab.<br>
Total slabs = 1 basic slab + 4 additional slabs.<br><br>
<strong>Step 2: Calculate cost:</strong><br>
• First 50 g = ₹5.<br>
• 4 additional slabs of 50 g = 4 × ₹3 = ₹12.<br>
• Total postal stamp value = ₹5 + ₹12 = <strong>₹17</strong>.`,
        marks: 3,
        rubric: [
          { key: "Correct breakdown of 225 g into 5 slabs", marks: "1.5 M" },
          { key: "Accurate calculation giving ₹17 stamp cost", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Balancing Scales with Broken Stone Weights",
      text: "A vendor had a single 4 kg stone weight. It broke into two pieces of 1 kg and 3 kg.",
      question: "How can the vendor weigh out exactly 2 kg of firewood using these two pieces on a two-pan balance?",
      answer: "<strong>Procedure:</strong><br>• Place the <strong>3 kg piece on the left pan</strong>.<br>• Place the <strong>1 kg piece on the right pan</strong>.<br>• Add firewood to the right pan until both pans balance in equilibrium.<br>• Since Left Pan (3 kg) = Right Pan (1 kg + Firewood), the weight of firewood is 3 kg - 1 kg = <strong>2 kg</strong>.",
      rubric: "1.5 Marks for correct pan placement; 1.5 Marks for mathematical balance proof."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 13: FIELDS AND FENCES
  // -------------------------------------------------------------------------
  {
    id: "mg13",
    num: 13,
    unit: "Classic Track: Math-Magic",
    title: "Fields and Fences",
    subtitle: "Perimeter of Irregular Polygons, Wire Fencing Calculations & Grid Square Area Counting",
    concepts: [
      "Perimeter is the total continuous length of the outer boundary of a closed planar shape.",
      "Calculating perimeter by adding lengths of all straight boundary edges.",
      "Fencing fields with wire: single round vs. multiple rounds (e.g., 3-wire barbed fence).",
      "Counting whole and half squares on a square centimetre grid to estimate surface area."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f7fee7" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#365314" text-anchor="middle">Rahmat's Field Boundary Perimeter Calculation</text>
      <!-- Field Polygon -->
      <polygon points="160,50 360,50 420,110 240,110 160,85" fill="#ecfccb" stroke="#65a30d" stroke-width="2.5"/>
      <text x="260" y="45" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#365314" text-anchor="middle">9 m</text>
      <text x="400" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#365314" text-anchor="middle">15 m</text>
      <text x="330" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#365314" text-anchor="middle">21 m</text>
      <text x="195" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#365314" text-anchor="middle">9 m</text>
      <text x="145" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#365314" text-anchor="middle">9 m</text>
      <text x="290" y="146" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#4d7c0f" text-anchor="middle">Boundary = 9 + 15 + 21 + 9 = 54 metres</text>
    </svg>`,
    questions: [
      {
        category: "Boundary Length & Wire Requirement",
        q: "Rahmat is a farmer. He has a field with sides measuring 9 m, 15 m, 21 m, and 9 m. (a) What is the length of the boundary of Rahmat's field? (b) Rahmat bought a roll of 70 metres of barbed wire to fence his field. How much wire will be left over after putting one complete round of fence?",
        ans: `<strong>(a) Length of boundary (Perimeter):</strong><br>
Sum of all sides = 9 m + 15 m + 21 m + 9 m = <strong>54 metres</strong>.<br><br>
<strong>(b) Wire remaining:</strong><br>
• Total wire in roll = 70 metres.<br>
• Wire used for 1 round = 54 metres.<br>
• Wire left over = 70 m - 54 m = <strong>16 metres</strong>.`,
        marks: 3,
        rubric: [
          { key: "Correct boundary sum 54 metres", marks: "1.5 M" },
          { key: "Correct remaining wire 16 metres", marks: "1.5 M" }
        ]
      },
      {
        category: "Square Grid Area & Perimeter",
        q: "A square has a side of 6 cm. (a) What is its perimeter? (b) If four 1 cm squares are cut out from its four corners, what is the perimeter of the new shape? Explain why the perimeter changes or stays the same.",
        ans: `<strong>(a) Perimeter of original square:</strong><br>
Perimeter = 4 × side = 4 × 6 cm = <strong>24 cm</strong>.<br><br>
<strong>(b) Perimeter after cutting 1 cm squares from each corner:</strong><br>
• When a 1 cm square is removed from a corner, the two outer 1 cm edges that are removed are replaced by two inner 1 cm edges that form the new stepped corner.<br>
• Therefore, the total boundary length <strong>remains exactly 24 cm</strong>!<br>
• <strong>Conclusion:</strong> The perimeter stays the same (24 cm), even though the area has decreased by 4 sq cm.`,
        marks: 3,
        rubric: [
          { key: "Original perimeter 24 cm", marks: "1.0 M" },
          { key: "Explains corner cut effect and confirms perimeter remains 24 cm", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Three-Strand Wire Fence Budget",
      text: "A farmer wants to put a 3-strand barbed wire fence around a rectangular field that is 40 metres long and 25 metres wide. Fencing wire costs ₹15 per metre.",
      question: "Calculate the total length of wire needed and the total cost.",
      answer: "<strong>Step 1: Perimeter:</strong><br>2 × (40 + 25) = 2 × 65 = <strong>130 metres</strong>.<br><strong>Step 2: 3 strands:</strong><br>130 m × 3 = <strong>390 metres of wire</strong>.<br><strong>Step 3: Total cost:</strong><br>390 m × ₹15/m = <strong>₹5,850</strong>.",
      rubric: "1 Mark for perimeter (130 m); 1 Mark for 3 strands (390 m); 1 Mark for ₹5,850."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 14: SMART CHARTS
  // -------------------------------------------------------------------------
  {
    id: "mg14",
    num: 14,
    unit: "Classic Track: Math-Magic",
    title: "Smart Charts",
    subtitle: "Chapati Charts (Pie Charts), Road Traffic Tally Marks, Family Trees & Attendance Charts",
    concepts: [
      "Using tally marks for traffic flow observations: bicycles, cars, auto-rickshaws, buses, trucks.",
      "Chapati charts (circle graphs / pie charts): interpreting 1/2, 1/4, and 3/4 fractional shares.",
      "Reading family generation charts and student school absence records.",
      "Drawing conclusions and converting data tables into visual bar graphs."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Chapati Chart (Pie Chart): School Club Membership</text>
      <!-- Pie Chart -->
      <g transform="translate(140, 92)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#1e40af" stroke-width="2"/>
        <!-- Half: Sports Club -->
        <path d="M 0 0 L 0 -50 A 50 50 0 0 1 0 50 Z" fill="#93c5fd" stroke="#1e40af" stroke-width="1.5"/>
        <!-- Quarter: Drama Club -->
        <path d="M 0 0 L 0 50 A 50 50 0 0 1 -50 0 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="1.5"/>
        <!-- Quarter: Science Club -->
        <path d="M 0 0 L -50 0 A 50 50 0 0 1 0 -50 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
        <text x="25" y="5" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e3a8a" text-anchor="middle">Games (1/2)</text>
        <text x="-25" y="25" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9d174d" text-anchor="middle">Drama (1/4)</text>
        <text x="-25" y="-20" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">Art (1/4)</text>
      </g>
      <!-- Legend & Data -->
      <g transform="translate(260, 50)">
        <text x="0" y="15" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a">Total Children = 40</text>
        <rect x="0" y="28" width="12" height="12" fill="#93c5fd" stroke="#1e40af"/>
        <text x="20" y="38" font-family="system-ui, sans-serif" font-size="11" fill="#334155">Games Club: 1/2 of 40 = 20 children</text>
        <rect x="0" y="48" width="12" height="12" fill="#fbcfe8" stroke="#db2777"/>
        <text x="20" y="58" font-family="system-ui, sans-serif" font-size="11" fill="#334155">Drama Club: 1/4 of 40 = 10 children</text>
        <rect x="0" y="68" width="12" height="12" fill="#bbf7d0" stroke="#16a34a"/>
        <text x="20" y="78" font-family="system-ui, sans-serif" font-size="11" fill="#334155">Art Club: 1/4 of 40 = 10 children</text>
      </g>
    </svg>`,
    questions: [
      {
        category: "Chapati Chart Interpretation",
        q: "In a class of 36 students, a Chapati Chart shows their favorite seasons: 1/2 of the students like Winter, 1/4 like Rainy season, and 1/4 like Summer. (a) How many students like Winter? (b) How many students like Summer? (c) How many more students like Winter than Summer?",
        ans: `Total students in class = 36.<br><br>
• <strong>(a) Students who like Winter:</strong><br>
1/2 of 36 = 36 ÷ 2 = <strong>18 students</strong>.<br><br>
• <strong>(b) Students who like Summer:</strong><br>
1/4 of 36 = 36 ÷ 4 = <strong>9 students</strong>.<br><br>
• <strong>(c) Difference:</strong><br>
18 - 9 = <strong>9 more students</strong> like Winter than Summer.`,
        marks: 3,
        rubric: [
          { key: "Winter = 18 students", marks: "1.0 M" },
          { key: "Summer = 9 students", marks: "1.0 M" },
          { key: "Difference = 9 students", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Road Safety Tally Observation",
      text: "Anita stood near a junction for 30 minutes and counted vehicles using tally marks: Cycle-rickshaws: '卌 卌 卌', Bicycles: '卌 卌 卌 卌 卌', Buses: '卌 ||', Cars: '卌 卌 ||'.",
      question: "Which vehicle was seen the most, and what is the total count of all vehicles observed by Anita?",
      answer: "<strong>Counts:</strong><br>• Cycle-rickshaws: 15<br>• Bicycles: 25<br>• Buses: 7<br>• Cars: 12<br>• <strong>Most seen vehicle: Bicycles (25)</strong>.<br>• <strong>Total vehicles:</strong> 15 + 25 + 7 + 12 = <strong>59 vehicles</strong>.",
      rubric: "1.5 Marks for vehicle breakdown and most frequent; 1.5 Marks for total 59."
    }
  }
];

module.exports = { mathMagicChapters };
