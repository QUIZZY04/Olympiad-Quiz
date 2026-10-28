// Official NCERT Class 3 Environmental Studies (Looking Around / आस-पास) Complete Dataset - Chapters 1 to 24
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const lookingAroundChapters = [
  {
    "id": "la1",
    "num": 1,
    "unit": "Unit 1: Animals & Habitats",
    "title": "Poonam's Day Out",
    "subtitle": "Observing Animals Around Us: Movements, Sounds, Habitats (Trees, Pond, Ground, Flying)",
    "concepts": [
      "Animals move in different ways: Walking, crawling, flying, swimming, and hopping.",
      "Diverse habitats: Animals that live on trees, in water, on land, underground in burrows, and flying in the air.",
      "Animal sounds: Pigeons coo, crows caw, dogs bark, frogs croak, cows moo, and goats bleat.",
      "Respecting nature: Observing animal behaviors silently without disturbing or teasing them."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Poonam's Day Out — Animals in Trees, Pond &amp; Ground</text>\n      <!-- Tree -->\n      <rect x=\"100\" y=\"70\" width=\"20\" height=\"50\" fill=\"#92400e\"/>\n      <circle cx=\"110\" cy=\"55\" r=\"35\" fill=\"#22c55e\"/>\n      <text x=\"110\" y=\"55\" font-size=\"16\" text-anchor=\"middle\">🐒🕊️🐿️</text>\n      <text x=\"110\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Tree Habitats</text>\n      <!-- Pond -->\n      <ellipse cx=\"300\" cy=\"95\" rx=\"50\" ry=\"25\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <text x=\"300\" y=\"95\" font-size=\"18\" text-anchor=\"middle\">🦆🐸🐢</text>\n      <text x=\"300\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Pond Habitats</text>\n      <!-- Ground / Grass -->\n      <circle cx=\"470\" cy=\"85\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <text x=\"470\" y=\"92\" font-size=\"18\" text-anchor=\"middle\">🐃🐕🐜</text>\n      <text x=\"470\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Ground &amp; Soil</text>\n    </svg>",
    "questions": [
      {
        "category": "Habitats & Observations",
        "q": "Name three animals that Poonam saw on the tree and three animals she saw around the pond.",
        "ans": "<strong>Animals Poonam saw on the tree:</strong> Pigeon, Squirrel, Crow, Monkey, Butterfly, and Sparrow.<br><strong>Animals Poonam saw around the pond:</strong> Goat, Tortoise, Crane (stork), Buffalo, and Frog.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of 3 tree-dwelling animals",
            "marks": "1.5 Marks"
          },
          {
            "key": "Identification of 3 pond-associated animals",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Animal Movements",
        "q": "Classify animals based on how they move: (a) Fly (b) Crawl (c) Walk (d) Hop. Give two examples of each.",
        "ans": "• <strong>Fly:</strong> Sparrow, Pigeon, Butterfly.<br>• <strong>Crawl:</strong> Lizard, Snake, Earthworm.<br>• <strong>Walk:</strong> Cow, Dog, Buffalo.<br>• <strong>Hop:</strong> Frog, Kangaroo, Grasshopper.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct examples for all four movement categories",
            "marks": "2 Marks"
          },
          {
            "key": "Clear classification structure",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Nature Sensitivity",
        "q": "Why should we observe birds and small creatures silently when visiting a garden?",
        "ans": "Sudden noises, shouting, or running scare animals away and interrupt their natural feeding or nesting activities. Silent observation allows us to learn their genuine habits without causing them distress.",
        "marks": 2,
        "rubric": [
          {
            "key": "Impact of noise on animal fear and nesting",
            "marks": "1 Mark"
          },
          {
            "key": "Educational value of quiet observation",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Textbook Riddles • 'Who am I?'",
        "q": "Solve the animal riddles from Chapter 1:<br>(a) 'Banana is what I love eating, I spend my time jumping and leaping.' $\\rightarrow$ _____<br>(b) 'On the walls, webs I weave, where insects stick and cannot leave.' $\\rightarrow$ _____<br>(c) 'I remain awake the whole night, and go to sleep in broad daylight.' $\\rightarrow$ _____<br>(d) 'Slow and steady is my pace, I always win when I run a race.' $\\rightarrow$ _____",
        "ans": "<strong>Riddle Solutions:</strong><br>• (a) <strong>Monkey</strong><br>• (b) <strong>Spider</strong><br>• (c) <strong>Owl</strong><br>• (d) <strong>Tortoise</strong>",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct identification of Monkey and Spider",
            "marks": "2.0 M"
          },
          {
            "key": "Correct identification of Owl and Tortoise",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Animal Movements & Sounds • Classroom Mimicry",
        "q": "Match each animal with how it moves and the sound it makes:<br>• Frog: [Fly & Coo, Hop & Croak, Walk & Moo, Crawl & Hiss]<br>• Pigeon: [Fly & Coo, Hop & Croak, Walk & Moo, Crawl & Hiss]<br>• Snake: [Fly & Coo, Hop & Croak, Walk & Moo, Crawl & Hiss]<br>• Cow: [Fly & Coo, Hop & Croak, Walk & Moo, Crawl & Hiss]",
        "ans": "<strong>Animal Movement & Sound Matching:</strong><br>• <strong>Frog:</strong> Hops and croaks ('croak-croak')<br>• <strong>Pigeon:</strong> Flies and coos ('gutur-goo')<br>• <strong>Snake:</strong> Crawls silently on belly and hisses<br>• <strong>Cow:</strong> Walks on four legs and moos ('moo-moo')",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 animal movement-sound pairs correctly matched",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Magic with Fingers • Thumbprint Animal Art",
        "q": "Describe the 'Magic with Fingers' activity from the textbook where thumbprints and fingerprints are used to create animal shapes.",
        "ans": "<strong>Thumbprint Art Steps:</strong><br>1. Press your thumb or index finger gently onto an ink pad or wet watercolor wash.<br>2. Press the inked thumb firmly onto a blank sheet of paper to create an oval fingerprint impression.<br>3. Using a fine-tipped pen, add simple details: draw ears, a tail, whiskers, and eyes onto the print to transform it into a mouse, dog, butterfly, or peacock.",
        "marks": 3,
        "rubric": [
          {
            "key": "Inking and pressing fingerprint technique",
            "marks": "1.5 M"
          },
          {
            "key": "Adding pen lines to detail animals described",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Animal Habitats • Pond vs Tree",
        "q": "List three animals Poonam saw on the tree, and three animals she saw around the pond.",
        "ans": "<strong>Poonam's Sighting Lists:</strong><br>• <strong>On the Tree:</strong> Monkey, Squirrel, Crow (also Pigeon, Sparrow).<br>• <strong>Around the Pond:</strong> Buffalo, Tortoise, Frog (also Goat, Crane).",
        "marks": 3,
        "rubric": [
          {
            "key": "Three accurate tree-dwelling animals named",
            "marks": "1.5 M"
          },
          {
            "key": "Three accurate pond-associated animals named",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 1 ('Poonam's Day Out'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Bio-indicator Assessment: Pond Ecosystem Health",
      "text": "During a nature walk, students notice that the village pond where Poonam once saw frogs and cranes is now covered in thick green chemical scum and discarded plastic bottles, and no frogs or dragonflies can be seen.",
      "question": "What does the sudden disappearance of frogs indicate about water quality, and what can students do to restore the pond?",
      "answer": "Frogs are vital <strong>bio-indicators</strong> because their permeable, moist skin absorbs environmental toxins directly; their disappearance signals that the water is severely polluted and deoxygenated due to plastic litter and sewage. Students can organize a community cleanup drive to clear surface plastics, plant native aquatic reeds that naturally filter toxins, and place signboards urging villagers not to wash clothes or dump trash into the pond.",
      "rubric": "Understanding frogs as bio-indicators of pollution, ecosystem restoration steps (4 Marks)."
    }
  },
  {
    "id": "la2",
    "num": 2,
    "unit": "Unit 1: Animals & Habitats",
    "title": "The Plant Fairy",
    "subtitle": "Outdoor Plant Exploration: Leaf Colors, Shapes, Margins, Textures, and Tree Bark Rubbings",
    "concepts": [
      "Diversity in plant leaves: Shape (round, oval, triangular, elongated), size, color (light green, dark green, purple, yellow), and margins (plain, serrated, wavy).",
      "Leaf scents: Crushed leaves of mint, coriander, neem, lemon, and tulsi have distinct identifying aromas.",
      "Tree bark textures: Smooth barks (e.g., Guava) vs rough, cracked barks (e.g., Neem, Peepal).",
      "Taking bark and leaf rubbings using crayons and paper to observe surface textures."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">The Plant Fairy — Diverse Leaf Shapes, Margins &amp; Scents</text>\n      <!-- Serrated Leaf (Neem) -->\n      <path d=\"M100,50 Q80,75 85,100 Q95,110 100,120 Q105,110 115,100 Q120,75 100,50 Z\" fill=\"#22c55e\" stroke=\"#15803d\" stroke-width=\"2\"/>\n      <text x=\"100\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Serrated Margin (Neem)</text>\n      <!-- Round Leaf (Lotus) -->\n      <circle cx=\"250\" cy=\"85\" r=\"28\" fill=\"#4ade80\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <line x1=\"250\" y1=\"85\" x2=\"250\" y2=\"113\" stroke=\"#15803d\" stroke-width=\"2\"/>\n      <text x=\"250\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Round Leaf (Lotus)</text>\n      <!-- Triangular / Heart (Peepal) -->\n      <path d=\"M400,55 Q370,80 385,110 L400,125 L415,110 Q430,80 400,55 Z\" fill=\"#86efac\" stroke=\"#15803d\" stroke-width=\"2\"/>\n      <text x=\"400\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#14532d\" text-anchor=\"middle\">Heart / Tapering (Peepal)</text>\n      <!-- Scented Herb -->\n      <circle cx=\"510\" cy=\"85\" r=\"22\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"510\" y=\"91\" font-size=\"16\" text-anchor=\"middle\">🌿</text>\n      <text x=\"510\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Aromatic (Tulsi/Mint)</text>\n    </svg>",
    "questions": [
      {
        "category": "Leaf Diversity",
        "q": "How can you identify different leaves using your senses of touch and smell without looking at them?",
        "ans": "• <strong>Sense of Touch:</strong> We can feel the leaf margins (smooth plain edge vs toothed/serrated edge) and surface textures (soft hairy like pumpkin leaves, waxy smooth like banana leaves, or prickly like rose leaves).<br>• <strong>Sense of Smell:</strong> Crushing a leaf releases aromatic essential oils with distinctive scents—such as the pungent cooling aroma of mint (pudina), the citrus smell of lemon leaves, and the characteristic medicinal aroma of neem or tulsi.",
        "marks": 3,
        "rubric": [
          {
            "key": "Tactile assessment (margins, textures, hairiness)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Olfactory identification (aromatic herbs)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Bark Texture & Function",
        "q": "What is tree bark, and how do you make a bark rubbing on paper?",
        "ans": "<strong>Tree Bark:</strong> The protective outer woody skin of a tree trunk that shields the tree from insect attacks, extreme weather, and dehydration.<br><strong>How to Make a Bark Rubbing:</strong> Place a plain sheet of paper firmly against the tree trunk. Using the side of a wax crayon or soft pencil, rub gently and evenly across the paper until the rough textures and ridges of the bark appear clearly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Function of tree bark",
            "marks": "1.5 Marks"
          },
          {
            "key": "Practical technique for making a crayon rubbing",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Herbarium & Leaf Art",
        "q": "How can fallen dry leaves be used creatively without harming living branches?",
        "ans": "We can collect naturally fallen dry leaves from the ground, press them between the pages of old heavy books, and paste them onto card sheets to create animal shapes (like elephants, birds, and fish) for scrapbooks and greeting cards.",
        "marks": 2,
        "rubric": [
          {
            "key": "Using only naturally fallen leaves",
            "marks": "1 Mark"
          },
          {
            "key": "Creative leaf-art craft method",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Poem Comprehension • 'Leaves'",
        "q": "In the poem 'Leaves' by V. P. Shrivastava:<br>(a) What different colors do leaves have in nature?<br>(b) What different shapes do leaves take?<br>(c) Describe what happens to dry leaves when the wind blows.",
        "ans": "<strong>Poem Analysis:</strong><br><strong>(a) Leaf Colors:</strong><br>• Green, light green, dark green, yellow, red, and purple.<br><br><strong>(b) Leaf Shapes:</strong><br>• Round (like lotus), long and pointed (like mango), triangular, and broad with wavy borders.<br><br><strong>(c) Dry Leaves in Wind:</strong><br>• Dry leaves flutter and whisper in the breeze, making a dry rustling crackle as they dance across the ground.",
        "marks": 3,
        "rubric": [
          {
            "key": "Variety of leaf colors noted",
            "marks": "1.0 M"
          },
          {
            "key": "Variety of leaf shapes described",
            "marks": "1.0 M"
          },
          {
            "key": "Rustling sound and movement of dry leaves explained",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Leaf Margins • Sorting & Classification",
        "q": "Collect fallen leaves from around your school. Classify them into:<br>(a) Leaves with smooth edges.<br>(b) Leaves with uneven, saw-toothed (serrated) edges.",
        "ans": "<strong>Classification:</strong><br>• <strong>(a) Smooth Edges (Entire margin):</strong> Mango leaf, Banana leaf, Peepal leaf.<br>• <strong>(b) Saw-toothed / Serrated Edges:</strong> Rose leaf, Neem leaf, Hibiscus leaf.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct examples of smooth-edged leaves",
            "marks": "1.5 M"
          },
          {
            "key": "Correct examples of serrated/toothed leaves",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Tree Trunk Rubbing • Bark Textures",
        "q": "How can you take a rubbing of a tree trunk? What differences do you feel between the trunk of a young sapling and that of an old banyan or neem tree?",
        "ans": "<strong>Trunk Rubbing & Bark Textures:</strong><br>• <strong>Method:</strong> Press a sheet of paper against the tree trunk and rub a dark wax crayon or soft pencil flat across the surface.<br>• <strong>Texture Comparison:</strong> A young sapling has a soft, thin, green, and smooth bark. An old neem or banyan tree has thick, deeply grooved, rough, dark brown bark that protects the wood from harsh weather and pests.",
        "marks": 3,
        "rubric": [
          {
            "key": "Paper and crayon rubbing method described",
            "marks": "1.5 M"
          },
          {
            "key": "Contrast between smooth sapling and rough old bark",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Herbarium Activity • Plant Ethics",
        "q": "Why does the teacher tell children to collect only fallen leaves from the ground instead of plucking fresh leaves from live branches?",
        "ans": "<strong>Plant Care Ethics:</strong><br>• Leaves are the 'food factories' (kitchens) of plants. Plucking green leaves needlessly damages the plant and hinders its growth. Collecting fallen leaves from the ground shows respect for living nature.",
        "marks": 2,
        "rubric": [
          {
            "key": "Biological role of leaves and compassionate nature ethics",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 2 ('The Plant Fairy'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Botanical Observation and Indigenous Herbal Knowledge",
      "text": "While playing in the park, Ananya scrapes her knee on a rough stone. Her grandmother does not panic; she plucks three leaves of a common garden weed called 'Patharchatta' (Bryophyllum) / Marigold, crushes them between her clean palms to extract green juice, and applies it to the scrape, stopping the bleeding immediately.",
      "question": "What does this experience teach children about traditional botanical knowledge and neighborhood medicinal plants?",
      "answer": "This demonstrates that our surrounding plants possess valuable medicinal properties preserved through traditional indigenous wisdom (Ayurveda and grandmother's remedies). Many common plants like tulsi (for coughs), neem (for skin infections), marigold (for cuts), and aloe vera (for burns) have natural antiseptic and healing capabilities. Learning to identify these beneficial plants connects scientific inquiry with practical first-aid.",
      "rubric": "Appreciation of medicinal plants, grandmother's home remedies, scientific validation of traditional knowledge (4 Marks)."
    }
  },
  {
    "id": "la3",
    "num": 3,
    "unit": "Unit 2: Water & Food",
    "title": "Water O' Water!",
    "subtitle": "Poem on Water Forms (River, Waterfall, Lake, Spring), Scarcity, Droughts, and Floods",
    "concepts": [
      "Diverse natural forms of water: Flowing rivers, roaring waterfalls, serene lakes, and underground springs.",
      "The indispensability of water for human life, agriculture, animals, and industry.",
      "The duality of water: In droughts, crops dry up and cattle starve; in floods, swollen rivers submerge homes.",
      "Traditional poems and songs celebrating monsoons and rainfall across Indian cultures."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Water O' Water! — Life-Giving River &amp; Water Forms</text>\n      <!-- Mountain & Waterfall -->\n      <polygon points=\"50,130 90,50 130,130\" fill=\"#94a3b8\"/>\n      <polygon points=\"110,130 150,40 190,130\" fill=\"#64748b\"/>\n      <path d=\"M150,55 Q145,85 140,110 L140,130\" stroke=\"#38bdf8\" stroke-width=\"4\"/>\n      <text x=\"140\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Waterfall</text>\n      <!-- River Winding -->\n      <path d=\"M190,120 Q250,90 320,115 Q390,140 460,110 L480,125\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"6\"/>\n      <text x=\"320\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0284c7\" text-anchor=\"middle\">Flowing River</text>\n      <!-- Lake -->\n      <ellipse cx=\"500\" cy=\"85\" rx=\"35\" ry=\"18\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <text x=\"500\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Freshwater Lake</text>\n    </svg>",
    "questions": [
      {
        "category": "Sources and Uses of Water",
        "q": "List four daily activities that cannot be done without water and two activities that can be done without water.",
        "ans": "<strong>Activities that CANNOT be done without water:</strong><br>1. Cooking food (boiling rice, making dal).<br>2. Bathing and washing clothes.<br>3. Quenching thirst (drinking).<br>4. Growing crops in fields (irrigation).<br><br><strong>Activities that CAN be done without water:</strong><br>1. Reading a storybook or writing.<br>2. Singing, dancing, or riding a bicycle.",
        "marks": 3,
        "rubric": [
          {
            "key": "Four correct essential water-dependent activities",
            "marks": "2 Marks"
          },
          {
            "key": "Two correct water-independent activities",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Drought vs Flood",
        "q": "What is the difference between a drought and a flood? How do both affect living beings?",
        "ans": "• <strong>Drought:</strong> Occurs when there is no rainfall for a very long period. Water sources dry up, crops wither in fields, soil cracks, and humans and cattle face severe hunger and dehydration.<br>• <strong>Flood:</strong> Occurs when excessive, heavy monsoon rains cause rivers and lakes to overflow their banks. Rushing floodwaters drown villages, destroy crops, wash away roads, and cause waterborne disease outbreaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate cause and effect of drought",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate cause and effect of flood",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Potable Water Safety",
        "q": "Why is water from rivers and ponds not safe to drink directly without boiling or filtering?",
        "ans": "Open water bodies contain microscopic disease-causing germs (bacteria, protozoa), dissolved chemical effluents, mud sediments, and animal waste. Drinking untreated river water causes dangerous waterborne illnesses like cholera, typhoid, and dysentery.",
        "marks": 2,
        "rubric": [
          {
            "key": "Contaminants (germs, chemicals, animal waste)",
            "marks": "1 Mark"
          },
          {
            "key": "Risk of waterborne diseases",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Water Poem Comprehension • 'Water O' Water!'",
        "q": "In the poem 'Water O' Water!' by Shri Prasad:<br>(a) Name three natural forms in which water exists on Earth.<br>(b) Write two human activities that cannot be done without water, and two activities that do not require water.",
        "ans": "<strong>Water Analysis:</strong><br><strong>(a) Three Natural Forms:</strong><br>• Liquid water (rivers, oceans), Solid ice / snow (glaciers), Gas / water vapor (clouds, steam).<br><br><strong>(b) Activities:</strong><br>• <strong>Cannot be done without water:</strong> Cooking food, bathing, drinking.<br>• <strong>Can be done without water:</strong> Reading a book, running a race, singing a song.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three natural states of water named",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate contrast of activities requiring vs not requiring water",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Water Capacity Ranking • Household Containers",
        "q": "Rank these containers in order of the amount of water they hold (1 = holds least water to 4 = holds most water):<br>Water bottle (1 Litre), Spoon (5 mL), Overhead tank (500 Litres), Bath bucket (15 Litres).",
        "ans": "<strong>Capacity Ranking:</strong><br>1. <strong>Spoon (5 mL)</strong> — Holds least<br>2. <strong>Water bottle (1 Litre)</strong><br>3. <strong>Bath bucket (15 Litres)</strong><br>4. <strong>Overhead tank (500 Litres)</strong> — Holds most.",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 containers ranked in exact ascending order",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "River Flow • The Journey of Water",
        "q": "Where do mountain rivers get their water from, and where do they finally empty their water?",
        "ans": "<strong>River Journey:</strong><br>• Mountain rivers originate from melting glaciers (snowfields) and seasonal monsoon rainfall in high mountain ranges.<br>• After flowing hundreds of kilometers through valleys and plains, they finally empty their water into the <strong>Ocean or Sea</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Glacier melting and rain origin noted",
            "marks": "1.5 M"
          },
          {
            "key": "Sea/Ocean terminal destination noted",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Safe Drinking Water • Boiling and Filtering",
        "q": "Why is water from a river or pond boiled or filtered before drinking?",
        "ans": "<strong>Water Safety:</strong><br>• River and pond water often contains invisible germs, bacteria, parasites, and dirt. Boiling water for 10 minutes or passing it through a certified filter kills harmful microbes and prevents waterborne diseases like cholera, typhoid, and diarrhea.",
        "marks": 2,
        "rubric": [
          {
            "key": "Microbial disinfection and disease prevention explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 3 ('Water O' Water!'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Disaster Preparedness: Flood Safety in Coastal Communities",
      "text": "Due to a cyclone, heavy rain lashes a coastal town. Floodwater enters the ground floor of houses, submerging electric plug points, floating garbage around, and contaminating the municipal drinking water supply pipes.",
      "question": "What emergency safety precautions must families follow during a flood to protect their lives and health?",
      "answer": "Families must observe immediate flood safety protocols: (1) <strong>Electrical Safety:</strong> Turn off the main electrical circuit breaker immediately to prevent lethal electrocution through flooded water. (2) <strong>Move to Higher Ground:</strong> Evacuate to higher floors or designated cyclone shelters with emergency medicine, dry snacks, and torches. (3) <strong>Strict Drinking Water Hygiene:</strong> Drink only vigorously boiled water or bottled water; never drink cloudy floodwater. (4) <strong>Avoid Walking in Moving Water:</strong> Fast currents of even knee-deep water can sweep away adults, and hidden submerged open drains or reptiles pose fatal hazards.",
      "rubric": "Electrical cut-off, higher ground evacuation, safe potable drinking water, hazard avoidance (4 Marks)."
    }
  },
  {
    "id": "la4",
    "num": 4,
    "unit": "Unit 3: Family & Homes",
    "title": "Our First School",
    "subtitle": "The Family as Our Primary Learning Space: Values, Habits, Resemblances, and Customs",
    "concepts": [
      "Our family is our first school because we learn our first words, habits, manners, and values at home.",
      "Physical resemblances: Inheriting facial features, voice tones, walking styles, and smiles from parents.",
      "Special family customs: Taking off shoes outside before entering the home, folding hands in greeting.",
      "Learning skills from family elders: Tailoring, cooking, farming, cycling, or singing."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">Our First School — Family Values, Resemblance &amp; Customs</text>\n      <!-- House / Home School -->\n      <polygon points=\"120,50 60,85 180,85\" fill=\"#ea580c\"/>\n      <rect x=\"75\" y=\"85\" width=\"90\" height=\"40\" fill=\"#fed7aa\"/>\n      <text x=\"120\" y=\"105\" font-size=\"14\" text-anchor=\"middle\">🏡</text>\n      <text x=\"120\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Home: The First School</text>\n      <!-- Grandfather Teaching Child -->\n      <circle cx=\"290\" cy=\"80\" r=\"28\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"290\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">👴📖👦</text>\n      <text x=\"290\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Learning Values &amp; Manners</text>\n      <!-- Resemblance Mirror -->\n      <circle cx=\"460\" cy=\"80\" r=\"28\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"460\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">👩‍🦰👧🪞</text>\n      <text x=\"460\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Physical Resemblances</text>\n    </svg>",
    "questions": [
      {
        "category": "Family Values",
        "q": "Why is our family called our 'first school'?",
        "ans": "Our family is called our first school because long before we ever enroll in a formal classroom, we learn how to talk, walk, eat neatly, share our toys, respect elders, and practice honesty from our parents and grandparents at home.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of early social and moral learning at home",
            "marks": "2 Marks"
          },
          {
            "key": "Contrast with formal schooling",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Heredity & Resemblance",
        "q": "Give two examples of how children resemble their parents or relatives in physical appearance or mannerisms.",
        "ans": "1. <strong>Physical Features:</strong> A child may have curly hair and dark brown eyes just like their mother, or have a tall height like their father.<br>2. <strong>Mannerisms:</strong> A child may have the same hearty laughing style as their uncle, or walk with a brisk gait just like their grandfather.",
        "marks": 3,
        "rubric": [
          {
            "key": "One clear example of inherited physical features",
            "marks": "1.5 Marks"
          },
          {
            "key": "One clear example of behavioral or vocal resemblance",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Cultural Customs",
        "q": "What is the reason behind the common Indian custom of leaving footwear outside the home?",
        "ans": "Footwear gathers dirt, dust, animal feces, and street microbes from roads. Removing shoes outside ensures that living rooms and kitchen areas remain clean, hygienic, and spiritually sacred.",
        "marks": 2,
        "rubric": [
          {
            "key": "Hygiene and prevention of outdoor contamination",
            "marks": "1.5 Marks"
          },
          {
            "key": "Respect for indoor sacred spaces",
            "marks": "0.5 Marks"
          }
        ]
      },
      {
        "category": "Family Resemblances • Genetic Traits",
        "q": "In 'Our First School':<br>(a) How can family members resemble each other (features, voice, smile, walk)?<br>(b) Why is our family called our 'First School'?",
        "ans": "<strong>Family Resemblance & First School:</strong><br><strong>(a) Resemblance:</strong><br>• Children often inherit physical traits like curly hair, brown eyes, facial structure, laughing style, or voice tone from their parents or grandparents.<br><br><strong>(b) First School:</strong><br>• Long before going to formal school, we learn our very first words, eating manners, walking, kindness, hygiene, and cultural customs at home from our family members.",
        "marks": 3,
        "rubric": [
          {
            "key": "Physical and behavioral resemblances described",
            "marks": "1.5 M"
          },
          {
            "key": "Foundational learning at home explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Family Customs • Traditions at Home",
        "q": "In Anwari's family, all members follow the custom of taking off their shoes outside before entering the house.<br>(a) Why do many Indian families follow this custom?<br>(b) Write one healthy custom practiced in your family.",
        "ans": "<strong>Family Customs:</strong><br><strong>(a) Shoes Outside:</strong><br>• Footwear collects street dirt, animal feces, and outdoor germs. Leaving shoes outside keeps the home floor clean, hygienic, and spiritually pure.<br><br><strong>(b) Family Custom:</strong><br>• In our family, we wash our hands and feet after returning from outside and touch the feet of our grandparents every morning to seek their blessings.",
        "marks": 3,
        "rubric": [
          {
            "key": "Hygiene and cultural purity rationale for shoes",
            "marks": "1.5 M"
          },
          {
            "key": "Valid personal/cultural family custom described",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Helping at Home • Family Duties",
        "q": "List three household tasks that children in Class 3 can easily do to help their parents at home.",
        "ans": "<strong>Helpful Tasks for Children:</strong><br>1. Keeping school bags, shoes, and water bottles in their proper places after coming home.<br>2. Laying plates, spoons, and water glasses on the dining table before dinner.<br>3. Watering potted plants in the balcony every evening.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three age-appropriate, realistic helping chores",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Respect & Communication • Family Dialogue",
        "q": "What should you do when you accidentally make a mistake or break a dish at home?",
        "ans": "<strong>Honesty & Courage:</strong><br>• We should never lie or hide the pieces. We should immediately tell our parents the truth, apologize politely, and help sweep up the broken pieces carefully.",
        "marks": 2,
        "rubric": [
          {
            "key": "Honesty, apology, and helping in cleanup",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 4 ('Our First School'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Inter-generational Learning: Preserving Traditional Handicrafts",
      "text": "In an artisan family, little Anwita observes her mother and grandmother weaving intricate Zari embroidery on sarees every evening after completing her school homework.",
      "question": "How does learning within the family keep traditional cultural arts and artisanal livelihoods alive?",
      "answer": "Artisanal knowledge is experiential and passed down orally and through observation across generations. By watching elders' precise hand movements, pattern counting, and thread tensions, children absorb subtle craft techniques that no textbook can teach. This inter-generational mentorship nurtures respect for traditional livelihoods, preserves intangible cultural heritage, and empowers future generations with sustainable economic skills.",
      "rubric": "Experiential learning at home, preservation of intangible craft heritage, respect for traditional work (4 Marks)."
    }
  },
  {
    "id": "la5",
    "num": 5,
    "unit": "Unit 3: Family & Homes",
    "title": "Chhotu's House",
    "subtitle": "Turning a Shelter into a Home: Uninvited Animal Guests, House Cleanliness, and Decoration",
    "concepts": [
      "The difference between a physical shelter (roof/walls) and a home (warmth, family love, comfort).",
      "How Chhotu repurposed a large cement drainage pipe into a comfortable home with separate living, cooking, and sleeping zones.",
      "Uninvited animal guests in our homes: Lizards, spiders, mosquitoes, flies, ants, and mice.",
      "Keeping homes clean: Sweeping, mopping, waste disposal, and festive decorations (rangoli, torans)."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f1f5f9\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Chhotu's Pipe Home &amp; Uninvited Animal Guests</text>\n      <!-- Cement Pipe -->\n      <ellipse cx=\"140\" cy=\"85\" rx=\"30\" ry=\"40\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"3\"/>\n      <ellipse cx=\"140\" cy=\"85\" rx=\"20\" ry=\"30\" fill=\"#94a3b8\"/>\n      <rect x=\"140\" y=\"45\" width=\"80\" height=\"80\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"3\"/>\n      <text x=\"180\" y=\"88\" font-size=\"14\" text-anchor=\"middle\">🛏️🪣</text>\n      <text x=\"180\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Chhotu's Pipe Home</text>\n      <!-- Uninvited House Guests -->\n      <circle cx=\"340\" cy=\"85\" r=\"28\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n      <text x=\"340\" y=\"92\" font-size=\"18\" text-anchor=\"middle\">🦎🕷️🐁</text>\n      <text x=\"340\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Uninvited Guests</text>\n      <!-- Home Cleaning & Rangoli -->\n      <circle cx=\"480\" cy=\"85\" r=\"28\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"2\"/>\n      <text x=\"480\" y=\"92\" font-size=\"18\" text-anchor=\"middle\">🧹✨🌸</text>\n      <text x=\"480\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">Cleanliness &amp; Rangoli</text>\n    </svg>",
    "questions": [
      {
        "category": "Shelter Adaptation",
        "q": "How did Chhotu divide the cement pipe into different spaces for his daily living?",
        "ans": "Chhotu smartly divided the pipe and the area around it into functional zones:<br>1. Inside the pipe was his <strong>sleeping space</strong> shielded from rain and heat.<br>2. Outside behind the pipe was his <strong>cooking space</strong> with a small clay stove.<br>3. An area next to it was for <strong>drying clothes</strong> on a rope.<br>4. A corner was set aside for <strong>storing drinking water</strong> in an earthen pitcher.<br>5. The front open space was for <strong>welcoming guests and chatting with his friend Monu</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Detailed division into sleeping, cooking, water storage, and guest spaces",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Uninvited Guests in Homes",
        "q": "Name four uninvited animals that live in our homes and explain where they are usually found.",
        "ans": "1. <strong>Lizards (Geckos):</strong> Crawling on walls and ceilings near electric lights to hunt flies.<br>2. <strong>Spiders:</strong> Weaving webs in dusty corners and behind heavy cupboards.<br>3. <strong>Ants:</strong> Marching in straight lines toward sugary crumbs dropped in the kitchen.<br>4. <strong>Mice (Rats):</strong> Hiding in dark basements, store rooms, or kitchen drains.",
        "marks": 3,
        "rubric": [
          {
            "key": "Naming four uninvited creatures",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate micro-locations within the house",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Cleanliness Habits",
        "q": "Why is daily sweeping and wet mopping necessary for household health?",
        "ans": "Daily sweeping removes dust and food crumbs that attract cockroaches and mice, while mopping with disinfectant cleans floor bacteria and prevents the breeding of germs that cause infectious illnesses.",
        "marks": 2,
        "rubric": [
          {
            "key": "Pest prevention by removing food crumbs",
            "marks": "1 Mark"
          },
          {
            "key": "Bacterial disinfection for family health",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Shelter Adaptation • Chhotu's House",
        "q": "When Chhotu came to Mumbai, he had no house. He saw a large cement pipe lying on the road.<br>(a) How did Chhotu use the cement pipe as his home?<br>(b) How did he divide the pipe and surrounding area into different parts for living?",
        "ans": "<strong>Chhotu's Shelter:</strong><br><strong>(a) Pipe as Shelter:</strong><br>• Chhotu used the large cement pipe as a safe, dry home that protected him from rain, scorching heat, and cold winds without having to pay rent.<br><br><strong>(b) Functional Zones:</strong><br>• Inside the pipe: <strong>Sleeping area</strong>.<br>• Near the pipe entrance: <strong>Cooking area</strong>.<br>• On a string outside: <strong>Drying clothes</strong>.<br>• In a bucket outside: <strong>Water storage</strong>.<br>• Open space: <strong>Sitting area for chatting with friend Monu</strong>.",
        "marks": 4,
        "rubric": [
          {
            "key": "Protection from weather without rent",
            "marks": "1.5 M"
          },
          {
            "key": "Zoning of pipe into sleeping, cooking, drying areas",
            "marks": "2.5 M"
          }
        ]
      },
      {
        "category": "Uninvited Guests • Household Pests",
        "q": "In the poem 'Home Sweet Home', which creatures are called 'uninvited guests' that live in our houses without our permission?",
        "ans": "<strong>Uninvited Guests in Houses:</strong><br>• <strong>Lizards</strong> (crawling on walls)<br>• <strong>Mice / Rats</strong> (running races in cupboards)<br>• <strong>Mosquitoes and Flies</strong> (buzzing around)<br>• <strong>Cockroaches</strong> (creeping out from drains at night).",
        "marks": 3,
        "rubric": [
          {
            "key": "At least three accurate household pests named",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Home Cleanliness • Sanitation Rules",
        "q": "Why is it important to sweep floors and empty dustbins daily in a house?",
        "ans": "<strong>Sanitation Rationale:</strong><br>• Leftover food crumbs, dust, and trash attract mice, cockroaches, and flies, which carry harmful bacteria that contaminate food and cause illnesses. Daily sweeping and mopping keep the house healthy and pleasant.",
        "marks": 3,
        "rubric": [
          {
            "key": "Pest attraction and bacterial contamination explained",
            "marks": "1.5 M"
          },
          {
            "key": "Hygienic living environment emphasized",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Decorating the House • Festive Rangoli",
        "q": "How do families decorate their houses on special occasions and festivals? Give two examples.",
        "ans": "<strong>House Decoration:</strong><br>1. Drawing colorful rangolis with flower petals and rice powder on the front porch.<br>2. Hanging fresh mango leaf torans (bandanwar) and lighting clay diyas along balconies.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two authentic Indian house decoration methods described",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 5 ('Chhotu's House'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Urban Homelessness and Community Empathy",
      "text": "Like Chhotu, many migrant workers come to big cities in search of work and live under flyovers, in pipes, or in makeshift tin shacks without clean piped water or proper toilets.",
      "question": "What basic civic facilities should city governments provide in night shelters (Rain Baseras) to help homeless people live with dignity?",
      "answer": "City governments should provide well-maintained <strong>night shelters (Rain Baseras)</strong> equipped with: (1) Clean, filtered potable drinking water taps. (2) Separate, hygienic restrooms with flushing toilets and running water. (3) Clean bedding, blankets in winter, and mosquito mesh windows. (4) Basic first-aid medical dispensary access. (5) Secure storage lockers so daily wage workers can keep their earnings and identification documents safe.",
      "rubric": "Compassionate understanding of migration, clean sanitation, dignity, essential civic shelter amenities (4 Marks)."
    }
  },
  {
    "id": "la6",
    "num": 6,
    "unit": "Unit 2: Water & Food",
    "title": "Foods We Eat",
    "subtitle": "Diversity of Indian Cuisines: Regional Staples (Rice, Wheat, Tapioca, Mustard Oil), Age-based Diets",
    "concepts": [
      "Staple foods depend on geography and climate: Rice in Kerala, West Bengal; Wheat and Bajra in Punjab, Rajasthan.",
      "Dietary needs change with age: Soft liquids (milk, dal water) for infants; light, soft food for the elderly; energetic meals for growing children.",
      "Unique regional delicacies: Tapioca and fish in Kerala, Sarson ka Saag and Makki ki Roti in Punjab, Momos in Sikkim.",
      "Family food sharing: Eating meals together and showing empathy when food is scarce."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Regional Food Staples Across India</text>\n      <!-- North (Wheat / Roti) -->\n      <circle cx=\"100\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2\"/><text x=\"100\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🫓🌾</text>\n      <text x=\"100\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">North: Wheat &amp; Maize</text>\n      <!-- South (Rice / Tapioca / Coconut) -->\n      <circle cx=\"230\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"230\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🍚🥥</text>\n      <text x=\"230\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">South: Rice &amp; Tapioca</text>\n      <!-- East (Fish & Rice) -->\n      <circle cx=\"360\" cy=\"80\" r=\"26\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"360\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🐟🍚</text>\n      <text x=\"360\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">East: Rice &amp; Fish</text>\n      <!-- West (Bajra / Jowar) -->\n      <circle cx=\"480\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"480\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🥣🫓</text>\n      <text x=\"480\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">West: Bajra &amp; Jowar</text>\n    </svg>",
    "questions": [
      {
        "category": "Age-Specific Diets",
        "q": "Why can a 6-month-old baby and a 75-year-old grandmother not eat the same crispy fried corn cob (bhutta) as a 10-year-old child?",
        "ans": "• <strong>6-Month-Old Baby:</strong> Has no teeth and an underdeveloped digestive system, surviving primarily on mother's milk and liquid porridge.<br>• <strong>75-Year-Old Grandmother:</strong> Often has missing or weak teeth and slower digestion, needing soft foods like dal-khichdi, mashed rotis, and stewed vegetables rather than hard corn.<br>• <strong>10-Year-Old Child:</strong> Has strong, healthy teeth and high energy needs, easily chewing and digesting crunchy roasted corn.",
        "marks": 3,
        "rubric": [
          {
            "key": "Contrast of infant dental and digestive stage",
            "marks": "1 Mark"
          },
          {
            "key": "Contrast of elderly dental and metabolic needs",
            "marks": "1 Mark"
          },
          {
            "key": "Growing child's chewing capacity",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Regional Cuisines",
        "q": "Why do people living in Kerala eat a lot of rice and coconut, while people in Rajasthan eat bajra and lentils?",
        "ans": "Dietary habits depend on local agricultural harvests and climate:<br>• <strong>Kerala:</strong> High coastal rainfall and fertile soils allow abundant paddy and coconut cultivation; hence, coconut curries and rice are staple foods.<br>• <strong>Rajasthan:</strong> A dry, arid desert climate with scarce rainfall allows drought-resistant millets like Bajra (pearl millet) and hardy pulses to thrive; hence, Bajre ki Roti and Dal-Baati are staples.",
        "marks": 3,
        "rubric": [
          {
            "key": "Connection between climate/soil and crop growth in Kerala",
            "marks": "1.5 Marks"
          },
          {
            "key": "Connection between desert climate and drought-resistant crops in Rajasthan",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Food Empathy",
        "q": "What should you do if you notice that a classmate has not brought a lunch box to school?",
        "ans": "We should gently and politely invite our classmate to sit with us and share our meal, making sure they feel respected and cared for without feeling embarrassed.",
        "marks": 2,
        "rubric": [
          {
            "key": "Sharing food with dignity and empathy",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Nutrition Across Ages • Foods We Eat",
        "q": "In Vipul's family, why could his Dadi (grandmother) not eat hard bhutta (roasted corn cob)? What food was prepared for her instead?",
        "ans": "<strong>Diet & Age:</strong><br>• Dadi is very old and has lost most of her natural teeth, so she cannot chew hard, chewy roasted corn.<br>• For Dadi, her mother prepared <strong>soft dal with crushed chapatis soaked in it (dal-baati or dal-roti)</strong> with a little sugar, making it soft and easy to digest.",
        "marks": 3,
        "rubric": [
          {
            "key": "Absence of teeth/weak gums explained",
            "marks": "1.5 M"
          },
          {
            "key": "Soft soaked chapati in dal identified",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Diet Comparison • Baby vs Adult vs Elderly",
        "q": "Complete the table showing what different people can and cannot easily eat:<br>• 4-month-old Baby<br>• Young Sports Student<br>• Old Grandfather",
        "ans": "<strong>Diet by Age Group:</strong><br><table style='width:100%;border-collapse:collapse;margin-top:6px;'><thead><tr style='background:#f1f5f9;'><th style='padding:6px;border:1px solid #cbd5e1;'>Person</th><th style='padding:6px;border:1px solid #cbd5e1;'>What they CAN eat</th><th style='padding:6px;border:1px solid #cbd5e1;'>What they CANNOT eat</th></tr></thead><tbody><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>4-month-old Baby</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>Mother's milk (liquid food)</td><td style='padding:6px;border:1px solid #cbd5e1;'>Chapatis, nuts, fruits, solid rice</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Young Student</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>All hard and soft foods (corn, nuts, chapatis)</td><td style='padding:6px;border:1px solid #cbd5e1;'>Can eat almost anything edible</td></tr><tr><td style='padding:6px;border:1px solid #cbd5e1;'><strong>Old Grandfather</strong></td><td style='padding:6px;border:1px solid #cbd5e1;'>Soft khichdi, soaked rotis, boiled vegetables</td><td style='padding:6px;border:1px solid #cbd5e1;'>Hard nuts, hard bhutta, raw sugarcane</td></tr></tbody></table>",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct diet entries for baby, student, and grandfather",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Regional Foods • Geographical Differences",
        "q": "Why do people in coastal Kerala eat tapioca and coconut curry, while people in Punjab eat wheat and mustard greens?",
        "ans": "<strong>Geographical Food Habits:</strong><br>• People eat what grows most abundantly and easily in their local climate and soil. Kerala's humid tropical coast is ideal for coconut trees and tapioca, while Punjab's fertile alluvial plains produce rich harvests of wheat and mustard.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and soil availability as key food determinant",
            "marks": "1.5 M"
          },
          {
            "key": "Specific Kerala vs Punjab crop linkages explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Etiquette • Hunger vs Boredom",
        "q": "How do you know that you are genuinely hungry? Describe the feeling.",
        "ans": "<strong>Physical Hunger:</strong><br>• When genuinely hungry, our stomach feels empty and makes rumbling sounds, our body energy drops, and any simple healthy food (like plain roti and dal) looks delicious and satisfying.",
        "marks": 2,
        "rubric": [
          {
            "key": "Physical hunger sensations accurately described",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 6 ('Foods We Eat'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Nutritional Diversity: Millets as Climate-Resilient Superfoods",
      "text": "Under the National Millet Mission, schools are introducing traditional millets (Ragi, Jowar, Bajra) into the weekly school menu alongside wheat and rice.",
      "question": "Why are millets nutritionally superior to polished white rice, and why are they environmentally friendly crops to grow?",
      "answer": "<strong>Nutritional Advantages:</strong> Millets are rich in calcium, iron, and dietary fiber with a low glycemic index, preventing childhood anemia, bone weakness, and blood sugar spikes.<br><strong>Environmental Benefits:</strong> Unlike water-guzzling crops like paddy (which require thousands of liters of flooded water per kilogram), millets are hardy, drought-tolerant grains that grow in dry, low-fertility soils with minimal rainwater and zero chemical fertilizers.",
      "rubric": "Nutritional superiority (calcium/iron/fiber) and climate resilience (low water/drought resistance) (4 Marks)."
    }
  },
  {
    "id": "la7",
    "num": 7,
    "unit": "Unit 4: Communication & Expression",
    "title": "Saying Without Speaking",
    "subtitle": "Non-Verbal Communication: Gestures, Facial Expressions, Sign Language, and Dance Mudras",
    "concepts": [
      "Expressing emotions without speech: Happiness, anger, sadness, fear, and surprise through face and eyes.",
      "Sign Language: How people with hearing or speech impairments communicate gracefully using standardized hand signs.",
      "Classical dance hand gestures (Mudras) and facial expressions (Bhavas) conveying animals, flowers, and stories.",
      "Empathy and inclusivity: Treating differently-abled friends with equal respect and equal opportunity."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fdf2f8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">Saying Without Speaking — Facial Expressions &amp; Dance Mudras</text>\n      <!-- Happy Face -->\n      <circle cx=\"80\" cy=\"80\" r=\"24\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"80\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">😊</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Joy / Happy</text>\n      <!-- Surprised Face -->\n      <circle cx=\"180\" cy=\"80\" r=\"24\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"180\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">😲</text>\n      <text x=\"180\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Surprise / Wonder</text>\n      <!-- Sign Language Hand -->\n      <circle cx=\"310\" cy=\"80\" r=\"26\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"310\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🤟👋</text>\n      <text x=\"310\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#3730a3\" text-anchor=\"middle\">Sign Language</text>\n      <!-- Dance Mudra (Flower/Deer) -->\n      <circle cx=\"460\" cy=\"80\" r=\"26\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"2\"/><text x=\"460\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🪷🦌</text>\n      <text x=\"460\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">Dance Mudras (Lotus/Deer)</text>\n    </svg>",
    "questions": [
      {
        "category": "Facial Expressions",
        "q": "How can our face and eyes tell if a person is happy, angry, or scared without them saying a single word?",
        "ans": "• <strong>Happiness:</strong> The mouth curves upward into a broad smile, cheek muscles lift, and eyes sparkle with pleasant creases.<br>• <strong>Anger:</strong> Eyebrows furrow together tightly in a scowl, forehead veins tense, lips press thin, and eyes open wide with a hard stare.<br>• <strong>Fear:</strong> Eyes widen in shock, pupils dilate, eyebrows raise high, and the mouth drops open slightly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Detailed anatomical descriptions for happy, angry, and fearful expressions",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Classical Mudras",
        "q": "What are 'Mudras' and 'Bhavas' in classical Indian dances like Bharatnatyam or Kathak?",
        "ans": "In Indian classical dance:<br>• <strong>Mudras:</strong> Specific symbolic hand gestures used to depict natural objects (like a blooming lotus flower, a swimming fish, or a flying bird).<br>• <strong>Bhavas:</strong> Facial expressions that convey deep emotional stories (such as courage, devotion, joy, and wonder).",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition and role of hand Mudras",
            "marks": "1.5 Marks"
          },
          {
            "key": "Definition and role of facial Bhavas",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Inclusivity & Sign Language",
        "q": "How does learning basic Sign Language help school children build stronger friendships?",
        "ans": "Learning Sign Language bridges communication barriers, allowing children to converse directly with hearing-impaired classmates, play games together comfortably, and foster an inclusive classroom culture where everyone feels heard and valued.",
        "marks": 2,
        "rubric": [
          {
            "key": "Overcoming communication barriers and fostering inclusion",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Non-Verbal Communication • Saying Without Speaking",
        "q": "In the game 'Dumb Charades':<br>(a) How do players explain actions without uttering a single word?<br>(b) Who in our society communicates primarily through sign language?",
        "ans": "<strong>Silent Communication:</strong><br><strong>(a) Dumb Charades:</strong><br>• Players communicate using <strong>facial expressions, bodily gestures, hand movements, and eye signals</strong> to mime actions.<br><br><strong>(b) Sign Language Users:</strong><br>• People who have hearing impairments (cannot hear) and speech impairments (cannot speak) communicate beautifully using standardized <strong>Sign Language</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Facial expressions and bodily gestures described",
            "marks": "1.5 M"
          },
          {
            "key": "Sign language for hearing/speech impaired explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Classical Dance • Mudras and Bhavas",
        "q": "In classical Indian dances (like Bharatanatyam and Kathakali), how do dancers tell entire stories without speaking?",
        "ans": "<strong>Mudras and Bhavas:</strong><br>• Dancers use <strong>Mudras (symbolic hand gestures)</strong> and <strong>Bhavas (intense facial expressions)</strong> to depict nature, animals, emotions (joy, anger, sorrow, courage), and divine stories to the rhythm of music.",
        "marks": 3,
        "rubric": [
          {
            "key": "Role of Mudras (hand gestures) explained",
            "marks": "1.5 M"
          },
          {
            "key": "Role of Bhavas (facial expressions) explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Facial Expressions • Drawing Emotion Emojis",
        "q": "Describe the facial expressions for:<br>(a) Joy / Happiness<br>(b) Anger<br>(c) Fear / Surprise",
        "ans": "<strong>Facial Features of Emotion:</strong><br>• <strong>(a) Happiness:</strong> Smiling curved lips showing teeth, relaxed forehead, twinkling eyes.<br>• <strong>(b) Anger:</strong> Knitted eyebrows drawn tightly together, frowning mouth, staring eyes.<br>• <strong>(c) Surprise / Fear:</strong> Wide open eyes, raised high eyebrows, open O-shaped mouth.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate eyebrow, mouth, and eye cues for all three emotions",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Inclusion & Empathy • Special Abilities",
        "q": "How can we make our classroom welcoming for a classmate who cannot speak or hear well?",
        "ans": "<strong>Inclusive Classrooms:</strong><br>1. Face the friend directly when speaking so they can read lips, and learn basic sign language gestures to communicate.<br>2. Always include them warmly in playground games, art, and lunch groups without mocking.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two practical, empathetic, and inclusive classroom practices",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 7 ('Saying Without Speaking'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Creating Accessible and Inclusive School Environments",
      "text": "A national education survey shows that many children with hearing impairments drop out of regular schools because teachers lecture orally without visual aids or sign interpreters.",
      "question": "Recommend three practical visual teaching methods that classroom teachers can adopt to make lessons accessible to students with hearing impairments.",
      "answer": "Teachers can adopt universal inclusive practices: (1) <strong>Rich Visual Demonstrations:</strong> Use illustrated charts, infographics, subtitles on video clips, and step-by-step whiteboard diagrams for all core explanations. (2) <strong>Face the Class While Speaking:</strong> Maintain clear line-of-sight so students can lip-read easily without the teacher turning their back toward the board while talking. (3) <strong>Peer Sign Buddies:</strong> Teach the entire class basic Indian Sign Language alphabets and greetings so classmates can assist and interact comfortably during group projects.",
      "rubric": "Visual pedagogy, lip-reading accessibility, peer sign language integration (4 Marks)."
    }
  },
  {
    "id": "la8",
    "num": 8,
    "unit": "Unit 1: Animals & Habitats",
    "title": "Flying High",
    "subtitle": "Avian Diversity: Beak Shapes, Feathers, Flying Habits, Claws, and Ecological Roles",
    "concepts": [
      "Diverse bird beaks adapted to food: Hooked beaks for meat (Eagle), curved beaks for cracking nuts (Parrot), needle beaks for nectar (Sunbird), flat beaks for filtering mud (Duck).",
      "Feather functions: Flight feathers on wings, down feathers keeping the body warm, and tail feathers steering like a rudder.",
      "Unique bird traits: The Owl can rotate its head almost fully backward; the Myna jerks its neck back and forth.",
      "The role of scavenger birds (Vultures, Crows) as 'nature's sanitation squad' cleaning carcasses."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Flying High — Specialized Bird Beaks &amp; Dietary Adaptations</text>\n      <!-- Eagle / Hooked Beak -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"80\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">🦅</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Hooked Beak (Tearing Meat)</text>\n      <!-- Parrot / Curved Beak -->\n      <circle cx=\"200\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"200\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">🦜</text>\n      <text x=\"200\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Curved Beak (Cracking Nuts)</text>\n      <!-- Woodpecker / Chisel Beak -->\n      <circle cx=\"330\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"330\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">🪵🐦</text>\n      <text x=\"330\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Chisel Beak (Wood Borers)</text>\n      <!-- Duck / Flat Spoon Beak -->\n      <circle cx=\"470\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"470\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">🦆</text>\n      <text x=\"470\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Flat Beak (Filtering Mud)</text>\n    </svg>",
    "questions": [
      {
        "category": "Beak Adaptations",
        "q": "Why do different birds have different shapes of beaks? Explain with three examples.",
        "ans": "Different birds have different beak shapes because their beaks are specialized biological tools adapted to their specific diet:<br>1. <strong>Eagle / Vulture:</strong> Strong, sharp, hooked beaks to tear through tough meat and flesh.<br>2. <strong>Parrot:</strong> Hard, hooked curved beak to crack open tough nutshells and bite into hard green fruits.<br>3. <strong>Woodpecker:</strong> Long, straight, chisel-like beak to peck deep holes into tree bark to pull out hidden wood-boring insects.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of dietary adaptation principle",
            "marks": "1.5 Marks"
          },
          {
            "key": "Three accurate bird-beak functional pairings",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Feather Functions",
        "q": "What are the two main purposes of feathers on a bird's body?",
        "ans": "1. <strong>Flight & Steering:</strong> Strong, broad flight feathers on wings and tail give aerodynamic lift and help steer direction in the air.<br>2. <strong>Thermal Insulation & Weatherproofing:</strong> Soft, fluffy down feathers close to the skin trap warm air to protect the bird from freezing cold and shed water droplets during rain.",
        "marks": 3,
        "rubric": [
          {
            "key": "Flight aerodynamic role",
            "marks": "1.5 Marks"
          },
          {
            "key": "Thermal insulation and waterproofing role",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Unique Avian Facts",
        "q": "Which bird can turn its head around backwards to see behind itself, and which bird is known for copying human speech?",
        "ans": "The <strong>Owl</strong> can rotate its head around almost completely (up to 270 degrees) to observe behind itself, and the <strong>Parrot</strong> is famous for imitating and repeating human speech.",
        "marks": 2,
        "rubric": [
          {
            "key": "Identification of the Owl and Parrot with correct traits",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Bird Riddles • Flying High",
        "q": "Solve the bird riddles from Chapter 8:<br>(a) 'On my head I have a crest, all say I dance the best. Of my feathers I am proud, before the rain I cry aloud.' $\\rightarrow$ _____<br>(b) 'Long and grooved is my tail, high up in the sky I sail. I pick and eat all the mice.' $\\rightarrow$ _____<br>(c) 'My beak is pink, feathers grey, Guter-goo I go on all day.' $\\rightarrow$ _____<br>(d) 'In the trunk of trees holes I make, hidden insects I intake. Tuk-tuk-tuk goes my work.' $\\rightarrow$ _____",
        "ans": "<strong>Bird Riddle Solutions:</strong><br>• (a) <strong>Peacock (National Bird of India)</strong><br>• (b) <strong>Eagle / Kite</strong><br>• (c) <strong>Pigeon</strong><br>• (d) <strong>Woodpecker</strong>",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct bird identification for (a) and (b)",
            "marks": "2.0 M"
          },
          {
            "key": "Correct bird identification for (c) and (d)",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Bird Beaks • Adaptation to Diet",
        "q": "Match each bird's beak shape to the food it eats:<br>• Eagle/Vulture: [Short strong beak for cracking seeds, Hooked sharp beak for tearing meat, Long slender beak for sucking nectar, Flat broad beak for scooping mud]<br>• Sparrow/Pigeon: [Short strong beak for cracking seeds, Hooked sharp beak for tearing meat, Long slender beak for sucking nectar, Flat broad beak for scooping mud]<br>• Sunbird/Hummingbird: [Short strong beak for cracking seeds, Hooked sharp beak for tearing meat, Long slender beak for sucking nectar, Flat broad beak for scooping mud]<br>• Duck: [Short strong beak for cracking seeds, Hooked sharp beak for tearing meat, Long slender beak for sucking nectar, Flat broad beak for scooping mud]",
        "ans": "<strong>Beak Adaptations:</strong><br>• <strong>Eagle/Vulture:</strong> Hooked sharp beak for tearing meat.<br>• <strong>Sparrow/Pigeon:</strong> Short, strong cone-shaped beak for cracking seeds.<br>• <strong>Sunbird:</strong> Long, curved, slender beak for sipping flower nectar.<br>• <strong>Duck:</strong> Flat broad beak with strainer holes for filtering insects and worms from water mud.",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 beak-diet adaptations correctly matched",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Bird Feathers • Flight and Warmth",
        "q": "What two essential functions do feathers perform for a bird?",
        "ans": "<strong>Functions of Feathers:</strong><br>1. <strong>Flight:</strong> Long, strong wing and tail feathers provide lift and balance, enabling birds to fly and steer.<br>2. <strong>Body Warmth & Waterproofing:</strong> Soft down feathers trap a layer of warm air against the body, keeping the bird warm during cold nights and shedding rainwater.",
        "marks": 2,
        "rubric": [
          {
            "key": "Flight mechanism explained",
            "marks": "1.0 M"
          },
          {
            "key": "Thermal insulation/waterproofing explained",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Owl's Unique Feature • Neck Rotation",
        "q": "What special ability does an owl have regarding its eyes and neck?",
        "ans": "<strong>Owl's Anatomy:</strong><br>• An owl cannot move its eyes inside its sockets, so nature has gifted it a flexible neck that can rotate up to <strong>270 degrees</strong> backward to see all around silently in the dark.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fixed eyes and 270-degree neck rotation explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 8 ('Flying High'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Avian Conservation: The Vanishing House Sparrow",
      "text": "Old grandparents recall that when they were children, dozens of chirping house sparrows nested inside ceiling ventilators and ate dropped rice grains in courtyards. Today, house sparrows have largely disappeared from modern glass-fronted concrete cities.",
      "question": "Analyze the environmental causes behind the decline of urban sparrows and recommend two citizen actions to bring them back.",
      "answer": "<strong>Causes of Sparrow Decline:</strong> (1) Modern matchbox-style concrete houses lack open ventilators and eaves, leaving no safe nesting crevices. (2) Heavy chemical gardening pesticides kill small green caterpillars that mother sparrows feed to newly hatched chicks. (3) Excessive concrete paving eliminates open soil patches where birds dust-bathe and forage for grass seeds.<br><br><strong>Citizen Actions:</strong> Install artificial wooden nest boxes under balcony roofs, keep a regular terracotta water and millet feeder, and plant native green shrubs in gardens.",
      "rubric": "Urban architecture impact, pesticide elimination of insect food, practical nesting/feeding mitigation (4 Marks)."
    }
  },
  {
    "id": "la9",
    "num": 9,
    "unit": "Unit 2: Water & Food",
    "title": "It's Raining",
    "subtitle": "Appu the Elephant Waters the Dying Banana Trees: Rain and Plant Revival",
    "concepts": [
      "Plants droop and leaves turn brown when they do not receive water during long dry spells.",
      "Appu the elephant using his trunk to fill river water and shower dying banana trees until they turn green again.",
      "The arrival of rain clouds: Transforming parched brown landscapes into lush green living gardens.",
      "Clouds can appear in different shapes (elephants, horses, fleece) and bring joyful rainbows with 7 colors."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Appu Waters Banana Trees &amp; Rainy Season Joy</text>\n      <!-- Elephant Appu -->\n      <circle cx=\"100\" cy=\"85\" r=\"30\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <path d=\"M125,75 Q150,70 145,100 Q140,115 130,115\" stroke=\"#475569\" stroke-width=\"5\" fill=\"none\"/>\n      <text x=\"100\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Appu the Elephant</text>\n      <!-- Water Spray -->\n      <path d=\"M145,100 Q180,85 210,95\" stroke=\"#38bdf8\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\"/>\n      <!-- Banana Tree Revived -->\n      <path d=\"M230,115 L230,65 Q210,45 190,60 M230,65 Q255,45 270,60\" stroke=\"#16a34a\" stroke-width=\"4\" fill=\"none\"/>\n      <text x=\"230\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Lush Banana Trees</text>\n      <!-- Rainbow & Cloud -->\n      <path d=\"M420,50 Q445,35 470,50 Q495,40 510,60 L410,60 Z\" fill=\"#cbd5e1\"/>\n      <path d=\"M410,90 Q460,50 510,90\" stroke=\"#f43f5e\" stroke-width=\"2\" fill=\"none\"/>\n      <path d=\"M412,93 Q460,53 508,93\" stroke=\"#f59e0b\" stroke-width=\"2\" fill=\"none\"/>\n      <path d=\"M414,96 Q460,56 506,96\" stroke=\"#10b981\" stroke-width=\"2\" fill=\"none\"/>\n      <path d=\"M416,99 Q460,59 504,99\" stroke=\"#3b82f6\" stroke-width=\"2\" fill=\"none\"/>\n      <text x=\"460\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Rainbow &amp; Rain Clouds</text>\n    </svg>",
    "questions": [
      {
        "category": "Story Comprehension",
        "q": "Why were the banana trees drooping and how did Appu help them?",
        "ans": "The banana trees were drooping and withering because it had not rained for a long time and the soil had completely dried up. Appu bathed in the river, drank water to his fill, filled his long trunk with river water, and poured it over the thirsty roots of the banana trees until they perked up, turned lush green, and gave sweet bananas again.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of drought and wilting trees",
            "marks": "1.5 Marks"
          },
          {
            "key": "Appu's actions using his trunk to irrigate trees",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Rainbow Science",
        "q": "When does a rainbow appear in the sky, and what are its seven constituent colors?",
        "ans": "A rainbow appears in the sky opposite the sun right after a rain shower when sunlight passes through microscopic airborne raindrops that act as natural glass prisms.<br><strong>Seven Colors (VIBGYOR):</strong> Violet, Indigo, Blue, Green, Yellow, Orange, and Red.",
        "marks": 3,
        "rubric": [
          {
            "key": "Conditions for rainbow formation (sunlight + rain droplets acting as prisms)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Correct listing of 7 VIBGYOR colors",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Nature Sensitivity",
        "q": "How do street trees get water when nobody waters them with hose pipes?",
        "ans": "Street trees develop deep taproot systems that penetrate deep into the subterranean soil layers to absorb groundwater. During the rainy season, rainfall naturally quenches their thirst and recharges the surrounding soil.",
        "marks": 2,
        "rubric": [
          {
            "key": "Deep taproots absorbing underground water",
            "marks": "1 Mark"
          },
          {
            "key": "Rainwater recharge",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Story Comprehension • Appu Ate Bananas",
        "q": "In 'It's Raining':<br>(a) Why were the banana trees in the jungle drooping?<br>(b) How did Appu the elephant revive the dying banana trees?",
        "ans": "<strong>Story Details:</strong><br><strong>(a) Drooping Trees:</strong><br>• The banana trees were drooping and drying up because it had not rained for a very long time in the forest.<br><br><strong>(b) Appu's Rescue:</strong><br>• Appu loved eating ripe bananas. He went to the river, drank his fill, and filled his long trunk with water. He carried the water back and sprayed it like a shower all over the banana roots until the trees stood upright and fresh again.",
        "marks": 3,
        "rubric": [
          {
            "key": "Drought and lack of rain noted",
            "marks": "1.5 M"
          },
          {
            "key": "Appu carrying water in trunk and showering trees explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "The Water Cycle & Clouds • Atmosphere",
        "q": "How do clouds form in the sky on hot summer days?",
        "ans": "<strong>Cloud Formation (Evaporation & Condensation):</strong><br>• The hot sun heats water in rivers, ponds, and seas, causing water to evaporate into invisible water vapor that rises high into the sky.<br>• High up in the cold air, this water vapor cools down and condenses into billions of microscopic water droplets, which cluster together to form white and grey <strong>clouds</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Evaporation of water into vapor",
            "marks": "1.5 M"
          },
          {
            "key": "Condensation into water droplets forming clouds",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Rainbow Formation • Sunlight & Raindrops",
        "q": "(a) When does a rainbow appear in the sky?<br>(b) Write the seven colors of the rainbow in order (VIBGYOR).",
        "ans": "<strong>Rainbow Science:</strong><br><strong>(a) Occurrence:</strong><br>• A rainbow appears when sunlight shines through falling raindrops directly opposite the sun in the sky.<br><br><strong>(b) 7 Colors (VIBGYOR):</strong><br>• <strong>V</strong>iolet, <strong>I</strong>ndigo, <strong>B</strong>lue, <strong>G</strong>reen, <strong>Y</strong>ellow, <strong>O</strong>range, <strong>R</strong>ed.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sunlight passing through raindrops opposite the sun",
            "marks": "1.5 M"
          },
          {
            "key": "All 7 VIBGYOR colors in correct order",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Rainy Day Delights • Children's Activities",
        "q": "What do children enjoy doing when the first monsoon showers arrive?",
        "ans": "<strong>Monsoon Joys:</strong><br>• Children enjoy dancing and splashing in cool puddles, floating paper boats in running rainwater streams, and smelling the fresh earthy fragrance of wet soil (petrichor).",
        "marks": 2,
        "rubric": [
          {
            "key": "Paper boats, puddle splashing, and soil fragrance described",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 9 ('It's Raining'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Ecosystem Stewardship: Animals as Forest Gardeners",
      "text": "Appu the elephant watered banana trees in the story. In real tropical forests, wild elephants eat ripe fruits and walk dozens of kilometers daily, dropping seeds in large piles of nutritious dung.",
      "question": "How do wild elephants act as 'engineers of the forest' in real ecosystems?",
      "answer": "Wild elephants are true ecosystem engineers and forest gardeners: (1) <strong>Seed Dispersal:</strong> They consume fruits from hundreds of tree species and carry the seeds inside their digestive tracts over long distances, depositing them in fertile dung beds that sprout into new forest trees. (2) <strong>Creating Waterholes:</strong> During severe droughts, elephants use their feet and tusks to dig deep pits in dry riverbeds, exposing subterranean water that saves thousands of smaller birds, deer, and monkeys.",
      "rubric": "Ecological role of elephants, seed dispersal over vast distances, digging waterholes during droughts (4 Marks)."
    }
  },
  {
    "id": "la10",
    "num": 10,
    "unit": "Unit 2: Water & Food",
    "title": "What is Cooking",
    "subtitle": "Culinary Methods: Boiling, Frying, Roasting, Steaming, Baking; Utensil Materials and Fuels",
    "concepts": [
      "Different methods of cooking: Boiling (potatoes/rice), Roasting (rotis/corn), Steaming (idli/dhokla), Frying (puri/samosa), and Baking (cakes/bread).",
      "Cooking utensil materials: Clay earthenware, copper, brass, stainless steel, cast iron, and glass.",
      "Cooking fuels and stoves: LPG gas cylinders, solar cookers, electric induction stoves, and traditional chulhas using firewood or cow-dung cakes.",
      "Safety in the kitchen: Turning off gas knobs, keeping flammable cloth away from flames, avoiding burns."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">What is Cooking — Diverse Cooking Methods &amp; Clean Fuels</text>\n      <!-- Steaming (Idli) -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"80\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">♨️🥟</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Steaming (Idli/Dhokla)</text>\n      <!-- Boiling (Rice/Eggs) -->\n      <circle cx=\"190\" cy=\"80\" r=\"26\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"190\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">🍲💧</text>\n      <text x=\"190\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Boiling (Rice/Potatoes)</text>\n      <!-- Roasting (Roti) -->\n      <circle cx=\"300\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"300\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">🔥🫓</text>\n      <text x=\"300\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Roasting (Roti/Bhutta)</text>\n      <!-- Baking (Bread/Cake) -->\n      <circle cx=\"410\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"410\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">🍞🎂</text>\n      <text x=\"410\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Baking (Bread/Cookies)</text>\n      <!-- Solar Cooker -->\n      <circle cx=\"515\" cy=\"80\" r=\"22\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"1.5\"/><text x=\"515\" y=\"86\" font-size=\"16\" text-anchor=\"middle\">☀️📦</text>\n      <text x=\"515\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">Solar Cooker</text>\n    </svg>",
    "questions": [
      {
        "category": "Cooking Methods",
        "q": "Classify the following foods according to their method of cooking: Idli, Samosa, Roti, Boiled Rice, Cake, Roasted Corn.",
        "ans": "• <strong>Steaming:</strong> Idli.<br>• <strong>Deep Frying:</strong> Samosa.<br>• <strong>Roasting:</strong> Roti, Roasted Corn (Bhutta).<br>• <strong>Boiling:</strong> Boiled Rice.<br>• <strong>Baking:</strong> Cake.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct pairing for all six food items",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Cooking Utensil Materials",
        "q": "Why are clay pots considered healthier for slow cooking than aluminum utensils?",
        "ans": "Clay pots are alkaline and react gently with the natural acids in food, neutralizing acidity while preserving micronutrients. The porous clay allows moisture and heat to circulate evenly. In contrast, cheap aluminum pans can leach small amounts of toxic metal into acidic foods over time.",
        "marks": 3,
        "rubric": [
          {
            "key": "Benefits of porous, alkaline clay cookware",
            "marks": "1.5 Marks"
          },
          {
            "key": "Drawbacks of metal leaching in cheap aluminum",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Clean Cooking Energy",
        "q": "What is a solar cooker and what are two major advantages of using it?",
        "ans": "A <strong>solar cooker</strong> is an insulated black-painted box with a glass lid and mirror reflector that traps solar heat to cook food without firewood or gas.<br><strong>Advantages:</strong><br>1. Zero fuel cost and zero smoke pollution.<br>2. Preserves vitamins and prevents food from burning.",
        "marks": 2,
        "rubric": [
          {
            "key": "Definition of solar cooker",
            "marks": "1 Mark"
          },
          {
            "key": "Two advantages (zero pollution, nutrient retention)",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Cooking Methods • Culinary Science",
        "q": "Match each food dish with its primary cooking method:<br>• Idli: [Boiling, Steaming, Deep Frying, Roasting/Baking]<br>• Puri: [Boiling, Steaming, Deep Frying, Roasting/Baking]<br>• Rice / Dal: [Boiling, Steaming, Deep Frying, Roasting/Baking]<br>• Chapati: [Boiling, Steaming, Deep Frying, Roasting/Baking]",
        "ans": "<strong>Cooking Methods:</strong><br>• <strong>Idli:</strong> Steaming<br>• <strong>Puri:</strong> Deep Frying (in hot oil)<br>• <strong>Rice / Dal:</strong> Boiling (in water)<br>• <strong>Chapati:</strong> Roasting / Baking (on tawa)",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 cooking methods correctly matched",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Cooking Utensils • Material Identification",
        "q": "Look at common cooking vessels. Why are frying pans made of iron, steel, or aluminum, but their handles are covered with wood or plastic?",
        "ans": "<strong>Thermal Conduction Science:</strong><br>• <strong>Vessel Body:</strong> Iron, steel, and aluminum are good conductors of heat, so they quickly transfer cooking heat from the stove flame to the food.<br>• <strong>Handles:</strong> Wood and plastic are insulators (poor conductors of heat). They stay cool, allowing the cook to lift and hold the hot pan safely without burning their hands.",
        "marks": 3,
        "rubric": [
          {
            "key": "Good thermal conductivity of metals for cooking",
            "marks": "1.5 M"
          },
          {
            "key": "Insulating plastic/wood handles protecting hands from burns",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Fuels • Clean Energy",
        "q": "Compare an LPG gas stove with a traditional wood chulha in terms of cleanliness and health.",
        "ans": "<strong>Fuel Comparison:</strong><br>• <strong>LPG Gas Stove:</strong> Burns with a clean, smokeless blue flame, produces no indoor soot, cooks quickly, and protects women's lungs and eyes from disease.<br>• <strong>Wood Chulha:</strong> Produces heavy suffocating smoke, releases harmful carbon soot that turns kitchen walls black, and causes respiratory and eye damage.",
        "marks": 3,
        "rubric": [
          {
            "key": "LPG clean blue flame and health benefits",
            "marks": "1.5 M"
          },
          {
            "key": "Wood smoke pollution and lung damage explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Solar Cooker • Renewable Energy",
        "q": "How does a solar cooker cook food without using any wood, coal, electricity, or gas?",
        "ans": "<strong>Solar Cooker:</strong><br>• A solar cooker has a black-painted insulated box and a mirror reflector that traps the radiant heat of sunlight under a glass sheet (greenhouse effect), slowly baking dal, rice, or vegetables cleanly using free solar energy.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mirror reflector, black box, and trapped solar heat explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 10 ('What is Cooking'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Clean Indoor Air: Transitioning from Wood Chulha to LPG (PM Ujjwala Yojana)",
      "text": "In many rural homes, women cook on unventilated firewood chulhas, inhaling smoke equivalent to smoking dozens of cigarettes daily, causing eye irritation and chronic lung illnesses.",
      "question": "Why is switching to clean cooking gas (LPG) or biogas critical for women's health and environmental protection?",
      "answer": "Switching from smoky wood chulhas to LPG or biogas is vital because: (1) <strong>Health Protection:</strong> It eliminates harmful soot, carbon monoxide, and smoke particles, preventing asthma, lung damage, and eye cataracts in mothers and infants. (2) <strong>Forest Conservation:</strong> It halts the cutting of firewood, preserving neighborhood trees and topsoil. (3) <strong>Time and Labor Savings:</strong> It saves women hours of arduous firewood gathering, allowing more time for childcare, education, and rest.",
      "rubric": "Respiratory health benefits of smokeless fuel, halting deforestation, social empowerment (4 Marks)."
    }
  },
  {
    "id": "la11",
    "num": 11,
    "unit": "Unit 5: Travel, Work & Community",
    "title": "From Here to There",
    "subtitle": "Poem 'The Train' by Harendranath Chattopadhyay: Land, Water, Air Transport, and Animal-Drawn Carts",
    "concepts": [
      "Means of transport on land: Bicycles, scooters, cars, buses, electric metro trains, and railways.",
      "Water and air transport: Boats, ferries, ships, airplanes, and helicopters.",
      "Traditional and rural transports: Camel carts in deserts, bullock carts in villages, tongas, and shikaras in lakes.",
      "Emergency service vehicles: Ambulances, fire engines, and police patrol cars with sirens."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">From Here to There — The Story of Transport</text>\n      <!-- Train -->\n      <rect x=\"60\" y=\"65\" width=\"100\" height=\"40\" fill=\"#2563eb\" rx=\"6\"/>\n      <circle cx=\"80\" cy=\"110\" r=\"8\" fill=\"#1e293b\"/><circle cx=\"110\" cy=\"110\" r=\"8\" fill=\"#1e293b\"/><circle cx=\"140\" cy=\"110\" r=\"8\" fill=\"#1e293b\"/>\n      <text x=\"110\" y=\"90\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"800\" text-anchor=\"middle\">Train 🚂</text>\n      <!-- Bicycle (Green Transport) -->\n      <circle cx=\"240\" cy=\"85\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"240\" y=\"92\" font-size=\"20\" text-anchor=\"middle\">🚲</text>\n      <text x=\"240\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Bicycle (Eco-Friendly)</text>\n      <!-- Boat / Water -->\n      <circle cx=\"360\" cy=\"85\" r=\"26\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"360\" y=\"92\" font-size=\"20\" text-anchor=\"middle\">⛵</text>\n      <text x=\"360\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Boat / Ship (Water)</text>\n      <!-- Aeroplane / Air -->\n      <circle cx=\"480\" cy=\"85\" r=\"26\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"480\" y=\"92\" font-size=\"20\" text-anchor=\"middle\">✈️</text>\n      <text x=\"480\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Aeroplane (Air)</text>\n    </svg>",
    "questions": [
      {
        "category": "Modes of Transport",
        "q": "Classify vehicles based on the medium they travel through: (a) Land (b) Water (c) Air. Give two examples of each.",
        "ans": "• <strong>Land Transport:</strong> Bus, Metro Train, Bicycle, Car.<br>• <strong>Water Transport:</strong> Cargo Ship, Ferry, Speedboat, Shikara.<br>• <strong>Air Transport:</strong> Aeroplane, Helicopter, Hot Air Balloon.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct classification and examples for land, water, and air",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Emergency Vehicles",
        "q": "Name two emergency vehicles and explain why other traffic must always give way to them.",
        "ans": "1. <strong>Ambulance:</strong> Carries critically sick or injured patients to hospital emergency wards.<br>2. <strong>Fire Engine:</strong> Carries firefighters and high-pressure water pumps to put out blazing building fires.<br>Traffic must give way because every single second lost in a traffic jam can mean the loss of human lives or severe property destruction.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of Ambulance and Fire Engine",
            "marks": "1.5 Marks"
          },
          {
            "key": "Critical life-saving reason to yield traffic priority",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Eco-Friendly Commuting",
        "q": "Why is riding a bicycle or using public electric metro trains better for city life than driving personal petrol cars?",
        "ans": "Bicycles and electric metros do not burn petrol or diesel, so they produce zero toxic exhaust smoke, lower greenhouse gases, eliminate noisy traffic honking, and keep people physically fit.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reduction of air pollution and traffic congestion",
            "marks": "1 Mark"
          },
          {
            "key": "Health and physical fitness benefit",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Transport Modes • Land, Water, and Air",
        "q": "Classify the following 6 vehicles into Land, Water, and Air Transport:<br>Helicopter, Bullock cart, Speedboat, Metro train, Cargo ship, Aeroplane.",
        "ans": "<strong>Transport Classification:</strong><br>• <strong>Land Transport:</strong> Bullock cart, Metro train.<br>• <strong>Water Transport:</strong> Speedboat, Cargo ship.<br>• <strong>Air Transport:</strong> Helicopter, Aeroplane.",
        "marks": 3,
        "rubric": [
          {
            "key": "Two correct land vehicles",
            "marks": "1.0 M"
          },
          {
            "key": "Two correct water vehicles",
            "marks": "1.0 M"
          },
          {
            "key": "Two correct air vehicles",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Vehicle Wheels • Number of Wheels",
        "q": "Group these vehicles by the number of wheels they have:<br>Bicycle, Auto-rickshaw, Car, Bullock cart, Motorcycle, Bus.<br>• 2 Wheels<br>• 3 Wheels<br>• 4 Wheels<br>• 6 Wheels",
        "ans": "<strong>Wheels Classification:</strong><br>• <strong>2 Wheels:</strong> Bicycle, Motorcycle, Bullock cart.<br>• <strong>3 Wheels:</strong> Auto-rickshaw (or Cycle-rickshaw).<br>• <strong>4 Wheels:</strong> Car.<br>• <strong>6 Wheels:</strong> Bus (or heavy truck).",
        "marks": 4,
        "rubric": [
          {
            "key": "All vehicles correctly grouped by wheel counts",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Emergency Vehicles • Helplines",
        "q": "Match each emergency vehicle with its service and telephone helpline number:<br>• Police PCR Van: [Number 100 / 112 - Crime and safety, Number 101 - Firefighting, Number 102 / 108 - Medical emergencies]<br>• Fire Engine: [Number 100 / 112 - Crime and safety, Number 101 - Firefighting, Number 102 / 108 - Medical emergencies]<br>• Ambulance: [Number 100 / 112 - Crime and safety, Number 101 - Firefighting, Number 102 / 108 - Medical emergencies]",
        "ans": "<strong>Emergency Services:</strong><br>• <strong>Police PCR Van:</strong> Dial <strong>100 / 112</strong> for crime report and immediate citizen protection.<br>• <strong>Fire Engine:</strong> Dial <strong>101</strong> to extinguish fires and rescue trapped people.<br>• <strong>Ambulance:</strong> Dial <strong>102 / 108</strong> to rush critically ill or injured patients to the hospital.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct helpline numbers and roles for all 3 emergency vehicles",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Matchbox Train Craft Activity",
        "q": "How can children make a toy train using empty matchboxes?",
        "ans": "<strong>Matchbox Train Craft:</strong><br>1. Connect 4 to 5 empty matchbox drawers in a line using strips of paper or thread as couplings.<br>2. Glue circular bottle caps or cardboard circles on both sides of each matchbox to serve as wheels.<br>3. Paste a thread spool or upright cardboard cylinder on the front box to act as the engine chimney.",
        "marks": 2,
        "rubric": [
          {
            "key": "Connecting matchbox carriages with bottle-cap wheels described",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 11 ('From Here to There'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Geographical Adaptations in Transportation: Reaching School in Remote Terrains",
      "text": "Children in snowy Ladakh travel to school on sledges; children in mountainous Uttarakhand walk across precarious rocky trails; children in riverine Assam cross flooded rivers on bamboo bridges (sanko).",
      "question": "How do humans adapt their means of transport to diverse physical geographies and extreme climates?",
      "answer": "Human ingenuity devises transport solutions suited to specific terrains: (1) <strong>Desert Sands:</strong> Wide, padded hooves of camels make camel carts ideal for shifting sand dunes. (2) <strong>River Networks (Kerala/Assam):</strong> Wooden boats (vallam) and lightweight bamboo suspension bridges allow communities to cross wetlands without costly concrete bridges. (3) <strong>Snowy Mountains:</strong> Sturdy yaks, snowmobiles, and ropeway cable cars traverse sheer icy ravines where wheeled road buses cannot operate safely.",
      "rubric": "Geographical adaptation of transport, local natural resources, resilience in extreme terrains (4 Marks)."
    }
  },
  {
    "id": "la12",
    "num": 12,
    "unit": "Unit 5: Travel, Work & Community",
    "title": "Work We Do",
    "subtitle": "Community Helpers and Occupations: Doctors, Sweepers, Postmen, Traffic Police, and Child Rights",
    "concepts": [
      "Community helpers and essential public occupations: Doctors, nurses, teachers, sweepers, postmen, shopkeepers, and traffic police.",
      "Interdependence: No community can function without the collective contributions of all workers.",
      "The importance of education: Every child has the fundamental right to go to school instead of being forced into child labor (tea stalls/brick kilns).",
      "Treating community sanitary workers with respect and dignity."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Work We Do — Community Helpers &amp; Dignity of Labor</text>\n      <!-- Doctor / Nurse -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"80\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">👩‍⚕️🩺</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Doctor (Healthcare)</text>\n      <!-- Teacher -->\n      <circle cx=\"190\" cy=\"80\" r=\"26\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"190\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">👨‍🏫📚</text>\n      <text x=\"190\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#3730a3\" text-anchor=\"middle\">Teacher (Education)</text>\n      <!-- Sanitation Worker -->\n      <circle cx=\"300\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"300\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🧹🦺</text>\n      <text x=\"300\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Sanitation Worker</text>\n      <!-- Traffic Police -->\n      <circle cx=\"410\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"410\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">👮‍♂️🚦</text>\n      <text x=\"410\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Traffic Police (Order)</text>\n      <!-- Child at School -->\n      <circle cx=\"510\" cy=\"80\" r=\"22\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"1.5\"/><text x=\"510\" y=\"86\" font-size=\"16\" text-anchor=\"middle\">👧🎒</text>\n      <text x=\"510\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">Right to Education</text>\n    </svg>",
    "questions": [
      {
        "category": "Community Roles",
        "q": "Describe the crucial role played by sanitation workers (safai karamcharis) in keeping towns healthy.",
        "ans": "Sanitation workers wake up before dawn to sweep dusty public streets, clear choked municipal drains, and collect household garbage. If they stopped working for even two days, streets would overflow with rotting waste, flies and mosquitoes would multiply uncontrollably, and dangerous disease epidemics like dengue, malaria, and cholera would spread.",
        "marks": 3,
        "rubric": [
          {
            "key": "Specific duties (sweeping, drain cleaning, garbage clearing)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Public health consequence if work stops (epidemics/rot)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Child Rights and Child Labor",
        "q": "Why is child labor illegal, and what should be done if you see a young child washing dishes at a tea stall instead of being in school?",
        "ans": "Child labor is illegal because every child has the fundamental constitutional right to free education, recreation, and healthy physical development. Working in dangerous, exhausting conditions ruins children's futures. We should inform school authorities, local child welfare committees, or call the <strong>Childline Helpline (1098)</strong> so the child can be rescued and enrolled in a school.",
        "marks": 3,
        "rubric": [
          {
            "key": "Fundamental right to education and hazards of child labor",
            "marks": "1.5 Marks"
          },
          {
            "key": "Actionable reporting via Childline 1098 or authorities",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Dignity of Labor",
        "q": "What does the phrase 'Dignity of Labor' mean in our daily society?",
        "ans": "It means that every honest type of work—whether done by a surgeon, an engineer, a farmer, or a street sweeper—is equally respectable and worthy of honor. No honest work is low or inferior.",
        "marks": 2,
        "rubric": [
          {
            "key": "Equal respect for all honest occupations without discrimination",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Daily Labor • Deepali's Routine",
        "q": "In 'Work We Do', Deepali cannot go to school. Why? Describe her daily chores.",
        "ans": "<strong>Deepali's Routine & Responsibilities:</strong><br>• Deepali is the eldest sister. Her father sells vegetables and her mother washes utensils in homes. Deepali has to stay home to cook food for the family, clean the house, and look after her three younger brothers and sisters.<br>• Even though she loves learning and books, her heavy family responsibilities forced her to leave school.",
        "marks": 3,
        "rubric": [
          {
            "key": "Eldest child carrying sibling care and chores",
            "marks": "1.5 M"
          },
          {
            "key": "Parental poverty causing drop out of school",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Bustling Neighborhood Scene • Community Workers",
        "q": "Look at the picture of the bustling city square in the chapter. Name four community workers working there and their occupations.",
        "ans": "<strong>Neighborhood Workers:</strong><br>1. <strong>Postwoman / Postman:</strong> Sorting and delivering mail.<br>2. <strong>Traffic Police Officer:</strong> Directing vehicles and pedestrians at the intersection.<br>3. <strong>Doctor and Nurse:</strong> Treating patients at the neighborhood dispensary.<br>4. <strong>Cobbler (Mochi):</strong> Sitting under a roadside tree polishing and stitching worn shoes.",
        "marks": 4,
        "rubric": [
          {
            "key": "Four distinct community workers with accurate roles",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Right to Education • Child Labor vs School",
        "q": "Why should every child below 14 years be in school rather than working for money?",
        "ans": "<strong>Child Rights & Education:</strong><br>• Childhood is the time for growth, play, and learning. Under the Indian Constitution (Right to Education Act), every child has the fundamental right to free, quality education. Child labor deprives children of their future and harms their physical and mental health.",
        "marks": 3,
        "rubric": [
          {
            "key": "Right to Education Act cited",
            "marks": "1.5 M"
          },
          {
            "key": "Physical, emotional, and future empowerment rationale",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Clock Routine • Daily Time Management",
        "q": "At what time do you usually wake up, leave for school, and go to sleep?",
        "ans": "<strong>Personal Time Schedule:</strong><br>• Wake up: <strong>6:15 AM</strong><br>• Leave for school: <strong>7:30 AM</strong><br>• Go to sleep: <strong>9:30 PM</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Realistic, healthy daily timetable values",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 12 ('Work We Do'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Community Interdependence: When Public Services Halt",
      "text": "During a torrential rainstorm, municipal sanitation workers, electricity linemen, and water pipeline mechanics work knee-deep in water all night to restore power and unblock sewage drains.",
      "question": "How does this event illustrate that our daily comforts depend entirely on unseen, hardworking community helpers?",
      "answer": "Modern life is an interconnected web where no individual is self-sufficient. While we rest safely indoors, linemen risk electrical shocks to restore power and municipal workers brave filthy drains to prevent urban flooding. Recognizing this interdependence shatters social prejudices and reminds us to treat every community worker with profound gratitude, courtesy, and fair living wages.",
      "rubric": "Appreciation of community interdependence, frontline workers' sacrifice, moral dignity of labor (4 Marks)."
    }
  },
  {
    "id": "la13",
    "num": 13,
    "unit": "Unit 4: Communication & Expression",
    "title": "Sharing Our Feelings",
    "subtitle": "Seema's Family and Blind Ravi Bhaiya: Empathy, Braille Script, and Care for Elders",
    "concepts": [
      "Understanding the sensory world of visually impaired individuals: Highly developed senses of touch and hearing.",
      "The White Cane: A symbol of independence and tool for detecting obstacles on walking paths.",
      "The Braille Script: Invented by Louis Braille, read by gliding fingertips over raised dots arranged in a 6-dot cell.",
      "Caring for aging family members with failing vision or joint pain through love, patience, and respect."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Sharing Our Feelings — Braille Script &amp; The White Cane</text>\n      <!-- White Cane -->\n      <circle cx=\"100\" cy=\"80\" r=\"26\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <line x1=\"90\" y1=\"65\" x2=\"110\" y2=\"105\" stroke=\"#dc2626\" stroke-width=\"3\"/>\n      <text x=\"100\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">The White Cane</text>\n      <!-- Braille Cell (6 Dots) -->\n      <rect x=\"230\" y=\"55\" width=\"80\" height=\"55\" fill=\"#ffffff\" stroke=\"#0284c7\" stroke-width=\"2\" rx=\"6\"/>\n      <circle cx=\"255\" cy=\"70\" r=\"4\" fill=\"#0284c7\"/><circle cx=\"285\" cy=\"70\" r=\"4\" fill=\"#e2e8f0\"/>\n      <circle cx=\"255\" cy=\"83\" r=\"4\" fill=\"#0284c7\"/><circle cx=\"285\" cy=\"83\" r=\"4\" fill=\"#0284c7\"/>\n      <circle cx=\"255\" cy=\"96\" r=\"4\" fill=\"#e2e8f0\"/><circle cx=\"285\" cy=\"96\" r=\"4\" fill=\"#e2e8f0\"/>\n      <text x=\"270\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Braille (6 Raised Dots)</text>\n      <!-- Auditory / Talking Books -->\n      <circle cx=\"430\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"430\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🎧📻📖</text>\n      <text x=\"430\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Audio &amp; Talking Books</text>\n    </svg>",
    "questions": [
      {
        "category": "Braille Script History",
        "q": "Who was Louis Braille, and how does the Braille script help blind people read and write?",
        "ans": "<strong>Louis Braille:</strong> A blind French scholar who lost his eyesight in a childhood accident and devised a revolutionary reading system for visually impaired people in 1824.<br><strong>How Braille Works:</strong> Braille is embossed on thick paper using rows of raised dots based on a <strong>6-dot cell system</strong>. By lightly running their sensitive fingertips across the patterns of raised dots, blind people read letters, numbers, and books just as quickly as sighted readers.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of Louis Braille",
            "marks": "1 Mark"
          },
          {
            "key": "Explanation of the 6 raised dot cell touch system",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Independence and Mobility",
        "q": "How does Ravi Bhaiya recognize different people without seeing them?",
        "ans": "Ravi Bhaiya relies on his keenly trained hearing and touch. He identifies people by the distinct sound of their footsteps, their breathing patterns, the timbre of their voices, and even their body perfumes. By touching a person's hand or shoulders, he immediately senses whether they are happy, anxious, or tired.",
        "marks": 3,
        "rubric": [
          {
            "key": "Auditory cues (footsteps, voice tone, breathing)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Tactile sensitivity and emotional empathy",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Pedestrian Etiquette",
        "q": "What should you do when you see a person with a white cane waiting to cross a busy road?",
        "ans": "We should gently approach them, introduce ourselves politely, ask if they would like assistance, and if they agree, offer our elbow for them to hold while guiding them safely across the zebra crossing without yanking their cane.",
        "marks": 2,
        "rubric": [
          {
            "key": "Polite consent before helping",
            "marks": "1 Mark"
          },
          {
            "key": "Guiding via elbow rather than grabbing the cane",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Special Needs • Ravi Bhaiya's Independence",
        "q": "In 'Sharing Our Feelings':<br>(a) What does Ravi Bhaiya carry when going out, and what is his profession?<br>(b) How does Ravi Bhaiya recognize who has entered the room without seeing?",
        "ans": "<strong>Ravi Bhaiya's Capabilities:</strong><br><strong>(a) Career & Equipment:</strong><br>• Ravi Bhaiya carries a <strong>white cane</strong> for tapping obstacles and safe navigation. He is a respected <strong>college lecturer</strong> who teaches college students.<br><br><strong>(b) Auditory Recognition:</strong><br>• He has developed acute hearing. He recognizes people immediately by the sound of their footsteps, breathing pattern, and the tone of their greeting.",
        "marks": 3,
        "rubric": [
          {
            "key": "White cane and college lecturer career",
            "marks": "1.5 M"
          },
          {
            "key": "Recognition by footsteps and auditory acuity",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Braille Script • Louis Braille",
        "q": "What is Braille Script? How is it read, and who invented it?",
        "ans": "<strong>Braille Script Facts:</strong><br>• <strong>Definition:</strong> Braille is a tactile writing system where characters are represented by combinations of <strong>raised dots on thick paper</strong>.<br>• <strong>How it is read:</strong> Visually impaired people gently glide their fingertips across the raised dots to read letters and words.<br>• <strong>Inventor:</strong> Invented by <strong>Louis Braille</strong> of France, who lost his eyesight as a child.",
        "marks": 3,
        "rubric": [
          {
            "key": "Raised dots system on thick paper",
            "marks": "1.0 M"
          },
          {
            "key": "Reading through finger touch",
            "marks": "1.0 M"
          },
          {
            "key": "Louis Braille named as inventor",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "The 6-Dot Braille Matrix",
        "q": "How many dots make up a standard Braille cell? How are computers and audiobooks helping visually impaired people today?",
        "ans": "<strong>Modern Technology for Inclusion:</strong><br>• Standard Braille characters are formed using a cell of <strong>6 raised dots</strong> arranged in two parallel vertical columns of three dots each.<br>• Today, screen-reading software (talkback), audiobooks, voice assistants, and refreshable Braille keyboards allow visually impaired individuals to operate computers, surf the internet, and study independently.",
        "marks": 3,
        "rubric": [
          {
            "key": "6-dot matrix described",
            "marks": "1.5 M"
          },
          {
            "key": "Screen readers and audiobooks technology explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Blindfold Game • Empathy in Action",
        "q": "When playing blindfold games in school, what challenges do you face, and what does this teach us?",
        "ans": "<strong>Empathy Experience:</strong><br>• Without sight, walking feels scary and confusing; we fear bumping into walls or tripping over furniture. This teaches us deep empathy and respect for visually impaired people who navigate the world with courage.",
        "marks": 2,
        "rubric": [
          {
            "key": "Insightful reflection on vulnerability and empathy",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 13 ('Sharing Our Feelings'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Universal Design for Accessibility (Divyangjan Inclusivity)",
      "text": "A new public library is being designed. The architect plans a tall staircase at the entrance, printed books only, and narrow swing doors.",
      "question": "Recommend three modifications based on 'Universal Accessibility' to make the library welcoming to visually and physically challenged visitors.",
      "answer": "The library should incorporate universal accessibility features: (1) <strong>Braille and Tactile Paving:</strong> Lay textured yellow guiding tiles on floors so cane users can navigate independently, and add Braille nameplates and elevator buttons. (2) <strong>Audiobooks and Screen-Reader Computers:</strong> Provide digital talking books, audio workstations, and Braille display keyboards. (3) <strong>Ramps and Wide Automatic Doors:</strong> Replace steep entry stairs with non-slip ramps with dual handrails and install wide sliding doors for smooth wheelchair and cane access.",
      "rubric": "Tactile paving, Braille labeling, assistive digital technology (audiobooks/screen readers), universal access ramps (4 Marks)."
    }
  },
  {
    "id": "la14",
    "num": 14,
    "unit": "Unit 2: Water & Food",
    "title": "The Story of Food",
    "subtitle": "Plant and Animal Sources of Food; Gender Equality in Household Chores; Natural Home Remedies",
    "concepts": [
      "Gender roles in families: Examining shared household work (cooking, cleaning) vs unequal burdens.",
      "Plant parts as food: Roots (radish, carrot), stems (potato, ginger), leaves (spinach, cabbage), flowers (cauliflower, banana flower), and seeds (peas, wheat).",
      "Animal food sources: Milk from cows/goats, honey from honeybees, eggs from hens.",
      "Traditional medicinal home remedies: Turmeric milk for body pain/injuries, clove for toothache, ajwain for stomach ache."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">The Story of Food — Edible Plant Parts &amp; Herbal Home Remedies</text>\n      <!-- Roots (Carrot) -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"80\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🥕</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Roots: Carrot/Radish</text>\n      <!-- Leaves (Spinach) -->\n      <circle cx=\"190\" cy=\"80\" r=\"26\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"190\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🥬</text>\n      <text x=\"190\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Leaves: Spinach/Mint</text>\n      <!-- Flowers (Cauliflower) -->\n      <circle cx=\"300\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"300\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🥦🌸</text>\n      <text x=\"300\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Flowers: Cauliflower</text>\n      <!-- Seeds (Lentils/Wheat) -->\n      <circle cx=\"410\" cy=\"80\" r=\"26\" fill=\"#ffedd5\" stroke=\"#c2410c\" stroke-width=\"2\"/><text x=\"410\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🌾🫘</text>\n      <text x=\"410\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#7c2d12\" text-anchor=\"middle\">Seeds: Wheat/Pulses</text>\n      <!-- Herbal Remedy (Turmeric) -->\n      <circle cx=\"510\" cy=\"80\" r=\"22\" fill=\"#fef9c3\" stroke=\"#eab308\" stroke-width=\"1.5\"/><text x=\"510\" y=\"86\" font-size=\"16\" text-anchor=\"middle\">🥛💛</text>\n      <text x=\"510\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#a16207\" text-anchor=\"middle\">Turmeric (Haldi Milk)</text>\n    </svg>",
    "questions": [
      {
        "category": "Botanical Plant Parts We Eat",
        "q": "Identify which part of the plant we eat for each of the following: Carrot, Potato, Spinach, Clove, Wheat, Cauliflower.",
        "ans": "• <strong>Carrot:</strong> Root<br>• <strong>Potato:</strong> Underground Stem (Tuber)<br>• <strong>Spinach:</strong> Leaf<br>• <strong>Clove (Laung):</strong> Dried Flower Bud<br>• <strong>Wheat:</strong> Seed<br>• <strong>Cauliflower:</strong> Flower / Inflorescence",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct botanical identification for all six foods",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Herbal Home Remedies",
        "q": "What natural kitchen remedy is traditionally used when: (a) You have a toothache (b) You get a bruise or body ache (c) You have a stomach ache with gas?",
        "ans": "• (a) <strong>Toothache:</strong> Pressing a whole <strong>clove (laung)</strong> or applying clove oil on the aching tooth.<br>• (b) <strong>Bruise / Body Ache:</strong> Drinking warm <strong>turmeric milk (haldi doodh)</strong> and applying a paste of turmeric and lime.<br>• (c) <strong>Stomach Ache with Gas:</strong> Chewing <strong>carom seeds (ajwain)</strong> with a pinch of black salt and warm water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clove for toothache",
            "marks": "1 Mark"
          },
          {
            "key": "Turmeric for wounds/aches",
            "marks": "1 Mark"
          },
          {
            "key": "Ajwain with warm water for gastric ache",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Gender Equality at Home",
        "q": "Contrast Venu's family and Rani's family in the chapter regarding sharing household chores.",
        "ans": "In <strong>Venu's family</strong>, both parents share the housework (mother and father cook and clean together) and all family members eat together at the dining table. In contrast, in <strong>Rani's family</strong>, all domestic work falls entirely on the mother and daughter while the father and brother only sit and eat first, showing gender inequality.",
        "marks": 2,
        "rubric": [
          {
            "key": "Contrast of shared responsibilities vs gender stereotyping",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Family Roles & Equality • The Story of Food",
        "q": "Compare Venu's family with Rani's family from the chapter pictures:<br>(a) In Venu's family, who cleans the house, cooks food, and eats meals?<br>(b) In Rani's family, who does all the work, and who eats first?<br>(c) Which family model promotes gender equality?",
        "ans": "<strong>Family Gender Dynamics:</strong><br><strong>(a) Venu's Family:</strong><br>• Mother and father share household work equally: father sweeps the floor while mother cooks, and all family members sit and eat food together happily.<br><br><strong>(b) Rani's Family:</strong><br>• Mother does all the cooking alone, Rani serves food to her father and brother while they eat first, and the women eat last.<br><br><strong>(c) Gender Equality:</strong><br>• <strong>Venu's family</strong> promotes true gender equality, mutual respect, and healthy collaboration.",
        "marks": 3,
        "rubric": [
          {
            "key": "Shared work in Venu's family",
            "marks": "1.0 M"
          },
          {
            "key": "Unequal burden in Rani's family",
            "marks": "1.0 M"
          },
          {
            "key": "Venu's family chosen as egalitarian model",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Plant Parts We Eat • Botanical Categories",
        "q": "Classify the following edible plant parts into Roots, Stems, Leaves, Flowers, and Fruits:<br>Spinach, Carrot, Potato, Cauliflower, Mango, Ginger, Kachnar flowers, Radish.",
        "ans": "<strong>Edible Plant Parts:</strong><br>• <strong>Roots:</strong> Carrot, Radish.<br>• <strong>Underground Stems:</strong> Potato, Ginger.<br>• <strong>Leaves:</strong> Spinach.<br>• <strong>Flowers:</strong> Cauliflower, Kachnar flowers.<br>• <strong>Fruits:</strong> Mango.",
        "marks": 4,
        "rubric": [
          {
            "key": "All edible plant parts correctly classified into 5 categories",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Kitchen Medicinal Remedies • Natural Cures",
        "q": "What home remedy from kitchen plants do elders give when:<br>(a) You have a toothache?<br>(b) You have a cough and sore throat?<br>(c) You have a stomach ache / gas?",
        "ans": "<strong>Home Remedies:</strong><br>• (a) <strong>Toothache:</strong> Pressing a piece of <strong>clove (laung)</strong> or clove oil against the aching tooth.<br>• (b) <strong>Cough & Throat:</strong> Warm water with <strong>ginger juice, honey, and tulsi</strong>, or warm turmeric milk.<br>• (c) <strong>Stomach ache / Gas:</strong> Chewing <strong>ajwain (carom seeds)</strong> with warm water and a pinch of black salt.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clove for toothache",
            "marks": "1.0 M"
          },
          {
            "key": "Ginger/honey/tulsi for cough",
            "marks": "1.0 M"
          },
          {
            "key": "Ajwain for stomach ache",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Food Preservation • Sunlight Drying",
        "q": "Name two food items that are dried in the hot sun to preserve them for the entire year.",
        "ans": "<strong>Sun-Dried Foods:</strong><br>1. <strong>Papad and potato chips / vadiyan</strong>.<br>2. <strong>Red chilies and raw mango slices (amchur)</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two authentic sun-dried foods named",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 14 ('The Story of Food'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Promoting Gender Equality: Challenging Domestic Stereotypes",
      "text": "In a class discussion, a boy says, 'Cooking, washing dishes, and sweeping are women's duties; men are only meant to earn money outside.'",
      "question": "How does 'The Story of Food' challenge this stereotype, and why must all children learn life skills equally?",
      "answer": "The chapter illustrates that domestic work is not gender-bound; basic living tasks like cooking, cleaning, and laundry are essential <strong>survival life skills</strong> that every human being—boy or girl—must master to live independently. When chores are shared equally among all family members, mothers do not suffer burnout, homes run happily, and children grow up respecting equal partnership and mutual dignity.",
      "rubric": "Deconstructing gender stereotypes, home management as essential survival life skills, promoting mutual equality (4 Marks)."
    }
  },
  {
    "id": "la15",
    "num": 15,
    "unit": "Unit 6: Craft, Shelter & Environment",
    "title": "Making Pots",
    "subtitle": "The Crow (Phudgudi) and Sparrow (Bhanate) Folk Story: Clay, Kiln, Tools, and Prehistoric Pottery",
    "concepts": [
      "The charming folk story of Bhanate the sparrow and Phudgudi the crow seeking water to wash its beak.",
      "The chain of helpers in pottery: River → Clay pit → Potter → Blacksmith (for trowel) → Kiln.",
      "The invention of early pottery: Early humans discovered that cooking clay over open flames made waterproof vessels to store food and water.",
      "Making miniature pinch pots, coil pots, and clay cups using moist soil."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Making Pots — The Chain of Helpers: Clay Pit to Kiln</text>\n      <!-- Clay Pit -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2\"/><text x=\"80\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">⛏️🪨</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">1. Clay Pit (Clay)</text>\n      <path d=\"M115,80 L165,80\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <!-- Potter's Wheel -->\n      <circle cx=\"200\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"200\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🏺</text>\n      <text x=\"200\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">2. Potter's Wheel</text>\n      <path d=\"M235,80 L285,80\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <!-- Blacksmith / Trowel -->\n      <circle cx=\"320\" cy=\"80\" r=\"26\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"320\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🔨🪓</text>\n      <text x=\"320\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">3. Blacksmith (Khurpi)</text>\n      <path d=\"M355,80 L405,80\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <!-- Kiln (Bhatti) -->\n      <circle cx=\"450\" cy=\"80\" r=\"26\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/><text x=\"450\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🔥🏺</text>\n      <text x=\"450\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">4. Kiln (Baking Pots)</text>\n    </svg>",
    "questions": [
      {
        "category": "Story Progression",
        "q": "Narrate the chain of things the crow (Phudgudi) had to visit in order to get a pot made.",
        "ans": "1. The crow went to the <strong>river</strong> for water to wash its beak.<br>2. The river asked for a <strong>pot</strong>.<br>3. The crow went to the <strong>potter</strong>, who asked for <strong>clay</strong>.<br>4. The crow went to the <strong>clay pit</strong>, which asked for a <strong>trowel (khurpi)</strong> to dig the soil.<br>5. The crow went to the <strong>blacksmith</strong>, who forged the trowel.",
        "marks": 3,
        "rubric": [
          {
            "key": "Complete sequential chain (river, potter, clay pit, blacksmith)",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Pottery Science",
        "q": "Why do raw clay pots need to be baked in a hot kiln (bhatti) before they can hold water?",
        "ans": "Raw sun-dried clay contains loose water molecules that dissolve immediately back into mud when filled with liquids. Firing pots in a kiln at high temperatures chemically fuses the silica and clay particles into a vitrified, hard ceramic that retains its shape and holds liquids without dissolving.",
        "marks": 3,
        "rubric": [
          {
            "key": "Why raw clay melts in water",
            "marks": "1.5 Marks"
          },
          {
            "key": "High-temperature baking creates durable, hardened ceramic",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Human History",
        "q": "How did early prehistoric humans store grains and water before the potter's wheel was invented?",
        "ans": "Early humans wove dried grass baskets and smeared them with sticky river clay, and shaped hollow bowls out of clay lumps with their hands (pinch pots) before sun-drying them.",
        "marks": 2,
        "rubric": [
          {
            "key": "Grass baskets lined with clay and pinch pots",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Story Sequence • Phgudi and Bhanate",
        "q": "In the story of Bhanate the crow and Phgudi the sparrow:<br>List the helpers Bhanate visited in sequence to wash his beak before eating Phgudi's eggs:<br>River $\\rightarrow$ Potter $\\rightarrow$ Clay-pit $\\rightarrow$ Blacksmith.",
        "ans": "<strong>Story Journey:</strong><br>1. <strong>River:</strong> Told the crow to bring a pot to fetch clean water.<br>2. <strong>Potter:</strong> Told the crow to bring clay to make a pot.<br>3. <strong>Clay-pit:</strong> Told the crow to bring a trowel (khurpi) to dig clay.<br>4. <strong>Blacksmith:</strong> Gave the crow a sharp trowel.<br>• In the meantime, Phgudi's eggs hatched, the little chicks flew away, and the greedy crow went hungry.",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 helpers in exact sequence (River, Potter, Clay-pit, Blacksmith)",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Pottery Science • Sun Drying vs Kiln Baking",
        "q": "(a) What happens if you pour water into an earthen pot dried only in the sun?<br>(b) Why do potters bake clay pots in a red-hot kiln (bhatti)?",
        "ans": "<strong>Pottery Chemistry:</strong><br><strong>(a) Sun-Dried Pot:</strong><br>• If water is poured into a raw, sun-dried clay pot, the clay absorbs moisture, turns back into soft mud, and collapses.<br><br><strong>(b) Kiln Baking:</strong><br>• High baking heat in a kiln melts silica in clay, turning it into permanent ceramic stone that is waterproof, sturdy, and durable.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sun-dried pot dissolving in water explained",
            "marks": "1.5 M"
          },
          {
            "key": "Kiln heat permanently transforming clay into sturdy ceramic",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "History of Utensils • Early Humans",
        "q": "Before inventing pottery, in what natural containers did early humans store food and water?",
        "ans": "<strong>Prehistoric Containers:</strong><br>• Early humans used <strong>dried hollow gourds (tumba)</strong>, animal skins, carved stone bowls, and woven reed baskets lined with clay.",
        "marks": 2,
        "rubric": [
          {
            "key": "Gourds, animal skins, and carved stone containers named",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Potter's Wheel • Rotational Physics",
        "q": "What is a Potter's Wheel, and how does the potter spin it?",
        "ans": "<strong>Potter's Wheel:</strong><br>• It is a heavy circular stone or wooden turntable. The potter spins it rapidly using a wooden stick, and while it spins steadily on its pivot, he shapes wet clay balls with his thumbs and palms into symmetrical round vessels.",
        "marks": 2,
        "rubric": [
          {
            "key": "Turntable mechanism and shaping using hands described",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 15 ('Making Pots'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Eco-Friendly Material Culture: Terracotta Cookware Revival",
      "text": "With modern awareness about microplastics and toxic non-stick chemical coatings, many urban households are switching back to traditional unglazed clay handis and terracotta water bottles.",
      "question": "What are the ecological and health advantages of replacing plastic water bottles with natural clay bottles?",
      "answer": "Clay bottles offer distinct advantages: (1) <strong>Natural Evaporative Cooling:</strong> Tiny microscopic pores in the clay allow microscopic water seepage that evaporates continuously, cooling the water naturally by 4-5 degrees Celsius without electricity or refrigerators. (2) <strong>Zero Chemical Leaching:</strong> Unlike plastic bottles that release toxic bisphenol-A (BPA) and microplastics under hot sunlight, natural clay is 100% non-toxic. (3) <strong>Soil-Friendly Disposal:</strong> When discarded, terracotta breaks down harmlessly back into fertile natural soil.",
      "rubric": "Evaporative cooling, zero microplastic toxicity, natural soil biodegradability (4 Marks)."
    }
  },
  {
    "id": "la16",
    "num": 16,
    "unit": "Unit 5: Travel, Work & Community",
    "title": "Games We Play",
    "subtitle": "Traditional Street Games (Hopscotch/Stappoo, Gilli-Danda, Kabbadi), Sportsmanship, and Olympic Champions",
    "concepts": [
      "Traditional Indian outdoor games: Stappoo (Hopscotch), Gilli-Danda, Kho-Kho, Kabbadi, Peetthu (Seven Stones).",
      "Indoor games: Chess, Ludo, Carrom, Playing Cards, and Snakes & Ladders.",
      "The value of sports: Physical fitness, cardiovascular stamina, teamwork, and fair play.",
      "Overcoming gender barriers in professional sports (Sania Mirza, Mary Kom, P.V. Sindhu)."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fdf2f8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">Games We Play — Traditional Street Games &amp; Sportsmanship</text>\n      <!-- Stappoo (Hopscotch) Grid -->\n      <rect x=\"70\" y=\"60\" width=\"20\" height=\"20\" fill=\"#fbcfe8\" stroke=\"#db2777\"/>\n      <rect x=\"70\" y=\"80\" width=\"20\" height=\"20\" fill=\"#fbcfe8\" stroke=\"#db2777\"/>\n      <rect x=\"60\" y=\"100\" width=\"20\" height=\"20\" fill=\"#fbcfe8\" stroke=\"#db2777\"/><rect x=\"80\" y=\"100\" width=\"20\" height=\"20\" fill=\"#fbcfe8\" stroke=\"#db2777\"/>\n      <text x=\"80\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">Stappoo / Hopscotch</text>\n      <!-- Gilli Danda -->\n      <circle cx=\"210\" cy=\"85\" r=\"26\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <line x1=\"195\" y1=\"95\" x2=\"225\" y2=\"75\" stroke=\"#9a3412\" stroke-width=\"4\"/>\n      <polygon points=\"215,80 230,75 225,90\" fill=\"#c2410c\"/>\n      <text x=\"210\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Gilli Danda</text>\n      <!-- Chess / Indoor -->\n      <circle cx=\"340\" cy=\"85\" r=\"26\" fill=\"#e2e8f0\" stroke=\"#475569\" stroke-width=\"2\"/><text x=\"340\" y=\"92\" font-size=\"20\" text-anchor=\"middle\">♟️♞</text>\n      <text x=\"340\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Chess / Carrom</text>\n      <!-- Sports Champion -->\n      <circle cx=\"470\" cy=\"85\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"470\" y=\"92\" font-size=\"20\" text-anchor=\"middle\">🏆🥇</text>\n      <text x=\"470\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Olympic Champions</text>\n    </svg>",
    "questions": [
      {
        "category": "Traditional Games",
        "q": "How is the traditional game of 'Stappoo' (Hopscotch) played? What is a 'thippi'?",
        "ans": "In <strong>Stappoo</strong>, a rectangular numbered grid of blocks (1 to 8) is drawn on the ground with chalk. The player throws a flat stone marker called a <strong>thippi</strong> into square 1, hops through all the squares on one foot without stepping on lines or on the square with the thippi, turns around at the top, and picks up the thippi on the return trip.",
        "marks": 3,
        "rubric": [
          {
            "key": "Description of the grid and hopping rules",
            "marks": "1.5 Marks"
          },
          {
            "key": "Definition and role of the 'thippi' marker",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Indoor vs Outdoor Games",
        "q": "Classify these games into Outdoor and Indoor: Cricket, Chess, Kabbadi, Carrom, Kho-Kho, Ludo.",
        "ans": "• <strong>Outdoor Games:</strong> Cricket, Kabbadi, Kho-Kho.<br>• <strong>Indoor Games:</strong> Chess, Carrom, Ludo.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate classification of all 6 sports",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Sportsmanship",
        "q": "What does it mean to show 'sportsmanship' when you lose a game?",
        "ans": "Sportsmanship means gracefully congratulating the winning team with a handshake, accepting defeat without throwing tantrums, learning from our mistakes, and valuing fun and friendship above winning.",
        "marks": 2,
        "rubric": [
          {
            "key": "Graceful acceptance of defeat and congratulating opponents",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Traditional Games • Hop-Scotch (Stappoo)",
        "q": "Explain the rules of Hop-Scotch (Stappoo / Kith-Kith):<br>(a) What marker is thrown into the numbered boxes?<br>(b) How does a player hop through the boxes 1 to 8?",
        "ans": "<strong>Stappoo Rules:</strong><br><strong>(a) Marker:</strong><br>• A flat stone or tile called a <strong>Thippi</strong> is thrown into the boxes in numerical order.<br><br><strong>(b) Hopping Method:</strong><br>• In single boxes (1, 2, 3, 6), the player hops on <strong>one foot</strong> without stepping on lines.<br>• In paired side-by-side boxes (4-5 and 7-8), the player lands with <strong>both feet open</strong> (one foot in each box).<br>• The player turns around at box 8, hops back, picks up the thippi while balancing on one foot, and hops out safely.",
        "marks": 3,
        "rubric": [
          {
            "key": "Thippi marker identified",
            "marks": "1.0 M"
          },
          {
            "key": "Single-foot and double-feet hopping rules clearly described",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Games Classification • Indoor vs Outdoor",
        "q": "Classify the following into 'Indoor Games' and 'Outdoor Games':<br>Cricket, Ludo, Football, Carrom, Chess, Kho-Kho.",
        "ans": "<strong>Games Classification:</strong><br>• <strong>Indoor Games:</strong> Ludo, Carrom, Chess.<br>• <strong>Outdoor Games:</strong> Cricket, Football, Kho-Kho.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three correct indoor games",
            "marks": "1.5 M"
          },
          {
            "key": "Three correct outdoor games",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Sports Champions • National Pride",
        "q": "Match each Indian sports champion with their respective sport:<br>• Sania Mirza: [Cricket, Tennis, Badminton, Chess]<br>• Sachin Tendulkar: [Cricket, Tennis, Badminton, Chess]<br>• P. V. Sindhu: [Cricket, Tennis, Badminton, Chess]<br>• Viswanathan Anand: [Cricket, Tennis, Badminton, Chess]",
        "ans": "<strong>Indian Sports Champions:</strong><br>• <strong>Sania Mirza:</strong> Tennis<br>• <strong>Sachin Tendulkar:</strong> Cricket<br>• <strong>P. V. Sindhu:</strong> Badminton<br>• <strong>Viswanathan Anand:</strong> Chess",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 sports champions correctly matched",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Pastimes of Grandparents • Evolution of Play",
        "q": "What games did your grandparents play when they were children that are rarely seen today?",
        "ans": "<strong>Traditional Pastimes:</strong><br>• Grandparents played <strong>Gilli-Danda</strong>, <strong>Satoliya (Pitthoo with 7 stones)</strong>, <strong>Posham Pa</strong>, spinning wooden tops (Lattu), and flying kites on rooftops.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two or more authentic traditional games named",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 16 ('Games We Play'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Physical Activity vs Digital Screen Sedentariness",
      "text": "A pediatric fitness survey reveals that 70% of urban children spend their evenings sitting on sofas playing mobile video games instead of playing outdoor sports like Kho-Kho or cycling in the park.",
      "question": "Explain the physical and social health hazards of replacing outdoor playground games with video games.",
      "answer": "Outdoor street games like Kabbadi, tag, and hopscotch develop cardiovascular stamina, muscle agility, bone density, and eye-hand coordination, while burning excess calories to prevent childhood obesity. Socially, playground games teach vital negotiation skills, team leadership, empathy, and resilience when facing defeat. In contrast, sedentary video gaming causes eye strain, sleep disorders, neck strain, and social isolation.",
      "rubric": "Cardiovascular/motor fitness, social skills learned through playground rules vs screen sedentariness (4 Marks)."
    }
  },
  {
    "id": "la17",
    "num": 17,
    "unit": "Unit 4: Communication & Expression",
    "title": "Here Comes a Letter",
    "subtitle": "The Journey of a Letter from Sender to Receiver: Postbox, Sorting Office, PIN Code, and Postal Evolution",
    "concepts": [
      "The stages of a postal letter: Writing address and PIN code, pasting stamp, dropping into postbox, clearing, sorting at post office, transport by train/van, and doorstep delivery by postman.",
      "The role of the PIN code (Postal Index Number): A 6-digit code locating the exact state, sub-region, and sorting post office.",
      "Postal stationery: Postcards, inland letters, stamped envelopes, money orders, and speed post.",
      "Modern digital communication vs letters: Telephone calls, SMS, WhatsApp, and email."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fee2e2\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Journey of a Letter — Red Postbox to Doorstep Delivery</text>\n      <!-- Red Postbox -->\n      <rect x=\"70\" y=\"60\" width=\"30\" height=\"50\" fill=\"#dc2626\" rx=\"6\"/>\n      <rect x=\"75\" y=\"70\" width=\"20\" height=\"4\" fill=\"#ffffff\"/>\n      <text x=\"85\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">1. Red Postbox</text>\n      <path d=\"M115,80 L165,80\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <!-- Sorting Office -->\n      <circle cx=\"200\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"200\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🏢✉️</text>\n      <text x=\"200\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">2. Sorting (PIN)</text>\n      <path d=\"M235,80 L285,80\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <!-- Mail Train / Van -->\n      <circle cx=\"320\" cy=\"80\" r=\"26\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"320\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🚆🚐</text>\n      <text x=\"320\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#3730a3\" text-anchor=\"middle\">3. Mail Transport</text>\n      <path d=\"M355,80 L405,80\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n      <!-- Postman Delivery -->\n      <circle cx=\"450\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"450\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">👨‍✈️📬</text>\n      <text x=\"450\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">4. Doorstep Delivery</text>\n    </svg>",
    "questions": [
      {
        "category": "Postal Journey",
        "q": "Trace the step-by-step journey of a letter after you drop it into a red postbox.",
        "ans": "1. The postman unlocks the red postbox, collects all letters in a canvas bag, and takes them to the <strong>Head Post Office</strong>.<br>2. Letters are stamped with the post office seal date and sorted according to destination <strong>PIN codes</strong>.<br>3. Bundled letters are loaded onto mail vans, trains, or aeroplanes to reach the destination city.<br>4. At the destination delivery post office, the local beat postman sorts the letters street by street and delivers them into recipients' letterboxes.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sequential progression from postbox to clearing, sorting, transit, and delivery",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Postal Index Number (PIN)",
        "q": "What is a PIN code, and why is it essential to write it clearly on every envelope?",
        "ans": "A <strong>PIN code (Postal Index Number)</strong> is a 6-digit numerical code used by India Post. Each digit represents a specific geographic zone, sub-region, sorting district, and delivery post office. Writing the PIN code ensures that automated machines and sorters can route the letter quickly without errors caused by confusing handwriting or duplicate village names.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of 6-digit PIN code",
            "marks": "1.5 Marks"
          },
          {
            "key": "Function in speeding up error-free sorting and delivery",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Postal Evolution",
        "q": "How did people send urgent messages before the invention of telephones and internet emails?",
        "ans": "People sent urgent messages through the <strong>Telegram</strong> (which transmitted short coded electrical signals over wires in hours) or through <strong>carrier pigeons</strong> and horseback royal couriers (harkaras) in ancient times.",
        "marks": 2,
        "rubric": [
          {
            "key": "Mention of Telegram and historical couriers/pigeons",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Journey of a Letter • Postal Steps",
        "q": "Trace the 5-step journey of Reena's letter from her desk to her friend Ahmed in Delhi:<br>(a) Letter Box $\\rightarrow$ (b) Post Office $\\rightarrow$ (c) Railway Van $\\rightarrow$ (d) Delhi Post Office $\\rightarrow$ (e) Doorstep Delivery.",
        "ans": "<strong>Journey of a Letter:</strong><br>1. Reena writes the letter, pastes a postal stamp, writes Ahmed's complete address with PIN code, and drops it into the red <strong>Letter Box</strong>.<br>2. The postman opens the letter box with a key, collects all letters in a canvas bag, and takes them to the local <strong>Head Post Office</strong>.<br>3. In the post office, clerks stamp the date and sort letters by destination city, loading Delhi sacks onto the mail van of a <strong>Train</strong>.<br>4. At Delhi Railway Station, the mail van delivers the bags to the <strong>Delhi Post Office</strong>, where letters are sorted by locality.<br>5. The local area postman carries the letter in his bag and delivers it straight into <strong>Ahmed's hands at his home</strong>.",
        "marks": 5,
        "rubric": [
          {
            "key": "All 5 chronological stages accurately detailed",
            "marks": "5.0 M"
          }
        ]
      },
      {
        "category": "Postal Stationery • Cost and Types",
        "q": "Name three different postal items you can buy at a post office counter for sending messages.",
        "ans": "<strong>Postal Items:</strong><br>1. <strong>Postcard</strong> (cheapest, open card for short messages)<br>2. <strong>Inland Letter Card</strong> (blue folded confidential letter)<br>3. <strong>Stamped Envelope</strong> (sealed cover for sending private letters and documents).",
        "marks": 3,
        "rubric": [
          {
            "key": "Postcard, Inland letter, and Envelope described",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Modern Communication • Letters vs Smartphones",
        "q": "How has communication changed from old handwritten letters to modern smartphones?",
        "ans": "<strong>Evolution of Communication:</strong><br>• Old handwritten letters took 4 to 7 days to travel across the country by road and rail.<br>• Today, smartphones allow instantaneous communication via video calls, WhatsApp text messages, and emails that reach anywhere on Earth within a single second.",
        "marks": 2,
        "rubric": [
          {
            "key": "Speed and modality contrast between postal letters and digital phones",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Postal Stamps • Philately",
        "q": "Why is a postal stamp pasted on an envelope? What happens if you forget to paste one?",
        "ans": "<strong>Postal Stamp Role:</strong><br>• A postage stamp proves that the sender has paid the fee for postal transportation.<br>• If you post an envelope without a stamp, the postal service marks it 'Bearing', and the receiver has to pay double the postage charge before receiving the letter.",
        "marks": 2,
        "rubric": [
          {
            "key": "Proof of postage fee payment explained",
            "marks": "1.0 M"
          },
          {
            "key": "'Bearing' penalty charge on receiver noted",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 17 ('Here Comes a Letter'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Digital Communication vs Emotional Value of Handwritten Letters",
      "text": "While instant messaging apps deliver text messages in seconds, Reema's grandmother keeps a bundle of old handwritten inland letters sent by her father fifty years ago in her wooden chest.",
      "question": "Why do handwritten letters carry emotional and historical value that digital instant messages often lack?",
      "answer": "Handwritten letters are tangible personal artifacts. The sender's physical handwriting, ink strokes, deliberate pauses, choice of stamps, and paper texture preserve the author's warmth and personality. Writing a physical letter requires dedicated time, thoughtful contemplation, and patience. Unlike fleeting digital notifications that are easily deleted, handwritten letters can be cherished as precious family heirlooms for generations.",
      "rubric": "Tangibility of handwriting, emotional investment, contemplation vs ephemeral digital texts (4 Marks)."
    }
  },
  {
    "id": "la18",
    "num": 18,
    "unit": "Unit 6: Craft, Shelter & Environment",
    "title": "A House Like This!",
    "subtitle": "Architectural Adaptation to Climate and Terrain: Stilt Houses, Igloos, Houseboats, Multi-storey Flats",
    "concepts": [
      "Stilt houses in Assam: Built 10 to 12 feet above ground on sturdy bamboo pillars to stay safe during frequent floods.",
      "Sloping wooden roofs in Manali (Himachal Pradesh): Allowing heavy winter snow and rain to slide off quickly.",
      "Thick mud houses with thorny bush roofs in Rajasthan: Keeping interiors cool against intense desert heat.",
      "Houseboats and Shikaras in Srinagar (Kashmir): Floating homes on Dal Lake with carved wooden Khatamband ceilings.",
      "Multi-storey concrete apartments in crowded megacities like Mumbai to accommodate many families in limited land."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">A House Like This! — Houses Adapted to Diverse Climates</text>\n      <!-- Assam Stilt House -->\n      <line x1=\"70\" y1=\"90\" x2=\"70\" y2=\"125\" stroke=\"#b45309\" stroke-width=\"3\"/>\n      <line x1=\"110\" y1=\"90\" x2=\"110\" y2=\"125\" stroke=\"#b45309\" stroke-width=\"3\"/>\n      <rect x=\"60\" y=\"65\" width=\"60\" height=\"25\" fill=\"#fef08a\" stroke=\"#ca8a04\"/>\n      <polygon points=\"90,45 55,65 125,65\" fill=\"#ea580c\"/>\n      <text x=\"90\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Assam Stilt House</text>\n      <!-- Manali Sloping Roof -->\n      <polygon points=\"210,45 175,70 245,70\" fill=\"#64748b\"/>\n      <rect x=\"185\" y=\"70\" width=\"50\" height=\"40\" fill=\"#cbd5e1\"/>\n      <text x=\"210\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Manali Sloping Roof</text>\n      <!-- Rajasthan Mud House -->\n      <rect x=\"305\" y=\"70\" width=\"50\" height=\"40\" fill=\"#fed7aa\" stroke=\"#c2410c\"/>\n      <polygon points=\"330,55 300,70 360,70\" fill=\"#78350f\"/>\n      <text x=\"330\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Rajasthan Mud House</text>\n      <!-- Houseboat (Kashmir) -->\n      <ellipse cx=\"450\" cy=\"100\" rx=\"35\" ry=\"12\" fill=\"#92400e\"/>\n      <rect x=\"430\" y=\"75\" width=\"40\" height=\"25\" fill=\"#fde68a\" stroke=\"#ca8a04\"/>\n      <polygon points=\"450,60 425,75 475,75\" fill=\"#ea580c\"/>\n      <text x=\"450\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Kashmir Houseboat</text>\n    </svg>",
    "questions": [
      {
        "category": "Climatic Adaptations",
        "q": "Why are houses in Assam built on bamboo stilts 10 to 12 feet above the ground?",
        "ans": "Assam receives torrential monsoon rains that cause frequent flash floods. Building houses on high bamboo stilts ensures that rising floodwaters and wild reptiles cannot enter living quarters. Furthermore, bamboo is flexible and withstands frequent earthquake tremors.",
        "marks": 3,
        "rubric": [
          {
            "key": "Flood and waterlogging protection",
            "marks": "1.5 Marks"
          },
          {
            "key": "Protection from animals and earthquake flexibility",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Desert Architecture",
        "q": "How do the thick mud walls and thorny bush roofs of houses in Rajasthan keep people comfortable?",
        "ans": "Thick mud walls act as thermal barriers; they absorb desert solar heat during the scorching day without transferring it inside, keeping rooms cool. At night, when desert temperatures drop sharply, the stored warmth radiates back inside. Thorny brushwood roofs provide lightweight thatched insulation.",
        "marks": 3,
        "rubric": [
          {
            "key": "Thermal insulation of thick mud during hot days",
            "marks": "1.5 Marks"
          },
          {
            "key": "Nighttime heat radiation and thatched roof purpose",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Specialized Dwellings",
        "q": "What is an 'Igloo' and what is a 'Houseboat'?",
        "ans": "• <strong>Igloo:</strong> A dome-shaped shelter constructed from tightly packed blocks of snow in freezing polar Arctic regions.<br>• <strong>Houseboat:</strong> A floating wooden residential boat found on scenic lakes and backwaters (like Dal Lake in Kashmir and Alleppey in Kerala).",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate definitions of both unique dwelling types",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Climate-Adapted Housing • Regional Architecture",
        "q": "Match each type of house with the Indian region and the climate reason:<br>• Stilt House (Bamboo poles): [Assam - Heavy rainfall and floods, Manali/Himachal - Heavy snowfall and rain, Rajasthan/Desert - Scorching heat, Srinagar/Dal Lake - Floating tourist stay]<br>• Sloping Roof House: [Assam - Heavy rainfall and floods, Manali/Himachal - Heavy snowfall and rain, Rajasthan/Desert - Scorching heat, Srinagar/Dal Lake - Floating tourist stay]<br>• Mud House with Thatch Roof: [Assam - Heavy rainfall and floods, Manali/Himachal - Heavy snowfall and rain, Rajasthan/Desert - Scorching heat, Srinagar/Dal Lake - Floating tourist stay]<br>• Houseboat (Shikara): [Assam - Heavy rainfall and floods, Manali/Himachal - Heavy snowfall and rain, Rajasthan/Desert - Scorching heat, Srinagar/Dal Lake - Floating tourist stay]",
        "ans": "<strong>Climate-Adapted Housing:</strong><br>• <strong>Stilt House:</strong> Built 10–12 feet high on strong bamboo poles in <strong>Assam</strong> to keep living rooms dry during severe floods.<br>• <strong>Sloping Roof House:</strong> Slanted roofs in <strong>Manali</strong> allow heavy snow and rainwater to slide right off without leaking.<br>• <strong>Mud House:</strong> Thick mud walls and thorny bush roofs in <strong>Rajasthan</strong> insulate interiors, keeping rooms cool in blistering desert heat.<br>• <strong>Houseboat:</strong> Wooden floating house in <strong>Srinagar (Dal Lake)</strong> built for living and welcoming tourists on water.",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 houses accurately matched with regions and climate reasons",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Building Materials • Multi-Story Flats vs Kutcha House",
        "q": "Contrast the building materials used in a high-rise city apartment (Pucca House) with a village hut (Kutcha House).",
        "ans": "<strong>Building Materials Comparison:</strong><br>• <strong>High-Rise Pucca House:</strong> Cement, iron steel rods, baked red bricks, gravel, marble tiles, and glass windows.<br>• <strong>Village Kutcha House:</strong> Unbaked sun-dried mud, bamboo poles, straw, thatch, dry palm leaves, and cow-dung plaster.",
        "marks": 3,
        "rubric": [
          {
            "key": "Pucca house permanent materials listed",
            "marks": "1.5 M"
          },
          {
            "key": "Kutcha house organic materials listed",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Igloo Architecture • Polar Survival",
        "q": "What is an Igloo, who builds it, and why doesn't it feel freezing inside?",
        "ans": "<strong>Igloo Physics:</strong><br>• An igloo is a dome-shaped winter shelter built by Inuits (Eskimos) using hard-packed snow blocks.<br>• Packed snow is a great insulator containing millions of trapped air pockets. Body heat and a small seal-oil lamp warm the interior, and the heat cannot escape through the snow walls.",
        "marks": 3,
        "rubric": [
          {
            "key": "Dome snow block construction explained",
            "marks": "1.5 M"
          },
          {
            "key": "Thermal insulation of trapped air pockets in snow",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Multi-Story Apartments • Urban Land Shortage",
        "q": "Why do large crowded cities like Mumbai and Delhi have multi-story skyscraper buildings instead of single houses?",
        "ans": "<strong>Urban Density:</strong><br>• Large cities have millions of people but very limited land area. Building upwards into multi-story flats allows hundreds of families to live safely on a single small plot of land.",
        "marks": 2,
        "rubric": [
          {
            "key": "High population and limited land area rationale",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 18 ('A House Like This!'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Vernacular Architecture and Modern Climate Resilience",
      "text": "Modern builders in flood-prone wetlands are replacing traditional bamboo stilt houses with heavy ground-level concrete brick homes, resulting in catastrophic waterlogging every monsoon.",
      "question": "Why is indigenous vernacular architecture scientifically superior to copy-pasting city concrete designs in ecologically sensitive areas?",
      "answer": "Indigenous architecture represents centuries of empirical adaptation to local geology, climate, and hazards. Stilt houses let floodwaters flow underneath unimpeded without structural resistance. Mud and thatch naturally regulate temperature without air conditioning. In contrast, heavy ground-level concrete blocks natural drainage pathways, traps indoor heat, and cracks during earthquakes. True modern engineering blends indigenous wisdom with durable materials rather than blindly imposing unsuitable concrete blocks.",
      "rubric": "Ecological wisdom of vernacular architecture, natural drainage vs concrete barriers, thermal efficiency (4 Marks)."
    }
  },
  {
    "id": "la19",
    "num": 19,
    "unit": "Unit 1: Animals & Habitats",
    "title": "Our Friends — Animals",
    "subtitle": "Empathy, Care, First-Aid for Wounded Animals, and Domestic Mutual Relationships",
    "concepts": [
      "The bird that flew into the classroom ceiling fan: First-aid with water and gentle handling.",
      "Malini and her kitten: Caring for domestic pets when they are in distress or hungry.",
      "The story of the thirsty donkey: Helping beasts of burden carrying heavy laundry.",
      "Interdependence: Cow (milk), honeybee (honey), dog (guarding), horse (travel), sheep (wool)."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Our Friends — Animals: First-Aid, Empathy &amp; Care</text>\n      <!-- Injured Bird First Aid -->\n      <circle cx=\"90\" cy=\"80\" r=\"26\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"90\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🕊️🩹💧</text>\n      <text x=\"90\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Bird First-Aid</text>\n      <!-- Caring for Kitten -->\n      <circle cx=\"220\" cy=\"80\" r=\"26\" fill=\"#fdf2f8\" stroke=\"#db2777\" stroke-width=\"2\"/><text x=\"220\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🐱🥛</text>\n      <text x=\"220\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">Feeding Pets</text>\n      <!-- Thirsty Donkey -->\n      <circle cx=\"350\" cy=\"80\" r=\"26\" fill=\"#fefce8\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"350\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🐴🪣</text>\n      <text x=\"350\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Hydrating Work Animals</text>\n      <!-- Mutual Friendship -->\n      <circle cx=\"480\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"480\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🐕❤️👧</text>\n      <text x=\"480\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Bond of Companionship</text>\n    </svg>",
    "questions": [
      {
        "category": "Animal First-Aid",
        "q": "What did Navjot and Ali do when a bird was hit by the rotating classroom ceiling fan?",
        "ans": "They immediately switched off the electric ceiling fan to prevent further injury, gently picked up the trembling bird, stroked its feathers with love, offered it cool water in a bowl to drink, and watched with joy when it recovered strength and fluttered safely out through the window.",
        "marks": 3,
        "rubric": [
          {
            "key": "Immediate safety action (switching off fan)",
            "marks": "1 Mark"
          },
          {
            "key": "Gentle physical care and offering water",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Care for Working Animals",
        "q": "Why should owners never overload or beat beasts of burden (bullocks, horses, donkeys)?",
        "ans": "Working animals feel severe muscle exhaustion, thirst, pain, and spine damage when overloaded or whipped. They are living sentient creatures that faithfully assist human livelihoods and deserve nutritious fodder, fresh water, adequate rest, and humane treatment.",
        "marks": 3,
        "rubric": [
          {
            "key": "Physiological harm of overloading and beating",
            "marks": "1.5 Marks"
          },
          {
            "key": "Ethical duty to provide rest, fodder, and medical care",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Mutual Benefits",
        "q": "Give two examples of how animals provide food and services to humans without being harmed.",
        "ans": "1. <strong>Honeybees:</strong> Produce sweet nutritious honey and wax while pollinating our orchard flowers.<br>2. <strong>Sheep:</strong> Provide warm fleece wool that is painlessly sheared in summer to make winter clothes.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two accurate examples of cruelty-free human-animal partnerships",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Animal Welfare • Care for Strays and Birds",
        "q": "In 'Our Friends — Animals':<br>(a) In Navodaya school, a bird hit the ceiling fan. What did Navjyot and Ali immediately do to save the bird?<br>(b) Why should we hang an earthen bowl of water in our balcony during summers?",
        "ans": "<strong>Kindness to Animals:</strong><br><strong>(a) Bird Rescue:</strong><br>• Navjyot and Ali immediately switched off the ceiling fan, picked up the shivering bird gently, brought water in a bowl, and dropped water on its beak until it flapped its wings and flew safely out the window.<br><br><strong>(b) Water Bowl in Summer:</strong><br>• Ponds and puddles dry up in summer. Small sparrows and pigeons suffer from dehydration; providing fresh water saves hundreds of urban birds from dying of thirst.",
        "marks": 3,
        "rubric": [
          {
            "key": "Switching off fan and watering bird described",
            "marks": "1.5 M"
          },
          {
            "key": "Saving birds from summer dehydration explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Domestic Animals • Care and Products",
        "q": "Match each domestic animal with what it gives humans and how we should care for it:<br>• Cow: [Milk and dung manure -> Clean shed, fresh fodder, and clean water]<br>• Sheep: [Warm wool -> Safe pen, grazing grass, and regular shearing]<br>• Honeybee: [Sweet honey and wax -> Clean hives and blossoming flower gardens]",
        "ans": "<strong>Domestic Animals:</strong><br>• <strong>Cow:</strong> Provides nutritious milk and dung manure. We must give it clean shelter, dry bedding, green fodder, and regular veterinary vaccinations.<br>• <strong>Sheep:</strong> Provides warm wool for sweaters. We must protect it from wolves, provide grazing pastures, and shelter in winter.<br>• <strong>Honeybee:</strong> Pollinates crops and yields honey and wax. We must protect flower gardens from harmful chemical pesticides.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 3 domestic animals matched with products and responsible care",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Stray Animal First Aid • Animal Helpline",
        "q": "What should you do if you see a puppy or kitten injured by a passing vehicle on the road?",
        "ans": "<strong>First-Aid Action:</strong><br>1. Carefully move the injured animal to the side of the road away from traffic.<br>2. With an adult's help, call a local animal rescue helpline (like SPCA or Blue Cross) or take it to a nearby veterinary clinic for antiseptic dressing.",
        "marks": 2,
        "rubric": [
          {
            "key": "Safe moving and calling animal rescue/vet described",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Food Chain • Bees in Queen's Garden",
        "q": "In the story 'The Queen's Garden', why did the fruit harvest drop drastically when the gardener killed all the birds?",
        "ans": "<strong>Biological Balance:</strong><br>• The gardener thought birds only ate fruit. But birds also eat caterpillars and harmful insects. When all birds were driven away, millions of insects destroyed all the fruit blossoms, leaving almost no fruit harvest.",
        "marks": 2,
        "rubric": [
          {
            "key": "Birds controlling crop-eating insects explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 19 ('Our Friends — Animals'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Ethical Treatment of Animals: The Kite String (Manja) Hazard",
      "text": "During kite-flying festivals, thousands of birds suffer severed wings, deep throat lacerations, and death due to sharp glass-coated synthetic nylon thread (Chinese manja) hanging from trees and telephone wires.",
      "question": "As an animal friend, how can you celebrate kite festivals without causing harm to birds?",
      "answer": "We can celebrate safely and compassionately: (1) <strong>Boycott Glass-Coated Manja:</strong> Use only traditional plain cotton thread (saddi) that breaks under mild tension and does not slice bird wings. (2) <strong>Avoid Flying at Dawn and Dusk:</strong> Refrain from flying kites during early morning and evening hours when flocks of birds fly between their nesting trees and feeding grounds. (3) <strong>Clean Hanging Threads:</strong> Safely take down dangling leftover kite strings from neighborhood trees so birds do not get entangled.",
      "rubric": "Rejection of glass manja, timing kite flying to avoid bird transit, cleaning entangled strings (4 Marks)."
    }
  },
  {
    "id": "la20",
    "num": 20,
    "unit": "Unit 2: Water & Food",
    "title": "Drop by Drop",
    "subtitle": "Madho's Village in Rajasthan (Bajju): Arid Deserts, Water Tankas, and Water Recycling",
    "concepts": [
      "Severe water scarcity in Bajju (Rajasthan): Women and children walking miles on hot sand dunes with pots on their heads to fetch water.",
      "The Water Train: A government relief train carrying drinking water tanks during peak summer crises.",
      "The Tanka System: An underground circular pit built in courtyards with sloping plastered floors and wire mesh filters to harvest every drop of rain.",
      "Water recycling hierarchy: Water used for washing vegetables is reused for washing utensils, which is then used to bathe cattle or water trees."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Drop by Drop — Madho's Desert Village &amp; The Traditional Tanka</text>\n      <!-- Desert Sand Dune -->\n      <path d=\"M40,120 Q120,80 200,120 Q280,75 360,120 L360,145 L40,145 Z\" fill=\"#fde68a\"/>\n      <!-- Woman Fetching Water -->\n      <circle cx=\"100\" cy=\"85\" r=\"12\" fill=\"#fed7aa\"/>\n      <circle cx=\"100\" cy=\"70\" r=\"7\" fill=\"#ea580c\"/><circle cx=\"100\" cy=\"60\" r=\"5\" fill=\"#ea580c\"/>\n      <text x=\"100\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Walking for Miles</text>\n      <!-- Traditional Underground Tanka -->\n      <rect x=\"420\" y=\"70\" width=\"90\" height=\"55\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\" rx=\"6\"/>\n      <polygon points=\"400,70 465,45 530,70\" fill=\"#d97706\"/>\n      <line x1=\"420\" y1=\"70\" x2=\"455\" y2=\"70\" stroke=\"#0369a1\" stroke-width=\"2\"/>\n      <text x=\"465\" y=\"100\" font-size=\"12\" text-anchor=\"middle\">💧</text>\n      <text x=\"465\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Underground Tanka (Rain Storage)</text>\n    </svg>",
    "questions": [
      {
        "category": "Traditional Tanka System",
        "q": "What is a 'Tanka' and how is rainwater collected inside it in Rajasthan?",
        "ans": "A <strong>Tanka</strong> is a covered circular underground pit constructed inside a house's courtyard.<br>• The courtyard floor is made sloping so all falling rainwater flows toward a drainage hole.<br>• A wire mesh filter is fitted at the inlet mouth to prevent leaves and dirt from entering.<br>• The water flows down a covered pipe into the sealed underground chamber, where it stays cool, pure, and clean for drinking throughout the dry year.",
        "marks": 3,
        "rubric": [
          {
            "key": "Structure of an underground courtyard Tanka",
            "marks": "1.5 Marks"
          },
          {
            "key": "Sloping floor and filtration mechanism",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Water Recycling Hierarchy",
        "q": "How do people in water-scarce desert villages reuse the same water multiple times?",
        "ans": "They practice multi-stage water recycling:<br>1. <strong>Stage 1:</strong> Clean water is used for washing faces and hands.<br>2. <strong>Stage 2:</strong> The collected runoff water is reused for scrubbing kitchen utensils or washing clothes.<br>3. <strong>Stage 3:</strong> The final rinse water is poured onto plant roots or used to bathe cattle.",
        "marks": 3,
        "rubric": [
          {
            "key": "Detailed 3-stage progression of domestic water reuse",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Empathy for Scarcity",
        "q": "Why is wasting tap water in cities considered insensitive to people living in desert regions?",
        "ans": "In desert regions like Bajju, little children and mothers walk barefoot over burning sand for hours just to fetch one pot of drinking water. Carelessly leaving taps running in cities shows thoughtlessness toward a finite, precious natural resource that millions struggle daily to secure.",
        "marks": 2,
        "rubric": [
          {
            "key": "Contrast between urban water wastage and rural struggle",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Water Scarcity • Madho's Village in Rajasthan",
        "q": "In 'Drop by Drop', describe how Madho's family in Rajasthan manages their scarce drinking water:<br>(a) How far do his mother and sister walk daily to fetch water?<br>(b) What special underground structure is built in every house to collect rainwater?",
        "ans": "<strong>Desert Water Management:</strong><br><strong>(a) Daily Struggle:</strong><br>• His mother and sister walk barefoot for hours across burning desert sand dunes just to fetch four clay pots (matkas) of water from a distant pond.<br><br><strong>(b) Tanka (टांका):</strong><br>• Every house constructs an <strong>underground covered water cistern called a Tanka</strong> in the courtyard. The courtyard floor is kept sloping so rainwater washes down a pipe fitted with a mesh sieve directly into the clean tanka, providing drinking water for months.",
        "marks": 4,
        "rubric": [
          {
            "key": "Severe desert walk for water described",
            "marks": "2.0 M"
          },
          {
            "key": "Tanka architecture and rooftop pipe collection detailed",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Water Reutilization • Cascade Flow",
        "q": "Draw or describe a 3-step water reuse chain showing how one bucket of water can be used three times in a home.",
        "ans": "<strong>Water Reuse Chain:</strong><br>1. <strong>Use 1 (Washing Vegetables):</strong> Fresh water is used to wash fruits and raw vegetables in a basin.<br>2. <strong>Use 2 (Washing Feet/Hands):</strong> The collected water is used to wash feet and dusty slippers after coming inside.<br>3. <strong>Use 3 (Gardening / Mop):</strong> The final water is poured into potted plants or used to wash the courtyard floor.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three logical, hygienic progressive uses of water described",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Water Drops • Counting Leaks",
        "q": "If a leaking kitchen tap drips 1 drop of water every second:<br>(a) How many drops leak in 1 minute (60 seconds)?<br>(b) Why should dripping taps be repaired immediately?",
        "ans": "<strong>Leakage Calculations:</strong><br><strong>(a) Drops per Minute:</strong><br>• 1 drop/second × 60 seconds = <strong>60 drops per minute</strong> (which equals nearly 1 bucket of water wasted every single day).<br><br><strong>(b) Immediate Repair:</strong><br>• A tiny drip adds up to thousands of litres of pure treated drinking water wasted down the drain each month. Replacing a 10-rupee washer saves a precious natural resource.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct calculation (60 drops/min)",
            "marks": "1.5 M"
          },
          {
            "key": "Real-world scale of cumulative water waste explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Water Train • Drought Relief",
        "q": "What is a 'Water Train' (Jal Doot) sent by the government during severe droughts?",
        "ans": "<strong>Drought Relief:</strong><br>• When wells and rivers dry up completely during summer, the Indian Railways runs special freight trains fitted with huge 50,000-litre tanker wagons that transport drinking water hundreds of kilometers to drought-hit desert districts.",
        "marks": 2,
        "rubric": [
          {
            "key": "Railways transporting tanker water to drought regions",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 20 ('Drop by Drop'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Water Footprint Auditing: Zero-Water-Wastage Household",
      "text": "A family living in a city apartment receives 24-hour unlimited tap water and routinely uses a running hose pipe to wash their car and sweep their driveway, wasting over 400 liters of potable water daily.",
      "question": "Design a practical 'Desert Water Wisdom Plan' for this city family to slash their water wastage by 80%.",
      "answer": "The family can adopt desert water wisdom: (1) <strong>Bucket and Sponge Car Washing:</strong> Replace running hose pipes with a single 15-liter bucket and microfiber cloth to wash the car, saving 350 liters instantly. (2) <strong>Broom Instead of Hose:</strong> Sweep the driveway with a broom instead of hosing clean drinking water onto dry asphalt. (3) <strong>RO Purifier Reject Water Capture:</strong> Direct the wastewater drain pipe of home reverse-osmosis (RO) purifiers into a bucket to mop floors and flush toilets. (4) <strong>Turn Off Taps:</strong> Shut taps while brushing and shaving.",
      "rubric": "Eliminating running hose pipes, capturing RO reject water, behavioral discipline, 80% conservation target (4 Marks)."
    }
  },
  {
    "id": "la21",
    "num": 21,
    "unit": "Unit 3: Family & Homes",
    "title": "Families can be Different",
    "subtitle": "Diversity of Modern Family Structures: Single-Parent, Foster, Adoptive, and Blended Families",
    "concepts": [
      "No single definition of family: Families come in varied loving configurations across societies.",
      "Sitamma's large joint family: Grandparents, chachas, bua, parents, and cousins living under one ancestral roof in Guntur.",
      "Tara's family: Living happily with her adoptive mother Meenakshi and loving grandfather (Nana) in Chennai.",
      "Sara and Habib's family: Living with their retired Abbu who loves watching television together.",
      "The universal bond across all family types: Mutual affection, emotional support, and caring in times of need."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Families can be Different — Celebrating Every Loving Family Type</text>\n      <!-- Joint Family (Sitamma) -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"80\" y=\"87\" font-size=\"16\" text-anchor=\"middle\">👵👴👨👩👧👦</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Joint Family</text>\n      <!-- Adoptive Family (Tara) -->\n      <circle cx=\"200\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"200\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">👧👩👴</text>\n      <text x=\"200\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Adoptive / Extended</text>\n      <!-- Single Parent / Sibling -->\n      <circle cx=\"330\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"330\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">👨👧👦</text>\n      <text x=\"330\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Single Parent</text>\n      <!-- Blended Family (Kavery & Tania) -->\n      <circle cx=\"470\" cy=\"80\" r=\"26\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"2\"/><text x=\"470\" y=\"87\" font-size=\"18\" text-anchor=\"middle\">👩‍🦰👨‍🦱👧👶</text>\n      <text x=\"470\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">Blended / Modern</text>\n    </svg>",
    "questions": [
      {
        "category": "Diverse Family Models",
        "q": "Describe two different family structures discussed in this chapter and how members care for one another.",
        "ans": "1. <strong>Tara's Family:</strong> Tara was adopted by her mother Meenakshi. Tara lives with her mother and her grandfather (Nana) in Chennai. Her Nana takes her to school, helps her with homework, and the family vacations together joyfully.<br>2. <strong>Sara and Habib's Family:</strong> Sara and Habib work in government jobs and live with their elderly father (Abbu). In the evenings, all three sit together, watch news debates, read newspapers, and cook meals together as a cooperative team.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate description of Tara's adoptive-extended household",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate description of Sara and Habib's cooperative home",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Family Values",
        "q": "What common thread of values unites all families, regardless of whether they are big or small?",
        "ans": "The common thread uniting all families is <strong>love, mutual respect, emotional security, and shared care</strong>. Family members stand by each other during illness or hardship, celebrate achievements together, and ensure that every member feels valued and safe.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of love, security, and mutual care as universal family bonds",
            "marks": "3 Marks"
          }
        ]
      },
      {
        "category": "Sensitivity & Inclusivity",
        "q": "Why should classmates never tease a child who lives with a single parent or grandparents?",
        "ans": "Every family structure is equally normal, honorable, and full of love. Teasing someone about their family setup hurts their feelings and displays ignorance. True friends celebrate each other's loving homes without judgment.",
        "marks": 2,
        "rubric": [
          {
            "key": "Promoting empathy and acceptance of diverse family structures",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Family Structures • Diversity of Families",
        "q": "In 'Families can be Different':<br>Match each child's family with its family structure:<br>• Sitamma: [Joint family living together in a large ancestral house, Single parent family living with father, Adoptive family with loving parents, Nuclear family living with mother and sister]<br>• Tara: [Joint family living together in a large ancestral house, Single parent family living with father, Adoptive family with loving parents, Nuclear family living with mother and sister]<br>• Sara and Habib: [Joint family living together in a large ancestral house, Single parent family living with father, Adoptive family with loving parents, Nuclear family living with mother and sister]<br>• Taniya: [Joint family living together in a large ancestral house, Single parent family living with father, Adoptive family with loving parents, Nuclear family living with mother and sister]",
        "ans": "<strong>Family Diversity:</strong><br>• <strong>Sitamma:</strong> Large Joint family with grandparents, chacha, bua living together in their ancestral Gwalior house.<br>• <strong>Tara:</strong> Raised lovingly by her single mother Meenakshi and Nana in Chennai.<br>• <strong>Sara and Habib:</strong> Nuclear family living with government employee father/Abbu in the city.<br>• <strong>Taniya:</strong> Adoptive family where loving parents adopted and care for their child.",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 diverse family structures correctly identified",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Family Values • Love and Mutual Support",
        "q": "Families can look very different in size and structure, but what two core qualities make every family special?",
        "ans": "<strong>Core Family Values:</strong><br>1. <strong>Unconditional Love & Care:</strong> Family members protect, care for, and support one another in times of illness, sadness, and joy.<br>2. <strong>Belonging & Trust:</strong> A family provides emotional safety where a child can express feelings without fear.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mutual care during difficulties emphasized",
            "marks": "1.5 M"
          },
          {
            "key": "Emotional security and love highlighted",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Decision Making • Democratic Families",
        "q": "How should a happy family make important decisions like planning holidays or buying household items?",
        "ans": "<strong>Democratic Communication:</strong><br>• All family members—including children and elders—should sit together, listen respectfully to everyone's ideas, and make decisions mutually with consensus and kindness.",
        "marks": 2,
        "rubric": [
          {
            "key": "Inclusive, collective discussion described",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Family Meals • Bonding Time",
        "q": "Why is eating dinner together as a family considered a valuable habit?",
        "ans": "<strong>Mealtime Bonding:</strong><br>• Eating together allows parents and children to share what happened during their day, discuss problems, laugh together, and reinforce loving emotional connections away from digital screens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Communication and emotional bonding explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 21 ('Families can be Different'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Classroom Diversity: Supporting Children from Varied Family Backgrounds",
      "text": "During 'Family Day' in a school, students are asked to bring pictures of both their mother and father. A student named Aryan, whose parents are divorced and who lives with his working mother and grandmother, feels anxious and embarrassed.",
      "question": "How should the school adapt its activities to ensure all children feel celebrated regardless of their family structure?",
      "answer": "Schools should adopt inclusive terminology and flexible activities: (1) <strong>Inclusive 'My Loving Family' Projects:</strong> Frame assignments around 'People Who Love and Care for Me at Home' rather than rigid 'Mother & Father' templates, welcoming portraits of grandparents, single parents, adoptive guardians, or aunts. (2) <strong>Classroom Sensitization:</strong> Share stories like 'Families can be Different' to educate children that family is defined by love, warmth, and care rather than a rigid headcount.",
      "rubric": "Inclusive project framing, emotional safety for diverse family structures, empathy in education (4 Marks)."
    }
  },
  {
    "id": "la22",
    "num": 22,
    "unit": "Unit 5: Travel, Work & Community",
    "title": "Left-Right",
    "subtitle": "Spatial Awareness, Directional Orientation (North, South, East, West), Map Reading, and Symbols",
    "concepts": [
      "Spatial awareness: Distinguishing between our left hand and right hand.",
      "Cardinal directions: The sun rises in the East and sets in the West; facing East, our left is North and right is South.",
      "Map symbols and legends: Using standardized symbols for houses, trees, post offices, schools, and hospitals.",
      "Reading simple neighborhood route maps to navigate safely from home to school."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f1f5f9\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Left-Right — Cardinal Directions &amp; Neighborhood Map Symbols</text>\n      <!-- Compass Rose -->\n      <circle cx=\"110\" cy=\"85\" r=\"32\" fill=\"#ffffff\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <line x1=\"110\" y1=\"58\" x2=\"110\" y2=\"112\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <line x1=\"83\" y1=\"85\" x2=\"137\" y2=\"85\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <text x=\"110\" y=\"55\" font-size=\"9\" font-weight=\"900\" fill=\"#dc2626\" text-anchor=\"middle\">N</text>\n      <text x=\"110\" y=\"123\" font-size=\"9\" font-weight=\"900\" fill=\"#0284c7\" text-anchor=\"middle\">S</text>\n      <text x=\"143\" y=\"88\" font-size=\"9\" font-weight=\"900\" fill=\"#0284c7\" text-anchor=\"middle\">E</text>\n      <text x=\"77\" y=\"88\" font-size=\"9\" font-weight=\"900\" fill=\"#0284c7\" text-anchor=\"middle\">W</text>\n      <!-- Map Symbols Legend -->\n      <!-- Tree -->\n      <circle cx=\"240\" cy=\"75\" r=\"14\" fill=\"#22c55e\"/><text x=\"240\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Tree Symbol</text>\n      <!-- Hospital Cross -->\n      <rect x=\"330\" y=\"65\" width=\"20\" height=\"20\" fill=\"#fee2e2\" stroke=\"#dc2626\"/>\n      <text x=\"340\" y=\"80\" font-size=\"14\" fill=\"#dc2626\" font-weight=\"900\" text-anchor=\"middle\">+</text>\n      <text x=\"340\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Hospital (+)</text>\n      <!-- School -->\n      <rect x=\"430\" y=\"65\" width=\"22\" height=\"20\" fill=\"#fed7aa\" stroke=\"#ea580c\"/>\n      <text x=\"441\" y=\"80\" font-size=\"12\" text-anchor=\"middle\">🏫</text>\n      <text x=\"441\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">School Symbol</text>\n      <!-- Post Office -->\n      <rect x=\"520\" y=\"65\" width=\"22\" height=\"20\" fill=\"#fef08a\" stroke=\"#ca8a04\"/>\n      <text x=\"531\" y=\"80\" font-size=\"12\" text-anchor=\"middle\">✉️</text>\n      <text x=\"531\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Post Office</text>\n    </svg>",
    "questions": [
      {
        "category": "Cardinal Directions",
        "q": "How can you find the four cardinal directions (North, South, East, West) using the morning sun?",
        "ans": "Stand outside in an open area in the early morning and stretch your arms out wide:<br>1. Face directly toward the rising morning sun: That direction is <strong>East</strong>.<br>2. Your back points directly toward <strong>West</strong> (where the sun sets).<br>3. Your left hand points straight toward <strong>North</strong>.<br>4. Your right hand points straight toward <strong>South</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "East (facing rising sun) and West (back)",
            "marks": "1.5 Marks"
          },
          {
            "key": "North (left arm) and South (right arm)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Map Symbols & Key/Legend",
        "q": "Why do maps use small pictorial symbols instead of drawing full realistic pictures of buildings and roads?",
        "ans": "Real buildings, parks, and hospitals are too huge to draw on a portable sheet of paper. Standardized symbols (like a green circle for a tree, a red plus sign for a hospital, and a dashed line for railway tracks) take up very little space, keep the map neat and uncluttered, and can be understood universally by travelers regardless of their language.",
        "marks": 3,
        "rubric": [
          {
            "key": "Space-saving and clutter reduction",
            "marks": "1.5 Marks"
          },
          {
            "key": "Universal readability across languages",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Spatial Orientation",
        "q": "When Ruchira travels from home to school, mention two landmarks that fall on her right side.",
        "ans": "On Ruchira's right side as she moves along the route fall the <strong>park / playground</strong> and the <strong>bus stop</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct identification of two right-side landmarks from Ruchira's map",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Mapping & Navigation • Ruchira's Journey",
        "q": "In 'Left-Right', Ruchira travels from home to school:<br>(a) Name three landmarks she passes on her left side.<br>(b) Name three landmarks she passes on her right side.<br>(c) Why do we use standardized map symbols instead of drawing full pictures?",
        "ans": "<strong>Mapping Concepts:</strong><br><strong>(a) On Her Left Side:</strong><br>• House, Tree, Playground / Park.<br><br><strong>(b) On Her Right Side:</strong><br>• Hand pump, Post Office, Hospital, General Shop.<br><br><strong>(c) Map Symbols:</strong><br>• Full pictures take up too much space and are hard to draw. Simple standardized symbols (like a cross for hospital or envelope for post office) make maps clean, easy to read, and clear for anyone navigating.",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct landmarks on left side",
            "marks": "1.5 M"
          },
          {
            "key": "Correct landmarks on right side",
            "marks": "1.5 M"
          },
          {
            "key": "Clear rationale for using map symbols",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Map Symbols • Standard Keys",
        "q": "Draw or describe the standard map symbol used for:<br>(a) Hospital<br>(b) Post Office<br>(c) School<br>(d) Tree",
        "ans": "<strong>Standard Map Symbols:</strong><br>• (a) <strong>Hospital:</strong> Red Plus symbol [ + ] inside a square.<br>• (b) <strong>Post Office:</strong> An envelope symbol [ ✉️ ] or letter 'PO'.<br>• (c) <strong>School:</strong> Open book icon or silhouette of children with bags.<br>• (d) <strong>Tree:</strong> Green cloud-like canopy with brown trunk icon [ 🌳 ].",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct conventional symbol described for all 4 items",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Cardinal Directions • Compass Basics",
        "q": "Stand facing the rising Sun in the early morning:<br>(a) Which direction is directly in front of you?<br>(b) Which direction is behind you?<br>(c) Which direction is to your left hand and right hand?",
        "ans": "<strong>Cardinal Directions:</strong><br>• <strong>(a) In front of you:</strong> <strong>East</strong> (where the sun rises).<br>• <strong>(b) Behind you:</strong> <strong>West</strong> (where the sun sets).<br>• <strong>(c) Left hand:</strong> <strong>North</strong>.<br>• <strong>(d) Right hand:</strong> <strong>South</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "East in front and West behind",
            "marks": "1.5 M"
          },
          {
            "key": "North on left and South on right",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Classroom Plan • Top-Down Perspective",
        "q": "What is the difference between a picture of a classroom and a map (floor plan) of a classroom?",
        "ans": "<strong>Picture vs Map:</strong><br>• A <strong>picture</strong> shows the classroom from the side/front as your eyes see it with full 3D details.<br>• A <strong>map (floor plan)</strong> shows the classroom from directly above (bird's-eye top view) using symbols to show where desks, doors, windows, and blackboards are located.",
        "marks": 2,
        "rubric": [
          {
            "key": "Front perspective vs top-down aerial map view explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 22 ('Left-Right'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Practical Navigation Skills: Creating a School Fire Evacuation Map",
      "text": "During a school safety audit, the principal asks the Class 3 students to help map out an emergency evacuation route from their second-floor classroom to the open playground.",
      "question": "Apply your map-making skills to explain how students should design this safety evacuation route map.",
      "answer": "Students should design a clear, user-friendly emergency map: (1) <strong>Orient with Cardinal Directions:</strong> Place a Compass Rose (N, S, E, W) in the top-right corner. (2) <strong>Prominent Landmark Symbols:</strong> Mark classroom doors, emergency staircases, fire extinguisher locations (using a red cylinder icon), and first-aid kits (red cross). (3) <strong>Bold Green Directional Arrows:</strong> Draw thick green arrows showing the exact evacuation path down the stairs avoiding elevators. (4) <strong>Safe Assembly Point:</strong> Clearly highlight the open football field as the final safe gathering zone.",
      "rubric": "Compass rose orientation, clear legend symbols (fire exits/extinguishers), sequential directional arrows, safe assembly zone (4 Marks)."
    }
  },
  {
    "id": "la23",
    "num": 23,
    "unit": "Unit 6: Craft, Shelter & Environment",
    "title": "A Beautiful Cloth",
    "subtitle": "Sajida's Dupatta: Traditional Textile Printing, Block Printing, Tie & Dye, and Embroidery",
    "concepts": [
      "The beauty of Indian textiles: Sajida's dupatta with golden zari embroidery and mirror-work.",
      "Block printing: Carving wooden stamps or using sliced vegetables (ladyfinger, onion, potato) dipped in paint to create geometric patterns.",
      "Tie and Dye (Bandhani): Tying cloth tightly with strings before dyeing to create sunburst circular patterns.",
      "Natural textile dyes: Turmeric for yellow, beetroot for pink, indigo for deep blue, and spinach for green."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fdf2f8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">A Beautiful Cloth — Traditional Printing &amp; Natural Dyeing</text>\n      <!-- Embroidered Dupatta with Mirrors -->\n      <rect x=\"70\" y=\"60\" width=\"100\" height=\"50\" fill=\"#f43f5e\" rx=\"4\"/>\n      <circle cx=\"85\" cy=\"75\" r=\"4\" fill=\"#ffffff\" stroke=\"#fde047\" stroke-width=\"1.5\"/><circle cx=\"120\" cy=\"75\" r=\"4\" fill=\"#ffffff\" stroke=\"#fde047\" stroke-width=\"1.5\"/><circle cx=\"155\" cy=\"75\" r=\"4\" fill=\"#ffffff\" stroke=\"#fde047\" stroke-width=\"1.5\"/>\n      <circle cx=\"102\" cy=\"95\" r=\"4\" fill=\"#ffffff\" stroke=\"#fde047\" stroke-width=\"1.5\"/><circle cx=\"137\" cy=\"95\" r=\"4\" fill=\"#ffffff\" stroke=\"#fde047\" stroke-width=\"1.5\"/>\n      <text x=\"120\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9f1239\" text-anchor=\"middle\">Sajida's Mirror Dupatta</text>\n      <!-- Ladyfinger Block Printing -->\n      <circle cx=\"260\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"260\" y=\"86\" font-size=\"20\" text-anchor=\"middle\">🌸💮</text>\n      <text x=\"260\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Vegetable Block Print</text>\n      <!-- Bandhani (Tie & Dye) -->\n      <circle cx=\"390\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"390\" y=\"86\" font-size=\"20\" text-anchor=\"middle\">🟡🟠🔴</text>\n      <text x=\"390\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Bandhani (Tie &amp; Dye)</text>\n      <!-- Natural Dyes -->\n      <circle cx=\"500\" cy=\"80\" r=\"24\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><text x=\"500\" y=\"86\" font-size=\"16\" text-anchor=\"middle\">🎨🌱</text>\n      <text x=\"500\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Natural Herbal Dyes</text>\n    </svg>",
    "questions": [
      {
        "category": "Hands-on Textile Printing",
        "q": "How can children create beautiful repeating block-print patterns on paper using a sliced ladyfinger (okra)?",
        "ans": "1. Take a fresh ladyfinger and slice it across horizontally with a knife (under adult supervision) to expose its star-shaped pentagonal cross-section.<br>2. Mix water-based poster color or fabric paint in a shallow dish.<br>3. Dip the cut surface of the ladyfinger lightly into the paint and press it firmly onto plain paper or white cloth.<br>4. Repeat the stamping in straight lines, checkerboards, or flower circles to produce elegant, rhythmic floral prints.",
        "marks": 3,
        "rubric": [
          {
            "key": "Preparation of the cross-section stamp",
            "marks": "1 Mark"
          },
          {
            "key": "Dipping and stamping technique for repeating patterns",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Tie & Dye Technique",
        "q": "Explain the basic principle behind the traditional Indian craft of Bandhani (Tie & Dye).",
        "ans": "Bandhani is a 'resist-dyeing' craft: Artisans pinch small portions of fine cotton or silk cloth and tie them tightly with waxed thread before dipping the fabric into a pot of bright dye. The tightly knotted sections 'resist' the liquid color and remain pristine white. When untied and dried, vibrant circular sunburst rings appear across the dyed background.",
        "marks": 3,
        "rubric": [
          {
            "key": "Concept of resist-dyeing using tight knots",
            "marks": "1.5 Marks"
          },
          {
            "key": "Formation of characteristic sunburst rings and patterns",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Natural Colors",
        "q": "Name two kitchen ingredients that can be used to prepare natural chemical-free textile dyes.",
        "ans": "1. <strong>Turmeric Powder (Haldi):</strong> Produces brilliant warm yellow and golden tones.<br>2. <strong>Beetroot Juice / Pomegranate Peels:</strong> Produces deep reddish-pink and earthy rust tones.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two correct natural plant dye sources with resulting colors",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Textile Art • Sajida's Dupatta",
        "q": "In 'A Beautiful Cloth':<br>(a) What was special about the dupatta Sajida's sister gave her?<br>(b) In how many different ways did children drape the long unstitched dupatta in class?",
        "ans": "<strong>Textile Traditions:</strong><br><strong>(a) Sajida's Dupatta:</strong><br>• It was made of fine, soft cotton cloth with beautiful colorful floral embroidery and tiny glittering mirrors (aari-tari work) stitched all over it.<br><br><strong>(b) Draping Ways:</strong><br>• Children draped it as a <strong>sari</strong>, a <strong>turban (pagri)</strong>, a <strong>dupatta/scarf</strong>, a <strong>lungi / dhoti</strong>, and even tied it like a baby's hammock swing.",
        "marks": 3,
        "rubric": [
          {
            "key": "Mirror work and embroidery described",
            "marks": "1.5 M"
          },
          {
            "key": "Multiple unstitched draping styles listed",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Block Printing Activity • Vegetable Art",
        "q": "Explain how to print repeated patterns on cloth using a sliced ladyfinger (bhindi) or potato as described in the chapter.",
        "ans": "<strong>Vegetable Block Printing Steps:</strong><br>1. Cut a fresh ladyfinger (bhindi) horizontally in half across its middle; notice the natural 5-pointed floral star pattern formed by its seed chambers.<br>2. Dip the cut end lightly into a plate of thick fabric paint.<br>3. Stamp it firmly onto a plain cotton handkerchief or sheet of paper in repeating rows to print geometric floral borders.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cutting ladyfinger to expose star seed pattern",
            "marks": "1.5 M"
          },
          {
            "key": "Dipping in paint and stamping repeated border pattern",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Unstitched Garments • Indian Heritage",
        "q": "Name three traditional Indian garments that are worn as unstitched lengths of cloth without cutting or stitching with needles.",
        "ans": "<strong>Unstitched Indian Garments:</strong><br>1. <strong>Sari</strong> (worn by women across India)<br>2. <strong>Dhoti / Lungi / Veshti</strong> (worn by men)<br>3. <strong>Turban (Pagri / Safa)</strong> (worn on heads).",
        "marks": 3,
        "rubric": [
          {
            "key": "Three authentic unstitched Indian garments named",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Natural Dyes • Organic Colors",
        "q": "Name two natural plant sources used to dye fabrics before modern chemical colors were invented.",
        "ans": "<strong>Natural Dyes:</strong><br>1. <strong>Indigo (Neel plant)</strong>: Gives deep, rich royal blue color.<br>2. <strong>Turmeric (Haldi) & Marigold flowers</strong>: Gives vibrant yellow and orange colors.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two authentic plant-based dye sources named",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 23 ('A Beautiful Cloth'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Reviving Natural Organic Dyes over Toxic Synthetic Chemical Dyes",
      "text": "Fast-fashion textile factories discharge toxic synthetic chemical dyes into nearby rivers, turning waterways pitch-black and poisoning fish and agricultural soil.",
      "question": "Why should we encourage handloom weavers using natural herbal dyes over chemical-intensive synthetic textiles?",
      "answer": "Natural herbal dyes derived from plants (indigo, madder, turmeric) are non-toxic, hypoallergenic, and 100% biodegradable; their wastewater enriches garden soil rather than poisoning rivers. Furthermore, supporting handloom artisans who practice traditional wooden block printing keeps rural handicraft heritage thriving, generates dignified livelihoods in villages, and combats the environmental disaster of plastic-based fast fashion.",
      "rubric": "Ecological hazards of chemical dyes vs safety of organic plant dyes, preservation of handloom livelihoods (4 Marks)."
    }
  },
  {
    "id": "la24",
    "num": 24,
    "unit": "Unit 1: Animals & Habitats",
    "title": "Web of Life",
    "subtitle": "Ecological Harmony: Food Webs, Sun, Soil, Water, Air, Plants, Animals, and Human Coexistence",
    "concepts": [
      "The interconnectedness of all living and non-living elements: Sun, Air, Water, Soil, Plants, Animals, and Humans.",
      "Everything in nature is linked in a dynamic 'Web of Life'; removing even one thread affects all other members.",
      "How non-living abiotic factors (Sun, Water, Soil) provide the foundation for all living biotic organisms.",
      "Human responsibility: Protecting forests, preventing water pollution, and living in respectful equilibrium with nature."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Web of Life — The Great Interconnected Ecological Cycle</text>\n      <!-- Sun -->\n      <circle cx=\"80\" cy=\"80\" r=\"24\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"80\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">☀️</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Sun (Energy Source)</text>\n      <!-- Plants -->\n      <circle cx=\"180\" cy=\"80\" r=\"24\" fill=\"#86efac\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"180\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🌱</text>\n      <text x=\"180\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Plants (Producers)</text>\n      <!-- Herbivores / Animals -->\n      <circle cx=\"290\" cy=\"80\" r=\"24\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"290\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🐇🐄</text>\n      <text x=\"290\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Animals (Consumers)</text>\n      <!-- Water & Soil -->\n      <circle cx=\"400\" cy=\"80\" r=\"24\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"400\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">💧🪴</text>\n      <text x=\"400\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Soil &amp; Water</text>\n      <!-- Humans in Harmony -->\n      <circle cx=\"500\" cy=\"80\" r=\"24\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"2\"/><text x=\"500\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🧑‍🤝‍🧑</text>\n      <text x=\"500\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9d174d\" text-anchor=\"middle\">Humans (Protectors)</text>\n      <!-- Connecting Web Lines -->\n      <line x1=\"104\" y1=\"80\" x2=\"156\" y2=\"80\" stroke=\"#16a34a\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n      <line x1=\"204\" y1=\"80\" x2=\"266\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n      <line x1=\"314\" y1=\"80\" x2=\"376\" y2=\"80\" stroke=\"#0284c7\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n      <line x1=\"424\" y1=\"80\" x2=\"476\" y2=\"80\" stroke=\"#db2777\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    </svg>",
    "questions": [
      {
        "category": "Web of Life Concept",
        "q": "What is meant by the 'Web of Life'? How are plants, animals, and non-living elements tied together?",
        "ans": "The <strong>Web of Life</strong> describes the intricate, interdependent network of relationships connecting all living creatures (plants, animals, microorganisms, humans) with non-living environmental elements (sunlight, air, water, soil).<br>• The <strong>Sun</strong> powers plant photosynthesis.<br>• <strong>Plants</strong> absorb rainwater and soil minerals to synthesize food and oxygen.<br>• <strong>Herbivores</strong> eat plants, and <strong>carnivores</strong> prey on herbivores.<br>• When organisms die, decomposers return nutrients back to the <strong>soil</strong>, sustaining the eternal cycle.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of the ecological web connecting biotic and abiotic elements",
            "marks": "1.5 Marks"
          },
          {
            "key": "Cyclical flow: Sun ➔ Plants ➔ Animals ➔ Decomposers ➔ Soil",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Impact of Disruption",
        "q": "What would happen to the Web of Life if all green trees on Earth were cut down?",
        "ans": "If all green trees were destroyed:<br>1. Atmospheric oxygen would plummet while heat-trapping carbon dioxide would soar, causing runaway global heating.<br>2. Herbivorous animals would starve to death, causing carnivores to die out soon after.<br>3. Soil would wash away without tree roots to bind it, causing desertification and the total collapse of human civilization.",
        "marks": 3,
        "rubric": [
          {
            "key": "Oxygen/carbon dioxide collapse",
            "marks": "1 Mark"
          },
          {
            "key": "Food chain starvation",
            "marks": "1 Mark"
          },
          {
            "key": "Soil erosion and collapse of life",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Human Role as Stewards",
        "q": "Why are humans not 'owners' of the Earth, but rather 'caretakers' or 'trustees'?",
        "ans": "Humans are simply one thread woven into the vast web of life, completely dependent on clean air, fresh water, and plants for our very survival. As caretakers (custodians), it is our sacred responsibility to protect all species and pass down a healthy, vibrant planet to future generations.",
        "marks": 2,
        "rubric": [
          {
            "key": "Humans as dependent threads in the web rather than owners",
            "marks": "1 Mark"
          },
          {
            "key": "Stewardship and conservation responsibility",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Ecology & Interconnection • Web of Life",
        "q": "In 'Web of Life':<br>(a) What does a 'Food Web' show?<br>(b) Trace a simple 4-link food chain on land: Grass $\\rightarrow$ Grasshopper $\\rightarrow$ Frog $\\rightarrow$ Snake.",
        "ans": "<strong>Food Web Science:</strong><br><strong>(a) Definition:</strong><br>• A food web shows how all living organisms (plants, herbivores, carnivores, humans) and non-living elements (sun, water, soil) are connected together in nature for energy and survival.<br><br><strong>(b) 4-Link Food Chain:</strong><br>• <strong>Green Grass</strong> (uses sunlight to make food) $\\rightarrow$<br>• <strong>Grasshopper</strong> (eats grass) $\\rightarrow$<br>• <strong>Frog</strong> (eats grasshopper) $\\rightarrow$<br>• <strong>Snake</strong> (eats frog).",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of ecological interdependence",
            "marks": "1.5 M"
          },
          {
            "key": "Accurate 4-step linear food chain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Connecting String Activity • Classroom Ecosystem",
        "q": "In the textbook classroom game with a ball of string:<br>(a) Each child wears a badge of an animal, plant, sun, or water. How does the string connect them all?<br>(b) What happens when one child (like 'Forest') lets go of the string?",
        "ans": "<strong>String Game Insights:</strong><br><strong>(a) Interconnection:</strong><br>• The ball of string is passed from Sun to Grass, Grass to Deer, Deer to Tiger, Tiger to Soil, creating an intricate web of string where everyone is holding a piece.<br><br><strong>(b) Breakage of Balance:</strong><br>• When 'Forest' drops the string, the tension collapses, and all other connected children feel their strings sag. This visually demonstrates that if forests are destroyed, every animal, water source, and human is directly harmed.",
        "marks": 3,
        "rubric": [
          {
            "key": "Passing string creating visual web of life",
            "marks": "1.5 M"
          },
          {
            "key": "Ecosystem collapse demonstration explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Natural Elements • Non-Living Supporters of Life",
        "q": "Name three non-living elements of nature without which no plant or animal could survive.",
        "ans": "<strong>Non-Living Life Supporters:</strong><br>1. <strong>Sunlight (Sun):</strong> Ultimate source of heat and energy for plant photosynthesis.<br>2. <strong>Water:</strong> Essential for circulation, digestion, and life fluids in all cells.<br>3. <strong>Air (Oxygen):</strong> Essential for respiration in animals, humans, and plants.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sunlight, Water, and Air named with biological reasons",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Earth Pledge • Global Conservation",
        "q": "Why is human survival directly dependent on preserving wildlife and biodiversity?",
        "ans": "<strong>Biosphere Integrity:</strong><br>• Humans are not separate from nature; we are just one strand in the web of life. Forests provide our rainfall and oxygen, bees pollinate our crops, and rivers provide our drinking water. If nature is degraded, human civilization cannot survive.",
        "marks": 2,
        "rubric": [
          {
            "key": "Ecosystem services and human dependence on nature explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Observation Time • Animals and Habits",
        "q": "In Chapter 24 ('Web of Life'), what animals did the characters observe, and how do they move from place to place?",
        "ans": "<strong>Observations:</strong><br>Animals move in diverse ways adapted to their bodies:<br>• <strong>Birds (Crow, Pigeon):</strong> Fly using wings and hop on two feet.<br>• <strong>Mammals (Cow, Dog):</strong> Walk and run on four legs.<br>• <strong>Reptiles (Lizard, Snake):</strong> Crawl on walls or slither on the ground.<br>• <strong>Insects (Ant, Grasshopper):</strong> Walk on six legs and hop/fly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Birds, mammals, reptiles, insects movement",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Animal Habitats",
        "q": "Name two animals that live:<br>(a) On trees<br>(b) In water<br>(c) On land<br>(d) Underground in burrows.",
        "ans": "<strong>Habitats:</strong><br>• (a) On trees: <strong>Monkey, Squirrel, Owl</strong>.<br>• (b) In water: <strong>Fish, Frog, Crocodile</strong>.<br>• (c) On land: <strong>Horse, Elephant, Goat</strong>.<br>• (d) In burrows: <strong>Rabbit, Earthworm, Snake</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct examples for all 4 habitats",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Our Senses",
        "q": "How do our five sense organs help us understand and navigate our daily environment?",
        "ans": "<strong>Five Senses:</strong><br>1. <strong>Eyes:</strong> Help us see shapes, colours, and identify hazards.<br>2. <strong>Ears:</strong> Help us hear traffic horns, spoken words, and alarm sounds.<br>3. <strong>Nose:</strong> Helps us smell food, flowers, and detect smoke or gas leaks.<br>4. <strong>Tongue:</strong> Helps us taste sweet, sour, salty, and bitter food.<br>5. <strong>Skin:</strong> Helps us feel touch, heat, cold, roughness, and pain.",
        "marks": 3,
        "rubric": [
          {
            "key": "All 5 sense organs explained with functions",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Water Cycle & Weather • Rain and Clouds",
        "q": "Where does rainwater come from, and why do plants and trees look fresher and greener after a rain shower?",
        "ans": "<strong>Rain and Plant Health:</strong><br>• Rain comes from water evaporating from rivers, ponds, and seas, forming clouds in the sky that cool and condense into rain droplets.<br>• Rain washes off thick dust accumulated on leaves, unblocks stomata for breathing, and deeply soaks the roots with fresh mineral-rich moisture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water cycle / cloud formation",
            "marks": "1.5 M"
          },
          {
            "key": "Why plants look greener after rain",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Diversity • Regional Diets",
        "q": "Why do people living in Kerala eat more rice, fish, and coconut, while people in Punjab eat more wheat chapatis, mustard greens, and lassi?",
        "ans": "<strong>Regional Food Factors:</strong><br>• What people eat depends directly on <strong>what grows easily and abundantly in their climate and geography</strong>.<br>• Kerala has coastal climate, abundant rainfall, and coconut groves, making fish and rice staples.<br>• Punjab has fertile plains ideal for wheat and mustard cultivation, and a strong dairy culture.",
        "marks": 3,
        "rubric": [
          {
            "key": "Climate and agriculture connection",
            "marks": "1.5 M"
          },
          {
            "key": "Kerala and Punjab examples explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Cooking Methods • Kitchen Science",
        "q": "Match each food item to its primary method of cooking:<br>(a) Idli — (1) Frying<br>(b) Puri — (2) Steaming<br>(c) Roti — (3) Roasting on Tawa.",
        "ans": "<strong>Matching:</strong><br>• (a) Idli — <strong>(2) Steaming</strong><br>• (b) Puri — <strong>(1) Frying in oil</strong><br>• (c) Roti — <strong>(3) Roasting on Tawa</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Idli-Steaming, Puri-Frying, Roti-Roasting",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Shelter & Houses • Diversity in Homes",
        "q": "Why are houses in heavy-rainfall regions like Assam built on bamboo stilts with sloping roofs?",
        "ans": "<strong>Stilt Houses:</strong><br>• <strong>Bamboo Stilts:</strong> Keep the house 10 to 12 feet above ground level to prevent floodwaters and wild animals from entering.<br>• <strong>Sloping Roofs:</strong> Allow torrential rainwater to slide off quickly without accumulating or causing leaks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Reason for bamboo stilts (floods)",
            "marks": "1.5 M"
          },
          {
            "key": "Reason for sloping roof (rain runoff)",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Occupations",
        "q": "Identify the worker who:<br>(a) Mends our shoes<br>(b) Delivers letters and parcels<br>(c) Shapes clay into earthen pots on a wheel<br>(d) Treats sick people and prescribes medicines.",
        "ans": "<strong>Community Helpers:</strong><br>• (a) Mends shoes: <strong>Cobbler</strong><br>• (b) Delivers letters: <strong>Postman / Mail carrier</strong><br>• (c) Shapes clay pots: <strong>Potter</strong><br>• (d) Treats sick people: <strong>Doctor</strong>.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cobbler, Postman, Potter, Doctor",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Web of Life • Food Chain",
        "q": "What is the 'Web of Life'? Draw a simple food chain showing how grass, deer, and lion are connected.",
        "ans": "<strong>Web of Life & Food Chain:</strong><br>• The Web of Life shows that <strong>every living organism is interconnected and depends on others for survival</strong>.<br>• <strong>Food Chain:</strong> <strong>Sunlight → Grass (Producer) → Deer (Herbivore) → Lion (Carnivore)</strong>.<br>If grass disappears, deer starve; if deer disappear, lions cannot survive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of Web of Life",
            "marks": "1.5 M"
          },
          {
            "key": "Grass → Deer → Lion chain explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "Write True or False:<br>(a) Blind people can read books written in Braille script using their fingertips.<br>(b) Rainwater is the main natural source of fresh water on Earth.<br>(c) Animals do not have feelings and cannot communicate danger to each other.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Braille uses raised dots felt with fingertips.<br>• (b) <strong>True:</strong> Rain replenishes rivers, lakes, and groundwater.<br>• (c) <strong>False:</strong> Animals communicate through warning calls, scents, and body language to alert their group of predators.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with reasoning",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Synthesizing EVS Wisdom: Becoming Young Environmental Guardians",
      "text": "Having completed all 24 chapters of Class 3 EVS (exploring animals, plants, water, food, homes, crafts, and the web of life), students take a green pledge.",
      "question": "Synthesize the core message of Class 3 EVS by proposing four daily lifestyle commitments every young student can follow to protect our Earth's Web of Life.",
      "answer": "Every student can become a guardian of the Web of Life through four simple, daily commitments: (1) <strong>Water Conservation:</strong> Never let taps run idly; treat every drop as precious nectar. (2) <strong>Green Diet & Anti-Waste:</strong> Finish all food on the plate, enjoy seasonal nutritious fruits, and avoid single-use plastic wrappers. (3) <strong>Plant & Animal Compassion:</strong> Adopt a balcony sapling, feed neighborhood birds fresh water during summers, and treat street animals with gentleness. (4) <strong>Waste Segregation:</strong> Separate wet organic peels for garden composting and recycle scrap paper to save forest trees.",
      "rubric": "Synthesis across water, food, animal compassion, and waste reduction; practical student-led eco-habits (4 Marks)."
    }
  }
];

module.exports = { lookingAroundChapters };
