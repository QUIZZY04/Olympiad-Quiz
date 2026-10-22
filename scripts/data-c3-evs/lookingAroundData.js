// Official NCERT Class 3 Environmental Studies (Looking Around / आस-पास) Complete Dataset - Chapters 1 to 24
// Classic CBSE Track (2026-27 Session) - 100% Comprehensive Question & Activity Coverage

const lookingAroundChapters = [
  {
    id: "la1",
    num: 1,
    unit: "Unit 1: Animals & Habitats",
    title: "Poonam's Day Out",
    subtitle: "Observing Animals Around Us: Movements, Sounds, Habitats (Trees, Pond, Ground, Flying)",
    concepts: [
      "Animals move in different ways: Walking, crawling, flying, swimming, and hopping.",
      "Diverse habitats: Animals that live on trees, in water, on land, underground in burrows, and flying in the air.",
      "Animal sounds: Pigeons coo, crows caw, dogs bark, frogs croak, cows moo, and goats bleat.",
      "Respecting nature: Observing animal behaviors silently without disturbing or teasing them."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">Poonam's Day Out — Animals in Trees, Pond &amp; Ground</text>
      <!-- Tree -->
      <rect x="100" y="70" width="20" height="50" fill="#92400e"/>
      <circle cx="110" cy="55" r="35" fill="#22c55e"/>
      <text x="110" y="55" font-size="16" text-anchor="middle">🐒🕊️🐿️</text>
      <text x="110" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Tree Habitats</text>
      <!-- Pond -->
      <ellipse cx="300" cy="95" rx="50" ry="25" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="300" y="95" font-size="18" text-anchor="middle">🦆🐸🐢</text>
      <text x="300" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">Pond Habitats</text>
      <!-- Ground / Grass -->
      <circle cx="470" cy="85" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="470" y="92" font-size="18" text-anchor="middle">🐃🐕🐜</text>
      <text x="470" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Ground &amp; Soil</text>
    </svg>`,
    questions: [
      {
        category: "Habitats & Observations",
        q: "Name three animals that Poonam saw on the tree and three animals she saw around the pond.",
        ans: "<strong>Animals Poonam saw on the tree:</strong> Pigeon, Squirrel, Crow, Monkey, Butterfly, and Sparrow.<br><strong>Animals Poonam saw around the pond:</strong> Goat, Tortoise, Crane (stork), Buffalo, and Frog.",
        marks: 3,
        rubric: [
          { key: "Identification of 3 tree-dwelling animals", marks: "1.5 Marks" },
          { key: "Identification of 3 pond-associated animals", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Animal Movements",
        q: "Classify animals based on how they move: (a) Fly (b) Crawl (c) Walk (d) Hop. Give two examples of each.",
        ans: "• <strong>Fly:</strong> Sparrow, Pigeon, Butterfly.<br>• <strong>Crawl:</strong> Lizard, Snake, Earthworm.<br>• <strong>Walk:</strong> Cow, Dog, Buffalo.<br>• <strong>Hop:</strong> Frog, Kangaroo, Grasshopper.",
        marks: 3,
        rubric: [
          { key: "Correct examples for all four movement categories", marks: "2 Marks" },
          { key: "Clear classification structure", marks: "1 Mark" }
        ]
      },
      {
        category: "Nature Sensitivity",
        q: "Why should we observe birds and small creatures silently when visiting a garden?",
        ans: "Sudden noises, shouting, or running scare animals away and interrupt their natural feeding or nesting activities. Silent observation allows us to learn their genuine habits without causing them distress.",
        marks: 2,
        rubric: [
          { key: "Impact of noise on animal fear and nesting", marks: "1 Mark" },
          { key: "Educational value of quiet observation", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Bio-indicator Assessment: Pond Ecosystem Health",
      text: "During a nature walk, students notice that the village pond where Poonam once saw frogs and cranes is now covered in thick green chemical scum and discarded plastic bottles, and no frogs or dragonflies can be seen.",
      question: "What does the sudden disappearance of frogs indicate about water quality, and what can students do to restore the pond?",
      answer: "Frogs are vital <strong>bio-indicators</strong> because their permeable, moist skin absorbs environmental toxins directly; their disappearance signals that the water is severely polluted and deoxygenated due to plastic litter and sewage. Students can organize a community cleanup drive to clear surface plastics, plant native aquatic reeds that naturally filter toxins, and place signboards urging villagers not to wash clothes or dump trash into the pond.",
      rubric: "Understanding frogs as bio-indicators of pollution, ecosystem restoration steps (4 Marks)."
    }
  },
  {
    id: "la2",
    num: 2,
    unit: "Unit 1: Animals & Habitats",
    title: "The Plant Fairy",
    subtitle: "Outdoor Plant Exploration: Leaf Colors, Shapes, Margins, Textures, and Tree Bark Rubbings",
    concepts: [
      "Diversity in plant leaves: Shape (round, oval, triangular, elongated), size, color (light green, dark green, purple, yellow), and margins (plain, serrated, wavy).",
      "Leaf scents: Crushed leaves of mint, coriander, neem, lemon, and tulsi have distinct identifying aromas.",
      "Tree bark textures: Smooth barks (e.g., Guava) vs rough, cracked barks (e.g., Neem, Peepal).",
      "Taking bark and leaf rubbings using crayons and paper to observe surface textures."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">The Plant Fairy — Diverse Leaf Shapes, Margins &amp; Scents</text>
      <!-- Serrated Leaf (Neem) -->
      <path d="M100,50 Q80,75 85,100 Q95,110 100,120 Q105,110 115,100 Q120,75 100,50 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
      <text x="100" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Serrated Margin (Neem)</text>
      <!-- Round Leaf (Lotus) -->
      <circle cx="250" cy="85" r="28" fill="#4ade80" stroke="#16a34a" stroke-width="2"/>
      <line x1="250" y1="85" x2="250" y2="113" stroke="#15803d" stroke-width="2"/>
      <text x="250" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#166534" text-anchor="middle">Round Leaf (Lotus)</text>
      <!-- Triangular / Heart (Peepal) -->
      <path d="M400,55 Q370,80 385,110 L400,125 L415,110 Q430,80 400,55 Z" fill="#86efac" stroke="#15803d" stroke-width="2"/>
      <text x="400" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#14532d" text-anchor="middle">Heart / Tapering (Peepal)</text>
      <!-- Scented Herb -->
      <circle cx="510" cy="85" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="510" y="91" font-size="16" text-anchor="middle">🌿</text>
      <text x="510" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Aromatic (Tulsi/Mint)</text>
    </svg>`,
    questions: [
      {
        category: "Leaf Diversity",
        q: "How can you identify different leaves using your senses of touch and smell without looking at them?",
        ans: "• <strong>Sense of Touch:</strong> We can feel the leaf margins (smooth plain edge vs toothed/serrated edge) and surface textures (soft hairy like pumpkin leaves, waxy smooth like banana leaves, or prickly like rose leaves).<br>• <strong>Sense of Smell:</strong> Crushing a leaf releases aromatic essential oils with distinctive scents—such as the pungent cooling aroma of mint (pudina), the citrus smell of lemon leaves, and the characteristic medicinal aroma of neem or tulsi.",
        marks: 3,
        rubric: [
          { key: "Tactile assessment (margins, textures, hairiness)", marks: "1.5 Marks" },
          { key: "Olfactory identification (aromatic herbs)", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Bark Texture & Function",
        q: "What is tree bark, and how do you make a bark rubbing on paper?",
        ans: "<strong>Tree Bark:</strong> The protective outer woody skin of a tree trunk that shields the tree from insect attacks, extreme weather, and dehydration.<br><strong>How to Make a Bark Rubbing:</strong> Place a plain sheet of paper firmly against the tree trunk. Using the side of a wax crayon or soft pencil, rub gently and evenly across the paper until the rough textures and ridges of the bark appear clearly.",
        marks: 3,
        rubric: [
          { key: "Function of tree bark", marks: "1.5 Marks" },
          { key: "Practical technique for making a crayon rubbing", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Herbarium & Leaf Art",
        q: "How can fallen dry leaves be used creatively without harming living branches?",
        ans: "We can collect naturally fallen dry leaves from the ground, press them between the pages of old heavy books, and paste them onto card sheets to create animal shapes (like elephants, birds, and fish) for scrapbooks and greeting cards.",
        marks: 2,
        rubric: [
          { key: "Using only naturally fallen leaves", marks: "1 Mark" },
          { key: "Creative leaf-art craft method", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Botanical Observation and Indigenous Herbal Knowledge",
      text: "While playing in the park, Ananya scrapes her knee on a rough stone. Her grandmother does not panic; she plucks three leaves of a common garden weed called 'Patharchatta' (Bryophyllum) / Marigold, crushes them between her clean palms to extract green juice, and applies it to the scrape, stopping the bleeding immediately.",
      question: "What does this experience teach children about traditional botanical knowledge and neighborhood medicinal plants?",
      answer: "This demonstrates that our surrounding plants possess valuable medicinal properties preserved through traditional indigenous wisdom (Ayurveda and grandmother's remedies). Many common plants like tulsi (for coughs), neem (for skin infections), marigold (for cuts), and aloe vera (for burns) have natural antiseptic and healing capabilities. Learning to identify these beneficial plants connects scientific inquiry with practical first-aid.",
      rubric: "Appreciation of medicinal plants, grandmother's home remedies, scientific validation of traditional knowledge (4 Marks)."
    }
  },
  {
    id: "la3",
    num: 3,
    unit: "Unit 2: Water & Food",
    title: "Water O' Water!",
    subtitle: "Poem on Water Forms (River, Waterfall, Lake, Spring), Scarcity, Droughts, and Floods",
    concepts: [
      "Diverse natural forms of water: Flowing rivers, roaring waterfalls, serene lakes, and underground springs.",
      "The indispensability of water for human life, agriculture, animals, and industry.",
      "The duality of water: In droughts, crops dry up and cattle starve; in floods, swollen rivers submerge homes.",
      "Traditional poems and songs celebrating monsoons and rainfall across Indian cultures."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Water O' Water! — Life-Giving River &amp; Water Forms</text>
      <!-- Mountain & Waterfall -->
      <polygon points="50,130 90,50 130,130" fill="#94a3b8"/>
      <polygon points="110,130 150,40 190,130" fill="#64748b"/>
      <path d="M150,55 Q145,85 140,110 L140,130" stroke="#38bdf8" stroke-width="4"/>
      <text x="140" y="145" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#0369a1" text-anchor="middle">Waterfall</text>
      <!-- River Winding -->
      <path d="M190,120 Q250,90 320,115 Q390,140 460,110 L480,125" fill="none" stroke="#0284c7" stroke-width="6"/>
      <text x="320" y="90" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7" text-anchor="middle">Flowing River</text>
      <!-- Lake -->
      <ellipse cx="500" cy="85" rx="35" ry="18" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="500" y="125" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#0369a1" text-anchor="middle">Freshwater Lake</text>
    </svg>`,
    questions: [
      {
        category: "Sources and Uses of Water",
        q: "List four daily activities that cannot be done without water and two activities that can be done without water.",
        ans: "<strong>Activities that CANNOT be done without water:</strong><br>1. Cooking food (boiling rice, making dal).<br>2. Bathing and washing clothes.<br>3. Quenching thirst (drinking).<br>4. Growing crops in fields (irrigation).<br><br><strong>Activities that CAN be done without water:</strong><br>1. Reading a storybook or writing.<br>2. Singing, dancing, or riding a bicycle.",
        marks: 3,
        rubric: [
          { key: "Four correct essential water-dependent activities", marks: "2 Marks" },
          { key: "Two correct water-independent activities", marks: "1 Mark" }
        ]
      },
      {
        category: "Drought vs Flood",
        q: "What is the difference between a drought and a flood? How do both affect living beings?",
        ans: "• <strong>Drought:</strong> Occurs when there is no rainfall for a very long period. Water sources dry up, crops wither in fields, soil cracks, and humans and cattle face severe hunger and dehydration.<br>• <strong>Flood:</strong> Occurs when excessive, heavy monsoon rains cause rivers and lakes to overflow their banks. Rushing floodwaters drown villages, destroy crops, wash away roads, and cause waterborne disease outbreaks.",
        marks: 3,
        rubric: [
          { key: "Accurate cause and effect of drought", marks: "1.5 Marks" },
          { key: "Accurate cause and effect of flood", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Potable Water Safety",
        q: "Why is water from rivers and ponds not safe to drink directly without boiling or filtering?",
        ans: "Open water bodies contain microscopic disease-causing germs (bacteria, protozoa), dissolved chemical effluents, mud sediments, and animal waste. Drinking untreated river water causes dangerous waterborne illnesses like cholera, typhoid, and dysentery.",
        marks: 2,
        rubric: [
          { key: "Contaminants (germs, chemicals, animal waste)", marks: "1 Mark" },
          { key: "Risk of waterborne diseases", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Disaster Preparedness: Flood Safety in Coastal Communities",
      text: "Due to a cyclone, heavy rain lashes a coastal town. Floodwater enters the ground floor of houses, submerging electric plug points, floating garbage around, and contaminating the municipal drinking water supply pipes.",
      question: "What emergency safety precautions must families follow during a flood to protect their lives and health?",
      answer: "Families must observe immediate flood safety protocols: (1) <strong>Electrical Safety:</strong> Turn off the main electrical circuit breaker immediately to prevent lethal electrocution through flooded water. (2) <strong>Move to Higher Ground:</strong> Evacuate to higher floors or designated cyclone shelters with emergency medicine, dry snacks, and torches. (3) <strong>Strict Drinking Water Hygiene:</strong> Drink only vigorously boiled water or bottled water; never drink cloudy floodwater. (4) <strong>Avoid Walking in Moving Water:</strong> Fast currents of even knee-deep water can sweep away adults, and hidden submerged open drains or reptiles pose fatal hazards.",
      rubric: "Electrical cut-off, higher ground evacuation, safe potable drinking water, hazard avoidance (4 Marks)."
    }
  },
  {
    id: "la4",
    num: 4,
    unit: "Unit 3: Family & Homes",
    title: "Our First School",
    subtitle: "The Family as Our Primary Learning Space: Values, Habits, Resemblances, and Customs",
    concepts: [
      "Our family is our first school because we learn our first words, habits, manners, and values at home.",
      "Physical resemblances: Inheriting facial features, voice tones, walking styles, and smiles from parents.",
      "Special family customs: Taking off shoes outside before entering the home, folding hands in greeting.",
      "Learning skills from family elders: Tailoring, cooking, farming, cycling, or singing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#c2410c" text-anchor="middle">Our First School — Family Values, Resemblance &amp; Customs</text>
      <!-- House / Home School -->
      <polygon points="120,50 60,85 180,85" fill="#ea580c"/>
      <rect x="75" y="85" width="90" height="40" fill="#fed7aa"/>
      <text x="120" y="105" font-size="14" text-anchor="middle">🏡</text>
      <text x="120" y="140" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Home: The First School</text>
      <!-- Grandfather Teaching Child -->
      <circle cx="290" cy="80" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="290" y="87" font-size="20" text-anchor="middle">👴📖👦</text>
      <text x="290" y="140" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Learning Values &amp; Manners</text>
      <!-- Resemblance Mirror -->
      <circle cx="460" cy="80" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="460" y="87" font-size="20" text-anchor="middle">👩‍🦰👧🪞</text>
      <text x="460" y="140" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Physical Resemblances</text>
    </svg>`,
    questions: [
      {
        category: "Family Values",
        q: "Why is our family called our 'first school'?",
        ans: "Our family is called our first school because long before we ever enroll in a formal classroom, we learn how to talk, walk, eat neatly, share our toys, respect elders, and practice honesty from our parents and grandparents at home.",
        marks: 3,
        rubric: [
          { key: "Explanation of early social and moral learning at home", marks: "2 Marks" },
          { key: "Contrast with formal schooling", marks: "1 Mark" }
        ]
      },
      {
        category: "Heredity & Resemblance",
        q: "Give two examples of how children resemble their parents or relatives in physical appearance or mannerisms.",
        ans: "1. <strong>Physical Features:</strong> A child may have curly hair and dark brown eyes just like their mother, or have a tall height like their father.<br>2. <strong>Mannerisms:</strong> A child may have the same hearty laughing style as their uncle, or walk with a brisk gait just like their grandfather.",
        marks: 3,
        rubric: [
          { key: "One clear example of inherited physical features", marks: "1.5 Marks" },
          { key: "One clear example of behavioral or vocal resemblance", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Cultural Customs",
        q: "What is the reason behind the common Indian custom of leaving footwear outside the home?",
        ans: "Footwear gathers dirt, dust, animal feces, and street microbes from roads. Removing shoes outside ensures that living rooms and kitchen areas remain clean, hygienic, and spiritually sacred.",
        marks: 2,
        rubric: [
          { key: "Hygiene and prevention of outdoor contamination", marks: "1.5 Marks" },
          { key: "Respect for indoor sacred spaces", marks: "0.5 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Inter-generational Learning: Preserving Traditional Handicrafts",
      text: "In an artisan family, little Anwita observes her mother and grandmother weaving intricate Zari embroidery on sarees every evening after completing her school homework.",
      question: "How does learning within the family keep traditional cultural arts and artisanal livelihoods alive?",
      answer: "Artisanal knowledge is experiential and passed down orally and through observation across generations. By watching elders' precise hand movements, pattern counting, and thread tensions, children absorb subtle craft techniques that no textbook can teach. This inter-generational mentorship nurtures respect for traditional livelihoods, preserves intangible cultural heritage, and empowers future generations with sustainable economic skills.",
      rubric: "Experiential learning at home, preservation of intangible craft heritage, respect for traditional work (4 Marks)."
    }
  },
  {
    id: "la5",
    num: 5,
    unit: "Unit 3: Family & Homes",
    title: "Chhotu's House",
    subtitle: "Turning a Shelter into a Home: Uninvited Animal Guests, House Cleanliness, and Decoration",
    concepts: [
      "The difference between a physical shelter (roof/walls) and a home (warmth, family love, comfort).",
      "How Chhotu repurposed a large cement drainage pipe into a comfortable home with separate living, cooking, and sleeping zones.",
      "Uninvited animal guests in our homes: Lizards, spiders, mosquitoes, flies, ants, and mice.",
      "Keeping homes clean: Sweeping, mopping, waste disposal, and festive decorations (rangoli, torans)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Chhotu's Pipe Home &amp; Uninvited Animal Guests</text>
      <!-- Cement Pipe -->
      <ellipse cx="140" cy="85" rx="30" ry="40" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
      <ellipse cx="140" cy="85" rx="20" ry="30" fill="#94a3b8"/>
      <rect x="140" y="45" width="80" height="80" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
      <text x="180" y="88" font-size="14" text-anchor="middle">🛏️🪣</text>
      <text x="180" y="140" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#334155" text-anchor="middle">Chhotu's Pipe Home</text>
      <!-- Uninvited House Guests -->
      <circle cx="340" cy="85" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="340" y="92" font-size="18" text-anchor="middle">🦎🕷️🐁</text>
      <text x="340" y="140" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Uninvited Guests</text>
      <!-- Home Cleaning & Rangoli -->
      <circle cx="480" cy="85" r="28" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
      <text x="480" y="92" font-size="18" text-anchor="middle">🧹✨🌸</text>
      <text x="480" y="140" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9d174d" text-anchor="middle">Cleanliness &amp; Rangoli</text>
    </svg>`,
    questions: [
      {
        category: "Shelter Adaptation",
        q: "How did Chhotu divide the cement pipe into different spaces for his daily living?",
        ans: "Chhotu smartly divided the pipe and the area around it into functional zones:<br>1. Inside the pipe was his <strong>sleeping space</strong> shielded from rain and heat.<br>2. Outside behind the pipe was his <strong>cooking space</strong> with a small clay stove.<br>3. An area next to it was for <strong>drying clothes</strong> on a rope.<br>4. A corner was set aside for <strong>storing drinking water</strong> in an earthen pitcher.<br>5. The front open space was for <strong>welcoming guests and chatting with his friend Monu</strong>.",
        marks: 3,
        rubric: [
          { key: "Detailed division into sleeping, cooking, water storage, and guest spaces", marks: "3 Marks" }
        ]
      },
      {
        category: "Uninvited Guests in Homes",
        q: "Name four uninvited animals that live in our homes and explain where they are usually found.",
        ans: "1. <strong>Lizards (Geckos):</strong> Crawling on walls and ceilings near electric lights to hunt flies.<br>2. <strong>Spiders:</strong> Weaving webs in dusty corners and behind heavy cupboards.<br>3. <strong>Ants:</strong> Marching in straight lines toward sugary crumbs dropped in the kitchen.<br>4. <strong>Mice (Rats):</strong> Hiding in dark basements, store rooms, or kitchen drains.",
        marks: 3,
        rubric: [
          { key: "Naming four uninvited creatures", marks: "1.5 Marks" },
          { key: "Accurate micro-locations within the house", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Cleanliness Habits",
        q: "Why is daily sweeping and wet mopping necessary for household health?",
        ans: "Daily sweeping removes dust and food crumbs that attract cockroaches and mice, while mopping with disinfectant cleans floor bacteria and prevents the breeding of germs that cause infectious illnesses.",
        marks: 2,
        rubric: [
          { key: "Pest prevention by removing food crumbs", marks: "1 Mark" },
          { key: "Bacterial disinfection for family health", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Urban Homelessness and Community Empathy",
      text: "Like Chhotu, many migrant workers come to big cities in search of work and live under flyovers, in pipes, or in makeshift tin shacks without clean piped water or proper toilets.",
      question: "What basic civic facilities should city governments provide in night shelters (Rain Baseras) to help homeless people live with dignity?",
      answer: "City governments should provide well-maintained <strong>night shelters (Rain Baseras)</strong> equipped with: (1) Clean, filtered potable drinking water taps. (2) Separate, hygienic restrooms with flushing toilets and running water. (3) Clean bedding, blankets in winter, and mosquito mesh windows. (4) Basic first-aid medical dispensary access. (5) Secure storage lockers so daily wage workers can keep their earnings and identification documents safe.",
      rubric: "Compassionate understanding of migration, clean sanitation, dignity, essential civic shelter amenities (4 Marks)."
    }
  },
  {
    id: "la6",
    num: 6,
    unit: "Unit 2: Water & Food",
    title: "Foods We Eat",
    subtitle: "Diversity of Indian Cuisines: Regional Staples (Rice, Wheat, Tapioca, Mustard Oil), Age-based Diets",
    concepts: [
      "Staple foods depend on geography and climate: Rice in Kerala, West Bengal; Wheat and Bajra in Punjab, Rajasthan.",
      "Dietary needs change with age: Soft liquids (milk, dal water) for infants; light, soft food for the elderly; energetic meals for growing children.",
      "Unique regional delicacies: Tapioca and fish in Kerala, Sarson ka Saag and Makki ki Roti in Punjab, Momos in Sikkim.",
      "Family food sharing: Eating meals together and showing empathy when food is scarce."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Regional Food Staples Across India</text>
      <!-- North (Wheat / Roti) -->
      <circle cx="100" cy="80" r="26" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><text x="100" y="87" font-size="20" text-anchor="middle">🫓🌾</text>
      <text x="100" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">North: Wheat &amp; Maize</text>
      <!-- South (Rice / Tapioca / Coconut) -->
      <circle cx="230" cy="80" r="26" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="230" y="87" font-size="20" text-anchor="middle">🍚🥥</text>
      <text x="230" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">South: Rice &amp; Tapioca</text>
      <!-- East (Fish & Rice) -->
      <circle cx="360" cy="80" r="26" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/><text x="360" y="87" font-size="20" text-anchor="middle">🐟🍚</text>
      <text x="360" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">East: Rice &amp; Fish</text>
      <!-- West (Bajra / Jowar) -->
      <circle cx="480" cy="80" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="480" y="87" font-size="20" text-anchor="middle">🥣🫓</text>
      <text x="480" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">West: Bajra &amp; Jowar</text>
    </svg>`,
    questions: [
      {
        category: "Age-Specific Diets",
        q: "Why can a 6-month-old baby and a 75-year-old grandmother not eat the same crispy fried corn cob (bhutta) as a 10-year-old child?",
        ans: "• <strong>6-Month-Old Baby:</strong> Has no teeth and an underdeveloped digestive system, surviving primarily on mother's milk and liquid porridge.<br>• <strong>75-Year-Old Grandmother:</strong> Often has missing or weak teeth and slower digestion, needing soft foods like dal-khichdi, mashed rotis, and stewed vegetables rather than hard corn.<br>• <strong>10-Year-Old Child:</strong> Has strong, healthy teeth and high energy needs, easily chewing and digesting crunchy roasted corn.",
        marks: 3,
        rubric: [
          { key: "Contrast of infant dental and digestive stage", marks: "1 Mark" },
          { key: "Contrast of elderly dental and metabolic needs", marks: "1 Mark" },
          { key: "Growing child's chewing capacity", marks: "1 Mark" }
        ]
      },
      {
        category: "Regional Cuisines",
        q: "Why do people living in Kerala eat a lot of rice and coconut, while people in Rajasthan eat bajra and lentils?",
        ans: "Dietary habits depend on local agricultural harvests and climate:<br>• <strong>Kerala:</strong> High coastal rainfall and fertile soils allow abundant paddy and coconut cultivation; hence, coconut curries and rice are staple foods.<br>• <strong>Rajasthan:</strong> A dry, arid desert climate with scarce rainfall allows drought-resistant millets like Bajra (pearl millet) and hardy pulses to thrive; hence, Bajre ki Roti and Dal-Baati are staples.",
        marks: 3,
        rubric: [
          { key: "Connection between climate/soil and crop growth in Kerala", marks: "1.5 Marks" },
          { key: "Connection between desert climate and drought-resistant crops in Rajasthan", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Food Empathy",
        q: "What should you do if you notice that a classmate has not brought a lunch box to school?",
        ans: "We should gently and politely invite our classmate to sit with us and share our meal, making sure they feel respected and cared for without feeling embarrassed.",
        marks: 2,
        rubric: [
          { key: "Sharing food with dignity and empathy", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Nutritional Diversity: Millets as Climate-Resilient Superfoods",
      text: "Under the National Millet Mission, schools are introducing traditional millets (Ragi, Jowar, Bajra) into the weekly school menu alongside wheat and rice.",
      question: "Why are millets nutritionally superior to polished white rice, and why are they environmentally friendly crops to grow?",
      answer: "<strong>Nutritional Advantages:</strong> Millets are rich in calcium, iron, and dietary fiber with a low glycemic index, preventing childhood anemia, bone weakness, and blood sugar spikes.<br><strong>Environmental Benefits:</strong> Unlike water-guzzling crops like paddy (which require thousands of liters of flooded water per kilogram), millets are hardy, drought-tolerant grains that grow in dry, low-fertility soils with minimal rainwater and zero chemical fertilizers.",
      rubric: "Nutritional superiority (calcium/iron/fiber) and climate resilience (low water/drought resistance) (4 Marks)."
    }
  },
  {
    id: "la7",
    num: 7,
    unit: "Unit 4: Communication & Expression",
    title: "Saying Without Speaking",
    subtitle: "Non-Verbal Communication: Gestures, Facial Expressions, Sign Language, and Dance Mudras",
    concepts: [
      "Expressing emotions without speech: Happiness, anger, sadness, fear, and surprise through face and eyes.",
      "Sign Language: How people with hearing or speech impairments communicate gracefully using standardized hand signs.",
      "Classical dance hand gestures (Mudras) and facial expressions (Bhavas) conveying animals, flowers, and stories.",
      "Empathy and inclusivity: Treating differently-abled friends with equal respect and equal opportunity."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf2f8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be185d" text-anchor="middle">Saying Without Speaking — Facial Expressions &amp; Dance Mudras</text>
      <!-- Happy Face -->
      <circle cx="80" cy="80" r="24" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="80" y="86" font-size="18" text-anchor="middle">😊</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Joy / Happy</text>
      <!-- Surprised Face -->
      <circle cx="180" cy="80" r="24" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/><text x="180" y="86" font-size="18" text-anchor="middle">😲</text>
      <text x="180" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">Surprise / Wonder</text>
      <!-- Sign Language Hand -->
      <circle cx="310" cy="80" r="26" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="310" y="87" font-size="20" text-anchor="middle">🤟👋</text>
      <text x="310" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#3730a3" text-anchor="middle">Sign Language</text>
      <!-- Dance Mudra (Flower/Deer) -->
      <circle cx="460" cy="80" r="26" fill="#fce7f3" stroke="#db2777" stroke-width="2"/><text x="460" y="87" font-size="20" text-anchor="middle">🪷🦌</text>
      <text x="460" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9d174d" text-anchor="middle">Dance Mudras (Lotus/Deer)</text>
    </svg>`,
    questions: [
      {
        category: "Facial Expressions",
        q: "How can our face and eyes tell if a person is happy, angry, or scared without them saying a single word?",
        ans: "• <strong>Happiness:</strong> The mouth curves upward into a broad smile, cheek muscles lift, and eyes sparkle with pleasant creases.<br>• <strong>Anger:</strong> Eyebrows furrow together tightly in a scowl, forehead veins tense, lips press thin, and eyes open wide with a hard stare.<br>• <strong>Fear:</strong> Eyes widen in shock, pupils dilate, eyebrows raise high, and the mouth drops open slightly.",
        marks: 3,
        rubric: [
          { key: "Detailed anatomical descriptions for happy, angry, and fearful expressions", marks: "3 Marks" }
        ]
      },
      {
        category: "Classical Mudras",
        q: "What are 'Mudras' and 'Bhavas' in classical Indian dances like Bharatnatyam or Kathak?",
        ans: "In Indian classical dance:<br>• <strong>Mudras:</strong> Specific symbolic hand gestures used to depict natural objects (like a blooming lotus flower, a swimming fish, or a flying bird).<br>• <strong>Bhavas:</strong> Facial expressions that convey deep emotional stories (such as courage, devotion, joy, and wonder).",
        marks: 3,
        rubric: [
          { key: "Definition and role of hand Mudras", marks: "1.5 Marks" },
          { key: "Definition and role of facial Bhavas", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Inclusivity & Sign Language",
        q: "How does learning basic Sign Language help school children build stronger friendships?",
        ans: "Learning Sign Language bridges communication barriers, allowing children to converse directly with hearing-impaired classmates, play games together comfortably, and foster an inclusive classroom culture where everyone feels heard and valued.",
        marks: 2,
        rubric: [
          { key: "Overcoming communication barriers and fostering inclusion", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Creating Accessible and Inclusive School Environments",
      text: "A national education survey shows that many children with hearing impairments drop out of regular schools because teachers lecture orally without visual aids or sign interpreters.",
      question: "Recommend three practical visual teaching methods that classroom teachers can adopt to make lessons accessible to students with hearing impairments.",
      answer: "Teachers can adopt universal inclusive practices: (1) <strong>Rich Visual Demonstrations:</strong> Use illustrated charts, infographics, subtitles on video clips, and step-by-step whiteboard diagrams for all core explanations. (2) <strong>Face the Class While Speaking:</strong> Maintain clear line-of-sight so students can lip-read easily without the teacher turning their back toward the board while talking. (3) <strong>Peer Sign Buddies:</strong> Teach the entire class basic Indian Sign Language alphabets and greetings so classmates can assist and interact comfortably during group projects.",
      rubric: "Visual pedagogy, lip-reading accessibility, peer sign language integration (4 Marks)."
    }
  },
  {
    id: "la8",
    num: 8,
    unit: "Unit 1: Animals & Habitats",
    title: "Flying High",
    subtitle: "Avian Diversity: Beak Shapes, Feathers, Flying Habits, Claws, and Ecological Roles",
    concepts: [
      "Diverse bird beaks adapted to food: Hooked beaks for meat (Eagle), curved beaks for cracking nuts (Parrot), needle beaks for nectar (Sunbird), flat beaks for filtering mud (Duck).",
      "Feather functions: Flight feathers on wings, down feathers keeping the body warm, and tail feathers steering like a rudder.",
      "Unique bird traits: The Owl can rotate its head almost fully backward; the Myna jerks its neck back and forth.",
      "The role of scavenger birds (Vultures, Crows) as 'nature's sanitation squad' cleaning carcasses."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Flying High — Specialized Bird Beaks &amp; Dietary Adaptations</text>
      <!-- Eagle / Hooked Beak -->
      <circle cx="80" cy="80" r="26" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/><text x="80" y="87" font-size="18" text-anchor="middle">🦅</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">Hooked Beak (Tearing Meat)</text>
      <!-- Parrot / Curved Beak -->
      <circle cx="200" cy="80" r="26" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="200" y="87" font-size="18" text-anchor="middle">🦜</text>
      <text x="200" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Curved Beak (Cracking Nuts)</text>
      <!-- Woodpecker / Chisel Beak -->
      <circle cx="330" cy="80" r="26" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="330" y="87" font-size="18" text-anchor="middle">🪵🐦</text>
      <text x="330" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Chisel Beak (Wood Borers)</text>
      <!-- Duck / Flat Spoon Beak -->
      <circle cx="470" cy="80" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="470" y="87" font-size="18" text-anchor="middle">🦆</text>
      <text x="470" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Flat Beak (Filtering Mud)</text>
    </svg>`,
    questions: [
      {
        category: "Beak Adaptations",
        q: "Why do different birds have different shapes of beaks? Explain with three examples.",
        ans: "Different birds have different beak shapes because their beaks are specialized biological tools adapted to their specific diet:<br>1. <strong>Eagle / Vulture:</strong> Strong, sharp, hooked beaks to tear through tough meat and flesh.<br>2. <strong>Parrot:</strong> Hard, hooked curved beak to crack open tough nutshells and bite into hard green fruits.<br>3. <strong>Woodpecker:</strong> Long, straight, chisel-like beak to peck deep holes into tree bark to pull out hidden wood-boring insects.",
        marks: 3,
        rubric: [
          { key: "Explanation of dietary adaptation principle", marks: "1.5 Marks" },
          { key: "Three accurate bird-beak functional pairings", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Feather Functions",
        q: "What are the two main purposes of feathers on a bird's body?",
        ans: "1. <strong>Flight & Steering:</strong> Strong, broad flight feathers on wings and tail give aerodynamic lift and help steer direction in the air.<br>2. <strong>Thermal Insulation & Weatherproofing:</strong> Soft, fluffy down feathers close to the skin trap warm air to protect the bird from freezing cold and shed water droplets during rain.",
        marks: 3,
        rubric: [
          { key: "Flight aerodynamic role", marks: "1.5 Marks" },
          { key: "Thermal insulation and waterproofing role", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Unique Avian Facts",
        q: "Which bird can turn its head around backwards to see behind itself, and which bird is known for copying human speech?",
        ans: "The <strong>Owl</strong> can rotate its head around almost completely (up to 270 degrees) to observe behind itself, and the <strong>Parrot</strong> is famous for imitating and repeating human speech.",
        marks: 2,
        rubric: [
          { key: "Identification of the Owl and Parrot with correct traits", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Avian Conservation: The Vanishing House Sparrow",
      text: "Old grandparents recall that when they were children, dozens of chirping house sparrows nested inside ceiling ventilators and ate dropped rice grains in courtyards. Today, house sparrows have largely disappeared from modern glass-fronted concrete cities.",
      question: "Analyze the environmental causes behind the decline of urban sparrows and recommend two citizen actions to bring them back.",
      answer: "<strong>Causes of Sparrow Decline:</strong> (1) Modern matchbox-style concrete houses lack open ventilators and eaves, leaving no safe nesting crevices. (2) Heavy chemical gardening pesticides kill small green caterpillars that mother sparrows feed to newly hatched chicks. (3) Excessive concrete paving eliminates open soil patches where birds dust-bathe and forage for grass seeds.<br><br><strong>Citizen Actions:</strong> Install artificial wooden nest boxes under balcony roofs, keep a regular terracotta water and millet feeder, and plant native green shrubs in gardens.",
      rubric: "Urban architecture impact, pesticide elimination of insect food, practical nesting/feeding mitigation (4 Marks)."
    }
  },
  {
    id: "la9",
    num: 9,
    unit: "Unit 2: Water & Food",
    title: "It's Raining",
    subtitle: "Appu the Elephant Waters the Dying Banana Trees: Rain and Plant Revival",
    concepts: [
      "Plants droop and leaves turn brown when they do not receive water during long dry spells.",
      "Appu the elephant using his trunk to fill river water and shower dying banana trees until they turn green again.",
      "The arrival of rain clouds: Transforming parched brown landscapes into lush green living gardens.",
      "Clouds can appear in different shapes (elephants, horses, fleece) and bring joyful rainbows with 7 colors."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">Appu Waters Banana Trees &amp; Rainy Season Joy</text>
      <!-- Elephant Appu -->
      <circle cx="100" cy="85" r="30" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      <path d="M125,75 Q150,70 145,100 Q140,115 130,115" stroke="#475569" stroke-width="5" fill="none"/>
      <text x="100" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#334155" text-anchor="middle">Appu the Elephant</text>
      <!-- Water Spray -->
      <path d="M145,100 Q180,85 210,95" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="3,3"/>
      <!-- Banana Tree Revived -->
      <path d="M230,115 L230,65 Q210,45 190,60 M230,65 Q255,45 270,60" stroke="#16a34a" stroke-width="4" fill="none"/>
      <text x="230" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Lush Banana Trees</text>
      <!-- Rainbow & Cloud -->
      <path d="M420,50 Q445,35 470,50 Q495,40 510,60 L410,60 Z" fill="#cbd5e1"/>
      <path d="M410,90 Q460,50 510,90" stroke="#f43f5e" stroke-width="2" fill="none"/>
      <path d="M412,93 Q460,53 508,93" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <path d="M414,96 Q460,56 506,96" stroke="#10b981" stroke-width="2" fill="none"/>
      <path d="M416,99 Q460,59 504,99" stroke="#3b82f6" stroke-width="2" fill="none"/>
      <text x="460" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Rainbow &amp; Rain Clouds</text>
    </svg>`,
    questions: [
      {
        category: "Story Comprehension",
        q: "Why were the banana trees drooping and how did Appu help them?",
        ans: "The banana trees were drooping and withering because it had not rained for a long time and the soil had completely dried up. Appu bathed in the river, drank water to his fill, filled his long trunk with river water, and poured it over the thirsty roots of the banana trees until they perked up, turned lush green, and gave sweet bananas again.",
        marks: 3,
        rubric: [
          { key: "Explanation of drought and wilting trees", marks: "1.5 Marks" },
          { key: "Appu's actions using his trunk to irrigate trees", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Rainbow Science",
        q: "When does a rainbow appear in the sky, and what are its seven constituent colors?",
        ans: "A rainbow appears in the sky opposite the sun right after a rain shower when sunlight passes through microscopic airborne raindrops that act as natural glass prisms.<br><strong>Seven Colors (VIBGYOR):</strong> Violet, Indigo, Blue, Green, Yellow, Orange, and Red.",
        marks: 3,
        rubric: [
          { key: "Conditions for rainbow formation (sunlight + rain droplets acting as prisms)", marks: "1.5 Marks" },
          { key: "Correct listing of 7 VIBGYOR colors", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Nature Sensitivity",
        q: "How do street trees get water when nobody waters them with hose pipes?",
        ans: "Street trees develop deep taproot systems that penetrate deep into the subterranean soil layers to absorb groundwater. During the rainy season, rainfall naturally quenches their thirst and recharges the surrounding soil.",
        marks: 2,
        rubric: [
          { key: "Deep taproots absorbing underground water", marks: "1 Mark" },
          { key: "Rainwater recharge", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Ecosystem Stewardship: Animals as Forest Gardeners",
      text: "Appu the elephant watered banana trees in the story. In real tropical forests, wild elephants eat ripe fruits and walk dozens of kilometers daily, dropping seeds in large piles of nutritious dung.",
      question: "How do wild elephants act as 'engineers of the forest' in real ecosystems?",
      answer: "Wild elephants are true ecosystem engineers and forest gardeners: (1) <strong>Seed Dispersal:</strong> They consume fruits from hundreds of tree species and carry the seeds inside their digestive tracts over long distances, depositing them in fertile dung beds that sprout into new forest trees. (2) <strong>Creating Waterholes:</strong> During severe droughts, elephants use their feet and tusks to dig deep pits in dry riverbeds, exposing subterranean water that saves thousands of smaller birds, deer, and monkeys.",
      rubric: "Ecological role of elephants, seed dispersal over vast distances, digging waterholes during droughts (4 Marks)."
    }
  },
  {
    id: "la10",
    num: 10,
    unit: "Unit 2: Water & Food",
    title: "What is Cooking",
    subtitle: "Culinary Methods: Boiling, Frying, Roasting, Steaming, Baking; Utensil Materials and Fuels",
    concepts: [
      "Different methods of cooking: Boiling (potatoes/rice), Roasting (rotis/corn), Steaming (idli/dhokla), Frying (puri/samosa), and Baking (cakes/bread).",
      "Cooking utensil materials: Clay earthenware, copper, brass, stainless steel, cast iron, and glass.",
      "Cooking fuels and stoves: LPG gas cylinders, solar cookers, electric induction stoves, and traditional chulhas using firewood or cow-dung cakes.",
      "Safety in the kitchen: Turning off gas knobs, keeping flammable cloth away from flames, avoiding burns."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">What is Cooking — Diverse Cooking Methods &amp; Clean Fuels</text>
      <!-- Steaming (Idli) -->
      <circle cx="80" cy="80" r="26" fill="#f8fafc" stroke="#64748b" stroke-width="2"/><text x="80" y="87" font-size="18" text-anchor="middle">♨️🥟</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#334155" text-anchor="middle">Steaming (Idli/Dhokla)</text>
      <!-- Boiling (Rice/Eggs) -->
      <circle cx="190" cy="80" r="26" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/><text x="190" y="87" font-size="18" text-anchor="middle">🍲💧</text>
      <text x="190" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">Boiling (Rice/Potatoes)</text>
      <!-- Roasting (Roti) -->
      <circle cx="300" cy="80" r="26" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="300" y="87" font-size="18" text-anchor="middle">🔥🫓</text>
      <text x="300" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Roasting (Roti/Bhutta)</text>
      <!-- Baking (Bread/Cake) -->
      <circle cx="410" cy="80" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="410" y="87" font-size="18" text-anchor="middle">🍞🎂</text>
      <text x="410" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Baking (Bread/Cookies)</text>
      <!-- Solar Cooker -->
      <circle cx="515" cy="80" r="22" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/><text x="515" y="86" font-size="16" text-anchor="middle">☀️📦</text>
      <text x="515" y="125" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#047857" text-anchor="middle">Solar Cooker</text>
    </svg>`,
    questions: [
      {
        category: "Cooking Methods",
        q: "Classify the following foods according to their method of cooking: Idli, Samosa, Roti, Boiled Rice, Cake, Roasted Corn.",
        ans: "• <strong>Steaming:</strong> Idli.<br>• <strong>Deep Frying:</strong> Samosa.<br>• <strong>Roasting:</strong> Roti, Roasted Corn (Bhutta).<br>• <strong>Boiling:</strong> Boiled Rice.<br>• <strong>Baking:</strong> Cake.",
        marks: 3,
        rubric: [
          { key: "Correct pairing for all six food items", marks: "3 Marks" }
        ]
      },
      {
        category: "Cooking Utensil Materials",
        q: "Why are clay pots considered healthier for slow cooking than aluminum utensils?",
        ans: "Clay pots are alkaline and react gently with the natural acids in food, neutralizing acidity while preserving micronutrients. The porous clay allows moisture and heat to circulate evenly. In contrast, cheap aluminum pans can leach small amounts of toxic metal into acidic foods over time.",
        marks: 3,
        rubric: [
          { key: "Benefits of porous, alkaline clay cookware", marks: "1.5 Marks" },
          { key: "Drawbacks of metal leaching in cheap aluminum", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Clean Cooking Energy",
        q: "What is a solar cooker and what are two major advantages of using it?",
        ans: "A <strong>solar cooker</strong> is an insulated black-painted box with a glass lid and mirror reflector that traps solar heat to cook food without firewood or gas.<br><strong>Advantages:</strong><br>1. Zero fuel cost and zero smoke pollution.<br>2. Preserves vitamins and prevents food from burning.",
        marks: 2,
        rubric: [
          { key: "Definition of solar cooker", marks: "1 Mark" },
          { key: "Two advantages (zero pollution, nutrient retention)", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Clean Indoor Air: Transitioning from Wood Chulha to LPG (PM Ujjwala Yojana)",
      text: "In many rural homes, women cook on unventilated firewood chulhas, inhaling smoke equivalent to smoking dozens of cigarettes daily, causing eye irritation and chronic lung illnesses.",
      question: "Why is switching to clean cooking gas (LPG) or biogas critical for women's health and environmental protection?",
      answer: "Switching from smoky wood chulhas to LPG or biogas is vital because: (1) <strong>Health Protection:</strong> It eliminates harmful soot, carbon monoxide, and smoke particles, preventing asthma, lung damage, and eye cataracts in mothers and infants. (2) <strong>Forest Conservation:</strong> It halts the cutting of firewood, preserving neighborhood trees and topsoil. (3) <strong>Time and Labor Savings:</strong> It saves women hours of arduous firewood gathering, allowing more time for childcare, education, and rest.",
      rubric: "Respiratory health benefits of smokeless fuel, halting deforestation, social empowerment (4 Marks)."
    }
  },
  {
    id: "la11",
    num: 11,
    unit: "Unit 5: Travel, Work & Community",
    title: "From Here to There",
    subtitle: "Poem 'The Train' by Harendranath Chattopadhyay: Land, Water, Air Transport, and Animal-Drawn Carts",
    concepts: [
      "Means of transport on land: Bicycles, scooters, cars, buses, electric metro trains, and railways.",
      "Water and air transport: Boats, ferries, ships, airplanes, and helicopters.",
      "Traditional and rural transports: Camel carts in deserts, bullock carts in villages, tongas, and shikaras in lakes.",
      "Emergency service vehicles: Ambulances, fire engines, and police patrol cars with sirens."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">From Here to There — The Story of Transport</text>
      <!-- Train -->
      <rect x="60" y="65" width="100" height="40" fill="#2563eb" rx="6"/>
      <circle cx="80" cy="110" r="8" fill="#1e293b"/><circle cx="110" cy="110" r="8" fill="#1e293b"/><circle cx="140" cy="110" r="8" fill="#1e293b"/>
      <text x="110" y="90" font-size="12" fill="#ffffff" font-weight="800" text-anchor="middle">Train 🚂</text>
      <!-- Bicycle (Green Transport) -->
      <circle cx="240" cy="85" r="26" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="240" y="92" font-size="20" text-anchor="middle">🚲</text>
      <text x="240" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Bicycle (Eco-Friendly)</text>
      <!-- Boat / Water -->
      <circle cx="360" cy="85" r="26" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/><text x="360" y="92" font-size="20" text-anchor="middle">⛵</text>
      <text x="360" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">Boat / Ship (Water)</text>
      <!-- Aeroplane / Air -->
      <circle cx="480" cy="85" r="26" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="480" y="92" font-size="20" text-anchor="middle">✈️</text>
      <text x="480" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#92400e" text-anchor="middle">Aeroplane (Air)</text>
    </svg>`,
    questions: [
      {
        category: "Modes of Transport",
        q: "Classify vehicles based on the medium they travel through: (a) Land (b) Water (c) Air. Give two examples of each.",
        ans: "• <strong>Land Transport:</strong> Bus, Metro Train, Bicycle, Car.<br>• <strong>Water Transport:</strong> Cargo Ship, Ferry, Speedboat, Shikara.<br>• <strong>Air Transport:</strong> Aeroplane, Helicopter, Hot Air Balloon.",
        marks: 3,
        rubric: [
          { key: "Correct classification and examples for land, water, and air", marks: "3 Marks" }
        ]
      },
      {
        category: "Emergency Vehicles",
        q: "Name two emergency vehicles and explain why other traffic must always give way to them.",
        ans: "1. <strong>Ambulance:</strong> Carries critically sick or injured patients to hospital emergency wards.<br>2. <strong>Fire Engine:</strong> Carries firefighters and high-pressure water pumps to put out blazing building fires.<br>Traffic must give way because every single second lost in a traffic jam can mean the loss of human lives or severe property destruction.",
        marks: 3,
        rubric: [
          { key: "Identification of Ambulance and Fire Engine", marks: "1.5 Marks" },
          { key: "Critical life-saving reason to yield traffic priority", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Eco-Friendly Commuting",
        q: "Why is riding a bicycle or using public electric metro trains better for city life than driving personal petrol cars?",
        ans: "Bicycles and electric metros do not burn petrol or diesel, so they produce zero toxic exhaust smoke, lower greenhouse gases, eliminate noisy traffic honking, and keep people physically fit.",
        marks: 2,
        rubric: [
          { key: "Reduction of air pollution and traffic congestion", marks: "1 Mark" },
          { key: "Health and physical fitness benefit", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Geographical Adaptations in Transportation: Reaching School in Remote Terrains",
      text: "Children in snowy Ladakh travel to school on sledges; children in mountainous Uttarakhand walk across precarious rocky trails; children in riverine Assam cross flooded rivers on bamboo bridges (sanko).",
      question: "How do humans adapt their means of transport to diverse physical geographies and extreme climates?",
      answer: "Human ingenuity devises transport solutions suited to specific terrains: (1) <strong>Desert Sands:</strong> Wide, padded hooves of camels make camel carts ideal for shifting sand dunes. (2) <strong>River Networks (Kerala/Assam):</strong> Wooden boats (vallam) and lightweight bamboo suspension bridges allow communities to cross wetlands without costly concrete bridges. (3) <strong>Snowy Mountains:</strong> Sturdy yaks, snowmobiles, and ropeway cable cars traverse sheer icy ravines where wheeled road buses cannot operate safely.",
      rubric: "Geographical adaptation of transport, local natural resources, resilience in extreme terrains (4 Marks)."
    }
  },
  {
    id: "la12",
    num: 12,
    unit: "Unit 5: Travel, Work & Community",
    title: "Work We Do",
    subtitle: "Community Helpers and Occupations: Doctors, Sweepers, Postmen, Traffic Police, and Child Rights",
    concepts: [
      "Community helpers and essential public occupations: Doctors, nurses, teachers, sweepers, postmen, shopkeepers, and traffic police.",
      "Interdependence: No community can function without the collective contributions of all workers.",
      "The importance of education: Every child has the fundamental right to go to school instead of being forced into child labor (tea stalls/brick kilns).",
      "Treating community sanitary workers with respect and dignity."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Work We Do — Community Helpers &amp; Dignity of Labor</text>
      <!-- Doctor / Nurse -->
      <circle cx="80" cy="80" r="26" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/><text x="80" y="87" font-size="20" text-anchor="middle">👩‍⚕️🩺</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">Doctor (Healthcare)</text>
      <!-- Teacher -->
      <circle cx="190" cy="80" r="26" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="190" y="87" font-size="20" text-anchor="middle">👨‍🏫📚</text>
      <text x="190" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#3730a3" text-anchor="middle">Teacher (Education)</text>
      <!-- Sanitation Worker -->
      <circle cx="300" cy="80" r="26" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="300" y="87" font-size="20" text-anchor="middle">🧹🦺</text>
      <text x="300" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Sanitation Worker</text>
      <!-- Traffic Police -->
      <circle cx="410" cy="80" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="410" y="87" font-size="20" text-anchor="middle">👮‍♂️🚦</text>
      <text x="410" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Traffic Police (Order)</text>
      <!-- Child at School -->
      <circle cx="510" cy="80" r="22" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/><text x="510" y="86" font-size="16" text-anchor="middle">👧🎒</text>
      <text x="510" y="125" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#be185d" text-anchor="middle">Right to Education</text>
    </svg>`,
    questions: [
      {
        category: "Community Roles",
        q: "Describe the crucial role played by sanitation workers (safai karamcharis) in keeping towns healthy.",
        ans: "Sanitation workers wake up before dawn to sweep dusty public streets, clear choked municipal drains, and collect household garbage. If they stopped working for even two days, streets would overflow with rotting waste, flies and mosquitoes would multiply uncontrollably, and dangerous disease epidemics like dengue, malaria, and cholera would spread.",
        marks: 3,
        rubric: [
          { key: "Specific duties (sweeping, drain cleaning, garbage clearing)", marks: "1.5 Marks" },
          { key: "Public health consequence if work stops (epidemics/rot)", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Child Rights and Child Labor",
        q: "Why is child labor illegal, and what should be done if you see a young child washing dishes at a tea stall instead of being in school?",
        ans: "Child labor is illegal because every child has the fundamental constitutional right to free education, recreation, and healthy physical development. Working in dangerous, exhausting conditions ruins children's futures. We should inform school authorities, local child welfare committees, or call the <strong>Childline Helpline (1098)</strong> so the child can be rescued and enrolled in a school.",
        marks: 3,
        rubric: [
          { key: "Fundamental right to education and hazards of child labor", marks: "1.5 Marks" },
          { key: "Actionable reporting via Childline 1098 or authorities", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Dignity of Labor",
        q: "What does the phrase 'Dignity of Labor' mean in our daily society?",
        ans: "It means that every honest type of work—whether done by a surgeon, an engineer, a farmer, or a street sweeper—is equally respectable and worthy of honor. No honest work is low or inferior.",
        marks: 2,
        rubric: [
          { key: "Equal respect for all honest occupations without discrimination", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Community Interdependence: When Public Services Halt",
      text: "During a torrential rainstorm, municipal sanitation workers, electricity linemen, and water pipeline mechanics work knee-deep in water all night to restore power and unblock sewage drains.",
      question: "How does this event illustrate that our daily comforts depend entirely on unseen, hardworking community helpers?",
      answer: "Modern life is an interconnected web where no individual is self-sufficient. While we rest safely indoors, linemen risk electrical shocks to restore power and municipal workers brave filthy drains to prevent urban flooding. Recognizing this interdependence shatters social prejudices and reminds us to treat every community worker with profound gratitude, courtesy, and fair living wages.",
      rubric: "Appreciation of community interdependence, frontline workers' sacrifice, moral dignity of labor (4 Marks)."
    }
  },
  {
    id: "la13",
    num: 13,
    unit: "Unit 4: Communication & Expression",
    title: "Sharing Our Feelings",
    subtitle: "Seema's Family and Blind Ravi Bhaiya: Empathy, Braille Script, and Care for Elders",
    concepts: [
      "Understanding the sensory world of visually impaired individuals: Highly developed senses of touch and hearing.",
      "The White Cane: A symbol of independence and tool for detecting obstacles on walking paths.",
      "The Braille Script: Invented by Louis Braille, read by gliding fingertips over raised dots arranged in a 6-dot cell.",
      "Caring for aging family members with failing vision or joint pain through love, patience, and respect."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Sharing Our Feelings — Braille Script &amp; The White Cane</text>
      <!-- White Cane -->
      <circle cx="100" cy="80" r="26" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <line x1="90" y1="65" x2="110" y2="105" stroke="#dc2626" stroke-width="3"/>
      <text x="100" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#334155" text-anchor="middle">The White Cane</text>
      <!-- Braille Cell (6 Dots) -->
      <rect x="230" y="55" width="80" height="55" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="6"/>
      <circle cx="255" cy="70" r="4" fill="#0284c7"/><circle cx="285" cy="70" r="4" fill="#e2e8f0"/>
      <circle cx="255" cy="83" r="4" fill="#0284c7"/><circle cx="285" cy="83" r="4" fill="#0284c7"/>
      <circle cx="255" cy="96" r="4" fill="#e2e8f0"/><circle cx="285" cy="96" r="4" fill="#e2e8f0"/>
      <text x="270" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">Braille (6 Raised Dots)</text>
      <!-- Auditory / Talking Books -->
      <circle cx="430" cy="80" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="430" y="87" font-size="20" text-anchor="middle">🎧📻📖</text>
      <text x="430" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Audio &amp; Talking Books</text>
    </svg>`,
    questions: [
      {
        category: "Braille Script History",
        q: "Who was Louis Braille, and how does the Braille script help blind people read and write?",
        ans: "<strong>Louis Braille:</strong> A blind French scholar who lost his eyesight in a childhood accident and devised a revolutionary reading system for visually impaired people in 1824.<br><strong>How Braille Works:</strong> Braille is embossed on thick paper using rows of raised dots based on a <strong>6-dot cell system</strong>. By lightly running their sensitive fingertips across the patterns of raised dots, blind people read letters, numbers, and books just as quickly as sighted readers.",
        marks: 3,
        rubric: [
          { key: "Identification of Louis Braille", marks: "1 Mark" },
          { key: "Explanation of the 6 raised dot cell touch system", marks: "2 Marks" }
        ]
      },
      {
        category: "Independence and Mobility",
        q: "How does Ravi Bhaiya recognize different people without seeing them?",
        ans: "Ravi Bhaiya relies on his keenly trained hearing and touch. He identifies people by the distinct sound of their footsteps, their breathing patterns, the timbre of their voices, and even their body perfumes. By touching a person's hand or shoulders, he immediately senses whether they are happy, anxious, or tired.",
        marks: 3,
        rubric: [
          { key: "Auditory cues (footsteps, voice tone, breathing)", marks: "1.5 Marks" },
          { key: "Tactile sensitivity and emotional empathy", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Pedestrian Etiquette",
        q: "What should you do when you see a person with a white cane waiting to cross a busy road?",
        ans: "We should gently approach them, introduce ourselves politely, ask if they would like assistance, and if they agree, offer our elbow for them to hold while guiding them safely across the zebra crossing without yanking their cane.",
        marks: 2,
        rubric: [
          { key: "Polite consent before helping", marks: "1 Mark" },
          { key: "Guiding via elbow rather than grabbing the cane", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Universal Design for Accessibility (Divyangjan Inclusivity)",
      text: "A new public library is being designed. The architect plans a tall staircase at the entrance, printed books only, and narrow swing doors.",
      question: "Recommend three modifications based on 'Universal Accessibility' to make the library welcoming to visually and physically challenged visitors.",
      answer: "The library should incorporate universal accessibility features: (1) <strong>Braille and Tactile Paving:</strong> Lay textured yellow guiding tiles on floors so cane users can navigate independently, and add Braille nameplates and elevator buttons. (2) <strong>Audiobooks and Screen-Reader Computers:</strong> Provide digital talking books, audio workstations, and Braille display keyboards. (3) <strong>Ramps and Wide Automatic Doors:</strong> Replace steep entry stairs with non-slip ramps with dual handrails and install wide sliding doors for smooth wheelchair and cane access.",
      rubric: "Tactile paving, Braille labeling, assistive digital technology (audiobooks/screen readers), universal access ramps (4 Marks)."
    }
  },
  {
    id: "la14",
    num: 14,
    unit: "Unit 2: Water & Food",
    title: "The Story of Food",
    subtitle: "Plant and Animal Sources of Food; Gender Equality in Household Chores; Natural Home Remedies",
    concepts: [
      "Gender roles in families: Examining shared household work (cooking, cleaning) vs unequal burdens.",
      "Plant parts as food: Roots (radish, carrot), stems (potato, ginger), leaves (spinach, cabbage), flowers (cauliflower, banana flower), and seeds (peas, wheat).",
      "Animal food sources: Milk from cows/goats, honey from honeybees, eggs from hens.",
      "Traditional medicinal home remedies: Turmeric milk for body pain/injuries, clove for toothache, ajwain for stomach ache."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#047857" text-anchor="middle">The Story of Food — Edible Plant Parts &amp; Herbal Home Remedies</text>
      <!-- Roots (Carrot) -->
      <circle cx="80" cy="80" r="26" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="80" y="87" font-size="20" text-anchor="middle">🥕</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Roots: Carrot/Radish</text>
      <!-- Leaves (Spinach) -->
      <circle cx="190" cy="80" r="26" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="190" y="87" font-size="20" text-anchor="middle">🥬</text>
      <text x="190" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Leaves: Spinach/Mint</text>
      <!-- Flowers (Cauliflower) -->
      <circle cx="300" cy="80" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="300" y="87" font-size="20" text-anchor="middle">🥦🌸</text>
      <text x="300" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Flowers: Cauliflower</text>
      <!-- Seeds (Lentils/Wheat) -->
      <circle cx="410" cy="80" r="26" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/><text x="410" y="87" font-size="20" text-anchor="middle">🌾🫘</text>
      <text x="410" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#7c2d12" text-anchor="middle">Seeds: Wheat/Pulses</text>
      <!-- Herbal Remedy (Turmeric) -->
      <circle cx="510" cy="80" r="22" fill="#fef9c3" stroke="#eab308" stroke-width="1.5"/><text x="510" y="86" font-size="16" text-anchor="middle">🥛💛</text>
      <text x="510" y="125" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#a16207" text-anchor="middle">Turmeric (Haldi Milk)</text>
    </svg>`,
    questions: [
      {
        category: "Botanical Plant Parts We Eat",
        q: "Identify which part of the plant we eat for each of the following: Carrot, Potato, Spinach, Clove, Wheat, Cauliflower.",
        ans: "• <strong>Carrot:</strong> Root<br>• <strong>Potato:</strong> Underground Stem (Tuber)<br>• <strong>Spinach:</strong> Leaf<br>• <strong>Clove (Laung):</strong> Dried Flower Bud<br>• <strong>Wheat:</strong> Seed<br>• <strong>Cauliflower:</strong> Flower / Inflorescence",
        marks: 3,
        rubric: [
          { key: "Correct botanical identification for all six foods", marks: "3 Marks" }
        ]
      },
      {
        category: "Herbal Home Remedies",
        q: "What natural kitchen remedy is traditionally used when: (a) You have a toothache (b) You get a bruise or body ache (c) You have a stomach ache with gas?",
        ans: "• (a) <strong>Toothache:</strong> Pressing a whole <strong>clove (laung)</strong> or applying clove oil on the aching tooth.<br>• (b) <strong>Bruise / Body Ache:</strong> Drinking warm <strong>turmeric milk (haldi doodh)</strong> and applying a paste of turmeric and lime.<br>• (c) <strong>Stomach Ache with Gas:</strong> Chewing <strong>carom seeds (ajwain)</strong> with a pinch of black salt and warm water.",
        marks: 3,
        rubric: [
          { key: "Clove for toothache", marks: "1 Mark" },
          { key: "Turmeric for wounds/aches", marks: "1 Mark" },
          { key: "Ajwain with warm water for gastric ache", marks: "1 Mark" }
        ]
      },
      {
        category: "Gender Equality at Home",
        q: "Contrast Venu's family and Rani's family in the chapter regarding sharing household chores.",
        ans: "In <strong>Venu's family</strong>, both parents share the housework (mother and father cook and clean together) and all family members eat together at the dining table. In contrast, in <strong>Rani's family</strong>, all domestic work falls entirely on the mother and daughter while the father and brother only sit and eat first, showing gender inequality.",
        marks: 2,
        rubric: [
          { key: "Contrast of shared responsibilities vs gender stereotyping", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Promoting Gender Equality: Challenging Domestic Stereotypes",
      text: "In a class discussion, a boy says, 'Cooking, washing dishes, and sweeping are women's duties; men are only meant to earn money outside.'",
      question: "How does 'The Story of Food' challenge this stereotype, and why must all children learn life skills equally?",
      answer: "The chapter illustrates that domestic work is not gender-bound; basic living tasks like cooking, cleaning, and laundry are essential <strong>survival life skills</strong> that every human being—boy or girl—must master to live independently. When chores are shared equally among all family members, mothers do not suffer burnout, homes run happily, and children grow up respecting equal partnership and mutual dignity.",
      rubric: "Deconstructing gender stereotypes, home management as essential survival life skills, promoting mutual equality (4 Marks)."
    }
  },
  {
    id: "la15",
    num: 15,
    unit: "Unit 6: Craft, Shelter & Environment",
    title: "Making Pots",
    subtitle: "The Crow (Phudgudi) and Sparrow (Bhanate) Folk Story: Clay, Kiln, Tools, and Prehistoric Pottery",
    concepts: [
      "The charming folk story of Bhanate the sparrow and Phudgudi the crow seeking water to wash its beak.",
      "The chain of helpers in pottery: River → Clay pit → Potter → Blacksmith (for trowel) → Kiln.",
      "The invention of early pottery: Early humans discovered that cooking clay over open flames made waterproof vessels to store food and water.",
      "Making miniature pinch pots, coil pots, and clay cups using moist soil."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Making Pots — The Chain of Helpers: Clay Pit to Kiln</text>
      <!-- Clay Pit -->
      <circle cx="80" cy="80" r="26" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><text x="80" y="86" font-size="18" text-anchor="middle">⛏️🪨</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">1. Clay Pit (Clay)</text>
      <path d="M115,80 L165,80" stroke="#94a3b8" stroke-width="2"/>
      <!-- Potter's Wheel -->
      <circle cx="200" cy="80" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="200" y="86" font-size="18" text-anchor="middle">🏺</text>
      <text x="200" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">2. Potter's Wheel</text>
      <path d="M235,80 L285,80" stroke="#94a3b8" stroke-width="2"/>
      <!-- Blacksmith / Trowel -->
      <circle cx="320" cy="80" r="26" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/><text x="320" y="86" font-size="18" text-anchor="middle">🔨🪓</text>
      <text x="320" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#334155" text-anchor="middle">3. Blacksmith (Khurpi)</text>
      <path d="M355,80 L405,80" stroke="#94a3b8" stroke-width="2"/>
      <!-- Kiln (Bhatti) -->
      <circle cx="450" cy="80" r="26" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/><text x="450" y="86" font-size="18" text-anchor="middle">🔥🏺</text>
      <text x="450" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">4. Kiln (Baking Pots)</text>
    </svg>`,
    questions: [
      {
        category: "Story Progression",
        q: "Narrate the chain of things the crow (Phudgudi) had to visit in order to get a pot made.",
        ans: "1. The crow went to the <strong>river</strong> for water to wash its beak.<br>2. The river asked for a <strong>pot</strong>.<br>3. The crow went to the <strong>potter</strong>, who asked for <strong>clay</strong>.<br>4. The crow went to the <strong>clay pit</strong>, which asked for a <strong>trowel (khurpi)</strong> to dig the soil.<br>5. The crow went to the <strong>blacksmith</strong>, who forged the trowel.",
        marks: 3,
        rubric: [
          { key: "Complete sequential chain (river, potter, clay pit, blacksmith)", marks: "3 Marks" }
        ]
      },
      {
        category: "Pottery Science",
        q: "Why do raw clay pots need to be baked in a hot kiln (bhatti) before they can hold water?",
        ans: "Raw sun-dried clay contains loose water molecules that dissolve immediately back into mud when filled with liquids. Firing pots in a kiln at high temperatures chemically fuses the silica and clay particles into a vitrified, hard ceramic that retains its shape and holds liquids without dissolving.",
        marks: 3,
        rubric: [
          { key: "Why raw clay melts in water", marks: "1.5 Marks" },
          { key: "High-temperature baking creates durable, hardened ceramic", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Human History",
        q: "How did early prehistoric humans store grains and water before the potter's wheel was invented?",
        ans: "Early humans wove dried grass baskets and smeared them with sticky river clay, and shaped hollow bowls out of clay lumps with their hands (pinch pots) before sun-drying them.",
        marks: 2,
        rubric: [
          { key: "Grass baskets lined with clay and pinch pots", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Eco-Friendly Material Culture: Terracotta Cookware Revival",
      text: "With modern awareness about microplastics and toxic non-stick chemical coatings, many urban households are switching back to traditional unglazed clay handis and terracotta water bottles.",
      question: "What are the ecological and health advantages of replacing plastic water bottles with natural clay bottles?",
      answer: "Clay bottles offer distinct advantages: (1) <strong>Natural Evaporative Cooling:</strong> Tiny microscopic pores in the clay allow microscopic water seepage that evaporates continuously, cooling the water naturally by 4-5 degrees Celsius without electricity or refrigerators. (2) <strong>Zero Chemical Leaching:</strong> Unlike plastic bottles that release toxic bisphenol-A (BPA) and microplastics under hot sunlight, natural clay is 100% non-toxic. (3) <strong>Soil-Friendly Disposal:</strong> When discarded, terracotta breaks down harmlessly back into fertile natural soil.",
      rubric: "Evaporative cooling, zero microplastic toxicity, natural soil biodegradability (4 Marks)."
    }
  },
  {
    id: "la16",
    num: 16,
    unit: "Unit 5: Travel, Work & Community",
    title: "Games We Play",
    subtitle: "Traditional Street Games (Hopscotch/Stappoo, Gilli-Danda, Kabbadi), Sportsmanship, and Olympic Champions",
    concepts: [
      "Traditional Indian outdoor games: Stappoo (Hopscotch), Gilli-Danda, Kho-Kho, Kabbadi, Peetthu (Seven Stones).",
      "Indoor games: Chess, Ludo, Carrom, Playing Cards, and Snakes & Ladders.",
      "The value of sports: Physical fitness, cardiovascular stamina, teamwork, and fair play.",
      "Overcoming gender barriers in professional sports (Sania Mirza, Mary Kom, P.V. Sindhu)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf2f8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be185d" text-anchor="middle">Games We Play — Traditional Street Games &amp; Sportsmanship</text>
      <!-- Stappoo (Hopscotch) Grid -->
      <rect x="70" y="60" width="20" height="20" fill="#fbcfe8" stroke="#db2777"/>
      <rect x="70" y="80" width="20" height="20" fill="#fbcfe8" stroke="#db2777"/>
      <rect x="60" y="100" width="20" height="20" fill="#fbcfe8" stroke="#db2777"/><rect x="80" y="100" width="20" height="20" fill="#fbcfe8" stroke="#db2777"/>
      <text x="80" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9d174d" text-anchor="middle">Stappoo / Hopscotch</text>
      <!-- Gilli Danda -->
      <circle cx="210" cy="85" r="26" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
      <line x1="195" y1="95" x2="225" y2="75" stroke="#9a3412" stroke-width="4"/>
      <polygon points="215,80 230,75 225,90" fill="#c2410c"/>
      <text x="210" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Gilli Danda</text>
      <!-- Chess / Indoor -->
      <circle cx="340" cy="85" r="26" fill="#e2e8f0" stroke="#475569" stroke-width="2"/><text x="340" y="92" font-size="20" text-anchor="middle">♟️♞</text>
      <text x="340" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#334155" text-anchor="middle">Chess / Carrom</text>
      <!-- Sports Champion -->
      <circle cx="470" cy="85" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="470" y="92" font-size="20" text-anchor="middle">🏆🥇</text>
      <text x="470" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Olympic Champions</text>
    </svg>`,
    questions: [
      {
        category: "Traditional Games",
        q: "How is the traditional game of 'Stappoo' (Hopscotch) played? What is a 'thippi'?",
        ans: "In <strong>Stappoo</strong>, a rectangular numbered grid of blocks (1 to 8) is drawn on the ground with chalk. The player throws a flat stone marker called a <strong>thippi</strong> into square 1, hops through all the squares on one foot without stepping on lines or on the square with the thippi, turns around at the top, and picks up the thippi on the return trip.",
        marks: 3,
        rubric: [
          { key: "Description of the grid and hopping rules", marks: "1.5 Marks" },
          { key: "Definition and role of the 'thippi' marker", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Indoor vs Outdoor Games",
        q: "Classify these games into Outdoor and Indoor: Cricket, Chess, Kabbadi, Carrom, Kho-Kho, Ludo.",
        ans: "• <strong>Outdoor Games:</strong> Cricket, Kabbadi, Kho-Kho.<br>• <strong>Indoor Games:</strong> Chess, Carrom, Ludo.",
        marks: 3,
        rubric: [
          { key: "Accurate classification of all 6 sports", marks: "3 Marks" }
        ]
      },
      {
        category: "Sportsmanship",
        q: "What does it mean to show 'sportsmanship' when you lose a game?",
        ans: "Sportsmanship means gracefully congratulating the winning team with a handshake, accepting defeat without throwing tantrums, learning from our mistakes, and valuing fun and friendship above winning.",
        marks: 2,
        rubric: [
          { key: "Graceful acceptance of defeat and congratulating opponents", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Physical Activity vs Digital Screen Sedentariness",
      text: "A pediatric fitness survey reveals that 70% of urban children spend their evenings sitting on sofas playing mobile video games instead of playing outdoor sports like Kho-Kho or cycling in the park.",
      question: "Explain the physical and social health hazards of replacing outdoor playground games with video games.",
      answer: "Outdoor street games like Kabbadi, tag, and hopscotch develop cardiovascular stamina, muscle agility, bone density, and eye-hand coordination, while burning excess calories to prevent childhood obesity. Socially, playground games teach vital negotiation skills, team leadership, empathy, and resilience when facing defeat. In contrast, sedentary video gaming causes eye strain, sleep disorders, neck strain, and social isolation.",
      rubric: "Cardiovascular/motor fitness, social skills learned through playground rules vs screen sedentariness (4 Marks)."
    }
  },
  {
    id: "la17",
    num: 17,
    unit: "Unit 4: Communication & Expression",
    title: "Here Comes a Letter",
    subtitle: "The Journey of a Letter from Sender to Receiver: Postbox, Sorting Office, PIN Code, and Postal Evolution",
    concepts: [
      "The stages of a postal letter: Writing address and PIN code, pasting stamp, dropping into postbox, clearing, sorting at post office, transport by train/van, and doorstep delivery by postman.",
      "The role of the PIN code (Postal Index Number): A 6-digit code locating the exact state, sub-region, and sorting post office.",
      "Postal stationery: Postcards, inland letters, stamped envelopes, money orders, and speed post.",
      "Modern digital communication vs letters: Telephone calls, SMS, WhatsApp, and email."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fee2e2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#991b1b" text-anchor="middle">Journey of a Letter — Red Postbox to Doorstep Delivery</text>
      <!-- Red Postbox -->
      <rect x="70" y="60" width="30" height="50" fill="#dc2626" rx="6"/>
      <rect x="75" y="70" width="20" height="4" fill="#ffffff"/>
      <text x="85" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">1. Red Postbox</text>
      <path d="M115,80 L165,80" stroke="#94a3b8" stroke-width="2"/>
      <!-- Sorting Office -->
      <circle cx="200" cy="80" r="26" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="200" y="86" font-size="18" text-anchor="middle">🏢✉️</text>
      <text x="200" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">2. Sorting (PIN)</text>
      <path d="M235,80 L285,80" stroke="#94a3b8" stroke-width="2"/>
      <!-- Mail Train / Van -->
      <circle cx="320" cy="80" r="26" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/><text x="320" y="86" font-size="18" text-anchor="middle">🚆🚐</text>
      <text x="320" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#3730a3" text-anchor="middle">3. Mail Transport</text>
      <path d="M355,80 L405,80" stroke="#94a3b8" stroke-width="2"/>
      <!-- Postman Delivery -->
      <circle cx="450" cy="80" r="26" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="450" y="86" font-size="18" text-anchor="middle">👨‍✈️📬</text>
      <text x="450" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">4. Doorstep Delivery</text>
    </svg>`,
    questions: [
      {
        category: "Postal Journey",
        q: "Trace the step-by-step journey of a letter after you drop it into a red postbox.",
        ans: "1. The postman unlocks the red postbox, collects all letters in a canvas bag, and takes them to the <strong>Head Post Office</strong>.<br>2. Letters are stamped with the post office seal date and sorted according to destination <strong>PIN codes</strong>.<br>3. Bundled letters are loaded onto mail vans, trains, or aeroplanes to reach the destination city.<br>4. At the destination delivery post office, the local beat postman sorts the letters street by street and delivers them into recipients' letterboxes.",
        marks: 3,
        rubric: [
          { key: "Sequential progression from postbox to clearing, sorting, transit, and delivery", marks: "3 Marks" }
        ]
      },
      {
        category: "Postal Index Number (PIN)",
        q: "What is a PIN code, and why is it essential to write it clearly on every envelope?",
        ans: "A <strong>PIN code (Postal Index Number)</strong> is a 6-digit numerical code used by India Post. Each digit represents a specific geographic zone, sub-region, sorting district, and delivery post office. Writing the PIN code ensures that automated machines and sorters can route the letter quickly without errors caused by confusing handwriting or duplicate village names.",
        marks: 3,
        rubric: [
          { key: "Definition of 6-digit PIN code", marks: "1.5 Marks" },
          { key: "Function in speeding up error-free sorting and delivery", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Postal Evolution",
        q: "How did people send urgent messages before the invention of telephones and internet emails?",
        ans: "People sent urgent messages through the <strong>Telegram</strong> (which transmitted short coded electrical signals over wires in hours) or through <strong>carrier pigeons</strong> and horseback royal couriers (harkaras) in ancient times.",
        marks: 2,
        rubric: [
          { key: "Mention of Telegram and historical couriers/pigeons", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Digital Communication vs Emotional Value of Handwritten Letters",
      text: "While instant messaging apps deliver text messages in seconds, Reema's grandmother keeps a bundle of old handwritten inland letters sent by her father fifty years ago in her wooden chest.",
      question: "Why do handwritten letters carry emotional and historical value that digital instant messages often lack?",
      answer: "Handwritten letters are tangible personal artifacts. The sender's physical handwriting, ink strokes, deliberate pauses, choice of stamps, and paper texture preserve the author's warmth and personality. Writing a physical letter requires dedicated time, thoughtful contemplation, and patience. Unlike fleeting digital notifications that are easily deleted, handwritten letters can be cherished as precious family heirlooms for generations.",
      rubric: "Tangibility of handwriting, emotional investment, contemplation vs ephemeral digital texts (4 Marks)."
    }
  },
  {
    id: "la18",
    num: 18,
    unit: "Unit 6: Craft, Shelter & Environment",
    title: "A House Like This!",
    subtitle: "Architectural Adaptation to Climate and Terrain: Stilt Houses, Igloos, Houseboats, Multi-storey Flats",
    concepts: [
      "Stilt houses in Assam: Built 10 to 12 feet above ground on sturdy bamboo pillars to stay safe during frequent floods.",
      "Sloping wooden roofs in Manali (Himachal Pradesh): Allowing heavy winter snow and rain to slide off quickly.",
      "Thick mud houses with thorny bush roofs in Rajasthan: Keeping interiors cool against intense desert heat.",
      "Houseboats and Shikaras in Srinagar (Kashmir): Floating homes on Dal Lake with carved wooden Khatamband ceilings.",
      "Multi-storey concrete apartments in crowded megacities like Mumbai to accommodate many families in limited land."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f8fafc" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">A House Like This! — Houses Adapted to Diverse Climates</text>
      <!-- Assam Stilt House -->
      <line x1="70" y1="90" x2="70" y2="125" stroke="#b45309" stroke-width="3"/>
      <line x1="110" y1="90" x2="110" y2="125" stroke="#b45309" stroke-width="3"/>
      <rect x="60" y="65" width="60" height="25" fill="#fef08a" stroke="#ca8a04"/>
      <polygon points="90,45 55,65 125,65" fill="#ea580c"/>
      <text x="90" y="140" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#9a3412" text-anchor="middle">Assam Stilt House</text>
      <!-- Manali Sloping Roof -->
      <polygon points="210,45 175,70 245,70" fill="#64748b"/>
      <rect x="185" y="70" width="50" height="40" fill="#cbd5e1"/>
      <text x="210" y="140" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#334155" text-anchor="middle">Manali Sloping Roof</text>
      <!-- Rajasthan Mud House -->
      <rect x="305" y="70" width="50" height="40" fill="#fed7aa" stroke="#c2410c"/>
      <polygon points="330,55 300,70 360,70" fill="#78350f"/>
      <text x="330" y="140" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#9a3412" text-anchor="middle">Rajasthan Mud House</text>
      <!-- Houseboat (Kashmir) -->
      <ellipse cx="450" cy="100" rx="35" ry="12" fill="#92400e"/>
      <rect x="430" y="75" width="40" height="25" fill="#fde68a" stroke="#ca8a04"/>
      <polygon points="450,60 425,75 475,75" fill="#ea580c"/>
      <text x="450" y="140" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#854d0e" text-anchor="middle">Kashmir Houseboat</text>
    </svg>`,
    questions: [
      {
        category: "Climatic Adaptations",
        q: "Why are houses in Assam built on bamboo stilts 10 to 12 feet above the ground?",
        ans: "Assam receives torrential monsoon rains that cause frequent flash floods. Building houses on high bamboo stilts ensures that rising floodwaters and wild reptiles cannot enter living quarters. Furthermore, bamboo is flexible and withstands frequent earthquake tremors.",
        marks: 3,
        rubric: [
          { key: "Flood and waterlogging protection", marks: "1.5 Marks" },
          { key: "Protection from animals and earthquake flexibility", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Desert Architecture",
        q: "How do the thick mud walls and thorny bush roofs of houses in Rajasthan keep people comfortable?",
        ans: "Thick mud walls act as thermal barriers; they absorb desert solar heat during the scorching day without transferring it inside, keeping rooms cool. At night, when desert temperatures drop sharply, the stored warmth radiates back inside. Thorny brushwood roofs provide lightweight thatched insulation.",
        marks: 3,
        rubric: [
          { key: "Thermal insulation of thick mud during hot days", marks: "1.5 Marks" },
          { key: "Nighttime heat radiation and thatched roof purpose", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Specialized Dwellings",
        q: "What is an 'Igloo' and what is a 'Houseboat'?",
        ans: "• <strong>Igloo:</strong> A dome-shaped shelter constructed from tightly packed blocks of snow in freezing polar Arctic regions.<br>• <strong>Houseboat:</strong> A floating wooden residential boat found on scenic lakes and backwaters (like Dal Lake in Kashmir and Alleppey in Kerala).",
        marks: 2,
        rubric: [
          { key: "Accurate definitions of both unique dwelling types", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Vernacular Architecture and Modern Climate Resilience",
      text: "Modern builders in flood-prone wetlands are replacing traditional bamboo stilt houses with heavy ground-level concrete brick homes, resulting in catastrophic waterlogging every monsoon.",
      question: "Why is indigenous vernacular architecture scientifically superior to copy-pasting city concrete designs in ecologically sensitive areas?",
      answer: "Indigenous architecture represents centuries of empirical adaptation to local geology, climate, and hazards. Stilt houses let floodwaters flow underneath unimpeded without structural resistance. Mud and thatch naturally regulate temperature without air conditioning. In contrast, heavy ground-level concrete blocks natural drainage pathways, traps indoor heat, and cracks during earthquakes. True modern engineering blends indigenous wisdom with durable materials rather than blindly imposing unsuitable concrete blocks.",
      rubric: "Ecological wisdom of vernacular architecture, natural drainage vs concrete barriers, thermal efficiency (4 Marks)."
    }
  },
  {
    id: "la19",
    num: 19,
    unit: "Unit 1: Animals & Habitats",
    title: "Our Friends — Animals",
    subtitle: "Empathy, Care, First-Aid for Wounded Animals, and Domestic Mutual Relationships",
    concepts: [
      "The bird that flew into the classroom ceiling fan: First-aid with water and gentle handling.",
      "Malini and her kitten: Caring for domestic pets when they are in distress or hungry.",
      "The story of the thirsty donkey: Helping beasts of burden carrying heavy laundry.",
      "Interdependence: Cow (milk), honeybee (honey), dog (guarding), horse (travel), sheep (wool)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">Our Friends — Animals: First-Aid, Empathy &amp; Care</text>
      <!-- Injured Bird First Aid -->
      <circle cx="90" cy="80" r="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="90" y="87" font-size="20" text-anchor="middle">🕊️🩹💧</text>
      <text x="90" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Bird First-Aid</text>
      <!-- Caring for Kitten -->
      <circle cx="220" cy="80" r="26" fill="#fdf2f8" stroke="#db2777" stroke-width="2"/><text x="220" y="87" font-size="20" text-anchor="middle">🐱🥛</text>
      <text x="220" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#be185d" text-anchor="middle">Feeding Pets</text>
      <!-- Thirsty Donkey -->
      <circle cx="350" cy="80" r="26" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/><text x="350" y="87" font-size="20" text-anchor="middle">🐴🪣</text>
      <text x="350" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Hydrating Work Animals</text>
      <!-- Mutual Friendship -->
      <circle cx="480" cy="80" r="26" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="480" y="87" font-size="20" text-anchor="middle">🐕❤️👧</text>
      <text x="480" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Bond of Companionship</text>
    </svg>`,
    questions: [
      {
        category: "Animal First-Aid",
        q: "What did Navjot and Ali do when a bird was hit by the rotating classroom ceiling fan?",
        ans: "They immediately switched off the electric ceiling fan to prevent further injury, gently picked up the trembling bird, stroked its feathers with love, offered it cool water in a bowl to drink, and watched with joy when it recovered strength and fluttered safely out through the window.",
        marks: 3,
        rubric: [
          { key: "Immediate safety action (switching off fan)", marks: "1 Mark" },
          { key: "Gentle physical care and offering water", marks: "2 Marks" }
        ]
      },
      {
        category: "Care for Working Animals",
        q: "Why should owners never overload or beat beasts of burden (bullocks, horses, donkeys)?",
        ans: "Working animals feel severe muscle exhaustion, thirst, pain, and spine damage when overloaded or whipped. They are living sentient creatures that faithfully assist human livelihoods and deserve nutritious fodder, fresh water, adequate rest, and humane treatment.",
        marks: 3,
        rubric: [
          { key: "Physiological harm of overloading and beating", marks: "1.5 Marks" },
          { key: "Ethical duty to provide rest, fodder, and medical care", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Mutual Benefits",
        q: "Give two examples of how animals provide food and services to humans without being harmed.",
        ans: "1. <strong>Honeybees:</strong> Produce sweet nutritious honey and wax while pollinating our orchard flowers.<br>2. <strong>Sheep:</strong> Provide warm fleece wool that is painlessly sheared in summer to make winter clothes.",
        marks: 2,
        rubric: [
          { key: "Two accurate examples of cruelty-free human-animal partnerships", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Ethical Treatment of Animals: The Kite String (Manja) Hazard",
      text: "During kite-flying festivals, thousands of birds suffer severed wings, deep throat lacerations, and death due to sharp glass-coated synthetic nylon thread (Chinese manja) hanging from trees and telephone wires.",
      question: "As an animal friend, how can you celebrate kite festivals without causing harm to birds?",
      answer: "We can celebrate safely and compassionately: (1) <strong>Boycott Glass-Coated Manja:</strong> Use only traditional plain cotton thread (saddi) that breaks under mild tension and does not slice bird wings. (2) <strong>Avoid Flying at Dawn and Dusk:</strong> Refrain from flying kites during early morning and evening hours when flocks of birds fly between their nesting trees and feeding grounds. (3) <strong>Clean Hanging Threads:</strong> Safely take down dangling leftover kite strings from neighborhood trees so birds do not get entangled.",
      rubric: "Rejection of glass manja, timing kite flying to avoid bird transit, cleaning entangled strings (4 Marks)."
    }
  },
  {
    id: "la20",
    num: 20,
    unit: "Unit 2: Water & Food",
    title: "Drop by Drop",
    subtitle: "Madho's Village in Rajasthan (Bajju): Arid Deserts, Water Tankas, and Water Recycling",
    concepts: [
      "Severe water scarcity in Bajju (Rajasthan): Women and children walking miles on hot sand dunes with pots on their heads to fetch water.",
      "The Water Train: A government relief train carrying drinking water tanks during peak summer crises.",
      "The Tanka System: An underground circular pit built in courtyards with sloping plastered floors and wire mesh filters to harvest every drop of rain.",
      "Water recycling hierarchy: Water used for washing vegetables is reused for washing utensils, which is then used to bathe cattle or water trees."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">Drop by Drop — Madho's Desert Village &amp; The Traditional Tanka</text>
      <!-- Desert Sand Dune -->
      <path d="M40,120 Q120,80 200,120 Q280,75 360,120 L360,145 L40,145 Z" fill="#fde68a"/>
      <!-- Woman Fetching Water -->
      <circle cx="100" cy="85" r="12" fill="#fed7aa"/>
      <circle cx="100" cy="70" r="7" fill="#ea580c"/><circle cx="100" cy="60" r="5" fill="#ea580c"/>
      <text x="100" y="135" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#9a3412" text-anchor="middle">Walking for Miles</text>
      <!-- Traditional Underground Tanka -->
      <rect x="420" y="70" width="90" height="55" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="6"/>
      <polygon points="400,70 465,45 530,70" fill="#d97706"/>
      <line x1="420" y1="70" x2="455" y2="70" stroke="#0369a1" stroke-width="2"/>
      <text x="465" y="100" font-size="12" text-anchor="middle">💧</text>
      <text x="465" y="140" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#0369a1" text-anchor="middle">Underground Tanka (Rain Storage)</text>
    </svg>`,
    questions: [
      {
        category: "Traditional Tanka System",
        q: "What is a 'Tanka' and how is rainwater collected inside it in Rajasthan?",
        ans: "A <strong>Tanka</strong> is a covered circular underground pit constructed inside a house's courtyard.<br>• The courtyard floor is made sloping so all falling rainwater flows toward a drainage hole.<br>• A wire mesh filter is fitted at the inlet mouth to prevent leaves and dirt from entering.<br>• The water flows down a covered pipe into the sealed underground chamber, where it stays cool, pure, and clean for drinking throughout the dry year.",
        marks: 3,
        rubric: [
          { key: "Structure of an underground courtyard Tanka", marks: "1.5 Marks" },
          { key: "Sloping floor and filtration mechanism", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Water Recycling Hierarchy",
        q: "How do people in water-scarce desert villages reuse the same water multiple times?",
        ans: "They practice multi-stage water recycling:<br>1. <strong>Stage 1:</strong> Clean water is used for washing faces and hands.<br>2. <strong>Stage 2:</strong> The collected runoff water is reused for scrubbing kitchen utensils or washing clothes.<br>3. <strong>Stage 3:</strong> The final rinse water is poured onto plant roots or used to bathe cattle.",
        marks: 3,
        rubric: [
          { key: "Detailed 3-stage progression of domestic water reuse", marks: "3 Marks" }
        ]
      },
      {
        category: "Empathy for Scarcity",
        q: "Why is wasting tap water in cities considered insensitive to people living in desert regions?",
        ans: "In desert regions like Bajju, little children and mothers walk barefoot over burning sand for hours just to fetch one pot of drinking water. Carelessly leaving taps running in cities shows thoughtlessness toward a finite, precious natural resource that millions struggle daily to secure.",
        marks: 2,
        rubric: [
          { key: "Contrast between urban water wastage and rural struggle", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Water Footprint Auditing: Zero-Water-Wastage Household",
      text: "A family living in a city apartment receives 24-hour unlimited tap water and routinely uses a running hose pipe to wash their car and sweep their driveway, wasting over 400 liters of potable water daily.",
      question: "Design a practical 'Desert Water Wisdom Plan' for this city family to slash their water wastage by 80%.",
      answer: "The family can adopt desert water wisdom: (1) <strong>Bucket and Sponge Car Washing:</strong> Replace running hose pipes with a single 15-liter bucket and microfiber cloth to wash the car, saving 350 liters instantly. (2) <strong>Broom Instead of Hose:</strong> Sweep the driveway with a broom instead of hosing clean drinking water onto dry asphalt. (3) <strong>RO Purifier Reject Water Capture:</strong> Direct the wastewater drain pipe of home reverse-osmosis (RO) purifiers into a bucket to mop floors and flush toilets. (4) <strong>Turn Off Taps:</strong> Shut taps while brushing and shaving.",
      rubric: "Eliminating running hose pipes, capturing RO reject water, behavioral discipline, 80% conservation target (4 Marks)."
    }
  },
  {
    id: "la21",
    num: 21,
    unit: "Unit 3: Family & Homes",
    title: "Families can be Different",
    subtitle: "Diversity of Modern Family Structures: Single-Parent, Foster, Adoptive, and Blended Families",
    concepts: [
      "No single definition of family: Families come in varied loving configurations across societies.",
      "Sitamma's large joint family: Grandparents, chachas, bua, parents, and cousins living under one ancestral roof in Guntur.",
      "Tara's family: Living happily with her adoptive mother Meenakshi and loving grandfather (Nana) in Chennai.",
      "Sara and Habib's family: Living with their retired Abbu who loves watching television together.",
      "The universal bond across all family types: Mutual affection, emotional support, and caring in times of need."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Families can be Different — Celebrating Every Loving Family Type</text>
      <!-- Joint Family (Sitamma) -->
      <circle cx="80" cy="80" r="26" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="80" y="87" font-size="16" text-anchor="middle">👵👴👨👩👧👦</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Joint Family</text>
      <!-- Adoptive Family (Tara) -->
      <circle cx="200" cy="80" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="200" y="87" font-size="18" text-anchor="middle">👧👩👴</text>
      <text x="200" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Adoptive / Extended</text>
      <!-- Single Parent / Sibling -->
      <circle cx="330" cy="80" r="26" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="330" y="87" font-size="18" text-anchor="middle">👨👧👦</text>
      <text x="330" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Single Parent</text>
      <!-- Blended Family (Kavery & Tania) -->
      <circle cx="470" cy="80" r="26" fill="#fce7f3" stroke="#db2777" stroke-width="2"/><text x="470" y="87" font-size="18" text-anchor="middle">👩‍🦰👨‍🦱👧👶</text>
      <text x="470" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9d174d" text-anchor="middle">Blended / Modern</text>
    </svg>`,
    questions: [
      {
        category: "Diverse Family Models",
        q: "Describe two different family structures discussed in this chapter and how members care for one another.",
        ans: "1. <strong>Tara's Family:</strong> Tara was adopted by her mother Meenakshi. Tara lives with her mother and her grandfather (Nana) in Chennai. Her Nana takes her to school, helps her with homework, and the family vacations together joyfully.<br>2. <strong>Sara and Habib's Family:</strong> Sara and Habib work in government jobs and live with their elderly father (Abbu). In the evenings, all three sit together, watch news debates, read newspapers, and cook meals together as a cooperative team.",
        marks: 3,
        rubric: [
          { key: "Accurate description of Tara's adoptive-extended household", marks: "1.5 Marks" },
          { key: "Accurate description of Sara and Habib's cooperative home", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Family Values",
        q: "What common thread of values unites all families, regardless of whether they are big or small?",
        ans: "The common thread uniting all families is <strong>love, mutual respect, emotional security, and shared care</strong>. Family members stand by each other during illness or hardship, celebrate achievements together, and ensure that every member feels valued and safe.",
        marks: 3,
        rubric: [
          { key: "Identification of love, security, and mutual care as universal family bonds", marks: "3 Marks" }
        ]
      },
      {
        category: "Sensitivity & Inclusivity",
        q: "Why should classmates never tease a child who lives with a single parent or grandparents?",
        ans: "Every family structure is equally normal, honorable, and full of love. Teasing someone about their family setup hurts their feelings and displays ignorance. True friends celebrate each other's loving homes without judgment.",
        marks: 2,
        rubric: [
          { key: "Promoting empathy and acceptance of diverse family structures", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Classroom Diversity: Supporting Children from Varied Family Backgrounds",
      text: "During 'Family Day' in a school, students are asked to bring pictures of both their mother and father. A student named Aryan, whose parents are divorced and who lives with his working mother and grandmother, feels anxious and embarrassed.",
      question: "How should the school adapt its activities to ensure all children feel celebrated regardless of their family structure?",
      answer: "Schools should adopt inclusive terminology and flexible activities: (1) <strong>Inclusive 'My Loving Family' Projects:</strong> Frame assignments around 'People Who Love and Care for Me at Home' rather than rigid 'Mother & Father' templates, welcoming portraits of grandparents, single parents, adoptive guardians, or aunts. (2) <strong>Classroom Sensitization:</strong> Share stories like 'Families can be Different' to educate children that family is defined by love, warmth, and care rather than a rigid headcount.",
      rubric: "Inclusive project framing, emotional safety for diverse family structures, empathy in education (4 Marks)."
    }
  },
  {
    id: "la22",
    num: 22,
    unit: "Unit 5: Travel, Work & Community",
    title: "Left-Right",
    subtitle: "Spatial Awareness, Directional Orientation (North, South, East, West), Map Reading, and Symbols",
    concepts: [
      "Spatial awareness: Distinguishing between our left hand and right hand.",
      "Cardinal directions: The sun rises in the East and sets in the West; facing East, our left is North and right is South.",
      "Map symbols and legends: Using standardized symbols for houses, trees, post offices, schools, and hospitals.",
      "Reading simple neighborhood route maps to navigate safely from home to school."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Left-Right — Cardinal Directions &amp; Neighborhood Map Symbols</text>
      <!-- Compass Rose -->
      <circle cx="110" cy="85" r="32" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <line x1="110" y1="58" x2="110" y2="112" stroke="#dc2626" stroke-width="2"/>
      <line x1="83" y1="85" x2="137" y2="85" stroke="#0284c7" stroke-width="2"/>
      <text x="110" y="55" font-size="9" font-weight="900" fill="#dc2626" text-anchor="middle">N</text>
      <text x="110" y="123" font-size="9" font-weight="900" fill="#0284c7" text-anchor="middle">S</text>
      <text x="143" y="88" font-size="9" font-weight="900" fill="#0284c7" text-anchor="middle">E</text>
      <text x="77" y="88" font-size="9" font-weight="900" fill="#0284c7" text-anchor="middle">W</text>
      <!-- Map Symbols Legend -->
      <!-- Tree -->
      <circle cx="240" cy="75" r="14" fill="#22c55e"/><text x="240" y="105" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#15803d" text-anchor="middle">Tree Symbol</text>
      <!-- Hospital Cross -->
      <rect x="330" y="65" width="20" height="20" fill="#fee2e2" stroke="#dc2626"/>
      <text x="340" y="80" font-size="14" fill="#dc2626" font-weight="900" text-anchor="middle">+</text>
      <text x="340" y="105" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#991b1b" text-anchor="middle">Hospital (+)</text>
      <!-- School -->
      <rect x="430" y="65" width="22" height="20" fill="#fed7aa" stroke="#ea580c"/>
      <text x="441" y="80" font-size="12" text-anchor="middle">🏫</text>
      <text x="441" y="105" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#9a3412" text-anchor="middle">School Symbol</text>
      <!-- Post Office -->
      <rect x="520" y="65" width="22" height="20" fill="#fef08a" stroke="#ca8a04"/>
      <text x="531" y="80" font-size="12" text-anchor="middle">✉️</text>
      <text x="531" y="105" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#854d0e" text-anchor="middle">Post Office</text>
    </svg>`,
    questions: [
      {
        category: "Cardinal Directions",
        q: "How can you find the four cardinal directions (North, South, East, West) using the morning sun?",
        ans: "Stand outside in an open area in the early morning and stretch your arms out wide:<br>1. Face directly toward the rising morning sun: That direction is <strong>East</strong>.<br>2. Your back points directly toward <strong>West</strong> (where the sun sets).<br>3. Your left hand points straight toward <strong>North</strong>.<br>4. Your right hand points straight toward <strong>South</strong>.",
        marks: 3,
        rubric: [
          { key: "East (facing rising sun) and West (back)", marks: "1.5 Marks" },
          { key: "North (left arm) and South (right arm)", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Map Symbols & Key/Legend",
        q: "Why do maps use small pictorial symbols instead of drawing full realistic pictures of buildings and roads?",
        ans: "Real buildings, parks, and hospitals are too huge to draw on a portable sheet of paper. Standardized symbols (like a green circle for a tree, a red plus sign for a hospital, and a dashed line for railway tracks) take up very little space, keep the map neat and uncluttered, and can be understood universally by travelers regardless of their language.",
        marks: 3,
        rubric: [
          { key: "Space-saving and clutter reduction", marks: "1.5 Marks" },
          { key: "Universal readability across languages", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Spatial Orientation",
        q: "When Ruchira travels from home to school, mention two landmarks that fall on her right side.",
        ans: "On Ruchira's right side as she moves along the route fall the <strong>park / playground</strong> and the <strong>bus stop</strong>.",
        marks: 2,
        rubric: [
          { key: "Correct identification of two right-side landmarks from Ruchira's map", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Practical Navigation Skills: Creating a School Fire Evacuation Map",
      text: "During a school safety audit, the principal asks the Class 3 students to help map out an emergency evacuation route from their second-floor classroom to the open playground.",
      question: "Apply your map-making skills to explain how students should design this safety evacuation route map.",
      answer: "Students should design a clear, user-friendly emergency map: (1) <strong>Orient with Cardinal Directions:</strong> Place a Compass Rose (N, S, E, W) in the top-right corner. (2) <strong>Prominent Landmark Symbols:</strong> Mark classroom doors, emergency staircases, fire extinguisher locations (using a red cylinder icon), and first-aid kits (red cross). (3) <strong>Bold Green Directional Arrows:</strong> Draw thick green arrows showing the exact evacuation path down the stairs avoiding elevators. (4) <strong>Safe Assembly Point:</strong> Clearly highlight the open football field as the final safe gathering zone.",
      rubric: "Compass rose orientation, clear legend symbols (fire exits/extinguishers), sequential directional arrows, safe assembly zone (4 Marks)."
    }
  },
  {
    id: "la23",
    num: 23,
    unit: "Unit 6: Craft, Shelter & Environment",
    title: "A Beautiful Cloth",
    subtitle: "Sajida's Dupatta: Traditional Textile Printing, Block Printing, Tie & Dye, and Embroidery",
    concepts: [
      "The beauty of Indian textiles: Sajida's dupatta with golden zari embroidery and mirror-work.",
      "Block printing: Carving wooden stamps or using sliced vegetables (ladyfinger, onion, potato) dipped in paint to create geometric patterns.",
      "Tie and Dye (Bandhani): Tying cloth tightly with strings before dyeing to create sunburst circular patterns.",
      "Natural textile dyes: Turmeric for yellow, beetroot for pink, indigo for deep blue, and spinach for green."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf2f8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#be185d" text-anchor="middle">A Beautiful Cloth — Traditional Printing &amp; Natural Dyeing</text>
      <!-- Embroidered Dupatta with Mirrors -->
      <rect x="70" y="60" width="100" height="50" fill="#f43f5e" rx="4"/>
      <circle cx="85" cy="75" r="4" fill="#ffffff" stroke="#fde047" stroke-width="1.5"/><circle cx="120" cy="75" r="4" fill="#ffffff" stroke="#fde047" stroke-width="1.5"/><circle cx="155" cy="75" r="4" fill="#ffffff" stroke="#fde047" stroke-width="1.5"/>
      <circle cx="102" cy="95" r="4" fill="#ffffff" stroke="#fde047" stroke-width="1.5"/><circle cx="137" cy="95" r="4" fill="#ffffff" stroke="#fde047" stroke-width="1.5"/>
      <text x="120" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9f1239" text-anchor="middle">Sajida's Mirror Dupatta</text>
      <!-- Ladyfinger Block Printing -->
      <circle cx="260" cy="80" r="26" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="260" y="86" font-size="20" text-anchor="middle">🌸💮</text>
      <text x="260" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Vegetable Block Print</text>
      <!-- Bandhani (Tie & Dye) -->
      <circle cx="390" cy="80" r="26" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="390" y="86" font-size="20" text-anchor="middle">🟡🟠🔴</text>
      <text x="390" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Bandhani (Tie &amp; Dye)</text>
      <!-- Natural Dyes -->
      <circle cx="500" cy="80" r="24" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/><text x="500" y="86" font-size="16" text-anchor="middle">🎨🌱</text>
      <text x="500" y="130" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Natural Herbal Dyes</text>
    </svg>`,
    questions: [
      {
        category: "Hands-on Textile Printing",
        q: "How can children create beautiful repeating block-print patterns on paper using a sliced ladyfinger (okra)?",
        ans: "1. Take a fresh ladyfinger and slice it across horizontally with a knife (under adult supervision) to expose its star-shaped pentagonal cross-section.<br>2. Mix water-based poster color or fabric paint in a shallow dish.<br>3. Dip the cut surface of the ladyfinger lightly into the paint and press it firmly onto plain paper or white cloth.<br>4. Repeat the stamping in straight lines, checkerboards, or flower circles to produce elegant, rhythmic floral prints.",
        marks: 3,
        rubric: [
          { key: "Preparation of the cross-section stamp", marks: "1 Mark" },
          { key: "Dipping and stamping technique for repeating patterns", marks: "2 Marks" }
        ]
      },
      {
        category: "Tie & Dye Technique",
        q: "Explain the basic principle behind the traditional Indian craft of Bandhani (Tie & Dye).",
        ans: "Bandhani is a 'resist-dyeing' craft: Artisans pinch small portions of fine cotton or silk cloth and tie them tightly with waxed thread before dipping the fabric into a pot of bright dye. The tightly knotted sections 'resist' the liquid color and remain pristine white. When untied and dried, vibrant circular sunburst rings appear across the dyed background.",
        marks: 3,
        rubric: [
          { key: "Concept of resist-dyeing using tight knots", marks: "1.5 Marks" },
          { key: "Formation of characteristic sunburst rings and patterns", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Natural Colors",
        q: "Name two kitchen ingredients that can be used to prepare natural chemical-free textile dyes.",
        ans: "1. <strong>Turmeric Powder (Haldi):</strong> Produces brilliant warm yellow and golden tones.<br>2. <strong>Beetroot Juice / Pomegranate Peels:</strong> Produces deep reddish-pink and earthy rust tones.",
        marks: 2,
        rubric: [
          { key: "Two correct natural plant dye sources with resulting colors", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      title: "Reviving Natural Organic Dyes over Toxic Synthetic Chemical Dyes",
      text: "Fast-fashion textile factories discharge toxic synthetic chemical dyes into nearby rivers, turning waterways pitch-black and poisoning fish and agricultural soil.",
      question: "Why should we encourage handloom weavers using natural herbal dyes over chemical-intensive synthetic textiles?",
      answer: "Natural herbal dyes derived from plants (indigo, madder, turmeric) are non-toxic, hypoallergenic, and 100% biodegradable; their wastewater enriches garden soil rather than poisoning rivers. Furthermore, supporting handloom artisans who practice traditional wooden block printing keeps rural handicraft heritage thriving, generates dignified livelihoods in villages, and combats the environmental disaster of plastic-based fast fashion.",
      rubric: "Ecological hazards of chemical dyes vs safety of organic plant dyes, preservation of handloom livelihoods (4 Marks)."
    }
  },
  {
    id: "la24",
    num: 24,
    unit: "Unit 1: Animals & Habitats",
    title: "Web of Life",
    subtitle: "Ecological Harmony: Food Webs, Sun, Soil, Water, Air, Plants, Animals, and Human Coexistence",
    concepts: [
      "The interconnectedness of all living and non-living elements: Sun, Air, Water, Soil, Plants, Animals, and Humans.",
      "Everything in nature is linked in a dynamic 'Web of Life'; removing even one thread affects all other members.",
      "How non-living abiotic factors (Sun, Water, Soil) provide the foundation for all living biotic organisms.",
      "Human responsibility: Protecting forests, preventing water pollution, and living in respectful equilibrium with nature."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">Web of Life — The Great Interconnected Ecological Cycle</text>
      <!-- Sun -->
      <circle cx="80" cy="80" r="24" fill="#fde047" stroke="#ca8a04" stroke-width="2"/><text x="80" y="86" font-size="18" text-anchor="middle">☀️</text>
      <text x="80" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#854d0e" text-anchor="middle">Sun (Energy Source)</text>
      <!-- Plants -->
      <circle cx="180" cy="80" r="24" fill="#86efac" stroke="#16a34a" stroke-width="2"/><text x="180" y="86" font-size="18" text-anchor="middle">🌱</text>
      <text x="180" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#15803d" text-anchor="middle">Plants (Producers)</text>
      <!-- Herbivores / Animals -->
      <circle cx="290" cy="80" r="24" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="290" y="86" font-size="18" text-anchor="middle">🐇🐄</text>
      <text x="290" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Animals (Consumers)</text>
      <!-- Water & Soil -->
      <circle cx="400" cy="80" r="24" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/><text x="400" y="86" font-size="18" text-anchor="middle">💧🪴</text>
      <text x="400" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#0369a1" text-anchor="middle">Soil &amp; Water</text>
      <!-- Humans in Harmony -->
      <circle cx="500" cy="80" r="24" fill="#fce7f3" stroke="#db2777" stroke-width="2"/><text x="500" y="86" font-size="18" text-anchor="middle">🧑‍🤝‍🧑</text>
      <text x="500" y="125" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9d174d" text-anchor="middle">Humans (Protectors)</text>
      <!-- Connecting Web Lines -->
      <line x1="104" y1="80" x2="156" y2="80" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="204" y1="80" x2="266" y2="80" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="314" y1="80" x2="376" y2="80" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="424" y1="80" x2="476" y2="80" stroke="#db2777" stroke-width="1.5" stroke-dasharray="3,3"/>
    </svg>`,
    questions: [
      {
        category: "Web of Life Concept",
        q: "What is meant by the 'Web of Life'? How are plants, animals, and non-living elements tied together?",
        ans: "The <strong>Web of Life</strong> describes the intricate, interdependent network of relationships connecting all living creatures (plants, animals, microorganisms, humans) with non-living environmental elements (sunlight, air, water, soil).<br>• The <strong>Sun</strong> powers plant photosynthesis.<br>• <strong>Plants</strong> absorb rainwater and soil minerals to synthesize food and oxygen.<br>• <strong>Herbivores</strong> eat plants, and <strong>carnivores</strong> prey on herbivores.<br>• When organisms die, decomposers return nutrients back to the <strong>soil</strong>, sustaining the eternal cycle.",
        marks: 3,
        rubric: [
          { key: "Definition of the ecological web connecting biotic and abiotic elements", marks: "1.5 Marks" },
          { key: "Cyclical flow: Sun ➔ Plants ➔ Animals ➔ Decomposers ➔ Soil", marks: "1.5 Marks" }
        ]
      },
      {
        category: "Impact of Disruption",
        q: "What would happen to the Web of Life if all green trees on Earth were cut down?",
        ans: "If all green trees were destroyed:<br>1. Atmospheric oxygen would plummet while heat-trapping carbon dioxide would soar, causing runaway global heating.<br>2. Herbivorous animals would starve to death, causing carnivores to die out soon after.<br>3. Soil would wash away without tree roots to bind it, causing desertification and the total collapse of human civilization.",
        marks: 3,
        rubric: [
          { key: "Oxygen/carbon dioxide collapse", marks: "1 Mark" },
          { key: "Food chain starvation", marks: "1 Mark" },
          { key: "Soil erosion and collapse of life", marks: "1 Mark" }
        ]
      },
      {
        category: "Human Role as Stewards",
        q: "Why are humans not 'owners' of the Earth, but rather 'caretakers' or 'trustees'?",
        ans: "Humans are simply one thread woven into the vast web of life, completely dependent on clean air, fresh water, and plants for our very survival. As caretakers (custodians), it is our sacred responsibility to protect all species and pass down a healthy, vibrant planet to future generations.",
        marks: 2,
        rubric: [
          { key: "Humans as dependent threads in the web rather than owners", marks: "1 Mark" },
          { key: "Stewardship and conservation responsibility", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      title: "Synthesizing EVS Wisdom: Becoming Young Environmental Guardians",
      text: "Having completed all 24 chapters of Class 3 EVS (exploring animals, plants, water, food, homes, crafts, and the web of life), students take a green pledge.",
      question: "Synthesize the core message of Class 3 EVS by proposing four daily lifestyle commitments every young student can follow to protect our Earth's Web of Life.",
      answer: "Every student can become a guardian of the Web of Life through four simple, daily commitments: (1) <strong>Water Conservation:</strong> Never let taps run idly; treat every drop as precious nectar. (2) <strong>Green Diet & Anti-Waste:</strong> Finish all food on the plate, enjoy seasonal nutritious fruits, and avoid single-use plastic wrappers. (3) <strong>Plant & Animal Compassion:</strong> Adopt a balcony sapling, feed neighborhood birds fresh water during summers, and treat street animals with gentleness. (4) <strong>Waste Segregation:</strong> Separate wet organic peels for garden composting and recycle scrap paper to save forest trees.",
      rubric: "Synthesis across water, food, animal compassion, and waste reduction; practical student-led eco-habits (4 Marks)."
    }
  }
];

module.exports = { lookingAroundChapters };
