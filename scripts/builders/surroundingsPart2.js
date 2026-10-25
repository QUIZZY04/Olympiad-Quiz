// scripts/builders/surroundingsPart2.js
// Class 2 EVS Track 2 (Classic CBSE / Surrounding Environment): Surroundings & Community
// Chapters 7 to 12: 100% Authentic NCERT EVS Questions with Step-by-Step Marking Rubrics

const surroundingsPart2 = [
  {
    id: "sur7",
    num: 7,
    unit: "Unit 4: Play, Waste & Shelter",
    title: "Cleanliness & Waste Management",
    subtitle: "Green & Blue Dustbins, Swachh Bharat, Segregation",
    concepts: ["Waste Segregation: Wet Waste vs Dry Waste", "Green Dustbin (Biodegradable) vs Blue Dustbin (Non-biodegradable)", "The 3 R's: Reduce, Reuse, Recycle", "Swachh Bharat Abhiyan and Community Cleanliness"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #f0fdf4, #dcfce7);border-radius:12px;width:100%;height:auto;">
      <rect x="70" y="80" width="60" height="85" fill="#16a34a" rx="6"/>
      <rect x="65" y="70" width="70" height="12" fill="#15803d" rx="3"/>
      <text x="100" y="130" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="12" fill="#fff">WET (GREEN)</text>
      <rect x="170" y="80" width="60" height="85" fill="#2563eb" rx="6"/>
      <rect x="165" y="70" width="70" height="12" fill="#1d4ed8" rx="3"/>
      <text x="200" y="130" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="12" fill="#fff">DRY (BLUE)</text>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#14532d">Cleanliness & Waste Management</text>
    </svg>`,
    cbq: {
      context: "At Aarav's school, two colored dustbins are placed in the corridor: a Green dustbin and a Blue dustbin. During lunch, Aarav had a banana peel, an empty plastic juice bottle, some leftover rice, and a crumpled paper sheet.",
      question: "Which items should Aarav throw into the Green dustbin and which into the Blue dustbin? Why is waste segregation important?",
      answer: "Waste segregation by Aarav:\n• Green Dustbin (Wet / Biodegradable Waste): Banana peel and leftover food/rice.\n• Blue Dustbin (Dry / Recyclable Waste): Empty plastic juice bottle and crumpled paper sheet.\nSegregation is important because organic wet waste can be converted into natural compost for plants, while dry plastic and paper can be recycled into new products without ending up in overflowing landfills.",
      rubric: [
        { key: "Correct items in Green dustbin (organic/wet)", marks: 1 },
        { key: "Correct items in Blue dustbin (recyclable/dry)", marks: 1 },
        { key: "Importance of composting and recycling", marks: 1 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is the difference between Biodegradable (Wet) waste and Non-biodegradable (Dry) waste?",
        ans: "• Biodegradable (Wet) Waste: Organic waste that rots and decomposes naturally into soil (e.g., Fruit/vegetable peels, leftover food, tea leaves).\n• Non-biodegradable (Dry) Waste: Waste that does not rot or break down easily in nature (e.g., Plastic bottles, polythene bags, glass, metal cans).",
        marks: 3,
        rubric: [
          { key: "Biodegradable definition and examples", marks: 1.5 },
          { key: "Non-biodegradable definition and examples", marks: 1.5 }
        ]
      },
      {
        category: "Colored Dustbins",
        q: "What goes into the Green dustbin and the Blue dustbin under the Swachh Bharat mission?",
        ans: "• Green Dustbin: Wet kitchen waste, fruit/vegetable peels, eggshells, garden leaves, and leftover food.\n• Blue Dustbin: Dry recyclable waste like plastic containers, paper, cardboard, glass bottles, and metal cans.",
        marks: 2,
        rubric: [
          { key: "Green dustbin - wet organic waste", marks: 1 },
          { key: "Blue dustbin - dry recyclable waste", marks: 1 }
        ]
      },
      {
        category: "The 3 R's Formula",
        q: "What do the three R's of waste management stand for? Explain each briefly.",
        ans: "1. REDUCE: Minimize the amount of trash we generate (e.g., avoid single-use plastics).\n2. REUSE: Use items multiple times instead of throwing them away (e.g., reuse glass jars for spices).\n3. RECYCLE: Process old waste into new useful products (e.g., making fresh paper from old newspapers).",
        marks: 3,
        rubric: [
          { key: "Reduce with explanation", marks: 1 },
          { key: "Reuse with explanation", marks: 1 },
          { key: "Recycle with explanation", marks: 1 }
        ]
      },
      {
        category: "Composting at Home",
        q: "What is 'Compost'? How does it help our garden?",
        ans: "Compost is rich organic natural manure made by decomposing kitchen vegetable peels and dry leaves in a pit. It enriches soil with nutrients and helps flowers and vegetables grow healthy without chemicals.",
        marks: 2,
        rubric: [
          { key: "Organic manure from kitchen peels/leaves", marks: 1 },
          { key: "Enriches soil and helps plants grow", marks: 1 }
        ]
      },
      {
        category: "Dangers of Plastic",
        q: "Why are single-use plastic bags harmful to our environment?",
        ans: "Single-use plastic bags do not decompose for hundreds of years. They choke city drains causing floods, pollute soil and oceans, and can choke cows and stray animals if swallowed.",
        marks: 3,
        rubric: [
          { key: "Does not decompose for centuries", marks: 1 },
          { key: "Chokes drains and pollutes oceans", marks: 1 },
          { key: "Harmful to animals if swallowed", marks: 1 }
        ]
      },
      {
        category: "Swachh Bharat Mission",
        q: "What is the goal of 'Swachh Bharat Abhiyan' launched by the Government of India?",
        ans: "The goal of Swachh Bharat Abhiyan is to achieve a completely clean, open-defecation-free India with clean streets, hygienic public toilets, and scientific waste disposal.",
        marks: 2,
        rubric: [
          { key: "Clean streets and surroundings", marks: 1 },
          { key: "Hygienic sanitation and waste management", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the waste item with its proper disposal category:\n(a) Apple core -> (i) Blue dustbin (Recycle)\n(b) Aluminum foil -> (ii) Compost pit (Wet waste)\n(c) Old newspaper -> (iii) Red/Hazardous bin\n(d) Broken tube-light -> (iv) Blue dustbin (Dry waste)",
        ans: "(a) Apple core -> (ii) Compost pit (Wet waste)\n(b) Aluminum foil -> (iv) Blue dustbin (Dry waste)\n(c) Old newspaper -> (i) Blue dustbin (Recycle)\n(d) Broken tube-light -> (iii) Red/Hazardous bin.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Burning dry leaves and plastic produces poisonous toxic smoke.\n(b) We should throw chocolate wrappers out of moving car windows.\n(c) Using a reusable cloth shopping bag reduces plastic waste.",
        ans: "(a) True\n(b) False (Keep wrappers in pocket/bag until finding a dustbin)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct statement", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) Organic kitchen waste turns into natural ________ (compost / plastic).\n(b) Wet waste is thrown into the ________ (green / yellow) dustbin.\n(c) We celebrate Gandhi Jayanti as a national day of ________ (Swachhata / sports).",
        ans: "(a) compost\n(b) green\n(c) Swachhata.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Upcycling Craft",
        q: "What is 'Upcycling'? Give an example of making something useful from waste.",
        ans: "Upcycling means turning discarded waste items into creative, higher-value products. Example: Painting an empty plastic bottle to make a hanging flower pot or pencil holder.",
        marks: 2,
        rubric: [
          { key: "Upcycling definition", marks: 1 },
          { key: "Pencil holder or flower pot from bottle example", marks: 1 }
        ]
      },
      {
        category: "Stagnant Water Dangers",
        q: "Why should we not allow water to collect in old tyres or flowerpots?",
        ans: "Stagnant water becomes a breeding ground for female Aedes and Anopheles mosquitoes that transmit dangerous diseases like Dengue, Chikungunya, and Malaria.",
        marks: 2,
        rubric: [{ key: "Breeding of dengue/malaria mosquitoes", marks: 2 }]
      },
      {
        category: "School Cleanliness Drive",
        q: "How can students participate in a school cleanliness campaign?",
        ans: "Students can pick up scattered papers from playgrounds, ensure their desks are tidy, wash hands properly, and make colorful awareness posters about saving the environment.",
        marks: 2,
        rubric: [{ key: "Picking litter, keeping desks tidy, awareness posters", marks: 2 }]
      },
      {
        category: "E-Waste Awareness",
        q: "What is 'E-Waste'? Give two examples.",
        ans: "E-waste (electronic waste) consists of discarded electrical or electronic gadgets like old smartphones, dead batteries, broken chargers, and keyboards.",
        marks: 2,
        rubric: [
          { key: "Electronic waste definition", marks: 1 },
          { key: "Batteries/chargers/gadgets examples", marks: 1 }
        ]
      },
      {
        category: "Community Cleanliness Habit",
        q: "What should you do if there is no dustbin nearby when you finish eating a snack?",
        ans: "Keep the clean wrapper in your pocket or school bag until you spot a proper public dustbin; never litter on roads.",
        marks: 1,
        rubric: [{ key: "Keep in pocket/bag until finding a dustbin", marks: 1 }]
      },
      {
        category: "Cleanliness Slogan",
        q: "Write an inspiring slogan on cleanliness.",
        ans: "'Clean City, Green City, My Dream City!' (स्वच्छ भारत, स्वस्थ भारत!)",
        marks: 1,
        rubric: [{ key: "Meaningful slogan", marks: 1 }]
      }
    ]
  },
  {
    id: "sur8",
    num: 8,
    unit: "Unit 4: Play, Waste & Shelter",
    title: "Animals and Their Shelters",
    subtitle: "Kennel, Stable, Coop, Shed, Burrows and Nests",
    concepts: ["Need for Shelter for Animals", "Natural Shelters: Caves, Dens, Burrows, Tree Hollows", "Man-Made Domestic Shelters: Stable, Kennel, Shed, Coop, Aquarium", "Birds and Their Diverse Nesting Styles"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fef3c7, #fed7aa);border-radius:12px;width:100%;height:auto;">
      <polygon points="80,50 30,90 130,90" fill="#dc2626"/>
      <rect x="40" y="90" width="80" height="70" fill="#fef08a"/>
      <path d="M 60 160 A 20 20 0 0 1 100 160 Z" fill="#78350f"/>
      <text x="80" y="125" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="10" fill="#92400e">KENNEL</text>
      <rect x="170" y="70" width="100" height="90" fill="#b45309" rx="4"/>
      <line x1="190" y1="70" x2="190" y2="160" stroke="#fde68a" stroke-width="4"/>
      <line x1="220" y1="70" x2="220" y2="160" stroke="#fde68a" stroke-width="4"/>
      <line x1="250" y1="70" x2="250" y2="160" stroke="#fde68a" stroke-width="4"/>
      <text x="220" y="115" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="10" fill="#fff">STABLE</text>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#9a3412">Animals and Their Shelters</text>
    </svg>`,
    cbq: {
      context: "On a visit to a rural farm, Simran saw cows chewing grass inside a large open roofed shed, a horse being brushed in a wooden stable, hens clucking inside a wire-mesh coop, and a watchdog resting in a wooden kennel.",
      question: "Why do domestic farm animals need human-built shelters, and what shelter was provided for each of the 4 animals Simran saw?",
      answer: "Domestic farm animals need human-built shelters to protect them from extreme heat, cold rains, predators like leopards or wolves, and to keep them safe and comfortable. Shelters observed:\n1. Cow -> Shed\n2. Horse -> Stable\n3. Hen -> Coop\n4. Dog -> Kennel.",
      rubric: [
        { key: "Protection from weather and predators", marks: 1 },
        { key: "Correct shelter for all 4 animals (Shed, Stable, Coop, Kennel)", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "Why do animals need a shelter or home? State two reasons.",
        ans: "Animals need a shelter to:\n1. Protect themselves from bad weather like harsh sunlight, rain, cold winds, and snow.\n2. Keep their eggs and newborn babies safe from predators.",
        marks: 2,
        rubric: [
          { key: "Protection from weather", marks: 1 },
          { key: "Safety of eggs and young ones from enemies", marks: 1 }
        ]
      },
      {
        category: "Natural Shelters",
        q: "Where do the following wild animals live in nature?\n(a) Lion\n(b) Rabbit\n(c) Bear\n(d) Monkey",
        ans: "(a) Lion - Den\n(b) Rabbit - Burrow (underground tunnel)\n(c) Bear - Cave\n(d) Monkey - Branches of trees.",
        marks: 2,
        rubric: [
          { key: "All 4 correct natural shelters", marks: 2 }
        ]
      },
      {
        category: "Man-Made Shelters",
        q: "Name the shelters built by humans for:\n(a) Pet Dog\n(b) Horse\n(c) Cow and Buffalo\n(d) Hen and Rooster",
        ans: "(a) Dog - Kennel\n(b) Horse - Stable\n(c) Cow - Shed\n(d) Hen - Coop.",
        marks: 2,
        rubric: [
          { key: "All 4 correct domestic shelters", marks: 2 }
        ]
      },
      {
        category: "Bird Nests",
        q: "Why do birds build nests? What natural materials do they use to weave nests?",
        ans: "Birds build nests to lay eggs, hatch them, and protect their baby chicks until they learn to fly. They weave nests using twigs, dry grass, straw, feathers, leaves, and cotton.",
        marks: 3,
        rubric: [
          { key: "Laying eggs and rearing chicks", marks: 1.5 },
          { key: "Materials: twigs, grass, cotton, feathers", marks: 1.5 }
        ]
      },
      {
        category: "Special Bird Builders",
        q: "Name two master builder birds known for their unique nests.",
        ans: "1. Weaver Bird (Baya): Weaves an intricate hanging bottle-shaped nest from grass strips.\n2. Tailorbird: Stitches two large green leaves together with plant fiber like a needle.",
        marks: 2,
        rubric: [
          { key: "Weaver bird with description", marks: 1 },
          { key: "Tailorbird with description", marks: 1 }
        ]
      },
      {
        category: "Underground Shelters",
        q: "Which animals live in underground holes or anthills?",
        ans: "1. Ants build large underground colonies called 'Anthills'.\n2. Snakes live in holes in the ground or abandoned rat burrows.",
        marks: 2,
        rubric: [
          { key: "Ants - Anthill", marks: 1 },
          { key: "Snakes/Rats - Holes/burrows", marks: 1 }
        ]
      },
      {
        category: "Water Animal Shelters",
        q: "Where do pet fish live at home? What natural shelter does a snail have?",
        ans: "Pet fish live in a glass 'Aquarium' filled with water. A snail carries its own hard protective spiral 'Shell' on its back.",
        marks: 2,
        rubric: [
          { key: "Fish in aquarium", marks: 1 },
          { key: "Snail carries shell on back", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the animal with its shelter:\n(a) Honeybee -> (i) Stable\n(b) Spider -> (ii) Beehive\n(c) Horse -> (iii) Pigsty\n(d) Pig -> (iv) Web",
        ans: "(a) Honeybee -> (ii) Beehive\n(b) Spider -> (iv) Web\n(c) Horse -> (i) Stable\n(d) Pig -> (iii) Pigsty.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Birds live in their nests all year round even after their babies fly away.\n(b) Spiders spin silky webs to trap flying insects for food.\n(c) Sheep are kept inside an enclosed shelter called a pen.",
        ans: "(a) False (Birds use nests mainly during breeding season to lay eggs)\n(b) True\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) Honeybees store sweet honey inside a ________ (beehive / kennel).\n(b) A cuckoo (koel) does not build its own nest; it lays eggs in a ________ (crow's / pigeon's) nest.\n(c) A dog's shelter is called a ________ (kennel / den).",
        ans: "(a) beehive\n(b) crow's\n(c) kennel.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Woodpecker's Home",
        q: "How does a woodpecker make its nest?",
        ans: "A woodpecker uses its sharp, chisel-like beak to drill a deep hole into the trunk of a tree to make its nest.",
        marks: 2,
        rubric: [{ key: "Drills hole into tree trunk using sharp beak", marks: 2 }]
      },
      {
        category: "Animal Adaptations",
        q: "Why do polar bears have thick white fur and fat under their skin in their ice shelters?",
        ans: "The thick fur and heavy fat layer (blubber) keep the polar bear warm in sub-zero Arctic temperatures and camouflage it in white snow.",
        marks: 2,
        rubric: [
          { key: "Keeps warm against sub-zero cold", marks: 1 },
          { key: "Camouflage in snow", marks: 1 }
        ]
      },
      {
        category: "Caring for Farm Shelters",
        q: "Why must cow sheds and stables be cleaned and washed every day?",
        ans: "Regular washing removes animal dung and urine, prevents flies and ticks from biting livestock, and keeps animals healthy and disease-free.",
        marks: 2,
        rubric: [{ key: "Prevents flies, ticks, and diseases; keeps animals healthy", marks: 2 }]
      },
      {
        category: "Penguin Nesting",
        q: "How do penguins make nests in freezing Antarctica where there are no twigs or leaves?",
        ans: "Penguins collect small rounded pebbles and stones from the frozen ground to build a raised nest to keep eggs off the ice.",
        marks: 1,
        rubric: [{ key: "Collects stones/pebbles on ice", marks: 1 }]
      },
      {
        category: "Shelter Riddle",
        q: "Guess who I am:\n'I carry my own house on my back wherever I crawl. When danger comes, I pull my head and legs inside my rock-hard shell. Who am I?'",
        ans: "I am a 'Tortoise' (or Turtle / Snail).",
        marks: 1,
        rubric: [{ key: "Tortoise / Turtle", marks: 1 }]
      }
    ]
  },
  {
    id: "sur9",
    num: 9,
    unit: "Unit 5: Sky, Weather & Planet Care",
    title: "Weather & The Changing Skies",
    subtitle: "Sunny, Windy, Rainy, Cloudy, Cold Days and Thermometer",
    concepts: ["Weather vs Season (Short-term condition vs Long cycle)", "Types of Days: Sunny, Rainy, Windy, Cloudy, Cold", "Weather Instrument: Thermometer, Rain Gauge, Wind Vane", "How Weather Affects Food, Clothes, and Daily Activities"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #e0f2fe, #bae6fd);border-radius:12px;width:100%;height:auto;">
      <circle cx="70" cy="65" r="28" fill="#f59e0b"/>
      <path d="M 170 85 Q 185 55 215 65 Q 235 45 260 60 Q 285 55 290 85 Q 300 115 270 120 L 180 120 Q 155 115 170 85 Z" fill="#64748b"/>
      <line x1="190" y1="135" x2="180" y2="165" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <line x1="220" y1="135" x2="210" y2="165" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <line x1="250" y1="135" x2="240" y2="165" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#0369a1">Weather & The Changing Skies</text>
    </svg>`,
    cbq: {
      context: "In the morning, the sky was bright and sunny. By 2 PM, dark grey clouds gathered, strong winds started blowing, and within 15 minutes, torrential rain poured down accompanied by thunder and lightning. By 5 PM, the rain stopped and a seven-colored rainbow appeared.",
      question: "What is 'Weather'? Name the three different weather conditions experienced on that single day.",
      answer: "Weather is the day-to-day condition of the atmosphere at a particular place and time regarding temperature, wind, sunshine, and rain.\nThree weather conditions on that day:\n1. Bright, hot, and sunny morning\n2. Windy, cloudy, and rainy afternoon with thunderstorms\n3. Clear, calm, and colorful rainbow evening.",
      rubric: [
        { key: "Definition of weather", marks: 1.5 },
        { key: "Three weather transitions (sunny, rainy/windy, rainbow evening)", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is the difference between Weather and Season?",
        ans: "• Weather: Changes from day to day or even hour to hour (e.g., today is rainy, yesterday was sunny).\n• Season: When the same type of weather continues over several months (e.g., Summer, Winter, Monsoon).",
        marks: 3,
        rubric: [
          { key: "Weather definition and day-to-day changes", marks: 1.5 },
          { key: "Season definition and months duration", marks: 1.5 }
        ]
      },
      {
        category: "Sunny Day",
        q: "What is a 'Sunny Day'? What clothes do we wear and what foods do we enjoy on a sunny day?",
        ans: "A sunny day is bright, clear, and hot with the sun shining brightly. We wear light cotton clothes, wear sunglasses or caps, and enjoy cool drinks like lemonade, coconut water, and ice cream.",
        marks: 3,
        rubric: [
          { key: "Description of sunny day", marks: 1 },
          { key: "Cotton clothes and cap", marks: 1 },
          { key: "Cool drinks / ice cream", marks: 1 }
        ]
      },
      {
        category: "Rainy Day and Rainbow",
        q: "What is a 'Rainbow'? When does it appear in the sky, and how many colors does it have?",
        ans: "A rainbow is a magnificent colored arc that appears in the sky opposite the sun after rain when sunlight passes through tiny raindrops. It has seven colors: Violet, Indigo, Blue, Green, Yellow, Orange, Red (VIBGYOR).",
        marks: 3,
        rubric: [
          { key: "Appearance after rain opposite the sun", marks: 1 },
          { key: "Seven colors (VIBGYOR)", marks: 2 }
        ]
      },
      {
        category: "Windy Day",
        q: "What is a 'Windy Day'? Mention one fun activity and one precaution for a windy day.",
        ans: "A windy day is when air blows fast and strongly.\n• Fun activity: Flying kites high in the sky.\n• Precaution: Stay away from loose roof tiles and old branches that might break and fall.",
        marks: 2,
        rubric: [
          { key: "Flying kites", marks: 1 },
          { key: "Caution against falling branches/tiles", marks: 1 }
        ]
      },
      {
        category: "Weather Instruments",
        q: "Name the instruments used to measure:\n(a) Air Temperature\n(b) Amount of Rainfall\n(c) Direction of the Wind",
        ans: "(a) Temperature - Thermometer\n(b) Rainfall - Rain Gauge\n(c) Wind direction - Wind Vane (Weathercock).",
        marks: 3,
        rubric: [
          { key: "1 mark per correct weather instrument", marks: 3 }
        ]
      },
      {
        category: "Cloudy Day",
        q: "What causes a cloudy day? Why does it feel pleasant or humid?",
        ans: "Dark clouds cover the sun and block direct sunlight. It feels cooler, but if humidity is high, it can feel sticky and warm before rain falls.",
        marks: 2,
        rubric: [
          { key: "Clouds block direct sunlight", marks: 1 },
          { key: "Pleasant coolness or humidity before rain", marks: 1 }
        ]
      },
      {
        category: "Cold Day",
        q: "What happens on a cold winter day? How do people keep themselves warm?",
        ans: "On a cold day, the temperature drops very low. People keep warm by wearing woolen sweaters and caps, sitting near room heaters or bonfires, and sipping hot soup or milk.",
        marks: 2,
        rubric: [
          { key: "Low temperature description", marks: 1 },
          { key: "Woolens, heaters, and hot drinks", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the weather condition with its activity/item:\n(a) Rainy day -> (i) Warm hot soup and woolen blanket\n(b) Windy day -> (ii) Flying a paper kite\n(c) Cold day -> (iii) Chilled watermelon and lemonade\n(d) Hot sunny day -> (iv) Floating paper boats in puddles",
        ans: "(a) Rainy day -> (iv) Floating paper boats in puddles\n(b) Windy day -> (ii) Flying a paper kite\n(c) Cold day -> (i) Warm hot soup and woolen blanket\n(d) Hot sunny day -> (iii) Chilled watermelon and lemonade.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Weather remains identical in every city across India on the same day.\n(b) Fast, howling winds accompanied by heavy thunder and rain is called a storm.\n(c) Lightning is seen before thunder is heard because light travels faster than sound.",
        ans: "(a) False (Different cities experience different weather)\n(b) True\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct statement", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) The seven colors of the rainbow are remembered by the acronym ________ (VIBGYOR / ROYGBIV).\n(b) Very thick low cloud that makes it hard to see ahead is called ________ (fog or mist / steam).\n(c) A thermometer measures ________ (temperature / rainfall).",
        ans: "(a) VIBGYOR\n(b) fog (or mist)\n(c) temperature.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Weather Forecast",
        q: "What is a 'Weather Forecast', and why is it useful for farmers and fishermen?",
        ans: "A weather forecast predicts upcoming weather using satellites. It alerts farmers when to sow or harvest crops, and warns fishermen not to venture into deep sea during impending ocean storms.",
        marks: 2,
        rubric: [
          { key: "Prediction of future weather", marks: 1 },
          { key: "Alerts farmers for crops and fishermen against storms", marks: 1 }
        ]
      },
      {
        category: "Fog and Smog",
        q: "What is the difference between natural fog and toxic smog?",
        ans: "• Fog: Natural condensed water droplets in cold air.\n• Smog: A hazardous mixture of smoke, vehicle exhaust, and fog that harms our eyes and lungs.",
        marks: 2,
        rubric: [
          { key: "Fog definition", marks: 1 },
          { key: "Smog (Smoke + Fog) definition", marks: 1 }
        ]
      },
      {
        category: "Hailstones",
        q: "What are hailstones?",
        ans: "Hailstones are hard, frozen balls or pellets of ice that sometimes fall from storm clouds along with rain.",
        marks: 1,
        rubric: [{ key: "Hard balls of ice falling with storm rain", marks: 1 }]
      },
      {
        category: "Thunder Safety",
        q: "What safety rule should you follow when caught outdoors during a thunderstorm with lightning?",
        ans: "Never stand under a tall isolated tree or touch metal poles; take shelter inside a concrete building or a closed car.",
        marks: 2,
        rubric: [{ key: "No standing under tall trees; shelter in concrete building", marks: 2 }]
      },
      {
        category: "Weather Rhyme",
        q: "Complete the classic childhood weather rhyme:\n'Rain, rain, go away,\nCome again another ________;\nLittle Johnny wants to ________,\nRain, rain, go away!'",
        ans: "'Come again another DAY;\nLittle Johnny wants to PLAY,'",
        marks: 2,
        rubric: [
          { key: "DAY", marks: 1 },
          { key: "PLAY", marks: 1 }
        ]
      }
    ]
  },
  {
    id: "sur10",
    num: 10,
    unit: "Unit 5: Sky, Weather & Planet Care",
    title: "Day and Night Wonders",
    subtitle: "Sunrise in the East, Shadows, Moon Phases, Twinkling Stars",
    concepts: ["Rotation of Earth Causing Day and Night", "Cardinal Directions: East, West, North, South", "Shadow Formation and Length Changes throughout the Day", "The Night Sky: Moon Phases, Stars, and Constellations"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #1e1b4b, #312e81);border-radius:12px;width:100%;height:auto;">
      <path d="M 0 0 L 150 0 L 150 200 L 0 200 Z" fill="#fef08a" opacity="0.15"/>
      <circle cx="80" cy="80" r="30" fill="#f59e0b"/>
      <path d="M 220 50 A 30 30 0 1 1 200 90 A 25 25 0 1 0 220 50 Z" fill="#f8fafc"/>
      <circle cx="180" cy="40" r="2" fill="#fff"/>
      <circle cx="260" cy="60" r="2" fill="#fff"/>
      <circle cx="210" cy="120" r="1.5" fill="#fff"/>
      <circle cx="250" cy="140" r="2" fill="#fff"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#cbd5e1">Day and Night Wonders</text>
    </svg>`,
    cbq: {
      context: "Rohan stood in his school ground at three different times on a sunny day: at 8 AM morning, at 12 Noon, and at 5 PM evening. He noticed that his shadow was long in the morning, very short right under his feet at noon, and long again pointing eastward in the evening.",
      question: "Why did the length and direction of Rohan's shadow change throughout the day?",
      answer: "A shadow changes in length and direction because the position of the Sun changes in the sky as Earth rotates:\n1. Morning: Sun is low in the East, creating long shadows pointing West.\n2. Noon: Sun is directly overhead, creating the shortest shadow under the feet.\n3. Evening: Sun is low in the West, casting long shadows pointing East.",
      rubric: [
        { key: "Explanation of changing Sun angles due to Earth rotation", marks: 1.5 },
        { key: "Specific shadow lengths (long at morning/evening, shortest at noon)", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "How are day and night formed on Earth?",
        ans: "Day and night are caused by the spinning rotation of the Earth on its axis once every 24 hours. The half of the Earth facing the Sun has daylight (Day), while the other half turned away in darkness experiences Night.",
        marks: 3,
        rubric: [
          { key: "Earth's rotation on its axis in 24 hours", marks: 1.5 },
          { key: "Half facing Sun = Day, half in darkness = Night", marks: 1.5 }
        ]
      },
      {
        category: "Four Directions",
        q: "Name the four main cardinal directions. In which direction does the Sun rise and set?",
        ans: "The four main directions are East, West, North, and South.\n• The Sun rises in the EAST.\n• The Sun sets in the WEST.",
        marks: 3,
        rubric: [
          { key: "Listing East, West, North, South", marks: 1 },
          { key: "Rises in East", marks: 1 },
          { key: "Sets in West", marks: 1 }
        ]
      },
      {
        category: "Finding Directions",
        q: "How can you find directions standing outdoors facing the rising Sun in the morning?",
        ans: "Stand facing the rising Sun:\n• In front of you is EAST.\n• Behind your back is WEST.\n• To your left hand is NORTH.\n• To your right hand is SOUTH.",
        marks: 2,
        rubric: [
          { key: "Front = East, Back = West", marks: 1 },
          { key: "Left = North, Right = South", marks: 1 }
        ]
      },
      {
        category: "Shadow Formation",
        q: "What is a 'Shadow'? What three things are required to form a shadow?",
        ans: "A shadow is a dark shape formed on a surface when an opaque object blocks the path of light.\nThree things required:\n1. A source of light (Sun, torch, bulb)\n2. An opaque object to block the light\n3. A screen or surface (ground, wall) on which the shadow falls.",
        marks: 3,
        rubric: [
          { key: "Definition of shadow", marks: 1.5 },
          { key: "Source of light, opaque object, and screen", marks: 1.5 }
        ]
      },
      {
        category: "Shadow Lengths",
        q: "At what time of day is our shadow the shortest, and why?",
        ans: "Our shadow is shortest at 12 Noon because the Sun is positioned directly overhead above us, casting light straight downward.",
        marks: 2,
        rubric: [
          { key: "At 12 Noon", marks: 1 },
          { key: "Sun directly overhead", marks: 1 }
        ]
      },
      {
        category: "Phases of the Moon",
        q: "What are the 'Phases of the Moon'? Name the Full Moon and New Moon in Hindi.",
        ans: "The changing visible shapes of the Moon seen from Earth are called Phases of the Moon.\n• Full Moon: Purnima (Moon appears as a full bright circle).\n• New Moon: Amavasya (Moon is not visible at all in the sky).",
        marks: 3,
        rubric: [
          { key: "Phases of the Moon definition", marks: 1 },
          { key: "Full Moon - Purnima", marks: 1 },
          { key: "New Moon - Amavasya", marks: 1 }
        ]
      },
      {
        category: "Nocturnal Animals",
        q: "What are 'Nocturnal Animals'? Give two examples of animals active at night.",
        ans: "Animals that sleep during the daytime and remain active, hunt, and forage at night are called nocturnal animals. Examples: Owl and Bat.",
        marks: 2,
        rubric: [
          { key: "Nocturnal definition", marks: 1 },
          { key: "Owl and Bat examples", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the celestial object with its fact:\n(a) Sun -> (i) Crescent and full shapes\n(b) Moon -> (ii) Saptarishi / Great Bear\n(c) Constellation -> (iii) Closest star providing light and life\n(d) Earth -> (iv) Blue planet rotating in 24 hours",
        ans: "(a) Sun -> (iii) Closest star providing light and life\n(b) Moon -> (i) Crescent and full shapes\n(c) Constellation -> (ii) Saptarishi / Great Bear\n(d) Earth -> (iv) Blue planet rotating in 24 hours.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) A shadow is always formed on the same side as the light source.\n(b) The Earth takes 24 hours to complete one full rotation on its axis.\n(c) Stars are present in the sky during daytime but invisible due to bright sunlight.",
        ans: "(a) False (Shadow is always formed on the opposite side of the light source)\n(b) True\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct statement", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) The Sun rises in the ________ (East / West).\n(b) A night when the Moon looks like a thin curved sickle is called a ________ (crescent / gibbous) moon.\n(c) Shadows are ________ (longest / shortest) during early morning and late evening.",
        ans: "(a) East\n(b) crescent\n(c) longest.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Transparent vs Opaque",
        q: "Can a clear clean glass window make a dark shadow? Why or why not?",
        ans: "No, clear glass is transparent and allows light to pass completely through it without blocking it, so it cannot cast a dark shadow.",
        marks: 2,
        rubric: [
          { key: "No, cannot make a dark shadow", marks: 1 },
          { key: "Clear glass is transparent and lets light pass through", marks: 1 }
        ]
      },
      {
        category: "Compass",
        q: "What instrument is used by sailors and trekkers to find directions?",
        ans: "A magnetic 'Compass' is used to find directions; its needle always points towards the North-South direction.",
        marks: 2,
        rubric: [
          { key: "Magnetic Compass", marks: 1 },
          { key: "Needle points North-South", marks: 1 }
        ]
      },
      {
        category: "Night Routine",
        q: "Why is sleeping at night important for our body and brain?",
        ans: "Sound sleep at night allows our body to repair tissues, strengthens our immune system, rests our eyes, and recharges our brain for next day's learning.",
        marks: 2,
        rubric: [{ key: "Tissue repair, resting eyes, and recharging brain", marks: 2 }]
      },
      {
        category: "Pole Star (Dhruva Tara)",
        q: "What is the special star that always stays fixed in the northern sky?",
        ans: "The 'Pole Star' (North Star or Dhruva Tara) stays fixed in the northern sky and helps travelers find the North direction at night.",
        marks: 1,
        rubric: [{ key: "Pole Star / Dhruva Tara", marks: 1 }]
      },
      {
        category: "Riddle on Shadows",
        q: "Guess who I am:\n'I follow you wherever you walk in the sun, I run when you run, yet when you step into darkness, I completely disappear. Who am I?'",
        ans: "I am your 'Shadow'.",
        marks: 1,
        rubric: [{ key: "Shadow", marks: 1 }]
      }
    ]
  },
  {
    id: "sur11",
    num: 11,
    unit: "Unit 6: Animals, Plants & Mother Earth",
    title: "Caring for Plants and Pets",
    subtitle: "Watering Saplings, Feeding Pets, Preventing Animal Cruelty",
    concepts: ["Plants and Pets as Living Beings with Feelings", "Daily Plant Care: Watering, Sun, Soil, Weeding", "Responsible Pet Care: Food, Shelter, Cleanliness, Vet Visits", "Preventing Cruelty to Stray Animals and Birds"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #f0fdf4, #bbf7d0);border-radius:12px;width:100%;height:auto;">
      <path d="M 80 160 L 95 100 L 135 100 L 150 160 Z" fill="#92400e"/>
      <ellipse cx="115" cy="100" rx="20" ry="8" fill="#78350f"/>
      <path d="M 115 100 Q 115 65 115 45" stroke="#16a34a" stroke-width="4" fill="none"/>
      <ellipse cx="105" cy="55" rx="14" ry="7" fill="#22c55e" transform="rotate(-30 105 55)"/>
      <ellipse cx="125" cy="50" rx="14" ry="7" fill="#22c55e" transform="rotate(30 125 50)"/>
      <ellipse cx="210" cy="130" rx="30" ry="20" fill="#f59e0b"/>
      <circle cx="235" cy="110" r="14" fill="#f59e0b"/>
      <ellipse cx="230" cy="100" rx="5" ry="10" fill="#d97706"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#14532d">Caring for Plants and Pets</text>
    </svg>`,
    cbq: {
      context: "Kunal got a pet golden retriever puppy for his birthday. Initially he played with it, but after two weeks, he forgot to give it food on time, left its water bowl dry under the hot sun, and never brushed its fur. The puppy became sad and fell sick.",
      question: "What responsibilities does keeping a pet involve? Mention three daily duties Kunal must fulfill to keep his puppy healthy and happy.",
      answer: "Keeping a pet is a serious responsibility because pets are living beings that depend on us for their food, health, and happiness. Three daily duties Kunal must fulfill:\n1. Provide nutritious dog food at fixed meal times and keep fresh drinking water available at all times.\n2. Take the puppy for daily morning and evening walks and maintain clean bedding in its shelter.\n3. Take the puppy to a veterinary doctor (vet) for vaccinations, health check-ups, and grooming.",
      rubric: [
        { key: "Pets are living beings needing care and commitment", marks: 1 },
        { key: "Three duties (fresh food/water, daily walks, veterinary care)", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "Why are plants called living beings even though they cannot walk from place to place?",
        ans: "Plants are living beings because they breathe air, absorb water and nutrients, make their own food, grow taller, produce seeds, and react to sunlight.",
        marks: 2,
        rubric: [
          { key: "Breathe, absorb water, make food", marks: 1 },
          { key: "Grow taller and reproduce seeds", marks: 1 }
        ]
      },
      {
        category: "Daily Plant Care",
        q: "What four essential things must we provide to keep a potted plant healthy and green?",
        ans: "Four essentials for plant care:\n1. Regular watering (not too little, not too much)\n2. Adequate natural sunlight\n3. Nutrient-rich soil with organic compost\n4. Fresh moving air and gentle weeding.",
        marks: 4,
        rubric: [
          { key: "1 mark per correct plant care essential", marks: 4 }
        ]
      },
      {
        category: "Over-Watering Danger",
        q: "What happens if we give too much water to a potted plant every day?",
        ans: "Over-watering blocks air spaces in the soil, causing the plant roots to rot from lack of oxygen, turning leaves yellow and killing the plant.",
        marks: 2,
        rubric: [
          { key: "Blocks air/oxygen in soil", marks: 1 },
          { key: "Causes root rot and kills plant", marks: 1 }
        ]
      },
      {
        category: "Veterinary Doctor",
        q: "Who is a 'Veterinary Doctor' (Vet)?",
        ans: "A veterinary doctor is a doctor who specializes in treating sick, injured, and diseased animals and giving them preventive vaccinations.",
        marks: 2,
        rubric: [
          { key: "Doctor for animals", marks: 1 },
          { key: "Treats diseases and gives vaccinations", marks: 1 }
        ]
      },
      {
        category: "Caring for Stray Animals",
        q: "How can we care for stray dogs and birds in our neighborhood during hot summer months?",
        ans: "1. Place shallow clay bowls filled with clean drinking water outside our gate and on balconies for birds and animals.\n2. Keep leftover rotis or pet food in clean plates and provide shade from the hot sun.",
        marks: 2,
        rubric: [
          { key: "Clay bowls of clean drinking water", marks: 1 },
          { key: "Food and shade from summer heat", marks: 1 }
        ]
      },
      {
        category: "Stopping Animal Cruelty",
        q: "Why should children never throw stones or tie firecrackers to dogs' tails?",
        ans: "Animals feel severe pain, terror, and suffering just like humans. Hurting them is cruel, punishable by law, and may cause the frightened animal to bite in self-defense.",
        marks: 2,
        rubric: [
          { key: "Animals feel pain and terror / cruelty is illegal", marks: 1 },
          { key: "May cause animal to bite in defense", marks: 1 }
        ]
      },
      {
        category: "Van Mahotsav",
        q: "What is 'Van Mahotsav', and when is it celebrated in India?",
        ans: "Van Mahotsav is the annual forest festival celebrated in the first week of July across India, where millions of tree saplings are planted in schools and communities.",
        marks: 2,
        rubric: [
          { key: "Annual tree-planting festival", marks: 1 },
          { key: "First week of July", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the living being with its care requirement:\n(a) Potted Rose -> (i) Clean litter box and milk/cat food\n(b) Pet Dog -> (ii) Daily watering and sunlight\n(c) Stray Bird -> (iii) Daily walk, rabies vaccine, and love\n(d) Pet Cat -> (iv) Water pot and grain seeds on balcony",
        ans: "(a) Potted Rose -> (ii) Daily watering and sunlight\n(b) Pet Dog -> (iii) Daily walk, rabies vaccine, and love\n(c) Stray Bird -> (iv) Water pot and grain seeds on balcony\n(d) Pet Cat -> (i) Clean litter box and milk/cat food.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Talking gently to pets and petting them makes them feel loved and calm.\n(b) Keeping a bird locked inside a tiny iron cage all its life is a kind act.\n(c) Loosening the soil around plant roots helps them breathe better.",
        ans: "(a) True\n(b) False (Birds belong in the open sky; caging is cruel)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) A doctor who treats animals is called a ________ (veterinarian or vet / dentist).\n(b) Plant leaves prepare food with the help of green ________ (chlorophyll / water).\n(c) Dogs should be given ________ (rabies / polio) vaccine to prevent dangerous infections.",
        ans: "(a) veterinarian (or vet)\n(b) chlorophyll\n(c) rabies.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Indoor Plants",
        q: "Name two indoor plants that can grow inside a room in small pots with minimal sunlight.",
        ans: "Two indoor plants: Money plant and Snake plant (or Spider plant, Aloe vera).",
        marks: 2,
        rubric: [{ key: "Two valid indoor plants", marks: 2 }]
      },
      {
        category: "Bird Bath",
        q: "What is a 'Bird Bath'? How does it help garden birds?",
        ans: "A bird bath is a shallow basin filled with clean water placed in a garden. Birds use it to drink water and splash their feathers to keep cool and clean.",
        marks: 2,
        rubric: [{ key: "Shallow water basin for drinking and cleaning feathers", marks: 2 }]
      },
      {
        category: "Plant Sensitivity",
        q: "What is the 'Touch-Me-Not' (Mimosa / Chhui-Mui) plant known for?",
        ans: "The Touch-Me-Not plant is sensitive to touch; its leaves fold together and droop immediately when touched with a finger.",
        marks: 1,
        rubric: [{ key: "Leaves fold and droop when touched", marks: 1 }]
      },
      {
        category: "Responsible Pet Ownership",
        q: "State one responsibility of a pet owner when walking their dog on public roads.",
        ans: "Keep the dog on a secure leash to protect pedestrians and always clean up pet waste from the pavement using a scoop and bag.",
        marks: 2,
        rubric: [{ key: "Leash control and scooping up pet waste", marks: 2 }]
      },
      {
        category: "Eco-Friendly Pledge",
        q: "Write a two-line pledge to care for nature.",
        ans: "'I pledge to plant a tree, water it with care, and treat every creature with kindness and love!'",
        marks: 1,
        rubric: [{ key: "Kindness and environmental pledge", marks: 1 }]
      }
    ]
  },
  {
    id: "sur12",
    num: 12,
    unit: "Unit 6: Animals, Plants & Mother Earth",
    title: "Protecting Our Mother Earth",
    subtitle: "Saying No to Single-Use Plastic, Planting Trees, Clean Earth",
    concepts: ["Mother Earth as Our Sole Home in the Universe", "Environmental Threats: Deforestation, Plastic Waste, Pollution", "Practical Green Steps: Cloth Bags, Tree Plantation, Saving Power", "Earth Day (22 April) and World Environment Day (5 June)"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #ecfdf5, #a7f3d0);border-radius:12px;width:100%;height:auto;">
      <circle cx="150" cy="115" r="55" fill="#0284c7"/>
      <path d="M 120 85 Q 140 75 160 90 Q 180 110 190 90 Q 200 120 180 145 Q 150 160 130 140 Z" fill="#16a34a"/>
      <circle cx="150" cy="115" r="55" fill="none" stroke="#22c55e" stroke-width="4"/>
      <path d="M 150 30 L 155 45 L 170 45 L 158 55 L 162 70 L 150 60 L 138 70 L 142 55 L 130 45 L 145 45 Z" fill="#facc15"/>
      <text x="150" y="22" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#065f46">Protecting Our Mother Earth</text>
    </svg>`,
    cbq: {
      context: "During a weekend beach visit, Meera saw discarded plastic water bottles, disposable spoons, and polythene chips bags littering the golden sand. In the water, a small sea turtle was entangled in a discarded plastic net.",
      question: "Why is plastic litter deadly for marine animals, and what three eco-friendly habits can your family adopt on picnics to protect nature?",
      answer: "Plastic litter is deadly because marine animals mistake plastic pieces for jellyfish, eat them, and choke or starve to death, or get tangled in plastic nets and drown. Three eco-friendly picnic habits:\n1. Carry stainless steel reusable water bottles and steel tiffin boxes instead of single-use plastic bottles.\n2. Carry a jute or cloth trash bag to bring all garbage back home for proper segregation.\n3. Never throw any plastic wrappers or bottles into rivers, lakes, beaches, or open grounds.",
      rubric: [
        { key: "Deadly impact of plastic ingestion and entanglement on marine life", marks: 1.5 },
        { key: "Three practical picnic habits (reusable bottles, trash bag, zero littering)", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "Why do we lovingly call our planet 'Mother Earth'?",
        ans: "We call our planet Mother Earth because like a loving mother, she provides us with everything we need to live—air to breathe, freshwater to drink, soil to grow food, and shelter for all living beings.",
        marks: 2,
        rubric: [
          { key: "Provides air, water, and food like a mother", marks: 1 },
          { key: "Sustains all living beings", marks: 1 }
        ]
      },
      {
        category: "Major Environmental Threats",
        q: "Name three major human activities that harm planet Earth.",
        ans: "1. Indiscriminate cutting down of forests and trees (Deforestation).\n2. Excessive use of single-use plastic items that choke soil and oceans.\n3. Smoke and toxic gases emitted by factories and vehicles causing global warming and air pollution.",
        marks: 3,
        rubric: [
          { key: "Deforestation / cutting trees", marks: 1 },
          { key: "Plastic pollution", marks: 1 },
          { key: "Smoke and emissions causing pollution", marks: 1 }
        ]
      },
      {
        category: "Saying No to Plastic",
        q: "What eco-friendly alternatives can we use in place of plastic items?\n(a) In place of plastic shopping bags\n(b) In place of plastic water bottles\n(c) In place of disposable plastic spoons and plates",
        ans: "(a) Cloth, jute, or cotton shopping bags\n(b) Stainless steel or copper reusable water bottles\n(c) Biodegradable leaf plates (pattals), bamboo spoons, or steel cutlery.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct eco-friendly alternative", marks: 3 }
        ]
      },
      {
        category: "Tree Plantation Benefits",
        q: "List three benefits of planting more trees around our neighborhood.",
        ans: "1. Trees produce fresh, life-giving oxygen and absorb carbon dioxide.\n2. Their roots hold the soil tightly, preventing soil erosion during heavy rains.\n3. They provide shade, bring rainfall, and serve as homes for birds and squirrels.",
        marks: 3,
        rubric: [
          { key: "Oxygen and air purification", marks: 1 },
          { key: "Soil conservation", marks: 1 },
          { key: "Shade, rain, and animal shelter", marks: 1 }
        ]
      },
      {
        category: "Energy Conservation",
        q: "How does turning off unnecessary lights and fans at home help protect the Earth?",
        ans: "Most electricity is generated by burning coal in power plants, which produces enormous smoke and carbon emissions. Saving electricity saves coal and keeps Earth's air cleaner.",
        marks: 2,
        rubric: [
          { key: "Electricity produced from burning coal", marks: 1 },
          { key: "Saving electricity reduces smoke and global warming", marks: 1 }
        ]
      },
      {
        category: "Important Environmental Days",
        q: "When do we celebrate:\n(a) World Earth Day\n(b) World Environment Day?",
        ans: "(a) World Earth Day - 22nd April\n(b) World Environment Day - 5th June.",
        marks: 2,
        rubric: [
          { key: "22nd April for Earth Day", marks: 1 },
          { key: "5th June for World Environment Day", marks: 1 }
        ]
      },
      {
        category: "Noise Pollution",
        q: "What causes noise pollution, and how does it harm human health?",
        ans: "Noise pollution is caused by unnecessary vehicle honking, loud loudspeakers, and bursting firecrackers. It harms health by causing hearing damage, headaches, stress, and disturbing sleeping babies and elderly people.",
        marks: 2,
        rubric: [
          { key: "Vehicle horns, loudspeakers, crackers", marks: 1 },
          { key: "Hearing loss, headaches, stress", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the action with its environmental effect:\n(a) Planting saplings -> (i) Saves coal and reduces greenhouse smoke\n(b) Using cloth bags -> (ii) Purifies air and gives oxygen\n(c) Turning off lights -> (iii) Conserves scarce drinking water\n(d) Fixing leaking taps -> (iv) Eliminates harmful plastic waste",
        ans: "(a) Planting saplings -> (ii) Purifies air and gives oxygen\n(b) Using cloth bags -> (iv) Eliminates harmful plastic waste\n(c) Turning off lights -> (i) Saves coal and reduces greenhouse smoke\n(d) Fixing leaking taps -> (iii) Conserves scarce drinking water.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Leaving the tap open while washing bicycles is a good conservation habit.\n(b) Paper is made from wood pulp obtained from trees; hence we must not waste paper.\n(c) If each child plants one tree, our Earth will become greener and cooler.",
        ans: "(a) False (Wastes gallons of clean water)\n(b) True (Saving paper saves trees)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) World Environment Day is celebrated on ________ (5th June / 1st January).\n(b) We should use ________ (cloth / polythene) bags for grocery shopping.\n(c) Trees absorb harmful ________ (carbon dioxide / oxygen) gas during the day.",
        ans: "(a) 5th June\n(b) cloth\n(c) carbon dioxide.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Clean Transport Choice",
        q: "Why is walking or riding a bicycle for short distances an eco-friendly habit?",
        ans: "Bicycles and walking consume zero fossil fuel, emit zero exhaust smoke or greenhouse gases, keep our heart and legs healthy, and reduce traffic jams.",
        marks: 2,
        rubric: [{ key: "Zero fuel/emissions, fitness, and traffic reduction", marks: 2 }]
      },
      {
        category: "Saving Paper Saves Trees",
        q: "How can school students save paper in their daily study?",
        ans: "Students can write on both sides of every notebook page, use old one-sided printed paper for rough calculations, and donate old textbooks to junior students.",
        marks: 2,
        rubric: [{ key: "Both sides of page, rough work reuse, passing textbooks", marks: 2 }]
      },
      {
        category: "River Conservation",
        q: "Why must we not immerse plastic flowers, thermocol, or trash into holy rivers?",
        ans: "Dumping non-biodegradable trash poisons river water, chokes fish and aquatic turtles, and turns sacred freshwater rivers into dirty, unusable gutters.",
        marks: 2,
        rubric: [{ key: "Poisoning water and choking aquatic life", marks: 2 }]
      },
      {
        category: "Solar Energy",
        q: "What is solar energy, and why is it called clean energy?",
        ans: "Solar energy is energy captured from the Sun's light using solar panels. It is clean because it produces electricity without burning fuel, causing zero air pollution.",
        marks: 2,
        rubric: [
          { key: "Energy from sunlight using panels", marks: 1 },
          { key: "Zero pollution and unlimited source", marks: 1 }
        ]
      },
      {
        category: "Earth Day Slogan",
        q: "Write an inspiring two-line poem or slogan for Mother Earth.",
        ans: "'The Earth is our home, green and bright,\nLet’s keep it clean with all our might!' (धरती माँ का करो सम्मान, हरियाली से बने महान!)",
        marks: 1,
        rubric: [{ key: "Inspiring earth slogan or rhyme", marks: 1 }]
      }
    ]
  }
];

module.exports = { surroundingsPart2 };
