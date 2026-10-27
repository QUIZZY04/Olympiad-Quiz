// scripts/builders/expand-c8-science.js
// Injects the 68 missing physical NCERT Curiosity textbook questions into ncert-solutions-class-8-science.html
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const FILE = path.join(ROOT, 'ncert-solutions-class-8-science.html');

const SCIENCE_ADDITIONS = {
  ch1: [ // Needs 4 Qs: Q6 to Q9
    {
      num: 6, marks: '3 Marks (50–80 Words)',
      text: 'Identify the independent, dependent, and controlled variables in an experiment testing how the temperature of water affects the rate at which sugar dissolves.',
      answer: '<p><strong>Variables Identified:</strong></p><ul><li><strong>Independent Variable:</strong> Temperature of the water (the factor deliberately changed, e.g., 20°C, 40°C, 60°C).</li><li><strong>Dependent Variable:</strong> Time taken for a fixed amount of sugar to dissolve completely (the factor measured).</li><li><strong>Controlled Variables:</strong> Amount of water (volume), mass and crystal size of sugar, rate of stirring, and type of container (kept constant for fair testing).</li></ul>',
      rubric: [
        ['Independent variable (temperature)', '1 Mark'],
        ['Dependent variable (time to dissolve)', '1 Mark'],
        ['Controlled variables (volume, sugar mass, stirring)', '1 Mark']
      ]
    },
    {
      num: 7, marks: '3 Marks (50–80 Words)',
      text: 'What are standard laboratory safety rules every student must follow while heating chemicals or handling glassware in a science laboratory?',
      answer: '<p><strong>Laboratory Safety Rules:</strong></p><ul><li>1. Always wear protective eye goggles, lab aprons, and closed-toe footwear.</li><li>2. Never point the open mouth of a test tube containing boiling liquid towards yourself or others.</li><li>3. Use test tube holders and heat-resistant gloves when handling hot apparatus.</li><li>4. Report any glass breakage or chemical spills immediately to the teacher without touching shards.</li><li>5. Never taste, inhale directly, or touch any laboratory chemical with bare hands.</li></ul>',
      rubric: [
        ['Protective gear rules', '1 Mark'],
        ['Heating safety precautions', '1 Mark'],
        ['Handling chemicals and breakages', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'Why are repeated trials necessary in a scientific experiment before arriving at a reliable conclusion?',
      answer: '<p>Repeated trials are essential because:</p><ul><li>1. They minimize experimental errors and anomalies caused by accidental fluctuations.</li><li>2. They allow calculation of an average value, confirming that results are repeatable, consistent, and scientifically valid.</li></ul>',
      rubric: [
        ['Error minimization and anomaly identification', '1 Mark'],
        ['Repeatability and reliability of data', '1 Mark']
      ]
    },
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'Explain how a scientific theory differs from a popular everyday guess or opinion.',
      answer: '<p>In everyday language, a "theory" means a guess or opinion without evidence. In contrast, a <strong>scientific theory</strong> is a well-substantiated, rigorously tested explanation of natural phenomena based on extensive empirical evidence, repeated experimentation, and peer-reviewed observations.</p>',
      rubric: [
        ['Everyday meaning: untested opinion/guess', '1 Mark'],
        ['Scientific meaning: evidence-backed, tested explanation', '1 Mark']
      ]
    }
  ],

  ch2: [ // Needs 4 Qs: Q6 to Q9
    {
      num: 6, marks: '3 Marks (50–80 Words)',
      text: 'Explain the process of fermentation with the help of an example. Name the scientist who discovered fermentation.',
      answer: '<p><strong>Fermentation:</strong> It is the anaerobic biochemical process in which microorganisms like yeast convert sugars into alcohol and carbon dioxide.</p><p><strong>Example:</strong> In baking, yeast is added to dough. It respires anaerobically, producing CO₂ gas that creates bubbles, making the dough rise and become soft and spongy. In breweries, yeast ferments barley sugar into ethanol.</p><p><strong>Discovery:</strong> Fermentation was discovered by <strong>Louis Pasteur</strong> in 1857.</p>',
      rubric: [
        ['Definition of fermentation', '1 Mark'],
        ['Example in baking or brewing with CO₂/alcohol', '1 Mark'],
        ['Scientist: Louis Pasteur (1857)', '1 Mark']
      ]
    },
    {
      num: 7, marks: '3 Marks (50–80 Words)',
      text: 'What are antibiotics? What precautions must be taken while taking antibiotics?',
      answer: '<p><strong>Antibiotics</strong> are chemical medicines produced from bacteria or fungi that kill or stop the growth of disease-causing bacteria (e.g., Penicillin, Streptomycin).</p><p><strong>Precautions:</strong></p><ul><li>1. Antibiotics must be taken only on the advice of a qualified doctor.</li><li>2. The full prescribed course must be completed, even if symptoms vanish early, to prevent antibiotic resistance.</li><li>3. Antibiotics should not be taken for viral infections like cold or flu, as they are ineffective against viruses.</li></ul>',
      rubric: [
        ['Definition and example of antibiotics', '1 Mark'],
        ['Precaution: Complete prescribed course', '1 Mark'],
        ['Precaution: Ineffective against viral infections', '1 Mark']
      ]
    },
    {
      num: 8, marks: '3 Marks (50–80 Words)',
      text: 'Describe four common methods of food preservation used at home to prevent microbial spoilage.',
      answer: '<p><strong>Methods of Food Preservation:</strong></p><ul><li>1. <strong>Chemical / Salt Preservation:</strong> Common salt draws water out of microbial cells by osmosis (salting of pickles, fish, and meat).</li><li>2. <strong>Preservation by Sugar:</strong> Jams and jellies use high sugar concentration to inhibit bacterial growth by dehydration.</li><li>3. <strong>Use of Oil and Vinegar:</strong> Bacteria cannot survive in an acidic environment created by vinegar and oil in pickles.</li><li>4. <strong>Heat and Cold Treatments:</strong> Boiling kills microbes; low temperature in refrigerators inhibits microbial multiplication and enzymatic activity.</li></ul>',
      rubric: [
        ['Salting and sugar methods', '1.5 Marks'],
        ['Oil/vinegar and temperature treatments', '1.5 Marks']
      ]
    },
    {
      num: 9, marks: '3 Marks (50–80 Words)',
      text: 'Describe how an Amoeba moves and ingests its food using pseudopodia. What type of digestion does it possess?',
      answer: '<p>Amoeba is a microscopic single-celled protozoan. It moves by extending finger-like projections of its cytoplasm called <strong>pseudopodia</strong> ("false feet").</p><p>When it senses food, pseudopodia engulf the food particle by encircling it, forming a <strong>food vacuole</strong>. Digestive enzymes break down the food inside the vacuole. This process is called <strong>phagocytosis</strong> and the digestion is intracellular.</p>',
      rubric: [
        ['Role of pseudopodia in movement and engulfing', '1.5 Marks'],
        ['Formation of food vacuole and intracellular digestion', '1.5 Marks']
      ]
    }
  ],

  ch3: [ // Needs 4 Qs: Q5 to Q8
    {
      num: 5, marks: '3 Marks (50–80 Words)',
      text: 'What are vectors in disease transmission? Name two common vectors and the specific diseases they spread.',
      answer: '<p><strong>Vectors</strong> are living carrier organisms (usually insects) that transmit infectious pathogens from an infected person or reservoir to a healthy individual without catching the disease themselves.</p><p><strong>Examples:</strong></p><ul><li>1. <strong>Female Anopheles mosquito:</strong> Transmits <em>Plasmodium</em> (causes Malaria).</li><li>2. <strong>Female Aedes mosquito:</strong> Transmits Dengue virus and Chikungunya virus.</li><li>3. <strong>Housefly (Musca domestica):</strong> Carries cholera and typhoid pathogens on its body.</li></ul>',
      rubric: [
        ['Definition of vector', '1 Mark'],
        ['Female Anopheles -> Malaria', '1 Mark'],
        ['Female Aedes -> Dengue / Housefly -> Cholera', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks (50–80 Words)',
      text: 'Differentiate between active immunity and passive immunity with suitable examples.',
      answer: '<p><strong>Active Immunity:</strong> Produced when the body\'s own immune system generates antibodies after exposure to a pathogen or vaccine antigen. It takes time to develop but is long-lasting (e.g., immunity after Measles or Polio vaccination).</p><p><strong>Passive Immunity:</strong> Acquired when ready-made antibodies are directly introduced from an outside source. It provides immediate protection but is short-lived (e.g., antibodies in mother\'s colostrum breast milk or anti-tetanus serum injection).</p>',
      rubric: [
        ['Active immunity features and example', '1.5 Marks'],
        ['Passive immunity features and example', '1.5 Marks']
      ]
    },
    {
      num: 7, marks: '2 Marks (30–50 Words)',
      text: 'Why is ORS (Oral Rehydration Solution) administered during severe diarrhea? How can it be prepared at home in an emergency?',
      answer: '<p>Severe diarrhea causes dangerous loss of water and essential electrolytes (salts). ORS restores the body\'s fluid and electrolyte balance, preventing fatal dehydration.</p><p><strong>Emergency Home Preparation:</strong> Dissolve <strong>6 level teaspoons of sugar</strong> and <strong>1/2 level teaspoon of salt</strong> in <strong>1 litre of clean boiled and cooled drinking water</strong>.</p>',
      rubric: [
        ['Reason: rehydration and electrolyte replenishment', '1 Mark'],
        ['Home formula: 6 tsp sugar + 0.5 tsp salt in 1 L water', '1 Mark']
      ]
    },
    {
      num: 8, marks: '3 Marks (50–80 Words)',
      text: 'Explain the importance of a balanced diet, clean drinking water, and regular physical exercise in maintaining overall health.',
      answer: '<p><strong>Key Pillars of Health:</strong></p><ul><li>1. <strong>Balanced Diet:</strong> Supplies all essential nutrients (carbohydrates, proteins, fats, vitamins, minerals, water, and roughage) in proper proportions for tissue repair, growth, and immune defense.</li><li>2. <strong>Clean Drinking Water:</strong> Prevents water-borne infections (cholera, typhoid, jaundice) and maintains cellular metabolism and waste elimination.</li><li>3. <strong>Physical Exercise:</strong> Strengthens cardiovascular health, enhances muscular endurance, reduces obesity, and boosts mental well-being.</li></ul>',
      rubric: [
        ['Significance of balanced diet', '1 Mark'],
        ['Significance of clean potable water', '1 Mark'],
        ['Significance of physical activity', '1 Mark']
      ]
    }
  ],

  ch4: [ // Needs 5 Qs: Q5 to Q9
    {
      num: 5, marks: '4 Marks (70–100 Words)',
      text: 'Describe the construction and working of an electric bell with the help of magnetic effect of electric current.',
      answer: '<p><strong>Construction:</strong> An electric bell consists of an electromagnet (U-shaped soft iron core wound with insulated copper wire), a soft iron armature attached to a spring, a contact screw, a hammer, and a metallic gong.</p><p><strong>Working:</strong> When the switch is pressed, current flows through the electromagnet coil, magnetizing it. The electromagnet attracts the soft iron armature, causing the hammer to strike the gong and produce sound. As the armature moves forward, it breaks contact with the screw. The circuit opens, current stops, the electromagnet loses its magnetism, and the spring pulls the armature back to touch the screw again. This cyclic process repeats rapidly, producing continuous ringing.</p>',
      rubric: [
        ['Components listed (electromagnet, armature, contact screw, hammer, gong)', '1.5 Marks'],
        ['Step-by-step working principle based on electromagnetism', '2.5 Marks']
      ]
    },
    {
      num: 6, marks: '2 Marks (30–50 Words)',
      text: 'Why are Miniature Circuit Breakers (MCBs) increasingly preferred over traditional fuse wires in domestic electrical wiring?',
      answer: '<p>MCBs are preferred because:</p><ul><li>1. They automatically trip and switch off the circuit within milliseconds during an overload or short circuit, offering superior safety.</li><li>2. Unlike fuses that melt and must be physically replaced, an MCB can be simply reset by flicking the switch back up.</li></ul>',
      rubric: [
        ['Automatic tripping safety mechanism', '1 Mark'],
        ['Reset capability without wire replacement', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks (30–50 Words)',
      text: 'Name the alloy commonly used to make the heating elements of electric geysers, toasters, and irons. Why is this alloy chosen?',
      answer: '<p>The alloy used is <strong>Nichrome</strong> (an alloy of nickel and chromium).</p><p><strong>Reasons for Selection:</strong></p><ul><li>1. Nichrome has high electrical resistivity, producing large amounts of heat (H = I²Rt).</li><li>2. It has a very high melting point and does not easily oxidize (burn) even at red-hot temperatures.</li></ul>',
      rubric: [
        ['Naming Nichrome', '1 Mark'],
        ['Two properties: high resistivity and high melting point / non-oxidizing', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'State three ways to increase the magnetic strength of an electromagnet.',
      answer: '<p>The magnetic strength can be increased by:</p><ul><li>1. Increasing the number of turns of wire in the coil.</li><li>2. Increasing the electric current flowing through the coil (e.g., using more cells).</li><li>3. Using a soft iron core with high magnetic permeability inside the coil.</li></ul>',
      rubric: [
        ['Increasing number of coil turns', '0.75 Mark'],
        ['Increasing electric current', '0.75 Mark'],
        ['Using soft iron core', '0.5 Mark']
      ]
    },
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'What happens when an electric current is passed through acidified water? Name the gases liberated at the cathode and anode.',
      answer: '<p>When electric current passes through acidified water, it undergoes <strong>electrolysis</strong> (chemical decomposition into hydrogen and oxygen).</p><ul><li>At Cathode (negative electrode): <strong>Hydrogen gas (H₂)</strong> is liberated (ratio 2 volumes).</li><li>At Anode (positive electrode): <strong>Oxygen gas (O₂)</strong> is liberated (ratio 1 volume).</li></ul>',
      rubric: [
        ['Naming process: electrolysis of water', '1 Mark'],
        ['Identifying Hydrogen at cathode and Oxygen at anode', '1 Mark']
      ]
    }
  ],

  ch5: [ // Needs 5 Qs: Q4 to Q8
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'Define gravitational force. Is gravity a contact or non-contact force? Explain why an apple falls towards the Earth rather than the Earth moving towards the apple.',
      answer: '<p><strong>Gravitational Force:</strong> The universal force of attraction exerted by every mass upon every other mass in the universe. It is a <strong>non-contact force</strong> because it acts across empty space without physical touch.</p><p><strong>Why Apple Falls:</strong> By Newton\'s third law, the apple and Earth exert equal and opposite forces on each other. However, because Earth has immense mass compared to the apple (F = ma ⟹ a = F/m), Earth\'s acceleration is imperceptible while the apple\'s acceleration is prominent (9.8 m/s²), making the apple fall towards the Earth.</p>',
      rubric: [
        ['Definition of gravity and non-contact classification', '1 Mark'],
        ['Explaining acceleration disparity using F = ma', '2 Marks']
      ]
    },
    {
      num: 5, marks: '3 Marks (50–80 Words)',
      text: 'What is atmospheric pressure? Why does atmospheric pressure decrease with increasing altitude, and why do mountaineers experience nosebleeds at high altitudes?',
      answer: '<p><strong>Atmospheric Pressure:</strong> The force exerted per unit area by the weight of the air column above Earth\'s surface.</p><p><strong>Decrease with Altitude:</strong> As altitude increases, the height and density of the overlying air column decrease, so atmospheric pressure decreases.</p><p><strong>Nosebleeds:</strong> At high altitudes, the external atmospheric pressure drops significantly below the internal blood pressure in human capillaries. This pressure imbalance causes delicate nasal blood vessels to rupture, leading to nosebleeds.</p>',
      rubric: [
        ['Definition of atmospheric pressure', '1 Mark'],
        ['Reason for decrease with altitude', '1 Mark'],
        ['Pressure imbalance causing nosebleeds', '1 Mark']
      ]
    },
    {
      num: 6, marks: '2 Marks (30–50 Words)',
      text: 'Describe an activity to demonstrate electrostatic force using a plastic comb and bits of dry paper.',
      answer: '<p><strong>Activity:</strong></p><ul><li>1. Rub a clean plastic comb vigorously through dry hair several times.</li><li>2. Bring the comb close to small, dry bits of paper lying on a table without touching them.</li><li>3. <strong>Observation:</strong> The bits of paper jump up and stick to the comb.</li><li>4. <strong>Explanation:</strong> Friction charges the comb with electrostatic charge, which exerts an attractive non-contact electrostatic force on the neutral paper bits.</li></ul>',
      rubric: [
        ['Procedure: rubbing comb in hair', '1 Mark'],
        ['Observation and electrostatic force explanation', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks (30–50 Words)',
      text: 'Why do deep-sea divers have to wear specially reinforced pressurized diving suits?',
      answer: '<p>Liquid pressure increases directly with depth due to the weight of the water column above (P = hρg). At extreme ocean depths, hydrostatic pressure is immense and would crush human lungs and organs. Reinforced diving suits balance this external hydrostatic pressure, protecting divers.</p>',
      rubric: [
        ['Hydrostatic pressure increases with depth', '1 Mark'],
        ['Reinforced suit resists crushing water pressure', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'In a tug-of-war match, Team A pulls with a force of 1500 N to the left and Team B pulls with a force of 1200 N to the right. Calculate the net force and state the direction of motion.',
      answer: '<p>Forces acting in opposite directions along the same line are subtracted:</p><p>Net Force = Force (Left) − Force (Right) = 1500 N − 1200 N = <strong>300 N towards the Left</strong>.</p><p>The rope and the teams will accelerate towards Team A (to the left).</p>',
      rubric: [
        ['Formula: F_net = 1500 N - 1200 N = 300 N', '1 Mark'],
        ['Direction: Towards Team A (Left)', '1 Mark']
      ]
    }
  ],

  ch6: [ // Needs 5 Qs: Q4 to Q8
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'Describe an activity to prove that air expands on heating and becomes lighter (less dense).',
      answer: '<p><strong>Activity:</strong></p><ul><li>1. Take an empty glass bottle and tie a deflated balloon tightly over its mouth.</li><li>2. Place the bottle in a trough filled with hot boiling water. Observe the balloon inflate.</li><li>3. Now place the bottle into ice-cold water. Observe the balloon deflate.</li><li>4. <strong>Conclusion:</strong> Hot water heats the air inside the bottle. Air expands upon heating and exerts upward pressure, inflating the balloon. Cold air contracts, proving air expands on heating.</li></ul>',
      rubric: [
        ['Experimental setup (bottle + balloon + hot water)', '1 Mark'],
        ['Observation in hot and cold water', '1 Mark'],
        ['Conclusion confirming thermal expansion of air', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks (50–80 Words)',
      text: 'Why do high-speed winds blowing over thatched roofs blow them off without touching them? Explain the underlying scientific principle.',
      answer: '<p>This phenomenon is explained by <strong>Bernoulli\'s principle</strong>:</p><ul><li>When high-speed winds blow over the top of a thatched roof, they create an area of <strong>reduced air pressure</strong> above the roof.</li><li>Meanwhile, the air inside the house remains relatively calm and maintains normal, higher atmospheric pressure.</li><li>This large upward pressure difference exerts a powerful net upward force (lift) on the roof, lifting and blowing it off.</li></ul>',
      rubric: [
        ['Naming Bernoulli\'s principle / wind velocity effect', '1 Mark'],
        ['Low pressure above roof due to high wind speed', '1 Mark'],
        ['Upward thrust from higher internal pressure lifting roof', '1 Mark']
      ]
    },
    {
      num: 6, marks: '2 Marks (30–50 Words)',
      text: 'What is an anemometer? How does it help meteorologists in predicting severe storms and cyclones?',
      answer: '<p>An <strong>anemometer</strong> is an instrument with rotating cups used to measure wind speed and direction. By continuously recording rapid increases in wind speeds and pressure drops, meteorologists can track tropical disturbances, predict cyclone landfall paths, and issue timely public disaster warnings.</p>',
      rubric: [
        ['Definition of anemometer (measures wind speed)', '1 Mark'],
        ['Role in cyclone tracking and disaster warning', '1 Mark']
      ]
    },
    {
      num: 7, marks: '3 Marks (50–80 Words)',
      text: 'Differentiate between a cyclone and a tornado in terms of origin, shape, and typical wind speeds.',
      answer: '<p><strong>Cyclone:</strong> Forms over warm tropical oceans; diameter spans 100 to 500 km; wind speeds range from 120 to 250 km/h; forms a large spiraling storm system with a calm central "eye".</p><p><strong>Tornado:</strong> Forms over land from severe thunderstorms; takes the shape of a dark, funnel-shaped cloud reaching from the sky to the ground; diameter is narrow (few meters to 1 km); wind speeds are violent, reaching up to 300 to 500 km/h.</p>',
      rubric: [
        ['Cyclone features (origin over warm sea, size, speed)', '1.5 Marks'],
        ['Tornado features (land thunderstorm, funnel cloud, speed)', '1.5 Marks']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'What safety precautions should a person take if caught outdoors in an open field during a severe thunderstorm accompanied by lightning?',
      answer: '<p><strong>Outdoor Thunderstorm Precautions:</strong></p><ul><li>1. Do not take shelter under isolated tall trees or near metal poles/fences.</li><li>2. If in an open field with no shelter, squat low on the ground with hands on knees and head tucked between knees (lightning crouch) to minimize height and contact with ground.</li><li>3. Do not hold metal-tipped umbrellas or use wired electronic devices.</li></ul>',
      rubric: [
        ['Avoid isolated trees and metal objects', '1 Mark'],
        ['Squat in lightning crouch position', '1 Mark']
      ]
    }
  ],

  ch7: [ // Needs 5 Qs: Q4 to Q8
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'Describe an activity using water and potassium permanganate crystals to demonstrate that particles of matter have spaces between them.',
      answer: '<p><strong>Activity:</strong></p><ul><li>1. Take 100 mL of water in a graduated beaker and mark the water level.</li><li>2. Add 2–3 crystals of purple potassium permanganate (KMnO₄) and stir gently.</li><li>3. <strong>Observation:</strong> The water turns uniformly deep purple, but the water level does not rise noticeably.</li><li>4. <strong>Inference:</strong> The crystals break into millions of tiny particles that distribute themselves into the spaces (intermolecular spaces) between water molecules.</li></ul>',
      rubric: [
        ['Procedure using beaker, water, KMnO₄', '1 Mark'],
        ['Observation that volume does not increase', '1 Mark'],
        ['Inference: particles occupy intermolecular spaces', '1 Mark']
      ]
    },
    {
      num: 5, marks: '2 Marks (30–50 Words)',
      text: 'Why does the smell of hot sizzling food reach us several meters away, while to smell cold food we have to go close?',
      answer: '<p>Particles of matter possess kinetic energy that increases with temperature. In hot food, aromatic vapors have high kinetic energy, resulting in a much faster rate of <strong>diffusion</strong> through air. In cold food, kinetic energy is very low, so diffusion is sluggish, requiring us to get close to smell it.</p>',
      rubric: [
        ['Kinetic energy increases with temperature', '1 Mark'],
        ['Higher diffusion rate of hot vapors vs cold food', '1 Mark']
      ]
    },
    {
      num: 6, marks: '2 Marks (30–50 Words)',
      text: 'What is Brownian motion? What two key facts about particles does it prove?',
      answer: '<p><strong>Brownian Motion</strong> is the continuous, random, zig-zag motion of microscopic particles suspended in a fluid (liquid or gas), first observed by Robert Brown.</p><p><strong>Key Facts Proven:</strong></p><ul><li>1. Matter is made up of tiny individual particles.</li><li>2. Particles of matter are in constant, ceaseless random motion.</li></ul>',
      rubric: [
        ['Definition of zig-zag particle motion', '1 Mark'],
        ['Two facts: particulate nature and constant motion', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks (30–50 Words)',
      text: 'Why is ice at 273 K (0°C) more effective in cooling drinks than water at the same temperature?',
      answer: '<p>Ice at 273 K absorbs latent heat of fusion (3.34 × 10⁵ J/kg) from the beverage to melt into liquid water at 0°C, in addition to sensible heat. Liquid water at 273 K does not absorb latent heat. Hence, ice absorbs significantly more heat energy, providing superior cooling.</p>',
      rubric: [
        ['Absorption of latent heat of fusion by ice', '1 Mark'],
        ['Water at 0°C lacks extra latent heat capacity', '1 Mark']
      ]
    },
    {
      num: 8, marks: '3 Marks (50–80 Words)',
      text: 'Differentiate between evaporation and boiling with four distinct points of comparison.',
      answer: '<p><strong>Evaporation vs Boiling:</strong></p><ul><li>1. <strong>Temperature:</strong> Evaporation occurs at any temperature below the boiling point; boiling occurs only at a fixed temperature (boiling point).</li><li>2. <strong>Nature:</strong> Evaporation is a surface phenomenon; boiling is a bulk phenomenon involving the entire liquid.</li><li>3. <strong>Bubbles:</strong> No bubbles form during evaporation; bubbles of vapor form throughout the liquid during boiling.</li><li>4. <strong>Cooling Effect:</strong> Evaporation causes cooling of the surroundings; boiling maintains temperature without cooling.</li></ul>',
      rubric: [
        ['Temperature & surface vs bulk difference', '1.5 Marks'],
        ['Bubbles & cooling effect difference', '1.5 Marks']
      ]
    }
  ],

  ch8: [ // Needs 6 Qs: Q4 to Q9
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'Define atomicity. State the atomicity of: (i) Helium (ii) Oxygen (iii) Ozone (iv) Phosphorus (v) Sulphur.',
      answer: '<p><strong>Atomicity:</strong> The number of atoms constituting a single molecule of an element.</p><ul><li>(i) <strong>Helium (He):</strong> Monoatomic (Atomicity = 1)</li><li>(ii) <strong>Oxygen (O₂):</strong> Diatomic (Atomicity = 2)</li><li>(iii) <strong>Ozone (O₃):</strong> Triatomic (Atomicity = 3)</li><li>(iv) <strong>Phosphorus (P₄):</strong> Tetra-atomic (Atomicity = 4)</li><li>(v) <strong>Sulphur (S₈):</strong> Polyatomic (Atomicity = 8)</li></ul>',
      rubric: [
        ['Definition of atomicity', '1 Mark'],
        ['Correct atomicity of all 5 elements', '2 Marks']
      ]
    },
    {
      num: 5, marks: '3 Marks (50–80 Words)',
      text: 'Write the chemical formulas of the following compounds using the criss-cross method:<br>(i) Magnesium chloride<br>(ii) Calcium oxide<br>(iii) Aluminium sulphate',
      answer: '<p><strong>Chemical Formulas:</strong></p><ul><li>(i) <strong>Magnesium chloride:</strong> Mg²⁺ and Cl⁻ ⟹ Criss-cross valencies ⟹ <strong>MgCl₂</strong>.</li><li>(ii) <strong>Calcium oxide:</strong> Ca²⁺ and O²⁻ ⟹ Ratio 2:2 simplifies to 1:1 ⟹ <strong>CaO</strong>.</li><li>(iii) <strong>Aluminium sulphate:</strong> Al³⁺ and SO₄²⁻ ⟹ Criss-cross ⟹ <strong>Al₂(SO₄)₃</strong>.</li></ul>',
      rubric: [
        ['(i) MgCl₂', '1 Mark'],
        ['(ii) CaO', '1 Mark'],
        ['(iii) Al₂(SO₄)₃', '1 Mark']
      ]
    },
    {
      num: 6, marks: '2 Marks (30–50 Words)',
      text: 'Differentiate between homogeneous and heterogeneous mixtures with two examples of each.',
      answer: '<p><strong>Homogeneous Mixture:</strong> Has uniform composition and properties throughout with no visible boundary of separation. <em>Examples:</em> Salt solution in water, brass (alloy of Cu and Zn).</p><p><strong>Heterogeneous Mixture:</strong> Does not have uniform composition throughout and exhibits distinct visible phases. <em>Examples:</em> Sand in water, mixture of iron filings and sulphur powder.</p>',
      rubric: [
        ['Homogeneous definition + 2 examples', '1 Mark'],
        ['Heterogeneous definition + 2 examples', '1 Mark']
      ]
    },
    {
      num: 7, marks: '3 Marks (50–80 Words)',
      text: 'What is chromatography? Describe how paper chromatography is used to separate different dye pigments present in black ink.',
      answer: '<p><strong>Chromatography</strong> is a separation technique used to separate components of a mixture based on differences in their solubility in a mobile phase flowing over a stationary phase.</p><p><strong>Paper Chromatography of Ink:</strong> Place a drop of black ink near the bottom edge of a strip of filter paper (stationary phase). Suspend the paper in a jar containing water (mobile phase) so the ink spot remains just above the water level. As water rises by capillary action, more soluble dyes travel faster and higher, separating the black ink into distinct colored bands (e.g., cyan, magenta, yellow).</p>',
      rubric: [
        ['Definition of chromatography', '1 Mark'],
        ['Procedure of paper chromatography', '1 Mark'],
        ['Separation mechanism based on solubility', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'Why is pure water (H₂O) classified as a chemical compound and not as a mixture? Give three supporting reasons.',
      answer: '<p>Water is classified as a compound because:</p><ul><li>1. Hydrogen and oxygen are chemically bonded in a fixed mass ratio of 1 : 8.</li><li>2. Properties of water (extinguishes fire) are entirely different from its constituents (H₂ burns explosively, O₂ supports combustion).</li><li>3. Water cannot be separated into hydrogen and oxygen by physical methods; only chemical electrolysis can separate them.</li></ul>',
      rubric: [
        ['Fixed proportion by mass (1:8)', '0.5 Mark'],
        ['Distinct properties from constituent elements', '1 Mark'],
        ['Requires chemical means for separation', '0.5 Mark']
      ]
    },
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'State the Law of Conservation of Mass in chemical reactions. Give an illustrative example.',
      answer: '<p><strong>Law of Conservation of Mass:</strong> Formulated by Antoine Lavoisier, it states that mass can neither be created nor destroyed in a chemical reaction; total mass of reactants always equals total mass of products.</p><p><strong>Example:</strong> When 100 g of calcium carbonate (CaCO₃) is heated, it decomposes into 56 g of calcium oxide (CaO) and 44 g of carbon dioxide (CO₂). Total reactant mass (100 g) = Total product mass (56 + 44 = 100 g).</p>',
      rubric: [
        ['Statement of law (Lavoisier)', '1 Mark'],
        ['Illustrative reaction example with balanced masses', '1 Mark']
      ]
    }
  ],

  ch9: [ // Needs 6 Qs: Q4 to Q9
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'Differentiate between saturated, unsaturated, and supersaturated solutions.',
      answer: '<p><strong>Types of Solutions:</strong></p><ul><li>1. <strong>Unsaturated Solution:</strong> A solution in which more solute can be dissolved at the given temperature.</li><li>2. <strong>Saturated Solution:</strong> A solution in which no more solute can dissolve at that specific temperature.</li><li>3. <strong>Supersaturated Solution:</strong> An unstable solution that contains more dissolved solute than a saturated solution at that temperature, prepared by cooling a hot saturated solution slowly without disturbance.</li></ul>',
      rubric: [
        ['Unsaturated definition', '1 Mark'],
        ['Saturated definition', '1 Mark'],
        ['Supersaturated definition', '1 Mark']
      ]
    },
    {
      num: 5, marks: '2 Marks (30–50 Words)',
      text: 'What is the Tyndall effect? Why do true solutions NOT show Tyndall effect while colloids do?',
      answer: '<p><strong>Tyndall Effect:</strong> The scattering of a beam of light by dispersed particles in a medium, making the path of the light beam visible.</p><p>True solution particles (ions/molecules) are smaller than 1 nanometre (10⁻⁹ m) and cannot scatter visible light wavelengths. In colloids, particle size ranges from 1 to 1000 nm, which is large enough to scatter light and illuminate the path.</p>',
      rubric: [
        ['Definition of Tyndall effect', '1 Mark'],
        ['Particle size contrast: < 1 nm vs 1–1000 nm', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks (50–80 Words)',
      text: 'Describe the process of crystallization used to obtain pure copper sulphate crystals from an impure sample.',
      answer: '<p><strong>Process of Crystallization:</strong></p><ul><li>1. Dissolve impure copper sulphate in a minimum amount of warm water in a beaker.</li><li>2. Filter the solution to remove insoluble solid impurities.</li><li>3. Heat the filtrate gently on a water bath until the crystallization point is reached (tested by dipping a glass rod and checking if crystals form on cooling).</li><li>4. Allow the saturated solution to cool slowly at room temperature undisturbed. Pure copper sulphate crystals separate out. Filter and dry the crystals with filter paper.</li></ul>',
      rubric: [
        ['Dissolution and filtration of impurities', '1 Mark'],
        ['Evaporation to crystallization point', '1 Mark'],
        ['Slow cooling and separation of pure crystals', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks (30–50 Words)',
      text: 'Calculate the concentration in mass percentage of a solution containing 40 g of common salt dissolved in 320 g of water.',
      answer: '<p><strong>Calculation:</strong></p><ul><li>Mass of solute (salt) = 40 g</li><li>Mass of solvent (water) = 320 g</li><li>Total mass of solution = 40 g + 320 g = 360 g</li><li>Mass % = (Mass of solute / Mass of solution) × 100 = (40 / 360) × 100 = 100 / 9 = <strong>11.11%</strong>.</li></ul>',
      rubric: [
        ['Calculating total mass of solution = 360 g', '1 Mark'],
        ['Formula and evaluation = 11.11%', '1 Mark']
      ]
    },
    {
      num: 8, marks: '3 Marks (50–80 Words)',
      text: 'Compare a true solution, a colloid, and a suspension based on: (i) particle size, (ii) appearance, and (iii) stability.',
      answer: '<p><strong>Comparison:</strong></p><ul><li><strong>Particle Size:</strong> True solution: &lt; 1 nm; Colloid: 1 nm to 1000 nm; Suspension: &gt; 1000 nm.</li><li><strong>Appearance:</strong> True solution: Clear and transparent; Colloid: Translucent / milky; Suspension: Opaque / cloudy.</li><li><strong>Stability:</strong> True solution: Completely stable (particles never settle); Colloid: Stable (particles do not settle on standing); Suspension: Unstable (particles settle at the bottom over time).</li></ul>',
      rubric: [
        ['Particle size row correct', '1 Mark'],
        ['Appearance row correct', '1 Mark'],
        ['Stability row correct', '1 Mark']
      ]
    },
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'What happens when a saturated solution of potassium nitrate at 60°C is cooled down to room temperature (25°C)? Explain why.',
      answer: '<p>The solubility of solids in liquids generally decreases as temperature drops. When a hot saturated solution of potassium nitrate cools from 60°C to 25°C, the water cannot hold all the dissolved solute. The excess solute precipitates out in the form of solid potassium nitrate crystals at the bottom of the container.</p>',
      rubric: [
        ['Observation: crystals precipitate out', '1 Mark'],
        ['Scientific reason: solubility decreases with falling temperature', '1 Mark']
      ]
    }
  ],

  ch10: [ // Needs 7 Qs: Q4 to Q10
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'State four key characteristics of the image formed by a plane mirror.',
      answer: '<p><strong>Characteristics of Image in Plane Mirror:</strong></p><ul><li>1. <strong>Virtual and Erect:</strong> The image cannot be projected onto a screen and is right side up.</li><li>2. <strong>Same Size:</strong> The image height equals the object height (Magnification m = +1).</li><li>3. <strong>Equidistant:</strong> The distance of the image behind the mirror equals the distance of the object in front of the mirror.</li><li>4. <strong>Laterally Inverted:</strong> The left side of the object appears as the right side in the image.</li></ul>',
      rubric: [
        ['Virtual and erect', '0.75 Mark'],
        ['Same size as object', '0.75 Mark'],
        ['Equal distance behind mirror', '0.75 Mark'],
        ['Laterally inverted', '0.75 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks (50–80 Words)',
      text: 'Differentiate between a real image and a virtual image with three points of difference.',
      answer: '<p><strong>Real Image vs Virtual Image:</strong></p><ul><li>1. <strong>Formation:</strong> A real image is formed when reflected or refracted rays actually intersect; a virtual image is formed when rays appear to diverge from a point behind the mirror/lens.</li><li>2. <strong>Screen Projection:</strong> A real image can be obtained on a screen; a virtual image cannot be captured on a screen.</li><li>3. <strong>Orientation:</strong> A real image is always inverted; a virtual image is always erect.</li></ul>',
      rubric: [
        ['Ray intersection difference', '1 Mark'],
        ['Capture on screen difference', '1 Mark'],
        ['Inverted vs erect orientation', '1 Mark']
      ]
    },
    {
      num: 6, marks: '3 Marks (50–80 Words)',
      text: 'Describe the nature, size, and position of the image formed by a convex lens when an object is placed:<br>(i) At 2F₁<br>(ii) Between F₁ and optical centre O',
      answer: '<p><strong>Image Formation by Convex Lens:</strong></p><ul><li>(i) <strong>Object at 2F₁:</strong> Image is formed at 2F₂ on the opposite side. Nature: <strong>Real and inverted</strong>. Size: <strong>Same size as the object</strong> (m = −1).</li><li>(ii) <strong>Object between F₁ and O:</strong> Image is formed on the same side as the object. Nature: <strong>Virtual and erect</strong>. Size: <strong>Magnified (enlarged)</strong> (used as a magnifying glass).</li></ul>',
      rubric: [
        ['(i) Position at 2F₂, real, inverted, same size', '1.5 Marks'],
        ['(ii) Position on same side, virtual, erect, magnified', '1.5 Marks']
      ]
    },
    {
      num: 7, marks: '2 Marks (30–50 Words)',
      text: 'What is dispersion of white light? Name the seven constituent colours in order from minimum deviation to maximum deviation.',
      answer: '<p><strong>Dispersion:</strong> The phenomenon of splitting white light into its seven constituent spectral colours when passing through a triangular glass prism.</p><p>In order from minimum deviation (top) to maximum deviation (bottom): <strong>Red, Orange, Yellow, Green, Blue, Indigo, and Violet (ROYGBIV)</strong>. Red bends the least because it has the longest wavelength; violet bends the most.</p>',
      rubric: [
        ['Definition of dispersion', '1 Mark'],
        ['Correct ROYGBIV sequence with deviation order', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'Why are convex mirrors universally used as rear-view (wing) mirrors in automobiles? Give two reasons.',
      answer: '<p>Convex mirrors are preferred as rear-view mirrors because:</p><ul><li>1. They always produce an <strong>erect, diminished virtual image</strong> of traffic behind.</li><li>2. Because they curve outward, they provide a much <strong>wider field of view</strong> than plane or concave mirrors, allowing drivers to see more road area behind.</li></ul>',
      rubric: [
        ['Erect and diminished image', '1 Mark'],
        ['Wider field of view', '1 Mark']
      ]
    },
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'What type of image is always formed by a concave lens, regardless of object distance?',
      answer: '<p>A concave (diverging) lens always forms an image that is:</p><ul><li>1. <strong>Virtual and Erect</strong></li><li>2. <strong>Diminished (smaller than the object)</strong></li><li>3. Located on the same side of the lens, between the optical centre O and principal focus F.</li></ul>',
      rubric: [
        ['Virtual and erect', '1 Mark'],
        ['Diminished and located between O and F', '1 Mark']
      ]
    },
    {
      num: 10, marks: '2 Marks (30–50 Words)',
      text: 'What is total internal reflection? Give two practical modern applications of this optical phenomenon.',
      answer: '<p><strong>Total Internal Reflection (TIR)</strong> occurs when light travelling in a denser medium strikes the boundary of a rarer medium at an angle of incidence greater than the critical angle, reflecting 100% of light back into the denser medium.</p><p><strong>Applications:</strong> (1) Optical fibre communications (high-speed internet), (2) Sparkling brilliance of cut diamonds, and (3) Medical endoscopes.</p>',
      rubric: [
        ['Definition with critical angle condition', '1 Mark'],
        ['Two applications (optical fibres, endoscopes, diamonds)', '1 Mark']
      ]
    }
  ],

  ch11: [ // Needs 6 Qs: Q4 to Q9
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'What causes the change of seasons on Earth? Explain why the 23.5° tilt of Earth\'s rotational axis is crucial.',
      answer: '<p>Seasons are caused by the combination of <strong>Earth\'s revolution around the Sun</strong> and the <strong>tilt of its rotational axis at 23.5°</strong>.</p><p>As Earth orbits the Sun, the tilted hemisphere leaning towards the Sun receives more direct sunlight and experiences longer daylight hours, resulting in Summer. The hemisphere tilted away receives slanted rays and shorter days, resulting in Winter. If Earth\'s axis were perpendicular, there would be no seasons.</p>',
      rubric: [
        ['Revolution + 23.5° axial tilt', '1.5 Marks'],
        ['Direct vs slanted rays and day length variation', '1.5 Marks']
      ]
    },
    {
      num: 5, marks: '2 Marks (30–50 Words)',
      text: 'Define a light year. Why is it used to express astronomical distances instead of kilometres?',
      answer: '<p>A <strong>light year</strong> is the distance traversed by light in vacuum in one Julian year (365.25 days). 1 Light Year ≈ 9.46 × 10¹² km (nearly 9.46 trillion kilometres).</p><p>Distances between stars and galaxies are so enormous that writing them in kilometres produces cumbersome, unmanageable numbers. Light years provide a practical astronomical scale.</p>',
      rubric: [
        ['Definition and value (~9.46 × 10¹² km)', '1 Mark'],
        ['Justification for immense cosmic scales', '1 Mark']
      ]
    },
    {
      num: 6, marks: '2 Marks (30–50 Words)',
      text: 'Describe the constellation Ursa Major (Saptarshi). How can it be used to locate the Pole Star (Polaris)?',
      answer: '<p><strong>Ursa Major (Great Bear / Saptarshi):</strong> A prominent group of seven bright stars arranged in the shape of a big ladle or question mark.</p><p><strong>Locating Pole Star:</strong> Look at the two "pointer stars" at the outer bowl of the ladle (Merak and Dubhe). Draw an imaginary straight line connecting them and extend it northward about five times the distance between them. It points directly to a moderately bright star—<strong>Polaris (the Pole Star)</strong>.</p>',
      rubric: [
        ['Shape of Saptarshi described', '1 Mark'],
        ['Method using two pointer stars', '1 Mark']
      ]
    },
    {
      num: 7, marks: '3 Marks (50–80 Words)',
      text: 'Differentiate between a solar eclipse and a lunar eclipse. State the Moon phase on which each occurs.',
      answer: '<p><strong>Solar Eclipse:</strong> Occurs when the Moon passes directly between the Sun and Earth, casting its shadow on Earth. It occurs exclusively on a <strong>New Moon day (Amavasya)</strong>.</p><p><strong>Lunar Eclipse:</strong> Occurs when the Earth passes directly between the Sun and the Moon, casting Earth\'s shadow on the Moon. It occurs exclusively on a <strong>Full Moon night (Poornima)</strong>.</p><p>Eclipses do not occur every month because the Moon\'s orbital plane is tilted 5° relative to Earth\'s ecliptic plane.</p>',
      rubric: [
        ['Solar eclipse alignment and New Moon phase', '1.5 Marks'],
        ['Lunar eclipse alignment and Full Moon phase', '1.5 Marks']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'What are shooting stars (meteors)? How do they differ from meteorites?',
      answer: '<p>A <strong>meteor</strong> ("shooting star") is a small piece of interplanetary rock or debris that enters Earth\'s atmosphere at high speed and burns up completely due to atmospheric friction, producing a glowing streak of light.</p><p>A <strong>meteorite</strong> is a larger meteoroid that does not burn up completely and actually survives the fiery atmospheric descent to hit Earth\'s surface.</p>',
      rubric: [
        ['Meteor definition (burns up in atmosphere)', '1 Mark'],
        ['Meteorite definition (reaches Earth surface)', '1 Mark']
      ]
    },
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'Differentiate between planets and stars with four points of comparison.',
      answer: '<p><strong>Planets vs Stars:</strong></p><ul><li>1. <strong>Light:</strong> Stars emit their own light; planets reflect sunlight.</li><li>2. <strong>Twinkling:</strong> Stars twinkle due to atmospheric refraction; planets do not twinkle.</li><li>3. <strong>Position:</strong> Stars appear stationary relative to each other; planets wander across constellations.</li><li>4. <strong>Size &amp; Temp:</strong> Stars are massive spheres of hot burning plasma; planets are much smaller, cooler solid/gaseous bodies.</li></ul>',
      rubric: [
        ['Light emission and twinkling differences', '1 Mark'],
        ['Relative position and physical nature differences', '1 Mark']
      ]
    }
  ],

  ch12: [ // Needs 6 Qs: Q4 to Q9
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'Construct a terrestrial food web consisting of grass, grasshopper, frog, snake, eagle, rabbit, and hawk. Identify the primary producer and top carnivores.',
      answer: '<p><strong>Food Web Construction:</strong></p><ul><li>Grass ➔ Grasshopper ➔ Frog ➔ Snake ➔ Eagle</li><li>Grass ➔ Rabbit ➔ Hawk / Eagle</li><li>Grass ➔ Grasshopper ➔ Hawk</li></ul><p><strong>Primary Producer:</strong> Green grass (synthesizes organic food by photosynthesis).<br><strong>Top Carnivores:</strong> Eagle and Hawk (occupy highest trophic levels without natural predators).</p>',
      rubric: [
        ['Interconnected food chain pathways', '1.5 Marks'],
        ['Identification of grass as producer and eagle/hawk as top carnivores', '1.5 Marks']
      ]
    },
    {
      num: 5, marks: '3 Marks (50–80 Words)',
      text: 'Explain Lindeman\'s 10% law of energy transfer in an ecosystem. Why are food chains rarely longer than 4 to 5 trophic levels?',
      answer: '<p><strong>10% Law:</strong> Only approximately <strong>10% of the energy</strong> entering a trophic level is stored as biomass and made available to the next trophic level. The remaining 90% is dissipated as metabolic heat during respiration, movement, and excretion.</p><p><strong>Limitation of Food Chain Length:</strong> Because 90% energy is lost at each successive step, very little usable energy remains after 4 or 5 levels. Insufficient energy remains to sustain a viable population of higher-order carnivores.</p>',
      rubric: [
        ['Statement of 10% law (90% loss as heat)', '1.5 Marks'],
        ['Explanation of why chains cannot exceed 4-5 steps', '1.5 Marks']
      ]
    },
    {
      num: 6, marks: '3 Marks (50–80 Words)',
      text: 'What is biomagnification? Explain with the example of non-biodegradable pesticides like DDT in an aquatic food chain.',
      answer: '<p><strong>Biomagnification</strong> is the progressive increase in the concentration of toxic, non-biodegradable chemicals at each successive trophic level in a food chain.</p><p><strong>Example (DDT in Water):</strong> When DDT enters water bodies (0.000003 ppm), it is absorbed by zooplankton (0.04 ppm), accumulated in small fish (0.5 ppm), concentrated in large fish (2 ppm), and reaches dangerous lethal levels in fish-eating birds like ospreys (25 ppm), causing eggshell thinning and bird population collapse.</p>',
      rubric: [
        ['Definition of biomagnification', '1 Mark'],
        ['DDT aquatic chain example showing stepwise concentration rise', '2 Marks']
      ]
    },
    {
      num: 7, marks: '2 Marks (30–50 Words)',
      text: 'Describe the role of symbiotic Rhizobium bacteria in the nitrogen cycle and maintaining soil fertility.',
      answer: '<p><em>Rhizobium</em> bacteria live in the root nodules of leguminous plants (peas, beans, gram). They convert atmospheric inert nitrogen gas (N₂) into water-soluble nitrogen compounds (nitrates) that plants absorb to synthesize proteins. In return, the plant provides food and shelter. When crop residues decay, they enrich the soil naturally with nitrates, eliminating the need for synthetic chemical fertilizers.</p>',
      rubric: [
        ['Symbiotic nitrogen fixation into nitrates', '1 Mark'],
        ['Enrichment of soil fertility and reducing chemical fertilizer', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'What are the major ecological impacts of large-scale deforestation on climate and soil?',
      answer: '<p><strong>Ecological Impacts of Deforestation:</strong></p><ul><li>1. <strong>Soil Erosion &amp; Desertification:</strong> Tree roots anchor topsoil; without trees, wind and rain wash fertile soil away, transforming fertile land into deserts.</li><li>2. <strong>Disrupted Water Cycle &amp; Droughts:</strong> Reduced transpiration lowers atmospheric humidity, causing decreased rainfall and droughts.</li><li>3. <strong>Global Warming:</strong> Less CO₂ is sequestered by trees, increasing atmospheric CO₂ levels.</li></ul>',
      rubric: [
        ['Soil erosion and desertification', '1 Mark'],
        ['Reduced rainfall and enhanced greenhouse warming', '1 Mark']
      ]
    },
    {
      num: 9, marks: '2 Marks (30–50 Words)',
      text: 'Differentiate between in-situ conservation and ex-situ conservation of biodiversity with one example of each.',
      answer: '<p><strong>In-situ Conservation (On-site):</strong> Protecting endangered species in their natural habitats and ecosystems. <em>Examples:</em> National Parks (e.g., Jim Corbett), Wildlife Sanctuaries, and Biosphere Reserves.</p><p><strong>Ex-situ Conservation (Off-site):</strong> Protecting endangered species outside their natural habitat in human-managed facilities. <em>Examples:</em> Zoological parks, Botanical gardens, and Cryogenic seed banks.</p>',
      rubric: [
        ['In-situ definition and example', '1 Mark'],
        ['Ex-situ definition and example', '1 Mark']
      ]
    }
  ],

  ch13: [ // Needs 5 Qs: Q4 to Q8
    {
      num: 4, marks: '3 Marks (50–80 Words)',
      text: 'Explain the vital role of the ozone layer in the stratosphere. What chemicals caused the ozone hole, and how was it mitigated globally?',
      answer: '<p><strong>Role of Ozone Layer:</strong> Located in the stratosphere, the ozone layer (O₃) absorbs harmful high-energy Ultraviolet-B (UV-B) rays from the Sun, preventing skin cancer, cataracts, and immune damage in humans and protecting marine plankton.</p><p><strong>Depleting Chemicals:</strong> Chlorofluorocarbons (CFCs) used in refrigerators, air conditioners, and aerosol sprays release chlorine radicals that catalytically destroy ozone molecules.</p><p><strong>Mitigation:</strong> The landmark international <strong>Montreal Protocol (1987)</strong> successfully phased out CFC production and replaced them with eco-friendly alternatives.</p>',
      rubric: [
        ['Absorption of solar UV radiation', '1 Mark'],
        ['Role of CFCs in ozone destruction', '1 Mark'],
        ['Montreal Protocol international phaseout', '1 Mark']
      ]
    },
    {
      num: 5, marks: '3 Marks (50–80 Words)',
      text: 'What is acid rain? Explain the chemical reactions causing it and state two damaging effects on monuments and aquatic ecosystems.',
      answer: '<p><strong>Acid Rain:</strong> Precipitation with pH below 5.6 caused by airborne industrial emissions of sulphur dioxide (SO₂) and nitrogen oxides (NOₓ).</p><p><strong>Reactions:</strong> SO₂ and NO₂ react with atmospheric water vapor and oxygen to form dilute sulphuric acid (H₂SO₄) and nitric acid (HNO₃):<br>SO₂ + H₂O + [O] ➔ H₂SO₄<br>2NO₂ + H₂O + [O] ➔ 2HNO₃.</p><p><strong>Damaging Effects:</strong> (1) Corrodes marble monuments like Taj Mahal ("marble cancer": CaCO₃ + H₂SO₄ ➔ CaSO₄ + H₂O + CO₂), (2) Acidifies lakes and rivers, killing fish and aquatic organisms.</p>',
      rubric: [
        ['Definition and acid formation reactions', '1.5 Marks'],
        ['Marble corrosion and aquatic ecosystem damage', '1.5 Marks']
      ]
    },
    {
      num: 6, marks: '2 Marks (30–50 Words)',
      text: 'Explain the 5 R principles of waste management for sustainable environmental conservation.',
      answer: '<p><strong>The 5 R Principles:</strong></p><ul><li>1. <strong>Refuse:</strong> Say no to single-use plastics and unnecessary packaging.</li><li>2. <strong>Reduce:</strong> Minimize consumption of resources and generation of waste.</li><li>3. <strong>Reuse:</strong> Use items repeatedly (e.g., cloth bags, glass jars) instead of discarding.</li><li>4. <strong>Repurpose:</strong> Give old items a new functional role (e.g., using tires as garden planters).</li><li>5. <strong>Recycle:</strong> Process segregated waste materials (paper, metals, glass) to manufacture new items.</li></ul>',
      rubric: [
        ['Listing 5 Rs', '1 Mark'],
        ['Brief practical explanation of each R', '1 Mark']
      ]
    },
    {
      num: 7, marks: '2 Marks (30–50 Words)',
      text: 'How does enhanced global warming lead to rising sea levels and extreme global weather events?',
      answer: '<p>Global warming traps excess heat in the climate system. This leads to:</p><ul><li>1. <strong>Thermal Expansion:</strong> Ocean water expands in volume as it absorbs atmospheric heat.</li><li>2. <strong>Glacial Melting:</strong> Accelerated melting of polar ice sheets (Greenland, Antarctica) adds massive water volumes to oceans, raising sea levels and flooding coastal cities.</li><li>3. <strong>Extreme Weather:</strong> Warmer oceans fuel more frequent and intense cyclones, severe heatwaves, and erratic flash floods.</li></ul>',
      rubric: [
        ['Thermal expansion of ocean water', '1 Mark'],
        ['Glacial melt and intense weather disasters', '1 Mark']
      ]
    },
    {
      num: 8, marks: '2 Marks (30–50 Words)',
      text: 'Suggest five practical, eco-friendly habits that students can adopt in their daily lives to conserve energy and natural resources.',
      answer: '<p><strong>Eco-Friendly Student Practices:</strong></p><ul><li>1. Switch off lights, fans, and electronics when leaving a room.</li><li>2. Walk or use bicycles for short commutes instead of motor vehicles.</li><li>3. Turn off water taps while brushing teeth and fix leaking faucets promptly.</li><li>4. Use both sides of notebook paper and recycle old textbooks.</li><li>5. Plant trees on school campuses and maintain a kitchen compost bin for organic waste.</li></ul>',
      rubric: [
        ['Energy conservation habits', '1 Mark'],
        ['Resource & water conservation habits', '1 Mark']
      ]
    }
  ]
};

function formatScienceCard(chId, q) {
  const cardId = `q_${chId}_${q.num}`;
  const rubricHtml = q.rubric.map(r => `              <div class="marking-row"><span class="marking-key">${r[0]}</span><span class="marking-marks">${r[1]}</span></div>`).join('\n');

  return `      <div class="q-card" id="${cardId}">
        <div class="q-head" onclick="toggleQ('${cardId}')">
          <div class="q-num">Q${q.num}</div>
          <div class="q-text">${q.text}</div>
          <div class="q-marks">${q.marks}</div>
          <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
        </div>
        <div class="q-answer">
          <div class="answer-box">
            <div class="answer-label">✅ CBSE Standard Answer</div>
            <div class="answer-text">
              ${q.answer}
            </div>
            <div class="marking-scheme">
              <div class="marking-title">CBSE Marking Scheme</div>
${rubricHtml}
            </div>
          </div>
        </div>
      </div>`;
}

console.log('Injecting 68 missing questions into Class 8 Science...');

let html = fs.readFileSync(FILE, 'utf8');

for (let i = 1; i <= 13; i++) {
  const chId = `ch${i}`;
  const additions = SCIENCE_ADDITIONS[chId] || [];
  if (additions.length === 0) continue;

  const cardsHtml = additions.map(q => formatScienceCard(chId, q)).join('\n\n');

  // Match section
  const secRegex = new RegExp(`(<section[^>]*id="${chId}"[^>]*>[\\s\\S]*?)(<div class="cbq-section">|<div class="ch-nav-btns">|<\\/section>)`);
  const match = html.match(secRegex);
  if (match) {
    const beforeInsert = match[1];
    const boundary = match[2];
    html = html.replace(secRegex, `${beforeInsert}${cardsHtml}\n\n      ${boundary}`);
    console.log(`[${chId}] Successfully injected ${additions.length} questions.`);
  } else {
    console.error(`Failed to find section for ${chId}`);
  }
}

fs.writeFileSync(FILE, html, 'utf8');
console.log('Class 8 Science update complete!');
