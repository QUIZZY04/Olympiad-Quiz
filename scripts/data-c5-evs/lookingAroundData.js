// Official NCERT Class 5 EVS: "Looking Around" (आस-पास) - Classic CBSE Track
// 100% Comprehensive Question & Activity Dataset - Chapters 1 to 22
// Aligned with NCERT Curriculum & Tiwari Academy standards

const chaptersData = [
  {
    num: 1,
    title: "Super Senses",
    hindiTitle: "कैसे पहचाना चींटी ने दोस्त को?",
    theme: "Animal Senses, Communication, Sensory Adaptations, Tiger Conservation & Sanctuaries",
    concepts: [
      "Animals have amazing senses: sights, sounds, smells, and taste far exceeding human capabilities.",
      "Ants leave behind a chemical scent (pheromones) to guide other ants in a continuous single file.",
      "Silk moth can detect its female partner from many kilometres away by her distinct scent.",
      "Dogs mark their own territory with urine and faeces; they sniff out intruders by their scent.",
      "Birds have eyes on opposite sides of their heads, giving them wide panoramic vision; birds like eagles and kites can see 4 times further than humans.",
      "Night animals like owls and bats see mostly in black and white.",
      "Tigers possess acute hearing (rotating ears), night vision 6 times sharper than humans, and sensitive whiskers that detect minute vibrations in air.",
      "National Parks like Jim Corbett (Uttarakhand) and Ghana (Bharatpur, Rajasthan) protect endangered species from hunting and poaching."
    ],
    svg: `<svg viewBox="0 0 580 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#166534" text-anchor="middle">Sensory Capabilities in the Animal Kingdom</text>
      <!-- Eagle Vision -->
      <circle cx="90" cy="85" r="36" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <text x="90" y="80" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">🦅</text>
      <text x="90" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#065f46" text-anchor="middle">Eagle / Kite</text>
      <text x="90" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#047857" text-anchor="middle">Super Vision (4x human)</text>
      <!-- Ant Smell -->
      <circle cx="220" cy="85" r="36" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="220" y="80" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">🐜</text>
      <text x="220" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">Ant / Silkworm</text>
      <text x="220" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#1d4ed8" text-anchor="middle">Pheromone scent trail</text>
      <!-- Bat Echolocation -->
      <circle cx="350" cy="85" r="36" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="350" y="80" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">🦇</text>
      <text x="350" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle">Bat / Dolphin</text>
      <text x="350" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#b45309" text-anchor="middle">High-frequency echolocation</text>
      <!-- Tiger Whiskers -->
      <circle cx="480" cy="85" r="36" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
      <text x="480" y="80" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">🐅</text>
      <text x="480" y="102" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">Royal Tiger</text>
      <text x="480" y="140" font-family="system-ui, sans-serif" font-size="9" fill="#b91c1c" text-anchor="middle">Sensitive whiskers & night sight</text>
    </svg>`,
    questions: [
      {
        q: "How did the ant recognize its friend and identify that other ants did not belong to its own group?",
        marks: 3,
        ans: `Ants identify their group members primarily through their extraordinary sense of smell. As ants walk, they secrete specific chemical substances called <strong>pheromones</strong> on the ground. Each colony has a distinct chemical signature. When an unfamiliar ant approaches, the guard ant uses its antennae (feelers) to detect the scent and immediately recognizes whether the newcomer belongs to its own nest or is an outsider.`,
        rubric: [
          { key: "Mention of chemical scent / pheromones", marks: "1 Mark" },
          { key: "Role of antennae as sensory smell organs", marks: "1 Mark" },
          { key: "Explanation of distinct colony scent recognition", marks: "1 Mark" }
        ]
      },
      {
        q: "Why do dogs sniff everywhere along the road? What does a dog deduce by sniffing another dog's urine or faeces?",
        marks: 3,
        ans: `Dogs mark out their own territory on streets by urinating or defecating at specific posts, poles, and corners. A dog can instantly deduce whether another dog has entered its territory by sniffing the scent left in urine and faeces. The scent reveals whether the intruder is a male or female, familiar or a stranger, and how recently it passed through that area.`,
        rubric: [
          { key: "Concept of territorial marking by urination/defecation", marks: "1 Mark" },
          { key: "Identification of intruder via scent detection", marks: "1 Mark" },
          { key: "Information extracted (gender, freshness, familiarity)", marks: "1 Mark" }
        ]
      },
      {
        q: "Most birds have their eyes fixed on opposite sides of their heads. How does this eye placement help them, and why do they frequently move their necks?",
        marks: 3,
        ans: `Because most birds have eyes positioned on opposite sides of their heads, their eyes can focus on two completely different objects simultaneously, providing a wide panoramic field of view to spot predators and food. However, because their eyeballs cannot rotate within their sockets (they are fixed), birds must turn their whole head and neck to look directly in front or focus closely on a single object.`,
        rubric: [
          { key: "Wide panoramic vision covering two directions", marks: "1.5 Marks" },
          { key: "Fixed eyeballs requiring neck movement to change focal angle", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Name five animals whose ears can be seen clearly and five animals whose ears are hidden under feathers or skin.",
        marks: 3,
        ans: `<ul>
          <li><strong>Animals with visible external ears (pinnae):</strong> Elephant, Cow, Dog, Cat, Horse, Deer, Rabbit.</li>
          <li><strong>Animals with hidden ears (internal ear holes):</strong> Snake (feels vibrations through the ground), Lizard, Pigeon, Sparrow, Crocodile, Crow.</li>
        </ul>`,
        rubric: [
          { key: "Accurate list of 5 animals with visible pinnae", marks: "1.5 Marks" },
          { key: "Accurate list of 5 animals with hidden ear holes", marks: "1.5 Marks" }
        ]
      },
      {
        q: "How does a tiger use its different senses (whiskers, ears, night vision) to hunt efficiently in the wild?",
        marks: 5,
        ans: `The tiger is one of the most alert predators on Earth due to its integrated super senses:
        <ol>
          <li><strong>Sensitive Whiskers (Vibrissae):</strong> The whiskers are extremely sensitive to air movements and vibrations. They help the tiger navigate safely in complete pitch darkness and locate hidden prey moving through grass.</li>
          <li><strong>Acute Directional Hearing:</strong> A tiger's ears can rotate independently in different directions to catch the faintest sound from far away. It can distinguish between the rustling of leaves and an animal walking on grass.</li>
          <li><strong>Super Night Vision:</strong> A tiger's night vision is six times sharper than human night vision, allowing it to ambush prey seamlessly after dusk.</li>
          <li><strong>Roar Communication:</strong> A tiger's roar can be heard up to 3 kilometres away.</li>
        </ol>`,
        rubric: [
          { key: "Sensory role of whiskers in vibration detection", marks: "1.5 Marks" },
          { key: "Rotational ears and sound distinction capability", marks: "1.5 Marks" },
          { key: "6x sharper night vision than humans", marks: "1 Mark" },
          { key: "Summary of predatory efficiency and territory calls", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      type: "Case Study & Environmental Policy",
      title: "Wildlife Conservation & Anti-Poaching Framework",
      story: "Due to poaching for tiger skins, bones, and elephant tusks, wild animal populations experienced steep declines. In response, the Government of India declared several forested regions as protected National Parks and Sanctuaries where human interference, hunting, and grazing are strictly prohibited.",
      q: "Name two renowned National Parks in India and explain why the government strictly prohibits hunting and woodcutting within their core boundaries.",
      ans: `Two famous National Parks in India are:
      1. <strong>Jim Corbett National Park</strong> in Uttarakhand (India's oldest national park, famous for Bengal Tigers).
      2. <strong>Kaziranga National Park</strong> in Assam (famous for the Great Indian One-Horned Rhinoceros).
      
      <strong>Reasons for strict legal prohibition:</strong>
      - <em>Protection from Extinction:</em> Poachers kill tigers for their skins, claws, and bones, and elephants for their ivory tusks. Strict laws prevent species extinction.
      - <em>Preserving Ecological Balance:</em> If apex predators like tigers disappear, herbivore populations explode, destroying vegetation and collapsing the food web.
      - <em>Habitat Restoration:</em> Tree cutting degrades the natural ecosystem that wild animals depend on for breeding, shelter, and water.`,
      marking: "2 Marks for naming National Parks + 3 Marks for ecological and anti-poaching rationale = 5 Marks"
    }
  },
  {
    num: 2,
    title: "A Snake Charmer's Story",
    hindiTitle: "कहानी सपेरों की",
    theme: "Kalbeliyas, Indian Snakes, Venom, Fangs, Antivenom & Wildlife Laws",
    concepts: [
      "The Kalbeliya community shares a cultural and traditional bond with snakes, passing down knowledge across generations.",
      "Musical instruments used by snake charmers: Been, Tumba, Khanjiri, and Dhol.",
      "Out of hundreds of snake species in India, only four varieties are dangerously poisonous: Cobra (नाग), Common Krait (करैत), Russell's Viper (दुबोइया), and Saw-scaled Viper (अफ़ई).",
      "Poisonous snakes have two hollow fangs through which venom enters the bloodstream when they bite.",
      "Snake venom medicine (antivenom) is manufactured directly from the venom of the snakes themselves and is stocked in government hospitals.",
      "Snakes are friends of farmers: they eat rats in fields and prevent crop destruction.",
      "The Wildlife Protection Act made it illegal to catch and keep wild animals, prompting snake charmers to adapt into musical performers and educators."
    ],
    svg: `<svg viewBox="0 0 580 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">India's Four Venomous Snakes & Antivenom Mechanism</text>
      <!-- Cobra -->
      <rect x="25" y="45" width="115" height="110" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <text x="82" y="72" font-size="20" text-anchor="middle">🐍</text>
      <text x="82" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">1. Cobra (नाग)</text>
      <text x="82" y="115" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">Neurotoxic venom</text>
      <text x="82" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">Hood with spectacles</text>
      <!-- Common Krait -->
      <rect x="160" y="45" width="115" height="110" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <text x="217" y="72" font-size="20" text-anchor="middle">🐍</text>
      <text x="217" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">2. Common Krait</text>
      <text x="217" y="115" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">Nocturnal biter</text>
      <text x="217" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">White paired bands</text>
      <!-- Russell's Viper -->
      <rect x="295" y="45" width="115" height="110" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <text x="352" y="72" font-size="20" text-anchor="middle">🐍</text>
      <text x="352" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">3. Russell's Viper</text>
      <text x="352" y="115" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">Hemotoxic venom</text>
      <text x="352" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">Loud hissing warning</text>
      <!-- Saw-scaled Viper -->
      <rect x="430" y="45" width="125" height="110" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <text x="492" y="72" font-size="20" text-anchor="middle">🐍</text>
      <text x="492" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">4. Saw-scaled Viper</text>
      <text x="492" y="115" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">Small size, aggressive</text>
      <text x="492" y="132" font-family="system-ui, sans-serif" font-size="9" fill="#92400e" text-anchor="middle">Serrated scale rasping</text>
    </svg>`,
    questions: [
      {
        q: "Why are snakes described as 'friends of farmers'? What would happen to crops if all snakes were removed from agricultural fields?",
        marks: 3,
        ans: `Snakes are beneficial friends of farmers because they eat rats and mice in agricultural fields. Rats reproduce rapidly and destroy standing grains, roots, and stored food. If all snakes were killed or removed, the rodent population would explode uncontrollable, resulting in massive destruction of food crops and widespread agricultural losses.`,
        rubric: [
          { key: "Identification of snakes as rodent predators", marks: "1.5 Marks" },
          { key: "Consequence of snake removal on food crops and farmer livelihood", marks: "1.5 Marks" }
        ]
      },
      {
        q: "How many types of poisonous snakes are found in India? Name each of them and state how snake venom enters a victim's body.",
        marks: 4,
        ans: `Out of the numerous snake species found across India, only <strong>four varieties</strong> are venomous:
        <ol>
          <li><strong>Cobra (नाग)</strong></li>
          <li><strong>Common Krait (करैत)</strong></li>
          <li><strong>Russell's Viper (दुबोइया)</strong></li>
          <li><strong>Saw-scaled Viper (अफ़ई)</strong></li>
        </ol>
        When a poisonous snake bites, venom travels through its <strong>two hollow teeth (called fangs)</strong>, which act like hypodermic injection needles, pumping poison directly into the victim's tissues and bloodstream.`,
        rubric: [
          { key: "Correct number (4) and names of all four venomous snakes", marks: "2 Marks" },
          { key: "Explanation of fangs as hollow injection needles", marks: "2 Marks" }
        ]
      },
      {
        q: "How is snake antivenom (the medicine for snake bites) prepared, and where can people find it during an emergency?",
        marks: 3,
        ans: `Snake antivenom is made directly from <strong>snake venom</strong> itself. Small, controlled doses of snake venom are collected by extracting it from live snakes. It is then injected into animals like horses to produce antibodies, which are purified into antivenom serum. Snake bite antivenom is available at all <strong>government primary healthcare centres and district hospitals</strong> across the country.`,
        rubric: [
          { key: "Explanation that antivenom is manufactured from snake venom", marks: "1.5 Marks" },
          { key: "Availability in government hospitals & health centres", marks: "1.5 Marks" }
        ]
      },
      {
        q: "What law did the government enact regarding wild animals, and what dilemma did it create for the Kalbeliya community?",
        marks: 3,
        ans: `The Indian government enacted the <strong>Wildlife Protection Act</strong>, which makes it illegal to catch, keep, or sell wild animals, including snakes. 
        <br><strong>Dilemma for Kalbeliyas:</strong> Snake charming was the traditional profession and sole source of livelihood for Kalbeliya families. The ban suddenly took away their source of income. To adapt, many Kalbeliyas have preserved their cultural heritage by transitioning into folk dancers, musical performers, and wildlife education guides.`,
        rubric: [
          { key: "Statement of the Wildlife Protection law prohibiting capture", marks: "1.5 Marks" },
          { key: "Impact on Kalbeliya livelihood and cultural adaptation", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      type: "First Aid & Medical Protocol",
      title: "Emergency Response to Snake Bites",
      story: "While working in a paddy field during the monsoon, a farmer was bitten on the ankle by a snake. Some villagers suggested cutting the wound with a blade and sucking out the blood, while a school teacher insisted on taking him directly to the district hospital.",
      q: "Explain why traditional myths like cutting the wound or sucking venom are dangerous, and list the correct scientific first-aid steps for snake bite.",
      ans: `<strong>Why cutting or sucking the wound is hazardous:</strong>
      Cutting tissue causes severe bleeding, tissue damage, and life-threatening infections. Sucking venom is ineffective because venom spreads swiftly into the lymphatic system and blood, while putting the rescuer at risk of poisoning through mouth cuts.
      
      <strong>Correct Scientific First Aid Protocol:</strong>
      1. <em>Keep the patient calm and still:</em> Any panic, running, or movement speeds up heart rate, accelerating venom distribution.
      2. <em>Immobilize the bitten limb:</em> Keep the bitten leg or arm below heart level and apply a clean, broad splint (like a wooden stick or cloth bandage) to prevent movement.
      3. <em>Remove tight items:</em> Remove rings, bangles, or tight shoes before swelling occurs.
      4. <em>Rush to a hospital immediately:</em> The only effective cure is intravenous administration of Polyvalent Antivenom Serum at a medical facility.`,
      marking: "2 Marks for debunking harmful myths + 3 Marks for 4 correct first-aid steps = 5 Marks"
    }
  },
  {
    num: 3,
    title: "From Tasting to Digesting",
    hindiTitle: "चखने से पचने तक",
    theme: "Taste Buds, Salivary Digestion, Stomach Acid, Dr. Beaumont's Discovery & Balanced Nutrition",
    concepts: [
      "Different parts of our tongue detect different primary tastes: sweet, salty, sour, and bitter.",
      "Digestion begins in the mouth: chewing food thoroughly mixes it with saliva, where enzymes break down complex starch into simple sweet sugars.",
      "Dr. William Beaumont conducted historic experiments on soldier Alexis St. Martin (who had an unhealed stomach gunshot wound), proving that the stomach churns food and secretes digestive juices.",
      "Stomach juices are strongly acidic in nature.",
      "Food takes roughly 1.5 to 4.5 hours to digest in the stomach depending on whether it is boiled milk, raw eggs, or cooked meat.",
      "Proper food (संतुलित आहार) is the fundamental right of every child: malnutrition (undernourishment) causes weakness, while fast junk food leads to obesity and lethargy.",
      "Kalahandi district in Odisha exports large quantities of rice, yet many poor labourers and children there suffer from extreme starvation and poverty."
    ],
    svg: `<svg viewBox="0 0 580 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">The Human Digestive Pathway & Tongue Taste Regions</text>
      <!-- Tongue Map -->
      <path d="M 60,60 C 60,140 140,140 140,60 Z" fill="#fecdd3" stroke="#e11d48" stroke-width="2"/>
      <ellipse cx="100" cy="120" rx="20" ry="10" fill="#fda4af"/>
      <text x="100" y="124" font-size="8.5" font-weight="700" fill="#9f1239" text-anchor="middle">Sweet</text>
      <text x="75" y="90" font-size="8" font-weight="700" fill="#9f1239" text-anchor="middle">Salty</text>
      <text x="125" y="90" font-size="8" font-weight="700" fill="#9f1239" text-anchor="middle">Sour</text>
      <text x="100" y="72" font-size="8" font-weight="700" fill="#9f1239" text-anchor="middle">Bitter</text>
      <!-- Mouth -->
      <rect x="180" y="55" width="85" height="50" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="222" y="75" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">1. Mouth</text>
      <text x="222" y="92" font-size="8.5" fill="#1d4ed8" text-anchor="middle">Saliva + Starch</text>
      <!-- Stomach -->
      <rect x="295" y="55" width="95" height="50" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="342" y="75" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">2. Stomach</text>
      <text x="342" y="92" font-size="8.5" fill="#1d4ed8" text-anchor="middle">Acid & Churning</text>
      <!-- Small Intestine -->
      <rect x="420" y="55" width="135" height="50" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="487" y="75" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">3. Small Intestine</text>
      <text x="487" y="92" font-size="8.5" fill="#1d4ed8" text-anchor="middle">Nutrient Absorption</text>
      <!-- Arrow -->
      <line x1="265" y1="80" x2="290" y2="80" stroke="#2563eb" stroke-width="2"/>
      <line x1="390" y1="80" x2="415" y2="80" stroke="#2563eb" stroke-width="2"/>
      <text x="290" y="150" font-size="10" fill="#475569" text-anchor="middle">Dr. Beaumont discovered that digestion occurs faster inside the warm, churning stomach than in a test tube.</text>
    </svg>`,
    questions: [
      {
        q: "Why are we advised to chew our food 30 to 32 times before swallowing? What change in taste occurs when plain chapati or boiled rice is chewed for a long time?",
        marks: 3,
        ans: `Chewing food 30 to 32 times breaks solid food into fine particles and thoroughly mixes it with saliva secreted by salivary glands. Saliva contains the enzyme <strong>ptyalin (amylase)</strong>, which chemically converts complex, tasteless starch molecules into simple sugars (maltose/glucose). When boiled rice or plain chapati is chewed for a prolonged period, it begins to taste noticeably <strong>sweet</strong>.`,
        rubric: [
          { key: "Physical breakdown and thorough saliva mixing", marks: "1 Mark" },
          { key: "Enzymatic conversion of starch to sugar", marks: "1 Mark" },
          { key: "Taste transformation to sweet", marks: "1 Mark" }
        ]
      },
      {
        q: "Who was Alexis St. Martin and how did Dr. William Beaumont use his medical condition to unlock the secrets of human digestion?",
        marks: 4,
        ans: `In 1822, a soldier named Alexis St. Martin was accidentally shot in the stomach. Dr. William Beaumont treated the wound, and although St. Martin recovered, the wound healed leaving an open fistula (a hole) covered by a loose flap of skin that allowed Dr. Beaumont to peer directly inside a living human stomach.
        <br><strong>Key Discoveries by Dr. Beaumont:</strong>
        <ul>
          <li>The stomach churns food vigorously to break it down.</li>
          <li>The stomach secretes acidic digestive juices.</li>
          <li>Digestion occurs significantly faster inside the warm, living stomach than when the same digestive juices are placed in a glass test tube outside the body.</li>
          <li>Mental distress or sadness slows down the digestive process.</li>
        </ul>`,
        rubric: [
          { key: "Explanation of St. Martin's stomach window condition", marks: "1.5 Marks" },
          { key: "Discovery of stomach churning and digestive juices", marks: "1.5 Marks" },
          { key: "Comparison of in-vivo vs in-vitro digestion rates", marks: "1 Mark" }
        ]
      },
      {
        q: "Why is a glucose drip given to a patient who is suffering from severe vomiting and loose motions?",
        marks: 3,
        ans: `When a person suffers from continuous vomiting and diarrhoea (loose motions), the body loses huge amounts of water, essential salts, and glucose, leading to severe dehydration and weakness. The stomach cannot retain or digest oral food. A glucose drip is administered directly into the patient's bloodstream through an intravenous (IV) line, providing <strong>instant energy and rehydration</strong> without requiring the digestive system to work.`,
        rubric: [
          { key: "Explanation of dehydration and nutrient loss from vomiting", marks: "1.5 Marks" },
          { key: "Direct IV absorption providing instant energy without digestion", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Compare the health conditions of Rashmi (3 years old, undernourished) and Kailash (7 years old, obese on junk food). What defines 'Proper Food'?",
        marks: 4,
        ans: `<ul>
          <li><strong>Rashmi (Undernutrition):</strong> Looks much younger than her age, has very thin arms and legs and a bloated pot-belly. She falls sick often because she does not get even one full meal of rice or roti a day.</li>
          <li><strong>Kailash (Malnutrition from Junk Food):</strong> He is overweight, chubby, and experiences pain in his legs. He finds it difficult to run or walk fast, prefers watching TV, and refuses home-cooked lentils, vegetables, and rice in favour of chips, burgers, and soft drinks.</li>
        </ul>
        <strong>Proper Food (Balanced Diet):</strong> Food that contains adequate quantities of all essential nutrients—carbohydrates, proteins, fats, vitamins, minerals, roughage, and clean water—tailored to support healthy growth and disease resistance.`,
        rubric: [
          { key: "Accurate contrast between undernourished vs junk food conditions", marks: "2 Marks" },
          { key: "Comprehensive definition of proper balanced diet", marks: "2 Marks" }
        ]
      }
    ],
    cbq: {
      type: "Nutritional Economics & Social Justice",
      title: "The Kalahandi Hunger Paradox",
      story: "In Kalahandi district in Odisha, plenty of rice is cultivated and sent to other states, with rich farmers making substantial profits. In the same district, however, many landless families and children die of hunger and starvation due to lack of purchasing power.",
      q: "Why does starvation persist in a region that produces surplus rice, and what government policies are designed to guarantee food security to every child?",
      ans: `<strong>Reasons for the Paradox:</strong>
      1. <em>Lack of Purchasing Power:</em> Poor tribal and agricultural labourers do not own land and earn very low daily wages, leaving them unable to buy market rice even when grain warehouses are full.
      2. <em>Grain Hoarding & Inefficient Distribution:</em> Rice is often hoarded by middlemen or exported for commercial profit rather than distributed equitably.
      
      <strong>Government Countermeasures:</strong>
      - <strong>Public Distribution System (PDS / Ration Shops):</strong> Provides subsidized food grains to below-poverty-line (BPL) families.
      - <strong>PM POSHAN (Mid-Day Meal Scheme):</strong> Guarantees at least one freshly cooked, nutritious, hot meal every school day to all primary school students.
      - <strong>Antyodaya Anna Yojana (AAY):</strong> Supplies highly subsidized rice and wheat to the poorest of the poor households.`,
      marking: "2 Marks for root cause analysis + 3 Marks for government welfare schemes = 5 Marks"
    }
  }
];

console.log(`Loaded initial ${chaptersData.length} core chapters in template.`);

// Now we define the remaining chapters 4 through 22 with complete depth!
const full22ChaptersData = [
  ...chaptersData,
  {
    num: 4,
    title: "Mangoes Round the Year",
    hindiTitle: "खाएं आम बारहों महीने",
    theme: "Food Spoilage, Food Preservation, Bread Mould Experiment & Making Mamidi Tandra",
    concepts: [
      "Difference between food spoilage (decay caused by microorganisms) and food wasting (preparing excess food and throwing it away).",
      "Factors causing food spoilage: moisture, warmth, air, bacteria, and fungal spores.",
      "Bread mould (fungus) grows visibly over 6 days when bread is kept moist in a closed box.",
      "Traditional preservation techniques: boiling, drying in sunlight, pickling with salt and mustard oil, keeping in sugar syrup (Murabba).",
      "Mamidi Tandra (Aam Papad) is prepared in Andhra Pradesh using ripe mango pulp, jaggery, and sugar, dried layer by layer under the sun over four weeks.",
      "Information on packed food labels: expiry date, manufacturing date, ingredients, net weight, and maximum retail price (MRP)."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fffbeb" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#b45309" text-anchor="middle">Traditional Food Preservation Methods</text>
      <!-- Sun Drying -->
      <rect x="30" y="45" width="105" height="90" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="82" y="75" font-size="22" text-anchor="middle">☀️</text>
      <text x="82" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">Sun-Drying</text>
      <text x="82" y="118" font-size="8.5" fill="#92400e" text-anchor="middle">Papad, Raisins</text>
      <!-- Pickling -->
      <rect x="165" y="45" width="105" height="90" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="217" y="75" font-size="22" text-anchor="middle">🫙</text>
      <text x="217" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">Oil & Salt</text>
      <text x="217" y="118" font-size="8.5" fill="#92400e" text-anchor="middle">Mango/Lime Pickle</text>
      <!-- Sweet Syrup -->
      <rect x="300" y="45" width="105" height="90" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="352" y="75" font-size="22" text-anchor="middle">🍯</text>
      <text x="352" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">Sugar Syrup</text>
      <text x="352" y="118" font-size="8.5" fill="#92400e" text-anchor="middle">Murabba, Jams</text>
      <!-- Boiling -->
      <rect x="435" y="45" width="115" height="90" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="492" y="75" font-size="22" text-anchor="middle">🔥</text>
      <text x="492" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">Boiling & Chilling</text>
      <text x="492" y="118" font-size="8.5" fill="#92400e" text-anchor="middle">Milk, Cooked Curry</text>
    </svg>`,
    questions: [
      {
        q: "How can you tell by looking, smelling, or touching whether a food item has spoiled? Describe the bread mould experiment.",
        marks: 4,
        ans: `We can detect food spoilage through several clear indicators:
        <ul>
          <li><strong>Smell:</strong> Spoiled food emits a foul, sour, or pungent odour.</li>
          <li><strong>Appearance & Colour:</strong> Greenish, white, or black fuzzy spots of fungus appear on the surface.</li>
          <li><strong>Touch & Texture:</strong> The food becomes slimy, sticky, excessively soft, or discoloured.</li>
        </ul>
        <strong>Bread Mould Experiment:</strong> Sprinkle a few drops of water on a fresh slice of bread, place it in a closed box, and observe daily for 6 days with a magnifying glass:
        Day 1: No change. Day 2: Slight moisture on surface. Day 3: Faint white cottony threads appear. Day 4: Grayish patches form. Day 5: Greenish-black fuzzy layer covers the bread. Day 6: Dense black fungal spore heads (Rhizopus mould) with a strong foul smell.`,
        rubric: [
          { key: "Listing smell, colour, and texture indicators of spoilage", marks: "1.5 Marks" },
          { key: "Detailed 6-day observation progression of bread mould", marks: "2.5 Marks" }
        ]
      },
      {
        q: "Explain step-by-step how Mamidi Tandra (Aam Papad) is prepared from ripe mangoes in Atreyapuram, Andhra Pradesh.",
        marks: 4,
        ans: `The traditional preparation of Mamidi Tandra requires four weeks of dedication and hot sunny weather:
        <ol>
          <li><strong>Extracting Pulp:</strong> Fully ripe mangoes are selected, washed, peeled, and crushed to extract sweet pulp. The pulp is strained through a fine cloth to remove fibrous strands.</li>
          <li><strong>Adding Sugar & Jaggery:</strong> Crushed jaggery and sugar in equal amounts are thoroughly stirred into the pulp until dissolved.</li>
          <li><strong>Spreading the Layer:</strong> A mat woven from palm leaves is tied onto poles in a sunny yard. A thin layer of the sweet mango pulp is spread evenly on the mat and left to dry in the blazing sun all day.</li>
          <li><strong>Building Thickness:</strong> At sunset, the mat is covered with a clean sari to keep dust off. Next day, another layer of pulp is poured over the previous layer. This process is repeated daily for 4 weeks until the golden jelly slab grows about 4 cm thick.</li>
          <li><strong>Cutting into Pieces:</strong> The solidified dried sheet is peeled off the mat and sliced into gleaming square pieces.</li>
        </ol>`,
        rubric: [
          { key: "Pulp extraction and filtration", marks: "1 Mark" },
          { key: "Addition of jaggery and sugar", marks: "1 Mark" },
          { key: "Layer-by-layer sun drying over 4 weeks", marks: "1.5 Marks" },
          { key: "Final cutting into jelly cakes", marks: "0.5 Mark" }
        ]
      },
      {
        q: "Why is it important to check the date of expiry, manufacturing date, and ingredient list before buying packaged food items from the market?",
        marks: 3,
        ans: `Checking food package labels is critical for consumer health and safety:
        <ul>
          <li><strong>Expiry Date / Best Before:</strong> Indicates the final date after which the food is no longer safe for consumption and could cause severe food poisoning.</li>
          <li><strong>Manufacturing Date:</strong> Informs the buyer how fresh the product is.</li>
          <li><strong>Ingredients:</strong> Helps buyers check for allergens (nuts, gluten, dairy), excess preservatives, artificial colours, or unhealthy sugars.</li>
          <li><strong>MRP (Maximum Retail Price):</strong> Ensures the shopkeeper does not overcharge the customer.</li>
        </ul>`,
        rubric: [
          { key: "Importance of Expiry date for preventing food poisoning", marks: "1.5 Marks" },
          { key: "Significance of manufacturing date and ingredients", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      type: "Modern Food Science vs Traditional Wisdom",
      title: "Preservation Principles: Salt, Sugar, and Oil",
      story: "Grandmother prepares raw mango pickle in large glass jars filled with mustard oil and salt, which stay fresh for two years without refrigeration. In contrast, fresh mango slices turn black and rot within three days.",
      q: "Explain the scientific principle of how heavy salt and oil prevent bacteria and fungi from spoiling pickles.",
      ans: `<strong>Scientific Mechanism of Pickling:</strong>
      1. <strong>High Salt Concentration (Osmosis):</strong> Salt draws out moisture from bacterial and fungal cells through osmosis. Without water, microorganisms cannot survive or reproduce.
      2. <strong>Oil Seal (Anaerobic Barrier):</strong> The layer of oil floating on top cuts off contact with atmospheric air and oxygen. Most spoilage bacteria and moulds require oxygen to grow; the oil layer chokes them off completely.
      3. <strong>Acidity of Raw Mangoes:</strong> Natural acids in raw mangoes create a low pH environment that naturally inhibits microbial growth.`,
      marking: "2 Marks for Osmosis principle + 2 Marks for Oil barrier + 1 Mark for Acidity = 5 Marks"
    }
  },
  {
    num: 5,
    title: "Seeds and Seeds",
    hindiTitle: "बीज, बीज, बीज",
    theme: "Seed Germination, Insectivorous Plants, Seed Dispersal Agents & George Mestral's Velcro",
    concepts: [
      "A seed contains an embryo (baby plant) and stored cotyledon food protected inside a seed coat.",
      "Three essential conditions for seed germination: moisture (water), air (oxygen), and warmth (favourable temperature).",
      "Pitcher Plant (Nepenthes) grows in Meghalaya and traps insects, frogs, and mice to absorb nitrogen in poor soil.",
      "Seed dispersal mechanisms: Wind (light hairy seeds), Water (spongy buoyant seeds like coconut), Animals (hooked seeds that cling to fur), and Pod Explosion (balsam, pea).",
      "George Mestral discovered Velcro in 1948 after observing burdock seeds clinging firmly to his dog's fur with microscopic hooks.",
      "Global journey of crops: Chilli, potato, and tomato came from South America; Coffee and bhindi from Africa; Cabbage and peas from Europe."
    ],
    svg: `<svg viewBox="0 0 580 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdf4" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">Four Modes of Seed Dispersal in Nature</text>
      <!-- Wind -->
      <circle cx="80" cy="85" r="35" fill="#ffffff" stroke="#22c55e" stroke-width="2"/>
      <text x="80" y="82" font-size="20" text-anchor="middle">💨</text>
      <text x="80" y="100" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534" text-anchor="middle">By Wind</text>
      <text x="80" y="135" font-size="8.5" fill="#15803d" text-anchor="middle">Dandelion, Maple</text>
      <!-- Water -->
      <circle cx="220" cy="85" r="35" fill="#ffffff" stroke="#0ea5e9" stroke-width="2"/>
      <text x="220" y="82" font-size="20" text-anchor="middle">🌊</text>
      <text x="220" y="100" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#0369a1" text-anchor="middle">By Water</text>
      <text x="220" y="135" font-size="8.5" fill="#0284c7" text-anchor="middle">Lotus, Coconut</text>
      <!-- Animals -->
      <circle cx="360" cy="85" r="35" fill="#ffffff" stroke="#eab308" stroke-width="2"/>
      <text x="360" y="82" font-size="20" text-anchor="middle">🐕</text>
      <text x="360" y="100" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#a16207" text-anchor="middle">By Animals</text>
      <text x="360" y="135" font-size="8.5" fill="#ca8a04" text-anchor="middle">Xanthium, Burdock</text>
      <!-- Explosion -->
      <circle cx="500" cy="85" r="35" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
      <text x="500" y="82" font-size="20" text-anchor="middle">💥</text>
      <text x="500" y="100" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#991b1b" text-anchor="middle">By Bursting</text>
      <text x="500" y="135" font-size="8.5" fill="#dc2626" text-anchor="middle">Pea, Balsam Pods</text>
    </svg>`,
    questions: [
      {
        q: "Describe an experiment to prove that seeds need both air and water to germinate. What happens if a seed receives only water but no air?",
        marks: 4,
        ans: `<strong>Three-Bowl Chana Experiment:</strong>
        <ul>
          <li><strong>Bowl 1 (Water only, No Air):</strong> Place 5 chana seeds completely submerged in water. Result: Seeds swell up but do NOT sprout because they lack oxygen.</li>
          <li><strong>Bowl 2 (Both Air and Water):</strong> Wrap 5 chana seeds in a damp cotton cloth and keep moist. Result: Seeds sprout healthy white radicles (roots) within 2 days because they receive both moisture and atmospheric oxygen.</li>
          <li><strong>Bowl 3 (Air only, No Water):</strong> Keep 5 dry chana seeds in an empty bowl. Result: No sprouting occurs because moisture is absent.</li>
        </ul>
        <em>Conclusion:</em> Seeds require both moisture to soften their coat and air for cellular respiration to germinate successfully.`,
        rubric: [
          { key: "Detailed description of Bowl 1, Bowl 2, and Bowl 3 conditions", marks: "3 Marks" },
          { key: "Scientific conclusion on dual necessity of air and moisture", marks: "1 Mark" }
        ]
      },
      {
        q: "What is an insectivorous plant? How does the Pitcher Plant (Nepenthes) trap insects, and why does it eat them even though it is green?",
        marks: 4,
        ans: `An insectivorous plant is a green carnivorous plant that traps and digests small insects and animals. 
        <br><strong>Pitcher Plant (Nepenthes) of Meghalaya:</strong>
        <ul>
          <li>Its leaf blade is modified into a hollow pitcher-like flask covered with a leaf lid.</li>
          <li>The mouth of the pitcher secretes sweet-smelling nectar that attracts flying insects.</li>
          <li>The inner walls are slippery. When an insect lands on the rim, it slips and falls into the digestive liquid at the bottom. The lid snaps shut, trapping the prey.</li>
          <li><strong>Why it eats insects:</strong> Although Nepenthes has chlorophyll and performs photosynthesis to make carbohydrates, it grows in nitrogen-deficient, swampy acidic soil. It digests insects to fulfill its essential nitrogen and protein requirements.</li>
        </ul>`,
        rubric: [
          { key: "Definition and geographic habitat in Meghalaya", marks: "1 Mark" },
          { key: "Trap mechanism (scent, slippery rim, lid)", marks: "1.5 Marks" },
          { key: "Reason for insectivory (nitrogen deficiency in soil)", marks: "1.5 Marks" }
        ]
      },
      {
        q: "How did George Mestral get the idea to invent Velcro in 1948? Give three practical everyday uses of Velcro.",
        marks: 3,
        ans: `In 1948, Swiss engineer George Mestral went on a nature walk with his dog. Upon returning, he noticed hundreds of spiky burdock seeds (burrs) stuck firmly to his clothes and his dog's coat. Examining a seed under a microscope, he observed thousands of tiny hooks that clung to the loops of fabric. Inspired by this nature design, he invented <strong>Velcro</strong> with one side made of tiny hooks and the other side of soft loops.
        <br><strong>Everyday uses:</strong> Sneakers/shoes, school bags, watch straps, jacket fasteners, blood pressure monitor cuffs.`,
        rubric: [
          { key: "Microscopic observation of burdock seeds with hooks", marks: "1.5 Marks" },
          { key: "Three everyday applications of Velcro", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      type: "Historical Botany & Trade Routes",
      title: "How Chillies Conquered Indian Kitchens",
      story: "Today, spicy chillies are an indispensable ingredient in every Indian kitchen. Yet, five hundred years ago, neither chillies, potatoes, nor tomatoes existed in India.",
      q: "From where did chillies come to India, who brought them, and name two other vegetables that originated in Africa.",
      ans: `<strong>Origin of Chillies:</strong>
      Chillies originated in <strong>South America</strong>. They were brought to India by <strong>Portuguese traders</strong> who sailed via trade routes from South America to the Malabar coast of India during the late 15th and early 16th centuries.
      
      <strong>Other Global Crops:</strong>
      - <em>From Africa:</em> Coffee beans and Bhindi (Lady's Finger / Okra).
      - <em>From South America:</em> Potatoes and Tomatoes.
      - <em>From Europe:</em> Cabbage and Green Peas.`,
      marking: "2 Marks for South America & Portuguese traders + 3 Marks for other global crop origins = 5 Marks"
    }
  }
];

// Helper to assemble full chapters 6 to 22
const remainingChaptersData = [
  {
    num: 6,
    title: "Every Drop Counts",
    hindiTitle: "बूंद-बूंद, दरिया-दरिया",
    theme: "Ghadsisar Lake, Stepwells (Baoli), Rainwater Harvesting (Tanka), Al-Biruni's Account & Water Conservation",
    concepts: [
      "King Ghadsi of Jaisalmer built the famous Ghadsisar lake 650 years ago, connecting nine lakes that stored rainwater without wasting a single drop.",
      "Traditional rainwater harvesting: rain falling on sloping roofs flows through pipes into an underground covered tank called a Tanka.",
      "Stepwells (Bawari / Baoli) feature deep stone steps descending to the water level, allowing travellers and communities to access fresh water.",
      "Al-Biruni, a traveller from Uzbekistan, praised Indian water engineering, recording how massive stones and iron rods joined to form raised platforms (chabutras) around lakes.",
      "In modern times, multi-storey buildings and paved asphalt have prevented rain from seeping into the ground, causing groundwater tables to drop drastically."
    ],
    svg: `<svg viewBox="0 0 580 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0fdfa" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f766e" text-anchor="middle">Rooftop Rainwater Harvesting (Tanka) System</text>
      <!-- House -->
      <polygon points="120,40 60,75 180,75" fill="#f87171" stroke="#b91c1c" stroke-width="2"/>
      <rect x="75" y="75" width="90" height="50" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <!-- Pipe -->
      <path d="M 165,70 L 220,70 L 220,110 L 280,110" fill="none" stroke="#0284c7" stroke-width="3"/>
      <!-- Underground Tanka -->
      <rect x="280" y="80" width="120" height="55" rx="6" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
      <text x="340" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Underground Tanka</text>
      <text x="340" y="122" font-size="8.5" fill="#0284c7" text-anchor="middle">Filtered clean rainwater</text>
    </svg>`,
    questions: [
      {
        q: "Describe the architectural brilliance of King Ghadsi's Ghadsisar lake in Jaisalmer. How did the nine interconnected lakes prevent water wastage?",
        marks: 4,
        ans: `Ghadsisar lake in Jaisalmer was built 650 years ago by King Ghadsi with the help of his people:
        <ul>
          <li>Around the lake were ghats with stone steps, decorated verandas, large halls, and pavilions for festivals and music.</li>
          <li><strong>Interconnected 9-Lake System:</strong> The lake was engineered so that when Ghadsisar filled up to its brim with rainwater, the excess water flowed out into another lake at a lower level. When that filled, water overflowed into a third lake, continuing across all <strong>nine interconnected lakes</strong>.</li>
          <li>Rainwater collected in this system served the desert city throughout the year without letting a single drop go to waste.</li>
        </ul>`,
        rubric: [
          { key: "Description of ghats and community pavilions", marks: "1 Mark" },
          { key: "Detailed explanation of 9 cascading interconnected lakes", marks: "2 Marks" },
          { key: "Significance for year-round desert water security", marks: "1 Mark" }
        ]
      },
      {
        q: "What is a Bawari (Stepwell)? How did stepwells differ from traditional bucket wells?",
        marks: 3,
        ans: `A <strong>Bawari (Stepwell)</strong> is a deep multi-storey stone reservoir with beautiful flights of stone steps leading down directly to the water level. 
        <br><strong>Difference from ordinary wells:</strong> In an ordinary well, people pull water up from above using a rope and bucket. In a stepwell, the people themselves walk down the flights of stairs to reach the water. Stepwells served as community cooling pavilions, rest stops for travelling caravans, and social gathering centres.`,
        rubric: [
          { key: "Definition of a Bawari with descending stone steps", marks: "1.5 Marks" },
          { key: "Distinction from bucket wells & community cooling role", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Explain the rooftop rainwater harvesting system (Tanka) used in the dry desert areas of Rajasthan.",
        marks: 3,
        ans: `In arid regions of Rajasthan, houses are constructed with sloping roofs. Rainwater falling on the clean rooftop flows through a drain pipe down into an underground stone-and-lime chamber called a <strong>Tanka</strong> constructed in the courtyard. A wire mesh strainer at the pipe mouth filters out leaves and dirt. The tanka is kept covered with a lid to keep the stored water cool and pure for drinking all year.`,
        rubric: [
          { key: "Sloping roof and drainage pipe mechanism", marks: "1.5 Marks" },
          { key: "Underground Tanka construction and filtration sieve", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      type: "Historical Engineering & Modern Urban Planning",
      title: "Al-Biruni's Observations on Indian Hydraulic Systems",
      story: "More than a thousand years ago, Central Asian scholar Al-Biruni arrived in India and was astonished by the pond-building skills of the Indian people. He wrote that his countrymen would be amazed to see such colossal masonry.",
      q: "What specific features of Indian ponds and reservoirs impressed Al-Biruni, and why are modern concrete cities facing severe floods and water shortages simultaneously?",
      ans: `<strong>Al-Biruni's Praise:</strong>
      He admired how Indian builders joined giant stone blocks with iron clamps to construct terraced chabutras (raised platforms) and separate ascending and descending staircases so people would never collide with each other.
      
      <strong>Modern Urban Crisis:</strong>
      Modern cities pave soil with asphalt and concrete. Rain cannot seep into the ground to recharge aquifers, causing storm water to cause flash floods while borewells run completely dry.`,
      marking: "2 Marks for Al-Biruni's notes + 3 Marks for modern urban runoff analysis = 5 Marks"
    }
  },
  {
    num: 7,
    title: "Experiments with Water",
    hindiTitle: "पानी के प्रयोग",
    theme: "Floating & Sinking, Buoyancy & Density, Dead Sea Salinity & Mahatma Gandhi's Dandi March",
    concepts: [
      "Whether an object floats or sinks in water depends on its density and buoyant force (upward thrust of water).",
      "An iron nail sinks because it is small and dense, while an enormous steel ship floats because its hollow shape displaces a weight of water equal to its own weight.",
      "The Dead Sea is the saltiest water body on Earth (~300 grams of salt per litre). Its density is so high that a human body naturally floats on its surface without drowning.",
      "Solubility: Substances like salt and sugar dissolve completely in water; chalk, oil, and sand do not dissolve.",
      "Mahatma Gandhi led the historic Dandi March in 1930 from Ahmedabad to Dandi seashore to protest against the British tax on natural salt."
    ],
    svg: `<svg viewBox="0 0 580 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#eff6ff" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">Floating vs Sinking & The Dead Sea Phenomenon</text>
      <!-- Beaker 1: Iron nail -->
      <rect x="70" y="45" width="80" height="85" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <circle cx="110" cy="115" r="5" fill="#475569"/>
      <text x="110" y="142" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Iron Nail Sinks</text>
      <!-- Beaker 2: Steel Bowl -->
      <rect x="200" y="45" width="80" height="85" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <path d="M 215,65 Q 240,90 265,65 Z" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
      <text x="240" y="142" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Katori Floats</text>
      <!-- Beaker 3: Dead Sea Egg -->
      <rect x="330" y="45" width="80" height="85" rx="4" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
      <ellipse cx="370" cy="65" rx="10" ry="14" fill="#fed7aa" stroke="#ea580c"/>
      <text x="370" y="142" font-size="9" font-weight="700" fill="#1e40af" text-anchor="middle">Saline Water (Egg Floats)</text>
      <!-- Dandi March -->
      <rect x="440" y="45" width="115" height="85" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="497" y="70" font-size="20" text-anchor="middle">🚶‍♂️</text>
      <text x="497" y="92" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">Dandi March 1930</text>
      <text x="497" y="110" font-size="8.5" fill="#b45309" text-anchor="middle">Salt is natural gift</text>
    </svg>`,
    questions: [
      {
        q: "Why does a small iron nail sink in water, while a giant ship made of iron and steel floats easily on the sea?",
        marks: 3,
        ans: `An iron nail is solid and dense; the weight of water it displaces is smaller than its own weight, causing it to sink. In contrast, an enormous iron ship is designed with a wide, hollow hull filled with air. The total volume of the ship displaces an amount of water whose buoyant force is greater than the total weight of the ship, allowing it to float safely.`,
        rubric: [
          { key: "Solid nail displaces less water than its weight", marks: "1.5 Marks" },
          { key: "Hollow ship hull displaces massive volume equal to ship weight", marks: "1.5 Marks" }
        ]
      },
      {
        q: "What is the Dead Sea? Why is it impossible for a swimmer to drown in the Dead Sea?",
        marks: 3,
        ans: `The Dead Sea is a salt lake bordered by Jordan and Israel. It is the saltiest body of water on Earth, containing approximately <strong>300 grams of dissolved salt per litre</strong> of water. Because of this extreme salt concentration, the density of the water is much higher than the density of the human body. As a result, an upward buoyant force naturally pushes a swimmer up, allowing a person to float effortlessly on the surface like a raft.`,
        rubric: [
          { key: "Salinity level (300 grams of salt per litre)", marks: "1.5 Marks" },
          { key: "Water density higher than human body providing automatic buoyancy", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Why did Mahatma Gandhi organize the Dandi March in 1930? What was the outcome of this protest?",
        marks: 4,
        ans: `In 1930, the British colonial government passed the Salt Act, prohibiting Indians from manufacturing salt from seawater and placing a heavy tax on salt. Since salt is an essential daily food requirement for everyone, rich and poor alike, Mahatma Gandhi organized the <strong>Dandi March</strong>:
        <ul>
          <li>Gandhi and his followers walked over 385 kilometres on foot from Sabarmati Ashram in Ahmedabad to the coastal village of Dandi.</li>
          <li>On 6 April 1930, Gandhi picked up a handful of natural salt from the seashore, boldly defying the British law.</li>
          <li>The march triggered the nationwide Civil Disobedience Movement, demonstrating that natural resources given by nature should never be taxed.</li>
        </ul>`,
        rubric: [
          { key: "Background of the unjust British Salt Act and tax", marks: "1.5 Marks" },
          { key: "March from Sabarmati to Dandi (385 km)", marks: "1.5 Marks" },
          { key: "Breaking of law and initiation of Civil Disobedience", marks: "1 Mark" }
        ]
      }
    ],
    cbq: {
      type: "Scientific Inquiry & Solubility",
      title: "Factors Affecting the Rate of Dissolution",
      story: "While preparing lemonade for guests on a hot summer afternoon, Rohit added ice cubes before adding sugar and noticed the sugar took a very long time to dissolve.",
      q: "Explain three scientific methods by which sugar can be made to dissolve much faster in water.",
      ans: `<strong>Three Methods to Accelerate Dissolution:</strong>
      1. <strong>Stirring:</strong> Stirring moves water molecules rapidly across sugar crystals, exposing fresh solvent molecules to solute surfaces.
      2. <strong>Using Warm Water:</strong> Warm water molecules possess higher kinetic energy, separating sugar molecules much faster than cold water. (Add ice only AFTER sugar dissolves).
      3. <strong>Using Powdered Sugar:</strong> Fine powder has a vastly greater surface area than large crystal cubes, speeding up dissolution.`,
      marking: "1 Mark for Stirring + 2 Marks for Warm water kinetic energy + 2 Marks for Powdered surface area = 5 Marks"
    }
  },
  {
    num: 8,
    title: "A Treat for Mosquitoes",
    hindiTitle: "मच्छरों की दावत?",
    theme: "Malaria, Anopheles Mosquito, Anaemia & Iron, Ronald Ross Discovery & Vector Control",
    concepts: [
      "Malaria is caused by a tiny single-celled protozoan parasite (Plasmodium) transmitted through the bite of a female Anopheles mosquito.",
      "Malaria causes shivering, chills, high recurring fever, sweating, and severe headache; it is confirmed through a microscopic blood smear test.",
      "Anaemia is a condition where haemoglobin or iron levels in the blood fall below the normal range (12 to 16 g/dL in children), causing weakness, poor physical growth, and difficulty concentrating.",
      "Iron-rich foods: Amla (Indian gooseberry), Jaggery (gur), green leafy vegetables (spinach, methi), and beans.",
      "Ronald Ross discovered in Secunderabad that mosquitoes spread malaria, winning the Nobel Prize in Medicine in 1902.",
      "Mosquito control: Pour kerosene/oil on standing water to choke larvae, introduce Gambusia fish in ponds, and keep water coolers dry."
    ],
    svg: `<svg viewBox="0 0 580 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fef2f2" rx="12"/>
      <text x="290" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#991b1b" text-anchor="middle">Mosquito Life Cycle & Transmission Prevention</text>
      <!-- Stages -->
      <circle cx="80" cy="80" r="28" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="80" y="75" font-size="16" text-anchor="middle">🥚</text>
      <text x="80" y="93" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">1. Eggs</text>
      <circle cx="200" cy="80" r="28" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="200" y="75" font-size="16" text-anchor="middle">🐛</text>
      <text x="200" y="93" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">2. Larvae</text>
      <circle cx="320" cy="80" r="28" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="320" y="75" font-size="16" text-anchor="middle">🫧</text>
      <text x="320" y="93" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">3. Pupa</text>
      <circle cx="440" cy="80" r="28" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="440" y="75" font-size="16" text-anchor="middle">🦟</text>
      <text x="440" y="93" font-size="9" font-weight="700" fill="#991b1b" text-anchor="middle">4. Mosquito</text>
      <text x="290" y="136" font-size="9.5" fill="#7f1d1d" text-anchor="middle">Oil on water creates a thin surface film that blocks the breathing tubes of larvae, terminating reproduction.</text>
    </svg>`,
    questions: [
      {
        q: "What causes malaria, which mosquito transmits it, and what symptoms appear in a patient suffering from malaria?",
        marks: 3,
        ans: `Malaria is caused by a microscopic protozoan parasite called <em>Plasmodium</em>, transmitted from one person to another through the bite of an infected <strong>female Anopheles mosquito</strong> (identifiable by its spotted wings and tilted posture while resting).
        <br><strong>Symptoms:</strong> Shivering with chills, recurring high fever every alternative day, severe headache, muscle pains, nausea, and profuse sweating when fever drops.`,
        rubric: [
          { key: "Causative agent (Plasmodium parasite)", marks: "1 Mark" },
          { key: "Vector identification (female Anopheles mosquito)", marks: "1 Mark" },
          { key: "Key symptoms (chills, recurring fever, sweating)", marks: "1 Mark" }
        ]
      },
      {
        q: "What is anaemia? What is the normal haemoglobin level for growing school children, and what dietary changes cure anaemia?",
        marks: 4,
        ans: `<strong>Anaemia</strong> is a blood condition that occurs when the amount of haemoglobin or red blood cells in the body drops below the healthy threshold.
        <ul>
          <li><strong>Normal Haemoglobin Range:</strong> 12 to 16 grams per decilitre (g/dL) for children.</li>
          <li><strong>Effects:</strong> Weakness, dizziness, stunted physical growth, and reduced stamina and concentration during studies.</li>
          <li><strong>Dietary Cure:</strong> Foods rich in iron and Vitamin C—such as <strong>Amla (Indian gooseberry), Jaggery (gur), green leafy vegetables (spinach, fenugreek), beetroot, and pulses</strong>, along with iron folic acid tablets distributed in schools.</li>
        </ul>`,
        rubric: [
          { key: "Definition of anaemia as haemoglobin deficiency", marks: "1 Mark" },
          { key: "Normal range 12-16 g/dL & cognitive/physical impacts", marks: "1.5 Marks" },
          { key: "Dietary sources (amla, jaggery, spinach, iron tablets)", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Describe the historic discovery made by Ronald Ross regarding malaria in Secunderabad.",
        marks: 3,
        ans: `In the late 19th century, people believed malaria was caused by bad air from swampy marshes (mala-aria = bad air). British doctor <strong>Ronald Ross</strong> spent years in Secunderabad inspecting blood slides under microscopes. He let mosquitoes bite malaria patients, dissected the mosquitoes' stomachs, and discovered the exact same Plasmodium parasites inside the mosquito gut. This proved conclusively that mosquitoes transmit malaria, earning him the Nobel Prize in Medicine in 1902.`,
        rubric: [
          { key: "Disproving the 'bad air' myth through dissection", marks: "1.5 Marks" },
          { key: "Verification of parasites in mosquito stomach & 1902 Nobel Prize", marks: "1.5 Marks" }
        ]
      }
    ],
    cbq: {
      type: "Public Health Vector Management",
      title: "Preventing Dengue, Malaria, and Chikungunya",
      story: "During the rainy season, stagnant water collected in old car tires, broken flowerpots, and cooler trays in a residential colony. Within two weeks, multiple residents fell sick with dengue and malaria.",
      q: "Explain four practical actions community residents must take to prevent mosquito breeding around their homes.",
      ans: `<strong>Four Essential Vector Control Actions:</strong>
      1. <em>Eliminate Stagnant Water:</em> Empty, scrub, and dry out water coolers, flowerpot trays, buckets, and bird baths every week.
      2. <em>Cover Water Storage:</em> Keep overhead and underground water storage tanks tightly sealed with lids.
      3. <em>Use Oil or Kerosene Film:</em> If water cannot be drained from a pit or puddle, pour a few drops of kerosene or oil on top; this creates a thin film that stops mosquito larvae from breathing air.
      4. <em>Biological Control (Gambusia fish):</em> Put small Gambusia fish into local decorative ponds and ditches; they voraciously consume mosquito larvae.`,
      marking: "1 Mark each for 4 preventive actions + 1 Mark for biological control explanation = 5 Marks"
    }
  }
];

console.log("Compiled all chapters through Chapter 8.");

// We will construct the complete array of 22 chapters programmatically or with clean data blocks
// Let's verify how many chapters are defined and build the complete array of all 22 chapters!
const all22Chapters = [
  ...full22ChaptersData,
  ...remainingChaptersData,
  // Chapters 9 to 22:
  {
    num: 9,
    title: "Up You Go!",
    hindiTitle: "डायरी: कमर सीधी, ऊपर चढ़ो!",
    theme: "Mountaineering at NIM Uttarkashi, Group Leader Duties, Bachendri Pal & Mountain Equipment",
    concepts: [
      "Nehru Institute of Mountaineering (NIM) in Uttarkashi trains mountaineers in rock climbing and survival under leader Brigadier Gyan Singh.",
      "Responsibilities of a group leader: help others carry luggage, let the group go ahead and walk at the back, find good camping spots, and care for sick members.",
      "Mountaineering tools: pitons (metal spikes), carabiners (metal clips), ropes, ice axes, crampons, and rucksacks.",
      "Bachendri Pal became the first Indian woman (and 5th in the world) to climb Mount Everest (Sagarmatha) on 23 May 1984."
    ],
    questions: [
      {
        q: "What are the key responsibilities of a group leader in a mountaineering expedition?",
        marks: 3,
        ans: `A group leader has several critical responsibilities:
        <ul>
          <li>Help group members carry their heavy rucksacks if they are struggling.</li>
          <li>Let the entire team go ahead and walk last to ensure nobody is left behind.</li>
          <li>Look for suitable places to rest and pitch tents.</li>
          <li>Take care of anyone who falls sick and keep team spirits high even when tired.</li>
        </ul>`,
        rubric: [
          { key: "Assisting team members and walking last", marks: "1.5 Marks" },
          { key: "Camping site selection and caring for sick members", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Who is Bachendri Pal? Describe her historic climb to Mount Everest on 23 May 1984.",
        marks: 4,
        ans: `<strong>Bachendri Pal</strong> was born in Nakuri village, Garhwal (Uttarakhand). She trained at the Nehru Institute of Mountaineering and was selected for the 1984 Everest expedition:
        <ul>
          <li>On the night of 15 May, an avalanche buried her camp in snow; she was rescued by teammates.</li>
          <li>On <strong>23 May 1984 at 1:07 PM</strong>, Bachendri stepped onto the 8,848-metre-high summit of Mount Everest (known as <em>Sagarmatha</em> in Nepal).</li>
          <li>She spent 43 minutes on the summit, planted the Indian National Tricolour flag, and bowed in prayer, becoming the <strong>first Indian woman</strong> to conquer Everest.</li>
        </ul>`,
        rubric: [
          { key: "Background and avalanche survival", marks: "1.5 Marks" },
          { key: "Summit timestamp (23 May 1984) and national flag hoisting", marks: "1.5 Marks" },
          { key: "First Indian woman milestone achievement", marks: "1 Mark" }
        ]
      }
    ]
  },
  {
    num: 10,
    title: "Walls Tell Stories",
    hindiTitle: "बोलती इमारतें",
    theme: "Golconda Fort, Bastions, Water Engineering, Cannons & Museum Artefacts",
    concepts: [
      "Golconda Fort in Hyderabad has huge thick stone walls, bastions (burj) for 360-degree surveillance, and double heavy iron gates with sharp spikes.",
      "Acoustics: Faint whispers at the main entrance (Fateh Darwaza) could be heard clearly up at the royal palace (Bala Hissar).",
      "Cannons used bronze and iron gunpowder balls; Mughal Emperor Aurangzeb besieged Golconda for 8 months in 1687.",
      "Water was lifted to high fortress gardens using clay pipes and bullock-powered Persian wheel mechanisms."
    ],
    questions: [
      {
        q: "What were bastions (burj) in Golconda Fort and why were big holes made in them?",
        marks: 3,
        ans: `Bastions (burj) are circular towers built into the outer boundary walls of the fort, constructed much higher than the wall itself. 
        <br><strong>Purpose of holes:</strong> Soldiers peeped through small openings to scan for approaching enemy armies from all directions. The holes protected the soldiers while providing a wide vantage angle to aim guns and cannons safely.`,
        rubric: [
          { key: "Definition of bastions as elevated round towers", marks: "1.5 Marks" },
          { key: "Strategic vantage for shooting weapons safely", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Why did Aurangzeb's massive army fail to enter Golconda Fort for eight months in 1687?",
        marks: 3,
        ans: `Aurangzeb's army could not breach Golconda Fort because:
        <ul>
          <li>The walls were exceptionally thick and built on steep granite bedrock.</li>
          <li>A deep, wide water-filled moat surrounded the fortress walls. If soldiers tried to cross, they were easily targeted from bastions.</li>
          <li>Heavy iron gates had sharp defensive spikes preventing war elephants from ramming them open.</li>
        </ul>`,
        rubric: [
          { key: "Thick walls and steep terrain", marks: "1 Mark" },
          { key: "Deep surrounding moat", marks: "1 Mark" },
          { key: "Spiked iron gates preventing elephant entry", marks: "1 Mark" }
        ]
      }
    ]
  },
  {
    num: 11,
    title: "Sunita in Space",
    hindiTitle: "सुनीता अंतरिक्ष में",
    theme: "Space Travel, Zero Gravity, Earth from Space, Neil Armstrong & Moon Phases",
    concepts: [
      "Astronaut Sunita Williams spent over 6 months aboard the International Space Station (ISS).",
      "In space, there is microgravity (weightlessness): astronauts float everywhere, water forms floating bubbles, food floats, and hair stands upright.",
      "Seen from space, Earth looks like a glowing blue-and-white marble; national borders do not exist in nature, only land, oceans, and clouds.",
      "Neil Armstrong became the first human to walk on the Moon on 20 July 1969.",
      "Gravity is the invisible force with which the Earth pulls everything towards its center."
    ],
    questions: [
      {
        q: "Describe what living in a zero-gravity spacecraft is like based on Sunita Williams' experiences.",
        marks: 4,
        ans: `Living in zero gravity is very different from living on Earth:
        <ol>
          <li><strong>Floating constantly:</strong> Astronauts cannot stand or walk on the floor; they float from one cabin to another and must strap themselves to their beds to sleep.</li>
          <li><strong>Floating Water & Food:</strong> Water does not flow; it forms floating blobs that astronauts catch with tissues to wipe their faces. Food packets float in the cabin.</li>
          <li><strong>Hair Stands Up:</strong> Without gravity pulling it down, hair stays standing upright all the time, eliminating the need for combs.</li>
        </ol>`,
        rubric: [
          { key: "Continuous floating and bed straps", marks: "1.5 Marks" },
          { key: "Floating water droplets and food packets", marks: "1.5 Marks" },
          { key: "Upright hair phenomenon", marks: "1 Mark" }
        ]
      },
      {
        q: "Why did Sunita Williams say: 'Division of countries is only on paper, Earth has no lines drawn on it'?",
        marks: 3,
        ans: `When looking down at Earth from space, one can only see continents, vast blue oceans, mountain ranges, and white swirl clouds. There are no lines, walls, or fences separating India, Pakistan, or America. Sunita pointed out that political borders are artificial divisions created in human minds and drawn on paper maps, whereas Earth is one interconnected home for all humanity.`,
        rubric: [
          { key: "Natural features visible from orbit vs absence of physical borders", marks: "1.5 Marks" },
          { key: "Philosophical concept of one united global planet", marks: "1.5 Marks" }
        ]
      }
    ]
  },
  {
    num: 12,
    title: "What if it Finishes...?",
    hindiTitle: "खत्म हो जाए तो...?",
    theme: "Fossil Fuels, Petroleum Refining, Vehicle Pollution & Renewable Energy",
    concepts: [
      "Petroleum (crude oil) is a smelly, thick, dark liquid formed over millions of years from dead marine organisms buried under intense heat and pressure.",
      "Crude oil is refined into petrol, diesel, kerosene, LPG (cooking gas), CNG, bitumen (asphalt for roads), and wax.",
      "Fossil fuels are non-renewable; once depleted, they cannot be created quickly.",
      "Vehicular smoke releases dangerous pollutants like carbon monoxide and soot particles, causing asthma and lung diseases.",
      "Alternative renewable energy: solar energy, wind power, and battery-electric vehicles."
    ],
    questions: [
      {
        q: "How was petroleum formed beneath the Earth? Why is it classified as a non-renewable natural resource?",
        marks: 3,
        ans: `Petroleum was formed millions of years ago when tiny dead sea creatures and plants settled on the ocean floor and were buried under layers of sand and clay. Due to high pressure, extreme temperature, and absence of air over millions of years, the organic matter slowly transformed into crude oil.
        <br>It is <strong>non-renewable</strong> because human consumption is depleting existing reserves in decades, while nature requires millions of years to generate more.`,
        rubric: [
          { key: "Biological formation over millions of years under heat/pressure", marks: "1.5 Marks" },
          { key: "Non-renewable nature due to rapid depletion vs slow geological formation", marks: "1.5 Marks" }
        ]
      },
      {
        q: "List four simple habits we can adopt to save petrol and diesel in everyday life.",
        marks: 3,
        ans: `Four fuel-saving habits:
        <ol>
          <li>Switch off the vehicle engine at traffic red lights and railway crossings.</li>
          <li>Use public transport (metro, buses, shared vans) instead of driving private cars.</li>
          <li>Walk or ride a bicycle for short-distance local errands.</li>
          <li>Carpool with friends or colleagues and maintain correct tire pressure in vehicles.</li>
        </ol>`,
        rubric: [
          { key: "Engine switch-off at signals & public transit use", marks: "1.5 Marks" },
          { key: "Bicycles/walking & carpooling practices", marks: "1.5 Marks" }
        ]
      }
    ]
  },
  {
    num: 13,
    title: "A Shelter so High!",
    hindiTitle: "बसेरा ऊंचाई पर",
    theme: "Gaurav Jani's Journey, Leh Cold Desert, Changpas, Pashmina Shawls & Houseboats",
    concepts: [
      "Gaurav Jani travelled on his motorcycle 'Loner' from Mumbai through Delhi and Kashmir up to Ladakh.",
      "Ladakh is known as a 'Cold Desert': it sits at high altitude, receives very little rainfall, and has snow-covered peaks and barren slopes.",
      "Houses in Leh: two-storey structures with thick stone walls coated with mud and lime; ground floor has no windows and houses animals and firewood in winter; flat wooden roofs dry vegetables.",
      "Changpa tribe lives at 5,000 metres on the Changthang plateau with special Changthangi goats that yield ultra-fine Pashmina wool.",
      "Pashmina shawl: hair is 6 times thinner than human hair; hand-weaving one shawl takes 250 hours and is warm as 6 woollen sweaters.",
      "Rebo: cone-shaped yak-hair tents of the Changpas; Donga and Shikara: wooden houseboats in Dal Lake, Srinagar."
    ],
    questions: [
      {
        q: "Why is Ladakh called a 'Cold Desert'? Describe the distinctive architectural features of traditional homes in Leh.",
        marks: 4,
        ans: `Ladakh is called a <strong>Cold Desert</strong> because it is situated at a high altitude of over 3,000 metres where rainfall is scarce (rain shadow of the Himalayas), winter temperatures plummet far below freezing, and the landscape consists of barren windswept mountains with minimal vegetation.
        <br><strong>Features of Leh Houses:</strong>
        <ul>
          <li>Built with thick stone walls plastered with mud and lime to insulate against severe cold.</li>
          <li>Two storeys: the ground floor has no windows and is used to house livestock and store dry rations during freezing winters. The family lives on the first floor.</li>
          <li>Flat roofs made of sturdy tree trunks are used to sun-dry red chillies, apricots, and corn for winter food reserves.</li>
        </ul>`,
        rubric: [
          { key: "Explanation of cold desert geography and high altitude", marks: "1.5 Marks" },
          { key: "Stone walls and ground floor without windows for livestock", marks: "1.5 Marks" },
          { key: "Flat roofs utilized for drying winter rations", marks: "1 Mark" }
        ]
      },
      {
        q: "Who are the Changpas? Why are their Changthangi goats so special, and how are Pashmina shawls made?",
        marks: 4,
        ans: `The <strong>Changpas</strong> are a nomadic tribe living on the high, frigid Changthang plateau at 5,000 metres in Ladakh.
        <ul>
          <li><strong>Changthangi Goats:</strong> The colder and higher the altitude, the softer and warmer the fur these goats grow. In sub-zero temperatures (-40°C), they develop an undercoat of ultra-fine hair, so fine that six goat hairs equal the thickness of a single human hair.</li>
          <li><strong>Pashmina Weaving:</strong> Because the hair is too fine for machines, skilled artisans in Kashmir weave it by hand on traditional looms. Weaving a single plain Pashmina shawl requires <strong>250 hours of labour</strong>, producing a garment as warm as six woollen sweaters yet light enough to pass through a finger ring.</li>
        </ul>`,
        rubric: [
          { key: "Identification of Changpa nomadic tribe and high-altitude habitat", marks: "1 Mark" },
          { key: "Ultra-fine goat fur characteristics (6x thinner than human hair)", marks: "1.5 Marks" },
          { key: "Hand-weaving in Kashmir taking 250 hours per shawl", marks: "1.5 Marks" }
        ]
      }
    ]
  },
  {
    num: 14,
    title: "When the Earth Shook!",
    hindiTitle: "जब धरती कांपी",
    theme: "2001 Gujarat Earthquake, Bhuj Disaster, Earthquake Safety Drills & Resilient Architecture",
    concepts: [
      "On 26 January 2001, a massive earthquake struck Kutch and Bhuj in Gujarat, causing widespread collapse of buildings and loss of life.",
      "Earthquakes are caused by sudden slipping and movement of tectonic plates deep inside the Earth's crust.",
      "Emergency safety rule: Drop, Cover, and Hold on under a sturdy table, and move to open spaces away from tall structures and power lines.",
      "Earthquake-resilient local homes are built using lightweight timber frames, clay, cow dung, and woven bamboo that sway without collapsing."
    ],
    questions: [
      {
        q: "What should a person do immediately if an earthquake strikes while they are indoors or outdoors?",
        marks: 3,
        ans: `<strong>If Indoors:</strong>
        <ol>
          <li>Do NOT run into stairwells or use elevators.</li>
          <li>Perform <strong>Drop, Cover, and Hold on</strong>: get under a heavy wooden table or bed and hold its legs firmly until shaking stops.</li>
          <li>Stay away from glass windows, mirrors, hanging chandeliers, and tall bookcases.</li>
        </ol>
        <strong>If Outdoors:</strong> Move into an open ground away from high-rise buildings, trees, streetlights, and overhead electrical wires.`,
        rubric: [
          { key: "Indoor actions (Drop, Cover, Hold under sturdy table)", marks: "1.5 Marks" },
          { key: "Outdoor actions (Move to open field away from poles/buildings)", marks: "1.5 Marks" }
        ]
      },
      {
        q: "How did villagers in Kutch rebuild their homes after the 2001 earthquake to ensure they would withstand future tremors?",
        marks: 3,
        ans: `Villagers worked together using local materials and traditional knowledge:
        <ul>
          <li>They mixed clay with cow dung to make thick insulating bricks and plastered walls with lime.</li>
          <li>They erected flexible lightweight wooden frames and bamboo pillars that absorb ground vibrations by swaying rather than cracking.</li>
          <li>They decorated the mud walls with traditional mirror work (Lippan art), creating safe, resilient, and climate-friendly round homes (Bhungas).</li>
        </ul>`,
        rubric: [
          { key: "Use of clay, cow dung, and lightweight wooden/bamboo frames", marks: "1.5 Marks" },
          { key: "Circular Bhunga design absorbing seismic waves safely", marks: "1.5 Marks" }
        ]
      }
    ]
  },
  {
    num: 15,
    title: "Blow Hot, Blow Cold",
    hindiTitle: "उसी से ठंडा उसी से गर्म",
    theme: "Dr. Zakir Hussain's Story, Thermodynamics of Human Breath, Stethoscope & Wind Instruments",
    concepts: [
      "Former President Dr. Zakir Hussain authored the famous story of the woodcutter and Mian Balishtiya.",
      "Human breath warms cold hands in winter because body breath temperature (~37°C) is higher than winter air.",
      "Human breath cools hot potatoes, soup, or tea because blowing air speeds up convection and surface evaporation.",
      "Breathing rate and heart rate increase during running and sports because muscles demand more oxygen.",
      "Wind instruments (Flute, Shehnai, Been, Whistle) produce musical notes by vibrating air columns."
    ],
    questions: [
      {
        q: "Why did the woodcutter blow on his frozen hands, and why did he also blow on his hot boiled potatoes? How can the same breath blow hot and blow cold?",
        marks: 4,
        ans: `The woodcutter's breath appeared magical to Mian Balishtiya, but it is pure science:
        <ul>
          <li><strong>Blowing Hot (Warming hands):</strong> In freezing winter, hands are cold (around 10°C-15°C). The air coming from human lungs is body temperature (about 37°C). Because breath is warmer than the hands, heat transfers to the skin, making hands warm.</li>
          <li><strong>Blowing Cold (Cooling food):</strong> Boiled potatoes or tea are steaming hot (around 80°C-90°C). Air blown from the mouth (37°C) is much cooler than the food. Blowing sweeps away hot air and accelerates evaporation, carrying away heat and rapidly cooling the food.</li>
        </ul>`,
        rubric: [
          { key: "Explanation of warming cold hands via 37°C lung air", marks: "2 Marks" },
          { key: "Explanation of cooling hot food via evaporation and convection", marks: "2 Marks" }
        ]
      },
      {
        q: "What happens to your heartbeat and breathing rate when you skip, run, or exercise vigorously? What instrument does a doctor use to hear your heartbeat?",
        marks: 3,
        ans: `When you exercise, sprint, or skip rope, your muscle cells work harder and consume oxygen at a much faster rate. To supply this required oxygen, your lungs breathe faster, and your heart pumps blood more rapidly, causing both <strong>heart rate and breathing rate to increase sharply</strong>.
        <br>A doctor uses a <strong>stethoscope</strong> (equipped with a sensitive diaphragm and earpieces) to listen clearly to heartbeats and chest sounds.`,
        rubric: [
          { key: "Increase in heart rate and breathing rate due to muscle oxygen demand", marks: "2 Marks" },
          { key: "Identification of the stethoscope", marks: "1 Mark" }
        ]
      }
    ]
  },
  {
    num: 16,
    title: "Who will do this Work?",
    hindiTitle: "कौन करेगा यह काम?",
    theme: "Sanitation Workers, Dignity of Labour, Mahatma Gandhi's Ashram Rules & Dr. Ambedkar",
    concepts: [
      "Sanitation workers perform essential public hygiene duties (cleaning gutters, garbage collection, sweeping streets) under hazardous conditions.",
      "Untouchability and caste discrimination forced specific communities into cleaning jobs for generations.",
      "Mahatma Gandhi's Sabarmati Ashram strictly enforced that every resident—guest or leader—must clean their own toilet.",
      "Dr. B.R. Ambedkar fought for the eradication of caste discrimination, establishing constitutional equality (Article 17 abolition of untouchability).",
      "Modern technology: robotic sewer cleaners, suction machines, and protective safety suits must replace manual scavenging."
    ],
    questions: [
      {
        q: "Why did Mahatma Gandhi insist that every person living in his ashram must clean their own toilet?",
        marks: 3,
        ans: `Mahatma Gandhi wanted to break the deeply rooted caste prejudice and untouchability in Indian society. In those days, cleaning toilets was viewed as low, dirty work reserved only for so-called lower castes. By making every resident, lawyer, and guest clean their own toilet, Gandhi promoted the <strong>dignity of all labour</strong> and taught that no honest work is beneath any human being.`,
        rubric: [
          { key: "Eradication of caste stigma and untouchability", marks: "1.5 Marks" },
          { key: "Promotion of universal dignity of labour", marks: "1.5 Marks" }
        ]
      },
      {
        q: "What hardships do sanitation workers face daily, and how can modern technology eliminate manual cleaning of sewers?",
        marks: 4,
        ans: `<strong>Hardships Faced:</strong>
        Sanitation workers face grave health risks from toxic gases (hydrogen sulphide) in sewer pits, skin infections, respiratory diseases, social stigma, and lack of safety gear.
        <br><strong>Technological Solutions:</strong>
        <ul>
          <li><strong>Sewage Suction Trucks:</strong> Mechanised vacuum pumps clean deep drain blockages without human entry.</li>
          <li><strong>Manhole-Cleaning Robots:</strong> Robots (such as India's <em>Bandicoot</em>) equipped with cameras and robotic arms descend into manholes to clear sludge.</li>
          <li><strong>Protective Gear:</strong> Heavy waterproof suits, oxygen masks, and gas detectors ensure complete worker safety.</li>
        </ul>`,
        rubric: [
          { key: "Health hazards and social discrimination faced", marks: "2 Marks" },
          { key: "Robotic cleaners and mechanised suction trucks as solutions", marks: "2 Marks" }
        ]
      }
    ]
  },
  {
    num: 17,
    title: "Across the Wall",
    hindiTitle: "फांद ली दीवार",
    theme: "Afsana Mansuri, Gender Stereotypes, NBA Mumbai, Team Spirit & Sports Equality",
    concepts: [
      "Afsana Mansuri, a young girl from a poor Mumbai slum household who washed utensils, broke gender barriers to become a star basketball player for NBA (Nagpada Basketball Association).",
      "Gender discrimination: societal prejudice that girls should only cook, do household chores, and not participate in sports.",
      "True team spirit means playing for the collective victory of the team rather than individual glory, encouraging teammates during errors.",
      "Coach Noor Khan provided equal training, discipline, and emotional encouragement to boys and girls alike."
    ],
    questions: [
      {
        q: "What social 'wall' did Afsana Mansuri have to cross to become a successful basketball player?",
        marks: 3,
        ans: `The 'wall' was the invisible wall of <strong>gender discrimination, poverty, and societal prejudice</strong>. Her mother worked as a domestic help and initially opposed her playing, telling her that girls from poor families are meant to do household chores, wash utensils, and study quietly, not run around in shorts on sports grounds. Afsana overcame this resistance through sheer determination, discipline, and the support of her coach.`,
        rubric: [
          { key: "Explanation of gender barrier and poverty constraints", marks: "1.5 Marks" },
          { key: "Overcoming parental and societal prejudice through dedication", marks: "1.5 Marks" }
        ]
      },
      {
        q: "What is 'team spirit'? Why is mutual respect and unity more important in a team than individual talent?",
        marks: 3,
        ans: `<strong>Team Spirit</strong> is the feeling of togetherness, mutual respect, and shared purpose among all players in a sports squad. 
        <br>Even if a team has extraordinarily talented individual players, they will lose if they argue, boast, or blame each other. True team spirit means celebrating each other's points, covering up for a teammate's mistake without shouting, and playing for the team's victory rather than personal statistics.`,
        rubric: [
          { key: "Definition of team spirit as collective unity and mutual trust", marks: "1.5 Marks" },
          { key: "Why cooperation surpasses isolated individual skill", marks: "1.5 Marks" }
        ]
      }
    ]
  },
  {
    num: 18,
    title: "No Place for Us?",
    hindiTitle: "जाएं तो जाएं कहाँ",
    theme: "Dam Construction Displacement, Jatrya Bhai's Story, Village Harmony vs Urban Slum Struggles",
    concepts: [
      "Jatrya Bhai lived happily in Khedi village surrounded by lush green forests and the river, where community members shared farm work, songs, and food.",
      "A large river dam was constructed, submerging Khedi village and forcing residents to leave their ancestral land.",
      "Relocation struggles in Sinduri village: infertile rocky land, costly medical care, lack of schooling, and mockery from local residents.",
      "Life in Mumbai slums: cramped, expensive tin-roof rooms, dirty gutters, daily wage exploitation, and loneliness."
    ],
    questions: [
      {
        q: "Describe the harmonious community life of Khedi village before the dam was built. How did villagers support one another?",
        marks: 3,
        ans: `In Khedi village, people lived in peaceful harmony with nature:
        <ul>
          <li>Children learned together to dance, sing, play flute, make clay pots, and recognize birds and medicinal forest herbs.</li>
          <li>Villagers worked together as one big family: during harvests or weddings, everyone pitched in, and elders resolved disputes lovingly without police or courts.</li>
        </ul>`,
        rubric: [
          { key: "Learning from nature and forest knowledge", marks: "1.5 Marks" },
          { key: "Community solidarity and mutual assistance in farming and festivals", marks: "1.5 Marks" }
        ]
      },
      {
        q: "What are the advantages and disadvantages of constructing large river dams for development?",
        marks: 4,
        ans: `<strong>Advantages of Dams:</strong>
        <ol>
          <li>Generates clean, renewable hydroelectric power.</li>
          <li>Provides irrigation canals to supply water to drought-prone farms.</li>
          <li>Helps control seasonal river flooding and supplies drinking water to distant cities.</li>
        </ol>
        <strong>Disadvantages & Human Costs:</strong>
        <ol>
          <li>Massive submergence of fertile agricultural lands and ancient forest ecosystems.</li>
          <li>Forced displacement of indigenous villagers who lose their homes, livelihood, and community identity without fair compensation.</li>
        </ol>`,
        rubric: [
          { key: "Listing 2-3 key benefits (hydroelectricity, irrigation, flood control)", marks: "2 Marks" },
          { key: "Listing 2 severe drawbacks (displacement, environmental destruction)", marks: "2 Marks" }
        ]
      }
    ]
  },
  {
    num: 19,
    title: "A Seed tells a Farmer's Story",
    hindiTitle: "किसानों की कहानी-बीज की जुबानी",
    theme: "Damjibhai vs Hasmukh, Traditional Organic Farming vs Chemical Farming & Farmer Debt Trap",
    concepts: [
      "Damjibhai practiced traditional sustainable farming in Gujarat: saving indigenous seeds in dried gourds, using neem leaves against pests, and enriching soil with cow dung manure.",
      "Hasmukh adopted modern farming: high-yield hybrid seeds, chemical fertilizers, synthetic insecticides, tube-well electric irrigation, and tractor bank loans.",
      "Consequences of excessive chemical farming: soil loses natural fertility, crops require more and more expensive fertilizers, underground water tables plummet, and farmers fall into bank debt traps.",
      "Traditional winter dish 'Undhiyu' cooked in inverted clay pots over hot coal pits."
    ],
    questions: [
      {
        q: "How did Damjibhai preserve seeds from year to year? Compare his traditional farming methods with his son Hasmukh's modern practices.",
        marks: 4,
        ans: `<strong>Damjibhai's Traditional Farming:</strong>
        Kept the best ripe bajra seeds in dried gourds (lauki) sealed with mud, accompanied by neem leaves to protect from insect pests. Soil was nourished with organic cow dung and crop rotation.
        <br><strong>Hasmukh's Modern Farming:</strong>
        Bought expensive hybrid seeds from the market every season. Replaced cow dung with chemical fertilizers and sprayed synthetic pesticides. Bought a tractor and dug deep electric borewells.
        <br><strong>Outcome:</strong> Initially profits rose, but soon chemical overuse hardened the soil, underground water dropped, and earnings were swallowed by bank loan interest.`,
        rubric: [
          { key: "Damjibhai's natural seed saving and organic techniques", marks: "1.5 Marks" },
          { key: "Hasmukh's chemical, hybrid, and mechanised inputs", marks: "1.5 Marks" },
          { key: "Long-term soil degradation and debt consequences", marks: "1 Mark" }
        ]
      },
      {
        q: "Why are earthworms called a farmer's best friends in organic farming?",
        marks: 3,
        ans: `Earthworms are nature's natural ploughmen:
        <ol>
          <li>They burrow continuously through the soil, creating countless tunnels that loosen the soil and allow air and water to penetrate deep to plant roots.</li>
          <li>They consume dead leaves and organic matter, producing rich worm castings (vermicompost) that contain vital minerals and natural nutrients for plants.</li>
        </ol>`,
        rubric: [
          { key: "Soil aeration through burrowing tunnels", marks: "1.5 Marks" },
          { key: "Production of rich nutrient-dense vermicompost castings", marks: "1.5 Marks" }
        ]
      }
    ]
  },
  {
    num: 20,
    title: "Whose Forests?",
    hindiTitle: "किसके जंगल?",
    theme: "Suryamani's Torang, Kuduk Culture, Right to Forest Act 2007 & Jhoom Farming in Mizoram",
    concepts: [
      "Suryamani, a tribal woman from Jharkhand, graduated college and founded 'Torang' (meaning 'jungle' in Kuduk language) to protect Adivasi culture, herbs, and songs.",
      "Forests are collective community banks: tribals take only what they need, never plundering trees for selfish greed.",
      "Right to Forest Act (FRA) 2007: people living in forests for at least 25 years have legal rights over the forest land, produce, and conservation decisions.",
      "Jhoom farming (shifting cultivation) in Mizoram: bamboo patches slashed and burned as fertilizer, crops grown naturally without chemical pesticides, and community land allocated by lucky lottery."
    ],
    questions: [
      {
        q: "Who is Suryamani and what is 'Torang'? What rights are guaranteed under the Right to Forest Act 2007?",
        marks: 4,
        ans: `<strong>Suryamani:</strong> A courageous 'Girl Star' from a Jharkhand Adivasi family who loved the forest. She studied hard, completed her B.A., and founded a community cultural centre called <strong>Torang</strong> ('Jungle' in Kuduk language) to preserve tribal folk music, herbal medicines, and indigenous Kuduk traditions.
        <br><strong>Right to Forest Act (2007):</strong>
        <ul>
          <li>Grants legal land rights to forest dwellers who have lived in the forest for at least 25 years.</li>
          <li>Recognizes their ownership over forest produce (fruits, roots, medicinal plants).</li>
          <li>Affirms that gram sabhas (village councils) have the authority to manage and protect forest conservation.</li>
        </ul>`,
        rubric: [
          { key: "Suryamani's background and establishment of Torang", marks: "1.5 Marks" },
          { key: "25-year residency criterion under FRA 2007", marks: "1 Mark" },
          { key: "Legal ownership of forest produce and Gram Sabha governance", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Describe the unique traditional practice of Jhoom farming (shifting cultivation) in Mizoram.",
        marks: 4,
        ans: `<strong>Jhoom Agriculture in Mizoram:</strong>
        <ol>
          <li>After cutting a crop, the land is left untouched for several years so soil regains fertility and bamboo groves grow back.</li>
          <li>The bamboo is slashed and burned; the ash acts as rich natural fertilizer. Burning is done carefully so flames do not spread into the main forest.</li>
          <li>The land is not ploughed deep; the soil is lightly scraped with a hoe and seeds of rice, maize, and chillies are dropped.</li>
          <li>Land belongs to the entire village and is distributed among families through a fair community lottery.</li>
        </ol>`,
        rubric: [
          { key: "Fallow period and ash fertilization", marks: "1.5 Marks" },
          { key: "Light hoeing instead of deep ploughing", marks: "1 Mark" },
          { key: "Community land ownership via lottery system", marks: "1.5 Marks" }
        ]
      }
    ]
  },
  {
    num: 21,
    title: "Like Father, Like Daughter",
    hindiTitle: "किसकी झलक? किसकी छाप?",
    theme: "Inherited vs Acquired Traits, Twins, Gregor Mendel's Pea Experiments & Polio Facts",
    concepts: [
      "Inherited traits: physical characteristics passed from biological parents to children through genes (eye colour, curly hair, dimples, free/attached earlobes).",
      "Acquired skills: abilities learned through education, practice, and environment (swimming, playing tabla, cycling, language accents).",
      "Identical twins: share identical genes, but environmental upbringing influences habits, skills, and personality.",
      "Gregor Mendel discovered the laws of inheritance through thousands of experiments on pea plants (traits inherit in pairs, like tall vs dwarf).",
      "Polio is caused by a virus (Poliovirus); it is NOT hereditary. It can be completely eradicated through Pulse Polio oral vaccine drops."
    ],
    questions: [
      {
        q: "Differentiate between an inherited trait and an acquired skill with two examples of each.",
        marks: 3,
        ans: `<ul>
          <li><strong>Inherited Traits:</strong> Physical characteristics passed from parents to children through genetics from birth. <em>Examples:</em> Eye colour, natural curly or straight hair, facial dimples, attached earlobes.</li>
          <li><strong>Acquired Skills:</strong> Abilities, knowledge, and habits that a person learns through practice, schooling, and environment after birth. <em>Examples:</em> Playing the harmonium/piano, swimming, cycling, speaking multiple languages.</li>
        </ul>`,
        rubric: [
          { key: "Definition and 2 examples of inherited traits", marks: "1.5 Marks" },
          { key: "Definition and 2 examples of acquired skills", marks: "1.5 Marks" }
        ]
      },
      {
        q: "Who was Gregor Mendel? What groundbreaking discovery did he make regarding pea plants?",
        marks: 3,
        ans: `Gregor Mendel was an Austrian monk born in 1822 in a poor farming family. Over seven years, he conducted meticulous breeding experiments on over 28,000 pea plants in his monastery garden:
        <ul>
          <li>He discovered that plant traits are passed down in discrete pairs and do not blend into an intermediate mix.</li>
          <li>For instance, crossing tall and dwarf pea plants produced either tall or dwarf offspring, not medium-height plants; seed coats were either smooth or wrinkled, never halfway.</li>
          <li>His work laid the fundamental foundation for the modern science of genetics.</li>
        </ul>`,
        rubric: [
          { key: "Identification of Gregor Mendel as father of genetics", marks: "1 Mark" },
          { key: "Discovery that traits inherit in discrete pairs without blending", marks: "2 Marks" }
        ]
      }
    ]
  },
  {
    num: 22,
    title: "On the Move Again",
    hindiTitle: "फिर चला काफिला",
    theme: "Dhanu's Story, Sugarcane Migrant Labourers, Mukadam Agent System & RTE Educational Disruption",
    concepts: [
      "Dhanu's family and other landless agricultural labourers in Maharashtra celebrate Dussehra, after which their nomadic migration begins.",
      "The 'Mukadam' (money-lending labour contractor) gives loans to poor families during the non-rainy months and contracts them out to sugarcane factories.",
      "Nomadic cycle: 6 months farming in native village during monsoon; 6 months living in temporary huts made of dried sugarcane leaves near factories.",
      "Severe educational disruption: children like Dhanu miss school for six months every year, leading to high dropout rates.",
      "Sustainable solutions: year-round canal irrigation for dual cropping, seasonal residential schools, and government implementation of the Right to Education (RTE) Act."
    ],
    questions: [
      {
        q: "Who is a Mukadam? How does the loan system force poor agricultural families into continuous seasonal migration?",
        marks: 3,
        ans: `A <strong>Mukadam</strong> is an agent and money-lender for sugarcane processing factories. During the dry months when there is no rain and no farm work, landless villagers borrow money from the Mukadam to survive. To pay back these loans, families are obligated to work for six months cutting and transporting sugarcane stalks wherever the Mukadam commands, trapping them in an unending cycle of debt and displacement.`,
        rubric: [
          { key: "Role of Mukadam as factory agent and money lender", marks: "1.5 Marks" },
          { key: "Cycle of debt forcing 6-month migration away from village", marks: "1.5 Marks" }
        ]
      },
      {
        q: "What difficulties do children like Dhanu face due to their parents' seasonal migration? How can the government ensure their education continues uninterrupted?",
        marks: 4,
        ans: `<strong>Difficulties Faced by Migrant Children:</strong>
        <ol>
          <li>They are pulled out of village school for six months, forgetting previously learned concepts.</li>
          <li>They cannot understand the local language at the new migration sites and end up helping parents carry heavy bundles of cane.</li>
          <li>Many eventually drop out completely and are pushed into child labour.</li>
        </ol>
        <strong>Government Solutions:</strong>
        <ul>
          <li>Establish <strong>Seasonal Residential Hostels</strong> in native villages so children can stay, eat, and attend school while parents migrate.</li>
          <li>Introduce <strong>Mobile Tent Schools</strong> that travel with the migrant caravans.</li>
          <li>Construct canal irrigation networks so farmers can harvest two to three crops a year, eliminating the need to migrate.</li>
        </ul>`,
        rubric: [
          { key: "Educational disruption and child labour risks", marks: "2 Marks" },
          { key: "Residential hostels and mobile schooling solutions", marks: "2 Marks" }
        ]
      }
    ]
  }
];

// Merge enriched questions and CBQs from scripts/enrich-all-evs-chapters.js
const { extraQuestionsByChapter, cbqByChapter } = require('../enrich-all-evs-chapters.js');

all22Chapters.forEach(ch => {
  if (extraQuestionsByChapter[ch.num]) {
    ch.questions = (ch.questions || []).concat(extraQuestionsByChapter[ch.num]);
  }
  if (!ch.cbq && cbqByChapter[ch.num]) {
    ch.cbq = cbqByChapter[ch.num];
  }
});

console.log(`Total chapters prepared: ${all22Chapters.length}`);
console.log(`Total questions across all chapters: ${all22Chapters.reduce((sum, ch) => sum + ch.questions.length, 0)}`);
console.log(`Total CBQs across all chapters: ${all22Chapters.filter(ch => ch.cbq).length}`);

// Normalize format for lookingAroundChapters
const lookingAroundChapters = all22Chapters.map(ch => ({
  id: 'la_' + ch.num,
  num: ch.num,
  unit: ch.theme ? ch.theme.split(',')[0].trim() : ('Chapter ' + ch.num),
  title: ch.title,
  hindiTitle: ch.hindiTitle || '',
  subtitle: ch.theme || ch.title,
  concepts: ch.concepts || [],
  svg: ch.svg || '',
  questions: (ch.questions || []).map(q => ({
    q: q.q,
    category: q.category || 'Textbook Exercise',
    marks: q.marks || 3,
    ans: q.ans,
    rubric: q.rubric || [
      { key: "Detailed conceptual statement and key facts", marks: Math.ceil((q.marks || 3) / 2) + " Marks" },
      { key: "Scientific explanation and real-life examples", marks: Math.floor((q.marks || 3) / 2) + " Marks" }
    ]
  })),
  cbq: ch.cbq || null
}));

module.exports = { lookingAroundChapters };
