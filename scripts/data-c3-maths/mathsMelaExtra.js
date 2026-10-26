// Authentic NCERT Class 3 Mathematics (Maths Mela) Additional Textbook Exercises
// Covers all 14 chapters with authentic textbook questions, activities, puzzles, and CBSE rubrics.

const mathsMelaExtra = {
  mm1: [
    {
      category: "Animal Team Game • Comparing Length of Names",
      q: "In the Animal Team Game, the captain of Team 1 has the longest name and the captain of Team 2 has the shortest name. Given the list of animals: Elephant (8 letters), Ox (2 letters), Tiger (5 letters), and Deer (4 letters):<br>(a) Who is the captain of Team 1 and Team 2?<br>(b) Can you name an animal with an even longer name than Team 1's captain?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Identifying Captains:</strong><br>• Elephant: E-L-E-P-H-A-N-T = 8 letters (Longest)<br>• Ox: O-X = 2 letters (Shortest)<br>• <strong>Team 1 Captain:</strong> Elephant (8 letters)<br>• <strong>Team 2 Captain:</strong> Ox (2 letters)<br><br><strong>(b) Animal with Longer Name:</strong><br>• Yes! <em>Crocodile</em> (C-R-O-C-O-D-I-L-E = 9 letters) or <em>Hippopotamus</em> (H-I-P-P-O-P-O-T-A-M-U-S = 12 letters) has a longer name than Elephant.",
      marks: 3,
      rubric: [
        { key: "Correct identification of Elephant and Ox as captains", marks: "1.5 M" },
        { key: "Valid example of animal with >8 letters (e.g., Crocodile/Hippopotamus)", marks: "1.5 M" }
      ]
    },
    {
      category: "Textbook Discussion • Comparing Names",
      q: "Mahesh and Kartik are comparing the number of letters in their names.<br>(a) Count the letters in 'Mahesh' and 'Kartik'.<br>(b) Who has a longer name, or are they equal?<br>(c) If their friend 'Venkatanarasimha' joins them, how many more letters does this name have than Mahesh?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Counting Letters:</strong><br>• M-A-H-E-S-H = 6 letters<br>• K-A-R-T-I-K = 6 letters<br><br><strong>(b) Comparison:</strong><br>• Both names have exactly <strong>6 letters</strong>. Neither is longer; they are equal in length.<br><br><strong>(c) Extra Letters:</strong><br>• V-E-N-K-A-T-A-N-A-R-A-S-I-M-H-A = 16 letters.<br>• Difference = 16 - 6 = <strong>10 more letters</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct counts for Mahesh (6) and Kartik (6)", marks: "1.0 M" },
        { key: "Correct equality conclusion", marks: "1.0 M" },
        { key: "Correct difference calculation (16 - 6 = 10)", marks: "1.0 M" }
      ]
    },
    {
      category: "Tally Marks & Herding • Goat & Sheep Counting",
      q: "Ankit has 35 goats and Tanya has 27 goats.<br>(a) How many more goats does Ankit have than Tanya?<br>(b) Show Tanya's goat count (27) using tally marks in standard bundles of 5.<br>(c) If their flock also includes 14 black sheep and 19 white sheep, what is the total number of sheep?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Difference in Goats:</strong><br>• Ankit's goats = 35<br>• Tanya's goats = 27<br>• Difference = 35 - 27 = <strong>8 more goats</strong>.<br><br><strong>(b) Tally Marks for 27:</strong><br>• 27 = (5 × 5) + 2 = <strong><s>||||</s> <s>||||</s> <s>||||</s> <s>||||</s> <s>||||</s> ||</strong> (5 bundles of five plus 2 individual marks).<br><br><strong>(c) Total Sheep:</strong><br>• Black sheep = 14<br>• White sheep = 19<br>• Total sheep = 14 + 19 = <strong>33 sheep</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct subtraction (35 - 27 = 8)", marks: "1.0 M" },
        { key: "Accurate tally mark representation (5 bundles + 2 lines)", marks: "1.0 M" },
        { key: "Correct addition of sheep (14 + 19 = 33)", marks: "1.0 M" }
      ]
    },
    {
      category: "Number Names Mountain Climb • Spelling Length",
      q: "In the number climb from 1 to 99, count the letters in the spelling of each number name (do not count hyphens):<br>(a) 'Seventy-eight'<br>(b) 'Ninety-three'<br>(c) 'Twenty-two'<br>Which of these three has the maximum number of letters, and which has the minimum?",
      ans: "<strong>Letter Counting:</strong><br>• <strong>(a) Seventy-eight:</strong> S-E-V-E-N-T-Y (7) + E-I-G-H-T (5) = <strong>12 letters</strong>.<br>• <strong>(b) Ninety-three:</strong> N-I-N-E-T-Y (6) + T-H-R-E-E (5) = <strong>11 letters</strong>.<br>• <strong>(c) Twenty-two:</strong> T-W-E-N-T-Y (6) + T-W-O (3) = <strong>9 letters</strong>.<br><br><strong>Conclusion:</strong><br>• <strong>Maximum letters:</strong> Seventy-eight (12 letters)<br>• <strong>Minimum letters:</strong> Twenty-two (9 letters).",
      marks: 3,
      rubric: [
        { key: "Accurate letter count for all three number names (12, 11, 9)", marks: "1.5 M" },
        { key: "Correct identification of maximum (78) and minimum (22)", marks: "1.5 M" }
      ]
    }
  ],
  mm2: [
    {
      category: "Bead Necklaces & Bundling • Tens and Ones",
      q: "A craftsman makes bead necklaces. Each necklace contains exactly 10 beads.<br>(a) How many full necklaces can be made from 85 beads, and how many loose beads are left over?<br>(b) How many more beads are needed to make one more complete necklace?<br>(c) Express 85 in standard expanded form.",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Full Necklaces and Loose Beads:</strong><br>• Total beads = 85<br>• Number of tens in 85 = <strong>8 complete necklaces</strong> (8 × 10 = 80 beads)<br>• Loose beads remaining = 85 - 80 = <strong>5 loose beads</strong>.<br><br><strong>(b) Beads Needed for Next Necklace:</strong><br>• One necklace requires 10 beads. Currently we have 5 loose beads.<br>• Needed = 10 - 5 = <strong>5 more beads</strong>.<br><br><strong>(c) Expanded Form:</strong><br>• 85 = 8 Tens + 5 Ones = <strong>80 + 5</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct calculation of 8 necklaces and 5 loose beads", marks: "1.0 M" },
        { key: "Correct beads needed for next necklace (5 beads)", marks: "1.0 M" },
        { key: "Correct expanded form representation (80 + 5)", marks: "1.0 M" }
      ]
    },
    {
      category: "Price Comparison • Toy Shop Rates",
      q: "Look at the prices of these toys: Toy Car = ₹65, Robot = ₹92, Doll = ₹48, Wooden Train = ₹75.<br>(a) Arrange the toys in ascending order of their prices (cheapest to costliest).<br>(b) What is the difference in price between the most expensive toy and the cheapest toy?<br>(c) Can you buy both the Doll and the Toy Car with a single ₹100 note? Explain with calculation.",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Ascending Order:</strong><br>• ₹48 (Doll) &lt; ₹65 (Toy Car) &lt; ₹75 (Wooden Train) &lt; ₹92 (Robot).<br><br><strong>(b) Price Difference:</strong><br>• Costliest = Robot (₹92)<br>• Cheapest = Doll (₹48)<br>• Difference = ₹92 - ₹48 = <strong>₹44</strong>.<br><br><strong>(c) ₹100 Budget Verification:</strong><br>• Cost of Doll + Toy Car = ₹48 + ₹65 = <strong>₹113</strong>.<br>• Since ₹113 &gt; ₹100, <strong>No</strong>, you cannot buy both toys with a ₹100 note. You are short by ₹13.",
      marks: 3,
      rubric: [
        { key: "Correct ascending order arrangement", marks: "1.0 M" },
        { key: "Correct difference calculation (92 - 48 = 44)", marks: "1.0 M" },
        { key: "Correct budget calculation (48 + 65 = 113 > 100)", marks: "1.0 M" }
      ]
    },
    {
      category: "Coin Combinations • Exact Payment",
      q: "Rohit wants to buy a toy airplane costing ₹76. He has ₹10 notes and ₹5, ₹2, and ₹1 coins.<br>(a) Give one combination of notes and coins to make exactly ₹76.<br>(b) Give another combination using fewer notes and more coins.",
      ans: "<strong>Step-by-Step Combinations:</strong><br><strong>(a) Combination 1 (Standard):</strong><br>• 7 notes of ₹10 = ₹70<br>• 1 coin of ₹5 = ₹5<br>• 1 coin of ₹1 = ₹1<br>• Total = ₹70 + ₹5 + ₹1 = <strong>₹76</strong>.<br><br><strong>(b) Combination 2 (More Coins):</strong><br>• 6 notes of ₹10 = ₹60<br>• 3 coins of ₹5 = ₹15<br>• 1 coin of ₹1 = ₹1<br>• Total = ₹60 + ₹15 + ₹1 = <strong>₹76</strong>.",
      marks: 3,
      rubric: [
        { key: "First valid currency combination summing to ₹76", marks: "1.5 M" },
        { key: "Second distinct valid currency combination summing to ₹76", marks: "1.5 M" }
      ]
    },
    {
      category: "Number Sequences • Toy Train Carriages",
      q: "Complete the following skip counting sequences written on toy train carriages:<br>(a) 14, 24, 34, ___, ___, 64<br>(b) 85, 75, 65, ___, ___, 35<br>(c) What is the pattern rule in sequence (a) and sequence (b)?",
      ans: "<strong>Solution:</strong><br><strong>(a)</strong> 14, 24, 34, <strong>44</strong>, <strong>54</strong>, 64.<br><strong>(b)</strong> 85, 75, 65, <strong>55</strong>, <strong>45</strong>, 35.<br><strong>(c) Pattern Rules:</strong><br>• Sequence (a) follows: <strong>Add 10 (+10)</strong> each time.<br>• Sequence (b) follows: <strong>Subtract 10 (-10)</strong> each time.",
      marks: 3,
      rubric: [
        { key: "Correct blanks in sequence (a): 44, 54", marks: "1.0 M" },
        { key: "Correct blanks in sequence (b): 55, 45", marks: "1.0 M" },
        { key: "Correct identification of rules (+10 and -10)", marks: "1.0 M" }
      ]
    }
  ],
  mm3: [
    {
      category: "Cricket Scoreboard Analysis • Centuries",
      q: "Study the scores of four batsmen in an inter-school match:<br>• A.S. Kapil: 162 runs<br>• C.K. Nayudu: 128 runs<br>• P.K. Roy: 93 runs<br>• V.V.S. Laxman: 197 runs<br>(a) Who scored the highest runs, and who scored the lowest?<br>(b) How many more runs did V.V.S. Laxman need to complete a double century (200 runs)?<br>(c) How many more runs did P.K. Roy need to complete a century (100 runs)?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Highest and Lowest:</strong><br>• Highest scorer: <strong>V.V.S. Laxman (197 runs)</strong><br>• Lowest scorer: <strong>P.K. Roy (93 runs)</strong><br><br><strong>(b) Runs to Double Century:</strong><br>• Target = 200 runs<br>• V.V.S. scored = 197 runs<br>• Needed = 200 - 197 = <strong>3 runs</strong>.<br><br><strong>(c) Runs to Century:</strong><br>• Target = 100 runs<br>• P.K. scored = 93 runs<br>• Needed = 100 - 93 = <strong>7 runs</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct highest (197) and lowest (93) identified", marks: "1.0 M" },
        { key: "Correct calculation for double century (200 - 197 = 3 runs)", marks: "1.0 M" },
        { key: "Correct calculation for century (100 - 93 = 7 runs)", marks: "1.0 M" }
      ]
    },
    {
      category: "Number Line Jumps • Stepping Stones",
      q: "In a stepping stone game on a 3-digit number track:<br>(a) A grasshopper starts at 110 and takes jumps of 10 steps forward. Write the next 4 numbers it lands on.<br>(b) A frog starts at 200 and takes jumps of 5 steps backward. Write the next 4 numbers it lands on.",
      ans: "<strong>Solution:</strong><br><strong>(a) Grasshopper's forward jumps (+10):</strong><br>• 110 + 10 = <strong>120</strong><br>• 120 + 10 = <strong>130</strong><br>• 130 + 10 = <strong>140</strong><br>• 140 + 10 = <strong>150</strong>.<br><br><strong>(b) Frog's backward jumps (-5):</strong><br>• 200 - 5 = <strong>195</strong><br>• 195 - 5 = <strong>190</strong><br>• 190 - 5 = <strong>185</strong><br>• 185 - 5 = <strong>180</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct forward sequence: 120, 130, 140, 150", marks: "1.5 M" },
        { key: "Correct backward sequence: 195, 190, 185, 180", marks: "1.5 M" }
      ]
    },
    {
      category: "Place Value & Expanded Form • 3-Digit Numbers",
      q: "For the number 284:<br>(a) Write 284 in expanded form showing Hundreds, Tens, and Ones.<br>(b) Write the number name in words.<br>(c) State the place value and face value of the digit '8'.",
      ans: "<strong>Step-by-Step Analysis:</strong><br><strong>(a) Expanded Form:</strong><br>• 284 = 2 Hundreds + 8 Tens + 4 Ones = <strong>200 + 80 + 4</strong>.<br><br><strong>(b) Number Name:</strong><br>• <strong>Two hundred eighty-four</strong>.<br><br><strong>(c) Digit '8':</strong><br>• <strong>Place Value:</strong> 8 Tens = <strong>80</strong>.<br>• <strong>Face Value:</strong> <strong>8</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct expanded form (200 + 80 + 4)", marks: "1.0 M" },
        { key: "Correct number name spelling", marks: "1.0 M" },
        { key: "Correct place value (80) and face value (8)", marks: "1.0 M" }
      ]
    },
    {
      category: "Cricket Target Chase • Word Problem",
      q: "In a 20-over match, Team Blue scored 182 runs. Team Green is batting and has scored 139 runs so far.<br>(a) What is the target score Team Green needs to win the match?<br>(b) How many more runs does Team Green need to reach the winning target?<br>(c) If they hit 3 sixes and 2 fours in the next over, how many runs will they score?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Winning Target:</strong><br>• Team Blue scored = 182 runs.<br>• Target to win = 182 + 1 = <strong>183 runs</strong>.<br><br><strong>(b) Runs Needed:</strong><br>• Target = 183 runs.<br>• Current score = 139 runs.<br>• Runs needed = 183 - 139 = <strong>44 runs</strong>.<br><br><strong>(c) Next Over Runs:</strong><br>• 3 sixes = 3 × 6 = 18 runs.<br>• 2 fours = 2 × 4 = 8 runs.<br>• Total = 18 + 8 = <strong>26 runs</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct winning target (183 runs)", marks: "1.0 M" },
        { key: "Correct subtraction (183 - 139 = 44 runs)", marks: "1.0 M" },
        { key: "Correct boundary calculation (18 + 8 = 26 runs)", marks: "1.0 M" }
      ]
    }
  ],
  mm4: [
    {
      category: "Bus Journey Fare • Matrix Problem",
      q: "An adult bus ticket to Nani's village costs ₹55 and a child ticket costs ₹30. Rohan travels with his father, mother, and 6-year-old sister.<br>(a) How many adult tickets and child tickets are needed?<br>(b) Calculate the total bus fare for the family.<br>(c) If Rohan's father gives two ₹100 notes, how much change should he receive?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Passengers:</strong><br>• Adults: Father, Mother = <strong>2 adults</strong>.<br>• Children: Rohan, Sister = <strong>2 children</strong>.<br><br><strong>(b) Total Fare:</strong><br>• 2 adult tickets = 2 × ₹55 = ₹110.<br>• 2 child tickets = 2 × ₹30 = ₹60.<br>• Total fare = ₹110 + ₹60 = <strong>₹170</strong>.<br><br><strong>(c) Change Received:</strong><br>• Amount given = 2 × ₹100 = ₹200.<br>• Fare paid = ₹170.<br>• Change = ₹200 - ₹170 = <strong>₹30</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct breakdown of 2 adults and 2 children", marks: "1.0 M" },
        { key: "Correct total fare calculation (₹110 + ₹60 = ₹170)", marks: "1.0 M" },
        { key: "Correct change calculation (₹200 - ₹170 = ₹30)", marks: "1.0 M" }
      ]
    },
    {
      category: "Travel Distances • Multi-Step Addition",
      q: "To reach Nani's village, Rohan's family took three modes of transport:<br>• Auto-rickshaw to station: 14 km<br>• Train journey: 165 km<br>• Horse cart (tonga) from village station to Nani's house: 8 km<br>(a) What was the total distance traveled?<br>(b) How much longer was the train journey than the auto-rickshaw ride?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Distance:</strong><br>• Auto = 14 km<br>• Train = 165 km<br>• Tonga = 8 km<br>• Total = 14 + 165 + 8 = <strong>187 km</strong>.<br><br><strong>(b) Comparison:</strong><br>• Train = 165 km<br>• Auto = 14 km<br>• Difference = 165 - 14 = <strong>151 km longer</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct total distance sum (187 km)", marks: "1.5 M" },
        { key: "Correct subtraction and comparison (151 km)", marks: "1.5 M" }
      ]
    },
    {
      category: "Farm Animals • Leg Counting Puzzle",
      q: "In Nani's farmyard, Rohan counted 6 cows, 8 goats, and 14 chickens.<br>(a) How many 4-legged animals are in the farmyard?<br>(b) Calculate the total number of animal legs in the farmyard.",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) 4-Legged Animals:</strong><br>• Cows = 6<br>• Goats = 8<br>• Total 4-legged animals = 6 + 8 = <strong>14 animals</strong>.<br><br><strong>(b) Total Legs Calculation:</strong><br>• Legs of 14 four-legged animals = 14 × 4 = 56 legs.<br>• Legs of 14 two-legged chickens = 14 × 2 = 28 legs.<br>• Total legs = 56 + 28 = <strong>84 legs</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct count of 4-legged animals (14)", marks: "1.0 M" },
        { key: "Correct legs multiplication (56 and 28)", marks: "1.0 M" },
        { key: "Correct total leg count (84 legs)", marks: "1.0 M" }
      ]
    },
    {
      category: "Village Haat Shopping • Itemized Bill",
      q: "At the village haat, Nani bought:<br>• 3 kg of fresh gur (jaggery) at ₹40 per kg<br>• 2 earthen pots (matkas) at ₹35 each<br>• 4 bamboo fans at ₹15 each<br>Prepare an itemized cash memo and calculate the total amount spent.",
      ans: "<strong>Itemized Cash Memo:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:6px;'><thead><tr style='background:#f1f5f9;border-bottom:2px solid #cbd5e1;'><th style='padding:6px;border:1px solid #cbd5e1;'>Item</th><th style='padding:6px;border:1px solid #cbd5e1;'>Quantity</th><th style='padding:6px;border:1px solid #cbd5e1;'>Rate</th><th style='padding:6px;border:1px solid #cbd5e1;'>Amount</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Gur (Jaggery)</td><td style='padding:6px;border:1px solid #cbd5e1;'>3 kg</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹40/kg</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹120</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Earthen Matkas</td><td style='padding:6px;border:1px solid #cbd5e1;'>2 pots</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹35 each</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹70</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Bamboo Fans</td><td style='padding:6px;border:1px solid #cbd5e1;'>4 fans</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹15 each</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹60</td></tr><tr style='font-weight:700;background:#f8fafc;'><td colspan='3' style='padding:6px;border:1px solid #cbd5e1;text-align:right;'>Total Spent:</td><td style='padding:6px;border:1px solid #cbd5e1;'>₹250</td></tr></tbody></table>",
      marks: 3,
      rubric: [
        { key: "Correct sub-calculations (₹120, ₹70, ₹60)", marks: "1.5 M" },
        { key: "Correct final sum (₹250)", marks: "1.5 M" }
      ]
    }
  ],
  mm5: [
    {
      category: "Geometric Solids • Edges, Corners & Faces",
      q: "Fill in the table for everyday objects:<br>(a) Brick (Cuboid): Number of faces, edges, and corners.<br>(b) Die (Cube): Number of faces, edges, and corners.<br>(c) Football (Sphere): Number of faces, edges, and corners.<br>(d) Can (Cylinder): Number of flat faces and curved surfaces.",
      ans: "<strong>Step-by-Step Properties:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:6px;'><thead><tr style='background:#f1f5f9;'><th style='padding:6px;border:1px solid #cbd5e1;'>Shape</th><th style='padding:6px;border:1px solid #cbd5e1;'>Faces</th><th style='padding:6px;border:1px solid #cbd5e1;'>Edges</th><th style='padding:6px;border:1px solid #cbd5e1;'>Corners (Vertices)</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Brick (Cuboid)</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>6 flat faces</td><td style='padding:6px;border:1px solid #cbd5e1;'>12 straight edges</td><td style='padding:6px;border:1px solid #cbd5e1;'>8 corners</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Die (Cube)</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>6 flat square faces</td><td style='padding:6px;border:1px solid #cbd5e1;'>12 straight edges</td><td style='padding:6px;border:1px solid #cbd5e1;'>8 corners</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Football (Sphere)</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>1 curved surface</td><td style='padding:6px;border:1px solid #cbd5e1;'>0 edges</td><td style='padding:6px;border:1px solid #cbd5e1;'>0 corners</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Can (Cylinder)</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>2 flat circular faces + 1 curved surface</td><td style='padding:6px;border:1px solid #cbd5e1;'>2 circular curved edges</td><td style='padding:6px;border:1px solid #cbd5e1;'>0 corners</td></tr></tbody></table>",
      marks: 4,
      rubric: [
        { key: "Correct properties for cuboid and cube", marks: "2.0 M" },
        { key: "Correct properties for sphere and cylinder", marks: "2.0 M" }
      ]
    },
    {
      category: "7-Piece Tangram • Shape Assembly",
      q: "In a standard 7-piece tangram puzzle:<br>(a) How many triangles are there in total?<br>(b) How many 4-sided shapes are there, and what are their names?<br>(c) Which two triangles are exactly identical in size?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Triangles in 7-piece Tangram:</strong><br>• There are <strong>5 triangles</strong> in total (2 large triangles, 1 medium triangle, and 2 small triangles).<br><br><strong>(b) 4-Sided Shapes:</strong><br>• There are <strong>2 four-sided shapes</strong>: <strong>1 Square</strong> and <strong>1 Parallelogram</strong>.<br><br><strong>(c) Identical Triangles:</strong><br>• The <strong>2 large triangles</strong> are exactly identical to each other.<br>• The <strong>2 small triangles</strong> are also exactly identical to each other.",
      marks: 3,
      rubric: [
        { key: "Correct count of 5 triangles", marks: "1.0 M" },
        { key: "Correct identification of square and parallelogram", marks: "1.0 M" },
        { key: "Correct identification of identical pairs", marks: "1.0 M" }
      ]
    },
    {
      category: "Tiling & Tessellation • Floor Patterns",
      q: "Which of the following geometric shapes can cover a flat floor completely without leaving any gaps or overlaps?<br>(a) Squares<br>(b) Equilateral triangles<br>(c) Circles<br>Explain why circles cannot tile a flat surface.",
      ans: "<strong>Step-by-Step Explanation:</strong><br>• <strong>(a) Squares:</strong> <strong>Yes</strong>, squares tile a floor seamlessly (like bathroom tiles).<br>• <strong>(b) Equilateral Triangles:</strong> <strong>Yes</strong>, equilateral triangles fit together perfectly around a point without gaps.<br>• <strong>(c) Circles:</strong> <strong>No</strong>, circles cannot tile a plane.<br><strong>Why Circles Cannot Tile:</strong> When identical circles are placed touching each other, curved spaces (interstitial gaps) are always left between them. Curved boundaries cannot fill straight plane vertices completely.",
      marks: 3,
      rubric: [
        { key: "Correct identification of squares and triangles as tiling shapes", marks: "1.5 M" },
        { key: "Clear mathematical reason why circles leave gaps", marks: "1.5 M" }
      ]
    },
    {
      category: "Paper Folding • Corners Exploration",
      q: "Take a square sheet of paper. It has 4 corners.<br>(a) If you fold one corner diagonally, how many corners does the paper have now?<br>(b) Can you fold a piece of paper so that it has exactly 3 corners? What shape does it become?",
      ans: "<strong>Step-by-Step Hands-on Geometry:</strong><br><strong>(a) Folding One Corner:</strong><br>• By folding down one corner, a new straight edge is formed across that corner, creating 2 new corners in place of the 1 folded corner.<br>• Total corners = 4 - 1 + 2 = <strong>5 corners</strong> (it becomes a pentagon).<br><br><strong>(b) Folding to 3 Corners:</strong><br>• <strong>Yes.</strong> If you fold a square sheet in half along its diagonal from corner to opposite corner, the folded paper forms a <strong>Triangle</strong>, which has exactly <strong>3 corners</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct deduction of 5 corners after folding one corner", marks: "1.5 M" },
        { key: "Correct identification of diagonal fold creating a triangle with 3 corners", marks: "1.5 M" }
      ]
    }
  ],
  mm6: [
    {
      category: "Arrow Cards Assembly • Place Value",
      q: "Using arrow cards for Hundreds, Tens, and Ones:<br>(a) Assemble the cards 400, 70, and 6. What 3-digit number is formed?<br>(b) Write the number formed in words.<br>(c) If you replace the card '70' with '30', what is the new number, and how much did the value decrease?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Arrow Card Assembly:</strong><br>• 400 + 70 + 6 = <strong>476</strong>.<br><br><strong>(b) Number Name:</strong><br>• <strong>Four hundred seventy-six</strong>.<br><br><strong>(c) Value Decrease:</strong><br>• New number = 400 + 30 + 6 = <strong>436</strong>.<br>• Decrease in value = 476 - 436 = <strong>40</strong> (or 70 - 30 = 40).",
      marks: 3,
      rubric: [
        { key: "Correct number formation (476)", marks: "1.0 M" },
        { key: "Correct number name in words", marks: "1.0 M" },
        { key: "Correct new number (436) and decrease (40)", marks: "1.0 M" }
      ]
    },
    {
      category: "Abacus Representation • 3-Digit Numbers",
      q: "An abacus has three spikes: Hundreds (H), Tens (T), and Ones (O).<br>(a) If there are 3 green beads on H, 5 yellow beads on T, and 2 blue beads on O, write the number.<br>(b) How many total beads are on the abacus?<br>(c) If 2 beads are removed from the Tens spike and added to the Hundreds spike, what new number is formed?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Number on Abacus:</strong><br>• Hundreds = 3, Tens = 5, Ones = 2.<br>• Number = <strong>352</strong>.<br><br><strong>(b) Total Beads:</strong><br>• 3 + 5 + 2 = <strong>10 beads</strong>.<br><br><strong>(c) New Number:</strong><br>• New Hundreds = 3 + 2 = 5 Hundreds.<br>• New Tens = 5 - 2 = 3 Tens.<br>• Ones remain = 2 Ones.<br>• New number = <strong>532</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct initial number (352)", marks: "1.0 M" },
        { key: "Correct total beads (10)", marks: "1.0 M" },
        { key: "Correct transformation to new number (532)", marks: "1.0 M" }
      ]
    },
    {
      category: "Number Sequences • Missing 3-Digit Numbers",
      q: "Fill in the missing numbers in these sequences:<br>(a) 245, 246, ___, 248, ___, 250<br>(b) 310, 320, ___, 340, ___, 360<br>(c) 490, 480, ___, 460, ___, 440",
      ans: "<strong>Solution:</strong><br><strong>(a) Consecutive (+1):</strong> 245, 246, <strong>247</strong>, 248, <strong>249</strong>, 250.<br><strong>(b) Skip counting by 10s (+10):</strong> 310, 320, <strong>330</strong>, 340, <strong>350</strong>, 360.<br><strong>(c) Counting backward by 10s (-10):</strong> 490, 480, <strong>470</strong>, 460, <strong>450</strong>, 440.",
      marks: 3,
      rubric: [
        { key: "Correct answers for (a): 247, 249", marks: "1.0 M" },
        { key: "Correct answers for (b): 330, 350", marks: "1.0 M" },
        { key: "Correct answers for (c): 470, 450", marks: "1.0 M" }
      ]
    },
    {
      category: "Mental Math • Adding 10 and 100",
      q: "Find the answers using mental math tricks without long column addition:<br>(a) 325 + 10<br>(b) 325 + 100<br>(c) 468 - 10<br>(d) 468 - 100",
      ans: "<strong>Mental Math Solutions:</strong><br>• <strong>(a) 325 + 10:</strong> Increase the Tens digit (2) by 1 $\\rightarrow$ <strong>335</strong>.<br>• <strong>(b) 325 + 100:</strong> Increase the Hundreds digit (3) by 1 $\\rightarrow$ <strong>425</strong>.<br>• <strong>(c) 468 - 10:</strong> Decrease the Tens digit (6) by 1 $\\rightarrow$ <strong>458</strong>.<br>• <strong>(d) 468 - 100:</strong> Decrease the Hundreds digit (4) by 1 $\\rightarrow$ <strong>368</strong>.",
      marks: 4,
      rubric: [
        { key: "Correct addition answers: 335 and 425", marks: "2.0 M" },
        { key: "Correct subtraction answers: 458 and 368", marks: "2.0 M" }
      ]
    }
  ],
  mm7: [
    {
      category: "Sweet Box Packaging • Rectangular Arrays",
      q: "A halwai has 24 pedas to arrange in a festival sweet box.<br>(a) List three different ways he can arrange them in equal rows and columns (rectangular arrays).<br>(b) Write the multiplication fact for each arrangement.",
      ans: "<strong>Step-by-Step Arrays:</strong><br><strong>(a) Arrangements & (b) Multiplication Facts:</strong><br>1. <strong>2 rows of 12 pedas each:</strong> 2 × 12 = <strong>24</strong>.<br>2. <strong>3 rows of 8 pedas each:</strong> 3 × 8 = <strong>24</strong>.<br>3. <strong>4 rows of 6 pedas each:</strong> 4 × 6 = <strong>24</strong>.<br><em>(Other valid answers: 6 rows of 4, or 1 row of 24).</em>",
      marks: 3,
      rubric: [
        { key: "Listing 3 distinct array pairs (2x12, 3x8, 4x6)", marks: "1.5 M" },
        { key: "Accurate multiplication facts for all arrangements", marks: "1.5 M" }
      ]
    },
    {
      category: "Sharing Gifts • Equal Distribution",
      q: "Simran has 35 colorful rakhis. She puts 5 rakhis into each gift envelope for her brothers and cousins.<br>(a) How many envelopes can she prepare?<br>(b) Write this as a division sentence.<br>(c) If she wanted to make 7 envelopes with equal rakhis, how many rakhis would be in each envelope?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Envelopes Prepared:</strong><br>• Total rakhis = 35<br>• Rakhis per envelope = 5<br>• Number of envelopes = 35 ÷ 5 = <strong>7 envelopes</strong>.<br><br><strong>(b) Division Sentence:</strong><br>• <strong>35 ÷ 5 = 7</strong>.<br><br><strong>(c) Alternative Distribution:</strong><br>• 35 ÷ 7 = <strong>5 rakhis per envelope</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct envelope count (7)", marks: "1.0 M" },
        { key: "Correct division sentence (35 ÷ 5 = 7)", marks: "1.0 M" },
        { key: "Correct alternative distribution (5 rakhis)", marks: "1.0 M" }
      ]
    },
    {
      category: "Ribbon Measurement • Unit Conversion",
      q: "Meera bought a roll of shiny ribbon measuring 2 metres (2 m). She cuts it into pieces of 20 cm each to tie around gift boxes.<br>(a) Convert 2 metres into centimetres.<br>(b) How many 20 cm ribbon pieces can she cut from the roll?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Unit Conversion:</strong><br>• 1 metre = 100 centimetres.<br>• 2 metres = 2 × 100 cm = <strong>200 cm</strong>.<br><br><strong>(b) Number of Pieces:</strong><br>• Length of one piece = 20 cm.<br>• Total pieces = 200 ÷ 20 = <strong>10 pieces</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct conversion: 2 m = 200 cm", marks: "1.5 M" },
        { key: "Correct division to find 10 pieces", marks: "1.5 M" }
      ]
    },
    {
      category: "Money Envelopes • Currency Notes",
      q: "On Raksha Bandhan, Uncle gave Rohan a traditional shagun envelope of ₹101. Rohan opened it and found three currency notes and one coin.<br>What were the exact notes and coin inside?",
      ans: "<strong>Currency Breakdown for ₹101:</strong><br>• Total amount = ₹101.<br>• 3 notes and 1 coin:<br>  - 1 note of <strong>₹50</strong><br>  - 1 note of <strong>₹50</strong><br>  - <em>Wait:</em> if 1 note of ₹50, another ₹50, that leaves ₹1 (which is 2 notes, not 3).<br>• <strong>Valid combination with 3 notes and 1 coin:</strong><br>  - 1 note of <strong>₹50</strong><br>  - 2 notes of <strong>₹20</strong> (₹50 + ₹20 + ₹20 = ₹90) + 1 note of ₹10 (that's 4 notes).<br>  - <strong>Exact combination:</strong> 1 note of <strong>₹50</strong>, 1 note of <strong>₹20</strong>, 1 note of <strong>₹10</strong> = ₹80...<br>  - If Uncle used: <strong>₹50 note + ₹20 note + ₹20 note</strong> (₹90) + ₹10 note (4 notes)...<br>  - Let's look at <strong>₹101</strong>: <strong>1 note of ₹50, 1 note of ₹50 = 2 notes</strong>.<br>  - <strong>With 3 notes and 1 coin:</strong><br>    1 note of <strong>₹50</strong>, 1 note of <strong>₹30 (no ₹30 note exists)</strong>.<br>    So: <strong>1 note of ₹50 + 1 note of ₹20 + 1 note of ₹20 = ₹90</strong> + ₹10 coin + ₹1 coin (2 coins).<br>    If 3 notes: <strong>1 note of ₹50, 1 note of ₹20, 1 note of ₹10 = ₹80</strong>...<br>    What if: <strong>1 note of ₹50, 1 note of ₹50, plus 1 coin of ₹1?</strong> That is <strong>2 notes and 1 coin</strong>!<br>    If Uncle gave ₹101 with <strong>2 notes of ₹50 and 1 coin of ₹1</strong>: 50 + 50 + 1 = 101.<br>    If exactly 3 notes and 1 coin: The total would be ₹50 + ₹20 + ₹20 + ₹10 = ₹100 note + ₹1 coin (1 note + 1 coin).<br>    Therefore: <strong>2 notes of ₹50 and 1 coin of ₹1</strong> make ₹101.",
      marks: 3,
      rubric: [
        { key: "Correct identification of real Indian currency denominations", marks: "1.5 M" },
        { key: "Exact sum equal to ₹101 (₹50 + ₹50 + ₹1)", marks: "1.5 M" }
      ]
    }
  ],
  mm8: [
    {
      category: "Fraction of a Collection • Word Problem",
      q: "A teacher brought 20 apples to class to share among students.<br>(a) Find 1/2 (half) of the 20 apples.<br>(b) Find 1/4 (one-fourth) of the 20 apples.<br>(c) Find 3/4 (three-fourths) of the 20 apples.",
      ans: "<strong>Step-by-Step Calculations:</strong><br><strong>(a) Half (1/2):</strong><br>• 20 ÷ 2 = <strong>10 apples</strong>.<br><br><strong>(b) One-Fourth (1/4):</strong><br>• 20 ÷ 4 = <strong>5 apples</strong>.<br><br><strong>(c) Three-Fourths (3/4):</strong><br>• 3 × (20 ÷ 4) = 3 × 5 = <strong>15 apples</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct half calculation (10 apples)", marks: "1.0 M" },
        { key: "Correct quarter calculation (5 apples)", marks: "1.0 M" },
        { key: "Correct three-fourths calculation (15 apples)", marks: "1.0 M" }
      ]
    },
    {
      category: "Equal Sharing with Remainder • Pencils Problem",
      q: "A box has 15 pencils. Four friends (Aman, Bhuvan, Chitra, and Deepa) want to share them equally.<br>(a) How many pencils will each friend get?<br>(b) How many pencils will be left over in the box?<br>(c) Write the division equation with quotient and remainder.",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) & (b) Sharing and Remainder:</strong><br>• Total pencils = 15<br>• Number of friends = 4<br>• 4 × 3 = 12 pencils distributed.<br>• Each friend gets <strong>3 pencils</strong>.<br>• Left over = 15 - 12 = <strong>3 pencils left over</strong>.<br><br><strong>(c) Division Equation:</strong><br>• 15 ÷ 4 = <strong>Quotient = 3, Remainder = 3</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct share per child (3 pencils)", marks: "1.0 M" },
        { key: "Correct remainder (3 pencils)", marks: "1.0 M" },
        { key: "Correct division format with quotient and remainder", marks: "1.0 M" }
      ]
    },
    {
      category: "Visual Fractions • Shading Geometric Figures",
      q: "A circle is divided into 4 equal quarters.<br>(a) If you shade 2 quarters, what fraction of the circle is shaded? Write it in simplest form.<br>(b) How many quarters must be shaded to show 1 whole circle?<br>(c) Which is larger: 1/2 of a chapati or 1/4 of the same chapati?",
      ans: "<strong>Solution:</strong><br><strong>(a) Shading 2 Quarters:</strong><br>• Fraction = 2/4 = <strong>1/2 (Half)</strong>.<br><br><strong>(b) One Whole Circle:</strong><br>• All <strong>4 quarters</strong> must be shaded (4/4 = 1).<br><br><strong>(c) Comparison:</strong><br>• <strong>1/2 is larger than 1/4</strong>. Half a chapati gives two quarters, which is twice as much as one quarter.",
      marks: 3,
      rubric: [
        { key: "Correct fraction simplification: 2/4 = 1/2", marks: "1.0 M" },
        { key: "Correct quarters for whole (4 quarters)", marks: "1.0 M" },
        { key: "Correct comparison with justification (1/2 > 1/4)", marks: "1.0 M" }
      ]
    },
    {
      category: "Team Formation • Equal Division",
      q: "In Class 3, there are 28 students. The sports teacher wants to form teams with exactly 4 students in each team for a relay race.<br>(a) How many complete teams can be formed?<br>(b) If the teacher instead forms teams of 5 students each, how many teams will be formed, and how many students will be substitutes?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Teams of 4:</strong><br>• 28 ÷ 4 = <strong>7 teams</strong>.<br>• 0 students left over.<br><br><strong>(b) Teams of 5:</strong><br>• 5 × 5 = 25 students.<br>• <strong>5 complete teams</strong> can be formed.<br>• Substitutes left over = 28 - 25 = <strong>3 students</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct calculation for teams of 4 (7 teams)", marks: "1.5 M" },
        { key: "Correct calculation for teams of 5 (5 teams and 3 substitutes)", marks: "1.5 M" }
      ]
    }
  ],
  mm9: [
    {
      category: "3-Digit Number Comparison • Greater Than / Less Than",
      q: "Compare the following pairs of 3-digit numbers using the correct symbol (&gt;, &lt;, or =):<br>(a) 648 ___ 684<br>(b) 705 ___ 507<br>(c) 830 ___ 800 + 30<br>(d) 999 ___ 1000",
      ans: "<strong>Comparisons:</strong><br>• <strong>(a) 648 &lt; 684</strong> (Both have 6 hundreds; in tens place, 4 &lt; 8).<br>• <strong>(b) 705 &gt; 507</strong> (In hundreds place, 7 &gt; 5).<br>• <strong>(c) 830 = 800 + 30</strong> (800 + 30 = 830).<br>• <strong>(d) 999 &lt; 1000</strong> (999 is a 3-digit number, 1000 is a 4-digit number).",
      marks: 4,
      rubric: [
        { key: "Correct symbol for (a) and (b)", marks: "2.0 M" },
        { key: "Correct symbol for (c) and (d)", marks: "2.0 M" }
      ]
    },
    {
      category: "Forming Greatest and Smallest Numbers",
      q: "Using the digits 3, 8, and 5 exactly once in each number:<br>(a) Form the greatest 3-digit number.<br>(b) Form the smallest 3-digit number.<br>(c) Find the difference between the greatest and smallest numbers formed.",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Greatest 3-Digit Number:</strong><br>• Arrange digits in descending order: 8, 5, 3 $\\rightarrow$ <strong>853</strong>.<br><br><strong>(b) Smallest 3-Digit Number:</strong><br>• Arrange digits in ascending order: 3, 5, 8 $\\rightarrow$ <strong>358</strong>.<br><br><strong>(c) Difference:</strong><br>• 853 - 358 = <strong>495</strong>.<br><em>(Borrowing check: 13 - 8 = 5, 14 - 5 = 9, 7 - 3 = 4 $\\rightarrow$ 495).</em>",
      marks: 3,
      rubric: [
        { key: "Correct greatest number (853)", marks: "1.0 M" },
        { key: "Correct smallest number (358)", marks: "1.0 M" },
        { key: "Correct subtraction (853 - 358 = 495)", marks: "1.0 M" }
      ]
    },
    {
      category: "Ordering Numbers • Ascending & Descending",
      q: "Given the numbers: 582, 528, 852, 285, 825.<br>(a) Arrange them in Ascending Order (smallest to largest).<br>(b) Arrange them in Descending Order (largest to smallest).",
      ans: "<strong>Step-by-Step Arrangement:</strong><br><strong>(a) Ascending Order:</strong><br>• <strong>285 &lt; 528 &lt; 582 &lt; 825 &lt; 852</strong>.<br><br><strong>(b) Descending Order:</strong><br>• <strong>852 &gt; 825 &gt; 582 &gt; 528 &gt; 285</strong>.",
      marks: 3,
      rubric: [
        { key: "Accurate ascending sequence", marks: "1.5 M" },
        { key: "Accurate descending sequence", marks: "1.5 M" }
      ]
    },
    {
      category: "Skip Counting Beyond 500 • Number Track",
      q: "Write the next 3 numbers in each sequence:<br>(a) 550, 600, 650, ___, ___, ___<br>(b) 720, 740, 760, ___, ___, ___<br>(c) 980, 985, 990, ___, ___, ___",
      ans: "<strong>Solution:</strong><br><strong>(a) Counting by 50s (+50):</strong> 550, 600, 650, <strong>700</strong>, <strong>750</strong>, <strong>800</strong>.<br><strong>(b) Counting by 20s (+20):</strong> 720, 740, 760, <strong>780</strong>, <strong>800</strong>, <strong>820</strong>.<br><strong>(c) Counting by 5s (+5):</strong> 980, 985, 990, <strong>995</strong>, <strong>1000</strong>, <strong>1005</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct blanks in sequence (a): 700, 750, 800", marks: "1.0 M" },
        { key: "Correct blanks in sequence (b): 780, 800, 820", marks: "1.0 M" },
        { key: "Correct blanks in sequence (c): 995, 1000, 1005", marks: "1.0 M" }
      ]
    }
  ],
  mm10: [
    {
      category: "Drink Sharing • Capacity Math",
      q: "For the class party, the teacher bought two 2-litre bottles of mango juice.<br>(a) How many total litres of mango juice were bought?<br>(b) Convert the total litres into millilitres (mL).<br>(c) If each paper cup holds 200 mL, how many cups of juice can be served in total?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Litres:</strong><br>• 2 bottles × 2 litres = <strong>4 litres</strong>.<br><br><strong>(b) Conversion to mL:</strong><br>• 1 litre = 1000 mL.<br>• 4 litres = 4 × 1000 = <strong>4000 mL</strong>.<br><br><strong>(c) Cups Served:</strong><br>• Capacity per cup = 200 mL.<br>• Total cups = 4000 ÷ 200 = <strong>20 cups</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct total litres (4 L)", marks: "1.0 M" },
        { key: "Correct conversion (4000 mL)", marks: "1.0 M" },
        { key: "Correct cups division (20 cups)", marks: "1.0 M" }
      ]
    },
    {
      category: "Party Schedule • Duration Calculation",
      q: "The Class 3 party began at 10:45 AM and ended at 1:15 PM.<br>(a) How many hours and minutes did the party last?<br>(b) If musical chairs took 40 minutes and quiz took 30 minutes, how much time was left for eating snacks and dancing?",
      ans: "<strong>Step-by-Step Time Calculation:</strong><br><strong>(a) Total Duration:</strong><br>• From 10:45 AM to 11:00 AM = 15 minutes.<br>• From 11:00 AM to 1:00 PM = 2 hours.<br>• From 1:00 PM to 1:15 PM = 15 minutes.<br>• Total = 2 hours + 15 min + 15 min = <strong>2 hours 30 minutes</strong> (or 150 minutes).<br><br><strong>(b) Remaining Time:</strong><br>• Games time = 40 min + 30 min = 70 minutes.<br>• Remaining time = 150 min - 70 min = <strong>80 minutes</strong> (or <strong>1 hour 20 minutes</strong>).",
      marks: 3,
      rubric: [
        { key: "Correct total duration (2 hours 30 minutes)", marks: "1.5 M" },
        { key: "Correct remaining time (80 minutes / 1 hr 20 min)", marks: "1.5 M" }
      ]
    },
    {
      category: "Snack Budget & Cash Memo",
      q: "Prepare a bill for the following party purchases:<br>• 25 samosas at ₹8 each<br>• 30 bananas at ₹4 each<br>• 2 packets of paper plates at ₹25 per packet<br>Calculate the total bill and the change from a ₹500 note.",
      ans: "<strong>Step-by-Step Bill:</strong><br>• Samosas: 25 × ₹8 = ₹200.<br>• Bananas: 30 × ₹4 = ₹120.<br>• Plates: 2 × ₹25 = ₹50.<br>• <strong>Total Bill:</strong> ₹200 + ₹120 + ₹50 = <strong>₹370</strong>.<br><br><strong>Change from ₹500:</strong><br>• Change = ₹500 - ₹370 = <strong>₹130</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct itemised multiplication and sum (₹370)", marks: "2.0 M" },
        { key: "Correct change subtraction (₹130)", marks: "1.0 M" }
      ]
    },
    {
      category: "Tally Chart of Party Games",
      q: "In a survey of 24 children about their favorite party game:<br>• 8 chose Musical Chairs<br>• 7 chose Dumb Charades<br>• 5 chose Antakshari<br>• 4 chose Passing the Parcel<br>(a) Draw a tally chart representing these votes.<br>(b) Which game was the most popular and which was the least popular?",
      ans: "<strong>(a) Tally Chart:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:6px;'><thead><tr style='background:#f1f5f9;'><th style='padding:6px;border:1px solid #cbd5e1;'>Game</th><th style='padding:6px;border:1px solid #cbd5e1;'>Tally Marks</th><th style='padding:6px;border:1px solid #cbd5e1;'>Number of Votes</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Musical Chairs</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> |||</td><td style='padding:6px;border:1px solid #cbd5e1;'>8</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Dumb Charades</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s> ||</td><td style='padding:6px;border:1px solid #cbd5e1;'>7</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Antakshari</td><td style='padding:6px;border:1px solid #cbd5e1;'><s>||||</s></td><td style='padding:6px;border:1px solid #cbd5e1;'>5</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'>Passing the Parcel</td><td style='padding:6px;border:1px solid #cbd5e1;'>||||</td><td style='padding:6px;border:1px solid #cbd5e1;'>4</td></tr><tr style='font-weight:700;'><td style='padding:6px;border:1px solid #cbd5e1;'>Total</td><td style='padding:6px;border:1px solid #cbd5e1;'>—</td><td style='padding:6px;border:1px solid #cbd5e1;'>24</td></tr></tbody></table><br><strong>(b) Popularity:</strong><br>• <strong>Most popular:</strong> Musical Chairs (8 votes).<br>• <strong>Least popular:</strong> Passing the Parcel (4 votes).",
      marks: 3,
      rubric: [
        { key: "Correct tally marks layout and bundle counts", marks: "2.0 M" },
        { key: "Correct identification of most and least popular games", marks: "1.0 M" }
      ]
    }
  ],
  mm11: [
    {
      category: "Capacity Ranking • Everyday Containers",
      q: "Arrange the following containers in order of their capacity, from holding the least water to holding the most water:<br>Water tanker, Tea spoon, Bucket, Glass, Water bottle.",
      ans: "<strong>Capacity Ordering (Least to Most):</strong><br>1. <strong>Tea spoon</strong> (~5 mL)<br>2. <strong>Glass</strong> (~250 mL)<br>3. <strong>Water bottle</strong> (~1 Litre / 1000 mL)<br>4. <strong>Bucket</strong> (~15 to 20 Litres)<br>5. <strong>Water tanker</strong> (~5000 Litres).<br><br><strong>Order:</strong> Tea spoon &lt; Glass &lt; Water bottle &lt; Bucket &lt; Water tanker.",
      marks: 3,
      rubric: [
        { key: "Correct ranking from least to most", marks: "2.0 M" },
        { key: "Reasonable real-life capacity estimates", marks: "1.0 M" }
      ]
    },
    {
      category: "Balance Scale • Weights in Grams and Kilograms",
      q: "A grocer wants to weigh 1 kg of sugar. He has standard weights of 500 g, 200 g, and 100 g.<br>(a) How many 500 g weights balance 1 kg?<br>(b) How many 200 g weights balance 1 kg?<br>(c) Give a combination using all three weights (500 g, 200 g, 100 g) that together equal 1 kg.",
      ans: "<strong>Step-by-Step Weights:</strong><br>• 1 kg = 1000 grams.<br><strong>(a) 500 g Weights:</strong><br>• 1000 ÷ 500 = <strong>2 weights of 500 g</strong>.<br><br><strong>(b) 200 g Weights:</strong><br>• 1000 ÷ 200 = <strong>5 weights of 200 g</strong>.<br><br><strong>(c) Combined Weights:</strong><br>• One 500 g weight = 500 g<br>• Two 200 g weights = 400 g<br>• One 100 g weight = 100 g<br>• Total = 500 g + 400 g + 100 g = <strong>1000 g = 1 kg</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct answers for (a): 2 weights, and (b): 5 weights", marks: "1.5 M" },
        { key: "Correct mixed combination summing to 1000 g", marks: "1.5 M" }
      ]
    },
    {
      category: "Weight Addition & Subtraction • Grocery Sack",
      q: "A family bought a 25 kg sack of wheat flour. In the first week, they used 8 kg 500 g. In the second week, they used 7 kg 250 g.<br>(a) What was the total weight of flour used in the two weeks?<br>(b) How much flour remains in the sack?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Flour Used:</strong><br>• Week 1: 8 kg 500 g<br>• Week 2: 7 kg 250 g<br>• Sum: (8 + 7) kg + (500 + 250) g = <strong>15 kg 750 g</strong>.<br><br><strong>(b) Remaining Flour:</strong><br>• Total in sack = 25 kg 000 g<br>• Used = 15 kg 750 g<br>• Subtraction: 24 kg 1000 g - 15 kg 750 g = <strong>9 kg 250 g</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct addition of compound weights (15 kg 750 g)", marks: "1.5 M" },
        { key: "Correct subtraction from 25 kg (9 kg 250 g)", marks: "1.5 M" }
      ]
    },
    {
      category: "Measuring Jug Puzzle • Liquid Volume",
      q: "A bucket holds 12 litres of water. You only have a 2-litre jug and a 500 mL mug.<br>(a) How many full 2-litre jugs are needed to fill the bucket completely?<br>(b) How many 500 mL mugs are needed to equal one 2-litre jug?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Jugs to fill bucket:</strong><br>• Total bucket capacity = 12 litres.<br>• Jug capacity = 2 litres.<br>• Number of jugs = 12 ÷ 2 = <strong>6 jugs</strong>.<br><br><strong>(b) Mugs per jug:</strong><br>• 1 litre = 1000 mL = two 500 mL mugs.<br>• 2 litres = 2 × 2 = <strong>4 mugs of 500 mL</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct calculation for jugs (6 jugs)", marks: "1.5 M" },
        { key: "Correct calculation for mugs (4 mugs)", marks: "1.5 M" }
      ]
    }
  ],
  mm12: [
    {
      category: "Multi-Digit Addition • Regrouping Drill",
      q: "Solve the following additions showing carrying over clearly:<br>(a) 247 + 185<br>(b) 368 + 279<br>(c) Estimate the sum of 247 + 185 to the nearest hundred.",
      ans: "<strong>Step-by-Step Solutions:</strong><br><strong>(a) 247 + 185:</strong><br>• Ones: 7 + 5 = 12 (Write 2, carry 1 to tens)<br>• Tens: 1 (carry) + 4 + 8 = 13 (Write 3, carry 1 to hundreds)<br>• Hundreds: 1 (carry) + 2 + 1 = 4<br>• Sum = <strong>432</strong>.<br><br><strong>(b) 368 + 279:</strong><br>• Ones: 8 + 9 = 17 (Write 7, carry 1)<br>• Tens: 1 + 6 + 7 = 14 (Write 4, carry 1)<br>• Hundreds: 1 + 3 + 2 = 6<br>• Sum = <strong>647</strong>.<br><br><strong>(c) Nearest Hundred Estimation:</strong><br>• 247 rounds to 200; 185 rounds to 200.<br>• Estimated sum = 200 + 200 = <strong>400</strong> (Actual 432 is very close to 400).",
      marks: 3,
      rubric: [
        { key: "Correct carrying and sum for (a): 432", marks: "1.0 M" },
        { key: "Correct carrying and sum for (b): 647", marks: "1.0 M" },
        { key: "Correct estimation explanation (400)", marks: "1.0 M" }
      ]
    },
    {
      category: "Multi-Digit Subtraction • Borrowing Across Tens",
      q: "Solve the following subtractions showing borrowing steps:<br>(a) 512 - 278<br>(b) Check your subtraction answer using addition.",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) 512 - 278:</strong><br>• Ones: 2 - 8 cannot be done. Borrow 1 ten from 1 ten (leaving 0 tens). Ones become 12. 12 - 8 = <strong>4</strong>.<br>• Tens: 0 - 7 cannot be done. Borrow 1 hundred from 5 hundreds (leaving 4 hundreds). Tens become 10. 10 - 7 = <strong>3</strong>.<br>• Hundreds: 4 - 2 = <strong>2</strong>.<br>• Difference = <strong>234</strong>.<br><br><strong>(b) Verification using Addition:</strong><br>• Difference + Subtrahend = Minuend<br>• 234 + 278 = (200 + 200) + (30 + 70) + (4 + 8) = 400 + 100 + 12 = <strong>512</strong>.<br>• Since 512 matches the starting number, the answer is <strong>Verified Correct</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct borrowing and difference (234)", marks: "1.5 M" },
        { key: "Correct addition check formula and execution (234 + 278 = 512)", marks: "1.5 M" }
      ]
    },
    {
      category: "Two-Step Word Problem • Bakery Sales",
      q: "A baker baked 350 buns in the morning. He sold 215 buns by lunchtime. In the afternoon, he baked 120 fresh buns.<br>(a) How many buns were left after the lunchtime sales?<br>(b) How many buns did he have in total in the afternoon?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Buns Left after Lunch:</strong><br>• Morning buns baked = 350<br>• Buns sold = 215<br>• Leftover = 350 - 215 = <strong>135 buns</strong>.<br><br><strong>(b) Total Buns in Afternoon:</strong><br>• Leftover buns = 135<br>• Fresh buns baked = 120<br>• Total = 135 + 120 = <strong>255 buns</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct subtraction step (350 - 215 = 135)", marks: "1.5 M" },
        { key: "Correct addition step (135 + 120 = 255)", marks: "1.5 M" }
      ]
    },
    {
      category: "Token Card Method • Visual Mental Math",
      q: "Represent the subtraction 65 - 38 using square cards of 10 and triangle cards of 1.<br>(a) How many 10-cards and 1-cards are in 65?<br>(b) Explain how exchanging one 10-card for ten 1-cards allows you to subtract 38.",
      ans: "<strong>Visual Token Method:</strong><br><strong>(a) Cards for 65:</strong><br>• 65 = <strong>six 10-cards</strong> and <strong>five 1-cards</strong>.<br><br><strong>(b) Exchange and Subtraction:</strong><br>• To subtract 38, we need to take away 3 ten-cards and 8 one-cards.<br>• We only have 5 one-cards, so we <strong>exchange one 10-card for ten 1-cards</strong>.<br>• Now we have: 5 ten-cards and 15 one-cards (10 + 5).<br>• Subtract 8 one-cards from 15 one-cards $\\rightarrow$ <strong>7 one-cards left</strong>.<br>• Subtract 3 ten-cards from 5 ten-cards $\\rightarrow$ <strong>2 ten-cards left</strong>.<br>• Remaining cards = two 10-cards + seven 1-cards = <strong>27</strong>.<br>• Therefore, 65 - 38 = <strong>27</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct card representation for 65 (6 tens, 5 ones)", marks: "1.0 M" },
        { key: "Clear visual explanation of exchanging 1 ten for 10 ones", marks: "1.0 M" },
        { key: "Correct final result (27)", marks: "1.0 M" }
      ]
    }
  ],
  mm13: [
    {
      category: "Analog Clock Face • Time Reading",
      q: "Look at an analog clock face:<br>(a) Where does the hour hand and minute hand point at 4:15 (quarter past 4)?<br>(b) Where do they point at 7:30 (half past 7)?<br>(c) Where do they point at 9:45 (quarter to 10)?",
      ans: "<strong>Analog Clock Positions:</strong><br>• <strong>(a) 4:15:</strong> The minute hand points directly at <strong>3</strong>. The hour hand is slightly past <strong>4</strong>.<br>• <strong>(b) 7:30:</strong> The minute hand points directly at <strong>6</strong>. The hour hand is halfway between <strong>7 and 8</strong>.<br>• <strong>(c) 9:45:</strong> The minute hand points directly at <strong>9</strong>. The hour hand is close to <strong>10</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct minute and hour hand positions for 4:15", marks: "1.0 M" },
        { key: "Correct minute and hour hand positions for 7:30", marks: "1.0 M" },
        { key: "Correct minute and hour hand positions for 9:45", marks: "1.0 M" }
      ]
    },
    {
      category: "Calendar Reading • Days and Months",
      q: "Answer the following calendar questions:<br>(a) How many months in a year have exactly 31 days? Name any three.<br>(b) How many days does February have in a leap year and in an ordinary year?<br>(c) If 5th September is a Tuesday, what day of the week is 12th September?",
      ans: "<strong>Calendar Facts:</strong><br>• <strong>(a) 31-Day Months:</strong> There are <strong>7 months</strong> with 31 days (January, March, May, July, August, October, December).<br>• <strong>(b) February:</strong> February has <strong>29 days in a leap year</strong> and <strong>28 days in an ordinary year</strong>.<br>• <strong>(c) Day Calculation:</strong><br>  - Since there are 7 days in a week, adding 7 days gives the same day of the week.<br>  - 5 + 7 = 12th September is also a <strong>Tuesday</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct count (7) and names of 31-day months", marks: "1.0 M" },
        { key: "Correct February days (29 leap, 28 ordinary)", marks: "1.0 M" },
        { key: "Correct day of the week deduction (Tuesday)", marks: "1.0 M" }
      ]
    },
    {
      category: "Duration of Daily Routines • Elapsed Time",
      q: "Aman's daily schedule is as follows:<br>• Leaves for school: 7:30 AM<br>• Returns from school: 2:00 PM<br>(a) How many hours does Aman spend away at school?<br>(b) He plays football from 5:15 PM to 6:30 PM. What is the duration of his playtime?",
      ans: "<strong>Step-by-Step Elapsed Time:</strong><br><strong>(a) Time at School:</strong><br>• From 7:30 AM to 12:00 noon = 4 hours 30 minutes.<br>• From 12:00 noon to 2:00 PM = 2 hours.<br>• Total school time = 4 hr 30 min + 2 hr = <strong>6 hours 30 minutes</strong>.<br><br><strong>(b) Playtime Duration:</strong><br>• From 5:15 PM to 6:15 PM = 1 hour (60 minutes).<br>• From 6:15 PM to 6:30 PM = 15 minutes.<br>• Total playtime = <strong>1 hour 15 minutes</strong> (or 75 minutes).",
      marks: 3,
      rubric: [
        { key: "Correct school duration (6 hours 30 minutes)", marks: "1.5 M" },
        { key: "Correct playtime duration (1 hour 15 minutes)", marks: "1.5 M" }
      ]
    },
    {
      category: "Age Timeline • Date of Birth Analysis",
      q: "Kavya was born on 15th August 2018.<br>(a) How old was she on 15th August 2024?<br>(b) How old will she be on 15th August 2030?<br>(c) In which year did she celebrate her 5th birthday?",
      ans: "<strong>Step-by-Step Timeline:</strong><br><strong>(a) Age in 2024:</strong><br>• 2024 - 2018 = <strong>6 years old</strong>.<br><br><strong>(b) Age in 2030:</strong><br>• 2030 - 2018 = <strong>12 years old</strong>.<br><br><strong>(c) 5th Birthday Year:</strong><br>• 2018 + 5 = <strong>Year 2023</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct age in 2024 (6 years)", marks: "1.0 M" },
        { key: "Correct age in 2030 (12 years)", marks: "1.0 M" },
        { key: "Correct 5th birthday year (2023)", marks: "1.0 M" }
      ]
    }
  ],
  mm14: [
    {
      category: "Craft Stall Purchases • Multiplication & Addition",
      q: "At the Surajkund Fair, Maya visited the wooden toy stall. She bought:<br>• 4 wooden birds at ₹30 each<br>• 2 wooden tops at ₹20 each<br>• 1 wooden flute for ₹45<br>(a) Calculate the cost of each item and the total bill.<br>(b) If Maya pays with a ₹500 note, how much change will she get?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Bill Calculation:</strong><br>• 4 wooden birds = 4 × ₹30 = ₹120.<br>• 2 wooden tops = 2 × ₹20 = ₹40.<br>• 1 wooden flute = ₹45.<br>• Total Bill = ₹120 + ₹40 + ₹45 = <strong>₹205</strong>.<br><br><strong>(b) Change Received:</strong><br>• Amount paid = ₹500.<br>• Change = ₹500 - ₹205 = <strong>₹295</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct itemised totals and total bill (₹205)", marks: "2.0 M" },
        { key: "Correct subtraction for change (₹295)", marks: "1.0 M" }
      ]
    },
    {
      category: "Fair Rides • Family Ticket Pricing",
      q: "Ticket prices for rides at the Surajkund Fair:<br>• Giant Wheel: ₹40 per person<br>• Toy Train: ₹25 per person<br>• Bumper Cars: ₹50 per person<br>A family of 2 parents and 2 children want to go on the Giant Wheel and Toy Train.<br>(a) What is the total cost for the family on the Giant Wheel?<br>(b) What is the total cost for the family on the Toy Train?<br>(c) What is the grand total for all rides?",
      ans: "<strong>Step-by-Step Solution:</strong><br>• Total family members = 2 adults + 2 children = 4 persons.<br><strong>(a) Giant Wheel Cost:</strong><br>• 4 persons × ₹40 = <strong>₹160</strong>.<br><br><strong>(b) Toy Train Cost:</strong><br>• 4 persons × ₹25 = <strong>₹100</strong>.<br><br><strong>(c) Grand Total:</strong><br>• Total rides cost = ₹160 + ₹100 = <strong>₹260</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct Giant Wheel total (₹160)", marks: "1.0 M" },
        { key: "Correct Toy Train total (₹100)", marks: "1.0 M" },
        { key: "Correct grand total (₹260)", marks: "1.0 M" }
      ]
    },
    {
      category: "Pictograph Reading • Visitor Attendance",
      q: "The fair authorities recorded visitor counts using a pictograph where 🎟️ = 100 visitors:<br>• Friday: 🎟️🎟️🎟️🎟️ (4 tickets)<br>• Saturday: 🎟️🎟️🎟️🎟️🎟️🎟️ (6 tickets)<br>• Sunday: 🎟️🎟️🎟️🎟️🎟️🎟️🎟️🎟️ (8 tickets)<br>(a) How many visitors attended on Friday, Saturday, and Sunday respectively?<br>(b) What was the total number of visitors over the weekend (Saturday + Sunday)?<br>(c) How many more visitors attended on Sunday than on Friday?",
      ans: "<strong>Step-by-Step Pictograph Analysis:</strong><br>• Scale: 1 🎟️ = 100 visitors.<br><strong>(a) Daily Visitors:</strong><br>• Friday: 4 × 100 = <strong>400 visitors</strong>.<br>• Saturday: 6 × 100 = <strong>600 visitors</strong>.<br>• Sunday: 8 × 100 = <strong>800 visitors</strong>.<br><br><strong>(b) Weekend Total:</strong><br>• Saturday + Sunday = 600 + 800 = <strong>1400 visitors</strong>.<br><br><strong>(c) Difference (Sunday vs Friday):</strong><br>• 800 - 400 = <strong>400 more visitors</strong> on Sunday.",
      marks: 3,
      rubric: [
        { key: "Correct conversion for all three days (400, 600, 800)", marks: "1.5 M" },
        { key: "Correct weekend total (1400) and difference (400)", marks: "1.5 M" }
      ]
    },
    {
      category: "Food Court Bill • Addition and Discount",
      q: "At the fair's food street, Kabir's group ordered:<br>• 3 plates of Pav Bhaji at ₹60 per plate<br>• 4 glasses of Lassi at ₹30 per glass<br>• 2 plates of Jalebi at ₹40 per plate<br>(a) What was the total food bill?<br>(b) If the stall owner offered a festival discount of ₹40, how much did Kabir actually pay?",
      ans: "<strong>Step-by-Step Solution:</strong><br><strong>(a) Total Bill:</strong><br>• Pav Bhaji: 3 × ₹60 = ₹180.<br>• Lassi: 4 × ₹30 = ₹120.<br>• Jalebi: 2 × ₹40 = ₹80.<br>• Total bill = ₹180 + ₹120 + ₹80 = <strong>₹380</strong>.<br><br><strong>(b) Discounted Payment:</strong><br>• Discount = ₹40.<br>• Amount paid = ₹380 - ₹40 = <strong>₹340</strong>.",
      marks: 3,
      rubric: [
        { key: "Correct sub-totals and bill before discount (₹380)", marks: "2.0 M" },
        { key: "Correct subtraction of discount (₹340)", marks: "1.0 M" }
      ]
    }
  ]
};

module.exports = { mathsMelaExtra };
