// Official NCERT Class 3 English (Santoor) Complete Dataset - Chapters 1 to 12
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const santoorChapters = [
  {
    id: "st1",
    num: 1,
    unit: "Unit 1: Friends Around Us",
    title: "Fun with Friends",
    subtitle: "Playground Games, Sharing, Turn-Taking, New Friendships & Outdoor Sports",
    concepts: [
      "The joy of making new friends and playing traditional playground games.",
      "Learning cooperation, empathy, and fair play in group games.",
      "Vocabulary: playground equipment (swings, slide, see-saw) and action verbs.",
      "Simple present tense sentences describing everyday play habits."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Fun with Friends — Playground &amp; Outdoor Games</text>
      <!-- Playground slide -->
      <path d="M70,120 L110,60 L130,60 L180,120" fill="none" stroke="#2563eb" stroke-width="3"/>
      <line x1="110" y1="60" x2="110" y2="120" stroke="#64748b" stroke-width="2"/>
      <circle cx="120" cy="50" r="10" fill="#f59e0b"/>
      <text x="125" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Slide</text>
      <!-- Swings -->
      <line x1="240" y1="50" x2="240" y2="120" stroke="#334155" stroke-width="2.5"/>
      <line x1="320" y1="50" x2="320" y2="120" stroke="#334155" stroke-width="2.5"/>
      <line x1="230" y1="50" x2="330" y2="50" stroke="#334155" stroke-width="3"/>
      <line x1="260" y1="50" x2="260" y2="105" stroke="#f59e0b" stroke-width="1.5"/>
      <line x1="300" y1="50" x2="300" y2="105" stroke="#f59e0b" stroke-width="1.5"/>
      <rect x="250" y="105" width="60" height="6" rx="2" fill="#ef4444"/>
      <text x="280" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Swings</text>
      <!-- See-saw -->
      <polygon points="430,120 445,95 460,120" fill="#64748b"/>
      <line x1="390" y1="105" x2="500" y2="85" stroke="#10b981" stroke-width="3.5"/>
      <circle cx="395" cy="95" r="9" fill="#ec4899"/>
      <circle cx="495" cy="75" r="9" fill="#3b82f6"/>
      <text x="445" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">See-Saw</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#2563eb" text-anchor="middle">"We take turns on the swing and smile together in the sun!"</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "What games do the children play in the park in 'Fun with Friends'? Why is taking turns important when playing on playground swings?",
        ans: "<strong>Answer:</strong><br>1. In the park, the children play games like <strong>hide-and-seek, tag, sliding down the slide, and swinging on swings</strong>.<br>2. <strong>Importance of taking turns:</strong> Taking turns ensures that every child gets a fair chance to play without arguments. It shows kindness, patience, and keeps the playground safe and friendly for everyone.",
        marks: 3,
        rubric: [
          { key: "Correct mention of games played in the park", marks: "1.5 M" },
          { key: "Moral explanation of fairness and safety in taking turns", marks: "1.5 M" }
        ]
      },
      {
        category: "Vocabulary & Word Power • Action Words",
        q: "Fill in the blanks with suitable action verbs: (run, swing, jump, laugh). (a) Children love to ___ on the swings. (b) We ___ across the grass during tag. (c) The friends ___ happily when hearing a funny riddle.",
        ans: "<strong>Answers:</strong><br>• (a) Children love to <strong>swing</strong> on the swings.<br>• (b) We <strong>run</strong> across the grass during tag.<br>• (c) The friends <strong>laugh</strong> happily when hearing a funny riddle.",
        marks: 3,
        rubric: [
          { key: "Correct verb for (a) swing", marks: "1.0 M" },
          { key: "Correct verb for (b) run", marks: "1.0 M" },
          { key: "Correct verb for (c) laugh", marks: "1.0 M" }
        ]
      },
      {
        category: "Writing Prompts • My Best Friend",
        q: "Write three short sentences about your best friend in school. Mention their name, what you like to share, and your favourite game together.",
        ans: "<strong>Model Sentences:</strong><br>1. My best friend's name is <strong>Aarav</strong>, and we sit together in Class 3.<br>2. We always share our <strong>lunch tiffins and colour pencils</strong> during art class.<br>3. Our favourite game to play during recess is <strong>badminton</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct grammar and spelling", marks: "1.5 M" },
          { key: "All three specified details included", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Welcoming a New Student",
      text: "On Monday, a new girl named Zoya joined Class 3. She sat alone during lunchtime looking shy and nervous.",
      question: "What two friendly actions can Rohit and his group take to help Zoya feel welcomed and happy in school?",
      answer: "1. Rohit can walk over with a warm smile and invite Zoya to sit with their group to share snacks.<br>2. They can show her around the classroom and playground and invite her to join their team in a friendly game of hide-and-seek.",
      rubric: "1.5M first empathetic welcoming action + 1.5M second inclusive play action."
    }
  },
  {
    id: "st2",
    num: 2,
    unit: "Unit 1: Friends Around Us",
    title: "Badal and Moti",
    subtitle: "Loyalty, Care for Animals, Rural Life, Bravery & Rescuing a Pet Dog",
    concepts: [
      "The bond of affection between a village boy, Badal, and his faithful pet dog, Moti.",
      "Animal intelligence, loyalty, and protective instincts toward human family members.",
      "Sequencing story events: daily walks, warning bark, river crossing, and rescue.",
      "Descriptive adjectives: brave, faithful, swift, muddy, rushing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#a16207" text-anchor="middle">Badal and Moti — Friendship &amp; Canine Loyalty</text>
      <!-- Village stream -->
      <path d="M50,110 Q200,90 350,115 T550,100" fill="none" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
      <!-- Badal -->
      <circle cx="160" cy="65" r="12" fill="#fcd34d"/>
      <rect x="153" y="77" width="14" height="28" rx="3" fill="#ea580c"/>
      <text x="160" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9a3412" text-anchor="middle">Badal</text>
      <!-- Moti (Dog) -->
      <ellipse cx="230" cy="85" rx="16" ry="10" fill="#92400e"/>
      <circle cx="245" cy="78" r="8" fill="#92400e"/>
      <path d="M214,82 Q208,74 212,70" stroke="#78350f" stroke-width="3" fill="none"/>
      <text x="235" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">Moti (Loyal Dog)</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#854d0e" text-anchor="middle">"A faithful pet never leaves your side when danger approaches."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Story Comprehension",
        q: "Who was Moti, and how did he show his loyalty when Badal slipped near the muddy stream?",
        ans: "<strong>Answer:</strong><br>1. <strong>Who was Moti:</strong> Moti was Badal's beloved pet dog who accompanied him everywhere across the village fields.<br>2. <strong>Act of Loyalty:</strong> When Badal slipped on the muddy bank and fell near the swollen stream, Moti immediately barked loudly to alert village elders and firmly gripped Badal's shirt collar with his teeth to prevent him from being swept into deeper water until help arrived.",
        marks: 3,
        rubric: [
          { key: "Accurate identification of Moti as Badal's dog", marks: "1.0 M" },
          { key: "Detailed description of barking and holding collar to rescue", marks: "2.0 M" }
        ]
      },
      {
        category: "Vocabulary • Synonyms & Antonyms",
        q: "Give the antonym (opposite word) for: (a) Deep, (b) Faithful, (c) Brave. Use 'faithful' in a meaningful sentence.",
        ans: "<strong>Antonyms:</strong><br>• (a) Deep × <strong>Shallow</strong><br>• (b) Faithful × <strong>Unfaithful / Disloyal</strong><br>• (c) Brave × <strong>Cowardly / Timid</strong>.<br><br><strong>Sentence:</strong> 'Moti was a <em>faithful</em> companion who protected the family every night.'",
        marks: 3,
        rubric: [
          { key: "Correct antonyms for all 3 words", marks: "1.5 M" },
          { key: "Meaningful, grammatically correct sentence using faithful", marks: "1.5 M" }
        ]
      },
      {
        category: "Speaking & Listening • Pet Care",
        q: "What responsibilities do pet owners have toward their pets? Mention three important duties.",
        ans: "<strong>Pet Care Duties:</strong><br>1. <strong>Nutritious Food &amp; Fresh Water:</strong> Providing clean drinking water and healthy meals daily.<br>2. <strong>Shelter &amp; Cleanliness:</strong> Giving pets a warm, dry sleeping space and regular baths.<br>3. <strong>Healthcare &amp; Exercise:</strong> Taking them to veterinary doctors for vaccinations and taking them for regular walks.",
        marks: 3,
        rubric: [
          { key: "Mention of food and clean water", marks: "1.0 M" },
          { key: "Mention of shelter and healthcare/veterinary visits", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Animal Empathy Case Study",
      text: "While walking home from school, Rohan spotted a stray puppy shivering under a tree on a rainy afternoon.",
      question: "What safe, compassionate steps should Rohan take with the help of his parents to care for the puppy?",
      answer: "1. Rohan should gently shelter the puppy from the rain using a dry cloth or cardboard box without frightening it.<br>2. He should inform his parents to provide a warm bowl of milk or puppy food.<br>3. Together with his parents, he should contact an animal welfare shelter or vet to ensure the puppy receives healthcare and vaccination.",
      rubric: "1.5M immediate protective care + 1.5M parental/veterinary consultation."
    }
  },
  {
    id: "st3",
    num: 3,
    unit: "Unit 1: Friends Around Us",
    title: "Best Friends",
    subtitle: "School Friendships, Mutual Support, Studying Together & Conflict Resolution",
    concepts: [
      "Qualities of true friendship: kindness, honesty, mutual encouragement, and understanding.",
      "How friends help each other during difficult lessons and creative activities.",
      "Resolving petty disagreements through honest conversation rather than anger.",
      "Grammar: using singular and plural nouns correctly."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf4ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#86198f" text-anchor="middle">Best Friends — Shared Learning &amp; Creative Joy</text>
      <!-- Desk -->
      <rect x="180" y="90" width="220" height="40" rx="4" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
      <rect x="230" y="80" width="50" height="20" rx="2" fill="#ffffff" stroke="#334155"/>
      <text x="255" y="94" font-family="system-ui, sans-serif" font-size="9" fill="#1e293b" text-anchor="middle">Book</text>
      <!-- Friend 1 -->
      <circle cx="150" cy="70" r="12" fill="#fcd34d"/>
      <rect x="143" y="82" width="14" height="25" rx="3" fill="#3b82f6"/>
      <!-- Friend 2 -->
      <circle cx="430" cy="70" r="12" fill="#fcd34d"/>
      <rect x="423" y="82" width="14" height="25" rx="3" fill="#ec4899"/>
      <text x="150" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Pooja</text>
      <text x="430" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#9d174d" text-anchor="middle">Neha</text>
      <text x="290" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#701a75" text-anchor="middle">"True friends double your joy and divide your sorrow."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Comprehension",
        q: "What makes Pooja and Neha best friends in the story? How do they help each other when one finds arithmetic difficult?",
        ans: "<strong>Answer:</strong><br>1. Pooja and Neha are best friends because they share everything, listen respectfully to each other, and encourage one another in every school task.<br>2. When Neha finds arithmetic sums difficult, Pooja patiently sits beside her, explains the steps using counters, and celebrates when Neha gets the correct answer.",
        marks: 3,
        rubric: [
          { key: "Characteristics of their friendship", marks: "1.5 M" },
          { key: "Explanation of how arithmetic support is given", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar • Singular and Plural Nouns",
        q: "Write the plural forms for: (a) Friend, (b) Story, (c) Class, (d) Wish. Make one sentence using 'friends'.",
        ans: "<strong>Plural Forms:</strong><br>• (a) Friend → <strong>Friends</strong><br>• (b) Story → <strong>Stories</strong> (ending in consonant + y changes to -ies)<br>• (c) Class → <strong>Classes</strong> (words ending in -ss take -es)<br>• (d) Wish → <strong>Wishes</strong> (words ending in -sh take -es).<br><br><strong>Sentence:</strong> 'All my <em>friends</em> cheered when our class won the quiz competition.'",
        marks: 3,
        rubric: [
          { key: "Correct plural forms for all 4 nouns", marks: "2.0 M" },
          { key: "Correct, meaningful sentence using friends", marks: "1.0 M" }
        ]
      },
      {
        category: "Conflict Resolution • Role Play",
        q: "If two friends both want to use the same storybook during library period, what is the best way to resolve the problem peacefully?",
        ans: "<strong>Peaceful Solution:</strong><br>1. They can sit together and read the storybook together, turning pages by turn.<br>2. Alternatively, they can agree that one friend reads it during the first half of the period, and the second friend reads it during the second half.",
        marks: 2,
        rubric: [
          { key: "Collaborative reading suggestion", marks: "1.0 M" },
          { key: "Fair time-sharing agreement", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Class Project Teamwork",
      text: "Simran and Kabir were paired to make a science chart on 'Save Trees'. Kabir was good at drawing, while Simran wrote neat slogans and captions.",
      question: "How does dividing roles based on individual strengths help team projects succeed?",
      answer: "1. By dividing work according to what each member does best, both partners enjoy their task and feel valued.<br>2. Kabir's creative drawings and Simran's clear slogans combine to make a high-quality chart finished on time with zero conflict.",
      rubric: "1.5M explanation of role delegation + 1.5M positive outcome of combined strengths."
    }
  },
  {
    id: "st4",
    num: 4,
    unit: "Unit 2: Nature Around Us",
    title: "Out in the Garden",
    subtitle: "Plants, Birds, Butterflies, Rhymes, Nature Appreciation & Outdoor Observation",
    concepts: [
      "Observing natural flora and fauna: flower petals, buzzing bees, caterpillars, and butterflies.",
      "Poetic structure: rhyming couplets, musical rhythm, and descriptive imagery.",
      "Life cycle hints: caterpillar changing into a beautiful butterfly.",
      "Sensory words related to sight, smell, and sound in a lush green garden."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">Out in the Garden — Nature's Blooms &amp; Pollinators</text>
      <!-- Sun -->
      <circle cx="80" cy="50" r="18" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <!-- Flower 1 -->
      <circle cx="160" cy="100" r="10" fill="#f43f5e"/>
      <circle cx="160" cy="85" r="7" fill="#fda4af"/><circle cx="160" cy="115" r="7" fill="#fda4af"/>
      <circle cx="145" cy="100" r="7" fill="#fda4af"/><circle cx="175" cy="100" r="7" fill="#fda4af"/>
      <line x1="160" y1="120" x2="160" y2="145" stroke="#16a34a" stroke-width="3"/>
      <!-- Butterfly -->
      <ellipse cx="280" cy="75" rx="6" ry="14" fill="#0f172a"/>
      <ellipse cx="265" cy="70" rx="14" ry="10" fill="#38bdf8"/>
      <ellipse cx="295" cy="70" rx="14" ry="10" fill="#38bdf8"/>
      <ellipse cx="268" cy="85" rx="10" ry="7" fill="#818cf8"/>
      <ellipse cx="292" cy="85" rx="10" ry="7" fill="#818cf8"/>
      <text x="280" y="115" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Butterfly</text>
      <!-- Flower 2 -->
      <circle cx="420" cy="100" r="10" fill="#f59e0b"/>
      <circle cx="420" cy="85" r="7" fill="#fde68a"/><circle cx="420" cy="115" r="7" fill="#fde68a"/>
      <circle cx="405" cy="100" r="7" fill="#fde68a"/><circle cx="435" cy="100" r="7" fill="#fde68a"/>
      <line x1="420" y1="120" x2="420" y2="145" stroke="#16a34a" stroke-width="3"/>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#166534" text-anchor="middle">"Out in the garden, one fine day, with my ball I went to play."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Poetry Comprehension",
        q: "What does the poet see and hear while walking out in the garden? Identify two rhyming pairs in the poem.",
        ans: "<strong>Poem Analysis:</strong><br>1. <strong>Sights &amp; Sounds:</strong> The poet sees bright blooming flowers, buzzing honeybees collecting nectar, and fluttering butterflies dancing in the gentle breeze.<br>2. <strong>Rhyming Pairs:</strong><br>• <em>Day — Play</em><br>• <em>Breeze — Trees</em>",
        marks: 3,
        rubric: [
          { key: "Correct sensory details of garden sights and sounds", marks: "1.5 M" },
          { key: "Two correct rhyming word pairs from poem", marks: "1.5 M" }
        ]
      },
      {
        category: "Vocabulary • Nature Words",
        q: "Match each garden creature with its characteristic sound or action: (1) Bee, (2) Butterfly, (3) Frog, (4) Sparrow. Options: (Flutters, Buzzes, Chirps, Croaks).",
        ans: "<strong>Matching:</strong><br>• 1. Bee → <strong>Buzzes</strong><br>• 2. Butterfly → <strong>Flutters</strong><br>• 3. Frog → <strong>Croaks</strong><br>• 4. Sparrow → <strong>Chirps</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct matching for all 4 creatures (0.5M each)", marks: "2.0 M" }
        ]
      },
      {
        category: "Sensory Writing • Descriptive Paragraph",
        q: "Write three descriptive sentences describing your favourite flower in a garden. Use colour words and smell words.",
        ans: "<strong>Model Description:</strong><br>1. In my garden, there is a beautiful <strong>velvety red rose</strong> blooming on a thorny bush.<br>2. In the morning, sweet crystal dewdrops sparkle on its soft red petals.<br>3. It has a <strong>delightful, sweet fragrance</strong> that attracts colourful butterflies and buzzing bees.",
        marks: 3,
        rubric: [
          { key: "Usage of colour and sensory smell adjectives", marks: "1.5 M" },
          { key: "Grammatical accuracy and descriptive richness", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Pollinator Protection Campaign",
      text: "Students in Class 3 notice that gardeners are spraying harsh chemical weedkillers near flowering marigold beds, causing bees and butterflies to disappear.",
      question: "Why are bees and butterflies essential for flowers and crops? What safe advice should students give the school gardener?",
      answer: "1. Bees and butterflies are pollinators: they carry pollen grains from flower to flower, which helps plants produce seeds, flowers, and fruits.<br>2. Students should advise the gardener to avoid toxic chemicals and use natural organic compost, weeding by hand to protect beneficial pollinators.",
      rubric: "1.5M ecological role of pollination + 1.5M eco-friendly alternative advice."
    }
  },
  {
    id: "st5",
    num: 5,
    unit: "Unit 2: Nature Around Us",
    title: "Talking Toys",
    subtitle: "Imagination, Mechanical Toys, Care of Belongings & Creative Play",
    concepts: [
      "Creative imagination: imagining that toys have thoughts, feelings, and secret conversations.",
      "Value of caring for one's toys and putting them back in their proper place.",
      "Mechanical and electronic toys vs handmade traditional clay and wooden toys.",
      "Using prepositions: in, on, under, behind, beside."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Talking Toys — Night-time Conversations on the Shelf</text>
      <!-- Toy Shelf -->
      <line x1="80" y1="110" x2="500" y2="110" stroke="#78350f" stroke-width="4"/>
      <!-- Teddy -->
      <circle cx="160" cy="70" r="16" fill="#b45309"/>
      <circle cx="148" cy="55" r="6" fill="#b45309"/><circle cx="172" cy="55" r="6" fill="#b45309"/>
      <circle cx="160" cy="90" r="18" fill="#d97706"/>
      <text x="160" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Teddy</text>
      <!-- Robot -->
      <rect x="265" y="55" width="30" height="45" rx="4" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
      <circle cx="273" cy="67" r="3" fill="#38bdf8"/>
      <circle cx="287" cy="67" r="3" fill="#38bdf8"/>
      <text x="280" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">Robot</text>
      <!-- Drum -->
      <ellipse cx="400" cy="70" rx="18" ry="8" fill="#ef4444"/>
      <rect x="382" y="70" width="36" height="25" fill="#f87171"/>
      <ellipse cx="400" cy="95" rx="18" ry="8" fill="#b91c1c"/>
      <text x="400" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b91c1c" text-anchor="middle">Drum</text>
      <text x="290" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#ea580c" text-anchor="middle">"Take care of your toys, and keep them neatly organized!"</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Story Comprehension",
        q: "What do the toys talk about when the children go to sleep in 'Talking Toys'? What complaint did the teddy bear have?",
        ans: "<strong>Answer:</strong><br>1. When children go to sleep, the toys talk about how they were treated during playtime, sharing stories of being hugged, driven, or tossed around.<br>2. The teddy bear complained that he had been left upside down under the sofa where dust gathered, rather than being placed neatly on his warm bed shelf.",
        marks: 3,
        rubric: [
          { key: "Explanation of night-time toy conversations", marks: "1.5 M" },
          { key: "Specific mention of teddy bear's complaint under sofa", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar • Prepositions of Place",
        q: "Fill in the blanks with: (in, on, under, behind): (a) The teddy bear was found ___ the bed. (b) The toy train runs ___ the track. (c) Keep your building blocks ___ the wooden box.",
        ans: "<strong>Answers:</strong><br>• (a) The teddy bear was found <strong>under</strong> the bed.<br>• (b) The toy train runs <strong>on</strong> the track.<br>• (c) Keep your building blocks <strong>in</strong> the wooden box.",
        marks: 3,
        rubric: [
          { key: "Correct preposition for (a) under", marks: "1.0 M" },
          { key: "Correct preposition for (b) on", marks: "1.0 M" },
          { key: "Correct preposition for (c) in", marks: "1.0 M" }
        ]
      },
      {
        category: "Creative Writing • Talking Toy Dialogue",
        q: "Imagine your favourite toy could speak for two minutes. Write two sentences that your toy would say to you.",
        ans: "<strong>Sample Toy Speech:</strong><br>1. 'Thank you for playing so gently with me and taking me on imaginary adventures across your bedroom!'<br>2. 'Please remember to wipe my wheels clean and place me safely on the bookshelf before you sleep tonight.'",
        marks: 2,
        rubric: [
          { key: "Creative voice and imagination", marks: "1.0 M" },
          { key: "Grammar, punctuation, and appropriate sentiment", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Toy Donation Drive",
      text: "Before Diwali, Ananya organized her room and discovered 6 toys that she had outgrown but were still in great working condition.",
      question: "Instead of throwing them in the garbage, what thoughtful action can Ananya take to bring happiness to other children?",
      answer: "1. Ananya can clean and package the toys carefully.<br>2. She can donate them to a local children's orphanage, community library, or Anganwadi school so other children can enjoy playing with them.",
      rubric: "1.5M cleaning and care + 1.5M donation to community children in need."
    }
  },
  {
    id: "st6",
    num: 6,
    unit: "Unit 3: Imagination & Wonder",
    title: "Paper Boats",
    subtitle: "Rabindranath Tagore's Poem, Monsoon Puddles, Distant Lands & Innocent Dreams",
    concepts: [
      "Appreciating Rabindranath Tagore's poetic masterpiece 'Paper Boats'.",
      "Writing one's name and village on boats to send messages to distant lands.",
      "Loading boats with Shiuli flowers blooming in the dawn.",
      "Metaphor of white bulging clouds racing with the paper boats."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Paper Boats — Day by Day I Float My Paper Boats</text>
      <!-- Water ripples -->
      <path d="M50,110 Q150,90 250,110 T450,110 T550,105" fill="none" stroke="#60a5fa" stroke-width="3"/>
      <!-- Paper Boat -->
      <polygon points="180,95 240,95 255,120 165,120" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
      <polygon points="210,60 210,95 240,95" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <polygon points="180,95 210,60 210,95" fill="#fcd34d" stroke="#ca8a04" stroke-width="1.5"/>
      <!-- Little flower cargo -->
      <circle cx="210" cy="90" r="4" fill="#ea580c"/>
      <circle cx="220" cy="92" r="3" fill="#f97316"/>
      <!-- Cloud in sky -->
      <ellipse cx="440" cy="55" rx="35" ry="18" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
      <ellipse cx="465" cy="50" rx="20" ry="14" fill="#ffffff"/>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">"Day by day I float my paper boats one by one down the running stream."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Poetry Analysis",
        q: "In Rabindranath Tagore's poem 'Paper Boats': (a) What does the child write on the paper boats? (b) What flowers does the child load into the boats, and why?",
        ans: "<strong>Poetic Analysis:</strong><br>• <strong>(a) Writing on boats:</strong> The child writes their <strong>name and the name of their village in big black letters</strong>, hoping someone in a strange distant land will find them and know who sent them.<br>• <strong>(b) Flower cargo:</strong> The child loads the boats with <strong>Shiuli blossoms</strong> gathered from the garden at dawn, hoping these blooms of the night will be safely ferried to land in the dark.",
        marks: 3,
        rubric: [
          { key: "Correct name and village writing explanation", marks: "1.5 M" },
          { key: "Correct identification of Shiuli flowers and dawn harvest", marks: "1.5 M" }
        ]
      },
      {
        category: "Poetic Devices • Metaphor & Imagery",
        q: "What does the child imagine about the clouds in the sky? How do the clouds relate to the paper boats?",
        ans: "<strong>Imagery Explanation:</strong><br>The child looks up and sees little white clouds with bulging sails floating in the blue sky. The child imagines that an unseen playmate in the sky sends these cloud-ships down through the air to race with their own paper boats floating down the stream.",
        marks: 2,
        rubric: [
          { key: "Accurate description of cloud playmates and air racing", marks: "2.0 M" }
        ]
      },
      {
        category: "Hands-on Activity • Origami & Recycling",
        q: "What kind of paper is best suited for making paper boats, and what should students do with wet paper boats after playing in rainwater puddles?",
        ans: "<strong>Activity & Eco-Awareness:</strong><br>1. <strong>Suitable Paper:</strong> Used drawing sheets or scrap newspaper that hold folds firmly.<br>2. <strong>Environmental Responsibility:</strong> Wet paper boats should never be left to clog drains or litter roads. Once play is over, the soggy paper should be collected and deposited in a recycling or compost bin.",
        marks: 2,
        rubric: [
          { key: "Identifies scrap/recycled paper", marks: "1.0 M" },
          { key: "Emphasizes eco-cleanup and preventing clogged drains", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Cultural Heritage of Rabindranath Tagore",
      text: "Rabindranath Tagore was a Nobel Prize-winning poet who wrote India's National Anthem, 'Jana Gana Mana', and founded Visva-Bharati University in Santiniketan.",
      question: "How does Tagore's poetry encourage young children to connect with nature, simple toys, and universal human brotherhood?",
      answer: "1. Tagore's poems celebrate simple natural wonders—rain streams, paper toys, flowers, and open skies—showing that immense happiness comes from imagination rather than expensive gadgets.<br>2. Sending paper boats to unknown children in faraway lands embodies his belief in universal love and peaceful connection among all human beings.",
      rubric: "1.5M connection with natural imagination + 1.5M theme of universal brotherhood."
    }
  },
  {
    id: "st7",
    num: 7,
    unit: "Unit 3: Imagination & Wonder",
    title: "The Big Laddoo",
    subtitle: "Humour, Folk Tale, Cooperation, Problem Solving & Festival Celebrations",
    concepts: [
      "Folk tale humour: making an enormous festive laddoo that cannot fit through the door.",
      "Cooperative problem solving: how the entire community pitches in to share and celebrate.",
      "Sequencing ingredients: chickpea flour (besan), ghee, sugar, cardamom, and dry fruits.",
      "Understanding size adjectives: tiny, big, huge, gigantic, enormous."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">The Big Laddoo — Community Feasting &amp; Festive Joy</text>
      <!-- Gigantic Laddoo -->
      <circle cx="290" cy="88" r="42" fill="#f59e0b" stroke="#d97706" stroke-width="2.5"/>
      <circle cx="280" cy="75" r="3" fill="#92400e"/>
      <circle cx="305" cy="80" r="3" fill="#92400e"/>
      <circle cx="275" cy="95" r="3" fill="#92400e"/>
      <circle cx="295" cy="100" r="3" fill="#92400e"/>
      <!-- Villagers around -->
      <circle cx="160" cy="75" r="10" fill="#fcd34d"/><rect x="154" y="86" width="12" height="22" rx="2" fill="#ef4444"/>
      <circle cx="200" cy="75" r="10" fill="#fcd34d"/><rect x="194" y="86" width="12" height="22" rx="2" fill="#3b82f6"/>
      <circle cx="380" cy="75" r="10" fill="#fcd34d"/><rect x="374" y="86" width="12" height="22" rx="2" fill="#10b981"/>
      <circle cx="420" cy="75" r="10" fill="#fcd34d"/><rect x="414" y="86" width="12" height="22" rx="2" fill="#8b5cf6"/>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">A sweet is best enjoyed when shared with the entire village!</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Story Comprehension",
        q: "Why did the sweet-maker make such an enormous laddoo in 'The Big Laddoo'? What problem arose once the laddoo was prepared?",
        ans: "<strong>Answer:</strong><br>1. <strong>Reason:</strong> The sweet-maker wanted to prepare a grand sweet for the village festival that everyone would remember and talk about with pride.<br>2. <strong>The Problem:</strong> The laddoo turned out so gigantic that it was wider than the sweet-shop door! It could not be carried out into the courtyard without breaking the doorway.",
        marks: 3,
        rubric: [
          { key: "Correct festival celebration motive", marks: "1.5 M" },
          { key: "Accurate identification of the door width predicament", marks: "1.5 M" }
        ]
      },
      {
        category: "Problem Solving • Community Action",
        q: "How did the villagers solve the problem of the oversized laddoo without breaking down the shop door?",
        ans: "<strong>Solution:</strong><br>Instead of forcing the giant laddoo through the doorway, the village elders suggested inviting everyone inside the spacious kitchen courtyard. The sweet-maker portioned the laddoo into hundreds of sweet bowls, sharing a portion with every child and family in the village.",
        marks: 2,
        rubric: [
          { key: "Clever resolution through on-site distribution and sharing", marks: "2.0 M" }
        ]
      },
      {
        category: "Vocabulary • Degrees of Size",
        q: "Arrange these size adjectives in order from smallest to biggest: (Huge, Tiny, Enormous, Small, Gigantic).",
        ans: "<strong>Order from Smallest to Biggest:</strong><br>1. <strong>Tiny</strong><br>2. <strong>Small</strong><br>3. <strong>Huge</strong><br>4. <strong>Gigantic</strong><br>5. <strong>Enormous</strong>",
        marks: 2,
        rubric: [
          { key: "Correct ascending arrangement of all 5 adjectives", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Community Festival Food Sharing",
      text: "At a community Langar / Bhandara feast, volunteers cook sweet halwa for 400 people. Some children want to serve elderly visitors first.",
      question: "What core human values are practiced when people cook together and serve food respectfully to everyone regardless of background?",
      answer: "1. <strong>Equality &amp; Humility:</strong> Serving everyone equally without discrimination teaches mutual respect.<br>2. <strong>Community Spirit &amp; Compassion:</strong> Respecting elders and sharing resources selflessly ensures nobody in the community goes hungry.",
      rubric: "1.5M concept of equality and respect + 1.5M selfless service and community solidarity."
    }
  },
  {
    id: "st8",
    num: 8,
    unit: "Unit 3: Imagination & Wonder",
    title: "Thank God!",
    subtitle: "Gratitude, Appreciation of Senses, Nature's Blessings & Daily Thanksgiving",
    concepts: [
      "Gratitude for human senses: eyes to see, ears to hear, tongue to taste, hands to hold.",
      "Appreciation for daily life necessities: clean water, nutritious food, shelter, and family love.",
      "The psychological benefits of practicing thankfulness every morning and night.",
      "Rhyming scheme and prayer-song cadence."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">Thank God! — Gratitude for the Five Human Senses</text>
      <!-- 5 Sense Badges -->
      <g transform="translate(60, 50)" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">
        <circle cx="40" cy="35" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="40" y="38" font-size="16">👁️</text><text x="40" y="72">Eyes (See)</text>
        <circle cx="130" cy="35" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="130" y="38" font-size="16">👂</text><text x="130" y="72">Ears (Hear)</text>
        <circle cx="230" cy="35" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="230" y="38" font-size="16">👃</text><text x="230" y="72">Nose (Smell)</text>
        <circle cx="330" cy="35" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="330" y="38" font-size="16">👅</text><text x="330" y="72">Tongue (Taste)</text>
        <circle cx="430" cy="35" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="430" y="38" font-size="16">✋</text><text x="430" y="72">Hands (Touch)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534" text-anchor="middle">"Thank you for the world so sweet, thank you for the food we eat!"</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Poem Comprehension",
        q: "List four things the poet is thankful for in the poem 'Thank God!'. Why is it important to count our blessings?",
        ans: "<strong>Poem Analysis:</strong><br>1. <strong>Four Blessings:</strong><br>• The sweet world filled with singing birds<br>• Nutritious food to eat each day<br>• Loving parents, family, and good teachers<br>• Healthy eyes, ears, and hands to learn and play.<br>2. <strong>Importance:</strong> Counting blessings cultivates positivity, contentment, and empathy, preventing complaints about trivial troubles.",
        marks: 3,
        rubric: [
          { key: "Four correct blessings mentioned from poem", marks: "2.0 M" },
          { key: "Moral reflection on contentment and thankfulness", marks: "1.0 M" }
        ]
      },
      {
        category: "Vocabulary • Sense Organs & Verbs",
        q: "Match each sense organ with its primary function: (1) Eyes, (2) Ears, (3) Tongue, (4) Skin. Actions: (Feel texture, Hear melodies, Taste flavours, See colours).",
        ans: "<strong>Matching:</strong><br>• 1. Eyes → <strong>See colours</strong><br>• 2. Ears → <strong>Hear melodies</strong><br>• 3. Tongue → <strong>Taste flavours</strong><br>• 4. Skin → <strong>Feel texture</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct matching for all 4 pairs", marks: "2.0 M" }
        ]
      },
      {
        category: "Personal Writing • Gratitude Journal",
        q: "Write three things you are grateful for today in your personal life.",
        ans: "<strong>Sample Gratitude Journal Entry:</strong><br>1. I am grateful for the delicious breakfast my mother made for me this morning.<br>2. I am grateful for my school teacher who taught us an exciting story in English class.<br>3. I am grateful for my friends who played football with me in the afternoon.",
        marks: 3,
        rubric: [
          { key: "Three personal, sincere reflections", marks: "1.5 M" },
          { key: "Grammar, spelling, and sentence construction", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Gratitude & Well-Being Habit",
      text: "Studies show that children who write down three positive events before going to bed sleep better and feel more confident in school.",
      question: "How can maintaining a classroom 'Gratitude Tree' on a soft board improve classroom harmony?",
      answer: "1. A Gratitude Tree allows students to pin sticky leaf notes expressing appreciation when a classmate shares an eraser or helps with schoolwork.<br>2. It builds mutual kindness, reduces bullying, and makes every child feel recognized and valued in class.",
      rubric: "1.5M explanation of gratitude tree mechanics + 1.5M social-emotional harmony benefit."
    }
  },
  {
    id: "st9",
    num: 9,
    unit: "Unit 4: Exploring the World",
    title: "Madhu's Wish",
    subtitle: "Wishes, Magic Paintbrush, Helping Others, Selflessness & Moral Values",
    concepts: [
      "The classic moral theme: selfish desires vs using gifts for the public good.",
      "Madhu's wish for a magic paintbrush that paints objects into reality.",
      "Painting food and plows for poor villagers rather than gold for greedy kings.",
      "Using modal verbs: 'could', 'would', 'should' in wishing sentences."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Madhu's Wish — The Gift of Selfless Service</text>
      <!-- Magic Paintbrush -->
      <line x1="120" y1="110" x2="200" y2="55" stroke="#92400e" stroke-width="6" stroke-linecap="round"/>
      <polygon points="200,55 215,45 220,60" fill="#eab308"/>
      <!-- Painted Golden Corn -->
      <ellipse cx="320" cy="85" rx="30" ry="14" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <ellipse cx="380" cy="85" rx="30" ry="14" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="350" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#854d0e" text-anchor="middle">Grain for Farmers</text>
      <!-- Sparkles -->
      <text x="230" y="45" font-size="16">✨</text>
      <text x="210" y="80" font-size="14">✨</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">"True magic lies in using one's talents to relieve the suffering of others."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Story Comprehension",
        q: "What special power did Madhu's paintbrush have? What did Madhu choose to paint with it?",
        ans: "<strong>Answer:</strong><br>1. <strong>Special Power:</strong> Whatever Madhu painted with his magic paintbrush came alive into real existence.<br>2. <strong>Madhu's Choice:</strong> Instead of painting gold or jewels for himself, Madhu painted <strong>water buffaloes to plow dry fields, bags of grain for hungry families, and warm blankets for shivering elders</strong>.",
        marks: 3,
        rubric: [
          { key: "Correct explanation of the paintbrush's magical power", marks: "1.5 M" },
          { key: "Mention of buffaloes, grain, and blankets for villagers", marks: "1.5 M" }
        ]
      },
      {
        category: "Moral Reasoning • Character Analysis",
        q: "When a greedy moneylender demanded that Madhu paint a mountain of gold, what did Madhu do? What moral lesson does this teach?",
        ans: "<strong>Moral Analysis:</strong><br>1. <strong>Madhu's Action:</strong> Madhu refused to help the greedy man become richer. When forced, he painted a deep ocean with a golden island far away and painted a boat that sailed away, stranding the greedy man without causing harm.<br>2. <strong>Moral Lesson:</strong> Greed leads to downfall; talents should never be surrendered to injustice or selfish exploitation.",
        marks: 3,
        rubric: [
          { key: "Explanation of Madhu's clever resistance to greed", marks: "1.5 M" },
          { key: "Clear formulation of the moral lesson", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar • Sentence Formulation",
        q: "Complete the conditional wishing sentences: (a) If I had a magic paintbrush, I would paint ___. (b) If I could fly like a bird, I would visit ___.",
        ans: "<strong>Model Completions:</strong><br>• (a) If I had a magic paintbrush, I would paint <strong>fresh green forests and clean rivers for endangered animals</strong>.<br>• (b) If I could fly like a bird, I would visit <strong>the snowy peaks of the Himalayan mountains</strong>.",
        marks: 2,
        rubric: [
          { key: "Grammatically correct conditional sentence for (a)", marks: "1.0 M" },
          { key: "Grammatically correct conditional sentence for (b)", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Real-Life Magic of Volunteering",
      text: "During winter, a group of schoolchildren collected old woollen sweaters, cleaned them, and distributed them to homeless pavement dwellers.",
      question: "How does this real-life act carry the exact same 'magic' as Madhu's paintbrush in the folk tale?",
      answer: "1. In real life, humans do not have magical paintbrushes, but our compassion, hands, and collective effort create real miracles.<br>2. By giving warm clothes to shivering people, the students transformed cold despair into warmth and safety, proving that empathy is the truest magic in the world.",
      rubric: "1.5M connecting metaphorical magic with human kindness + 1.5M real-world social impact."
    }
  },
  {
    id: "st10",
    num: 10,
    unit: "Unit 4: Exploring the World",
    title: "Night",
    subtitle: "Night Sky, Moon, Stars, Nocturnal Animals, Quiet Slumber & Peaceful Rest",
    concepts: [
      "Natural phenomena of night: sunset, darkness, twinkling stars, and changing phases of the moon.",
      "Nocturnal creatures: owls, fireflies, and bats that become active after sunset.",
      "The value of peaceful rest and sleep for physical growth and mental health.",
      "Contrasting day activities (loud, bright, busy) with night tranquility (quiet, calm, dark)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0f172a" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#93c5fd" text-anchor="middle">Night — Crescent Moon &amp; The Twinkling Canopy</text>
      <!-- Crescent Moon -->
      <path d="M120,45 A25,25 0 0,0 120,95 A20,20 0 0,1 120,45" fill="#fde047"/>
      <!-- Twinkling stars -->
      <circle cx="200" cy="50" r="2" fill="#ffffff"/><circle cx="280" cy="40" r="2" fill="#ffffff"/>
      <circle cx="360" cy="65" r="2.5" fill="#ffffff"/><circle cx="440" cy="45" r="2" fill="#ffffff"/>
      <circle cx="490" cy="70" r="1.5" fill="#ffffff"/>
      <!-- Owl on branch -->
      <line x1="380" y1="110" x2="480" y2="110" stroke="#78350f" stroke-width="4"/>
      <ellipse cx="430" cy="95" rx="14" ry="18" fill="#78350f"/>
      <circle cx="424" cy="90" r="4" fill="#fde047"/><circle cx="436" cy="90" r="4" fill="#fde047"/>
      <circle cx="424" cy="90" r="2" fill="#000000"/><circle cx="436" cy="90" r="2" fill="#000000"/>
      <polygon points="430,94 427,99 433,99" fill="#ea580c"/>
      <text x="430" y="132" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#94a3b8" text-anchor="middle">Owl (Nocturnal)</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#cbd5e1" text-anchor="middle">"The sun has set, the day is done, and stars appear one by one."</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Poem Comprehension",
        q: "What changes take place in nature when day turns into night? Name two animals that stay awake during the night.",
        ans: "<strong>Answer:</strong><br>1. <strong>Changes in Nature:</strong> The sun sets beneath the horizon, darkness spreads over the sky, the air cools down, flowers close their petals, and stars begin to twinkle alongside the glowing moon.<br>2. <strong>Nocturnal Animals:</strong> <strong>Owls</strong> and <strong>bats</strong> (or fireflies) stay awake and active during the night.",
        marks: 3,
        rubric: [
          { key: "Detailed description of evening and nightfall changes", marks: "1.5 M" },
          { key: "Two correct nocturnal animals named", marks: "1.5 M" }
        ]
      },
      {
        category: "Vocabulary • Day vs Night Antonyms",
        q: "Give the opposites for: (a) Day, (b) Dark, (c) Sleep, (d) Loud.",
        ans: "<strong>Antonyms:</strong><br>• (a) Day × <strong>Night</strong><br>• (b) Dark × <strong>Bright / Light</strong><br>• (c) Sleep × <strong>Wake</strong><br>• (d) Loud × <strong>Quiet / Silent</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct antonyms for all 4 words (0.5M each)", marks: "2.0 M" }
        ]
      },
      {
        category: "Health & Well-Being • Sleeping Habits",
        q: "Why is getting 8 to 9 hours of uninterrupted sleep every night important for growing children in Class 3?",
        ans: "<strong>Importance of Sleep:</strong><br>1. <strong>Physical Growth:</strong> Growth hormones are released primarily during deep sleep, helping bones and muscles develop.<br>2. <strong>Brain Memory:</strong> Sleep allows the brain to organize lessons learned during the day, improving memory, alertness, and mood in school.",
        marks: 3,
        rubric: [
          { key: "Physical growth explanation", marks: "1.5 M" },
          { key: "Brain restoration and memory consolidation", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Light Pollution Awareness",
      text: "In large cities with bright neon signs and streetlights, children rarely see more than a handful of stars at night, whereas in village skies thousands of stars are clearly visible.",
      question: "What is 'light pollution', and how does excessive artificial light affect both stargazers and nocturnal wildlife?",
      answer: "1. Light pollution is the excessive, misdirected artificial illumination of the night sky by human cities.<br>2. It hides the beauty of constellations from stargazers and disorients nocturnal creatures like migrating birds, sea turtles, and night insects who rely on darkness for navigation.",
      rubric: "1.5M definition of light pollution + 1.5M ecological impact on navigation."
    }
  },
  {
    id: "st11",
    num: 11,
    unit: "Unit 5: Sky and Space",
    title: "Chanda Mama Counts the Stars",
    subtitle: "Moon Lore, Counting Stars, Bundles of Tens & Astronomical Curiosity",
    concepts: [
      "Traditional Indian folklore: affectionate representation of the Moon as 'Chanda Mama'.",
      "Counting enormous numbers by grouping: Chanda Mama grouping stars into packets of 10 and 100.",
      "Connection between language arts and foundational mathematical grouping.",
      "Astronomical wonder: understanding that stars are distant burning suns."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1e1b4b" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#a5b4fc" text-anchor="middle">Chanda Mama Counts His Star Friends in Bundles of 10</text>
      <!-- Chanda Mama Face -->
      <circle cx="100" cy="85" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <circle cx="92" cy="78" r="3" fill="#854d0e"/><circle cx="108" cy="78" r="3" fill="#854d0e"/>
      <path d="M92,92 Q100,102 108,92" fill="none" stroke="#854d0e" stroke-width="2"/>
      <text x="100" y="132" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#fde047" text-anchor="middle">Chanda Mama</text>
      <!-- Star Group Card 10 -->
      <rect x="180" y="55" width="100" height="60" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
      <text x="230" y="82" font-size="18" fill="#fde047" text-anchor="middle">⭐ × 10</text>
      <text x="230" y="104" font-family="system-ui, sans-serif" font-size="9" fill="#c7d2fe" text-anchor="middle">1 Packet of 10</text>
      <!-- Star Group Card 100 -->
      <rect x="320" y="55" width="120" height="60" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
      <text x="380" y="82" font-size="18" fill="#fde047" text-anchor="middle">🌟 × 100</text>
      <text x="380" y="104" font-family="system-ui, sans-serif" font-size="9" fill="#c7d2fe" text-anchor="middle">1 Big Box of 100</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">"Grouping makes counting infinite stars easy and fun!"</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Story Comprehension",
        q: "Why was Chanda Mama having trouble counting the stars in the sky? What clever system of cards did he invent to keep count?",
        ans: "<strong>Answer:</strong><br>1. <strong>The Trouble:</strong> There were so many twinkling stars appearing and disappearing across the vast sky that Chanda Mama lost count whenever a star moved.<br>2. <strong>The Card System:</strong><br>• For every single star, he put a <strong>[1] card</strong> in his pocket.<br>• When he collected ten [1] cards, he exchanged them for one <strong>[10] card</strong>.<br>• When he collected ten [10] cards, he exchanged them for one big <strong>[100] card</strong>.",
        marks: 3,
        rubric: [
          { key: "Explanation of difficulty with infinite twinkling stars", marks: "1.0 M" },
          { key: "Detailed breakdown of the base-10 card exchange system", marks: "2.0 M" }
        ]
      },
      {
        category: "Mathematical Integration • Cards to Numbers",
        q: "If Chanda Mama has these cards in his pocket, what is the total number of stars counted? (a) Two [100] cards, three [10] cards, and four [1] cards. (b) Three [100] cards and eight [1] cards.",
        ans: "<strong>Calculations:</strong><br>• <strong>(a)</strong> (2 × 100) + (3 × 10) + (4 × 1) = 200 + 30 + 4 = <strong>234 stars</strong>.<br>• <strong>(b)</strong> (3 × 100) + (0 × 10) + (8 × 1) = 300 + 0 + 8 = <strong>308 stars</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct calculation for (a) 234", marks: "1.0 M" },
          { key: "Correct calculation for (b) 308 (handling zero tens)", marks: "1.0 M" }
        ]
      },
      {
        category: "Creative Dialogue Writing",
        q: "Write a short two-line greeting that a child on Earth would say to the Moon through their bedroom window.",
        ans: "<strong>Model Greeting:</strong><br>'Namaste, Chanda Mama! Thank you for lighting up our dark night with your gentle, silver glow.'",
        marks: 2,
        rubric: [
          { key: "Appropriate child-friendly tone and expression", marks: "1.0 M" },
          { key: "Correct punctuation and poetic quality", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Constellations & Pattern Recognition",
      text: "Ancient astronomers grouped bright stars into pictures of hunters, bears, and queens called constellations (like Saptarishi / Ursa Major).",
      question: "How did grouping stars into recognizable patterns help ancient travelers and sailors navigate across open oceans at night?",
      answer: "1. In ancient times before GPS or compasses, stars provided fixed landmarks in the sky.<br>2. By locating the Saptarishi constellation and following its pointer stars to the North Star (Dhruva Tara), sailors could always identify true North and steer ships safely without getting lost.",
      rubric: "1.5M purpose of constellations as sky landmarks + 1.5M locating the North Star for navigation."
    }
  },
  {
    id: "st12",
    num: 12,
    unit: "Unit 5: Sky and Space",
    title: "Chandrayaan",
    subtitle: "India's Moon Mission, Vikram Lander, Pragyan Rover, ISRO Pride & Science",
    concepts: [
      "Celebrating India's historic achievement: Chandrayaan-3 landing on the Moon's South Pole.",
      "Key spacecraft components: propulsion module, Vikram lander, and Pragyan rover.",
      "The dedication of ISRO scientists, teamwork, and scientific perseverance.",
      "National pride and inspiring young students to pursue space science and STEM."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#090d16" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">Chandrayaan-3 — India on the Moon (Shiv Shakti Point)</text>
      <!-- Moon Surface -->
      <path d="M0,130 Q290,110 580,130 L580,160 L0,160 Z" fill="#334155"/>
      <ellipse cx="140" cy="138" rx="20" ry="6" fill="#1e293b"/>
      <ellipse cx="450" cy="140" rx="35" ry="8" fill="#1e293b"/>
      <!-- Vikram Lander -->
      <rect x="265" y="65" width="50" height="40" rx="4" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <line x1="265" y1="105" x2="250" y2="125" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="315" y1="105" x2="330" y2="125" stroke="#94a3b8" stroke-width="2.5"/>
      <!-- Tiranga Flag on Lander -->
      <rect x="280" y="73" width="20" height="4" fill="#ff9933"/>
      <rect x="280" y="77" width="20" height="4" fill="#ffffff"/>
      <rect x="280" y="81" width="20" height="4" fill="#138808"/>
      <!-- Pragyan Rover rolling down ramp -->
      <line x1="315" y1="95" x2="370" y2="125" stroke="#cbd5e1" stroke-width="2"/>
      <rect x="375" y="112" width="25" height="12" rx="2" fill="#f59e0b"/>
      <circle cx="380" cy="126" r="3" fill="#0f172a"/><circle cx="395" cy="126" r="3" fill="#0f172a"/>
      <text x="390" y="105" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#fbbf24">Pragyan</text>
      <text x="290" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#f8fafc">Vikram Lander</text>
    </svg>`,
    questions: [
      {
        category: "Let us Think • Science Comprehension",
        q: "What was the historic achievement of India's Chandrayaan-3 mission? What are the names of the lander and the rover?",
        ans: "<strong>Answer:</strong><br>1. <strong>Historic Achievement:</strong> On 23 August 2023, India became the <strong>first country in the world</strong> to successfully land a spacecraft near the challenging South Pole of the Moon, and the fourth country to achieve a soft landing on the lunar surface.<br>2. <strong>Components:</strong><br>• The lander was named <strong>Vikram</strong> (in honour of Dr. Vikram Sarabhai, father of the Indian space programme).<br>• The six-wheeled robotic rover was named <strong>Pragyan</strong> (which means 'wisdom' in Sanskrit).",
        marks: 3,
        rubric: [
          { key: "Correct statement of first country at Moon's South Pole", marks: "1.5 M" },
          { key: "Correct naming of Vikram lander and Pragyan rover", marks: "1.5 M" }
        ]
      },
      {
        category: "Scientific Vocabulary • Space Technology",
        q: "Explain in simple words what a 'Rover' does on the Moon's surface. What was Pragyan looking for?",
        ans: "<strong>Explanation:</strong><br>• A <strong>rover</strong> is a small robotic vehicle equipped with wheels, cameras, and scientific instruments that can drive over the rocky lunar soil.<br>• <strong>Pragyan's mission:</strong> Pragyan rolled down the ramp to analyse lunar soil and rocks, taking temperature measurements and confirming the presence of elements like <strong>sulphur, oxygen, iron, and traces of water ice</strong> beneath the lunar surface.",
        marks: 3,
        rubric: [
          { key: "Definition of a lunar rover as a wheeled robotic explorer", marks: "1.5 M" },
          { key: "Scientific investigation of soil, minerals, and water ice", marks: "1.5 M" }
        ]
      },
      {
        category: "National Pride & Career Inspiration",
        q: "Why is 23rd August celebrated every year as 'National Space Day' in India?",
        ans: "<strong>Significance:</strong><br>The Government of India declared <strong>23rd August as National Space Day</strong> to commemorate the historic success of the Chandrayaan-3 soft landing on the Moon, honour the brilliant women and men scientists of ISRO, and inspire future generations of students to pursue careers in space research and engineering.",
        marks: 2,
        rubric: [
          { key: "Commemoration of Chandrayaan-3 landing", marks: "1.0 M" },
          { key: "Honouring ISRO scientists and inspiring youth", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Scientific Resilience & Failure to Success",
      text: "In 2019, Chandrayaan-2's lander lost communication just 2 km above the lunar surface and crashed. Instead of giving up, ISRO scientists analyzed every error and redesigned Chandrayaan-3 with stronger legs and better sensors.",
      question: "What life lesson does ISRO's journey from Chandrayaan-2 to Chandrayaan-3 teach school students about dealing with failure in examinations and life?",
      answer: "1. Failure is not the end of the road; it is a powerful stepping stone to future success if one learns honestly from mistakes.<br>2. By calmly analyzing what went wrong, correcting their methods, and working together as a determined team, ISRO proved that perseverance and hard work always turn failure into historic victory.",
      rubric: "1.5M learning from mistakes and perseverance + 1.5M inspiring message on overcoming setbacks."
    }
  }
];

module.exports = { santoorChapters };
