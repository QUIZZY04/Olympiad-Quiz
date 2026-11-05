// scripts/builders/gen-c11b-ch8.js
// Chapter 8: Cell: The Unit of Life (All 15 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh8 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
      Fluid Mosaic Membrane &amp; Organelle Endomembrane System
    </div>
    <svg viewBox="0 0 850 240" width="100%" height="auto" style="max-height:240px; font-family:'Plus Jakarta Sans',sans-serif;">
      <rect x="10" y="10" width="830" height="220" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="425" y="30" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">SINGER &amp; NICOLSON FLUID MOSAIC MODEL OF CELL MEMBRANE (1972)</text>

      <!-- Bilayer graphic -->
      <g transform="translate(40, 50)">
        <rect x="0" y="0" width="450" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        
        <!-- Hydrophilic heads top -->
        <circle cx="30" cy="40" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="30" y1="48" x2="30" y2="72" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="55" cy="40" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="55" y1="48" x2="55" y2="72" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="80" cy="40" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="80" y1="48" x2="80" y2="72" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="105" cy="40" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="105" y1="48" x2="105" y2="72" stroke="#f59e0b" stroke-width="2"/>

        <!-- Integral Transmembrane Protein -->
        <rect x="130" y="25" width="45" height="100" rx="10" fill="#a78bfa" stroke="#7c3aed" stroke-width="2"/>
        <text x="152" y="75" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Integral</text>
        <text x="152" y="87" font-size="7" fill="#ffffff" text-anchor="middle">Protein</text>

        <!-- More heads -->
        <circle cx="200" cy="40" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="200" y1="48" x2="200" y2="72" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="225" cy="40" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="225" y1="48" x2="225" y2="72" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="250" cy="40" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="250" y1="48" x2="250" y2="72" stroke="#f59e0b" stroke-width="2"/>

        <!-- Hydrophilic heads bottom -->
        <circle cx="30" cy="110" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="30" y1="102" x2="30" y2="78" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="55" cy="110" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="55" y1="102" x2="55" y2="78" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="80" cy="110" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="80" y1="102" x2="80" y2="78" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="105" cy="110" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="105" y1="102" x2="105" y2="78" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="200" cy="110" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="200" y1="102" x2="200" y2="78" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="225" cy="110" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="225" y1="102" x2="225" y2="78" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="250" cy="110" r="8" fill="#38bdf8" stroke="#0284c7"/><line x1="250" y1="102" x2="250" y2="78" stroke="#f59e0b" stroke-width="2"/>

        <!-- Labels -->
        <text x="310" y="45" font-size="8" font-weight="bold" fill="#0284c7">&larr; Polar Hydrophilic Head</text>
        <text x="310" y="75" font-size="8" font-weight="bold" fill="#d97706">&larr; Non-polar Fatty Acid Tails</text>
        <text x="310" y="105" font-size="8" font-weight="bold" fill="#7c3aed">&larr; Quasi-fluid Phospholipid Bilayer</text>
      </g>

      <!-- Chromosome Morphotypes on Right -->
      <g transform="translate(520, 50)">
        <rect x="0" y="0" width="300" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="150" y="20" font-size="9.5" font-weight="bold" fill="#0f172a" text-anchor="middle">TYPES OF CHROMOSOMES BY CENTROMERE</text>
        
        <!-- Metacentric -->
        <g transform="translate(25, 30)">
          <path d="M 15,10 L 15,45 Q 15,50 15,55 L 15,90" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>
          <circle cx="15" cy="50" r="4.5" fill="#dc2626"/>
          <text x="15" y="105" font-size="7.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Metacentric</text>
          <text x="15" y="115" font-size="6.5" fill="#64748b" text-anchor="middle">Median (V-shaped)</text>
        </g>

        <!-- Sub-metacentric -->
        <g transform="translate(95, 30)">
          <path d="M 15,20 L 15,40 Q 15,45 15,50 L 15,90" stroke="#059669" stroke-width="5" stroke-linecap="round"/>
          <circle cx="15" cy="40" r="4.5" fill="#dc2626"/>
          <text x="15" y="105" font-size="7.5" font-weight="bold" fill="#065f46" text-anchor="middle">Sub-meta</text>
          <text x="15" y="115" font-size="6.5" fill="#64748b" text-anchor="middle">Sub-median (L-shape)</text>
        </g>

        <!-- Acrocentric -->
        <g transform="translate(165, 30)">
          <path d="M 15,30 L 15,35 Q 15,38 15,42 L 15,90" stroke="#d97706" stroke-width="5" stroke-linecap="round"/>
          <circle cx="15" cy="35" r="4.5" fill="#dc2626"/>
          <text x="15" y="105" font-size="7.5" font-weight="bold" fill="#92400e" text-anchor="middle">Acrocentric</text>
          <text x="15" y="115" font-size="6.5" fill="#64748b" text-anchor="middle">Near end (J-shape)</text>
        </g>

        <!-- Telocentric -->
        <g transform="translate(235, 30)">
          <path d="M 15,32 L 15,90" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/>
          <circle cx="15" cy="30" r="4.5" fill="#dc2626"/>
          <text x="15" y="105" font-size="7.5" font-weight="bold" fill="#5b21b6" text-anchor="middle">Telocentric</text>
          <text x="15" y="115" font-size="6.5" fill="#64748b" text-anchor="middle">Terminal (i-shape)</text>
        </g>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch8-q1', 'Question 1', 'NCERT Exercise',
  'Which of the following is not correct?<br>(a) Robert Brown discovered the cell.<br>(b) Schleiden and Schwann formulated the cell theory.<br>(c) Virchow explained that cells are formed from pre-existing cells.<br>(d) A unicellular organism carries out its life activities within a single cell.',
  `<div class="step">
    <strong>Correct Answer: (a) Robert Brown discovered the cell.</strong><br><br>
    <strong>Historical and Scientific Justification:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li>Statement (a) is <strong>incorrect</strong> because the cell was first discovered and named by <strong>Robert Hooke in 1665</strong> (observing dead cork tissue under his compound microscope). <strong>Robert Brown (1831)</strong> discovered the <strong>nucleus</strong> inside plant cells (orchids).</li>
      <li>Statement (b) is correct: Matthias Schleiden (1838, botanist) and Theodore Schwann (1839, zoologist) jointly synthesized the classic Cell Theory.</li>
      <li>Statement (c) is correct: Rudolf Virchow (1855) modified cell theory by stating <em>"Omnis cellula-e cellula"</em> (all cells arise from pre-existing cells via cell division).</li>
      <li>Statement (d) is correct: Unicellular organisms (e.g., <em>Amoeba</em>, <em>Chlamydomonas</em>) independently execute all essential metabolic, nutritional, excretory, and reproductive functions within a single cell.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Identification of statement (a) as incorrect', '1 Mark'],
    ['Clarification that Hooke discovered cell (1665) while Robert Brown discovered nucleus (1831)', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch8-q2', 'Question 2', 'NCERT Exercise',
  'New cells generate from:<br>(a) bacterial fermentation<br>(b) regeneration of old cells<br>(c) pre-existing cells<br>(d) abiotic materials.',
  `<div class="step">
    <strong>Correct Option: (c) pre-existing cells</strong><br><br>
    <strong>Scientific Explanation:</strong><br>
    According to the modern Cell Principle established by <strong>Rudolf Virchow (1855)</strong> with his famous aphorism <strong>"Omnis cellula-e cellula"</strong>, new daughter cells arise exclusively through the mitotic or meiotic division of pre-existing parent living cells. Spontaneous generation from non-living abiotic materials was definitively disproved by Louis Pasteur.
  </div>`,
  '1 Mark',
  [
    ['Correct choice: (c) pre-existing cells and mention of Rudolf Virchow’s cell lineage theory', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch8-q3', 'Question 3', 'NCERT Exercise',
  'Match the following:<br>Column I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Column II<br>(a) Cristae &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; (i) Flat membranous sacs in stroma<br>(b) Cisternae &mdash;&mdash;&mdash;&mdash;&mdash;&mdash; (ii) Infoldings in mitochondria<br>(c) Thylakoids &mdash;&mdash;&mdash;&mdash;&mdash;&mdash; (iii) Disc-shaped sacs in Golgi apparatus',
  `<div class="step">
    <strong>Accurate Structural Matching:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Column I</th>
            <th style="padding:8px 12px; color:#065f46;">Column II (Correct Match)</th>
            <th style="padding:8px 12px; color:#065f46;">Organellar Function</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(a) Cristae</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(ii) Infoldings in mitochondria</td>
            <td style="padding:8px 12px;">Increases surface area for electron transport chain ($F_0-F_1$ ATP synthase complexes).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(b) Cisternae</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(iii) Disc-shaped sacs in Golgi apparatus</td>
            <td style="padding:8px 12px;">Concentric flattened sacs (cis &amp; trans face) modifying and packaging glycoproteins/glycolipids.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">(c) Thylakoids</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(i) Flat membranous sacs in stroma</td>
            <td style="padding:8px 12px;">Stacked like coins into grana in chloroplasts, housing chlorophyll and photosynthetic light reaction machinery.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>Final Sequence: (a) &rarr; (ii), &nbsp; (b) &rarr; (iii), &nbsp; (c) &rarr; (i)</strong>
  </div>`,
  '2 Marks',
  [
    ['(a) Cristae to (ii) Infoldings in mitochondria', '0.7 Mark'],
    ['(b) Cisternae to (iii) Disc-shaped sacs in Golgi apparatus', '0.7 Mark'],
    ['(c) Thylakoids to (i) Flat membranous sacs in stroma', '0.6 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch8-q4', 'Question 4', 'NCERT Exercise',
  'Which of the following is not correct?<br>(a) Gram-negative bacteria have a thick peptidoglycan wall.<br>(b) Mesosomes are infoldings of cell membrane.<br>(c) Bacterial cell wall is made of peptidoglycan.<br>(d) Pili and fimbriae are involved in bacterial motility.',
  `<div class="step">
    <strong>Incorrect Statements: Both (a) and (d) are incorrect based on NCERT facts:</strong><br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Why (a) is incorrect:</strong> Gram-positive bacteria have a thick (20–80 nm) homogeneous peptidoglycan wall with teichoic acid. <strong>Gram-negative bacteria possess a very thin peptidoglycan layer</strong> (2–7 nm) sandwiched in the periplasmic space between the inner plasma membrane and an outer lipopolysaccharide (LPS) membrane.</li>
      <li><strong>Why (d) is incorrect:</strong> <strong>Pili and fimbriae do not play any role in bacterial motility.</strong> Pili (made of pilin protein) form sex pili for bacterial conjugation (DNA transfer), and fimbriae are bristle-like proteinaceous fibers that anchor bacteria to rocks in streams or host epithelial tissues. <em>Bacterial motility is mediated strictly by flagella.</em></li>
    </ul>
    <em>(Note: In typical single-choice CBSE examination keys, statement (d) is the primary targeted answer regarding motility).</em>
  </div>`,
  '2 Marks',
  [
    ['Identification of (d) [and/or a] as incorrect', '1 Mark'],
    ['Scientific explanation that bacterial motility is mediated exclusively by flagella (not pili/fimbriae)', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch8-q5', 'Question 5', 'NCERT Exercise',
  'What is a mesosome in a prokaryotic cell? Mention the functions that it performs.',
  `<div class="step">
    <strong>Definition of Mesosome:</strong><br>
    A <strong>mesosome</strong> is a characteristic, complexly folded, invaginated membranous structure of prokaryotic cells formed by the in-folding of the plasma membrane into the cytoplasm. It occurs in the form of vesicles, tubules, and lamellae, and is predominantly prominent in Gram-positive bacteria.<br><br>
    <strong>Vital Cellular Functions Performed by Mesosomes:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>1. Cellular Respiration and Secretion:</strong> Prokaryotes lack mitochondria. Mesosomal folds carry electron transport enzymes and ATP synthases, functioning as the prokaryotic respiratory equivalent of eukaryotic mitochondrial cristae.</li>
      <li><strong>2. Surface Area Amplification:</strong> Drastically increases the total surface area of the plasma membrane and its associated enzymatic content.</li>
      <li><strong>3. Cell Wall Synthesis:</strong> Contains enzymes that synthesize and cross-link peptidoglycan precursors during binary fission.</li>
      <li><strong>4. DNA Replication and Daughter Cell Distribution:</strong> Remains attached to the bacterial nucleoid; aids in chromosome replication and ensures equal segregation of genetic material into daughter cells by forming the transverse cross-septum.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Definition of mesosome as plasma membrane invagination in prokaryotes', '1 Mark'],
    ['Respiration (equivalent to mitochondrial cristae) & enzymatic surface area expansion', '1 Mark'],
    ['Role in cell wall synthesis, DNA replication, and binary fission cross-wall septum', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch8-q6', 'Question 6', 'NCERT Exercise',
  'How do neutral solutes move across the plasma membrane? Can the polar molecules also move across it in the same way? If not, then how are these transported across the membrane?',
  `<div class="step">
    <strong>Transport Mechanisms Across the Selectively Permeable Plasma Membrane:</strong><br><br>
    <strong>1. Transport of Neutral (Non-Polar) Solutes:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Neutral, lipid-soluble molecules (e.g., $O_2$, $CO_2$, steroid hormones, ethanol) dissolve directly into the hydrophobic non-polar hydrocarbon core of the phospholipid bilayer.</li>
      <li>They move across by <strong>simple passive diffusion</strong> along their electrochemical concentration gradient (from higher to lower concentration) without requiring metabolic cellular energy (ATP) or carrier proteins.</li>
    </ul>
    <strong>2. Transport of Polar Molecules:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Can polar molecules move in the same way? NO.</strong> Polar, charged, or hydrophilic molecules (e.g., glucose, amino acids, ions like $Na^+$, $K^+$, $Ca^{2+}$) cannot pass through the hydrophobic fatty acid core of the lipid bilayer due to electrostatic repulsion.</li>
      <li><strong>Mechanism of Polar Molecule Transport:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li><em>Facilitated Diffusion (Passive):</em> Transported down their concentration gradient via specialized membrane transport proteins (<strong>ion channels, porins, and permease carrier proteins</strong>) without expenditure of ATP. Water moves through aquaporins (channel proteins) via osmosis.</li>
          <li><em>Active Transport (Energy-Dependent):</em> When transported <strong>against</strong> their electrochemical gradient (from lower to higher concentration), carrier proteins (pumps) utilize energy derived from the hydrolysis of ATP. A classic example is the <strong>$Na^+/K^+$ ATPase pump</strong> (pumps 3 $Na^+$ out and 2 $K^+$ in per ATP hydrolyzed).</li>
        </ul>
      </li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Neutral solute transport via simple passive diffusion through lipid bilayer down gradient', '1 Mark'],
    ['Clear statement: No, polar molecules cannot diffuse through non-polar lipid core', '1 Mark'],
    ['Facilitated diffusion using transport channel proteins and permeases down gradient', '1 Mark'],
    ['Active transport via ATP-driven carrier pumps against concentration gradient (Na+/K+ pump)', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch8-q7', 'Question 7', 'NCERT Exercise',
  'Name two cell-organelles that are double membrane-bound. What are the characteristics of these two organelles? State their functions and draw labelled diagrams.',
  `<div class="step">
    <strong>Two Double Membrane-Bound Semiautonomous Organelles:</strong><br>
    The two prominent double membrane-bound organelles in eukaryotic cells are: <strong>1. Mitochondria</strong> and <strong>2. Chloroplasts</strong> (Plastids).<br><br>
    <strong>A. Mitochondria ("Powerhouses of the Cell"):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Structural Characteristics:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li><em>Outer membrane:</em> Smooth, continuous, and highly permeable due to porins.</li>
          <li><em>Inner membrane:</em> Thrown into numerous deep convoluted infoldings called <strong>cristae</strong>, which project into the gel-like matrix. The cristae bear millions of racket-shaped oxysomes ($F_0-F_1$ particles / ATP synthases).</li>
          <li><em>Semiautonomous nature:</em> The matrix contains a single circular naked dsDNA molecule, a few RNA molecules, <strong>70S ribosomes</strong>, and enzymes of the Krebs (TCA) cycle.</li>
        </ul>
      </li>
      <li><strong>Function:</strong> Aerobic respiration, $\\beta$-oxidation of fatty acids, and generation of metabolic energy currency (ATP) via oxidative phosphorylation.</li>
    </ul>
    <strong>B. Chloroplasts ("Kitchen of the Plant Cell"):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Structural Characteristics:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Enclosed by two continuous smooth lipid membranes separated by an intermembrane space.</li>
          <li>Internal matrix is called the <strong>stroma</strong>, which contains enzymes for the Calvin cycle (dark reaction, e.g., RuBisCO), circular dsDNA, 70S ribosomes, and starch grains.</li>
          <li>Suspended in the stroma is a membranous system of flattened sacs called <strong>thylakoids</strong> stacked like coins into <strong>grana</strong> (interconnected by stroma lamellae). Thylakoid membranes contain chlorophyll and carotenoids.</li>
        </ul>
      </li>
      <li><strong>Function:</strong> Photosynthesis: light reaction occurs in thylakoid membranes (photolysis of water, ATP &amp; NADPH generation) and dark reaction occurs in stroma (carbon fixation into carbohydrates).</li>
    </ul>
  </div>`,
  '5 Marks',
  [
    ['Identification of Mitochondria and Chloroplasts as double membrane-bound', '1 Mark'],
    ['Structural characteristics of Mitochondria (outer/inner membrane, cristae, matrix, 70S ribosomes, circular DNA)', '1.5 Marks'],
    ['Structural characteristics of Chloroplasts (stroma, thylakoids, grana, stroma lamellae)', '1.5 Marks'],
    ['Precise functions: Cellular ATP generation vs Photosynthetic carbohydrate synthesis', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch8-q8', 'Question 8', 'NCERT Exercise',
  'What are the characteristics of prokaryotic cells?',
  `<div class="step">
    <strong>Hallmark Characteristics of Prokaryotic Cells (e.g., Bacteria, Archaea, BGA, Mycoplasma):</strong><br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>1. Absence of True Nucleus (Incipient Nucleus / Genophore):</strong> Genetic material is not enclosed by a nuclear envelope; it exists as a naked, supercoiled, double-stranded circular DNA molecule called the <strong>nucleoid</strong>. Basic histone proteins are completely absent.</li>
      <li><strong>2. Plasmids:</strong> Many bacteria carry small, extra-chromosomal, self-replicating circular double-stranded DNA rings called <strong>plasmids</strong> that confer unique phenotypes such as antibiotic resistance (R-plasmids) and fertility (F-plasmids).</li>
      <li><strong>3. Absence of Membrane-Bound Organelles:</strong> Completely lack endoplasmic reticulum, Golgi complex, lysosomes, mitochondria, microbodies, and plastids.</li>
      <li><strong>4. 70S Ribosomes:</strong> Protein synthesis is carried out by <strong>70S ribosomes</strong> (composed of 50S and 30S subunits) measuring about 15 nm by 20 nm, often arranged on mRNA as <strong>polysomes (polyribosomes)</strong>.</li>
      <li><strong>5. Complex Cell Envelope:</strong> A three-layered outer boundary consisting of: (i) outer glycocalyx (capsule or slime layer), (ii) middle peptidoglycan cell wall, and (iii) inner plasma membrane.</li>
      <li><strong>6. Mesosomes &amp; Inclusion Bodies:</strong> Cell membrane invaginates to form mesosomes (respiration, DNA replication). Reserve materials are stored in cytoplasm as non-membrane bound <strong>inclusion bodies</strong> (phosphate granules, cyanophycean granules, glycogen granules, gas vacuoles).</li>
      <li><strong>7. Small Size &amp; Rapid Multiplication:</strong> Size typically 1–2 $\\mu m$ (except Mycoplasma &asymp; 0.3 $\\mu m$); divide extremely rapidly by binary fission.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Nucleoid / incipient nucleus lacking nuclear envelope and histones', '1 Mark'],
    ['Presence of 70S ribosomes (polysomes) & lack of membrane-bound organelles', '1 Mark'],
    ['Cell envelope (glycocalyx, peptidoglycan wall, plasma membrane) and mesosomes', '1 Mark'],
    ['Plasmids, inclusion bodies, and rapid binary fission multiplication', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch8-q9', 'Question 9', 'NCERT Exercise',
  'Multicellular organisms have division of labour. Explain.',
  `<div class="step">
    <strong>Scientific Explanation of Division of Labour in Multicellular Organisms:</strong><br><br>
    <strong>1. Contrast with Unicellular Organisms:</strong><br>
    In a unicellular organism (like <em>Amoeba</em>), all biological life activities—ingestion, digestion, cellular respiration, osmoregulation, excretion, locomotion, and reproduction—must be performed by a single cell. This severely limits physiological specialization, body size, and environmental adaptability.<br><br>
    <strong>2. Principle of Division of Labour:</strong><br>
    In multicellular organisms, cells differentiate morphologically and biochemically to form specialized tissues, organs, and organ systems, each allocated specific physiological responsibilities:<br>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Epithelial Tissue:</strong> Forms protective barriers, lines cavities, and controls selective diffusion.</li>
      <li><strong>Muscular Tissue:</strong> Highly specialized contractile actin-myosin fibers produce mechanical movement and locomotion.</li>
      <li><strong>Nervous Tissue:</strong> Excitable neurons conduct rapid electrochemical action potentials for coordination and sensory perception.</li>
      <li><strong>Circulatory System:</strong> Blood and heart coordinate systemic translocation of gases, nutrients, and waste products.</li>
    </ul>
    <strong>3. Intracellular Division of Labour:</strong><br>
    Even at the subcellular level, division of labour is replicated through membrane-bound organelles: mitochondria synthesize ATP, lysosomes digest macromolecules, ribosomes translate proteins, and nucleus directs genomic regulation. This hierarchy maximizes cellular efficiency and organismal longevity.
  </div>`,
  '3 Marks',
  [
    ['Comparison between single-cell constraints and multicellular specialization', '1 Mark'],
    ['Tissue/organ level division of labour (muscle, nerve, vascular, epithelial examples)', '1 Mark'],
    ['Intracellular organelle-level division of labour and overall biological efficiency', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch8-q10', 'Question 10', 'NCERT Exercise',
  'Cell is the basic unit of life. Discuss in brief.',
  `<div class="step">
    <strong>Justification of "Cell is the Basic Structural and Functional Unit of Life":</strong><br><br>
    <strong>1. Structural Autonomy:</strong><br>
    Anything less than a complete, intact cell does not ensure independent living. Sub-cellular components (isolated mitochondria, purified DNA, or organelles) cannot survive or replicate outside the coordinated living protoplasmic environment. The cell is the smallest structural entity that exhibits all attributes of life.<br><br>
    <strong>2. Functional Universality:</strong><br>
    Every vital biochemical process—glycolysis, oxidative phosphorylation, enzymatic catalysis, protein biosynthesis, and DNA replication—takes place exclusively within cellular boundaries.<br><br>
    <strong>3. Continuity of Life:</strong><br>
    Every organism, regardless of its ultimate macroscopic size or complexity (from giant banyan trees to human beings), initiates its life cycle as a <strong>single cell: the fertilized egg (zygote)</strong>. Through repeated rounds of mitotic division and differentiation, the zygote generates the trillions of coordinated cells comprising the mature organism.
  </div>`,
  '3 Marks',
  [
    ['Structural autonomy: sub-cellular entities cannot live independently', '1 Mark'],
    ['Functional universality: all metabolic and biochemical reactions occur within cells', '1 Mark'],
    ['Continuity of life: all multicellular organisms originate from a single-celled zygote', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c11b-ch8-q11', 'Question 11', 'NCERT Exercise',
  'What are nuclear pores? State their function.',
  `<div class="step">
    <strong>Structure of Nuclear Pores:</strong><br>
    The nucleus is enveloped by a double-membraned nuclear envelope (inner and outer membranes separated by a 10–50 nm perinuclear space). At numerous points, the outer and inner membranes fuse together to create circular microscopic apertures called <strong>nuclear pores</strong>, which are embedded with an octagonal macromolecular channel complex called the <strong>Nuclear Pore Complex (NPC)</strong>.<br><br>
    <strong>Biological Functions of Nuclear Pores:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Selective Bidirectional Nucleo-Cytoplasmic Transport:</strong> They act as gatekeepers regulating the traffic of macromolecules between the nucleoplasm and the cytoplasm:
        <ul style="margin:2px 0 4px 15px;">
          <li><em>Export from Nucleus to Cytoplasm:</em> Translocates messenger RNA (mRNA), transfer RNA (tRNA), and assembled ribosomal subunits (rRNA + ribosomal proteins) synthesized inside the nucleolus into the cytoplasm for protein translation.</li>
          <li><em>Import from Cytoplasm to Nucleus:</em> Translocates DNA polymerases, RNA polymerases, histone proteins, ribosomal proteins, and transcription factors synthesized in the cytoplasm into the nucleus.</li>
        </ul>
      </li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Definition: fusion of inner/outer nuclear membranes to form nuclear pore complexes', '1 Mark'],
    ['Function: bidirectional selective transport of RNA/ribosomes out and polymerases/histones in', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c11b-ch8-q12', 'Question 12', 'NCERT Exercise',
  'Both lysosomes and vacuoles are endomembrane structures, yet they differ in terms of their functions. Comment.',
  `<div class="step">
    <strong>Comparative Functional Analysis of Lysosomes and Vacuoles:</strong><br>
    While both lysosomes and vacuoles are single-membrane bound vesicles originating from the endomembrane system (coordinated pathway of ER &rarr; Golgi apparatus &rarr; Lysosomes/Vacuoles), their internal chemical composition and physiological roles diverge sharply:<br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Parameter</th>
            <th style="padding:8px 12px; color:#065f46;">Lysosomes</th>
            <th style="padding:8px 12px; color:#065f46;">Vacuoles (Plant Central Vacuole)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">1. Limiting Membrane</td>
            <td style="padding:8px 12px;">Single unit membrane with proton ($H^+$) pumps.</td>
            <td style="padding:8px 12px;">Single semipermeable membrane called the <strong>tonoplast</strong>.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">2. Internal Content</td>
            <td style="padding:8px 12px;">Rich in ~50 hydrolytic enzymes: <strong>hydrolases, lipases, proteases, carbohydrases, nucleases</strong> active at acidic pH (~4.5–5.0).</td>
            <td style="padding:8px 12px;">Contains <strong>cell sap</strong>: water, excretory products, mineral ions, sugars, and water-soluble pigments (anthocyanins).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">3. Primary Function</td>
            <td style="padding:8px 12px;"><strong>Intracellular digestion:</strong> Digestion of phagocytosed foreign pathogens (heterophagy) and degraded cellular organelles (autophagy / "suicidal bags").</td>
            <td style="padding:8px 12px;"><strong>Osmoregulation &amp; Turgor:</strong> Tonoplast actively pumps ions against concentration gradient into vacuole, maintaining high turgor pressure to keep plant cells rigid and un-wilted.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">4. Specialized Forms</td>
            <td style="padding:8px 12px;">Primary lysosomes, secondary lysosomes, autophagic vacuoles, and residual bodies.</td>
            <td style="padding:8px 12px;">Sap vacuole (plants), <strong>Contractile vacuole</strong> (osmoregulation in <em>Amoeba</em>), and <strong>Food vacuole</strong> (phagocytosis).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '4 Marks',
  [
    ['Lysosome structure and acid hydrolytic enzymes (proteases, lipases, nucleases)', '1.5 Marks'],
    ['Vacuole structure (tonoplast), cell sap content, and turgor pressure maintenance', '1.5 Marks'],
    ['Functional comparison: intracellular digestion/autophagy vs osmoregulation/storage', '1 Mark']
  ]
));

// Q13
questions.push(createQCard(
  'c11b-ch8-q13', 'Question 13', 'NCERT Exercise',
  'Describe the structure of the following with the help of labelled diagrams: (i) Nucleus (ii) Centrosome.',
  `<div class="step">
    <strong>Anatomical Architecture of Nucleus and Centrosome:</strong><br><br>
    <strong>(i) Nucleus (Discovered by Robert Brown, 1831):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Nuclear Envelope:</strong> Two parallel unit membranes separated by a 10–50 nm perinuclear space. The outer membrane is studded with ribosomes and is continuous with the rough endoplasmic reticulum (RER). It is interrupted by octagonal <strong>nuclear pores</strong>.</li>
      <li><strong>Nuclear Matrix (Nucleoplasm / Karyolymph):</strong> Transparent semi-fluid colloidal ground substance containing nucleotides, enzymes (DNA and RNA polymerases), and mineral ions.</li>
      <li><strong>Chromatin (Flemming, 1879):</strong> Entangled network of nucleoprotein fibers composed of DNA, basic histone proteins, non-histone proteins, and RNA, which condenses into distinct chromosomes during cell division.</li>
      <li><strong>Nucleolus:</strong> Dense, non-membrane bound spherical colloidal structure within nucleoplasm that acts as the factory for <strong>ribosomal RNA (rRNA) synthesis</strong> and ribosomal subunit assembly.</li>
    </ul>
    <strong>(ii) Centrosome (Boveri, 1888):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>A non-membrane bound organelle located near the nucleus in animal cells, consisting of two perpendicular cylindrical structures called <strong>centrioles</strong> embedded in an amorphous pericentriolar cloud.</li>
      <li><strong>Cartwheel Microtubular Architecture ($9 + 0$ Pattern):</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Composed of nine evenly spaced peripheral triplets of <strong>tubulin</strong> microtubules arranged in a ring. Central microtubules are absent ($9 + 0$).</li>
          <li>The central proteinaceous rod is called the <strong>hub</strong>, connected to peripheral triplets by radial proteinaceous <strong>spokes</strong> (resembling a cartwheel).</li>
        </ul>
      </li>
      <li><strong>Function:</strong> Forms the basal bodies of cilia and flagella, and organizes the <strong>mitotic spindle apparatus</strong> during animal cell division.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Nucleus: nuclear envelope with pores, nucleoplasm, chromatin, and nucleolus (rRNA factory)', '2 Marks'],
    ['Centrosome: pair of perpendicular centrioles, 9+0 triplet cartwheel architecture, spindle organizer', '2 Marks']
  ]
));

// Q14
questions.push(createQCard(
  'c11b-ch8-q14', 'Question 14', 'NCERT Exercise',
  'What is a centromere? How does the position of centromere form the basis of classification of chromosomes. Support your answer with a diagram showing the position of centromere on different types of chromosomes.',
  `<div class="step">
    <strong>Definition of Centromere:</strong><br>
    The <strong>centromere</strong> (or <strong>primary constriction</strong>) is the clear, non-staining, constricted chromosomal region that holds two sister chromatids together. On its outer lateral surfaces, it bears disc-shaped trilaminar protein plaques called <strong>kinetochores</strong>, to which the spindle fibers attach during mitotic and meiotic anaphase chromosome segregation.<br><br>
    <strong>Classification of Chromosomes Based on the Position of Centromere:</strong><br><br>
    <strong>1. Metacentric Chromosome:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>The centromere is situated exactly in the <strong>middle</strong> of the chromosome, forming two equal arms ($p = q$).</li>
      <li>Appears characteristically <strong>V-shaped</strong> during anaphase movement.</li>
    </ul>
    <strong>2. Sub-Metacentric Chromosome:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>The centromere is located <strong>slightly away from the middle</strong> point, resulting in one slightly shorter arm (called the $p$-arm) and one slightly longer arm (the $q$-arm).</li>
      <li>Appears characteristically <strong>L-shaped</strong> during anaphase movement.</li>
    </ul>
    <strong>3. Acrocentric Chromosome:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>The centromere is situated <strong>close to one end</strong>, producing one extremely short minute arm and one very long arm.</li>
      <li>Appears characteristically <strong>J-shaped</strong> during anaphase movement. Some acrocentrics bear non-staining secondary constrictions carrying terminal knob-like <strong>satellites (SAT chromosomes)</strong>.</li>
    </ul>
    <strong>4. Telocentric Chromosome:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>The centromere is located strictly at the <strong>terminal tip</strong> of the chromosome, having only one visible arm.</li>
      <li>Appears characteristically <strong>i-shaped / rod-shaped</strong> during anaphase movement.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Definition of centromere and role of kinetochores in spindle fiber attachment', '1 Mark'],
    ['Metacentric (median, equal arms, V-shaped) & Sub-metacentric (sub-median, L-shaped)', '1 Mark'],
    ['Acrocentric (sub-terminal, J-shaped, satellite) & Telocentric (terminal, i-shaped)', '1 Mark'],
    ['Diagrammatic representation showing arm ratios and anaphase shapes', '1 Mark']
  ]
));

// Q15
questions.push(createQCard(
  'c11b-ch8-q15', 'Question 15', 'NCERT Exercise',
  'What is a satellite chromosome? What does secondary constriction indicate?',
  `<div class="step">
    <strong>Satellite (SAT) Chromosomes and Secondary Constrictions:</strong><br><br>
    <strong>1. Secondary Constriction:</strong><br>
    While every chromosome possesses a primary constriction (centromere), certain specific chromosomes possess constant, non-staining, narrow chromosomal indentations called <strong>secondary constrictions</strong> at fixed loci.<br>
    These secondary constrictions act as <strong>Nucleolar Organizer Regions (NOR)</strong> because they contain genes encoding 18S, 5.8S, and 28S ribosomal RNAs (rRNA), directing the assembly of the nucleolus during telophase.<br><br>
    <strong>2. Satellite (Trabant):</strong><br>
    The small, rounded, knob-like chromosomal segment located distal to the secondary constriction at the chromosome terminus is called a <strong>satellite</strong>. Chromosomes bearing such satellites are termed <strong>SAT-chromosomes</strong> (e.g., human chromosomes 13, 14, 15, 21, and 22).
  </div>`,
  '2 Marks',
  [
    ['Definition of secondary constriction and identification as Nucleolar Organizer Region (NOR)', '1 Mark'],
    ['Definition of satellite as distal terminal knob and naming of SAT chromosomes', '1 Mark']
  ]
));

// Save Chapter 8
saveChapter(
  8,
  'Cell: The Unit of Life',
  svgCh8,
  'NCERT Textbook Exercise 1 to 15: Cell Theory, Prokaryotes, Fluid Mosaic Membrane, Organelles, Nucleus & Chromosomes',
  questions,
  'Biomolecules'
);
