// Official NCERT Class 5 English (Marigold) Complete Dataset - Units 1 to 10
// Aligned with Classic CBSE Curriculum (Sessions 2024-25, 2025-26, 2026-27)

const marigoldUnits = [
  // -------------------------------------------------------------------------
  // UNIT 1: ICE-CREAM MAN & WONDERFUL WASTE!
  // -------------------------------------------------------------------------
  {
    id: "m1",
    num: 1,
    unit: "Unit 1",
    title: "Ice-cream Man & Wonderful Waste!",
    subtitle: "Summer joy poem by Rachel Field & Folk tale from Travancore (Kerala)",
    concepts: [
      "Poem 'Ice-cream Man': The summer arrival of the ice-cream cart bringing delightful cooling treats (vanilla, chocolate, strawberry) and chilled fizzy drinks; cart compared to a colourful flower bed.",
      "Prose 'Wonderful Waste!': The Maharaja of Travancore commands a grand feast; enters the kitchen and strictly forbids discarding vegetable scraps.",
      "The Culinary Invention of 'Avial': Slicing vegetable peels into long strips, boiling them with ground coconut, green chillies, garlic, beaten curd, and aromatic curry leaves.",
      "Key Themes: Resourcefulness, zero-waste culinary ethics, sustainability, and creative problem solving.",
      "Grammar & Phonics: Describing words, rhyming pairs, compound words, step-by-step recipe writing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">Culinary Miracle of Avial: Turning Waste into a Feast</text>
      <circle cx="85" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🥕</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Scraps Basket</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Peels & cuts in basket</text>
      <path d="M125 85 L180 85" stroke="#6ee7b7" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🔪</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Long Strips</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Washed & boiled</text>
      <path d="M265 85 L320 85" stroke="#6ee7b7" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🥥</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Paste & Curd</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Coconut & chillies</text>
      <path d="M405 85 L460 85" stroke="#6ee7b7" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🍲</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Avial!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Curry leaves & oil</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (Ice-cream Man)",
        q: "In which season is ice-cream most popular, and who feels joyful on seeing the Ice-cream Man?",
        marks: 2,
        ans: "Ice-cream is most popular during the blazing heat of the summer season. Children (and the speaker) feel immense joy and excitement upon spotting the Ice-cream Man wheeling his cool, colourful cart down the street.",
        rubric: [
          { key: "Summer season identified", marks: "1 Mark" },
          { key: "Children / speaker feel joyful excitement", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Poem (Ice-cream Man)",
        q: "What are the different flavours of ice-cream mentioned in the poem, and what else does the Ice-cream Man sell?",
        marks: 3,
        ans: "The poem mentions three classic flavours: <strong>vanilla, chocolate, and strawberry</strong>. Additionally, the Ice-cream Man sells bottles of chilled frosty fizz drinks in vibrant hues of green, orange, white, and pink.",
        rubric: [
          { key: "Flavours: Vanilla, chocolate, strawberry", marks: "1.5 Marks" },
          { key: "Chilled frosty fizz bottles", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Poem (Ice-cream Man)",
        q: "What is the ice-cream cart compared to in the poem, and why?",
        marks: 2,
        ans: "The ice-cream cart is compared to a <strong>flower bed of roses and sweet peas</strong>. This simile is used because the eager children cluster thick and fast around the umbrella cart, just as honeybees cluster around fragrant garden blossoms.",
        rubric: [
          { key: "Compared to a flower bed of roses and sweet peas", marks: "1 Mark" },
          { key: "Explanation: children clustering like honeybees", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (Wonderful Waste!)",
        q: "Why did the Maharaja of Travancore enter the kitchen in the afternoon, and what strict order did he give the cook?",
        marks: 3,
        ans: "The Maharaja entered the palace kitchen in the afternoon to inspect the special dishes being prepared for the grand royal feast. Seeing a huge basket filled with fresh vegetable scraps and peels, he commanded the cook not to waste them, ordering him to find a creative way to use them up.",
        rubric: [
          { key: "Inspecting dishes for the grand royal feast", marks: "1.5 Marks" },
          { key: "Commanding not to throw away vegetable scraps and find a use", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Wonderful Waste!)",
        q: "State whether the following statements are True or False:<br>(i) The king had ordered a grand dinner in his palace.<br>(ii) No one had heard of or tasted avial before that day.<br>(iii) The cook had planned to make avial even before the king entered.",
        marks: 3,
        ans: `<ul>
          <li><strong>(i) True:</strong> The Maharaja of Travancore had indeed ordered a grand feast.</li>
          <li><strong>(ii) True:</strong> Avial was invented by the cook on that very evening, so no one had ever tasted it before.</li>
          <li><strong>(iii) False:</strong> The cook had originally intended to throw away the basket of scraps as useless waste.</li>
        </ul>`,
        rubric: [
          { key: "Statement (i) correctly identified as True", marks: "1 Mark" },
          { key: "Statement (ii) correctly identified as True", marks: "1 Mark" },
          { key: "Statement (iii) correctly identified as False", marks: "1 Mark" }
        ]
      },
      {
        category: "Word Building & Vocabulary",
        q: "From the story 'Wonderful Waste!', circle and write down the ingredients required to prepare authentic traditional Avial.",
        marks: 3,
        ans: `The authentic ingredients used by the royal cook to prepare Avial are:
        <ol>
          <li><strong>Vegetable scraps & peels</strong> (washed thoroughly and sliced into long strips)</li>
          <li><strong>Fresh grated coconut</strong></li>
          <li><strong>Green chillies and garlic pods</strong> (ground into a fine paste)</li>
          <li><strong>Whipped / beaten curd</strong></li>
          <li><strong>Pure coconut oil</strong> (poured over the steaming curry)</li>
          <li><strong>Fresh curry leaves</strong> (used for aromatic garnishing)</li>
        </ol>`,
        rubric: [
          { key: "Vegetable scraps, coconut, chillies & garlic", marks: "1.5 Marks" },
          { key: "Whipped curd, coconut oil & curry leaves", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Let us Write & Process Writing",
        q: "Write down the step-by-step culinary process of making Avial in chronological sequence.",
        marks: 4,
        ans: `<ol>
          <li><strong>Step 1 (Clean & Cut):</strong> Wash the vegetable scraps thoroughly and cut them into long, uniform strips.</li>
          <li><strong>Step 2 (Boil):</strong> Place the vegetable strips in a large cooking pot with water and salt, and simmer until tender.</li>
          <li><strong>Step 3 (Grind Paste):</strong> Grind fresh coconut, spicy green chillies, and garlic cloves into a smooth paste and mix it into the boiling pot.</li>
          <li><strong>Step 4 (Incorporate Curd):</strong> Whisk curd until smooth and stir it gently into the gravy.</li>
          <li><strong>Step 5 (Season & Garnish):</strong> Pour a spoonful of fresh coconut oil over the dish and garnish lavishly with fresh curry leaves. Avial is ready to serve!</li>
        </ol>`,
        rubric: [
          { key: "Steps 1 & 2: Washing, slicing and boiling", marks: "1.5 Marks" },
          { key: "Step 3: Coconut-chilli-garlic paste addition", marks: "1 Mark" },
          { key: "Steps 4 & 5: Curd blending, coconut oil and curry leaf finish", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Zero-Waste Kitchen Management & Community Composting",
      text: "Urban Indian households generate over 1.2 kg of municipal wet waste per day, much of which consists of nutrient-rich vegetable peels, potato jackets, fruit rinds, and cauliflower stalks that end up in polluting open landfills.",
      question: "Drawing inspiration from the story 'Wonderful Waste!', suggest three practical methods through which modern school canteens or homes can reduce and transform organic vegetable waste into valuable resources.",
      answer: `<strong>Three Waste-to-Wealth Culinary Practices:</strong>
      <ol>
        <li><strong>Vegetable Peel Stocks & Broths:</strong> Clean washed peels of carrots, gourds, and potato jackets can be boiled with bay leaves and peppercorns to create a rich, mineral-packed culinary vegetable stock for soups and gravies.</li>
        <li><strong>Crispy Oven Chips & Chutneys:</strong> Bottle gourd and ridge gourd peels can be tempered with mustard seeds and roasted into traditional nutrient-rich Indian chutneys (thogayal) or baked with paprika into crunchy snacks.</li>
        <li><strong>Aerobic Kitchen Composting:</strong> Non-edible trimmings should be placed into aerobic compost bins with dry leaves to create dark, organic compost for school gardens within 40 days, closing the ecological loop.</li>
      </ol>`,
      rubric: "1.5 Marks for identifying landfill issues + 3.5 Marks for 3 actionable culinary, stock, and composting solutions = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 2: TEAMWORK & FLYING TOGETHER
  // -------------------------------------------------------------------------
  {
    id: "m2",
    num: 2,
    unit: "Unit 2",
    title: "Teamwork & Flying Together",
    subtitle: "Rhythmic motivational poem by Jan Nigro & Panchatantra fable by Shiv Kumar",
    concepts: [
      "Poem 'Teamwork': The irreplaceable power of collective effort; passing the baton in relay races, passing the ball in basketball, and blending individual identities into a unified goal.",
      "Prose 'Flying Together': A wise old goose notices a tender creeper growing at the base of a giant tree and warns his flock to destroy it before it thickens into a ladder.",
      "The Consequences of Negligence: The geese ignore the wise bird's warning; a hunter climbs the sturdy creeper and casts a snare across the canopy.",
      "The Escape Plan: Following the old bird's smart counsel, all geese pretend to be dead so the hunter throws them to the ground; at a unified signal, they fly away together.",
      "Moral & Values: Listening to elder wisdom, foresight, collective synchronization, and team survival."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f9ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0369a1" text-anchor="middle">Flying Together: Wisdom, Danger, and Unified Escape</text>
      <circle cx="85" cy="85" r="32" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🌱</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0c4a6e" text-anchor="middle">Tender Creeper</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#0369a1" text-anchor="middle">Wise bird warns flock</text>
      <path d="M125 85 L180 85" stroke="#7dd3fc" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🪜</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0c4a6e" text-anchor="middle">Hunter's Ladder</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#0369a1" text-anchor="middle">Casts snare in tree</text>
      <path d="M265 85 L320 85" stroke="#7dd3fc" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🤫</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0c4a6e" text-anchor="middle">Pretend Dead</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#0369a1" text-anchor="middle">Hunter drops birds</text>
      <path d="M405 85 L460 85" stroke="#7dd3fc" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🪿</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">Fly Away!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Flock escapes together</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (Teamwork)",
        q: "Complete the following lines from the poem 'Teamwork':<br>(i) If nobody passes the ball in a basketball game, you can't ________.<br>(ii) In a relay race, nobody can go on if nobody passes the ________.",
        marks: 2,
        ans: `<ul>
          <li>(i) If nobody passes the ball in a basketball game, you can't <strong>shoot</strong>.</li>
          <li>(ii) In a relay race, nobody can go on if nobody passes the <strong>baton</strong>.</li>
        </ul>`,
        rubric: [
          { key: "Correct completion (i): shoot", marks: "1 Mark" },
          { key: "Correct completion (ii): baton", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Poem (Teamwork)",
        q: "Name the team members needed to successfully carry out the following activities:<br>(a) To play a game of cricket<br>(b) To make a feature film<br>(c) To run a good school",
        marks: 3,
        ans: `<ul>
          <li><strong>(a) To play cricket:</strong> Batsmen, bowlers, fielders, wicketkeeper, captains, umpires, and coaches.</li>
          <li><strong>(b) To make a film:</strong> Director, actors, scriptwriter, cinematographer/cameramen, music composers, light technicians, and editors.</li>
          <li><strong>(c) To run a good school:</strong> Principal, passionate teachers, enthusiastic students, administrative staff, librarians, and bus drivers.</li>
        </ul>`,
        rubric: [
          { key: "(a) Cricket team members listed", marks: "1 Mark" },
          { key: "(b) Film production crew listed", marks: "1 Mark" },
          { key: "(c) School administration & staff listed", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (Flying Together)",
        q: "Why did the wise old bird advise the other wild geese to destroy the young creeper?",
        marks: 2,
        ans: "The wise old bird warned that as the tender creeper grew, it would wind tightly around the giant trunk, becoming thick and strong like a ladder. This would enable a hunter or enemy to easily climb up the tall tree and kill them all.",
        rubric: [
          { key: "Creeper growing thick and sturdy like a ladder", marks: "1 Mark" },
          { key: "Enabling a hunter to climb and capture the flock", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (Flying Together)",
        q: "Why did the geese pretend to be dead when the hunter returned, and how did they manage to escape?",
        marks: 3,
        ans: "The geese pretended to be dead on the advice of the wise bird because hunters do not care for dead birds and will cast them down to the ground. When the hunter threw the last goose to the ground, they all suddenly stood up at once, flapped their wings, and flew away into the sky together.",
        rubric: [
          { key: "Hunter does not want dead birds and throws them down", marks: "1.5 Marks" },
          { key: "Waiting until the last bird landed, then simultaneous flight", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Who said to Whom?",
        q: "Identify who said the following words to whom in 'Flying Together':<br>(i) 'Let us destroy this creeper.'<br>(ii) 'It is so small, what harm can it do?'<br>(iii) 'Tomorrow morning I will come back and catch them all.'",
        marks: 3,
        ans: `<ul>
          <li><strong>(i)</strong> Said by the <strong>wise old bird</strong> to the <strong>other wild geese</strong>.</li>
          <li><strong>(ii)</strong> Said by the <strong>young, careless wild geese</strong> to the <strong>wise old bird</strong>.</li>
          <li><strong>(iii)</strong> Said by the <strong>hunter to himself</strong> as he left the snare in the evening.</li>
        </ul>`,
        rubric: [
          { key: "(i) Wise old bird to geese", marks: "1 Mark" },
          { key: "(ii) Careless geese to old bird", marks: "1 Mark" },
          { key: "(iii) Hunter to himself", marks: "1 Mark" }
        ]
      },
      {
        category: "Let us Learn Grammar • Prepositions",
        q: "Fill in the blanks with suitable prepositions (in, on, into, over, through):<br>(a) The flock of geese lived ____ the tall tree.<br>(b) The hunter climbed ____ the tree using the creeper.<br>(c) The geese flew ____ the morning skies safely.",
        marks: 3,
        ans: `<ul>
          <li>(a) The flock of geese lived <strong>in</strong> the tall tree.</li>
          <li>(b) The hunter climbed <strong>up / on</strong> the tree using the creeper.</li>
          <li>(c) The geese flew <strong>into / across</strong> the morning skies safely.</li>
        </ul>`,
        rubric: [
          { key: "Appropriate preposition for (a)", marks: "1 Mark" },
          { key: "Appropriate preposition for (b)", marks: "1 Mark" },
          { key: "Appropriate preposition for (c)", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Team Dynamics & Collaborative Project Execution",
      text: "During a Class 5 Science Exhibition, Group Alpha divided their project into five separate tasks. However, two members neglected their assigned duties, causing the entire display model to collapse ten minutes before the judges arrived.",
      question: "Drawing insights from the poem 'Teamwork' and the story 'Flying Together', outline three key principles Group Alpha should follow to turn their dysfunctional group into a winning cooperative team.",
      answer: `<strong>Three Principles for High-Performing Student Teams:</strong>
      <ol>
        <li><strong>Foresight and Mutual Accountability (Passing the Baton):</strong> Just as a relay racer relies on an accurate pass, team members must inspect each other's progress early and assist struggling teammates rather than ignoring delays until the deadline.</li>
        <li><strong>Valuing Senior & Experienced Guidance:</strong> Like the flock that suffered by dismissing the elder goose's creeper warning, students must actively consult their teacher or team leader when obstacles arise.</li>
        <li><strong>Synchronized Final Execution (Flying as One):</strong> The team must rehearse their combined presentation together so everyone understands their speaking cues and role, achieving unified success.</li>
      </ol>`,
      rubric: "1.5 Marks for diagnosing lack of communication + 3.5 Marks for 3 actionable principles (accountability, guidance, synchronized rehearsal) = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 3: MY SHADOW & ROBINSON CRUSOE
  // -------------------------------------------------------------------------
  {
    id: "m3",
    num: 3,
    unit: "Unit 3",
    title: "My Shadow & Robinson Crusoe",
    subtitle: "Playful optical poem by Robert Louis Stevenson & Survival adventure by Daniel Defoe",
    concepts: [
      "Poem 'My Shadow': A child observes his shadow behaving unpredictably; growing tall like an Indian-rubber ball, shrinking to nothing, and staying asleep in bed before dawn dew.",
      "Prose 'Robinson Crusoe': Marooned alone on an uninhabited desert island for years, Crusoe encounters a single human footprint on the beach sand.",
      "Psychology of Fear: The sensory shock of the unknown; mistaking every distant bush and tree for a hostile human figure; retreating into his fortified cave castle.",
      "Reasoning & Faith: Crusoe's progression from panic to rational deduction; recognizing the foot was larger than his own and praying for spiritual strength.",
      "Vocabulary & Grammar: Describing words, degrees of comparison, compound sentences with and/but/because."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Robinson Crusoe: Discovery, Terror, and Reasoning</text>
      <circle cx="85" cy="85" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">👣</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#78350f" text-anchor="middle">Sole Footprint</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Found in wet sand</text>
      <path d="M125 85 L180 85" stroke="#fcd34d" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🏃</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#78350f" text-anchor="middle">Panic Flight</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Runs into cave castle</text>
      <path d="M265 85 L320 85" stroke="#fcd34d" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🌲</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#78350f" text-anchor="middle">Paranoia</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Mistakes bush for man</text>
      <path d="M405 85 L460 85" stroke="#fcd34d" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">📐</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">Measurement</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">Foot larger than his own</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (My Shadow)",
        q: "Why does the child say that his shadow 'jumps into bed before me' and 'stays asleep' in the morning?",
        marks: 3,
        ans: "When the child walks towards his bed in the evening with a light behind him, his cast shadow falls ahead into the bed before he climbs in. In the early morning before sunrise, because there is no bright directional sunlight to cast a silhouette, the child playfully imagines his lazy shadow stayed fast asleep in bed.",
        rubric: [
          { key: "Shadow falling ahead of him onto bed in evening light", marks: "1.5 Marks" },
          { key: "Absence of sunlight before dawn treated as 'sleeping'", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Poem (My Shadow)",
        q: "What time of the day is your shadow the tallest, and when is it the shortest? Explain the scientific reason.",
        marks: 3,
        ans: "A shadow is <strong>tallest in the early morning and late afternoon</strong> when the sun is low on the horizon, creating a long projection. It is <strong>shortest at midday (noon)</strong> because the sun is positioned directly overhead, casting light vertically downwards.",
        rubric: [
          { key: "Tallest in morning & late afternoon (low sun angle)", marks: "1.5 Marks" },
          { key: "Shortest at noon (overhead vertical sun)", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Robinson Crusoe)",
        q: "What convinced Robinson Crusoe that the mark on the sand was truly the footprint of a human being?",
        marks: 2,
        ans: "Crusoe examined the mark closely and found the clear, unmistakable impression of every part of a human foot: heel, sole, arch, and all five distinct toes. There was no mistaken identity—it was an authentic human footprint.",
        rubric: [
          { key: "Clear impression of heel, toes, and sole", marks: "1 Mark" },
          { key: "Unmistakable human foot pattern confirmed", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (Robinson Crusoe)",
        q: "Why was Robinson Crusoe terrified when looking at the trees and bushes around him as he ran home?",
        marks: 3,
        ans: "Crusoe's mind was seized by extreme panic and wild imagination. Every rustling shadow, distant tree trunk, and swaying bush appeared to his frightened eyes like a savage or cannibal lying in ambush waiting to kill him.",
        rubric: [
          { key: "Extreme fear and heightened imagination", marks: "1.5 Marks" },
          { key: "Mistaking bushes and tree stumps for ambushers", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Robinson Crusoe)",
        q: "Why was Robinson Crusoe sure that the footprint could not have been made by his own foot?",
        marks: 2,
        ans: "He was sure for two logical reasons: First, he had not visited that particular stretch of the shore for many months. Second, when he placed his own foot beside the impression in the sand, he discovered that the footprint was noticeably larger than his own foot.",
        rubric: [
          { key: "Had not visited that shore location in a long time", marks: "1 Mark" },
          { key: "Measurement proved footprint was larger than his own", marks: "1 Mark" }
        ]
      },
      {
        category: "Let us Learn Grammar • Conjunctions",
        q: "Join the following pairs of sentences using suitable conjunctions (and, but, because, so):<br>(a) Robinson ran as fast as he could. He was terrified.<br>(b) I wanted to go outside. It was raining heavily.<br>(c) She studied diligently for the exam. She scored first division.",
        marks: 3,
        ans: `<ul>
          <li>(a) Robinson ran as fast as he could <strong>because</strong> he was terrified.</li>
          <li>(b) I wanted to go outside, <strong>but</strong> it was raining heavily.</li>
          <li>(c) She studied diligently for the exam, <strong>so</strong> she scored first division.</li>
        </ul>`,
        rubric: [
          { key: "(a) Joined with 'because'", marks: "1 Mark" },
          { key: "(b) Joined with 'but'", marks: "1 Mark" },
          { key: "(c) Joined with 'so'", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Psychological Resilience & Overcoming Irrational Fears",
      text: "When 10-year-old Kabir heard strange scratching noises outside his bedroom window during a night storm, his mind raced with fears of burglars or monsters, paralyzing him under his blanket until morning, only to discover an overgrown tree branch tapping against the glass pane.",
      question: "Connecting Kabir's experience to Robinson Crusoe's fear of the footprint, explain how fear magnifies harmless objects, and propose two steps children can take to rationally assess scary situations.",
      answer: `<strong>Overcoming Fear through Rational Inquiry:</strong>
      <ol>
        <li><strong>How Fear Distorts Reality:</strong> When humans experience acute anxiety, the brain activates a primitive fight-or-flight response that interprets neutral stimuli (tree branches, wind rustling bushes) as mortal threats, just as Crusoe mistook innocent shrubbery for hostile savages.</li>
        <li><strong>Step 1 — Calm Breathing & Evidence Gathering:</strong> Instead of hiding in blind panic, stop, take three deep belly breaths, and look for tangible evidence (listen for rhythmic mechanical patterns vs live footsteps; check light sources).</li>
        <li><strong>Step 2 — Communicate with Trusted Adults:</strong> Immediately wake an elder or parent to investigate together rather than enduring solitary, agonizing fear throughout the night.</li>
      </ol>`,
      rubric: "1.5 Marks for explaining psychological amplification of fear + 3.5 Marks for 2 practical investigative and communication steps = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 4: CRYING & MY ELDER BROTHER
  // -------------------------------------------------------------------------
  {
    id: "m4",
    num: 4,
    unit: "Unit 4",
    title: "Crying & My Elder Brother",
    subtitle: "Cathartic poem by Galway Kinnell & Munshi Premchand's classic 'Bade Bhai Sahab'",
    concepts: [
      "Poem 'Crying': The philosophy of emotional catharsis; crying wholeheartedly until the pillow is soaked so that one can emerge genuinely joyful and jump into a refreshing shower.",
      "Prose 'My Elder Brother': The poignant relationship between scholarly, disciplined elder brother Bhaiya and playful, carefree younger brother Munna.",
      "Academic Irony: Bhaiya studies endlessly, filling notebooks with repeated phrases, yet fails his grades; Munna flies kites and plays marbles, yet tops his class.",
      "Life Wisdom vs Rote Learning: Bhaiya's mature realization that real-world life experience, parental sacrifice, and emotional maturity outweigh mere textbook memorization.",
      "Grammar & Composition: Letter writing format, timetable planning, idioms, character contrast."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf4ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#86198f" text-anchor="middle">My Elder Brother: Academic Study vs Life Experience</text>
      <circle cx="95" cy="85" r="32" fill="#fae8ff" stroke="#c026d3" stroke-width="2"/>
      <text x="95" y="80" font-size="18" text-anchor="middle">📚</text>
      <text x="95" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#701a75" text-anchor="middle">Bhaiya's Toil</text>
      <text x="95" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a21caf" text-anchor="middle">Studies 24/7, fails</text>
      <path d="M135 85 L190 85" stroke="#f0abfc" stroke-width="2"/>
      <circle cx="235" cy="85" r="32" fill="#fae8ff" stroke="#c026d3" stroke-width="2"/>
      <text x="235" y="80" font-size="18" text-anchor="middle">🪁</text>
      <text x="235" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#701a75" text-anchor="middle">Munna's Play</text>
      <text x="235" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a21caf" text-anchor="middle">Plays, stands first</text>
      <path d="M275 85 L330 85" stroke="#f0abfc" stroke-width="2"/>
      <circle cx="375" cy="85" r="32" fill="#fae8ff" stroke="#c026d3" stroke-width="2"/>
      <text x="375" y="80" font-size="18" text-anchor="middle">⚖️</text>
      <text x="375" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#701a75" text-anchor="middle">Humility</text>
      <text x="375" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#a21caf" text-anchor="middle">Warns against pride</text>
      <path d="M415 85 L470 85" stroke="#f0abfc" stroke-width="2"/>
      <circle cx="505" cy="85" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="505" y="80" font-size="18" text-anchor="middle">🫂</text>
      <text x="505" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Elder Care</text>
      <text x="505" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Brothers embrace</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (Crying)",
        q: "According to the poet Galway Kinnell, should you cry just a little bit or cry a lot? What can you do after crying completely?",
        marks: 2,
        ans: "The poet advises that one should not cry just a little bit; rather, one must cry wholeheartedly until the pillow is completely soaked. After purging all pent-up sorrow, one can jump merrily into a splashing shower and laugh joyfully without any lingering gloom.",
        rubric: [
          { key: "Cry wholeheartedly until pillow is soaked", marks: "1 Mark" },
          { key: "Jump into shower and emerge laughing joyfully", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (My Elder Brother)",
        q: "What did Munna love to do all day, and how did his daily activities contrast with Bhaiya's routine?",
        marks: 3,
        ans: "Munna loved playing outdoors: running in green fields, tossing pebbles, flying paper kites, and playing marbles with friends. In stark contrast, Bhaiya sat at his desk for hours with open books, constantly reading, writing notes, and copying words repeatedly to build a strong educational foundation.",
        rubric: [
          { key: "Munna: flying kites, marbles, running in green fields", marks: "1.5 Marks" },
          { key: "Bhaiya: sitting for hours studying and writing", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (My Elder Brother)",
        q: "Why was Munna unhappy with the strict timetable that Bhaiya prepared for him?",
        marks: 2,
        ans: "Munna was unhappy because Bhaiya's rigid study schedule packed every single hour with subjects like English, Maths, History, and Grammar from 6 a.m. to night, leaving zero time for playing outdoors in the green fields.",
        rubric: [
          { key: "Rigid schedule packed with back-to-back subjects", marks: "1 Mark" },
          { key: "Zero time allocated for sports or outdoor play", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (My Elder Brother)",
        q: "What happened when the yearly exam results were announced? How did each brother react?",
        marks: 3,
        ans: "When the results arrived, Bhaiya failed his class once again, while Munna stood first in his class. Bhaiya felt heartbroken and wept quietly, whereas Munna felt proud of his ease. However, seeing his elder brother's genuine sorrow filled Munna with remorse and empathy.",
        rubric: [
          { key: "Bhaiya failed while Munna stood first", marks: "1.5 Marks" },
          { key: "Bhaiya's sadness and Munna's empathy & guilt", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Character Analysis & Themes",
        q: "Explain Bhaiya's philosophy on 'Bookish Knowledge versus Real Life Experience'. Why does he cite their parents and Headmaster's mother?",
        marks: 4,
        ans: `Bhaiya explains that passing examinations is not the sole benchmark of wisdom:
        <ul>
          <li><strong>Pride Destroys:</strong> He warns Munna using the example of King Ravana, whose immense knowledge was undone by arrogant pride.</li>
          <li><strong>Parents' Real Wisdom:</strong> Their parents never attended school or passed degrees, yet they possess profound life experience to manage money, family health, and crises far better than educated youth.</li>
          <li><strong>Elder Care Duty:</strong> Even if Munna surpasses Bhaiya academically, Bhaiya will always remain elder by five years, holding the natural responsibility and duty to guide, supervise, and protect his younger sibling.</li>
        </ul>`,
        rubric: [
          { key: "Warning against arrogant pride (example of Ravana)", marks: "1 Mark" },
          { key: "Parents' life wisdom vs theoretical degrees", marks: "1.5 Marks" },
          { key: "Elder sibling's moral right to guide and counsel", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Let us Learn Grammar • Suffixes",
        q: "Add suffixes (-ness, -ly, -ful) to form new words from the root words: (a) happy, (b) serious, (c) care, (d) bright.",
        marks: 2,
        ans: `<ul>
          <li>(a) happy + ness = <strong>happiness</strong> / happy + ly = <strong>happily</strong></li>
          <li>(b) serious + ly = <strong>seriously</strong></li>
          <li>(c) care + ful = <strong>careful</strong></li>
          <li>(d) bright + ness = <strong>brightness</strong> / bright + ly = <strong>brightly</strong></li>
        </ul>`,
        rubric: [
          { key: "Correct suffix transformation for (a) & (b)", marks: "1 Mark" },
          { key: "Correct suffix transformation for (c) & (d)", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Balanced Learning: Cognitive Academics vs Co-Curricular Play",
      text: "Many modern primary school students are subjected to relentless after-school coaching classes, leaving them zero unstructured time for physical games, imaginative hobbies, or family conversations, leading to burnout.",
      question: "Synthesizing the core conflict in 'My Elder Brother', draft a healthy weekly schedule and set of principles that balances academic diligence with physical playtime.",
      answer: `<strong>Guiding Principles for Balanced Holistic Child Development:</strong>
      <ol>
        <li><strong>The 60-40 Academic-Play Balance:</strong> For every 60 minutes of rigorous academic focus, allocate 40 minutes for active physical outdoor play (football, cycling, badminton) which re-energizes brain synapses and enhances memory retention.</li>
        <li><strong>Experiential Application over Mechanical Rote:</strong> Replace passive memorization with real-world application (measuring room perimeters, maintaining a pocket expense journal, discussing news).</li>
        <li><strong>Nurturing Sibling Empathy:</strong> Academic marks should never be used to humiliate or compare siblings at home; mutual respect and emotional security must remain the core family priority.</li>
      </ol>`,
      rubric: "1.5 Marks for identifying burnout from rote schedules + 3.5 Marks for 3 balanced development principles = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 5: THE LAZY FROG & RIP VAN WINKLE
  // -------------------------------------------------------------------------
  {
    id: "m5",
    num: 5,
    unit: "Unit 5",
    title: "The Lazy Frog & Rip Van Winkle",
    subtitle: "Humorous poem on sloth & Washington Irving's classic American folktale",
    concepts: [
      "Poem 'The Lazy Frog': Fred the frog refuses to budge an inch, ignoring his elderly mother's calls for help and feigning deep sleep even when a lady frog hops past.",
      "Prose 'Rip Van Winkle': Set in the Kaatskill mountains; Rip is a kind, good-natured man loved by village children and dogs, but hopelessly lazy about tending his own farm.",
      "The Encounter with Strange Mountain Men: Rip assists a short, stout man dressed in antique Dutch clothing carrying a heavy barrel; watches a silent game of ninepins.",
      "The 20-Year Slumber: Rip drinks from the sweet barrel and falls into a profound two-decade sleep; wakes to find his dog gone, gun rusted, beard a foot long, and the village transformed.",
      "Themes & Grammar: Consequences of chronic procrastination, silent letters in English spelling, prefixes of negation (un-, dis-, in-)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fef2f2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#991b1b" text-anchor="middle">Rip Van Winkle: The 20-Year Sleep & Transformation</text>
      <circle cx="85" cy="85" r="32" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🍻</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7f1d1d" text-anchor="middle">Magic Barrel</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Drinks & falls asleep</text>
      <path d="M125 85 L180 85" stroke="#fca5a5" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">⏳</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7f1d1d" text-anchor="middle">20 Years Pass</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Seasons roll silently</text>
      <path d="M265 85 L320 85" stroke="#fca5a5" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🧔</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7f1d1d" text-anchor="middle">Foot-Long Beard</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Rusted gun & stiff joints</text>
      <path d="M405 85 L460 85" stroke="#fca5a5" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🏘️</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">New Village</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Children all grown up</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (The Lazy Frog)",
        q: "What does Fred the frog do all day? How does he react when his elderly mother calls for help or when a lady frog hops past?",
        marks: 3,
        ans: "Fred does absolutely nothing all day; he lies sprawled like a useless lump on a silent log. When his poor old mother calls him to do errands, he refuses to move even a single inch and pretends to be hard of hearing. Even when a graceful lady frog hops past, he does not open an eye or bow politely.",
        rubric: [
          { key: "Sprawls on a log doing zero work", marks: "1 Mark" },
          { key: "Ignores elderly mother's calls", marks: "1 Mark" },
          { key: "Refuses to bow or open an eye for lady frog", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (Rip Van Winkle)",
        q: "What kind of man was Rip Van Winkle? Mention two positive traits and one major personal flaw.",
        marks: 3,
        ans: "Rip was a simple, kind-hearted, and friendly neighbour who was universally loved by village children because he played marbles with them, made kites, and told endless stories. His dog Wolf was his faithful companion. However, his fatal flaw was that he was incorrigibly lazy regarding his own work—he let fences fall apart, weeds choke his crops, and avoided all farm labour.",
        rubric: [
          { key: "Positive traits: kind, friendly to children/neighbours", marks: "1.5 Marks" },
          { key: "Major flaw: extreme laziness regarding his own farm and livelihood", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Rip Van Winkle)",
        q: "Describe the strange men playing ninepins in the Kaatskill mountains.",
        marks: 3,
        ans: "The strange men were short, odd-looking beings dressed in quaint antique Dutch doublets with big buttons. They had long, bushy beards of diverse colours and shapes. Though playing a noisy bowling game (ninepins) whose sounds echoed like rolling thunder through the peaks, their faces remained utterly solemn and silent.",
        rubric: [
          { key: "Odd short figures in antique Dutch clothing", marks: "1.5 Marks" },
          { key: "Solemn, silent faces despite playing thunderous ninepins", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Rip Van Winkle)",
        q: "What startling changes did Rip Van Winkle discover when he woke up and returned to his village?",
        marks: 3,
        ans: "Upon waking, Rip discovered: (1) His clean gun was replaced by a rusty, corroded barrel, (2) His companion dog Wolf had disappeared, (3) His grey beard had grown a foot long, and (4) In the village, all houses were new, the people wore strange clothes, and not a single old acquaintance recognized him.",
        rubric: [
          { key: "Rusted gun and foot-long white beard", marks: "1.5 Marks" },
          { key: "Village transformed, old friends replaced by strangers", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Let us Learn Grammar • Silent Letters",
        q: "Identify the silent letter in each of the following words:<br>(a) knee, (b) doubt, (c) write, (d) island, (e) comb, (f) listen.",
        marks: 3,
        ans: `<ul>
          <li>(a) knee &rarr; Silent <strong>k</strong></li>
          <li>(b) doubt &rarr; Silent <strong>b</strong></li>
          <li>(c) write &rarr; Silent <strong>w</strong></li>
          <li>(d) island &rarr; Silent <strong>s</strong></li>
          <li>(e) comb &rarr; Silent <strong>b</strong></li>
          <li>(f) listen &rarr; Silent <strong>t</strong></li>
        </ul>`,
        rubric: [
          { key: "Correct silent letters for (a), (b), (c)", marks: "1.5 Marks" },
          { key: "Correct silent letters for (d), (e), (f)", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Procrastination and Time Management for Youth",
      text: "Rip Van Winkle was eager to help any neighbor in the village run errands, but when it came to maintaining his own home and family fields, he continually postponed chores until twenty years slipped away while he slept.",
      question: "Analyze Rip's habit of chronic avoidance. What three actionable strategies can students employ to prevent procrastination and cultivate daily self-discipline?",
      answer: `<strong>Three Strategies to Overcome Chronic Procrastination:</strong>
      <ol>
        <li><strong>The 'Two-Minute Rule':</strong> If a pending task takes less than two minutes (putting away books, organizing a desk, submitting a notebook), do it immediately without postponing.</li>
        <li><strong>Breaking Large Goals into Bite-Sized Milestones:</strong> Chronic delay happens when chores feel overwhelming. Divide a bulky assignment into three 15-minute study sprints with 5-minute reward breaks.</li>
        <li><strong>Ownership and Personal Duty First:</strong> Learn Rip's vital life lesson: being pleasant to strangers does not compensate for neglecting one's primary responsibilities at home and school.</li>
      </ol>`,
      rubric: "1.5 Marks for analyzing Rip's avoidance behavior + 3.5 Marks for 3 practical psychological productivity techniques = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 6: CLASS DISCUSSION & THE TALKATIVE BARBER
  // -------------------------------------------------------------------------
  {
    id: "m6",
    num: 6,
    unit: "Unit 6",
    title: "Class Discussion & The Talkative Barber",
    subtitle: "Observational school poem by Gervase Phinn & Tale of chatter from Arabian Nights",
    concepts: [
      "Poem 'Class Discussion': During a lively classroom debate where everyone loudly airs opinions, Jane sits silently staring around; when asked by teacher Ms. Jane explains that the world is filled with naturally quiet people.",
      "Prose 'The Talkative Barber': The Sultan of Cashgar summons a barber to shave his head; the barber begins an endless monologue boasting of his six disabled brothers instead of doing his job.",
      "Comedic Climax: The desperate Sultan promises all the day's royal feast food to the barber just to get his head shaved; the barber inspects each dish leisurely while the Sultan waits half-shaved in agony.",
      "Core Values: Respecting introverted personalities, active listening, conversational restraint, and professional focus.",
      "Grammar: Prefixes of negation (im-, dis-, un-), adverbs ending in -ly, descriptive character dialogue."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">The Talkative Barber: Chatterbox vs Half-Shaved Sultan</text>
      <circle cx="85" cy="85" r="32" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">👑</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Sultan Calls</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#475569" text-anchor="middle">Needs head shaved</text>
      <path d="M125 85 L180 85" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🗣️</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Endless Gossip</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#475569" text-anchor="middle">Talks of 6 brothers</text>
      <path d="M265 85 L320 85" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🪒</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Half-Shaved!</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Sultan waits in fury</text>
      <path d="M405 85 L460 85" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🍲</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Feast Food</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Inspects every dish</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (Class Discussion)",
        q: "What activity was going on in the classroom? Who was the quiet student, and how did she respond when the teacher questioned her silence?",
        marks: 3,
        ans: "A lively class discussion was underway where students and the teacher were actively voicing their opinions. Jane was the quiet student who sat serenely without uttering a word. When the teacher gently asked if anything was wrong, Jane looked up and replied with quiet poise: <em>'There are many people in this world who are rather quiet you know!'</em>",
        rubric: [
          { key: "Class discussion / debate taking place", marks: "1 Mark" },
          { key: "Jane identified as the calm, quiet student", marks: "1 Mark" },
          { key: "Jane's response that many people in the world are quiet", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (The Talkative Barber)",
        q: "Why was the Sultan of Cashgar in such an urgent hurry, and why did the Barber take so dreadfully long to shave him?",
        marks: 3,
        ans: "The Sultan was in a great hurry because he had invited a group of esteemed friends to a grand midday feast at his palace. The Barber took forever because instead of shaving the royal head, he constantly put down his razor to deliver long, unsolicited speeches about astrology, his six talkative brothers, and his self-proclaimed brilliance.",
        rubric: [
          { key: "Sultan's urgency: hosting friends for midday feast", marks: "1.5 Marks" },
          { key: "Barber's delay: putting down razor to gossip endlessly", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (The Talkative Barber)",
        q: "How many brothers did the Barber have, and what peculiar physical disability did each brother possess?",
        marks: 3,
        ans: `The Barber had six brothers, each with a unique physical handicap:
        <ol>
          <li>The first was <strong>humpbacked</strong> (Bacbouc).</li>
          <li>The second was <strong>toothless</strong> (El Haddar).</li>
          <li>The third was <strong>half-blind</strong> (Bequir).</li>
          <li>The fourth was <strong>totally blind</strong> (El Kouz).</li>
          <li>The fifth had his <strong>ears cropped</strong> (Alnaschar).</li>
          <li>The sixth had a <strong>cleft palate</strong> (Schacabac).</li>
        </ol>`,
        rubric: [
          { key: "Total 6 brothers identified", marks: "1 Mark" },
          { key: "Correct physical traits described", marks: "2 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (The Talkative Barber)",
        q: "Why did the Sultan finally agree to give all the prepared palace food to the Barber?",
        marks: 2,
        ans: "The Sultan was trapped in extreme distress with only half of his head shaved while the Barber lingered on. To get rid of the annoying chatterbox and secure the completion of his shave before his luncheon guests arrived, the desperate Sultan surrendered all the lavish feast dishes.",
        rubric: [
          { key: "Distress of remaining half-shaved", marks: "1 Mark" },
          { key: "Surrendering food to get the shave finished quickly", marks: "1 Mark" }
        ]
      },
      {
        category: "Let us Learn Grammar • Opposites with Prefixes",
        q: "Form the opposites of the following words by adding appropriate prefixes (un-, im-, dis-):<br>(a) patient, (b) obedient, (c) believe, (d) polite, (e) perfect, (f) pure.",
        marks: 3,
        ans: `<ul>
          <li>(a) patient &rarr; <strong>impatient</strong></li>
          <li>(b) obedient &rarr; <strong>disobedient</strong></li>
          <li>(c) believe &rarr; <strong>disbelieve</strong></li>
          <li>(d) polite &rarr; <strong>impolite</strong></li>
          <li>(e) perfect &rarr; <strong>imperfect</strong></li>
          <li>(f) pure &rarr; <strong>impure</strong></li>
        </ul>`,
        rubric: [
          { key: "Correct prefixes for (a), (b), (c)", marks: "1.5 Marks" },
          { key: "Correct prefixes for (d), (e), (f)", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Inclusivity in Classrooms: Valuing Introverts & Active Listeners",
      text: "In many schools, oral participation marks are awarded solely to children who speak loudly and often, causing naturally quiet, contemplative students like Jane to feel undervalued or pressured.",
      question: "Drawing on Gervase Phinn's 'Class Discussion', justify why quiet observation is an asset in group discussions, and propose two classroom evaluation methods that reward thoughtful listening.",
      answer: `<strong>The Power of the Quiet Observer in Modern Classrooms:</strong>
      <ol>
        <li><strong>Why Silence is Not Lack of Knowledge:</strong> Quiet students often process complex ideas with deeper analytical reflection, avoiding impulsive or redundant chatter. A productive society requires deep thinkers and attentive listeners just as much as vocal orators.</li>
        <li><strong>Method 1 — Written Reflection Journals:</strong> Allow students the option to submit a brief 3-sentence written synthesis of the class debate at the end of the lesson, rewarding insight over mere volume.</li>
        <li><strong>Method 2 — Socratic Peer-Listening Badges:</strong> Award marks when a student accurately summarizes what another classmate just stated before adding a new point, cultivating genuine listening.</li>
      </ol>`,
      rubric: "1.5 Marks for defending contemplative introversion + 3.5 Marks for 2 concrete evaluation rubrics (written reflection, active listening badges) = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 7: TOPSY-TURVY LAND & GULLIVER'S TRAVELS
  // -------------------------------------------------------------------------
  {
    id: "m7",
    num: 7,
    unit: "Unit 7",
    title: "Topsy-turvy Land & Gulliver's Travels",
    subtitle: "Nonsense verse by H.E. Wilkinson & Jonathan Swift's Brobdingnag adventure",
    concepts: [
      "Poem 'Topsy-turvy Land': A whimsical inverted world where people walk on their heads, the sea is made of sand, children go to school at night, buses sail upon water, and you pay for things you never receive.",
      "Prose 'Gulliver's Travels': Lemuel Gulliver lands on the shores of Brobdingnag, a land inhabited by 60-foot-tall human giants.",
      "Sensory Perspective & Scale: Gulliver is plucked from a wheat field like a tiny beetle; placed on a dining table where a cat three times larger than an ox purrs like a dozen stocking weavers.",
      "Courage under Trial: Gulliver demonstrates poise, defending himself against an infant who tries to put his head into its mouth and bowing politely to the giant farmer's family.",
      "Grammar & Usage: Degrees of comparison (big, bigger, biggest), punctuation of complex direct speech."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Gulliver in Brobdingnag: The Land of Colossal Giants</text>
      <circle cx="85" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🌾</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Giant Cornfield</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Corn stalks 40ft high</text>
      <path d="M125 85 L180 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🤏</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Plucked Up</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Farmer lifts him up</text>
      <path d="M265 85 L320 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🐱</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e3a8a" text-anchor="middle">Giant Cat</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Purrs like 12 weavers</text>
      <path d="M405 85 L460 85" stroke="#93c5fd" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🛡️</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Gulliver Bows</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Courage and dignity</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (Topsy-turvy Land)",
        q: "In what ways is Topsy-turvy Land completely opposite to our normal everyday world? Mention four distinct inversions.",
        marks: 4,
        ans: `In Topsy-turvy Land:
        <ol>
          <li><strong>Walking Style:</strong> People walk upside down on their heads instead of their feet.</li>
          <li><strong>Nature of Oceans:</strong> The sea is composed of dry sand, while children travel to school during the dark night.</li>
          <li><strong>Transportation:</strong> Buses sail upon water, while boats travel up and down street roads.</li>
          <li><strong>Commerce:</strong> People wear hats upon their feet, and you are forced to pay for items you never receive!</li>
        </ol>`,
        rubric: [
          { key: "People walk on heads & school at night", marks: "2 Marks" },
          { key: "Buses on water & paying for unreceived items", marks: "2 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Gulliver's Travels)",
        q: "Why did the captain send the longboat of sailors ashore, and why did they desperately row back to the ship without Gulliver?",
        marks: 3,
        ans: "The captain sent the crew ashore with water casks to search for fresh drinking water. While Gulliver walked inland to explore the terrain, the men discovered a colossal sixty-foot giant pursuing them into the sea, prompting them to leap into their boat and row away frantically for their lives, inadvertently leaving Gulliver stranded.",
        rubric: [
          { key: "Sent ashore to fetch fresh drinking water", marks: "1.5 Marks" },
          { key: "Fled in terror when chased by a sixty-foot giant", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Gulliver's Travels)",
        q: "How did the giant farmer treat Gulliver when he discovered him hidden in the barley field?",
        marks: 2,
        ans: "The giant farmer did not crush him; instead, he picked Gulliver up gently between his thumb and forefinger, placed him safely in the pocket of his coat, and carried him home to show him with curious delight to his wife and household.",
        rubric: [
          { key: "Picked him gently between thumb and forefinger", marks: "1 Mark" },
          { key: "Carried him home safely to show his family", marks: "1 Mark" }
        ]
      },
      {
        category: "Let us Learn Grammar • Degrees of Comparison",
        q: "Complete the table with the comparative and superlative degrees of the adjectives:<br>(a) fast, (b) noisy, (c) large, (d) dangerous.",
        marks: 3,
        ans: `<ul>
          <li>(a) fast &rarr; <strong>faster</strong> &rarr; <strong>fastest</strong></li>
          <li>(b) noisy &rarr; <strong>noisier</strong> &rarr; <strong>noisiest</strong></li>
          <li>(c) large &rarr; <strong>larger</strong> &rarr; <strong>largest</strong></li>
          <li>(d) dangerous &rarr; <strong>more dangerous</strong> &rarr; <strong>most dangerous</strong></li>
        </ul>`,
        rubric: [
          { key: "Correct regular forms (fast, large)", marks: "1.5 Marks" },
          { key: "Correct irregular/adverb forms (noisy, dangerous)", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Gulliver's Travels)",
        q: "State whether the following statements are True or False:<br>(i) The giant farmer was an evil monster who wanted to kill and eat Gulliver.<br>(ii) A one-year-old giant baby grabbed Gulliver and put his head into its mouth.<br>(iii) Gulliver fell into the ocean while running away from the giant cat.<br>(iv) The farmer's wife placed Gulliver on her own bed and covered him with a clean handkerchief.",
        marks: 3,
        ans: `<ul>
          <li><strong>(i) False:</strong> The farmer was kind and inquisitive; he carried Gulliver home safely to show his family.</li>
          <li><strong>(ii) True:</strong> The giant infant seized Gulliver and stuffed his head into its mouth until the mother rushed to the rescue.</li>
          <li><strong>(iii) False:</strong> Gulliver did not fall into the ocean; he stood his ground and walked politely past the purring cat.</li>
          <li><strong>(iv) True:</strong> The farmer's wife gently placed Gulliver upon her soft bed and covered him with a handkerchief to sleep.</li>
        </ul>`,
        rubric: [
          { key: "Statements (i) & (ii) evaluated accurately", marks: "1.5 Marks" },
          { key: "Statements (iii) & (iv) evaluated accurately", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Word Building & Punctuation",
        q: "Punctuate the following sentences correctly from Gulliver's Travels:<br>(a) i cried as loud as i could and pulled out my sword<br>(b) why did you bring this tiny creature into our house asked the farmer's wife",
        marks: 2,
        ans: `<ul>
          <li>(a) <em>"I cried as loud as I could, and pulled out my sword."</em></li>
          <li>(b) <em>"Why did you bring this tiny creature into our house?" asked the farmer's wife.</em></li>
        </ul>`,
        rubric: [
          { key: "Capitalization and quotation punctuation for (a)", marks: "1 Mark" },
          { key: "Question mark, quotes, and comma for (b)", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Perspective, Empathy & Treatment of Vulnerable Creatures",
      text: "When Gulliver found himself in the land of giants, he experienced firsthand the vulnerability, terror, and helplessness that tiny insects like ants, beetles, and frogs feel when handled carelessly by human beings.",
      question: "How does experiencing a shift in physical scale cultivate empathy towards animals and weaker sections of society? Propose two everyday ways students can show kindness to small creatures.",
      answer: `<strong>The Morality of Perspective & Compassion:</strong>
      <ol>
        <li><strong>Empathy through Role Reversal:</strong> Gulliver's terror of the giant baby's hand and the towering cat demonstrates that power and size are purely relative. When students realize how terrifying a human shoe appears to an earthworm, it dissolves careless cruelty.</li>
        <li><strong>Practice 1 — Humane Insect Relocation:</strong> Instead of stepping on spiders or honeybees that wander indoors, gently trap them under an inverted tumbler, slide paper beneath, and release them outdoors.</li>
        <li><strong>Practice 2 — Summer Bird Water Stations:</strong> Keep shallow earthen bowls filled with clean drinking water on balconies and windowsills during scorching months to protect exhausted birds and squirrels.</li>
      </ol>`,
      rubric: "1.5 Marks for articulating scale-based empathy + 3.5 Marks for 2 practical compassionate habits (gentle insect relocation, water bowls) = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 8: NOBODY'S FRIEND & THE LITTLE BULLY
  // -------------------------------------------------------------------------
  {
    id: "m8",
    num: 8,
    unit: "Unit 8",
    title: "Nobody's Friend & The Little Bully",
    subtitle: "Sharing poem by Enid Blyton & Tale of reform by Enid Blyton",
    concepts: [
      "Poem 'Nobody's Friend': Contrasts selfish children who refuse to share their sweets, tricycles, and books with a generous child who gladly shares half an apple, half a cake, and all toys to make lasting friends.",
      "Prose 'The Little Bully': Hari is a strong, ill-tempered boy whose chief delight is pinching small children hard until they are black and blue and pricking them with needles.",
      "Ostracization: On the annual school seaside picnic train, every single classmate refuses to sit beside Hari, hold his hand, or share sandwiches.",
      "The Natural Retribution: At a rocky pool, giant sea crabs, lobsters, and shrimps pinch and nip Hari until he screams in agony, making him realize exactly how much pain his pinches inflicted on others.",
      "Moral Transformation: Genuine repentance, shedding cruel habits, and building joyful peer relationships."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">The Little Bully: From Cruel Pincher to Reformed Friend</text>
      <circle cx="85" cy="85" r="32" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🤏</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Cruel Pinches</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Hari hurts classmates</text>
      <path d="M125 85 L180 85" stroke="#fdba74" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🚂</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Left Alone</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">No one sits near him</text>
      <path d="M265 85 L320 85" stroke="#fdba74" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#ffedd5" stroke="#f97316" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">🦞</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7c2d12" text-anchor="middle">Crab Pincer</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#c2410c" text-anchor="middle">Teaches taste of pain</text>
      <path d="M405 85 L460 85" stroke="#fdba74" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">🤝</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">Reformed!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Vows never to pinch</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (Nobody's Friend)",
        q: "Why are the children in the first two stanzas called 'nobody's friend'? What contrasting attitude does the speaker possess in the third stanza?",
        marks: 3,
        ans: "The children in the first two stanzas are 'nobody's friend' because they are intensely selfish: the girl will not share her sweets, lend her book, or let anyone play with her doll; the boy hoards his toffee and will not share his tricycle. In sharp contrast, the speaker in the third stanza is 'everybody's friend' because they cheerfully offer to share half an apple, half a cake, and all their balls and toys.",
        rubric: [
          { key: "Selfish hoarding of sweets, books, dolls & tricycles", marks: "1.5 Marks" },
          { key: "Generous child willing to share food and playthings", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (The Little Bully)",
        q: "Why did all the children in the school dislike Hari? Mention two specific cruel habits he had.",
        marks: 2,
        ans: "All the children disliked Hari because he loved to bully and harass smaller classmates. His two malicious habits were: (1) Pinching children hard until their skin turned bruised and black-and-blue, and (2) Pricking other students with sharp sewing pins.",
        rubric: [
          { key: "Pinching hard until skin was bruised black-and-blue", marks: "1 Mark" },
          { key: "Pricking classmates with sharp pins", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (The Little Bully)",
        q: "How did the sea creatures in the rocky pool teach Hari a life lesson he would never forget?",
        marks: 3,
        ans: "A monster crab, giant lobster, and spiny shrimps crawled out of the sandy pool and gripped Hari's hands and legs with heavy pincers, nipping his flesh until he wept in pain. When Hari realized how agonizing a sharp pinch feels, he understood the suffering he had inflicted on his helpless classmates and vowed never to pinch or hurt another child again.",
        rubric: [
          { key: "Crabs, lobsters & shrimps pinching Hari with heavy pincers", marks: "1.5 Marks" },
          { key: "Experiencing pain firsthand led to empathy and reform", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Let us Learn Grammar • Antonyms",
        q: "Give the opposites of the following words from the chapter:<br>(a) cruel, (b) friend, (c) quiet, (d) hate.",
        marks: 2,
        ans: `<ul>
          <li>(a) cruel &rarr; <strong>kind / gentle</strong></li>
          <li>(b) friend &rarr; <strong>enemy / foe</strong></li>
          <li>(c) quiet &rarr; <strong>noisy / loud</strong></li>
          <li>(d) hate &rarr; <strong>love / admire</strong></li>
        </ul>`,
        rubric: [
          { key: "Correct antonyms for (a) & (b)", marks: "1 Mark" },
          { key: "Correct antonyms for (c) & (d)", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (The Little Bully)",
        q: "Why did Hari go to the lonely rocky pool instead of sitting with his classmates at lunchtime? What delicious items did he pack in his lunch box?",
        marks: 3,
        ans: "Hari walked away to a solitary rocky pool because he was intensely selfish and greedy—he did not want to share a single bite of his lavish picnic lunch with anyone. His lunch box contained: <strong>two hard-boiled eggs, six jam sandwiches, three pieces of buttered bread, a ginger cake, and a rich chocolate bar</strong>.",
        rubric: [
          { key: "Selfishness and desire to avoid sharing food with classmates", marks: "1.5 Marks" },
          { key: "List of lunch items: eggs, jam sandwiches, bread-butter, cake, chocolate", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Word Building & Fill in the Blanks",
        q: "Complete the sentences choosing appropriate words from the story:<br>(a) Hari was a ________ boy who took delight in pinching small kids.<br>(b) The classmates had dark ________ on their arms where Hari pinched them.<br>(c) The teacher ________ Hari when students complained about his bullying.",
        marks: 3,
        ans: `<ul>
          <li>(a) Hari was a <strong>horrid</strong> boy who took delight in pinching small kids.</li>
          <li>(b) The classmates had dark <strong>bruises</strong> on their arms where Hari pinched them.</li>
          <li>(c) The teacher <strong>scolded</strong> Hari when students complained about his bullying.</li>
        </ul>`,
        rubric: [
          { key: "(a) filled with 'horrid'", marks: "1 Mark" },
          { key: "(b) filled with 'bruises'", marks: "1 Mark" },
          { key: "(c) filled with 'scolded'", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Anti-Bullying Policies & Restorative Justice in Schools",
      text: "At an elementary school, repeated punishments like detention failed to stop a fifth-grader named Rohan from pushing smaller kids on the playground, until the school counsellor paired him with younger students to teach them chess.",
      question: "Connecting Rohan's transformation with Hari's awakening in 'The Little Bully', explain why empathy-based restorative intervention is more effective than pure punishment in eliminating bullying.",
      answer: `<strong>Restorative Empathy vs Blind Retributive Punishment:</strong>
      <ol>
        <li><strong>The Inefficacy of Mere Punishment:</strong> Harsh detention or scolding often breeds bitter resentment and drives bullying behavior underground without addressing the child's underlying need for attention or emotional regulation.</li>
        <li><strong>The Power of Experiencing Impact:</strong> Hari only stopped pinching when he felt the physical sting of the crab's pincer. In modern restorative justice, bullies must listen to victims express their emotional hurt in facilitated mediation, triggering genuine human conscience.</li>
        <li><strong>Channeling Leadership Constructively:</strong> Assigning former bullies mentorship responsibilities (like buddying younger peers or leading sports drills) fulfills their desire for recognition through positive nurture rather than intimidation.</li>
      </ol>`,
      rubric: "1.5 Marks for critiquing ineffective punitive measures + 3.5 Marks for explaining restorative empathy and positive mentorship redirection = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 9: SING A SONG OF PEOPLE & AROUND THE WORLD
  // -------------------------------------------------------------------------
  {
    id: "m9",
    num: 9,
    unit: "Unit 9",
    title: "Sing a Song of People & Around the World",
    subtitle: "Rhythmic urban poem by Lois Lenski & Jules Verne's transcontinental railway adventure",
    concepts: [
      "Poem 'Sing a Song of People': The relentless kinetic rush of modern city life; people hurrying through subways, revolving doors, taxis, and sidewalks, holding umbrellas in rain yet remaining isolated in crowds.",
      "Prose 'Around the World in Eighty Days': Phileas Fogg, Passepartout, and Aouda journey across the American continent on the Union Pacific Railroad.",
      "The Medicine Bow Bridge Crisis: The suspension bridge over the torrential river is structurally damaged; the train driver backs up a mile and dashes at top velocity (100 mph) across the creaking bridge just before it collapses into the chasm.",
      "The Sioux Attack & Sledge Ride: Defending the train against Native American arrows, detaching the locomotive, and racing over frozen snow on a sail-propelled sledge to Omaha.",
      "Themes & Grammar: Courage under technological crisis, urban vs rural pace, sequence of narrative events."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Around the World: The Daring Medicine Bow Bridge Leap</text>
      <circle cx="85" cy="85" r="32" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">🛑</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Red Signal</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#475569" text-anchor="middle">Bridge rickety & broken</text>
      <path d="M125 85 L180 85" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🔙</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a" text-anchor="middle">Backs Up 1 Mile</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#475569" text-anchor="middle">Prepares full throttle</text>
      <path d="M265 85 L320 85" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">⚡</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Full Speed 100mph</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Dashes across bridge</text>
      <path d="M405 85 L460 85" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">💥</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#14532d" text-anchor="middle">Bridge Collapses</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#15803d" text-anchor="middle">Train lands safe on bank</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (Sing a Song of People)",
        q: "Which modes of transport and urban settings are mentioned in the poem 'Sing a Song of People'?",
        marks: 2,
        ans: "The poem mentions city transit including <strong>subway trains beneath the ground, taxicabs, buses, tall building elevators (lifts), and revolving doors</strong>, through which endless crowds hurry back and forth along sidewalks.",
        rubric: [
          { key: "Subways, taxis, and buses listed", marks: "1 Mark" },
          { key: "Elevators, revolving doors & sidewalks listed", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (Around the World in Eighty Days)",
        q: "Why was the train halted near Medicine Bow station, and what bold strategy did the engine driver adopt to cross the suspension bridge?",
        marks: 4,
        ans: `The train was halted because a red signal warned that the suspension bridge over Medicine Bow river had broken wires and was condemned to collapse under heavy load.
        <ul>
          <li><strong>The Bold Plan:</strong> The driver backed the train up a full mile along the track.</li>
          <li><strong>Maximum Acceleration:</strong> He opened the throttle to full steam, accelerating the locomotive to an astonishing 100 miles per hour.</li>
          <li><strong>The Leap:</strong> The train crossed the chasm so swiftly that its weight had barely touched the rails before the entire bridge plunged into the churning torrent behind them, landing all passengers safely on the opposite bank!</li>
        </ul>`,
        rubric: [
          { key: "Reason: Damaged suspension bridge with broken wires", marks: "1 Mark" },
          { key: "Driver backed up 1 mile for runway", marks: "1 Mark" },
          { key: "Accelerated to 100 mph to cross before collapse", marks: "2 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Around the World in Eighty Days)",
        q: "How did Passepartout display extraordinary bravery during the attack on the train?",
        marks: 3,
        ans: "During the chaotic attack when warriors jumped onto the train and overpowered the driver, the uncontrolled engine was speeding directly towards a fortified fort. Passepartout bravely crawled underneath the jolting carriages, uncoupled the raging locomotive engine from the passenger cars, and brought the runaway train to a safe halt near Fort Kearney.",
        rubric: [
          { key: "Crawling beneath moving railcars", marks: "1.5 Marks" },
          { key: "Uncoupling locomotive to halt runaway train safely", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Let us Learn Grammar • Sequence of Events",
        q: "Arrange the following events from 'Around the World' in correct chronological sequence (1 to 4):<br>(a) The bridge collapsed into the river.<br>(b) The signalman warned that the bridge was weak.<br>(c) The train sped across the gorge at maximum velocity.<br>(d) The driver reversed the engine one mile back.",
        marks: 2,
        ans: `<ol>
          <li><strong>(b)</strong> The signalman warned that the bridge was weak.</li>
          <li><strong>(d)</strong> The driver reversed the engine one mile back.</li>
          <li><strong>(c)</strong> The train sped across the gorge at maximum velocity.</li>
          <li><strong>(a)</strong> The bridge collapsed into the river.</li>
        </ol>`,
        rubric: [
          { key: "First two steps correct: (b) -> (d)", marks: "1 Mark" },
          { key: "Final two steps correct: (c) -> (a)", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Poem (Sing a Song of People)",
        q: "Contrast how people move and behave in the city when it rains versus when the sun shines bright, as depicted in the poem.",
        marks: 3,
        ans: "When it pours with rain, city pedestrians hurry along sidewalks under dark, dripping umbrellas held tightly over their heads, faces lowered to avoid the cold spray. When the bright sun shines, the crowds pour out of skyscrapers, shops, and doors onto sunny sidewalks, yet still rush past at top speed without stopping or looking at their fellow citizens.",
        rubric: [
          { key: "Rainy scene: hurrying with umbrellas held low", marks: "1.5 Marks" },
          { key: "Sunny scene: pouring from doors, still rushing past hurriedly", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Word Building & Matching Pairs",
        q: "Match the urban transport terms from the poem with their correct operational descriptions:<br>(1) Subway &bull; (2) Revolving door &bull; (3) Elevator &bull; (4) Sidewalk",
        marks: 4,
        ans: `<ul>
          <li><strong>(1) Subway:</strong> Underground electric railway network running beneath city streets.</li>
          <li><strong>(2) Revolving door:</strong> Circular rotating glass door that permits continuous pedestrian entry while preventing wind drafts.</li>
          <li><strong>(3) Elevator (Lift):</strong> Mechanical enclosed platform carrying passengers vertically between floors of skyscrapers.</li>
          <li><strong>(4) Sidewalk (Footpath):</strong> Paved designated walkway along the side of streets for pedestrians.</li>
        </ul>`,
        rubric: [
          { key: "Subway & Revolving door accurately matched", marks: "2 Marks" },
          { key: "Elevator & Sidewalk accurately matched", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Urban Loneliness vs Connected Communities",
      text: "Lois Lenski describes city crowds where millions of people walk shoulder-to-shoulder on busy sidewalks and subways, yet never look at or smile at each other, creating an environment of deep urban isolation despite intense physical proximity.",
      question: "Contrast the social connectedness of traditional village life with modern city routines. Suggest two daily practices urban residents can adopt to build warm neighborhood communities.",
      answer: `<strong>Bridging Urban Isolation with Human Connection:</strong>
      <ol>
        <li><strong>Urban Proximity vs Village Bonding:</strong> In rural communities, citizens share interdependent relationships, knowing neighbors by name and celebrating festivals together. In high-density cities, sensory overload causes people to put up emotional walls, staring at phone screens in elevators rather than acknowledging fellow humans.</li>
        <li><strong>Practice 1 — The 'Warm Micro-Greeting':</strong> Make it a daily rule to offer a cheerful 'Good Morning' and warm eye contact to building security guards, delivery personnel, and floor neighbors in elevators.</li>
        <li><strong>Practice 2 — Neighborhood Balcony Gardens & Book Exchanges:</strong> Establish small community book sharing shelves or common herb planter boxes in apartment corridors to spark natural, informal doorstep conversations.</li>
      </ol>`,
      rubric: "1.5 Marks for contrasting urban isolation with rural bonding + 3.5 Marks for 2 practical community-building practices = 5 Marks"
    }
  },

  // -------------------------------------------------------------------------
  // UNIT 10: MALU BHALU & WHO WILL BE NINGTHOU?
  // -------------------------------------------------------------------------
  {
    id: "m10",
    num: 10,
    unit: "Unit 10",
    title: "Malu Bhalu & Who Will be Ningthou?",
    subtitle: "Arctic polar bear verse by Kamla Bhasin & Manipuri folk tale on benevolent leadership",
    concepts: [
      "Poem 'Malu Bhalu': A young, adventurous female polar bear living in an icy lair learns to catch fish, longs to explore beyond the blue sky, and conquers her initial fear of swimming with her mother's patient encouragement.",
      "Prose 'Who Will be Ningthou?': The beloved King (Ningthou) and Queen (Leima) of Kangleipak (Manipur) must choose an heir to the throne.",
      "The Flawed Contest: The three adult princes display raw physical prowess—jumping their horses clear over a historic Khongnang (banyan tree), but in doing so, they pierce and kill the sacred tree.",
      "The True Leader: Five-year-old Princess Sanatombi weeps for the dying tree and the crushed birds; the king crowns her Leima because a true ruler feels the pain of every person, animal, bird, and tree in the realm.",
      "Themes & Grammar: Gender equality, ecological stewardship, compassionate leadership, past tense verbs."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">Who Will be Ningthou? Compassion over Brute Force</text>
      <circle cx="85" cy="85" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
      <text x="85" y="80" font-size="18" text-anchor="middle">👑</text>
      <text x="85" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Kangleipak</text>
      <text x="85" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#059669" text-anchor="middle">Ningthou & Leima rule</text>
      <path d="M125 85 L180 85" stroke="#6ee7b7" stroke-width="2"/>
      <circle cx="225" cy="85" r="32" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="225" y="80" font-size="18" text-anchor="middle">🏇</text>
      <text x="225" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Princes' Leap</text>
      <text x="225" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Pierces sacred banyan</text>
      <path d="M265 85 L320 85" stroke="#6ee7b7" stroke-width="2"/>
      <circle cx="365" cy="85" r="32" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="365" y="80" font-size="18" text-anchor="middle">😢</text>
      <text x="365" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Sanatombi Weeps</text>
      <text x="365" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">Mourns wounded nature</text>
      <path d="M405 85 L460 85" stroke="#6ee7b7" stroke-width="2"/>
      <circle cx="500" cy="85" r="34" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
      <text x="500" y="80" font-size="18" text-anchor="middle">👸</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">Crown Leima!</text>
      <text x="500" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">True leader protects life</text>
    </svg>`,
    questions: [
      {
        category: "Reading is Fun • Poem (Malu Bhalu)",
        q: "Where did Malu Bhalu live, and what skills did she learn from her parents?",
        marks: 2,
        ans: "Malu Bhalu was a white polar bear cub who lived high up in an icy lair in the Arctic wilderness. She learned to catch fish from the sea, climb icy rocks, and eventually learned to swim fearlessly in the freezing cold ocean.",
        rubric: [
          { key: "Lived in an icy lair in the Arctic", marks: "1 Mark" },
          { key: "Learned catching fish and fearless swimming", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Poem (Malu Bhalu)",
        q: "How did Malu's mother help her overcome her initial fear of swimming?",
        marks: 2,
        ans: "When Malu worried that she had never swum before, her mother gently held her hand, offered warm reassurance, jumped into the water beside her, and guided her step-by-step until Malu found that swimming came completely naturally to her.",
        rubric: [
          { key: "Gentle motherly reassurance and holding hands", marks: "1 Mark" },
          { key: "Jumping into the water with her to model confidence", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (Who Will be Ningthou?)",
        q: "Why did the people of Kangleipak love their Ningthou and Leima so deeply?",
        marks: 2,
        ans: "The people loved their King and Queen because they ruled selflessly, desiring only that their citizens live in peace, happiness, and prosperity (Meeyam Nungshi). Furthermore, they extended their royal protection to birds, animals, and trees throughout the kingdom.",
        rubric: [
          { key: "Selfless rule for peace and prosperity of people", marks: "1 Mark" },
          { key: "Protection extended to birds, animals, and nature", marks: "1 Mark" }
        ]
      },
      {
        category: "Reading is Fun • Story (Who Will be Ningthou?)",
        q: "What horse-riding contest did the three princes participate in, and why did their victory hurt the Khongnang (banyan tree)?",
        marks: 3,
        ans: "The King held a contest where the three princes rode their horses at breakneck speed and leaped directly over the massive, ancient Khongnang (banyan tree). However, in their aggressive urge to display brute power, their horses' hooves snapped branches, ripped bark, and pierced the sacred tree, leaving it wounded and dying.",
        rubric: [
          { key: "Horseback leap over the historic Khongnang tree", marks: "1.5 Marks" },
          { key: "Broken branches, ripped bark, and wounded tree dying", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Reading is Fun • Story (Who Will be Ningthou?)",
        q: "Why did the Ningthou choose five-year-old Sanatombi as the next Leima instead of her elder brothers?",
        marks: 4,
        ans: `The Ningthou crowned Sanatombi because she demonstrated the highest attribute of leadership: <strong>universal empathy</strong>:
        <ul>
          <li><strong>Mourning Nature:</strong> While the three princes celebrated their athletic feat, Sanatombi stood crying softly with her hand on the injured banyan tree, mourning the broken branches and the homeless birds fluttering helplessly.</li>
          <li><strong>The True Definition of a Ruler:</strong> The King proclaimed: <em>'A Leima is one who doesn't hurt anybody in the kingdom. A true ruler feels the pain of the people, the animals, the birds, and the trees.'</em></li>
        </ul>`,
        rubric: [
          { key: "Empathy for wounded tree and homeless birds", marks: "2 Marks" },
          { key: "King's philosophy: A true ruler feels the pain of all living beings", marks: "2 Marks" }
        ]
      },
      {
        category: "Let us Learn Grammar • Past Tense Action Words",
        q: "Write the past tense forms of the following action verbs from the story:<br>(a) ride, (b) leap, (c) weep, (d) crown, (e) pierce.",
        marks: 2,
        ans: `<ul>
          <li>(a) ride &rarr; <strong>rode</strong></li>
          <li>(b) leap &rarr; <strong>leaped / leapt</strong></li>
          <li>(c) weep &rarr; <strong>wept</strong></li>
          <li>(d) crown &rarr; <strong>crowned</strong></li>
          <li>(e) pierce &rarr; <strong>pierced</strong></li>
        </ul>`,
        rubric: [
          { key: "Irregular past forms (rode, wept, leapt)", marks: "1 Mark" },
          { key: "Regular past forms (crowned, pierced)", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Ecological Empathy & Compassionate Democratic Leadership",
      text: "Modern environmental crises, such as urban deforestation and wildlife habitat loss, are often accelerated by leaders who prioritize short-term physical infrastructure expansion over ecological conservation.",
      question: "Synthesizing the core moral of 'Who Will be Ningthou?', formulate three constitutional principles of ecological leadership that modern student councils and civic leaders should adopt.",
      answer: `<strong>Three Principles of Ecological & Compassionate Leadership:</strong>
      <ol>
        <li><strong>Nature as a Sovereign Stakeholder:</strong> True leadership expands its duty of care beyond human voters to encompass local trees, urban wildlife, and water bodies. No project should be celebrated if it damages the living ecosystem.</li>
        <li><strong>Compassion Over Brute Display:</strong> Modern leaders must measure success by how well they protect vulnerable, voiceless citizens (and urban biodiversity) rather than displaying aggressive authority or grand spectacle.</li>
        <li><strong>Gender-Inclusive Governance:</strong> Just as Ningthou bypassed traditional patriarchal primogeniture to crown the empathetic Sanatombi, educational and civic bodies must promote female leadership driven by emotional intelligence and inclusive stewardship.</li>
      </ol>`,
      rubric: "1.5 Marks for connecting Sanatombi's empathy to environmental governance + 3.5 Marks for 3 leadership principles (ecological care, empathy over force, inclusive governance) = 5 Marks"
    }
  }
];

module.exports = { marigoldUnits };
