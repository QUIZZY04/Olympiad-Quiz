// Official NCERT Class 4 Environmental Studies (Looking Around / आस-पास) Complete Dataset - Chapters 1 to 27
// Aligned with CBSE Curriculum (2026-27 Session)

const lookingAroundChapters = [
  // -------------------------------------------------------------------------
  // CHAPTER 1: GOING TO SCHOOL
  // -------------------------------------------------------------------------
  {
    id: "la1",
    num: 1,
    unit: "Classic Track: Looking Around",
    title: "Going to School",
    subtitle: "Transport Modes Across India: Bamboo Bridges, Trolleys, Vallam, Camel Carts & Jugaad",
    concepts: [
      "Different ways children travel to school across geographical terrains in India.",
      "Assam: Walking on elevated bamboo and rope bridges across flooded streams.",
      "Ladakh: Crossing deep canyons using a wooden trolley pulling along a fixed iron rope with pulleys.",
      "Kerala: Traveling in small wooden boats called 'Vallam' to cross backwater canals.",
      "Rajasthan (Camel carts), Gujarat (Jugaad vehicle powered by motorcycle engine), and Uttarakhand (rocky mountain paths)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Going to School — Geographical Transport Across India</text>
      <!-- Assam Bamboo Bridge -->
      <g transform="translate(100, 75)">
        <line x1="-35" y1="20" x2="35" y2="20" stroke="#78350f" stroke-width="4"/>
        <line x1="-25" y1="20" x2="-25" y2="38" stroke="#78350f" stroke-width="2"/>
        <line x1="25" y1="20" x2="25" y2="38" stroke="#78350f" stroke-width="2"/>
        <text x="0" y="5" font-size="16" text-anchor="middle">🎋🧒</text>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e40af" text-anchor="middle">असम (बांस का पुल)</text>
      </g>
      <!-- Ladakh Trolley -->
      <g transform="translate(230, 75)">
        <line x1="-40" y1="-15" x2="40" y2="-15" stroke="#475569" stroke-width="3"/>
        <circle cx="0" cy="-15" r="5" fill="#f59e0b"/>
        <rect x="-15" y="0" width="30" height="24" fill="#fed7aa" stroke="#c2410c" rx="3"/>
        <text x="0" y="16" font-size="12" text-anchor="middle">🧒🧒</text>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e40af" text-anchor="middle">लद्दाख (ट्रॉली-पुली)</text>
      </g>
      <!-- Kerala Vallam -->
      <g transform="translate(360, 75)">
        <path d="M-30 15 Q0 0 30 15 Z" fill="#78350f"/>
        <text x="0" y="8" font-size="14" text-anchor="middle">🛶</text>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e40af" text-anchor="middle">केरल (वल्लम - नाव)</text>
      </g>
      <!-- Gujarat Jugaad -->
      <g transform="translate(485, 75)">
        <rect x="-25" y="5" width="50" height="20" fill="#facc15" stroke="#ca8a04" rx="2"/>
        <circle cx="-15" cy="25" r="6" fill="#1e293b"/>
        <circle cx="15" cy="25" r="6" fill="#1e293b"/>
        <text x="0" y="2" font-size="14" text-anchor="middle">🛵</text>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e40af" text-anchor="middle">गुजरात (जुगाड़ वाहन)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Daring courage and passion for education overcome rivers, snow, and desert sands.</text>
    </svg>`,
    questions: [
      {
        category: "Geographical Adaptation • Transport",
        q: "How do children in Ladakh reach their school across wide and deep rivers? What is a 'Vallam', and in which state of India is it used?",
        ans: `<strong>1. School Travel in Ladakh:</strong><br>
In Ladakh, rivers are very wide and deep. Children cross them using a strong <strong>wooden trolley</strong> (an open box with seats). A thick, strong iron rope is tied securely to giant rocks or sturdy trees on both river banks. A pulley rolls over the iron rope, pulling the trolley carrying four to five children smoothly across the canyon.<br><br>
<strong>2. Vallam:</strong><br>
A 'Vallam' is a small traditional wooden boat used in parts of <strong>Kerala</strong> to help children cross backwater lagoons, rivers, and canals to reach school.`,
        marks: 3,
        rubric: [
          { key: "Detailed explanation of Ladakh trolley and pulley system", marks: "1.5 M" },
          { key: "Definition of Vallam and Kerala state reference", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Universal Right to Safe Education",
      text: "In many hilly villages of Uttarakhand, the path to school is strewn with steep, jagged rocks and wild bushes.",
      question: "What physical qualities do children develop traveling daily on mountain paths, and how should local panchayats assist them?",
      answer: "Children develop extraordinary balance, foot agility, strong leg muscles, and fearless resilience. Panchayats must pave safe all-weather stone pathways, erect safety railings near steep precipices, and build small footbridges over mountain torrents to ensure zero dropouts.",
      rubric: "1.5 Marks for physical resilience and agility; 1.5 Marks for civic infrastructure improvements."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 2: EAR TO EAR
  // -------------------------------------------------------------------------
  {
    id: "la2",
    num: 2,
    unit: "Classic Track: Looking Around",
    title: "Ear to Ear",
    subtitle: "Animal Ears, Hearing Mechanisms, Skin Patterns & Mammals vs. Egg-Laying Animals",
    concepts: [
      "Animals whose ears can be seen outside: Elephants (fan-like), rabbits (leaf-like on top of head), deer, dogs, cows.",
      "Animals whose ears are hidden tiny holes covered with feathers: Birds (sparrows, crows, ducks), lizards, and crocodiles.",
      "The Golden Rule of Animal Reproduction: Animals with visible external ears and hair on their body give birth to live babies (Mammals / Viviparous).",
      "Animals without external ears and without hair (scales/feathers) lay eggs (Oviparous).",
      "Skin patterns: Zebra stripes, tiger stripes, leopard rosettes, deer spots."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fefce8" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Ear to Ear — The Golden Rule of Animal Reproduction</text>
      <!-- Group 1: Mammals -->
      <g transform="translate(150, 85)">
        <rect x="-100" y="-30" width="200" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2" rx="8"/>
        <text x="0" y="-10" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#713f12" text-anchor="middle">External Ears + Body Hair 🐘🐕</text>
        <text x="0" y="10" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b45309" text-anchor="middle">Give Birth to Live Babies</text>
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="8" fill="#78350f" text-anchor="middle">(Mammals / Viviparous)</text>
      </g>
      <!-- Group 2: Egg Layers -->
      <g transform="translate(430, 85)">
        <rect x="-100" y="-30" width="200" height="60" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="8"/>
        <text x="0" y="-10" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#14532d" text-anchor="middle">Hidden Ear Holes + Feathers/Scales 🐦🦎</text>
        <text x="0" y="10" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Lay Eggs</text>
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="8" fill="#166534" text-anchor="middle">(Birds & Reptiles / Oviparous)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#854d0e" text-anchor="middle">Visible ears + Hair = Give birth | Hidden ears + Feathers/Scales = Lay eggs!</text>
    </svg>`,
    questions: [
      {
        category: "Biological Classification • Animal Science",
        q: "What is the biological rule that tells us whether an animal gives birth to babies or lays eggs just by observing its ears and skin? Give two examples of each group.",
        ans: `<strong>The Golden Rule:</strong><br>
1. <strong>Animals that give birth to live babies (Viviparous / Mammals):</strong><br>
• Those animals whose <em>ears can be seen outside</em> on their heads AND who have <em>hair or fur on their skin</em> give birth to young babies.<br>
• <em>Examples:</em> Cow, Dog, Elephant, Cat, Human beings.<br><br>
2. <strong>Animals that lay eggs (Oviparous):</strong><br>
• Those animals whose <em>ears cannot be seen from outside</em> (they have tiny hidden ear holes covered by feathers or scales) AND who do <em>not have hair on their skin</em> lay eggs.<br>
• <em>Examples:</em> Sparrow, Pigeon, Snake, Lizard, Crocodile, Frog.`,
        marks: 4,
        rubric: [
          { key: "Detailed rule for live-bearing animals (visible ears + hair)", marks: "1.5 M" },
          { key: "Detailed rule for egg-laying animals (hidden ear holes + no hair)", marks: "1.5 M" },
          { key: "Two accurate examples for each group", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Crocodile and Lizard Hearing Mechanism",
      text: "A student observes a garden lizard on a wall and wonders if lizards are deaf because she cannot see any external ear flaps.",
      question: "Are lizards and crocodiles deaf? Explain how they hear sounds.",
      answer: "No, lizards and crocodiles are not deaf; they have keen hearing. Instead of external fleshy ear flaps (pinnae), they have tiny, sensitive ear holes on either side of their head behind their eyes. These ear canals are protected by thin scales or membrane folds that capture acoustic vibrations accurately.",
      rubric: "1.5 Marks for stating they are not deaf; 1.5 Marks for explaining protected tiny ear holes."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 3: A DAY WITH NANDU
  // -------------------------------------------------------------------------
  {
    id: "la3",
    num: 3,
    unit: "Classic Track: Looking Around",
    title: "A Day with Nandu",
    subtitle: "Baby Elephant Nandu, Elephant Herd Dynamics, Matriarchal Leadership & Wildlife Facts",
    concepts: [
      "Nandu: A three-month-old baby elephant weighing 200 kilograms.",
      "An adult elephant can eat more than 100 kilograms of green leaves and twigs in a single day.",
      "Elephants sleep for only 2 to 4 hours in a day; mud and water keep their thick skin cool; large fan-like ears flap to release body heat.",
      "Herd structure: An elephant herd has only female elephants and their young calves. The oldest female is the <strong>Matriarch (leader)</strong> of the herd.",
      "Male elephants stay in the herd only until they are 14 to 15 years old, then leave to wander alone."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfdf5" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#065f46" text-anchor="middle">A Day with Nandu — Facts About Elephant Herds</text>
      <!-- Matriarch Leader -->
      <g transform="translate(100, 80)">
        <text x="0" y="5" font-size="28" text-anchor="middle">🐘👑</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="900" fill="#064e3b" text-anchor="middle">Oldest Female (Matriarch)</text>
        <text x="0" y="50" font-family="system-ui, sans-serif" font-size="8" fill="#047857" text-anchor="middle">Leads the entire herd</text>
      </g>
      <!-- Baby Nandu in Mud -->
      <g transform="translate(290, 80)">
        <ellipse cx="0" cy="15" rx="40" ry="12" fill="#fed7aa" opacity="0.6"/>
        <text x="0" y="5" font-size="24" text-anchor="middle">🐘💦</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">Nandu Playing in Mud</text>
        <text x="0" y="50" font-family="system-ui, sans-serif" font-size="8" fill="#b45309" text-anchor="middle">Mud keeps skin cool</text>
      </g>
      <!-- Big Ears cooling -->
      <g transform="translate(480, 80)">
        <text x="0" y="5" font-size="28" text-anchor="middle">👂💨</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#065f46" text-anchor="middle">Fan-Like Ears</text>
        <text x="0" y="50" font-family="system-ui, sans-serif" font-size="8" fill="#047857" text-anchor="middle">Flap to cool bloodstream</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#065f46" text-anchor="middle">Adult elephants eat 100 kg foliage daily, sleep only 2-4 hours, and females live together in loving solidarity.</text>
    </svg>`,
    questions: [
      {
        category: "Wildlife Biology • Elephant Herd Structure",
        q: "Who is the leader of an elephant herd? What role do male elephants play in the herd, and why do elephants love playing in mud and water?",
        ans: `<strong>1. Leader of the Herd:</strong><br>
The <strong>oldest female elephant (the Matriarch / Nani ma)</strong> is the supreme leader of the herd. She decides when to move, finds waterholes during droughts, and directs the herd's defense.<br><br>
<strong>2. Role of Male Elephants:</strong><br>
Male elephant calves live in the herd only until they are <strong>14 to 15 years old</strong>. Once they reach maturity, they leave the herd to wander and forage independently alone in the forest.<br><br>
<strong>3. Why Elephants Love Mud and Water:</strong><br>
Elephants do not have sweat glands across their thick skin. Rolling in cool mud coats their skin with a protective layer that shields them from scorching tropical sun and insect bites. Splashing water and flapping their giant ears acts like a natural air conditioner, cooling the blood vessels running through the ear flaps.`,
        marks: 4,
        rubric: [
          { key: "Identifies oldest female (matriarch) as leader", marks: "1.0 M" },
          { key: "Explains male calves leaving at age 14-15", marks: "1.5 M" },
          { key: "Scientific cooling function of mud coating and ear flapping", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Animal Empathy and Captivity Ethics",
      text: "Circuses and tourist sites keep elephants tied tightly with iron chains on concrete floors, forcing them to carry heavy tourist howdahs.",
      question: "Based on 'A Day with Nandu', why is chaining an elephant deeply cruel, and how does it violate their natural social life?",
      answer: "Elephants are highly intelligent, emotional, and social beings who thrive by walking up to 20 km daily in cooperative family herds. Solitary confinement with heavy iron chains causes severe joint arthritis, psychological trauma, and deprives them of essential mud baths and family bonding.",
      rubric: "1.5 Marks for social herd nature and need for daily movement; 1.5 Marks for physical and mental cruelty of chains."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: THE STORY OF AMRITA
  // -------------------------------------------------------------------------
  {
    id: "la4",
    num: 4,
    unit: "Classic Track: Looking Around",
    title: "The Story of Amrita",
    subtitle: "Bishnoi Community of Khejadli Village (Rajasthan), Khejadi Trees & Ultimate Sacrifice",
    concepts: [
      "Historical event from Khejadli village near Jodhpur, Rajasthan, over 300 years ago.",
      "The Bishnoi principle: <em>'Agar pedh hain toh hum hain'</em> (If trees survive, so do we).",
      "Amrita Devi and her daughters hugging the sacred Khejadi trees to prevent the King's soldiers from axing them for palace timber.",
      "Over 363 Bishnois sacrificed their lives protecting the forest; the King was deeply moved, issued a royal decree banning tree felling and animal hunting in Bishnoi lands forever.",
      "Adaptations of the Khejadi tree: Needs very little water in deserts, bark used for medicine, beans (sangri) eaten as vegetables."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">The Story of Amrita — Khejadli Tree Protection Sacrifice</text>
      <!-- Khejadi Tree Hugged -->
      <g transform="translate(180, 85)">
        <polygon points="-30,10 0,-40 30,10" fill="#15803d"/>
        <rect x="-8" y="10" width="16" height="35" fill="#78350f"/>
        <text x="0" y="20" font-size="16" text-anchor="middle">👩‍👧‍👧</text>
        <text x="0" y="58" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">Amrita & Daughters</text>
        <text x="0" y="70" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Hugging the Khejadi Tree</text>
      </g>
      <!-- Slogan -->
      <g transform="translate(390, 85)">
        <rect x="-90" y="-30" width="180" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="8"/>
        <text x="0" y="-8" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#78350f" text-anchor="middle">"अगर पेड़ हैं, तो हम हैं!"</text>
        <text x="0" y="10" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#b45309" text-anchor="middle">Bishnoi Golden Creed</text>
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">363 Martyrs Protected Forest</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">The historic forerunner of the modern Chipko Movement — nature conservation at all costs.</text>
    </svg>`,
    questions: [
      {
        category: "Environmental History & Indigenous Wisdom",
        q: "Why did the King of Jodhpur want to cut the trees of Khejadli village? How did Amrita and the Bishnoi villagers react, and what was the King's final decree?",
        ans: `<strong>1. Why the King wanted timber:</strong><br>
The Maharaja of Jodhpur wanted to build a new palace and ordered his soldiers to fell Khejadi trees from Khejadli village to burn lime and produce timber for the palace construction.<br><br>
<strong>2. The Bishnoi Resistance:</strong><br>
The Bishnois considered Khejadi trees sacred members of their family. Amrita Devi hugged a tree trunk tightly, refusing to move. When the soldiers mercilessly chopped down the trees, Amrita, her three young daughters, and over 360 villagers laid down their lives embracing the trees.<br><br>
<strong>3. The King's Final Decree:</strong><br>
When the King heard of this unprecedented sacrifice, he was filled with remorse and respect. He personally visited the village and issued a royal copper-plate decree: <strong>No green tree would ever be cut and no animal would ever be hunted in Bishnoi territory.</strong> Even today, Bishnoi villages are flourishing green oases where blackbucks, chinkaras, and peacocks roam fearlessly.`,
        marks: 4,
        rubric: [
          { key: "King's palace construction motive", marks: "1.0 M" },
          { key: "Amrita Devi and 363 villagers tree-hugging sacrifice", marks: "1.5 M" },
          { key: "Royal decree banning logging and hunting permanently", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Features of the Khejadi Tree (Desert Lifeline)",
      text: "The Khejadi tree flourishes in the dry Thar Desert where very little water is available.",
      question: "State three reasons why the Khejadi tree is revered as the lifeline of the Thar Desert.",
      answer: "1. <strong>Extremely Deep Roots:</strong> It reaches deep underground water tables and requires very little rainfall.<br>2. <strong>Nutritious Food:</strong> Its protein-rich green pods (Sangri) are cooked as a prized desert vegetable.<br>3. <strong>Shade & Medicine:</strong> Its bark is crushed for medicine, while its cool canopy gives shelter to desert wildlife.",
      rubric: "1.5 Marks for drought adaptation; 1.5 Marks for food (sangri) and medicinal bark utility."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 5: ANITA AND THE HONEYBEES
  // -------------------------------------------------------------------------
  {
    id: "la5",
    num: 5,
    unit: "Classic Track: Looking Around",
    title: "Anita and the Honeybees",
    subtitle: "True Story of Girl Star Anita Khushwaha (Muzaffarpur, Bihar), Apiculture & Education",
    concepts: [
      "Anita Khushwaha of Bochaha village in Muzaffarpur district, Bihar: Overcoming poverty and orthodox barriers to attend school.",
      "Teaching younger children to earn money for her own college education.",
      "Apiculture (Beekeeping): Learning to keep bees in litchi orchards. Litchi flowers bloom in February, attracting honeybees.",
      "Bee boxes: Cost ₹2,000 per box (sugar syrup for food, medicine for cleaning hives). Each box produces 12 kg of honey.",
      "Hierarchy in a beehive: One Queen Bee (lays eggs), Worker Bees (majority; fly miles to collect nectar, make honey, care for larvae), and Male Drone Bees."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Anita Khushwaha — Girl Star & Beekeeping Entrepreneur</text>
      <!-- Beekeeping Box -->
      <g transform="translate(130, 80)">
        <rect x="-35" y="-20" width="70" height="45" fill="#fde68a" stroke="#d97706" stroke-width="2" rx="4"/>
        <line x1="-35" y1="-5" x2="35" y2="-5" stroke="#d97706" stroke-width="1.5"/>
        <line x1="-35" y1="10" x2="35" y2="10" stroke="#d97706" stroke-width="1.5"/>
        <text x="0" y="5" font-size="14" text-anchor="middle">🐝🍯</text>
        <text x="0" y="40" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">Bee Box (12 kg Honey)</text>
      </g>
      <!-- Litchi Orchards -->
      <g transform="translate(290, 80)">
        <circle cx="0" cy="0" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">🌸🌳</text>
        <text x="0" y="40" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Litchi Flowers (February)</text>
      </g>
      <!-- Girl Star College -->
      <g transform="translate(450, 80)">
        <circle cx="0" cy="0" r="28" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">🎓🛵</text>
        <text x="0" y="40" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">College & Motorcycle</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Anita became a wholesale honey dealer so village beekeepers get the fair price they deserve!</text>
    </svg>`,
    questions: [
      {
        category: "Social Empowerment & Apiculture Biology",
        q: "Describe the division of labor inside a honeybee hive. What are the three types of bees and their respective duties?",
        ans: `A beehive functions with extraordinary cooperation and strict division of labor:<br>
1. <strong>The Queen Bee:</strong> There is only one fertile Queen Bee in each hive. Her sole duty is to lay thousands of eggs daily to maintain the colony.<br>
2. <strong>Worker Bees (Female):</strong> They make up 95% of the hive population. They perform all the arduous work: flying miles across orchards to collect sweet nectar from flowers, fanning nectar into honey, feeding young larvae, building wax honeycombs, and guarding the entrance against intruders.<br>
3. <strong>Male Bees (Drones):</strong> They are few in number and do not gather food or work inside the hive; their only role is mating with the queen.`,
        marks: 3,
        rubric: [
          { key: "Role of Queen Bee (laying eggs)", marks: "1.0 M" },
          { key: "Role of Worker Bees (nectar collection, comb building, hive care)", marks: "1.5 M" },
          { key: "Role of Male Drone Bees", marks: "0.5 M" }
        ]
      }
    ],
    cbq: {
      title: "The 'Right to Education' (RTE Act)",
      text: "Anita's parents initially thought educating a girl was a waste of money because they had to buy uniforms and books.",
      question: "How does the Right to Education (RTE) Act guarantee that every child from Class 1 to 8 can study for free?",
      answer: "The Right of Children to Free and Compulsory Education (RTE) Act guarantees that all children between 6 and 14 years have the fundamental right to free education in government schools without paying any tuition fees. Uniforms, textbooks, and hot mid-day meals are provided by the government so no child is denied schooling due to poverty.",
      rubric: "1.5 Marks for explaining RTE Act (ages 6-14, zero tuition fee); 1.5 Marks for uniforms, books, and mid-day meal provision."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: OMANA'S JOURNEY
  // -------------------------------------------------------------------------
  {
    id: "la6",
    num: 6,
    unit: "Classic Track: Looking Around",
    title: "Omana's Journey",
    subtitle: "Train Travel from Ahmedabad to Kerala, Railway Stations, Platforms & Ticket Checkers (TTE)",
    concepts: [
      "Omana's diary format: Traveling from Gujarat to Kerala with family.",
      "Railway platform observations: Coolies (porters in red uniforms with brass badges), snack stalls (dhokla, lemon rice, chai), luggage weighing.",
      "The role of the Travelling Ticket Examiner (TTE): Checking reservation charts, seat numbers, and validating photo tickets.",
      "Train accommodations: Berths (Lower, Middle, Upper, Side Lower, Side Upper), windows with iron bars, emergency brakes."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Omana's Journey — Train Travel & Platform Systems</text>
      <!-- Train Coach -->
      <rect x="70" y="55" width="220" height="50" fill="#1e3a8a" rx="6"/>
      <circle cx="110" cy="110" r="10" fill="#475569"/>
      <circle cx="250" cy="110" r="10" fill="#475569"/>
      <rect x="90" y="65" width="25" height="20" fill="#93c5fd" rx="2"/>
      <rect x="130" y="65" width="25" height="20" fill="#93c5fd" rx="2"/>
      <rect x="170" y="65" width="25" height="20" fill="#93c5fd" rx="2"/>
      <rect x="210" y="65" width="25" height="20" fill="#93c5fd" rx="2"/>
      <text x="180" y="135" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e40af" text-anchor="middle">Sleeper Coach</text>
      <!-- TTE Badge -->
      <g transform="translate(390, 80)">
        <rect x="-60" y="-25" width="120" height="50" fill="#f8fafc" stroke="#1e3a8a" stroke-width="2" rx="6"/>
        <text x="0" y="-5" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#1e3a8a" text-anchor="middle">TTE Uniform</text>
        <text x="0" y="12" font-family="system-ui, sans-serif" font-size="8" fill="#334155" text-anchor="middle">Black coat, badge & chart</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Carefully matching reservation ticket names with passenger identity cards.</text>
    </svg>`,
    questions: [
      {
        category: "Railway Systems & Public Etiquette",
        q: "How can you identify a Travelling Ticket Examiner (TTE) in a train coach? What three tasks does a TTE perform?",
        ans: `<strong>Identification of a TTE:</strong><br>
A TTE wears a crisp black coat with an official Indian Railways brass nameplate badge pinned on the lapel, white shirt, grey or black trousers, and carries the official paper reservation chart or a digital handheld terminal (HHT tablet).<br><br>
<strong>Three Tasks Performed by a TTE:</strong><br>
1. <strong>Checking Tickets:</strong> Verifies that passengers hold valid reserved tickets for the correct date, train, coach, and berth.<br>
2. <strong>Checking Photo IDs:</strong> Confirms the passenger's identity using Aadhaar or school cards.<br>
3. <strong>Allotting Vacant Berths:</strong> Checks for absentees and allots vacant seats to waitlisted (RAC/WL) passengers transparently.`,
        marks: 3,
        rubric: [
          { key: "Visual identification (black coat, badge, chart)", marks: "1.5 M" },
          { key: "Three duties (validating tickets, ID verification, vacant berth allotment)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Cleanliness on Railway Tracks",
      text: "Some passengers throw empty plastic tea cups and banana peels out of train windows while moving.",
      question: "Why is throwing trash out of train windows dangerous, and what proper method should passengers use?",
      answer: "Litter flying out at 90 km/h can hit track maintenance workers (gangmen) or shatter nearby glass. Plastic waste chokes track drainage and harms wild animals along forest tracks. Passengers must deposit all wrappers in the coach dustbin located near the toilets or hand them to the onboard cleaning staff.",
      rubric: "1.5 Marks for hazards to workers, environment, and wildlife; 1.5 Marks for using onboard coach dustbins."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 7: FROM THE WINDOW
  // -------------------------------------------------------------------------
  {
    id: "la7",
    num: 7,
    unit: "Classic Track: Looking Around",
    title: "From the Window",
    subtitle: "Changing Landscapes: Red Soil of Goa, Konkan Railway Bridges, Tunnels & Level Crossings",
    concepts: [
      "The Konkan Railway journey: Rolling past green paddy fields, coconut groves, and reddish laterite soil of Goa.",
      "The sheer engineering feat of the Konkan route: <strong>2,000 bridges and 92 tunnels</strong> carved through the Western Ghats (Sahyadri mountains).",
      "Level crossings: Understanding safety barriers, waiting for the train to pass, and turning off vehicle engines to save fuel.",
      "Crossing the massive bridge over the Zuari/Mandovi river: Hearing the hollow, echoing sound of train wheels on open steel bridge girders."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fef2f2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#991b1b" text-anchor="middle">From the Window — Konkan Railway Engineering Feat</text>
      <!-- Tunnel -->
      <g transform="translate(140, 85)">
        <polygon points="-40,25 0,-25 40,25" fill="#1e293b"/>
        <path d="M-20 25 C-20 5 20 5 20 25 Z" fill="#090d16"/>
        <text x="0" y="45" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e293b" text-anchor="middle">92 Mountain Tunnels</text>
      </g>
      <!-- Bridge -->
      <g transform="translate(420, 85)">
        <line x1="-80" y1="5" x2="80" y2="5" stroke="#7f1d1d" stroke-width="4"/>
        <line x1="-50" y1="5" x2="-50" y2="30" stroke="#7f1d1d" stroke-width="3"/>
        <line x1="0" y1="5" x2="0" y2="30" stroke="#7f1d1d" stroke-width="3"/>
        <line x1="50" y1="5" x2="50" y2="30" stroke="#7f1d1d" stroke-width="3"/>
        <rect x="-80" y="20" width="160" height="15" fill="#93c5fd" opacity="0.6"/>
        <text x="0" y="45" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#7f1d1d" text-anchor="middle">2,000 River Bridges</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#991b1b" text-anchor="middle">Sudden darkness in tunnels followed by dazzling green coconut groves in Goa and Kerala!</text>
    </svg>`,
    questions: [
      {
        category: "Railway Geography & Sound Physics",
        q: "Why did the sound of the train wheels change dramatically when crossing the long river bridge? How many tunnels and bridges exist on the route from Goa to Kerala?",
        ans: `<strong>1. Why the wheel sound changed:</strong><br>
When running over ordinary ground, sound waves bounce off the solid earthen embankment and ballast stones. But when the train moved onto the steel river bridge, there was no solid ground under the tracks—only open steel girders and deep river water below. The steel metal reverberated, creating a loud, hollow, echoing <em>'khad-khad-khad'</em> rumbling roar.<br><br>
<strong>2. Engineering statistics:</strong><br>
Along the scenic Western Ghats route from Goa to Kerala, the train passes through <strong>92 mountain tunnels</strong> and crosses <strong>2,000 river and ravine bridges</strong>.`,
        marks: 3,
        rubric: [
          { key: "Hollow echoing sound physics of open steel girders over water", marks: "1.5 M" },
          { key: "Exact statistics: 92 tunnels and 2,000 bridges", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Fuel Conservation at Railway Level Crossings",
      text: "At a closed railway crossing gate, dozens of motorists keep their car, bus, and scooter engines idling, filling the air with thick smoke and deafening horn noise.",
      question: "Why should motorists switch off vehicle engines while waiting at a closed railway gate?",
      answer: "A railway gate remains closed for 5 to 10 minutes. Turning off engines saves costly petrol and diesel, cuts carbon emissions, prevents air pollution from choking waiting pedestrians, and eliminates unbearable noise, making the environment cleaner.",
      rubric: "1.5 Marks for fuel savings and emission reduction; 1.5 Marks for air and noise pollution prevention."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 8: REACHING GRANDMOTHER'S HOUSE
  // -------------------------------------------------------------------------
  {
    id: "la8",
    num: 8,
    unit: "Classic Track: Looking Around",
    title: "Reaching Grandmother's House",
    subtitle: "Kerala Backwaters, Ferry Boats, Valyamma's House & Reading Railway Timetables",
    concepts: [
      "Arriving at Kottayam station; traveling to Valyamma's (mother's elder sister) house in an auto-rickshaw.",
      "The Ferry Boat ride: People, bicycles, cows, and coconuts boarding the public ferry to cross the river to Ammuma's (grandmother's) village island.",
      "Reading railway timetables: Train number, station name, arrival time, departure time, distance in kilometers, day of journey.",
      "Cost of tickets and appreciating water transportation networks."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">The Public Ferry Boat — Crossing the Kerala Backwaters</text>
      <!-- Ferry Boat -->
      <g transform="translate(290, 80)">
        <polygon points="-70,15 70,15 55,35 -55,35" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <rect x="-45" y="-10" width="90" height="25" fill="#ffffff" stroke="#1e3a8a" stroke-width="1.5" rx="3"/>
        <text x="0" y="8" font-size="16" text-anchor="middle">👥🚲📦</text>
        <!-- Water waves -->
        <path d="M-120 38 Q-80 30 -40 38 T40 38 T120 38" fill="none" stroke="#38bdf8" stroke-width="3"/>
      </g>
      <text x="290" y="132" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">Public Ferry Service</text>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="9" fill="#2563eb" text-anchor="middle">Ammuma lives across the water on a quiet coconut island with no road bridge.</text>
    </svg>`,
    questions: [
      {
        category: "Timetable Analysis & Travel Logistics",
        q: "What is a 'ferry'? What information can you learn by reading a train timetable like the 16347 Express?",
        ans: `<strong>1. What is a Ferry:</strong><br>
A ferry is a flat-bottomed passenger boat used to carry people, vehicles, and goods across a river, canal, or lagoon where there is no permanent bridge.<br><br>
<strong>2. Information from a Railway Timetable:</strong><br>
A train timetable provides comprehensive journey data:<br>
• Station names in the exact sequence of the journey.<br>
• Scheduled <strong>Arrival Time</strong> and <strong>Departure Time</strong> at each halt.<br>
• Total <strong>Distance in kilometres</strong> from the starting station.<br>
• The day of the journey (Day 1, Day 2).`,
        marks: 3,
        rubric: [
          { key: "Definition and purpose of public ferry", marks: "1.0 M" },
          { key: "Lists 4 specific data points from railway timetables", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Analyzing a Train Ticket (PNR)",
      text: "A railway ticket shows: Train No: 16347, Date: 24-10-2026, PNR: 243-8976541, Distance: 850 km, Coach: S4, Berth: 21 (LB), Fare: ₹485.",
      question: "What does 'PNR' stand for, and what does 'LB' mean next to the berth number?",
      answer: "<strong>PNR</strong> stands for <strong>Passenger Name Record</strong> (a unique 10-digit number storing booking details). <strong>LB</strong> stands for <strong>Lower Berth</strong> (the bottom sleeping bed closest to the coach floor).",
      rubric: "1.5 Marks for Passenger Name Record; 1.5 Marks for Lower Berth."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 9: CHANGING FAMILIES
  // -------------------------------------------------------------------------
  {
    id: "la9",
    num: 9,
    unit: "Classic Track: Looking Around",
    title: "Changing Families",
    subtitle: "Life Transitions: Nimmi's New Baby Sister, Tsering's Father's Transfer & Nazli's Cousin's Wedding",
    concepts: [
      "How family compositions evolve over time through life milestones.",
      "1. Birth of a child: Nimmi's family welcomes a baby sister; daily routines adapt to infant care.",
      "2. Job Transfer: Tsering's father gets promoted to a new city; moving to a new home, making new friends, changing schools.",
      "3. Marriage: Nazli's cousin brother gets married; a new bride joins the family.",
      "Legal marriageable ages in India: Minimum 18 years for girls and 21 years for boys."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#faf5ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#6b21a8" text-anchor="middle">Changing Families — Three Common Life Milestones</text>
      <!-- Birth -->
      <g transform="translate(100, 80)">
        <circle cx="0" cy="0" r="26" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">👶🍼</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#6b21a8" text-anchor="middle">Nimmi (New Baby)</text>
      </g>
      <!-- Transfer -->
      <g transform="translate(290, 80)">
        <circle cx="0" cy="0" r="26" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">💼🏢</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#6b21a8" text-anchor="middle">Tsering (Job Transfer)</text>
      </g>
      <!-- Wedding -->
      <g transform="translate(480, 80)">
        <circle cx="0" cy="0" r="26" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="0" y="6" font-size="18" text-anchor="middle">💍🎉</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#6b21a8" text-anchor="middle">Nazli (Wedding)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#7e22ce" text-anchor="middle">Families are dynamic: members join through birth/marriage, or move away for work and education.</text>
    </svg>`,
    questions: [
      {
        category: "Sociological Understanding • Family Changes",
        q: "What changes occurred in Nimmi's family after the birth of her baby sister? What are the legal minimum ages for marriage in India?",
        ans: `<strong>1. Changes in Nimmi's Family:</strong><br>
• Total family members increased by one.<br>
• Daily routines changed: Grandmother and mother spent extra time feeding and bathing the infant.<br>
• Nimmi took on new responsibilities playing gently with her little sister and helping her mother fetch baby towels and clothes.<br><br>
<strong>2. Legal Marriageable Ages in India:</strong><br>
Under Indian law, the legal minimum age for marriage is <strong>18 years for girls</strong> and <strong>21 years for boys</strong>. Child marriage is strictly prohibited by law.`,
        marks: 3,
        rubric: [
          { key: "Detailed lifestyle adjustments after newborn arrival", marks: "1.5 M" },
          { key: "Exact legal marriage ages (18 girls / 21 boys)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Adapting to a New School After Transfer",
      text: "Tsering's father is transferred to another state. On the first day at his new school, Tsering sits quietly feeling lonely and nervous.",
      question: "How should classmates welcome a newly transferred student into their classroom?",
      answer: "Classmates should warmly introduce themselves, invite the new student to share their tiffin during recess, show them around the library and water cooler, and include them in playground sports so they feel immediately accepted and happy.",
      rubric: "1.5 Marks for inclusive social gestures; 1.5 Marks for recess and playground sharing."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: HU TU TU, HU TU TU
  // -------------------------------------------------------------------------
  {
    id: "la10",
    num: 10,
    unit: "Classic Track: Looking Around",
    title: "Hu Tu Tu, Hu Tu Tu",
    subtitle: "The Sport of Kabaddi, Physical Stamina, Rules & The Inspiring Story of Karnam Malleswari",
    concepts: [
      "The game of Kabaddi: Holding breath while chanting 'Kabaddi-Kabaddi', tagging opponents, crossing the central midline safely.",
      "Physical coordination: Sharp reflexes, lung stamina, leg sweeps, and team catching.",
      "Olympic Inspiration: <strong>Karnam Malleswari</strong>, weightlifter from Andhra Pradesh, daughter of a police constable. Started lifting at age 12; won India's first Olympic bronze medal in weightlifting at Sydney 2000 (can lift 130 kg!).",
      "Sisters Jwala, Leela, and Heera: Pioneering women who broke taboos to play and coach Kabaddi in Mumbai 50 years ago."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Kabaddi Court & Karnam Malleswari's Olympic Glory</text>
      <!-- Court Line -->
      <g transform="translate(180, 85)">
        <rect x="-80" y="-30" width="160" height="60" fill="#ffffff" stroke="#c2410c" stroke-width="1.5"/>
        <line x1="0" y1="-30" x2="0" y2="30" stroke="#dc2626" stroke-width="3"/>
        <text x="-40" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">Defenders</text>
        <text x="40" y="5" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#15803d" text-anchor="middle">Raider 🤼</text>
        <text x="0" y="-34" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#dc2626" text-anchor="middle">Mid-Line</text>
      </g>
      <!-- Karnam Malleswari -->
      <g transform="translate(420, 85)">
        <rect x="-80" y="-30" width="160" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" rx="8"/>
        <text x="0" y="-8" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#78350f" text-anchor="middle">Karnam Malleswari 🏋️‍♀️</text>
        <text x="0" y="8" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#b45309" text-anchor="middle">Olympic Bronze Medal (2000)</text>
        <text x="0" y="22" font-family="system-ui, sans-serif" font-size="8" fill="#78350f" text-anchor="middle">Weightlifter: Lifts 130 kg!</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Kabaddi builds lung power, sharp reflexes, and teaches girls to excel fearlessly in sports.</text>
    </svg>`,
    questions: [
      {
        category: "Sports Rules & Women in Sports",
        q: "What are the essential rules of Kabaddi? Who is Karnam Malleswari, and what historic achievement did she accomplish for Indian sports?",
        ans: `<strong>1. Essential Rules of Kabaddi:</strong><br>
• A raider crosses the center line into the opposing team's court while chanting <em>'Kabaddi-Kabaddi'</em> continuously in a single breath without stopping.<br>
• The raider tries to touch one or more defending players and rush back safely across the midline.<br>
• If defenders pin the raider down until they lose their breath, the raider is declared 'Out'. If the raider touches the center line, all touched defenders are 'Out'.<br><br>
<strong>2. Karnam Malleswari's Historic Achievement:</strong><br>
Karnam Malleswari is an internationally celebrated weightlifter from Andhra Pradesh. Daughter of a police constable, she began training at age 12. At the <strong>Sydney 2000 Olympic Games</strong>, she won a <strong>Bronze Medal</strong>, becoming the <strong>first Indian woman in history to win an Olympic medal</strong>. She has won 29 international medals and can lift up to 130 kg.`,
        marks: 4,
        rubric: [
          { key: "Accurately details raider chant, breath control, and tag-out rules", marks: "2.0 M" },
          { key: "Highlights Karnam Malleswari as first Indian woman Olympic medalist", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Breaking Gender Stereotypes in Sports",
      text: "Fifty years ago, parents stopped daughters from playing Kabaddi because 'girls would have to wear shorts and nobody would marry them'.",
      question: "How have champions like Karnam Malleswari and Mary Kom destroyed these orthodox beliefs?",
      answer: "Women athletes have demonstrated that sports talent and physical strength are not limited by gender. By winning Olympic and World Championship medals for India, they brought immense national pride, proving that when girls receive equal training and family support, they can conquer the highest podiums in world sports.",
      rubric: "1.5 Marks for refuting gender orthodoxies; 1.5 Marks for national glory and equal opportunity."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 11: THE VALLEY OF FLOWERS
  // -------------------------------------------------------------------------
  {
    id: "la11",
    num: 11,
    unit: "Classic Track: Looking Around",
    title: "The Valley of Flowers",
    subtitle: "Chamoli, Uttarakhand, Floral Diversity, Madhubani Painting & Itr Making in Kannauj",
    concepts: [
      "The Valley of Flowers: A breathtaking high-altitude national park nestled in the Chamoli district of Uttarakhand.",
      "Blooming season: Flowers bloom for only a few brief weeks between July and September.",
      "Madhubani folk art (Mithila, Bihar): Traditional wall paintings made with ground rice paste, indigo, turmeric, and flower dyes.",
      "Kannauj (Uttar Pradesh): The perfume capital of India, renowned for manufacturing pure rose and jasmine 'Itr' (attar) using traditional deg-bhapka steam distillation.",
      "Culinary flowers: Kachnar flower curry (UP), banana flower dishes (Kerala), and sahjan (drumstick) flower pakoras (Maharashtra)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fdf4ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#701a75" text-anchor="middle">The Valley of Flowers & Floral Heritage of India</text>
      <!-- Valley of Flowers -->
      <g transform="translate(100, 75)">
        <polygon points="-25,15 0,-25 25,15" fill="#f5d0fe" stroke="#a21caf"/>
        <text x="0" y="5" font-size="16" text-anchor="middle">🌸🏔️</text>
        <text x="0" y="40" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#701a75" text-anchor="middle">Chamoli, Uttarakhand</text>
      </g>
      <!-- Madhubani Art -->
      <g transform="translate(290, 75)">
        <rect x="-45" y="-20" width="90" height="42" fill="#ffffff" stroke="#c026d3" stroke-width="1.5" rx="4"/>
        <text x="0" y="3" font-size="14" text-anchor="middle">🎨🐟🦚</text>
        <text x="0" y="40" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#701a75" text-anchor="middle">Madhubani Art (Bihar)</text>
      </g>
      <!-- Kannauj Itr -->
      <g transform="translate(480, 75)">
        <circle cx="0" cy="0" r="24" fill="#fae8ff" stroke="#a21caf" stroke-width="1.5"/>
        <text x="0" y="5" font-size="16" text-anchor="middle">🌹🧪</text>
        <text x="0" y="40" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#701a75" text-anchor="middle">Kannauj Itr (UP)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#86198f" text-anchor="middle">Flowers are used for decoration, natural dyes, medicine, perfumes, and delicious local cuisines.</text>
    </svg>`,
    questions: [
      {
        category: "Geographical Heritage & Traditional Arts",
        q: "Where is the Valley of Flowers located? What is 'Madhubani Painting', and what natural colors are used to make it?",
        ans: `<strong>1. Location of Valley of Flowers:</strong><br>
The Valley of Flowers is a scenic national park situated in the high Himalayan hills of <strong>Chamoli district in Uttarakhand</strong>. It is blanketed with hundreds of vibrant flower species that bloom for a few short weeks after monsoon rains.<br><br>
<strong>2. Madhubani Painting:</strong><br>
Madhubani is an ancient folk art form originating from the <strong>Mithila region of Bihar</strong>. During festivals and weddings, women paint courtyard walls and floors with pictures of human beings, animals, birds (peacocks), trees, and flowers.<br><br>
<strong>3. Natural Colors Used:</strong><br>
The base paint is made of <strong>paste of powdered rice</strong> mixed with natural colors: blue from indigo (neel), yellow from turmeric (haldi), and various shades from tree bark and flowers.`,
        marks: 4,
        rubric: [
          { key: "Exact location in Chamoli, Uttarakhand", marks: "1.0 M" },
          { key: "Madhubani origin in Mithila, Bihar", marks: "1.5 M" },
          { key: "Use of powdered rice paste and natural plant dyes (indigo, haldi)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Kannauj Traditional Itr Distillation",
      text: "Truckloads of fresh damask roses arrive at Kannauj distilleries at 4:00 am every morning during harvest.",
      question: "How is traditional Kannauj 'Itr' made, and why is it superior to chemical alcohol perfumes?",
      answer: "Kannauj artisans use the centuries-old <strong>Deg-Bhapka</strong> hydro-distillation method. Fresh rose petals and water are boiled in sealed copper cauldrons (Degs); the fragrant steam passes through bamboo pipes into a receiver (Bhapka) immersed in cold water, condensing into pure sandalwood oil base. Unlike chemical synthetic sprays containing alcohol, pure Itr is 100% natural, therapeutic, and long-lasting.",
      rubric: "1.5 Marks for copper cauldron hydro-distillation; 1.5 Marks for natural purity vs chemical alcohol."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 12: CHANGING TIMES
  // -------------------------------------------------------------------------
  {
    id: "la12",
    num: 12,
    unit: "Classic Track: Looking Around",
    title: "Changing Times",
    subtitle: "Chetandas's Story: Partition of 1947, Sohna (Haryana), House Evolution & Modern Materials",
    concepts: [
      "Partition of India (1947): Millions migrating; Chetandas moving from Dera Ghazi Khan (now Pakistan) to Delhi tents, then to Sohna, Haryana.",
      "Evolution of housing materials over 60 years:",
      "1. First Mud House: Mud mixed with husk for walls; neem/keekar branches on roofs to prevent termites; cow dung coating on floors to keep insects away.",
      "2. Second Upgrade: Baked red bricks for walls, unbaked brick ceilings.",
      "3. Modern Times: Reinforced concrete (RBC/RCC), iron bars, cement, ceramic bathroom tiles, and modern flush sanitation.",
      "Social progress: Elimination of manual scavenging; modern indoor plumbing."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Changing Times — 60 Years of Housing Evolution in India</text>
      <!-- Mud House 1947 -->
      <g transform="translate(100, 75)">
        <polygon points="-30,5 0,-25 30,5" fill="#ca8a04"/>
        <rect x="-24" y="5" width="48" height="35" fill="#fed7aa" stroke="#c2410c"/>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">1947: Mud & Dung</text>
        <text x="0" y="67" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Thatch & Neem roof</text>
      </g>
      <text x="180" y="75" font-size="18" fill="#d97706">➔</text>
      <!-- Brick House 1970 -->
      <g transform="translate(260, 75)">
        <polygon points="-30,5 0,-20 30,5" fill="#9a3412"/>
        <rect x="-24" y="5" width="48" height="35" fill="#fca5a5" stroke="#b91c1c"/>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">1970: Baked Bricks</text>
        <text x="0" y="67" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Cement & Iron roof</text>
      </g>
      <text x="340" y="75" font-size="18" fill="#d97706">➔</text>
      <!-- Concrete House Modern -->
      <g transform="translate(430, 75)">
        <rect x="-35" y="-20" width="70" height="60" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e293b" text-anchor="middle">Modern: RCC & Glass</text>
        <text x="0" y="67" font-family="system-ui, sans-serif" font-size="8" fill="#475569" text-anchor="middle">Tiles, plumbing, marble</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Changing construction materials reflect economic growth, technology, and sanitation reforms.</text>
    </svg>`,
    questions: [
      {
        category: "Social History & Building Materials",
        q: "Why did Chetandas's mother coat the mud floor with cow dung mixed with earth? How did roofing materials change from his childhood to his grandchildren's generation?",
        ans: `<strong>1. Why cow dung was coated on mud floors:</strong><br>
A mixture of fresh cow dung and clay is an age-old Indian biocidal technique. When dried, it creates a hard, dust-free floor surface that acts as a natural insect repellent, keeping termites, ants, and pests away from the mud walls.<br><br>
<strong>2. Evolution of Roofing Materials:</strong><br>
• <strong>Childhood (1947):</strong> Roofs were made of wooden frames covered with keekar and neem branches (to prevent wood termites) overlaid with dried reed grass and mud.<br>
• <strong>Youth (1970):</strong> Roofs upgraded to unbaked brick arches and steel girders.<br>
• <strong>Grandchildren's Era:</strong> Modern roofs are made of durable <strong>RCC (Reinforced Cement Concrete)</strong> using steel iron rebar mesh, gravel, and cement, capable of supporting multi-story floors.`,
        marks: 4,
        rubric: [
          { key: "Scientific pest-repellent function of cow dung coating", marks: "1.5 M" },
          { key: "Detailed 3-stage progression of roofing materials (thatch ➔ brick girders ➔ RCC)", marks: "2.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Eliminating Manual Scavenging",
      text: "In older times, dry latrines were built outside the house and people from specific marginalized castes were forced to clean human waste manually.",
      question: "How has modern septic tank and piped sewer plumbing restored human dignity and equality?",
      answer: "Manual scavenging was an inhuman, discriminatory practice. Modern water-sealed pour-flush toilets and underground sewer networks automate waste disposal sanitarily, ensuring nobody is forced to handle human excreta and guaranteeing human dignity, cleanliness, and social justice.",
      rubric: "1.5 Marks for recognizing inhuman nature of manual scavenging; 1.5 Marks for modern sanitary plumbing ensuring dignity."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 13: A RIVER'S TALE
  // -------------------------------------------------------------------------
  {
    id: "la13",
    num: 13,
    unit: "Classic Track: Looking Around",
    title: "A River's Tale",
    subtitle: "The Life Journey of a River: Mountain Purity, Human Pollution & Aquatic Conservation",
    concepts: [
      "The stages of a river: Originates pristine and pure from melting Himalayan glaciers with abundant fish.",
      "Passing through villages: People wash clothes, bathe cattle, and throw garbage; water clarity declines.",
      "Passing through industrial cities: Factories dump untreated toxic chemicals, industrial effluents, and city sewage; water turns black and foul-smelling; fish die of oxygen starvation.",
      "Water solubility: Substances that dissolve in water (sugar, salt, lemon juice) vs. substances that do not dissolve (oil, sand, plastic, chalk).",
      "Purification methods: Boiling, alum (fitkari) sedimentation, chlorination, and solar treatment."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">A River's Tale — From Mountain Purity to City Pollution</text>
      <!-- Mountain Origin -->
      <g transform="translate(100, 80)">
        <polygon points="-30,20 0,-25 30,20" fill="#93c5fd" stroke="#1d4ed8"/>
        <text x="0" y="5" font-size="16" text-anchor="middle">🐟💧</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e40af" text-anchor="middle">Mountains (Pure & Clean)</text>
      </g>
      <text x="180" y="80" font-size="20" fill="#2563eb">➔</text>
      <!-- Village Stage -->
      <g transform="translate(290, 80)">
        <circle cx="0" cy="0" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="0" y="6" font-size="16" text-anchor="middle">🐄🧺</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">Villages (Washing & Cattle)</text>
      </g>
      <text x="390" y="80" font-size="20" fill="#2563eb">➔</text>
      <!-- Industrial City -->
      <g transform="translate(480, 80)">
        <rect x="-35" y="-20" width="70" height="40" fill="#475569" stroke="#0f172a" stroke-width="1.5"/>
        <text x="0" y="4" font-size="14" text-anchor="middle">🏭☠️</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#991b1b" text-anchor="middle">City (Toxic Chemical Waste)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#166534" text-anchor="middle">Rivers give life to civilizations; treating sewage and stopping chemical dumping is critical.</text>
    </svg>`,
    questions: [
      {
        category: "Environmental Science • Water Pollution",
        q: "Why does the color of a river change from crystal blue in the mountains to dark murky brown or black in industrial cities? Why do fish die in polluted river stretches?",
        ans: `<strong>1. Why River Color Changes:</strong><br>
In high mountains, the river originates from clean glacial meltwater, free from human contamination. But as it flows past cities, municipal drains discharge millions of litres of untreated black toilet sewage, while factories dump toxic dyes, heavy metals, and chemical acids. This sludge turns the river dark, foul-smelling, and poisonous.<br><br>
<strong>2. Why Fish Die:</strong><br>
Decomposing sewage and chemical waste consume all the dissolved oxygen present in water. Without adequate dissolved oxygen, aquatic organisms suffocate and die. Toxic factory chemicals also directly poison the fish's gills.`,
        marks: 3,
        rubric: [
          { key: "Contrasts glacial purity with industrial effluents and municipal sewage", marks: "1.5 M" },
          { key: "Scientific explanation of dissolved oxygen depletion causing fish suffocation", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Soluble vs Insoluble Kitchen Substances",
      text: "A student tests six substances in glasses of water: Sugar, Cooking Oil, Salt, Chalk Powder, Turmeric, and Sand.",
      question: "Classify these six items into: (a) Completely Soluble in water, (b) Insoluble in water.",
      answer: "<strong>(a) Completely Soluble:</strong> Sugar, Salt (they dissolve completely and disappear into the water).<br><strong>(b) Insoluble:</strong> Cooking Oil (floats on top), Chalk Powder (settles down), Turmeric (leaves sediment), Sand (sinks to the bottom).",
      rubric: "1.5 Marks for correctly identifying soluble pair; 1.5 Marks for four insoluble items."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 14: BASVA'S FARM
  // -------------------------------------------------------------------------
  {
    id: "la14",
    num: 14,
    unit: "Classic Track: Looking Around",
    title: "Basva's Farm",
    subtitle: "Onion Cultivation in Belagavi (Karnataka), Farming Tools & Timely Harvesting",
    concepts: [
      "Traditional agriculture in Belagavi, Karnataka: The complete onion crop cycle.",
      "Traditional agricultural implements:",
      "1. <strong>Khunti:</strong> An iron rod used to dig and loosen hard soil before sowing.",
      "2. <strong>Kurige:</strong> A wooden bullock-drawn plough with a seed funnel for dropping seeds at equal distance and depth.",
      "3. <strong>Illige:</strong> A sharp curved blade fixed to a wooden block used to slice dry leaves from onions.",
      "The threat of weeds (kharpatwar): Unwanted wild plants that consume water and fertilizer meant for crops; must be weeded out early.",
      "Timely harvesting: Onions must be dug out immediately once green leaves turn yellow and dry; delayed harvest rots the crop in wet soil."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Basva's Farm — The Onion Cultivation Cycle</text>
      <!-- Tools -->
      <g transform="translate(100, 75)">
        <line x1="0" y1="-25" x2="0" y2="25" stroke="#78350f" stroke-width="4"/>
        <polygon points="-8,25 8,25 0,35" fill="#475569"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">1. Khunti (Loosening)</text>
      </g>
      <text x="170" y="75" font-size="18" fill="#d97706">➔</text>
      <g transform="translate(240, 75)">
        <polygon points="-25,15 0,-15 25,15" fill="#fde68a" stroke="#d97706"/>
        <circle cx="0" cy="5" r="4" fill="#15803d"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">2. Kurige (Plough & Sow)</text>
      </g>
      <text x="315" y="75" font-size="18" fill="#d97706">➔</text>
      <g transform="translate(390, 75)">
        <circle cx="0" cy="0" r="18" fill="#fecdd3" stroke="#e11d48"/>
        <text x="0" y="5" font-size="14" text-anchor="middle">🧅</text>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">3. Digging Onions</text>
      </g>
      <text x="455" y="75" font-size="18" fill="#d97706">➔</text>
      <g transform="translate(510, 75)">
        <path d="M-15 15 Q0 -15 15 15 Z" fill="#94a3b8"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">4. Illige (Cutting)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Weeding and harvesting on exact schedule guarantee a healthy onion harvest.</text>
    </svg>`,
    questions: [
      {
        category: "Agricultural Implements & Techniques",
        q: "What is the function of the 'Khunti', 'Kurige', and 'Illige' in onion farming? What are weeds, and why must they be removed from crops?",
        ans: `<strong>1. Agricultural Implements:</strong><br>
• <strong>Khunti:</strong> An iron rod used to dig and soften the soil before ploughing so seeds can sprout easily.<br>
• <strong>Kurige:</strong> A wooden plough drawn by bullocks with a funnel. Seeds are dropped into the funnel and sown at regular distances and depths.<br>
• <strong>Illige:</strong> A curved sharp sickle fixed on a wooden base. Basva's mother sits on the block and uses the blade to slice dried leaves from harvested onions.<br><br>
<strong>2. Weeds (Kharpatwar) and Removal:</strong><br>
Weeds are unwanted wild plants that grow naturally in fields alongside cultivated crops. They steal water, sunlight, and soil nutrients (fertilizers) meant for the crop, stunting onion growth. Therefore, weeds must be uprooted early.`,
        marks: 4,
        rubric: [
          { key: "Detailed function of Khunti, Kurige, and Illige", marks: "2.5 M" },
          { key: "Definition of weeds and damage caused to crops", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Risk of Delayed Onion Harvesting",
      text: "Basva's father warns the family: 'All of us must work together to dig out the onions right now. If we delay even by a few days, the entire crop will be ruined.'",
      question: "Why does a delay in harvesting cause onions to rot underground?",
      answer: "When onion leaves turn yellow and dry, the underground bulb is fully mature. If it is not dug out promptly, late rains or soil moisture will cause the mature bulbs to rot in the mud or sprout green shoots again, destroying their shelf life and rendering them unsellable.",
      rubric: "1.5 Marks for mature bulb state; 1.5 Marks for moisture rotting and premature resprouting."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 15: FROM MARKET TO HOME
  // -------------------------------------------------------------------------
  {
    id: "la15",
    num: 15,
    unit: "Classic Track: Looking Around",
    title: "From Market to Home",
    subtitle: "Vaishali's Family, Vegetable Vendor's Strenuous Routine, Perishable vs Long-Lasting Produce",
    concepts: [
      "Vaishali's father (Babuji) is a vegetable vendor in Delhi; the family's rigorous daily schedule begins at 3:00 am.",
      "Sorting previous day's leftover vegetables and sprinkling water to keep them fresh.",
      "Babuji, Bhaiya, and Chachaji rush to the big vegetable market (mandi) in a tempo at 6:00 am.",
      "Setting up the cart before 7:30 am because regular customers go to work early.",
      "Perishable vegetables (spinach, tomatoes, bananas) that spoil quickly vs hardy vegetables (potatoes, onions, garlic) that last days."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">A Vegetable Vendor's Daily Schedule (Starts 3:00 AM)</text>
      <!-- Timeline -->
      <g transform="translate(100, 75)">
        <circle cx="0" cy="0" r="24" fill="#dcfce7" stroke="#16a34a"/>
        <text x="0" y="4" font-size="12" font-weight="900" text-anchor="middle">3:00 AM</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="8" fill="#14532d" text-anchor="middle">Sort yesterday's stock</text>
      </g>
      <text x="170" y="75" font-size="16" fill="#16a34a">➔</text>
      <g transform="translate(240, 75)">
        <circle cx="0" cy="0" r="24" fill="#dcfce7" stroke="#16a34a"/>
        <text x="0" y="4" font-size="12" font-weight="900" text-anchor="middle">6:00 AM</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="8" fill="#14532d" text-anchor="middle">Wholesale Mandi</text>
      </g>
      <text x="315" y="75" font-size="16" fill="#16a34a">➔</text>
      <g transform="translate(390, 75)">
        <circle cx="0" cy="0" r="24" fill="#dcfce7" stroke="#16a34a"/>
        <text x="0" y="4" font-size="12" font-weight="900" text-anchor="middle">7:30 AM</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="8" fill="#14532d" text-anchor="middle">Cart on the street</text>
      </g>
      <text x="455" y="75" font-size="16" fill="#16a34a">➔</text>
      <g transform="translate(515, 75)">
        <circle cx="0" cy="0" r="24" fill="#dcfce7" stroke="#16a34a"/>
        <text x="0" y="4" font-size="11" font-weight="900" text-anchor="middle">10:00 PM</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="8" fill="#14532d" text-anchor="middle">Sleep after long day</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Vegetable vendors work 18 hours daily; sprinkling water keeps produce succulent.</text>
    </svg>`,
    questions: [
      {
        category: "Livelihood & Food Preservation",
        q: "Why does Vaishali's father try to sell the previous day's vegetables first? Why does he constantly sprinkle water on vegetables during hot summer afternoons?",
        ans: `<strong>1. Why previous day's vegetables are sold first:</strong><br>
Unsold vegetables from yesterday lose freshness quickly. If they are not sold early in the morning, they will turn stale, soft, and rotten by noon, causing heavy financial losses to the family.<br><br>
<strong>2. Why water is sprinkled constantly:</strong><br>
In hot dry summer winds (loo), vegetables rapidly lose internal moisture through evaporation, becoming wilted, dry, and unappealing to customers. Sprinkling clean water keeps leafy vegetables, gourds, and tomatoes crisp, fresh, and hydrated.`,
        marks: 3,
        rubric: [
          { key: "Financial and perishable reason for selling older stock first", marks: "1.5 M" },
          { key: "Biological hydration function of water sprinkling in heat", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Classifying Fruits and Vegetables by Texture",
      text: "Touch and examine: Bitter Gourd (Karela), Tomato, Ginger, Apple, Pineapple, and Spinach.",
      question: "Classify these six items into: (a) Smooth Skin, (b) Rough Skin.",
      answer: "<strong>(a) Smooth Skin:</strong> Tomato, Apple, Spinach leaves.<br><strong>(b) Rough / Bumpy Skin:</strong> Bitter Gourd (spiky ridges), Ginger (knobby root), Pineapple (coarse spiny eyes).",
      rubric: "1.5 Marks for smooth skin group; 1.5 Marks for rough skin group."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 16: A BUSY MONTH
  // -------------------------------------------------------------------------
  {
    id: "la16",
    num: 16,
    unit: "Classic Track: Looking Around",
    title: "A Busy Month",
    subtitle: "Gijubhai Badheka's Letter: Bird Nests, Beak Adaptations, Animal Teeth & Avian Parental Care",
    concepts: [
      "Letter written in April 1936 by pioneering educator Gijubhai Badheka from Bal Mandir, Bhavnagar, Gujarat.",
      "Diverse bird nests and architecture:",
      "1. <strong>Indian Robin:</strong> Lays eggs among roadside stones; nest lined with grass, soft wool, roots, and hair.",
      "2. <strong>Crow:</strong> Builds messy nests high on trees using twigs and even iron wire.",
      "3. <strong>Koel (Cuckoo):</strong> Does NOT build a nest; lays eggs slyly in crow's nest; crow hatches them.",
      "4. <strong>Tailor Bird:</strong> Stitches two broad leaves together with sharp beak; lays eggs in the leafy pouch.",
      "5. <strong>Weaver Bird (Baya):</strong> Male weaves beautiful hanging bottleneck nests; female inspects all and chooses the best.",
      "Bird beaks and animal teeth adaptations (cow, cat, snake, squirrel teeth that never stop growing)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">A Busy Month — Fascinating Bird Nest Architecture</text>
      <!-- Tailorbird -->
      <g transform="translate(100, 75)">
        <path d="M-20 -15 Q0 -30 20 -15 Q25 20 0 30 Q-25 20 -20 -15 Z" fill="#86efac" stroke="#16a34a"/>
        <line x1="-15" y1="5" x2="15" y2="5" stroke="#15803d" stroke-dasharray="2,2"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">Tailorbird (Stitched Leaves)</text>
      </g>
      <!-- Weaver Bird -->
      <g transform="translate(290, 75)">
        <path d="M-15 -30 C-20 0 -30 10 -25 25 C-15 35 15 35 25 25 C30 10 20 0 15 -30 Z" fill="#fef08a" stroke="#ca8a04"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">Weaver Bird (Woven Hanging Nest)</text>
      </g>
      <!-- Robin -->
      <g transform="translate(480, 75)">
        <ellipse cx="0" cy="10" rx="30" ry="15" fill="#fed7aa" stroke="#c2410c"/>
        <circle cx="-8" cy="8" r="4" fill="#ffffff"/>
        <circle cx="8" cy="8" r="4" fill="#ffffff"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">Indian Robin (Roadside Stones)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Birds use nests only to lay eggs and hatch chicks; once fledglings fly, the nest is abandoned!</text>
    </svg>`,
    questions: [
      {
        category: "Ornithology • Bird Behavior",
        q: "How does the Weaver Bird (Baya) choose its mate? Why doesn't the Koel build its own nest? Why do squirrels gnaw continuously on hard objects?",
        ans: `<strong>1. Weaver Bird Mate Selection:</strong><br>
The male Weaver Bird weaves intricate, beautiful, hanging woven bottle-shaped nests from tall grass fibers. The female bird inspects every single nest in the tree colony and chooses the one that is strongest, best ventilated, and most secure to lay her eggs.<br><br>
<strong>2. Koel's Nest Parasitism:</strong><br>
The Koel (cuckoo) does not build its own nest. It slyly lays its eggs in an unsuspecting crow's nest. Because the eggs look very similar, the crow faithfully incubates and hatches the Koel's chicks alongside its own.<br><br>
<strong>3. Why Squirrels Gnaw Continuously:</strong><br>
A squirrel's front teeth (incisors) grow continuously throughout its entire life. If a squirrel does not constantly gnaw on hard nuts and wood to grind them down, its teeth will grow so long that it won't be able to close its mouth or eat, leading to death.`,
        marks: 4,
        rubric: [
          { key: "Weaver bird male nest building and female inspection", marks: "1.5 M" },
          { key: "Koel laying eggs in crow's nest (brood parasitism)", marks: "1.0 M" },
          { key: "Squirrel incisors growing continuously requiring grinding", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Bird Beak Diversity and Feeding Habits",
      text: "Compare a woodpecker's long chisel-like beak with a sparrow's short conical beak and an eagle's curved hooked beak.",
      question: "How does each beak design match the bird's specific food source?",
      answer: "1. <strong>Woodpecker:</strong> Strong chisel-like beak hammers into tree bark to pull out hidden woodboring insects.<br>2. <strong>Sparrow:</strong> Short, thick, conical beak exerts crushing force to crack hard grain shells and seeds.<br>3. <strong>Eagle / Hawk:</strong> Sharp, curved hooked beak tears raw meat of prey animals.",
      rubric: "1.0 Mark for Woodpecker insect drilling; 1.0 Mark for Sparrow seed crushing; 1.0 Mark for Eagle meat tearing."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 17: NANDITA IN MUMBAI
  // -------------------------------------------------------------------------
  {
    id: "la17",
    num: 17,
    unit: "Classic Track: Looking Around",
    title: "Nandita in Mumbai",
    subtitle: "Rural-Urban Contrast, Slum Tenements (Chawls), High-Rise Skyscrapers & Water Woes",
    concepts: [
      "Nandita comes from a village to Mumbai for her mother's hospital treatment.",
      "Contrasts in living conditions:",
      "1. Mama's Chawl room: Single room where family sleeps, cooks, sits, and washes; public toilet shared by the whole lane (filthy and foul-smelling).",
      "2. Village House: One room but separate open courtyard, separate cooking area, and separate outdoor bathing space.",
      "Water struggles: In the chawl, waking at 4:00 am to fight in long queues at the public street tap. In the high-rise skyscraper (Babita's flat), water flows continuously from shiny taps.",
      "Experiencing elevators for the first time; Chowpatty beach and Mumbai sea view."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Nandita in Mumbai — The Contrast of Two Worlds</text>
      <!-- Slum Chawl -->
      <g transform="translate(130, 80)">
        <rect x="-60" y="-25" width="120" height="50" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" rx="4"/>
        <text x="0" y="-5" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#991b1b" text-anchor="middle">Mama's Chawl Room</text>
        <text x="0" y="10" font-family="system-ui, sans-serif" font-size="8" fill="#7f1d1d" text-anchor="middle">1 room for everything</text>
        <text x="0" y="22" font-family="system-ui, sans-serif" font-size="8" fill="#7f1d1d" text-anchor="middle">4:00 AM queue for water tap</text>
      </g>
      <!-- Skyscraper Flat -->
      <g transform="translate(420, 80)">
        <rect x="-60" y="-35" width="120" height="70" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4"/>
        <text x="0" y="-12" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#1e40af" text-anchor="middle">Babita's Skyscraper Flat</text>
        <text x="0" y="4" font-family="system-ui, sans-serif" font-size="8" fill="#1e3a8a" text-anchor="middle">Glass windows, lift</text>
        <text x="0" y="16" font-family="system-ui, sans-serif" font-size="8" fill="#1e3a8a" text-anchor="middle">Taps running with water</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">Urban migration challenges: Housing density, public sanitation, and clean water access.</text>
    </svg>`,
    questions: [
      {
        category: "Sociological Contrast • Urban Living",
        q: "What differences did Nandita find between getting water in her village and getting water in Mumbai's chawl? Why was she afraid of taking the high-rise lift initially?",
        ans: `<strong>1. Difference in Water Collection:</strong><br>
• <strong>In the Village:</strong> There were no water taps, but Nandita walked 20 minutes to a clean village pond or well. There were never any fights or shouting; water was available throughout the day.<br>
• <strong>In Mumbai's Chawl:</strong> Water arrived at a single public tap only from 4:00 am to 5:00 am. If you didn't reach on time, there was no water for the whole day. People pushed, fought, and screamed in long bucket queues.<br><br>
<strong>2. Fear of the Lift:</strong><br>
Nandita had never seen a multi-story iron cage moving vertically. When she entered the lift with multiple people and the doors slid shut, the sudden upward acceleration made her stomach churn, causing her to hold onto the metal railing in panic.`,
        marks: 3,
        rubric: [
          { key: "Detailed contrast between village pond and Mumbai public tap queues", marks: "2.0 M" },
          { key: "Psychological explanation of first-time lift vertigo and fear", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Water Wastage Awareness in Cities",
      text: "While cleaning utensils at the high-rise flat, Nandita noticed the housemaid left the kitchen tap running continuously while gossiping.",
      question: "Why did this upset Nandita, and what should every citizen do to prevent water wastage?",
      answer: "Nandita was heartbroken because she knew how desperately her Mama and aunties fought at 4:00 am for just a single bucket of water, while here precious drinking water was poured down the drain carelessly. Citizens must turn off taps while brushing or soaping dishes, repair leaking valves, and cherish every drop.",
      rubric: "1.5 Marks for emotional contrast with slum water crisis; 1.5 Marks for actionable conservation practices."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 18: TOO MUCH WATER, TOO LITTLE WATER
  // -------------------------------------------------------------------------
  {
    id: "la18",
    num: 18,
    unit: "Classic Track: Looking Around",
    title: "Too Much Water, Too Little Water",
    subtitle: "Water Crises: Water Parks in Maharashtra, Diarrhea in Nalgonda & Village Water Committees (Holgundi)",
    concepts: [
      "The paradox of water distribution: Massive water parks wasting millions of litres on joy slides in Bazar Gaon, Maharashtra, while neighboring farmers suffer severe drinking water shortages.",
      "Waterborne diseases: Drinking contaminated water causing severe diarrhea and vomiting.",
      "Life-saving home remedy: <strong>Oral Rehydration Solution (ORS)</strong> — 1 teaspoon sugar + a pinch of salt dissolved in 1 glass of boiled, cooled water.",
      "Empowerment: Children's Water Panchayat (Bheema Sangh) in Holgundi, Karnataka, rejuvenating dried village stepwells and restoring water security."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ecfeff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0e7490" text-anchor="middle">Oral Rehydration Solution (ORS) — Life-Saving Formula</text>
      <!-- Glass of boiled water -->
      <g transform="translate(140, 80)">
        <rect x="-20" y="-20" width="40" height="50" fill="#cffafe" stroke="#0891b2" stroke-width="2" rx="4"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#155e75" text-anchor="middle">1 Glass Boiled Water</text>
      </g>
      <text x="210" y="80" font-size="22" fill="#0891b2">+</text>
      <!-- Sugar -->
      <g transform="translate(280, 80)">
        <circle cx="0" cy="0" r="22" fill="#ffffff" stroke="#0891b2" stroke-width="1.5"/>
        <text x="0" y="6" font-size="16" text-anchor="middle">🥄🍬</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#155e75" text-anchor="middle">1 Teaspoon Sugar</text>
      </g>
      <text x="350" y="80" font-size="22" fill="#0891b2">+</text>
      <!-- Salt -->
      <g transform="translate(420, 80)">
        <circle cx="0" cy="0" r="22" fill="#ffffff" stroke="#0891b2" stroke-width="1.5"/>
        <text x="0" y="6" font-size="16" text-anchor="middle">🧂</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#155e75" text-anchor="middle">Pinch of Salt</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0e7490" text-anchor="middle">ORS prevents fatal dehydration by instantly replenishing lost bodily electrolytes.</text>
    </svg>`,
    questions: [
      {
        category: "Public Health & First Aid Science",
        q: "What causes severe dehydration during diarrhea and vomiting? How do you prepare a homemade Oral Rehydration Solution (ORS) step-by-step?",
        ans: `<strong>1. Cause of Dehydration:</strong><br>
During severe diarrhea and vomiting, the body rapidly loses critical water and essential mineral salts (electrolytes). If these fluids are not replaced immediately, vital organs can fail, which is especially fatal for young children.<br><br>
<strong>2. Preparation of Homemade ORS:</strong><br>
• Step 1: Boil one glass of clean drinking water and let it cool completely.<br>
• Step 2: Add <strong>one level teaspoon of sugar</strong> (provides instant energy and aids electrolyte absorption).<br>
• Step 3: Add <strong>one small pinch of salt</strong> (restores sodium electrolytes; taste should not be saltier than tears).<br>
• Step 4: Stir thoroughly until completely dissolved. Sip slowly throughout the day.`,
        marks: 3,
        rubric: [
          { key: "Biological danger of water and electrolyte loss", marks: "1.0 M" },
          { key: "Exact 4-step preparation recipe (boiled water, 1 tsp sugar, pinch salt)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Bheema Sangh (Children's Water Panchayat)",
      text: "In Holgundi village (Karnataka), adults gave up farming because village wells had dried up. The children's panchayat (Bheema Sangh) took charge.",
      question: "How did the children of Bheema Sangh restore water security to their village?",
      answer: "The children surveyed the hill slopes and discovered the ancient community tank was choked with mud, weeds, and cracked walls. They convinced elders, cleaned the silt, repaired stone bunds, and planted trees on the slopes. When monsoon rains arrived, the tank held water, recharging underground wells so farming resumed.",
      rubric: "1.5 Marks for identifying choked tank and desilting; 1.5 Marks for bund repair and groundwater recharge."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 19: ABDUL IN THE GARDEN
  // -------------------------------------------------------------------------
  {
    id: "la19",
    num: 19,
    unit: "Classic Track: Looking Around",
    title: "Abdul in the Garden",
    subtitle: "Plant Roots: Taproot vs Fibrous Roots, Desert Oak (Australia) & Banyan Aerial Roots",
    concepts: [
      "The vital functions of roots: Absorbing water and mineral salts, anchoring plants firmly against stormy winds.",
      "Roots we eat as vegetables: Carrot (gajar), radish (mooli), beetroot (chukandar), sweet potato (shakarkand).",
      "Desert Oak (Australia): A desert tree with roots that go 30 times deeper than its height underground until they reach the water table. Local people use thin straws to drink water from its trunk during droughts.",
      "Banyan Tree: Pillar-like hanging aerial roots that grow downward from branches into the ground to provide massive structural support.",
      "Laws protecting trees: Needing official government permission to prune or fell roadside trees."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Root Adaptations — Banyan Aerial Roots & Desert Oak</text>
      <!-- Banyan Aerial Roots -->
      <g transform="translate(130, 80)">
        <rect x="-35" y="-30" width="70" height="20" fill="#15803d"/>
        <line x1="-20" y1="-10" x2="-20" y2="35" stroke="#78350f" stroke-width="4"/>
        <line x1="20" y1="-10" x2="20" y2="35" stroke="#78350f" stroke-width="4"/>
        <line x1="-50" y1="35" x2="50" y2="35" stroke="#ca8a04" stroke-width="2"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">Banyan Hanging Roots</text>
        <text x="0" y="64" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Pillar-like branch support</text>
      </g>
      <!-- Desert Oak Deep Roots -->
      <g transform="translate(420, 80)">
        <polygon points="-15,10 0,-30 15,10" fill="#65a30d"/>
        <line x1="-60" y1="10" x2="60" y2="10" stroke="#ca8a04" stroke-width="2"/>
        <!-- Deep root path -->
        <line x1="0" y1="10" x2="0" y2="55" stroke="#78350f" stroke-width="2.5" stroke-dasharray="3,3"/>
        <circle cx="0" cy="55" r="4" fill="#38bdf8"/>
        <text x="0" y="-35" font-family="system-ui, sans-serif" font-size="8" fill="#166534" text-anchor="middle">Desert Oak Tree</text>
        <text x="0" y="68" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#0284c7" text-anchor="middle">Deep Water Table (30x tree height)</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Roots anchor, absorb water, store food, and provide pillar support.</text>
    </svg>`,
    questions: [
      {
        category: "Plant Physiology & Adaptations",
        q: "What are the unique characteristics of the Desert Oak tree found in Australia? Why was Abdul surprised when he tried to pull out a small grass plant from the garden bed?",
        ans: `<strong>1. Desert Oak Tree (Australia):</strong><br>
• Grows as tall as a classroom wall, but has very few leaves.<br>
• Its roots drill downward into the desert soil almost <strong>30 times deeper than its height</strong> until they touch the subterranean water table.<br>
• Water is stored directly inside the tree trunk. During droughts, indigenous people insert thin hollow pipes into the trunk to drink clean water.<br><br>
<strong>2. Why Abdul was surprised by grass roots:</strong><br>
Abdul thought pulling out a tiny grass blade would be effortless. But when he tugged, the grass didn't budge—instead, he broke the pea plant stalk! He was amazed to discover that tiny grass plants have extensive, tough fibrous root networks spreading deep into the soil, anchoring the ground firmly.`,
        marks: 4,
        rubric: [
          { key: "Three facts about Australian Desert Oak (deep roots, water in trunk)", marks: "2.5 M" },
          { key: "Explanation of grass fibrous roots anchorage power", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Recognizing Edible Roots in the Kitchen",
      text: "Mother chops potatoes, carrots, onions, radishes, and ginger for dinner.",
      question: "Which of these five vegetables are actual underground ROOTS, and which are modified underground STEMS?",
      answer: "• <strong>True Roots:</strong> Carrot (Gajar), Radish (Mooli). (They store food in swollen taproots).<br>• <strong>Modified Stems:</strong> Potato (tuber with eye buds), Onion (bulb), Ginger (rhizome with nodes).",
      rubric: "1.5 Marks for identifying true roots (carrot, radish); 1.5 Marks for identifying underground stems."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 20: EATING TOGETHER
  // -------------------------------------------------------------------------
  {
    id: "la20",
    num: 20,
    unit: "Classic Track: Looking Around",
    title: "Eating Together",
    subtitle: "Community Feasting: Bihu Festival in Assam, Bhela Ghar & The Mid-Day Meal Scheme",
    concepts: [
      "Class parties and community celebrations: Joy of sharing food without discrimination.",
      "Magh Bihu festival in Assam: Celebrated on 14th and 15th January (1st and 2nd Magh).",
      "Bhela Ghar: Temporary pavilion constructed with bamboo and thatch where the community spends Uruka night feasting.",
      "Traditional Bihu cuisine: Bora and Chheva rice (sticky rice boiled in bamboo tubes), fish curry, pitha, and coconut ladoos.",
      "The Mid-Day Meal (PM POSHAN) Scheme: Legal right of every primary school student to receive fresh, hot, nutritious food; bridges social caste barriers."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Magh Bihu in Assam — The Bhela Ghar Community Feast</text>
      <!-- Bhela Ghar -->
      <g transform="translate(140, 80)">
        <polygon points="-40,25 0,-30 40,25" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
        <line x1="-30" y1="25" x2="-30" y2="35" stroke="#78350f" stroke-width="3"/>
        <line x1="30" y1="25" x2="30" y2="35" stroke="#78350f" stroke-width="3"/>
        <text x="0" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">भेला घर (Bhela Ghar)</text>
        <text x="0" y="64" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Bamboo and thatch pavilion</text>
      </g>
      <!-- Mid-Day Meal -->
      <g transform="translate(420, 80)">
        <rect x="-80" y="-25" width="160" height="50" fill="#ffffff" stroke="#ea580c" stroke-width="1.5" rx="6"/>
        <text x="0" y="-5" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#9a3412" text-anchor="middle">Mid-Day Meal Scheme 🍲</text>
        <text x="0" y="10" font-family="system-ui, sans-serif" font-size="8" fill="#78350f" text-anchor="middle">Hot cooked food for all children</text>
        <text x="0" y="22" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Equality: Eat together as one</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9a3412" text-anchor="middle">Eating together dissolves religious and caste divides, nurturing social fraternity.</text>
    </svg>`,
    questions: [
      {
        category: "Festival Traditions & Welfare Programs",
        q: "What is 'Bhela Ghar', and when is it set on fire during the Bihu festival? What is the supreme objective of the Mid-Day Meal scheme in Indian schools?",
        ans: `<strong>1. Bhela Ghar & Meji during Bihu:</strong><br>
In Assam, on the eve of Magh Bihu (called <em>Uruka</em>), the entire village constructs a temporary hut out of bamboo, thatch, and straw called <strong>Bhela Ghar</strong>. Everyone eats a grand feast together inside it at night. Early next morning, after prayers, the Bhela Ghar and Meji (high bonfire) are lit to seek the blessings of Agni (the Fire God) for a rich agricultural harvest.<br><br>
<strong>2. Objective of the Mid-Day Meal Scheme:</strong><br>
By supreme court directive, every primary school student has the fundamental right to hot, freshly cooked, nutritious lunch. It accomplishes two vital goals: (a) Eliminates classroom hunger so poor children can concentrate on studies, and (b) Children of all religions and castes sit in a single row eating together, dismantling caste prejudices.`,
        marks: 4,
        rubric: [
          { key: "Detailed explanation of Bhela Ghar, Uruka, and Meji bonfire", marks: "2.0 M" },
          { key: "Dual goals of Mid-Day Meal (nutrition and social equality)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Classroom Unity Through Shared Meals",
      text: "On Eid and Diwali, students bring special delicacies like sewaiyan and gujiyas to school.",
      question: "How does sharing traditional festival foods among classmates promote national integration?",
      answer: "Sharing festival food gives children firsthand appreciation of their peers' diverse cultural heritages. Experiencing the flavors and warmth of other traditions replaces prejudice with mutual respect and fond childhood memories, weaving a strong fabric of secular national unity.",
      rubric: "1.5 Marks for cultural empathy through food; 1.5 Marks for national unity and harmony."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 21: FOOD AND FUN
  // -------------------------------------------------------------------------
  {
    id: "la21",
    num: 21,
    unit: "Classic Track: Looking Around",
    title: "Food and Fun",
    subtitle: "Boarding School Life, The Gurudwara Kitchen (Langar) & Selfless Service (Seva)",
    concepts: [
      "Boarding school experiences: Living in hostels, missing home food, but enjoying sharing large tiffin boxes with hostel friends.",
      "The holy Gurudwara visit: Covering heads with scarves, washing feet, paying respects to the Guru Granth Sahib.",
      "The massive community kitchen (Langar): Giant cauldrons of chana-urad dal, vegetable kaddhu, stacks of hot chapatis, and sweet Kada Prasad (semolina halwa cooked in pure desi ghee).",
      "The spirit of 'Seva' (Selfless Service): Rich and poor sit side-by-side on floor mats (pangat); volunteers happily roll rotis, serve food, wash metal plates, and sweep floors."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">The Gurudwara Langar — Selfless Service (Seva) and Equality</text>
      <!-- Giant Cauldron -->
      <g transform="translate(140, 80)">
        <ellipse cx="0" cy="15" rx="35" ry="12" fill="#78350f"/>
        <path d="M-35 15 C-35 40 35 40 35 15 Z" fill="#92400e"/>
        <text x="0" y="28" font-size="14" text-anchor="middle">🍲</text>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">Cauldron of Dal & Kada Prasad</text>
      </g>
      <!-- Roti Rolling -->
      <g transform="translate(420, 80)">
        <rect x="-65" y="-20" width="130" height="45" fill="#ffffff" stroke="#ca8a04" stroke-width="1.5" rx="6"/>
        <text x="0" y="0" font-size="14" text-anchor="middle">👩‍🍳👨‍🍳🫓</text>
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">Community Volunteers Rolling Rotis</text>
        <text x="0" y="32" font-family="system-ui, sans-serif" font-size="8" fill="#b45309" text-anchor="middle">Cooking with devotion</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">In Langar, no one is rich or poor: Everyone sits together in pangat and partakes of blessed food.</text>
    </svg>`,
    questions: [
      {
        category: "Community Service & Spiritual Traditions",
        q: "What is a 'Langar' in a Gurudwara? How is Kada Prasad prepared, and what values of Seva does a Gurudwara kitchen demonstrate?",
        ans: `<strong>1. What is Langar:</strong><br>
A Langar is a free, sanctified community kitchen maintained by every Sikh Gurudwara worldwide, where hot, wholesome vegetarian food is served round-the-clock to all visitors without any distinction of religion, caste, gender, or wealth.<br><br>
<strong>2. Preparation of Kada Prasad:</strong><br>
Kada Prasad is a sacred halwa prepared in huge iron cauldrons (kadhai) by roasting wheat flour (atta) thoroughly in generous amounts of pure desi ghee until golden brown, then adding sugar and boiling water while stirring vigorously until it turns fragrant, glossy, and smooth.<br><br>
<strong>3. Values of Seva:</strong><br>
Volunteers perform all tasks voluntarily with joyful devotion: cutting vegetables, rolling rotis on hot tavas, serving with folded hands, washing thousands of stainless steel plates, and cleaning the hall. It teaches <strong>humility, dignity of labor, and selfless service</strong>.`,
        marks: 4,
        rubric: [
          { key: "Definition of Langar and universal equality", marks: "1.5 M" },
          { key: "Recipe and preparation of Kada Prasad", marks: "1.0 M" },
          { key: "Values of Seva (humility, selfless community labor)", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Volunteering in Community Service",
      text: "Divya and Swastik had never rolled chapatis before, but at the Gurudwara kitchen, they happily smeared ghee on hundreds of rotis.",
      question: "Why should school children participate in community kitchen service (Langar)?",
      answer: "Participating in Langar teaches children the dignity of manual labor, eliminates pride, instills empathy towards hunger, and provides practical kitchen skills. Sitting on the floor to eat alongside strangers builds a deep sense of social brotherhood.",
      rubric: "1.5 Marks for dignity of labor and humility; 1.5 Marks for social equality and empathy."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 22: THE WORLD IN MY HOME
  // -------------------------------------------------------------------------
  {
    id: "la22",
    num: 22,
    unit: "Classic Track: Looking Around",
    title: "The World in My Home",
    subtitle: "Everyday Conflicts: TV Channels, Gender Rules, Honesty & Good Touch / Bad Touch",
    concepts: [
      "Real-life family moral dilemmas:",
      "1. TV Channel quarrel: Tug of war between father's football, brother's cricket, sister's songs, and mother's serial.",
      "2. Gender discrimination: Pratibha must rush home by 7:00 pm, while her brothers wander freely on streets late into the night.",
      "3. Financial honesty: The kulfi vendor counts money for 5 kulfis instead of 7; Pilloo aunty honestly corrects him and pays the full price.",
      "4. Personal boundaries: Ritu avoids going to Meena's house because she feels uncomfortable around Meena's uncle (Good Touch vs Bad Touch awareness)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fef2f2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#991b1b" text-anchor="middle">The World in My Home — Ethics, Honesty & Personal Safety</text>
      <!-- Pilloo Aunty Honesty -->
      <g transform="translate(150, 80)">
        <circle cx="0" cy="0" r="26" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="0" y="6" font-size="16" text-anchor="middle">🍦💰</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#991b1b" text-anchor="middle">Pilloo Aunty's Honesty</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="8" fill="#7f1d1d" text-anchor="middle">Paid for 7 kulfis, not 5</text>
      </g>
      <!-- Personal Safety -->
      <g transform="translate(430, 80)">
        <circle cx="0" cy="0" r="26" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="0" y="6" font-size="16" text-anchor="middle">🛡️✋</text>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#991b1b" text-anchor="middle">Ritu's Boundary</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="8" fill="#7f1d1d" text-anchor="middle">Say "NO" to uncomfortable touch!</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Integrity means doing the right thing when no one is watching; trust your gut feelings for safety.</text>
    </svg>`,
    questions: [
      {
        category: "Ethics, Values & Child Safety",
        q: "Why did Pilloo aunty pay the kulfi vendor for seven kulfis when he had mistakenly charged for only five? What should a child do if someone makes them feel uncomfortable by touching them?",
        ans: `<strong>1. Pilloo Aunty's Integrity:</strong><br>
The kulfi vendor was poor and made a calculation mistake in the evening rush, charging for 5 kulfis. The children thought they got two free kulfis, but Pilloo aunty immediately pointed out the error and paid for all 7 kulfis. She taught the children that <strong>taking advantage of someone's honest mistake is a form of cheating</strong>. Integrity means being fair and honest even when you could easily get away with paying less.<br><br>
<strong>2. Personal Safety & Uncomfortable Touch (Child Safety Rule):</strong><br>
If anyone (even a familiar relative, neighbor, or stranger) touches a child in a way that feels strange, scary, or uncomfortable:<br>
• Say a loud and firm <strong>'NO!'</strong><br>
• Move away immediately from that person.<br>
• Confide immediately in trusted adults: Mother, father, or school counselor. Never keep uncomfortable touches a secret, no matter who tells you to do so.`,
        marks: 4,
        rubric: [
          { key: "Explains Pilloo aunty's integrity and refusal to exploit mistakes", marks: "2.0 M" },
          { key: "Clear 3-step safety response (Say NO, Move Away, Report to Parents)", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Gender Equality in Household Rules",
      text: "Pratibha feels it is unfair that she must rush home before dark while her brothers Sanjay and Sandeep can play outside until 9:00 pm without anyone scolding them.",
      question: "Why should safety rules and curfew times be identical for both boys and girls in a modern family?",
      answer: "Gender discrimination in household rules reinforces inequality. Boys and girls are equal citizens. Safety concerns, discipline, and study hours apply equally to both sons and daughters. Treating both genders equally teaches boys responsibility and respects girls' autonomy.",
      rubric: "1.5 Marks for identifying gender bias; 1.5 Marks for advocating equal curfew and discipline."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 23: POCHAMPALLI
  // -------------------------------------------------------------------------
  {
    id: "la23",
    num: 23,
    unit: "Classic Track: Looking Around",
    title: "Pochampalli",
    subtitle: "Traditional Ikat Weaving in Mukhtarpur (Telangana), Silk Looms & Artisan Challenges",
    concepts: [
      "Mukhtarpur village in Pochampalli district, Telangana: Renowned worldwide for brilliant Pochampalli Ikat handloom weaving.",
      "The complete silk saree production process:",
      "1. Buying pure silk yarn bundles.",
      "2. Boiling yarn in hot water to remove dirt and impurities.",
      "3. Dyeing yarn in vibrant colors (tie-dye tieing process).",
      "4. Rolling yarn onto bobbins and fitting them onto the wooden handloom frame.",
      "Threat to handloom weavers: Powerloom imitation cloth, soaring raw silk prices, greedy middlemen, and youth abandoning the craft for city jobs."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Pochampalli Ikat Weaving — The Journey of a Silk Saree</text>
      <!-- Step 1: Boiling -->
      <g transform="translate(100, 75)">
        <circle cx="0" cy="0" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
        <text x="0" y="5" font-size="14" text-anchor="middle">♨️🧵</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">1. Boil Silk Yarn</text>
      </g>
      <text x="170" y="75" font-size="16" fill="#ea580c">➔</text>
      <!-- Step 2: Dyeing -->
      <g transform="translate(240, 75)">
        <circle cx="0" cy="0" r="24" fill="#fecdd3" stroke="#e11d48" stroke-width="1.5"/>
        <text x="0" y="5" font-size="14" text-anchor="middle">🎨</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9f1239" text-anchor="middle">2. Tie & Dye (Ikat)</text>
      </g>
      <text x="315" y="75" font-size="16" fill="#ea580c">➔</text>
      <!-- Step 3: Loom -->
      <g transform="translate(390, 75)">
        <circle cx="0" cy="0" r="24" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
        <text x="0" y="5" font-size="14" text-anchor="middle">🪡</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">3. Weave on Loom</text>
      </g>
      <text x="455" y="75" font-size="16" fill="#ea580c">➔</text>
      <!-- Step 4: Saree -->
      <g transform="translate(515, 75)">
        <circle cx="0" cy="0" r="24" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="0" y="5" font-size="14" text-anchor="middle">🥻✨</text>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">4. Pochampalli Saree</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Weaving one saree takes weeks of hard labor; fair wages are vital to keep the art alive.</text>
    </svg>`,
    questions: [
      {
        category: "Traditional Crafts & Economic Challenges",
        q: "Describe the step-by-step process of weaving a Pochampalli saree. Why is this precious traditional handicraft in danger of dying out?",
        ans: `<strong>1. The Weaving Process:</strong><br>
• Bundles of raw silk thread are boiled in large cauldrons to scour away grease and dirt.<br>
• Threads are stretched onto frames and marked with intricate geometric designs. Selected sections are tied tightly with rubber strips and dipped in hot dye pots (Tie-and-Dye Ikat technique) so color penetrates only open portions.<br>
• The colored threads are dried, rolled onto wooden bobbins, and set onto the handloom.<br>
• Weaver artisans move the pedals and shuttles back and forth with rhythmic precision over weeks to produce a single masterpiece saree.<br><br>
<strong>2. Why the Craft is in Danger:</strong><br>
• <strong>Skyrocketing Costs:</strong> Raw silk thread has become extremely expensive.<br>
• <strong>Exploitation by Middlemen:</strong> Big store shopkeepers buy sarees from weavers for a meager ₹2,000 to ₹3,000 and resell them in metro cities for ₹15,000 to ₹20,000, leaving weavers impoverished.<br>
• As a result, the younger generation is abandoning the ancestral looms to work as daily wage laborers in cities.`,
        marks: 4,
        rubric: [
          { key: "Detailed 4-stage process (boiling, tie-dyeing, bobbin rolling, loom weaving)", marks: "2.5 M" },
          { key: "Economic exploitation by middlemen and high silk cost", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Famous Traditional Crafts of Indian States",
      text: "Just like Pochampalli is famous for Ikat sarees, other regions of India are celebrated for specific handicrafts.",
      question: "Match each state with its famous traditional craft: (1) Kullu, (2) Madhubani, (3) Assam, (4) Kashmir.",
      answer: "• <strong>Kullu (Himachal Pradesh):</strong> Woolen Shawls.<br>• <strong>Madhubani (Bihar):</strong> Traditional Folk Paintings.<br>• <strong>Assam:</strong> Muga Silk Sarees.<br>• <strong>Kashmir:</strong> Pashmina Shawls and Walnut Wood Carving.",
      rubric: "1.0 Mark for each accurate state-craft match."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 24: HOME AND ABROAD
  // -------------------------------------------------------------------------
  {
    id: "la24",
    num: 24,
    unit: "Classic Track: Looking Around",
    title: "Home and Abroad",
    subtitle: "Abu Dhabi (UAE) vs Kerala: Deserts, Currency (Dirham), Sandstorms, Dates & Petrol",
    concepts: [
      "Chittappan (uncle) and Kunjamma (aunt) return to Kerala after working five years in Abu Dhabi.",
      "Geographical comparison between Abu Dhabi and Kerala:",
      "1. <strong>Climate:</strong> Abu Dhabi is a desert country—scorching heat, zero rainfall, flat sandy dunes; air-conditioners run constantly. Kerala is lush green with coconut palms, bananas, backwaters, and frequent rain.",
      "2. <strong>Vegetation:</strong> In Abu Dhabi, almost the only tree that thrives in the desert is the <strong>Date Palm (Khajoor)</strong>. In Kerala, there are dense forests of jackfruit, coconut, rubber, and betel nut.",
      "3. <strong>Natural Wealth:</strong> Petrol is found in abundance underground in Abu Dhabi and is cheaper than drinking water! In Kerala, freshwater rivers flow everywhere.",
      "Currency and language: Dirham (UAE currency) vs Rupee; Arabic vs Malayalam."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">Abu Dhabi (UAE) vs Kerala (India) — A Geographical Contrast</text>
      <!-- Abu Dhabi -->
      <g transform="translate(140, 80)">
        <rect x="-80" y="-30" width="160" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="6"/>
        <text x="0" y="-10" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#78350f" text-anchor="middle">Abu Dhabi (Desert UAE) 🏜️</text>
        <text x="0" y="8" font-family="system-ui, sans-serif" font-size="8" fill="#92400e" text-anchor="middle">Sand dunes, Date palms, Dirham</text>
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#b45309" text-anchor="middle">Petrol is cheaper than water!</text>
      </g>
      <!-- Kerala -->
      <g transform="translate(420, 80)">
        <rect x="-80" y="-30" width="160" height="60" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="6"/>
        <text x="0" y="-10" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#14532d" text-anchor="middle">Kerala (Tropical Coast) 🌴</text>
        <text x="0" y="8" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Green coconut groves, rivers, Rupee</text>
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="8" font-weight="800" fill="#166534" text-anchor="middle">Heavy monsoons & backwaters</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">Different climates shape distinct building styles, currencies, clothing, and natural resources.</text>
    </svg>`,
    questions: [
      {
        category: "Comparative Geography & Natural Resources",
        q: "Why is petrol cheaper than drinking water in Abu Dhabi? What kind of tree is called the 'Date Palm' and why is it the only tree growing in deserts?",
        ans: `<strong>1. Why Petrol is Cheaper than Water in Abu Dhabi:</strong><br>
Abu Dhabi is situated on massive subterranean reserves of crude mineral oil (petroleum), which is pumped out easily in billions of barrels. However, because it is an arid desert with zero rivers, lakes, or rainfall, fresh drinking water is extremely scarce and must be produced through expensive seawater desalination plants. Hence, underground petrol is cheaper than purified drinking water.<br><br>
<strong>2. The Date Palm (Khajoor):</strong><br>
The Date Palm is a resilient desert tree uniquely adapted to survive in extreme sand heat with very little water. Its deep roots reach moisture, its waxy fronds prevent water loss, and it yields sweet, energy-rich dates that sustain desert populations.`,
        marks: 3,
        rubric: [
          { key: "Abundant oil reserves vs costly seawater desalination water", marks: "1.5 M" },
          { key: "Date palm adaptations to arid desert heat", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "Currency Identification and Symbols",
      text: "Maalu looked at currency notes brought from Abu Dhabi. They were called 'Dirham' and had Arabic script written on them.",
      question: "Examine an Indian currency note. State four distinct features printed on every valid Indian Rupee note.",
      answer: "1. Portrait of <strong>Mahatma Gandhi</strong>.<br>2. The official Indian Rupee currency symbol (<strong>₹</strong>).<br>3. The value printed in 15 different Indian languages in the language panel on the reverse.<br>4. The national emblem (Lion Capital of Ashoka) and the signature of the RBI Governor guaranteeing payment.",
      rubric: "1.0 Mark for Gandhi portrait/Ashoka emblem; 1.0 Mark for ₹ symbol; 1.0 Mark for 15-language panel and RBI signature."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 25: SPICY RIDDLES
  // -------------------------------------------------------------------------
  {
    id: "la25",
    num: 25,
    unit: "Classic Track: Looking Around",
    title: "Spicy Riddles",
    subtitle: "Indian Spices (Masale): Black Pepper, Turmeric, Clove, Cumin, Cardamom & Kerala's Spice Gardens",
    concepts: [
      "Kerala: The historic 'Land of Spices' (Tejpatta, Chhoti Elaichi, Badi Elaichi, Kali Mirch).",
      "Spice Riddles and medicinal properties:",
      "1. <strong>Red Chilli (Lal Mirch):</strong> Sharp, spicy, makes tongue burn, watering eyes.",
      "2. <strong>Turmeric (Haldi):</strong> Bright yellow, heals cuts and wounds, mixed in hot milk for coughs.",
      "3. <strong>Black Pepper (Kali Mirch):</strong> Tiny, round, black ball, sharp and pungent, ground coarse or fine.",
      "4. <strong>Cumin (Jeera):</strong> Slender brown seeds fried in oil/ghee to scent dal; aids digestion.",
      "5. <strong>Clove (Laung):</strong> Looks like a nail with a round crown; cures severe toothache.",
      "6. <strong>Cardamom (Elaichi):</strong> Green fragrant pods that sweeten kheer and freshen breath."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff7ed" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#9a3412" text-anchor="middle">Spicy Riddles — Kitchen Spices & Medicinal Wonders</text>
      <!-- Haldi -->
      <g transform="translate(80, 75)">
        <circle cx="0" cy="0" r="22" fill="#fef08a" stroke="#ca8a04"/>
        <text x="0" y="4" font-size="14" text-anchor="middle">🟡</text>
        <text x="0" y="36" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">हल्दी (Turmeric)</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="8" fill="#a16207" text-anchor="middle">घाव और चोट भरे</text>
      </g>
      <!-- Laung -->
      <g transform="translate(185, 75)">
        <circle cx="0" cy="0" r="22" fill="#fed7aa" stroke="#c2410c"/>
        <text x="0" y="4" font-size="14" text-anchor="middle">🟤</text>
        <text x="0" y="36" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#9a3412" text-anchor="middle">लौंग (Clove)</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="8" fill="#c2410c" text-anchor="middle">दाँत दर्द भगाए</text>
      </g>
      <!-- Jeera -->
      <g transform="translate(290, 75)">
        <circle cx="0" cy="0" r="22" fill="#fef08a" stroke="#ca8a04"/>
        <text x="0" y="4" font-size="14" text-anchor="middle">🌾</text>
        <text x="0" y="36" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#854d0e" text-anchor="middle">जीरा (Cumin)</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="8" fill="#a16207" text-anchor="middle">पाचन शक्ति बढ़ाए</text>
      </g>
      <!-- Kali Mirch -->
      <g transform="translate(395, 75)">
        <circle cx="0" cy="0" r="22" fill="#e2e8f0" stroke="#475569"/>
        <text x="0" y="4" font-size="14" text-anchor="middle">⚫</text>
        <text x="0" y="36" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e293b" text-anchor="middle">काली मिर्च (Pepper)</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="8" fill="#475569" text-anchor="middle">तीखा-तीखा स्वाद</text>
      </g>
      <!-- Elaichi -->
      <g transform="translate(500, 75)">
        <circle cx="0" cy="0" r="22" fill="#dcfce7" stroke="#16a34a"/>
        <text x="0" y="4" font-size="14" text-anchor="middle">🟢</text>
        <text x="0" y="36" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#14532d" text-anchor="middle">इलायची (Cardamom)</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="8" fill="#166534" text-anchor="middle">मीठी सुगंध</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#9a3412" text-anchor="middle">Indian spices provide flavor, vibrant color, and act as natural Ayurvedic home medicines.</text>
    </svg>`,
    questions: [
      {
        category: "Botanical Remedies & Spices",
        q: "Solve the riddles: (a) 'I look like a nail with a round head; put me on your aching tooth and your pain will flee.' Who am I? (b) 'I heal cuts, make food look yellow, and am mixed in milk when you cough.' Who am I? (c) Why was Kerala famous worldwide as the 'Land of Spices'?",
        ans: `<strong>(a) Riddle 1:</strong> <strong>Clove (Laung)</strong>. Its oil contains <em>eugenol</em>, a natural anesthetic that numbs toothache instantly.<br><br>
<strong>(b) Riddle 2:</strong> <strong>Turmeric (Haldi)</strong>. Its active compound <em>curcumin</em> has powerful anti-inflammatory and antiseptic healing properties.<br><br>
<strong>(c) Why Kerala is the 'Land of Spices':</strong><br>
Kerala's warm tropical monsoon climate and rich Western Ghat mountain soil are ideal for growing the world's most aromatic spices—especially black pepper (known as 'Black Gold'), green cardamom, cinnamon, and cloves. Arab, Portuguese, and Dutch traders sailed across oceans for centuries to trade in Kerala spices.`,
        marks: 3,
        rubric: [
          { key: "Solves Clove (Laung) with toothache benefit", marks: "1.0 M" },
          { key: "Solves Turmeric (Haldi) with healing antiseptic benefit", marks: "1.0 M" },
          { key: "Explains Kerala's historical 'Land of Spices' status", marks: "1.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Garam Masala Ingredients",
      text: "Grandmother grinds a fragrant powder called 'Garam Masala' to sprinkle over curries.",
      question: "Name four whole spices that are roasted and ground together to create Garam Masala.",
      answer: "1. <strong>Coriander seeds (Dhania)</strong><br>2. <strong>Cumin seeds (Jeera)</strong><br>3. <strong>Black Pepper (Kali Mirch)</strong><br>4. <strong>Cinnamon (Dalchini) and Cloves (Laung)</strong>.",
      rubric: "1.5 Marks for identifying at least 3 correct spices; 1.5 Marks for explaining grinding for flavor."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 26: DEFENCE OFFICER: WAHIDA
  // -------------------------------------------------------------------------
  {
    id: "la26",
    num: 26,
    unit: "Classic Track: Looking Around",
    title: "Defence Officer: Wahida",
    subtitle: "Lieutenant Commander Wahida Prism, Indian Navy Doctor & Leading the Passing Out Parade",
    concepts: [
      "Real-life inspiration: Lieutenant Commander Wahida Prism from Thanamandi village in Rajouri district, Jammu & Kashmir.",
      "Overcoming conservative village barriers, completing MBBS from Jammu Medical College, and joining the Indian Navy.",
      "Serving aboard naval warships: Naval doctors treat crew members, handle medical emergencies at sea, inspect water cleanliness, and maintain hygiene to keep the warship disease-free.",
      "Historic milestone: First woman in the history of the Indian Armed Forces to <strong>lead the Annual Passing Out Parade</strong> (calling out 36 loud commands so the whole platoon hears!).",
      "Why her father named her 'Prism': A glass prism reflects seven brilliant colors; her father wanted her to shine brilliantly."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Lt. Commander Wahida Prism — Indian Navy Doctor & Parade Leader</text>
      <!-- Warship -->
      <g transform="translate(140, 80)">
        <polygon points="-50,20 50,20 40,35 -40,35" fill="#475569" stroke="#1e293b"/>
        <rect x="-25" y="-5" width="50" height="25" fill="#64748b"/>
        <line x1="0" y1="-20" x2="0" y2="-5" stroke="#94a3b8" stroke-width="2"/>
        <text x="0" y="50" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#1e3a8a" text-anchor="middle">Naval Warship Doctor</text>
      </g>
      <!-- Parade Command -->
      <g transform="translate(420, 80)">
        <rect x="-80" y="-25" width="160" height="50" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" rx="6"/>
        <text x="0" y="-5" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#1e40af" text-anchor="middle">Leading Passing Out Parade</text>
        <text x="0" y="10" font-family="system-ui, sans-serif" font-size="8" fill="#334155" text-anchor="middle">Called 36 commands loud & clear!</text>
        <text x="0" y="22" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#1d4ed8" text-anchor="middle">First woman in Armed Forces history</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">Prism: A symbol of shining with courage, intelligence, and multiple brilliant colors.</text>
    </svg>`,
    questions: [
      {
        category: "Inspirational Biography • Armed Forces",
        q: "Who is Wahida Prism? What are the duties of a medical officer on an Indian Navy warship, and what historic honor did she achieve during the Passing Out Parade?",
        ans: `<strong>1. Who is Wahida Prism:</strong><br>
Wahida Prism is an Indian Navy doctor holding the rank of Lieutenant Commander, hailing from a small village named Thanamandi in Jammu & Kashmir's Rajouri district.<br><br>
<strong>2. Duties on a Naval Warship:</strong><br>
• Provides medical treatment and performs emergency surgeries for the entire crew sailing at sea.<br>
• Regularly checks food and drinking water purity to prevent epidemics on the ship.<br>
• Inspects the entire vessel daily to ensure zero rats or garbage accumulate, maintaining complete sanitation.<br>
• Trains sailors in first aid drills and emergency casualty evacuation.<br><br>
<strong>3. Historic Parade Honor:</strong><br>
She became the <strong>first woman officer in the history of the Indian Armed Forces to lead the prestigious Annual Passing Out Parade</strong>. Leading the parade requires immense voice projection and stamina—calling out 36 loud commands so four full platoons marching behind can hear clearly.`,
        marks: 4,
        rubric: [
          { key: "Background of Wahida Prism from Rajouri, J&K", marks: "1.0 M" },
          { key: "Four duties of a naval warship medical officer", marks: "1.5 M" },
          { key: "Historic achievement of leading passing out parade with 36 commands", marks: "1.5 M" }
        ]
      }
    ],
    cbq: {
      title: "The Meaning of 'Prism'",
      text: "Wahida's father gave her the unique middle name 'Prism' when she was a little girl.",
      question: "Why did her father give her this name, and how did Wahida live up to it?",
      answer: "A triangular glass prism is transparent, but when white light enters, it refracts and reflects seven radiant, brilliant colors. Her father wanted her to possess multifaceted talents, think independently, and shine brightly in society. By becoming a top doctor, naval officer, and parade leader, Wahida fulfilled her father's dream brilliantly.",
      rubric: "1.5 Marks for scientific prism metaphor (refracting 7 colors); 1.5 Marks for living up to multifaceted excellence."
    }
  },

  // -------------------------------------------------------------------------
  // CHAPTER 27: CHUSKIT GOES TO SCHOOL
  // -------------------------------------------------------------------------
  {
    id: "la27",
    num: 27,
    unit: "Classic Track: Looking Around",
    title: "Chuskit Goes to School",
    subtitle: "Inclusivity in Skitpo Pul (Ladakh), Overcoming Wheelchair Barriers & Community Bridge Building",
    concepts: [
      "Chuskit: A 9-year-old girl born with impaired legs who lives in Skitpo Pul village in Ladakh.",
      "Her dream: Yearning to go to school like her younger brother, carry a school bag, and make friends.",
      "The physical barrier: An uneven rocky mountain path and a roaring glacial stream with no bridge preventing her wheelchair from passing.",
      "Empathy in action: Her schoolmate Abdul notices her sorrow, meets the Headmaster and teachers, and convinces them to make the path accessible.",
      "Community bridge-building: Schoolchildren and villagers unite with shovels, level the rocky slope, build a wooden plank bridge over the stream, and roll Chuskit's wheelchair into school amidst joyful cheers!"
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Chuskit Goes to School — Community Solidarity Overcomes Barriers</text>
      <!-- Mountain Stream Bridge -->
      <g transform="translate(180, 85)">
        <path d="M-60 15 Q0 0 60 15" fill="none" stroke="#38bdf8" stroke-width="6"/>
        <line x1="-30" y1="5" x2="30" y2="5" stroke="#78350f" stroke-width="5"/>
        <text x="0" y="-8" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#78350f" text-anchor="middle">Plank Bridge Built by Children</text>
        <text x="0" y="35" font-family="system-ui, sans-serif" font-size="8" fill="#0284c7" text-anchor="middle">Leveled rocky path</text>
      </g>
      <!-- Chuskit Wheelchair Arriving -->
      <g transform="translate(420, 85)">
        <circle cx="0" cy="10" r="18" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="0" cy="-18" r="8" fill="#fed7aa"/>
        <text x="0" y="42" font-family="system-ui, sans-serif" font-size="10" font-weight="900" fill="#1e40af" text-anchor="middle">Chuskit at School Gate! 🏫🎒</text>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="8" fill="#15803d" text-anchor="middle">Tears of joy & applause</text>
      </g>
      <text x="290" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#1e40af" text-anchor="middle">Education is the birthright of every child: Compassion builds bridges where obstacles exist!</text>
    </svg>`,
    questions: [
      {
        category: "Inclusive Education & Community Action",
        q: "Why had 9-year-old Chuskit never attended school before? How did Abdul, the teachers, and school children work together to make her dream come true?",
        ans: `<strong>1. Why Chuskit couldn't attend school:</strong><br>
Chuskit could not use her legs since birth and moved around using a wheelchair. Although her school was not far away across the hill, the pathway was steep, bumpy, and strewn with sharp rocks. Worst of all, there was a fast-flowing glacial stream that had no bridge. A wheelchair could not roll across the rocks or cross the stream, so her grandfather sadly believed school was impossible for her.<br><br>
<strong>2. How Abdul and the School Solved the Problem:</strong><br>
Abdul, a compassionate schoolboy, spoke passionately with the Headmaster and teachers, pointing out that Chuskit had every right to study. The Headmaster called a meeting: one group of students and villagers took shovels and leveled the uneven rocky road smooth; another group cut flat wooden planks and constructed a sturdy bridge across the roaring stream. With the path made barrier-free, Chuskit wheeled into the schoolyard to the cheering applause of all teachers and children.`,
        marks: 4,
        rubric: [
          { key: "Physical obstacles explained (rocky slope and roaring stream without bridge)", marks: "2.0 M" },
          { key: "Abdul's initiative and community collective labor to build bridge and level road", marks: "2.0 M" }
        ]
      }
    ],
    cbq: {
      title: "Building an Accessible Barrier-Free School",
      text: "Even today, many schools have flights of stairs at entrances and narrow classroom doors that block wheelchairs.",
      question: "What three modifications must every school make to become truly inclusive for children with mobility disabilities?",
      answer: "1. <strong>Gentle Ramps with Handrails:</strong> Alongside all staircases and entrances.<br>2. <strong>Wide Level Doors:</strong> At least 90 cm wide with zero raised floor thresholds for wheelchairs to roll easily.<br>3. <strong>Accessible Restrooms:</strong> Toilets with grab bars, wide cubicle doors, and low sinks.",
      rubric: "1.0 Mark for ramps with handrails; 1.0 Mark for wide doors; 1.0 Mark for accessible restrooms."
    }
  }
];

module.exports = { lookingAroundChapters };
