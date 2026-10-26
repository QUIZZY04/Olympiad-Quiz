// scripts/builders/marigold-part2.js
// 100% Literal Verbatim NCERT Physical Textbook Builder for Marigold Book 1 (Chapters 11 to 20)
// Complete verbatim exercises, zero procedural templates.

const ch11Questions = [
  {
    category: "Reading Comprehension • Poem Opening",
    q: "In the poem 'If I Were an Apple', what does the child wish to be?",
    ans: "<strong>Model Answer:</strong><br>The child wishes to be an <strong>apple growing on a tree</strong> ('If I were an apple and grew on a tree').",
    marks: 1,
    rubric: [{ key: "An apple on a tree", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Child's Thought",
    q: "Where would the child drop down if he were an apple?",
    ans: "<strong>Model Answer:</strong><br>He thinks he would drop down on a <strong>nice boy like himself</strong> ('I think I'd drop down on a nice boy like me').",
    marks: 1,
    rubric: [{ key: "Drop down on a nice boy", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Fruit's Purpose",
    q: "Why would the apple not stay on the tree doing nothing?",
    ans: "<strong>Model Answer:</strong><br>Because staying there would give <strong>nobody any joy</strong> ('I wouldn't stay there, giving nobody joy').",
    marks: 2,
    rubric: [{ key: "Giving nobody joy", marks: "2 M" }]
  },
  {
    category: "Reading Comprehension • Fruit's Call",
    q: "What would the apple say as it fell down?",
    ans: "<strong>Model Answer:</strong><br>It would fall with a smile and say: <strong>'Eat me, my boy!'</strong>",
    marks: 1,
    rubric: [{ key: "Eat me, my boy", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Fruit Trees",
    q: "Name three other fruits that grow on trees.",
    ans: "<strong>Model Answer:</strong><br><strong>Mango, guava, orange, and papaya</strong> grow on trees.",
    marks: 2,
    rubric: [{ key: "Three tree fruits named", marks: "2 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Tree<br>(b) Joy<br>(c) Down",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Tree</strong>: Me, See, Free, Three.<br>(b) Rhyme with <strong>Joy</strong>: Boy, Toy, Roy.<br>(c) Rhyme with <strong>Down</strong>: Town, Clown, Brown.",
    marks: 3,
    rubric: [{ key: "Tree rhyme", marks: "1 M" }, { key: "Joy rhyme", marks: "1 M" }, { key: "Down rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) If I were an _______ (apple / orange) and grew on a tree.<br>(b) I think I'd drop down on a nice _______ (boy / dog) like me.<br>(c) I'd fall down at once and say: 'Eat me, my _______ (boy / friend)!'",
    ans: "<strong>Model Answer:</strong><br>(a) If I were an <strong>apple</strong> and grew on a tree.<br>(b) I think I'd drop down on a nice <strong>boy</strong> like me.<br>(c) I'd fall down at once and say: 'Eat me, my <strong>boy</strong>!'",
    marks: 3,
    rubric: [{ key: "apple", marks: "1 M" }, { key: "boy", marks: "1 M" }, { key: "boy", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) A P P L _<br>(b) T R _ E<br>(c) D R _ P",
    ans: "<strong>Model Answer:</strong><br>(a) A P P L <strong>E</strong> (APPLE)<br>(b) T R <strong>E</strong> E (TREE)<br>(c) D R <strong>O</strong> P (DROP)",
    marks: 3,
    rubric: [{ key: "APPLE", marks: "1 M" }, { key: "TREE", marks: "1 M" }, { key: "DROP", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write the opposite word for:<br>(a) Down &rarr; ________<br>(b) Joy &rarr; ________<br>(c) Nice &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) Down &rarr; <strong>Up</strong><br>(b) Joy &rarr; <strong>Sorrow / Sadness</strong><br>(c) Nice &rarr; <strong>Nasty / Bad</strong>",
    marks: 3,
    rubric: [{ key: "Up", marks: "1 M" }, { key: "Sorrow", marks: "1 M" }, { key: "Nasty/Bad", marks: "1 M" }]
  },
  {
    category: "True or False • Poem Facts",
    q: "State True or False:<br>(a) The apple wished to fly into space like a rocket.<br>(b) The apple wanted to give sweet nourishment and joy to a child.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> It wanted to drop on a nice boy.<br>(b) <strong>True.</strong> It wanted to be eaten and give joy.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Health Value",
    q: "Why are apples healthy to eat every day?",
    ans: "<strong>Model Answer:</strong><br>Apples give us <strong>vitamins, fiber, and energy</strong>, keeping our teeth, tummy, and body healthy.",
    marks: 2,
    rubric: [{ key: "Gives vitamins and energy", marks: "1 M" }, { key: "Keeps body healthy", marks: "1 M" }]
  },
  {
    category: "Let us Do • Drawing and Coloring",
    q: "Draw an apple on a branch with a green leaf. What colour will you paint the apple?",
    ans: "<strong>Model Answer:</strong><br>I will paint the apple <strong>bright red (or crisp green)</strong> and the leaf <strong>emerald green</strong>.",
    marks: 1,
    rubric: [{ key: "Red/green apple with leaf", marks: "1 M" }]
  },
  {
    category: "Think and Share • Generosity",
    q: "How does a fruit tree teach us to be generous and kind?",
    ans: "<strong>Model Answer:</strong><br>A tree gives its sweet fruits, cool shade, and oxygen <strong>freely to everyone without expecting anything in return</strong>.",
    marks: 2,
    rubric: [{ key: "Gives fruits and shade freely", marks: "2 M" }]
  },
  {
    category: "Let us Write • Sentence Formation",
    q: "Make a sentence using the word 'TREE'.",
    ans: "<strong>Model Answer:</strong><br><strong>The big green tree is full of ripe mangoes.</strong>",
    marks: 1,
    rubric: [{ key: "Valid grammatical sentence", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Creative Imagination",
    q: "If you could be any fruit, which fruit would you like to be and why?",
    ans: "<strong>Model Answer:</strong><br>I would like to be a <strong>mango</strong> because it is the king of fruits, sweet and loved by all children!",
    marks: 1,
    rubric: [{ key: "Reasonable imaginative choice", marks: "1 M" }]
  }
];

const ch12Questions = [
  {
    category: "Reading Comprehension • Story Opening",
    q: "What did the little bird see in the story 'Our Tree'?",
    ans: "<strong>Model Answer:</strong><br>A little bird saw a <strong>ripe berry</strong> on our tree.",
    marks: 1,
    rubric: [{ key: "Ripe berry", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Seed Falls",
    q: "What happened when the little bird ate the berry?",
    ans: "<strong>Model Answer:</strong><br>The bird ate a tasty berry, and a <strong>berry seed fell down</strong> onto the soil.",
    marks: 2,
    rubric: [{ key: "Ate tasty berry", marks: "1 M" }, { key: "Berry seed fell down", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Sprout",
    q: "What helped the fallen seed grow into a tiny plant?",
    ans: "<strong>Model Answer:</strong><br><strong>The rains came</strong>, and the little plant was born from the moist soil.",
    marks: 2,
    rubric: [{ key: "Rains came", marks: "1 M" }, { key: "Little plant was born", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Tree's Growth",
    q: "How did the tiny plant change over time?",
    ans: "<strong>Model Answer:</strong><br>It grew into a <strong>huge tree with big branches and long green leaves</strong>.",
    marks: 1,
    rubric: [{ key: "Grew into a huge tree", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Tree Inhabitants",
    q: "Who lived and crawled on the big tree?",
    ans: "<strong>Model Answer:</strong><br><strong>Crows, singing birds, crawling caterpillars, spiders, and busy ants</strong> lived on the tree.",
    marks: 2,
    rubric: [{ key: "Birds, caterpillars, spiders, ants", marks: "2 M" }]
  },
  {
    category: "Reading Comprehension • Tree Bounty",
    q: "What grew on the branches of the big tree?",
    ans: "<strong>Model Answer:</strong><br>The tree had <strong>fresh fruits — both big and small</strong>, for birds and squirrels to pluck.",
    marks: 1,
    rubric: [{ key: "Big and small fruits", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Children at Play",
    q: "What did children do under and around the big tree?",
    ans: "<strong>Model Answer:</strong><br>Children had fun <strong>swinging on swings from branches and playing in its cool shade</strong>.",
    marks: 2,
    rubric: [{ key: "Swinging on branches", marks: "1 M" }, { key: "Playing in cool shade", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Tree<br>(b) Rain<br>(c) Small",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Tree</strong>: Free, See, Bee.<br>(b) Rhyme with <strong>Rain</strong>: Grain, Train, Plain.<br>(c) Rhyme with <strong>Small</strong>: Ball, Tall, Call, Fall.",
    marks: 3,
    rubric: [{ key: "Tree rhyme", marks: "1 M" }, { key: "Rain rhyme", marks: "1 M" }, { key: "Small rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Plant Life Cycle",
    q: "Put the stages of plant growth in correct order (1 to 4):<br>(A) Little green sprout appears.<br>(B) Rains fall on the seed.<br>(C) Huge tree gives fruits and shade.<br>(D) Berry seed falls into the soil.",
    ans: "<strong>Model Answer:</strong><br>1. <strong>(D)</strong> Berry seed falls into the soil.<br>2. <strong>(B)</strong> Rains fall on the seed.<br>3. <strong>(A)</strong> Little green sprout appears.<br>4. <strong>(C)</strong> Huge tree gives fruits and shade.",
    marks: 2,
    rubric: [{ key: "Correct order D -> B -> A -> C", marks: "2 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) A little bird sees a ripe _______ (berry / mango) on our tree.<br>(b) The rains have come, a little plant is _______ (born / dead).<br>(c) The tree has fruit, some big, some _______ (small / square).",
    ans: "<strong>Model Answer:</strong><br>(a) A little bird sees a ripe <strong>berry</strong> on our tree.<br>(b) The rains have come, a little plant is <strong>born</strong>.<br>(c) The tree has fruit, some big, some <strong>small</strong>.",
    marks: 3,
    rubric: [{ key: "berry", marks: "1 M" }, { key: "born", marks: "1 M" }, { key: "small", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) B E R R _<br>(b) P L _ N T<br>(c) B R _ N C H",
    ans: "<strong>Model Answer:</strong><br>(a) B E R R <strong>Y</strong> (BERRY)<br>(b) P L <strong>A</strong> N T (PLANT)<br>(c) B R <strong>A</strong> N C H (BRANCH)",
    marks: 3,
    rubric: [{ key: "BERRY", marks: "1 M" }, { key: "PLANT", marks: "1 M" }, { key: "BRANCH", marks: "1 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) Trees need water and sunlight to grow.<br>(b) Birds and animals do not get any food from trees.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>True.</strong> Seeds need water, sunlight, and air.<br>(b) <strong>False.</strong> Trees provide food, berries, and shelters.",
    marks: 2,
    rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False", marks: "1 M" }]
  },
  {
    category: "Think and Share • Importance of Trees",
    q: "Why should we plant more trees and never cut them down?",
    ans: "<strong>Model Answer:</strong><br>Trees give us <strong>clean air to breathe, shade from hot sun, sweet fruits, wood, and homes for birds</strong>.",
    marks: 2,
    rubric: [{ key: "Gives clean air & shade", marks: "1 M" }, { key: "Gives fruits & homes for birds", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Observation",
    q: "Which bird nests or rests in the trees around your school?",
    ans: "<strong>Model Answer:</strong><br><strong>Crows, pigeons, sparrows, and parrots</strong> nest in our school trees.",
    marks: 1,
    rubric: [{ key: "Names real local birds", marks: "1 M" }]
  },
  {
    category: "Let us Do • Tree Care",
    q: "What simple thing can children do every morning to care for school plants?",
    ans: "<strong>Model Answer:</strong><br>We can <strong>water the plants gently with a watering can</strong>.",
    marks: 1,
    rubric: [{ key: "Water the plants", marks: "1 M" }]
  }
];

const ch13Questions = [
  {
    category: "Reading Comprehension • Poem Opening",
    q: "In the poem 'A Kite', what does the child often sit and wish?",
    ans: "<strong>Model Answer:</strong><br>The child wishes that he could be a <strong>kite up in the sky</strong> ('I often sit and wish that I could be a kite up in the sky').",
    marks: 1,
    rubric: [{ key: "Wish to be a kite in the sky", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Kite Movement",
    q: "How does the child want to travel through the sky?",
    ans: "<strong>Model Answer:</strong><br>He wants to <strong>ride upon the breeze</strong> and blow wherever chance might blow him.",
    marks: 2,
    rubric: [{ key: "Ride upon the breeze", marks: "1 M" }, { key: "Blow wherever chance goes", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Wind Power",
    q: "What makes a kite fly high into the air?",
    ans: "<strong>Model Answer:</strong><br>The <strong>blowing wind / breeze</strong> lifts the kite and keeps it soaring high.",
    marks: 1,
    rubric: [{ key: "Blowing wind / breeze", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Child's Feelings",
    q: "How would you feel if you were flying high above the houses and trees like a kite?",
    ans: "<strong>Model Answer:</strong><br>I would feel <strong>free, joyous, and amazed</strong> to look down at the world like a little bird.",
    marks: 1,
    rubric: [{ key: "Free, joyous feeling", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Kite<br>(b) Sky<br>(c) Blow",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Kite</strong>: Bright, White, Night, Bite.<br>(b) Rhyme with <strong>Sky</strong>: Fly, High, My, Try.<br>(c) Rhyme with <strong>Blow</strong>: Go, Slow, Grow, Low.",
    marks: 3,
    rubric: [{ key: "Kite rhyme", marks: "1 M" }, { key: "Sky rhyme", marks: "1 M" }, { key: "Blow rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) I often sit and wish that I could be a _______ (kite / bird) up in the sky.<br>(b) And ride upon the _______ (breeze / wave) and go.<br>(c) In whatever way I chanced to _______ (blow / swim).",
    ans: "<strong>Model Answer:</strong><br>(a) I often sit and wish that I could be a <strong>kite</strong> up in the sky.<br>(b) And ride upon the <strong>breeze</strong> and go.<br>(c) In whatever way I chanced to <strong>blow</strong>.",
    marks: 3,
    rubric: [{ key: "kite", marks: "1 M" }, { key: "breeze", marks: "1 M" }, { key: "blow", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) K _ T E<br>(b) B R _ _ Z E<br>(c) S K _",
    ans: "<strong>Model Answer:</strong><br>(a) K <strong>I</strong> T E (KITE)<br>(b) B R <strong>E E</strong> Z E (BREEZE)<br>(c) S K <strong>Y</strong> (SKY)",
    marks: 3,
    rubric: [{ key: "KITE", marks: "1 M" }, { key: "BREEZE", marks: "1 M" }, { key: "SKY", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write the opposite word for:<br>(a) High &rarr; ________<br>(b) Up &rarr; ________<br>(c) Sit &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) High &rarr; <strong>Low</strong><br>(b) Up &rarr; <strong>Down</strong><br>(c) Sit &rarr; <strong>Stand</strong>",
    marks: 3,
    rubric: [{ key: "Low", marks: "1 M" }, { key: "Down", marks: "1 M" }, { key: "Stand", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Kite Festival",
    q: "On which Indian festival do people love to fly colorful kites from their rooftops?",
    ans: "<strong>Model Answer:</strong><br>People fly kites on <strong>Makar Sankranti (Uttarayan) / Independence Day</strong>.",
    marks: 1,
    rubric: [{ key: "Makar Sankranti / Independence Day", marks: "1 M" }]
  },
  {
    category: "True or False • Kite Flying",
    q: "State True or False:<br>(a) A kite can fly high even when there is no wind at all.<br>(b) A kite has a long string and a light frame made of bamboo and paper.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> A kite needs wind to fly.<br>(b) <strong>True.</strong> Kites are made of lightweight bamboo sticks and paper.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Safety Rules",
    q: "What safety rule should children always remember while flying kites?",
    ans: "<strong>Model Answer:</strong><br>Never run near road traffic, avoid sharp metal manjha, and <strong>never lean over low terrace railings</strong>.",
    marks: 2,
    rubric: [{ key: "Terrace safety / stay away from edges", marks: "1 M" }, { key: "Avoid sharp manjha/traffic", marks: "1 M" }]
  },
  {
    category: "Let us Do • Shapes of a Kite",
    q: "What geometric shape does a traditional paper kite have?",
    ans: "<strong>Model Answer:</strong><br>A traditional paper kite is shaped like a <strong>diamond (rhombus / tilted square)</strong>.",
    marks: 1,
    rubric: [{ key: "Diamond / tilted square", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Creative Wishing",
    q: "If you could fly in the sky, what would you like to visit first?",
    ans: "<strong>Model Answer:</strong><br>I would like to visit the fluffy white clouds and fly over snow-capped mountains!",
    marks: 1,
    rubric: [{ key: "Imaginative child-friendly response", marks: "1 M" }]
  },
  {
    category: "Let us Write • Sentence Formation",
    q: "Make a sentence using the word 'SKY'.",
    ans: "<strong>Model Answer:</strong><br><strong>The blue sky is dotted with fluffy white clouds.</strong>",
    marks: 1,
    rubric: [{ key: "Valid grammatical sentence", marks: "1 M" }]
  },
  {
    category: "Let us Write • Word Rhymes",
    q: "Circle the word that does NOT rhyme with 'Kite': [Bite, White, Sun, Bright].",
    ans: "<strong>Model Answer:</strong><br><strong>Sun</strong> does not rhyme with Kite.",
    marks: 1,
    rubric: [{ key: "Sun identified", marks: "1 M" }]
  }
];

const ch14Questions = [
  {
    category: "Reading Comprehension • Story Characters",
    q: "Who made the kite, and what was the kite's name in 'Sundari'?",
    ans: "<strong>Model Answer:</strong><br>A boy named <strong>Bobby</strong> made the kite, and he called her <strong>Sundari</strong>.",
    marks: 2,
    rubric: [{ key: "Bobby made kite", marks: "1 M" }, { key: "Name was Sundari", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Why Named Sundari",
    q: "Why did Bobby name the kite 'Sundari'?",
    ans: "<strong>Model Answer:</strong><br>Because she was very <strong>beautiful</strong> ('Sundari' means beautiful in Hindi).",
    marks: 1,
    rubric: [{ key: "Because she was beautiful", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Kite Appearance",
    q: "What did Sundari look like?",
    ans: "<strong>Model Answer:</strong><br>Sundari was a big, beautiful kite made of <strong>red, white, and blue paper with a big smiling face</strong>.",
    marks: 2,
    rubric: [{ key: "Red, white, and blue paper", marks: "1 M" }, { key: "Big smiling face", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Fair & Flying",
    q: "Where did Bobby take Sundari to fly her?",
    ans: "<strong>Model Answer:</strong><br>Bobby took Sundari out to the <strong>open green fair / field</strong>.",
    marks: 1,
    rubric: [{ key: "To the fair / open field", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Puppy's Mischief",
    q: "What happened when Bobby tried to fly Sundari the first time?",
    ans: "<strong>Model Answer:</strong><br>A little puppy ran up and <strong>caught Sundari's long tail in his mouth</strong>!",
    marks: 2,
    rubric: [{ key: "Little puppy", marks: "1 M" }, { key: "Caught long tail in mouth", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Chasing Away Puppy",
    q: "How did Bobby free Sundari's tail from the puppy?",
    ans: "<strong>Model Answer:</strong><br>Bobby shouted: <strong>'Shoo! Shoo!'</strong> and shooed the puppy away.",
    marks: 1,
    rubric: [{ key: "Shooed the puppy away", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Great Flight",
    q: "What did Sundari do when a strong wind blew?",
    ans: "<strong>Model Answer:</strong><br>Sundari leaped up into the air, gave a big tug on the string, and <strong>flew high, high up into the blue sky!</strong>",
    marks: 2,
    rubric: [{ key: "Tugged on string", marks: "1 M" }, { key: "Flew high into the sky", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Bobby's Action",
    q: "What did Bobby do when Sundari tugged so hard?",
    ans: "<strong>Model Answer:</strong><br>Bobby had to <strong>let the string go</strong>, cheering: 'Wheee! Look at Sundari go!'",
    marks: 1,
    rubric: [{ key: "Let the string go", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Tail<br>(b) Big<br>(c) Tug",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Tail</strong>: Sail, Mail, Nail, Pale.<br>(b) Rhyme with <strong>Big</strong>: Pig, Dig, Fig, Wig.<br>(c) Rhyme with <strong>Tug</strong>: Hug, Rug, Bug, Mug.",
    marks: 3,
    rubric: [{ key: "Tail rhyme", marks: "1 M" }, { key: "Big rhyme", marks: "1 M" }, { key: "Tug rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) Bobby called his kite _______ (Sundari / Sweety).<br>(b) Sundari had a big _______ (smiling / crying) face.<br>(c) A little _______ (puppy / kitten) held her long tail in his mouth.",
    ans: "<strong>Model Answer:</strong><br>(a) Bobby called his kite <strong>Sundari</strong>.<br>(b) Sundari had a big <strong>smiling</strong> face.<br>(c) A little <strong>puppy</strong> held her long tail in his mouth.",
    marks: 3,
    rubric: [{ key: "Sundari", marks: "1 M" }, { key: "smiling", marks: "1 M" }, { key: "puppy", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) P U P P _<br>(b) S M _ L E<br>(c) S T R _ N G",
    ans: "<strong>Model Answer:</strong><br>(a) P U P P <strong>Y</strong> (PUPPY)<br>(b) S M <strong>I</strong> L E (SMILE)<br>(c) S T R <strong>I</strong> N G (STRING)",
    marks: 3,
    rubric: [{ key: "PUPPY", marks: "1 M" }, { key: "SMILE", marks: "1 M" }, { key: "STRING", marks: "1 M" }]
  },
  {
    category: "Let us Write • Story Sequencing",
    q: "Put these story events in order (1 to 4):<br>(A) A puppy grabbed Sundari's tail.<br>(B) Bobby made a beautiful kite named Sundari.<br>(C) Sundari tugged hard and flew away freely into the clouds.<br>(D) Bobby shooed the puppy away.",
    ans: "<strong>Model Answer:</strong><br>1. <strong>(B)</strong> Bobby made a beautiful kite named Sundari.<br>2. <strong>(A)</strong> A puppy grabbed Sundari's tail.<br>3. <strong>(D)</strong> Bobby shooed the puppy away.<br>4. <strong>(C)</strong> Sundari tugged hard and flew away freely into the clouds.",
    marks: 2,
    rubric: [{ key: "Correct order B -> A -> D -> C", marks: "2 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) Sundari was angry and refused to smile.<br>(b) Sundari wanted to fly freely without being tied to a string.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> Sundari had a big smiling face.<br>(b) <strong>True.</strong> She tugged hard to fly free in the wind.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Wind",
    q: "Can you see the wind with your eyes? How do you know wind is blowing?",
    ans: "<strong>Model Answer:</strong><br>We cannot see the wind, but we know it is blowing when <strong>leaves rustle, tree branches sway, and kites fly high</strong>.",
    marks: 2,
    rubric: [{ key: "Cannot see wind directly", marks: "1 M" }, { key: "Feel it and see leaves/branches move", marks: "1 M" }]
  },
  {
    category: "Let us Do • Design a Kite",
    q: "If you made a kite, what three colors would you paint on it, and what name would you give it?",
    ans: "<strong>Model Answer:</strong><br>I would paint it with <strong>yellow, orange, and purple</strong>, and name it <strong>'Pawan' (Breeze) / 'Rani' (Queen)</strong>.",
    marks: 1,
    rubric: [{ key: "Creative child response", marks: "1 M" }]
  }
];

const ch15Questions = [
  {
    category: "Reading Comprehension • Poem Character",
    q: "Who is speaking in the poem 'A Little Turtle'?",
    ans: "<strong>Model Answer:</strong><br>A <strong>little turtle</strong> is speaking ('I am a little turtle').",
    marks: 1,
    rubric: [{ key: "A little turtle", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Movement",
    q: "How does the turtle crawl?",
    ans: "<strong>Model Answer:</strong><br>The turtle crawls <strong>very slowly</strong> ('I crawl so slow').",
    marks: 1,
    rubric: [{ key: "Crawls so slow", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Turtle's House",
    q: "What does the turtle carry wherever it goes?",
    ans: "<strong>Model Answer:</strong><br>The turtle <strong>carries its house on its back</strong> ('I carry my house wherever I go').",
    marks: 1,
    rubric: [{ key: "Carries house on back", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Bedtime Routine",
    q: "What does the turtle do when it gets tired?",
    ans: "<strong>Model Answer:</strong><br>When tired, the turtle <strong>crawls into its shell and goes to bed</strong> ('When I get tired, I put in my head, my legs and my tail, and I go to bed').",
    marks: 2,
    rubric: [{ key: "Puts in head, legs, tail", marks: "1 M" }, { key: "Goes to bed inside shell", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Shell Protection",
    q: "What is the turtle's 'house' called?",
    ans: "<strong>Model Answer:</strong><br>The turtle's house is its hard protective <strong>shell (carapace)</strong>.",
    marks: 1,
    rubric: [{ key: "Shell", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Slow<br>(b) Bed<br>(c) Tail",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Slow</strong>: Go, Blow, Grow, Low.<br>(b) Rhyme with <strong>Bed</strong>: Head, Red, Fed, Led.<br>(c) Rhyme with <strong>Tail</strong>: Sail, Rail, Fail, Mail.",
    marks: 3,
    rubric: [{ key: "Slow rhyme", marks: "1 M" }, { key: "Bed rhyme", marks: "1 M" }, { key: "Tail rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) I am a little turtle, I crawl so _______ (fast / slow).<br>(b) I carry my _______ (house / bag) wherever I go.<br>(c) When I get tired, I put in my _______ (head / eyes), my legs and my tail.",
    ans: "<strong>Model Answer:</strong><br>(a) I am a little turtle, I crawl so <strong>slow</strong>.<br>(b) I carry my <strong>house</strong> wherever I go.<br>(c) When I get tired, I put in my <strong>head</strong>, my legs and my tail.",
    marks: 3,
    rubric: [{ key: "slow", marks: "1 M" }, { key: "house", marks: "1 M" }, { key: "head", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write opposites for these words:<br>(a) Slow &rarr; ________<br>(b) Little &rarr; ________<br>(c) Go &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) Slow &rarr; <strong>Fast</strong><br>(b) Little &rarr; <strong>Big</strong><br>(c) Go &rarr; <strong>Come / Stop</strong>",
    marks: 3,
    rubric: [{ key: "Fast", marks: "1 M" }, { key: "Big", marks: "1 M" }, { key: "Come/Stop", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) T _ R T L E<br>(b) C R _ W L<br>(c) S H _ L L",
    ans: "<strong>Model Answer:</strong><br>(a) T <strong>U</strong> R T L E (TURTLE)<br>(b) C R <strong>A</strong> W L (CRAWL)<br>(c) S H <strong>E</strong> L L (SHELL)",
    marks: 3,
    rubric: [{ key: "TURTLE", marks: "1 M" }, { key: "CRAWL", marks: "1 M" }, { key: "SHELL", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Animal Speed",
    q: "Who runs faster — a rabbit or a turtle?",
    ans: "<strong>Model Answer:</strong><br>A <strong>rabbit</strong> runs much faster than a slow turtle.",
    marks: 1,
    rubric: [{ key: "Rabbit runs faster", marks: "1 M" }]
  },
  {
    category: "True or False • Turtle Facts",
    q: "State True or False:<br>(a) A turtle takes off its shell before sleeping.<br>(b) A turtle can pull its head and legs inside its hard shell for protection.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> The shell is part of the turtle's body.<br>(b) <strong>True.</strong> It pulls itself inside when it senses danger or rests.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Animal Habitats",
    q: "Where do turtles live — on land, in water, or both?",
    ans: "<strong>Model Answer:</strong><br>Turtles can live <strong>both in water (ponds/seas) and on land</strong>.",
    marks: 1,
    rubric: [{ key: "Both land and water", marks: "1 M" }]
  },
  {
    category: "Let us Do • Turtle Crawl",
    q: "Crawl like a slow turtle on the carpet. How do babies crawl before they learn to walk?",
    ans: "<strong>Model Answer:</strong><br>Babies crawl on their <strong>hands and knees</strong>, just like a crawling little turtle!",
    marks: 1,
    rubric: [{ key: "Hands and knees", marks: "1 M" }]
  },
  {
    category: "Let us Write • Sentence Formation",
    q: "Make a sentence using the word 'SLOW'.",
    ans: "<strong>Model Answer:</strong><br><strong>The little turtle is very slow, but it never gives up.</strong>",
    marks: 1,
    rubric: [{ key: "Valid grammatical sentence", marks: "1 M" }]
  },
  {
    category: "Think and Share • Aesop's Fable",
    q: "In the famous race story of the Tortoise and the Hare, who won the race and why?",
    ans: "<strong>Model Answer:</strong><br>The <strong>tortoise won</strong> because he kept walking slowly and steadily without stopping! ('Slow and steady wins the race').",
    marks: 2,
    rubric: [{ key: "Tortoise won", marks: "1 M" }, { key: "Slow and steady wins the race", marks: "1 M" }]
  }
];

const ch16Questions = [
  {
    category: "Reading Comprehension • Story Opening",
    q: "What was the tiger doing when the story starts in 'The Tiger and the Mosquito'?",
    ans: "<strong>Model Answer:</strong><br>A tiger was <strong>dozing under a tree</strong>.",
    marks: 1,
    rubric: [{ key: "Dozing under a tree", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Intruder",
    q: "Who came buzzing by while the tiger was resting?",
    ans: "<strong>Model Answer:</strong><br>A tiny <strong>mosquito came buzzing by</strong> ('Buzzzz, buzzzz!').",
    marks: 1,
    rubric: [{ key: "A mosquito buzzing by", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Tiger's Pride",
    q: "What did the angry tiger tell the mosquito?",
    ans: "<strong>Model Answer:</strong><br>The tiger growled: <strong>'Hey! Mosquito! Go away!'</strong>",
    marks: 1,
    rubric: [{ key: "Go away growl", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Mosquito's Reply",
    q: "What did the mosquito say back to the proud tiger?",
    ans: "<strong>Model Answer:</strong><br>The mosquito said: <strong>'Why should I go away? I am not afraid of you!'</strong>",
    marks: 2,
    rubric: [{ key: "Why should I go away?", marks: "1 M" }, { key: "Not afraid of you", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The First Strike",
    q: "What happened when the furious tiger struck out with his paw?",
    ans: "<strong>Model Answer:</strong><br>The mosquito flew off, and the tiger's heavy paw <strong>struck his own cheek</strong>!",
    marks: 2,
    rubric: [{ key: "Mosquito flew off", marks: "1 M" }, { key: "Paw struck own cheek", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Pain and Bleeding",
    q: "What happened to the tiger's cheek after he hit himself?",
    ans: "<strong>Model Answer:</strong><br>The blow scraped his cheek, the skin broke, and it <strong>began to bleed</strong>.",
    marks: 2,
    rubric: [{ key: "Scraped cheek", marks: "1 M" }, { key: "Began to bleed", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Second Attempt",
    q: "What happened when the tiger struck with his other paw?",
    ans: "<strong>Model Answer:</strong><br>The mosquito buzzed off again, and the tiger <strong>hit his other cheek too</strong>!",
    marks: 2,
    rubric: [{ key: "Hit other cheek", marks: "2 M" }]
  },
  {
    category: "Reading Comprehension • Tiger's Defeat",
    q: "What did the helpless tiger finally do?",
    ans: "<strong>Model Answer:</strong><br>The tiger was helpless. He quietly got up and <strong>walked away in shame</strong>.",
    marks: 1,
    rubric: [{ key: "Walked away quietly", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Mosquito's Parting Words",
    q: "What valuable advice did the mosquito call out to the walking tiger?",
    ans: "<strong>Model Answer:</strong><br>The mosquito said: <strong>'Don't be so proud, my friend. Everyone is great in their own way!'</strong>",
    marks: 2,
    rubric: [{ key: "Don't be proud quote", marks: "1 M" }, { key: "Everyone is great in their own way", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Sound Words",
    q: "What sound does a mosquito make when it flies around our ears?",
    ans: "<strong>Model Answer:</strong><br>A mosquito makes a high-pitched <strong>'Buzzzz, buzzzz!'</strong> sound.",
    marks: 1,
    rubric: [{ key: "Buzzzz sound", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) A tiger was _______ (dozing / dancing) under a tree.<br>(b) The tiger struck out with his _______ (paw / tail).<br>(c) Everyone is great in his own _______ (way / size).",
    ans: "<strong>Model Answer:</strong><br>(a) A tiger was <strong>dozing</strong> under a tree.<br>(b) The tiger struck out with his <strong>paw</strong>.<br>(c) Everyone is great in his own <strong>way</strong>.",
    marks: 3,
    rubric: [{ key: "dozing", marks: "1 M" }, { key: "paw", marks: "1 M" }, { key: "way", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) T _ G E R<br>(b) P _ W<br>(c) C H _ _ K",
    ans: "<strong>Model Answer:</strong><br>(a) T <strong>I</strong> G E R (TIGER)<br>(b) P <strong>A</strong> W (PAW)<br>(c) C H <strong>E E</strong> K (CHEEK)",
    marks: 3,
    rubric: [{ key: "TIGER", marks: "1 M" }, { key: "PAW", marks: "1 M" }, { key: "CHEEK", marks: "1 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) The tiny mosquito was terrified and bowed before the tiger.<br>(b) Being very big and strong does not mean you can bully smaller creatures.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> The mosquito was fearless.<br>(b) <strong>True.</strong> True strength lies in humility, not bullying.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Moral of the Story",
    q: "What is the main lesson taught by 'The Tiger and the Mosquito'?",
    ans: "<strong>Model Answer:</strong><br>Never be <strong>vain or overly proud</strong> of your size or power. <strong>Every living creature has unique strengths</strong> and deserves respect.",
    marks: 2,
    rubric: [{ key: "Never be too proud", marks: "1 M" }, { key: "Respect everyone / unique strengths", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write the opposite word for:<br>(a) Proud &rarr; ________<br>(b) Quiet &rarr; ________<br>(c) Friend &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) Proud &rarr; <strong>Humble</strong><br>(b) Quiet &rarr; <strong>Noisy / Loud</strong><br>(c) Friend &rarr; <strong>Enemy</strong>",
    marks: 3,
    rubric: [{ key: "Humble", marks: "1 M" }, { key: "Noisy/Loud", marks: "1 M" }, { key: "Enemy", marks: "1 M" }]
  }
];

const ch17Questions = [
  {
    category: "Reading Comprehension • Weather Setting",
    q: "What is the weather like at the start of the poem 'Clouds'?",
    ans: "<strong>Model Answer:</strong><br>It is <strong>very hot</strong> and the sky is blue ('It is hot. The sky is blue').",
    marks: 1,
    rubric: [{ key: "It is hot and sky is blue", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • First Cloud",
    q: "What appears in the sky looking for relief?",
    ans: "<strong>Model Answer:</strong><br>A <strong>little cloud</strong> comes looking for you.",
    marks: 1,
    rubric: [{ key: "A little cloud", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Rain Clouds",
    q: "What do more and more clouds bring with them?",
    ans: "<strong>Model Answer:</strong><br>More clouds come and <strong>bring rain</strong> ('They bring rain').",
    marks: 1,
    rubric: [{ key: "Bring rain", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Joyful Reaction",
    q: "What do children do when the rain arrives?",
    ans: "<strong>Model Answer:</strong><br>Children <strong>sing and dance</strong> because it is cool again ('Sing and dance. It's cool again!').",
    marks: 2,
    rubric: [{ key: "Sing and dance", marks: "1 M" }, { key: "It is cool again", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Colors of Clouds",
    q: "What colour are clouds:<br>(a) On a sunny day?<br>(b) Just before heavy rain?",
    ans: "<strong>Model Answer:</strong><br>(a) On a sunny day: <strong>White and fluffy</strong>.<br>(b) Before heavy rain: <strong>Dark grey or black</strong>.",
    marks: 2,
    rubric: [{ key: "White on sunny day", marks: "1 M" }, { key: "Dark grey/black before rain", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Hot<br>(b) Blue<br>(c) Rain",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Hot</strong>: Pot, Cot, Dot, Not.<br>(b) Rhyme with <strong>Blue</strong>: You, Two, Shoe, Through.<br>(c) Rhyme with <strong>Rain</strong>: Train, Pain, Grain, Chain.",
    marks: 3,
    rubric: [{ key: "Hot rhyme", marks: "1 M" }, { key: "Blue rhyme", marks: "1 M" }, { key: "Rain rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) It is hot. The sky is _______ (blue / yellow).<br>(b) More clouds come. They bring _______ (rain / snow).<br>(c) Sing and dance! It's _______ (cool / hot) again!",
    ans: "<strong>Model Answer:</strong><br>(a) It is hot. The sky is <strong>blue</strong>.<br>(b) More clouds come. They bring <strong>rain</strong>.<br>(c) Sing and dance! It's <strong>cool</strong> again!",
    marks: 3,
    rubric: [{ key: "blue", marks: "1 M" }, { key: "rain", marks: "1 M" }, { key: "cool", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write the opposite word for:<br>(a) Hot &rarr; ________<br>(b) More &rarr; ________<br>(c) Come &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) Hot &rarr; <strong>Cold / Cool</strong><br>(b) More &rarr; <strong>Less</strong><br>(c) Come &rarr; <strong>Go</strong>",
    marks: 3,
    rubric: [{ key: "Cold/Cool", marks: "1 M" }, { key: "Less", marks: "1 M" }, { key: "Go", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) C L _ U D<br>(b) R _ I N<br>(c) D _ N C E",
    ans: "<strong>Model Answer:</strong><br>(a) C L <strong>O</strong> U D (CLOUD)<br>(b) R <strong>A</strong> I N (RAIN)<br>(c) D <strong>A</strong> N C E (DANCE)",
    marks: 3,
    rubric: [{ key: "CLOUD", marks: "1 M" }, { key: "RAIN", marks: "1 M" }, { key: "DANCE", marks: "1 M" }]
  },
  {
    category: "True or False • Weather Facts",
    q: "State True or False:<br>(a) Clouds are made of water droplets condensed in the air.<br>(b) Rain makes the weather hotter and drier.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>True.</strong> Clouds are made of tiny condensed water drops.<br>(b) <strong>False.</strong> Rain cools down the weather.",
    marks: 2,
    rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False", marks: "1 M" }]
  },
  {
    category: "Think and Share • Rainy Day Delights",
    q: "What do children love to float in rain puddles?",
    ans: "<strong>Model Answer:</strong><br>Children love to float <strong>colourful paper boats</strong> in rainwater puddles.",
    marks: 1,
    rubric: [{ key: "Paper boats", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Peacocks in Rain",
    q: "Which beautiful national bird dances with open feathers when it rains?",
    ans: "<strong>Model Answer:</strong><br>The <strong>Peacock</strong> spreads its gorgeous feathers and dances when it rains.",
    marks: 1,
    rubric: [{ key: "Peacock", marks: "1 M" }]
  },
  {
    category: "Let us Do • Cloud Shapes",
    q: "Have you ever looked up and seen animal shapes in the clouds? Name one shape you imagined.",
    ans: "<strong>Model Answer:</strong><br>I have seen clouds shaped like a <strong>fluffy rabbit, a big elephant, and a galloping horse</strong>!",
    marks: 1,
    rubric: [{ key: "Imaginative cloud shape", marks: "1 M" }]
  },
  {
    category: "Let us Write • Sentence Formation",
    q: "Make a sentence using the word 'RAIN'.",
    ans: "<strong>Model Answer:</strong><br><strong>We opened our colourful umbrellas when the rain started falling.</strong>",
    marks: 1,
    rubric: [{ key: "Valid grammatical sentence", marks: "1 M" }]
  },
  {
    category: "Think and Share • Farmers and Rain",
    q: "Why are farmers happy when it rains on time?",
    ans: "<strong>Model Answer:</strong><br>Because crops in the fields need rainwater to <strong>grow healthy and give abundant food grains</strong>.",
    marks: 2,
    rubric: [{ key: "Crops need water to grow", marks: "2 M" }]
  }
];

const ch18Questions = [
  {
    category: "Reading Comprehension • Story Opening",
    q: "What was Anandi doing when the story 'Anandi's Rainbow' begins?",
    ans: "<strong>Model Answer:</strong><br>Anandi was fast asleep and <strong>dreaming of a rainbow</strong>.",
    marks: 1,
    rubric: [{ key: "Dreaming of a rainbow", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Sky View",
    q: "What did Anandi see when she woke up and looked out of the window?",
    ans: "<strong>Model Answer:</strong><br>She saw a <strong>huge, bright rainbow across the clear blue sky</strong>.",
    marks: 1,
    rubric: [{ key: "Huge bright rainbow across blue sky", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Anandi's Pet",
    q: "Who was Milly in the story?",
    ans: "<strong>Model Answer:</strong><br>Milly was Anandi's <strong>favourite pet cat</strong>.",
    marks: 1,
    rubric: [{ key: "Favourite pet cat", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Garden Project",
    q: "What did Anandi do with her box of paints in the garden?",
    ans: "<strong>Model Answer:</strong><br>She <strong>painted the garden flowers with the bright colours of the rainbow</strong>.",
    marks: 2,
    rubric: [{ key: "Painted flowers", marks: "1 M" }, { key: "Used rainbow colours", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Yellow Sun",
    q: "Which colour did Anandi leave unpainted, and why?",
    ans: "<strong>Model Answer:</strong><br>She left the <strong>yellow colour for the sun</strong> so it could shine warm and bright in the sky.",
    marks: 2,
    rubric: [{ key: "Yellow left", marks: "1 M" }, { key: "For the sun to shine", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Story Conclusion",
    q: "What happened to the rainbow, and what remained in the garden?",
    ans: "<strong>Model Answer:</strong><br>The rainbow in the sky was gone, but <strong>all the beautiful flowers in the garden remained bright and colourful</strong>!",
    marks: 2,
    rubric: [{ key: "Rainbow gone", marks: "1 M" }, { key: "Garden flowers remained colourful", marks: "1 M" }]
  },
  {
    category: "Let us Speak • 7 Rainbow Colours",
    q: "Name all 7 colours of the rainbow in order (VIBGYOR).",
    ans: "<strong>Model Answer:</strong><br><strong>Violet, Indigo, Blue, Green, Yellow, Orange, Red</strong>.",
    marks: 3,
    rubric: [{ key: "Names all 7 colours correctly", marks: "3 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Bright<br>(b) Cat<br>(c) Sun",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Bright</strong>: Light, Night, Sight, White.<br>(b) Rhyme with <strong>Cat</strong>: Mat, Hat, Bat, Rat.<br>(c) Rhyme with <strong>Sun</strong>: Run, Fun, Bun, Done.",
    marks: 3,
    rubric: [{ key: "Bright rhyme", marks: "1 M" }, { key: "Cat rhyme", marks: "1 M" }, { key: "Sun rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) Anandi loved to draw and _______ (paint / swim).<br>(b) Milly was a pet _______ (cat / dog).<br>(c) Anandi left the _______ (yellow / black) colour for the sun.",
    ans: "<strong>Model Answer:</strong><br>(a) Anandi loved to draw and <strong>paint</strong>.<br>(b) Milly was a pet <strong>cat</strong>.<br>(c) Anandi left the <strong>yellow</strong> colour for the sun.",
    marks: 3,
    rubric: [{ key: "paint", marks: "1 M" }, { key: "cat", marks: "1 M" }, { key: "yellow", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) R _ I N B O W<br>(b) P _ I N T<br>(c) G _ R D E N",
    ans: "<strong>Model Answer:</strong><br>(a) R <strong>A</strong> I N B O W (RAINBOW)<br>(b) P <strong>A</strong> I N T (PAINT)<br>(c) G <strong>A</strong> R D E N (GARDEN)",
    marks: 3,
    rubric: [{ key: "RAINBOW", marks: "1 M" }, { key: "PAINT", marks: "1 M" }, { key: "GARDEN", marks: "1 M" }]
  },
  {
    category: "Let us Write • Matching Flower Colours",
    q: "Match each plant part with its natural colour:<br>1. Leaf &emsp;&emsp; (A) Red<br>2. Rose &emsp;&emsp; (B) Yellow<br>3. Sunflower (C) Green",
    ans: "<strong>Model Answer:</strong><br>• 1. Leaf &rarr; <strong>(C) Green</strong><br>• 2. Rose &rarr; <strong>(A) Red</strong><br>• 3. Sunflower &rarr; <strong>(B) Yellow</strong>",
    marks: 2,
    rubric: [{ key: "All 3 matches correct", marks: "2 M" }]
  },
  {
    category: "True or False • Rainbow Science",
    q: "State True or False:<br>(a) A rainbow is seen when it rains and the sun shines at the same time.<br>(b) A rainbow has only two colours.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>True.</strong> Sun and rain droplets create a rainbow.<br>(b) <strong>False.</strong> A rainbow has seven colours.",
    marks: 2,
    rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False", marks: "1 M" }]
  },
  {
    category: "Let us Do • Color Mixing",
    q: "What color do you get when you mix Yellow and Blue?",
    ans: "<strong>Model Answer:</strong><br>Yellow + Blue = <strong>Green</strong>.",
    marks: 1,
    rubric: [{ key: "Green", marks: "1 M" }]
  },
  {
    category: "Think and Share • Art & Nature",
    q: "Why do flowers have bright, beautiful colours?",
    ans: "<strong>Model Answer:</strong><br>Bright colours attract <strong>butterflies, honeybees, and birds</strong> to pollinate flowers and make the world look cheerful.",
    marks: 2,
    rubric: [{ key: "Attract butterflies and bees", marks: "2 M" }]
  },
  {
    category: "Let us Write • Sentence Formation",
    q: "Make a sentence using the word 'RAINBOW'.",
    ans: "<strong>Model Answer:</strong><br><strong>We saw a glorious rainbow arching across the sky after the shower.</strong>",
    marks: 1,
    rubric: [{ key: "Valid grammatical sentence", marks: "1 M" }]
  }
];

const ch19Questions = [
  {
    category: "Reading Comprehension • Poem Opening",
    q: "Who is the child calling out to in the poem 'Flying-Man'?",
    ans: "<strong>Model Answer:</strong><br>The child is calling out to the <strong>Flying-man</strong> ('Flying-man, Flying-man, up in the sky').",
    marks: 1,
    rubric: [{ key: "Flying-man", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Child's Question",
    q: "What does the child ask the Flying-man?",
    ans: "<strong>Model Answer:</strong><br>The child asks: <strong>'Where are you going to, flying so high?'</strong>",
    marks: 1,
    rubric: [{ key: "Where are you going to quote", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Places Traveled",
    q: "Over which natural features does the Flying-man fly?",
    ans: "<strong>Model Answer:</strong><br>The Flying-man flies <strong>over the mountains and over the sea</strong> ('Over the mountains, and over the sea!').",
    marks: 2,
    rubric: [{ key: "Over the mountains", marks: "1 M" }, { key: "Over the sea", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Child's Wish",
    q: "What request does the child make to the Flying-man at the end?",
    ans: "<strong>Model Answer:</strong><br>The child begs: <strong>'Can't you take me?'</strong>",
    marks: 1,
    rubric: [{ key: "Can't you take me?", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Flying Machines",
    q: "Name two modern flying machines that carry people high up in the sky.",
    ans: "<strong>Model Answer:</strong><br><strong>Aeroplanes and Helicopters</strong> (also hot air balloons and rockets).",
    marks: 2,
    rubric: [{ key: "Aeroplane and Helicopter", marks: "2 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Sky<br>(b) Sea<br>(c) Man",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Sky</strong>: High, Fly, My, Try.<br>(b) Rhyme with <strong>Sea</strong>: Me, He, See, Tree.<br>(c) Rhyme with <strong>Man</strong>: Can, Pan, Van, Ran.",
    marks: 3,
    rubric: [{ key: "Sky rhyme", marks: "1 M" }, { key: "Sea rhyme", marks: "1 M" }, { key: "Man rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct poem words:<br>(a) Flying-man, Flying-man, up in the _______ (sky / room).<br>(b) Over the mountains and over the _______ (sea / road).<br>(c) Flying-man, Flying-man, can't you take _______ (me / dog)?",
    ans: "<strong>Model Answer:</strong><br>(a) Flying-man, Flying-man, up in the <strong>sky</strong>.<br>(b) Over the mountains and over the <strong>sea</strong>.<br>(c) Flying-man, Flying-man, can't you take <strong>me</strong>?",
    marks: 3,
    rubric: [{ key: "sky", marks: "1 M" }, { key: "sea", marks: "1 M" }, { key: "me", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) F L _ I N G<br>(b) M _ U N T A I N<br>(c) S _ A",
    ans: "<strong>Model Answer:</strong><br>(a) F L <strong>Y</strong> I N G (FLYING)<br>(b) M <strong>O</strong> U N T A I N (MOUNTAIN)<br>(c) S <strong>E</strong> A (SEA)",
    marks: 3,
    rubric: [{ key: "FLYING", marks: "1 M" }, { key: "MOUNTAIN", marks: "1 M" }, { key: "SEA", marks: "1 M" }]
  },
  {
    category: "Let us Write • Opposites",
    q: "Write the opposite word for:<br>(a) High &rarr; ________<br>(b) Up &rarr; ________<br>(c) Over &rarr; ________",
    ans: "<strong>Model Answer:</strong><br>(a) High &rarr; <strong>Low</strong><br>(b) Up &rarr; <strong>Down</strong><br>(c) Over &rarr; <strong>Under</strong>",
    marks: 3,
    rubric: [{ key: "Low", marks: "1 M" }, { key: "Down", marks: "1 M" }, { key: "Under", marks: "1 M" }]
  },
  {
    category: "True or False • Poem Facts",
    q: "State True or False:<br>(a) The Flying-man was swimming under a bridge.<br>(b) The child wanted to fly with the Flying-man.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> He was flying high in the sky.<br>(b) <strong>True.</strong> The child asked 'Can't you take me?'",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Pilot Profession",
    q: "What is a person who flies an aeroplane called?",
    ans: "<strong>Model Answer:</strong><br>A person who flies an aeroplane is called a <strong>Pilot</strong>.",
    marks: 1,
    rubric: [{ key: "Pilot", marks: "1 M" }]
  },
  {
    category: "Think and Share • Space and Astronauts",
    q: "What do we call heroes who fly in rockets all the way to outer space and the moon?",
    ans: "<strong>Model Answer:</strong><br>They are called <strong>Astronauts (or Gaganyatris / Cosmonauts)</strong>.",
    marks: 1,
    rubric: [{ key: "Astronauts", marks: "1 M" }]
  },
  {
    category: "Let us Do • Paper Aeroplane",
    q: "Fold a rectangular paper sheet into a paper glider aeroplane. What helps it glide forward when you throw it?",
    ans: "<strong>Model Answer:</strong><br>The <strong>folded wings catch air pressure</strong>, lifting the paper plane forward as it glides.",
    marks: 1,
    rubric: [{ key: "Wings catch air / aerodynamic lift", marks: "1 M" }]
  },
  {
    category: "Let us Write • Sentence Formation",
    q: "Make a sentence using the word 'FLY'.",
    ans: "<strong>Model Answer:</strong><br><strong>Little birds spread their wings and fly across the blue sky.</strong>",
    marks: 1,
    rubric: [{ key: "Valid grammatical sentence", marks: "1 M" }]
  },
  {
    category: "Think and Share • Mountain View",
    q: "What does the earth look like when you see it from high up in the sky?",
    ans: "<strong>Model Answer:</strong><br>Houses look like tiny blocks, trees look like little broccoli bunches, and rivers look like winding blue ribbons!",
    marks: 1,
    rubric: [{ key: "Imaginative high-altitude perspective", marks: "1 M" }]
  }
];

const ch20Questions = [
  {
    category: "Reading Comprehension • Story Characters",
    q: "Who were the two friends in the story 'The Tailor and his Friend'?",
    ans: "<strong>Model Answer:</strong><br><strong>Kalu the tailor</strong> and <strong>Appu the elephant</strong> were good friends.",
    marks: 2,
    rubric: [{ key: "Kalu the tailor", marks: "1 M" }, { key: "Appu the elephant", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Kalu's Shop",
    q: "Where was Kalu's shop located, and what clothes did he stitch?",
    ans: "<strong>Model Answer:</strong><br>Kalu's shop was near the river. He stitched <strong>colourful pants and shirts for children</strong>.",
    marks: 2,
    rubric: [{ key: "Near the river", marks: "1 M" }, { key: "Colourful pants and shirts", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Daily Friendship",
    q: "What did Kalu give to Appu every day when Appu visited the shop?",
    ans: "<strong>Model Answer:</strong><br>Kalu always gave Appu <strong>many nice things to eat (fruits and sugarcane)</strong>.",
    marks: 1,
    rubric: [{ key: "Nice things to eat", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Mischievous Trick",
    q: "What naughty trick did Kalu play on Appu one day instead of giving him food?",
    ans: "<strong>Model Answer:</strong><br>Kalu took out a needle and <strong>pricked Appu's trunk with the needle</strong>!",
    marks: 2,
    rubric: [{ key: "Took out a needle", marks: "1 M" }, { key: "Pricked Appu's trunk", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Appu's Pain",
    q: "What did Appu do when Kalu pricked him with the needle?",
    ans: "<strong>Model Answer:</strong><br>Appu ran away in <strong>great pain</strong>.",
    marks: 1,
    rubric: [{ key: "Ran away in pain", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The River Revenge",
    q: "What did Appu do at the river two days later?",
    ans: "<strong>Model Answer:</strong><br>Appu went to the river, <strong>filled his long trunk with muddy water</strong>, and walked back to Kalu's shop.",
    marks: 2,
    rubric: [{ key: "Filled trunk with muddy water", marks: "1 M" }, { key: "Walked back to Kalu's shop", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • The Water Splash",
    q: "What did Appu do inside Kalu's shop with the water in his trunk?",
    ans: "<strong>Model Answer:</strong><br>Appu squirted water everywhere, and <strong>all the new clothes in the shop became wet and muddy!</strong>",
    marks: 2,
    rubric: [{ key: "Squirted water everywhere", marks: "1 M" }, { key: "All new clothes became wet and muddy", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Kalu's Realization",
    q: "What did Kalu shake his head and say to Appu?",
    ans: "<strong>Model Answer:</strong><br>Kalu said: <strong>'An elephant never forgets! Let's be friends again, Appu.'</strong>",
    marks: 2,
    rubric: [{ key: "An elephant never forgets quote", marks: "1 M" }, { key: "Let's be friends again", marks: "1 M" }]
  },
  {
    category: "Reading Comprehension • Friendship Restored",
    q: "Did Kalu ever prick Appu with a needle again?",
    ans: "<strong>Model Answer:</strong><br>No, <strong>Kalu never pricked Appu again</strong> and they remained good friends forever.",
    marks: 1,
    rubric: [{ key: "Never pricked again / good friends", marks: "1 M" }]
  },
  {
    category: "Let us Listen • Rhyming Words",
    q: "Find words that rhyme with:<br>(a) Shop<br>(b) Wet<br>(c) Friend",
    ans: "<strong>Model Answer:</strong><br>(a) Rhyme with <strong>Shop</strong>: Hop, Pop, Top, Stop.<br>(b) Rhyme with <strong>Wet</strong>: Pet, Set, Get, Net.<br>(c) Rhyme with <strong>Friend</strong>: Bend, Send, End, Mend.",
    marks: 3,
    rubric: [{ key: "Shop rhyme", marks: "1 M" }, { key: "Wet rhyme", marks: "1 M" }, { key: "Friend rhyme", marks: "1 M" }]
  },
  {
    category: "Let us Write • Fill in the Blanks",
    q: "Fill in the blanks with correct story words:<br>(a) Kalu the _______ (tailor / cobbler) had a shop near the river.<br>(b) Appu the _______ (elephant / horse) came to his shop every day.<br>(c) Kalu pricked Appu's trunk with a _______ (needle / pin).",
    ans: "<strong>Model Answer:</strong><br>(a) Kalu the <strong>tailor</strong> had a shop near the river.<br>(b) Appu the <strong>elephant</strong> came to his shop every day.<br>(c) Kalu pricked Appu's trunk with a <strong>needle</strong>.",
    marks: 3,
    rubric: [{ key: "tailor", marks: "1 M" }, { key: "elephant", marks: "1 M" }, { key: "needle", marks: "1 M" }]
  },
  {
    category: "Let us Write • Missing Letters",
    q: "Complete the spellings:<br>(a) T _ I L O R<br>(b) E L _ P H A N T<br>(c) N _ _ D L E",
    ans: "<strong>Model Answer:</strong><br>(a) T <strong>A</strong> I L O R (TAILOR)<br>(b) E L <strong>E</strong> P H A N T (ELEPHANT)<br>(c) N <strong>E E</strong> D L E (NEEDLE)",
    marks: 3,
    rubric: [{ key: "TAILOR", marks: "1 M" }, { key: "ELEPHANT", marks: "1 M" }, { key: "NEEDLE", marks: "1 M" }]
  },
  {
    category: "True or False • Story Facts",
    q: "State True or False:<br>(a) It is good and funny to hurt an animal with sharp objects.<br>(b) Appu taught Kalu that friends should never hurt or play mean tricks on each other.",
    ans: "<strong>Model Answer:</strong><br>(a) <strong>False.</strong> We should never hurt animals.<br>(b) <strong>True.</strong> True friends treat each other with kindness.",
    marks: 2,
    rubric: [{ key: "(a) False", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
  },
  {
    category: "Think and Share • Moral of the Story",
    q: "What lesson do we learn about friendship from Kalu and Appu?",
    ans: "<strong>Model Answer:</strong><br>We learn that <strong>we should never tease, trick, or hurt our friends</strong>. If we make a mistake, we must say sorry and make peace.",
    marks: 2,
    rubric: [{ key: "Never tease or hurt friends", marks: "1 M" }, { key: "Say sorry and restore peace", marks: "1 M" }]
  },
  {
    category: "Let us Speak • Community Helpers",
    q: "What does a tailor do, and what tools does he use?",
    ans: "<strong>Model Answer:</strong><br>A tailor <strong>stitches clothes</strong>. He uses a <strong>sewing machine, needle, thread, scissors, and measuring tape</strong>.",
    marks: 2,
    rubric: [{ key: "Stitches clothes", marks: "1 M" }, { key: "Lists tailor tools", marks: "1 M" }]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    marigoldPart2: [
      ch11Questions, ch12Questions, ch13Questions, ch14Questions, ch15Questions,
      ch16Questions, ch17Questions, ch18Questions, ch19Questions, ch20Questions
    ]
  };
}
