// scripts/builders/mathMagicPart3.js
// NCERT Class 2 Math-Magic Book 2: Chapters 9 to 12
// My Funday, Add Our Points, Lines and Lines, Give and Take

const mathMagicPart3 = [
  {
    id: "mmg9", num: 9, unit: "Unit 9: Time & Calendar",
    title: "My Funday",
    subtitle: "Days of the Week, School Timetable, Months & Seasons",
    concepts: [
      "Sequencing the seven days of the week starting from Monday / Sunday.",
      "Reading school timetables (games period, drawing period, library day).",
      "Identifying yesterday, today, and tomorrow in daily routines.",
      "Recognizing months of the year, seasonal weather (summer, monsoon, winter), and seasonal fruits."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><rect x="25" y="35" width="55" height="50" fill="#3b82f6" rx="4"/><text x="52" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">MON</text><rect x="90" y="35" width="55" height="50" fill="#3b82f6" rx="4"/><text x="117" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">TUE</text><rect x="155" y="35" width="55" height="50" fill="#3b82f6" rx="4"/><text x="182" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">WED</text><rect x="220" y="35" width="55" height="50" fill="#3b82f6" rx="4"/><text x="247" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">THU</text><rect x="285" y="35" width="55" height="50" fill="#3b82f6" rx="4"/><text x="312" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">FRI</text><rect x="350" y="35" width="55" height="50" fill="#3b82f6" rx="4"/><text x="377" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">SAT</text><rect x="415" y="35" width="60" height="50" fill="#ef4444" rx="4"/><text x="445" y="65" font-family="sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">SUN (Fun)</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">7 Days of the Week • Sunday is Funday!</text></svg>`,
    cbq: {
      title: "Class 2 Weekly Activity Timetable",
      text: "In Class 2-B, children have Games period on Tuesday and Friday, Drawing on Wednesday and Saturday, and Library reading on Thursday. School is closed on Sunday.",
      question: "Which day comes between Tuesday and Thursday? On which two days do children play sports and games? If today is Thursday, what was yesterday and what will tomorrow be?",
      answer: "1. <strong>Wednesday</strong> comes between Tuesday and Thursday.<br>2. Children play games on <strong>Tuesday and Friday</strong>.<br>3. If today is Thursday: <strong>Yesterday</strong> was Wednesday, and <strong>Tomorrow</strong> will be Friday.",
      rubric: "1 M for Wednesday + 1 M for Tuesday & Friday + 1 M for yesterday & tomorrow"
    },
    questions: [
      {
        category: "Textbook Exercise • Days Sequence",
        q: "Answer the following questions about the days of the week:<br>(a) Which is the third day of the week if we start with Monday?<br>(b) Which day comes just after Friday?<br>(c) Which day comes just before Wednesday?",
        ans: "<strong>Answers:</strong><br>(a) 1st=Monday, 2nd=Tuesday, 3rd=<strong>Wednesday</strong>.<br>(b) The day just after Friday is <strong>Saturday</strong>.<br>(c) The day just before Wednesday is <strong>Tuesday</strong>.",
        marks: 3,
        rubric: [{ key: "(a) Wednesday", marks: "1 M" }, { key: "(b) Saturday", marks: "1 M" }, { key: "(c) Tuesday", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Funday Rhyme",
        q: "Why is Sunday called 'Funday' by children?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Sunday is the weekly school holiday.<br>• Children do not have to carry their school bags to school and can play games, visit parks, and spend joyful time with family and friends.",
        marks: 2,
        rubric: [{ key: "Weekly holiday identified", marks: "1 M" }, { key: "Play and family time explained", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Days Count",
        q: "How many days are there in a week? Name all of them in order.",
        ans: "<strong>Answer:</strong><br>• There are <strong>7 days</strong> in a week.<br>• In order: <strong>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</strong>.",
        marks: 2,
        rubric: [{ key: "Count: 7 days", marks: "1 M" }, { key: "All 7 days named correctly in order", marks: "1 M" }]
      },
      {
        category: "Calendar Deduction • Today, Yesterday, Tomorrow",
        q: "If today is Tuesday:<br>(a) What was yesterday?<br>(b) What will tomorrow be?<br>(c) What day will it be day after tomorrow?",
        ans: "<strong>Answers:</strong><br>(a) Yesterday was <strong>Monday</strong>.<br>(b) Tomorrow will be <strong>Wednesday</strong>.<br>(c) Day after tomorrow will be <strong>Thursday</strong>.",
        marks: 3,
        rubric: [{ key: "(a) Monday", marks: "1 M" }, { key: "(b) Wednesday", marks: "1 M" }, { key: "(c) Thursday", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Months of the Year",
        q: "How many months are there in one year? Name the first and last months of the year.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• There are <strong>12 months</strong> in one year.<br>• The first month is <strong>January</strong>.<br>• The last month is <strong>December</strong>.",
        marks: 2,
        rubric: [{ key: "12 months stated", marks: "1 M" }, { key: "January and December named", marks: "1 M" }]
      },
      {
        category: "Seasons & Weather • Hot and Cold Months",
        q: "Name two months that are very hot in India, and two months that are very cold.",
        ans: "<strong>Answer:</strong><br>• <strong>Very Hot Months (Summer):</strong> May and June.<br>• <strong>Very Cold Months (Winter):</strong> December and January.",
        marks: 2,
        rubric: [{ key: "Hot months: May, June", marks: "1 M" }, { key: "Cold months: December, January", marks: "1 M" }]
      },
      {
        category: "Seasonal Fruits",
        q: "Which delicious fruit is found in abundance during the hot summer months? Name one fruit commonly eaten in winter.",
        ans: "<strong>Answer:</strong><br>• <strong>Summer fruit:</strong> Mango (or Watermelon).<br>• <strong>Winter fruit:</strong> Orange (or Apple/Guava).",
        marks: 2,
        rubric: [{ key: "Summer fruit (Mango/Watermelon)", marks: "1 M" }, { key: "Winter fruit (Orange/Guava)", marks: "1 M" }]
      },
      {
        category: "Monsoon Season",
        q: "In which months does it rain the most in most parts of India? What items do you carry to school on rainy days?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• It rains heavily during <strong>July and August</strong> (the Monsoon season).<br>• Children carry an <strong>umbrella</strong> or wear a <strong>raincoat</strong> and gumboots to stay dry.",
        marks: 2,
        rubric: [{ key: "July and August identified", marks: "1 M" }, { key: "Umbrella / raincoat named", marks: "1 M" }]
      },
      {
        category: "Days After a Day",
        q: "Which day comes 4 days after Sunday?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 1 day after Sunday = Monday<br>• 2 days after Sunday = Tuesday<br>• 3 days after Sunday = Wednesday<br>• 4 days after Sunday = <strong>Thursday</strong>.",
        marks: 2,
        rubric: [{ key: "Counting sequence shown", marks: "1 M" }, { key: "Thursday correct", marks: "1 M" }]
      },
      {
        category: "School Timetable Analysis",
        q: "In Neha's school, children have Music class on Monday and Wednesday, and Art class on Friday. How many total creative arts periods do they have in a week?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Music = 2 days (Mon, Wed)<br>• Art = 1 day (Fri)<br>• Total creative periods = 2 + 1 = <strong>3 periods</strong>.",
        marks: 2,
        rubric: [{ key: "Breakdown shown", marks: "1 M" }, { key: "Total 3 periods correct", marks: "1 M" }]
      },
      {
        category: "Month Order Sequence",
        q: "Which month comes immediately after August? Which month comes immediately before March?",
        ans: "<strong>Answers:</strong><br>• The month immediately after August is <strong>September</strong>.<br>• The month immediately before March is <strong>February</strong>.",
        marks: 2,
        rubric: [{ key: "September", marks: "1 M" }, { key: "February", marks: "1 M" }]
      },
      {
        category: "Special Days • Republic & Independence Day",
        q: "In which month do we celebrate:<br>(a) Republic Day (26th)<br>(b) Independence Day (15th)",
        ans: "<strong>Answers:</strong><br>(a) Republic Day is celebrated in <strong>January</strong> (26 January).<br>(b) Independence Day is celebrated in <strong>August</strong> (15 August).",
        marks: 2,
        rubric: [{ key: "(a) January", marks: "1 M" }, { key: "(b) August", marks: "1 M" }]
      },
      {
        category: "Weekly Repetition",
        q: "If the 1st of a month is a Monday, what day of the week will the 8th of that month be? Explain.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• A week repeats every 7 days.<br>• 1 + 7 = 8.<br>• Therefore, the 8th will also be a <strong>Monday</strong>.",
        marks: 2,
        rubric: [{ key: "Addition 1 + 7 = 8 explained", marks: "1 M" }, { key: "Monday correct", marks: "1 M" }]
      },
      {
        category: "Temperature & Clothes",
        q: "Why do we wear light cotton clothes in May and woollen sweaters in December?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• In <strong>May</strong>, the weather is hot and sunny; light cotton clothes absorb sweat and keep our body cool.<br>• In <strong>December</strong>, the weather is cold; thick woollen sweaters trap body heat and keep us warm.",
        marks: 2,
        rubric: [{ key: "May / cotton cooling explained", marks: "1 M" }, { key: "December / wool warmth explained", marks: "1 M" }]
      },
      {
        category: "Days Riddle",
        q: "I am a day of the week. I start with the letter 'W'. I stand right in the middle of the school working week. Who am I?",
        ans: "<strong>Answer:</strong><br>• You are <strong>Wednesday</strong>.",
        marks: 1,
        rubric: [{ key: "Wednesday identified correctly", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A year has 365 days.<br>(b) Friday comes before Thursday.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. A normal calendar year has 365 days.<br>(b) <strong>False</strong>. Friday comes AFTER Thursday.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with reason", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "Why is having a school timetable helpful for teachers and students?",
        ans: "<strong>Summary:</strong><br>1. A timetable organizes the day so every subject gets adequate learning time.<br>2. It helps students pack only the required books in their school bag, keeping the bag light.",
        marks: 2,
        rubric: [{ key: "Organization of learning time", marks: "1 M" }, { key: "Packing required books / bag weight", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "How many weeks are there in one year approximately?",
        ans: "<strong>Answer:</strong><br>• There are approximately <strong>52 weeks</strong> in one year (52 × 7 = 364 days).",
        marks: 1,
        rubric: [{ key: "52 weeks correct", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg10", num: 10, unit: "Unit 10: Mental Addition & Strategy",
    title: "Add Our Points",
    subtitle: "Toss the Ball, Snake Number Strip, Coin Toss & Killer Lizard",
    concepts: [
      "Mental addition of two and three single-digit and 2-digit numbers.",
      "Using the snake number board (number strip) to count forward when adding points.",
      "Tossing coins (Heads / Tails) and calculating running game scores.",
      "The Killer Lizard puzzle: finding paths through numbered holes to eat insects."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><rect x="40" y="35" width="400" height="40" fill="#fde047" stroke="#ca8a04" stroke-width="2" rx="6"/><text x="70" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12">14</text><line x1="95" y1="35" x2="95" y2="75" stroke="#ca8a04" stroke-width="2"/><text x="120" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12">15</text><line x1="145" y1="35" x2="145" y2="75" stroke="#ca8a04" stroke-width="2"/><text x="170" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12">16</text><line x1="195" y1="35" x2="195" y2="75" stroke="#ca8a04" stroke-width="2"/><text x="220" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12">17</text><line x1="245" y1="35" x2="245" y2="75" stroke="#ca8a04" stroke-width="2"/><text x="270" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12">18</text><line x1="295" y1="35" x2="295" y2="75" stroke="#ca8a04" stroke-width="2"/><text x="320" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12">19</text><line x1="345" y1="35" x2="345" y2="75" stroke="#ca8a04" stroke-width="2"/><text x="370" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12">20</text><line x1="395" y1="35" x2="395" y2="75" stroke="#ca8a04" stroke-width="2"/><text x="420" y="60" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12">21</text><path d="M 70 35 Q 245 -5 420 35" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="4,4"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12" text-anchor="middle">Snake Board: 14 + 7 = 21 (Count 7 steps forward)</text></svg>`,
    cbq: {
      title: "Jungle Animals 'Toss the Ball' Championship",
      text: "Animals of the forest played 'Toss the Ball'. Each player had two turns. Bunu rabbit added their points on his snake strip board. Bear scored 16 + 7 points. Elephant scored 18 + 9 points. Tortoise scored 14 + 7 points. Bunu rabbit scored 19 + 15 points.",
      question: "Calculate the total points scored by each player. Who won the toss game, and who lost the game?",
      answer: "1. <strong>Bear:</strong> 16 + 7 = 23 points.<br>2. <strong>Elephant:</strong> 18 + 9 = 27 points.<br>3. <strong>Tortoise:</strong> 14 + 7 = 21 points.<br>4. <strong>Bunu Rabbit:</strong> 19 + 15 = 34 points.<br>5. <strong>Winner:</strong> <strong>Bunu Rabbit</strong> (34 points).<br>6. <strong>Loser:</strong> <strong>Tortoise</strong> (21 points).",
      rubric: "1 M for all four sums + 1 M for identifying winner (Bunu) + 1 M for identifying loser (Tortoise)"
    },
    questions: [
      {
        category: "Textbook Exercise • Adding on Snake Strip",
        q: "A player stands on number 14 on the snake strip board. He tosses the ball 7 times without dropping it. To add 7, he jumps 7 steps forward. On which number does he land?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Starting point = 14<br>• Steps forward = 7<br>• Landing number = 14 + 7 = <strong>21</strong>.",
        marks: 2,
        rubric: [{ key: "14 + 7 shown", marks: "1 M" }, { key: "Landing number 21 correct", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Animal Scores Addition",
        q: "Add the points mentally:<br>(a) Monkey: 12 + 8 = ___<br>(b) Deer: 15 + 13 = ___<br>(c) Fox: 23 + 9 = ___",
        ans: "<strong>Answers:</strong><br>(a) 12 + 8 = <strong>20</strong><br>(b) 15 + 13 = (15 + 10 + 3) = 25 + 3 = <strong>28</strong><br>(c) 23 + 9 = (23 + 10 - 1) = 33 - 1 = <strong>32</strong>",
        marks: 3,
        rubric: [{ key: "(a) 20", marks: "1 M" }, { key: "(b) 28", marks: "1 M" }, { key: "(c) 32", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Killer Lizard Puzzle",
        q: "A lizard on a wall moves between numbered holes to eat insects. From hole 0, the lizard can only walk along straight lines. Which 3 holes can the lizard visit to eat exactly 12 insects if hole numbers are 3, 5, 4?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Check the sum of 3, 5, 4:<br>• 3 + 5 + 4 = 8 + 4 = 12.<br>• The lizard can walk through holes <strong>3, 5, and 4</strong> (in any order) to eat 12 insects.",
        marks: 2,
        rubric: [{ key: "Sum 3 + 5 + 4 = 12 verified", marks: "1 M" }, { key: "Holes 3, 5, 4 identified", marks: "1 M" }]
      },
      {
        category: "Killer Lizard • Target 18",
        q: "Find 3 holes whose numbers add up to 18 using digits from: 8, 5, 2, 1, 9, 7.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Try 9 + 8 + 1: 9 + 8 = 17, 17 + 1 = 18.<br>• Alternatively: 9 + 7 + 2 = 18.<br>• Holes <strong>9, 8, and 1</strong> (or 9, 7, 2) add up to 18.",
        marks: 2,
        rubric: [{ key: "Valid 3-digit combination selected", marks: "1 M" }, { key: "Sum 18 verified", marks: "1 M" }]
      },
      {
        category: "Textbook Game • Heads and Tails",
        q: "Two children play a game with a 1-rupee coin. If Heads comes, they score 10 points. If Tails comes, they score 1 point.<br>Suraj gets 3 Heads and 4 Tails. What is his total score?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 3 Heads = 3 × 10 = 30 points<br>• 4 Tails = 4 × 1 = 4 points<br>• Suraj's total score = 30 + 4 = <strong>34 points</strong>.",
        marks: 2,
        rubric: [{ key: "Heads (30) and Tails (4) calculated", marks: "1 M" }, { key: "Total 34 points correct", marks: "1 M" }]
      },
      {
        category: "Three Numbers Addition",
        q: "Add three numbers mentally:<br>(a) 6 + 5 + 4 = ___<br>(b) 7 + 8 + 3 = ___",
        ans: "<strong>Step-by-Step Mental Strategy:</strong><br>(a) Make 10 first: (6 + 4) = 10; then 10 + 5 = <strong>15</strong>.<br>(b) Make 10 first: (7 + 3) = 10; then 10 + 8 = <strong>18</strong>.",
        marks: 2,
        rubric: [{ key: "(a) 15 with make-10 strategy", marks: "1 M" }, { key: "(b) 18 with make-10 strategy", marks: "1 M" }]
      },
      {
        category: "Two at a Time • Card Sums",
        q: "Look at number cards: [11], [25], [17], [32]. Pick two cards that give the largest sum. Pick two cards that give the smallest sum.",
        ans: "<strong>Step-by-Step Solution:</strong><br>1. <strong>Largest sum:</strong> Pick the two largest numbers: 32 + 25 = <strong>57</strong>.<br>2. <strong>Smallest sum:</strong> Pick the two smallest numbers: 11 + 17 = <strong>28</strong>.",
        marks: 2,
        rubric: [{ key: "Largest sum: 32 + 25 = 57", marks: "1 M" }, { key: "Smallest sum: 11 + 17 = 28", marks: "1 M" }]
      },
      {
        category: "Scoreboard Comparison",
        q: "Team Red scored 46 runs. Team Blue scored 38 runs. How many more runs did Team Red score than Team Blue?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Team Red = 46 runs<br>• Team Blue = 38 runs<br>• Difference = 46 - 38 = <strong>8 runs more</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 46 - 38 shown", marks: "1 M" }, { key: "8 runs correct", marks: "1 M" }]
      },
      {
        category: "Double Digits Mental Addition",
        q: "Calculate mentally: 33 + 14.<br>Explain how you added without using paper and pencil.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>1. Break 14 into 10 + 4.<br>2. First add 10 to 33: 33 + 10 = 43.<br>3. Then add the remaining 4: 43 + 4 = <strong>47</strong>.",
        marks: 2,
        rubric: [{ key: "Mental strategy (33 + 10 + 4) explained", marks: "1 M" }, { key: "Answer 47 correct", marks: "1 M" }]
      },
      {
        category: "Missing Addend Drill",
        q: "Fill in the missing numbers to make the equations true:<br>(a) 15 + ___ = 25<br>(b) ___ + 8 = 20",
        ans: "<strong>Answers:</strong><br>(a) 25 - 15 = <strong>10</strong><br>(b) 20 - 8 = <strong>12</strong>",
        marks: 2,
        rubric: [{ key: "(a) 10", marks: "1 M" }, { key: "(b) 12", marks: "1 M" }]
      },
      {
        category: "Dartboard Ring Score",
        q: "Kavya throws 3 rings on a board. Her rings land on 20, 15, and 5. What is her total score?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Add: 20 + 15 + 5<br>• Combine 15 + 5 = 20<br>• Then 20 + 20 = <strong>40 points</strong>.",
        marks: 2,
        rubric: [{ key: "Grouping (15+5=20) shown", marks: "1 M" }, { key: "Total 40 points correct", marks: "1 M" }]
      },
      {
        category: "Word Problem • Fruit Basket",
        q: "A basket has 16 red apples and 18 green apples. How many apples are there in all?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Red apples = 16<br>• Green apples = 18<br>• Total = 16 + 18 = 16 + 14 + 4 = 30 + 4 = <strong>34 apples</strong>.",
        marks: 2,
        rubric: [{ key: "16 + 18 addition shown", marks: "1 M" }, { key: "34 apples correct", marks: "1 M" }]
      },
      {
        category: "Word Problem • Stamp Album",
        q: "Arjun has 28 stamps. His grandfather gifts him 15 more stamps. How many stamps does Arjun have now?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Initial stamps = 28<br>• Gifted stamps = 15<br>• Total stamps = 28 + 15 = 28 + 2 + 13 = 30 + 13 = <strong>43 stamps</strong>.",
        marks: 2,
        rubric: [{ key: "28 + 15 addition shown", marks: "1 M" }, { key: "43 stamps correct", marks: "1 M" }]
      },
      {
        category: "Fast Math • Add 9 Strategy",
        q: "What is an easy shortcut to add 9 to any number like 35?",
        ans: "<strong>Explanation:</strong><br>• Since 9 is just 1 less than 10, first add 10, then subtract 1.<br>• For 35 + 9: 35 + 10 = 45; 45 - 1 = <strong>44</strong>.",
        marks: 2,
        rubric: [{ key: "Add 10, subtract 1 shortcut explained", marks: "1 M" }, { key: "Example 35 + 9 = 44 shown", marks: "1 M" }]
      },
      {
        category: "Comparison Problem • Game Turns",
        q: "In a board game, Rohit scored 24 in round 1 and 19 in round 2. Sameer scored 21 in round 1 and 23 in round 2. Who won the match?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Rohit's total = 24 + 19 = 43 points.<br>• Sameer's total = 21 + 23 = 44 points.<br>• Since 44 > 43, <strong>Sameer won the match</strong> (by 1 point).",
        marks: 2,
        rubric: [{ key: "Totals 43 and 44 calculated", marks: "1 M" }, { key: "Sameer identified as winner", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) 15 + 0 = 15.<br>(b) Changing the order of numbers changes the sum (e.g. 7 + 9 is different from 9 + 7).",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. Adding zero to any number leaves it unchanged.<br>(b) <strong>False</strong>. In addition, changing the order gives the exact same sum (7 + 9 = 16 and 9 + 7 = 16).",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with commutative property explanation", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "Name two strategies that make adding numbers in your head quick and easy.",
        ans: "<strong>Summary:</strong><br>1. <strong>Making 10s:</strong> Look for pairs that add up to 10 (like 7+3 or 6+4).<br>2. <strong>Breaking into Tens and Ones:</strong> Add tens first, then add the ones.",
        marks: 2,
        rubric: [{ key: "Making 10s strategy named", marks: "1 M" }, { key: "Breaking into tens and ones named", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "What is 25 + 25 + 25?",
        ans: "<strong>Calculation:</strong><br>• 25 + 25 = 50<br>• 50 + 25 = <strong>75</strong>.",
        marks: 1,
        rubric: [{ key: "75 correct", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg11", num: 11, unit: "Unit 11: Geometry & Lines",
    title: "Lines and Lines",
    subtitle: "Standing, Slanting, Sleeping and Curved Lines",
    concepts: [
      "Identifying standing lines (vertical), slanting lines (diagonal), and sleeping lines (horizontal).",
      "Drawing lines using rulers, edge of notebooks, or freehand.",
      "Recognizing curved lines in nature, pottery, and dance postures.",
      "Constructing digital display clock numbers and letters using straight matchstick lines."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><line x1="60" y1="30" x2="60" y2="85" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/><line x1="160" y1="85" x2="220" y2="85" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/><line x1="280" y1="85" x2="330" y2="30" stroke="#ea580c" stroke-width="5" stroke-linecap="round"/><path d="M 390 85 Q 430 20 470 85" fill="none" stroke="#9333ea" stroke-width="5" stroke-linecap="round"/><text x="60" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Standing</text><text x="190" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">Sleeping</text><text x="305" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#c2410c" text-anchor="middle">Slanting</text><text x="430" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#7e22ce" text-anchor="middle">Curved</text></svg>`,
    cbq: {
      title: "Cricket Ground Stumps Investigation",
      text: "Fatima, Jashbir, and Raihana brought their cricket wickets to the school playground. Fatima fixed her stump straight upright in the ground. Jashbir leaned his stump against the boundary wall at an angle. Raihana laid her stump flat on the grass.",
      question: "Which type of line is represented by Fatima's stump? Which by Jashbir's stump? Which by Raihana's stump? Can a cricket ball be drawn using straight lines?",
      answer: "1. <strong>Fatima's stump:</strong> <strong>Standing line</strong> (vertical).<br>2. <strong>Jashbir's stump:</strong> <strong>Slanting line</strong> (diagonal).<br>3. <strong>Raihana's stump:</strong> <strong>Sleeping line</strong> (horizontal).<br>4. <strong>Cricket ball:</strong> <strong>No</strong>, a ball is round and must be drawn using a smooth <strong>curved line</strong>.",
      rubric: "1 M for standing line + 1 M for slanting and sleeping lines + 1 M for curved line explanation for ball"
    },
    questions: [
      {
        category: "Textbook Exercise • Three Types of Straight Lines",
        q: "Name the three kinds of straight lines we study in Chapter 11.",
        ans: "<strong>Answer:</strong><br>1. <strong>Standing lines</strong> (vertical lines)<br>2. <strong>Sleeping lines</strong> (horizontal lines)<br>3. <strong>Slanting lines</strong> (diagonal / sloping lines).",
        marks: 2,
        rubric: [{ key: "All 3 types named correctly", marks: "2 M" }]
      },
      {
        category: "Textbook Exercise • Drawing Lines with Tools",
        q: "In the NCERT lesson, Fatima draws lines with a ruler, Jashbir draws lines with the edge of his pencil box, and Raihana tries to draw lines freehand with her fingers. Whose lines will be the straightest?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>Fatima's lines</strong> (drawn with a straight ruler) and <strong>Jashbir's lines</strong> (drawn with a straight pencil box edge) will be perfectly straight.<br>• Freehand lines drawn without a straight edge tend to wobble.",
        marks: 2,
        rubric: [{ key: "Fatima and Jashbir identified", marks: "1 M" }, { key: "Straight edge support explained", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Ekta's Curved Lines",
        q: "Ekta says: 'My lines are not straight. They are curved!' How can you draw a curved line using a circular bowl or glass bangle?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Place the circular bowl or bangle flat on paper.<br>• Trace along the round outer rim with your pencil.<br>• The resulting line will be a smooth <strong>curved line</strong> (or circle).",
        marks: 2,
        rubric: [{ key: "Tracing along rim described", marks: "1 M" }, { key: "Curved line result identified", marks: "1 M" }]
      },
      {
        category: "Digital Numbers • Matchstick Display",
        q: "Look at the numbers on a digital clock (like 0, 1, 2, 3, 4, 5, 6, 7, 8, 9). Are these numbers made of straight lines or curved lines? How many straight lines make the number 7?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• In digital displays, all numbers are made entirely of <strong>straight lines</strong> (matchstick segments).<br>• The number 7 is made of <strong>2 straight lines</strong> (1 sleeping line on top and 1 standing line going down).",
        marks: 2,
        rubric: [{ key: "Straight lines identified", marks: "1 M" }, { key: "2 lines for number 7 correct", marks: "1 M" }]
      },
      {
        category: "Alphabet Analysis • Straight Line Letters",
        q: "Which of the following English capital letters are made using ONLY straight lines? (A) H (B) O (C) T (D) S (E) E",
        ans: "<strong>Step-by-Step Solution:</strong><br>• <strong>H</strong>: 2 standing lines + 1 sleeping line (Straight).<br>• <strong>O</strong>: Curved line.<br>• <strong>T</strong>: 1 sleeping line + 1 standing line (Straight).<br>• <strong>S</strong>: Curved line.<br>• <strong>E</strong>: 1 standing line + 3 sleeping lines (Straight).<br>• Letters with only straight lines: <strong>H, T, and E</strong>.",
        marks: 3,
        rubric: [{ key: "H identified", marks: "1 M" }, { key: "T identified", marks: "1 M" }, { key: "E identified", marks: "1 M" }]
      },
      {
        category: "Alphabet Analysis • Curved Line Letters",
        q: "Name two English capital letters that have ONLY curved lines, and two that have BOTH straight and curved lines.",
        ans: "<strong>Answers:</strong><br>1. <strong>Only curved lines:</strong> <strong>C</strong> and <strong>O</strong> (or S).<br>2. <strong>Both straight and curved lines:</strong> <strong>D</strong> (1 standing straight line + 1 curve) and <strong>B</strong> (1 standing straight line + 2 curves) or <strong>P</strong>.",
        marks: 2,
        rubric: [{ key: "Only curved: C, O", marks: "1 M" }, { key: "Both: D, B, P", marks: "1 M" }]
      },
      {
        category: "Dance & Body Postures",
        q: "In classical Indian dance (like Bharatanatyam or Odissi), how do dancers use straight and curved lines with their arms and legs?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Dancers stretch their arms straight out horizontally (sleeping lines) or lift them upright (standing lines).<br>• They bend their wrists, mudras (fingers), and torso into graceful sweeping <strong>curved lines</strong>.",
        marks: 2,
        rubric: [{ key: "Arms / legs straight line postures described", marks: "1 M" }, { key: "Wrists / body curved line postures described", marks: "1 M" }]
      },
      {
        category: "Traffic Police Officer Signals",
        q: "When a traffic police officer directs cars at a road intersection, does he use straight arm lines or curved arm lines? Explain.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A traffic police officer uses sharp, clear <strong>straight lines</strong> (extending an arm horizontally as a sleeping line to stop traffic or raising an arm vertically as a standing line).<br>• Clear straight gestures are easily seen by drivers from far away.",
        marks: 2,
        rubric: [{ key: "Straight arm lines identified", marks: "1 M" }, { key: "Clear visibility reason explained", marks: "1 M" }]
      },
      {
        category: "Letter 'A' Breakdown",
        q: "How many lines are used to write capital letter 'A'? What types of lines are they?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Letter 'A' is made of <strong>3 straight lines</strong>:<br>1. Two <strong>slanting lines</strong> (sloping inwards from bottom to top).<br>2. One <strong>sleeping line</strong> (across the middle).",
        marks: 2,
        rubric: [{ key: "3 lines count correct", marks: "1 M" }, { key: "Two slanting + one sleeping identified", marks: "1 M" }]
      },
      {
        category: "Everyday Objects • Ladder",
        q: "Look at a wooden ladder. What kind of lines form the two long sides? What kind of lines form the climbing rungs/steps?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The two long sides are <strong>standing lines</strong> (or slanting lines when leaned against a wall).<br>• The climbing rungs/steps are <strong>sleeping lines</strong> (horizontal bars).",
        marks: 2,
        rubric: [{ key: "Sides: standing / slanting", marks: "1 M" }, { key: "Rungs: sleeping lines", marks: "1 M" }]
      },
      {
        category: "Railway Track Lines",
        q: "What kind of straight lines do the parallel steel rails of a straight railway track represent? What about the wooden/concrete sleepers beneath them?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The long steel rails running forward represent <strong>standing (or parallel straight) lines</strong>.<br>• The cross-sleepers laid beneath them represent <strong>sleeping lines</strong>.",
        marks: 2,
        rubric: [{ key: "Rails: standing / straight lines", marks: "1 M" }, { key: "Sleepers: sleeping lines", marks: "1 M" }]
      },
      {
        category: "Hands-on Matchstick Geometry",
        q: "How many matchsticks are needed to make:<br>(a) A triangle<br>(b) A square",
        ans: "<strong>Answers:</strong><br>(a) A triangle has 3 sides = <strong>3 matchsticks</strong>.<br>(b) A square has 4 equal sides = <strong>4 matchsticks</strong>.",
        marks: 2,
        rubric: [{ key: "(a) 3 matchsticks", marks: "1 M" }, { key: "(b) 4 matchsticks", marks: "1 M" }]
      },
      {
        category: "Natural Curves • Rainbow",
        q: "Is a rainbow made of straight lines or curved lines? How many colors does it have?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A rainbow is made of great <strong>curved lines</strong> (arcs across the sky).<br>• It has <strong>7 beautiful colors</strong> (VIBGYOR).",
        marks: 2,
        rubric: [{ key: "Curved lines identified", marks: "1 M" }, { key: "7 colors stated", marks: "1 M" }]
      },
      {
        category: "Line Orientation Challenge",
        q: "Can a sleeping line become a standing line? How?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• <strong>Yes</strong>, by rotating the object or paper by 90 degrees (a quarter turn).<br>• For example, a pencil lying flat (sleeping) becomes a standing line when picked up and held vertically upright.",
        marks: 2,
        rubric: [{ key: "Affirmative confirmation (Yes)", marks: "1 M" }, { key: "Rotation / holding upright explained", marks: "1 M" }]
      },
      {
        category: "Drawing Exercise • Smiley Face",
        q: "To draw a smiling face on paper, which type of line is used for the big round head? Which type for the smile?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The round head is drawn using a closed <strong>curved line</strong> (circle).<br>• The smile is drawn using an upward-curving <strong>curved line</strong>.",
        marks: 2,
        rubric: [{ key: "Head: closed curve / circle", marks: "1 M" }, { key: "Smile: upward curved line", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A ruler is used to draw curved lines.<br>(b) Letter 'M' is made using 4 straight lines.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. A ruler has straight edges and is used to draw straight lines, not curved lines.<br>(b) <strong>True</strong>. Letter 'M' consists of 2 standing lines and 2 slanting lines (4 straight lines).",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Summary",
        q: "Summarize the different types of lines and their appearance.",
        ans: "<strong>Summary:</strong><br>1. <strong>Standing line:</strong> Straight upright (|).<br>2. <strong>Sleeping line:</strong> Straight flat horizontal (—).<br>3. <strong>Slanting line:</strong> Straight sloping (/ or \\).<br>4. <strong>Curved line:</strong> Smoothly rounded without corners (~ or arc).",
        marks: 2,
        rubric: [{ key: "All 4 types clearly defined and described", marks: "2 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "How many straight lines are in capital letter 'X'?",
        ans: "<strong>Answer:</strong><br>• Letter 'X' has <strong>2 slanting straight lines</strong> crossing each other in the middle.",
        marks: 1,
        rubric: [{ key: "2 slanting lines correct", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg12", num: 12, unit: "Unit 12: Operations (Addition & Subtraction)",
    title: "Give and Take",
    subtitle: "Necklace of 10 Beads, Regrouping, Carrying & Borrowing",
    concepts: [
      "Regrouping ones into tens when adding: 10 loose beads make 1 new necklace.",
      "Regrouping tens into ones when subtracting: untying 1 necklace to get 10 loose beads.",
      "Solving 2-digit addition with carry-over (e.g. 17 + 24 = 41).",
      "Solving 2-digit subtraction with borrowing (e.g. 35 - 17 = 18).",
      "Real-world canteen bills and money transactions."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><circle cx="90" cy="55" r="28" fill="none" stroke="#059669" stroke-width="4"/><circle cx="90" cy="27" r="5" fill="#10b981"/><circle cx="106" cy="32" r="5" fill="#10b981"/><circle cx="118" cy="45" r="5" fill="#10b981"/><circle cx="118" cy="65" r="5" fill="#10b981"/><circle cx="106" cy="78" r="5" fill="#10b981"/><circle cx="90" cy="83" r="5" fill="#10b981"/><circle cx="74" cy="78" r="5" fill="#10b981"/><circle cx="62" cy="65" r="5" fill="#10b981"/><circle cx="62" cy="45" r="5" fill="#10b981"/><circle cx="74" cy="32" r="5" fill="#10b981"/><circle cx="150" cy="45" r="6" fill="#3b82f6"/><circle cx="150" cy="65" r="6" fill="#3b82f6"/><text x="280" y="60" font-family="sans-serif" font-size="14" font-weight="800" fill="#065f46">1 Necklace of 10 + 2 Loose = 12 Beads</text><text x="280" y="85" font-family="sans-serif" font-size="12" font-weight="600" fill="#047857">10 Loose Beads = 1 Necklace (Regroup)</text></svg>`,
    cbq: {
      title: "Simar and Reema's Bead Necklace Project",
      text: "Children in the village craft bead necklaces. 1 necklace takes exactly 10 beads. Razia has 12 beads (1 necklace and 2 loose beads). Reema has 17 beads (1 necklace and 7 loose beads). Aarif has 24 beads (2 necklaces and 4 loose beads).",
      question: "How many total beads do Razia and Reema have together? When they put their loose beads together, do they get enough to make a new necklace?",
      answer: "1. <strong>Razia:</strong> 12 beads. <strong>Reema:</strong> 17 beads.<br>2. <strong>Combined beads:</strong> 12 + 17 = <strong>29 beads</strong>.<br>3. <strong>Loose beads check:</strong> 2 loose + 7 loose = 9 loose beads. Since 9 < 10, they need 1 more bead to make a new necklace (so they have 2 necklaces and 9 loose beads).",
      rubric: "1 M for total beads (29) + 1 M for loose beads analysis (9) + 1 M for new necklace condition explanation"
    },
    questions: [
      {
        category: "Textbook Exercise • Bead Necklace Addition",
        q: "Razia has 12 beads (1 necklace and 2 loose). Sonu has 35 beads (3 necklaces and 5 loose). How many beads do they have altogether?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Tens (necklaces): 1 + 3 = 4 necklaces (40 beads)<br>• Ones (loose beads): 2 + 5 = 7 beads<br>• Total beads = 40 + 7 = <strong>47 beads</strong> (4 necklaces and 7 loose beads).",
        marks: 2,
        rubric: [{ key: "Tens and ones addition shown", marks: "1 M" }, { key: "Total 47 beads correct", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Regrouping Loose Beads",
        q: "Aarif has 24 beads and Razia has 12 beads. How many beads do they have together?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Add ones: 4 + 2 = 6 loose beads<br>• Add tens: 2 + 1 = 3 necklaces<br>• Total = <strong>36 beads</strong>.",
        marks: 2,
        rubric: [{ key: "24 + 12 step shown", marks: "1 M" }, { key: "36 beads correct", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Addition with Carrying Over",
        q: "Reema has 17 beads and Aarif has 24 beads.<br>(a) How many loose beads are there in all?<br>(b) Can they make a new necklace from the loose beads?<br>(c) What is their total bead count?",
        ans: "<strong>Step-by-Step Solution:</strong><br>(a) Loose beads: 7 + 4 = 11 loose beads.<br>(b) Yes, 10 of these 11 loose beads make <strong>1 new necklace</strong>, leaving 1 loose bead.<br>(c) Necklaces: 1 (Reema) + 2 (Aarif) + 1 (new) = 4 necklaces.<br>Total beads = 40 + 1 = <strong>41 beads</strong>.",
        marks: 3,
        rubric: [{ key: "Loose beads: 11", marks: "1 M" }, { key: "Regrouping 10 beads into 1 necklace", marks: "1 M" }, { key: "Total 41 beads", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • How Many More Beads?",
        q: "Aarif has 24 beads and Razia has 12 beads. How many more beads does Aarif have than Razia?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Aarif's beads = 24<br>• Razia's beads = 12<br>• Difference = 24 - 12 = <strong>12 more beads</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 24 - 12 shown", marks: "1 M" }, { key: "12 beads correct", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Subtraction with Borrowing",
        q: "Simar has 31 beads (3 necklaces and 1 loose bead). She gives 17 beads to Reema. How many beads are left with Simar?",
        ans: "<strong>Step-by-Step Solution:</strong><br>1. Simar has 1 loose bead and needs to give 7 loose beads. She cannot give 7 from 1.<br>2. She unties 1 necklace (10 beads). Now she has 2 necklaces and (10 + 1) = 11 loose beads.<br>3. Subtract loose beads: 11 - 7 = 4 loose beads.<br>4. Subtract necklaces: 2 - 1 = 1 necklace.<br>5. Beads remaining = 10 + 4 = <strong>14 beads</strong>.",
        marks: 3,
        rubric: [{ key: "Untying 1 necklace into 10 beads explained", marks: "1 M" }, { key: "Loose subtraction 11 - 7 = 4", marks: "1 M" }, { key: "Final answer 14 beads correct", marks: "1 M" }]
      },
      {
        category: "NCERT Story • Canteen Bill Problem",
        q: "At the school snack bar, Dosa costs ₹23 and Uttpam costs ₹28. If Aman orders both, what is his total bill?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Cost of Dosa = ₹23<br>• Cost of Uttpam = ₹28<br>• Total = 23 + 28 = 23 + 20 + 8 = 43 + 8 = <strong>₹51</strong>.",
        marks: 2,
        rubric: [{ key: "23 + 28 column addition shown", marks: "1 M" }, { key: "Total bill ₹51 correct", marks: "1 M" }]
      },
      {
        category: "Canteen Bill • Change Calculation",
        q: "Aman's canteen bill is ₹51. He hands a ₹100 note to the cashier. How much change will he get back?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Money given = ₹100<br>• Bill amount = ₹51<br>• Change back = 100 - 51 = <strong>₹49</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 100 - 51 shown", marks: "1 M" }, { key: "Change ₹49 correct", marks: "1 M" }]
      },
      {
        category: "Practice Problem • Column Addition",
        q: "Solve by column addition with carry-over:<br>&nbsp;&nbsp;4 7<br>+ 2 6<br>-----",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Ones column: 7 + 6 = 13 (Write 3 in ones place, carry 1 ten to tens column).<br>• Tens column: 4 + 2 + 1 (carried) = 7 tens.<br>• Answer = <strong>73</strong>.",
        marks: 2,
        rubric: [{ key: "Carrying 1 ten shown", marks: "1 M" }, { key: "Sum 73 correct", marks: "1 M" }]
      },
      {
        category: "Practice Problem • Column Subtraction",
        q: "Solve by column subtraction with borrowing:<br>&nbsp;&nbsp;6 2<br>- 2 8<br>-----",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Ones column: 2 is smaller than 8. Borrow 1 ten from 6 tens (leaving 5 tens).<br>• 2 becomes 12. 12 - 8 = 4.<br>• Tens column: 5 - 2 = 3.<br>• Answer = <strong>34</strong>.",
        marks: 2,
        rubric: [{ key: "Borrowing step shown (12 - 8)", marks: "1 M" }, { key: "Answer 34 correct", marks: "1 M" }]
      },
      {
        category: "Word Problem • Mango Tree",
        q: "A gardener picked 38 ripe mangoes in the morning and 27 ripe mangoes in the afternoon. How many ripe mangoes did he pick in all?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Morning mangoes = 38<br>• Afternoon mangoes = 27<br>• Total mangoes = 38 + 27 = 38 + 2 + 25 = 40 + 25 = <strong>65 mangoes</strong>.",
        marks: 2,
        rubric: [{ key: "Addition 38 + 27 shown", marks: "1 M" }, { key: "Total 65 mangoes correct", marks: "1 M" }]
      },
      {
        category: "Word Problem • Cricket Bats",
        q: "A sports shop had 54 cricket balls. On Sunday, 29 cricket balls were sold. How many cricket balls were left in the shop?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Initial cricket balls = 54<br>• Balls sold = 29<br>• Remaining balls = 54 - 29 = 54 - 30 + 1 = 24 + 1 = <strong>25 cricket balls</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 54 - 29 shown", marks: "1 M" }, { key: "25 balls left correct", marks: "1 M" }]
      },
      {
        category: "Bead Necklace Thinking",
        q: "How many necklaces of 10 beads can you make from 60 beads? Will any beads be left loose?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 60 ÷ 10 = <strong>6 complete necklaces</strong>.<br>• There are <strong>0 loose beads</strong> left.",
        marks: 2,
        rubric: [{ key: "6 necklaces identified", marks: "1 M" }, { key: "0 loose beads confirmed", marks: "1 M" }]
      },
      {
        category: "Mental Check • Addition Check with Subtraction",
        q: "If 34 + 25 = 59, how can you check this using subtraction?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Subtract one addend from the total sum:<br>• 59 - 25 = 34 (or 59 - 34 = 25).<br>• Since the difference equals the other number, the addition is confirmed correct.",
        marks: 2,
        rubric: [{ key: "Inverse operation 59 - 25 = 34 shown", marks: "1 M" }, { key: "Verification rationale explained", marks: "1 M" }]
      },
      {
        category: "Regrouping Rule in Words",
        q: "What do we do when the sum of digits in the ones place is 10 or more?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• When the ones place sum is 10 or more, we <strong>regroup 10 ones into 1 ten</strong>.<br>• We write the remaining ones in the ones place and carry over the 1 ten to the tens place.",
        marks: 2,
        rubric: [{ key: "Regroup 10 ones into 1 ten explained", marks: "1 M" }, { key: "Carry over to tens place described", marks: "1 M" }]
      },
      {
        category: "Word Problem • Bus Passengers",
        q: "A bus starts with 36 passengers. At the next stop, 15 passengers get off and 8 new passengers get on. How many passengers are in the bus now?",
        ans: "<strong>Step-by-Step Solution:</strong><br>1. After 15 get off: 36 - 15 = 21 passengers.<br>2. After 8 get on: 21 + 8 = <strong>29 passengers</strong>.",
        marks: 2,
        rubric: [{ key: "Subtraction 36 - 15 = 21 shown", marks: "1 M" }, { key: "Addition 21 + 8 = 29 correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) 50 - 25 = 25.<br>(b) In subtraction, we can borrow 1 ten, which is equal to 10 ones.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. 25 + 25 = 50, so 50 - 25 = 25.<br>(b) <strong>True</strong>. 1 ten always equals 10 ones.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) True with place value explanation", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "Why is the chapter called 'Give and Take'?",
        ans: "<strong>Summary:</strong><br>• 'Give' represents giving away items or subtracting.<br>• 'Take' represents receiving items or adding.<br>• Together, addition and subtraction model all give-and-take exchanges in daily life, shopping, and games.",
        marks: 2,
        rubric: [{ key: "Give = subtraction connection", marks: "1 M" }, { key: "Take = addition connection", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "What is 40 - 15?",
        ans: "<strong>Calculation:</strong><br>• 40 - 10 = 30<br>• 30 - 5 = <strong>25</strong>.",
        marks: 1,
        rubric: [{ key: "25 correct", marks: "1 M" }]
      }
    ]
  }
];

module.exports = { mathMagicPart3 };
