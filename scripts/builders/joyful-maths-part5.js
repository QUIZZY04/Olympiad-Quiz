// scripts/builders/joyful-maths-part5.js
// Exact Literal NCERT Questions for Joyful Mathematics Chapters 9, 10, 11, 12, 13

function makeQ(category, q, ans, marks, rubric) {
  return { category, q, ans, marks, rubric };
}

const joyfulPart5 = [
  // -------------------------------------------------------------------------
  // CHAPTER 9: Utsav (Patterns)
  // -------------------------------------------------------------------------
  {
    id: "jm9",
    num: 9,
    unit: "Unit 3: Measurement & Patterns",
    title: "Utsav",
    subtitle: "Repeating & Growing Patterns, Toran Beads & Rangoli Shapes",
    concepts: [
      "Identifying repeating units in decorative borders, torans, and fabrics.",
      "Extending shape patterns: alternating colors, sizes, and rotations.",
      "Growing patterns in numbers and blocks (e.g. 1, 2, 3... or 2, 4, 6...).",
      "Patterns in nature: day and night, seasons, animal stripes."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fffbeb" rx="10"/><circle cx="50" cy="55" r="16" fill="#f59e0b"/><polygon points="100,39 85,71 115,71" fill="#ec4899"/><circle cx="150" cy="55" r="16" fill="#f59e0b"/><polygon points="200,39 185,71 215,71" fill="#ec4899"/><circle cx="250" cy="55" r="16" fill="#f59e0b"/><polygon points="300,39 285,71 315,71" fill="#ec4899"/><circle cx="350" cy="55" r="16" fill="#f59e0b"/><polygon points="400,39 385,71 415,71" fill="#ec4899"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309" text-anchor="middle">Repeating Toran Pattern: Circle, Triangle, Circle, Triangle...</text></svg>`,
    cbq: {
      title: "Diwali Toran Decoration Case Study",
      text: "During Diwali utsav, Priya makes a door toran using green mango leaves and yellow marigold flowers in the pattern: Leaf, Flower, Leaf, Flower, Leaf, Flower.",
      question: "What comes next in Priya's toran pattern after the flower? How many leaves will she need if her toran has 6 flowers?",
      answer: "1. After the flower, the next item in the pattern is a <strong>green mango leaf</strong>.<br>2. Since the pattern pairs 1 leaf with 1 flower, for 6 flowers she will need <strong>6 mango leaves</strong>.",
      rubric: "1.5 M for 'Leaf' identification + 1.5 M for 6 leaves calculation"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Extending Shape Patterns",
        "Look at the sequence: Circle, Square, Circle, Square, Circle, __. What shape comes next?",
        "<strong>Step-by-Step Solution:</strong><br>1. The repeating rule is alternating between Circle and Square.<br>2. After Circle comes <strong>Square</strong>.",
        2,
        [{ key: "Identified Square", marks: "1 M" }, { key: "Alternating rule explained", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Toran Bead Pattern",
        "A festival toran has beads: Red, Blue, Red, Blue, Red, __, __. Fill the next two beads.",
        "<strong>Step-by-Step Solution:</strong><br>• The pattern alternates between Red and Blue.<br>• The next two beads are: <strong>Blue, Red</strong>.",
        2,
        [{ key: "Filled Blue, then Red", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Arrow Directions",
        "Complete the pattern: ↑, ↓, ↑, ↓, ↑, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• The arrow points alternately Up and Down.<br>• The next two arrows are: <strong>↓ (Down), ↑ (Up)</strong>.",
        2,
        [{ key: "Down then Up", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Growing Pattern",
        "Look at the dots: •, ••, •••, ••••, _____. Draw the next group of dots.",
        "<strong>Step-by-Step Solution:</strong><br>1. The rule is adding 1 more dot each time (1, 2, 3, 4...).<br>2. The next group will have <strong>5 dots (•••••)</strong>.",
        2,
        [{ key: "5 dots drawn", marks: "1 M" }, { key: "Adding 1 rule stated", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Number Pattern in 2s",
        "Complete the skip pattern: 2, 4, 6, 8, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• The rule is adding 2 each time.<br>• Next numbers: 8 + 2 = <strong>10</strong>, 10 + 2 = <strong>12</strong>.",
        2,
        [{ key: "10 and 12", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Rangoli Tile Pattern",
        "In a rangoli grid, Priya colors tiles: Yellow, Green, Yellow, Green. What color should she use for the 5th tile?",
        "<strong>Step-by-Step Solution:</strong><br>• Odd positions (1st, 3rd, 5th) are Yellow.<br>• Even positions (2nd, 4th) are Green.<br>• The 5th tile will be <strong>Yellow</strong>.",
        2,
        [{ key: "Yellow color", marks: "1 M" }, { key: "Odd position reasoning", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Alternating Letter Patterns",
        "Fill the next letters: A, B, A, B, A, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Alternating between A and B.<br>• Next letters: <strong>B, A</strong>.",
        2,
        [{ key: "B, then A", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Day and Night Natural Pattern",
        "Which of these repeats as a natural pattern: Day and Night, or Broken Glass?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Day and Night</strong> is a repeating pattern because morning always follows night in a predictable cycle.<br>• Broken glass happens randomly and does not repeat.",
        2,
        [{ key: "Day and Night repeats", marks: "1 M" }, { key: "Predictable cycle explained", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Number Pattern in 5s",
        "Complete the chain: 5, 10, 15, 20, __, __.",
        "<strong>Step-by-Step Solution:</strong><br>• The rule is adding 5 each time.<br>• 20 + 5 = <strong>25</strong>.<br>• 25 + 5 = <strong>30</strong>.",
        2,
        [{ key: "25 and 30", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Saree Border Block Print",
        "A block printer stamps on cloth: Leaf pointing up, Leaf pointing right, Leaf pointing down, Leaf pointing left. What direction will the 5th stamp point?",
        "<strong>Step-by-Step Solution:</strong><br>• The pattern completes a full rotation in 4 steps.<br>• The 5th stamp repeats the 1st step: <strong>Leaf pointing up</strong>.",
        2,
        [{ key: "Points Up", marks: "1 M" }, { key: "4-step rotation rule", marks: "1 M" }]
      ),
      makeQ(
        "Activity • Zebra Stripes Pattern",
        "What two colors make the repeating pattern on a zebra's coat?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Black and White</strong> stripes alternate across the zebra's body.",
        2,
        [{ key: "Black and White", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Pattern in 10s",
        "Fill the missing numbers: 10, 20, 30, __, 50, __.",
        "<strong>Step-by-Step Solution:</strong><br>• Counting in tens: 10, 20, 30, <strong>40</strong>, 50, <strong>60</strong>.",
        2,
        [{ key: "Filled 40 and 60", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Clap and Stamp Rhythm Pattern",
        "Children play a rhythm game: Clap, Stamp, Clap, Stamp, Clap, __. What action comes next?",
        "<strong>Step-by-Step Solution:</strong><br>• Following the alternating rhythm, the next action is <strong>Stamp</strong>.",
        2,
        [{ key: "Stamp", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Find the Odd One Out in Pattern",
        "Look at the sequence: ▲, ▲, ▲, ■, ▲, ▲. Which shape breaks the pattern?",
        "<strong>Step-by-Step Solution:</strong><br>• The continuous pattern consists of triangles (▲).<br>• The square (<strong>■</strong>) breaks the pattern.",
        2,
        [{ key: "Square (■) breaks pattern", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Staircase Pattern",
        "1 block high, 2 blocks high, 3 blocks high. How many blocks high will the 4th step be?",
        "<strong>Step-by-Step Solution:</strong><br>• Each step adds 1 block.<br>• The 4th step will be <strong>4 blocks high</strong>.",
        2,
        [{ key: "4 blocks high", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Create Your Own Pattern",
        "Using a circle (O) and a cross (X), create a repeating pattern that has 6 symbols.",
        "<strong>Step-by-Step Solution:</strong><br>• Example pattern: <strong>O, X, O, X, O, X</strong> (or O, O, X, O, O, X).",
        2,
        [{ key: "Valid 6-symbol repeating pattern", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: How do I Spend my Day? (Time)
  // -------------------------------------------------------------------------
  {
    id: "jm10",
    num: 10,
    unit: "Unit 3: Measurement & Patterns",
    title: "How do I Spend my Day?",
    subtitle: "Daily Sequence, Morning to Night, Meal Times & Days of the Week",
    concepts: [
      "Sequencing daily events in chronological order from morning to bedtime.",
      "Distinguishing Morning, Afternoon, Evening, and Night.",
      "Estimating duration: activities that take a short time vs long time.",
      "Learning the seven days of the week in correct order."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="70" cy="55" r="22" fill="#fbbf24"/><text x="70" y="95" font-size="10" text-anchor="middle" fill="#92400e" font-weight="bold">Morning</text><circle cx="170" cy="55" r="22" fill="#f97316"/><text x="170" y="95" font-size="10" text-anchor="middle" fill="#9a3412" font-weight="bold">Afternoon</text><circle cx="270" cy="55" r="22" fill="#ec4899"/><text x="270" y="95" font-size="10" text-anchor="middle" fill="#831843" font-weight="bold">Evening</text><circle cx="370" cy="55" r="22" fill="#1e3a8a"/><text x="370" y="95" font-size="10" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Night</text><text x="250" y="112" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">Sequence: Morning → Afternoon → Evening → Night</text></svg>`,
    cbq: {
      title: "School Day Schedule Case Study",
      text: "Aarav wakes up at 6:30 in the morning, studies at school until 1:30 in the afternoon, plays with friends at 5:00 in the evening, and goes to sleep at 9:00 at night.",
      question: "Which of these activities happens in the evening? If tomorrow is Sunday, what day was yesterday if today is Saturday?",
      answer: "1. Playing with friends at 5:00 happens in the <strong>evening</strong>.<br>2. If today is Saturday, yesterday was <strong>Friday</strong>.",
      rubric: "1.5 M for evening activity + 1.5 M for Friday calculation"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Morning to Night Sequence",
        "Number these daily activities in the order you do them: (a) Eating dinner, (b) Brushing teeth in morning, (c) Going to sleep, (d) Eating lunch at school.",
        "<strong>Step-by-Step Solution:</strong><br>1. (b) Brushing teeth in morning → <strong>1st</strong><br>2. (d) Eating lunch at school → <strong>2nd</strong><br>3. (a) Eating dinner with family → <strong>3rd</strong><br>4. (c) Going to sleep in bed → <strong>4th</strong>",
        2,
        [{ key: "All 4 correctly sequenced", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Morning, Afternoon, Evening, Night",
        "When do you see: (a) The bright rising sun? (b) The shining moon and twinkling stars?",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Rising sun → <strong>Morning</strong>.<br>• (b) Moon and stars → <strong>Night</strong>.",
        2,
        [{ key: "Morning", marks: "1 M" }, { key: "Night", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Which Takes Longer?",
        "Tick (✓) the activity that takes more time: (a) Blinking your eyes once, or (b) Eating your lunch.",
        "<strong>Step-by-Step Solution:</strong><br>• Blinking takes just 1 second.<br>• <strong>Eating lunch takes about 15 to 20 minutes</strong>, which is much longer.<br>• Tick <strong>(b) Eating your lunch</strong>.",
        2,
        [{ key: "(b) Eating lunch takes longer", marks: "1 M" }, { key: "Comparison of time duration", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Filling Bucket vs Mug",
        "Which takes more time to fill with tap water: a large bathroom bucket or a small tea cup?",
        "<strong>Step-by-Step Solution:</strong><br>• A <strong>large bathroom bucket takes more time</strong> because it holds much more water.<br>• A tea cup fills up in just 2 seconds.",
        2,
        [{ key: "Bathroom bucket takes more time", marks: "1 M" }, { key: "Holds more water", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Seven Days of the Week",
        "Write the seven days of the week in correct order, starting from Monday.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</strong>.",
        2,
        [{ key: "All 7 days in order", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Day is Tomorrow?",
        "If today is Wednesday, what day will tomorrow be? What day was yesterday?",
        "<strong>Step-by-Step Solution:</strong><br>• Tomorrow will be <strong>Thursday</strong>.<br>• Yesterday was <strong>Tuesday</strong>.",
        2,
        [{ key: "Tomorrow = Thursday", marks: "1 M" }, { key: "Yesterday = Tuesday", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • School Prayer Time",
        "At what part of the school day does the morning prayer assembly take place?",
        "<strong>Step-by-Step Solution:</strong><br>• Morning assembly takes place at the <strong>beginning of the school day (Morning)</strong>.",
        2,
        [{ key: "Morning / start of school", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Walking vs Cycling",
        "Rohan walks to school. Simran goes on a bicycle. Who will reach school faster?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Simran on the bicycle will reach faster</strong> because cycling covers distance in less time than walking.",
        2,
        [{ key: "Bicycle is faster", marks: "1 M" }, { key: "Takes less time", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Favorite Holiday",
        "On which day of the week do most schools have a weekly holiday?",
        "<strong>Step-by-Step Solution:</strong><br>• Most schools have a weekly holiday on <strong>Sunday</strong>.",
        2,
        [{ key: "Sunday", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Meal Association",
        "Match the meal to its time: (a) Breakfast, (b) Lunch, (c) Dinner.<br>Times: [Morning, Afternoon, Night].",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Breakfast → <strong>Morning</strong><br>• (b) Lunch → <strong>Afternoon</strong><br>• (c) Dinner → <strong>Night</strong>",
        3,
        [{ key: "Breakfast = Morning", marks: "1 M" }, { key: "Lunch = Afternoon", marks: "1 M" }, { key: "Dinner = Night", marks: "1 M" }]
      ),
      makeQ(
        "Activity • Morning Routine",
        "Name two things you do in the morning before coming to school.",
        "<strong>Step-by-Step Solution:</strong><br>• Examples: <strong>Brushing teeth, taking a bath, eating breakfast, wearing school uniform</strong>.",
        2,
        [{ key: "Two valid morning activities", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Days Between",
        "Which day comes between Friday and Sunday?",
        "<strong>Step-by-Step Solution:</strong><br>• The day between Friday and Sunday is <strong>Saturday</strong>.",
        2,
        [{ key: "Saturday", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • How Many Days in a Week?",
        "How many days are there in one complete week? How many days do you go to school?",
        "<strong>Step-by-Step Solution:</strong><br>• There are <strong>7 days</strong> in one complete week.<br>• Most students attend school on <strong>5 or 6 days</strong>.",
        2,
        [{ key: "7 days in a week", marks: "1 M" }, { key: "5 or 6 school days", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Boiling Milk vs Boiling Water",
        "Does milk boil faster or does baking a large cake take longer?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Baking a cake takes longer</strong> (about 30 to 45 minutes).<br>• Boiling milk takes only a few minutes.",
        2,
        [{ key: "Baking cake takes longer", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Night Sky Observation",
        "What do you do at night when darkness falls outside and the streetlights turn on?",
        "<strong>Step-by-Step Solution:</strong><br>• In the night, we have dinner with family, read a storybook, and <strong>sleep in bed to rest</strong>.",
        2,
        [{ key: "Dinner and sleeping to rest", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 11: How Many Times? (Multiplication Readiness)
  // -------------------------------------------------------------------------
  {
    id: "jm11",
    num: 11,
    unit: "Unit 4: Equal Grouping & Money",
    title: "How Many Times?",
    subtitle: "Equal Groups, Pairs, Auto Wheels & Repeated Addition",
    concepts: [
      "Equal grouping of concrete items (groups of 2, 3, 4, 5).",
      "Repeated addition as multiplication readiness (2 + 2 + 2 = 3 times 2 = 6).",
      "Counting legs of animals and wheels of vehicles in equal groups.",
      "Fair sharing and dividing into equal piles."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f5f3ff" rx="10"/><circle cx="70" cy="50" r="12" fill="#8b5cf6"/><circle cx="100" cy="50" r="12" fill="#8b5cf6"/><rect x="55" y="30" width="60" height="40" fill="none" stroke="#7c3aed" stroke-width="2" rx="4"/><circle cx="170" cy="50" r="12" fill="#8b5cf6"/><circle cx="200" cy="50" r="12" fill="#8b5cf6"/><rect x="155" y="30" width="60" height="40" fill="none" stroke="#7c3aed" stroke-width="2" rx="4"/><circle cx="270" cy="50" r="12" fill="#8b5cf6"/><circle cx="300" cy="50" r="12" fill="#8b5cf6"/><rect x="255" y="30" width="60" height="40" fill="none" stroke="#7c3aed" stroke-width="2" rx="4"/><circle cx="370" cy="50" r="12" fill="#8b5cf6"/><circle cx="400" cy="50" r="12" fill="#8b5cf6"/><rect x="355" y="30" width="60" height="40" fill="none" stroke="#7c3aed" stroke-width="2" rx="4"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#6d28d9" text-anchor="middle">4 Groups of 2 = 2 + 2 + 2 + 2 = 8</text></svg>`,
    cbq: {
      title: "Auto-Rickshaw Stand Case Study",
      text: "At the neighborhood stand, there are 4 auto-rickshaws parked in a row. Each auto-rickshaw has exactly 3 wheels.",
      question: "How many wheels do all 4 auto-rickshaws have altogether? Write the addition sentence and the total wheel count.",
      answer: "1. Number of groups = 4. Wheels per auto = 3.<br>2. Addition sentence = 3 + 3 + 3 + 3 = <strong>12 wheels altogether</strong> (4 times 3 = 12).",
      rubric: "1.5 M for 3+3+3+3 sentence + 1.5 M for 12 wheels answer"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Pairs of Shoes",
        "There are 5 children standing outside the temple. Each child wears 1 pair (2 shoes). How many shoes are there altogether?",
        "<strong>Step-by-Step Solution:</strong><br>1. Number of children = 5<br>2. Shoes per child = 2<br>3. Repeated addition = 2 + 2 + 2 + 2 + 2 = <strong>10 shoes</strong> (5 times 2 = 10).",
        2,
        [{ key: "2+2+2+2+2 sentence", marks: "1 M" }, { key: "Answer: 10 shoes", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Legs of Dogs",
        "There are 3 dogs playing in the yard. Each dog has 4 legs. How many legs in all?",
        "<strong>Step-by-Step Solution:</strong><br>• Number of dogs = 3<br>• Legs per dog = 4<br>• 4 + 4 + 4 = <strong>12 legs altogether</strong> (3 times 4 = 12).",
        2,
        [{ key: "4 + 4 + 4 = 12", marks: "1 M" }, { key: "Answer with unit: 12 legs", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Groups of 5 Marbles",
        "Rohan has 3 bags. Each bag contains 5 shiny marbles. How many marbles does Rohan have in all?",
        "<strong>Step-by-Step Solution:</strong><br>• Bags = 3<br>• Marbles per bag = 5<br>• 5 + 5 + 5 = <strong>15 marbles</strong> (3 times 5 = 15).",
        2,
        [{ key: "5 + 5 + 5 = 15", marks: "1 M" }, { key: "Answer: 15 marbles", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Table Legs",
        "There are 2 dining tables in the hall. Each table has 4 wooden legs. How many legs in all?",
        "<strong>Step-by-Step Solution:</strong><br>• 4 + 4 = <strong>8 table legs</strong> (2 times 4 = 8).",
        2,
        [{ key: "4 + 4 = 8", marks: "1 M" }, { key: "Answer: 8 legs", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • How Many Times 2?",
        "Write as repeated addition: 4 times 2.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 times 2 means adding 2 four times:<br>• <strong>2 + 2 + 2 + 2 = 8</strong>.",
        2,
        [{ key: "2 + 2 + 2 + 2 = 8", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Birds in Pairs",
        "There are 4 pairs of pigeons perched on the ledge. How many pigeons is that?",
        "<strong>Step-by-Step Solution:</strong><br>• 1 pair = 2 pigeons<br>• 4 pairs = 2 + 2 + 2 + 2 = <strong>8 pigeons</strong>.",
        2,
        [{ key: "1 pair = 2", marks: "1 M" }, { key: "4 pairs = 8 pigeons", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Flower Petals",
        "A flower has 5 petals. How many petals do 2 such flowers have?",
        "<strong>Step-by-Step Solution:</strong><br>• 5 + 5 = <strong>10 petals</strong> (2 times 5 = 10).",
        2,
        [{ key: "5 + 5 = 10", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tricycle Wheels",
        "Each tricycle has 3 wheels. How many wheels do 3 tricycles have?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 3 + 3 = <strong>9 wheels</strong> (3 times 3 = 9).",
        2,
        [{ key: "3 + 3 + 3 = 9", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Equal Sharing into 2 Piles",
        "Mother has 8 laddoos. She shares them equally between Ravi and Meena. How many laddoos does each child get?",
        "<strong>Step-by-Step Solution:</strong><br>1. Total laddoos = 8<br>2. 8 shared equally into 2 groups: 4 + 4 = 8.<br>3. Each child gets <strong>4 laddoos</strong>.",
        2,
        [{ key: "4 + 4 = 8 sharing", marks: "1 M" }, { key: "Each gets 4 laddoos", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Repeated Addition of 10",
        "Find the sum: 10 + 10 + 10 + 10 = __. How many times 10 is this?",
        "<strong>Step-by-Step Solution:</strong><br>• 10 + 10 + 10 + 10 = <strong>40</strong>.<br>• This is <strong>4 times 10</strong>.",
        2,
        [{ key: "Sum = 40", marks: "1 M" }, { key: "4 times 10", marks: "1 M" }]
      ),
      makeQ(
        "Word Problem • Crayons in Packets",
        "There are 2 packets with 6 crayons in each packet. How many crayons in total?",
        "<strong>Step-by-Step Solution:</strong><br>• 6 + 6 = <strong>12 crayons</strong> (2 times 6 = 12).",
        2,
        [{ key: "6 + 6 = 12", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Hands and Fingers",
        "4 children hold up both hands. How many fingers is that in total? (Count in tens).",
        "<strong>Step-by-Step Solution:</strong><br>• Each child has 10 fingers on two hands.<br>• 4 children = 10 + 10 + 10 + 10 = <strong>40 fingers</strong>.",
        2,
        [{ key: "10 + 10 + 10 + 10 = 40", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Cat Whiskers",
        "A kitten has 3 whiskers on the left cheek and 3 whiskers on the right cheek. How many whiskers in all?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 3 = <strong>6 whiskers</strong>.",
        2,
        [{ key: "3 + 3 = 6", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Bicycle Wheels",
        "How many wheels do 5 bicycles have? Count in 2s.",
        "<strong>Step-by-Step Solution:</strong><br>• 2, 4, 6, 8, 10.<br>• 5 bicycles have <strong>10 wheels</strong>.",
        2,
        [{ key: "Skip counting in 2s", marks: "1 M" }, { key: "Answer: 10 wheels", marks: "1 M" }]
      ),
      makeQ(
        "Mental Math • Times Meaning",
        "What does '3 times 4' mean in addition?",
        "<strong>Step-by-Step Solution:</strong><br>• '3 times 4' means adding 4 three times: <strong>4 + 4 + 4 = 12</strong>.",
        2,
        [{ key: "4 + 4 + 4 = 12", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Equal Piles of Apples",
        "A fruit seller has 12 apples and puts 4 apples in each tray. How many trays does he need?",
        "<strong>Step-by-Step Solution:</strong><br>• 4 + 4 + 4 = 12.<br>• The seller needs <strong>3 trays</strong>.",
        2,
        [{ key: "Identified 3 trays", marks: "1 M" }, { key: "4 + 4 + 4 = 12", marks: "1 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 12: How Much Can We Spend? (Money)
  // -------------------------------------------------------------------------
  {
    id: "jm12",
    num: 12,
    unit: "Unit 4: Equal Grouping & Money",
    title: "How Much Can We Spend?",
    subtitle: "Indian Currency: Coins ₹1, ₹2, ₹5, ₹10, Notes ₹10, ₹20 & Toy Bills",
    concepts: [
      "Recognizing Indian coins: ₹1, ₹2, ₹5, ₹10.",
      "Recognizing currency notes: ₹10 and ₹20 notes.",
      "Combining coins to pay an exact amount (e.g. ₹7 = ₹5 + ₹2).",
      "Calculating total cost of items bought at a stationary/toy shop.",
      "Calculating return change after payment."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><circle cx="70" cy="55" r="20" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/><text x="70" y="60" font-size="12" fill="#1e293b" font-weight="bold" text-anchor="middle">₹1</text><circle cx="130" cy="55" r="22" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/><text x="130" y="60" font-size="12" fill="#1e293b" font-weight="bold" text-anchor="middle">₹2</text><circle cx="200" cy="55" r="24" fill="#fbbf24" stroke="#d97706" stroke-width="2"/><text x="200" y="61" font-size="13" fill="#78350f" font-weight="bold" text-anchor="middle">₹5</text><circle cx="280" cy="55" r="26" fill="#fde68a" stroke="#b45309" stroke-width="3"/><text x="280" y="61" font-size="13" fill="#78350f" font-weight="bold" text-anchor="middle">₹10</text><rect x="340" y="35" width="120" height="45" fill="#fecdd3" stroke="#e11d48" stroke-width="2" rx="4"/><text x="400" y="62" font-size="14" fill="#9f1239" font-weight="bold" text-anchor="middle">₹20 Note</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#047857" text-anchor="middle">Indian Coins &amp; Currency Notes</text></svg>`,
    cbq: {
      title: "Stationery Shop Purchase Case Study",
      text: "Rohan goes to the stationery shop with a ₹20 note. He buys a wooden pencil for ₹5 and an eraser for ₹3.",
      question: "What is the total cost of the pencil and eraser? How much change should the shopkeeper return to Rohan from his ₹20 note?",
      answer: "1. Total cost = ₹5 + ₹3 = <strong>₹8</strong>.<br>2. Change returned = ₹20 - ₹8 = <strong>₹12</strong> (e.g., a ₹10 coin and a ₹2 coin).",
      rubric: "1.5 M for ₹5 + ₹3 = ₹8 + 1.5 M for ₹20 - ₹8 = ₹12 change"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Identifying Coins",
        "Name the four coins commonly used in India shown in your textbook.",
        "<strong>Step-by-Step Solution:</strong><br>• The four common Indian coins are: <strong>₹1, ₹2, ₹5, and ₹10</strong>.",
        2,
        [{ key: "All 4 coins named (₹1, ₹2, ₹5, ₹10)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Making ₹6 with Coins",
        "How can you pay ₹6 using two coins?",
        "<strong>Step-by-Step Solution:</strong><br>• Take one ₹5 coin and one ₹1 coin.<br>• ₹5 + ₹1 = <strong>₹6</strong>.",
        2,
        [{ key: "₹5 + ₹1 = ₹6", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Making ₹7 with Coins",
        "How can you pay ₹7 using two coins?",
        "<strong>Step-by-Step Solution:</strong><br>• Take one ₹5 coin and one ₹2 coin.<br>• ₹5 + ₹2 = <strong>₹7</strong>.",
        2,
        [{ key: "₹5 + ₹2 = ₹7", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Making ₹10 with ₹5 Coins",
        "How many ₹5 coins do you need to make ₹10?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹5 = ₹10.<br>• You need <strong>two ₹5 coins</strong>.",
        2,
        [{ key: "Two ₹5 coins", marks: "1 M" }, { key: "₹5 + ₹5 = ₹10", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Making ₹10 with ₹2 Coins",
        "How many ₹2 coins make ₹10?",
        "<strong>Step-by-Step Solution:</strong><br>• Count in 2s: 2, 4, 6, 8, 10 (5 times).<br>• You need <strong>five ₹2 coins</strong>.",
        2,
        [{ key: "Five ₹2 coins", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Buying an Ice Candy",
        "An orange ice candy costs ₹10. Simran pays with two ₹5 coins. Did she pay the exact amount?",
        "<strong>Step-by-Step Solution:</strong><br>• Two ₹5 coins = ₹5 + ₹5 = ₹10.<br>• <strong>Yes</strong>, she paid the exact amount.",
        2,
        [{ key: "Yes, exact amount", marks: "1 M" }, { key: "₹5 + ₹5 = ₹10", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Total Bill at Toy Shop",
        "A toy top costs ₹6 and a balloon costs ₹2. What is the total cost?",
        "<strong>Step-by-Step Solution:</strong><br>• Cost of top = ₹6<br>• Cost of balloon = ₹2<br>• Total cost = ₹6 + ₹2 = <strong>₹8</strong>.",
        2,
        [{ key: "₹6 + ₹2 = ₹8", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Return Change Calculation",
        "Kabir buys a notebook for ₹15. He hands the shopkeeper a ₹20 note. How much change does Kabir get back?",
        "<strong>Step-by-Step Solution:</strong><br>• Money given = ₹20<br>• Cost of notebook = ₹15<br>• Change returned = ₹20 - ₹15 = <strong>₹5</strong>.",
        2,
        [{ key: "₹20 - ₹15 = ₹5", marks: "1 M" }, { key: "Answer: ₹5", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Coin Rubbing Activity",
        "How do you make a coin print on paper using a pencil?",
        "<strong>Step-by-Step Solution:</strong><br>1. Place a coin underneath a sheet of paper.<br>2. Rub gently over the paper with a soft pencil.<br>3. The design and number (₹1, ₹2, ₹5) appears like magic on paper!",
        2,
        [{ key: "Place coin under paper", marks: "1 M" }, { key: "Rub with pencil", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Making ₹20 with ₹10 Notes",
        "How many ₹10 notes make a ₹20 note?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹10 + ₹10 = ₹20.<br>• It takes <strong>two ₹10 notes</strong> to make ₹20.",
        2,
        [{ key: "Two ₹10 notes", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Can You Buy Both?",
        "Aman has ₹10 in his pocket. A toy car costs ₹8 and a ball costs ₹5. Can Aman buy both toys together?",
        "<strong>Step-by-Step Solution:</strong><br>1. Total cost of both = ₹8 + ₹5 = ₹13.<br>2. Aman only has ₹10.<br>3. Since ₹13 is more than ₹10, <strong>No, Aman cannot buy both toys together</strong> (he is short by ₹3).",
        2,
        [{ key: "No, total is ₹13 > ₹10", marks: "1 M" }, { key: "Short by ₹3 noted", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Match Money to Amount",
        "Match the coin combinations to their total:<br>(a) ₹5 + ₹5<br>(b) ₹5 + ₹2 + ₹1<br>(c) ₹2 + ₹2 + ₹1",
        "<strong>Step-by-Step Solution:</strong><br>• (a) ₹5 + ₹5 = <strong>₹10</strong><br>• (b) ₹5 + ₹2 + ₹1 = <strong>₹8</strong><br>• (c) ₹2 + ₹2 + ₹1 = <strong>₹5</strong>",
        3,
        [{ key: "All 3 correctly evaluated", marks: "3 M" }]
      ),
      makeQ(
        "Activity • Indian Rupee Symbol",
        "What is the official currency symbol of India? Draw it.",
        "<strong>Step-by-Step Solution:</strong><br>• The Indian Rupee symbol is <strong>₹</strong>.<br>• It is derived from the Devanagari letter 'र' with a horizontal stroke across the top.",
        2,
        [{ key: "Symbol ₹ identified", marks: "1 M" }, { key: "Devanagari 'र' origin", marks: "1 M" }]
      ),
      makeQ(
        "Word Problem • Two Candies",
        "One chocolate bar costs ₹4. How much do two chocolate bars cost?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹4 + ₹4 = <strong>₹8</strong>.",
        2,
        [{ key: "₹4 + ₹4 = ₹8", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Making ₹15 with Coins and Notes",
        "Name one way to pay ₹15 using a note and a coin.",
        "<strong>Step-by-Step Solution:</strong><br>• One <strong>₹10 note</strong> and one <strong>₹5 coin</strong> = ₹10 + ₹5 = <strong>₹15</strong>.",
        2,
        [{ key: "₹10 note + ₹5 coin", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Toy Price Tags",
        "A teddy bear has a price tag of ₹18. Ravi pays with a ₹20 note. What coin should the shopkeeper give him back?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹20 - ₹18 = ₹2.<br>• The shopkeeper should give him a <strong>₹2 coin</strong>.",
        2,
        [{ key: "₹2 coin", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Saving in a Piggy Bank",
        "Riya drops a ₹5 coin into her piggy bank on Monday and a ₹5 coin on Tuesday. How much money has she saved?",
        "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹5 = <strong>₹10</strong> saved.",
        2,
        [{ key: "₹10 saved", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 13: So Many Toys and Puzzles (Data Handling)
  // -------------------------------------------------------------------------
  {
    id: "jm13",
    num: 13,
    unit: "Unit 4: Equal Grouping & Money",
    title: "So Many Toys and Puzzles",
    subtitle: "Counting Collections, Tally Tables, Most & Least Frequent Toys",
    concepts: [
      "Collecting and recording data by counting objects in a picture.",
      "Organizing information into a simple frequency table.",
      "Finding which item appears the most number of times (most popular).",
      "Finding which item appears the least number of times.",
      "Counting letters in names and comparing lengths."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f8fafc" rx="10"/><rect x="40" y="30" width="80" height="20" fill="#3b82f6" rx="4"/><text x="130" y="45" font-size="12" fill="#1e3a8a" font-weight="bold">Cars: 4</text><rect x="40" y="55" width="120" height="20" fill="#10b981" rx="4"/><text x="170" y="70" font-size="12" fill="#065f46" font-weight="bold">Dolls: 6</text><rect x="40" y="80" width="60" height="20" fill="#f59e0b" rx="4"/><text x="110" y="95" font-size="12" fill="#92400e" font-weight="bold">Balls: 3</text><text x="360" y="65" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Most: Dolls (6)</text><text x="360" y="85" font-family="sans-serif" font-size="12" font-weight="700" fill="#64748b" text-anchor="middle">Least: Balls (3)</text></svg>`,
    cbq: {
      title: "Classroom Toy Day Survey Case Study",
      text: "On Toy Day, the teacher counts toys brought by Class 1 students: 5 toy cars, 7 stuffed teddy bears, and 2 wooden train sets.",
      question: "Which toy was brought by the most students? Which toy was brought by the least students? How many total toys were brought?",
      answer: "1. Most students brought <strong>teddy bears (7)</strong>.<br>2. Least students brought <strong>wooden train sets (2)</strong>.<br>3. Total toys = 5 + 7 + 2 = <strong>14 toys in all</strong>.",
      rubric: "1 M for most + 1 M for least + 1 M for total sum"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Counting Toys on the Shelf",
        "Look at the toy shelf picture: Count the toys:<br>(a) How many toy cars are there? (Count: 4)<br>(b) How many footballs are there? (Count: 6)<br>(c) How many teddy bears are there? (Count: 3)",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Toy cars = <strong>4</strong><br>• (b) Footballs = <strong>6</strong><br>• (c) Teddy bears = <strong>3</strong>",
        2,
        [{ key: "All 3 counts correct", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Most and Least",
        "From the shelf above (Cars: 4, Footballs: 6, Teddy bears: 3):<br>(a) Which toy is the most in number?<br>(b) Which toy is the least in number?",
        "<strong>Step-by-Step Solution:</strong><br>• (a) <strong>Footballs (6)</strong> are the most in number.<br>• (b) <strong>Teddy bears (3)</strong> are the least in number.",
        2,
        [{ key: "Most = Footballs", marks: "1 M" }, { key: "Least = Teddy bears", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Counting Letters in Names",
        "Count the letters in each friend's name:<br>(a) AMAN<br>(b) SIMRAN<br>(c) OM<br>Which name has the most letters?",
        "<strong>Step-by-Step Solution:</strong><br>• AMAN = 4 letters<br>• SIMRAN = 6 letters<br>• OM = 2 letters<br>• <strong>SIMRAN</strong> has the most letters (6 letters).",
        2,
        [{ key: "All counts correct (4, 6, 2)", marks: "1 M" }, { key: "SIMRAN has most", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Shortest Name",
        "From the three names above (AMAN, SIMRAN, OM), which name has the least letters?",
        "<strong>Step-by-Step Solution:</strong><br>• OM has only 2 letters.<br>• Therefore, <strong>OM has the least letters (shortest name)</strong>.",
        2,
        [{ key: "OM has least letters", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Fruit Basket Tally",
        "In a basket: 5 Apples, 8 Bananas, 3 Oranges. How many total fruits are in the basket?",
        "<strong>Step-by-Step Solution:</strong><br>• Apples = 5<br>• Bananas = 8<br>• Oranges = 3<br>• Total fruits = 5 + 8 + 3 = <strong>16 fruits altogether</strong>.",
        2,
        [{ key: "5 + 8 + 3 = 16", marks: "1 M" }, { key: "Answer with unit: 16 fruits", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Comparing Quantities",
        "In the fruit basket above (Apples: 5, Bananas: 8), how many more bananas are there than apples?",
        "<strong>Step-by-Step Solution:</strong><br>• Bananas = 8<br>• Apples = 5<br>• Difference = 8 - 5 = <strong>3 more bananas</strong>.",
        2,
        [{ key: "8 - 5 = 3", marks: "1 M" }, { key: "Answer: 3 more bananas", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Counting Animals on a Farm",
        "A farm picture shows: 3 Cows, 5 Goats, 2 Horses, and 4 Ducks. Put this into a table and find the total animals.",
        "<strong>Step-by-Step Solution:</strong><br>• Cows: 3<br>• Goats: 5<br>• Horses: 2<br>• Ducks: 4<br>• Total = 3 + 5 + 2 + 4 = <strong>14 farm animals</strong>.",
        2,
        [{ key: "Table values correct", marks: "1 M" }, { key: "Total 14 animals", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Which Animal is Most?",
        "From the farm data above (Cows: 3, Goats: 5, Horses: 2, Ducks: 4), which animal is seen the most?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Goats (5)</strong> are seen the most on the farm.",
        2,
        [{ key: "Goats (5)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Which Animal is Least?",
        "From the farm data above, which animal is seen the least?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Horses (2)</strong> are seen the least.",
        2,
        [{ key: "Horses (2)", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Shoes in the Rack",
        "Shoe sizes in a class: Size 1: 4 children, Size 2: 9 children, Size 3: 5 children. Which shoe size is worn by the most children?",
        "<strong>Step-by-Step Solution:</strong><br>• Size 1 = 4<br>• Size 2 = 9<br>• Size 3 = 5<br>• <strong>Size 2 is worn by the most children</strong> (9 children).",
        2,
        [{ key: "Size 2 identified", marks: "1 M" }, { key: "Highest count (9)", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Same Letter Count",
        "Look at two names: RAJU and NEHA. Do they have the same number of letters?",
        "<strong>Step-by-Step Solution:</strong><br>• RAJU = 4 letters<br>• NEHA = 4 letters<br>• <strong>Yes</strong>, both names have exactly 4 letters.",
        2,
        [{ key: "Yes, both have 4 letters", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Color Preference Chart",
        "Children vote for favorite color: Red: 7 votes, Blue: 7 votes, Yellow: 3 votes. Did Red and Blue get equal votes?",
        "<strong>Step-by-Step Solution:</strong><br>• Red = 7 votes<br>• Blue = 7 votes<br>• <strong>Yes</strong>, Red and Blue got equal votes (7 = 7).",
        2,
        [{ key: "Yes, equal votes (7 = 7)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Least Liked Color",
        "From the color vote above (Red: 7, Blue: 7, Yellow: 3), which color was chosen by the least students?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Yellow (3 votes)</strong> was chosen by the least students.",
        2,
        [{ key: "Yellow (3 votes)", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Drawing Circles for Data",
        "Represent with dots: 3 Pencils (•••), 5 Erasers (•••••). Which group has more dots?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Erasers (5 dots)</strong> has more dots than Pencils (3 dots).",
        2,
        [{ key: "Erasers have more dots", marks: "2 M" }]
      ),
      makeQ(
        "Mental Math • Total Items from Table",
        "A pencil case holds 2 blue pens, 3 red pens, and 4 black pens. How many pens in all?",
        "<strong>Step-by-Step Solution:</strong><br>• 2 + 3 + 4 = <strong>9 pens in all</strong>.",
        2,
        [{ key: "2 + 3 + 4 = 9", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Why Do We Make Tables?",
        "Why is it helpful to count and organize items in a table instead of keeping them in a mixed heap?",
        "<strong>Step-by-Step Solution:</strong><br>1. A table makes it easy to see exact counts quickly without recounting.<br>2. We can immediately tell which item is the most, which is the least, and the total.",
        2,
        [{ key: "Quick and easy to read", marks: "1 M" }, { key: "Identifies most/least immediately", marks: "1 M" }]
      )
    ]
  }
];

module.exports = { joyfulPart5 };
