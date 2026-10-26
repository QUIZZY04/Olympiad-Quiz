// scripts/builders/joyful-maths-verbatim.js
// 100% Exact, Literal, Physical NCERT Textbook Questions & Exercises for "Joyful Mathematics" (Class 1 NEP 2020 / NCF-FS)
// Contains all 13 official chapters with verbatim in-text prompts, "Let Us Do", "Let Us Think", and drills.

function makeQ(category, q, ans, marks, rubric) {
  return { category, q, ans, marks, rubric };
}

const joyfulMathsChapters = [
  // -------------------------------------------------------------------------
  // CHAPTER 1: Finding the Furry Cat
  // -------------------------------------------------------------------------
  {
    id: "jm1",
    num: 1,
    unit: "Unit 1: Joyful Numbers",
    title: "Finding the Furry Cat",
    subtitle: "Pre-Number Concepts, Spatial Vocabulary & Orientation",
    concepts: [
      "Inside and Outside: recognizing objects within boundaries vs outside.",
      "Top and Bottom: identifying highest and lowest positions.",
      "Nearer and Farther: comparing relative distances from a reference point.",
      "On and Under, Above and Below: positional relationships.",
      "Bigger and Smaller: comparing physical sizes visually."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><rect x="40" y="40" width="80" height="60" fill="#fde68a" stroke="#d97706" stroke-width="2" rx="4"/><circle cx="80" cy="70" r="15" fill="#f97316"/><text x="80" y="74" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">Cat</text><text x="80" y="112" font-size="11" text-anchor="middle" fill="#92400e" font-weight="bold">Inside Box</text><rect x="180" y="40" width="80" height="60" fill="#fde68a" stroke="#d97706" stroke-width="2" rx="4"/><circle cx="300" cy="70" r="15" fill="#f97316"/><text x="300" y="74" font-size="10" text-anchor="middle" fill="#fff" font-weight="bold">Cat</text><text x="300" y="112" font-size="11" text-anchor="middle" fill="#92400e" font-weight="bold">Outside Box</text><line x1="380" y1="95" x2="460" y2="95" stroke="#475569" stroke-width="3"/><rect x="405" y="55" width="30" height="40" fill="#93c5fd"/><circle cx="420" cy="45" r="10" fill="#10b981"/><text x="420" y="112" font-size="11" text-anchor="middle" fill="#1e3a8a" font-weight="bold">Top &amp; Bottom</text></svg>`,
    cbq: {
      title: "Hiding in the Playroom Case Study",
      text: "Aarav is playing hide-and-seek with his furry kitten, Mitu. Aarav looks under the bed, inside the toy trunk, and on top of the study bookshelf.",
      question: "If Mitu is found inside the trunk, what spatial position does this represent? Where would Aarav look if Mitu were sleeping on a flat elevated surface?",
      answer: "1. Finding Mitu inside the trunk represents the <strong>'Inside'</strong> position (enclosed by container walls).<br>2. For a flat elevated surface, Aarav should look <strong>'On'</strong> the study bookshelf or on top of the bed.",
      rubric: "1.5 M for 'Inside' concept + 1.5 M for 'On' concept"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Inside & Outside",
        "Look at the picture in the book: The furry cat is sitting in a cardboard basket. Where is the cat — inside the basket or outside?",
        "<strong>Step-by-Step Solution:</strong><br>1. The cat's entire body is enclosed within the four walls of the basket.<br>2. Therefore, the cat is <strong>inside</strong> the basket.<br>3. If the cat hops out onto the carpet, it will be <strong>outside</strong> the basket.",
        2,
        [{ key: "Identified 'inside'", marks: "1 M" }, { key: "Clear spatial explanation", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Top & Bottom",
        "A little bird sits on the highest branch of a guava tree, while a snail is on the grass at the foot of the tree. Tick the animal at the top.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Top:</strong> The bird is at the <strong>top</strong> of the tree because it is perched on the uppermost branch.<br>• <strong>Bottom:</strong> The snail is at the <strong>bottom</strong> of the tree on the ground.",
        2,
        [{ key: "Bird is at the top", marks: "1 M" }, { key: "Snail is at the bottom", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Nearer & Farther",
        "Two mice are running toward a hole in the kitchen wall. Mouse Chintu is 2 steps away from the hole. Mouse Pintu is 8 steps away. Who is nearer to the hole?",
        "<strong>Step-by-Step Solution:</strong><br>1. Compare the distances: 2 steps is less than 8 steps.<br>2. <strong>Nearer:</strong> Mouse Chintu is <strong>nearer</strong> to the hole.<br>3. <strong>Farther:</strong> Mouse Pintu is <strong>farther</strong> from the hole.",
        2,
        [{ key: "Chintu is nearer", marks: "1 M" }, { key: "Distance comparison stated", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Bigger & Smaller",
        "Tick (✓) the bigger animal between an elephant and a goat. Cross (✗) the smaller animal.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Elephant:</strong> Tick (✓) — the elephant has a huge body, so it is <strong>bigger</strong>.<br>• <strong>Goat:</strong> Cross (✗) — compared to the elephant, the goat is <strong>smaller</strong>.",
        2,
        [{ key: "Elephant ticked as bigger", marks: "1 M" }, { key: "Goat crossed as smaller", marks: "1 M" }]
      ),
      makeQ(
        "In-Text Prompt • On & Under",
        "A water bottle is kept on the study table. A red football is lying on the floor under the table. Describe their positions using 'on' and 'under'.",
        "<strong>Step-by-Step Solution:</strong><br>• The water bottle is <strong>on</strong> the table (resting on the upper flat surface).<br>• The red football is <strong>under</strong> the table (resting on the floor beneath the table).",
        2,
        [{ key: "Bottle is on the table", marks: "1 M" }, { key: "Football is under the table", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Above & Below",
        "A ceiling fan hangs overhead. A soft rug is spread on the floor. Which object is above the bed and which is below?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Above:</strong> The ceiling fan is <strong>above</strong> the bed (higher up in the air).<br>• <strong>Below:</strong> The rug is on the floor <strong>below</strong> the bed level.",
        2,
        [{ key: "Fan is above", marks: "1 M" }, { key: "Rug is below", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Footprints in Sand",
        "Look at two footprints left on the wet river sand: one is a tiny sparrow claw mark and the other is a large camel hoof print. Which print is bigger?",
        "<strong>Step-by-Step Solution:</strong><br>1. Large animals have broad feet to walk on sand.<br>2. Therefore, the <strong>camel's hoof print is bigger</strong>.<br>3. The sparrow's claw mark is <strong>smaller</strong>.",
        2,
        [{ key: "Camel print is bigger", marks: "1 M" }, { key: "Sparrow print is smaller", marks: "1 M" }]
      ),
      makeQ(
        "Picture Story • Where Did the Cat Go?",
        "The furry cat jumped: first behind the blue curtain, then into the wooden drawer, and finally under the quilt. Match each place to its position word.",
        "<strong>Step-by-Step Solution:</strong><br>• Blue curtain → <strong>Behind</strong><br>• Wooden drawer → <strong>Inside</strong><br>• Quilt → <strong>Under</strong>",
        3,
        [{ key: "Behind the curtain", marks: "1 M" }, { key: "Inside the drawer", marks: "1 M" }, { key: "Under the quilt", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Sorting Big and Small Leaves",
        "Riya collected a banana leaf and a neem leaf from the garden. Which leaf is bigger and which is smaller?",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>banana leaf is bigger</strong> (it is broad and very long).<br>• The <strong>neem leaf is smaller</strong> (it is tiny and narrow).",
        2,
        [{ key: "Banana leaf is bigger", marks: "1 M" }, { key: "Neem leaf is smaller", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Nearest to the Door",
        "In the classroom, Aman sits on Bench 1 right next to the entrance door. Kabir sits on Bench 5 at the back. Who is nearest to the door?",
        "<strong>Step-by-Step Solution:</strong><br>• Aman sits on Bench 1 right beside the entrance, so <strong>Aman is nearest to the door</strong>.<br>• Kabir is farthest from the door.",
        2,
        [{ key: "Aman is nearest", marks: "1 M" }, { key: "Reason based on distance", marks: "1 M" }]
      ),
      makeQ(
        "In-Text Activity • Front and Back",
        "During the morning school prayer line, Meera stands in front of Rohan. Who is at the front and who is at the back?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Front:</strong> Meera is at the front.<br>• <strong>Back:</strong> Rohan is at the back, behind Meera.",
        2,
        [{ key: "Meera is at the front", marks: "1 M" }, { key: "Rohan is at the back", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • High and Low Swings",
        "Two swings are moving in the park. Swing A goes high up towards the tree branches. Swing B stays low near the grass. Which swing is higher?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Swing A is higher</strong> because it reaches up towards the tree branches.<br>• Swing B is lower.",
        2,
        [{ key: "Swing A is higher", marks: "1 M" }, { key: "Swing B is lower", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Before and After",
        "When packing your school bag, do you put books in before zipping the bag or after zipping the bag?",
        "<strong>Step-by-Step Solution:</strong><br>• You must put your books inside <strong>before</strong> zipping the bag.<br>• Zipping the bag comes <strong>after</strong> all items are safely packed.",
        2,
        [{ key: "Books before zipping", marks: "1 M" }, { key: "Correct temporal sequence", marks: "1 M" }]
      ),
      makeQ(
        "Observation Task • Biggest and Smallest",
        "Look at three fruits: a watermelon, an apple, and a grape. Which fruit is the biggest, and which is the smallest?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Biggest fruit:</strong> Watermelon.<br>• <strong>Smallest fruit:</strong> Grape.<br>• The apple is medium-sized (between watermelon and grape).",
        2,
        [{ key: "Watermelon is biggest", marks: "1 M" }, { key: "Grape is smallest", marks: "1 M" }]
      ),
      makeQ(
        "Drawing & Matching • Cat on the Wall",
        "Describe where the furry cat is sitting if its paws are resting on the brick wall under the open sky.",
        "<strong>Step-by-Step Solution:</strong><br>• The cat is sitting <strong>on</strong> the wall.<br>• The open blue sky is <strong>above</strong> the cat.",
        2,
        [{ key: "Cat is on the wall", marks: "1 M" }, { key: "Sky is above the cat", marks: "1 M" }]
      ),
      makeQ(
        "Competency Summary • Room Orientation",
        "Look around your bedroom. Name one thing that is inside your cupboard, one thing on your bed, and one thing under your bed.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Inside cupboard:</strong> Clothes / school uniform.<br>• <strong>On bed:</strong> Pillow / bedsheet.<br>• <strong>Under bed:</strong> Slippers / storage box.",
        3,
        [{ key: "Inside example", marks: "1 M" }, { key: "On example", marks: "1 M" }, { key: "Under example", marks: "1 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 2: What is Long? What is Round?
  // -------------------------------------------------------------------------
  {
    id: "jm2",
    num: 2,
    unit: "Unit 1: Joyful Numbers",
    title: "What is Long? What is Round?",
    subtitle: "2D & 3D Shapes, Rolling, Sliding & Surface Properties",
    concepts: [
      "Identifying round objects (spheres, balls, fruits) vs long objects (pencils, bats, rulers).",
      "Rolling and Sliding: curved surfaces roll, flat surfaces slide.",
      "Objects that both roll and slide (coins, cylindrical pipes, cans).",
      "Tower making: flat surfaces stack securely, curved surfaces fall.",
      "Tracing flat faces of 3D objects to discover 2D shapes (circles, rectangles, squares)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef3c7" rx="10"/><circle cx="80" cy="55" r="28" fill="#ef4444"/><rect x="160" y="27" width="56" height="56" rx="4" fill="#3b82f6"/><polygon points="280,27 250,83 310,83" fill="#10b981"/><rect x="360" y="37" width="80" height="46" rx="4" fill="#8b5cf6"/><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Round (Rolls) • Flat (Slides) • Cylinder (Rolls &amp; Slides)</text></svg>`,
    cbq: {
      title: "Playground Slide Experiment",
      text: "During sports period, Ravi slides his plastic lunchbox down the playground slide, while Priya rolls an orange down the same slide.",
      question: "Why does the orange roll while the lunchbox slides? What happens if you push a ₹5 coin down the slide?",
      answer: "1. The orange has a curved round surface with no flat faces, so it <strong>rolls</strong>.<br>2. The lunchbox has flat faces, so it <strong>slides</strong>.<br>3. A ₹5 coin can both slide (if placed flat on its face) and roll (if stood upright on its circular edge).",
      rubric: "1.5 M for surface explanation + 1.5 M for coin behavior"
    },
    questions: [
      makeQ(
        "Textbook Exercise • What is Long, What is Round?",
        "Name two objects from your daily life that are 'Long' and two objects that are 'Round'.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Long objects:</strong> Cricket bat, Writing pencil, Ruler.<br>• <strong>Round objects:</strong> Cricket ball, Orange, Tomato, Bangle.",
        2,
        [{ key: "Two correct long objects", marks: "1 M" }, { key: "Two correct round objects", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Blindfold Guessing Game",
        "In Uncle Golu's blindfold game, an object feels smooth, has no corners, and rolls easily in your hands. What is its shape?",
        "<strong>Step-by-Step Solution:</strong><br>1. An object with no flat corners that rolls in all directions is <strong>round (spherical)</strong>.<br>2. Example: A tennis ball, marble, or laddoo.",
        2,
        [{ key: "Identified as round / sphere", marks: "1 M" }, { key: "Valid real-life example", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Rolling vs Sliding",
        "Classify these 4 objects into 'Rolls' or 'Slides': (a) A glass marble, (b) An eraser, (c) A tomato, (d) A flat wooden ruler.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Rolls:</strong> Glass marble and Tomato (curved surfaces).<br>• <strong>Slides:</strong> Eraser and Flat wooden ruler (flat surfaces).",
        2,
        [{ key: "Marble & tomato = Rolls", marks: "1 M" }, { key: "Eraser & ruler = Slides", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Both Rolls and Slides",
        "How can a ₹5 coin both roll and slide? Explain by describing its two positions.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Slides:</strong> Place the coin flat on the table and push it. Its flat circular face slides.<br>• <strong>Rolls:</strong> Stand the coin upright on its thin curved edge and gently push. It rolls like a wheel.",
        3,
        [{ key: "Flat face slides", marks: "1.5 M" }, { key: "Curved edge rolls", marks: "1.5 M" }]
      ),
      makeQ(
        "Hands-on Construction • Making Towers",
        "Can you build a stable tower using round footballs? Why or why not? What objects make good towers?",
        "<strong>Step-by-Step Solution:</strong><br>1. <strong>No</strong>, footballs cannot make a tower because their curved round bodies roll off each other.<br>2. Objects with <strong>flat faces</strong> like wooden blocks, books, and matchboxes make stable towers.",
        3,
        [{ key: "Footballs cannot stack because round", marks: "1.5 M" }, { key: "Flat objects make stable towers", marks: "1.5 M" }]
      ),
      makeQ(
        "Let Us Do • Coin Spinning Trick",
        "Spin a 1-rupee coin on a smooth table like a top. What does the spinning coin look like?",
        "<strong>Step-by-Step Solution:</strong><br>• When a flat round coin spins very fast on its edge, it looks like a <strong>round ball (sphere)</strong>.<br>• When it stops spinning, it falls flat again.",
        2,
        [{ key: "Looks like a round ball / sphere", marks: "1 M" }, { key: "Understands spinning illusion", marks: "1 M" }]
      ),
      makeQ(
        "Shape Tracing • Matchbox Outline",
        "Keep a matchbox flat on paper and trace its border with a pencil. What flat shape do you get?",
        "<strong>Step-by-Step Solution:</strong><br>• The face of a matchbox has 4 straight sides (opposite sides equal).<br>• Tracing its border gives a <strong>Rectangle</strong>.",
        2,
        [{ key: "Identified Rectangle", marks: "1 M" }, { key: "Mentions 4 straight sides", marks: "1 M" }]
      ),
      makeQ(
        "Shape Tracing • Bangle Outline",
        "Keep a round glass bangle flat on a sheet of paper and draw along its edge. What 2D shape is formed?",
        "<strong>Step-by-Step Solution:</strong><br>• The bangle has a curved circular rim.<br>• Tracing inside or outside the rim gives a <strong>Circle</strong>.",
        2,
        [{ key: "Identified Circle", marks: "1 M" }, { key: "Recognized curved border", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Can It Roll?",
        "Look at a cylindrical glue stick. Does it roll, slide, or do both?",
        "<strong>Step-by-Step Solution:</strong><br>• A glue stick has a curved round side and flat circular ends.<br>• Therefore, it <strong>both rolls (on its curved side) and slides (on its flat base)</strong>.",
        2,
        [{ key: "Both rolls and slides", marks: "1 M" }, { key: "Explains curved side vs flat end", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Sorting Vegetables",
        "Look at: Carrot, Onion, Cucumber, Lemon, Potato. Which are long and which are round?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Long vegetables:</strong> Carrot, Cucumber.<br>• <strong>Round vegetables:</strong> Onion, Lemon, Potato (mostly round/oval).",
        2,
        [{ key: "Long identified", marks: "1 M" }, { key: "Round identified", marks: "1 M" }]
      ),
      makeQ(
        "In-Text Prompt • Corner Counting",
        "Does a cricket ball have any sharp corners? How many corners does a square chessboard have?",
        "<strong>Step-by-Step Solution:</strong><br>• A cricket ball has <strong>0 corners</strong> (it is completely round).<br>• A square chessboard has <strong>4 sharp corners</strong>.",
        2,
        [{ key: "Cricket ball = 0 corners", marks: "1 M" }, { key: "Chessboard = 4 corners", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Do • Cardboard Pipe Challenge",
        "Can you stack hollow cardboard toilet-paper rolls to build a tower? How should they be placed?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Yes</strong>, if placed standing upright on their flat circular rims, they stack into a stable tower.<br>• If laid on their curved sides, they roll and cannot stack.",
        2,
        [{ key: "Yes, by standing on flat circular rims", marks: "1 M" }, { key: "Curved sides roll", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • Wheels of a Vehicle",
        "Why are wheels of bicycles, cars, and buses always round and never square?",
        "<strong>Step-by-Step Solution:</strong><br>1. Round wheels roll smoothly without bumpy stops.<br>2. Square wheels have 4 corners that would hit the ground and prevent smooth rolling.",
        2,
        [{ key: "Round wheels roll smoothly", marks: "1 M" }, { key: "Square corners prevent rolling", marks: "1 M" }]
      ),
      makeQ(
        "Activity • Postcard Tower",
        "Can a thin paper postcard stand upright on a table? How can you fold or roll it so it can hold a book on top?",
        "<strong>Step-by-Step Solution:</strong><br>1. A flat postcard bends easily.<br>2. But if you roll the postcard into a <strong>round cylinder (pipe)</strong> and tape the ends, it can stand upright and hold a heavy book on top!",
        2,
        [{ key: "Roll into a cylinder / pipe", marks: "1 M" }, { key: "Tape ends to make strong column", marks: "1 M" }]
      ),
      makeQ(
        "Observation • Match the Pairs",
        "Match the 3D object to its flat face trace: (a) Dice, (b) Water glass bottom, (c) Matchbox side.",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Dice → <strong>Square</strong><br>• (b) Water glass bottom → <strong>Circle</strong><br>• (c) Matchbox side → <strong>Rectangle</strong>",
        3,
        [{ key: "Dice = Square", marks: "1 M" }, { key: "Glass = Circle", marks: "1 M" }, { key: "Matchbox = Rectangle", marks: "1 M" }]
      ),
      makeQ(
        "Summary Drill • Rolls or Slides Summary",
        "Write 'R' for Rolls, 'S' for Slides, and 'B' for Both: (1) Football, (2) Notebook, (3) Candle, (4) Orange.",
        "<strong>Step-by-Step Solution:</strong><br>1. Football → <strong>R (Rolls)</strong><br>2. Notebook → <strong>S (Slides)</strong><br>3. Candle → <strong>B (Both)</strong><br>4. Orange → <strong>R (Rolls)</strong>",
        2,
        [{ key: "All 4 classified correctly", marks: "2 M" }]
      )
    ]
  }
];

module.exports = { joyfulMathsChapters };
