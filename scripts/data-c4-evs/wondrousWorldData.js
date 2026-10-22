// Official NCERT Class 4 The World Around Us (Our Wondrous World) Complete Dataset - Chapters 1 to 10
// Aligned with New NEP 2020 & NCF-SE 2023 Curriculum (CBSE 2026-27 Session)

const wondrousWorldChapters = [
  // -------------------------------------------------------------------------
  // CHAPTER 1: LIVING TOGETHER
  // -------------------------------------------------------------------------
  {
    id: "oww1",
    num: 1,
    unit: "Unit 1: Our Community",
    title: "Living Together",
    subtitle: "Family Structures, Joint & Nuclear Families, Mutual Responsibilities & Caring for Elders",
    concepts: [
      "Diverse family structures in India: Joint families, nuclear families, single-parent homes, and extended family networks.",
      "Sharing household chores equitably among all family members without gender stereotyping.",
      "Caring for elders and differently-abled family members with patience, affection, and dignity.",
      "Family traditions, cultural celebrations, and tracing family generations through family trees."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Living Together — Three Generations Family Tree</text>
      <!-- Grandparents -->
      <g transform="translate(290, 52)">
        <rect x="-70" y="-14" width="140" height="28" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5" rx="6"/>
        <text x="0" y="4" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e3a8a" text-anchor="middle">👴👵 Grandparents</text>
      </g>
      <line x1="290" y1="66" x2="290" y2="82" stroke="#2563eb" stroke-width="2"/>
      <line x1="160" y1="82" x2="420" y2="82" stroke="#2563eb" stroke-width="2"/>
      <!-- Parents & Uncle/Aunt -->
      <line x1="160" y1="82" x2="160" y2="95" stroke="#2563eb" stroke-width="2"/>
      <g transform="translate(160, 108)">
        <rect x="-65" y="-13" width="130" height="26" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4"/>
        <text x="0" y="4" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">👨👩 Father & Mother</text>
      </g>
      <line x1="420" y1="82" x2="420" y2="95" stroke="#2563eb" stroke-width="2"/>
      <g transform="translate(420, 108)">
        <rect x="-65" y="-13" width="130" height="26" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4"/>
        <text x="0" y="4" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">👨👩 Uncle & Aunt</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Love, mutual respect, and shared duties strengthen family harmony.</text>
    </svg>`,
    questions: [
      {
        category: "Concept Explanation • Family Dynamics",
        q: "What is the difference between a nuclear family and a joint family? How does sharing daily household chores help family members?",
        ans: `<strong>1. Nuclear Family vs. Joint Family:</strong><br>
• <strong>Nuclear Family:</strong> Consists only of parents and their children living together in a household.<br>
• <strong>Joint Family:</strong> An extended family where grandparents, parents, uncles, aunts, and cousins all live together under one roof, sharing a common kitchen and household resources.<br><br>
<strong>2. Benefits of Sharing Household Chores:</strong><br>
When chores like cooking, cleaning, gardening, and washing dishes are distributed among all members: (a) No single person (especially mothers) gets overburdened, (b) Children learn practical life skills and self-reliance, and (c) It builds mutual respect and deep family bonding.`,
        marks: 3,
        rubric: [
          { key: "Clear contrast between nuclear and joint family", marks: "1.5 M" },
          { key: "Three tangible benefits of shared domestic chores", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Supporting Grandparents with Digital Technology",
      text: "Grandfather wants to consult his eye doctor through a telemedicine video call but feels confused by the smartphone screen.",
      question: "How can a Class 4 student assist their grandfather respectfully without making him feel helpless?",
      answer: "The student should sit patiently beside grandfather, open the app, adjust the screen brightness and volume, and gently guide grandfather's finger to tap the call button. Explaining each step with kindness builds grandfather's confidence while showing deep filial gratitude.",
      rubric: "1.5 Marks for patient step-by-step guidance; 1.5 Marks for showing filial respect and dignity."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 2: EXPLORING OUR NEIGHBOURHOOD
  // -------------------------------------------------------------------------
  {
    id: "oww2",
    num: 2,
    unit: "Unit 1: Our Community",
    title: "Exploring Our Neighbourhood",
    subtitle: "Community Helpers, Public Utilities, Neighborhood Mapping & Civic Cleanliness",
    concepts: [
      "Key public institutions in a neighborhood: Primary health clinic, post office, police station, fire station, bank, and library.",
      "Community helpers who maintain civic life: Sanitation workers, electricians, plumbers, farmers, carpenters, and traffic police.",
      "Reading simple neighborhood route maps with symbols and landmarks.",
      "Civic responsibility: Maintaining clean public parks, segregating wet and dry waste, and preserving public property."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">Our Neighbourhood Public Services Network</text>
      <!-- Services Grid -->
      <g transform="translate(100, 75)">
        <rect x="-35" y="-22" width="70" height="44" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
        <text x="0" y="2" font-size="18" text-anchor="middle">🏥</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Health Clinic</text>
      </g>
      <g transform="translate(225, 75)">
        <rect x="-35" y="-22" width="70" height="44" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
        <text x="0" y="2" font-size="18" text-anchor="middle">📮</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Post Office</text>
      </g>
      <g transform="translate(355, 75)">
        <rect x="-35" y="-22" width="70" height="44" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
        <text x="0" y="2" font-size="18" text-anchor="middle">🚒</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Fire Station</text>
      </g>
      <g transform="translate(480, 75)">
        <rect x="-35" y="-22" width="70" height="44" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
        <text x="0" y="2" font-size="18" text-anchor="middle">📚</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Public Library</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Public utilities and community helpers make city life safe, healthy, and organized.</text>
    </svg>`,
    questions: [
      {
        category: "Community Helpers & Public Welfare",
        q: "Name three important community helpers in your neighborhood and describe how each contributes to our daily safety and comfort. Why must we always treat sanitation workers with dignity?",
        ans: `<strong>Three Important Community Helpers:</strong><br>
1. <strong>Sanitation Workers:</strong> Sweep public streets early every morning, clear garbage bins, and prevent drainage clogs, protecting our neighborhood from deadly epidemics like cholera and dengue.<br>
2. <strong>Electrician / Lineman:</strong> Repairs power line faults, restores electricity during storms, and ensures safe home wiring.<br>
3. <strong>Primary Health Doctor / Nurse:</strong> Treats seasonal illnesses, administers vaccines to infants, and provides first aid during emergencies.<br><br>
<strong>Treating Sanitation Workers with Dignity:</strong><br>
Sanitation workers perform one of the most hazardous and vital tasks in our society by handling waste that everyone else discards. Without their tireless labor, cities would become unlivable garbage dumps within 48 hours. Treating them with courtesy, speaking politely, and handing segregated waste is our moral duty.`,
        marks: 4,
        rubric: [
          { key: "Details contributions of 3 community helpers", marks: "2.5 M" },
          { key: "Moral and health reasons for treating sanitation workers with dignity", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Waste Segregation at Source",
      text: "A resident mixes broken glass bottles, vegetable peels, and plastic packets into a single polythene bag and dumps it on the roadside.",
      question: "Explain the hazards of this practice and state the two-bin waste segregation rule.",
      answer: "Mixing waste endangers sanitation workers (broken glass cuts their fingers) and harms stray cows who swallow plastic bags containing food. <strong>The Two-Bin Rule:</strong><br>• <strong>Green Bin (Wet Waste):</strong> Fruit and vegetable peels, leftover food, tea leaves (for composting).<br>• <strong>Blue Bin (Dry Waste):</strong> Paper, plastic bottles, metal cans, glass (for recycling).",
      rubric: "1.5 Marks for hazards to workers and animals; 1.5 Marks for Green vs Blue bin definitions."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 3: NATURE TRAIL
  // -------------------------------------------------------------------------
  {
    id: "oww3",
    num: 3,
    unit: "Unit 2: Life Around Us",
    title: "Nature Trail",
    subtitle: "Plant Biodiversity, Leaf Variations, Bark Textures, Tree Canopies & Urban Ecology",
    concepts: [
      "Observing tree canopies: Banyan (aerial roots), Peepal (heart-shaped leaves with tapering tips), Neem (toothed leaves), Gulmohar.",
      "Leaf variations: Shapes (oval, round, serrated, needle-like), textures (smooth, rough, waxy), and scents (tulsi, mint, eucalyptus).",
      "The role of leaf litter: Dry fallen leaves decompose to form nutrient-rich humus and fertile soil; never burn leaves.",
      "Bark rubbings and examining tiny organisms living on tree trunks (ants, beetles, moss, lichens)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">Nature Trail — Leaf Morphology & Tree Canopy Diversity</text>
      <!-- Peepal Leaf -->
      <g transform="translate(100, 75)">
        <path d="M0 -30 Q25 -10 20 15 Q0 35 0 42 Q0 35 -20 15 Q-25 -10 0 -30 Z" fill="#34d399" stroke="#059669" stroke-width="1.5"/>
        <line x1="0" y1="-28" x2="0" y2="40" stroke="#047857" stroke-width="1.5"/>
        <text x="0" y="58" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#065f46" text-anchor="middle">Peepal (Heart + Tip)</text>
      </g>
      <!-- Banyan Canopy -->
      <g transform="translate(260, 75)">
        <path d="M-40 10 Q0 -40 40 10 Z" fill="#10b981" stroke="#047857" stroke-width="2"/>
        <rect x="-8" y="10" width="16" height="30" fill="#78350f"/>
        <line x1="-25" y1="10" x2="-25" y2="35" stroke="#92400e" stroke-width="2"/>
        <line x1="25" y1="10" x2="25" y2="35" stroke="#92400e" stroke-width="2"/>
        <text x="0" y="58" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#065f46" text-anchor="middle">Banyan (Aerial Roots)</text>
      </g>
      <!-- Neem Leaflet -->
      <g transform="translate(430, 75)">
        <path d="M0 -25 Q15 0 0 25 Q-15 0 0 -25 Z" fill="#6ee7b7" stroke="#059669" stroke-width="1.5"/>
        <text x="0" y="58" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#065f46" text-anchor="middle">Neem (Serrated Margin)</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#047857" text-anchor="middle">Leaves differ in margins, venation, scent, and seasonal shedding patterns.</text>
    </svg>`,
    questions: [
      {
        category: "Botanical Observation • Leaf Science",
        q: "Why do Peepal leaves have a long tapering tip (drip tip)? Why should fallen dry leaves never be burnt on roadsides?",
        ans: `<strong>1. Purpose of the Peepal leaf's tapering drip tip:</strong><br>
The slender, elongated tail at the apex of a Peepal leaf is an evolutionary adaptation called a <strong>'drip tip'</strong>. During monsoon showers, rainwater quickly slides down this narrow tip and drains away rapidly. This prevents standing water droplets on the leaf surface, which stops fungal growth and keeps the stomata open for breathing and photosynthesis.<br><br>
<strong>2. Why dry fallen leaves must NEVER be burnt:</strong><br>
• <strong>Air Pollution:</strong> Burning leaves releases toxic smoke, fine particulate matter (PM2.5), and carbon monoxide, causing severe breathing distress to asthma patients and elders.<br>
• <strong>Loss of Nutrients:</strong> When buried in a compost pit, dry leaves decompose naturally into dark, organic <em>humus</em> (compost), which fertilizes garden soil for free. Burning destroys this natural wealth.`,
        marks: 3,
        rubric: [
          { key: "Explains drip tip adaptation for rain drainage", marks: "1.5 M" },
          { key: "States air pollution hazard and composting benefit over burning", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Making a School Compost Pit",
      text: "The school grounds produce four large wheelbarrows of dry autumn leaves and grass clippings every week.",
      question: "Design a simple 3-step guide for students to turn these dry leaves into organic manure for the school vegetable garden.",
      answer: "1. <strong>Dig a Compost Pit:</strong> Choose a shaded garden corner and dig a pit 1 metre deep.<br>2. <strong>Layering:</strong> Alternate layers of dry leaves with garden soil and kitchen vegetable peels; sprinkle water to keep it damp.<br>3. <strong>Decomposition:</strong> Turn the pile with a spade every fortnight. Within 8 to 12 weeks, earthworms and microbes convert the leaves into rich black compost.",
      rubric: "1.5 Marks for layering and moisture balance; 1.5 Marks for aeration and humus formation."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: GROWING UP WITH NATURE
  // -------------------------------------------------------------------------
  {
    id: "oww4",
    num: 4,
    unit: "Unit 2: Life Around Us",
    title: "Growing up with Nature",
    subtitle: "Plant Germination, Animal Life Cycles, Pet Care & Behavioral Adaptations",
    concepts: [
      "Conditions for seed germination: Air (oxygen), water (moisture), and warmth (sunlight).",
      "Parts of a sprouting seed: Seed coat, cotyledon (food store), radicle (first root), plumule (first shoot).",
      "Life cycles in nature: Butterfly metamorphosis (Egg ➔ Caterpillar/Larva ➔ Pupa/Chrysalis ➔ Adult Butterfly); Frog metamorphosis (Egg ➔ Tadpole with tail ➔ Adult Frog).",
      "Responsible pet care: Nutrition, vaccinations, hygiene, and providing shelter."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Metamorphosis of a Butterfly — Four Life Stages</text>
      <!-- Stage 1 -->
      <g transform="translate(80, 80)">
        <ellipse cx="0" cy="0" rx="20" ry="12" fill="#dcfce7" stroke="#16a34a"/>
        <circle cx="-5" cy="0" r="3" fill="#facc15"/>
        <circle cx="5" cy="0" r="3" fill="#facc15"/>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">1. Egg on Leaf</text>
      </g>
      <text x="145" y="80" font-size="16" fill="#d97706">➔</text>
      <!-- Stage 2 -->
      <g transform="translate(210, 80)">
        <ellipse cx="0" cy="0" rx="28" ry="10" fill="#86efac" stroke="#15803d"/>
        <circle cx="20" cy="0" r="6" fill="#15803d"/>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">2. Caterpillar</text>
      </g>
      <text x="275" y="80" font-size="16" fill="#d97706">➔</text>
      <!-- Stage 3 -->
      <g transform="translate(345, 80)">
        <path d="M0 -18 Q14 0 0 22 Q-14 0 0 -18 Z" fill="#fde047" stroke="#ca8a04"/>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">3. Pupa (Chrysalis)</text>
      </g>
      <text x="410" y="80" font-size="16" fill="#d97706">➔</text>
      <!-- Stage 4 -->
      <g transform="translate(485, 80)">
        <text x="0" y="6" font-size="28" text-anchor="middle">🦋</text>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">4. Adult Butterfly</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Metamorphosis: Complete physical transformation throughout the life cycle.</text>
    </svg>`,
    questions: [
      {
        category: "Life Cycles & Experimental Botany",
        q: "What four stages occur in the life cycle of a butterfly? Describe a simple experiment to prove that seeds need water and air to germinate.",
        ans: `<strong>1. Four Stages of Butterfly Metamorphosis:</strong><br>
• <strong>Stage 1 (Egg):</strong> Female butterfly lays tiny eggs under tender leaves.<br>
• <strong>Stage 2 (Caterpillar/Larva):</strong> Hatches and feeds ravenously on leaves, growing rapidly.<br>
• <strong>Stage 3 (Pupa/Chrysalis):</strong> Wraps itself inside a protective casing, undergoing silent internal transformation.<br>
• <strong>Stage 4 (Adult Butterfly):</strong> Emerges with gorgeous colorful wings, ready to pollinate flowers.<br><br>
<strong>2. Germination Experiment:</strong><br>
Take three bowls with gram (chana) seeds:<br>
• <em>Bowl A:</em> Seeds submerged completely under water (lacks air).<br>
• <em>Bowl B:</em> Seeds wrapped in a moist damp cloth (has both water and air).<br>
• <em>Bowl C:</em> Dry seeds in an open dish (has air, lacks water).<br>
• <strong>Result:</strong> After 3 days, only seeds in <strong>Bowl B sprout healthy shoots</strong>, proving both moisture and air are mandatory.`,
        marks: 4,
        rubric: [
          { key: "Details 4 stages of metamorphosis accurately", marks: "2.0 M" },
          { key: "Clear 3-bowl germination setup and correct conclusion", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Caring for Stray Puppies in Winter",
      text: "During freezing winter nights, stray puppies huddle near garbage heaps shivering in the cold.",
      question: "How can community children provide humane winter shelter for street puppies without spending money?",
      answer: "Children can collect discarded cardboard packing boxes, line the inside with dry straw, old burlap sacks, or worn-out sweaters, and place them under covered verandas or tree shelters away from chilling wind and rain. Providing warm milk and rice keeps their body metabolism strong.",
      rubric: "1.5 Marks for recycled cardboard/straw bedding shelter; 1.5 Marks for warmth and nourishment."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 5: FOOD FOR HEALTH
  // -------------------------------------------------------------------------
  {
    id: "oww5",
    num: 5,
    unit: "Unit 3: Health and Well-Being",
    title: "Food for Health",
    subtitle: "Nutrition, Digestion, Cooking Methods, Traditional Preservation & Safe Water",
    concepts: [
      "The role of food nutrients: Carbohydrates and fats (energy), proteins (growth and tissue repair), vitamins and minerals (protective immunity).",
      "Various cooking techniques: Boiling, steaming (idli, dhokla), baking, roasting, and shallow frying.",
      "Traditional preservation methods: Sun-drying (papads, chilies), pickling in mustard oil and salt, sugar syrups (murabba), and cold refrigeration.",
      "Water hygiene: Boiling water to kill germs, filtration, and preventing waterborne diseases like jaundice and typhoid."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Traditional Food Preservation Methods</text>
      <!-- Sun Drying -->
      <g transform="translate(100, 75)">
        <circle cx="0" cy="0" r="26" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">☀️🌶️</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">धूप में सुखाना (Drying)</text>
      </g>
      <!-- Pickling -->
      <g transform="translate(230, 75)">
        <circle cx="0" cy="0" r="26" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">🫙🥭</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">अचार डालना (Pickling)</text>
      </g>
      <!-- Boiling -->
      <g transform="translate(360, 75)">
        <circle cx="0" cy="0" r="26" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">🫕♨️</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">उबालना (Boiling)</text>
      </g>
      <!-- Chilling -->
      <g transform="translate(485, 75)">
        <circle cx="0" cy="0" r="26" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">❄️🧊</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">शीतलन (Chilling)</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">Preservation prevents microbial spoiling by removing moisture or inhibiting bacteria.</text>
    </svg>`,
    questions: [
      {
        category: "Food Science & Hygiene",
        q: "Why is steaming considered a healthier cooking method than deep frying? How does adding salt and mustard oil prevent mango pickles from spoiling throughout the year?",
        ans: `<strong>1. Why steaming is healthier than deep frying:</strong><br>
• Steaming cooks food gently using water vapor at 100°C without requiring cooking oils or butter, keeping it light on digestion.<br>
• Water-soluble vitamins (Vitamin B and C) and natural minerals are preserved rather than destroyed by burning oil.<br>
• In contrast, deep frying soaks food in saturated fats, which increases cholesterol, burdens the liver, and causes obesity.<br><br>
<strong>2. How salt and mustard oil preserve pickles:</strong><br>
• <strong>Salt:</strong> Draws out internal moisture from raw mango pieces through osmosis. Bacteria and mold fungi cannot reproduce without moisture.<br>
• <strong>Mustard Oil:</strong> Forms an airtight floating barrier over the pickle, cutting off oxygen from the air. Anaerobic bacteria cannot survive, allowing pickles to stay fresh for years.`,
        marks: 4,
        rubric: [
          { key: "Contrast between steaming and deep frying nutrition", marks: "2.0 M" },
          { key: "Scientific explanation of salt (osmosis) and oil (air seal)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Boiling Drinking Water During Floods",
      text: "During monsoon floods, pipeline drinking water arrives cloudy, brownish, and smelling of mud.",
      question: "Why is merely straining muddy water through a cloth insufficient to make it safe for drinking?",
      answer: "Straining through a cloth only traps large insoluble dirt and sand particles. Microscopic disease-causing bacteria, viruses, and amoeba pass straight through the cloth mesh. Water must be boiled vigorously for at least 10 to 15 minutes to kill all pathogenic microbes before drinking.",
      rubric: "1.5 Marks for explaining cloth only filters suspended dirt; 1.5 Marks for boiling to kill microscopic pathogens."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: HAPPY AND HEALTHY LIVING
  // -------------------------------------------------------------------------
  {
    id: "oww6",
    num: 6,
    unit: "Unit 3: Health and Well-Being",
    title: "Happy and Healthy Living",
    subtitle: "Personal Hygiene, Handwashing Drills, Dental Care, Sleep Rhythms & Mental Well-Being",
    concepts: [
      "The WHO 6-step handwashing technique using soap for at least 20 seconds before eating and after using the toilet.",
      "Dental health: Brushing teeth twice daily (morning and bedtime), avoiding excessive sticky sweets, rinsing after meals.",
      "Postural alignment: Sitting straight at school desks to avoid spinal curvature.",
      "The power of 8 hours of restorative sleep and emotional regulation through outdoor play and sharing feelings."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f9ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0369a1" text-anchor="middle">The 20-Second Handwashing Drill with Soap</text>
      <!-- Steps -->
      <g transform="translate(100, 75)">
        <circle cx="0" cy="0" r="26" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">🧼</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0369a1" text-anchor="middle">1. Soap Palms</text>
      </g>
      <g transform="translate(230, 75)">
        <circle cx="0" cy="0" r="26" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">🖐️</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0369a1" text-anchor="middle">2. Between Fingers</text>
      </g>
      <g transform="translate(360, 75)">
        <circle cx="0" cy="0" r="26" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">👍</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0369a1" text-anchor="middle">3. Thumbs & Nails</text>
      </g>
      <g transform="translate(485, 75)">
        <circle cx="0" cy="0" r="26" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">💧</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0369a1" text-anchor="middle">4. Rinse with Water</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7" text-anchor="middle">Washing with soap dismantles viral and bacterial lipid membranes within 20 seconds.</text>
    </svg>`,
    questions: [
      {
        category: "Hygiene Science & Preventive Medicine",
        q: "Why is washing hands with plain water insufficient to remove disease-causing germs? Why must we brush our teeth at night before sleeping?",
        ans: `<strong>1. Why plain water is insufficient:</strong><br>
Skin oils trap germs, dirt, and bacteria on our palms. Water alone rolls off oil without breaking it. Soap contains amphiphilic molecules (molecules with one water-loving end and one oil-loving end). When rubbed for 20 seconds, soap dissolves the oily coating of bacteria and viruses, breaking them apart so water can rinse them completely away.<br><br>
<strong>2. Why brushing teeth before sleeping is crucial:</strong><br>
During sleep, our mouth produces much less saliva (which naturally cleanses teeth). If food particles and sugar remain stuck between teeth overnight, mouth bacteria feast on them and produce harmful acids. These acids eat away tooth enamel, causing dental cavities and bad breath.`,
        marks: 3,
        rubric: [
          { key: "Chemical action of soap on germ lipid coatings", marks: "1.5 M" },
          { key: "Acid production by bacteria on food particles overnight", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Mental Wellness and Screen Fatigue",
      text: "A 9-year-old student spends 4 hours every evening watching short online videos and complains of headaches, poor sleep, and irritation.",
      question: "Suggest a healthy digital detox evening schedule from 'Happy and Healthy Living'.",
      answer: "Replace screen time with 60 minutes of outdoor games (football, cycling) from 5:00 to 6:00 pm, dedicated study from 6:30 to 8:00 pm, family conversation over dinner at 8:30 pm, and reading a paperback storybook before lights out at 9:30 pm. This restores melatonin sleep cycles and eliminates headaches.",
      rubric: "1.5 Marks for physical outdoor activity substitution; 1.5 Marks for screen-free pre-sleep routine."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 7: HOW THINGS WORK
  // -------------------------------------------------------------------------
  {
    id: "oww7",
    num: 7,
    unit: "Unit 4: Things Around Us",
    title: "How Things Work",
    subtitle: "Simple Machines: Levers, Pulleys, Wheels & Axles, Inclined Planes & Mechanics",
    concepts: [
      "Understanding simple machines that make human work easier, faster, and require less effort.",
      "The Six Classical Simple Machines: Lever (seesaw, scissors), Inclined Plane (ramp, slide), Pulley (well bucket, flagpole), Wheel and Axle (bicycle, door knob), Screw, and Wedge (knife, axe).",
      "Bicycle mechanics: Pedals, sprockets, chain, gears, and rubber brakes.",
      "Friction: Helpful friction (treaded tires, shoe grips) vs harmful friction (machine wear-and-tear requiring lubrication).",
      "Safety when handling mechanical and electrical appliances."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Simple Machines — Making Human Work Effortless</text>
      <!-- Lever -->
      <g transform="translate(100, 80)">
        <polygon points="0,20 -15,40 15,40" fill="#334155"/>
        <line x1="-35" y1="18" x2="35" y2="22" stroke="#2563eb" stroke-width="4"/>
        <rect x="-35" y="6" width="14" height="12" fill="#ef4444"/>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0f172a" text-anchor="middle">Lever (Seesaw)</text>
      </g>
      <!-- Pulley -->
      <g transform="translate(240, 80)">
        <circle cx="0" cy="0" r="18" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
        <line x1="-18" y1="0" x2="-18" y2="35" stroke="#ea580c" stroke-width="2"/>
        <rect x="-24" y="25" width="12" height="15" fill="#f97316"/>
        <line x1="18" y1="0" x2="18" y2="35" stroke="#ea580c" stroke-width="2"/>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0f172a" text-anchor="middle">Pulley (Well)</text>
      </g>
      <!-- Inclined Plane -->
      <g transform="translate(370, 80)">
        <polygon points="-30,35 30,35 30,5" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
        <rect x="-10" y="10" width="14" height="10" fill="#3b82f6"/>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0f172a" text-anchor="middle">Inclined Plane (Ramp)</text>
      </g>
      <!-- Wheel & Axle -->
      <g transform="translate(490, 80)">
        <circle cx="0" cy="15" r="20" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <circle cx="0" cy="15" r="5" fill="#78350f"/>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0f172a" text-anchor="middle">Wheel & Axle</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#334155" text-anchor="middle">Machines redirect force and multiply mechanical advantage to save energy.</text>
    </svg>`,
    questions: [
      {
        category: "Applied Physics • Simple Machines",
        q: "What is an inclined plane? Why is it easier to push a heavy wooden crate up a slanting wooden plank onto a truck than lifting it straight up from the ground?",
        ans: `<strong>1. Definition:</strong><br>
An inclined plane is a flat supporting surface tilted at an angle, with one end higher than the other (like a slanting plank or wheelchair ramp).<br><br>
<strong>2. Why pushing up a ramp requires less effort:</strong><br>
When lifting a heavy crate straight vertically, you must overcome 100% of the Earth's gravity in one short burst of immense effort.<br>
When using an inclined plane, the slope supports a large part of the crate's weight. Although you must push the crate across a longer distance, the <strong>force (effort) required at any given moment is drastically reduced</strong>, making heavy lifting manageable for a single worker.`,
        marks: 3,
        rubric: [
          { key: "Accurate definition of inclined plane", marks: "1.0 M" },
          { key: "Scientific explanation of trading distance for reduced effort", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Bicycle Maintenance and Lubrication",
      text: "A student notices that her bicycle chain has turned rusty, squeaks loudly, and requires heavy pedaling effort.",
      question: "Explain what causes the stiff pedaling and how applying machine oil solves the problem.",
      answer: "Rust and dust dramatically increase dry <strong>friction</strong> between the interlocking metal chain links and gear teeth, wasting the rider's leg energy as heat. Applying a few drops of machine oil creates a thin, smooth slippery liquid layer between metal surfaces, reducing friction, eliminating squeaking, and making pedaling effortless.",
      rubric: "1.5 Marks for identifying excessive friction caused by rust; 1.5 Marks for lubrication reducing friction."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 8: HOW THINGS ARE MADE
  // -------------------------------------------------------------------------
  {
    id: "oww8",
    num: 8,
    unit: "Unit 4: Things Around Us",
    title: "How Things are Made",
    subtitle: "Artisanal Crafts: Pottery, Handloom Weaving, Carpentry, Metal Casting & Indian Guilds",
    concepts: [
      "The pottery process: Kneading clay, shaping on the potter's wheel, drying, smoothing, and baking in high-temperature kilns (bhatti).",
      "The handloom weaving process: Spinning cotton into yarn, dying vibrant colors, setting the warp and weft on wooden looms.",
      "Working with wood, bamboo, and metal: Carpentry tools (saw, chisel, plane) and blacksmith forging.",
      "Dignity of manual labor and supporting traditional Indian artisanal crafts."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">The Traditional Pottery Making Cycle</text>
      <!-- Step 1: Clay -->
      <g transform="translate(90, 75)">
        <circle cx="0" cy="0" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
        <text x="0" y="5" font-size="16" text-anchor="middle">🟤</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">1. मिट्टी गूंधना (Kneading)</text>
      </g>
      <text x="160" y="75" font-size="16" fill="#ea580c">➔</text>
      <!-- Step 2: Wheel -->
      <g transform="translate(230, 75)">
        <circle cx="0" cy="0" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
        <text x="0" y="5" font-size="16" text-anchor="middle">⚙️🏺</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">2. चाक पर गढ़ना (Shaping)</text>
      </g>
      <text x="300" y="75" font-size="16" fill="#ea580c">➔</text>
      <!-- Step 3: Drying -->
      <g transform="translate(370, 75)">
        <circle cx="0" cy="0" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
        <text x="0" y="5" font-size="16" text-anchor="middle">☀️</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">3. धूप में सुखाना (Drying)</text>
      </g>
      <text x="440" y="75" font-size="16" fill="#ea580c">➔</text>
      <!-- Step 4: Kiln -->
      <g transform="translate(500, 75)">
        <circle cx="0" cy="0" r="24" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
        <text x="0" y="5" font-size="16" text-anchor="middle">🔥🏺</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#991b1b" text-anchor="middle">4. भट्टी में पकाना (Baking)</text>
      </g>
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Baking in the kiln chemically hardens clay, making earthen pots waterproof and durable.</text>
    </svg>`,
    questions: [
      {
        category: "Traditional Crafts & Industrial Process",
        q: "Describe the four main stages in making an earthen water pot (matka). Why are raw clay pots baked in a kiln (bhatti)?",
        ans: `<strong>Four Stages of Making a Matka:</strong><br>
1. <strong>Clay Preparation:</strong> Fine clay is dug from pond beds, sieved to remove stones, mixed with water, and kneaded thoroughly with feet and hands to make it smooth and pliable.<br>
2. <strong>Shaping on the Potter's Wheel (Chak):</strong> The lump of clay is centered on a spinning wooden or stone wheel. The potter uses skilled fingers to hollow and shape the wet pot, then cuts it off with a thread.<br>
3. <strong>Beating and Drying:</strong> The base is expanded by beating with a wooden mallet (thapa) and stone anvil (pindi), then dried slowly in shade and sunlight.<br>
4. <strong>Firing in the Kiln (Aawa/Bhatti):</strong> Pots are stacked with straw and dried cow dung and fired at over 800°C.<br><br>
<strong>Why Baking is Essential:</strong><br>
Raw sun-dried clay instantly dissolves back into mud when filled with water. High kiln heat fuses the minerals in the clay, permanently hardening it into porous ceramic terracotta that can store water and keep it naturally cool through evaporation.`,
        marks: 4,
        rubric: [
          { key: "Detailed description of all 4 pottery stages", marks: "2.5 M" },
          { key: "Scientific explanation of heat fusing clay into permanent terracotta", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Eco-Friendly Earthen Diyas for Diwali",
      text: "During festivals, markets flood with imported plastic electrical lights, leaving local potter families with unsold earthen lamps (diyas).",
      question: "Why is buying traditional earthen diyas superior for both the local economy and the environment?",
      answer: "Clay diyas are 100% biodegradable, non-toxic, and made from natural earth, leaving zero electronic plastic waste. Furthermore, purchasing diyas directly supports the honest livelihood of local village potters, preserving centuries of heritage craftsmanship.",
      rubric: "1.5 Marks for environmental biodegradability; 1.5 Marks for local artisan livelihood support."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 9: DIFFERENT LANDS, DIFFERENT LIVES
  // -------------------------------------------------------------------------
  {
    id: "oww9",
    num: 9,
    unit: "Unit 5: Our Environment",
    title: "Different Lands, Different Lives",
    subtitle: "Geographical Diversity of India: Mountains, Deserts, Coastal Plains & River Valleys",
    concepts: [
      "The physical diversity of India: Cold desert of Ladakh, Thar Desert of Rajasthan, lush coastal strips of Kerala, and fertile Indo-Gangetic plains.",
      "How climate shapes lifestyle: Clothing (thick woolen gonchas in Ladakh vs light cottons in Rajasthan), housing architecture (sloping roofs vs flat mud roofs), and food habits.",
      "Transport adaptations: Yaks and double-humped camels in cold mountains; camels in sandy deserts; boats in coastal backwaters.",
      "National integration: Unity in diversity across geographical terrains."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Geographical Diversity of India — Climate and Housing</text>
      <!-- Ladakh -->
      <g transform="translate(100, 75)">
        <polygon points="-25,10 0,-20 25,10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        <rect x="-20" y="10" width="40" height="25" fill="#f1f5f9" stroke="#475569"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#0f172a" text-anchor="middle">लद्दाख (Cold Desert)</text>
        <text x="0" y="64" font-family="system-ui, sans-serif" font-size="8" fill="#475569" text-anchor="middle">दो मंजिला पत्थर-लकड़ी घर</text>
      </g>
      <!-- Rajasthan -->
      <g transform="translate(290, 75)">
        <rect x="-25" y="-10" width="50" height="45" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">राजस्थान (Thar Desert)</text>
        <text x="0" y="64" font-family="system-ui, sans-serif" font-size="8" fill="#a16207" text-anchor="middle">मोटी मिट्टी की दीवारें</text>
      </g>
      <!-- Kerala Coast -->
      <g transform="translate(480, 75)">
        <polygon points="-30,-5 0,-25 30,-5" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
        <rect x="-22" y="-5" width="44" height="40" fill="#fee2e2" stroke="#dc2626"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#991b1b" text-anchor="middle">केरल (Coastal Region)</text>
        <text x="0" y="64" font-family="system-ui, sans-serif" font-size="8" fill="#b91c1c" text-anchor="middle">ढलवां खपरैल छत (Sloping)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Human shelter and clothing naturally adapt to local climate, terrain, and building materials.</text>
    </svg>`,
    questions: [
      {
        category: "Physical Geography & Human Adaptations",
        q: "Compare the houses built in the hot desert of Rajasthan with the houses built in rainy Kerala. How does the climate determine their architectural design?",
        ans: `<strong>1. Houses in the Thar Desert (Rajasthan):</strong><br>
• <strong>Features:</strong> Built with very thick mud or adobe walls, small high windows, and flat roofs covered with thorny acacia bushes.<br>
• <strong>Climatic Reason:</strong> Thick mud walls prevent scorching desert heat from penetrating inside during the day, keeping the rooms cool. Flat roofs are used to sleep under open night skies and collect scarce rainwater.<br><br>
<strong>2. Houses in Coastal Kerala:</strong><br>
• <strong>Features:</strong> Built with steeply sloping roofs lined with red terracotta tiles (khaprail) and surrounded by wide open verandas.<br>
• <strong>Climatic Reason:</strong> Kerala receives heavy, torrential monsoon rainfall. Steeply sloping roofs ensure rainwater drains off rapidly without pooling or leaking, while open verandas allow humid sea breezes to ventilate the home.`,
        marks: 4,
        rubric: [
          { key: "Detailed description of Rajasthan mud houses & heat insulation", marks: "2.0 M" },
          { key: "Detailed description of Kerala sloping roofs & heavy rain drainage", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "The Ship of the Desert vs. Transport in Ladakh",
      text: "A camel can travel comfortably across soft sand dunes without sinking, while a horse struggles to walk.",
      question: "What physical adaptations make the camel the ideal animal for sandy deserts?",
      answer: "1. <strong>Wide Padded Hooves:</strong> Spread body weight across a large surface area, preventing feet from sinking into loose sand.<br>2. <strong>Hump:</strong> Stores fat that can be metabolized into energy and water during long journeys.<br>3. <strong>Water Conservation:</strong> Camels do not sweat easily, produce concentrated urine, and can drink 100 litres of water at once, surviving days without drinking.",
      rubric: "1.5 Marks for padded feet adaptation; 1.5 Marks for fat hump and water conservation."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: OUR SKY
  // -------------------------------------------------------------------------
  {
    id: "oww10",
    num: 10,
    unit: "Unit 5: Our Environment",
    title: "Our Sky",
    subtitle: "The Solar System, Earth's Rotation & Revolution, Moon Phases & Constellations",
    concepts: [
      "The daytime sky vs nighttime sky: The Sun as our ultimate source of light, heat, and life.",
      "Day and Night cycle: Caused by Earth's rotation on its imaginary tilted axis once every 24 hours.",
      "The Changing Moon: Phases of the Moon (New Moon / Amavasya, Crescent, Half Moon, Full Moon / Purnima) due to sunlight reflection.",
      "Constellations: Recognizable star patterns in the night sky (Ursa Major / Saptarshi, Orion / Kalpurush) and locating the Pole Star (Dhruva Tara)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#090d16" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#fde047" text-anchor="middle">Earth's Rotation — Day and Night Cycle</text>
      <!-- Sun -->
      <circle cx="80" cy="85" r="32" fill="#f59e0b" stroke="#fde047" stroke-width="2.5"/>
      <text x="80" y="90" font-size="20" text-anchor="middle">☀️</text>
      <text x="80" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#fde047" text-anchor="middle">Sunlight Rays</text>
      <!-- Light rays -->
      <line x1="120" y1="70" x2="220" y2="70" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4"/>
      <line x1="120" y1="85" x2="220" y2="85" stroke="#fde047" stroke-width="2"/>
      <line x1="120" y1="100" x2="220" y2="100" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4"/>
      <!-- Earth -->
      <g transform="translate(280, 85)">
        <circle cx="0" cy="0" r="35" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Day side -->
        <path d="M 0 -35 A 35 35 0 0 0 0 35 Z" fill="#60a5fa" opacity="0.8"/>
        <!-- Axis -->
        <line x1="-15" y1="-45" x2="15" y2="45" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="2,2"/>
        <text x="-16" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#0f172a" text-anchor="middle">DAY</text>
        <text x="16" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#93c5fd" text-anchor="middle">NIGHT</text>
      </g>
      <!-- Saptarshi Stars -->
      <g transform="translate(460, 80)">
        <circle cx="-30" cy="-20" r="3" fill="#ffffff"/>
        <circle cx="-15" cy="-20" r="3" fill="#ffffff"/>
        <circle cx="-5" cy="-5" r="3" fill="#ffffff"/>
        <circle cx="-25" cy="-5" r="3" fill="#ffffff"/>
        <circle cx="10" cy="5" r="3" fill="#ffffff"/>
        <circle cx="25" cy="10" r="3" fill="#ffffff"/>
        <circle cx="40" cy="25" r="3" fill="#ffffff"/>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#e2e8f0" text-anchor="middle">सप्तर्षि (Saptarshi)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#cbd5e1" text-anchor="middle">Earth rotates West to East in 24 hours: The side facing the Sun has Day, the side in shadow has Night.</text>
    </svg>`,
    questions: [
      {
        category: "Astronomy & Planetary Science",
        q: "Why do day and night occur on Earth? Why does the Moon appear to change its shape every night throughout the month?",
        ans: `<strong>1. Why Day and Night occur:</strong><br>
The Earth is a spherical planet that rotates on its tilted axis from West to East once every <strong>24 hours</strong>. As it rotates, only one half of the Earth faces the Sun at any given time, experiencing <strong>Day</strong>. The opposite half faces away into shadow, experiencing <strong>Night</strong>. As the Earth keeps spinning continuously, day and night follow each other smoothly.<br><br>
<strong>2. Why the Moon's shape appears to change (Phases of the Moon):</strong><br>
The Moon does not produce any light of its own; it reflects sunlight like a mirror. As the Moon orbits around the Earth once every 29.5 days, the angle between the Sun, Earth, and Moon changes constantly. From Earth, we can only see that portion of the sunlit half of the Moon that faces us. When none of the sunlit side faces Earth, it is a <strong>New Moon (Amavasya)</strong>; when the entire illuminated side faces us, it is a <strong>Full Moon (Purnima)</strong>.`,
        marks: 4,
        rubric: [
          { key: "Scientific explanation of Earth's 24-hour rotation causing day/night", marks: "2.0 M" },
          { key: "Explanation of Moon reflecting sunlight and orbital angle phases", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Night Sky Navigation Using the Pole Star",
      text: "Ancient sailors and desert travelers had no compass or GPS. On dark clear nights, they never got lost.",
      question: "How did travelers locate true North in the night sky using the Saptarshi (Big Dipper) constellation?",
      answer: "Travelers located the seven bright stars of <strong>Saptarshi (Ursa Major)</strong>. The two stars forming the outer front wall of the 'dipper cup' are called the <strong>Pointer Stars</strong>. Drawing an imaginary straight line through these two pointer stars and extending it five times upward leads directly to a bright, steady star called the <strong>Pole Star (Dhruva Tara)</strong>, which always points to true geographic North.",
      rubric: "1.5 Marks for identifying Saptarshi and Pointer Stars; 1.5 Marks for projecting line to Pole Star (North)."
    }
  }
];

module.exports = { wondrousWorldChapters };
