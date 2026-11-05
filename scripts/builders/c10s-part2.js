// scripts/builders/c10s-part2.js
// 100% Literal Verbatim Physical NCERT Questions for Class 10 Science: Chapters 5 to 8 (Biology)
// Full In-Text and End-of-Chapter Exercises with CBSE Step Marking Schemes 2026-27

const { renderQCard } = require('./c10s-part1.js');

// ============================================================================
// CHAPTER 5: LIFE PROCESSES (21 In-Text Qs + 13 Exercises = 34 Qs + 1 CBQ)
// ============================================================================
function getChapter5Html() {
  const qCards = [
    // --- In-Text Page 81 ---
    renderQCard(
      'c10s-ch5-q1',
      'In-Text Page 81 • Q1',
      'Why is diffusion insufficient to meet the oxygen requirements of multicellular organisms like humans?',
      2,
      `<p><strong>Scientific Explanation:</strong></p>
<ol>
  <li>In unicellular organisms (like <em>Amoeba</em>), the entire surface area of the organism is in direct contact with the external environment; hence simple diffusion across the cell membrane is fast and sufficient to supply oxygen and remove waste.</li>
  <li>In large, complex multicellular organisms like humans, the body volume is massive and most tissue cells are located deep inside the body, far away from the surrounding atmosphere.</li>
  <li>Diffusion is a very slow physical transport process ($t \\propto x^2$). Calculations show that if diffusion alone were to transport oxygen in human beings, it would take an estimated <strong>3 years</strong> for a single molecule of oxygen to diffuse from our lungs to our toes.</li>
  <li>Therefore, multicellular organisms require a specialized respiratory surface (alveoli) coupled with a rapid, pressure-driven <strong>circulatory system containing respiratory pigments (haemoglobin)</strong> to deliver oxygen efficiently to all body cells.</li>
</ol>`,
      [
        { key: 'Multicellular body cells are not in direct contact with the environment', marks: '1 Mark' },
        { key: 'Diffusion is too slow for large distances; requires specialised circulatory system with haemoglobin', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q2',
      'In-Text Page 81 • Q2',
      'What criteria do we use to decide whether something is alive?',
      2,
      `<p><strong>Criteria for Living Organisms:</strong></p>
<ol>
  <li><strong>Invisible Molecular Movements:</strong> The most fundamental and definitive criterion is the occurrence of <strong>molecular movements</strong> within cells and subcellular structures. Living organisms are highly organized structures made of tissues, cells, and organelles that constantly repair and maintain their order against entropic breakdown.</li>
  <li><strong>Vital Life Processes:</strong> Living beings actively carry out essential life processes including <strong>nutrition</strong> (metabolic energy uptake), <strong>respiration</strong> (cellular energy release), <strong>transportation</strong> of nutrients/gases, <strong>excretion</strong> of toxic wastes, and response to external stimuli (sensitivity).</li>
  <li>Visible movements (such as locomotion, breathing movements, or plant phototropism) are common, but invisible maintenance molecular movements are the ultimate criterion.</li>
</ol>`,
      [
        { key: 'Fundamental criterion: invisible molecular movements repairing cellular structures', marks: '1 Mark' },
        { key: 'Performing vital metabolic life processes (nutrition, respiration, transport, excretion)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q3',
      'In-Text Page 81 • Q3',
      'What are outside raw materials used for by an organism?',
      2,
      `<p><strong>Outside Raw Materials:</strong></p>
<p>Since life on Earth depends on carbon-based molecules, the primary outside raw materials consumed by organisms are:</p>
<ol>
  <li><strong>Carbon-based Nutrients (Food):</strong> Heterotrophs consume organic matter (carbohydrates, proteins, fats) for energy and structural building blocks. Autotrophs absorb inorganic <strong>carbon dioxide ($\\text{CO}_2$)</strong>.</li>
  <li><strong>Water ($\\text{H}_2\\text{O}$):</strong> Required as a universal biochemical solvent for enzymatic cellular reactions, transport of metabolites, and photolysis in photosynthesis.</li>
  <li><strong>Oxygen ($\\text{O}_2$):</strong> Absorbed by aerobic organisms for cellular respiration to break down glucose into ATP.</li>
  <li><strong>Minerals (Nitrogen, Phosphorus, Iron, Magnesium):</strong> Absorbed by plants from soil to synthesize amino acids, proteins, DNA, and chlorophyll.</li>
</ol>`,
      [
        { key: 'Carbon sources (organic food or CO2) and oxygen for respiration', marks: '1 Mark' },
        { key: 'Water as biochemical medium and inorganic minerals (N, P, Fe) from soil', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q4',
      'In-Text Page 81 • Q4',
      'What processes would you consider essential for maintaining life?',
      2,
      `<p><strong>Essential Life Processes:</strong></p>
<ol>
  <li><strong>Nutrition:</strong> The process of procuring and taking in food/nutrients to yield energy and raw materials for growth.</li>
  <li><strong>Respiration:</strong> The biochemical process of cellular gas exchange and oxidation of glucose to release biologically useful energy (ATP).</li>
  <li><strong>Transportation:</strong> The internal circulatory mechanism that moves water, minerals, food, hormones, and respiratory gases to all tissues.</li>
  <li><strong>Excretion:</strong> The biological removal of toxic nitrogenous waste products (urea, uric acid) generated by cellular metabolism.</li>
  <li><strong>Control and Coordination:</strong> Neural and hormonal regulation ensuring homeostasis and response to environmental stimuli.</li>
</ol>`,
      [
        { key: 'Listing and briefly explaining Nutrition and Respiration', marks: '1 Mark' },
        { key: 'Listing and briefly explaining Transportation and Excretion', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 87 ---
    renderQCard(
      'c10s-ch5-q5',
      'In-Text Page 87 • Q1',
      'What are the differences between autotrophic nutrition and heterotrophic nutrition?',
      3,
      `<p><strong>Distinction between Modes of Nutrition:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Parameter</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Autotrophic Nutrition</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Heterotrophic Nutrition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Definition</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Organisms synthesize their own organic food from simple inorganic raw materials ($\\text{CO}_2, \\text{H}_2\\text{O}$).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Organisms cannot synthesize organic food; they depend directly or indirectly on autotrophs for organic nutrients.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Chlorophyll & Light</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Chlorophyll pigment and sunlight are indispensable.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Chlorophyll is absent; sunlight is not directly required for nutrition.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Storage Form</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Surplus glucose is stored as <strong>Starch</strong>.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Surplus food is stored as <strong>Glycogen</strong> or fats.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Examples</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Green plants, cyanobacteria, photosynthetic bacteria.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">All animals, fungi (yeast, mushrooms), protozoans.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Inorganic raw materials synthesis vs depending on external organic sources', marks: '1 Mark' },
        { key: 'Presence of chlorophyll and light requirement vs absence', marks: '1 Mark' },
        { key: 'Storage forms (starch vs glycogen) and valid examples', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q6',
      'In-Text Page 87 • Q2',
      'Where do plants get each of the raw materials required for photosynthesis?',
      2,
      `<p><strong>Sources of Photosynthetic Raw Materials:</strong></p>
<ol>
  <li><strong>Carbon Dioxide ($\\text{CO}_2$):</strong> Absorbed directly from the ambient atmosphere through tiny microscopic pores called <strong>stomata</strong> present on the epidermal surface of leaves by gaseous diffusion.</li>
  <li><strong>Water ($\\text{H}_2\\text{O}$):</strong> Absorbed along with dissolved minerals from the rhizosphere soil by root hairs via osmosis, and transported upward to leaves through <strong>xylem vessels</strong>.</li>
  <li><strong>Sunlight:</strong> Radiant solar photons are captured and absorbed by <strong>chlorophyll</strong> molecules located inside chloroplast thylakoids.</li>
  <li><strong>Minerals (Nitrogen, Phosphorus, Iron, Magnesium):</strong> Absorbed as dissolved inorganic nitrates/nitrites and phosphates from the soil through roots.</li>
</ol>`,
      [
        { key: 'CO2 from atmosphere via stomata; Water from soil via roots and xylem', marks: '1 Mark' },
        { key: 'Sunlight captured by chlorophyll in chloroplasts; minerals from soil', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q7',
      'In-Text Page 87 • Q3',
      'What is the role of the acid in our stomach?',
      2,
      `<p><strong>Functions of Gastric Hydrochloric Acid ($\\text{HCl}$):</strong></p>
<ol>
  <li><strong>Activation of Pepsinogen:</strong> The gastric glands in the stomach wall secrete inactive proenzyme pepsinogen. Gastric $\\text{HCl}$ creates a strongly acidic medium ($\\text{pH} \\approx 1.5 - 2.5$) necessary to convert inactive pepsinogen into active <strong>pepsin</strong> for breaking down dietary proteins into peptones and proteoses.</li>
  <li><strong>Bactericidal Action:</strong> The high acidity kills bacteria and potential pathogens that enter the digestive tract along with ingested food.</li>
  <li><strong>Food Softening:</strong> It softens tough fibrous components in food, facilitating mechanical churning and enzymatic digestion.</li>
</ol>`,
      [
        { key: 'Creates acidic pH (1.5-2) to convert inactive pepsinogen into active pepsin', marks: '1 Mark' },
        { key: 'Kills harmful ingested bacteria and pathogens', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q8',
      'In-Text Page 87 • Q4',
      'What is the function of digestive enzymes?',
      2,
      `<p><strong>Role of Digestive Enzymes:</strong></p>
<p>Digestive enzymes act as biological catalysts that hydrolyse complex, large, insoluble food macromolecules into small, simple, diffusible, and water-soluble micro-molecules that can be absorbed across the intestinal epithelium into the blood stream:</p>
<ol>
  <li><strong>Carbohydrases (e.g., Salivary amylase, Pancreatic amylase):</strong> Hydrolyse insoluble starches and complex carbohydrates into simple sugars (maltose, glucose).</li>
  <li><strong>Proteases (e.g., Pepsin, Trypsin, Peptidases):</strong> Hydrolyse complex dietary proteins into peptides and finally into absorbable <strong>amino acids</strong>.</li>
  <li><strong>Lipases (e.g., Pancreatic lipase):</strong> Hydrolyse emulsified fat droplets into <strong>fatty acids and glycerol</strong>.</li>
</ol>`,
      [
        { key: 'Biological catalysts hydrolysing complex insoluble polymers into simple diffusible monomers', marks: '1 Mark' },
        { key: 'Specific examples: Amylase (starch to glucose), Trypsin/Pepsin (protein to amino acids), Lipase (fats to fatty acids)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q9',
      'In-Text Page 87 • Q5',
      'How is the small intestine designed to absorb digested food?',
      3,
      `<p><strong>Structural Adaptations of Small Intestine for Absorption:</strong></p>
<ol>
  <li><strong>Enormous Surface Area (Villi and Microvilli):</strong> The inner mucosal lining of the ileum is folded into millions of tiny, microscopic finger-like projections called <strong>villi</strong>. Each epithelial cell of the villi bears countless sub-microscopic folds called <strong>microvilli</strong> (brush border). This increases the absorptive surface area of the gut by more than <strong>$300\\text{ m}^2$</strong>.</li>
  <li><strong>Dense Capillary Network:</strong> Each villus is richly supplied with a dense mesh of thin-walled blood capillaries, allowing monosaccharides and amino acids to diffuse rapidly into the venous circulation.</li>
  <li><strong>Lacteal for Lipid Absorption:</strong> The center of each villus contains a specialized lymphatic capillary called a <strong>lacteal</strong>, which specifically absorbs digested fats (fatty acids and glycerol packaged as chylomicrons) into the lymphatic system.</li>
  <li><strong>Thin Epithelial Barrier:</strong> The lining consists of a single layer of columnar epithelial cells, minimizing the diffusion distance for rapid transport.</li>
</ol>`,
      [
        { key: 'Finger-like villi and brush-border microvilli massively expanding surface area', marks: '1 Mark' },
        { key: 'Dense network of blood capillaries for rapid absorption of glucose/amino acids', marks: '1 Mark' },
        { key: 'Central lacteal vessel for absorption of fats and single-cell-thick epithelium', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 91 ---
    renderQCard(
      'c10s-ch5-q10',
      'In-Text Page 91 • Q1',
      'What advantage over an aquatic organism does a terrestrial organism have with regard to obtaining oxygen for respiration?',
      2,
      `<p><strong>Respiratory Advantage of Terrestrial Organisms:</strong></p>
<ol>
  <li><strong>Oxygen Concentration:</strong> Terrestrial organisms take in oxygen from atmospheric air, which contains an abundant and rich concentration of oxygen (approximately <strong>$21\\%$ or $210\\text{ mL/L}$</strong>). In contrast, aquatic organisms obtain oxygen dissolved in water, where oxygen concentration is extremely low (less than <strong>$8\\text{ mg/L}$ or $\\approx 0.7\\%$</strong>).</li>
  <li><strong>Rate of Breathing:</strong> Because the amount of dissolved oxygen in aquatic habitats is so low, aquatic organisms (like fish) must pump large volumes of water over their gills, resulting in a <strong>very rapid breathing rate</strong>.</li>
  <li>Terrestrial organisms do not have to expend high metabolic energy on high breathing rates, and their internal respiratory organs (lungs) are well protected against desiccation.</li>
</ol>`,
      [
        { key: 'Atmospheric air has much higher oxygen content (21%) than dissolved water oxygen (<1%)', marks: '1 Mark' },
        { key: 'Terrestrial animals do not need high energy-consuming rapid breathing rates like aquatic animals', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q11',
      'In-Text Page 91 • Q2',
      'What are the different ways in which glucose is oxidised to provide energy in various organisms?',
      3,
      `<p><strong>Biochemical Pathways of Glucose Breakdown:</strong></p>
<p>In all living organisms, the initial common metabolic step is <strong>Glycolysis</strong> occurring in the cytoplasm, where one 6-carbon molecule of glucose is cleaved into two 3-carbon molecules of <strong>pyruvate</strong>, releasing a small amount of ATP.</p>
<p>Pyruvate is subsequently broken down via three distinct metabolic pathways:</p>
<ol>
  <li><strong>Path 1: Absence of Oxygen (Anaerobic Respiration / Fermentation in Yeast):</strong><br>
    Occurs in cytoplasm of yeast cells; pyruvate is converted into <strong>ethanol, carbon dioxide, and 2 ATP</strong>:
    $$\\text{Pyruvate} \\xrightarrow{\\text{Absence of } \\text{O}_2} \\text{Ethanol (2C)} + \\text{CO}_2 + \\text{Energy (2 ATP)}$$
  </li>
  <li><strong>Path 2: Lack of Oxygen (Anaerobic pathway in Human Skeletal Muscle Cells during vigorous exercise):</strong><br>
    When oxygen demand outstrips supply, pyruvate is converted into <strong>lactic acid and 2 ATP</strong>:
    $$\\text{Pyruvate} \\xrightarrow{\\text{Lack of } \\text{O}_2} \\text{Lactic acid (3C)} + \\text{Energy (Cramps)}$$
    Accumulation of lactic acid leads to muscular fatigue and painful cramps.
  </li>
  <li><strong>Path 3: Presence of Oxygen (Aerobic Respiration in Mitochondria):</strong><br>
    Pyruvate undergoes complete oxidative decarboxylation inside the mitochondria into <strong>carbon dioxide, water, and 38 ATP</strong>:
    $$\\text{Pyruvate} + \\text{O}_2 \\xrightarrow{\\text{Mitochondria}} 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Energy (38 ATP)}$$
  </li>
</ol>`,
      [
        { key: 'Initial cytoplasmic conversion of 6C glucose to 3C pyruvate (glycolysis)', marks: '1 Mark' },
        { key: 'Anaerobic yeast pathway (ethanol + CO2) and muscle pathway (lactic acid causing cramps)', marks: '1 Mark' },
        { key: 'Aerobic mitochondrial pathway (CO2 + H2O + large ATP yield)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q12',
      'In-Text Page 91 • Q3',
      'How is oxygen and carbon dioxide transported in human beings?',
      3,
      `<p><strong>Gas Transport Mechanisms in Blood:</strong></p>
<ol>
  <li><strong>1. Oxygen ($\\text{O}_2$) Transport:</strong>
    <ul>
      <li>Oxygen has very low solubility in water/plasma. Therefore, about <strong>$97 - 98.5\\%$ of oxygen is transported bound to Haemoglobin</strong>, a specialized iron-containing respiratory pigment found inside Red Blood Cells (RBCs).</li>
      <li>Each haemoglobin molecule reversibly binds four oxygen molecules in lung capillaries to form <strong>oxyhaemoglobin</strong>:
        $$\\text{Hb} + 4\\text{O}_2 \\rightleftharpoons \\text{Hb(O}_2)_4$$
      </li>
      <li>In tissues with low partial pressure of oxygen ($p\\text{O}_2$), oxyhaemoglobin dissociates, releasing oxygen to the respiring cells. The remaining $1.5\\%$ is carried dissolved in plasma.</li>
    </ul>
  </li>
  <li><strong>2. Carbon Dioxide ($\\text{CO}_2$) Transport:</strong>
    <ul>
      <li>Carbon dioxide is about <strong>20 to 25 times more soluble</strong> in water than oxygen.</li>
      <li>About <strong>$70\\%$ is transported as dissolved Bicarbonate ions ($\\text{HCO}_3^-$)</strong> in blood plasma.</li>
      <li>About <strong>$20 - 23\\%$</strong> binds with the amino groups of haemoglobin to form <strong>carbamino-haemoglobin</strong>.</li>
      <li>About <strong>$7\\%$</strong> travels directly dissolved as physical solute in blood plasma.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Oxygen transported mainly bound to haemoglobin in RBCs as oxyhaemoglobin', marks: '1.5 Marks' },
        { key: 'Carbon dioxide transported primarily as dissolved bicarbonate ions (HCO3-) in plasma due to high solubility', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q13',
      'In-Text Page 91 • Q4',
      'How are the lungs designed in human beings to maximise the area for exchange of gases?',
      2,
      `<p><strong>Structural Design of Human Lungs:</strong></p>
<ol>
  <li><strong>Extensive Branching Network:</strong> Within the lungs, the primary bronchus subdivides repeatedly into smaller and smaller airways (secondary bronchi, tertiary bronchi, and terminal bronchioles) like the branches of an inverted tree.</li>
  <li><strong>Balloon-like Alveoli:</strong> The terminal bronchioles end in microscopic, cup-shaped balloon-like air sacs called <strong>alveoli</strong>. There are approximately <strong>300 to 500 million alveoli</strong> in both adult human lungs.</li>
  <li><strong>Huge Surface Area:</strong> If flattened out, the collective surface area provided by these alveoli spans approximately <strong>$80\\text{ m}^2$</strong> (equivalent to the floor area of a tennis court).</li>
  <li><strong>Ultra-thin Membrane & Dense Capillaries:</strong> The alveolar walls are just one-cell-thick and wrapped in an ultra-dense network of pulmonary capillaries, enabling instantaneous diffusion of $\\text{O}_2$ and $\\text{CO}_2$.</li>
</ol>`,
      [
        { key: 'Branching bronchiole network terminating in millions of balloon-like alveoli', marks: '1 Mark' },
        { key: 'Provides huge surface area (~80 m2) with one-cell-thick capillary-rich membranes', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 96 ---
    renderQCard(
      'c10s-ch5-q14',
      'In-Text Page 96 • Q1',
      'What are the components of the transport system in human beings? What are the functions of these components?',
      3,
      `<p><strong>Components and Functions of Human Circulatory System:</strong></p>
<ol>
  <li><strong>1. The Heart (Muscular Pump):</strong> A four-chambered myogenic muscular organ that pumps deoxygenated blood to the lungs for oxygenation and forcefully pumps oxygenated blood to all systemic body organs.</li>
  <li><strong>2. Blood (Fluid Connective Tissue):</strong>
    <ul>
      <li><em>Plasma:</em> Fluid matrix transporting dissolved food nutrients, carbon dioxide, nitrogenous wastes (urea), and hormones.</li>
      <li><em>RBCs (Erythrocytes):</em> Contain haemoglobin to transport oxygen from lungs to tissues.</li>
      <li><em>WBCs (Leukocytes):</em> Produce antibodies and engulf pathogens, providing immune defense.</li>
      <li><em>Platelets (Thrombocytes):</em> Initiate blood clotting at injury sites to prevent haemorrhage.</li>
    </ul>
  </li>
  <li><strong>3. Blood Vessels (Closed Conduit Network):</strong>
    <ul>
      <li><em>Arteries:</em> Thick, elastic-walled vessels carrying oxygenated blood away from the heart under high pressure.</li>
      <li><em>Veins:</em> Thin-walled vessels with internal valves carrying deoxygenated blood back towards the heart.</li>
      <li><em>Capillaries:</em> Microscopic one-cell-thick vessels where exchange of gases and nutrients occurs.</li>
    </ul>
  </li>
  <li><strong>4. Lymphatic System:</strong> Drains excess extracellular tissue fluid back into the venous bloodstream and transports absorbed fats.</li>
</ol>`,
      [
        { key: 'Heart: Muscular pump maintaining blood flow to lungs and body', marks: '1 Mark' },
        { key: 'Blood: Plasma, RBCs (oxygen), WBCs (immunity), Platelets (clotting)', marks: '1 Mark' },
        { key: 'Vessels: Arteries, veins (with valves), capillaries, and lymphatic drainage', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q15',
      'In-Text Page 96 • Q2',
      'Why is it necessary to separate oxygenated and deoxygenated blood in mammals and birds?',
      2,
      `<p><strong>Biological Significance of Blood Separation:</strong></p>
<ol>
  <li><strong>High Energy Demand (Homeothermy):</strong> Mammals and birds are <strong>warm-blooded (endothermic/homeothermic)</strong> animals. They must constantly maintain a constant, elevated internal body temperature regardless of ambient environmental fluctuations.</li>
  <li><strong>Preventing Mixing for Maximum Efficiency:</strong> Complete anatomical separation of oxygenated and deoxygenated blood by a four-chambered heart prevents any mixing. This ensures that purely oxygen-saturated blood is delivered to metabolically active tissues.</li>
  <li>This enables highly efficient cellular respiration and ATP generation needed to fuel thermal homeostasis and vigorous physical activity.</li>
</ol>`,
      [
        { key: 'Warm-blooded animals (birds and mammals) need large energy to maintain body temperature', marks: '1 Mark' },
        { key: 'Separation prevents mixing, ensuring highly efficient oxygen delivery to tissues for high ATP output', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q16',
      'In-Text Page 96 • Q3',
      'What are the components of the transport system in highly organised plants?',
      2,
      `<p><strong>Vascular Transport Tissues in Higher Plants:</strong></p>
<ol>
  <li><strong>Xylem Tissue:</strong> Transports water and dissolved inorganic mineral salts unidirectionally upwards from the soil roots to the leaves and apical stems.
    <br><em>Conducting elements:</em> <strong>Tracheids and Xylem Vessels</strong> (dead, hollow, lignified thick tubes).
  </li>
  <li><strong>Phloem Tissue:</strong> Translocates soluble organic products of photosynthesis (sucrose, amino acids) bidirectionally from photosynthetic leaves (source) to storage organs and growing tissues (sink).
    <br><em>Conducting elements:</em> <strong>Sieve Tubes and Companion Cells</strong> (living cells with perforated sieve plates).
  </li>
</ol>`,
      [
        { key: 'Xylem: conducting water and minerals upwards via vessels and tracheids', marks: '1 Mark' },
        { key: 'Phloem: translocating photosynthates (sucrose) via sieve tubes and companion cells', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q17',
      'In-Text Page 96 • Q4',
      'How are water and minerals transported in plants?',
      3,
      `<p><strong>Mechanism of Ascent of Sap in Xylem:</strong></p>
<ol>
  <li><strong>Absorption at Roots (Root Pressure):</strong> Root hair cells actively absorb mineral ions from soil water using metabolic energy. This creates an osmotic concentration gradient between root cells and soil, causing water to flow continuously into the root xylem, generating a modest hydrostatic <strong>root pressure</strong> (significant during night).</li>
  <li><strong>Transpiration Pull (Primary Driving Force):</strong>
    <ul>
      <li>During daytime, water continuously evaporates as water vapour from the mesophyll cells of leaves through open stomatal pores—a process known as <strong>transpiration</strong>.</li>
      <li>This loss creates a massive negative hydrostatic pressure (suction tension) in the leaf xylem.</li>
      <li>Because of strong <strong>cohesion</strong> (mutual attraction between water molecules) and <strong>adhesion</strong> (attraction between water molecules and lignified xylem walls), a continuous, unbroken water column extends from roots to leaf tips.</li>
      <li>The suction tension pulls the water column upwards through tracheids and vessels against gravity, reaching heights exceeding 100 metres in tall trees.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Active mineral uptake by roots setting up osmotic gradient and root pressure', marks: '1 Mark' },
        { key: 'Transpiration at leaves creating negative suction pressure (transpiration pull)', marks: '1 Mark' },
        { key: 'Cohesive and adhesive forces maintaining unbroken xylem water column', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q18',
      'In-Text Page 96 • Q5',
      'How is food transported in plants?',
      2,
      `<p><strong>Translocation in Phloem:</strong></p>
<ol>
  <li><strong>Active Loading:</strong> Soluble products of photosynthesis, primarily <strong>sucrose</strong>, are actively loaded from leaf mesophyll cells into the sieve tubes of phloem using metabolic energy derived from <strong>ATP</strong>.</li>
  <li><strong>Osmotic Pressure Generation:</strong> The accumulation of sucrose raises the osmotic pressure inside the sieve tube, causing water to enter from adjacent xylem vessels by osmosis.</li>
  <li><strong>Bulk Flow to Sink:</strong> The resulting high hydrostatic pressure drives the phloem sap towards regions of lower osmotic pressure (such as developing roots, fruits, seeds, and buds). There, sucrose is actively unloaded and utilized or stored as starch.</li>
</ol>`,
      [
        { key: 'Active loading of sucrose into phloem sieve tubes using ATP', marks: '1 Mark' },
        { key: 'Water entry by osmosis creates hydrostatic pressure driving bulk flow to low pressure sinks', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 100 ---
    renderQCard(
      'c10s-ch5-q19',
      'In-Text Page 100 • Q1',
      'Describe the structure and functioning of nephrons.',
      3,
      `<p><strong>Nephron: The Structural and Functional Excretory Unit of Kidney</strong></p>
<ol>
  <li><strong>Structure of a Nephron:</strong> Each human kidney contains about 1 million nephrons. A nephron consists of:
    <ul>
      <li><strong>Malpighian Body:</strong> Composed of a double-walled cup called <strong>Bowman's capsule</strong> enclosing a tuft of capillaries called the <strong>glomerulus</strong>.</li>
      <li><strong>Renal Tubule:</strong> A long coiled tube differentiated into Proximal Convoluted Tubule (PCT), U-shaped <strong>Henle's loop</strong>, and Distal Convoluted Tubule (DCT), opening into a common collecting duct.</li>
    </ul>
  </li>
  <li><strong>Functioning (Three Step Process of Urine Formation):</strong>
    <ul>
      <li><strong>(a) Glomerular Ultrafiltration:</strong> Under high hydrostatic blood pressure in the glomerulus, liquid plasma containing glucose, amino acids, salts, urea, and excess water is filtered across the glomerular membrane into Bowman's capsule as primary filtrate ($\\approx 180\\text{ litres/day}$). Blood cells and proteins are retained.</li>
      <li><strong>(b) Selective Tubular Reabsorption:</strong> As the filtrate flows along the PCT and Henle's loop, all essential nutrients (100% glucose, amino acids, and major ions) and most water ($\\approx 99\\%$) are selectively reabsorbed back into the peritubular capillaries.</li>
      <li><strong>(c) Tubular Secretion:</strong> Excess potassium, hydrogen ions, and metabolic wastes are actively secreted from capillaries into the distal tubule to maintain electrolyte balance. The remaining fluid ($1 - 1.5\\text{ L/day}$) is concentrated <strong>urine</strong>.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Nephron structure: Bowman capsule, glomerulus, renal tubules (PCT, Loop of Henle, DCT)', marks: '1 Mark' },
        { key: 'Ultrafiltration under pressure forming primary filtrate (180 L/day)', marks: '1 Mark' },
        { key: 'Selective tubular reabsorption of glucose, amino acids, water and tubular secretion', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q20',
      'In-Text Page 100 • Q2',
      'What are the methods used by plants to get rid of excretory products?',
      2,
      `<p><strong>Excretory Mechanisms in Plants:</strong></p>
<ol>
  <li><strong>Gaseous Wastes:</strong> Surplus oxygen produced during photosynthesis and excess carbon dioxide produced during respiration are expelled by simple diffusion through <strong>stomata</strong> in leaves and <strong>lenticels</strong> in stems.</li>
  <li><strong>Excess Water:</strong> Removed continuously into the atmosphere as water vapour via <strong>transpiration</strong> through stomata.</li>
  <li><strong>Storage in Shedding Organs:</strong> Many metabolic wastes are stored in cellular vacuoles of older leaves, bark, and dead xylem tissues that periodically <strong>wither, turn yellow, and fall off</strong>.</li>
  <li><strong>Resins and Gums:</strong> Waste products are stored as insoluble resins and gums, especially in old, non-functional xylem.</li>
  <li><strong>Excretion into Soil:</strong> Some excretory substances are secreted directly into the soil surrounding their roots.</li>
</ol>`,
      [
        { key: 'Gaseous exchange of O2/CO2 through stomata and water removal via transpiration', marks: '1 Mark' },
        { key: 'Storage in falling leaves/bark, resins/gums in old xylem, and root secretions into soil', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q21',
      'In-Text Page 100 • Q3',
      'How is the amount of urine produced regulated?',
      2,
      `<p><strong>Regulation of Urine Volume:</strong></p>
<p>The total volume of urine produced daily depends on two primary physiological factors:</p>
<ol>
  <li><strong>Volume of Excess Water in the Body:</strong> If a person drinks plenty of fluids, the body retains less water and the kidney reabsorbs less water, producing a large volume of dilute urine. If dehydrated (or on a hot summer day with heavy sweating), kidneys reabsorb maximum water, producing a small volume of concentrated urine.</li>
  <li><strong>Amount of Dissolved Nitrogenous Wastes:</strong> The more dissolved waste products (urea, salts) to be excreted, the more water is needed to dissolve and eliminate them safely without osmotic injury.</li>
  <li><strong>Hormonal Control (ADH):</strong> Osmoreceptors in the hypothalamus stimulate the posterior pituitary to secrete <strong>Antidiuretic Hormone (ADH / Vasopressin)</strong>, which increases water permeability of DCT and collecting ducts for reabsorption when dehydrated.</li>
</ol>`,
      [
        { key: 'Dependence on amount of excess water present in body and amount of dissolved waste', marks: '1 Mark' },
        { key: 'Role of antidiuretic hormone (ADH) controlling reabsorption in collecting ducts', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q13) ---
    renderQCard(
      'c10s-ch5-q22',
      'NCERT Exercise • Q1',
      'The kidneys in human beings are a part of the system for: (a) nutrition (b) respiration (c) excretion (d) transportation.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) excretion</strong></p>
<p><strong>Reason:</strong> Kidneys filter out metabolic nitrogenous wastes such as urea and uric acid from circulating blood, forming urine to maintain osmoregulatory balance.</p>`,
      [
        { key: 'Option (c) excretion with filtration of nitrogenous waste explanation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q23',
      'NCERT Exercise • Q2',
      'The xylem in plants are responsible for: (a) transport of water (b) transport of food (c) transport of amino acids (d) transport of oxygen.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(a) transport of water</strong></p>
<p><strong>Reason:</strong> Xylem vessels and tracheids conduct water and dissolved minerals from roots upwards to leaves. Food and amino acids are transported by phloem.</p>`,
      [
        { key: 'Option (a) transport of water via xylem vessels and tracheids', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q24',
      'NCERT Exercise • Q3',
      'The autotrophic mode of nutrition requires: (a) carbon dioxide and water (b) chlorophyll (c) sunlight (d) all of the above.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) all of the above</strong></p>
<p><strong>Reason:</strong> Photosynthesis requires carbon dioxide and water as raw materials, chlorophyll pigment to absorb light photons, and radiant solar energy to drive the chemical reduction of $\\text{CO}_2$ into carbohydrates.</p>`,
      [
        { key: 'Option (d) all of the above with role of each factor in photosynthesis', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q25',
      'NCERT Exercise • Q4',
      'The breakdown of pyruvate to give carbon dioxide, water and energy takes place in: (a) cytoplasm (b) mitochondria (c) chloroplast (d) nucleus.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) mitochondria</strong></p>
<p><strong>Reason:</strong> Aerobic respiration, which oxidises 3-carbon pyruvate into carbon dioxide, water, and 36-38 ATP molecules via the Krebs cycle and electron transport chain, occurs inside the <strong>mitochondria</strong>. Glycolysis occurs in the cytoplasm.</p>`,
      [
        { key: 'Option (b) mitochondria with aerobic respiration explanation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q26',
      'NCERT Exercise • Q5',
      'How are fats digested in our bodies? Where does this process take place?',
      3,
      `<p><strong>Digestion of Fats:</strong></p>
<ol>
  <li><strong>Site of Digestion:</strong> Digestion of fats takes place predominantly in the <strong>small intestine (duodenum and ileum)</strong>.</li>
  <li><strong>Step 1: Emulsification by Bile Salts:</strong> Fats enter the duodenum as large, insoluble lipid globules that cannot be easily accessed by water-soluble enzymes. The liver secretes <strong>bile juice</strong> containing bile salts (sodium glycocholate and sodium taurocholate). Bile salts break down large fat globules into minute droplets, increasing the surface area for enzyme action. This is called <strong>emulsification</strong>.</li>
  <li><strong>Step 2: Hydrolysis by Pancreatic and Intestinal Lipase:</strong> The pancreas secretes <strong>lipase</strong> in pancreatic juice, and intestinal glands secrete intestinal lipase. Lipase hydrolyses emulsified fat molecules into absorbable <strong>fatty acids and glycerol</strong>:
    $$\\text{Emulsified Fats} \\xrightarrow{\\text{Lipase}} \\text{Fatty acids} + \\text{Glycerol}$$
  </li>
  <li>These products are absorbed into the central lacteals of the intestinal villi.</li>
</ol>`,
      [
        { key: 'Site: Small intestine (duodenum)', marks: '1 Mark' },
        { key: 'Emulsification: Bile salts break large fat globules into small droplets to increase surface area', marks: '1 Mark' },
        { key: 'Enzymatic hydrolysis: Pancreatic/intestinal lipase converts fats into fatty acids and glycerol', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q27',
      'NCERT Exercise • Q6',
      'What is the role of saliva in the digestion of food?',
      2,
      `<p><strong>Functions of Saliva in Digestion:</strong></p>
<ol>
  <li><strong>Chemical Digestion of Starch:</strong> Saliva contains the digestive enzyme <strong>salivary amylase (ptyalin)</strong>. It breaks down complex insoluble starch molecules into simpler disaccharide sugars (maltose) at an optimum pH of $\\approx 6.8$:
    $$\\text{Starch} \\xrightarrow{\\text{Salivary amylase}} \\text{Maltose (Sugar)}$$
  </li>
  <li><strong>Lubrication and Bolus Formation:</strong> Saliva contains water and <strong>mucus</strong> that moistens and lubricates dry food particles. Mastication by teeth blends food with saliva into a smooth, cohesive ball called a <strong>bolus</strong>, making swallowing (deglutition) down the oesophagus smooth and effortless.</li>
  <li><strong>Oral Hygiene:</strong> Saliva contains <strong>lysozyme</strong>, an antibacterial enzyme that destroys oral bacteria.</li>
</ol>`,
      [
        { key: 'Salivary amylase hydrolyses complex starch into maltose sugars', marks: '1 Mark' },
        { key: 'Mucus lubricates and binds food into a swallowable bolus and lysozyme kills bacteria', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q28',
      'NCERT Exercise • Q7',
      'What are the necessary conditions for autotrophic nutrition and what are its by-products?',
      2,
      `<p><strong>Conditions and By-products of Autotrophic Nutrition:</strong></p>
<ol>
  <li><strong>Necessary Conditions:</strong>
    <ul>
      <li>Presence of the green pigment <strong>chlorophyll</strong> inside chloroplasts to absorb light energy.</li>
      <li>Availability of <strong>sunlight</strong> photons.</li>
      <li>Supply of inorganic <strong>carbon dioxide ($\\text{CO}_2$)</strong> from atmosphere.</li>
      <li>Supply of <strong>water ($\\text{H}_2\\text{O}$)</strong> absorbed from soil.</li>
    </ul>
    $$6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2\\uparrow + 6\\text{H}_2\\text{O}$$
  </li>
  <li><strong>By-products of Autotrophic Nutrition:</strong>
    <ul>
      <li><strong>Oxygen gas ($\\text{O}_2$):</strong> Released as a vital by-product formed by the photolysis of water.</li>
      <li><strong>Water ($\\text{H}_2\\text{O}$):</strong> Released as transpired vapour.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Conditions: Chlorophyll, sunlight, CO2, and water with balanced photosynthesis equation', marks: '1 Mark' },
        { key: 'By-products: Oxygen (O2) from photolysis of water and transpired water vapour', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q29',
      'NCERT Exercise • Q8',
      'What are the differences between aerobic and anaerobic respiration? Name some organisms that use the anaerobic mode of respiration.',
      3,
      `<p><strong>Comparison of Aerobic and Anaerobic Respiration:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Aerobic Respiration</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Anaerobic Respiration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Oxygen Requirement</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Takes place strictly in the presence of oxygen.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Takes place in the total absence or deficit of oxygen.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Site of Occurrence</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Begins in cytoplasm, completed in mitochondria.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Occurs entirely in the cytoplasm.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>End Products</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Carbon dioxide ($\\text{CO}_2$) and Water ($\\text{H}_2\\text{O}$).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Ethanol and $\\text{CO}_2$ (in yeast) OR Lactic acid (in muscles).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Energy Yield</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Complete oxidation yielding <strong>38 ATP</strong> per glucose.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Incomplete oxidation yielding only <strong>2 ATP</strong> per glucose.</td>
    </tr>
  </tbody>
</table>
<p><strong>Organisms using Anaerobic Respiration:</strong> <strong>Yeast</strong> (<em>Saccharomyces cerevisiae</em>), anaerobic bacteria (e.g., <em>Clostridium tetani</em>), parasitic intestinal worms (e.g., <em>Ascaris</em>, tapeworm), and human skeletal muscles during extreme exercise.</p>`,
      [
        { key: 'Oxygen presence vs absence, and mitochondrial site vs cytoplasmic site', marks: '1 Mark' },
        { key: 'End products (CO2 + H2O vs ethanol/lactic acid) and energy yield (38 ATP vs 2 ATP)', marks: '1 Mark' },
        { key: 'Organisms: Yeast, anaerobic bacteria, parasitic roundworms', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q30',
      'NCERT Exercise • Q9',
      'How are the alveoli designed to maximise the exchange of gases?',
      2,
      `<p><strong>Structural Adaptations of Alveoli:</strong></p>
<ol>
  <li><strong>Gigantic Surface Area:</strong> Hundreds of millions of tiny balloon-like alveoli in both lungs provide a combined surface area of roughly <strong>$80\\text{ m}^2$</strong>, maximizing the interface for gaseous diffusion.</li>
  <li><strong>Extremely Thin Diffusion Barrier:</strong> The alveolar wall is composed of a single layer of squamous epithelial cells, and the pulmonary capillary is made of a single endothelial layer. The total diffusion thickness is less than <strong>$0.5\\ \\mu\\text{m}$</strong>.</li>
  <li><strong>Extensive Capillary Network:</strong> The outer surface of each alveolus is wrapped in an intricate web of fine blood capillaries, ensuring high blood flow and steep partial pressure gradients for rapid $\\text{O}_2$ absorption and $\\text{CO}_2$ release.</li>
  <li><strong>Moist Inner Lining:</strong> Alveolar surfaces are coated with a thin moisture film, allowing oxygen gas to dissolve before diffusing across cell membranes.</li>
</ol>`,
      [
        { key: 'Immense surface area (~80 m2) provided by millions of microscopic balloon sacs', marks: '1 Mark' },
        { key: 'Extremely thin membrane (one-cell-thick), moist surface, and rich blood capillary network', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q31',
      'NCERT Exercise • Q10',
      'What would be the consequences of a deficiency of haemoglobin in our bodies?',
      2,
      `<p><strong>Consequences of Haemoglobin Deficiency (Anaemia):</strong></p>
<p>Haemoglobin is the iron-containing pigment in red blood cells that transports oxygen to body tissues. A deficiency of haemoglobin leads to a condition called <strong>Anaemia</strong>, with the following physiological effects:</p>
<ol>
  <li><strong>Reduced Oxygen Carrying Capacity:</strong> The oxygen-carrying capacity of blood drops drastically. Tissue cells receive inadequate oxygen supplies.</li>
  <li><strong>Impaired Cellular Respiration:</strong> Due to oxygen deprivation, the rate of aerobic cellular oxidation slows down, resulting in diminished ATP production.</li>
  <li><strong>Fatigue and Breathlessness:</strong> The person experiences chronic exhaustion, physical weakness, pale skin, dizziness, and shortness of breath (hyperventilation as the body tries to compensate for oxygen deficits).</li>
</ol>`,
      [
        { key: 'Condition known as anaemia resulting in reduced oxygen delivery to body cells', marks: '1 Mark' },
        { key: 'Leads to decreased ATP production causing extreme fatigue, breathlessness, and paleness', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q32',
      'NCERT Exercise • Q11',
      'Describe double circulation of blood in human beings. Why is it necessary?',
      3,
      `<p><strong>Double Circulation in Humans:</strong></p>
<p>In human beings, blood travels through the heart <strong>twice</strong> during each complete circuit of the body. This consists of two separate circulatory circuits:</p>
<ol>
  <li><strong>1. Pulmonary Circulation:</strong>
    <ul>
      <li>Deoxygenated blood from body tissues enters the Right Atrium &rarr; passes into the Right Ventricle.</li>
      <li>The Right Ventricle pumps it through the <strong>pulmonary artery</strong> to the lungs.</li>
      <li>In the lungs, blood discharges $\\text{CO}_2$ and picks up $\\text{O}_2$.</li>
      <li>Oxygenated blood returns to the Left Atrium via the <strong>pulmonary veins</strong>.</li>
    </ul>
  </li>
  <li><strong>2. Systemic Circulation:</strong>
    <ul>
      <li>Oxygenated blood flows from Left Atrium &rarr; into the thick-walled Left Ventricle.</li>
      <li>The Left Ventricle pumps it under high pressure into the <strong>aorta</strong>, distributing it to all systemic organs and body tissues.</li>
      <li>In tissues, oxygen is delivered and metabolic $\\text{CO}_2$ is picked up.</li>
      <li>Deoxygenated blood returns via the vena cava to the Right Atrium.</li>
    </ul>
  </li>
</ol>
<p><strong>Why Double Circulation is Necessary:</strong></p>
<p>It completely separates oxygen-rich blood from deoxygenated blood, ensuring that systemic organs receive pure oxygenated blood under high pressure. This sustains the high metabolic rate and continuous heat production required by warm-blooded mammals.</p>`,
      [
        { key: 'Pulmonary circulation: Right ventricle -> Lungs -> Left atrium', marks: '1 Mark' },
        { key: 'Systemic circulation: Left ventricle -> Body tissues -> Right atrium', marks: '1 Mark' },
        { key: 'Necessity: Prevents mixing of oxygenated/deoxygenated blood for high energy/temperature maintenance', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q33',
      'NCERT Exercise • Q12',
      'What are the differences between the transport of materials in xylem and phloem?',
      2,
      `<p><strong>Comparison of Xylem and Phloem Transport:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Parameter</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Transport in Xylem</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Transport in Phloem</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Substances Transported</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Water and dissolved inorganic mineral salts.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Organic nutrients (sucrose, amino acids, hormones).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Direction of Flow</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Strictly <strong>unidirectional</strong> (upwards from roots to leaves).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Bidirectional</strong> (from source leaves to sinks in roots/buds).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Driving Mechanism</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Physical forces (transpiration pull, root pressure, cohesion); non-ATP driven.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Active transport; requires energy in the form of <strong>ATP</strong> to build osmotic pressure.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Cell Nature</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Vessels and tracheids are <strong>dead lignified cells</strong>.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Sieve tubes and companion cells are <strong>living cells</strong>.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Xylem conducts water/minerals unidirectionally using physical transpiration pull', marks: '1 Mark' },
        { key: 'Phloem translocates organic nutrients bidirectionally using metabolic ATP energy', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch5-q34',
      'NCERT Exercise • Q13',
      'Compare the functioning of alveoli in the lungs and nephrons in the kidneys with respect to their structure and functioning.',
      3,
      `<p><strong>Comparison of Alveoli (Lungs) and Nephrons (Kidneys):</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Alveoli (Respiratory System)</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Nephrons (Excretory System)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Structural Design</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Microscopic balloon-like air sacs surrounded by an extensive mesh of pulmonary capillaries.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Elongated tubular structures consisting of Bowman's capsule, glomerulus, Henle's loop, and collecting tubules.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Nature of Filtration</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Passive physical diffusion of gases across a thin semipermeable alveolar membrane.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">High-pressure glomerular ultrafiltration of liquid blood plasma followed by selective tubular reabsorption.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Substances Exchanged</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Oxygen gas taken in from air; Carbon dioxide gas expelled from blood.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Toxic nitrogenous wastes (urea, uric acid) and excess ions expelled as urine; glucose and water reabsorbed.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Surface Area Expansion</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Expands surface area to $\\approx 80\\text{ m}^2$ for rapid gas exchange.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Coiled tubules provide immense surface area for tubular reabsorption.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Structural comparison: Balloon air sacs vs Bowman capsule and renal tubules', marks: '1 Mark' },
        { key: 'Functional comparison: Gaseous diffusion (O2/CO2) vs liquid ultrafiltration and reabsorption', marks: '1 Mark' },
        { key: 'Waste products comparison: Expulsion of CO2 vs expulsion of urea/nitrogenous waste in urine', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 5</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Haemodialysis (Artificial Kidney)</div>
        <div class="cbq-question">In cases of chronic renal failure, patients are kept alive using an artificial kidney (haemodialysis machine). (i) What is the function of the cellophane tubes in the dialyser? (ii) What is the composition of the dialysing solution compared to normal blood plasma? (iii) How does haemodialysis differ fundamentally from a healthy living kidney in terms of tubular reabsorption?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Function of Cellophane Tubes:</strong> Cellophane tubes are made of a selectively semipermeable membrane that allows small solute molecules like urea, uric acid, and excess mineral salts to diffuse through while retaining large blood cells and plasma proteins inside the blood circuit.</li>
  <li><strong>(ii) Composition of Dialysing Fluid:</strong> The dialysing fluid has the exact same osmotic pressure and concentration of essential electrolytes and glucose as normal blood plasma, but it contains <strong>zero nitrogenous wastes (zero urea)</strong>. This steep concentration gradient ensures that urea and uric acid diffuse passively out of the patient's blood into the dialysing fluid.</li>
  <li><strong>(iii) Difference from Natural Kidney:</strong> In a natural kidney, approximately $180\\text{ litres}$ of primary filtrate is filtered daily and $99\\%$ of water and glucose is selectively reabsorbed along the renal tubules. In haemodialysis, <strong>there is no tubular reabsorption</strong>; only waste diffusion takes place across cellophane tubes into the bath.</li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch5">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 5: Life Processes</h2>
      <p>Nutrition, Respiration, Transportation in Animals & Plants, Excretion and Nephron Physiology — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 81, 87, 91, 96, 100) &amp; Chapter-End Exercises (Questions 1 to 13)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(4)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(6)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 6: CONTROL AND COORDINATION (14 In-Text Qs + 12 Exercises = 26 Qs + 1 CBQ)
// ============================================================================
function getChapter6Html() {
  const qCards = [
    // --- In-Text Page 105 ---
    renderQCard(
      'c10s-ch6-q1',
      'In-Text Page 105 • Q1',
      'What is the difference between a reflex action and walking?',
      2,
      `<p><strong>Comparison:</strong></p>
<ol>
  <li><strong>Reflex Action:</strong> An instantaneous, involuntary, and automatic motor response to a sensory stimulus executed without conscious thinking or cerebral processing. It is mediated primarily by the <strong>spinal cord</strong> (e.g., withdrawing hand on touching a hot plate).</li>
  <li><strong>Walking:</strong> A <strong>voluntary action</strong> initiated, coordinated, and controlled consciously by the cerebral cortex and cerebellum of the <strong>brain</strong> according to the organism's conscious will and intention.</li>
</ol>`,
      [
        { key: 'Reflex: involuntary, unconscious, mediated by spinal cord', marks: '1 Mark' },
        { key: 'Walking: voluntary, learned, conscious, controlled by brain (cerebrum/cerebellum)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q2',
      'In-Text Page 105 • Q2',
      'What happens at the synapse between two neurons?',
      2,
      `<p><strong>Transmission across Synapse:</strong></p>
<p>A <strong>synapse</strong> is a microscopic junction gap separating the axon terminal of one neuron from the dendrite of the next neuron.</p>
<ol>
  <li>When an electrical nerve impulse reaches the axon terminal, it triggers synaptic vesicles to release chemical messenger molecules called <strong>neurotransmitters</strong> (e.g., acetylcholine) into the synaptic cleft.</li>
  <li>These chemical molecules diffuse across the microscopic synaptic gap and bind to specific receptor sites on the dendrite of the adjacent neuron.</li>
  <li>This chemical binding sets off a new electrical impulse in the receiving neuron. Because neurotransmitters are released only from axon terminals, impulses travel strictly in a <strong>unidirectional</strong> manner across synapses.</li>
</ol>`,
      [
        { key: 'Electrical impulse releases neurotransmitters into the synaptic cleft', marks: '1 Mark' },
        { key: 'Neurotransmitters diffuse across synapse, bind to dendrite receptors, and generate new impulse', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q3',
      'In-Text Page 105 • Q3',
      'Which part of the brain maintains posture and equilibrium of the body?',
      1,
      `<p>Posture and equilibrium of the body are maintained by the <strong>Cerebellum</strong>, which is a component of the <strong>hindbrain</strong>. It coordinates voluntary motor activities and muscular precision.</p>`,
      [
        { key: 'Cerebellum (Hindbrain)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q4',
      'In-Text Page 105 • Q4',
      'How do we detect the smell of an agarbatti (incense stick)?',
      2,
      `<p><strong>Mechanism of Olfactory Perception:</strong></p>
<ol>
  <li>Volatile chemical fragrance molecules from the burning incense stick diffuse into the air and enter the nasal cavity during breathing.</li>
  <li>These molecules dissolve in the nasal mucus and bind to specialized sensory receptors called <strong>olfactory receptors</strong> located in the olfactory epithelium.</li>
  <li>Olfactory receptors generate electrical nerve impulses that travel via the olfactory nerve to the <strong>olfactory lobes of the forebrain (cerebrum)</strong>.</li>
  <li>The forebrain interprets the sensory signals by comparing them with previously stored memories of smells, enabling conscious recognition of the incense fragrance.</li>
</ol>`,
      [
        { key: 'Olfactory receptors in nasal epithelium detect volatile fragrance molecules and generate impulses', marks: '1 Mark' },
        { key: 'Impulses sent via olfactory nerve to forebrain (cerebrum) for interpretation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q5',
      'In-Text Page 105 • Q5',
      'What is the role of the brain in reflex action?',
      2,
      `<p><strong>Role of the Brain in Reflex Actions:</strong></p>
<ol>
  <li>The brain plays <strong>no direct role in initiating or executing spinal reflex actions</strong>. To ensure survival and avoid tissue damage, reflex arcs are completed inside the spinal cord so the motor response occurs within milliseconds without waiting for slow cerebral processing.</li>
  <li>However, as the sensory neuron enters the spinal cord, a parallel relay neuron sends an informational signal upward to the brain.</li>
  <li>The brain receives this sensory information, creates a conscious awareness of the event (e.g., perceiving pain), and stores the memory to modify future voluntary behaviour.</li>
</ol>`,
      [
        { key: 'Spinal reflex is executed autonomously by spinal cord without prior brain intervention', marks: '1 Mark' },
        { key: 'Brain receives secondary signal for conscious awareness of pain and memory recording', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 108 ---
    renderQCard(
      'c10s-ch6-q6',
      'In-Text Page 108 • Q1',
      'What are plant hormones (phytohormones)?',
      2,
      `<p><strong>Definition:</strong></p>
<p>Plant hormones (phytohormones) are naturally occurring organic chemical compounds synthesized in minute quantities in one part of a plant (such as shoot tips, root tips, young leaves) and translocated to other parts where they regulate physiological processes including growth, cell division, cell elongation, flowering, and responses to environmental stimuli.</p>
<p><em>Examples:</em> Auxins, Gibberellins, Cytokinins (growth promoters), and Abscisic acid (growth inhibitor).</p>`,
      [
        { key: 'Chemical substances synthesized in minute amounts regulating growth and physiological responses', marks: '1 Mark' },
        { key: 'Examples: Auxins, Gibberellins, Cytokinins, Abscisic acid', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q7',
      'In-Text Page 108 • Q2',
      'How is the movement of leaves of the sensitive plant different from the movement of a shoot towards light?',
      2,
      `<p><strong>Comparison of Plant Movements:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Movement of Sensitive Plant (Mimosa)</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Movement of Shoot Towards Light</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Type of Movement</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Nastic movement</strong> (non-directional; thigmonasty).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Tropic movement</strong> (directional; positive phototropism).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Growth Dependence</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Growth-independent</strong>; caused by rapid turgor pressure changes in pulvinus cells.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Growth-dependent</strong>; caused by differential cell elongation mediated by auxin.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Speed & Reversibility</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Extremely rapid and fully reversible.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Slow, gradual, and irreversible.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Sensitive plant: non-directional nastic movement independent of growth caused by turgor changes', marks: '1 Mark' },
        { key: 'Shoot phototropism: directional tropic movement dependent on growth caused by auxin elongation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q8',
      'In-Text Page 108 • Q3',
      'Give an example of a plant hormone that promotes growth.',
      1,
      `<p><strong>Auxin</strong> (or <strong>Gibberellin</strong> / <strong>Cytokinin</strong>) is a plant hormone that promotes growth by stimulating cell elongation, apical dominance, and cell division.</p>`,
      [
        { key: 'Auxin / Gibberellin / Cytokinin', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q9',
      'In-Text Page 108 • Q4',
      'How do auxins promote the growth of a tendril around a support?',
      2,
      `<p><strong>Thigmotropic Mechanism of Tendrils:</strong></p>
<ol>
  <li>Tendrils of climbing plants (like pea, bitter gourd) are sensitive to contact.</li>
  <li>When a tendril touches an external physical support, <strong>auxin diffuses away from the side in contact towards the side away from the support</strong>.</li>
  <li>The higher concentration of auxin on the non-contact side stimulates rapid cell elongation and faster growth on that side compared to the contact side.</li>
  <li>This unequal, differential growth rate causes the tendril to curve inwards and coil tightly around the support like a spring, securing the climbing plant.</li>
</ol>`,
      [
        { key: 'Auxin diffuses away from contact side to the side away from support', marks: '1 Mark' },
        { key: 'Higher auxin causes greater cell elongation on outer side, coiling tendril around support', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q10',
      'In-Text Page 108 • Q5',
      'Design an experiment to demonstrate hydrotropism.',
      2,
      `<p><strong>Hydrotropism Demonstration:</strong></p>
<ol>
  <li><strong>Setup:</strong> Take a flat tray filled with dry soil. Sow germinating pea seeds in the soil. At one end of the tray, place a porous clay pot filled with water.</li>
  <li><strong>Observation:</strong> Keep the setup undisturbed for 4 to 6 days. As the seeds germinate, observe the direction of root growth.</li>
  <li><strong>Result:</strong> The radicles (young roots) initially grow downwards due to positive geotropism, but soon curve and grow horizontally <strong>towards the moist porous water pot</strong>.</li>
  <li><strong>Conclusion:</strong> This directional curvature of plant roots towards moisture demonstrates <strong>positive hydrotropism</strong> (overcoming positive geotropism).</li>
</ol>`,
      [
        { key: 'Experimental setup with germinating seeds and porous water vessel in dry soil', marks: '1 Mark' },
        { key: 'Observation showing roots curving towards water source proves positive hydrotropism', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 112 ---
    renderQCard(
      'c10s-ch6-q11',
      'In-Text Page 112 • Q1',
      'How does chemical coordination take place in animals?',
      2,
      `<p><strong>Endocrine Chemical Coordination:</strong></p>
<ol>
  <li>Chemical coordination in animals is mediated by specialized ductless glands called <strong>endocrine glands</strong>.</li>
  <li>These glands synthesize and secrete chemical messengers called <strong>hormones</strong> directly into the bloodstream without any ducts.</li>
  <li>The circulating blood transports hormones throughout the entire body. Hormones act specifically on distant <strong>target tissues and organs</strong> that bear specialized complementary receptor proteins on their cell surfaces.</li>
  <li>Upon binding to target receptors, hormones initiate specific biochemical responses (e.g., insulin regulating blood glucose uptake, adrenaline accelerating heart rate).</li>
</ol>`,
      [
        { key: 'Ductless endocrine glands secrete hormones directly into bloodstream', marks: '1 Mark' },
        { key: 'Hormones travel via blood to specific target organs bearing complementary receptors', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q12',
      'In-Text Page 112 • Q2',
      'Why is the use of iodised salt advisable?',
      2,
      `<p><strong>Reason for Using Iodised Salt:</strong></p>
<ol>
  <li>Iodine is an essential dietary mineral required by the <strong>thyroid gland</strong> to synthesize the hormone <strong>thyroxin</strong>.</li>
  <li>Thyroxin regulates the basal metabolic rate (BMR) and orchestrates carbohydrate, protein, and fat metabolism for balanced physical growth and mental development.</li>
  <li>If iodine is deficient in our diet, the thyroid gland cannot synthesize sufficient thyroxin and enlarges in an attempt to capture more iodine, causing a disease called <strong>Goitre</strong> (characterized by a swollen neck).</li>
  <li>Therefore, consuming iodised common salt provides the daily micro-requirement of iodine and prevents goitre and thyroid dysfunction.</li>
</ol>`,
      [
        { key: 'Iodine is necessary for thyroid gland to synthesize thyroxin hormone', marks: '1 Mark' },
        { key: 'Deficiency causes thyroid enlargement resulting in goitre and metabolic slowdown', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q13',
      'In-Text Page 112 • Q3',
      'How does our body respond when adrenaline is secreted into the blood?',
      2,
      `<p><strong>Physiological "Fight or Flight" Response to Adrenaline:</strong></p>
<p>When an individual faces stress, fear, or physical danger, the adrenal medulla secretes <strong>adrenaline</strong> directly into the blood, triggering rapid systemic adjustments:</p>
<ol>
  <li><strong>Accelerated Heart Rate:</strong> The heart beats faster and pumps with greater stroke volume, supplying more oxygen to skeletal muscles.</li>
  <li><strong>Diversion of Blood Flow:</strong> Smooth muscles around arterioles in the digestive system and skin contract, diverting blood supply primarily to active skeletal muscles.</li>
  <li><strong>Increased Breathing Rate:</strong> Diaphragm and rib muscles contract faster, increasing pulmonary oxygen uptake.</li>
  <li><strong>Glycogen Breakdown:</strong> Liver converts stored glycogen into glucose, flooding the bloodstream with metabolic energy to fight or flee.</li>
</ol>`,
      [
        { key: 'Heart beats faster delivering more oxygen to skeletal muscles', marks: '1 Mark' },
        { key: 'Blood diverted from skin/gut to muscles and breathing rate accelerates for emergency action', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q14',
      'In-Text Page 112 • Q4',
      'Why are some patients of diabetes treated by giving injections of insulin?',
      2,
      `<p><strong>Reason for Insulin Injections:</strong></p>
<ol>
  <li><strong>Insulin</strong> is a peptide hormone produced by the $\\beta$-cells of the Islets of Langerhans in the <strong>pancreas</strong>. Its primary role is to promote the cellular uptake of glucose and stimulate the liver and muscles to convert excess glucose into stored glycogen, keeping blood sugar within normal limits ($70 - 140\\text{ mg/dL}$).</li>
  <li>In patients suffering from <strong>diabetes mellitus</strong>, the pancreas fails to produce adequate insulin. As a result, glucose cannot enter cells, leading to dangerously elevated blood sugar levels (hyperglycaemia) and loss of glucose in urine.</li>
  <li>Administering insulin injections artificially supplements the hormone, lowering blood sugar levels to normal physiological ranges and preventing organ damage.</li>
</ol>`,
      [
        { key: 'Insulin produced by pancreas regulates and lowers blood glucose levels', marks: '1 Mark' },
        { key: 'Diabetic deficiency causes hyperglycaemia; insulin injections restore normal blood sugar', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q12) ---
    renderQCard(
      'c10s-ch6-q15',
      'NCERT Exercise • Q1',
      'Which of the following is a plant hormone? (a) Insulin (b) Thyroxin (c) Oestrogen (d) Cytokinin.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) Cytokinin</strong></p>
<p><strong>Reason:</strong> Cytokinins are plant hormones that promote cell division (cytokinesis) and are present in high concentrations in rapidly dividing tissues such as fruits and seeds. Insulin, thyroxin, and oestrogen are animal hormones.</p>`,
      [
        { key: 'Option (d) Cytokinin with identification of plant cell division role', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q16',
      'NCERT Exercise • Q2',
      'The gap between two neurons is called a: (a) dendrite (b) synapse (c) axon (d) impulse.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) synapse</strong></p>
<p><strong>Reason:</strong> The microscopic structural and functional junction gap across which nerve impulses are transmitted via chemical neurotransmitters from an axon terminal to the dendrite of the next neuron is called a <strong>synapse</strong>.</p>`,
      [
        { key: 'Option (b) synapse with definition', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q17',
      'NCERT Exercise • Q3',
      'The brain is responsible for: (a) thinking (b) regulating the heart beat (c) balancing the body (d) all of the above.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) all of the above</strong></p>
<p><strong>Reason:</strong> The cerebrum controls thinking and reasoning, the medulla oblongata regulates vital involuntary activities like heartbeat and respiration, and the cerebellum maintains posture and body balance.</p>`,
      [
        { key: 'Option (d) all of the above with roles of cerebrum, medulla, and cerebellum', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q18',
      'NCERT Exercise • Q4',
      'What is the function of receptors in our body? Think of situations where receptors do not work properly. What problems are likely to arise?',
      3,
      `<p><strong>Role of Receptors and Malfunction:</strong></p>
<ol>
  <li><strong>Function of Receptors:</strong> Receptors are specialized sensory structures located in our sense organs that detect environmental stimuli (light, sound, heat, pressure, taste, smell) and convert them into electrical nerve impulses to inform the central nervous system.</li>
  <li><strong>Problems When Receptors Malfunction:</strong>
    <ul>
      <li><em>Photoreceptors (Eyes):</em> Inability to perceive light signals, leading to partial or complete blindness and inability to navigate hazards.</li>
      <li><em>Thermoreceptors / Nociceptors (Skin):</em> If heat and pain receptors fail, a person touching a scalding hot surface will not feel pain or withdraw their hand, resulting in severe tissue burns and ulceration.</li>
      <li><em>Gustatory & Olfactory Receptors (Tongue & Nose):</em> Loss of taste and smell (as in severe viral respiratory infections), impairing appetite and preventing detection of spoiled food or leaking toxic gas.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Function: Detecting external stimuli and converting into nerve impulses', marks: '1 Mark' },
        { key: 'Consequences of pain receptor failure: Severe burns/injuries due to lack of withdrawal reflexes', marks: '1 Mark' },
        { key: 'Consequences of sensory receptor failure: Loss of environmental awareness/hazards', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q19',
      'NCERT Exercise • Q5',
      'Draw the structure of a neuron and explain its function.',
      3,
      `<p><strong>Neuron Structure and Function:</strong></p>
<ol>
  <li><strong>Structural Components:</strong>
    <ul>
      <li><strong>Cyton (Cell Body / Soma):</strong> Contains a prominent nucleus, neuroplasm, and Nissl's granules.</li>
      <li><strong>Dendrites:</strong> Fine, branched protoplasmic projections radiating from the cell body that receive sensory inputs and chemical signals from adjacent neurons.</li>
      <li><strong>Axon:</strong> A long cylindrical cytoplasmic process wrapped in an insulating <strong>myelin sheath</strong> (interrupted at Nodes of Ranvier) that conducts impulses rapidly away from the cyton.</li>
      <li><strong>Axon Terminal / Synaptic Knobs:</strong> Bulbous nerve endings that store and release neurotransmitters.</li>
    </ul>
  </li>
  <li><strong>Function:</strong> Neurons are specialized excitable cells that perceive stimuli, convert them into electrical nerve impulses, transmit impulses across synapses, and coordinate rapid communication between sensory receptors, the central nervous system, and effector muscles/glands.</li>
</ol>`,
      [
        { key: 'Neuron structure description: Cyton (cell body), dendrites, axon with myelin sheath, terminals', marks: '1.5 Marks' },
        { key: 'Function: Receiving, conducting, and transmitting electrical nerve impulses', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q20',
      'NCERT Exercise • Q6',
      'How does phototropism occur in plants?',
      2,
      `<p><strong>Mechanism of Phototropism:</strong></p>
<ol>
  <li>When growing plant shoots detect unilateral light coming from one side, the plant growth hormone <strong>auxin</strong> synthesized at the shoot tip diffuses towards the <strong>shaded side</strong> of the shoot.</li>
  <li>The elevated concentration of auxin on the darker/shaded side stimulates cells to elongate more rapidly than cells on the illuminated side.</li>
  <li>Because the shaded side grows faster than the sunlit side, the shoot bends smoothly towards the light source, exhibiting <strong>positive phototropism</strong>. Roots exhibit negative phototropism by growing away from light.</li>
</ol>`,
      [
        { key: 'Auxin synthesised at shoot tip diffuses to the shaded side', marks: '1 Mark' },
        { key: 'Higher auxin concentration accelerates cell elongation on shaded side causing bending towards light', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q21',
      'NCERT Exercise • Q7',
      'Which signals will get disrupted in case of a spinal cord injury?',
      2,
      `<p><strong>Disrupted Signals:</strong></p>
<p>The spinal cord acts as the central communication highway between peripheral nerves and the brain. In the event of a spinal cord injury, the following signals will be severely disrupted:</p>
<ol>
  <li><strong>Spinal Reflex Arcs:</strong> Automatic involuntary reflex actions below the level of injury (such as knee-jerk, withdrawal reflex) will be blocked.</li>
  <li><strong>Ascending Sensory Signals:</strong> Sensory impulses carrying sensations of touch, temperature, pain, and pressure from lower body regions cannot reach the brain, causing loss of sensation (anaesthesia).</li>
  <li><strong>Descending Motor Signals:</strong> Voluntary motor commands from the cerebral cortex cannot reach peripheral muscles, resulting in paralysis of limbs and loss of bladder/bowel control.</li>
</ol>`,
      [
        { key: 'Disruption of spinal reflex actions below injury level', marks: '1 Mark' },
        { key: 'Disruption of ascending sensory signals (pain/touch) and descending motor signals (voluntary paralysis)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q22',
      'NCERT Exercise • Q8',
      'How does chemical coordination occur in plants?',
      2,
      `<p><strong>Chemical Coordination in Plants:</strong></p>
<ol>
  <li>Plants do not have a nervous system or muscular tissue. Coordination is carried out entirely through chemical substances called <strong>phytohormones (plant hormones)</strong>.</li>
  <li>Different hormones are produced in response to environmental stimuli:
    <ul>
      <li><strong>Auxins:</strong> Direct tropic curvatures (phototropism, geotropism) by differential cell elongation.</li>
      <li><strong>Gibberellins:</strong> Promote stem elongation and break seed dormancy.</li>
      <li><strong>Cytokinins:</strong> Promote rapid cell division in fruits and seeds and delay leaf senescence.</li>
      <li><strong>Abscisic Acid (ABA):</strong> Stress hormone that inhibits growth, causes stomatal closure during drought, and induces leaf fall (abscission).</li>
    </ul>
  </li>
  <li>These chemical signals diffuse through plant tissues, activating biochemical responses in target cells.</li>
</ol>`,
      [
        { key: 'Phytohormones synthesised in cells diffuse to regulate physiological growth responses', marks: '1 Mark' },
        { key: 'Specific hormones and roles: Auxins (tropism), Cytokinins (cell division), ABA (growth inhibition)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q23',
      'NCERT Exercise • Q9',
      'What is the need for a system of control and coordination in an organism?',
      2,
      `<p><strong>Need for Control and Coordination:</strong></p>
<ol>
  <li><strong>Integration of Diverse Organs:</strong> A multicellular organism contains trillions of cells organized into specialized organs (heart, lungs, digestive tract, muscles). For the organism to survive, these organs must work in harmony and precise synchrony rather than independently.</li>
  <li><strong>Survival and Response to Stimuli:</strong> Animals must perceive environmental changes (predators, food, danger) and execute immediate coordinated movements to survive.</li>
  <li><strong>Homeostasis:</strong> It maintains internal physiological stability (body temperature, blood glucose levels, blood pressure, osmoregulation) despite fluctuations in the external environment.</li>
</ol>`,
      [
        { key: 'Harmonising and integrating the independent functions of different organ systems', marks: '1 Mark' },
        { key: 'Ensuring timely survival responses to external stimuli and maintaining internal homeostasis', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q24',
      'NCERT Exercise • Q10',
      'How are involuntary actions and reflex actions different from each other?',
      2,
      `<p><strong>Comparison:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Involuntary Action</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Reflex Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Controlling Center</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Controlled by the <strong>hindbrain (medulla oblongata)</strong> and midbrain.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Controlled primarily by the <strong>spinal cord</strong> (spinal reflex arc).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Nature of Trigger</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Occur continuously or rhythmically without needing a sudden external emergency stimulus.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Triggered instantaneously in response to a sudden external sensory stimulus.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Examples</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Heartbeat, peristalsis in gut, breathing movements, blood pressure.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Knee jerk, pupil constriction in bright light, pulling hand away from heat.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Involuntary actions: Controlled by hindbrain/medulla; regular continuous physiological actions', marks: '1 Mark' },
        { key: 'Reflex actions: Controlled by spinal cord; sudden emergency responses to sensory stimuli', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q25',
      'NCERT Exercise • Q11',
      'Compare and contrast nervous and hormonal mechanisms for control and coordination in animals.',
      3,
      `<p><strong>Nervous vs Hormonal Mechanisms:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Property</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Nervous Coordination</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Hormonal Coordination</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Signal Medium</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Electrochemical nerve impulses transmitted along specialized axons.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Chemical molecules (hormones) circulating in the bloodstream.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Speed of Action</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Extremely rapid (milliseconds).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Slow, gradual response (minutes to days).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Duration of Effect</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Short-lived and transient; ceases once impulse stops.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Long-lasting and persistent physiological changes.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Target Specificity</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Point-to-point wiring; acts only on cells directly innervated by nerve endings.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Widespread; acts on all cells bearing matching receptor proteins.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Electrochemical impulses via neurons vs chemical messengers via bloodstream', marks: '1 Mark' },
        { key: 'Rapid short-lived point-to-point response vs slow long-lasting widespread response', marks: '1 Mark' },
        { key: 'Innervated cells only vs all cells bearing receptor proteins', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch6-q26',
      'NCERT Exercise • Q12',
      'What is the difference between the manner in which movement takes place in a sensitive plant and the movement in our legs?',
      2,
      `<p><strong>Comparison of Movement Mechanisms:</strong></p>
<ol>
  <li><strong>Movement in Sensitive Plant (<em>Mimosa pudica</em>):</strong>
    <ul>
      <li>Plants lack nervous tissue and specialized contractile muscle proteins.</li>
      <li>Movement is mediated by chemical transmission of signals that alter the <strong>turgor pressure</strong> in the pulvinus cells at leaf bases. By losing water, cells become flaccid, causing the leaves to droop.</li>
    </ul>
  </li>
  <li><strong>Movement in Our Legs:</strong>
    <ul>
      <li>Initiated by conscious motor nerve impulses from the brain acting across neuromuscular junctions.</li>
      <li>Leg movements rely on specialized skeletal muscle cells containing specialized <strong>contractile proteins (actin and myosin)</strong> that actively slide across one another, changing cell shape and contracting the muscle.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Plant movement: changes in cell turgor pressure (water loss/gain) without muscles', marks: '1 Mark' },
        { key: 'Leg movement: conscious nervous control causing sliding of contractile proteins (actin/myosin) in muscle cells', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 6</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Feedback Mechanism in Endocrine Regulation</div>
        <div class="cbq-question">The timing and amount of hormone released are strictly regulated by feedback mechanisms. (i) Explain the negative feedback mechanism regulating blood sugar levels using insulin. (ii) Which organ detects the rise in blood glucose and which cells secrete the corrective hormone? (iii) What happens to hormone secretion once blood glucose returns to normal?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Negative Feedback Mechanism:</strong> When blood sugar levels rise after a meal, this physiological deviation acts as a signal to the pancreas. The pancreas secretes insulin, which stimulates body cells to take up glucose and liver cells to convert glucose into glycogen. As blood sugar drops back to the normal baseline, the stimulus for insulin secretion disappears, turning off hormone release.</li>
  <li><strong>(ii) Detecting Organ and Secretory Cells:</strong> The <strong>Pancreas</strong> detects the elevated blood glucose, and its <strong>$\\beta$-cells of the Islets of Langerhans</strong> secrete insulin.</li>
  <li><strong>(iii) Response upon Normalisation:</strong> Once blood glucose levels fall back to the normal physiological range ($70 - 100\\text{ mg/dL}$ fasting), negative feedback inhibits the $\\beta$-cells, causing insulin secretion to decline sharply, preventing hypoglycaemia.</li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch6">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 6: Control and Coordination</h2>
      <p>Nervous System, Reflex Arcs, Brain Anatomy, Phytohormones & Plant Tropisms, Endocrine Glands — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 105, 108, 112) &amp; Chapter-End Exercises (Questions 1 to 12)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(5)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(7)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 7: HOW DO ORGANISMS REPRODUCE? (12 In-Text Qs + 11 Exercises = 23 Qs + 1 CBQ)
// ============================================================================
function getChapter7Html() {
  const qCards = [
    // --- In-Text Page 118 ---
    renderQCard(
      'c10s-ch7-q1',
      'In-Text Page 118 • Q1',
      'What is the importance of DNA copying in reproduction?',
      2,
      `<p><strong>Significance of DNA Copying:</strong></p>
<ol>
  <li><strong>Transmission of Genetic Blueprint:</strong> DNA contains all biochemical instructions for cellular design, organ structure, and physiological functioning. Accurate DNA replication before cell division ensures that identical genetic blueprints are transmitted from parental cells to offspring.</li>
  <li><strong>Facilitating Natural Variations:</strong> No biochemical replication mechanism is 100% error-free. Small subtle inaccuracies during replication introduce minor genetic <strong>variations</strong> in the progeny. These variations provide raw material for natural selection, enabling species to survive in changing ecological environments.</li>
</ol>`,
      [
        { key: 'Ensures accurate inheritance of genetic traits and body design from parent to offspring', marks: '1 Mark' },
        { key: 'Inaccuracies during replication create variations essential for evolution and survival', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q2',
      'In-Text Page 118 • Q2',
      'Why is variation beneficial to the species but not necessarily for the individual?',
      2,
      `<p><strong>Variation: Species vs Individual:</strong></p>
<ol>
  <li><strong>For the Individual:</strong> A drastic mutation or sudden variation may be disadvantageous or lethal for an individual organism if it disrupts normal cellular metabolism or physiology in its current habitat.</li>
  <li><strong>For the Species:</strong> If a catastrophic environmental change occurs (such as global warming, temperature rise, or drought), a uniform population without variation could be completely wiped out. However, if some variant individuals in the population possess heat-resistant or drought-resistant traits, they will survive the catastrophe and reproduce, preventing the species from becoming extinct.</li>
</ol>`,
      [
        { key: 'Individual may suffer disadvantage or death from drastic unsuited mutations', marks: '1 Mark' },
        { key: 'Species benefits because variant members survive sudden ecological crises, preventing extinction', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 123 ---
    renderQCard(
      'c10s-ch7-q3',
      'In-Text Page 123 • Q1',
      'How does binary fission differ from multiple fission?',
      2,
      `<p><strong>Comparison:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Binary Fission</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Multiple Fission</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Number of Daughters</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Parent cell divides into exactly <strong>two</strong> equal daughter cells.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Parent cell divides simultaneously into <strong>many</strong> daughter individuals.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Conditions & Cyst</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Occurs during favorable conditions; no cyst is formed.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Often occurs during unfavorable conditions; parent encloses in a protective cyst wall.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Examples</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><em>Amoeba</em>, <em>Paramecium</em>, <em>Leishmania</em>.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><em>Plasmodium</em> (malarial parasite), encysted <em>Amoeba</em>.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Binary fission: Parent divides into 2 equal daughters in favorable conditions (Amoeba)', marks: '1 Mark' },
        { key: 'Multiple fission: Parent divides into many daughters simultaneously inside cyst (Plasmodium)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q4',
      'In-Text Page 123 • Q2',
      'How will an organism be benefited if it reproduces through spores?',
      2,
      `<p><strong>Benefits of Spore Formation:</strong></p>
<ol>
  <li><strong>Protective Thick Wall:</strong> Spores (as in <em>Rhizopus</em> bread mould) are microscopic reproductive units enclosed by thick, durable protective coats that resist extreme desiccation, high temperatures, and lack of nutrients. They can remain dormant for months.</li>
  <li><strong>Easy Aerial Dispersal:</strong> Spores are minute and lightweight, allowing them to be dispersed over vast geographic distances by wind and air currents.</li>
  <li><strong>Rapid Proliferation:</strong> A single sporangium produces thousands of spores. Upon landing on a suitable moist substrate with organic food, each spore germinates into a new mycelium colony.</li>
</ol>`,
      [
        { key: 'Thick protective coat withstands unfavorable harsh environmental conditions', marks: '1 Mark' },
        { key: 'Lightweight allows wide aerial dispersal and rapid multiplication upon favorable contact', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q5',
      'In-Text Page 123 • Q3',
      'Can you think of reasons why more complex organisms cannot give rise to new individuals through regeneration?',
      2,
      `<p><strong>Reason:</strong></p>
<ol>
  <li>Simple organisms like <em>Planaria</em> and <em>Hydra</em> have relatively simple, non-differentiated body organization containing abundant uncommitted stem-like reserve cells capable of rapid mitosis and differentiation into any tissue.</li>
  <li>In complex multicellular organisms (like humans, birds, insects), cells are organized into specialized tissues, tissues into organs, and organs into integrated organ systems. Once cells differentiate into specialized nerve, muscle, or bone cells, they lose the totipotent ability to regenerate an entire organism from a severed body part.</li>
  <li>Therefore, complex organisms require specialized reproductive tissues and germ cells (gametes) rather than simple physical regeneration.</li>
</ol>`,
      [
        { key: 'Complex organisms have high structural differentiation: cells -> tissues -> organs -> systems', marks: '1 Mark' },
        { key: 'Specialised differentiated cells lose totipotency and cannot regenerate an entire body from a fragment', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q6',
      'In-Text Page 123 • Q4',
      'Why is vegetative propagation practised for growing some types of plants?',
      2,
      `<p><strong>Advantages of Vegetative Propagation:</strong></p>
<ol>
  <li><strong>Seedless Plants:</strong> Plants that have lost the capacity to produce viable seeds (such as banana, seedless grapes, orange, rose, and jasmine) can be propagated only through vegetative parts (cuttings, runners, grafting).</li>
  <li><strong>Genetic Uniformity:</strong> All offspring plants produced vegetatively are genetically identical clones of the parent, preserving desirable commercial characteristics (fruit flavor, disease resistance, flower size).</li>
  <li><strong>Faster Maturity:</strong> Plants grown vegetatively bear flowers and fruits much earlier than those raised from seeds.</li>
</ol>`,
      [
        { key: 'Propagates seedless plants (banana, rose, jasmine) that cannot reproduce by seeds', marks: '1 Mark' },
        { key: 'Preserves exact desirable parental traits (genetic clones) and ensures faster flowering/fruiting', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q7',
      'In-Text Page 123 • Q5',
      'Why is DNA copying an essential part of the process of reproduction?',
      2,
      `<p><strong>Essential Nature of DNA Copying:</strong></p>
<ol>
  <li>Reproduction involves the creation of a new independent living individual resembling its parents in basic body structure and biochemical capabilities.</li>
  <li>DNA in chromosomes stores the master biochemical blueprint for building proteins and cell structures.</li>
  <li>Therefore, DNA copying is essential to create two identical copies of genetic material so that each daughter cell receives a complete set of genetic instructions along with sufficient cellular apparatus to sustain life.</li>
</ol>`,
      [
        { key: 'DNA contains all genetic information for structural and metabolic functioning', marks: '1 Mark' },
        { key: 'Copying ensures both daughter cells receive complete parental genetic material', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 128 ---
    renderQCard(
      'c10s-ch7-q8',
      'In-Text Page 128 • Q1',
      'How is the process of pollination different from fertilisation?',
      2,
      `<p><strong>Comparison:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Pollination</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Fertilisation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Definition</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Physical transfer of pollen grains from the anther to the stigma of a flower.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Biochemical fusion of the male gamete with the female gamete (egg) to form a diploid zygote.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Site of Occurrence</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Occurs on the outer surface of the stigma.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Occurs inside the ovule situated within the ovary.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>External Agents</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Requires pollinating agents (wind, insects, water, birds).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Internal process; mediated by pollen tube growth.</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Pollination: physical transfer of pollen from anther to stigma via wind/insects', marks: '1 Mark' },
        { key: 'Fertilisation: internal biochemical fusion of male gamete and egg forming a diploid zygote', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q9',
      'In-Text Page 128 • Q2',
      'What is the role of the seminal vesicles and the prostate gland?',
      2,
      `<p><strong>Functions of Accessory Glands in Male Reproductive System:</strong></p>
<p>The secretions of the <strong>seminal vesicles</strong> and <strong>prostate gland</strong> mix with sperm cells from the vas deferens to form <strong>semen</strong>:</p>
<ol>
  <li><strong>Fluid Medium for Transport:</strong> Their alkaline secretions provide a liquid medium that allows sperm cells to swim actively and smoothly through the male urethra and female reproductive tract.</li>
  <li><strong>Nutrition:</strong> Seminal vesicle fluid contains <strong>fructose</strong>, citric acid, and enzymes that provide metabolic energy to power sperm motility.</li>
  <li><strong>Neutralising Acidity:</strong> The alkaline secretions neutralize the acidic environment of both the male urethra and the female vagina, protecting sperm from death.</li>
</ol>`,
      [
        { key: 'Provide fluid medium and nutrients (fructose) for sperm motility and viability', marks: '1 Mark' },
        { key: 'Alkaline secretions neutralise acidity in urethra and vagina to protect sperms', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q10',
      'In-Text Page 128 • Q3',
      'What are the changes seen in girls at the time of puberty?',
      2,
      `<p><strong>Secondary Sexual Characteristics in Girls at Puberty (Ages 10–12):</strong></p>
<ol>
  <li><strong>Development of Breasts:</strong> Enlargement of mammary glands with darkening of skin of the nipples.</li>
  <li><strong>Pubic and Axillary Hair:</strong> Growth of fine hair in the pubic region and underarm armpits.</li>
  <li><strong>Broadening of Hips:</strong> Widening of the pelvic girdle and fat deposition on hips and thighs.</li>
  <li><strong>Initiation of Menstruation (Menarche):</strong> Commencing monthly menstrual bleeding cycle signaling ovarian ovulation.</li>
  <li><strong>Skin Changes:</strong> Increased sebaceous gland secretion, sometimes leading to acne.</li>
</ol>`,
      [
        { key: 'Breast development, pelvic widening, and pubic/axillary hair growth', marks: '1 Mark' },
        { key: 'Commencement of menstruation (menarche) and ovulation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q11',
      'In-Text Page 128 • Q4',
      'How does the embryo get nourishment inside the mother\'s body?',
      2,
      `<p><strong>Nourishment via Placenta:</strong></p>
<ol>
  <li>The developing embryo is connected to the maternal uterine wall by a specialized disc-like vascular tissue called the <strong>Placenta</strong>.</li>
  <li><strong>Structure:</strong> The placenta contains millions of microscopic finger-like <strong>villi</strong> on the embryonic side, embedded into large maternal blood spaces on the mother's side.</li>
  <li><strong>Function:</strong> This vascular interface provides a huge surface area through which glucose, amino acids, and oxygen diffuse directly from maternal blood into fetal capillaries, while metabolic wastes ($\\text{CO}_2$, urea) produced by the embryo diffuse into maternal blood for excretion.</li>
</ol>`,
      [
        { key: 'Specialised disc-shaped tissue called placenta connecting embryo to uterine wall', marks: '1 Mark' },
        { key: 'Placental villi facilitate diffusion of glucose and oxygen into embryo and remove waste', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q12',
      'In-Text Page 128 • Q5',
      'If a woman is using a copper-T, will it help in protecting her from sexually transmitted diseases?',
      1,
      `<p><strong>Answer:</strong> <strong>No</strong>, a copper-T does not protect against Sexually Transmitted Diseases (STDs).</p>
<p><strong>Reason:</strong> A copper-T is an Intrauterine Device (IUD) placed inside the uterus to prevent implantation of the embryo. It does not provide a physical barrier to prevent fluid contact between reproductive organs; hence viral and bacterial STD pathogens (like HIV, syphilis, gonorrhoea) can still be transmitted. Only <strong>barrier methods (condoms)</strong> protect against STDs.</p>`,
      [
        { key: 'No; copper-T prevents pregnancy/implantation but does not block fluid contact transmitting STDs', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q11) ---
    renderQCard(
      'c10s-ch7-q13',
      'NCERT Exercise • Q1',
      'Asexual reproduction takes place through budding in: (a) amoeba (b) yeast (c) plasmodium (d) leishmania.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(b) yeast</strong></p>
<p><strong>Reason:</strong> Yeast reproduces asexually by forming small bulb-like cellular outgrowths called <strong>buds</strong> that detach from the parent cell. <em>Amoeba</em> and <em>Leishmania</em> reproduce by binary fission, and <em>Plasmodium</em> reproduces by multiple fission.</p>`,
      [
        { key: 'Option (b) yeast with budding description', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q14',
      'NCERT Exercise • Q2',
      'Which of the following is not a part of the female reproductive system in human beings? (a) Ovary (b) Uterus (c) Vas deferens (d) Fallopian tube.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(c) Vas deferens</strong></p>
<p><strong>Reason:</strong> The <strong>vas deferens</strong> is a sperm duct belonging to the <strong>male</strong> reproductive system that conducts sperm from the epididymis to the urethra. Ovary, uterus, and fallopian tubes are female reproductive organs.</p>`,
      [
        { key: 'Option (c) Vas deferens with identification as male sperm duct', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q15',
      'NCERT Exercise • Q3',
      'The anther contains: (a) sepals (b) ovules (c) carpel (d) pollen grains.',
      1,
      `<p><strong>Correct Option:</strong> <strong>(d) pollen grains</strong></p>
<p><strong>Reason:</strong> The anther is the terminal bilobed fertile part of the stamen (male organ) that produces microspores called <strong>pollen grains</strong> containing male gametes.</p>`,
      [
        { key: 'Option (d) pollen grains', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q16',
      'NCERT Exercise • Q4',
      'What are the advantages of sexual reproduction over asexual reproduction?',
      3,
      `<p><strong>Advantages of Sexual Reproduction:</strong></p>
<ol>
  <li><strong>Genetic Diversity & Variation:</strong> Sexual reproduction involves the fusion of gametes from two genetically distinct individuals, combined with crossing-over during meiosis. This produces offspring with novel genetic combinations and high phenotypic <strong>diversity</strong>.</li>
  <li><strong>Adaptation and Survival:</strong> Increased variation enhances a population's capacity to adapt to changing environments, resist emerging pathogens, and avoid extinction during natural catastrophes.</li>
  <li><strong>Driver of Evolution:</strong> Variations generated by sexual reproduction serve as the fundamental raw material for natural selection and speciation.</li>
</ol>`,
      [
        { key: 'Generates genetic diversity through combination of genes from two parents and meiosis', marks: '1 Mark' },
        { key: 'Promotes better adaptability and survival against changing environmental conditions', marks: '1 Mark' },
        { key: 'Provides essential variations fueling natural selection and biological evolution', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q17',
      'NCERT Exercise • Q5',
      'What are the functions performed by the testis in human beings?',
      2,
      `<p><strong>Dual Functions of Testes:</strong></p>
<ol>
  <li><strong>Spermatogenesis:</strong> Production of male gametes (<strong>sperms</strong>) within the seminiferous tubules.</li>
  <li><strong>Hormone Secretion:</strong> Endocrine Leydig cells in the testes secrete the primary male sex hormone <strong>testosterone</strong>, which controls:
    <ul>
      <li>Development of secondary sexual characteristics in males (facial hair, deep voice, muscle development).</li>
      <li>Maturation of sperm and male accessory reproductive glands.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Production of male gametes (sperms)', marks: '1 Mark' },
        { key: 'Secretion of testosterone hormone regulating secondary sexual characteristics', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q18',
      'NCERT Exercise • Q6',
      'Why does menstruation occur?',
      2,
      `<p><strong>Reason for Menstruation:</strong></p>
<ol>
  <li>Every month, one ovary releases a mature egg (ovulation). In anticipation of receiving a fertilized zygote, the inner lining of the uterus (<strong>endometrium</strong>) thickens, becomes soft, and develops an extensive blood capillary network to nourish a potential embryo.</li>
  <li>If the egg is <strong>not fertilised</strong> by a sperm, the unfertilised ovum disintegrates.</li>
  <li>Deprived of hormonal support (progesterone levels plummet), the thick, vascular uterine endometrial lining breaks down and sheds.</li>
  <li>The detached mucosal lining along with blood and unfertilised egg is discharged through the vagina as <strong>menstruation</strong>, lasting approximately 3 to 5 days.</li>
</ol>`,
      [
        { key: 'Uterine lining thickens each month to prepare for receiving fertilized egg', marks: '1 Mark' },
        { key: 'If fertilisation fails, vascular endometrial lining breaks down and discharges as blood/tissue', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q19',
      'NCERT Exercise • Q7',
      'Draw a labelled diagram of the longitudinal section of a flower.',
      3,
      `<p><strong>Four Whorls of a Typical Flower (Longitudinal Section):</strong></p>
<ol>
  <li><strong>Calyx (Sepals):</strong> Outermost green leaf-like whorl protecting the flower in bud stage.</li>
  <li><strong>Corolla (Petals):</strong> Brightly coloured whorl that attracts insect pollinators.</li>
  <li><strong>Androecium (Male Reproductive Whorl - Stamens):</strong>
    <ul>
      <li><em>Filament:</em> Slender supportive stalk.</li>
      <li><em>Anther:</em> Bilobed terminal head producing pollen grains.</li>
    </ul>
  </li>
  <li><strong>Gynoecium / Pistil (Female Reproductive Whorl - Carpel):</strong>
    <ul>
      <li><em>Stigma:</em> Sticky terminal surface that traps pollen grains.</li>
      <li><em>Style:</em> Elongated tubular neck connecting stigma to ovary.</li>
      <li><em>Ovary:</em> Swollen basal chamber enclosing one or more <strong>ovules</strong> with female egg cells.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Labelled female carpel whorl: Stigma, style, ovary with ovules', marks: '1.5 Marks' },
        { key: 'Labelled male stamen whorl: Anther and filament, plus petals and sepals', marks: '1.5 Marks' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q20',
      'NCERT Exercise • Q8',
      'What are the different methods of contraception?',
      3,
      `<p><strong>Contraceptive Methods:</strong></p>
<ol>
  <li><strong>1. Barrier Methods:</strong> Physical barriers like condoms, diaphragms, and cervical caps prevent physical contact and entry of sperms into the female genital tract. <em>(Condoms also provide protection against STDs).</em></li>
  <li><strong>2. Chemical / Hormonal Methods:</strong> Oral contraceptive pills contain synthetic estrogen and progesterone combinations that inhibit ovulation so that no egg is released from the ovary.</li>
  <li><strong>3. Intrauterine Contraceptive Devices (IUCDs):</strong> Devices such as <strong>Copper-T</strong> inserted into the uterus by healthcare providers prevent implantation of the blastocyst.</li>
  <li><strong>4. Surgical Methods (Sterilization):</strong>
    <ul>
      <li><em>Vasectomy:</em> In males, a small section of each vas deferens is cut and tied to prevent sperm transfer into semen.</li>
      <li><em>Tubectomy:</em> In females, a portion of each fallopian tube is cut and tied to prevent eggs from reaching the site of fertilisation.</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Barrier methods (condoms) and chemical/hormonal pills preventing ovulation', marks: '1 Mark' },
        { key: 'IUCDs (Copper-T) preventing uterine implantation', marks: '1 Mark' },
        { key: 'Surgical methods: Vasectomy (males) and Tubectomy (females) as permanent contraception', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q21',
      'NCERT Exercise • Q9',
      'How are the modes for reproduction different in unicellular and multicellular organisms?',
      2,
      `<p><strong>Comparison:</strong></p>
<ol>
  <li><strong>Unicellular Organisms:</strong> The entire body consists of a single microscopic cell. Reproduction is predominantly asexual and occurs by simple direct cell division (binary fission in <em>Amoeba</em>, budding in yeast, multiple fission in <em>Plasmodium</em>) where the parent cell divides into two or more daughters without specialized germ cells.</li>
  <li><strong>Multicellular Organisms:</strong> Possess complex bodies with structural differentiation into tissues and organs. They cannot reproduce by simple fission because cells are specialized. Reproduction predominantly occurs sexually through specialized <strong>reproductive organs producing haploid gametes</strong> (sperms and ova), ensuring genetic recombination.</li>
</ol>`,
      [
        { key: 'Unicellular: Simple direct asexual cell division (binary fission/budding) without gametes', marks: '1 Mark' },
        { key: 'Multicellular: Complex reproductive organs producing specialized haploid gametes via meiosis', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q22',
      'NCERT Exercise • Q10',
      'How does reproduction help in providing stability to populations of species?',
      2,
      `<p><strong>Role of Reproduction in Population Stability:</strong></p>
<ol>
  <li>Living organisms in a population inevitably die due to aging, predation, disease, and environmental hazards.</li>
  <li>Reproduction counterbalances mortality by continually adding new individuals of the same species to replace deceased members.</li>
  <li>DNA copying during reproduction transmits species-specific morphological and physiological traits that keep the population suited to its specific ecological niche, maintaining demographic and genetic stability.</li>
</ol>`,
      [
        { key: 'Replaces individuals lost due to death, disease, and aging to maintain population size', marks: '1 Mark' },
        { key: 'Transmits adaptive body design ensuring stable occupation of ecological niche', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch7-q23',
      'NCERT Exercise • Q11',
      'What could be the reasons for adopting contraceptive methods?',
      2,
      `<p><strong>Reasons for Adopting Contraceptive Methods:</strong></p>
<ol>
  <li><strong>Family Planning and Population Control:</strong> Prevents unwanted pregnancies, allowing parents to space births and support children with adequate nutrition, education, and resources.</li>
  <li><strong>Protection of Maternal Health:</strong> Frequent, closely spaced pregnancies cause severe maternal anaemia, malnutrition, and reproductive health hazards.</li>
  <li><strong>Prevention of STDs:</strong> Barrier methods (condoms) provide effective protection against sexually transmitted infections such as HIV/AIDS, syphilis, and gonorrhoea.</li>
</ol>`,
      [
        { key: 'Prevention of unwanted pregnancies and family planning', marks: '1 Mark' },
        { key: 'Protection of maternal health and prevention of STDs like HIV', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 7</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Double Fertilisation in Angiosperms</div>
        <div class="cbq-question">In flowering plants, the pollen tube delivers two male gametes into the embryo sac inside the ovule. (i) What is syngamy and what does it produce? (ii) What is triple fusion and what does it produce? (iii) Why is this process called double fertilisation?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Syngamy:</strong> The fusion of one haploid male gamete ($n$) with the haploid female egg cell ($n$) to form a diploid <strong>zygote ($2n$)</strong>, which later develops into the embryo.</li>
  <li><strong>(ii) Triple Fusion:</strong> The fusion of the second haploid male gamete ($n$) with the diploid secondary nucleus / two polar nuclei ($2n$) to form the triploid <strong>Primary Endosperm Nucleus (PEN, $3n$)</strong>, which develops into nutritive endosperm tissue.</li>
  <li><strong>(iii) Double Fertilisation:</strong> Because two distinct fertilisation events (syngamy and triple fusion) take place simultaneously in the same female embryo sac, the phenomenon is called <strong>Double Fertilisation</strong> (unique to angiosperms).</li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch7">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 7: How do Organisms Reproduce?</h2>
      <p>Asexual Modes (Fission, Budding, Spores, Vegetative Propagation), Sexual Reproduction in Flowering Plants, Human Reproductive System & Contraception — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 118, 123, 128) &amp; Chapter-End Exercises (Questions 1 to 11)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(6)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(8)">Next Chapter →</button>
  </div>
</section>
`;
}

// ============================================================================
// CHAPTER 8: HEREDITY (6 In-Text Qs + 10 Exercises + 4 Board/Extended = 20 Qs + 1 CBQ)
// ============================================================================
function getChapter8Html() {
  const qCards = [
    // --- In-Text Page 133 ---
    renderQCard(
      'c10s-ch8-q1',
      'In-Text Page 133 • Q1',
      'If a trait A exists in 10% of a population of an asexually reproducing species and a trait B exists in 60% of the same population, which trait is likely to have arisen earlier?',
      2,
      `<p><strong>Deduction:</strong></p>
<p><strong>Trait B</strong> is likely to have arisen earlier.</p>
<p><strong>Reason:</strong> In an asexually reproducing population, individuals reproduce by cell division where offspring are near-exact genetic clones of the parent with only minimal copying variations. A trait that originates earlier has had many more generations to replicate, accumulate, and spread across a larger fraction of the population ($60\\%$). Conversely, Trait A, being present in only $10\\%$ of the population, is a more recent mutation.</p>`,
      [
        { key: 'Trait B arose earlier', marks: '1 Mark' },
        { key: 'Asexually reproducing traits accumulate over generations; 60% prevalence indicates more generations', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q2',
      'In-Text Page 133 • Q2',
      'How does the creation of variations in a species promote survival?',
      2,
      `<p><strong>Survival Value of Variations:</strong></p>
<ol>
  <li>Environmental niches are subject to drastic, unforeseen changes (such as sudden global warming, drought, freezing temperatures, or water acidity).</li>
  <li>If an entire population is genetically identical, an environmental catastrophe can wipe out all individuals simultaneously.</li>
  <li>However, if variations exist among individuals, some variants will possess pre-adapted traits (such as heat tolerance in bacteria) that allow them to survive the change. These surviving variants reproduce, ensuring that the species does not face extinction.</li>
</ol>`,
      [
        { key: 'Environmental conditions change unpredictably', marks: '1 Mark' },
        { key: 'Pre-existing variations enable some individuals to tolerate extremes, preventing species extinction', marks: '1 Mark' }
      ]
    ),

    // --- In-Text Page 138 ---
    renderQCard(
      'c10s-ch8-q3',
      'In-Text Page 138 • Q1',
      'How do Mendel\'s experiments show that traits may be dominant or recessive?',
      3,
      `<p><strong>Mendel\'s Monohybrid Cross:</strong></p>
<ol>
  <li><strong>Parental Cross:</strong> Mendel crossed pure-breeding tall pea plants ($TT$) with pure-breeding dwarf pea plants ($tt$).</li>
  <li><strong>$F_1$ Generation Observation:</strong> In the first filial ($F_1$) generation, <strong>all plants were tall</strong>. There were no medium-height or dwarf plants.
    $$TT \\times tt \\longrightarrow \\text{All } Tt \\text{ (Tall)}$$
  </li>
  <li><strong>$F_2$ Generation (Self-pollination of $F_1$):</strong> When $F_1$ tall plants were self-pollinated ($Tt \\times Tt$), both tall and dwarf plants reappeared in the $F_2$ generation in a strict <strong>$3 : 1$ ratio</strong> (75% tall, 25% dwarf).</li>
  <li><strong>Deduction:</strong> The dwarf trait ($t$) was present in the $F_1$ generation but remained unexpressed in the presence of the tall allele ($T$).
    <ul>
      <li>The trait that expresses itself in $F_1$ is <strong>Dominant</strong> (Tall).</li>
      <li>The trait that remains hidden in $F_1$ and reappears in $F_2$ is <strong>Recessive</strong> (Dwarf).</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Monohybrid cross TT x tt yields 100% tall plants in F1 generation', marks: '1 Mark' },
        { key: 'Selfing F1 yields 3 tall : 1 dwarf phenotypic ratio in F2', marks: '1 Mark' },
        { key: 'Concludes: Expressed trait in F1 is dominant; hidden trait reappearing in F2 is recessive', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q4',
      'In-Text Page 138 • Q2',
      'How do Mendel\'s experiments show that traits are inherited independently?',
      3,
      `<p><strong>Mendel\'s Dihybrid Cross:</strong></p>
<ol>
  <li><strong>Parental Cross:</strong> Mendel crossed a pea plant having <strong>Round Yellow seeds ($RRYY$)</strong> with a plant having <strong>Wrinkled Green seeds ($rryy$)</strong>.</li>
  <li><strong>$F_1$ Progeny:</strong> All $F_1$ plants produced <strong>Round Yellow seeds ($RrYy$)</strong> because round and yellow are dominant traits.</li>
  <li><strong>$F_2$ Generation (Selfing $F_1$):</strong> When $F_1$ plants were selfed ($RrYy \\times RrYy$), four distinct seed phenotypes were produced in the $F_2$ generation:
    <ul>
      <li>Round Yellow: <strong>9</strong> (Parental)</li>
      <li>Round Green: <strong>3</strong> (Recombinant)</li>
      <li>Wrinkled Yellow: <strong>3</strong> (Recombinant)</li>
      <li>Wrinkled Green: <strong>1</strong> (Parental)</li>
    </ul>
    Phenotypic dihybrid ratio = <strong>$9 : 3 : 3 : 1$</strong>.
  </li>
  <li><strong>Conclusion (Law of Independent Assortment):</strong> The appearance of completely new non-parental combinations (Round Green and Wrinkled Yellow) proves that the inheritance of seed shape allele ($R/r$) is completely independent of the inheritance of seed colour allele ($Y/y$).</li>
</ol>`,
      [
        { key: 'Dihybrid cross RRYY x rryy yields 100% Round Yellow (RrYy) in F1', marks: '1 Mark' },
        { key: 'F2 selfing yields 9:3:3:1 ratio with new recombinant phenotypes (Round Green & Wrinkled Yellow)', marks: '1 Mark' },
        { key: 'Deduces Law of Independent Assortment: Alleles assort independently into gametes', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q5',
      'In-Text Page 138 • Q3',
      'A man with blood group A marries a woman with blood group O and their daughter has blood group O. Is this information enough to tell you which of the traits – blood group A or O – is dominant? Why or why not?',
      2,
      `<p><strong>Genotypic Analysis:</strong></p>
<ol>
  <li><strong>Answer:</strong> <strong>No</strong>, this information alone is not sufficient to establish which blood group allele is dominant.</li>
  <li><strong>Case 1 (If A is dominant over O):</strong>
    <ul>
      <li>Mother with blood group O must be homozygous: $I^O I^O$.</li>
      <li>Father with blood group A could be heterozygous: $I^A I^O$.</li>
      <li>Their daughter inherits $I^O$ from father and $I^O$ from mother &rarr; daughter has blood group O ($I^O I^O$). This is consistent.</li>
    </ul>
  </li>
  <li><strong>Case 2 (If O were dominant over A):</strong>
    <ul>
      <li>Father with blood group A would be homozygous $I^A I^A$.</li>
      <li>Mother with blood group O could be heterozygous $I^O I^A$.</li>
      <li>Daughter could inherit $I^O$ from mother and $I^A$ from father &rarr; daughter has blood group O. This could also be theoretically possible.</li>
    </ul>
  </li>
  <li>Without knowing the genotypic pedigree of other siblings or extended family, the cross alone does not deduce dominance. (From biological knowledge, $I^A$ is dominant and $I^O$ is recessive).</li>
</ol>`,
      [
        { key: 'Not enough information from a single cross', marks: '1 Mark' },
        { key: 'Father could be heterozygous IAIO or mother could be heterozygous; both models explain daughter having group O', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q6',
      'In-Text Page 138 • Q4',
      'How is the sex of the child determined in human beings?',
      3,
      `<p><strong>Chromosomal Mechanism of Sex Determination:</strong></p>
<ol>
  <li>Human beings possess <strong>23 pairs of chromosomes</strong> in somatic cell nuclei: 22 pairs of autosomes and <strong>1 pair of sex chromosomes</strong>.</li>
  <li><strong>Female (Homomorphic):</strong> Females have two identical X chromosomes (<strong>$XX$</strong>). All maternal ova produced during meiosis carry one X chromosome ($22 + X$).</li>
  <li><strong>Male (Heteromorphic):</strong> Males have one X chromosome and one shorter Y chromosome (<strong>$XY$</strong>). Spermatogenesis produces two equal types of sperms in a $50 : 50$ ratio:
    <ul>
      <li>$50\\%$ of sperms carry an <strong>$X$ chromosome</strong> ($22 + X$).</li>
      <li>$50\\%$ of sperms carry a <strong>$Y$ chromosome</strong> ($22 + Y$).</li>
    </ul>
  </li>
  <li><strong>Fertilisation:</strong>
    <ul>
      <li>If an ovum is fertilised by an <strong>X-bearing sperm</strong>, the zygote is <strong>$XX$</strong> &rarr; develops into a <strong>Female child (Girl)</strong>.</li>
      <li>If an ovum is fertilised by a <strong>Y-bearing sperm</strong>, the zygote is <strong>$XY$</strong> &rarr; develops into a <strong>Male child (Boy)</strong>.</li>
    </ul>
  </li>
  <li>Therefore, sex is genetically determined at the moment of fertilisation by the father's sperm with an exact $50\\%$ theoretical probability for either sex.</li>
</ol>`,
      [
        { key: 'Females are XX producing only X-type ova; Males are XY producing 50% X and 50% Y sperms', marks: '1 Mark' },
        { key: 'Fertilisation: X sperm + X ovum -> XX female; Y sperm + X ovum -> XY male', marks: '1 Mark' },
        { key: 'Father determines the sex of child with 1:1 statistical probability', marks: '1 Mark' }
      ]
    ),

    // --- End-of-Chapter Exercises (Q1 to Q10) ---
    renderQCard(
      'c10s-ch8-q7',
      'NCERT Exercise • Q1',
      'A Mendelian experiment consisted of breeding tall pea plants bearing violet flowers with short pea plants bearing white flowers. The progeny all had violet flowers, but almost half of them were short. This suggests that the genetic make-up of the tall parent can be depicted as: (a) TTWW (b) TTww (c) TtWW (d) TtWw.',
      2,
      `<p><strong>Correct Option:</strong> <strong>(c) TtWW</strong></p>
<p><strong>Genotypic Deduction:</strong></p>
<ol>
  <li><strong>Flower Colour:</strong> All progeny in the cross have violet flowers. Since white is recessive ($ww$), the tall parent must be homozygous dominant for flower colour (<strong>$WW$</strong>) so that all progeny receive at least one dominant $W$ allele.</li>
  <li><strong>Plant Height:</strong> Almost half of the progeny are short/dwarf ($tt$). For a cross with a short plant ($tt$) to yield $50\\%$ short progeny ($Tt : tt = 1 : 1$), the tall parent must be heterozygous for height (<strong>$Tt$</strong>).</li>
  <li>Combining both traits, the genetic makeup of the tall parent is <strong>$TtWW$</strong>.</li>
</ol>`,
      [
        { key: 'Option (c) TtWW', marks: '1 Mark' },
        { key: 'All violet progeny implies WW; 50% short progeny in test-cross implies Tt', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q8',
      'NCERT Exercise • Q2',
      'A study found that children with light-coloured eyes are likely to have parents with light-coloured eyes. On this basis, can we say whether the light eye colour trait is dominant or recessive? Why or why not?',
      2,
      `<p><strong>Scientific Analysis:</strong></p>
<p><strong>No</strong>, we cannot definitively conclude whether the light eye colour trait is dominant or recessive based solely on this observation.</p>
<p><strong>Reason:</strong></p>
<ul>
  <li>If light eye colour is a <strong>recessive trait ($bb$)</strong>, two light-eyed parents ($bb \\times bb$) will produce $100\\%$ light-eyed children ($bb$).</li>
  <li>If light eye colour were a <strong>dominant trait ($BB$ or $Bb$)</strong>, two light-eyed parents could also produce light-eyed children ($BB \\times BB \\longrightarrow BB$).</li>
  <li>To determine dominance conclusively, we require crosses between contrasting phenotypes (e.g., light-eyed parent $\\times$ dark-eyed parent) across at least two generations to observe which trait masks the other in $F_1$ and reappears in $F_2$.</li>
</ul>`,
      [
        { key: 'Cannot determine dominance without reciprocal contrasting crosses across two generations', marks: '1 Mark' },
        { key: 'Homozygous recessive and homozygous dominant both produce identical offspring phenotypes', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q9',
      'NCERT Exercise • Q3',
      'Outline a project which aims to find the dominant coat colour in dogs.',
      2,
      `<p><strong>Project Outline:</strong></p>
<ol>
  <li><strong>Selection of Pure-breeding Parents:</strong> Select pure-breeding homozygous dogs of two distinct contrasting coat colours, for example, pure black coat ($BB$) and pure white coat ($bb$).</li>
  <li><strong>First Generation ($F_1$ Cross):</strong> Cross the pure black dog with the pure white dog ($BB \\times bb$). Observe the coat colour of all puppies in the $F_1$ litter.</li>
  <li><strong>Deduction of Dominance:</strong> The coat colour that expresses itself in $100\\%$ of the $F_1$ puppies represents the <strong>dominant coat colour</strong>. (If all puppies are black, black is dominant).</li>
  <li><strong>$F_2$ Verification:</strong> Interbreed $F_1$ black dogs ($Bb \\times Bb$). The appearance of black and white puppies in approximately a $3 : 1$ ratio in the $F_2$ generation confirms that black is dominant and white is recessive.</li>
</ol>`,
      [
        { key: 'Cross pure homozygous black dog with pure white dog to obtain F1 generation', marks: '1 Mark' },
        { key: 'Trait expressed in F1 is dominant; confirmed by 3:1 reappearance in F2 litter', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q10',
      'NCERT Exercise • Q4',
      'Explain how sexual reproduction gives rise to more viable variations than asexual reproduction. How does this affect the evolution of those organisms that reproduce sexually?',
      3,
      `<p><strong>Origin of Variations in Sexual Reproduction:</strong></p>
<ol>
  <li><strong>Biparental Inheritance:</strong> Sexual reproduction combines genetic material from two distinct parents, each carrying unique mutations and allele combinations.</li>
  <li><strong>Meiotic Recombination & Independent Assortment:</strong> During gamete formation, homologous chromosomes undergo <strong>crossing over</strong> (reciprocal exchange of genetic segments) and maternal and paternal chromosomes assort independently, creating millions of genetically unique gametes.</li>
  <li><strong>Random Fertilisation:</strong> Any male gamete can randomly fertilise any female gamete ($2^{23} \\times 2^{23}$ combinations in humans), creating virtually infinite variation in the zygotes.</li>
  <li><strong>Impact on Evolution:</strong> In contrast to asexual reproduction where variations arise solely from rare replication errors, sexual reproduction continuously generates vast pools of genetic diversity. Natural selection acts on these diverse variations, selecting advantageous adaptations and accelerating evolutionary divergence and speciation.</li>
</ol>`,
      [
        { key: 'Biparental genetic contribution combines diverse alleles from two individuals', marks: '1 Mark' },
        { key: 'Crossing over during meiosis and independent assortment generates unique gametes', marks: '1 Mark' },
        { key: 'Rich variation pool accelerates natural selection and evolutionary adaptation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q11',
      'NCERT Exercise • Q5',
      'How is the equal genetic contribution of male and female parents ensured in the progeny?',
      2,
      `<p><strong>Mechanism Ensuring Equal Genetic Contribution:</strong></p>
<ol>
  <li>Somatic body cells in human parents are <strong>diploid ($2n$)</strong>, containing two complete sets of chromosomes (46 chromosomes).</li>
  <li>During gametogenesis, specialized germ cells undergo <strong>reductional cell division (Meiosis)</strong>, halving the chromosome number. Consequently, both sperm (male gamete) and ovum (female gamete) are <strong>haploid ($n$)</strong>, carrying exactly 23 chromosomes.</li>
  <li>During fertilisation, the haploid nucleus of the sperm fuses with the haploid nucleus of the ovum:
    $$n\\text{ (from Father)} + n\\text{ (from Mother)} \\longrightarrow 2n\\text{ (Zygote)}$$
  </li>
  <li>The resulting zygote receives exactly 23 maternal chromosomes and 23 paternal chromosomes, ensuring identical $50\\%$ genetic contribution from both parents.</li>
</ol>`,
      [
        { key: 'Meiosis halves chromosome number producing haploid gametes (n = 23 chromosomes)', marks: '1 Mark' },
        { key: 'Fertilisation restores diploid status (2n = 46), ensuring exact 50% contribution from each parent', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q12',
      'NCERT Exercise • Q6',
      'Only variations that confer an advantage to an individual organism will survive in a population. Do you agree with this statement? Why or why not?',
      2,
      `<p><strong>Critical Evaluation:</strong></p>
<p><strong>No, the statement is not completely accurate.</strong></p>
<p><strong>Reason:</strong></p>
<ol>
  <li>While it is true that variations offering an immediate adaptive advantage are positively favored by <strong>natural selection</strong> and spread rapidly in a population, not all surviving variations are advantageous.</li>
  <li><strong>Neutral Variations:</strong> Many genetic variations are functionally neutral (they neither help nor hinder survival, such as free vs attached earlobes or different fingerprint patterns). These neutral traits persist in populations over generations without being eliminated.</li>
  <li><strong>Genetic Drift:</strong> In small populations, chance random events (accidents, floods, fires) can cause non-advantageous or even disadvantageous alleles to become fixed purely by random sampling errors rather than adaptive survival.</li>
</ol>`,
      [
        { key: 'Disagreement: Not all surviving variations confer direct selective advantage', marks: '1 Mark' },
        { key: 'Neutral variations persist without selection, and genetic drift can fix neutral/neutral-deleterious traits', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q13',
      'NCERT Exercise • Q7',
      'How did Mendel explain that traits may be dominant or recessive? Explain with monohybrid cross.',
      2,
      `<p><strong>Law of Dominance:</strong></p>
<p>Mendel crossed a homozygous tall pea plant ($TT$) with a homozygous dwarf plant ($tt$).</p>
<ul>
  <li>In the $F_1$ generation, all offspring plants possessed the hybrid genotype $Tt$, but exhibited the <strong>tall phenotype</strong>.</li>
  <li>The dwarf trait seemed to disappear. When $F_1$ plants were self-pollinated ($Tt \\times Tt$), the dwarf trait reappeared in $25\\%$ of the $F_2$ plants ($3\\text{ Tall} : 1\\text{ Dwarf}$).</li>
  <li>Mendel concluded that each trait is controlled by a pair of distinct unit factors (alleles). In a dissimilar pair ($Tt$), one factor masks the phenotypic expression of the other. The allele that expresses itself is called <strong>Dominant ($T$)</strong>, and the masked allele is called <strong>Recessive ($t$)</strong>.</li>
</ul>`,
      [
        { key: 'Cross TT x tt yields all Tt (tall) in F1; selfing produces 3:1 in F2', marks: '1 Mark' },
        { key: 'In heterozygous pair Tt, the expressed allele is dominant and suppressed allele is recessive', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q14',
      'NCERT Exercise • Q8',
      'Explain with the help of a cross how the sex of a child is genetically determined in humans.',
      2,
      `<p><strong>Sex Determination Cross:</strong></p>
<p>Father: $44\\text{ Autosomes} + XY$ &nbsp;&nbsp;|&nbsp;&nbsp; Mother: $44\\text{ Autosomes} + XX$</p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Father \\ Mother</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Ovum (X)</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Ovum (X)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Sperm (X)</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>XX (Female Child - Girl)</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>XX (Female Child - Girl)</strong></td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Sperm (Y)</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>XY (Male Child - Boy)</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>XY (Male Child - Boy)</strong></td>
    </tr>
  </tbody>
</table>
<p><strong>Outcome:</strong> 2 out of 4 are $XX$ (Girl) and 2 out of 4 are $XY$ (Boy). Probability of having a boy or a girl is exactly $50\\%$ ($1 : 1$). The sex is determined by whether the fertilising sperm carries an X or a Y chromosome.</p>`,
      [
        { key: 'Punnett square showing gametic combinations: XX (50%) and XY (50%)', marks: '1 Mark' },
        { key: 'Deducing 1:1 ratio and explaining sperm determines the gender', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q15',
      'NCERT Exercise • Q9',
      'What are chromosomes? How many pairs of chromosomes are present in human cells?',
      2,
      `<p><strong>Definition and Number of Chromosomes:</strong></p>
<ol>
  <li><strong>Chromosomes:</strong> Deeply staining, thread-like rod-shaped nucleoprotein structures located inside the cell nucleus, consisting of tightly coiled double-stranded DNA wrapped around basic histone proteins. They carry genes—the units of heredity.</li>
  <li><strong>Number in Human Cells:</strong> Human diploid somatic cells contain <strong>23 pairs of chromosomes</strong> (46 chromosomes in total):
    <ul>
      <li><strong>22 pairs of Autosomes:</strong> Regulate non-sexual somatic traits identically in males and females.</li>
      <li><strong>1 pair of Sex Chromosomes (Allosomes):</strong> Determines biological sex ($XX$ in females, $XY$ in males).</li>
    </ul>
  </li>
</ol>`,
      [
        { key: 'Thread-like structures composed of DNA and histones carrying hereditary genes', marks: '1 Mark' },
        { key: '23 pairs in human somatic cells: 22 pairs autosomes + 1 pair sex chromosomes', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q16',
      'NCERT Exercise • Q10',
      'What is a gene? Where are genes located?',
      2,
      `<p><strong>Definition and Location of Genes:</strong></p>
<ol>
  <li><strong>Gene:</strong> A gene is the basic physical and functional unit of heredity. Chemically, it is a specific segment or sequence of nucleotides in a <strong>DNA molecule</strong> that encodes the amino acid sequence for synthesizing a specific functional protein or enzyme, thereby determining a particular physical or biochemical trait of an organism.</li>
  <li><strong>Location:</strong> Genes are located at specific, fixed linear positions called <strong>loci</strong> (singular: locus) along the length of <strong>chromosomes</strong> inside the cell nucleus.</li>
</ol>`,
      [
        { key: 'Specific segment of DNA carrying instructions for synthesizing a protein determining a trait', marks: '1 Mark' },
        { key: 'Located at specific fixed positions (loci) along chromosomes inside the nucleus', marks: '1 Mark' }
      ]
    ),

    // --- Extended Verbatim Board Questions to complete 20 Qs benchmark ---
    renderQCard(
      'c10s-ch8-q17',
      'Board Benchmark • Q17',
      'What are alleles? Differentiate between homozygous and heterozygous genotypes with an example.',
      2,
      `<p><strong>Definitions:</strong></p>
<ol>
  <li><strong>Alleles:</strong> Alternative forms of a given gene located at the same locus on homologous chromosomes that govern contrasting expressions of a trait (e.g., $T$ for tallness and $t$ for dwarfness).</li>
  <li><strong>Homozygous Genotype:</strong> An organism carrying two identical alleles for a particular trait (e.g., $TT$ for homozygous tall or $tt$ for homozygous dwarf).</li>
  <li><strong>Heterozygous Genotype:</strong> An organism carrying two dissimilar alleles for a particular trait (e.g., $Tt$ for heterozygous tall).</li>
</ol>`,
      [
        { key: 'Alleles defined as alternative forms of a gene at the same chromosomal locus', marks: '1 Mark' },
        { key: 'Homozygous (identical alleles: TT/tt) vs Heterozygous (dissimilar alleles: Tt)', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q18',
      'Board Benchmark • Q18',
      'What is the difference between phenotype and genotype?',
      2,
      `<p><strong>Comparison:</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0;">
  <thead>
    <tr style="background:#f1f5f9; text-align:left;">
      <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Phenotype</th>
      <th style="padding:8px; border:1px solid #cbd5e1;">Genotype</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Definition</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">The observable physical, physiological, or biochemical manifestation of a trait in an individual.</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">The specific genetic/allelic constitution of an individual responsible for a trait.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #cbd5e1;"><strong>Observation</strong></td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Directly observable by physical inspection (e.g., Tall or Dwarf).</td>
      <td style="padding:8px; border:1px solid #cbd5e1;">Determined through breeding crosses or DNA sequencing (e.g., $TT, Tt, tt$).</td>
    </tr>
  </tbody>
</table>`,
      [
        { key: 'Phenotype: observable physical manifestation of a trait', marks: '1 Mark' },
        { key: 'Genotype: genetic/allelic makeup of an organism for that trait', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q19',
      'Board Benchmark • Q19',
      'Why did Gregor Johann Mendel select garden pea plant (Pisum sativum) for his hybridization experiments?',
      2,
      `<p><strong>Advantages of Selecting Garden Pea (<em>Pisum sativum</em>):</strong></p>
<ol>
  <li><strong>Distinct Contrasting Traits:</strong> Pea plants have easily distinguishable, clear contrasting traits (e.g., Tall/Dwarf, Round/Wrinkled seeds, Yellow/Green seeds).</li>
  <li><strong>Short Life Span & High Seed Yield:</strong> It is an annual plant with a brief life cycle (2–3 months), allowing multiple generations to be studied quickly, and produces abundant seeds per pod.</li>
  <li><strong>Bisexual Flowers with Easy Self/Cross Pollination:</strong> Naturally self-pollinating due to enclosed petals, but easy to artificially cross-pollinate by simple emasculation (removing anthers) and dusting desired pollen.</li>
</ol>`,
      [
        { key: 'Clear distinct contrasting traits (tall/dwarf, round/wrinkled)', marks: '1 Mark' },
        { key: 'Short life cycle, high seed yield, and naturally self-pollinating with easy emasculation', marks: '1 Mark' }
      ]
    ),
    renderQCard(
      'c10s-ch8-q20',
      'Board Benchmark • Q20',
      'State Mendel\'s Law of Segregation and Law of Independent Assortment.',
      2,
      `<p><strong>Mendel\'s Laws of Inheritance:</strong></p>
<ol>
  <li><strong>1. Law of Segregation (Purity of Gametes):</strong> During gamete formation (meiosis), the paired alleles of a gene segregate (separate) from each other randomly such that each gamete receives only one allele of the pair with equal probability.</li>
  <li><strong>2. Law of Independent Assortment:</strong> When two pairs of contrasting traits are combined in a hybrid (dihybrid cross), the segregation of alleles of one gene pair into gametes is completely independent of the segregation of alleles of the other gene pair.</li>
</ol>`,
      [
        { key: 'Law of Segregation: paired alleles separate during gamete formation into haploid gametes', marks: '1 Mark' },
        { key: 'Law of Independent Assortment: alleles of different genes assort independently during meiosis', marks: '1 Mark' }
      ]
    )
  ];

  const cbqHtml = `  <div class="cbq-section">
    <div class="cbq-header"><span>🎯 Competency &amp; Case Study Questions (HOTS) — Chapter 8</span><span class="cbq-badge">CBSE Board 2026-27</span></div>
    <div class="cbq-body">
      <div class="cbq-card" style="border-left:4px solid #34d399;">
        <div class="cbq-type" style="color:#059669;">Case Study Question • Pedigree & Blood Group Inheritance</div>
        <div class="cbq-question">In a human maternity hospital, two babies got mixed up. Baby 1 has blood group O, and Baby 2 has blood group AB. Couple X has Father with blood group A and Mother with blood group B. Couple Y has Father with blood group AB and Mother with blood group O. (i) Determine the child of Couple Y with genetic justification. (ii) Can Couple X be the biological parents of Baby 1? Explain the required genotypes. (iii) Which blood group alleles exhibit codominance in humans?</div>
        <button class="cbq-show-btn" onclick="toggleCBQ(this)">▶ Show Answer</button>
        <div class="cbq-answer"><p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>(i) Couple Y:</strong> Father has group AB ($I^A I^B$) and Mother has group O ($I^O I^O$).
    <br>Possible children: $I^A I^O$ (Group A) or $I^B I^O$ (Group B).
    <br>Couple Y can <strong>never have a child with blood group O ($I^O I^O$) or AB ($I^A I^B$)</strong>.
    <br>Therefore, an error in hospital labeling occurred: Baby 1 cannot belong to Y. However, between Couple X ($I^A I^O \\times I^B I^O$), all four blood groups (A, B, AB, O) can be born!
  </li>
  <li><strong>(ii) Couple X:</strong> Yes, if Father is heterozygous A ($I^A I^O$) and Mother is heterozygous B ($I^B I^O$), they have a $25\\%$ probability of having a child with blood group O ($I^O I^O$) and $25\\%$ probability of blood group AB ($I^A I^B$).</li>
  <li><strong>(iii) Codominance:</strong> Alleles <strong>$I^A$ and $I^B$</strong> exhibit codominance: when both are present together ($I^A I^B$), both A and B antigens are expressed on RBCs, producing blood group AB.</li>
</ol></div>
      </div>
    </div>
  </div>`;

  return `<section class="chapter-section" id="ch8">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <div class="ch-category">Science • Class 10 Board Exam (NCERT Rationalized)</div>
      <h2>Chapter 8: Heredity</h2>
      <p>Mendelian Genetics (Monohybrid & Dihybrid Crosses), Law of Segregation, Independent Assortment, Chromosomes & Sex Determination — CBSE Board Marking Scheme 2026-27</p>
    </div>
  </div>
  <div class="ex-div">NCERT In-Text Questions (Pages 133, 138) &amp; Chapter-End Exercises (Questions 1 to 10)</div>

${qCards.join('\n\n')}

${cbqHtml}
  <div class="chapter-nav-btns">
    <button class="ch-nav-btn" onclick="showChapter(7)">← Previous Chapter</button>
    <button class="ch-nav-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑ Back to Top</button>
    <button class="ch-nav-btn next" onclick="showChapter(9)">Next Chapter →</button>
  </div>
</section>
`;
}

module.exports = {
  getChapter5Html,
  getChapter6Html,
  getChapter7Html,
  getChapter8Html
};
