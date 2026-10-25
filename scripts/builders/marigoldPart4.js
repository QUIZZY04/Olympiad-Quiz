// scripts/builders/marigoldPart4.js
// NCERT Class 2 English: "Marigold Book 2" - Chapters 16 to 20
// The Mumbai Musicians, Granny Granny Please Comb My Hair, The Magic Porridge Pot, Strange Talk, The Grasshopper and the Ant

const marigoldPart4 = [
  {
    id: "mrg16", num: 16, unit: "Unit 8: Music & Harmony",
    title: "The Mumbai Musicians",
    subtitle: "Town Musicians of Bremen Adaptation, Animal Band & The Ghost Feast",
    concepts: [
      "Story comprehension: Old donkey Gopu, dog Dopu, cat Furry, and cock Booboo set out for Mumbai.",
      "Desire to become musicians when their farm masters turn them out.",
      "The house in the forest: Singing together outside the window to ask for food.",
      "The comical misunderstanding: Robbers inside think ghosts have attacked and flee; animals enjoy a feast."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="70" cy="55" r="22" fill="#94a3b8"/><text x="70" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Donkey</text><circle cx="140" cy="55" r="18" fill="#d97706"/><text x="140" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Dog</text><circle cx="210" cy="55" r="16" fill="#3b82f6"/><text x="210" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Cat</text><circle cx="270" cy="55" r="14" fill="#ef4444"/><text x="270" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Cock</text><line x1="300" y1="55" x2="350" y2="55" stroke="#475569" stroke-width="4"/><polygon points="350,50 365,55 350,60" fill="#475569"/><rect x="380" y="30" width="70" height="60" fill="#f59e0b" rx="4"/><text x="415" y="65" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Mumbai!</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Gopu, Dopu, Furry, and Booboo — The Mumbai Musicians</text></svg>`,
    cbq: {
      title: "The Four Forest Musicians' Concert",
      text: "Four elderly animal friends — Gopu the donkey, Dopu the dog, Furry the cat, and Booboo the rooster — walked toward Mumbai to become musicians. Tired and starving in the forest, they saw a lit window with a table full of delicious food. They decided to sing together to earn dinner. Gopu brayed, Dopu barked, Furry meowed, and Booboo crowed: 'COCK-A-DOODLE-DOO!'. Inside, the people thought ghosts had come, shrieked in terror, and ran into the woods.",
      question: "Why did the animals decide to sing outside the window? What happened when they sang all together? What did the animals do after the people fled?",
      answer: "1. The animals sang because they were starving and wanted to <strong>earn food by giving a concert</strong>.<br>2. When they all sang together, the loud mixed noise sounded so wild and eerie that the people thought <strong>ghosts had come</strong> and ran away in fear.<br>3. The happy animals sat down at the table and <strong>ate up the delicious feast</strong> until they were completely full.",
      rubric: "1 M for concert to earn food + 1 M for ghost misunderstanding + 1 M for enjoying the feast"
    },
    questions: [
      {
        category: "Reading is Fun • The Journey",
        q: "Why did Gopu the donkey leave his master's house?",
        ans: "<strong>Answer:</strong><br>• Gopu had worked hard carrying sacks of corn for many years, but had grown old. His master said: 'Go and see the world before you become too old!' so Gopu decided to go to Mumbai to become a <strong>musician</strong>.",
        marks: 2,
        rubric: [{ key: "Master told him to see the world", marks: "1 M" }, { key: "Decided to become a musician in Mumbai", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Meeting Friends",
        q: "Who were the animal companions who joined Gopu on his journey?",
        ans: "<strong>Answer:</strong><br>1. <strong>Dopu</strong> (the dog)<br>2. <strong>Furry</strong> (the cat)<br>3. <strong>Booboo</strong> (the cock/rooster).",
        marks: 3,
        rubric: [{ key: "Dopu the dog", marks: "1 M" }, { key: "Furry the cat", marks: "1 M" }, { key: "Booboo the cock", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Light in the Forest",
        q: "What did the hungry musicians see through the window of the house in the forest?",
        ans: "<strong>Answer:</strong><br>• They saw a brightly lit room with a <strong>table loaded with delicious food and drinks</strong>.",
        marks: 2,
        rubric: [{ key: "Lit room", marks: "1 M" }, { key: "Table with delicious food", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Concert Noise",
        q: "What sound did each animal make when they started their concert?<br>(a) Gopu (b) Dopu (c) Furry (d) Booboo",
        ans: "<strong>Answers:</strong><br>(a) Gopu: <strong>Bray (Hee-haw!)</strong><br>(b) Dopu: <strong>Bark (Bow-wow!)</strong><br>(c) Furry: <strong>Meow (Meow-meow!)</strong><br>(d) Booboo: <strong>Crow (Cock-a-doodle-doo!)</strong>",
        marks: 4,
        rubric: [{ key: "All 4 animal sounds correct", marks: "4 M (1 M each)" }]
      },
      {
        category: "Reading is Fun • The Result",
        q: "Why did the people inside the house run away into the dark forest?",
        ans: "<strong>Answer:</strong><br>• The sudden, deafening chorus of four animals braying, barking, meowing, and crowing frightened them into believing that <strong>ghosts had arrived</strong> to attack them.",
        marks: 2,
        rubric: [{ key: "Deafening mixed noise frightened them", marks: "1 M" }, { key: "Thought ghosts had arrived", marks: "1 M" }]
      },
      {
        category: "Animal Homes & Sounds",
        q: "Match each animal to its home:<br>(a) Donkey (b) Dog (c) Rooster<br>Homes: (1) Kennel (2) Coop (3) Stable",
        ans: "<strong>Matching:</strong><br>• (a) Donkey — (3) Stable<br>• (b) Dog — (1) Kennel<br>• (c) Rooster — (2) Coop",
        marks: 3,
        rubric: [{ key: "All 3 homes correctly matched", marks: "3 M (1 M each)" }]
      },
      {
        category: "Opposites • Story Pairs",
        q: "Write the opposite of:<br>(a) Delicious × _______<br>(b) Friend × _______<br>(c) Night × _______",
        ans: "<strong>Answers:</strong><br>(a) Delicious × <strong>Tasteless / Terrible</strong><br>(b) Friend × <strong>Enemy / Stranger</strong><br>(c) Night × <strong>Day</strong>",
        marks: 3,
        rubric: [{ key: "(a) Tasteless", marks: "1 M" }, { key: "(b) Enemy", marks: "1 M" }, { key: "(c) Day", marks: "1 M" }]
      },
      {
        category: "City Knowledge • Mumbai",
        q: "What is Mumbai famous for in India?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Mumbai is famous as the <strong>entertainment and film capital (Bollywood)</strong> and commercial hub of India, located by the Arabian Sea.",
        marks: 2,
        rubric: [{ key: "Entertainment / film capital identified", marks: "1 M" }, { key: "Commercial hub / sea coast mentioned", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'musician'.",
        ans: "<strong>Sample Sentence:</strong><br>• The talented musician played the violin so beautifully that the audience gave a standing ovation.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'musician'", marks: "2 M" }]
      },
      {
        category: "Moral Reasoning • Senior Animals",
        q: "How should human masters treat domestic animals when they become old and weak?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Masters should treat elderly animals with <strong>gratitude, kindness, and loving care</strong>.<br>• They should never abandon or mistreat them after years of loyal service.",
        marks: 2,
        rubric: [{ key: "Gratitude and kindness", marks: "1 M" }, { key: "Not abandoning loyal old animals", marks: "1 M" }]
      },
      {
        category: "Grammar • Past Tense",
        q: "Write the past tense of:<br>(a) Sing — _______<br>(b) Hear — _______<br>(c) Run — _______",
        ans: "<strong>Answers:</strong><br>(a) Sing — <strong>Sang</strong><br>(b) Hear — <strong>Heard</strong><br>(c) Run — <strong>Ran</strong>",
        marks: 3,
        rubric: [{ key: "(a) Sang", marks: "1 M" }, { key: "(b) Heard", marks: "1 M" }, { key: "(c) Ran", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Musical Story",
        q: "Fill in the missing letters: D _ L _ C _ O U S (tasty).",
        ans: "<strong>Answer:</strong><br>• D <strong>E</strong> L <strong>I</strong> C <strong>I</strong> O U S = <strong>DELICIOUS</strong>.",
        marks: 1,
        rubric: [{ key: "DELICIOUS correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) The four animals reached Mumbai in the very first hour.<br>(b) The people in the house ran away because they thought ghosts had come.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. They stopped at the forest cottage on the way and stayed there.<br>(b) <strong>True</strong>. The weird animal singing sounded like ghosts.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What is the heart-warming lesson of 'The Mumbai Musicians'?",
        ans: "<strong>Summary:</strong><br>• No matter your age or limitations, when good friends unite with a common joyful purpose, they can overcome hardship, support one another, and find happiness.",
        marks: 2,
        rubric: [{ key: "Friendship, teamwork, and resilience summarized", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg17", num: 17, unit: "Unit 9: Family Love & Magic",
    title: "Granny Granny Please Comb My Hair",
    subtitle: "Grandmother's Gentle Touch, Coconut Oil, Braiding & Affection",
    concepts: [
      "Poem appreciation: A child's sweet request to her grandmother to comb and oil her hair.",
      "The cozy ritual: Sitting on a yellow cushion between Granny's knees.",
      "Gentle grooming: Rubbing nourishing coconut oil, gentle parting of hair, breezy breeze.",
      "Grandparent affection: Granny praising the grandchild as the sweetest, best child in the world."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><circle cx="100" cy="50" r="26" fill="#ec4899"/><text x="100" y="55" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Granny</text><rect x="180" y="65" width="50" height="30" fill="#facc15" rx="6"/><text x="205" y="85" font-family="sans-serif" font-size="9" font-weight="700" fill="#713f12" text-anchor="middle">Cushion</text><circle cx="205" cy="45" r="18" fill="#3b82f6"/><text x="205" y="50" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Child</text><circle cx="320" cy="55" r="18" fill="#10b981"/><text x="320" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Oil Bottle</text><text x="420" y="60" font-family="sans-serif" font-size="11" font-weight="800" fill="#713f12">Pure Love!</text><text x="250" y="110" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12" text-anchor="middle">Gentle coconut oil, patient hands, and unconditional love.</text></svg>`,
    cbq: {
      title: "Sunday Morning with Grandmother",
      text: "On Sunday morning, little Meera ran to her grandmother holding a wooden comb and a bottle of scented coconut oil. She climbed onto a cozy yellow velvet cushion placed between Granny's knees. Granny gently rubbed a little oil into Meera's scalp, parted her hair into two neat braids, and planted a loving kiss on her forehead, saying: 'You are the most wonderful child in the whole world!'.",
      question: "Where did Meera sit? What kind of oil did Granny use? What sweet praise did Granny give her?",
      answer: "1. Meera sat on a <strong>cushion between Granny's knees</strong>.<br>2. Granny used nourishing <strong>coconut oil</strong>.<br>3. Granny praised her saying: <strong>'Now you are finished, and you are the best child in the world!'</strong>.",
      rubric: "1 M for sitting on cushion between knees + 1 M for coconut oil + 1 M for grandmother's praise"
    },
    questions: [
      {
        category: "Reading is Fun • Child's Request",
        q: "What does the little girl ask her Grandmother to do?",
        ans: "<strong>Answer:</strong><br>• The little girl affectionately asks her grandmother: <strong>'Granny Granny, please comb my hair!'</strong>.",
        marks: 1,
        rubric: [{ key: "Comb her hair stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Special Quality of Granny",
        q: "What special quality does Granny always have for her grandchild?",
        ans: "<strong>Answer:</strong><br>• Granny <strong>always takes her time, and always has plenty of time</strong> for the child, never rushing through things.",
        marks: 2,
        rubric: [{ key: "Always takes her time", marks: "1 M" }, { key: "Never rushes / has plenty of time", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Seating Arrangement",
        q: "Where does Granny make the little girl sit while combing her hair?",
        ans: "<strong>Answer:</strong><br>• Granny makes her sit on a <strong>soft cushion placed right between her knees</strong>.",
        marks: 2,
        rubric: [{ key: "On a cushion", marks: "1 M" }, { key: "Between her knees", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Oil Used",
        q: "What kind of oil does Granny rub into the girl's scalp?",
        ans: "<strong>Answer:</strong><br>• Granny rubs a little <strong>coconut oil</strong> into her hair with gentle, soothing strokes.",
        marks: 1,
        rubric: [{ key: "Coconut oil stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Parting the Hair",
        q: "How does the poet describe Granny's parting of the hair?",
        ans: "<strong>Answer:</strong><br>• Granny parts the hair gently, <strong>as soft and breezy as a gentle summer breeze</strong>.",
        marks: 2,
        rubric: [{ key: "Soft and breezy parting described", marks: "2 M" }]
      },
      {
        category: "Reading is Fun • Words of Affection",
        q: "What does Granny say when she finishes combing the girl's hair?",
        ans: "<strong>Answer:</strong><br>• Granny turns the girl's head around, smiles warmly, and says: <strong>'Now, who's a nice girl?'</strong>.",
        marks: 2,
        rubric: [{ key: "'Now, who's a nice girl?' quoted", marks: "2 M" }]
      },
      {
        category: "Vocabulary • Rhyming Words in Poem",
        q: "Find words in the poem that rhyme with:<br>(a) Hair — _______<br>(b) Breeze — _______<br>(c) Round — _______",
        ans: "<strong>Answers:</strong><br>(a) Hair — <strong>Care / Share / Air</strong><br>(b) Breeze — <strong>Knees / Please</strong><br>(c) Round — <strong>Sound / Ground</strong>",
        marks: 3,
        rubric: [{ key: "(a) Care", marks: "1 M" }, { key: "(b) Knees", marks: "1 M" }, { key: "(c) Ground", marks: "1 M" }]
      },
      {
        category: "Grandparent Bonding",
        q: "Why are grandparents so special in a child's life?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>1. Grandparents give unconditional love, endless patience, and undivided attention.<br>2. They tell wonderful bedtime stories, teach traditional values, and make children feel deeply cherished.",
        marks: 2,
        rubric: [{ key: "Patience and undivided attention", marks: "1 M" }, { key: "Stories, values, and security", marks: "1 M" }]
      },
      {
        category: "Opposites • Story Words",
        q: "Write the opposite of:<br>(a) Always × _______<br>(b) Gentle × _______<br>(c) Soft × _______",
        ans: "<strong>Answers:</strong><br>(a) Always × <strong>Never</strong><br>(b) Gentle × <strong>Rough / Harsh</strong><br>(c) Soft × <strong>Hard</strong>",
        marks: 3,
        rubric: [{ key: "(a) Never", marks: "1 M" }, { key: "(b) Rough/Harsh", marks: "1 M" }, { key: "(c) Hard", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'breeze'.",
        ans: "<strong>Sample Sentence:</strong><br>• A pleasant evening breeze rustled the leaves of the garden mango tree.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'breeze'", marks: "2 M" }]
      },
      {
        category: "Care for Grandparents",
        q: "Name two ways you can show love and care to your grandparents.",
        ans: "<strong>Answer:</strong><br>1. Spend unhurried time listening to their stories and reading the newspaper for them.<br>2. Fetch their spectacles, walking stick, or water when they need it.",
        marks: 2,
        rubric: [{ key: "Spending time / listening", marks: "1 M" }, { key: "Helping with small daily needs", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Hair Care",
        q: "Fill in the missing letters: C O C _ N _ T (tropical palm fruit).",
        ans: "<strong>Answer:</strong><br>• C O C <strong>O</strong> N <strong>U</strong> T = <strong>COCONUT</strong>.",
        marks: 1,
        rubric: [{ key: "COCONUT correct", marks: "1 M" }]
      },
      {
        category: "Grammar • Polite Words",
        q: "Which magic word is used in the poem to make a sweet, polite request?",
        ans: "<strong>Answer:</strong><br>• The magic word is <strong>'Please'</strong> ('Granny Granny, please comb my hair').",
        marks: 1,
        rubric: [{ key: "Please correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Granny combs the girl's hair in a big rush and pulls her scalp hard.<br>(b) The girl loves spending time with her grandmother.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. Granny always takes her time with soothing, gentle care.<br>(b) <strong>True</strong>. The poem overflows with mutual warmth and affection.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "What emotion does the poem 'Granny Granny Please Comb My Hair' evoke?",
        ans: "<strong>Summary:</strong><br>• It evokes deep nostalgia, tenderness, and security, reminding us of the calm haven that grandparents create through simple, loving gestures of care.",
        marks: 2,
        rubric: [{ key: "Tenderness, security, and familial love articulated", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg18", num: 18, unit: "Unit 9: Family Love & Magic",
    title: "The Magic Porridge Pot",
    subtitle: "Tara and the Magic Pot, The Magic Words & The Village Porridge Flood",
    concepts: [
      "Story comprehension: Tara helps an old woman in the forest and receives a magical clay pot.",
      "The magic spell: 'Cook, pot, cook!' (starts cooking) and 'Stop, pot, stop!' (stops cooking).",
      "The mother's forgetfulness: Calling 'Cook, pot, cook!' when hungry, but forgetting the stopping words.",
      "The porridge river: Porridge overflows through the house, onto the street, flooding the whole village.",
      "Moral: Following instructions precisely and mastering knowledge before wielding magic or tools."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><path d="M 120 70 C 100 70 90 90 90 100 L 170 100 C 170 90 160 70 140 70 Z" fill="#713f12"/><ellipse cx="130" cy="70" rx="25" ry="8" fill="#fde047"/><text x="130" y="55" font-family="sans-serif" font-size="9" font-weight="700" fill="#b45309" text-anchor="middle">Cook, Pot!</text><path d="M 160 75 Q 260 50 360 85 Q 420 105 480 85" fill="none" stroke="#facc15" stroke-width="12" stroke-linecap="round"/><text x="280" y="50" font-family="sans-serif" font-size="11" font-weight="800" fill="#a16207">Porridge flowing through the village!</text><circle cx="440" cy="55" r="18" fill="#ec4899"/><text x="440" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Tara</text><text x="250" y="112" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Tara shouted: 'Stop, pot, stop!' and it stopped cooking.</text></svg>`,
    cbq: {
      title: "The Magic Porridge Emergency in Village",
      text: "Tara and her poor mother lived in a village hut. An old woman gifted Tara a magic pot that cooked sweet porridge on the command: 'Cook, pot, cook!' and stopped on: 'Stop, pot, stop!'. One afternoon while Tara was out playing, her hungry mother said: 'Cook, pot, cook!'. The pot cooked delicious porridge. After eating her fill, mother said: 'Do not cook more, pot!'. But the pot kept cooking! Porridge overflowed onto the floor, down the stairs, and into the streets. Villagers ran with bowls to eat porridge on the road until Tara arrived.",
      question: "What magic words started the pot? What mistake did mother make? What magic words finally stopped the porridge river?",
      answer: "1. <strong>Starting words:</strong> <strong>'Cook, pot, cook!'</strong>.<br>2. <strong>Mother's mistake:</strong> She forgot the exact magical command to stop the pot and shouted: 'Do not cook more, pot!', which the pot did not obey.<br>3. <strong>Stopping words:</strong> Tara arrived and shouted: <strong>'Stop, pot, stop!'</strong>, and the magic pot immediately ceased cooking.",
      rubric: "1 M for 'Cook, pot, cook!' + 1 M for mother's wrong words + 1 M for Tara's 'Stop, pot, stop!'"
    },
    questions: [
      {
        category: "Reading is Fun • The Gift",
        q: "Where did Tara meet the old woman, and what gift did she receive?",
        ans: "<strong>Answer:</strong><br>• Tara met the old woman in the <strong>forest</strong>.<br>• The kind old woman gifted her a <strong>magic clay pot</strong> that could cook porridge.",
        marks: 2,
        rubric: [{ key: "In the forest", marks: "1 M" }, { key: "Magic porridge pot", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Starting Spell",
        q: "What magic words did the old woman teach Tara to start the pot cooking?",
        ans: "<strong>Answer:</strong><br>• The starting words were: <strong>'Cook, pot, cook!'</strong>.",
        marks: 1,
        rubric: [{ key: "'Cook, pot, cook!' quoted", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Stopping Spell",
        q: "What magic words stopped the pot from cooking porridge?",
        ans: "<strong>Answer:</strong><br>• The stopping words were: <strong>'Stop, pot, stop!'</strong>.",
        marks: 1,
        rubric: [{ key: "'Stop, pot, stop!' quoted", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Mother's Error",
        q: "Why did the porridge keep cooking and overflow all over the house?",
        ans: "<strong>Answer:</strong><br>• Because Tara's mother <strong>forgot the exact magic words</strong> ('Stop, pot, stop!'). She said 'Do not cook, pot!', so the pot kept pouring out hot porridge.",
        marks: 2,
        rubric: [{ key: "Forgot exact magic words", marks: "1 M" }, { key: "Said wrong command 'Do not cook'", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Village Reaction",
        q: "What did the villagers do when they saw rivers of porridge flowing on the road?",
        ans: "<strong>Answer:</strong><br>• The surprised villagers ran out of their houses with bowls and spoons, shouting: <strong>'Come and eat the porridge!'</strong>.",
        marks: 2,
        rubric: [{ key: "Ran out with bowls and spoons", marks: "1 M" }, { key: "Ate porridge on the road", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Rescuing the Village",
        q: "How was the porridge flood finally stopped?",
        ans: "<strong>Answer:</strong><br>• Tara ran home as fast as she could and called out loudly: <strong>'Stop, pot, stop!'</strong>, and the pot instantly stopped cooking.",
        marks: 2,
        rubric: [{ key: "Tara ran home", marks: "1 M" }, { key: "Shouted 'Stop, pot, stop!'", marks: "1 M" }]
      },
      {
        category: "Opposites • Story Words",
        q: "Write the opposite of:<br>(a) Poor × _______<br>(b) Remember × _______<br>(c) Stop × _______",
        ans: "<strong>Answers:</strong><br>(a) Poor × <strong>Rich / Wealthy</strong><br>(b) Remember × <strong>Forget</strong><br>(c) Stop × <strong>Start / Cook / Go</strong>",
        marks: 3,
        rubric: [{ key: "(a) Rich", marks: "1 M" }, { key: "(b) Forget", marks: "1 M" }, { key: "(c) Start", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Food Texture",
        q: "What is sweet porridge made of? How does it taste?",
        ans: "<strong>Answer:</strong><br>• Sweet porridge (kheer / daliya) is made of crushed grains boiled in milk and sweetened with sugar or jaggery.<br>• It tastes <strong>creamy, warm, sweet, and comforting</strong>.",
        marks: 2,
        rubric: [{ key: "Ingredients (grains, milk, sugar)", marks: "1 M" }, { key: "Creamy/sweet taste described", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'overflow'.",
        ans: "<strong>Sample Sentence:</strong><br>• The river began to overflow its banks after three days of torrential rainfall.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'overflow'", marks: "2 M" }]
      },
      {
        category: "Moral Reasoning • Knowing the Full Method",
        q: "Why is it dangerous to start using a powerful machine or magic before learning how to turn it off?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• If you don't know how to stop a process, it can quickly spin out of control and cause destruction (like flooding a house or causing accidents).<br>• Always learn complete operating safety rules before starting any task.",
        marks: 2,
        rubric: [{ key: "Danger of spinning out of control explained", marks: "1 M" }, { key: "Importance of complete operating knowledge", marks: "1 M" }]
      },
      {
        category: "Grammar • Action Words (Verbs)",
        q: "Underline the verbs in the sentence: 'The hot porridge flowed out of the pot and spilled onto the road.'",
        ans: "<strong>Answer:</strong><br>• The verbs (action words) are: <strong>flowed</strong> and <strong>spilled</strong>.",
        marks: 2,
        rubric: [{ key: "flowed identified", marks: "1 M" }, { key: "spilled identified", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Magical Story",
        q: "Fill in the missing letters: P _ R R _ D G _ (cooked cereal).",
        ans: "<strong>Answer:</strong><br>• P <strong>O</strong> R R <strong>I</strong> D G <strong>E</strong> = <strong>PORRIDGE</strong>.",
        marks: 1,
        rubric: [{ key: "PORRIDGE correct", marks: "1 M" }]
      },
      {
        category: "Direct Speech • Mother's Plight",
        q: "What did Tara's mother desperately yell at the boiling pot when it wouldn't stop?",
        ans: "<strong>Answer:</strong><br>• She yelled: <strong>'Do not cook more, pot!'</strong>, but the pot did not listen.",
        marks: 1,
        rubric: [{ key: "'Do not cook more, pot!' quoted", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Tara and her mother remained hungry forever.<br>(b) Tara's mother forgot the stopping magic words.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. The magic pot ensured they never went hungry again.<br>(b) <strong>True</strong>. Mother forgot the exact command 'Stop, pot, stop!'.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What timeless lesson does 'The Magic Porridge Pot' teach children?",
        ans: "<strong>Summary:</strong><br>• A half-learned lesson is dangerous.<br>• Before we begin an action, we must ensure we understand how to bring it safely to an end.",
        marks: 2,
        rubric: [{ key: "Dangers of incomplete knowledge summarized", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg19", num: 19, unit: "Unit 10: Voices & Seasons",
    title: "Strange Talk",
    subtitle: "Animal Language, Onomatopoeia, Speech Manners & Active Listening",
    concepts: [
      "Poem appreciation: A humorous look at how animals speak with distinct voices.",
      "Creature sounds: Frog ('Croak/Ribbit'), Duck ('Quack, quack'), Pig ('Wee-wee/Oink'), Puppies ('Bow-wow').",
      "Contrasting animal efficiency: Animals only speak when needed; humans should avoid chaotic noise.",
      "Classroom discussion etiquette: Taking turns, listening without interrupting, speaking clearly."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="80" cy="55" r="22" fill="#10b981"/><text x="80" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Frog (Croak)</text><circle cx="180" cy="55" r="22" fill="#facc15"/><text x="180" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#713f12" text-anchor="middle">Duck (Quack)</text><circle cx="280" cy="55" r="22" fill="#f472b6"/><text x="280" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Pig (Wee-wee)</text><circle cx="380" cy="55" r="22" fill="#d97706"/><text x="380" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Pup (Bow-wow)</text><text x="250" y="108" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">If children made as much noise all at once, what strange talk that would be!</text></svg>`,
    cbq: {
      title: "Class 2 Animal Sounds Recitation",
      text: "Class 2 staged a humorous play based on 'Strange Talk'. Ananya wore a frog mask and croaked 'Croak-croak!'. Billy wore a duck beak and quacked 'Quack-quack!'. Chetan wore pig ears and grunted 'Wee-wee!'. Then the teacher asked: 'Imagine if all thirty children in this classroom shouted their animal sounds at the very same second! What would happen?'",
      question: "Which sounds did the frog, duck, and pig make? What would happen if all children shouted together? What classroom speech rule does this teach?",
      answer: "1. <strong>Frog:</strong> 'Croak-croak' (or 'Ribbit'); <strong>Duck:</strong> 'Quack-quack'; <strong>Pig:</strong> 'Wee-wee'.<br>2. If all thirty children shouted at once, it would turn into a <strong>chaotic, deafening racket</strong> where nobody could hear or understand anyone.<br>3. <strong>Speech rule:</strong> <strong>Speak one at a time, take turns, and listen attentively</strong> when someone else is speaking.",
      rubric: "1 M for all 3 animal sounds + 1 M for chaotic noise effect + 1 M for turn-taking classroom rule"
    },
    questions: [
      {
        category: "Reading is Fun • Frog's Voice",
        q: "What does the little green frog say instead of saying 'Good morning'?",
        ans: "<strong>Answer:</strong><br>• The little green frog croaks: <strong>'Croak-croak!'</strong>.",
        marks: 1,
        rubric: [{ key: "'Croak-croak' stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Duck by the Water",
        q: "What did the duck by the waterside say when asked how he was?",
        ans: "<strong>Answer:</strong><br>• The duck made a polite quack and said: <strong>'Quack-quack!'</strong>.",
        marks: 1,
        rubric: [{ key: "'Quack-quack' stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Pig in the Sty",
        q: "What does the little pig say when he wants more food?",
        ans: "<strong>Answer:</strong><br>• The little pig squeals: <strong>'Wee-wee!'</strong>.",
        marks: 1,
        rubric: [{ key: "'Wee-wee' stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Three Little Puppies",
        q: "What did the three little puppies say when they asked to go out?",
        ans: "<strong>Answer:</strong><br>• The three little puppies barked cheerfully: <strong>'Bow-wow! Bow-wow!'</strong>.",
        marks: 1,
        rubric: [{ key: "'Bow-wow' stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Poet's Question",
        q: "What does the poet say would happen if children spoke like these animals all at the same time?",
        ans: "<strong>Answer:</strong><br>• The poet says: <strong>'If boys and girls were to speak all together at once, what a strange, terrible noise that would be!'</strong>.",
        marks: 2,
        rubric: [{ key: "Strange, terrible noise / chaos explained", marks: "2 M" }]
      },
      {
        category: "Animal Homes Connection",
        q: "Where do these animals live in the poem:<br>(a) The green frog lives in _______<br>(b) The pig lives in a _______<br>(c) The duck lives by the _______",
        ans: "<strong>Answers:</strong><br>(a) The green frog lives in <strong>a pool / under a log</strong>.<br>(b) The pig lives in a <strong>sty</strong>.<br>(c) The duck lives by the <strong>waterside</strong>.",
        marks: 3,
        rubric: [{ key: "(a) pool/log", marks: "1 M" }, { key: "(b) sty", marks: "1 M" }, { key: "(c) waterside", marks: "1 M" }]
      },
      {
        category: "Rhyming Pairs in Poem",
        q: "Find words in the poem that rhyme with:<br>(a) Log — _______<br>(b) Sty — _______<br>(c) Out — _______",
        ans: "<strong>Answers:</strong><br>(a) Log — <strong>Frog / Dog</strong><br>(b) Sty — <strong>Cry / By</strong><br>(c) Out — <strong>Shout / About</strong>",
        marks: 3,
        rubric: [{ key: "(a) Frog", marks: "1 M" }, { key: "(b) Cry/By", marks: "1 M" }, { key: "(c) Shout", marks: "1 M" }]
      },
      {
        category: "Classroom Etiquette • Speaking Manners",
        q: "Why should students raise their hand before speaking in class?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Raising hands ensures orderly communication.<br>• It prevents everyone from shouting simultaneously, allowing the teacher and classmates to listen to each child's thoughts clearly.",
        marks: 2,
        rubric: [{ key: "Orderly turn-taking explained", marks: "1 M" }, { key: "Clear listening without shouting", marks: "1 M" }]
      },
      {
        category: "Animal Sounds Match",
        q: "Match each bird or animal to its sound:<br>(a) Cow (b) Horse (c) Lion (d) Sheep<br>Sounds: (1) Neigh (2) Moo (3) Baa (4) Roar",
        ans: "<strong>Matching:</strong><br>• (a) Cow — (2) Moo<br>• (b) Horse — (1) Neigh<br>• (c) Lion — (4) Roar<br>• (d) Sheep — (3) Baa",
        marks: 2,
        rubric: [{ key: "All 4 sounds correctly matched", marks: "2 M (0.5 M each)" }]
      },
      {
        category: "Opposites • Voice Adjectives",
        q: "Write the opposite of:<br>(a) Loud × _______<br>(b) Strange × _______<br>(c) Together × _______",
        ans: "<strong>Answers:</strong><br>(a) Loud × <strong>Soft / Quiet</strong><br>(b) Strange × <strong>Normal / Familiar</strong><br>(c) Together × <strong>Alone / Separately</strong>",
        marks: 3,
        rubric: [{ key: "(a) Soft/Quiet", marks: "1 M" }, { key: "(b) Normal", marks: "1 M" }, { key: "(c) Alone/Separately", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'quack'.",
        ans: "<strong>Sample Sentence:</strong><br>• The mother duck waddled into the pond with a loud, cheerful quack.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'quack'", marks: "2 M" }]
      },
      {
        category: "Grammar • Singular and Plural",
        q: "Write the plural of:<br>(a) One frog — Three _______<br>(b) One puppy — Three _______",
        ans: "<strong>Answers:</strong><br>(a) Three <strong>frogs</strong><br>(b) Three <strong>puppies</strong> (change -y to -ies)",
        marks: 2,
        rubric: [{ key: "(a) frogs", marks: "1 M" }, { key: "(b) puppies", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Animal Sounds",
        q: "Fill in the missing letters: C R _ A K (frog's voice).",
        ans: "<strong>Answer:</strong><br>• C R <strong>O</strong> A K = <strong>CROAK</strong>.",
        marks: 1,
        rubric: [{ key: "CROAK correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) A puppy says 'Meow'.<br>(b) A pig's home is called a sty.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. A cat says meow; a puppy barks bow-wow.<br>(b) <strong>True</strong>. A pig's enclosure is called a pigsty.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "What humorous contrast does 'Strange Talk' create between animals and children?",
        ans: "<strong>Summary:</strong><br>• Animals communicate effectively using only one or two simple sounds without causing chaos.<br>• Children have the wonderful gift of language and words, so they should use it politely, speaking one at a time with clarity.",
        marks: 2,
        rubric: [{ key: "Contrast between animal sounds and human language explained", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg20", num: 20, unit: "Unit 10: Voices & Seasons",
    title: "The Grasshopper and the Ant",
    subtitle: "Aesop's Classic Fable, Hard Work, Foresight & Saving for the Future",
    concepts: [
      "Story comprehension: The gay grasshopper spends warm summer days singing, dancing, and mocking.",
      "The diligent ant: Works tirelessly day and night carrying heavy grain into its underground pantry.",
      "The harsh winter: Snow covers the earth; freezing grasshopper starves and begs the ant for food.",
      "The ant's lesson: 'Lazy fellow! You sang and danced all summer. Now go and dance the winter away!'."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><circle cx="90" cy="55" r="24" fill="#22c55e"/><text x="90" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Grasshopper</text><text x="90" y="90" font-family="sans-serif" font-size="8" font-weight="700" fill="#15803d">Sings all summer</text><circle cx="230" cy="55" r="20" fill="#713f12"/><circle cx="270" cy="55" r="14" fill="#f59e0b"/><text x="250" y="90" font-family="sans-serif" font-size="8" font-weight="700" fill="#713f12">Ant carrying grain</text><rect x="360" y="30" width="80" height="60" fill="#0284c7" rx="4"/><text x="400" y="55" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Winter Snow</text><text x="400" y="75" font-family="sans-serif" font-size="9" font-weight="800" fill="#ffffff" text-anchor="middle">No Food!</text><text x="250" y="110" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">Work hard today so you do not starve tomorrow.</text></svg>`,
    cbq: {
      title: "The Winter Grasshopper and Ant Contrast",
      text: "All through the warm sunny summer, the grasshopper did nothing but play his fiddle, sing merry songs, and lounge on soft green clover. Whenever he saw little ants sweating under heavy kernels of golden corn, he laughed: 'Foolish ants! Why work so hard in the sunshine? Life is meant for fun!'. But when freezing winter arrived, thick snow buried the fields. The grasshopper had not a single crumb or fly to eat, while the ants stayed warm in their underground tunnels with piles of sweet grain.",
      question: "How did the grasshopper spend his summer? What were the ants doing? Why did the grasshopper suffer in winter?",
      answer: "1. The grasshopper spent his summer <strong>singing, dancing, and mocking the ants</strong> without doing any work.<br>2. The ants were <strong>working tirelessly, collecting and storing corn and wheat grains</strong> for the cold winter ahead.<br>3. The grasshopper suffered in winter because <strong>he had saved nothing</strong>, and thick snow covered all natural food sources, leaving him starving and freezing.",
      rubric: "1 M for grasshopper's summer laziness + 1 M for ants' hard work + 1 M for winter consequence"
    },
    questions: [
      {
        category: "Reading is Fun • Grasshopper's Habit",
        q: "How did the grasshopper spend his days in summer?",
        ans: "<strong>Answer:</strong><br>• The grasshopper spent his summer days <strong>singing songs, dancing, and sleeping lazily</strong> in the warm sunshine.",
        marks: 2,
        rubric: [{ key: "Singing and dancing", marks: "1 M" }, { key: "Sleeping lazily / doing no work", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Ant's Labor",
        q: "What were the hardworking ants doing all through the summer?",
        ans: "<strong>Answer:</strong><br>• The ants were <strong>marching to and fro, carrying heavy grains of corn and wheat</strong> into their anthill to store for winter.",
        marks: 2,
        rubric: [{ key: "Carrying heavy grains", marks: "1 M" }, { key: "Storing for winter", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Winter Changes",
        q: "What happened when the cold winter arrived?",
        ans: "<strong>Answer:</strong><br>• The earth turned freezing cold, <strong>thick white snow covered all the grass and leaves</strong>, and no food or worms were left for the grasshopper.",
        marks: 2,
        rubric: [{ key: "Freezing cold and snow covered earth", marks: "1 M" }, { key: "No food/leaves left to eat", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Begging for Help",
        q: "Why did the grasshopper go to the ant's house in winter?",
        ans: "<strong>Answer:</strong><br>• The grasshopper was <strong>shivering with cold and dying of hunger</strong>, so he went to beg the ant for a little shelter and a few grains of corn.",
        marks: 2,
        rubric: [{ key: "Shivering and starving", marks: "1 M" }, { key: "Begging for shelter and grains", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Ant's Scolding",
        q: "What did the wise ant say to the lazy grasshopper?",
        ans: "<strong>Answer:</strong><br>• The ant replied angrily: <strong>'Lazy fellow! What were you doing all summer? You laughed at us while we worked! If you sang all summer, you can go and dance the winter away!'</strong> and shut the door.",
        marks: 2,
        rubric: [{ key: "Reminded him of summer mocking", marks: "1 M" }, { key: "'Dance the winter away' quoted", marks: "1 M" }]
      },
      {
        category: "Character Comparison • Contrasting Traits",
        q: "Compare the characters of the Ant and the Grasshopper.",
        ans: "<strong>Comparison:</strong><br>• <strong>The Ant:</strong> Hardworking, disciplined, wise, farsighted, and prepared for emergencies.<br>• <strong>The Grasshopper:</strong> Lazy, careless, irresponsible, pleasure-seeking, and foolish.",
        marks: 3,
        rubric: [{ key: "Ant: hardworking and farsighted", marks: "1.5 M" }, { key: "Grasshopper: lazy and irresponsible", marks: "1.5 M" }]
      },
      {
        category: "Moral of the Story",
        q: "What is the important life lesson taught by 'The Grasshopper and the Ant'?",
        ans: "<strong>Answer:</strong><br>• <strong>'Make hay while the sun shines.'</strong> We must work hard and save resources during good times so that we never suffer in difficult times.",
        marks: 2,
        rubric: [{ key: "Make hay while sun shines proverb/concept", marks: "1 M" }, { key: "Saving for difficult times explained", marks: "1 M" }]
      },
      {
        category: "Opposites • Story Words",
        q: "Write the opposite of:<br>(a) Lazy × _______<br>(b) Summer × _______<br>(c) Warm × _______",
        ans: "<strong>Answers:</strong><br>(a) Lazy × <strong>Hardworking / Active</strong><br>(b) Summer × <strong>Winter</strong><br>(c) Warm × <strong>Cold / Freezing</strong>",
        marks: 3,
        rubric: [{ key: "(a) Hardworking", marks: "1 M" }, { key: "(b) Winter", marks: "1 M" }, { key: "(c) Cold", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Anthill & Underground Storage",
        q: "Where do ants store their food? What is their home called?",
        ans: "<strong>Answer:</strong><br>• Ants live and store their food in an underground <strong>anthill (or colony / nest)</strong> with chambers and tunnels.",
        marks: 2,
        rubric: [{ key: "Anthill / colony identified", marks: "1 M" }, { key: "Chambers/tunnels explained", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'starving'.",
        ans: "<strong>Sample Sentence:</strong><br>• The poor stray dog was shivering and starving in the cold rain until a kind girl fed him warm milk.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'starving'", marks: "2 M" }]
      },
      {
        category: "Science Fact • Ants' Strength",
        q: "How much weight can a tiny ant lift compared to its own body weight?",
        ans: "<strong>Answer:</strong><br>• A tiny ant can lift and carry objects <strong>10 to 50 times heavier than its own body weight</strong>!",
        marks: 1,
        rubric: [{ key: "10 to 50 times body weight stated", marks: "1 M" }]
      },
      {
        category: "Saving Habit for Children",
        q: "How can school children apply the ant's lesson in their daily studies?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Study and revise school lessons every day throughout the year instead of procrastinating.<br>• If you work daily like the ant, you will never panic or struggle when final examinations arrive.",
        marks: 2,
        rubric: [{ key: "Daily study and revision habit", marks: "1 M" }, { key: "Avoiding last-minute exam panic", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Insect Names",
        q: "Fill in the missing letters: G R _ S S H _ P P _ R (jumping insect).",
        ans: "<strong>Answer:</strong><br>• G R <strong>A</strong> S S H <strong>O</strong> P P <strong>E</strong> R = <strong>GRASSHOPPER</strong>.",
        marks: 1,
        rubric: [{ key: "GRASSHOPPER correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) The grasshopper stored five sacks of grain for winter.<br>(b) The ant worked diligently even in hot summer afternoons.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. The grasshopper stored zero food.<br>(b) <strong>True</strong>. The ant worked tirelessly in all seasons.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "Why is 'The Grasshopper and the Ant' one of the most famous fables in human history?",
        ans: "<strong>Summary:</strong><br>• Because it vividly warns against the dangers of laziness and procrastination, while honoring the dignity of labor, foresight, and self-reliance.",
        marks: 2,
        rubric: [{ key: "Dangers of procrastination and value of labor summarized", marks: "2 M" }]
      }
    ]
  }
];

module.exports = { marigoldPart4 };
