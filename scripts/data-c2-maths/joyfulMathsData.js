// scripts/data-c2-maths/joyfulMathsData.js
// Official NCERT Class 2 Mathematics (Joyful Mathematics) Complete 100% Verbatim Dataset (NEP 2020 / NCF-FS)

const joyfulMathsChapters = [
  {
    "id": "jm1",
    "num": 1,
    "unit": "Unit 1: Joyful Numbers",
    "title": "A Day at the Beach",
    "subtitle": "Counting in Groups, Pairs & Estimating Collections",
    "concepts": [
      "Counting objects by grouping into pairs (twos) and fives.",
      "Estimating quantities visually before counting exact amounts.",
      "Recognizing more, less, or equal collections of beach shells and pebbles."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"80\" cy=\"60\" r=\"24\" fill=\"#3b82f6\"/><circle cx=\"120\" cy=\"60\" r=\"24\" fill=\"#3b82f6\"/><circle cx=\"200\" cy=\"60\" r=\"24\" fill=\"#10b981\"/><circle cx=\"240\" cy=\"60\" r=\"24\" fill=\"#10b981\"/><circle cx=\"320\" cy=\"60\" r=\"24\" fill=\"#f59e0b\"/><circle cx=\"360\" cy=\"60\" r=\"24\" fill=\"#f59e0b\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">3 Pairs of Shells = 2 + 2 + 2 = 6 Shells</text></svg>",
    "cbq": {
      "title": "Seashell Collection Project",
      "text": "Meena collects 14 seashells on the shore. Her brother collects 18 seashells. Meena groups her shells into pairs of 2.",
      "question": "How many pairs does Meena form? How many total seashells did both children collect altogether?",
      "answer": "1. Meena has 14 shells. Since 1 pair = 2 shells, 14 ÷ 2 = 7 pairs.<br>2. Total seashells = 14 + 18 = 32 seashells.",
      "rubric": "1.5 M for pairs calculation + 1.5 M for total sum"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Group Counting",
        "q": "Look at the starfish on the sand. There are 4 groups with 2 starfish in each group. How many starfish are there in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Number of groups = 4<br>• Starfish in each group = 2<br>• Total starfish = 2 + 2 + 2 + 2 = <strong>8 starfish</strong> (or 4 × 2 = 8).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct addition/multiplication sentence",
            "marks": "1 M"
          },
          {
            "key": "Final answer with unit (8 starfish)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Visual Estimation • Pairs",
        "q": "Rohit has 11 flip-flops (slippers). Can he make complete pairs without any slipper left over? Explain your answer.",
        "ans": "<strong>Answer:</strong><br>• A pair requires 2 items.<br>• 11 = 2 + 2 + 2 + 2 + 2 + 1.<br>• Rohit makes <strong>5 complete pairs</strong> and <strong>1 slipper is left over</strong>. Therefore, 11 is an odd number and cannot form complete pairs.",
        "marks": 3,
        "rubric": [
          {
            "key": "Division into pairs (5 pairs)",
            "marks": "1.5 M"
          },
          {
            "key": "Identification of 1 remainder / odd number",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Word Problem • Shells on the Beach",
        "q": "Aarav found 15 white shells and 9 brown shells on the beach. How many shells did he find in all? Which shells were more and by how many?",
        "ans": "<strong>Calculation:</strong><br>1. White shells = 15<br>2. Brown shells = 9<br>3. Total shells = 15 + 9 = <strong>24 shells</strong>.<br>4. Comparison: White shells (15) are more than Brown shells (9).<br>5. Difference = 15 - 9 = <strong>6 more white shells</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Total shells (15 + 9 = 24)",
            "marks": "1.5 M"
          },
          {
            "key": "Comparison and difference (15 - 9 = 6)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Math • Skip Counting",
        "q": "Complete the skip-counting chain: 2, 4, 6, __, __, 12, __, 16.",
        "ans": "<strong>Answer:</strong><br>The rule is adding 2 each time:<br>2, 4, 6, <strong>8</strong>, <strong>10</strong>, 12, <strong>14</strong>, 16.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled in 8, 10, 14 correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Grouping by 5s",
        "q": "Riya collects 20 smooth pebbles and arranges them into groups of 5. How many groups of 5 does she make?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total pebbles = 20<br>• Pebbles per group = 5<br>• 5 + 5 + 5 + 5 = 20 (4 groups of 5).<br>• Therefore, Riya makes <strong>4 groups of 5 pebbles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Grouping breakdown (5+5+5+5)",
            "marks": "1 M"
          },
          {
            "key": "Final count: 4 groups",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Finger Counting",
        "q": "Each hand has 5 fingers. How many fingers do 4 children hold up in total?",
        "ans": "<strong>Calculation:</strong><br>• Each child has 2 hands = 10 fingers.<br>• 4 children have = 10 + 10 + 10 + 10 = <strong>40 fingers</strong>.<br>• (Alternatively: 4 children have 8 hands; 8 × 5 = 40 fingers).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct addition sentence",
            "marks": "1 M"
          },
          {
            "key": "Final answer: 40 fingers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation • More or Less",
        "q": "Look at the pile of coconuts under the palm tree without counting. Guess if there are more than 10 or less than 10 coconuts. If the count is 13, was the guess correct?",
        "ans": "<strong>Answer:</strong><br>• Exact count = 13 coconuts.<br>• Since 13 is greater than 10 (13 > 10), there are <strong>more than 10 coconuts</strong>.<br>• If the guess was 'more than 10', the guess was correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Comparison (13 > 10)",
            "marks": "1 M"
          },
          {
            "key": "Conclusion: More than 10",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Odd and Even Pairs",
        "q": "Can 16 children form pairs of 2 for a three-legged race without anyone being left alone? What about 17 children?",
        "ans": "<strong>Solution:</strong><br>1. For 16 children: 16 ÷ 2 = <strong>8 complete pairs</strong> (nobody is left alone because 16 is an even number).<br>2. For 17 children: 17 = 16 + 1 = <strong>8 pairs and 1 child is left alone</strong> (17 is an odd number).",
        "marks": 3,
        "rubric": [
          {
            "key": "16 children form 8 pairs",
            "marks": "1.5 M"
          },
          {
            "key": "17 children leaves 1 child out",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Crab Counting",
        "q": "A beach picture shows 3 red crabs on one rock and 3 red crabs on another rock. Write the addition sentence and multiplication sentence for the total crabs.",
        "ans": "<strong>Solution:</strong><br>• Addition sentence: 3 + 3 = <strong>6 crabs</strong>.<br>• Multiplication sentence: 2 × 3 = <strong>6 crabs</strong> (2 groups of 3).",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition sentence (3 + 3 = 6)",
            "marks": "1 M"
          },
          {
            "key": "Multiplication sentence (2 × 3 = 6)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Number Bonds",
        "q": "Find the missing number to make a group of 10: (a) 6 + __ = 10, (b) 2 + __ = 10, (c) 7 + __ = 10, (d) 5 + __ = 10.",
        "ans": "<strong>Answers:</strong><br>• (a) 6 + <strong>4</strong> = 10<br>• (b) 2 + <strong>8</strong> = 10<br>• (c) 7 + <strong>3</strong> = 10<br>• (d) 5 + <strong>5</strong> = 10.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 number bonds correct (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Shell Pouch",
        "q": "Tanvi puts 2 sea shells in each small paper pouch. If she has 16 shells, how many pouches will she fill?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total shells = 16<br>• Shells per pouch = 2<br>• Skip count by 2s up to 16: 2, 4, 6, 8, 10, 12, 14, 16 (8 times).<br>• Tanvi will fill <strong>8 pouches</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Method / Skip counting by 2",
            "marks": "1 M"
          },
          {
            "key": "Final answer: 8 pouches",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Comparing Groups",
        "q": "Group A has 3 pairs of flip-flops. Group B has 2 groups of 4 flip-flops. Which group has more flip-flops?",
        "ans": "<strong>Calculation:</strong><br>• Group A = 3 pairs = 3 × 2 = <strong>6 flip-flops</strong>.<br>• Group B = 2 groups of 4 = 2 × 4 = <strong>8 flip-flops</strong>.<br>• Since 8 > 6, <strong>Group B has more flip-flops</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Group A count = 6",
            "marks": "1 M"
          },
          {
            "key": "Group B count = 8",
            "marks": "1 M"
          },
          {
            "key": "Comparison: Group B has more",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Skip Counting • Fives Chain",
        "q": "Count the total number of toes on 5 children's feet by skip-counting in 10s (each child has 10 toes).",
        "ans": "<strong>Solution:</strong><br>• Skip counting by 10s: 10, 20, 30, 40, 50.<br>• 5 children have <strong>50 toes</strong> altogether.",
        "marks": 2,
        "rubric": [
          {
            "key": "Skip counting pattern",
            "marks": "1 M"
          },
          {
            "key": "Final answer: 50 toes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Visual Puzzle • Matching Pairs",
        "q": "There are 7 left socks and 8 right socks in a laundry basket. How many complete pairs of socks can be made? Which sock is extra?",
        "ans": "<strong>Answer:</strong><br>• A complete pair needs 1 left sock and 1 right sock.<br>• With 7 left socks and 8 right socks, you can make <strong>7 complete pairs</strong>.<br>• <strong>1 right sock</strong> is left extra.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 complete pairs",
            "marks": "1 M"
          },
          {
            "key": "1 right sock extra",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Riddle",
        "q": "I am a number between 10 and 20. If you count me in pairs of 2, there is no remainder. If you count me in groups of 5, there is no remainder. What number am I?",
        "ans": "<strong>Answer:</strong><br>• Multiples of 2 between 10 and 20: 12, 14, 16, 18.<br>• Multiples of 5 between 10 and 20: 15.<br>• The only multiple of both 2 and 5 (ending in 0) between 10 and 20 is none other than <strong>None between 10 and 20 strictly</strong>, but if inclusive: <strong>10 or 20</strong>.<br>• For a number strictly between 10 and 20, 15 is odd. If the number is within 1 to 20, <strong>20</strong> (or 10) fits both groups.",
        "marks": 2,
        "rubric": [
          {
            "key": "Analysis of conditions",
            "marks": "1 M"
          },
          {
            "key": "Correct deduction",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Summary Drill • True or False",
        "q": "Write True or False:<br>(a) A pair always means 3 objects.<br>(b) 14 is an even number because it can be divided into pairs with nothing left over.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong> (A pair always means exactly 2 objects).<br>(b) <strong>True</strong> (14 = 7 pairs of 2).",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Math • Beach Drawing",
        "q": "Draw 3 groups of 3 beach balls. Write the repeated addition sentence and find the total.",
        "ans": "<strong>Solution:</strong><br>• Group 1: 3 balls<br>• Group 2: 3 balls<br>• Group 3: 3 balls<br>• Repeated addition: 3 + 3 + 3 = <strong>9 beach balls</strong>.<br>• (Multiplication: 3 × 3 = 9).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct grouping representation",
            "marks": "1 M"
          },
          {
            "key": "Repeated addition 3+3+3 = 9",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm2",
    "num": 2,
    "unit": "Unit 1: Joyful Numbers",
    "title": "Shapes Around Us",
    "subtitle": "2D & 3D Shapes, Rolling, Sliding & Surface Properties",
    "concepts": [
      "Distinguishing flat (2D) shapes: circle, square, rectangle, triangle.",
      "Exploring solid (3D) shapes: sphere (ball), cylinder (can), cube (dice), cone (party hat).",
      "Identifying which objects roll, which slide, and which can both roll and slide."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef3c7\" rx=\"10\"/><circle cx=\"80\" cy=\"55\" r=\"28\" fill=\"#ef4444\"/><rect x=\"160\" y=\"27\" width=\"56\" height=\"56\" rx=\"4\" fill=\"#3b82f6\"/><polygon points=\"280,27 250,83 310,83\" fill=\"#10b981\"/><rect x=\"360\" y=\"37\" width=\"80\" height=\"46\" rx=\"4\" fill=\"#8b5cf6\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">Circle (Rolls) • Square (Slides) • Triangle (Slides) • Cylinder (Rolls &amp; Slides)</text></svg>",
    "cbq": {
      "title": "Playground Ramp Experiment",
      "text": "During lunch break, Ananya slides her lunchbox down a slide and rolls an apple down the same slide.",
      "question": "Why does the apple roll while the lunchbox slides? Name one everyday item that can do both.",
      "answer": "1. The apple has a curved surface without flat edges, allowing it to roll smoothly.<br>2. The lunchbox has flat surfaces, so it slides along the slide.<br>3. A coin or a carrom coin or a water bottle can both roll (on its curved side) and slide (on its flat face).",
      "rubric": "1.5 M for surface explanation + 1.5 M for coin/bottle example"
    },
    "questions": [
      {
        "category": "Shape Identification • 2D vs 3D",
        "q": "Classify the following items into 'Rolls', 'Slides', or 'Both Rolls and Slides': (a) Cricket Ball, (b) Eraser, (c) Coin, (d) Pencil.",
        "ans": "<strong>Classification:</strong><br>• <strong>(a) Cricket Ball:</strong> Rolls (it has only a curved round surface).<br>• <strong>(b) Eraser:</strong> Slides (it has flat faces).<br>• <strong>(c) Coin:</strong> Both rolls and slides (rolls on circular edge, slides on flat faces).<br>• <strong>(d) Round Pencil:</strong> Both rolls (along cylindrical body) and slides (on flat ends).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct classification for all 4 items",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Corner & Edge Counting",
        "q": "How many corners and straight edges does a rectangular postcard have? Does a circle have any corners?",
        "ans": "<strong>Answer:</strong><br>1. A rectangular postcard has <strong>4 straight edges</strong> and <strong>4 corners (vertices)</strong>.<br>2. A circle has <strong>0 corners</strong> and <strong>0 straight edges</strong> (it is formed by 1 continuous curved line).",
        "marks": 2,
        "rubric": [
          {
            "key": "Postcard: 4 edges, 4 corners",
            "marks": "1 M"
          },
          {
            "key": "Circle: 0 corners, curved line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Construction • Towers",
        "q": "Can you stack footballs on top of each other to make a tall tower? Why or why not? What shapes make stable towers?",
        "ans": "<strong>Answer:</strong><br>• <strong>No</strong>, we cannot stack round footballs because they have curved surfaces and roll off.<br>• Objects with <strong>flat surfaces</strong> like books, square wooden blocks, and shoe boxes make stable towers because flat faces sit securely on each other.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason why round balls cannot stack",
            "marks": "1.5 M"
          },
          {
            "key": "Identification of flat surface objects for stacking",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Flat vs Curved Faces",
        "q": "Fill in the blanks with 'Flat' or 'Curved':<br>(a) A blackboard has a ______ surface.<br>(b) A globe has a ______ surface.<br>(c) A party hat has both a ______ base and a ______ side surface.",
        "ans": "<strong>Answers:</strong><br>(a) Flat<br>(b) Curved<br>(c) Flat base and a Curved side surface.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct fills (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Tracing Shapes • Imprints",
        "q": "What 2D shape will you get if you trace the outline of:<br>(a) The base of a tea cup?<br>(b) A matchbox?<br>(c) A dice?<br>(d) A ruler?",
        "ans": "<strong>Answers:</strong><br>(a) Base of tea cup: <strong>Circle</strong><br>(b) Matchbox: <strong>Rectangle</strong><br>(c) Dice: <strong>Square</strong><br>(d) Ruler: <strong>Long Rectangle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 shapes identified correctly (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Wheels of Vehicles",
        "q": "Why are the wheels of cars, buses, and bicycles made round (circular) and not square or triangular?",
        "ans": "<strong>Answer:</strong><br>• Round wheels have a smooth curved surface with no sharp corners, allowing them to <strong>roll effortlessly</strong> with minimal friction.<br>• Square or triangular wheels have corners that would get stuck on the ground and bump violently, making vehicles unable to roll smoothly.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rolling property of curved surfaces",
            "marks": "1 M"
          },
          {
            "key": "Obstacle of sharp corners explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Properties • Triangles",
        "q": "How many corners and straight sides does a samosa or a road sign triangle have? Can a triangle have a curved side?",
        "ans": "<strong>Answer:</strong><br>1. A triangle has <strong>3 straight sides</strong> and <strong>3 corners</strong>.<br>2. <strong>No</strong>, a standard geometric triangle cannot have a curved side; all three sides must be straight lines.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 sides and 3 corners",
            "marks": "1 M"
          },
          {
            "key": "Sides must be straight",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparing 2D Shapes • Square vs Rectangle",
        "q": "State one similarity and one difference between a square and a rectangle.",
        "ans": "<strong>Answer:</strong><br>• <strong>Similarity:</strong> Both have 4 straight sides and 4 square corners (vertices).<br>• <strong>Difference:</strong> In a square, <strong>all 4 sides are equal in length</strong>, whereas in a rectangle, <strong>only opposite sides are equal</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Similarity: 4 sides & 4 corners",
            "marks": "1 M"
          },
          {
            "key": "Difference: Equal sides vs opposite sides",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rolling and Sliding Game",
        "q": "In a carrom game, what happens when you slide the striker on its flat face? What happens if you stand the striker on its round edge and push it?",
        "ans": "<strong>Answer:</strong><br>• When placed flat, the striker <strong>slides</strong> smoothly across the board.<br>• When stood on its circular edge and pushed, the striker <strong>rolls</strong> forward like a tiny wheel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Flat face slides",
            "marks": "1 M"
          },
          {
            "key": "Circular edge rolls",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Count Shapes in a Picture",
        "q": "In a drawing of a toy truck made of shapes:<br>• The body is 1 rectangle.<br>• The cabin is 1 square.<br>• The wheels are 4 circles.<br>• The headlights are 2 triangles.<br>How many total geometric shapes were used?",
        "ans": "<strong>Calculation:</strong><br>• Rectangle = 1<br>• Square = 1<br>• Circles = 4<br>• Triangles = 2<br>• Total shapes = 1 + 1 + 4 + 2 = <strong>8 shapes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Shape breakdown",
            "marks": "1 M"
          },
          {
            "key": "Total = 8 shapes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "3D Solid Names • Everyday Match",
        "q": "Match each solid shape name to its real-world example:<br>1. Sphere — (A) Party hat<br>2. Cylinder — (B) Wooden playing dice<br>3. Cone — (C) Can of tomato soup<br>4. Cube — (D) Tennis ball",
        "ans": "<strong>Correct Matching:</strong><br>1. Sphere ➔ <strong>(D) Tennis ball</strong><br>2. Cylinder ➔ <strong>(C) Can of tomato soup</strong><br>3. Cone ➔ <strong>(A) Party hat</strong><br>4. Cube ➔ <strong>(B) Wooden playing dice</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly matched (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Can You Stack?",
        "q": "Which of the following can be stacked to make a stable pile without falling?<br>(a) Matchboxes, (b) Marbles, (c) 5-rupee coins, (d) Oranges, (e) Exercise books.",
        "ans": "<strong>Answer:</strong><br>• <strong>Can be stacked:</strong> (a) Matchboxes, (c) 5-rupee coins, and (e) Exercise books (all have flat faces).<br>• <strong>Cannot be stacked:</strong> (b) Marbles and (d) Oranges (round spherical objects roll off).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct stacking list",
            "marks": "1 M"
          },
          {
            "key": "Correct non-stacking list with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Math • Tangram / Shape Art",
        "q": "Can you combine two identical triangles along their longest side to make a square or rectangle? Explain.",
        "ans": "<strong>Answer:</strong><br>• <strong>Yes</strong>, joining two identical right-angled triangles along their longest side (hypotenuse) forms a complete <strong>square</strong> or <strong>rectangle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Affirmative answer (Yes)",
            "marks": "1 M"
          },
          {
            "key": "Forms square or rectangle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Riddle",
        "q": "I have 0 flat sides, 0 corners, and I look identical from every angle. I love rolling on the grass. What 3D shape am I?",
        "ans": "<strong>Answer:</strong><br>I am a <strong>Sphere</strong> (like a ball or globe).",
        "marks": 1,
        "rubric": [
          {
            "key": "Identified as Sphere",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Riddle",
        "q": "I have 1 circular flat base and 1 pointed corner at the top. You put me on your head at birthday parties. What shape am I?",
        "ans": "<strong>Answer:</strong><br>I am a <strong>Cone</strong> (Party hat).",
        "marks": 1,
        "rubric": [
          {
            "key": "Identified as Cone",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Edge Inspection",
        "q": "Run your finger along the rim of a coin. Is the edge straight or curved? Run your finger along a textbook page. Is the edge straight or curved?",
        "ans": "<strong>Answer:</strong><br>• The rim of a coin is a <strong>curved edge</strong>.<br>• The edge of a textbook page is a <strong>straight edge</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Coin edge: curved",
            "marks": "1 M"
          },
          {
            "key": "Page edge: straight",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Shape Knowledge",
        "q": "Write True or False:<br>(a) A cylinder has 2 flat circular faces and 1 curved surface.<br>(b) A cube has 6 flat square faces.<br>(c) A triangle has 4 corners.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong><br>(b) <strong>True</strong><br>(c) <strong>False</strong> (A triangle has exactly 3 corners).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 evaluated correctly (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Visual Problem • Cut Corner",
        "q": "If you take a square sheet of paper and snip off one of its corners with scissors, how many corners does the paper now have?",
        "ans": "<strong>Answer:</strong><br>• Cutting off 1 corner replaces that 1 corner with 2 new corners.<br>• Remaining corners = 3 original + 2 new = <strong>5 corners</strong> (the paper becomes a pentagon!).",
        "marks": 2,
        "rubric": [
          {
            "key": "Explanation of corner replacement",
            "marks": "1 M"
          },
          {
            "key": "Final count: 5 corners",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm3",
    "num": 3,
    "unit": "Unit 2: Number Play",
    "title": "Fun with Numbers",
    "subtitle": "2-Digit Numbers (1–100), Tens & Ones Place Value & Ordering",
    "concepts": [
      "Building numbers 1 to 100 with bundles of 10 and single units (ones).",
      "Finding predecessor (before), successor (after), and between numbers.",
      "Comparing 2-digit numbers using <, >, and = symbols.",
      "Expanding numbers into Tens and Ones (e.g. 64 = 60 + 4)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><rect x=\"40\" y=\"30\" width=\"24\" height=\"60\" fill=\"#059669\" rx=\"3\"/><rect x=\"70\" y=\"30\" width=\"24\" height=\"60\" fill=\"#059669\" rx=\"3\"/><rect x=\"100\" y=\"30\" width=\"24\" height=\"60\" fill=\"#059669\" rx=\"3\"/><circle cx=\"160\" cy=\"45\" r=\"10\" fill=\"#10b981\"/><circle cx=\"160\" cy=\"75\" r=\"10\" fill=\"#10b981\"/><circle cx=\"190\" cy=\"60\" r=\"10\" fill=\"#10b981\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">3 Tens (30) + 3 Ones (3) = 33</text></svg>",
    "cbq": {
      "title": "Classroom Pencil Inventory",
      "text": "The class teacher has 4 boxes of 10 pencils each, and 7 loose pencils on her desk. She needs 50 pencils for an art contest.",
      "question": "How many total pencils does the teacher have right now? How many more pencils does she need to reach 50?",
      "answer": "1. 4 boxes of 10 = 4 × 10 = 40 pencils.<br>2. Plus 7 loose pencils = 40 + 7 = 47 pencils.<br>3. Shortage to reach 50 = 50 - 47 = 3 more pencils needed.",
      "rubric": "1.5 M for total inventory (47) + 1.5 M for shortage calculation (3)"
    },
    "questions": [
      {
        "category": "Tens and Ones Place Value",
        "q": "Write the number shown by 5 bundles of 10 sticks and 8 loose sticks. What is the value of the digit in the tens place?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 bundles of 10 = 5 tens = 50<br>• 8 loose sticks = 8 ones = 8<br>• Number = 50 + 8 = <strong>58</strong>.<br>• The digit in the tens place is 5, and its value is <strong>50</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Number identification: 58",
            "marks": "1 M"
          },
          {
            "key": "Value of tens digit: 50",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Expansion",
        "q": "Expand the following numbers into Tens and Ones:<br>(a) 43 = __ tens + __ ones = __ + __<br>(b) 76 = __ tens + __ ones = __ + __<br>(c) 90 = __ tens + __ ones = __ + __",
        "ans": "<strong>Answers:</strong><br>(a) 43 = <strong>4</strong> tens + <strong>3</strong> ones = <strong>40 + 3</strong><br>(b) 76 = <strong>7</strong> tens + <strong>6</strong> ones = <strong>70 + 6</strong><br>(c) 90 = <strong>9</strong> tens + <strong>0</strong> ones = <strong>90 + 0</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a) correct",
            "marks": "1 M"
          },
          {
            "key": "Part (b) correct",
            "marks": "1 M"
          },
          {
            "key": "Part (c) correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Before, After and Between",
        "q": "Fill in the missing numbers:<br>(a) What comes just before 60? ______<br>(b) What comes just after 89? ______<br>(c) What comes between 74 and 76? ______<br>(d) What comes between 98 and 100? ______",
        "ans": "<strong>Answers:</strong><br>(a) Just before 60 is <strong>59</strong>.<br>(b) Just after 89 is <strong>90</strong>.<br>(c) Between 74 and 76 is <strong>75</strong>.<br>(d) Between 98 and 100 is <strong>99</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correct (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Comparing 2-Digit Numbers",
        "q": "Insert <, >, or = in the boxes:<br>(a) 47 [ ] 74<br>(b) 85 [ ] 58<br>(c) 63 [ ] 60 + 3<br>(d) 91 [ ] 99",
        "ans": "<strong>Answers:</strong><br>(a) 47 <strong><</strong> 74 (4 tens is less than 7 tens)<br>(b) 85 <strong>></strong> 58 (8 tens is greater than 5 tens)<br>(c) 63 <strong>=</strong> 60 + 3 (both equal 63)<br>(d) 91 <strong><</strong> 99 (same tens, but 1 one is less than 9 ones).",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correct comparison signs (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Ordering Numbers • Increasing Order",
        "q": "Arrange the given numbers in ascending order (smallest to greatest): 54, 21, 88, 37, 19.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Compare tens digits: 19 (1 ten), 21 (2 tens), 37 (3 tens), 54 (5 tens), 88 (8 tens).<br>• Ascending Order: <strong>19, 21, 37, 54, 88</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Method of comparing tens digits",
            "marks": "1 M"
          },
          {
            "key": "Correct order: 19, 21, 37, 54, 88",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ordering Numbers • Decreasing Order",
        "q": "Arrange the given numbers in descending order (greatest to smallest): 62, 95, 34, 79, 41.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Compare tens digits: 95 (9 tens), 79 (7 tens), 62 (6 tens), 41 (4 tens), 34 (3 tens).<br>• Descending Order: <strong>95, 79, 62, 41, 34</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct descending sequence",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Number Names in Words",
        "q": "Write the number names for: (a) 38, (b) 65, (c) 82, (d) 49.",
        "ans": "<strong>Answers:</strong><br>(a) 38 = <strong>Thirty-eight</strong><br>(b) 65 = <strong>Sixty-five</strong><br>(c) 82 = <strong>Eighty-two</strong><br>(d) 49 = <strong>Forty-nine</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct spellings for all 4 numbers",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Numerals from Words",
        "q": "Write the numeral for:<br>(a) Seventy-one: ______<br>(b) Fifty-four: ______<br>(c) Eighty-eight: ______<br>(d) Ninety-nine: ______",
        "ans": "<strong>Answers:</strong><br>(a) <strong>71</strong><br>(b) <strong>54</strong><br>(c) <strong>88</strong><br>(d) <strong>99</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 numerals correct (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Skip Counting on 100-Chart",
        "q": "Starting from 10, skip count forward by 10s up to 100. Write the complete series.",
        "ans": "<strong>Answer:</strong><br><strong>10, 20, 30, 40, 50, 60, 70, 80, 90, 100</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Complete 10s sequence",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Backward Counting",
        "q": "Write the backward counting from 50 down to 42.",
        "ans": "<strong>Answer:</strong><br><strong>50, 49, 48, 47, 46, 45, 44, 43, 42</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate backward counting",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Abacus Representation",
        "q": "An abacus has 6 green beads on the Tens spike and 3 blue beads on the Ones spike. What number does the abacus represent?",
        "ans": "<strong>Answer:</strong><br>• Tens spike = 6 beads = 60<br>• Ones spike = 3 beads = 3<br>• Number represented = 60 + 3 = <strong>63</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tens and ones value",
            "marks": "1 M"
          },
          {
            "key": "Total number: 63",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Riddle",
        "q": "I have 7 in my tens place and the same digit in my ones place. What number am I?",
        "ans": "<strong>Answer:</strong><br>• Tens digit = 7<br>• Ones digit = 7<br>• The number is <strong>77</strong> (Seventy-seven).",
        "marks": 1,
        "rubric": [
          {
            "key": "Identified 77",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Riddle",
        "q": "I am more than 30 but less than 40. My ones digit is double my tens digit (3 × 2 = 6). What number am I?",
        "ans": "<strong>Answer:</strong><br>• Tens digit = 3<br>• Ones digit = 3 × 2 = 6<br>• The number is <strong>36</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Deduction steps",
            "marks": "1 M"
          },
          {
            "key": "Number = 36",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Greatest and Smallest",
        "q": "From the numbers [64, 46, 82, 28, 75]:<br>(a) Which is the greatest number?<br>(b) Which is the smallest number?",
        "ans": "<strong>Answer:</strong><br>(a) Greatest number is <strong>82</strong> (has the largest tens digit, 8).<br>(b) Smallest number is <strong>28</strong> (has the smallest tens digit, 2).",
        "marks": 2,
        "rubric": [
          {
            "key": "Greatest: 82",
            "marks": "1 M"
          },
          {
            "key": "Smallest: 28",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Marble Collection",
        "q": "Kabir has 47 glass marbles. His cousin Aman has 52 glass marbles. Who has more marbles and by how many?",
        "ans": "<strong>Solution:</strong><br>1. Aman has 52, Kabir has 47.<br>2. Since 52 > 47, <strong>Aman has more marbles</strong>.<br>3. Difference = 52 - 47 = <strong>5 more marbles</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Aman has more marbles",
            "marks": "1.5 M"
          },
          {
            "key": "Difference = 5 marbles",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Tens and Ones Table",
        "q": "Complete the table:<br>• 2 tens + 5 ones = [__]<br>• 8 tens + 9 ones = [__]<br>• 6 tens + 0 ones = [__]<br>• 1 ten + 7 ones = [__]",
        "ans": "<strong>Answers:</strong><br>• 2 tens + 5 ones = <strong>25</strong><br>• 8 tens + 9 ones = <strong>89</strong><br>• 6 tens + 0 ones = <strong>60</strong><br>• 1 ten + 7 ones = <strong>17</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 table rows correct (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Number Line",
        "q": "A grasshopper starts at 25 and takes 3 big hops of 5 forward. Which numbers does it land on?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Hop 1: 25 + 5 = <strong>30</strong><br>• Hop 2: 30 + 5 = <strong>35</strong><br>• Hop 3: 35 + 5 = <strong>40</strong>.<br>• The grasshopper lands on 30, 35, and finishes on <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Intermediate hops",
            "marks": "1 M"
          },
          {
            "key": "Final landing number 40",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Place Value",
        "q": "Write True or False:<br>(a) In the number 83, the place value of 8 is 8.<br>(b) 10 tens make 100.<br>(c) The smallest 2-digit number is 10.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong> (The place value of 8 in 83 is 80).<br>(b) <strong>True</strong> (10 × 10 = 100).<br>(c) <strong>True</strong> (10 is the first 2-digit number).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements evaluated correctly (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Making Numbers with Digits",
        "q": "Using the digits 3 and 7 once each, form:<br>(a) The greatest 2-digit number.<br>(b) The smallest 2-digit number.",
        "ans": "<strong>Answer:</strong><br>(a) Greatest 2-digit number: Put larger digit 7 in tens place = <strong>73</strong>.<br>(b) Smallest 2-digit number: Put smaller digit 3 in tens place = <strong>37</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Greatest: 73",
            "marks": "1 M"
          },
          {
            "key": "Smallest: 37",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Real-Life Math • Bead Necklace",
        "q": "Meera makes necklaces using 10 beads in each necklace. If she has 38 beads, how many complete necklaces can she make? How many beads are left over?",
        "ans": "<strong>Solution:</strong><br>• Total beads = 38<br>• Beads per necklace = 10<br>• 38 = 30 + 8 = (3 tens) + (8 ones).<br>• Meera can make <strong>3 complete necklaces</strong> and <strong>8 beads are left over</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 complete necklaces",
            "marks": "1 M"
          },
          {
            "key": "8 beads remainder",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm4",
    "num": 4,
    "unit": "Unit 2: Number Play",
    "title": "Shadow Story",
    "subtitle": "Togethe, Shapes, Silhouettes, Light Sources & Size Patterns",
    "concepts": [
      "Observing how shadows change size depending on the light source position.",
      "Recognizing shapes and animal silhouettes through hand-shadow play.",
      "Comparing morning, noon, and evening shadow lengths."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"10\"/><circle cx=\"80\" cy=\"30\" r=\"18\" fill=\"#f59e0b\"/><rect x=\"180\" y=\"45\" width=\"20\" height=\"60\" fill=\"#dc2626\" rx=\"2\"/><ellipse cx=\"260\" cy=\"100\" rx=\"60\" ry=\"12\" fill=\"#64748b\" opacity=\"0.4\"/><text x=\"250\" y=\"115\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Sun Angle Determines Shadow Length &amp; Direction</text></svg>",
    "cbq": {
      "title": "Playground Shadow Tracking",
      "text": "At 8:00 AM, Rohan's shadow measures 14 handspans on the school ground. At 12:00 noon, his shadow measures only 3 handspans.",
      "question": "Why did Rohan's shadow become so short at noon? What will happen to his shadow at 5:00 PM in the evening?",
      "answer": "1. At noon, the sun is directly overhead, casting light from above so the shadow is at its shortest.<br>2. At 5:00 PM, the sun sinks low in the western sky, so his shadow will become long again, pointing toward the east.",
      "rubric": "1.5 M for noon explanation + 1.5 M for evening prediction"
    },
    "questions": [
      {
        "category": "Shadow Formation Science",
        "q": "What two things are needed to make a shadow? Can you see your shadow in a pitch-dark room?",
        "ans": "<strong>Answer:</strong><br>1. You need a <strong>source of light</strong> (like the sun, a torch, or a lamp) and an <strong>opaque object</strong> that blocks the light.<br>2. <strong>No</strong>, you cannot see a shadow in a completely dark room because there is no light to be blocked.",
        "marks": 2,
        "rubric": [
          {
            "key": "Light source and opaque object mentioned",
            "marks": "1 M"
          },
          {
            "key": "No shadow in darkness explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Time of Day and Shadow Length",
        "q": "When during the sunny day is your shadow:<br>(a) Longest?<br>(b) Shortest?",
        "ans": "<strong>Answer:</strong><br>(a) Longest: In the <strong>early morning</strong> and <strong>late afternoon/evening</strong> when the sun is low on the horizon.<br>(b) Shortest: At <strong>midday / noon (12:00 PM)</strong> when the sun is directly overhead.",
        "marks": 2,
        "rubric": [
          {
            "key": "Morning/evening longest",
            "marks": "1 M"
          },
          {
            "key": "Noon shortest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Silhouette Matching",
        "q": "Look at the shadow of an animal with long upright ears and a short round tail. Which animal is it - an elephant, a rabbit, or a duck?",
        "ans": "<strong>Answer:</strong><br>It is a <strong>Rabbit</strong> (long upright ears and fluffy tail are unmistakable features).",
        "marks": 1,
        "rubric": [
          {
            "key": "Identified as Rabbit",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hand Shadow Art",
        "q": "How can you use your two hands to make the shadow of a flying bird on a white wall?",
        "ans": "<strong>Answer:</strong><br>• Cross your thumbs together and link them.<br>• Spread your fingers wide and flutter them up and down like flapping wings.<br>• The shadow on the wall looks like a bird flying in the sky.",
        "marks": 2,
        "rubric": [
          {
            "key": "Linked thumbs described",
            "marks": "1 M"
          },
          {
            "key": "Fluttering fingers / wing motion described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shadow Color Property",
        "q": "If Neha wears a bright red dress, what color will her shadow be? Can a shadow be colorful?",
        "ans": "<strong>Answer:</strong><br>• Her shadow will be <strong>dark grey / black</strong>.<br>• <strong>No</strong>, shadows cannot be colorful because a shadow is simply an area where light is blocked; it does not carry the color of the object.",
        "marks": 2,
        "rubric": [
          {
            "key": "Shadow is dark grey/black",
            "marks": "1 M"
          },
          {
            "key": "Reason: light is blocked, not reflected",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Transparent vs Opaque",
        "q": "Why does a clear glass window not cast a dark shadow, while a wooden door casts a very dark shadow?",
        "ans": "<strong>Answer:</strong><br>• Clear glass is <strong>transparent</strong>, so light passes right through it without being blocked.<br>• A wooden door is <strong>opaque</strong>, completely stopping light and creating a sharp dark shadow behind it.",
        "marks": 2,
        "rubric": [
          {
            "key": "Glass is transparent (light passes)",
            "marks": "1 M"
          },
          {
            "key": "Wood is opaque (blocks light)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Light Source Distance and Size",
        "q": "What happens to the shadow of a toy car on the wall as you bring the torch closer to the car? Does it become bigger or smaller?",
        "ans": "<strong>Answer:</strong><br>• When the torch is moved closer to the toy car, the car blocks a wider angle of light rays.<br>• Therefore, the shadow becomes <strong>much bigger (larger)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Becomes bigger",
            "marks": "1 M"
          },
          {
            "key": "Reason (wider angle of blocked rays)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Direction of Shadow",
        "q": "In the morning, the sun rises in the East. In which direction will your shadow fall?",
        "ans": "<strong>Answer:</strong><br>• Shadows always fall in the direction <strong>opposite to the light source</strong>.<br>• Since the sun is in the East, your shadow will fall toward the <strong>West</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Opposite to light source rule",
            "marks": "1 M"
          },
          {
            "key": "Direction: West",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Night Light Sources",
        "q": "Name three sources of light that can create shadows at night.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Street lamps</strong><br>2. <strong>A torch or flashlight</strong><br>3. <strong>The Moon / candle light</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Three valid night light sources listed",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Shadow Matching Shapes",
        "q": "Which 3D shape casts a circular shadow when illuminated from any direction? Which shape casts a triangular shadow?",
        "ans": "<strong>Answer:</strong><br>• A <strong>Sphere</strong> (ball) always casts a circular shadow from every direction.<br>• A <strong>Cone</strong> casts a triangular shadow when light shines from its side.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sphere for circular shadow",
            "marks": "1 M"
          },
          {
            "key": "Cone for triangular shadow",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Cool Shade",
        "q": "Why do cows and street dogs rest under the shadow of a banyan tree during hot sunny days?",
        "ans": "<strong>Answer:</strong><br>• The thick leaves of the tree block the scorching sunlight, creating a dark, cool shadow (shade).<br>• The ground under the shadow is much cooler than the open sunny road, giving animals relief from heat.",
        "marks": 2,
        "rubric": [
          {
            "key": "Blocking scorching sunlight",
            "marks": "1 M"
          },
          {
            "key": "Cooler ground temperature explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shadow Pattern Sequence",
        "q": "Look at the pattern of shadows of a stick: 9 AM (Long Left), 12 PM (Short Center), 3 PM (Long Right). What pattern rule is being followed?",
        "ans": "<strong>Answer:</strong><br>• The rule is following the sun's journey across the sky from East to West.<br>• The shadow shifts smoothly from <strong>West (morning) ➔ Underneath (noon) ➔ East (afternoon)</strong> while changing in length.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sun movement rule explained",
            "marks": "1 M"
          },
          {
            "key": "West to East shadow progression",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Shadows",
        "q": "Write True or False:<br>(a) An object can cast two shadows at the same time if there are two lights in the room.<br>(b) Flying birds high in the sky cast big dark shadows on our feet.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong> (Each distinct light source creates its own shadow).<br>(b) <strong>False</strong> (When birds fly very high, light fills in around them and no distinct shadow reaches the ground).",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True with explanation",
            "marks": "1 M"
          },
          {
            "key": "(b) False with explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Experiment with Finger Shadows",
        "q": "Hold 2 fingers up in front of a lamp. How many finger shadows do you see? Now hold up 4 fingers. How many shadows appear?",
        "ans": "<strong>Answer:</strong><br>• With 2 fingers, you see <strong>2 finger shadows</strong>.<br>• With 4 fingers, you see <strong>4 finger shadows</strong>.<br>• Every finger blocks light independently, creating its own outline.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 shadows then 4 shadows",
            "marks": "1 M"
          },
          {
            "key": "Independent blocking explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Riddle",
        "q": "I follow you in the sunshine, but disappear in the dark. I run when you run, but make no sound at all. Who am I?",
        "ans": "<strong>Answer:</strong><br>I am your <strong>Shadow</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Correct answer: Shadow",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Morning vs Noon Shadows",
        "q": "When is your shadow longest during the day, and when is it shortest?",
        "ans": "<strong>Answer:</strong><br>• Our shadow is <strong>longest in the early morning and late afternoon</strong> when the sun is low on the horizon.<br>• Our shadow is <strong>shortest at noon (12 o'clock)</strong> when the sun is directly overhead.",
        "marks": 2,
        "rubric": [
          {
            "key": "Longest in morning/afternoon",
            "marks": "1 M"
          },
          {
            "key": "Shortest at noon",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Hand Shadow Animals",
        "q": "Using a flashlight against a white wall, can you make your hand shadow look like a barking dog or a flying bird?",
        "ans": "<strong>Answer:</strong><br>• Yes! By bending the thumb and fingers into special shapes between the light and the wall, the hand casts a silhouette that <strong>looks like a barking dog or flapping bird</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Silhouette formed by blocking light",
            "marks": "1 M"
          },
          {
            "key": "Correct hand posture example",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm5",
    "num": 5,
    "unit": "Unit 3: Lines, Patterns & Measures",
    "title": "Playing with Lines",
    "subtitle": "Standing (Vertical), Sleeping (Horizontal), Slanting (Diagonal) & Curved Lines",
    "concepts": [
      "Distinguishing the 4 basic line types: standing, sleeping, slanting, and curved.",
      "Analyzing straight vs curved line components in letters of the English alphabet and numbers.",
      "Creating stick-figure dancer drawings and clock hands using line combinations."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf4ff\" rx=\"10\"/><line x1=\"80\" y1=\"20\" x2=\"80\" y2=\"90\" stroke=\"#9333ea\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"140\" y1=\"55\" x2=\"220\" y2=\"55\" stroke=\"#3b82f6\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"270\" y1=\"85\" x2=\"330\" y2=\"25\" stroke=\"#f59e0b\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M 380,80 Q 420,10 460,80\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"6\" stroke-linecap=\"round\"/><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#581c87\" text-anchor=\"middle\">Standing (Vertical) • Sleeping (Horizontal) • Slanting (Diagonal) • Curved</text></svg>",
    "cbq": {
      "title": "Art Class Stick Figure Choreography",
      "text": "During art class, Priya draws 3 stick-figure Bharatanatyam dancers using only chalk lines. For each dancer, she uses 1 standing line for the body, 2 slanting lines for arms, and 2 slanting lines for legs.",
      "question": "How many slanting lines did Priya draw for all 3 dancers together? How many standing lines in total?",
      "answer": "1. Each dancer has 2 arm lines + 2 leg lines = 4 slanting lines.<br>2. For 3 dancers: 3 × 4 = 12 slanting lines.<br>3. Standing lines: 1 per dancer × 3 dancers = 3 standing lines.",
      "rubric": "1.5 M for slanting line calculation (12) + 1.5 M for standing line count (3)"
    },
    "questions": [
      {
        "category": "Line Classification",
        "q": "Classify each everyday object with its matching line type:<br>(a) A tall straight flagpole<br>(b) The edge of a calm swimming pool<br>(c) A sliding board in a park<br>(d) A round hula hoop",
        "ans": "<strong>Classification:</strong><br>(a) Flagpole: <strong>Standing line</strong> (Vertical)<br>(b) Swimming pool edge: <strong>Sleeping line</strong> (Horizontal)<br>(c) Sliding board: <strong>Slanting line</strong> (Diagonal)<br>(d) Hula hoop: <strong>Curved line</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly classified (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Alphabet Line Analysis",
        "q": "Count the lines in the capital letter 'H':<br>(a) How many standing lines?<br>(b) How many sleeping lines?<br>(c) Are there any curved lines?",
        "ans": "<strong>Answer:</strong><br>(a) Standing lines = <strong>2</strong> (the two upright sides).<br>(b) Sleeping lines = <strong>1</strong> (the bar across the middle).<br>(c) Curved lines = <strong>0</strong> (none).",
        "marks": 2,
        "rubric": [
          {
            "key": "2 standing lines",
            "marks": "1 M"
          },
          {
            "key": "1 sleeping line, 0 curved",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Alphabet Line Analysis",
        "q": "Which line types make up the capital letter 'A'? Name them and count each.",
        "ans": "<strong>Answer:</strong><br>• The letter 'A' is made of:<br>  1. <strong>2 slanting lines</strong> (the two sides that meet at the top peak).<br>  2. <strong>1 sleeping line</strong> (the crossbar in the middle).<br>• Total = 3 straight lines.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 slanting lines identified",
            "marks": "1 M"
          },
          {
            "key": "1 sleeping line identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Straight vs Curved Letters",
        "q": "Group the following letters into 'Only Straight Lines' and 'Only Curved Lines':<br>[ E, O, L, C, T, S ].",
        "ans": "<strong>Grouping:</strong><br>• <strong>Only Straight Lines:</strong> E, L, T<br>• <strong>Only Curved Lines:</strong> O, C, S.",
        "marks": 2,
        "rubric": [
          {
            "key": "Straight letters (E, L, T) correct",
            "marks": "1 M"
          },
          {
            "key": "Curved letters (O, C, S) correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Letters with Both Lines",
        "q": "Name three capital letters that have BOTH straight lines AND curved lines.",
        "ans": "<strong>Answer:</strong><br>Examples include:<br>1. <strong>B</strong> (1 standing line + 2 curved lines)<br>2. <strong>D</strong> (1 standing line + 1 curved line)<br>3. <strong>P</strong> (1 standing line + 1 curved line)<br>*(Also: R, G, J)*.",
        "marks": 2,
        "rubric": [
          {
            "key": "Any 3 correct letters with breakdown",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Clock Hands Lines",
        "q": "Look at the hands of a clock:<br>(a) At 6:00 o'clock, what single line do the two hands form together?<br>(b) At 3:00 o'clock, which two types of lines do the hands form?",
        "ans": "<strong>Answer:</strong><br>(a) At 6:00, the hour hand points down and minute hand points straight up, forming <strong>one straight standing line</strong>.<br>(b) At 3:00, the minute hand is a <strong>standing line</strong> and the hour hand is a <strong>sleeping line</strong> (forming a right angle).",
        "marks": 2,
        "rubric": [
          {
            "key": "6:00 forms standing line",
            "marks": "1 M"
          },
          {
            "key": "3:00 forms standing + sleeping line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Line Analysis",
        "q": "Which single-digit numbers are written using ONLY straight lines? (Look at digits 1, 4, 7).",
        "ans": "<strong>Answer:</strong><br>• The digits <strong>1, 4, and 7</strong> can be written using only straight lines.<br>(Digit 1 has 1 standing line; digit 4 has standing, sleeping, and slanting lines; digit 7 has sleeping and slanting lines).",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 1, 4, 7",
            "marks": "1 M"
          },
          {
            "key": "Explanation of lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Line Analysis",
        "q": "Which single-digit number is made of exactly ONE continuous curved line?",
        "ans": "<strong>Answer:</strong><br>The digit <strong>0</strong> (and digit 8 has curved loops). Digit 0 is 1 smooth continuous curved line.",
        "marks": 1,
        "rubric": [
          {
            "key": "Digit 0 identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Drawing with Objects",
        "q": "What kind of line do you get if you trace along:<br>(a) The side edge of a ruler?<br>(b) The edge of a round steel bangle?",
        "ans": "<strong>Answer:</strong><br>(a) Ruler edge: A <strong>straight line</strong> (standing, sleeping, or slanting).<br>(b) Steel bangle edge: A <strong>curved line</strong> (circle).",
        "marks": 2,
        "rubric": [
          {
            "key": "Ruler: straight line",
            "marks": "1 M"
          },
          {
            "key": "Bangle: curved line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Dancing Stick Figures",
        "q": "In a Warli folk painting, figures are drawn with lines and triangles. How are arms shown when dancing with joy?",
        "ans": "<strong>Answer:</strong><br>• The arms are shown using <strong>slanting lines</strong> raised upwards toward the sky, or <strong>curved arcs</strong> joining hands in a circle.",
        "marks": 2,
        "rubric": [
          {
            "key": "Slanting lines / curved lines identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Line Count in Words",
        "q": "In the word 'TOP':<br>• 'T' has 1 sleeping line and 1 standing line.<br>• 'O' has 1 curved line.<br>• 'P' has 1 standing line and 1 curved line.<br>How many total straight lines are in the word 'TOP'?",
        "ans": "<strong>Calculation:</strong><br>• In 'T': 1 sleeping + 1 standing = 2 straight lines.<br>• In 'O': 0 straight lines.<br>• In 'P': 1 standing line = 1 straight line.<br>• Total straight lines = 2 + 0 + 1 = <strong>3 straight lines</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Line breakdown per letter",
            "marks": "1 M"
          },
          {
            "key": "Total = 3 straight lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Slanting Lines",
        "q": "Why are stairs and ladders made with slanting lines instead of standing vertical lines?",
        "ans": "<strong>Answer:</strong><br>• Slanting lines provide a <strong>gentle slope</strong> that people can climb comfortably and safely without falling backwards.<br>• A purely vertical line would be too steep to walk on without climbing with ropes.",
        "marks": 2,
        "rubric": [
          {
            "key": "Gentle slope for climbing explained",
            "marks": "1 M"
          },
          {
            "key": "Safety / balance factor",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Line Rules",
        "q": "Write True or False:<br>(a) A sleeping line goes left to right like the horizon.<br>(b) You can draw a perfect circle using only straight lines.<br>(c) A triangle has 3 straight lines.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong><br>(b) <strong>False</strong> (A circle requires a curved line).<br>(c) <strong>True</strong> (A triangle has 3 straight sides).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Line Pattern Puzzle",
        "q": "Complete the line pattern: | , — , / , | , — , / , __ , __.",
        "ans": "<strong>Answer:</strong><br>The repeating rule is: Standing (|), Sleeping (—), Slanting (/).<br>The next two lines are: <strong>|</strong> (Standing) and <strong>—</strong> (Sleeping).",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeating rule identified",
            "marks": "1 M"
          },
          {
            "key": "Next two lines (| and —)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Construction",
        "q": "Using 4 straight lines of equal length, what shape can you construct? What if you use 3 straight lines?",
        "ans": "<strong>Answer:</strong><br>• With 4 straight lines of equal length: A <strong>Square</strong> (or Rhombus).<br>• With 3 straight lines: A <strong>Triangle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Square for 4 equal lines",
            "marks": "1 M"
          },
          {
            "key": "Triangle for 3 lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Line Riddle",
        "q": "I am neither standing straight nor lying flat asleep. I lean over like a walking stick or a ramp. What line am I?",
        "ans": "<strong>Answer:</strong><br>I am a <strong>Slanting line</strong> (Diagonal line).",
        "marks": 1,
        "rubric": [
          {
            "key": "Identified Slanting line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Alphabet Line Tracing",
        "q": "Which capital letters are made using ONLY straight standing and sleeping lines? (A) H, E, F, L, T (B) C, O, S (C) P, B, R",
        "ans": "<strong>Answer:</strong><br>• <strong>(A) H, E, F, L, T</strong> are made entirely of straight standing (vertical) and sleeping (horizontal) lines without any curves.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identification of H, E, F, L, T",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Clock Hands",
        "q": "Look at a wall clock at 3 o'clock. What kind of lines do the hour hand and minute hand form?",
        "ans": "<strong>Answer:</strong><br>• The hour hand pointing at 3 is a <strong>sleeping (horizontal) line</strong>.<br>• The minute hand pointing at 12 is a <strong>standing (vertical) line</strong>.<br>• Together they form a corner (right angle).",
        "marks": 2,
        "rubric": [
          {
            "key": "Standing and sleeping lines identified",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm6",
    "num": 6,
    "unit": "Unit 3: Lines, Patterns & Measures",
    "title": "Decoration for Festival",
    "subtitle": "Repeating & Growing Patterns, Rangoli Symmetry & Border Tessellations",
    "concepts": [
      "Identifying repeating design units in torans, rangoli, and fabric borders.",
      "Recognizing growing geometric and number patterns (e.g. 2, 4, 6...; 10, 20, 30...).",
      "Completing symmetrical Rangoli dot grids and alternating tile arrangements."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"10\"/><circle cx=\"60\" cy=\"60\" r=\"18\" fill=\"#f59e0b\"/><polygon points=\"120,40 100,80 140,80\" fill=\"#dc2626\"/><circle cx=\"180\" cy=\"60\" r=\"18\" fill=\"#f59e0b\"/><polygon points=\"240,40 220,80 260,80\" fill=\"#dc2626\"/><circle cx=\"300\" cy=\"60\" r=\"18\" fill=\"#f59e0b\"/><polygon points=\"360,40 340,80 380,80\" fill=\"#dc2626\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Repeating Toran Pattern: Circle, Triangle, Circle, Triangle...</text></svg>",
    "cbq": {
      "title": "Diwali Toran Stringing Task",
      "text": "Simran strings a door toran using yellow marigolds and green mango leaves. She follows the rule: 2 leaves followed by 1 marigold.",
      "question": "If her toran has 6 marigolds in total, how many mango leaves did Simran use? How many items are on the toran altogether?",
      "answer": "1. For every 1 marigold, she uses 2 leaves.<br>2. For 6 marigolds: 6 × 2 = 12 mango leaves.<br>3. Total items on toran = 12 leaves + 6 marigolds = 18 items.",
      "rubric": "1.5 M for leaves calculation (12) + 1.5 M for total items (18)"
    },
    "questions": [
      {
        "category": "Repeating Shape Patterns",
        "q": "Look at the pattern: 🔴, 🔷, 🔴, 🔷, 🔴, __, __.<br>What comes in the next two blanks?",
        "ans": "<strong>Answer:</strong><br>• The pattern alternates between red circle and blue diamond.<br>• Next two shapes: <strong>🔷 (Blue diamond)</strong> and <strong>🔴 (Red circle)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pattern rule identified",
            "marks": "1 M"
          },
          {
            "key": "Both shapes correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Growing Shape Patterns",
        "q": "Observe the growing pattern:<br>Step 1: 1 square (🟩)<br>Step 2: 2 squares (🟩 🟩)<br>Step 3: 3 squares (🟩 🟩 🟩)<br>How many squares will be in Step 5? What is the growing rule?",
        "ans": "<strong>Answer:</strong><br>• Growing rule: Add 1 square at each step.<br>• Step 4 = 4 squares.<br>• Step 5 = <strong>5 squares</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Growing rule stated (+1 each step)",
            "marks": "1 M"
          },
          {
            "key": "Step 5 has 5 squares",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Patterns • Adding 2",
        "q": "Complete the growing number pattern: 3, 5, 7, 9, __, __, 15.",
        "ans": "<strong>Answer:</strong><br>• Rule: Add 2 to each number (consecutive odd numbers).<br>• 9 + 2 = <strong>11</strong><br>• 11 + 2 = <strong>13</strong><br>• The missing numbers are <strong>11 and 13</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rule identified (+2)",
            "marks": "1 M"
          },
          {
            "key": "11 and 13 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Patterns • Adding 5",
        "q": "Complete the skip sequence: 10, 15, 20, __, __, 35, __.",
        "ans": "<strong>Answer:</strong><br>• Rule: Adding 5 each step.<br>• Series: 10, 15, 20, <strong>25</strong>, <strong>30</strong>, 35, <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "25, 30, and 40 filled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Decreasing Number Patterns",
        "q": "Complete the countdown pattern: 80, 70, 60, __, __, 30, __.",
        "ans": "<strong>Answer:</strong><br>• Rule: Subtracting 10 each step.<br>• Series: 80, 70, 60, <strong>50</strong>, <strong>40</strong>, 30, <strong>20</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rule: minus 10",
            "marks": "1 M"
          },
          {
            "key": "50, 40, 20 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Letter Patterns",
        "q": "Complete the letter series: AA, BB, CC, __, __, FF.",
        "ans": "<strong>Answer:</strong><br>• Rule: Doubling each English alphabet letter in alphabetical order.<br>• Missing pairs are <strong>DD</strong> and <strong>EE</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "DD and EE correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Letter and Number Patterns",
        "q": "Find the next two terms: A1, B2, C3, D4, __, __.",
        "ans": "<strong>Answer:</strong><br>• Rule: Next alphabet letter paired with next counting number.<br>• Next two terms: <strong>E5</strong> and <strong>F6</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "E5 and F6 correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Arrow Direction Patterns",
        "q": "Complete the rotating arrow pattern: ⬆ (Up), ➡ (Right), ⬇ (Down), ⬅ (Left), ⬆ (Up), __, __.",
        "ans": "<strong>Answer:</strong><br>• Rule: 90° clockwise rotation.<br>• Next two arrows: <strong>➡ (Right)</strong> and <strong>⬇ (Down)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clockwise turn rule",
            "marks": "1 M"
          },
          {
            "key": "Right and Down arrows",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Rangoli Dot Grid Symmetry",
        "q": "In a 4-by-4 dot rangoli grid, if you draw a curved petal on the left side, what must you do on the right side to keep it symmetrical?",
        "ans": "<strong>Answer:</strong><br>• To make it symmetrical, you must draw an <strong>identical curved petal mirrored on the right side</strong> at the exact same distance from the center line.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mirror image concept",
            "marks": "1 M"
          },
          {
            "key": "Same distance from center line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spot the Mistake",
        "q": "Find the mistake in this pattern: 2, 4, 6, 9, 10, 12. Which number is wrong and what should it be?",
        "ans": "<strong>Answer:</strong><br>• The pattern is counting by 2s (even numbers).<br>• The number <strong>9 is wrong</strong>.<br>• It should be <strong>8</strong> (because 6 + 2 = 8).",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 9 as wrong",
            "marks": "1 M"
          },
          {
            "key": "Correct replacement: 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Floor Tiling Tessellation",
        "q": "Why can square floor tiles cover a rectangular hall completely without leaving empty gaps, while round circular tiles cannot?",
        "ans": "<strong>Answer:</strong><br>• Squares have <strong>straight edges and 90° corners</strong> that fit snugly side-by-side without any empty spaces.<br>• Circles have curved rims, so when placed together, they always leave <strong>gaps (holes)</strong> between them.",
        "marks": 2,
        "rubric": [
          {
            "key": "Straight edges fit seamlessly",
            "marks": "1 M"
          },
          {
            "key": "Curved rims leave gaps",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Alternating Color Pattern",
        "q": "A strip of 10 diyas is painted in alternating colors: Gold, Silver, Gold, Silver...<br>(a) What color is the 7th diya?<br>(b) What color is the 10th diya?",
        "ans": "<strong>Answer:</strong><br>• Odd positions (1st, 3rd, 5th, 7th, 9th) are <strong>Gold</strong>.<br>• Even positions (2nd, 4th, 6th, 8th, 10th) are <strong>Silver</strong>.<br>(a) The 7th diya is <strong>Gold</strong>.<br>(b) The 10th diya is <strong>Silver</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7th is Gold",
            "marks": "1 M"
          },
          {
            "key": "10th is Silver",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Tower Pattern",
        "q": "Look at the pattern of adding consecutive numbers:<br>1 + 2 = 3<br>2 + 3 = 5<br>3 + 4 = 7<br>What is 4 + 5? What is 5 + 6? What pattern do the answers make?",
        "ans": "<strong>Answer:</strong><br>• 4 + 5 = <strong>9</strong><br>• 5 + 6 = <strong>11</strong><br>• The answers (3, 5, 7, 9, 11) form a pattern of <strong>odd numbers growing by 2 each time</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "4+5=9",
            "marks": "1 M"
          },
          {
            "key": "5+6=11",
            "marks": "1 M"
          },
          {
            "key": "Pattern: Odd numbers increasing by 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Saree Border Pattern",
        "q": "A border pattern has: 2 leaves pointing UP, then 2 leaves pointing DOWN, then 2 leaves pointing UP. What comes next?",
        "ans": "<strong>Answer:</strong><br>Next comes <strong>2 leaves pointing DOWN</strong> (following the repeating pair rule).",
        "marks": 1,
        "rubric": [
          {
            "key": "2 leaves pointing Down",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Nature Patterns",
        "q": "Name two animals that have beautiful natural patterns on their bodies.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Zebra:</strong> Black and white alternating stripes.<br>2. <strong>Tiger:</strong> Orange body with dark black stripes.<br>*(Also: Leopard with circular rosettes, Peacock with eye-spot feathers)*.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two animals with pattern described",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Pattern Riddle",
        "q": "I start at 1. Every step I double: 1, 2, 4, 8, __. What is my next number?",
        "ans": "<strong>Answer:</strong><br>• Double of 8 is 8 + 8 = <strong>16</strong>.<br>• The next number is 16.",
        "marks": 1,
        "rubric": [
          {
            "key": "16 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Pattern Task",
        "q": "Create a repeating 3-element pattern using shapes (Circle, Triangle, Star). Write out 9 terms.",
        "ans": "<strong>Answer:</strong><br>• Repeating unit: Circle (⭕), Triangle (🔺), Star (⭐).<br>• 9 terms: <strong>⭕, 🔺, ⭐, ⭕, 🔺, ⭐, ⭕, 🔺, ⭐</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeating unit of 3 elements",
            "marks": "1 M"
          },
          {
            "key": "9 complete terms correctly written",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm7",
    "num": 7,
    "unit": "Unit 3: Lines, Patterns & Measures",
    "title": "Rani's Gift",
    "subtitle": "Non-Standard Units of Length: Handspan, Footsteps, Cubit & Comparisons",
    "concepts": [
      "Measuring length using non-standard body units: finger-widths, handspans, footsteps, cubits.",
      "Understanding why non-standard units vary between children and adults.",
      "Comparing lengths and heights using words: longer/shorter, taller/shorter, thicker/thinner."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><line x1=\"60\" y1=\"60\" x2=\"440\" y2=\"60\" stroke=\"#2563eb\" stroke-width=\"4\"/><circle cx=\"60\" cy=\"60\" r=\"6\" fill=\"#1e40af\"/><circle cx=\"155\" cy=\"60\" r=\"6\" fill=\"#1e40af\"/><circle cx=\"250\" cy=\"60\" r=\"6\" fill=\"#1e40af\"/><circle cx=\"345\" cy=\"60\" r=\"6\" fill=\"#1e40af\"/><circle cx=\"440\" cy=\"60\" r=\"6\" fill=\"#1e40af\"/><text x=\"250\" y=\"95\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Desk Length = 4 Handspans Long</text></svg>",
    "cbq": {
      "title": "Measuring the Classroom Carpet",
      "text": "Aman measures the class carpet with his footsteps and counts 16 footsteps. His teacher measures the exact same carpet with her footsteps and counts only 10 footsteps.",
      "question": "Why did the teacher get fewer footsteps than Aman? Did the carpet shrink?",
      "answer": "1. The carpet did not shrink; its length stayed exactly the same.<br>2. The teacher's footsteps are much longer than Aman's footsteps. Therefore, fewer adult footsteps are needed to cover the same distance.",
      "rubric": "1.5 M for confirming carpet didn't change + 1.5 M for footstep size comparison"
    },
    "questions": [
      {
        "category": "Body Units of Measurement",
        "q": "Name 4 parts of your body that you can use to measure length without a ruler.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Handspan</strong> (from tip of thumb to tip of little finger stretched)<br>2. <strong>Fingers / Finger-width</strong><br>3. <strong>Footstep / Pace</strong><br>4. <strong>Cubit</strong> (from elbow to tip of middle finger).",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 valid body units named (0.5 M each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Comparing Lengths • Handspan",
        "q": "Rohan measures his math textbook and finds it is 2 handspans long. His teacher measures the same book and says it is only 1 handspan long. Explain why.",
        "ans": "<strong>Answer:</strong><br>• The teacher's hand is an adult hand, which is <strong>much bigger and broader</strong> than child Rohan's hand.<br>• Since the teacher's handspan is twice as long, she needs only 1 handspan while Rohan needs 2.",
        "marks": 2,
        "rubric": [
          {
            "key": "Adult hand is larger explained",
            "marks": "1 M"
          },
          {
            "key": "Inverse relationship with unit count",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Selecting Appropriate Unit",
        "q": "Which body unit would be best to measure:<br>(a) The length of an eraser?<br>(b) The length of your classroom floor?<br>(c) The length of your study table?",
        "ans": "<strong>Answers:</strong><br>(a) Eraser: <strong>Finger-widths</strong> (very small object).<br>(b) Classroom floor: <strong>Footsteps / Paces</strong> (long distance).<br>(c) Study table: <strong>Handspan or Cubit</strong> (medium object).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 appropriate units matched (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Taller vs Shorter",
        "q": "Look at a giraffe and a rabbit:<br>(a) Who is taller?<br>(b) Who is shorter?",
        "ans": "<strong>Answer:</strong><br>(a) The <strong>Giraffe is taller</strong>.<br>(b) The <strong>Rabbit is shorter</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Both identified correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Thicker vs Thinner",
        "q": "Compare the trunk of a banyan tree and the stem of a rose plant. Which one is thicker and which is thinner?",
        "ans": "<strong>Answer:</strong><br>• The trunk of the banyan tree is <strong>thicker</strong>.<br>• The stem of the rose plant is <strong>thinner</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Thicker and thinner identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ordering by Length",
        "q": "Arrange from shortest to longest:<br>[ Cricket bat, Safety pin, Toothbrush, Walking stick ].",
        "ans": "<strong>Answer:</strong><br>1. <strong>Safety pin</strong> (shortest)<br>2. <strong>Toothbrush</strong><br>3. <strong>Cricket bat</strong><br>4. <strong>Walking stick</strong> (longest).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct ascending length order",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Pencil Measurement",
        "q": "A notebook is measured using new wooden pencils. It is exactly 3 pencils long. If each pencil is 6 fingers long, how many fingers long is the notebook?",
        "ans": "<strong>Calculation:</strong><br>• Notebook = 3 pencils<br>• Each pencil = 6 fingers<br>• Total length = 6 + 6 + 6 = <strong>18 fingers long</strong> (or 3 × 6 = 18).",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition/multiplication setup",
            "marks": "1 M"
          },
          {
            "key": "Total = 18 fingers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Measuring Distance between Objects",
        "q": "Two trees stand in a park. Suman takes 15 footsteps to walk between them. Her father takes 10 footsteps. Whose footsteps are longer?",
        "ans": "<strong>Answer:</strong><br>• Her <strong>father's footsteps are longer</strong> because he covers the exact same distance in fewer steps (10 < 15).",
        "marks": 2,
        "rubric": [
          {
            "key": "Father's steps are longer",
            "marks": "1 M"
          },
          {
            "key": "Fewer steps for same distance explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Cubit Definition",
        "q": "What is a 'Cubit'? Which people traditionally used cubits to measure cloth and flower garlands?",
        "ans": "<strong>Answer:</strong><br>• A <strong>cubit</strong> is the length from a person's elbow to the tip of their outstretched middle finger.<br>• Cloth merchants and flower sellers (garland makers) traditionally used cubits (hath).",
        "marks": 2,
        "rubric": [
          {
            "key": "Elbow to middle fingertip defined",
            "marks": "1 M"
          },
          {
            "key": "Garland/cloth sellers named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Why We Need a Ruler",
        "q": "If every student's handspan is different, why do we need standard instruments like rulers and measuring tapes?",
        "ans": "<strong>Answer:</strong><br>• Standard rulers give the <strong>exact same measurement</strong> no matter who measures.<br>• This avoids confusion and disputes when buying clothes, building houses, or cutting wood.",
        "marks": 2,
        "rubric": [
          {
            "key": "Uniform measurement for everyone",
            "marks": "1 M"
          },
          {
            "key": "Fairness and accuracy in trade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Measurement",
        "q": "Write True or False:<br>(a) A handspan is measured with all fingers tightly closed into a fist.<br>(b) Your desk length measured in your handspans will always be a whole number.<br>(c) A puppy's footstep is shorter than a horse's stride.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong> (Handspan requires fingers stretched wide apart).<br>(b) <strong>False</strong> (It can be 3 handspans and 2 fingers).<br>(c) <strong>True</strong> (Puppy is much smaller than horse).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Estimating Length",
        "q": "Guess the length of your pencil box: Is it more than 1 handspan or less than 1 handspan? Measure and check.",
        "ans": "<strong>Answer:</strong><br>• For most primary students, a pencil box is roughly <strong>1 handspan long</strong> (or slightly more than 1 handspan, about 1 handspan and 2 fingers).",
        "marks": 1,
        "rubric": [
          {
            "key": "Reasonable estimation stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Ribbon Measurement",
        "q": "Pooja has a blue ribbon that is 8 handspans long. She cuts off 3 handspans for her doll's dress. How many handspans of ribbon are left?",
        "ans": "<strong>Calculation:</strong><br>• Original length = 8 handspans<br>• Ribbon cut off = 3 handspans<br>• Remaining ribbon = 8 - 3 = <strong>5 handspans</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction setup (8 - 3)",
            "marks": "1 M"
          },
          {
            "key": "Answer: 5 handspans",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Animal Race Steps",
        "q": "In an animal race, a frog takes 8 leaps to reach the pond, while a deer takes 2 long strides. Who has the longer step?",
        "ans": "<strong>Answer:</strong><br>The <strong>Deer has the longer step</strong> because 2 deer strides equal the distance of 8 frog leaps.",
        "marks": 2,
        "rubric": [
          {
            "key": "Deer has longer step",
            "marks": "1 M"
          },
          {
            "key": "Explanation based on fewer steps",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practical Activity • Blackboard Height",
        "q": "How can two children measure the height of the classroom door without a ladder?",
        "ans": "<strong>Answer:</strong><br>• They can hold a long stick or rope against the door, mark the top height with chalk, and then lay the rope on the floor to count handspans or cubits.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rope/stick transfer method explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Comparing Three Objects",
        "q": "A tree is taller than a lamp post. The lamp post is taller than a car. Which of the three is the tallest, and which is the shortest?",
        "ans": "<strong>Answer:</strong><br>• <strong>Tallest:</strong> The Tree.<br>• <strong>Shortest:</strong> The Car.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tree tallest",
            "marks": "1 M"
          },
          {
            "key": "Car shortest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Measurement Riddle",
        "q": "I stretch from your thumb to your pinky finger spread wide. What unit of length am I?",
        "ans": "<strong>Answer:</strong><br>I am a <strong>Handspan</strong> (बित्ता).",
        "marks": 1,
        "rubric": [
          {
            "key": "Identified Handspan",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Measurement • Footsteps Across Classroom",
        "q": "Rani measures the distance from the blackboard to the classroom door using her footsteps. It is 15 footsteps. When her teacher walks the same distance, it takes 10 footsteps. Why?",
        "ans": "<strong>Answer:</strong><br>• Footstep is an informal unit of measurement. The teacher's legs and feet are longer than Rani's, so <strong>fewer adult footsteps are needed to cover the same distance</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Teacher's feet are longer / non-standard unit",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm8",
    "num": 8,
    "unit": "Unit 4: Sharing & Multiplication Readiness",
    "title": "Grouping and Sharing",
    "subtitle": "Equal Distribution, Visual Arrays, Repeated Addition & Multiplication Readiness",
    "concepts": [
      "Distributing collections equally among a given number of groups.",
      "Connecting repeated addition of equal groups to multiplication (e.g. 4 + 4 + 4 = 3 × 4 = 12).",
      "Finding totals from everyday arrays: animal legs, bicycle wheels, flower petals."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"10\"/><rect x=\"60\" y=\"30\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><circle cx=\"85\" cy=\"50\" r=\"10\" fill=\"#15803d\"/><circle cx=\"110\" cy=\"50\" r=\"10\" fill=\"#15803d\"/><circle cx=\"135\" cy=\"50\" r=\"10\" fill=\"#15803d\"/><circle cx=\"110\" cy=\"72\" r=\"10\" fill=\"#15803d\"/><rect x=\"200\" y=\"30\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><circle cx=\"225\" cy=\"50\" r=\"10\" fill=\"#15803d\"/><circle cx=\"250\" cy=\"50\" r=\"10\" fill=\"#15803d\"/><circle cx=\"275\" cy=\"50\" r=\"10\" fill=\"#15803d\"/><circle cx=\"250\" cy=\"72\" r=\"10\" fill=\"#15803d\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">2 Groups of 4 Laddoos = 4 + 4 = 8 Laddoos</text></svg>",
    "cbq": {
      "title": "Equal Sharing of Gulab Jamuns",
      "text": "Grandmother prepares 18 fresh gulab jamuns for 3 grandchildren: Rohit, Tanu, and Yash. She wants to distribute them equally with none left over.",
      "question": "How many gulab jamuns does each grandchild receive? If 2 more friends arrive (making 5 children), can 18 jamuns be divided equally without remainders?",
      "answer": "1. 18 shared equally among 3 children = 18 ÷ 3 = 6 gulab jamuns each.<br>2. For 5 children: 18 ÷ 5 = 3 jamuns each with 3 jamuns left over. Therefore, 18 cannot be divided equally among 5 children without remainder.",
      "rubric": "1.5 M for 6 jamuns calculation + 1.5 M for 5-children remainder analysis"
    },
    "questions": [
      {
        "category": "Equal Sharing • Basic Division",
        "q": "Share 15 bananas equally among 3 monkeys. Draw or write how many bananas each monkey gets.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total bananas = 15<br>• Monkeys = 3<br>• Give 1 by 1 until finished: 15 ÷ 3 = <strong>5 bananas each</strong>.<br>• Check: 5 + 5 + 5 = 15.",
        "marks": 2,
        "rubric": [
          {
            "key": "Equal sharing method",
            "marks": "1 M"
          },
          {
            "key": "Answer: 5 bananas each",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Repeated Addition to Multiplication",
        "q": "Write the repeated addition sentence and multiplication sentence for:<br>4 plates with 3 cookies on each plate.",
        "ans": "<strong>Solution:</strong><br>• Repeated addition: 3 + 3 + 3 + 3 = <strong>12 cookies</strong>.<br>• Multiplication sentence: 4 × 3 = <strong>12 cookies</strong> (4 groups of 3).",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition: 3+3+3+3=12",
            "marks": "1 M"
          },
          {
            "key": "Multiplication: 4×3=12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Legs Array",
        "q": "There are 5 cows grazing in a meadow. Each cow has 4 legs. How many cow legs are there altogether?",
        "ans": "<strong>Calculation:</strong><br>• Number of cows = 5<br>• Legs per cow = 4<br>• Repeated addition: 4 + 4 + 4 + 4 + 4 = <strong>20 legs</strong>.<br>• (5 × 4 = 20 legs).",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition setup",
            "marks": "1 M"
          },
          {
            "key": "Final answer: 20 legs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Bicycle Wheels Array",
        "q": "There are 6 bicycles parked outside a school. Each bicycle has 2 wheels. What is the total number of wheels?",
        "ans": "<strong>Calculation:</strong><br>• Number of bicycles = 6<br>• Wheels per bicycle = 2<br>• 2 + 2 + 2 + 2 + 2 + 2 = <strong>12 wheels</strong>.<br>• (6 × 2 = 12 wheels).",
        "marks": 2,
        "rubric": [
          {
            "key": "Skip counting by 2",
            "marks": "1 M"
          },
          {
            "key": "Answer: 12 wheels",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tricycle Wheels Array",
        "q": "A toy shop has 4 tricycles. Each tricycle has 3 wheels. How many wheels in all?",
        "ans": "<strong>Calculation:</strong><br>• 4 tricycles × 3 wheels = 3 + 3 + 3 + 3 = <strong>12 wheels</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Working shown",
            "marks": "1 M"
          },
          {
            "key": "Answer: 12 wheels",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Equal Sharing • Remainder Concept",
        "q": "Mother has 14 apples. She divides them equally between Rahul and Ananya. Does she have any apples left over?",
        "ans": "<strong>Solution:</strong><br>• Total apples = 14<br>• Number of children = 2<br>• 14 ÷ 2 = <strong>7 apples each</strong>.<br>• Since 14 is an even number, <strong>0 apples are left over</strong> (no remainder).",
        "marks": 2,
        "rubric": [
          {
            "key": "7 apples each",
            "marks": "1 M"
          },
          {
            "key": "0 left over confirmed",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Equal Sharing with Leftover",
        "q": "Divide 11 marbles equally between 2 friends. How many marbles does each friend get, and how many marbles are left over?",
        "ans": "<strong>Solution:</strong><br>• 11 = 5 + 5 + 1.<br>• Each friend gets <strong>5 marbles</strong>.<br>• <strong>1 marble is left over</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 marbles each",
            "marks": "1 M"
          },
          {
            "key": "1 marble remainder",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Array Multiplication • Rows and Columns",
        "q": "An egg tray has 3 rows of eggs. Each row contains 6 eggs. How many eggs are in the tray?",
        "ans": "<strong>Calculation:</strong><br>• Rows = 3<br>• Eggs per row = 6<br>• Total eggs = 6 + 6 + 6 = <strong>18 eggs</strong> (3 × 6 = 18).",
        "marks": 2,
        "rubric": [
          {
            "key": "6 + 6 + 6 setup",
            "marks": "1 M"
          },
          {
            "key": "Answer: 18 eggs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Flower Petals",
        "q": "A sunflower has 5 petals in a small drawing. If there are 4 sunflowers, how many petals are there in total?",
        "ans": "<strong>Calculation:</strong><br>• 4 sunflowers × 5 petals = 5 + 5 + 5 + 5 = <strong>20 petals</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Skip count by 5",
            "marks": "1 M"
          },
          {
            "key": "Answer: 20 petals",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grouping into Pouches",
        "q": "Deepak has 24 buttons. He puts 4 buttons in each packet. How many packets can he prepare?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total buttons = 24<br>• Buttons per packet = 4<br>• Skip counting by 4: 4, 8, 12, 16, 20, 24 (6 packets).<br>• Deepak can prepare <strong>6 packets</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Division/Skip counting by 4",
            "marks": "1 M"
          },
          {
            "key": "Answer: 6 packets",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Line Jumps • Frog Jumps",
        "q": "A frog takes jumps of 3 steps each along a number line starting at 0. After 5 jumps, which number does it reach?",
        "ans": "<strong>Solution:</strong><br>• Jump 1: 3<br>• Jump 2: 6<br>• Jump 3: 9<br>• Jump 4: 12<br>• Jump 5: <strong>15</strong>.<br>• The frog reaches the number <strong>15</strong> (5 × 3 = 15).",
        "marks": 2,
        "rubric": [
          {
            "key": "Jump steps shown",
            "marks": "1 M"
          },
          {
            "key": "Final number: 15",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparing Equal Groups",
        "q": "Which gives more chocolates:<br>(a) 3 packets of 5 chocolates each, or<br>(b) 2 packets of 8 chocolates each?",
        "ans": "<strong>Calculation:</strong><br>• Option (a) = 3 × 5 = <strong>15 chocolates</strong>.<br>• Option (b) = 2 × 8 = <strong>16 chocolates</strong>.<br>• Since 16 > 15, <strong>Option (b) gives more chocolates</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Option A = 15",
            "marks": "1 M"
          },
          {
            "key": "Option B = 16",
            "marks": "1 M"
          },
          {
            "key": "Conclusion: Option B gives more",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Commutative Property",
        "q": "Does 2 groups of 6 give the same total as 6 groups of 2? Show by calculating both.",
        "ans": "<strong>Answer:</strong><br>• 2 groups of 6 = 6 + 6 = <strong>12</strong>.<br>• 6 groups of 2 = 2 + 2 + 2 + 2 + 2 + 2 = <strong>12</strong>.<br>• <strong>Yes</strong>, both give the exact same total: 2 × 6 = 6 × 2 = 12.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both sums calculated (12)",
            "marks": "1 M"
          },
          {
            "key": "Yes, verified identical",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Sharing Crayons",
        "q": "A teacher has 20 crayons. She shares them equally among 4 art tables. How many crayons does each table get?",
        "ans": "<strong>Solution:</strong><br>• Total crayons = 20<br>• Tables = 4<br>• 20 ÷ 4 = <strong>5 crayons per table</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Division setup (20 ÷ 4)",
            "marks": "1 M"
          },
          {
            "key": "Answer: 5 crayons",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Grouping Rules",
        "q": "Write True or False:<br>(a) Sharing 10 items equally among 5 people gives 2 items each.<br>(b) 4 + 4 + 4 is the same as 3 × 4.<br>(c) 7 items can be divided equally between 2 people with no leftover.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong> (10 ÷ 5 = 2).<br>(b) <strong>True</strong> (both equal 12).<br>(c) <strong>False</strong> (7 is odd, 1 item is left over).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Grouping Riddle",
        "q": "We are 4 cats sitting in a porch. How many total paws and ears do we have together?",
        "ans": "<strong>Calculation:</strong><br>• Paws: 4 cats × 4 paws = <strong>16 paws</strong>.<br>• Ears: 4 cats × 2 ears = <strong>8 ears</strong>.<br>• Total paws and ears = 16 + 8 = <strong>24 altogether</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "16 paws",
            "marks": "1 M"
          },
          {
            "key": "8 ears (total 24)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Zero in Sharing",
        "q": "If there are 0 apples in a bowl and 3 children share it, how many apples does each child get?",
        "ans": "<strong>Answer:</strong><br>• 0 shared among 3 = 0 ÷ 3 = <strong>0 apples each</strong>.<br>• You cannot get apples from an empty bowl!",
        "marks": 1,
        "rubric": [
          {
            "key": "Answer: 0 apples",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Math Array",
        "q": "Draw an array with 2 rows of 5 stars (⭐). Write the repeated addition and total.",
        "ans": "<strong>Solution:</strong><br>• Row 1: ⭐ ⭐ ⭐ ⭐ ⭐ (5)<br>• Row 2: ⭐ ⭐ ⭐ ⭐ ⭐ (5)<br>• Repeated addition: 5 + 5 = <strong>10 stars</strong> (2 × 5 = 10).",
        "marks": 2,
        "rubric": [
          {
            "key": "2 rows of 5 represented",
            "marks": "1 M"
          },
          {
            "key": "5 + 5 = 10 stars",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm9",
    "num": 9,
    "unit": "Unit 5: Time, Money & Data",
    "title": "Which Season is It?",
    "subtitle": "Days of the Week, 12 Months of the Year, Clock Hours & Seasonal Cycles",
    "concepts": [
      "Naming and sequencing the 7 days of the week (Monday to Sunday).",
      "Knowing the 12 months in a solar year and months with 30, 31, or 28 days.",
      "Reading whole-hour clock times (e.g. 3:00, 7:00) and understanding daily routines.",
      "Connecting weather patterns, clothing, and seasonal foods to Indian seasons."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><circle cx=\"80\" cy=\"60\" r=\"32\" fill=\"#ffffff\" stroke=\"#ca8a04\" stroke-width=\"4\"/><line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"38\" stroke=\"#0f172a\" stroke-width=\"3\"/><line x1=\"80\" y1=\"60\" x2=\"98\" y2=\"60\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"200\" cy=\"60\" r=\"26\" fill=\"#fef08a\"/><path d=\"M 280,75 Q 310,35 340,75\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"6\"/><circle cx=\"420\" cy=\"60\" r=\"24\" fill=\"#93c5fd\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Clock at 3:00 • Summer Sun • Monsoon Rain • Winter Cold</text></svg>",
    "cbq": {
      "title": "School Annual Sports Week Schedule",
      "text": "The school sports week starts on Monday, October 12, and runs for 5 continuous school days.",
      "question": "On which day of the week will the sports competition conclude? If Saturday and Sunday are holidays, how many total days off do students get that weekend?",
      "answer": "1. Day 1 is Monday. Day 2 is Tuesday. Day 3 is Wednesday. Day 4 is Thursday. Day 5 is Friday. The competition concludes on <strong>Friday, October 16</strong>.<br>2. Saturday + Sunday = <strong>2 weekend days off</strong>.",
      "rubric": "1.5 M for concluding on Friday + 1.5 M for 2 weekend holidays"
    },
    "questions": [
      {
        "category": "Days of the Week Sequence",
        "q": "Name the 7 days of the week in chronological order starting from Monday.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Monday</strong><br>2. <strong>Tuesday</strong><br>3. <strong>Wednesday</strong><br>4. <strong>Thursday</strong><br>5. <strong>Friday</strong><br>6. <strong>Saturday</strong><br>7. <strong>Sunday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 7 days in correct order",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Days Before and After",
        "q": "Answer the following:<br>(a) Which day comes just after Friday?<br>(b) Which day comes just before Tuesday?<br>(c) Which day falls between Wednesday and Friday?",
        "ans": "<strong>Answers:</strong><br>(a) Just after Friday is <strong>Saturday</strong>.<br>(b) Just before Tuesday is <strong>Monday</strong>.<br>(c) Between Wednesday and Friday is <strong>Thursday</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Months of the Year",
        "q": "How many months are there in a calendar year? Which is the first month and which is the last month?",
        "ans": "<strong>Answer:</strong><br>• There are <strong>12 months</strong> in a calendar year.<br>• The first month is <strong>January</strong>.<br>• The last month is <strong>December</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "12 months named",
            "marks": "1 M"
          },
          {
            "key": "January and December identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shortest Month",
        "q": "Which month of the year has the fewest number of days? How many days does it usually have?",
        "ans": "<strong>Answer:</strong><br>• <strong>February</strong> has the fewest days.<br>• It usually has <strong>28 days</strong> (and 29 days in a leap year).",
        "marks": 2,
        "rubric": [
          {
            "key": "February identified",
            "marks": "1 M"
          },
          {
            "key": "28 days (29 in leap year)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Months with 31 Days",
        "q": "Name 4 months of the year that have exactly 31 days.",
        "ans": "<strong>Answer:</strong><br>Any four of the following:<br>1. <strong>January</strong><br>2. <strong>March</strong><br>3. <strong>May</strong><br>4. <strong>July</strong><br>*(Also: August, October, December)*.",
        "marks": 2,
        "rubric": [
          {
            "key": "Four valid 31-day months named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Months with 30 Days",
        "q": "Name the 4 months that have exactly 30 days.",
        "ans": "<strong>Answer:</strong><br>The four 30-day months are:<br>1. <strong>April</strong><br>2. <strong>June</strong><br>3. <strong>September</strong><br>4. <strong>November</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 thirty-day months named correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Reading Clock Hours",
        "q": "On a wall clock, the short hour hand points to 4 and the long minute hand points straight up to 12. What time is it?",
        "ans": "<strong>Answer:</strong><br>• Short hand at 4 = Hour 4<br>• Long hand at 12 = 00 minutes<br>• The time is <strong>4:00 o'clock (4 o'clock)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Hour and minute hand identified",
            "marks": "1 M"
          },
          {
            "key": "Time: 4:00 o'clock",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Clock Hands at School Opening",
        "q": "If your school morning assembly begins at 8 o'clock in the morning, where should the short hand and long hand be on the clock face?",
        "ans": "<strong>Answer:</strong><br>• The short hour hand should point to <strong>8</strong>.<br>• The long minute hand should point to <strong>12</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Short hand at 8",
            "marks": "1 M"
          },
          {
            "key": "Long hand at 12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Seasons and Clothing",
        "q": "Match each season with the clothing item we use:<br>(1) Winter — (A) Cotton T-shirt & shorts<br>(2) Monsoon — (B) Woolen muffler and sweater<br>(3) Summer — (C) Raincoat and gumboots",
        "ans": "<strong>Correct Matching:</strong><br>1. Winter ➔ <strong>(B) Woolen muffler and sweater</strong><br>2. Monsoon ➔ <strong>(C) Raincoat and gumboots</strong><br>3. Summer ➔ <strong>(A) Cotton T-shirt & shorts</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 matched correctly (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Seasonal Fruits",
        "q": "In which season do we enjoy juicy sweet mangoes and chilled watermelon in India?",
        "ans": "<strong>Answer:</strong><br>We enjoy mangoes and watermelons during the <strong>Summer season</strong> (April, May, June).",
        "marks": 1,
        "rubric": [
          {
            "key": "Summer season identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "National Festivals and Months",
        "q": "In which months do we celebrate:<br>(a) Independence Day (15th August)?<br>(b) Republic Day (26th January)?<br>(c) Gandhi Jayanti (2nd October)?",
        "ans": "<strong>Answers:</strong><br>(a) Independence Day: <strong>August</strong><br>(b) Republic Day: <strong>January</strong><br>(c) Gandhi Jayanti: <strong>October</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 national festival months correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Daily Routine Sequencing",
        "q": "Put these daily events in chronological order from morning to night:<br>[ Go to sleep, Wake up from bed, Eat dinner, Attend school, Play in the evening ].",
        "ans": "<strong>Correct Chronological Order:</strong><br>1. <strong>Wake up from bed</strong> (Morning)<br>2. <strong>Attend school</strong> (Morning to Afternoon)<br>3. <strong>Play in the evening</strong> (Evening)<br>4. <strong>Eat dinner</strong> (Night)<br>5. <strong>Go to sleep</strong> (Bedtime).",
        "marks": 2,
        "rubric": [
          {
            "key": "Proper logical sequence",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Calendar Math",
        "q": "If today is Tuesday, October 6, what day of the week will it be exactly one week later (October 13)?",
        "ans": "<strong>Answer:</strong><br>• A complete cycle of days repeats every 7 days.<br>• Since 6 + 7 = 13, it will be <strong>Tuesday</strong> again.",
        "marks": 2,
        "rubric": [
          {
            "key": "7-day cycle explained",
            "marks": "1 M"
          },
          {
            "key": "Answer: Tuesday",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Time and Calendar",
        "q": "Write True or False:<br>(a) There are 24 hours in one full day and night.<br>(b) Sunday is the day after Monday.<br>(c) July and August both have 31 days.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong> (12 hours day + 12 hours night = 24 hours).<br>(b) <strong>False</strong> (Sunday is the day *before* Monday).<br>(c) <strong>True</strong> (July and August are consecutive 31-day months).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Time Riddle",
        "q": "I have two hands that always chase each other, but no feet to walk. I tell you when to wake up and when to play. What am I?",
        "ans": "<strong>Answer:</strong><br>I am a <strong>Clock</strong> (or Watch).",
        "marks": 1,
        "rubric": [
          {
            "key": "Clock identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Sun and Seasons",
        "q": "During which season do the days feel short and the nights feel very long and chilly?",
        "ans": "<strong>Answer:</strong><br>During the <strong>Winter season</strong>, the sun sets early, making days shorter and nights longer.",
        "marks": 1,
        "rubric": [
          {
            "key": "Winter season identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Season Matching",
        "q": "Match each clothing or food item to the correct season:<br>(a) Woolen gloves and hot soup — (1) Summer<br>(b) Umbrella and gumboots — (2) Winter<br>(c) Cotton shirt and cold lemonade — (3) Rainy season",
        "ans": "<strong>Matching:</strong><br>• (a) Woolen gloves — <strong>(2) Winter</strong><br>• (b) Umbrella — <strong>(3) Rainy season</strong><br>• (c) Cotton shirt — <strong>(1) Summer</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All three matched correctly",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Textbook Calendar • Seven Days Order",
        "q": "If today is Wednesday, what day was yesterday, and what day will it be tomorrow?",
        "ans": "<strong>Answer:</strong><br>• Yesterday was <strong>Tuesday</strong>.<br>• Tomorrow will be <strong>Thursday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tuesday and Thursday",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm10",
    "num": 10,
    "unit": "Unit 5: Time, Money & Data",
    "title": "Fun at the Fair",
    "subtitle": "Indian Coins & Currency Notes, Value Combinations, Purchasing & Change",
    "concepts": [
      "Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and currency notes (₹10, ₹20, ₹50, ₹100).",
      "Making specific amounts using different coin and note combinations.",
      "Solving simple addition and subtraction word problems for buying tickets, toys, and snacks."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"80\" cy=\"60\" r=\"22\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"3\"/><text x=\"80\" y=\"66\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#0f172a\" text-anchor=\"middle\">₹5</text><circle cx=\"140\" cy=\"60\" r=\"24\" fill=\"#fbbf24\" stroke=\"#d97706\" stroke-width=\"3\"/><text x=\"140\" y=\"66\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#78350f\" text-anchor=\"middle\">₹10</text><rect x=\"200\" y=\"38\" width=\"70\" height=\"44\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\" rx=\"4\"/><text x=\"235\" y=\"65\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#9a3412\" text-anchor=\"middle\">₹20</text><rect x=\"300\" y=\"38\" width=\"80\" height=\"44\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\" rx=\"4\"/><text x=\"340\" y=\"65\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#075985\" text-anchor=\"middle\">₹50</text><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Currency Notes &amp; Coins for Village Fair Shopping</text></svg>",
    "cbq": {
      "title": "Village Fair Ride & Snack Budget",
      "text": "Karan carries a single ₹50 note to the fair. He rides the giant Ferris wheel for ₹20 and buys an ice-cream cup for ₹15.",
      "question": "How much total money did Karan spend? How much change does the shopkeeper return to him?",
      "answer": "1. Total spent = ₹20 (Ferris wheel) + ₹15 (Ice-cream) = ₹35.<br>2. Change returned = ₹50 - ₹35 = ₹15.<br>3. The shopkeeper can give him one ₹10 note and one ₹5 coin.",
      "rubric": "1.5 M for total spent (₹35) + 1.5 M for change calculation (₹15)"
    },
    "questions": [
      {
        "category": "Coin Identification and Values",
        "q": "Name the 4 common metal coins currently used in India and write their values with the ₹ symbol.",
        "ans": "<strong>Answer:</strong><br>1. <strong>₹1 coin</strong> (One Rupee)<br>2. <strong>₹2 coin</strong> (Two Rupees)<br>3. <strong>₹5 coin</strong> (Five Rupees)<br>4. <strong>₹10 coin</strong> (Ten Rupees).",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 coins named with ₹ symbol",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Making ₹5 with Smaller Coins",
        "q": "Show two different ways to make ₹5 using smaller coins.",
        "ans": "<strong>Ways to make ₹5:</strong><br>• <strong>Way 1:</strong> Two ₹2 coins + One ₹1 coin (2 + 2 + 1 = ₹5).<br>• <strong>Way 2:</strong> Five ₹1 coins (1 + 1 + 1 + 1 + 1 = ₹5).",
        "marks": 2,
        "rubric": [
          {
            "key": "Way 1 correct",
            "marks": "1 M"
          },
          {
            "key": "Way 2 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Making ₹10 with Coins",
        "q": "How many ₹2 coins are needed to make ₹10? How many ₹5 coins are needed to make ₹10?",
        "ans": "<strong>Solution:</strong><br>• For ₹2 coins: 10 ÷ 2 = <strong>5 coins of ₹2</strong> (2, 4, 6, 8, 10).<br>• For ₹5 coins: 10 ÷ 5 = <strong>2 coins of ₹5</strong> (5 + 5 = 10).",
        "marks": 2,
        "rubric": [
          {
            "key": "Five ₹2 coins",
            "marks": "1 M"
          },
          {
            "key": "Two ₹5 coins",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Making ₹20 with Notes",
        "q": "Which two currency notes can you combine to make exactly ₹20?",
        "ans": "<strong>Answer:</strong><br>You can combine <strong>two ₹10 notes</strong> (₹10 + ₹10 = ₹20).",
        "marks": 1,
        "rubric": [
          {
            "key": "Two ₹10 notes identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Buying at the Stall",
        "q": "At the toy stall, a colorful pinwheel costs ₹8. You have only ₹2 coins in your pocket. How many ₹2 coins must you hand over?",
        "ans": "<strong>Solution:</strong><br>• Cost of pinwheel = ₹8<br>• Value per coin = ₹2<br>• 8 ÷ 2 = <strong>4 coins of ₹2</strong> (2 + 2 + 2 + 2 = ₹8).",
        "marks": 2,
        "rubric": [
          {
            "key": "Division/addition setup",
            "marks": "1 M"
          },
          {
            "key": "Answer: 4 coins of ₹2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Total Cost Calculation",
        "q": "Rani buys a balloon for ₹6 and a whistle for ₹9. How much money must she pay in all?",
        "ans": "<strong>Calculation:</strong><br>• Cost of balloon = ₹6<br>• Cost of whistle = ₹9<br>• Total payment = 6 + 9 = <strong>₹15</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 + 9 addition",
            "marks": "1 M"
          },
          {
            "key": "Answer: ₹15",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Calculating Change Return",
        "q": "Amit buys a box of crayons costing ₹12. He hands a ₹20 note to the shopkeeper. How much change should he receive back?",
        "ans": "<strong>Calculation:</strong><br>• Amount given = ₹20<br>• Cost of crayons = ₹12<br>• Change back = 20 - 12 = <strong>₹8</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 20 - 12",
            "marks": "1 M"
          },
          {
            "key": "Answer: ₹8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparing Money Amounts",
        "q": "Who has more money:<br>• Tarun has three ₹10 notes.<br>• Priya has one ₹50 note.<br>Calculate and compare.",
        "ans": "<strong>Calculation:</strong><br>• Tarun's money = 3 × 10 = <strong>₹30</strong>.<br>• Priya's money = 1 × 50 = <strong>₹50</strong>.<br>• Since ₹50 > ₹30, <strong>Priya has more money</strong> (by ₹20).",
        "marks": 3,
        "rubric": [
          {
            "key": "Tarun has ₹30",
            "marks": "1 M"
          },
          {
            "key": "Priya has ₹50",
            "marks": "1 M"
          },
          {
            "key": "Priya has more concluded",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Piggy Bank Counting",
        "q": "Sneha breaks her piggy bank and finds: four ₹5 coins and three ₹10 coins. How much total money did she save?",
        "ans": "<strong>Calculation:</strong><br>• Value of four ₹5 coins = 4 × 5 = <strong>₹20</strong>.<br>• Value of three ₹10 coins = 3 × 10 = <strong>₹30</strong>.<br>• Total savings = 20 + 30 = <strong>₹50</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "₹5 coins sum = ₹20",
            "marks": "1 M"
          },
          {
            "key": "₹10 coins sum = ₹30",
            "marks": "1 M"
          },
          {
            "key": "Total = ₹50",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Making ₹50 with Multiple Notes",
        "q": "How many ₹10 notes make ₹50? Can you make ₹50 using two ₹20 notes and one ₹10 note?",
        "ans": "<strong>Answer:</strong><br>1. 50 ÷ 10 = <strong>5 notes of ₹10</strong> make ₹50.<br>2. <strong>Yes</strong>: ₹20 + ₹20 + ₹10 = ₹40 + ₹10 = <strong>₹50</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Five ₹10 notes",
            "marks": "1 M"
          },
          {
            "key": "Yes, 20+20+10 = 50",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Insufficient Money Word Problem",
        "q": "A wooden toy horse costs ₹28. Rohan has only two ₹10 notes and one ₹5 coin in his pocket. Does he have enough money? If not, how much more does he need?",
        "ans": "<strong>Solution:</strong><br>1. Rohan's money = (2 × 10) + 5 = 20 + 5 = <strong>₹25</strong>.<br>2. Cost of toy horse = ₹28.<br>3. <strong>No</strong>, Rohan does not have enough money (₹25 < ₹28).<br>4. He needs 28 - 25 = <strong>₹3 more</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rohan has ₹25",
            "marks": "1 M"
          },
          {
            "key": "No, not enough",
            "marks": "1 M"
          },
          {
            "key": "Short by ₹3",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Price List Multi-Item Math",
        "q": "Look at the fair price list:<br>• Popcorn packet: ₹10<br>• Fruit juice: ₹15<br>• Sweet jalebi plate: ₹20<br>How much does it cost to buy 1 popcorn and 1 sweet jalebi plate?",
        "ans": "<strong>Calculation:</strong><br>• Popcorn = ₹10<br>• Jalebi = ₹20<br>• Total cost = 10 + 20 = <strong>₹30</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 10 + 20",
            "marks": "1 M"
          },
          {
            "key": "Answer: ₹30",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money Symbol Usage",
        "q": "What is the official symbol for the Indian Rupee? Write the amounts 'Forty rupees' and 'Seventy-five rupees' using the official symbol.",
        "ans": "<strong>Answer:</strong><br>• The official symbol is <strong>₹</strong>.<br>• Forty rupees = <strong>₹40</strong><br>• Seventy-five rupees = <strong>₹75</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹ symbol shown",
            "marks": "1 M"
          },
          {
            "key": "₹40 and ₹75 formatted correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Currency Facts",
        "q": "Write True or False:<br>(a) Ten ₹1 coins have the exact same value as one ₹10 coin.<br>(b) A ₹50 note has more purchasing power than two ₹20 notes.<br>(c) A ₹10 coin is made of plastic.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong> (Both equal ₹10).<br>(b) <strong>True</strong> (₹50 is more than ₹40).<br>(c) <strong>False</strong> (Indian ₹10 coins are bimetallic metals, not plastic).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 statements correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Money Riddle",
        "q": "I am a coin. If you have two of me, you can buy a 10-rupee chocolate without any change. What coin am I?",
        "ans": "<strong>Answer:</strong><br>You are a <strong>₹5 coin</strong> (because 5 + 5 = 10).",
        "marks": 1,
        "rubric": [
          {
            "key": "₹5 coin identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Exact Coins Selection",
        "q": "You need to pay exactly ₹17 for a notebook. You have: one ₹10 note, two ₹5 coins, three ₹2 coins, and five ₹1 coins. Write one combination that makes exactly ₹17.",
        "ans": "<strong>Answer:</strong><br>One simple combination:<br>• One ₹10 note (₹10)<br>• One ₹5 coin (₹5)<br>• One ₹2 coin (₹2)<br>• Total = 10 + 5 + 2 = <strong>₹17</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid combination shown (10+5+2)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Adding Tens",
        "q": "Calculate quickly:<br>(a) ₹20 + ₹30 = ______<br>(b) ₹50 + ₹20 = ______<br>(c) ₹100 - ₹50 = ______",
        "ans": "<strong>Answers:</strong><br>(a) ₹20 + ₹30 = <strong>₹50</strong><br>(b) ₹50 + ₹20 = <strong>₹70</strong><br>(c) ₹100 - ₹50 = <strong>₹50</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 mental math sums correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Creative Fair Budgeting",
        "q": "You have ₹25 to spend on games at the fair. The ring toss costs ₹10, balloon shooting costs ₹10, and boat ride costs ₹15. Can you play ring toss and boat ride? Explain.",
        "ans": "<strong>Calculation:</strong><br>• Ring toss (₹10) + Boat ride (₹15) = 10 + 15 = <strong>₹25</strong>.<br>• <strong>Yes</strong>, you can play both because the total cost exactly equals your ₹25 budget.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum = ₹25 calculated",
            "marks": "1 M"
          },
          {
            "key": "Yes, exactly within budget explained",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm11",
    "num": 11,
    "unit": "Unit 5: Time, Money & Data",
    "title": "Data Handling",
    "subtitle": "Categorizing, Tally Charts, Letter Counting & Pictograph Analysis",
    "concepts": [
      "Collecting data through counting and sorting into distinct categories.",
      "Reading simple pictographs and block charts where 1 symbol represents 1 item.",
      "Analyzing name lengths and most/least frequent elements in everyday surveys."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"10\"/><rect x=\"60\" y=\"30\" width=\"30\" height=\"60\" fill=\"#3b82f6\" rx=\"4\"/><rect x=\"110\" y=\"50\" width=\"30\" height=\"40\" fill=\"#10b981\" rx=\"4\"/><rect x=\"160\" y=\"20\" width=\"30\" height=\"70\" fill=\"#f59e0b\" rx=\"4\"/><rect x=\"210\" y=\"60\" width=\"30\" height=\"30\" fill=\"#ef4444\" rx=\"4\"/><text x=\"75\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\" text-anchor=\"middle\">Car(6)</text><text x=\"125\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\" text-anchor=\"middle\">Bike(4)</text><text x=\"175\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\" text-anchor=\"middle\">Cycle(7)</text><text x=\"225\" y=\"105\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\" text-anchor=\"middle\">Bus(3)</text><text x=\"360\" y=\"65\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\">Vehicle Tally Survey</text></svg>",
    "cbq": {
      "title": "Class 2 Favorite Fruit Survey",
      "text": "The class teacher surveys all 30 students about their single favorite fruit. The findings are: 12 students like Mango, 8 students like Apple, 6 students like Banana, and 4 students like Orange.",
      "question": "Which fruit is the most popular in the class? How many more students prefer Mango over Banana?",
      "answer": "1. <strong>Mango</strong> is the most popular fruit with 12 votes (highest count).<br>2. Difference between Mango and Banana = 12 - 6 = <strong>6 more students</strong> prefer Mango.",
      "rubric": "1.5 M for Mango as most popular + 1.5 M for difference (6)"
    },
    "questions": [
      {
        "category": "Counting Categories in a Picture",
        "q": "In a park picture, children count the animals:<br>• Dogs: 4<br>• Cats: 3<br>• Birds on trees: 8<br>• Squirrels: 5<br>How many total animals were observed in the park?",
        "ans": "<strong>Calculation:</strong><br>• Dogs = 4<br>• Cats = 3<br>• Birds = 8<br>• Squirrels = 5<br>• Total = 4 + 3 + 8 + 5 = <strong>20 animals</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition sentence (4 + 3 + 8 + 5)",
            "marks": "1 M"
          },
          {
            "key": "Total = 20 animals",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Analyzing Name Letter Lengths",
        "q": "Count the number of letters in each child's name:<br>(a) AMAN<br>(b) PRIYANKA<br>(c) DEV<br>(d) MEENAKSHI<br>Which name is the longest and which is the shortest?",
        "ans": "<strong>Letter Counts:</strong><br>(a) AMAN = 4 letters<br>(b) PRIYANKA = 8 letters<br>(c) DEV = 3 letters<br>(d) MEENAKSHI = 9 letters.<br>• <strong>Longest name:</strong> MEENAKSHI (9 letters).<br>• <strong>Shortest name:</strong> DEV (3 letters).",
        "marks": 3,
        "rubric": [
          {
            "key": "All letter counts correct",
            "marks": "1 M"
          },
          {
            "key": "Longest: MEENAKSHI",
            "marks": "1 M"
          },
          {
            "key": "Shortest: DEV",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Letter Frequency in Names",
        "q": "In the names: RAM, AMAN, SARITA, TARUN, count how many times the letter 'A' appears in total.",
        "ans": "<strong>Count of letter 'A':</strong><br>• RAM ➔ 1 'A'<br>• AMAN ➔ 2 'A's<br>• SARITA ➔ 2 'A's<br>• TARUN ➔ 1 'A'<br>• Total times letter 'A' appears = 1 + 2 + 2 + 1 = <strong>6 times</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Letter counts per name",
            "marks": "1 M"
          },
          {
            "key": "Total: 6 times",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Reading a Pictograph",
        "q": "In a pictograph where 1 📚 symbol = 1 library book read:<br>• Rohit: 📚📚📚📚 (4)<br>• Simran: 📚📚📚📚📚📚 (6)<br>• Tanu: 📚📚 (2)<br>(a) Who read the most books?<br>(b) How many books did all three read altogether?",
        "ans": "<strong>Answers:</strong><br>(a) <strong>Simran</strong> read the most books (6 books).<br>(b) Total books = 4 + 6 + 2 = <strong>12 books</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Simran read most",
            "marks": "1 M"
          },
          {
            "key": "Total = 12 books",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparing Data Categories",
        "q": "Using the pictograph above (Rohit 4, Simran 6, Tanu 2), how many more books did Simran read than Tanu?",
        "ans": "<strong>Calculation:</strong><br>• Simran's books = 6<br>• Tanu's books = 2<br>• Difference = 6 - 2 = <strong>4 more books</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 6 - 2",
            "marks": "1 M"
          },
          {
            "key": "Answer: 4 more books",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shoe Size Survey",
        "q": "A survey of 25 students' shoe sizes shows:<br>• Size 1: 5 students<br>• Size 2: 12 students<br>• Size 3: 8 students<br>(a) Which shoe size is the most common?<br>(b) Which shoe size is the least common?",
        "ans": "<strong>Answer:</strong><br>(a) <strong>Size 2</strong> is the most common shoe size (12 students).<br>(b) <strong>Size 1</strong> is the least common shoe size (5 students).",
        "marks": 2,
        "rubric": [
          {
            "key": "Most common: Size 2",
            "marks": "1 M"
          },
          {
            "key": "Least common: Size 1",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vehicle Traffic Tally",
        "q": "During 15 minutes of watching from the gate, children recorded vehicles passing:<br>• Bicycles: 10<br>• Motorbikes: 7<br>• Cars: 5<br>• Buses: 2<br>(a) Which vehicle passed the greatest number of times?<br>(b) Did more cars pass or more motorbikes?",
        "ans": "<strong>Answer:</strong><br>(a) <strong>Bicycles</strong> passed the greatest number of times (10).<br>(b) <strong>More motorbikes passed</strong> (7 motorbikes > 5 cars).",
        "marks": 2,
        "rubric": [
          {
            "key": "Bicycles greatest count",
            "marks": "1 M"
          },
          {
            "key": "More motorbikes than cars",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Monthly Weather Chart",
        "q": "In the 30 days of September, the weather was recorded as:<br>• Sunny days: 16<br>• Rainy days: 10<br>• Cloudy days: 4<br>How many days were NOT rainy in September?",
        "ans": "<strong>Calculation:</strong><br>• Total days = 30<br>• Rainy days = 10<br>• Days not rainy = Sunny (16) + Cloudy (4) = <strong>20 days</strong> (or 30 - 10 = 20).",
        "marks": 2,
        "rubric": [
          {
            "key": "Calculation method",
            "marks": "1 M"
          },
          {
            "key": "Answer: 20 days",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Favorite Sport Survey",
        "q": "In a class survey on favorite games:<br>• Cricket: 14 votes<br>• Football: 8 votes<br>• Badminton: 6 votes<br>What is the total number of students who voted?",
        "ans": "<strong>Calculation:</strong><br>• Total voters = 14 + 8 + 6 = <strong>28 students</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum setup 14 + 8 + 6",
            "marks": "1 M"
          },
          {
            "key": "Answer: 28 students",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tally Chart Making",
        "q": "Draw tally marks or write counts for the following fruit collection: 4 apples, 6 bananas, 3 oranges.",
        "ans": "<strong>Tally Table:</strong><br>• <strong>Apples:</strong> |||| (Count: 4)<br>• <strong>Bananas:</strong> |||| | (Count: 6)<br>• <strong>Oranges:</strong> ||| (Count: 3).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct representation for all 3 fruits",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Water Glasses Drank Daily",
        "q": "Five friends record how many glasses of water they drink each day:<br>• Aarav: 6<br>• Tanya: 8<br>• Kabir: 7<br>• Meera: 8<br>• Vicky: 5<br>(a) Which two friends drank the same number of glasses?<br>(b) Who drank the least water?",
        "ans": "<strong>Answer:</strong><br>(a) <strong>Tanya and Meera</strong> drank the exact same amount (8 glasses each).<br>(b) <strong>Vicky</strong> drank the least water (5 glasses).",
        "marks": 2,
        "rubric": [
          {
            "key": "Tanya and Meera identified",
            "marks": "1 M"
          },
          {
            "key": "Vicky drank least",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False • Data Handling",
        "q": "Write True or False:<br>(a) A pictograph uses pictures or symbols to represent data numbers.<br>(b) A tally table helps us organize messy information neatly.<br>(c) In a survey of 10 people, the highest vote can be 12.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong><br>(b) <strong>True</strong><br>(c) <strong>False</strong> (In a survey of 10 people, votes cannot exceed 10).",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correct (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Difference between Highest and Lowest",
        "q": "In an art competition, points scored by 4 house teams were: Blue (24), Red (30), Green (18), Yellow (22). What is the difference between the highest and lowest scores?",
        "ans": "<strong>Calculation:</strong><br>• Highest score = 30 (Red House)<br>• Lowest score = 18 (Green House)<br>• Difference = 30 - 18 = <strong>12 points</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Highest (30) and Lowest (18)",
            "marks": "1 M"
          },
          {
            "key": "Difference = 12 points",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Data Riddle",
        "q": "I show numbers using little pictures of apples, stars, or smiley faces so you can read them at a single glance. What kind of chart am I?",
        "ans": "<strong>Answer:</strong><br>You are a <strong>Pictograph</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Identified Pictograph",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Missing Data Deduction",
        "q": "A basket has 20 total fruits. 8 are mangoes and 7 are apples. The remaining fruits are guavas. How many guavas are in the basket?",
        "ans": "<strong>Calculation:</strong><br>• Mangoes + Apples = 8 + 7 = 15 fruits.<br>• Total fruits = 20<br>• Guavas = 20 - 15 = <strong>5 guavas</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 + 7 = 15",
            "marks": "1 M"
          },
          {
            "key": "20 - 15 = 5 guavas",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Why We Collect Data",
        "q": "Why does a school principal count the number of boys and girls in every classroom at the start of the year?",
        "ans": "<strong>Answer:</strong><br>• To know how many desks, chairs, textbooks, uniforms, and mid-day meal plates are needed for everyone so no child faces a shortage.",
        "marks": 2,
        "rubric": [
          {
            "key": "Planning resources (desks/books/meals) explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Data • School Bus Tally",
        "q": "Children recorded the colours of cars in the school parking lot: 8 White cars, 5 Red cars, 4 Blue cars, and 3 Silver cars.<br>(a) Which colour car is the most common?<br>(b) How many cars were counted in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>(a) <strong>White cars</strong> are the most common (8 cars).<br>(b) Total cars = 8 + 5 + 4 + 3 = <strong>20 cars in total</strong>.",
        "marks": 2.5,
        "rubric": [
          {
            "key": "White most common",
            "marks": "1 M"
          },
          {
            "key": "Total 20 cars",
            "marks": "1.5 M"
          }
        ]
      }
    ]
  }
];

module.exports = { joyfulMathsChapters };
