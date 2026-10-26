// scripts/data-c2-maths/mathMagicData.js
// Official NCERT Class 2 Mathematics (Math-Magic Book 2) Complete 100% Verbatim Dataset

const mathMagicChapters = [
  {
    "id": "mmg1",
    "num": 1,
    "unit": "Unit 1: Shapes & Spatial Understanding",
    "title": "What is Long, What is Round?",
    "subtitle": "Rolling, Sliding, Towers of Boxes and Coins",
    "concepts": [
      "Distinguishing long objects (rulers, pencils, bats) from round objects (balls, oranges, globes).",
      "Understanding which objects roll (smooth curved surfaces) and which slide (flat surfaces).",
      "Identifying dual-property objects that both roll and slide (coins, carrom men, pipes, bottle caps).",
      "Constructing stable towers using flat-faced objects vs round objects."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"90\" cy=\"60\" r=\"28\" fill=\"#3b82f6\"/><rect x=\"180\" y=\"32\" width=\"56\" height=\"56\" fill=\"#10b981\" rx=\"4\"/><rect x=\"300\" y=\"35\" width=\"20\" height=\"50\" fill=\"#f59e0b\" rx=\"2\"/><circle cx=\"390\" cy=\"60\" r=\"24\" fill=\"#8b5cf6\"/><text x=\"90\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Ball (Rolls)</text><text x=\"208\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Box (Slides)</text><text x=\"310\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Eraser</text><text x=\"390\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#5b21b6\" text-anchor=\"middle\">Coin (Both)</text></svg>",
    "cbq": {
      "title": "Meeku Uncle's Guessing Bag",
      "text": "Meeku uncle puts his hand into a mystery cloth bag. He feels an object and says: 'Pointed at one end, flat at the other, but round like a pipe in between. What is it?'",
      "question": "Name the object Meeku uncle is describing. Does this object roll, slide, or do both?",
      "answer": "1. The object is a <strong>pencil</strong> (or crayon/sketch pen).<br>2. When kept on its side, it <strong>rolls</strong> easily. When pushed flat on its base, it <strong>slides</strong>. Thus, it can do <strong>both</strong>.",
      "rubric": "1.5 M for identifying pencil/sketch pen + 1.5 M for explaining both rolling and sliding"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Guess the Shape",
        "q": "In the game 'Guess Its Name', a child says: 'Round all around, has no corners, I can roll it in my hand. Guess what it is!' Give two possible answers.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The object has no corners and is curved on all sides.<br>• Two possible answers are a <strong>ball</strong> and an <strong>orange</strong> (or a marble/lemon).",
        "marks": 2,
        "rubric": [
          {
            "key": "First correct object (e.g. ball/marble)",
            "marks": "1 M"
          },
          {
            "key": "Second correct object (e.g. orange/lemon)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Long vs Round",
        "q": "Look around your school bag. Name two things that are long and two things that are round.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. <strong>Long things:</strong> Pencil, ruler (scale), sketch pen.<br>2. <strong>Round things:</strong> Water bottle cap, round sharpener, coin.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two long items identified",
            "marks": "1 M"
          },
          {
            "key": "Two round items identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Rolls and What Slides",
        "q": "What makes an object roll, and what makes an object slide? Explain with one example of each.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>Roll:</strong> Objects with smooth, curved round surfaces roll when pushed. Example: A football or marble.<br>• <strong>Slide:</strong> Objects with flat surfaces slide along the floor. Example: A notebook, pencil box, or wooden block.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of rolling with example",
            "marks": "1.5 M"
          },
          {
            "key": "Explanation of sliding with example",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Things That Both Roll and Slide",
        "q": "Which of the following things can BOTH roll and slide? (A) Matchbox (B) A 5-rupee coin (C) A glass bangle (D) Carrom coin (E) An apple",
        "ans": "<strong>Step-by-Step Solution:</strong><br>Objects with both flat faces and a curved rim can both roll and slide:<br>• <strong>(B) A 5-rupee coin</strong>: slides on flat face, rolls on edge.<br>• <strong>(D) Carrom coin</strong>: slides across the board, rolls on rim.<br>• A matchbox only slides. An apple only rolls. A glass bangle rolls on edge.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identification of 5-rupee coin",
            "marks": "1 M"
          },
          {
            "key": "Identification of carrom coin",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tower Building",
        "q": "Why can you make a tall tower using matchboxes or wooden blocks, but you cannot make a tower using tennis balls?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. Matchboxes and blocks have <strong>flat surfaces</strong>. One flat surface rests firmly on top of another without wobbling.<br>2. Tennis balls have <strong>curved surfaces</strong> and no flat face. They roll away and cannot support another ball on top.",
        "marks": 2,
        "rubric": [
          {
            "key": "Flat surface stability explained",
            "marks": "1 M"
          },
          {
            "key": "Curved round surface instability explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Coin Tower Challenge",
        "q": "Can you stack 5 one-rupee coins to make a tower? Can you make a 10-rupee coin stand upright on its edge?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Yes</strong>, 5 one-rupee coins can easily be stacked on top of each other because each coin has two flat circular faces.<br>• <strong>Yes</strong>, a thick 10-rupee coin has a flat outer rim and can stand upright on its edge if balanced steadily on a table.",
        "marks": 2,
        "rubric": [
          {
            "key": "Coin stacking explained",
            "marks": "1 M"
          },
          {
            "key": "Edge standing explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT Activity • Park Playground",
        "q": "In a children's playground slide, why do children slide down on their seat instead of rolling down?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The slide is a smooth flat slope.<br>• When a child sits down, their flat bottom and legs make surface contact, causing them to <strong>slide</strong> safely downwards rather than tumble or roll.",
        "marks": 2,
        "rubric": [
          {
            "key": "Flat contact area identified",
            "marks": "1 M"
          },
          {
            "key": "Sliding motion explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Classification Table",
        "q": "Classify the following 6 items into 'Things that roll' and 'Things that slide': Football, Notebook, Orange, Brick, Lemon, Matchbox.",
        "ans": "<strong>Classification:</strong><br>• <strong>Things that roll:</strong> Football, Orange, Lemon.<br>• <strong>Things that slide:</strong> Notebook, Brick, Matchbox.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct rolling items (3)",
            "marks": "1.5 M"
          },
          {
            "key": "Correct sliding items (3)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Thinking • Spinning Coin",
        "q": "When you spin a 2-rupee coin on a tabletop rapidly like a top, what shape does it look like: a circle, a ball (sphere), or a square?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• When a flat round coin spins very fast on the table, its circular perimeter moves in 3 dimensions.<br>• It appears to our eyes like a round 3D <strong>ball (sphere)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identifies ball / sphere appearance",
            "marks": "1 M"
          },
          {
            "key": "Explanation of spinning effect",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practical Reason • Transport Wheels",
        "q": "Why are the wheels of carts, bicycles, buses, and cars always round and never square or rectangular?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. Round wheels have smooth, continuous curved edges that <strong>roll</strong> effortlessly along roads with very little friction.<br>2. Square or rectangular wheels have corners that would bump and dig into the road, preventing smooth travel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rolling property of circle explained",
            "marks": "1 M"
          },
          {
            "key": "Corners causing obstruction explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Exercise • Pipe Roll",
        "q": "Take a sheet of paper. How can you make it roll? How can you make it slide?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>To slide:</strong> Keep the sheet flat on the table and push it across; it slides on its flat surface.<br>• <strong>To roll:</strong> Roll the paper sheet tightly into a cylindrical tube or pipe; now place it on the slope and it rolls freely.",
        "marks": 2,
        "rubric": [
          {
            "key": "Flat sheet sliding method",
            "marks": "1 M"
          },
          {
            "key": "Cylinder rolling method",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Everyday Objects • Kitchen Utensils",
        "q": "Look at a rolling pin (belan) and a cutting board (chakla). Which one rolls and which one slides?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The <strong>rolling pin (belan)</strong> has a cylindrical round body that <strong>rolls</strong> smoothly to flatten dough.<br>• The <strong>chakla (board)</strong> has a flat base that sits firmly or <strong>slides</strong> across the kitchen counter.",
        "marks": 2,
        "rubric": [
          {
            "key": "Belan rolling identified",
            "marks": "1 M"
          },
          {
            "key": "Chakla sliding identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparative Problem • Tower Height",
        "q": "Rohan builds a tower of 6 matchboxes. Priya builds a tower of 8 matchboxes. Whose tower is taller and by how many boxes?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Rohan's tower = 6 boxes.<br>• Priya's tower = 8 boxes.<br>• Since 8 > 6, <strong>Priya's tower</strong> is taller.<br>• Difference = 8 - 6 = <strong>2 matchboxes taller</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Priya identified as taller",
            "marks": "1 M"
          },
          {
            "key": "Difference of 2 boxes calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Concept Check • Onion & Tomato",
        "q": "If an onion and a potato are pushed on a sloping ramp, will they roll or slide? Explain why.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Both an onion and a potato will <strong>roll</strong> down the slope.<br>• <strong>Reason:</strong> They both have rounded, curved surfaces that easily rotate downwards under gravity.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct rolling identification",
            "marks": "1 M"
          },
          {
            "key": "Curved surface rationale",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Construction • Bottle Caps",
        "q": "Can you stack 4 plastic bottle caps to make a mini-tower? Explain how you will place them.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Yes</strong>, you can make a mini-tower.<br>• <strong>Method:</strong> Place the first cap flat on the table with its open rim facing up (or down), and stack each subsequent cap flat upon the previous one. Because the caps have flat surfaces, they will balance securely.",
        "marks": 2,
        "rubric": [
          {
            "key": "Affirmative answer",
            "marks": "1 M"
          },
          {
            "key": "Flat surface placement description",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Properties • Eraser Examination",
        "q": "Examine a regular rectangular eraser. Can you make it roll? What happens if you push it on a desk?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A rectangular eraser has flat rectangular faces and sharp straight edges.<br>• When pushed, it <strong>slides</strong> along the desk.<br>• It does not roll unless forced to tumble corner over corner, because it lacks a curved round surface.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sliding identified",
            "marks": "1 M"
          },
          {
            "key": "Lack of curved surface explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Summary • Key Learnings",
        "q": "Write three things you learned in Chapter 1 about long and round objects.",
        "ans": "<strong>Summary Points:</strong><br>1. Round objects have curved surfaces and roll.<br>2. Flat-faced objects slide and can be stacked to make tall towers.<br>3. Objects with both flat and curved surfaces (like coins, drums, and pipes) can both roll and slide.",
        "marks": 3,
        "rubric": [
          {
            "key": "Round/rolling property",
            "marks": "1 M"
          },
          {
            "key": "Flat/sliding/tower property",
            "marks": "1 M"
          },
          {
            "key": "Dual property of cylinder/coin",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Multiple Choice Question",
        "q": "Which object will roll down the fastest on a gentle ramp? (a) A shoe box (b) A wooden cube (c) A glass marble (d) A flat ruler",
        "ans": "<strong>Correct Answer:</strong> <strong>(c) A glass marble</strong>.<br><strong>Reason:</strong> A glass marble is completely round and smooth, allowing it to roll down rapidly with minimum friction.",
        "marks": 1,
        "rubric": [
          {
            "key": "Correct option (c) with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Spinning Coin",
        "q": "Can you make a 1-rupee coin stand on its edge? What happens when you spin it on a flat table: does it look like a ball?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Yes, with steady fingers, a 1-rupee coin can stand on its flat rim edge.<br>• When spun fast on the table, it spins round and round and <strong>looks like a 3D ball (sphere)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Standing on edge",
            "marks": "1 M"
          },
          {
            "key": "Looking like a ball when spinning",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Game • Rolling Pipes",
        "q": "Take a sheet of drawing paper and roll it into a round pipe. Can you roll this paper pipe across the floor? Can you slide it?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Yes, because of its curved outer surface, the paper pipe <strong>rolls easily across the floor</strong>.<br>• If you push it upright on its flat open circular edge, it can also <strong>slide</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rolling on curved surface",
            "marks": "1 M"
          },
          {
            "key": "Sliding on circular edge",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg2",
    "num": 2,
    "unit": "Unit 2: Number Sense & Patterns",
    "title": "Counting in Groups",
    "subtitle": "Look and Guess Numbers, Pairs, and More or Less",
    "concepts": [
      "Grouping objects in twos, threes, and fours to count faster without counting one by one.",
      "Understanding pairs (shoes, earrings, socks, gloves).",
      "Estimating quantities visually (more than / less than benchmarks).",
      "Ordinal numbers (1st, 2nd, 3rd, 4th, 5th, 6th) through the classic Turnip story."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf4ff\" rx=\"10\"/><circle cx=\"60\" cy=\"50\" r=\"16\" fill=\"#ec4899\"/><circle cx=\"100\" cy=\"50\" r=\"16\" fill=\"#ec4899\"/><circle cx=\"80\" cy=\"80\" r=\"16\" fill=\"#ec4899\"/><circle cx=\"180\" cy=\"50\" r=\"16\" fill=\"#a855f7\"/><circle cx=\"220\" cy=\"50\" r=\"16\" fill=\"#a855f7\"/><circle cx=\"200\" cy=\"80\" r=\"16\" fill=\"#a855f7\"/><circle cx=\"300\" cy=\"50\" r=\"16\" fill=\"#3b82f6\"/><circle cx=\"340\" cy=\"50\" r=\"16\" fill=\"#3b82f6\"/><circle cx=\"320\" cy=\"80\" r=\"16\" fill=\"#3b82f6\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#701a75\" text-anchor=\"middle\">3 Groups of 3 Spoons = 3 × 3 = 9 Spoons</text></svg>",
    "cbq": {
      "title": "The Big Turnip Story (Ordinal Numbers)",
      "text": "An old man planted a turnip seed. It grew huge! Grandfather pulled first. Then Grandmother held him. Then Granddaughter held Grandmother. Then the pet dog held Granddaughter. Then the cat held the dog. Finally, the little mouse held the cat. With one mighty tug, POP! Up came the big turnip!",
      "question": "How many actors pulled the turnip in total? Who was at the 3rd position, and who was at the 6th position?",
      "answer": "1. Total actors = 6 (Old man, Grandmother, Granddaughter, Dog, Cat, Mouse).<br>2. The actor at the <strong>3rd position</strong> was the <strong>Granddaughter</strong>.<br>3. The actor at the <strong>6th position</strong> was the <strong>Mouse</strong>.",
      "rubric": "1 M for total count (6) + 1 M for 3rd position + 1 M for 6th position"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Guess the Cups",
        "q": "Look at cups placed in a pyramid: 1 cup at the top row, 2 cups in the middle row, and 3 cups in the bottom row. Can you guess how many cups without counting one by one?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Top row = 1 cup<br>• Middle row = 2 cups (1 + 2 = 3 cups)<br>• Bottom row = 3 cups<br>• Total cups = 3 + 3 = <strong>6 cups</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Row grouping method shown",
            "marks": "1 M"
          },
          {
            "key": "Total 6 cups calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Pairs of Shoes",
        "q": "There are 3 lines of shoes on a rack. Each line has 3 pairs of shoes. How many pairs of shoes are there? How many individual shoes in total?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>1. Number of pairs = 3 rows × 3 pairs = <strong>9 pairs</strong>.<br>2. Since each pair has 2 shoes: 9 × 2 = <strong>18 individual shoes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Number of pairs (9)",
            "marks": "1 M"
          },
          {
            "key": "Total individual shoes (18)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Groups of Spoons",
        "q": "Look at 4 groups of spoons. Each group has 6 spoons. Guess the total number of spoons.",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Number of groups = 4<br>• Spoons in each group = 6<br>• Total spoons = 6 + 6 + 6 + 6 = <strong>24 spoons</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition or multiplication shown",
            "marks": "1 M"
          },
          {
            "key": "Correct total 24 spoons",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Guessing • More or Less?",
        "q": "Tick (More than / Less than) for each of the following:<br>(a) Number of teeth in your mouth: More than 40 OR Less than 40?<br>(b) Number of seeds in an orange: More than 50 OR Less than 50?",
        "ans": "<strong>Answers:</strong><br>(a) Number of teeth in a 7-year-old child's mouth is about 20: <strong>Less than 40</strong>.<br>(b) An orange typically has 8 to 15 seeds: <strong>Less than 50</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Teeth: Less than 40",
            "marks": "1 M"
          },
          {
            "key": "Orange seeds: Less than 50",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Guessing • More or Less Part 2",
        "q": "Circle the correct choice:<br>(a) Number of matchsticks in a standard matchbox: More than 30 OR Less than 30?<br>(b) Number of pencils in your whole classroom: More than 45 OR Less than 45?",
        "ans": "<strong>Answers:</strong><br>(a) A matchbox contains around 40 to 50 sticks: <strong>More than 30</strong>.<br>(b) In a class of 30 students, if each child has 2 pencils, total = 60 pencils: <strong>More than 45</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Matchbox: More than 30",
            "marks": "1 M"
          },
          {
            "key": "Pencils: More than 45",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Physical Activity • Hop Till You Drop",
        "q": "Aman hopped on his right foot 7 times without falling. Ritu hopped on her left foot 9 times without falling. Who hopped more times, and by how many hops?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Aman's hops = 7<br>• Ritu's hops = 9<br>• Since 9 > 7, <strong>Ritu</strong> hopped more times.<br>• Difference = 9 - 7 = <strong>2 hops more</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ritu identified",
            "marks": "1 M"
          },
          {
            "key": "Difference of 2 hops calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Join the Dots • Bhurru Dog Puzzle",
        "q": "In the NCERT puzzle, Bhurru dog is hungry and joins dots from number 21 to 52 in order. What number comes immediately after 38? What number comes immediately before 50?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Successor (number after) 38 = 38 + 1 = <strong>39</strong>.<br>• Predecessor (number before) 50 = 50 - 1 = <strong>49</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Number after 38: 39",
            "marks": "1 M"
          },
          {
            "key": "Number before 50: 49",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Application • The Pulling Team",
        "q": "In the Big Turnip story, how many pulled before the cat came? Which position was the cat in?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Before the cat came, 4 characters were pulling (Old man, Grandmother, Granddaughter, and Dog).<br>• The cat came in at the <strong>5th position</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 characters before cat",
            "marks": "1 M"
          },
          {
            "key": "Cat in 5th position",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Analysis • Who Helped Most?",
        "q": "Why was the tiny mouse important even though it was the smallest character pulling the turnip?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Even though the other five characters pulled with great strength, the turnip did not come out.<br>• The mouse provided the exact extra pulling force needed to overcome the soil resistance. Every small contribution matters in teamwork!",
        "marks": 2,
        "rubric": [
          {
            "key": "Extra team force explained",
            "marks": "1 M"
          },
          {
            "key": "Teamwork value highlighted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grouping by Fives • Star Stickers",
        "q": "Pooja has 5 sheets of star stickers. Each sheet has 5 stars. How many star stickers does Pooja have in all?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Number of sheets = 5<br>• Stars on each sheet = 5<br>• Total stars = 5 + 5 + 5 + 5 + 5 = <strong>25 stars</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 5+5+5+5+5 shown",
            "marks": "1 M"
          },
          {
            "key": "Total 25 stars correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Earring Pairs",
        "q": "Anu's mother has 8 pairs of gold earrings in her jewellery box. How many single earrings are there altogether?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 1 pair = 2 earrings<br>• 8 pairs = 8 × 2 = <strong>16 earrings</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "1 pair = 2 earrings recognized",
            "marks": "1 M"
          },
          {
            "key": "Total 16 earrings calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Estimation Check • Marbles in a Jar",
        "q": "Kabir estimates there are 30 marbles in a glass jar. When counted, there are 27 marbles. Was Kabir's guess close? How far off was his guess?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Kabir's guess = 30<br>• Actual count = 27<br>• Difference = 30 - 27 = <strong>3 marbles</strong>.<br>• Yes, Kabir's estimation was very close (only off by 3).",
        "marks": 2,
        "rubric": [
          {
            "key": "Difference of 3 calculated",
            "marks": "1 M"
          },
          {
            "key": "Valid estimation conclusion",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grouping by Tens • Bangle Bundles",
        "q": "A bangle seller ties bangles into bundles of 10. If he has 6 bundles and 4 single bangles, how many bangles does he have in all?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 6 bundles of 10 = 6 × 10 = 60 bangles<br>• 4 single bangles = 4 bangles<br>• Total bangles = 60 + 4 = <strong>64 bangles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 bundles = 60 bangles",
            "marks": "1 M"
          },
          {
            "key": "Total 64 bangles calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ordinal Position • Sports Day Race",
        "q": "In a 50-metre race: Yash crossed the ribbon first, Tina second, Aryan third, and Deepa fourth. Who won the bronze medal (3rd place)?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• 1st place (Gold) = Yash<br>• 2nd place (Silver) = Tina<br>• 3rd place (Bronze) = <strong>Aryan</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identifies Aryan as 3rd place",
            "marks": "1 M"
          },
          {
            "key": "Associates 3rd with Bronze medal",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Mental Math",
        "q": "Count by 2s up to 16: 2, 4, 6, _, _, _, _, 16.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>Adding 2 at each step:<br>2, 4, 6, <strong>8</strong>, <strong>10</strong>, <strong>12</strong>, <strong>14</strong>, 16.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 missing numbers correct (8, 10, 12, 14)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Visual Comparison • Group Density",
        "q": "Group A has 4 plates with 2 samosas on each plate. Group B has 2 plates with 5 samosas on each plate. Which group has more samosas?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Group A = 4 plates × 2 samosas = 8 samosas.<br>• Group B = 2 plates × 5 samosas = 10 samosas.<br>• Since 10 > 8, <strong>Group B</strong> has more samosas (by 2 samosas).",
        "marks": 2,
        "rubric": [
          {
            "key": "Totals 8 and 10 calculated",
            "marks": "1 M"
          },
          {
            "key": "Group B identified as having more",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Conceptual Understanding • Why Group?",
        "q": "Why is counting in groups faster than counting one item at a time?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. Grouping allows us to count chunks (such as 2, 4, 6, 8 or 10, 20, 30) instead of making individual counts.<br>2. It reduces the chance of skipping items or double-counting, saving time and improving accuracy.",
        "marks": 2,
        "rubric": [
          {
            "key": "Chunk counting speed explained",
            "marks": "1 M"
          },
          {
            "key": "Error reduction explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A pair of socks always contains 3 socks.<br>(b) 5 groups of 2 equals 10.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. A pair always contains exactly 2 socks.<br>(b) <strong>True</strong>. 5 × 2 = 10.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Guessing Cups",
        "q": "Look at the cups arranged in a triangle: 1 on top, 2 below, and 3 at the bottom. Guess how many cups there are in all without counting one by one.",
        "ans": "<strong>Answer:</strong><br>• 1 + 2 + 3 = <strong>6 cups in total</strong>.<br>• Grouping: (1 + 2 = 3) and (3 + 3 = 6).",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition of layers 1+2+3",
            "marks": "1 M"
          },
          {
            "key": "Final count: 6 cups",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Hop Till You Drop",
        "q": "In the game 'Hop Till You Drop', Rohit hopped 8 times on his right foot before falling. On his left foot, he hopped 6 times. Which foot had more hops and by how many?",
        "ans": "<strong>Calculation:</strong><br>• Right foot hops = 8<br>• Left foot hops = 6<br>• Right foot had more hops by 8 - 6 = <strong>2 hops</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Right foot identified",
            "marks": "1 M"
          },
          {
            "key": "Difference = 2 hops",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg3",
    "num": 3,
    "unit": "Unit 3: Measurement & Mass",
    "title": "How Much Can You Carry?",
    "subtitle": "Heavier and Lighter, Pan Balance, and Load Capacity",
    "concepts": [
      "Comparing weights of objects using words: 'heavier than' and 'lighter than'.",
      "Understanding balance scales: the heavier side tilts downwards, the lighter side goes up.",
      "The Clever Donkey story: why salt becomes lighter in water while cotton becomes heavier.",
      "Estimating what different animals and children can carry realistically."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><line x1=\"150\" y1=\"50\" x2=\"350\" y2=\"70\" stroke=\"#713f12\" stroke-width=\"6\"/><polygon points=\"250,55 240,90 260,90\" fill=\"#a16207\"/><circle cx=\"150\" cy=\"50\" r=\"14\" fill=\"#3b82f6\"/><rect x=\"330\" y=\"58\" width=\"36\" height=\"24\" fill=\"#ef4444\" rx=\"3\"/><text x=\"150\" y=\"28\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Lighter (Up)</text><text x=\"350\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Heavier (Down)</text></svg>",
    "cbq": {
      "title": "The Clever Donkey's River Trick",
      "text": "Sandesh has a donkey that carries sacks of salt to market. One day while crossing a river, the donkey slipped and fell into the water. When it got up, the sack felt very light! The next day, the sly donkey intentionally sat in the river. But on the third day, Sandesh put sacks of cotton cloth instead of salt on its back.",
      "question": "Why did the sack feel light when filled with salt? What happened to the cotton sack when the donkey sat in the river?",
      "answer": "1. The salt sack felt light because <strong>salt dissolves in water</strong> and washed away into the river.<br>2. When the donkey sat in the river with the cotton sack, the <strong>cotton absorbed lots of water</strong>, making the sack extremely heavy and teaching the donkey a lesson!",
      "rubric": "1.5 M for salt dissolving explanation + 1.5 M for cotton absorbing water explanation"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Pan Balance",
        "q": "Look at a two-pan balance scale. One pan has a watermelon and the other pan has an apple. Which pan will go down, and why?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The <strong>watermelon</strong> is much heavier than the apple.<br>• On a balance scale, the heavier side tilts <strong>downward</strong> while the lighter side rises upward.<br>• Therefore, the pan with the watermelon will go down.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identifies watermelon pan goes down",
            "marks": "1 M"
          },
          {
            "key": "Heavier side pushes pan down explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Heavier vs Lighter",
        "q": "Which is heavier: (a) A cricket ball or a football? (b) A school bag with books or an empty pencil box?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>(a) A <strong>cricket ball</strong> (hard leather/cork) is heavier than an air-filled hollow football.<br>(b) A <strong>school bag full of books</strong> is much heavier than an empty pencil box.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Cricket ball identified",
            "marks": "1 M"
          },
          {
            "key": "(b) School bag identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Who Can Carry What?",
        "q": "Simran wants to help her father carry grocery items from the store to the kitchen. Match each item to who can carry it (Simran, her mother, or her father):<br>(1) 1 kg ghee (2) 5 kg atta (3) 2 kg sugar",
        "ans": "<strong>Step-by-Step Matching:</strong><br>• <strong>Simran (Class 2 child):</strong> 1 kg ghee packet.<br>• <strong>Mother:</strong> 2 kg sugar packet.<br>• <strong>Father:</strong> 5 kg atta sack.",
        "marks": 3,
        "rubric": [
          {
            "key": "1 kg ghee -> Simran",
            "marks": "1 M"
          },
          {
            "key": "2 kg sugar -> Mother",
            "marks": "1 M"
          },
          {
            "key": "5 kg atta -> Father",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Carrying Capacity",
        "q": "Match the animal with the object it can carry in the NCERT exercise:<br>(a) Ant (b) Bird (c) Elephant (d) Dog<br>Objects: (1) A big wooden log (2) A tiny grain of sugar (3) A small leaf/twig (4) A rubber ball",
        "ans": "<strong>Matching:</strong><br>• <strong>(a) Ant:</strong> (2) A tiny grain of sugar.<br>• <strong>(b) Bird:</strong> (3) A small leaf/twig in its beak.<br>• <strong>(c) Elephant:</strong> (1) A big wooden log with its trunk.<br>• <strong>(d) Dog:</strong> (4) A rubber ball in its mouth.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 animals correctly matched",
            "marks": "2 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Balance Comparison",
        "q": "A pan balance has two shoes on the left pan and one shoe on the right pan. Which side is lighter? How can you make both sides equal?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The <strong>right pan</strong> (with 1 shoe) is lighter and will rise up.<br>• To make both sides balance equally, add <strong>one more shoe</strong> to the right pan so that both pans have 2 shoes.",
        "marks": 2,
        "rubric": [
          {
            "key": "Right pan identified as lighter",
            "marks": "1 M"
          },
          {
            "key": "Adding 1 shoe to right pan",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practical Reasoning • Empty vs Full",
        "q": "Why is a bucket full of water heavier than an empty bucket?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• An empty plastic bucket has only the weight of its thin plastic walls.<br>• When filled with water, the weight of several litres of water is added to the bucket, making it much heavier.",
        "marks": 2,
        "rubric": [
          {
            "key": "Weight of water addition explained",
            "marks": "1 M"
          },
          {
            "key": "Clear physical reasoning",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "See-Saw Science",
        "q": "Raju wants to ride a see-saw, but his friend Mohan sits on the other end. Raju's side goes up into the air and stays there. Who is heavier: Raju or Mohan? How can Rani help Raju?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Since Mohan's side went down, <strong>Mohan is heavier</strong> than Raju.<br>• To balance the see-saw, Rani can sit on <strong>Raju's side</strong>. Their combined weight will bring Raju's side down and balance Mohan.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mohan identified as heavier",
            "marks": "1 M"
          },
          {
            "key": "Rani sitting on Raju's side explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ordering by Weight",
        "q": "Arrange these 4 objects from the LIGHTEST to the HEAVIEST: Leaf, School Bag, Feather, Bicycle.",
        "ans": "<strong>Arrangement from Lightest to Heaviest:</strong><br>1. <strong>Feather</strong> (lightest)<br>2. <strong>Leaf</strong><br>3. <strong>School Bag</strong><br>4. <strong>Bicycle</strong> (heaviest).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct order from feather to bicycle",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Everyday Comparison • Fruit Stall",
        "q": "At a fruit stall, a vendor balances 1 big pineapple with 3 identical apples. Which is heavier: 1 pineapple or 1 apple?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• 1 pineapple balances 3 apples.<br>• Therefore, <strong>1 pineapple</strong> is much heavier than 1 single apple (it weighs 3 times as much as 1 apple).",
        "marks": 2,
        "rubric": [
          {
            "key": "Pineapple identified as heavier",
            "marks": "1 M"
          },
          {
            "key": "Comparison with 3 apples stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Real-Life Carrying • School Bag Health",
        "q": "Why should young children not carry a school bag that is too heavy?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. Carrying an excessively heavy school bag strains a child's delicate spine, back muscles, and shoulders.<br>2. It can cause poor posture, tiredness, and back pain. Students should only carry books required for the day's timetable.",
        "marks": 2,
        "rubric": [
          {
            "key": "Spine / muscle strain explained",
            "marks": "1 M"
          },
          {
            "key": "Health advice regarding timetable",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Everyday Kitchen • Measuring Spoons",
        "q": "Which is lighter: A wooden cooking spoon or a steel pressure cooker?",
        "ans": "<strong>Answer:</strong><br>• The <strong>wooden cooking spoon</strong> is much lighter.<br>• A steel pressure cooker is made of thick metal and is far heavier.",
        "marks": 1,
        "rubric": [
          {
            "key": "Wooden cooking spoon correctly identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Volume vs Weight • Cotton vs Iron",
        "q": "A large pillow filled with cotton takes up more space than a small iron nail. But which one is heavier: the nail or the pillow?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Although cotton is light, a <strong>large pillow</strong> contains several hundred grams of cotton.<br>• A single small iron nail weighs only a few grams.<br>• Therefore, the <strong>pillow is heavier</strong> than the small iron nail.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pillow identified as heavier",
            "marks": "1 M"
          },
          {
            "key": "Explanation distinguishing size and mass",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Observation Problem • Gas Balloon",
        "q": "When you let go of a gas-filled balloon, it flies up to the ceiling. Is the gas balloon heavier or lighter than the surrounding air?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The gas inside the balloon (helium) is <strong>lighter than the surrounding air</strong>.<br>• Because it is lighter, buoyant force pushes it upwards towards the ceiling.",
        "marks": 2,
        "rubric": [
          {
            "key": "Lighter than air identified",
            "marks": "1 M"
          },
          {
            "key": "Upward movement explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Two-Pan Balance Deduction",
        "q": "If Pan A has 2 mangoes and Pan B has 2 mangoes of the exact same size, what will happen to the balance beam?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Since both pans have identical objects of equal weight, neither pan goes down.<br>• The balance beam remains <strong>horizontal (perfectly balanced / level)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Horizontal / balanced state stated",
            "marks": "1 M"
          },
          {
            "key": "Equal weight rationale provided",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practical Application • Self Weight",
        "q": "Can a 7-year-old child carry their own bicycle up 3 flights of stairs? Why or why not?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>No</strong>, a 7-year-old child should not try to carry a bicycle up stairs.<br>• <strong>Reason:</strong> A metal bicycle is too heavy, bulky, and difficult to grip safely for a small child, and could cause them to fall.",
        "marks": 2,
        "rubric": [
          {
            "key": "Negative response (No)",
            "marks": "1 M"
          },
          {
            "key": "Weight and safety reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Weight Comparison",
        "q": "A packet of salt weighs 1 kg. A bag of rice weighs 5 kg. How many packets of salt are needed to equal the weight of 1 bag of rice?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Weight of 1 rice bag = 5 kg<br>• Weight of 1 salt packet = 1 kg<br>• Number of packets needed = 5 ÷ 1 = <strong>5 packets of salt</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Division 5 ÷ 1 shown",
            "marks": "1 M"
          },
          {
            "key": "5 packets answer correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Concept Check • Fill in Blanks",
        "q": "Fill in the blanks with 'heavier' or 'lighter':<br>(a) A dry sponge is _______ than a wet sponge.<br>(b) An elephant is _______ than a deer.",
        "ans": "<strong>Answers:</strong><br>(a) A dry sponge is <strong>lighter</strong> than a wet sponge (water adds weight).<br>(b) An elephant is <strong>heavier</strong> than a deer.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) lighter",
            "marks": "1 M"
          },
          {
            "key": "(b) heavier",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Summary Reflection",
        "q": "What have you learned about measuring weight in Chapter 3?",
        "ans": "<strong>Key Learnings:</strong><br>1. Heavy things push a balance pan down, while lighter things rise.<br>2. Some materials change weight when wet (like cotton absorbing water or salt dissolving).<br>3. People and animals can only carry loads suitable for their body strength.",
        "marks": 3,
        "rubric": [
          {
            "key": "Balance scale rule",
            "marks": "1 M"
          },
          {
            "key": "Wet material property",
            "marks": "1 M"
          },
          {
            "key": "Appropriate load capacity",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Story • The Clever Donkey",
        "q": "Why did the donkey intentionally tumble into the stream with the heavy salt sacks, and what happened when his master loaded cotton sacks the next day?",
        "ans": "<strong>Answer:</strong><br>1. Salt dissolves in water, so the <strong>salt sacks became very light</strong> after falling into the stream.<br>2. When cotton fell into the stream, it <strong>soaked up water and became twice as heavy</strong>, teaching the lazy donkey a lesson.",
        "marks": 3,
        "rubric": [
          {
            "key": "Salt dissolved/became light",
            "marks": "1.5 M"
          },
          {
            "key": "Cotton soaked water/became heavier",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Seesaw Balance",
        "q": "On a playground seesaw, an elephant sits on one side and a monkey sits on the other. Which side will go down to the ground, and why?",
        "ans": "<strong>Answer:</strong><br>• The <strong>elephant's side will go down to the ground</strong> because an elephant is much heavier than a monkey.",
        "marks": 2,
        "rubric": [
          {
            "key": "Elephant side goes down",
            "marks": "1 M"
          },
          {
            "key": "Heavier weight explained",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg4",
    "num": 4,
    "unit": "Unit 4: Place Value & Grouping",
    "title": "Counting in Tens",
    "subtitle": "Chickens and Fox, Garlands of 10, Packets of Pencils and Bindis",
    "concepts": [
      "Counting large collections efficiently by grouping into tens and loose units (ones).",
      "Tikloo farmer's chickens: counting baskets of 10 chickens and finding how many the fox ate.",
      "Malti's flower garlands: making garlands of 10 flowers each and finding total flowers.",
      "Kanak's bindi collection: counting sheets of 10 bindis in artistic patterns (3+2+5, 4+3+3)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><rect x=\"40\" y=\"30\" width=\"70\" height=\"45\" fill=\"#059669\" rx=\"5\"/><text x=\"75\" y=\"58\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">10 Pencils</text><rect x=\"130\" y=\"30\" width=\"70\" height=\"45\" fill=\"#059669\" rx=\"5\"/><text x=\"165\" y=\"58\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">10 Pencils</text><circle cx=\"230\" cy=\"52\" r=\"8\" fill=\"#10b981\"/><circle cx=\"250\" cy=\"52\" r=\"8\" fill=\"#10b981\"/><circle cx=\"270\" cy=\"52\" r=\"8\" fill=\"#10b981\"/><circle cx=\"290\" cy=\"52\" r=\"8\" fill=\"#10b981\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">2 Packets of 10 (20) + 4 Loose = 24 Pencils</text></svg>",
    "cbq": {
      "title": "Tikloo Farmer and Clever Fox Problem",
      "text": "Tikloo farmer has many chickens on his farm. A clever fox started stealing and eating chickens. Tikloo decided to put 10 chickens in each basket every morning. In the morning, there were 5 baskets of 10 chickens and 4 chickens outside. In the evening, there were 4 baskets of 10 chickens and 3 chickens outside.",
      "question": "How many chickens were there in the morning? How many in the evening? How many chickens did the clever fox eat during the day?",
      "answer": "1. <strong>Morning count:</strong> 5 baskets of 10 = 50, plus 4 outside = 50 + 4 = <strong>54 chickens</strong>.<br>2. <strong>Evening count:</strong> 4 baskets of 10 = 40, plus 3 outside = 40 + 3 = <strong>43 chickens</strong>.<br>3. <strong>Chickens eaten by fox:</strong> 54 - 43 = <strong>11 chickens</strong>.",
      "rubric": "1 M for morning count (54) + 1 M for evening count (43) + 1 M for difference eaten (11)"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Garlands of 10",
        "q": "Malti has to make flower garlands for a wedding. She strings 10 marigold flowers in each garland.<br>(a) In picture 1, there are 8 loose flowers and 5 garlands. How many flowers in all?<br>(b) In picture 2, there are 6 garlands and 7 loose flowers. How many flowers in all?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>(a) 5 garlands of 10 = 50 flowers. Plus 8 loose flowers = 50 + 8 = <strong>58 flowers</strong>.<br>(b) 6 garlands of 10 = 60 flowers. Plus 7 loose flowers = 60 + 7 = <strong>67 flowers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 58 flowers calculated",
            "marks": "1 M"
          },
          {
            "key": "(b) 67 flowers calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Making Garlands",
        "q": "If you have 35 flowers, how many garlands of 10 flowers each can you make? How many flowers will be left loose?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In 35, there are 3 tens and 5 ones.<br>• Number of garlands of 10 = <strong>3 garlands</strong>.<br>• Loose flowers remaining = <strong>5 flowers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 garlands of 10 identified",
            "marks": "1 M"
          },
          {
            "key": "5 loose flowers remaining",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Packets of Pencils",
        "q": "Look at the pencil boxes. There are 6 packets of 10 pencils each, and 4 loose pencils outside.<br>(a) How many packets of 10 are there?<br>(b) How many pencils outside the packets?<br>(c) How many total pencils are there?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>(a) Number of packets of 10 = <strong>6 packets</strong>.<br>(b) Pencils outside = <strong>4 pencils</strong>.<br>(c) Total pencils = 60 + 4 = <strong>64 pencils</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) 6 packets",
            "marks": "1 M"
          },
          {
            "key": "(b) 4 loose",
            "marks": "1 M"
          },
          {
            "key": "(c) 64 total",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Kanak's Bindis",
        "q": "Kanak loves collecting bindis. She has 7 packets of bindis. Each packet contains 10 bindis arranged in groups of 3 + 2 + 5.<br>(a) How many packets does Kanak have?<br>(b) How many bindis are there in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>(a) Kanak has <strong>7 packets</strong>.<br>(b) Total bindis = 7 packets × 10 bindis = <strong>70 bindis</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 7 packets identified",
            "marks": "1 M"
          },
          {
            "key": "(b) 70 total bindis calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Arrangement • Bindi Patterns",
        "q": "Draw or describe 10 bindis in a different pattern than 3 + 2 + 5. Give two different ways to group 10 bindis.",
        "ans": "<strong>Step-by-Step Groupings:</strong><br>1. <strong>Way 1:</strong> 4 + 3 + 3 = 10 (4 bindis in top row, 3 in middle, 3 in bottom row).<br>2. <strong>Way 2:</strong> 5 + 5 = 10 (two equal rows of 5 bindis each).",
        "marks": 2,
        "rubric": [
          {
            "key": "First grouping of 10 (e.g. 4+3+3)",
            "marks": "1 M"
          },
          {
            "key": "Second grouping of 10 (e.g. 5+5)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tikloo Farmer Morning Check",
        "q": "Tikloo counted his chickens on Monday morning. He filled 3 baskets of 10 chickens and had 8 loose chickens. Write the total number in tens and ones format.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Tens = 3 (30 chickens)<br>• Ones = 8 (8 chickens)<br>• Total chickens = 30 + 8 = <strong>38 chickens</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tens and ones split: 3 tens + 8 ones",
            "marks": "1 M"
          },
          {
            "key": "Total 38 chickens",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Place Value Drill • Number Building",
        "q": "Write the number formed by:<br>(a) 4 tens and 7 ones = _______<br>(b) 8 tens and 2 ones = _______<br>(c) 9 tens and 0 ones = _______",
        "ans": "<strong>Answers:</strong><br>(a) 4 tens (40) + 7 ones (7) = <strong>47</strong><br>(b) 8 tens (80) + 2 ones (2) = <strong>82</strong><br>(c) 9 tens (90) + 0 ones (0) = <strong>90</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) 47",
            "marks": "1 M"
          },
          {
            "key": "(b) 82",
            "marks": "1 M"
          },
          {
            "key": "(c) 90",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Decomposition Drill • Tens and Ones",
        "q": "Break each number into Tens and Ones:<br>(a) 26 = ___ tens + ___ ones<br>(b) 73 = ___ tens + ___ ones<br>(c) 49 = ___ tens + ___ ones",
        "ans": "<strong>Answers:</strong><br>(a) 26 = <strong>2 tens</strong> + <strong>6 ones</strong><br>(b) 73 = <strong>7 tens</strong> + <strong>3 ones</strong><br>(c) 49 = <strong>4 tens</strong> + <strong>9 ones</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) 2 tens, 6 ones",
            "marks": "1 M"
          },
          {
            "key": "(b) 7 tens, 3 ones",
            "marks": "1 M"
          },
          {
            "key": "(c) 4 tens, 9 ones",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Counting Bundles • Matchsticks",
        "q": "A matchstick bundle contains 10 sticks. If Rohan makes 4 bundles and has 9 loose sticks, how many sticks does he have? How many more sticks does he need to make a 5th bundle?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. 4 bundles of 10 = 40. Plus 9 loose = 40 + 9 = <strong>49 sticks</strong>.<br>2. To make a bundle of 10, he needs: 10 - 9 = <strong>1 more stick</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Total 49 sticks calculated",
            "marks": "1 M"
          },
          {
            "key": "1 more stick needed for 5th bundle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Sweet Box",
        "q": "A baker puts 10 laddoos in every box. A customer buys 5 boxes and 6 loose laddoos. How many laddoos did the customer buy in total?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 5 boxes of 10 laddoos = 5 × 10 = 50 laddoos.<br>• 6 loose laddoos = 6 laddoos.<br>• Total laddoos = 50 + 6 = <strong>56 laddoos</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 boxes = 50 laddoos shown",
            "marks": "1 M"
          },
          {
            "key": "Total 56 laddoos calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparative Problem • Bindi Collection",
        "q": "Sita has 4 packets of 10 bindis. Geeta has 3 packets of 10 bindis and 8 loose bindis. Who has more bindis and by how many?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Sita's bindis = 4 × 10 = 40 bindis.<br>• Geeta's bindis = (3 × 10) + 8 = 30 + 8 = 38 bindis.<br>• Since 40 > 38, <strong>Sita has more bindis</strong>.<br>• Difference = 40 - 38 = <strong>2 bindis more</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Totals 40 and 38 calculated",
            "marks": "1 M"
          },
          {
            "key": "Sita identified with difference 2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tens Counting Skip Sequence",
        "q": "Fill in the missing numbers counting by tens: 10, 20, 30, ___, 50, ___, 70, ___, 90, 100.",
        "ans": "<strong>Solution:</strong><br>Adding 10 at each step:<br>10, 20, 30, <strong>40</strong>, 50, <strong>60</strong>, 70, <strong>80</strong>, 90, 100.",
        "marks": 3,
        "rubric": [
          {
            "key": "Missing numbers 40, 60, 80 filled correctly",
            "marks": "3 M (1 M each)"
          }
        ]
      },
      {
        "category": "Visual Problem • Crayon Packets",
        "q": "A teacher has 82 crayons. How many full boxes of 10 crayons can she make? How many loose crayons will remain on her desk?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In 82, the tens digit is 8 and the ones digit is 2.<br>• She can make <strong>8 full boxes</strong> of 10 crayons.<br>• <strong>2 loose crayons</strong> will remain.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 full boxes identified",
            "marks": "1 M"
          },
          {
            "key": "2 loose crayons identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money Connection • 10-Rupee Coins",
        "q": "Dinesh wants to buy a toy car costing ₹50. How many 10-rupee coins must he give to the shopkeeper?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Cost of toy car = ₹50.<br>• Value of 1 coin = ₹10.<br>• Number of ₹10 coins needed = 50 ÷ 10 = <strong>5 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "50 ÷ 10 shown",
            "marks": "1 M"
          },
          {
            "key": "5 coins answer correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Flower Garland Word Problem",
        "q": "Rahul has 72 jasmine flowers. He wants to make garlands of 10 flowers each. How many flowers does he need to add so that he can make 8 complete garlands?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Flowers needed for 8 complete garlands = 8 × 10 = 80 flowers.<br>• Flowers Rahul has = 72 flowers.<br>• Extra flowers needed = 80 - 72 = <strong>8 more flowers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Target 80 flowers calculated",
            "marks": "1 M"
          },
          {
            "key": "Difference 8 flowers calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) In the number 75, the digit 7 represents 7 ones.<br>(b) 10 packets of 10 bindis make 100 bindis.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. The digit 7 is in the tens place and represents 7 tens (70).<br>(b) <strong>True</strong>. 10 × 10 = 100.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with explanation",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "Why is 10 considered a very special number in our numbering system?",
        "ans": "<strong>Explanation:</strong><br>• Our number system is based on groups of 10 (base-10 system).<br>• Whenever we reach 10 ones, they combine to form 1 ten. Whenever we reach 10 tens, they combine to form 1 hundred (100). This allows us to write any large number easily using place values.",
        "marks": 2,
        "rubric": [
          {
            "key": "Base-10 grouping explained",
            "marks": "1 M"
          },
          {
            "key": "Transition from ones to tens to hundreds",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "Which is greater: 6 tens and 3 ones OR 3 tens and 6 ones? Explain by calculating both values.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 tens and 3 ones = 60 + 3 = 63.<br>• 3 tens and 6 ones = 30 + 6 = 36.<br>• Since 63 > 36, <strong>6 tens and 3 ones (63) is greater</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Values 63 and 36 calculated",
            "marks": "1 M"
          },
          {
            "key": "63 identified as greater",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Story • Chickens and Clever Fox",
        "q": "Tiku farmer keeps 10 chickens in each bamboo basket. If she fills 5 baskets and 4 chickens are outside running on the grass, how many chickens are there in total?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 5 baskets of 10 = 5 × 10 = 50 chickens.<br>• Chickens outside = 4.<br>• Total chickens = 50 + 4 = <strong>54 chickens</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 tens = 50",
            "marks": "1 M"
          },
          {
            "key": "Total = 54 chickens",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Bindi Packets",
        "q": "Shalu has 7 packets of bindis. Each packet contains 10 bindis. How many bindis does Shalu have in all?",
        "ans": "<strong>Calculation:</strong><br>• Number of packets = 7<br>• Bindis per packet = 10<br>• Total bindis = 7 × 10 = <strong>70 bindis</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 × 10 multiplication",
            "marks": "1 M"
          },
          {
            "key": "70 bindis total",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg5",
    "num": 5,
    "unit": "Unit 5: Patterns & Sequences",
    "title": "Patterns",
    "subtitle": "Border Patterns, Tile Shapes, Number Patterns & Secret Messages",
    "concepts": [
      "Identifying repeating units in border patterns on dupattas, sarees, and iron grills.",
      "Tessellation and tiling: shapes that tile a floor without leaving any gaps.",
      "Number patterns: skip counting by 2s, 3s, 5s, 10s, and finding missing terms.",
      "Decoding secret messages written with alternating letters and numbers."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"10\"/><circle cx=\"50\" cy=\"50\" r=\"16\" fill=\"#ef4444\"/><rect x=\"80\" y=\"34\" width=\"32\" height=\"32\" fill=\"#3b82f6\" rx=\"3\"/><circle cx=\"140\" cy=\"50\" r=\"16\" fill=\"#ef4444\"/><rect x=\"170\" y=\"34\" width=\"32\" height=\"32\" fill=\"#3b82f6\" rx=\"3\"/><circle cx=\"230\" cy=\"50\" r=\"16\" fill=\"#ef4444\"/><rect x=\"260\" y=\"34\" width=\"32\" height=\"32\" fill=\"#3b82f6\" rx=\"3\"/><circle cx=\"320\" cy=\"50\" r=\"16\" fill=\"#ef4444\"/><rect x=\"350\" y=\"34\" width=\"32\" height=\"32\" fill=\"#3b82f6\" rx=\"3\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Repeating Unit: Circle, Square, Circle, Square...</text></svg>",
    "cbq": {
      "title": "School Cleanliness Day Teams (Tens & Ones)",
      "text": "Students in a school are forming teams of 10 for Clean School Day. Class 1 has 53 students, Class 2 has 42 students, and Class 3 has 35 students.",
      "question": "How many teams of 10 can be made from Class 2? How many students will be left over? If leftover students from all three classes join together, how many additional teams of 10 can they form?",
      "answer": "1. For Class 2 (42 students): <strong>4 teams of 10</strong> can be formed, and <strong>2 students</strong> are left over.<br>2. Leftovers from all 3 classes: Class 1 leaves 3, Class 2 leaves 2, Class 3 leaves 5. Total leftovers = 3 + 2 + 5 = 10 students.<br>3. These 10 students form exactly <strong>1 more team of 10</strong> with 0 students remaining.",
      "rubric": "1 M for Class 2 teams & leftover + 1 M for total leftovers + 1 M for new team calculation"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Bindi & Leaf Patterns",
        "q": "Look at the pattern on Bini and Ginni's mother's saree border: Leaf pointing UP, Leaf pointing DOWN, Leaf pointing UP, Leaf pointing DOWN... Draw or describe the next two leaves in this pattern.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The pattern alternates direction: UP, DOWN, UP, DOWN...<br>• The next leaf will point <strong>UP</strong>.<br>• The following leaf will point <strong>DOWN</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Next leaf points UP",
            "marks": "1 M"
          },
          {
            "key": "Following leaf points DOWN",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Iron Grill Patterns",
        "q": "Bini and Ginni saw an iron window grill made of curved loop shapes. When they walked in the park, they saw the same grill turned sideways. Can a single pattern unit look different when rotated?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>Yes</strong>, rotating a design changes its orientation from vertical to horizontal.<br>• The basic shape remains the same, but the overall design appears completely transformed when turned 90 degrees.",
        "marks": 2,
        "rubric": [
          {
            "key": "Affirmative answer (Yes)",
            "marks": "1 M"
          },
          {
            "key": "Rotation effect on pattern explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Floor Tiling",
        "q": "Why can square and rectangular tiles cover an entire bathroom floor without leaving any empty gaps?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. Squares and rectangles have straight edges and 90-degree square corners.<br>2. When placed edge-to-edge, they fit flush against each other, completely covering the flat surface without any gaps or overlaps (this is called <strong>tessellation</strong>).",
        "marks": 2,
        "rubric": [
          {
            "key": "Straight edges & corners fitting flush explained",
            "marks": "1 M"
          },
          {
            "key": "No gaps or overlaps concept",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Patterns (Skip Counting)",
        "q": "Find the rule and fill in the missing numbers in the following patterns:<br>(a) 20, 30, 40, ___, ___, 70, 80<br>(b) 2, 4, 6, 8, ___, ___, 14",
        "ans": "<strong>Step-by-Step Solution:</strong><br>(a) <strong>Rule:</strong> Adding 10 each time.<br>Missing numbers: 40 + 10 = <strong>50</strong>, 50 + 10 = <strong>60</strong>.<br>(b) <strong>Rule:</strong> Adding 2 each time.<br>Missing numbers: 8 + 2 = <strong>10</strong>, 10 + 2 = <strong>12</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 50, 60 with rule +10",
            "marks": "1 M"
          },
          {
            "key": "(b) 10, 12 with rule +2",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Skip by Threes and Fives",
        "q": "Fill in the missing numbers:<br>(a) 3, 6, 9, 12, ___, ___, 21<br>(b) 5, 10, 15, 20, ___, ___, 35",
        "ans": "<strong>Answers:</strong><br>(a) Rule: Skip counting by 3s.<br>12 + 3 = <strong>15</strong>, 15 + 3 = <strong>18</strong>.<br>(b) Rule: Skip counting by 5s.<br>20 + 5 = <strong>25</strong>, 25 + 5 = <strong>30</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 15, 18",
            "marks": "1 M"
          },
          {
            "key": "(b) 25, 30",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT Secret Message • Letter Patterns",
        "q": "Shablu wrote a secret message to Jaggu by placing a number before each letter:<br><strong>1G 2O 3O 4D 5M 6O 7R 8N 9I 10N 11G</strong><br>Remove the numbers and decode the secret message.",
        "ans": "<strong>Step-by-Step Decoding:</strong><br>• Numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11.<br>• Letters: G - O - O - D - M - O - R - N - I - N - G.<br>• Secret Message: <strong>GOOD MORNING</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pattern logic identified",
            "marks": "1 M"
          },
          {
            "key": "Correct message 'GOOD MORNING'",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Creative • Secret Message Challenge",
        "q": "Write the secret message 'I LOVE MATHS' using alternating numbers (1, 2, 3...).",
        "ans": "<strong>Solution:</strong><br>• 1I 2L 3O 4V 5E 6M 7A 8T 9H 10S (or <strong>1I 2L 3O 4V 5E 6M 7A 8T 9H 10S</strong>).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct application of alternating numbers to message",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Odd and Even Number Pattern",
        "q": "Look at the pattern of numbers: 95, 96, 97, 98, 99, 100.<br>(a) Which of these end in 5, 7, or 9 (odd)?<br>(b) Which of these end in 6, 8, or 0 (even)?",
        "ans": "<strong>Classification:</strong><br>(a) <strong>Odd numbers (ending in 5, 7, 9):</strong> 95, 97, 99.<br>(b) <strong>Even numbers (ending in 6, 8, 0):</strong> 96, 98, 100.",
        "marks": 2,
        "rubric": [
          {
            "key": "Odd numbers identified",
            "marks": "1 M"
          },
          {
            "key": "Even numbers identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Geometric Growth Pattern",
        "q": "Look at the growth pattern:<br>1 circle, then 2 circles, then 3 circles...<br>How many circles will be in the 5th step of this pattern?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Step 1 = 1 circle<br>• Step 2 = 2 circles<br>• Step 3 = 3 circles<br>• Step 4 = 4 circles<br>• Step 5 = <strong>5 circles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Growth rule identified (+1 circle per step)",
            "marks": "1 M"
          },
          {
            "key": "Step 5 = 5 circles correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Alphabet Sequence Pattern",
        "q": "Complete the alphabet pattern:<br>AA, BB, CC, DD, ___, ___, GG.",
        "ans": "<strong>Solution:</strong><br>The pattern doubles each successive English alphabet letter:<br>AA, BB, CC, DD, <strong>EE</strong>, <strong>FF</strong>, GG.",
        "marks": 2,
        "rubric": [
          {
            "key": "Missing pairs EE and FF filled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Backward Counting Pattern",
        "q": "Find the rule and fill in the blanks: 40, 38, 36, 34, ___, ___, 28.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Rule:</strong> Subtracting 2 at each step (counting backward by 2s).<br>• 34 - 2 = <strong>32</strong><br>• 32 - 2 = <strong>30</strong><br>• Complete sequence: 40, 38, 36, 34, <strong>32</strong>, <strong>30</strong>, 28.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtracting 2 rule stated",
            "marks": "1 M"
          },
          {
            "key": "Terms 32 and 30 filled correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Floor Tile Shape Analysis",
        "q": "Can circular plates be used as floor tiles to cover a kitchen floor without any spaces between them? Explain why or why not.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>No</strong>, circular shapes cannot tile a floor without gaps.<br>• <strong>Reason:</strong> Circles have curved rims. When round plates are placed together touching each other, curved empty spaces (gaps) are always left between them.",
        "marks": 2,
        "rubric": [
          {
            "key": "Negative answer (No)",
            "marks": "1 M"
          },
          {
            "key": "Gaps between touching circles explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Day & Night Natural Pattern",
        "q": "Explain how Day and Night form a natural repeating pattern in our life.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The Sun rises to give Day, and sets to give Night, followed again by Sunrise and Day.<br>• This cycle repeats continuously every 24 hours without end, making it one of the most fundamental natural patterns on Earth.",
        "marks": 2,
        "rubric": [
          {
            "key": "Day and night cycle described",
            "marks": "1 M"
          },
          {
            "key": "Repeating 24-hour nature explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern in Multiples of 10",
        "q": "What is common among the units digits of the numbers 10, 20, 30, 40, 50, 60, 70, 80, 90, 100?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• In every multiple of 10, the digit in the units (ones) place is always <strong>0</strong>.<br>• Only the tens digit increases by 1 each time.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identifies 0 in ones place",
            "marks": "1 M"
          },
          {
            "key": "Identifies tens digit increasing by 1",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Colour Sequence Pattern",
        "q": "A string of festival lights flashes in the sequence: Red, Blue, Green, Red, Blue, Green, Red... What colour will the 10th light bulb be?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Repeating unit = Red (1), Blue (2), Green (3) [Group of 3]<br>• 1st=Red, 2nd=Blue, 3rd=Green<br>• 4th=Red, 5th=Blue, 6th=Green<br>• 7th=Red, 8th=Blue, 9th=Green<br>• 10th light bulb = <strong>Red</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Group of 3 cycle identified",
            "marks": "1 M"
          },
          {
            "key": "10th bulb = Red correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Triangle Orientation Pattern",
        "q": "Look at the pattern: ▲, ▼, ▲, ▼, ▲... What will be the 6th and 7th shapes in this pattern?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Odd positions (1st, 3rd, 5th, 7th) = ▲ (Pointing UP)<br>• Even positions (2nd, 4th, 6th) = ▼ (Pointing DOWN)<br>• Therefore, the 6th shape is <strong>▼ (Pointing DOWN)</strong>, and the 7th shape is <strong>▲ (Pointing UP)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6th shape: ▼",
            "marks": "1 M"
          },
          {
            "key": "7th shape: ▲",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Summary • Pattern Rules",
        "q": "What is a pattern in mathematics?",
        "ans": "<strong>Definition & Summary:</strong><br>• A pattern is an arrangement of lines, shapes, colours, or numbers that repeats or grows following a definite, predictable <strong>rule</strong>.<br>• By finding the rule, we can easily predict what comes next.",
        "marks": 2,
        "rubric": [
          {
            "key": "Arrangement with definite rule defined",
            "marks": "1 M"
          },
          {
            "key": "Predictive nature of pattern explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "What comes next in the pattern: 10A, 20B, 30C, 40D, _____?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Numbers increase by 10: 10, 20, 30, 40 -> 50.<br>• Letters follow the alphabet: A, B, C, D -> E.<br>• The next term is <strong>50E</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Number part 50",
            "marks": "1 M"
          },
          {
            "key": "Letter part E (combined: 50E)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Window Grill Pattern",
        "q": "Look at the iron grill on the boundary wall. It repeats: Up Arrow, Down Arrow, Up Arrow, Down Arrow. Draw and state the next two arrows in the sequence.",
        "ans": "<strong>Answer:</strong><br>• The repeating pattern is alternating up and down.<br>• The next two shapes are: <strong>Up Arrow (↑)</strong> and <strong>Down Arrow (↓)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identification of alternating rule",
            "marks": "1 M"
          },
          {
            "key": "Next two arrows: ↑, ↓",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg6",
    "num": 6,
    "unit": "Unit 6: Geometry & Shapes",
    "title": "Footprints",
    "subtitle": "Tracing 2D Outlines, Animal Footprints & Tarani's Shapes",
    "concepts": [
      "Bholu and animal footprints: matching footprints of elephant, dog, frog, and duck.",
      "Tracing everyday objects (coins, bowls, bottle caps, erasers) to reveal 2D flat shapes.",
      "Recognizing fundamental 2D shapes: Circle, Square, Rectangle, and Triangle.",
      "Tarani's picture puzzle: counting the occurrences of each geometric shape."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"70\" cy=\"55\" r=\"25\" fill=\"#3b82f6\"/><rect x=\"140\" y=\"30\" width=\"50\" height=\"50\" fill=\"#10b981\" rx=\"2\"/><rect x=\"230\" y=\"35\" width=\"70\" height=\"40\" fill=\"#f59e0b\" rx=\"2\"/><polygon points=\"370,30 340,80 400,80\" fill=\"#ec4899\"/><text x=\"70\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Circle</text><text x=\"165\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Square</text><text x=\"265\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Rectangle</text><text x=\"370\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">Triangle</text></svg>",
    "cbq": {
      "title": "Tarani's Geometric Robot Puzzle",
      "text": "Tarani drew a friendly robot and garden scene using only four basic shapes: Circles for head and wheels, Squares for the body, Rectangles for arms and legs, and Triangles for party hats and tree tops. Her picture contains 12 circles, 5 squares, 8 rectangles, and 7 triangles.",
      "question": "Which geometric shape was used the most by Tarani? Which shape was used the least? How many total geometric shapes did she draw altogether?",
      "answer": "1. <strong>Most used shape:</strong> <strong>Circle</strong> (12 circles).<br>2. <strong>Least used shape:</strong> <strong>Square</strong> (5 squares).<br>3. <strong>Total shapes drawn:</strong> 12 + 5 + 8 + 7 = <strong>32 shapes</strong>.",
      "rubric": "1 M for circle (most) + 1 M for square (least) + 1 M for total sum (32)"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Bholu's Footprints",
        "q": "One morning, Bholu saw footprints of animals on the muddy village pathway. Whose footprint is the biggest: an elephant's footprint or a dog's footprint? Why?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The <strong>elephant's footprint</strong> is the biggest.<br>• <strong>Reason:</strong> An elephant is a huge, heavy animal with massive round feet to support its weight, leaving a very large circular footprint in the mud.",
        "marks": 2,
        "rubric": [
          {
            "key": "Elephant footprint identified as biggest",
            "marks": "1 M"
          },
          {
            "key": "Animal size and foot area explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Animal Footprint Matching",
        "q": "Match the animal to the shape of its footprint:<br>(a) Duck (b) Dog (c) Elephant<br>Footprint description: (1) Huge round impression (2) Webbed foot with 3 toes (3) Paw print with four toe pads and claw marks",
        "ans": "<strong>Matching:</strong><br>• <strong>(a) Duck:</strong> (2) Webbed foot with 3 toes.<br>• <strong>(b) Dog:</strong> (3) Paw print with four toe pads and claw marks.<br>• <strong>(c) Elephant:</strong> (1) Huge round impression.",
        "marks": 3,
        "rubric": [
          {
            "key": "Duck correctly matched",
            "marks": "1 M"
          },
          {
            "key": "Dog correctly matched",
            "marks": "1 M"
          },
          {
            "key": "Elephant correctly matched",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tracing Outlines",
        "q": "When you place a 1-rupee coin on paper and trace along its edge with a pencil, what 2D shape do you get?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• When you trace around the outer edge of a coin, you get a <strong>Circle</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Circle identified correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tracing a Matchbox",
        "q": "If you trace different faces of a matchbox on paper, what shapes do you get? Are all the faces square or rectangular?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• All faces of a standard matchbox are <strong>Rectangles</strong> (some longer, some narrower).<br>• None of the faces are square.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rectangle identified",
            "marks": "1 M"
          },
          {
            "key": "Absence of squares confirmed",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Two Different Shapes from One Object",
        "q": "Can you name an object that gives two different shapes when traced from different sides?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A <strong>glass tumbler or steel bowl</strong>:<br>1. Tracing the circular top rim gives a <strong>circle</strong>.<br>2. Placing it on its side and tracing the side profile gives a <strong>trapezium / rectangle</strong> outline.",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid object named (e.g. glass tumbler/bowl/pencil sharpener)",
            "marks": "1 M"
          },
          {
            "key": "Two distinct shapes described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Properties • Square vs Rectangle",
        "q": "What is the key difference between a square and a rectangle?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• In a <strong>square</strong>, all 4 sides are equal in length.<br>• In a <strong>rectangle</strong>, opposite sides are equal (it has a longer pair of lengths and a shorter pair of breadths).",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 sides equal for square",
            "marks": "1 M"
          },
          {
            "key": "Opposite sides equal for rectangle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Identification • Triangle",
        "q": "How many sides and how many corners (vertices) does a triangle have? Give two real-world examples of triangular shapes.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A triangle has <strong>3 straight sides</strong> and <strong>3 corners</strong>.<br>• <strong>Examples:</strong> A slice of pizza, a samosa, a traffic yield sign, or the roof of a hut.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 sides and 3 corners stated",
            "marks": "1 M"
          },
          {
            "key": "Two valid real-world examples",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Identification • Circle",
        "q": "Does a circle have any straight sides or sharp corners? Name two things you wear that are circular.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>No</strong>, a circle has no straight sides and <strong>no corners</strong>; it is a single smooth closed curve.<br>• <strong>Circular things worn:</strong> Bangles, wrist watches (dial), finger rings.",
        "marks": 2,
        "rubric": [
          {
            "key": "No corners / straight sides stated",
            "marks": "1 M"
          },
          {
            "key": "Two wearable items named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Dress-Up Activity • Shapes for Dancer",
        "q": "In the NCERT activity, children dress up a classical dancer using shapes:<br>(a) Draw earrings using triangles.<br>(b) Draw a bindi using a circle.<br>(c) Draw bangles using circles.<br>Explain why bangles are always shaped like circles.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Bangles are circular because human wrists and hands are rounded.<br>• A circular ring slips smoothly over the hand onto the wrist without sharp corners hurting the skin.",
        "marks": 2,
        "rubric": [
          {
            "key": "Wrist anatomy connection",
            "marks": "1 M"
          },
          {
            "key": "Smooth circular fit without corners explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tracing Kitchen Utensils",
        "q": "Look around your kitchen. What shape will you get if you trace around the base of:<br>(a) A spice container jar lid<br>(b) A rectangular sandwich biscuit",
        "ans": "<strong>Answers:</strong><br>(a) A spice jar lid gives a <strong>Circle</strong>.<br>(b) A rectangular sandwich biscuit gives a <strong>Rectangle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Circle",
            "marks": "1 M"
          },
          {
            "key": "(b) Rectangle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Footprint Investigation",
        "q": "Whose footprint will be smaller: a baby's footprint or your mother's footprint? Why?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The <strong>baby's footprint</strong> will be much smaller.<br>• A baby's feet are tiny because their body is still growing, whereas an adult mother has fully grown feet.",
        "marks": 2,
        "rubric": [
          {
            "key": "Baby's footprint identified as smaller",
            "marks": "1 M"
          },
          {
            "key": "Growth reason provided",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Drawing with Shapes",
        "q": "Can you draw a house using 1 triangle, 1 square, and 2 rectangles? Describe where each shape will go.",
        "ans": "<strong>Step-by-Step Description:</strong><br>• <strong>Square:</strong> The main wall/room of the house.<br>• <strong>Triangle:</strong> The sloping roof placed on top of the square.<br>• <strong>Rectangle 1:</strong> The front door.<br>• <strong>Rectangle 2:</strong> A window or the chimney on the roof.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 shapes allocated logically",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Flat Shapes vs Solid Objects",
        "q": "Is a football a circle or a sphere? Explain the difference to a Class 2 student.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• A football is a <strong>sphere</strong> (a 3D solid ball that you can hold in your hands).<br>• A circle is a <strong>flat 2D shape</strong> drawn on a flat sheet of paper (like drawing a round coin outline).",
        "marks": 2,
        "rubric": [
          {
            "key": "Football identified as sphere",
            "marks": "1 M"
          },
          {
            "key": "Difference between 3D solid and 2D drawing explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Leaf Tracing Activity",
        "q": "What happens when you place a fallen peepal or mango leaf under a sheet of paper and rub gently over it with a crayon?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The crayon catches the raised veins and outer border of the leaf.<br>• A beautiful, detailed <strong>leaf print/rubbing</strong> showing the leaf's shape and vein pattern appears on the paper.",
        "marks": 2,
        "rubric": [
          {
            "key": "Leaf rubbing technique explained",
            "marks": "1 M"
          },
          {
            "key": "Appearance of veins and border noted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Counting Corners (Vertices)",
        "q": "How many corners are there in:<br>(a) A square<br>(b) A rectangle<br>(c) A circle<br>(d) A triangle",
        "ans": "<strong>Answers:</strong><br>(a) Square: <strong>4 corners</strong><br>(b) Rectangle: <strong>4 corners</strong><br>(c) Circle: <strong>0 corners</strong><br>(d) Triangle: <strong>3 corners</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 counts correct",
            "marks": "2 M (0.5 M each)"
          }
        ]
      },
      {
        "category": "Shape Riddle",
        "q": "I have 4 sides. All my 4 sides are exactly equal in length. I have 4 corners. What shape am I?",
        "ans": "<strong>Answer:</strong><br>• You are a <strong>Square</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Square identified correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Geometry",
        "q": "Take a square piece of origami craft paper. If you fold it diagonally from corner to opposite corner, what shape do you get?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Folding a square along its diagonal divides it cleanly into two equal halves.<br>• Each half is a <strong>Triangle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Triangle identified",
            "marks": "1 M"
          },
          {
            "key": "Diagonal folding logic explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Summary",
        "q": "What is the main lesson we learn from Chapter 6 'Footprints'?",
        "ans": "<strong>Summary:</strong><br>1. Every 3D physical object leaves a 2D flat footprint or trace when pressed or outlined.<br>2. By tracing everyday objects, we discover the four basic geometric shapes: circles, squares, rectangles, and triangles.<br>3. Complex pictures and living creatures can be represented using combinations of these shapes.",
        "marks": 3,
        "rubric": [
          {
            "key": "2D outline from 3D object concept",
            "marks": "1 M"
          },
          {
            "key": "Four basic geometric shapes named",
            "marks": "1 M"
          },
          {
            "key": "Composite drawings with shapes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Story • Bholu's Animal Tracks",
        "q": "Bholu came to the muddy river bank and saw animal footprints. Match the animal to its footprint shape:<br>(a) Elephant — (1) Small round paws with claw marks<br>(b) Duck — (2) Huge round circular pads<br>(c) Dog — (3) Webbed foot impressions",
        "ans": "<strong>Matching:</strong><br>• (a) Elephant — <strong>(2) Huge round circular pads</strong><br>• (b) Duck — <strong>(3) Webbed foot impressions</strong><br>• (c) Dog — <strong>(1) Small round paws with claw marks</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All three matched correctly",
            "marks": "3 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg7",
    "num": 7,
    "unit": "Unit 7: Measurement of Capacity",
    "title": "Jugs and Mugs",
    "subtitle": "Lemon Drink Stall, Measuring Liquid Volume, The Thirsty Crow",
    "concepts": [
      "Understanding liquid capacity (volume) using non-standard units (glasses, mugs, spoons, jugs).",
      "Setting up a Lemon Drink (Nimbu Paani) stall: calculating ingredients for multiple glasses.",
      "Comparing capacity of containers: which holds the most, which holds the least.",
      "The Thirsty Crow experiment: water level rises when stones/pebbles are dropped in."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><rect x=\"60\" y=\"40\" width=\"40\" height=\"50\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"2\" rx=\"3\"/><rect x=\"150\" y=\"30\" width=\"60\" height=\"65\" fill=\"#facc15\" stroke=\"#a16207\" stroke-width=\"2\" rx=\"4\"/><path d=\"M 270 95 L 300 35 L 340 35 L 370 95 Z\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"80\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Glass (Small)</text><text x=\"180\" y=\"110\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Mug (Medium)</text><text x=\"320\" y=\"110\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Pitcher / Jug (Large)</text></svg>",
    "cbq": {
      "title": "School Village Fair Nimbu Paani Stall",
      "text": "Chaitra, Nazma, and Shabnam set up a Lemon Drink stall at the village fair. To make 1 glass of lemon drink, they need: half a lemon, 2 spoonfuls of sugar, and 1 pinch of salt. They sell small glasses for ₹5 and big glasses for ₹10.",
      "question": "How many whole lemons are needed to make 6 glasses of lemon drink? If they sell 8 small glasses and 4 big glasses, how much total money do they earn?",
      "answer": "1. 1 glass needs 1/2 lemon. For 6 glasses, they need: 6 × 1/2 = <strong>3 whole lemons</strong>.<br>2. Money from small glasses: 8 × ₹5 = ₹40.<br>3. Money from big glasses: 4 × ₹10 = ₹40.<br>4. Total money earned = ₹40 + ₹40 = <strong>₹80</strong>.",
      "rubric": "1 M for lemons calculation (3) + 1 M for glass sales breakdown + 1 M for total earnings (₹80)"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Nimbu Paani Ingredients",
        "q": "To make 1 glass of lemon drink, you need 2 spoons of sugar. How many spoons of sugar are needed to make 5 glasses of lemon drink?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Sugar for 1 glass = 2 spoons<br>• Sugar for 5 glasses = 5 × 2 = <strong>10 spoons of sugar</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication 5 × 2 shown",
            "marks": "1 M"
          },
          {
            "key": "10 spoons calculated correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Filling Containers",
        "q": "Sunaina and Jaspreet brought different vessels from their kitchen: a cup, a glass, a small pot, and a jug. Which vessel holds the least water? Which vessel holds the most water?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The <strong>cup</strong> holds the least water.<br>• The <strong>jug (or large pot)</strong> holds the most water.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cup identified as holding least",
            "marks": "1 M"
          },
          {
            "key": "Jug/pot identified as holding most",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Glasses to Fill a Jug",
        "q": "Jaspreet found that 1 jug can be filled completely with 8 glasses of water. How many glasses of water are needed to fill 2 such jugs?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 1 jug = 8 glasses<br>• 2 jugs = 8 × 2 = <strong>16 glasses of water</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication 8 × 2 shown",
            "marks": "1 M"
          },
          {
            "key": "16 glasses correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Capacity Comparison",
        "q": "A small bowl takes 3 cups of water to fill. A soup bowl takes 5 cups of water to fill. Which bowl has greater capacity and by how many cups?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Small bowl = 3 cups<br>• Soup bowl = 5 cups<br>• Since 5 > 3, the <strong>soup bowl has greater capacity</strong>.<br>• Difference = 5 - 3 = <strong>2 cups more</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Soup bowl identified",
            "marks": "1 M"
          },
          {
            "key": "Difference of 2 cups calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT Story • Thirsty Crow Experiment",
        "q": "Chirpy the crow was very thirsty. There was very little water in the pitcher at the bottom, and his beak could not reach it. Chirpy picked up pebbles one by one and dropped them into the pitcher. What happened to the water level?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• As pebbles sank to the bottom of the pitcher, they took up space (volume).<br>• This displaced the water and pushed the <strong>water level up</strong> until Chirpy could drink easily and fly away happily.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pebbles taking up volume explained",
            "marks": "1 M"
          },
          {
            "key": "Water level rising stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Drops in a Spoon",
        "q": "Using an eye dropper, guess how many drops of water will fill a teaspoon. If it takes about 20 to 25 drops, will a tablespoon take more drops or fewer drops?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A tablespoon is much bigger than a teaspoon.<br>• Therefore, it will take <strong>more drops</strong> (around 60 to 75 drops) to fill a tablespoon.",
        "marks": 2,
        "rubric": [
          {
            "key": "More drops identified",
            "marks": "1 M"
          },
          {
            "key": "Tablespoon size comparison explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT Investigation • The Milkman Mystery",
        "q": "Rani's mother takes milk from Shyamu the milkman every day. Shyamu uses his metal mug 3 times to fill Rani's pot. One day, Rani brought a wide flat vessel, and the milk reached only halfway up. Did the milkman give less milk that day? Explain.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>No</strong>, the milkman gave the exact same amount of milk (3 full mugs).<br>• <strong>Reason:</strong> The wide flat vessel has a broader bottom, so the same volume of milk spreads out sideways and appears lower in height. Liquid changes its shape to match the container without changing its quantity.",
        "marks": 3,
        "rubric": [
          {
            "key": "Affirmative confirmation: same milk given",
            "marks": "1 M"
          },
          {
            "key": "Wider container bottom spreads liquid explained",
            "marks": "1 M"
          },
          {
            "key": "Volume conservation concept",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ordering Containers by Capacity",
        "q": "Arrange these 4 containers in order from LEAST capacity to GREATEST capacity: Bucket, Teaspoon, Water Bottle, Mug.",
        "ans": "<strong>Arrangement (Least to Greatest):</strong><br>1. <strong>Teaspoon</strong> (holds smallest amount)<br>2. <strong>Mug</strong><br>3. <strong>Water Bottle</strong><br>4. <strong>Bucket</strong> (holds largest amount).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct order from teaspoon to bucket",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Everyday Math • Drinking Water Goal",
        "q": "Doctor uncle advises Rahul to drink 8 glasses of water every day. If Rahul drinks 2 glasses in the morning, 3 glasses in the afternoon, and 2 glasses in the evening, has he reached his goal? How many more glasses should he drink?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Water drunk so far = 2 + 3 + 2 = 7 glasses.<br>• Daily target = 8 glasses.<br>• Rahul has not reached his goal yet. He needs to drink: 8 - 7 = <strong>1 more glass</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum of 7 glasses calculated",
            "marks": "1 M"
          },
          {
            "key": "1 more glass needed correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practical Conservation • Water Waste",
        "q": "A leaking bathroom tap drips 1 cup of water every hour. How many cups of clean water are wasted in 6 hours?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Water wasted in 1 hour = 1 cup<br>• Water wasted in 6 hours = 6 × 1 = <strong>6 cups of water</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication 6 × 1 shown",
            "marks": "1 M"
          },
          {
            "key": "6 cups answer correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Capacity Unit Sense",
        "q": "Which unit would be more suitable to measure the water in an overhead water tank: mugs or buckets?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• An overhead water tank holds hundreds of litres of water.<br>• <strong>Buckets</strong> are much more suitable than tiny mugs to measure such a large volume.",
        "marks": 1,
        "rubric": [
          {
            "key": "Buckets selected with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparative Problem • Water Bottle Capacity",
        "q": "Arun's water bottle holds 4 glasses of water. Geeta's water bottle holds 6 glasses of water. If both pour their full bottles into an empty jug, how many glasses of water are in the jug?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Arun's bottle = 4 glasses<br>• Geeta's bottle = 6 glasses<br>• Total water in jug = 4 + 6 = <strong>10 glasses of water</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 4 + 6 shown",
            "marks": "1 M"
          },
          {
            "key": "10 glasses answer correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Science • Marble Displacement",
        "q": "A transparent glass is filled halfway with water. If you gently drop 5 glass marbles into the water, what happens to the water level?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The water level <strong>rises higher</strong>.<br>• The solid marbles take up space at the bottom and push the water upwards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Water level rises stated",
            "marks": "1 M"
          },
          {
            "key": "Displacement explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Everyday Cooking • Rice Pot",
        "q": "To cook 1 cup of rice, mother adds 2 cups of water. How many cups of water must she add to cook 3 cups of rice?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 1 cup rice = 2 cups water<br>• 3 cups rice = 3 × 2 = <strong>6 cups of water</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 × 2 shown",
            "marks": "1 M"
          },
          {
            "key": "6 cups of water correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A tea cup holds more liquid than a bucket.<br>(b) Pouring water from a tall thin bottle into a round bowl changes the total amount of water.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. A bucket holds much more liquid than a tiny tea cup.<br>(b) <strong>False</strong>. Pouring changes the shape of the liquid, but the total amount (volume) remains exactly the same.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) False with volume conservation reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Bucket Bath vs Shower",
        "q": "Taking a bath with 1 bucket of water uses about 15 litres. A 10-minute running shower uses about 60 litres. Which uses less water and helps save water?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>A bucket bath</strong> uses only 15 litres compared to 60 litres for a shower.<br>• Taking a bucket bath saves 45 litres of clean water every time and is very environment-friendly.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bucket bath identified as using less water",
            "marks": "1 M"
          },
          {
            "key": "Water saving calculation (60 - 15 = 45 litres)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What does the word 'capacity' mean in simple words?",
        "ans": "<strong>Definition:</strong><br>• <strong>Capacity</strong> is the maximum amount of liquid (like water, milk, or juice) that a container can hold inside it.",
        "marks": 1,
        "rubric": [
          {
            "key": "Clear simple definition of capacity",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Math Problem",
        "q": "If 1 teapot fills 4 cups of tea, how many teapots are needed to serve 12 cups of tea to guests?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 1 teapot = 4 cups<br>• Teapots needed for 12 cups = 12 ÷ 4 = <strong>3 teapots</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Division 12 ÷ 4 shown",
            "marks": "1 M"
          },
          {
            "key": "3 teapots calculated correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Lemon Drink Stall",
        "q": "Sunaina uses 2 lemons and 4 spoons of sugar to make 1 big jug of sweet lemon drink. If she wants to make 3 jugs of lemon drink for the school fair, how many lemons and spoons of sugar will she need?",
        "ans": "<strong>Calculation:</strong><br>• Lemons needed = 3 × 2 = <strong>6 lemons</strong>.<br>• Spoons of sugar needed = 3 × 4 = <strong>12 spoons of sugar</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 lemons",
            "marks": "1 M"
          },
          {
            "key": "12 spoons of sugar",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg8",
    "num": 8,
    "unit": "Unit 8: Place Value & Currency",
    "title": "Tens and Ones",
    "subtitle": "Uncle's Shop, Notes and Coins, Ring Throw & Token Cards",
    "concepts": [
      "Decomposing money amounts into ₹10 currency notes and ₹1 coins.",
      "Splitting 2-digit numbers into tens and ones (e.g. 19 = 10 + 9, 45 = 40 + 5).",
      "Ring throw game: calculating total score using red dots (10 points) and green dots (1 point).",
      "Token card representation: using square [10] and triangle [1] cards to count collections."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><rect x=\"60\" y=\"35\" width=\"80\" height=\"45\" fill=\"#047857\" rx=\"4\"/><text x=\"100\" y=\"62\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">₹10 Note</text><circle cx=\"200\" cy=\"58\" r=\"16\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"200\" y=\"63\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">₹1</text><circle cx=\"240\" cy=\"58\" r=\"16\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"240\" y=\"63\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">₹1</text><circle cx=\"280\" cy=\"58\" r=\"16\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"280\" y=\"63\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">₹1</text><text x=\"390\" y=\"62\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"#065f46\" text-anchor=\"middle\">₹10 + ₹3 = ₹13</text></svg>",
    "cbq": {
      "title": "Stationery Uncle's Exact Change Rule",
      "text": "Uncle runs a school bookshop. He tells children: 'I have only 10-rupee notes and 1-rupee coins. Give me exact money for your purchase.' Priya buys a notebook for ₹24, Aman buys a sketch pen set for ₹37, and Rohan buys a geometry box for ₹50.",
      "question": "How many ₹10 notes and how many ₹1 coins must Priya give? How many ₹10 notes and ₹1 coins must Aman give? What must Rohan give?",
      "answer": "1. <strong>Priya (₹24):</strong> Two ₹10 notes (₹20) and 4 one-rupee coins (₹4).<br>2. <strong>Aman (₹37):</strong> Three ₹10 notes (₹30) and 7 one-rupee coins (₹7).<br>3. <strong>Rohan (₹50):</strong> Five ₹10 notes (₹50) and 0 one-rupee coins.",
      "rubric": "1 M for Priya (2 notes + 4 coins) + 1 M for Aman (3 notes + 7 coins) + 1 M for Rohan (5 notes + 0 coins)"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Money Breakdown",
        "q": "How many 10-rupee notes and 1-rupee coins do you need to pay for:<br>(a) A doll costing ₹18<br>(b) A water bottle costing ₹43",
        "ans": "<strong>Step-by-Step Solution:</strong><br>(a) ₹18 = One ₹10 note and 8 one-rupee coins.<br>(b) ₹43 = Four ₹10 notes and 3 one-rupee coins.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 1 note of ₹10 + 8 coins of ₹1",
            "marks": "1 M"
          },
          {
            "key": "(b) 4 notes of ₹10 + 3 coins of ₹1",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • How Much Money?",
        "q": "Count the total money:<br>(a) 3 notes of ₹10 and 5 coins of ₹1 = ₹______<br>(b) 6 notes of ₹10 and 2 coins of ₹1 = ₹______",
        "ans": "<strong>Answers:</strong><br>(a) (3 × 10) + 5 = 30 + 5 = <strong>₹35</strong><br>(b) (6 × 10) + 2 = 60 + 2 = <strong>₹62</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) ₹35",
            "marks": "1 M"
          },
          {
            "key": "(b) ₹62",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Break-Up of Numbers",
        "q": "Break up the following numbers into tens and ones:<br>(a) 27 = 20 + 7<br>(b) 31 = ___ + ___<br>(c) 54 = ___ + ___<br>(d) 89 = ___ + ___",
        "ans": "<strong>Answers:</strong><br>(b) 31 = <strong>30 + 1</strong><br>(c) 54 = <strong>50 + 4</strong><br>(d) 89 = <strong>80 + 9</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(b) 30 + 1",
            "marks": "1 M"
          },
          {
            "key": "(c) 50 + 4",
            "marks": "1 M"
          },
          {
            "key": "(d) 80 + 9",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bangle Throw Game",
        "q": "Karma and Gesar are playing a bangle throw game on a board with dots. Each RED dot counts for 10 points. Each GREEN dot counts for 1 point.<br>Karma's ring encircles 4 red dots and 4 green dots. What is Karma's total score?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 4 red dots = 4 × 10 = 40 points<br>• 4 green dots = 4 × 1 = 4 points<br>• Karma's total score = 40 + 4 = <strong>44 points</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Red dots = 40, Green dots = 4 shown",
            "marks": "1 M"
          },
          {
            "key": "Total 44 points correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Bangle Throw Game • Round 2",
        "q": "In round 2 of the bangle throw game, Gesar's ring encircles 3 red dots and 6 green dots. Karma's ring encircles 2 red dots and 8 green dots. Who won round 2?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Gesar's score = (3 × 10) + 6 = 30 + 6 = 36 points.<br>• Karma's score = (2 × 10) + 8 = 20 + 8 = 28 points.<br>• Since 36 > 28, <strong>Gesar won round 2</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Gesar 36, Karma 28 calculated",
            "marks": "1 M"
          },
          {
            "key": "Gesar identified as winner",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT Flute Man • Rat Token Cards",
        "q": "The Flute Man in the story uses cards to count the town's rats:<br>• A yellow square card [10] represents 10 rats.<br>• A blue triangle card [1] represents 1 rat.<br>Which cards will he use to show 23 rats?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In 23, there are 2 tens and 3 ones.<br>• Flute Man uses: <strong>Two [10] cards</strong> and <strong>three [1] cards</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two [10] cards identified",
            "marks": "1 M"
          },
          {
            "key": "Three [1] cards identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Token Card Decoding",
        "q": "What number of rats is shown by four [10] cards and seven [1] cards?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 4 cards of [10] = 4 × 10 = 40<br>• 7 cards of [1] = 7 × 1 = 7<br>• Total number = 40 + 7 = <strong>47 rats</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "40 + 7 shown",
            "marks": "1 M"
          },
          {
            "key": "47 rats correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money Problem • School Canteen",
        "q": "Anita buys a samosa for ₹12 and a fruit juice for ₹15. How many 10-rupee notes and 1-rupee coins does she need to pay the total bill?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total cost = 12 + 15 = ₹27.<br>2. In ₹27, tens = 2 and ones = 7.<br>3. She needs <strong>two ₹10 notes</strong> and <strong>7 one-rupee coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Total bill ₹27 calculated",
            "marks": "1 M"
          },
          {
            "key": "2 notes of ₹10 + 7 coins of ₹1",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tens and Ones Addition",
        "q": "Add using tens and ones breakdown:<br>25 + 32 = (20 + 5) + (30 + 2)",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Add tens: 20 + 30 = 50<br>• Add ones: 5 + 2 = 7<br>• Total sum = 50 + 7 = <strong>57</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tens sum (50) and ones sum (7) shown",
            "marks": "1 M"
          },
          {
            "key": "Final sum 57 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Library Books",
        "q": "A librarian has 76 storybooks. How many bundles of 10 books can he tie? How many loose books will remain?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In 76, tens = 7 and ones = 6.<br>• He can tie <strong>7 bundles of 10 books</strong>.<br>• <strong>6 loose books</strong> will remain.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 bundles of 10",
            "marks": "1 M"
          },
          {
            "key": "6 loose books",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Money Thinking • Exact Change",
        "q": "If an item costs ₹30, what is the least number of 10-rupee notes you can use to pay without using any 1-rupee coins?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 30 ÷ 10 = <strong>3 notes of ₹10</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "3 notes of ₹10 identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Place Value Reversal",
        "q": "What number has 6 in the ones place and 4 in the tens place? Is it 64 or 46?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Tens place = 4 (value = 40)<br>• Ones place = 6 (value = 6)<br>• Number = 40 + 6 = <strong>46</strong> (not 64).",
        "marks": 2,
        "rubric": [
          {
            "key": "Tens and ones value written",
            "marks": "1 M"
          },
          {
            "key": "46 correctly chosen",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Quick Break",
        "q": "Can you break 19 into 10 + 9? Now write the break-up for: 11, 15, and 17.",
        "ans": "<strong>Answers:</strong><br>• 11 = <strong>10 + 1</strong><br>• 15 = <strong>10 + 5</strong><br>• 17 = <strong>10 + 7</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "10 + 1",
            "marks": "1 M"
          },
          {
            "key": "10 + 5",
            "marks": "1 M"
          },
          {
            "key": "10 + 7",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Token Card Exercise",
        "q": "A student drew five [10] cards and two [1] cards. Then his friend gave him one more [10] card and three [1] cards. What is his new total number?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Initial cards = (5 × 10) + 2 = 52<br>• Added cards = (1 × 10) + 3 = 13<br>• New total = 52 + 13 = <strong>65</strong>.<br>(Alternatively: 5 tens + 1 ten = 6 tens; 2 ones + 3 ones = 5 ones -> 65).",
        "marks": 2,
        "rubric": [
          {
            "key": "Step-by-step tens and ones addition",
            "marks": "1 M"
          },
          {
            "key": "Total 65 calculated correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparative Value Problem",
        "q": "Which represents more money: 5 notes of ₹10 OR 40 coins of ₹1? Explain by finding both amounts.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 notes of ₹10 = 5 × 10 = ₹50.<br>• 40 coins of ₹1 = 40 × 1 = ₹40.<br>• Since ₹50 > ₹40, <strong>5 notes of ₹10 is more money</strong> (by ₹10).",
        "marks": 2,
        "rubric": [
          {
            "key": "Both amounts ₹50 and ₹40 calculated",
            "marks": "1 M"
          },
          {
            "key": "5 notes of ₹10 identified as more",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Zero in Tens & Ones",
        "q": "What does the 0 represent in the number 70?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• In 70, the 0 represents <strong>zero ones</strong>.<br>• It acts as a place-holder to show that there are exactly 7 full tens and no loose units remaining.",
        "marks": 2,
        "rubric": [
          {
            "key": "Zero ones explained",
            "marks": "1 M"
          },
          {
            "key": "Place-holder concept explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Summary",
        "q": "Why is breaking numbers into tens and ones useful when adding or shopping?",
        "ans": "<strong>Summary:</strong><br>1. Breaking into tens and ones simplifies mental calculation (we can add tens first, then ones).<br>2. In daily shopping, it directly matches real currency notes (₹10 notes) and coins (₹1 coins), making payment fast and error-free.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mental addition simplification",
            "marks": "1 M"
          },
          {
            "key": "Currency notes connection",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "How many ₹10 notes make ₹100?",
        "ans": "<strong>Calculation:</strong><br>• 100 ÷ 10 = <strong>10 notes of ₹10</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "10 notes of ₹10 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Game • Bangles on Dots",
        "q": "In the bangle throw game, a red dot counts as 10 points and a green dot counts as 1 point. If Suraj's bangle encloses 3 red dots and 5 green dots, what is his total score?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 3 red dots = 3 × 10 = 30 points.<br>• 5 green dots = 5 × 1 = 5 points.<br>• Total score = 30 + 5 = <strong>35 points</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "30 points from red dots",
            "marks": "1 M"
          },
          {
            "key": "Total 35 points",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg9",
    "num": 9,
    "unit": "Unit 9: Time & Calendar",
    "title": "My Funday",
    "subtitle": "Days of the Week, School Timetable, Months & Seasons",
    "concepts": [
      "Sequencing the seven days of the week starting from Monday / Sunday.",
      "Reading school timetables (games period, drawing period, library day).",
      "Identifying yesterday, today, and tomorrow in daily routines.",
      "Recognizing months of the year, seasonal weather (summer, monsoon, winter), and seasonal fruits."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><rect x=\"25\" y=\"35\" width=\"55\" height=\"50\" fill=\"#3b82f6\" rx=\"4\"/><text x=\"52\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">MON</text><rect x=\"90\" y=\"35\" width=\"55\" height=\"50\" fill=\"#3b82f6\" rx=\"4\"/><text x=\"117\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">TUE</text><rect x=\"155\" y=\"35\" width=\"55\" height=\"50\" fill=\"#3b82f6\" rx=\"4\"/><text x=\"182\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">WED</text><rect x=\"220\" y=\"35\" width=\"55\" height=\"50\" fill=\"#3b82f6\" rx=\"4\"/><text x=\"247\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">THU</text><rect x=\"285\" y=\"35\" width=\"55\" height=\"50\" fill=\"#3b82f6\" rx=\"4\"/><text x=\"312\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">FRI</text><rect x=\"350\" y=\"35\" width=\"55\" height=\"50\" fill=\"#3b82f6\" rx=\"4\"/><text x=\"377\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">SAT</text><rect x=\"415\" y=\"35\" width=\"60\" height=\"50\" fill=\"#ef4444\" rx=\"4\"/><text x=\"445\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">SUN (Fun)</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">7 Days of the Week • Sunday is Funday!</text></svg>",
    "cbq": {
      "title": "Class 2 Weekly Activity Timetable",
      "text": "In Class 2-B, children have Games period on Tuesday and Friday, Drawing on Wednesday and Saturday, and Library reading on Thursday. School is closed on Sunday.",
      "question": "Which day comes between Tuesday and Thursday? On which two days do children play sports and games? If today is Thursday, what was yesterday and what will tomorrow be?",
      "answer": "1. <strong>Wednesday</strong> comes between Tuesday and Thursday.<br>2. Children play games on <strong>Tuesday and Friday</strong>.<br>3. If today is Thursday: <strong>Yesterday</strong> was Wednesday, and <strong>Tomorrow</strong> will be Friday.",
      "rubric": "1 M for Wednesday + 1 M for Tuesday & Friday + 1 M for yesterday & tomorrow"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Days Sequence",
        "q": "Answer the following questions about the days of the week:<br>(a) Which is the third day of the week if we start with Monday?<br>(b) Which day comes just after Friday?<br>(c) Which day comes just before Wednesday?",
        "ans": "<strong>Answers:</strong><br>(a) 1st=Monday, 2nd=Tuesday, 3rd=<strong>Wednesday</strong>.<br>(b) The day just after Friday is <strong>Saturday</strong>.<br>(c) The day just before Wednesday is <strong>Tuesday</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Wednesday",
            "marks": "1 M"
          },
          {
            "key": "(b) Saturday",
            "marks": "1 M"
          },
          {
            "key": "(c) Tuesday",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Funday Rhyme",
        "q": "Why is Sunday called 'Funday' by children?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Sunday is the weekly school holiday.<br>• Children do not have to carry their school bags to school and can play games, visit parks, and spend joyful time with family and friends.",
        "marks": 2,
        "rubric": [
          {
            "key": "Weekly holiday identified",
            "marks": "1 M"
          },
          {
            "key": "Play and family time explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Days Count",
        "q": "How many days are there in a week? Name all of them in order.",
        "ans": "<strong>Answer:</strong><br>• There are <strong>7 days</strong> in a week.<br>• In order: <strong>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Count: 7 days",
            "marks": "1 M"
          },
          {
            "key": "All 7 days named correctly in order",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Calendar Deduction • Today, Yesterday, Tomorrow",
        "q": "If today is Tuesday:<br>(a) What was yesterday?<br>(b) What will tomorrow be?<br>(c) What day will it be day after tomorrow?",
        "ans": "<strong>Answers:</strong><br>(a) Yesterday was <strong>Monday</strong>.<br>(b) Tomorrow will be <strong>Wednesday</strong>.<br>(c) Day after tomorrow will be <strong>Thursday</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Monday",
            "marks": "1 M"
          },
          {
            "key": "(b) Wednesday",
            "marks": "1 M"
          },
          {
            "key": "(c) Thursday",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Months of the Year",
        "q": "How many months are there in one year? Name the first and last months of the year.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• There are <strong>12 months</strong> in one year.<br>• The first month is <strong>January</strong>.<br>• The last month is <strong>December</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "12 months stated",
            "marks": "1 M"
          },
          {
            "key": "January and December named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Seasons & Weather • Hot and Cold Months",
        "q": "Name two months that are very hot in India, and two months that are very cold.",
        "ans": "<strong>Answer:</strong><br>• <strong>Very Hot Months (Summer):</strong> May and June.<br>• <strong>Very Cold Months (Winter):</strong> December and January.",
        "marks": 2,
        "rubric": [
          {
            "key": "Hot months: May, June",
            "marks": "1 M"
          },
          {
            "key": "Cold months: December, January",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Seasonal Fruits",
        "q": "Which delicious fruit is found in abundance during the hot summer months? Name one fruit commonly eaten in winter.",
        "ans": "<strong>Answer:</strong><br>• <strong>Summer fruit:</strong> Mango (or Watermelon).<br>• <strong>Winter fruit:</strong> Orange (or Apple/Guava).",
        "marks": 2,
        "rubric": [
          {
            "key": "Summer fruit (Mango/Watermelon)",
            "marks": "1 M"
          },
          {
            "key": "Winter fruit (Orange/Guava)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Monsoon Season",
        "q": "In which months does it rain the most in most parts of India? What items do you carry to school on rainy days?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• It rains heavily during <strong>July and August</strong> (the Monsoon season).<br>• Children carry an <strong>umbrella</strong> or wear a <strong>raincoat</strong> and gumboots to stay dry.",
        "marks": 2,
        "rubric": [
          {
            "key": "July and August identified",
            "marks": "1 M"
          },
          {
            "key": "Umbrella / raincoat named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Days After a Day",
        "q": "Which day comes 4 days after Sunday?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 1 day after Sunday = Monday<br>• 2 days after Sunday = Tuesday<br>• 3 days after Sunday = Wednesday<br>• 4 days after Sunday = <strong>Thursday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Counting sequence shown",
            "marks": "1 M"
          },
          {
            "key": "Thursday correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "School Timetable Analysis",
        "q": "In Neha's school, children have Music class on Monday and Wednesday, and Art class on Friday. How many total creative arts periods do they have in a week?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Music = 2 days (Mon, Wed)<br>• Art = 1 day (Fri)<br>• Total creative periods = 2 + 1 = <strong>3 periods</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Breakdown shown",
            "marks": "1 M"
          },
          {
            "key": "Total 3 periods correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Month Order Sequence",
        "q": "Which month comes immediately after August? Which month comes immediately before March?",
        "ans": "<strong>Answers:</strong><br>• The month immediately after August is <strong>September</strong>.<br>• The month immediately before March is <strong>February</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "September",
            "marks": "1 M"
          },
          {
            "key": "February",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Special Days • Republic & Independence Day",
        "q": "In which month do we celebrate:<br>(a) Republic Day (26th)<br>(b) Independence Day (15th)",
        "ans": "<strong>Answers:</strong><br>(a) Republic Day is celebrated in <strong>January</strong> (26 January).<br>(b) Independence Day is celebrated in <strong>August</strong> (15 August).",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) January",
            "marks": "1 M"
          },
          {
            "key": "(b) August",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Weekly Repetition",
        "q": "If the 1st of a month is a Monday, what day of the week will the 8th of that month be? Explain.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• A week repeats every 7 days.<br>• 1 + 7 = 8.<br>• Therefore, the 8th will also be a <strong>Monday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 1 + 7 = 8 explained",
            "marks": "1 M"
          },
          {
            "key": "Monday correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Temperature & Clothes",
        "q": "Why do we wear light cotton clothes in May and woollen sweaters in December?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• In <strong>May</strong>, the weather is hot and sunny; light cotton clothes absorb sweat and keep our body cool.<br>• In <strong>December</strong>, the weather is cold; thick woollen sweaters trap body heat and keep us warm.",
        "marks": 2,
        "rubric": [
          {
            "key": "May / cotton cooling explained",
            "marks": "1 M"
          },
          {
            "key": "December / wool warmth explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Days Riddle",
        "q": "I am a day of the week. I start with the letter 'W'. I stand right in the middle of the school working week. Who am I?",
        "ans": "<strong>Answer:</strong><br>• You are <strong>Wednesday</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Wednesday identified correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A year has 365 days.<br>(b) Friday comes before Thursday.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. A normal calendar year has 365 days.<br>(b) <strong>False</strong>. Friday comes AFTER Thursday.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "Why is having a school timetable helpful for teachers and students?",
        "ans": "<strong>Summary:</strong><br>1. A timetable organizes the day so every subject gets adequate learning time.<br>2. It helps students pack only the required books in their school bag, keeping the bag light.",
        "marks": 2,
        "rubric": [
          {
            "key": "Organization of learning time",
            "marks": "1 M"
          },
          {
            "key": "Packing required books / bag weight",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "How many weeks are there in one year approximately?",
        "ans": "<strong>Answer:</strong><br>• There are approximately <strong>52 weeks</strong> in one year (52 × 7 = 364 days).",
        "marks": 1,
        "rubric": [
          {
            "key": "52 weeks correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Teacher Role-Play Timetable",
        "q": "In Class 2, children take turns to be the student-teacher: Monday is Vaibhav, Tuesday is Alpana, Wednesday is Gaurav. Who will be the teacher on Thursday and Friday?",
        "ans": "<strong>Answer:</strong><br>• Thursday comes after Wednesday, and Friday comes after Thursday.<br>• Next students in order will take turns on <strong>Thursday</strong> and <strong>Friday</strong>.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Correct succession of days",
            "marks": "1.5 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg10",
    "num": 10,
    "unit": "Unit 10: Mental Addition & Strategy",
    "title": "Add Our Points",
    "subtitle": "Toss the Ball, Snake Number Strip, Coin Toss & Killer Lizard",
    "concepts": [
      "Mental addition of two and three single-digit and 2-digit numbers.",
      "Using the snake number board (number strip) to count forward when adding points.",
      "Tossing coins (Heads / Tails) and calculating running game scores.",
      "The Killer Lizard puzzle: finding paths through numbered holes to eat insects."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><rect x=\"40\" y=\"35\" width=\"400\" height=\"40\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"2\" rx=\"6\"/><text x=\"70\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">14</text><line x1=\"95\" y1=\"35\" x2=\"95\" y2=\"75\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"120\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">15</text><line x1=\"145\" y1=\"35\" x2=\"145\" y2=\"75\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"170\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">16</text><line x1=\"195\" y1=\"35\" x2=\"195\" y2=\"75\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"220\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">17</text><line x1=\"245\" y1=\"35\" x2=\"245\" y2=\"75\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"270\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">18</text><line x1=\"295\" y1=\"35\" x2=\"295\" y2=\"75\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"320\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">19</text><line x1=\"345\" y1=\"35\" x2=\"345\" y2=\"75\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"370\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">20</text><line x1=\"395\" y1=\"35\" x2=\"395\" y2=\"75\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"420\" y=\"60\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">21</text><path d=\"M 70 35 Q 245 -5 420 35\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"3\" stroke-dasharray=\"4,4\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\" text-anchor=\"middle\">Snake Board: 14 + 7 = 21 (Count 7 steps forward)</text></svg>",
    "cbq": {
      "title": "Jungle Animals 'Toss the Ball' Championship",
      "text": "Animals of the forest played 'Toss the Ball'. Each player had two turns. Bunu rabbit added their points on his snake strip board. Bear scored 16 + 7 points. Elephant scored 18 + 9 points. Tortoise scored 14 + 7 points. Bunu rabbit scored 19 + 15 points.",
      "question": "Calculate the total points scored by each player. Who won the toss game, and who lost the game?",
      "answer": "1. <strong>Bear:</strong> 16 + 7 = 23 points.<br>2. <strong>Elephant:</strong> 18 + 9 = 27 points.<br>3. <strong>Tortoise:</strong> 14 + 7 = 21 points.<br>4. <strong>Bunu Rabbit:</strong> 19 + 15 = 34 points.<br>5. <strong>Winner:</strong> <strong>Bunu Rabbit</strong> (34 points).<br>6. <strong>Loser:</strong> <strong>Tortoise</strong> (21 points).",
      "rubric": "1 M for all four sums + 1 M for identifying winner (Bunu) + 1 M for identifying loser (Tortoise)"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Adding on Snake Strip",
        "q": "A player stands on number 14 on the snake strip board. He tosses the ball 7 times without dropping it. To add 7, he jumps 7 steps forward. On which number does he land?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Starting point = 14<br>• Steps forward = 7<br>• Landing number = 14 + 7 = <strong>21</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "14 + 7 shown",
            "marks": "1 M"
          },
          {
            "key": "Landing number 21 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Animal Scores Addition",
        "q": "Add the points mentally:<br>(a) Monkey: 12 + 8 = ___<br>(b) Deer: 15 + 13 = ___<br>(c) Fox: 23 + 9 = ___",
        "ans": "<strong>Answers:</strong><br>(a) 12 + 8 = <strong>20</strong><br>(b) 15 + 13 = (15 + 10 + 3) = 25 + 3 = <strong>28</strong><br>(c) 23 + 9 = (23 + 10 - 1) = 33 - 1 = <strong>32</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) 20",
            "marks": "1 M"
          },
          {
            "key": "(b) 28",
            "marks": "1 M"
          },
          {
            "key": "(c) 32",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Killer Lizard Puzzle",
        "q": "A lizard on a wall moves between numbered holes to eat insects. From hole 0, the lizard can only walk along straight lines. Which 3 holes can the lizard visit to eat exactly 12 insects if hole numbers are 3, 5, 4?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Check the sum of 3, 5, 4:<br>• 3 + 5 + 4 = 8 + 4 = 12.<br>• The lizard can walk through holes <strong>3, 5, and 4</strong> (in any order) to eat 12 insects.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum 3 + 5 + 4 = 12 verified",
            "marks": "1 M"
          },
          {
            "key": "Holes 3, 5, 4 identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Killer Lizard • Target 18",
        "q": "Find 3 holes whose numbers add up to 18 using digits from: 8, 5, 2, 1, 9, 7.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Try 9 + 8 + 1: 9 + 8 = 17, 17 + 1 = 18.<br>• Alternatively: 9 + 7 + 2 = 18.<br>• Holes <strong>9, 8, and 1</strong> (or 9, 7, 2) add up to 18.",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid 3-digit combination selected",
            "marks": "1 M"
          },
          {
            "key": "Sum 18 verified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Game • Heads and Tails",
        "q": "Two children play a game with a 1-rupee coin. If Heads comes, they score 10 points. If Tails comes, they score 1 point.<br>Suraj gets 3 Heads and 4 Tails. What is his total score?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 3 Heads = 3 × 10 = 30 points<br>• 4 Tails = 4 × 1 = 4 points<br>• Suraj's total score = 30 + 4 = <strong>34 points</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Heads (30) and Tails (4) calculated",
            "marks": "1 M"
          },
          {
            "key": "Total 34 points correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Three Numbers Addition",
        "q": "Add three numbers mentally:<br>(a) 6 + 5 + 4 = ___<br>(b) 7 + 8 + 3 = ___",
        "ans": "<strong>Step-by-Step Mental Strategy:</strong><br>(a) Make 10 first: (6 + 4) = 10; then 10 + 5 = <strong>15</strong>.<br>(b) Make 10 first: (7 + 3) = 10; then 10 + 8 = <strong>18</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 15 with make-10 strategy",
            "marks": "1 M"
          },
          {
            "key": "(b) 18 with make-10 strategy",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Two at a Time • Card Sums",
        "q": "Look at number cards: [11], [25], [17], [32]. Pick two cards that give the largest sum. Pick two cards that give the smallest sum.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. <strong>Largest sum:</strong> Pick the two largest numbers: 32 + 25 = <strong>57</strong>.<br>2. <strong>Smallest sum:</strong> Pick the two smallest numbers: 11 + 17 = <strong>28</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Largest sum: 32 + 25 = 57",
            "marks": "1 M"
          },
          {
            "key": "Smallest sum: 11 + 17 = 28",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Scoreboard Comparison",
        "q": "Team Red scored 46 runs. Team Blue scored 38 runs. How many more runs did Team Red score than Team Blue?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Team Red = 46 runs<br>• Team Blue = 38 runs<br>• Difference = 46 - 38 = <strong>8 runs more</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 46 - 38 shown",
            "marks": "1 M"
          },
          {
            "key": "8 runs correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Double Digits Mental Addition",
        "q": "Calculate mentally: 33 + 14.<br>Explain how you added without using paper and pencil.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. Break 14 into 10 + 4.<br>2. First add 10 to 33: 33 + 10 = 43.<br>3. Then add the remaining 4: 43 + 4 = <strong>47</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mental strategy (33 + 10 + 4) explained",
            "marks": "1 M"
          },
          {
            "key": "Answer 47 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Missing Addend Drill",
        "q": "Fill in the missing numbers to make the equations true:<br>(a) 15 + ___ = 25<br>(b) ___ + 8 = 20",
        "ans": "<strong>Answers:</strong><br>(a) 25 - 15 = <strong>10</strong><br>(b) 20 - 8 = <strong>12</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 10",
            "marks": "1 M"
          },
          {
            "key": "(b) 12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Dartboard Ring Score",
        "q": "Kavya throws 3 rings on a board. Her rings land on 20, 15, and 5. What is her total score?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Add: 20 + 15 + 5<br>• Combine 15 + 5 = 20<br>• Then 20 + 20 = <strong>40 points</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Grouping (15+5=20) shown",
            "marks": "1 M"
          },
          {
            "key": "Total 40 points correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Fruit Basket",
        "q": "A basket has 16 red apples and 18 green apples. How many apples are there in all?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Red apples = 16<br>• Green apples = 18<br>• Total = 16 + 18 = 16 + 14 + 4 = 30 + 4 = <strong>34 apples</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "16 + 18 addition shown",
            "marks": "1 M"
          },
          {
            "key": "34 apples correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Stamp Album",
        "q": "Arjun has 28 stamps. His grandfather gifts him 15 more stamps. How many stamps does Arjun have now?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Initial stamps = 28<br>• Gifted stamps = 15<br>• Total stamps = 28 + 15 = 28 + 2 + 13 = 30 + 13 = <strong>43 stamps</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "28 + 15 addition shown",
            "marks": "1 M"
          },
          {
            "key": "43 stamps correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Fast Math • Add 9 Strategy",
        "q": "What is an easy shortcut to add 9 to any number like 35?",
        "ans": "<strong>Explanation:</strong><br>• Since 9 is just 1 less than 10, first add 10, then subtract 1.<br>• For 35 + 9: 35 + 10 = 45; 45 - 1 = <strong>44</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Add 10, subtract 1 shortcut explained",
            "marks": "1 M"
          },
          {
            "key": "Example 35 + 9 = 44 shown",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparison Problem • Game Turns",
        "q": "In a board game, Rohit scored 24 in round 1 and 19 in round 2. Sameer scored 21 in round 1 and 23 in round 2. Who won the match?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Rohit's total = 24 + 19 = 43 points.<br>• Sameer's total = 21 + 23 = 44 points.<br>• Since 44 > 43, <strong>Sameer won the match</strong> (by 1 point).",
        "marks": 2,
        "rubric": [
          {
            "key": "Totals 43 and 44 calculated",
            "marks": "1 M"
          },
          {
            "key": "Sameer identified as winner",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) 15 + 0 = 15.<br>(b) Changing the order of numbers changes the sum (e.g. 7 + 9 is different from 9 + 7).",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. Adding zero to any number leaves it unchanged.<br>(b) <strong>False</strong>. In addition, changing the order gives the exact same sum (7 + 9 = 16 and 9 + 7 = 16).",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with commutative property explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "Name two strategies that make adding numbers in your head quick and easy.",
        "ans": "<strong>Summary:</strong><br>1. <strong>Making 10s:</strong> Look for pairs that add up to 10 (like 7+3 or 6+4).<br>2. <strong>Breaking into Tens and Ones:</strong> Add tens first, then add the ones.",
        "marks": 2,
        "rubric": [
          {
            "key": "Making 10s strategy named",
            "marks": "1 M"
          },
          {
            "key": "Breaking into tens and ones named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "What is 25 + 25 + 25?",
        "ans": "<strong>Calculation:</strong><br>• 25 + 25 = 50<br>• 50 + 25 = <strong>75</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "75 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Game • Toss the Ball",
        "q": "Animals in the forest played toss-the-ball. Rabbit scored 14 in the first turn and 7 in the second turn. Tortoise scored 11 in the first turn and 12 in the second turn. Who won the game?",
        "ans": "<strong>Calculation:</strong><br>• Rabbit's score = 14 + 7 = <strong>21 points</strong>.<br>• Tortoise's score = 11 + 12 = <strong>23 points</strong>.<br>• Since 23 > 21, the <strong>Tortoise won the game</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rabbit: 21",
            "marks": "1 M"
          },
          {
            "key": "Tortoise: 23",
            "marks": "1 M"
          },
          {
            "key": "Tortoise won",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg11",
    "num": 11,
    "unit": "Unit 11: Geometry & Lines",
    "title": "Lines and Lines",
    "subtitle": "Standing, Slanting, Sleeping and Curved Lines",
    "concepts": [
      "Identifying standing lines (vertical), slanting lines (diagonal), and sleeping lines (horizontal).",
      "Drawing lines using rulers, edge of notebooks, or freehand.",
      "Recognizing curved lines in nature, pottery, and dance postures.",
      "Constructing digital display clock numbers and letters using straight matchstick lines."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><line x1=\"60\" y1=\"30\" x2=\"60\" y2=\"85\" stroke=\"#2563eb\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"85\" x2=\"220\" y2=\"85\" stroke=\"#16a34a\" stroke-width=\"5\" stroke-linecap=\"round\"/><line x1=\"280\" y1=\"85\" x2=\"330\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"5\" stroke-linecap=\"round\"/><path d=\"M 390 85 Q 430 20 470 85\" fill=\"none\" stroke=\"#9333ea\" stroke-width=\"5\" stroke-linecap=\"round\"/><text x=\"60\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Standing</text><text x=\"190\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Sleeping</text><text x=\"305\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">Slanting</text><text x=\"430\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#7e22ce\" text-anchor=\"middle\">Curved</text></svg>",
    "cbq": {
      "title": "Cricket Ground Stumps Investigation",
      "text": "Fatima, Jashbir, and Raihana brought their cricket wickets to the school playground. Fatima fixed her stump straight upright in the ground. Jashbir leaned his stump against the boundary wall at an angle. Raihana laid her stump flat on the grass.",
      "question": "Which type of line is represented by Fatima's stump? Which by Jashbir's stump? Which by Raihana's stump? Can a cricket ball be drawn using straight lines?",
      "answer": "1. <strong>Fatima's stump:</strong> <strong>Standing line</strong> (vertical).<br>2. <strong>Jashbir's stump:</strong> <strong>Slanting line</strong> (diagonal).<br>3. <strong>Raihana's stump:</strong> <strong>Sleeping line</strong> (horizontal).<br>4. <strong>Cricket ball:</strong> <strong>No</strong>, a ball is round and must be drawn using a smooth <strong>curved line</strong>.",
      "rubric": "1 M for standing line + 1 M for slanting and sleeping lines + 1 M for curved line explanation for ball"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Three Types of Straight Lines",
        "q": "Name the three kinds of straight lines we study in Chapter 11.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Standing lines</strong> (vertical lines)<br>2. <strong>Sleeping lines</strong> (horizontal lines)<br>3. <strong>Slanting lines</strong> (diagonal / sloping lines).",
        "marks": 2,
        "rubric": [
          {
            "key": "All 3 types named correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Drawing Lines with Tools",
        "q": "In the NCERT lesson, Fatima draws lines with a ruler, Jashbir draws lines with the edge of his pencil box, and Raihana tries to draw lines freehand with her fingers. Whose lines will be the straightest?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Fatima's lines</strong> (drawn with a straight ruler) and <strong>Jashbir's lines</strong> (drawn with a straight pencil box edge) will be perfectly straight.<br>• Freehand lines drawn without a straight edge tend to wobble.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fatima and Jashbir identified",
            "marks": "1 M"
          },
          {
            "key": "Straight edge support explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Ekta's Curved Lines",
        "q": "Ekta says: 'My lines are not straight. They are curved!' How can you draw a curved line using a circular bowl or glass bangle?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Place the circular bowl or bangle flat on paper.<br>• Trace along the round outer rim with your pencil.<br>• The resulting line will be a smooth <strong>curved line</strong> (or circle).",
        "marks": 2,
        "rubric": [
          {
            "key": "Tracing along rim described",
            "marks": "1 M"
          },
          {
            "key": "Curved line result identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Digital Numbers • Matchstick Display",
        "q": "Look at the numbers on a digital clock (like 0, 1, 2, 3, 4, 5, 6, 7, 8, 9). Are these numbers made of straight lines or curved lines? How many straight lines make the number 7?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• In digital displays, all numbers are made entirely of <strong>straight lines</strong> (matchstick segments).<br>• The number 7 is made of <strong>2 straight lines</strong> (1 sleeping line on top and 1 standing line going down).",
        "marks": 2,
        "rubric": [
          {
            "key": "Straight lines identified",
            "marks": "1 M"
          },
          {
            "key": "2 lines for number 7 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Alphabet Analysis • Straight Line Letters",
        "q": "Which of the following English capital letters are made using ONLY straight lines? (A) H (B) O (C) T (D) S (E) E",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>H</strong>: 2 standing lines + 1 sleeping line (Straight).<br>• <strong>O</strong>: Curved line.<br>• <strong>T</strong>: 1 sleeping line + 1 standing line (Straight).<br>• <strong>S</strong>: Curved line.<br>• <strong>E</strong>: 1 standing line + 3 sleeping lines (Straight).<br>• Letters with only straight lines: <strong>H, T, and E</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "H identified",
            "marks": "1 M"
          },
          {
            "key": "T identified",
            "marks": "1 M"
          },
          {
            "key": "E identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Alphabet Analysis • Curved Line Letters",
        "q": "Name two English capital letters that have ONLY curved lines, and two that have BOTH straight and curved lines.",
        "ans": "<strong>Answers:</strong><br>1. <strong>Only curved lines:</strong> <strong>C</strong> and <strong>O</strong> (or S).<br>2. <strong>Both straight and curved lines:</strong> <strong>D</strong> (1 standing straight line + 1 curve) and <strong>B</strong> (1 standing straight line + 2 curves) or <strong>P</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Only curved: C, O",
            "marks": "1 M"
          },
          {
            "key": "Both: D, B, P",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Dance & Body Postures",
        "q": "In classical Indian dance (like Bharatanatyam or Odissi), how do dancers use straight and curved lines with their arms and legs?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Dancers stretch their arms straight out horizontally (sleeping lines) or lift them upright (standing lines).<br>• They bend their wrists, mudras (fingers), and torso into graceful sweeping <strong>curved lines</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Arms / legs straight line postures described",
            "marks": "1 M"
          },
          {
            "key": "Wrists / body curved line postures described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Traffic Police Officer Signals",
        "q": "When a traffic police officer directs cars at a road intersection, does he use straight arm lines or curved arm lines? Explain.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A traffic police officer uses sharp, clear <strong>straight lines</strong> (extending an arm horizontally as a sleeping line to stop traffic or raising an arm vertically as a standing line).<br>• Clear straight gestures are easily seen by drivers from far away.",
        "marks": 2,
        "rubric": [
          {
            "key": "Straight arm lines identified",
            "marks": "1 M"
          },
          {
            "key": "Clear visibility reason explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Letter 'A' Breakdown",
        "q": "How many lines are used to write capital letter 'A'? What types of lines are they?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Letter 'A' is made of <strong>3 straight lines</strong>:<br>1. Two <strong>slanting lines</strong> (sloping inwards from bottom to top).<br>2. One <strong>sleeping line</strong> (across the middle).",
        "marks": 2,
        "rubric": [
          {
            "key": "3 lines count correct",
            "marks": "1 M"
          },
          {
            "key": "Two slanting + one sleeping identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Everyday Objects • Ladder",
        "q": "Look at a wooden ladder. What kind of lines form the two long sides? What kind of lines form the climbing rungs/steps?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The two long sides are <strong>standing lines</strong> (or slanting lines when leaned against a wall).<br>• The climbing rungs/steps are <strong>sleeping lines</strong> (horizontal bars).",
        "marks": 2,
        "rubric": [
          {
            "key": "Sides: standing / slanting",
            "marks": "1 M"
          },
          {
            "key": "Rungs: sleeping lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Railway Track Lines",
        "q": "What kind of straight lines do the parallel steel rails of a straight railway track represent? What about the wooden/concrete sleepers beneath them?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The long steel rails running forward represent <strong>standing (or parallel straight) lines</strong>.<br>• The cross-sleepers laid beneath them represent <strong>sleeping lines</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rails: standing / straight lines",
            "marks": "1 M"
          },
          {
            "key": "Sleepers: sleeping lines",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Matchstick Geometry",
        "q": "How many matchsticks are needed to make:<br>(a) A triangle<br>(b) A square",
        "ans": "<strong>Answers:</strong><br>(a) A triangle has 3 sides = <strong>3 matchsticks</strong>.<br>(b) A square has 4 equal sides = <strong>4 matchsticks</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 3 matchsticks",
            "marks": "1 M"
          },
          {
            "key": "(b) 4 matchsticks",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Natural Curves • Rainbow",
        "q": "Is a rainbow made of straight lines or curved lines? How many colors does it have?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A rainbow is made of great <strong>curved lines</strong> (arcs across the sky).<br>• It has <strong>7 beautiful colors</strong> (VIBGYOR).",
        "marks": 2,
        "rubric": [
          {
            "key": "Curved lines identified",
            "marks": "1 M"
          },
          {
            "key": "7 colors stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Line Orientation Challenge",
        "q": "Can a sleeping line become a standing line? How?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• <strong>Yes</strong>, by rotating the object or paper by 90 degrees (a quarter turn).<br>• For example, a pencil lying flat (sleeping) becomes a standing line when picked up and held vertically upright.",
        "marks": 2,
        "rubric": [
          {
            "key": "Affirmative confirmation (Yes)",
            "marks": "1 M"
          },
          {
            "key": "Rotation / holding upright explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Drawing Exercise • Smiley Face",
        "q": "To draw a smiling face on paper, which type of line is used for the big round head? Which type for the smile?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The round head is drawn using a closed <strong>curved line</strong> (circle).<br>• The smile is drawn using an upward-curving <strong>curved line</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Head: closed curve / circle",
            "marks": "1 M"
          },
          {
            "key": "Smile: upward curved line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A ruler is used to draw curved lines.<br>(b) Letter 'M' is made using 4 straight lines.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>False</strong>. A ruler has straight edges and is used to draw straight lines, not curved lines.<br>(b) <strong>True</strong>. Letter 'M' consists of 2 standing lines and 2 slanting lines (4 straight lines).",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) False with reason",
            "marks": "1 M"
          },
          {
            "key": "(b) True",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Summary",
        "q": "Summarize the different types of lines and their appearance.",
        "ans": "<strong>Summary:</strong><br>1. <strong>Standing line:</strong> Straight upright (|).<br>2. <strong>Sleeping line:</strong> Straight flat horizontal (—).<br>3. <strong>Slanting line:</strong> Straight sloping (/ or \\).<br>4. <strong>Curved line:</strong> Smoothly rounded without corners (~ or arc).",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 types clearly defined and described",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "How many straight lines are in capital letter 'X'?",
        "ans": "<strong>Answer:</strong><br>• Letter 'X' has <strong>2 slanting straight lines</strong> crossing each other in the middle.",
        "marks": 1,
        "rubric": [
          {
            "key": "2 slanting lines correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Straight and Curved Lines",
        "q": "Fatima drew a standing line, Jashbir drew a slanting line, and Rai drew a sleeping line. Draw symbols for each line and give one real-life example of a curved line.",
        "ans": "<strong>Answer:</strong><br>• Standing line: <strong>Vertical (|)</strong> — e.g. Flagpole<br>• Slanting line: <strong>Diagonal (/)</strong> — e.g. Slide<br>• Sleeping line: <strong>Horizontal (—)</strong> — e.g. Bench<br>• Curved line: <strong>Arc (⌒)</strong> — e.g. Rainbow or rim of a plate.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three straight line orientations",
            "marks": "1.5 M"
          },
          {
            "key": "Curved line example",
            "marks": "1.5 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg12",
    "num": 12,
    "unit": "Unit 12: Operations (Addition & Subtraction)",
    "title": "Give and Take",
    "subtitle": "Necklace of 10 Beads, Regrouping, Carrying & Borrowing",
    "concepts": [
      "Regrouping ones into tens when adding: 10 loose beads make 1 new necklace.",
      "Regrouping tens into ones when subtracting: untying 1 necklace to get 10 loose beads.",
      "Solving 2-digit addition with carry-over (e.g. 17 + 24 = 41).",
      "Solving 2-digit subtraction with borrowing (e.g. 35 - 17 = 18).",
      "Real-world canteen bills and money transactions."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><circle cx=\"90\" cy=\"55\" r=\"28\" fill=\"none\" stroke=\"#059669\" stroke-width=\"4\"/><circle cx=\"90\" cy=\"27\" r=\"5\" fill=\"#10b981\"/><circle cx=\"106\" cy=\"32\" r=\"5\" fill=\"#10b981\"/><circle cx=\"118\" cy=\"45\" r=\"5\" fill=\"#10b981\"/><circle cx=\"118\" cy=\"65\" r=\"5\" fill=\"#10b981\"/><circle cx=\"106\" cy=\"78\" r=\"5\" fill=\"#10b981\"/><circle cx=\"90\" cy=\"83\" r=\"5\" fill=\"#10b981\"/><circle cx=\"74\" cy=\"78\" r=\"5\" fill=\"#10b981\"/><circle cx=\"62\" cy=\"65\" r=\"5\" fill=\"#10b981\"/><circle cx=\"62\" cy=\"45\" r=\"5\" fill=\"#10b981\"/><circle cx=\"74\" cy=\"32\" r=\"5\" fill=\"#10b981\"/><circle cx=\"150\" cy=\"45\" r=\"6\" fill=\"#3b82f6\"/><circle cx=\"150\" cy=\"65\" r=\"6\" fill=\"#3b82f6\"/><text x=\"280\" y=\"60\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#065f46\">1 Necklace of 10 + 2 Loose = 12 Beads</text><text x=\"280\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#047857\">10 Loose Beads = 1 Necklace (Regroup)</text></svg>",
    "cbq": {
      "title": "Simar and Reema's Bead Necklace Project",
      "text": "Children in the village craft bead necklaces. 1 necklace takes exactly 10 beads. Razia has 12 beads (1 necklace and 2 loose beads). Reema has 17 beads (1 necklace and 7 loose beads). Aarif has 24 beads (2 necklaces and 4 loose beads).",
      "question": "How many total beads do Razia and Reema have together? When they put their loose beads together, do they get enough to make a new necklace?",
      "answer": "1. <strong>Razia:</strong> 12 beads. <strong>Reema:</strong> 17 beads.<br>2. <strong>Combined beads:</strong> 12 + 17 = <strong>29 beads</strong>.<br>3. <strong>Loose beads check:</strong> 2 loose + 7 loose = 9 loose beads. Since 9 < 10, they need 1 more bead to make a new necklace (so they have 2 necklaces and 9 loose beads).",
      "rubric": "1 M for total beads (29) + 1 M for loose beads analysis (9) + 1 M for new necklace condition explanation"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Bead Necklace Addition",
        "q": "Razia has 12 beads (1 necklace and 2 loose). Sonu has 35 beads (3 necklaces and 5 loose). How many beads do they have altogether?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Tens (necklaces): 1 + 3 = 4 necklaces (40 beads)<br>• Ones (loose beads): 2 + 5 = 7 beads<br>• Total beads = 40 + 7 = <strong>47 beads</strong> (4 necklaces and 7 loose beads).",
        "marks": 2,
        "rubric": [
          {
            "key": "Tens and ones addition shown",
            "marks": "1 M"
          },
          {
            "key": "Total 47 beads correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Regrouping Loose Beads",
        "q": "Aarif has 24 beads and Razia has 12 beads. How many beads do they have together?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Add ones: 4 + 2 = 6 loose beads<br>• Add tens: 2 + 1 = 3 necklaces<br>• Total = <strong>36 beads</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "24 + 12 step shown",
            "marks": "1 M"
          },
          {
            "key": "36 beads correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Addition with Carrying Over",
        "q": "Reema has 17 beads and Aarif has 24 beads.<br>(a) How many loose beads are there in all?<br>(b) Can they make a new necklace from the loose beads?<br>(c) What is their total bead count?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>(a) Loose beads: 7 + 4 = 11 loose beads.<br>(b) Yes, 10 of these 11 loose beads make <strong>1 new necklace</strong>, leaving 1 loose bead.<br>(c) Necklaces: 1 (Reema) + 2 (Aarif) + 1 (new) = 4 necklaces.<br>Total beads = 40 + 1 = <strong>41 beads</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Loose beads: 11",
            "marks": "1 M"
          },
          {
            "key": "Regrouping 10 beads into 1 necklace",
            "marks": "1 M"
          },
          {
            "key": "Total 41 beads",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • How Many More Beads?",
        "q": "Aarif has 24 beads and Razia has 12 beads. How many more beads does Aarif have than Razia?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Aarif's beads = 24<br>• Razia's beads = 12<br>• Difference = 24 - 12 = <strong>12 more beads</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 24 - 12 shown",
            "marks": "1 M"
          },
          {
            "key": "12 beads correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtraction with Borrowing",
        "q": "Simar has 31 beads (3 necklaces and 1 loose bead). She gives 17 beads to Reema. How many beads are left with Simar?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Simar has 1 loose bead and needs to give 7 loose beads. She cannot give 7 from 1.<br>2. She unties 1 necklace (10 beads). Now she has 2 necklaces and (10 + 1) = 11 loose beads.<br>3. Subtract loose beads: 11 - 7 = 4 loose beads.<br>4. Subtract necklaces: 2 - 1 = 1 necklace.<br>5. Beads remaining = 10 + 4 = <strong>14 beads</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Untying 1 necklace into 10 beads explained",
            "marks": "1 M"
          },
          {
            "key": "Loose subtraction 11 - 7 = 4",
            "marks": "1 M"
          },
          {
            "key": "Final answer 14 beads correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT Story • Canteen Bill Problem",
        "q": "At the school snack bar, Dosa costs ₹23 and Uttpam costs ₹28. If Aman orders both, what is his total bill?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Cost of Dosa = ₹23<br>• Cost of Uttpam = ₹28<br>• Total = 23 + 28 = 23 + 20 + 8 = 43 + 8 = <strong>₹51</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "23 + 28 column addition shown",
            "marks": "1 M"
          },
          {
            "key": "Total bill ₹51 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Canteen Bill • Change Calculation",
        "q": "Aman's canteen bill is ₹51. He hands a ₹100 note to the cashier. How much change will he get back?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Money given = ₹100<br>• Bill amount = ₹51<br>• Change back = 100 - 51 = <strong>₹49</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 100 - 51 shown",
            "marks": "1 M"
          },
          {
            "key": "Change ₹49 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Problem • Column Addition",
        "q": "Solve by column addition with carry-over:<br>&nbsp;&nbsp;4 7<br>+ 2 6<br>-----",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Ones column: 7 + 6 = 13 (Write 3 in ones place, carry 1 ten to tens column).<br>• Tens column: 4 + 2 + 1 (carried) = 7 tens.<br>• Answer = <strong>73</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Carrying 1 ten shown",
            "marks": "1 M"
          },
          {
            "key": "Sum 73 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Practice Problem • Column Subtraction",
        "q": "Solve by column subtraction with borrowing:<br>&nbsp;&nbsp;6 2<br>- 2 8<br>-----",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Ones column: 2 is smaller than 8. Borrow 1 ten from 6 tens (leaving 5 tens).<br>• 2 becomes 12. 12 - 8 = 4.<br>• Tens column: 5 - 2 = 3.<br>• Answer = <strong>34</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Borrowing step shown (12 - 8)",
            "marks": "1 M"
          },
          {
            "key": "Answer 34 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Mango Tree",
        "q": "A gardener picked 38 ripe mangoes in the morning and 27 ripe mangoes in the afternoon. How many ripe mangoes did he pick in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Morning mangoes = 38<br>• Afternoon mangoes = 27<br>• Total mangoes = 38 + 27 = 38 + 2 + 25 = 40 + 25 = <strong>65 mangoes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 38 + 27 shown",
            "marks": "1 M"
          },
          {
            "key": "Total 65 mangoes correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Cricket Bats",
        "q": "A sports shop had 54 cricket balls. On Sunday, 29 cricket balls were sold. How many cricket balls were left in the shop?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Initial cricket balls = 54<br>• Balls sold = 29<br>• Remaining balls = 54 - 29 = 54 - 30 + 1 = 24 + 1 = <strong>25 cricket balls</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 54 - 29 shown",
            "marks": "1 M"
          },
          {
            "key": "25 balls left correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Bead Necklace Thinking",
        "q": "How many necklaces of 10 beads can you make from 60 beads? Will any beads be left loose?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 60 ÷ 10 = <strong>6 complete necklaces</strong>.<br>• There are <strong>0 loose beads</strong> left.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 necklaces identified",
            "marks": "1 M"
          },
          {
            "key": "0 loose beads confirmed",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Check • Addition Check with Subtraction",
        "q": "If 34 + 25 = 59, how can you check this using subtraction?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Subtract one addend from the total sum:<br>• 59 - 25 = 34 (or 59 - 34 = 25).<br>• Since the difference equals the other number, the addition is confirmed correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Inverse operation 59 - 25 = 34 shown",
            "marks": "1 M"
          },
          {
            "key": "Verification rationale explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Regrouping Rule in Words",
        "q": "What do we do when the sum of digits in the ones place is 10 or more?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• When the ones place sum is 10 or more, we <strong>regroup 10 ones into 1 ten</strong>.<br>• We write the remaining ones in the ones place and carry over the 1 ten to the tens place.",
        "marks": 2,
        "rubric": [
          {
            "key": "Regroup 10 ones into 1 ten explained",
            "marks": "1 M"
          },
          {
            "key": "Carry over to tens place described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Bus Passengers",
        "q": "A bus starts with 36 passengers. At the next stop, 15 passengers get off and 8 new passengers get on. How many passengers are in the bus now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. After 15 get off: 36 - 15 = 21 passengers.<br>2. After 8 get on: 21 + 8 = <strong>29 passengers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 36 - 15 = 21 shown",
            "marks": "1 M"
          },
          {
            "key": "Addition 21 + 8 = 29 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) 50 - 25 = 25.<br>(b) In subtraction, we can borrow 1 ten, which is equal to 10 ones.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. 25 + 25 = 50, so 50 - 25 = 25.<br>(b) <strong>True</strong>. 1 ten always equals 10 ones.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) True with place value explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "Why is the chapter called 'Give and Take'?",
        "ans": "<strong>Summary:</strong><br>• 'Give' represents giving away items or subtracting.<br>• 'Take' represents receiving items or adding.<br>• Together, addition and subtraction model all give-and-take exchanges in daily life, shopping, and games.",
        "marks": 2,
        "rubric": [
          {
            "key": "Give = subtraction connection",
            "marks": "1 M"
          },
          {
            "key": "Take = addition connection",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "What is 40 - 15?",
        "ans": "<strong>Calculation:</strong><br>• 40 - 10 = 30<br>• 30 - 5 = <strong>25</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "25 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Beads and Necklaces",
        "q": "Razia has 12 beads (1 necklace of 10 and 2 loose beads). Reema has 17 beads (1 necklace of 10 and 7 loose beads). How many necklaces and loose beads do they have together?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Loose beads together = 2 + 7 = 9 loose beads.<br>• Necklaces together = 1 + 1 = 2 necklaces (20 beads).<br>• Total beads = 29 beads (<strong>2 necklaces of ten and 9 loose beads</strong>).",
        "marks": 2,
        "rubric": [
          {
            "key": "Loose beads: 9",
            "marks": "1 M"
          },
          {
            "key": "Total 29 beads / 2 necklaces",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg13",
    "num": 13,
    "unit": "Unit 13: Measurement of Length",
    "title": "The Longest Step",
    "subtitle": "Footsteps, Handspans, Fingers, Cat & Mouse Distance Puzzle",
    "concepts": [
      "Measuring length and distance using body parts (fingers, handspan, pace/footsteps).",
      "Comparing distances: who takes the longest step (deer vs rabbit vs elephant).",
      "The Cat, Rat, and Milk Bowl puzzle: estimating who reaches the milk first.",
      "Understanding why non-standard body measurements differ between a child and an adult."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"60\" cy=\"60\" r=\"18\" fill=\"#3b82f6\"/><text x=\"60\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Rat</text><circle cx=\"250\" cy=\"60\" r=\"24\" fill=\"#f59e0b\"/><text x=\"250\" y=\"65\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Milk</text><circle cx=\"440\" cy=\"60\" r=\"22\" fill=\"#ef4444\"/><text x=\"440\" y=\"65\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Cat</text><line x1=\"85\" y1=\"60\" x2=\"220\" y2=\"60\" stroke=\"#3b82f6\" stroke-width=\"3\" stroke-dasharray=\"4,4\"/><text x=\"150\" y=\"50\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">3 Fingers Away</text><line x1=\"280\" y1=\"60\" x2=\"410\" y2=\"60\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-dasharray=\"4,4\"/><text x=\"350\" y=\"50\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">5 Fingers Away</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Rat is Closer to Milk than the Cat!</text></svg>",
    "cbq": {
      "title": "Cat and Mouse Distance Investigation",
      "text": "In the NCERT picture, a bowl of fresh milk sits between a cat and a little mouse. A girl uses her fingers to measure distance on the page. From the rat's nose to the milk bowl is 3 fingers. From the cat's paw to the milk bowl is 5 fingers. The rat is 2 fingers away from its underground hole.",
      "question": "Who is closer to the milk bowl: the cat or the rat? Will the rat reach the milk bowl or its safety hole first? What will happen if the cat runs twice as fast?",
      "answer": "1. The <strong>rat</strong> is closer to the milk bowl (3 fingers vs 5 fingers for the cat).<br>2. The rat will reach its <strong>hole first</strong> because the hole is only 2 fingers away.<br>3. If the cat runs twice as fast, it covers distance rapidly, but the smart rat can quickly jump into its hole 2 fingers away and stay safe!",
      "rubric": "1 M for rat closer to milk + 1 M for hole distance comparison + 1 M for cat speed reasoning"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Animal Steps",
        "q": "Three friends — an elephant, a deer, and a rabbit — walk in a park. Who takes the longest step? Who takes the shortest step?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The <strong>elephant</strong> has huge long legs and takes the <strong>longest step</strong>.<br>• The <strong>rabbit</strong> hops with small bounds and takes the <strong>shortest step</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Elephant: longest step",
            "marks": "1 M"
          },
          {
            "key": "Rabbit: shortest step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring with Handspans",
        "q": "Rajat measures the classroom study desk using his handspan. His desk is 6 handspans long. His teacher measures the same desk and finds it is 4 handspans long. Why did the teacher get a smaller count?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The teacher is an adult, so her handspan is <strong>much bigger</strong> than Rajat's child handspan.<br>• Because the teacher's handspan is longer, fewer handspans are needed to cover the same length.",
        "marks": 2,
        "rubric": [
          {
            "key": "Teacher's handspan is larger explained",
            "marks": "1 M"
          },
          {
            "key": "Fewer units needed for longer measure",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring with Steps (Paces)",
        "q": "How can you measure the distance between the classroom door and the teacher's blackboard without using a measuring tape?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• You can measure it by walking normally and counting your <strong>footsteps (paces)</strong> heel-to-toe from the door to the blackboard.",
        "marks": 2,
        "rubric": [
          {
            "key": "Footsteps / paces method described",
            "marks": "1 M"
          },
          {
            "key": "Counting from start to end point explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Measuring School Items",
        "q": "Which body unit (fingers, handspan, or footsteps) is most suitable to measure:<br>(a) The thickness of your pencil<br>(b) The length of your school math book<br>(c) The length of your school playground",
        "ans": "<strong>Answers:</strong><br>(a) Thickness of a pencil: <strong>Fingers</strong>.<br>(b) Length of a math book: <strong>Handspan</strong>.<br>(c) Length of a playground: <strong>Footsteps (paces)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) Fingers",
            "marks": "1 M"
          },
          {
            "key": "(b) Handspan",
            "marks": "1 M"
          },
          {
            "key": "(c) Footsteps",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Body Proportion Investigation",
        "q": "Is your forehead longer than your palm? Measure with your fingers and compare.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Forehead height is usually about 3 to 4 fingers.<br>• Palm length is usually about 6 to 8 fingers.<br>• Therefore, the <strong>palm is longer</strong> than the forehead.",
        "marks": 2,
        "rubric": [
          {
            "key": "Finger measurement comparison",
            "marks": "1 M"
          },
          {
            "key": "Palm identified as longer",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Footprint Length Comparison",
        "q": "Who will have a longer foot: you or your father? How can you verify this at home?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Father's foot</strong> will be longer.<br>• You can verify this by standing side-by-side on paper and tracing your foot outlines, or placing your heel against your father's heel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Father's foot identified",
            "marks": "1 M"
          },
          {
            "key": "Heel-to-heel or tracing verification method",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pencil Length Drill",
        "q": "An eraser is 2 fingers long. A new wooden pencil is equal to 4 erasers placed end-to-end. How many fingers long is the pencil?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• 1 eraser = 2 fingers<br>• Pencil = 4 erasers = 4 × 2 = <strong>8 fingers long</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Multiplication 4 × 2 shown",
            "marks": "1 M"
          },
          {
            "key": "8 fingers correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ribbon Comparison",
        "q": "Priya has a red ribbon that is 5 handspans long. Sneha has a blue ribbon that is 7 handspans long (measured using Priya's hand). Whose ribbon is longer and by how many handspans?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Red ribbon = 5 handspans<br>• Blue ribbon = 7 handspans<br>• Since 7 > 5, the <strong>blue ribbon is longer</strong>.<br>• Difference = 7 - 5 = <strong>2 handspans longer</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Blue ribbon identified",
            "marks": "1 M"
          },
          {
            "key": "Difference of 2 handspans calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Cat & Mouse Puzzle Variation",
        "q": "In the cat and mouse game, if the rat is 4 steps away from the cheese and the cat is 9 steps away, how many steps head start does the rat have?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Cat distance = 9 steps<br>• Rat distance = 4 steps<br>• Head start = 9 - 4 = <strong>5 steps</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 9 - 4 shown",
            "marks": "1 M"
          },
          {
            "key": "5 steps correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Activity • Nose to Ear",
        "q": "Guess the distance between your nose and your ear in fingers. Check with your hand.",
        "ans": "<strong>Answer:</strong><br>• The distance from the tip of the nose to the ear in a 7-year-old child is approximately <strong>4 to 6 fingers</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Reasonable estimate (4-6 fingers)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Why Standard Units Matter",
        "q": "Why can carpenters and tailor uncles not use only handspans to make tables and shirts?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Everyone's hands and bodies are different sizes.<br>• If a tailor used handspans, clothes would turn out too big or too small. They use a standard <strong>measuring tape</strong> (centimetres/metres) so measurements are exact for everyone.",
        "marks": 2,
        "rubric": [
          {
            "key": "Variation in body sizes explained",
            "marks": "1 M"
          },
          {
            "key": "Need for standard measuring tape explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Walking Race • Steps Counting",
        "q": "Tarun walks across the verandah in 18 steps. His younger sister walks the same verandah in 26 steps. Who took more steps, and why?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• The <strong>younger sister</strong> took more steps (26 steps vs 18 steps).<br>• <strong>Reason:</strong> Her legs are shorter, so each of her steps covers a smaller distance, requiring more steps to cross the verandah.",
        "marks": 2,
        "rubric": [
          {
            "key": "Younger sister identified",
            "marks": "1 M"
          },
          {
            "key": "Shorter stride length reason provided",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A handspan is the distance between the tip of the thumb and the tip of the little finger when stretched open.<br>(b) An ant takes longer steps than a dog.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. That is the exact anatomical definition of a handspan.<br>(b) <strong>False</strong>. An ant has tiny legs and takes microscopically small steps compared to a dog.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with reason",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What have you learned about measuring distances in Chapter 13?",
        "ans": "<strong>Summary:</strong><br>1. Distances can be measured using natural units like fingers, handspans, and footsteps.<br>2. Larger objects take fewer measurement units; smaller units take more counts.<br>3. Because human body sizes vary, standard tools like rulers and measuring tapes ensure universal precision.",
        "marks": 3,
        "rubric": [
          {
            "key": "Non-standard units named",
            "marks": "1 M"
          },
          {
            "key": "Inverse unit-count relationship",
            "marks": "1 M"
          },
          {
            "key": "Need for standard units",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "Which is longer: 10 finger widths or 1 full handspan?",
        "ans": "<strong>Answer:</strong><br>• <strong>1 full handspan</strong> is generally longer than 10 finger widths placed side-by-side.",
        "marks": 1,
        "rubric": [
          {
            "key": "1 full handspan identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Story • Step Race",
        "q": "An elephant, a deer, and a rabbit had a walking race across the clearing. Who took the longest step and who took the shortest step?",
        "ans": "<strong>Answer:</strong><br>• The <strong>elephant took the longest step</strong> because of its massive legs.<br>• The <strong>rabbit took the shortest step</strong> among the three.",
        "marks": 2,
        "rubric": [
          {
            "key": "Elephant longest step",
            "marks": "1 M"
          },
          {
            "key": "Rabbit shortest step",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Measurement • Handspan Desk Test",
        "q": "Rajat measures his study table using his handspan. It measures 8 handspans long. His father measures the same table and gets 5 handspans. Why are their counts different?",
        "ans": "<strong>Answer:</strong><br>• Handspan is a non-standard unit of length. Father's hand is larger and longer than Rajat's small hand, so <strong>fewer adult handspans are needed to cover the same length</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Handspan varies by person's size",
            "marks": "1 M"
          },
          {
            "key": "Father's hand is bigger",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Finger Distance",
        "q": "Measure the distance between your nose and your chin using your fingers. How many fingers long is it?",
        "ans": "<strong>Answer:</strong><br>• For a Class 2 child, the distance between nose and chin is usually about <strong>3 to 4 fingers long</strong>.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Realistic 3-4 fingers measure",
            "marks": "1.5 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg14",
    "num": 14,
    "unit": "Unit 14: Addition & Subtraction (Contextual)",
    "title": "Birds Come, Birds Go",
    "subtitle": "Token Cards, Migratory Birds, Bus Passengers & Cricket Century",
    "concepts": [
      "Using token cards [10] (yellow square) and [1] (blue triangle) for mental operations.",
      "Solving addition when new birds fly into a lake flock.",
      "Solving subtraction when groups of birds fly away.",
      "Cricket score calculation: finding how many runs needed to complete 100 runs (a century)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><rect x=\"60\" y=\"35\" width=\"45\" height=\"45\" fill=\"#eab308\" rx=\"4\"/><text x=\"82\" y=\"62\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">10</text><rect x=\"115\" y=\"35\" width=\"45\" height=\"45\" fill=\"#eab308\" rx=\"4\"/><text x=\"137\" y=\"62\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">10</text><polygon points=\"190,40 175,75 205,75\" fill=\"#3b82f6\"/><text x=\"190\" y=\"70\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">1</text><polygon points=\"225,40 210,75 240,75\" fill=\"#3b82f6\"/><text x=\"225\" y=\"70\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">1</text><polygon points=\"260,40 245,75 275,75\" fill=\"#3b82f6\"/><text x=\"260\" y=\"70\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">1</text><text x=\"370\" y=\"65\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\">2 Tens + 3 Ones = 23 Birds</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Token Card System for Rapid Regrouping</text></svg>",
    "cbq": {
      "title": "Sultanpur Lake Bird Sanctuary Census",
      "text": "During winter, migratory swans, cranes, and storks fly to the lake. In the morning, children count 25 swans and 18 cranes. By late afternoon, 12 swans fly away to feed in nearby fields, while 7 new cranes arrive.",
      "question": "How many total birds were at the lake in the morning? How many swans remained after 12 flew away? How many cranes were there after 7 new ones arrived?",
      "answer": "1. <strong>Morning total:</strong> 25 + 18 = <strong>43 birds</strong>.<br>2. <strong>Remaining swans:</strong> 25 - 12 = <strong>13 swans</strong>.<br>3. <strong>Cranes count:</strong> 18 + 7 = <strong>25 cranes</strong>.<br>4. <strong>Late afternoon total:</strong> 13 swans + 25 cranes = 38 birds.",
      "rubric": "1 M for morning total (43) + 1 M for remaining swans (13) + 1 M for updated cranes (25)"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Token Card Representation",
        "q": "In the Flute Man counting method, draw or describe the token cards for 34 birds. (Square [10] = 10, Triangle [1] = 1).",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In 34, there are 3 tens and 4 ones.<br>• Flute Man uses: <strong>Three [10] cards</strong> and <strong>four [1] cards</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 cards of [10] identified",
            "marks": "1 M"
          },
          {
            "key": "4 cards of [1] identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • New Birds Arriving",
        "q": "There were 16 birds sitting on a tree branch. A flock of 25 more birds arrived. How many birds are there now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Initial birds = 16 (1 ten and 6 ones)<br>• Arrived birds = 25 (2 tens and 5 ones)<br>• Add ones: 6 + 5 = 11 ones (Regroup 10 ones into 1 ten, leaving 1 one).<br>• Add tens: 1 + 2 + 1 = 4 tens.<br>• Total = 40 + 1 = <strong>41 birds</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ones addition and regrouping shown",
            "marks": "1 M"
          },
          {
            "key": "Tens addition shown",
            "marks": "1 M"
          },
          {
            "key": "Final sum 41 birds correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Birds Flying Away",
        "q": "There were 35 birds on a lake. In the evening, 17 birds flew away. How many birds were left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total birds = 35 (3 tens and 5 ones)<br>• Flew away = 17 (1 ten and 7 ones)<br>• 5 is smaller than 7, so borrow 1 ten (leaving 2 tens). 5 becomes 15 ones.<br>• Ones: 15 - 7 = 8.<br>• Tens: 2 - 1 = 1.<br>• Remaining birds = <strong>18 birds</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Borrowing step shown (15 - 7 = 8)",
            "marks": "1 M"
          },
          {
            "key": "Tens subtraction (2 - 1 = 1)",
            "marks": "1 M"
          },
          {
            "key": "18 birds remaining correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Cricket Score • Century Calculation",
        "q": "In a cricket match, Rahul is batting on 78 runs. How many more runs does he need to complete a century (100 runs)?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Target = 100 runs (Century)<br>• Current score = 78 runs<br>• Runs needed = 100 - 78 = 100 - 70 - 8 = 30 - 8 = <strong>22 runs</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "100 - 78 subtraction shown",
            "marks": "1 M"
          },
          {
            "key": "22 runs correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Cricket Score • Half Century Check",
        "q": "Rohit scored 46 runs. Did he complete a half-century (50 runs)? How many runs was he short by?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Half-century = 50 runs.<br>• Rohit's score = 46 runs.<br>• Since 46 < 50, he <strong>did not complete</strong> a half-century.<br>• Shortage = 50 - 46 = <strong>4 runs short</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Negative confirmation (did not complete)",
            "marks": "1 M"
          },
          {
            "key": "Shortage of 4 runs calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Bus Passengers Word Problem",
        "q": "A bus had 48 passengers. At the red light, 19 passengers got down. How many passengers remained in the bus?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total passengers = 48<br>• Passengers got down = 19<br>• Remaining = 48 - 19 = 48 - 20 + 1 = 28 + 1 = <strong>29 passengers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "48 - 19 shown",
            "marks": "1 M"
          },
          {
            "key": "29 passengers correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Token Card Addition",
        "q": "Solve using token cards: 28 + 14 = ___ tens + ___ ones.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 28 = 2 tens + 8 ones<br>• 14 = 1 ten + 4 ones<br>• Ones: 8 + 4 = 12 ones = 1 ten + 2 ones.<br>• Tens: 2 + 1 + 1 = 4 tens.<br>• Total = <strong>4 tens + 2 ones = 42</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Regrouping step shown",
            "marks": "1 M"
          },
          {
            "key": "Final answer 42 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Garden Roses",
        "q": "A rose bush has 34 red roses and 29 yellow roses. How many roses are on the bush altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Red roses = 34<br>• Yellow roses = 29<br>• Total roses = 34 + 29 = 34 + 30 - 1 = 64 - 1 = <strong>63 roses</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 34 + 29 shown",
            "marks": "1 M"
          },
          {
            "key": "63 roses correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pencil Packets Word Problem",
        "q": "A school store has 72 pencils. If they distribute 38 pencils to Class 2 students, how many pencils are left in the store?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total pencils = 72<br>• Pencils distributed = 38<br>• Pencils left = 72 - 38 = 72 - 40 + 2 = 32 + 2 = <strong>34 pencils</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 72 - 38 shown",
            "marks": "1 M"
          },
          {
            "key": "34 pencils left correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Near Tens Strategy",
        "q": "Subtract 19 from 53 using mental math. Explain your thought process.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• 19 is 1 less than 20.<br>• First subtract 20: 53 - 20 = 33.<br>• Since we subtracted 1 extra, add 1 back: 33 + 1 = <strong>34</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Near-tens mental strategy explained",
            "marks": "1 M"
          },
          {
            "key": "34 correct answer",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparative Problem • Bird Watcher",
        "q": "Pooja spotted 27 pigeons and 19 parrots in the city garden. How many more pigeons did she see than parrots?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Pigeons = 27<br>• Parrots = 19<br>• Difference = 27 - 19 = <strong>8 more pigeons</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 27 - 19 shown",
            "marks": "1 M"
          },
          {
            "key": "8 pigeons difference correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Token Card Subtraction",
        "q": "If you have five [10] cards and three [1] cards (53), and you cross out two [10] cards and eight [1] cards (28), what cards are left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Need to take 8 ones from 3 ones: exchange one [10] card for ten [1] cards.<br>• Now you have four [10] cards and thirteen [1] cards.<br>• Remove eight [1] cards: 13 - 8 = five [1] cards left.<br>• Remove two [10] cards: 4 - 2 = two [10] cards left.<br>• Value remaining = (2 × 10) + 5 = <strong>25</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Exchange of [10] card for ten [1] cards shown",
            "marks": "1 M"
          },
          {
            "key": "Result 25 verified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) In cricket, 1 century = 100 runs.<br>(b) 60 - 25 = 45.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. A century is exactly 100 runs.<br>(b) <strong>False</strong>. 60 - 25 = 35 (not 45).",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with 35",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "How does the story 'Birds Come, Birds Go' help us understand real-world math?",
        "ans": "<strong>Summary:</strong><br>• Real populations (like birds, passengers, or sports scores) constantly increase (birds arrive/add) and decrease (birds leave/subtract).<br>• Using token cards allows us to handle 2-digit regrouping visually before doing abstract paper arithmetic.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition and subtraction dynamics explained",
            "marks": "1 M"
          },
          {
            "key": "Visual token card utility explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "What is 85 - 35?",
        "ans": "<strong>Calculation:</strong><br>• 85 - 30 = 55<br>• 55 - 5 = <strong>50</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "50 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Story • Tree Tokens",
        "q": "There were 25 birds on a tree. In the morning, 16 more birds flew in. How many birds are there on the tree now? Solve using 10s and 1s tokens.",
        "ans": "<strong>Calculation:</strong><br>• 25 = 2 tens + 5 ones.<br>• 16 = 1 ten + 6 ones.<br>• Add ones: 5 + 6 = 11 ones (1 ten + 1 one).<br>• Add tens: 2 + 1 + 1 = 4 tens.<br>• Total = <strong>41 birds</strong> on the tree.",
        "marks": 2.5,
        "rubric": [
          {
            "key": "Token regrouping method",
            "marks": "1 M"
          },
          {
            "key": "Final count: 41 birds",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Problem • Bus Passengers",
        "q": "A school bus had 35 children. At the first stop, 12 children got down. How many children are still in the bus?",
        "ans": "<strong>Calculation:</strong><br>• Initial children = 35<br>• Children who got down = 12<br>• Remaining children = 35 - 12 = <strong>23 children</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 35 - 12",
            "marks": "1 M"
          },
          {
            "key": "23 children remaining",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Regrouping Challenge",
        "q": "Subtract 18 from 42 using expanded form.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 42 = 30 + 12 (borrowing 10).<br>• 18 = 10 + 8.<br>• (12 - 8) + (30 - 10) = 4 + 20 = <strong>24</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Borrowing/regrouping step",
            "marks": "1 M"
          },
          {
            "key": "Answer: 24",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mmg15",
    "num": 15,
    "unit": "Unit 15: Data Handling",
    "title": "How Many Ponytails?",
    "subtitle": "Counting Hairstyles, Shoe Colors, Drinking Water & Fruit Charts",
    "concepts": [
      "Collecting, organizing, and recording survey data from classmates.",
      "Categorizing hairstyles (1 ponytail, 2 ponytails, short hair).",
      "Reading tally tables and pictographs for favorite fruits and shoe colors.",
      "Comparing data categories: identifying most, least, and finding differences."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"10\"/><rect x=\"60\" y=\"30\" width=\"60\" height=\"60\" fill=\"#ec4899\" rx=\"4\"/><text x=\"90\" y=\"65\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">8</text><text x=\"90\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">2 Ponytails</text><rect x=\"180\" y=\"45\" width=\"60\" height=\"45\" fill=\"#a855f7\" rx=\"4\"/><text x=\"210\" y=\"75\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">6</text><text x=\"210\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#6b21a8\" text-anchor=\"middle\">1 Ponytail</text><rect x=\"300\" y=\"20\" width=\"60\" height=\"70\" fill=\"#3b82f6\" rx=\"4\"/><text x=\"330\" y=\"60\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">14</text><text x=\"330\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Short Hair</text><text x=\"430\" y=\"60\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\">Total = 28</text></svg>",
    "cbq": {
      "title": "Class 2 Favorite Fruit Survey",
      "text": "The class teacher conducted a survey on children's favorite fruits: 12 children like Mango, 8 like Banana, 5 like Apple, and 7 like Orange.",
      "question": "Which fruit is liked the most? Which fruit is liked the least? How many more children like Mango than Banana? How many children participated in the survey?",
      "answer": "1. <strong>Most liked fruit:</strong> <strong>Mango</strong> (12 children).<br>2. <strong>Least liked fruit:</strong> <strong>Apple</strong> (5 children).<br>3. <strong>Difference (Mango vs Banana):</strong> 12 - 8 = <strong>4 more children</strong>.<br>4. <strong>Total children:</strong> 12 + 8 + 5 + 7 = <strong>32 children</strong>.",
      "rubric": "1 M for most & least liked + 1 M for difference (4) + 1 M for total participants (32)"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Hairstyle Count",
        "q": "Look at the children in a classroom. Count and record:<br>• Number of children with two ponytails = 8<br>• Number of children with one ponytail = 6<br>• Number of children with short hair = 14<br>Which hairstyle is the most common?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Two ponytails = 8<br>• One ponytail = 6<br>• Short hair = 14<br>• Since 14 is the highest number, <strong>short hair</strong> is the most common hairstyle.",
        "marks": 2,
        "rubric": [
          {
            "key": "Short hair identified",
            "marks": "1 M"
          },
          {
            "key": "Comparison of 14 > 8 > 6 explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shoe Colors Survey",
        "q": "Look at the shoes worn by children in Class 2:<br>• Black shoes = 16 children<br>• Brown shoes = 9 children<br>• White sports shoes = 7 children<br>(a) Which colour shoe is worn by the most children?<br>(b) How many more children wear black shoes than brown shoes?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>(a) <strong>Black shoes</strong> are worn by the most children (16).<br>(b) Difference = 16 - 9 = <strong>7 more children</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) Black shoes",
            "marks": "1 M"
          },
          {
            "key": "(b) Difference of 7 calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Water Drinking Chart",
        "q": "A survey asked children how many glasses of water they drink every day:<br>• 1 glass: 3 children<br>• 2 glasses: 6 children<br>• 3 glasses: 12 children<br>• 4 or more glasses: 9 children<br>(a) How many children drink 3 glasses of water?<br>(b) How many children drink less than 3 glasses of water?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>(a) Number of children drinking 3 glasses = <strong>12 children</strong>.<br>(b) Less than 3 glasses = 1 glass (3) + 2 glasses (6) = 3 + 6 = <strong>9 children</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) 12 children",
            "marks": "1 M"
          },
          {
            "key": "(b) 9 children calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Table • Transportation Survey",
        "q": "Children come to school by different means:<br>• By School Bus: 18<br>• By Bicycle: 7<br>• On Foot (Walking): 10<br>• By Auto-rickshaw: 5<br>(a) Which is the most popular way of coming to school?<br>(b) What is the total number of children surveyed?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>(a) The most popular way is <strong>School Bus</strong> (18 children).<br>(b) Total children = 18 + 7 + 10 + 5 = 25 + 15 = <strong>40 children</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) School Bus identified",
            "marks": "1 M"
          },
          {
            "key": "(b) Total 40 children calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pictograph Reading",
        "q": "In a fruit chart, each smiley face 🙂 represents 1 child. If Banana has 4 smileys and Mango has 7 smileys, how many children like Banana and how many like Mango?",
        "ans": "<strong>Step-by-Step Calculation:</strong><br>• Banana = 4 smileys × 1 = <strong>4 children</strong>.<br>• Mango = 7 smileys × 1 = <strong>7 children</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Banana: 4 children",
            "marks": "1 M"
          },
          {
            "key": "Mango: 7 children",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparative Deduction",
        "q": "In a pet survey: 15 children have dogs, 9 have cats, and 4 have birds. How many more children have dogs than cats?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Dogs = 15<br>• Cats = 9<br>• Difference = 15 - 9 = <strong>6 more children</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 15 - 9 shown",
            "marks": "1 M"
          },
          {
            "key": "6 more children correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tally Marks Introduction",
        "q": "What is the purpose of drawing tally marks or tick marks when counting items in a survey?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Tally marks allow us to record data one by one as people answer, without needing to erase or rewrite numbers.<br>• They group counts into batches of 5, making final addition simple and error-free.",
        "marks": 2,
        "rubric": [
          {
            "key": "Quick recording without erasing explained",
            "marks": "1 M"
          },
          {
            "key": "Batching of counts explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Birthday Month Survey",
        "q": "In Class 2-A: 4 children were born in January, 2 in February, 5 in July, and 6 in November. In which of these months were the most children born?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• January = 4<br>• February = 2<br>• July = 5<br>• November = 6<br>• The most birthdays fall in <strong>November</strong> (6 children).",
        "marks": 2,
        "rubric": [
          {
            "key": "November identified",
            "marks": "1 M"
          },
          {
            "key": "Count 6 verified as highest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Ice-Cream Flavor Comparison",
        "q": "A survey of 25 children found: 10 like Vanilla, 8 like Chocolate, and the rest like Strawberry. How many children like Strawberry?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Vanilla + Chocolate = 10 + 8 = 18 children.<br>• Total children = 25.<br>• Strawberry lovers = 25 - 18 = <strong>7 children</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 + 8 = 18 calculated",
            "marks": "1 M"
          },
          {
            "key": "25 - 18 = 7 calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Table Data Interpretation",
        "q": "State one true fact and one question you can ask by looking at the Hairstyle data table (8 two ponytails, 6 one ponytail, 14 short hair).",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>True Fact:</strong> More children have short hair than all ponytail styles combined (14 short hair vs 8 + 6 = 14 ponytail styles, making them equal).<br>• <strong>Question:</strong> How many girls in the class have two ponytails?",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid true fact from data",
            "marks": "1 M"
          },
          {
            "key": "Valid analytical question",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "True or False",
        "q": "State True or False:<br>(a) A data table helps us see and compare information quickly.<br>(b) In a survey of 20 children, the total of all categories can add up to 50.",
        "ans": "<strong>Answers:</strong><br>(a) <strong>True</strong>. Organizing data into tables makes comparison simple.<br>(b) <strong>False</strong>. If only 20 children are surveyed and each answers once, the sum of categories cannot exceed 20.",
        "marks": 2,
        "rubric": [
          {
            "key": "(a) True",
            "marks": "1 M"
          },
          {
            "key": "(b) False with survey logic explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Chapter Reflection",
        "q": "What is 'data' and why do we collect it?",
        "ans": "<strong>Summary:</strong><br>• <strong>Data</strong> is a collection of facts, numbers, or details about people, objects, or events.<br>• We collect data to answer real-life questions (like which fruit to buy for a party, or how many buses are needed for school).",
        "marks": 2,
        "rubric": [
          {
            "key": "Definition of data",
            "marks": "1 M"
          },
          {
            "key": "Purpose of data collection explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Quick Quiz Problem",
        "q": "If 15 children like cricket and 9 like football, what is the total number of sports lovers?",
        "ans": "<strong>Calculation:</strong><br>• 15 + 9 = <strong>24 sports lovers</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "24 correct",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Counting Hair Ponytails",
        "q": "In a class of 20 girls, 12 girls have 2 ponytails, 6 girls have 1 ponytail, and 2 girls have short open hair. Which ponytail style is most common in the class?",
        "ans": "<strong>Answer:</strong><br>• 2 ponytails = 12 girls.<br>• 1 ponytail = 6 girls.<br>• Open hair = 2 girls.<br>• The <strong>2 ponytails style is the most common</strong> (highest frequency).",
        "marks": 2,
        "rubric": [
          {
            "key": "Comparison of numbers",
            "marks": "1 M"
          },
          {
            "key": "2 ponytails most common",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Data • Favorite Fruits Chart",
        "q": "A survey of 15 children showed: 7 like Mango, 5 like Apple, and 3 like Banana.<br>(a) Which fruit is liked by the most children?<br>(b) How many more children like Mango than Banana?",
        "ans": "<strong>Answers:</strong><br>(a) <strong>Mango</strong> is liked by the most children (7 children).<br>(b) Difference = 7 - 3 = <strong>4 more children</strong>.",
        "marks": 2.5,
        "rubric": [
          {
            "key": "Mango most liked",
            "marks": "1 M"
          },
          {
            "key": "Difference 7 - 3 = 4",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Textbook Activity • Water Glasses Drank",
        "q": "Look at the tally of glasses of water drunk daily: Rohan drinks 8 glasses, Meera drinks 6 glasses, Aman drinks 7 glasses. How many total glasses of water do the three children drink in a day?",
        "ans": "<strong>Calculation:</strong><br>• Total glasses = 8 + 6 + 7 = <strong>21 glasses of water</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 8 + 6 + 7",
            "marks": "1 M"
          },
          {
            "key": "21 glasses total",
            "marks": "1 M"
          }
        ]
      }
    ]
  }
];

module.exports = { mathMagicChapters };
