// Official NCERT Class 4 English (Santoor) Complete Dataset - Chapters 1 to 12
// Aligned with New NEP 2020 Curriculum (CBSE 2026-27 Session)

const santoorChapters = [
  // -------------------------------------------------------------------------
  // CHAPTER 1: TOGETHER WE CAN
  // -------------------------------------------------------------------------
  {
    id: "st1",
    num: 1,
    unit: "Unit 1: My Land",
    title: "Together We Can",
    subtitle: "Inspirational Poem on Teamwork, Unity, Community Cooperation & National Progress",
    concepts: [
      "The power of collective effort: how small individual actions combine to achieve great things.",
      "Metaphor of drops of water forming a mighty ocean and grains of sand creating pleasant land.",
      "Appreciating cultural diversity and working hand-in-hand for societal welfare.",
      "Poetic devices: rhyming words, rhythm, and motivational theme."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Together We Can — Unity & Collective Progress</text>
      <!-- Individual Hands / People -->
      <circle cx="120" cy="80" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="120" y="85" font-size="20" text-anchor="middle">🤝</text>
      <text x="120" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Little Deeds</text>
      <line x1="150" y1="80" x2="220" y2="80" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="3,3"/>
      <circle cx="260" cy="80" r="32" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="260" y="85" font-size="22" text-anchor="middle">🌱</text>
      <text x="260" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Shared Kindness</text>
      <line x1="295" y1="80" x2="365" y2="80" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="3,3"/>
      <circle cx="410" cy="80" r="36" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2.5"/>
      <text x="410" y="86" font-size="24" text-anchor="middle">🌟</text>
      <text x="410" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e3a8a" text-anchor="middle">Mighty Nation</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">"Little drops of water, little grains of sand, make the mighty ocean and the pleasant land."</text>
    </svg>`,
    questions: [
      {
        category: "Reading Comprehension • Poetic Analysis",
        q: "What makes the mighty ocean according to the poem 'Together We Can'? How does the poet compare small acts of kindness to nature's elements?",
        ans: `According to the poem, <strong>little drops of water</strong> come together to form the mighty ocean, and tiny grains of sand combine to make the pleasant, fertile land.<br><br>
The poet uses these natural examples to illustrate that no deed of kindness or cooperation is ever too small. Just as countless tiny drops create an immense ocean, small individual acts of love, honesty, and helpfulness by citizens join together to make our communities happy and our country great and prosperous.`,
        marks: 3,
        rubric: [
          { key: "Mentions little drops of water and grains of sand", marks: "1.5 M" },
          { key: "Explains metaphor of individual kindness building a mighty society", marks: "1.5 M" }
        ]
      },
      {
        category: "Vocabulary & Rhyming Words",
        q: "Find pairs of rhyming words from the poem and use each in an original sentence: (a) Sand - Land, (b) Make - Take, (c) Love - Above.",
        ans: `<strong>(a) Sand - Land:</strong><br>
• <em>Sand:</em> The children built high castles with wet sand on the beach.<br>
• <em>Land:</em> India is a blessed land of rivers, mountains, and colorful traditions.<br><br>
<strong>(b) Make - Take:</strong><br>
• <em>Make:</em> Hard work and patience make all our dreams come true.<br>
• <em>Take:</em> We should always take care of our grandparents when they are unwell.<br><br>
<strong>(c) Love - Above:</strong><br>
• <em>Love:</em> A mother's unconditional love brings comfort to the family.<br>
• <em>Above:</em> The bright morning sun shone high above the green hills.`,
        marks: 3,
        rubric: [
          { key: "Identifies correct rhyming pairs", marks: "1.5 M" },
          { key: "Constructs grammatically accurate contextual sentences", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Classroom Cleanliness Drive Cooperation",
      text: "During the Swachh Bharat hour, some students refuse to pick up dry paper wrappers because 'someone else dropped them'. The class monitor recites lines from 'Together We Can'.",
      question: "How does the message of the poem help resolve this conflict? What should the students do?",
      answer: "The poem teaches that when everyone contributes a tiny bit of effort, massive tasks become effortless. Instead of arguing about who dropped the waste, every student should pick up two pieces of paper. Within two minutes, the entire classroom becomes spotless. This proves that cooperation transforms community spaces.",
      rubric: "1.5 Marks for connecting poem's theme; 1.5 Marks for practical cooperative resolution."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 2: THE TINKLING BELLS
  // -------------------------------------------------------------------------
  {
    id: "st2",
    num: 2,
    unit: "Unit 1: My Land",
    title: "The Tinkling Bells",
    subtitle: "Heartwarming Village Story of Rural Cattle Care, Traditional Bells & Animal Empathy",
    concepts: [
      "The role of domestic cattle in Indian agricultural life and rural traditions.",
      "Traditional brass cattle bells (ghungroos) used by farmers to locate their animals in meadows.",
      "Empathy and affection between a village boy and his pet calf.",
      "Understanding that caring for animals is an integral aspect of Indian cultural ethos."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">The Tinkling Bells — Village Pasture & Pet Calf Connection</text>
      <!-- Pasture -->
      <path d="M50 120 Q180 90 290 115 T530 110" fill="none" stroke="#65a30d" stroke-width="3"/>
      <!-- Bell -->
      <g transform="translate(290, 75)">
        <path d="M-15 15 C-15 -15 15 -15 15 15 Z" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
        <line x1="0" y1="15" x2="0" y2="22" stroke="#a16207" stroke-width="3"/>
        <circle cx="0" cy="22" r="3" fill="#a16207"/>
        <circle cx="0" cy="-18" r="4" fill="none" stroke="#ca8a04" stroke-width="2"/>
      </g>
      <text x="290" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#a16207" text-anchor="middle">Tinkle... Tinkle!</text>
      <text x="140" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#4d7c0f" text-anchor="middle">Boy hears bell in forest</text>
      <text x="440" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#4d7c0f" text-anchor="middle">Calf found safe near brook</text>
    </svg>`,
    questions: [
      {
        category: "Story Comprehension",
        q: "Why did the farmer tie tinkling brass bells around the neck of his cattle? How did the sound of the bell help Ramu find his lost calf?",
        ans: `The farmer tied sweet-sounding brass bells around the neck of his cattle for two important reasons:<br>
1. To easily identify and track their location when they graze in deep village pastures and forested hills.<br>
2. As a mark of affection and traditional celebration during harvest festivals.<br><br>
When Ramu's calf strayed away at sunset, darkness had begun to fall. Ramu stopped and listened attentively. In the quiet evening breeze, he recognized the familiar rhythmic <em>'ting-a-ling'</em> sound of his calf's special bell near the stream, which guided him directly to where the calf was standing safely under a banyan tree.`,
        marks: 3,
        rubric: [
          { key: "States reasons for tying bells to cattle", marks: "1.5 M" },
          { key: "Explains how the distinctive sound guided Ramu in the dusk", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Animal Welfare and Compassion",
      text: "During hot summer afternoons, stray cattle wander around concrete roads searching for drinking water and shade.",
      question: "Based on the values of 'The Tinkling Bells', what two thoughtful steps can school children take in their neighborhood to help domestic animals?",
      answer: "1. Children can place clean earthen or cement water troughs outside their houses and refill them daily with cool fresh water.<br>2. They can organize leftover fresh vegetable peels and clean green grass to feed stray cattle rather than dumping food inside plastic bags.",
      rubric: "1.5 Marks for water bowl suggestion; 1.5 Marks for safe green fodder practice."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 3: BE SMART, BE SAFE
  // -------------------------------------------------------------------------
  {
    id: "st3",
    num: 3,
    unit: "Unit 1: My Land",
    title: "Be Smart, Be Safe",
    subtitle: "Essential Road Safety Rules, Pedestrian Zebra Crossings, Traffic Signals & Personal Safety",
    concepts: [
      "The meaning of traffic signal colors: Red (Stop), Amber/Yellow (Wait/Get Ready), Green (Go).",
      "Using designated zebra crossings, footbridges, and pedestrian subways to cross busy city roads.",
      "The safety drill: 'Stop, Look Left, Look Right, and Look Left Again' before stepping onto the tarmac.",
      "Wearing helmets while riding two-wheelers and fastening seat belts in cars."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Be Smart, Be Safe — Traffic Signal Rules & Zebra Crossing</text>
      <!-- Traffic Light Box -->
      <rect x="80" y="45" width="40" height="90" fill="#1e293b" rx="8"/>
      <circle cx="100" cy="62" r="10" fill="#ef4444"/>
      <circle cx="100" cy="90" r="10" fill="#f59e0b"/>
      <circle cx="100" cy="118" r="10" fill="#10b981"/>
      <text x="145" y="66" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626">RED: Stop</text>
      <text x="145" y="94" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#d97706">YELLOW: Wait</text>
      <text x="145" y="122" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#059669">GREEN: Go</text>
      <!-- Road & Zebra Crossing -->
      <rect x="260" y="55" width="260" height="70" fill="#334155" rx="6"/>
      <line x1="280" y1="65" x2="280" y2="115" stroke="#ffffff" stroke-width="12"/>
      <line x1="320" y1="65" x2="320" y2="115" stroke="#ffffff" stroke-width="12"/>
      <line x1="360" y1="65" x2="360" y2="115" stroke="#ffffff" stroke-width="12"/>
      <line x1="400" y1="65" x2="400" y2="115" stroke="#ffffff" stroke-width="12"/>
      <line x1="440" y1="65" x2="440" y2="115" stroke="#ffffff" stroke-width="12"/>
      <line x1="480" y1="65" x2="480" y2="115" stroke="#ffffff" stroke-width="12"/>
      <text x="390" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#475569" text-anchor="middle">Zebra Crossing: Safe Pedestrian Route</text>
    </svg>`,
    questions: [
      {
        category: "Safety Rules & Drill",
        q: "What is the four-step safety drill that students must follow before crossing a street? Why is it dangerous to run across the road suddenly?",
        ans: `<strong>The Four-Step Safety Drill:</strong><br>
1. <strong>STOP:</strong> Stand firmly on the pavement curb well away from the moving traffic edge.<br>
2. <strong>LOOK RIGHT:</strong> Check for oncoming vehicles from the driver's approaching side.<br>
3. <strong>LOOK LEFT:</strong> Check for vehicles approaching from the opposite lane.<br>
4. <strong>LOOK RIGHT AGAIN:</strong> Confirm the road is still clear, and walk straight across calmly.<br><br>
<strong>Why running across is dangerous:</strong><br>
Running can cause a student to trip and fall onto the roadway. Furthermore, drivers cannot predict sudden darting movements and may not have sufficient braking distance to stop their vehicles in time. Always walk steadily and watchfully.`,
        marks: 3,
        rubric: [
          { key: "Accurately lists the 4 steps (Stop, Look Right, Look Left, Look Right Again)", marks: "2.0 M" },
          { key: "Explains braking distance and tripping risks of running", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "School Gate Traffic Awareness",
      text: "At 2:00 pm, schools disperse and many children rush across the main road without waiting for the crossing guard's whistle.",
      question: "Design a catchy 4-line safety slogan that the student council can paint on the school exit board.",
      answer: "<em>'Red says Stop, Green says Go,<br>Cross where zebra stripes show.<br>Look both ways and never run,<br>Safety first for everyone!'</em>",
      rubric: "1.5 Marks for rhythm and rhyme; 1.5 Marks for highlighting zebra crossing and looking both ways."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: ONE THING AT A TIME
  // -------------------------------------------------------------------------
  {
    id: "st4",
    num: 4,
    unit: "Unit 2: My Beautiful World",
    title: "One Thing at a Time",
    subtitle: "Classic Poem by M.A. Stodart on Concentration, Diligence & Meaningful Living",
    concepts: [
      "The principle of deep focus: doing one task with full heart and mind before moving to the next.",
      "Balancing work and play: 'Work while you work, play while you play, that is the way to be happy and gay.'",
      "Avoiding half-done tasks: 'Things done by halves are never done right.'",
      "Valuing fleeting moments: making good use of every golden minute."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">One Thing at a Time — The Golden Rule of Work and Play</text>
      <!-- Work Box -->
      <rect x="80" y="55" width="180" height="65" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="8"/>
      <text x="170" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#14532d" text-anchor="middle">Work While You Work</text>
      <text x="170" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#15803d" text-anchor="middle">Give your whole heart to study</text>
      <!-- Play Box -->
      <rect x="320" y="55" width="180" height="65" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="8"/>
      <text x="410" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#14532d" text-anchor="middle">Play While You Play</text>
      <text x="410" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#15803d" text-anchor="middle">Enjoy games with joyful spirit</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#166534" text-anchor="middle">"One thing each time, and that done well, is a very good rule, as many can tell."</text>
    </svg>`,
    questions: [
      {
        category: "Poem Explanation & Moral Insight",
        q: "What does the poet mean by 'Things done by halves are never done right'? How can a student apply this rule during home study?",
        ans: `The phrase means that if we attempt a task with half-hearted effort or split attention (like studying while watching television or checking a phone), the work will always remain incomplete, full of mistakes, and lacking quality.<br><br>
<strong>Application to Home Study:</strong><br>
A student should establish a quiet study zone without gadgets. When doing maths homework, dedicate full mental focus for 45 uninterrupted minutes. Once the homework is finished to perfection, the student can go out to play sports freely with a relaxed and satisfied mind.`,
        marks: 3,
        rubric: [
          { key: "Explains meaning of 'done by halves'", marks: "1.5 M" },
          { key: "Gives realistic study habit application", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Overcoming Distraction During Exam Preparation",
      text: "Aman sits with his science book open but constantly chats with his brother and glances at his mobile screen every two minutes. After two hours, he cannot recall a single definition.",
      question: "Identify Aman's mistake using the message of 'One Thing at a Time' and suggest a disciplined remedy.",
      answer: "Aman is guilty of divided attention ('doing things by halves'). Remedy: Put the mobile in another room, close the door, and set a timer for 30 minutes of silent reading. Focusing entirely on one page at a time will allow him to learn thoroughly in a fraction of the time.",
      rubric: "1.5 Marks for identifying divided focus; 1.5 Marks for single-task study strategy."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 5: THE OLD STAG
  // -------------------------------------------------------------------------
  {
    id: "st5",
    num: 5,
    unit: "Unit 2: My Beautiful World",
    title: "The Old Stag",
    subtitle: "Aesop's Fable on False Vanity, True Utility, Humility & Life Values",
    concepts: [
      "The classic moral tale: a stag admires his magnificent branching antlers but despises his thin, spindly legs.",
      "The crisis: a pack of hunting hounds chases the stag through the forest.",
      "His slender legs carry him swiftly to safety, but his grand antlers get entangled in thick overhead tree branches.",
      "Moral lesson: We often value superficial beauty that can harm us, while despising practical strengths that protect our lives."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">The Old Stag — Vanity vs. True Strength</text>
      <!-- Antlers Box -->
      <rect x="70" y="55" width="200" height="65" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="8"/>
      <text x="170" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#78350f" text-anchor="middle">Magnificent Antlers</text>
      <text x="170" y="98" font-family="system-ui, sans-serif" font-size="10" fill="#b45309" text-anchor="middle">Praised for beauty</text>
      <text x="170" y="112" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#dc2626" text-anchor="middle">➔ Trapped him in bushes!</text>
      <!-- Legs Box -->
      <rect x="310" y="55" width="200" height="65" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="8"/>
      <text x="410" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#78350f" text-anchor="middle">Slender Swift Legs</text>
      <text x="410" y="98" font-family="system-ui, sans-serif" font-size="10" fill="#b45309" text-anchor="middle">Despised for thinness</text>
      <text x="410" y="112" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#16a34a" text-anchor="middle">➔ Saved him from hounds!</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Moral: What is truly valuable is often plain and unpraised.</text>
    </svg>`,
    questions: [
      {
        category: "Story Analysis & Character Evolution",
        q: "Why was the stag proud of his horns but ashamed of his legs? How did his feelings change after escaping from the hunters?",
        ans: `When the stag looked at his reflection in a clear forest pool, he was enchanted by his grand, branching antlers, comparing them to a royal crown. However, when he looked down at his long, thin, spindly legs, he felt deeply disappointed and ashamed, thinking they ruined his majestic appearance.<br><br>
When a pack of hunting dogs attacked, his swift legs carried him across the open plain like the wind. But as he rushed into the dense woods, his grand antlers got tangled in the low hanging branches, trapping him until he struggled free. He realized with deep humility that the slender legs he despised had saved his life, while the ornate horns he worshipped almost caused his death.`,
        marks: 3,
        rubric: [
          { key: "Describes reflection at the pool and vanity", marks: "1.5 M" },
          { key: "Explains realization in the woods (legs saved him, horns trapped him)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Appreciating Inner Skills over Outer Appearance",
      text: "In a school debate, a student wears ordinary worn-out shoes but presents extraordinary arguments and scientific facts, winning the gold trophy.",
      question: "How does the story of 'The Old Stag' relate to this real-life school event?",
      answer: "The fable teaches that external glamour is superficial. Just as the stag's plain legs held real speed and power, the student's plain shoes did not diminish their brilliant intellect. True merit lies in competence, character, and usefulness, not in expensive showy attire.",
      rubric: "1.5 Marks for relating fable to real-life merit; 1.5 Marks for articulation of core value."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: BRAILLE
  // -------------------------------------------------------------------------
  {
    id: "st6",
    num: 6,
    unit: "Unit 2: My Beautiful World",
    title: "Braille",
    subtitle: "Inspirational Biography of Louis Braille & the Revolutionary Tactile Alphabet",
    concepts: [
      "The life of Louis Braille: accidental loss of sight in his father's workshop at age 3 in Coupvray, France.",
      "His brilliant determination at the Royal Institute for Blind Youth in Paris.",
      "Adapting military 'night writing' into an intuitive 6-dot embossed cell system.",
      "How Braille empowers millions of visually challenged people globally to read, write, study music, and code."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Braille — The 6-Dot Raised Cell System</text>
      <!-- Cell Structure -->
      <g transform="translate(120, 48)">
        <rect width="60" height="85" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="6"/>
        <circle cx="20" cy="22" r="6" fill="#1e40af"/>
        <text x="20" y="26" font-family="system-ui, sans-serif" font-size="7" fill="#ffffff" text-anchor="middle">1</text>
        <circle cx="40" cy="22" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="40" y="26" font-family="system-ui, sans-serif" font-size="7" fill="#64748b" text-anchor="middle">4</text>
        <circle cx="20" cy="45" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="20" y="49" font-family="system-ui, sans-serif" font-size="7" fill="#64748b" text-anchor="middle">2</text>
        <circle cx="40" cy="45" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="40" y="49" font-family="system-ui, sans-serif" font-size="7" fill="#64748b" text-anchor="middle">5</text>
        <circle cx="20" cy="68" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="20" y="72" font-family="system-ui, sans-serif" font-size="7" fill="#64748b" text-anchor="middle">3</text>
        <circle cx="40" cy="68" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="40" y="72" font-family="system-ui, sans-serif" font-size="7" fill="#64748b" text-anchor="middle">6</text>
        <text x="30" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">Letter 'A'</text>
      </g>
      <!-- Letter B -->
      <g transform="translate(240, 48)">
        <rect width="60" height="85" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="6"/>
        <circle cx="20" cy="22" r="6" fill="#1e40af"/>
        <circle cx="40" cy="22" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <circle cx="20" cy="45" r="6" fill="#1e40af"/>
        <circle cx="40" cy="45" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <circle cx="20" cy="68" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <circle cx="40" cy="68" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="30" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">Letter 'B'</text>
      </g>
      <!-- Letter C -->
      <g transform="translate(360, 48)">
        <rect width="60" height="85" fill="#ffffff" stroke="#2563eb" stroke-width="2" rx="6"/>
        <circle cx="20" cy="22" r="6" fill="#1e40af"/>
        <circle cx="40" cy="22" r="6" fill="#1e40af"/>
        <circle cx="20" cy="45" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <circle cx="40" cy="45" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <circle cx="20" cy="68" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <circle cx="40" cy="68" r="6" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="30" y="100" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">Letter 'C'</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1d4ed8" text-anchor="middle">Each cell has 2 vertical columns of 3 raised dots felt by fingertips.</text>
    </svg>`,
    questions: [
      {
        category: "Biographical Comprehension & System Details",
        q: "Who was Louis Braille? How did he invent the Braille script, and how do visually impaired persons read books using it?",
        ans: `Louis Braille was a French educator and inventor who lost his eyesight during early childhood due to an eye injury in his father's workshop.<br><br>
<strong>Invention of Braille Script:</strong><br>
At the age of 15, Louis learned about a military code invented by Captain Charles Barbier called 'night writing', used by soldiers to read orders silently in darkness. Louis simplified this complex system into an elegant grid of <strong>6 raised dots</strong> arranged in two columns of three dots each.<br><br>
<strong>How Persons Read Braille:</strong><br>
Different combinations of raised dots represent different letters of the alphabet, punctuation marks, and numbers. Readers lightly glide their index fingertips across the embossed paper sheets to perceive the dot arrangements rapidly through touch.`,
        marks: 4,
        rubric: [
          { key: "Background of Louis Braille and age/origin", marks: "1.5 M" },
          { key: "Description of the 6-dot grid system", marks: "1.5 M" },
          { key: "Explanation of fingertip touch reading", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Inclusive Public Architecture",
      text: "Many modern metro train stations and lift buttons in India now feature raised Braille dots alongside standard printed numbers.",
      question: "Why is installing Braille in public elevators and train stations an essential requirement for a civilized society?",
      answer: "Installing Braille grants independence, dignity, and safety to visually impaired individuals. It allows them to navigate public transport, select correct floors in hospitals, and read emergency instructions without having to rely on strangers, fulfilling their right to equal accessibility.",
      rubric: "1.5 Marks for highlighting independence and dignity; 1.5 Marks for public accessibility rights."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 7: FIT BODY, FIT MIND, FIT NATION
  // -------------------------------------------------------------------------
  {
    id: "st7",
    num: 7,
    unit: "Unit 3: Fun with Games",
    title: "Fit Body, Fit Mind, Fit Nation",
    subtitle: "Health, Yoga, Outdoor Games, Balanced Nutrition & National Fitness Ethos",
    concepts: [
      "The interconnectedness of physical fitness, mental alertness, and nation-building.",
      "The role of regular outdoor play, sportsmanship, and teamwork.",
      "Basic yoga asanas (Vrikshasana, Tadasana, Surya Namaskar) for posture, flexibility, and concentration.",
      "Nutritious traditional Indian food vs. processed junk food."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">The Three Pillars of Lifelong Fitness</text>
      <!-- Pillar 1 -->
      <circle cx="120" cy="80" r="30" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
      <text x="120" y="86" font-size="20" text-anchor="middle">🏃</text>
      <text x="120" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">Daily Play</text>
      <!-- Pillar 2 -->
      <circle cx="290" cy="80" r="30" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
      <text x="290" y="86" font-size="20" text-anchor="middle">🧘</text>
      <text x="290" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">Yoga & Breathing</text>
      <!-- Pillar 3 -->
      <circle cx="460" cy="80" r="30" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
      <text x="460" y="86" font-size="20" text-anchor="middle">🥗</text>
      <text x="460" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#065f46" text-anchor="middle">Nutritious Food</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">"A healthy mind resides inside a healthy body."</text>
    </svg>`,
    questions: [
      {
        category: "Health & Lifestyle Analysis",
        q: "Why is outdoor play superior to playing mobile games? List three benefits of practicing daily yoga for school students.",
        ans: `<strong>Why outdoor play is superior to mobile screens:</strong><br>
Outdoor sports engage the entire muscular and cardiovascular system, increasing lung capacity, heart strength, and bone density. Furthermore, running under sunlight provides Vitamin D and fosters face-to-face social bonds, whereas prolonged mobile gaming strains eyes, promotes a sedentary lifestyle, and causes mental fatigue.<br><br>
<strong>Three Benefits of Daily Yoga:</strong><br>
1. <strong>Improves Concentration:</strong> Pranayama (breath control) calms nervous tension and sharpens memory.<br>
2. <strong>Better Posture:</strong> Asanas like Tadasana and Bhujangasana correct slouching from sitting long hours at school desks.<br>
3. <strong>Builds Flexibility & Resilience:</strong> Keeps muscles supple, preventing sports injuries.`,
        marks: 3,
        rubric: [
          { key: "Contrast between outdoor sports and screen sedentary habits", marks: "1.5 M" },
          { key: "Three accurate benefits of daily yoga", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "School Healthy Lunchbox Campaign",
      text: "A teacher observes students bringing packaged chips and sugary cream biscuits for morning tiffin.",
      question: "Suggest a healthy, locally available 3-item lunchbox menu that provides balanced energy.",
      answer: "A nutritious tiffin could include: (1) Fresh vegetable stuffed paratha or idlis made with whole grains, (2) A seasonal fruit like a banana or apple, and (3) A handful of roasted peanuts or sprouted moong.",
      rubric: "1.5 Marks for balanced meal components; 1.5 Marks for promoting fresh unrefined local items."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 8: THE LAGORI CHAMPIONS
  // -------------------------------------------------------------------------
  {
    id: "st8",
    num: 8,
    unit: "Unit 3: Fun with Games",
    title: "The Lagori Champions",
    subtitle: "Exciting Traditional Indian Sport: Pithu / Seven Stones, Rules & Team Camaraderie",
    concepts: [
      "Lagori (also known as Pithu or Lingorchya): a beloved traditional team game played across India.",
      "Game mechanics: seven flat stones stacked in a tower, a rubber ball, two competing teams (Attackers and Defenders).",
      "Tactics: knocking the pile down, dodging the ball while rebuilding the seven-stone tower, shouting 'LAGORI!'",
      "Values of coordination, agility, honest sportsmanship, and celebrating traditional games."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">The Seven Stones of Lagori (Pithu)</text>
      <!-- 7 Stones Stack -->
      <g transform="translate(290, 115)">
        <rect x="-35" y="-10" width="70" height="10" fill="#78350f" stroke="#451a03" rx="2"/>
        <rect x="-30" y="-20" width="60" height="10" fill="#92400e" stroke="#451a03" rx="2"/>
        <rect x="-25" y="-30" width="50" height="10" fill="#b45309" stroke="#451a03" rx="2"/>
        <rect x="-20" y="-40" width="40" height="10" fill="#d97706" stroke="#451a03" rx="2"/>
        <rect x="-15" y="-50" width="30" height="10" fill="#f59e0b" stroke="#451a03" rx="2"/>
        <rect x="-10" y="-60" width="20" height="10" fill="#fbbf24" stroke="#451a03" rx="2"/>
        <rect x="-6" y="-70" width="12" height="10" fill="#fef08a" stroke="#451a03" rx="2"/>
      </g>
      <!-- Striker Ball -->
      <circle cx="150" cy="80" r="14" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
      <line x1="170" y1="80" x2="250" y2="80" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4,4"/>
      <text x="150" y="115" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Attacker throws ball</text>
      <!-- Defender -->
      <text x="440" y="75" font-size="28" text-anchor="middle">🏃</text>
      <text x="440" y="115" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Defenders dodge & throw</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Stack all 7 stones and yell "LAGORI!" to win!</text>
    </svg>`,
    questions: [
      {
        category: "Game Rules & Strategy",
        q: "Describe the step-by-step rules of playing Lagori. How does a team score a win, and how can the defending team stop them?",
        ans: `<strong>Rules of Lagori (Seven Stones):</strong><br>
1. <strong>Setup:</strong> Seven flat stones of decreasing sizes are stacked in a pyramid in the center of a circle. Two teams with equal players take positions.<br>
2. <strong>Striking:</strong> An attacker throws a soft rubber ball from a fixed crease to topple the stone pyramid.<br>
3. <strong>Rebuilding & Dodging:</strong> If the stones are knocked down, the attacking team rushes forward to restack all seven stones in proper size order. Meanwhile, the defending team retrieves the ball and tries to hit ('tag') any attacker below the waist with the ball.<br>
4. <strong>Winning the Round:</strong> If the attackers rebuild the entire stack and shout <em>'LAGORI!'</em> before any teammate is hit, they win 1 point. If the defenders hit an attacker before the stack is completed, the attackers are 'out' and teams switch roles.`,
        marks: 4,
        rubric: [
          { key: "Explains setup with 7 flat stones", marks: "1.0 M" },
          { key: "Describes attacking vs defending roles accurately", marks: "2.0 M" },
          { key: "Defines winning condition ('LAGORI!') and tagging out", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Fair Play & Conflict Resolution",
      text: "During a tense school match, a ball grazes the edge of an attacker's shorts. The defender shouts 'Out!', but the referee is unsure.",
      question: "What should the true sportsmanship response of the attacker be?",
      answer: "A true sportsman should honestly admit that the ball touched their clothing and step out without arguing. Integrity and fair play are far more precious than winning a game through deception.",
      rubric: "1.5 Marks for advocating honest admission; 1.5 Marks for highlighting integrity over winning."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 9: HEKKO
  // -------------------------------------------------------------------------
  {
    id: "st9",
    num: 9,
    unit: "Unit 3: Fun with Games",
    title: "Hekko",
    subtitle: "Traditional Indigenous Game of Nagaland, Physical Agility & Cultural Heritage",
    concepts: [
      "Exploring traditional games from Northeast India: Hekko of Nagaland.",
      "Focus on balance, single-leg hopping, agility, and upper-body control.",
      "How indigenous games reflect geographical lifestyle and physical endurance.",
      "Promoting unity in diversity by appreciating indigenous sporting cultures."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#faf5ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#6b21a8" text-anchor="middle">Hekko — Traditional Naga Game of Balance & Hopping Agility</text>
      <!-- Circular Ring -->
      <ellipse cx="290" cy="85" rx="180" ry="40" fill="#f3e8ff" stroke="#9333ea" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="290" y="70" font-size="28" text-anchor="middle">🤼</text>
      <text x="290" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#581c87" text-anchor="middle">Hopping inside marked ring on one foot</text>
      <text x="140" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7e22ce" text-anchor="middle">Strength & Stamina</text>
      <text x="440" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7e22ce" text-anchor="middle">Indigenous Heritage</text>
    </svg>`,
    questions: [
      {
        category: "Cultural Sports Appreciation",
        q: "What is Hekko, and which state of India does it originate from? How is the game played, and what physical skills does it test?",
        ans: `<strong>Origin:</strong> Hekko is an indigenous traditional game originating from the vibrant hill state of <strong>Nagaland</strong> in Northeast India.<br><br>
<strong>Gameplay:</strong><br>
The game is played inside a marked boundary or circular ring. Players hold one of their legs behind them with their hand and hop strictly on the other foot. Competitors attempt to nudge or push their opponent out of the boundary ring using only shoulder and body momentum, without dropping their raised foot to the ground.<br><br>
<strong>Skills Tested:</strong><br>
It rigorously tests single-leg balance, muscular stamina, core strength, agility, and spatial alertness.`,
        marks: 3,
        rubric: [
          { key: "Correct state of origin (Nagaland)", marks: "1.0 M" },
          { key: "Description of one-legged hopping and ring boundary", marks: "1.0 M" },
          { key: "Lists skills tested (balance, stamina, agility)", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Preserving Traditional Indian Games",
      text: "Many ancient indigenous sports like Hekko, Gilli-Danda, and Kho-Kho are disappearing as children play exclusively foreign video games.",
      question: "Suggest two ways schools can celebrate and revive traditional games from different Indian states.",
      answer: "1. Organize an annual 'Bharatiya Khel Utsav' where each class demonstrates and plays a traditional sport from a different state (like Hekko from Nagaland, Mallakhamb from Maharashtra, and Kabaddi).<br>2. Introduce traditional games into the regular weekly physical education timetable.",
      rubric: "1.5 Marks for festival event idea; 1.5 Marks for weekly timetable inclusion."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: THE SWING
  // -------------------------------------------------------------------------
  {
    id: "st10",
    num: 10,
    unit: "Unit 4: Up High",
    title: "The Swing",
    subtitle: "Classic Lyric Poem by Robert Louis Stevenson on the Joy of Childhood Flight",
    concepts: [
      "The exhilarating sensory experience of swinging up high into the blue sky.",
      "Changing perspectives: looking over walls, cattle, countryside, and looking down on the green garden roof.",
      "Poetic imagery, rhyme scheme (ABAB), and musical cadence.",
      "Stevenson's celebration of pure, innocent childhood delight."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">The Swing — "How do you like to go up in a swing, up in the air so blue?"</text>
      <!-- Swing Frame -->
      <line x1="220" y1="40" x2="360" y2="40" stroke="#1e3a8a" stroke-width="4"/>
      <line x1="230" y1="40" x2="200" y2="135" stroke="#1e3a8a" stroke-width="3"/>
      <line x1="350" y1="40" x2="380" y2="135" stroke="#1e3a8a" stroke-width="3"/>
      <!-- Ropes -->
      <line x1="270" y1="40" x2="260" y2="95" stroke="#93c5fd" stroke-width="2"/>
      <line x1="310" y1="40" x2="300" y2="95" stroke="#93c5fd" stroke-width="2"/>
      <rect x="250" y="95" width="60" height="8" fill="#d97706" rx="2"/>
      <!-- Sights -->
      <text x="120" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Rivers & Trees</text>
      <text x="120" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#3b82f6" text-anchor="middle">Over the garden wall</text>
      <text x="460" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Cattle in the Meadow</text>
      <text x="460" y="105" font-family="system-ui, sans-serif" font-size="10" fill="#15803d" text-anchor="middle">Brown garden roofs below</text>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">"Up in the air I go flying again, up in the air and down!"</text>
    </svg>`,
    questions: [
      {
        category: "Poetic Imagery & Sensory Details",
        q: "What does the poet consider the 'pleasantest thing ever a child can do'? What three things does the child see when flying high above the wall?",
        ans: `The poet, Robert Louis Stevenson, considers <strong>going up in a swing high into the blue air</strong> to be the pleasantest and most wonderful thing a child can ever experience.<br><br>
When the child swings up so high that they can look over the garden wall, they see:<br>
1. <strong>Rivers and Trees:</strong> Glistening water and tree canopies stretching into the distance.<br>
2. <strong>Cattle:</strong> Farm animals grazing calmly in the open meadows.<br>
3. <strong>Countryside & Garden Roofs:</strong> The vast rural landscape stretching far away, and looking down, the green garden and brown house roofs.`,
        marks: 3,
        rubric: [
          { key: "Identifies swinging as pleasantest thing", marks: "1.0 M" },
          { key: "Accurately lists 3 sights (rivers/trees, cattle, countryside/roofs)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Expressive Writing: The Joy of Swings",
      text: "Imagine you are seated on a swing at a village fair. Write two descriptive sentences about how the wind feels against your face as you swing to the highest point.",
      question: "Describe your personal sensory feelings and thoughts as you soar up into the blue sky on a swing.",
      answer: "<em>As I soar upward toward the clouds, the cool rush of the wind sweeps through my hair like a playful bird. For a brief magical second, my feet touch the open sky, and my heart fills with weightless laughter.</em>",
      rubric: "1.5 Marks for sensory words (rush of wind, soaring); 1.5 Marks for emotional vividness."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 11: A JOURNEY TO THE MAGICAL MOUNTAINS
  // -------------------------------------------------------------------------
  {
    id: "st11",
    num: 11,
    unit: "Unit 4: Up High",
    title: "A Journey to the Magical Mountains",
    subtitle: "Himalayan Expedition, Pine Forests, Glacial Streams, Alpine Flora & Mountain Folk",
    concepts: [
      "Travel narrative describing an expedition through the Himalayan ranges.",
      "Observing elevation changes: terraced farm fields, tall deodar/pine trees, roaring crystal streams, and snowy peaks.",
      "Appreciating Himalayan biodiversity: rhododendrons, snow leopards, monal birds, and yak herds.",
      "The warmth, hospitality, and resilience of mountain communities."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdfa" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f766e" text-anchor="middle">Journey to the Magical Mountains — Himalayan Altitude Zones</text>
      <!-- Mountain Peaks -->
      <polygon points="120,120 200,45 280,120" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
      <polygon points="180,60 200,45 220,60" fill="#ffffff"/>
      <polygon points="250,120 340,35 430,120" fill="#99f6e4" stroke="#0f766e" stroke-width="2"/>
      <polygon points="320,55 340,35 360,55" fill="#ffffff"/>
      <polygon points="400,120 470,55 540,120" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
      <text x="340" y="25" font-family="system-ui, sans-serif" font-size="9" fill="#134e4a" text-anchor="middle">Snowy Peaks</text>
      <!-- Pine Trees -->
      <polygon points="70,120 80,95 90,120" fill="#0f766e"/>
      <polygon points="95,120 105,90 115,120" fill="#0f766e"/>
      <polygon points="475,120 485,90 495,120" fill="#0f766e"/>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#115e59" text-anchor="middle">Terraced Valleys ➔ Pine & Deodar Forests ➔ Glacial Streams ➔ Snow Peaks</text>
    </svg>`,
    questions: [
      {
        category: "Travelogue Comprehension",
        q: "How does the landscape change as the travelers climb higher into the Himalayan mountains? What makes the mountain air feel different from city air?",
        ans: `As the travelers climb higher, the landscape transforms dramatically:<br>
• In the lower valleys, they pass green terraced agricultural fields where farmers grow barley and potatoes.<br>
• As the road ascends, thick forests of tall deodar, pine, and oak trees line the cliffs, filled with the aroma of cedar needles and wild red rhododendron flowers.<br>
• Higher still, trees give way to rocky slopes, tumbling icy glacial waterfalls, and gleaming white snow-covered summits.<br><br>
<strong>Why mountain air feels different:</strong><br>
The mountain air is crisp, pure, and refreshingly cool, completely free from the dust, smoke, and automobile exhaust of crowded cities.`,
        marks: 3,
        rubric: [
          { key: "Describes elevation changes (valleys, pine forests, snowy summits)", marks: "2.0 M" },
          { key: "Explains purity and coolness of unpolluted mountain air", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Eco-Friendly Mountain Tourism",
      text: "Tourists visiting high-altitude Himalayan beauty spots often discard empty plastic chips packets and water bottles near mountain streams.",
      question: "Why is plastic litter especially dangerous in high mountains, and what eco-friendly pledge should every visitor take?",
      answer: "Plastic takes hundreds of years to decompose and chokes delicate alpine streams, threatening wild animals and polluting the pure water sources that flow down to millions of people. Every visitor must take the pledge: <em>'Take nothing but memories, leave nothing but footprints, and bring all plastic waste back down to the plains.'</em>",
      rubric: "1.5 Marks for ecological threat to streams and wildlife; 1.5 Marks for responsible visitor pledge."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 12: MAHESHWAR
  // -------------------------------------------------------------------------
  {
    id: "st12",
    num: 12,
    unit: "Unit 4: Up High",
    title: "Maheshwar",
    subtitle: "Historic Heritage Town on the Narmada, Ahilyabai Holkar & Handloom Weaving",
    concepts: [
      "Historical overview of Maheshwar: ancient capital situated on the sacred banks of the Narmada River in Madhya Pradesh.",
      "The visionary leadership of Queen Ahilyabai Holkar: building stone ghats, temples, rest houses, and patronizing artisans.",
      "The world-renowned heritage of Maheshwari sarees: unique geometric border designs inspired by temple carvings, silk-cotton weaving.",
      "Appreciating Indian architectural monuments and traditional handloom crafts."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Maheshwar — Fort Ghats on the Narmada & Handloom Heritage</text>
      <!-- Ahilya Fort Wall -->
      <rect x="80" y="55" width="220" height="60" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
      <!-- Battlements -->
      <rect x="80" y="47" width="20" height="8" fill="#c2410c"/>
      <rect x="120" y="47" width="20" height="8" fill="#c2410c"/>
      <rect x="160" y="47" width="20" height="8" fill="#c2410c"/>
      <rect x="200" y="47" width="20" height="8" fill="#c2410c"/>
      <rect x="240" y="47" width="20" height="8" fill="#c2410c"/>
      <rect x="280" y="47" width="20" height="8" fill="#c2410c"/>
      <text x="190" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#9a3412" text-anchor="middle">Ahilya Fort & Ghats</text>
      <text x="190" y="102" font-family="system-ui, sans-serif" font-size="9" fill="#ea580c" text-anchor="middle">Sacred Narmada River</text>
      <!-- Saree Border -->
      <g transform="translate(340, 55)">
        <rect width="180" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <line x1="0" y1="20" x2="180" y2="20" stroke="#b45309" stroke-width="2"/>
        <line x1="0" y1="40" x2="180" y2="40" stroke="#b45309" stroke-width="2"/>
        <text x="90" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">Maheshwari Handloom Saree</text>
        <text x="90" y="34" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#b45309" text-anchor="middle">▲▼▲▼▲▼▲▼▲▼▲</text>
        <text x="90" y="52" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Geometric Border Weaving</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Celebrating Rani Ahilyabai's legacy of peace, architecture, and artisanal empowerment.</text>
    </svg>`,
    questions: [
      {
        category: "Historical & Cultural Heritage",
        q: "Who was Rani Ahilyabai Holkar, and what great contributions did she make to the town of Maheshwar? What is unique about Maheshwari sarees?",
        ans: `<strong>Rani Ahilyabai Holkar:</strong><br>
Rani Ahilyabai Holkar was the noble, pious, and courageous 18th-century ruler of the Malwa kingdom. She made Maheshwar her royal capital and turned it into a flourishing center of culture, spirituality, and trade.<br><br>
<strong>Contributions to Maheshwar:</strong><br>
• She constructed the majestic stone Ahilya Fort and grand stepped bathing ghats along the sacred Narmada River.<br>
• She invited master weavers from Surat, Malwa, and South India, giving them royal patronage to create the unique Maheshwari textile craft.<br><br>
<strong>Unique features of Maheshwari Sarees:</strong><br>
Maheshwari sarees are woven from fine silk and cotton threads, making them lightweight and comfortable. Their distinctive reversible borders feature delicate geometric patterns (like checks, stripes, and floral triangles) inspired by the historic stone carvings on the temple walls of Maheshwar Fort.`,
        marks: 4,
        rubric: [
          { key: "Identifies Rani Ahilyabai Holkar and royal capital", marks: "1.5 M" },
          { key: "Lists architectural and artisan patronage contributions", marks: "1.5 M" },
          { key: "Details silk-cotton fabric and temple-inspired reversible borders", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Supporting Traditional Indian Weavers",
      text: "Modern automated power-looms produce cheap imitation synthetic sarees, causing many handloom weaver families in heritage towns to struggle for livelihood.",
      question: "Why should we encourage families to buy genuine handloom products, and how does it protect India's living cultural heritage?",
      answer: "Every genuine handloom purchase directly supports the livelihoods of skilled Indian artisan families and keeps alive centuries-old traditional artistic techniques passed down through generations. Handloom textiles use eco-friendly natural fibers, celebrate indigenous craftsmanship, and preserve our rich national identity.",
      rubric: "1.5 Marks for weaver family livelihood; 1.5 Marks for preserving living cultural heritage."
    }
  }
];

module.exports = { santoorChapters };
