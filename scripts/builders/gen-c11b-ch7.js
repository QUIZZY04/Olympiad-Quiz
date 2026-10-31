// scripts/builders/gen-c11b-ch7.js
// Chapter 7: Structural Organisation in Animals (All 14 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh7 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      Animal Tissues (Epithelial &amp; Muscular) &amp; Frog Morpho-Anatomy
    </div>
    <svg viewBox="0 0 850 240" width="100%" height="auto" style="max-height:240px; font-family:'Plus Jakarta Sans',sans-serif;">
      <rect x="10" y="10" width="830" height="220" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="425" y="30" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">FUNDAMENTAL ANIMAL TISSUES &amp; INTERCELLULAR JUNCTIONS</text>

      <!-- 1. Squamous Epithelium -->
      <g transform="translate(30, 45)">
        <rect x="0" y="0" width="170" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="85" y="22" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Squamous Epithelium</text>
        <!-- Flat tiles -->
        <polygon points="25,60 75,50 95,80 45,90" fill="#ecfdf5" stroke="#059669"/>
        <circle cx="60" cy="70" r="4" fill="#047857"/>
        <polygon points="75,50 125,55 145,85 95,80" fill="#ecfdf5" stroke="#059669"/>
        <circle cx="110" cy="68" r="4" fill="#047857"/>
        <polygon points="45,90 95,80 115,115 65,125" fill="#ecfdf5" stroke="#059669"/>
        <circle cx="80" cy="102" r="4" fill="#047857"/>
        <text x="85" y="145" font-size="8" fill="#334155" text-anchor="middle">Single layer of flattened cells</text>
        <text x="85" y="158" font-size="7.5" fill="#64748b" text-anchor="middle">Diffusion boundary (Alveoli, Capillaries)</text>
      </g>

      <!-- 2. Cuboidal & Columnar -->
      <g transform="translate(225, 45)">
        <rect x="0" y="0" width="180" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="90" y="22" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Columnar / Ciliated</text>
        <!-- Tall pillar cells with cilia -->
        <line x1="30" y1="52" x2="150" y2="52" stroke="#64748b" stroke-dasharray="2,2"/>
        <rect x="35" y="55" width="25" height="65" fill="#eff6ff" stroke="#2563eb"/>
        <ellipse cx="47" cy="100" rx="4" ry="7" fill="#1e40af"/>
        <rect x="65" y="55" width="25" height="65" fill="#eff6ff" stroke="#2563eb"/>
        <ellipse cx="77" cy="100" rx="4" ry="7" fill="#1e40af"/>
        <rect x="95" y="55" width="25" height="65" fill="#eff6ff" stroke="#2563eb"/>
        <ellipse cx="107" cy="100" rx="4" ry="7" fill="#1e40af"/>
        <rect x="125" y="55" width="25" height="65" fill="#eff6ff" stroke="#2563eb"/>
        <ellipse cx="137" cy="100" rx="4" ry="7" fill="#1e40af"/>
        <!-- Cilia on apical surface -->
        <line x1="47" y1="55" x2="47" y2="45" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="77" y1="55" x2="77" y2="45" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="107" y1="55" x2="107" y2="45" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="137" y1="55" x2="137" y2="45" stroke="#2563eb" stroke-width="1.5"/>
        <text x="90" y="145" font-size="8" fill="#334155" text-anchor="middle">Basal nuclei &amp; Apical cilia</text>
        <text x="90" y="158" font-size="7.5" fill="#64748b" text-anchor="middle">Bronchioles, Fallopian tubes</text>
      </g>

      <!-- 3. Muscle Tissues -->
      <g transform="translate(430, 45)">
        <rect x="0" y="0" width="180" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="90" y="22" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Muscle Fiber Types</text>
        <!-- Skeletal muscle with striations -->
        <rect x="25" y="42" width="130" height="18" rx="3" fill="#fee2e2" stroke="#dc2626"/>
        <line x1="40" y1="42" x2="40" y2="60" stroke="#b91c1c"/><line x1="60" y1="42" x2="60" y2="60" stroke="#b91c1c"/><line x1="80" y1="42" x2="80" y2="60" stroke="#b91c1c"/>
        <line x1="100" y1="42" x2="100" y2="60" stroke="#b91c1c"/><line x1="120" y1="42" x2="120" y2="60" stroke="#b91c1c"/>
        <text x="90" y="73" font-size="7.5" fill="#991b1b" text-anchor="middle">Skeletal: Striated, Syncytial, Voluntary</text>

        <!-- Smooth muscle spindle -->
        <path d="M 25,95 Q 90,82 155,95 Q 90,108 25,95" fill="#fef3c7" stroke="#d97706"/>
        <circle cx="90" cy="95" r="3.5" fill="#b45309"/>
        <text x="90" y="118" font-size="7.5" fill="#92400e" text-anchor="middle">Smooth: Non-striated, Uninucleate, Involuntary</text>

        <!-- Cardiac muscle -->
        <rect x="25" y="128" width="130" height="18" rx="3" fill="#fdf4ff" stroke="#a21caf"/>
        <line x1="75" y1="128" x2="75" y2="146" stroke="#86198f" stroke-width="2.5"/>
        <text x="90" y="158" font-size="7.5" fill="#701a75" text-anchor="middle">Cardiac: Intercalated Discs, Involuntary</text>
      </g>

      <!-- 4. Cellular Junctions -->
      <g transform="translate(635, 45)">
        <rect x="0" y="0" width="185" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="92" y="22" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Epithelial Junctions</text>
        <rect x="20" y="40" width="145" height="34" rx="4" fill="#ffffff" stroke="#94a3b8"/>
        <text x="25" y="55" font-size="8" font-weight="bold" fill="#dc2626">Tight Junction:</text>
        <text x="25" y="67" font-size="7.5" fill="#475569">Prevents leakage across tissue</text>

        <rect x="20" y="80" width="145" height="34" rx="4" fill="#ffffff" stroke="#94a3b8"/>
        <text x="25" y="95" font-size="8" font-weight="bold" fill="#2563eb">Adhering Junction:</text>
        <text x="25" y="107" font-size="7.5" fill="#475569">Cements neighboring cells</text>

        <rect x="20" y="120" width="145" height="34" rx="4" fill="#ffffff" stroke="#94a3b8"/>
        <text x="25" y="135" font-size="8" font-weight="bold" fill="#16a34a">Gap Junction:</text>
        <text x="25" y="147" font-size="7.5" fill="#475569">Ionic channels for communication</text>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch7-q1', 'Question 1', 'NCERT Exercise',
  'Answer in one word or one sentence:<br>(i) Give the common name of <em>Periplaneta americana</em>.<br>(ii) How many spermathecae are found in earthworm / cockroach?<br>(iii) What is the position of ovaries in cockroach?<br>(iv) How many segments are present in the abdomen of cockroach?<br>(v) Where do you find Malpighian tubules?',
  `<div class="step">
    <strong>Precise Anatomical Answers:</strong><br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>(i) Common name of <em>Periplaneta americana</em>:</strong><br>
      <strong>American Cockroach</strong> (common household pest).</li>
      <li><strong>(ii) Spermathecae in cockroach / earthworm:</strong><br>
      In female cockroach, there is <strong>one pair of spermathecae</strong> (situated in the 6th abdominal segment). <em>(In earthworm, there are 4 pairs situated in 6th to 9th segments).</em></li>
      <li><strong>(iii) Position of ovaries in cockroach:</strong><br>
      A pair of large ovaries lies laterally in the <strong>2nd to 6th abdominal segments</strong> embedded in fat bodies.</li>
      <li><strong>(iv) Number of segments in the abdomen of cockroach:</strong><br>
      The abdomen in both male and female adult cockroaches consists of <strong>10 segments</strong> (embryo has 11 segments).</li>
      <li><strong>(v) Location of Malpighian tubules:</strong><br>
      At the junction of the <strong>midgut (mesenteron) and hindgut (ileum)</strong> in cockroach, floating freely in the hemolymph.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(i) American cockroach & (ii) One pair of spermathecae in female cockroach', '1 Mark'],
    ['(iii) 2nd to 6th abdominal segments & (iv) 10 segments in abdomen', '1 Mark'],
    ['(v) Junction of midgut and hindgut', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch7-q2', 'Question 2', 'NCERT Exercise',
  'Answer the following: (i) What is the function of a nephron / nephridium? (ii) How many types of nephridia are found in earthworm based on location?',
  `<div class="step">
    <strong>(i) Function of a Nephron / Nephridium:</strong><br>
    The <strong>nephron</strong> (in vertebrates) and <strong>nephridium</strong> (in invertebrates like annelids) is the microscopic structural and functional unit of the excretory system. Its primary physiological functions are:
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Excretion:</strong> Ultrafiltration of blood/coelomic fluid, selective reabsorption of vital solutes (glucose, amino acids, ions), and active tubular secretion to eliminate metabolic nitrogenous wastes (urea, ammonia, or uric acid).</li>
      <li><strong>Osmoregulation:</strong> Regulates the volume, water content, and ionic electrolyte balance ($Na^+$, $K^+$, $Cl^-$) of body fluids.</li>
    </ul>
    <strong>(ii) Three Types of Nephridia in Earthworm Based on Location:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>1. Septal Nephridia:</strong> Present on both sides of intersegmental septa from segment 15 to the last segment opening into intestine (enteronephric).</li>
      <li><strong>2. Integumentary Nephridia:</strong> Minute nephridia attached to the inner body wall lining from segment 3 to the last, discharging wastes directly to exterior (exonephric).</li>
      <li><strong>3. Pharyngeal Nephridia:</strong> Present as three paired tufts in segments 4, 5, and 6 opening into the pharynx and buccal cavity (enteronephric).</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(i) Dual function: excretion of nitrogenous wastes and osmoregulatory fluid balance', '1.5 Marks'],
    ['(ii) Three types based on location: Septal, Integumentary, and Pharyngeal nephridia', '1.5 Marks']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch7-q3', 'Question 3', 'NCERT Exercise',
  'Draw a neat labelled diagram of the alimentary canal of a cockroach.',
  `<div class="step">
    <strong>Anatomical Organization of the Alimentary Canal of Cockroach (<em>Periplaneta americana</em>):</strong><br>
    The digestive tract is divided into three distinct morphological regions:<br><br>
    <strong>1. Foregut (Stomodaeum) &mdash; Ectodermal, lined with cuticular intima:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Mouth &amp; Pharynx:</strong> Opens into a short muscular pharynx, receiving ducts from paired <strong>salivary glands</strong> and salivary reservoirs.</li>
      <li><strong>Oesophagus:</strong> A narrow, thin-walled tube leading into a large, thin-walled sac called the <strong>crop</strong> (used for temporary food storage).</li>
      <li><strong>Gizzard (Proventriculus):</strong> A thick, circular muscular organ equipped internally with <strong>six chitinous cuticular teeth</strong> and bristles that grind food particles into a fine powder.</li>
    </ul>
    <strong>2. Midgut (Mesenteron / Ventriculus) &mdash; Endodermal, true digestive zone:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>At the junction of gizzard and midgut, there is a ring of <strong>6 to 8 blind tubular finger-like Hepatic (Gastric) Caeca</strong> that secrete digestive enzymes (amylases, maltases, lipases).</li>
      <li>Midgut lumen is lined by the permeable peritrophic membrane protecting epithelial cells.</li>
    </ul>
    <strong>3. Hindgut (Proctodaeum) &mdash; Ectodermal, lined with cuticle:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>At the junction of midgut and hindgut, there are <strong>100 to 150 yellow, fine, hair-like Malpighian tubules</strong> (excretory in function).</li>
      <li>Differentiated into: (i) short narrow <strong>ileum</strong>, (ii) long coiled <strong>colon</strong>, and (iii) broad <strong>rectum</strong> with 6 rectal papillae for water and salt reabsorption, opening at the anus.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Foregut components: pharynx, oesophagus, salivary glands, crop (storage), gizzard with 6 teeth', '1.5 Marks'],
    ['Midgut with 6-8 hepatic caeca for digestive enzyme secretion', '1 Mark'],
    ['Hindgut with Malpighian tubules (100-150), ileum, colon, and rectum with rectal papillae', '1.5 Marks']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch7-q4', 'Question 4', 'NCERT Exercise',
  'Compare the following: (a) Simple epithelium and compound epithelium (b) Cardiac muscle and striated muscle (c) Dense regular and dense irregular connective tissues (d) Adipose and blood tissue (e) Simple gland and compound gland.',
  `<div class="step">
    <strong>Comparative Analysis of Tissue Pairs:</strong><br><br>
    <strong>(a) Simple Epithelium vs. Compound Epithelium:</strong><br>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Simple:</em> Composed of a <strong>single layer</strong> of cells resting on a basement membrane. Functions in absorption, secretion, and filtration (e.g., lining of stomach, renal tubules, lung alveoli).</li>
      <li><em>Compound (Stratified):</em> Composed of <strong>two or more layers</strong> of cells. Main function is providing mechanical and chemical protection against stress and wear-and-tear (e.g., skin epidermis, buccal cavity, pharynx).</li>
    </ul>
    <strong>(b) Cardiac Muscle vs. Striated (Skeletal) Muscle:</strong><br>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Cardiac Muscle:</em> Involuntary, branched, uninucleate fibers located exclusively in the heart wall, possessing specialized zig-zag communicating junctions called <strong>intercalated discs</strong> with gap junctions. Never undergoes fatigue.</li>
      <li><em>Striated Muscle:</em> Voluntary, unbranched, multinucleate (syncytial) cylindrical fibers attached to skeletal bones. Subject to fatigue upon prolonged lactic acid accumulation.</li>
    </ul>
    <strong>(c) Dense Regular vs. Dense Irregular Connective Tissue:</strong><br>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Dense Regular:</em> Collagen fibers are packed in parallel bundles between rows of fibroblasts, providing high unidirectional tensile strength (e.g., <strong>tendons</strong> connecting muscle to bone, <strong>ligaments</strong> connecting bone to bone).</li>
      <li><em>Dense Irregular:</em> Fibroblasts and fibers (predominantly collagen) are oriented in criss-cross, irregular random directions to resist mechanical forces from multiple angles (e.g., in the <strong>dermis of skin</strong>).</li>
    </ul>
    <strong>(d) Adipose Tissue vs. Blood:</strong><br>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Adipose:</em> Loose connective tissue specialized in synthesizing and storing neutral fats (triglycerides) within adipocytes; acts as a subcutaneous heat insulator and shock-absorbing cushion.</li>
      <li><em>Blood:</em> Fluid connective tissue comprising plasma (55%) and formed cellular elements (RBCs, WBCs, platelets); translocates respiratory gases, nutrients, and hormones throughout the body.</li>
    </ul>
    <strong>(e) Simple Gland vs. Compound Gland:</strong><br>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Simple Gland:</em> Has an <strong>unbranched duct</strong> leading from secretory units (e.g., sweat glands, gastric glands, crypts of Lieberk&uuml;hn).</li>
      <li><em>Compound Gland:</em> Has a repeatedly <strong>branched duct</strong> system (e.g., salivary glands, exocrine pancreas, mammary glands).</li>
    </ul>
  </div>`,
  '5 Marks',
  [
    ['(a) Simple (single layer, absorption) vs Compound (multi-layered, protection)', '1 Mark'],
    ['(b) Cardiac (branched, intercalated discs, involuntary) vs Striated (syncytial, voluntary)', '1 Mark'],
    ['(c) Dense regular (parallel fibers, tendons) vs irregular (random criss-cross, dermis)', '1 Mark'],
    ['(d) Adipose (fat storage, insulation) vs Blood (fluid plasma, gas transport)', '1 Mark'],
    ['(e) Simple gland (unbranched duct) vs Compound gland (branched duct)', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch7-q5', 'Question 5', 'NCERT Exercise',
  'What are the following and where do you find them in animal body: (a) Chondrocytes (b) Axons (c) Ciliated epithelium?',
  `<div class="step">
    <strong>Definition, Identity &amp; Anatomical Distribution:</strong><br><br>
    <strong>(a) Chondrocytes:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>What they are:</strong> Mature cartilage-forming cells that reside enclosed in fluid-filled cavities called <strong>lacunae</strong> within the pliable, solid, non-vascular chondroitin sulfate matrix of cartilage.</li>
      <li><strong>Where found:</strong> At the tip of the human nose, outer ear pinna, intervertebral discs, ring supports of trachea, and articular surfaces of long bones.</li>
    </ul>
    <strong>(b) Axons:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>What they are:</strong> Long, slender, cylindrical cytoplasmic nerve fiber projections arising from the cyton (soma) of a neuron that conduct action potentials (nerve impulses) away from the cell body toward synaptic terminals.</li>
      <li><strong>Where found:</strong> In peripheral nerves, white matter tracts of the brain and spinal cord, and sensory/motor nerves throughout the body.</li>
    </ul>
    <strong>(c) Ciliated Epithelium:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>What it is:</strong> A specialized epithelial tissue consisting of cuboidal or columnar cells bearing hundreds of hair-like protoplasmic projections called <strong>cilia</strong> on their apical free surface. Cilia beat rhythmically to propel particles, mucus, or fluids in a specific direction.</li>
      <li><strong>Where found:</strong> Inner lining of the <strong>respiratory tract (bronchioles and trachea)</strong> to sweep out inhaled dust particles and mucus, and inner lining of the <strong>Fallopian tubes (oviducts)</strong> to propel ova towards the uterus.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(a) Chondrocytes: definition (cartilage cells in lacunae) & location (nose tip, pinna, joints)', '1 Mark'],
    ['(b) Axons: definition (neuron fiber conducting away from cyton) & location (nerves, CNS white matter)', '1 Mark'],
    ['(c) Ciliated epithelium: definition (cilia beating) & location (bronchioles, fallopian tubes)', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch7-q6', 'Question 6', 'NCERT Exercise',
  'Describe the various types of epithelial tissues with the help of labelled diagrams.',
  `<div class="step">
    <strong>Comprehensive Classification of Epithelial Tissues:</strong><br>
    Epithelial tissue forms protective coverings or inner linings for free surfaces, characterized by closely packed cells with minimal intercellular matrix, resting upon a non-cellular collagenous basement membrane.<br><br>
    <strong>A. Simple Epithelium (Single Layer of Cells):</strong><br>
    <ol style="margin:4px 0 8px 20px;">
      <li><strong>Squamous Epithelium (Pavement Epithelium):</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Thin, flat, polygonal tile-like cells with irregular boundaries and central bulging nuclei.</li>
          <li><em>Function:</em> Forms a delicate diffusion boundary.</li>
          <li><em>Location:</em> Walls of blood vessels (endothelium), air sacs of lungs (alveoli), Bowman's capsule in nephrons.</li>
        </ul>
      </li>
      <li><strong>Cuboidal Epithelium:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Cube-like cells with spherical centrally located nuclei. In some regions (e.g., Proximal Convoluted Tubule / PCT of nephron), apical surfaces bear microvilli forming a brush border to expand absorptive surface area.</li>
          <li><em>Function:</em> Secretion and absorption.</li>
          <li><em>Location:</em> Ducts of glands and tubular parts of nephrons in kidneys.</li>
        </ul>
      </li>
      <li><strong>Columnar Epithelium:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Tall, pillar-like, cylindrical cells with elongated oval nuclei situated near the base. Free surface may possess microvilli or mucus-secreting goblet cells.</li>
          <li><em>Function:</em> Secretion of enzymes/mucus and active nutrient absorption.</li>
          <li><em>Location:</em> Lining of stomach, small intestine, and gall bladder.</li>
        </ul>
      </li>
      <li><strong>Ciliated Epithelium:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Columnar or cuboidal cells bearing motile cilia on their free surfaces.</li>
          <li><em>Function:</em> Moves particles or mucus in a unidirectional current.</li>
          <li><em>Location:</em> Bronchioles, trachea, fallopian tubes, ventricles of brain (ependyma).</li>
        </ul>
      </li>
    </ol>
    <strong>B. Compound (Stratified) Epithelium:</strong><br>
    Made of multiple cell layers with limited secretory/absorptive role. Provides mechanical, chemical, and thermal protection against abrasion. <em>Location: Dry surface of skin (keratinized stratified squamous), moist surface of buccal cavity, pharynx, esophagus, and vagina.</em>
  </div>`,
  '4 Marks',
  [
    ['Simple squamous: flat tiles, diffusion boundary, lung alveoli/capillaries', '1 Mark'],
    ['Simple cuboidal: cube-shaped, secretion/absorption, PCT kidney tubules/ducts', '1 Mark'],
    ['Simple columnar & ciliated: tall cells, basal nuclei, cilia function in bronchioles/oviducts', '1 Mark'],
    ['Compound epithelium: multi-layered, protective barrier against abrasion, skin/pharynx', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch7-q7', 'Question 7', 'NCERT Exercise',
  'Distinguish between: (a) Exocrine and endocrine glands (b) Tight junctions, adhering junctions and gap junctions.',
  `<div class="step">
    <strong>(a) Differences Between Exocrine and Endocrine Glands:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:6px 0; font-size:0.84rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:6px 10px;">Feature</th><th style="padding:6px 10px;">Exocrine Glands</th><th style="padding:6px 10px;">Endocrine Glands</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 10px; font-weight:700;">1. Presence of Ducts</td><td style="padding:6px 10px;"><strong>Duct glands</strong>; discharge secretions via dedicated tubular ducts.</td><td style="padding:6px 10px;"><strong>Ductless glands</strong>; lack ducts completely.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 10px; font-weight:700;">2. Nature of Secretion</td><td style="padding:6px 10px;">Mucus, saliva, digestive enzymes, bile, sweat, sebum, earwax, milk.</td><td style="padding:6px 10px;">Chemical messengers called <strong>hormones</strong>.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 10px; font-weight:700;">3. Route of Transport</td><td style="padding:6px 10px;">Discharged directly onto an epithelial surface or into a lumen.</td><td style="padding:6px 10px;">Secreted directly into venous capillary blood and lymph.</td></tr>
          <tr><td style="padding:6px 10px; font-weight:700;">4. Examples</td><td style="padding:6px 10px;">Salivary glands, sweat glands, liver, exocrine pancreas.</td><td style="padding:6px 10px;">Pituitary, thyroid, adrenals, parathyroid, endocrine islets of Langerhans.</td></tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>(b) Differences Between Specialized Cellular Junctions:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:6px 0; font-size:0.84rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:6px 10px;">Junction Type</th><th style="padding:6px 10px;">Molecular Mechanism</th><th style="padding:6px 10px;">Primary Physiological Role</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:6px 10px; font-weight:700;">1. Tight Junctions (<em>Zonula occludens</em>)</td>
            <td style="padding:6px 10px;">Adjacent cell membranes fuse tightly by trans-membrane proteins (claudins and occludins).</td>
            <td style="padding:6px 10px;"><strong>Prevents leakage</strong> of substances across an epithelial cell layer (e.g., intestinal mucosa, urinary bladder).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:6px 10px; font-weight:700;">2. Adhering Junctions (Desmosomes)</td>
            <td style="padding:6px 10px;">Cadherin cadherin-anchored protein plaques anchored to cytoplasmic keratin intermediate filaments.</td>
            <td style="padding:6px 10px;">Performs <strong>cementing</strong> to keep neighboring cells firmly anchored together under mechanical shearing forces (e.g., epidermis, cardiac muscle).</td>
          </tr>
          <tr>
            <td style="padding:6px 10px; font-weight:700;">3. Gap Junctions (Nexus)</td>
            <td style="padding:6px 10px;">Porous hexameric protein channels called <strong>connexons</strong> bridge adjacent cytoplasm.</td>
            <td style="padding:6px 10px;">Facilitates <strong>rapid intercellular communication</strong> by allowing direct passage of ions, small molecules, second messengers, and rapid electrical action potentials.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '4 Marks',
  [
    ['(a) Exocrine (ducts, enzymes/sweat) vs Endocrine (ductless, hormones in blood)', '2 Marks'],
    ['(b) Precise roles: Tight (stop leakage), Adhering (cementing/strength), Gap (intercellular ionic flow)', '2 Marks']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch7-q8', 'Question 8', 'NCERT Exercise',
  'Draw a neat diagram of the digestive system of frog.',
  `<div class="step">
    <strong>Anatomical Architecture of the Digestive System of Frog (<em>Rana tigrina</em>):</strong><br>
    The digestive system consists of an alimentary canal and associated digestive glands:<br><br>
    <strong>1. Alimentary Canal (Relatively Short due to Carnivorous Diet):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Mouth &amp; Buccopharyngeal Cavity:</strong> Bounded by wide jaws; upper jaw bears row of sharp <strong>maxillary teeth</strong> and two patches of <strong>vomerine teeth</strong> on palate (prevent prey escape). Possesses a muscular, bilobed, highly extensible tongue attached at the anterior rim and free posteriorly.</li>
      <li><strong>Oesophagus:</strong> Short broad muscular tube dilating into the stomach.</li>
      <li><strong>Stomach:</strong> Crescent-shaped muscular sac with gastric glands secreting $HCl$ and pepsinogen; produces acidic chyme.</li>
      <li><strong>Intestine:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li><em>Duodenum:</em> Receives the hepatopancreatic duct carrying bile and pancreatic juice.</li>
          <li><em>Ileum:</em> Coiled loop lined by microvilli for nutrient digestion and absorption.</li>
        </ul>
      </li>
      <li><strong>Rectum:</strong> Reabsorbs water, opening into a common terminal chamber called the <strong>cloaca</strong>, which opens outside via the <strong>cloacal aperture</strong> (common outlet for feces, urine, and gametes).</li>
    </ul>
    <strong>2. Associated Digestive Glands:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Liver:</strong> Multilobed, secretes bile stored in the green <strong>gall bladder</strong> (emulsifies fats).</li>
      <li><strong>Pancreas:</strong> Irregular gland lying between stomach and duodenum, secreting pancreatic juice containing trypsin, amylase, and lipase.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Mouth, vomerine/maxillary teeth, and anteriorly attached bilobed extensible tongue', '1 Mark'],
    ['Stomach (acid chyme) and intestine (duodenum & coiled ileum)', '1 Mark'],
    ['Digestive glands: multilobed liver with gall bladder, and pancreas', '1 Mark'],
    ['Cloaca and cloacal aperture serving as common terminal chamber', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch7-q9', 'Question 9', 'NCERT Exercise',
  'Mention the function of the following: (a) Ureters in frog (b) Malpighian tubules in cockroach (c) Body wall in earthworm.',
  `<div class="step">
    <strong>Specific Physiological Functions:</strong><br><br>
    <strong>(a) Ureters in Frog:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><em>In Male Frog:</em> The ureters act as <strong>urinogenital ducts</strong>. They emerge from kidneys, receive vasa efferentia carrying spermatozoa from testes via Bidder's canal, and transport both urine and sperm into the cloaca.</li>
      <li><em>In Female Frog:</em> The ureters function exclusively as <strong>urinary ducts</strong> to transport urine from kidneys into the cloaca (oviducts open separately into cloaca).</li>
    </ul>
    <strong>(b) Malpighian Tubules in Cockroach:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>100 to 150 fine, yellow, thread-like tubules floating in hemolymph that act as the primary <strong>excretory and osmoregulatory organs</strong>.</li>
      <li>Lined by glandular and ciliated epithelium, they extract potassium urate and water from hemolymph, convert it into insoluble <strong>uric acid</strong>, and discharge it into the hindgut lumen, ensuring maximum water conservation (uricotelism).</li>
    </ul>
    <strong>(c) Body Wall in Earthworm:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Cutaneous Respiration:</strong> Highly vascularized epidermis secretes moist mucus; atmospheric oxygen dissolves into the moisture film and diffuses into blood capillaries.</li>
      <li><strong>Locomotion:</strong> Outer circular and inner longitudinal muscle layers contract antagonistically with chitinous S-shaped setae to produce peristaltic burrowing locomotion.</li>
      <li><strong>Protection:</strong> Secretes protective cuticle preventing internal organ damage and desiccation.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(a) Ureters in frog: urinogenital duct in males vs solely urinary in females', '1 Mark'],
    ['(b) Malpighian tubules: extraction of urate wastes from hemolymph and uric acid excretion', '1 Mark'],
    ['(c) Earthworm body wall: cutaneous gas exchange, muscle/setae locomotion, and protection', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch7-q10', 'Question 10', 'NCERT Exercise',
  'Give the schematic diagram of an open circulatory system of cockroach.',
  `<div class="step">
    <strong>Open Circulatory System of Cockroach (<em>Periplaneta americana</em>):</strong><br>
    Cockroaches possess an <strong>open circulatory system</strong> where blood (hemolymph) does not flow through closed capillaries, but directly bathes visceral organs in open fluid spaces called <strong>sinuses</strong> within the hemocoel:<br><br>
    <strong>1. Structural Components:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Hemolymph:</strong> Colorless blood composed of clear fluid plasma and phagocytic hemocytes (lacks respiratory pigment like hemoglobin; does not transport oxygen).</li>
      <li><strong>Heart:</strong> Elongated, pulsating, dorsal muscular tube differentiated into <strong>13 funnel-shaped chambers</strong> (3 thoracic and 10 abdominal). Each chamber possesses a pair of lateral openings guarded by valves called <strong>ostia</strong>.</li>
      <li><strong>Alary Muscles:</strong> 12 pairs of triangular fan-like muscles attached between heart chambers and terga that contract to expand the pericardial space.</li>
      <li><strong>Hemocoelic Sinuses:</strong> Partitioned by two horizontal fibro-muscular membranes (dorsal and ventral diaphragms) into three sinuses:
        <ol style="margin:2px 0 4px 15px;">
          <li><em>Dorsal Pericardial Sinus:</em> Encloses the heart.</li>
          <li><em>Middle Perivisceral Sinus:</em> Largest space enclosing the alimentary canal and gonads.</li>
          <li><em>Ventral Perineural Sinus:</em> Surrounds the ventral nerve cord.</li>
        </ol>
      </li>
    </ul>
    <strong>Schematic Course of Circulation:</strong><br>
    $$\\text{Pericardial Sinus} \\xrightarrow{\\text{through Ostia}} \\text{Heart (Chambers 13 to 1)} \\xrightarrow{\\text{Anterior Aorta}} \\text{Head Sinus}$$
    $$\\downarrow$$
    $$\\text{Perivisceral \\& Perineural Sinuses (visceral bathing)} \\xrightarrow{\\text{Diaphragm Pores}} \\text{Pericardial Sinus}$$
  </div>`,
  '3 Marks',
  [
    ['13-chambered dorsal heart with ostia and 12 pairs of alary muscles', '1 Mark'],
    ['Three hemocoelic sinuses: pericardial, perivisceral, and perineural separated by diaphragms', '1 Mark'],
    ['Complete flow sequence from heart to head sinus, perivisceral sinuses and back via ostia', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c11b-ch7-q11', 'Question 11', 'NCERT Exercise',
  'Mention the role of the following in cockroach: (a) Antennae (b) Compound eyes (c) Maxillary palps (d) Anal cerci.',
  `<div class="step">
    <strong>Sensory &amp; Behavioral Roles in Cockroach:</strong><br><br>
    <strong>(a) Antennae (Thread-like Tactile &amp; Olfactory Organs):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Arise from membranous sockets in front of the eyes. Composed of scape, pedicel, and multi-segmented flagellum.</li>
      <li>Rich in tactile, olfactory, and thermal receptors; monitor environmental surroundings, locate food, detect air currents, and perceive sex pheromones.</li>
    </ul>
    <strong>(b) Compound Eyes (Visual Photoreception):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>A pair of kidney-shaped sessile compound eyes situated dorsolaterally on head capsule, each composed of roughly <strong>2,000 hexagonal ommatidia</strong>.</li>
      <li>Gives <strong>mosaic vision (apposition/superposition)</strong> with high sensitivity to motion in dim light (nocturnal vision) but low image resolution.</li>
    </ul>
    <strong>(c) Maxillary Palps (Gustatory &amp; Manipulative Feeding):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Five-segmented sensory appendages borne on the first pair of maxillae.</li>
      <li>Carry chemoreceptors (taste/smell) and mechanoreceptors used to inspect, taste, hold, and manipulate food particles into the pre-oral cavity during chewing.</li>
    </ul>
    <strong>(d) Anal Cerci (Acoustic &amp; Seismic Vibration Detection):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>A pair of jointed, 15-segmented sensory appendages projecting from the 10th abdominal tergum in <strong>both males and females</strong>.</li>
      <li>Extremely sensitive to low-frequency substrate vibrations and subtle air movements, triggering instantaneous escape running reflexes when a predator approaches.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['(a) Antennae: tactile, olfactory, and chemical environmental monitoring', '1 Mark'],
    ['(b) Compound eyes: 2000 ommatidia per eye conferring mosaic nocturnal vision', '1 Mark'],
    ['(c) Maxillary palps: taste, smell, and food manipulation in mouthparts', '1 Mark'],
    ['(d) Anal cerci: detection of subtle ground and air vibrations triggering escape reflexes', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c11b-ch7-q12', 'Question 12', 'NCERT Exercise',
  'What are the cellular components of blood?',
  `<div class="step">
    <strong>Formed Cellular Elements of Blood:</strong><br>
    Human blood consists of fluid plasma (55%) and formed cellular elements (45%), which comprise three major cell types:<br><br>
    <strong>1. Red Blood Cells (RBCs / Erythrocytes):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Count &amp; Shape:</strong> Most abundant (5.0 to 5.5 million/$\\text{mm}^3$ of blood). Biconcave discs; lack nuclei, mitochondria, and Golgi apparatus at maturity in mammals to maximize hemoglobin volume.</li>
      <li><strong>Function:</strong> Contain iron-porphyrin protein <strong>hemoglobin</strong> (12–16 g/100 mL blood) which binds oxygen reversibly to form oxyhemoglobin for systemic tissue transport.</li>
    </ul>
    <strong>2. White Blood Cells (WBCs / Leukocytes):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Count &amp; Characteristics:</strong> Nucleated cells (6,000–8,000/$\\text{mm}^3$). Subdivided into:
        <ul style="margin:2px 0 4px 15px;">
          <li><strong>Granulocytes (with cytoplasmic granules &amp; lobed nuclei):</strong>
            <br>&bull; <em>Neutrophils (60–65%):</em> Phagocytic cells engulfing invading bacteria.
            <br>&bull; <em>Eosinophils (2–3%):</em> Resist parasitic infections and mediate allergic responses.
            <br>&bull; <em>Basophils (0.5–1%):</em> Secrete histamine, serotonin, and heparin in inflammatory responses.
          </li>
          <li><strong>Agranulocytes (without specific cytoplasmic granules):</strong>
            <br>&bull; <em>Monocytes (6–8%):</em> Large phagocytic cells maturing into tissue macrophages.
            <br>&bull; <em>Lymphocytes (20–25%):</em> B-cells (humoral antibody immunity) and T-cells (cell-mediated immunity).
          </li>
        </ul>
      </li>
    </ul>
    <strong>3. Blood Platelets (Thrombocytes):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Cellular fragments (150,000 to 350,000/$\\text{mm}^3$) budded from giant bone marrow cells called <strong>megakaryocytes</strong>.</li>
      <li>Release thromboplastin and clotting factor cascades essential for <strong>hemostasis (blood coagulation)</strong>.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Erythrocytes (RBCs): biconcave, enucleate, hemoglobin transport of oxygen', '1 Mark'],
    ['Leukocytes (WBCs): granulocytes (neutrophils, eosinophils, basophils) and agranulocytes (monocytes, lymphocytes)', '1 Mark'],
    ['Thrombocytes (Platelets): origin from megakaryocytes and function in blood clotting', '1 Mark']
  ]
));

// Q13
questions.push(createQCard(
  'c11b-ch7-q13', 'Question 13', 'NCERT Exercise',
  'Describe the female reproductive system of cockroach with a labelled diagram.',
  `<div class="step">
    <strong>Anatomical Organization of Female Reproductive System in Cockroach:</strong><br><br>
    <strong>1. Ovaries:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>A pair of large, yellowish ovaries lying laterally in the <strong>2nd to 6th abdominal segments</strong> embedded in fat bodies.</li>
      <li>Each ovary is formed of a group of <strong>8 ovarian tubules or ovarioles</strong> containing a linear chain of developing ova in various maturation stages.</li>
    </ul>
    <strong>2. Oviducts &amp; Common Oviduct (Vagina):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>The individual ovarioles of each ovary unite posteriorly into a short, wide lateral <strong>oviduct</strong>.</li>
      <li>The two lateral oviducts join in the midline to form a single, broad median oviduct called the <strong>vagina</strong>, opening into the female genital chamber (bursa copulatrix).</li>
    </ul>
    <strong>3. Spermathecae:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>A pair of unequal, pyriform sacs located in the 6th abdominal segment, opening by a common pore into the dorsal wall of the genital chamber. They receive and store viable spermatozoa delivered during copulation.</li>
    </ul>
    <strong>4. Collaterial Glands:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>A pair of large, branched, tubular glands situated behind the ovaries. They secrete the hard, proteinaceous, dark-brown sclerotized casing of the egg capsule called the <strong>ootheca</strong>.</li>
    </ul>
    <strong>5. Genital Pouch (Chamber) &amp; Gonapophyses:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Formed by the 7th, 8th, and 9th sterna (7th sternum is boat-shaped). Contains three pairs of chitinous valvate blades called <strong>gonapophyses (ovipositor)</strong> to guide eggs into oothecae.</li>
      <li>Each ootheca encapsulates <strong>16 fertilized eggs</strong> arranged in two parallel rows.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Pair of ovaries in 2nd-6th segments, each having 8 ovarioles with linear chains of ova', '1 Mark'],
    ['Lateral oviducts uniting into median vagina opening into genital chamber', '1 Mark'],
    ['Pair of spermathecae for storing sperm & collaterial glands forming ootheca', '1 Mark'],
    ['Genital pouch (7th, 8th, 9th sterna) and 16 eggs per ootheca', '1 Mark']
  ]
));

// Q14
questions.push(createQCard(
  'c11b-ch7-q14', 'Question 14', 'NCERT Exercise',
  'Distinguish between a male frog and a female frog.',
  `<div class="step">
    <strong>Morphological &amp; Anatomical Sexual Dimorphism in Frog (<em>Rana tigrina</em>):</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Characteristic Feature</th>
            <th style="padding:8px 12px; color:#065f46;">Male Frog</th>
            <th style="padding:8px 12px; color:#065f46;">Female Frog</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">1. Vocal Sacs</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:700;"><strong>Present.</strong> Possesses a pair of bluish wrinkled vocal sacs beneath the throat that amplify croaking to attract females during the monsoon breeding season.</td>
            <td style="padding:8px 12px; color:#dc2626; font-weight:700;"><strong>Absent.</strong> Vocal sacs are completely absent; produces only faint sounds.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">2. Copulatory (Nuptial) Pad</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:700;"><strong>Present.</strong> Develops a thickened, swollen, sticky nuptial pad on the ventral base of the first digit of the forelimb to firmly grip the female during amplexus.</td>
            <td style="padding:8px 12px; color:#dc2626; font-weight:700;"><strong>Absent.</strong> Forelimb digits are smooth with no copulatory pad.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">3. Body Size &amp; Abdomen</td>
            <td style="padding:8px 12px;">Relatively smaller, slender body with a narrower abdomen.</td>
            <td style="padding:8px 12px;">Noticeably larger in body size; abdomen becomes visibly distended and bulky during the breeding season due to thousands of ova.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">4. Ureter Function</td>
            <td style="padding:8px 12px;">Ureter functions as a <strong>urinogenital duct</strong> (conducts both urine and spermatozoa into cloaca).</td>
            <td style="padding:8px 12px;">Ureter acts strictly as a <strong>urinary duct</strong> (transports only urine; coiled oviducts open separately into cloaca).</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">5. Bidder's Canal</td>
            <td style="padding:8px 12px;">Present inside the kidney to receive sperm from vasa efferentia.</td>
            <td style="padding:8px 12px;">Completely absent.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Vocal sacs: present in males for breeding call amplification, absent in females', '1 Mark'],
    ['Copulatory pad on 1st forelimb digit of males for amplexus grip, absent in females', '1 Mark'],
    ['Ureter: urinogenital duct in males vs strictly urinary duct in females; Bidder’s canal', '1 Mark']
  ]
));

// Save Chapter 7
saveChapter(
  7,
  'Structural Organisation in Animals',
  svgCh7,
  'NCERT Textbook Exercise 1 to 14: Animal Tissues, Epithelial Junctions, Cockroach Anatomy & Frog Sexual Dimorphism',
  questions,
  'Cell: The Unit of Life'
);
