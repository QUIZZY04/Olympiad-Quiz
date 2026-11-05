// scripts/builders/gen-c12b-ch11.js
// Chapter 11: Organisms and Populations (18 Questions)
const { createQCard, saveChapter } = require('./c12b-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#059669; font-size:1.05rem;">🧬 Population Ecology Map: Growth Curves, Age Pyramids & Interspecific Interactions</h4>
  <svg viewBox="0 0 880 300" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #d1fae5;">
    <!-- Growth Curves -->
    <rect x="20" y="20" width="280" height="260" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="160" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">Population Growth Models</text>
    <line x1="35" y1="56" x2="285" y2="56" stroke="#10b981" stroke-width="1.5"/>

    <!-- Graph axes -->
    <line x1="50" y1="210" x2="260" y2="210" stroke="#334155" stroke-width="2"/>
    <line x1="50" y1="210" x2="50" y2="70" stroke="#334155" stroke-width="2"/>
    <text x="250" y="225" font-family="sans-serif" font-size="10" fill="#334155">Time (t)</text>
    <text x="35" y="80" font-family="sans-serif" font-size="10" fill="#334155" transform="rotate(-90 35,80)">Density (N)</text>

    <!-- Carrying Capacity K -->
    <line x1="50" y1="120" x2="260" y2="120" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="265" y="124" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">K</text>

    <!-- Exponential curve (J-shaped) -->
    <path d="M 50 205 Q 150 200, 190 75" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <text x="195" y="85" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb">dN/dt = rN</text>

    <!-- Logistic curve (Sigmoid / S-shaped) -->
    <path d="M 50 205 Q 110 200, 140 160 Q 170 125, 250 122" fill="none" stroke="#16a34a" stroke-width="2.5"/>
    <text x="150" y="150" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#166534">dN/dt = rN(K-N)/K</text>

    <text x="50" y="245" font-family="sans-serif" font-size="10" fill="#2563eb">&bull; J-shape: Unlimited resources</text>
    <text x="50" y="262" font-family="sans-serif" font-size="10" fill="#16a34a">&bull; S-shape: Realistic carrying capacity (K)</text>

    <!-- Age Pyramids Card -->
    <rect x="320" y="20" width="260" height="260" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="450" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Human Age Pyramids</text>
    <line x1="335" y1="56" x2="565" y2="56" stroke="#3b82f6" stroke-width="1.5"/>

    <!-- Triangular / Expanding -->
    <polygon points="340,160 380,75 420,160" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
    <text x="380" y="180" font-family="sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Expanding</text>
    <text x="380" y="195" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">Pre-rep &gt; Rep</text>

    <!-- Bell-shaped / Stable -->
    <path d="M 440 160 L 455 100 Q 475 75, 495 100 L 510 160 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <text x="475" y="180" font-family="sans-serif" font-size="10" font-weight="bold" fill="#c2410c" text-anchor="middle">Stable</text>
    <text x="475" y="195" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">Pre-rep = Rep</text>

    <text x="335" y="230" font-family="sans-serif" font-size="10.5" fill="#334155">&bull; <strong>Pre-reproductive:</strong> 0&ndash;14 years</text>
    <text x="335" y="246" font-family="sans-serif" font-size="10.5" fill="#334155">&bull; <strong>Reproductive:</strong> 15&ndash;44 years</text>
    <text x="335" y="262" font-family="sans-serif" font-size="10.5" fill="#334155">&bull; <strong>Post-reproductive:</strong> 45+ years</text>

    <!-- Interspecific Interactions Card -->
    <rect x="600" y="20" width="260" height="260" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">Interspecific Interactions</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#ef4444" stroke-width="1.5"/>

    <text x="615" y="80" font-family="sans-serif" font-size="11" fill="#334155"><strong>Mutualism:</strong> (+ , +) &bull; Lichen, Mycorrhiza</text>
    <text x="615" y="105" font-family="sans-serif" font-size="11" fill="#334155"><strong>Competition:</strong> (- , -) &bull; Gause's Principle</text>
    <text x="615" y="130" font-family="sans-serif" font-size="11" fill="#334155"><strong>Predation:</strong> (+ , -) &bull; Tiger & Deer</text>
    <text x="615" y="155" font-family="sans-serif" font-size="11" fill="#334155"><strong>Parasitism:</strong> (+ , -) &bull; Cuscuta, Liver fluke</text>
    <text x="615" y="180" font-family="sans-serif" font-size="11" fill="#334155"><strong>Commensalism:</strong> (+ , 0) &bull; Orchid on Mango</text>
    <text x="615" y="205" font-family="sans-serif" font-size="11" fill="#334155"><strong>Amensalism:</strong> (- , 0) &bull; <em>Penicillium</em> & Bacteria</text>

    <text x="615" y="240" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#991b1b">Allen's Rule: Shorter ears/limbs in cold</text>
    <text x="615" y="258" font-family="sans-serif" font-size="10.5" fill="#047857">Resource Partitioning: MacArthur's warblers</text>
  </svg>
</div>`;

const questions = [];

// Q1
questions.push(createQCard(
  'c12b-ch11-q1',
  'Q1',
  'Exercises (NCERT Verbatim)',
  'How is diapause different from hibernation?',
  `<p>Both diapause and hibernation represent physiological adaptations of organisms to avoid stressful environmental conditions by escaping through time, but they differ fundamentally in developmental arrest and taxonomic occurrence:</p>
  
  <table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:0.9rem;">
    <thead>
      <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
        <th style="padding:6px 10px; color:#065f46; width:50%;">Diapause</th>
        <th style="padding:6px 10px; color:#065f46; width:50%;">Hibernation (Winter Sleep)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;">A state of <strong>suspended development</strong> characterized by complete cessation of cellular growth and differentiation.</td>
        <td style="padding:6px 10px;">A state of <strong>metabolic dormancy</strong> where metabolic rate, heart rate, and body temperature drop to near-dormancy to conserve energy.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;">Commonly observed in developmental life stages (eggs, pupae, larvae) of <strong>zooplankton and insects</strong> in response to adverse seasonal changes.</td>
        <td style="padding:6px 10px;">Observed in adult ectothermic and endothermic vertebrates (e.g., <strong>bears, frogs, lizards, rodents</strong>) strictly during extreme winter cold.</td>
      </tr>
      <tr>
        <td style="padding:6px 10px;">Can occur at any season (summer or winter) triggered by photoperiod or food scarcity.</td>
        <td style="padding:6px 10px;">Strictly seasonal winter dormancy (contrasted with aestivation, which is summer sleep).</td>
      </tr>
    </tbody>
  </table>`,
  '2 Marks',
  [
    ['Diapause: Suspended development in zooplankton/insects during adverse conditions', '1 Mark'],
    ['Hibernation: Metabolic winter dormancy in vertebrates (bears, frogs) escaping cold', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c12b-ch11-q2',
  'Q2',
  'Exercises (NCERT Verbatim)',
  'If a marine fish is placed in a fresh water aquarium, will the fish be able to survive? Why or why not?',
  `<p><strong>No, the marine fish will NOT be able to survive.</strong></p>
  <p><strong>Scientific Explanation (Osmoregulatory Failure):</strong></p>
  <ol>
    <li><strong>Hypotonic Stress & Severe Endosmosis:</strong>
      <ul>
        <li>Fresh water is <strong>hypotonic</strong> (very low salinity, &lt; 5 ppt) compared to the hypertonic internal body fluids and tissues of the marine fish.</li>
        <li>Consequently, water will continuously rush into the fish's body across its semi-permeable membranes (gills, oral mucosa) through <strong>endosmosis</strong>.</li>
      </ul>
    </li>
    <li><strong>Inability to Cope with Osmotic Swelling:</strong>
      <ul>
        <li>Marine fish are biologically adapted to live in a hypertonic environment: they constantly drink seawater, excrete concentrated salt ions via specialized chloride secretory cells in their gills, and produce minimal, concentrated urine.</li>
        <li>In a freshwater aquarium, the fish's kidneys cannot pump out such massive volumes of incoming water. Its cells and blood vessels swell, tissues suffer severe oedema, erythrocytes burst (haemolysis), and the fish dies of osmoregulatory shock.</li>
      </ul>
    </li>
  </ol>`,
  '2 Marks',
  [
    ['Clear negative answer: No, the fish will not survive', '0.5 Mark'],
    ['Osmotic explanation: Freshwater is hypotonic causing continuous endosmosis of water into body', '1 Mark'],
    ['Cell swelling, bursting (haemolysis), and osmoregulatory failure', '0.5 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c12b-ch11-q3',
  'Q3',
  'Exercises (NCERT Verbatim)',
  'Most living organisms cannot survive at temperatures above 45&deg;C. How are some microbes able to live in habitats with temperatures exceeding 100&deg;C?',
  `<p>Thermophilic and hyperthermophilic archaebacteria (e.g., <strong><em>Thermus aquaticus, Methanopyrus, Pyrococcus</em></strong>) survive in superheated hydrothermal vents and hot sulfur springs (&gt; 100&deg;C) due to unique macromolecular and membrane adaptations:</p>
  <ol>
    <li><strong>Thermostable Enzymes & Proteins:</strong>
      <ul>
        <li>Their catalytic enzymes (such as <strong><em>Taq</em> DNA polymerase</strong>) have highly stabilized tertiary and quaternary conformations.</li>
        <li>They possess an unusually high density of <strong>disulphide (-S-S-) covalent bridges, extensive salt bridges (ionic bonds), hydrophobic core packing, and elevated proline residues</strong> that prevent thermal unfolding and denaturation even at boiling temperatures.</li>
      </ul>
    </li>
    <li><strong>Unique Ether-Linked Branched Lipid Membranes:</strong>
      <ul>
        <li>Unlike the ester-linked unbranched fatty acids found in eubacteria and eukaryotes, archaebacterial cell membranes are made of <strong>ether-linked, branched phytanyl lipid chains</strong>.</li>
        <li>In extreme hyperthermophiles, these form a rigid, continuous <strong>lipid monolayer</strong> (instead of a bilayer) that prevents heat-induced membrane fluidization, disintegration, and lethal cellular leakage.</li>
      </ul>
    </li>
    <li><strong>DNA Stabilization (Reverse DNA Gyrase):</strong>
      <ul>
        <li>They express specialized enzymes like <strong>reverse DNA gyrase</strong> that introduce positive supercoils into DNA, preventing thermal denaturation of the double helix.</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['Thermostable enzymes (Taq polymerase) with dense disulfide/ionic bonds preventing thermal denaturation', '1 Mark'],
    ['Unique ether-linked branched lipid monolayer membranes maintaining membrane integrity', '1 Mark'],
    ['Reverse DNA gyrase maintaining double-stranded DNA stability at >100°C', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c12b-ch11-q4',
  'Q4',
  'Exercises (NCERT Verbatim)',
  'List the attributes that populations possess but not individuals.',
  `<p>An individual organism is born, reproduces, and dies; however, a <strong>biological population</strong> (a group of individuals of the same species occupying a defined geographical area) exhibits collective emergent ecological attributes that an individual organism cannot have:</p>
  <ol>
    <li><strong>Birth Rate (Natality):</strong> Expressed as the number of new individuals added per unit population per unit time (e.g., if 20 lotus plants in a pond increase to 28 in a year, birth rate is 8/20 = 0.4 offspring per lotus per year). An individual has a birth, but not a birth rate.</li>
    <li><strong>Death Rate (Mortality):</strong> Expressed as the number of individuals dying per unit population per unit time. An individual dies, but only a population has a mortality rate.</li>
    <li><strong>Sex Ratio:</strong> An individual is either male or female, but a population possesses a <strong>sex ratio</strong> (e.g., 60% of the population are females and 40% are males).</li>
    <li><strong>Age Distribution & Age Pyramids:</strong> A population is composed of individuals of diverse age groups grouped into <em>pre-reproductive, reproductive, and post-reproductive cohorts</em>, forming distinct age pyramids (expanding, stable, or declining).</li>
    <li><strong>Population Density / Size:</strong> The total number or biomass of individuals inhabiting a unit area or volume (N) at a given point in time.</li>
    <li><strong>Gene Pool & Allele Frequencies:</strong> The sum total of all genes and alleles in a population obeying Hardy-Weinberg equilibrium.</li>
  </ol>`,
  '3 Marks',
  [
    ['Birth rate (Natality) and Death rate (Mortality) per capita rates vs individual birth/death', '1 Mark'],
    ['Sex ratio and Population density/size', '1 Mark'],
    ['Age distribution/pyramids and population gene pool', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c12b-ch11-q5',
  'Q5',
  'Exercises (NCERT Verbatim)',
  `Differentiate between the following:
  <br>(a) Exponential growth and Logistic growth
  <br>(b) Birth rate and Death rate
  <br>(c) Emigration and Immigration`,
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(a) Exponential Growth vs Logistic Growth</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">Exponential Growth (J-shaped)</th>
          <th style="padding:6px 10px; width:50%;">Logistic Growth (S-shaped / Sigmoid)</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Occurs when environmental resources (food and space) are <strong>unlimited</strong>.</td>
          <td style="padding:6px 10px;">Occurs when resources are <strong>finite and limiting</strong>, defining a carrying capacity (K).</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Equation: <strong>dN/dt = rN</strong>. Population increases indefinitely until sudden crash.</td>
          <td style="padding:6px 10px;">Equation: <strong>dN/dt = rN [(K - N) / K]</strong>. Exhibits lag, acceleration, deceleration, and asymptote phases.</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Unrealistic in nature.</td>
          <td style="padding:6px 10px;">Most realistic model of natural population dynamics.</td>
        </tr>
      </table>
    </div>

    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(b) Birth Rate vs Death Rate</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">Birth Rate (Natality)</th>
          <th style="padding:6px 10px; width:50%;">Death Rate (Mortality)</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Number of new individuals added into the population per capita per unit time through reproduction.</td>
          <td style="padding:6px 10px;">Number of individuals lost from the population per capita per unit time due to death.</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Increases overall population size and density.</td>
          <td style="padding:6px 10px;">Decreases overall population size and density.</td>
        </tr>
      </table>
    </div>

    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(c) Emigration vs Immigration</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">Emigration (E)</th>
          <th style="padding:6px 10px; width:50%;">Immigration (I)</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">The number of individuals of the population who left the habitat and moved elsewhere during a given time period.</td>
          <td style="padding:6px 10px;">The number of individuals of the same species that have come into the habitat from elsewhere during a given time period.</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Contributes negatively to population density (-E).</td>
          <td style="padding:6px 10px;">Contributes positively to population density (+I).</td>
        </tr>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['(a) Exponential (unlimited resources, dN/dt=rN, J-shape) vs Logistic (limited resources, carrying capacity K, S-shape)', '1 Mark'],
    ['(b) Birth rate (per capita additions) vs Death rate (per capita losses)', '1 Mark'],
    ['(c) Emigration (individuals leaving habitat) vs Immigration (individuals entering habitat)', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c12b-ch11-q6',
  'Q6',
  'Exercises (NCERT Verbatim)',
  'If in a population of 50 water hyacinth plants, 10 new plants were added through reproduction in a month, calculate the birth rate of the population.',
  `<p><strong>Calculation of Per Capita Birth Rate:</strong></p>
  <ul>
    <li>Initial population size (<em>N</em>) = <strong>50 water hyacinth plants</strong></li>
    <li>Number of new plants added through reproduction (&Delta;<em>N</em>) = <strong>10 plants</strong></li>
    <li>Time interval (&Delta;<em>t</em>) = <strong>1 month</strong></li>
  </ul>

  <div style="background:#f8fafc; padding:12px 14px; border-left:4px solid #059669; margin:8px 0; font-family:monospace; font-size:1rem;">
    Birth Rate = &Delta;N / (N &times; &Delta;t)<br>
    Birth Rate = 10 / 50 = <strong>0.2 offspring per water hyacinth plant per month</strong>.
  </div>

  <p><strong>Conclusion:</strong> The birth rate of the water hyacinth population is <strong>0.2 plants per water hyacinth per month</strong> (or 20% increase per month).</p>`,
  '2 Marks',
  [
    ['Formula for per capita birth rate = Number of new additions / Initial population size', '1 Mark'],
    ['Substitution leading to correct answer: 10 / 50 = 0.2 offspring per water hyacinth per month', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c12b-ch11-q7',
  'Q7',
  'Exercises (NCERT Verbatim)',
  'Define phenotypic adaptation. Give one example.',
  `<p><strong>Definition:</strong></p>
  <p>A <strong>phenotypic adaptation</strong> is any non-genetic, physiological, morphological, or behavioural change that develops in an organism during its lifetime in response to an environmental stress, allowing it to survive and reproduce in that altered habitat without changing its genotype.</p>

  <p><strong>Classic Example: Altitude Sickness Acclimatisation in Humans:</strong></p>
  <ul>
    <li>When a person moves from sea level to high altitude (&gt; 3,500 metres, e.g., Rohtang Pass or Leh), they experience <strong>altitude sickness</strong> due to low atmospheric pressure and resultant hypoxia (nausea, fatigue, heart palpitations).</li>
    <li>Over several days, the human body exhibits a phenotypic physiological adaptation:
      <ol>
        <li>Kidneys secrete increased <strong>erythropoietin</strong>, stimulating bone marrow to <strong>increase total RBC production</strong>.</li>
        <li>The binding affinity of haemoglobin for oxygen decreases, facilitating easier oxygen unloading in tissues.</li>
        <li>Breathing rate increases substantially.</li>
      </ol>
    </li>
    <li>Within 1–2 weeks, the symptoms disappear, demonstrating full phenotypic acclimatisation.</li>
  </ul>`,
  '2 Marks',
  [
    ['Definition of phenotypic adaptation: Non-genetic physiological/behavioural acclimatisation to stress', '1 Mark'],
    ['Detailed example: Altitude sickness acclimatisation (increasing RBC count and breathing rate)', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c12b-ch11-q8',
  'Q8',
  'Exercises (NCERT Verbatim)',
  'Most living organisms tolerate a narrow range of temperature (such animals are called stenothermal). How do organisms manage if environmental temperatures get beyond tolerance limits?',
  `<p>When ambient temperatures exceed an organism's narrow stenothermal tolerance limits, they employ one or more of the following survival strategies:</p>
  <ol>
    <li><strong>Migration (Escape in Space):</strong>
      <ul>
        <li>Organisms move away temporarily from the stressful habitat to a hospitable area and return when the stressful period is over.</li>
        <li><em>Example:</em> Every winter, thousands of migratory birds (e.g., Siberian cranes) fly thousands of kilometres from freezing Siberia to Keoladeo National Park (Bharatpur, Rajasthan).</li>
      </ul>
    </li>
    <li><strong>Suspension (Escape in Time):</strong>
      <ul>
        <li><strong>Hibernation (Winter Sleep):</strong> Ectotherms (bears, frogs, lizards) retreat into caves/mud during extreme winter, lowering their metabolism.</li>
        <li><strong>Aestivation (Summer Sleep):</strong> Snails and lungfishes burrow into damp mud during hot, dry summer months to avoid desiccation and heat stress.</li>
        <li><strong>Diapause:</strong> Many species of zooplankton in lakes enter suspended developmental arrest during unfavorable seasonal temperatures.</li>
      </ul>
    </li>
    <li><strong>Behavioural Thermoregulation:</strong>
      <ul>
        <li>Desert lizards lack internal physiological thermoregulation. When body temperature drops below comfort zone, they bask in the sun to absorb heat; when ambient temperature gets dangerously high, they move into cool subterranean burrows.</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['Migration: Moving to hospitable zones (Siberian cranes to Bharatpur)', '1 Mark'],
    ['Suspension in time: Hibernation (bears in winter), Aestivation (snails in summer), and Diapause', '1 Mark'],
    ['Behavioural adaptations: Basking and burrowing in desert lizards', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c12b-ch11-q9',
  'Q9',
  'Exercises (NCERT Verbatim)',
  `Define the following terms and give one example for each:
  <br>(a) Commensalism
  <br>(b) Parasitism
  <br>(c) Camouflage
  <br>(d) Mutualism
  <br>(e) Interspecific competition`,
  `<div style="display:flex; flex-direction:column; gap:12px;">
    <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #059669;">
      <strong>(a) Commensalism (+, 0):</strong> An interaction between two species where one species is benefited while the other species is neither benefited nor harmed.
      <br><em>Example:</em> An epiphytic <strong>orchid</strong> growing on the branch of a mango tree, or <strong>barnacles</strong> growing on the back of a whale.
    </div>
    <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #059669;">
      <strong>(b) Parasitism (+, -):</strong> An interaction where one organism (the parasite) lives on or inside another organism (the host), deriving nourishment and shelter while causing physiological harm.
      <br><em>Example:</em> <strong><em>Cuscuta</em></strong> (dodder) parasitising hedge plants, or <strong>liver fluke</strong> parasitising sheep and snail hosts.
    </div>
    <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #059669;">
      <strong>(c) Camouflage:</strong> A cryptic morphological coloration or pattern evolved by prey species that blends seamlessly with the background to avoid detection by visual predators.
      <br><em>Example:</em> <strong>Stick insects</strong> resembling dry twigs, or cryptically coloured tree frogs and leaf-mimicking insects.
    </div>
    <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #059669;">
      <strong>(d) Mutualism (+, +):</strong> An obligate interaction between two species that confers mutual survival benefits to both interacting partners.
      <br><em>Example:</em> <strong>Lichens</strong> (symbiotic association between an alga/cyanobacterium and a fungus), or <strong>mycorrhiza</strong>, or the mutualism between <strong>fig tree and wasp</strong>.
    </div>
    <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #059669;">
      <strong>(e) Interspecific Competition (-, -):</strong> An interaction occurring between individuals of two distinct species competing for the same limited ecological resources (food, space, light).
      <br><em>Example:</em> Visiting <strong>flamingos and resident fishes</strong> competing for common zooplankton in shallow South American lakes.
    </div>
  </div>`,
  '5 Marks',
  [
    ['(a) Commensalism definition (+, 0) and example (orchid on mango/barnacle on whale)', '1 Mark'],
    ['(b) Parasitism definition (+, -) and example (Cuscuta / Liver fluke)', '1 Mark'],
    ['(c) Camouflage definition and example (cryptic frogs / stick insect)', '1 Mark'],
    ['(d) Mutualism definition (+, +) and example (Lichen / Fig-wasp)', '1 Mark'],
    ['(e) Interspecific competition (-, -) and example (Flamingos and fish for zooplankton)', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c12b-ch11-q10',
  'Q10',
  'Exercises (NCERT Verbatim)',
  'With the help of suitable diagram describe the logistic population growth curve.',
  `<p><strong>Logistic Population Growth (Verhulst-Pearl Logistic Growth):</strong></p>
  <p>In nature, environmental resources (food and space) are finite. A population growing in a limited environment exhibits a characteristic <strong>sigmoid (S-shaped) curve</strong> governed by the carrying capacity (<em>K</em>).</p>

  <p><strong>The Four Distinct Phases:</strong></p>
  <ol>
    <li><strong>Lag Phase:</strong> Initial period of slow population growth as individuals adapt to their environment.</li>
    <li><strong>Phase of Acceleration (Log / Exponential Phase):</strong> Rapid population expansion where birth rate substantially exceeds death rate.</li>
    <li><strong>Phase of Deceleration:</strong> Growth slows down as increasing population density causes intense competition for shrinking resources.</li>
    <li><strong>Asymptote:</strong> Population density reaches the habitat's maximum sustainable limit, known as the <strong>Carrying Capacity (<em>K</em>)</strong>. Birth rate equals death rate, stabilizing the population.</li>
  </ol>

  <p><strong>Differential Mathematical Equation:</strong></p>
  <div style="background:#f0fdf4; padding:12px 16px; border:1px solid #86efac; border-radius:8px; margin:10px 0; font-family:monospace; font-size:1.1rem; color:#065f46; text-align:center;">
    dN / dt = rN &times; [ (K - N) / K ]
  </div>
  <ul>
    <li><strong>N:</strong> Population density at time <em>t</em></li>
    <li><strong>r:</strong> Intrinsic rate of natural increase</li>
    <li><strong>K:</strong> Carrying capacity of the habitat</li>
    <li><strong>(K - N) / K:</strong> Environmental resistance factor</li>
  </ul>`,
  '3 Marks',
  [
    ['Description of Sigmoid (S-shaped) curve and 4 phases (Lag, Acceleration, Deceleration, Asymptote)', '1 Mark'],
    ['Accurate differential equation: dN/dt = rN[(K - N)/K] with notation definitions', '1 Mark'],
    ['Concept of Carrying Capacity (K) representing environmental resistance limit', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c12b-ch11-q11',
  'Q11',
  'Exercises (NCERT Verbatim)',
  `Select the statement which best explains parasitism.
  <br>(a) One organism is benefited.
  <br>(b) Both the organisms are benefited.
  <br>(c) One organism is benefited, other is not affected.
  <br>(d) One organism is benefited, other is affected.`,
  `<p><strong>Correct Option: (d) One organism is benefited, other is affected.</strong></p>
  <p><strong>Explanation:</strong></p>
  <ul>
    <li>In a parasitic ecological relationship, one interacting partner (the <strong>parasite</strong>) derives nutritional sustenance and shelter, and is thus <strong>benefited (+)</strong>.</li>
    <li>The other partner (the <strong>host</strong>) is deprived of vital nutrients, sustains physiological damage, impaired growth, reduced reproductive fitness, and vulnerability to predators, and is thus <strong>harmed / negatively affected (-)</strong>.</li>
    <li>Hence, parasitism is formally designated as a <strong>(+ , -) interspecific interaction</strong>.</li>
  </ul>`,
  '1 Mark',
  [
    ['Correct choice: (d) One organism is benefited, other is affected', '0.5 Mark'],
    ['Designation as (+, -) interaction where parasite benefits and host is harmed', '0.5 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c12b-ch11-q12',
  'Q12',
  'Exercises (NCERT Verbatim)',
  'List any three important characteristics of a population and explain them.',
  `<p>Three core demographic characteristics that define a biological population are:</p>
  <ol>
    <li><strong>1. Population Density (N):</strong>
      <br>The size of a population relative to a unit of space (area or volume) at a given point in time. It can be measured as total numerical count (e.g., number of trees per hectare), percent cover/biomass (useful for giant banyan trees), relative density (e.g., number of fish caught per trap), or indirect indices (e.g., tiger census based on pug marks and fecal pellets).</li>
    <li><strong>2. Natality (Birth Rate) and Mortality (Death Rate):</strong>
      <br>Expressed as per capita rates:
      <ul>
        <li><strong>Natality:</strong> The rate at which new individuals are added to the population by reproduction per unit time.</li>
        <li><strong>Mortality:</strong> The rate at which individuals are lost from the population by death per unit time.</li>
      </ul>
    </li>
    <li><strong>3. Age Distribution (Age Pyramids):</strong>
      <br>The proportion of individuals belonging to different age groups (pre-reproductive, reproductive, and post-reproductive) plotted graphically as an <strong>age pyramid</strong>. The geometry of the pyramid indicates whether the population is <em>expanding</em> (triangular), <em>stable</em> (bell-shaped), or <em>declining</em> (urn-shaped).</li>
  </ol>`,
  '3 Marks',
  [
    ['Population density (N): Definition and methods of measurement (biomass, relative density, pug marks)', '1 Mark'],
    ['Natality and Mortality: Per capita additions and losses per unit time', '1 Mark'],
    ['Age distribution: Proportion of age cohorts forming expanding, stable, or declining age pyramids', '1 Mark']
  ]
));

// Q13
questions.push(createQCard(
  'c12b-ch11-q13',
  'Q13',
  'Exercises (NCERT Verbatim)',
  'What is age-structure? What are its categories in human population?',
  `<p><strong>Definition of Age-Structure:</strong></p>
  <p><strong>Age-structure</strong> refers to the percentage composition or proportional distribution of individuals belonging to different chronological age categories within a given population at a specific point in time.</p>

  <p><strong>Three Ecological Age Categories in Human Populations:</strong></p>
  <ol>
    <li><strong>Pre-Reproductive Age Group:</strong> Includes young infants, children, and early adolescents (typically <strong>0 to 14 years</strong>) who are sexually immature and not yet capable of bearing offspring.</li>
    <li><strong>Reproductive Age Group:</strong> Sexually mature, biologically active individuals (typically <strong>15 to 44 years</strong>) who are actively bearing children and driving population growth.</li>
    <li><strong>Post-Reproductive Age Group:</strong> Elderly individuals (typically <strong>45 years and above</strong>) who have passed reproductive senescence (menopause) and are no longer contributing offspring.</li>
  </ol>
  <p><strong>Significance:</strong> A large pre-reproductive base yields an <strong>expanding population</strong>, equal pre-reproductive and reproductive cohorts yield a <strong>stable population</strong>, and a smaller pre-reproductive base yields a <strong>declining population</strong>.</p>`,
  '3 Marks',
  [
    ['Definition of age-structure as proportional distribution of age groups', '1 Mark'],
    ['Three human categories: Pre-reproductive (0-14), Reproductive (15-44), Post-reproductive (45+)', '1.5 Marks'],
    ['Correlation to population growth trajectory (expanding, stable, declining)', '0.5 Mark']
  ]
));

// Q14
questions.push(createQCard(
  'c12b-ch11-q14',
  'Q14',
  'Exercises (NCERT Verbatim)',
  "Explain the difference between Gause's Competitive Exclusion Principle and Resource Partitioning with examples.",
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">1. Gause's Competitive Exclusion Principle (Complete Elimination)</h5>
      <p><strong>Statement:</strong> Formulated by G.F. Gause (1934), it states that two closely related species competing for the exact same limiting resources cannot coexist indefinitely; the competitively inferior species will eventually be eliminated.</p>
      <p><strong>Classic Example: Abingdon Tortoises in Galapagos:</strong></p>
      <ul>
        <li>The giant Abingdon tortoises on the Galapagos Islands became extinct within a decade after goats were introduced on the island, because the goats possessed vastly greater browsing efficiency.</li>
      </ul>
    </div>

    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">2. Resource Partitioning (Coexistence Mechanism)</h5>
      <p><strong>Statement:</strong> If two species compete for the same resource, they can avoid exclusion and achieve stable coexistence by partitioning resources—choosing different feeding times, foraging zones, or different micro-habitats.</p>
      <p><strong>Classic Example: MacArthur's Warblers (1958):</strong></p>
      <ul>
        <li>Robert MacArthur demonstrated that five closely related species of warblers coexisted peacefully on the same spruce tree because they partitioned the tree: each species hunted insects in different vertical zones of the tree canopy and developed behavioral foraging differences.</li>
      </ul>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Gause\'s Principle: Competing species cannot coexist indefinitely; inferior eliminated (Tortoises vs Goats)', '1.5 Marks'],
    ['Resource Partitioning: Coexistence via differing feeding times/foraging zones (MacArthur\'s 5 warbler species)', '1.5 Marks']
  ]
));

// Q15
questions.push(createQCard(
  'c12b-ch11-q15',
  'Q15',
  'Exercises (NCERT Verbatim)',
  "How do organisms adapt to cold climate / sub-zero temperatures (e.g. Allen's rule, blubber)?",
  `<p>Endothermic mammals and aquatic vertebrates inhabiting polar regions and cold climates display specialized morphological and physiological adaptations:</p>
  <ol>
    <li><strong>Allen's Rule (Morphological Adaptation):</strong>
      <ul>
        <li>Mammals living in colder climates generally possess <strong>shorter ears, snouts, and shorter limbs</strong> compared to their warm-climate counterparts.</li>
        <li><em>Thermodynamic Principle:</em> Shorter extremities minimize surface area-to-volume ratio, thereby substantially reducing heat loss from the body to the freezing environment (e.g., Arctic fox vs desert fennec fox).</li>
      </ul>
    </li>
    <li><strong>Thick Subcutaneous Fat Layer (Blubber):</strong>
      <ul>
        <li>Polar marine mammals (e.g., <strong>Seals, Sea lions, and Whales</strong>) possess an extremely thick subcutaneous adipose layer beneath their dermis called <strong>Blubber</strong>.</li>
        <li>Blubber acts as a thermal insulator, preventing body core heat from dissipating into freezing ocean waters and serving as an energy reserve.</li>
      </ul>
    </li>
    <li><strong>Antifreeze Compounds (Physiological):</strong>
      <ul>
        <li>Antarctic icefishes and arctic beetles synthesize specialized <strong>antifreeze glycoproteins (AFGPs)</strong> and glycerol in their blood, depressing the freezing point and preventing ice crystal nucleation.</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['Allen\'s Rule: Shorter ears and limbs minimizing surface area to reduce heat loss', '1 Mark'],
    ['Blubber in seals and whales acting as insulating adipose blanket against sub-zero water', '1 Mark'],
    ['Antifreeze glycoproteins and physiological mechanisms in polar fishes/insects', '1 Mark']
  ]
));

// Q16
questions.push(createQCard(
  'c12b-ch11-q16',
  'Q16',
  'Exercises (NCERT Verbatim)',
  'How do desert plants and animals adapt to water scarcity?',
  `<p>Organisms living in arid desert environments possess evolutionary xerophytic and behavioural adaptations to conserve scarce water:</p>

  <p><strong>1. Adaptations in Desert Plants (Xerophytes):</strong></p>
  <ul>
    <li><strong>Sunken Stomata & Thick Waxy Cuticle:</strong> Possess a heavy waxy cuticle on leaf surfaces and stomata arranged in deep pits (sunken stomata) to minimize transpirational water loss.</li>
    <li><strong>CAM Pathway (Crassulacean Acid Metabolism):</strong> Desert succulents keep their stomata tightly closed during the scorching day and open them only at night to take in CO<sub>2</sub>, virtually eliminating daytime transpiration.</li>
    <li><strong>Foliar Reduction into Spines:</strong> Leaves are modified into sharp spines (e.g., <em>Opuntia</em>), while the green flattened stem (phylloclade) takes over photosynthesis.</li>
  </ul>

  <p><strong>2. Adaptations in Desert Animals:</strong></p>
  <ul>
    <li><strong>Kangaroo Rat (<em>Dipodomys</em>) of North American Deserts:</strong>
      <ul>
        <li>Never drinks water throughout its entire life. Meets 100% of its internal water requirements through <strong>internal fat oxidation</strong> (metabolic water released as a byproduct).</li>
        <li>Possesses extremely long Loops of Henle, concentrating its urine to an almost solid state to excrete minimal water.</li>
      </ul>
    </li>
    <li><strong>Behavioural Burrowing:</strong> Desert reptiles and rodents stay inside deep, cool, humid subterranean burrows during the daytime heat and emerge only at night (nocturnal habit).</li>
  </ul>`,
  '3 Marks',
  [
    ['Desert plants: Thick cuticle, sunken stomata, CAM photosynthesis, leaves modified to spines (Opuntia)', '1.5 Marks'],
    ['Desert animals: Kangaroo rat using metabolic water, concentrated urine, and nocturnal burrowing', '1.5 Marks']
  ]
));

// Q17
questions.push(createQCard(
  'c12b-ch11-q17',
  'Q17',
  'Exercises (NCERT Verbatim)',
  'What are mycorrhizae? How do they benefit the plants?',
  `<p><strong>Definition:</strong></p>
  <p><strong>Mycorrhiza</strong> is a mutualistic symbiotic association between a fungus (most commonly belonging to the genus <strong><em>Glomus</em></strong>) and the roots of higher vascular plants (e.g., Pinus, forest trees, and agricultural crops).</p>

  <p><strong>Multi-Faceted Benefits Conferred to Host Plants:</strong></p>
  <ol>
    <li><strong>Enhanced Phosphorus Absorption:</strong> Fungal hyphae extend far beyond root hair depletion zones in the soil, effectively absorbing <strong>phosphorus</strong> (and other minerals) and transferring it to the plant roots.</li>
    <li><strong>Resistance to Root-Borne Pathogens:</strong> The dense fungal mantle acts as a physical and chemical antimicrobial shield, protecting host roots from soil fungi and pathogenic nematodes.</li>
    <li><strong>Tolerance to Drought and Soil Salinity:</strong> Greatly expands the effective absorptive surface area of the root system, enhancing water uptake during drought.</li>
    <li><strong>Obligate Dependency in Some Lineages:</strong> Certain plants (e.g., <em>Pinus</em> seeds) have obligate mycorrhizal associations; their seeds cannot germinate or establish seedlings in the absence of mycorrhiza.</li>
  </ol>`,
  '2 Marks',
  [
    ['Definition of mycorrhiza (mutualistic fungus-root symbiosis, e.g. Glomus)', '1 Mark'],
    ['Key benefits: Phosphorus absorption, drought/salinity tolerance, and root pathogen defense', '1 Mark']
  ]
));

// Q18
questions.push(createQCard(
  'c12b-ch11-q18',
  'Q18',
  'Exercises (NCERT Verbatim)',
  'What is sexual deceit? Explain with the example of Mediterranean orchid Ophrys.',
  `<p><strong>Definition of Sexual Deceit:</strong></p>
  <p><strong>Sexual deceit</strong> is a specialised co-evolutionary floral adaptation wherein a flower mimics the visual appearance, texture, and sex pheromones of a female insect to trick male insects into pseudocopulation, successfully achieving pollination without providing any nectar reward.</p>

  <p><strong>Classic Example: Mediterranean Orchid <em>Ophrys</em> and Solitary Bee (<em>Colletes</em>):</strong></p>
  <ol>
    <li>The Mediterranean orchid <strong><em>Ophrys</em></strong> employs sexual deceit to accomplish cross-pollination.</li>
    <li><strong>Visual & Olfactory Mimicry:</strong> One petal of the orchid flower bears an uncanny resemblance in size, color, markings, and velvety texture to the female solitary bee. Furthermore, the orchid produces chemical volatiles identical to the female bee's sex pheromone.</li>
    <li><strong>Pseudocopulation:</strong> The male bee is attracted by the scent and appearance, mistaking the flower petal for a receptive female bee. It lands and attempts to copulate with the petal ("pseudocopulation").</li>
    <li><strong>Pollen Transfer:</strong> During this act, sticky pollinia (pollen packets) from the flower adhere to the male bee's head or thorax. When the same frustrated bee visits another <em>Ophrys</em> flower, it pseudocopulates again, transferring the pollen and achieving cross-pollination.</li>
    <li><strong>Co-evolutionary Dependency:</strong> If the female bee's color patterns change during evolution, the orchid must co-evolve to maintain resemblance, or it faces extinction.</li>
  </ol>`,
  '3 Marks',
  [
    ['Definition of sexual deceit (mimicking female insect appearance/pheromone for pseudocopulation)', '1 Mark'],
    ['Detailed Ophrys example: Petal mimicking female solitary bee in color, markings, and scent', '1 Mark'],
    ['Pseudocopulation leading to pollinia transfer and co-evolutionary mutual dependency', '1 Mark']
  ]
));

saveChapter(
  11,
  'Organisms and Populations',
  svgDiagram,
  'NCERT Exercises (18 Verbatim Questions)',
  questions,
  'Ecosystem'
);
