// scripts/builders/mridangPart2.js
// NCERT Class 2 English: "Mridang" (NEP 2020 / NCF-FS) - Chapters 6 to 9
// Come Back Cat!, Between Home and School, This is My Town, Out in the Garden

const mridangPart2 = [
  {
    id: "mrd6", num: 6, unit: "Unit 3: Harmony",
    title: "Come Back, Cat!",
    subtitle: "Pet Care, Searching Spaces, Prepositions of Place & Love for Animals",
    concepts: [
      "Story comprehension: Meenu's pet cat Mittu goes missing, family searches everywhere.",
      "Mastering prepositions of position: in, on, under, behind, near, between.",
      "Pet care responsibilities: feeding, gentle handling, and creating safe pet shelters.",
      "Building emotional awareness and affection towards domestic animals."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><rect x="70" y="55" width="80" height="35" fill="#93c5fd" rx="4"/><circle cx="110" cy="40" r="14" fill="#f97316"/><text x="110" y="44" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">ON</text><rect x="210" y="45" width="80" height="20" fill="#64748b" rx="2"/><line x1="215" y1="65" x2="215" y2="90" stroke="#475569" stroke-width="4"/><line x1="285" y1="65" x2="285" y2="90" stroke="#475569" stroke-width="4"/><circle cx="250" cy="78" r="12" fill="#f97316"/><text x="250" y="82" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">UNDER</text><rect x="360" y="30" width="60" height="60" fill="#cbd5e1" rx="4"/><circle cx="430" cy="50" r="14" fill="#f97316"/><text x="430" y="54" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">BEHIND</text><text x="250" y="110" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Prepositions: ON the chair, UNDER the table, BEHIND the door</text></svg>`,
    cbq: {
      title: "Meenu's Missing Pet Search",
      text: "Meenu came home from school and called out 'Mittu! Mittu!'. Her white kitten did not appear. Meenu looked under the bed, but Mittu was not there. She checked inside the laundry basket, but found only towels. Finally, she heard a faint 'Meow!'. Mittu was sitting high on top of the terrace wall, batting at a yellow butterfly.",
      question: "Where did Meenu first look for Mittu? Where was Mittu actually found? Which prepositions show these locations?",
      answer: "1. Meenu first looked <strong>under the bed</strong>.<br>2. Mittu was found sitting <strong>on top of the terrace wall</strong>.<br>3. The prepositions of position used are <strong>'under'</strong> and <strong>'on'</strong>.",
      rubric: "1 M for under the bed + 1 M for terrace wall + 1 M for identifying prepositions"
    },
    questions: [
      {
        category: "Story Comprehension • The Problem",
        q: "Why was Meenu worried when she returned from school?",
        ans: "<strong>Answer:</strong><br>• Meenu was worried because her beloved pet cat, <strong>Mittu, was missing</strong> and did not come running to greet her when called.",
        marks: 2,
        rubric: [{ key: "Cat Mittu missing identified", marks: "1 M" }, { key: "Lack of usual greeting explained", marks: "1 M" }]
      },
      {
        category: "Prepositions • Fill in the Blanks",
        q: "Fill in with [in, on, under, behind]:<br>(a) The cat is sitting _______ the mat.<br>(b) The kitten is hiding _______ the bed.<br>(c) Milk is _______ the red bowl.<br>(d) The puppy hid _______ the curtain.",
        ans: "<strong>Answers:</strong><br>(a) The cat is sitting <strong>on</strong> the mat.<br>(b) The kitten is hiding <strong>under</strong> the bed.<br>(c) Milk is <strong>in</strong> the red bowl.<br>(d) The puppy hid <strong>behind</strong> the curtain.",
        marks: 4,
        rubric: [{ key: "(a) on", marks: "1 M" }, { key: "(b) under", marks: "1 M" }, { key: "(c) in", marks: "1 M" }, { key: "(d) behind", marks: "1 M" }]
      },
      {
        category: "Story Resolution • How Mittu Returned",
        q: "How did Meenu finally find Mittu?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Meenu heard a soft 'Meow!' from the terrace.<br>• She looked up and saw Mittu safely perched on the wall watching a butterfly, and gently carried her down.",
        marks: 2,
        rubric: [{ key: "Heard 'Meow!' sound", marks: "1 M" }, { key: "Found on terrace wall chasing butterfly", marks: "1 M" }]
      },
      {
        category: "Animal Care Responsibilities",
        q: "What two things should pet owners give their cats every day to keep them healthy?",
        ans: "<strong>Answer:</strong><br>1. Clean fresh drinking water and nutritious food (like warm milk or cat food).<br>2. A cozy clean sleeping mat and gentle love and playtime.",
        marks: 2,
        rubric: [{ key: "Water and nutritious food", marks: "1 M" }, { key: "Clean shelter / gentle love", marks: "1 M" }]
      },
      {
        category: "Animal Sounds • Vocabulary",
        q: "What sound does a cat make when it is hungry? What sound does it make when it is happy and stroked?",
        ans: "<strong>Answer:</strong><br>• When hungry, a cat says <strong>'Meow, meow'</strong>.<br>• When happy and gently stroked, a cat makes a vibrating <strong>'Purr, purr'</strong> sound.",
        marks: 2,
        rubric: [{ key: "Meow for hungry/calling", marks: "1 M" }, { key: "Purr for contentment", marks: "1 M" }]
      },
      {
        category: "Grammar • Where Questions",
        q: "Answer using a full sentence: Where is the pencil? (Picture shows pencil inside pencil box).",
        ans: "<strong>Answer:</strong><br>• The pencil is <strong>in (inside) the pencil box</strong>.",
        marks: 2,
        rubric: [{ key: "Full grammatical sentence", marks: "1 M" }, { key: "Correct preposition 'in/inside'", marks: "1 M" }]
      },
      {
        category: "Describing Words • Cat Appearance",
        q: "Pick two adjectives that describe Meenu's pet cat: (A) Furry (B) Wooden (C) Playful (D) Metal.",
        ans: "<strong>Answers:</strong><br>• <strong>(A) Furry</strong> (has soft thick hair).<br>• <strong>(C) Playful</strong> (likes chasing butterflies and balls).",
        marks: 2,
        rubric: [{ key: "Furry identified", marks: "1 M" }, { key: "Playful identified", marks: "1 M" }]
      },
      {
        category: "Opposites • Position Words",
        q: "Write the opposite position word:<br>(a) In × _______<br>(b) Under × _______<br>(c) Near × _______",
        ans: "<strong>Answers:</strong><br>(a) In × <strong>Out</strong><br>(b) Under × <strong>Over / On</strong><br>(c) Near × <strong>Far</strong>",
        marks: 3,
        rubric: [{ key: "(a) Out", marks: "1 M" }, { key: "(b) Over/On", marks: "1 M" }, { key: "(c) Far", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Home Locations",
        q: "Unscramble these places in a house:<br>(a) K I T H N E C = _______<br>(b) T E R A C R E = _______",
        ans: "<strong>Answers:</strong><br>(a) K I T C H E N = <strong>KITCHEN</strong><br>(b) T E R R A C E = <strong>TERRACE</strong>",
        marks: 2,
        rubric: [{ key: "(a) KITCHEN", marks: "1 M" }, { key: "(b) TERRACE", marks: "1 M" }]
      },
      {
        category: "Punctuation • Exclamation Mark",
        q: "Why does the title use an exclamation mark in 'Come Back, Cat!'?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• An exclamation mark (!) shows strong feeling, excitement, urgency, or loud calling.<br>• Meenu was calling out urgently with deep love and worry for her cat.",
        marks: 2,
        rubric: [{ key: "Strong emotion / urgency explained", marks: "1 M" }, { key: "Loud calling connection", marks: "1 M" }]
      },
      {
        category: "Rhyming Words",
        q: "Find three words that rhyme with 'Cat'.",
        ans: "<strong>Answers:</strong><br>• <strong>Bat</strong>, <strong>Hat</strong>, <strong>Mat</strong> (or Fat, Rat, Sat).",
        marks: 2,
        rubric: [{ key: "Three valid -at rhyming words", marks: "2 M" }]
      },
      {
        category: "Picture Reading • Room Clues",
        q: "If a cat is hiding between two armchairs, which preposition word describes its position: 'near', 'under', or 'between'?",
        ans: "<strong>Answer:</strong><br>• <strong>Between</strong> (used when an object is in the middle of two things).",
        marks: 1,
        rubric: [{ key: "Between identified", marks: "1 M" }]
      },
      {
        category: "Compassion for Stray Animals",
        q: "What can you do to help stray animals in your neighbourhood during scorching summer days?",
        ans: "<strong>Answer:</strong><br>• Keep an earthen pot of <strong>clean drinking water</strong> outside in the shade for thirsty birds, dogs, and cats.",
        marks: 2,
        rubric: [{ key: "Pot of clean drinking water in shade suggested", marks: "2 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'searching'.",
        ans: "<strong>Sample Sentence:</strong><br>• Aman was searching for his lost eraser under the school desk.",
        marks: 2,
        rubric: [{ key: "Grammatically correct sentence with 'searching'", marks: "2 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Cats have sharp claws that help them climb trees and walls.<br>(b) A preposition tells us about the colour of an item.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. Retractable sharp claws allow cats to grip and climb vertical surfaces safely.<br>(b) <strong>False</strong>. A preposition tells us about position, place, or direction, not colour.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with position explanation", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What did you learn from the story 'Come Back, Cat!'?",
        ans: "<strong>Summary:</strong><br>• Pets are affectionate members of the family who depend on us for safety.<br>• We also learned how to use spatial preposition words accurately to describe where things are located.",
        marks: 2,
        rubric: [{ key: "Affection for pets stated", marks: "1 M" }, { key: "Preposition spatial mastery stated", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "Is a kitten the young one of a dog or a cat?",
        ans: "<strong>Answer:</strong><br>• A kitten is the young one of a <strong>cat</strong>.",
        marks: 1,
        rubric: [{ key: "Cat identified", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mrd7", num: 7, unit: "Unit 3: Harmony",
    title: "Between Home and School",
    subtitle: "Daily Journey, Road Landmarks, Traffic Safety & Neighborhood",
    concepts: [
      "Narrating the daily morning walk from home to the school gate.",
      "Recognizing neighborhood landmarks: tea stall, post office, bakery, banyan tree.",
      "Learning road safety: zebra crossings, footpath, looking both ways, traffic lights.",
      "Direction words: left, right, straight ahead, across."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><rect x="40" y="40" width="60" height="50" fill="#3b82f6" rx="3"/><text x="70" y="70" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Home</text><line x1="100" y1="65" x2="400" y2="65" stroke="#475569" stroke-width="14" stroke-dasharray="16,8"/><circle cx="200" cy="30" r="18" fill="#15803d"/><text x="200" y="34" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Tree</text><rect x="270" y="35" width="40" height="25" fill="#f59e0b" rx="2"/><text x="290" y="52" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Shop</text><rect x="400" y="30" width="70" height="60" fill="#dc2626" rx="4"/><text x="435" y="65" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">School</text><text x="250" y="110" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">Walk on the Footpath • Cross Safely at Zebra Crossing</text></svg>`,
    cbq: {
      title: "Ravi's Morning Walk to School",
      text: "Every morning, Ravi walks to school with his elder sister. They leave home, turn left at the red letterbox, walk past the lively tea stall, stop at the pedestrian crossing until the signal turns green, and enter through the main school gate.",
      question: "Which landmark did Ravi pass after turning left? Why did they stop at the pedestrian crossing? Which rule of road safety did they follow?",
      answer: "1. After turning left, Ravi passed the <strong>red letterbox</strong> and the <strong>lively tea stall</strong>.<br>2. They stopped at the pedestrian crossing because the traffic light was red for pedestrians and cars were moving.<br>3. They followed the golden road safety rule: <strong>Wait for the green walking signal and cross only at the pedestrian/zebra crossing</strong>.",
      rubric: "1 M for landmarks + 1 M for stop reason + 1 M for road safety rule"
    },
    questions: [
      {
        category: "Textbook Comprehension • The Journey",
        q: "Name three things or places Ravi sees between his home and his school.",
        ans: "<strong>Answer:</strong><br>1. The red <strong>post box / post office</strong>.<br>2. The bustling <strong>tea stall</strong> with boiling tea.<br>3. The huge spreading <strong>banyan tree</strong> and the pedestrian zebra crossing.",
        marks: 3,
        rubric: [{ key: "Post box / post office named", marks: "1 M" }, { key: "Tea stall named", marks: "1 M" }, { key: "Banyan tree / crossing named", marks: "1 M" }]
      },
      {
        category: "Road Safety • Zebra Crossing",
        q: "What is a zebra crossing? Why does it have black and white stripes?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• A <strong>zebra crossing</strong> is a designated pathway painted across the road for pedestrians to cross safely.<br>• The bold black and white stripes resemble a zebra's coat and are clearly visible to approaching vehicle drivers from a distance so they slow down.",
        marks: 2,
        rubric: [{ key: "Pedestrian crossing definition", marks: "1 M" }, { key: "Visibility of zebra stripes explained", marks: "1 M" }]
      },
      {
        category: "Traffic Lights Rule",
        q: "What do the three traffic light colours mean for vehicles?<br>(a) Red means _______<br>(b) Yellow (Amber) means _______<br>(c) Green means _______",
        ans: "<strong>Answers:</strong><br>(a) Red means <strong>STOP</strong>.<br>(b) Yellow means <strong>WAIT / SLOW DOWN / GET READY</strong>.<br>(c) Green means <strong>GO</strong>.",
        marks: 3,
        rubric: [{ key: "(a) STOP", marks: "1 M" }, { key: "(b) WAIT / SLOW", marks: "1 M" }, { key: "(c) GO", marks: "1 M" }]
      },
      {
        category: "Direction Words • Left, Right, Straight",
        q: "Fill in with [left, right, straight]:<br>(a) Walk _______ along the pavement without running.<br>(b) Before crossing, look right, then look _______, then right again.",
        ans: "<strong>Answers:</strong><br>(a) Walk <strong>straight</strong> along the pavement.<br>(b) Look right, then look <strong>left</strong>, then right again.",
        marks: 2,
        rubric: [{ key: "(a) straight", marks: "1 M" }, { key: "(b) left", marks: "1 M" }]
      },
      {
        category: "Walking Habits • Footpath Rule",
        q: "Why should we always walk on the footpath (pavement) and never play on the open road?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• The road is meant for fast-moving vehicles like cars, buses, and motorcycles.<br>• Walking on the footpath protects pedestrians from speeding traffic and prevents accidents.",
        marks: 2,
        rubric: [{ key: "Vehicle traffic danger explained", marks: "1 M" }, { key: "Pavement protection explained", marks: "1 M" }]
      },
      {
        category: "Neighborhood Landmarks",
        q: "What is a 'landmark'? Give one example from your own neighbourhood.",
        ans: "<strong>Explanation:</strong><br>• A <strong>landmark</strong> is an easily recognized building, tree, or place (like a big temple, bank, park, or water tank) that helps people find directions easily.<br>• Example: The municipal water tank near the main bus stop.",
        marks: 2,
        rubric: [{ key: "Landmark definition", marks: "1 M" }, { key: "Valid real-world example", marks: "1 M" }]
      },
      {
        category: "Action Verbs • Journey Verbs",
        q: "Identify the verbs in the sentence: 'The children walk slowly and cross the road safely.'",
        ans: "<strong>Answer:</strong><br>• The verbs (action words) are: <strong>walk</strong> and <strong>cross</strong>.",
        marks: 2,
        rubric: [{ key: "walk identified", marks: "1 M" }, { key: "cross identified", marks: "1 M" }]
      },
      {
        category: "Adverbs • How Actions are Done",
        q: "Which word tells how the children crossed the road: (A) Road (B) Safely (C) Children?",
        ans: "<strong>Answer:</strong><br>• <strong>(B) Safely</strong> is the adverb describing the action 'crossed'.",
        marks: 1,
        rubric: [{ key: "Safely identified", marks: "1 M" }]
      },
      {
        category: "Everyday Sounds on the Road",
        q: "Name two sounds you hear while walking on a busy morning street.",
        ans: "<strong>Answers:</strong><br>1. Horns of vehicles: <strong>'Beep-beep! Honk-honk!'</strong><br>2. Bells of school cycles: <strong>'Tring-tring!'</strong> (or birds chirping).",
        marks: 2,
        rubric: [{ key: "Vehicle horn sound", marks: "1 M" }, { key: "Cycle bell / natural sound", marks: "1 M" }]
      },
      {
        category: "Community Places • Post Office",
        q: "What do people do at a post office?",
        ans: "<strong>Answer:</strong><br>• People drop written letters in post boxes, buy postage stamps, send postcards, and post parcels and money orders to relatives far away.",
        marks: 2,
        rubric: [{ key: "Posting letters/parcels", marks: "1 M" }, { key: "Buying stamps/postcards", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Opposites",
        q: "Write the opposite of:<br>(a) Before × _______<br>(b) Safe × _______<br>(c) Left × _______",
        ans: "<strong>Answers:</strong><br>(a) Before × <strong>After</strong><br>(b) Safe × <strong>Unsafe / Dangerous</strong><br>(c) Left × <strong>Right</strong>",
        marks: 3,
        rubric: [{ key: "(a) After", marks: "1 M" }, { key: "(b) Dangerous/Unsafe", marks: "1 M" }, { key: "(c) Right", marks: "1 M" }]
      },
      {
        category: "Punctuality • Arriving on Time",
        q: "Why is it important to reach school on time before the morning assembly bell rings?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Reaching on time teaches self-discipline.<br>• It ensures we do not miss morning prayers, announcements, or the beginning of our first class.",
        marks: 2,
        rubric: [{ key: "Discipline habit explained", marks: "1 M" }, { key: "Not missing assembly/lessons", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'footpath'.",
        ans: "<strong>Sample Sentence:</strong><br>• We should always walk on the footpath to stay safe from moving vehicles.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'footpath'", marks: "2 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) We should cross the road while playing on our mobile phone.<br>(b) A yellow traffic light tells drivers to slow down and prepare to stop.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. Looking at mobile phones while crossing distracts attention and can lead to dangerous accidents.<br>(b) <strong>True</strong>. Yellow/amber warns drivers that red light is approaching.",
        marks: 2,
        rubric: [{ key: "(a) False with safety reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What is the key takeaway of 'Between Home and School'?",
        ans: "<strong>Summary:</strong><br>• The daily journey between home and school connects us with our neighbourhood community.<br>• Practicing strict road safety rules ensures every child travels safely every day.",
        marks: 2,
        rubric: [{ key: "Neighborhood connection", marks: "1 M" }, { key: "Road safety practice", marks: "1 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "What color is the post box in India?",
        ans: "<strong>Answer:</strong><br>• A standard post box in India is painted bright <strong>Red</strong>.",
        marks: 1,
        rubric: [{ key: "Red correct", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mrd8", num: 8, unit: "Unit 3: Harmony",
    title: "This is My Town",
    subtitle: "Community Helpers, Civic Places, Cleanliness & Town Pride",
    concepts: [
      "Poem appreciation celebrating town landmarks, streets, and community spaces.",
      "Identifying community helpers: baker, doctor, teacher, potter, postman, sweeper.",
      "Civic responsibility: keeping public streets clean and throwing waste in trash bins.",
      "Rhyming pairs and sound patterns (town-clown, street-sweet, shop-stop)."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fef2f2" rx="10"/><rect x="50" y="35" width="70" height="50" fill="#f97316" rx="4"/><text x="85" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Bakery</text><rect x="150" y="35" width="70" height="50" fill="#0284c7" rx="4"/><text x="185" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Clinic</text><rect x="250" y="35" width="70" height="50" fill="#16a34a" rx="4"/><text x="285" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">School</text><rect x="350" y="35" width="70" height="50" fill="#9333ea" rx="4"/><text x="385" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Library</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#991b1b" text-anchor="middle">This is My Town • Clean Streets, Helpful Friends</text></svg>`,
    cbq: {
      title: "Community Helpers Day at Town Hall",
      text: "Class 2 visited the Town Hall for Community Helpers Day. They met Uncle Paul who bakes crusty buns at the bakery, Dr. Sneha who treats sick patients, Postman Shyam who delivers letters on his bicycle, and Ramu the sanitation worker who sweeps the lanes clean every dawn.",
      question: "What does the baker do? Who keeps the town lanes clean? Why are all community helpers equally important?",
      answer: "1. The baker <strong>bakes fresh bread, cakes, and crusty buns</strong> for everyone.<br>2. <strong>Ramu the sanitation worker (sweeper)</strong> keeps the lanes clean and hygienic.<br>3. <strong>Importance:</strong> Every helper provides an essential service that makes town life comfortable, healthy, safe, and happy. We rely on each other in society.",
      rubric: "1 M for baker + 1 M for sanitation worker + 1 M for mutual interdependence explanation"
    },
    questions: [
      {
        category: "Poem Comprehension • Town Features",
        q: "What are some of the places mentioned in the poem 'This is My Town'?",
        ans: "<strong>Answer:</strong><br>• Clean wide streets, rows of shops, the school, the hospital/clinic, the town park, and the bakery.",
        marks: 2,
        rubric: [{ key: "Streets and shops mentioned", marks: "1 M" }, { key: "Public buildings / parks mentioned", marks: "1 M" }]
      },
      {
        category: "Community Helpers • Match the Job",
        q: "Match each helper with their work:<br>(a) Teacher (b) Doctor (c) Potter (d) Firefighter<br>Work: (1) Cures sick people (2) Extinguishes fires (3) Teaches students (4) Shapes earthen clay pots",
        ans: "<strong>Matching:</strong><br>• (a) Teacher — (3) Teaches students<br>• (b) Doctor — (1) Cures sick people<br>• (c) Potter — (4) Shapes earthen clay pots<br>• (d) Firefighter — (2) Extinguishes fires",
        marks: 2,
        rubric: [{ key: "All 4 helpers correctly matched", marks: "2 M (0.5 M each)" }]
      },
      {
        category: "Rhyming Pairs in the Poem",
        q: "Find words that rhyme with:<br>(a) Town — _______<br>(b) Street — _______<br>(c) Shop — _______",
        ans: "<strong>Answers:</strong><br>(a) Town — <strong>Brown / Down / Clown</strong><br>(b) Street — <strong>Sweet / Meet / Feet</strong><br>(c) Shop — <strong>Stop / Top / Hop</strong>",
        marks: 3,
        rubric: [{ key: "(a) Down/Brown", marks: "1 M" }, { key: "(b) Sweet/Meet", marks: "1 M" }, { key: "(c) Stop/Top", marks: "1 M" }]
      },
      {
        category: "Civic Sense • Waste Disposal",
        q: "Where should you throw banana peels and empty juice packets when walking in your town?",
        ans: "<strong>Answer:</strong><br>• You should always throw waste inside a <strong>public dustbin (trash can)</strong>.<br>• If no bin is nearby, keep the wrapper in your bag until you find one, keeping the streets sparkling clean.",
        marks: 2,
        rubric: [{ key: "Public dustbin identified", marks: "1 M" }, { key: "Carrying waste until bin found explained", marks: "1 M" }]
      },
      {
        category: "Community Helper Riddle",
        q: "I wear a white coat and carry a stethoscope around my neck. I give medicine when you have fever. Who am I?",
        ans: "<strong>Answer:</strong><br>• You are a <strong>Doctor</strong>.",
        marks: 1,
        rubric: [{ key: "Doctor identified correctly", marks: "1 M" }]
      },
      {
        category: "Community Helper Riddle 2",
        q: "I rise before the sun, mix flour and yeast, and bake sweet hot buns in a big oven. Who am I?",
        ans: "<strong>Answer:</strong><br>• You are a <strong>Baker</strong>.",
        marks: 1,
        rubric: [{ key: "Baker identified correctly", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Plurals",
        q: "Write the plural of these town words:<br>(a) One street — Many _______<br>(b) One shop — Many _______<br>(c) One bus — Many _______",
        ans: "<strong>Answers:</strong><br>(a) Many <strong>streets</strong><br>(b) Many <strong>shops</strong><br>(c) Many <strong>buses</strong> (add -es)",
        marks: 3,
        rubric: [{ key: "(a) streets", marks: "1 M" }, { key: "(b) shops", marks: "1 M" }, { key: "(c) buses", marks: "1 M" }]
      },
      {
        category: "Civic Pride • Beautiful Town",
        q: "What can citizens do to make their town green and beautiful?",
        ans: "<strong>Step-by-Step Answer:</strong><br>1. Plant shady flowering trees and saplings along pathways and parks.<br>2. Never litter plastic and avoid damaging public property.",
        marks: 2,
        rubric: [{ key: "Planting trees", marks: "1 M" }, { key: "No littering / keeping spaces clean", marks: "1 M" }]
      },
      {
        category: "Public Transport Helper",
        q: "Who drives the public bus that carries passengers across town? What quality should they have?",
        ans: "<strong>Answer:</strong><br>• The <strong>Bus Driver</strong> drives the public bus.<br>• A driver must be <strong>careful, alert, and follow traffic rules strictly</strong> to keep passengers safe.",
        marks: 2,
        rubric: [{ key: "Bus driver identified", marks: "1 M" }, { key: "Careful/rule-abiding quality explained", marks: "1 M" }]
      },
      {
        category: "Describing Words • Adjectives",
        q: "Choose a suitable describing word:<br>(a) A _______ town (clean / noisy)<br>(b) A _______ helper (kind / salty)",
        ans: "<strong>Answers:</strong><br>(a) A <strong>clean</strong> town.<br>(b) A <strong>kind</strong> helper.",
        marks: 2,
        rubric: [{ key: "(a) clean", marks: "1 M" }, { key: "(b) kind", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'neighbourhood'.",
        ans: "<strong>Sample Sentence:</strong><br>• Our neighbourhood has a beautiful green park where children play every evening.",
        marks: 2,
        rubric: [{ key: "Grammatically correct sentence with 'neighbourhood'", marks: "2 M" }]
      },
      {
        category: "Opposites • City vs Village",
        q: "Write the antonyms (opposites) of:<br>(a) Clean × _______<br>(b) Beautiful × _______<br>(c) Busy × _______",
        ans: "<strong>Answers:</strong><br>(a) Clean × <strong>Dirty</strong><br>(b) Beautiful × <strong>Ugly</strong><br>(c) Busy × <strong>Idle / Quiet</strong>",
        marks: 3,
        rubric: [{ key: "(a) Dirty", marks: "1 M" }, { key: "(b) Ugly", marks: "1 M" }, { key: "(c) Idle/Quiet", marks: "1 M" }]
      },
      {
        category: "Respect for All Work",
        q: "Why should we respect sanitation workers and sweepers who clean our streets?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• They do very hard and important work in all seasons to keep our surroundings disease-free and clean.<br>• Without them, our towns would become polluted and unlivable. All honest work deserves dignity and gratitude.",
        marks: 2,
        rubric: [{ key: "Disease prevention & hard work explained", marks: "1 M" }, { key: "Dignity of labor and gratitude emphasized", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Town Helpers",
        q: "Fill in the missing letters: T _ A C H _ R (teaches in school).",
        ans: "<strong>Answer:</strong><br>• T <strong>E</strong> A C H <strong>E</strong> R = <strong>TEACHER</strong>.",
        marks: 1,
        rubric: [{ key: "TEACHER correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A potter makes clay pots on a rotating wheel.<br>(b) We should scribble graffiti on public town walls.",
        ans: "<strong>Answers:</strong><br>(a) <strong>True</strong>. A potter uses a pottery wheel to shape wet clay.<br>(b) <strong>False</strong>. Scribbling on walls defaces public property and spoils the beauty of the town.",
        marks: 2,
        rubric: [{ key: "(a) True", marks: "1 M" }, { key: "(b) False with civic reason", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What makes you feel proud of your town?",
        ans: "<strong>Summary:</strong><br>• I feel proud of my town because of its kind and helpful people, clean peaceful parks, safe streets, and the sense of belonging and community that brings everyone together.",
        marks: 2,
        rubric: [{ key: "Community, safety, and pride explained", marks: "2 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "Where do you go to borrow books to read quietly?",
        ans: "<strong>Answer:</strong><br>• You go to a <strong>Library</strong>.",
        marks: 1,
        rubric: [{ key: "Library correct", marks: "1 M" }]
      }
    ]
  },
  {
    id: "mrd9", num: 9, unit: "Unit 4: The Earth and Us",
    title: "Out in the Garden",
    subtitle: "Outdoor Play, Ball Games, Nature Care, Seasons & Sunshine",
    concepts: [
      "Poem recitation on active garden play: bouncing, throwing, catching, and rolling a ball.",
      "Observing natural garden life: blooming flowers, green grass, buzzing bees, and fluttering butterflies.",
      "The value of outdoor active exercise vs screen time.",
      "Nurturing plants by regular watering and protecting garden greenery."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><circle cx="90" cy="55" r="22" fill="#ef4444"/><text x="90" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Bounce</text><circle cx="190" cy="55" r="22" fill="#3b82f6"/><text x="190" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Throw</text><circle cx="290" cy="55" r="22" fill="#10b981"/><text x="290" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Catch</text><circle cx="390" cy="55" r="22" fill="#f59e0b"/><text x="390" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Roll</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">Out in the Garden Each Fine Day • Active Play in Nature</text></svg>`,
    cbq: {
      title: "Class 2 Springtime Garden Activity",
      text: "On a bright sunny afternoon, Rohan and Priya took a red rubber ball to the school herbal garden. Rohan bounced the ball on the paved garden path, and Priya caught it with both hands. Nearby, worker honeybees buzzed around yellow marigold blossoms, and green grasshoppers hopped on soft dew-covered grass.",
      question: "Which ball actions did Rohan and Priya perform? Which insects were observed in the garden? Why is playing in the garden refreshing?",
      answer: "1. <strong>Ball actions:</strong> <strong>Bouncing</strong> and <strong>catching</strong>.<br>2. <strong>Insects observed:</strong> <strong>Honeybees</strong> (drinking nectar from marigolds) and <strong>grasshoppers</strong>.<br>3. <strong>Refreshment:</strong> Playing in the open garden provides fresh oxygen, warm sunlight (Vitamin D), physical exercise, and connects children directly with the peace and beauty of nature.",
      rubric: "1 M for ball actions + 1 M for insects observed + 1 M for health & nature benefits"
    },
    questions: [
      {
        category: "Poem Comprehension • Ball Actions",
        q: "What four actions with a ball are mentioned in the poem 'Out in the Garden'?",
        ans: "<strong>Answer:</strong><br>1. <strong>Bounce</strong> the ball<br>2. <strong>Throw</strong> the ball<br>3. <strong>Catch</strong> the ball<br>4. <strong>Roll</strong> the ball.",
        marks: 2,
        rubric: [{ key: "All 4 actions named (bounce, throw, catch, roll)", marks: "2 M" }]
      },
      {
        category: "Poem Comprehension • Weather",
        q: "On what kind of day do children like to go out in the garden to play?",
        ans: "<strong>Answer:</strong><br>• Children like to go out in the garden on <strong>each fine, sunny day</strong> when the sky is clear and the weather is pleasant.",
        marks: 1,
        rubric: [{ key: "Fine/sunny day identified", marks: "1 M" }]
      },
      {
        category: "Rhyming Pairs in the Poem",
        q: "Find words that rhyme with:<br>(a) Day — _______<br>(b) Ball — _______<br>(c) Round — _______",
        ans: "<strong>Answers:</strong><br>(a) Day — <strong>Play / Say / May</strong><br>(b) Ball — <strong>All / Fall / Wall</strong><br>(c) Round — <strong>Ground / Sound / Found</strong>",
        marks: 3,
        rubric: [{ key: "(a) Play", marks: "1 M" }, { key: "(b) Fall/Wall", marks: "1 M" }, { key: "(c) Ground", marks: "1 M" }]
      },
      {
        category: "Action Verbs • Movement Words",
        q: "Fill in with [bounce, catch, roll]:<br>(a) Can you _______ the high flying ball?<br>(b) Watch the rubber ball _______ up and down.<br>(c) _______ the marble across the smooth floor.",
        ans: "<strong>Answers:</strong><br>(a) Can you <strong>catch</strong> the high flying ball?<br>(b) Watch the rubber ball <strong>bounce</strong> up and down.<br>(c) <strong>Roll</strong> the marble across the smooth floor.",
        marks: 3,
        rubric: [{ key: "(a) catch", marks: "1 M" }, { key: "(b) bounce", marks: "1 M" }, { key: "(c) Roll", marks: "1 M" }]
      },
      {
        category: "Nature Observation • Garden Creatures",
        q: "Name two friendly creatures you can see visiting flowers in a garden.",
        ans: "<strong>Answer:</strong><br>1. Colorful <strong>Butterflies</strong> fluttering from petal to petal.<br>2. Busy <strong>Honeybees</strong> collecting sweet nectar.",
        marks: 2,
        rubric: [{ key: "Butterflies named", marks: "1 M" }, { key: "Honeybees named", marks: "1 M" }]
      },
      {
        category: "Plant Care • Green Garden",
        q: "How can children help take care of their school garden?",
        ans: "<strong>Step-by-Step Answer:</strong><br>1. Water the plants regularly using a watering can in the morning or evening.<br>2. Never pluck flowers or step on delicate young plant saplings.",
        marks: 2,
        rubric: [{ key: "Regular watering", marks: "1 M" }, { key: "Not plucking flowers/stepping on plants", marks: "1 M" }]
      },
      {
        category: "Opposites • Action Words",
        q: "Write the opposites of:<br>(a) Throw × _______<br>(b) Up × _______<br>(c) Fine × _______",
        ans: "<strong>Answers:</strong><br>(a) Throw × <strong>Catch</strong><br>(b) Up × <strong>Down</strong><br>(c) Fine × <strong>Cloudy / Stormy / Bad</strong>",
        marks: 3,
        rubric: [{ key: "(a) Catch", marks: "1 M" }, { key: "(b) Down", marks: "1 M" }, { key: "(c) Stormy/Bad", marks: "1 M" }]
      },
      {
        category: "Outdoor vs Indoor Play",
        q: "Why is playing outdoors with friends better than sitting alone staring at mobile screens?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>1. Outdoor play involves running, throwing, and jumping, which keeps the body fit, agile, and healthy.<br>2. It builds real friendships and team spirit, and prevents eye strain caused by excessive screen exposure.",
        marks: 2,
        rubric: [{ key: "Physical fitness and agility", marks: "1 M" }, { key: "Friendship and eye strain prevention", marks: "1 M" }]
      },
      {
        category: "Ball Games • Types of Sports",
        q: "Name three popular outdoor games played using a ball.",
        ans: "<strong>Answer:</strong><br>1. <strong>Cricket</strong><br>2. <strong>Football (Soccer)</strong><br>3. <strong>Basketball (or Volleyball / Tennis)</strong>.",
        marks: 2,
        rubric: [{ key: "Three ball games named correctly", marks: "2 M" }]
      },
      {
        category: "Describing Words • Garden Adjectives",
        q: "Choose suitable describing words from the brackets:<br>(a) The grass is _______ (green / salty).<br>(b) The sun is _______ (bright / square).",
        ans: "<strong>Answers:</strong><br>(a) The grass is <strong>green</strong>.<br>(b) The sun is <strong>bright</strong>.",
        marks: 2,
        rubric: [{ key: "(a) green", marks: "1 M" }, { key: "(b) bright", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'blossom'.",
        ans: "<strong>Sample Sentence:</strong><br>• Beautiful red roses blossom in our school garden every spring.",
        marks: 2,
        rubric: [{ key: "Correct grammatical sentence with 'blossom'", marks: "2 M" }]
      },
      {
        category: "Sensory Words • Touch and Sight",
        q: "How does garden grass feel when you walk on it barefoot in the morning?",
        ans: "<strong>Answer:</strong><br>• The grass feels <strong>cool, soft, and wet with morning dew</strong>.",
        marks: 1,
        rubric: [{ key: "Cool, soft, dewy texture described", marks: "1 M" }]
      },
      {
        category: "Seasonal Changes • Flowers",
        q: "In which season do the most colorful flowers bloom in Indian gardens?",
        ans: "<strong>Answer:</strong><br>• Flowers bloom in great abundance during the <strong>Spring season (Basant)</strong>.",
        marks: 1,
        rubric: [{ key: "Spring season identified", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A heavy stone bounces higher than a rubber ball.<br>(b) Sunlight and water help garden plants grow healthy.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. A rubber ball is elastic and bounces high, while a heavy stone thuds on the ground without bouncing.<br>(b) <strong>True</strong>. Plants need sunlight, water, and soil to prepare food and grow.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "What joy does 'Out in the Garden' capture for children?",
        ans: "<strong>Summary:</strong><br>• The poem captures the pure, carefree delight of childhood play in the open air, where bouncing a ball with friends under the warm sun brings endless laughter and energy.",
        marks: 2,
        rubric: [{ key: "Joy of carefree outdoor play described", marks: "2 M" }]
      },
      {
        category: "Quick Quiz Problem",
        q: "What tool is used to water garden plants: a hammer, a watering can, or a scissors?",
        ans: "<strong>Answer:</strong><br>• A <strong>watering can</strong> is used to sprinkle water on garden plants.",
        marks: 1,
        rubric: [{ key: "Watering can identified", marks: "1 M" }]
      }
    ]
  }
];

module.exports = { mridangPart2 };
