// scripts/builders/gen-c11b-ch10.js
// Chapter 10: Cell Cycle and Cell Division (All 16 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh10 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
      Eukaryotic Cell Cycle (Interphase &amp; M-Phase) and Meiotic Recombination
    </div>
    <svg viewBox="0 0 850 240" width="100%" height="auto" style="max-height:240px; font-family:'Plus Jakarta Sans',sans-serif;">
      <rect x="10" y="10" width="830" height="220" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      
      <!-- Cell Cycle Wheel on Left -->
      <g transform="translate(30, 20)">
        <text x="180" y="20" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">THE CELL CYCLE PHASES (24 HR DURATION)</text>
        <circle cx="180" cy="115" r="75" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- G1 Sector -->
        <path d="M 180,115 L 180,40 A 75,75 0 0,1 250,90 Z" fill="#ecfdf5" stroke="#10b981"/>
        <text x="215" y="70" font-size="10" font-weight="bold" fill="#065f46">G1 Phase</text>
        <text x="215" y="82" font-size="7" fill="#047857">RNA/Protein synth</text>

        <!-- S Sector -->
        <path d="M 180,115 L 250,90 A 75,75 0 0,1 210,185 Z" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="225" y="140" font-size="10" font-weight="bold" fill="#1e40af">S Phase</text>
        <text x="225" y="152" font-size="7" fill="#1d4ed8">DNA Replication 2C&rarr;4C</text>

        <!-- G2 Sector -->
        <path d="M 180,115 L 210,185 A 75,75 0 0,1 125,165 Z" fill="#fefce8" stroke="#eab308"/>
        <text x="160" y="175" font-size="10" font-weight="bold" fill="#854d0e">G2 Phase</text>

        <!-- M Phase Sector -->
        <path d="M 180,115 L 125,165 A 75,75 0 0,1 180,40 Z" fill="#fee2e2" stroke="#ef4444"/>
        <text x="135" y="80" font-size="10" font-weight="bold" fill="#991b1b">M Phase</text>
        <text x="130" y="92" font-size="6.5" fill="#7f1d1d">P, M, A, T &amp; Cytokinesis</text>

        <!-- G0 Quiescent arrow -->
        <path d="M 235,50 Q 280,30 270,10" stroke="#64748b" stroke-width="1.5" fill="none" marker-end="url(#arrow)"/>
        <text x="290" y="25" font-size="8.5" font-weight="bold" fill="#64748b">G0 Phase (Quiescent)</text>
      </g>

      <!-- Meiosis Prophase I Stages on Right -->
      <g transform="translate(420, 20)">
        <rect x="0" y="0" width="400" height="195" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="200" y="22" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">PROPHASE I OF MEIOSIS &mdash; FIVE CONSECUTIVE SUB-STAGES</text>

        <!-- 5 Sub-stages table -->
        <g transform="translate(15, 35)">
          <rect x="0" y="0" width="370" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="10" y="17" font-size="8.5" font-weight="bold" fill="#2563eb">1. Leptotene:</text>
          <text x="95" y="17" font-size="8" fill="#334155">Chromatin condenses; chromosomes become visible under light microscope.</text>

          <rect x="0" y="30" width="370" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="10" y="47" font-size="8.5" font-weight="bold" fill="#059669">2. Zygotene:</text>
          <text x="95" y="47" font-size="8" fill="#334155">Homologous chromosomes pair (<strong>Synapsis</strong>) forming bivalents / tetrads.</text>

          <rect x="0" y="60" width="370" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="10" y="77" font-size="8.5" font-weight="bold" fill="#ea580c">3. Pachytene:</text>
          <text x="95" y="77" font-size="8" fill="#334155"><strong>Crossing over</strong> mediated by <em>recombinase</em> enzyme at nodules.</text>

          <rect x="0" y="90" width="370" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="10" y="107" font-size="8.5" font-weight="bold" fill="#7c3aed">4. Diplotene:</text>
          <text x="95" y="107" font-size="8" fill="#334155">Synaptonemal complex dissolves; X-shaped <strong>Chiasmata</strong> become visible.</text>

          <rect x="0" y="120" width="370" height="26" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="10" y="137" font-size="8.5" font-weight="bold" fill="#dc2626">5. Diakinesis:</text>
          <text x="95" y="137" font-size="8" fill="#334155"><strong>Terminalisation</strong> of chiasmata; nucleolus &amp; nuclear envelope vanish.</text>
        </g>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch10-q1', 'Question 1', 'NCERT Exercise',
  'What is the average cell cycle span for a mammalian cell?',
  `<div class="step">
    <strong>Average Cell Cycle Duration:</strong><br>
    The average cell cycle duration for a typical proliferating human/mammalian somatic cell in culture is approximately <strong>24 hours</strong>.<br><br>
    <strong>Temporal Distribution Across Phases:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Interphase (>95% of cycle):</strong> Lasts for roughly <strong>23 hours</strong>:
        <ul style="margin:2px 0 4px 15px;">
          <li>$G_1$ Phase (Gap 1): ~8–10 hours</li>
          <li>$S$ Phase (Synthesis): ~6–8 hours</li>
          <li>$G_2$ Phase (Gap 2): ~4–5 hours</li>
        </ul>
      </li>
      <li><strong>M-Phase (Mitosis + Cytokinesis):</strong> The actual dramatic division phase lasts for only <strong>about 1 hour</strong> (&lt;5% of total cell cycle duration).</li>
    </ul>
    <em>Comparative Note: Yeast (Saccharomyces cerevisiae) completes a cell cycle in just 90 minutes.</em>
  </div>`,
  '2 Marks',
  [
    ['Stating 24 hours as the average cell cycle span for a mammalian cell', '1 Mark'],
    ['Breakup: Interphase ~23 hours (>95%) and M-phase ~1 hour (<5%)', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch10-q2', 'Question 2', 'NCERT Exercise',
  'Distinguish cytokinesis from karyokinesis.',
  `<div class="step">
    <strong>Differences Between Karyokinesis and Cytokinesis:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Parameter</th>
            <th style="padding:8px 12px; color:#065f46;">Karyokinesis</th>
            <th style="padding:8px 12px; color:#065f46;">Cytokinesis</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">1. Definition</td>
            <td style="padding:8px 12px;">Division of the cell's <strong>nucleus</strong> into two genetically identical daughter nuclei.</td>
            <td style="padding:8px 12px;">Division of the cell's <strong>cytoplasm</strong>, partitioning organelles into two separate daughter cells.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">2. Timing in Cell Cycle</td>
            <td style="padding:8px 12px;">Precedes cytokinesis (occurs first during M-phase).</td>
            <td style="padding:8px 12px;">Follows karyokinesis (initiates during late anaphase / telophase).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">3. Sequential Stages</td>
            <td style="padding:8px 12px;">Divided into four sequential stages: <strong>Prophase, Metaphase, Anaphase, and Telophase</strong>.</td>
            <td style="padding:8px 12px;">A continuous single mechanical event; no sub-phases.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">4. Mechanism</td>
            <td style="padding:8px 12px;">Involves microtubular spindle apparatus, condensation of chromatin, and sister chromatid segregation.</td>
            <td style="padding:8px 12px;">Occurs via <strong>cleavage furrow</strong> (centripetal in animal cells) or <strong>cell plate formation</strong> via phragmoplast (centrifugal in plant cells).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Definition: nuclear division (karyokinesis) vs cytoplasmic division (cytokinesis)', '1 Mark'],
    ['Order of occurrence and karyokinesis sub-phases (P, M, A, T)', '1 Mark'],
    ['Mechanism: spindle-mediated chromatid separation vs cleavage furrow / cell plate', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch10-q3', 'Question 3', 'NCERT Exercise',
  'Describe the events taking place during interphase.',
  `<div class="step">
    <strong>Key Biochemical &amp; Morphological Events of Interphase ("Resting / Preparation Phase"):</strong><br>
    Interphase is a period of intense metabolic activity during which the cell grows, replicates its genome, and prepares for division. It is subdivided into three successive phases:<br><br>
    <strong>1. $G_1$ Phase (Gap 1 / Post-Mitotic Growth Phase):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>The cell is metabolically exceptionally active and continuously grows in size.</li>
      <li>Intense synthesis of RNA, structural proteins, and enzymes required for DNA replication (DNA polymerases, ligases, tubulin).</li>
      <li>Replication of cellular organelles (mitochondria, ribosomes, endoplasmic reticulum).</li>
      <li><em>DNA content remains constant at 2C; chromosome number remains 2n.</em></li>
    </ul>
    <strong>2. $S$ Phase (Synthesis Phase):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>DNA Replication:</strong> The quantity of nuclear DNA is accurately doubled from <strong>2C to 4C</strong> per cell ($2C \\rightarrow 4C$).</li>
      <li><em>Critical Chromosome Rule:</em> <strong>Chromosome number is not changed</strong>; it remains strictly diploid ($2n$). Each chromosome now consists of two identical sister chromatids joined at a single centromere.</li>
      <li>In animal cells, the <strong>centrosome (centriole pair) duplicates</strong> in the cytoplasm.</li>
    </ul>
    <strong>3. $G_2$ Phase (Gap 2 / Pre-Mitotic Phase):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Proteins essential for the assembly of the mitotic spindle apparatus (such as <strong>tubulin</strong>) are actively synthesized.</li>
      <li>Cell continues to enlarge, synthesize ATP reserves, and checks for DNA replication errors (G2/M DNA damage checkpoint) before entering mitosis.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['G1 phase: intense metabolic growth, RNA/protein synthesis, organelle duplication', '1.5 Marks'],
    ['S phase: DNA doubling from 2C to 4C without changing chromosome number (2n) & centriole duplication', '1.5 Marks'],
    ['G2 phase: tubulin spindle protein synthesis, ATP accumulation, and mitotic readiness', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch10-q4', 'Question 4', 'NCERT Exercise',
  'What is $G_0$ (quiescent phase) of cell cycle?',
  `<div class="step">
    <strong>Scientific Concept of $G_0$ (Quiescent / Resting) Phase:</strong><br><br>
    <strong>1. Definition:</strong><br>
    The <strong>$G_0$ phase</strong> is an inactive, quiescent stage of the cell cycle where cells exit the active proliferative cell cycle at the $G_1$ checkpoint and suspend division, without undergoing cell death.<br><br>
    <strong>2. Metabolic and Proliferative Characteristics:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Cells in $G_0$ remain <strong>metabolically active and functional</strong>, performing their differentiated physiological duties, but they no longer proliferate or replicate DNA unless specifically stimulated.</li>
      <li>They can re-enter the $G_1$ phase and resume active cell division upon receiving appropriate mitogenic signals (growth factors, tissue injury).</li>
    </ul>
    <strong>3. Examples:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><em>Permanent $G_0$:</em> Fully differentiated mature human <strong>heart muscle cells (cardiomyocytes)</strong> and <strong>neurons</strong>, which never divide in adult life.</li>
      <li><em>Facultative / Conditional $G_0$:</em> <strong>Hepatocytes (liver cells)</strong> and fibroblasts remain in $G_0$ under normal conditions, but swiftly enter $G_1$ and proliferate to regenerate tissue following surgical resection or injury.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Definition of G0 as exit from G1 into quiescent non-dividing state', '1 Mark'],
    ['Metabolic status: cells remain fully active and differentiated but cease proliferation', '1 Mark'],
    ['Examples: Permanent (neurons, cardiac cells) vs Reversible (liver cells upon injury)', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch10-q5', 'Question 5', 'NCERT Exercise',
  'Why is mitosis called equational division?',
  `<div class="step">
    <strong>Reason Mitosis is Designated as Equational Division:</strong><br><br>
    <strong>Mitosis</strong> is termed <strong>equational division</strong> because the number of chromosomes, their genetic composition, and their ploidy in the resulting daughter cells remain <strong>strictly equal and identical</strong> to that of the parent cell:<br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li>If a diploid parent cell has 46 chromosomes ($2n = 46$), each of the two daughter cells produced following mitotic division also receives exactly <strong>46 chromosomes ($2n = 46$)</strong>.</li>
      <li><strong>Mechanism of Fidelity:</strong>
        <ol style="margin:2px 0 4px 15px;">
          <li>During the 'S' phase of interphase, the DNA content of each chromosome is duplicated (forming two genetically identical sister chromatids attached at a single centromere).</li>
          <li>During <strong>anaphase</strong> of mitosis, the centromere of each chromosome splits longitudinally, and the two sister chromatids are pulled apart to opposite poles as independent daughter chromosomes.</li>
          <li>Consequently, each daughter nucleus receives an identical, complete set of genetic instructions without any numerical reduction or alteration of alleles (unlike meiosis where chromosome number is halved from $2n$ to $n$).</li>
        </ol>
      </li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Clear statement: chromosome number in daughter cells remains identical to parent cell (2n to 2n)', '1 Mark'],
    ['Mechanism: S-phase replication followed by equational centromere splitting in anaphase', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch10-q6', 'Question 6', 'NCERT Exercise',
  'Name the stage of cell cycle at which one of the following events occur:<br>(i) Chromosomes are moved to spindle equator.<br>(ii) Centromere splits and chromatids separate.<br>(iii) Pairing between homologous chromosomes takes place.<br>(iv) Crossing over between homologous chromosomes takes place.',
  `<div class="step">
    <strong>Accurate Identification of Stages:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Event</th>
            <th style="padding:8px 12px; color:#065f46;">Exact Stage of Cell Division</th>
            <th style="padding:8px 12px; color:#065f46;">Biochemical / Cellular Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(i) Chromosomes moved to spindle equator</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Metaphase (of Mitosis / Metaphase I or II)</td>
            <td style="padding:8px 12px;">Kinetochore spindle microtubules pull chromosomes into alignment along the metaphase plate (congression).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(ii) Centromere splits and chromatids separate</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Anaphase (of Mitosis) / Anaphase II (of Meiosis)</td>
            <td style="padding:8px 12px;">Cohesin cleavage causes simultaneous centromeric division; sister chromatids migrate to opposite poles.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(iii) Pairing between homologous chromosomes</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Zygotene (Sub-stage of Prophase I of Meiosis)</td>
            <td style="padding:8px 12px;"><strong>Synapsis</strong> occurs via assembly of the proteinaceous synaptonemal complex, forming bivalents.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">(iv) Crossing over between homologous chromosomes</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Pachytene (Sub-stage of Prophase I of Meiosis)</td>
            <td style="padding:8px 12px;">Enzyme <strong>recombinase</strong> catalyzes reciprocal non-sister chromatid exchange at recombination nodules.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '4 Marks',
  [
    ['(i) Metaphase', '1 Mark'],
    ['(ii) Anaphase (Mitosis) / Anaphase II (Meiosis)', '1 Mark'],
    ['(iii) Zygotene of Prophase I', '1 Mark'],
    ['(iv) Pachytene of Prophase I', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch7-q7', 'Question 7', 'NCERT Exercise',
  'Describe the following: (a) synapsis (b) bivalent (c) chiasmata. Draw a diagram to illustrate your answer.',
  `<div class="step">
    <strong>Botanical &amp; Cytological Definitions of Meiotic Phenomena:</strong><br><br>
    <strong>(a) Synapsis:</strong><br>
    The intimate, highly specific, longitudinal point-by-point pairing of maternal and paternal homologous chromosomes during the <strong>zygotene</strong> sub-stage of Prophase I of meiosis. It is mediated by the assembly of a tripartite proteinaceous ladder-like framework called the <strong>synaptonemal complex</strong>.<br><br>
    <strong>(b) Bivalent (or Tetrad):</strong><br>
    The complex formed by a pair of synapsed homologous chromosomes. Since it consists of two distinct paired chromosomes, it is called a <strong>bivalent</strong>; because each chromosome has already duplicated into two chromatids, the pair exhibits four chromatids, termed a <strong>tetrad</strong> (clearly visible in pachytene).<br><br>
    <strong>(c) Chiasmata:</strong><br>
    The distinct <strong>X-shaped points of physical attachment</strong> between non-sister chromatids of homologous chromosomes, first visible during the <strong>diplotene</strong> stage when the synaptonemal complex dissolves and paired homologues begin to repel each other. Chiasmata represent the physical cytological sites where previous genetic <strong>crossing over</strong> occurred in pachytene.
  </div>`,
  '3 Marks',
  [
    ['Synapsis: homologous pairing via synaptonemal complex in zygotene', '1 Mark'],
    ['Bivalent / Tetrad: pair of synapsed chromosomes showing 4 chromatids', '1 Mark'],
    ['Chiasmata: X-shaped sites of crossing over visible in diplotene', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch10-q8', 'Question 8', 'NCERT Exercise',
  'How does cytokinesis in plant cells differ from that in animal cells?',
  `<div class="step">
    <strong>Differences Between Cytokinesis in Plant Cells and Animal Cells:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Parameter</th>
            <th style="padding:8px 12px; color:#065f46;">Cytokinesis in Plant Cells</th>
            <th style="padding:8px 12px; color:#065f46;">Cytokinesis in Animal Cells</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">1. Mechanism of Division</td>
            <td style="padding:8px 12px;">Occurs by <strong>Cell Plate formation</strong>.</td>
            <td style="padding:8px 12px;">Occurs by <strong>Cleavage Furrow</strong> constriction.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">2. Direction of Progression</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:700;"><strong>Centrifugal:</strong> Starts at the center of the cell and grows outward towards the lateral parent cell walls.</td>
            <td style="padding:8px 12px; color:#2563eb; font-weight:700;"><strong>Centripetal:</strong> Initiates at the plasma membrane periphery as a shallow furrow and deepens inwards toward the center.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">3. Structural Role</td>
            <td style="padding:8px 12px;">Golgi-derived vesicles and spindle remnants coalesce at the equator to form a <strong>phragmoplast</strong>, which matures into the calcium pectate <strong>middle lamella</strong>.</td>
            <td style="padding:8px 12px;">A contractile ring composed of <strong>actin and myosin microfilaments</strong> constricts beneath the plasma membrane to pinch the cell in two.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">4. Influence of Cell Wall</td>
            <td style="padding:8px 12px;">Necessitated by the presence of a rigid, inextensible outer cellulosic cell wall that cannot invaginate.</td>
            <td style="padding:8px 12px;">Facilitated by the flexible, elastic outer plasma membrane (cell wall is absent).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Plant: Cell plate method, centrifugal direction, phragmoplast/middle lamella', '1.5 Marks'],
    ['Animal: Cleavage furrow, centripetal direction, contractile actin ring', '1.5 Marks']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch10-q9', 'Question 9', 'NCERT Exercise',
  'Find examples where the four stages of mitosis are suitable for observation.',
  `<div class="step">
    <strong>Ideal Biological Materials for Observing the Four Stages of Mitosis:</strong><br><br>
    <strong>1. Onion Root Tip Meristem (<em>Allium cepa</em>):</strong><br>
    The classic, most universally used material in school and university laboratories for observing all four stages of mitosis because:
    <ul style="margin:4px 0 6px 20px;">
      <li>Cells in the sub-apical growing zone are actively dividing with no chloroplasts to obstruct vision.</li>
      <li>Chromosomes are large, distinct, relatively few in number ($2n = 16$), and stain intensely with acetocarmine or Feulgen reagent.</li>
    </ul>
    <strong>2. Stage-Specific Optimal Observational Markers:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Prophase:</strong> Observable in root tip squashes: chromatin condenses into distinct entangled threads; nucleolus disappears.</li>
      <li><strong>Metaphase:</strong> Best observed in root tips treated briefly with <em>colchicine</em> (arrests spindle assembly). Chromosomes are most condensed, shortest, thickest, and aligned at the equatorial plate &mdash; <strong>ideal for karyotyping, morphology, and counting chromosome number</strong>.</li>
      <li><strong>Anaphase:</strong> Clearly displays centromere splitting and the characteristic V, L, J, or i shapes of migrating chromatids.</li>
      <li><strong>Telophase &amp; Cytokinesis:</strong> Observable in growing shoot/root tips showing cell plate formation by phragmoplast.</li>
    </ul>
    <strong>3. Other Examples:</strong> Shoot apical meristems, bone marrow aspirates in animals, and blastula stages of fish/frog embryos.
  </div>`,
  '2 Marks',
  [
    ['Naming Onion root tip (Allium cepa) as the prime biological material', '1 Mark'],
    ['Suitability of metaphase for counting/morphology & anaphase for centromere shape observation', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch10-q10', 'Question 10', 'NCERT Exercise',
  'Can there be mitosis without DNA replication in \'S\' phase?',
  `<div class="step">
    <strong>Answer: No, normal mitosis cannot occur without DNA replication in the 'S' phase.</strong><br><br>
    <strong>Biological &amp; Genetic Justification:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li>The fundamental evolutionary mandate of mitosis is <strong>equational division</strong>: to deliver a complete, uncompromised, identical complement of genetic information to both daughter cells.</li>
      <li>DNA replication during the 'S' phase creates two identical sister chromatids per chromosome ($2C \\rightarrow 4C$).</li>
      <li>If a cell skipped the S phase and attempted mitosis with unreplicated DNA ($2C$), when centromeres split in anaphase, each daughter cell would receive only an incomplete, fragmented half-set of genetic material ($1C$). Such cells would suffer massive gene deletions, aneuploidy, and instantaneous cell death.</li>
      <li>Stringent biochemical cell cycle surveillance mechanisms (the <strong>$G_2/M$ DNA replication checkpoint</strong>) detect un-replicated DNA and activate checkpoint kinases ($ATM/ATR, Chk1$) to inhibit Cyclin B-CDK1 (MPF), halting the cell cycle and preventing entry into mitosis until replication is 100% complete.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Clear answer: No, normal mitosis cannot occur without S-phase DNA replication', '1 Mark'],
    ['Explanation of severe genetic loss / aneuploidy & G2/M checkpoint block', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c11b-ch10-q11', 'Question 11', 'NCERT Exercise',
  'Can there be DNA replication without cell division?',
  `<div class="step">
    <strong>Answer: Yes, DNA replication can occur without subsequent cell division.</strong><br><br>
    <strong>Biological Phenomena and Examples:</strong><br><br>
    <strong>1. Endomitosis / Endoreduplication:</strong><br>
    A phenomenon where chromosomes repeatedly replicate and duplicate their DNA content within the nucleus without undergoing nuclear membrane breakdown or cell division. This leads to <strong>polyploidy</strong> (multiple sets of chromosomes, e.g., $4n, 8n, 16n$).
    <ul style="margin:4px 0 6px 20px;">
      <li><em>Examples:</em> Tapetal nutritive cells in angiosperm anthers, human liver cells (hepatocytes), and bone marrow megakaryocytes (can reach up to $64n$).</li>
    </ul>
    <strong>2. Polytene Chromosomes (Giant Salivary Gland Chromosomes):</strong><br>
    In the salivary glands of dipteran flies (such as <em>Drosophila melanogaster</em> and <em>Chironomus</em>), DNA replicates up to 10 rounds (1,024 strands) without chromatid separation or cell division, forming colossal banded <strong>polytene chromosomes</strong>.
  </div>`,
  '2 Marks',
  [
    ['Affirmative answer: Yes, DNA replication can occur without division', '1 Mark'],
    ['Explanation of endoreduplication/polyploidy with examples (tapetum, hepatocytes, polytene chromosomes)', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c11b-ch10-q12', 'Question 12', 'NCERT Exercise',
  'Analyse the events of prophase I of meiosis.',
  `<div class="step">
    <strong>In-Depth Analysis of Prophase I of Meiosis I:</strong><br>
    Prophase I is exceptionally prolonged, intricate, and crucial because it is the phase where homologous genetic recombination occurs. It is divided into five consecutive sub-stages:<br><br>
    <strong>1. Leptotene (Thin-Thread Stage):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Chromatin fibers progressively condense and coil into long, slender, visible chromosomes.</li>
      <li>Chromosomes often orient their telomeres towards one side of the nuclear envelope in a "bouquet" arrangement.</li>
    </ul>
    <strong>2. Zygotene (Paired-Thread Stage):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Homologous chromosomes (one paternal, one maternal) recognize each other and pair point-for-point in an event called <strong>synapsis</strong>.</li>
      <li>Stabilized by the formation of a proteinaceous ribonucleoprotein structure called the <strong>synaptonemal complex</strong>.</li>
      <li>The paired complex is called a <strong>bivalent</strong>.</li>
    </ul>
    <strong>3. Pachytene (Thick-Thread Stage):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Bivalents are clearly visible as four-chromatid <strong>tetrads</strong>.</li>
      <li><strong>Crossing Over:</strong> Non-sister chromatids of homologous chromosomes exchange genetic segments at <strong>recombination nodules</strong>. The reaction is enzyme-mediated, catalyzed by <strong>recombinase</strong>. Produces novel genetic variations.</li>
    </ul>
    <strong>4. Diplotene (Two-Thread Stage):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>The synaptonemal complex undergoes dissolution. Paired homologous chromosomes repel each other, except at points of crossing over.</li>
      <li>These persistent X-shaped crossing-over junction points are called <strong>chiasmata</strong>. <em>(Can remain arrested for years, e.g., in human oocytes as dictyotene).</em></li>
    </ul>
    <strong>5. Diakinesis (Moving-Apart Stage):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Marked by <strong>terminalisation of chiasmata</strong> (chiasmata shift toward chromosome tips like a zipper).</li>
      <li>Meiotic spindle begins to assemble; nucleolus completely disappears, and the nuclear envelope disintegrates.</li>
    </ul>
  </div>`,
  '5 Marks',
  [
    ['1. Leptotene: chromosome condensation and bouquet formation', '1 Mark'],
    ['2. Zygotene: synapsis, synaptonemal complex, bivalent formation', '1 Mark'],
    ['3. Pachytene: tetrads, crossing over at recombination nodules with recombinase', '1 Mark'],
    ['4. Diplotene: dissolution of complex, appearance of X-shaped chiasmata', '1 Mark'],
    ['5. Diakinesis: terminalisation of chiasmata, loss of nucleolus and nuclear envelope', '1 Mark']
  ]
));

// Q13
questions.push(createQCard(
  'c11b-ch10-q13', 'Question 13', 'NCERT Exercise',
  'Discuss with your teacher: (a) haploid insects and lower plants where cell division occurs (b) some haploid cells in higher plants where cell division occurs.',
  `<div class="step">
    <strong>(a) Haploid Insects and Lower Plants Where Cell Division Occurs:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Male Honeybees (Drones) &mdash; Arrhenotoky:</strong> In the honeybee (<em>Apis mellifera</em>), males are haploid ($n = 16$). They develop parthenogenetically from unfertilized eggs. All their somatic tissues grow by mitosis. Drones produce sperm by specialized mitosis (without meiosis).</li>
      <li><strong>Lower Plants (Algae &amp; Bryophytes):</strong> The entire dominant, vegetative, multi-cellular plant body of algae (e.g., <em>Volvox</em>, <em>Spirogyra</em>) and bryophytes (e.g., <em>Marchantia</em>, <em>Funaria</em>) is <strong>haploid ($n$)</strong>. It undergoes millions of mitotic cell divisions to produce haploid leafy shoots and gametes.</li>
    </ul>
    <strong>(b) Haploid Cells in Higher Plants (Gymnosperms &amp; Angiosperms) Where Cell Division Occurs:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Pollen Grain (Microgametophyte):</strong> The haploid microspore ($n$) divides mitotically into a vegetative cell and a generative cell. The generative cell further undergoes mitosis to yield <strong>two haploid male gametes</strong>.</li>
      <li><strong>Embryo Sac (Female Gametophyte):</strong> The functional haploid megaspore ($n$) undergoes three successive rounds of <strong>free nuclear mitotic divisions</strong> to form the 8-nucleate, 7-celled female gametophyte (egg cell, synergids, antipodals).</li>
      <li><strong>Gymnosperm Endosperm:</strong> Arises directly from mitotic division of the haploid megaspore prior to fertilization (haploid endosperm).</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(a) Male honeybees (drones) and haploid gametophytes of algae/bryophytes', '1.5 Marks'],
    ['(b) Higher plants: pollen generative cell mitosis and functional megaspore mitosis (embryo sac)', '1.5 Marks']
  ]
));

// Q14
questions.push(createQCard(
  'c11b-ch10-q14', 'Question 14', 'NCERT Exercise',
  'Can there be mitosis without cell division? What would be the consequence?',
  `<div class="step">
    <strong>Answer: Yes, karyokinesis (nuclear division) can occur repeatedly without being accompanied by cytokinesis (cell division).</strong><br><br>
    <strong>Biological Consequence:</strong><br>
    The failure of cytokinesis following nuclear division results in the formation of a multinucleate mass of protoplasm called a <strong>syncytium</strong> (in animals) or a <strong>coenocyte</strong> (in plants and fungi).<br><br>
    <strong>Classic Biological Examples:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Liquid Endosperm of Coconut:</strong> The primary endosperm nucleus undergoes hundreds of successive free nuclear mitotic divisions without cytokinesis, creating the milky fluid consisting of thousands of free nuclei (liquid coconut water).</li>
      <li><strong>Slime Molds (Myxomycetes):</strong> During the vegetative phase, plasmodium forms a large, creeping, multinucleate mass of protoplasm.</li>
      <li><strong>Skeletal Muscle Fibres:</strong> Multinucleate syncytial fibers formed by cell fusion.</li>
      <li><strong>Coenocytic Fungi &amp; Algae:</strong> <em>Rhizopus</em> (Phycomycetes) and <em>Vaucheria</em> possess continuous tubular hyphae filled with multinucleate cytoplasm.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Affirmative confirmation: karyokinesis without cytokinesis is common', '1 Mark'],
    ['Consequence: formation of multinucleate condition (syncytium / coenocyte)', '1 Mark'],
    ['Classic examples: liquid endosperm of coconut, slime molds, skeletal muscle', '1 Mark']
  ]
));

// Q15
questions.push(createQCard(
  'c11b-ch10-q15', 'Question 15', 'NCERT Exercise',
  'What is the significance of meiosis?',
  `<div class="step">
    <strong>Evolutionary and Biological Significance of Meiosis:</strong><br><br>
    <strong>1. Maintenance of Species Chromosome Number (Conservation of Karyotype):</strong><br>
    Meiosis reduces the chromosome number by half from diploid ($2n$) to haploid ($n$) during gametogenesis in sexually reproducing organisms. When two haploid gametes fuse during fertilization (syngamy: $n + n = 2n$), the species-specific diploid chromosome number is precisely restored across generations, preventing doubling of chromosome numbers.<br><br>
    <strong>2. Generation of Genetic Diversity and Variations:</strong><br>
    Meiosis is the primary engine of genetic novelty through two distinct mechanisms:
    <ul style="margin:2px 0 4px 15px;">
      <li><em>Crossing Over (Pachytene of Prophase I):</em> Physical exchange of non-sister chromatid segments breaks linkages and creates recombinant allele combinations.</li>
      <li><em>Independent Assortment (Metaphase / Anaphase I):</em> Random orientation and maternal/paternal segregation of bivalents at the equator yields $2^n$ unique gametic combinations ($2^{23} \\approx 8.4$ million combinations in humans).</li>
    </ul>
    <strong>3. Raw Material for Natural Selection and Organic Evolution:</strong><br>
    The unique genetic combinations generated by meiosis confer phenotypic variability, enabling populations to adapt to fluctuating environments and providing the raw material upon which natural selection acts.
  </div>`,
  '3 Marks',
  [
    ['Conservation of species-specific chromosome number across generations via gametic halving', '1 Mark'],
    ['Creation of genetic diversity via crossing over and independent assortment', '1 Mark'],
    ['Role of variations in natural selection and organic evolution', '1 Mark']
  ]
));

// Q16
questions.push(createQCard(
  'c11b-ch10-q16', 'Question 16', 'NCERT Exercise',
  'Name the stage of meiosis in which:<br>(i) Homologous chromosomes separate while sister chromatids remain associated at their centromeres.<br>(ii) Sister chromatids separate.<br>(iii) Synapsis occurs.<br>(iv) Chiasmata become visible.',
  `<div class="step">
    <strong>Exact Stages of Meiosis:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Biological Event</th>
            <th style="padding:8px 12px; color:#065f46;">Specific Stage of Meiosis</th>
            <th style="padding:8px 12px; color:#065f46;">Cytological Hallmark</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(i) Homologous chromosomes separate while sister chromatids remain attached</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Anaphase I</td>
            <td style="padding:8px 12px;">Disjunction of bivalents occurs; centromeres do NOT split.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(ii) Sister chromatids separate</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Anaphase II</td>
            <td style="padding:8px 12px;">Centromeres split; sister chromatids move to opposite poles as individual chromosomes.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(iii) Synapsis occurs</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Zygotene (Prophase I)</td>
            <td style="padding:8px 12px;">Pairing of homologous chromosomes via the synaptonemal complex.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">(iv) Chiasmata become visible</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Diplotene (Prophase I)</td>
            <td style="padding:8px 12px;">X-shaped crossovers appear as the synaptonemal complex dissolves.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '4 Marks',
  [
    ['(i) Anaphase I', '1 Mark'],
    ['(ii) Anaphase II', '1 Mark'],
    ['(iii) Zygotene of Prophase I', '1 Mark'],
    ['(iv) Diplotene of Prophase I', '1 Mark']
  ]
));

// Save Chapter 10
saveChapter(
  10,
  'Cell Cycle and Cell Division',
  svgCh10,
  'NCERT Textbook Exercise 1 to 16: Interphase, Mitosis, Meiosis I & II, Crossing Over, Chiasmata & Syncytium',
  questions,
  'Photosynthesis in Higher Plants'
);
