// Official NCERT Class 4 The World Around Us (Our Wondrous World) Complete Dataset - Chapters 1 to 10
// Aligned with New NEP 2020 & NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

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
      <g transform="translate(290, 52)">
        <rect x="-70" y="-14" width="140" height="28" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5" rx="6"/>
        <text x="0" y="4" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e3a8a" text-anchor="middle">👴👵 Grandparents</text>
      </g>
      <line x1="290" y1="66" x2="290" y2="82" stroke="#2563eb" stroke-width="2"/>
      <line x1="160" y1="82" x2="420" y2="82" stroke="#2563eb" stroke-width="2"/>
      <line x1="160" y1="82" x2="160" y2="95" stroke="#2563eb" stroke-width="2"/>
      <g transform="translate(160, 108)">
        <rect x="-65" y="-13" width="130" height="26" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4"/>
        <text x="0" y="4" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">👨👩 Father &amp; Mother</text>
      </g>
      <line x1="420" y1="82" x2="420" y2="95" stroke="#2563eb" stroke-width="2"/>
      <g transform="translate(420, 108)">
        <rect x="-65" y="-13" width="130" height="26" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4"/>
        <text x="0" y="4" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">👨👩 Uncle &amp; Aunt</text>
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
      },
      {
        category: "Observation & Field Work • Family Tree",
        q: "What is a 'family tree'? Distinguish between maternal and paternal relatives with two examples each.",
        ans: `<strong>1. Family Tree:</strong><br>
A family tree is a graphical diagram that illustrates the relationships between different generations of a family, starting from the oldest ancestors (grandparents or great-grandparents) down to the youngest children.<br><br>
<strong>2. Paternal vs. Maternal Relatives:</strong><br>
• <strong>Paternal Relatives (from Father's side):</strong> Paternal Grandfather (Dada ji), Paternal Grandmother (Dadi ji), Father's brother (Chacha ji / Tau ji), Father's sister (Bua ji).<br>
• <strong>Maternal Relatives (from Mother's side):</strong> Maternal Grandfather (Nana ji), Maternal Grandmother (Nani ji), Mother's brother (Mama ji), Mother's sister (Masi ji).`,
        marks: 3,
        rubric: [
          { key: "Accurate definition of a family tree across generations", marks: "1.5 M" },
          { key: "Correct differentiation and examples of paternal and maternal relatives", marks: "1.5 M" }
        ]
      },
      {
        category: "Think and Discuss • Caring for Elders",
        q: "Why do elderly family members require special care and attention? List three practical ways children can support grandparents at home.",
        ans: `<strong>1. Why Elders Need Special Care:</strong><br>
As people grow old, their physical strength diminishes, vision and hearing weaken, joints become stiff, and they may suffer from chronic health conditions. They also feel lonely if not engaged in family conversations.<br><br>
<strong>2. Ways Children Can Help:</strong><br>
• <strong>Physical Assistance:</strong> Fetching water, glasses, or medicines on time, and helping them walk safely without slippery obstacles.<br>
• <strong>Emotional Companionship:</strong> Sitting with them, listening attentively to their life stories, and reading newspapers or books aloud to them.<br>
• <strong>Digital Assistance:</strong> Helping them dial phone numbers or video call relatives on smartphones with patience and kindness.`,
        marks: 3,
        rubric: [
          { key: "Scientific and emotional reasons for elder vulnerability", marks: "1.5 M" },
          { key: "Three realistic, actionable ways children can support elders", marks: "1.5 M" }
        ]
      },
      {
        category: "Life Skills & Values • Changing Families",
        q: "What are the common reasons why families move from one place to another? How can a child adapt to a new neighbourhood?",
        ans: `<strong>1. Reasons for Family Relocation:</strong><br>
• <strong>Job Transfers & Employment:</strong> Parents moving to new cities for work opportunities or promotions.<br>
• <strong>Higher Education:</strong> Shifting to cities with better schools, colleges, and training centres.<br>
• <strong>Natural Calamities:</strong> Temporary or permanent displacement due to floods, earthquakes, or droughts.<br><br>
<strong>2. Adapting to a New Neighbourhood:</strong><br>
A child can adapt smoothly by: introducing themselves politely to neighborhood children in the park, learning local customs and language, participating in community festivals, and keeping in touch with old friends while embracing new ones.`,
        marks: 2,
        rubric: [
          { key: "Valid reasons for migration/relocation", marks: "1.0 M" },
          { key: "Positive psychological strategies for adapting to a new environment", marks: "1.0 M" }
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
        <text x="0" y="2" font-size="18" text-anchor="middle">👮</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Police Station</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Public institutions ensure our health, safety, communication, and welfare.</text>
    </svg>`,
    questions: [
      {
        category: "Institutional Inquiry • Public Utilities",
        q: "Name four essential public places in a neighbourhood and explain the primary function of each.",
        ans: `<strong>Four Essential Public Places:</strong><br>
1. <strong>Primary Health Centre / Hospital:</strong> Provides first-aid, outpatient medical consultations, life-saving vaccinations, and emergency treatment for sick and injured citizens.<br>
2. <strong>Post Office:</strong> Delivers letters, parcels, and money orders, and offers secure postal savings schemes and national insurance services.<br>
3. <strong>Police Station:</strong> Maintains law and order, investigates local crimes, ensures neighborhood security, and assists citizens in distress.<br>
4. <strong>Fire Station:</strong> Operates specialized fire engines and rescue personnel to extinguish fires, rescue people during building collapses, and manage flood emergencies.`,
        marks: 4,
        rubric: [
          { key: "Naming four valid public institutions", marks: "2.0 M" },
          { key: "Accurate, concise explanation of each institution's function", marks: "2.0 M" }
        ]
      },
      {
        category: "Mapping & Navigation • Reading Maps",
        q: "What is a 'landmark'? How do cardinal directions (North, South, East, West) and a map key (legend) help us find a place?",
        ans: `<strong>1. Landmark:</strong><br>
A landmark is a prominent, well-known, and easily recognizable building or natural feature (like a tall water tank, a large banyan tree, a school, or a temple) that serves as a reference point for finding locations.<br><br>
<strong>2. Cardinal Directions & Map Key:</strong><br>
• <strong>Cardinal Directions (N, S, E, W):</strong> Give spatial orientation. On standard maps, North is at the top, South at the bottom, East to the right, and West to the left.<br>
• <strong>Map Key (Legend):</strong> Explains the symbols, colours, and icons used on the map (e.g., a red cross for a hospital, a blue strip for a river, or a tent for a camp).`,
        marks: 3,
        rubric: [
          { key: "Definition of landmark with realistic examples", marks: "1.5 M" },
          { key: "Role of cardinal directions and map legend in spatial navigation", marks: "1.5 M" }
        ]
      },
      {
        category: "Civic Responsibility • Waste Segregation",
        q: "Why is it important to segregate waste at source into green and blue bins? Give two examples of items that go into each bin.",
        ans: `<strong>1. Importance of Segregating at Source:</strong><br>
Segregating waste at home prevents wet biodegradable garbage from mixing with dry recyclable items. Mixed waste rots in open landfills, generating toxic methane gas and groundwater-poisoning leachate. Proper segregation enables composting of wet waste and recycling of dry materials.<br><br>
<strong>2. Bin Classification:</strong><br>
• <strong>Green Bin (Wet / Biodegradable Waste):</strong> Fruit peels, vegetable scraps, leftover food, tea leaves.<br>
• <strong>Blue Bin (Dry / Recyclable Waste):</strong> Plastic bottles, cardboard boxes, newspapers, metal cans, glass jars.`,
        marks: 3,
        rubric: [
          { key: "Environmental importance of source segregation", marks: "1.5 M" },
          { key: "Two accurate examples each for green and blue bins", marks: "1.5 M" }
        ]
      },
      {
        category: "Social Harmony • Dignity of Labour",
        q: "What do you understand by 'Dignity of Labour'? How should we treat sanitation workers who clean our streets?",
        ans: `<strong>1. Dignity of Labour:</strong><br>
Dignity of labour means that every honest job and service—whether done by a surgeon, engineer, farmer, or sweeper—deserves equal respect, honour, and fair compensation. No honest work is 'low' or 'dirty'.<br><br>
<strong>2. Treatment of Sanitation Workers:</strong><br>
We must treat sanitation workers with courteous language, greet them respectfully, never litter on streets, hand over properly tied and segregated waste, and support their rights to protective safety gear (gloves, masks, boots).`,
        marks: 2,
        rubric: [
          { key: "Concept of dignity of labour explained clearly", marks: "1.0 M" },
          { key: "Respectful and practical civic conduct toward sanitation workers", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Waste Segregation and Community Composting",
      text: "Residents of an apartment society dump mixed garbage in open street corners, attracting stray dogs and foul smell.",
      question: "Design an action plan for the resident welfare association to solve this civic problem permanently.",
      answer: "The association should implement a mandatory three-bin system (Green for wet kitchen waste, Blue for dry recyclables, Red for hazardous sanitary/electronic waste). They should set up an on-site aerated composting pit for wet waste to produce rich garden manure, partner with authorized recyclers for dry waste, and install CCTV monitoring to fine repeated open littering.",
      rubric: "1.5 Marks for source-segregation and composting mechanism; 1.5 Marks for community enforcement and recycling partnership."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 3: NATURE TRAIL
  // -------------------------------------------------------------------------
  {
    id: "oww3",
    num: 3,
    unit: "Unit 2: Sustenance & Nature",
    title: "Nature Trail",
    subtitle: "Plant Biodiversity, Leaf Variations, Bark Textures, Tree Canopies & Urban Ecology",
    concepts: [
      "Observing plant diversity: Herbs, shrubs, climbers, creepers, and giant perennial trees.",
      "Leaf variations: Size, shape (oval, heart-shaped, needle-like), margin (smooth, serrated, lobed), and venation (reticulate vs. parallel).",
      "Bark textures and trunk patterns that protect trees from extreme weather, pests, and fire.",
      "Ecological benefits of urban trees: Shade, temperature cooling, soil retention, and bird sanctuaries."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">Nature Trail — Leaf Morphology &amp; Venation Types</text>
      <g transform="translate(150, 80)">
        <ellipse cx="0" cy="0" rx="40" ry="22" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
        <line x1="-40" y1="0" x2="40" y2="0" stroke="#15803d" stroke-width="2"/>
        <line x1="-20" y1="0" x2="-10" y2="-15" stroke="#15803d" stroke-width="1.5"/>
        <line x1="0" y1="0" x2="10" y2="-15" stroke="#15803d" stroke-width="1.5"/>
        <line x1="20" y1="0" x2="30" y2="-15" stroke="#15803d" stroke-width="1.5"/>
        <line x1="-10" y1="0" x2="0" y2="15" stroke="#15803d" stroke-width="1.5"/>
        <line x1="10" y1="0" x2="20" y2="15" stroke="#15803d" stroke-width="1.5"/>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Reticulate Venation</text>
        <text x="0" y="50" font-family="system-ui, sans-serif" font-size="8" fill="#166534" text-anchor="middle">(Peepal, Mango, Rose)</text>
      </g>
      <g transform="translate(420, 80)">
        <rect x="-45" y="-18" width="90" height="36" rx="4" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
        <line x1="-40" y1="-10" x2="40" y2="-10" stroke="#15803d" stroke-width="1.5"/>
        <line x1="-40" y1="0" x2="40" y2="0" stroke="#15803d" stroke-width="2"/>
        <line x1="-40" y1="10" x2="40" y2="10" stroke="#15803d" stroke-width="1.5"/>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Parallel Venation</text>
        <text x="0" y="50" font-family="system-ui, sans-serif" font-size="8" fill="#166534" text-anchor="middle">(Banana, Grass, Wheat)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#166534" text-anchor="middle">Veins transport water, minerals, and glucose throughout the leaf blade.</text>
    </svg>`,
    questions: [
      {
        category: "Botanical Observation • Leaf Venation",
        q: "What is 'leaf venation'? Differentiate between reticulate and parallel venation with two plant examples for each.",
        ans: `<strong>1. Leaf Venation:</strong><br>
Leaf venation is the design or pattern of veins (tubes carrying water, minerals, and synthesized food) distributed across the lamina (leaf blade).<br><br>
<strong>2. Reticulate vs. Parallel Venation:</strong><br>
• <strong>Reticulate Venation:</strong> The veins branch out from a prominent central midrib in an irregular web-like or net-like network across the leaf blade. <em>Examples:</em> Peepal, Mango, Neem, Rose, China Rose.<br>
• <strong>Parallel Venation:</strong> The veins run parallel to one another from the leaf base to the tip without forming a network. <em>Examples:</em> Banana, Grass, Wheat, Maize, Bamboo, Palm.`,
        marks: 3,
        rubric: [
          { key: "Definition of venation and function of veins", marks: "1.0 M" },
          { key: "Precise contrast with 2 correct examples for each venation type", marks: "2.0 M" }
        ]
      },
      {
        category: "Plant Anatomy • Bark and Trunk",
        q: "What is tree bark, and why is it important for the survival of a tree? How does bark vary across different trees?",
        ans: `<strong>1. Function of Tree Bark:</strong><br>
The bark is the outermost protective layer covering the trunk and branches of a woody tree. It acts like a tree's skin, protecting inner living tissues from mechanical injury, extreme heat, severe winter frost, insect attacks, fungal infections, and dehydration.<br><br>
<strong>2. Variations in Bark:</strong><br>
• <strong>Rough and Furrowed:</strong> Neem, Peepal, and Banyan have thick, deeply cracked, rough bark.<br>
• <strong>Smooth and Peeling:</strong> Eucalyptus and Silver Birch have smooth bark that sheds in long paper-like strips.<br>
• <strong>Spiny Bark:</strong> Silk Cotton (Semal) tree trunks bear conical woody prickles for defense.`,
        marks: 3,
        rubric: [
          { key: "Protective functions of bark clearly explained", marks: "1.5 M" },
          { key: "Describing different bark textures with tree examples", marks: "1.5 M" }
        ]
      },
      {
        category: "Urban Ecology • Benefits of Trees",
        q: "Why are trees called the 'green lungs' of cities? Mention three ways large roadside trees make our cities liveable.",
        ans: `<strong>1. Why Called Green Lungs:</strong><br>
Trees undergo photosynthesis, absorbing harmful greenhouse gases like carbon dioxide and releasing fresh, oxygenated air essential for human and animal respiration. They filter airborne dust and soot particles on their leaf surfaces.<br><br>
<strong>2. Three Ways Trees Make Cities Liveable:</strong><br>
• <strong>Temperature Cooling:</strong> Transpiration from tree canopies lowers ambient neighborhood temperatures by 2°C to 5°C, reducing the urban heat island effect.<br>
• <strong>Noise & Pollution Buffer:</strong> Dense roadside foliage absorbs traffic noise and traps vehicle exhaust pollutants.<br>
• <strong>Biodiversity Support:</strong> Canopies provide nesting grounds and shade for birds, squirrels, butterflies, and pollinators.`,
        marks: 3,
        rubric: [
          { key: "Explanation of oxygen production and CO2 absorption", marks: "1.5 M" },
          { key: "Three distinct ecological/urban benefits described", marks: "1.5 M" }
        ]
      },
      {
        category: "Practical Activity • Making a Herbarium",
        q: "Describe the step-by-step process of preparing a leaf herbarium sheet for nature study.",
        ans: `<strong>Steps to Prepare a Herbarium Sheet:</strong><br>
1. <strong>Collection:</strong> Pick fresh, fallen, healthy leaves of different shapes from the ground (avoid tearing living branches).<br>
2. <strong>Pressing & Drying:</strong> Place the leaves flat between sheets of old newspaper or blotting paper, and place a heavy book on top for 5 to 7 days until all moisture is absorbed.<br>
3. <strong>Mounting:</strong> Carefully paste the dried, flattened leaves onto a thick chart sheet using small strips of paper tape.<br>
4. <strong>Labelling:</strong> Write the common name, scientific name, date, location of collection, leaf shape, and venation type beside each specimen.`,
        marks: 2,
        rubric: [
          { key: "Four correct sequential steps (collection, pressing, mounting, labelling)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Conserving Ancient Sacred Groves and Heritage Trees",
      text: "A 150-year-old banyan tree on a village boundary is marked for cutting to widen a four-lane highway.",
      question: "How can the village community propose an eco-friendly engineering solution to save the heritage tree?",
      answer: "The village can petition the highway authority to build a curved bypass or split the road into two divided lanes curving around the banyan tree. Large heritage trees support thousands of bird nests, stabilize soil, and represent community identity. Translocation or route realignment saves decades of natural capital.",
      rubric: "1.5 Marks for proposing route realignment or median preservation; 1.5 Marks for articulating ecological and community value."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: GROWING UP WITH NATURE
  // -------------------------------------------------------------------------
  {
    id: "oww4",
    num: 4,
    unit: "Unit 2: Sustenance & Nature",
    title: "Growing up with Nature",
    subtitle: "Plant Germination, Animal Life Cycles, Pet Care & Behavioral Adaptations",
    concepts: [
      "Conditions for seed germination: Water, oxygen/air, suitable temperature, and viable cotyledons.",
      "The developmental stages of a plant: Seed coat rupture, radicle (root) emergence, plumule (shoot) growth, and true leaves.",
      "Life cycles in animals: Complete metamorphosis in butterflies (egg, larva, pupa, adult) vs. direct development in mammals.",
      "Compassionate pet care, responsible feeding, hygienic housing, and recognizing distress signals in animals."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Growing up with Nature — Metamorphosis of a Butterfly</text>
      <g transform="translate(80, 80)">
        <circle cx="0" cy="0" r="18" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="0" y="4" font-size="12" text-anchor="middle">🥚</text>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#92400e" text-anchor="middle">1. Egg</text>
      </g>
      <text x="125" y="80" font-size="14" fill="#d97706">➔</text>
      <g transform="translate(180, 80)">
        <rect x="-24" y="-12" width="48" height="24" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="0" y="4" font-size="12" text-anchor="middle">🐛</text>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#14532d" text-anchor="middle">2. Caterpillar</text>
      </g>
      <text x="235" y="80" font-size="14" fill="#16a34a">➔</text>
      <g transform="translate(300, 80)">
        <ellipse cx="0" cy="0" rx="16" ry="22" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
        <text x="0" y="4" font-size="12" text-anchor="middle">🌿</text>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#9a3412" text-anchor="middle">3. Pupa (Chrysalis)</text>
      </g>
      <text x="365" y="80" font-size="14" fill="#ea580c">➔</text>
      <g transform="translate(450, 80)">
        <circle cx="0" cy="0" r="26" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
        <text x="0" y="5" font-size="18" text-anchor="middle">🦋</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#831843" text-anchor="middle">4. Adult Butterfly</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">Complete metamorphosis involves radical physical transformation at every stage.</text>
    </svg>`,
    questions: [
      {
        category: "Scientific Inquiry • Seed Germination",
        q: "What conditions are necessary for a bean seed to germinate? Explain the role of the radicle and plumule.",
        ans: `<strong>1. Necessary Conditions for Germination:</strong><br>
• <strong>Water (Moisture):</strong> Softens the tough seed coat and activates dormant growth enzymes.<br>
• <strong>Air (Oxygen):</strong> Needed for cellular respiration to generate energy for cell division.<br>
• <strong>Warmth (Suitable Temperature):</strong> Optimum warmth allows biochemical reactions to proceed smoothly. (Light is generally not required until leaves appear).<br><br>
<strong>2. Role of Radicle and Plumule:</strong><br>
• <strong>Radicle:</strong> The embryonic root that grows downward into the soil (positive geotropism) to anchor the seedling and absorb water and dissolved minerals.<br>
• <strong>Plumule:</strong> The embryonic shoot that grows upward toward sunlight (positive phototropism) to develop stems, leaves, and flowers.`,
        marks: 3,
        rubric: [
          { key: "Three vital environmental factors for germination", marks: "1.5 M" },
          { key: "Correct biological functions of radicle and plumule", marks: "1.5 M" }
        ]
      },
      {
        category: "Life Cycles • Metamorphosis",
        q: "Describe the four stages in the life cycle of a butterfly. Why does the caterpillar eat voraciously?",
        ans: `<strong>1. Four Stages of Butterfly Life Cycle (Metamorphosis):</strong><br>
1. <strong>Egg:</strong> Laid by the adult female butterfly on the underside of a host plant's leaf.<br>
2. <strong>Larva (Caterpillar):</strong> Hatches from the egg; worm-like, with chewing mouthparts.<br>
3. <strong>Pupa (Chrysalis):</strong> The caterpillar spins a protective cocoon or shell around itself; inside, dramatic organ reorganization takes place.<br>
4. <strong>Adult Butterfly:</strong> Emerges with wings and siphoning mouthparts to feed on flower nectar and reproduce.<br><br>
<strong>2. Why Caterpillars Eat Voraciously:</strong><br>
The caterpillar needs to store immense energy and nutrients because during the pupa stage, it cannot eat at all. All the energy required to grow wings, legs, and antennae comes from the food consumed during the larval stage.`,
        marks: 4,
        rubric: [
          { key: "Accurate description of all four stages", marks: "2.5 M" },
          { key: "Biological reasoning for the caterpillar's intense feeding", marks: "1.5 M" }
        ]
      },
      {
        category: "Animal Welfare • Responsible Pet Care",
        q: "What responsibilities must a family take when adopting a domestic pet (like a dog or cat)?",
        ans: `<strong>Responsibilities of Pet Ownership:</strong><br>
1. <strong>Nutritious Food & Clean Water:</strong> Providing species-appropriate, balanced meals at fixed intervals and 24/7 access to fresh drinking water.<br>
2. <strong>Veterinary Health:</strong> Timely vaccinations (especially anti-rabies), regular deworming, and prompt medical check-ups when sick.<br>
3. <strong>Hygienic Living Space:</strong> A clean, dry, well-ventilated shelter with protection from extreme cold or summer heat.<br>
4. <strong>Exercise & Affection:</strong> Daily walking, playtime, and gentle, loving interaction without teasing or physical cruelty.`,
        marks: 3,
        rubric: [
          { key: "Four comprehensive dimensions of pet care (food, health, shelter, affection)", marks: "3.0 M" }
        ]
      },
      {
        category: "Comparative Biology • Plant vs. Animal Growth",
        q: "How does the growth of a mango tree differ from the growth of a puppy? State two key differences.",
        ans: `<strong>Differences in Growth:</strong><br>
1. <strong>Locational vs. Proportionate Growth:</strong> A plant grows only at specific growing tips (meristems at root tips and stem tips), whereas a puppy grows uniformly across all body parts simultaneously.<br>
2. <strong>Duration of Growth:</strong> A tree can continue to grow new branches, leaves, and rings of wood throughout its life (indeterminate growth), while a puppy stops growing in height and length once it reaches adult maturity (determinate growth).`,
        marks: 2,
        rubric: [
          { key: "Two accurate, scientifically valid differences in growth patterns", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Saving Dehydrated Migratory Birds in Peak Summer",
      text: "During blistering summer heatwaves, small birds often collapse on residential balconies from severe dehydration.",
      question: "Design a simple, hygienic bird watering and feeding station that Class 4 students can install.",
      answer: "Students can place shallow earthen bowls (sakoras) filled with clean, cool water in shaded balcony spots or tree branches, changing the water twice daily to prevent mosquito breeding. Adding grain trays with millets and sunflower seeds provides birds with quick energy without exposing them to predatory stray cats.",
      rubric: "1.5 Marks for earthen bowl setup and daily hygienic water change; 1.5 Marks for shade placement and predator protection."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 5: FOOD FOR HEALTH
  // -------------------------------------------------------------------------
  {
    id: "oww5",
    num: 5,
    unit: "Unit 2: Sustenance & Nature",
    title: "Food for Health",
    subtitle: "Nutrition, Digestion, Cooking Methods, Traditional Preservation & Safe Water",
    concepts: [
      "The major nutrient groups: Carbohydrates, proteins, fats, vitamins, minerals, dietary fibre (roughage), and water.",
      "The journey of food: Ploughing, sowing, irrigating, harvesting, storage in mandis, distribution, and cooking.",
      "Cooking techniques and nutrient preservation: Boiling, steaming, roasting, shallow frying, and fermentation.",
      "Food preservation principles: Sun-drying, salting, sugaring, pickling, and refrigeration to prevent microbial spoilage."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#c2410c" text-anchor="middle">Balanced Diet — The Five Essential Nutrient Pillars</text>
      <g transform="translate(75, 75)">
        <circle cx="0" cy="0" r="22" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">🌾</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#9a3412" text-anchor="middle">Energy Giving</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#7c2d12" text-anchor="middle">Carbs &amp; Fats</text>
      </g>
      <g transform="translate(180, 75)">
        <circle cx="0" cy="0" r="22" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">🥛 🫘</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#9a3412" text-anchor="middle">Body Building</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#7c2d12" text-anchor="middle">Proteins</text>
      </g>
      <g transform="translate(290, 75)">
        <circle cx="0" cy="0" r="22" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">🍎 🥕</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#9a3412" text-anchor="middle">Protective Food</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#7c2d12" text-anchor="middle">Vitamins/Minerals</text>
      </g>
      <g transform="translate(400, 75)">
        <circle cx="0" cy="0" r="22" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">🥗</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#9a3412" text-anchor="middle">Roughage</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#7c2d12" text-anchor="middle">Digestive Fibre</text>
      </g>
      <g transform="translate(505, 75)">
        <circle cx="0" cy="0" r="22" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">💧</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#9a3412" text-anchor="middle">Hydration</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#7c2d12" text-anchor="middle">Clean Water</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">A balanced diet provides all nutrients in proper proportions for growth, immunity, and stamina.</text>
    </svg>`,
    questions: [
      {
        category: "Nutritional Science • Balanced Diet",
        q: "What is a 'balanced diet'? Name the three major functional groups of food and provide two food sources for each.",
        ans: `<strong>1. Balanced Diet:</strong><br>
A balanced diet is a meal plan that contains all essential nutrients (carbohydrates, proteins, fats, vitamins, minerals, roughage, and water) in the right quantities required for growth, tissue repair, disease defense, and daily physical activity.<br><br>
<strong>2. Three Functional Food Groups:</strong><br>
• <strong>Energy-Giving Foods (Carbohydrates &amp; Fats):</strong> Supply instant and stored energy. <em>Sources:</em> Rice, wheat, potatoes, bananas, butter, ghee, nuts.<br>
• <strong>Body-Building Foods (Proteins):</strong> Build muscles, repair worn-out cells, and promote height growth. <em>Sources:</em> Pulses, milk, paneer, eggs, fish, soybean.<br>
• <strong>Protective Foods (Vitamins &amp; Minerals):</strong> Boost immunity, protect against infections, and keep eyes, skin, and bones healthy. <em>Sources:</em> Green leafy vegetables (spinach), citrus fruits, carrots, papaya.`,
        marks: 4,
        rubric: [
          { key: "Scientific definition of a balanced diet", marks: "1.0 M" },
          { key: "Clear categorization of 3 groups with 2 correct sources each", marks: "3.0 M" }
        ]
      },
      {
        category: "Culinary Science • Cooking Methods",
        q: "Why do we cook food before eating? Why is steaming considered healthier than deep frying?",
        ans: `<strong>1. Reasons for Cooking Food:</strong><br>
• Kills harmful disease-causing bacteria and parasites present in raw ingredients.<br>
• Breaks down complex starches and tough plant fibers, making food soft, palatable, and easily digestible.<br>
• Enhances taste, aroma, texture, and visual appeal.<br><br>
<strong>2. Steaming vs. Deep Frying:</strong><br>
• <strong>Steaming</strong> cooks food gently using water vapour without submerging it in oil. It retains delicate water-soluble vitamins (like Vitamin C and B-complex) and natural flavours without adding unhealthy cholesterol.<br>
• <strong>Deep frying</strong> exposes food to extreme heat, destroying vitamins and loading the food with excess trans-fats and calories that cause obesity and digestive sluggishness.`,
        marks: 3,
        rubric: [
          { key: "Three solid reasons why food is cooked", marks: "1.5 M" },
          { key: "Nutritional contrast between steaming and deep frying", marks: "1.5 M" }
        ]
      },
      {
        category: "Food Preservation • Methods & Principles",
        q: "Explain three traditional methods of preserving food at home. How do they prevent food spoilage?",
        ans: `<strong>Three Traditional Preservation Methods:</strong><br>
1. <strong>Sun-Drying (Dehydration):</strong> Removing all moisture content from foods by spreading them in strong sunlight. Without moisture, bacteria and fungi cannot grow. <em>Examples:</em> Raw mango slices (amchur), red chillies, papads.<br>
2. <strong>Pickling in Salt &amp; Mustard Oil:</strong> High salt draws out water from microbial cells (osmosis), and an oil layer on top blocks contact with airborne oxygen, preventing bacterial multiplication. <em>Examples:</em> Mango, lemon, and amla pickles.<br>
3. <strong>Sugar Syrupping:</strong> Storing boiled fruits in thick, concentrated sugar syrup where microbes cannot survive due to high osmotic pressure. <em>Examples:</em> Murabba, fruit jams.`,
        marks: 3,
        rubric: [
          { key: "Naming three distinct traditional preservation methods", marks: "1.5 M" },
          { key: "Scientific principle of microbial inhibition explained for each", marks: "1.5 M" }
        ]
      },
      {
        category: "Food Hygiene • Safe Handling",
        q: "What precautions should be taken to ensure that drinking water is completely safe from contamination?",
        ans: `<strong>Precautions for Safe Drinking Water:</strong><br>
1. <strong>Boiling:</strong> Boiling water vigorously for at least 10–15 minutes kills all bacteria, viruses, and amoebic cysts.<br>
2. <strong>Covered Storage:</strong> Always store drinking water in clean, covered vessels or earthen pots fitted with a tap.<br>
3. <strong>No Hand Dipping:</strong> Never dip unwashed fingers or glasses directly into storage pots; always use a clean, long-handled ladle or tap.`,
        marks: 2,
        rubric: [
          { key: "Mentioning boiling and two hygienic handling/storage rules", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Eliminating Food Wastage at Celebrations",
      text: "At a school cultural festival buffet, students fill plates with heaps of food but leave half of it uneaten in trash bins.",
      question: "How can the student council design a 'Zero Food Waste' campaign for future school events?",
      answer: "The student council can implement the 'Take What You Can Eat, Eat What You Take' policy, introduce smaller serving spoons to encourage second helpings, install a weighing scale at the disposal station to display total wasted food in kilograms, and partner with local verified food rescue NGOs to distribute untouched surplus food to community shelters.",
      rubric: "1.5 Marks for portion control and behavioural nudges; 1.5 Marks for waste measurement and NGO surplus distribution."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: HAPPY AND HEALTHY LIVING
  // -------------------------------------------------------------------------
  {
    id: "oww6",
    num: 6,
    unit: "Unit 3: Well-Being & Health",
    title: "Happy and Healthy Living",
    subtitle: "Personal Hygiene, Handwashing Drills, Dental Care, Sleep Rhythms & Mental Well-Being",
    concepts: [
      "Microbiology of everyday germs: How bacteria and viruses spread through unwashed hands and infected surfaces.",
      "The WHO 6-step handwashing technique using soap and running water for at least 20 seconds.",
      "Dental anatomy and oral health: Enamel, plaque prevention, correct brushing techniques, and cavity avoidance.",
      "Restorative sleep rhythms, outdoor physical play, managing stress through yoga and mindfulness, and screen-time balance."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f9ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0369a1" text-anchor="middle">Happy and Healthy Living — Daily Health Protocol</text>
      <g transform="translate(90, 80)">
        <circle cx="0" cy="0" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">🧼 🖐️</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#075985" text-anchor="middle">Hand Hygiene</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#0369a1" text-anchor="middle">20-Second Scrub</text>
      </g>
      <g transform="translate(220, 80)">
        <circle cx="0" cy="0" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">🪥 🦷</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#075985" text-anchor="middle">Dental Care</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#0369a1" text-anchor="middle">Brush 2x Daily</text>
      </g>
      <g transform="translate(355, 80)">
        <circle cx="0" cy="0" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">⚽ 🏃</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#075985" text-anchor="middle">Outdoor Play</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#0369a1" text-anchor="middle">60 Mins Active</text>
      </g>
      <g transform="translate(485, 80)">
        <circle cx="0" cy="0" r="22" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">😴 🌙</text>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#075985" text-anchor="middle">Sound Sleep</text>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="7" fill="#0369a1" text-anchor="middle">8–9 Hours Rest</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7" text-anchor="middle">True health unites clean habits, vibrant physical fitness, and peaceful mental joy.</text>
    </svg>`,
    questions: [
      {
        category: "Preventive Hygiene • Handwashing Drill",
        q: "Why is washing hands with soap and water more effective than using water alone? When should you mandatorily wash your hands?",
        ans: `<strong>1. Why Soap is Essential:</strong><br>
Water alone cannot dissolve grease, oils, and dirt where germs cling. Soap molecules have two ends: a water-loving head and an oil-loving tail. The oil-loving tails trap the grease and rip open the protective fatty membranes of viruses and bacteria, washing them away down the drain under running water.<br><br>
<strong>2. Mandatory Handwashing Occasions:</strong><br>
• Before preparing, serving, or eating meals.<br>
• Immediately after using the toilet.<br>
• After blowing your nose, coughing, or sneezing into your hands.<br>
• After playing outdoors, touching pets, or handling trash.`,
        marks: 3,
        rubric: [
          { key: "Scientific explanation of soap action on germs", marks: "1.5 M" },
          { key: "Four critical daily handwashing moments", marks: "1.5 M" }
        ]
      },
      {
        category: "Oral Anatomy • Dental Care",
        q: "How do dental cavities form? List three golden rules to keep teeth and gums healthy.",
        ans: `<strong>1. How Cavities Form:</strong><br>
When sweet, sticky food particles remain lodged between teeth, bacteria living in the mouth feed on these sugars and produce corrosive acids. These acids gradually dissolve tooth enamel (the hard outer protective layer), creating hollow holes called <strong>cavities</strong> or tooth decay.<br><br>
<strong>2. Three Golden Rules for Dental Health:</strong><br>
• <strong>Brush Twice Daily:</strong> Brush teeth thoroughly in gentle circular motions for two minutes every morning and before bed.<br>
• <strong>Clean Tongue &amp; Rinse:</strong> Use a tongue cleaner to remove bacterial film and rinse mouth vigorously with water after every meal.<br>
• <strong>Limit Sugary Snacks:</strong> Avoid excessive chocolates, sticky candies, and sugary soft drinks; eat crunchy foods like apples and carrots that clean teeth naturally.`,
        marks: 3,
        rubric: [
          { key: "Scientific process of plaque and acid cavity formation", marks: "1.5 M" },
          { key: "Three practical rules for long-term dental hygiene", marks: "1.5 M" }
        ]
      },
      {
        category: "Physiology & Rest • Sleep & Posture",
        q: "Why do growing children need 8 to 9 hours of uninterrupted sleep every night? What happens if you have poor posture?",
        ans: `<strong>1. Importance of Sound Sleep:</strong><br>
During deep sleep, the brain releases growth hormones, repairs body tissues, organizes daytime memories, and strengthens immune defenses. Inadequate sleep leads to morning fatigue, poor concentration in school, irritability, and weakened immunity.<br><br>
<strong>2. Consequences of Poor Posture:</strong><br>
Slouching, bending over desks, or looking down at screens for long periods strains spinal muscles, causes neck and back pain, compresses the chest (reducing lung capacity), and can lead to permanent spinal curvature.`,
        marks: 3,
        rubric: [
          { key: "Physiological benefits of deep sleep in children", marks: "1.5 M" },
          { key: "Physical hazards of slouching and bad sitting posture", marks: "1.5 M" }
        ]
      },
      {
        category: "Mental Health • Screen Time Balance",
        q: "What is 'screen fatigue'? Suggest two healthy outdoor alternatives to spending hours on mobile phones.",
        ans: `<strong>1. Screen Fatigue:</strong><br>
Screen fatigue refers to the eye strain, headaches, dry eyes, neck stiffness, and mental exhaustion caused by continuously staring at digital screens (smartphones, tablets, TVs) for hours without blinking adequately.<br><br>
<strong>2. Healthy Outdoor Alternatives:</strong><br>
• Playing team sports like football, badminton, or kho-kho with neighbourhood friends to build physical stamina.<br>
• Cycling in community parks or engaging in gardening and observing nature trails.`,
        marks: 2,
        rubric: [
          { key: "Clear explanation of screen fatigue symptoms", marks: "1.0 M" },
          { key: "Two active, constructive outdoor alternatives", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Promoting Mental Calm and Posture in Digital Classrooms",
      text: "Students studying on computers during online classes report dry, burning eyes and shoulder pain by afternoon.",
      question: "Formulate a '20-20-20' ergonomic routine and a 5-minute breathing exercise students can do during study breaks.",
      answer: "Every 20 minutes of screen work, students should look away at an object at least 20 feet away for 20 seconds, blinking repeatedly to moisten the eyes. During study breaks, they should sit upright, close eyes, and practice Anulom-Vilom (alternate nostril breathing) or deep belly inhalation for 5 minutes to restore spinal alignment, oxygenate the brain, and calm exam anxiety.",
      rubric: "1.5 Marks for correct 20-20-20 visual ergonomics; 1.5 Marks for structured breathing and spinal relaxation."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 7: HOW THINGS WORK
  // -------------------------------------------------------------------------
  {
    id: "oww7",
    num: 7,
    unit: "Unit 4: Technology & Mechanics",
    title: "How Things Work",
    subtitle: "Simple Machines: Levers, Pulleys, Wheels & Axles, Inclined Planes & Mechanics",
    concepts: [
      "The six classical simple machines: Lever, wheel and axle, pulley, inclined plane, wedge, and screw.",
      "The mechanical advantage of levers: Understanding the interplay between Fulcrum, Load, and Effort (e.g., scissors, see-saw, bottle opener).",
      "Pulleys in daily life: Fixed pulleys for drawing water from wells and hoisting national flags.",
      "Friction as a necessary force: Why vehicles need friction to brake, why soles have grooves, and how lubrication reduces wear and tear."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fafaf9" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#44403c" text-anchor="middle">How Things Work — The Power of Simple Machines</text>
      <!-- Lever -->
      <g transform="translate(100, 85)">
        <polygon points="0,0 -15,20 15,20" fill="#78716c"/>
        <line x1="-40" y1="0" x2="40" y2="0" stroke="#1c1917" stroke-width="3"/>
        <rect x="-42" y="-14" width="16" height="14" fill="#ef4444"/>
        <text x="-34" y="-3" font-size="8" font-weight="900" fill="#fff" text-anchor="middle">L</text>
        <line x1="35" y1="0" x2="35" y2="15" stroke="#2563eb" stroke-width="2"/>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#292524" text-anchor="middle">1. Lever</text>
      </g>
      <!-- Pulley -->
      <g transform="translate(230, 85)">
        <circle cx="0" cy="-5" r="14" fill="#e7e5e4" stroke="#44403c" stroke-width="2"/>
        <line x1="-14" y1="-5" x2="-14" y2="15" stroke="#ea580c" stroke-width="1.5"/>
        <line x1="14" y1="-5" x2="14" y2="15" stroke="#ea580c" stroke-width="1.5"/>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#292524" text-anchor="middle">2. Pulley</text>
      </g>
      <!-- Inclined Plane -->
      <g transform="translate(360, 85)">
        <polygon points="-30,15 30,15 30,-15" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#292524" text-anchor="middle">3. Inclined Plane</text>
      </g>
      <!-- Wheel & Axle -->
      <g transform="translate(480, 85)">
        <circle cx="0" cy="0" r="18" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <circle cx="0" cy="0" r="6" fill="#15803d"/>
        <text x="0" y="34" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#292524" text-anchor="middle">4. Wheel &amp; Axle</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#44403c" text-anchor="middle">Simple machines reduce human effort by redirecting or multiplying force.</text>
    </svg>`,
    questions: [
      {
        category: "Physics Principles • Simple Machines",
        q: "What is a 'simple machine'? Name any four simple machines and give one everyday tool based on each.",
        ans: `<strong>1. Simple Machine:</strong><br>
A simple machine is a mechanical device with few or no moving parts that makes work easier, faster, or safer by multiplying applied force, increasing speed, or changing the direction of force.<br><br>
<strong>2. Four Simple Machines and Examples:</strong><br>
• <strong>Lever:</strong> A rigid bar rotating around a pivot (fulcrum). <em>Example:</em> Scissors, see-saw, crowbar, bottle opener.<br>
• <strong>Pulley:</strong> A grooved wheel with a rope running around it to lift loads. <em>Example:</em> Flagpole hoisting rig, well-water pulley, crane hook.<br>
• <strong>Inclined Plane:</strong> A sloping surface that connects a lower level to a higher level. <em>Example:</em> Hospital wheelchair ramp, truck loading plank, slide.<br>
• <strong>Wheel and Axle:</strong> A large wheel rigidly attached to a central smaller rod. <em>Example:</em> Doorknob, steering wheel, bicycle pedal.`,
        marks: 4,
        rubric: [
          { key: "Scientific definition of a simple machine", marks: "1.0 M" },
          { key: "Four distinct simple machines with correct everyday examples", marks: "3.0 M" }
        ]
      },
      {
        category: "Mechanical Systems • The Pulley",
        q: "How does a fixed pulley help in drawing water from a deep village well? Why is pulling downwards easier than lifting straight up?",
        ans: `<strong>1. How a Fixed Pulley Works:</strong><br>
A fixed pulley consists of a grooved wheel hung securely from a wooden beam directly over the well mouth. A long, strong rope is threaded through the groove; one end is tied to the water bucket and the other end is held by the person.<br><br>
<strong>2. Why Pulling Downward is Easier:</strong><br>
When lifting a bucket straight up without a pulley, a person must fight gravity directly with only arm muscles. With a fixed pulley, the direction of force is reversed to <strong>pulling downwards</strong>. This allows the person to use their own body weight to help pull the rope down, making the work feel substantially easier and safer.`,
        marks: 3,
        rubric: [
          { key: "Mechanics of the well pulley described clearly", marks: "1.5 M" },
          { key: "Explanation of force redirection and using body weight against gravity", marks: "1.5 M" }
        ]
      },
      {
        category: "Forces in Action • Friction",
        q: "Why is friction called a 'necessary evil'? Give one example where friction is helpful and one where it causes a problem.",
        ans: `<strong>1. Why Called a Necessary Evil:</strong><br>
Friction is called a necessary evil because life would be impossible without it (we could not walk, write, or stop cars), yet it constantly wastes valuable energy by producing unwanted heat, noise, and mechanical wear and tear.<br><br>
<strong>2. Examples:</strong><br>
• <strong>Helpful Friction:</strong> The deep treads on bicycle and car tyres provide grip on wet roads, preventing dangerous skidding and allowing brakes to stop the vehicle.<br>
• <strong>Harmful Friction:</strong> Friction between the moving metal parts of a sewing machine or bicycle chain grinds down the metal and causes squeaking; requiring periodic oiling or grease lubrication.`,
        marks: 3,
        rubric: [
          { key: "Explanation of dual nature (useful vs. wasteful)", marks: "1.5 M" },
          { key: "One valid example each for helpful and harmful friction", marks: "1.5 M" }
        ]
      },
      {
        category: "Hands-on Science • Making a Balance",
        q: "How can you construct a simple working beam balance using a plastic ruler, thread, and paper cups?",
        ans: `<strong>Construction of a Simple Beam Balance:</strong><br>
1. <strong>Pivot (Fulcrum):</strong> Punch a tiny hole at the exact centre (15 cm mark) of a 30 cm plastic ruler and suspend it with a looped piece of thread from a stationary hook so it hangs horizontally balanced.<br>
2. <strong>Pans:</strong> Punch three equidistant holes near the rims of two identical paper cups. Tie three equal-length threads to each cup and hang one cup at the 2 cm mark and the other at the 28 cm mark.<br>
3. <strong>Operation:</strong> When both pans are empty, the ruler stays level. Place an unknown object (like an eraser) in one pan and known standard units (like metal paper clips or identical coins) in the other pan until the ruler balances horizontally.`,
        marks: 2,
        rubric: [
          { key: "Clear three-step construction of pivot, pans, and balancing measurement", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Designing Accessible Wheelchair Ramps for Public Buildings",
      text: "A village community centre has a 4-step staircase (height 60 cm). An elderly resident in a wheelchair cannot enter.",
      question: "Apply the principle of an inclined plane to calculate the recommended length of an accessible ramp.",
      answer: "According to universal accessible design standards, the slope of a wheelchair ramp should be gentle, ideally a 1:12 ratio (for every 1 unit of rise, 12 units of horizontal run are required). For a vertical height of 60 cm (0.6 m), the ramp length should be at least 0.6 m × 12 = <strong>7.2 metres</strong>, equipped with sturdy handrails and non-slip surface ridges to allow effortless manual wheelchair ascent.",
      rubric: "1.5 Marks for 1:12 slope ratio calculation (7.2 m); 1.5 Marks for safety handrails and non-skid surface features."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 8: HOW THINGS ARE MADE
  // -------------------------------------------------------------------------
  {
    id: "oww8",
    num: 8,
    unit: "Unit 4: Technology & Mechanics",
    title: "How Things are Made",
    subtitle: "Artisanal Crafts: Pottery, Handloom Weaving, Carpentry, Metal Casting & Indian Guilds",
    concepts: [
      "Traditional Indian craft traditions: Terracotta pottery, handloom textiles, wood carving, and metal casting.",
      "The stages of pottery: Digging clay, kneading to remove air bubbles, shaping on the potter's wheel, sun-drying, firing in a kiln (bhatti), and painting.",
      "Handloom weaving: The interlacing of lengthwise threads (warp) and crosswise threads (weft) on a wooden loom.",
      "Carpentry tools and techniques: Sawing, chiselling, planing, joinery, and sandpaper finishing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">How Things are Made — The Five Stages of Pottery</text>
      <g transform="translate(60, 80)">
        <circle cx="0" cy="0" r="16" fill="#fde68a" stroke="#d97706"/>
        <text x="0" y="4" font-size="9" font-weight="900" text-anchor="middle">1</text>
        <text x="0" y="28" font-family="system-ui, sans-serif" font-size="7" font-weight="800" fill="#78350f" text-anchor="middle">Dig Clay</text>
      </g>
      <text x="95" y="80" font-size="14" fill="#d97706">➔</text>
      <g transform="translate(140, 80)">
        <circle cx="0" cy="0" r="16" fill="#fde68a" stroke="#d97706"/>
        <text x="0" y="4" font-size="9" font-weight="900" text-anchor="middle">2</text>
        <text x="0" y="28" font-family="system-ui, sans-serif" font-size="7" font-weight="800" fill="#78350f" text-anchor="middle">Knead Dough</text>
      </g>
      <text x="185" y="80" font-size="14" fill="#d97706">➔</text>
      <g transform="translate(240, 80)">
        <circle cx="0" cy="0" r="18" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
        <text x="0" y="4" font-size="9" font-weight="900" text-anchor="middle">3</text>
        <text x="0" y="30" font-family="system-ui, sans-serif" font-size="7" font-weight="800" fill="#9a3412" text-anchor="middle">Shape Wheel</text>
      </g>
      <text x="295" y="80" font-size="14" fill="#ea580c">➔</text>
      <g transform="translate(360, 80)">
        <circle cx="0" cy="0" r="16" fill="#fde68a" stroke="#d97706"/>
        <text x="0" y="4" font-size="9" font-weight="900" text-anchor="middle">4</text>
        <text x="0" y="28" font-family="system-ui, sans-serif" font-size="7" font-weight="800" fill="#78350f" text-anchor="middle">Sun Dry</text>
      </g>
      <text x="415" y="80" font-size="14" fill="#d97706">➔</text>
      <g transform="translate(480, 80)">
        <circle cx="0" cy="0" r="20" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
        <text x="0" y="4" font-size="9" font-weight="900" text-anchor="middle">5 🔥</text>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="7" font-weight="900" fill="#991b1b" text-anchor="middle">Bake in Kiln</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Baking in a high-temperature kiln turns soft, water-soluble clay into sturdy, waterproof terracotta.</text>
    </svg>`,
    questions: [
      {
        category: "Traditional Crafts • Pottery Process",
        q: "Describe the step-by-step process of making an earthen pitcher (matka) on a potter's wheel. Why must the pot be baked in a kiln?",
        ans: `<strong>1. Steps in Making a Matka:</strong><br>
1. <strong>Clay Preparation:</strong> Fine, sticky riverbed clay is dug up, stones and grit are sifted out, and water is mixed in.<br>
2. <strong>Kneading:</strong> The wet clay is kneaded vigorously with hands and feet to remove air bubbles and create uniform plasticity.<br>
3. <strong>Shaping on Wheel:</strong> A lump of clay is centered on the spinning potter's wheel. The potter uses skilled fingers and water to hollow and pull up the walls into a round pot shape.<br>
4. <strong>Beating &amp; Sun-Drying:</strong> The bottom is beaten with a wooden mallet (thapa) and stone anvil (pindi) to make the base round and strong, then dried in the shade and sun.<br><br>
<strong>2. Why Kiln Baking is Essential:</strong><br>
Unbaked sun-dried clay pots dissolve back into mud as soon as water is poured into them. Baking pots inside a high-temperature brick kiln (bhatti) causes irreversible chemical fusion of silica particles, turning the clay into hard, permanent, porous, and waterproof <strong>terracotta</strong>.`,
        marks: 4,
        rubric: [
          { key: "Sequential four-step pottery making process", marks: "2.5 M" },
          { key: "Scientific reason for kiln baking and terracotta transformation", marks: "1.5 M" }
        ]
      },
      {
        category: "Textile Crafts • Handloom Weaving",
        q: "What is the difference between 'warp' and 'weft' in weaving cloth on a loom?",
        ans: `<strong>Warp vs. Weft:</strong><br>
• <strong>Warp (तानी):</strong> The set of long, parallel threads stretched lengthwise tightly on the wooden loom frame from front to back.<br>
• <strong>Weft (भरनी):</strong> The crosswise thread wound on a bobbin inside a flying shuttle that is passed back and forth horizontally through the separated warp threads.<br>
The tight interlocking of warp and weft threads produces the continuous fabric of a saree, shawl, or cloth sheet.`,
        marks: 3,
        rubric: [
          { key: "Clear, correct definition of lengthwise warp threads", marks: "1.5 M" },
          { key: "Clear, correct definition of crosswise weft threads and shuttle", marks: "1.5 M" }
        ]
      },
      {
        category: "Woodwork & Carpentry • Tools and Skills",
        q: "Name three essential tools used by a carpenter and state the specific purpose of each tool.",
        ans: `<strong>Three Essential Carpentry Tools:</strong><br>
1. <strong>Hand Saw (Aari):</strong> A steel blade with sharp teeth used to cut timber and planks across or along the grain.<br>
2. <strong>Chisel (Rookhani / Chheeni):</strong> A beveled steel blade used with a wooden mallet to carve mortises, grooves, and artistic designs into wood.<br>
3. <strong>Hand Plane (Randa):</strong> A wooden or metal tool with an adjustable blade used to shave off rough bumps and make wooden planks completely flat and smooth.`,
        marks: 3,
        rubric: [
          { key: "Three accurate carpentry tools named", marks: "1.5 M" },
          { key: "Precise functional description of each tool", marks: "1.5 M" }
        ]
      },
      {
        category: "Cultural Heritage • Supporting Artisans",
        q: "Why are traditional handmade crafts losing ground to factory-made goods? How can we support local artisans?",
        ans: `<strong>1. Reasons for Decline:</strong><br>
Machine-made factory goods are produced rapidly in huge volumes at lower costs using plastic and synthetic fibers, making it hard for handloom weavers and potters who spend days on a single piece to compete in price.<br><br>
<strong>2. Ways to Support Artisans:</strong><br>
• Buy authentic handicraft products (like khadi, terracotta tableware, and wooden toys) directly at artisan fairs (Saras Mela / Dilli Haat).<br>
• Value the artistic uniqueness of handmade goods and avoid excessive bargaining with poor craftspeople.`,
        marks: 2,
        rubric: [
          { key: "Economic reasons for factory competition", marks: "1.0 M" },
          { key: "Practical consumer choices to support indigenous craftsmen", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Revitalizing Eco-Friendly Terracotta Over Single-Use Plastics",
      text: "Tea stalls outside railway stations discarded plastic cups that littered tracks and choked city drains.",
      question: "Evaluate why the Indian Railways' decision to serve hot tea in unglazed clay 'kulhads' is an ecological and economic masterstroke.",
      answer: "Kulhads are 100% biodegradable and break down back into natural soil without releasing toxic microplastics. Clay is naturally porous and enhances the earthy aroma of tea while keeping it insulated. Economically, mass procurement of kulhads directly pumps millions of rupees into rural potter families and preserves indigenous pottery skills across Indian villages.",
      rubric: "1.5 Marks for environmental biodegradability and zero plastic waste; 1.5 Marks for rural livelihood generation and craft preservation."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 9: DIFFERENT LANDS, DIFFERENT LIVES
  // -------------------------------------------------------------------------
  {
    id: "oww9",
    num: 9,
    unit: "Unit 5: Geography & Diversity",
    title: "Different Lands, Different Lives",
    subtitle: "Geographical Diversity of India: Mountains, Deserts, Coastal Plains & River Valleys",
    concepts: [
      "The major physical divisions of India: Northern Mountains (Himalayas), Great Indian Desert (Thar), Coastal Plains, and Deccan Plateau.",
      "Climate adaptations in shelter: Sloping roofs in snow and rain zones; thick mud walls and flat roofs in arid deserts; stilt houses in flood-prone river plains.",
      "Traditional livelihoods shaped by local topography: Terrace farming, sheep rearing, coastal fishing, date-palm cultivation, and river transport.",
      "Rich cultural unity amidst vast linguistic, dietary, and architectural diversity across India."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Different Lands, Different Lives — Climate-Adapted Shelter Types</text>
      <!-- Mountain Sloping Roof -->
      <g transform="translate(90, 80)">
        <polygon points="0,-18 35,5 -35,5" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
        <rect x="-25" y="5" width="50" height="25" fill="#fef2f2" stroke="#dc2626"/>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#991b1b" text-anchor="middle">Mountains (Kashmir)</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="7" fill="#7f1d1d" text-anchor="middle">Sloping Tin Roof</text>
      </g>
      <!-- Desert Mud House -->
      <g transform="translate(225, 80)">
        <rect x="-28" y="-12" width="56" height="42" rx="4" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
        <line x1="-32" y1="-12" x2="32" y2="-12" stroke="#78350f" stroke-width="3"/>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#9a3412" text-anchor="middle">Desert (Rajasthan)</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="7" fill="#78350f" text-anchor="middle">Thick Mud Walls</text>
      </g>
      <!-- Stilt House -->
      <g transform="translate(360, 80)">
        <polygon points="0,-16 30,2 -30,2" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <rect x="-22" y="2" width="44" height="20" fill="#f0fdf4" stroke="#16a34a"/>
        <line x1="-16" y1="22" x2="-16" y2="35" stroke="#15803d" stroke-width="2"/>
        <line x1="16" y1="22" x2="16" y2="35" stroke="#15803d" stroke-width="2"/>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#14532d" text-anchor="middle">Plains/Floods (Assam)</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="7" fill="#15803d" text-anchor="middle">Bamboo Stilts</text>
      </g>
      <!-- Coastal Houseboat -->
      <g transform="translate(485, 80)">
        <path d="M -30 18 Q 0 30 30 18 L 25 5 L -25 5 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="-18" y="-8" width="36" height="15" fill="#f0f9ff" stroke="#0284c7"/>
        <text x="0" y="44" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#0369a1" text-anchor="middle">Coastal (Kerala)</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="7" fill="#075985" text-anchor="middle">Floating Houseboat</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Human architecture is an ingenious response to local climate, rainfall, and terrain.</text>
    </svg>`,
    questions: [
      {
        category: "Geographical Adaptation • Architecture",
        q: "Why do houses in the hilly regions of Himachal Pradesh and Kashmir have steeply sloping roofs, while houses in the Thar Desert of Rajasthan have thick mud walls and flat roofs?",
        ans: `<strong>1. Houses in Hilly Regions (Himachal Pradesh &amp; Kashmir):</strong><br>
These areas experience heavy monsoon rains and freezing winter snowfall. Sloping roofs made of corrugated iron sheets or slate tiles allow rainwater and heavy snow to slide off immediately without accumulating on the roof. This prevents roof collapse, water leakage, and dampness.<br><br>
<strong>2. Houses in the Thar Desert (Rajasthan):</strong><br>
The desert climate experiences scorching daytime temperatures exceeding 45°C. Thick mud walls act as excellent natural insulators, preventing outside heat from penetrating into living rooms during the day. Flat roofs are used to sleep under open starlit skies at night when desert sands cool down, and for drying grains and chillies.`,
        marks: 4,
        rubric: [
          { key: "Detailed reasoning for sloping roofs in snow/rain hill zones", marks: "2.0 M" },
          { key: "Detailed reasoning for thick mud insulation and flat roofs in deserts", marks: "2.0 M" }
        ]
      },
      {
        category: "Regional Livelihoods • Terrace Farming",
        q: "What is 'terrace farming' (step farming)? Why is it practiced predominantly in mountainous regions?",
        ans: `<strong>1. Terrace Farming:</strong><br>
Terrace farming is an agricultural method where steep mountain slopes are cut into a series of broad, flat horizontal step-like terraces supported by stone retaining walls.<br><br>
<strong>2. Why Practiced in Mountains:</strong><br>
• On steep mountain slopes, heavy rainfall rushes down rapidly, washing away the fertile topsoil (soil erosion).<br>
• By creating flat step terraces, the velocity of runoff water is slowed down, allowing water to soak in and retain fertile soil so crops like tea, rice, and maize can grow successfully.`,
        marks: 3,
        rubric: [
          { key: "Accurate physical definition of step terraces", marks: "1.5 M" },
          { key: "Prevention of soil erosion and water retention explained", marks: "1.5 M" }
        ]
      },
      {
        category: "Flood Adaptation • Stilt Houses",
        q: "Why are houses in rural Assam built on tall bamboo stilts 10 to 12 feet above the ground?",
        ans: `<strong>Reasons for Stilt Houses in Assam:</strong><br>
1. <strong>Severe Monsoon Floods:</strong> Assam receives torrential monsoon rainfall causing the mighty Brahmaputra river and its tributaries to flood vast plains every year. Raising houses 10–12 feet on strong bamboo or timber stilts keeps floodwaters from entering living rooms.<br>
2. <strong>Protection from Dangerous Animals:</strong> Stilts prevent venomous snakes, leeches, scorpions, and wild animals displaced by floodwaters from entering the home.<br>
3. <strong>Abundant Bamboo:</strong> Bamboo grows abundantly in northeastern forests and is durable, lightweight, resilient, and water-resistant.`,
        marks: 3,
        rubric: [
          { key: "Floodwater prevention and elevation reasoning", marks: "1.5 M" },
          { key: "Safety against reptiles and ecological abundance of bamboo", marks: "1.5 M" }
        ]
      },
      {
        category: "Cultural Geography • Unity in Diversity",
        q: "What does 'Unity in Diversity' mean in the context of India? Give two examples of how diverse cultures celebrate together.",
        ans: `<strong>1. Meaning of Unity in Diversity:</strong><br>
It means that despite having thousands of languages, diverse cuisines, distinct traditional dresses, and varied geographical landscapes, all Indians share a deep common bond of national identity, mutual respect, and shared constitutional brotherhood.<br><br>
<strong>2. Examples of Shared Celebrations:</strong><br>
• Harvest festivals celebrated nationwide under different regional names during the same week of January: Makar Sankranti (North &amp; West), Pongal (Tamil Nadu), Bihu (Assam), and Lohri (Punjab).<br>
• National festivals like Independence Day and Republic Day celebrated with equal patriotism by citizens across all states.`,
        marks: 2,
        rubric: [
          { key: "Accurate definition of Unity in Diversity", marks: "1.0 M" },
          { key: "Harvest and national festivals cited as concrete evidence", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Preserving the Living Root Bridges of Meghalaya",
      text: "The Khasi and Jaintia tribes of Meghalaya grow pedestrian bridges across fast mountain torrents using living rubber tree roots.",
      question: "Analyze why living root bridges are far superior to modern concrete or steel bridges in torrential rainforest valleys.",
      answer: "Unlike concrete or iron bridges that rust, rot, and get washed away by torrential monsoon floods, living root bridges made from Ficus elastica roots grow stronger and thicker over decades as the living tree continues to anchor deeper into riverbanks. They require no cement, cost zero money, cause no carbon emissions, and can endure for over 500 years in humid rainforest ecosystems.",
      rubric: "1.5 Marks for biological self-strengthening vs concrete deterioration; 1.5 Marks for zero ecological footprint and indigenous sustainability."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: OUR SKY
  // -------------------------------------------------------------------------
  {
    id: "oww10",
    num: 10,
    unit: "Unit 5: Geography & Diversity",
    title: "Our Sky",
    subtitle: "The Solar System, Earth's Rotation & Revolution, Moon Phases & Constellations",
    concepts: [
      "The celestial sphere: Sun, Moon, stars, constellations, and artificial observation satellites.",
      "Day and Night mechanics: Earth's 24-hour rotation from West to East around its tilted axis.",
      "The changing phases of the Moon: 29.5-day synodic cycle from New Moon (Amavasya) to Full Moon (Purnima).",
      "Finding directions using the night sky: Saptarshi (Big Dipper) and Dhruva Tara (Pole Star)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0f172a" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#f8fafc" text-anchor="middle">Our Sky — Earth's Rotation &amp; Saptarshi Constellation</text>
      <!-- Sun -->
      <g transform="translate(80, 85)">
        <circle cx="0" cy="0" r="28" fill="#f59e0b" stroke="#fbbf24" stroke-width="3"/>
        <text x="0" y="5" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#78350f" text-anchor="middle">SUN ☀️</text>
      </g>
      <line x1="120" y1="85" x2="220" y2="85" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4"/>
      <!-- Earth -->
      <g transform="translate(280, 85)">
        <circle cx="0" cy="0" r="35" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
        <path d="M 0 -35 A 35 35 0 0 0 0 35 Z" fill="#60a5fa" opacity="0.8"/>
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
      },
      {
        category: "Sky Observation • Constellations",
        q: "What is a 'constellation'? Describe the Saptarshi (Ursa Major) constellation and explain how it helps locate the Pole Star.",
        ans: `<strong>1. Constellation:</strong><br>
A constellation is a recognizable pattern or group of bright stars in the night sky that people historically associated with mythological figures, animals, or objects.<br><br>
<strong>2. Saptarshi &amp; Locating the Pole Star:</strong><br>
• <strong>Saptarshi (Big Dipper / Ursa Major):</strong> Consists of seven prominent bright stars arranged in the shape of a large ladle or dipper (four stars forming the cup and three stars forming the curved handle).<br>
• <strong>Locating Dhruva Tara (Pole Star):</strong> The two front stars of the cup are called <strong>Pointer Stars</strong>. If an imaginary straight line is extended upward through these two pointer stars by about five times the distance between them, it points directly to the Pole Star (North Star), which always marks true geographic North.`,
        marks: 3,
        rubric: [
          { key: "Definition of constellation", marks: "1.0 M" },
          { key: "Description of Saptarshi's seven stars and pointer line to Pole Star", marks: "2.0 M" }
        ]
      },
      {
        category: "Solar Motion • Shadows & Time",
        q: "How does the length and direction of a tree's shadow change from morning to evening? How did people use sundials in ancient times?",
        ans: `<strong>1. Daily Shadow Patterns:</strong><br>
• <strong>Early Morning:</strong> The Sun is low in the eastern sky, creating very <strong>long shadows pointing West</strong>.<br>
• <strong>Noon (Midday):</strong> The Sun reaches its highest point directly overhead, casting the <strong>shortest shadow</strong> of the day.<br>
• <strong>Late Evening:</strong> The Sun sinks low in the western sky, casting <strong>long shadows pointing East</strong>.<br><br>
<strong>2. Ancient Sundials:</strong><br>
Ancient astronomers (like Maharaja Jai Singh at Jantar Mantar) built large triangular ramps called gnomons that cast shadows on calibrated curved marble scales. As the Sun traversed the sky, the moving shadow position accurately indicated the exact hour and minute of the day.`,
        marks: 3,
        rubric: [
          { key: "Clear daily progression of shadow length and direction", marks: "1.5 M" },
          { key: "Principle of sundial timekeeping explained", marks: "1.5 M" }
        ]
      },
      {
        category: "Safety in Astronomy • Solar Observation",
        q: "Why must you NEVER look directly at the Sun with naked eyes or through ordinary binoculars, even during a solar eclipse?",
        ans: `<strong>Danger of Direct Solar Viewing:</strong><br>
The Sun emits intense, focused ultraviolet (UV) and infrared rays. Staring directly at the Sun—or focusing its light through magnifying binoculars or telescopes—burns the light-sensitive retinal cells at the back of the eye (solar retinopathy) in a matter of seconds without causing pain. This can lead to permanent blind spots or complete, incurable blindness. One must only use certified ISO 12312-2 solar filter glasses or pinhole projection methods.`,
        marks: 2,
        rubric: [
          { key: "Scientific explanation of retinal burn / UV damage and safe viewing methods", marks: "2.0 M" }
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
