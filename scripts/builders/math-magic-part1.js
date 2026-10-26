// scripts/builders/math-magic-part1.js
// Exact Literal NCERT Textbook Questions for Math-Magic Book 1: Chapters 1 to 4

function makeQ(category, q, ans, marks, rubric) {
  return { category, q, ans, marks, rubric };
}

const mathMagicPart1 = [
  // -------------------------------------------------------------------------
  // CHAPTER 1: Shapes and Space
  // -------------------------------------------------------------------------
  {
    id: "mm1",
    num: 1,
    unit: "Unit 1: Math-Magic Classic",
    title: "Shapes and Space",
    subtitle: "Inside-Outside, Bigger-Smaller, Top-Bottom, Rolling-Sliding & Shapes",
    concepts: [
      "The Arab and his Camel: understanding Inside and Outside.",
      "Comparing sizes: Bigger vs Smaller, Biggest vs Smallest.",
      "Relative positions: Top vs Bottom, Nearer vs Farther, On vs Under, Above vs Below.",
      "Movement properties of 3D objects: Rolling vs Sliding.",
      "Sorting shapes by colour, size, and type into boxes."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 1: Shapes and Space</text></svg>`,
    cbq: {
      title: "Wise Grandmother's Rolling Dholak Case Study",
      text: "A little lamb was going to visit his grandmother. In the forest, a hungry wolf stopped him to eat him. The lamb requested, 'Let me go to my grandmother, I will grow fat and then you can eat me.' On returning, grandmother hid the lamb inside a wooden dholak and rolled it down the grassy hill.",
      question: "Why did the dholak roll smoothly down the hill instead of sliding? Did the wolf catch the lamb?",
      answer: "1. The dholak has a <strong>curved cylindrical surface</strong>, which rolls easily down a slope.<br>2. The dholak rolled very fast past the waiting wolf, and the lamb reached home safely without getting caught.",
      rubric: "1.5 M for curved surface rolls + 1.5 M for lamb reaches home safely"
    },
    questions: [
      makeQ(
        "Textbook Story • The Arab and his Camel",
        "In the desert winter, the Arab pitched his tent and went inside. The camel was outside in the cold. What did the camel ask first?",
        "<strong>Step-by-Step Solution:</strong><br>• The camel asked: <em>'May I put my neck inside? It is too cold outside.'</em><br>• The Arab allowed him to put his neck inside the tent.",
        2,
        [{ key: "Asked to put neck inside", marks: "1 M" }, { key: "Reason: too cold outside", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Story • Who is Inside at the End?",
        "At the end of 'The Arab and his Camel' story, who was finally inside the tent, and who was outside?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Inside:</strong> The Camel was inside the tent.<br>• <strong>Outside:</strong> The Arab was outside in the cold desert night because the tent was too small for both.",
        2,
        [{ key: "Camel is inside", marks: "1 M" }, { key: "Arab is outside", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Bigger and Smaller",
        "Tick (✓) the bigger animal between a Hippopotamus and a Puppy.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>Hippopotamus is bigger</strong> (tick ✓).<br>• The puppy is much smaller.",
        2,
        [{ key: "Hippopotamus ticked", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Smaller Leaf",
        "Look at the two leaves: a broad banana leaf and a small rose leaf. Tick (✓) the smaller leaf.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>rose leaf is smaller</strong> (tick ✓).<br>• The banana leaf is bigger.",
        2,
        [{ key: "Rose leaf ticked", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Smaller Tire",
        "Two children are racing rolling tires. One has a small scooter tire and one has a large tractor tire. Tick (✓) the smaller tire.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>scooter tire is smaller</strong> (tick ✓).",
        2,
        [{ key: "Smaller tire identified", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Smallest Tree",
        "Look at three trees in a garden: Tree 1 (huge banyan), Tree 2 (medium mango), Tree 3 (tiny sapling). Tick (✓) the smallest tree.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>tiny sapling (Tree 3) is the smallest tree</strong>.",
        2,
        [{ key: "Smallest tree identified", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Biggest Animal",
        "Among an Elephant, a Cat, and a Dog, tick (✓) the biggest animal.",
        "<strong>Step-by-Step Solution:</strong><br>• The <strong>Elephant is the biggest animal</strong>.",
        2,
        [{ key: "Elephant is biggest", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Top and Bottom on a Slide",
        "In the children's park, a boy is sitting at the top of the slide, a girl is sliding down the middle, and another boy is standing on the ground at the bottom. Who is at the top?",
        "<strong>Step-by-Step Solution:</strong><br>• The boy sitting at the highest point of the ladder is at the <strong>top</strong>.<br>• The boy on the grass is at the <strong>bottom</strong>.",
        2,
        [{ key: "Boy at top identified", marks: "1 M" }, { key: "Boy at bottom identified", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Bird Nearest to Home",
        "Two birds are flying in the sky towards their nest in a tree. Bird A is 2 meters away from the nest. Bird B is 8 meters away. Tick (✓) the bird nearest to home.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Bird A is nearest to home</strong> because 2 meters is a shorter distance than 8 meters.",
        2,
        [{ key: "Bird A is nearest", marks: "1 M" }, { key: "Shorter distance explained", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Cat Farthest from the Tree",
        "Three cats are in the garden: Cat 1 is near the flowerpot, Cat 2 is near the bench, and Cat 3 is near the far garden gate. Which cat is farthest from the tree?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Cat 3 (near the far garden gate) is farthest from the tree</strong>.",
        2,
        [{ key: "Cat 3 is farthest", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Nearest and Farthest from Slide",
        "Look at the playground: Boy A is closest to the slide ladder. Boy B is running across the football field. Who is nearest to the slide and who is farthest?",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Nearest:</strong> Boy A.<br>• <strong>Farthest:</strong> Boy B.",
        2,
        [{ key: "Nearest = Boy A", marks: "1 M" }, { key: "Farthest = Boy B", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • On and Under the Table",
        "In the classroom picture: A cat is sleeping on the floor under the teacher's desk. An open book is on top of the desk. Where is the cat and where is the book?",
        "<strong>Step-by-Step Solution:</strong><br>• The book is <strong>on</strong> the desk.<br>• The cat is <strong>under</strong> the desk.",
        2,
        [{ key: "Book on desk", marks: "1 M" }, { key: "Cat under desk", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Above and Below the Fan",
        "A ceiling fan hangs in the room. A boy sits on a bed. Which is above and which is below?",
        "<strong>Step-by-Step Solution:</strong><br>• The fan is <strong>above</strong> the boy.<br>• The boy is <strong>below</strong> the fan.",
        2,
        [{ key: "Fan is above", marks: "1 M" }, { key: "Boy is below", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Sorting Shapes into Boxes",
        "Put shapes into two boxes by drawing lines: Pink Box (cubes and rectangular boxes) and Yellow Box (round balls and spheres). Where does an orange go?",
        "<strong>Step-by-Step Solution:</strong><br>• An orange is round, so it goes into the <strong>Yellow Box (round balls)</strong>.<br>• A wooden chalk box goes into the Pink Box.",
        2,
        [{ key: "Orange in Yellow Box", marks: "1 M" }, { key: "Chalk box in Pink Box", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Match Similar Shapes",
        "Match the similar shapes by drawing a line: (a) Ball, (b) Chalk-box, (c) Candle, (d) Party hat.<br>Options: [Tomato, Die, Water pipe, Cone toy].",
        "<strong>Step-by-Step Solution:</strong><br>• (a) Ball → <strong>Tomato</strong> (both round spheres)<br>• (b) Chalk-box → <strong>Die</strong> (both cubes)<br>• (c) Candle → <strong>Water pipe</strong> (both cylinders)<br>• (d) Party hat → <strong>Cone toy</strong> (both cones)",
        2,
        [{ key: "All 4 correctly matched", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Rolling Objects",
        "Tick (✓) the objects that roll: Pencil, Ball, Tomato, Butter pack.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Pencil:</strong> Rolls on its round side (✓)<br>• <strong>Ball:</strong> Rolls (✓)<br>• <strong>Tomato:</strong> Rolls (✓)<br>• Butter pack: Has flat faces, so it slides (not rolls).",
        2,
        [{ key: "Pencil, Ball, Tomato roll", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Sliding Objects",
        "Tick (✓) the objects that slide: Cucumber, Tomato, Battery, Briefcase (Suitcase).",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>Briefcase (Suitcase):</strong> Has flat faces and slides (✓).<br>• Cucumber and Battery can roll on their sides and slide on flat ends.",
        2,
        [{ key: "Suitcase slides", marks: "1 M" }, { key: "Flat face explanation", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Story • The Lamb and the Dholak",
        "How did the grandmother help the lamb escape from the hungry wolf?",
        "<strong>Step-by-Step Solution:</strong><br>1. Grandmother put the little lamb inside a hollow, round <strong>dholak</strong>.<br>2. She rolled the dholak down the slope.<br>3. Because the dholak was round, it rolled fast and took the lamb safely home.",
        2,
        [{ key: "Put lamb inside dholak", marks: "1 M" }, { key: "Rolled down hill safely", marks: "1 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 2: Numbers from One to Nine
  // -------------------------------------------------------------------------
  {
    id: "mm2",
    num: 2,
    unit: "Unit 1: Math-Magic Classic",
    title: "Numbers from One to Nine",
    subtitle: "Counting 1 to 9, As Many As, More or Less, Make Groups & Zero",
    concepts: [
      "One-to-one matching: 'As many as'.",
      "Counting physical objects from 1 to 9.",
      "Comparing collections: More vs Less.",
      "Counting and writing numerals and number names.",
      "Grouping objects into given numbers and concept of Zero."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 2: Numbers from One to Nine</text></svg>`,
    cbq: {
      title: "Playground Matchsticks Counting Case Study",
      text: "Five children are playing in the school garden. Teacher gives 1 biscuit to each child. Then she counts the remaining biscuits in the packet: there are 3 biscuits left.",
      question: "How many biscuits were given to the 5 children? How many total biscuits were in the packet originally?",
      answer: "1. 5 children each got 1 biscuit, so <strong>5 biscuits</strong> were given out.<br>2. Total biscuits originally = 5 given + 3 left = <strong>8 biscuits</strong>.",
      rubric: "1.5 M for 5 biscuits given + 1.5 M for 5 + 3 = 8 total biscuits"
    },
    questions: [
      makeQ(
        "Textbook Exercise • As Many As Cats and Mice",
        "In the textbook illustration: 5 cats are paired with 5 mice by drawing connecting lines. Is every cat matched to a mouse?",
        "<strong>Step-by-Step Solution:</strong><br>• Yes, there are 5 cats and 5 mice.<br>• Since 5 = 5, there are <strong>as many mice as cats</strong>.",
        2,
        [{ key: "5 = 5 matching", marks: "1 M" }, { key: "As many as verified", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • More or Less Children and Chairs",
        "5 children are playing musical chairs. There are only 4 chairs. Tick (✓) which is MORE: Children or Chairs?",
        "<strong>Step-by-Step Solution:</strong><br>• Children = 5<br>• Chairs = 4<br>• 5 > 4, so <strong>Children are MORE</strong> (tick ✓).",
        2,
        [{ key: "Children are more", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Count and Match",
        "Count the watermelons: There are 2 watermelons. Match with numeral 2.",
        "<strong>Step-by-Step Solution:</strong><br>• 2 watermelons match with numeral <strong>2 (Two)</strong>.",
        2,
        [{ key: "Matched to 2", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting Milk Bottles",
        "Count the milk bottles in the crate: • • • • •. Write the numeral.",
        "<strong>Step-by-Step Solution:</strong><br>• There are <strong>5 milk bottles</strong>. Numeral: <strong>5</strong> (Five).",
        2,
        [{ key: "Numeral 5 written", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting Ladders",
        "Count the wooden ladders standing against the wall: • • •. Write the numeral.",
        "<strong>Step-by-Step Solution:</strong><br>• There are <strong>3 wooden ladders</strong>. Numeral: <strong>3</strong> (Three).",
        2,
        [{ key: "Numeral 3 written", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Counting Gas Cylinders",
        "Count the red gas cylinders: • • • •. Write the numeral.",
        "<strong>Step-by-Step Solution:</strong><br>• There are <strong>4 gas cylinders</strong>. Numeral: <strong>4</strong> (Four).",
        2,
        [{ key: "Numeral 4 written", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make a Group of 4 Bottles",
        "There are 6 glass bottles in a row. Draw a line around a group of 4 bottles.",
        "<strong>Step-by-Step Solution:</strong><br>• Circle 4 bottles together.<br>• 2 bottles remain uncircled.",
        2,
        [{ key: "4 bottles grouped", marks: "1 M" }, { key: "2 remain noted", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make a Group of 3 Trees",
        "There are 5 trees. Circle a group of 3 trees.",
        "<strong>Step-by-Step Solution:</strong><br>• Draw a circle around any 3 trees.<br>• 2 trees remain outside.",
        2,
        [{ key: "Group of 3 circled", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make a Group of 2 Drums",
        "There are 4 drums. Draw a ring around a group of 2 drums.",
        "<strong>Step-by-Step Solution:</strong><br>• Ring 2 drums.<br>• 2 drums remain outside.",
        2,
        [{ key: "Group of 2 ringed", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Make a Group of 5 Lanterns",
        "There are 7 lanterns. Circle a group of 5 lanterns.",
        "<strong>Step-by-Step Solution:</strong><br>• Ring 5 lanterns.<br>• 7 - 5 = 2 lanterns remain outside.",
        2,
        [{ key: "Group of 5 ringed", marks: "2 M" }]
      ),
      makeQ(
        "Let Us Do • One to Nine Rhyme",
        "One, one, one, one little baby eating a bun! Two, two, two, two little children going to the zoo! What comes next for three?",
        "<strong>Step-by-Step Solution:</strong><br>• <em>'Three, three, three, three green parrots flying free!'</em>",
        2,
        [{ key: "Three green parrots flying free", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Names 1 to 5",
        "Write the number names for: 1, 2, 3, 4, 5.",
        "<strong>Step-by-Step Solution:</strong><br>• 1 = <strong>One</strong><br>• 2 = <strong>Two</strong><br>• 3 = <strong>Three</strong><br>• 4 = <strong>Four</strong><br>• 5 = <strong>Five</strong>",
        2,
        [{ key: "All 5 spelled correctly", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Number Names 6 to 9",
        "Write the number names for: 6, 7, 8, 9.",
        "<strong>Step-by-Step Solution:</strong><br>• 6 = <strong>Six</strong><br>• 7 = <strong>Seven</strong><br>• 8 = <strong>Eight</strong><br>• 9 = <strong>Nine</strong>",
        2,
        [{ key: "All 4 spelled correctly", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Count and Match 6 to 9",
        "Match: (a) 6 leaves, (b) 7 glasses, (c) 8 sticks, (d) 9 mangoes to numerals [6, 7, 8, 9].",
        "<strong>Step-by-Step Solution:</strong><br>• 6 leaves → <strong>6</strong><br>• 7 glasses → <strong>7</strong><br>• 8 sticks → <strong>8</strong><br>• 9 mangoes → <strong>9</strong>",
        2,
        [{ key: "All 4 correctly matched", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Color 6 Birds",
        "There are 8 birds in the tree. You are asked to color 6 birds. How many birds remain uncolored?",
        "<strong>Step-by-Step Solution:</strong><br>• Total birds = 8<br>• Colored birds = 6<br>• Uncolored birds = 8 - 6 = <strong>2 birds</strong>.",
        2,
        [{ key: "8 - 6 = 2", marks: "1 M" }, { key: "Answer: 2 birds", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Color 3 Trees",
        "Out of 4 pine trees, color 3 trees. How many trees are not colored?",
        "<strong>Step-by-Step Solution:</strong><br>• 4 - 3 = <strong>1 tree</strong> remains uncolored.",
        2,
        [{ key: "4 - 3 = 1", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Color 1 Boat",
        "There are 3 boats in the river. Color 1 boat. How many boats are left uncolored?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 - 1 = <strong>2 boats</strong> left uncolored.",
        2,
        [{ key: "3 - 1 = 2", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Numbers 1 to 9",
        "Write the missing numbers: 1, __, 3, 4, __, 6, __, 8, 9.",
        "<strong>Step-by-Step Solution:</strong><br>• Missing numbers are: <strong>2, 5, 7</strong>.<br>• Full sequence: 1, <strong>2</strong>, 3, 4, <strong>5</strong>, 6, <strong>7</strong>, 8, 9.",
        2,
        [{ key: "Filled 2, 5, 7", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Before 5?",
        "What number comes just before 5, and what comes just after 5?",
        "<strong>Step-by-Step Solution:</strong><br>• Just before 5 is <strong>4</strong>.<br>• Just after 5 is <strong>6</strong>.",
        2,
        [{ key: "Before 5 = 4", marks: "1 M" }, { key: "After 5 = 6", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • What Comes Between 7 and 9?",
        "What number lies between 7 and 9?",
        "<strong>Step-by-Step Solution:</strong><br>• The number between 7 and 9 is <strong>8</strong>.",
        2,
        [{ key: "Identified 8", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Concept of Zero Flower Pot",
        "There are 3 pretty flowers in a flower pot. A child plucks 1 flower, then another, then the last one. How many flowers are left in the pot?",
        "<strong>Step-by-Step Solution:</strong><br>1. Total flowers = 3<br>2. Flowers plucked = 3<br>3. Flowers remaining = 3 - 3 = <strong>0 (Zero)</strong>.<br>4. Zero means no flowers are left in the pot.",
        2,
        [{ key: "3 - 3 = 0", marks: "1 M" }, { key: "Concept of zero explained", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Birds Flying Off Branch",
        "4 birds sit on a tree. All 4 fly away together. How many birds are on the branch?",
        "<strong>Step-by-Step Solution:</strong><br>• 4 - 4 = <strong>0 birds</strong>.",
        2,
        [{ key: "0 birds", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Cages with Mice",
        "A mouse cage has 3 white mice. All 3 run out through the open door. How many mice are in the cage?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 - 3 = <strong>0 mice</strong>.",
        2,
        [{ key: "0 mice", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Balloons in Hand",
        "A girl holds 3 balloons. All 3 burst: POP! POP! POP! How many balloons are in her hand?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 - 3 = <strong>0 balloons</strong>.",
        2,
        [{ key: "0 balloons", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Writing Numerals 0 to 9",
        "Write all single-digit numerals starting from 0 up to 9.",
        "<strong>Step-by-Step Solution:</strong><br>• <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</strong>.",
        2,
        [{ key: "All 10 digits written in order", marks: "2 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 3: Addition
  // -------------------------------------------------------------------------
  {
    id: "mm3",
    num: 3,
    unit: "Unit 1: Math-Magic Classic",
    title: "Addition",
    subtitle: "One More, How Many Altogether, Adding Pictures & Dominoes",
    concepts: [
      "Understanding addition as putting together or adding to.",
      "The 'One More' concept (1 more than 4 is 5).",
      "Using the plus (+) and equal to (=) signs correctly.",
      "Addition facts up to 9 and zero in addition.",
      "Solving pictorial addition problems and number line addition."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 3: Addition</text></svg>`,
    cbq: {
      title: "Cow in the Meadow Case Study",
      text: "Two cows are grazing in the green meadow. One more cow comes and joins them to graze sweet grass.",
      question: "How many cows are grazing altogether? If two more calves join, what is the new total?",
      answer: "1. 2 cows + 1 more cow = <strong>3 cows grazing altogether</strong>.<br>2. With 2 more calves: 3 + 2 = <strong>5 animals altogether</strong>.",
      rubric: "1.5 M for 2 + 1 = 3 cows + 1.5 M for 3 + 2 = 5 animals"
    },
    questions: [
      makeQ(
        "Textbook Exercise • One More Parrot Rhyme",
        "Two little green parrots looking for a mate; one more joins in, making them: ___.",
        "<strong>Step-by-Step Solution:</strong><br>• 2 + 1 = <strong>3 parrots</strong> (Three).",
        2,
        [{ key: "2 + 1 = 3", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Three Parrots One More",
        "Three little green parrots singing in a tree; one more joins in, making them: ___.",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 1 = <strong>4 parrots</strong> (Four).",
        2,
        [{ key: "3 + 1 = 4", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Four Parrots One More",
        "Four little green parrots sitting on the floor; one more joins in, making them: ___.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 + 1 = <strong>5 parrots</strong> (Five).",
        2,
        [{ key: "4 + 1 = 5", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • How Many Altogether (Cows)",
        "2 cows and 1 cow is equal to how many cows?",
        "<strong>Step-by-Step Solution:</strong><br>• 2 + 1 = <strong>3 cows</strong>.",
        2,
        [{ key: "2 + 1 = 3 cows", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Children Playing",
        "3 children are playing in the sand. 2 more children join them. How many children altogether?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 2 = <strong>5 children altogether</strong>.",
        2,
        [{ key: "3 + 2 = 5 children", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Flowers in Vases",
        "Vase A has 5 flowers. Vase B has 2 flowers. How many flowers altogether?",
        "<strong>Step-by-Step Solution:</strong><br>• 5 + 2 = <strong>7 flowers</strong>.",
        2,
        [{ key: "5 + 2 = 7 flowers", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Birds on Branch",
        "4 birds sit on a branch. 2 more birds fly in and sit. How many birds altogether?",
        "<strong>Step-by-Step Solution:</strong><br>• 4 + 2 = <strong>6 birds</strong>.",
        2,
        [{ key: "4 + 2 = 6 birds", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Marbles in Hand",
        "Rahul has 3 marbles in his left hand and 2 marbles in his right hand. How many marbles does he have in all?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 2 = <strong>5 marbles</strong>.",
        2,
        [{ key: "3 + 2 = 5 marbles", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Adding Zero (Balloons)",
        "A boy holds 3 balloons. The other boy holds 0 balloons. How many balloons do both have together?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 0 = <strong>3 balloons</strong>.",
        2,
        [{ key: "3 + 0 = 3 balloons", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Zero and Four",
        "Solve: 0 + 4 = __.",
        "<strong>Step-by-Step Solution:</strong><br>• 0 + 4 = <strong>4</strong>.",
        2,
        [{ key: "0 + 4 = 4", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Adding Dots",
        "Add dots: (••) + (••••) = ?",
        "<strong>Step-by-Step Solution:</strong><br>• 2 + 4 = <strong>6 dots</strong>.",
        2,
        [{ key: "2 + 4 = 6", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Vertical Addition",
        "Add vertically:<br>&nbsp;&nbsp;4<br>+ 2<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;4<br>+ 2<br>---<br>&nbsp;&nbsp;<strong>6</strong>",
        2,
        [{ key: "Answer 6", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Add 3 and 5",
        "Add:<br>&nbsp;&nbsp;3<br>+ 5<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;3<br>+ 5<br>---<br>&nbsp;&nbsp;<strong>8</strong>",
        2,
        [{ key: "Answer 8", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Add 4 and 0",
        "Add:<br>&nbsp;&nbsp;4<br>+ 0<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;4<br>+ 0<br>---<br>&nbsp;&nbsp;<strong>4</strong>",
        2,
        [{ key: "Answer 4", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Horizontal Addition",
        "Find the sums:<br>(a) 2 + 3 = __<br>(b) 7 + 1 = __<br>(c) 3 + 4 = __",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 2 + 3 = <strong>5</strong><br>• (b) 7 + 1 = <strong>8</strong><br>• (c) 3 + 4 = <strong>7</strong>",
        3,
        [{ key: "2+3 = 5", marks: "1 M" }, { key: "7+1 = 8", marks: "1 M" }, { key: "3+4 = 7", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Match the Pairs",
        "Match the sums that give 7: (a) 4 + 3, (b) 5 + 2, (c) 6 + 1.",
        "<strong>Step-by-Step Solution:</strong><br>• 4 + 3 = 7<br>• 5 + 2 = 7<br>• 6 + 1 = 7<br>• All three expressions equal <strong>7</strong>.",
        2,
        [{ key: "All equal 7 verified", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Addend",
        "Fill in the missing numeral: 5 + __ = 7.",
        "<strong>Step-by-Step Solution:</strong><br>• 7 - 5 = 2.<br>• 5 + <strong>2</strong> = 7.",
        2,
        [{ key: "Missing number is 2", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Addend to 9",
        "Fill in the blank: __ + 3 = 9.",
        "<strong>Step-by-Step Solution:</strong><br>• 9 - 3 = 6.<br>• <strong>6</strong> + 3 = 9.",
        2,
        [{ key: "Missing number is 6", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Adding to Make 8",
        "Write any two pairs of numbers that add up to 8.",
        "<strong>Step-by-Step Solution:</strong><br>• Pair 1: <strong>4 + 4 = 8</strong><br>• Pair 2: <strong>5 + 3 = 8</strong> (or 6 + 2, 7 + 1).",
        2,
        [{ key: "Two valid pairs", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Ants in a Line",
        "6 ants are marching towards a sugar crystal. 2 more ants join the line. How many ants in the line now?",
        "<strong>Step-by-Step Solution:</strong><br>• 6 + 2 = <strong>8 ants</strong>.",
        2,
        [{ key: "6 + 2 = 8 ants", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Frogs on Stones",
        "3 frogs sit on Stone A. 3 frogs sit on Stone B. How many frogs in total?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 3 = <strong>6 frogs</strong>.",
        2,
        [{ key: "3 + 3 = 6 frogs", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Commutative Property",
        "Does 2 + 5 give the same answer as 5 + 2? Show the working.",
        "<strong>Step-by-Step Solution:</strong><br>• 2 + 5 = 7<br>• 5 + 2 = 7<br>• <strong>Yes</strong>, both equal 7. The order of adding numbers does not change the total.",
        2,
        [{ key: "Both equal 7", marks: "1 M" }, { key: "Order does not change sum", marks: "1 M" }]
      )
    ]
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: Subtraction
  // -------------------------------------------------------------------------
  {
    id: "mm4",
    num: 4,
    unit: "Unit 1: Math-Magic Classic",
    title: "Subtraction",
    subtitle: "Take Away, Crossing Out, How Many Left & Subtraction Facts",
    concepts: [
      "Understanding subtraction as 'Taking away' from a collection.",
      "Crossing out pictures/dots to find the remaining count.",
      "Using the minus sign (-) and equal to (=) signs.",
      "Subtraction facts within 9 and subtracting zero.",
      "Subtracting a number from itself (e.g. 5 - 5 = 0)."
    ],
    svg: `<svg viewBox="0 0 500 100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="250" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">Math-Magic Ch 4: Subtraction</text></svg>`,
    cbq: {
      title: "Leaves on a Twig Case Study",
      text: "A green twig had 6 tender leaves. A hungry caterpillar came and ate 2 leaves.",
      question: "How many leaves are left on the twig? If the caterpillar comes back and eats 4 more leaves, how many leaves remain?",
      answer: "1. Leaves left initially = 6 - 2 = <strong>4 leaves left</strong>.<br>2. After eating 4 more: 4 - 4 = <strong>0 leaves left</strong>.",
      rubric: "1.5 M for 6 - 2 = 4 leaves + 1.5 M for 4 - 4 = 0 leaves"
    },
    questions: [
      makeQ(
        "Textbook Exercise • Take Away Leaves",
        "A twig has 6 leaves. Take away 2 leaves. How many leaves are left?",
        "<strong>Step-by-Step Solution:</strong><br>• 6 - 2 = <strong>4 leaves left</strong>.",
        2,
        [{ key: "6 - 2 = 4", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Take Away Butterflies",
        "There are 5 butterflies on a rose flower. All 5 butterflies fly away. How many butterflies remain on the flower?",
        "<strong>Step-by-Step Solution:</strong><br>• 5 - 5 = <strong>0 butterflies</strong>.<br>• When all items are taken away, zero remains.",
        2,
        [{ key: "5 - 5 = 0", marks: "1 M" }, { key: "Explanation of zero", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Frogs in Water",
        "3 frogs sit on the bank. 1 frog jumps into the water. How many frogs stay on the bank?",
        "<strong>Step-by-Step Solution:</strong><br>• 3 - 1 = <strong>2 frogs stay on the bank</strong>.",
        2,
        [{ key: "3 - 1 = 2", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Jugs on Table",
        "There were 6 glass jugs on the table. 4 jugs broke. How many jugs are left unbroken?",
        "<strong>Step-by-Step Solution:</strong><br>• 6 - 4 = <strong>2 jugs left unbroken</strong>.",
        2,
        [{ key: "6 - 4 = 2", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Crossing Out Dots",
        "There are 7 dots: (•••••••). Cross out 3 dots. How many dots are left uncrossed?",
        "<strong>Step-by-Step Solution:</strong><br>• 7 - 3 = <strong>4 dots left</strong>.",
        2,
        [{ key: "7 - 3 = 4", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Vertical Subtraction",
        "Subtract vertically:<br>&nbsp;&nbsp;8<br>- 2<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;8<br>- 2<br>---<br>&nbsp;&nbsp;<strong>6</strong>",
        2,
        [{ key: "Answer 6", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtract 4 from 9",
        "Subtract:<br>&nbsp;&nbsp;9<br>- 4<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;9<br>- 4<br>---<br>&nbsp;&nbsp;<strong>5</strong>",
        2,
        [{ key: "Answer 5", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtract Zero",
        "Subtract:<br>&nbsp;&nbsp;5<br>- 0<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;5<br>- 0<br>---<br>&nbsp;&nbsp;<strong>5</strong>",
        2,
        [{ key: "Answer 5", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtract Number from Itself",
        "Subtract:<br>&nbsp;&nbsp;7<br>- 7<br>---",
        "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;7<br>- 7<br>---<br>&nbsp;&nbsp;<strong>0</strong>",
        2,
        [{ key: "Answer 0", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Horizontal Differences",
        "Solve:<br>(a) 4 - 2 = __<br>(b) 8 - 5 = __<br>(c) 9 - 1 = __",
        "<strong>Step-by-Step Solution:</strong><br>• (a) 4 - 2 = <strong>2</strong><br>• (b) 8 - 5 = <strong>3</strong><br>• (c) 9 - 1 = <strong>8</strong>",
        3,
        [{ key: "4-2 = 2", marks: "1 M" }, { key: "8-5 = 3", marks: "1 M" }, { key: "9-1 = 8", marks: "1 M" }]
      ),
      makeQ(
        "Textbook Exercise • Match the Difference",
        "Match the subtraction facts that equal 3: (a) 6 - 3, (b) 5 - 2, (c) 7 - 4, (d) 8 - 5.",
        "<strong>Step-by-Step Solution:</strong><br>• 6 - 3 = 3<br>• 5 - 2 = 3<br>• 7 - 4 = 3<br>• 8 - 5 = 3<br>• All four expressions equal <strong>3</strong>.",
        2,
        [{ key: "All evaluated to 3", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Number in Subtraction",
        "Fill in the blank: 8 - __ = 7.",
        "<strong>Step-by-Step Solution:</strong><br>• 8 - 7 = 1.<br>• 8 - <strong>1</strong> = 7.",
        2,
        [{ key: "Blank is 1", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Missing Minuend",
        "Fill in the blank: __ - 2 = 3.",
        "<strong>Step-by-Step Solution:</strong><br>• 3 + 2 = 5.<br>• <strong>5</strong> - 2 = 3.",
        2,
        [{ key: "Blank is 5", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Bananas Eaten",
        "A monkey had 6 bananas. He ate 3 bananas. How many bananas are left?",
        "<strong>Step-by-Step Solution:</strong><br>• 6 - 3 = <strong>3 bananas left</strong>.",
        2,
        [{ key: "6 - 3 = 3 bananas", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Sparrows Flying Away",
        "9 sparrows were pecking grains in the courtyard. A barking dog startled them and 5 flew away. How many sparrows remained?",
        "<strong>Step-by-Step Solution:</strong><br>• 9 - 5 = <strong>4 sparrows remained</strong>.",
        2,
        [{ key: "9 - 5 = 4 sparrows", marks: "2 M" }]
      ),
      makeQ(
        "Word Problem • Candies Shared",
        "Ali had 7 candies. He gave 4 candies to his sister. How many candies does Ali have now?",
        "<strong>Step-by-Step Solution:</strong><br>• 7 - 4 = <strong>3 candies</strong>.",
        2,
        [{ key: "7 - 4 = 3 candies", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Take Away from 9",
        "Solve: 9 - 6 = __.",
        "<strong>Step-by-Step Solution:</strong><br>• Count down from 9: 8, 7, 6, 5, 4, 3.<br>• 9 - 6 = <strong>3</strong>.",
        2,
        [{ key: "Answer 3", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Take Away from 8",
        "Solve: 8 - 8 = __.",
        "<strong>Step-by-Step Solution:</strong><br>• 8 - 8 = <strong>0</strong>.",
        2,
        [{ key: "Answer 0", marks: "2 M" }]
      ),
      makeQ(
        "Textbook Exercise • Subtracting 1",
        "What happens when you subtract 1 from any number? Give an example.",
        "<strong>Step-by-Step Solution:</strong><br>• Subtracting 1 gives the <strong>number just before it</strong> (the predecessor).<br>• Example: 7 - 1 = <strong>6</strong>.",
        2,
        [{ key: "Gives number just before", marks: "1 M" }, { key: "Valid example (7 - 1 = 6)", marks: "1 M" }]
      ),
      makeQ(
        "Let Us Think • True or False in Subtraction",
        "Is 5 - 2 equal to 2 - 5?",
        "<strong>Step-by-Step Solution:</strong><br>• 5 - 2 = 3.<br>• 2 - 5 cannot be done with whole positive numbers.<br>• <strong>No.</strong> Unlike addition, the order of numbers cannot be reversed in subtraction.",
        2,
        [{ key: "No, order cannot be changed", marks: "2 M" }]
      ),
      makeQ(
        "Competency Review • Checking by Addition",
        "How can you check if 8 - 3 = 5 is correct using addition?",
        "<strong>Step-by-Step Solution:</strong><br>• Add the answer (5) to the number subtracted (3):<br>• 5 + 3 = <strong>8</strong> (the original number).<br>• This proves the subtraction is correct.",
        2,
        [{ key: "5 + 3 = 8", marks: "1 M" }, { key: "Proves inverse operation", marks: "1 M" }]
      )
    ]
  }
];

module.exports = { mathMagicPart1 };
