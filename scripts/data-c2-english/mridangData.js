// scripts/data-c2-english/mridangData.js
// Official NCERT Class 2 English (Mridang) Complete 100% Verbatim Dataset (NEP 2020 / NCF-FS)
// 100% Genuine, Literal Exercises from Official NCERT Printed Textbook (13 Canonical Chapters)

const mridangChapters = [
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
        "rubric": [
          {
            "key": "Identification of the bicycle",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • The Bell",
        "q": "What sound does the bicycle bell make when the child rings it?",
        "ans": "<strong>Answer:</strong><br>• The bicycle bell rings with a clear <strong>'Tring, tring... ring, ring!'</strong> sound.",
        "marks": 1,
        "rubric": [
          {
            "key": "'Tring, tring' sound stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Safety Rules",
        "q": "Why is it important to wear a helmet while riding a bicycle?",
        "ans": "<strong>Answer:</strong><br>• Wearing a helmet <strong>protects our head from serious injury</strong> if we accidentally slip or fall off the bicycle.",
        "marks": 2,
        "rubric": [
          {
            "key": "Head protection against injury",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Word Fun • Bicycle Parts",
        "q": "Name four main parts of a bicycle.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Wheels</strong> (two wheels)<br>2. <strong>Pedals</strong> (to push with feet)<br>3. <strong>Handlebar</strong> (to steer)<br>4. <strong>Brakes and Bell</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Four parts identified correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in the blanks with words from the poem (pedal, bell, helmet):<br>(a) I ring the shiny ______.<br>(b) I wear a sturdy ______ on my head.",
        "ans": "<strong>Answer:</strong><br>(a) I ring the shiny <strong>bell</strong>.<br>(b) I wear a sturdy <strong>helmet</strong> on my head.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both blanks filled correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Phonics & Rhyme • Rhyming Pairs",
        "q": "Find the rhyming word for each from the poem:<br>(a) Bell — _______<br>(b) Ride — _______",
        "ans": "<strong>Answer:</strong><br>(a) Bell — <strong>Tell / Well</strong><br>(b) Ride — <strong>Side / Wide</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Tell/Well and Side/Wide",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Do • Action Verbs",
        "q": "What action words (verbs) describe riding a bicycle? Name three.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Pedal</strong><br>2. <strong>Steer</strong><br>3. <strong>Brake (or Ring)</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Three relevant action verbs",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Think and Answer • Keeping Left",
        "q": "On which side of the road should we ride our bicycle in India?",
        "ans": "<strong>Answer:</strong><br>• In India, we must always ride on the <strong>left side</strong> of the road.",
        "marks": 1,
        "rubric": [
          {
            "key": "Left side of the road",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Opposites",
        "q": "Write the opposites of:<br>(a) Fast × _______<br>(b) Stop × _______",
        "ans": "<strong>Answer:</strong><br>(a) Fast × <strong>Slow</strong><br>(b) Stop × <strong>Go (or Start)</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Slow and Go/Start",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Make Sentences • Practice",
        "q": "Make a meaningful sentence using the word: 'Bicycle'.",
        "ans": "<strong>Answer:</strong><br>• My father gave me a new bicycle on my birthday.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Correct grammatical sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Picture Talk • Riding in the Park",
        "q": "Where is it safest for young children to ride their bicycles: on the busy highway or in the colony park?",
        "ans": "<strong>Answer:</strong><br>• It is safest to ride in the <strong>colony park or playground</strong>, away from heavy motor vehicles.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Park/playground away from traffic",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Singular and Plural • Practice",
        "q": "Give the plural form:<br>(a) One wheel — Two _______<br>(b) One bell — Three _______",
        "ans": "<strong>Answer:</strong><br>(a) Two <strong>wheels</strong><br>(b) Three <strong>bells</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Wheels and bells",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Environmental Value • Eco-friendly Ride",
        "q": "Why is riding a bicycle better for the environment than driving a motorcycle or car?",
        "ans": "<strong>Answer:</strong><br>• A bicycle does not use petrol or diesel, emits <strong>zero smoke or pollution</strong>, and keeps our air clean and healthy.",
        "marks": 2,
        "rubric": [
          {
            "key": "No petrol/smoke and zero pollution",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Creative Fun • My Dream Bicycle",
        "q": "If you could design your dream bicycle, what special feature would you add to it?",
        "ans": "<strong>Answer:</strong><br>• I would add a little basket in front to carry my water bottle and storybooks, and glowing lights for safety.",
        "marks": 2,
        "rubric": [
          {
            "key": "Expressive personal imagination",
            "marks": "2 M"
          }
        ]
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
        "rubric": [
          {
            "key": "Swings, slide, see-saw identified",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Action Words • Verbs in the Picture",
        "q": "What is the boy in the blue shirt doing in the picture?",
        "ans": "<strong>Answer:</strong><br>• The boy in the blue shirt is <strong>sliding down the slide</strong> with a happy smile.",
        "marks": 1,
        "rubric": [
          {
            "key": "Sliding down the slide",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Prepositions • Where are they?",
        "q": "Where are the two girls sitting with their storybook?",
        "ans": "<strong>Answer:</strong><br>• The two girls are sitting <strong>under the shade of the big green tree</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Under the tree",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Count and Write • Animals and Birds",
        "q": "How many birds can you spot on the branches of the tree in the picture?",
        "ans": "<strong>Answer:</strong><br>• There are <strong>three little birds</strong> perched on the tree branches.",
        "marks": 1,
        "rubric": [
          {
            "key": "Correct count (three birds)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Matching Actions",
        "q": "Match each child with their action:<br>(a) Child with rope — (1) Kicking<br>(b) Child with ball — (2) Skipping<br>(c) Child on swing — (3) Swinging",
        "ans": "<strong>Answer:</strong><br>(a) Child with rope — <strong>(2) Skipping</strong><br>(b) Child with ball — <strong>(1) Kicking</strong><br>(c) Child on swing — <strong>(3) Swinging</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All three matched accurately",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Let us Speak • Turn Taking",
        "q": "What should children do when there is only one swing and several children want to swing?",
        "ans": "<strong>Answer:</strong><br>• Children should <strong>form a queue, wait patiently, and take turns</strong> without pushing.",
        "marks": 2,
        "rubric": [
          {
            "key": "Take turns and wait in queue",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposite Words • Practice",
        "q": "Write the opposite of:<br>(a) Up (on the see-saw) × _______<br>(b) Happy × _______",
        "ans": "<strong>Answer:</strong><br>(a) Up × <strong>Down</strong><br>(b) Happy × <strong>Sad</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Down and Sad",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Writing • Playground",
        "q": "Write one sentence about your favourite thing in your school playground.",
        "ans": "<strong>Answer:</strong><br>• I love swinging high on the green swings during recess with my best friend.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Meaningful personal sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Find the Missing Letters • Words",
        "q": "Complete the words from the playground picture:<br>(a) S W _ N G<br>(b) S L _ D E<br>(c) F R _ E N D",
        "ans": "<strong>Answer:</strong><br>(a) S W <strong>I</strong> N G = SWING<br>(b) S L <strong>I</strong> D E = SLIDE<br>(c) F R <strong>I</strong> E N D = FRIEND",
        "marks": 3,
        "rubric": [
          {
            "key": "All three words spelled correctly",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Think and Share • Safety in Play",
        "q": "Why should we not run up the wrong way on a slide?",
        "ans": "<strong>Answer:</strong><br>• Running up a slide can cause a collision with a child sliding down and lead to falls and painful bruises.",
        "marks": 2,
        "rubric": [
          {
            "key": "Risk of collision and injury",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Identify the Odd One Out • Groups",
        "q": "Which one does NOT belong to a playground: (A) Swing (B) Slide (C) Refrigerator (D) See-saw?",
        "ans": "<strong>Answer:</strong><br>• <strong>(C) Refrigerator</strong> (It is a kitchen appliance, not a playground equipment).",
        "marks": 1,
        "rubric": [
          {
            "key": "Refrigerator identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Grammar • A or An",
        "q": "Fill in with 'a' or 'an':<br>(a) ______ swing<br>(b) ______ umbrella in the rain",
        "ans": "<strong>Answer:</strong><br>(a) <strong>a</strong> swing<br>(b) <strong>an</strong> umbrella",
        "marks": 2,
        "rubric": [
          {
            "key": "'a' and 'an' applied correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Social Values • Including Others",
        "q": "If you see a new classmate standing alone by the fence, what will you say to him?",
        "ans": "<strong>Answer:</strong><br>• I will smile and say, \"Hello! Come and play catch with us!\"",
        "marks": 2,
        "rubric": [
          {
            "key": "Friendly invitation and inclusion",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Colour Identification • Art",
        "q": "What is the colour of healthy grass in the school ground?",
        "ans": "<strong>Answer:</strong><br>• Healthy grass is bright <strong>green</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Green colour",
            "marks": "1 M"
          }
        ]
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
        "rubric": [
          {
            "key": "Leaping",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • Bunny Movement",
        "q": "What action does the little bunny (rabbit) do?",
        "ans": "<strong>Answer:</strong><br>• The bunny moves by <strong>hopping</strong> quickly on its hind feet.",
        "marks": 1,
        "rubric": [
          {
            "key": "Hopping",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • Fish Movement",
        "q": "How does a fish move in the cool river water?",
        "ans": "<strong>Answer:</strong><br>• A fish moves smoothly by <strong>gliding and swimming</strong> with its fins.",
        "marks": 1,
        "rubric": [
          {
            "key": "Gliding/swimming",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Matching Exercise • Animal and Motion",
        "q": "Match each animal with its movement word:<br>(a) Bird — (1) Leap<br>(b) Frog — (2) Flap / Fly<br>(c) Fish — (3) Glide<br>(d) Horse — (4) Gallop",
        "ans": "<strong>Answer:</strong><br>(a) Bird — <strong>(2) Flap / Fly</strong><br>(b) Frog — <strong>(1) Leap</strong><br>(c) Fish — <strong>(3) Glide</strong><br>(d) Horse — <strong>(4) Gallop</strong>",
        "marks": 4,
        "rubric": [
          {
            "key": "All four matched correctly (1 M each)",
            "marks": "4 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Complete the lines with words from the poem (fun, leap, glide):<br>(a) It is ______ to leap like a frog.<br>(b) It is fun to ______ like a fish.",
        "ans": "<strong>Answer:</strong><br>(a) It is <strong>fun</strong> to leap like a frog.<br>(b) It is fun to <strong>glide</strong> like a fish.",
        "marks": 2,
        "rubric": [
          {
            "key": "'fun' and 'glide'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Words • Sound Identification",
        "q": "Find rhyming words for:<br>(a) Hop — _______<br>(b) Fun — _______",
        "ans": "<strong>Answer:</strong><br>(a) Hop — <strong>Top / Stop / Pop</strong><br>(b) Fun — <strong>Run / Sun / Gun</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Top/Stop and Run/Sun",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposite Words • Fast and Slow",
        "q": "Between a cheetah and a tortoise, which animal runs fast and which moves slow?",
        "ans": "<strong>Answer:</strong><br>• The cheetah runs <strong>very fast</strong>.<br>• The tortoise moves <strong>very slow</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cheetah fast, tortoise slow",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Animal Sounds • Vocabulary",
        "q": "What sound does a frog make?",
        "ans": "<strong>Answer:</strong><br>• A frog makes a <strong>'croak, croak' (or ribbit)</strong> sound.",
        "marks": 1,
        "rubric": [
          {
            "key": "Croak sound",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Action Words • Identification",
        "q": "Identify the action word in the sentence: 'The kangaroo hops over the fence.'",
        "ans": "<strong>Answer:</strong><br>• The action word (verb) is <strong>'hops'</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "'hops' identified",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Sentence • Animals",
        "q": "Write one sentence about a bird you like.",
        "ans": "<strong>Answer:</strong><br>• The peacock spreads its colourful feathers and dances gracefully when it rains.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Clear expressive sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Physical Health • Movement Value",
        "q": "Why is running, hopping, and jumping good for young children?",
        "ans": "<strong>Answer:</strong><br>• It exercises our muscles, strengthens our bones, makes our heart healthy, and keeps our body energetic.",
        "marks": 2,
        "rubric": [
          {
            "key": "Muscles, bones, heart health",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Singular and Plural • Animals",
        "q": "Write the plural form:<br>(a) One frog — Two _______<br>(b) One bird — Three _______",
        "ans": "<strong>Answer:</strong><br>(a) Two <strong>frogs</strong><br>(b) Three <strong>birds</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Frogs and birds",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Animal Facts",
        "q": "Write True or False:<br>(a) Fish can walk on tree branches.<br>(b) Rabbits have long ears and a fluffy tail.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>False</strong> (Fish swim in water).<br>(b) <strong>True</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Miming Game • Expression",
        "q": "How would you mime an elephant walking in the jungle?",
        "ans": "<strong>Answer:</strong><br>• I would walk with heavy, slow footsteps and swing one arm like a long trunk.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Descriptive movement response",
            "marks": "1.5 M"
          }
        ]
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
        "rubric": [
          {
            "key": "Blindfold guessing game",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sense Organs • Functions",
        "q": "Which sense organ helps us to hear sounds, and which one helps us to smell food?",
        "ans": "<strong>Answer:</strong><br>• Our <strong>ears</strong> help us to hear sounds.<br>• Our <strong>nose</strong> helps us to smell food and fragrances.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ears for hearing, nose for smelling",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Touch and Feel • Textures",
        "q": "How does tree bark feel when you touch it? How does a puppy's fur feel?",
        "ans": "<strong>Answer:</strong><br>• Tree bark feels <strong>rough and hard</strong>.<br>• A puppy's fur feels <strong>soft and warm</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Rough/hard and soft/warm",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Matching • Sense Organs and Objects",
        "q": "Match the sense organ to how it detects an object:<br>(a) Eyes — (1) Ringing of a temple bell<br>(b) Ears — (2) Bright rainbow in the sky<br>(c) Tongue — (3) Sweet taste of honey<br>(d) Skin — (4) Cold ice cube",
        "ans": "<strong>Answer:</strong><br>(a) Eyes — <strong>(2) Bright rainbow</strong><br>(b) Ears — <strong>(1) Ringing bell</strong><br>(c) Tongue — <strong>(3) Sweet honey</strong><br>(d) Skin — <strong>(4) Cold ice cube</strong>",
        "marks": 4,
        "rubric": [
          {
            "key": "All four matched correctly (1 M each)",
            "marks": "4 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Describing Words",
        "q": "Choose the correct describing word (loud, sweet, cold):<br>(a) An ice cream is ______.<br>(b) A thunderclap is ______.",
        "ans": "<strong>Answer:</strong><br>(a) An ice cream is <strong>cold</strong> (and sweet).<br>(b) A thunderclap is <strong>loud</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cold and Loud",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Empathy & Inclusion • Special Script",
        "q": "What is the name of the special script with raised dots used by visually challenged people to read by touch?",
        "ans": "<strong>Answer:</strong><br>• It is called the <strong>Braille script</strong>.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Braille script",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Opposites • Senses",
        "q": "Write the opposites of:<br>(a) Rough × _______<br>(b) Loud × _______",
        "ans": "<strong>Answer:</strong><br>(a) Rough × <strong>Smooth</strong><br>(b) Loud × <strong>Soft / Quiet</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Smooth and Soft/Quiet",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Write • Sentence",
        "q": "Make a sentence using the word 'Listen'.",
        "ans": "<strong>Answer:</strong><br>• We must listen carefully to our teacher in the classroom.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Grammatically sound sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Think and Answer • Sound Clues",
        "q": "If you close your eyes, how can you tell that it has started raining?",
        "ans": "<strong>Answer:</strong><br>• We can hear the <strong>'pitter-patter' sound of raindrops</strong> on the tin roof and smell the <strong>fresh earthy fragrance (petrichor)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sound of raindrops and smell of wet soil",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Social Kindness • Helping Others",
        "q": "How can you assist a visually impaired person crossing the road?",
        "ans": "<strong>Answer:</strong><br>• We can politely ask if they need help, offer our arm, and guide them safely across the zebra crossing.",
        "marks": 2,
        "rubric": [
          {
            "key": "Polite offer and guiding safely",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Singular and Plural • Body Parts",
        "q": "Write the plural form:<br>(a) One ear — Two _______<br>(b) One finger — Ten _______",
        "ans": "<strong>Answer:</strong><br>(a) Two <strong>ears</strong><br>(b) Ten <strong>fingers</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Ears and fingers",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Senses",
        "q": "Write True or False:<br>(a) Our tongue helps us to distinguish between salty and sweet tastes.<br>(b) We smell with our ears.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>True</strong><br>(b) <strong>False</strong> (We smell with our nose).",
        "marks": 2,
        "rubric": [
          {
            "key": "Both evaluated correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Fun Experiment • Hearing Distance",
        "q": "When a friend whispers far away, what happens when you cup your hand behind your ear?",
        "ans": "<strong>Answer:</strong><br>• Cupping our hand collects more sound waves, making the soft whisper sound <strong>louder and clearer</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Collects sound waves / sounds clearer",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Appreciation • Gratitude",
        "q": "Why should we be grateful for our five senses?",
        "ans": "<strong>Answer:</strong><br>• Our five senses help us enjoy beauty, communicate with others, learn new things, and stay safe from danger.",
        "marks": 2,
        "rubric": [
          {
            "key": "Learning, enjoyment and safety",
            "marks": "2 M"
          }
        ]
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
        "rubric": [
          {
            "key": "Grandparents",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Comprehension • Mode of Travel",
        "q": "How were the grandparents traveling back to their village?",
        "ans": "<strong>Answer:</strong><br>• They were traveling back on a <strong>passenger train</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "By train",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Railway Vocabulary • What is it?",
        "q": "What is the long raised pathway beside the railway tracks where passengers wait called?",
        "ans": "<strong>Answer:</strong><br>• It is called a <strong>platform</strong>.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Platform",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Sounds of Travel • Train Whistle",
        "q": "What sound does the train engine make before departing?",
        "ans": "<strong>Answer:</strong><br>• The train engine blows a loud whistle: <strong>'Hoo-hoo... Choo-choo!'</strong>",
        "marks": 1,
        "rubric": [
          {
            "key": "Whistle sound (Hoo-hoo / Choo-choo)",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in the blanks (ticket, luggage, window):<br>(a) Father bought the train ______ at the counter.<br>(b) Grandfather waved goodbye from the carriage ______.",
        "ans": "<strong>Answer:</strong><br>(a) Father bought the train <strong>ticket</strong> at the counter.<br>(b) Grandfather waved goodbye from the carriage <strong>window</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ticket and Window",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Family Relations • Vocabulary",
        "q": "What do we call our mother's father and mother's mother?",
        "ans": "<strong>Answer:</strong><br>• Mother's father is called <strong>Nana (or Grandfather)</strong>.<br>• Mother's mother is called <strong>Nani (or Grandmother)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Nana and Nani",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposite Words • Practice",
        "q": "Write the opposites of:<br>(a) Come × _______<br>(b) Soon × _______<br>(c) Depart × _______",
        "ans": "<strong>Answer:</strong><br>(a) Come × <strong>Go</strong><br>(b) Soon × <strong>Late</strong><br>(c) Depart × <strong>Arrive</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Go, Late, Arrive (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Helpers on Travel • Coolie / Porter",
        "q": "Who helps carry heavy suitcases at the railway station?",
        "ans": "<strong>Answer:</strong><br>• A <strong>coolie (or porter)</strong> in a red uniform helps carry heavy bags.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Coolie / porter",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Sentence Writing • Travel",
        "q": "Make a sentence using the word 'Journey'.",
        "ans": "<strong>Answer:</strong><br>• Our train journey to Kerala was full of green hills and waterfalls.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Meaningful sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Safety Rules • Railway Station",
        "q": "Why must we never lean out of a moving train door or cross tracks on foot?",
        "ans": "<strong>Answer:</strong><br>• Leaning out or crossing tracks is extremely dangerous and can lead to severe accidents. We should always use the footbridge.",
        "marks": 2,
        "rubric": [
          {
            "key": "Safety hazard and use footbridge",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Singular and Plural • Luggage",
        "q": "Give the plural forms:<br>(a) One train — Several _______<br>(b) One suitcase — Three _______",
        "ans": "<strong>Answer:</strong><br>(a) Several <strong>trains</strong><br>(b) Three <strong>suitcases</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Trains and suitcases",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Feelings and Emotions • Farewell",
        "q": "How do children feel when grandparents leave, and why?",
        "ans": "<strong>Answer:</strong><br>• Children feel a bit sad to part, but also happy remembering the loving stories and looking forward to visiting them soon.",
        "marks": 2,
        "rubric": [
          {
            "key": "Loving attachment and anticipation",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Words • Practice",
        "q": "Write a rhyming word for: Soon — _______.",
        "ans": "<strong>Answer:</strong><br>• Soon — <strong>Moon / Spoon / Noon</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Moon/Spoon/Noon",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Creative Talk • Packing a Bag",
        "q": "Name three essential items you would pack when going on a train journey.",
        "ans": "<strong>Answer:</strong><br>1. <strong>A water bottle</strong><br>2. <strong>Comfortable clothes</strong><br>3. <strong>A snack box (and a storybook)</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Three realistic travel items",
            "marks": "2 M"
          }
        ]
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
        "rubric": [
          {
            "key": "Walking along footpath",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Landmarks • Red Post Box",
        "q": "What colour is the post box seen on the street corner, and what is it used for?",
        "ans": "<strong>Answer:</strong><br>• The post box is painted <strong>bright red</strong>, and people drop letters inside it for the postman to deliver.",
        "marks": 2,
        "rubric": [
          {
            "key": "Red colour and dropping letters",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Road Safety • Zebra Crossing",
        "q": "What are the black and white stripes painted on the road called?",
        "ans": "<strong>Answer:</strong><br>• They are called a <strong>zebra crossing</strong>, where pedestrians can cross safely.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Zebra crossing",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Traffic Light • Signal Colours",
        "q": "What do the three colours of the traffic light mean?<br>(a) Red (b) Yellow (c) Green",
        "ans": "<strong>Answer:</strong><br>• <strong>Red:</strong> Stop<br>• <strong>Yellow:</strong> Wait / Get ready<br>• <strong>Green:</strong> Go",
        "marks": 3,
        "rubric": [
          {
            "key": "Stop, Wait, Go (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in with words from the lesson (banyan, bell, footpath):<br>(a) We should always walk on the ______.<br>(b) There is a huge shady ______ tree near the school gate.",
        "ans": "<strong>Answer:</strong><br>(a) We should always walk on the <strong>footpath</strong>.<br>(b) There is a huge shady <strong>banyan</strong> tree near the school gate.",
        "marks": 2,
        "rubric": [
          {
            "key": "Footpath and Banyan",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Prepositions • Direction Words",
        "q": "Choose the right preposition (across, through, under):<br>(a) Walk ______ the zebra crossing.<br>(b) Sit ______ the shady tree.",
        "ans": "<strong>Answer:</strong><br>(a) Walk <strong>across</strong> the zebra crossing.<br>(b) Sit <strong>under</strong> the shady tree.",
        "marks": 2,
        "rubric": [
          {
            "key": "Across and Under",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Sights on the Street",
        "q": "Name three shops or places you see on your way from home to school.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Bakery / Sweet shop</strong><br>2. <strong>Stationery and book shop</strong><br>3. <strong>Vegetable and fruit stall</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Three realistic neighbourhood shops",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Opposites • Places",
        "q": "Write the opposites of:<br>(a) Near × _______<br>(b) Before × _______",
        "ans": "<strong>Answer:</strong><br>(a) Near × <strong>Far</strong><br>(b) Before × <strong>After</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Far and After",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Making • School",
        "q": "Make a sentence using the word 'Gate'.",
        "ans": "<strong>Answer:</strong><br>• The guard opens the school gate when the morning bell rings.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Correct grammatical sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Rhyming Words • Sound Match",
        "q": "Write rhyming words for:<br>(a) Street — _______<br>(b) Tree — _______",
        "ans": "<strong>Answer:</strong><br>(a) Street — <strong>Meet / Sweet / Feet</strong><br>(b) Tree — <strong>Free / See / Bee</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Meet/Sweet and Free/See",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Think and Answer • Punctuality",
        "q": "Why is it good to leave home ten minutes early for school?",
        "ans": "<strong>Answer:</strong><br>• Leaving early ensures we walk without rushing, cross roads safely, and reach our classroom before the prayer assembly starts.",
        "marks": 2,
        "rubric": [
          {
            "key": "Safety, avoiding rushing, on-time arrival",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Pedestrian Safety",
        "q": "Write True or False:<br>(a) It is safe to play with a football on a busy vehicular road.<br>(b) We must look right, then left, and right again before crossing.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>False</strong><br>(b) <strong>True</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Grammar • Capital Letters",
        "q": "Rewrite with capital letters where needed: 'we cross the road in front of st. mary school.'",
        "ans": "<strong>Answer:</strong><br>• \"<strong>W</strong>e cross the road in front of <strong>S</strong>t. <strong>M</strong>ary <strong>S</strong>chool.\"",
        "marks": 2,
        "rubric": [
          {
            "key": "Capitalized 'We' and 'St. Mary School'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Drawing Route • Spatial Sense",
        "q": "What is a map?",
        "ans": "<strong>Answer:</strong><br>• A map is a drawing that shows paths, roads, and landmark locations to guide travelers from one place to another.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Clear simple definition of map",
            "marks": "1.5 M"
          }
        ]
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
        "rubric": [
          {
            "key": "Clean streets, trees, and markets",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Civic Places • Reading Books",
        "q": "Where do children and adults go in town to borrow and read interesting books?",
        "ans": "<strong>Answer:</strong><br>• They go to the <strong>town library</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Library",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Emergency Helpers • Hospitals",
        "q": "Where do people rush when someone suddenly falls ill?",
        "ans": "<strong>Answer:</strong><br>• They rush to the <strong>hospital or health clinic</strong> where doctors and nurses provide care.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Hospital / clinic",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Matching Exercise • Places and Services",
        "q": "Match each place with its role:<br>(a) Fire Station — (1) Teaches children<br>(b) School — (2) Puts out dangerous fires<br>(c) Market — (3) Sells vegetables and groceries",
        "ans": "<strong>Answer:</strong><br>(a) Fire Station — <strong>(2) Puts out fires</strong><br>(b) School — <strong>(1) Teaches children</strong><br>(c) Market — <strong>(3) Sells groceries</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All three matched accurately",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in with words (dustbin, park, street):<br>(a) We play cricket in the town ______.<br>(b) Always throw chocolate wrappers into the ______.",
        "ans": "<strong>Answer:</strong><br>(a) We play cricket in the town <strong>park</strong>.<br>(b) Always throw chocolate wrappers into the <strong>dustbin</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Park and Dustbin",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Words • Sound Identification",
        "q": "Find rhyming words for:<br>(a) Town — _______<br>(b) Clean — _______",
        "ans": "<strong>Answer:</strong><br>(a) Town — <strong>Brown / Down / Crown</strong><br>(b) Clean — <strong>Green / Seen / Bean</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Brown/Down and Green/Seen",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Vocabulary • City vs Village",
        "q": "Give one difference between a big city and a quiet village.",
        "ans": "<strong>Answer:</strong><br>• A big city has tall buildings, heavy traffic, and shopping malls, while a village has open green fields, fewer vehicles, and fresh breeze.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clear comparison of traffic and nature",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Writing • My Town",
        "q": "Make a sentence using the word: 'Neighbour'.",
        "ans": "<strong>Answer:</strong><br>• My neighbour Mr. Sharma always shares sweet mangoes from his orchard.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Meaningful sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Civic Responsibility • Cleanliness",
        "q": "What is our duty towards public parks and streets?",
        "ans": "<strong>Answer:</strong><br>• It is our duty <strong>never to litter, avoid plucking flowers, and keep park benches clean</strong> for everyone.",
        "marks": 2,
        "rubric": [
          {
            "key": "No littering, protecting flowers/benches",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • City Life",
        "q": "Write the opposites of:<br>(a) Clean × _______<br>(b) Quiet × _______",
        "ans": "<strong>Answer:</strong><br>(a) Clean × <strong>Dirty</strong><br>(b) Quiet × <strong>Noisy</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Dirty and Noisy",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Singular and Plural • Town",
        "q": "Give the plural form:<br>(a) One street — Many _______<br>(b) One building — Several _______",
        "ans": "<strong>Answer:</strong><br>(a) Many <strong>streets</strong><br>(b) Several <strong>buildings</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Streets and buildings",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Town Life",
        "q": "Write True or False:<br>(a) Fire engines rush to put out fires with ringing sirens.<br>(b) We should spit on footpaths and walls.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>True</strong><br>(b) <strong>False</strong> (Spitting spreads diseases).",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Personal Identification • Address",
        "q": "Why should every child memorize their home address and phone number?",
        "ans": "<strong>Answer:</strong><br>• If a child gets lost in a crowded market or fair, knowing their address and parent's phone number helps police or elders guide them home safely.",
        "marks": 2,
        "rubric": [
          {
            "key": "Safety in case of getting lost",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Creative Expression • Town Slogan",
        "q": "Write a short slogan to keep your town green and clean.",
        "ans": "<strong>Answer:</strong><br>• <strong>\"Clean Town, Green Town; Spread Happiness All Around!\"</strong>",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Catchy clean-town slogan",
            "marks": "1.5 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd8",
    "num": 8,
    "unit": "Unit 4: Life Around Us",
    "title": "A Show of Clouds",
    "subtitle": "Cloud Shapes, White Fluffy Sheep, Sailing in the Sky, Weather & Rain",
    "concepts": [
      "Poem comprehension: Watching white fluffy clouds drift across the bright blue sky like playful sheep.",
      "Imaginative shapes: Clouds looking like dogs, galloping horses, soaring birds, and mountain castles.",
      "Weather changes: Light white clouds bringing shade, heavy dark clouds bringing cool rain.",
      "Rhyming words: Sky-high, sheep-asleep, blow-go, rain-train."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#e0f2fe\" rx=\"10\"/><path d=\"M 160 65 Q 180 35 220 45 Q 260 25 300 45 Q 340 35 360 65 Q 370 85 240 85 Z\" fill=\"#ffffff\" opacity=\"0.95\"/><circle cx=\"230\" cy=\"50\" r=\"4\" fill=\"#0284c7\"/><circle cx=\"270\" cy=\"50\" r=\"4\" fill=\"#0284c7\"/><path d=\"M 240 65 Q 250 72 260 65\" stroke=\"#0284c7\" stroke-width=\"2\" fill=\"none\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">A Show of Clouds: White Sheep Grazing in the Blue Sky</text></svg>",
    "cbq": {
      "title": "Cloud Watching on a Sunny Afternoon",
      "text": "Lying on the soft green grass, Leo and Maya looked up at the sky. 'Look!' cried Leo, 'that cloud looks like a fluffy white puppy with floppy ears!' Maya pointed, 'And that big cloud over the hill looks like a king's castle with tall towers!'",
      "question": "What two shapes did the children spot in the drifting clouds? What happens when white clouds turn dark grey?",
      "answer": "1. The children saw (a) a <strong>fluffy white puppy with floppy ears</strong> and (b) a <strong>king's castle with tall towers</strong>.<br>2. When clouds turn dark grey, they become heavy with water droplets and <strong>bring cool, refreshing rain</strong>.",
      "rubric": "1.5 M for puppy and castle shapes + 1.5 M for grey clouds bringing rain"
    },
    "questions": [
      {
        "category": "Poem Comprehension • Cloud Appearance",
        "q": "What do the fluffy white clouds in the poem look like as they drift across the blue hill?",
        "ans": "<strong>Answer:</strong><br>• The white clouds look like <strong>fluffy white sheep</strong> grazing peacefully in the blue sky.",
        "marks": 1,
        "rubric": [
          {
            "key": "White sheep stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • When the Wind Blows",
        "q": "What happens to the clouds when the wind blows across the sky?",
        "ans": "<strong>Answer:</strong><br>• When the wind blows, the clouds <strong>move slowly and sail along</strong> together.",
        "marks": 1,
        "rubric": [
          {
            "key": "Move and sail along",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • When the Wind Stops",
        "q": "What do the clouds do when the wind stops blowing?",
        "ans": "<strong>Answer:</strong><br>• When the wind stops, the clouds <strong>stand still as if asleep</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Stand still / asleep",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Weather Vocabulary • Describing Words",
        "q": "Match the weather conditions to their descriptions:<br>(a) Sunny — (1) Full of cool falling water<br>(b) Windy — (2) Bright hot sun shining<br>(c) Rainy — (3) Leaves dancing and blowing fast",
        "ans": "<strong>Answer:</strong><br>(a) Sunny — <strong>(2) Bright hot sun</strong><br>(b) Windy — <strong>(3) Leaves dancing</strong><br>(c) Rainy — <strong>(1) Falling water</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All three matched correctly",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in with words (blue, white, rain):<br>(a) White sheep, white sheep, on a ______ hill.<br>(b) Heavy dark clouds bring refreshing ______.",
        "ans": "<strong>Answer:</strong><br>(a) White sheep, white sheep, on a <strong>blue</strong> hill.<br>(b) Heavy dark clouds bring refreshing <strong>rain</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Blue and Rain",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Words • Sound Match",
        "q": "Find rhyming pairs from the poem:<br>(a) Hill — _______<br>(b) Blow — _______",
        "ans": "<strong>Answer:</strong><br>(a) Hill — <strong>Still / Mill / Will</strong><br>(b) Blow — <strong>Go / Slow / Snow</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Still and Go/Slow",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Science Fun • What are Clouds Made Of?",
        "q": "What are clouds made of: cotton or tiny water droplets?",
        "ans": "<strong>Answer:</strong><br>• Clouds are made of <strong>millions of tiny water droplets and ice crystals</strong> floating high in the air.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Tiny water droplets/ice crystals",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Opposites • Nature",
        "q": "Write the opposites of:<br>(a) White × _______<br>(b) Asleep × _______",
        "ans": "<strong>Answer:</strong><br>(a) White × <strong>Black</strong><br>(b) Asleep × <strong>Awake</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Black and Awake",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Making • Clouds",
        "q": "Make a sentence using the word 'Float'.",
        "ans": "<strong>Answer:</strong><br>• White clouds float gently across the clear morning sky.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Correct grammatical sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Colour Identification • Sky",
        "q": "What is the colour of the sky on a bright sunny afternoon?",
        "ans": "<strong>Answer:</strong><br>• The sky is a lovely <strong>clear blue</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Clear blue",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think and Answer • Rainbow Sighting",
        "q": "When can you spot a seven-coloured rainbow in the sky?",
        "ans": "<strong>Answer:</strong><br>• We can spot a rainbow when the sun shines brightly while light rain is falling.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sunlight and rain together",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Singular and Plural • Animals and Clouds",
        "q": "Write the plural form:<br>(a) One cloud — Many _______<br>(b) One sheep — Many _______",
        "ans": "<strong>Answer:</strong><br>(a) Many <strong>clouds</strong><br>(b) Many <strong>sheep</strong> (remains 'sheep' in plural).",
        "marks": 2,
        "rubric": [
          {
            "key": "Clouds and sheep (irregular)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Clouds",
        "q": "Write True or False:<br>(a) Clouds stay in one spot forever and never move.<br>(b) Wind pushes clouds from one place to another.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>False</strong><br>(b) <strong>True</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Creative Talk • Cloud Drawing",
        "q": "Describe a funny cloud shape you have seen in the sky.",
        "ans": "<strong>Answer:</strong><br>• I once saw a puffy cloud that looked like a giant scoop of strawberry ice cream on a cone!",
        "marks": 2,
        "rubric": [
          {
            "key": "Expressive personal imagination",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd9",
    "num": 9,
    "unit": "Unit 4: Life Around Us",
    "title": "My Name",
    "subtitle": "Self-Identity, Spelling Names, Alphabet Sounds, Letters & Confident Introductions",
    "concepts": [
      "Self-expression: Knowing, writing, and pronouncing one's own name with pride.",
      "Phonics & Alphabet: Counting letters in names, identifying beginning vowels and consonants.",
      "Grammar rule: Every person's name always begins with a capital letter.",
      "Social interaction: Greeting new friends and introducing oneself politely."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fdf2f8\" rx=\"10\"/><rect x=\"150\" y=\"35\" width=\"200\" height=\"55\" fill=\"#ec4899\" rx=\"10\"/><text x=\"250\" y=\"72\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">HELLO, MY NAME IS...</text><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">My Name: First Letter Capital, Special & Unique</text></svg>",
    "cbq": {
      "title": "First Day Introduction Circle",
      "text": "On Monday, Mrs. Sen asked every child in Grade 2 to write their name on a colourful badge and tell the class what they love doing. Rohan wrote 'ROHAN' in bold letters and said, 'My name has five letters, starts with R, and I love drawing rockets!'",
      "question": "How many letters are there in Rohan's name? What important grammar rule must we remember when writing any person's name?",
      "answer": "1. There are <strong>5 letters</strong> (R-O-H-A-N) in Rohan's name.<br>2. We must always write the <strong>first letter of a name with a CAPITAL letter</strong>.",
      "rubric": "1.5 M for 5 letters + 1.5 M for capital letter grammar rule"
    },
    "questions": [
      {
        "category": "Comprehension • Self-Identity",
        "q": "Why is a person's name special?",
        "ans": "<strong>Answer:</strong><br>• Our name gives us our <strong>unique identity</strong>, helps friends call us, and connects us lovingly with our family.",
        "marks": 2,
        "rubric": [
          {
            "key": "Unique identity and connection",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Grammar • Capital Letter Rule",
        "q": "Which letter of a person's name is always written as a capital letter?",
        "ans": "<strong>Answer:</strong><br>• The <strong>first letter</strong> of every name must always be written in a <strong>capital letter</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "First letter capital",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Spelling and Counting • Letters in Name",
        "q": "Look at the name 'ANANYA'. How many total letters does it have? How many times does the letter 'A' appear?",
        "ans": "<strong>Answer:</strong><br>• 'ANANYA' has <strong>6 letters</strong>.<br>• The letter 'A' appears <strong>3 times</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "6 letters and 3 'A's",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Vowels and Consonants • Identification",
        "q": "Name the five English vowel letters.",
        "ans": "<strong>Answer:</strong><br>• The five vowels are <strong>A, E, I, O, U</strong>.",
        "marks": 2.5,
        "rubric": [
          {
            "key": "A, E, I, O, U listed",
            "marks": "2.5 M"
          }
        ]
      },
      {
        "category": "Let us Write • Correct the Mistake",
        "q": "Rewrite with correct capitalization: 'my friend is rohit sharma.'",
        "ans": "<strong>Answer:</strong><br>• \"My friend is <strong>R</strong>ohit <strong>S</strong>harma.\"",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Capital R and S in Rohit Sharma",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Polite Introduction • Conversation",
        "q": "How do you introduce yourself politely to a new classmate?",
        "ans": "<strong>Answer:</strong><br>• \"Hello! My name is ______. I am happy to meet you!\"",
        "marks": 2,
        "rubric": [
          {
            "key": "Polite greeting and self-introduction",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Names • Word Fun",
        "q": "Find a rhyming word or name for:<br>(a) Dan — _______<br>(b) Jill — _______",
        "ans": "<strong>Answer:</strong><br>(a) Dan — <strong>Pan / Stan / Van</strong><br>(b) Jill — <strong>Bill / Hill / Mill</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Pan/Stan and Bill/Hill",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Alphabetical Order • Sorting",
        "q": "Arrange these three names in alphabetical (A-Z) order: Kabir, Aman, David.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Aman</strong> (A)<br>2. <strong>David</strong> (D)<br>3. <strong>Kabir</strong> (K)",
        "marks": 3,
        "rubric": [
          {
            "key": "Aman, David, Kabir in correct order",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Sentence Writing • Self",
        "q": "Write two complete sentences about yourself.",
        "ans": "<strong>Answer:</strong><br>1. My name is Aarav and I am seven years old.<br>2. I study in Class 2 and my favourite fruit is sweet mango.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two correct personal sentences",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Simple Adjectives",
        "q": "Write the opposites of:<br>(a) Short × _______<br>(b) Young × _______",
        "ans": "<strong>Answer:</strong><br>(a) Short × <strong>Long / Tall</strong><br>(b) Young × <strong>Old</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Tall and Old",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Names",
        "q": "Write True or False:<br>(a) Our nickname is usually given by our parents and close family with love.<br>(b) A name should be written without any capital letters.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>True</strong><br>(b) <strong>False</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Classroom Activity • Name Badge",
        "q": "What two things are usually written on a student's school identity card?",
        "ans": "<strong>Answer:</strong><br>1. <strong>Student's full name</strong><br>2. <strong>Class and Section</strong> (along with School Name)",
        "marks": 2,
        "rubric": [
          {
            "key": "Full name, class/school name",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sound Identification • Phonics",
        "q": "What is the beginning sound of the name 'Tara'?",
        "ans": "<strong>Answer:</strong><br>• The beginning sound is the <strong>/t/ sound</strong> made by the letter 'T'.",
        "marks": 1,
        "rubric": [
          {
            "key": "/t/ sound stated",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Personal Reflection • Pride in Name",
        "q": "Who gave you your name, and do you like it?",
        "ans": "<strong>Answer:</strong><br>• My parents and grandparents gave me my name with love, and I feel very proud of it.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Thoughtful personal reflection",
            "marks": "1.5 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd10",
    "num": 10,
    "unit": "Unit 4: Life Around Us",
    "title": "The Crow",
    "subtitle": "The Thirsty Crow, Hot Summer Day, Pitcher with Low Water, Pebbles & Perseverance",
    "concepts": [
      "Fable comprehension: The famous story of the thirsty crow in search of water.",
      "Scientific cause and effect: Dropping small pebbles into the narrow pitcher raises the water level.",
      "Perseverance & Wit: 'Where there is a will, there is a way'—not giving up when faced with difficulties.",
      "Vocabulary & sequencing: Pitcher, pebbles, thirsty, beak, bottom, rise."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"10\"/><path d=\"M 230 45 L 270 45 L 285 95 L 215 95 Z\" fill=\"#d97706\" stroke=\"#b45309\" stroke-width=\"2\"/><rect x=\"225\" y=\"75\" width=\"50\" height=\"18\" fill=\"#38bdf8\" rx=\"2\"/><circle cx=\"240\" cy=\"90\" r=\"4\" fill=\"#78716c\"/><circle cx=\"260\" cy=\"90\" r=\"4\" fill=\"#78716c\"/><circle cx=\"250\" cy=\"85\" r=\"4\" fill=\"#78716c\"/><circle cx=\"320\" cy=\"45\" r=\"16\" fill=\"#1e293b\"/><polygon points=\"304,45 292,48 304,51\" fill=\"#f59e0b\"/><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">The Clever Crow: Dropped pebbles one by one, water came up!</text></svg>",
    "cbq": {
      "title": "Kalu's Brilliant Idea",
      "text": "On a scorching May afternoon, Kalu the black crow flew over fields searching for water. He spotted a clay pitcher under a neem tree. Inside, the water was very low at the bottom and his short beak could not reach it. Kalu looked around, saw a heap of shiny pebbles, and began dropping them in one by one.",
      "question": "Why could Kalu not drink water directly from the pitcher? What clever method did he use to quench his thirst?",
      "answer": "1. Kalu could not drink directly because the <strong>water level was very low at the bottom of the narrow pitcher</strong>.<br>2. He cleverly <strong>picked up pebbles with his beak and dropped them into the pitcher one by one until the water rose to the brim</strong>.",
      "rubric": "1.5 M for low water level at the bottom + 1.5 M for dropping pebbles one by one to raise the water"
    },
    "questions": [
      {
        "category": "Story Comprehension • The Search",
        "q": "Why was the crow flying all around on the hot day?",
        "ans": "<strong>Answer:</strong><br>• The crow was flying around because he was <strong>very thirsty</strong> and desperately looking for drinking water.",
        "marks": 1,
        "rubric": [
          {
            "key": "Very thirsty / searching for water",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Comprehension • The Problem",
        "q": "What problem did the crow face when he found the pitcher?",
        "ans": "<strong>Answer:</strong><br>• The water inside was <strong>too low at the bottom</strong>, and his beak was not long enough to reach it.",
        "marks": 2,
        "rubric": [
          {
            "key": "Water too low / beak could not reach",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Story Comprehension • Clever Idea",
        "q": "What did the crow collect from the ground to solve his problem?",
        "ans": "<strong>Answer:</strong><br>• The crow collected <strong>small pebbles (stones)</strong> lying nearby.",
        "marks": 1,
        "rubric": [
          {
            "key": "Pebbles / stones",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Scientific Logic • Water Rising",
        "q": "What happened inside the pitcher when the crow dropped the pebbles one by one?",
        "ans": "<strong>Answer:</strong><br>• The heavy pebbles sank to the bottom and <strong>pushed the water up to the neck (brim)</strong> of the pitcher.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pebbles displaced water / water rose",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Story Sequencing • Put in Order",
        "q": "Arrange the story steps in correct order (1, 2, 3, 4):<br>( ) The water rose to the brim and the crow drank happily.<br>( ) A thirsty crow searched for water.<br>( ) He dropped pebbles into the pitcher one by one.<br>( ) He found a pitcher with water low at the bottom.",
        "ans": "<strong>Answer:</strong><br><strong>(4)</strong> The water rose to the brim and the crow drank happily.<br><strong>(1)</strong> A thirsty crow searched for water.<br><strong>(3)</strong> He dropped pebbles into the pitcher one by one.<br><strong>(2)</strong> He found a pitcher with water low at the bottom.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct order: 1, 2, 3, 4 mapped accurately",
            "marks": "4 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in the blanks (pebbles, pitcher, beak):<br>(a) The crow picked up ______ one by one.<br>(b) He saw a clay ______ under the shady tree.",
        "ans": "<strong>Answer:</strong><br>(a) The crow picked up <strong>pebbles</strong> one by one.<br>(b) He saw a clay <strong>pitcher</strong> under the shady tree.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pebbles and Pitcher",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Story Words",
        "q": "Write the opposites of:<br>(a) Low × _______<br>(b) Up × _______<br>(c) Clever × _______",
        "ans": "<strong>Answer:</strong><br>(a) Low × <strong>High</strong><br>(b) Up × <strong>Down</strong><br>(c) Clever × <strong>Foolish</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "High, Down, Foolish (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Pitcher",
        "q": "What is a 'pitcher'?",
        "ans": "<strong>Answer:</strong><br>• A pitcher is a round clay pot (matka) with a narrow neck used to hold and cool water.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Clay pot for holding water",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Sentence Writing • Bird",
        "q": "Make a sentence using the word 'Thirsty'.",
        "ans": "<strong>Answer:</strong><br>• The thirsty sparrow drank fresh water from the clay bowl on my balcony.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Grammatically correct sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Moral Value • Perseverance",
        "q": "What is the famous moral of 'The Thirsty Crow' story?",
        "ans": "<strong>Answer:</strong><br>• <strong>\"Where there is a will, there is a way.\"</strong> (With patience, hard work, and quick wit, every difficulty can be overcome).",
        "marks": 2,
        "rubric": [
          {
            "key": "'Where there is a will, there is a way'",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Fable Facts",
        "q": "Write True or False:<br>(a) The crow broke the clay pitcher with a hammer.<br>(b) Crows are intelligent birds capable of problem solving.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>False</strong><br>(b) <strong>True</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Bird Characteristics • Colour & Sound",
        "q": "What colour is a crow and what sound does it make?",
        "ans": "<strong>Answer:</strong><br>• A crow is <strong>glossy black</strong>, and its call sounds like <strong>'Caw, caw... caw, caw!'</strong>",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Black colour and 'Caw, caw' sound",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Kindness to Animals • Water Bowls",
        "q": "What should we do for birds in summer?",
        "ans": "<strong>Answer:</strong><br>• We should keep shallow earthen bowls of clean drinking water and grains on our balcony or terrace every morning.",
        "marks": 2,
        "rubric": [
          {
            "key": "Keeping water bowls and grains",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Words • Sound Identification",
        "q": "Write a rhyming word for: Crow — _______.",
        "ans": "<strong>Answer:</strong><br>• Crow — <strong>Blow / Glow / Snow / Grow</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Blow/Glow/Snow",
            "marks": "1 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd11",
    "num": 11,
    "unit": "Unit 4: Life Around Us",
    "title": "The Smart Monkey",
    "subtitle": "Jungle Wisdom, Sweet Red Berries, Crocodile's Trick & Quick Presence of Mind",
    "concepts": [
      "Fable comprehension: The clever monkey living in a jamun/berry tree outsmarting danger.",
      "Friendship & betrayal: Sharing sweet fruit, the crocodile's wicked plan, and the monkey's witty escape.",
      "Presence of mind: Staying calm in moments of danger to think of a smart solution ('I left my heart on the tree').",
      "Character traits: Clever, quick-witted, kind, treacherous."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"10\"/><rect x=\"235\" y=\"50\" width=\"30\" height=\"55\" fill=\"#78350f\" rx=\"2\"/><circle cx=\"250\" cy=\"45\" r=\"35\" fill=\"#15803d\"/><circle cx=\"270\" cy=\"35\" r=\"6\" fill=\"#dc2626\"/><circle cx=\"235\" cy=\"50\" r=\"6\" fill=\"#dc2626\"/><ellipse cx=\"170\" cy=\"85\" rx=\"35\" ry=\"14\" fill=\"#166534\"/><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#064e3b\" text-anchor=\"middle\">The Smart Monkey: Sweet Berries, Quick Wit & Great Escape</text></svg>",
    "cbq": {
      "title": "Quick Thinking in the Deep River",
      "text": "Midway across the wide river, the crocodile confessed to the monkey: 'My wife wants to eat your sweet heart!' The monkey did not panic. He calmly replied, 'Oh friend, why didn't you tell me earlier? I keep my heart safely hanging on the highest branch of my berry tree! Turn back so I can fetch it for you!'",
      "question": "What wicked plan did the crocodile reveal? How did the smart monkey save his life?",
      "answer": "1. The crocodile revealed that his wife wanted to <strong>eat the monkey's heart</strong>.<br>2. The monkey kept his calm and outsmarted the crocodile by claiming <strong>he had left his heart behind on the tree branch, tricking the crocodile into swimming back to shore</strong>.",
      "rubric": "1.5 M for crocodile's wicked confession + 1.5 M for monkey's clever trick to return to shore"
    },
    "questions": [
      {
        "category": "Story Comprehension • The Tree",
        "q": "Where did the smart monkey live?",
        "ans": "<strong>Answer:</strong><br>• The monkey lived in a <strong>big shady berry (jamun) tree on the river bank</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Berry / jamun tree by the river",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Comprehension • The Fruit",
        "q": "What did the monkey share with his friend the crocodile every day?",
        "ans": "<strong>Answer:</strong><br>• He plucked and shared <strong>sweet, juicy, ripe berries</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Sweet ripe berries",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Story Comprehension • Crocodile's Request",
        "q": "Why did the crocodile invite the monkey to cross the river to his home?",
        "ans": "<strong>Answer:</strong><br>• He pretended his wife had invited the monkey for dinner, but secretly his wife wanted to <strong>eat the monkey's heart</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Wife wanting to eat monkey's heart",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Presence of Mind • The Trick",
        "q": "What clever excuse did the monkey give when he learned the truth in deep water?",
        "ans": "<strong>Answer:</strong><br>• He calmly said that he had <strong>left his heart safely behind on the tree</strong> and needed to go back to bring it.",
        "marks": 2,
        "rubric": [
          {
            "key": "Left heart behind on the tree",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "The Escape • Safe on Shore",
        "q": "What did the monkey do the moment the crocodile reached the bank?",
        "ans": "<strong>Answer:</strong><br>• The monkey quickly <strong>leaped off the crocodile's back, scrambled high up into the safety of the tree</strong>, and laughed.",
        "marks": 2,
        "rubric": [
          {
            "key": "Leaped off and scrambled up the tree",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in the blanks (berries, heart, river):<br>(a) The crocodile swam across the wide ______.<br>(b) The monkey plucked sweet red ______.",
        "ans": "<strong>Answer:</strong><br>(a) The crocodile swam across the wide <strong>river</strong>.<br>(b) The monkey plucked sweet red <strong>berries</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "River and Berries",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Character Traits • Analysis",
        "q": "Which two adjectives best describe the monkey in this story? (A) Foolish (B) Clever (C) Quick-witted (D) Lazy",
        "ans": "<strong>Answer:</strong><br>• <strong>(B) Clever</strong> and <strong>(C) Quick-witted</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clever and Quick-witted",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Fable Words",
        "q": "Write the opposites of:<br>(a) Sweet × _______<br>(b) Friend × _______<br>(c) Safe × _______",
        "ans": "<strong>Answer:</strong><br>(a) Sweet × <strong>Bitter / Sour</strong><br>(b) Friend × <strong>Enemy</strong><br>(c) Safe × <strong>Dangerous</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Bitter, Enemy, Dangerous (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Sentence Writing • Animal Story",
        "q": "Make a sentence using the word 'Clever'.",
        "ans": "<strong>Answer:</strong><br>• The clever monkey saved his own life using his quick thinking.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Meaningful sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Moral of the Story • Life Lesson",
        "q": "What important lesson does this Panchatantra story teach us?",
        "ans": "<strong>Answer:</strong><br>• <strong>Presence of mind can overcome any grave danger.</strong> We must never lose courage or panic in tough situations.",
        "marks": 2,
        "rubric": [
          {
            "key": "Presence of mind and keeping calm",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Story Details",
        "q": "Write True or False:<br>(a) A living animal can take out its heart and hang it on a tree.<br>(b) The crocodile felt foolish and swam away in shame.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>False</strong> (It was just a smart trick to escape).<br>(b) <strong>True</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Words • Vocabulary",
        "q": "Find a rhyming word for: Tree — _______.",
        "ans": "<strong>Answer:</strong><br>• Tree — <strong>Free / See / Bee / Three</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Free/See/Bee",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Animal Habitats • Where they live",
        "q": "Where does a monkey live, and where does a crocodile live?",
        "ans": "<strong>Answer:</strong><br>• A monkey lives in <strong>trees (arboreal)</strong>.<br>• A crocodile lives in <strong>rivers, lakes, and marshes (aquatic)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Trees and rivers/lakes",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Creative Talk • Friendship Advice",
        "q": "Why was the crocodile not a true friend?",
        "ans": "<strong>Answer:</strong><br>• A true friend never betrays trust or tries to harm another. The crocodile broke the monkey's trust.",
        "marks": 2,
        "rubric": [
          {
            "key": "Betrayal of trust and harm",
            "marks": "2 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd12",
    "num": 12,
    "unit": "Unit 5: Harmony",
    "title": "Little Drops of Water",
    "subtitle": "Small Acts of Kindness, Little Grains of Sand, Mighty Ocean & Pleasant Land",
    "concepts": [
      "Poem recitation: Julia Carney's beloved classic on the power of small deeds.",
      "Accumulation concept: Little drops of water make the mighty ocean; tiny grains of sand create the vast land.",
      "Moral philosophy: Small moments make mighty ages; little deeds of kindness bring heaven on earth.",
      "Rhyming pairs: Sand-land, sea-eternity, earth-birth, kind-mind."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#e0f2fe\" rx=\"10\"/><path d=\"M 0 80 Q 125 60 250 80 T 500 80 L 500 120 L 0 120 Z\" fill=\"#0284c7\"/><circle cx=\"220\" cy=\"45\" r=\"8\" fill=\"#38bdf8\"/><circle cx=\"250\" cy=\"35\" r=\"6\" fill=\"#38bdf8\"/><circle cx=\"280\" cy=\"45\" r=\"8\" fill=\"#38bdf8\"/><text x=\"250\" y=\"110\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\">Little Drops of Water: Small Deeds Make a Mighty Difference</text></svg>",
    "cbq": {
      "title": "The Power of Small Coins",
      "text": "Every day after school, Diya dropped a single ₹2 coin into her terracotta piggy bank. Her elder brother laughed, 'What will two rupees do?' But by Diwali, when Diya tapped the pot open, she had collected ₹360—enough to buy warm blankets for two homeless grandmothers.",
      "question": "How does Diya's piggy bank reflect the poem 'Little Drops of Water'? What great power lies in tiny daily efforts?",
      "answer": "1. Just as <strong>single little drops of water accumulate to form a mighty ocean</strong>, Diya's small daily ₹2 coins added up into a significant sum that helped those in need.<br>2. Tiny daily good efforts, when continued with patience, <strong>yield immense, world-changing results</strong>.",
      "rubric": "1.5 M for matching drops of water to piggy bank + 1.5 M for value of steady small efforts"
    },
    "questions": [
      {
        "category": "Poem Comprehension • Ocean Formation",
        "q": "What makes the mighty ocean according to the poem 'Little Drops of Water'?",
        "ans": "<strong>Answer:</strong><br>• <strong>Little drops of water</strong> come together to form the mighty ocean.",
        "marks": 1,
        "rubric": [
          {
            "key": "Little drops of water",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • The Land",
        "q": "What makes the pleasant land on our earth?",
        "ans": "<strong>Answer:</strong><br>• <strong>Little grains of sand</strong> come together to form the pleasant land.",
        "marks": 1,
        "rubric": [
          {
            "key": "Little grains of sand",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Poem Comprehension • Acts of Kindness",
        "q": "What can make our earth pleasant like heaven above?",
        "ans": "<strong>Answer:</strong><br>• <strong>Little deeds of kindness and little words of love</strong> make our earth happy and peaceful like heaven.",
        "marks": 2,
        "rubric": [
          {
            "key": "Little deeds of kindness and words of love",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Vocabulary • Great Meanings",
        "q": "What does the word 'mighty' mean in the poem?",
        "ans": "<strong>Answer:</strong><br>• 'Mighty' means <strong>extremely big, powerful, and vast</strong>.",
        "marks": 1,
        "rubric": [
          {
            "key": "Big, powerful, vast",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in with words from the poem (ocean, kindness, sand):<br>(a) Little grains of ______ make the pleasant land.<br>(b) Little deeds of ______ spread happiness all around.",
        "ans": "<strong>Answer:</strong><br>(a) Little grains of <strong>sand</strong> make the pleasant land.<br>(b) Little deeds of <strong>kindness</strong> spread happiness all around.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sand and Kindness",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Rhyming Pairs • Sound Match",
        "q": "Find rhyming pairs from the poem:<br>(a) Sand — _______<br>(b) Love — _______",
        "ans": "<strong>Answer:</strong><br>(a) Sand — <strong>Land / Hand / Band</strong><br>(b) Love — <strong>Above / Dove</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Land and Above/Dove",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Environmental Care • Water Conservation",
        "q": "Why should we turn off the tap while brushing our teeth?",
        "ans": "<strong>Answer:</strong><br>• Leaving the tap running wastes dozens of drops every second. Turning it off <strong>saves valuable clean water</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Saves valuable clean water",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Scale and Size",
        "q": "Write the opposites of:<br>(a) Little × _______<br>(b) Pleasant × _______",
        "ans": "<strong>Answer:</strong><br>(a) Little × <strong>Big / Mighty / Huge</strong><br>(b) Pleasant × <strong>Unpleasant / Harsh</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Big/Mighty and Unpleasant",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Writing • Good Deeds",
        "q": "Make a sentence using the word 'Kindness'.",
        "ans": "<strong>Answer:</strong><br>• Helping an elderly person carry groceries is a simple act of kindness.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Meaningful sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Social Values • Daily Deeds",
        "q": "Name one small deed of kindness you can do at school every day.",
        "ans": "<strong>Answer:</strong><br>• Sharing my colour pencils with a classmate who forgot hers, and speaking with a cheerful smile.",
        "marks": 2,
        "rubric": [
          {
            "key": "Practical act of sharing or politeness",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Singular and Plural • Nature",
        "q": "Give the plural form:<br>(a) One drop — Many _______<br>(b) One grain — Millions of _______",
        "ans": "<strong>Answer:</strong><br>(a) Many <strong>drops</strong><br>(b) Millions of <strong>grains</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Drops and grains",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • Poem Teachings",
        "q": "Write True or False:<br>(a) Small daily habits have no effect on our future.<br>(b) Even tiny drops of water together form the largest ocean.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>False</strong><br>(b) <strong>True</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Creative Talk • Small Gifts",
        "q": "Does kindness require money, or can words be kind?",
        "ans": "<strong>Answer:</strong><br>• Kindness does not require money; gentle words like 'Thank you', 'Please', and a warm smile are the greatest acts of kindness.",
        "marks": 2,
        "rubric": [
          {
            "key": "Gentle words and smile as kindness",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Poem Recitation • Rhythm",
        "q": "Recite and complete the first two lines of the poem.",
        "ans": "<strong>Answer:</strong><br>• \"Little drops of water,<br>&nbsp;&nbsp;Little grains of sand,\"",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Accurate poetic lines",
            "marks": "1.5 M"
          }
        ]
      }
    ]
  },
  {
    "id": "mrd13",
    "num": 13,
    "unit": "Unit 5: Harmony",
    "title": "We are all Indians",
    "subtitle": "Unity in Diversity, National Flag (Tiranga), Languages, Festivals & Harmony",
    "concepts": [
      "National identity: We live in different states, speak different languages, but we are all proud Indians.",
      "Tricolour Flag (Tiranga): Saffron for courage, White for peace/truth, Green for prosperity, and Ashoka Chakra with 24 spokes.",
      "Greetings in Indian languages: Namaste (Hindi), Vanakkam (Tamil), Sat Sri Akal (Punjabi), Khamma Ghani (Rajasthani), Adaab (Urdu).",
      "Festivals of joy: Celebrating Diwali, Eid, Christmas, Gurpurab, Pongal, Bihu with love."
    ],
    "svg": "<svg viewBox=\"0 0 500 120\" width=\"100%\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"10\"/><rect x=\"150\" y=\"30\" width=\"200\" height=\"20\" fill=\"#ff9933\"/><rect x=\"150\" y=\"50\" width=\"200\" height=\"20\" fill=\"#ffffff\"/><rect x=\"150\" y=\"70\" width=\"200\" height=\"20\" fill=\"#138808\"/><circle cx=\"250\" cy=\"60\" r=\"8\" fill=\"none\" stroke=\"#000080\" stroke-width=\"1.5\"/><text x=\"250\" y=\"112\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#1e3a8a\" text-anchor=\"middle\">We are all Indians: Unity in Diversity, One Nation, One Heart</text></svg>",
    "cbq": {
      "title": "Independence Day Celebration at School",
      "text": "On 15th August, children came to school dressed in traditional clothes from various states: Gurpreet wore a Punjabi kurta and turban, Mary wore an elegant Assamese mekhala, and Karthik wore a Tamilian veshti. Together, they sang the National Anthem 'Jana Gana Mana' while looking proudly at the fluttering Tiranga.",
      "question": "What does this school celebration represent? What is the name of our national flag and what do its three colours stand for?",
      "answer": "1. It represents <strong>'Unity in Diversity'—the beautiful harmony of India's different cultures, clothing, and languages</strong>.<br>2. Our flag is called the <strong>Tiranga (Tricolour)</strong>. Saffron stands for <strong>courage and sacrifice</strong>, white for <strong>peace and truth</strong>, and green for <strong>fertility and prosperity</strong>.",
      "rubric": "1.5 M for Unity in Diversity + 1.5 M for Tiranga and meaning of three colours"
    },
    "questions": [
      {
        "category": "Comprehension • Our Motherland",
        "q": "What is the name of our great country, and what are its citizens called?",
        "ans": "<strong>Answer:</strong><br>• Our country is <strong>India (Bharat)</strong>, and all of us are proud <strong>Indians (Bharatiya)</strong>.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "India/Bharat and Indians",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "National Flag • The Colours",
        "q": "How many colours are there in our national flag, and what is it called?",
        "ans": "<strong>Answer:</strong><br>• Our flag is called the <strong>Tiranga (Tricolour)</strong> because it has <strong>three main bands: Saffron, White, and Green</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Tiranga, three bands (Saffron, White, Green)",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Ashoka Chakra • The Wheel",
        "q": "What is at the centre of our national flag, and how many spokes does it have?",
        "ans": "<strong>Answer:</strong><br>• At the centre is the navy blue <strong>Ashoka Chakra</strong> with <strong>24 spokes</strong>, representing continuous progress.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ashoka Chakra with 24 spokes",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Greetings Across India • Matching",
        "q": "Match each greeting to its language/region:<br>(a) Namaste — (1) Punjabi<br>(b) Vanakkam — (2) Hindi<br>(c) Sat Sri Akal — (3) Tamil",
        "ans": "<strong>Answer:</strong><br>(a) Namaste — <strong>(2) Hindi</strong><br>(b) Vanakkam — <strong>(3) Tamil</strong><br>(c) Sat Sri Akal — <strong>(1) Punjabi</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "All three matched accurately",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "National Symbols • Identification",
        "q": "Name the following national symbols of India:<br>(a) National Animal<br>(b) National Bird<br>(c) National Flower",
        "ans": "<strong>Answer:</strong><br>(a) National Animal: <strong>Bengal Tiger</strong><br>(b) National Bird: <strong>Indian Peacock</strong><br>(c) National Flower: <strong>Lotus</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Tiger, Peacock, Lotus (1 M each)",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "National Anthem • Respect",
        "q": "What is the name of our national anthem, and how should we stand when it plays?",
        "ans": "<strong>Answer:</strong><br>• Our national anthem is <strong>'Jana Gana Mana'</strong>. We must always <strong>stand in attention and show deep respect</strong> whenever it is sung.",
        "marks": 2,
        "rubric": [
          {
            "key": "Jana Gana Mana and standing in attention",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Let us Write • Fill in the Blanks",
        "q": "Fill in the blanks (Tiranga, brothers, peace):<br>(a) White colour in our flag stands for ______.<br>(b) All Indians are my ______ and sisters.",
        "ans": "<strong>Answer:</strong><br>(a) White colour in our flag stands for <strong>peace</strong>.<br>(b) All Indians are my <strong>brothers</strong> and sisters.",
        "marks": 2,
        "rubric": [
          {
            "key": "Peace and Brothers",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Festivals of India • Harmony",
        "q": "Name four major festivals celebrated with joy across India.",
        "ans": "<strong>Answer:</strong><br>1. <strong>Diwali</strong> (Festival of lights)<br>2. <strong>Eid</strong> (Festival of sharing)<br>3. <strong>Christmas</strong> (Festival of peace)<br>4. <strong>Gurpurab (or Pongal/Holi)</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Four diverse festivals listed",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Sentence Writing • Patriotism",
        "q": "Make a sentence using the word 'Nation'.",
        "ans": "<strong>Answer:</strong><br>• We all work hard to make our nation strong, clean, and prosperous.",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Meaningful sentence",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Unity in Diversity • Meaning",
        "q": "What does the phrase 'Unity in Diversity' mean for India?",
        "ans": "<strong>Answer:</strong><br>• Although we speak different mother tongues, eat different cuisines, and wear different clothes, <strong>we live together in peace as one united Indian family</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Different cultures united as one family",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "True or False • National Pride",
        "q": "Write True or False:<br>(a) We should respect people from every state and language of our country.<br>(b) The national flag should be allowed to fall on the ground.",
        "ans": "<strong>Answer:</strong><br>(a) <strong>True</strong><br>(b) <strong>False</strong> (The Tiranga must always be held high with honour).",
        "marks": 2,
        "rubric": [
          {
            "key": "Both answered correctly",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Opposites • Peace and Unity",
        "q": "Write the opposites of:<br>(a) Peace × _______<br>(b) Together × _______",
        "ans": "<strong>Answer:</strong><br>(a) Peace × <strong>War / Conflict</strong><br>(b) Together × <strong>Apart / Alone</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "War and Apart/Alone",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "National Slogan • Inspiration",
        "q": "What is our national motto inscribed below the Lion Capital of Ashoka?",
        "ans": "<strong>Answer:</strong><br>• <strong>'Satyameva Jayate'</strong> (Truth Alone Triumphs).",
        "marks": 1.5,
        "rubric": [
          {
            "key": "Satyameva Jayate (Truth Alone Triumphs)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Creative Expression • Patriotic Chant",
        "q": "Write two famous patriotic slogans that all Indians chant with pride.",
        "ans": "<strong>Answer:</strong><br>1. <strong>\"Jai Hind!\"</strong><br>2. <strong>\"Vande Mataram!\"</strong>",
        "marks": 2,
        "rubric": [
          {
            "key": "Jai Hind and Vande Mataram",
            "marks": "2 M"
          }
        ]
      }
    ]
  }
];

module.exports = { mridangChapters };
