// scripts/builders/livingWorldPart1.js
// Class 2 EVS Track 1 (NEP 2020 Integrated): Our Living World & Nature
// Chapters 1 to 6: 100% Authentic NCERT EVS Questions with Step-by-Step Marking Rubrics

const livingWorldPart1 = [
  {
    id: "lwn1",
    num: 1,
    unit: "Unit 1: Our Living World",
    title: "My Wonderful Body & Five Senses",
    subtitle: "Eyes, Ears, Nose, Tongue, Skin and Sense Functions",
    concepts: ["External Body Parts (Head, Limbs, Trunk)", "Five Sense Organs and Their Functions", "Caring for Sense Organs", "Good Touch and Personal Safety"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #ecfdf5, #d1fae5);border-radius:12px;width:100%;height:auto;">
      <circle cx="150" cy="70" r="30" fill="#fed7aa"/>
      <circle cx="140" cy="65" r="4" fill="#1e293b"/>
      <circle cx="160" cy="65" r="4" fill="#1e293b"/>
      <ellipse cx="150" cy="75" rx="3" ry="5" fill="#f97316"/>
      <path d="M 142 85 Q 150 92 158 85" stroke="#ef4444" stroke-width="2" fill="none"/>
      <rect x="130" y="105" width="40" height="55" rx="6" fill="#3b82f6"/>
      <line x1="130" y1="115" x2="105" y2="140" stroke="#fed7aa" stroke-width="8" stroke-linecap="round"/>
      <line x1="170" y1="115" x2="195" y2="140" stroke="#fed7aa" stroke-width="8" stroke-linecap="round"/>
      <line x1="140" y1="160" x2="140" y2="190" stroke="#1e3a8a" stroke-width="8" stroke-linecap="round"/>
      <line x1="160" y1="160" x2="160" y2="190" stroke="#1e3a8a" stroke-width="8" stroke-linecap="round"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#065f46">My Wonderful Body & 5 Senses</text>
    </svg>`,
    cbq: {
      title: "Observing with Senses in a Garden",
      text: "Aman went for a morning walk in the botanical garden. He saw vibrant red roses, heard sweet cuckoo birds singing, smelled the sweet aroma of jasmine, tasted a sweet ripe berry, and felt the cool morning breeze on his cheeks.",
      question: "List each of the 5 senses Aman used in the garden along with the corresponding sense organ.",
      answer: "Aman used all five sense organs:\n1. Sight (Eyes) - Seeing vibrant red roses\n2. Hearing (Ears) - Listening to singing cuckoo birds\n3. Smell (Nose) - Inhaling the jasmine aroma\n4. Taste (Tongue) - Tasting the sweet ripe berry\n5. Touch (Skin) - Feeling the cool morning breeze.",
      rubric: [
        { key: "Correct identification of 5 sense organs", marks: 2 },
        { key: "Mapping each organ to the garden observation", marks: 1 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What are sense organs? Name the five sense organs present in our body.",
        ans: "Sense organs are special organs that help us perceive, observe, and understand the world around us. The five sense organs are:\n1. Eyes (Sight)\n2. Ears (Hearing)\n3. Nose (Smell)\n4. Tongue (Taste)\n5. Skin (Touch).",
        marks: 3,
        rubric: [
          { key: "Definition of sense organs", marks: 1 },
          { key: "Listing all 5 sense organs correctly", marks: 2 }
        ]
      },
      {
        category: "Find Out and Write",
        q: "Which sense organ covers our entire body, and what is its main function?",
        ans: "The skin covers our entire body. Its main function is the sense of touch; it helps us feel hot, cold, soft, hard, rough, smooth, and pain.",
        marks: 2,
        rubric: [
          { key: "Skin covers entire body", marks: 1 },
          { key: "Sense of touch (hot, cold, texture)", marks: 1 }
        ]
      },
      {
        category: "Taste Buds & Tongue",
        q: "What four primary tastes can our tongue identify?",
        ans: "Our tongue has taste buds that help us recognize:\n1. Sweet (e.g., sugar, mango)\n2. Salty (e.g., potato chips, salt)\n3. Sour (e.g., lemon, raw mango)\n4. Bitter (e.g., bitter gourd, neem).",
        marks: 2,
        rubric: [
          { key: "Listing 4 tastes: sweet, salty, sour, bitter", marks: 2 }
        ]
      },
      {
        category: "Eye Care & Hygiene",
        q: "Give two healthy habits to take proper care of our eyes.",
        ans: "Two healthy habits for eye care:\n1. Wash eyes gently with clean cold water daily.\n2. Do not watch television, tablet, or smartphone screens for too long or in a dark room.",
        marks: 2,
        rubric: [
          { key: "Washing with clean water", marks: 1 },
          { key: "Limiting screen time / proper lighting", marks: 1 }
        ]
      },
      {
        category: "Ear Care",
        q: "Why should we never put sharp or pointed objects inside our ears?",
        ans: "We should never insert hairpin, pencil, or sharp sticks into our ears because they can puncture or damage the delicate eardrum and cause permanent hearing loss.",
        marks: 2,
        rubric: [
          { key: "Delicate eardrum damage", marks: 1 },
          { key: "Risk of hearing loss", marks: 1 }
        ]
      },
      {
        category: "Body Movement",
        q: "Which parts of our body help us in walking, running, and jumping?",
        ans: "Our legs, knees, ankles, feet, and toes (lower limbs) help us walk, run, and jump.",
        marks: 2,
        rubric: [
          { key: "Legs, knees, feet", marks: 2 }
        ]
      },
      {
        category: "Hands and Fingers",
        q: "Mention three daily activities that we do using our hands and fingers.",
        ans: "Activities done with hands and fingers:\n1. Writing with a pencil\n2. Holding a spoon to eat food\n3. Buttoning our shirt or tying shoelaces.",
        marks: 3,
        rubric: [
          { key: "Three valid daily activities", marks: 3 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the sense organ with its sensation:\n(a) Nose -> (i) Ringing bell\n(b) Eyes -> (ii) Hot tea cup\n(c) Skin -> (iii) Beautiful rainbow\n(d) Ears -> (iv) Fragrant perfume",
        ans: "(a) Nose -> (iv) Fragrant perfume\n(b) Eyes -> (iii) Beautiful rainbow\n(c) Skin -> (ii) Hot tea cup\n(d) Ears -> (i) Ringing bell.",
        marks: 2,
        rubric: [
          { key: "All 4 correct pairings", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) We smell with our ears.\n(b) Our tongue helps us speak clearly as well as taste food.\n(c) Skin protects the inner parts of our body.",
        ans: "(a) False (We smell with our nose).\n(b) True (Tongue helps in speech and taste).\n(c) True (Skin serves as a protective barrier).",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer with reason", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks with suitable words:\n(a) We have ________ (two / five) sense organs.\n(b) Our ________ (eyebrows / nails) protect our eyes from sweat and dust.\n(c) When we catch a cold, our sense of ________ (hearing / smell) becomes weak.",
        ans: "(a) five\n(b) eyebrows\n(c) smell.",
        marks: 3,
        rubric: [
          { key: "1 mark for each correct blank", marks: 3 }
        ]
      },
      {
        category: "Personal Safety (Life Skill)",
        q: "What should you do if someone gives you an uncomfortable or bad touch?",
        ans: "If someone gives an uncomfortable or bad touch, you should:\n1. Say a firm and loud 'NO!'\n2. Run away from that person immediately.\n3. Tell your parents or trusted teacher right away.",
        marks: 2,
        rubric: [
          { key: "Say NO and move away", marks: 1 },
          { key: "Inform parents/teacher immediately", marks: 1 }
        ]
      },
      {
        category: "Give Two Examples",
        q: "Give two examples each of:\n(a) Things that have a pleasant smell\n(b) Things that have an unpleasant (bad) smell.",
        ans: "(a) Pleasant smell: Rose flower, sandalwood incense, baking cookies.\n(b) Unpleasant smell: Garbage heap, open sewage drain, rotten eggs.",
        marks: 2,
        rubric: [
          { key: "Two pleasant smell examples", marks: 1 },
          { key: "Two bad smell examples", marks: 1 }
        ]
      },
      {
        category: "Special Senses",
        q: "How do visually challenged (blind) people read books?",
        ans: "Visually challenged people use their sense of touch to read 'Braille' script, which consists of raised dots felt with finger pads.",
        marks: 2,
        rubric: [
          { key: "Sense of touch", marks: 1 },
          { key: "Braille script / raised dots", marks: 1 }
        ]
      },
      {
        category: "Scientific Reasoning",
        q: "Why do we close our eyes tightly when a sudden bright light falls on them?",
        ans: "It is an automatic reflex action to protect the delicate retina of our eyes from sudden intense light damage.",
        marks: 2,
        rubric: [
          { key: "Reflex protection", marks: 1 },
          { key: "Preventing damage to retina", marks: 1 }
        ]
      },
      {
        category: "Vocabulary & Spelling",
        q: "Unscramble the letters to find the body part name:\n(a) K E N C\n(b) B L O W E\n(c) N E E K",
        ans: "(a) NECK\n(b) ELBOW\n(c) KNEE.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct unscrambled word", marks: 3 }
        ]
      }
    ]
  },
  {
    id: "lwn2",
    num: 2,
    unit: "Unit 1: Our Living World",
    title: "My Family and Loving Home",
    subtitle: "Nuclear and Joint Families, Helping at Home, Rooms in a House",
    concepts: ["Types of Families (Nuclear, Joint, Single Parent)", "Family Tree and Relationships", "Sharing Chores and Helping Elders", "Rooms in a House and Their Functions"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fef3c7, #fde68a);border-radius:12px;width:100%;height:auto;">
      <polygon points="150,40 60,95 240,95" fill="#dc2626"/>
      <rect x="80" y="95" width="140" height="85" fill="#fef08a"/>
      <rect x="135" y="130" width="30" height="50" fill="#78350f"/>
      <rect x="95" y="110" width="25" height="25" fill="#38bdf8"/>
      <rect x="180" y="110" width="25" height="25" fill="#38bdf8"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#92400e">My Loving Family & Home</text>
    </svg>`,
    cbq: {
      context: "Sneha lives in a big house with her grandfather, grandmother, father, mother, uncle (chacha), aunt (chachi), and two cousins. Every evening, all family members sit together, share meals, and grandfather tells bedtime stories.",
      question: "What kind of family does Sneha have? State two advantages of living in such a family.",
      answer: "Sneha lives in a 'Joint Family' (Extended family).\nTwo advantages:\n1. Children learn values of sharing, caring, and respecting elders from grandparents.\n2. Family members support and help each other during difficult times and celebrate festivals together with joy.",
      rubric: [
        { key: "Identifying joint family", marks: 1 },
        { key: "Two valid advantages (sharing/caring/support)", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is a family? Differentiate between a nuclear family and a joint family.",
        ans: "A family is a group of people related to each other who live together under one roof.\n• Nuclear Family: A small family consisting of parents and their children.\n• Joint Family: A large family where grandparents, parents, uncles, aunts, and cousins live together.",
        marks: 3,
        rubric: [
          { key: "Definition of family", marks: 1 },
          { key: "Nuclear family definition", marks: 1 },
          { key: "Joint family definition", marks: 1 }
        ]
      },
      {
        category: "Family Relationships",
        q: "What do you call the following relations in English?\n(a) Father's father\n(b) Mother's mother\n(c) Uncle's children\n(d) Father's brother",
        ans: "(a) Father's father - Paternal Grandfather\n(b) Mother's mother - Maternal Grandmother\n(c) Uncle's children - Cousins\n(d) Father's brother - Paternal Uncle.",
        marks: 2,
        rubric: [
          { key: "All 4 correct family relations", marks: 2 }
        ]
      },
      {
        category: "Helping at Home",
        q: "How can young children help their parents at home? Mention three simple chores.",
        ans: "Children can help at home by:\n1. Keeping their toys, books, and school bag in proper places.\n2. Setting the dining table before meals and watering indoor potted plants.\n3. Making their own bed and keeping their clothes folded.",
        marks: 3,
        rubric: [
          { key: "Three practical household chores", marks: 3 }
        ]
      },
      {
        category: "Rooms in a House",
        q: "Name the rooms where we perform the following activities:\n(a) Cooking food\n(b) Taking a bath\n(c) Sleeping and resting\n(d) Entertaining guests",
        ans: "(a) Cooking food - Kitchen\n(b) Taking a bath - Bathroom\n(c) Sleeping and resting - Bedroom\n(d) Entertaining guests - Living room (Drawing room).",
        marks: 2,
        rubric: [
          { key: "Correct name for all 4 rooms", marks: 2 }
        ]
      },
      {
        category: "Need for a House",
        q: "Why do living beings need a house to live in?",
        ans: "Living beings need a house to protect themselves from:\n1. Extreme heat, cold wind, and heavy rain.\n2. Wild animals, insects, and thieves.",
        marks: 2,
        rubric: [
          { key: "Protection from weather elements", marks: 1 },
          { key: "Safety from animals/thieves", marks: 1 }
        ]
      },
      {
        category: "Clean House Habits",
        q: "State two things we must do to keep our house neat and hygienic.",
        ans: "To keep our house neat and clean:\n1. Sweep and mop floors daily and open windows to allow sunlight and fresh air.\n2. Throw waste only into covered dustbins.",
        marks: 2,
        rubric: [
          { key: "Mopping/sweeping and sunlight", marks: 1 },
          { key: "Using covered dustbins", marks: 1 }
        ]
      },
      {
        category: "Caring for Grandparents",
        q: "How should we treat our grandparents and elders at home?",
        ans: "We should treat our grandparents with love, care, and respect. We should spend time talking with them, help them bring water or medicines, and never speak rudely to them.",
        marks: 2,
        rubric: [
          { key: "Love, respect, and spending time", marks: 1 },
          { key: "Helping with daily tasks/medicines", marks: 1 }
        ]
      },
      {
        category: "Types of Houses",
        q: "What is the difference between a Kuchcha house and a Pucca house?",
        ans: "• Kuchcha House: Made of mud, straw, wood, and dry leaves (e.g., huts in villages); it is not very strong.\n• Pucca House: Made of bricks, cement, iron rods, and concrete (e.g., flats and bungalows in cities); it is permanent and strong.",
        marks: 3,
        rubric: [
          { key: "Kuchcha house materials and durability", marks: 1.5 },
          { key: "Pucca house materials and durability", marks: 1.5 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Only mother should do all the household work alone.\n(b) Sunshine inside the room kills harmful germs.\n(c) Our cousins are our uncle and aunt's children.",
        ans: "(a) False (All family members should share chores).\n(b) True (Sunlight is a natural germ killer).\n(c) True (Uncle and aunt's children are cousins).",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) A family tree always begins with our ________ (grandparents / friends).\n(b) Houses built on poles in places with heavy rain are called ________ (stilt / tent) houses.\n(c) Cooking is done in the ________ (kitchen / garage).",
        ans: "(a) grandparents\n(b) stilt\n(c) kitchen.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Special Houses",
        q: "What is an 'Igloo'? Who builds it and with what material?",
        ans: "An igloo is a dome-shaped house made of hard blocks of packed ice and snow. It is built by Inuits (Eskimos) in extremely cold polar regions.",
        marks: 2,
        rubric: [
          { key: "Dome-shaped ice block house", marks: 1 },
          { key: "Built by Inuits/Eskimos in polar areas", marks: 1 }
        ]
      },
      {
        category: "Manners at Home",
        q: "What magic words should we use at home when:\n(a) We want someone's help?\n(b) We receive a gift or help?\n(c) We make a mistake?",
        ans: "(a) 'Please'\n(b) 'Thank you'\n(c) 'Sorry'.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct magic word", marks: 3 }
        ]
      },
      {
        category: "House on Wheels",
        q: "What is a house on wheels called that can move from place to place?",
        ans: "A house on wheels is called a 'Caravan'.",
        marks: 1,
        rubric: [{ key: "Caravan", marks: 1 }]
      },
      {
        category: "Pests in House",
        q: "Name two unwanted animal pests that can enter our house if it is kept dirty.",
        ans: "Two unwanted pests: Cockroaches, houseflies (or rats, mosquitoes).",
        marks: 2,
        rubric: [{ key: "Two valid household pests", marks: 2 }]
      },
      {
        category: "Family Values",
        q: "Why is spending time with family important?",
        ans: "Spending time together strengthens the bond of love, creates happy memories, and teaches children good values and emotional security.",
        marks: 2,
        rubric: [{ key: "Strengthening love and emotional bonding", marks: 2 }]
      }
    ]
  },
  {
    id: "lwn3",
    num: 3,
    unit: "Unit 2: Plant Life Around Us",
    title: "Plants Around Us",
    subtitle: "Big Trees, Small Shrubs, Herbs, Creepers, Leaves and Flowers",
    concepts: ["Classification: Trees, Shrubs, Herbs, Climbers, Creepers", "Parts of a Plant (Root, Stem, Leaf, Flower, Fruit)", "Functions of Leaves and Roots", "Uses of Plants in Daily Life"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #f0fdf4, #dcfce7);border-radius:12px;width:100%;height:auto;">
      <rect x="0" y="170" width="300" height="30" fill="#a16207"/>
      <rect x="140" y="100" width="20" height="70" fill="#78350f"/>
      <circle cx="150" cy="75" r="45" fill="#16a34a"/>
      <circle cx="120" cy="85" r="30" fill="#22c55e"/>
      <circle cx="180" cy="85" r="30" fill="#15803d"/>
      <circle cx="150" cy="50" r="30" fill="#4ade80"/>
      <circle cx="135" cy="70" r="6" fill="#ef4444"/>
      <circle cx="165" cy="80" r="6" fill="#ef4444"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#14532d">Plants Around Us</text>
    </svg>`,
    cbq: {
      context: "Ravi visited a botanical park and saw various plants: a giant Banyan with thick brown trunk, a bushy Rose plant with thorny stems, a soft green Mint plant in a pot, a Grapevine climbing on a wooden stick, and a heavy Watermelon spreading on the ground.",
      question: "Classify each of the 5 plants Ravi saw into their correct plant categories.",
      answer: "Plant classification:\n1. Banyan - Tree (Tall with thick woody trunk)\n2. Rose - Shrub (Medium bushy plant with woody stems)\n3. Mint - Herb (Small plant with soft green stem)\n4. Grapevine - Climber (Weak stem needing support to climb)\n5. Watermelon - Creeper (Weak stem crawling on ground with heavy fruits).",
      rubric: [
        { key: "Correct category for each plant", marks: 2.5 },
        { key: "Brief characteristic justification", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is a 'Tree'? Give two examples of trees found in India.",
        ans: "A tree is a very big, tall, and strong plant with a thick, woody stem called the 'trunk'. Examples: Neem tree, Banyan tree (or Mango tree).",
        marks: 2,
        rubric: [
          { key: "Definition with woody trunk", marks: 1 },
          { key: "Two valid examples", marks: 1 }
        ]
      },
      {
        category: "Shrubs vs Herbs",
        q: "How are shrubs different from herbs? Give one example of each.",
        ans: "• Shrubs: Medium-sized bushy plants with thin, hard, woody stems branching near the ground (e.g., Rose, Hibiscus).\n• Herbs: Very small plants with soft, tender green stems; they live only for one season (e.g., Mint, Coriander, Spinach).",
        marks: 3,
        rubric: [
          { key: "Shrubs characteristics and example", marks: 1.5 },
          { key: "Herbs characteristics and example", marks: 1.5 }
        ]
      },
      {
        category: "Climbers and Creepers",
        q: "Why do climbers need support to grow upright, whereas creepers spread on the ground?",
        ans: "• Climbers have thin and weak stems; they use tendrils to wind around supports like walls or sticks to climb upward (e.g., Money plant, Pea).\n• Creepers also have weak stems, but they bear big, heavy fruits (like Pumpkin, Watermelon) so they crawl along the ground.",
        marks: 3,
        rubric: [
          { key: "Climber reason and example", marks: 1.5 },
          { key: "Creeper reason and example", marks: 1.5 }
        ]
      },
      {
        category: "Parts of a Plant",
        q: "Name the five main parts of a plant and state what the root does.",
        ans: "The five main parts are:\n1. Roots\n2. Stem\n3. Leaves\n4. Flowers\n5. Fruits.\nFunction of Root: Roots fix the plant firmly in the soil and absorb water and minerals from the ground.",
        marks: 3,
        rubric: [
          { key: "Listing 5 parts", marks: 1.5 },
          { key: "Function of roots", marks: 1.5 }
        ]
      },
      {
        category: "Kitchen of the Plant",
        q: "Why are green leaves called the 'kitchen' or 'food factory' of a plant?",
        ans: "Green leaves prepare food for the whole plant using sunlight, water, and carbon dioxide from air through the process of photosynthesis.",
        marks: 2,
        rubric: [
          { key: "Food preparation role", marks: 1 },
          { key: "Using sunlight, air, and water", marks: 1 }
        ]
      },
      {
        category: "Uses of Plants",
        q: "List four things we get from plants that we use daily.",
        ans: "Four things obtained from plants:\n1. Food (Fruits, vegetables, grains, pulses)\n2. Oxygen for breathing\n3. Wood for furniture and paper for books\n4. Medicines (Neem, Tulsi) and cotton for clothes.",
        marks: 4,
        rubric: [
          { key: "1 mark per correct daily plant product", marks: 4 }
        ]
      },
      {
        category: "Medicinal Plants",
        q: "Name two plants that are used as home medicines and state their benefits.",
        ans: "1. Tulsi: Its leaves relieve cough, cold, and sore throat.\n2. Neem: Its leaves and bark heal skin wounds and purify blood.",
        marks: 2,
        rubric: [
          { key: "Tulsi with use", marks: 1 },
          { key: "Neem with use", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the plant type with its example:\n(a) Tree -> (i) Money plant\n(b) Shrub -> (ii) Mango\n(c) Herb -> (iii) Cotton plant\n(d) Climber -> (iv) Coriander",
        ans: "(a) Tree -> (ii) Mango\n(b) Shrub -> (iii) Cotton plant\n(c) Herb -> (iv) Coriander\n(d) Climber -> (i) Money plant.",
        marks: 2,
        rubric: [
          { key: "All 4 correct pairs", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Banyan tree has roots hanging from its branches called prop roots.\n(b) Cactus plant grows in water bodies.\n(c) Leaves are green due to a substance called chlorophyll.",
        ans: "(a) True\n(b) False (Cactus grows in dry deserts)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct statement", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) The thick woody stem of a tree is called the ________ (trunk / root).\n(b) ________ (Water lily / Cactus) is an aquatic plant that floats on water.\n(c) Seeds are protected inside the ________ (fruit / leaf).",
        ans: "(a) trunk\n(b) Water lily\n(c) fruit.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct word", marks: 3 }
        ]
      },
      {
        category: "Life Cycle of Plant",
        q: "What does a tiny seed need to germinate into a healthy young plant?",
        ans: "A seed needs three essential things to germinate:\n1. Water (moisture)\n2. Air (oxygen)\n3. Warmth (sunlight).",
        marks: 3,
        rubric: [
          { key: "Water, Air, Warmth", marks: 3 }
        ]
      },
      {
        category: "Edible Plant Parts",
        q: "Which plant part do we eat when we consume:\n(a) Carrot\n(b) Spinach\n(c) Sugarcane\n(d) Apple?",
        ans: "(a) Carrot - Root\n(b) Spinach - Leaf\n(c) Sugarcane - Stem\n(d) Apple - Fruit.",
        marks: 2,
        rubric: [
          { key: "Correct plant part for all 4 foods", marks: 2 }
        ]
      },
      {
        category: "Environmental Value",
        q: "Why should we not pluck flowers and leaves unnecessarily from public gardens?",
        ans: "Plucking flowers damages plants, deprives butterflies and honeybees of nectar, and ruins the natural beauty for everyone.",
        marks: 2,
        rubric: [
          { key: "Hurts plant and pollinators", marks: 1 },
          { key: "Destroys beauty", marks: 1 }
        ]
      },
      {
        category: "Thorn Defense",
        q: "Why do plants like Rose and Cactus have sharp thorns?",
        ans: "Thorns protect the plant from grazing animals like goats and cows so they are not eaten up.",
        marks: 1,
        rubric: [{ key: "Protection from grazing animals", marks: 1 }]
      },
      {
        category: "Activity & Observation",
        q: "How can you show that plants give off clean oxygen?",
        ans: "When an aquatic plant (like Hydrilla) is kept in a glass of water under sunlight, small gas bubbles of oxygen can be observed rising to the surface.",
        marks: 2,
        rubric: [{ key: "Hydrilla experiment with rising bubbles", marks: 2 }]
      }
    ]
  },
  {
    id: "lwn4",
    num: 4,
    unit: "Unit 2: Plant Life Around Us",
    title: "Animal Friends & Birds",
    subtitle: "Wild Animals, Domestic Pets, Birds, Nests and Sounds",
    concepts: ["Classification: Wild, Domestic, Pet, Aquatic, Amphibian", "Food Habits: Herbivores, Carnivores, Omnivores", "Bird Features: Beaks, Feathers, Wings, Nests", "Animal Sounds and Shelters"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fef2f2, #fee2e2);border-radius:12px;width:100%;height:auto;">
      <ellipse cx="120" cy="120" rx="35" ry="20" fill="#78350f"/>
      <circle cx="85" cy="105" r="16" fill="#78350f"/>
      <circle cx="80" cy="100" r="3" fill="#fff"/>
      <polygon points="70,105 55,108 70,115" fill="#f59e0b"/>
      <path d="M 210 90 Q 235 60 250 85 Q 260 110 230 115 Z" fill="#3b82f6"/>
      <polygon points="260,95 275,98 260,102" fill="#ef4444"/>
      <circle cx="245" cy="85" r="3" fill="#000"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#991b1b">Animal Friends & Birds</text>
    </svg>`,
    cbq: {
      context: "During a school picnic to a wildlife sanctuary, students observed deer grazing grass, a tiger hunting in the dense forest, a bear eating berries as well as fish, and a duck swimming in the lake while walking on land.",
      question: "Based on their food and habitat, categorize these animals into herbivores, carnivores, omnivores, and amphibians.",
      answer: "Categorization:\n1. Deer - Herbivore (Eats only plants and grass)\n2. Tiger - Carnivore (Eats only flesh of other animals)\n3. Bear - Omnivore (Eats both plants/fruits and meat/fish)\n4. Duck - Water bird / Amphibious habitat (swims in water and walks on land).",
      rubric: [
        { key: "Correct diet category for deer, tiger, bear", marks: 2 },
        { key: "Habit/habitat for duck", marks: 1 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is the difference between wild animals and domestic animals? Give two examples of each.",
        ans: "• Wild Animals: Live naturally in forests and jungles; find their own food and shelter (e.g., Lion, Elephant, Zebra).\n• Domestic Animals: Reared by humans on farms or homes for milk, wool, and work (e.g., Cow, Sheep, Horse).",
        marks: 3,
        rubric: [
          { key: "Wild animals definition and examples", marks: 1.5 },
          { key: "Domestic animals definition and examples", marks: 1.5 }
        ]
      },
      {
        category: "Food Habits",
        q: "Define Herbivores, Carnivores, and Omnivores with one example of each.",
        ans: "1. Herbivores: Plant-eating animals (e.g., Cow, Deer, Elephant).\n2. Carnivores: Flesh-eating animals (e.g., Lion, Tiger, Leopard).\n3. Omnivores: Animals that eat both plants and meat (e.g., Bear, Crow, Human).",
        marks: 3,
        rubric: [
          { key: "Herbivore definition and example", marks: 1 },
          { key: "Carnivore definition and example", marks: 1 },
          { key: "Omnivore definition and example", marks: 1 }
        ]
      },
      {
        category: "Features of Birds",
        q: "What physical features help a bird to fly in the air?",
        ans: "Birds can fly because:\n1. They have lightweight, hollow bones and streamlined boat-shaped bodies.\n2. They have strong wings covered with flight feathers.",
        marks: 2,
        rubric: [
          { key: "Hollow bones / streamlined body", marks: 1 },
          { key: "Wings and flight feathers", marks: 1 }
        ]
      },
      {
        category: "Flightless Birds",
        q: "Name two birds that cannot fly high in the sky.",
        ans: "Two flightless or low-flying birds: Ostrich, Penguin (or Kiwi, Hen).",
        marks: 2,
        rubric: [{ key: "Two valid flightless birds", marks: 2 }]
      },
      {
        category: "Animal Homes",
        q: "Where do the following animals live?\n(a) Horse\n(b) Lion\n(c) Honeybee\n(d) Bird",
        ans: "(a) Horse - Stable\n(b) Lion - Den\n(c) Honeybee - Beehive\n(d) Bird - Nest.",
        marks: 2,
        rubric: [
          { key: "All 4 correct animal shelters", marks: 2 }
        ]
      },
      {
        category: "Animal Sounds",
        q: "Match each animal with the sound it makes:\n(a) Dog -> (i) Roar\n(b) Cat -> (ii) Neigh\n(c) Lion -> (iii) Bark\n(d) Horse -> (iv) Meow",
        ans: "(a) Dog -> (iii) Bark\n(b) Cat -> (iv) Meow\n(c) Lion -> (i) Roar\n(d) Horse -> (ii) Neigh.",
        marks: 2,
        rubric: [
          { key: "All 4 correct sound matches", marks: 2 }
        ]
      },
      {
        category: "Animal Babies",
        q: "What are the young ones (babies) of these animals called?\n(a) Cow\n(b) Dog\n(c) Cat\n(d) Hen",
        ans: "(a) Cow - Calf\n(b) Dog - Puppy\n(c) Cat - Kitten\n(d) Hen - Chick.",
        marks: 2,
        rubric: [
          { key: "All 4 correct baby names", marks: 2 }
        ]
      },
      {
        category: "Aquatic Animals",
        q: "What are aquatic animals? Name two animals that live in water.",
        ans: "Animals that live in water are called aquatic animals. Examples: Fish, Octopus, Whale, Dolphin.",
        marks: 2,
        rubric: [
          { key: "Definition of aquatic animals", marks: 1 },
          { key: "Two valid examples", marks: 1 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Frogs can live both on land and in water (amphibian).\n(b) Birds have sharp teeth to chew food.\n(c) Elephants have large ears like fans to keep themselves cool.",
        ans: "(a) True\n(b) False (Birds do not have teeth; they have beaks)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) The ________ (Blue Whale / Giraffe) is the largest animal on Earth.\n(b) The ________ (Cheetah / Snail) is the fastest land animal.\n(c) Sheep give us ________ (wool / milk) to make winter sweaters.",
        ans: "(a) Blue Whale\n(b) Cheetah\n(c) wool.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Bird Beaks",
        q: "Why do different birds have different shapes of beaks?",
        ans: "Different birds have different beaks depending on the food they eat. For example:\n• Parrot has a curved hooked beak to crack nuts.\n• Duck has a broad flat beak with strainers to catch insects in water.",
        marks: 2,
        rubric: [
          { key: "Adapted to food habits", marks: 1 },
          { key: "Valid example (Parrot or Duck)", marks: 1 }
        ]
      },
      {
        category: "Useful Animal Products",
        q: "Mention three food items that we get from animals.",
        ans: "Three animal food items:\n1. Milk (from cows, buffaloes, goats)\n2. Eggs (from hens and ducks)\n3. Honey (from honeybees).",
        marks: 3,
        rubric: [
          { key: "1 mark per item with source", marks: 3 }
        ]
      },
      {
        category: "Kindness to Animals",
        q: "How can we show compassion and love towards street dogs and stray animals?",
        ans: "We should provide them fresh water in summer, never throw stones or hit them with sticks, and give leftover bread or dog food.",
        marks: 2,
        rubric: [
          { key: "Giving water and food", marks: 1 },
          { key: "Not hurting/hitting them", marks: 1 }
        ]
      },
      {
        category: "National Bird",
        q: "Name the national bird of India and describe its appearance.",
        ans: "The Peacock is the national bird of India. It has a beautiful crested head, metallic blue neck, and long, magnificent iridescent green-blue feathers with eye spots that it fans out when it dances.",
        marks: 2,
        rubric: [
          { key: "Peacock", marks: 1 },
          { key: "Description of feathers and neck", marks: 1 }
        ]
      },
      {
        category: "Insects Around Us",
        q: "How many legs do insects usually have? Give two examples of common insects.",
        ans: "Insects usually have 6 legs (three pairs) and often have wings. Examples: Butterfly, Ant, Mosquito, Housefly.",
        marks: 2,
        rubric: [
          { key: "6 legs", marks: 1 },
          { key: "Two valid examples", marks: 1 }
        ]
      }
    ]
  },
  {
    id: "lwn5",
    num: 5,
    unit: "Unit 3: Sustaining Life & Health",
    title: "Food We Eat & Healthy Habits",
    subtitle: "Meals of the Day, Fruits, Vegetables, Milk & Hygiene",
    concepts: ["Need for Food (Energy, Growth, Health)", "Three Food Groups (Energy-giving, Body-building, Protective)", "Three Main Meals (Breakfast, Lunch, Dinner)", "Healthy Eating Habits and Table Manners"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fffbeb, #fef3c7);border-radius:12px;width:100%;height:auto;">
      <ellipse cx="150" cy="115" rx="90" ry="45" fill="#f8fafc" stroke="#cbd5e1" stroke-width="4"/>
      <ellipse cx="150" cy="115" rx="75" ry="35" fill="#f1f5f9"/>
      <circle cx="120" cy="115" r="18" fill="#facc15"/>
      <circle cx="155" cy="105" r="14" fill="#22c55e"/>
      <circle cx="175" cy="120" r="12" fill="#ef4444"/>
      <ellipse cx="140" cy="130" rx="15" ry="8" fill="#d97706"/>
      <text x="150" y="30" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#92400e">Food We Eat & Healthy Habits</text>
    </svg>`,
    cbq: {
      context: "Rohan loves eating chips, burger, and drinking sweet cola every day. He skips breakfast and drinks very little milk or water. Lately, he feels lethargic, gets stomach aches, and cannot run fast in games period.",
      question: "Why is Rohan feeling weak and unwell? What changes should he make to have a balanced diet?",
      answer: "Rohan is eating 'junk food' which lacks vital vitamins, minerals, and proteins, causing weakness and digestive trouble. To improve his health, he should:\n1. Eat freshly cooked homemade meals including dal, green vegetables, chapatis, and fresh fruits.\n2. Drink 1-2 glasses of milk daily and plenty of clean water.\n3. Avoid daily junk foods and carbonated drinks.",
      rubric: [
        { key: "Identifying harmful effects of junk food", marks: 1 },
        { key: "Suggesting balanced homemade food and milk", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "Why do our bodies need food every day?",
        ans: "Our bodies need food because:\n1. It gives us energy to work, play, and study.\n2. It helps us grow tall and strong.\n3. It protects us from diseases and keeps us healthy.",
        marks: 3,
        rubric: [
          { key: "Energy to work and play", marks: 1 },
          { key: "Growth of body", marks: 1 },
          { key: "Protection from sickness", marks: 1 }
        ]
      },
      {
        category: "Food Groups",
        q: "Name the three main food groups and give one example of each.",
        ans: "1. Energy-giving foods: Carbohydrates and fats (e.g., Rice, Potato, Bread, Butter).\n2. Body-building foods: Proteins that build muscles and bones (e.g., Milk, Pulses/Dal, Eggs, Paneer).\n3. Protective foods: Vitamins and minerals that fight sickness (e.g., Fresh fruits and Green leafy vegetables).",
        marks: 3,
        rubric: [
          { key: "Energy-giving with example", marks: 1 },
          { key: "Body-building with example", marks: 1 },
          { key: "Protective with example", marks: 1 }
        ]
      },
      {
        category: "Complete Food",
        q: "Why is milk called a 'complete food' for growing children?",
        ans: "Milk contains calcium, proteins, vitamins, and minerals that build strong bones, bright teeth, and healthy muscles, which is why it is called a complete food.",
        marks: 2,
        rubric: [
          { key: "Calcium and protein content", marks: 1 },
          { key: "Strong bones and teeth", marks: 1 }
        ]
      },
      {
        category: "Meals of the Day",
        q: "What are the three main meals of the day, and when are they eaten?",
        ans: "The three main meals are:\n1. Breakfast - Eaten in the morning to start the day.\n2. Lunch - Eaten in the afternoon.\n3. Dinner - Eaten at night with family.",
        marks: 3,
        rubric: [
          { key: "1 mark per meal with correct time", marks: 3 }
        ]
      },
      {
        category: "Vegetarian vs Non-Vegetarian",
        q: "Differentiate between a vegetarian diet and a non-vegetarian diet.",
        ans: "• Vegetarian: People who eat plant foods (grains, pulses, vegetables, fruits) and dairy products (milk, curd, paneer).\n• Non-Vegetarian: People who also eat animal meat, chicken, fish, and eggs.",
        marks: 2,
        rubric: [
          { key: "Vegetarian definition", marks: 1 },
          { key: "Non-vegetarian definition", marks: 1 }
        ]
      },
      {
        category: "Raw and Cooked Food",
        q: "Give two examples of foods that can be eaten raw and two foods that must be cooked.",
        ans: "• Eaten Raw: Apple, Cucumber, Carrot, Tomato (as salad).\n• Must be Cooked: Rice, Wheat flour (chapati), Dal (lentils), Potato.",
        marks: 2,
        rubric: [
          { key: "Two raw foods", marks: 1 },
          { key: "Two cooked foods", marks: 1 }
        ]
      },
      {
        category: "Healthy Eating Habits",
        q: "Mention four good eating habits that everyone should follow.",
        ans: "Four good eating habits:\n1. Wash hands with soap before and after eating meals.\n2. Chew food slowly and properly; do not talk with food in your mouth.\n3. Eat meals at fixed regular times daily.\n4. Never waste food on your plate; take only what you can finish.",
        marks: 4,
        rubric: [
          { key: "1 mark per valid eating habit", marks: 4 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the food with its nutritional benefit:\n(a) Spinach -> (i) Quick energy\n(b) Dal / Pulses -> (ii) Strong bones & teeth\n(c) Banana -> (iii) Good eyesight (iron & vitamins)\n(d) Milk -> (iv) Muscle repair (protein)",
        ans: "(a) Spinach -> (iii) Good eyesight (iron & vitamins)\n(b) Dal / Pulses -> (iv) Muscle repair (protein)\n(c) Banana -> (i) Quick energy\n(d) Milk -> (ii) Strong bones & teeth.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Junk food like pizza and chips gives our body all essential vitamins.\n(b) Drinking 6 to 8 glasses of water every day helps in digestion.\n(c) Uncovered street food can have flies and cause diseases like cholera.",
        ans: "(a) False\n(b) True\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) We should eat a ________ (balanced / junk) diet to stay fit.\n(b) Rice and wheat are called ________ (grains / spices).\n(c) Eating too many sweets and chocolates can damage our ________ (teeth / hair).",
        ans: "(a) balanced\n(b) grains\n(c) teeth.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Water Importance",
        q: "Why is drinking clean water essential along with food?",
        ans: "Water helps in digesting food, absorbing nutrients, removing body waste through urine and sweat, and regulating our body temperature.",
        marks: 2,
        rubric: [
          { key: "Digestion and nutrient absorption", marks: 1 },
          { key: "Waste removal and temperature control", marks: 1 }
        ]
      },
      {
        category: "Table Manners",
        q: "What is an important table manner when eating with family or guests?",
        ans: "We should sit up straight, wait until everyone is served before eating, chew with our mouth closed, and say 'Thank you' to the person who cooked the meal.",
        marks: 2,
        rubric: [{ key: "Mouth closed and courtesy to cook/family", marks: 2 }]
      },
      {
        category: "Food Preservation",
        q: "Why do we keep milk and cooked vegetables inside a refrigerator?",
        ans: "The low cold temperature inside the refrigerator slows down the growth of bacteria and prevents food from spoiling.",
        marks: 1,
        rubric: [{ key: "Prevents spoilage by slowing bacterial growth", marks: 1 }]
      },
      {
        category: "Dairy Products",
        q: "Name three delicious foods prepared from milk.",
        ans: "Three dairy products: Curd (yogurt), Butter, Cheese (or Paneer, Ice cream).",
        marks: 2,
        rubric: [{ key: "Three valid milk products", marks: 2 }]
      },
      {
        category: "Say No to Waste",
        q: "Why is it important not to waste food?",
        ans: "Farmers work hard under the hot sun for months to grow food crops. Many poor people do not get even one square meal a day, so wasting food is disrespectful and unkind.",
        marks: 2,
        rubric: [
          { key: "Farmer's hard labor", marks: 1 },
          { key: "Respect for resources and needy people", marks: 1 }
        ]
      }
    ]
  },
  {
    id: "lwn6",
    num: 6,
    unit: "Unit 3: Sustaining Life & Health",
    title: "Water in Our Daily Lives",
    subtitle: "Sources of Water (Rain, Rivers, Taps), Uses & Saving Water",
    concepts: ["Natural and Man-made Sources of Water", "Uses of Water (Drinking, Cooking, Cleaning, Plants)", "Three Forms of Water (Solid Ice, Liquid Water, Water Vapor)", "Water Conservation and Rainwater Harvesting"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #e0f2fe, #bae6fd);border-radius:12px;width:100%;height:auto;">
      <path d="M 0 140 Q 75 120 150 140 T 300 135 L 300 200 L 0 200 Z" fill="#0284c7"/>
      <path d="M 0 160 Q 75 145 150 160 T 300 155 L 300 200 L 0 200 Z" fill="#0369a1"/>
      <path d="M 150 50 C 130 85 110 110 150 125 C 190 110 170 85 150 50 Z" fill="#38bdf8"/>
      <text x="150" y="30" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#075985">Water in Our Daily Lives</text>
    </svg>`,
    cbq: {
      context: "While brushing his teeth, Kabir leaves the tap running continuously, wasting two buckets of fresh water every morning. His sister Meera noticed this and explained that clean drinking water is precious and scarce in many villages where girls walk miles to fetch a pot of water.",
      question: "How much water did Kabir waste, and what simple habit should he adopt to save water while brushing?",
      answer: "Kabir wasted about 20-30 liters of clean drinking water every day. He should adopt the habit of turning off the tap while brushing and using a small mug or glass of water to rinse his mouth, which saves gallons of water.",
      rubric: [
        { key: "Recognizing significant water wastage", marks: 1 },
        { key: "Suggesting mug/glass method and turning off tap", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is the main natural source of freshwater on Earth?",
        ans: "Rain is the main natural source of freshwater on Earth.",
        marks: 1,
        rubric: [{ key: "Rain", marks: 1 }]
      },
      {
        category: "Sources of Water",
        q: "Name two natural sources and two man-made sources of water.",
        ans: "• Natural sources: Rain, Rivers, Lakes, Waterfalls, Ponds.\n• Man-made sources: Wells, Tube-wells, Handpumps, Dams, Water taps.",
        marks: 2,
        rubric: [
          { key: "Two natural sources", marks: 1 },
          { key: "Two man-made sources", marks: 1 }
        ]
      },
      {
        category: "Uses of Water",
        q: "List five important uses of water in our everyday life.",
        ans: "Five uses of water:\n1. Drinking to quench thirst\n2. Cooking meals\n3. Bathing and brushing teeth\n4. Washing clothes and cleaning dishes\n5. Watering crops and plants.",
        marks: 3,
        rubric: [
          { key: "Listing 5 valid uses", marks: 3 }
        ]
      },
      {
        category: "Three Forms of Water",
        q: "What are the three states (forms) of water? Give one example of each.",
        ans: "1. Solid form: Ice, snow, hail\n2. Liquid form: Drinking water, rain\n3. Gas (Vapor) form: Steam, water vapor in air.",
        marks: 3,
        rubric: [
          { key: "Solid state with example", marks: 1 },
          { key: "Liquid state with example", marks: 1 },
          { key: "Gas state with example", marks: 1 }
        ]
      },
      {
        category: "Clean Drinking Water",
        q: "Why should we never drink dirty or contaminated water?",
        ans: "Dirty water contains harmful germs and bacteria that can cause serious water-borne diseases like diarrhea, typhoid, cholera, and jaundice.",
        marks: 2,
        rubric: [
          { key: "Presence of harmful germs", marks: 1 },
          { key: "Causes water-borne diseases (diarrhea/typhoid)", marks: 1 }
        ]
      },
      {
        category: "Purifying Water at Home",
        q: "How can we make tap or well water safe for drinking at home?",
        ans: "We can make water safe by:\n1. Boiling water for 10-15 minutes to kill all germs.\n2. Using a modern water purifier (RO / UV filter).",
        marks: 2,
        rubric: [
          { key: "Boiling method", marks: 1 },
          { key: "Water filter / purifier", marks: 1 }
        ]
      },
      {
        category: "Saving Water (Conservation)",
        q: "Mention three ways you can save water at home.",
        ans: "Three ways to save water:\n1. Turn off taps tightly after use and fix dripping taps immediately.\n2. Bathe with a bucket and mug instead of using a shower.\n3. Reuse leftover water from washing vegetables to water garden plants.",
        marks: 3,
        rubric: [
          { key: "1 mark per practical water-saving tip", marks: 3 }
        ]
      },
      {
        category: "Sea Water vs River Water",
        q: "Why can't we drink sea or ocean water directly?",
        ans: "Sea and ocean water is very salty (saline) and contains a high amount of dissolved salts, which makes it unfit for drinking and cooking.",
        marks: 2,
        rubric: [
          { key: "Very salty/saline", marks: 1 },
          { key: "Unfit for drinking/cooking", marks: 1 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Plants can survive without water for months.\n(b) Ice melts into liquid water on heating.\n(c) Rainwater harvesting means collecting and storing rainwater for future use.",
        ans: "(a) False (Plants need water to make food and stay upright)\n(b) True\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) Water has no smell, color, or ________ (taste / weight).\n(b) We should use a ________ (bucket / shower) to save water while bathing.\n(c) Steam coming out of boiling water is water in the form of ________ (gas / solid).",
        ans: "(a) taste\n(b) bucket\n(c) gas.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Rainwater Harvesting",
        q: "What is rainwater harvesting, and why is it beneficial?",
        ans: "Rainwater harvesting is the process of collecting rainwater from rooftops and storing it in underground tanks or pits. It recharges groundwater levels and provides water during dry summer months.",
        marks: 2,
        rubric: [
          { key: "Collecting and storing rainwater", marks: 1 },
          { key: "Recharges groundwater / summer use", marks: 1 }
        ]
      },
      {
        category: "Animals and Water",
        q: "How do animals in the forest get water to drink?",
        ans: "Wild animals visit natural water holes, rivers, ponds, and streams in the forest to drink water and cool their bodies.",
        marks: 2,
        rubric: [{ key: "Rivers, streams, and water holes in forest", marks: 2 }]
      },
      {
        category: "Water Pollution",
        q: "Name two human activities that pollute rivers and ponds.",
        ans: "Two activities that pollute water:\n1. Dumping plastic waste and garbage into rivers.\n2. Washing clothes, bathing cattle, and releasing factory chemical waste into water bodies.",
        marks: 2,
        rubric: [{ key: "Dumping garbage/plastic and chemical waste", marks: 2 }]
      },
      {
        category: "Water Cycle in Nature",
        q: "What happens when the sun heats up water in lakes and rivers?",
        ans: "The heat of the sun turns lake and river water into invisible water vapor (evaporation), which rises up into the sky and forms clouds.",
        marks: 2,
        rubric: [
          { key: "Turns into water vapor (evaporation)", marks: 1 },
          { key: "Rises and forms clouds", marks: 1 }
        ]
      },
      {
        category: "Slogan Writing",
        q: "Write a catchy slogan to create awareness about saving water.",
        ans: "'Save Water, Save Life! Every Drop Counts!' (जल ही जीवन है, इसे व्यर्थ न बहाएँ!)",
        marks: 1,
        rubric: [{ key: "Creative and meaningful slogan", marks: 1 }]
      }
    ]
  }
];

module.exports = { livingWorldPart1 };
