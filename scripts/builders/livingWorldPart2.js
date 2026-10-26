// scripts/builders/livingWorldPart2.js
// Class 2 EVS Track 1 (NEP 2020 Integrated): Our Living World & Nature
// Chapters 7 to 12: 100% Authentic NCERT EVS Questions with Step-by-Step Marking Rubrics

const livingWorldPart2 = [
  {
    id: "lwn7",
    num: 7,
    unit: "Unit 3: Sustaining Life & Health",
    title: "Clothes for Different Seasons",
    subtitle: "Cotton in Summer, Woolen in Winter, Raincoats in Monsoon",
    concepts: ["Need for Clothes (Weather, Dust, Insect Bites)", "Seasonal Clothing (Summer, Winter, Rainy)", "Fibers: Natural (Cotton, Wool, Silk) vs Synthetic", "Uniforms and Traditional Attire"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fef9c3, #fef08a);border-radius:12px;width:100%;height:auto;">
      <path d="M 60 70 L 80 50 L 110 65 L 140 50 L 160 70 L 145 90 L 135 85 L 135 150 L 85 150 L 85 85 L 75 90 Z" fill="#3b82f6"/>
      <path d="M 180 80 Q 210 50 240 80 L 225 150 L 195 150 Z" fill="#ef4444"/>
      <line x1="210" y1="50" x2="210" y2="150" stroke="#fef08a" stroke-width="4"/>
      <text x="150" y="30" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#854d0e">Clothes for Different Seasons</text>
    </svg>`,
    cbq: {
      context: "In the month of January in Delhi, temperatures dropped to 5°C. Rohan wanted to wear a thin half-sleeved cotton shirt and shorts to go to the park. His mother stopped him and asked him to wear a woolen sweater, cap, and warm trousers.",
      question: "Why did Rohan's mother insist on woolen clothes, and what would happen if he went out in summer clothes during winter?",
      answer: "Mother insisted on woolen clothes because wool traps air between its fibers, which prevents body heat from escaping and keeps the body warm. If Rohan went out in thin cotton clothes, he would feel extreme cold, shiver, and could catch a severe chill, cough, or fever.",
      rubric: [
        { key: "Explanation of wool trapping body heat", marks: 1.5 },
        { key: "Health risks of wearing summer clothes in winter", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "Why do we wear clothes? State three reasons.",
        ans: "We wear clothes to:\n1. Protect our body from severe heat, cold winds, and rain.\n2. Protect our skin from dust, dirt, and insect bites.\n3. Look neat, smart, and presentable.",
        marks: 3,
        rubric: [
          { key: "Protection from weather elements", marks: 1 },
          { key: "Protection from dust and insects", marks: 1 },
          { key: "Neat and smart appearance", marks: 1 }
        ]
      },
      {
        category: "Summer Clothing",
        q: "What type of clothes do we wear in summer, and why?",
        ans: "In summer, we wear light-colored, loose cotton clothes. Cotton clothes absorb sweat and allow air to circulate freely, keeping our body cool and comfortable.",
        marks: 2,
        rubric: [
          { key: "Light-colored cotton clothes", marks: 1 },
          { key: "Sweat absorption and cooling reason", marks: 1 }
        ]
      },
      {
        category: "Winter Clothing",
        q: "Where do we get wool from, and what clothes do we make from it?",
        ans: "We get wool from the soft fleece (hair) of sheep, goats, and camels. We knit sweaters, cardigans, mufflers, shawls, and woolen caps from it.",
        marks: 2,
        rubric: [
          { key: "Source: sheep/goat fleece", marks: 1 },
          { key: "Examples: sweaters, caps, shawls", marks: 1 }
        ]
      },
      {
        category: "Monsoon Protection",
        q: "Name two items we use to stay dry when it rains heavily.",
        ans: "Two items used in monsoon:\n1. Raincoat with a hood\n2. Umbrella (and rubber gumboots).",
        marks: 2,
        rubric: [
          { key: "Raincoat and umbrella/gumboots", marks: 2 }
        ]
      },
      {
        category: "Silk Clothes",
        q: "Where does silk come from, and when do people usually wear silk clothes?",
        ans: "Silk comes from the cocoon spun by the silkworm insect. Silk is smooth and shiny, so people usually wear silk sarees and kurtas during festivals, weddings, and special celebrations.",
        marks: 2,
        rubric: [
          { key: "Silkworm cocoon source", marks: 1 },
          { key: "Festivals/weddings use", marks: 1 }
        ]
      },
      {
        category: "Uniforms in Daily Life",
        q: "What is a uniform? Name three professionals who wear special uniforms.",
        ans: "A uniform is a special set of identical clothes worn by members of an organization, school, or profession.\nProfessionals who wear uniforms:\n1. Doctors and Nurses (white coats)\n2. Police officers (khaki uniform)\n3. Pilots and Firefighters (or school students).",
        marks: 3,
        rubric: [
          { key: "Uniform definition", marks: 1 },
          { key: "Two valid professionals with uniform description", marks: 2 }
        ]
      },
      {
        category: "Natural vs Synthetic Fibers",
        q: "What are natural fibers and synthetic fibers? Give one example of each.",
        ans: "• Natural Fibers: Obtained from plants or animals (e.g., Cotton from cotton plant, Wool from sheep).\n• Synthetic Fibers: Man-made fibers produced in factories from chemicals (e.g., Nylon, Polyester).",
        marks: 2,
        rubric: [
          { key: "Natural fiber with example", marks: 1 },
          { key: "Synthetic fiber with example", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the season with the appropriate cloth/item:\n(a) Summer -> (i) Woolen gloves\n(b) Winter -> (ii) Cotton frock\n(c) Rainy -> (iii) Silk sherwani\n(d) Wedding -> (iv) Waterproof gumboots",
        ans: "(a) Summer -> (ii) Cotton frock\n(b) Winter -> (i) Woolen gloves\n(c) Rainy -> (iv) Waterproof gumboots\n(d) Wedding -> (iii) Silk sherwani.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Cotton grows inside pods on cotton plants.\n(b) Dark-colored clothes keep us cool in hot summer months.\n(c) We should always wear clean and well-ironed clothes.",
        ans: "(a) True\n(b) False (Dark clothes absorb heat; light clothes keep us cool)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct statement", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) Wool keeps our body ________ (cool / warm) in winter.\n(b) Raincoats are made of ________ (waterproof / cotton) material.\n(c) We get silk thread from the ________ (silkworm / spider).",
        ans: "(a) warm\n(b) waterproof\n(c) silkworm.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Care of Clothes",
        q: "How should we care for our clothes so they last longer?",
        ans: "We should:\n1. Wash dirty clothes regularly with soap or detergent.\n2. Dry them in gentle sunlight and iron them properly.\n3. Keep woolens with neem leaves or mothballs to protect them from insects.",
        marks: 3,
        rubric: [
          { key: "Washing and drying", marks: 1 },
          { key: "Ironing", marks: 1 },
          { key: "Protecting woolens with mothballs", marks: 1 }
        ]
      },
      {
        category: "Leather Products",
        q: "What items of clothing are made of leather, and why should cruelty to animals for leather be avoided?",
        ans: "Shoes, belts, and jackets are often made from leather. We should avoid cruelty and use eco-friendly faux leather so animals are not killed for fashion.",
        marks: 2,
        rubric: [
          { key: "Shoes/belts/jackets", marks: 1 },
          { key: "Ethical concern against animal killing", marks: 1 }
        ]
      },
      {
        category: "Traditional Costumes",
        q: "Name two traditional dresses worn in different states of India.",
        ans: "1. Saree and Kurta-Pajama (widely across India)\n2. Ghagra-Choli (in Rajasthan and Gujarat) or Phiran (in Kashmir).",
        marks: 2,
        rubric: [{ key: "Two traditional dresses with state context", marks: 2 }]
      },
      {
        category: "Weaving and Tailoring",
        q: "What does a weaver do, and what does a tailor do?",
        ans: "• Weaver: Weaves yarn/thread into cloth on a loom.\n• Tailor: Cuts and stitches the woven cloth into shirts, frocks, and trousers using a sewing machine.",
        marks: 2,
        rubric: [
          { key: "Weaver's role", marks: 1 },
          { key: "Tailor's role", marks: 1 }
        ]
      },
      {
        category: "Good Manners & Hygiene",
        q: "Why should we change our socks and undergarments every day?",
        ans: "Socks and undergarments absorb sweat and body odor; changing them daily prevents fungal infections, rashes, and bad smell.",
        marks: 1,
        rubric: [{ key: "Prevents infection, rashes, and odor", marks: 1 }]
      }
    ]
  },
  {
    id: "lwn8",
    num: 8,
    unit: "Unit 3: Sustaining Life & Health",
    title: "Fresh Air, Sunlight & Cleanliness",
    subtitle: "Breathing Clean Air, Morning Sun, Bathing and Brushing",
    concepts: ["Composition of Clean Air (Oxygen)", "Need for Sunlight and Vitamin D", "Personal Hygiene (Bathing, Brushing, Trimming Nails)", "Sources of Air Pollution and Prevention"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #f0fdfa, #ccfbf1);border-radius:12px;width:100%;height:auto;">
      <circle cx="80" cy="70" r="30" fill="#facc15"/>
      <path d="M 140 180 Q 150 120 160 80" stroke="#14b8a6" stroke-width="4" fill="none"/>
      <ellipse cx="160" cy="70" rx="15" ry="25" fill="#2dd4bf"/>
      <path d="M 120 60 Q 170 40 220 70 Q 250 90 200 110" stroke="#0ea5e9" stroke-width="3" stroke-linecap="round" fill="none"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#0f766e">Fresh Air, Sunlight & Cleanliness</text>
    </svg>`,
    cbq: {
      context: "Arjun keeps his bedroom windows closed all the time with heavy curtains. He wakes up late at 10 AM, stays indoors all day, and plays video games. He often complains of headaches, lethargy, and feels dull.",
      question: "Why is Arjun feeling dull, and what two natural remedies will improve his energy and health?",
      answer: "Arjun is deprived of fresh moving air and natural morning sunlight, which causes stale air breathing, lack of oxygen, and vitamin D deficiency. He should:\n1. Open his bedroom windows every morning to allow cross-ventilation and sunlight.\n2. Wake up early and spend at least 30 minutes exercising or playing in the morning sun.",
      rubric: [
        { key: "Identifying lack of fresh air and sunlight", marks: 1.5 },
        { key: "Suggesting ventilation and morning outdoor play", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "Can we see air? How do we know that air is present all around us?",
        ans: "No, we cannot see air because it is invisible, odorless, and colorless. We know air is present because we can feel it when it blows as wind, moves tree leaves, and flies our kite.",
        marks: 2,
        rubric: [
          { key: "Air is invisible/colorless", marks: 1 },
          { key: "We feel it when it moves as wind", marks: 1 }
        ]
      },
      {
        category: "Breathing Clean Air",
        q: "Why do living beings need to breathe clean, fresh air?",
        ans: "Living beings need clean air because it contains oxygen, which our lungs absorb to produce energy from food. Breathing fresh air keeps our lungs healthy and minds active.",
        marks: 2,
        rubric: [
          { key: "Contains oxygen needed by lungs", marks: 1 },
          { key: "Produces energy and keeps mind alert", marks: 1 }
        ]
      },
      {
        category: "Benefits of Sunlight",
        q: "Why is morning sunlight beneficial for growing children?",
        ans: "Morning sunlight helps our skin synthesize Vitamin D, which is essential for strong bones and teeth. Sunlight also kills harmful germs and dispels mold.",
        marks: 2,
        rubric: [
          { key: "Produces Vitamin D for strong bones", marks: 1 },
          { key: "Kills germs and brightens mood", marks: 1 }
        ]
      },
      {
        category: "Daily Hygiene Routine",
        q: "List four daily habits that maintain personal cleanliness and hygiene.",
        ans: "Four daily cleanliness habits:\n1. Brush teeth twice daily (morning and before sleeping).\n2. Take a bath daily with clean water and soap.\n3. Wash hands with soap before meals and after using the toilet.\n4. Trim fingernails regularly with a nail clipper.",
        marks: 4,
        rubric: [
          { key: "1 mark per valid hygiene habit", marks: 4 }
        ]
      },
      {
        category: "Dental Care",
        q: "What happens if we do not brush our teeth properly?",
        ans: "Food particles get stuck between teeth, causing bacteria to produce acid. This leads to yellow plaque, bad breath, tooth decay, and painful cavities.",
        marks: 2,
        rubric: [
          { key: "Food particles stuck / bacteria attack", marks: 1 },
          { key: "Bad breath and cavities", marks: 1 }
        ]
      },
      {
        category: "Nail Hygiene",
        q: "Why should we never bite our nails, and why must they be trimmed short?",
        ans: "Dirt and germs collect under long nails. Biting nails transfers these germs directly into our stomach, causing diarrhea, stomach worms, and infections.",
        marks: 2,
        rubric: [
          { key: "Dirt and germs collect under nails", marks: 1 },
          { key: "Ingestion causes stomach infections/worms", marks: 1 }
        ]
      },
      {
        category: "Air Pollution Sources",
        q: "Name two things that pollute the air we breathe.",
        ans: "Two sources of air pollution:\n1. Black smoke released from cars, buses, and motorbikes.\n2. Smoke from factory chimneys, burning of dry garbage, and bursting firecrackers.",
        marks: 2,
        rubric: [
          { key: "Vehicle exhaust smoke", marks: 1 },
          { key: "Factory smoke or burning garbage/crackers", marks: 1 }
        ]
      },
      {
        category: "Plants Purify Air",
        q: "How do green plants and trees help in purifying our air?",
        ans: "Plants take in harmful carbon dioxide during the daytime and release fresh, life-giving oxygen through their leaves, acting as nature's green air purifiers.",
        marks: 2,
        rubric: [
          { key: "Take in carbon dioxide", marks: 1 },
          { key: "Release oxygen", marks: 1 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Moving air is called wind.\n(b) We should breathe in through our mouth rather than our nose.\n(c) Wearing a mask in heavy smoke protects our lungs.",
        ans: "(a) True\n(b) False (We should breathe through our nose because hair in the nose filters dust)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) Tiny hairs inside our nose filter out ________ (dust / food) from entering our lungs.\n(b) A gentle, pleasant wind is called a ________ (breeze / storm).\n(c) Morning sunlight gives our body Vitamin ________ (D / C).",
        ans: "(a) dust\n(b) breeze\n(c) D.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Cough and Sneeze Manners",
        q: "What should you do when you sneeze or cough in public?",
        ans: "We should always cover our mouth and nose with a clean handkerchief or our elbow bend to prevent spreading cough droplets and viruses to others.",
        marks: 2,
        rubric: [
          { key: "Covering with handkerchief or elbow bend", marks: 1 },
          { key: "Prevents spreading germs to others", marks: 1 }
        ]
      },
      {
        category: "Cross-Ventilation",
        q: "What is ventilation, and why should classrooms have large windows?",
        ans: "Ventilation is the free circulation of fresh air. Classrooms need large windows so that stale air breathed out by students exits and fresh oxygen-rich air flows in.",
        marks: 2,
        rubric: [
          { key: "Circulation of fresh air", marks: 1 },
          { key: "Exchanges stale air with oxygen-rich air", marks: 1 }
        ]
      },
      {
        category: "Handwashing Steps",
        q: "When is it mandatory to wash your hands with soap?",
        ans: "Mandatory times for handwashing:\n1. Before touching or eating food.\n2. After using the toilet or cleaning pets.\n3. After returning home from outside or playground.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct occasion", marks: 3 }
        ]
      },
      {
        category: "Storm and Gale",
        q: "What is the difference between a breeze and a storm?",
        ans: "• Breeze: A gentle, cool, and pleasant moving air.\n• Storm: Very strong, violent, and fast wind that can uproot trees and blow away roofs.",
        marks: 2,
        rubric: [
          { key: "Breeze definition", marks: 1 },
          { key: "Storm definition", marks: 1 }
        ]
      },
      {
        category: "Environmental Awareness",
        q: "Give one way we can reduce smoke in our neighborhood.",
        ans: "We can walk or ride bicycles for short distances, use carpooling or public buses, and strictly ban the burning of plastic and dry leaves.",
        marks: 2,
        rubric: [{ key: "Cycling, public transport, or ban on burning", marks: 2 }]
      }
    ]
  },
  {
    id: "lwn9",
    num: 9,
    unit: "Unit 4: Community, Culture & Values",
    title: "Staying Safe Everywhere",
    subtitle: "Traffic Lights (Red, Yellow, Green), Zebra Crossing, First Aid",
    concepts: ["Traffic Light Rules (Red, Yellow, Green)", "Pedestrian Safety: Zebra Crossing, Footpaths", "Safety at Home (Sharp tools, Electrical sockets, Fire)", "First Aid Box Essentials"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fef2f2, #fee2e2);border-radius:12px;width:100%;height:auto;">
      <rect x="130" y="30" width="40" height="100" rx="8" fill="#1f2937"/>
      <circle cx="150" cy="50" r="10" fill="#ef4444"/>
      <circle cx="150" cy="80" r="10" fill="#eab308"/>
      <circle cx="150" cy="110" r="10" fill="#22c55e"/>
      <rect x="146" y="130" width="8" height="50" fill="#4b5563"/>
      <rect x="60" y="170" width="180" height="20" fill="#374151"/>
      <line x1="70" y1="180" x2="90" y2="180" stroke="#fff" stroke-width="6"/>
      <line x1="110" y1="180" x2="130" y2="180" stroke="#fff" stroke-width="6"/>
      <line x1="150" y1="180" x2="170" y2="180" stroke="#fff" stroke-width="6"/>
      <line x1="190" y1="180" x2="210" y2="180" stroke="#fff" stroke-width="6"/>
      <text x="150" y="20" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#991b1b">Staying Safe Everywhere</text>
    </svg>`,
    cbq: {
      context: "Priya wanted to cross a busy road to buy ice cream. She started running across between moving cars. Her elder brother caught her hand and took her to the zebra crossing where the pedestrian signal was green.",
      question: "Why is running across a busy road dangerous, and what three road safety rules should Priya follow while crossing?",
      answer: "Running across moving traffic is extremely dangerous because drivers cannot stop instantly and it can cause fatal accidents. Priya should follow these three rules:\n1. Always cross at the 'Zebra Crossing'.\n2. Look to the right, then to the left, and again to the right before stepping off the curb.\n3. Cross only when vehicles have stopped and the pedestrian signal turns green; never run, walk briskly.",
      rubric: [
        { key: "Danger of running between moving vehicles", marks: 1 },
        { key: "Three golden rules of crossing (Zebra crossing, Look both ways, Walk calmly)", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What do the three colors of the traffic signal indicate?",
        ans: "The three colors indicate:\n1. RED: Stop!\n2. YELLOW (Amber): Get ready / Slow down!\n3. GREEN: Go!",
        marks: 3,
        rubric: [
          { key: "Red - Stop", marks: 1 },
          { key: "Yellow - Get ready", marks: 1 },
          { key: "Green - Go", marks: 1 }
        ]
      },
      {
        category: "Pedestrian Safety",
        q: "What is a 'Zebra Crossing'? Why is it called so?",
        ans: "A zebra crossing is a safe path marked on roads with alternating black and white stripes for pedestrians to cross. It is named zebra crossing because its stripes resemble the stripes on a zebra's body.",
        marks: 2,
        rubric: [
          { key: "Safe pedestrian crossing path", marks: 1 },
          { key: "Named after zebra's black & white stripes", marks: 1 }
        ]
      },
      {
        category: "Footpath & Walking",
        q: "Where should we walk on a road if there is no footpath?",
        ans: "If there is no footpath, we should always walk on the extreme right side of the road facing incoming traffic so we can see approaching vehicles clearly.",
        marks: 2,
        rubric: [
          { key: "Right side of road", marks: 1 },
          { key: "Facing oncoming traffic for safety", marks: 1 }
        ]
      },
      {
        category: "Safety at Home",
        q: "List three safety rules we must follow inside our house.",
        ans: "Three home safety rules:\n1. Never play with sharp objects like knives, scissors, or razor blades.\n2. Do not touch electrical switches or plug points with wet hands.\n3. Never play with matchsticks, fire, or gas stoves in the kitchen.",
        marks: 3,
        rubric: [
          { key: "No sharp objects", marks: 1 },
          { key: "No wet hands on electrical switches", marks: 1 },
          { key: "No playing with fire/gas", marks: 1 }
        ]
      },
      {
        category: "School Bus Safety",
        q: "State two rules to remain safe while traveling in a school bus.",
        ans: "1. Never put your head, hand, or arm out of the moving bus window.\n2. Never board or get off a moving bus; stand patiently in a queue.",
        marks: 2,
        rubric: [
          { key: "No head/hands out of window", marks: 1 },
          { key: "No boarding moving bus / follow queue", marks: 1 }
        ]
      },
      {
        category: "Playground Safety",
        q: "Give two rules to avoid injuries in the school playground.",
        ans: "1. Never push or pull anyone while playing on swings, slides, or see-saws.\n2. Wait for your turn patiently and play games by the rules.",
        marks: 2,
        rubric: [
          { key: "No pushing on swings/slides", marks: 1 },
          { key: "Wait for turn / follow game rules", marks: 1 }
        ]
      },
      {
        category: "First Aid Basics",
        q: "What is 'First Aid'? Name three essential items found in a first aid box.",
        ans: "First aid is the immediate medical help given to an injured person before a doctor arrives.\nEssential items:\n1. Antiseptic liquid (Dettol/Savlon)\n2. Band-aid and sterile cotton gauze\n3. Antiseptic cream and scissors.",
        marks: 3,
        rubric: [
          { key: "First aid definition", marks: 1.5 },
          { key: "Three valid first aid items", marks: 1.5 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the safety item with its purpose:\n(a) Helmet -> (i) Road crossing\n(b) Zebra Crossing -> (ii) Head protection on two-wheelers\n(c) Band-aid -> (iii) Car passenger safety\n(d) Seat belt -> (iv) Covering small cuts",
        ans: "(a) Helmet -> (ii) Head protection on two-wheelers\n(b) Zebra Crossing -> (i) Road crossing\n(c) Band-aid -> (iv) Covering small cuts\n(d) Seat belt -> (iii) Car passenger safety.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) It is safe to fly kites on an open terrace without railings.\n(b) We must wear a helmet when riding a bicycle or scooter.\n(c) You should never accept chocolates or rides from unknown strangers.",
        ans: "(a) False (Can cause dangerous falls)\n(b) True\n(c) True (Stranger danger).",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) Always walk on the ________ (footpath / center of road).\n(b) Emergency telephone number for calling an ambulance in India is ________ (102 or 108 / 100).\n(c) Never touch medicines without asking an ________ (adult / baby).",
        ans: "(a) footpath\n(b) 102 (or 108)\n(c) adult.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Minor Burn Care",
        q: "What should you do immediately if your finger touches a hot iron or pan?",
        ans: "Put the burnt finger under cold running tap water for 10-15 minutes immediately. Never apply ice directly or pop blisters, and apply an antiseptic burn cream.",
        marks: 2,
        rubric: [
          { key: "Cold running water for 10-15 mins", marks: 1 },
          { key: "Antiseptic burn cream", marks: 1 }
        ]
      },
      {
        category: "Swimming Safety",
        q: "What safety precautions must young children take in a swimming pool?",
        ans: "Children must wear a swimming tube or life jacket and swim only in the shallow end under the direct supervision of an adult coach or parent.",
        marks: 2,
        rubric: [{ key: "Swimming tube and adult supervision", marks: 2 }]
      },
      {
        category: "Emergency Numbers",
        q: "State the emergency helpline numbers in India for:\n(a) Police\n(b) Fire Brigade",
        ans: "(a) Police: 100 (or 112)\n(b) Fire Brigade: 101.",
        marks: 2,
        rubric: [
          { key: "Police 100/112", marks: 1 },
          { key: "Fire 101", marks: 1 }
        ]
      },
      {
        category: "Stray Animal Safety",
        q: "Why should we not tease or pull the tail of sleeping dogs or cats?",
        ans: "Teasing an animal frightens or angers it, and it may bite or scratch in defense, which can transmit deadly diseases like rabies.",
        marks: 2,
        rubric: [{ key: "Animal bites in self-defense / rabies risk", marks: 2 }]
      },
      {
        category: "Safety Poem Line",
        q: "Complete the traffic rhyme:\n'Stop, says the ________ light,\nGO, says the ________ light,\nWait, says the ________ light, blinking in between.'",
        ans: "'Stop, says the RED light,\nGO, says the GREEN light,\nWait, says the YELLOW light, blinking in between.'",
        marks: 3,
        rubric: [
          { key: "Red, Green, Yellow in correct blanks", marks: 3 }
        ]
      }
    ]
  },
  {
    id: "lwn10",
    num: 10,
    unit: "Unit 4: Community, Culture & Values",
    title: "Festivals & Celebrations",
    subtitle: "Diwali, Eid, Christmas, Gurpurab, National Festivals",
    concepts: ["Types: Religious, National, and Harvest Festivals", "Major Religious Celebrations (Diwali, Eid, Christmas, Gurpurab)", "National Festivals (Republic Day, Independence Day, Gandhi Jayanti)", "Unity in Diversity and Spreading Joy"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fef3c7, #fed7aa);border-radius:12px;width:100%;height:auto;">
      <ellipse cx="150" cy="140" rx="30" ry="12" fill="#d97706"/>
      <path d="M 120 140 Q 150 160 180 140 Z" fill="#b45309"/>
      <path d="M 150 128 Q 140 100 150 75 Q 160 100 150 128 Z" fill="#f59e0b"/>
      <path d="M 150 120 Q 145 105 150 90 Q 155 105 150 120 Z" fill="#ef4444"/>
      <circle cx="60" cy="80" r="15" fill="#38bdf8"/>
      <circle cx="240" cy="80" r="15" fill="#ec4899"/>
      <text x="150" y="30" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#9a3412">Festivals & Celebrations</text>
    </svg>`,
    cbq: {
      context: "In Kabir's housing society, residents celebrate Diwali with clay diyas and sweets, celebrate Eid by hugging and sharing sweet sewaiyan, decorate Christmas trees with gifts and carols, and organize langar on Gurpurab.",
      question: "What core value does celebrating all festivals together teach us about India?",
      answer: "Celebrating festivals together teaches us the spirit of 'Unity in Diversity' and mutual brotherhood. It shows that although we follow different religions and traditions, we are all part of one big Indian family who share love, happiness, and respect for each other's beliefs.",
      rubric: [
        { key: "Concept of Unity in Diversity", marks: 1.5 },
        { key: "Mutual respect, love, and harmonious living", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is a festival, and why do we celebrate festivals?",
        ans: "A festival is a special day or time of celebration. We celebrate festivals to share joy and happiness, strengthen bonds with family and friends, and honor our culture, religion, or historical events.",
        marks: 2,
        rubric: [
          { key: "Definition of festival", marks: 1 },
          { key: "Sharing joy and honoring culture", marks: 1 }
        ]
      },
      {
        category: "Religious Festivals",
        q: "Name the major religious festivals associated with the following:\n(a) Festival of Lights\n(b) Festival of Colors\n(c) Festival celebrated after the holy month of Ramadan\n(d) Birthday of Jesus Christ",
        ans: "(a) Festival of Lights - Diwali (Deepawali)\n(b) Festival of Colors - Holi\n(c) Month of Ramadan - Eid-ul-Fitr\n(d) Birthday of Jesus Christ - Christmas.",
        marks: 2,
        rubric: [
          { key: "All 4 correct festivals identified", marks: 2 }
        ]
      },
      {
        category: "Diwali Celebration",
        q: "How do people celebrate Diwali, and why should we avoid bursting firecrackers?",
        ans: "People clean and decorate homes with rangoli and clay diyas, wear new clothes, pray to Goddess Lakshmi and Lord Ganesha, and exchange sweets. We should avoid bursting crackers because they create toxic air pollution and terrifying loud noise that harms elderly people, babies, and animals.",
        marks: 3,
        rubric: [
          { key: "Diyas, rangoli, sweets, and prayers", marks: 1.5 },
          { key: "Air/noise pollution impact of crackers", marks: 1.5 }
        ]
      },
      {
        category: "Eid-ul-Fitr",
        q: "How is Eid-ul-Fitr celebrated? What special sweet dish is prepared?",
        ans: "On Eid, people offer special prayers (Namaz) in mosques, embrace each other saying 'Eid Mubarak', give charity (Zakat) to the poor, and relish the delicious sweet dish called 'Sewaiyan' (Kheer).",
        marks: 2,
        rubric: [
          { key: "Namaz, Eid Mubarak greeting, charity", marks: 1 },
          { key: "Sewaiyan sweet dish", marks: 1 }
        ]
      },
      {
        category: "Christmas Celebration",
        q: "When is Christmas celebrated, and who brings gifts for children?",
        ans: "Christmas is celebrated on 25th December every year. People decorate Christmas trees with stars and bells, sing carols at church, and children eagerly await gifts from Santa Claus.",
        marks: 2,
        rubric: [
          { key: "25th December", marks: 1 },
          { key: "Santa Claus, Christmas tree and carols", marks: 1 }
        ]
      },
      {
        category: "Gurpurab",
        q: "What is Gurpurab, and what is 'Langar'?",
        ans: "Gurpurab marks the birthdays of the ten Sikh Gurus (especially Guru Nanak Dev Ji). A procession (Nagar Kirtan) is taken out, and a free community meal where everyone sits together on the floor to eat is called 'Langar'.",
        marks: 2,
        rubric: [
          { key: "Birthday of Sikh Gurus", marks: 1 },
          { key: "Langar free community meal", marks: 1 }
        ]
      },
      {
        category: "National Festivals",
        q: "Name the three National Festivals of India and give their dates of celebration.",
        ans: "The three National Festivals are:\n1. Republic Day - 26th January\n2. Independence Day - 15th August\n3. Gandhi Jayanti - 2nd October.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct festival and date", marks: 3 }
        ]
      },
      {
        category: "Independence Day",
        q: "What happens on 15th August at the Red Fort in Delhi?",
        ans: "The Prime Minister of India unfurls the National Tricolor Flag (Tiranga) at the historic Red Fort and addresses the nation.",
        marks: 2,
        rubric: [
          { key: "Unfurling National Flag by Prime Minister", marks: 1 },
          { key: "Speech to the nation", marks: 1 }
        ]
      },
      {
        category: "Harvest Festivals",
        q: "What are harvest festivals? Name two harvest festivals celebrated in different parts of India.",
        ans: "Harvest festivals celebrate the ripening and harvesting of new food crops by farmers. Examples: Baisakhi (Punjab), Pongal (Tamil Nadu), Onam (Kerala), Bihu (Assam).",
        marks: 3,
        rubric: [
          { key: "Harvesting crops celebration", marks: 1 },
          { key: "Two valid examples with states", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Onam is celebrated in Kerala with boat races and floral rangoli (Pookkalam).\n(b) National festivals are celebrated only by people of one religion.\n(c) Mahatma Gandhi's birthday is celebrated as International Day of Non-Violence.",
        ans: "(a) True\n(b) False (National festivals are celebrated by all Indians together)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) The Indian National Flag is called the ________ (Tiranga / Ashoka).\n(b) Lord Rama returned to Ayodhya on the day of ________ (Diwali / Holi).\n(c) Bihu is the famous harvest festival of ________ (Assam / Gujarat).",
        ans: "(a) Tiranga\n(b) Diwali\n(c) Assam.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "National Flag (Tiranga)",
        q: "What do the three colors in our National Flag stand for?",
        ans: "1. Saffron (top): Courage and sacrifice\n2. White (middle): Peace, purity, and truth\n3. Green (bottom): Prosperity and fertility of our land\n(The Ashoka Chakra in the center represents continuous progress).",
        marks: 3,
        rubric: [
          { key: "Saffron - Courage/sacrifice", marks: 1 },
          { key: "White - Peace/truth", marks: 1 },
          { key: "Green - Prosperity", marks: 1 }
        ]
      },
      {
        category: "Father of the Nation",
        q: "Whose birthday is celebrated on 2nd October, and what title is he lovingly given?",
        ans: "Mahatma Gandhi's birthday is celebrated on 2nd October. He is lovingly called the 'Father of the Nation' (Bapu).",
        marks: 2,
        rubric: [
          { key: "Mahatma Gandhi", marks: 1 },
          { key: "Father of the Nation / Bapu", marks: 1 }
        ]
      },
      {
        category: "Eco-Friendly Festivals",
        q: "Give two ways to celebrate festivals in an eco-friendly manner.",
        ans: "1. Use natural clay idols and organic flower colors (Gulal) instead of toxic chemical paints.\n2. Light earthen clay diyas with mustard oil instead of plastic electric lights.",
        marks: 2,
        rubric: [{ key: "Organic colors and clay diyas/idols", marks: 2 }]
      },
      {
        category: "Sharing and Caring",
        q: "How can we share festival joy with underprivileged children?",
        ans: "We can share festival joy by gifting them new clothes, sharing delicious sweets, and distributing books and toys to spread smiles.",
        marks: 2,
        rubric: [{ key: "Gifting clothes, sweets, books, and toys", marks: 2 }]
      }
    ]
  },
  {
    id: "lwn11",
    num: 11,
    unit: "Unit 4: Community, Culture & Values",
    title: "Good Manners & Sharing",
    subtitle: "Magic Words: Please, Thank You, Sorry, Caring for Elders",
    concepts: ["Golden Magic Words: Please, Thank You, Sorry, Excuse Me", "Politeness and Respect in Speech", "Sharing Toys, Food, and Books", "Empathy towards Special Needs and the Elderly"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #f0fdf4, #bbf7d0);border-radius:12px;width:100%;height:auto;">
      <circle cx="100" cy="90" r="25" fill="#fed7aa"/>
      <circle cx="200" cy="90" r="25" fill="#fed7aa"/>
      <path d="M 90 100 Q 100 110 110 100" stroke="#ef4444" stroke-width="2" fill="none"/>
      <path d="M 190 100 Q 200 110 210 100" stroke="#ef4444" stroke-width="2" fill="none"/>
      <rect x="85" y="118" width="30" height="40" fill="#3b82f6" rx="4"/>
      <rect x="185" y="118" width="30" height="40" fill="#10b981" rx="4"/>
      <path d="M 115 125 L 185 125" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
      <circle cx="150" cy="125" r="8" fill="#ef4444"/>
      <text x="150" y="30" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#065f46">Good Manners & Sharing</text>
    </svg>`,
    cbq: {
      context: "During recess, Rohit snatched a storybook roughly from his classmate Aarav without asking. Aarav felt sad and started crying. The teacher observed this and explained the importance of the golden words 'Please' and 'Thank you'.",
      question: "What mistake did Rohit make, and what should he say to Aarav to make amends?",
      answer: "Rohit made the mistake of snatching someone's book rudely without permission. He should immediately say, 'I am sorry, Aarav. May I please read this book after you finish?' and thank him politely when Aarav shares it.",
      rubric: [
        { key: "Identifying rude behavior and snatching", marks: 1 },
        { key: "Using 'Sorry', 'Please', and 'Thank you' correctly", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What are 'Good Manners'? Why are good manners important in life?",
        ans: "Good manners are polite, respectful, and considerate behaviors towards others. They are important because they make everyone around us feel respected, happy, and help us make good friends.",
        marks: 2,
        rubric: [
          { key: "Definition of good manners", marks: 1 },
          { key: "Respect, happiness, and friendship", marks: 1 }
        ]
      },
      {
        category: "Golden Magic Words",
        q: "Name the four golden magic words and explain when to use each.",
        ans: "1. 'Please': When requesting something or asking for help.\n2. 'Thank you': When receiving a gift, compliment, or help.\n3. 'Sorry': When making a mistake or hurting someone.\n4. 'Excuse me': When interrupting a conversation or passing someone.",
        marks: 4,
        rubric: [
          { key: "1 mark per golden word with correct usage", marks: 4 }
        ]
      },
      {
        category: "Classroom Etiquette",
        q: "Mention three good manners to follow in the school classroom.",
        ans: "1. Raise your hand before speaking or answering a question.\n2. Listen attentively when the teacher or a classmate is speaking.\n3. Keep the classroom clean and throw pencil shavings into the dustbin.",
        marks: 3,
        rubric: [
          { key: "Raise hand", marks: 1 },
          { key: "Listen attentively", marks: 1 },
          { key: "Dustbin use / cleanliness", marks: 1 }
        ]
      },
      {
        category: "Sharing is Caring",
        q: "Why is sharing important among friends and siblings?",
        ans: "Sharing shows that we care for others' feelings. It prevents selfishness, brings joy to both the giver and receiver, and strengthens friendship.",
        marks: 2,
        rubric: [
          { key: "Shows empathy and care", marks: 1 },
          { key: "Brings joy and strengthens friendship", marks: 1 }
        ]
      },
      {
        category: "Table Manners",
        q: "State two good table manners while eating meals with others.",
        ans: "1. Wait until everyone is seated before starting to eat.\n2. Chew quietly with your mouth closed and do not make slurping sounds.",
        marks: 2,
        rubric: [
          { key: "Waiting for everyone", marks: 1 },
          { key: "Chewing with mouth closed", marks: 1 }
        ]
      },
      {
        category: "Respect for Elders",
        q: "How can you show respect to elderly people at home or in public transport?",
        ans: "We can touch their feet or greet them with 'Namaste', speak to them gently, help them carry heavy bags, and offer them our seat in a crowded bus or metro.",
        marks: 2,
        rubric: [
          { key: "Respectful greeting and gentle speech", marks: 1 },
          { key: "Offering seat / helping with bags", marks: 1 }
        ]
      },
      {
        category: "Being a Good Listener",
        q: "Why should we not interrupt when two people are talking?",
        ans: "Interrupting is impolite. We should wait patiently until they finish speaking, or say 'Excuse me, please' if there is an urgent matter.",
        marks: 2,
        rubric: [
          { key: "Impolite to interrupt", marks: 1 },
          { key: "Use 'Excuse me' only for urgent matters", marks: 1 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) It is good manners to laugh when someone falls down accidentally.\n(b) We should knock on the door before entering someone's room.\n(c) Saying 'Thank you' shows gratitude for kindness received.",
        ans: "(a) False (We should help them get up and ask if they are hurt)\n(b) True\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) Always say '________' (Sorry / Hurray) when you accidentally bump into someone.\n(b) Greet your teachers in the morning by saying '________' (Good morning / Goodbye).\n(c) A well-mannered child is loved by ________ (everyone / nobody).",
        ans: "(a) Sorry\n(b) Good morning\n(c) everyone.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Queue Etiquette",
        q: "Why should we always stand in a line (queue) at the bus stop or water tap?",
        ans: "Standing in a queue ensures order, fairness, and safety. It prevents pushing, arguments, and accidents, and ensures everyone gets their turn peacefully.",
        marks: 2,
        rubric: [
          { key: "Order and fairness", marks: 1 },
          { key: "Prevents accidents and pushing", marks: 1 }
        ]
      },
      {
        category: "Borrowing Manners",
        q: "What should you remember when you borrow an eraser or pencil from a classmate?",
        ans: "Always ask permission first ('May I please borrow your eraser?'), use it carefully without breaking it, and return it promptly with a polite 'Thank you!'.",
        marks: 2,
        rubric: [
          { key: "Ask permission first", marks: 1 },
          { key: "Return promptly and say Thank you", marks: 1 }
        ]
      },
      {
        category: "Telephone Etiquette",
        q: "How should you answer a phone call at home?",
        ans: "Answer politely with 'Hello, who is calling, please?' and speak in a soft, respectful tone without shouting.",
        marks: 2,
        rubric: [{ key: "Polite greeting and soft respectful tone", marks: 2 }]
      },
      {
        category: "Helping Specially-Abled",
        q: "How should you behave with a person who uses a wheelchair or walking stick?",
        ans: "We should treat them with equal dignity, never stare or mock, and offer gentle help if they need assistance to open doors or climb ramps.",
        marks: 2,
        rubric: [
          { key: "Equal dignity, no mocking", marks: 1 },
          { key: "Assistance with doors/ramps if needed", marks: 1 }
        ]
      },
      {
        category: "Apologizing Sincerely",
        q: "Why is a sincere apology better than making excuses?",
        ans: "Admitting a mistake shows honesty and courage. Saying sorry from the heart heals hurt feelings and restores trust.",
        marks: 2,
        rubric: [{ key: "Shows honesty, courage, and restores trust", marks: 2 }]
      },
      {
        category: "Manners Rhyme",
        q: "Complete the manners saying:\n'Hearts, like doors, will open with ease,\nTo very, very little keys;\nAnd don’t forget that two of these\nAre \"I thank you\" and \"________ ________\"!'",
        ans: "'\"If you please\"' (or '\"Please\"').",
        marks: 1,
        rubric: [{ key: "If you please / Please", marks: 1 }]
      }
    ]
  },
  {
    id: "lwn12",
    num: 12,
    unit: "Unit 5: Planet Earth & Cosmos",
    title: "Our Earth and the Sky",
    subtitle: "Sun, Moon, Stars, Mountains, Rivers and Saving Nature",
    concepts: ["Earth as Our Home (Land, Water, Atmosphere)", "Landforms: Plains, Mountains, Hills, Valleys, Deserts", "The Day Sky (Sun, Clouds) and Night Sky (Moon, Stars)", "Environmental Protection (Planting Trees, Saving Nature)"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #0f172a, #1e293b);border-radius:12px;width:100%;height:auto;">
      <circle cx="150" cy="120" r="50" fill="#0284c7"/>
      <path d="M 120 90 Q 140 80 155 95 Q 170 110 180 90 Q 190 120 170 145 Q 140 160 125 140 Z" fill="#22c55e"/>
      <circle cx="240" cy="50" r="16" fill="#fef08a"/>
      <circle cx="50" cy="40" r="2" fill="#fff"/>
      <circle cx="90" cy="60" r="1.5" fill="#fff"/>
      <circle cx="210" cy="30" r="2" fill="#fff"/>
      <circle cx="260" cy="70" r="1.5" fill="#fff"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#38bdf8">Our Earth and the Sky</text>
    </svg>`,
    cbq: {
      context: "Tara looked at a globe in her school library. She noticed that almost three-fourths of the globe was colored blue, while one-fourth was green and brown. Her teacher explained that blue represents water and green/brown represents land.",
      question: "Why is Earth called the 'Blue Planet', and what two vital resources make Earth the only known planet with life?",
      answer: "Earth is called the 'Blue Planet' because about 71% (nearly three-fourths) of its surface is covered by vast oceans and seas of water, making it appear sparkling blue from space. The two vital life-supporting resources on Earth are:\n1. Liquid fresh water to drink\n2. Breathable atmosphere containing oxygen.",
      rubric: [
        { key: "Explanation of 71% water coverage appearing blue", marks: 1.5 },
        { key: "Liquid water and oxygen atmosphere", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is Earth? Why is it unique in the solar system?",
        ans: "Earth is the third planet from the Sun and the home of all living beings. It is unique because it is the only known planet that has liquid water, air with oxygen, and an optimal temperature suitable for life.",
        marks: 3,
        rubric: [
          { key: "Third planet and home of living things", marks: 1 },
          { key: "Presence of water and oxygen", marks: 1 },
          { key: "Suitable temperature for life", marks: 1 }
        ]
      },
      {
        category: "Landforms on Earth",
        q: "Differentiate between Plains, Hills, and Mountains.",
        ans: "• Plains: Flat, level land where most people live, build cities, and grow crops.\n• Hills: High raised land with a cooler climate.\n• Mountains: Very tall, rocky land with sharp peaks, often covered with snow (e.g., Himalayas).",
        marks: 3,
        rubric: [
          { key: "Plains definition", marks: 1 },
          { key: "Hills definition", marks: 1 },
          { key: "Mountains definition with peak/snow", marks: 1 }
        ]
      },
      {
        category: "Valleys and Rivers",
        q: "What is a 'Valley'? Where do rivers originate?",
        ans: "A low land between two hills or mountains is called a 'Valley'. Rivers originate from melting snow glaciers on high mountains or from natural springs.",
        marks: 2,
        rubric: [
          { key: "Low land between hills/mountains", marks: 1 },
          { key: "Originate from melting glaciers/springs", marks: 1 }
        ]
      },
      {
        category: "Deserts",
        q: "What is a desert? Name one plant and one animal adapted to desert life.",
        ans: "A desert is a large, dry area of land covered with sand that receives very little rainfall.\n• Desert Plant: Cactus\n• Desert Animal: Camel.",
        marks: 3,
        rubric: [
          { key: "Desert definition", marks: 1 },
          { key: "Cactus plant", marks: 1 },
          { key: "Camel animal", marks: 1 }
        ]
      },
      {
        category: "The Sun",
        q: "What is the Sun? Why is life impossible without the Sun?",
        ans: "The Sun is a huge, glowing ball of hot gases and our closest star. Life is impossible without it because it provides light and heat; without the Sun, Earth would be a frozen, pitch-black ball where no plant could grow.",
        marks: 3,
        rubric: [
          { key: "Huge glowing star / ball of gases", marks: 1 },
          { key: "Provides light and heat", marks: 1 },
          { key: "Plants need sunlight to grow", marks: 1 }
        ]
      },
      {
        category: "The Moon and its Shapes",
        q: "Does the Moon have its own light? Why does its shape appear to change every night?",
        ans: "No, the Moon does not have its own light; it shines by reflecting sunlight. Its shape appears to change every night (Phases of the Moon) as it orbits around the Earth and we see different illuminated portions.",
        marks: 2,
        rubric: [
          { key: "Reflects sunlight", marks: 1 },
          { key: "Orbits Earth creating phases", marks: 1 }
        ]
      },
      {
        category: "The Stars",
        q: "Why do stars look like tiny twinkling dots in the night sky?",
        ans: "Stars are huge glowing fireballs just like our Sun, but they look like tiny dots because they are located millions of kilometers far away from Earth.",
        marks: 2,
        rubric: [
          { key: "Huge fireballs like the Sun", marks: 1 },
          { key: "Located extremely far away", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the natural feature with its description:\n(a) Flat land -> (i) Desert\n(b) High rocky land with snow -> (ii) Valley\n(c) Sandy dry region -> (iii) Plain\n(d) Low land between hills -> (iv) Mountain",
        ans: "(a) Flat land -> (iii) Plain\n(b) High rocky land with snow -> (iv) Mountain\n(c) Sandy dry region -> (i) Desert\n(d) Low land between hills -> (ii) Valley.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) The Sun rises in the East and sets in the West.\n(b) There is no air or liquid water on the Moon.\n(c) Cutting down trees helps to keep the Earth cool and green.",
        ans: "(a) True\n(b) True\n(c) False (Cutting trees causes global warming and pollution).",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) The model of the Earth is called a ________ (globe / map).\n(b) The Earth takes ________ (24 hours / 365 days) to complete one rotation on its axis.\n(c) We celebrate Earth Day on ________ (22nd April / 5th June).",
        ans: "(a) globe\n(b) 24 hours\n(c) 22nd April.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Day and Night Formation",
        q: "How are day and night caused on Earth?",
        ans: "The Earth spins continuously on its axis like a top. The side of the Earth facing the Sun experiences Day, while the side turned away in darkness experiences Night.",
        marks: 2,
        rubric: [
          { key: "Earth's rotation on axis", marks: 1 },
          { key: "Facing Sun = Day; Facing away = Night", marks: 1 }
        ]
      },
      {
        category: "Atmosphere",
        q: "What is the blanket of air surrounding the Earth called?",
        ans: "The blanket of air surrounding the Earth is called the 'Atmosphere'.",
        marks: 1,
        rubric: [{ key: "Atmosphere", marks: 1 }]
      },
      {
        category: "Saving Mother Earth",
        q: "Mention three promises you can make to protect Mother Earth.",
        ans: "Three eco-promises:\n1. Plant at least one sapling every year on my birthday.\n2. Say 'NO' to single-use plastic bags and use cloth bags.\n3. Turn off lights, fans, and taps when not in use.",
        marks: 3,
        rubric: [
          { key: "Planting trees", marks: 1 },
          { key: "No plastic", marks: 1 },
          { key: "Saving electricity and water", marks: 1 }
        ]
      },
      {
        category: "Constellations",
        q: "What is a group of stars forming a recognizable pattern called? Give one example.",
        ans: "A group of stars forming a recognizable pattern is called a 'Constellation'. Example: The Great Bear (Ursa Major / Saptarishi) or Orion.",
        marks: 2,
        rubric: [
          { key: "Constellation definition", marks: 1 },
          { key: "Saptarishi / Great Bear example", marks: 1 }
        ]
      },
      {
        category: "Full Moon vs New Moon",
        q: "What do we call the night when the Moon looks like a complete bright circle?",
        ans: "The night when the Moon appears as a full bright circle is called the 'Full Moon Night' (Purnima).",
        marks: 1,
        rubric: [{ key: "Full Moon (Purnima)", marks: 1 }]
      }
    ]
  }
];

module.exports = { livingWorldPart2 };
