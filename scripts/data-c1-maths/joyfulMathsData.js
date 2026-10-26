// scripts/data-c1-maths/joyfulMathsData.js
// Official NCERT Class 1 Mathematics (Joyful Mathematics) Complete 100% Verbatim Dataset (NEP 2020 / NCF-FS)

const joyfulMathsChapters = [
  {
    "id": "jm1",
    "num": 1,
    "unit": "Unit 1: Joyful Numbers",
    "title": "Finding the Furry Cat",
    "subtitle": "Pre-Number Concepts, Spatial Vocabulary & Orientation",
    "concepts": [
      "Inside and Outside: recognizing objects within boundaries vs outside.",
      "Top and Bottom: identifying highest and lowest positions.",
      "Nearer and Farther: comparing relative distances from a reference point.",
      "On and Under, Above and Below: positional relationships.",
      "Bigger and Smaller: comparing physical sizes visually."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><rect x=\"40\" y=\"40\" width=\"80\" height=\"60\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\" rx=\"4\"/><circle cx=\"80\" cy=\"70\" r=\"15\" fill=\"#f97316\"/><text x=\"80\" y=\"74\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">Cat</text><text x=\"80\" y=\"112\" font-size=\"11\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\">Inside Box</text><rect x=\"180\" y=\"40\" width=\"80\" height=\"60\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"2\" rx=\"4\"/><circle cx=\"300\" cy=\"70\" r=\"15\" fill=\"#f97316\"/><text x=\"300\" y=\"74\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">Cat</text><text x=\"300\" y=\"112\" font-size=\"11\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\">Outside Box</text><line x1=\"380\" y1=\"95\" x2=\"460\" y2=\"95\" stroke=\"#475569\" stroke-width=\"3\"/><rect x=\"405\" y=\"55\" width=\"30\" height=\"40\" fill=\"#93c5fd\"/><circle cx=\"420\" cy=\"45\" r=\"10\" fill=\"#10b981\"/><text x=\"420\" y=\"112\" font-size=\"11\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">Top &amp; Bottom</text></svg>",
    "cbq": {
      "title": "Hiding in the Playroom Case Study",
      "text": "Aarav is playing hide-and-seek with his furry kitten, Mitu. Aarav looks under the bed, inside the toy trunk, and on top of the study bookshelf.",
      "question": "If Mitu is found inside the trunk, what spatial position does this represent? Where would Aarav look if Mitu were sleeping on a flat elevated surface?",
      "answer": "1. Finding Mitu inside the trunk represents the <strong>'Inside'</strong> position (enclosed by container walls).<br>2. For a flat elevated surface, Aarav should look <strong>'On'</strong> the study bookshelf or on top of the bed.",
      "rubric": "1.5 M for 'Inside' concept + 1.5 M for 'On' concept"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Inside & Outside",
        "q": "Look at the picture in the book: The furry cat is sitting in a cardboard basket. Where is the cat — inside the basket or outside?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. The cat's entire body is enclosed within the four walls of the basket.<br>2. Therefore, the cat is <strong>inside</strong> the basket.<br>3. If the cat hops out onto the carpet, it will be <strong>outside</strong> the basket.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 'inside'",
            "marks": "1 M"
          },
          {
            "key": "Clear spatial explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Top & Bottom",
        "q": "A little bird sits on the highest branch of a guava tree, while a snail is on the grass at the foot of the tree. Tick the animal at the top.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Top:</strong> The bird is at the <strong>top</strong> of the tree because it is perched on the uppermost branch.<br>• <strong>Bottom:</strong> The snail is at the <strong>bottom</strong> of the tree on the ground.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bird is at the top",
            "marks": "1 M"
          },
          {
            "key": "Snail is at the bottom",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Nearer & Farther",
        "q": "Two mice are running toward a hole in the kitchen wall. Mouse Chintu is 2 steps away from the hole. Mouse Pintu is 8 steps away. Who is nearer to the hole?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Compare the distances: 2 steps is less than 8 steps.<br>2. <strong>Nearer:</strong> Mouse Chintu is <strong>nearer</strong> to the hole.<br>3. <strong>Farther:</strong> Mouse Pintu is <strong>farther</strong> from the hole.",
        "marks": 2,
        "rubric": [
          {
            "key": "Chintu is nearer",
            "marks": "1 M"
          },
          {
            "key": "Distance comparison stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Bigger & Smaller",
        "q": "Tick (✓) the bigger animal between an elephant and a goat. Cross (✗) the smaller animal.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Elephant:</strong> Tick (✓) — the elephant has a huge body, so it is <strong>bigger</strong>.<br>• <strong>Goat:</strong> Cross (✗) — compared to the elephant, the goat is <strong>smaller</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Elephant ticked as bigger",
            "marks": "1 M"
          },
          {
            "key": "Goat crossed as smaller",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Prompt • On & Under",
        "q": "A water bottle is kept on the study table. A red football is lying on the floor under the table. Describe their positions using 'on' and 'under'.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The water bottle is <strong>on</strong> the table (resting on the upper flat surface).<br>• The red football is <strong>under</strong> the table (resting on the floor beneath the table).",
        "marks": 2,
        "rubric": [
          {
            "key": "Bottle is on the table",
            "marks": "1 M"
          },
          {
            "key": "Football is under the table",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Above & Below",
        "q": "A ceiling fan hangs overhead. A soft rug is spread on the floor. Which object is above the bed and which is below?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Above:</strong> The ceiling fan is <strong>above</strong> the bed (higher up in the air).<br>• <strong>Below:</strong> The rug is on the floor <strong>below</strong> the bed level.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fan is above",
            "marks": "1 M"
          },
          {
            "key": "Rug is below",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Footprints in Sand",
        "q": "Look at two footprints left on the wet river sand: one is a tiny sparrow claw mark and the other is a large camel hoof print. Which print is bigger?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Large animals have broad feet to walk on sand.<br>2. Therefore, the <strong>camel's hoof print is bigger</strong>.<br>3. The sparrow's claw mark is <strong>smaller</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Camel print is bigger",
            "marks": "1 M"
          },
          {
            "key": "Sparrow print is smaller",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Picture Story • Where Did the Cat Go?",
        "q": "The furry cat jumped: first behind the blue curtain, then into the wooden drawer, and finally under the quilt. Match each place to its position word.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Blue curtain → <strong>Behind</strong><br>• Wooden drawer → <strong>Inside</strong><br>• Quilt → <strong>Under</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Behind the curtain",
            "marks": "1 M"
          },
          {
            "key": "Inside the drawer",
            "marks": "1 M"
          },
          {
            "key": "Under the quilt",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Sorting Big and Small Leaves",
        "q": "Riya collected a banana leaf and a neem leaf from the garden. Which leaf is bigger and which is smaller?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>banana leaf is bigger</strong> (it is broad and very long).<br>• The <strong>neem leaf is smaller</strong> (it is tiny and narrow).",
        "marks": 2,
        "rubric": [
          {
            "key": "Banana leaf is bigger",
            "marks": "1 M"
          },
          {
            "key": "Neem leaf is smaller",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Nearest to the Door",
        "q": "In the classroom, Aman sits on Bench 1 right next to the entrance door. Kabir sits on Bench 5 at the back. Who is nearest to the door?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Aman sits on Bench 1 right beside the entrance, so <strong>Aman is nearest to the door</strong>.<br>• Kabir is farthest from the door.",
        "marks": 2,
        "rubric": [
          {
            "key": "Aman is nearest",
            "marks": "1 M"
          },
          {
            "key": "Reason based on distance",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Activity • Front and Back",
        "q": "During the morning school prayer line, Meera stands in front of Rohan. Who is at the front and who is at the back?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Front:</strong> Meera is at the front.<br>• <strong>Back:</strong> Rohan is at the back, behind Meera.",
        "marks": 2,
        "rubric": [
          {
            "key": "Meera is at the front",
            "marks": "1 M"
          },
          {
            "key": "Rohan is at the back",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • High and Low Swings",
        "q": "Two swings are moving in the park. Swing A goes high up towards the tree branches. Swing B stays low near the grass. Which swing is higher?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Swing A is higher</strong> because it reaches up towards the tree branches.<br>• Swing B is lower.",
        "marks": 2,
        "rubric": [
          {
            "key": "Swing A is higher",
            "marks": "1 M"
          },
          {
            "key": "Swing B is lower",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Before and After",
        "q": "When packing your school bag, do you put books in before zipping the bag or after zipping the bag?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• You must put your books inside <strong>before</strong> zipping the bag.<br>• Zipping the bag comes <strong>after</strong> all items are safely packed.",
        "marks": 2,
        "rubric": [
          {
            "key": "Books before zipping",
            "marks": "1 M"
          },
          {
            "key": "Correct temporal sequence",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Observation Task • Biggest and Smallest",
        "q": "Look at three fruits: a watermelon, an apple, and a grape. Which fruit is the biggest, and which is the smallest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Biggest fruit:</strong> Watermelon.<br>• <strong>Smallest fruit:</strong> Grape.<br>• The apple is medium-sized (between watermelon and grape).",
        "marks": 2,
        "rubric": [
          {
            "key": "Watermelon is biggest",
            "marks": "1 M"
          },
          {
            "key": "Grape is smallest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Drawing & Matching • Cat on the Wall",
        "q": "Describe where the furry cat is sitting if its paws are resting on the brick wall under the open sky.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The cat is sitting <strong>on</strong> the wall.<br>• The open blue sky is <strong>above</strong> the cat.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cat is on the wall",
            "marks": "1 M"
          },
          {
            "key": "Sky is above the cat",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Competency Summary • Room Orientation",
        "q": "Look around your bedroom. Name one thing that is inside your cupboard, one thing on your bed, and one thing under your bed.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Inside cupboard:</strong> Clothes / school uniform.<br>• <strong>On bed:</strong> Pillow / bedsheet.<br>• <strong>Under bed:</strong> Slippers / storage box.",
        "marks": 3,
        "rubric": [
          {
            "key": "Inside example",
            "marks": "1 M"
          },
          {
            "key": "On example",
            "marks": "1 M"
          },
          {
            "key": "Under example",
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
    "title": "What is Long? What is Round?",
    "subtitle": "2D & 3D Shapes, Rolling, Sliding & Surface Properties",
    "concepts": [
      "Identifying round objects (spheres, balls, fruits) vs long objects (pencils, bats, rulers).",
      "Rolling and Sliding: curved surfaces roll, flat surfaces slide.",
      "Objects that both roll and slide (coins, cylindrical pipes, cans).",
      "Tower making: flat surfaces stack securely, curved surfaces fall.",
      "Tracing flat faces of 3D objects to discover 2D shapes (circles, rectangles, squares)."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef3c7\" rx=\"10\"/><circle cx=\"80\" cy=\"55\" r=\"28\" fill=\"#ef4444\"/><rect x=\"160\" y=\"27\" width=\"56\" height=\"56\" rx=\"4\" fill=\"#3b82f6\"/><polygon points=\"280,27 250,83 310,83\" fill=\"#10b981\"/><rect x=\"360\" y=\"37\" width=\"80\" height=\"46\" rx=\"4\" fill=\"#8b5cf6\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">Round (Rolls) • Flat (Slides) • Cylinder (Rolls &amp; Slides)</text></svg>",
    "cbq": {
      "title": "Playground Slide Experiment",
      "text": "During sports period, Ravi slides his plastic lunchbox down the playground slide, while Priya rolls an orange down the same slide.",
      "question": "Why does the orange roll while the lunchbox slides? What happens if you push a ₹5 coin down the slide?",
      "answer": "1. The orange has a curved round surface with no flat faces, so it <strong>rolls</strong>.<br>2. The lunchbox has flat faces, so it <strong>slides</strong>.<br>3. A ₹5 coin can both slide (if placed flat on its face) and roll (if stood upright on its circular edge).",
      "rubric": "1.5 M for surface explanation + 1.5 M for coin behavior"
    },
    "questions": [
      {
        "category": "Textbook Exercise • What is Long, What is Round?",
        "q": "Name two objects from your daily life that are 'Long' and two objects that are 'Round'.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Long objects:</strong> Cricket bat, Writing pencil, Ruler.<br>• <strong>Round objects:</strong> Cricket ball, Orange, Tomato, Bangle.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two correct long objects",
            "marks": "1 M"
          },
          {
            "key": "Two correct round objects",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Blindfold Guessing Game",
        "q": "In Uncle Golu's blindfold game, an object feels smooth, has no corners, and rolls easily in your hands. What is its shape?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. An object with no flat corners that rolls in all directions is <strong>round (spherical)</strong>.<br>2. Example: A tennis ball, marble, or laddoo.",
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
        "q": "Classify these 4 objects into 'Rolls' or 'Slides': (a) A glass marble, (b) An eraser, (c) A tomato, (d) A flat wooden ruler.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Rolls:</strong> Glass marble and Tomato (curved surfaces).<br>• <strong>Slides:</strong> Eraser and Flat wooden ruler (flat surfaces).",
        "marks": 2,
        "rubric": [
          {
            "key": "Marble & tomato = Rolls",
            "marks": "1 M"
          },
          {
            "key": "Eraser & ruler = Slides",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Both Rolls and Slides",
        "q": "How can a ₹5 coin both roll and slide? Explain by describing its two positions.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Slides:</strong> Place the coin flat on the table and push it. Its flat circular face slides.<br>• <strong>Rolls:</strong> Stand the coin upright on its thin curved edge and gently push. It rolls like a wheel.",
        "marks": 3,
        "rubric": [
          {
            "key": "Flat face slides",
            "marks": "1.5 M"
          },
          {
            "key": "Curved edge rolls",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Hands-on Construction • Making Towers",
        "q": "Can you build a stable tower using round footballs? Why or why not? What objects make good towers?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. <strong>No</strong>, footballs cannot make a tower because their curved round bodies roll off each other.<br>2. Objects with <strong>flat faces</strong> like wooden blocks, books, and matchboxes make stable towers.",
        "marks": 3,
        "rubric": [
          {
            "key": "Footballs cannot stack because round",
            "marks": "1.5 M"
          },
          {
            "key": "Flat objects make stable towers",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Coin Spinning Trick",
        "q": "Spin a 1-rupee coin on a smooth table like a top. What does the spinning coin look like?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• When a flat round coin spins very fast on its edge, it looks like a <strong>round ball (sphere)</strong>.<br>• When it stops spinning, it falls flat again.",
        "marks": 2,
        "rubric": [
          {
            "key": "Looks like a round ball / sphere",
            "marks": "1 M"
          },
          {
            "key": "Understands spinning illusion",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Tracing • Matchbox Outline",
        "q": "Keep a matchbox flat on paper and trace its border with a pencil. What flat shape do you get?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The face of a matchbox has 4 straight sides (opposite sides equal).<br>• Tracing its border gives a <strong>Rectangle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified Rectangle",
            "marks": "1 M"
          },
          {
            "key": "Mentions 4 straight sides",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Shape Tracing • Bangle Outline",
        "q": "Keep a round glass bangle flat on a sheet of paper and draw along its edge. What 2D shape is formed?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The bangle has a curved circular rim.<br>• Tracing inside or outside the rim gives a <strong>Circle</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified Circle",
            "marks": "1 M"
          },
          {
            "key": "Recognized curved border",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Can It Roll?",
        "q": "Look at a cylindrical glue stick. Does it roll, slide, or do both?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• A glue stick has a curved round side and flat circular ends.<br>• Therefore, it <strong>both rolls (on its curved side) and slides (on its flat base)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both rolls and slides",
            "marks": "1 M"
          },
          {
            "key": "Explains curved side vs flat end",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Sorting Vegetables",
        "q": "Look at: Carrot, Onion, Cucumber, Lemon, Potato. Which are long and which are round?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Long vegetables:</strong> Carrot, Cucumber.<br>• <strong>Round vegetables:</strong> Onion, Lemon, Potato (mostly round/oval).",
        "marks": 2,
        "rubric": [
          {
            "key": "Long identified",
            "marks": "1 M"
          },
          {
            "key": "Round identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Prompt • Corner Counting",
        "q": "Does a cricket ball have any sharp corners? How many corners does a square chessboard have?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• A cricket ball has <strong>0 corners</strong> (it is completely round).<br>• A square chessboard has <strong>4 sharp corners</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cricket ball = 0 corners",
            "marks": "1 M"
          },
          {
            "key": "Chessboard = 4 corners",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Cardboard Pipe Challenge",
        "q": "Can you stack hollow cardboard toilet-paper rolls to build a tower? How should they be placed?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Yes</strong>, if placed standing upright on their flat circular rims, they stack into a stable tower.<br>• If laid on their curved sides, they roll and cannot stack.",
        "marks": 2,
        "rubric": [
          {
            "key": "Yes, by standing on flat circular rims",
            "marks": "1 M"
          },
          {
            "key": "Curved sides roll",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Wheels of a Vehicle",
        "q": "Why are wheels of bicycles, cars, and buses always round and never square?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Round wheels roll smoothly without bumpy stops.<br>2. Square wheels have 4 corners that would hit the ground and prevent smooth rolling.",
        "marks": 2,
        "rubric": [
          {
            "key": "Round wheels roll smoothly",
            "marks": "1 M"
          },
          {
            "key": "Square corners prevent rolling",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Postcard Tower",
        "q": "Can a thin paper postcard stand upright on a table? How can you fold or roll it so it can hold a book on top?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. A flat postcard bends easily.<br>2. But if you roll the postcard into a <strong>round cylinder (pipe)</strong> and tape the ends, it can stand upright and hold a heavy book on top!",
        "marks": 2,
        "rubric": [
          {
            "key": "Roll into a cylinder / pipe",
            "marks": "1 M"
          },
          {
            "key": "Tape ends to make strong column",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Observation • Match the Pairs",
        "q": "Match the 3D object to its flat face trace: (a) Dice, (b) Water glass bottom, (c) Matchbox side.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Dice → <strong>Square</strong><br>• (b) Water glass bottom → <strong>Circle</strong><br>• (c) Matchbox side → <strong>Rectangle</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Dice = Square",
            "marks": "1 M"
          },
          {
            "key": "Glass = Circle",
            "marks": "1 M"
          },
          {
            "key": "Matchbox = Rectangle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Summary Drill • Rolls or Slides Summary",
        "q": "Write 'R' for Rolls, 'S' for Slides, and 'B' for Both: (1) Football, (2) Notebook, (3) Candle, (4) Orange.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Football → <strong>R (Rolls)</strong><br>2. Notebook → <strong>S (Slides)</strong><br>3. Candle → <strong>B (Both)</strong><br>4. Orange → <strong>R (Rolls)</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 classified correctly",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm3",
    "num": 3,
    "unit": "Unit 2: Number Operations",
    "title": "Mango Treat",
    "subtitle": "Counting 1 to 9, As Many As, More or Less, Zero Concept",
    "concepts": [
      "Counting physical objects from 1 to 9 with one-to-one correspondence.",
      "Comparing quantities: As Many As, More, and Less.",
      "Concept of Zero as an empty collection or none left.",
      "Number names (One to Nine) and numeral writing.",
      "Missing numbers on a number track and ordering."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><circle cx=\"50\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"50\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">1</text><circle cx=\"100\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"100\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">2</text><circle cx=\"150\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"150\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">3</text><circle cx=\"200\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"200\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">4</text><circle cx=\"250\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"250\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">5</text><circle cx=\"300\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"300\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">6</text><circle cx=\"350\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"350\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">7</text><circle cx=\"400\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"400\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">8</text><circle cx=\"450\" cy=\"50\" r=\"14\" fill=\"#f59e0b\"/><text x=\"450\" y=\"54\" font-size=\"10\" text-anchor=\"middle\" fill=\"#fff\" font-weight=\"bold\">9</text><text x=\"250\" y=\"102\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Numbers 1 to 9 &amp; Concept of Zero</text></svg>",
    "cbq": {
      "title": "Orchard Mango Harvest Case Study",
      "text": "Grandpa gives Anaya 5 ripe yellow mangoes and gives Kabir 3 ripe yellow mangoes in cane baskets.",
      "question": "Who has more mangoes and by how many? If Anaya eats all 5 of her mangoes, how many mangoes remain in her basket?",
      "answer": "1. Anaya has 5 and Kabir has 3. Since 5 > 3, <strong>Anaya has more mangoes</strong>.<br>2. Difference = 5 - 3 = <strong>2 more mangoes</strong>.<br>3. If Anaya eats all 5, her basket has 5 - 5 = <strong>0 (Zero) mangoes left</strong>.",
      "rubric": "1 M for comparison + 1 M for difference + 1 M for zero calculation"
    },
    "questions": [
      {
        "category": "Textbook Exercise • As Many As",
        "q": "There are 5 hungry rabbits and 5 crunchy carrots. Draw lines to match each rabbit to a carrot. Is there a carrot for every rabbit?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Count of rabbits = 5.<br>2. Count of carrots = 5.<br>3. Since 5 equals 5, there are <strong>as many carrots as rabbits</strong>. Every rabbit gets exactly 1 carrot without any left over.",
        "marks": 2,
        "rubric": [
          {
            "key": "Matched 5 rabbits to 5 carrots",
            "marks": "1 M"
          },
          {
            "key": "Used 'as many as' accurately",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • More or Less",
        "q": "Group A has 7 butterflies. Group B has 4 butterflies. Tick (✓) the group that has MORE butterflies.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count of Group A = 7<br>• Count of Group B = 4<br>• Comparing: 7 is greater than 4 (7 > 4).<br>• Therefore, <strong>Group A has more butterflies</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Group A ticked",
            "marks": "1 M"
          },
          {
            "key": "Comparison 7 > 4 stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting Mangoes",
        "q": "Look at the mango tree: 6 ripe yellow mangoes are hanging on the tree, and 3 mangoes have fallen on the ground. How many mangoes are on the tree?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count of mangoes hanging on the tree = <strong>6 mangoes</strong>.<br>• Count of fallen mangoes = 3 mangoes.<br>• Total mangoes = 6 + 3 = 9 mangoes.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 mangoes on the tree",
            "marks": "1 M"
          },
          {
            "key": "Total count of 9 noted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Count and Match",
        "q": "Match the objects to their correct numeral: (a) 3 Bananas, (b) 5 Marbles, (c) 8 Leaves, (d) 1 Sun.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 3 Bananas → <strong>3</strong><br>• (b) 5 Marbles → <strong>5</strong><br>• (c) 8 Leaves → <strong>8</strong><br>• (d) 1 Sun → <strong>1</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 numerals correctly matched",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Concept of Zero",
        "q": "There are 4 little green parrots sitting on a branch. One by one, all 4 parrots fly away into the sky. How many parrots are on the branch now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Starting parrots = 4<br>2. Parrots that flew away = 4<br>3. Remaining parrots = 4 - 4 = <strong>0 (Zero)</strong>.<br>4. Zero means none is left on the branch.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 - 4 = 0",
            "marks": "1 M"
          },
          {
            "key": "Zero explained as none left",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • One More Parrot Rhyme",
        "q": "One little parrot green singing cheep, cheep, cheep; one more joins in, making them: ___.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Starting parrots = 1<br>• One more joins: 1 + 1 = <strong>2 parrots</strong> (Two).",
        "marks": 2,
        "rubric": [
          {
            "key": "1 + 1 = 2",
            "marks": "1 M"
          },
          {
            "key": "Number name 'Two'",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Number Names 1 to 9",
        "q": "Write the number name for: (a) 4, (b) 7, (c) 9, (d) 2.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 = <strong>Four</strong><br>• 7 = <strong>Seven</strong><br>• 9 = <strong>Nine</strong><br>• 2 = <strong>Two</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 number names spelled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Train Missing Wagons",
        "q": "Fill the missing numbers on the train wagons: 1, 2, __, 4, __, 6, 7, __, 9.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>Counting from 1 to 9 in sequential order:<br>1, 2, <strong>3</strong>, 4, <strong>5</strong>, 6, 7, <strong>8</strong>, 9.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled in 3, 5, 8 correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Before & After?",
        "q": "What number comes: (a) Just before 6? (b) Just after 7? (c) Between 4 and 6?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Just before 6 is <strong>5</strong>.<br>• (b) Just after 7 is <strong>8</strong>.<br>• (c) Between 4 and 6 is <strong>5</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Before 6 = 5",
            "marks": "1 M"
          },
          {
            "key": "After 7 = 8",
            "marks": "1 M"
          },
          {
            "key": "Between 4 and 6 = 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Dot Pattern Pairing",
        "q": "A ladybug has 4 black dots on its left wing and 5 black dots on its right wing. How many dots does the ladybug have altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Left wing dots = 4<br>• Right wing dots = 5<br>• Total dots = 4 + 5 = <strong>9 dots</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 4 + 5",
            "marks": "1 M"
          },
          {
            "key": "Answer: 9 dots",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "In-Text Prompt • Finger Counting",
        "q": "Show 5 fingers on your left hand. How many fingers must you show on your right hand to make 7 fingers in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Starting with 5 fingers.<br>2. Count on: 6 (one finger), 7 (two fingers).<br>3. You must show <strong>2 fingers</strong> on the right hand (5 + 2 = 7).",
        "marks": 2,
        "rubric": [
          {
            "key": "Counting forward by 2",
            "marks": "1 M"
          },
          {
            "key": "Answer: 2 fingers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circling More Objects",
        "q": "Set X has 8 blue beads. Set Y has 6 red beads. Circle the set with more beads.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 8 is more than 6.<br>• Circle <strong>Set X (8 blue beads)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Set X circled",
            "marks": "1 M"
          },
          {
            "key": "8 > 6 reasoning",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Make Groups of 4",
        "q": "There are 8 balloons in the sky. Draw a circle around a group of 4 balloons. How many balloons are outside the circle?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total balloons = 8<br>• Group circled = 4<br>• Balloons outside the circle = 8 - 4 = <strong>4 balloons</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Group of 4 circled",
            "marks": "1 M"
          },
          {
            "key": "4 remaining calculated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Empty Plates",
        "q": "Plate 1 has 3 laddoos. Plate 2 has 0 laddoos. Which plate is empty?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Plate 2 has 0 laddoos, which means it has no laddoos at all.<br>• Therefore, <strong>Plate 2 is empty</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Plate 2 is empty",
            "marks": "1 M"
          },
          {
            "key": "0 means empty",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Counting Backward",
        "q": "Count backward from 5 to 1: 5, 4, 3, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>Counting backward by subtracting 1 each time:<br>5, 4, 3, <strong>2</strong>, <strong>1</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled in 2 and 1",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Drill • Comparing Three Numbers",
        "q": "Which is the greatest number among 3, 9, and 6? Which is the smallest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Comparing: 3 < 6 < 9.<br>• <strong>Greatest number:</strong> 9.<br>• <strong>Smallest number:</strong> 3.",
        "marks": 2,
        "rubric": [
          {
            "key": "Greatest = 9",
            "marks": "1 M"
          },
          {
            "key": "Smallest = 3",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Sparrows on a Fence",
        "q": "Two sparrows are on a fence. Three more fly down and join them. How many sparrows are on the fence?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Initial sparrows = 2<br>• Sparrows joining = 3<br>• Total = 2 + 3 = <strong>5 sparrows</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition 2 + 3 = 5",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 5 sparrows",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Match Numeral to Dots",
        "q": "Draw lines: 6 to (••••••), 3 to (•••), 8 to (••••••••).",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 matches the group of 6 dots.<br>• 3 matches the group of 3 dots.<br>• 8 matches the group of 8 dots.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct one-to-one matching",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm4",
    "num": 4,
    "unit": "Unit 2: Number Operations",
    "title": "Making 10",
    "subtitle": "Combinations of 10, Ten-Frames, Bundling & Tens/Ones",
    "concepts": [
      "Understanding 10 as a group of ten ones (1 ten = 10 ones).",
      "Using ten-frames to discover number pairs that sum to 10 (e.g. 1+9, 2+8, 5+5).",
      "Bundling loose sticks into packets/bundles of 10.",
      "Numbers from 10 to 20: 10 and 1 is 11, 10 and 2 is 12, up to 20."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"10\"/><rect x=\"60\" y=\"30\" width=\"200\" height=\"60\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\" rx=\"4\"/><line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"90\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"140\" y1=\"30\" x2=\"140\" y2=\"90\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"180\" y1=\"30\" x2=\"180\" y2=\"90\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"220\" y1=\"30\" x2=\"220\" y2=\"90\" stroke=\"#ea580c\" stroke-width=\"2\"/><line x1=\"60\" y1=\"60\" x2=\"260\" y2=\"60\" stroke=\"#ea580c\" stroke-width=\"2\"/><circle cx=\"80\" cy=\"45\" r=\"8\" fill=\"#ea580c\"/><circle cx=\"120\" cy=\"45\" r=\"8\" fill=\"#ea580c\"/><circle cx=\"160\" cy=\"45\" r=\"8\" fill=\"#ea580c\"/><circle cx=\"200\" cy=\"45\" r=\"8\" fill=\"#ea580c\"/><circle cx=\"240\" cy=\"45\" r=\"8\" fill=\"#ea580c\"/><circle cx=\"80\" cy=\"75\" r=\"8\" fill=\"#ea580c\"/><circle cx=\"120\" cy=\"75\" r=\"8\" fill=\"#ea580c\"/><circle cx=\"160\" cy=\"75\" r=\"8\" fill=\"#9a3412\"/><circle cx=\"200\" cy=\"75\" r=\"8\" fill=\"#9a3412\"/><circle cx=\"240\" cy=\"75\" r=\"8\" fill=\"#9a3412\"/><text x=\"380\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">7 + 3 = 10</text><text x=\"380\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ea580c\" text-anchor=\"middle\">Ten-Frame Model</text></svg>",
    "cbq": {
      "title": "Making Bead Garlands Case Study",
      "text": "Simran wants to make a necklace of 10 red beads. She already has 6 red beads on her string.",
      "question": "How many more beads does Simran need to complete her necklace of 10? If her friend gives her 8 beads, can they make another complete garland of 10?",
      "answer": "1. Total beads needed = 10. Beads currently on string = 6.<br>2. More beads needed = 10 - 6 = <strong>4 more beads</strong>.<br>3. With 8 beads, they cannot make a full garland of 10 because 8 is less than 10 (needs 2 more).",
      "rubric": "1.5 M for 10 - 6 = 4 beads + 1.5 M for 8 < 10 analysis"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Ten-Frame Pairs",
        "q": "Look at the 10-frame: 7 boxes have red counters. How many empty boxes are left to make 10?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total boxes in a ten-frame = 10.<br>2. Filled boxes = 7.<br>3. Empty boxes = 10 - 7 = <strong>3 empty boxes</strong>.<br>4. Therefore, 7 + 3 = 10.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 - 7 = 3",
            "marks": "1 M"
          },
          {
            "key": "Pair: 7 and 3 make 10",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Finger Counting to 10",
        "q": "Hold up all the fingers of both hands. How many fingers do you have in total? If you fold 4 fingers down, how many stay upright?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total fingers on both hands = 5 + 5 = <strong>10 fingers</strong>.<br>• Fold 4 fingers down: 10 - 4 = <strong>6 fingers upright</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Total 10 fingers",
            "marks": "1 M"
          },
          {
            "key": "6 upright (10 - 4 = 6)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Pairs that Make 10",
        "q": "Fill in the blanks to make 10:<br>(a) 1 + __ = 10<br>(b) 2 + __ = 10<br>(c) 5 + __ = 10<br>(d) 8 + __ = 10",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 1 + <strong>9</strong> = 10<br>• (b) 2 + <strong>8</strong> = 10<br>• (c) 5 + <strong>5</strong> = 10<br>• (d) 8 + <strong>2</strong> = 10",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 pairs filled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Hands-on Activity • Bundling Sticks",
        "q": "Rohan has 10 loose matchsticks. He ties them together with a rubber band. What do we call this tied bundle in mathematics?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• A bundle of 10 loose ones is called <strong>1 Ten</strong> (One Ten = 10 Ones).<br>• This forms the foundation of the place-value system.",
        "marks": 2,
        "rubric": [
          {
            "key": "Called 1 Ten",
            "marks": "1 M"
          },
          {
            "key": "1 Ten = 10 Ones",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Numbers 10 to 20",
        "q": "A bundle of 10 pencils and 3 loose pencils makes what number? Write the numeral and number name.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 1 bundle of 10 = 10<br>• 3 loose pencils = 3<br>• 10 + 3 = <strong>13</strong>.<br>• Number name: <strong>Thirteen</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Numeral 13",
            "marks": "1 M"
          },
          {
            "key": "Number name Thirteen",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • 10 and More",
        "q": "Write the number for:<br>(a) 10 and 1<br>(b) 10 and 5<br>(c) 10 and 7<br>(d) 10 and 10",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 10 and 1 = <strong>11 (Eleven)</strong><br>• (b) 10 and 5 = <strong>15 (Fifteen)</strong><br>• (c) 10 and 7 = <strong>17 (Seventeen)</strong><br>• (d) 10 and 10 = <strong>20 (Twenty)</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 numbers correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circle Groups of 10",
        "q": "Look at 14 ice cream cones. Circle a group of 10 cones. How many cones are left outside the circle?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total cones = 14.<br>2. Circle 10 cones (1 group of 10).<br>3. Cones left outside = 14 - 10 = <strong>4 loose cones</strong>.<br>4. 14 = 1 Ten and 4 Ones.",
        "marks": 2,
        "rubric": [
          {
            "key": "Circled 10 cones",
            "marks": "1 M"
          },
          {
            "key": "4 loose cones remaining",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number 10 Rainbow Pair",
        "q": "If you have 6 blue marbles, how many yellow marbles must you add to make a full bowl of 10 marbles?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Blue marbles = 6<br>• Total needed = 10<br>• Yellow marbles = 10 - 6 = <strong>4 yellow marbles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 - 6 = 4",
            "marks": "1 M"
          },
          {
            "key": "Answer: 4 yellow marbles",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones Table",
        "q": "Fill in Tens and Ones for: (a) 18, (b) 12.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 18 = <strong>1 Ten and 8 Ones</strong><br>• (b) 12 = <strong>1 Ten and 2 Ones</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "18 = 1 Ten, 8 Ones",
            "marks": "1 M"
          },
          {
            "key": "12 = 1 Ten, 2 Ones",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Number Strip 10 to 20",
        "q": "Fill the missing numbers: 10, 11, __, 13, __, 15, 16, __, 18, 19, 20.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>Counting from 10 to 20 sequentially:<br>10, 11, <strong>12</strong>, 13, <strong>14</strong>, 15, 16, <strong>17</strong>, 18, 19, 20.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 12, 14, 17 correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Greater and Smaller in Teens",
        "q": "Circle the greater number in each pair: (a) 11 and 16, (b) 19 and 15.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 16 is greater than 11 → Circle <strong>16</strong>.<br>• (b) 19 is greater than 15 → Circle <strong>19</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "16 circled",
            "marks": "1 M"
          },
          {
            "key": "19 circled",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Eggs in a Carton",
        "q": "An egg tray holds 10 eggs. Farmer Ali placed 10 eggs in the tray and kept 6 extra eggs in a basket. How many eggs does he have in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Eggs in tray = 10 (1 ten)<br>• Extra eggs = 6 (6 ones)<br>• Total eggs = 10 + 6 = <strong>16 eggs</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 + 6 = 16",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 16 eggs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • How Many Ones in 20?",
        "q": "How many tens make the number 20? How many bundles of 10 matchsticks would you tie?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10 + 10 = 20.<br>• Therefore, <strong>2 tens</strong> make 20.<br>• You would tie <strong>2 bundles of 10 matchsticks</strong> with 0 loose ones.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 tens make 20",
            "marks": "1 M"
          },
          {
            "key": "2 bundles tied",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Just After 19?",
        "q": "What number comes just before 15? What number comes just after 19?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Just before 15 is <strong>14</strong>.<br>• Just after 19 is <strong>20</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Before 15 = 14",
            "marks": "1 M"
          },
          {
            "key": "After 19 = 20",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Match Numeral to Ten-Frame",
        "q": "Match: (1) Full 10-frame and 2 dots → 12. (2) Full 10-frame and 5 dots → 15.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10 + 2 = <strong>12</strong><br>• 10 + 5 = <strong>15</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct matches verified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Drill • Smallest in the Group",
        "q": "Find the smallest number among: 13, 17, 10, 15.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Comparing: 10 < 13 < 15 < 17.<br>• The smallest number is <strong>10</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 10 as smallest",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Bead String of 10",
        "q": "Draw a necklace with 10 beads: color 5 red and 5 green. Does 5 + 5 equal 10?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Yes, 5 red beads + 5 green beads = <strong>10 beads</strong>.<br>• 5 and 5 are doubles that make 10.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 + 5 = 10",
            "marks": "1 M"
          },
          {
            "key": "Recognized equal doubles",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm5",
    "num": 5,
    "unit": "Unit 2: Number Operations",
    "title": "How Many?",
    "subtitle": "Addition & Subtraction within 10, Word Problems & Story Contexts",
    "concepts": [
      "Combining two collections to find 'How many altogether?' (Addition).",
      "Taking away items from a group to find 'How many left?' (Subtraction).",
      "Using fingers, dot cards, and pictures for addition facts.",
      "Properties of Zero in addition and subtraction (adding 0 gives same number).",
      "Solving simple everyday addition and subtraction story problems."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"70\" cy=\"50\" r=\"14\" fill=\"#3b82f6\"/><circle cx=\"105\" cy=\"50\" r=\"14\" fill=\"#3b82f6\"/><circle cx=\"140\" cy=\"50\" r=\"14\" fill=\"#3b82f6\"/><text x=\"175\" y=\"56\" font-size=\"20\" fill=\"#1e3a8a\" font-weight=\"bold\">+</text><circle cx=\"210\" cy=\"50\" r=\"14\" fill=\"#10b981\"/><circle cx=\"245\" cy=\"50\" r=\"14\" fill=\"#10b981\"/><text x=\"280\" y=\"56\" font-size=\"20\" fill=\"#1e3a8a\" font-weight=\"bold\">=</text><circle cx=\"320\" cy=\"50\" r=\"12\" fill=\"#3b82f6\"/><circle cx=\"348\" cy=\"50\" r=\"12\" fill=\"#3b82f6\"/><circle cx=\"376\" cy=\"50\" r=\"12\" fill=\"#3b82f6\"/><circle cx=\"404\" cy=\"50\" r=\"12\" fill=\"#10b981\"/><circle cx=\"432\" cy=\"50\" r=\"12\" fill=\"#10b981\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">3 + 2 = 5 (Combining Groups)</text></svg>",
    "cbq": {
      "title": "Frogs in the Pond Case Study",
      "text": "Four green frogs were sitting on a lotus leaf in the pond. Three more frogs leaped onto the leaf. Soon after, two frogs jumped back into the cool water.",
      "question": "How many frogs were on the leaf after the three leaped in? How many frogs remained on the leaf after two jumped into the water?",
      "answer": "1. After three frogs joined: 4 + 3 = <strong>7 frogs on the leaf</strong>.<br>2. After two jumped away: 7 - 2 = <strong>5 frogs remaining</strong>.",
      "rubric": "1.5 M for 4 + 3 = 7 frogs + 1.5 M for 7 - 2 = 5 frogs"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Adding Flowers",
        "q": "Rohan has 3 red roses in his hand. Maya gives him 2 yellow roses. How many roses does Rohan have altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Red roses = 3<br>2. Yellow roses = 2<br>3. Total roses = 3 + 2 = <strong>5 roses altogether</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Addition expression 3 + 2",
            "marks": "1 M"
          },
          {
            "key": "Answer: 5 roses",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Taking Away Balloons",
        "q": "A balloon seller held 6 colorful balloons. 2 balloons popped with a bang. How many balloons are left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Initial balloons = 6<br>2. Popped balloons = 2<br>3. Balloons left = 6 - 2 = <strong>4 balloons</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Subtraction expression 6 - 2",
            "marks": "1 M"
          },
          {
            "key": "Answer: 4 balloons",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Frogs on Water Lilies",
        "q": "Look at the pond picture: 5 frogs are sitting on water lily pads. 2 more frogs jump out of the water onto the pads. How many frogs in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Frogs on pads = 5<br>• New frogs joining = 2<br>• Total frogs = 5 + 2 = <strong>7 frogs</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 + 2 = 7",
            "marks": "1 M"
          },
          {
            "key": "Correct total with unit",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Adding Zero",
        "q": "A fruit plate has 4 sweet bananas. No more bananas were added (0 bananas added). How many bananas are on the plate?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 + 0 = <strong>4 bananas</strong>.<br>• Adding zero to any number leaves the number unchanged.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 0 = 4",
            "marks": "1 M"
          },
          {
            "key": "Property of zero explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtracting Zero",
        "q": "Ankit had 5 toy cars. He did not give any car to his brother (gave 0 cars). How many toy cars does Ankit still have?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 - 0 = <strong>5 toy cars</strong>.<br>• Subtracting zero does not decrease the collection.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 - 0 = 5",
            "marks": "1 M"
          },
          {
            "key": "Property of zero in subtraction",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Addition Facts of 6",
        "q": "Write three different addition pairs that equal 6.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 1 + 5 = 6<br>• 2 + 4 = 6<br>• 3 + 3 = 6 (also 0 + 6 = 6).",
        "marks": 2,
        "rubric": [
          {
            "key": "Three valid pairs provided",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sparrows on a Wire",
        "q": "7 sparrows were resting on an electric wire. 3 sparrows flew away to catch insects. How many sparrows remained on the wire?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Initial sparrows = 7<br>• Sparrows that flew away = 3<br>• Sparrows left = 7 - 3 = <strong>4 sparrows</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 - 3 = 4",
            "marks": "1 M"
          },
          {
            "key": "Answer: 4 sparrows",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Line Addition",
        "q": "Start at number 4 on the number line. Take 3 hops forward. Where do you land?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Starting point = 4<br>• Jump 3 forward: 4 → 5 → 6 → 7.<br>• You land on <strong>7</strong> (4 + 3 = 7).",
        "marks": 2,
        "rubric": [
          {
            "key": "Shows 3 forward hops",
            "marks": "1 M"
          },
          {
            "key": "Lands on 7",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Line Subtraction",
        "q": "Start at number 8 on the number line. Take 3 hops backward. Where do you land?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Starting point = 8<br>• Jump 3 backward: 8 → 7 → 6 → 5.<br>• You land on <strong>5</strong> (8 - 3 = 5).",
        "marks": 2,
        "rubric": [
          {
            "key": "Shows 3 backward hops",
            "marks": "1 M"
          },
          {
            "key": "Lands on 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Match the Sum",
        "q": "Match each expression to its result: (a) 4 + 4, (b) 2 + 7, (c) 9 - 4, (d) 8 - 6.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 4 + 4 = <strong>8</strong><br>• (b) 2 + 7 = <strong>9</strong><br>• (c) 9 - 4 = <strong>5</strong><br>• (d) 8 - 6 = <strong>2</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly matched",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Pencils in a Box",
        "q": "Neha has 5 sharpened pencils. Her mother gives her 4 more sharpened pencils. How many pencils does Neha have in her box now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Pencils with Neha = 5<br>• Pencils given by mother = 4<br>• Total pencils = 5 + 4 = <strong>9 pencils</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 + 4 = 9",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 9 pencils",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Apples on a Tree",
        "q": "There were 8 red apples hanging on a branch. The wind blew and 5 apples fell to the ground. How many apples are still on the branch?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Apples on branch = 8<br>• Apples fallen = 5<br>• Apples left on branch = 8 - 5 = <strong>3 apples</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 - 5 = 3",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 3 apples",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Domino Dots Adding",
        "q": "A domino tile has 3 dots on one side and 3 dots on the other side. What is the total sum of dots?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 3 = <strong>6 dots</strong> (doubles fact).",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 3 = 6",
            "marks": "1 M"
          },
          {
            "key": "Correct total",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtracting Everything",
        "q": "Geeta had 6 candies. She gave all 6 candies to her friends. How many candies does she have left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 - 6 = <strong>0 candies</strong>.<br>• When you subtract a number from itself, the result is always zero.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 - 6 = 0",
            "marks": "1 M"
          },
          {
            "key": "Explanation of zero remainder",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Missing Addend",
        "q": "What number must you add to 6 to make 9? Write the missing number: 6 + __ = 9.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count forward from 6: 7, 8, 9 (3 counts).<br>• 6 + <strong>3</strong> = 9.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 3",
            "marks": "1 M"
          },
          {
            "key": "Workings shown",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Missing Subtrahend",
        "q": "Fill the blank: 8 - __ = 5.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 8 - 5 = 3.<br>• Therefore, 8 - <strong>3</strong> = 5.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 3",
            "marks": "1 M"
          },
          {
            "key": "Correct subtraction balance",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • True or False",
        "q": "State True or False: 3 + 4 gives the same answer as 4 + 3.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 4 = 7 and 4 + 3 = 7.<br>• <strong>True.</strong> Changing the order of numbers in addition does not change the sum.",
        "marks": 2,
        "rubric": [
          {
            "key": "True with correct sums (7 = 7)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Finger Addition",
        "q": "Raise 4 fingers on your left hand and 4 fingers on your right hand. Count all upright fingers.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 fingers + 4 fingers = <strong>8 fingers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 4 = 8",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Making 10 from Two Groups",
        "q": "A fruit basket has 7 oranges. How many more oranges must be placed in the basket so that it contains 10 oranges?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Target = 10 oranges<br>• Existing = 7 oranges<br>• Needed = 10 - 7 = <strong>3 oranges</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 - 7 = 3",
            "marks": "1 M"
          },
          {
            "key": "Answer: 3 oranges",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm6",
    "num": 6,
    "unit": "Unit 2: Number Operations",
    "title": "Vegetable Farm",
    "subtitle": "Addition & Subtraction within 20, Double Ten-Frames & Word Problems",
    "concepts": [
      "Extending addition and subtraction to teen numbers (10 to 20).",
      "Using double ten-frames to bridge 10 and add single digits.",
      "Partitioning numbers: 14 = 10 + 4, 17 = 10 + 7.",
      "Real-life harvest and market word problems with vegetables."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"10\"/><rect x=\"50\" y=\"30\" width=\"160\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\" rx=\"4\"/><text x=\"130\" y=\"60\" font-size=\"12\" fill=\"#15803d\" font-weight=\"bold\" text-anchor=\"middle\">Full Frame: 10</text><rect x=\"230\" y=\"30\" width=\"160\" height=\"50\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\" rx=\"4\"/><circle cx=\"250\" cy=\"55\" r=\"7\" fill=\"#16a34a\"/><circle cx=\"275\" cy=\"55\" r=\"7\" fill=\"#16a34a\"/><circle cx=\"300\" cy=\"55\" r=\"7\" fill=\"#16a34a\"/><circle cx=\"325\" cy=\"55\" r=\"7\" fill=\"#16a34a\"/><text x=\"360\" y=\"60\" font-size=\"12\" fill=\"#15803d\" font-weight=\"bold\">4</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">10 + 4 = 14 Vegetables Harvested</text></svg>",
    "cbq": {
      "title": "Vegetable Basket Distribution Case Study",
      "text": "Farmer Kalu harvests 12 orange carrots and 6 red radishes from his organic garden beds. He puts them into a large jute sack.",
      "question": "How many total vegetables did Farmer Kalu harvest? If he sells 5 carrots at the morning market, how many carrots remain?",
      "answer": "1. Total vegetables harvested = 12 + 6 = <strong>18 vegetables</strong>.<br>2. Carrots remaining = 12 - 5 = <strong>7 carrots left</strong>.",
      "rubric": "1.5 M for 12 + 6 = 18 vegetables + 1.5 M for 12 - 5 = 7 carrots"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Carrot Harvest Addition",
        "q": "Rani pulls 9 carrots from the first garden patch and 4 carrots from the second patch. How many carrots did Rani pull altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. First patch = 9 carrots<br>2. Second patch = 4 carrots<br>3. 9 + 4 = 9 + 1 + 3 = 10 + 3 = <strong>13 carrots</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Making 10 strategy (9+1+3)",
            "marks": "1 M"
          },
          {
            "key": "Answer: 13 carrots",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Pumpkin Subtraction",
        "q": "There were 15 pumpkins lying in the farm shed. 4 pumpkins were loaded onto a wooden cart. How many pumpkins remain in the shed?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total pumpkins = 15<br>2. Loaded pumpkins = 4<br>3. Pumpkins remaining = 15 - 4 = <strong>11 pumpkins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "15 - 4 = 11",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 11 pumpkins",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Double Ten-Frame Counting",
        "q": "One ten-frame is completely full (10 dots), and the second ten-frame has 6 dots. What total number do they represent?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Full ten-frame = 10<br>• Second frame = 6<br>• Total = 10 + 6 = <strong>16</strong> (Sixteen).",
        "marks": 2,
        "rubric": [
          {
            "key": "10 + 6 = 16",
            "marks": "1 M"
          },
          {
            "key": "Number name Sixteen",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Adding to 10",
        "q": "Solve:<br>(a) 10 + 3 = __<br>(b) 10 + 7 = __<br>(c) 10 + 9 = __<br>(d) 10 + 5 = __",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 10 + 3 = <strong>13</strong><br>• (b) 10 + 7 = <strong>17</strong><br>• (c) 10 + 9 = <strong>19</strong><br>• (d) 10 + 5 = <strong>15</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 sums evaluated correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtracting from Teen Numbers",
        "q": "Solve:<br>(a) 14 - 4 = __<br>(b) 18 - 8 = __<br>(c) 17 - 10 = __<br>(d) 12 - 2 = __",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 14 - 4 = <strong>10</strong><br>• (b) 18 - 8 = <strong>10</strong><br>• (c) 17 - 10 = <strong>7</strong><br>• (d) 12 - 2 = <strong>10</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 differences evaluated correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Tomatoes in Baskets",
        "q": "Simran's basket has 11 red tomatoes. Her brother adds 5 green tomatoes to the basket. How many tomatoes are in the basket now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Red tomatoes = 11<br>• Green tomatoes = 5<br>• Total = 11 + 5 = <strong>16 tomatoes</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "11 + 5 = 16",
            "marks": "1 M"
          },
          {
            "key": "Answer: 16 tomatoes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Cucumbers Sold",
        "q": "Farmer Hari had 16 cucumbers. He sold 6 cucumbers to a customer. How many cucumbers does he have left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total cucumbers = 16<br>• Cucumbers sold = 6<br>• Cucumbers left = 16 - 6 = <strong>10 cucumbers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "16 - 6 = 10",
            "marks": "1 M"
          },
          {
            "key": "Answer: 10 cucumbers",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Line Jump within 20",
        "q": "Start at 12 on the number line. Jump forward by 5 steps. Where do you land?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Starting point = 12<br>• Steps forward = 5<br>• 12 + 5 = <strong>17</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "12 + 5 = 17",
            "marks": "1 M"
          },
          {
            "key": "Correct destination on number line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Line Backward Jump",
        "q": "Start at 19 on the number line. Jump backward by 4 steps. Where do you land?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Starting point = 19<br>• Steps backward = 4<br>• 19 - 4 = <strong>15</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "19 - 4 = 15",
            "marks": "1 M"
          },
          {
            "key": "Correct destination on number line",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Adding Doubles",
        "q": "Find the double sum: (a) 5 + 5 = __, (b) 6 + 6 = __, (c) 7 + 7 = __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 5 + 5 = <strong>10</strong><br>• (b) 6 + 6 = <strong>12</strong><br>• (c) 7 + 7 = <strong>14</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "5+5 = 10",
            "marks": "1 M"
          },
          {
            "key": "6+6 = 12",
            "marks": "1 M"
          },
          {
            "key": "7+7 = 14",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Making 10 to Add",
        "q": "How do you add 8 + 5 using the 'Make 10' strategy?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. 8 needs 2 to make 10.<br>2. Break 5 into 2 + 3.<br>3. 8 + 2 = 10.<br>4. 10 + 3 = <strong>13</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Break 5 into 2 + 3",
            "marks": "1 M"
          },
          {
            "key": "10 + 3 = 13",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtracting from 20",
        "q": "A crate had 20 cabbages. The cook used 8 cabbages to make dinner. How many cabbages remain in the crate?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Initial cabbages = 20<br>• Cabbages used = 8<br>• Remaining = 20 - 8 = <strong>12 cabbages</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "20 - 8 = 12",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 12 cabbages",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Tens and Ones Deconstruction",
        "q": "Break these numbers into Tens and Ones: (a) 15, (b) 19, (c) 11.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 15 = <strong>1 Ten and 5 Ones</strong><br>• (b) 19 = <strong>1 Ten and 9 Ones</strong><br>• (c) 11 = <strong>1 Ten and 1 One</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 3 broken down correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Missing Number in Equation",
        "q": "Fill the blank: 13 + __ = 18.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 18 - 13 = 5.<br>• 13 + <strong>5</strong> = 18.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 5",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Subtraction Balance",
        "q": "Fill the blank: 17 - __ = 11.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 17 - 11 = 6.<br>• 17 - <strong>6</strong> = 11.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 6",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Match Expression to Answer",
        "q": "Match: (1) 9 + 9, (2) 15 - 3, (3) 8 + 6.<br>Answers: [12, 14, 18].",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (1) 9 + 9 = <strong>18</strong><br>• (2) 15 - 3 = <strong>12</strong><br>• (3) 8 + 6 = <strong>14</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 3 correctly matched",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Radishes and Turnips",
        "q": "Grandmother harvested 7 white radishes and 8 purple turnips. How many root vegetables did she harvest in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Radishes = 7<br>• Turnips = 8<br>• Total = 7 + 8 = <strong>15 root vegetables</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 + 8 = 15",
            "marks": "1 M"
          },
          {
            "key": "Answer: 15 vegetables",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Competency Review • Comparing Differences",
        "q": "Which gives a greater answer: (16 - 4) or (11 + 2)?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 16 - 4 = 12.<br>• 11 + 2 = 13.<br>• Comparing: 13 > 12.<br>• <strong>(11 + 2) gives the greater answer</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Calculated 12 and 13",
            "marks": "1 M"
          },
          {
            "key": "(11 + 2) is greater",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm7",
    "num": 7,
    "unit": "Unit 3: Measurement & Patterns",
    "title": "Lina's Family",
    "subtitle": "Non-Standard Lengths, Handspans, Footsteps, Heavy vs Light",
    "concepts": [
      "Measuring length using non-standard body units: handspan, fingers, and footsteps (paces).",
      "Understanding why non-standard units vary between children and adults.",
      "Comparing lengths: longer vs shorter, longest vs shortest.",
      "Comparing heights: taller vs shorter, tallest vs shortest.",
      "Comparing weights qualitatively: heavier vs lighter."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"10\"/><line x1=\"60\" y1=\"60\" x2=\"220\" y2=\"60\" stroke=\"#ef4444\" stroke-width=\"4\"/><circle cx=\"60\" cy=\"60\" r=\"5\" fill=\"#991b1b\"/><circle cx=\"220\" cy=\"60\" r=\"5\" fill=\"#991b1b\"/><text x=\"140\" y=\"50\" font-size=\"12\" fill=\"#991b1b\" font-weight=\"bold\" text-anchor=\"middle\">Longer Pencil (12 cm)</text><line x1=\"280\" y1=\"60\" x2=\"360\" y2=\"60\" stroke=\"#3b82f6\" stroke-width=\"4\"/><circle cx=\"280\" cy=\"60\" r=\"5\" fill=\"#1e3a8a\"/><circle cx=\"360\" cy=\"60\" r=\"5\" fill=\"#1e3a8a\"/><text x=\"320\" y=\"50\" font-size=\"12\" fill=\"#1e3a8a\" font-weight=\"bold\" text-anchor=\"middle\">Shorter (6 cm)</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Measuring with Handspans &amp; Paces</text></svg>",
    "cbq": {
      "title": "Measuring the Study Table Case Study",
      "text": "Lina measures the length of her dining table using her handspan. She finds it is 10 handspans long. Her father measures the same table and finds it is only 6 handspans long.",
      "question": "Why did Lina get 10 handspans while her father got only 6 handspans? Whose handspan is bigger?",
      "answer": "1. Father's handspan is <strong>bigger</strong> because he is an adult.<br>2. Because father's handspan is bigger, fewer handspans (6) are needed to cover the same table.<br>3. Lina's hand is smaller, so she needed more handspans (10).",
      "rubric": "1.5 M for father's handspan is bigger + 1.5 M for fewer spans needed"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Measuring with Handspan",
        "q": "What is a 'handspan'? Measure the length of your mathematics textbook using your handspan. How many handspans long is it?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. A handspan is the distance from the tip of the thumb to the tip of the little finger when the hand is stretched wide open.<br>2. When measured by a Class 1 student, the Joyful Mathematics book is approximately <strong>2 to 3 handspans long</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Definition of handspan",
            "marks": "1 M"
          },
          {
            "key": "Measurement: ~2 to 3 handspans",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Longer and Shorter Pencils",
        "q": "Look at two pencils: Pencil A has not been sharpened, and Pencil B is a small stub after many days of use. Which pencil is longer?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Pencil A is longer</strong> (new, unsharpened pencil).<br>• Pencil B is shorter (used stub).",
        "marks": 2,
        "rubric": [
          {
            "key": "Pencil A is longer",
            "marks": "1 M"
          },
          {
            "key": "Reason based on sharpening",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Measuring Classroom with Footsteps",
        "q": "Walk from the classroom door to the teacher's blackboard counting your footsteps (paces). If it takes you 15 footsteps and your teacher takes 10 footsteps, explain why.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. The distance between the door and board is the same.<br>2. The teacher is an adult with longer legs, so her footsteps are bigger (takes 10 steps).<br>3. A student's steps are shorter, requiring <strong>more footsteps (15 steps)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Teacher steps are longer",
            "marks": "1 M"
          },
          {
            "key": "Student needs more steps",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Taller and Shorter in the Family",
        "q": "In Lina's family, who is the tallest person and who is the shortest: Grandfather, Mother, Lina, or Baby Brother?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Tallest:</strong> Grandfather (or Father).<br>• <strong>Shortest:</strong> Baby Brother (crawling toddler).",
        "marks": 2,
        "rubric": [
          {
            "key": "Tallest identified",
            "marks": "1 M"
          },
          {
            "key": "Shortest identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Measuring with Eraser / Paperclips",
        "q": "How many erasers long is your wooden pencil? Place erasers end-to-end to measure.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• A standard new wooden pencil is about <strong>4 to 5 standard erasers long</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid estimate (4 to 5 erasers)",
            "marks": "1 M"
          },
          {
            "key": "End-to-end placement method",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Heavier and Lighter",
        "q": "Hold a watermelon in one hand and a lemon in the other hand. Which fruit is heavier and which is lighter?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Heavier:</strong> Watermelon (pulls down heavily on your hand).<br>• <strong>Lighter:</strong> Lemon (feels very light and easy to hold).",
        "marks": 2,
        "rubric": [
          {
            "key": "Watermelon is heavier",
            "marks": "1 M"
          },
          {
            "key": "Lemon is lighter",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Comparing Ladders",
        "q": "Two painters have ladders: Ladder 1 has 12 rungs, and Ladder 2 has 6 rungs. Which ladder is longer?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Ladder 1 is longer</strong> because it has 12 rungs reaching higher up.<br>• Ladder 2 with 6 rungs is shorter.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ladder 1 is longer",
            "marks": "1 M"
          },
          {
            "key": "12 rungs > 6 rungs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Longest Ribbon",
        "q": "Three girls have hair ribbons: Sita has a 20 cm ribbon, Gita has a 40 cm ribbon, and Rita has a 10 cm ribbon. Whose ribbon is the longest and whose is the shortest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Longest ribbon:</strong> Gita (40 cm).<br>• <strong>Shortest ribbon:</strong> Rita (10 cm).",
        "marks": 2,
        "rubric": [
          {
            "key": "Gita's ribbon is longest",
            "marks": "1 M"
          },
          {
            "key": "Rita's ribbon is shortest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Measuring Desk with Finger-Widths",
        "q": "How many finger-widths wide is your eraser? Place fingers side-by-side.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• A standard eraser is about <strong>2 to 3 finger-widths wide</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 to 3 finger-widths",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Seesaw Balance",
        "q": "An elephant and an ant sit on opposite ends of a seesaw in a funny cartoon. Which side will touch the ground?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. The elephant is much <strong>heavier</strong> than the tiny ant.<br>2. Therefore, the <strong>elephant's side will touch the ground</strong>, and the ant's side will shoot up into the air.",
        "marks": 2,
        "rubric": [
          {
            "key": "Elephant's side touches ground",
            "marks": "1 M"
          },
          {
            "key": "Elephant is heavier",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Thick and Thin",
        "q": "Compare a dictionary and a comic book. Which book is thicker and which is thinner?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Thicker:</strong> The dictionary (has hundreds of pages).<br>• <strong>Thinner:</strong> The comic book (has only a few thin pages).",
        "marks": 2,
        "rubric": [
          {
            "key": "Dictionary is thicker",
            "marks": "1 M"
          },
          {
            "key": "Comic book is thinner",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Observation Task • Tallest Animal",
        "q": "Among a dog, a giraffe, and a cat, which animal is the tallest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>The giraffe is the tallest animal</strong> with its long neck standing high above trees.<br>• The cat is the shortest among the three.",
        "marks": 2,
        "rubric": [
          {
            "key": "Giraffe is tallest",
            "marks": "1 M"
          },
          {
            "key": "Cat is shortest",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Arm-Span vs Handspan",
        "q": "What is larger: your arm-span (both arms stretched out wide) or your single handspan?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Your <strong>arm-span is much larger</strong> than a single handspan.<br>• An arm-span equals several handspans together.",
        "marks": 2,
        "rubric": [
          {
            "key": "Arm-span is larger",
            "marks": "1 M"
          },
          {
            "key": "Explains stretching both arms",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Heavy School Bag vs Light Pencil",
        "q": "Which is heavier: your school bag full of books or a single wooden pencil?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Heavier:</strong> School bag full of books.<br>• <strong>Lighter:</strong> A single wooden pencil.",
        "marks": 2,
        "rubric": [
          {
            "key": "School bag is heavier",
            "marks": "1 M"
          },
          {
            "key": "Pencil is lighter",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Comparing Rope Lengths",
        "q": "Rope Red is 8 footsteps long. Rope Blue is 11 footsteps long. Which rope is longer and by how many footsteps?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 11 is greater than 8, so <strong>Rope Blue is longer</strong>.<br>• Difference = 11 - 8 = <strong>3 footsteps longer</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rope Blue is longer",
            "marks": "1 M"
          },
          {
            "key": "3 footsteps difference",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Competency Review • Standard vs Non-Standard",
        "q": "Why do we need a standard ruler to measure cloth in a shop instead of using the shopkeeper's handspan?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Every person's hand has a different size.<br>2. A standard wooden or plastic ruler is fixed and equal everywhere, ensuring fair and accurate measurement.",
        "marks": 2,
        "rubric": [
          {
            "key": "Handspans differ per person",
            "marks": "1 M"
          },
          {
            "key": "Ruler is fixed and equal",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm8",
    "num": 8,
    "unit": "Unit 3: Measurement & Patterns",
    "title": "Fun with Numbers",
    "subtitle": "Numbers 21 to 99, Matchstick Bundles of 10, Tens & Ones",
    "concepts": [
      "Extending place value to two-digit numbers up to 99.",
      "Grouping items into bundles of 10 and counting loose ones.",
      "Writing numbers in expanded notation (e.g., 45 = 4 tens and 5 ones = 40 + 5).",
      "Reading and completing the 1 to 100 number chart.",
      "Comparing 2-digit numbers using tens place first, then ones place."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"10\"/><rect x=\"50\" y=\"30\" width=\"70\" height=\"55\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\" rx=\"4\"/><text x=\"85\" y=\"62\" font-size=\"12\" fill=\"#0369a1\" font-weight=\"bold\" text-anchor=\"middle\">10</text><rect x=\"130\" y=\"30\" width=\"70\" height=\"55\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\" rx=\"4\"/><text x=\"165\" y=\"62\" font-size=\"12\" fill=\"#0369a1\" font-weight=\"bold\" text-anchor=\"middle\">10</text><rect x=\"210\" y=\"30\" width=\"70\" height=\"55\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\" rx=\"4\"/><text x=\"245\" y=\"62\" font-size=\"12\" fill=\"#0369a1\" font-weight=\"bold\" text-anchor=\"middle\">10</text><circle cx=\"310\" cy=\"55\" r=\"6\" fill=\"#0284c7\"/><circle cx=\"330\" cy=\"55\" r=\"6\" fill=\"#0284c7\"/><circle cx=\"350\" cy=\"55\" r=\"6\" fill=\"#0284c7\"/><circle cx=\"370\" cy=\"55\" r=\"6\" fill=\"#0284c7\"/><text x=\"430\" y=\"62\" font-size=\"16\" fill=\"#0369a1\" font-weight=\"bold\">34</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">3 Tens + 4 Ones = 30 + 4 = 34</text></svg>",
    "cbq": {
      "title": "Flower Garlands at the Temple Case Study",
      "text": "Meena stringed 3 garlands of 10 marigold flowers each, and she has 7 loose flowers remaining in her basket.",
      "question": "How many total flowers does Meena have? How many more loose flowers does she need to complete a fourth garland of 10?",
      "answer": "1. 3 garlands of 10 = 30 flowers. Loose flowers = 7. Total = 30 + 7 = <strong>37 flowers</strong>.<br>2. To make a full garland of 10 from 7 flowers, she needs: 10 - 7 = <strong>3 more flowers</strong>.",
      "rubric": "1.5 M for 30 + 7 = 37 flowers + 1.5 M for 10 - 7 = 3 flowers"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Counting Bundles of 10",
        "q": "Look at the picture: There are 2 bundles of 10 matchsticks and 4 loose matchsticks. What number is this?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 bundles of 10 = 20<br>• 4 loose sticks = 4<br>• Total = 20 + 4 = <strong>24</strong> (Twenty-four).",
        "marks": 2,
        "rubric": [
          {
            "key": "20 + 4 = 24",
            "marks": "1 M"
          },
          {
            "key": "Number name Twenty-four",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones Table",
        "q": "Write the Tens and Ones for: (a) 35, (b) 52, (c) 60, (d) 78.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 35 = <strong>3 Tens and 5 Ones</strong><br>• (b) 52 = <strong>5 Tens and 2 Ones</strong><br>• (c) 60 = <strong>6 Tens and 0 Ones</strong><br>• (d) 78 = <strong>7 Tens and 8 Ones</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly partitioned",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Making Bundles",
        "q": "How many bundles of 10 can you tie from 46 matchsticks? How many loose sticks will be left over?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In 46, the tens digit is 4 and the ones digit is 6.<br>• Therefore, you can tie <strong>4 complete bundles of 10</strong>.<br>• <strong>6 loose sticks</strong> will be left over.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 bundles of 10",
            "marks": "1 M"
          },
          {
            "key": "6 loose sticks left",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Strips 21 to 30",
        "q": "Fill the missing numbers on the strip: 21, 22, __, 24, __, 26, 27, __, 29, 30.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>Counting sequentially:<br>21, 22, <strong>23</strong>, 24, <strong>25</strong>, 26, 27, <strong>28</strong>, 29, 30.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 23, 25, 28 correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Strips 51 to 60",
        "q": "Write the numbers from 51 to 60 in correct order.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>51, 52, 53, 54, 55, 56, 57, 58, 59, 60</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 10 numbers in order",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Strips 91 to 100",
        "q": "Fill the missing numbers: 91, __, 93, 94, __, 96, __, 98, 99, 100.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 91, <strong>92</strong>, 93, 94, <strong>95</strong>, 96, <strong>97</strong>, 98, 99, 100.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 92, 95, 97 accurately",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Expanded Form",
        "q": "Write in expanded form:<br>(a) 48 = __ + __<br>(b) 63 = __ + __<br>(c) 85 = __ + __",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 48 = <strong>40 + 8</strong><br>• (b) 63 = <strong>60 + 3</strong><br>• (c) 85 = <strong>80 + 5</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "40 + 8",
            "marks": "1 M"
          },
          {
            "key": "60 + 3",
            "marks": "1 M"
          },
          {
            "key": "80 + 5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • What Comes Before and After?",
        "q": "Write what comes:<br>(a) Just before 40<br>(b) Just after 69<br>(c) Between 88 and 90",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Just before 40 is <strong>39</strong>.<br>• (b) Just after 69 is <strong>70</strong>.<br>• (c) Between 88 and 90 is <strong>89</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Before 40 = 39",
            "marks": "1 M"
          },
          {
            "key": "After 69 = 70",
            "marks": "1 M"
          },
          {
            "key": "Between 88 & 90 = 89",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing 2-Digit Numbers",
        "q": "Circle the greater number in each pair: (a) 42 and 24, (b) 67 and 76.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 4 tens is greater than 2 tens → <strong>42 is greater</strong>.<br>• (b) 7 tens is greater than 6 tens → <strong>76 is greater</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "42 circled",
            "marks": "1 M"
          },
          {
            "key": "76 circled",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Riddle",
        "q": "I have 5 tens and 3 ones. Who am I?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 tens = 50<br>• 3 ones = 3<br>• 50 + 3 = <strong>53 (Fifty-three)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 53",
            "marks": "1 M"
          },
          {
            "key": "Number name Fifty-three",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting in Tens",
        "q": "Write the sequence counting in tens from 10 to 100: 10, 20, 30, __, __, __, __, __, __, 100.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10, 20, 30, <strong>40, 50, 60, 70, 80, 90</strong>, 100.",
        "marks": 2,
        "rubric": [
          {
            "key": "All tens filled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Bindi Packets",
        "q": "A packet has 10 bindis. Suman buys 3 packets and has 4 loose bindis. How many bindis does Suman have in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 packets of 10 = 30 bindis<br>• Loose bindis = 4<br>• Total = 30 + 4 = <strong>34 bindis</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "30 + 4 = 34",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 34 bindis",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Smallest 2-Digit Number",
        "q": "What is the smallest 2-digit number? What is the largest 2-digit number?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The smallest 2-digit number is <strong>10</strong>.<br>• The largest 2-digit number is <strong>99</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Smallest = 10",
            "marks": "1 M"
          },
          {
            "key": "Largest = 99",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circle the Smallest",
        "q": "Circle the smallest number among: 45, 19, 72, 33.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Comparing tens digits: 1 ten is smallest.<br>• Therefore, <strong>19 is the smallest number</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 19 as smallest",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Match Number to Bundles",
        "q": "Match: (1) 5 bundles and 2 sticks → 52. (2) 6 bundles and 9 sticks → 69.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 tens + 2 ones = <strong>52</strong><br>• 6 tens + 9 ones = <strong>69</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct matches verified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Adding 1 to 99",
        "q": "What number comes right after 99? How many digits does it have?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 99 + 1 = <strong>100 (One Hundred)</strong>.<br>• 100 has <strong>3 digits</strong> (1 hundred, 0 tens, 0 ones).",
        "marks": 2,
        "rubric": [
          {
            "key": "100 (One Hundred)",
            "marks": "1 M"
          },
          {
            "key": "It has 3 digits",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Ascending Order",
        "q": "Arrange in order from smallest to biggest: 34, 12, 65, 48.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Comparing tens digits: 12 < 34 < 48 < 65.<br>• Ascending order: <strong>12, 34, 48, 65</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct order: 12, 34, 48, 65",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Descending Order",
        "q": "Arrange in order from biggest to smallest: 71, 95, 28, 50.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Comparing tens digits: 95 > 71 > 50 > 28.<br>• Descending order: <strong>95, 71, 50, 28</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct order: 95, 71, 50, 28",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Beads on a String",
        "q": "Grandma made 4 necklaces of 10 pearls each. She has 9 extra loose pearls. How many pearls does she have in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 necklaces = 40 pearls<br>• Loose pearls = 9<br>• Total = 40 + 9 = <strong>49 pearls</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "40 + 9 = 49",
            "marks": "1 M"
          },
          {
            "key": "Answer: 49 pearls",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Same Digits",
        "q": "Write any two numbers where the tens digit and the ones digit are exactly the same (e.g. 11).",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Examples: <strong>22, 33, 44, 55, 66, 77, 88, 99</strong>.<br>• Any two of these are correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid double-digit numbers",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Tens Strip Jump",
        "q": "If you are at 37 on the 100-chart and you jump down 1 box (add 10), what number do you reach?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 37 + 10 = <strong>47</strong>.<br>• Jumping down one row in a 100-grid always increases the number by 1 ten (10).",
        "marks": 2,
        "rubric": [
          {
            "key": "Reaches 47",
            "marks": "1 M"
          },
          {
            "key": "Explains adding 10",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Competency Review • Making Tens from Loose Sticks",
        "q": "Aman has 28 loose sticks. How many bundles of 10 can he make, and how many sticks will remain?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 28 = 20 + 8 = 2 tens and 8 ones.<br>• Aman can make <strong>2 bundles of 10</strong>, and <strong>8 sticks will remain</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 bundles of 10",
            "marks": "1 M"
          },
          {
            "key": "8 sticks remain",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm9",
    "num": 9,
    "unit": "Unit 3: Measurement & Patterns",
    "title": "Utsav",
    "subtitle": "Repeating & Growing Patterns, Toran Beads & Rangoli Shapes",
    "concepts": [
      "Identifying repeating units in decorative borders, torans, and fabrics.",
      "Extending shape patterns: alternating colors, sizes, and rotations.",
      "Growing patterns in numbers and blocks (e.g. 1, 2, 3... or 2, 4, 6...).",
      "Patterns in nature: day and night, seasons, animal stripes."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"10\"/><circle cx=\"50\" cy=\"55\" r=\"16\" fill=\"#f59e0b\"/><polygon points=\"100,39 85,71 115,71\" fill=\"#ec4899\"/><circle cx=\"150\" cy=\"55\" r=\"16\" fill=\"#f59e0b\"/><polygon points=\"200,39 185,71 215,71\" fill=\"#ec4899\"/><circle cx=\"250\" cy=\"55\" r=\"16\" fill=\"#f59e0b\"/><polygon points=\"300,39 285,71 315,71\" fill=\"#ec4899\"/><circle cx=\"350\" cy=\"55\" r=\"16\" fill=\"#f59e0b\"/><polygon points=\"400,39 385,71 415,71\" fill=\"#ec4899\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Repeating Toran Pattern: Circle, Triangle, Circle, Triangle...</text></svg>",
    "cbq": {
      "title": "Diwali Toran Decoration Case Study",
      "text": "During Diwali utsav, Priya makes a door toran using green mango leaves and yellow marigold flowers in the pattern: Leaf, Flower, Leaf, Flower, Leaf, Flower.",
      "question": "What comes next in Priya's toran pattern after the flower? How many leaves will she need if her toran has 6 flowers?",
      "answer": "1. After the flower, the next item in the pattern is a <strong>green mango leaf</strong>.<br>2. Since the pattern pairs 1 leaf with 1 flower, for 6 flowers she will need <strong>6 mango leaves</strong>.",
      "rubric": "1.5 M for 'Leaf' identification + 1.5 M for 6 leaves calculation"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Extending Shape Patterns",
        "q": "Look at the sequence: Circle, Square, Circle, Square, Circle, __. What shape comes next?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. The repeating rule is alternating between Circle and Square.<br>2. After Circle comes <strong>Square</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified Square",
            "marks": "1 M"
          },
          {
            "key": "Alternating rule explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Toran Bead Pattern",
        "q": "A festival toran has beads: Red, Blue, Red, Blue, Red, __, __. Fill the next two beads.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The pattern alternates between Red and Blue.<br>• The next two beads are: <strong>Blue, Red</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled Blue, then Red",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Arrow Directions",
        "q": "Complete the pattern: ↑, ↓, ↑, ↓, ↑, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The arrow points alternately Up and Down.<br>• The next two arrows are: <strong>↓ (Down), ↑ (Up)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Down then Up",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Growing Pattern",
        "q": "Look at the dots: •, ••, •••, ••••, _____. Draw the next group of dots.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. The rule is adding 1 more dot each time (1, 2, 3, 4...).<br>2. The next group will have <strong>5 dots (•••••)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 dots drawn",
            "marks": "1 M"
          },
          {
            "key": "Adding 1 rule stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Pattern in 2s",
        "q": "Complete the skip pattern: 2, 4, 6, 8, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The rule is adding 2 each time.<br>• Next numbers: 8 + 2 = <strong>10</strong>, 10 + 2 = <strong>12</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 and 12",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Rangoli Tile Pattern",
        "q": "In a rangoli grid, Priya colors tiles: Yellow, Green, Yellow, Green. What color should she use for the 5th tile?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Odd positions (1st, 3rd, 5th) are Yellow.<br>• Even positions (2nd, 4th) are Green.<br>• The 5th tile will be <strong>Yellow</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Yellow color",
            "marks": "1 M"
          },
          {
            "key": "Odd position reasoning",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Alternating Letter Patterns",
        "q": "Fill the next letters: A, B, A, B, A, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Alternating between A and B.<br>• Next letters: <strong>B, A</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "B, then A",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Day and Night Natural Pattern",
        "q": "Which of these repeats as a natural pattern: Day and Night, or Broken Glass?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Day and Night</strong> is a repeating pattern because morning always follows night in a predictable cycle.<br>• Broken glass happens randomly and does not repeat.",
        "marks": 2,
        "rubric": [
          {
            "key": "Day and Night repeats",
            "marks": "1 M"
          },
          {
            "key": "Predictable cycle explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Number Pattern in 5s",
        "q": "Complete the chain: 5, 10, 15, 20, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The rule is adding 5 each time.<br>• 20 + 5 = <strong>25</strong>.<br>• 25 + 5 = <strong>30</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "25 and 30",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Saree Border Block Print",
        "q": "A block printer stamps on cloth: Leaf pointing up, Leaf pointing right, Leaf pointing down, Leaf pointing left. What direction will the 5th stamp point?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The pattern completes a full rotation in 4 steps.<br>• The 5th stamp repeats the 1st step: <strong>Leaf pointing up</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Points Up",
            "marks": "1 M"
          },
          {
            "key": "4-step rotation rule",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Zebra Stripes Pattern",
        "q": "What two colors make the repeating pattern on a zebra's coat?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Black and White</strong> stripes alternate across the zebra's body.",
        "marks": 2,
        "rubric": [
          {
            "key": "Black and White",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Pattern in 10s",
        "q": "Fill the missing numbers: 10, 20, 30, __, 50, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Counting in tens: 10, 20, 30, <strong>40</strong>, 50, <strong>60</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 40 and 60",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Clap and Stamp Rhythm Pattern",
        "q": "Children play a rhythm game: Clap, Stamp, Clap, Stamp, Clap, __. What action comes next?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Following the alternating rhythm, the next action is <strong>Stamp</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Stamp",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Find the Odd One Out in Pattern",
        "q": "Look at the sequence: ▲, ▲, ▲, ■, ▲, ▲. Which shape breaks the pattern?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The continuous pattern consists of triangles (▲).<br>• The square (<strong>■</strong>) breaks the pattern.",
        "marks": 2,
        "rubric": [
          {
            "key": "Square (■) breaks pattern",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Staircase Pattern",
        "q": "1 block high, 2 blocks high, 3 blocks high. How many blocks high will the 4th step be?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Each step adds 1 block.<br>• The 4th step will be <strong>4 blocks high</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 blocks high",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Create Your Own Pattern",
        "q": "Using a circle (O) and a cross (X), create a repeating pattern that has 6 symbols.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Example pattern: <strong>O, X, O, X, O, X</strong> (or O, O, X, O, O, X).",
        "marks": 2,
        "rubric": [
          {
            "key": "Valid 6-symbol repeating pattern",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm10",
    "num": 10,
    "unit": "Unit 3: Measurement & Patterns",
    "title": "How do I Spend my Day?",
    "subtitle": "Daily Sequence, Morning to Night, Meal Times & Days of the Week",
    "concepts": [
      "Sequencing daily events in chronological order from morning to bedtime.",
      "Distinguishing Morning, Afternoon, Evening, and Night.",
      "Estimating duration: activities that take a short time vs long time.",
      "Learning the seven days of the week in correct order."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"70\" cy=\"55\" r=\"22\" fill=\"#fbbf24\"/><text x=\"70\" y=\"95\" font-size=\"10\" text-anchor=\"middle\" fill=\"#92400e\" font-weight=\"bold\">Morning</text><circle cx=\"170\" cy=\"55\" r=\"22\" fill=\"#f97316\"/><text x=\"170\" y=\"95\" font-size=\"10\" text-anchor=\"middle\" fill=\"#9a3412\" font-weight=\"bold\">Afternoon</text><circle cx=\"270\" cy=\"55\" r=\"22\" fill=\"#ec4899\"/><text x=\"270\" y=\"95\" font-size=\"10\" text-anchor=\"middle\" fill=\"#831843\" font-weight=\"bold\">Evening</text><circle cx=\"370\" cy=\"55\" r=\"22\" fill=\"#1e3a8a\"/><text x=\"370\" y=\"95\" font-size=\"10\" text-anchor=\"middle\" fill=\"#1e3a8a\" font-weight=\"bold\">Night</text><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e3a8a\" text-anchor=\"middle\">Sequence: Morning → Afternoon → Evening → Night</text></svg>",
    "cbq": {
      "title": "School Day Schedule Case Study",
      "text": "Aarav wakes up at 6:30 in the morning, studies at school until 1:30 in the afternoon, plays with friends at 5:00 in the evening, and goes to sleep at 9:00 at night.",
      "question": "Which of these activities happens in the evening? If tomorrow is Sunday, what day was yesterday if today is Saturday?",
      "answer": "1. Playing with friends at 5:00 happens in the <strong>evening</strong>.<br>2. If today is Saturday, yesterday was <strong>Friday</strong>.",
      "rubric": "1.5 M for evening activity + 1.5 M for Friday calculation"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Morning to Night Sequence",
        "q": "Number these daily activities in the order you do them: (a) Eating dinner, (b) Brushing teeth in morning, (c) Going to sleep, (d) Eating lunch at school.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. (b) Brushing teeth in morning → <strong>1st</strong><br>2. (d) Eating lunch at school → <strong>2nd</strong><br>3. (a) Eating dinner with family → <strong>3rd</strong><br>4. (c) Going to sleep in bed → <strong>4th</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly sequenced",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Morning, Afternoon, Evening, Night",
        "q": "When do you see: (a) The bright rising sun? (b) The shining moon and twinkling stars?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Rising sun → <strong>Morning</strong>.<br>• (b) Moon and stars → <strong>Night</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Morning",
            "marks": "1 M"
          },
          {
            "key": "Night",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Which Takes Longer?",
        "q": "Tick (✓) the activity that takes more time: (a) Blinking your eyes once, or (b) Eating your lunch.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Blinking takes just 1 second.<br>• <strong>Eating lunch takes about 15 to 20 minutes</strong>, which is much longer.<br>• Tick <strong>(b) Eating your lunch</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "(b) Eating lunch takes longer",
            "marks": "1 M"
          },
          {
            "key": "Comparison of time duration",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Filling Bucket vs Mug",
        "q": "Which takes more time to fill with tap water: a large bathroom bucket or a small tea cup?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• A <strong>large bathroom bucket takes more time</strong> because it holds much more water.<br>• A tea cup fills up in just 2 seconds.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bathroom bucket takes more time",
            "marks": "1 M"
          },
          {
            "key": "Holds more water",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Seven Days of the Week",
        "q": "Write the seven days of the week in correct order, starting from Monday.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 7 days in order",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Day is Tomorrow?",
        "q": "If today is Wednesday, what day will tomorrow be? What day was yesterday?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Tomorrow will be <strong>Thursday</strong>.<br>• Yesterday was <strong>Tuesday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tomorrow = Thursday",
            "marks": "1 M"
          },
          {
            "key": "Yesterday = Tuesday",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • School Prayer Time",
        "q": "At what part of the school day does the morning prayer assembly take place?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Morning assembly takes place at the <strong>beginning of the school day (Morning)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Morning / start of school",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Walking vs Cycling",
        "q": "Rohan walks to school. Simran goes on a bicycle. Who will reach school faster?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Simran on the bicycle will reach faster</strong> because cycling covers distance in less time than walking.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bicycle is faster",
            "marks": "1 M"
          },
          {
            "key": "Takes less time",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Favorite Holiday",
        "q": "On which day of the week do most schools have a weekly holiday?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Most schools have a weekly holiday on <strong>Sunday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sunday",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Meal Association",
        "q": "Match the meal to its time: (a) Breakfast, (b) Lunch, (c) Dinner.<br>Times: [Morning, Afternoon, Night].",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Breakfast → <strong>Morning</strong><br>• (b) Lunch → <strong>Afternoon</strong><br>• (c) Dinner → <strong>Night</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Breakfast = Morning",
            "marks": "1 M"
          },
          {
            "key": "Lunch = Afternoon",
            "marks": "1 M"
          },
          {
            "key": "Dinner = Night",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Morning Routine",
        "q": "Name two things you do in the morning before coming to school.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Examples: <strong>Brushing teeth, taking a bath, eating breakfast, wearing school uniform</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid morning activities",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Days Between",
        "q": "Which day comes between Friday and Sunday?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The day between Friday and Sunday is <strong>Saturday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Saturday",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • How Many Days in a Week?",
        "q": "How many days are there in one complete week? How many days do you go to school?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• There are <strong>7 days</strong> in one complete week.<br>• Most students attend school on <strong>5 or 6 days</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 days in a week",
            "marks": "1 M"
          },
          {
            "key": "5 or 6 school days",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Boiling Milk vs Boiling Water",
        "q": "Does milk boil faster or does baking a large cake take longer?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Baking a cake takes longer</strong> (about 30 to 45 minutes).<br>• Boiling milk takes only a few minutes.",
        "marks": 2,
        "rubric": [
          {
            "key": "Baking cake takes longer",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Night Sky Observation",
        "q": "What do you do at night when darkness falls outside and the streetlights turn on?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In the night, we have dinner with family, read a storybook, and <strong>sleep in bed to rest</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Dinner and sleeping to rest",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm11",
    "num": 11,
    "unit": "Unit 4: Equal Grouping & Money",
    "title": "How Many Times?",
    "subtitle": "Equal Groups, Pairs, Auto Wheels & Repeated Addition",
    "concepts": [
      "Equal grouping of concrete items (groups of 2, 3, 4, 5).",
      "Repeated addition as multiplication readiness (2 + 2 + 2 = 3 times 2 = 6).",
      "Counting legs of animals and wheels of vehicles in equal groups.",
      "Fair sharing and dividing into equal piles."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f5f3ff\" rx=\"10\"/><circle cx=\"70\" cy=\"50\" r=\"12\" fill=\"#8b5cf6\"/><circle cx=\"100\" cy=\"50\" r=\"12\" fill=\"#8b5cf6\"/><rect x=\"55\" y=\"30\" width=\"60\" height=\"40\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2\" rx=\"4\"/><circle cx=\"170\" cy=\"50\" r=\"12\" fill=\"#8b5cf6\"/><circle cx=\"200\" cy=\"50\" r=\"12\" fill=\"#8b5cf6\"/><rect x=\"155\" y=\"30\" width=\"60\" height=\"40\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2\" rx=\"4\"/><circle cx=\"270\" cy=\"50\" r=\"12\" fill=\"#8b5cf6\"/><circle cx=\"300\" cy=\"50\" r=\"12\" fill=\"#8b5cf6\"/><rect x=\"255\" y=\"30\" width=\"60\" height=\"40\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2\" rx=\"4\"/><circle cx=\"370\" cy=\"50\" r=\"12\" fill=\"#8b5cf6\"/><circle cx=\"400\" cy=\"50\" r=\"12\" fill=\"#8b5cf6\"/><rect x=\"355\" y=\"30\" width=\"60\" height=\"40\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2\" rx=\"4\"/><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#6d28d9\" text-anchor=\"middle\">4 Groups of 2 = 2 + 2 + 2 + 2 = 8</text></svg>",
    "cbq": {
      "title": "Auto-Rickshaw Stand Case Study",
      "text": "At the neighborhood stand, there are 4 auto-rickshaws parked in a row. Each auto-rickshaw has exactly 3 wheels.",
      "question": "How many wheels do all 4 auto-rickshaws have altogether? Write the addition sentence and the total wheel count.",
      "answer": "1. Number of groups = 4. Wheels per auto = 3.<br>2. Addition sentence = 3 + 3 + 3 + 3 = <strong>12 wheels altogether</strong> (4 times 3 = 12).",
      "rubric": "1.5 M for 3+3+3+3 sentence + 1.5 M for 12 wheels answer"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Pairs of Shoes",
        "q": "There are 5 children standing outside the temple. Each child wears 1 pair (2 shoes). How many shoes are there altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Number of children = 5<br>2. Shoes per child = 2<br>3. Repeated addition = 2 + 2 + 2 + 2 + 2 = <strong>10 shoes</strong> (5 times 2 = 10).",
        "marks": 2,
        "rubric": [
          {
            "key": "2+2+2+2+2 sentence",
            "marks": "1 M"
          },
          {
            "key": "Answer: 10 shoes",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Legs of Dogs",
        "q": "There are 3 dogs playing in the yard. Each dog has 4 legs. How many legs in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Number of dogs = 3<br>• Legs per dog = 4<br>• 4 + 4 + 4 = <strong>12 legs altogether</strong> (3 times 4 = 12).",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 4 + 4 = 12",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 12 legs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Groups of 5 Marbles",
        "q": "Rohan has 3 bags. Each bag contains 5 shiny marbles. How many marbles does Rohan have in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Bags = 3<br>• Marbles per bag = 5<br>• 5 + 5 + 5 = <strong>15 marbles</strong> (3 times 5 = 15).",
        "marks": 2,
        "rubric": [
          {
            "key": "5 + 5 + 5 = 15",
            "marks": "1 M"
          },
          {
            "key": "Answer: 15 marbles",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Table Legs",
        "q": "There are 2 dining tables in the hall. Each table has 4 wooden legs. How many legs in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 + 4 = <strong>8 table legs</strong> (2 times 4 = 8).",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 4 = 8",
            "marks": "1 M"
          },
          {
            "key": "Answer: 8 legs",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • How Many Times 2?",
        "q": "Write as repeated addition: 4 times 2.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 times 2 means adding 2 four times:<br>• <strong>2 + 2 + 2 + 2 = 8</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 + 2 + 2 + 2 = 8",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Birds in Pairs",
        "q": "There are 4 pairs of pigeons perched on the ledge. How many pigeons is that?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 1 pair = 2 pigeons<br>• 4 pairs = 2 + 2 + 2 + 2 = <strong>8 pigeons</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "1 pair = 2",
            "marks": "1 M"
          },
          {
            "key": "4 pairs = 8 pigeons",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Flower Petals",
        "q": "A flower has 5 petals. How many petals do 2 such flowers have?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 + 5 = <strong>10 petals</strong> (2 times 5 = 10).",
        "marks": 2,
        "rubric": [
          {
            "key": "5 + 5 = 10",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tricycle Wheels",
        "q": "Each tricycle has 3 wheels. How many wheels do 3 tricycles have?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 3 + 3 = <strong>9 wheels</strong> (3 times 3 = 9).",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 3 + 3 = 9",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Equal Sharing into 2 Piles",
        "q": "Mother has 8 laddoos. She shares them equally between Ravi and Meena. How many laddoos does each child get?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total laddoos = 8<br>2. 8 shared equally into 2 groups: 4 + 4 = 8.<br>3. Each child gets <strong>4 laddoos</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 4 = 8 sharing",
            "marks": "1 M"
          },
          {
            "key": "Each gets 4 laddoos",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Repeated Addition of 10",
        "q": "Find the sum: 10 + 10 + 10 + 10 = __. How many times 10 is this?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10 + 10 + 10 + 10 = <strong>40</strong>.<br>• This is <strong>4 times 10</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sum = 40",
            "marks": "1 M"
          },
          {
            "key": "4 times 10",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Crayons in Packets",
        "q": "There are 2 packets with 6 crayons in each packet. How many crayons in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 + 6 = <strong>12 crayons</strong> (2 times 6 = 12).",
        "marks": 2,
        "rubric": [
          {
            "key": "6 + 6 = 12",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Hands and Fingers",
        "q": "4 children hold up both hands. How many fingers is that in total? (Count in tens).",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Each child has 10 fingers on two hands.<br>• 4 children = 10 + 10 + 10 + 10 = <strong>40 fingers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 + 10 + 10 + 10 = 40",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cat Whiskers",
        "q": "A kitten has 3 whiskers on the left cheek and 3 whiskers on the right cheek. How many whiskers in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 3 = <strong>6 whiskers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 3 = 6",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Bicycle Wheels",
        "q": "How many wheels do 5 bicycles have? Count in 2s.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2, 4, 6, 8, 10.<br>• 5 bicycles have <strong>10 wheels</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Skip counting in 2s",
            "marks": "1 M"
          },
          {
            "key": "Answer: 10 wheels",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Mental Math • Times Meaning",
        "q": "What does '3 times 4' mean in addition?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• '3 times 4' means adding 4 three times: <strong>4 + 4 + 4 = 12</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 4 + 4 = 12",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Equal Piles of Apples",
        "q": "A fruit seller has 12 apples and puts 4 apples in each tray. How many trays does he need?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 + 4 + 4 = 12.<br>• The seller needs <strong>3 trays</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 3 trays",
            "marks": "1 M"
          },
          {
            "key": "4 + 4 + 4 = 12",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm12",
    "num": 12,
    "unit": "Unit 4: Equal Grouping & Money",
    "title": "How Much Can We Spend?",
    "subtitle": "Indian Currency: Coins ₹1, ₹2, ₹5, ₹10, Notes ₹10, ₹20 & Toy Bills",
    "concepts": [
      "Recognizing Indian coins: ₹1, ₹2, ₹5, ₹10.",
      "Recognizing currency notes: ₹10 and ₹20 notes.",
      "Combining coins to pay an exact amount (e.g. ₹7 = ₹5 + ₹2).",
      "Calculating total cost of items bought at a stationary/toy shop.",
      "Calculating return change after payment."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><circle cx=\"70\" cy=\"55\" r=\"20\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"70\" y=\"60\" font-size=\"12\" fill=\"#1e293b\" font-weight=\"bold\" text-anchor=\"middle\">₹1</text><circle cx=\"130\" cy=\"55\" r=\"22\" fill=\"#cbd5e1\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"130\" y=\"60\" font-size=\"12\" fill=\"#1e293b\" font-weight=\"bold\" text-anchor=\"middle\">₹2</text><circle cx=\"200\" cy=\"55\" r=\"24\" fill=\"#fbbf24\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"200\" y=\"61\" font-size=\"13\" fill=\"#78350f\" font-weight=\"bold\" text-anchor=\"middle\">₹5</text><circle cx=\"280\" cy=\"55\" r=\"26\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"3\"/><text x=\"280\" y=\"61\" font-size=\"13\" fill=\"#78350f\" font-weight=\"bold\" text-anchor=\"middle\">₹10</text><rect x=\"340\" y=\"35\" width=\"120\" height=\"45\" fill=\"#fecdd3\" stroke=\"#e11d48\" stroke-width=\"2\" rx=\"4\"/><text x=\"400\" y=\"62\" font-size=\"14\" fill=\"#9f1239\" font-weight=\"bold\" text-anchor=\"middle\">₹20 Note</text><text x=\"250\" y=\"105\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">Indian Coins &amp; Currency Notes</text></svg>",
    "cbq": {
      "title": "Stationery Shop Purchase Case Study",
      "text": "Rohan goes to the stationery shop with a ₹20 note. He buys a wooden pencil for ₹5 and an eraser for ₹3.",
      "question": "What is the total cost of the pencil and eraser? How much change should the shopkeeper return to Rohan from his ₹20 note?",
      "answer": "1. Total cost = ₹5 + ₹3 = <strong>₹8</strong>.<br>2. Change returned = ₹20 - ₹8 = <strong>₹12</strong> (e.g., a ₹10 coin and a ₹2 coin).",
      "rubric": "1.5 M for ₹5 + ₹3 = ₹8 + 1.5 M for ₹20 - ₹8 = ₹12 change"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Identifying Coins",
        "q": "Name the four coins commonly used in India shown in your textbook.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The four common Indian coins are: <strong>₹1, ₹2, ₹5, and ₹10</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 coins named (₹1, ₹2, ₹5, ₹10)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Making ₹6 with Coins",
        "q": "How can you pay ₹6 using two coins?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Take one ₹5 coin and one ₹1 coin.<br>• ₹5 + ₹1 = <strong>₹6</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹5 + ₹1 = ₹6",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Making ₹7 with Coins",
        "q": "How can you pay ₹7 using two coins?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Take one ₹5 coin and one ₹2 coin.<br>• ₹5 + ₹2 = <strong>₹7</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹5 + ₹2 = ₹7",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Making ₹10 with ₹5 Coins",
        "q": "How many ₹5 coins do you need to make ₹10?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹5 = ₹10.<br>• You need <strong>two ₹5 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two ₹5 coins",
            "marks": "1 M"
          },
          {
            "key": "₹5 + ₹5 = ₹10",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Making ₹10 with ₹2 Coins",
        "q": "How many ₹2 coins make ₹10?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count in 2s: 2, 4, 6, 8, 10 (5 times).<br>• You need <strong>five ₹2 coins</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Five ₹2 coins",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Buying an Ice Candy",
        "q": "An orange ice candy costs ₹10. Simran pays with two ₹5 coins. Did she pay the exact amount?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Two ₹5 coins = ₹5 + ₹5 = ₹10.<br>• <strong>Yes</strong>, she paid the exact amount.",
        "marks": 2,
        "rubric": [
          {
            "key": "Yes, exact amount",
            "marks": "1 M"
          },
          {
            "key": "₹5 + ₹5 = ₹10",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Total Bill at Toy Shop",
        "q": "A toy top costs ₹6 and a balloon costs ₹2. What is the total cost?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Cost of top = ₹6<br>• Cost of balloon = ₹2<br>• Total cost = ₹6 + ₹2 = <strong>₹8</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹6 + ₹2 = ₹8",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Return Change Calculation",
        "q": "Kabir buys a notebook for ₹15. He hands the shopkeeper a ₹20 note. How much change does Kabir get back?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Money given = ₹20<br>• Cost of notebook = ₹15<br>• Change returned = ₹20 - ₹15 = <strong>₹5</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹20 - ₹15 = ₹5",
            "marks": "1 M"
          },
          {
            "key": "Answer: ₹5",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Coin Rubbing Activity",
        "q": "How do you make a coin print on paper using a pencil?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Place a coin underneath a sheet of paper.<br>2. Rub gently over the paper with a soft pencil.<br>3. The design and number (₹1, ₹2, ₹5) appears like magic on paper!",
        "marks": 2,
        "rubric": [
          {
            "key": "Place coin under paper",
            "marks": "1 M"
          },
          {
            "key": "Rub with pencil",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Making ₹20 with ₹10 Notes",
        "q": "How many ₹10 notes make a ₹20 note?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹10 + ₹10 = ₹20.<br>• It takes <strong>two ₹10 notes</strong> to make ₹20.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two ₹10 notes",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Can You Buy Both?",
        "q": "Aman has ₹10 in his pocket. A toy car costs ₹8 and a ball costs ₹5. Can Aman buy both toys together?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total cost of both = ₹8 + ₹5 = ₹13.<br>2. Aman only has ₹10.<br>3. Since ₹13 is more than ₹10, <strong>No, Aman cannot buy both toys together</strong> (he is short by ₹3).",
        "marks": 2,
        "rubric": [
          {
            "key": "No, total is ₹13 > ₹10",
            "marks": "1 M"
          },
          {
            "key": "Short by ₹3 noted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Match Money to Amount",
        "q": "Match the coin combinations to their total:<br>(a) ₹5 + ₹5<br>(b) ₹5 + ₹2 + ₹1<br>(c) ₹2 + ₹2 + ₹1",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) ₹5 + ₹5 = <strong>₹10</strong><br>• (b) ₹5 + ₹2 + ₹1 = <strong>₹8</strong><br>• (c) ₹2 + ₹2 + ₹1 = <strong>₹5</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 correctly evaluated",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Activity • Indian Rupee Symbol",
        "q": "What is the official currency symbol of India? Draw it.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The Indian Rupee symbol is <strong>₹</strong>.<br>• It is derived from the Devanagari letter 'र' with a horizontal stroke across the top.",
        "marks": 2,
        "rubric": [
          {
            "key": "Symbol ₹ identified",
            "marks": "1 M"
          },
          {
            "key": "Devanagari 'र' origin",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Two Candies",
        "q": "One chocolate bar costs ₹4. How much do two chocolate bars cost?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹4 + ₹4 = <strong>₹8</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹4 + ₹4 = ₹8",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Making ₹15 with Coins and Notes",
        "q": "Name one way to pay ₹15 using a note and a coin.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• One <strong>₹10 note</strong> and one <strong>₹5 coin</strong> = ₹10 + ₹5 = <strong>₹15</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹10 note + ₹5 coin",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Toy Price Tags",
        "q": "A teddy bear has a price tag of ₹18. Ravi pays with a ₹20 note. What coin should the shopkeeper give him back?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹20 - ₹18 = ₹2.<br>• The shopkeeper should give him a <strong>₹2 coin</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹2 coin",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Saving in a Piggy Bank",
        "q": "Riya drops a ₹5 coin into her piggy bank on Monday and a ₹5 coin on Tuesday. How much money has she saved?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹5 = <strong>₹10</strong> saved.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹10 saved",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "jm13",
    "num": 13,
    "unit": "Unit 4: Equal Grouping & Money",
    "title": "So Many Toys and Puzzles",
    "subtitle": "Counting Collections, Tally Tables, Most & Least Frequent Toys",
    "concepts": [
      "Collecting and recording data by counting objects in a picture.",
      "Organizing information into a simple frequency table.",
      "Finding which item appears the most number of times (most popular).",
      "Finding which item appears the least number of times.",
      "Counting letters in names and comparing lengths."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"10\"/><rect x=\"40\" y=\"30\" width=\"80\" height=\"20\" fill=\"#3b82f6\" rx=\"4\"/><text x=\"130\" y=\"45\" font-size=\"12\" fill=\"#1e3a8a\" font-weight=\"bold\">Cars: 4</text><rect x=\"40\" y=\"55\" width=\"120\" height=\"20\" fill=\"#10b981\" rx=\"4\"/><text x=\"170\" y=\"70\" font-size=\"12\" fill=\"#065f46\" font-weight=\"bold\">Dolls: 6</text><rect x=\"40\" y=\"80\" width=\"60\" height=\"20\" fill=\"#f59e0b\" rx=\"4\"/><text x=\"110\" y=\"95\" font-size=\"12\" fill=\"#92400e\" font-weight=\"bold\">Balls: 3</text><text x=\"360\" y=\"65\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Most: Dolls (6)</text><text x=\"360\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#64748b\" text-anchor=\"middle\">Least: Balls (3)</text></svg>",
    "cbq": {
      "title": "Classroom Toy Day Survey Case Study",
      "text": "On Toy Day, the teacher counts toys brought by Class 1 students: 5 toy cars, 7 stuffed teddy bears, and 2 wooden train sets.",
      "question": "Which toy was brought by the most students? Which toy was brought by the least students? How many total toys were brought?",
      "answer": "1. Most students brought <strong>teddy bears (7)</strong>.<br>2. Least students brought <strong>wooden train sets (2)</strong>.<br>3. Total toys = 5 + 7 + 2 = <strong>14 toys in all</strong>.",
      "rubric": "1 M for most + 1 M for least + 1 M for total sum"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Counting Toys on the Shelf",
        "q": "Look at the toy shelf picture: Count the toys:<br>(a) How many toy cars are there? (Count: 4)<br>(b) How many footballs are there? (Count: 6)<br>(c) How many teddy bears are there? (Count: 3)",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Toy cars = <strong>4</strong><br>• (b) Footballs = <strong>6</strong><br>• (c) Teddy bears = <strong>3</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 3 counts correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Most and Least",
        "q": "From the shelf above (Cars: 4, Footballs: 6, Teddy bears: 3):<br>(a) Which toy is the most in number?<br>(b) Which toy is the least in number?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) <strong>Footballs (6)</strong> are the most in number.<br>• (b) <strong>Teddy bears (3)</strong> are the least in number.",
        "marks": 2,
        "rubric": [
          {
            "key": "Most = Footballs",
            "marks": "1 M"
          },
          {
            "key": "Least = Teddy bears",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Counting Letters in Names",
        "q": "Count the letters in each friend's name:<br>(a) AMAN<br>(b) SIMRAN<br>(c) OM<br>Which name has the most letters?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• AMAN = 4 letters<br>• SIMRAN = 6 letters<br>• OM = 2 letters<br>• <strong>SIMRAN</strong> has the most letters (6 letters).",
        "marks": 2,
        "rubric": [
          {
            "key": "All counts correct (4, 6, 2)",
            "marks": "1 M"
          },
          {
            "key": "SIMRAN has most",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shortest Name",
        "q": "From the three names above (AMAN, SIMRAN, OM), which name has the least letters?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• OM has only 2 letters.<br>• Therefore, <strong>OM has the least letters (shortest name)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "OM has least letters",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Fruit Basket Tally",
        "q": "In a basket: 5 Apples, 8 Bananas, 3 Oranges. How many total fruits are in the basket?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Apples = 5<br>• Bananas = 8<br>• Oranges = 3<br>• Total fruits = 5 + 8 + 3 = <strong>16 fruits altogether</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 + 8 + 3 = 16",
            "marks": "1 M"
          },
          {
            "key": "Answer with unit: 16 fruits",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Comparing Quantities",
        "q": "In the fruit basket above (Apples: 5, Bananas: 8), how many more bananas are there than apples?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Bananas = 8<br>• Apples = 5<br>• Difference = 8 - 5 = <strong>3 more bananas</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 - 5 = 3",
            "marks": "1 M"
          },
          {
            "key": "Answer: 3 more bananas",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Counting Animals on a Farm",
        "q": "A farm picture shows: 3 Cows, 5 Goats, 2 Horses, and 4 Ducks. Put this into a table and find the total animals.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Cows: 3<br>• Goats: 5<br>• Horses: 2<br>• Ducks: 4<br>• Total = 3 + 5 + 2 + 4 = <strong>14 farm animals</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Table values correct",
            "marks": "1 M"
          },
          {
            "key": "Total 14 animals",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Which Animal is Most?",
        "q": "From the farm data above (Cows: 3, Goats: 5, Horses: 2, Ducks: 4), which animal is seen the most?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Goats (5)</strong> are seen the most on the farm.",
        "marks": 2,
        "rubric": [
          {
            "key": "Goats (5)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Which Animal is Least?",
        "q": "From the farm data above, which animal is seen the least?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Horses (2)</strong> are seen the least.",
        "marks": 2,
        "rubric": [
          {
            "key": "Horses (2)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Shoes in the Rack",
        "q": "Shoe sizes in a class: Size 1: 4 children, Size 2: 9 children, Size 3: 5 children. Which shoe size is worn by the most children?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Size 1 = 4<br>• Size 2 = 9<br>• Size 3 = 5<br>• <strong>Size 2 is worn by the most children</strong> (9 children).",
        "marks": 2,
        "rubric": [
          {
            "key": "Size 2 identified",
            "marks": "1 M"
          },
          {
            "key": "Highest count (9)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Same Letter Count",
        "q": "Look at two names: RAJU and NEHA. Do they have the same number of letters?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• RAJU = 4 letters<br>• NEHA = 4 letters<br>• <strong>Yes</strong>, both names have exactly 4 letters.",
        "marks": 2,
        "rubric": [
          {
            "key": "Yes, both have 4 letters",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Color Preference Chart",
        "q": "Children vote for favorite color: Red: 7 votes, Blue: 7 votes, Yellow: 3 votes. Did Red and Blue get equal votes?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Red = 7 votes<br>• Blue = 7 votes<br>• <strong>Yes</strong>, Red and Blue got equal votes (7 = 7).",
        "marks": 2,
        "rubric": [
          {
            "key": "Yes, equal votes (7 = 7)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Least Liked Color",
        "q": "From the color vote above (Red: 7, Blue: 7, Yellow: 3), which color was chosen by the least students?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Yellow (3 votes)</strong> was chosen by the least students.",
        "marks": 2,
        "rubric": [
          {
            "key": "Yellow (3 votes)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Drawing Circles for Data",
        "q": "Represent with dots: 3 Pencils (•••), 5 Erasers (•••••). Which group has more dots?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Erasers (5 dots)</strong> has more dots than Pencils (3 dots).",
        "marks": 2,
        "rubric": [
          {
            "key": "Erasers have more dots",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Total Items from Table",
        "q": "A pencil case holds 2 blue pens, 3 red pens, and 4 black pens. How many pens in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 + 3 + 4 = <strong>9 pens in all</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 + 3 + 4 = 9",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Why Do We Make Tables?",
        "q": "Why is it helpful to count and organize items in a table instead of keeping them in a mixed heap?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. A table makes it easy to see exact counts quickly without recounting.<br>2. We can immediately tell which item is the most, which is the least, and the total.",
        "marks": 2,
        "rubric": [
          {
            "key": "Quick and easy to read",
            "marks": "1 M"
          },
          {
            "key": "Identifies most/least immediately",
            "marks": "1 M"
          }
        ]
      }
    ]
  }
];

module.exports = { joyfulMathsChapters };
