// scripts/builders/mathMagicPart4.js
// NCERT Class 2 Math-Magic Book 2: Chapters 13 to 15
// The Longest Step, Birds Come Birds Go, How Many Ponytails?

const mathMagicPart4 = [
  {
    id: "mmg13", num: 13, unit: "Unit 13: Measurement of Length",
    title: "The Longest Step",
    subtitle: "Footsteps, Handspans, Fingers, Cat & Mouse Distance Puzzle",
    concepts: [
      "Measuring length and distance using body parts (fingers, handspan, pace/footsteps).",
      "Comparing distances: who takes the longest step (deer vs rabbit vs elephant).",
      "The Cat, Rat, and Milk Bowl puzzle: estimating who reaches the milk first.",
      "Understanding why non-standard body measurements differ between a child and an adult."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="60" cy="60" r="18" fill="#3b82f6"/><text x="60" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Rat</text><circle cx="250" cy="60" r="24" fill="#f59e0b"/><text x="250" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Milk</text><circle cx="440" cy="60" r="22" fill="#ef4444"/><text x="440" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Cat</text><line x1="85" y1="60" x2="220" y2="60" stroke="#3b82f6" stroke-width="3" stroke-dasharray="4,4"/><text x="150" y="50" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">3 Fingers Away</text><line x1="280" y1="60" x2="410" y2="60" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,4"/><text x="350" y="50" font-family="sans-serif" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">5 Fingers Away</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">Rat is Closer to Milk than the Cat!</text></svg>`,
    cbq: {
      title: "Cat and Mouse Distance Investigation",
      text: "In the NCERT picture, a bowl of fresh milk sits between a cat and a little mouse. A girl uses her fingers to measure distance on the page. From the rat's nose to the milk bowl is 3 fingers. From the cat's paw to the milk bowl is 5 fingers. The rat is 2 fingers away from its underground hole.",
      question: "Who is closer to the milk bowl: the cat or the rat? Will the rat reach the milk bowl or its safety hole first? What will happen if the cat runs twice as fast?",
      answer: "1. The <strong>rat</strong> is closer to the milk bowl (3 fingers vs 5 fingers for the cat).<br>2. The rat will reach its <strong>hole first</strong> because the hole is only 2 fingers away.<br>3. If the cat runs twice as fast, it covers distance rapidly, but the smart rat can quickly jump into its hole 2 fingers away and stay safe!",
      rubric: "1 M for rat closer to milk + 1 M for hole distance comparison + 1 M for cat speed reasoning"
    },
    questions: [
      {
        category: "Textbook Exercise • Animal Steps",
        q: "Three friends — an elephant, a deer, and a rabbit — walk in a park. Who takes the longest step? Who takes the shortest step?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The <strong>elephant</strong> has huge long legs and takes the <strong>longest step</strong>.<br>• The <strong>rabbit</strong> hops with small bounds and takes the <strong>shortest step</strong>.",
        marks: 2,
        rubric: [{ key: "Elephant: longest step", marks: "1 M" }, { key: "Rabbit: shortest step", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Measuring with Handspans",
        q: "Rajat measures the classroom study desk using his handspan. His desk is 6 handspans long. His teacher measures the same desk and finds it is 4 handspans long. Why did the teacher get a smaller count?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• The teacher is an adult, so her handspan is <strong>much bigger</strong> than Rajat's child handspan.<br>• Because the teacher's handspan is longer, fewer handspans are needed to cover the same length.",
        marks: 2,
        rubric: [{ key: "Teacher's handspan is larger explained", marks: "1 M" }, { key: "Fewer units needed for longer measure", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Measuring with Steps (Paces)",
        q: "How can you measure the distance between the classroom door and the teacher's blackboard without using a measuring tape?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• You can measure it by walking normally and counting your <strong>footsteps (paces)</strong> heel-to-toe from the door to the blackboard.",
        marks: 2,
        rubric: [{ key: "Footsteps / paces method described", marks: "1 M" }, { key: "Counting from start to end point explained", marks: "1 M" }]
      },
      {
        category: "Textbook Activity • Measuring School Items",
        q: "Which body unit (fingers, handspan, or footsteps) is most suitable to measure:<br>(a) The thickness of your pencil<br>(b) The length of your school math book<br>(c) The length of your school playground",
        ans: "<strong>Answers:</strong><br>(a) Thickness of a pencil: <strong>Fingers</strong>.<br>(b) Length of a math book: <strong>Handspan</strong>.<br>(c) Length of a playground: <strong>Footsteps (paces)</strong>.",
        marks: 3,
        rubric: [{ key: "(a) Fingers", marks: "1 M" }, { key: "(b) Handspan", marks: "1 M" }, { key: "(c) Footsteps", marks: "1 M" }]
      },
      {
        category: "Body Proportion Investigation",
        q: "Is your forehead longer than your palm? Measure with your fingers and compare.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Forehead height is usually about 3 to 4 fingers.<br>• Palm length is usually about 6 to 8 fingers.<br>• Therefore, the <strong>palm is longer</strong> than the forehead.",
        marks: 2,
        rubric: [{ key: "Finger measurement comparison", marks: "1 M" }, { key: "Palm identified as longer", marks: "1 M" }]
      },
      {
        category: "Footprint Length Comparison",
        q: "Who will have a longer foot: you or your father? How can you verify this at home?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>Father's foot</strong> will be longer.<br>• You can verify this by standing side-by-side on paper and tracing your foot outlines, or placing your heel against your father's heel.",
        marks: 2,
        rubric: [{ key: "Father's foot identified", marks: "1 M" }, { key: "Heel-to-heel or tracing verification method", marks: "1 M" }]
      },
      {
        category: "Pencil Length Drill",
        q: "An eraser is 2 fingers long. A new wooden pencil is equal to 4 erasers placed end-to-end. How many fingers long is the pencil?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 1 eraser = 2 fingers<br>• Pencil = 4 erasers = 4 × 2 = <strong>8 fingers long</strong>.",
        marks: 2,
        rubric: [{ key: "Multiplication 4 × 2 shown", marks: "1 M" }, { key: "8 fingers correct", marks: "1 M" }]
      },
      {
        category: "Ribbon Comparison",
        q: "Priya has a red ribbon that is 5 handspans long. Sneha has a blue ribbon that is 7 handspans long (measured using Priya's hand). Whose ribbon is longer and by how many handspans?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Red ribbon = 5 handspans<br>• Blue ribbon = 7 handspans<br>• Since 7 > 5, the <strong>blue ribbon is longer</strong>.<br>• Difference = 7 - 5 = <strong>2 handspans longer</strong>.",
        marks: 2,
        rubric: [{ key: "Blue ribbon identified", marks: "1 M" }, { key: "Difference of 2 handspans calculated", marks: "1 M" }]
      },
      {
        category: "Cat & Mouse Puzzle Variation",
        q: "In the cat and mouse game, if the rat is 4 steps away from the cheese and the cat is 9 steps away, how many steps head start does the rat have?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Cat distance = 9 steps<br>• Rat distance = 4 steps<br>• Head start = 9 - 4 = <strong>5 steps</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 9 - 4 shown", marks: "1 M" }, { key: "5 steps correct", marks: "1 M" }]
      },
      {
        category: "Hands-on Activity • Nose to Ear",
        q: "Guess the distance between your nose and your ear in fingers. Check with your hand.",
        ans: "<strong>Answer:</strong><br>• The distance from the tip of the nose to the ear in a 7-year-old child is approximately <strong>4 to 6 fingers</strong>.",
        marks: 1,
        rubric: [{ key: "Reasonable estimate (4-6 fingers)", marks: "1 M" }]
      },
      {
        category: "Why Standard Units Matter",
        q: "Why can carpenters and tailor uncles not use only handspans to make tables and shirts?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Everyone's hands and bodies are different sizes.<br>• If a tailor used handspans, clothes would turn out too big or too small. They use a standard <strong>measuring tape</strong> (centimetres/metres) so measurements are exact for everyone.",
        marks: 2,
        rubric: [{ key: "Variation in body sizes explained", marks: "1 M" }, { key: "Need for standard measuring tape explained", marks: "1 M" }]
      },
      {
        category: "Walking Race • Steps Counting",
        q: "Tarun walks across the verandah in 18 steps. His younger sister walks the same verandah in 26 steps. Who took more steps, and why?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• The <strong>younger sister</strong> took more steps (26 steps vs 18 steps).<br>• <strong>Reason:</strong> Her legs are shorter, so each of her steps covers a smaller distance, requiring more steps to cross the verandah.",
        marks: 2,
        rubric: [{ key: "Younger sister identified", marks: "1 M" }, { key: "Shorter stride length reason provided", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A handspan is the distance between the tip of the thumb and the tip of the little finger when stretched open.<br>(b) An ant takes longer steps than a dog.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. That is the exact anatomical definition of a handspan.<br>(b) <strong>False</strong>. An ant has tiny legs and takes microscopically small steps compared to a dog.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with reason", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What have you learned about measuring distances in Chapter 13?",
        ans: "<strong>Summary:</strong><br>1. Distances can be measured using natural units like fingers, handspans, and footsteps.<br>2. Larger objects take fewer measurement units; smaller units take more counts.<br>3. Because human body sizes vary, standard tools like rulers and measuring tapes ensure universal precision.",
        marks: 3,
        rubric: [{ key: "Non-standard units named", marks: "1 M" }, { key: "Inverse unit-count relationship", marks: "1 M" }, { key: "Need for standard units", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "Which is longer: 10 finger widths or 1 full handspan?",
        ans: "<strong>Answer:</strong><br>• <strong>1 full handspan</strong> is generally longer than 10 finger widths placed side-by-side.",
        marks: 1,
        rubric: [{ key: "1 full handspan identified", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg14", num: 14, unit: "Unit 14: Addition & Subtraction (Contextual)",
    title: "Birds Come, Birds Go",
    subtitle: "Token Cards, Migratory Birds, Bus Passengers & Cricket Century",
    concepts: [
      "Using token cards [10] (yellow square) and [1] (blue triangle) for mental operations.",
      "Solving addition when new birds fly into a lake flock.",
      "Solving subtraction when groups of birds fly away.",
      "Cricket score calculation: finding how many runs needed to complete 100 runs (a century)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><rect x="60" y="35" width="45" height="45" fill="#eab308" rx="4"/><text x="82" y="62" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">10</text><rect x="115" y="35" width="45" height="45" fill="#eab308" rx="4"/><text x="137" y="62" font-family="sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">10</text><polygon points="190,40 175,75 205,75" fill="#3b82f6"/><text x="190" y="70" font-family="sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">1</text><polygon points="225,40 210,75 240,75" fill="#3b82f6"/><text x="225" y="70" font-family="sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">1</text><polygon points="260,40 245,75 275,75" fill="#3b82f6"/><text x="260" y="70" font-family="sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">1</text><text x="370" y="65" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af">2 Tens + 3 Ones = 23 Birds</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">Token Card System for Rapid Regrouping</text></svg>`,
    cbq: {
      title: "Sultanpur Lake Bird Sanctuary Census",
      text: "During winter, migratory swans, cranes, and storks fly to the lake. In the morning, children count 25 swans and 18 cranes. By late afternoon, 12 swans fly away to feed in nearby fields, while 7 new cranes arrive.",
      question: "How many total birds were at the lake in the morning? How many swans remained after 12 flew away? How many cranes were there after 7 new ones arrived?",
      answer: "1. <strong>Morning total:</strong> 25 + 18 = <strong>43 birds</strong>.<br>2. <strong>Remaining swans:</strong> 25 - 12 = <strong>13 swans</strong>.<br>3. <strong>Cranes count:</strong> 18 + 7 = <strong>25 cranes</strong>.<br>4. <strong>Late afternoon total:</strong> 13 swans + 25 cranes = 38 birds.",
      rubric: "1 M for morning total (43) + 1 M for remaining swans (13) + 1 M for updated cranes (25)"
    },
    questions: [
      {
        category: "Textbook Exercise • Token Card Representation",
        q: "In the Flute Man counting method, draw or describe the token cards for 34 birds. (Square [10] = 10, Triangle [1] = 1).",
        ans: "<strong>Step-by-Step Solution:</strong><br>• In 34, there are 3 tens and 4 ones.<br>• Flute Man uses: <strong>Three [10] cards</strong> and <strong>four [1] cards</strong>.",
        marks: 2,
        rubric: [{ key: "3 cards of [10] identified", marks: "1 M" }, { key: "4 cards of [1] identified", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • New Birds Arriving",
        q: "There were 16 birds sitting on a tree branch. A flock of 25 more birds arrived. How many birds are there now?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Initial birds = 16 (1 ten and 6 ones)<br>• Arrived birds = 25 (2 tens and 5 ones)<br>• Add ones: 6 + 5 = 11 ones (Regroup 10 ones into 1 ten, leaving 1 one).<br>• Add tens: 1 + 2 + 1 = 4 tens.<br>• Total = 40 + 1 = <strong>41 birds</strong>.",
        marks: 3,
        rubric: [{ key: "Ones addition and regrouping shown", marks: "1 M" }, { key: "Tens addition shown", marks: "1 M" }, { key: "Final sum 41 birds correct", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Birds Flying Away",
        q: "There were 35 birds on a lake. In the evening, 17 birds flew away. How many birds were left?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total birds = 35 (3 tens and 5 ones)<br>• Flew away = 17 (1 ten and 7 ones)<br>• 5 is smaller than 7, so borrow 1 ten (leaving 2 tens). 5 becomes 15 ones.<br>• Ones: 15 - 7 = 8.<br>• Tens: 2 - 1 = 1.<br>• Remaining birds = <strong>18 birds</strong>.",
        marks: 3,
        rubric: [{ key: "Borrowing step shown (15 - 7 = 8)", marks: "1 M" }, { key: "Tens subtraction (2 - 1 = 1)", marks: "1 M" }, { key: "18 birds remaining correct", marks: "1 M" }]
      },
      {
        category: "Cricket Score • Century Calculation",
        q: "In a cricket match, Rahul is batting on 78 runs. How many more runs does he need to complete a century (100 runs)?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Target = 100 runs (Century)<br>• Current score = 78 runs<br>• Runs needed = 100 - 78 = 100 - 70 - 8 = 30 - 8 = <strong>22 runs</strong>.",
        marks: 2,
        rubric: [{ key: "100 - 78 subtraction shown", marks: "1 M" }, { key: "22 runs correct", marks: "1 M" }]
      },
      {
        category: "Cricket Score • Half Century Check",
        q: "Rohit scored 46 runs. Did he complete a half-century (50 runs)? How many runs was he short by?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Half-century = 50 runs.<br>• Rohit's score = 46 runs.<br>• Since 46 < 50, he <strong>did not complete</strong> a half-century.<br>• Shortage = 50 - 46 = <strong>4 runs short</strong>.",
        marks: 2,
        rubric: [{ key: "Negative confirmation (did not complete)", marks: "1 M" }, { key: "Shortage of 4 runs calculated", marks: "1 M" }]
      },
      {
        category: "Bus Passengers Word Problem",
        q: "A bus had 48 passengers. At the red light, 19 passengers got down. How many passengers remained in the bus?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total passengers = 48<br>• Passengers got down = 19<br>• Remaining = 48 - 19 = 48 - 20 + 1 = 28 + 1 = <strong>29 passengers</strong>.",
        marks: 2,
        rubric: [{ key: "48 - 19 shown", marks: "1 M" }, { key: "29 passengers correct", marks: "1 M" }]
      },
      {
        category: "Token Card Addition",
        q: "Solve using token cards: 28 + 14 = ___ tens + ___ ones.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 28 = 2 tens + 8 ones<br>• 14 = 1 ten + 4 ones<br>• Ones: 8 + 4 = 12 ones = 1 ten + 2 ones.<br>• Tens: 2 + 1 + 1 = 4 tens.<br>• Total = <strong>4 tens + 2 ones = 42</strong>.",
        marks: 2,
        rubric: [{ key: "Regrouping step shown", marks: "1 M" }, { key: "Final answer 42 correct", marks: "1 M" }]
      },
      {
        category: "Word Problem • Garden Roses",
        q: "A rose bush has 34 red roses and 29 yellow roses. How many roses are on the bush altogether?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Red roses = 34<br>• Yellow roses = 29<br>• Total roses = 34 + 29 = 34 + 30 - 1 = 64 - 1 = <strong>63 roses</strong>.",
        marks: 2,
        rubric: [{ key: "Addition 34 + 29 shown", marks: "1 M" }, { key: "63 roses correct", marks: "1 M" }]
      },
      {
        category: "Pencil Packets Word Problem",
        q: "A school store has 72 pencils. If they distribute 38 pencils to Class 2 students, how many pencils are left in the store?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Total pencils = 72<br>• Pencils distributed = 38<br>• Pencils left = 72 - 38 = 72 - 40 + 2 = 32 + 2 = <strong>34 pencils</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 72 - 38 shown", marks: "1 M" }, { key: "34 pencils left correct", marks: "1 M" }]
      },
      {
        category: "Mental Math • Near Tens Strategy",
        q: "Subtract 19 from 53 using mental math. Explain your thought process.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• 19 is 1 less than 20.<br>• First subtract 20: 53 - 20 = 33.<br>• Since we subtracted 1 extra, add 1 back: 33 + 1 = <strong>34</strong>.",
        marks: 2,
        rubric: [{ key: "Near-tens mental strategy explained", marks: "1 M" }, { key: "34 correct answer", marks: "1 M" }]
      },
      {
        category: "Comparative Problem • Bird Watcher",
        q: "Pooja spotted 27 pigeons and 19 parrots in the city garden. How many more pigeons did she see than parrots?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Pigeons = 27<br>• Parrots = 19<br>• Difference = 27 - 19 = <strong>8 more pigeons</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 27 - 19 shown", marks: "1 M" }, { key: "8 pigeons difference correct", marks: "1 M" }]
      },
      {
        category: "Token Card Subtraction",
        q: "If you have five [10] cards and three [1] cards (53), and you cross out two [10] cards and eight [1] cards (28), what cards are left?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Need to take 8 ones from 3 ones: exchange one [10] card for ten [1] cards.<br>• Now you have four [10] cards and thirteen [1] cards.<br>• Remove eight [1] cards: 13 - 8 = five [1] cards left.<br>• Remove two [10] cards: 4 - 2 = two [10] cards left.<br>• Value remaining = (2 × 10) + 5 = <strong>25</strong>.",
        marks: 2,
        rubric: [{ key: "Exchange of [10] card for ten [1] cards shown", marks: "1 M" }, { key: "Result 25 verified", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) In cricket, 1 century = 100 runs.<br>(b) 60 - 25 = 45.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. A century is exactly 100 runs.<br>(b) <strong>False</strong>. 60 - 25 = 35 (not 45).",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with 35", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "How does the story 'Birds Come, Birds Go' help us understand real-world math?",
        ans: "<strong>Summary:</strong><br>• Real populations (like birds, passengers, or sports scores) constantly increase (birds arrive/add) and decrease (birds leave/subtract).<br>• Using token cards allows us to handle 2-digit regrouping visually before doing abstract paper arithmetic.",
        marks: 2,
        rubric: [{ key: "Addition and subtraction dynamics explained", marks: "1 M" }, { key: "Visual token card utility explained", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "What is 85 - 35?",
        ans: "<strong>Calculation:</strong><br>• 85 - 30 = 55<br>• 55 - 5 = <strong>50</strong>.",
        marks: 1,
        rubric: [{ key: "50 correct", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg15", num: 15, unit: "Unit 15: Data Handling",
    title: "How Many Ponytails?",
    subtitle: "Counting Hairstyles, Shoe Colors, Drinking Water & Fruit Charts",
    concepts: [
      "Collecting, organizing, and recording survey data from classmates.",
      "Categorizing hairstyles (1 ponytail, 2 ponytails, short hair).",
      "Reading tally tables and pictographs for favorite fruits and shoe colors.",
      "Comparing data categories: identifying most, least, and finding differences."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef2f2" rx="10"/><rect x="60" y="30" width="60" height="60" fill="#ec4899" rx="4"/><text x="90" y="65" font-family="sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">8</text><text x="90" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#9d174d" text-anchor="middle">2 Ponytails</text><rect x="180" y="45" width="60" height="45" fill="#a855f7" rx="4"/><text x="210" y="75" font-family="sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">6</text><text x="210" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#6b21a8" text-anchor="middle">1 Ponytail</text><rect x="300" y="20" width="60" height="70" fill="#3b82f6" rx="4"/><text x="330" y="60" font-family="sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">14</text><text x="330" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Short Hair</text><text x="430" y="60" font-family="sans-serif" font-size="13" font-weight="700" fill="#374151">Total = 28</text></svg>`,
    cbq: {
      title: "Class 2 Favorite Fruit Survey",
      text: "The class teacher conducted a survey on children's favorite fruits: 12 children like Mango, 8 like Banana, 5 like Apple, and 7 like Orange.",
      question: "Which fruit is liked the most? Which fruit is liked the least? How many more children like Mango than Banana? How many children participated in the survey?",
      answer: "1. <strong>Most liked fruit:</strong> <strong>Mango</strong> (12 children).<br>2. <strong>Least liked fruit:</strong> <strong>Apple</strong> (5 children).<br>3. <strong>Difference (Mango vs Banana):</strong> 12 - 8 = <strong>4 more children</strong>.<br>4. <strong>Total children:</strong> 12 + 8 + 5 + 7 = <strong>32 children</strong>.",
      rubric: "1 M for most & least liked + 1 M for difference (4) + 1 M for total participants (32)"
    },
    questions: [
      {
        category: "Textbook Exercise • Hairstyle Count",
        q: "Look at the children in a classroom. Count and record:<br>• Number of children with two ponytails = 8<br>• Number of children with one ponytail = 6<br>• Number of children with short hair = 14<br>Which hairstyle is the most common?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Two ponytails = 8<br>• One ponytail = 6<br>• Short hair = 14<br>• Since 14 is the highest number, <strong>short hair</strong> is the most common hairstyle.",
        marks: 2,
        rubric: [{ key: "Short hair identified", marks: "1 M" }, { key: "Comparison of 14 > 8 > 6 explained", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Shoe Colors Survey",
        q: "Look at the shoes worn by children in Class 2:<br>• Black shoes = 16 children<br>• Brown shoes = 9 children<br>• White sports shoes = 7 children<br>(a) Which colour shoe is worn by the most children?<br>(b) How many more children wear black shoes than brown shoes?",
        ans: "<strong>Step-by-Step Solution:</strong><br>(a) <strong>Black shoes</strong> are worn by the most children (16).<br>(b) Difference = 16 - 9 = <strong>7 more children</strong>.",
        marks: 2,
        rubric: [{ key: "(a) Black shoes", marks: "1 M" }, { key: "(b) Difference of 7 calculated", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Water Drinking Chart",
        q: "A survey asked children how many glasses of water they drink every day:<br>• 1 glass: 3 children<br>• 2 glasses: 6 children<br>• 3 glasses: 12 children<br>• 4 or more glasses: 9 children<br>(a) How many children drink 3 glasses of water?<br>(b) How many children drink less than 3 glasses of water?",
        ans: "<strong>Step-by-Step Solution:</strong><br>(a) Number of children drinking 3 glasses = <strong>12 children</strong>.<br>(b) Less than 3 glasses = 1 glass (3) + 2 glasses (6) = 3 + 6 = <strong>9 children</strong>.",
        marks: 2,
        rubric: [{ key: "(a) 12 children", marks: "1 M" }, { key: "(b) 9 children calculated", marks: "1 M" }]
      },
      {
        category: "Textbook Table • Transportation Survey",
        q: "Children come to school by different means:<br>• By School Bus: 18<br>• By Bicycle: 7<br>• On Foot (Walking): 10<br>• By Auto-rickshaw: 5<br>(a) Which is the most popular way of coming to school?<br>(b) What is the total number of children surveyed?",
        ans: "<strong>Step-by-Step Solution:</strong><br>(a) The most popular way is <strong>School Bus</strong> (18 children).<br>(b) Total children = 18 + 7 + 10 + 5 = 25 + 15 = <strong>40 children</strong>.",
        marks: 2,
        rubric: [{ key: "(a) School Bus identified", marks: "1 M" }, { key: "(b) Total 40 children calculated", marks: "1 M" }]
      },
      {
        category: "Pictograph Reading",
        q: "In a fruit chart, each smiley face 🙂 represents 1 child. If Banana has 4 smileys and Mango has 7 smileys, how many children like Banana and how many like Mango?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Banana = 4 smileys × 1 = <strong>4 children</strong>.<br>• Mango = 7 smileys × 1 = <strong>7 children</strong>.",
        marks: 2,
        rubric: [{ key: "Banana: 4 children", marks: "1 M" }, { key: "Mango: 7 children", marks: "1 M" }]
      },
      {
        category: "Comparative Deduction",
        q: "In a pet survey: 15 children have dogs, 9 have cats, and 4 have birds. How many more children have dogs than cats?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Dogs = 15<br>• Cats = 9<br>• Difference = 15 - 9 = <strong>6 more children</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 15 - 9 shown", marks: "1 M" }, { key: "6 more children correct", marks: "1 M" }]
      },
      {
        category: "Tally Marks Introduction",
        q: "What is the purpose of drawing tally marks or tick marks when counting items in a survey?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Tally marks allow us to record data one by one as people answer, without needing to erase or rewrite numbers.<br>• They group counts into batches of 5, making final addition simple and error-free.",
        marks: 2,
        rubric: [{ key: "Quick recording without erasing explained", marks: "1 M" }, { key: "Batching of counts explained", marks: "1 M" }]
      },
      {
        category: "Birthday Month Survey",
        q: "In Class 2-A: 4 children were born in January, 2 in February, 5 in July, and 6 in November. In which of these months were the most children born?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• January = 4<br>• February = 2<br>• July = 5<br>• November = 6<br>• The most birthdays fall in <strong>November</strong> (6 children).",
        marks: 2,
        rubric: [{ key: "November identified", marks: "1 M" }, { key: "Count 6 verified as highest", marks: "1 M" }]
      },
      {
        category: "Ice-Cream Flavor Comparison",
        q: "A survey of 25 children found: 10 like Vanilla, 8 like Chocolate, and the rest like Strawberry. How many children like Strawberry?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Vanilla + Chocolate = 10 + 8 = 18 children.<br>• Total children = 25.<br>• Strawberry lovers = 25 - 18 = <strong>7 children</strong>.",
        marks: 2,
        rubric: [{ key: "10 + 8 = 18 calculated", marks: "1 M" }, { key: "25 - 18 = 7 calculated", marks: "1 M" }]
      },
      {
        category: "Table Data Interpretation",
        q: "State one true fact and one question you can ask by looking at the Hairstyle data table (8 two ponytails, 6 one ponytail, 14 short hair).",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>True Fact:</strong> More children have short hair than all ponytail styles combined (14 short hair vs 8 + 6 = 14 ponytail styles, making them equal).<br>• <strong>Question:</strong> How many girls in the class have two ponytails?",
        marks: 2,
        rubric: [{ key: "Valid true fact from data", marks: "1 M" }, { key: "Valid analytical question", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A data table helps us see and compare information quickly.<br>(b) In a survey of 20 children, the total of all categories can add up to 50.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. Organizing data into tables makes comparison simple.<br>(b) <strong>False</strong>. If only 20 children are surveyed and each answers once, the sum of categories cannot exceed 20.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with survey logic explanation", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What is 'data' and why do we collect it?",
        ans: "<strong>Summary:</strong><br>• <strong>Data</strong> is a collection of facts, numbers, or details about people, objects, or events.<br>• We collect data to answer real-life questions (like which fruit to buy for a party, or how many buses are needed for school).",
        marks: 2,
        rubric: [{ key: "Definition of data", marks: "1 M" }, { key: "Purpose of data collection explained", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "If 15 children like cricket and 9 like football, what is the total number of sports lovers?",
        ans: "<strong>Calculation:</strong><br>• 15 + 9 = <strong>24 sports lovers</strong>.",
        marks: 1,
        rubric: [{ key: "24 correct", marks: "1 M" }]
      }
    ]
  }
];

module.exports = { mathMagicPart4 };
