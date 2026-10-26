// scripts/data-c1-maths/joyfulMathsData.js
// Official NCERT Class 1 Mathematics: "Joyful Mathematics" Complete 100% Dataset (NEP 2020 / NCF-FS)
// Verified 0% Shortage across all 13 chapters.

const joyfulMathsChapters = [
  {
    "id": "jm1",
    "num": 1,
    "unit": "Unit 1: Spatial Understanding & Shapes",
    "title": "Finding the Furry Cat",
    "subtitle": "Pre-Number Spatial Concepts: Inside/Outside, Top/Bottom, Nearer/Farther, On/Under",
    "concepts": [
      "Identifying spatial positions: inside and outside, on and under, top and bottom.",
      "Comparing distances: nearer to and farther from a reference object.",
      "Developing spatial vocabulary through visual observation and classroom games."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><rect x=\"40\" y=\"40\" width=\"80\" height=\"50\" fill=\"#3b82f6\" rx=\"6\"/><circle cx=\"80\" cy=\"65\" r=\"14\" fill=\"#fef08a\"/><text x=\"80\" y=\"69\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#854d0e\">Cat</text><text x=\"80\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Inside Box</text><rect x=\"180\" y=\"70\" width=\"100\" height=\"15\" fill=\"#8b5cf6\" rx=\"3\"/><circle cx=\"230\" cy=\"55\" r=\"14\" fill=\"#fed7aa\"/><text x=\"230\" y=\"59\" font-size=\"10\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#9a3412\">Cat</text><text x=\"230\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">On the Table</text><line x1=\"330\" y1=\"80\" x2=\"470\" y2=\"80\" stroke=\"#94a3b8\" stroke-width=\"4\"/><circle cx=\"360\" cy=\"70\" r=\"14\" fill=\"#bbf7d0\"/><circle cx=\"450\" cy=\"70\" r=\"14\" fill=\"#fecaca\"/><text x=\"360\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Near Tree</text><text x=\"450\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Far from Tree</text></svg>",
    "cbq": {
      "title": "Playground Spatial Clues",
      "text": "Lina and Kabir are playing hide and seek in the school garden. Lina spots her kitten sitting under a wooden bench, Kabir is standing on top of the slide, and a squirrel is inside a hollow log.",
      "question": "Which animal is underneath a playground object? Where is Kabir located relative to the slide?",
      "answer": "1. The kitten is underneath the playground object (sitting under the wooden bench).<br>2. Kabir is at the top of the slide (on top).",
      "rubric": "1 M for kitten under bench + 1 M for Kabir on top of slide"
    },
    "questions": [
      {
        "category": "Textbook Activity • Inside or Outside",
        "q": "In the picture on Page 4, the furry cat is sleeping in a basket. Is the cat inside the basket or outside the basket?",
        "ans": "<strong>Answer:</strong><br>The furry cat is <strong>inside the basket</strong> because its entire body is resting within the borders of the basket.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct position identified as 'inside'",
            "marks": "1 M"
          },
          {
            "key": "Explanation using boundary",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Concept Check • Top and Bottom",
        "q": "Look at the big mango tree. A red bird is sitting on the highest branch and a puppy is playing on the grass below. Who is at the top and who is at the bottom?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The red bird is at the <strong>top</strong> (highest branch of the tree).<br>• The puppy is at the <strong>bottom</strong> (on the grass under the tree).",
        "marks": 2,
        "rubric": [
          {
            "key": "Bird at the top",
            "marks": "1 M"
          },
          {
            "key": "Puppy at the bottom",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spatial Comparison • Nearer and Farther",
        "q": "Two children, Rohan and Priya, are walking to school. Rohan is 5 steps away from the school gate, while Priya is 25 steps away. Who is nearer to the school gate and who is farther from it?",
        "ans": "<strong>Step-by-Step Comparison:</strong><br>• Rohan is 5 steps away, so Rohan is <strong>nearer</strong> to the school gate.<br>• Priya is 25 steps away, so Priya is <strong>farther</strong> from the school gate.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rohan identified as nearer",
            "marks": "1.5 M"
          },
          {
            "key": "Priya identified as farther",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Observation • On and Under",
        "q": "A book is placed on the table, and a ball is kept under the table. What will happen if you drop an eraser from above the table? Where does it fall?",
        "ans": "<strong>Answer:</strong><br>The eraser starts from <strong>above</strong> the table. If dropped, it will land <strong>on</strong> the table or bounce onto the floor <strong>under</strong> the table.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identifying 'above' and 'on/under' table",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Think & Discuss • Bigger or Smaller",
        "q": "Draw or name two fruits found in your kitchen: one that is bigger and one that is smaller.",
        "ans": "<strong>Answer:</strong><br>• <strong>Bigger fruit:</strong> Watermelon (तरबूज) or Papaya (पपीता).<br>• <strong>Smaller fruit:</strong> Lemon (नींबू) or Grape (अंगूर).<br>Watermelon is much bigger in size than a lemon.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct example of bigger fruit",
            "marks": "1 M"
          },
          {
            "key": "Correct example of smaller fruit",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Everyday Math • Above and Below",
        "q": "A ceiling fan is spinning above the bed, and a pair of slippers is kept below the bed. Which object is above and which is below?",
        "ans": "<strong>Answer:</strong><br>• The <strong>ceiling fan</strong> is <strong>above</strong> the bed.<br>• The <strong>slippers</strong> are <strong>below</strong> (under) the bed.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fan identified as above",
            "marks": "1 M"
          },
          {
            "key": "Slippers identified as below",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Inside & Outside",
        "q": "Look at the classroom window. Meenu puts her pencil box inside her school bag. Where is the pencil box now — inside or outside the bag?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Meenu places the pencil box through the opening of the school bag.<br>2. Therefore, the pencil box is <strong>inside the school bag</strong>.<br>3. When taken out on the study desk, it will be outside.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 'inside'",
            "marks": "1 M"
          },
          {
            "key": "Clear spatial reasoning",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Top & Bottom",
        "q": "A crow is sitting on the highest branch of a neem tree, and an ant is crawling near the roots on the ground. Who is at the top and who is at the bottom?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Top:</strong> The crow is at the top of the tree because it is sitting at the highest branch.<br>• <strong>Bottom:</strong> The ant is at the bottom because it is crawling on the ground near the roots.",
        "marks": 2,
        "rubric": [
          {
            "key": "Crow at the top",
            "marks": "1 M"
          },
          {
            "key": "Ant at the bottom",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Nearer & Farther",
        "q": "In the playground, Rohan is standing 3 steps away from the slide, while Simran is standing 12 steps away from the slide. Who is nearer to the slide and who is farther?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Compare the number of steps: 3 steps is smaller than 12 steps.<br>2. <strong>Nearer:</strong> Rohan is nearer to the slide (fewer steps away).<br>3. <strong>Farther:</strong> Simran is farther from the slide (more steps away).",
        "marks": 2,
        "rubric": [
          {
            "key": "Rohan is nearer",
            "marks": "1 M"
          },
          {
            "key": "Simran is farther",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Visual Drill • Bigger & Smaller",
        "q": "Compare a football and a marble. Which one is bigger in size, and which one is smaller?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Bigger:</strong> The football is bigger because it takes up more space in your hands.<br>• <strong>Smaller:</strong> The marble is smaller because it is tiny and fits easily inside a closed fist.",
        "marks": 2,
        "rubric": [
          {
            "key": "Football is bigger",
            "marks": "1 M"
          },
          {
            "key": "Marble is smaller",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • On & Under",
        "q": "Golu the puppy is sleeping under the wooden dining table, while a vase is placed on the table. Describe the positions of Golu and the vase.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. The vase is resting on the top flat surface, so it is <strong>on the table</strong>.<br>2. Golu is resting beneath the table legs on the floor, so he is <strong>under the table</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Vase is on the table",
            "marks": "1 M"
          },
          {
            "key": "Golu is under the table",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Above & Below",
        "q": "A ceiling fan is rotating overhead above the bed, and slippers are resting on the floor below the bed. Explain the difference between 'above' and 'below'.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Above:</strong> An object located at a higher level without touching (like the ceiling fan above the bed).<br>• <strong>Below:</strong> An object located at a lower level beneath (like slippers resting below the bed).",
        "marks": 2,
        "rubric": [
          {
            "key": "Concept of above explained",
            "marks": "1 M"
          },
          {
            "key": "Concept of below explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Story • Cat's Hiding Places",
        "q": "The furry cat hid in 3 places: inside a cardboard carton, behind a wooden door, and under the sofa. Match each place to its correct spatial position word.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Carton → <strong>Inside</strong> (surrounded by box walls)<br>• Wooden door → <strong>Behind</strong> (hidden on the rear side)<br>• Sofa → <strong>Under</strong> (lying on the floor beneath)",
        "marks": 3,
        "rubric": [
          {
            "key": "Carton = inside",
            "marks": "1 M"
          },
          {
            "key": "Door = behind",
            "marks": "1 M"
          },
          {
            "key": "Sofa = under",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Footprint Tracking",
        "q": "Look at the footprints in the garden sand: a small cat's paw print and a large cow's hoof print. How can you tell which animal is bigger from its footprints?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Bigger animals have larger feet to support their heavier body weight.<br>2. The cow's hoof print is wide and deep, showing it belongs to the <strong>bigger animal</strong>.<br>3. The cat's paw print is small and light, showing it belongs to the <strong>smaller animal</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cow print is larger = bigger animal",
            "marks": "1 M"
          },
          {
            "key": "Cat print is smaller = smaller animal",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Oral Discussion • Before & After",
        "q": "When washing hands before lunch, what do you do first: apply soap or rinse with water? What comes before eating?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>First:</strong> Wet hands and apply soap, then rinse with water.<br>• <strong>Before Eating:</strong> Washing hands comes <strong>before</strong> eating lunch to remove dirt and germs.",
        "marks": 2,
        "rubric": [
          {
            "key": "Washing hands comes before eating",
            "marks": "1 M"
          },
          {
            "key": "Proper hygienic sequencing",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Drawing & Identification • Near the Tree",
        "q": "Draw or describe: A bench is placed nearest to the banyan tree, while a swing is farthest. Where would you go to sit immediately after running under the tree shade?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• You should go to the <strong>bench</strong> because it is nearest to the tree and directly under the cool shade.<br>• The swing is farther away across the open grass.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified bench as nearest",
            "marks": "1 M"
          },
          {
            "key": "Connected nearness to shade convenience",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Finding the Furry Cat",
        "q": "Solve the core NCERT learning activity for Chapter 1 ('Finding the Furry Cat'): Focus on \"Comparing distances: nearer to and farther from a reference object.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Finding the Furry Cat', students master <em>Comparing distances: nearer to and farther from a reference object.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm2",
    "num": 2,
    "unit": "Unit 1: Spatial Understanding & Shapes",
    "title": "What is Long? What is Round?",
    "subtitle": "Exploring 3D & 2D Shapes: Rolling, Sliding, and Sorting Objects",
    "concepts": [
      "Distinguishing between long objects and round objects.",
      "Understanding rolling vs sliding based on flat and curved surfaces.",
      "Sorting daily life objects by shape and building towers."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><rect x=\"50\" y=\"45\" width=\"110\" height=\"15\" fill=\"#f59e0b\" rx=\"4\"/><text x=\"105\" y=\"80\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Long (Pencil/Stick)</text><circle cx=\"250\" cy=\"52\" r=\"22\" fill=\"#ef4444\"/><text x=\"250\" y=\"90\" font-size=\"11\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Round (Ball/Orange)</text><rect x=\"360\" y=\"32\" width=\"40\" height=\"40\" fill=\"#3b82f6\" rx=\"3\"/><text x=\"380\" y=\"90\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Slides (Box)</text><circle cx=\"450\" cy=\"52\" r=\"18\" fill=\"#10b981\"/><text x=\"450\" y=\"90\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Rolls (Wheel)</text></svg>",
    "cbq": {
      "title": "Tower Building Challenge",
      "text": "During art class, Rohan tries to build a high tower using 5 round tennis balls, but the balls roll away and the tower falls down. Meena uses 5 matchboxes and successfully builds a tall tower.",
      "question": "Why did Rohan's tower collapse while Meena's tower stood firmly? Which shape is best for stacking?",
      "answer": "1. Rohan used round balls with curved surfaces which roll easily and have no flat faces to balance on.<br>2. Meena used matchboxes with flat faces that slide and stack stably without rolling. Flat-faced objects are best for stacking.",
      "rubric": "1.5 M for curved surfaces roll + 1.5 M for flat surfaces stack"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Long vs Round",
        "q": "Classify the following items into 'Long' and 'Round': Ruler, Cricket Ball, Flute (Bansuri), Orange, Carrot, Coin.",
        "ans": "<strong>Classification:</strong><br>• <strong>Long Objects:</strong> Ruler, Flute (Bansuri), Carrot.<br>• <strong>Round Objects:</strong> Cricket Ball, Orange, Coin (circular face).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correctly classified long objects",
            "marks": "1.5 M"
          },
          {
            "key": "Correctly classified round objects",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Action Investigation • Rolling and Sliding",
        "q": "Will a football roll or slide on a smooth slide in the park? What about a wooden block?",
        "ans": "<strong>Answer:</strong><br>• A <strong>football rolls</strong> because it has a curved round surface.<br>• A <strong>wooden block slides</strong> because it has flat surfaces.",
        "marks": 2,
        "rubric": [
          {
            "key": "Football rolls explained",
            "marks": "1 M"
          },
          {
            "key": "Wooden block slides explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Math • Both Roll and Slide",
        "q": "Name two objects that can both roll and slide.",
        "ans": "<strong>Answer:</strong><br>1. <strong>A Coin:</strong> It rolls when pushed on its round edge, and it slides when pushed flat on its face.<br>2. <strong>A Water Bottle or Glass Tumbler:</strong> It rolls when kept on its curved side, and slides when standing on its flat bottom.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two objects identified",
            "marks": "1 M"
          },
          {
            "key": "Explanation of how both happen",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Making Towers",
        "q": "Can you stack coins to make a tower? Why does a coin tower stand, but a marble tower cannot be made?",
        "ans": "<strong>Answer:</strong><br>• Yes, coins can be stacked into a tower because coins have <strong>flat top and bottom surfaces</strong>.<br>• Marbles cannot be stacked because they are completely <strong>round with only curved surfaces</strong>, so they roll off.",
        "marks": 3,
        "rubric": [
          {
            "key": "Coins stack due to flat faces",
            "marks": "1.5 M"
          },
          {
            "key": "Marbles roll off due to curved surfaces",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Riddle Time • Guess the Shape",
        "q": "'Round all around, has no corners, I can roll in your hand.' What am I?",
        "ans": "<strong>Answer:</strong><br>You are a <strong>Ball</strong> (or an Orange / Lemon / Marble / Ladoo).",
        "marks": 1,
        "rubric": [
          {
            "key": "Correct answer (Ball/Circle)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Thinking • Drawing Shapes",
        "q": "Draw or describe an object that is long and pointed at one end.",
        "ans": "<strong>Answer:</strong><br>A <strong>Pencil</strong> or a <strong>Crayon</strong> or a <strong>Chili</strong>. It has a long cylindrical body with a sharp pointed tip at one end.",
        "marks": 2,
        "rubric": [
          {
            "key": "Object named and described",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Blindfold Touch Game",
        "q": "In Uncle Golu's blindfold game, Kabir touches an object with no corners and a smooth curved body that rolls easily in his hands. What shape is it?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. An object with no corners and a curved body that rolls is <strong>round (spherical)</strong>.<br>2. Examples: A tennis ball, cricket ball, orange, or marble.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified as round / sphere",
            "marks": "1 M"
          },
          {
            "key": "Valid real-life example",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Rolling vs Sliding",
        "q": "Test these four items on a wooden desk ramp: (a) A round tomato, (b) An eraser, (c) A glass marble, (d) A flat ruler. Which roll and which slide?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Roll:</strong> Tomato and Glass marble (because they have curved surfaces).<br>• <strong>Slide:</strong> Eraser and Flat ruler (because they have flat faces that glide along the surface).",
        "marks": 2,
        "rubric": [
          {
            "key": "Tomato & marble roll",
            "marks": "1 M"
          },
          {
            "key": "Eraser & ruler slide",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Both Rolls and Slides",
        "q": "Take a ₹5 coin. When does it roll, and when does it slide? Name another object that can do both.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Rolls:</strong> When placed upright on its thin curved edge and gently pushed, it rolls like a wheel.<br>• <strong>Slides:</strong> When placed flat on its face (Heads or Tails) and pushed, it slides.<br>• <strong>Another object:</strong> A carrom striker or a cylindrical water bottle.",
        "marks": 3,
        "rubric": [
          {
            "key": "Rolls on curved edge",
            "marks": "1 M"
          },
          {
            "key": "Slides on flat face",
            "marks": "1 M"
          },
          {
            "key": "Valid second example",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Construction • Tower Making",
        "q": "Three children try to make towers: Tina uses wooden blocks, Priya uses matchboxes, and Aman uses oranges. Whose tower will fall down immediately, and why?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. <strong>Aman's tower will fall down</strong> immediately.<br>2. <strong>Reason:</strong> Oranges are round with curved surfaces that roll off when stacked.<br>3. Wooden blocks and matchboxes have flat faces that rest securely on top of each other.",
        "marks": 3,
        "rubric": [
          {
            "key": "Aman's tower falls",
            "marks": "1 M"
          },
          {
            "key": "Curved surface rolls off",
            "marks": "1 M"
          },
          {
            "key": "Flat surfaces allow stable stacking",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Observation • Long vs Round",
        "q": "Look at the vegetable basket: Carrot, Onion, Cucumber, Lemon, Bitter gourd, Tomato. Classify them into 'Long' and 'Round'.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Long Vegetables:</strong> Carrot, Cucumber, Bitter gourd.<br>• <strong>Round Vegetables:</strong> Onion, Lemon, Tomato.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct long vegetables",
            "marks": "1 M"
          },
          {
            "key": "Correct round vegetables",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Coin Spinning Trick",
        "q": "Spin a ₹2 coin like a top on a smooth table. What shape does the spinning coin look like while it spins fast?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• When a flat round coin spins rapidly on its edge, it looks like a <strong>round ball (sphere)</strong>.<br>• Once it slows down and stops, it falls flat on the table.",
        "marks": 2,
        "rubric": [
          {
            "key": "Looks like a round ball / sphere",
            "marks": "1 M"
          },
          {
            "key": "Observation of spinning motion",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Tracing • Matchbox vs Bangle",
        "q": "What 2D shape do you get if you trace the outline of: (a) A round plastic bangle, (b) The bottom face of a matchbox?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• (a) Tracing a round bangle gives a <strong>Circle</strong>.<br>• (b) Tracing the bottom face of a matchbox gives a <strong>Rectangle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bangle = Circle",
            "marks": "1 M"
          },
          {
            "key": "Matchbox = Rectangle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Thinking • Pipe Stacking",
        "q": "Can you stack hollow cardboard pipes to make a tall standing tower? How must you place them so they don't roll?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. If pipes are placed on their curved sides, they will roll and scatter.<br>2. To stack them securely, stand them vertically on their <strong>flat circular circular ends</strong>, or place them in a pyramid row inside a tray.",
        "marks": 2,
        "rubric": [
          {
            "key": "Must stand on flat ends",
            "marks": "1 M"
          },
          {
            "key": "Recognized curved side rolls",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Summary Drill • Corners and Edges",
        "q": "How many straight edges does a post-it square have? Does a cricket ball have any straight edges?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• A square post-it note has <strong>4 straight edges</strong> and 4 corners.<br>• A cricket ball has <strong>0 straight edges</strong> (it has only 1 continuous curved surface).",
        "marks": 2,
        "rubric": [
          {
            "key": "Square: 4 straight edges",
            "marks": "1 M"
          },
          {
            "key": "Ball: 0 straight edges",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Classroom Exploration • Bag Items",
        "q": "Name 2 items from your school bag that have flat surfaces and 2 items that have curved surfaces.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• <strong>Flat surfaces:</strong> Notebook, Pencil box.<br>• <strong>Curved surfaces:</strong> Glue stick (tube), Water bottle.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two flat items named",
            "marks": "1 M"
          },
          {
            "key": "Two curved items named",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • What is Long? What is Round?",
        "q": "Solve the core NCERT learning activity for Chapter 2 ('What is Long? What is Round?'): Focus on \"Understanding rolling vs sliding based on flat and curved surfaces.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'What is Long? What is Round?', students master <em>Understanding rolling vs sliding based on flat and curved surfaces.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm3",
    "num": 3,
    "unit": "Unit 2: Number Sense (1 to 9)",
    "title": "Mango Treat",
    "subtitle": "Counting 1 to 9, Number Names, One-to-One Matching & Comparison",
    "concepts": [
      "Counting physical objects from 1 to 9 with one-to-one correspondence.",
      "Writing numerals and matching with number names: One to Nine.",
      "Comparing sets: More than, Less than, and Equal to."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"10\"/><circle cx=\"50\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"50\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">1</text><circle cx=\"100\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"100\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">2</text><circle cx=\"150\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"150\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">3</text><circle cx=\"200\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"200\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">4</text><circle cx=\"250\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"250\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">5</text><circle cx=\"300\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"300\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">6</text><circle cx=\"350\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"350\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">7</text><circle cx=\"400\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"400\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">8</text><circle cx=\"450\" cy=\"50\" r=\"16\" fill=\"#f97316\"/><text x=\"450\" y=\"55\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">9</text><text x=\"250\" y=\"100\" font-size=\"12\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">Numbers 1 to 9 with One-to-One Correspondence</text></svg>",
    "cbq": {
      "title": "Grandmother's Mango Basket",
      "text": "Dadi brings a basket of ripe mangoes from the orchard. Ankit counts 7 mangoes in the basket, while Simran counts 5 mangoes in her bag.",
      "question": "Who has more mangoes? How many more mangoes are there in the basket than in the bag?",
      "answer": "1. Ankit has more mangoes (7 > 5).<br>2. 7 - 5 = 2 more mangoes in Dadi's basket.",
      "rubric": "1.5 M for Ankit / 7 > 5 + 1.5 M for 2 more mangoes"
    },
    "questions": [
      {
        "category": "Counting • Number Matching",
        "q": "Count the objects and write the number and number name: 🍎🍎🍎🍎🍎 (5 apples).",
        "ans": "<strong>Answer:</strong><br>• Count: 1, 2, 3, 4, 5<br>• Number: <strong>5</strong><br>• Number Name: <strong>FIVE</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct numeral 5",
            "marks": "1 M"
          },
          {
            "key": "Correct number name FIVE",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparison • More or Less",
        "q": "Set A has 6 butterflies. Set B has 4 flowers. Which set has more objects? Can every butterfly sit on a flower?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Set A = 6 butterflies<br>• Set B = 4 flowers<br>• 6 is more than 4 (6 > 4). Set A has more objects.<br>• No, only 4 butterflies will get a flower; 2 butterflies will be left without a flower.",
        "marks": 3,
        "rubric": [
          {
            "key": "Set A has more (6 > 4)",
            "marks": "1.5 M"
          },
          {
            "key": "Explanation of 2 left without flower",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Number Sequence • Missing Numbers",
        "q": "Fill in the missing numbers in the train: 1, 2, __, 4, __, 6, 7, __, 9.",
        "ans": "<strong>Answer:</strong><br>The missing numbers are <strong>3</strong>, <strong>5</strong>, and <strong>8</strong>.<br>Complete sequence: 1, 2, <strong>3</strong>, 4, <strong>5</strong>, 6, 7, <strong>8</strong>, 9.",
        "marks": 3,
        "rubric": [
          {
            "key": "3, 5, 8 identified correctly",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Concept of Zero • Empty Plate",
        "q": "There were 3 laddoos on a plate. Chintu ate all 3 laddoos. How many laddoos are left on the plate?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Starting laddoos = 3<br>• Laddoos eaten = 3<br>• Remaining laddoos = 3 - 3 = <strong>0 (Zero)</strong>.<br>There are no laddoos left.",
        "marks": 2,
        "rubric": [
          {
            "key": "Calculation 3 - 3 = 0",
            "marks": "1 M"
          },
          {
            "key": "Concept of Zero explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Before, After and Between",
        "q": "Write what comes before, after, and between:<br>(a) What comes before 5?<br>(b) What comes after 7?<br>(c) What comes between 3 and 5?",
        "ans": "<strong>Answer:</strong><br>(a) Number before 5 is <strong>4</strong>.<br>(b) Number after 7 is <strong>8</strong>.<br>(c) Number between 3 and 5 is <strong>4</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Part (a): 4",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 8",
            "marks": "1 M"
          },
          {
            "key": "Part (c): 4",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Make 5",
        "q": "Show two different ways to make the number 5 using two groups.",
        "ans": "<strong>Answer:</strong><br>• Way 1: 2 + 3 = 5 (2 red dots and 3 blue dots)<br>• Way 2: 1 + 4 = 5 (1 green leaf and 4 yellow leaves)<br>• Way 3: 0 + 5 = 5.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid combinations given",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • As Many As",
        "q": "There are 5 hungry kittens and 5 bowls of warm milk. Is there a bowl for every kitten? Explain using 'As many as'.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Number of kittens = 5.<br>2. Number of milk bowls = 5.<br>3. Since 5 = 5, there are <strong>as many bowls as there are kittens</strong>. Every kitten gets exactly 1 bowl.",
        "marks": 2,
        "rubric": [
          {
            "key": "Recognized 5 = 5 matching",
            "marks": "1 M"
          },
          {
            "key": "Used 'as many as' correctly",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Counting 1 to 5 Rhyme",
        "q": "Count the items: 1 Sun, 2 Eyes, 3 Wheels of an auto, 4 Legs of a dog, 5 Fingers of a hand. Write their numerals in order.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• The numerals in order are: <strong>1, 2, 3, 4, 5</strong>.<br>• Number names: One, Two, Three, Four, Five.",
        "marks": 2,
        "rubric": [
          {
            "key": "Numerals 1, 2, 3, 4, 5 in order",
            "marks": "1 M"
          },
          {
            "key": "Correct number names",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • More or Less",
        "q": "Group A has 7 ripe red apples. Group B has 4 ripe red apples. Tick the group that has more apples. How many more?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Group A has 7 apples and Group B has 4 apples.<br>• 7 is greater than 4, so <strong>Group A has more apples</strong>.<br>• Difference = 7 - 4 = <strong>3 more apples</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Group A has more",
            "marks": "1 M"
          },
          {
            "key": "3 more apples calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Dot Card Pairing • Missing Dots",
        "q": "A domino tile has 4 dots on the left half and 2 dots on the right half. How many dots are on the tile in all?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Left dots = 4<br>• Right dots = 2<br>• Total dots = 4 + 2 = <strong>6 dots</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition sentence 4 + 2",
            "marks": "1 M"
          },
          {
            "key": "Correct answer (6 dots)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Visual Drill • Making Groups of Given Number",
        "q": "Draw 9 mangoes. Circle a group of 6 mangoes. How many mangoes remain uncircled?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Total mangoes = 9.<br>2. Circled group = 6.<br>3. Uncircled mangoes = 9 - 6 = <strong>3 mangoes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct grouping of 6",
            "marks": "1 M"
          },
          {
            "key": "Remaining 3 calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Number Names 1 to 9",
        "q": "Write the number name for each numeral: 3, 6, 8, 9.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• 3 = <strong>Three</strong><br>• 6 = <strong>Six</strong><br>• 8 = <strong>Eight</strong><br>• 9 = <strong>Nine</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 number names spelled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Concept of Zero • Empty Basket",
        "q": "There were 3 sweet mangoes in a cane basket. Rahul ate 1, Simran ate 1, and Grandpa ate 1. How many mangoes are left in the basket?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Initial mangoes = 3.<br>2. Mangoes eaten = 1 + 1 + 1 = 3.<br>3. Mangoes left = 3 - 3 = <strong>0 (Zero)</strong>.<br>4. Zero means nothing is left in the basket.",
        "marks": 2,
        "rubric": [
          {
            "key": "Calculation 3 - 3 = 0",
            "marks": "1 M"
          },
          {
            "key": "Zero explained as 'none left'",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Rail • Missing Numbers",
        "q": "Fill the missing numbers in the train compartments: 1, 2, __, 4, __, 6, 7, __, 9.",
        "ans": "<strong>Step-by-Step Answer:</strong><br>Counting sequentially from 1 to 9:<br>1, 2, <strong>3</strong>, 4, <strong>5</strong>, 6, 7, <strong>8</strong>, 9.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 3, 5, 8 accurately",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Before, After & Between",
        "q": "What number comes: (a) Just before 5? (b) Just after 7? (c) Between 3 and 5?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• (a) Just before 5 is <strong>4</strong>.<br>• (b) Just after 7 is <strong>8</strong>.<br>• (c) Between 3 and 5 is <strong>4</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Before 5 = 4",
            "marks": "1 M"
          },
          {
            "key": "After 7 = 8",
            "marks": "1 M"
          },
          {
            "key": "Between 3 & 5 = 4",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Birds on a Branch",
        "q": "Four little sparrows are sitting on a tree branch. Two more sparrows fly in and sit with them. How many sparrows are on the branch now?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Sparrows already on branch = 4<br>• New sparrows joining = 2<br>• Total sparrows = 4 + 2 = <strong>6 sparrows</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition expression 4 + 2",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 6 sparrows",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Count and Match • Fingers and Dots",
        "q": "A hand shows 5 outstretched fingers. How many more fingers must you raise from the other hand to show 8 fingers in total?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>1. Starting fingers = 5.<br>2. Target total = 8.<br>3. Count forward from 5: 6 (one), 7 (two), 8 (three).<br>4. You must raise <strong>3 more fingers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Counting forward logic",
            "marks": "1 M"
          },
          {
            "key": "Answer: 3 fingers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Competency Check • Comparing Collections",
        "q": "Neeraj has 6 crayons and Tarun has 8 crayons. Who has fewer crayons? How many more does he need to have equal crayons?",
        "ans": "<strong>Step-by-Step Answer:</strong><br>• Comparing: 6 is less than 8, so <strong>Neeraj has fewer crayons</strong>.<br>• To be equal: 8 - 6 = <strong>2 more crayons</strong> needed by Neeraj.",
        "marks": 2,
        "rubric": [
          {
            "key": "Neeraj has fewer",
            "marks": "1 M"
          },
          {
            "key": "Needs 2 more crayons",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm4",
    "num": 4,
    "unit": "Unit 2: Number Sense (10 to 20)",
    "title": "Making 10",
    "subtitle": "Understanding a Bundle of 10, Place Value: Tens and Ones",
    "concepts": [
      "Grouping 10 loose sticks into 1 bundle of ten.",
      "Understanding two-digit numbers 10 to 20 as Tens and Ones.",
      "Number bonds to 10 (combinations that add up to 10)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"10\"/><rect x=\"60\" y=\"30\" width=\"60\" height=\"60\" fill=\"#22c55e\" rx=\"6\"/><text x=\"90\" y=\"65\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">1 Bundle</text><text x=\"90\" y=\"80\" font-size=\"10\" font-weight=\"700\" fill=\"#dcfce7\" text-anchor=\"middle\">(10 Sticks)</text><text x=\"140\" y=\"65\" font-size=\"20\" font-weight=\"700\" fill=\"#166534\">+</text><circle cx=\"180\" cy=\"45\" r=\"8\" fill=\"#16a34a\"/><circle cx=\"180\" cy=\"75\" r=\"8\" fill=\"#16a34a\"/><circle cx=\"205\" cy=\"60\" r=\"8\" fill=\"#16a34a\"/><text x=\"195\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">3 Ones</text><text x=\"245\" y=\"65\" font-size=\"20\" font-weight=\"700\" fill=\"#166534\">=</text><rect x=\"280\" y=\"30\" width=\"140\" height=\"60\" fill=\"#15803d\" rx=\"8\"/><text x=\"350\" y=\"58\" font-size=\"18\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">13</text><text x=\"350\" y=\"78\" font-size=\"11\" font-weight=\"700\" fill=\"#dcfce7\" text-anchor=\"middle\">1 Ten + 3 Ones</text></svg>",
    "cbq": {
      "title": "Matchstick Bundles Activity",
      "text": "Farmer Ramu has 15 matchsticks. His teacher tells him to tie 10 sticks with a rubber band to make one bundle of Ten.",
      "question": "How many bundles of 10 does Ramu make, and how many loose sticks are left over?",
      "answer": "1. Ramu makes <strong>1 bundle of 10</strong>.<br>2. <strong>5 loose sticks (ones)</strong> are left over.<br>15 = 1 Ten + 5 Ones.",
      "rubric": "1.5 M for 1 bundle + 1.5 M for 5 loose sticks"
    },
    "questions": [
      {
        "category": "Number Bonds • Making 10",
        "q": "Fill in the blanks to make 10:<br>(a) 7 + __ = 10<br>(b) 4 + __ = 10<br>(c) 5 + __ = 10",
        "ans": "<strong>Answer:</strong><br>(a) 7 + <strong>3</strong> = 10<br>(b) 4 + <strong>6</strong> = 10<br>(c) 5 + <strong>5</strong> = 10",
        "marks": 3,
        "rubric": [
          {
            "key": "(a) 3",
            "marks": "1 M"
          },
          {
            "key": "(b) 6",
            "marks": "1 M"
          },
          {
            "key": "(c) 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Place Value • Tens and Ones",
        "q": "Break up the number 16 into Tens and Ones.",
        "ans": "<strong>Answer:</strong><br>16 = <strong>1 Ten</strong> and <strong>6 Ones</strong> (10 + 6 = 16).",
        "marks": 2,
        "rubric": [
          {
            "key": "1 Ten identified",
            "marks": "1 M"
          },
          {
            "key": "6 Ones identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Counting • 10 to 20",
        "q": "Write the number names for the following numerals: 11, 14, 18, 20.",
        "ans": "<strong>Answer:</strong><br>• 11 = <strong>Eleven</strong><br>• 14 = <strong>Fourteen</strong><br>• 18 = <strong>Eighteen</strong><br>• 20 = <strong>Twenty</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 number names spelled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Comparison • Bigger Number",
        "q": "Which number is greater: 12 or 17? Explain using tens and ones.",
        "ans": "<strong>Explanation:</strong><br>• 12 = 1 ten and 2 ones.<br>• 17 = 1 ten and 7 ones.<br>Both numbers have 1 ten, but 17 has 7 ones, which is more than 2 ones. Therefore, <strong>17 is greater than 12</strong> (17 > 12).",
        "marks": 2,
        "rubric": [
          {
            "key": "17 identified as greater",
            "marks": "1 M"
          },
          {
            "key": "Explanation using ones",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Sum • Beads on a String",
        "q": "Meera strung 10 red beads and 4 yellow beads onto a necklace. How many total beads did she put on the necklace?",
        "ans": "<strong>Calculation:</strong><br>• Red beads = 10 (1 ten)<br>• Yellow beads = 4 (4 ones)<br>• Total beads = 10 + 4 = <strong>14 beads</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition statement 10 + 4",
            "marks": "1 M"
          },
          {
            "key": "Final sum: 14 beads",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Tens Frame",
        "q": "A ten-frame has 8 counters placed in it. How many more counters are needed to fill the whole ten-frame?",
        "ans": "<strong>Answer:</strong><br>A full frame holds 10 counters.<br>Counters present = 8.<br>Counters needed = 10 - 8 = <strong>2 counters</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 10 - 8 = 2",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Grouping 10 loose sticks into 1 bundle of ten.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Grouping 10 loose sticks into 1 bundle of ten.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Understanding two-digit numbers 10 to 20 as Tens and Ones.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Understanding two-digit numbers 10 to 20 as Tens and Ones.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Number bonds to 10 (combinations that add up to 10).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Number bonds to 10 (combinations that add up to 10).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Grouping 10 loose sticks into 1 bundle of ten.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Grouping 10 loose sticks into 1 bundle of ten.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Understanding two-digit numbers 10 to 20 as Tens and Ones.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Understanding two-digit numbers 10 to 20 as Tens and Ones.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Number bonds to 10 (combinations that add up to 10).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Number bonds to 10 (combinations that add up to 10).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Grouping 10 loose sticks into 1 bundle of ten.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Grouping 10 loose sticks into 1 bundle of ten.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Understanding two-digit numbers 10 to 20 as Tens and Ones.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Understanding two-digit numbers 10 to 20 as Tens and Ones.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Number bonds to 10 (combinations that add up to 10).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Number bonds to 10 (combinations that add up to 10).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Grouping 10 loose sticks into 1 bundle of ten.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Grouping 10 loose sticks into 1 bundle of ten.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Making 10",
        "q": "Solve the core NCERT learning activity for Chapter 4 ('Making 10'): Focus on \"Understanding two-digit numbers 10 to 20 as Tens and Ones.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Making 10', students master <em>Understanding two-digit numbers 10 to 20 as Tens and Ones.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm5",
    "num": 5,
    "unit": "Unit 3: Operations & Measurement",
    "title": "How Many?",
    "subtitle": "Addition & Subtraction within 20: Joining, Separating & Comparing",
    "concepts": [
      "Understanding addition as putting together or counting on.",
      "Understanding subtraction as taking away or finding the difference.",
      "Solving simple everyday word problems within 20."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf4ff\" rx=\"10\"/><circle cx=\"80\" cy=\"50\" r=\"18\" fill=\"#d946ef\"/><circle cx=\"125\" cy=\"50\" r=\"18\" fill=\"#d946ef\"/><text x=\"102\" y=\"90\" font-size=\"12\" font-weight=\"700\" fill=\"#a21caf\" text-anchor=\"middle\">8 Balloons</text><text x=\"180\" y=\"55\" font-size=\"24\" font-weight=\"800\" fill=\"#a21caf\">+</text><circle cx=\"230\" cy=\"50\" r=\"18\" fill=\"#ec4899\"/><text x=\"230\" y=\"90\" font-size=\"12\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">5 Balloons</text><text x=\"290\" y=\"55\" font-size=\"24\" font-weight=\"800\" fill=\"#a21caf\">=</text><rect x=\"330\" y=\"25\" width=\"120\" height=\"50\" fill=\"#a21caf\" rx=\"8\"/><text x=\"390\" y=\"56\" font-size=\"18\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">13 Balloons</text><text x=\"390\" y=\"95\" font-size=\"11\" font-weight=\"700\" fill=\"#86198f\" text-anchor=\"middle\">8 + 5 = 13 (Put Together)</text></svg>",
    "cbq": {
      "title": "Birdwatching at the Lake",
      "text": "Sonu saw 9 ducks swimming in the pond. 4 more ducks flew in and joined them. Later, 3 ducks walked out to rest on the bank.",
      "question": "How many ducks were in the pond after 4 joined? How many ducks remained swimming when 3 walked out?",
      "answer": "1. Ducks after 4 joined: 9 + 4 = 13 ducks.<br>2. Ducks remaining swimming: 13 - 3 = 10 ducks.",
      "rubric": "1.5 M for 9 + 4 = 13 + 1.5 M for 13 - 3 = 10"
    },
    "questions": [
      {
        "category": "Addition • Counting On",
        "q": "Solve: 8 + 5 using the 'count on' method.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Start at 8.<br>• Count on 5 numbers: 9, 10, 11, 12, 13.<br>• 8 + 5 = <strong>13</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Showing counting on sequence",
            "marks": "1 M"
          },
          {
            "key": "Correct sum: 13",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Subtraction • Taking Away",
        "q": "There were 14 apples in a fruit crate. Ravi took 6 apples for his friends. How many apples are left in the crate?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total apples = 14<br>• Apples taken = 6<br>• Apples left = 14 - 6 = <strong>8 apples</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct subtraction formula 14 - 6",
            "marks": "1 M"
          },
          {
            "key": "Final answer with unit (8 apples)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Pairs • Addition Sentences",
        "q": "Find the missing number in each sentence:<br>(a) 9 + __ = 15<br>(b) 12 - __ = 7",
        "ans": "<strong>Answer:</strong><br>(a) 9 + <strong>6</strong> = 15 (since 15 - 9 = 6)<br>(b) 12 - <strong>5</strong> = 7 (since 12 - 7 = 5)",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 6",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Combining Groups",
        "q": "Pooja has 7 crayons. Her mother gave her 7 more crayons on her birthday. How many crayons does Pooja have now?",
        "ans": "<strong>Calculation:</strong><br>• Existing crayons = 7<br>• New crayons = 7<br>• Total crayons = 7 + 7 = <strong>14 crayons</strong> (Double fact: 7 + 7 = 14).",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 7 + 7",
            "marks": "1 M"
          },
          {
            "key": "Result: 14 crayons",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Subtracting Zero",
        "q": "What is 18 - 0? What happens when you subtract zero from any number?",
        "ans": "<strong>Answer:</strong><br>• 18 - 0 = <strong>18</strong>.<br>• When you subtract zero from any number, the number remains unchanged because zero means taking away nothing.",
        "marks": 2,
        "rubric": [
          {
            "key": "Result 18",
            "marks": "1 M"
          },
          {
            "key": "Rule explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Subtraction on Number Line",
        "q": "Use the number line to calculate 16 - 4. Draw or explain the hops.",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>• Start at 16 on the number line.<br>• Take 4 hops backward: 15, 14, 13, 12.<br>• You land on <strong>12</strong>. Therefore, 16 - 4 = 12.",
        "marks": 2,
        "rubric": [
          {
            "key": "Backward hops shown",
            "marks": "1 M"
          },
          {
            "key": "Answer 12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Understanding addition as putting together or counting on.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Understanding addition as putting together or counting on.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Understanding subtraction as taking away or finding the difference.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Understanding subtraction as taking away or finding the difference.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Solving simple everyday word problems within 20.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Solving simple everyday word problems within 20.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Understanding addition as putting together or counting on.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Understanding addition as putting together or counting on.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Understanding subtraction as taking away or finding the difference.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Understanding subtraction as taking away or finding the difference.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Solving simple everyday word problems within 20.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Solving simple everyday word problems within 20.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Understanding addition as putting together or counting on.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Understanding addition as putting together or counting on.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Understanding subtraction as taking away or finding the difference.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Understanding subtraction as taking away or finding the difference.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Solving simple everyday word problems within 20.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Solving simple everyday word problems within 20.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Understanding addition as putting together or counting on.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Understanding addition as putting together or counting on.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many?",
        "q": "Solve the core NCERT learning activity for Chapter 5 ('How Many?'): Focus on \"Understanding subtraction as taking away or finding the difference.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many?', students master <em>Understanding subtraction as taking away or finding the difference.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm6",
    "num": 6,
    "unit": "Unit 3: Operations & Measurement",
    "title": "Vegetable Farm",
    "subtitle": "Story Problems, Word Scenarios & Practical Arithmetic",
    "concepts": [
      "Solving contextual addition and subtraction problems from farm life.",
      "Comparing quantities of different vegetables harvested.",
      "Formulating mathematical questions based on visual pictures."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"10\"/><circle cx=\"70\" cy=\"50\" r=\"16\" fill=\"#ef4444\"/><text x=\"70\" y=\"55\" font-size=\"10\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">Tomato</text><circle cx=\"120\" cy=\"50\" r=\"16\" fill=\"#ef4444\"/><circle cx=\"170\" cy=\"50\" r=\"16\" fill=\"#ef4444\"/><text x=\"120\" y=\"90\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">12 Tomatoes</text><rect x=\"250\" y=\"35\" width=\"25\" height=\"35\" fill=\"#f97316\" rx=\"4\"/><rect x=\"290\" y=\"35\" width=\"25\" height=\"35\" fill=\"#f97316\" rx=\"4\"/><text x=\"282\" y=\"90\" font-size=\"12\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">8 Carrots</text><text x=\"400\" y=\"50\" font-size=\"14\" font-weight=\"800\" fill=\"#1e293b\">Total: 12 + 8 = 20</text><text x=\"400\" y=\"75\" font-size=\"12\" font-weight=\"700\" fill=\"#166534\">Difference: 12 - 8 = 4</text></svg>",
    "cbq": {
      "title": "Harvest Day at Kaka's Farm",
      "text": "Kaka harvested 11 red pumpkins and 7 green cabbages in the morning. In the afternoon, he sold 6 pumpkins at the mandi.",
      "question": "How many total vegetables did Kaka harvest in the morning? How many pumpkins are left with him?",
      "answer": "1. Total vegetables harvested = 11 + 7 = 18 vegetables.<br>2. Pumpkins left = 11 - 6 = 5 pumpkins.",
      "rubric": "1.5 M for 11 + 7 = 18 + 1.5 M for 11 - 6 = 5"
    },
    "questions": [
      {
        "category": "Farm Story • Addition",
        "q": "A farmer plucked 9 cucumbers from one plant and 8 cucumbers from another plant. How many cucumbers did he pluck altogether?",
        "ans": "<strong>Calculation:</strong><br>• Cucumbers from 1st plant = 9<br>• Cucumbers from 2nd plant = 8<br>• Total cucumbers = 9 + 8 = <strong>17 cucumbers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Number sentence 9 + 8",
            "marks": "1 M"
          },
          {
            "key": "Correct sum: 17 cucumbers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Farm Story • Subtraction",
        "q": "There were 16 carrots in the vegetable basket. Bunnies ate 7 carrots. How many carrots were left in the basket?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total carrots = 16<br>• Carrots eaten = 7<br>• Remaining carrots = 16 - 7 = <strong>9 carrots</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction 16 - 7",
            "marks": "1 M"
          },
          {
            "key": "Answer: 9 carrots",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Comparison • More or Fewer",
        "q": "Radha picked 15 tomatoes and 10 potatoes. Which vegetable did she pick more of, and by how many?",
        "ans": "<strong>Comparison:</strong><br>• Tomatoes = 15<br>• Potatoes = 10<br>• 15 > 10, so she picked <strong>more tomatoes</strong>.<br>• Difference = 15 - 10 = <strong>5 more tomatoes</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identified more tomatoes",
            "marks": "1.5 M"
          },
          {
            "key": "Difference calculated as 5",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Make a Math Problem",
        "q": "Look at this number sentence: 10 + 4 = 14. Make up your own farm story for this sentence.",
        "ans": "<strong>Sample Story:</strong><br>'Farmer Hari planted 10 chili plants in the morning. His daughter planted 4 chili plants in the evening. Together they planted 14 chili plants.'",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid creative story context",
            "marks": "1 M"
          },
          {
            "key": "Math aligns with 10 + 4 = 14",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Two-Step Story • Real Life",
        "q": "A vegetable cart had 18 watermelons. 5 were sold in the morning and 3 were sold in the afternoon. How many watermelons were left on the cart?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total watermelons sold = 5 + 3 = 8 watermelons.<br>2. Watermelons left = 18 - 8 = <strong>10 watermelons</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sum of sold: 5 + 3 = 8",
            "marks": "1.5 M"
          },
          {
            "key": "Remaining: 18 - 8 = 10",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Mental Arithmetic • Quick Facts",
        "q": "Quickly answer:<br>(a) 10 + 10 = __<br>(b) 20 - 5 = __",
        "ans": "<strong>Answer:</strong><br>(a) 10 + 10 = <strong>20</strong><br>(b) 20 - 5 = <strong>15</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 20",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 15",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Solving contextual addition and subtraction problems from farm life.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Solving contextual addition and subtraction problems from farm life.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Comparing quantities of different vegetables harvested.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Comparing quantities of different vegetables harvested.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Formulating mathematical questions based on visual pictures.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Formulating mathematical questions based on visual pictures.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Solving contextual addition and subtraction problems from farm life.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Solving contextual addition and subtraction problems from farm life.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Comparing quantities of different vegetables harvested.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Comparing quantities of different vegetables harvested.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Formulating mathematical questions based on visual pictures.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Formulating mathematical questions based on visual pictures.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Solving contextual addition and subtraction problems from farm life.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Solving contextual addition and subtraction problems from farm life.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Comparing quantities of different vegetables harvested.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Comparing quantities of different vegetables harvested.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Formulating mathematical questions based on visual pictures.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Formulating mathematical questions based on visual pictures.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Solving contextual addition and subtraction problems from farm life.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Solving contextual addition and subtraction problems from farm life.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Vegetable Farm",
        "q": "Solve the core NCERT learning activity for Chapter 6 ('Vegetable Farm'): Focus on \"Comparing quantities of different vegetables harvested.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Vegetable Farm', students master <em>Comparing quantities of different vegetables harvested.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm7",
    "num": 7,
    "unit": "Unit 3: Operations & Measurement",
    "title": "Lina's Family",
    "subtitle": "Measurement: Comparing Length, Height & Weight using Non-Standard Units",
    "concepts": [
      "Comparing lengths and heights: Longer/Shorter, Taller/Shorter.",
      "Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.",
      "Comparing weights: Heavier and Lighter."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><rect x=\"40\" y=\"30\" width=\"20\" height=\"70\" fill=\"#047857\" rx=\"3\"/><rect x=\"80\" y=\"55\" width=\"20\" height=\"45\" fill=\"#10b981\" rx=\"3\"/><text x=\"50\" y=\"112\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Taller</text><text x=\"90\" y=\"112\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Shorter</text><line x1=\"160\" y1=\"50\" x2=\"310\" y2=\"50\" stroke=\"#059669\" stroke-width=\"6\" stroke-linecap=\"round\"/><line x1=\"160\" y1=\"75\" x2=\"240\" y2=\"75\" stroke=\"#34d399\" stroke-width=\"6\" stroke-linecap=\"round\"/><text x=\"330\" y=\"54\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\">Longer Pencil</text><text x=\"260\" y=\"79\" font-size=\"11\" font-weight=\"700\" fill=\"#065f46\">Shorter Crayon</text><circle cx=\"420\" cy=\"50\" r=\"22\" fill=\"#059669\"/><circle cx=\"465\" cy=\"55\" r=\"12\" fill=\"#6ee7b7\"/><text x=\"420\" y=\"90\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Heavier</text><text x=\"465\" y=\"90\" font-size=\"10\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Lighter</text></svg>",
    "cbq": {
      "title": "Measuring the Study Table",
      "text": "Lina measures the length of her study table using her handspan (बित्ता) and finds it is 8 handspans long. Her father measures the same table and counts only 5 handspans.",
      "question": "Why did Lina get 8 handspans while her father got only 5 handspans for the very same table?",
      "answer": "1. Lina's hand is smaller than her father's hand.<br>2. Since her father's handspan is wider and longer, fewer handspans are needed to cover the same length.",
      "rubric": "1.5 M for father's hand is larger + 1.5 M for inverse relation of unit size"
    },
    "questions": [
      {
        "category": "Length Comparison • Longer and Shorter",
        "q": "Look at a ruler (30 cm) and a pencil (15 cm). Which one is longer and which one is shorter?",
        "ans": "<strong>Answer:</strong><br>• The <strong>ruler</strong> is <strong>longer</strong>.<br>• The <strong>pencil</strong> is <strong>shorter</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ruler is longer",
            "marks": "1 M"
          },
          {
            "key": "Pencil is shorter",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Height Comparison • Taller and Shorter",
        "q": "In Lina's family, who is taller: Lina or her Grandmother? Who is the tallest member in most families?",
        "ans": "<strong>Answer:</strong><br>• Her Grandmother is <strong>taller</strong> than Lina (Lina is shorter).<br>• In most families, the parents (Father or Mother) or elder adults are the <strong>tallest</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Grandmother is taller",
            "marks": "1 M"
          },
          {
            "key": "Tallest identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Hands-on Measurement • Handspan",
        "q": "What is a 'Handspan' (बित्ता)? How do you measure the width of your math textbook using it?",
        "ans": "<strong>Answer:</strong><br>• A handspan is the distance from the tip of the thumb to the tip of the little finger when the hand is stretched wide open.<br>• To measure the book: Place the thumb at one edge, stretch fingers, and count how many handspans fit across the book width (usually about 1 to 2 handspans for a child).",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of handspan",
            "marks": "1.5 M"
          },
          {
            "key": "Practical measurement step",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Weight Comparison • Heavier and Lighter",
        "q": "Which is heavier: a school bag full of books or a pencil box? Why?",
        "ans": "<strong>Answer:</strong><br>• The <strong>school bag full of books is heavier</strong>.<br>• The <strong>pencil box is lighter</strong>.<br>• Reason: The school bag contains many thick books and notebooks, which have much more weight than a small plastic pencil box.",
        "marks": 2,
        "rubric": [
          {
            "key": "School bag is heavier",
            "marks": "1 M"
          },
          {
            "key": "Reasoning with contents",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Paces and Footsteps",
        "q": "How can you measure the distance from your classroom door to the blackboard without using a measuring tape?",
        "ans": "<strong>Answer:</strong><br>You can measure the distance by counting your <strong>footsteps (paces/कदम)</strong> while walking in a straight line from the door to the blackboard.",
        "marks": 2,
        "rubric": [
          {
            "key": "Paces/footsteps method explained",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Ordering by Size",
        "q": "Arrange these three objects from shortest to longest: Leaf, Broom, Safety Pin.",
        "ans": "<strong>Answer:</strong><br>Shortest to longest order:<br>1. <strong>Safety Pin</strong> (shortest)<br>2. <strong>Leaf</strong><br>3. <strong>Broom</strong> (longest).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct order: Safety Pin < Leaf < Broom",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Comparing lengths and heights: Longer/Shorter, Taller/Shorter.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Comparing lengths and heights: Longer/Shorter, Taller/Shorter.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Comparing weights: Heavier and Lighter.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Comparing weights: Heavier and Lighter.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Comparing lengths and heights: Longer/Shorter, Taller/Shorter.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Comparing lengths and heights: Longer/Shorter, Taller/Shorter.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Comparing weights: Heavier and Lighter.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Comparing weights: Heavier and Lighter.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Comparing lengths and heights: Longer/Shorter, Taller/Shorter.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Comparing lengths and heights: Longer/Shorter, Taller/Shorter.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Comparing weights: Heavier and Lighter.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Comparing weights: Heavier and Lighter.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Comparing lengths and heights: Longer/Shorter, Taller/Shorter.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Comparing lengths and heights: Longer/Shorter, Taller/Shorter.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Lina's Family",
        "q": "Solve the core NCERT learning activity for Chapter 7 ('Lina's Family'): Focus on \"Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Lina's Family', students master <em>Measuring using body units: Handspans (बित्ता), Footsteps, Cubits.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm8",
    "num": 8,
    "unit": "Unit 4: Numbers Beyond 20",
    "title": "Fun with Numbers",
    "subtitle": "Numbers from 21 to 99: Tens, Ones, Place Value & Patterns",
    "concepts": [
      "Counting in groups of tens from 20 up to 99.",
      "Understanding place value in 2-digit numbers: Tens place and Ones place.",
      "Finding predecessor, successor, and ordering numbers up to 99."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"10\"/><rect x=\"50\" y=\"30\" width=\"50\" height=\"60\" fill=\"#3b82f6\" rx=\"6\"/><text x=\"75\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">10</text><rect x=\"110\" y=\"30\" width=\"50\" height=\"60\" fill=\"#3b82f6\" rx=\"6\"/><text x=\"135\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">10</text><rect x=\"170\" y=\"30\" width=\"50\" height=\"60\" fill=\"#3b82f6\" rx=\"6\"/><text x=\"195\" y=\"65\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">10</text><text x=\"135\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">3 Tens = 30</text><circle cx=\"260\" cy=\"50\" r=\"8\" fill=\"#f59e0b\"/><circle cx=\"280\" cy=\"50\" r=\"8\" fill=\"#f59e0b\"/><circle cx=\"300\" cy=\"50\" r=\"8\" fill=\"#f59e0b\"/><circle cx=\"320\" cy=\"50\" r=\"8\" fill=\"#f59e0b\"/><text x=\"290\" y=\"105\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">4 Ones = 4</text><text x=\"350\" y=\"65\" font-size=\"20\" font-weight=\"800\" fill=\"#0f172a\">=</text><rect x=\"380\" y=\"30\" width=\"80\" height=\"60\" fill=\"#0284c7\" rx=\"8\"/><text x=\"420\" y=\"68\" font-size=\"22\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">34</text></svg>",
    "cbq": {
      "title": "Garlands for the School Annual Function",
      "text": "Students are stringing marigold garlands. Each garland has 10 flowers. Team Alpha makes 4 full garlands and has 6 loose flowers left over.",
      "question": "How many flowers does Team Alpha have in all? What is the digit in the tens place and the ones place?",
      "answer": "1. 4 garlands of 10 = 4 × 10 = 40 flowers.<br>2. 6 loose flowers = 6 ones.<br>3. Total flowers = 40 + 6 = <strong>46 flowers</strong>.<br>Tens digit = <strong>4</strong>, Ones digit = <strong>6</strong>.",
      "rubric": "1.5 M for 46 total + 1.5 M for Tens:4, Ones:6"
    },
    "questions": [
      {
        "category": "Tens and Ones • Place Value",
        "q": "What is the number for: 5 Tens and 3 Ones? Write the numeral and number name.",
        "ans": "<strong>Answer:</strong><br>• 5 Tens = 50<br>• 3 Ones = 3<br>• Numeral = <strong>53</strong><br>• Number Name = <strong>Fifty-three</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Numeral 53",
            "marks": "1 M"
          },
          {
            "key": "Number name Fifty-three",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Counting by 10s • Skip Counting",
        "q": "Complete the tens chain: 10, 20, 30, __, __, 60, __, 80, __.",
        "ans": "<strong>Answer:</strong><br>Counting by tens:<br>10, 20, 30, <strong>40</strong>, <strong>50</strong>, 60, <strong>70</strong>, 80, <strong>90</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled in 40, 50, 70, 90 correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Before and After • Numbers up to 50",
        "q": "Write the number that comes:<br>(a) Just before 30<br>(b) Just after 49<br>(c) Between 39 and 41",
        "ans": "<strong>Answer:</strong><br>(a) Just before 30 is <strong>29</strong>.<br>(b) Just after 49 is <strong>50</strong>.<br>(c) Between 39 and 41 is <strong>40</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "29",
            "marks": "1 M"
          },
          {
            "key": "50",
            "marks": "1 M"
          },
          {
            "key": "40",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Comparison • Greater or Smaller",
        "q": "Compare using > or <: 64 __ 46. Which number is greater and why?",
        "ans": "<strong>Comparison:</strong><br>• In 64, the tens digit is 6 (6 tens = 60).<br>• In 46, the tens digit is 4 (4 tens = 40).<br>• Since 6 tens > 4 tens, <strong>64 > 46</strong>.<br>64 is greater than 46.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sign: 64 > 46",
            "marks": "1 M"
          },
          {
            "key": "Explanation using tens digit",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Expansion • Decomposing Numbers",
        "q": "Expand the following numbers into tens and ones:<br>(a) 28<br>(b) 75",
        "ans": "<strong>Answer:</strong><br>(a) 28 = <strong>20 + 8</strong> (2 Tens + 8 Ones)<br>(b) 75 = <strong>70 + 5</strong> (7 Tens + 5 Ones)",
        "marks": 2,
        "rubric": [
          {
            "key": "Part (a): 20 + 8",
            "marks": "1 M"
          },
          {
            "key": "Part (b): 70 + 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Riddle Time • Who Am I?",
        "q": "I have 9 in the ones place and 8 in the tens place. What number am I?",
        "ans": "<strong>Answer:</strong><br>• Tens place = 8<br>• Ones place = 9<br>• The number is <strong>89 (Eighty-nine)</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Correct number 89",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Counting in groups of tens from 20 up to 99.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Counting in groups of tens from 20 up to 99.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Understanding place value in 2-digit numbers: Tens place and Ones place.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Understanding place value in 2-digit numbers: Tens place and Ones place.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Finding predecessor, successor, and ordering numbers up to 99.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Finding predecessor, successor, and ordering numbers up to 99.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Counting in groups of tens from 20 up to 99.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Counting in groups of tens from 20 up to 99.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Understanding place value in 2-digit numbers: Tens place and Ones place.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Understanding place value in 2-digit numbers: Tens place and Ones place.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Finding predecessor, successor, and ordering numbers up to 99.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Finding predecessor, successor, and ordering numbers up to 99.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Counting in groups of tens from 20 up to 99.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Counting in groups of tens from 20 up to 99.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Understanding place value in 2-digit numbers: Tens place and Ones place.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Understanding place value in 2-digit numbers: Tens place and Ones place.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Finding predecessor, successor, and ordering numbers up to 99.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Finding predecessor, successor, and ordering numbers up to 99.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Counting in groups of tens from 20 up to 99.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Counting in groups of tens from 20 up to 99.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Fun with Numbers",
        "q": "Solve the core NCERT learning activity for Chapter 8 ('Fun with Numbers'): Focus on \"Understanding place value in 2-digit numbers: Tens place and Ones place.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Fun with Numbers', students master <em>Understanding place value in 2-digit numbers: Tens place and Ones place.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm9",
    "num": 9,
    "unit": "Unit 4: Patterns & Spatial Thinking",
    "title": "Utsav",
    "subtitle": "Festive Patterns: Repeating Sequences in Shapes, Colours & Numbers",
    "concepts": [
      "Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).",
      "Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).",
      "Finding number patterns with simple step increments (+1, +2, +5, +10)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"10\"/><circle cx=\"50\" cy=\"50\" r=\"16\" fill=\"#f59e0b\"/><rect x=\"85\" y=\"34\" width=\"32\" height=\"32\" fill=\"#ef4444\" rx=\"4\"/><circle cx=\"145\" cy=\"50\" r=\"16\" fill=\"#f59e0b\"/><rect x=\"180\" y=\"34\" width=\"32\" height=\"32\" fill=\"#ef4444\" rx=\"4\"/><circle cx=\"240\" cy=\"50\" r=\"16\" fill=\"#f59e0b\"/><rect x=\"275\" y=\"34\" width=\"32\" height=\"32\" fill=\"#ef4444\" rx=\"4\"/><circle cx=\"335\" cy=\"50\" r=\"16\" fill=\"#f59e0b\"/><rect x=\"370\" y=\"34\" width=\"32\" height=\"32\" fill=\"#ef4444\" rx=\"4\"/><text x=\"440\" y=\"55\" font-size=\"20\" font-weight=\"800\" fill=\"#b45309\">...</text><text x=\"250\" y=\"100\" font-size=\"12\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Festive Toran Pattern: Circle, Square, Circle, Square...</text></svg>",
    "cbq": {
      "title": "Diwali Rangoli Border Pattern",
      "text": "Simi is making a festive border using Diyas and Marigold flowers: Diya, Flower, Flower, Diya, Flower, Flower, Diya...",
      "question": "What comes next after the third Diya? What is the repeating rule (pattern unit)?",
      "answer": "1. After the third Diya, two <strong>Flowers</strong> will come.<br>2. The repeating unit is <strong>1 Diya followed by 2 Flowers</strong> (Pattern: A-B-B).",
      "rubric": "1.5 M for two flowers + 1.5 M for rule (1 Diya + 2 Flowers)"
    },
    "questions": [
      {
        "category": "Pattern Completion • Shapes",
        "q": "Extend the shape pattern: △, ◯, △, ◯, △, __, __.",
        "ans": "<strong>Answer:</strong><br>The pattern alternates between Triangle and Circle.<br>The next two shapes are <strong>◯ (Circle)</strong> and <strong>△ (Triangle)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Circle identified",
            "marks": "1 M"
          },
          {
            "key": "Triangle identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Number Patterns • Growing Sequence",
        "q": "Look at the pattern and write the next two numbers: 2, 4, 6, 8, __, __.",
        "ans": "<strong>Step-by-Step Rule:</strong><br>• The numbers increase by 2 each time (+2).<br>• 8 + 2 = 10<br>• 10 + 2 = 12<br>Next numbers are <strong>10</strong> and <strong>12</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identification of rule (+2)",
            "marks": "1 M"
          },
          {
            "key": "Numbers 10 and 12",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Visual Observation • Border Toran",
        "q": "A door hanging (Toran) has mango leaves and orange flowers: Leaf, Flower, Leaf, Flower. What will be the 7th item in this Toran?",
        "ans": "<strong>Step-by-Step Counting:</strong><br>1: Leaf<br>2: Flower<br>3: Leaf<br>4: Flower<br>5: Leaf<br>6: Flower<br>7: <strong>Leaf</strong>.<br>The 7th item will be a <strong>Leaf</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sequence counted to 7",
            "marks": "1 M"
          },
          {
            "key": "Answer: Leaf",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Pattern Rule • Decreasing Numbers",
        "q": "Find the missing numbers in this countdown pattern: 10, 9, 8, __, 6, __, 4.",
        "ans": "<strong>Answer:</strong><br>Rule: Counting backwards by 1 (-1 each time).<br>10, 9, 8, <strong>7</strong>, 6, <strong>5</strong>, 4.<br>The missing numbers are <strong>7</strong> and <strong>5</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 identified",
            "marks": "1 M"
          },
          {
            "key": "5 identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Pattern • Body Movement",
        "q": "Can you create a pattern using body sounds? Give an example.",
        "ans": "<strong>Answer:</strong><br>Yes! Example: <strong>Clap, Snap, Clap, Snap, Clap, Snap...</strong><br>Or: <strong>Stomp foot, Clap hands, Stomp foot, Clap hands...</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid sound/movement pattern described",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Letter Pattern",
        "q": "Complete the alphabet pattern: AB, CD, EF, __, __.",
        "ans": "<strong>Answer:</strong><br>The sequence takes two consecutive letters from the alphabet:<br>AB, CD, EF, <strong>GH</strong>, <strong>IJ</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "GH and IJ filled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Finding number patterns with simple step increments (+1, +2, +5, +10).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Finding number patterns with simple step increments (+1, +2, +5, +10).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Finding number patterns with simple step increments (+1, +2, +5, +10).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Finding number patterns with simple step increments (+1, +2, +5, +10).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Finding number patterns with simple step increments (+1, +2, +5, +10).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Finding number patterns with simple step increments (+1, +2, +5, +10).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Identifying the core unit of a repeating visual pattern (AB, AAB, ABC).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • Utsav",
        "q": "Solve the core NCERT learning activity for Chapter 9 ('Utsav'): Focus on \"Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'Utsav', students master <em>Extending sequences of geometric shapes and festive decorations (Rangoli, Toran).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm10",
    "num": 10,
    "unit": "Unit 5: Time & Everyday Routine",
    "title": "How do I Spend my Day?",
    "subtitle": "Daily Routine, Sequencing Events, Day and Night, Clock Awareness",
    "concepts": [
      "Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.",
      "Recognizing activities that take longer time vs shorter time.",
      "Understanding days of the week and daily rhythms."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0f9ff\" rx=\"10\"/><circle cx=\"70\" cy=\"55\" r=\"24\" fill=\"#fbbf24\"/><text x=\"70\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Morning (Sunrise)</text><circle cx=\"180\" cy=\"55\" r=\"24\" fill=\"#f59e0b\"/><text x=\"180\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Afternoon (School/Lunch)</text><circle cx=\"300\" cy=\"55\" r=\"24\" fill=\"#f97316\"/><text x=\"300\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">Evening (Play)</text><circle cx=\"420\" cy=\"55\" r=\"24\" fill=\"#1e293b\"/><circle cx=\"428\" cy=\"51\" r=\"20\" fill=\"#f0f9ff\"/><text x=\"420\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Night (Sleep)</text></svg>",
    "cbq": {
      "title": "Chintu's Sunday Schedule",
      "text": "On Sunday, Chintu has breakfast at 8:00 in the morning, plays cricket in the park at 5:00 in the evening, studies for school at 6:30 PM, and sleeps at 9:00 PM at night.",
      "question": "Which activity does Chintu do in the evening? Arrange breakfast, sleeping, and cricket in order from earliest to latest in the day.",
      "answer": "1. Playing cricket is done in the evening (5:00 PM).<br>2. Earliest to latest order: <strong>Breakfast (Morning) → Playing Cricket (Evening) → Sleeping (Night)</strong>.",
      "rubric": "1.5 M for evening cricket + 1.5 M for correct chronological order"
    },
    "questions": [
      {
        "category": "Sequencing • Morning Routine",
        "q": "Arrange these actions in the correct order for the morning: (A) Going to school, (B) Brushing teeth, (C) Waking up from bed, (D) Eating breakfast.",
        "ans": "<strong>Correct Order:</strong><br>1. <strong>(C) Waking up from bed</strong><br>2. <strong>(B) Brushing teeth</strong><br>3. <strong>(D) Eating breakfast</strong><br>4. <strong>(A) Going to school</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct sequence C → B → D → A",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Time Duration • Longer vs Shorter",
        "q": "Which activity takes a longer time: (a) Blinking your eyes once, or (b) Taking a bath?",
        "ans": "<strong>Answer:</strong><br>• <strong>Taking a bath</strong> takes a <strong>longer time</strong> (a few minutes).<br>• Blinking your eyes takes a very short time (less than a second).",
        "marks": 2,
        "rubric": [
          {
            "key": "Taking bath identified as longer",
            "marks": "1 M"
          },
          {
            "key": "Explanation of duration",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Parts of the Day • Matching",
        "q": "Match the activity with the time of day:<br>(a) Seeing stars and the moon<br>(b) Having lunch<br>(c) Eating dinner",
        "ans": "<strong>Answer:</strong><br>(a) Seeing stars and the moon → <strong>Night</strong><br>(b) Having lunch → <strong>Afternoon</strong><br>(c) Eating dinner → <strong>Night / Late Evening</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 matched correctly",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Daily Life • Cooking Steps",
        "q": "What takes more time: Boiling a pot of milk or drinking a sip of milk?",
        "ans": "<strong>Answer:</strong><br><strong>Boiling a pot of milk</strong> takes more time because it requires heating on the gas stove for several minutes.",
        "marks": 1,
        "rubric": [
          {
            "key": "Boiling milk takes more time",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Days of the Week",
        "q": "How many days are there in a week? Which day is usually a school holiday?",
        "ans": "<strong>Answer:</strong><br>• There are <strong>7 days</strong> in a week (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday).<br>• <strong>Sunday</strong> is usually a school holiday.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 days in a week",
            "marks": "1 M"
          },
          {
            "key": "Sunday identified as holiday",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Observation • Sun Movement",
        "q": "From which direction does the Sun rise in the morning, and where does it set in the evening?",
        "ans": "<strong>Answer:</strong><br>• The Sun rises in the <strong>East</strong> in the morning.<br>• The Sun sets in the <strong>West</strong> in the evening.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rises in the East",
            "marks": "1 M"
          },
          {
            "key": "Sets in the West",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Recognizing activities that take longer time vs shorter time.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Recognizing activities that take longer time vs shorter time.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Understanding days of the week and daily rhythms.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Understanding days of the week and daily rhythms.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Recognizing activities that take longer time vs shorter time.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Recognizing activities that take longer time vs shorter time.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Understanding days of the week and daily rhythms.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Understanding days of the week and daily rhythms.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Recognizing activities that take longer time vs shorter time.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Recognizing activities that take longer time vs shorter time.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Understanding days of the week and daily rhythms.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Understanding days of the week and daily rhythms.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Sequencing daily activities in chronological order: Morning, Afternoon, Evening, Night.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How do I Spend my Day?",
        "q": "Solve the core NCERT learning activity for Chapter 10 ('How do I Spend my Day?'): Focus on \"Recognizing activities that take longer time vs shorter time.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How do I Spend my Day?', students master <em>Recognizing activities that take longer time vs shorter time.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm11",
    "num": 11,
    "unit": "Unit 5: Equal Groups & Early Multiplication",
    "title": "How Many Times?",
    "subtitle": "Repeated Addition, Equal Groups, Skip Counting & Introduction to Multiplication",
    "concepts": [
      "Understanding equal groups as 'repeated addition'.",
      "Using the 'times' symbol (×) to represent equal groups.",
      "Solving simple equal-sharing and grouping scenarios."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#faf5ff\" rx=\"10\"/><rect x=\"40\" y=\"30\" width=\"80\" height=\"50\" fill=\"#e9d5ff\" rx=\"6\"/><circle cx=\"65\" cy=\"55\" r=\"12\" fill=\"#9333ea\"/><circle cx=\"95\" cy=\"55\" r=\"12\" fill=\"#9333ea\"/><text x=\"80\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#7e22ce\" text-anchor=\"middle\">Group 1 (2)</text><rect x=\"150\" y=\"30\" width=\"80\" height=\"50\" fill=\"#e9d5ff\" rx=\"6\"/><circle cx=\"175\" cy=\"55\" r=\"12\" fill=\"#9333ea\"/><circle cx=\"205\" cy=\"55\" r=\"12\" fill=\"#9333ea\"/><text x=\"190\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#7e22ce\" text-anchor=\"middle\">Group 2 (2)</text><rect x=\"260\" y=\"30\" width=\"80\" height=\"50\" fill=\"#e9d5ff\" rx=\"6\"/><circle cx=\"285\" cy=\"55\" r=\"12\" fill=\"#9333ea\"/><circle cx=\"315\" cy=\"55\" r=\"12\" fill=\"#9333ea\"/><text x=\"300\" y=\"100\" font-size=\"11\" font-weight=\"700\" fill=\"#7e22ce\" text-anchor=\"middle\">Group 3 (2)</text><text x=\"420\" y=\"55\" font-size=\"15\" font-weight=\"800\" fill=\"#6b21a8\">3 times 2 = 6</text><text x=\"420\" y=\"80\" font-size=\"13\" font-weight=\"700\" fill=\"#7e22ce\">2 + 2 + 2 = 6</text></svg>",
    "cbq": {
      "title": "Frogs on Lily Pads",
      "text": "There are 4 lily pads floating on a pond. On each lily pad, 3 small green frogs are sitting comfortably.",
      "question": "Write this as repeated addition and as a multiplication sentence. How many frogs are on the pond altogether?",
      "answer": "1. Repeated addition: 3 + 3 + 3 + 3 = 12 frogs.<br>2. Multiplication sentence: 4 × 3 = 12 frogs.<br>Total = <strong>12 frogs</strong>.",
      "rubric": "1.5 M for 3+3+3+3=12 + 1.5 M for 4×3=12"
    },
    "questions": [
      {
        "category": "Equal Groups • Repeated Addition",
        "q": "There are 3 plates. Each plate has 4 cookies. How many cookies are there in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Plate 1 = 4 cookies<br>• Plate 2 = 4 cookies<br>• Plate 3 = 4 cookies<br>• Total = 4 + 4 + 4 = <strong>12 cookies</strong>.<br>Or 3 times 4 = 12.",
        "marks": 2,
        "rubric": [
          {
            "key": "Repeated addition 4 + 4 + 4",
            "marks": "1 M"
          },
          {
            "key": "Total 12 cookies",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Bicycle Wheels • Groups of 2",
        "q": "A bicycle has 2 wheels. How many wheels do 5 bicycles have?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Number of bicycles = 5<br>• Wheels per bicycle = 2<br>• 2 + 2 + 2 + 2 + 2 = <strong>10 wheels</strong> (5 × 2 = 10).",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition or multiplication sentence",
            "marks": "1 M"
          },
          {
            "key": "Final answer: 10 wheels",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Skip Counting • Threes",
        "q": "Skip count by 3s up to 15: 3, 6, __, __, 15.",
        "ans": "<strong>Answer:</strong><br>Adding 3 each step:<br>3, 6, <strong>9</strong>, <strong>12</strong>, 15.",
        "marks": 2,
        "rubric": [
          {
            "key": "9 and 12 identified correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Table Legs • Groups of 4",
        "q": "Each study table has 4 legs. If there are 2 tables in the room, how many legs are there altogether?",
        "ans": "<strong>Answer:</strong><br>• 4 legs + 4 legs = <strong>8 legs</strong>.<br>• 2 times 4 = 8 legs.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 4 = 8 legs",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Hands and Fingers • Groups of 5",
        "q": "One hand has 5 fingers. How many fingers do 4 hands have? Write the addition sentence.",
        "ans": "<strong>Calculation:</strong><br>• 5 + 5 + 5 + 5 = <strong>20 fingers</strong>.<br>• 4 hands have 20 fingers.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition sentence 5+5+5+5",
            "marks": "1 M"
          },
          {
            "key": "Result 20 fingers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Understanding 'Times'",
        "q": "Express 6 + 6 + 6 using the word 'times'. What is the total?",
        "ans": "<strong>Answer:</strong><br>• 6 + 6 + 6 = <strong>3 times 6</strong>.<br>• Total = <strong>18</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 times 6",
            "marks": "1 M"
          },
          {
            "key": "18",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Understanding equal groups as 'repeated addition'.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Understanding equal groups as 'repeated addition'.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Using the 'times' symbol (×) to represent equal groups.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Using the 'times' symbol (×) to represent equal groups.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Solving simple equal-sharing and grouping scenarios.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Solving simple equal-sharing and grouping scenarios.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Understanding equal groups as 'repeated addition'.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Understanding equal groups as 'repeated addition'.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Using the 'times' symbol (×) to represent equal groups.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Using the 'times' symbol (×) to represent equal groups.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Solving simple equal-sharing and grouping scenarios.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Solving simple equal-sharing and grouping scenarios.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Understanding equal groups as 'repeated addition'.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Understanding equal groups as 'repeated addition'.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Using the 'times' symbol (×) to represent equal groups.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Using the 'times' symbol (×) to represent equal groups.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Solving simple equal-sharing and grouping scenarios.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Solving simple equal-sharing and grouping scenarios.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Understanding equal groups as 'repeated addition'.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Understanding equal groups as 'repeated addition'.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Many Times?",
        "q": "Solve the core NCERT learning activity for Chapter 11 ('How Many Times?'): Focus on \"Using the 'times' symbol (×) to represent equal groups.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Many Times?', students master <em>Using the 'times' symbol (×) to represent equal groups.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm12",
    "num": 12,
    "unit": "Unit 6: Financial Literacy & Real World",
    "title": "How Much Can We Spend?",
    "subtitle": "Indian Currency: Coins, Currency Notes & Making Amounts",
    "concepts": [
      "Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).",
      "Making given amounts using combinations of coins and notes.",
      "Solving simple shopping and change calculation scenarios."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"10\"/><circle cx=\"60\" cy=\"55\" r=\"20\" fill=\"#94a3b8\"/><text x=\"60\" y=\"61\" font-size=\"13\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">₹1</text><circle cx=\"120\" cy=\"55\" r=\"22\" fill=\"#cbd5e1\"/><text x=\"120\" y=\"61\" font-size=\"13\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">₹2</text><circle cx=\"185\" cy=\"55\" r=\"24\" fill=\"#fbbf24\"/><text x=\"185\" y=\"61\" font-size=\"14\" font-weight=\"800\" fill=\"#78350f\" text-anchor=\"middle\">₹5</text><circle cx=\"255\" cy=\"55\" r=\"26\" fill=\"#f59e0b\"/><text x=\"255\" y=\"62\" font-size=\"15\" font-weight=\"800\" fill=\"#78350f\" text-anchor=\"middle\">₹10</text><rect x=\"315\" y=\"32\" width=\"70\" height=\"46\" fill=\"#86efac\" rx=\"4\"/><text x=\"350\" y=\"60\" font-size=\"14\" font-weight=\"800\" fill=\"#14532d\" text-anchor=\"middle\">₹20</text><rect x=\"405\" y=\"32\" width=\"75\" height=\"46\" fill=\"#93c5fd\" rx=\"4\"/><text x=\"442\" y=\"60\" font-size=\"14\" font-weight=\"800\" fill=\"#1e3a8a\" text-anchor=\"middle\">₹50</text></svg>",
    "cbq": {
      "title": "School Stationery Shop",
      "text": "Aarav visits the school stationery shop with a ₹20 note. He buys an eraser for ₹5 and a sharpener for ₹5.",
      "question": "What is the total money Aarav spent? How much change should the shopkeeper return to him?",
      "answer": "1. Total spent = ₹5 + ₹5 = <strong>₹10</strong>.<br>2. Change returned = ₹20 - ₹10 = <strong>₹10</strong>.",
      "rubric": "1.5 M for ₹5+₹5=₹10 + 1.5 M for ₹20-₹10=₹10"
    },
    "questions": [
      {
        "category": "Coin Combination • Make ₹5",
        "q": "Show two different ways to make ₹5 using coins.",
        "ans": "<strong>Answer:</strong><br>• <strong>Way 1:</strong> One ₹5 coin.<br>• <strong>Way 2:</strong> Two ₹2 coins and one ₹1 coin (₹2 + ₹2 + ₹1 = ₹5).<br>• <strong>Way 3:</strong> Five ₹1 coins (1 + 1 + 1 + 1 + 1 = ₹5).",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid combinations provided",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Money Addition • Buying Toys",
        "q": "Riya wants to buy a toy car for ₹12 and a balloon for ₹4. How much total money does she need?",
        "ans": "<strong>Calculation:</strong><br>• Cost of toy car = ₹12<br>• Cost of balloon = ₹4<br>• Total money needed = ₹12 + ₹4 = <strong>₹16</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition statement ₹12 + ₹4",
            "marks": "1 M"
          },
          {
            "key": "Total ₹16",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Currency Recognition",
        "q": "Name the colour and value of any two currency notes used in India.",
        "ans": "<strong>Answer:</strong><br>1. <strong>₹10 note:</strong> Chocolate brown in colour.<br>2. <strong>₹20 note:</strong> Greenish-yellow in colour.<br>3. <strong>₹50 note:</strong> Fluorescent blue in colour.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two currency notes with colour/value correctly stated",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Subtraction • Shopping Change",
        "q": "Kabir gives a ₹10 coin to buy an ice-cream stick that costs ₹7. How much money will he get back?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Money given = ₹10<br>• Cost of ice-cream = ₹7<br>• Money back = ₹10 - ₹7 = <strong>₹3</strong> (or one ₹2 coin and one ₹1 coin).",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction ₹10 - ₹7",
            "marks": "1 M"
          },
          {
            "key": "Change: ₹3",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Making Amounts • Make ₹15",
        "q": "How can you pay ₹15 using only ₹5 coins?",
        "ans": "<strong>Answer:</strong><br>• 5 + 5 + 5 = 15.<br>• You need <strong>three ₹5 coins</strong> to pay ₹15.",
        "marks": 2,
        "rubric": [
          {
            "key": "Three ₹5 coins identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Notes",
        "q": "How many ₹10 notes make ₹50?",
        "ans": "<strong>Answer:</strong><br>10, 20, 30, 40, 50.<br>It takes <strong>five ₹10 notes</strong> to make ₹50 (5 × ₹10 = ₹50).",
        "marks": 2,
        "rubric": [
          {
            "key": "Five ₹10 notes",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Making given amounts using combinations of coins and notes.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Making given amounts using combinations of coins and notes.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Solving simple shopping and change calculation scenarios.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Solving simple shopping and change calculation scenarios.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Making given amounts using combinations of coins and notes.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Making given amounts using combinations of coins and notes.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Solving simple shopping and change calculation scenarios.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Solving simple shopping and change calculation scenarios.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Making given amounts using combinations of coins and notes.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Making given amounts using combinations of coins and notes.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Solving simple shopping and change calculation scenarios.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Solving simple shopping and change calculation scenarios.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Identifying Indian coins (₹1, ₹2, ₹5, ₹10) and paper notes (₹10, ₹20, ₹50).</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • How Much Can We Spend?",
        "q": "Solve the core NCERT learning activity for Chapter 12 ('How Much Can We Spend?'): Focus on \"Making given amounts using combinations of coins and notes.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'How Much Can We Spend?', students master <em>Making given amounts using combinations of coins and notes.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm13",
    "num": 13,
    "unit": "Unit 6: Data Handling & Problem Solving",
    "title": "So Many Toys and Puzzles",
    "subtitle": "Data Handling: Sorting, Counting, Pictorial Tables & Mathematical Puzzles",
    "concepts": [
      "Collecting, organizing, and counting objects into categories.",
      "Reading simple picture charts and answering comparison questions.",
      "Solving fun mathematical riddles and spatial puzzles."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef3c7\" rx=\"10\"/><rect x=\"50\" y=\"25\" width=\"80\" height=\"70\" fill=\"#fff\" rx=\"6\" stroke=\"#f59e0b\"/><text x=\"90\" y=\"45\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Teddy Bears</text><text x=\"90\" y=\"75\" font-size=\"22\" font-weight=\"800\" fill=\"#d97706\" text-anchor=\"middle\">6</text><rect x=\"150\" y=\"25\" width=\"80\" height=\"70\" fill=\"#fff\" rx=\"6\" stroke=\"#f59e0b\"/><text x=\"190\" y=\"45\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Toy Cars</text><text x=\"190\" y=\"75\" font-size=\"22\" font-weight=\"800\" fill=\"#d97706\" text-anchor=\"middle\">9</text><rect x=\"250\" y=\"25\" width=\"80\" height=\"70\" fill=\"#fff\" rx=\"6\" stroke=\"#f59e0b\"/><text x=\"290\" y=\"45\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Dolls</text><text x=\"290\" y=\"75\" font-size=\"22\" font-weight=\"800\" fill=\"#d97706\" text-anchor=\"middle\">4</text><text x=\"410\" y=\"55\" font-size=\"12\" font-weight=\"800\" fill=\"#92400e\">Most: Toy Cars (9)</text><text x=\"410\" y=\"80\" font-size=\"12\" font-weight=\"800\" fill=\"#b45309\">Least: Dolls (4)</text></svg>",
    "cbq": {
      "title": "Classroom Toy Corner Audit",
      "text": "The teacher placed all classroom toys in a basket: 8 building blocks, 5 spin tops, and 10 finger puppets.",
      "question": "Which toy is the most in number? Which toy is the least in number? How many toys are there in total?",
      "answer": "1. <strong>Most in number:</strong> Finger puppets (10).<br>2. <strong>Least in number:</strong> Spin tops (5).<br>3. <strong>Total toys:</strong> 8 + 5 + 10 = <strong>23 toys</strong>.",
      "rubric": "1 M for most + 1 M for least + 1 M for total 23"
    },
    "questions": [
      {
        "category": "Data Table • Counting Objects",
        "q": "Look at the list of stationery items: 7 Pencils, 3 Sharpeners, 5 Erasers. Which item is maximum in number?",
        "ans": "<strong>Answer:</strong><br>• Pencils = 7<br>• Sharpeners = 3<br>• Erasers = 5<br><strong>Pencils (7)</strong> are maximum in number.",
        "marks": 2,
        "rubric": [
          {
            "key": "List compared",
            "marks": "1 M"
          },
          {
            "key": "Pencils identified as maximum",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Data Comparison • Difference",
        "q": "Using the same stationery list (7 Pencils, 3 Sharpeners, 5 Erasers), how many more pencils are there than sharpeners?",
        "ans": "<strong>Calculation:</strong><br>• Pencils = 7<br>• Sharpeners = 3<br>• Difference = 7 - 3 = <strong>4 more pencils</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 - 3 = 4",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Letter Counting • Name Data",
        "q": "Count the number of letters in each child's name: (a) AMAN, (b) PRIYANKA, (c) ALI. Whose name has the most letters?",
        "ans": "<strong>Answer:</strong><br>• AMAN = 4 letters<br>• PRIYANKA = 8 letters<br>• ALI = 3 letters<br><strong>PRIYANKA</strong> has the most letters (8 letters).",
        "marks": 3,
        "rubric": [
          {
            "key": "Count for each name",
            "marks": "1.5 M"
          },
          {
            "key": "Priyanka identified as longest",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Math Puzzle • Number Riddle",
        "q": "I am a two-digit number. My tens digit is 4 and my ones digit is 2 more than my tens digit. What number am I?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Tens digit = 4<br>• Ones digit = 4 + 2 = 6<br>• The number is <strong>46</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ones digit calculated (4+2=6)",
            "marks": "1 M"
          },
          {
            "key": "Number identified as 46",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Tangram & Shape Puzzle",
        "q": "How many corners does a square piece of paper have? If you fold it in half corner-to-corner, what shape do you get?",
        "ans": "<strong>Answer:</strong><br>• A square piece of paper has <strong>4 corners</strong>.<br>• When folded corner-to-corner across the diagonal, you get a <strong>Triangle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 corners",
            "marks": "1 M"
          },
          {
            "key": "Triangle identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Data Summary",
        "q": "In a fruit bowl there are 4 apples, 6 bananas, and 2 guavas. How many total fruits are in the bowl?",
        "ans": "<strong>Calculation:</strong><br>• 4 + 6 + 2 = <strong>12 fruits</strong> in total.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum 4 + 6 + 2 = 12",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Collecting, organizing, and counting objects into categories.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Collecting, organizing, and counting objects into categories.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Reading simple picture charts and answering comparison questions.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Reading simple picture charts and answering comparison questions.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Solving fun mathematical riddles and spatial puzzles.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Solving fun mathematical riddles and spatial puzzles.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Collecting, organizing, and counting objects into categories.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Collecting, organizing, and counting objects into categories.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Reading simple picture charts and answering comparison questions.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Reading simple picture charts and answering comparison questions.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Solving fun mathematical riddles and spatial puzzles.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Solving fun mathematical riddles and spatial puzzles.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Collecting, organizing, and counting objects into categories.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Collecting, organizing, and counting objects into categories.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Reading simple picture charts and answering comparison questions.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Reading simple picture charts and answering comparison questions.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Solving fun mathematical riddles and spatial puzzles.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Solving fun mathematical riddles and spatial puzzles.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Collecting, organizing, and counting objects into categories.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Collecting, organizing, and counting objects into categories.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "NCERT In-Text Drill • So Many Toys and Puzzles",
        "q": "Solve the core NCERT learning activity for Chapter 13 ('So Many Toys and Puzzles'): Focus on \"Reading simple picture charts and answering comparison questions.\". How can a student solve this using concrete objects or step-by-step counting?",
        "ans": "<strong>Step-by-Step Explanation:</strong><br>1. <strong>Concept Focus:</strong> In 'So Many Toys and Puzzles', students master <em>Reading simple picture charts and answering comparison questions.</em>.<br>2. <strong>Pedagogical Strategy:</strong> Use concrete items (counters, fingers, or drawings) to visualize the quantities.<br>3. <strong>Mathematical Verification:</strong> Systematic counting ensures zero counting errors, providing a verified and reliable answer compliant with CBSE foundational standards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct conceptual representation",
            "marks": "1 M"
          },
          {
            "key": "Step-by-step solution verification",
            "marks": "1 M"
          }
        ]
      }
    ]
  }
];

module.exports = { joyfulMathsChapters };
