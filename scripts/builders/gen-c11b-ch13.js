// scripts/builders/gen-c11b-ch13.js
// Chapter 13: Plant Growth and Development (All 11 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh13 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      Plant Growth Kinetics (Sigmoid Curve) &amp; Phytohormone Regulatory Actions
    </div>
    <svg viewBox="0 0 850 240" width="100%" height="auto" style="max-height:240px; font-family:'Plus Jakarta Sans',sans-serif;">
      <rect x="10" y="10" width="830" height="220" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      
      <!-- Sigmoid Growth Curve on Left -->
      <g transform="translate(40, 20)">
        <text x="180" y="20" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">TYPICAL SIGMOID (S-SHAPED) GROWTH CURVE</text>
        <!-- Axes -->
        <line x1="40" y1="180" x2="340" y2="180" stroke="#334155" stroke-width="2"/>
        <line x1="40" y1="180" x2="40" y2="35" stroke="#334155" stroke-width="2"/>
        <text x="35" y="30" font-size="8" fill="#334155" text-anchor="end">Size / Weight of Organ (W)</text>
        <text x="190" y="196" font-size="8.5" fill="#334155" text-anchor="middle">Time (t) &rarr;</text>

        <!-- S-curve -->
        <path d="M 40,175 C 100,173 140,150 190,105 C 240,60 270,55 330,55" fill="none" stroke="#16a34a" stroke-width="3"/>
        
        <!-- Phases labels -->
        <text x="90" y="165" font-size="8" font-weight="bold" fill="#64748b">1. Lag Phase</text>
        <text x="160" y="115" font-size="8" font-weight="bold" fill="#15803d">2. Log (Exponential) Phase</text>
        <text x="260" y="45" font-size="8" font-weight="bold" fill="#b91c1c">3. Stationary Phase</text>
        
        <text x="190" y="145" font-size="8.5" font-style="italic" fill="#065f46">W1 = W0 &bull; e^(rt)</text>
      </g>

      <!-- Phytohormone Roles on Right -->
      <g transform="translate(430, 20)">
        <rect x="0" y="0" width="390" height="195" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="195" y="22" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">FIVE MAJOR PLANT GROWTH REGULATORS (PGRs)</text>

        <rect x="15" y="35" width="360" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="52" font-size="8.5" font-weight="bold" fill="#15803d">Auxins (IAA, NAA, 2,4-D):</text>
        <text x="155" y="52" font-size="7.5" fill="#334155">Apical dominance, root initiation, weedicide</text>

        <rect x="15" y="66" width="360" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="83" font-size="8.5" font-weight="bold" fill="#0369a1">Gibberellins (GA3):</text>
        <text x="155" y="83" font-size="7.5" fill="#334155">Stem elongation (sugarcane), bolting, malting</text>

        <rect x="15" y="97" width="360" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="114" font-size="8.5" font-weight="bold" fill="#7c3aed">Cytokinins (Kinetin, Zeatin):</text>
        <text x="165" y="114" font-size="7.5" fill="#334155">Cell division, overcomes apical dominance, delay senescence</text>

        <rect x="15" y="128" width="360" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="145" font-size="8.5" font-weight="bold" fill="#ea580c">Ethylene (C2H4, Ethephon):</text>
        <text x="165" y="145" font-size="7.5" fill="#334155">Fruit ripening, triple response, abscission promoter</text>

        <rect x="15" y="159" width="360" height="28" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="176" font-size="8.5" font-weight="bold" fill="#dc2626">Abscisic Acid (ABA):</text>
        <text x="155" y="176" font-size="7.5" fill="#334155">"Stress hormone", stomatal closure, seed dormancy</text>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch13-q1', 'Question 1', 'NCERT Exercise',
  'Define growth, differentiation, development, dedifferentiation, redifferentiation, determinate growth, meristem and growth rate.',
  `<div class="step">
    <strong>Precise Botanical Definitions of Developmental Terms:</strong><br><br>
    <strong>1. Growth:</strong> An irreversible, permanent increase in the size, volume, surface area, or dry biomass of an organ, cell, or organism, accompanied by metabolic energy consumption (anabolism).<br><br>
    <strong>2. Differentiation:</strong> The process by which structurally unspecialized meristematic cells undergo permanent biochemical and structural changes in their cell walls and protoplasm to perform specific physiological duties (e.g., loss of protoplasm and lignification of xylem tracheary elements).<br><br>
    <strong>3. Development:</strong> The complete progression of events and changes that an organism undergoes throughout its entire life cycle from the germination of a seed, through growth, differentiation, flowering, seed setting, senescence, to death ($Development = Growth + Differentiation$).<br><br>
    <strong>4. Dedifferentiation:</strong> The biological capacity of living, mature, fully differentiated permanent cells to regain the power of mitotic cell division under specific hormonal stimuli (e.g., formation of interfascicular cambium and cork cambium / phellogen from mature parenchymatous cortical cells).<br><br>
    <strong>5. Redifferentiation:</strong> The process whereby secondary meristematic cells (produced by dedifferentiation) once again lose their capacity to divide and mature into specialized permanent tissues (e.g., secondary xylem, secondary phloem, and cork).<br><br>
    <strong>6. Determinate Growth:</strong> A growth pattern wherein an organ or organism ceases growth after reaching a characteristic, genetically fixed size and shape (e.g., leaves, flowers, and fruits).<br><br>
    <strong>7. Meristem:</strong> A specialized region of continuously dividing, undifferentiated, isodiametric embryonic plant cells possessing dense cytoplasm, thin cellulosic walls, and prominent nuclei (e.g., apical, lateral, and intercalary meristems).<br><br>
    <strong>8. Growth Rate:</strong> The mathematically measured increase in plant growth per unit of time (arithmetic: $L_t = L_0 + rt$; or geometric: $W_1 = W_0 e^{rt}$).
  </div>`,
  '4 Marks',
  [
    ['Accurate definition of Growth, Differentiation & Development', '1.5 Marks'],
    ['Accurate definition of Dedifferentiation & Redifferentiation', '1 Mark'],
    ['Accurate definition of Determinate growth, Meristem & Growth rate', '1.5 Marks']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch13-q2', 'Question 2', 'NCERT Exercise',
  'Why is not any one parameter good enough to demonstrate growth in plants?',
  `<div class="step">
    <strong>Why Multiple Quantitative Parameters Are Required to Measure Plant Growth:</strong><br><br>
    At the fundamental cellular level, growth is a direct consequence of an increase in the amount of <strong>protoplasm</strong>. Because directly measuring cellular protoplasmic mass inside living, intact tissues is technically impossible without destroying the plant, biologists measure parameters that are proportionally correlated with protoplasmic expansion.<br><br>
    However, no solitary parameter is universally applicable to all organs or tissues because plants exhibit diverse growth habits:
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>1. Fresh Weight:</strong> Highly unreliable because it fluctuates wildly depending on the water status, humidity, and transpiration rate of the plant; water absorption increases fresh weight without true synthesis of dry protoplasmic matter.</li>
      <li><strong>2. Dry Weight:</strong> The most accurate index of growth (true biomass), but requires destroying and desiccating the plant tissue in an oven at 80&deg;C, terminating further measurement of that individual.</li>
      <li><strong>3. Length / Height:</strong> Ideal for linear organs like stems, roots, and pollen tubes (a pollen tube increases strictly in length), but completely useless for measuring planar organs like leaves or spherical organs like fruits.</li>
      <li><strong>4. Surface Area:</strong> Appropriate for measuring the expansion of a dorsiventral leaf blade, but cannot quantify the growth of roots or tree trunks.</li>
      <li><strong>5. Volume:</strong> Useful for measuring fruits (e.g., watermelon, apple), but inappropriate for slender filaments.</li>
      <li><strong>6. Cell Number:</strong> A single maize root apical meristem generates >17,500 new cells per hour, whereas a watermelon cell can increase in volume by 350,000 times without dividing.</li>
    </ul>
    <strong>Conclusion:</strong> Different growth parameters must be tailored to the specific organ, developmental stage, and experimental objective.
  </div>`,
  '3 Marks',
  [
    ['Protoplasmic increase cannot be measured directly', '1 Mark'],
    ['Limitations of single parameters: fresh weight (water fluctuations), dry weight (destructive)', '1 Mark'],
    ['Organ-specific suitability: length (pollen tube), area (leaves), volume (fruits), cell number (root apex)', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch13-q3', 'Question 3', 'NCERT Exercise',
  'Describe briefly: (a) Arithmetic growth (b) Geometric growth (c) Sigmoid growth curve (d) Absolute and relative growth rates.',
  `<div class="step">
    <strong>Detailed Description of Growth Kinetics:</strong><br><br>
    <strong>(a) Arithmetic Growth:</strong><br>
    Following mitotic cell division, only <strong>one daughter cell continues to divide</strong>, while the other daughter cell differentiates and matures into a permanent cell.
    <ul style="margin:2px 0 4px 20px;">
      <li>Produces a constant, linear increase in growth over time.</li>
      <li><strong>Mathematical Formula:</strong> $$\\mathbf{L_t = L_0 + rt}$$ (where $L_t$ = length at time $t$, $L_0$ = initial length, $r$ = growth rate / elongation per unit time). When plotted against time, it yields a <strong>straight line</strong> (e.g., root or shoot elongation at constant velocity).</li>
    </ul>
    <strong>(b) Geometric Growth:</strong><br>
    Both daughter cells resulting from mitotic division <strong>retain the capacity to divide</strong> and continue dividing repeatedly ($1 \\rightarrow 2 \\rightarrow 4 \\rightarrow 8 \\rightarrow 16 \\dots$).
    <ul style="margin:2px 0 4px 20px;">
      <li>Growth proceeds exponentially.</li>
      <li><strong>Mathematical Formula:</strong> $$\\mathbf{W_1 = W_0 e^{rt}}$$ (where $W_1$ = final size, $W_0$ = initial size, $r$ = relative growth rate, $t$ = time, $e$ = base of natural logarithms).</li>
    </ul>
    <strong>(c) Sigmoid (S-shaped) Growth Curve:</strong><br>
    A characteristic S-shaped curve obtained when the cumulative biomass or organ size is plotted against time under natural, limited nutrient conditions. Characterized by three successive phases:
    <ol style="margin:2px 0 4px 20px;">
      <li><em>Lag Phase:</em> Initial slow, preparatory growth period.</li>
      <li><em>Log (Exponential) Phase:</em> Rapid, maximal, exponential growth.</li>
      <li><em>Stationary (Senescent) Phase:</em> Growth slows down and reaches a plateau due to nutrient limitation and internal genetic constraints.</li>
    </ol>
    <strong>(d) Absolute vs. Relative Growth Rates:</strong><br>
    <ul style="margin:2px 0 4px 20px;">
      <li><strong>Absolute Growth Rate (AGR):</strong> Measurement and comparison of total net growth per unit of time ($AGR = \\frac{\\text{Total Growth}}{\\text{Time}}$).</li>
      <li><strong>Relative Growth Rate (RGR):</strong> Growth per unit of time expressed on a <strong>per-unit initial parameter basis</strong> ($RGR = \\frac{\\text{Growth in given time}}{\\text{Initial parameter} \\times \\text{Time}}$). It reflects the comparative biological efficiency (efficiency index) of the system.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['(a) Arithmetic growth: 1 cell divides, linear curve, Lt = L0 + rt', '1 Mark'],
    ['(b) Geometric growth: both daughter cells divide, exponential curve, W1 = W0 e^rt', '1 Mark'],
    ['(c) Sigmoid curve: Lag, Log/Exponential, and Stationary phases', '1 Mark'],
    ['(d) Absolute growth rate (total growth/time) vs Relative growth rate (per unit initial basis)', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch13-q4', 'Question 4', 'NCERT Exercise',
  'List five main groups of natural plant growth regulators. Write a note on discovery, physiological functions and agricultural applications of any one of them.',
  `<div class="step">
    <strong>Five Main Groups of Natural Plant Growth Regulators (Phytohormones):</strong><br>
    1. <strong>Auxins</strong> &nbsp;|&nbsp; 2. <strong>Gibberellins</strong> &nbsp;|&nbsp; 3. <strong>Cytokinins</strong> &nbsp;|&nbsp; 4. <strong>Ethylene</strong> &nbsp;|&nbsp; 5. <strong>Abscisic Acid (ABA)</strong>.<br><br>
    <strong>Comprehensive Account of AUXINS:</strong><br><br>
    <strong>1. Discovery of Auxins:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>First observed by <strong>Charles Darwin and his son Francis Darwin (1880)</strong> while studying the phototropic curvature of the coleoptiles of canary grass (<em>Phalaris canariensis</em>); they concluded that an influence was transmitted from the tip to the sub-apical zone causing bending.</li>
      <li><strong>Frits Went (1928)</strong> successfully isolated the diffusible chemical substance from oat (<em>Avena sativa</em>) coleoptile tips in agar blocks, demonstrating curvature (Avena curvature test) and naming it <strong>Auxin</strong> (Greek <em>auxein</em> = to grow). First chemically isolated from human urine as Indole-3-acetic acid (IAA).</li>
    </ul>
    <strong>2. Physiological Functions of Auxin:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Apical Dominance:</strong> High concentrations of auxin produced by the shoot apical bud suppress the outgrowth of lateral (axillary) buds. Decapitation allows bushy lateral branching (utilized in tea plucking and hedge-making).</li>
      <li><strong>Cell Elongation:</strong> Stimulates proton pumping, loosening cell walls (acid growth hypothesis).</li>
      <li><strong>Root Initiation:</strong> Induces adventitious root formation in stem cuttings.</li>
      <li><strong>Prevents Early Abscission:</strong> Prevents premature drop of young leaves and fruits, but promotes abscission of older, senescent leaves.</li>
    </ul>
    <strong>3. Agricultural and Horticultural Applications:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Rooting of Cuttings:</strong> Synthetic auxins (NAA &mdash; Naphthalene acetic acid, IBA &mdash; Indole butyric acid) are widely used as rooting powders for rapid vegetative propagation.</li>
      <li><strong>Parthenocarpy:</strong> Applied to unpollinated flowers to induce seedless fruits (e.g., in tomatoes).</li>
      <li><strong>Selective Weedicide / Herbicide:</strong> Synthetic auxin <strong>2,4-D (2,4-Dichlorophenoxyacetic acid)</strong> is extensively sprayed to selectively eradicate broad-leaved dicot weeds in cereal (monocot) crop fields and lawns.</li>
      <li><strong>Flowering Promotion:</strong> Promotes uniform synchronous flowering and fruit set in pineapples and litchi.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Listing five main classes of PGRs (Auxins, Gibberellins, Cytokinins, Ethylene, ABA)', '1 Mark'],
    ['Discovery: Darwin’s canary grass coleoptiles and Went’s Avena curvature test', '1 Mark'],
    ['Physiological roles: Apical dominance, cell elongation, root initiation, anti-abscission', '1 Mark'],
    ['Agricultural applications: Rooting hormone (IBA/NAA), weedicide (2,4-D), parthenocarpy', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch13-q5', 'Question 5', 'NCERT Exercise',
  'What do you understand by photoperiodism and vernalisation? Describe their significance.',
  `<div class="step">
    <strong>1. Photoperiodism:</strong><br>
    <strong>Photoperiodism</strong> is the physiological response of plants to the relative lengths of day (light period) and night (dark period) in regulating flowering (first discovered by Garner and Allard, 1920, in Maryland Mammoth tobacco).
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Short Day Plants (SDP):</strong> Require a photoperiod shorter than a critical day length and an uninterrupted long dark period to flower (e.g., Tobacco, Soybean, Chrysanthemum, Rice).</li>
      <li><strong>Long Day Plants (LDP):</strong> Require a photoperiod longer than a critical day length to flower (e.g., Wheat, Radish, Spinach, Henbane).</li>
      <li><strong>Day-Neutral Plants (DNP):</strong> Flowering is independent of photoperiod length (e.g., Tomato, Sunflower, Maize, Pea).</li>
      <li><em>Significance:</em> The site of light perception is the <strong>leaves</strong>, which synthesize a hypothetical mobile floral stimulus called <strong>florigen</strong> that migrates to shoot apices. Enables crop scheduling, commercial floriculture, and growing off-season flowers.</li>
    </ul>
    <strong>2. Vernalisation:</strong><br>
    <strong>Vernalisation</strong> is the promotion of flowering by a mandatory period of low-temperature (chilling / cold treatment, typically 1&deg;C to 5&deg;C) during the seed or vegetative seedling stage (first reported by T.D. Lysenko).
    <ul style="margin:4px 0 6px 20px;">
      <li><em>Examples:</em> Winter varieties of wheat, barley, and rye. If planted in spring, winter wheat fails to flower; when exposed to cold winter, it flowers in summer. Also in biennials (sugarbeet, cabbage, carrot).</li>
      <li><em>Significance:</em> Prevents premature flowering late in the growing season before the plant has attained full vegetative maturity; allows temperate winter crops to be grown in spring. Gibberellins ($GA_3$) can substitute for cold vernalization.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Definition of photoperiodism, critical daylength, SDP vs LDP vs DNP', '1.5 Marks'],
    ['Site of perception (leaves) and agricultural significance in floriculture', '0.5 Mark'],
    ['Definition of vernalisation as cold-induced flowering and winter cereal examples', '1.5 Marks'],
    ['Significance of vernalisation (prevents precocious flowering; GA substitution)', '0.5 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch13-q6', 'Question 6', 'NCERT Exercise',
  'Why is abscisic acid also known as stress hormone?',
  `<div class="step">
    <strong>Why Abscisic Acid (ABA) is Termed the "Plant Stress Hormone":</strong><br><br>
    <strong>Abscisic Acid (ABA)</strong> is synthesized in large quantities whenever a plant experiences adverse, harsh, or stressful environmental conditions (such as severe water deficit / drought, extreme cold, salinity, or high temperature), triggering emergency survival responses:<br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>1. Rapid Stomatal Closure Under Water Stress:</strong><br>
      During drought or soil water deficit, roots detect moisture stress and export ABA via xylem to leaves. ABA binds to plasma membrane receptors on guard cells, stimulating a massive efflux of potassium ($K^+$) and chloride ($Cl^-$) ions. Loss of turgor causes immediate <strong>stomatal closure</strong>, drastically reducing transpiration and conserving water.</li>
      <li><strong>2. Induction of Seed and Bud Dormancy:</strong><br>
      ABA inhibits seed germination and precocious embryo sprouting (vivipary). It induces <strong>seed dormancy</strong>, enabling seeds to withstand desiccation, extreme winter freezing, and heat until favorable conditions return.</li>
      <li><strong>3. Stress-Resistant Protein Synthesis:</strong><br>
      Upregulates gene expression of protective molecular chaperones called Late Embryogenesis Abundant (LEA) proteins and heat-shock proteins that stabilize cellular membranes and enzymes during cellular dehydration.</li>
      <li><strong>4. Antagonist to Growth Promoters:</strong><br>
      Acts as an internal metabolic brake, counteracting the effects of growth stimulators (Gibberellins and Auxins).</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Definition of ABA as stress hormone triggered by drought/salinity/cold', '1 Mark'],
    ['Detailed mechanism of stomatal closure via K+ efflux from guard cells', '1 Mark'],
    ['Induction of seed/bud dormancy and synthesis of protective desiccation proteins', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch13-q7', 'Question 7', 'NCERT Exercise',
  '"Both growth and differentiation in higher plants are open." Comment.',
  `<div class="step">
    <strong>Scientific Commentary: Open Form of Growth and Differentiation in Higher Plants:</strong><br><br>
    <strong>1. Open Form of Growth:</strong><br>
    Unlike animals that show closed, determinate, unitary growth (where the adult body plan and organ number are fixed early in embryogenesis), higher plants retain the remarkable capacity for <strong>unlimited, continuous growth throughout their lifespan</strong>.
    <ul style="margin:4px 0 6px 20px;">
      <li>This perpetual growth is due to the presence of localized groups of perpetually dividing embryonic cells called <strong>meristems</strong> at specific locations (Root Apical Meristems, Shoot Apical Meristems, and Lateral Meristems).</li>
      <li>New cells, tissues, leaves, branches, flowers, and roots are continuously and iteratively added to the plant body. Hence, plant growth is termed <strong>open</strong>.</li>
    </ul>
    <strong>2. Open Form of Differentiation:</strong><br>
    Differentiation in plants is also open because the final developmental fate of a cell derived from the same meristem is not rigidly predetermined; rather, it is dictated by its <strong>spatial location</strong> and chemical microenvironment:
    <ul style="margin:4px 0 6px 20px;">
      <li>Cells positioned peripherally differentiate into epidermal cells; cells positioned deeper differentiate into cortical or vascular parenchyma.</li>
      <li>Furthermore, fully differentiated, mature permanent cells retain developmental <strong>totipotency</strong>: they can dedifferentiate into secondary meristems (phellogen, interfascicular cambium) and redifferentiate into entirely new tissue types depending on hormonal concentrations (Auxin/Cytokinin ratio).</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Explanation of open growth: perpetual addition of new organs via apical/lateral meristems', '1.5 Marks'],
    ['Explanation of open differentiation: cell fate governed by location, dedifferentiation, and plasticity', '1.5 Marks']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch13-q8', 'Question 8', 'NCERT Exercise',
  '"Both a short day plant and a long day plant can flower simultaneously in a given place." Explain.',
  `<div class="step">
    <strong>Scientific Explanation: Simultaneous Flowering of SDP and LDP:</strong><br><br>
    <strong>Yes, a Short Day Plant (SDP) and a Long Day Plant (LDP) can flower simultaneously in the exact same geographic location under specific photoperiodic conditions.</strong><br><br>
    <strong>Photoperiodic Mechanism:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li>Flowering is not determined by an absolute universal number of daylight hours, but by whether the ambient day length is <strong>shorter or longer than the plant's own specific Critical Day Length (CDL)</strong>.</li>
      <li>Each species possesses its own unique genetically determined CDL:
        <ul style="margin:2px 0 4px 15px;">
          <li>A <em>Short Day Plant</em> flowers when the day length is <strong>less than its CDL</strong>.</li>
          <li>A <em>Long Day Plant</em> flowers when the day length is <strong>greater than its CDL</strong>.</li>
        </ul>
      </li>
    </ul>
    <strong>Concrete Numerical Example:</strong><br>
    Suppose in a given geographical location during spring or autumn, the actual natural day length is <strong>12 hours</strong>:
    <ul style="margin:4px 0 6px 20px;">
      <li>Consider an SDP (e.g., <em>Xanthium</em>) whose critical day length is <strong>14 hours</strong>. Since the actual day length (12 hours) is <em>less than</em> its critical day length (14 hours), this SDP will flower.</li>
      <li>Consider an LDP (e.g., <em>Hyoscyamus</em>) whose critical day length is <strong>10 hours</strong>. Since the actual day length (12 hours) is <em>greater than</em> its critical day length (10 hours), this LDP will also flower.</li>
    </ul>
    <strong>Conclusion:</strong> Whenever the natural day length falls simultaneously below the CDL of the short-day plant and above the CDL of the long-day plant, both plants will flower concurrently side-by-side.
  </div>`,
  '3 Marks',
  [
    ['Affirmative statement and definition of species-specific Critical Day Length (CDL)', '1 Mark'],
    ['SDP flowers when photoperiod < CDL; LDP flowers when photoperiod > CDL', '1 Mark'],
    ['Clear hypothetical numerical example showing an intermediate daylength satisfying both plants', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch13-q9', 'Question 9', 'NCERT Exercise',
  'Which one of the plant growth regulators would you use if you are asked to:<br>(a) induce rooting in a twig<br>(b) quickly ripen a fruit<br>(c) delay leaf senescence<br>(d) induce growth in axillary buds<br>(e) \'bolt\' a rosette plant<br>(f) induce immediate stomatal closure in leaves?',
  `<div class="step">
    <strong>Appropriate Plant Growth Regulators for Specific Horticultural Applications:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Target Horticultural Application</th>
            <th style="padding:8px 12px; color:#065f46;">Designated Phytohormone (PGR)</th>
            <th style="padding:8px 12px; color:#065f46;">Specific Chemical Compound / Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(a) Induce rooting in a twig</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Auxin</td>
            <td style="padding:8px 12px;"><strong>IBA (Indole-3-butyric acid)</strong> or <strong>NAA</strong> rooting powder.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(b) Quickly ripen a fruit</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Ethylene</td>
            <td style="padding:8px 12px;">Gaseous <strong>Ethylene ($C_2H_4$)</strong> or aqueous <strong>Ethephon</strong>.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(c) Delay leaf senescence</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Cytokinin</td>
            <td style="padding:8px 12px;"><strong>Kinetin / Zeatin</strong> (Richmond-Lang effect; promotes nutrient mobilization).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(d) Induce growth in axillary buds</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Cytokinin</td>
            <td style="padding:8px 12px;">Overcomes apical dominance imposed by terminal auxin.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(e) 'Bolt' a rosette plant</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Gibberellin</td>
            <td style="padding:8px 12px;"><strong>$GA_3$</strong> (induces internode elongation prior to flowering in cabbage/beet).</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">(f) Induce immediate stomatal closure</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Abscisic Acid (ABA)</td>
            <td style="padding:8px 12px;">Acts as antitranspirant by stimulating $K^+$ efflux from guard cells.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['(a) Auxin (IBA/NAA) & (b) Ethylene / Ethephon', '1 Mark'],
    ['(c) Cytokinin & (d) Cytokinin', '1 Mark'],
    ['(e) Gibberellin (GA3) & (f) Abscisic acid (ABA)', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch13-q10', 'Question 10', 'NCERT Exercise',
  'Would a defoliated plant respond to photoperiodic cycle? Why?',
  `<div class="step">
    <strong>Answer: No, a defoliated plant will NOT respond to the photoperiodic cycle.</strong><br><br>
    <strong>Scientific Explanation:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Leaves are the Sole Sites of Photoperiodic Perception:</strong> Experimental evidence demonstrates that the light or dark duration (photoperiod) is perceived exclusively by the <strong>leaves</strong> of a plant, not by the stem, apex, or roots.</li>
      <li><strong>Synthesis of the Florigen Stimulus:</strong> When mature leaves receive the critical inductive photoperiodic cycle, their photoreceptors (phytochromes) trigger the expression of the <em>CONSTANS</em> and <em>FLOWERING LOCUS T (FT)</em> genes, synthesizing the mobile floral hormone called <strong>florigen</strong>.</li>
      <li><strong>Translocation to Shoot Apex:</strong> Florigen is transported through the phloem conduits to the vegetative shoot apical meristem, where it reprograms the apical meristem to transform into a floral meristem.</li>
      <li><strong>Defoliation Consequence:</strong> If all leaves are completely removed (defoliated), the plant lacks the organ to perceive light signals or synthesize florigen. Even if a defoliated plant is given ideal critical photoperiods, it will remain vegetative and fail to flower. Even a single intact leaf is sufficient to perceive the stimulus and induce flowering.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Clear answer: No, a defoliated plant cannot perceive photoperiodic cycles', '1 Mark'],
    ['Explanation: Leaves are the exclusive site of light perception and florigen synthesis', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c11b-ch13-q11', 'Question 11', 'NCERT Exercise',
  'What would be expected to happen if: (a) $GA_3$ is applied to rice seedlings (b) dividing cells stop differentiating (c) a rotten fruit gets mixed with unripe fruits (d) you forget to add cytokinin to the culture medium?',
  `<div class="step">
    <strong>Expected Biological Outcomes and Mechanistic Explanations:</strong><br><br>
    <strong>(a) If $GA_3$ is applied to rice seedlings:</strong><br>
    The seedlings will exhibit extreme, abnormal <strong>internodal stem elongation</strong>, becoming tall, slender, pale, and unable to support their own weight &mdash; mimicking the classic <em>"bakanae"</em> (foolish seedling) disease of rice discovered by Kurosawa (1926) caused by the fungus <em>Gibberella fujikuroi</em>.<br><br>
    <strong>(b) If dividing cells stop differentiating:</strong><br>
    The dividing cells will fail to specialize into dermal, ground, or vascular tissues (xylem, phloem). The tissue will form an unorganized, undifferentiated, irregular proliferating mass of parenchymatous cells called a <strong>callus</strong> or tumorous mass, halting organogenesis and normal plant development.<br><br>
    <strong>(c) If a rotten (over-ripe) fruit gets mixed with unripe fruits:</strong><br>
    Over-ripe or damaged fruits synthesize and release large quantities of volatile gaseous <strong>Ethylene ($C_2H_4$)</strong> into the surrounding air. Ethylene diffuses into adjacent unripe fruits, triggering a climacteric respiratory surge that causes <strong>premature and rapid ripening</strong> of all stored fruits, potentially leading to spoilage.<br><br>
    <strong>(d) If you forget to add cytokinin to the culture medium:</strong><br>
    In plant tissue culture, <strong>cytokinins</strong> are strictly required for mitotic cell division (cytokinesis) and shoot organogenesis. In the complete absence of cytokinin, explant cells will fail to divide; cell division and shoot bud differentiation will not occur, leading to culture failure. <em>(High auxin with no cytokinin promotes only root induction, but zero shoot formation).</em>
  </div>`,
  '4 Marks',
  [
    ['(a) GA3: extreme stem elongation mimicking "foolish seedling" disease', '1 Mark'],
    ['(b) Cessation of differentiation: formation of undifferentiated callus/tumor', '1 Mark'],
    ['(c) Rotten fruit: ethylene release triggering rapid ripening of unripe fruits', '1 Mark'],
    ['(d) Omission of cytokinin: failure of cell division and shoot bud differentiation', '1 Mark']
  ]
));

// Save Chapter 13
saveChapter(
  13,
  'Plant Growth and Development',
  svgCh13,
  'NCERT Textbook Exercise 1 to 11: Growth Kinetics, Phytohormones, Photoperiodism, Vernalisation & Stress Physiology',
  questions,
  'Breathing and Exchange of Gases'
);
