// scripts/builders/math-magic-part2.js
// Exact Literal NCERT Textbook Questions for Math-Magic Book 1: Chapters 5 to 8

function makeQ(category, q, ans, marks, rubric) {
  return { category, q, ans, marks, rubric };
}

const mathMagicPart2 = [
  // -------------------------------------------------------------------------
  // CHAPTER 5: Numbers from Ten to Twenty
  // -------------------------------------------------------------------------
  {
    id: "mm5",
    num: 5,
    unit: "Unit 2: Math-Magic Classic",
    title: "Numbers from Ten to Twenty",
    subtitle: "Bundles of 10, Counting 10-20, Tens and Ones, Addition & Subtraction",
    concepts: [
      "Making groups of 10 from loose objects (matchsticks, pencils).",
      "Counting from 10 to 20: 10 + 1 = 11 up to 10 + 10 = 20.",
      "Partitioning numbers into Tens and Ones.",
      "Comparing numbers from 10 to 20: greater than and smaller than.",
      "Addition and subtraction within 20."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 5: Numbers from Ten to Twenty</text></svg>`,
    cbq: {
      title: "Matchstick Bundling Project Case Study",
      text: "Deepak has 14 loose matchsticks on his work table. His teacher asks him to make a bundle of 10 matchsticks using a red rubber band.",
      question: "How many bundles of 10 can Deepak make? How many loose matchsticks will remain outside the bundle?",
      answer: "1. 14 has 1 ten and 4 ones.<br>2. Deepak can make <strong>1 bundle of 10 matchsticks</strong>.<br>3. <strong>4 loose matchsticks</strong> will remain outside.",
      rubric: "1.5 M for 1 bundle of 10 + 1.5 M for 4 loose sticks"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Bundle of 10 Matchsticks",
        "How many loose matchsticks make 1 bundle of 10? What do we call 10 ones?",
        "<strong>Step-by-Step Solution:</strong><br>• Exactly <strong>10 loose matchsticks</strong> tied together make 1 bundle.<br>• 10 ones is called <strong>1 Ten</strong>.",
        2,
        [{ key: "10 loose matchsticks", marks: "1 M" }, { key: "10 ones = 1 Ten", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make a Group of 10",
        "Look at 14 ice-cream cups. Circle a group of 10 cups. How many cups remain uncircled?",
        "<strong>Step-by-Step Solution:</strong><br>• Total cups = 14<br>• Circled group = 10 (1 ten)<br>• Uncircled cups = 14 - 10 = <strong>4 cups</strong>.",
        2,
        [{ key: "Group of 10 circled", marks: "1 M" }, { key: "4 remaining", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting 10 to 15",
        "Write the numbers from 10 to 15 in order with their number names.",
        "<strong>Step-by-Step Solution:</strong><br>• 10 = Ten<br>• 11 = Eleven<br>• 12 = Twelve<br>• 13 = Thirteen<br>• 14 = Fourteen<br>• 15 = Fifteen",
        2,
        [{ key: "All 6 numerals & names correct", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting 16 to 20",
        "Write the numbers from 16 to 20 in order with their number names.",
        "<strong>Step-by-Step Solution:</strong><br>• 16 = Sixteen<br>• 17 = Seventeen<br>• 18 = Eighteen<br>• 19 = Nineteen<br>• 20 = Twenty",
        2,
        [{ key: "All 5 numerals & names correct", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones for 18",
        "In the number 18, how many tens and how many ones are there?",
        "<strong>Step-by-Step Solution:</strong><br>• In 18, there is <strong>1 Ten and 8 Ones</strong> (10 + 8 = 18).",
        2,
        [{ key: "1 Ten and 8 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones for 15",
        "Write Tens and Ones for 15.",
        "<strong>Step-by-Step Solution:</strong><br>• 15 = <strong>1 Ten and 5 Ones</strong> (10 + 5 = 15).",
        2,
        [{ key: "1 Ten and 5 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones for 12",
        "Write Tens and Ones for 12.",
        "<strong>Step-by-Step Solution:</strong><br>• 12 = <strong>1 Ten and 2 Ones</strong>.",
        2,
        [{ key: "1 Ten and 2 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones for 20",
        "How many tens and how many ones make 20?",
        "<strong>Step-by-Step Solution:</strong><br>• 20 = <strong>2 Tens and 0 Ones</strong> (10 + 10 = 20).",
        2,
        [{ key: "2 Tens and 0 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Circle the Bigger Number (Teens)",
        "Circle the bigger number: (a) 11 and 13, (b) 16 and 14.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 13 is bigger than 11 → Circle <strong>13</strong>.<br>• (b) 16 is bigger than 14 → Circle <strong>16</strong>.",
        2,
        [{ key: "13 circled", marks: "1 M" }, { key: "16 circled", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Circle the Smaller Number (Teens)",
        "Circle the smaller number: (a) 20 and 10, (b) 12 and 17.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 10 is smaller than 20 → Circle <strong>10</strong>.<br>• (b) 12 is smaller than 17 → Circle <strong>12</strong>.",
        2,
        [{ key: "10 circled", marks: "1 M" }, { key: "12 circled", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Biggest Number Among Three",
        "Circle the biggest number among: 13, 3, 9.",
        "<strong>Step-by-Step Solution:</strong><br>• 13 is a 2-digit teen number (1 ten and 3 ones).<br>• 3 and 9 are 1-digit numbers.<br>• <strong>13 is the biggest number</strong>.",
        2,
        [{ key: "13 is biggest", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Smallest Number Among Three",
        "Circle the smallest number among: 12, 15, 20.",
        "<strong>Step-by-Step Solution:</strong><br>• Comparing: 12 < 15 < 20.<br>• <strong>12 is the smallest number</strong>.",
        2,
        [{ key: "12 is smallest", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Addition within 20 (4 + 5)",
        "Solve: 4 + 5 = __ and 14 + 5 = __.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 + 5 = <strong>9</strong><br>• 14 + 5 = 10 + (4 + 5) = 10 + 9 = <strong>19</strong>.",
        2,
        [{ key: "4+5 = 9", marks: "1 M" }, { key: "14+5 = 19", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Addition 8 + 7",
        "Solve: 8 + 7 = __ using the 'Make 10' method.",
        "<strong>Step-by-Step Solution:</strong><br>1. 8 needs 2 to make 10.<br>2. 7 = 2 + 5.<br>3. 8 + 2 = 10.<br>4. 10 + 5 = <strong>15</strong>.",
        2,
        [{ key: "Make 10 steps shown", marks: "1 M" }, { key: "Answer: 15", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Addition 11 + 5",
        "Add:<br>&nbsp;&nbsp;11<br>+ &nbsp;5<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;11<br>+ &nbsp;5<br>---<br>&nbsp;&nbsp;<strong>16</strong>",
        2,
        [{ key: "Answer 16", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtraction 17 - 5",
        "Subtract:<br>&nbsp;&nbsp;17<br>- &nbsp;5<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;17<br>- &nbsp;5<br>---<br>&nbsp;&nbsp;<strong>12</strong> (7 - 5 = 2, bring down 1 ten).",
        2,
        [{ key: "Answer 12", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtraction 18 - 8",
        "Solve: 18 - 8 = __.",
        "<strong>Step-by-Step Solution:</strong><br>• 18 = 10 + 8.<br>• Subtracting 8 leaves <strong>10</strong>.",
        2,
        [{ key: "Answer 10", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtraction 15 - 3",
        "Solve: 15 - 3 = __.",
        "<strong>Step-by-Step Solution:</strong><br>• 5 - 3 = 2.<br>• 10 + 2 = <strong>12</strong>.",
        2,
        [{ key: "Answer 12", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Rahul's Apples",
        "Rahul has 8 apples. Sonu gave him 7 more apples. How many apples does Rahul have now?",
        "<strong>Step-by-Step Solution:</strong><br>• 8 + 7 = <strong>15 apples</strong>.",
        2,
        [{ key: "8 + 7 = 15 apples", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Sohan's Bananas",
        "Sohan had 12 bananas. He ate 4 bananas. How many bananas are left?",
        "<strong>Step-by-Step Solution:</strong><br>• 12 - 4 = <strong>8 bananas left</strong>.",
        2,
        [{ key: "12 - 4 = 8 bananas", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Just After 18?",
        "What number comes just before 13? What number comes just after 18?",
        "<strong>Step-by-Step Solution:</strong><br>• Just before 13 is <strong>12</strong>.<br>• Just after 18 is <strong>19</strong>.",
        2,
        [{ key: "Before 13 = 12", marks: "1 M" }, { key: "After 18 = 19", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Between 14 and 16",
        "What number lies between 14 and 16?",
        "<strong>Step-by-Step Solution:</strong><br>• The number between 14 and 16 is <strong>15</strong>.",
        2,
        [{ key: "15", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Match Numeral to Sticks",
        "Match: (1) 1 bundle of 10 and 6 sticks → 16. (2) 1 bundle of 10 and 9 sticks → 19.",
        "<strong>Step-by-Step Solution:</strong><br>• 10 + 6 = 16<br>• 10 + 9 = 19",
        2,
        [{ key: "Matches verified", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Making 20",
        "How many ones must be added to 14 to make 20?",
        "<strong>Step-by-Step Solution:</strong><br>• 20 - 14 = <strong>6 ones</strong>.",
        2,
        [{ key: "6 ones", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: Time
  // -------------------------------------------------------------------------
  {
    id: "mm6",
    num: 6,
    unit: "Unit 2: Math-Magic Classic",
    title: "Time",
    subtitle: "Daily Routines, Morning to Night Sequence & Activity Duration",
    concepts: [
      "Sequencing daily life routines: waking up, brushing, breakfast, school, playing, studying, sleeping.",
      "Identifying Morning, Afternoon, Evening, and Night.",
      "Comparing duration: activities taking longer vs shorter time.",
      "Sequencing steps of making chapati from kneading flour to baking."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 6: Time</text></svg>`,
    cbq: {
      title: "Making Chapati from Wheat Case Study",
      text: "Mother wants to make hot chapatis for lunch. She takes flour from the tin, pours water, kneads the dough, rolls a ball on the rolling board (chakla), and bakes it on the tawa.",
      question: "What is the first step in making chapati? Does kneading dough take place before or after baking on the tawa?",
      answer: "1. The first step is <strong>taking flour from the tin into a bowl</strong>.<br>2. Kneading the dough takes place <strong>before</strong> baking on the tawa.",
      rubric: "1.5 M for taking flour first + 1.5 M for kneading before baking"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Morning Routine Sequence",
        "Number the activities in the order you do them in the morning: (a) Eating breakfast, (b) Waking up from bed, (c) Wearing school uniform, (d) Brushing teeth.",
        "<strong>Step-by-Step Solution:</strong><br>1. (b) Waking up from bed → <strong>1st</strong><br>2. (d) Brushing teeth → <strong>2nd</strong><br>3. (c) Wearing school uniform → <strong>3rd</strong><br>4. (a) Eating breakfast → <strong>4th</strong>",
        2,
        [{ key: "All 4 correctly sequenced", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Activities Done in Morning",
        "Tick (✓) the activities you do in the morning: (a) Bathing, (b) Brushing teeth, (c) Sleeping at night.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Bathing (✓)<br>• (b) Brushing teeth (✓)<br>• Sleeping in bed is done at night.",
        2,
        [{ key: "Bathing and brushing ticked", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Activities Done in Evening",
        "Tick (✓) the activities done in the evening: (a) Playing in the park, (b) Waking up from night sleep.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Playing in the park with friends</strong> is done in the evening (✓).",
        2,
        [{ key: "Playing in park in evening", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Activities Done at Night",
        "Tick (✓) the activity done at night: (a) Going to sleep, (b) Attending morning school assembly.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Going to sleep in bed</strong> is done at night (✓).",
        2,
        [{ key: "Going to sleep at night", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Chapati Making Steps",
        "Put the steps of making a chapati in order from 1 to 5: Knead dough, Bake on fire, Roll into circle, Take flour in a dish, Light the stove.",
        "<strong>Step-by-Step Solution:</strong><br>1. Take flour in a dish<br>2. Knead dough with water<br>3. Roll into a circle on chakla<br>4. Light the stove<br>5. Bake on fire (tawa)",
        2,
        [{ key: "Correct 5-step sequence", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Which Activity Takes Longer? (Bucket vs Cup)",
        "Tick (✓) the activity that takes longer: (a) Filling a bucket with water from a tap, (b) Filling a water glass.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Filling a bucket takes longer</strong> (tick ✓) because a bucket holds many liters of water.",
        2,
        [{ key: "Filling bucket takes longer", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Walking vs Running",
        "Which takes less time: Walking to the garden or Running to the garden?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Running takes less time</strong> because running is faster than walking.",
        2,
        [{ key: "Running takes less time", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Cycle vs Bus",
        "Rohan goes to a distant city by bicycle. Priya goes by express bus. Who will reach earlier?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Priya by express bus will reach earlier</strong> because buses travel much faster than bicycles.",
        2,
        [{ key: "Bus reaches earlier", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Day or Night?",
        "When do owls wake up and hunt: during the day or during the night?",
        "<strong>Step-by-Step Solution:</strong><br>• Owls wake up and hunt <strong>during the night</strong> (nocturnal birds).",
        2,
        [{ key: "During the night", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Meal Sequencing",
        "Which meal is eaten in the afternoon: Breakfast or Lunch?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Lunch</strong> is eaten in the afternoon.",
        2,
        [{ key: "Lunch", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • Days of the Week",
        "How many days are in a week? Name the first school day of the week.",
        "<strong>Step-by-Step Solution:</strong><br>• There are <strong>7 days</strong> in a week.<br>• The first school day of the week is <strong>Monday</strong>.",
        2,
        [{ key: "7 days", marks: "1 M" }, { key: "Monday", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Holiday Day",
        "On which day do you not go to school?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Sunday</strong>.",
        2,
        [{ key: "Sunday", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Boiling Water vs Making Ice",
        "Which takes more time: boiling a cup of water or freezing water into ice in the refrigerator?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Freezing water into ice takes more time</strong> (takes several hours).<br>• Boiling water takes only 2 to 3 minutes.",
        2,
        [{ key: "Freezing ice takes more time", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Morning Sky",
        "What color is the sky when the sun rises in the morning?",
        "<strong>Step-by-Step Solution:</strong><br>• The sky looks <strong>golden-yellow, orange, or light blue</strong> when the sun rises.",
        2,
        [{ key: "Golden/orange/light blue", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Story Time",
        "At what time of day does grandma usually tell bedtime stories?",
        "<strong>Step-by-Step Solution:</strong><br>• Grandma tells bedtime stories <strong>at night</strong> before children go to sleep.",
        2,
        [{ key: "At night / bedtime", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Short Time vs Long Time",
        "Classify into 'Short time' (seconds/minutes) and 'Long time' (hours): (a) Sneezing, (b) Sleeping through the night.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Sneezing → <strong>Short time</strong> (1 second).<br>• (b) Sleeping through the night → <strong>Long time</strong> (8 hours).",
        2,
        [{ key: "Sneezing = Short time", marks: "1 M" }, { key: "Sleeping = Long time", marks: "1 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 7: Measurement
  // -------------------------------------------------------------------------
  {
    id: "mm7",
    num: 7,
    unit: "Unit 2: Math-Magic Classic",
    title: "Measurement",
    subtitle: "Longer-Shorter, Taller-Shorter, Heavier-Lighter & Handspans",
    concepts: [
      "Comparing length: Longer vs Shorter, Longest vs Shortest.",
      "Comparing height: Taller vs Shorter, Tallest vs Shortest.",
      "Comparing weight: Heavier vs Lighter, Heaviest vs Lightest.",
      "Measuring length using non-standard body parts: Handspan, Cubit, Foot, and Pace."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 7: Measurement</text></svg>`,
    cbq: {
      title: "Measuring the Carpet with Footsteps Case Study",
      text: "Meena measures the floor carpet using her footsteps and counts 12 paces. Her brother counts 9 paces on the same carpet.",
      question: "Why is Meena's count 12 while her brother's is 9? Whose steps are bigger?",
      answer: "1. Brother's steps are <strong>bigger (longer)</strong>.<br>2. Because his steps are bigger, fewer steps (9) are needed to cover the carpet.<br>3. Meena's steps are smaller, so she needed 12 footsteps.",
      rubric: "1.5 M for brother's steps are bigger + 1.5 M for fewer steps needed"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Longer and Shorter",
        "Look at two ladders: Ladder A reaches the roof, and Ladder B reaches only the window. Tick (✓) the longer ladder.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Ladder A is longer</strong> (tick ✓).",
        2,
        [{ key: "Ladder A is longer", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Shorter Rope",
        "Tick (✓) the shorter rope between Rope X (5 meters) and Rope Y (2 meters).",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Rope Y is shorter</strong> (tick ✓).",
        2,
        [{ key: "Rope Y is shorter", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Longest Pencil",
        "Look at three pencils: Red (15 cm), Blue (10 cm), Green (6 cm). Which pencil is the longest, and which is the shortest?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Longest:</strong> Red pencil (15 cm).<br>• <strong>Shortest:</strong> Green pencil (6 cm).",
        2,
        [{ key: "Longest = Red", marks: "1 M" }, { key: "Shortest = Green", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Taller and Shorter",
        "Tick (✓) the taller animal between a Giraffe and a Dog.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>Giraffe is taller</strong> (tick ✓).",
        2,
        [{ key: "Giraffe is taller", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Shorter Person",
        "Between a tall clown on stilts and a little girl, tick (✓) the shorter person.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>little girl is shorter</strong> (tick ✓).",
        2,
        [{ key: "Little girl is shorter", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tallest Tree",
        "Among three palm trees in a row, tick (✓) the tallest tree.",
        "<strong>Step-by-Step Solution:</strong><br>• Tick the <strong>tree with the highest top fronds (the tallest tree)</strong>.",
        2,
        [{ key: "Tallest tree identified", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Shortest Plant",
        "Look at a rose bush, a potted grass sprout, and a banyan tree. Which is the shortest plant?",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>grass sprout is the shortest plant</strong>.",
        2,
        [{ key: "Grass sprout is shortest", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Heavier and Lighter",
        "Tick (✓) the lighter object between a shirt and an iron lock.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>shirt is lighter</strong> (tick ✓).<br>• The iron lock is heavier.",
        2,
        [{ key: "Shirt is lighter", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Heavier Fruit",
        "Tick (✓) the heavier fruit between a Pumpkin and a Tomato.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>Pumpkin is heavier</strong> (tick ✓).",
        2,
        [{ key: "Pumpkin is heavier", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Heaviest Object",
        "Look at: A water jug, a water glass, and an iron water tank. Which is the heaviest, and which is the lightest?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Heaviest:</strong> Iron water tank.<br>• <strong>Lightest:</strong> Water glass.",
        2,
        [{ key: "Heaviest = Tank", marks: "1 M" }, { key: "Lightest = Glass", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Measuring with Handspan",
        "Measure the length of your desk using your handspan. If you count 6 handspans, what was your measuring tool?",
        "<strong>Step-by-Step Solution:</strong><br>• The measuring tool is your <strong>handspan</strong> (the distance from stretched thumb to little finger).",
        2,
        [{ key: "Handspan identified", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Measuring with Paces",
        "Measure the mat with your footsteps (paces). If the mat is 8 paces long, write the answer.",
        "<strong>Step-by-Step Solution:</strong><br>• Length of the mat = <strong>8 paces (footsteps)</strong>.",
        2,
        [{ key: "8 paces", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Measuring with Fingers",
        "Measure the width of your eraser in finger-widths. How many fingers wide is it?",
        "<strong>Step-by-Step Solution:</strong><br>• A standard eraser is approximately <strong>2 to 3 finger-widths</strong>.",
        2,
        [{ key: "2 to 3 fingers", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Measuring with Matchsticks",
        "Place matchsticks end-to-end along a notebook. If it takes 6 matchsticks, how long is the notebook?",
        "<strong>Step-by-Step Solution:</strong><br>• The notebook is <strong>6 matchsticks long</strong>.",
        2,
        [{ key: "6 matchsticks long", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Think • Seesaw Balance",
        "A monkey and a rabbit sit on a seesaw. Whose side goes down?",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>monkey's side goes down</strong> because the monkey is heavier than the rabbit.",
        2,
        [{ key: "Monkey's side goes down", marks: "1 M" }, { key: "Monkey is heavier", marks: "1 M" }]
      ),
      makeQ(
        "Activity • Feather vs Brick",
        "Drop a pigeon feather and a clay brick. Which object feels heavier in your hand?",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>clay brick feels much heavier</strong>.<br>• The feather is extremely light.",
        2,
        [{ key: "Brick is heavier", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Longest Ribbon",
        "Among ribbons of 5 cm, 12 cm, and 8 cm, which is the longest?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>12 cm ribbon is the longest</strong>.",
        2,
        [{ key: "12 cm ribbon", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Why Use a Ruler?",
        "Why is it better to use a plastic ruler rather than footsteps to measure the length of a room accurately?",
        "<strong>Step-by-Step Solution:</strong><br>1. Footsteps vary from child to adult.<br>2. A ruler has fixed centimeters that give the exact same measurement for everyone.",
        2,
        [{ key: "Footsteps vary", marks: "1 M" }, { key: "Ruler is fixed and standard", marks: "1 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 8: Numbers from Twenty-one to Fifty
  // -------------------------------------------------------------------------
  {
    id: "mm8",
    num: 8,
    unit: "Unit 3: Math-Magic Classic",
    title: "Numbers from Twenty-one to Fifty",
    subtitle: "Bundles of 10 and Loose Units, 21-50 Strips & Number Grids",
    concepts: [
      "Counting from 21 to 50 using bundles of 10 and loose sticks.",
      "Writing numerals and number names from Twenty-one to Fifty.",
      "Filling missing numbers in sequences and number strips.",
      "Identifying Tens and Ones digits."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 8: Numbers from Twenty-one to Fifty</text></svg>`,
    cbq: {
      title: "Sugarcane Bundles Case Study",
      text: "Farmer Ramu ties harvested sugarcane stalks into bundles of 10 stalks each. He has 3 full bundles and 7 loose stalks.",
      question: "What total number of sugarcane stalks does Farmer Ramu have? Write the number in expanded form.",
      answer: "1. 3 bundles of 10 = 30. Loose stalks = 7.<br>2. Total stalks = 30 + 7 = <strong>37 sugarcane stalks</strong>.<br>3. Expanded form: <strong>30 + 7 = 3 tens and 7 ones</strong>.",
      rubric: "1.5 M for 37 stalks + 1.5 M for expanded form (30 + 7)"
    },
    questions: [
      makeQ(
        "Textbook Exercise • 2 Bundles and 5 Sticks",
        "Look at the picture: 2 bundles of 10 matchsticks and 5 loose matchsticks. What number is this?",
        "<strong>Step-by-Step Solution:</strong><br>• 2 bundles = 20<br>• 5 loose sticks = 5<br>• Total = 20 + 5 = <strong>25 (Twenty-five)</strong>.",
        2,
        [{ key: "20 + 5 = 25", marks: "1 M" }, { key: "Number name Twenty-five", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • 3 Bundles and 3 Sticks",
        "Write the number for 3 bundles of 10 and 3 loose sticks.",
        "<strong>Step-by-Step Solution:</strong><br>• 3 tens + 3 ones = 30 + 3 = <strong>33 (Thirty-three)</strong>.",
        2,
        [{ key: "33 (Thirty-three)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • 4 Bundles and 0 Sticks",
        "Write the number for 4 bundles of 10 and 0 loose sticks.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 tens + 0 ones = <strong>40 (Forty)</strong>.",
        2,
        [{ key: "40 (Forty)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • 4 Bundles and 9 Sticks",
        "Write the number for 4 bundles of 10 and 9 loose sticks.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 tens + 9 ones = 40 + 9 = <strong>49 (Forty-nine)</strong>.",
        2,
        [{ key: "49 (Forty-nine)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • 5 Bundles of 10",
        "What number is represented by 5 full bundles of 10 matchsticks?",
        "<strong>Step-by-Step Solution:</strong><br>• 5 tens = <strong>50 (Fifty)</strong>.",
        2,
        [{ key: "50 (Fifty)", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 21 to 30",
        "Fill the missing numbers: 21, __, 23, 24, __, 26, __, 28, 29, 30.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>22, 25, 27</strong>.",
        2,
        [{ key: "Filled 22, 25, 27", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 31 to 40",
        "Fill the missing numbers: 31, 32, __, 34, 35, __, 37, __, 39, 40.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>33, 36, 38</strong>.",
        2,
        [{ key: "Filled 33, 36, 38", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 41 to 50",
        "Fill the missing numbers: 41, __, 43, __, 45, 46, __, 48, 49, 50.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>42, 44, 47</strong>.",
        2,
        [{ key: "Filled 42, 44, 47", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones for 28",
        "Break 28 into Tens and Ones.",
        "<strong>Step-by-Step Solution:</strong><br>• 28 = <strong>2 Tens and 8 Ones</strong>.",
        2,
        [{ key: "2 Tens and 8 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Tens and Ones for 45",
        "Break 45 into Tens and Ones.",
        "<strong>Step-by-Step Solution:</strong><br>• 45 = <strong>4 Tens and 5 Ones</strong>.",
        2,
        [{ key: "4 Tens and 5 Ones", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Number Has 3 Tens and 6 Ones?",
        "Write the numeral for: 3 Tens and 6 Ones.",
        "<strong>Step-by-Step Solution:</strong><br>• 30 + 6 = <strong>36</strong>.",
        2,
        [{ key: "36", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Number Has 4 Tens and 2 Ones?",
        "Write the numeral for: 4 Tens and 2 Ones.",
        "<strong>Step-by-Step Solution:</strong><br>• 40 + 2 = <strong>42</strong>.",
        2,
        [{ key: "42", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Names 21 to 25",
        "Write number names for: 21, 22, 23, 24, 25.",
        "<strong>Step-by-Step Solution:</strong><br>• 21 = Twenty-one<br>• 22 = Twenty-two<br>• 23 = Twenty-three<br>• 24 = Twenty-four<br>• 25 = Twenty-five",
        2,
        [{ key: "All 5 spelled correctly", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Names 30, 40, 50",
        "Write the spellings for: 30, 40, 50.",
        "<strong>Step-by-Step Solution:</strong><br>• 30 = <strong>Thirty</strong><br>• 40 = <strong>Forty</strong><br>• 50 = <strong>Fifty</strong>",
        2,
        [{ key: "Thirty, Forty, Fifty", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Just After 29?",
        "What number comes just after 29? What number comes just after 39?",
        "<strong>Step-by-Step Solution:</strong><br>• Just after 29 is <strong>30</strong>.<br>• Just after 39 is <strong>40</strong>.",
        2,
        [{ key: "After 29 = 30", marks: "1 M" }, { key: "After 39 = 40", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Just Before 50?",
        "What number comes just before 50?",
        "<strong>Step-by-Step Solution:</strong><br>• 50 - 1 = <strong>49</strong>.",
        2,
        [{ key: "49", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Between 35 and 37",
        "What number is between 35 and 37?",
        "<strong>Step-by-Step Solution:</strong><br>• The number is <strong>36</strong>.",
        2,
        [{ key: "36", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Circle Greater Number",
        "Circle the greater number in each pair: (a) 26 and 32, (b) 48 and 41.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 3 tens > 2 tens → <strong>32</strong> is greater.<br>• (b) Same tens (4), but 8 ones > 1 one → <strong>48</strong> is greater.",
        2,
        [{ key: "32 circled", marks: "1 M" }, { key: "48 circled", marks: "1 M" }]
      ),
      makeQ(
        "Word Problem • Flowers for Teacher's Day",
        "Students made 3 garlands of 10 roses each and had 5 loose roses. How many roses in total?",
        "<strong>Step-by-Step Solution:</strong><br>• 30 + 5 = <strong>35 roses</strong>.",
        2,
        [{ key: "30 + 5 = 35 roses", marks: "2 M" }]
      ),
      makeQ(
        "Activity • Match Numeral to Picture",
        "Match: 2 bundles and 9 sticks → 29; 4 bundles and 7 sticks → 47.",
        "<strong>Step-by-Step Solution:</strong><br>• 20 + 9 = 29<br>• 40 + 7 = 47",
        2,
        [{ key: "Matches verified", marks: "2 M" }]
      ),
      makeQ(
        "Mental Math • How Many Tens in 50?",
        "How many tens make 50?",
        "<strong>Step-by-Step Solution:</strong><br>• 10 + 10 + 10 + 10 + 10 = 50.<br>• Exactly <strong>5 tens</strong> make 50.",
        2,
        [{ key: "5 tens", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Skip Counting by 5s to 50",
        "Write the skip-counting chain by 5s from 25 to 50: 25, 30, __, __, __, 50.",
        "<strong>Step-by-Step Solution:</strong><br>• 25, 30, <strong>35, 40, 45</strong>, 50.",
        2,
        [{ key: "35, 40, 45", marks: "2 M" }]
      )
    ]
  }
];

module.exports = { mathMagicPart2 };
