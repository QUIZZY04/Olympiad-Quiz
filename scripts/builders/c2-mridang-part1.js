// scripts/builders/c2-mridang-part1.js
// Official NCERT Class 2 English (Mridang) - Part 1 (Chapters 1 to 7)
// 100% Literal Verbatim Physical NCERT Textbook Exercises with CBSE Rubrics

const mridangPart1 = [
  {
    "id": "mrd1",
    "num": 1,
    "unit": "Unit 1: Fun with Friends",
    "title": "My Bicycle",
    "subtitle": "Riding My Bicycle, Bell Ringing, Road Safety, Helmet & Rhymes",
    "concepts": [
      "Poem comprehension: Riding a bicycle safely down the street, ringing the shiny bell.",
      "Safety gear: Wearing a sturdy helmet to protect the head.",
      "Bicycle parts: Pedals, wheels, handlebars, bell, brakes, and seat.",
      "Phonics & Rhyming: Bell-tell, ride-side, street-meet, fast-past."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"10\"/><circle cx=\"210\" cy=\"80\" r=\"20\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\"/><circle cx=\"290\" cy=\"80\" r=\"20\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"4\"/><line x1=\"210\" y1=\"80\" x2=\"250\" y2=\"80\" stroke=\"#1d4ed8\" stroke-width=\"3\"/><line x1=\"250\" y1=\"80\" x2=\"290\" y2=\"80\" stroke=\"#1d4ed8\" stroke-width=\"3\"/><circle cx=\"250\" cy=\"40\" r=\"12\" fill=\"#f59e0b\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">My Bicycle: Ring the Bell, Wear the Helmet!</text></svg>",
    "cbq": {
      "title": "Aman's Evening Cycle Ride",
      "text": "Every evening, Aman rides his little red bicycle in the neighbourhood park. Before getting onto the saddle, he always straps on his yellow helmet and tests the bell with his thumb—'Tring, tring!'",
      "question": "What safety rule does Aman follow before riding his bicycle? What sound does the bicycle bell make?",
      "answer": "1. Aman always <strong>straps on his safety helmet</strong> to protect his head from injury.<br>2. The bicycle bell makes a cheerful <strong>'Tring, tring!'</strong> sound to warn pedestrians and clear the path.",
      "rubric": "1.5 M for wearing helmet safety rule + 1.5 M for 'Tring, tring' bell sound"
    },
    "questions": [
      {
        "category": "Poem Comprehension • The Bicycle",
        "q": "What colour is the child's bicycle in the poem 'My Bicycle'?",
        "ans": "<strong>Answer:</strong><br>• The child has a bright, shiny bicycle (often described as red or yellow) that he rides happily down the road.",
        "marks": 1,
        "rubric": [{ "key": "Identification of the bicycle", "marks": "1 M" }]
      },
      {
        "category": "Poem Comprehension • The Bell",
        "q": "What sound does the bicycle bell make when the child rings it?",
        "ans": "<strong>Answer:</strong><br>• The bicycle bell rings with a clear <strong>'Tring, tring... ring, ring!'</strong> sound.",
        "marks": 1,
        "rubric": [{ "key": "'Tring, tring' sound stated", "marks": "1 M" }]
      },
      {
        "category": "Let us Speak • Safety Rules",
        "q": "Why is it important to wear a helmet while riding a bicycle?",
        "ans": "<strong>Answer:</strong><br>• Wearing a helmet <strong>protects our head from serious injury</strong> if we accidentally slip or fall off the bicycle.",
        "marks": 2,
        "rubric": [{ "key": "Head protection against injury", "marks": "2 M" }]
      },
      {
        "category": "Word Fun • Bicycle Parts",
        "q": "Name four main parts of a bicycle.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Wheels</strong> (two wheels)<br>2. <strong>Pedals</strong> (to push with feet)<br>3. <strong>Handlebar</strong> (to steer)<br>4. <strong>Brakes and Bell</strong>",
        "marks": 2,
        "rubric": [{ "key": "Four parts identified correctly", "marks": "2 M" }]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in the blanks with words from the poem (pedal, bell, helmet):<br>(a) I ring the shiny ______.<br>(b) I wear a sturdy ______ on my head.",
        "ans": "<strong>Answer:</strong><br>(a) I ring the shiny <strong>bell</strong>.<br>(b) I wear a sturdy <strong>helmet</strong> on my head.",
        "marks": 2,
        "rubric": [{ "key": "Both blanks filled correctly", "marks": "2 M" }]
      },
      {
        "category": "Phonics & Rhyme • Rhyming Pairs",
        "q": "Find the rhyming word for each from the poem:<br>(a) Bell — _______<br>(b) Ride — _______",
        "ans": "<strong>Answer:</strong><br>(a) Bell — <strong>Tell / Well</strong><br>(b) Ride — <strong>Side / Wide</strong>",
        "marks": 2,
        "rubric": [{ "key": "Tell/Well and Side/Wide", "marks": "2 M" }]
      },
      {
        "category": "Let us Do • Action Verbs",
        "q": "What action words (verbs) describe riding a bicycle? Name three.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Pedal</strong><br>2. <strong>Steer</strong><br>3. <strong>Brake (or Ring)</strong>",
        "marks": 3,
        "rubric": [{ "key": "Three relevant action verbs", "marks": "3 M" }]
      },
      {
        "category": "Think and Answer • Keeping Left",
        "q": "On which side of the road should we ride our bicycle in India?",
        "ans": "<strong>Answer:</strong><br>• In India, we must always ride on the <strong>left side</strong> of the road.",
        "marks": 1,
        "rubric": [{ "key": "Left side of the road", "marks": "1 M" }]
      },
      {
        "category": "Vocabulary • Opposites",
        "q": "Write the opposites of:<br>(a) Fast × _______<br>(b) Stop × _______",
        "ans": "<strong>Answer:</strong><br>(a) Fast × <strong>Slow</strong><br>(b) Stop × <strong>Go (or Start)</strong>",
        "marks": 2,
        "rubric": [{ "key": "Slow and Go/Start", "marks": "2 M" }]
      },
      {
        "category": "Make Sentences • Practice",
        "q": "Make a meaningful sentence using the word: 'Bicycle'.",
        "ans": "<strong>Answer:</strong><br>• My father gave me a new bicycle on my birthday.",
        "marks": 1.5,
        "rubric": [{ "key": "Correct grammatical sentence", "marks": "1.5 M" }]
      },
      {
        "category": "Picture Talk • Riding in the Park",
        "q": "Where is it safest for young children to ride their bicycles: on the busy highway or in the colony park?",
        "ans": "<strong>Answer:</strong><br>• It is safest to ride in the <strong>colony park or playground</strong>, away from heavy motor vehicles.",
        "marks": 1.5,
        "rubric": [{ "key": "Park/playground away from traffic", "marks": "1.5 M" }]
      },
      {
        "category": "Singular and Plural • Practice",
        "q": "Give the plural form:<br>(a) One wheel — Two _______<br>(b) One bell — Three _______",
        "ans": "<strong>Answer:</strong><br>(a) Two <strong>wheels</strong><br>(b) Three <strong>bells</strong>",
        "marks": 2,
        "rubric": [{ "key": "Wheels and bells", "marks": "2 M" }]
      },
      {
        "category": "Environmental Value • Eco-friendly Ride",
        "q": "Why is riding a bicycle better for the environment than driving a motorcycle or car?",
        "ans": "<strong>Answer:</strong><br>• A bicycle does not use petrol or diesel, emits <strong>zero smoke or pollution</strong>, and keeps our air clean and healthy.",
        "marks": 2,
        "rubric": [{ "key": "No petrol/smoke and zero pollution", "marks": "2 M" }]
      },
      {
        "category": "Creative Fun • My Dream Bicycle",
        "q": "If you could design your dream bicycle, what special feature would you add to it?",
        "ans": "<strong>Answer:</strong><br>• I would add a little basket in front to carry my water bottle and storybooks, and glowing lights for safety.",
        "marks": 2,
        "rubric": [{ "key": "Expressive personal imagination", "marks": "2 M" }]
      }
    ]
  },
  {
    "id": "mrd2",
    "num": 2,
    "unit": "Unit 1: Fun with Friends",
    "title": "Picture Reading",
    "subtitle": "Observing the School Playground, Action Words, Friends & Outdoor Games",
    "concepts": [
      "Visual observation: Reading detail in an energetic school playground illustration.",
      "Action words: Running, skipping, jumping, sliding, kicking, reading, smiling.",
      "Prepositions: On the slide, under the banyan tree, near the fountain, in the queue.",
      "Peer vocabulary: Friend, sharing, playground, swings, sandbox."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"10\"/><circle cx=\"150\" cy=\"50\" r=\"16\" fill=\"#10b981\"/><line x1=\"150\" y1=\"66\" x2=\"150\" y2=\"95\" stroke=\"#059669\" stroke-width=\"3\"/><polygon points=\"250,30 220,95 280,95\" fill=\"#f59e0b\"/><circle cx=\"350\" cy=\"60\" r=\"16\" fill=\"#3b82f6\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Picture Reading: Swings, Slides, Friends & Playground Joy</text></svg>",
    "cbq": {
      "title": "Recess Fun in the Sun",
      "text": "During lunch break, the school bell rang. Tara rushed to the swings, Kabir and Rohit kicked a football across the grass, while Ananya sat under the shade of a neem tree reading a colourful picture book.",
      "question": "What three different activities were children doing during recess? Why is outdoor play essential during school hours?",
      "answer": "1. The children were (a) swinging on the swings, (b) playing football, and (c) reading a picture book under the tree.<br>2. Outdoor play provides <strong>fresh air, physical exercise, teamwork with friends, and mental refreshment</strong>.",
      "rubric": "1.5 M for identifying all three activities + 1.5 M for explaining exercise, fresh air, and peer social bonding"
    },
    "questions": [
      {
        "category": "Picture Observation • Playground Scene",
        "q": "Look closely at the playground picture. Name three things that children are playing on.",
        "ans": "<strong>Answer:</strong><br>1. <strong>The swings</strong><br>2. <strong>The slide</strong><br>3. <strong>The see-saw (or football ground)</strong>",
        "marks": 2,
        "rubric": [{ "key": "Swings, slide, see-saw identified", "marks": "2 M" }]
      },
      {
        "category": "Action Words • Verbs in the Picture",
        "q": "What is the boy in the blue shirt doing in the picture?",
        "ans": "<strong>Answer:</strong><br>• The boy in the blue shirt is <strong>sliding down the slide</strong> with a happy smile.",
        "marks": 1,
        "rubric": [{ "key": "Sliding down the slide", "marks": "1 M" }]
      },
      {
        "category": "Prepositions • Where are they?",
        "q": "Where are the two girls sitting with their storybook?",
        "ans": "<strong>Answer:</strong><br>• The two girls are sitting <strong>under the shade of the big green tree</strong>.",
        "marks": 1,
        "rubric": [{ "key": "Under the tree", "marks": "1 M" }]
      },
      {
        "category": "Count and Write • Animals and Birds",
        "q": "How many birds can you spot on the branches of the tree in the picture?",
        "ans": "<strong>Answer:</strong><br>• There are <strong>three little birds</strong> perched on the tree branches.",
        "marks": 1,
        "rubric": [{ "key": "Correct count (three birds)", "marks": "1 M" }]
      },
      {
        "category": "Vocabulary • Matching Actions",
        "q": "Match each child with their action:<br>(a) Child with rope — (1) Kicking<br>(b) Child with ball — (2) Skipping<br>(c) Child on swing — (3) Swinging",
        "ans": "<strong>Answer:</strong><br>(a) Child with rope — <strong>(2) Skipping</strong><br>(b) Child with ball — <strong>(1) Kicking</strong><br>(c) Child on swing — <strong>(3) Swinging</strong>",
        "marks": 3,
        "rubric": [{ "key": "All three matched accurately", "marks": "3 M" }]
      },
      {
        "category": "Let us Speak • Turn Taking",
        "q": "What should children do when there is only one swing and several children want to swing?",
        "ans": "<strong>Answer:</strong><br>• Children should <strong>form a queue, wait patiently, and take turns</strong> without pushing.",
        "marks": 2,
        "rubric": [{ "key": "Take turns and wait in queue", "marks": "2 M" }]
      },
      {
        "category": "Opposite Words • Practice",
        "q": "Write the opposite of:<br>(a) Up (on the see-saw) × _______<br>(b) Happy × _______",
        "ans": "<strong>Answer:</strong><br>(a) Up × <strong>Down</strong><br>(b) Happy × <strong>Sad</strong>",
        "marks": 2,
        "rubric": [{ "key": "Down and Sad", "marks": "2 M" }]
      },
      {
        "category": "Sentence Writing • Playground",
        "q": "Write one sentence about your favourite thing in your school playground.",
        "ans": "<strong>Answer:</strong><br>• I love swinging high on the green swings during recess with my best friend.",
        "marks": 1.5,
        "rubric": [{ "key": "Meaningful personal sentence", "marks": "1.5 M" }]
      },
      {
        "category": "Find the Missing Letters • Words",
        "q": "Complete the words from the playground picture:<br>(a) S W _ N G<br>(b) S L _ D E<br>(c) F R _ E N D",
        "ans": "<strong>Answer:</strong><br>(a) S W <strong>I</strong> N G = SWING<br>(b) S L <strong>I</strong> D E = SLIDE<br>(c) F R <strong>I</strong> E N D = FRIEND",
        "marks": 3,
        "rubric": [{ "key": "All three words spelled correctly", "marks": "3 M" }]
      },
      {
        "category": "Think and Share • Safety in Play",
        "q": "Why should we not run up the wrong way on a slide?",
        "ans": "<strong>Answer:</strong><br>• Running up a slide can cause a collision with a child sliding down and lead to falls and painful bruises.",
        "marks": 2,
        "rubric": [{ "key": "Risk of collision and injury", "marks": "2 M" }]
      },
      {
        "category": "Identify the Odd One Out • Groups",
        "q": "Which one does NOT belong to a playground: (A) Swing (B) Slide (C) Refrigerator (D) See-saw?",
        "ans": "<strong>Answer:</strong><br>• <strong>(C) Refrigerator</strong> (It is a kitchen appliance, not a playground equipment).",
        "marks": 1,
        "rubric": [{ "key": "Refrigerator identified", "marks": "1 M" }]
      },
      {
        "category": "Grammar • A or An",
        "q": "Fill in with 'a' or 'an':<br>(a) ______ swing<br>(b) ______ umbrella in the rain",
        "ans": "<strong>Answer:</strong><br>(a) <strong>a</strong> swing<br>(b) <strong>an</strong> umbrella",
        "marks": 2,
        "rubric": [{ "key": "'a' and 'an' applied correctly", "marks": "2 M" }]
      },
      {
        "category": "Social Values • Including Others",
        "q": "If you see a new classmate standing alone by the fence, what will you say to him?",
        "ans": "<strong>Answer:</strong><br>• I will smile and say, \"Hello! Come and play catch with us!\"",
        "marks": 2,
        "rubric": [{ "key": "Friendly invitation and inclusion", "marks": "2 M" }]
      },
      {
        "category": "Colour Identification • Art",
        "q": "What is the colour of healthy grass in the school ground?",
        "ans": "<strong>Answer:</strong><br>• Healthy grass is bright <strong>green</strong>.",
        "marks": 1,
        "rubric": [{ "key": "Green colour", "marks": "1 M" }]
      }
    ]
  },
  {
    "id": "mrd3",
    "num": 3,
    "unit": "Unit 2: Welcome to My World",
    "title": "It is Fun",
    "subtitle": "Animal Movements, Flying Birds, Hopping Bunnies, Leaping Frogs & Miming",
    "concepts": [
      "Poem recitation: Delighting in animal motions—leaping, hopping, flapping, gliding.",
      "Movement vocabulary: Frog leaps, rabbit hops, bird flies/flaps, fish glides/swims.",
      "Rhythm and actions: Miming different animals in circle time.",
      "Rhyming words: Frog-log, hop-stop, flap-clap, fun-run."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"10\"/><ellipse cx=\"150\" cy=\"60\" rx=\"22\" ry=\"16\" fill=\"#22c55e\"/><circle cx=\"250\" cy=\"55\" r=\"18\" fill=\"#f472b6\"/><path d=\"M 330 65 Q 360 40 380 65\" stroke=\"#3b82f6\" stroke-width=\"3\" fill=\"none\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">It is Fun: Leap like a frog, hop like a bunny, swim like a fish!</text></svg>",
    "cbq": {
      "title": "Animal Action Game",
      "text": "The teacher told Class 2: 'When I say frog, leap! When I say fish, glide your arms! When I say bunny, hop with two paws!' All children laughed and jumped happily around the hall.",
      "question": "What movement did the children make for the frog? What movement did they make for the bunny?",
      "answer": "1. For the frog, the children made a <strong>deep crouch and leaped high into the air</strong>.<br>2. For the bunny, they <strong>held up their hands like ears and hopped lightly on their toes</strong>.",
      "rubric": "1.5 M for leaping like a frog + 1.5 M for hopping like a bunny"
    },
    "questions": [
      {
        "category": "Poem Comprehension • Frog Movement",
        "q": "How does the frog move in the poem 'It is Fun'?",
        "ans": "<strong>Answer:</strong><br>• The frog moves by <strong>leaping</strong> high from one place to another.",
        "marks": 1,
        "rubric": [{ "key": "Leaping", "marks": "1 M" }]
      },
      {
        "category": "Poem Comprehension • Bunny Movement",
        "q": "What action does the little bunny (rabbit) do?",
        "ans": "<strong>Answer:</strong><br>• The bunny moves by <strong>hopping</strong> quickly on its hind feet.",
        "marks": 1,
        "rubric": [{ "key": "Hopping", "marks": "1 M" }]
      },
      {
        "category": "Poem Comprehension • Fish Movement",
        "q": "How does a fish move in the cool river water?",
        "ans": "<strong>Answer:</strong><br>• A fish moves smoothly by <strong>gliding and swimming</strong> with its fins.",
        "marks": 1,
        "rubric": [{ "key": "Gliding/swimming", "marks": "1 M" }]
      },
      {
        "category": "Matching Exercise • Animal and Motion",
        "q": "Match each animal with its movement word:<br>(a) Bird — (1) Leap<br>(b) Frog — (2) Flap / Fly<br>(c) Fish — (3) Glide<br>(d) Horse — (4) Gallop",
        "ans": "<strong>Answer:</strong><br>(a) Bird — <strong>(2) Flap / Fly</strong><br>(b) Frog — <strong>(1) Leap</strong><br>(c) Fish — <strong>(3) Glide</strong><br>(d) Horse — <strong>(4) Gallop</strong>",
        "marks": 4,
        "rubric": [{ "key": "All four matched correctly (1 M each)", "marks": "4 M" }]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Complete the lines with words from the poem (fun, leap, glide):<br>(a) It is ______ to leap like a frog.<br>(b) It is fun to ______ like a fish.",
        "ans": "<strong>Answer:</strong><br>(a) It is <strong>fun</strong> to leap like a frog.<br>(b) It is fun to <strong>glide</strong> like a fish.",
        "marks": 2,
        "rubric": [{ "key": "'fun' and 'glide'", "marks": "2 M" }]
      },
      {
        "category": "Rhyming Words • Sound Identification",
        "q": "Find rhyming words for:<br>(a) Hop — _______<br>(b) Fun — _______",
        "ans": "<strong>Answer:</strong><br>(a) Hop — <strong>Top / Stop / Pop</strong><br>(b) Fun — <strong>Run / Sun / Gun</strong>",
        "marks": 2,
        "rubric": [{ "key": "Top/Stop and Run/Sun", "marks": "2 M" }]
      },
      {
        "category": "Opposite Words • Fast and Slow",
        "q": "Between a cheetah and a tortoise, which animal runs fast and which moves slow?",
        "ans": "<strong>Answer:</strong><br>• The cheetah runs <strong>very fast</strong>.<br>• The tortoise moves <strong>very slow</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Cheetah fast, tortoise slow", "marks": "2 M" }]
      },
      {
        "category": "Animal Sounds • Vocabulary",
        "q": "What sound does a frog make?",
        "ans": "<strong>Answer:</strong><br>• A frog makes a <strong>'croak, croak' (or ribbit)</strong> sound.",
        "marks": 1,
        "rubric": [{ "key": "Croak sound", "marks": "1 M" }]
      },
      {
        "category": "Action Words • Identification",
        "q": "Identify the action word in the sentence: 'The kangaroo hops over the fence.'",
        "ans": "<strong>Answer:</strong><br>• The action word (verb) is <strong>'hops'</strong>.",
        "marks": 1,
        "rubric": [{ "key": "'hops' identified", "marks": "1 M" }]
      },
      {
        "category": "Creative Sentence • Animals",
        "q": "Write one sentence about a bird you like.",
        "ans": "<strong>Answer:</strong><br>• The peacock spreads its colourful feathers and dances gracefully when it rains.",
        "marks": 1.5,
        "rubric": [{ "key": "Clear expressive sentence", "marks": "1.5 M" }]
      },
      {
        "category": "Physical Health • Movement Value",
        "q": "Why is running, hopping, and jumping good for young children?",
        "ans": "<strong>Answer:</strong><br>• It exercises our muscles, strengthens our bones, makes our heart healthy, and keeps our body energetic.",
        "marks": 2,
        "rubric": [{ "key": "Muscles, bones, heart health", "marks": "2 M" }]
      },
      {
        "category": "Singular and Plural • Animals",
        "q": "Write the plural form:<br>(a) One frog — Two _______<br>(b) One bird — Three _______",
        "ans": "<strong>Answer:</strong><br>(a) Two <strong>frogs</strong><br>(b) Three <strong>birds</strong>",
        "marks": 2,
        "rubric": [{ "key": "Frogs and birds", "marks": "2 M" }]
      },
      {
        "category": "True or False • Animal Facts",
        "q": "Write True or False:<br>(a) Fish can walk on tree branches.<br>(b) Rabbits have long ears and a fluffy tail.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>False</strong> (Fish swim in water).<br>(b) <strong>True</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Both answered correctly", "marks": "2 M" }]
      },
      {
        "category": "Miming Game • Expression",
        "q": "How would you mime an elephant walking in the jungle?",
        "ans": "<strong>Answer:</strong><br>• I would walk with heavy, slow footsteps and swing one arm like a long trunk.",
        "marks": 1.5,
        "rubric": [{ "key": "Descriptive movement response", "marks": "1.5 M" }]
      }
    ]
  },
  {
    "id": "mrd4",
    "num": 4,
    "unit": "Unit 2: Welcome to My World",
    "title": "Seeing without Seeing",
    "subtitle": "Five Senses, Blindfold Game, Touch, Smell, Hearing & Empathy",
    "concepts": [
      "Sensory awareness: Experiencing the world through touch, sound, smell, and taste.",
      "Blindfold exploration: Identifying objects without using eyes (hearing a bell, smelling a flower).",
      "Empathy & Inclusion: Respecting visually challenged individuals and learning about Braille.",
      "Descriptive adjectives: Rough, smooth, sweet, soft, loud, fragrant."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf4ff\" rx=\"10\"/><rect x=\"200\" y=\"45\" width=\"100\" height=\"30\" rx=\"15\" fill=\"#9333ea\"/><circle cx=\"230\" cy=\"60\" r=\"8\" fill=\"#ffffff\"/><circle cx=\"270\" cy=\"60\" r=\"8\" fill=\"#ffffff\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#6b21a8\" text-anchor=\"middle\">Seeing without Seeing: Touch, Hear, Smell and Feel the World</text></svg>",
    "cbq": {
      "title": "The Mystery Box Game",
      "text": "In the classroom, Rahul had a blindfold over his eyes. The teacher handed him three objects: a fresh rose, a fluffy cotton ball, and a cold metal spoon. Without looking, Rahul identified all three correctly within seconds.",
      "question": "Which senses did Rahul use to identify the rose, cotton ball, and spoon? What does this activity teach us?",
      "answer": "1. Rahul used his <strong>sense of smell</strong> (fragrance of the rose) and his <strong>sense of touch</strong> (soft cotton, cold hard metal spoon).<br>2. This activity teaches us that <strong>our other senses (touch, smell, hearing) are powerful tools that help us perceive the world even when we cannot see</strong>.",
      "rubric": "1.5 M for identifying touch and smell senses + 1.5 M for understanding sensory awareness and empathy"
    },
    "questions": [
      {
        "category": "Story Comprehension • The Senses Game",
        "q": "What game were the children playing in the classroom?",
        "ans": "<strong>Answer:</strong><br>• The children were playing a <strong>blindfold guessing game ('Seeing without Seeing')</strong> using their senses of touch, sound, and smell.",
        "marks": 2,
        "rubric": [{ "key": "Blindfold guessing game", "marks": "2 M" }]
      },
      {
        "category": "Sense Organs • Functions",
        "q": "Which sense organ helps us to hear sounds, and which one helps us to smell food?",
        "ans": "<strong>Answer:</strong><br>• Our <strong>ears</strong> help us to hear sounds.<br>• Our <strong>nose</strong> helps us to smell food and fragrances.",
        "marks": 2,
        "rubric": [{ "key": "Ears for hearing, nose for smelling", "marks": "2 M" }]
      },
      {
        "category": "Touch and Feel • Textures",
        "q": "How does tree bark feel when you touch it? How does a puppy's fur feel?",
        "ans": "<strong>Answer:</strong><br>• Tree bark feels <strong>rough and hard</strong>.<br>• A puppy's fur feels <strong>soft and warm</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Rough/hard and soft/warm", "marks": "2 M" }]
      },
      {
        "category": "Matching • Sense Organs and Objects",
        "q": "Match the sense organ to how it detects an object:<br>(a) Eyes — (1) Ringing of a temple bell<br>(b) Ears — (2) Bright rainbow in the sky<br>(c) Tongue — (3) Sweet taste of honey<br>(d) Skin — (4) Cold ice cube",
        "ans": "<strong>Answer:</strong><br>(a) Eyes — <strong>(2) Bright rainbow</strong><br>(b) Ears — <strong>(1) Ringing bell</strong><br>(c) Tongue — <strong>(3) Sweet honey</strong><br>(d) Skin — <strong>(4) Cold ice cube</strong>",
        "marks": 4,
        "rubric": [{ "key": "All four matched correctly (1 M each)", "marks": "4 M" }]
      },
      {
        "category": "Vocabulary • Describing Words",
        "q": "Choose the correct describing word (loud, sweet, cold):<br>(a) An ice cream is ______.<br>(b) A thunderclap is ______.",
        "ans": "<strong>Answer:</strong><br>(a) An ice cream is <strong>cold</strong> (and sweet).<br>(b) A thunderclap is <strong>loud</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Cold and Loud", "marks": "2 M" }]
      },
      {
        "category": "Empathy & Inclusion • Special Script",
        "q": "What is the name of the special script with raised dots used by visually challenged people to read by touch?",
        "ans": "<strong>Answer:</strong><br>• It is called the <strong>Braille script</strong>.",
        "marks": 1.5,
        "rubric": [{ "key": "Braille script", "marks": "1.5 M" }]
      },
      {
        "category": "Opposites • Senses",
        "q": "Write the opposites of:<br>(a) Rough × _______<br>(b) Loud × _______",
        "ans": "<strong>Answer:</strong><br>(a) Rough × <strong>Smooth</strong><br>(b) Loud × <strong>Soft / Quiet</strong>",
        "marks": 2,
        "rubric": [{ "key": "Smooth and Soft/Quiet", "marks": "2 M" }]
      },
      {
        "category": "Let us Write • Sentence",
        "q": "Make a sentence using the word 'Listen'.",
        "ans": "<strong>Answer:</strong><br>• We must listen carefully to our teacher in the classroom.",
        "marks": 1.5,
        "rubric": [{ "key": "Grammatically sound sentence", "marks": "1.5 M" }]
      },
      {
        "category": "Think and Answer • Sound Clues",
        "q": "If you close your eyes, how can you tell that it has started raining?",
        "ans": "<strong>Answer:</strong><br>• We can hear the <strong>'pitter-patter' sound of raindrops</strong> on the tin roof and smell the <strong>fresh earthy fragrance (petrichor)</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Sound of raindrops and smell of wet soil", "marks": "2 M" }]
      },
      {
        "category": "Social Kindness • Helping Others",
        "q": "How can you assist a visually impaired person crossing the road?",
        "ans": "<strong>Answer:</strong><br>• We can politely ask if they need help, offer our arm, and guide them safely across the zebra crossing.",
        "marks": 2,
        "rubric": [{ "key": "Polite offer and guiding safely", "marks": "2 M" }]
      },
      {
        "category": "Singular and Plural • Body Parts",
        "q": "Write the plural form:<br>(a) One ear — Two _______<br>(b) One finger — Ten _______",
        "ans": "<strong>Answer:</strong><br>(a) Two <strong>ears</strong><br>(b) Ten <strong>fingers</strong>",
        "marks": 2,
        "rubric": [{ "key": "Ears and fingers", "marks": "2 M" }]
      },
      {
        "category": "True or False • Senses",
        "q": "Write True or False:<br>(a) Our tongue helps us to distinguish between salty and sweet tastes.<br>(b) We smell with our ears.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>True</strong><br>(b) <strong>False</strong> (We smell with our nose).",
        "marks": 2,
        "rubric": [{ "key": "Both evaluated correctly", "marks": "2 M" }]
      },
      {
        "category": "Fun Experiment • Hearing Distance",
        "q": "When a friend whispers far away, what happens when you cup your hand behind your ear?",
        "ans": "<strong>Answer:</strong><br>• Cupping our hand collects more sound waves, making the soft whisper sound <strong>louder and clearer</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Collects sound waves / sounds clearer", "marks": "2 M" }]
      },
      {
        "category": "Appreciation • Gratitude",
        "q": "Why should we be grateful for our five senses?",
        "ans": "<strong>Answer:</strong><br>• Our five senses help us enjoy beauty, communicate with others, learn new things, and stay safe from danger.",
        "marks": 2,
        "rubric": [{ "key": "Learning, enjoyment and safety", "marks": "2 M" }]
      }
    ]
  },
  {
    "id": "mrd5",
    "num": 5,
    "unit": "Unit 3: Going Places",
    "title": "Come Back Soon",
    "subtitle": "Grandparents' Departure, Train Station, Packing Bags & Family Love",
    "concepts": [
      "Story comprehension: Grandparents visiting, sharing fond memories, and returning to the village by train.",
      "Railway station scene: Long train, platform, whistle blowing, ticket checker, luggage bags.",
      "Emotional bonding: Waving goodbye from the carriage window and saying 'Come back soon!'",
      "Travel vocabulary: Train, platform, luggage, compartment, ticket, porter."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"10\"/><rect x=\"160\" y=\"45\" width=\"180\" height=\"50\" fill=\"#dc2626\" rx=\"6\"/><circle cx=\"200\" cy=\"95\" r=\"10\" fill=\"#1e293b\"/><circle cx=\"250\" cy=\"95\" r=\"10\" fill=\"#1e293b\"/><circle cx=\"300\" cy=\"95\" r=\"10\" fill=\"#1e293b\"/><rect x=\"180\" y=\"55\" width=\"25\" height=\"20\" fill=\"#ffffff\" rx=\"3\"/><rect x=\"230\" y=\"55\" width=\"25\" height=\"20\" fill=\"#ffffff\" rx=\"3\"/><rect x=\"280\" y=\"55\" width=\"25\" height=\"20\" fill=\"#ffffff\" rx=\"3\"/><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Come Back Soon: Choo-Choo Train & Loving Goodbyes</text></svg>",
    "cbq": {
      "title": "A Loving Farewell at the Station",
      "text": "Nani and Nana stayed at Priya's home for two wonderful weeks. On Sunday evening, the family accompanied them to the railway platform. As the train engine blew its long whistle 'Hoo-hoo!', Nani leaned out of the window with folded hands and said, 'Study well, Priya! Come back soon during summer holidays!'",
      "question": "Where was the family seeing off Nani and Nana? What affectionate message did Nani give to Priya?",
      "answer": "1. The family was seeing them off at the <strong>railway platform / train station</strong>.<br>2. Nani lovingly told Priya to <strong>study well and promised to welcome her soon during the summer holidays</strong>.",
      "rubric": "1.5 M for railway platform/station + 1.5 M for Nani's loving advice and invitation"
    },
    "questions": [
      {
        "category": "Story Comprehension • Visitors",
        "q": "Who had come to visit the family in the story 'Come Back Soon'?",
        "ans": "<strong>Answer:</strong><br>• The child's loving <strong>grandparents (Dada-Dadi or Nana-Nani)</strong> had come to visit from their village.",
        "marks": 1,
        "rubric": [{ "key": "Grandparents", "marks": "1 M" }]
      },
      {
        "category": "Story Comprehension • Mode of Travel",
        "q": "How were the grandparents traveling back to their village?",
        "ans": "<strong>Answer:</strong><br>• They were traveling back on a <strong>passenger train</strong>.",
        "marks": 1,
        "rubric": [{ "key": "By train", "marks": "1 M" }]
      },
      {
        "category": "Railway Vocabulary • What is it?",
        "q": "What is the long raised pathway beside the railway tracks where passengers wait called?",
        "ans": "<strong>Answer:</strong><br>• It is called a <strong>platform</strong>.",
        "marks": 1.5,
        "rubric": [{ "key": "Platform", "marks": "1.5 M" }]
      },
      {
        "category": "Sounds of Travel • Train Whistle",
        "q": "What sound does the train engine make before departing?",
        "ans": "<strong>Answer:</strong><br>• The train engine blows a loud whistle: <strong>'Hoo-hoo... Choo-choo!'</strong>",
        "marks": 1,
        "rubric": [{ "key": "Whistle sound (Hoo-hoo / Choo-choo)", "marks": "1 M" }]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in the blanks (ticket, luggage, window):<br>(a) Father bought the train ______ at the counter.<br>(b) Grandfather waved goodbye from the carriage ______.",
        "ans": "<strong>Answer:</strong><br>(a) Father bought the train <strong>ticket</strong> at the counter.<br>(b) Grandfather waved goodbye from the carriage <strong>window</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Ticket and Window", "marks": "2 M" }]
      },
      {
        "category": "Family Relations • Vocabulary",
        "q": "What do we call our mother's father and mother's mother?",
        "ans": "<strong>Answer:</strong><br>• Mother's father is called <strong>Nana (or Grandfather)</strong>.<br>• Mother's mother is called <strong>Nani (or Grandmother)</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Nana and Nani", "marks": "2 M" }]
      },
      {
        "category": "Opposite Words • Practice",
        "q": "Write the opposites of:<br>(a) Come × _______<br>(b) Soon × _______<br>(c) Depart × _______",
        "ans": "<strong>Answer:</strong><br>(a) Come × <strong>Go</strong><br>(b) Soon × <strong>Late</strong><br>(c) Depart × <strong>Arrive</strong>",
        "marks": 3,
        "rubric": [{ "key": "Go, Late, Arrive (1 M each)", "marks": "3 M" }]
      },
      {
        "category": "Helpers on Travel • Coolie / Porter",
        "q": "Who helps carry heavy suitcases at the railway station?",
        "ans": "<strong>Answer:</strong><br>• A <strong>coolie (or porter)</strong> in a red uniform helps carry heavy bags.",
        "marks": 1.5,
        "rubric": [{ "key": "Coolie / porter", "marks": "1.5 M" }]
      },
      {
        "category": "Sentence Writing • Travel",
        "q": "Make a sentence using the word 'Journey'.",
        "ans": "<strong>Answer:</strong><br>• Our train journey to Kerala was full of green hills and waterfalls.",
        "marks": 1.5,
        "rubric": [{ "key": "Meaningful sentence", "marks": "1.5 M" }]
      },
      {
        "category": "Safety Rules • Railway Station",
        "q": "Why must we never lean out of a moving train door or cross tracks on foot?",
        "ans": "<strong>Answer:</strong><br>• Leaning out or crossing tracks is extremely dangerous and can lead to severe accidents. We should always use the footbridge.",
        "marks": 2,
        "rubric": [{ "key": "Safety hazard and use footbridge", "marks": "2 M" }]
      },
      {
        "category": "Singular and Plural • Luggage",
        "q": "Give the plural forms:<br>(a) One train — Several _______<br>(b) One suitcase — Three _______",
        "ans": "<strong>Answer:</strong><br>(a) Several <strong>trains</strong><br>(b) Three <strong>suitcases</strong>",
        "marks": 2,
        "rubric": [{ "key": "Trains and suitcases", "marks": "2 M" }]
      },
      {
        "category": "Feelings and Emotions • Farewell",
        "q": "How do children feel when grandparents leave, and why?",
        "ans": "<strong>Answer:</strong><br>• Children feel a bit sad to part, but also happy remembering the loving stories and looking forward to visiting them soon.",
        "marks": 2,
        "rubric": [{ "key": "Loving attachment and anticipation", "marks": "2 M" }]
      },
      {
        "category": "Rhyming Words • Practice",
        "q": "Write a rhyming word for: Soon — _______.",
        "ans": "<strong>Answer:</strong><br>• Soon — <strong>Moon / Spoon / Noon</strong>.",
        "marks": 1,
        "rubric": [{ "key": "Moon/Spoon/Noon", "marks": "1 M" }]
      },
      {
        "category": "Creative Talk • Packing a Bag",
        "q": "Name three essential items you would pack when going on a train journey.",
        "ans": "<strong>Answer:</strong><br>1. <strong>A water bottle</strong><br>2. <strong>Comfortable clothes</strong><br>3. <strong>A snack box (and a storybook)</strong>",
        "marks": 2,
        "rubric": [{ "key": "Three realistic travel items", "marks": "2 M" }]
      }
    ]
  },
  {
    "id": "mrd6",
    "num": 6,
    "unit": "Unit 3: Going Places",
    "title": "Between Home and School",
    "subtitle": "Daily Route, Landmarks, Banyan Tree, Post Office, Traffic & Zebra Crossing",
    "concepts": [
      "Poem/Story comprehension: Sights and sounds experienced on the daily walk from home to school.",
      "Community landmarks: The big banyan tree, the green grocery shop, the red post box, the bakery.",
      "Road safety & pedestrian rules: Using the sidewalk (footpath) and crossing at the zebra crossing.",
      "Spatial prepositions: Past the temple, across the road, around the corner, through the gate."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f1f5f9\" rx=\"10\"/><rect x=\"0\" y=\"70\" width=\"500\" height=\"35\" fill=\"#334155\"/><line x1=\"210\" y1=\"75\" x2=\"210\" y2=\"100\" stroke=\"#ffffff\" stroke-width=\"4\"/><line x1=\"230\" y1=\"75\" x2=\"230\" y2=\"100\" stroke=\"#ffffff\" stroke-width=\"4\"/><line x1=\"250\" y1=\"75\" x2=\"250\" y2=\"100\" stroke=\"#ffffff\" stroke-width=\"4\"/><line x1=\"270\" y1=\"75\" x2=\"270\" y2=\"100\" stroke=\"#ffffff\" stroke-width=\"4\"/><text x=\"250\" y=\"114\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#f8fafc\" text-anchor=\"middle\">Between Home and School: Walk on Footpath, Cross at Zebra Crossing</text></svg>",
    "cbq": {
      "title": "Samir's Morning Walk",
      "text": "Samir walks to school every morning holding his elder sister's hand. On the way, they drop a letter into the round red post box, greet the fruit seller who slices fresh watermelons, and stop at the zebra crossing until the traffic light turns green.",
      "question": "What two landmarks does Samir pass on his way to school? How does he safely cross the busy road?",
      "answer": "1. Samir passes the <strong>red post box</strong> and the <strong>fruit seller's shop</strong>.<br>2. He crosses the road safely by <strong>holding his elder sister's hand and waiting at the zebra crossing until the pedestrian signal turns green</strong>.",
      "rubric": "1.5 M for two landmarks + 1.5 M for pedestrian safety rule at zebra crossing"
    },
    "questions": [
      {
        "category": "Comprehension • Daily Walk",
        "q": "How does the child travel between home and school in the lesson?",
        "ans": "<strong>Answer:</strong><br>• The child travels by <strong>walking along the footpath</strong> with friends or family.",
        "marks": 1,
        "rubric": [{ "key": "Walking along footpath", "marks": "1 M" }]
      },
      {
        "category": "Landmarks • Red Post Box",
        "q": "What colour is the post box seen on the street corner, and what is it used for?",
        "ans": "<strong>Answer:</strong><br>• The post box is painted <strong>bright red</strong>, and people drop letters inside it for the postman to deliver.",
        "marks": 2,
        "rubric": [{ "key": "Red colour and dropping letters", "marks": "2 M" }]
      },
      {
        "category": "Road Safety • Zebra Crossing",
        "q": "What are the black and white stripes painted on the road called?",
        "ans": "<strong>Answer:</strong><br>• They are called a <strong>zebra crossing</strong>, where pedestrians can cross safely.",
        "marks": 1.5,
        "rubric": [{ "key": "Zebra crossing", "marks": "1.5 M" }]
      },
      {
        "category": "Traffic Light • Signal Colours",
        "q": "What do the three colours of the traffic light mean?<br>(a) Red (b) Yellow (c) Green",
        "ans": "<strong>Answer:</strong><br>• <strong>Red:</strong> Stop<br>• <strong>Yellow:</strong> Wait / Get ready<br>• <strong>Green:</strong> Go",
        "marks": 3,
        "rubric": [{ "key": "Stop, Wait, Go (1 M each)", "marks": "3 M" }]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in with words from the lesson (banyan, bell, footpath):<br>(a) We should always walk on the ______.<br>(b) There is a huge shady ______ tree near the school gate.",
        "ans": "<strong>Answer:</strong><br>(a) We should always walk on the <strong>footpath</strong>.<br>(b) There is a huge shady <strong>banyan</strong> tree near the school gate.",
        "marks": 2,
        "rubric": [{ "key": "Footpath and Banyan", "marks": "2 M" }]
      },
      {
        "category": "Prepositions • Direction Words",
        "q": "Choose the right preposition (across, through, under):<br>(a) Walk ______ the zebra crossing.<br>(b) Sit ______ the shady tree.",
        "ans": "<strong>Answer:</strong><br>(a) Walk <strong>across</strong> the zebra crossing.<br>(b) Sit <strong>under</strong> the shady tree.",
        "marks": 2,
        "rubric": [{ "key": "Across and Under", "marks": "2 M" }]
      },
      {
        "category": "Vocabulary • Sights on the Street",
        "q": "Name three shops or places you see on your way from home to school.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Bakery / Sweet shop</strong><br>2. <strong>Stationery and book shop</strong><br>3. <strong>Vegetable and fruit stall</strong>",
        "marks": 3,
        "rubric": [{ "key": "Three realistic neighbourhood shops", "marks": "3 M" }]
      },
      {
        "category": "Opposites • Places",
        "q": "Write the opposites of:<br>(a) Near × _______<br>(b) Before × _______",
        "ans": "<strong>Answer:</strong><br>(a) Near × <strong>Far</strong><br>(b) Before × <strong>After</strong>",
        "marks": 2,
        "rubric": [{ "key": "Far and After", "marks": "2 M" }]
      },
      {
        "category": "Sentence Making • School",
        "q": "Make a sentence using the word 'Gate'.",
        "ans": "<strong>Answer:</strong><br>• The guard opens the school gate when the morning bell rings.",
        "marks": 1.5,
        "rubric": [{ "key": "Correct grammatical sentence", "marks": "1.5 M" }]
      },
      {
        "category": "Rhyming Words • Sound Match",
        "q": "Write rhyming words for:<br>(a) Street — _______<br>(b) Tree — _______",
        "ans": "<strong>Answer:</strong><br>(a) Street — <strong>Meet / Sweet / Feet</strong><br>(b) Tree — <strong>Free / See / Bee</strong>",
        "marks": 2,
        "rubric": [{ "key": "Meet/Sweet and Free/See", "marks": "2 M" }]
      },
      {
        "category": "Think and Answer • Punctuality",
        "q": "Why is it good to leave home ten minutes early for school?",
        "ans": "<strong>Answer:</strong><br>• Leaving early ensures we walk without rushing, cross roads safely, and reach our classroom before the prayer assembly starts.",
        "marks": 2,
        "rubric": [{ "key": "Safety, avoiding rushing, on-time arrival", "marks": "2 M" }]
      },
      {
        "category": "True or False • Pedestrian Safety",
        "q": "Write True or False:<br>(a) It is safe to play with a football on a busy vehicular road.<br>(b) We must look right, then left, and right again before crossing.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>False</strong><br>(b) <strong>True</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Both answered correctly", "marks": "2 M" }]
      },
      {
        "category": "Grammar • Capital Letters",
        "q": "Rewrite with capital letters where needed: 'we cross the road in front of st. mary school.'",
        "ans": "<strong>Answer:</strong><br>• \"<strong>W</strong>e cross the road in front of <strong>S</strong>t. <strong>M</strong>ary <strong>S</strong>chool.\"",
        "marks": 2,
        "rubric": [{ "key": "Capitalized 'We' and 'St. Mary School'", "marks": "2 M" }]
      },
      {
        "category": "Drawing Route • Spatial Sense",
        "q": "What is a map?",
        "ans": "<strong>Answer:</strong><br>• A map is a drawing that shows paths, roads, and landmark locations to guide travelers from one place to another.",
        "marks": 1.5,
        "rubric": [{ "key": "Clear simple definition of map", "marks": "1.5 M" }]
      }
    ]
  },
  {
    "id": "mrd7",
    "num": 7,
    "unit": "Unit 3: Going Places",
    "title": "This is My Town",
    "subtitle": "Community Life, Clean Streets, Library, Market, Park & Helpers",
    "concepts": [
      "Poem comprehension: Celebrating one's hometown—wide roads, bright markets, quiet library, and leafy parks.",
      "Civic amenities: Hospital, post office, fire station, school, municipal garden.",
      "Cleanliness & civic duty: Keeping public streets clean and throwing waste in trash cans.",
      "Rhyming pairs: Town-brown, street-meet, park-bark, clean-green."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#e0f2fe\" rx=\"10\"/><rect x=\"80\" y=\"40\" width=\"60\" height=\"55\" fill=\"#0284c7\" rx=\"4\"/><rect x=\"180\" y=\"30\" width=\"70\" height=\"65\" fill=\"#0369a1\" rx=\"4\"/><rect x=\"290\" y=\"45\" width=\"60\" height=\"50\" fill=\"#0284c7\" rx=\"4\"/><circle cx=\"420\" cy=\"60\" r=\"20\" fill=\"#16a34a\"/><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0c4a6e\" text-anchor=\"middle\">This is My Town: Clean Streets, Green Parks & Happy People</text></svg>",
    "cbq": {
      "title": "A Walk Through Green Valley Town",
      "text": "Green Valley is a tidy town with flower beds lining every avenue. In the centre stands a bright public library where children read peacefully on weekends, next to a large park where birds nest in flowering amaltas trees.",
      "question": "What two public facilities are mentioned in the town? How do the town residents keep their town clean and beautiful?",
      "answer": "1. The text mentions a <strong>public library</strong> and a <strong>large leafy park</strong>.<br>2. Residents plant <strong>flower beds, care for trees, and maintain tidy streets</strong> without littering.",
      "rubric": "1.5 M for library and park + 1.5 M for planting flowers and avoiding litter"
    },
    "questions": [
      {
        "category": "Poem Comprehension • The Town",
        "q": "What makes the town look pleasant and inviting in the poem 'This is My Town'?",
        "ans": "<strong>Answer:</strong><br>• The town looks pleasant with its <strong>wide, clean streets, friendly neighbours, shady trees, and cheerful marketplace</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Clean streets, trees, and markets", "marks": "2 M" }]
      },
      {
        "category": "Civic Places • Reading Books",
        "q": "Where do children and adults go in town to borrow and read interesting books?",
        "ans": "<strong>Answer:</strong><br>• They go to the <strong>town library</strong>.",
        "marks": 1,
        "rubric": [{ "key": "Library", "marks": "1 M" }]
      },
      {
        "category": "Emergency Helpers • Hospitals",
        "q": "Where do people rush when someone suddenly falls ill?",
        "ans": "<strong>Answer:</strong><br>• They rush to the <strong>hospital or health clinic</strong> where doctors and nurses provide care.",
        "marks": 1.5,
        "rubric": [{ "key": "Hospital / clinic", "marks": "1.5 M" }]
      },
      {
        "category": "Matching Exercise • Places and Services",
        "q": "Match each place with its role:<br>(a) Fire Station — (1) Teaches children<br>(b) School — (2) Puts out dangerous fires<br>(c) Market — (3) Sells vegetables and groceries",
        "ans": "<strong>Answer:</strong><br>(a) Fire Station — <strong>(2) Puts out fires</strong><br>(b) School — <strong>(1) Teaches children</strong><br>(c) Market — <strong>(3) Sells groceries</strong>",
        "marks": 3,
        "rubric": [{ "key": "All three matched accurately", "marks": "3 M" }]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in with words (dustbin, park, street):<br>(a) We play cricket in the town ______.<br>(b) Always throw chocolate wrappers into the ______.",
        "ans": "<strong>Answer:</strong><br>(a) We play cricket in the town <strong>park</strong>.<br>(b) Always throw chocolate wrappers into the <strong>dustbin</strong>.",
        "marks": 2,
        "rubric": [{ "key": "Park and Dustbin", "marks": "2 M" }]
      },
      {
        "category": "Rhyming Words • Sound Identification",
        "q": "Find rhyming words for:<br>(a) Town — _______<br>(b) Clean — _______",
        "ans": "<strong>Answer:</strong><br>(a) Town — <strong>Brown / Down / Crown</strong><br>(b) Clean — <strong>Green / Seen / Bean</strong>",
        "marks": 2,
        "rubric": [{ "key": "Brown/Down and Green/Seen", "marks": "2 M" }]
      },
      {
        "category": "Vocabulary • City vs Village",
        "q": "Give one difference between a big city and a quiet village.",
        "ans": "<strong>Answer:</strong><br>• A big city has tall buildings, heavy traffic, and shopping malls, while a village has open green fields, fewer vehicles, and fresh breeze.",
        "marks": 2,
        "rubric": [{ "key": "Clear comparison of traffic and nature", "marks": "2 M" }]
      },
      {
        "category": "Sentence Writing • My Town",
        "q": "Make a sentence using the word: 'Neighbour'.",
        "ans": "<strong>Answer:</strong><br>• My neighbour Mr. Sharma always shares sweet mangoes from his orchard.",
        "marks": 1.5,
        "rubric": [{ "key": "Meaningful sentence", "marks": "1.5 M" }]
      },
      {
        "category": "Civic Responsibility • Cleanliness",
        "q": "What is our duty towards public parks and streets?",
        "ans": "<strong>Answer:</strong><br>• It is our duty <strong>never to litter, avoid plucking flowers, and keep park benches clean</strong> for everyone.",
        "marks": 2,
        "rubric": [{ "key": "No littering, protecting flowers/benches", "marks": "2 M" }]
      },
      {
        "category": "Opposites • City Life",
        "q": "Write the opposites of:<br>(a) Clean × _______<br>(b) Quiet × _______",
        "ans": "<strong>Answer:</strong><br>(a) Clean × <strong>Dirty</strong><br>(b) Quiet × <strong>Noisy</strong>",
        "marks": 2,
        "rubric": [{ "key": "Dirty and Noisy", "marks": "2 M" }]
      },
      {
        "category": "Singular and Plural • Town",
        "q": "Give the plural form:<br>(a) One street — Many _______<br>(b) One building — Several _______",
        "ans": "<strong>Answer:</strong><br>(a) Many <strong>streets</strong><br>(b) Several <strong>buildings</strong>",
        "marks": 2,
        "rubric": [{ "key": "Streets and buildings", "marks": "2 M" }]
      },
      {
        "category": "True or False • Town Life",
        "q": "Write True or False:<br>(a) Fire engines rush to put out fires with ringing sirens.<br>(b) We should spit on footpaths and walls.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>True</strong><br>(b) <strong>False</strong> (Spitting spreads diseases).",
        "marks": 2,
        "rubric": [{ "key": "Both answered correctly", "marks": "2 M" }]
      },
      {
        "category": "Personal Identification • Address",
        "q": "Why should every child memorize their home address and phone number?",
        "ans": "<strong>Answer:</strong><br>• If a child gets lost in a crowded market or fair, knowing their address and parent's phone number helps police or elders guide them home safely.",
        "marks": 2,
        "rubric": [{ "key": "Safety in case of getting lost", "marks": "2 M" }]
      },
      {
        "category": "Creative Expression • Town Slogan",
        "q": "Write a short slogan to keep your town green and clean.",
        "ans": "<strong>Answer:</strong><br>• <strong>\"Clean Town, Green Town; Spread Happiness All Around!\"</strong>",
        "marks": 1.5,
        "rubric": [{ "key": "Catchy clean-town slogan", "marks": "1.5 M" }]
      }
    ]
  }
];

module.exports = { mridangPart1 };
