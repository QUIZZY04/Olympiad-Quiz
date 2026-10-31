// scripts/builders/gen-c11b-ch11.js
// Chapter 11: Photosynthesis in Higher Plants (All 10 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh11 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      Non-Cyclic Photophosphorylation (Z-Scheme) &amp; C4 Kranz Anatomy
    </div>
    <svg viewBox="0 0 850 240" width="100%" height="auto" style="max-height:240px; font-family:'Plus Jakarta Sans',sans-serif;">
      <rect x="10" y="10" width="830" height="220" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      
      <!-- Z-Scheme on Left -->
      <g transform="translate(35, 20)">
        <text x="200" y="20" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Z-SCHEME OF LIGHT REACTION (NON-CYCLIC)</text>
        
        <!-- PS II -->
        <rect x="30" y="125" width="60" height="35" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="60" y="146" font-size="9" font-weight="bold" fill="#065f46" text-anchor="middle">PS II (P680)</text>
        <text x="60" y="180" font-size="7.5" fill="#dc2626" text-anchor="middle">H2O &rarr; 2e- + 1/2 O2 + 2H+</text>

        <!-- Excitation Up -->
        <line x1="60" y1="125" x2="60" y2="50" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)"/>
        <rect x="30" y="40" width="60" height="24" rx="4" fill="#dbeafe" stroke="#2563eb"/>
        <text x="60" y="56" font-size="7.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Primary Acc.</text>

        <!-- ETS Downhill -->
        <line x1="90" y1="55" x2="190" y2="125" stroke="#334155" stroke-width="2" stroke-dasharray="3,2"/>
        <text x="145" y="85" font-size="8" font-weight="bold" fill="#334155">ETS (Cyt b6f)</text>
        <text x="145" y="98" font-size="7.5" fill="#059669">ADP + Pi &rarr; ATP</text>

        <!-- PS I -->
        <rect x="190" y="125" width="60" height="35" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="220" y="146" font-size="9" font-weight="bold" fill="#065f46" text-anchor="middle">PS I (P700)</text>

        <!-- Excitation Up -->
        <line x1="220" y1="125" x2="220" y2="50" stroke="#16a34a" stroke-width="2"/>
        <rect x="190" y="40" width="60" height="24" rx="4" fill="#dbeafe" stroke="#2563eb"/>
        <text x="220" y="56" font-size="7.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Primary Acc.</text>

        <!-- Ferredoxin to NADP+ -->
        <line x1="250" y1="55" x2="320" y2="85" stroke="#ea580c" stroke-width="2"/>
        <rect x="290" y="85" width="85" height="30" rx="4" fill="#fef3c7" stroke="#d97706"/>
        <text x="332" y="103" font-size="7.5" font-weight="bold" fill="#92400e" text-anchor="middle">NADP+ &rarr; NADPH</text>
      </g>

      <!-- C4 Kranz Anatomy on Right -->
      <g transform="translate(460, 20)">
        <rect x="0" y="0" width="360" height="195" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="180" y="22" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">KRANZ ANATOMY (C4 PLANTS: MAIZE, SUGARCANE)</text>
        
        <!-- Vascular Bundle center -->
        <circle cx="180" cy="110" r="30" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        <text x="180" y="114" font-size="8" font-weight="bold" fill="#334155" text-anchor="middle">Vascular Bundle</text>

        <!-- Bundle Sheath Wreath Ring -->
        <circle cx="180" cy="110" r="55" fill="none" stroke="#059669" stroke-width="20" stroke-opacity="0.25"/>
        <text x="180" y="70" font-size="8" font-weight="bold" fill="#065f46" text-anchor="middle">Bundle Sheath Cells (Kranz)</text>
        <text x="180" y="155" font-size="7.5" fill="#065f46" text-anchor="middle">&bull; Agranal Chloroplasts &bull; High RuBisCO</text>

        <!-- Outer Mesophyll Cells -->
        <text x="180" y="180" font-size="8" fill="#475569" text-anchor="middle">Mesophyll Cells: Fix CO2 via PEP carboxylase into OAA</text>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch11-q1', 'Question 1', 'NCERT Exercise',
  'By looking at a plant externally can you tell whether a plant is C3 or C4? Why and how?',
  `<div class="step">
    <strong>Answer &amp; Scientific Explanation:</strong><br>
    <strong>No, by merely observing the external morphology of a plant, one cannot definitively tell whether a plant possesses the $C_3$ or $C_4$ photosynthetic pathway.</strong><br><br>
    <strong>Scientific Reasons:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li>The distinction between $C_3$ and $C_4$ plants is grounded entirely in <strong>internal leaf anatomy (Kranz anatomy)</strong> and <strong>sub-cellular biochemistry</strong> (the initial carboxylation enzyme: RuBisCO in $C_3$ vs. PEP carboxylase in $C_4$), not in gross macroscopic leaf morphology.</li>
      <li>However, an informed ecological deduction can often be made based on <strong>habitat and taxonomic family</strong>:
        <ul style="margin:2px 0 4px 15px;">
          <li>$C_4$ plants are predominantly tropical and subtropical grasses adapted to arid, high-temperature, high-light environments (e.g., Maize, Sugarcane, Sorghum, Amaranth).</li>
          <li>$C_4$ plants frequently possess xerophytic features (thick cuticle, vertically oriented linear leaves to minimize transpiration) and maintain high vigor under intense sunlight and drought without wilting.</li>
          <li>Conversely, typical temperate crops like Wheat, Rice, Barley, and Spinach are $C_3$ plants.</li>
        </ul>
      </li>
    </ul>
    <strong>Conclusion:</strong> Definitive confirmation requires examining a transverse section of the leaf under a microscope to check for <strong>Kranz anatomy</strong>.
  </div>`,
  '2 Marks',
  [
    ['Clear answer: No, cannot definitively tell by external morphology alone', '1 Mark'],
    ['Explanation: C3 vs C4 difference is anatomical/biochemical, though habitat (tropical arid) offers clues', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch11-q2', 'Question 2', 'NCERT Exercise',
  'By looking at which internal structure of a plant can you tell whether a plant is C3 or C4? Explain.',
  `<div class="step">
    <strong>Internal Anatomical Structure: Kranz Anatomy</strong><br>
    A plant can be definitively classified as $C_3$ or $C_4$ by examining the microscopic transverse section of its leaf for the presence or absence of <strong>Kranz anatomy</strong> (from the German word <em>'Kranz'</em> meaning wreath or crown):<br><br>
    <strong>1. Anatomical Features of $C_4$ Plants (Kranz Anatomy Present):</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Bundle Sheath Ring:</strong> Vascular bundles are encircled by one or several concentric layers of large, tightly packed cells called <strong>bundle sheath cells</strong>, forming a prominent wreath-like ring.</li>
      <li><strong>Dimorphic Chloroplasts:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li><em>Bundle sheath chloroplasts:</em> Exceptionally large, lack grana (<strong>agranal</strong>), and store abundant starch grains. Rich in RuBisCO.</li>
          <li><em>Mesophyll chloroplasts:</em> Smaller, possess well-developed grana (<strong>granal</strong>), and rich in PEP carboxylase (lack RuBisCO).</li>
        </ul>
      </li>
      <li><strong>No Intercellular Spaces:</strong> Bundle sheath cells have thick walls impervious to gaseous exchange and lack intercellular spaces, trapping $CO_2$.</li>
    </ul>
    <strong>2. Anatomical Features of $C_3$ Plants (Kranz Anatomy Absent):</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Leaves lack specialized bundle sheath rings. Mesophyll is differentiated into palisade and spongy parenchyma, and all chloroplasts are uniform (monomorphic) and granal.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Identification of Kranz anatomy in leaf transverse section', '1 Mark'],
    ['Features of C4 Kranz anatomy (concentric bundle sheath cells, thick walls, no intercellular spaces)', '1 Mark'],
    ['Dimorphic chloroplasts: agranal in bundle sheath vs granal in mesophyll', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch11-q3', 'Question 3', 'NCERT Exercise',
  'Even though very few cells in a C4 plant carry out the biosynthetic-Calvin pathway, yet they are highly productive. Can you discuss why?',
  `<div class="step">
    <strong>Why $C_4$ Plants Exhibit Superior Photosynthetic Productivity:</strong><br>
    In $C_4$ plants (e.g., Maize, Sugarcane), the Calvin cycle occurs exclusively in the specialized bundle sheath cells. Despite this spatial localization, $C_4$ plants have nearly double the photosynthetic yield of $C_3$ plants due to the following evolutionary adaptations:<br><br>
    <strong>1. Complete Elimination of Photorespiration ($C_2$ Cycle):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>In $C_3$ plants, RuBisCO binds $O_2$ under high light and temperature, initiating photorespiration which wastes over 25–40% of fixed carbon and ATP without producing sugars.</li>
      <li>In $C_4$ plants, <strong>photorespiration is completely absent</strong>.</li>
    </ul>
    <strong>2. Efficient $CO_2$-Concentrating Mechanism:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Primary $CO_2$ fixation occurs in mesophyll cells via <strong>PEP carboxylase</strong>, an enzyme with exceptionally high affinity for $HCO_3^-$ and zero affinity for oxygen ($O_2$).</li>
      <li>$C_4$ organic acids (malate / aspartate) are shuttled into bundle sheath cells and decarboxylated, releasing a massive surge of $CO_2$ directly around RuBisCO.</li>
      <li>This elevates the internal $CO_2$ concentration at the RuBisCO active site to saturating levels, completely suppressing its oxygenase activity and ensuring 100% carboxylation efficiency.</li>
    </ul>
    <strong>3. Tolerance to High Temperature and Water Stress:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>$C_4$ plants have higher temperature optima (30&deg;C–45&deg;C) and twice the water-use efficiency of $C_3$ plants, losing half as much water per gram of fixed $CO_2$.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Total absence of wasteful photorespiration in C4 plants', '1.5 Marks'],
    ['Operation of CO2-concentrating pump via PEP carboxylase delivering high CO2 to bundle sheath', '1.5 Marks'],
    ['High light/temperature optima and superior water use efficiency', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch11-q4', 'Question 4', 'NCERT Exercise',
  'RuBisCO is an enzyme that acts both as a carboxylase and oxygenase. Why do you think RuBisCO carries out more carboxylation in C4 plants?',
  `<div class="step">
    <strong>Why RuBisCO Carboxylase Activity Dominates in $C_4$ Plants:</strong><br><br>
    <strong>1. Dual Catalytic Affinity of RuBisCO:</strong><br>
    RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase) possesses a single active site that binds both $CO_2$ and $O_2$ competitively. Whether it acts as a carboxylase (synthesizing $PGA$) or an oxygenase (initiating photorespiration forming phosphoglycolate) is determined by the <strong>relative ratio of $CO_2$ to $O_2$ concentration</strong> at its catalytic site.<br><br>
    <strong>2. Spatial Separation and the $C_4$ Biochemical Pump:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li>In $C_4$ plants, RuBisCO is strictly localized inside the <strong>bundle sheath cells</strong> (completely absent in mesophyll cells).</li>
      <li>Mesophyll cells fix atmospheric $CO_2$ into 4-carbon malate/aspartate via <strong>PEP carboxylase</strong>.</li>
      <li>These $C_4$ acids are translocated through plasmodesmata into bundle sheath cells, where they are actively <strong>decarboxylated</strong> to release $CO_2$ and pyruvate.</li>
      <li>This active decarboxylation maintains an artificially <strong>enormous partial pressure of $CO_2$</strong> immediately around RuBisCO.</li>
      <li>Furthermore, bundle sheath chloroplasts lack granal thylakoids (agranal), meaning photolysis of water ($O_2$ evolution) does not occur in bundle sheath cells; hence, local $O_2$ levels remain negligible.</li>
    </ul>
    <strong>Conclusion:</strong> With overwhelming $CO_2$ concentration and virtually no $O_2$ competition, RuBisCO functions exclusively as a <strong>carboxylase</strong>.
  </div>`,
  '3 Marks',
  [
    ['Explanation of competitive binding of CO2 and O2 at the RuBisCO active site', '1 Mark'],
    ['Role of C4 dicarboxylic acid decarboxylation in creating exceptionally high local CO2 in bundle sheath', '1 Mark'],
    ['Agranal nature of bundle sheath chloroplasts minimizing O2 competition, ensuring 100% carboxylation', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch11-q5', 'Question 5', 'NCERT Exercise',
  'Suppose there were plants that had a high concentration of Chlorophyll b, but lacked chlorophyll a, would it carry out photosynthesis? Then why do plants have accessory pigments?',
  `<div class="step">
    <strong>1. Could a Plant Without Chlorophyll a Carry Out Photosynthesis?</strong><br>
    <strong>No, the plant would not be able to carry out photosynthesis.</strong><br>
    <em>Biological Justification:</em> <strong>Chlorophyll $a$ is the essential primary reaction center pigment</strong> (forming $P680$ in PS II and $P700$ in PS I). Only chlorophyll $a$ has the unique biophysical redox property of ejecting high-energy electrons upon photo-excitation to drive the photochemical electron transport chain and photolysis of water. All other pigments merely funnel excitation resonance energy to chlorophyll $a$.<br><br>
    <strong>2. Why Do Plants Have Accessory Pigments (Chlorophyll b, Carotenoids, Xanthophylls)?</strong><br>
    Accessory pigments are indispensable for two vital adaptive reasons:
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Broadening the Absorption Spectrum of Light:</strong> Chlorophyll $a$ absorbs light primarily in the blue and red wavelengths. Accessory pigments absorb light at intermediary wavelengths (blue-green, yellow) where chlorophyll $a$ has low absorption, and transfer this harvested photon energy to the reaction center via resonance energy transfer (inductive resonance).</li>
      <li><strong>Photoprotection Against Photo-Oxidation:</strong> Under intense solar irradiance, excess light can generate toxic reactive oxygen species (singlet oxygen) that destroy chlorophyll $a$. <strong>Carotenoids (carotenes and xanthophylls)</strong> act as molecular "shields" that quench excess excitation energy and dissipate it safely as heat, preventing photo-oxidative solarization.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Clear answer: No, because chlorophyll a is the sole photochemical reaction center pigment', '1 Mark'],
    ['Role 1: Broadening light absorption spectrum to harvest wider photon wavelengths', '1 Mark'],
    ['Role 2: Photoprotection (carotenoids preventing photo-oxidation of chlorophyll a)', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch11-q6', 'Question 6', 'NCERT Exercise',
  'Why is the colour of a leaf kept in the dark frequently yellow, or pale green? Which pigment do you think is more stable?',
  `<div class="step">
    <strong>1. Why Leaves Kept in the Dark Turn Yellow or Pale Green (Etiolation):</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li>The biosynthesis of green <strong>chlorophyll</strong> is light-dependent: light is strictly required to convert the precursor protochlorophyllide into active chlorophyll $a$ and $b$.</li>
      <li>When a green plant is placed in prolonged darkness, new chlorophyll cannot be synthesized. Furthermore, existing chlorophyll molecules undergo continuous enzymatic degradation and breakdown by the enzyme chlorophyllase.</li>
      <li>As chlorophyll degrades, the underlying yellow/orange <strong>carotenoid pigments (carotenes and xanthophylls)</strong> are unmasked, turning the leaf pale yellow &mdash; a physiological condition called <strong>etiolation</strong>.</li>
    </ul>
    <strong>2. Which Pigment is More Stable?</strong><br>
    <strong>Carotenoids are significantly more chemically stable than chlorophylls.</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Chlorophyll molecules possess a delicate porphyrin ring with a central magnesium atom that rapidly degrades in the dark or under extreme stress.</li>
      <li>Carotenoids are stable tetraterpenoid hydrocarbons that persist much longer in the absence of light, accounting for the characteristic yellow foliage in dark-kept plants and autumn leaves.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Explanation of light requirement for chlorophyll biosynthesis and dark degradation', '1.5 Marks'],
    ['Unmasking of yellow carotenoid pigments leading to etiolation', '0.5 Mark'],
    ['Identification of carotenoids as more stable than chlorophylls with biochemical rationale', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch11-q7', 'Question 7', 'NCERT Exercise',
  'Look at leaves of the same plant on the shady side and on the sunny side of a tree, or compare the leaves of potted plant kept in sunlight with one kept in shade. Which of them has a darker green colour? Why?',
  `<div class="step">
    <strong>Answer &amp; Scientific Explanation:</strong><br>
    The leaves grown on the <strong>shady side (or shade-adapted plant)</strong> have a distinctly <strong>darker green colour</strong> than leaves exposed to direct bright sunlight.<br><br>
    <strong>Physiological &amp; Photobiological Reasons:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>1. Compensatory Pigment Synthesis in Low Light:</strong> In shade conditions, light intensity is a limiting factor. To optimize photon capture in dim, diffused light, shade-adapted leaves synthesize a <strong>higher concentration of chlorophyll</strong> (especially chlorophyll $b$) and package more thylakoids per granum. This elevated chlorophyll density per unit leaf area imparts a rich, dark-green appearance.</li>
      <li><strong>2. Horizontal Chloroplast Orientation:</strong> In shade leaves, chloroplasts orient themselves parallel to the leaf surface (perpendicular to incident light rays) along the upper walls of palisade cells to intercept maximum available photons.</li>
      <li><strong>3. Sun Leaves Adapt to Avoid Photo-Oxidation:</strong> Leaves on the sunny side receive saturating light intensities. They possess fewer chlorophyll molecules per chloroplast to avoid photo-inhibition and light-induced solarization. Their chloroplasts align along vertical lateral cell walls (parastrophy) to minimize excessive light absorption, making sun leaves appear lighter, yellowish-green.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Identification: Shade leaves are darker green than sun leaves', '1 Mark'],
    ['Higher chlorophyll content and granal stacking to harvest limited light in shade', '1 Mark'],
    ['Chloroplast orientation (face-on in shade vs profile/parastrophy in sun) and photoinhibition prevention', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch11-q8', 'Question 8', 'NCERT Exercise',
  'Figure 13.10 shows the effect of light on the rate of photosynthesis. Based on the graph, answer the following:<br>(a) At which point/s (A, B or C) in the curve is light a limiting factor?<br>(b) What could be the limiting factor/s in region A?<br>(c) What do C and D represent on the curve?',
  `<div class="step">
    <strong>Analysis of Blackman's Law of Limiting Factors Light Curve:</strong><br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>(a) At which point/s is light a limiting factor?</strong><br>
      Light is a limiting factor at <strong>Point A</strong> (and along the linear ascending slope between A and B). In this region, any increase in light intensity results in a direct, proportional increase in the rate of photosynthesis.</li>
      <li><strong>(b) What could be the limiting factor/s in region A?</strong><br>
      In region A, <strong>Light Intensity</strong> itself is the primary limiting factor. <em>(Additionally, if light is made abundant, carbon dioxide concentration or temperature could become secondary limiting factors as per Blackman's Law).</em></li>
      <li><strong>(c) What do C and D represent on the curve?</strong><br>
      <ul style="margin:2px 0 4px 15px;">
        <li><strong>Point C represents Light Saturation:</strong> The plateau point where photosynthesis reaches its maximum velocity ($V_{max}$). Here, light is no longer limiting; other factors ($CO_2$ concentration or enzymatic temperature) have become limiting. Light saturation occurs at roughly 10% of full sunlight.</li>
        <li><strong>Region D represents Photo-inhibition / Solarization:</strong> If light intensity is increased beyond point D, the rate of photosynthesis does not increase; rather, excessive radiation causes the breakdown (photo-oxidation) of chlorophyll pigments and destructive photo-inhibition.</li>
      </ul>
      </li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(a) Point A (linear phase where light limits rate)', '1 Mark'],
    ['(b) Light intensity is the limiting factor in region A', '1 Mark'],
    ['(c) C = Light saturation point (10% full sunlight); D = Plateau / Photo-oxidation zone', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch11-q9', 'Question 9', 'NCERT Exercise',
  'Give comparison between the following: (a) C3 and C4 pathways (b) Cyclic and non-cyclic photophosphorylation (c) Anatomy of leaf in C3 and C4 plants.',
  `<div class="step">
    <strong>(a) Differences Between $C_3$ and $C_4$ Photosynthetic Pathways:</strong><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:6px 0; font-size:0.83rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:6px 8px;">Feature</th><th style="padding:6px 8px;">$C_3$ Pathway (Calvin Cycle)</th><th style="padding:6px 8px;">$C_4$ Pathway (Hatch-Slack)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-weight:700;">Primary $CO_2$ Acceptor</td><td style="padding:6px 8px;">RuBP (5-Carbon keto-sugar)</td><td style="padding:6px 8px;">PEP (Phosphoenolpyruvate &mdash; 3C)</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-weight:700;">First Stable Product</td><td style="padding:6px 8px;">3-PGA (3-Phosphoglyceric acid &mdash; 3C)</td><td style="padding:6px 8px;">OAA (Oxaloacetic acid &mdash; 4C)</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-weight:700;">Photorespiration</td><td style="padding:6px 8px; color:#dc2626; font-weight:700;">High (wastes 25–40% energy)</td><td style="padding:6px 8px; color:#16a34a; font-weight:700;">Completely absent</td></tr>
          <tr><td style="padding:6px 8px; font-weight:700;">ATP per Hexose Fixed</td><td style="padding:6px 8px;">18 ATP + 12 NADPH</td><td style="padding:6px 8px;">30 ATP + 12 NADPH</td></tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>(b) Cyclic vs. Non-Cyclic Photophosphorylation:</strong><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:6px 0; font-size:0.83rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:6px 8px;">Feature</th><th style="padding:6px 8px;">Cyclic Photophosphorylation</th><th style="padding:6px 8px;">Non-Cyclic Photophosphorylation (Z-Scheme)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-weight:700;">Photosystems Involved</td><td style="padding:6px 8px;">Only <strong>PS I ($P700$)</strong> participates.</td><td style="padding:6px 8px;">Both <strong>PS II ($P680$) and PS I ($P700$)</strong> participate.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-weight:700;">Photolysis of $H_2O$ &amp; $O_2$ Evolution</td><td style="padding:6px 8px; color:#dc2626;">Absent; no oxygen released.</td><td style="padding:6px 8px; color:#16a34a;">Present; $O_2$ evolved by water-splitting complex.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-weight:700;">Products Synthesized</td><td style="padding:6px 8px;"><strong>Only ATP</strong> (no NADPH formed).</td><td style="padding:6px 8px;"><strong>Both ATP and NADPH</strong> synthesized.</td></tr>
          <tr><td style="padding:6px 8px; font-weight:700;">Location</td><td style="padding:6px 8px;">Stroma lamellae membranes (lacks PS II &amp; NADP reductase).</td><td style="padding:6px 8px;">Granal thylakoid membranes.</td></tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>(c) Anatomy of Leaf in $C_3$ vs. $C_4$ Plants:</strong><br>
    $C_3$ leaves have undifferentiated or standard mesophyll, no Kranz wreath ring, and monomorphic chloroplasts. $C_4$ leaves have distinct <strong>Kranz anatomy</strong>, thick-walled bundle sheath cells, and dimorphic chloroplasts (agranal bundle sheath vs granal mesophyll).
  </div>`,
  '5 Marks',
  [
    ['(a) C3 vs C4 pathways: primary acceptor, 1st stable product, photorespiration, ATP cost', '2 Marks'],
    ['(b) Cyclic vs Non-cyclic: photosystems, photolysis/O2 release, products (ATP vs ATP+NADPH)', '2 Marks'],
    ['(c) Leaf anatomy: Kranz anatomy, bundle sheath rings, dimorphic chloroplasts', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch11-q10', 'Question 10', 'NCERT Exercise',
  'What are the external and internal factors that affect photosynthesis?',
  `<div class="step">
    <strong>Factors Regulating the Rate of Photosynthesis (Blackman's Law of Limiting Factors):</strong><br><br>
    <strong>A. External (Environmental) Factors:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>1. Light:</strong> Governed by light intensity, wavelength quality (maximum in red and blue regions), and photoperiod duration. Light saturation occurs at ~10% full sunlight.</li>
      <li><strong>2. Carbon Dioxide Concentration:</strong> Major limiting factor in atmosphere (~0.04% or 400 ppm). Increasing $CO_2$ up to 0.05% (500 ppm) increases photosynthesis ($C_4$ saturates at 360 ppm, $C_3$ saturates at 450 ppm; exploited in greenhouse crops like tomatoes and bell peppers).</li>
      <li><strong>3. Temperature:</strong> Dark enzymatic reactions are temperature-sensitive. $C_4$ plants have a high optimum (30&deg;C–45&deg;C), whereas $C_3$ plants have a lower optimum (20&deg;C–25&deg;C).</li>
      <li><strong>4. Water:</strong> Water stress causes stomatal closure, choking $CO_2$ supply, and causes leaf wilting, reducing surface area.</li>
    </ul>
    <strong>B. Internal (Plant) Factors:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>1. Number, Size, Age and Orientation of Leaves:</strong> Young fully expanded leaves perpendicular to sunlight display maximal photosynthetic rates.</li>
      <li><strong>2. Mesophyll Cells &amp; Chloroplasts:</strong> Higher number of chloroplasts per cell accelerates photosynthetic capacity.</li>
      <li><strong>3. Internal $CO_2$ Concentration:</strong> Maintained by stomatal aperture conductance.</li>
      <li><strong>4. Amount of Chlorophyll:</strong> Adequate chlorophyll concentration is necessary for light harvesting.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['External: Light (intensity, quality, duration) and CO2 concentration (C3 vs C4 saturation)', '1.5 Marks'],
    ['External: Temperature (enzymatic optimum) and Water stress / stomatal closure', '1 Mark'],
    ['Internal: Leaf age/size/orientation, mesophyll chloroplast count, chlorophyll amount', '1.5 Marks']
  ]
));

// Save Chapter 11
saveChapter(
  11,
  'Photosynthesis in Higher Plants',
  svgCh11,
  'NCERT Textbook Exercise 1 to 10: Z-Scheme, C3 vs C4 Pathways, Kranz Anatomy, RuBisCO & Limiting Factors',
  questions,
  'Respiration in Plants'
);
