// scripts/builders/mathMagicPart1.js
// NCERT Class 2 Math-Magic Book 2: Chapters 1 to 4
// Authentic Exercises, Roll & Slide, Counting in Groups, How Much Can You Carry, Counting in Tens

const mathMagicPart1 = [
  {
    id: "mmg1", num: 1, unit: "Unit 1: Shapes & Spatial Understanding",
    title: "What is Long, What is Round?",
    subtitle: "Rolling, Sliding, Towers of Boxes and Coins",
    concepts: [
      "Distinguishing long objects (rulers, pencils, bats) from round objects (balls, oranges, globes).",
      "Understanding which objects roll (smooth curved surfaces) and which slide (flat surfaces).",
      "Identifying dual-property objects that both roll and slide (coins, carrom men, pipes, bottle caps).",
      "Constructing stable towers using flat-faced objects vs round objects."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="90" cy="60" r="28" fill="#3b82f6"/><rect x="180" y="32" width="56" height="56" fill="#10b981" rx="4"/><rect x="300" y="35" width="20" height="50" fill="#f59e0b" rx="2"/><circle cx="390" cy="60" r="24" fill="#8b5cf6"/><text x="90" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Ball (Rolls)</text><text x="208" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#065f46" text-anchor="middle">Box (Slides)</text><text x="310" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Eraser</text><text x="390" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#5b21b6" text-anchor="middle">Coin (Both)</text></svg>`,
    cbq: {
      title: "Meeku Uncle's Guessing Bag",
      text: "Meeku uncle puts his hand into a mystery cloth bag. He feels an object and says: 'Pointed at one end, flat at the other, but round like a pipe in between. What is it?'",
      question: "Name the object Meeku uncle is describing. Does this object roll, slide, or do both?",
      answer: "1. The object is a <strong>pencil</strong> (or crayon/sketch pen).<br>2. When kept on its side, it <strong>rolls</strong> easily. When pushed flat on its base, it <strong>slides</strong>. Thus, it can do <strong>both</strong>.",
      rubric: "1.5 M for identifying pencil/sketch pen + 1.5 M for explaining both rolling and sliding"
    },
    questions: [
      {
        category: "Textbook Exercise • Guess the Shape",
        q: "In the game 'Guess Its Name', a child says: 'Round all around, has no corners, I can roll it in my hand. Guess what it is!' Give two possible answers.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The object has no corners and is curved on all sides.<br>• Two possible answers are a <strong>ball</strong> and an <strong>orange</strong> (or a marble/lemon).",
        marks: 2,
        rubric: [{ key: "First correct object (e.g. ball/marble)", marks: "1 M" }, { key: "Second correct object (e.g. orange/lemon)", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Long vs Round",
        q: "Look around your school bag. Name two things that are long and two things that are round.",
        ans: "<strong>Step-by-Step Answer:</strong><br>1. <strong>Long things:</strong> Pencil, ruler (scale), sketch pen.<br>2. <strong>Round things:</strong> Water bottle cap, round sharpener, coin.",
        marks: 2,
        rubric: [{ key: "Two long items identified", marks: "1 M" }, { key: "Two round items identified", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • What Rolls and What Slides",
        q: "What makes an object roll, and what makes an object slide? Explain with one example of each.",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• <strong>Roll:</strong> Objects with smooth, curved round surfaces roll when pushed. Example: A football or marble.<br>• <strong>Slide:</strong> Objects with flat surfaces slide along the floor. Example: A notebook, pencil box, or wooden block.",
        marks: 3,
        rubric: [{ key: "Explanation of rolling with example", marks: "1.5 M" }, { key: "Explanation of sliding with example", marks: "1.5 M" }]
      },
      {
        category: "Textbook Exercise • Things That Both Roll and Slide",
        q: "Which of the following things can BOTH roll and slide? (A) Matchbox (B) A 5-rupee coin (C) A glass bangle (D) Carrom coin (E) An apple",
        ans: "<strong>Step-by-Step Solution:</strong><br>Objects with both flat faces and a curved rim can both roll and slide:<br>• <strong>(B) A 5-rupee coin</strong>: slides on flat face, rolls on edge.<br>• <strong>(D) Carrom coin</strong>: slides across the board, rolls on rim.<br>• A matchbox only slides. An apple only rolls. A glass bangle rolls on edge.",
        marks: 2,
        rubric: [{ key: "Identification of 5-rupee coin", marks: "1 M" }, { key: "Identification of carrom coin", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Tower Building",
        q: "Why can you make a tall tower using matchboxes or wooden blocks, but you cannot make a tower using tennis balls?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>1. Matchboxes and blocks have <strong>flat surfaces</strong>. One flat surface rests firmly on top of another without wobbling.<br>2. Tennis balls have <strong>curved surfaces</strong> and no flat face. They roll away and cannot support another ball on top.",
        marks: 2,
        rubric: [{ key: "Flat surface stability explained", marks: "1 M" }, { key: "Curved round surface instability explained", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Coin Tower Challenge",
        q: "Can you stack 5 one-rupee coins to make a tower? Can you make a 10-rupee coin stand upright on its edge?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>Yes</strong>, 5 one-rupee coins can easily be stacked on top of each other because each coin has two flat circular faces.<br>• <strong>Yes</strong>, a thick 10-rupee coin has a flat outer rim and can stand upright on its edge if balanced steadily on a table.",
        marks: 2,
        rubric: [{ key: "Coin stacking explained", marks: "1 M" }, { key: "Edge standing explained", marks: "1 M" }]
      },
      {
        category: "NCERT Activity • Park Playground",
        q: "In a children's playground slide, why do children slide down on their seat instead of rolling down?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• The slide is a smooth flat slope.<br>• When a child sits down, their flat bottom and legs make surface contact, causing them to <strong>slide</strong> safely downwards rather than tumble or roll.",
        marks: 2,
        rubric: [{ key: "Flat contact area identified", marks: "1 M" }, { key: "Sliding motion explained", marks: "1 M" }]
      },
      {
        category: "Classification Table",
        q: "Classify the following 6 items into 'Things that roll' and 'Things that slide': Football, Notebook, Orange, Brick, Lemon, Matchbox.",
        ans: "<strong>Classification:</strong><br>• <strong>Things that roll:</strong> Football, Orange, Lemon.<br>• <strong>Things that slide:</strong> Notebook, Brick, Matchbox.",
        marks: 3,
        rubric: [{ key: "Correct rolling items (3)", marks: "1.5 M" }, { key: "Correct sliding items (3)", marks: "1.5 M" }]
      },
      {
        category: "Textbook Thinking • Spinning Coin",
        q: "When you spin a 2-rupee coin on a tabletop rapidly like a top, what shape does it look like: a circle, a ball (sphere), or a square?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• When a flat round coin spins very fast on the table, its circular perimeter moves in 3 dimensions.<br>• It appears to our eyes like a round 3D <strong>ball (sphere)</strong>.",
        marks: 2,
        rubric: [{ key: "Identifies ball / sphere appearance", marks: "1 M" }, { key: "Explanation of spinning effect", marks: "1 M" }]
      },
      {
        category: "Practical Reason • Transport Wheels",
        q: "Why are the wheels of carts, bicycles, buses, and cars always round and never square or rectangular?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>1. Round wheels have smooth, continuous curved edges that <strong>roll</strong> effortlessly along roads with very little friction.<br>2. Square or rectangular wheels have corners that would bump and dig into the road, preventing smooth travel.",
        marks: 2,
        rubric: [{ key: "Rolling property of circle explained", marks: "1 M" }, { key: "Corners causing obstruction explained", marks: "1 M" }]
      },
      {
        category: "Hands-on Exercise • Pipe Roll",
        q: "Take a sheet of paper. How can you make it roll? How can you make it slide?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• <strong>To slide:</strong> Keep the sheet flat on the table and push it across; it slides on its flat surface.<br>• <strong>To roll:</strong> Roll the paper sheet tightly into a cylindrical tube or pipe; now place it on the slope and it rolls freely.",
        marks: 2,
        rubric: [{ key: "Flat sheet sliding method", marks: "1 M" }, { key: "Cylinder rolling method", marks: "1 M" }]
      },
      {
        category: "Everyday Objects • Kitchen Utensils",
        q: "Look at a rolling pin (belan) and a cutting board (chakla). Which one rolls and which one slides?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The <strong>rolling pin (belan)</strong> has a cylindrical round body that <strong>rolls</strong> smoothly to flatten dough.<br>• The <strong>chakla (board)</strong> has a flat base that sits firmly or <strong>slides</strong> across the kitchen counter.",
        marks: 2,
        rubric: [{ key: "Belan rolling identified", marks: "1 M" }, { key: "Chakla sliding identified", marks: "1 M" }]
      },
      {
        category: "Comparative Problem • Tower Height",
        q: "Rohan builds a tower of 6 matchboxes. Priya builds a tower of 8 matchboxes. Whose tower is taller and by how many boxes?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Rohan's tower = 6 boxes.<br>• Priya's tower = 8 boxes.<br>• Since 8 > 6, <strong>Priya's tower</strong> is taller.<br>• Difference = 8 - 6 = <strong>2 matchboxes taller</strong>.",
        marks: 2,
        rubric: [{ key: "Priya identified as taller", marks: "1 M" }, { key: "Difference of 2 boxes calculated", marks: "1 M" }]
      },
      {
        category: "Concept Check • Onion & Tomato",
        q: "If an onion and a potato are pushed on a sloping ramp, will they roll or slide? Explain why.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Both an onion and a potato will <strong>roll</strong> down the slope.<br>• <strong>Reason:</strong> They both have rounded, curved surfaces that easily rotate downwards under gravity.",
        marks: 2,
        rubric: [{ key: "Correct rolling identification", marks: "1 M" }, { key: "Curved surface rationale", marks: "1 M" }]
      },
      {
        category: "Creative Construction • Bottle Caps",
        q: "Can you stack 4 plastic bottle caps to make a mini-tower? Explain how you will place them.",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>Yes</strong>, you can make a mini-tower.<br>• <strong>Method:</strong> Place the first cap flat on the table with its open rim facing up (or down), and stack each subsequent cap flat upon the previous one. Because the caps have flat surfaces, they will balance securely.",
        marks: 2,
        rubric: [{ key: "Affirmative answer", marks: "1 M" }, { key: "Flat surface placement description", marks: "1 M" }]
      },
      {
        category: "Shape Properties • Eraser Examination",
        q: "Examine a regular rectangular eraser. Can you make it roll? What happens if you push it on a desk?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• A rectangular eraser has flat rectangular faces and sharp straight edges.<br>• When pushed, it <strong>slides</strong> along the desk.<br>• It does not roll unless forced to tumble corner over corner, because it lacks a curved round surface.",
        marks: 2,
        rubric: [{ key: "Sliding identified", marks: "1 M" }, { key: "Lack of curved surface explained", marks: "1 M" }]
      },
      {
        category: "Textbook Summary • Key Learnings",
        q: "Write three things you learned in Chapter 1 about long and round objects.",
        ans: "<strong>Summary Points:</strong><br>1. Round objects have curved surfaces and roll.<br>2. Flat-faced objects slide and can be stacked to make tall towers.<br>3. Objects with both flat and curved surfaces (like coins, drums, and pipes) can both roll and slide.",
        marks: 3,
        rubric: [{ key: "Round/rolling property", marks: "1 M" }, { key: "Flat/sliding/tower property", marks: "1 M" }, { key: "Dual property of cylinder/coin", marks: "1 M" }]
      },
      {
        category: "Multiple Choice Question",
        q: "Which object will roll down the fastest on a gentle ramp? (a) A shoe box (b) A wooden cube (c) A glass marble (d) A flat ruler",
        ans: "<strong>Correct Answer:</strong> <strong>(c) A glass marble</strong>.<br><strong>Reason:</strong> A glass marble is completely round and smooth, allowing it to roll down rapidly with minimum friction.",
        marks: 1,
        rubric: [{ key: "Correct option (c) with reason", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg2", num: 2, unit: "Unit 2: Number Sense & Patterns",
    title: "Counting in Groups",
    subtitle: "Look and Guess Numbers, Pairs, and More or Less",
    concepts: [
      "Grouping objects in twos, threes, and fours to count faster without counting one by one.",
      "Understanding pairs (shoes, earrings, socks, gloves).",
      "Estimating quantities visually (more than / less than benchmarks).",
      "Ordinal numbers (1st, 2nd, 3rd, 4th, 5th, 6th) through the classic Turnip story."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fdf4ff" rx="10"/><circle cx="60" cy="50" r="16" fill="#ec4899"/><circle cx="100" cy="50" r="16" fill="#ec4899"/><circle cx="80" cy="80" r="16" fill="#ec4899"/><circle cx="180" cy="50" r="16" fill="#a855f7"/><circle cx="220" cy="50" r="16" fill="#a855f7"/><circle cx="200" cy="80" r="16" fill="#a855f7"/><circle cx="300" cy="50" r="16" fill="#3b82f6"/><circle cx="340" cy="50" r="16" fill="#3b82f6"/><circle cx="320" cy="80" r="16" fill="#3b82f6"/><text x="250" y="110" font-family="sans-serif" font-size="12" font-weight="700" fill="#701a75" text-anchor="middle">3 Groups of 3 Spoons = 3 × 3 = 9 Spoons</text></svg>`,
    cbq: {
      title: "The Big Turnip Story (Ordinal Numbers)",
      text: "An old man planted a turnip seed. It grew huge! Grandfather pulled first. Then Grandmother held him. Then Granddaughter held Grandmother. Then the pet dog held Granddaughter. Then the cat held the dog. Finally, the little mouse held the cat. With one mighty tug, POP! Up came the big turnip!",
      question: "How many actors pulled the turnip in total? Who was at the 3rd position, and who was at the 6th position?",
      answer: "1. Total actors = 6 (Old man, Grandmother, Granddaughter, Dog, Cat, Mouse).<br>2. The actor at the <strong>3rd position</strong> was the <strong>Granddaughter</strong>.<br>3. The actor at the <strong>6th position</strong> was the <strong>Mouse</strong>.",
      rubric: "1 M for total count (6) + 1 M for 3rd position + 1 M for 6th position"
    },
    questions: [
      {
        category: "Textbook Exercise • Guess the Cups",
        q: "Look at cups placed in a pyramid: 1 cup at the top row, 2 cups in the middle row, and 3 cups in the bottom row. Can you guess how many cups without counting one by one?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Top row = 1 cup<br>• Middle row = 2 cups (1 + 2 = 3 cups)<br>• Bottom row = 3 cups<br>• Total cups = 3 + 3 = <strong>6 cups</strong>.",
        marks: 2,
        rubric: [{ key: "Row grouping method shown", marks: "1 M" }, { key: "Total 6 cups calculated", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Pairs of Shoes",
        q: "There are 3 lines of shoes on a rack. Each line has 3 pairs of shoes. How many pairs of shoes are there? How many individual shoes in total?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>1. Number of pairs = 3 rows × 3 pairs = <strong>9 pairs</strong>.<br>2. Since each pair has 2 shoes: 9 × 2 = <strong>18 individual shoes</strong>.",
        marks: 2,
        rubric: [{ key: "Number of pairs (9)", marks: "1 M" }, { key: "Total individual shoes (18)", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Groups of Spoons",
        q: "Look at 4 groups of spoons. Each group has 6 spoons. Guess the total number of spoons.",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Number of groups = 4<br>• Spoons in each group = 6<br>• Total spoons = 6 + 6 + 6 + 6 = <strong>24 spoons</strong>.",
        marks: 2,
        rubric: [{ key: "Addition or multiplication shown", marks: "1 M" }, { key: "Correct total 24 spoons", marks: "1 M" }]
      },
      {
        category: "Textbook Guessing • More or Less?",
        q: "Tick (More than / Less than) for each of the following:<br>(a) Number of teeth in your mouth: More than 40 OR Less than 40?<br>(b) Number of seeds in an orange: More than 50 OR Less than 50?",
        ans: "<strong>Answers:</strong><br>(a) Number of teeth in a 7-year-old child's mouth is about 20: <strong>Less than 40</strong>.<br>(b) An orange typically has 8 to 15 seeds: <strong>Less than 50</strong>.",
        marks: 2,
        rubric: [{ key: "Teeth: Less than 40", marks: "1 M" }, { key: "Orange seeds: Less than 50", marks: "1 M" }]
      },
      {
        category: "Textbook Guessing • More or Less Part 2",
        q: "Circle the correct choice:<br>(a) Number of matchsticks in a standard matchbox: More than 30 OR Less than 30?<br>(b) Number of pencils in your whole classroom: More than 45 OR Less than 45?",
        ans: "<strong>Answers:</strong><br>(a) A matchbox contains around 40 to 50 sticks: <strong>More than 30</strong>.<br>(b) In a class of 30 students, if each child has 2 pencils, total = 60 pencils: <strong>More than 45</strong>.",
        marks: 2,
        rubric: [{ key: "Matchbox: More than 30", marks: "1 M" }, { key: "Pencils: More than 45", marks: "1 M" }]
      },
      {
        category: "Physical Activity • Hop Till You Drop",
        q: "Aman hopped on his right foot 7 times without falling. Ritu hopped on her left foot 9 times without falling. Who hopped more times, and by how many hops?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Aman's hops = 7<br>• Ritu's hops = 9<br>• Since 9 > 7, <strong>Ritu</strong> hopped more times.<br>• Difference = 9 - 7 = <strong>2 hops more</strong>.",
        marks: 2,
        rubric: [{ key: "Ritu identified", marks: "1 M" }, { key: "Difference of 2 hops calculated", marks: "1 M" }]
      },
      {
        category: "Join the Dots • Bhurru Dog Puzzle",
        q: "In the NCERT puzzle, Bhurru dog is hungry and joins dots from number 21 to 52 in order. What number comes immediately after 38? What number comes immediately before 50?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Successor (number after) 38 = 38 + 1 = <strong>39</strong>.<br>• Predecessor (number before) 50 = 50 - 1 = <strong>49</strong>.",
        marks: 2,
        rubric: [{ key: "Number after 38: 39", marks: "1 M" }, { key: "Number before 50: 49", marks: "1 M" }]
      },
      {
        category: "Story Application • The Pulling Team",
        q: "In the Big Turnip story, how many pulled before the cat came? Which position was the cat in?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Before the cat came, 4 characters were pulling (Old man, Grandmother, Granddaughter, and Dog).<br>• The cat came in at the <strong>5th position</strong>.",
        marks: 2,
        rubric: [{ key: "4 characters before cat", marks: "1 M" }, { key: "Cat in 5th position", marks: "1 M" }]
      },
      {
        category: "Story Analysis • Who Helped Most?",
        q: "Why was the tiny mouse important even though it was the smallest character pulling the turnip?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Even though the other five characters pulled with great strength, the turnip did not come out.<br>• The mouse provided the exact extra pulling force needed to overcome the soil resistance. Every small contribution matters in teamwork!",
        marks: 2,
        rubric: [{ key: "Extra team force explained", marks: "1 M" }, { key: "Teamwork value highlighted", marks: "1 M" }]
      },
      {
        category: "Grouping by Fives • Star Stickers",
        q: "Pooja has 5 sheets of star stickers. Each sheet has 5 stars. How many star stickers does Pooja have in all?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Number of sheets = 5<br>• Stars on each sheet = 5<br>• Total stars = 5 + 5 + 5 + 5 + 5 = <strong>25 stars</strong>.",
        marks: 2,
        rubric: [{ key: "Repeated addition 5+5+5+5+5 shown", marks: "1 M" }, { key: "Total 25 stars correct", marks: "1 M" }]
      },
      {
        category: "Earring Pairs",
        q: "Anu's mother has 8 pairs of gold earrings in her jewellery box. How many single earrings are there altogether?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 1 pair = 2 earrings<br>• 8 pairs = 8 × 2 = <strong>16 earrings</strong>.",
        marks: 2,
        rubric: [{ key: "1 pair = 2 earrings recognized", marks: "1 M" }, { key: "Total 16 earrings calculated", marks: "1 M" }]
      },
      {
        category: "Estimation Check • Marbles in a Jar",
        q: "Kabir estimates there are 30 marbles in a glass jar. When counted, there are 27 marbles. Was Kabir's guess close? How far off was his guess?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Kabir's guess = 30<br>• Actual count = 27<br>• Difference = 30 - 27 = <strong>3 marbles</strong>.<br>• Yes, Kabir's estimation was very close (only off by 3).",
        marks: 2,
        rubric: [{ key: "Difference of 3 calculated", marks: "1 M" }, { key: "Valid estimation conclusion", marks: "1 M" }]
      },
      {
        category: "Grouping by Tens • Bangle Bundles",
        q: "A bangle seller ties bangles into bundles of 10. If he has 6 bundles and 4 single bangles, how many bangles does he have in all?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 6 bundles of 10 = 6 × 10 = 60 bangles<br>• 4 single bangles = 4 bangles<br>• Total bangles = 60 + 4 = <strong>64 bangles</strong>.",
        marks: 2,
        rubric: [{ key: "6 bundles = 60 bangles", marks: "1 M" }, { key: "Total 64 bangles calculated", marks: "1 M" }]
      },
      {
        category: "Ordinal Position • Sports Day Race",
        q: "In a 50-metre race: Yash crossed the ribbon first, Tina second, Aryan third, and Deepa fourth. Who won the bronze medal (3rd place)?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• 1st place (Gold) = Yash<br>• 2nd place (Silver) = Tina<br>• 3rd place (Bronze) = <strong>Aryan</strong>.",
        marks: 2,
        rubric: [{ key: "Identifies Aryan as 3rd place", marks: "1 M" }, { key: "Associates 3rd with Bronze medal", marks: "1 M" }]
      },
      {
        category: "Quick Mental Math",
        q: "Count by 2s up to 16: 2, 4, 6, _, _, _, _, 16.",
        ans: "<strong>Step-by-Step Solution:</strong><br>Adding 2 at each step:<br>2, 4, 6, <strong>8</strong>, <strong>10</strong>, <strong>12</strong>, <strong>14</strong>, 16.",
        marks: 2,
        rubric: [{ key: "All 4 missing numbers correct (8, 10, 12, 14)", marks: "2 M" }]
      },
      {
        category: "Visual Comparison • Group Density",
        q: "Group A has 4 plates with 2 samosas on each plate. Group B has 2 plates with 5 samosas on each plate. Which group has more samosas?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• Group A = 4 plates × 2 samosas = 8 samosas.<br>• Group B = 2 plates × 5 samosas = 10 samosas.<br>• Since 10 > 8, <strong>Group B</strong> has more samosas (by 2 samosas).",
        marks: 2,
        rubric: [{ key: "Totals 8 and 10 calculated", marks: "1 M" }, { key: "Group B identified as having more", marks: "1 M" }]
      },
      {
        category: "Conceptual Understanding • Why Group?",
        q: "Why is counting in groups faster than counting one item at a time?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>1. Grouping allows us to count chunks (such as 2, 4, 6, 8 or 10, 20, 30) instead of making individual counts.<br>2. It reduces the chance of skipping items or double-counting, saving time and improving accuracy.",
        marks: 2,
        rubric: [{ key: "Chunk counting speed explained", marks: "1 M" }, { key: "Error reduction explained", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A pair of socks always contains 3 socks.<br>(b) 5 groups of 2 equals 10.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. A pair always contains exactly 2 socks.<br>(b) <strong>True</strong>. 5 × 2 = 10.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg3", num: 3, unit: "Unit 3: Measurement & Mass",
    title: "How Much Can You Carry?",
    subtitle: "Heavier and Lighter, Pan Balance, and Load Capacity",
    concepts: [
      "Comparing weights of objects using words: 'heavier than' and 'lighter than'.",
      "Understanding balance scales: the heavier side tilts downwards, the lighter side goes up.",
      "The Clever Donkey story: why salt becomes lighter in water while cotton becomes heavier.",
      "Estimating what different animals and children can carry realistically."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><line x1="150" y1="50" x2="350" y2="70" stroke="#713f12" stroke-width="6"/><polygon points="250,55 240,90 260,90" fill="#a16207"/><circle cx="150" cy="50" r="14" fill="#3b82f6"/><rect x="330" y="58" width="36" height="24" fill="#ef4444" rx="3"/><text x="150" y="28" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Lighter (Up)</text><text x="350" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">Heavier (Down)</text></svg>`,
    cbq: {
      title: "The Clever Donkey's River Trick",
      text: "Sandesh has a donkey that carries sacks of salt to market. One day while crossing a river, the donkey slipped and fell into the water. When it got up, the sack felt very light! The next day, the sly donkey intentionally sat in the river. But on the third day, Sandesh put sacks of cotton cloth instead of salt on its back.",
      question: "Why did the sack feel light when filled with salt? What happened to the cotton sack when the donkey sat in the river?",
      answer: "1. The salt sack felt light because <strong>salt dissolves in water</strong> and washed away into the river.<br>2. When the donkey sat in the river with the cotton sack, the <strong>cotton absorbed lots of water</strong>, making the sack extremely heavy and teaching the donkey a lesson!",
      rubric: "1.5 M for salt dissolving explanation + 1.5 M for cotton absorbing water explanation"
    },
    questions: [
      {
        category: "Textbook Exercise • Pan Balance",
        q: "Look at a two-pan balance scale. One pan has a watermelon and the other pan has an apple. Which pan will go down, and why?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• The <strong>watermelon</strong> is much heavier than the apple.<br>• On a balance scale, the heavier side tilts <strong>downward</strong> while the lighter side rises upward.<br>• Therefore, the pan with the watermelon will go down.",
        marks: 2,
        rubric: [{ key: "Identifies watermelon pan goes down", marks: "1 M" }, { key: "Heavier side pushes pan down explained", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Heavier vs Lighter",
        q: "Which is heavier: (a) A cricket ball or a football? (b) A school bag with books or an empty pencil box?",
        ans: "<strong>Step-by-Step Answer:</strong><br>(a) A <strong>cricket ball</strong> (hard leather/cork) is heavier than an air-filled hollow football.<br>(b) A <strong>school bag full of books</strong> is much heavier than an empty pencil box.",
        marks: 2,
        rubric: [{ key: "(a) Cricket ball identified", marks: "1 M" }, { key: "(b) School bag identified", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Who Can Carry What?",
        q: "Simran wants to help her father carry grocery items from the store to the kitchen. Match each item to who can carry it (Simran, her mother, or her father):<br>(1) 1 kg ghee (2) 5 kg atta (3) 2 kg sugar",
        ans: "<strong>Step-by-Step Matching:</strong><br>• <strong>Simran (Class 2 child):</strong> 1 kg ghee packet.<br>• <strong>Mother:</strong> 2 kg sugar packet.<br>• <strong>Father:</strong> 5 kg atta sack.",
        marks: 3,
        rubric: [{ key: "1 kg ghee -> Simran", marks: "1 M" }, { key: "2 kg sugar -> Mother", marks: "1 M" }, { key: "5 kg atta -> Father", marks: "1 M" }]
      },
      {
        category: "Animal Carrying Capacity",
        q: "Match the animal with the object it can carry in the NCERT exercise:<br>(a) Ant (b) Bird (c) Elephant (d) Dog<br>Objects: (1) A big wooden log (2) A tiny grain of sugar (3) A small leaf/twig (4) A rubber ball",
        ans: "<strong>Matching:</strong><br>• <strong>(a) Ant:</strong> (2) A tiny grain of sugar.<br>• <strong>(b) Bird:</strong> (3) A small leaf/twig in its beak.<br>• <strong>(c) Elephant:</strong> (1) A big wooden log with its trunk.<br>• <strong>(d) Dog:</strong> (4) A rubber ball in its mouth.",
        marks: 2,
        rubric: [{ key: "All 4 animals correctly matched", marks: "2 M (0.5 M each)" }]
      },
      {
        category: "Balance Comparison",
        q: "A pan balance has two shoes on the left pan and one shoe on the right pan. Which side is lighter? How can you make both sides equal?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• The <strong>right pan</strong> (with 1 shoe) is lighter and will rise up.<br>• To make both sides balance equally, add <strong>one more shoe</strong> to the right pan so that both pans have 2 shoes.",
        marks: 2,
        rubric: [{ key: "Right pan identified as lighter", marks: "1 M" }, { key: "Adding 1 shoe to right pan", marks: "1 M" }]
      },
      {
        category: "Practical Reasoning • Empty vs Full",
        q: "Why is a bucket full of water heavier than an empty bucket?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• An empty plastic bucket has only the weight of its thin plastic walls.<br>• When filled with water, the weight of several litres of water is added to the bucket, making it much heavier.",
        marks: 2,
        rubric: [{ key: "Weight of water addition explained", marks: "1 M" }, { key: "Clear physical reasoning", marks: "1 M" }]
      },
      {
        category: "See-Saw Science",
        q: "Raju wants to ride a see-saw, but his friend Mohan sits on the other end. Raju's side goes up into the air and stays there. Who is heavier: Raju or Mohan? How can Rani help Raju?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Since Mohan's side went down, <strong>Mohan is heavier</strong> than Raju.<br>• To balance the see-saw, Rani can sit on <strong>Raju's side</strong>. Their combined weight will bring Raju's side down and balance Mohan.",
        marks: 2,
        rubric: [{ key: "Mohan identified as heavier", marks: "1 M" }, { key: "Rani sitting on Raju's side explained", marks: "1 M" }]
      },
      {
        category: "Ordering by Weight",
        q: "Arrange these 4 objects from the LIGHTEST to the HEAVIEST: Leaf, School Bag, Feather, Bicycle.",
        ans: "<strong>Arrangement from Lightest to Heaviest:</strong><br>1. <strong>Feather</strong> (lightest)<br>2. <strong>Leaf</strong><br>3. <strong>School Bag</strong><br>4. <strong>Bicycle</strong> (heaviest).",
        marks: 2,
        rubric: [{ key: "Correct order from feather to bicycle", marks: "2 M" }]
      },
      {
        category: "Everyday Comparison • Fruit Stall",
        q: "At a fruit stall, a vendor balances 1 big pineapple with 3 identical apples. Which is heavier: 1 pineapple or 1 apple?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• 1 pineapple balances 3 apples.<br>• Therefore, <strong>1 pineapple</strong> is much heavier than 1 single apple (it weighs 3 times as much as 1 apple).",
        marks: 2,
        rubric: [{ key: "Pineapple identified as heavier", marks: "1 M" }, { key: "Comparison with 3 apples stated", marks: "1 M" }]
      },
      {
        category: "Real-Life Carrying • School Bag Health",
        q: "Why should young children not carry a school bag that is too heavy?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>1. Carrying an excessively heavy school bag strains a child's delicate spine, back muscles, and shoulders.<br>2. It can cause poor posture, tiredness, and back pain. Students should only carry books required for the day's timetable.",
        marks: 2,
        rubric: [{ key: "Spine / muscle strain explained", marks: "1 M" }, { key: "Health advice regarding timetable", marks: "1 M" }]
      },
      {
        category: "Everyday Kitchen • Measuring Spoons",
        q: "Which is lighter: A wooden cooking spoon or a steel pressure cooker?",
        ans: "<strong>Answer:</strong><br>• The <strong>wooden cooking spoon</strong> is much lighter.<br>• A steel pressure cooker is made of thick metal and is far heavier.",
        marks: 1,
        rubric: [{ key: "Wooden cooking spoon correctly identified", marks: "1 M" }]
      },
      {
        category: "Volume vs Weight • Cotton vs Iron",
        q: "A large pillow filled with cotton takes up more space than a small iron nail. But which one is heavier: the nail or the pillow?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Although cotton is light, a <strong>large pillow</strong> contains several hundred grams of cotton.<br>• A single small iron nail weighs only a few grams.<br>• Therefore, the <strong>pillow is heavier</strong> than the small iron nail.",
        marks: 2,
        rubric: [{ key: "Pillow identified as heavier", marks: "1 M" }, { key: "Explanation distinguishing size and mass", marks: "1 M" }]
      },
      {
        category: "Observation Problem • Gas Balloon",
        q: "When you let go of a gas-filled balloon, it flies up to the ceiling. Is the gas balloon heavier or lighter than the surrounding air?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• The gas inside the balloon (helium) is <strong>lighter than the surrounding air</strong>.<br>• Because it is lighter, buoyant force pushes it upwards towards the ceiling.",
        marks: 2,
        rubric: [{ key: "Lighter than air identified", marks: "1 M" }, { key: "Upward movement explained", marks: "1 M" }]
      },
      {
        category: "Two-Pan Balance Deduction",
        q: "If Pan A has 2 mangoes and Pan B has 2 mangoes of the exact same size, what will happen to the balance beam?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Since both pans have identical objects of equal weight, neither pan goes down.<br>• The balance beam remains <strong>horizontal (perfectly balanced / level)</strong>.",
        marks: 2,
        rubric: [{ key: "Horizontal / balanced state stated", marks: "1 M" }, { key: "Equal weight rationale provided", marks: "1 M" }]
      },
      {
        category: "Practical Application • Self Weight",
        q: "Can a 7-year-old child carry their own bicycle up 3 flights of stairs? Why or why not?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• <strong>No</strong>, a 7-year-old child should not try to carry a bicycle up stairs.<br>• <strong>Reason:</strong> A metal bicycle is too heavy, bulky, and difficult to grip safely for a small child, and could cause them to fall.",
        marks: 2,
        rubric: [{ key: "Negative response (No)", marks: "1 M" }, { key: "Weight and safety reason", marks: "1 M" }]
      },
      {
        category: "Word Problem • Weight Comparison",
        q: "A packet of salt weighs 1 kg. A bag of rice weighs 5 kg. How many packets of salt are needed to equal the weight of 1 bag of rice?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Weight of 1 rice bag = 5 kg<br>• Weight of 1 salt packet = 1 kg<br>• Number of packets needed = 5 ÷ 1 = <strong>5 packets of salt</strong>.",
        marks: 2,
        rubric: [{ key: "Division 5 ÷ 1 shown", marks: "1 M" }, { key: "5 packets answer correct", marks: "1 M" }]
      },
      {
        category: "Concept Check • Fill in Blanks",
        q: "Fill in the blanks with 'heavier' or 'lighter':<br>(a) A dry sponge is _______ than a wet sponge.<br>(b) An elephant is _______ than a deer.",
        ans: "<strong>Answers:</strong><br>(a) A dry sponge is <strong>lighter</strong> than a wet sponge (water adds weight).<br>(b) An elephant is <strong>heavier</strong> than a deer.",
        marks: 2,
        rubric: [{ key: "(a) lighter", marks: "1 M" }, { key: "(b) heavier", marks: "1 M" }]
      },
      {
        category: "Summary Reflection",
        q: "What have you learned about measuring weight in Chapter 3?",
        ans: "<strong>Key Learnings:</strong><br>1. Heavy things push a balance pan down, while lighter things rise.<br>2. Some materials change weight when wet (like cotton absorbing water or salt dissolving).<br>3. People and animals can only carry loads suitable for their body strength.",
        marks: 3,
        rubric: [{ key: "Balance scale rule", marks: "1 M" }, { key: "Wet material property", marks: "1 M" }, { key: "Appropriate load capacity", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mmg4", num: 4, unit: "Unit 4: Place Value & Grouping",
    title: "Counting in Tens",
    subtitle: "Chickens and Fox, Garlands of 10, Packets of Pencils and Bindis",
    concepts: [
      "Counting large collections efficiently by grouping into tens and loose units (ones).",
      "Tikloo farmer's chickens: counting baskets of 10 chickens and finding how many the fox ate.",
      "Malti's flower garlands: making garlands of 10 flowers each and finding total flowers.",
      "Kanak's bindi collection: counting sheets of 10 bindis in artistic patterns (3+2+5, 4+3+3)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><rect x="40" y="30" width="70" height="45" fill="#059669" rx="5"/><text x="75" y="58" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">10 Pencils</text><rect x="130" y="30" width="70" height="45" fill="#059669" rx="5"/><text x="165" y="58" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">10 Pencils</text><circle cx="230" cy="52" r="8" fill="#10b981"/><circle cx="250" cy="52" r="8" fill="#10b981"/><circle cx="270" cy="52" r="8" fill="#10b981"/><circle cx="290" cy="52" r="8" fill="#10b981"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">2 Packets of 10 (20) + 4 Loose = 24 Pencils</text></svg>`,
    cbq: {
      title: "Tikloo Farmer and Clever Fox Problem",
      text: "Tikloo farmer has many chickens on his farm. A clever fox started stealing and eating chickens. Tikloo decided to put 10 chickens in each basket every morning. In the morning, there were 5 baskets of 10 chickens and 4 chickens outside. In the evening, there were 4 baskets of 10 chickens and 3 chickens outside.",
      question: "How many chickens were there in the morning? How many in the evening? How many chickens did the clever fox eat during the day?",
      answer: "1. <strong>Morning count:</strong> 5 baskets of 10 = 50, plus 4 outside = 50 + 4 = <strong>54 chickens</strong>.<br>2. <strong>Evening count:</strong> 4 baskets of 10 = 40, plus 3 outside = 40 + 3 = <strong>43 chickens</strong>.<br>3. <strong>Chickens eaten by fox:</strong> 54 - 43 = <strong>11 chickens</strong>.",
      rubric: "1 M for morning count (54) + 1 M for evening count (43) + 1 M for difference eaten (11)"
    },
    questions: [
      {
        category: "Textbook Exercise • Garlands of 10",
        q: "Malti has to make flower garlands for a wedding. She strings 10 marigold flowers in each garland.<br>(a) In picture 1, there are 8 loose flowers and 5 garlands. How many flowers in all?<br>(b) In picture 2, there are 6 garlands and 7 loose flowers. How many flowers in all?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>(a) 5 garlands of 10 = 50 flowers. Plus 8 loose flowers = 50 + 8 = <strong>58 flowers</strong>.<br>(b) 6 garlands of 10 = 60 flowers. Plus 7 loose flowers = 60 + 7 = <strong>67 flowers</strong>.",
        marks: 2,
        rubric: [{ key: "(a) 58 flowers calculated", marks: "1 M" }, { key: "(b) 67 flowers calculated", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Making Garlands",
        q: "If you have 35 flowers, how many garlands of 10 flowers each can you make? How many flowers will be left loose?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• In 35, there are 3 tens and 5 ones.<br>• Number of garlands of 10 = <strong>3 garlands</strong>.<br>• Loose flowers remaining = <strong>5 flowers</strong>.",
        marks: 2,
        rubric: [{ key: "3 garlands of 10 identified", marks: "1 M" }, { key: "5 loose flowers remaining", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Packets of Pencils",
        q: "Look at the pencil boxes. There are 6 packets of 10 pencils each, and 4 loose pencils outside.<br>(a) How many packets of 10 are there?<br>(b) How many pencils outside the packets?<br>(c) How many total pencils are there?",
        ans: "<strong>Step-by-Step Answer:</strong><br>(a) Number of packets of 10 = <strong>6 packets</strong>.<br>(b) Pencils outside = <strong>4 pencils</strong>.<br>(c) Total pencils = 60 + 4 = <strong>64 pencils</strong>.",
        marks: 3,
        rubric: [{ key: "(a) 6 packets", marks: "1 M" }, { key: "(b) 4 loose", marks: "1 M" }, { key: "(c) 64 total", marks: "1 M" }]
      },
      {
        category: "Textbook Exercise • Kanak's Bindis",
        q: "Kanak loves collecting bindis. She has 7 packets of bindis. Each packet contains 10 bindis arranged in groups of 3 + 2 + 5.<br>(a) How many packets does Kanak have?<br>(b) How many bindis are there in all?",
        ans: "<strong>Step-by-Step Solution:</strong><br>(a) Kanak has <strong>7 packets</strong>.<br>(b) Total bindis = 7 packets × 10 bindis = <strong>70 bindis</strong>.",
        marks: 2,
        rubric: [{ key: "(a) 7 packets identified", marks: "1 M" }, { key: "(b) 70 total bindis calculated", marks: "1 M" }]
      },
      {
        category: "Creative Arrangement • Bindi Patterns",
        q: "Draw or describe 10 bindis in a different pattern than 3 + 2 + 5. Give two different ways to group 10 bindis.",
        ans: "<strong>Step-by-Step Groupings:</strong><br>1. <strong>Way 1:</strong> 4 + 3 + 3 = 10 (4 bindis in top row, 3 in middle, 3 in bottom row).<br>2. <strong>Way 2:</strong> 5 + 5 = 10 (two equal rows of 5 bindis each).",
        marks: 2,
        rubric: [{ key: "First grouping of 10 (e.g. 4+3+3)", marks: "1 M" }, { key: "Second grouping of 10 (e.g. 5+5)", marks: "1 M" }]
      },
      {
        category: "Tikloo Farmer Morning Check",
        q: "Tikloo counted his chickens on Monday morning. He filled 3 baskets of 10 chickens and had 8 loose chickens. Write the total number in tens and ones format.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Tens = 3 (30 chickens)<br>• Ones = 8 (8 chickens)<br>• Total chickens = 30 + 8 = <strong>38 chickens</strong>.",
        marks: 2,
        rubric: [{ key: "Tens and ones split: 3 tens + 8 ones", marks: "1 M" }, { key: "Total 38 chickens", marks: "1 M" }]
      },
      {
        category: "Place Value Drill • Number Building",
        q: "Write the number formed by:<br>(a) 4 tens and 7 ones = _______<br>(b) 8 tens and 2 ones = _______<br>(c) 9 tens and 0 ones = _______",
        ans: "<strong>Answers:</strong><br>(a) 4 tens (40) + 7 ones (7) = <strong>47</strong><br>(b) 8 tens (80) + 2 ones (2) = <strong>82</strong><br>(c) 9 tens (90) + 0 ones (0) = <strong>90</strong>",
        marks: 3,
        rubric: [{ key: "(a) 47", marks: "1 M" }, { key: "(b) 82", marks: "1 M" }, { key: "(c) 90", marks: "1 M" }]
      },
      {
        category: "Decomposition Drill • Tens and Ones",
        q: "Break each number into Tens and Ones:<br>(a) 26 = ___ tens + ___ ones<br>(b) 73 = ___ tens + ___ ones<br>(c) 49 = ___ tens + ___ ones",
        ans: "<strong>Answers:</strong><br>(a) 26 = <strong>2 tens</strong> + <strong>6 ones</strong><br>(b) 73 = <strong>7 tens</strong> + <strong>3 ones</strong><br>(c) 49 = <strong>4 tens</strong> + <strong>9 ones</strong>",
        marks: 3,
        rubric: [{ key: "(a) 2 tens, 6 ones", marks: "1 M" }, { key: "(b) 7 tens, 3 ones", marks: "1 M" }, { key: "(c) 4 tens, 9 ones", marks: "1 M" }]
      },
      {
        category: "Counting Bundles • Matchsticks",
        q: "A matchstick bundle contains 10 sticks. If Rohan makes 4 bundles and has 9 loose sticks, how many sticks does he have? How many more sticks does he need to make a 5th bundle?",
        ans: "<strong>Step-by-Step Solution:</strong><br>1. 4 bundles of 10 = 40. Plus 9 loose = 40 + 9 = <strong>49 sticks</strong>.<br>2. To make a bundle of 10, he needs: 10 - 9 = <strong>1 more stick</strong>.",
        marks: 2,
        rubric: [{ key: "Total 49 sticks calculated", marks: "1 M" }, { key: "1 more stick needed for 5th bundle", marks: "1 M" }]
      },
      {
        category: "Word Problem • Sweet Box",
        q: "A baker puts 10 laddoos in every box. A customer buys 5 boxes and 6 loose laddoos. How many laddoos did the customer buy in total?",
        ans: "<strong>Step-by-Step Calculation:</strong><br>• 5 boxes of 10 laddoos = 5 × 10 = 50 laddoos.<br>• 6 loose laddoos = 6 laddoos.<br>• Total laddoos = 50 + 6 = <strong>56 laddoos</strong>.",
        marks: 2,
        rubric: [{ key: "5 boxes = 50 laddoos shown", marks: "1 M" }, { key: "Total 56 laddoos calculated", marks: "1 M" }]
      },
      {
        category: "Comparative Problem • Bindi Collection",
        q: "Sita has 4 packets of 10 bindis. Geeta has 3 packets of 10 bindis and 8 loose bindis. Who has more bindis and by how many?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Sita's bindis = 4 × 10 = 40 bindis.<br>• Geeta's bindis = (3 × 10) + 8 = 30 + 8 = 38 bindis.<br>• Since 40 > 38, <strong>Sita has more bindis</strong>.<br>• Difference = 40 - 38 = <strong>2 bindis more</strong>.",
        marks: 2,
        rubric: [{ key: "Totals 40 and 38 calculated", marks: "1 M" }, { key: "Sita identified with difference 2", marks: "1 M" }]
      },
      {
        category: "Tens Counting Skip Sequence",
        q: "Fill in the missing numbers counting by tens: 10, 20, 30, ___, 50, ___, 70, ___, 90, 100.",
        ans: "<strong>Solution:</strong><br>Adding 10 at each step:<br>10, 20, 30, <strong>40</strong>, 50, <strong>60</strong>, 70, <strong>80</strong>, 90, 100.",
        marks: 3,
        rubric: [{ key: "Missing numbers 40, 60, 80 filled correctly", marks: "3 M (1 M each)" }]
      },
      {
        category: "Visual Problem • Crayon Packets",
        q: "A teacher has 82 crayons. How many full boxes of 10 crayons can she make? How many loose crayons will remain on her desk?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• In 82, the tens digit is 8 and the ones digit is 2.<br>• She can make <strong>8 full boxes</strong> of 10 crayons.<br>• <strong>2 loose crayons</strong> will remain.",
        marks: 2,
        rubric: [{ key: "8 full boxes identified", marks: "1 M" }, { key: "2 loose crayons identified", marks: "1 M" }]
      },
      {
        category: "Money Connection • 10-Rupee Coins",
        q: "Dinesh wants to buy a toy car costing ₹50. How many 10-rupee coins must he give to the shopkeeper?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Cost of toy car = ₹50.<br>• Value of 1 coin = ₹10.<br>• Number of ₹10 coins needed = 50 ÷ 10 = <strong>5 coins</strong>.",
        marks: 2,
        rubric: [{ key: "50 ÷ 10 shown", marks: "1 M" }, { key: "5 coins answer correct", marks: "1 M" }]
      },
      {
        category: "Flower Garland Word Problem",
        q: "Rahul has 72 jasmine flowers. He wants to make garlands of 10 flowers each. How many flowers does he need to add so that he can make 8 complete garlands?",
        ans: "<strong>Step-by-Step Solution:</strong><br>• Flowers needed for 8 complete garlands = 8 × 10 = 80 flowers.<br>• Flowers Rahul has = 72 flowers.<br>• Extra flowers needed = 80 - 72 = <strong>8 more flowers</strong>.",
        marks: 2,
        rubric: [{ key: "Target 80 flowers calculated", marks: "1 M" }, { key: "Difference 8 flowers calculated", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) In the number 75, the digit 7 represents 7 ones.<br>(b) 10 packets of 10 bindis make 100 bindis.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. The digit 7 is in the tens place and represents 7 tens (70).<br>(b) <strong>True</strong>. 10 × 10 = 100.",
        marks: 2,
        rubric: [{ key: "(a) False with explanation", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "Why is 10 considered a very special number in our numbering system?",
        ans: "<strong>Explanation:</strong><br>• Our number system is based on groups of 10 (base-10 system).<br>• Whenever we reach 10 ones, they combine to form 1 ten. Whenever we reach 10 tens, they combine to form 1 hundred (100). This allows us to write any large number easily using place values.",
        marks: 2,
        rubric: [{ key: "Base-10 grouping explained", marks: "1 M" }, { key: "Transition from ones to tens to hundreds", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "Which is greater: 6 tens and 3 ones OR 3 tens and 6 ones? Explain by calculating both values.",
        ans: "<strong>Step-by-Step Solution:</strong><br>• 6 tens and 3 ones = 60 + 3 = 63.<br>• 3 tens and 6 ones = 30 + 6 = 36.<br>• Since 63 > 36, <strong>6 tens and 3 ones (63) is greater</strong>.",
        marks: 2,
        rubric: [{ key: "Values 63 and 36 calculated", marks: "1 M" }, { key: "63 identified as greater", marks: "1 M" }]
      }
    ]
  }
];

module.exports = { mathMagicPart1 };
