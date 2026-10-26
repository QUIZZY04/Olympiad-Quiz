// scripts/builders/marigoldPart3.js
// NCERT Class 2 English: "Marigold Book 2" - Chapters 11 to 15
// Mr. Nobody, Curlylocks and the Three Bears, On My Blackboard I Can Draw, Make It Shorter, I am the Music Man

const marigoldPart3 = [
  {
    id: "mrg11", num: 11, unit: "Unit 6: Mystery & Fairy Tales",
    title: "Mr. Nobody",
    subtitle: "The Mysterious Mischief Maker, Household Habits & Taking Blame",
    concepts: [
      "Poem appreciation: 'I know a funny little man, as quiet as a mouse, who does the mischief that is done in everybody's house!'",
      "List of household mishaps: cracking plates, tearing book pages, leaving doors ajar, spilling ink, scattering pins.",
      "The psychological truth: 'Mr. Nobody' is an imaginary figure used by children to avoid admitting their own careless mistakes.",
      "Cultivating honesty, responsibility, and keeping home neat."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#fefce8" rx="10"/><circle cx="100" cy="55" r="22" fill="#94a3b8"/><text x="100" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Quiet Mouse</text><line x1="180" y1="35" x2="220" y2="75" stroke="#ef4444" stroke-width="4"/><line x1="220" y1="35" x2="180" y2="75" stroke="#ef4444" stroke-width="4"/><text x="200" y="95" font-family="sans-serif" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">Cracked Plate</text><rect x="290" y="35" width="45" height="40" fill="#3b82f6" rx="3"/><text x="312" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Open Door</text><text x="410" y="60" font-family="sans-serif" font-size="12" font-weight="800" fill="#713f12">Mr. Nobody!</text><text x="250" y="110" font-family="sans-serif" font-size="12" font-weight="700" fill="#713f12" text-anchor="middle">Own your mistakes honestly instead of blaming 'Mr. Nobody'.</text></svg>`,
    cbq: {
      title: "The Broken Glass Mystery in Kitchen",
      text: "Mother walked into the kitchen and saw a broken water glass on the floor. When she asked who dropped it, both Bunty and Chintu shook their heads and whispered: 'Nobody!'. Mother smiled gently and recited lines from the poem 'Mr. Nobody'. Bunty lowered his head and confessed: 'I am sorry, Ma. I bumped the table while reaching for biscuits.'",
      question: "Who did the brothers blame initially? Who was Mr. Nobody in reality? Why did mother appreciate Bunty's confession?",
      answer: "1. Initially, they blamed <strong>'Nobody'</strong> (the imaginary Mr. Nobody).<br>2. In reality, Mr. Nobody was <strong>Bunty himself</strong>, who accidentally bumped the table.<br>3. Mother appreciated him because <strong>speaking the truth honestly and admitting mistakes</strong> takes courage and is far better than making false excuses.",
      rubric: "1 M for 'Nobody' + 1 M for Bunty's real responsibility + 1 M for honesty and courage moral"
    },
    questions: [
      {
        category: "Reading is Fun • Identity",
        q: "Who is Mr. Nobody according to the poem?",
        ans: "<strong>Answer:</strong><br>• Mr. Nobody is described as a <strong>funny little man, as quiet as a mouse</strong>, who causes all the mischief in everybody's house.",
        marks: 2,
        rubric: [{ key: "Funny little man", marks: "1 M" }, { key: "Quiet as a mouse", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Has Anyone Seen Him?",
        q: "Has anyone ever seen his face?",
        ans: "<strong>Answer:</strong><br>• <strong>No</strong>, no one has ever seen his face, yet everyone agrees that every cracked plate was broken by him!",
        marks: 1,
        rubric: [{ key: "No one has ever seen him stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • List of Mischief",
        q: "Name three mischievous things done by Mr. Nobody in the house.",
        ans: "<strong>Answer:</strong><br>1. <strong>Tearing pages</strong> from books.<br>2. <strong>Leaving doors ajar</strong> (half open).<br>3. <strong>Spilling ink</strong> and scattering buttons/pins on the carpet.",
        marks: 3,
        rubric: [{ key: "Tearing books", marks: "1 M" }, { key: "Leaving doors ajar", marks: "1 M" }, { key: "Spilling ink / scattering pins", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Word Meaning",
        q: "What does the word 'ajar' mean in the poem?",
        ans: "<strong>Answer:</strong><br>• <strong>Ajar</strong> means <strong>slightly open / half open</strong> (a door that is not closed shut).",
        marks: 1,
        rubric: [{ key: "Slightly open / half open defined", marks: "1 M" }]
      },
      {
        category: "Simile in Poem",
        q: "What simile is used to describe how quiet Mr. Nobody is? Complete: 'As quiet as a _______'.",
        ans: "<strong>Answer:</strong><br>• 'As quiet as a <strong>mouse</strong>'.",
        marks: 1,
        rubric: [{ key: "mouse correct", marks: "1 M" }]
      },
      {
        category: "Rhyming Words in Poem",
        q: "Find words in the poem that rhyme with:<br>(a) Mouse — _______<br>(b) Face — _______<br>(c) See — _______",
        ans: "<strong>Answers:</strong><br>(a) Mouse — <strong>House</strong><br>(b) Face — <strong>Place</strong><br>(c) See — <strong>Agree / We / Me</strong>",
        marks: 3,
        rubric: [{ key: "(a) House", marks: "1 M" }, { key: "(b) Place", marks: "1 M" }, { key: "(c) Agree/Me", marks: "1 M" }]
      },
      {
        category: "Moral Reasoning • Honesty",
        q: "Why do children invent 'Mr. Nobody' when something breaks at home?",
        ans: "<strong>Step-by-Step Explanation:</strong><br>• Children fear being scolded or punished when they accidentally break or spill something.<br>• However, parents love children who speak the truth, and admitting mistakes with a sincere 'sorry' is the mark of good character.",
        marks: 2,
        rubric: [{ key: "Fear of scolding explained", marks: "1 M" }, { key: "Honesty and sincere apologies valued", marks: "1 M" }]
      },
      {
        category: "Opposites • Story Words",
        q: "Write the opposite of:<br>(a) Quiet × _______<br>(b) Nobody × _______<br>(c) Agree × _______",
        ans: "<strong>Answers:</strong><br>(a) Quiet × <strong>Noisy / Loud</strong><br>(b) Nobody × <strong>Everybody / Somebody</strong><br>(c) Agree × <strong>Disagree</strong>",
        marks: 3,
        rubric: [{ key: "(a) Noisy", marks: "1 M" }, { key: "(b) Everybody", marks: "1 M" }, { key: "(c) Disagree", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'mischief'.",
        ans: "<strong>Sample Sentence:</strong><br>• The playful kitten got into mischief by tangling grandmother's wool yarn all over the rug.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'mischief'", marks: "2 M" }]
      },
      {
        category: "Grammar • Contractions",
        q: "Write the full form of these contracted words:<br>(a) Don't = _______<br>(b) Isn't = _______<br>(c) That's = _______",
        ans: "<strong>Answers:</strong><br>(a) Don't = <strong>Do not</strong><br>(b) Isn't = <strong>Is not</strong><br>(c) That's = <strong>That is</strong>",
        marks: 3,
        rubric: [{ key: "(a) Do not", marks: "1 M" }, { key: "(b) Is not", marks: "1 M" }, { key: "(c) That is", marks: "1 M" }]
      },
      {
        category: "Good Habits at Home",
        q: "Name two ways you can keep your room tidy so 'Mr. Nobody' never causes trouble.",
        ans: "<strong>Answer:</strong><br>1. Put storybooks back on the shelf after reading.<br>2. Close room doors and cupboard drawers gently after use.",
        marks: 2,
        rubric: [{ key: "Putting books back", marks: "1 M" }, { key: "Closing doors/cupboards", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Household Items",
        q: "Fill in the missing letters: C U R T _ _ N (cloth hanging on window).",
        ans: "<strong>Answer:</strong><br>• C U R T <strong>A I</strong> N = <strong>CURTAIN</strong>.",
        marks: 1,
        rubric: [{ key: "CURTAIN correct", marks: "1 M" }]
      },
      {
        category: "Compound Words",
        q: "Separate these compound words into two words:<br>(a) Everybody = _______ + _______<br>(b) Nobody = _______ + _______",
        ans: "<strong>Answers:</strong><br>(a) Everybody = <strong>Every + body</strong><br>(b) Nobody = <strong>No + body</strong>",
        marks: 2,
        rubric: [{ key: "(a) Every + body", marks: "1 M" }, { key: "(b) No + body", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Mr. Nobody is an actual ghost living behind the curtains.<br>(b) We should own up to our mistakes instead of blaming imaginary people.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. Mr. Nobody is simply a poetic metaphor for careless mistakes.<br>(b) <strong>True</strong>. Honesty and responsibility are essential human virtues.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "What humorous truth about family life does 'Mr. Nobody' expose?",
        ans: "<strong>Summary:</strong><br>• It delightfully highlights that in every household, whenever something gets broken or misplaced, no family member willingly admits fault — yet everyone knows who was careless!",
        marks: 2,
        rubric: [{ key: "Humorous truth about blaming nobody explained", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg12", num: 12, unit: "Unit 6: Mystery & Fairy Tales",
    title: "Curlylocks and the Three Bears",
    subtitle: "Classic Goldilocks Tale, Sizing, Porridge, Beds & Bear Family",
    concepts: [
      "Story comprehension: Curlylocks enters the cottage of the Three Bears (Papa Bear, Mama Bear, Baby Bear).",
      "Degrees of size, temperature, and hardness: Big bowl (hot), Middle bowl (cold), Tiny bowl (just right).",
      "Beds comparison: Big bed (too hard), Middle bed (too soft), Tiny bed (just right).",
      "Manners and trespassing: Leaving a home respectfully without destroying other people's belongings."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><circle cx="90" cy="55" r="28" fill="#78350f"/><text x="90" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Papa Bear</text><circle cx="180" cy="55" r="22" fill="#9a3412"/><text x="180" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Mama Bear</text><circle cx="260" cy="55" r="16" fill="#b45309"/><text x="260" y="60" font-family="sans-serif" font-size="8" font-weight="700" fill="#ffffff" text-anchor="middle">Baby</text><circle cx="360" cy="55" r="20" fill="#f59e0b"/><text x="360" y="60" font-family="sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">Curlylocks</text><text x="440" y="60" font-family="sans-serif" font-size="11" font-weight="800" fill="#dc2626">JUST RIGHT!</text><text x="250" y="105" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Papa Bear (Big), Mama Bear (Middle), Baby Bear (Tiny)</text></svg>`,
    cbq: {
      title: "Curlylocks in the Forest Cottage",
      text: "Curlylocks was walking near the forest when she saw a charming wooden cottage. The Bear family had gone for a morning walk while their oat porridge cooled down. Curlylocks walked inside without knocking. On the table were three bowls: a huge bowl for Papa Bear, a middle-sized bowl for Mama Bear, and a tiny little bowl for Baby Bear.",
      question: "Why was the cottage empty? Why did Curlylocks reject Papa Bear's and Mama Bear's porridge? Whose porridge did she eat all up?",
      answer: "1. The cottage was empty because the <strong>Three Bears had gone for a walk</strong> while their porridge cooled.<br>2. She rejected Papa Bear's porridge because it was <strong>too hot</strong>, and Mama Bear's because it was <strong>too cold</strong>.<br>3. She ate all up <strong>Baby Bear's tiny bowl of porridge</strong> because it was <strong>just right</strong>!",
      rubric: "1 M for bears on walk + 1 M for too hot and too cold explanation + 1 M for Baby Bear's just right bowl"
    },
    questions: [
      {
        category: "Reading is Fun • Girl's Name",
        q: "Why was the little girl called 'Curlylocks'?",
        ans: "<strong>Answer:</strong><br>• She was called Curlylocks because she had <strong>curly golden hair</strong> on her head.",
        marks: 1,
        rubric: [{ key: "Curly golden hair stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Cottage Family",
        q: "Who lived in the cottage in the forest?",
        ans: "<strong>Answer:</strong><br>• The <strong>Bear family</strong> lived in the cottage: <strong>Papa Bear, Mama Bear, and Baby Bear</strong>.",
        marks: 2,
        rubric: [{ key: "Bear family identified", marks: "1 M" }, { key: "Papa, Mama, Baby Bear named", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Porridge Bowls",
        q: "Describe the three bowls of porridge on the table and how Curlylocks felt about each.",
        ans: "<strong>Step-by-Step Answer:</strong><br>1. <strong>Big bowl (Papa Bear):</strong> Too hot.<br>2. <strong>Middle-sized bowl (Mama Bear):</strong> Too cold.<br>3. <strong>Tiny little bowl (Baby Bear):</strong> Just right, and she ate it all up!",
        marks: 3,
        rubric: [{ key: "Big bowl: too hot", marks: "1 M" }, { key: "Middle bowl: too cold", marks: "1 M" }, { key: "Tiny bowl: just right and eaten", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Beds Comparison",
        q: "What was wrong with Papa Bear's and Mama Bear's beds? Which bed did Curlylocks sleep in?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Papa Bear's big bed was <strong>too hard</strong>.<br>• Mama Bear's middle bed was <strong>too soft</strong>.<br>• Baby Bear's tiny bed was <strong>just right</strong>, and she fell fast asleep in it.",
        marks: 3,
        rubric: [{ key: "Big bed: too hard", marks: "1 M" }, { key: "Middle bed: too soft", marks: "1 M" }, { key: "Tiny bed: just right and slept", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • The Escape",
        q: "What did Curlylocks do when she woke up and saw the three bears staring at her?",
        ans: "<strong>Answer:</strong><br>• Curlylocks screamed in shock, <strong>jumped out of the tiny bed, leaped out of the open window</strong>, and ran away as fast as her legs could carry her!",
        marks: 2,
        rubric: [{ key: "Jumped out of bed/window", marks: "1 M" }, { key: "Ran away as fast as she could", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Degrees of Sizing",
        q: "Arrange these words in order from BIGGEST to SMALLEST: Tiny, Huge, Middle-sized.",
        ans: "<strong>Arrangement:</strong><br>1. <strong>Huge</strong> (biggest)<br>2. <strong>Middle-sized</strong><br>3. <strong>Tiny</strong> (smallest).",
        marks: 2,
        rubric: [{ key: "Correct order: Huge, Middle-sized, Tiny", marks: "2 M" }]
      },
      {
        category: "Opposites • Texture & Temperature",
        q: "Write the opposite of:<br>(a) Hard × _______<br>(b) Hot × _______<br>(c) Asleep × _______",
        ans: "<strong>Answers:</strong><br>(a) Hard × <strong>Soft</strong><br>(b) Hot × <strong>Cold</strong><br>(c) Asleep × <strong>Awake</strong>",
        marks: 3,
        rubric: [{ key: "(a) Soft", marks: "1 M" }, { key: "(b) Cold", marks: "1 M" }, { key: "(c) Awake", marks: "1 M" }]
      },
      {
        category: "Manners & Etiquette • Respecting Privacy",
        q: "What should Curlylocks have done before entering someone else's house?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• She should have <strong>knocked on the door</strong> and waited politely for permission.<br>• If nobody was home, she should never have entered or touched their food and beds without asking.",
        marks: 2,
        rubric: [{ key: "Knocking on door", marks: "1 M" }, { key: "Not entering empty houses without permission", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Porridge",
        q: "What is 'porridge'? What grain is commonly used to make it?",
        ans: "<strong>Answer:</strong><br>• <strong>Porridge</strong> is a warm, soft cereal dish cooked by boiling crushed grains in milk or water (commonly made from <strong>oats or daliya</strong>).",
        marks: 2,
        rubric: [{ key: "Warm boiled cereal defined", marks: "1 M" }, { key: "Oats / daliya identified", marks: "1 M" }]
      },
      {
        category: "Direct Speech • Papa Bear's Voice",
        q: "How did Papa Bear speak when he saw his bowl? (In a gruff roaring voice or a tiny squeak?)",
        ans: "<strong>Answer:</strong><br>• Papa Bear spoke in a <strong>deep, big, gruff voice</strong>: 'Somebody has been eating my porridge!'.",
        marks: 1,
        rubric: [{ key: "Big gruff voice identified", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the phrase 'just right'.",
        ans: "<strong>Sample Sentence:</strong><br>• The warm soup mother made was neither too salty nor too spicy — it was just right!",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'just right'", marks: "2 M" }]
      },
      {
        category: "Baby Animals • Bear Cub",
        q: "What is a young baby bear called: a puppy, a calf, or a cub?",
        ans: "<strong>Answer:</strong><br>• A baby bear is called a <strong>cub</strong>.",
        marks: 1,
        rubric: [{ key: "Cub correct", marks: "1 M" }]
      },
      {
        category: "Grammar • Pronouns",
        q: "Fill in with [He, She, They]:<br>(a) Curlylocks was hungry. ___ ate the porridge.<br>(b) The three bears were angry. ___ searched the bedroom.",
        ans: "<strong>Answers:</strong><br>(a) <strong>She</strong> ate the porridge.<br>(b) <strong>They</strong> searched the bedroom.",
        marks: 2,
        rubric: [{ key: "(a) She", marks: "1 M" }, { key: "(b) They", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Curlylocks ate all of Papa Bear's porridge.<br>(b) Baby Bear had a tiny little bed.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. She ate all of Baby Bear's porridge.<br>(b) <strong>True</strong>. Baby Bear had a tiny little bed that was just right.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What is the moral of 'Curlylocks and the Three Bears'?",
        ans: "<strong>Summary:</strong><br>• Always respect other people's homes, privacy, and belongings.<br>• Never trespass or use someone's things without permission, or you will end up in great trouble.",
        marks: 2,
        rubric: [{ key: "Respecting privacy and property summarized", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg13", num: 13, unit: "Unit 7: Creativity & Numbers",
    title: "On My Blackboard I Can Draw",
    subtitle: "Artistic Drawing, Rhyming Numbers, House Architecture & Nature",
    concepts: [
      "Poem recitation and sequential counting from 1 to 6.",
      "The drawing elements: 1 little house, 2 green doors, 3 red windows, 4 chimneys, 5 steps, 6 yellow marigolds.",
      "Developing spatial imagination and architectural drawing skills.",
      "Color recognition and descriptive adjectives in poetic form."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#1e293b" rx="10"/><rect x="70" y="45" width="80" height="50" fill="none" stroke="#ffffff" stroke-width="2"/><polygon points="60,45 110,15 160,45" fill="none" stroke="#ffffff" stroke-width="2"/><rect x="85" y="65" width="20" height="30" fill="#22c55e"/><rect x="120" y="55" width="16" height="16" fill="#ef4444"/><rect x="135" y="20" width="8" height="18" fill="#e2e8f0"/><circle cx="280" cy="55" r="16" fill="#facc15"/><text x="280" y="60" font-family="sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">6 Marigolds</text><text x="400" y="60" font-family="sans-serif" font-size="12" font-weight="800" fill="#ffffff">1 House to 6 Flowers!</text><text x="250" y="105" font-family="sans-serif" font-size="11" font-weight="700" fill="#94a3b8" text-anchor="middle">Blackboard chalk drawing counting from 1 to 6</text></svg>`,
    cbq: {
      title: "Classroom Blackboard Art Challenge",
      text: "During art class, Anuj took colourful chalks to the blackboard. Following the poem 'On My Blackboard I Can Draw', he drew: 1 cozy house, 2 green doors opening wide, 3 red windows, 4 smoking chimneys, 5 steps leading inside, and 6 golden yellow marigolds growing straight against the brick wall.",
      question: "How many doors, windows, and chimneys did Anuj draw? What flower was planted against the wall, and what colour were they?",
      answer: "1. <strong>Doors:</strong> 2 green doors. <strong>Windows:</strong> 3 red windows. <strong>Chimneys:</strong> 4 white/smoking chimneys.<br>2. <strong>Flowers:</strong> <strong>Marigolds</strong>, and they were <strong>golden yellow</strong>, standing straight against the wall.",
      rubric: "1.5 M for 2 doors, 3 windows, 4 chimneys + 1.5 M for 6 yellow marigolds"
    },
    questions: [
      {
        category: "Reading is Fun • Sequential Items",
        q: "What does the child draw on his blackboard for numbers 1, 2, and 3?",
        ans: "<strong>Answer:</strong><br>• Number 1: <strong>One little house</strong>.<br>• Number 2: <strong>Two green doors</strong> that open wide.<br>• Number 3: <strong>Three red windows</strong> shining bright.",
        marks: 3,
        rubric: [{ key: "1 little house", marks: "1 M" }, { key: "2 green doors", marks: "1 M" }, { key: "3 red windows", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Sequential Items Part 2",
        q: "What does the child draw for numbers 4, 5, and 6?",
        ans: "<strong>Answer:</strong><br>• Number 4: <strong>Four little chimneys</strong> painted white.<br>• Number 5: <strong>Five little steps</strong> leading inside.<br>• Number 6: <strong>Six yellow marigolds</strong> straight against the wall.",
        marks: 3,
        rubric: [{ key: "4 chimneys", marks: "1 M" }, { key: "5 steps", marks: "1 M" }, { key: "6 yellow marigolds", marks: "1 M" }]
      },
      {
        category: "Color Identification in Poem",
        q: "Match each architectural item to its color in the poem:<br>(a) Doors (b) Windows (c) Chimneys (d) Marigolds<br>Colors: (1) Red (2) White (3) Green (4) Yellow",
        ans: "<strong>Matching:</strong><br>• (a) Doors — (3) Green<br>• (b) Windows — (1) Red<br>• (c) Chimneys — (2) White<br>• (d) Marigolds — (4) Yellow",
        marks: 4,
        rubric: [{ key: "All 4 colors correctly matched", marks: "4 M (1 M each)" }]
      },
      {
        category: "Rhyming Pairs in Poem",
        q: "Find words in the poem that rhyme with:<br>(a) Wide — _______<br>(b) White — _______<br>(c) Wall — _______",
        ans: "<strong>Answers:</strong><br>(a) Wide — <strong>Inside</strong><br>(b) White — <strong>Bright</strong><br>(c) Wall — <strong>Tall / All</strong>",
        marks: 3,
        rubric: [{ key: "(a) Inside", marks: "1 M" }, { key: "(b) Bright", marks: "1 M" }, { key: "(c) Tall/All", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Chimney Function",
        q: "What is a chimney on a house roof used for?",
        ans: "<strong>Answer:</strong><br>• A <strong>chimney</strong> is a vertical pipe that carries smoke, soot, and gases safely out from a fireplace or kitchen stove through the roof into the air.",
        marks: 2,
        rubric: [{ key: "Carries smoke from fireplace/stove", marks: "1 M" }, { key: "Exhausts outside roof safely", marks: "1 M" }]
      },
      {
        category: "Creative Expression • Your Dream House",
        q: "If you could draw your dream house, what is one special feature you would add?",
        ans: "<strong>Sample Answer:</strong><br>• I would add a <strong>wooden treehouse</strong> in the backyard with a rope ladder and a big telescope to watch the night stars.",
        marks: 2,
        rubric: [{ key: "Creative architectural feature described clearly", marks: "2 M" }]
      },
      {
        category: "Counting and Number Names",
        q: "Write the number names for the digits used in the poem (1 to 6).",
        ans: "<strong>Answers:</strong><br>1 = <strong>One</strong>, 2 = <strong>Two</strong>, 3 = <strong>Three</strong>, 4 = <strong>Four</strong>, 5 = <strong>Five</strong>, 6 = <strong>Six</strong>.",
        marks: 2,
        rubric: [{ key: "All 6 number names spelled correctly", marks: "2 M" }]
      },
      {
        category: "Flowers in Nature • Marigold",
        q: "Why are marigolds (Genda phool) special in Indian homes?",
        ans: "<strong>Step-by-Step Answer:</strong><br>• Marigolds are bright golden-orange flowers with a fresh fragrance.<br>• They are used to make garlands for festival celebrations (like Diwali), weddings, and decorating front doorways (Toran).",
        marks: 2,
        rubric: [{ key: "Golden fragrance described", marks: "1 M" }, { key: "Festivals / garlands / Toran decoration", marks: "1 M" }]
      },
      {
        category: "Describing Words (Adjectives)",
        q: "Identify the adjective in the phrase: 'Three red windows shining bright'.",
        ans: "<strong>Answer:</strong><br>• The adjectives are <strong>'Three'</strong> (number), <strong>'red'</strong> (color), and <strong>'bright'</strong> (quality).",
        marks: 2,
        rubric: [{ key: "red identified", marks: "1 M" }, { key: "bright / three identified", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'straight'.",
        ans: "<strong>Sample Sentence:</strong><br>• The tall sunflowers stood straight against the wooden garden fence.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'straight'", marks: "2 M" }]
      },
      {
        category: "Opposites • Position Words",
        q: "Write the opposite of:<br>(a) Wide × _______<br>(b) Inside × _______<br>(c) Straight × _______",
        ans: "<strong>Answers:</strong><br>(a) Wide × <strong>Narrow</strong><br>(b) Inside × <strong>Outside</strong><br>(c) Straight × <strong>Crooked / Bent</strong>",
        marks: 3,
        rubric: [{ key: "(a) Narrow", marks: "1 M" }, { key: "(b) Outside", marks: "1 M" }, { key: "(c) Crooked/Bent", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Architectural Words",
        q: "Fill in the missing letters: C H _ M N _ Y (smoke pipe).",
        ans: "<strong>Answer:</strong><br>• C H <strong>I</strong> M N <strong>E</strong> Y = <strong>CHIMNEY</strong>.",
        marks: 1,
        rubric: [{ key: "CHIMNEY correct", marks: "1 M" }]
      },
      {
        category: "Drawing Tool • Chalk and Slate",
        q: "What tools are used to write and draw on a classroom blackboard?",
        ans: "<strong>Answer:</strong><br>• <strong>White and coloured chalk sticks</strong> and a <strong>duster (felt eraser)</strong> are used.",
        marks: 1,
        rubric: [{ key: "Chalk and duster named", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) The poem mentions six blue marigolds.<br>(b) The house has two green doors.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. The marigolds are yellow, not blue.<br>(b) <strong>True</strong>. The poem mentions 'two green doors that open wide'.",
        marks: 2,
        rubric: [{ key: "(a) False with color correction", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "How does 'On My Blackboard I Can Draw' integrate math and art?",
        ans: "<strong>Summary:</strong><br>• It seamlessly connects sequential number counting (1 to 6) with creative visual imagination, showing how numbers form the foundational structure of art, geometry, and architecture.",
        marks: 2,
        rubric: [{ key: "Integration of counting and visual art explained", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg14", num: 14, unit: "Unit 7: Creativity & Numbers",
    title: "Make It Shorter",
    subtitle: "Akbar and Birbal, Lateral Thinking, Wit & Relative Length",
    concepts: [
      "Story comprehension: Emperor Akbar challenges his royal courtiers to make a chalk line shorter without erasing it.",
      "The failure of arrogant courtiers: No one knows how to shorten a line without rubbing.",
      "Birbal's brilliant lateral thinking: Drawing a longer line right beside it, making the first line relatively shorter.",
      "Developing out-of-the-box problem solving and wit over physical force."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#eff6ff" rx="10"/><text x="100" y="30" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e40af">Akbar's Line:</text><line x1="80" y1="45" x2="220" y2="45" stroke="#ef4444" stroke-width="6" stroke-linecap="round"/><text x="100" y="80" font-family="sans-serif" font-size="11" font-weight="700" fill="#047857">Birbal's Line:</text><line x1="80" y1="95" x2="380" y2="95" stroke="#059669" stroke-width="6" stroke-linecap="round"/><text x="440" y="70" font-family="sans-serif" font-size="11" font-weight="800" fill="#15803d">Shorter now!</text></svg>`,
    cbq: {
      title: "The Royal Court Chalk Puzzle",
      text: "Emperor Akbar drew a white line on the royal marble floor and commanded: 'Courtiers! Make this line shorter, but do not touch it or erase any part of it!'. The courtiers were puzzled; some tried to cover it with their shawls, but Akbar forbade it. Then Birbal stepped forward with a smile and drew a second line on the floor.",
      question: "What was Akbar's condition for shortening the line? How did Birbal solve the puzzle without touching Akbar's line? What does this teach us about problem solving?",
      answer: "1. <strong>Akbar's condition:</strong> The line must be made shorter <strong>without rubbing out or erasing any part of it</strong>.<br>2. <strong>Birbal's solution:</strong> He drew a <strong>longer line right beside Akbar's line</strong>. When compared together, Akbar's line automatically became the shorter one!<br>3. <strong>Lesson:</strong> Clever lateral thinking and looking at problems from a different perspective solves challenges that brute force cannot.",
      rubric: "1 M for condition + 1 M for Birbal's longer line solution + 1 M for lateral thinking moral"
    },
    questions: [
      {
        category: "Reading is Fun • Akbar's Challenge",
        q: "What did Emperor Akbar draw on the floor of his court?",
        ans: "<strong>Answer:</strong><br>• Emperor Akbar drew a <strong>straight line</strong> on the floor.",
        marks: 1,
        rubric: [{ key: "Line on the floor stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Royal Order",
        q: "What was Akbar's royal order to his courtiers regarding the line?",
        ans: "<strong>Answer:</strong><br>• His order was: <strong>'Make this line shorter, but do not erase any part of it!'</strong>",
        marks: 2,
        rubric: [{ key: "Make it shorter", marks: "1 M" }, { key: "Without erasing condition", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Courtier's Reaction",
        q: "Why were the ministers and courtiers puzzled?",
        ans: "<strong>Answer:</strong><br>• They were puzzled because they could not imagine how a line could ever be made shorter without rubbing out its ends.",
        marks: 2,
        rubric: [{ key: "Could not imagine shortening without erasing", marks: "2 M" }]
      },
      {
        category: "Reading is Fun • Birbal's Clever Move",
        q: "What did Birbal do to solve the Emperor's puzzle?",
        ans: "<strong>Answer:</strong><br>• Birbal took a piece of chalk and <strong>drew a longer line under Akbar's line</strong>.<br>• Everyone in the court saw that Akbar's first line was now clearly the shorter line!",
        marks: 2,
        rubric: [{ key: "Drew a longer line beside/under it", marks: "1 M" }, { key: "First line became shorter in comparison", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Akbar's Praise",
        q: "What did Emperor Akbar say when he saw Birbal's line?",
        ans: "<strong>Answer:</strong><br>• Akbar smiled and said: <strong>'That is true! You have made my line shorter, Birbal!'</strong> and praised his sharp wit.",
        marks: 2,
        rubric: [{ key: "Akbar smiled and agreed line was shorter", marks: "2 M" }]
      },
      {
        category: "Grammar • Degrees of Comparison",
        q: "Fill in the blanks with the correct form of the adjective:<br>(a) Short — _______ — Shortest<br>(b) Long — Longer — _______<br>(c) Clever — Cleverer — _______",
        ans: "<strong>Answers:</strong><br>(a) Short — <strong>Shorter</strong> — Shortest<br>(b) Long — Longer — <strong>Longest</strong><br>(c) Clever — Cleverer — <strong>Cleverest</strong>",
        marks: 3,
        rubric: [{ key: "(a) Shorter", marks: "1 M" }, { key: "(b) Longest", marks: "1 M" }, { key: "(c) Cleverest", marks: "1 M" }]
      },
      {
        category: "Character Sketch • Birbal's Personality",
        q: "Name two qualities of Birbal that made him Emperor Akbar's favorite minister.",
        ans: "<strong>Answer:</strong><br>1. His <strong>sharp wit and clever thinking</strong>.<br>2. His <strong>calm wisdom and sense of humor</strong> in solving tricky disputes.",
        marks: 2,
        rubric: [{ key: "Sharp wit / intelligence", marks: "1 M" }, { key: "Calm wisdom / humor", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Royal Court Words",
        q: "What is a 'courtier'?",
        ans: "<strong>Answer:</strong><br>• A <strong>courtier</strong> is a minister, nobleman, or advisor who attends the royal court of a king or emperor.",
        marks: 1,
        rubric: [{ key: "Advisor / nobleman in royal court defined", marks: "1 M" }]
      },
      {
        category: "Opposites • Comparison Words",
        q: "Write the opposite of:<br>(a) Shorter × _______<br>(b) Erase × _______<br>(c) True × _______",
        ans: "<strong>Answers:</strong><br>(a) Shorter × <strong>Longer</strong><br>(b) Erase × <strong>Draw / Write</strong><br>(c) True × <strong>False / Untrue</strong>",
        marks: 3,
        rubric: [{ key: "(a) Longer", marks: "1 M" }, { key: "(b) Draw/Write", marks: "1 M" }, { key: "(c) False", marks: "1 M" }]
      },
      {
        category: "Lateral Thinking Puzzle",
        q: "How can you make the number 9 become 6 without doing any subtraction or addition?",
        ans: "<strong>Answer:</strong><br>• Simply <strong>turn the paper upside down</strong>! The digit 9 rotated 180 degrees becomes 6.",
        marks: 2,
        rubric: [{ key: "Turn paper upside down explained", marks: "2 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'puzzled'.",
        ans: "<strong>Sample Sentence:</strong><br>• The detective looked puzzled when he found no footprints in the garden.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'puzzled'", marks: "2 M" }]
      },
      {
        category: "Historical Context • Akbar and Birbal",
        q: "Who was Emperor Akbar? What was the capital of his empire?",
        ans: "<strong>Answer:</strong><br>• Akbar was one of the greatest <strong>Mughal Emperors of India</strong>, famous for his wisdom and patronage of arts and nine jewels (Navratnas). His capitals included Agra and Fatehpur Sikri.",
        marks: 2,
        rubric: [{ key: "Mughal Emperor of India identified", marks: "1 M" }, { key: "Wisdom/Navratnas/Agra mentioned", marks: "1 M" }]
      },
      {
        category: "Spelling Check • Court Words",
        q: "Fill in the missing letters: E M P _ R _ R (ruler of an empire).",
        ans: "<strong>Answer:</strong><br>• E M P <strong>E</strong> R <strong>O</strong> R = <strong>EMPEROR</strong>.",
        marks: 1,
        rubric: [{ key: "EMPEROR correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) Birbal erased half of Akbar's line with an eraser.<br>(b) Drawing a longer line makes the existing line relatively shorter.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. Birbal never touched or erased Akbar's line.<br>(b) <strong>True</strong>. Length is relative when placed side-by-side.",
        marks: 2,
        rubric: [{ key: "(a) False with reason", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Chapter Reflection",
        q: "What is the ultimate lesson of 'Make It Shorter'?",
        ans: "<strong>Summary:</strong><br>• Great problems do not always require destructive action (like erasing).<br>• By introducing a broader perspective or setting a higher benchmark, challenges find elegant, creative solutions.",
        marks: 2,
        rubric: [{ key: "Creative non-destructive solutions summarized", marks: "2 M" }]
      }
    ]
  },
  {
    id: "mrg15", num: 15, unit: "Unit 8: Music & Harmony",
    title: "I am the Music Man",
    subtitle: "Musical Instruments, Rhythm, Piano, Bass Drum & Faraway Lands",
    concepts: [
      "Poem recitation: 'I am the music man, I come from far away, and I can play! What can you play? I play the piano!'",
      "Musical instrument sounds: Piano ('pia-pia-piano') and big bass drum ('boom-di-boom-di-boom').",
      "Identifying different musical families: strings, keys, percussion, and wind.",
      "Developing rhythm, music appreciation, and expressive body movement."
    ],
    svg: `<svg viewBox="0 0 500 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ecfdf5" rx="10"/><rect x="70" y="35" width="80" height="50" fill="#0f172a" rx="4"/><line x1="85" y1="35" x2="85" y2="70" stroke="#ffffff" stroke-width="4"/><line x1="100" y1="35" x2="100" y2="70" stroke="#ffffff" stroke-width="4"/><line x1="115" y1="35" x2="115" y2="70" stroke="#ffffff" stroke-width="4"/><line x1="130" y1="35" x2="130" y2="70" stroke="#ffffff" stroke-width="4"/><text x="110" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Piano (Pia-pia)</text><circle cx="280" cy="60" r="28" fill="#dc2626" stroke="#991b1b" stroke-width="3"/><line x1="240" y1="30" x2="265" y2="50" stroke="#713f12" stroke-width="3"/><line x1="320" y1="30" x2="295" y2="50" stroke="#713f12" stroke-width="3"/><text x="280" y="105" font-family="sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Big Drum (Boom-di-boom)</text><text x="420" y="60" font-family="sans-serif" font-size="13" font-weight="800" fill="#047857">Music Joy!</text></svg>`,
    cbq: {
      title: "School Annual Day Music Troupe",
      text: "During the annual school concert, a lively performer dressed as the 'Music Man' walked onto the stage. He announced: 'I come from far away and I can play!'. First, his fingers danced across the black and white keys of a gleaming grand piano: 'pia-pia-piano!'. Then he struck a massive red bass drum with wooden mallets: 'BOOM-DI-BOOM-DI-BOOM!'.",
      question: "Which two musical instruments did the Music Man play? What sound words describe their music in the poem? Why is music joyful?",
      answer: "1. The Music Man played the <strong>Piano</strong> and the <strong>Big Bass Drum</strong>.<br>2. <strong>Sound words:</strong> Piano = <strong>'pia-pia-piano, pia-piano'</strong>; Big Drum = <strong>'boom-di-boom-di-boom'</strong>.<br>3. Music brings joy because rhythmic melodies stimulate our imagination, lift our spirits, and invite us to sing and dance happily together.",
      rubric: "1 M for piano and drum + 1 M for 'pia-pia-piano' and 'boom-di-boom' + 1 M for emotional/rhythmic value of music"
    },
    questions: [
      {
        category: "Reading is Fun • The Music Man",
        q: "Where does the Music Man come from?",
        ans: "<strong>Answer:</strong><br>• The Music Man comes <strong>from far away</strong>.",
        marks: 1,
        rubric: [{ key: "From far away stated", marks: "1 M" }]
      },
      {
        category: "Reading is Fun • Two Instruments",
        q: "What are the two musical instruments that the Music Man can play in the poem?",
        ans: "<strong>Answer:</strong><br>1. The <strong>Piano</strong><br>2. The <strong>Big Drum</strong>.",
        marks: 2,
        rubric: [{ key: "Piano named", marks: "1 M" }, { key: "Big Drum named", marks: "1 M" }]
      },
      {
        category: "Sound Words • Musical Onomatopoeia",
        q: "What sound does the piano make in the poem? What sound does the big drum make?",
        ans: "<strong>Answers:</strong><br>• The piano goes: <strong>'Pia-pia-piano, pia-piano, pia-piano!'</strong><br>• The big drum goes: <strong>'Boom-di-boom-di-boom-di-boom, boom-di-boom!'</strong>",
        marks: 2,
        rubric: [{ key: "Pia-pia-piano for piano", marks: "1 M" }, { key: "Boom-di-boom for drum", marks: "1 M" }]
      },
      {
        category: "Instrument Families • Classification",
        q: "Classify the following musical instruments into 'String', 'Wind', or 'Percussion (Drums)':<br>(a) Flute (b) Tabla (c) Guitar (d) Dholak",
        ans: "<strong>Classification:</strong><br>• <strong>Wind:</strong> (a) Flute (blown by mouth)<br>• <strong>Percussion:</strong> (b) Tabla, (d) Dholak (struck with hands)<br>• <strong>String:</strong> (c) Guitar (strummed with fingers).",
        marks: 3,
        rubric: [{ key: "Flute: Wind", marks: "1 M" }, { key: "Tabla & Dholak: Percussion", marks: "1 M" }, { key: "Guitar: String", marks: "1 M" }]
      },
      {
        category: "Rhyming Pairs in Poem",
        q: "Find words in the poem that rhyme with:<br>(a) Play — _______<br>(b) Come — _______",
        ans: "<strong>Answers:</strong><br>(a) Play — <strong>Away / Day / Say</strong><br>(b) Drum — <strong>Hum / Gum</strong>.",
        marks: 2,
        rubric: [{ key: "(a) Away", marks: "1 M" }, { key: "(b) Drum/Hum", marks: "1 M" }]
      },
      {
        category: "Vocabulary • Piano Keys",
        q: "What colors are the keys on a piano keyboard?",
        ans: "<strong>Answer:</strong><br>• A piano has <strong>white and black keys</strong>.",
        marks: 1,
        rubric: [{ key: "White and black keys stated", marks: "1 M" }]
      },
      {
        category: "Opposites • Story Words",
        q: "Write the opposite of:<br>(a) Far × _______<br>(b) Big × _______<br>(c) Come × _______",
        ans: "<strong>Answers:</strong><br>(a) Far × <strong>Near / Close</strong><br>(b) Big × <strong>Small / Little</strong><br>(c) Come × <strong>Go</strong>",
        marks: 3,
        rubric: [{ key: "(a) Near", marks: "1 M" }, { key: "(b) Small", marks: "1 M" }, { key: "(c) Go", marks: "1 M" }]
      },
      {
        category: "Indian Musical Instruments",
        q: "Name two traditional Indian musical instruments you have seen or heard.",
        ans: "<strong>Answer:</strong><br>1. <strong>Sitar (or Veena)</strong><br>2. <strong>Tabla (or Dholak / Bansuri)</strong>.",
        marks: 2,
        rubric: [{ key: "Two authentic Indian instruments named", marks: "2 M" }]
      },
      {
        category: "Rhythm & Dance",
        q: "How does listening to lively drum beats make children feel?",
        ans: "<strong>Answer:</strong><br>• Lively drum beats make children feel <strong>energetic, cheerful, and excited to tap their feet and dance</strong>.",
        marks: 2,
        rubric: [{ key: "Energetic and cheerful feeling described", marks: "1 M" }, { key: "Tapping feet / dancing movement", marks: "1 M" }]
      },
      {
        category: "Sentence Construction",
        q: "Make a sentence using the word 'melody'.",
        ans: "<strong>Sample Sentence:</strong><br>• The flute player played a sweet, soothing melody that calmed everyone.",
        marks: 2,
        rubric: [{ key: "Meaningful sentence with 'melody'", marks: "2 M" }]
      },
      {
        category: "Grammar • Modal Verb 'Can'",
        q: "Complete with 'can' or 'cannot':<br>(a) A piano _______ make sweet musical notes.<br>(b) A stone _______ play a drum.",
        ans: "<strong>Answers:</strong><br>(a) A piano <strong>can</strong> make sweet musical notes.<br>(b) A stone <strong>cannot</strong> play a drum.",
        marks: 2,
        rubric: [{ key: "(a) can", marks: "1 M" }, { key: "(b) cannot", marks: "1 M" }]
      },
      {
        category: "Action Verbs • How Instruments are Played",
        q: "Match the instrument with how it is played:<br>(a) Drum (b) Flute (c) Violin<br>Actions: (1) Blown (2) Bowed / Strummed (3) Beaten / Struck",
        ans: "<strong>Matching:</strong><br>• (a) Drum — (3) Beaten / Struck<br>• (b) Flute — (1) Blown<br>• (c) Violin — (2) Bowed / Strummed",
        marks: 3,
        rubric: [{ key: "All 3 correctly matched", marks: "3 M (1 M each)" }]
      },
      {
        category: "Spelling Check • Music Words",
        q: "Fill in the missing letters: P _ A N _ (keyboard instrument).",
        ans: "<strong>Answer:</strong><br>• P <strong>I</strong> A N <strong>O</strong> = <strong>PIANO</strong>.",
        marks: 1,
        rubric: [{ key: "PIANO correct", marks: "1 M" }]
      },
      {
        category: "True or False",
        q: "State True or False:<br>(a) The Music Man can only play the violin.<br>(b) Music brings joy and harmony to people of all ages.",
        ans: "<strong>Answers:</strong><br>(a) <strong>False</strong>. In the poem, he plays the piano and the big drum.<br>(b) <strong>True</strong>. Music is a universal language of joy.",
        marks: 2,
        rubric: [{ key: "(a) False with correction", marks: "1 M" }, { key: "(b) True", marks: "1 M" }]
      },
      {
        category: "Poem Reflection",
        q: "Why does the poem 'I am the Music Man' use repetitive, rhythmic sounds?",
        ans: "<strong>Summary:</strong><br>• The repetitive words ('pia-pia-piano', 'boom-di-boom') imitate the actual musical rhythm and tempo of the instruments, encouraging young learners to chant, clap, and sing along.",
        marks: 2,
        rubric: [{ key: "Imitation of musical rhythm and tempo explained", marks: "2 M" }]
      }
    ]
  }
];

module.exports = { marigoldPart3 };
