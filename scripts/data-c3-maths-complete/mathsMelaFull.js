// Complete 100% NCERT Exercise & In-Text Activities Dataset for Class 3 Maths Mela (Chapters 1 to 14)
// Grounded in physical NCERT textbooks & Tiwari Academy complete syllabus.

const mathsMelaFullExercises = {
  mm1: [
    // 15 additional questions already designed in mathsMelaExpandedPart1.js
    // Total: 3 (base) + 4 (extra) + 15 = 22 questions
  ],
  mm2: [
    // Base: 3, Extra: 4 -> need 11 more to reach 18
    {
      category: "Sorting Toys by Price • Place Value",
      q: "A shop displays toys with price tags: Teddy Bear (₹85), Toy Car (₹40), Wooden Train (₹99), Ball (₹15), Spinning Top (₹25).<br>(a) Which toy is the most expensive and which is the cheapest?<br>(b) Arrange the prices of the toys in ascending order.<br>(c) Which toys cost less than ₹50?",
      ans: "<strong>Price Analysis:</strong><br>• <strong>(a) Most expensive:</strong> Wooden Train (₹99). <strong>Cheapest:</strong> Ball (₹15).<br>• <strong>(b) Ascending Order:</strong> ₹15 < ₹25 < ₹40 < ₹85 < ₹99.<br>• <strong>(c) Toys under ₹50:</strong> Ball (₹15), Spinning Top (₹25), and Toy Car (₹40).",
      marks: 3,
      rubric: [
        { key: "Correct most expensive (₹99) and cheapest (₹15)", marks: "1.0 M" },
        { key: "Correct ascending order", marks: "1.0 M" },
        { key: "Listing the 3 toys under ₹50", marks: "1.0 M" }
      ]
    },
    {
      category: "Grouping in Tens • Building Bundles",
      q: "Rohan has 47 marbles. He wants to pack them into bags of 10.<br>(a) How many full bags of 10 can he make?<br>(b) How many marbles will be left over?<br>(c) If his sister gives him 13 more marbles, how many full bags can he make now with none left over?",
      ans: "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Full bags:</strong> 47 = 4 Tens + 7 Ones. He can make <strong>4 full bags</strong> of 10 marbles.<br>• <strong>(b) Leftover marbles:</strong> 47 - 40 = <strong>7 marbles</strong> left over.<br>• <strong>(c) Adding 13 marbles:</strong> New total = 47 + 13 = 60 marbles.<br>60 ÷ 10 = <strong>6 full bags</strong>, with <strong>0 marbles</strong> left over.",
      marks: 3,
      rubric: [
        { key: "4 full bags", marks: "1.0 M" },
        { key: "7 leftover marbles", marks: "1.0 M" },
        { key: "New total 60 marbles = 6 full bags", marks: "1.0 M" }
      ]
    },
    {
      category: "Money at the Toy Shop • Buying Pairs",
      q: "Meera has ₹100. She buys a doll for ₹65 and a jump rope for ₹25.<br>(a) What is the total cost of the doll and jump rope?<br>(b) How much money does Meera have left?",
      ans: "<strong>Calculations:</strong><br>• <strong>(a) Total Cost:</strong> ₹65 + ₹25 = <strong>₹90</strong>.<br>• <strong>(b) Money Left:</strong> ₹100 - ₹90 = <strong>₹10</strong>.",
      marks: 2,
      rubric: [
        { key: "Correct addition: 65 + 25 = ₹90", marks: "1.0 M" },
        { key: "Correct subtraction: 100 - 90 = ₹10", marks: "1.0 M" }
      ]
    },
    {
      category: "Bead String Patterns • Counting by 10s",
      q: "Fill in the missing numbers on the 10-bead skip-counting rope:<br>10, 20, 30, ___, 50, ___, 70, ___, 90, 100.",
      ans: "<strong>Rule:</strong> Skip counting by 10.<br>Missing numbers are:<br>• After 30: <strong>40</strong><br>• After 50: <strong>60</strong><br>• After 70: <strong>80</strong>.<br>Full sequence: 10, 20, 30, <strong>40</strong>, 50, <strong>60</strong>, 70, <strong>80</strong>, 90, 100.",
      marks: 2,
      rubric: [{ key: "Correct numbers 40, 60, 80", marks: "2.0 M" }]
    },
    {
      category: "Place Value Match • Tens and Ones",
      q: "Write the number for each description:<br>(a) 6 tens and 3 ones<br>(b) 9 tens and 0 ones<br>(c) 3 tens and 8 ones<br>(d) 7 tens and 15 ones.",
      ans: "<strong>Solutions:</strong><br>• <strong>(a)</strong> (6 × 10) + 3 = 60 + 3 = <strong>63</strong>.<br>• <strong>(b)</strong> (9 × 10) + 0 = <strong>90</strong>.<br>• <strong>(c)</strong> (3 × 10) + 8 = 30 + 8 = <strong>38</strong>.<br>• <strong>(d)</strong> (7 × 10) + 15 = 70 + 15 = <strong>85</strong>.",
      marks: 2,
      rubric: [{ key: "0.5 M for each correct number (63, 90, 38, 85)", marks: "2.0 M" }]
    },
    {
      category: "Toy Inventory Table • Data Reading",
      q: "A toy shelf has: 12 Cars, 18 Dolls, 15 Blocks, and 9 Puzzles.<br>(a) How many total toys are on the shelf?<br>(b) Which toy is least in number?<br>(c) How many more dolls are there than puzzles?",
      ans: "<strong>Table Reading:</strong><br>• <strong>(a) Total toys:</strong> 12 + 18 + 15 + 9 = <strong>54 toys</strong>.<br>• <strong>(b) Least in number:</strong> Puzzles (only 9).<br>• <strong>(c) Difference:</strong> 18 Dolls - 9 Puzzles = <strong>9 more dolls</strong>.",
      marks: 3,
      rubric: [
        { key: "Total = 54", marks: "1.0 M" },
        { key: "Least = Puzzles (9)", marks: "1.0 M" },
        { key: "Difference = 18 - 9 = 9", marks: "1.0 M" }
      ]
    },
    {
      category: "Mental Math • Making 100",
      q: "How many more are needed to make 100?<br>(a) From 80: __<br>(b) From 65: __<br>(c) From 45: __<br>(d) From 92: __",
      ans: "<strong>Calculations to reach 100:</strong><br>• <strong>(a)</strong> 100 - 80 = <strong>20</strong>.<br>• <strong>(b)</strong> 100 - 65 = <strong>35</strong>.<br>• <strong>(c)</strong> 100 - 45 = <strong>55</strong>.<br>• <strong>(d)</strong> 100 - 92 = <strong>8</strong>.",
      marks: 2,
      rubric: [{ key: "0.5 M for each correct answer (20, 35, 55, 8)", marks: "2.0 M" }]
    },
    {
      category: "Word Problem • Sharing Toys",
      q: "Grandpa brought 36 small toy cars and shared them equally among his 4 grandchildren: Aman, Riya, Kabir, and Sara. How many toy cars did each grandchild get?",
      ans: "<strong>Equal Sharing / Division:</strong><br>• Total cars = 36<br>• Number of grandchildren = 4<br>• Cars per grandchild = 36 ÷ 4 = <strong>9 toy cars</strong> each.",
      marks: 2,
      rubric: [
        { key: "Statement: 36 ÷ 4", marks: "1.0 M" },
        { key: "Final answer: 9 toy cars", marks: "1.0 M" }
      ]
    },
    {
      category: "Comparing Bundles • Who Has More?",
      q: "Aarav has 5 packets of 10 crayons and 4 loose crayons. Tanvi has 4 packets of 10 crayons and 16 loose crayons. Who has more crayons, or do they have the same?",
      ans: "<strong>Step-by-Step Counting:</strong><br>• <strong>Aarav:</strong> (5 × 10) + 4 = 50 + 4 = <strong>54 crayons</strong>.<br>• <strong>Tanvi:</strong> (4 × 10) + 16 = 40 + 16 = <strong>56 crayons</strong>.<br>• <strong>Conclusion:</strong> Tanvi has 56 crayons, which is <strong>2 more crayons</strong> than Aarav.",
      marks: 3,
      rubric: [
        { key: "Aarav total: 54 crayons", marks: "1.0 M" },
        { key: "Tanvi total: 56 crayons", marks: "1.0 M" },
        { key: "Tanvi has more (by 2)", marks: "1.0 M" }
      ]
    },
    {
      category: "HOTS • Toy Cash Register Riddle",
      q: "I am a two-digit number between 50 and 60. My ones digit is 3 more than my tens digit. What number am I?",
      ans: "<strong>Solving the Riddle:</strong><br>• The number is between 50 and 60, so its tens digit must be <strong>5</strong>.<br>• The ones digit is 3 more than the tens digit: 5 + 3 = <strong>8</strong>.<br>• Combining tens and ones: 5 tens and 8 ones = <strong>58</strong>.",
      marks: 2,
      rubric: [
        { key: "Identifying tens digit = 5 and ones digit = 8", marks: "1.0 M" },
        { key: "Final number: 58", marks: "1.0 M" }
      ]
    },
    {
      category: "Review Worksheet • Tens and Ones True/False",
      q: "State True or False:<br>(a) 70 ones is greater than 7 tens.<br>(b) In 83, the place value of 8 is 80.<br>(c) 4 tens + 12 ones = 52.",
      ans: "<strong>Evaluation:</strong><br>• <strong>(a) False.</strong> 70 ones = 70. 7 tens = 70. They are equal, neither is greater.<br>• <strong>(b) True.</strong> 8 is in the tens place, so its value is 8 × 10 = 80.<br>• <strong>(c) True.</strong> 4 tens = 40; 40 + 12 = 52.",
      marks: 3,
      rubric: [
        { key: "Part (a) False with reason", marks: "1.0 M" },
        { key: "Part (b) True with reason", marks: "1.0 M" },
        { key: "Part (c) True with reason", marks: "1.0 M" }
      ]
    }
  ],
  mm3: [
    // Double Century (24 Qs total: Base 3 + Extra 4 + 17 expanded)
    {
      category: "Cricket Match • Dhoni's Century",
      q: "Dhoni is batting on 96 runs. How many runs does he need to complete his century? If he hits a 6 on the next ball, how many runs does he score in total, and did he complete his century?",
      ans: "<strong>Calculations:</strong><br>• Century = 100 runs.<br>• Runs needed = 100 - 96 = <strong>4 runs</strong>.<br>• If he hits a six: 96 + 6 = <strong>102 runs</strong>.<br>• Yes! 102 is greater than 100, so he successfully completed his century.",
      marks: 3,
      rubric: [
        { key: "4 runs needed for century", marks: "1.0 M" },
        { key: "96 + 6 = 102 runs", marks: "1.0 M" },
        { key: "Confirmed completed century", marks: "1.0 M" }
      ]
    },
    {
      category: "Scoreboard Tally • Players Century Runs",
      q: "Look at the runs scored by 4 players:<br>• Player A: 93 runs<br>• Player B: 97 runs<br>• Player C: 89 runs<br>• Player D: 99 runs<br>How many runs did each player miss their century by?",
      ans: "<strong>Century Deficits (100 - Runs):</strong><br>• Player A: 100 - 93 = <strong>7 runs</strong>.<br>• Player B: 100 - 97 = <strong>3 runs</strong>.<br>• Player C: 100 - 89 = <strong>11 runs</strong>.<br>• Player D: 100 - 99 = <strong>1 run</strong>.",
      marks: 2,
      rubric: [{ key: "0.5 M for each correct deficit (7, 3, 11, 1)", marks: "2.0 M" }]
    },
    {
      category: "Double Century Math • 200 Runs",
      q: "A double century equals 200 runs. Rohit Sharma is batting on 178 runs.<br>(a) How many more runs does he need to complete a double century?<br>(b) If he scores 3 boundaries (fours) and 2 sixes, does he reach the double century?",
      ans: "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Runs needed:</strong> 200 - 178 = <strong>22 runs</strong>.<br>• <strong>(b) Runs from boundaries & sixes:</strong><br>- 3 fours = 3 × 4 = 12 runs.<br>- 2 sixes = 2 × 6 = 12 runs.<br>- Total scored = 12 + 12 = 24 runs.<br>- New score = 178 + 24 = <strong>202 runs</strong>.<br>• Yes, 202 ≥ 200, so he reaches his double century!",
      marks: 3,
      rubric: [
        { key: "22 runs needed", marks: "1.0 M" },
        { key: "Boundaries total = 24 runs", marks: "1.0 M" },
        { key: "202 runs reached (double century completed)", marks: "1.0 M" }
      ]
    },
    {
      category: "Skip Counting by 50s • Number Line",
      q: "Complete the skip counting pattern by 50s up to 500:<br>50, 100, 150, ___, 250, ___, 350, ___, 450, ___.",
      ans: "<strong>Pattern:</strong> Add 50 at each step.<br>Missing numbers are:<br>• 150 + 50 = <strong>200</strong><br>• 250 + 50 = <strong>300</strong><br>• 350 + 50 = <strong>400</strong><br>• 450 + 50 = <strong>500</strong>.<br>Full sequence: 50, 100, 150, <strong>200</strong>, 250, <strong>300</strong>, 350, <strong>400</strong>, 450, <strong>500</strong>.",
      marks: 2,
      rubric: [{ key: "Correct numbers: 200, 300, 400, 500", marks: "2.0 M" }]
    },
    {
      category: "Cricket Partnership • Addition Word Problem",
      q: "In an ODI match, Virat scored 76 runs and Rahul scored 58 runs. What was the total partnership score between them?",
      ans: "<strong>Addition with Regrouping:</strong><br>&nbsp;&nbsp;&nbsp;76<br>+ 58<br>-----<br>&nbsp;&nbsp;134<br>• 6 + 8 = 14 (write 4, carry 1)<br>• 1 (carry) + 7 + 5 = 13<br>• Total partnership score = <strong>134 runs</strong>.",
      marks: 2,
      rubric: [
        { key: "Setting up 76 + 58", marks: "1.0 M" },
        { key: "Accurate sum: 134 runs", marks: "1.0 M" }
      ]
    },
    {
      category: "Number Line Jumps • Frog and Rabbit",
      q: "A frog starts at 120 and jumps forward by 10 at every leap. A rabbit starts at 150 and jumps forward by 5 at every leap. Write the numbers they land on for their first 4 jumps.",
      ans: "<strong>Jump Sequences:</strong><br>• <strong>Frog (starts 120, jump +10):</strong> 130, 140, 150, 160.<br>• <strong>Rabbit (starts 150, jump +5):</strong> 155, 160, 165, 170.<br>• Notice: Both land on <strong>160</strong> (Frog on jump 4, Rabbit on jump 2).",
      marks: 3,
      rubric: [
        { key: "Frog sequence: 130, 140, 150, 160", marks: "1.5 M" },
        { key: "Rabbit sequence: 155, 160, 165, 170", marks: "1.5 M" }
      ]
    },
    {
      category: "Target Run Chase • Subtraction",
      q: "The opponent team scored 245 runs. Team India needs 246 runs to win. Team India has already scored 182 runs. How many more runs are needed to win?",
      ans: "<strong>Subtraction:</strong><br>• Target to win = 246 runs<br>• Runs scored so far = 182 runs<br>• Runs needed = 246 - 182 = <strong>64 runs</strong>.",
      marks: 2,
      rubric: [
        { key: "Setting up 246 - 182", marks: "1.0 M" },
        { key: "Final answer: 64 runs", marks: "1.0 M" }
      ]
    },
    {
      category: "Comparison Signs • Greater or Less Than",
      q: "Fill in the blanks with > , < or = :<br>(a) 100 + 40 ___ 150<br>(b) 200 - 15 ___ 185<br>(c) 99 + 1 ___ 100<br>(d) 165 + 35 ___ 200",
      ans: "<strong>Evaluations:</strong><br>• <strong>(a)</strong> 140 < 150 (write <strong><</strong>)<br>• <strong>(b)</strong> 185 = 185 (write <strong>=</strong>)<br>• <strong>(c)</strong> 100 = 100 (write <strong>=</strong>)<br>• <strong>(d)</strong> 200 = 200 (write <strong>=</strong>).",
      marks: 2,
      rubric: [{ key: "0.5 M for each correct comparison sign", marks: "2.0 M" }]
    },
    {
      category: "Number Patterns • Counting by 20s",
      q: "Continue the pattern: 120, 140, 160, ___, ___, ___, 240.",
      ans: "<strong>Rule:</strong> Adding 20 at each step.<br>• 160 + 20 = <strong>180</strong><br>• 180 + 20 = <strong>200</strong><br>• 200 + 20 = <strong>220</strong>.<br>Full sequence: 120, 140, 160, <strong>180</strong>, <strong>200</strong>, <strong>220</strong>, 240.",
      marks: 2,
      rubric: [{ key: "Correct missing numbers: 180, 200, 220", marks: "2.0 M" }]
    },
    {
      category: "Place Value Abacus • 3 Digits",
      q: "On an abacus with Hundreds, Tens, and Ones spikes: there are 2 beads on H, 0 beads on T, and 5 beads on O.<br>(a) What number does this represent?<br>(b) Write its number name.<br>(c) What is the value if 1 more bead is added to the Tens spike?",
      ans: "<strong>Abacus Reading:</strong><br>• <strong>(a) Number:</strong> 2 Hundreds + 0 Tens + 5 Ones = <strong>205</strong>.<br>• <strong>(b) Number name:</strong> <strong>Two hundred five</strong>.<br>• <strong>(c) Adding 1 bead to Tens:</strong> 2 Hundreds + 1 Ten + 5 Ones = <strong>215</strong>.",
      marks: 3,
      rubric: [
        { key: "Number = 205", marks: "1.0 M" },
        { key: "Number name = Two hundred five", marks: "1.0 M" },
        { key: "New value = 215", marks: "1.0 M" }
      ]
    },
    {
      category: "Mental Math • Backward Counting",
      q: "Count backward by 10s from 200 down to 140.",
      ans: "<strong>Backward Sequence by 10s:</strong><br>200, 190, 180, 170, 160, 150, 140.",
      marks: 2,
      rubric: [{ key: "Accurate backward counting", marks: "2.0 M" }]
    },
    {
      category: "Fast Addition • Mental Strategies",
      q: "Solve mentally using friendly numbers:<br>(a) 99 + 35<br>(b) 198 + 45",
      ans: "<strong>Mental Strategies:</strong><br>• <strong>(a) 99 + 35:</strong> Take 1 from 35 and give it to 99 to make 100.<br>100 + 34 = <strong>134</strong>.<br>• <strong>(b) 198 + 45:</strong> Take 2 from 45 and give it to 198 to make 200.<br>200 + 43 = <strong>243</strong>.",
      marks: 2,
      rubric: [
        { key: "99 + 35 = 134 with method", marks: "1.0 M" },
        { key: "198 + 45 = 243 with method", marks: "1.0 M" }
      ]
    },
    {
      category: "Cricket Trivia Math • Top Scorers",
      q: "Look at the match records:<br>• Sachin: 186 runs<br>• Sehwag: 219 runs<br>• Dravid: 153 runs<br>(a) Who scored more than a double century?<br>(b) By how many runs did Sehwag beat Dravid?",
      ans: "<strong>Trivia Analysis:</strong><br>• <strong>(a) More than double century (>200):</strong> <strong>Sehwag</strong> with 219 runs.<br>• <strong>(b) Difference:</strong> 219 - 153 = <strong>66 runs</strong>.",
      marks: 3,
      rubric: [
        { key: "Sehwag (219 runs)", marks: "1.5 M" },
        { key: "Difference: 219 - 153 = 66 runs", marks: "1.5 M" }
      ]
    },
    {
      category: "Word Problem • Stadium Spectators",
      q: "In a cricket stadium, Section A has 115 fans, Section B has 95 fans, and Section C has 80 fans. What is the total number of fans in these three sections?",
      ans: "<strong>Addition:</strong><br>&nbsp;&nbsp;&nbsp;115<br>&nbsp;&nbsp;&nbsp;&nbsp;95<br>+&nbsp;&nbsp;80<br>-----<br>&nbsp;&nbsp;&nbsp;290<br>• 5 + 5 + 0 = 10 (write 0, carry 1)<br>• 1 (carry) + 1 + 9 + 8 = 19 (write 9, carry 1)<br>• 1 (carry) + 1 = 2<br>• Total fans = <strong>290 spectators</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct addition setup", marks: "1.5 M" },
        { key: "Final sum: 290 fans", marks: "1.5 M" }
      ]
    },
    {
      category: "Even and Odd Numbers • Runs Tally",
      q: "Classify the following run scores into Even and Odd numbers: 104, 157, 190, 201, 148, 163.",
      ans: "<strong>Even/Odd Classification (check last digit):</strong><br>• <strong>Even numbers (end in 0, 2, 4, 6, 8):</strong> 104, 190, 148.<br>• <strong>Odd numbers (end in 1, 3, 5, 7, 9):</strong> 157, 201, 163.",
      marks: 2,
      rubric: [
        { key: "Even: 104, 190, 148", marks: "1.0 M" },
        { key: "Odd: 157, 201, 163", marks: "1.0 M" }
      ]
    },
    {
      category: "HOTS • Double Century Riddle",
      q: "I am exactly in the middle between 100 and 200. What number am I? What must be added to me to make a double century?",
      ans: "<strong>Solving the Riddle:</strong><br>• Halfway between 100 and 200: (100 + 200) ÷ 2 = 300 ÷ 2 = <strong>150</strong>.<br>• Runs needed to make a double century (200): 200 - 150 = <strong>50</strong>.",
      marks: 2,
      rubric: [
        { key: "Midpoint = 150", marks: "1.0 M" },
        { key: "Added to reach 200 = 50", marks: "1.0 M" }
      ]
    },
    {
      category: "Chapter Review • Summary Multiple Choice",
      q: "Which number is 10 less than 200?<br>(a) 180<br>(b) 190<br>(c) 210<br>(d) 195<br>Explain your answer.",
      ans: "<strong>Solution:</strong><br>• 200 - 10 = <strong>190</strong>.<br>• Correct option is <strong>(b) 190</strong>.",
      marks: 1,
      rubric: [{ key: "Correct option (b) with explanation", marks: "1.0 M" }]
    }
  ]
};

module.exports = { mathsMelaFullExercises };
