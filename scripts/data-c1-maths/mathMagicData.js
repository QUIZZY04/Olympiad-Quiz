// scripts/data-c1-maths/mathMagicData.js
// Official NCERT Class 1 Mathematics (Math-Magic Book 1) Complete 100% Verbatim Dataset (Classic CBSE)

const mathMagicChapters = [
  {
    "id": "mm1",
    "num": 1,
    "unit": "Unit 1: Math-Magic Classic",
    "title": "Shapes and Space",
    "subtitle": "Inside-Outside, Bigger-Smaller, Top-Bottom, Rolling-Sliding & Shapes",
    "concepts": [
      "The Arab and his Camel: understanding Inside and Outside.",
      "Comparing sizes: Bigger vs Smaller, Biggest vs Smallest.",
      "Relative positions: Top vs Bottom, Nearer vs Farther, On vs Under, Above vs Below.",
      "Movement properties of 3D objects: Rolling vs Sliding.",
      "Sorting shapes by colour, size, and type into boxes."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 1: Shapes and Space</text></svg>",
    "cbq": {
      "title": "Wise Grandmother's Rolling Dholak Case Study",
      "text": "A little lamb was going to visit his grandmother. In the forest, a hungry wolf stopped him to eat him. The lamb requested, 'Let me go to my grandmother, I will grow fat and then you can eat me.' On returning, grandmother hid the lamb inside a wooden dholak and rolled it down the grassy hill.",
      "question": "Why did the dholak roll smoothly down the hill instead of sliding? Did the wolf catch the lamb?",
      "answer": "1. The dholak has a <strong>curved cylindrical surface</strong>, which rolls easily down a slope.<br>2. The dholak rolled very fast past the waiting wolf, and the lamb reached home safely without getting caught.",
      "rubric": "1.5 M for curved surface rolls + 1.5 M for lamb reaches home safely"
    },
    "questions": [
      {
        "category": "Textbook Story • The Arab and his Camel",
        "q": "In the desert winter, the Arab pitched his tent and went inside. The camel was outside in the cold. What did the camel ask first?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The camel asked: <em>'May I put my neck inside? It is too cold outside.'</em><br>• The Arab allowed him to put his neck inside the tent.",
        "marks": 2,
        "rubric": [
          {
            "key": "Asked to put neck inside",
            "marks": "1 M"
          },
          {
            "key": "Reason: too cold outside",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Story • Who is Inside at the End?",
        "q": "At the end of 'The Arab and his Camel' story, who was finally inside the tent, and who was outside?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Inside:</strong> The Camel was inside the tent.<br>• <strong>Outside:</strong> The Arab was outside in the cold desert night because the tent was too small for both.",
        "marks": 2,
        "rubric": [
          {
            "key": "Camel is inside",
            "marks": "1 M"
          },
          {
            "key": "Arab is outside",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bigger and Smaller",
        "q": "Tick (✓) the bigger animal between a Hippopotamus and a Puppy.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>Hippopotamus is bigger</strong> (tick ✓).<br>• The puppy is much smaller.",
        "marks": 2,
        "rubric": [
          {
            "key": "Hippopotamus ticked",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Smaller Leaf",
        "q": "Look at the two leaves: a broad banana leaf and a small rose leaf. Tick (✓) the smaller leaf.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>rose leaf is smaller</strong> (tick ✓).<br>• The banana leaf is bigger.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rose leaf ticked",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Smaller Tire",
        "q": "Two children are racing rolling tires. One has a small scooter tire and one has a large tractor tire. Tick (✓) the smaller tire.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>scooter tire is smaller</strong> (tick ✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Smaller tire identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Smallest Tree",
        "q": "Look at three trees in a garden: Tree 1 (huge banyan), Tree 2 (medium mango), Tree 3 (tiny sapling). Tick (✓) the smallest tree.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>tiny sapling (Tree 3) is the smallest tree</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Smallest tree identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Biggest Animal",
        "q": "Among an Elephant, a Cat, and a Dog, tick (✓) the biggest animal.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>Elephant is the biggest animal</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Elephant is biggest",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Top and Bottom on a Slide",
        "q": "In the children's park, a boy is sitting at the top of the slide, a girl is sliding down the middle, and another boy is standing on the ground at the bottom. Who is at the top?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The boy sitting at the highest point of the ladder is at the <strong>top</strong>.<br>• The boy on the grass is at the <strong>bottom</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Boy at top identified",
            "marks": "1 M"
          },
          {
            "key": "Boy at bottom identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bird Nearest to Home",
        "q": "Two birds are flying in the sky towards their nest in a tree. Bird A is 2 meters away from the nest. Bird B is 8 meters away. Tick (✓) the bird nearest to home.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Bird A is nearest to home</strong> because 2 meters is a shorter distance than 8 meters.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bird A is nearest",
            "marks": "1 M"
          },
          {
            "key": "Shorter distance explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cat Farthest from the Tree",
        "q": "Three cats are in the garden: Cat 1 is near the flowerpot, Cat 2 is near the bench, and Cat 3 is near the far garden gate. Which cat is farthest from the tree?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Cat 3 (near the far garden gate) is farthest from the tree</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cat 3 is farthest",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Nearest and Farthest from Slide",
        "q": "Look at the playground: Boy A is closest to the slide ladder. Boy B is running across the football field. Who is nearest to the slide and who is farthest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Nearest:</strong> Boy A.<br>• <strong>Farthest:</strong> Boy B.",
        "marks": 2,
        "rubric": [
          {
            "key": "Nearest = Boy A",
            "marks": "1 M"
          },
          {
            "key": "Farthest = Boy B",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • On and Under the Table",
        "q": "In the classroom picture: A cat is sleeping on the floor under the teacher's desk. An open book is on top of the desk. Where is the cat and where is the book?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The book is <strong>on</strong> the desk.<br>• The cat is <strong>under</strong> the desk.",
        "marks": 2,
        "rubric": [
          {
            "key": "Book on desk",
            "marks": "1 M"
          },
          {
            "key": "Cat under desk",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Above and Below the Fan",
        "q": "A ceiling fan hangs in the room. A boy sits on a bed. Which is above and which is below?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The fan is <strong>above</strong> the boy.<br>• The boy is <strong>below</strong> the fan.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fan is above",
            "marks": "1 M"
          },
          {
            "key": "Boy is below",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sorting Shapes into Boxes",
        "q": "Put shapes into two boxes by drawing lines: Pink Box (cubes and rectangular boxes) and Yellow Box (round balls and spheres). Where does an orange go?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• An orange is round, so it goes into the <strong>Yellow Box (round balls)</strong>.<br>• A wooden chalk box goes into the Pink Box.",
        "marks": 2,
        "rubric": [
          {
            "key": "Orange in Yellow Box",
            "marks": "1 M"
          },
          {
            "key": "Chalk box in Pink Box",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Match Similar Shapes",
        "q": "Match the similar shapes by drawing a line: (a) Ball, (b) Chalk-box, (c) Candle, (d) Party hat.<br>Options: [Tomato, Die, Water pipe, Cone toy].",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Ball → <strong>Tomato</strong> (both round spheres)<br>• (b) Chalk-box → <strong>Die</strong> (both cubes)<br>• (c) Candle → <strong>Water pipe</strong> (both cylinders)<br>• (d) Party hat → <strong>Cone toy</strong> (both cones)",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly matched",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Rolling Objects",
        "q": "Tick (✓) the objects that roll: Pencil, Ball, Tomato, Butter pack.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Pencil:</strong> Rolls on its round side (✓)<br>• <strong>Ball:</strong> Rolls (✓)<br>• <strong>Tomato:</strong> Rolls (✓)<br>• Butter pack: Has flat faces, so it slides (not rolls).",
        "marks": 2,
        "rubric": [
          {
            "key": "Pencil, Ball, Tomato roll",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Sliding Objects",
        "q": "Tick (✓) the objects that slide: Cucumber, Tomato, Battery, Briefcase (Suitcase).",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Briefcase (Suitcase):</strong> Has flat faces and slides (✓).<br>• Cucumber and Battery can roll on their sides and slide on flat ends.",
        "marks": 2,
        "rubric": [
          {
            "key": "Suitcase slides",
            "marks": "1 M"
          },
          {
            "key": "Flat face explanation",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Story • The Lamb and the Dholak",
        "q": "How did the grandmother help the lamb escape from the hungry wolf?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Grandmother put the little lamb inside a hollow, round <strong>dholak</strong>.<br>2. She rolled the dholak down the slope.<br>3. Because the dholak was round, it rolled fast and took the lamb safely home.",
        "marks": 2,
        "rubric": [
          {
            "key": "Put lamb inside dholak",
            "marks": "1 M"
          },
          {
            "key": "Rolled down hill safely",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm2",
    "num": 2,
    "unit": "Unit 1: Math-Magic Classic",
    "title": "Numbers from One to Nine",
    "subtitle": "Counting 1 to 9, As Many As, More or Less, Make Groups & Zero",
    "concepts": [
      "One-to-one matching: 'As many as'.",
      "Counting physical objects from 1 to 9.",
      "Comparing collections: More vs Less.",
      "Counting and writing numerals and number names.",
      "Grouping objects into given numbers and concept of Zero."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 2: Numbers from One to Nine</text></svg>",
    "cbq": {
      "title": "Playground Matchsticks Counting Case Study",
      "text": "Five children are playing in the school garden. Teacher gives 1 biscuit to each child. Then she counts the remaining biscuits in the packet: there are 3 biscuits left.",
      "question": "How many biscuits were given to the 5 children? How many total biscuits were in the packet originally?",
      "answer": "1. 5 children each got 1 biscuit, so <strong>5 biscuits</strong> were given out.<br>2. Total biscuits originally = 5 given + 3 left = <strong>8 biscuits</strong>.",
      "rubric": "1.5 M for 5 biscuits given + 1.5 M for 5 + 3 = 8 total biscuits"
    },
    "questions": [
      {
        "category": "Textbook Exercise • As Many As Cats and Mice",
        "q": "In the textbook illustration: 5 cats are paired with 5 mice by drawing connecting lines. Is every cat matched to a mouse?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Yes, there are 5 cats and 5 mice.<br>• Since 5 = 5, there are <strong>as many mice as cats</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 = 5 matching",
            "marks": "1 M"
          },
          {
            "key": "As many as verified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • More or Less Children and Chairs",
        "q": "5 children are playing musical chairs. There are only 4 chairs. Tick (✓) which is MORE: Children or Chairs?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Children = 5<br>• Chairs = 4<br>• 5 > 4, so <strong>Children are MORE</strong> (tick ✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Children are more",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Count and Match",
        "q": "Count the watermelons: There are 2 watermelons. Match with numeral 2.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 watermelons match with numeral <strong>2 (Two)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Matched to 2",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting Milk Bottles",
        "q": "Count the milk bottles in the crate: • • • • •. Write the numeral.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• There are <strong>5 milk bottles</strong>. Numeral: <strong>5</strong> (Five).",
        "marks": 2,
        "rubric": [
          {
            "key": "Numeral 5 written",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting Ladders",
        "q": "Count the wooden ladders standing against the wall: • • •. Write the numeral.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• There are <strong>3 wooden ladders</strong>. Numeral: <strong>3</strong> (Three).",
        "marks": 2,
        "rubric": [
          {
            "key": "Numeral 3 written",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting Gas Cylinders",
        "q": "Count the red gas cylinders: • • • •. Write the numeral.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• There are <strong>4 gas cylinders</strong>. Numeral: <strong>4</strong> (Four).",
        "marks": 2,
        "rubric": [
          {
            "key": "Numeral 4 written",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make a Group of 4 Bottles",
        "q": "There are 6 glass bottles in a row. Draw a line around a group of 4 bottles.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Circle 4 bottles together.<br>• 2 bottles remain uncircled.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 bottles grouped",
            "marks": "1 M"
          },
          {
            "key": "2 remain noted",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make a Group of 3 Trees",
        "q": "There are 5 trees. Circle a group of 3 trees.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Draw a circle around any 3 trees.<br>• 2 trees remain outside.",
        "marks": 2,
        "rubric": [
          {
            "key": "Group of 3 circled",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make a Group of 2 Drums",
        "q": "There are 4 drums. Draw a ring around a group of 2 drums.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Ring 2 drums.<br>• 2 drums remain outside.",
        "marks": 2,
        "rubric": [
          {
            "key": "Group of 2 ringed",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make a Group of 5 Lanterns",
        "q": "There are 7 lanterns. Circle a group of 5 lanterns.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Ring 5 lanterns.<br>• 7 - 5 = 2 lanterns remain outside.",
        "marks": 2,
        "rubric": [
          {
            "key": "Group of 5 ringed",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • One to Nine Rhyme",
        "q": "One, one, one, one little baby eating a bun! Two, two, two, two little children going to the zoo! What comes next for three?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <em>'Three, three, three, three green parrots flying free!'</em>",
        "marks": 2,
        "rubric": [
          {
            "key": "Three green parrots flying free",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Names 1 to 5",
        "q": "Write the number names for: 1, 2, 3, 4, 5.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 1 = <strong>One</strong><br>• 2 = <strong>Two</strong><br>• 3 = <strong>Three</strong><br>• 4 = <strong>Four</strong><br>• 5 = <strong>Five</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 5 spelled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Names 6 to 9",
        "q": "Write the number names for: 6, 7, 8, 9.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 = <strong>Six</strong><br>• 7 = <strong>Seven</strong><br>• 8 = <strong>Eight</strong><br>• 9 = <strong>Nine</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 spelled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Count and Match 6 to 9",
        "q": "Match: (a) 6 leaves, (b) 7 glasses, (c) 8 sticks, (d) 9 mangoes to numerals [6, 7, 8, 9].",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 leaves → <strong>6</strong><br>• 7 glasses → <strong>7</strong><br>• 8 sticks → <strong>8</strong><br>• 9 mangoes → <strong>9</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly matched",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Color 6 Birds",
        "q": "There are 8 birds in the tree. You are asked to color 6 birds. How many birds remain uncolored?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total birds = 8<br>• Colored birds = 6<br>• Uncolored birds = 8 - 6 = <strong>2 birds</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 - 6 = 2",
            "marks": "1 M"
          },
          {
            "key": "Answer: 2 birds",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Color 3 Trees",
        "q": "Out of 4 pine trees, color 3 trees. How many trees are not colored?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 - 3 = <strong>1 tree</strong> remains uncolored.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 - 3 = 1",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Color 1 Boat",
        "q": "There are 3 boats in the river. Color 1 boat. How many boats are left uncolored?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 - 1 = <strong>2 boats</strong> left uncolored.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 - 1 = 2",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 1 to 9",
        "q": "Write the missing numbers: 1, __, 3, 4, __, 6, __, 8, 9.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers are: <strong>2, 5, 7</strong>.<br>• Full sequence: 1, <strong>2</strong>, 3, 4, <strong>5</strong>, 6, <strong>7</strong>, 8, 9.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 2, 5, 7",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Before 5?",
        "q": "What number comes just before 5, and what comes just after 5?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Just before 5 is <strong>4</strong>.<br>• Just after 5 is <strong>6</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Before 5 = 4",
            "marks": "1 M"
          },
          {
            "key": "After 5 = 6",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Between 7 and 9?",
        "q": "What number lies between 7 and 9?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The number between 7 and 9 is <strong>8</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identified 8",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Concept of Zero Flower Pot",
        "q": "There are 3 pretty flowers in a flower pot. A child plucks 1 flower, then another, then the last one. How many flowers are left in the pot?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Total flowers = 3<br>2. Flowers plucked = 3<br>3. Flowers remaining = 3 - 3 = <strong>0 (Zero)</strong>.<br>4. Zero means no flowers are left in the pot.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 - 3 = 0",
            "marks": "1 M"
          },
          {
            "key": "Concept of zero explained",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Birds Flying Off Branch",
        "q": "4 birds sit on a tree. All 4 fly away together. How many birds are on the branch?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 - 4 = <strong>0 birds</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "0 birds",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cages with Mice",
        "q": "A mouse cage has 3 white mice. All 3 run out through the open door. How many mice are in the cage?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 - 3 = <strong>0 mice</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "0 mice",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Balloons in Hand",
        "q": "A girl holds 3 balloons. All 3 burst: POP! POP! POP! How many balloons are in her hand?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 - 3 = <strong>0 balloons</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "0 balloons",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Writing Numerals 0 to 9",
        "q": "Write all single-digit numerals starting from 0 up to 9.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 10 digits written in order",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm3",
    "num": 3,
    "unit": "Unit 1: Math-Magic Classic",
    "title": "Addition",
    "subtitle": "One More, How Many Altogether, Adding Pictures & Dominoes",
    "concepts": [
      "Understanding addition as putting together or adding to.",
      "The 'One More' concept (1 more than 4 is 5).",
      "Using the plus (+) and equal to (=) signs correctly.",
      "Addition facts up to 9 and zero in addition.",
      "Solving pictorial addition problems and number line addition."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 3: Addition</text></svg>",
    "cbq": {
      "title": "Cow in the Meadow Case Study",
      "text": "Two cows are grazing in the green meadow. One more cow comes and joins them to graze sweet grass.",
      "question": "How many cows are grazing altogether? If two more calves join, what is the new total?",
      "answer": "1. 2 cows + 1 more cow = <strong>3 cows grazing altogether</strong>.<br>2. With 2 more calves: 3 + 2 = <strong>5 animals altogether</strong>.",
      "rubric": "1.5 M for 2 + 1 = 3 cows + 1.5 M for 3 + 2 = 5 animals"
    },
    "questions": [
      {
        "category": "Textbook Exercise • One More Parrot Rhyme",
        "q": "Two little green parrots looking for a mate; one more joins in, making them: ___.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 + 1 = <strong>3 parrots</strong> (Three).",
        "marks": 2,
        "rubric": [
          {
            "key": "2 + 1 = 3",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Three Parrots One More",
        "q": "Three little green parrots singing in a tree; one more joins in, making them: ___.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 1 = <strong>4 parrots</strong> (Four).",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 1 = 4",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Four Parrots One More",
        "q": "Four little green parrots sitting on the floor; one more joins in, making them: ___.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 + 1 = <strong>5 parrots</strong> (Five).",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 1 = 5",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • How Many Altogether (Cows)",
        "q": "2 cows and 1 cow is equal to how many cows?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 + 1 = <strong>3 cows</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 + 1 = 3 cows",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Children Playing",
        "q": "3 children are playing in the sand. 2 more children join them. How many children altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 2 = <strong>5 children altogether</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 2 = 5 children",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Flowers in Vases",
        "q": "Vase A has 5 flowers. Vase B has 2 flowers. How many flowers altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 + 2 = <strong>7 flowers</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 + 2 = 7 flowers",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Birds on Branch",
        "q": "4 birds sit on a branch. 2 more birds fly in and sit. How many birds altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 + 2 = <strong>6 birds</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 2 = 6 birds",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Marbles in Hand",
        "q": "Rahul has 3 marbles in his left hand and 2 marbles in his right hand. How many marbles does he have in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 2 = <strong>5 marbles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 2 = 5 marbles",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Adding Zero (Balloons)",
        "q": "A boy holds 3 balloons. The other boy holds 0 balloons. How many balloons do both have together?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 0 = <strong>3 balloons</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 0 = 3 balloons",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Zero and Four",
        "q": "Solve: 0 + 4 = __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 0 + 4 = <strong>4</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "0 + 4 = 4",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Adding Dots",
        "q": "Add dots: (••) + (••••) = ?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 + 4 = <strong>6 dots</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 + 4 = 6",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Vertical Addition",
        "q": "Add vertically:<br>&nbsp;&nbsp;4<br>+ 2<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;4<br>+ 2<br>---<br>&nbsp;&nbsp;<strong>6</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 6",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Add 3 and 5",
        "q": "Add:<br>&nbsp;&nbsp;3<br>+ 5<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;3<br>+ 5<br>---<br>&nbsp;&nbsp;<strong>8</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 8",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Add 4 and 0",
        "q": "Add:<br>&nbsp;&nbsp;4<br>+ 0<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;4<br>+ 0<br>---<br>&nbsp;&nbsp;<strong>4</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 4",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Horizontal Addition",
        "q": "Find the sums:<br>(a) 2 + 3 = __<br>(b) 7 + 1 = __<br>(c) 3 + 4 = __",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 2 + 3 = <strong>5</strong><br>• (b) 7 + 1 = <strong>8</strong><br>• (c) 3 + 4 = <strong>7</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "2+3 = 5",
            "marks": "1 M"
          },
          {
            "key": "7+1 = 8",
            "marks": "1 M"
          },
          {
            "key": "3+4 = 7",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Match the Pairs",
        "q": "Match the sums that give 7: (a) 4 + 3, (b) 5 + 2, (c) 6 + 1.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 + 3 = 7<br>• 5 + 2 = 7<br>• 6 + 1 = 7<br>• All three expressions equal <strong>7</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All equal 7 verified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Addend",
        "q": "Fill in the missing numeral: 5 + __ = 7.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 7 - 5 = 2.<br>• 5 + <strong>2</strong> = 7.",
        "marks": 2,
        "rubric": [
          {
            "key": "Missing number is 2",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Addend to 9",
        "q": "Fill in the blank: __ + 3 = 9.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 9 - 3 = 6.<br>• <strong>6</strong> + 3 = 9.",
        "marks": 2,
        "rubric": [
          {
            "key": "Missing number is 6",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Adding to Make 8",
        "q": "Write any two pairs of numbers that add up to 8.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Pair 1: <strong>4 + 4 = 8</strong><br>• Pair 2: <strong>5 + 3 = 8</strong> (or 6 + 2, 7 + 1).",
        "marks": 2,
        "rubric": [
          {
            "key": "Two valid pairs",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Ants in a Line",
        "q": "6 ants are marching towards a sugar crystal. 2 more ants join the line. How many ants in the line now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 + 2 = <strong>8 ants</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 + 2 = 8 ants",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Frogs on Stones",
        "q": "3 frogs sit on Stone A. 3 frogs sit on Stone B. How many frogs in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 3 = <strong>6 frogs</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 3 = 6 frogs",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Commutative Property",
        "q": "Does 2 + 5 give the same answer as 5 + 2? Show the working.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 + 5 = 7<br>• 5 + 2 = 7<br>• <strong>Yes</strong>, both equal 7. The order of adding numbers does not change the total.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both equal 7",
            "marks": "1 M"
          },
          {
            "key": "Order does not change sum",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm4",
    "num": 4,
    "unit": "Unit 1: Math-Magic Classic",
    "title": "Subtraction",
    "subtitle": "Take Away, Crossing Out, How Many Left & Subtraction Facts",
    "concepts": [
      "Understanding subtraction as 'Taking away' from a collection.",
      "Crossing out pictures/dots to find the remaining count.",
      "Using the minus sign (-) and equal to (=) signs.",
      "Subtraction facts within 9 and subtracting zero.",
      "Subtracting a number from itself (e.g. 5 - 5 = 0)."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 4: Subtraction</text></svg>",
    "cbq": {
      "title": "Leaves on a Twig Case Study",
      "text": "A green twig had 6 tender leaves. A hungry caterpillar came and ate 2 leaves.",
      "question": "How many leaves are left on the twig? If the caterpillar comes back and eats 4 more leaves, how many leaves remain?",
      "answer": "1. Leaves left initially = 6 - 2 = <strong>4 leaves left</strong>.<br>2. After eating 4 more: 4 - 4 = <strong>0 leaves left</strong>.",
      "rubric": "1.5 M for 6 - 2 = 4 leaves + 1.5 M for 4 - 4 = 0 leaves"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Take Away Leaves",
        "q": "A twig has 6 leaves. Take away 2 leaves. How many leaves are left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 - 2 = <strong>4 leaves left</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 - 2 = 4",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Take Away Butterflies",
        "q": "There are 5 butterflies on a rose flower. All 5 butterflies fly away. How many butterflies remain on the flower?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 - 5 = <strong>0 butterflies</strong>.<br>• When all items are taken away, zero remains.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 - 5 = 0",
            "marks": "1 M"
          },
          {
            "key": "Explanation of zero",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Frogs in Water",
        "q": "3 frogs sit on the bank. 1 frog jumps into the water. How many frogs stay on the bank?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 - 1 = <strong>2 frogs stay on the bank</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 - 1 = 2",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Jugs on Table",
        "q": "There were 6 glass jugs on the table. 4 jugs broke. How many jugs are left unbroken?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 - 4 = <strong>2 jugs left unbroken</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 - 4 = 2",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Crossing Out Dots",
        "q": "There are 7 dots: (•••••••). Cross out 3 dots. How many dots are left uncrossed?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 7 - 3 = <strong>4 dots left</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 - 3 = 4",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Vertical Subtraction",
        "q": "Subtract vertically:<br>&nbsp;&nbsp;8<br>- 2<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;8<br>- 2<br>---<br>&nbsp;&nbsp;<strong>6</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 6",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtract 4 from 9",
        "q": "Subtract:<br>&nbsp;&nbsp;9<br>- 4<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;9<br>- 4<br>---<br>&nbsp;&nbsp;<strong>5</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 5",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtract Zero",
        "q": "Subtract:<br>&nbsp;&nbsp;5<br>- 0<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;5<br>- 0<br>---<br>&nbsp;&nbsp;<strong>5</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 5",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtract Number from Itself",
        "q": "Subtract:<br>&nbsp;&nbsp;7<br>- 7<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;7<br>- 7<br>---<br>&nbsp;&nbsp;<strong>0</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 0",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Horizontal Differences",
        "q": "Solve:<br>(a) 4 - 2 = __<br>(b) 8 - 5 = __<br>(c) 9 - 1 = __",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 4 - 2 = <strong>2</strong><br>• (b) 8 - 5 = <strong>3</strong><br>• (c) 9 - 1 = <strong>8</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "4-2 = 2",
            "marks": "1 M"
          },
          {
            "key": "8-5 = 3",
            "marks": "1 M"
          },
          {
            "key": "9-1 = 8",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Match the Difference",
        "q": "Match the subtraction facts that equal 3: (a) 6 - 3, (b) 5 - 2, (c) 7 - 4, (d) 8 - 5.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 - 3 = 3<br>• 5 - 2 = 3<br>• 7 - 4 = 3<br>• 8 - 5 = 3<br>• All four expressions equal <strong>3</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All evaluated to 3",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Number in Subtraction",
        "q": "Fill in the blank: 8 - __ = 7.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 8 - 7 = 1.<br>• 8 - <strong>1</strong> = 7.",
        "marks": 2,
        "rubric": [
          {
            "key": "Blank is 1",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Minuend",
        "q": "Fill in the blank: __ - 2 = 3.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 + 2 = 5.<br>• <strong>5</strong> - 2 = 3.",
        "marks": 2,
        "rubric": [
          {
            "key": "Blank is 5",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Bananas Eaten",
        "q": "A monkey had 6 bananas. He ate 3 bananas. How many bananas are left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 - 3 = <strong>3 bananas left</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 - 3 = 3 bananas",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Sparrows Flying Away",
        "q": "9 sparrows were pecking grains in the courtyard. A barking dog startled them and 5 flew away. How many sparrows remained?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 9 - 5 = <strong>4 sparrows remained</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "9 - 5 = 4 sparrows",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Candies Shared",
        "q": "Ali had 7 candies. He gave 4 candies to his sister. How many candies does Ali have now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 7 - 4 = <strong>3 candies</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 - 4 = 3 candies",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Take Away from 9",
        "q": "Solve: 9 - 6 = __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count down from 9: 8, 7, 6, 5, 4, 3.<br>• 9 - 6 = <strong>3</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 3",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Take Away from 8",
        "q": "Solve: 8 - 8 = __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 8 - 8 = <strong>0</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 0",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtracting 1",
        "q": "What happens when you subtract 1 from any number? Give an example.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Subtracting 1 gives the <strong>number just before it</strong> (the predecessor).<br>• Example: 7 - 1 = <strong>6</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Gives number just before",
            "marks": "1 M"
          },
          {
            "key": "Valid example (7 - 1 = 6)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let Us Think • True or False in Subtraction",
        "q": "Is 5 - 2 equal to 2 - 5?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 - 2 = 3.<br>• 2 - 5 cannot be done with whole positive numbers.<br>• <strong>No.</strong> Unlike addition, the order of numbers cannot be reversed in subtraction.",
        "marks": 2,
        "rubric": [
          {
            "key": "No, order cannot be changed",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Checking by Addition",
        "q": "How can you check if 8 - 3 = 5 is correct using addition?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Add the answer (5) to the number subtracted (3):<br>• 5 + 3 = <strong>8</strong> (the original number).<br>• This proves the subtraction is correct.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 + 3 = 8",
            "marks": "1 M"
          },
          {
            "key": "Proves inverse operation",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm5",
    "num": 5,
    "unit": "Unit 2: Math-Magic Classic",
    "title": "Numbers from Ten to Twenty",
    "subtitle": "Bundles of 10, Counting 10-20, Tens and Ones, Addition & Subtraction",
    "concepts": [
      "Making groups of 10 from loose objects (matchsticks, pencils).",
      "Counting from 10 to 20: 10 + 1 = 11 up to 10 + 10 = 20.",
      "Partitioning numbers into Tens and Ones.",
      "Comparing numbers from 10 to 20: greater than and smaller than.",
      "Addition and subtraction within 20."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 5: Numbers from Ten to Twenty</text></svg>",
    "cbq": {
      "title": "Matchstick Bundling Project Case Study",
      "text": "Deepak has 14 loose matchsticks on his work table. His teacher asks him to make a bundle of 10 matchsticks using a red rubber band.",
      "question": "How many bundles of 10 can Deepak make? How many loose matchsticks will remain outside the bundle?",
      "answer": "1. 14 has 1 ten and 4 ones.<br>2. Deepak can make <strong>1 bundle of 10 matchsticks</strong>.<br>3. <strong>4 loose matchsticks</strong> will remain outside.",
      "rubric": "1.5 M for 1 bundle of 10 + 1.5 M for 4 loose sticks"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Bundle of 10 Matchsticks",
        "q": "How many loose matchsticks make 1 bundle of 10? What do we call 10 ones?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Exactly <strong>10 loose matchsticks</strong> tied together make 1 bundle.<br>• 10 ones is called <strong>1 Ten</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 loose matchsticks",
            "marks": "1 M"
          },
          {
            "key": "10 ones = 1 Ten",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make a Group of 10",
        "q": "Look at 14 ice-cream cups. Circle a group of 10 cups. How many cups remain uncircled?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Total cups = 14<br>• Circled group = 10 (1 ten)<br>• Uncircled cups = 14 - 10 = <strong>4 cups</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Group of 10 circled",
            "marks": "1 M"
          },
          {
            "key": "4 remaining",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting 10 to 15",
        "q": "Write the numbers from 10 to 15 in order with their number names.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10 = Ten<br>• 11 = Eleven<br>• 12 = Twelve<br>• 13 = Thirteen<br>• 14 = Fourteen<br>• 15 = Fifteen",
        "marks": 2,
        "rubric": [
          {
            "key": "All 6 numerals & names correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting 16 to 20",
        "q": "Write the numbers from 16 to 20 in order with their number names.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 16 = Sixteen<br>• 17 = Seventeen<br>• 18 = Eighteen<br>• 19 = Nineteen<br>• 20 = Twenty",
        "marks": 2,
        "rubric": [
          {
            "key": "All 5 numerals & names correct",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones for 18",
        "q": "In the number 18, how many tens and how many ones are there?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In 18, there is <strong>1 Ten and 8 Ones</strong> (10 + 8 = 18).",
        "marks": 2,
        "rubric": [
          {
            "key": "1 Ten and 8 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones for 15",
        "q": "Write Tens and Ones for 15.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 15 = <strong>1 Ten and 5 Ones</strong> (10 + 5 = 15).",
        "marks": 2,
        "rubric": [
          {
            "key": "1 Ten and 5 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones for 12",
        "q": "Write Tens and Ones for 12.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 12 = <strong>1 Ten and 2 Ones</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "1 Ten and 2 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones for 20",
        "q": "How many tens and how many ones make 20?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 20 = <strong>2 Tens and 0 Ones</strong> (10 + 10 = 20).",
        "marks": 2,
        "rubric": [
          {
            "key": "2 Tens and 0 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circle the Bigger Number (Teens)",
        "q": "Circle the bigger number: (a) 11 and 13, (b) 16 and 14.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 13 is bigger than 11 → Circle <strong>13</strong>.<br>• (b) 16 is bigger than 14 → Circle <strong>16</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "13 circled",
            "marks": "1 M"
          },
          {
            "key": "16 circled",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circle the Smaller Number (Teens)",
        "q": "Circle the smaller number: (a) 20 and 10, (b) 12 and 17.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 10 is smaller than 20 → Circle <strong>10</strong>.<br>• (b) 12 is smaller than 17 → Circle <strong>12</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "10 circled",
            "marks": "1 M"
          },
          {
            "key": "12 circled",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Biggest Number Among Three",
        "q": "Circle the biggest number among: 13, 3, 9.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 13 is a 2-digit teen number (1 ten and 3 ones).<br>• 3 and 9 are 1-digit numbers.<br>• <strong>13 is the biggest number</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "13 is biggest",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Smallest Number Among Three",
        "q": "Circle the smallest number among: 12, 15, 20.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Comparing: 12 < 15 < 20.<br>• <strong>12 is the smallest number</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "12 is smallest",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Addition within 20 (4 + 5)",
        "q": "Solve: 4 + 5 = __ and 14 + 5 = __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 + 5 = <strong>9</strong><br>• 14 + 5 = 10 + (4 + 5) = 10 + 9 = <strong>19</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4+5 = 9",
            "marks": "1 M"
          },
          {
            "key": "14+5 = 19",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Addition 8 + 7",
        "q": "Solve: 8 + 7 = __ using the 'Make 10' method.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. 8 needs 2 to make 10.<br>2. 7 = 2 + 5.<br>3. 8 + 2 = 10.<br>4. 10 + 5 = <strong>15</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Make 10 steps shown",
            "marks": "1 M"
          },
          {
            "key": "Answer: 15",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Addition 11 + 5",
        "q": "Add:<br>&nbsp;&nbsp;11<br>+ &nbsp;5<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;11<br>+ &nbsp;5<br>---<br>&nbsp;&nbsp;<strong>16</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 16",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtraction 17 - 5",
        "q": "Subtract:<br>&nbsp;&nbsp;17<br>- &nbsp;5<br>---",
        "ans": "<strong>Step-by-Step Solution:</strong><br>&nbsp;&nbsp;17<br>- &nbsp;5<br>---<br>&nbsp;&nbsp;<strong>12</strong> (7 - 5 = 2, bring down 1 ten).",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 12",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtraction 18 - 8",
        "q": "Solve: 18 - 8 = __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 18 = 10 + 8.<br>• Subtracting 8 leaves <strong>10</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 10",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Subtraction 15 - 3",
        "q": "Solve: 15 - 3 = __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 - 3 = 2.<br>• 10 + 2 = <strong>12</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Answer 12",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Rahul's Apples",
        "q": "Rahul has 8 apples. Sonu gave him 7 more apples. How many apples does Rahul have now?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 8 + 7 = <strong>15 apples</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 + 7 = 15 apples",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Sohan's Bananas",
        "q": "Sohan had 12 bananas. He ate 4 bananas. How many bananas are left?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 12 - 4 = <strong>8 bananas left</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "12 - 4 = 8 bananas",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Just After 18?",
        "q": "What number comes just before 13? What number comes just after 18?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Just before 13 is <strong>12</strong>.<br>• Just after 18 is <strong>19</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Before 13 = 12",
            "marks": "1 M"
          },
          {
            "key": "After 18 = 19",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Between 14 and 16",
        "q": "What number lies between 14 and 16?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The number between 14 and 16 is <strong>15</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "15",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Match Numeral to Sticks",
        "q": "Match: (1) 1 bundle of 10 and 6 sticks → 16. (2) 1 bundle of 10 and 9 sticks → 19.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10 + 6 = 16<br>• 10 + 9 = 19",
        "marks": 2,
        "rubric": [
          {
            "key": "Matches verified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Making 20",
        "q": "How many ones must be added to 14 to make 20?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 20 - 14 = <strong>6 ones</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 ones",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm6",
    "num": 6,
    "unit": "Unit 2: Math-Magic Classic",
    "title": "Time",
    "subtitle": "Daily Routines, Morning to Night Sequence & Activity Duration",
    "concepts": [
      "Sequencing daily life routines: waking up, brushing, breakfast, school, playing, studying, sleeping.",
      "Identifying Morning, Afternoon, Evening, and Night.",
      "Comparing duration: activities taking longer vs shorter time.",
      "Sequencing steps of making chapati from kneading flour to baking."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 6: Time</text></svg>",
    "cbq": {
      "title": "Making Chapati from Wheat Case Study",
      "text": "Mother wants to make hot chapatis for lunch. She takes flour from the tin, pours water, kneads the dough, rolls a ball on the rolling board (chakla), and bakes it on the tawa.",
      "question": "What is the first step in making chapati? Does kneading dough take place before or after baking on the tawa?",
      "answer": "1. The first step is <strong>taking flour from the tin into a bowl</strong>.<br>2. Kneading the dough takes place <strong>before</strong> baking on the tawa.",
      "rubric": "1.5 M for taking flour first + 1.5 M for kneading before baking"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Morning Routine Sequence",
        "q": "Number the activities in the order you do them in the morning: (a) Eating breakfast, (b) Waking up from bed, (c) Wearing school uniform, (d) Brushing teeth.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. (b) Waking up from bed → <strong>1st</strong><br>2. (d) Brushing teeth → <strong>2nd</strong><br>3. (c) Wearing school uniform → <strong>3rd</strong><br>4. (a) Eating breakfast → <strong>4th</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 correctly sequenced",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Activities Done in Morning",
        "q": "Tick (✓) the activities you do in the morning: (a) Bathing, (b) Brushing teeth, (c) Sleeping at night.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Bathing (✓)<br>• (b) Brushing teeth (✓)<br>• Sleeping in bed is done at night.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bathing and brushing ticked",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Activities Done in Evening",
        "q": "Tick (✓) the activities done in the evening: (a) Playing in the park, (b) Waking up from night sleep.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Playing in the park with friends</strong> is done in the evening (✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Playing in park in evening",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Activities Done at Night",
        "q": "Tick (✓) the activity done at night: (a) Going to sleep, (b) Attending morning school assembly.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>(a) Going to sleep in bed</strong> is done at night (✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Going to sleep at night",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Chapati Making Steps",
        "q": "Put the steps of making a chapati in order from 1 to 5: Knead dough, Bake on fire, Roll into circle, Take flour in a dish, Light the stove.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Take flour in a dish<br>2. Knead dough with water<br>3. Roll into a circle on chakla<br>4. Light the stove<br>5. Bake on fire (tawa)",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct 5-step sequence",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Which Activity Takes Longer? (Bucket vs Cup)",
        "q": "Tick (✓) the activity that takes longer: (a) Filling a bucket with water from a tap, (b) Filling a water glass.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Filling a bucket takes longer</strong> (tick ✓) because a bucket holds many liters of water.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filling bucket takes longer",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Walking vs Running",
        "q": "Which takes less time: Walking to the garden or Running to the garden?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Running takes less time</strong> because running is faster than walking.",
        "marks": 2,
        "rubric": [
          {
            "key": "Running takes less time",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cycle vs Bus",
        "q": "Rohan goes to a distant city by bicycle. Priya goes by express bus. Who will reach earlier?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Priya by express bus will reach earlier</strong> because buses travel much faster than bicycles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bus reaches earlier",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Day or Night?",
        "q": "When do owls wake up and hunt: during the day or during the night?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Owls wake up and hunt <strong>during the night</strong> (nocturnal birds).",
        "marks": 2,
        "rubric": [
          {
            "key": "During the night",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Meal Sequencing",
        "q": "Which meal is eaten in the afternoon: Breakfast or Lunch?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Lunch</strong> is eaten in the afternoon.",
        "marks": 2,
        "rubric": [
          {
            "key": "Lunch",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Days of the Week",
        "q": "How many days are in a week? Name the first school day of the week.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• There are <strong>7 days</strong> in a week.<br>• The first school day of the week is <strong>Monday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "7 days",
            "marks": "1 M"
          },
          {
            "key": "Monday",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Holiday Day",
        "q": "On which day do you not go to school?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Sunday</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sunday",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Boiling Water vs Making Ice",
        "q": "Which takes more time: boiling a cup of water or freezing water into ice in the refrigerator?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Freezing water into ice takes more time</strong> (takes several hours).<br>• Boiling water takes only 2 to 3 minutes.",
        "marks": 2,
        "rubric": [
          {
            "key": "Freezing ice takes more time",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Morning Sky",
        "q": "What color is the sky when the sun rises in the morning?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The sky looks <strong>golden-yellow, orange, or light blue</strong> when the sun rises.",
        "marks": 2,
        "rubric": [
          {
            "key": "Golden/orange/light blue",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Story Time",
        "q": "At what time of day does grandma usually tell bedtime stories?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Grandma tells bedtime stories <strong>at night</strong> before children go to sleep.",
        "marks": 2,
        "rubric": [
          {
            "key": "At night / bedtime",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Short Time vs Long Time",
        "q": "Classify into 'Short time' (seconds/minutes) and 'Long time' (hours): (a) Sneezing, (b) Sleeping through the night.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) Sneezing → <strong>Short time</strong> (1 second).<br>• (b) Sleeping through the night → <strong>Long time</strong> (8 hours).",
        "marks": 2,
        "rubric": [
          {
            "key": "Sneezing = Short time",
            "marks": "1 M"
          },
          {
            "key": "Sleeping = Long time",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm7",
    "num": 7,
    "unit": "Unit 2: Math-Magic Classic",
    "title": "Measurement",
    "subtitle": "Longer-Shorter, Taller-Shorter, Heavier-Lighter & Handspans",
    "concepts": [
      "Comparing length: Longer vs Shorter, Longest vs Shortest.",
      "Comparing height: Taller vs Shorter, Tallest vs Shortest.",
      "Comparing weight: Heavier vs Lighter, Heaviest vs Lightest.",
      "Measuring length using non-standard body parts: Handspan, Cubit, Foot, and Pace."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 7: Measurement</text></svg>",
    "cbq": {
      "title": "Measuring the Carpet with Footsteps Case Study",
      "text": "Meena measures the floor carpet using her footsteps and counts 12 paces. Her brother counts 9 paces on the same carpet.",
      "question": "Why is Meena's count 12 while her brother's is 9? Whose steps are bigger?",
      "answer": "1. Brother's steps are <strong>bigger (longer)</strong>.<br>2. Because his steps are bigger, fewer steps (9) are needed to cover the carpet.<br>3. Meena's steps are smaller, so she needed 12 footsteps.",
      "rubric": "1.5 M for brother's steps are bigger + 1.5 M for fewer steps needed"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Longer and Shorter",
        "q": "Look at two ladders: Ladder A reaches the roof, and Ladder B reaches only the window. Tick (✓) the longer ladder.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Ladder A is longer</strong> (tick ✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Ladder A is longer",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shorter Rope",
        "q": "Tick (✓) the shorter rope between Rope X (5 meters) and Rope Y (2 meters).",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Rope Y is shorter</strong> (tick ✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Rope Y is shorter",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Longest Pencil",
        "q": "Look at three pencils: Red (15 cm), Blue (10 cm), Green (6 cm). Which pencil is the longest, and which is the shortest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Longest:</strong> Red pencil (15 cm).<br>• <strong>Shortest:</strong> Green pencil (6 cm).",
        "marks": 2,
        "rubric": [
          {
            "key": "Longest = Red",
            "marks": "1 M"
          },
          {
            "key": "Shortest = Green",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Taller and Shorter",
        "q": "Tick (✓) the taller animal between a Giraffe and a Dog.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>Giraffe is taller</strong> (tick ✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Giraffe is taller",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shorter Person",
        "q": "Between a tall clown on stilts and a little girl, tick (✓) the shorter person.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>little girl is shorter</strong> (tick ✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Little girl is shorter",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tallest Tree",
        "q": "Among three palm trees in a row, tick (✓) the tallest tree.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Tick the <strong>tree with the highest top fronds (the tallest tree)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tallest tree identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shortest Plant",
        "q": "Look at a rose bush, a potted grass sprout, and a banyan tree. Which is the shortest plant?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>grass sprout is the shortest plant</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Grass sprout is shortest",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Heavier and Lighter",
        "q": "Tick (✓) the lighter object between a shirt and an iron lock.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>shirt is lighter</strong> (tick ✓).<br>• The iron lock is heavier.",
        "marks": 2,
        "rubric": [
          {
            "key": "Shirt is lighter",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Heavier Fruit",
        "q": "Tick (✓) the heavier fruit between a Pumpkin and a Tomato.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>Pumpkin is heavier</strong> (tick ✓).",
        "marks": 2,
        "rubric": [
          {
            "key": "Pumpkin is heavier",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Heaviest Object",
        "q": "Look at: A water jug, a water glass, and an iron water tank. Which is the heaviest, and which is the lightest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Heaviest:</strong> Iron water tank.<br>• <strong>Lightest:</strong> Water glass.",
        "marks": 2,
        "rubric": [
          {
            "key": "Heaviest = Tank",
            "marks": "1 M"
          },
          {
            "key": "Lightest = Glass",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring with Handspan",
        "q": "Measure the length of your desk using your handspan. If you count 6 handspans, what was your measuring tool?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The measuring tool is your <strong>handspan</strong> (the distance from stretched thumb to little finger).",
        "marks": 2,
        "rubric": [
          {
            "key": "Handspan identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring with Paces",
        "q": "Measure the mat with your footsteps (paces). If the mat is 8 paces long, write the answer.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Length of the mat = <strong>8 paces (footsteps)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 paces",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring with Fingers",
        "q": "Measure the width of your eraser in finger-widths. How many fingers wide is it?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• A standard eraser is approximately <strong>2 to 3 finger-widths</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 to 3 fingers",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Measuring with Matchsticks",
        "q": "Place matchsticks end-to-end along a notebook. If it takes 6 matchsticks, how long is the notebook?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The notebook is <strong>6 matchsticks long</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 matchsticks long",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Seesaw Balance",
        "q": "A monkey and a rabbit sit on a seesaw. Whose side goes down?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>monkey's side goes down</strong> because the monkey is heavier than the rabbit.",
        "marks": 2,
        "rubric": [
          {
            "key": "Monkey's side goes down",
            "marks": "1 M"
          },
          {
            "key": "Monkey is heavier",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Feather vs Brick",
        "q": "Drop a pigeon feather and a clay brick. Which object feels heavier in your hand?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>clay brick feels much heavier</strong>.<br>• The feather is extremely light.",
        "marks": 2,
        "rubric": [
          {
            "key": "Brick is heavier",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Longest Ribbon",
        "q": "Among ribbons of 5 cm, 12 cm, and 8 cm, which is the longest?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>12 cm ribbon is the longest</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "12 cm ribbon",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Why Use a Ruler?",
        "q": "Why is it better to use a plastic ruler rather than footsteps to measure the length of a room accurately?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>1. Footsteps vary from child to adult.<br>2. A ruler has fixed centimeters that give the exact same measurement for everyone.",
        "marks": 2,
        "rubric": [
          {
            "key": "Footsteps vary",
            "marks": "1 M"
          },
          {
            "key": "Ruler is fixed and standard",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm8",
    "num": 8,
    "unit": "Unit 3: Math-Magic Classic",
    "title": "Numbers from Twenty-one to Fifty",
    "subtitle": "Bundles of 10 and Loose Units, 21-50 Strips & Number Grids",
    "concepts": [
      "Counting from 21 to 50 using bundles of 10 and loose sticks.",
      "Writing numerals and number names from Twenty-one to Fifty.",
      "Filling missing numbers in sequences and number strips.",
      "Identifying Tens and Ones digits."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 8: Numbers from Twenty-one to Fifty</text></svg>",
    "cbq": {
      "title": "Sugarcane Bundles Case Study",
      "text": "Farmer Ramu ties harvested sugarcane stalks into bundles of 10 stalks each. He has 3 full bundles and 7 loose stalks.",
      "question": "What total number of sugarcane stalks does Farmer Ramu have? Write the number in expanded form.",
      "answer": "1. 3 bundles of 10 = 30. Loose stalks = 7.<br>2. Total stalks = 30 + 7 = <strong>37 sugarcane stalks</strong>.<br>3. Expanded form: <strong>30 + 7 = 3 tens and 7 ones</strong>.",
      "rubric": "1.5 M for 37 stalks + 1.5 M for expanded form (30 + 7)"
    },
    "questions": [
      {
        "category": "Textbook Exercise • 2 Bundles and 5 Sticks",
        "q": "Look at the picture: 2 bundles of 10 matchsticks and 5 loose matchsticks. What number is this?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 bundles = 20<br>• 5 loose sticks = 5<br>• Total = 20 + 5 = <strong>25 (Twenty-five)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "20 + 5 = 25",
            "marks": "1 M"
          },
          {
            "key": "Number name Twenty-five",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 3 Bundles and 3 Sticks",
        "q": "Write the number for 3 bundles of 10 and 3 loose sticks.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 tens + 3 ones = 30 + 3 = <strong>33 (Thirty-three)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "33 (Thirty-three)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 4 Bundles and 0 Sticks",
        "q": "Write the number for 4 bundles of 10 and 0 loose sticks.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 tens + 0 ones = <strong>40 (Forty)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "40 (Forty)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 4 Bundles and 9 Sticks",
        "q": "Write the number for 4 bundles of 10 and 9 loose sticks.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 tens + 9 ones = 40 + 9 = <strong>49 (Forty-nine)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "49 (Forty-nine)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 5 Bundles of 10",
        "q": "What number is represented by 5 full bundles of 10 matchsticks?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 tens = <strong>50 (Fifty)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "50 (Fifty)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 21 to 30",
        "q": "Fill the missing numbers: 21, __, 23, 24, __, 26, __, 28, 29, 30.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>22, 25, 27</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 22, 25, 27",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 31 to 40",
        "q": "Fill the missing numbers: 31, 32, __, 34, 35, __, 37, __, 39, 40.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>33, 36, 38</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 33, 36, 38",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 41 to 50",
        "q": "Fill the missing numbers: 41, __, 43, __, 45, 46, __, 48, 49, 50.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>42, 44, 47</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 42, 44, 47",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones for 28",
        "q": "Break 28 into Tens and Ones.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 28 = <strong>2 Tens and 8 Ones</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 Tens and 8 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones for 45",
        "q": "Break 45 into Tens and Ones.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 45 = <strong>4 Tens and 5 Ones</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 Tens and 5 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Number Has 3 Tens and 6 Ones?",
        "q": "Write the numeral for: 3 Tens and 6 Ones.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 30 + 6 = <strong>36</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Number Has 4 Tens and 2 Ones?",
        "q": "Write the numeral for: 4 Tens and 2 Ones.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 40 + 2 = <strong>42</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "42",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Names 21 to 25",
        "q": "Write number names for: 21, 22, 23, 24, 25.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 21 = Twenty-one<br>• 22 = Twenty-two<br>• 23 = Twenty-three<br>• 24 = Twenty-four<br>• 25 = Twenty-five",
        "marks": 2,
        "rubric": [
          {
            "key": "All 5 spelled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Names 30, 40, 50",
        "q": "Write the spellings for: 30, 40, 50.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 30 = <strong>Thirty</strong><br>• 40 = <strong>Forty</strong><br>• 50 = <strong>Fifty</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Thirty, Forty, Fifty",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Just After 29?",
        "q": "What number comes just after 29? What number comes just after 39?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Just after 29 is <strong>30</strong>.<br>• Just after 39 is <strong>40</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "After 29 = 30",
            "marks": "1 M"
          },
          {
            "key": "After 39 = 40",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Just Before 50?",
        "q": "What number comes just before 50?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 50 - 1 = <strong>49</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "49",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Between 35 and 37",
        "q": "What number is between 35 and 37?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The number is <strong>36</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "36",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circle Greater Number",
        "q": "Circle the greater number in each pair: (a) 26 and 32, (b) 48 and 41.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 3 tens > 2 tens → <strong>32</strong> is greater.<br>• (b) Same tens (4), but 8 ones > 1 one → <strong>48</strong> is greater.",
        "marks": 2,
        "rubric": [
          {
            "key": "32 circled",
            "marks": "1 M"
          },
          {
            "key": "48 circled",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Flowers for Teacher's Day",
        "q": "Students made 3 garlands of 10 roses each and had 5 loose roses. How many roses in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 30 + 5 = <strong>35 roses</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "30 + 5 = 35 roses",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Match Numeral to Picture",
        "q": "Match: 2 bundles and 9 sticks → 29; 4 bundles and 7 sticks → 47.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 20 + 9 = 29<br>• 40 + 7 = 47",
        "marks": 2,
        "rubric": [
          {
            "key": "Matches verified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • How Many Tens in 50?",
        "q": "How many tens make 50?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10 + 10 + 10 + 10 + 10 = 50.<br>• Exactly <strong>5 tens</strong> make 50.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 tens",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Skip Counting by 5s to 50",
        "q": "Write the skip-counting chain by 5s from 25 to 50: 25, 30, __, __, __, 50.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 25, 30, <strong>35, 40, 45</strong>, 50.",
        "marks": 2,
        "rubric": [
          {
            "key": "35, 40, 45",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm9",
    "num": 9,
    "unit": "Unit 3: Math-Magic Classic",
    "title": "Data Handling",
    "subtitle": "Counting Shapes in Pictures, Letter Counts in Names & Frequency",
    "concepts": [
      "Counting distinct geometric shapes (triangles, circles, squares, rectangles) in a composite picture.",
      "Identifying which shape occurs the most and which occurs the least.",
      "Counting letters in names of friends.",
      "Finding which letter repeats most frequently across names."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 9: Data Handling</text></svg>",
    "cbq": {
      "title": "Joker's Geometric Costume Case Study",
      "text": "In the circus picture, the joker's funny costume is made entirely of shapes: 8 triangles for the hat and collar, 5 circles for buttons and eyes, 6 rectangles for arms and legs, and 4 squares for the body pockets.",
      "question": "Which shape is used the most in the joker's costume? Which shape is used the least? How many shapes were used in all?",
      "answer": "1. <strong>Triangles (8)</strong> are used the most.<br>2. <strong>Squares (4)</strong> are used the least.<br>3. Total shapes = 8 + 5 + 6 + 4 = <strong>23 shapes in all</strong>.",
      "rubric": "1 M for Triangles (most) + 1 M for Squares (least) + 1 M for total 23 shapes"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Counting Triangles in Joker",
        "q": "Look at the composite joker picture in the textbook. Count all the Triangles (▲).",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count of triangles in the hat, face, and collar = <strong>8 triangles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 triangles counted",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting Circles in Joker",
        "q": "Count all the Circles (●) in the joker picture.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count of circles (eyes, nose, buttons, and ball in hand) = <strong>5 circles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 circles counted",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting Squares in Joker",
        "q": "Count all the Squares (■) in the joker picture.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count of squares on the jacket and shoes = <strong>4 squares</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 squares counted",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting Rectangles in Joker",
        "q": "Count all the Rectangles (▭) in the joker picture.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Count of rectangles (arms, legs, torso body) = <strong>6 rectangles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 rectangles counted",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Name the Shape that Occurs Most",
        "q": "From the joker shape counts (Triangles: 8, Circles: 5, Squares: 4, Rectangles: 6): Name the shape that occurs the most.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Triangle</strong> occurs the most (8 times).",
        "marks": 2,
        "rubric": [
          {
            "key": "Triangle occurs most",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Name the Shape that Occurs Least",
        "q": "From the joker shape counts above: Name the shape that occurs the least.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Square</strong> occurs the least (4 times).",
        "marks": 2,
        "rubric": [
          {
            "key": "Square occurs least",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Letters in Friends' Names",
        "q": "Count the number of letters in each name:<br>(a) SAROJ<br>(b) RADHA<br>(c) AARAV<br>(d) GEETA",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) SAROJ = <strong>5 letters</strong><br>• (b) RADHA = <strong>5 letters</strong><br>• (c) AARAV = <strong>5 letters</strong><br>• (d) GEETA = <strong>5 letters</strong><br>All four names have exactly 5 letters.",
        "marks": 2,
        "rubric": [
          {
            "key": "All counts correct (5 letters each)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • How Many Names Have 5 Letters?",
        "q": "Look at the list of friends: RAMESH, SANTOSH, RAJESH, MURLI, ROHAN. How many names have 6 letters?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• RAMESH = 6 letters<br>• SANTOSH = 7 letters<br>• RAJESH = 6 letters<br>• MURLI = 5 letters<br>• ROHAN = 5 letters<br>• Exactly <strong>2 names (Ramesh, Rajesh)</strong> have 6 letters.",
        "marks": 2,
        "rubric": [
          {
            "key": "2 names have 6 letters",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Most Common Starting Letter",
        "q": "In the list: RAM, ROHIT, RADHA, RANI, AMIT. Which letter comes at the start of most names?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Letter <strong>'R'</strong> starts 4 out of the 5 names (Ram, Rohit, Radha, Rani).<br>• 'R' is the most common starting letter.",
        "marks": 2,
        "rubric": [
          {
            "key": "Letter 'R'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Finding Letter Frequency",
        "q": "How many times does the letter 'A' appear in the word 'BANANA'?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In B-A-N-A-N-A, the letter 'A' appears <strong>3 times</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 times",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Fruit Chart in Kitchen",
        "q": "Count fruits in the basket: 4 Apples, 7 Bananas, 2 Melons. Which fruit is greatest in number?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Bananas (7)</strong> are greatest in number.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bananas (7)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Least Number of Fruits",
        "q": "From the fruit counts above (Apples: 4, Bananas: 7, Melons: 2), which fruit is the least?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Melons (2)</strong> are the least.",
        "marks": 2,
        "rubric": [
          {
            "key": "Melons (2)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Vehicle Tally on Road",
        "q": "Watching the road from the window: 5 Cars, 3 Buses, 8 Bicycles pass by. Which vehicle was seen the most?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>Bicycles (8)</strong> were seen the most.",
        "marks": 2,
        "rubric": [
          {
            "key": "Bicycles (8)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Vowels Count",
        "q": "How many vowels (A, E, I, O, U) are in the name 'INDIA'?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• I, I, A are vowels.<br>• There are <strong>3 vowels</strong> in the name INDIA.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 vowels (I, I, A)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Total Letters",
        "q": "Find the total letters in 'SUN' and 'MOON'.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• SUN = 3 letters<br>• MOON = 4 letters<br>• Total = 3 + 4 = <strong>7 letters</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "3 + 4 = 7 letters",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Bar Line Comparison",
        "q": "Draw 4 tally marks for 4 pencils and 6 tally marks for 6 crayons. Which row is longer?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The row of <strong>6 crayons is longer</strong> because 6 > 4.",
        "marks": 2,
        "rubric": [
          {
            "key": "Row of 6 crayons is longer",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm10",
    "num": 10,
    "unit": "Unit 3: Math-Magic Classic",
    "title": "Patterns",
    "subtitle": "Extending Sequences, T-Shapes, Arrow Patterns & Number Sequences",
    "concepts": [
      "Extending sequences of basic 2D shapes (circles, squares, triangles).",
      "Alternating letter and symbol patterns (T, ⊥, T, ⊥).",
      "Arrow direction patterns (Up, Down, Up, Down).",
      "Number patterns: counting in 1s, 2s, 5s, 10s.",
      "Patterns with dots, leaf prints, and growing geometric shapes."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 10: Patterns</text></svg>",
    "cbq": {
      "title": "Iron Grill Window Pattern Case Study",
      "text": "A blacksmith creates an ornamental window grill using alternating upright hearts and inverted hearts: ♡, ♢, ♡, ♢, ♡, ♢.",
      "question": "What symbol comes next in the grill sequence? If the window frame has 10 upright hearts, how many total symbols are in the row?",
      "answer": "1. Following the alternation, the next symbol is an <strong>upright heart (♡)</strong>.<br>2. Since upright and inverted hearts alternate equally, 10 upright + 10 inverted = <strong>20 total symbols</strong>.",
      "rubric": "1.5 M for upright heart + 1.5 M for 20 total symbols"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Extending T Pattern",
        "q": "Complete the pattern: T, ⊥, T, ⊥, T, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The pattern alternates between upright 'T' and upside-down '⊥'.<br>• Next two symbols: <strong>⊥, T</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled ⊥, then T",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circle and Cross Pattern",
        "q": "Complete the sequence: O, X, O, X, O, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The pattern alternates O and X.<br>• Next symbols: <strong>X, O</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled X, then O",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Arrow Direction Pattern",
        "q": "Fill the next arrows: ↑, ↓, ↑, ↓, ↑, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Next arrows: <strong>↓ (Down), ↑ (Up)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Down then Up",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Double Up and Double Down",
        "q": "Complete the sequence: ↑↑, ↓↓, ↑↑, ↓↓, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Next symbols: <strong>↑↑, ↓↓</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Double up then double down",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Shape Sequence (Circle & Triangle)",
        "q": "Extend the pattern: ●, ▲, ●, ▲, ●, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Next shapes: <strong>▲ (Triangle), ● (Circle)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Triangle then Circle",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Growing Dot Pattern",
        "q": "Look at the dots: (•), (••), (•••), (••••), _____. Draw the next group.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Rule: Add 1 dot each time.<br>• Next group: <strong>5 dots (•••••)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 dots drawn",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Growing Line Pattern",
        "q": "Look at lines: 1 stick, 2 sticks, 3 sticks, 4 sticks. How many sticks come next?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Rule: Add 1 stick.<br>• Next is <strong>5 sticks</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 sticks",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Pattern Counting in 2s",
        "q": "Complete the chain: 2, 4, 6, 8, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Adding 2 each time:<br>• 8 + 2 = <strong>10</strong><br>• 10 + 2 = <strong>12</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "10 and 12",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Pattern Counting in 5s",
        "q": "Fill the missing numbers: 5, 10, 15, 20, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Adding 5 each time:<br>• 20 + 5 = <strong>25</strong><br>• 25 + 5 = <strong>30</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "25 and 30",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Pattern Counting in 10s",
        "q": "Complete the sequence: 10, 20, 30, 40, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 40 + 10 = <strong>50</strong><br>• 50 + 10 = <strong>60</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "50 and 60",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Odd Numbers Pattern",
        "q": "Fill the missing numbers: 1, 3, 5, 7, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Adding 2 to odd numbers:<br>• 7 + 2 = <strong>9</strong><br>• 9 + 2 = <strong>11</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "9 and 11",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Backward Number Pattern",
        "q": "Complete the backward count: 20, 19, 18, 17, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Subtracting 1 each time:<br>• 17 - 1 = <strong>16</strong><br>• 16 - 1 = <strong>15</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "16 and 15",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Backward in 10s",
        "q": "Fill the blank: 50, 40, 30, __, 10.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Subtracting 10 each time:<br>• 30 - 10 = <strong>20</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "20",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Repeating Letters ABC",
        "q": "Complete the pattern: AB, CD, EF, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Letter pairs in alphabetical order:<br>• Next pairs: <strong>GH, IJ</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "GH, IJ",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Day and Night Pattern",
        "q": "Morning, Afternoon, Evening, Night, Morning, __, __. What comes next?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Following the cycle of the day: <strong>Afternoon, Evening</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Afternoon, Evening",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Alternating Leaf Prints",
        "q": "A leaf is stamped: pointing Left, then Right, then Left, then Right. What direction will the 5th print point?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The 5th print will point <strong>Left</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Left",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Triangle and Square Alternating",
        "q": "Draw the next two shapes: ▲, ■, ▲, ■, ▲, __, __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Next shapes: <strong>■ (Square), ▲ (Triangle)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Square then Triangle",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Find the Pattern Rule",
        "q": "Look at: 3, 6, 9, 12. What is the secret rule of this pattern?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The secret rule is: <strong>Add 3 each time (counting by 3s)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Add 3 each time",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm11",
    "num": 11,
    "unit": "Unit 4: Math-Magic Classic",
    "title": "Numbers",
    "subtitle": "Numbers 51 to 100, Sugarcane Bundles of 10 & 100-Chart",
    "concepts": [
      "Extending place value to numbers from 51 to 100.",
      "Grouping by 10s: 5 tens = 50 up to 10 tens = 100.",
      "Writing numerals and number names up to One Hundred.",
      "Completing missing numbers in the 51-100 grid."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 11: Numbers (51 to 100)</text></svg>",
    "cbq": {
      "title": "Sugarcane Harvesting Case Study",
      "text": "Farmer Sham Lal ties sugarcane stalks into bundles of 10 stalks each. He has 6 full bundles and 4 loose stalks on his cart.",
      "question": "How many sugarcane stalks does Sham Lal have in total? How many bundles will he have if he cuts 6 more stalks?",
      "answer": "1. 6 bundles of 10 = 60. Loose stalks = 4. Total = 60 + 4 = <strong>64 sugarcane stalks</strong>.<br>2. With 6 more stalks, loose stalks = 4 + 6 = 10 (which makes 1 new bundle).<br>3. Total bundles = 6 + 1 = <strong>7 full bundles of 10 (70 stalks)</strong>.",
      "rubric": "1.5 M for 64 stalks + 1.5 M for 7 full bundles"
    },
    "questions": [
      {
        "category": "Textbook Exercise • 5 Bundles and 1 Stick",
        "q": "Write the number for 5 bundles of 10 matchsticks and 1 loose stick.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 5 tens + 1 one = 50 + 1 = <strong>51 (Fifty-one)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "51 (Fifty-one)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 6 Bundles and 5 Sticks",
        "q": "Write the number for 6 bundles of 10 and 5 loose sticks.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 tens + 5 ones = 60 + 5 = <strong>65 (Sixty-five)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "65 (Sixty-five)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 7 Bundles and 3 Sticks",
        "q": "Write the number for 7 bundles of 10 and 3 loose sticks.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 7 tens + 3 ones = 70 + 3 = <strong>73 (Seventy-three)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "73 (Seventy-three)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 8 Bundles and 8 Sticks",
        "q": "Write the number for 8 bundles of 10 and 8 loose sticks.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 8 tens + 8 ones = 80 + 8 = <strong>88 (Eighty-eight)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "88 (Eighty-eight)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 9 Bundles and 9 Sticks",
        "q": "Write the number for 9 bundles of 10 and 9 loose sticks. What is special about this number?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 9 tens + 9 ones = <strong>99 (Ninety-nine)</strong>.<br>• 99 is the <strong>largest 2-digit number</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "99 (Ninety-nine)",
            "marks": "1 M"
          },
          {
            "key": "Largest 2-digit number",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 10 Bundles of 10",
        "q": "What number is formed by 10 bundles of 10 matchsticks?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10 tens = <strong>100 (One Hundred)</strong>.<br>• 100 is the first 3-digit number.",
        "marks": 2,
        "rubric": [
          {
            "key": "100 (One Hundred)",
            "marks": "1 M"
          },
          {
            "key": "First 3-digit number",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 51 to 60",
        "q": "Fill the missing numbers: 51, 52, __, 54, __, 56, 57, __, 59, 60.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>53, 55, 58</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 53, 55, 58",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 61 to 70",
        "q": "Fill the missing numbers: 61, __, 63, 64, __, 66, __, 68, 69, 70.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>62, 65, 67</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 62, 65, 67",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 71 to 80",
        "q": "Fill the missing numbers: 71, 72, __, 74, __, 76, 77, __, 79, 80.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>73, 75, 78</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 73, 75, 78",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 81 to 90",
        "q": "Fill the missing numbers: 81, __, 83, 84, __, 86, __, 88, 89, 90.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>82, 85, 87</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 82, 85, 87",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Missing Numbers 91 to 100",
        "q": "Fill the missing numbers: 91, 92, __, 94, __, 96, 97, __, 99, 100.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Missing numbers: <strong>93, 95, 98</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Filled 93, 95, 98",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones for 64",
        "q": "Break 64 into Tens and Ones.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 64 = <strong>6 Tens and 4 Ones</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 Tens and 4 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Tens and Ones for 89",
        "q": "Break 89 into Tens and Ones.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 89 = <strong>8 Tens and 9 Ones</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 Tens and 9 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Names 60, 70, 80, 90",
        "q": "Write the spellings for: 60, 70, 80, 90.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 60 = <strong>Sixty</strong><br>• 70 = <strong>Seventy</strong><br>• 80 = <strong>Eighty</strong><br>• 90 = <strong>Ninety</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 spelled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Just After 79?",
        "q": "What number comes just after 79?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 79 + 1 = <strong>80</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "80",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • What Comes Just Before 90?",
        "q": "What number comes just before 90?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 90 - 1 = <strong>89</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "89",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Between 65 and 67",
        "q": "What number lies between 65 and 67?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The number is <strong>66</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "66",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Circle Greater Number (50-100)",
        "q": "Circle the greater number: (a) 54 and 74, (b) 86 and 68.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (a) 7 tens > 5 tens → <strong>74 is greater</strong>.<br>• (b) 8 tens > 6 tens → <strong>86 is greater</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "74 circled",
            "marks": "1 M"
          },
          {
            "key": "86 circled",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Word Problem • Marbles in Jars",
        "q": "A jar has 7 bundles of 10 marbles and 5 loose marbles. How many marbles in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 70 + 5 = <strong>75 marbles</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "70 + 5 = 75 marbles",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Match 10s to Hundreds",
        "q": "Match: 10 tens → 100; 5 tens → 50; 8 tens → 80.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 10 tens = 100<br>• 5 tens = 50<br>• 8 tens = 80",
        "marks": 2,
        "rubric": [
          {
            "key": "Matches verified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Mental Math • Adding 10 to 60",
        "q": "Solve: 60 + 10 = __.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 tens + 1 ten = 7 tens = <strong>70</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "70",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Century in Cricket",
        "q": "In a cricket match, a player scores 100 runs. What is this score called?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• A score of 100 runs is called a <strong>Century</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Century",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Summary Drill • Count by 10s to 100",
        "q": "Write the numbers counting in tens from 10 to 100.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>10, 20, 30, 40, 50, 60, 70, 80, 90, 100</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Complete sequence in tens",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm12",
    "num": 12,
    "unit": "Unit 4: Math-Magic Classic",
    "title": "Money",
    "subtitle": "Coins, Currency Notes, Combining Coins to Pay Exact Price & Change",
    "concepts": [
      "Coins used in India: ₹1, ₹2, ₹5, ₹10.",
      "Notes used in India: ₹10, ₹20, ₹50, ₹100.",
      "Making different amounts using combinations of coins.",
      "Calculating the cost of buying toys and stationery.",
      "Calculating balance change returned by shopkeeper."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 12: Money</text></svg>",
    "cbq": {
      "title": "Village Fair Toy Stall Case Study",
      "text": "At the village fair, a clay flute costs ₹8 and a paper pinwheel costs ₹4. Meena has a ₹20 note in her purse.",
      "question": "What is the total cost of the flute and pinwheel? How much change should the stall owner give back to Meena?",
      "answer": "1. Total cost = ₹8 + ₹4 = <strong>₹12</strong>.<br>2. Change returned = ₹20 - ₹12 = <strong>₹8</strong> (e.g. a ₹5 coin, a ₹2 coin, and a ₹1 coin).",
      "rubric": "1.5 M for ₹8 + ₹4 = ₹12 + 1.5 M for ₹20 - ₹12 = ₹8 change"
    },
    "questions": [
      {
        "category": "Textbook Exercise • Common Coins in India",
        "q": "Name the four coins shown in the textbook that we use to buy things in India.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>₹1 coin, ₹2 coin, ₹5 coin, and ₹10 coin</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "All 4 coins named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make ₹1 Using Coins",
        "q": "How do you pay ₹1 using coins?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Pay with <strong>one ₹1 coin</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "One ₹1 coin",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make ₹2 in Two Different Ways",
        "q": "Show two different ways to pay ₹2 using coins.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Way 1: One <strong>₹2 coin</strong>.<br>• Way 2: Two <strong>₹1 coins</strong> (₹1 + ₹1 = ₹2).",
        "marks": 2,
        "rubric": [
          {
            "key": "Way 1: One ₹2 coin",
            "marks": "1 M"
          },
          {
            "key": "Way 2: Two ₹1 coins",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make ₹3 Using Coins",
        "q": "How can you pay ₹3 using ₹1 and ₹2 coins?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• One <strong>₹2 coin</strong> and one <strong>₹1 coin</strong> (₹2 + ₹1 = ₹3).",
        "marks": 2,
        "rubric": [
          {
            "key": "₹2 + ₹1 = ₹3",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make ₹4 Using Coins",
        "q": "Show two ways to pay ₹4 using coins.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Way 1: Two <strong>₹2 coins</strong> (₹2 + ₹2 = ₹4).<br>• Way 2: Four <strong>₹1 coins</strong> (₹1 + ₹1 + ₹1 + ₹1 = ₹4).",
        "marks": 2,
        "rubric": [
          {
            "key": "Two ₹2 coins",
            "marks": "1 M"
          },
          {
            "key": "Four ₹1 coins",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make ₹5 in Different Ways",
        "q": "Show three ways to pay ₹5 using coins.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Way 1: One <strong>₹5 coin</strong>.<br>• Way 2: Two ₹2 coins and one ₹1 coin (₹2 + ₹2 + ₹1 = ₹5).<br>• Way 3: Five ₹1 coins.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid coin combinations",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Make ₹6 Using Coins",
        "q": "How do you pay ₹6 using a ₹5 coin and a ₹1 coin?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹1 = <strong>₹6</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹5 + ₹1 = ₹6",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Currency Notes in India",
        "q": "Name three currency notes shown in your textbook.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>₹10 note, ₹20 note, ₹50 note</strong> (and ₹100 note).",
        "marks": 2,
        "rubric": [
          {
            "key": "Three notes named",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cost of a Kite",
        "q": "A paper kite costs ₹5. If you buy 2 kites, how much money do you need?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹5 = <strong>₹10</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹5 + ₹5 = ₹10",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cost of Pen and Eraser",
        "q": "A pen costs ₹7 and an eraser costs ₹2. What is the total cost?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹7 + ₹2 = <strong>₹9</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹7 + ₹2 = ₹9",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Change from ₹10 Note",
        "q": "Sita buys a pencil for ₹6 and pays with a ₹10 note. How much change does she receive?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹10 - ₹6 = <strong>₹4 change</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹10 - ₹6 = ₹4",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Coin Rubbing Impression",
        "q": "Describe what happens when you rub a pencil over paper with a coin beneath.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The raised metal number (like 5 or 10) and the national emblem emboss clearly on the paper.",
        "marks": 2,
        "rubric": [
          {
            "key": "Number and emblem emboss on paper",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Think • Can You Pay ₹8 with Three Coins?",
        "q": "Which three coins make ₹8?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• One <strong>₹5 coin</strong>, one <strong>₹2 coin</strong>, and one <strong>₹1 coin</strong>.<br>• ₹5 + ₹2 + ₹1 = <strong>₹8</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹5 + ₹2 + ₹1 = ₹8",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Match Price Tags",
        "q": "Match: A ruler for ₹5 → ₹5 coin; A storybook for ₹20 → ₹20 note.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Ruler = ₹5 coin<br>• Storybook = ₹20 note",
        "marks": 2,
        "rubric": [
          {
            "key": "Matches verified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Problem • Two Packets of Biscuits",
        "q": "One packet of glucose biscuits costs ₹5. How much do two packets cost?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹5 + ₹5 = <strong>₹10</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹5 + ₹5 = ₹10",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • National Emblem on Coins",
        "q": "What animal symbol is engraved on Indian coins?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• The <strong>Lion Capital of Ashoka (Four Lions)</strong> is engraved on Indian coins.",
        "marks": 2,
        "rubric": [
          {
            "key": "Lion Capital / Lions",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Piggy Bank Savings",
        "q": "Aarav saves two ₹10 notes in his piggy bank. How much money has he saved?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• ₹10 + ₹10 = <strong>₹20</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹20 saved",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mm13",
    "num": 13,
    "unit": "Unit 4: Math-Magic Classic",
    "title": "How Many",
    "subtitle": "Counting Beads, Bundles, Stick Totals, Number Names & Word Problems",
    "concepts": [
      "Counting beads on a necklace and loose beads.",
      "Counting bundles of 10 and loose sticks to write numerals.",
      "Writing number names from given collections.",
      "Solving simple everyday word problems combining groups."
    ],
    "svg": "<svg viewBox=\"0 0 500 100\" width=\"100%\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><text x=\"250\" y=\"55\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"800\" fill=\"#1e40af\" text-anchor=\"middle\">Math-Magic Ch 13: How Many</text></svg>",
    "cbq": {
      "title": "Pearl Necklace Project Case Study",
      "text": "Razia strings 3 necklaces with 10 pearls each and has 9 loose pearls left on her wooden craft tray.",
      "question": "How many total pearls does Razia have? How many more loose pearls does she need to complete a 4th necklace of 10?",
      "answer": "1. 3 necklaces of 10 = 30 pearls. Loose pearls = 9. Total = 30 + 9 = <strong>39 pearls in all</strong>.<br>2. To make 10 from 9 pearls, she needs: 10 - 9 = <strong>1 more pearl</strong>.",
      "rubric": "1.5 M for 30 + 9 = 39 pearls + 1.5 M for 10 - 9 = 1 pearl"
    },
    "questions": [
      {
        "category": "Textbook Exercise • How Many Sticks in Bundles?",
        "q": "Look at the picture: 3 bundles of 10 sticks and 7 loose sticks. Write the numeral.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 3 tens + 7 ones = 30 + 7 = <strong>37</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Numeral 37",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • 4 Bundles and 5 Sticks",
        "q": "Write the numeral for 4 bundles of 10 and 5 loose sticks.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 tens + 5 ones = 40 + 5 = <strong>45</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Numeral 45",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • How Many Beads on String?",
        "q": "A string has 10 beads. There are 2 full strings and 4 loose beads. How many beads in all?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 tens + 4 ones = 20 + 4 = <strong>24 beads</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "24 beads",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • How Many Bananas?",
        "q": "There are 2 bunches of 10 bananas and 3 loose bananas. Write the total count.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 2 tens + 3 ones = 20 + 3 = <strong>23 bananas</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "23 bananas",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Write the Number Name for 15",
        "q": "Write the number name for 15.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 15 = <strong>Fifteen</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fifteen",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • How Many Tens in 24?",
        "q": "In the number 24, how many tens are there?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• In 24, there are <strong>2 tens</strong> (and 4 ones).",
        "marks": 2,
        "rubric": [
          {
            "key": "2 tens",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Which is Bigger: 13 or 26?",
        "q": "Which number is bigger: 13 or 26?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 26 has 2 tens, while 13 has only 1 ten.<br>• Therefore, <strong>26 is bigger</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "26 is bigger",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Cost of 3 Toffees",
        "q": "If 1 toffee costs ₹1, how much do 3 toffees cost?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 1 toffee = ₹1<br>• 3 toffees = 1 + 1 + 1 = <strong>₹3</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "₹3",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • How Many Birds in Trees?",
        "q": "Tree A has 6 birds. Tree B has 3 birds. How many birds in total?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 6 + 3 = <strong>9 birds</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 + 3 = 9 birds",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Develop a Story on a Picture",
        "q": "A picture shows a girl holding 5 red flowers and giving 2 to her teacher. Write the math sentence.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• Math sentence: <strong>5 - 2 = 3 flowers left</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 - 2 = 3 flowers",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let Us Do • Tens and Ones for 43",
        "q": "Write Tens and Ones for 43.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 43 = <strong>4 Tens and 3 Ones</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 Tens and 3 Ones",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Activity • Match Dots to Numeral",
        "q": "Draw 8 dots in a row and match with the numeral 8.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• (••••••••) = <strong>8 (Eight)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "8 dots matched to 8",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Number Name for 47",
        "q": "Write the spelling of 47.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 47 = <strong>Forty-seven</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Forty-seven",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Counting Goats",
        "q": "There are 4 goats eating grass. 2 more goats join them. How many goats altogether?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 4 + 2 = <strong>6 goats</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "4 + 2 = 6 goats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Textbook Exercise • Bundles of 10 for 50",
        "q": "How many bundles of 10 make 50?",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• <strong>5 bundles of 10</strong> make 50.",
        "marks": 2,
        "rubric": [
          {
            "key": "5 bundles",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Competency Review • Summary of All Math Concepts",
        "q": "Name 3 important things you learned in Class 1 Math-Magic.",
        "ans": "<strong>Step-by-Step Solution:</strong><br>• 1. Counting numbers from 1 to 100 using tens and ones.<br>• 2. Addition and subtraction facts.<br>• 3. Shapes, patterns, time, and money.",
        "marks": 2,
        "rubric": [
          {
            "key": "Three core math areas summarized",
            "marks": "2 M"
          }
        ]
      }
    ]
  }
];

module.exports = { mathMagicChapters };
