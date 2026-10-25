// scripts/builders/joyfulMathsPart2.js
// Chapters 3, 4, 5 of Joyful Mathematics (Class 2 NCERT)

const joyfulMathsPart2 = [
  {
    id: "jm3", num: 3, unit: "Unit 2: Number Play",
    title: "Fun with Numbers",
    subtitle: "2-Digit Numbers (1–100), Tens & Ones Place Value & Ordering",
    concepts: [
      "Building numbers 1 to 100 with bundles of 10 and single units (ones).",
      "Finding predecessor (before), successor (after), and between numbers.",
      "Comparing 2-digit numbers using <, >, and = symbols.",
      "Expanding numbers into Tens and Ones (e.g. 64 = 60 + 4)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><rect x="40" y="30" width="24" height="60" fill="#059669" rx="3"/><rect x="70" y="30" width="24" height="60" fill="#059669" rx="3"/><rect x="100" y="30" width="24" height="60" fill="#059669" rx="3"/><circle cx="160" cy="45" r="10" fill="#10b981"/><circle cx="160" cy="75" r="10" fill="#10b981"/><circle cx="190" cy="60" r="10" fill="#10b981"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">3 Tens (30) + 3 Ones (3) = 33</text></svg>`,
    cbq: {
      title: "Classroom Pencil Inventory",
      text: "The class teacher has 4 boxes of 10 pencils each, and 7 loose pencils on her desk. She needs 50 pencils for an art contest.",
      question: "How many total pencils does the teacher have right now? How many more pencils does she need to reach 50?",
      answer: "1. 4 boxes of 10 = 4 × 10 = 40 pencils.<br>2. Plus 7 loose pencils = 40 + 7 = 47 pencils.<br>3. Shortage to reach 50 = 50 - 47 = 3 more pencils needed.",
      rubric: "1.5 M for total inventory (47) + 1.5 M for shortage calculation (3)"
    },
    questions: [
      {
        category: "Tens and Ones Place Value",
        q: "Write the number shown by 5 bundles of 10 sticks and 8 loose sticks. What is the value of the digit in the tens place?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 5 bundles of 10 = 5 tens = 50<br>• 8 loose sticks = 8 ones = 8<br>• Number = 50 + 8 = <strong>58</strong>.<br>• The digit in the tens place is 5, and its value is <strong>50</strong>.",
        marks: 2,
        rubric: [{ key: "Number identification: 58", marks: "1 M" }, { key: "Value of tens digit: 50", marks: "1 M" }]
      },
      {
        category: "Number Expansion",
        q: "Expand the following numbers into Tens and Ones:<br>(a) 43 = __ tens + __ ones = __ + __<br>(b) 76 = __ tens + __ ones = __ + __<br>(c) 90 = __ tens + __ ones = __ + __",
        ans: "<strong>Answers:</strong><br>(a) 43 = <strong>4</strong> tens + <strong>3</strong> ones = <strong>40 + 3</strong><br>(b) 76 = <strong>7</strong> tens + <strong>6</strong> ones = <strong>70 + 6</strong><br>(c) 90 = <strong>9</strong> tens + <strong>0</strong> ones = <strong>90 + 0</strong>.",
        marks: 3,
        rubric: [{ key: "Part (a) correct", marks: "1 M" }, { key: "Part (b) correct", marks: "1 M" }, { key: "Part (c) correct", marks: "1 M" }]
      },
      {
        category: "Before, After and Between",
        q: "Fill in the missing numbers:<br>(a) What comes just before 60? ______<br>(b) What comes just after 89? ______<br>(c) What comes between 74 and 76? ______<br>(d) What comes between 98 and 100? ______",
        ans: "<strong>Answers:</strong><br>(a) Just before 60 is <strong>59</strong>.<br>(b) Just after 89 is <strong>90</strong>.<br>(c) Between 74 and 76 is <strong>75</strong>.<br>(d) Between 98 and 100 is <strong>99</strong>.",
        marks: 2,
        rubric: [{ key: "All 4 correct (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Comparing 2-Digit Numbers",
        q: "Insert <, >, or = in the boxes:<br>(a) 47 [ ] 74<br>(b) 85 [ ] 58<br>(c) 63 [ ] 60 + 3<br>(d) 91 [ ] 99",
        ans: "<strong>Answers:</strong><br>(a) 47 <strong><</strong> 74 (4 tens is less than 7 tens)<br>(b) 85 <strong>></strong> 58 (8 tens is greater than 5 tens)<br>(c) 63 <strong>=</strong> 60 + 3 (both equal 63)<br>(d) 91 <strong><</strong> 99 (same tens, but 1 one is less than 9 ones).",
        marks: 2,
        rubric: [{ key: "All 4 correct comparison signs (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Ordering Numbers • Increasing Order",
        q: "Arrange the given numbers in ascending order (smallest to greatest): 54, 21, 88, 37, 19.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Compare tens digits: 19 (1 ten), 21 (2 tens), 37 (3 tens), 54 (5 tens), 88 (8 tens).<br>• Ascending Order: <strong>19, 21, 37, 54, 88</strong>.",
        marks: 2,
        rubric: [{ key: "Method of comparing tens digits", marks: "1 M" }, { key: "Correct order: 19, 21, 37, 54, 88", marks: "1 M" }]
      },
      {
        category: "Ordering Numbers • Decreasing Order",
        q: "Arrange the given numbers in descending order (greatest to smallest): 62, 95, 34, 79, 41.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Compare tens digits: 95 (9 tens), 79 (7 tens), 62 (6 tens), 41 (4 tens), 34 (3 tens).<br>• Descending Order: <strong>95, 79, 62, 41, 34</strong>.",
        marks: 2,
        rubric: [{ key: "Correct descending sequence", marks: "2 M" }]
      },
      {
        category: "Number Names in Words",
        q: "Write the number names for: (a) 38, (b) 65, (c) 82, (d) 49.",
        ans: "<strong>Answers:</strong><br>(a) 38 = <strong>Thirty-eight</strong><br>(b) 65 = <strong>Sixty-five</strong><br>(c) 82 = <strong>Eighty-two</strong><br>(d) 49 = <strong>Forty-nine</strong>.",
        marks: 2,
        rubric: [{ key: "Correct spellings for all 4 numbers", marks: "2 M" }]
      },
      {
        category: "Numerals from Words",
        q: "Write the numeral for:<br>(a) Seventy-one: ______<br>(b) Fifty-four: ______<br>(c) Eighty-eight: ______<br>(d) Ninety-nine: ______",
        ans: "<strong>Answers:</strong><br>(a) <strong>71</strong><br>(b) <strong>54</strong><br>(c) <strong>88</strong><br>(d) <strong>99</strong>.",
        marks: 2,
        rubric: [{ key: "All 4 numerals correct (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Skip Counting on 100-Chart",
        q: "Starting from 10, skip count forward by 10s up to 100. Write the complete series.",
        ans: "<strong>Answer:</strong><br><strong>10, 20, 30, 40, 50, 60, 70, 80, 90, 100</strong>.",
        marks: 2,
        rubric: [{ key: "Complete 10s sequence", marks: "2 M" }]
      },
      {
        category: "Backward Counting",
        q: "Write the backward counting from 50 down to 42.",
        ans: "<strong>Answer:</strong><br><strong>50, 49, 48, 47, 46, 45, 44, 43, 42</strong>.",
        marks: 2,
        rubric: [{ key: "Accurate backward counting", marks: "2 M" }]
      },
      {
        category: "Abacus Representation",
        q: "An abacus has 6 green beads on the Tens spike and 3 blue beads on the Ones spike. What number does the abacus represent?",
        ans: "<strong>Answer:</strong><br>• Tens spike = 6 beads = 60<br>• Ones spike = 3 beads = 3<br>• Number represented = 60 + 3 = <strong>63</strong>.",
        marks: 2,
        rubric: [{ key: "Tens and ones value", marks: "1 M" }, { key: "Total number: 63", marks: "1 M" }]
      },
      {
        category: "Number Riddle",
        q: "I have 7 in my tens place and the same digit in my ones place. What number am I?",
        ans: "<strong>Answer:</strong><br>• Tens digit = 7<br>• Ones digit = 7<br>• The number is <strong>77</strong> (Seventy-seven).",
        marks: 1,
        rubric: [{ key: "Identified 77", marks: "1 M" }]
      },
      {
        category: "Number Riddle",
        q: "I am more than 30 but less than 40. My ones digit is double my tens digit (3 × 2 = 6). What number am I?",
        ans: "<strong>Answer:</strong><br>• Tens digit = 3<br>• Ones digit = 3 × 2 = 6<br>• The number is <strong>36</strong>.",
        marks: 2,
        rubric: [{ key: "Deduction steps", marks: "1 M" }, { key: "Number = 36", marks: "1 M" }]
      },
      {
        category: "Greatest and Smallest",
        q: "From the numbers [64, 46, 82, 28, 75]:<br>(a) Which is the greatest number?<br>(b) Which is the smallest number?",
        ans: "<strong>Answer:</strong><br>(a) Greatest number is <strong>82</strong> (has the largest tens digit, 8).<br>(b) Smallest number is <strong>28</strong> (has the smallest tens digit, 2).",
        marks: 2,
        rubric: [{ key: "Greatest: 82", marks: "1 M" }, { key: "Smallest: 28", marks: "1 M" }]
      },
      {
        category: "Word Problem • Marble Collection",
        q: "Kabir has 47 glass marbles. His cousin Aman has 52 glass marbles. Who has more marbles and by how many?",
        ans: "<strong>Solution:</strong><br>1. Aman has 52, Kabir has 47.<br>2. Since 52 > 47, <strong>Aman has more marbles</strong>.<br>3. Difference = 52 - 47 = <strong>5 more marbles</strong>.",
        marks: 3,
        rubric: [{ key: "Aman has more marbles", marks: "1.5 M" }, { key: "Difference = 5 marbles", marks: "1.5 M" }]
      },
      {
        category: "Let Us Do • Tens and Ones Table",
        q: "Complete the table:<br>• 2 tens + 5 ones = [__]<br>• 8 tens + 9 ones = [__]<br>• 6 tens + 0 ones = [__]<br>• 1 ten + 7 ones = [__]",
        ans: "<strong>Answers:</strong><br>• 2 tens + 5 ones = <strong>25</strong><br>• 8 tens + 9 ones = <strong>89</strong><br>• 6 tens + 0 ones = <strong>60</strong><br>• 1 ten + 7 ones = <strong>17</strong>.",
        marks: 2,
        rubric: [{ key: "All 4 table rows correct (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Mental Math • Number Line",
        q: "A grasshopper starts at 25 and takes 3 big hops of 5 forward. Which numbers does it land on?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Hop 1: 25 + 5 = <strong>30</strong><br>• Hop 2: 30 + 5 = <strong>35</strong><br>• Hop 3: 35 + 5 = <strong>40</strong>.<br>• The grasshopper lands on 30, 35, and finishes on <strong>40</strong>.",
        marks: 2,
        rubric: [{ key: "Intermediate hops", marks: "1 M" }, { key: "Final landing number 40", marks: "1 M" }]
      },
      {
        category: "True or False • Place Value",
        q: "Write True or False:<br>(a) In the number 83, the place value of 8 is 8.<br>(b) 10 tens make 100.<br>(c) The smallest 2-digit number is 10.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong> (The place value of 8 in 83 is 80).<br>(b) <strong>True</strong> (10 × 10 = 100).<br>(c) <strong>True</strong> (10 is the first 2-digit number).",
        marks: 3,
        rubric: [{ key: "All 3 statements evaluated correctly (1 M each)", marks: "3 M" }]
      },
      {
        category: "Making Numbers with Digits",
        q: "Using the digits 3 and 7 once each, form:<br>(a) The greatest 2-digit number.<br>(b) The smallest 2-digit number.",
        ans: "<strong>Answer:</strong><br>(a) Greatest 2-digit number: Put larger digit 7 in tens place = <strong>73</strong>.<br>(b) Smallest 2-digit number: Put smaller digit 3 in tens place = <strong>37</strong>.",
        marks: 2,
        rubric: [{ key: "Greatest: 73", marks: "1 M" }, { key: "Smallest: 37", marks: "1 M" }]
      },
      {
        category: "Real-Life Math • Bead Necklace",
        q: "Meera makes necklaces using 10 beads in each necklace. If she has 38 beads, how many complete necklaces can she make? How many beads are left over?",
        ans: "<strong>Solution:</strong><br>• Total beads = 38<br>• Beads per necklace = 10<br>• 38 = 30 + 8 = (3 tens) + (8 ones).<br>• Meera can make <strong>3 complete necklaces</strong> and <strong>8 beads are left over</strong>.",
        marks: 2,
        rubric: [{ key: "3 complete necklaces", marks: "1 M" }, { key: "8 beads remainder", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm4", num: 4, unit: "Unit 2: Number Play",
    title: "Shadow Story",
    subtitle: "Togethe, Shapes, Silhouettes, Light Sources & Size Patterns",
    concepts: [
      "Observing how shadows change size depending on the light source position.",
      "Recognizing shapes and animal silhouettes through hand-shadow play.",
      "Comparing morning, noon, and evening shadow lengths."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef2f2" rx="10"/><circle cx="80" cy="30" r="18" fill="#f59e0b"/><rect x="180" y="45" width="20" height="60" fill="#dc2626" rx="2"/><ellipse cx="260" cy="100" rx="60" ry="12" fill="#64748b" opacity="0.4"/><text x="250" y="115" font-family="sans-serif" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">Sun Angle Determines Shadow Length &amp; Direction</text></svg>`,
    cbq: {
      title: "Playground Shadow Tracking",
      text: "At 8:00 AM, Rohan's shadow measures 14 handspans on the school ground. At 12:00 noon, his shadow measures only 3 handspans.",
      question: "Why did Rohan's shadow become so short at noon? What will happen to his shadow at 5:00 PM in the evening?",
      answer: "1. At noon, the sun is directly overhead, casting light from above so the shadow is at its shortest.<br>2. At 5:00 PM, the sun sinks low in the western sky, so his shadow will become long again, pointing toward the east.",
      rubric: "1.5 M for noon explanation + 1.5 M for evening prediction"
    },
    questions: [
      {
        category: "Shadow Formation Science",
        q: "What two things are needed to make a shadow? Can you see your shadow in a pitch-dark room?",
        ans: "<strong>Answer:</strong><br>1. You need a <strong>source of light</strong> (like the sun, a torch, or a lamp) and an <strong>opaque object</strong> that blocks the light.<br>2. <strong>No</strong>, you cannot see a shadow in a completely dark room because there is no light to be blocked.",
        marks: 2,
        rubric: [{ key: "Light source and opaque object mentioned", marks: "1 M" }, { key: "No shadow in darkness explained", marks: "1 M" }]
      },
      {
        category: "Time of Day and Shadow Length",
        q: "When during the sunny day is your shadow:<br>(a) Longest?<br>(b) Shortest?",
        ans: "<strong>Answer:</strong><br>(a) Longest: In the <strong>early morning</strong> and <strong>late afternoon/evening</strong> when the sun is low on the horizon.<br>(b) Shortest: At <strong>midday / noon (12:00 PM)</strong> when the sun is directly overhead.",
        marks: 2,
        rubric: [{ key: "Morning/evening longest", marks: "1 M" }, { key: "Noon shortest", marks: "1 M" }]
      },
      {
        category: "Silhouette Matching",
        q: "Look at the shadow of an animal with long upright ears and a short round tail. Which animal is it - an elephant, a rabbit, or a duck?",
        ans: "<strong>Answer:</strong><br>It is a <strong>Rabbit</strong> (long upright ears and fluffy tail are unmistakable features).",
        marks: 1,
        rubric: [{ key: "Identified as Rabbit", marks: "1 M" }]
      },
      {
        category: "Hand Shadow Art",
        q: "How can you use your two hands to make the shadow of a flying bird on a white wall?",
        ans: "<strong>Answer:</strong><br>• Cross your thumbs together and link them.<br>• Spread your fingers wide and flutter them up and down like flapping wings.<br>• The shadow on the wall looks like a bird flying in the sky.",
        marks: 2,
        rubric: [{ key: "Linked thumbs described", marks: "1 M" }, { key: "Fluttering fingers / wing motion described", marks: "1 M" }]
      },
      {
        category: "Shadow Color Property",
        q: "If Neha wears a bright red dress, what color will her shadow be? Can a shadow be colorful?",
        ans: "<strong>Answer:</strong><br>• Her shadow will be <strong>dark grey / black</strong>.<br>• <strong>No</strong>, shadows cannot be colorful because a shadow is simply an area where light is blocked; it does not carry the color of the object.",
        marks: 2,
        rubric: [{ key: "Shadow is dark grey/black", marks: "1 M" }, { key: "Reason: light is blocked, not reflected", marks: "1 M" }]
      },
      {
        category: "Transparent vs Opaque",
        q: "Why does a clear glass window not cast a dark shadow, while a wooden door casts a very dark shadow?",
        ans: "<strong>Answer:</strong><br>• Clear glass is <strong>transparent</strong>, so light passes right through it without being blocked.<br>• A wooden door is <strong>opaque</strong>, completely stopping light and creating a sharp dark shadow behind it.",
        marks: 2,
        rubric: [{ key: "Glass is transparent (light passes)", marks: "1 M" }, { key: "Wood is opaque (blocks light)", marks: "1 M" }]
      },
      {
        category: "Light Source Distance and Size",
        q: "What happens to the shadow of a toy car on the wall as you bring the torch closer to the car? Does it become bigger or smaller?",
        ans: "<strong>Answer:</strong><br>• When the torch is moved closer to the toy car, the car blocks a wider angle of light rays.<br>• Therefore, the shadow becomes <strong>much bigger (larger)</strong>.",
        marks: 2,
        rubric: [{ key: "Becomes bigger", marks: "1 M" }, { key: "Reason (wider angle of blocked rays)", marks: "1 M" }]
      },
      {
        category: "Direction of Shadow",
        q: "In the morning, the sun rises in the East. In which direction will your shadow fall?",
        ans: "<strong>Answer:</strong><br>• Shadows always fall in the direction <strong>opposite to the light source</strong>.<br>• Since the sun is in the East, your shadow will fall toward the <strong>West</strong>.",
        marks: 2,
        rubric: [{ key: "Opposite to light source rule", marks: "1 M" }, { key: "Direction: West", marks: "1 M" }]
      },
      {
        category: "Night Light Sources",
        q: "Name three sources of light that can create shadows at night.",
        ans: "<strong>Answer:</strong><br>1. <strong>Street lamps</strong><br>2. <strong>A torch or flashlight</strong><br>3. <strong>The Moon / candle light</strong>.",
        marks: 2,
        rubric: [{ key: "Three valid night light sources listed", marks: "2 M" }]
      },
      {
        category: "Shadow Matching Shapes",
        q: "Which 3D shape casts a circular shadow when illuminated from any direction? Which shape casts a triangular shadow?",
        ans: "<strong>Answer:</strong><br>• A <strong>Sphere</strong> (ball) always casts a circular shadow from every direction.<br>• A <strong>Cone</strong> casts a triangular shadow when light shines from its side.",
        marks: 2,
        rubric: [{ key: "Sphere for circular shadow", marks: "1 M" }, { key: "Cone for triangular shadow", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Cool Shade",
        q: "Why do cows and street dogs rest under the shadow of a banyan tree during hot sunny days?",
        ans: "<strong>Answer:</strong><br>• The thick leaves of the tree block the scorching sunlight, creating a dark, cool shadow (shade).<br>• The ground under the shadow is much cooler than the open sunny road, giving animals relief from heat.",
        marks: 2,
        rubric: [{ key: "Blocking scorching sunlight", marks: "1 M" }, { key: "Cooler ground temperature explained", marks: "1 M" }]
      },
      {
        category: "Shadow Pattern Sequence",
        q: "Look at the pattern of shadows of a stick: 9 AM (Long Left), 12 PM (Short Center), 3 PM (Long Right). What pattern rule is being followed?",
        ans: "<strong>Answer:</strong><br>• The rule is following the sun's journey across the sky from East to West.<br>• The shadow shifts smoothly from <strong>West (morning) ➔ Underneath (noon) ➔ East (afternoon)</strong> while changing in length.",
        marks: 2,
        rubric: [{ key: "Sun movement rule explained", marks: "1 M" }, { key: "West to East shadow progression", marks: "1 M" }]
      },
      {
        category: "True or False • Shadows",
        q: "Write True or False:<br>(a) An object can cast two shadows at the same time if there are two lights in the room.<br>(b) Flying birds high in the sky cast big dark shadows on our feet.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong> (Each distinct light source creates its own shadow).<br>(b) <strong>False</strong> (When birds fly very high, light fills in around them and no distinct shadow reaches the ground).",
        marks: 2,
        rubric: [{ key: "(a) True with explanation", marks: "1 M" }, { key: "(b) False with explanation", marks: "1 M" }]
      },
      {
        category: "Experiment with Finger Shadows",
        q: "Hold 2 fingers up in front of a lamp. How many finger shadows do you see? Now hold up 4 fingers. How many shadows appear?",
        ans: "<strong>Answer:</strong><br>• With 2 fingers, you see <strong>2 finger shadows</strong>.<br>• With 4 fingers, you see <strong>4 finger shadows</strong>.<br>• Every finger blocks light independently, creating its own outline.",
        marks: 2,
        rubric: [{ key: "2 shadows then 4 shadows", marks: "1 M" }, { key: "Independent blocking explained", marks: "1 M" }]
      },
      {
        category: "Creative Riddle",
        q: "I follow you in the sunshine, but disappear in the dark. I run when you run, but make no sound at all. Who am I?",
        ans: "<strong>Answer:</strong><br>I am your <strong>Shadow</strong>.",
        marks: 1,
        rubric: [{ key: "Correct answer: Shadow", marks: "1 M" }]
      }
    ]
  },
  {
    id: "jm5", num: 5, unit: "Unit 3: Lines, Patterns & Measures",
    title: "Playing with Lines",
    subtitle: "Standing (Vertical), Sleeping (Horizontal), Slanting (Diagonal) & Curved Lines",
    concepts: [
      "Distinguishing the 4 basic line types: standing, sleeping, slanting, and curved.",
      "Analyzing straight vs curved line components in letters of the English alphabet and numbers.",
      "Creating stick-figure dancer drawings and clock hands using line combinations."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fdf4ff" rx="10"/><line x1="80" y1="20" x2="80" y2="90" stroke="#9333ea" stroke-width="6" stroke-linecap="round"/><line x1="140" y1="55" x2="220" y2="55" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/><line x1="270" y1="85" x2="330" y2="25" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/><path d="M 380,80 Q 420,10 460,80" fill="none" stroke="#10b981" stroke-width="6" stroke-linecap="round"/><text x="250" y="112" font-family="sans-serif" font-size="11" font-weight="700" fill="#581c87" text-anchor="middle">Standing (Vertical) • Sleeping (Horizontal) • Slanting (Diagonal) • Curved</text></svg>`,
    cbq: {
      title: "Art Class Stick Figure Choreography",
      text: "During art class, Priya draws 3 stick-figure Bharatanatyam dancers using only chalk lines. For each dancer, she uses 1 standing line for the body, 2 slanting lines for arms, and 2 slanting lines for legs.",
      question: "How many slanting lines did Priya draw for all 3 dancers together? How many standing lines in total?",
      answer: "1. Each dancer has 2 arm lines + 2 leg lines = 4 slanting lines.<br>2. For 3 dancers: 3 × 4 = 12 slanting lines.<br>3. Standing lines: 1 per dancer × 3 dancers = 3 standing lines.",
      rubric: "1.5 M for slanting line calculation (12) + 1.5 M for standing line count (3)"
    },
    questions: [
      {
        category: "Line Classification",
        q: "Classify each everyday object with its matching line type:<br>(a) A tall straight flagpole<br>(b) The edge of a calm swimming pool<br>(c) A sliding board in a park<br>(d) A round hula hoop",
        ans: "<strong>Classification:</strong><br>(a) Flagpole: <strong>Standing line</strong> (Vertical)<br>(b) Swimming pool edge: <strong>Sleeping line</strong> (Horizontal)<br>(c) Sliding board: <strong>Slanting line</strong> (Diagonal)<br>(d) Hula hoop: <strong>Curved line</strong>.",
        marks: 2,
        rubric: [{ key: "All 4 correctly classified (0.5 M each)", marks: "2 M" }]
      },
      {
        category: "Alphabet Line Analysis",
        q: "Count the lines in the capital letter 'H':<br>(a) How many standing lines?<br>(b) How many sleeping lines?<br>(c) Are there any curved lines?",
        ans: "<strong>Answer:</strong><br>(a) Standing lines = <strong>2</strong> (the two upright sides).<br>(b) Sleeping lines = <strong>1</strong> (the bar across the middle).<br>(c) Curved lines = <strong>0</strong> (none).",
        marks: 2,
        rubric: [{ key: "2 standing lines", marks: "1 M" }, { key: "1 sleeping line, 0 curved", marks: "1 M" }]
      },
      {
        category: "Alphabet Line Analysis",
        q: "Which line types make up the capital letter 'A'? Name them and count each.",
        ans: "<strong>Answer:</strong><br>• The letter 'A' is made of:<br>  1. <strong>2 slanting lines</strong> (the two sides that meet at the top peak).<br>  2. <strong>1 sleeping line</strong> (the crossbar in the middle).<br>• Total = 3 straight lines.",
        marks: 2,
        rubric: [{ key: "2 slanting lines identified", marks: "1 M" }, { key: "1 sleeping line identified", marks: "1 M" }]
      },
      {
        category: "Straight vs Curved Letters",
        q: "Group the following letters into 'Only Straight Lines' and 'Only Curved Lines':<br>[ E, O, L, C, T, S ].",
        ans: "<strong>Grouping:</strong><br>• <strong>Only Straight Lines:</strong> E, L, T<br>• <strong>Only Curved Lines:</strong> O, C, S.",
        marks: 2,
        rubric: [{ key: "Straight letters (E, L, T) correct", marks: "1 M" }, { key: "Curved letters (O, C, S) correct", marks: "1 M" }]
      },
      {
        category: "Letters with Both Lines",
        q: "Name three capital letters that have BOTH straight lines AND curved lines.",
        ans: "<strong>Answer:</strong><br>Examples include:<br>1. <strong>B</strong> (1 standing line + 2 curved lines)<br>2. <strong>D</strong> (1 standing line + 1 curved line)<br>3. <strong>P</strong> (1 standing line + 1 curved line)<br>*(Also: R, G, J)*.",
        marks: 2,
        rubric: [{ key: "Any 3 correct letters with breakdown", marks: "2 M" }]
      },
      {
        category: "Clock Hands Lines",
        q: "Look at the hands of a clock:<br>(a) At 6:00 o'clock, what single line do the two hands form together?<br>(b) At 3:00 o'clock, which two types of lines do the hands form?",
        ans: "<strong>Answer:</strong><br>(a) At 6:00, the hour hand points down and minute hand points straight up, forming <strong>one straight standing line</strong>.<br>(b) At 3:00, the minute hand is a <strong>standing line</strong> and the hour hand is a <strong>sleeping line</strong> (forming a right angle).",
        marks: 2,
        rubric: [{ key: "6:00 forms standing line", marks: "1 M" }, { key: "3:00 forms standing + sleeping line", marks: "1 M" }]
      },
      {
        category: "Number Line Analysis",
        q: "Which single-digit numbers are written using ONLY straight lines? (Look at digits 1, 4, 7).",
        ans: "<strong>Answer:</strong><br>• The digits <strong>1, 4, and 7</strong> can be written using only straight lines.<br>(Digit 1 has 1 standing line; digit 4 has standing, sleeping, and slanting lines; digit 7 has sleeping and slanting lines).",
        marks: 2,
        rubric: [{ key: "Identified 1, 4, 7", marks: "1 M" }, { key: "Explanation of lines", marks: "1 M" }]
      },
      {
        category: "Number Line Analysis",
        q: "Which single-digit number is made of exactly ONE continuous curved line?",
        ans: "<strong>Answer:</strong><br>The digit <strong>0</strong> (and digit 8 has curved loops). Digit 0 is 1 smooth continuous curved line.",
        marks: 1,
        rubric: [{ key: "Digit 0 identified", marks: "1 M" }]
      },
      {
        category: "Drawing with Objects",
        q: "What kind of line do you get if you trace along:<br>(a) The side edge of a ruler?<br>(b) The edge of a round steel bangle?",
        ans: "<strong>Answer:</strong><br>(a) Ruler edge: A <strong>straight line</strong> (standing, sleeping, or slanting).<br>(b) Steel bangle edge: A <strong>curved line</strong> (circle).",
        marks: 2,
        rubric: [{ key: "Ruler: straight line", marks: "1 M" }, { key: "Bangle: curved line", marks: "1 M" }]
      },
      {
        category: "Dancing Stick Figures",
        q: "In a Warli folk painting, figures are drawn with lines and triangles. How are arms shown when dancing with joy?",
        ans: "<strong>Answer:</strong><br>• The arms are shown using <strong>slanting lines</strong> raised upwards toward the sky, or <strong>curved arcs</strong> joining hands in a circle.",
        marks: 2,
        rubric: [{ key: "Slanting lines / curved lines identified", marks: "2 M" }]
      },
      {
        category: "Let Us Do • Line Count in Words",
        q: "In the word 'TOP':<br>• 'T' has 1 sleeping line and 1 standing line.<br>• 'O' has 1 curved line.<br>• 'P' has 1 standing line and 1 curved line.<br>How many total straight lines are in the word 'TOP'?",
        ans: "<strong>Calculation:</strong><br>• In 'T': 1 sleeping + 1 standing = 2 straight lines.<br>• In 'O': 0 straight lines.<br>• In 'P': 1 standing line = 1 straight line.<br>• Total straight lines = 2 + 0 + 1 = <strong>3 straight lines</strong>.",
        marks: 2,
        rubric: [{ key: "Line breakdown per letter", marks: "1 M" }, { key: "Total = 3 straight lines", marks: "1 M" }]
      },
      {
        category: "Let Us Think • Slanting Lines",
        q: "Why are stairs and ladders made with slanting lines instead of standing vertical lines?",
        ans: "<strong>Answer:</strong><br>• Slanting lines provide a <strong>gentle slope</strong> that people can climb comfortably and safely without falling backwards.<br>• A purely vertical line would be too steep to walk on without climbing with ropes.",
        marks: 2,
        rubric: [{ key: "Gentle slope for climbing explained", marks: "1 M" }, { key: "Safety / balance factor", marks: "1 M" }]
      },
      {
        category: "True or False • Line Rules",
        q: "Write True or False:<br>(a) A sleeping line goes left to right like the horizon.<br>(b) You can draw a perfect circle using only straight lines.<br>(c) A triangle has 3 straight lines.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong><br>(b) <strong>False</strong> (A circle requires a curved line).<br>(c) <strong>True</strong> (A triangle has 3 straight sides).",
        marks: 3,
        rubric: [{ key: "All 3 correct (1 M each)", marks: "3 M" }]
      },
      {
        category: "Line Pattern Puzzle",
        q: "Complete the line pattern: | , — , / , | , — , / , __ , __.",
        ans: "<strong>Answer:</strong><br>The repeating rule is: Standing (|), Sleeping (—), Slanting (/).<br>The next two lines are: <strong>|</strong> (Standing) and <strong>—</strong> (Sleeping).",
        marks: 2,
        rubric: [{ key: "Repeating rule identified", marks: "1 M" }, { key: "Next two lines (| and —)", marks: "1 M" }]
      },
      {
        category: "Creative Construction",
        q: "Using 4 straight lines of equal length, what shape can you construct? What if you use 3 straight lines?",
        ans: "<strong>Answer:</strong><br>• With 4 straight lines of equal length: A <strong>Square</strong> (or Rhombus).<br>• With 3 straight lines: A <strong>Triangle</strong>.",
        marks: 2,
        rubric: [{ key: "Square for 4 equal lines", marks: "1 M" }, { key: "Triangle for 3 lines", marks: "1 M" }]
      },
      {
        category: "Line Riddle",
        q: "I am neither standing straight nor lying flat asleep. I lean over like a walking stick or a ramp. What line am I?",
        ans: "<strong>Answer:</strong><br>I am a <strong>Slanting line</strong> (Diagonal line).",
        marks: 1,
        rubric: [{ key: "Identified Slanting line", marks: "1 M" }]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { joyfulMathsPart2 };
}
