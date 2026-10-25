// scripts/builders/surroundingsPart1.js
// Class 2 EVS Track 2 (Classic CBSE / Surrounding Environment): Surroundings & Community
// Chapters 1 to 6: 100% Authentic NCERT EVS Questions with Step-by-Step Marking Rubrics

const surroundingsPart1 = [
  {
    id: "sur1",
    num: 1,
    unit: "Unit 1: Self & Growing Up",
    title: "All About Me & Growing Up",
    subtitle: "Baby to Child, Body Changes, Personal Hobbies",
    concepts: ["Stages of Human Growth (Baby, Child, Teenager, Adult, Old)", "Changes with Growth (Height, Weight, Milk Teeth to Permanent Teeth)", "Unique Identity: Fingerprints, Likes and Dislikes", "Developing Healthy Hobbies and Talents"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #f0f9ff, #e0f2fe);border-radius:12px;width:100%;height:auto;">
      <circle cx="80" cy="130" r="14" fill="#fed7aa"/>
      <rect x="73" y="145" width="14" height="25" fill="#38bdf8" rx="2"/>
      <circle cx="150" cy="100" r="20" fill="#fed7aa"/>
      <rect x="140" y="122" width="20" height="48" fill="#3b82f6" rx="3"/>
      <line x1="145" y1="170" x2="145" y2="195" stroke="#1e3a8a" stroke-width="4"/>
      <line x1="155" y1="170" x2="155" y2="195" stroke="#1e3a8a" stroke-width="4"/>
      <circle cx="230" cy="70" r="24" fill="#fed7aa"/>
      <rect x="218" y="96" width="24" height="65" fill="#1d4ed8" rx="4"/>
      <line x1="224" y1="161" x2="224" y2="195" stroke="#0f172a" stroke-width="5"/>
      <line x1="236" y1="161" x2="236" y2="195" stroke="#0f172a" stroke-width="5"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#0369a1">All About Me & Growing Up</text>
    </svg>`,
    cbq: {
      context: "Riya found a small pair of shoes and a tiny dress in her cupboard that she wore when she was two years old. When she tried to put them on now in Class 2, they would not fit her at all. Her mother smiled and explained that her body had grown taller, her feet bigger, and she was no longer a toddler.",
      question: "Why did Riya's old clothes not fit her anymore? Mention three physical changes that happen as a baby grows into a child.",
      answer: "Riya's old clothes did not fit because all living beings grow with time. Three physical changes that happen:\n1. Increase in height (growing taller) and weight (becoming heavier).\n2. Milk teeth fall out and are replaced by stronger permanent teeth.\n3. Feet and hands grow bigger and muscles become stronger, allowing running, jumping, and writing.",
      rubric: [
        { key: "Explanation of physical growth over time", marks: 1 },
        { key: "Three valid physical changes (height/weight, teeth, limbs)", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What are the main stages of human growth from birth to old age?",
        ans: "The stages of human growth are:\n1. Baby (Infant)\n2. Child (Toddler to school child)\n3. Teenager (Adolescent)\n4. Adult (Grown-up man or woman)\n5. Old Age (Senior citizen).",
        marks: 3,
        rubric: [
          { key: "Listing the 5 sequential stages of growth", marks: 3 }
        ]
      },
      {
        category: "Physical Changes",
        q: "Mention two physical differences between an infant baby and a child in Class 2.",
        ans: "1. A baby cannot walk or talk and drinks only milk, whereas a Class 2 child can run, speak fluently, and eat varied solid foods.\n2. A baby has no teeth or few milk teeth, while a Class 2 child has a full set of teeth and can chew food easily.",
        marks: 2,
        rubric: [
          { key: "Walking/talking/eating difference", marks: 1 },
          { key: "Teeth/chewing difference", marks: 1 }
        ]
      },
      {
        category: "Unique Identity",
        q: "What is unique to every single human being in the world that never matches anyone else?",
        ans: "Every person's fingerprints (and iris pattern of the eye) are completely unique in the world and never match anyone else, even identical twins.",
        marks: 2,
        rubric: [
          { key: "Fingerprints", marks: 1 },
          { key: "Completely unique to every individual", marks: 1 }
        ]
      },
      {
        category: "Milk Teeth vs Permanent Teeth",
        q: "How many milk teeth does a young child have? What happens when they fall out?",
        ans: "A young child has 20 milk teeth (temporary teeth). Around the age of 6 to 8 years, milk teeth fall out one by one and are replaced by 32 permanent teeth.",
        marks: 2,
        rubric: [
          { key: "20 milk teeth", marks: 1 },
          { key: "Replaced by 32 permanent teeth", marks: 1 }
        ]
      },
      {
        category: "Hobbies & Talents",
        q: "What is a 'Hobby'? Give three examples of constructive hobbies children enjoy.",
        ans: "A hobby is an enjoyable activity that we do in our free time for pleasure, creativity, and relaxation.\nExamples of constructive hobbies:\n1. Drawing and painting\n2. Gardening and planting saplings\n3. Reading storybooks (or learning music/swimming).",
        marks: 3,
        rubric: [
          { key: "Definition of hobby", marks: 1 },
          { key: "Two or three valid hobbies", marks: 2 }
        ]
      },
      {
        category: "Healthy Habits for Growth",
        q: "What three things do our bodies need to grow tall, strong, and healthy?",
        ans: "Our body needs:\n1. Nutritious balanced food (milk, pulses, vegetables, fruits).\n2. Regular outdoor physical exercise and yoga.\n3. 8 to 9 hours of sound sleep every night.",
        marks: 3,
        rubric: [
          { key: "Balanced diet", marks: 1 },
          { key: "Exercise / play", marks: 1 },
          { key: "Adequate sleep", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the stage of growth with its characteristic:\n(a) Infant -> (i) Grey hair and walking stick\n(b) School Child -> (ii) Goes to office and works\n(c) Adult -> (iii) Carries school bag and learns\n(d) Old Person -> (iv) Crawls on knees and drinks milk",
        ans: "(a) Infant -> (iv) Crawls on knees and drinks milk\n(b) School Child -> (iii) Carries school bag and learns\n(c) Adult -> (ii) Goes to office and works\n(d) Old Person -> (i) Grey hair and walking stick.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) As we grow older, our clothes and shoes become smaller for us.\n(b) Non-living things like rocks and plastic toys also grow in size over time.\n(c) We should respect and appreciate people even if their likes and choices differ from ours.",
        ans: "(a) True\n(b) False (Only living beings grow)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) A tiny seedling grows into a big ________ (tree / seed).\n(b) Human beings have ________ (20 / 32) permanent teeth in adulthood.\n(c) Things that we like doing in our leisure time are called ________ (hobbies / chores).",
        ans: "(a) tree\n(b) 32\n(c) hobbies.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Likes and Dislikes",
        q: "Why do different children have different favorite colors, sports, and foods?",
        ans: "Every child is an individual with unique feelings, tastes, and interests shaped by their family, experiences, and personality.",
        marks: 2,
        rubric: [{ key: "Individual differences and personality", marks: 2 }]
      },
      {
        category: "Posture and Bone Health",
        q: "What is posture? Why should we sit and walk with an erect straight back?",
        ans: "Posture is the position in which we hold our body while sitting, standing, or walking. Keeping an erect straight back strengthens our spine, prevents backache, and keeps us active.",
        marks: 2,
        rubric: [
          { key: "Posture definition", marks: 1 },
          { key: "Spine health and prevents backache", marks: 1 }
        ]
      },
      {
        category: "Self-Care Skills",
        q: "Name two self-care activities you have learned to do on your own since joining Class 2.",
        ans: "1. Tying my own shoelaces and buttoning my school uniform.\n2. Packing my school bag according to the daily timetable and brushing my teeth independently.",
        marks: 2,
        rubric: [{ key: "Two age-appropriate self-care tasks", marks: 2 }]
      },
      {
        category: "Emotions and Feelings",
        q: "How can you calm down when you feel angry or frustrated?",
        ans: "We can take five deep slow breaths, count to ten, drink a glass of water, and talk calmly with our parents or teacher.",
        marks: 2,
        rubric: [{ key: "Deep breathing, counting, talking calmly", marks: 2 }]
      },
      {
        category: "Birthdays and Milestones",
        q: "Why do we celebrate birthdays every year?",
        ans: "We celebrate birthdays to mark the completion of another year of healthy growth, learning, and life, and to receive blessings from elders.",
        marks: 1,
        rubric: [{ key: "Celebrating a year of growth and learning", marks: 1 }]
      },
      {
        category: "Growth in Living Things",
        q: "Give two examples of growth seen in animals and plants around us.",
        ans: "1. A tiny puppy grows into a faithful adult dog.\n2. A small green caterpillar transforms into a colorful butterfly.",
        marks: 2,
        rubric: [{ key: "Two valid animal/plant growth examples", marks: 2 }]
      }
    ]
  },
  {
    id: "sur2",
    num: 2,
    unit: "Unit 2: Neighborhood & Community Helpers",
    title: "My Neighborhood & Community",
    subtitle: "Market, Park, Police Station, Hospital & Post Office",
    concepts: ["Meaning of Neighborhood and Neighbors", "Important Public Places: School, Hospital, Market, Police Station", "Recreation Places: Public Park, Library, Post Office", "Maintaining Harmony and Cleanliness in the Neighborhood"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fef3c7, #fef08a);border-radius:12px;width:100%;height:auto;">
      <rect x="40" y="80" width="60" height="70" fill="#f87171" rx="4"/>
      <rect x="62" y="60" width="16" height="20" fill="#ef4444"/>
      <rect x="55" y="68" width="30" height="4" fill="#fff"/>
      <rect x="68" y="55" width="4" height="30" fill="#fff"/>
      <rect x="120" y="70" width="70" height="80" fill="#60a5fa" rx="4"/>
      <polygon points="120,70 155,45 190,70" fill="#2563eb"/>
      <rect x="210" y="85" width="60" height="65" fill="#34d399" rx="4"/>
      <rect x="0" y="160" width="300" height="40" fill="#64748b"/>
      <line x1="20" y1="180" x2="60" y2="180" stroke="#fff" stroke-width="4"/>
      <line x1="120" y1="180" x2="160" y2="180" stroke="#fff" stroke-width="4"/>
      <line x1="220" y1="180" x2="260" y2="180" stroke="#fff" stroke-width="4"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#78350f">My Neighborhood & Community</text>
    </svg>`,
    cbq: {
      context: "Ananya lives in Green Park Colony. Near her house, there is a grocery store where she buys bread and milk, a dispensary where doctor treats fever, a police booth that keeps the area safe, and a lush public park with swings and walking tracks.",
      question: "What is a 'neighborhood'? Name any three places in Ananya's neighborhood and write one service each provides.",
      answer: "A neighborhood is the area and community immediately surrounding our house where families live close to one another.\nThree places and their services in Ananya's neighborhood:\n1. Grocery Market: Sells daily food items, grains, milk, and vegetables.\n2. Dispensary/Hospital: Doctors treat sick and injured people and give medicines.\n3. Police Booth/Station: Police officers maintain law and order and protect people from thieves and crimes.",
      rubric: [
        { key: "Definition of neighborhood", marks: 1 },
        { key: "Three places with their specific community services", marks: 2 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "Who are 'Neighbors'? Why should we maintain cordial relations with our neighbors?",
        ans: "People who live in houses near or next to our house are our neighbors. We should maintain good relations because neighbors are the first to help us during emergencies, celebrations, and festivals.",
        marks: 2,
        rubric: [
          { key: "Neighbors definition", marks: 1 },
          { key: "Help in emergencies and celebrations", marks: 1 }
        ]
      },
      {
        category: "Hospital & Clinic",
        q: "What happens in a hospital? Who assists the doctors there?",
        ans: "In a hospital, sick and injured people are examined, diagnosed, and treated with medicines or surgery. Nurses assist doctors in taking care of patients, giving injections, and dressing wounds.",
        marks: 2,
        rubric: [
          { key: "Hospital role: treatment of sick", marks: 1 },
          { key: "Nurses assist doctors", marks: 1 }
        ]
      },
      {
        category: "Post Office Functions",
        q: "What services does a Post Office provide?",
        ans: "A post office:\n1. Sells postage stamps, postcards, and inland letters.\n2. Delivers letters, greeting cards, and parcel packages through postmen.\n3. Provides savings bank account facilities.",
        marks: 3,
        rubric: [
          { key: "Stamps and postcards", marks: 1 },
          { key: "Letter and parcel delivery", marks: 1 },
          { key: "Savings bank service", marks: 1 }
        ]
      },
      {
        category: "Police Station",
        q: "How does the Police Station help our neighborhood?",
        ans: "The police maintain law and order, catch thieves and criminals, regulate traffic, and ensure that residents feel safe and protected in their homes.",
        marks: 2,
        rubric: [
          { key: "Law and order / catches criminals", marks: 1 },
          { key: "Safety and security of residents", marks: 1 }
        ]
      },
      {
        category: "Fire Station",
        q: "What does a Fire Station do when a fire breaks out in a building?",
        ans: "When a fire breaks out, the fire station sends red fire engines with loud sirens. Brave firefighters use water hoses and long ladders to put out flames and rescue trapped people.",
        marks: 2,
        rubric: [
          { key: "Sends fire engines and firefighters", marks: 1 },
          { key: "Puts out fire and rescues people", marks: 1 }
        ]
      },
      {
        category: "Public Park & Recreation",
        q: "Why is a public park important for a neighborhood?",
        ans: "A public park provides fresh air, green trees, walking paths for morning exercise for elders, and swings, slides, and open grounds for children to play safely.",
        marks: 2,
        rubric: [
          { key: "Fresh air and walking space for elders", marks: 1 },
          { key: "Play area and swings for children", marks: 1 }
        ]
      },
      {
        category: "Neighborhood Cleanliness",
        q: "Give two rules we must follow to keep our neighborhood clean and beautiful.",
        ans: "1. Never throw plastic wrappers or kitchen waste on roads; deposit waste in public dustbins.\n2. Do not let wastewater stagnate in open drains, as it breeds disease-causing mosquitoes.",
        marks: 2,
        rubric: [
          { key: "Waste in dustbins, no littering", marks: 1 },
          { key: "No stagnant water to stop mosquitoes", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the neighborhood place with its emergency contact or symbol:\n(a) Police Station -> (i) Dial 101 / Red fire engine\n(b) Hospital Ambulance -> (ii) Letterbox / Postman\n(c) Fire Station -> (iii) Dial 100 / Khaki uniform\n(d) Post Office -> (iv) Dial 102 or 108 / Red Cross",
        ans: "(a) Police Station -> (iii) Dial 100 / Khaki uniform\n(b) Hospital Ambulance -> (iv) Dial 102 or 108 / Red Cross\n(c) Fire Station -> (i) Dial 101 / Red fire engine\n(d) Post Office -> (ii) Letterbox / Postman.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) We should play loud music late at night in our neighborhood.\n(b) A market has many shops selling vegetables, fruits, and stationery.\n(c) Bank is a safe place to deposit money and jewelry.",
        ans: "(a) False (Disturbs neighbors and causes noise pollution)\n(b) True\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) We deposit our savings safely in a ________ (bank / park).\n(b) We drop our stamped letters into a red ________ (letterbox / dustbin).\n(c) Firefighters travel in a red ________ (fire engine / tractor).",
        ans: "(a) bank\n(b) letterbox\n(c) fire engine.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Bank and ATM",
        q: "What is an 'ATM', and why is it useful?",
        ans: "ATM stands for Automated Teller Machine. It allows people to withdraw cash safely 24 hours a day at any time using a bank debit card without standing in bank queues.",
        marks: 2,
        rubric: [
          { key: "Automated Teller Machine", marks: 1 },
          { key: "24-hour convenient cash withdrawal", marks: 1 }
        ]
      },
      {
        category: "Public Library",
        q: "What is the purpose of a neighborhood library?",
        ans: "A library provides a quiet, peaceful space where residents and students can read books, newspapers, and magazines, and borrow books to study at home.",
        marks: 2,
        rubric: [{ key: "Quiet reading and borrowing books", marks: 2 }]
      },
      {
        category: "Chemist Shop (Pharmacy)",
        q: "Where do we go to buy medicines prescribed by a doctor?",
        ans: "We go to a chemist shop (pharmacy or medical store).",
        marks: 1,
        rubric: [{ key: "Chemist shop / pharmacy", marks: 1 }]
      },
      {
        category: "Good Neighbor Values",
        q: "How can you be a good neighbor?",
        ans: "By greeting neighbors warmly with a smile, helping them in times of need, keeping noise levels low, and keeping common corridors and pathways clean.",
        marks: 2,
        rubric: [{ key: "Courtesy, low noise, cleanliness, and helpfulness", marks: 2 }]
      },
      {
        category: "Places of Worship",
        q: "Name four different places of worship found in our communities.",
        ans: "Four places of worship:\n1. Temple (Mandir)\n2. Mosque (Masjid)\n3. Church\n4. Gurudwara.",
        marks: 2,
        rubric: [{ key: "All 4 correct places of worship", marks: 2 }]
      }
    ]
  },
  {
    id: "sur3",
    num: 3,
    unit: "Unit 2: Neighborhood & Community Helpers",
    title: "Community Helpers",
    subtitle: "Doctor, Teacher, Police Officer, Farmer, Firefighter, Cleaner",
    concepts: ["Meaning of Community Helpers", "Key Roles: Farmer, Teacher, Doctor, Police Officer, Soldier", "Skilled Trades: Mason, Carpenter, Electrician, Plumber, Tailor", "Dignity of Labor and Respecting All Workers"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #f0fdf4, #dcfce7);border-radius:12px;width:100%;height:auto;">
      <circle cx="70" cy="80" r="20" fill="#fed7aa"/>
      <rect x="58" y="102" width="24" height="45" fill="#f8fafc" stroke="#cbd5e1"/>
      <path d="M 60 110 L 70 125 L 80 110" stroke="#ef4444" stroke-width="2" fill="none"/>
      <circle cx="150" cy="80" r="20" fill="#fed7aa"/>
      <rect x="138" y="102" width="24" height="45" fill="#3b82f6"/>
      <rect x="142" y="60" width="16" height="10" fill="#1e3a8a"/>
      <circle cx="230" cy="80" r="20" fill="#fed7aa"/>
      <rect x="218" y="102" width="24" height="45" fill="#eab308"/>
      <line x1="230" y1="110" x2="250" y2="135" stroke="#78350f" stroke-width="4"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#14532d">Community Helpers & Dignity of Labor</text>
    </svg>`,
    cbq: {
      context: "Every morning before sunrise, Ramu Kaka sweeps our colony street with a long broom and collects dry and wet garbage. Some children used to mock him. Teacher explained that without sanitation workers, our streets would turn into filthy disease hotspots within two days.",
      question: "Why is Ramu Kaka's work vital for society? What value does this incident teach about 'Dignity of Labor'?",
      answer: "Ramu Kaka's work is vital because sanitation workers keep our environment clean, remove rotting garbage, and prevent dangerous outbreaks of diseases like dengue, malaria, and plague. This incident teaches 'Dignity of Labor'—that no honest work is low or small, and every worker deserves equal respect, politeness, and gratitude.",
      rubric: [
        { key: "Importance of sanitation and disease prevention", marks: 1.5 },
        { key: "Concept of dignity of labor and respecting all workers", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "Who are 'Community Helpers'?",
        ans: "Community helpers are people whose professional work and services help society function smoothly, safely, and comfortably (e.g., Doctors, Teachers, Farmers, Cleaners).",
        marks: 2,
        rubric: [
          { key: "Definition of community helpers", marks: 1 },
          { key: "Valid examples", marks: 1 }
        ]
      },
      {
        category: "The Farmer",
        q: "Why is the farmer called the 'Annadata' (food provider) of the nation?",
        ans: "The farmer toils in hot sun, rain, and cold to plough fields, sow seeds, and harvest food grains, vegetables, and fruits that feed everyone in our country.",
        marks: 2,
        rubric: [
          { key: "Toils in fields to grow food crops", marks: 1 },
          { key: "Feeds the entire nation", marks: 1 }
        ]
      },
      {
        category: "The Doctor & Nurse",
        q: "What instruments do doctors use to examine sick patients?",
        ans: "Doctors use a 'stethoscope' to listen to our heart and chest sounds, and a 'thermometer' to measure body temperature when we have a fever.",
        marks: 2,
        rubric: [
          { key: "Stethoscope for heartbeat", marks: 1 },
          { key: "Thermometer for temperature", marks: 1 }
        ]
      },
      {
        category: "The Teacher",
        q: "What is the noble role of a teacher in a student's life?",
        ans: "A teacher educates children, teaches reading, writing, and arithmetic, instills moral values, and guides students to become responsible and good human beings.",
        marks: 2,
        rubric: [
          { key: "Educating and teaching academic skills", marks: 1 },
          { key: "Moral values and character building", marks: 1 }
        ]
      },
      {
        category: "Skilled Trades",
        q: "Name the worker who:\n(a) Repairs leaking water pipes and taps\n(b) Fixes electrical wires, switches, and fans\n(c) Makes wooden tables, chairs, and doors\n(d) Constructs brick walls and concrete houses",
        ans: "(a) Repairs pipes - Plumber\n(b) Fixes electrical wires - Electrician\n(c) Makes wooden furniture - Carpenter\n(d) Constructs brick houses - Mason.",
        marks: 2,
        rubric: [
          { key: "All 4 correct trades named", marks: 2 }
        ]
      },
      {
        category: "Footwear & Clothing Helpers",
        q: "What does a cobbler do, and what does a tailor do?",
        ans: "• Cobbler: Mends, repairs, and polishes worn-out shoes and sandals.\n• Tailor: Stitches beautiful clothes, uniforms, shirts, and dresses using a sewing machine.",
        marks: 2,
        rubric: [
          { key: "Cobbler's role", marks: 1 },
          { key: "Tailor's role", marks: 1 }
        ]
      },
      {
        category: "National Soldier",
        q: "What is the duty of a soldier (Jawan) guarding our nation's borders?",
        ans: "Soldiers guard our borders in extreme cold, deserts, and jungles to protect our country from enemy attacks so that all citizens can live in peace and safety.",
        marks: 2,
        rubric: [
          { key: "Guards borders against enemies", marks: 1 },
          { key: "Ensures peace and safety of citizens", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the helper with the tool they use:\n(a) Tailor -> (i) Trowel and cement\n(b) Barber -> (ii) Sewing machine and measuring tape\n(c) Mason -> (iii) Stethoscope and syringe\n(d) Doctor -> (iv) Scissors and comb",
        ans: "(a) Tailor -> (ii) Sewing machine and measuring tape\n(b) Barber -> (iv) Scissors and comb\n(c) Mason -> (i) Trowel and cement\n(d) Doctor -> (iii) Stethoscope and syringe.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) A pilot flies airplanes and helicopters.\n(b) We should speak rudely to security guards and domestic house helps.\n(c) A potter shapes clay on a spinning wheel to make earthen pots and diyas.",
        ans: "(a) True\n(b) False (We must always speak politely and respectfully)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) A ________ (baker / cobbler) bakes fresh bread, biscuits, and cakes.\n(b) A ________ (firefighter / painter) bravely puts out dangerous fires.\n(c) We celebrate Teachers' Day in India on ________ (5th September / 14th November).",
        ans: "(a) baker\n(b) firefighter\n(c) 5th September.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Dignity of Labor",
        q: "What does 'Dignity of Labor' mean?",
        ans: "'Dignity of Labor' means that all forms of honest work are equally respectable and valuable. No profession is small, low, or inferior.",
        marks: 2,
        rubric: [
          { key: "All honest work is honorable", marks: 1 },
          { key: "No profession is small or inferior", marks: 1 }
        ]
      },
      {
        category: "Traffic Police Officer",
        q: "What does a traffic police officer do at a busy intersection?",
        ans: "A traffic police officer directs moving traffic with hand signals and whistle, ensures vehicles follow road rules, and prevents traffic jams and accidents.",
        marks: 2,
        rubric: [{ key: "Controls traffic, prevents jams and accidents", marks: 2 }]
      },
      {
        category: "Blacksmith vs Goldsmith",
        q: "What is the difference between a blacksmith and a goldsmith?",
        ans: "• Blacksmith: Heats and hammers iron to make tools, gates, and horseshoes.\n• Goldsmith: Crafts precious gold and silver into delicate jewelry and ornaments.",
        marks: 2,
        rubric: [
          { key: "Blacksmith works with iron", marks: 1 },
          { key: "Goldsmith crafts gold/silver jewelry", marks: 1 }
        ]
      },
      {
        category: "Expressing Gratitude",
        q: "How can you show appreciation to community helpers around your home?",
        ans: "We can thank them with a warm smile, offer cool drinking water in hot summer, say 'Thank you', and greet them politely every day.",
        marks: 2,
        rubric: [{ key: "Thanking with smile, offering water, polite greetings", marks: 2 }]
      },
      {
        category: "Riddle on Helpers",
        q: "Guess who I am:\n'I wear a white uniform, have a stethoscope around my neck, write prescriptions for medicines, and help cure your fever. Who am I?'",
        ans: "I am a 'Doctor'.",
        marks: 1,
        rubric: [{ key: "Doctor", marks: 1 }]
      }
    ]
  },
  {
    id: "sur4",
    num: 4,
    unit: "Unit 3: School Life & Transport",
    title: "School Days & Learning Together",
    subtitle: "Classroom Etiquette, Library, Sports Field & Respecting Teachers",
    concepts: ["Importance of School in Life", "Places in a School (Classroom, Library, Science Lab, Playground, Staff Room)", "School Rules and Discipline", "Friendship, Co-operation, and Team Spirit"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #eff6ff, #dbeafe);border-radius:12px;width:100%;height:auto;">
      <rect x="50" y="60" width="200" height="90" fill="#3b82f6" rx="6"/>
      <polygon points="150,25 35,65 265,65" fill="#1d4ed8"/>
      <rect x="135" y="100" width="30" height="50" fill="#1e3a8a"/>
      <rect x="70" y="80" width="25" height="25" fill="#93c5fd" rx="2"/>
      <rect x="110" y="80" width="20" height="25" fill="#93c5fd" rx="2"/>
      <rect x="170" y="80" width="20" height="25" fill="#93c5fd" rx="2"/>
      <rect x="205" y="80" width="25" height="25" fill="#93c5fd" rx="2"/>
      <circle cx="150" cy="48" r="8" fill="#fef08a"/>
      <text x="150" y="180" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#1e3a8a">School Days & Learning Together</text>
    </svg>`,
    cbq: {
      context: "During a relay race on Sports Day, Rohan fell down on the running track and scraped his knee. His teammate Varun stopped, helped Rohan stand up, supported him to the first aid station, and cheered him up, even though their team lost the race.",
      question: "What noble value did Varun demonstrate, and why is 'sportsmanship' more important than winning?",
      answer: "Varun demonstrated true 'sportsmanship', empathy, and genuine teamwork. Sportsmanship is more important than merely winning because sports teach us fairness, kindness, helping a fallen friend, and treating victory and defeat with a graceful smile.",
      rubric: [
        { key: "Identifying sportsmanship, empathy, and teamwork", marks: 1.5 },
        { key: "Value of kindness and grace over winning", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is a 'School'? Why is going to school essential for every child?",
        ans: "A school is a temple of learning. Going to school is essential because it teaches us how to read, write, do mathematics, develop good habits, play sports, and become knowledgeable and compassionate citizens.",
        marks: 3,
        rubric: [
          { key: "Temple of learning", marks: 1 },
          { key: "Academic knowledge (reading, writing, maths)", marks: 1 },
          { key: "Character building and citizenship", marks: 1 }
        ]
      },
      {
        category: "Places in School",
        q: "Name four important places in a school building and their purposes.",
        ans: "1. Classroom: Where students sit and study lessons with teachers.\n2. Library: A quiet place to read storybooks and reference books.\n3. Playground: For outdoor games, sports, and PT exercises.\n4. Principal's Office: Where the head of the school manages administration.",
        marks: 4,
        rubric: [
          { key: "1 mark per place with correct purpose", marks: 4 }
        ]
      },
      {
        category: "Head of the School",
        q: "Who is the head of a school, and what is their role?",
        ans: "The 'Principal' (or Headmaster/Headmistress) is the head of the school. They supervise teachers, maintain discipline, and ensure overall school excellence.",
        marks: 2,
        rubric: [
          { key: "Principal / Headmaster", marks: 1 },
          { key: "Supervises and manages school", marks: 1 }
        ]
      },
      {
        category: "Classroom Rules",
        q: "State three rules that students should follow in the classroom.",
        ans: "1. Reach school and enter class on time.\n2. Raise your hand before asking or answering questions.\n3. Keep the classroom clean and never scribble on desks or walls.",
        marks: 3,
        rubric: [
          { key: "Punctuality", marks: 1 },
          { key: "Raising hand", marks: 1 },
          { key: "Cleanliness and no defacing property", marks: 1 }
        ]
      },
      {
        category: "Morning Assembly",
        q: "What happens during the school morning assembly?",
        ans: "All students and teachers gather together to sing morning prayers, recite the National Anthem, pledge allegiance to the nation, listen to thought for the day, and do light physical exercises.",
        marks: 2,
        rubric: [
          { key: "Prayer and National Anthem", marks: 1 },
          { key: "Thought of day and physical exercises", marks: 1 }
        ]
      },
      {
        category: "Library Etiquette",
        q: "Why must strict silence be maintained inside a school library?",
        ans: "Silence is necessary so that students can concentrate, read peacefully without distractions, and not disturb fellow readers.",
        marks: 2,
        rubric: [
          { key: "Concentration and peaceful reading", marks: 1 },
          { key: "No distraction to others", marks: 1 }
        ]
      },
      {
        category: "Care of School Property",
        q: "Why should we not damage school desks, benches, or library books?",
        ans: "School property belongs to everyone. Damaging desks or tearing book pages deprives other students of study materials and shows disrespect.",
        marks: 2,
        rubric: [{ key: "Common property / Respect for study materials", marks: 2 }]
      },
      {
        category: "Match the Following",
        q: "Match the school area with its activity:\n(a) Science Lab -> (i) Eating tiffin and running games\n(b) Playground -> (ii) Practical scientific experiments\n(c) Art Room -> (iii) First aid when sick or injured\n(d) Medical Room -> (iv) Painting and craft work",
        ans: "(a) Science Lab -> (ii) Practical scientific experiments\n(b) Playground -> (i) Eating tiffin and running games\n(c) Art Room -> (iv) Painting and craft work\n(d) Medical Room -> (iii) First aid when sick or injured.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) We should push our classmates while running in school corridors.\n(b) Sharing our lunch tiffin with a friend who forgot theirs is a sign of kindness.\n(c) We should greet our teachers with 'Good morning' or 'Namaste'.",
        ans: "(a) False (Never run or push in corridors; walk in a line)\n(b) True\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct statement", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) We should throw fruit peels and paper scraps into the ________ (dustbin / bag).\n(b) The special clothes worn by all students in school are called ________ (uniform / costume).\n(c) We stand in attention while singing the ________ (National Anthem / nursery rhyme).",
        ans: "(a) dustbin\n(b) uniform\n(c) National Anthem.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Recess (Lunch Break)",
        q: "What should you do before opening your tiffin box during recess?",
        ans: "Always wash your hands thoroughly with soap and water to wash away chalk dust and germs before eating.",
        marks: 2,
        rubric: [{ key: "Wash hands with soap and water", marks: 2 }]
      },
      {
        category: "Teamwork in Sports",
        q: "What does playing team games like football or cricket teach us?",
        ans: "Team games teach us cooperation, mutual trust, coordination, following rules, and putting team success ahead of individual ego.",
        marks: 2,
        rubric: [{ key: "Cooperation, coordination, and following rules", marks: 2 }]
      },
      {
        category: "Lost and Found",
        q: "What should you do if you find an unclaimed water bottle or pencil box in school?",
        ans: "Take it immediately to your class teacher or hand it over to the school 'Lost and Found' counter.",
        marks: 1,
        rubric: [{ key: "Hand over to teacher / Lost and Found", marks: 1 }]
      },
      {
        category: "Respecting School Staff",
        q: "Who else works in a school besides teachers, and how should we treat them?",
        ans: "Bhaiyajis, didis (peons/sweepers), security guards, and bus drivers work in school. We should treat them with equal respect, say thank you, and never litter.",
        marks: 2,
        rubric: [{ key: "Sanitation staff, guards, drivers treated with respect", marks: 2 }]
      },
      {
        category: "Bullying Prevention",
        q: "Why is teasing or bullying other children wrong?",
        ans: "Bullying hurts others emotionally and physically, makes school fearful, and is strictly against school discipline. We should be kind and include everyone in our games.",
        marks: 2,
        rubric: [{ key: "Hurts others and destroys safety; be kind", marks: 2 }]
      }
    ]
  },
  {
    id: "sur5",
    num: 5,
    unit: "Unit 3: School Life & Transport",
    title: "Means of Transport",
    subtitle: "Land (Bus, Train), Water (Boat, Ship), Air (Aeroplane, Helicopter)",
    concepts: ["Three Modes of Transport: Land, Water, Air", "Land Transport: Road Vehicles and Trains on Tracks", "Water Transport: Boats, Steamers, Cargo Ships", "Air Transport: Fastest Mode (Aeroplanes, Helicopters)"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fefce8, #fef08a);border-radius:12px;width:100%;height:auto;">
      <rect x="40" y="110" width="100" height="40" rx="6" fill="#ef4444"/>
      <circle cx="65" cy="150" r="12" fill="#1f2937"/>
      <circle cx="115" cy="150" r="12" fill="#1f2937"/>
      <rect x="50" y="118" width="18" height="15" fill="#bae6fd" rx="2"/>
      <rect x="75" y="118" width="18" height="15" fill="#bae6fd" rx="2"/>
      <rect x="100" y="118" width="18" height="15" fill="#bae6fd" rx="2"/>
      <path d="M 180 60 L 250 50 L 265 35 L 255 50 L 275 50 L 280 42 L 285 52 L 235 65 Z" fill="#3b82f6"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#854d0e">Means of Transport</text>
    </svg>`,
    cbq: {
      context: "Arun's family in Chennai needs to travel: his father needs to attend an emergency meeting in London within 12 hours, his family is traveling to Delhi for a wedding with heavy luggage, and his uncle is crossing a wide backwater river in Kerala.",
      question: "Which mode of transport should each person choose and why?",
      answer: "Recommended transports:\n1. Father to London: 'Air Transport' (Aeroplane), because it is the fastest mode of travel for long international distances.\n2. Family to Delhi with luggage: 'Land Transport' (Train), because trains are comfortable, economical, and ideal for long domestic journeys with heavy luggage.\n3. Uncle in Kerala backwaters: 'Water Transport' (Boat or Ferry), because it safely navigates rivers and backwaters where roads do not exist.",
      rubric: [
        { key: "Aeroplane for London with speed reason", marks: 1 },
        { key: "Train for Delhi with comfort/luggage reason", marks: 1 },
        { key: "Boat/ferry for backwaters with waterway reason", marks: 1 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is 'Transport'? Name the three main modes of transport.",
        ans: "Transport is the movement of people and goods from one place to another. The three main modes are:\n1. Land Transport\n2. Water Transport\n3. Air Transport.",
        marks: 3,
        rubric: [
          { key: "Definition of transport", marks: 1 },
          { key: "Listing Land, Water, and Air transport", marks: 2 }
        ]
      },
      {
        category: "Land Transport",
        q: "Differentiate between road transport vehicles and rail transport.",
        ans: "• Road Vehicles: Run on paved roads using rubber tyres (e.g., Bus, Car, Auto-rickshaw, Bicycle).\n• Rail Transport: Trains run on fixed steel railway tracks and can carry hundreds of passengers and heavy cargo over long distances.",
        marks: 3,
        rubric: [
          { key: "Road vehicles and examples", marks: 1.5 },
          { key: "Rail transport on tracks and capacity", marks: 1.5 }
        ]
      },
      {
        category: "Fastest Mode of Travel",
        q: "Which is the fastest mode of transport? Mention one advantage and one disadvantage of it.",
        ans: "Air transport (Aeroplane) is the fastest mode of transport.\n• Advantage: Covers thousands of kilometers across oceans and continents in a few hours.\n• Disadvantage: It is very expensive and cannot carry very bulky cargo like coal or steel.",
        marks: 3,
        rubric: [
          { key: "Air transport identified", marks: 1 },
          { key: "Valid advantage", marks: 1 },
          { key: "Valid disadvantage", marks: 1 }
        ]
      },
      {
        category: "Water Transport",
        q: "Name three vehicles used for water transport.",
        ans: "Three water transport vehicles:\n1. Boat\n2. Ship (Cargo ship / Cruise liner)\n3. Steamer (or Ferry, Submarine).",
        marks: 3,
        rubric: [
          { key: "1 mark per correct water vehicle", marks: 3 }
        ]
      },
      {
        category: "Non-Polluting Vehicles",
        q: "Name two means of transport that do not use petrol or diesel and do not cause air pollution.",
        ans: "Two eco-friendly, non-polluting vehicles: Bicycle and Cycle-rickshaw (or Electric Metro train, Walking).",
        marks: 2,
        rubric: [{ key: "Bicycle and Cycle-rickshaw/Metro", marks: 2 }]
      },
      {
        category: "Special Vehicles",
        q: "Name the special vehicle used for the following purposes:\n(a) Carrying sick or injured patients to hospital\n(b) Putting out huge fires\n(c) Delivering letters and packages to homes",
        ans: "(a) Carrying patients - Ambulance\n(b) Putting out fires - Fire Engine\n(c) Delivering mail - Mail van / Post van.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct special vehicle", marks: 3 }
        ]
      },
      {
        category: "Fuel for Vehicles",
        q: "What fuels do cars, buses, and scooters run on? Name a clean, green gas fuel.",
        ans: "Vehicles run on Petrol, Diesel, or Electricity. A clean green gas fuel is 'CNG' (Compressed Natural Gas).",
        marks: 2,
        rubric: [
          { key: "Petrol/Diesel", marks: 1 },
          { key: "CNG / Electricity", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the vehicle with its driver or operating track:\n(a) Aeroplane -> (i) Railway station / Engine driver\n(b) Ship -> (ii) Helipad / Pilot\n(c) Train -> (iii) Harbour / Captain\n(d) Helicopter -> (iv) Airport / Pilot",
        ans: "(a) Aeroplane -> (iv) Airport / Pilot\n(b) Ship -> (iii) Harbour / Captain\n(c) Train -> (i) Railway station / Engine driver\n(d) Helicopter -> (ii) Helipad / Pilot.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) An aeroplane lands and takes off at an airport runway.\n(b) Camels are used as a means of transport in snowy polar regions.\n(c) Submarines travel underwater in deep seas.",
        ans: "(a) True\n(b) False (Camels are used in hot deserts; sledges pulled by dogs/reindeer in polar snow)\n(c) True.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) A helicopter has rotating ________ (blades / wheels) on top to lift it into the air.\n(b) Ships sail on the sea and anchor at a ________ (harbour or port / bus stop).\n(c) The underground and elevated electric train in big cities is called the ________ (Metro / Bullock cart).",
        ans: "(a) blades\n(b) harbour (or port)\n(c) Metro.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Desert Transport",
        q: "Why is the camel called the 'Ship of the Desert'?",
        ans: "The camel can walk easily on hot desert sand due to its broad padded feet and can survive for days without food or water, carrying heavy loads across deserts.",
        marks: 2,
        rubric: [
          { key: "Broad padded feet on sand", marks: 1 },
          { key: "Survives without water for days carrying loads", marks: 1 }
        ]
      },
      {
        category: "Metro Train Benefits",
        q: "Why do millions of commuters prefer the Metro train in modern cities?",
        ans: "Metro trains are fast, air-conditioned, punctual, avoid road traffic jams, and run on clean electricity without emitting smoke.",
        marks: 2,
        rubric: [{ key: "Fast, avoids traffic jams, clean electric energy", marks: 2 }]
      },
      {
        category: "Olden Days Transport",
        q: "How did people travel in olden times before engines were invented?",
        ans: "People traveled on foot or used animal-drawn carts such as bullock carts, horse carriages (tangas), and camel carts.",
        marks: 2,
        rubric: [{ key: "On foot or animal-drawn carts (bullock/horse/camel)", marks: 2 }]
      },
      {
        category: "Public vs Private Transport",
        q: "Give one reason why taking a public bus is better for the environment than driving individual cars.",
        ans: "One public bus can carry 50 people, reducing the need for 50 separate cars on the road, which drastically reduces traffic jams and air pollution.",
        marks: 2,
        rubric: [{ key: "Carries many people, cuts traffic and emissions", marks: 2 }]
      },
      {
        category: "Riddle on Vehicles",
        q: "Guess who I am:\n'I have no wheels, I have no wings, yet I glide smoothly over ocean waves carrying heavy containers across countries. Who am I?'",
        ans: "I am a 'Ship' (or Cargo Ship).",
        marks: 1,
        rubric: [{ key: "Ship", marks: 1 }]
      }
    ]
  },
  {
    id: "sur6",
    num: 6,
    unit: "Unit 4: Play, Waste & Shelter",
    title: "Recreation & Games We Play",
    subtitle: "Indoor Games (Ludo, Chess), Outdoor Games (Cricket, Tag)",
    concepts: ["Meaning and Need of Recreation", "Indoor Games: Ludo, Carrom, Chess, Snakes & Ladders", "Outdoor Games: Cricket, Football, Kho-Kho, Kabaddi", "Fair Play, Team Spirit, and Avoiding Excessive Screen Time"],
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="background:linear-gradient(135deg, #fdf2f8, #fce7f3);border-radius:12px;width:100%;height:auto;">
      <rect x="50" y="50" width="80" height="80" fill="#f8fafc" stroke="#db2777" stroke-width="4" rx="4"/>
      <circle cx="90" cy="90" r="14" fill="#f43f5e"/>
      <circle cx="65" cy="65" r="8" fill="#3b82f6"/>
      <circle cx="115" cy="65" r="8" fill="#eab308"/>
      <circle cx="65" cy="115" r="8" fill="#22c55e"/>
      <circle cx="115" cy="115" r="8" fill="#ef4444"/>
      <circle cx="210" cy="100" r="30" fill="#ef4444"/>
      <path d="M 190 85 Q 210 100 190 115" stroke="#fff" stroke-width="3" fill="none"/>
      <path d="M 230 85 Q 210 100 230 115" stroke="#fff" stroke-width="3" fill="none"/>
      <rect x="235" y="60" width="12" height="70" fill="#a16207" rx="3" transform="rotate(25 240 95)"/>
      <text x="150" y="25" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="14" fill="#9d174d">Recreation & Games We Play</text>
    </svg>`,
    cbq: {
      context: "Siddharth spends 5 hours every evening playing mobile phone games in a dark room. He has stopped going to the park, gained unhealthy weight, and his eyes often water and sting.",
      question: "Why is excessive screen time harmful for young children? What two outdoor games should Siddharth play instead to become fit?",
      answer: "Excessive mobile screen time causes eye strain, headaches, obesity, lack of social skills, and poor sleep. Siddharth should switch to playing outdoor games like Football, Cricket, Badminton, or Tag (Chhupan-Chhupai) in the park, which strengthen muscles, improve stamina, provide fresh air, and make him happy with real friends.",
      rubric: [
        { key: "Harmful effects of screen time (eye strain, obesity, poor sleep)", marks: 1.5 },
        { key: "Suggesting outdoor games with physical and social benefits", marks: 1.5 }
      ]
    },
    questions: [
      {
        category: "Think and Tell",
        q: "What is 'Recreation'? Why is recreation necessary after school and study?",
        ans: "Recreation is any enjoyable activity done during leisure time to relax, refresh our mind, and have fun. It is necessary because continuous study tires our brain; recreation restores energy and keeps our spirit cheerful.",
        marks: 3,
        rubric: [
          { key: "Definition of recreation", marks: 1.5 },
          { key: "Refreshes mind and restores energy", marks: 1.5 }
        ]
      },
      {
        category: "Indoor vs Outdoor Games",
        q: "Differentiate between Indoor games and Outdoor games with two examples of each.",
        ans: "• Indoor Games: Played inside a room or house; do not require large open grounds (e.g., Chess, Carrom, Ludo).\n• Outdoor Games: Played in open fields, parks, or stadiums; require running and physical exertion (e.g., Football, Cricket, Badminton).",
        marks: 3,
        rubric: [
          { key: "Indoor games definition and 2 examples", marks: 1.5 },
          { key: "Outdoor games definition and 2 examples", marks: 1.5 }
        ]
      },
      {
        category: "Benefits of Outdoor Play",
        q: "List three health benefits of playing outdoor games regularly.",
        ans: "1. Strengthens bones and muscles and keeps body fit and active.\n2. Inhales fresh oxygen and absorbs healthy morning sunlight.\n3. Teaches teamwork, sharing, and making genuine friends.",
        marks: 3,
        rubric: [
          { key: "1 mark per valid physical/mental benefit", marks: 3 }
        ]
      },
      {
        category: "Traditional Indian Games",
        q: "Name three traditional games that children in India love playing in streets and village grounds.",
        ans: "Three traditional Indian games:\n1. Kho-Kho\n2. Kabaddi\n3. Gilli-Danda (or Chhupan-Chhupai / Hide and Seek, Stapoo / Hopscotch).",
        marks: 3,
        rubric: [
          { key: "Three valid traditional Indian games", marks: 3 }
        ]
      },
      {
        category: "Mind Games",
        q: "Which board game is known as the game of kings and helps sharpen our thinking and strategy skills?",
        ans: "Chess (Shatranj) is known as the mind game that sharpens thinking, planning, and concentration.",
        marks: 2,
        rubric: [
          { key: "Chess", marks: 1 },
          { key: "Sharpens thinking/concentration", marks: 1 }
        ]
      },
      {
        category: "Fair Play & Rules",
        q: "Why is it important to follow rules while playing any game?",
        ans: "Following rules ensures that the game is fair, safe, and enjoyable for all players without cheating, fights, or arguments.",
        marks: 2,
        rubric: [
          { key: "Ensures fairness and safety", marks: 1 },
          { key: "Prevents cheating and arguments", marks: 1 }
        ]
      },
      {
        category: "Match the Following",
        q: "Match the game with the equipment used:\n(a) Cricket -> (i) Black & white chequered board\n(b) Badminton -> (ii) Bat, ball, and wickets\n(c) Carrom -> (iii) Racket and shuttlecock\n(d) Chess -> (iv) Wooden board, striker, and coins",
        ans: "(a) Cricket -> (ii) Bat, ball, and wickets\n(b) Badminton -> (iii) Racket and shuttlecock\n(c) Carrom -> (iv) Wooden board, striker, and coins\n(d) Chess -> (i) Black & white chequered board.",
        marks: 2,
        rubric: [
          { key: "All 4 correct matches", marks: 2 }
        ]
      },
      {
        category: "True or False",
        q: "State True or False:\n(a) Playing mobile phone games for hours keeps our muscles strong.\n(b) A good sportsperson gracefully accepts both winning and losing.\n(c) Carrom is an outdoor game played on a 100-meter grass field.",
        ans: "(a) False (Causes eye fatigue and sedentary weakness)\n(b) True (True sportsmanship)\n(c) False (Carrom is an indoor table board game).",
        marks: 3,
        rubric: [
          { key: "1 mark per correct answer", marks: 3 }
        ]
      },
      {
        category: "Fill in the Blanks",
        q: "Fill in the blanks:\n(a) Football is played by kicking the ball with our ________ (feet / hands).\n(b) Snakes and Ladders is played with a rolling ________ (dice / bat).\n(c) The national game of India is officially recognized as Field ________ (Hockey / Cricket).",
        ans: "(a) feet\n(b) dice\n(c) Hockey.",
        marks: 3,
        rubric: [
          { key: "1 mark per correct blank", marks: 3 }
        ]
      },
      {
        category: "Sports Day at School",
        q: "What fun events take place on the school Annual Sports Day?",
        ans: "Fun events include 50-meter sprint races, lemon-and-spoon race, sack race, relay race, tug-of-war, and gymnastics display.",
        marks: 2,
        rubric: [{ key: "Two or three valid sports day events", marks: 2 }]
      },
      {
        category: "Recreational Places",
        q: "Mention two places where families go for weekend recreation.",
        ans: "1. Zoo or Botanical Garden (to observe animals and birds)\n2. Amusement park, planetarium, or beach.",
        marks: 2,
        rubric: [{ key: "Two valid recreational family destinations", marks: 2 }]
      },
      {
        category: "Team Spirit",
        q: "What does 'Team Spirit' mean in sports?",
        ans: "Team spirit means playing cooperatively with unity, supporting every teammate, encouraging those who make mistakes, and working together towards common success.",
        marks: 2,
        rubric: [{ key: "Unity, support, and cooperation in play", marks: 2 }]
      },
      {
        category: "Safety While Playing",
        q: "State one safety precaution to follow while playing outdoor games.",
        ans: "Always wear sports shoes to prevent slipping, do not push fellow players on concrete grounds, and never play on roads with traffic.",
        marks: 2,
        rubric: [{ key: "Sports shoes, safe ground, no pushing", marks: 2 }]
      },
      {
        category: "Art and Music as Recreation",
        q: "Can painting, singing, and dancing be recreational activities? Explain.",
        ans: "Yes, creative arts like dancing, singing, and painting express our inner joy, calm our mind, and are wonderful forms of recreation.",
        marks: 1,
        rubric: [{ key: "Creative self-expression and mental relaxation", marks: 1 }]
      },
      {
        category: "Sportsmanship Slogan",
        q: "What famous proverb describes the value of play along with study?",
        ans: "'All work and no play makes Jack a dull boy!' (पढ़ाई के साथ-साथ खेलकूद भी स्वस्थ जीवन के लिए आवश्यक है!)",
        marks: 1,
        rubric: [{ key: "All work and no play makes Jack a dull boy", marks: 1 }]
      }
    ]
  }
];

module.exports = { surroundingsPart1 };
