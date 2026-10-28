// Official NCERT Class 3 Environmental Studies (Our Wondrous World) Complete Dataset - Chapters 1 to 12
// Aligned with New NEP 2020 & NCF-FS / NCF-SE 2023 Curriculum (CBSE 2026-27 Session) - 100% Comprehensive Coverage

const wondrousWorldChapters = [
  {
    "id": "ww1",
    "num": 1,
    "unit": "Theme 1: Family and Community",
    "title": "Family and Friends",
    "subtitle": "Understanding Diverse Family Structures, Daily Responsibilities, Care, and Joyful Relationships",
    "concepts": [
      "Diverse types of families: Nuclear families, joint families, and single-parent households.",
      "Sharing household chores, caring for elderly grandparents, and supporting siblings.",
      "Family traditions, cultural stories passed down across generations, and family albums.",
      "Empathy, cooperation, and conflict resolution in everyday friendships at school."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Family and Friends — Love, Care and Shared Responsibilities</text>\n      <!-- Grandparents -->\n      <circle cx=\"100\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <text x=\"100\" y=\"87\" font-size=\"22\" text-anchor=\"middle\">👵👴</text>\n      <text x=\"100\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Grandparents</text>\n      <!-- Parents -->\n      <circle cx=\"230\" cy=\"80\" r=\"26\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/>\n      <text x=\"230\" y=\"87\" font-size=\"22\" text-anchor=\"middle\">👩👨</text>\n      <text x=\"230\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#3730a3\" text-anchor=\"middle\">Parents</text>\n      <!-- Children / Friends -->\n      <circle cx=\"360\" cy=\"80\" r=\"26\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\n      <text x=\"360\" y=\"87\" font-size=\"22\" text-anchor=\"middle\">👧👦</text>\n      <text x=\"360\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Children / Sibling</text>\n      <!-- Pet / Animal Friend -->\n      <circle cx=\"480\" cy=\"80\" r=\"26\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <text x=\"480\" y=\"87\" font-size=\"22\" text-anchor=\"middle\">🐶🐱</text>\n      <text x=\"480\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Family Pet</text>\n    </svg>",
    "questions": [
      {
        "category": "Understanding Family Dynamics",
        "q": "What is the difference between a nuclear family and a joint family? Give examples of tasks shared in both.",
        "ans": "A <strong>nuclear family</strong> consists of parents and their children living together in a household. In contrast, a <strong>joint family</strong> includes grandparents, parents, aunts, uncles, and cousins living together under one roof.<br><br><strong>Shared Tasks:</strong><br>• In a joint family, grandparents often help take care of grandchildren and narrate moral stories, while uncles and aunts help cook or run family businesses.<br>• In a nuclear family, parents and children work as a tight team—parents cook and buy groceries while children help lay the dining table, water plants, and keep school bags tidy.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate definitions of nuclear and joint families",
            "marks": "1.5 Marks"
          },
          {
            "key": "Clear examples of shared responsibilities and mutual support",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Empathy & Grandparent Care",
        "q": "How can children show respect and help elderly family members in their daily lives?",
        "ans": "Children can care for elderly family members by:<br>1. <strong>Helping with simple chores:</strong> Bringing their spectacles, newspaper, medicines, or a glass of water promptly.<br>2. <strong>Spending quality time:</strong> Listening to their childhood memories and reading books or news headlines to them.<br>3. <strong>Assisting mobility:</strong> Holding their hands while walking in the park or climbing stairs to prevent falls.<br>4. <strong>Speaking politely:</strong> Being patient and never shouting when grandparents have trouble hearing.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of 3-4 concrete caring behaviors",
            "marks": "2 Marks"
          },
          {
            "key": "Emphasis on patience and emotional well-being",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Friendship & Conflict Resolution",
        "q": "What should you do when you and your friend disagree about which game to play at recess?",
        "ans": "When friends disagree about a game, they should avoid fighting or leaving the playground. Instead, they can:<br>1. <strong>Take Turns:</strong> Play one game for the first 10 minutes and the other game for the next 10 minutes.<br>2. <strong>Toss a Coin / Vote:</strong> Use a fair choice method like a coin toss or stone-paper-scissors with good sportsmanship.<br>3. <strong>Find a Common Alternative:</strong> Pick a third game that both friends enjoy playing together.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fair cooperative methods (turn-taking, consensus)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Positive conflict resolution attitude",
            "marks": "0.5 Marks"
          }
        ]
      },
      {
        "category": "Family Relationships • Family Tree",
        "q": "Explain what a Family Tree is. Draw a simple 3-generation family tree showing Grandparents, Parents, and Children.",
        "ans": "<strong>Family Tree Diagram & Explanation:</strong><br>• A <strong>Family Tree</strong> is a drawing or diagram that shows how different members of a family across generations are related to one another.<br><br><strong>Structure of 3-Generation Family Tree:</strong><br><pre style='background:#f8fafc;padding:8px;border-radius:6px;font-family:monospace;'>\n       [ Grandfather ] ===== [ Grandmother ]  (Generation 1: Eldest)\n                             |\n                +------------+------------+\n                |                         |\n      [ Father ] = [ Mother ]        [ Uncle ] = [ Aunt ] (Generation 2)\n                 |\n          +------+------+\n          |             |\n      [ Child 1 ]   [ Child 2 ]                       (Generation 3: You & Siblings)\n</pre>",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear conceptual definition of a family tree",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate 3-generation layout with clear connections",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Sharing Household Chores • Teamwork at Home",
        "q": "Why is it important that all family members share daily household chores instead of leaving all the work to one person?",
        "ans": "<strong>Importance of Sharing Work:</strong><br>1. <strong>Fairness and Health:</strong> If one person (like mother) does all the cooking, cleaning, and washing, she becomes exhausted and unwell. Sharing work keeps everyone healthy.<br>2. <strong>Mutual Respect:</strong> When children and adults work together, they learn responsibility, appreciate each other's efforts, and develop stronger family bonding.",
        "marks": 3,
        "rubric": [
          {
            "key": "Health and fairness rationale",
            "marks": "1.5 M"
          },
          {
            "key": "Responsibility and family bonding rationale",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Sensory Awareness • Touch and Guess Game",
        "q": "In the classroom activity 'Touch and Guess':<br>(a) A child is blindfolded. How can she identify an orange, a rose petal, and a spoon without seeing them?<br>(b) Which sense organs are used when sight is blocked?",
        "ans": "<strong>Sensory Perception:</strong><br><strong>(a) Identifying Objects Blindfolded:</strong><br>• <strong>Orange:</strong> Identified by its sweet citrus fragrance (smell) and bumpy, round peel texture (touch).<br>• <strong>Rose petal:</strong> Identified by its delicate floral scent (smell) and soft, velvety surface (touch).<br>• <strong>Spoon:</strong> Identified by its cold, smooth metal texture and hard concave shape (touch).<br><br><strong>(b) Sense Organs Used:</strong><br>• <strong>Skin (Touch)</strong> and <strong>Nose (Smell)</strong>.",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate sensory clues for all three items",
            "marks": "2.0 M"
          },
          {
            "key": "Correct sense organs named (Skin and Nose)",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Caring for Elders • Family Values",
        "q": "Write two caring habits you can practice every day to help your aging grandparents feel loved and comfortable.",
        "ans": "<strong>Caring Habits for Grandparents:</strong><br>1. Spend 15 minutes talking with them, listening to their childhood stories, and reading the newspaper aloud to them.<br>2. Fetch their drinking water, spectacles, or walking stick promptly with a cheerful smile whenever they need it.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two practical, empathetic, and respectful daily actions",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 1 ('Family and Friends'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Family and Friends'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Family and Friends'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Promoting Inclusivity and Social Empathy",
      "text": "A new boy named Kabir has joined Class 3. He uses a wheelchair and speaks a different regional language at home. During lunch recess, Kabir sits alone near the classroom door while other children run outside to play tag.",
      "question": "Drawing on the values in 'Family and Friends', what thoughtful actions should the classmates take to welcome Kabir and make him feel included?",
      "answer": "Classmates should demonstrate the warmth of an extended family. They can invite Kabir to join their lunch circle, learn greeting words in his native language, and introduce games that everyone can play together from a seated position (such as chess, carrom, word building, or singing). They can also take turns keeping him company, pushing his wheelchair gently during playground walks, and ensuring wheelchair ramps are clear of bags and obstacles.",
      "rubric": "Demonstration of empathy, peer inclusivity, accessibility awareness, and cooperative social values (4 Marks)."
    }
  },
  {
    "id": "ww2",
    "num": 2,
    "unit": "Theme 1: Family and Community",
    "title": "Going to the Mela",
    "subtitle": "Exploring Local Fairs, Community Markets, Crafts, Traditional Rides, and Cultural Heritage",
    "concepts": [
      "The cultural significance of village and town melas (fairs) as hubs of celebration and trade.",
      "Traditional artisans and occupations: Potters, weavers, bangle makers, and toy artisans.",
      "Safety rules in crowded public places: Holding an adult's hand, remembering emergency contacts.",
      "Using local coins and currency to purchase handmade goods and traditional snacks."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#b45309\" text-anchor=\"middle\">Going to the Mela — Community Crafts, Joyful Rides &amp; Safety</text>\n      <!-- Ferris Wheel -->\n      <circle cx=\"110\" cy=\"80\" r=\"30\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n      <circle cx=\"110\" cy=\"80\" r=\"4\" fill=\"#ea580c\"/>\n      <line x1=\"80\" y1=\"80\" x2=\"140\" y2=\"80\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <line x1=\"110\" y1=\"50\" x2=\"110\" y2=\"110\" stroke=\"#ea580c\" stroke-width=\"1.5\"/>\n      <text x=\"110\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">Giant Wheel 🎡</text>\n      <!-- Handicraft Stalls -->\n      <rect x=\"220\" y=\"60\" width=\"70\" height=\"40\" fill=\"#fed7aa\" rx=\"4\"/>\n      <polygon points=\"215,60 255,40 295,60\" fill=\"#f97316\"/>\n      <text x=\"255\" y=\"85\" font-size=\"16\" text-anchor=\"middle\">🏺🧶</text>\n      <text x=\"255\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Pottery &amp; Toys</text>\n      <!-- Food Stall -->\n      <rect x=\"360\" y=\"60\" width=\"70\" height=\"40\" fill=\"#fef08a\" rx=\"4\"/>\n      <polygon points=\"355,60 395,40 435,60\" fill=\"#ca8a04\"/>\n      <text x=\"395\" y=\"85\" font-size=\"16\" text-anchor=\"middle\">🍬🍢</text>\n      <text x=\"395\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Traditional Food</text>\n      <!-- Safety Help Desk -->\n      <circle cx=\"490\" cy=\"80\" r=\"24\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/><text x=\"490\" y=\"86\" font-size=\"16\" text-anchor=\"middle\">👮‍♀️ℹ️</text>\n      <text x=\"490\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Lost &amp; Found Booth</text>\n    </svg>",
    "questions": [
      {
        "category": "Community Culture & Crafts",
        "q": "What kinds of artisan stalls and local goods do people find in a community mela?",
        "ans": "A community mela displays rich local crafts and livelihoods:<br>1. <strong>Clay Pottery & Toys:</strong> Earthen pots (matkas), kulhads, clay whistles, and painted figurines made by local potters.<br>2. <strong>Handmade Textiles & Bangles:</strong> Colorful lac and glass bangles, embroidered dupattas, and handloom kurtas.<br>3. <strong>Handcrafted Wooden & Bamboo Items:</strong> Wooden spinning tops (lattu), bamboo flutes, and hand-woven wicker baskets.<br>4. <strong>Traditional Sweets:</strong> Jalebi, imarti, cotton candy, roasted groundnuts, and sweet batashas.",
        "marks": 3,
        "rubric": [
          {
            "key": "Detailed listing of 4 distinct artisanal goods/stalls",
            "marks": "2 Marks"
          },
          {
            "key": "Appreciation of traditional livelihoods",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Safety Protocols in Public Spaces",
        "q": "What important safety precautions should every child observe when visiting a crowded fair?",
        "ans": "Children must follow these essential safety rules in crowded places:<br>1. <strong>Stay With Adults:</strong> Always hold a parent's or guardian's hand and never wander off toward toy stalls alone.<br>2. <strong>Emergency Information Card:</strong> Keep a pocket slip containing parents' names, phone numbers, and home address.<br>3. <strong>Identify Safe Help Points:</strong> If separated, never leave the venue with strangers; immediately approach a police officer or the official Mela Information & Public Announcement Booth.<br>4. <strong>Establish a Meeting Spot:</strong> Agree upon a noticeable landmark (e.g., the clock tower or entry gate) where family members can reunite if separated.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear safety actions (holding hands, ID slip, safe personnel)",
            "marks": "2 Marks"
          },
          {
            "key": "Reunion protocol in case of getting lost",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Hygiene & Environmental Care",
        "q": "How can visitors help keep the mela grounds clean and free from plastic garbage?",
        "ans": "Visitors can protect the environment by:<br>• Carrying cloth bags for purchases to avoid single-use polythene bags.<br>• Disposing of used leaf plates (pattals), sugarcane peels, and paper cups strictly into designated color-coded dustbins.<br>• Avoiding food wastage by taking only what they can finish.",
        "marks": 2,
        "rubric": [
          {
            "key": "Anti-littering and waste segregation practices",
            "marks": "1.5 Marks"
          },
          {
            "key": "Use of eco-friendly alternatives",
            "marks": "0.5 Marks"
          }
        ]
      },
      {
        "category": "Local Crafts • Artisans at the Mela",
        "q": "At a village or neighborhood mela, you see artisans making handicrafts.<br>(a) Name two handmade toys commonly sold by artisans at a traditional fair.<br>(b) Why should we support traditional local artisans instead of buying factory-made plastic toys?",
        "ans": "<strong>Handicrafts & Fair Economy:</strong><br><strong>(a) Traditional Handmade Toys:</strong><br>• 1. <strong>Clay figurines / whistles (mitti ke khilone)</strong>.<br>• 2. <strong>Wooden spinning tops (lattu) / wooden rocking horses</strong>.<br><br><strong>(b) Supporting Artisans:</strong><br>• Traditional artisans preserve ancient cultural heritage and use eco-friendly natural materials (clay, wood). Buying from them provides livelihood to rural craftsmen and keeps our country's folk arts alive.",
        "marks": 3,
        "rubric": [
          {
            "key": "Two authentic handmade toys named",
            "marks": "1.0 M"
          },
          {
            "key": "Cultural preservation and ecological benefits explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Community Helpers • Safety at the Mela",
        "q": "Which community helpers work hard at a crowded mela to keep visitors safe and comfortable?<br>List three helpers and their responsibilities.",
        "ans": "<strong>Community Helpers at the Fair:</strong><br>1. <strong>Police Officers:</strong> Maintain law and order, control crowds, and run the 'Lost and Found' booth for lost children.<br>2. <strong>Sanitation Workers:</strong> Continuously empty waste bins and sweep paper plates to keep the fairgrounds clean and hygienic.<br>3. <strong>First-Aid Medics / Doctors:</strong> Provide immediate medical care, bandages, and oral hydration to anyone injured or dizzy.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three distinct helpers with accurate fairground duties",
            "marks": "3.0 अंक"
          }
        ]
      },
      {
        "category": "Clay Modelling Activity • Making Diya / Toy",
        "q": "Describe the four simple steps to make a small clay diya or clay bowl using natural potters' clay.",
        "ans": "<strong>Step-by-Step Clay Craft:</strong><br>1. <strong>Kneading:</strong> Knead damp clay thoroughly with fingers until it is soft, smooth, and free of air bubbles.<br>2. <strong>Ball Making:</strong> Roll a piece of clay between palms into a smooth sphere.<br>3. <strong>Shaping:</strong> Press your thumb into the center to make a hollow bowl, pinching the rim outward to form the groove for the wick.<br>4. <strong>Drying:</strong> Place the diya in the shade to dry, then sun-bake it so it turns firm and sturdy.",
        "marks": 3,
        "rubric": [
          {
            "key": "Four procedural steps of clay modelling described",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Mela Map Navigation • Basic Directions",
        "q": "If the Giant Wheel is to your North and the Food Stalls are to your East, in which direction must you turn from the Giant Wheel to reach the Food Stalls?",
        "ans": "<strong>Directional Logic:</strong><br>• Facing North towards the Giant Wheel, East is directly to your <strong>Right</strong>.<br>• Therefore, to go from the Giant Wheel towards the Food Stalls, you must travel in the <strong>South-East direction</strong> (or turn right towards the East).",
        "marks": 2,
        "rubric": [
          {
            "key": "Correct directional logic and turn identified",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 2 ('Going to the Mela'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Going to the Mela'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Going to the Mela'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Supporting Local Artisans and Economic Sustainability",
      "text": "At a district fair, modern imported plastic battery toys are sold right next to a traditional potter selling hand-moulded clay bird whistles. Many children rush to the plastic toys, while the elderly potter sits with few buyers.",
      "question": "Why is it important to support traditional local artisans at fairs, and what can school communities do to promote eco-friendly indigenous crafts?",
      "answer": "Supporting traditional artisans is vital because their crafts represent centuries of cultural heritage, utilize biodegradable natural materials (clay, wood, natural dyes), and provide honest livelihoods to rural families. Plastic toys generate non-recyclable electronic and microplastic waste. Schools can organize 'Heritage Craft Days', invite local potters to conduct workshops, and encourage children to purchase eco-friendly festive gifts directly from local craftspeople.",
      "rubric": "Appreciation of indigenous crafts, environmental comparison (clay vs plastic), and actionable cultural promotion ideas (4 Marks)."
    }
  },
  {
    "id": "ww3",
    "num": 3,
    "unit": "Theme 1: Family and Community",
    "title": "Celebrating Festivals",
    "subtitle": "Cultural Diversity, Traditional Delicacies, Festive Music, and Unified Community Celebrations",
    "concepts": [
      "Festivals of India: Harvest festivals (Bihu, Pongal, Baisakhi), religious festivals (Diwali, Eid, Christmas, Gurpurab).",
      "Special festive foods and sweets prepared with seasonal agricultural harvests.",
      "Eco-friendly celebrations: Rangoli with flower petals, earthen diyas, and avoiding firecrackers.",
      "The underlying spirit of festivals: Brotherhood, generosity, forgiveness, and community sharing."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fef2f2\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#991b1b\" text-anchor=\"middle\">Celebrating Festivals — Unity in Diversity &amp; Eco-Friendly Joy</text>\n      <!-- Diya (Diwali) -->\n      <circle cx=\"100\" cy=\"80\" r=\"24\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"100\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🪔</text>\n      <text x=\"100\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Diwali / Earthen Lamp</text>\n      <!-- Crescent & Star (Eid) -->\n      <circle cx=\"220\" cy=\"80\" r=\"24\" fill=\"#ecfdf5\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"220\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🌙⭐</text>\n      <text x=\"220\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">Eid-ul-Fitr / Sewaiyan</text>\n      <!-- Gurpurab / Langar -->\n      <circle cx=\"340\" cy=\"80\" r=\"24\" fill=\"#ffedd5\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"340\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">☬🍲</text>\n      <text x=\"340\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Gurpurab / Community Langar</text>\n      <!-- Christmas Tree -->\n      <circle cx=\"460\" cy=\"80\" r=\"24\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"460\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🎄🎁</text>\n      <text x=\"460\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Christmas / Joy of Giving</text>\n    </svg>",
    "questions": [
      {
        "category": "Festival Diversity & Significance",
        "q": "What are harvest festivals? Name two harvest festivals celebrated in different parts of India and their special dishes.",
        "ans": "<strong>Harvest festivals</strong> are joyous community celebrations held when standing agricultural crops ripen and farmers gather their hard-earned yield.<br><br><strong>Examples:</strong><br>1. <strong>Pongal (Tamil Nadu):</strong> Celebrated to honor the Sun God and cattle after harvesting paddy and sugarcane. The special dish is 'Sweet Pongal' made of newly harvested rice, jaggery, milk, and cashew nuts boiled in an earthen pot.<br>2. <strong>Bihu / Magh Bihu (Assam):</strong> Marks the end of the winter harvesting season. People construct thatched bamboo huts (Bhelaghar) and prepare traditional rice cakes called 'Pitha' and 'Laru' (sesame/coconut sweets).",
        "marks": 3,
        "rubric": [
          {
            "key": "Precise definition of harvest festivals",
            "marks": "1 Mark"
          },
          {
            "key": "Identification of two regional harvest festivals with authentic festive foods",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Eco-Friendly Celebrations",
        "q": "Why should we avoid bursting chemical firecrackers during festivals? List three harmful effects.",
        "ans": "Bursting chemical firecrackers causes severe harm to our living environment:<br>1. <strong>Dangerous Air Pollution:</strong> Firecrackers release toxic fumes (sulfur dioxide, lead, barium) that trigger asthma, coughs, and breathing distress in infants and elderly individuals.<br>2. <strong>Noise Pollution:</strong> The loud explosions terrify street animals, pet dogs, and nesting birds, causing severe trauma and hearing loss.<br>3. <strong>Toxic Chemical Litter:</strong> Burnt cracker residues leave hazardous chemical dust on streets that pollutes groundwater when washed by rain.",
        "marks": 3,
        "rubric": [
          {
            "key": "Air pollution and human health impact",
            "marks": "1 Mark"
          },
          {
            "key": "Noise impact on birds and domestic animals",
            "marks": "1 Mark"
          },
          {
            "key": "Hazardous solid waste generation",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Community Harmony",
        "q": "What is the noble message behind community feasts such as the 'Langar' organized on Gurpurab?",
        "ans": "The message behind 'Langar' is absolute human equality, brotherhood, and selfless service. People of all castes, religions, rich and poor, sit together on the floor in a straight row (pangat) and partake of the same freshly cooked vegetarian food, teaching us that everyone is equal in the eyes of God.",
        "marks": 2,
        "rubric": [
          {
            "key": "Concept of equality and selfless community service",
            "marks": "1.5 Marks"
          },
          {
            "key": "Inclusivity without discrimination",
            "marks": "0.5 Marks"
          }
        ]
      },
      {
        "category": "Festivals of India • Cultural Diversity",
        "q": "Match each festival with its traditional special food dish:<br>• Eid: [Sewaiyan / Sheer Khurma, Gujiya, Plum Cake, Modak]<br>• Holi: [Sewaiyan / Sheer Khurma, Gujiya, Plum Cake, Modak]<br>• Ganesh Chaturthi: [Sewaiyan / Sheer Khurma, Gujiya, Plum Cake, Modak]<br>• Christmas: [Sewaiyan / Sheer Khurma, Gujiya, Plum Cake, Modak]",
        "ans": "<strong>Traditional Festive Dishes:</strong><br>• <strong>Eid</strong> $\\rightarrow$ Sewaiyan / Sheer Khurma<br>• <strong>Holi</strong> $\\rightarrow$ Gujiya<br>• <strong>Ganesh Chaturthi</strong> $\\rightarrow$ Modak<br>• <strong>Christmas</strong> $\\rightarrow$ Plum Cake",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct matching for all 4 festival dishes",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Harvest Festivals • Agricultural Connection",
        "q": "(a) What is a 'Harvest Festival'?<br>(b) Name two harvest festivals celebrated in different parts of India.",
        "ans": "<strong>Harvest Festivals Explained:</strong><br><strong>(a) Definition:</strong><br>• A harvest festival is a joyous celebration held by farmers and communities when agricultural crops (like wheat, rice, or sugarcane) are ripe and harvested. It is a thanksgiving to nature, sun, and rain.<br><br><strong>(b) Two Indian Harvest Festivals:</strong><br>• 1. <strong>Baisakhi</strong> (celebrated in Punjab for wheat harvest).<br>• 2. <strong>Pongal / Onam</strong> (celebrated in Tamil Nadu and Kerala for rice harvest).",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear agricultural definition of harvest celebration",
            "marks": "1.5 M"
          },
          {
            "key": "Two authentic Indian harvest festivals named with states",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Eco-Friendly Celebrations • Environmental Protection",
        "q": "Why should we avoid bursting noisy, smoky firecrackers during festivals? Give two environmental reasons.",
        "ans": "<strong>Eco-Friendly Festive Reasons:</strong><br>1. <strong>Air Pollution & Health:</strong> Firecracker smoke releases toxic gases and heavy chemicals that cause severe breathing problems, asthma attacks, and eye irritation for young children and elderly citizens.<br>2. <strong>Noise Pollution & Animals:</strong> The deafening blasts terrify street animals, pet dogs, and birds, who have far more sensitive hearing than humans.",
        "marks": 2,
        "rubric": [
          {
            "key": "Air pollution/health impacts explained",
            "marks": "1.0 M"
          },
          {
            "key": "Noise pollution and animal distress explained",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Traditional Attire • Unity in Diversity",
        "q": "Why do people wear new, colorful traditional clothes on festive occasions?",
        "ans": "<strong>Cultural Expression:</strong><br>• Traditional festive attire reflects cultural heritage, expresses joy and celebration, and symbolizes starting a new auspicious season with cleanliness, freshness, and positivity.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cultural symbolism and festive joy explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 3 ('Celebrating Festivals'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Celebrating Festivals'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Celebrating Festivals'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Environmental Citizenship During Festive Celebrations",
      "text": "During Diwali and Ganesh Utsav, vast numbers of plaster-of-paris idols painted with chemical dyes and plastic decorations are submerged into local rivers and lakes, poisoning aquatic life and rendering water unfit for drinking.",
      "question": "As responsible young environmental ambassadors, how can students encourage their neighborhoods to adopt 100% green and eco-friendly festive celebrations?",
      "answer": "Students can launch school awareness campaigns to inspire green celebrations: (1) Advocate for idols made exclusively of unbaked local river clay (shadu mati) embedded with seeds, which dissolve harmlessly in home garden pots to sprout plants. (2) Replace synthetic chemical colors with natural flower petals (marigold, rose), turmeric, and spinach paste for rangolis. (3) Light traditional clay diyas filled with mustard or sesame oil instead of single-use plastic electric strings. (4) Celebrate with music, storytelling, and sharing sweets with underprivileged children rather than spending money on crackers.",
      "rubric": "Clay seed-idols, natural bio-rangolis, water protection awareness, and empathetic community sharing (4 Marks)."
    }
  },
  {
    "id": "ww4",
    "num": 4,
    "unit": "Theme 2: The Natural World Around Us",
    "title": "Getting to Know Plants",
    "subtitle": "Observing Plant Anatomy, Root Systems, Leaf Venation, Photosynthesis, and Habitats",
    "concepts": [
      "Classification of plants based on stem structure: Herbs, shrubs, trees, climbers, and creepers.",
      "Root functions: Anchoring the plant firmly in soil and absorbing water and minerals.",
      "Leaves as food factories: Chlorophyll, sunlight, air, and water combining in photosynthesis.",
      "Leaf patterns: Reticulate venation (net-like) and parallel venation with distinct leaf margins."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#ecfdf5\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#065f46\" text-anchor=\"middle\">Parts of a Plant &amp; Their Vital Functions</text>\n      <!-- Plant Diagram -->\n      <!-- Soil Line -->\n      <line x1=\"80\" y1=\"110\" x2=\"240\" y2=\"110\" stroke=\"#92400e\" stroke-width=\"3\"/>\n      <!-- Stem -->\n      <line x1=\"160\" y1=\"110\" x2=\"160\" y2=\"45\" stroke=\"#16a34a\" stroke-width=\"4\"/>\n      <!-- Flower -->\n      <circle cx=\"160\" cy=\"40\" r=\"10\" fill=\"#f43f5e\"/><circle cx=\"160\" cy=\"40\" r=\"4\" fill=\"#fde047\"/>\n      <!-- Leaves -->\n      <path d=\"M160,70 Q130,55 120,70 Q135,80 160,75 Z\" fill=\"#22c55e\"/>\n      <path d=\"M160,85 Q190,70 200,85 Q185,95 160,90 Z\" fill=\"#22c55e\"/>\n      <!-- Roots -->\n      <path d=\"M160,110 Q150,130 140,145 M160,110 Q165,130 165,148 M160,110 Q175,128 185,142\" stroke=\"#b45309\" stroke-width=\"2\"/>\n      <!-- Labels -->\n      <text x=\"200\" y=\"42\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#be123c\">Flower (Reproduction)</text>\n      <text x=\"95\" y=\"70\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\">Leaf (Food Factory)</text>\n      <text x=\"185\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\">Stem (Transport)</text>\n      <text x=\"200\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#78350f\">Roots (Absorption)</text>\n      <!-- Venation Comparison Box -->\n      <rect x=\"340\" y=\"45\" width=\"210\" height=\"95\" fill=\"#ffffff\" stroke=\"#a7f3d0\" rx=\"8\"/>\n      <text x=\"445\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\" text-anchor=\"middle\">Leaf Venation Types</text>\n      <text x=\"355\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">• <strong>Reticulate:</strong> Net-like (Peepal, Mango)</text>\n      <text x=\"355\" y=\"112\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#1e293b\">• <strong>Parallel:</strong> Straight lines (Grass, Banana)</text>\n      <text x=\"355\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"8\" fill=\"#64748b\">Chlorophyll traps sunlight for photosynthesis</text>\n    </svg>",
    "questions": [
      {
        "category": "Plant Classification",
        "q": "How do climbers and creepers differ from trees? Give two common examples of each.",
        "ans": "Plants differ based on the strength and thickness of their stems:<br>1. <strong>Trees:</strong> Have thick, hard, woody brown trunks that stand erect independently (e.g., Banyan tree, Neem tree).<br>2. <strong>Climbers:</strong> Have weak, green stems that cannot stand upright alone. They produce tendrils to climb up walls, fences, or other trees (e.g., Money plant, Pea plant, Grapevine).<br>3. <strong>Creepers:</strong> Have soft, fragile stems and heavy fruits that creep along the horizontal surface of the ground (e.g., Pumpkin, Watermelon).",
        "marks": 3,
        "rubric": [
          {
            "key": "Contrast of stem characteristics (woody vs weak)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate botanical examples for trees, climbers, and creepers",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Leaf Structure & Function",
        "q": "Why are green leaves known as the 'food factories' or 'kitchen' of a plant?",
        "ans": "Leaves are called the food factories because they prepare nourishment for the entire plant through the process of <strong>photosynthesis</strong>:<br>• Leaves contain a green pigment called <strong>chlorophyll</strong> that traps light energy from the sun.<br>• They absorb carbon dioxide gas from surrounding air through tiny pores called <strong>stomata</strong>.<br>• Roots absorb water and minerals from soil and send them up the stem into the leaves.<br>• Using sunlight, water, and carbon dioxide, the leaf manufactures sugar (glucose) and releases life-giving oxygen into the air.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of photosynthesis and chlorophyll",
            "marks": "1.5 Marks"
          },
          {
            "key": "Role of stomata, water, and oxygen release",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Botanical Observation",
        "q": "Explain the difference between reticulate venation and parallel venation with leaf rubbings.",
        "ans": "• <strong>Reticulate Venation:</strong> The veins branch out to create a web-like or criss-cross network across the entire leaf blade (e.g., Rose, Peepal, China Rose).<br>• <strong>Parallel Venation:</strong> The veins run side-by-side in parallel straight lines from the base to the leaf tip (e.g., Grass, Wheat, Maize, Banana).",
        "marks": 2,
        "rubric": [
          {
            "key": "Clear visual description of both vein patterns",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate leaf examples",
            "marks": "0.5 Marks"
          }
        ]
      },
      {
        "category": "Botanical Diversity • Herbs, Shrubs, and Trees",
        "q": "Classify plants into Herbs, Shrubs, and Trees based on their stems:<br>(a) What type of stem does a Herb have? Give an example.<br>(b) What type of stem does a Shrub have? Give an example.<br>(c) What type of stem does a Tree have? Give an example.",
        "ans": "<strong>Plant Classification:</strong><br>• <strong>(a) Herb:</strong> Has a green, soft, delicate stem with no wood (e.g., <strong>Mint, Coriander, Wheat</strong>).<br>• <strong>(b) Shrub:</strong> Medium-sized plant with a hard, woody stem branching out from near the base, resembling a bush (e.g., <strong>Rose, Hibiscus, Lemon</strong>).<br>• <strong>(c) Tree:</strong> Tall plant with a single, thick, hard, dark woody stem called the trunk (e.g., <strong>Neem, Banyan, Mango</strong>).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct stem trait and example for Herb",
            "marks": "1.0 M"
          },
          {
            "key": "Correct stem trait and example for Shrub",
            "marks": "1.0 M"
          },
          {
            "key": "Correct stem trait and example for Tree",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Leaf Art Activity • Texture Rubbing",
        "q": "Explain how to take a leaf rubbing using a wax crayon as described in the textbook activity.",
        "ans": "<strong>Step-by-Step Leaf Rubbing:</strong><br>1. Place a fresh leaf with prominent veins on a flat wooden table with its rough underside facing upward.<br>2. Lay a thin sheet of white paper flat over the leaf.<br>3. Take a wax crayon on its side and gently rub it back and forth over the paper.<br>4. The raised pattern of the leaf's central midrib and side veins will magically appear on the paper.",
        "marks": 3,
        "rubric": [
          {
            "key": "Positioning rough underside facing up",
            "marks": "1.0 M"
          },
          {
            "key": "Technique of rubbing crayon gently on side",
            "marks": "1.0 M"
          },
          {
            "key": "Accurate result of leaf veins pattern emerging",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Medicinal Plants • Home Remedies",
        "q": "Match each common medicinal plant with its traditional home remedy:<br>• Tulsi (Holy Basil): [Soothes burns and skin cuts, Relieves cough and cold, Antibacterial tooth cleaning / fever]<br>• Aloe Vera: [Soothes burns and skin cuts, Relieves cough and cold, Antibacterial tooth cleaning / fever]<br>• Neem: [Soothes burns and skin cuts, Relieves cough and cold, Antibacterial tooth cleaning / fever]",
        "ans": "<strong>Medicinal Plant Remedies:</strong><br>• <strong>Tulsi:</strong> Relieves cough, throat infection, and seasonal cold.<br>• <strong>Aloe Vera:</strong> Soothes burns, cuts, and moisturizes skin.<br>• <strong>Neem:</strong> Antibacterial protection, purification, and skin healing.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct medicinal uses matched for all three plants",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Photosynthesis Basics • Plant Nutrition",
        "q": "What four essential ingredients do green plants need to prepare their own food?",
        "ans": "<strong>Four Essentials for Plants:</strong><br>1. <strong>Sunlight</strong> (from the Sun)<br>2. <strong>Water</strong> (absorbed by roots from soil)<br>3. <strong>Carbon Dioxide</strong> (absorbed from air through leaf pores/stomata)<br>4. <strong>Chlorophyll</strong> (the green pigment present in leaves).",
        "marks": 2,
        "rubric": [
          {
            "key": "All four essentials accurately named",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 4 ('Getting to Know Plants'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Getting to Know Plants'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Getting to Know Plants'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Investigative Botanical Inquiry: Sunlight and Plant Growth",
      "text": "Simran placed two identical potted mint plants on her balcony. She watered both with 100 ml of water daily, but placed an opaque cardboard box over Plant A while Plant B was exposed to normal sunlight. After 10 days, Plant A's leaves turned pale yellow and wilted, whereas Plant B was thriving and deep green.",
      "question": "What scientific conclusion can Simran draw from this controlled observation, and how does chlorophyll depend on light?",
      "answer": "Simran can conclude that <strong>sunlight is an indispensable requirement for photosynthesis and healthy plant life</strong>. Plant A could not produce chlorophyll in total darkness; without chlorophyll, it could not synthesize food from water and air, resulting in energy starvation, loss of green pigmentation (etiolation), and eventual wilting. Plant B, having regular sunlight, synthesized food continuously and grew vibrant leaves.",
      "rubric": "Hypothesis testing, role of sunlight in chlorophyll formation, controlled experiment interpretation (4 Marks)."
    }
  },
  {
    "id": "ww5",
    "num": 5,
    "unit": "Theme 2: The Natural World Around Us",
    "title": "Plants and Animals Live Together",
    "subtitle": "Symbiosis, Food Chains, Animal Habitats, Pollination, and Ecological Interdependence",
    "concepts": [
      "Ecological interdependence: How plants provide oxygen, food, and shelter to animals.",
      "How animals assist plants: Pollination by bees and butterflies, seed dispersal by birds.",
      "Simple food chains: Grass (producer) → Grasshopper (herbivore) → Frog → Snake → Eagle.",
      "Respecting natural habitats: Avoiding nest destruction and protecting micro-habitats in school gardens."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Ecological Balance — Interdependence of Plants and Animals</text>\n      <!-- Plant (Producer) -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"80\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🌱</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Plant (Food &amp; O₂)</text>\n      <path d=\"M115,80 L165,80\" stroke=\"#0284c7\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n      <!-- Butterfly / Pollinator -->\n      <circle cx=\"200\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"200\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🦋</text>\n      <text x=\"200\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Butterfly (Pollination)</text>\n      <path d=\"M235,80 L285,80\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <!-- Bird (Seed Dispersal) -->\n      <circle cx=\"320\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/><text x=\"320\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🐦</text>\n      <text x=\"320\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Bird (Seed Disperser)</text>\n      <path d=\"M355,80 L405,80\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <!-- Earthworm / Soil Health -->\n      <circle cx=\"450\" cy=\"80\" r=\"26\" fill=\"#f1f5f9\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"450\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🪱</text>\n      <text x=\"450\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Earthworm (Soil Fertility)</text>\n    </svg>",
    "questions": [
      {
        "category": "Mutual Interdependence",
        "q": "Explain two ways in which plants help animals, and two ways in which animals help plants.",
        "ans": "<strong>Ways Plants Help Animals:</strong><br>1. <strong>Oxygen & Nourishment:</strong> Green plants release oxygen during the daytime for animals to breathe and produce fruits, seeds, and nectar for food.<br>2. <strong>Shelter & Protection:</strong> Trees provide nesting places for birds, hollows for squirrels, and shade for grazing animals.<br><br><strong>Ways Animals Help Plants:</strong><br>1. <strong>Pollination:</strong> Insects like honeybees and butterflies carry pollen grains from flower to flower, allowing flowers to develop into fruits.<br>2. <strong>Seed Dispersal:</strong> Birds and monkeys eat fruits and drop seeds in distant places through their droppings, helping new trees germinate.",
        "marks": 3,
        "rubric": [
          {
            "key": "Two clear contributions of plants to animal survival",
            "marks": "1.5 Marks"
          },
          {
            "key": "Two vital contributions of animals to plant reproduction/dispersal",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Food Chains & Producers",
        "q": "What is a food chain? Construct a simple 4-step land food chain starting with grass.",
        "ans": "A <strong>food chain</strong> is a sequential feeding relationship that demonstrates who eats whom in nature to transfer energy from producers to consumers.<br><br><strong>4-Step Food Chain:</strong><br><strong>Grass (Producer)</strong> ➔ <strong>Grasshopper (Herbivore)</strong> ➔ <strong>Frog (Carnivore)</strong> ➔ <strong>Snake (Apex Predator)</strong>.<br>• Grass captures solar energy.<br>• The grasshopper feeds on green leaves.<br>• The frog preys on the grasshopper.<br>• The snake consumes the frog.",
        "marks": 3,
        "rubric": [
          {
            "key": "Definition of food chain and energy flow",
            "marks": "1.5 Marks"
          },
          {
            "key": "Correct 4-organism progression with appropriate ecological terms",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Soil Ecosystems",
        "q": "Why are earthworms honored as 'the farmer's best friends'?",
        "ans": "Earthworms burrow through underground soil, making it loose and aerated so plant roots can breathe and absorb rainwater easily. Furthermore, their waste castings enrich the soil with rich natural humus and organic nutrients.",
        "marks": 2,
        "rubric": [
          {
            "key": "Soil aeration through burrowing",
            "marks": "1 Mark"
          },
          {
            "key": "Nutrient enhancement through vermicompost/castings",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Interdependence • Plants and Animals",
        "q": "How do plants and animals depend upon each other for survival? Give two clear examples.",
        "ans": "<strong>Ecological Interdependence:</strong><br>1. <strong>Oxygen and Carbon Dioxide Cycle:</strong> Plants produce oxygen during daytime, which animals breathe to stay alive. Animals breathe out carbon dioxide, which plants use to prepare food.<br>2. <strong>Food and Pollination:</strong> Animals eat plant fruits, nectar, and leaves. In return, bees and butterflies pollinate flowers so new fruits and seeds can grow.",
        "marks": 3,
        "rubric": [
          {
            "key": "Oxygen-carbon dioxide exchange explained",
            "marks": "1.5 M"
          },
          {
            "key": "Food and pollination mutual benefit explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Animal Shelters • Natural Habitats",
        "q": "Classify the following animals according to their natural shelters:<br>Parrot, Earthworm, Rabbit, Fish, Monkey.<br>[Tree hollows/branches, Underground burrows, Moist soil, Water/Pond]",
        "ans": "<strong>Shelter Classification:</strong><br>• <strong>Parrot:</strong> Tree hollows / tree branches<br>• <strong>Monkey:</strong> Tree branches and canopy<br>• <strong>Earthworm:</strong> Moist underground soil<br>• <strong>Rabbit:</strong> Underground burrows<br>• <strong>Fish:</strong> Water (pond/river/lake)",
        "marks": 3,
        "rubric": [
          {
            "key": "Accurate natural shelter matches for all 5 animals",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Hands-on Project • Making a Bird Feeder",
        "q": "How can you make a bird feeder using a recycled plastic bottle or carton?",
        "ans": "<strong>Recycled Bird Feeder Steps:</strong><br>1. Take a clean, empty plastic bottle or milk carton and cut two small feeding holes (about 3 cm wide) on opposite sides, 5 cm from the base.<br>2. Push an old wooden pencil or chopstick right through the bottle just beneath each hole to act as a perch for birds to sit on.<br>3. Fill the bottle with birdseeds (millets, sunflower seeds).<br>4. Tie a sturdy string around the bottle neck and hang it from a shady tree branch safely away from cats.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cutting feeding ports and inserting perch",
            "marks": "1.5 M"
          },
          {
            "key": "Filling seeds and hanging safely described",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Animal Welfare • Stray Dogs Etiquette",
        "q": "What should you do if you encounter a stray dog while walking on the street? Write two safety guidelines.",
        "ans": "<strong>Safety Guidelines for Stray Dogs:</strong><br>1. Walk calmly without running, screaming, or throwing stones, which may frighten the dog and provoke a bite.<br>2. Avoid staring directly into an unfamiliar dog's eyes or disturbing a mother dog nursing her puppies.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two sensible, non-provocative safety rules",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 5 ('Plants and Animals Live Together'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Plants and Animals Live Together'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Plants and Animals Live Together'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Ecosystem Fragility: Decline of Honeybees",
      "text": "A farmer sprayed heavy chemical pesticides across his mustard and apple orchards to kill aphids. Soon after, all local wild honeybees and bumblebees vanished from the farm. The following spring, the fruit yield dropped by more than 75% even though the trees bloomed with flowers.",
      "question": "Apply your understanding of 'Plants and Animals Live Together' to explain why the farmer's harvest collapsed after the bees died.",
      "answer": "The farmer's harvest failed because honeybees are the primary <strong>pollinators</strong> of apple and mustard blossoms. When the bees landed on blossoms to gather nectar, pollen grains stuck to their fuzzy bodies and were transferred to neighboring flowers, enabling fertilization and seed/fruit formation. When pesticides wiped out the pollinators, the flowers withered without setting fruit. This demonstrates that killing one vital link disrupts the entire food-producing ecosystem.",
      "rubric": "Pollination mechanism, role of beneficial insects, ecological domino effect of chemical pesticides (4 Marks)."
    }
  },
  {
    "id": "ww6",
    "num": 6,
    "unit": "Theme 2: The Natural World Around Us",
    "title": "Living in Harmony",
    "subtitle": "Coexisting with Neighborhood Wildlife, Stray Animal Care, Bird Feeders, and Conservation",
    "concepts": [
      "Urban and rural wildlife coexistence: Pigeons, sparrows, squirrels, bats, and stray dogs.",
      "Setting up bird baths and shaded earthen water pots on rooftops during hot summer months.",
      "Humane treatment of animals: Avoiding stone-throwing, cruelty, and caged captivity.",
      "Traditional Indian practices of compassion: Feeding ants (chiunti ko aata), jiva-daya, and sacred groves."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fff7ed\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#c2410c\" text-anchor=\"middle\">Living in Harmony — Compassion for Street Animals &amp; Backyard Birds</text>\n      <!-- Earthen Bird Bath -->\n      <ellipse cx=\"110\" cy=\"95\" rx=\"36\" ry=\"14\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2\"/>\n      <ellipse cx=\"110\" cy=\"92\" rx=\"30\" ry=\"10\" fill=\"#bae6fd\"/>\n      <text x=\"110\" y=\"80\" font-size=\"20\" text-anchor=\"middle\">🕊️</text>\n      <text x=\"110\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Rooftop Bird Bath</text>\n      <!-- Stray Animal Feeding -->\n      <circle cx=\"270\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"270\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🐕🥣</text>\n      <text x=\"270\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Feeding Stray Dogs</text>\n      <!-- Squirrel Feeder -->\n      <circle cx=\"430\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"430\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🐿️🥜</text>\n      <text x=\"430\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Protecting Neighborhood Fauna</text>\n    </svg>",
    "questions": [
      {
        "category": "Compassion in Action",
        "q": "What simple steps can students take on their balconies or school grounds to help birds during scorching summer seasons?",
        "ans": "Students can provide life-saving relief to urban birds during summer by:<br>1. <strong>Installing an Earthen Water Bowl (Sakora):</strong> Placing shallow terracotta bowls of clean water in shaded corners and refilling them twice daily.<br>2. <strong>Hanging Grain Feeders:</strong> Placing small wooden or recycled bottle feeders with millet (bajra), broken wheat (dalia), or sunflower seeds.<br>3. <strong>Planting Shady Native Bushes:</strong> Growing native flowering shrubs like hibiscus, curry leaf, and bougainvillea that offer cool perches and insect food.",
        "marks": 3,
        "rubric": [
          {
            "key": "Specific hydration measures (terracotta bowls/cleaning)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Nutritional feed and safe shaded perches",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Humane Treatment of Street Animals",
        "q": "Why should people never throw stones or firecrackers at stray dogs and cats?",
        "ans": "Street animals feel physical pain, terror, and grief just like humans. Throwing stones or firecrackers at them causes severe fractures, burns, and psychological trauma. Traumatized dogs may become fearful and defensively bite innocent passersby. Compassionate feeding, vaccination, and sterilization keep neighborhood animals calm, healthy, and friendly.",
        "marks": 3,
        "rubric": [
          {
            "key": "Ethical consideration of pain and animal sentience",
            "marks": "1.5 Marks"
          },
          {
            "key": "Behavioral consequences (fear aggression vs friendliness)",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Cultural Conservation Practices",
        "q": "Mention two traditional community customs in India that reflect respect for animal life.",
        "ans": "1. <strong>Feeding Grain to Ants and Fish:</strong> Offering flour and sugar to ant colonies and puffed rice to river fish during morning walks.<br>2. <strong>Sacred Groves (Orans/Devrais):</strong> Community forest patches protected by villagers where tree-cutting and hunting are strictly prohibited to allow wild animals to roam in peace.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate mention of two cultural traditions of wildlife coexistence",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Environmental Harmony • Clean Air and Water",
        "q": "What human activities cause water pollution in neighborhood rivers and lakes? List three causes.",
        "ans": "<strong>Causes of Water Pollution:</strong><br>1. Dumping plastic garbage, disposable bottles, and household waste into ponds and rivers.<br>2. Washing clothes, cleaning utensils, and bathing cattle directly in drinking water sources.<br>3. Discharging untreated poisonous chemical sewage from factories into waterways.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three accurate causes of water pollution identified",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Sound Environment • Neighborhood Noise Map",
        "q": "(a) What is noise pollution?<br>(b) List two everyday sources of harmful noise in a city, and two pleasant, natural sounds.",
        "ans": "<strong>Sound & Noise Concepts:</strong><br><strong>(a) Definition:</strong><br>• Noise pollution is any unwanted, loud, and harsh sound that causes disturbance, headache, sleep loss, and hearing damage to humans and animals.<br><br><strong>(b) Contrast:</strong><br>• <strong>Harmful Noise:</strong> Loud vehicular horns, blaring loudspeakers at night.<br>• <strong>Pleasant Natural Sounds:</strong> Birds chirping at dawn, rustling of leaves in gentle breeze.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear definition of noise pollution",
            "marks": "1.0 M"
          },
          {
            "key": "Two loud urban sources named",
            "marks": "1.0 M"
          },
          {
            "key": "Two pleasant natural sounds named",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Environmental Stewardship • Nature Pledge",
        "q": "Write a short 3-line Nature Pledge for your school morning assembly.",
        "ans": "<strong>Nature Pledge:</strong><br>1. I promise to treat all animals, birds, and trees with love, kindness, and respect.<br>2. I will never waste drinking water and will turn off dripping taps immediately.<br>3. I will keep my school and home clean, reduce plastic use, and plant green saplings.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three inspiring, actionable environmental commitments",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Air Quality • Vehicle Smoke",
        "q": "Why are electric vehicles (EVs) and bicycles better for city air than petrol or diesel cars?",
        "ans": "<strong>Green Transport:</strong><br>• Petrol and diesel engines burn fossil fuels and release thick black smoke, carbon monoxide, and toxic soot particles. Bicycles and electric vehicles produce zero tailpipe smoke, keeping the city air fresh and breathable.",
        "marks": 2,
        "rubric": [
          {
            "key": "Fossil fuel emissions versus zero emissions explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 6 ('Living in Harmony'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Living in Harmony'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Living in Harmony'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Urban Wildlife Conflict: The Glass Window Hazard",
      "text": "A newly built glass office building in town reports that dozens of sunbirds and kingfishers crash into the clear glass facade every week because the glass reflects surrounding trees and blue sky like an open path.",
      "question": "How can the building management and local children solve this hazard to live in harmony with urban birds?",
      "answer": "The bird collision problem occurs because birds perceive the glass reflection as continuous sky or foliage. To eliminate this hazard: (1) Apply frosted, patterned, or silhouette stickers (such as falcon decals or dense dot arrays spaced 5 cm apart) on external window panes so birds recognize a barrier. (2) Install outdoor blinds or lightweight nylon netting. (3) Turn off unnecessary bright internal lights at night to prevent disorienting migratory birds.",
      "rubric": "Understanding reflection hazards, practical non-invasive deterrents (window decals, netting), compassionate architectural ethics (4 Marks)."
    }
  },
  {
    "id": "ww7",
    "num": 7,
    "unit": "Theme 3: Water, Food and Well-being",
    "title": "Water — A Precious Gift",
    "subtitle": "Water Cycle, Sources of Fresh Water, Scarcity, Conservation Techniques, and Rainwater Harvesting",
    "concepts": [
      "Natural freshwater sources: Rain, rivers, lakes, ponds, springs, and underground wells.",
      "States of water: Solid (ice), liquid (water), and gas (water vapor) in the continuous water cycle.",
      "Everyday water wastage vs water conservation: Turning off running taps, bucket baths.",
      "Traditional and modern rainwater harvesting: Rooftop collection, baolis (stepwells), and percolation pits."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#eff6ff\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#1e40af\" text-anchor=\"middle\">Water Cycle &amp; Rooftop Rainwater Harvesting</text>\n      <!-- Sun -->\n      <circle cx=\"80\" cy=\"55\" r=\"16\" fill=\"#fde047\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><text x=\"80\" y=\"60\" font-size=\"12\" text-anchor=\"middle\">☀️</text>\n      <!-- Cloud & Rain -->\n      <path d=\"M170,55 Q190,40 215,55 Q235,45 250,60 Q260,75 240,80 L180,80 Z\" fill=\"#93c5fd\"/>\n      <line x1=\"190\" y1=\"85\" x2=\"185\" y2=\"105\" stroke=\"#0284c7\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n      <line x1=\"210\" y1=\"85\" x2=\"205\" y2=\"105\" stroke=\"#0284c7\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n      <line x1=\"230\" y1=\"85\" x2=\"225\" y2=\"105\" stroke=\"#0284c7\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n      <text x=\"215\" y=\"120\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Precipitation (Rain)</text>\n      <!-- House with Rainwater Harvesting -->\n      <polygon points=\"380,65 330,90 430,90\" fill=\"#ea580c\"/>\n      <rect x=\"345\" y=\"90\" width=\"70\" height=\"35\" fill=\"#fed7aa\"/>\n      <!-- Pipe & Underground Tank -->\n      <line x1=\"420\" y1=\"90\" x2=\"420\" y2=\"135\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n      <line x1=\"420\" y1=\"135\" x2=\"460\" y2=\"135\" stroke=\"#0284c7\" stroke-width=\"3\"/>\n      <rect x=\"460\" y=\"115\" width=\"45\" height=\"30\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n      <text x=\"482\" y=\"133\" font-size=\"10\" text-anchor=\"middle\">💧</text>\n      <text x=\"482\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"8\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Recharge Well</text>\n    </svg>",
    "questions": [
      {
        "category": "Water Science & The Water Cycle",
        "q": "Describe the three key stages of the water cycle: Evaporation, Condensation, and Precipitation.",
        "ans": "The continuous movement of water on Earth is governed by three primary stages:<br>1. <strong>Evaporation:</strong> Solar heat warms up surface water in oceans, lakes, and rivers, converting liquid water into invisible water vapor that rises into the atmosphere.<br>2. <strong>Condensation:</strong> As water vapor climbs higher into cooler atmospheric regions, it cools down and condenses into microscopic water droplets that cluster together to form fluffy clouds.<br>3. <strong>Precipitation:</strong> When clouds grow heavy and cool, the accumulated water droplets fall back to the ground as rain, hail, or snow, replenishing water bodies.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear physical explanation of evaporation and condensation",
            "marks": "2 Marks"
          },
          {
            "key": "Description of precipitation completing the hydrological cycle",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Water Conservation Habits",
        "q": "Suggest four practical habits that can save liters of clean water in a school every day.",
        "ans": "1. <strong>Fix Leaking Taps:</strong> Report dripping taps to school maintenance immediately; a slow drip wastes over 20 liters of water daily.<br>2. <strong>Turn Off Taps While Soap-Washing:</strong> Shut the tap while lathering hands with soap or brushing teeth instead of letting water run continuously.<br>3. <strong>Repurpose Leftover Drinking Water:</strong> Empty unused water from student water bottles into flowerbeds or potted plants rather than dumping it down the sink drain.<br>4. <strong>Install Aerators / Push-Taps:</strong> Use push-button taps that automatically stop flow after 5 seconds in restrooms.",
        "marks": 3,
        "rubric": [
          {
            "key": "Four distinct, actionable water-saving habits",
            "marks": "2 Marks"
          },
          {
            "key": "Practical applicability to school routines",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Rainwater Harvesting",
        "q": "What is rooftop rainwater harvesting and why is it essential in cities?",
        "ans": "<strong>Rooftop rainwater harvesting</strong> is the technique of capturing clean rainwater that falls on building roofs, passing it through sand-gravel filters, and diverting it into underground storage tanks or percolation recharge pits.<br>It is essential because it recharges declining groundwater levels, prevents city waterlogging during heavy monsoon downpours, and provides fresh water during drought seasons.",
        "marks": 2,
        "rubric": [
          {
            "key": "Definition of rooftop rainwater collection and filtration",
            "marks": "1 Mark"
          },
          {
            "key": "Benefits of groundwater recharge and flood prevention",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Water Sources • Natural vs Man-Made",
        "q": "Classify the following sources of water into 'Natural Sources' and 'Man-Made Sources':<br>Rain, Tube well, River, Overhead water tank, Lake, Hand pump, Ocean, Dam.",
        "ans": "<strong>Classification:</strong><br>• <strong>Natural Sources:</strong> Rain, River, Lake, Ocean.<br>• <strong>Man-Made Sources:</strong> Tube well, Overhead water tank, Hand pump, Dam.",
        "marks": 4,
        "rubric": [
          {
            "key": "All 4 natural sources correctly identified",
            "marks": "2.0 M"
          },
          {
            "key": "All 4 man-made sources correctly identified",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Rainwater Harvesting • Conservation Technique",
        "q": "What is Rainwater Harvesting, and how does it help a community facing water shortage?",
        "ans": "<strong>Rainwater Harvesting Explained:</strong><br>• Rainwater Harvesting is the method of collecting and storing pure rainwater that falls on rooftops and open grounds instead of letting it run off into dirty drains.<br>• <strong>Benefits:</strong> The collected water is filtered and stored in underground cisterns (tankas) for drinking, or channeled into recharge pits to raise the groundwater level for dry summer months.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear operational definition of collecting roof runoff",
            "marks": "1.5 M"
          },
          {
            "key": "Groundwater recharge and summer storage benefits",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Home Water Audit • Preventing Wastage",
        "q": "Suggest three practical ways in which a Class 3 student can save water at home every day.",
        "ans": "<strong>Water-Saving Habits:</strong><br>1. Turn off the tap while brushing teeth and use a mug of water for rinsing instead of running water.<br>2. Bathe using a bucket and mug instead of taking long overhead showers.<br>3. Reuse the wastewater from the kitchen water purifier (RO filter) to mop floors and water garden plants.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three actionable, realistic daily water conservation habits",
            "marks": "3.0 M"
          }
        ]
      },
      {
        "category": "Water Slogan • Creative Expression",
        "q": "Create a catchy slogan to encourage people to save water.",
        "ans": "<strong>Catchy Water Slogan:</strong><br>• <em>'Save Every Drop Today, To Keep Drought Away!'</em> (or <em>'जल है तो कल है — पानी की हर बूँद अनमोल है!'</em>)",
        "marks": 1,
        "rubric": [
          {
            "key": "Catchy, meaningful, and original slogan",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 7 ('Water — A Precious Gift'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Water — A Precious Gift'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Water — A Precious Gift'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Community Drought Mitigation: Reviving a Village Stepwell",
      "text": "A drought-prone village faced acute drinking water shortages during summers because tube wells had dried up. The village panchayat cleaned and restored an ancient 200-year-old stone stepwell (baoli) that had been abandoned and filled with plastic rubbish.",
      "question": "Analyze why traditional water structures like stepwells (baolis) are scientifically superior to deep borewells in drought-prone areas.",
      "answer": "Traditional stepwells (baolis) are architectural masterpieces of natural ecological engineering. Unlike deep borewells that recklessly extract fossil groundwater until aquifers collapse, stepwells rely on seasonal rainwater runoff and shallow seepage. The wide porous stone walls allow rainwater to infiltrate naturally, filter sediment through surrounding sandy soil layers, and maintain a perennial subterranean water pool without electricity or motors. Reviving baolis recharges local aquifers and provides community-controlled water resilience.",
      "rubric": "Traditional water wisdom vs deep borehole depletion, ecological percolation, sustainable community water management (4 Marks)."
    }
  },
  {
    "id": "ww8",
    "num": 8,
    "unit": "Theme 3: Water, Food and Well-being",
    "title": "Food We Eat",
    "subtitle": "Nutritional Food Groups, Balanced Diet, Seasonal Regional Foods, and Avoiding Food Waste",
    "concepts": [
      "The three primary food groups: Energy-giving foods, body-building foods, and protective foods.",
      "Components of a balanced thali: Cereals (rotis/rice), pulses (dal), seasonal vegetables, curds, and salad.",
      "Regional and cultural food varieties across India based on local climate and agriculture.",
      "Food hygiene: Washing vegetables before peeling, eating fresh cooked meals, and avoiding street junk food."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fefce8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#a16207\" text-anchor=\"middle\">A Balanced Indian Thali — Nourishment for Mind and Body</text>\n      <!-- Big Thali Plate -->\n      <circle cx=\"290\" cy=\"95\" r=\"55\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"4\"/>\n      <!-- Bowls on Thali -->\n      <!-- Dal (Protein) -->\n      <circle cx=\"265\" cy=\"70\" r=\"16\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"1.5\"/><text x=\"265\" y=\"74\" font-size=\"9\" font-weight=\"800\" fill=\"#9a3412\" text-anchor=\"middle\">Dal</text>\n      <!-- Sabzi (Vitamins) -->\n      <circle cx=\"315\" cy=\"70\" r=\"16\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"1.5\"/><text x=\"315\" y=\"74\" font-size=\"9\" font-weight=\"800\" fill=\"#15803d\" text-anchor=\"middle\">Sabzi</text>\n      <!-- Curd (Calcium) -->\n      <circle cx=\"250\" cy=\"110\" r=\"14\" fill=\"#ffffff\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><text x=\"250\" y=\"113\" font-size=\"8\" font-weight=\"800\" fill=\"#475569\" text-anchor=\"middle\">Dahi</text>\n      <!-- Roti / Rice (Carbs) -->\n      <circle cx=\"320\" cy=\"110\" r=\"16\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"1.5\"/><text x=\"320\" y=\"113\" font-size=\"8\" font-weight=\"800\" fill=\"#854d0e\" text-anchor=\"middle\">Roti</text>\n      <!-- Salad -->\n      <circle cx=\"290\" cy=\"100\" r=\"10\" fill=\"#fecdd3\"/><text x=\"290\" y=\"103\" font-size=\"7\" font-weight=\"800\" fill=\"#be123c\" text-anchor=\"middle\">Salad</text>\n      <!-- Food Groups Labels -->\n      <text x=\"80\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b45309\">1. Energy Giving</text>\n      <text x=\"80\" y=\"98\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#78350f\">Wheat, Rice, Jaggery, Ghee</text>\n      <text x=\"440\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#15803d\">2. Body Building</text>\n      <text x=\"440\" y=\"98\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"#166534\">Pulses, Paneer, Milk, Eggs</text>\n      <text x=\"290\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">3. Protective: Fresh Greens, Fruits &amp; Salads</text>\n    </svg>",
    "questions": [
      {
        "category": "Nutritional Classification",
        "q": "Classify our food into three major groups and explain the health benefits of each group.",
        "ans": "Our food is divided into three essential functional groups:<br>1. <strong>Energy-Giving Foods (Carbohydrates & Fats):</strong> Rice, wheat, potatoes, bananas, butter, and nuts provide steady stamina for running, studying, and physical play.<br>2. <strong>Body-Building Foods (Proteins):</strong> Pulses, milk, paneer, curd, chickpeas, and eggs supply essential building blocks to repair cells, build muscles, and help young children grow taller.<br>3. <strong>Protective Foods (Vitamins & Minerals):</strong> Fresh green vegetables (spinach, carrots) and citrus fruits (oranges, amla) build robust immune defenses to shield our bodies from infections, coughs, and illnesses.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear identification of three nutritional food groups",
            "marks": "1.5 Marks"
          },
          {
            "key": "Specific health benefits and daily food examples for each",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Healthy Eating Habits vs Junk Food",
        "q": "Why should we avoid eating packaged junk foods (chips, cold drinks, instant noodles) on a daily basis?",
        "ans": "Packaged junk foods contain excessive quantities of refined white flour (maida), unhealthy trans-fats, artificial preservatives, chemical colors, and refined sugar, while lacking dietary fiber, vitamins, and minerals. Regular consumption leads to dental cavities, childhood obesity, sluggish digestion, and weakened immunity.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of harmful components (maida, excess salt/sugar/trans-fats)",
            "marks": "1.5 Marks"
          },
          {
            "key": "Impact on physical vitality, teeth, and immunity",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Food Preservation & Anti-Waste",
        "q": "What can families do with leftover cooked food to prevent it from spoiling or being thrown in the garbage?",
        "ans": "1. <strong>Safe Refrigeration:</strong> Store leftover curries and rice in clean airtight containers inside the refrigerator and consume them within 24 hours.<br>2. <strong>Creative Culinary Repurposing:</strong> Transform leftover rotis into delicious vegetable rolls or bread upma, and use leftover boiled rice for lemon rice or vegetable fried rice.<br>3. <strong>Sharing with Those in Need:</strong> Pack excess untouched food hygienically and share it with community helpers or food distribution drives.",
        "marks": 2,
        "rubric": [
          {
            "key": "Practical storage and hygienic handling",
            "marks": "1 Mark"
          },
          {
            "key": "Creative culinary repurposing or community donation",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Food Origins • Plant vs Animal Sources",
        "q": "Classify the following food items into 'Obtained from Plants' and 'Obtained from Animals':<br>Milk, Rice, Honey, Apple, Egg, Spinach, Ghee, Mustard oil.",
        "ans": "<strong>Food Origin Classification:</strong><br>• <strong>Obtained from Plants:</strong> Rice (cereal), Apple (fruit), Spinach (leafy vegetable), Mustard oil (seeds).<br>• <strong>Obtained from Animals:</strong> Milk (cows/buffaloes), Honey (bees), Egg (hens), Ghee (clarified butter from milk).",
        "marks": 4,
        "rubric": [
          {
            "key": "Four correct plant-origin foods",
            "marks": "2.0 M"
          },
          {
            "key": "Four correct animal-origin foods",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Regional Indian Thalis • Diversity",
        "q": "Match each Indian region with its staple traditional food dish:<br>• Punjab: [Makki ki Roti & Sarson ka Saag, Dosa & Sambhar, Dal Baati Churma, Fish Curry & Rice]<br>• South India (Tamil Nadu): [Makki ki Roti & Sarson ka Saag, Dosa & Sambhar, Dal Baati Churma, Fish Curry & Rice]<br>• Rajasthan: [Makki ki Roti & Sarson ka Saag, Dosa & Sambhar, Dal Baati Churma, Fish Curry & Rice]<br>• West Bengal: [Makki ki Roti & Sarson ka Saag, Dosa & Sambhar, Dal Baati Churma, Fish Curry & Rice]",
        "ans": "<strong>Regional Food Matching:</strong><br>• <strong>Punjab:</strong> Makki ki Roti & Sarson ka Saag<br>• <strong>South India:</strong> Dosa & Sambhar (with coconut chutney)<br>• <strong>Rajasthan:</strong> Dal Baati Churma<br>• <strong>West Bengal:</strong> Fish Curry & Rice (Macher Jhol)",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct regional dish matched for all 4 states",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Fireless Cooking Activity • Sprouted Salad",
        "q": "Describe how to prepare a healthy sprouted moong salad without using fire or a gas stove.",
        "ans": "<strong>Fireless Sprouted Moong Salad:</strong><br>1. Take a cup of sprouted green moong beans in a mixing bowl.<br>2. Add finely chopped cucumber, tomato, and fresh coriander leaves.<br>3. Squeeze half a fresh lemon for tangy Vitamin C.<br>4. Sprinkle a pinch of salt and roasted cumin powder (chaat masala), mix well with a spoon, and serve fresh.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sprouts and chopped vegetables mentioned",
            "marks": "1.5 M"
          },
          {
            "key": "Lemon and spices seasoning without fire",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Food Preservation • Traditional Methods",
        "q": "Why do our grandmothers add a thick layer of mustard oil and salt when making mango pickles?",
        "ans": "<strong>Science of Pickling:</strong><br>• Salt draws out moisture and kills bacteria, while mustard oil forms an airtight barrier over the raw mangoes that blocks airborne microbes and fungi, preserving the pickle fresh for over a year.",
        "marks": 2,
        "rubric": [
          {
            "key": "Role of salt (drying) and oil (barrier) in food preservation",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 8 ('Food We Eat'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Food We Eat'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Food We Eat'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "School Mid-Day Meal Quality and Nutritional Balanced Plates",
      "text": "In a primary school, many students routinely leave green leafy vegetables and lentils on their plates, eating only plain rice and potato chips. The school health nurse notices frequent iron-deficiency fatigue and poor night vision among several students.",
      "question": "Design an attractive, child-friendly nutrition strategy to encourage Class 3 students to enjoy iron-rich greens, carrots, and lentils daily.",
      "answer": "To make nutritious foods exciting for young children: (1) <strong>Colorful Rainbow Plates:</strong> Challenge students to create a 'Rainbow Lunch' where their plate must feature at least three bright colors (orange carrots/papaya for Vitamin A, deep green spinach/fenugreek for iron, and yellow lentils for protein). (2) <strong>Interactive School Kitchen Garden:</strong> Allow children to sow, water, and harvest spinach and coriander leaves themselves; children take immense pride in eating food they grew. (3) <strong>Creative Cooking:</strong> Blend iron-rich spinach into colorful green rotis ('Hulk Parathas') or incorporate lentils into crunchy vegetable cutlets.",
      "rubric": "Understanding micronutrient deficiencies (Vitamin A and iron), creative food presentation, school gardens, behavioral nudges (4 Marks)."
    }
  },
  {
    "id": "ww9",
    "num": 9,
    "unit": "Theme 3: Water, Food and Well-being",
    "title": "Staying Healthy and Happy",
    "subtitle": "Personal Hygiene, Physical Exercise, Yoga Asanas, Adequate Sleep, and Mental Well-being",
    "concepts": [
      "Daily personal hygiene habits: Brushing teeth twice, bathing, washing hands with soap, clipping nails.",
      "Physical fitness: Outdoor sports, skipping, swimming, and basic yoga postures (Tadasana, Vrikshasana).",
      "Rest and recovery: 8 to 9 hours of uninterrupted night sleep for cognitive development.",
      "Emotional hygiene: Expressing feelings openly, practicing mindfulness breathing, and limiting screen time."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fdf2f8\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">Staying Healthy and Happy — Holistic Child Health</text>\n      <!-- Handwash -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#e0e7ff\" stroke=\"#4338ca\" stroke-width=\"2\"/><text x=\"80\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🧼🫧</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#3730a3\" text-anchor=\"middle\">Hand Hygiene</text>\n      <!-- Yoga Posture -->\n      <circle cx=\"200\" cy=\"80\" r=\"26\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"200\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🧘‍♀️</text>\n      <text x=\"200\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Yoga &amp; Exercise</text>\n      <!-- Deep Sleep -->\n      <circle cx=\"320\" cy=\"80\" r=\"26\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/><text x=\"320\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">🛌💤</text>\n      <text x=\"320\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">8-9 Hrs Sleep</text>\n      <!-- Happy Mind / Joy -->\n      <circle cx=\"440\" cy=\"80\" r=\"26\" fill=\"#fee2e2\" stroke=\"#e11d48\" stroke-width=\"2\"/><text x=\"440\" y=\"87\" font-size=\"20\" text-anchor=\"middle\">😊🎨</text>\n      <text x=\"440\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9f1239\" text-anchor=\"middle\">Emotional Well-being</text>\n    </svg>",
    "questions": [
      {
        "category": "Handwashing Protocol",
        "q": "What are the six critical steps of proper handwashing with soap, and when must we wash our hands?",
        "ans": "<strong>When to Wash:</strong> Before eating meals, after using the restroom, after playing outdoors with pets, and after coughing or blowing one's nose.<br><br><strong>6 Steps of Effective Handwashing (20 Seconds):</strong><br>1. Wet hands with clean running water and apply soap.<br>2. Rub palms together to create rich lather.<br>3. Rub the back of each hand with interlaced fingers.<br>4. Clean between fingers and under fingernails.<br>5. Grip and rotate thumbs in palms.<br>6. Rinse thoroughly and wipe dry with a clean personal towel.",
        "marks": 3,
        "rubric": [
          {
            "key": "Identification of critical handwashing times",
            "marks": "1 Mark"
          },
          {
            "key": "Detailed 6-step technique covering palms, fingers, and nails",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Sleep & Screen Time Balance",
        "q": "Why is adequate sleep essential for school children, and how does excessive mobile screen time harm health?",
        "ans": "During deep sleep (8 to 9 hours nightly), the child's brain consolidates memory, releases growth hormones, and rejuvenates tired muscles.<br><br><strong>Harmful Effects of Excessive Screen Time:</strong><br>• Blue light from phone and tablet screens disrupts melatonin production, making it difficult to fall asleep.<br>• Sitting motionless with digital gadgets causes poor spinal posture, weak vision (myopia), and obesity.<br>• It isolates children from real outdoor social play and creative hobbies.",
        "marks": 3,
        "rubric": [
          {
            "key": "Physiological importance of 8-9 hours sleep for memory/growth",
            "marks": "1.5 Marks"
          },
          {
            "key": "Physical and psychological hazards of screen addiction",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Posture and Spinal Health",
        "q": "Describe the correct sitting posture while reading or writing at a study desk.",
        "ans": "Keep the back straight with the spine resting against the chair backrest. Feet should touch the floor flatly, shoulders should remain relaxed, and the book should be kept at a distance of 30 cm from the eyes without hunching the neck forward.",
        "marks": 2,
        "rubric": [
          {
            "key": "Accurate physical alignment of spine, feet, and eye distance",
            "marks": "2 Marks"
          }
        ]
      },
      {
        "category": "Hygiene Protocol • WHO 6-Step Hand Washing",
        "q": "Explain why and how we should wash our hands with soap for at least 20 seconds. List three critical moments when hand washing is compulsory.",
        "ans": "<strong>Hand Hygiene Protocol:</strong><br>• Soap breaks down oily dirt and viral membranes, lifting disease-causing germs off our skin so running water can rinse them away.<br><br><strong>Three Compulsory Moments:</strong><br>1. <strong>Before eating meals or touching snacks.</strong><br>2. <strong>Immediately after using the toilet/washroom.</strong><br>3. <strong>After returning home from playing outdoors or touching pets.</strong>",
        "marks": 3,
        "rubric": [
          {
            "key": "Scientific rationale for soap destroying germs",
            "marks": "1.5 M"
          },
          {
            "key": "Three compulsory everyday moments named",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Oral Health • Dental Care Rules",
        "q": "Why do cavities form in teeth, and what two rules prevent tooth decay?",
        "ans": "<strong>Dental Hygiene:</strong><br>• <strong>Cause of Cavities:</strong> Sugary food particles stuck between teeth feed bacteria, which produce acids that erode tooth enamel and cause painful cavities.<br><br><strong>Two Preventive Rules:</strong><br>1. Brush teeth thoroughly twice daily (once in the morning and once before bedtime at night).<br>2. Rinse mouth with clean water after every meal or snack.",
        "marks": 3,
        "rubric": [
          {
            "key": "Bacteria and acid decay explained",
            "marks": "1.5 M"
          },
          {
            "key": "Two daily preventive dental rules",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Healthy Body Posture • Spine Health",
        "q": "What is good posture while sitting at a study desk? What happens if you slouch continuously?",
        "ans": "<strong>Posture & Ergonomics:</strong><br>• <strong>Good Posture:</strong> Sit upright with your back straight against the chair, shoulders relaxed, feet flat on the floor, and books at comfortable eye level.<br>• <strong>Harm of Slouching:</strong> Continuous bending and slouching strains neck muscles, causes chronic back pain, and compresses the ribcage, reducing breathing capacity.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct sitting posture described",
            "marks": "1.5 M"
          },
          {
            "key": "Health consequences of slouching explained",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Screen Time & Sleep • Mental Well-Being",
        "q": "Why should growing children sleep for 8 to 9 hours every night?",
        "ans": "<strong>Rest and Growth:</strong><br>• During deep sleep, the body produces human growth hormone, repairs tired muscles, consolidates memory and learning from the school day, and boosts the immune system against diseases.",
        "marks": 2,
        "rubric": [
          {
            "key": "Growth hormone and brain memory consolidation explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 9 ('Staying Healthy and Happy'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Staying Healthy and Happy'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Staying Healthy and Happy'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Mental Fitness: Calming Anxiety with Mindfulness Breathing",
      "text": "During the annual sports day running race, 8-year-old Rohan feels his heart beating very fast, his palms sweating, and his stomach churning with nervous fear right before the whistle blows.",
      "question": "What simple breathing exercise (Pranayama) and positive self-talk can Rohan use to calm his nervous system and perform happily?",
      "answer": "Rohan can practice the <strong>'4-4-4 Box Breathing Technique'</strong>: Inhale deeply through the nose for 4 counts, hold the breath gently for 4 counts, and exhale slowly through the mouth like blowing out a candle for 4 counts. Repeating this three times activates the parasympathetic nervous system, lowers the elevated heart rate, and calms muscle trembling. Combined with encouraging positive self-talk ('I have practiced well, I will do my best, and participating with joy is what truly matters'), Rohan can channel nervousness into focused energy.",
      "rubric": "Physiological understanding of anxiety, practical breathwork technique (Pranayama), positive emotional reframing (4 Marks)."
    }
  },
  {
    "id": "ww10",
    "num": 10,
    "unit": "Theme 4: Materials, Making and Environment",
    "title": "This World of Things",
    "subtitle": "Exploring Everyday Materials: Wood, Clay, Metal, Glass, Fabric, and Their Distinct Properties",
    "concepts": [
      "Classification of materials based on origin: Natural (wood, cotton, stone) and human-made (plastic, glass, nylon).",
      "Properties of materials: Hard vs soft, rough vs smooth, opaque vs transparent, waterproof vs absorbent.",
      "Matching properties to practical uses: Why umbrellas use waterproof fabric and cooking pots use metals.",
      "The lifecycle of materials: Mining, crafting, usage, wear and tear, and disposal."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f1f5f9\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0f172a\" text-anchor=\"middle\">Everyday Materials &amp; Their Unique Physical Properties</text>\n      <!-- Wood -->\n      <circle cx=\"80\" cy=\"80\" r=\"26\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"2\"/><text x=\"80\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🪵</text>\n      <text x=\"80\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Wood (Sturdy/Hard)</text>\n      <!-- Metal -->\n      <circle cx=\"190\" cy=\"80\" r=\"26\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"2\"/><text x=\"190\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🪓⚙️</text>\n      <text x=\"190\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#334155\" text-anchor=\"middle\">Metal (Conducts Heat)</text>\n      <!-- Glass -->\n      <circle cx=\"300\" cy=\"80\" r=\"26\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"300\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🪟🔍</text>\n      <text x=\"300\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Glass (Transparent)</text>\n      <!-- Fabric / Cotton -->\n      <circle cx=\"410\" cy=\"80\" r=\"26\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"2\"/><text x=\"410\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🧵👕</text>\n      <text x=\"410\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#be185d\" text-anchor=\"middle\">Fabric (Flexible/Soft)</text>\n      <!-- Clay / Ceramic -->\n      <circle cx=\"510\" cy=\"80\" r=\"26\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/><text x=\"510\" y=\"86\" font-size=\"18\" text-anchor=\"middle\">🏺</text>\n      <text x=\"510\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#854d0e\" text-anchor=\"middle\">Clay (Mouldable)</text>\n    </svg>",
    "questions": [
      {
        "category": "Material Properties & Suitability",
        "q": "Why are cooking frying pans made of metal (like iron or aluminum) while their handles are made of wood or Bakelite plastic?",
        "ans": "This design relies on heat conduction properties:<br>1. <strong>Metal Body (Pan):</strong> Metals are excellent conductors of heat. They absorb heat rapidly from the stove flame and distribute it evenly across the base to cook food quickly.<br>2. <strong>Wood / Bakelite Handle:</strong> Wood and Bakelite are bad conductors of heat (thermal insulators). They remain cool even when the pan is piping hot, allowing us to hold the pan safely without burning our hands.",
        "marks": 3,
        "rubric": [
          {
            "key": "Explanation of metal as a good thermal conductor",
            "marks": "1.5 Marks"
          },
          {
            "key": "Explanation of wood/Bakelite as an insulator for burn safety",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Transparency & Light Properties",
        "q": "Distinguish between transparent, translucent, and opaque materials with two practical household examples of each.",
        "ans": "• <strong>Transparent:</strong> Materials that allow light to pass through completely, enabling us to see clearly across them (e.g., Clear window glass, pure drinking water).<br>• <strong>Translucent:</strong> Materials that allow only partial light to pass through, creating blurred or hazy vision (e.g., Butter paper, frosted bathroom glass).<br>• <strong>Opaque:</strong> Materials that block light completely, casting a dark shadow and preventing vision across them (e.g., Wooden door, brick wall, metal plate).",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear physical definitions of transparent, translucent, and opaque",
            "marks": "1.5 Marks"
          },
          {
            "key": "Accurate household examples for each category",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Absorbency & Waterproofing",
        "q": "Why do we wear cotton clothes in hot summers and synthetic raincoats in monsoons?",
        "ans": "Cotton is a natural porous fiber that absorbs body sweat easily and allows air circulation to keep our skin cool through evaporation. Synthetic raincoat fabrics (like rubberized nylon or PVC) are completely waterproof and non-porous, preventing rain droplets from soaking through to our clothes.",
        "marks": 2,
        "rubric": [
          {
            "key": "Cotton's sweat absorption and breathability",
            "marks": "1 Mark"
          },
          {
            "key": "Raincoat fabric's waterproof barrier property",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Material Science • Everyday Properties",
        "q": "Match each material with its characteristic property:<br>• Glass: [Transparent and breaks easily, Flexible and waterproof, Hard and can rust, Soft and absorbs water]<br>• Rubber: [Transparent and breaks easily, Flexible and waterproof, Hard and can rust, Soft and absorbs water]<br>• Iron: [Transparent and breaks easily, Flexible and waterproof, Hard and can rust, Soft and absorbs water]<br>• Cotton cloth: [Transparent and breaks easily, Flexible and waterproof, Hard and can rust, Soft and absorbs water]",
        "ans": "<strong>Material Properties:</strong><br>• <strong>Glass:</strong> Transparent and brittle (breaks easily)<br>• <strong>Rubber:</strong> Flexible, elastic, and waterproof<br>• <strong>Iron:</strong> Hard, strong, and can rust if left wet<br>• <strong>Cotton cloth:</strong> Soft, breathable, and absorbs water",
        "marks": 4,
        "rubric": [
          {
            "key": "Correct matching for all 4 material properties",
            "marks": "4.0 M"
          }
        ]
      },
      {
        "category": "Float or Sink Experiment • Density",
        "q": "In an experiment testing buoyancy in a bucket of water:<br>(a) Why does an iron needle sink, but a hollow iron bowl float?<br>(b) Why does a dry sponge float initially but sink after some time?",
        "ans": "<strong>Buoyancy Physics:</strong><br><strong>(a) Iron Needle vs Bowl:</strong><br>• An iron needle is solid and dense, displacing very little water, so it sinks.<br>• A hollow iron bowl contains trapped air inside its curved shape, which makes its overall weight lighter than the large volume of water it pushes aside, allowing it to float.<br><br><strong>(b) Sponge Behavior:</strong><br>• A dry sponge has tiny open pores filled with air, making it very light so it floats.<br>• As water fills all the pores, displacing the air, the sponge becomes heavy and eventually sinks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Water displacement and air volume explained for bowl",
            "marks": "1.5 M"
          },
          {
            "key": "Pore air displacement explained for wet sponge",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Magnetic Properties • Materials Test",
        "q": "Which of the following items will be attracted to a magnet?<br>Iron paper clip, Wooden pencil, Steel safety pin, Plastic eraser, Copper coin.",
        "ans": "<strong>Magnetic Test:</strong><br>• <strong>Attracted to Magnet:</strong> Iron paper clip, Steel safety pin (contain iron/steel).<br>• <strong>Not Attracted:</strong> Wooden pencil, Plastic eraser, Copper coin (non-magnetic materials).",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct magnetic items identified",
            "marks": "1.5 M"
          },
          {
            "key": "Correct non-magnetic items identified",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Natural vs Synthetic Materials",
        "q": "Differentiate between natural materials and synthetic (man-made) materials with one example of each.",
        "ans": "<strong>Definitions & Examples:</strong><br>• <strong>Natural Material:</strong> Obtained directly from nature (plants, animals, earth) without chemical modification (e.g., <strong>Wood, Cotton, Wool, Clay</strong>).<br>• <strong>Synthetic Material:</strong> Created artificially by humans in factories through chemical processing (e.g., <strong>Plastic, Nylon, Polythene</strong>).",
        "marks": 2,
        "rubric": [
          {
            "key": "Clear contrast with valid examples",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 10 ('This World of Things'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'This World of Things'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'This World of Things'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Sustainable Material Substitution: Moving Beyond Single-Use Plastics",
      "text": "A town council notices that drainage pipes are repeatedly clogged with thin single-use plastic grocery bags, plastic straws, and thermocol plates, causing artificial floods during monsoon rain showers.",
      "question": "Apply your scientific understanding of material properties to recommend biodegradable, eco-friendly substitutes for plastic bags, cups, and plates.",
      "answer": "Plastic is synthetic, waterproof, and non-biodegradable; it chokes drains and persists in nature for hundreds of years. We can substitute plastic with materials that match functional needs while being completely compostable: (1) <strong>Jute and Cotton:</strong> Strong, reusable woven fibers for shopping bags. (2) <strong>Dried Areca Nut Palm Leaf (Pattal):</strong> Naturally pressed sturdy, leak-proof plates for community feasts that biodegrade into rich soil compost within weeks. (3) <strong>Terracotta Kulhads:</strong> Porous earthenware cups that impart a pleasant earthy aroma and break down safely back into natural clay soil. (4) <strong>Paper or Bamboo Straws:</strong> Organic plant fibers replacing plastic drinking tubes.",
      "rubric": "Critique of non-biodegradability, specific sustainable replacements (jute, areca palm leaves, clay kulhads), soil biodegradability (4 Marks)."
    }
  },
  {
    "id": "ww11",
    "num": 11,
    "unit": "Theme 4: Materials, Making and Environment",
    "title": "Making Things",
    "subtitle": "Hands-on Crafting: Pottery, Weaving, Origami Paper Folding, Carpentry, and Simple Tools",
    "concepts": [
      "The stages of traditional pottery: Digging clay, kneading dough, throwing on the wheel, drying, and kiln baking.",
      "Weaving fundamentals: Warp and weft threads intersecting on a handloom to produce woven fabric.",
      "The joy and geometry of paper folding (Origami): Making paper cups, boats, and hats without glue.",
      "Appreciation of skilled physical labor and the Dignity of Labor (shram-shradha) in our communities."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#fffbeb\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#92400e\" text-anchor=\"middle\">Making Things — Hands-on Pottery, Weaving &amp; Paper Crafts</text>\n      <!-- Potter's Wheel -->\n      <ellipse cx=\"100\" cy=\"95\" rx=\"36\" ry=\"12\" fill=\"#d97706\" stroke=\"#92400e\" stroke-width=\"2\"/>\n      <ellipse cx=\"100\" cy=\"75\" rx=\"18\" ry=\"16\" fill=\"#f59e0b\"/>\n      <text x=\"100\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#78350f\" text-anchor=\"middle\">Potter's Wheel (Chak)</text>\n      <!-- Handloom Weaving -->\n      <rect x=\"230\" y=\"60\" width=\"60\" height=\"45\" fill=\"#f8fafc\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <line x1=\"240\" y1=\"60\" x2=\"240\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n      <line x1=\"250\" y1=\"60\" x2=\"250\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n      <line x1=\"260\" y1=\"60\" x2=\"260\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n      <line x1=\"270\" y1=\"60\" x2=\"270\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n      <line x1=\"280\" y1=\"60\" x2=\"280\" y2=\"105\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n      <line x1=\"230\" y1=\"75\" x2=\"290\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <line x1=\"230\" y1=\"90\" x2=\"290\" y2=\"90\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n      <text x=\"260\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Weaving Loom (Tana-Bana)</text>\n      <!-- Origami Bird / Boat -->\n      <polygon points=\"420,65 390,95 450,95\" fill=\"#38bdf8\"/>\n      <polygon points=\"400,95 420,115 440,95\" fill=\"#0284c7\"/>\n      <text x=\"420\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#0369a1\" text-anchor=\"middle\">Paper Origami Boat</text>\n      <!-- Carpenter's Plane -->\n      <circle cx=\"515\" cy=\"80\" r=\"22\" fill=\"#fed7aa\" stroke=\"#c2410c\" stroke-width=\"1.5\"/><text x=\"515\" y=\"86\" font-size=\"16\" text-anchor=\"middle\">🪚🔨</text>\n      <text x=\"515\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#9a3412\" text-anchor=\"middle\">Woodwork</text>\n    </svg>",
    "questions": [
      {
        "category": "The Art of Pottery",
        "q": "What are the step-by-step stages involved in making an earthen pot (matka)?",
        "ans": "Making an earthen clay pot involves skilled artisanal steps:<br>1. <strong>Clay Preparation:</strong> Digging fine sticky clay from pond beds, filtering out gravel, and kneading it with water into smooth, pliable dough.<br>2. <strong>Spinning on the Wheel:</strong> Placing the clay lump on the center of the spinning potter's wheel (chak) and shaping the hollow pot using wet thumbs and palms.<br>3. <strong>Tapping with Mallet (Thapa):</strong> Beating the outer surface gently with a wooden paddle while supporting the inside with a stone anvil to widen the round belly.<br>4. <strong>Sun-Drying & Baking:</strong> Drying raw pots in the sun and firing them inside a brick kiln (bhatti) fueled with wood and husk so they turn strong, hard, and reddish-brown.",
        "marks": 3,
        "rubric": [
          {
            "key": "Sequential progression from kneading to wheel shaping",
            "marks": "1.5 Marks"
          },
          {
            "key": "Tapping and kiln firing for durability",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Weaving Fundamentals",
        "q": "What do the terms 'warp' and 'weft' mean in the process of weaving cloth?",
        "ans": "In textile weaving:<br>• <strong>Warp (Tana):</strong> The set of lengthwise parallel threads stretched tightly across the loom frame from top to bottom.<br>• <strong>Weft (Bana):</strong> The crosswise thread carried back and forth through a shuttle, passing over and under alternate warp yarns to lock them into tight woven fabric.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear description of longitudinal warp yarns",
            "marks": "1.5 Marks"
          },
          {
            "key": "Description of transverse weft yarns forming woven fabric",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Dignity of Labor",
        "q": "Why should we respect skilled workers like carpenters, tailors, potters, and cobblers?",
        "ans": "We must respect these artisans because they possess specialized technical skills, work diligently with their hands, and provide the indispensable daily necessities of civilized living—our clothes, furniture, footwear, and cooking utensils. Every honest occupation carries profound dignity (shram-shradha).",
        "marks": 2,
        "rubric": [
          {
            "key": "Appreciation of artisanal skills and indispensable daily goods",
            "marks": "1.5 Marks"
          },
          {
            "key": "Value of dignity of labor",
            "marks": "0.5 Marks"
          }
        ]
      },
      {
        "category": "Handicrafts & Tools • Artisans at Work",
        "q": "Match the craftsman with the utility item he creates and the primary raw material used:<br>• Potter (Kumhar): [Clay -> Earthen pots/diyas, Wood -> Chairs/tables, Cotton yarn -> Handloom cloth]<br>• Carpenter (Badhai): [Clay -> Earthen pots/diyas, Wood -> Chairs/tables, Cotton yarn -> Handloom cloth]<br>• Weaver (Bunkar): [Clay -> Earthen pots/diyas, Wood -> Chairs/tables, Cotton yarn -> Handloom cloth]",
        "ans": "<strong>Craftsmen and Utility Items:</strong><br>• <strong>Potter:</strong> Uses natural clay on a potter's wheel to create earthen pots (matkas), bowls, and festive diyas.<br>• <strong>Carpenter:</strong> Uses seasoned wood, saw, and chisels to make chairs, tables, doors, and window frames.<br>• <strong>Weaver:</strong> Uses cotton yarn on a handloom (khadi) to weave sarees, dupattas, and blankets.",
        "marks": 3,
        "rubric": [
          {
            "key": "Correct matching for Potter",
            "marks": "1.0 M"
          },
          {
            "key": "Correct matching for Carpenter",
            "marks": "1.0 M"
          },
          {
            "key": "Correct matching for Weaver",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "Paper Weaving Activity • Textile Model",
        "q": "Explain how to make a paper woven mat using two different colored sheets of paper.",
        "ans": "<strong>Paper Weaving Mat Guide:</strong><br>1. <strong>Base Sheet (Warp):</strong> Take Sheet 1 (blue), fold it in half, and cut parallel vertical slits 1 cm apart, leaving a 2 cm border uncut at the top edge.<br>2. <strong>Strips (Weft):</strong> Take Sheet 2 (yellow) and cut it completely into long strips 1 cm wide.<br>3. <strong>Weaving:</strong> Weave the yellow strips horizontally through the blue slits, alternating 'over one, under one'. For the next strip, alternate 'under one, over one'.<br>4. <strong>Finishing:</strong> Paste the strip ends along the border with glue to produce a colorful woven chequered pattern.",
        "marks": 3,
        "rubric": [
          {
            "key": "Cutting vertical slits on folded base sheet",
            "marks": "1.0 M"
          },
          {
            "key": "Alternating over-under weaving pattern described",
            "marks": "1.5 M"
          },
          {
            "key": "Gluing borders to secure mat",
            "marks": "0.5 M"
          }
        ]
      },
      {
        "category": "Evolution of Tools • Primitive to Modern",
        "q": "How have tools helped humans build shelter and live comfortably? Give two examples.",
        "ans": "<strong>Tools & Human Progress:</strong><br>1. <strong>Agricultural Tools:</strong> Plows, sickles, and tractors allowed humans to clear land, plant large crops, and produce abundant food instead of hunting constantly.<br>2. <strong>Construction Tools:</strong> Hammers, saws, levels, and cranes allowed humans to cut stone and timber to construct weatherproof multi-story houses.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two historical examples of tools improving life",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Craft Appreciation • Respecting Manual Work",
        "q": "Why is hand-woven cloth (Khadi) considered a symbol of self-reliance in India?",
        "ans": "<strong>Cultural Heritage:</strong><br>• Mahatma Gandhi promoted Khadi during India's freedom struggle to encourage villages to spin their own cotton yarn on the charkha, wear homemade clothes, boycott foreign mill cloth, and achieve economic dignity.",
        "marks": 2,
        "rubric": [
          {
            "key": "Gandhian philosophy of charkha and self-reliance explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 11 ('Making Things'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Making Things'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Making Things'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Hands-on Experiential Learning (SUPW): Making a Recycled Bird Feeder",
      "text": "During an art and craft activity, children are instructed to make useful everyday items from discarded domestic containers instead of purchasing expensive new plastic items.",
      "question": "Write step-by-step instructions for Class 3 children to create a functional bird feeder using a used cardboard juice carton and two wooden pencils.",
      "answer": "<strong>Materials Required:</strong> Empty 1-liter juice carton, two unsharpened wooden pencils, scissors, string, bird seeds.<br><br><strong>Step-by-Step Instructions:</strong><br>1. <strong>Rinse and Dry:</strong> Thoroughly wash the juice carton with clean water and let it air-dry completely.<br>2. <strong>Cut Feeding Windows:</strong> With adult supervision, cut two 3 cm square openings on opposite sides, about 4 cm above the carton base.<br>3. <strong>Insert Perches:</strong> Poke small holes just below each window and push the pencils straight through the carton to serve as perches for visiting sparrows.<br>4. <strong>Hang and Fill:</strong> Punch two small holes in the top folded flap, thread sturdy string through, fill the base with grain seeds, and hang the feeder on a shaded balcony branch.",
      "rubric": "Safety precautions, sequential practical crafting steps, upcycling discarded materials (4 Marks)."
    }
  },
  {
    "id": "ww12",
    "num": 12,
    "unit": "Theme 4: Materials, Making and Environment",
    "title": "Taking Charge of Waste",
    "subtitle": "Waste Segregation at Source, 3Rs (Reduce, Reuse, Recycle), Composting, and Swachh Bharat",
    "concepts": [
      "Categorization of waste: Biodegradable (wet waste) vs non-biodegradable (dry waste).",
      "Color-coded waste bins: Green bin for organic kitchen waste, blue bin for recyclable paper/plastic/metal.",
      "The 3Rs of ecological stewardship: Reduce consumption, reuse sturdy containers, recycle paper and plastic.",
      "Home and school composting: Transforming fruit peels and fallen garden leaves into rich organic manure."
    ],
    "svg": "<svg viewBox=\"0 0 580 160\" width=\"100%\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"100%\" height=\"100%\" fill=\"#f0fdf4\" rx=\"12\"/>\n      <text x=\"290\" y=\"24\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#166534\" text-anchor=\"middle\">Waste Segregation at Source — Green Bin &amp; Blue Bin (3Rs)</text>\n      <!-- Green Bin (Wet Waste) -->\n      <rect x=\"130\" y=\"55\" width=\"60\" height=\"65\" fill=\"#22c55e\" rx=\"6\"/>\n      <polygon points=\"125,55 160,45 195,55\" fill=\"#16a34a\"/>\n      <text x=\"160\" y=\"85\" font-size=\"20\" text-anchor=\"middle\">🍎🥬</text>\n      <text x=\"160\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">WET WASTE</text>\n      <text x=\"160\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803d\" text-anchor=\"middle\">Green: Composting</text>\n      <!-- Compost Arrow -->\n      <path d=\"M210,85 L260,85\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n      <!-- Blue Bin (Dry Waste) -->\n      <rect x=\"390\" y=\"55\" width=\"60\" height=\"65\" fill=\"#3b82f6\" rx=\"6\"/>\n      <polygon points=\"385,55 420,45 455,55\" fill=\"#2563eb\"/>\n      <text x=\"420\" y=\"85\" font-size=\"20\" text-anchor=\"middle\">📰📦</text>\n      <text x=\"420\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"800\" fill=\"#ffffff\" text-anchor=\"middle\">DRY WASTE</text>\n      <text x=\"420\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">Blue: Recycling</text>\n      <!-- Recycle Arrow -->\n      <path d=\"M470,85 L520,85\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n    </svg>",
    "questions": [
      {
        "category": "Waste Segregation at Source",
        "q": "What is the difference between wet waste and dry waste? Name three items that belong in each bin.",
        "ans": "<strong>1. Wet Waste (Biodegradable):</strong> Organic matter that decomposes naturally through the action of bacteria and earthworms.<br>• <strong>Items:</strong> Fruit peels, vegetable trimmings, leftover cooked food, tea leaves, fallen dry garden leaves.<br>• <strong>Bin Color:</strong> <strong>Green Bin</strong> (processed into organic compost manure).<br><br><strong>2. Dry Waste (Non-Biodegradable / Recyclable):</strong> Inorganic materials that do not decompose easily in soil.<br>• <strong>Items:</strong> Old newspapers, cardboard cartons, milk plastic pouches, metal tin cans, glass bottles.<br>• <strong>Bin Color:</strong> <strong>Blue Bin</strong> (sent to recycling factories).",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear scientific distinction between biodegradable and non-biodegradable",
            "marks": "1.5 Marks"
          },
          {
            "key": "Correct allocation of 3 items to green and blue bins",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "The 3Rs Hierarchy",
        "q": "Explain the '3Rs Principle' (Reduce, Reuse, Recycle) with one practical example of each from school life.",
        "ans": "1. <strong>Reduce (Cut Down Consumption):</strong> Buy only what you need. <em>Example:</em> Use both sides of every notebook page before starting a new notebook, and use refillable fountain pens rather than disposable single-use ballpoints.<br>2. <strong>Reuse (Use Again):</strong> Find new uses for containers instead of throwing them away. <em>Example:</em> Convert empty ice-cream tubs or plastic jars into stationery pencil holders or small flowerpots.<br>3. <strong>Recycle (Reprocess into New Goods):</strong> Send waste to recycling facilities. <em>Example:</em> Give old school textbooks and scrap paper to the local scrap dealer (kabadiwala) so paper mills can pulp them into recycled notebooks.",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear definitions of Reduce, Reuse, and Recycle",
            "marks": "1.5 Marks"
          },
          {
            "key": "Realistic, child-accessible school life examples for each R",
            "marks": "1.5 Marks"
          }
        ]
      },
      {
        "category": "Home & Garden Composting",
        "q": "Why is burning dry fallen leaves and municipal garbage illegal and hazardous to health?",
        "ans": "Burning dry leaves and mixed garbage releases choking particulate matter (PM2.5), carbon monoxide, and cancer-causing dioxins that cause acute asthma attacks and air pollution. Instead of burning, dry leaves should be buried in a garden pit to decompose into rich organic compost fertilizer.",
        "marks": 2,
        "rubric": [
          {
            "key": "Harmful emissions and respiratory health hazards",
            "marks": "1 Mark"
          },
          {
            "key": "Composting as the healthy, lawful alternative",
            "marks": "1 Mark"
          }
        ]
      },
      {
        "category": "Waste Segregation • Green vs Blue Bins",
        "q": "Classify the following waste into the Green Bin (Wet/Biodegradable) and Blue Bin (Dry/Recyclable):<br>Banana peel, Broken glass bottle, Vegetable scraps, Plastic juice wrapper, Used tea leaves, Old newspaper.",
        "ans": "<strong>Waste Segregation:</strong><br>• <strong>Green Bin (Wet / Biodegradable Waste):</strong><br>  1. Banana peel<br>  2. Vegetable scraps<br>  3. Used tea leaves<br>  <em>(These rot naturally and turn into nutrient-rich compost).</em><br><br>• <strong>Blue Bin (Dry / Recyclable Waste):</strong><br>  1. Broken glass bottle<br>  2. Plastic juice wrapper<br>  3. Old newspaper<br>  <em>(These can be cleaned, melted, or pulped for recycling).</em>",
        "marks": 4,
        "rubric": [
          {
            "key": "Three correct wet biodegradable items in Green Bin",
            "marks": "2.0 M"
          },
          {
            "key": "Three correct dry recyclable items in Blue Bin",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "The 3 R's • Environmental Action",
        "q": "Explain the three R's of waste management: Reduce, Reuse, Recycle with one practical example of each.",
        "ans": "<strong>The 3 R's Explained:</strong><br>1. <strong>Reduce (घटाना):</strong> Cut down on waste generated (e.g., Carry a reusable cloth bag to the market instead of taking new plastic bags).<br>2. <strong>Reuse (पुनः उपयोग):</strong> Use items multiple times before throwing them away (e.g., Wash plastic ice-cream tubs to store crayons, buttons, or small plants).<br>3. <strong>Recycle (पुनर्चक्रण):</strong> Processing used waste materials into fresh new items in factories (e.g., Giving old newspapers to the raddiwala to be pulped into fresh cardboard and paper).",
        "marks": 3,
        "rubric": [
          {
            "key": "Clear definition and example for Reduce",
            "marks": "1.0 M"
          },
          {
            "key": "Clear definition and example for Reuse",
            "marks": "1.0 M"
          },
          {
            "key": "Clear definition and example for Recycle",
            "marks": "1.0 M"
          }
        ]
      },
      {
        "category": "School Composting • Nutrient Cycle",
        "q": "How does a school compost pit turn organic food waste into rich garden manure?",
        "ans": "<strong>Composting Process:</strong><br>• Leftover fruit peels, fallen leaves, and vegetable scraps are placed in a shaded pit in layers with soil and sprinkled with water.<br>• Beneficial soil microorganisms, fungi, and earthworms feed on this organic waste, breaking it down naturally over 4 to 6 weeks into rich, dark, earthy manure that nourishes plants.",
        "marks": 3,
        "rubric": [
          {
            "key": "Layering waste with soil and water",
            "marks": "1.5 M"
          },
          {
            "key": "Microorganisms and worms creating dark compost",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Say No to Single-Use Plastic",
        "q": "Why are single-use plastic bags harmful when swallowed by stray cows on roadsides?",
        "ans": "<strong>Harm to Stray Animals:</strong><br>• Cows smell leftover food scraps thrown inside polythene bags and swallow the entire plastic bag. Plastic cannot be digested; it forms a heavy, toxic lump inside the animal's stomach, blocking digestion and leading to painful illness or death.",
        "marks": 2,
        "rubric": [
          {
            "key": "Plastic choking stomach and preventing digestion explained",
            "marks": "2.0 M"
          }
        ]
      },
      {
        "category": "Find Out & Write • Environmental Observation",
        "q": "In Chapter 12 ('Taking Charge of Waste'), what key natural elements or community roles are highlighted? List three observations.",
        "ans": "<strong>Observations:</strong><br>1. <strong>Interdependence:</strong> Plants, animals, and humans depend closely on each other for food, oxygen, and shelter.<br>2. <strong>Community Helpers:</strong> People in our neighbourhood perform essential services (farmers, sanitation workers, doctors, teachers).<br>3. <strong>Resource Conservation:</strong> Water, soil, and clean air are precious gifts that must not be polluted or wasted.",
        "marks": 3,
        "rubric": [
          {
            "key": "Interdependence observed",
            "marks": "1 M"
          },
          {
            "key": "Community helpers recognized",
            "marks": "1 M"
          },
          {
            "key": "Conservation awareness",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Discuss & Share • Classroom Activity",
        "q": "Discuss with your classmates: How does the change of seasons impact the food we eat, clothes we wear, and activities in 'Taking Charge of Waste'?",
        "ans": "<strong>Seasonal Impact:</strong><br>• <strong>Summer:</strong> We wear light cotton clothes, drink lots of water and fresh juices, and eat fruits like mangoes and watermelons.<br>• <strong>Winter:</strong> We wear warm woollens, enjoy hot soups and nuts, and sit in the sun.<br>• <strong>Monsoon:</strong> We use umbrellas and raincoats, and enjoy hot pakoras while taking care to avoid stagnant water.",
        "marks": 3,
        "rubric": [
          {
            "key": "Summer adaptations",
            "marks": "1 M"
          },
          {
            "key": "Winter adaptations",
            "marks": "1 M"
          },
          {
            "key": "Monsoon adaptations",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Think & Reflect • Environmental Care",
        "q": "What simple daily action can you and your family take to reduce waste and protect nature as suggested in 'Taking Charge of Waste'?",
        "ans": "<strong>Daily Actions:</strong><br>1. <strong>Segregate Waste:</strong> Keep green dustbins for wet biodegradable kitchen waste and blue dustbins for dry recyclable plastic/paper.<br>2. <strong>Avoid Single-Use Plastic:</strong> Carry cloth bags for vegetable shopping and refill reusable steel water bottles.",
        "marks": 2,
        "rubric": [
          {
            "key": "Waste segregation explained",
            "marks": "1 M"
          },
          {
            "key": "Avoiding single-use plastics",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Activity • Classification & Grouping",
        "q": "Classify the following items into Living Things and Non-Living Things: Neem tree, School bus, Butterfly, River stone, Honeybee, Wooden table.",
        "ans": "<strong>Classification:</strong><br>• <strong>Living Things:</strong> Neem tree, Butterfly, Honeybee (they breathe, grow, and reproduce).<br>• <strong>Non-Living Things:</strong> School bus, River stone, Wooden table (they do not grow or breathe).",
        "marks": 3,
        "rubric": [
          {
            "key": "Living things identified correctly",
            "marks": "1.5 M"
          },
          {
            "key": "Non-living things identified correctly",
            "marks": "1.5 M"
          }
        ]
      },
      {
        "category": "Field Exploration • Plants in Neighbourhood",
        "q": "Look closely at leaves of different plants around your school. How do they differ from one another in shape, colour, and texture?",
        "ans": "<strong>Leaf Observations:</strong><br>• <strong>Shape:</strong> Banana leaves are broad and long, peepal leaves have a pointed tip, and pine needles are thin and pointy.<br>• <strong>Colour:</strong> Leaves vary from light yellow-green to dark emerald green, and some crotons have red or purple spots.<br>• <strong>Texture:</strong> Lotus leaves feel waxy, rose leaves feel soft with serrated margins, and hibiscus leaves feel slightly rough.",
        "marks": 3,
        "rubric": [
          {
            "key": "Difference in shape",
            "marks": "1 M"
          },
          {
            "key": "Difference in colour",
            "marks": "1 M"
          },
          {
            "key": "Difference in texture",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Health & Hygiene • Good Habits",
        "q": "Why must we wash our hands with soap before eating and after using the toilet? Describe the correct 6-step method.",
        "ans": "<strong>Importance & Method:</strong><br>• Washing with soap removes invisible disease-causing germs and bacteria.<br>• <strong>Steps:</strong> Wet hands, apply soap, rub palms together, wash backs of hands, clean between fingers and under nails, rinse thoroughly under running water, and dry with a clean towel.",
        "marks": 2,
        "rubric": [
          {
            "key": "Reason for washing hands",
            "marks": "1 M"
          },
          {
            "key": "Steps described",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Water Conservation • Every Drop Counts",
        "q": "List three practical ways to save drinking water at home and in school.",
        "ans": "<strong>Water Saving Ways:</strong><br>1. Turn off the tap tightly while brushing teeth instead of letting water run.<br>2. Use a bucket and mug for bathing rather than a shower.<br>3. Pour leftover water from drinking bottles into plant pots instead of draining it away.",
        "marks": 3,
        "rubric": [
          {
            "key": "Three valid water conservation methods",
            "marks": "3 M"
          }
        ]
      },
      {
        "category": "Animal Empathy • Coexistence",
        "q": "How can we help birds and stray animals during the hot summer season?",
        "ans": "<strong>Helping Summer Animals:</strong><br>• Place an earthen clay bowl filled with clean fresh water on the terrace, balcony, or under a tree for thirsty birds.<br>• Keep a bowl of water in the shade outside the house for community dogs and cats.<br>• Never disturb bird nests or throw stones at sleeping animals.",
        "marks": 2,
        "rubric": [
          {
            "key": "Clay water bowls for birds",
            "marks": "1 M"
          },
          {
            "key": "Kind treatment and shade",
            "marks": "1 M"
          }
        ]
      },
      {
        "category": "Community Living • Festivals and Food",
        "q": "Name two traditional Indian festivals and describe the special food items prepared and shared during these celebrations.",
        "ans": "<strong>Festivals and Traditional Foods:</strong><br>1. <strong>Eid:</strong> Families prepare and share sweet <em>Sevaiyan</em> (vermicelli pudding) and biryani with neighbours.<br>2. <strong>Holi:</strong> People celebrate spring by sharing traditional <em>Gujiyas</em> and refreshing thandai.<br>3. <strong>Diwali:</strong> Families distribute homemade <em>Laddoos</em>, kaju katli, and savoury namkeens.",
        "marks": 2,
        "rubric": [
          {
            "key": "Two festivals named with corresponding special food",
            "marks": "2 M"
          }
        ]
      },
      {
        "category": "Review Questions • True or False",
        "q": "State True or False:<br>(a) Plants take in carbon dioxide and give out oxygen during daytime.<br>(b) Rainwater harvesting means collecting and storing rainwater for future use.<br>(c) Burning dry leaves and plastic in open air keeps the environment healthy.",
        "ans": "<strong>Answers:</strong><br>• (a) <strong>True:</strong> Photosynthesis produces oxygen.<br>• (b) <strong>True:</strong> Rainwater harvesting replenishes groundwater.<br>• (c) <strong>False:</strong> Burning releases toxic smoke and causes severe air pollution. Dry leaves should be composted into organic manure.",
        "marks": 3,
        "rubric": [
          {
            "key": "True, True, False with explanations",
            "marks": "3 M"
          }
        ]
      }
    ],
    "cbq": {
      "title": "Clean School Campus Initiative: Establishing a Zero-Waste Classroom",
      "text": "The student council of Class 3 finds that every day after recess, classroom wastebaskets are overflowing with plastic biscuit wrappers, half-eaten sandwiches, crushed pencil shavings, and crumpled drawing sheets.",
      "question": "Design a comprehensive 4-step 'Zero-Waste Classroom Campaign' to make your classroom a model of environmental cleanliness.",
      "answer": "The student council can implement a 4-step actionable campaign: (1) <strong>Two-Bin Color Coding:</strong> Install separate Green (wet food leftovers) and Blue (paper, pencil shavings) bins in the classroom doorway with picture labels. (2) <strong>No-Wrapper Lunch Challenge:</strong> Encourage parents to pack homemade rotis and fruits in reusable steel lunchboxes and cloth napkins, eliminating plastic cling-film and chip packets. (3) <strong>Classroom Scrap Paper Box:</strong> Maintain a 'One-Side Clean' cardboard tray where sheets blank on one side are stored for rough calculations and sketches before disposal. (4) <strong>Classroom Compost Pit:</strong> Empty the green bin daily into the school compost pit to fertilize the school garden plants.",
      "rubric": "Source segregation, reduction of single-use wrappers, paper upcycling box, link to school composting (4 Marks)."
    }
  }
];

module.exports = { wondrousWorldChapters };
