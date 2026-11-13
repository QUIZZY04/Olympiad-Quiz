// Official NCERT Class 4 English (Marigold Book 4) Complete Dataset - Units 1 to 10
// Aligned with CBSE Curriculum (2026-27 Session)
// Comprehensive Question-Level Coverage: Reading is Fun, Talk Time, Word Building & Grammar

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
        category: "Reading is Fun • Poem 'Wake Up!'",
        q: "What do you think birds say to each other in the morning according to the poem? Name four creatures who wake up before the child does.",
        ans: "In the morning, the birds chirping on the green branches say <em>'Good morning! Wake up and enjoy this lovely day!'</em> to each other.<br><br>Four creatures who wake up early before the child does are:<br>1. The singing birds in the trees.<br>2. The buzzing bees in the flowers.<br>3. The cows, horses, and ducks on the farm.<br>4. The tiny chirping chickens.",
        marks: 3,
        rubric: [
          { key: "Explains birds' morning greeting call", marks: "1.5 M" },
          { key: "Names four early-waking animals/birds accurately", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Neha's Alarm Clock'",
        q: "Answer the following from 'Neha's Alarm Clock': (a) What time did Neha's clock ring every morning? (b) What did the birds say to Neha? (c) What is the 'clock inside you' that mother explains to Neha?",
        ans: "<strong>(a)</strong> Neha's alarm clock rang at <strong>6 o'clock</strong> every single morning.<br><br><strong>(b)</strong> The tiny birds that came to the window sill chirped warmly: <em>'Wake up! Wake up, fast! You will miss the school bus!'</em><br><br><strong>(c)</strong> Mother explained that every human body has a natural <strong>internal biological body clock</strong>. This natural rhythm subconsciously monitors our daily routine and signals our mind when it is time to wake up, when to feel hungry for lunch, and when to feel sleepy at night.",
        marks: 3,
        rubric: [
          { key: "Mentions 6 o'clock and birds' morning call", marks: "1.5 M" },
          { key: "Explains mother's description of natural internal body clock", marks: "1.5 M" }
        ]
      },
      {
        category: "Word Building • Past Tense 'was' or 'were'",
        q: "Fill in the blanks with 'was' or 'were': (a) The cows, horses, and sheep ___ grazing in the meadow. (b) The little alarm clock ___ ticking on the side table. (c) The birds ___ singing melodiously in the green trees. (d) Neha ___ smiling happily under her blanket.",
        ans: "<strong>(a)</strong> The cows, horses, and sheep <strong>were</strong> grazing in the meadow. (Plural subject uses 'were').<br><strong>(b)</strong> The little alarm clock <strong>was</strong> ticking on the side table. (Singular subject uses 'was').<br><strong>(c)</strong> The birds <strong>were</strong> singing melodiously in the green trees. (Plural subject uses 'were').<br><strong>(d)</strong> Neha <strong>was</strong> smiling happily under her blanket. (Singular subject uses 'was').",
        marks: 2,
        rubric: [
          { key: "Correct grammatical selection for all 4 blanks (0.5 M each)", marks: "2.0 M" }
        ]
      },
      {
        category: "Talk Time • Morning Routine",
        q: "What is your morning routine? List four activities you do in sequence after getting out of bed to reach school on time.",
        ans: `1. <strong>Brushing & Washing:</strong> Brush teeth thoroughly and wash face with cool water to feel alert and fresh.<br>
2. <strong>Morning Bath:</strong> Take a refreshing bath and dress neatly in clean, ironed school uniform and polished shoes.<br>
3. <strong>Nutritious Breakfast:</strong> Eat a wholesome breakfast like warm porridge, milk, or idlis with parents.<br>
4. <strong>Bag Verification:</strong> Check the school timetable to verify that all required notebooks, textbooks, and water bottle are packed.`,
        marks: 3,
        rubric: [
          { key: "Four logical morning sequential steps described clearly", marks: "3.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Circadian Rhythm and Sleep Hygiene",
      text: "Medical doctors explain that staying up late looking at bright tablet screens confuses the brain's pineal gland, delaying the release of melatonin (the sleep hormone) and making it difficult to wake up feeling refreshed at 6 AM.",
      question: "How does medical science support the mother's explanation of the 'internal body clock' in Neha's Alarm Clock? State two healthy bedtime habits.",
      answer: "<strong>Scientific Connection:</strong> Mother's advice reflects the biological circadian rhythm. Our brain naturally adjusts to cycles of daylight and dark. When regular sleep schedules are maintained, the internal body clock automatically wakes us on time even without mechanical alarms.<br><br><strong>Two Healthy Habits:</strong><br>1. <em>Screen-Free Hour:</em> Shutting off all phones, tablets, and TVs at least 45 minutes before sleep.<br>2. <em>Consistent Bedtime:</em> Going to sleep at the exact same hour every night to train the body clock.",
      rubric: "1 Mark for connecting circadian rhythm to the story; 1 Mark for two valid sleep hygiene protocols."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 2: NOSES & THE LITTLE FIR TREE
  // -------------------------------------------------------------------------
  {
    id: "mg_u2",
    num: 2,
    unit: "Unit 2: Nature & Acceptance",
    title: "Noses & The Little Fir Tree",
    subtitle: "Humorous Poem by Aileen Fisher & Story on Self-Acceptance and Gratitude for Natural Gifts",
    concepts: [
      "Poem 'Noses': The funny appearance of the nose sticking out in the middle of the face with two little breathing holes.",
      "Story 'The Little Fir Tree': Magician Shetty grants four wishes to a little fir tree that disliked its needle-like leaves.",
      "The four wishes: Green leaves (eaten by goat), golden leaves (stolen by thief), glass leaves (shattered by wind), and back to needles.",
      "The moral: Nature designs every living creature with perfection; self-acceptance brings true peace.",
      "Grammar: Prefixes 'un-' and 'im-' to form opposites."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">The Little Fir Tree — The Four Wishes & Self-Acceptance</text>
      <!-- Wish 1: Green Leaves -->
      <circle cx="80" cy="80" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="80" y="85" font-size="16" text-anchor="middle">🍃</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">1. Green Leaves</text>
      <text x="80" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#dc2626" text-anchor="middle">Eaten by Goat 🐐</text>
      <!-- Wish 2: Gold Leaves -->
      <circle cx="215" cy="80" r="28" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
      <text x="215" y="85" font-size="16" text-anchor="middle">✨</text>
      <text x="215" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">2. Gold Leaves</text>
      <text x="215" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#dc2626" text-anchor="middle">Stolen by Thief 🥷</text>
      <!-- Wish 3: Glass Leaves -->
      <circle cx="350" cy="80" r="28" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="350" y="85" font-size="16" text-anchor="middle">💎</text>
      <text x="350" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">3. Glass Leaves</text>
      <text x="350" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#dc2626" text-anchor="middle">Broken by Wind 💨</text>
      <!-- Wish 4: Original Needles -->
      <circle cx="485" cy="80" r="32" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
      <text x="485" y="85" font-size="20" text-anchor="middle">🌲</text>
      <text x="485" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">4. Needles Back!</text>
      <text x="485" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#16a34a" text-anchor="middle">Safe, Happy &amp; Best</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#166534" text-anchor="middle">"Nature made our original form the safest and most suited for our life."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'Noses'",
        q: "Why does the poet think the nose is a funny thing? Why is a nose important for our body?",
        ans: "The poet thinks the nose is funny because it sticks out right in the middle of our face like a handle, showing everything plainly with two little breathing holes right where the breathing goes.<br><br>The nose is essential because it acts as our respiratory airway. It filters, warms, and humidifies the air we inhale, while its olfactory receptors enable us to smell delicious food and detect dangerous smoke.",
        marks: 3,
        rubric: [
          { key: "Cites handle comparison and two breathing holes", marks: "1.5 M" },
          { key: "Explains respiration and smell functions", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'The Little Fir Tree'",
        q: "Answer the following from 'The Little Fir Tree': (a) Why was the little fir tree sad? (b) Who was Shetty and what reward did he grant the fir tree?",
        ans: "<strong>(a)</strong> The little fir tree was sad because it had prickly, needle-like leaves instead of broad green leaves, which made it feel unattractive, and birds never built nests in its branches.<br><br><strong>(b)</strong> Shetty was a friendly magician who took shelter under the fir tree during a sudden rainstorm. Because the tree kept him completely dry, Shetty rewarded it by granting four wishes.",
        marks: 3,
        rubric: [
          { key: "Explains unhappiness over needle leaves and lack of nests", marks: "1.5 M" },
          { key: "Identifies magician Shetty and rain shelter reward", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • Four Wishes",
        q: "What happened to the fir tree's three temporary leaf transformations? What did the fir tree finally request for its fourth wish?",
        ans: "1. <strong>Broad Green Leaves:</strong> A hungry goat came along and ate all of them up.<br>2. <strong>Sparkling Gold Leaves:</strong> A greedy thief crept in at night and stole all the gold leaves.<br>3. <strong>Shining Glass Leaves:</strong> A strong evening wind blew, crashing the brittle glass leaves into shattered pieces.<br><br><strong>Final Request:</strong> For its fourth wish, the fir tree begged to have its original sharp needle-like leaves back, realizing no goat would eat them, no thief could steal them, and no wind could break them.",
        marks: 3,
        rubric: [
          { key: "Correct fates for green, gold, and glass leaves", marks: "1.5 M" },
          { key: "Wise final return to natural needles explained", marks: "1.5 M" }
        ]
      },
      {
        category: "Word Building • Opposites with Prefixes",
        q: "Add prefixes 'un-' or 'im-' to form opposites of: (a) Happy, (b) Polite, (c) Kind, (d) Possible.",
        ans: "<strong>(a) Happy:</strong> <em>Unhappy</em>.<br><strong>(b) Polite:</strong> <em>Impolite</em>.<br><strong>(c) Kind:</strong> <em>Unkind</em>.<br><strong>(d) Possible:</strong> <em>Impossible</em>.",
        marks: 2,
        rubric: [
          { key: "Four correct prefix transformations (0.5 M each)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Pine Needles in Alpine Snowstorms",
      text: "Botanists explain that fir and pine trees evolved needle-shaped leaves coated in thick waxy cuticle to withstand sub-zero Himalayan winters, shedding snow easily and minimizing water loss through transpiration.",
      question: "How does biological science confirm the moral lesson learned by the Little Fir Tree? Why would broad leaves have killed the fir tree in winter?",
      answer: "<strong>Biological Confirmation:</strong> The fable demonstrates that natural adaptations are evolutionary masterpieces. Broad leaves would accumulate heavy snow, breaking branches under sheer weight, and transpire water rapidly in freezing frozen soil, killing the tree through dehydration.<br><br><strong>Lesson:</strong> Just like the fir tree, every living organism has physical traits shaped by nature to survive its environment. Trying to imitate others leads to vulnerability, while embracing one's natural design ensures strength.",
      rubric: "1 Mark for snow shed and transpiration explanation; 1 Mark for connecting adaptation to self-acceptance."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 3: RUN! & NASRUDDIN'S AIM
  // -------------------------------------------------------------------------
  {
    id: "mg_u3",
    num: 3,
    unit: "Unit 3: Energy & Wittiness",
    title: "Run! & Nasruddin's Aim",
    subtitle: "Exuberant Poem by Mary Daunt & Humorous Folklore Story on Witty Archery Boasts",
    concepts: [
      "Poem 'Run!': Escaping the crowded city to run in the rain, under trees, through meadows, and down hillsides.",
      "Story 'Nasruddin's Aim': Nasruddin boasts of his unbeatable archery skills to his friends.",
      "The missed shots: Attributing his first miss to 'aiming like the chief guard' and second miss to 'the general'.",
      "The accidental bullseye: On the third lucky shot, hitting the center and proudly claiming: 'That was MY aim!'",
      "Grammar: Compound words, rhyming words, and dialogue punctuation."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Nasruddin's Aim — The Three Archery Shots</text>
      <!-- Target -->
      <circle cx="480" cy="85" r="40" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <circle cx="480" cy="85" r="28" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
      <circle cx="480" cy="85" r="16" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <circle cx="480" cy="85" r="6" fill="#dc2626"/>
      <!-- Shot 1 -->
      <rect x="50" y="55" width="100" height="65" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" rx="6"/>
      <text x="100" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#334155" text-anchor="middle">Shot 1: Missed!</text>
      <text x="100" y="95" font-family="system-ui, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">"That wasn't my aim!</text>
      <text x="100" y="108" font-family="system-ui, sans-serif" font-size="9" fill="#0284c7" text-anchor="middle">It was the Guard's!"</text>
      <!-- Shot 2 -->
      <rect x="180" y="55" width="100" height="65" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" rx="6"/>
      <text x="230" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#334155" text-anchor="middle">Shot 2: Missed!</text>
      <text x="230" y="95" font-family="system-ui, sans-serif" font-size="9" fill="#64748b" text-anchor="middle">"That wasn't me!</text>
      <text x="230" y="108" font-family="system-ui, sans-serif" font-size="9" fill="#0284c7" text-anchor="middle">It was the General's!"</text>
      <!-- Shot 3 -->
      <rect x="310" y="55" width="110" height="65" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
      <text x="365" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">Shot 3: Bullseye! 🎯</text>
      <text x="365" y="95" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Hits target center!</text>
      <text x="365" y="108" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#166534" text-anchor="middle">"That was MY aim!"</text>
      <text x="290" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">"Nasruddin's quick wit turned an embarrassing miss into witty humor."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'Run!'",
        q: "Where does the poet urge us to run? Why does she tell us to run away from the city into the countryside?",
        ans: "The poet urges us to run:<br>1. Away from the crowded city and into the sun.<br>2. Out to the country, into the raindrops, beneath trees, down hillsides, and through meadows.<br><br>She encourages this so we can escape stuffy, polluted concrete streets, breathe crisp open air, and experience pure, joyful, energetic freedom in nature.",
        marks: 3,
        rubric: [
          { key: "Lists destinations: out to country, raindrops, trees, meadows", marks: "1.5 M" },
          { key: "Explains contrast between crowded city and healthy nature", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Nasruddin's Aim'",
        q: "What was Nasruddin boasting about to his friends? Why did his friends burst into loud laughter after his first shot?",
        ans: "Nasruddin was proudly boasting that no archer could match his skill with the bow and arrow, claiming that the moment he strung the bow and took aim, the arrow never missed its mark.<br><br>His friends burst into loud laughter because on his very first attempt, the arrow fell far short of the target and landed harmlessly on the grass.",
        marks: 3,
        rubric: [
          { key: "Describes boast of unmatched archery precision", marks: "1.5 M" },
          { key: "Explains humiliating miss on first arrow shot", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Nasruddin's Aim'",
        q: "How did Nasruddin cleverly defend himself after his first two missed shots? What did he say when the third arrow struck the bullseye?",
        ans: "<strong>First Miss:</strong> Nasruddin coolly declared: <em>'It wasn't my aim! It was the aim of the Chief Guard!'</em><br><strong>Second Miss:</strong> He waved his hand and exclaimed: <em>'That was not my aim either; it was how the Chief of Army shoots!'</em><br><br><strong>Third Shot (Bullseye):</strong> When luck struck and the third arrow hit dead center, he looked around triumphantly and exclaimed with supreme pride: <em>'Did you see that? That was MY aim!'</em>",
        marks: 3,
        rubric: [
          { key: "Quotes defenses for guard and army chief misses", marks: "1.5 M" },
          { key: "Quotes triumphant claim of ownership on bullseye", marks: "1.5 M" }
        ]
      },
      {
        category: "Word Building • Compound Words",
        q: "Combine two words to create meaningful compound words: (a) Play + ground, (b) Sun + beam, (c) Water + fall, (d) Rain + drop.",
        ans: "<strong>(a)</strong> Play + ground = <strong>Playground</strong>.<br><strong>(b)</strong> Sun + beam = <strong>Sunbeam</strong>.<br><strong>(c)</strong> Water + fall = <strong>Waterfall</strong>.<br><strong>(d)</strong> Rain + drop = <strong>Raindrop</strong>.",
        marks: 2,
        rubric: [
          { key: "Four correct compound words formed (0.5 M each)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Boasting vs. True Competence",
      text: "During sports trials, a student claims he can easily score 10 penalty goals in a row. When he misses the first four kicks, he blames the wet grass, the goalkeeper's gloves, and the referee's whistle.",
      question: "How does this student's behavior resemble Nasruddin's wit? What is the healthy difference between witty storytelling and genuine accountability in sports?",
      answer: "<strong>Resemblance to Nasruddin:</strong> Both deflect responsibility by attributing personal errors to external individuals or conditions to protect their pride.<br><br><strong>Difference between Wit & Accountability:</strong> In Nasruddin's folklore, deflecting excuses is humorous theater meant to entertain friends. However, in real sports, honest accountability (analyzing technique, admitting mistakes, practicing humbly) is essential to develop true skill and character.",
      rubric: "1 Mark for identifying parallel excuse-making; 1 Mark for distinguishing humorous fiction from authentic athletic accountability."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 4: WHY? & ALICE IN WONDERLAND
  // -------------------------------------------------------------------------
  {
    id: "mg_u4",
    num: 4,
    unit: "Unit 4: Curiosity & Fantasy",
    title: "Why? & Alice in Wonderland",
    subtitle: "Inquisitive Poem on Scientific Curiosity & Classic Lewis Carroll Fantasy Journey down the Rabbit Hole",
    concepts: [
      "Poem 'Why?': The curious little boy who always asks why wood swims, why lead sinks, and why stars shine.",
      "Story 'Alice in Wonderland': Alice resting on a riverbank spots a White Rabbit with pink eyes wearing a waistcoat.",
      "The rabbit pulls out a watch from its pocket and mutters: 'Oh dear, I will be late!'",
      "Alice tumbles down the deep rabbit hole into a world of enchanted talking animals and magical adventures.",
      "Grammar: Question words (Why, What, Where, When, Who, How) and vivid descriptive adjectives."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#faf5ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#7e22ce" text-anchor="middle">Alice in Wonderland — Down the Rabbit Hole</text>
      <!-- Alice Resting -->
      <circle cx="80" cy="85" r="28" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="80" y="85" font-size="18" text-anchor="middle">👧</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#6b21a8" text-anchor="middle">Alice Listening</text>
      <text x="80" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#9333ea" text-anchor="middle">Riverbank dreams</text>
      <!-- White Rabbit -->
      <circle cx="230" cy="85" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="230" y="85" font-size="20" text-anchor="middle">🐇⏰</text>
      <text x="230" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e" text-anchor="middle">White Rabbit</text>
      <text x="230" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#a16207" text-anchor="middle">Waistcoat &amp; watch</text>
      <!-- Deep Rabbit Hole -->
      <ellipse cx="430" cy="85" rx="55" ry="35" fill="#3b0764" stroke="#a855f7" stroke-width="2"/>
      <text x="430" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#f3e8ff" text-anchor="middle">RABBIT HOLE</text>
      <text x="430" y="98" font-family="system-ui, sans-serif" font-size="8" fill="#d8b4fe" text-anchor="middle">Tumbling down deep</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7e22ce" text-anchor="middle">"Curiosity opened the doorway into the realm of pure wonder."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'Why?'",
        q: "What kind of person is the little boy in the poem? Name three scientific questions that puzzle his inquisitive mind.",
        ans: "The little boy is deeply <strong>curious, observant, and inquisitive</strong>, always wondering about the natural mechanisms of the world.<br><br>Three questions that puzzle him are:<br>1. Why does wood float and swim on water, while marble and lead sink like stones?<br>2. Why does the sun sink behind the hills in the evening?<br>3. Why does the wind blow, and why do clouds fly across the sky?",
        marks: 3,
        rubric: [
          { key: "Characterizes boy as curious and observant", marks: "1.0 M" },
          { key: "Three specific scientific questions listed", marks: "2.0 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Alice in Wonderland'",
        q: "What was so extraordinary and peculiar about the White Rabbit that made Alice jump to her feet and follow it?",
        ans: "The White Rabbit was extraordinary because:<br>1. It had striking pink eyes and could speak English aloud, fretting: <em>'Oh dear! I shall be too late!'</em><br>2. It was dressed in an elegant waistcoat and pulled out a pocket watch from its waistcoat pocket to check the time, a sight Alice had never seen a rabbit do before.",
        marks: 3,
        rubric: [
          { key: "Mentions talking ability and pink eyes", marks: "1.5 M" },
          { key: "Details wearing a waistcoat and checking a pocket watch", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Alice in Wonderland'",
        q: "Describe Alice's fall down the rabbit hole. What did she wonder about as she drifted downward?",
        ans: "Alice tumbled into a deep, vertical well whose walls were lined with cupboards, bookshelves, and maps. She fell so slowly that she had plenty of time to look around.<br><br>As she floated downward, she wondered how many miles she had fallen, whether she would fall right through the center of the earth, and whether people on the other side walked with their heads hanging downward.",
        marks: 3,
        rubric: [
          { key: "Describes slow fall past cupboards and maps", marks: "1.5 M" },
          { key: "Details thoughts of earth's center and antipodean people", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar & Word Building • Question Words",
        q: "Fill in the blanks with the correct question words (Why, What, Where, Who, When): (a) ___ is the White Rabbit hurrying? (b) ___ is the name of your English teacher? (c) ___ does the school bell ring for recess? (d) ___ placed the books on the shelf?",
        ans: "<strong>(a)</strong> <strong>Why</strong> is the White Rabbit hurrying?<br><strong>(b)</strong> <strong>What</strong> is the name of your English teacher?<br><strong>(c)</strong> <strong>When</strong> does the school bell ring for recess?<br><strong>(d)</strong> <strong>Who</strong> placed the books on the shelf?",
        marks: 2,
        rubric: [
          { key: "Four correct question words selected (0.5 M each)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Encouraging Scientific Inquisitiveness in Children",
      text: "Albert Einstein famously declared: 'I have no special talents. I am only passionately curious.'",
      question: "How does the poem 'Why?' showcase the foundation of scientific discovery? Why should parents and teachers never discourage children from asking endless questions?",
      answer: "<strong>Foundation of Science:</strong> Every scientific breakthrough—from Archimedes discovering buoyancy to Newton discovering gravity—began with asking simple 'Why' questions: Why does wood float? Why do apples fall downward?<br><br><strong>Why Never Discourage:</strong> When children's inquiries are answered patiently, their neural curiosity thrives, fostering analytical thinking and problem-solving. Dismissing questions stifles creative exploration and turns learning into mechanical memorization.",
      rubric: "1 Mark for connecting poem's queries to genuine scientific inquiry; 1 Mark for cognitive benefits of encouraging children's curiosity."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 5: DON'T BE AFRAID OF THE DARK & HELEN KELLER
  // -------------------------------------------------------------------------
  {
    id: "mg_u5",
    num: 5,
    unit: "Unit 5: Courage & Triumphs",
    title: "Don't be Afraid of the Dark & Helen Keller",
    subtitle: "Poem by Ruskin Bond on Overcoming Fear of Night & Historic Story of Helen Keller and Anne Sullivan",
    concepts: [
      "Poem 'Don't be Afraid of the Dark': The earth must rest after the busy day; darkness brings twinkling stars that shine forever.",
      "Story of Helen Keller: A severe babyhood fever leaves her deaf and blind.",
      "Miss Anne Sullivan: A compassionate teacher who spells words into Helen's hand using the manual alphabet.",
      "The water breakthrough: Water flowing over Helen's hand illuminates the truth that words are names for living things.",
      "Values of perseverance, patience, inclusion, and the triumph of the human spirit."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0f172a" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#93c5fd" text-anchor="middle">Helen Keller — From Darkness to Language &amp; Light</text>
      <!-- Helen in Darkness -->
      <circle cx="90" cy="80" r="28" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <text x="90" y="85" font-size="18" text-anchor="middle">👧🌑</text>
      <text x="90" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#94a3b8" text-anchor="middle">Blind &amp; Deaf</text>
      <text x="90" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#64748b" text-anchor="middle">Trapped in dark</text>
      <!-- Miss Sullivan -->
      <circle cx="230" cy="80" r="28" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <text x="230" y="85" font-size="18" text-anchor="middle">👩‍🏫🤝</text>
      <text x="230" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#38bdf8" text-anchor="middle">Miss Sullivan</text>
      <text x="230" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#7dd3fc" text-anchor="middle">Spelling on hand</text>
      <!-- Water Pump Breakthrough -->
      <circle cx="380" cy="80" r="34" fill="#0284c7" stroke="#38bdf8" stroke-width="2.5"/>
      <text x="380" y="85" font-size="20" text-anchor="middle">💧</text>
      <text x="380" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle">W-A-T-E-R !</text>
      <text x="380" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#bae6fd" text-anchor="middle">The Breakthrough</text>
      <!-- Literacy -->
      <circle cx="490" cy="80" r="28" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
      <text x="490" y="85" font-size="18" text-anchor="middle">📖✨</text>
      <text x="490" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">World Unlocked</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#38bdf8" text-anchor="middle">"Words opened Helen's soul to knowledge, love, and world connection."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'Don't be Afraid of the Dark'",
        q: "What advice does Ruskin Bond give to children about the night? Why must the earth become dark?",
        ans: "Ruskin Bond advises children never to be afraid of the dark night, because night is simply nature's way of allowing the tired earth to rest after the bright sun has labored all day.<br><br>He reminds us that while the harsh sun must set, the gentle stars twinkle and shine forever and ever, making night a peaceful time to rest our minds and think about our friends.",
        marks: 3,
        rubric: [
          { key: "Cites earth resting after daily labor", marks: "1.5 M" },
          { key: "Mentions comforting eternal starlight and mental peace", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Helen Keller'",
        q: "What happened to Helen Keller when she was an infant? How did her personality change before Miss Sullivan arrived?",
        ans: "As a baby, Helen suffered from a high fever that left her permanently deaf and blind.<br><br>Unable to see or hear the world, she became angry, frustrated, and unruly. She threw tantrums, refused to wash or comb her hair, and locked her mother in rooms because she had no language to express her thoughts and feelings.",
        marks: 3,
        rubric: [
          { key: "Describes severe illness causing loss of sight and hearing", marks: "1.5 M" },
          { key: "Explains wild tantrums caused by lack of communication", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Helen Keller'",
        q: "How did Miss Anne Sullivan teach Helen her very first word? Describe the magical moment at the water pump.",
        ans: "Miss Sullivan took Helen out to the garden water pump and pumped cool water over one of Helen's open hands while quickly finger-spelling <strong>W-A-T-E-R</strong> into Helen's other hand.<br><br>Instantly, a spark of understanding lit up Helen's mind. She realized that <em>W-A-T-E-R</em> was the name of the wonderful, cool, living liquid splashing over her skin. That moment unlocked the world of language for Helen.",
        marks: 3,
        rubric: [
          { key: "Explains water flowing over one hand while spelling on the other", marks: "1.5 M" },
          { key: "Captures revelation that words represent real things", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar & Vocabulary • Adjectives",
        q: "Identify the descriptive adjectives in: 'The kind teacher held Helen's little hand and spelled words with gentle patience.'",
        ans: "<strong>1. kind:</strong> Describing the teacher's compassionate nature.<br><strong>2. little:</strong> Describing Helen's hand size.<br><strong>3. gentle:</strong> Describing the quality of her patience.",
        marks: 2,
        rubric: [
          { key: "Identifies 'kind', 'little', and 'gentle' accurately", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Teacher Mentorship and Special Education",
      text: "Before Anne Sullivan arrived, Helen's relatives thought she should be placed in an asylum because she was unmanageable. Miss Sullivan believed that Helen's wildness was merely locked-up intelligence seeking an outlet.",
      question: "What qualities made Anne Sullivan an extraordinary educator? What does this teach us about supporting neurodiverse or disabled children in inclusive classrooms?",
      answer: "<strong>Qualities of Anne Sullivan:</strong> She possessed extraordinary patience, empathy, creative pedagogical insight, and unwavering belief in her student's potential when everyone else gave up.<br><br><strong>Lesson for Inclusive Classrooms:</strong> Frustration and anger in children with disabilities are often symptoms of communication barriers, not malice. When educators provide accessible tools (tactile signs, Braille, speech aids), every child can flourish intellectually and emotionally.",
      rubric: "1 Mark for identifying Sullivan's patience and belief; 1 Mark for insights on inclusive education and accessibility."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 6: HIAWATHA & THE SCHOLAR'S MOTHER TONGUE
  // -------------------------------------------------------------------------
  {
    id: "mg_u6",
    num: 6,
    unit: "Unit 6: Lore & Wit",
    title: "Hiawatha & The Scholar's Mother Tongue",
    subtitle: "Poem by H.W. Longfellow on Nature Lore & Mughal Court Tale of Birbal Discovering Mother Tongue",
    concepts: [
      "Poem 'Hiawatha': The young Native American boy raised by grandmother Nokomis who learned the language of all birds and animals.",
      "Calling birds 'Hiawatha's Chickens' and beasts 'Hiawatha's Brothers'.",
      "Story 'The Scholar's Mother Tongue': A learned pundit challenges Akbar's courtiers to identify his mother tongue.",
      "Birbal's nocturnal trick: Whispering and tickling the pundit's ear with a dry grass straw during deep sleep.",
      "The psychological truth: In moments of sudden fright or emergency, a person always speaks their true mother tongue."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Birbal's Test — The Scholar's Mother Tongue</text>
      <!-- Court Challenge -->
      <circle cx="90" cy="80" r="28" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="90" y="85" font-size="18" text-anchor="middle">👳‍♂️📜</text>
      <text x="90" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#78350f" text-anchor="middle">Pundit's Challenge</text>
      <text x="90" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Speaks many languages</text>
      <!-- Sleeping Pundit -->
      <circle cx="230" cy="80" r="28" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="230" y="85" font-size="18" text-anchor="middle">😴</text>
      <text x="230" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#78350f" text-anchor="middle">Deep Sleep</text>
      <text x="230" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Guards down</text>
      <!-- Birbal with Straw -->
      <circle cx="360" cy="80" r="30" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="360" y="85" font-size="20" text-anchor="middle">🌾👂</text>
      <text x="360" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#78350f" text-anchor="middle">Birbal's Tickle</text>
      <text x="360" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#b45309" text-anchor="middle">Tickles ear with straw</text>
      <!-- Outburst -->
      <circle cx="485" cy="80" r="32" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="485" y="85" font-size="16" text-anchor="middle">🗣️ TELUGU!</text>
      <text x="485" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">Truth Revealed</text>
      <text x="485" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Sudden distress reflex</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#78350f" text-anchor="middle">"In times of sudden crisis, nature instinctively speaks its mother tongue."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'Hiawatha'",
        q: "Who was Hiawatha, and what wonderful secrets did he learn from the birds and animals of the forest?",
        ans: "Hiawatha was a young Native American boy who lived with his wise grandmother Nokomis in a forest wigwam.<br><br>He learned all the intimate secrets of the wilderness:<br>1. How the birds built their nests in spring and where they hid themselves in winter.<br>2. How the beavers built their river lodges, how squirrels hid their acorns, and how the reindeer ran so swiftly.",
        marks: 3,
        rubric: [
          { key: "Identifies Hiawatha and grandmother Nokomis", marks: "1.0 M" },
          { key: "Details secrets of birds' nests, beaver lodges, and squirrels' acorns", marks: "2.0 M" }
        ]
      },
      {
        category: "Reading is Fun • 'The Scholar's Mother Tongue'",
        q: "What challenge did the learned Pundit present to Emperor Akbar's royal court? Why was it difficult to guess his mother tongue?",
        ans: "The Pundit challenged Emperor Akbar and his courtiers to identify his real mother tongue within one day.<br><br>It was extraordinarily difficult because the scholar was a master linguist who spoke multiple languages—including Sanskrit, Persian, Arabic, and Hindi—with such flawless fluency and native accent that no one could tell which language was his original mother tongue.",
        marks: 3,
        rubric: [
          { key: "States 24-hour court challenge to identify mother tongue", marks: "1.5 M" },
          { key: "Explains scholar's flawless multilingual fluency", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'The Scholar's Mother Tongue'",
        q: "How did Birbal discover the scholar's mother tongue? What was the scholar's actual mother tongue?",
        ans: "At dead of night when the scholar was sound asleep, Birbal quietly entered his bedchamber and gently tickled the scholar's ear with a dry grass straw. Half-awake and startled, the scholar cried out sudden curses and shouts in <strong>Telugu</strong>.<br><br>Next morning, Birbal announced to Emperor Akbar that the scholar's mother tongue was Telugu, which the astonished scholar humbly admitted was true.",
        marks: 3,
        rubric: [
          { key: "Describes midnight straw tickle provoking subconscious reaction", marks: "1.5 M" },
          { key: "Identifies Telugu as the scholar's true mother tongue", marks: "1.5 M" }
        ]
      },
      {
        category: "Word Building • Adding '-ly' Adverbs",
        q: "Add '-ly' to convert the following adjectives into adverbs and write one sentence: (a) Fluent, (b) Quiet, (c) Sudden.",
        ans: "<strong>(a) Fluent:</strong> <em>Fluently</em>.<br><strong>(b) Quiet:</strong> <em>Quietly</em>.<br><strong>(c) Sudden:</strong> <em>Suddenly</em>.<br><br><strong>Sentence:</strong> The clever Birbal walked <em>quietly</em> into the dark room without making any noise.",
        marks: 2,
        rubric: [
          { key: "Three correct adverbs formed", marks: "1.5 M" },
          { key: "One grammatically accurate sentence", marks: "0.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Psycholinguistics of the Mother Tongue",
      text: "Modern psychologists confirm that our first acquired native language (mother tongue) is deeply encoded in the subconscious limbic system of the brain, making it our automatic involuntary response during fright or pain.",
      question: "How did Birbal leverage this subconscious psychological reflex? Why are mother tongues so vital to cultural identity?",
      answer: "<strong>Birbal's Insight:</strong> Birbal understood that conscious intellect and learned accents drop their guard when startled out of deep sleep. An involuntary reflexive shout will always emerge from the earliest childhood linguistic memory.<br><br><strong>Vital to Identity:</strong> The mother tongue is not just words; it carries our emotional intimacy, childhood folklore, cultural heritage, and maternal bonding. Preserving native languages safeguards community identity and linguistic diversity.",
      rubric: "1 Mark for subconscious reflex mechanism; 1 Mark for cultural and emotional preservation significance."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 7: A WATERING RHYME & THE GIVING TREE
  // -------------------------------------------------------------------------
  {
    id: "mg_u7",
    num: 7,
    unit: "Unit 7: Green Wisdom & Altruism",
    title: "A Watering Rhyme & The Giving Tree",
    subtitle: "Poem on Plant Biology by P.A. Ropes & Shel Silverstein's Classic Tale on Sacrificial Love of Nature",
    concepts: [
      "Poem 'A Watering Rhyme': Proper timing for watering plants (early morning or evening, never midday).",
      "Botany: Watering the roots where plants keep their 'mouths' to nourish leaves and stems.",
      "Story 'The Giving Tree': The lifelong bond between an Apple Tree and a young boy.",
      "Stages of sacrifice: Giving apples for money, branches for a house, trunk for a boat, and finally a stump for old-age rest.",
      "Environmental ethics: Selfless generosity of Mother Nature versus human consumerism."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">The Giving Tree — Lifelong Sacrifices of Nature</text>
      <!-- Stage 1 -->
      <circle cx="80" cy="80" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="80" y="85" font-size="18" text-anchor="middle">🍎</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">1. Apples</text>
      <text x="80" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#16a34a" text-anchor="middle">For boy to sell</text>
      <!-- Stage 2 -->
      <circle cx="215" cy="80" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="215" y="85" font-size="18" text-anchor="middle">🌿</text>
      <text x="215" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">2. Branches</text>
      <text x="215" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#16a34a" text-anchor="middle">To build a house</text>
      <!-- Stage 3 -->
      <circle cx="350" cy="80" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="350" y="85" font-size="18" text-anchor="middle">⛵</text>
      <text x="350" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">3. Trunk</text>
      <text x="350" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#16a34a" text-anchor="middle">To sail away</text>
      <!-- Stage 4 -->
      <circle cx="485" cy="80" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="485" y="85" font-size="20" text-anchor="middle">🪑</text>
      <text x="485" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">4. Old Stump</text>
      <text x="485" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#b45309" text-anchor="middle">A quiet seat to rest</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">"The tree was happy to give everything it had to bring comfort to the boy."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'A Watering Rhyme'",
        q: "What is the best time to water plants according to the poem? Which time should be strictly avoided and why?",
        ans: "<strong>Best Times:</strong> The best times to water plants are early in the <strong>morning</strong> or late in the <strong>evening</strong> when the air is cool.<br><br><strong>Time to Avoid:</strong> Watering at <strong>noonday</strong> when the sun is blazing hot must be strictly avoided. Midday watering causes water to evaporate rapidly before roots can absorb it, and hot water drops on leaves can scorch and kill the delicate foliage.",
        marks: 3,
        rubric: [
          { key: "Names early morning and evening as ideal watering times", marks: "1.5 M" },
          { key: "Explains evaporation and scorching risks of midday watering", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'The Giving Tree'",
        q: "How did the boy spend his childhood with the tree? What gifts did the tree give the boy as he grew from youth to middle age?",
        ans: "<strong>Childhood Play:</strong> As a child, the boy loved the tree dearly. He made crowns from her leaves, climbed her trunk, swung from her branches, ate her sweet apples, and slept under her cool shade.<br><br><strong>Gifts in Later Years:</strong><br>1. <em>Youth:</em> Gave her apples for the boy to sell in the market to earn money.<br>2. <em>Adulthood:</em> Offered her thick branches so the young man could build a home for his family.<br>3. <em>Middle Age:</em> Allowed him to cut down her massive trunk to hollow out a sailing boat.",
        marks: 3,
        rubric: [
          { key: "Describes childhood games and sweet connection", marks: "1.5 M" },
          { key: "Chronicles sequence of apples, branches, and trunk", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'The Giving Tree'",
        q: "What remained of the tree in the end, and how did she still bring comfort to the old, weary boy?",
        ans: "In the end, nothing remained of the magnificent tree except an old, weathered, mossy <strong>stump</strong> close to the ground.<br><br>When the boy returned as a frail, bent old man with no teeth to eat apples and no strength to swing or sail, the tree joyfully invited him: <em>'Come, old boy, sit down and rest.'</em> The old man sat on the stump, and the tree was peaceful and truly happy.",
        marks: 3,
        rubric: [
          { key: "Identifies remaining weathered stump", marks: "1.5 M" },
          { key: "Describes tree providing peaceful seat to comfort the weary old man", marks: "1.5 M" }
        ]
      },
      {
        category: "Let us Think • Environmental Reflection",
        q: "Why is Mother Nature compared to 'The Giving Tree'? What should humanity do in return for trees?",
        ans: "Mother Nature is like the Giving Tree because trees selflessly give us oxygen, sweet fruits, timber, shade, and rain without demanding anything in return.<br><br>Instead of greedily cutting down forests, humans should express gratitude by planting new saplings, nurturing existing trees, preventing deforestation, and protecting green wildlife reserves.",
        marks: 3,
        rubric: [
          { key: "Highlights unconditional ecological benefits of trees", marks: "1.5 M" },
          { key: "Advocates afforestation, conservation, and reciprocal gratitude", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Sustainable Forestry and Tree Conservation",
      text: "The Chipko Movement in Uttarakhand witnessed village women hugging ash and pine trees to prevent commercial loggers from felling them, demonstrating that trees are living family members that sustain Himalayan hill life.",
      question: "How does the spirit of the Chipko Movement contrast with the boy's relentless taking in 'The Giving Tree'? What lesson must modern industry learn?",
      answer: "<strong>Contrast:</strong> The boy in the story represents one-sided extraction, taking wood and fruit until the living tree is reduced to a stump. In contrast, the Chipko women protected trees at the risk of their lives, recognizing that living trees preserve water springs, prevent landslides, and sustain community life.<br><br><strong>Industry Lesson:</strong> Human civilization cannot treat forests as infinite, disposable commodities. Sustainable development requires circular conservation—replanting two saplings for every tree responsibly harvested.",
      rubric: "1 Mark for contrasting extractivism with ecological guardianship; 1 Mark for sustainable circular forestry principles."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 8: BOOKS & GOING TO BUY A BOOK
  // -------------------------------------------------------------------------
  {
    id: "mg_u8",
    num: 8,
    unit: "Unit 8: Literacy & Imagination",
    title: "Books & Going to Buy a Book",
    subtitle: "Rhyme on Library Treasures & Story of a Brother and Sister Choosing Books at a Bookshop",
    concepts: [
      "Poem 'Books': Library doors opening wide to reveal tall skinny books, fat books that stand by themselves, and picture books.",
      "Story 'Going to Buy a Book': Grandfather gifts money to a young girl and her brother to buy books.",
      "The choice: Big bookshop vs. small neighborhood bookshop; right now vs. later.",
      "Browsing and selecting: Finding quiet corners, flipping through colorful illustrations, and savoring stories.",
      "Grammar: Conjunctions (and, but, or) and reading comprehension."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Going to Buy a Book — The Joy of Reading</text>
      <!-- Grandfather's Gift -->
      <circle cx="90" cy="80" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="90" y="85" font-size="18" text-anchor="middle">👴💵</text>
      <text x="90" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Grandfather's Gift</text>
      <text x="90" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#2563eb" text-anchor="middle">Money to buy books</text>
      <!-- Bookshop -->
      <circle cx="230" cy="80" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="230" y="85" font-size="18" text-anchor="middle">🏪📚</text>
      <text x="230" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Small Bookshop</text>
      <text x="230" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#2563eb" text-anchor="middle">Friendly bookseller</text>
      <!-- Girl's Picture Book -->
      <rect x="330" y="55" width="95" height="65" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" rx="6"/>
      <text x="377" y="75" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">Girl's Choice 📖</text>
      <text x="377" y="93" font-family="system-ui, sans-serif" font-size="8" fill="#a16207" text-anchor="middle">Fat Picture Book</text>
      <text x="377" y="106" font-family="system-ui, sans-serif" font-size="8" fill="#a16207" text-anchor="middle">Rich illustrations</text>
      <!-- Boy's Story Book -->
      <rect x="445" y="55" width="95" height="65" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
      <text x="492" y="75" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Boy's Choice 📚</text>
      <text x="492" y="93" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Big Story Book</text>
      <text x="492" y="106" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Many adventures</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">"Books open doors to infinite lands of imagination, courage, and wisdom."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'Books'",
        q: "What types of books did the child see when the library door opened wide? What made the picture book so delightful?",
        ans: "Inside the library, the child saw:<br>1. <strong>Tall, skinny books</strong> standing upright high on the top shelves.<br>2. <strong>Little fat books</strong> that were broad enough to stand up all by themselves without falling.<br><br>The picture book was especially delightful because the pictures told the entire wonderful story by themselves without needing many words.",
        marks: 3,
        rubric: [
          { key: "Describes tall skinny books and fat standalone books", marks: "1.5 M" },
          { key: "Explains picture book storytelling appeal", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Going to Buy a Book'",
        q: "Why were the children happy when Grandfather gave them money? What decisions did they debate before visiting the shop?",
        ans: "The children were ecstatic because they loved reading books more than anything else.<br><br>Before setting off, they debated several exciting choices:<br>1. Should they go right now or wait until tomorrow?<br>2. Should they go to the huge commercial bookstore downtown or their cozy neighborhood bookshop?<br>3. Should they go by themselves or ask someone to accompany them?",
        marks: 3,
        rubric: [
          { key: "Highlights love for reading books", marks: "1.0 M" },
          { key: "Details debates: when to go, big vs small shop, alone vs accompanied", marks: "2.0 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Going to Buy a Book'",
        q: "Which book did the sister choose, and which book did the brother pick? Where did they read their new books?",
        ans: "<strong>Sister's Choice:</strong> A fat, colorful book packed with enchanting picture illustrations.<br><strong>Brother's Choice:</strong> A big book containing dozens of thrilling adventure stories.<br><br><strong>Reading Spot:</strong> They rushed home, climbed into their grandfather's big, soft bed, nestled happily beside him, and read their beloved books together for hours.",
        marks: 3,
        rubric: [
          { key: "Identifies picture book for girl and adventure book for boy", marks: "1.5 M" },
          { key: "Describes reading beside grandfather on his big bed", marks: "1.5 M" }
        ]
      },
      {
        category: "Grammar • Conjunctions (and, but, or)",
        q: "Join the sentences using 'and', 'but', or 'or': (a) I wanted to buy the picture book. It was very expensive. (b) We can go to the big shop. We can go to the small shop.",
        ans: "<strong>(a)</strong> I wanted to buy the picture book, <strong>but</strong> it was very expensive.<br><strong>(b)</strong> We can go to the big shop, <strong>or</strong> we can go to the small shop.",
        marks: 2,
        rubric: [
          { key: "Correct usage of 'but' for contrast", marks: "1.0 M" },
          { key: "Correct usage of 'or' for choice", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "School Library Reading Culture",
      text: "A 4th-grade student told his teacher that he finds reading books boring and prefers 30-second video clips on video sharing apps.",
      question: "How does the habit of browsing and reading physical books in a library build sustained attention span and deep empathy compared to short video clips?",
      answer: "<strong>Cognitive Superiority of Books:</strong> Short video clips deliver hyper-stimulating dopamine spikes every 30 seconds, fragmenting attention spans and creating mental fatigue.<br><br><strong>Empathy & Deep Focus:</strong> Reading physical books requires sustained imaginative construction. The reader must visualize characters' faces, hear their tone of voice, and live inside another human being's shoes for days, building deep emotional empathy, cognitive patience, and sophisticated vocabulary.",
      rubric: "1 Mark for contrast with attention fragmentation of micro-videos; 1 Mark for imaginative empathy and deep focus cultivated by books."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 9: THE NAUGHTY BOY & PINOCCHIO
  // -------------------------------------------------------------------------
  {
    id: "mg_u9",
    num: 9,
    unit: "Unit 9: Whimsy & Conscience",
    title: "The Naughty Boy & Pinocchio",
    subtitle: "John Keats' Whimsical Verse & Carlo Collodi's Classic Puppet Tale of Honesty and Integrity",
    concepts: [
      "Poem 'The Naughty Boy': An English boy runs away to Scotland only to discover ground is as hard, cherries as red, and lead as heavy as in England.",
      "Story 'Pinocchio': Old carpenter Gepetto carves a talking wooden puppet and names him Pinocchio.",
      "The mischievous puppet: Pulling wigs, laughing impudently, and running away from school.",
      "The magical consequence: Every time Pinocchio tells a lie, his wooden nose grows longer, longer, and longer.",
      "Moral: Deception cannot be concealed; truthfulness brings true humanity and freedom."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Pinocchio — The Consequence of Telling Lies</text>
      <!-- Gepetto Carving -->
      <circle cx="90" cy="80" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="90" y="85" font-size="18" text-anchor="middle">🪵🪚</text>
      <text x="90" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#713f12" text-anchor="middle">Gepetto's Puppet</text>
      <text x="90" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#a16207" text-anchor="middle">Carved from oak</text>
      <!-- Normal Pinocchio -->
      <circle cx="230" cy="80" r="28" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
      <text x="230" y="85" font-size="18" text-anchor="middle">🤥</text>
      <text x="230" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Tells a Lie</text>
      <text x="230" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#c2410c" text-anchor="middle">Makes excuses</text>
      <!-- Growing Nose -->
      <rect x="340" y="70" width="140" height="20" fill="#f97316" stroke="#c2410c" stroke-width="2" rx="4"/>
      <text x="410" y="84" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#ffffff" text-anchor="middle">NOSE GROWS LONGER!</text>
      <text x="410" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Visible Dishonesty</text>
      <text x="410" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#ea580c" text-anchor="middle">Lies cannot be hidden</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#854d0e" text-anchor="middle">"A lie grows and grows until it is as plain as the nose on your face."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'The Naughty Boy'",
        q: "Why did the naughty boy run away to Scotland? What surprising discovery did he make when he arrived there?",
        ans: "The naughty boy ran away to Scotland because he was restless and foolishly imagined that Scotland would be an exotic, magical place totally different from England.<br><br>He was astonished to discover that:<br>1. The Scottish ground was just as hard as English ground.<br>2. A yard was just as long, a song was just as merry, cherries were just as red, and lead was just as heavy.<br>Human nature and the physical world were identical everywhere.",
        marks: 3,
        rubric: [
          { key: "Explains running away to Scotland out of restless curiosity", marks: "1.5 M" },
          { key: "Lists discoveries: hard ground, long yard, red cherries, heavy lead", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Pinocchio'",
        q: "How did Gepetto create Pinocchio? What mischievous tricks did the puppet play as soon as its features were carved?",
        ans: "Gepetto carved Pinocchio from an enchanted piece of talking firewood. As soon as he finished carving the eyes, they began rolling at him. The moment he carved the mouth, it laughed mockingly and stuck out its tongue.<br><br>Before Gepetto could even finish carving the legs, Pinocchio snatched the carpenter's brown wig right off his head, jumped down to the floor, and ran out the front door into the street.",
        marks: 3,
        rubric: [
          { key: "Describes carving from enchanted talking wood", marks: "1.5 M" },
          { key: "Details rolling eyes, mocking laughter, and snatching Gepetto's wig", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'Pinocchio'",
        q: "What bizarre physical phenomenon happened to Pinocchio every time he told a falsehood or made a false excuse?",
        ans: "Every single time Pinocchio spoke a lie, broke a promise, or made a false excuse to avoid school, his wooden nose immediately began growing longer, longer, and longer.<br><br>It grew so enormous that he could not turn his head inside the room without hitting walls, until he was forced to confess the honest truth to shrink it back.",
        marks: 3,
        rubric: [
          { key: "Identifies nose growing visibly longer with every lie", marks: "1.5 M" },
          { key: "Explains that only speaking honest truth shrank it back", marks: "1.5 M" }
        ]
      },
      {
        category: "Word Building • Word Families",
        q: "Name three things made of wood from your home or classroom: (a) ___, (b) ___, (c) ___. What tool does a carpenter use to smoothen wood?",
        ans: "Three wooden objects: (a) <strong>Study Table</strong>, (b) <strong>Door Frame</strong>, (c) <strong>Cricket Bat</strong>.<br><br>A carpenter uses a <strong>plane</strong> (or sandpaper) to smoothen rough wood surfaces.",
        marks: 2,
        rubric: [
          { key: "Three wooden objects correctly named", marks: "1.5 M" },
          { key: "Identifies carpenter's plane/sandpaper", marks: "0.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Psychological Metaphor of Pinocchio's Nose",
      text: "Modern behavioral scientists observe that when people tell deliberate lies, micro-expressions, increased blink rates, vocal pitch changes, and autonomic nervous system stress reactions involuntarily reveal the deceit.",
      question: "Why is Pinocchio's growing nose one of the greatest moral metaphors in children's literature? How does one lie inevitably lead to another?",
      answer: "<strong>The Metaphor:</strong> Pinocchio's nose externalizes an internal psychological truth: deceit cannot remain secret. Even if invisible physically, lying distorts a person's dignity and character visibly to those around them.<br><br><strong>The Trap of Lies:</strong> To protect the first lie, a person must fabricate three more lies. Soon, the web of deception becomes so cumbersome and absurd (just like an enormous wooden nose) that confession and honest apology are the only way back to freedom.",
      rubric: "1 Mark for explaining externalization of guilt; 1 Mark for compound snowball effect of continuous deceit."
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 10: THE DONKEY & THE MILKMAN'S COW
  // -------------------------------------------------------------------------
  {
    id: "mg_u10",
    num: 10,
    unit: "Unit 10: Gentleness & Persuasion",
    title: "The Donkey & The Milkman's Cow",
    subtitle: "Humorous Rhyme on Kindness to Animals & Classic Story of Gentleness Succeeding where Brute Force Fails",
    concepts: [
      "Poem 'The Donkey': If I had a donkey that wouldn't go, would I wallop him? No, no, no! I'd feed him hay and corn.",
      "Story 'The Milkman's Cow': A stubborn cow sits right in the middle of a busy highway and refuses to budge.",
      "Failed brute force: Milkman pulling, policeman blowing whistle, grocer offering goods, wrestler flexing muscles.",
      "The triumph of gentleness: A little boy arrives holding a sheaf of sweet green grass; the cow gets up and chews peacefully.",
      "Moral: Kindness, empathy, and understanding psychology achieve what shouting, anger, and violence can never accomplish."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">The Milkman's Cow — Gentleness Overcomes Brute Force</text>
      <!-- The Stubborn Cow -->
      <circle cx="290" cy="85" r="32" fill="#fed7aa" stroke="#ea580c" stroke-width="2.5"/>
      <text x="290" y="85" font-size="20" text-anchor="middle">🐄</text>
      <text x="290" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Stubborn Cow</text>
      <text x="290" y="138" font-family="system-ui, sans-serif" font-size="8" fill="#c2410c" text-anchor="middle">Refuses to move</text>
      <!-- Brute Force (Left) -->
      <rect x="50" y="55" width="160" height="65" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" rx="8"/>
      <text x="130" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#991b1b" text-anchor="middle">❌ BRUTE FORCE FAILED</text>
      <text x="130" y="92" font-family="system-ui, sans-serif" font-size="8" fill="#b91c1c" text-anchor="middle">Milkman tugged &amp; pulled</text>
      <text x="130" y="104" font-family="system-ui, sans-serif" font-size="8" fill="#b91c1c" text-anchor="middle">Policeman twirled whistle</text>
      <text x="130" y="115" font-family="system-ui, sans-serif" font-size="8" fill="#b91c1c" text-anchor="middle">Wrestler flexed muscles</text>
      <!-- Gentleness (Right) -->
      <rect x="370" y="55" width="160" height="65" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="8"/>
      <text x="450" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">✅ GENTLENESS WON!</text>
      <text x="450" y="93" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Little boy with sweet green grass</text>
      <text x="450" y="105" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Led cow calmly to the side</text>
      <text x="450" y="116" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#166534" text-anchor="middle">Patience &amp; love triumph</text>
      <text x="290" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">"Kind words and understanding achieve what force and shouting never can."</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem 'The Donkey'",
        q: "What does the poet say he would do if he had a donkey that refused to go? What would he NOT do?",
        ans: "<strong>What He Would NOT Do:</strong> The poet declares that he would never 'wallop' (hit, beat, or whip) the donkey, because cruelty to animals is unkind and wrong.<br><br><strong>What He Would Do:</strong> Instead, he would feed the donkey a bundle of sweet green hay and juicy ears of corn, treating the animal with love, patience, and nourishment until it happily trotted forward.",
        marks: 3,
        rubric: [
          { key: "Rejects walloping/beating the donkey", marks: "1.5 M" },
          { key: "Advocates feeding hay and corn with kindness", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'The Milkman's Cow'",
        q: "Who all tried to make the milkman's cow move from the road, and what methods did they use?",
        ans: "1. <strong>The Milkman:</strong> Tugged, pleaded, and pulled hard on the lead rope.<br>2. <strong>The Policeman:</strong> Twirled his baton, puffed his chest, and blew his loud brass whistle.<br>3. <strong>The Grocer:</strong> Rattled bags of potatoes, peas, and shiny cans.<br>4. <strong>The Wrestler:</strong> Flexed his enormous biceps and tried to haul the cow by brute physical force.<br>All four grown adults failed completely.",
        marks: 3,
        rubric: [
          { key: "Lists milkman, policeman, grocer, and wrestler", marks: "1.5 M" },
          { key: "Describes brute force and noisy methods used by each", marks: "1.5 M" }
        ]
      },
      {
        category: "Reading is Fun • 'The Milkman's Cow'",
        q: "How did the little boy succeed in moving the cow where four strong grown men had failed? What is the moral lesson?",
        ans: "<strong>The Little Boy's Method:</strong> The little boy did not shout, pull, or use force. Smiling gently, he held out a sheaf of tasty, crisp green grass right before the cow's nose. Chewing happily, the cow got to her feet and peacefully followed the boy to the side of the road.<br><br><strong>Moral Lesson:</strong> Gentleness, patience, and understanding the needs of others achieve what shouting, anger, and muscle power can never accomplish.",
        marks: 3,
        rubric: [
          { key: "Details little boy offering bundle of tasty green grass", marks: "1.5 M" },
          { key: "States moral: gentleness and empathy surpass anger and force", marks: "1.5 M" }
        ]
      },
      {
        category: "Word Building • Sensory Action Verbs",
        q: "Match the character with the action verb from the story: (a) Policeman, (b) Wrestler, (c) Cow, (d) Boy. [Options: Chewed, Flexed, Whistled, Smiled].",
        ans: "<strong>(a) Policeman:</strong> <em>Whistled</em>.<br><strong>(b) Wrestler:</strong> <em>Flexed</em>.<br><strong>(c) Cow:</strong> <em>Chewed</em>.<br><strong>(d) Boy:</strong> <em>Smiled</em>.",
        marks: 2,
        rubric: [
          { key: "Four correct character-verb pairings (0.5 M each)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Conflict Resolution & Non-Violent Communication",
      text: "Two 4th-grade students began shouting, pulling, and fighting over who gets to play with the basketball first during the sports hour.",
      question: "How does 'The Milkman's Cow' offer a practical lesson in conflict resolution? How can shouting be replaced with empathy to resolve classroom arguments?",
      answer: "<strong>Lesson from the Story:</strong> Shouting and aggressive pulling make people (and animals) dig their heels in more stubbornly, causing resistance and deadlock. Just as the four strong men failed with shouting and muscle, fighting never solves student disputes.<br><br><strong>Empathetic Resolution:</strong> The little boy showed that offering a cooperative solution (sharing or taking turns) satisfies everyone's needs. Students should take turns (e.g. 15 minutes each) or join together in a unified team game.",
      rubric: "1 Mark for identifying failure of brute force in human conflicts; 1 Mark for practical win-win collaborative resolution."
    }
  }
];

module.exports = { marigoldUnits };
