// Official NCERT Class 4 English (Marigold Book 4) Complete Dataset - Units 1 to 10
// Aligned with CBSE Curriculum (2026-27 Session)

const marigoldUnits = [
  // -------------------------------------------------------------------------
  // UNIT 1: WAKE UP! & NEHA'S ALARM CLOCK
  // -------------------------------------------------------------------------
  {
    id: "mg_u1",
    num: 1,
    unit: "Unit 1: Morning Delights",
    title: "Wake Up! & Neha's Alarm Clock",
    subtitle: "Poem by C. Fletcher & Classic Story on Internal Biological Clock and Waking Up Joyfully",
    concepts: [
      "Poem 'Wake Up!': Singing birds, buzzing bees, morning breeze, washing and getting ready early.",
      "Story 'Neha's Alarm Clock': Neha's wish for the clock to forget its ring, chirping birds, warm morning sunbeam.",
      "The discovery: Even when the clock is broken and birds are quiet, the body's internal biological clock wakes us on time.",
      "Grammar: Past continuous tense (was/were + verb-ing), opposites, and daily routine vocabulary."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Neha's Alarm Clock — Who Wakes Neha in the Morning?</text>
      <!-- Step 1: Clock -->
      <circle cx="90" cy="80" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="90" y="85" font-size="20" text-anchor="middle">⏰</text>
      <text x="90" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Alarm Clock (6 AM)</text>
      <line x1="120" y1="80" x2="180" y2="80" stroke="#eab308" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Step 2: Birds -->
      <circle cx="215" cy="80" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="215" y="85" font-size="20" text-anchor="middle">🐦</text>
      <text x="215" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Chirping Birds</text>
      <line x1="245" y1="80" x2="305" y2="80" stroke="#eab308" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Step 3: Sun -->
      <circle cx="340" cy="80" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="340" y="85" font-size="20" text-anchor="middle">☀️</text>
      <text x="340" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Warm Sunbeam</text>
      <line x1="370" y1="80" x2="430" y2="80" stroke="#eab308" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Step 4: Body Clock -->
      <circle cx="470" cy="80" r="32" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
      <text x="470" y="86" font-size="22" text-anchor="middle">❤️</text>
      <text x="470" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Internal Body Clock</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#854d0e" text-anchor="middle">"There is a clock inside you which tells you when to sleep, eat, and wake up!"</text>
    </svg>`,
    questions: [
      {
        category: "Reading Comprehension • Text Questions",
        q: "Answer the following from Unit 1: (a) What what time did Neha's clock ring every morning? (b) What did the birds say to Neha? (c) What is the 'clock inside you' that mother explains to Neha?",
        ans: `<strong>(a)</strong> Neha's alarm clock rang at <strong>6 o'clock</strong> every single morning.<br><br>
<strong>(b)</strong> The tiny birds that came to the window sill chirped warmly: <em>'Wake up! Wake up, fast! You will miss the school bus!'</em><br><br>
<strong>(c)</strong> Mother explained that every human body has a natural <strong>internal biological body clock</strong>. This natural rhythm subconsciously monitors our daily routine and signals our mind when it is time to wake up, when to feel hungry for lunch, and when to feel sleepy at night.`,
        marks: 3,
        rubric: [
          { key: "Mentions 6 o'clock and birds' morning call", marks: "1.5 M" },
          { key: "Explains mother's description of natural internal body clock", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar & Vocabulary • Sentence Completion",
        q: "Fill in the blanks with 'was' or 'were': (a) The cows, horses, and sheep ___ grazing in the meadow. (b) The little alarm clock ___ ticking on the side table. (c) The birds ___ singing melodiously in the green trees.",
        ans: `<strong>(a)</strong> The cows, horses, and sheep <strong>were</strong> grazing in the meadow. (Plural subject uses 'were').<br>
<strong>(b)</strong> The little alarm clock <strong>was</strong> ticking on the side table. (Singular subject uses 'was').<br>
<strong>(c)</strong> The birds <strong>were</strong> singing melodiously in the green trees. (Plural subject uses 'were').`,
        marks: 3,
        rubric: [
          { key: "Correct selection for all 3 sentences with grammatical rule", marks: "3.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Building a Healthy Morning Routine",
      text: "Many students feel groggy and rush out without breakfast because they stay up late watching screens.",
      question: "Based on 'Neha's Alarm Clock', how can a child train their internal body clock to wake up refreshed at 6:00 am naturally?",
      answer: "A child can train their internal clock by going to sleep at the exact same time every night (e.g., 9:30 pm), turning off digital screens an hour before bed, and keeping bedroom curtains slightly open so natural morning sunlight stimulates the body's waking reflex.",
      rubric: "1.5 Marks for consistent sleep schedule; 1.5 Marks for screen reduction and natural light."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 2: NOSES & THE LITTLE FIR TREE
  // -------------------------------------------------------------------------
  {
    id: "mg_u2",
    num: 2,
    unit: "Unit 2: Self-Acceptance & Nature",
    title: "Noses & The Little Fir Tree",
    subtitle: "Humorous Poem by Aileen Fisher & Classic Folk Tale on Self-Acceptance and True Beauty",
    concepts: [
      "Poem 'Noses': The funny human nose sticking right out on the face with two little holes for breathing.",
      "Story 'The Little Fir Tree': The magician Shetty grants four wishes to the sad fir tree with needle-like leaves.",
      "The cycle of wishes: Gold leaves stolen by a thief; glass leaves shattered by wind; green broad leaves eaten by a goat.",
      "The lesson: The fir tree's original needle-like leaves were the best adaptation for cold mountain winds."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">The Little Fir Tree — The Cycle of Four Wishes</text>
      <!-- Tree 1 -->
      <polygon points="90,45 60,95 120,95" fill="#15803d"/>
      <rect x="85" y="95" width="10" height="20" fill="#78350f"/>
      <text x="90" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">1. Green Leaves</text>
      <text x="90" y="145" font-family="system-ui, sans-serif" font-size="8" fill="#dc2626" text-anchor="middle">(Eaten by goat)</text>
      <!-- Tree 2 -->
      <polygon points="210,45 180,95 240,95" fill="#facc15"/>
      <rect x="205" y="95" width="10" height="20" fill="#78350f"/>
      <text x="210" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#78350f" text-anchor="middle">2. Gold Leaves</text>
      <text x="210" y="145" font-family="system-ui, sans-serif" font-size="8" fill="#dc2626" text-anchor="middle">(Stolen by man)</text>
      <!-- Tree 3 -->
      <polygon points="330,45 300,95 360,95" fill="#93c5fd"/>
      <rect x="325" y="95" width="10" height="20" fill="#78350f"/>
      <text x="330" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e3a8a" text-anchor="middle">3. Glass Leaves</text>
      <text x="330" y="145" font-family="system-ui, sans-serif" font-size="8" fill="#dc2626" text-anchor="middle">(Shattered by wind)</text>
      <!-- Tree 4: Back to Needle -->
      <polygon points="460,45 430,95 490,95" fill="#047857"/>
      <rect x="455" y="95" width="10" height="20" fill="#78350f"/>
      <text x="460" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#064e3b" text-anchor="middle">4. Needle Leaves</text>
      <text x="460" y="145" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#15803d" text-anchor="middle">(Safe & Best!)</text>
    </svg>`,
    questions: [
      {
        category: "Reading Comprehension",
        q: "Why was the little fir tree sad? Describe the four wishes granted by Shetty the magician and what happened to each wish.",
        ans: `The little fir tree was sad because it had thin, sharp needle-like leaves, so no birds ever made their nests in its branches.<br><br>
<strong>The Four Wishes Granted by Shetty the Magician:</strong><br>
1. <strong>First Wish (Green broad leaves):</strong> In the morning, a hungry stray goat came and grazed all the tender green leaves away.<br>
2. <strong>Second Wish (Gold leaves):</strong> The sparkling gold leaves looked gorgeous, but at dusk, a greedy thief arrived and plucked every single gold leaf off the branches.<br>
3. <strong>Third Wish (Glass leaves):</strong> The glass leaves sparkled like diamonds in the sun, but at night, a fierce mountain wind blew and shattered every glass leaf into pieces.<br>
4. <strong>Fourth Wish (Return to Needle leaves):</strong> Realizing the dangers of foolish vanity, the fir tree asked for its original needle leaves back. Neither goats eat them, nor thieves steal them, nor wind breaks them!`,
        marks: 4,
        rubric: [
          { key: "Explains original grievance of fir tree", marks: "1.0 M" },
          { key: "Details outcomes of all 4 wishes accurately", marks: "3.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Embracing Individuality",
      text: "A student feels insecure because she wears thick spectacles and cannot style her hair like movie stars.",
      question: "How does the message of 'The Little Fir Tree' teach students to value their unique natural self?",
      answer: "The fable teaches that longing for what others have often brings trouble, whereas our natural attributes are tailored to protect and serve us best. True self-worth comes from accepting ourselves with confidence rather than comparing ourselves to artificial standards.",
      rubric: "1.5 Marks for connection to fir tree's lesson; 1.5 Marks for promoting self-worth and confidence."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 3: RUN! & NASRUDDIN'S AIM
  // -------------------------------------------------------------------------
  {
    id: "mg_u3",
    num: 3,
    unit: "Unit 3: Energy, Joy & Wit",
    title: "Run! & Nasruddin's Aim",
    subtitle: "Poem by Mary Daunt on Joyful Motion & Witty Folk Tale of Mullah Nasruddin's Archery",
    concepts: [
      "Poem 'Run!': Running away from the crowded city into the country, sun, trees, meadow, and raindrops.",
      "Story 'Nasruddin's Aim': Nasruddin boasts about his unmatched archery skills before laughing friends.",
      "The three shots: First shot misses ('That was not my aim, it was the chief's aim!'); Second shot misses ('That was the commander's aim!'); Third shot hits dead center ('That was Nasruddin's aim!').",
      "Humor, quick wit, and saving face in social situations."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Nasruddin's Archery Target — The Three Arrows</text>
      <!-- Target Board -->
      <g transform="translate(420, 85)">
        <circle cx="0" cy="0" r="45" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
        <circle cx="0" cy="0" r="32" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="18" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="6" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
        <!-- Arrow in Bullseye -->
        <line x1="-80" y1="0" x2="0" y2="0" stroke="#1e293b" stroke-width="3"/>
        <polygon points="0,0 -8,-4 -8,4" fill="#1e293b"/>
      </g>
      <!-- Commentary -->
      <text x="160" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#dc2626">1st Arrow misses: "That was the guard's aim!"</text>
      <text x="160" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#d97706">2nd Arrow misses: "That was the commander's aim!"</text>
      <text x="160" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#15803d">3rd Arrow hits bullseye: "THAT was MY aim!"</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Nasruddin's legendary wit saves him from public embarrassment!</text>
    </svg>`,
    questions: [
      {
        category: "Comprehension & Character Analysis",
        q: "What did Nasruddin boast about to his friends? Why did he defend himself by naming other people when the first two arrows missed the target?",
        ans: `Nasruddin boasted that nobody could match his extraordinary skill with the bow and arrow. He claimed that he strings the bow, takes aim, shoots, and the arrow never fails to hit the exact bullseye.<br><br>
When his first arrow dropped far away in the dust, his friends burst into laughter. To defend his pride and escape mockery, Nasruddin quickly claimed: <em>'Oh, that was not my aim! That was the guard's aim. I was just showing you how the city guard shoots!'</em><br>
Similarly, on the second missed shot, he covered up by saying: <em>'That was how the army chief shoots.'</em> Only when luck struck on the third arrow and hit the center did he boldly boast: <em>'Now, THAT was my aim!'</em>`,
        marks: 3,
        rubric: [
          { key: "Details Nasruddin's archery boast", marks: "1.0 M" },
          { key: "Explains his witty cover-ups for the first two missed shots", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Humility vs. Boasting",
      text: "A student brags in class that he will score 100/100 without opening his book, but receives 40 marks.",
      question: "What lesson about boasting can we draw from the humorous tale of Nasruddin?",
      answer: "Empty boasting only invites ridicule. True mastery speaks through consistent performance and humility, not loud words. It is always wiser to let our actions prove our ability rather than bragging beforehand.",
      rubric: "1.5 Marks for relating to Nasruddin's near humiliation; 1.5 Marks for value of quiet competence."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 4: WHY? & ALICE IN WONDERLAND
  // -------------------------------------------------------------------------
  {
    id: "mg_u4",
    num: 4,
    unit: "Unit 4: Inquisitive Minds & Fantasy",
    title: "Why? & Alice in Wonderland",
    subtitle: "Poem on Childlike Curiosity & Lewis Carroll's Classic Tale of the White Rabbit",
    concepts: [
      "Poem 'Why?': The curious little boy who asks why lead sinks, why marble sinks, why wood floats, why wind blows.",
      "Scientific spirit of inquiry: asking questions is the foundation of scientific discovery.",
      "Story 'Alice in Wonderland': Alice resting on a riverbank, spotting a talking White Rabbit with pink eyes and a waistcoat.",
      "Falling down the endless rabbit hole into a wondrous fantasy world of small doors and glass tables."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#faf5ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#6b21a8" text-anchor="middle">Alice in Wonderland — Down the Rabbit Hole</text>
      <!-- Alice -->
      <circle cx="100" cy="80" r="28" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="100" y="85" font-size="20" text-anchor="middle">👧</text>
      <text x="100" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#581c87" text-anchor="middle">Alice</text>
      <line x1="130" y1="80" x2="190" y2="80" stroke="#c084fc" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- White Rabbit with Watch -->
      <circle cx="230" cy="80" r="30" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="230" y="85" font-size="22" text-anchor="middle">🐇</text>
      <text x="230" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#581c87" text-anchor="middle">White Rabbit (Watch!)</text>
      <line x1="265" y1="80" x2="330" y2="80" stroke="#c084fc" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Deep Rabbit Hole -->
      <ellipse cx="420" cy="80" rx="60" ry="35" fill="#1e1b4b" stroke="#7e22ce" stroke-width="3"/>
      <text x="420" y="85" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#c084fc" text-anchor="middle">Deep Rabbit Hole</text>
      <text x="420" y="130" font-family="system-ui, sans-serif" font-size="9" fill="#7e22ce" text-anchor="middle">Never-ending fall!</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#6b21a8" text-anchor="middle">"Oh dear! Oh dear! I shall be too late!" cried the White Rabbit.</text>
    </svg>`,
    questions: [
      {
        category: "Story Details & Imaginative Reading",
        q: "What was so unusual about the White Rabbit that made Alice jump up and follow him into the rabbit hole?",
        ans: `Alice had seen rabbits before, but this White Rabbit was extraordinary in several ways:<br>
1. He had bright pink eyes and pure white fur.<br>
2. He was dressed in a neat blue waistcoat with a necktie.<br>
3. He could speak English words aloud, fretting: <em>'Oh dear, I shall be too late!'</em><br>
4. Most amazingly, he took a golden pocket watch out of his waistcoat pocket, checked the time, and hurried away.<br>
Burning with intense curiosity, Alice had never seen a rabbit wearing clothes or carrying a watch, so she sprang up and pursued him across the meadow.`,
        marks: 3,
        rubric: [
          { key: "Lists unique attributes (pink eyes, waistcoat, speaking, pocket watch)", marks: "2.0 M" },
          { key: "Explains Alice's burning curiosity motivating her to follow", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "The Power of Curiosity",
      text: "The poem 'Why?' describes a little boy who asks hundreds of questions about nature every day.",
      question: "Why should teachers and parents encourage children to ask 'Why' questions instead of telling them to stay quiet?",
      answer: "Curiosity is the seed of all scientific invention. Great discoveries like gravity (Newton) and electricity began with simple 'Why' questions. Encouraging children to ask questions sharpens observation, fosters critical thinking, and builds a lifelong passion for learning.",
      rubric: "1.5 Marks for connecting curiosity to scientific discovery; 1.5 Marks for promoting inquiry-based learning."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 5: DON'T BE AFRAID OF THE DARK & HELEN KELLER
  // -------------------------------------------------------------------------
  {
    id: "mg_u5",
    num: 5,
    unit: "Unit 5: Overcoming Fear & Resilience",
    title: "Don't be Afraid of the Dark & Helen Keller",
    subtitle: "Poem by Ruskin Bond & Uplifting Biography of Helen Keller and Anne Sullivan",
    concepts: [
      "Poem by Ruskin Bond: Darkness is not scary; it is the gentle rest the earth takes after the busy day.",
      "The sun is harsh, but moonlight and stars shine peacefully forever.",
      "Story of Helen Keller: Born healthy, lost hearing and vision after a severe infant fever.",
      "The miracle teacher Anne Sullivan: Spelling letters onto Helen's palm; the water pump breakthrough (W-A-T-E-R).",
      "Language as the key to freedom, thought, and world knowledge."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0f172a" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#93c5fd" text-anchor="middle">Helen Keller's Breakthrough at the Water Pump</text>
      <!-- Water Pump -->
      <g transform="translate(140, 85)">
        <rect x="-10" y="-30" width="20" height="60" fill="#475569" stroke="#94a3b8" rx="2"/>
        <line x1="10" y1="-10" x2="30" y2="0" stroke="#94a3b8" stroke-width="4"/>
        <path d="M30 0 Q35 15 35 30" fill="none" stroke="#38bdf8" stroke-width="4"/>
        <text x="35" y="45" font-family="system-ui, sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">Cool Water</text>
      </g>
      <!-- Hand Spelling -->
      <g transform="translate(360, 85)">
        <rect x="-80" y="-25" width="160" height="50" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="8"/>
        <text x="0" y="-5" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#cbd5e1" text-anchor="middle">Miss Sullivan spells onto palm:</text>
        <text x="0" y="16" font-family="monospace" font-size="16" font-weight="900" fill="#38bdf8" text-anchor="middle">W - A - T - E - R</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#cbd5e1" text-anchor="middle">Suddenly, Helen understood that W-A-T-E-R meant the cool fluid flowing over her hand!</text>
    </svg>`,
    questions: [
      {
        category: "Biographical Comprehension",
        q: "How did Miss Sullivan help Helen Keller understand that words have meaning? Describe the famous incident at the water pump.",
        ans: `Miss Sullivan was a patient and loving teacher. She gave Helen a doll and finger-spelled <em>D-O-L-L</em> into Helen's hand using the tactile manual alphabet. At first, Helen only imitated the finger movements without realizing words were names for objects.<br><br>
<strong>The Water Pump Breakthrough:</strong><br>
One morning, Miss Sullivan took Helen to the garden water pump. As she pumped, a stream of icy cool water gushed over Helen's hand. At the exact same instant, Miss Sullivan spelled <strong>W-A-T-E-R</strong> into Helen's other palm. Suddenly, a spark of awareness ignited in Helen's mind. She realized that <em>W-A-T-E-R</em> was the name of the wonderful, cool, living substance flowing over her skin. That day, language entered Helen's world, unlocking her mind forever.`,
        marks: 4,
        rubric: [
          { key: "Explains finger-spelling method on palm", marks: "1.5 M" },
          { key: "Detailed description of water pump event", marks: "2.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Overcoming Child Night Fears",
      text: "A 9-year-old child is terrified of darkness and insists on sleeping with all lights blazing.",
      question: "How can Ruskin Bond's poem 'Don't be Afraid of the Dark' comfort the child?",
      answer: "The poem gently reframes darkness: Night is not a monster; it is the earth's natural blanket of peace after a long sunny day. While the harsh sun can be exhausting, moonlight is soothing and stars shine like loving eyes forever. Thinking friendly thoughts of friends and peaceful dreams helps children welcome the dark.",
      rubric: "1.5 Marks for reframing darkness as peaceful rest; 1.5 Marks for stars/moonlight comfort."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 6: THE DONKEY & THE MILKMAN'S COW
  // -------------------------------------------------------------------------
  {
    id: "mg_u6",
    num: 6,
    unit: "Unit 6: Patience, Gentle Kindness & Humor",
    title: "The Donkey & The Milkman's Cow",
    subtitle: "Rhyme on Animal Care & Humorous Story on Winning Through Gentleness Rather than Force",
    concepts: [
      "Poem 'The Donkey': Compassion toward animals—giving hay and corn rather than using a stick.",
      "Story 'The Milkman's Cow': The milkman's stubborn cow sits in the middle of a busy city road and refuses to budge.",
      "The failure of brute force: The milkman pulls, the policeman heaves, the wrestler pushes, the grocer tugs—nobody can move her.",
      "The triumph of kindness: A little boy arrives with a sheaf of green tasty grass; the cow happily follows him off the tarmac.",
      "Moral: Gentleness and understanding achieve what force can never accomplish."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">The Milkman's Cow — Brute Force vs. Gentle Grass</text>
      <!-- People pulling -->
      <g transform="translate(130, 80)">
        <text x="0" y="5" font-size="28" text-anchor="middle">👮‍♂️🤼‍♂️👨‍🌾</text>
        <text x="0" y="35" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#dc2626" text-anchor="middle">Pulling, Grunting & Sweating</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="9" fill="#991b1b" text-anchor="middle">Cow refuses to move!</text>
      </g>
      <!-- The Cow -->
      <g transform="translate(290, 80)">
        <text x="0" y="10" font-size="34" text-anchor="middle">🐄</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Stubborn Cow</text>
      </g>
      <!-- Little boy with grass -->
      <g transform="translate(450, 80)">
        <text x="0" y="5" font-size="28" text-anchor="middle">👦🌾</text>
        <text x="0" y="35" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d" text-anchor="middle">Little Boy with Sweet Grass</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="9" fill="#14532d" text-anchor="middle">Cow gets up and follows!</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e" text-anchor="middle">Kindness and patience conquer where angry force fails completely.</text>
    </svg>`,
    questions: [
      {
        category: "Story Comprehension & Theme",
        q: "Who all tried to move the milkman's cow from the road, and why did they fail? How did the little boy successfully get the cow to move?",
        ans: `<strong>Who tried to move the cow:</strong><br>
The milkman pleaded and tugged; a burly policeman in shiny buttons puffed and pulled; a muscle-bound wrestler pushed with all his might; and a grocer carrying heavy sacks shouted and shoved. All of them failed because they tried to overpower the stubborn animal through <strong>anger, shouting, and brute force</strong>, which only made the cow more rigid and defensive.<br><br>
<strong>How the little boy succeeded:</strong><br>
A little schoolboy came smiling with a fresh sheaf of sweet green grass. He held the tasty grass close to the cow's nose without pulling or shouting. Tempted by the delicious scent, the cow calmly stood up on her four hooves and followed the boy peacefully to the side of the road.`,
        marks: 3,
        rubric: [
          { key: "Lists adults who failed (milkman, policeman, wrestler, grocer)", marks: "1.5 M" },
          { key: "Explains boy's gentle approach with green grass", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Conflict Resolution in Daily Life",
      text: "Two siblings fight furiously over a toy, shouting and snatching it until it almost breaks.",
      question: "How does the moral of 'The Milkman's Cow' offer a better solution to resolve sibling quarrels?",
      answer: "The story proves that shouting and pulling only escalate resistance. A gentle, patient approach—like suggesting a shared game or politely taking turns—achieves peace immediately, whereas anger and stubborn force lead to deadlock.",
      rubric: "1.5 Marks for identifying fruitlessness of anger; 1.5 Marks for promoting patient negotiation."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 7: HIAWATHA & THE SCHOLAR'S MOTHER TONGUE
  // -------------------------------------------------------------------------
  {
    id: "mg_u7",
    num: 7,
    unit: "Unit 7: Native Lore & Birbal's Wisdom",
    title: "Hiawatha & The Scholar's Mother Tongue",
    subtitle: "Poem by H.W. Longfellow on Nature's Language & Akbar-Birbal Court Wit",
    concepts: [
      "Poem 'Hiawatha': The young Native American boy who learned the language of all birds ('Hiawatha's chickens') and animals ('Hiawatha's brothers').",
      "Story 'The Scholar's Mother Tongue': A learned pundit visits Emperor Akbar's court, boasting fluency in all languages.",
      "The challenge: Nobody can guess the scholar's true native mother tongue.",
      "Birbal's test: Birbal enters the scholar's bedroom at night, tickles his ear with a feather, and the startled scholar screams curses in his native Telugu.",
      "Insight: In times of sudden fright, fear, or distress, a person always speaks their mother tongue."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">The Scholar's Mother Tongue — Birbal's Midnight Test</text>
      <!-- Courtroom -->
      <g transform="translate(130, 80)">
        <text x="0" y="0" font-size="28" text-anchor="middle">👑👨‍⚖️</text>
        <text x="0" y="28" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Akbar's Court Pundit</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Speaks many languages</text>
      </g>
      <text x="260" y="80" font-size="22" fill="#ea580c">➔</text>
      <!-- Birbal with feather -->
      <g transform="translate(390, 80)">
        <rect x="-80" y="-30" width="160" height="60" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" rx="8"/>
        <text x="0" y="-10" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Birbal tickles ear in sleep 🪶</text>
        <text x="0" y="10" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#dc2626" text-anchor="middle">"Out bursts Telugu!"</text>
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="8" fill="#78350f" text-anchor="middle">True mother tongue revealed!</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">In danger or sudden distress, a person always instinctively speaks their mother tongue.</text>
    </svg>`,
    questions: [
      {
        category: "Court Wit & Psychological Deduction",
        q: "What challenge did the learned Pundit pose to Emperor Akbar's courtiers? How did Birbal discover the Pundit's true mother tongue?",
        ans: `<strong>The Challenge:</strong><br>
The learned Pundit spoke several languages with such flawless pronunciation and mastery that no courtier or minister could determine which one was his native mother tongue. He challenged the entire Mughal court to guess his true mother tongue within twenty-four hours.<br><br>
<strong>Birbal's Clever Discovery:</strong><br>
Knowing that intellectual defenses drop when asleep, Birbal quietly crept into the Pundit's bedchamber at dead of night. As the scholar slept deeply, Birbal tickled his ear with a soft dry feather and whispered into it. Startled half-awake in fright and irritation, the Pundit shouted curses and prayers in his mother tongue—<strong>Telugu</strong>. The next morning, Birbal announced Telugu before the court, and the astonished Pundit admitted Birbal was completely right!`,
        marks: 4,
        rubric: [
          { key: "Explains Pundit's challenge on multi-lingual fluency", marks: "1.5 M" },
          { key: "Details Birbal's midnight feather test and sudden Telugu reaction", marks: "2.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Emotional Connection to One's Mother Tongue",
      text: "Even when people study abroad and speak English professionally for decades, they count numbers and express deep sorrow or joy in their mother tongue.",
      question: "Why does our mother tongue hold such an unbreakable emotional bond in our subconscious mind?",
      answer: "A mother tongue is the first language of thought, lullabies, and childhood memories. It is wired into our deepest emotional neural pathways before formal schooling begins. As Birbal demonstrated, in moments of raw emotion or surprise, our instinctive brain always communicates in our native tongue.",
      rubric: "1.5 Marks for connection to childhood emotional wiring; 1.5 Marks for instinctive subconscious expression."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 8: A WATERING RHYME & THE GIVING TREE
  // -------------------------------------------------------------------------
  {
    id: "mg_u8",
    num: 8,
    unit: "Unit 8: Nurturing Nature & Selfless Love",
    title: "A Watering Rhyme & The Giving Tree",
    subtitle: "Poem on Plant Care & Shel Silverstein's Moving Classic on Unconditional Sacrificial Love",
    concepts: [
      "Poem 'A Watering Rhyme': Water plants early morning or evening; watering at noon burns flowers; water at the roots.",
      "Story 'The Giving Tree': The lifelong bond between a loving Apple Tree and a growing boy.",
      "Stages of giving: Apples to sell for money; branches to build a wooden house; trunk to carve a boat for sailing.",
      "The old man's return: The tree is now just an old stump, but happily offers itself as a quiet place for the tired old man to sit and rest.",
      "Theme: Gratitude towards nature's endless generosity vs. human selfishness."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">The Giving Tree — Lifelong Sacrificial Generosity</text>
      <!-- Step 1: Apples -->
      <circle cx="100" cy="80" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="100" y="85" font-size="20" text-anchor="middle">🍎</text>
      <text x="100" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Gave Apples (Boyhood)</text>
      <line x1="130" y1="80" x2="190" y2="80" stroke="#86efac" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Step 2: Branches -->
      <circle cx="225" cy="80" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="225" y="85" font-size="20" text-anchor="middle">🪵</text>
      <text x="225" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Gave Branches (House)</text>
      <line x1="255" y1="80" x2="315" y2="80" stroke="#86efac" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Step 3: Trunk -->
      <circle cx="350" cy="80" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="350" y="85" font-size="20" text-anchor="middle">⛵</text>
      <text x="350" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#14532d" text-anchor="middle">Gave Trunk (Boat)</text>
      <line x1="380" y1="80" x2="440" y2="80" stroke="#86efac" stroke-width="2" stroke-dasharray="3,3"/>
      <!-- Step 4: Stump -->
      <circle cx="475" cy="80" r="30" fill="#bbf7d0" stroke="#15803d" stroke-width="2.5"/>
      <text x="475" y="85" font-size="22" text-anchor="middle">🪑</text>
      <text x="475" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">Old Stump (Rest)</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#166534" text-anchor="middle">"An old stump is good for sitting and resting. Come, Boy, sit down and rest. And the tree was happy."</text>
    </svg>`,
    questions: [
      {
        category: "Literary Analysis & Generosity",
        q: "Trace how the tree helped the boy at different stages of his life in 'The Giving Tree'. Why was the tree happy even when it was reduced to a mere stump?",
        ans: `At every stage of the boy's life, the tree gave selflessly without asking for anything in return:<br>
1. <strong>Childhood:</strong> The tree gave shade, leaves for crowns, and apples to eat; the boy climbed its trunk and swung from branches.<br>
2. <strong>Youth:</strong> When the young man needed money, the tree urged: <em>'Pluck my apples and sell them in the market.'</em><br>
3. <strong>Adulthood:</strong> When he needed a home for his family, the tree offered: <em>'Cut down my branches and build yourself a house.'</em><br>
4. <strong>Middle Age:</strong> When he felt restless and wanted to sail away, the tree said: <em>'Cut down my trunk to make a boat.'</em><br>
5. <strong>Old Age:</strong> When the boy returned as a feeble, tired old man, the tree had no apples, shade, or wood left. Yet, it stood up straight as best it could, offering its flat stump: <em>'Sit down, Boy, and rest.'</em><br><br>
The tree was happy because its love was completely pure and unconditional—its greatest joy was being useful and bringing comfort to the one it loved.`,
        marks: 4,
        rubric: [
          { key: "Details the 5 stages of giving (apples, branches, trunk, stump)", marks: "2.5 M" },
          { key: "Explains pure unconditional love making tree happy", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Environmental Gratitude toward Trees",
      text: "Humans cut down millions of trees every year for timber, furniture, and paper, rarely planting replacements.",
      question: "How should our relationship with nature change after reading 'The Giving Tree'?",
      answer: "We must transition from being selfish exploiters to grateful caretakers of nature. For every tree harvested, we should plant ten saplings, protect existing forests, and recognize that trees provide the very oxygen we breathe, rainfall for our crops, and soil fertility.",
      rubric: "1.5 Marks for contrasting exploitation with stewardship; 1.5 Marks for afforestation and ecological gratitude."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 9: BOOKS & GOING TO BUY A BOOK
  // -------------------------------------------------------------------------
  {
    id: "mg_u9",
    num: 9,
    unit: "Unit 9: The Magic of Reading",
    title: "Books & Going to Buy a Book",
    subtitle: "Poem Celebrating Libraries & Story of Siblings Choosing Books with Grandfather's Gift",
    concepts: [
      "Poem 'Books': The library door opening to wondrous worlds of fat picture books and thin story books.",
      "Story 'Going to Buy a Book': Grandfather gifts pocket money to two siblings to purchase books.",
      "The dilemma: Big bookshop vs small shop; now or later; alone or together.",
      "The cozy bookshop experience: Finding a quiet corner, smelling fresh paper, and falling in love with reading."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Going to Buy a Book — The Magical Bookshop Experience</text>
      <!-- Shop Entrance -->
      <rect x="70" y="50" width="120" height="70" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="6"/>
      <text x="130" y="75" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">Small Bookshop</text>
      <text x="130" y="95" font-size="20" text-anchor="middle">📚</text>
      <text x="130" y="112" font-family="system-ui, sans-serif" font-size="9" fill="#3b82f6" text-anchor="middle">Warm bookkeeper</text>
      <!-- Decision Flow -->
      <line x1="200" y1="85" x2="270" y2="85" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="3,3"/>
      <!-- Sibling Reading -->
      <rect x="280" y="50" width="230" height="70" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="6"/>
      <text x="395" y="72" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e40af" text-anchor="middle">Choosing the Perfect Book</text>
      <text x="395" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle">Brother chose a picture book with machines</text>
      <text x="395" y="106" font-family="system-ui, sans-serif" font-size="10" fill="#334155" text-anchor="middle">Sister chose a fat book with wonderful stories</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1d4ed8" text-anchor="middle">"We sat on the floor for hours and read, completely forgetting time!"</text>
    </svg>`,
    questions: [
      {
        category: "Reading Comprehension",
        q: "Who gave the children money to buy books? What kind of books did the brother and sister finally choose from the bookstore?",
        ans: `Their loving <strong>Grandfather</strong> gave the children money to buy books.<br><br>
<strong>The Books Chosen:</strong><br>
• The brother chose a <strong>large picture book with glossy photographs of machines and animals</strong>.<br>
• The sister chose a <strong>fat book packed with fascinating stories and colorful illustrations</strong>.<br><br>
Both children were so absorbed that they sat peacefully on the bookstore rug for hours reading side by side before rushing home to show their treasures to Grandfather.`,
        marks: 3,
        rubric: [
          { key: "Names Grandfather as gift giver", marks: "1.0 M" },
          { key: "Accurately describes both books chosen (picture book & fat storybook)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Building Reading Habits in Primary School",
      text: "Many children today prefer 15-second mobile video clips over reading books, leading to poor vocabulary and weak attention spans.",
      question: "How can parents replicate the joyful bookstore experience from 'Going to Buy a Book' to make children fall in love with reading?",
      answer: "Parents should take children to local bookstores or public libraries regularly, give them freedom to browse and pick books of their own interest rather than forcing academic textbooks, and create cozy family reading hours at home where everyone reads together.",
      rubric: "1.5 Marks for regular bookstore visits and free choice; 1.5 Marks for establishing daily home reading hours."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 10: THE NAUGHTY BOY & PINOCCHIO
  // -------------------------------------------------------------------------
  {
    id: "mg_u10",
    num: 10,
    unit: "Unit 10: Imagination & Character Building",
    title: "The Naughty Boy & Pinocchio",
    subtitle: "Poem by John Keats on Scotland & Carlo Collodi's World Classic of the Living Wooden Puppet",
    concepts: [
      "Poem 'The Naughty Boy': A boy runs away to Scotland to discover if ground was as hard, yard was as long, song was as merry, cherry was as red, and lead was as weighty.",
      "The realization: People and nature are beautifully identical everywhere in the world.",
      "Story 'Pinocchio': Old carpenter Gepetto crafts a puppet out of a strange piece of wood that giggles and talks.",
      "Pinocchio's mischief: Snatching Gepetto's wig, running away, and telling lies that make his wooden nose grow longer and longer.",
      "Value: Honesty, filial love, listening to parental guidance, and the path to becoming a real boy."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Pinocchio — The Wooden Puppet Whose Nose Grew with Every Lie</text>
      <!-- Gepetto's Workshop -->
      <g transform="translate(130, 80)">
        <text x="0" y="0" font-size="28" text-anchor="middle">🪵🪚</text>
        <text x="0" y="28" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#78350f" text-anchor="middle">Gepetto's Workshop</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Carves living puppet</text>
      </g>
      <text x="250" y="80" font-size="22" fill="#d97706">➔</text>
      <!-- Pinocchio's Growing Nose -->
      <g transform="translate(390, 80)">
        <!-- Head -->
        <circle cx="0" cy="0" r="22" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
        <circle cx="-6" cy="-4" r="3" fill="#0f172a"/>
        <path d="M-8 8 Q0 15 8 8" fill="none" stroke="#dc2626" stroke-width="2"/>
        <!-- Growing Nose -->
        <line x1="8" y1="0" x2="85" y2="0" stroke="#b45309" stroke-width="6" stroke-linecap="round"/>
        <text x="45" y="-10" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#dc2626" text-anchor="middle">Lie #1... Lie #2... Lie #3!</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#78350f" text-anchor="middle">Nose grows longer!</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Moral: Truthfulness restores dignity; lies become visibly evident and trap the liar.</text>
    </svg>`,
    questions: [
      {
        category: "Classic Literature Comprehension",
        q: "What strange thing happened when Gepetto carved the puppet's nose and mouth in 'Pinocchio'? What happened to Pinocchio's nose every time he told an untruth?",
        ans: `<strong>Strange events during carving:</strong><br>
When old Gepetto carved the puppet's face, the moment his chisel finished the eyes, the eyes began to roll around. As soon as he shaped the nose, it instantly began to sprout and grow longer and longer. When he finished the mouth, it burst into loud mocking laughter, stuck out its wooden tongue, and when Gepetto bent down, the puppet reached out and snatched Gepetto's wig right off his head!<br><br>
<strong>Pinocchio's growing nose:</strong><br>
Whenever Pinocchio told a lie or made up a false excuse to hide his mischief, his wooden nose magically stretched and lengthened by several inches. Only when he confessed the honest truth, expressed genuine remorse, and promised to be a good, obedient son did his nose shrink back to normal size.`,
        marks: 4,
        rubric: [
          { key: "Describes comical events during carving (rolling eyes, laughter, wig snatch)", marks: "2.0 M" },
          { key: "Explains nose growing with each lie and restoration with truth", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "The Burden of Dishonesty",
      text: "A student breaks a classroom window with a football and blames another child who was absent.",
      question: "How does Pinocchio's growing nose symbolize the psychological trap of telling lies?",
      answer: "Pinocchio's nose is a visible metaphor for the burden of dishonesty. One lie always forces the speaker to invent two more lies to defend it, making the deception larger, clumsier, and impossible to hide. Eventually, the truth emerges, leaving the liar disgraced. Honesty, though initially hard, sets the conscience free.",
      rubric: "1.5 Marks for explaining metaphor of escalating lies; 1.5 Marks for value of immediate truthfulness."
    }
  }
];

module.exports = { marigoldUnits };
