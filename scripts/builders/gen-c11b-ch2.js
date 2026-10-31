// scripts/builders/gen-c11b-ch2.js
// Chapter 2: Biological Classification (All 12 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh2 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      Whittaker's Five Kingdom Classification &amp; Viral Architecture
    </div>
    <svg viewBox="0 0 850 260" width="100%" height="auto" style="max-height:260px; font-family:'Plus Jakarta Sans',sans-serif;">
      <!-- Five Kingdom Overview -->
      <rect x="10" y="10" width="480" height="240" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="250" y="32" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">R.H. WHITTAKER'S FIVE KINGDOM SCHEME (1969)</text>
      
      <!-- Monera -->
      <rect x="25" y="48" width="80" height="85" rx="6" fill="#fef2f2" stroke="#f87171"/>
      <text x="65" y="68" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">MONERA</text>
      <text x="65" y="86" font-size="7.5" fill="#7f1d1d" text-anchor="middle">Prokaryotic</text>
      <text x="65" y="100" font-size="7.5" fill="#7f1d1d" text-anchor="middle">Unicellular</text>
      <text x="65" y="114" font-size="7.5" fill="#7f1d1d" text-anchor="middle">Bacteria</text>

      <!-- Protista -->
      <rect x="115" y="48" width="80" height="85" rx="6" fill="#fffbeb" stroke="#fcd34d"/>
      <text x="155" y="68" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">PROTISTA</text>
      <text x="155" y="86" font-size="7.5" fill="#78350f" text-anchor="middle">Eukaryotic</text>
      <text x="155" y="100" font-size="7.5" fill="#78350f" text-anchor="middle">Unicellular</text>
      <text x="155" y="114" font-size="7.5" fill="#78350f" text-anchor="middle">Amoeba/Algae</text>

      <!-- Fungi -->
      <rect x="205" y="48" width="80" height="85" rx="6" fill="#f5f3ff" stroke="#c4b5fd"/>
      <text x="245" y="68" font-size="10" font-weight="bold" fill="#5b21b6" text-anchor="middle">FUNGI</text>
      <text x="245" y="86" font-size="7.5" fill="#4c1d95" text-anchor="middle">Eukaryotic</text>
      <text x="245" y="100" font-size="7.5" fill="#4c1d95" text-anchor="middle">Chitin Wall</text>
      <text x="245" y="114" font-size="7.5" fill="#4c1d95" text-anchor="middle">Heterotrophic</text>

      <!-- Plantae -->
      <rect x="295" y="48" width="85" height="85" rx="6" fill="#ecfdf5" stroke="#6ee7b7"/>
      <text x="337" y="68" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">PLANTAE</text>
      <text x="337" y="86" font-size="7.5" fill="#064e3b" text-anchor="middle">Eukaryotic</text>
      <text x="337" y="100" font-size="7.5" fill="#064e3b" text-anchor="middle">Cellulose Wall</text>
      <text x="337" y="114" font-size="7.5" fill="#064e3b" text-anchor="middle">Autotrophic</text>

      <!-- Animalia -->
      <rect x="390" y="48" width="88" height="85" rx="6" fill="#eff6ff" stroke="#93c5fd"/>
      <text x="434" y="68" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">ANIMALIA</text>
      <text x="434" y="86" font-size="7.5" fill="#1e3a8a" text-anchor="middle">Eukaryotic</text>
      <text x="434" y="100" font-size="7.5" fill="#1e3a8a" text-anchor="middle">No Cell Wall</text>
      <text x="434" y="114" font-size="7.5" fill="#1e3a8a" text-anchor="middle">Holozoic</text>

      <!-- Five Criteria Banner -->
      <rect x="25" y="148" width="453" height="88" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="35" y="166" font-size="9" font-weight="bold" fill="#334155">Primary Criteria Used by R.H. Whittaker:</text>
      <text x="35" y="184" font-size="8.5" fill="#475569">1. <strong>Cell Complexity:</strong> Prokaryotic vs. Eukaryotic organization</text>
      <text x="35" y="198" font-size="8.5" fill="#475569">2. <strong>Body Complexity:</strong> Unicellular vs. Multicellular / Tissue level</text>
      <text x="35" y="212" font-size="8.5" fill="#475569">3. <strong>Mode of Nutrition:</strong> Phototrophic vs. Absorptive (Saprotrophic) vs. Ingestive (Holozoic)</text>
      <text x="35" y="226" font-size="8.5" fill="#475569">4. <strong>Reproduction &amp; Phylogeny:</strong> Evolutionary relationships &amp; lineage descent</text>

      <!-- Bacteriophage Diagram on Right -->
      <rect x="510" y="10" width="330" height="240" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="675" y="32" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">T4 BACTERIOPHAGE STRUCTURE</text>
      
      <!-- Head / Capsid -->
      <polygon points="675,45 710,65 710,105 675,125 640,105 640,65" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="675" y="85" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Icosahedral</text>
      <text x="675" y="97" font-size="7.5" fill="#1e40af" text-anchor="middle">Head (dsDNA)</text>

      <!-- Collar & Sheath -->
      <rect x="668" y="125" width="14" height="12" fill="#64748b"/>
      <rect x="669" y="137" width="12" height="55" fill="#cbd5e1" stroke="#475569" stroke-width="1"/>
      <!-- Baseplate & Tail Fibers -->
      <polygon points="660,192 690,192 685,200 665,200" fill="#334155"/>
      <!-- Tail fibers -->
      <path d="M 665,198 L 640,215 L 630,235" stroke="#1e293b" stroke-width="1.5" fill="none"/>
      <path d="M 670,198 L 655,220 L 648,238" stroke="#1e293b" stroke-width="1.5" fill="none"/>
      <path d="M 680,198 L 695,220 L 702,238" stroke="#1e293b" stroke-width="1.5" fill="none"/>
      <path d="M 685,198 L 710,215 L 720,235" stroke="#1e293b" stroke-width="1.5" fill="none"/>

      <!-- Annotations -->
      <text x="730" y="80" font-size="8" font-weight="bold" fill="#2563eb">← Capsid (Protein Coat)</text>
      <text x="730" y="92" font-size="7" fill="#64748b">Capsomeres protect viral genome</text>
      <text x="730" y="145" font-size="8" font-weight="bold" fill="#334155">← Contractile Sheath</text>
      <text x="730" y="198" font-size="8" font-weight="bold" fill="#334155">← Tail Fibres (Host Adsorption)</text>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch2-q1', 'Question 1', 'NCERT Exercise',
  'Discuss how classification systems have undergone several changes over a period of time.',
  `<div class="step">
    <strong>Chronological Evolution of Classification Systems:</strong><br>
    Over centuries, biological classification has evolved progressively from simplistic utilitarian schemes to phylogenetically grounded molecular frameworks:<br><br>
    <strong>1. Two-Kingdom Classification (Carolus Linnaeus):</strong><br>
    Linnaeus grouped all known organisms into two kingdoms: <strong>Plantae</strong> and <strong>Animalia</strong>. While simple, it suffered from severe limitations:
    <ul style="margin:6px 0 10px 20px;">
      <li>It did not distinguish between eukaryotes and prokaryotes (bacteria and cyanobacteria were placed under Plantae).</li>
      <li>It grouped unicellular organisms (e.g., <em>Chlamydomonas</em>, <em>Amoeba</em>) with complex multicellular organisms (e.g., spirogyra, metazoans).</li>
      <li>It failed to separate photosynthetic organisms (green plants) from heterotrophic, absorptive non-photosynthetic organisms (fungi).</li>
    </ul>
    <strong>2. Three-Kingdom Classification (Ernst Haeckel, 1866):</strong><br>
    Haeckel separated unicellular microscopic organisms lacking tissue differentiation into Kingdom <strong>Protista</strong>, leaving multicellular plants in Plantae and multicellular animals in Animalia.<br><br>
    <strong>3. Four-Kingdom Classification (Herbert Copeland, 1956):</strong><br>
    Copeland created Kingdom <strong>Monera</strong> to house all prokaryotic organisms (lacking nuclear membranes and membrane-bound organelles), distinguishing them from eukaryotic Protista.<br><br>
    <strong>4. Five-Kingdom Classification (R.H. Whittaker, 1969):</strong><br>
    Whittaker resolved the ambiguity of fungi by creating Kingdom <strong>Fungi</strong> based on chitinous cell walls and saprotrophic absorptive nutrition. His five criteria were: (i) Cell structure (prokaryotic vs. eukaryotic), (ii) Thallus / body organisation, (iii) Mode of nutrition, (iv) Reproduction, and (v) Phylogenetic relationships.<br><br>
    <strong>5. Three-Domain System (Carl Woese, 1990):</strong><br>
    Divided Monera into two distinct domains: <strong>Archaea</strong> and <strong>Bacteria</strong>, based on 16S rRNA gene sequencing and unique cell membrane lipid architecture, placing all eukaryotes in Domain <strong>Eukarya</strong>.
  </div>`,
  '4 Marks',
  [
    ['Explanation of Linnaeus 2-kingdom system & its three major defects', '1 Mark'],
    ['Contribution of Haeckel (Protista) and Copeland (Monera)', '1 Mark'],
    ['Detailed account of Whittaker’s 5-Kingdom system & 5 classification criteria', '1.5 Marks'],
    ['Reference to Woese’s 3-Domain system based on 16S rRNA', '0.5 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch2-q2', 'Question 2', 'NCERT Exercise',
  'State two economically important uses of: (a) heterotrophic bacteria (b) archaebacteria.',
  `<div class="step">
    <strong>(a) Two Economically Important Uses of Heterotrophic Bacteria:</strong><br>
    Heterotrophic bacteria are the most abundant decomposers in nature and have extensive industrial and agricultural utility:
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Dairy &amp; Fermentation Industry:</strong> <em>Lactobacillus</em> (Lactic Acid Bacteria / LAB) ferment lactose into lactic acid, causing curdling of milk to form curd, yoghurt, and cheese.</li>
      <li><strong>Production of Antibiotics &amp; Nitrogen Fixation:</strong> Species of <em>Streptomyces</em> synthesize vital clinical antibiotics (e.g., streptomycin, tetracycline), while symbiotic bacteria like <em>Rhizobium leguminosarum</em> fix atmospheric nitrogen in legume root nodules, enriching soil fertility.</li>
    </ul>
    <strong>(b) Two Economically Important Uses of Archaebacteria:</strong><br>
    Archaebacteria thrive under extreme environmental niches due to their unique branched branched-chain ether-linked pseudomurein walls:
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Biogas (Methane) Production:</strong> <em>Methanogens</em> (e.g., <em>Methanobacterium</em>) present in the anaerobic rumen of ruminant animals (cows, buffaloes) ferment cellulosic plant matter, generating biogas (methane) from animal dung (gobar gas plants).</li>
      <li><strong>Thermostable Enzymes in Biotechnology:</strong> <em>Thermus aquaticus</em> (a thermophilic bacterium closely allied with extreme conditions) provides <strong>Taq DNA polymerase</strong>, an enzyme capable of retaining catalytic fidelity at 95&deg;C during automated Polymerase Chain Reaction (PCR) DNA amplification.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Two valid commercial/ecological uses of heterotrophic bacteria (curd/antibiotics/N2 fixation)', '1 Mark'],
    ['Two valid uses of archaebacteria (methane/biogas generation from dung + Taq polymerase / biotechnology)', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch2-q3', 'Question 3', 'NCERT Exercise',
  'What is the nature of cell-walls in diatoms?',
  `<div class="step">
    <strong>Distinctive Nature and Structural Composition of Diatom Cell Walls:</strong><br>
    Diatoms (Chrysophytes) possess a uniquely engineered cell wall structure known as a <strong>frustule</strong>:
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Two Overlapping Halves (Soap-Box Architecture):</strong> The cell wall forms two thin, overlapping shells that fit tightly together like the lid and base of a soapbox. The upper outer valve is termed the <strong>epitheca</strong>, and the smaller lower valve is termed the <strong>hypotheca</strong>.</li>
      <li><strong>Silica Impregnation (Indestructible Nature):</strong> The walls are heavily embedded with hydrated amorphous silica ($SiO_2 \\cdot nH_2O$). Because silica is chemically inert and highly resistant to acids and enzymatic degradation, diatom cell walls are virtually indestructible.</li>
      <li><strong>Formation of Diatomaceous Earth (Kieselguhr):</strong> When diatoms die, their organic protoplasm decomposes, but their siliceous frustules deposit on ocean beds over millions of years, forming enormous geologic deposits called <strong>diatomaceous earth</strong>.</li>
      <li><strong>Economic Applications:</strong> Being gritty and porous, diatomaceous earth is extensively utilized in filtration of oils, syrups, and antibiotic broths, polishing metals, and manufacturing sound-proof heat insulators.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Description of overlapping valves (epitheca and hypotheca) fitting like a soapbox', '1 Mark'],
    ['Impregnation with silica and indestructible nature of frustules', '1 Mark'],
    ['Formation of diatomaceous earth and industrial uses (filtration and polishing)', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch2-q4', 'Question 4', 'NCERT Exercise',
  'Find out what do the terms \'algal bloom\' and \'red-tides\' signify.',
  `<div class="step">
    <strong>1. Algal Bloom:</strong><br>
    An <strong>algal bloom</strong> is the rapid, explosive proliferation and excessive accumulation of microscopic phytoplankton—predominantly cyanobacteria (blue-green algae like <em>Microcystis</em>, <em>Anabaena</em>, <em>Oscillatoria</em>) and green algae—in nutrient-enriched water bodies (eutrophic lakes and slow-moving rivers).
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Cause:</strong> High concentration of agricultural runoff containing nitrates and phosphates (cultural eutrophication).</li>
      <li><strong>Consequences:</strong> The dense layer of algae blocks sunlight penetration, depleting dissolved oxygen (DO) as dead algae are decomposed by aerobic bacteria, leading to massive fish mortality and production of noxious toxins (cyanotoxins).</li>
    </ul>
    <strong>2. Red Tides:</strong><br>
    <strong>Red tides</strong> refer to a specific marine phenomenon where coastal ocean waters appear reddish, brown, or pink due to the explosive multiplication and bloom of red-pigmented <strong>dinoflagellates</strong> (such as <em>Gonyaulax polyedra</em> and <em>Gymnodinium</em>).
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Toxin Secretion (Saxitoxin):</strong> These blooming dinoflagellates release potent neurotoxins, notably <strong>saxitoxin</strong>, into the water column.</li>
      <li><strong>Biological Hazard:</strong> The toxin accumulates in filter-feeding shellfish (clams, oysters, mussels). While harmless to the molluscs, consumption of contaminated shellfish by marine mammals, birds, or humans causes severe, often lethal <strong>Paralytic Shellfish Poisoning (PSP)</strong>.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Definition of algal bloom, nutrient enrichment (eutrophication), and oxygen depletion', '1.5 Marks'],
    ['Definition of red tides, mention of Gonyaulax (dinoflagellates), and saxitoxin impact on marine life/humans', '1.5 Marks']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch2-q5', 'Question 5', 'NCERT Exercise',
  'How are viroids different from viruses?',
  `<div class="step">
    <strong>Comparative Differences Between Viroids and Viruses:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Parameter</th>
            <th style="padding:8px 12px; color:#065f46;">Viroids (Discovered by T.O. Diener, 1971)</th>
            <th style="padding:8px 12px; color:#065f46;">Viruses (Ivanowsky, Beijerinck, Stanley)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">1. Protein Coat (Capsid)</td>
            <td style="padding:8px 12px; color:#dc2626; font-weight:700;">Completely absent (consist of naked RNA).</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:700;">Present (genetic material is enclosed within a protein coat called capsid made of capsomeres).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">2. Genetic Material</td>
            <td style="padding:8px 12px;">Only single-stranded RNA (ssRNA).</td>
            <td style="padding:8px 12px;">Either DNA or RNA (single-stranded or double-stranded), never both.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">3. Molecular Weight</td>
            <td style="padding:8px 12px;">RNA has very <strong>low molecular weight</strong>.</td>
            <td style="padding:8px 12px;">Nucleic acid has relatively <strong>high molecular weight</strong>.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">4. Size</td>
            <td style="padding:8px 12px;">Much smaller than viruses (sub-viral infectious agents).</td>
            <td style="padding:8px 12px;">Larger than viroids (ranging from 20 to 300 nm).</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">5. Host Specificity &amp; Examples</td>
            <td style="padding:8px 12px;">Exclusively infect higher plants (e.g., Potato Spindle Tuber Viroid - PSTVd).</td>
            <td style="padding:8px 12px;">Infect plants, animals, fungi, and bacteria (e.g., TMV, Influenza, HIV, Bacteriophages).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Absence of protein coat / capsid in viroids vs. presence in viruses', '1 Mark'],
    ['Nature of genetic material (only ssRNA of low MW in viroids vs. DNA/RNA in viruses)', '1 Mark'],
    ['Size comparison and representative examples (PSTVd vs. TMV/HIV)', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch2-q6', 'Question 6', 'NCERT Exercise',
  'Describe briefly the four major groups of Protozoa.',
  `<div class="step">
    <strong>The Four Major Morphological &amp; Locomotory Groups of Protozoa:</strong><br>
    Protozoans are unicellular, heterotrophic, eukaryotic microorganisms belonging to Kingdom Protista. They are classified into four groups based on their locomotory organelles:<br><br>
    <strong>1. Amoeboid Protozoans:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Habitat &amp; Locomotion:</strong> Inhabit freshwater, seawater, or moist soil. Move and capture prey by extending false feet called <strong>pseudopodia</strong> (blunt cytoplasmic projections), e.g., <em>Amoeba</em>.</li>
      <li><strong>Special Features:</strong> Marine forms possess silica shells on their surface. Parasitic forms like <em>Entamoeba histolytica</em> cause amoebic dysentery in humans.</li>
    </ul>
    <strong>2. Flagellated Protozoans:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Locomotion &amp; Lifestyle:</strong> Possess one or more whip-like <strong>flagella</strong> for active swimming. They are either free-living or endoparasitic.</li>
      <li><strong>Pathogenic Example:</strong> <em>Trypanosoma gambiense</em> is transmitted by the tsetse fly (<em>Glossina</em>) and causes fatal Human African Trypanosomiasis (<strong>sleeping sickness</strong>).</li>
    </ul>
    <strong>3. Ciliated Protozoans:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Locomotion &amp; Ingestion:</strong> Aquatic, actively moving organisms possessing thousands of coordinated hair-like <strong>cilia</strong> beating rhythmically in metachronal waves, e.g., <em>Paramoecium</em>.</li>
      <li><strong>Anatomical Specialisation:</strong> Feature an oral cavity (<strong>gullet</strong>) opening to the outside. The coordinated movement of cilia steers water laden with food particles directly into the gullet. Possess nuclear dualism (macronucleus and micronucleus).</li>
    </ul>
    <strong>4. Sporozoans:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Characteristics:</strong> Endoparasitic protozoans lacking specialized locomotory organelles (cilia, flagella, or pseudopodia). Characterized by having an infectious spore-like stage in their life cycle.</li>
      <li><strong>Pathogenic Example:</strong> <em>Plasmodium vivax</em> and <em>Plasmodium falciparum</em>, the causative agents of <strong>malaria</strong>, which cycles between female <em>Anopheles</em> mosquitoes and human hosts.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Amoeboid protozoans: pseudopodia, silica shells, Amoeba/Entamoeba', '1 Mark'],
    ['Flagellated protozoans: flagella, Trypanosoma (sleeping sickness)', '1 Mark'],
    ['Ciliated protozoans: thousands of cilia, gullet, Paramoecium', '1 Mark'],
    ['Sporozoans: lack locomotory organs, infectious spore phase, Plasmodium (malaria)', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch2-q7', 'Question 7', 'NCERT Exercise',
  'Plants are autotrophic. Can you think of some plants that are partially heterotrophic?',
  `<div class="step">
    <strong>Partially Heterotrophic Plants in Kingdom Plantae:</strong><br>
    While the vast majority of angiosperms are photoautotrophic (possessing chlorophyll $a$ and $b$ to synthesize sugars via photosynthesis), certain specialized plants are <strong>partially heterotrophic</strong> because they supplement their nitrogen and mineral requirements by consuming insects or parasitizing other plants:<br><br>
    <strong>1. Insectivorous (Carnivorous) Plants:</strong><br>
    These plants grow in waterlogged, acidic bogs and nitrate-deficient soils. They have functional green leaves and carry out photosynthesis to produce carbohydrates, but trap and digest small insects to acquire vital nitrogenous compounds (amino acids):
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Pitcher Plant (<em>Nepenthes</em>):</strong> The leaf lamina is modified into a tubular pitcher filled with digestive enzymes and closed by a lid. Insects falling into the pitcher slip on waxy walls and are digested.</li>
      <li><strong>Venus Flytrap (<em>Dionaea muscipula</em>):</strong> Leaf blades are modified into two sensitive hinged lobes with trigger hairs that snap shut within milliseconds when stimulated by an insect.</li>
      <li><strong>Bladderwort (<em>Utricularia</em>):</strong> Aquatic plant with tiny segmented leaf-bladders operating under negative hydrostatic pressure to suck in aquatic micro-invertebrates.</li>
      <li><strong>Sundew (<em>Drosera</em>):</strong> Leaves bear glandular tentacles secreting glistening, sticky mucilage containing proteolytic enzymes.</li>
    </ul>
    <strong>2. Parasitic Plants:</strong><br>
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Total Stem Parasite (<em>Cuscuta</em> / Dodder / Amarbel):</strong> Lacks chlorophyll and functional roots; twines around host branches and sends adventitious roots called <strong>haustoria</strong> directly into host xylem and phloem to extract water, minerals, and readymade sugars.</li>
      <li><strong>Partial Parasites (e.g., <em>Viscum</em> / Mistletoe):</strong> Possess green leaves to photosynthesize, but embed haustoria into host xylem to absorb water and inorganic minerals.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Explanation of why insectivorous plants trap insects (nitrogen-deficient habitats)', '1 Mark'],
    ['Two examples of insectivorous plants (Nepenthes, Dionaea, Utricularia) and leaf modifications', '1 Mark'],
    ['Mention of parasitic plants (Cuscuta) and haustorial absorption mechanism', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch2-q8', 'Question 8', 'NCERT Exercise',
  'What do the terms phycobiont and mycobiont signify?',
  `<div class="step">
    <strong>Significance of Phycobiont and Mycobiont in Lichen Symbiosis:</strong><br>
    Lichens represent a classic, obligate, mutualistic symbiotic partnership between an autotrophic algal component and a heterotrophic fungal component:<br><br>
    <strong>1. Phycobiont (Photobiont):</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Definition:</strong> The photosynthetic, algal or cyanobacterial partner in the lichen thallus (typically green algae like <em>Trebouxia</em> or blue-green algae like <em>Nostoc</em>).</li>
      <li><strong>Function &amp; Significance:</strong> Synthesizes organic carbohydrates through photosynthesis and supplies readymade nourishment to the fungal partner. When cyanobacteria are present, they also actively fix atmospheric nitrogen.</li>
    </ul>
    <strong>2. Mycobiont:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Definition:</strong> The non-photosynthetic fungal partner in the lichen thallus (predominantly Ascomycetes and rarely Basidiomycetes).</li>
      <li><strong>Function &amp; Significance:</strong> Forms the structural body (thallus) that encloses and protects the delicate algal cells from desiccation, mechanical injury, and intense solar radiation. Its dense hyphal network anchors the lichen to substrates (rocks, bark) via rhizines and absorbs water and mineral nutrients from the atmosphere and substrate, channeling them to the phycobiont.</li>
    </ul>
    <strong>Key Ecological Note:</strong> Neither partner can survive independently in extreme alpine, arctic, or desert environments. Lichens are also highly sensitive bio-indicators of atmospheric sulfur dioxide ($SO_2$) pollution ("pollution indicators").
  </div>`,
  '2 Marks',
  [
    ['Definition and precise autotrophic nutritional role of phycobiont (algal partner)', '1 Mark'],
    ['Definition and structural/absorptive/protective role of mycobiont (fungal partner)', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch2-q9', 'Question 9', 'NCERT Exercise',
  'Give a comparative account of the classes of Kingdom Fungi under the following: (i) mode of nutrition (ii) mode of reproduction.',
  `<div class="step">
    <strong>Comparative Analysis of the Four Classes of Kingdom Fungi:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.84rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 10px; color:#065f46;">Class &amp; Common Name</th>
            <th style="padding:8px 10px; color:#065f46;">Mycelium Type</th>
            <th style="padding:8px 10px; color:#065f46;">(i) Mode of Nutrition</th>
            <th style="padding:8px 10px; color:#065f46;">(ii) Mode of Reproduction (Asexual &amp; Sexual)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 10px; font-weight:700;">1. Phycomycetes<br><span style="font-weight:normal; font-size:0.75rem; color:#64748b;">(Algal Fungi)</span></td>
            <td style="padding:8px 10px;">Aseptate and <strong>coenocytic</strong> (multinucleate).</td>
            <td style="padding:8px 10px;">Obligate parasites on plants, saprotrophs on decaying wood or in aquatic moist habitats.</td>
            <td style="padding:8px 10px;"><strong>Asexual:</strong> Zoospores (motile) or aplanospores (non-motile) formed endogenously in sporangia.<br><strong>Sexual:</strong> Zygospore formed by isogamous or oogamous fusion of gametes. (e.g., <em>Mucor</em>, <em>Rhizopus</em>, <em>Albugo</em>).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 10px; font-weight:700;">2. Ascomycetes<br><span style="font-weight:normal; font-size:0.75rem; color:#64748b;">(Sac Fungi)</span></td>
            <td style="padding:8px 10px;">Branched and <strong>septate</strong>.</td>
            <td style="padding:8px 10px;">Saprotrophic, decomposers, parasitic, or <strong>coprophilous</strong> (growing on dung).</td>
            <td style="padding:8px 10px;"><strong>Asexual:</strong> Conidia produced exogenously on special hyphae called conidiophores.<br><strong>Sexual:</strong> Ascospores produced endogenously in sac-like asci arranged in fruiting bodies called ascocarps. (e.g., <em>Penicillium</em>, <em>Aspergillus</em>, <em>Neurospora</em>).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 10px; font-weight:700;">3. Basidiomycetes<br><span style="font-weight:normal; font-size:0.75rem; color:#64748b;">(Club Fungi)</span></td>
            <td style="padding:8px 10px;">Branched and <strong>septate</strong> (with clamp connections).</td>
            <td style="padding:8px 10px;">Saprotrophic on soil, logs, and tree stumps, or internal parasites causing rusts and smuts.</td>
            <td style="padding:8px 10px;"><strong>Asexual:</strong> Asexual spores generally not found; vegetative fragmentation common.<br><strong>Sexual:</strong> Sex organs absent; somatogamy occurs. Basidiospores produced exogenously on a basidium inside basidiocarps. (e.g., <em>Agaricus</em>, <em>Ustilago</em>, <em>Puccinia</em>).</td>
          </tr>
          <tr>
            <td style="padding:8px 10px; font-weight:700;">4. Deuteromycetes<br><span style="font-weight:normal; font-size:0.75rem; color:#64748b;">(Fungi Imperfecti)</span></td>
            <td style="padding:8px 10px;">Branched and <strong>septate</strong>.</td>
            <td style="padding:8px 10px;">Largely saprophytes or parasites; many are crucial decomposers of leaf litter helping mineral cycling.</td>
            <td style="padding:8px 10px;"><strong>Asexual:</strong> Reproduce exclusively by asexual conidia.<br><strong>Sexual:</strong> <em>Sexual (perfect) stage is completely unknown or absent</em>. If discovered, moved to Ascomycetes or Basidiomycetes. (e.g., <em>Alternaria</em>, <em>Colletotrichum</em>, <em>Trichoderma</em>).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '4 Marks',
  [
    ['Phycomycetes: coenocytic mycelium, nutrition (parasitic/saprophytic), zoospores & zygospores', '1 Mark'],
    ['Ascomycetes: septate, coprophilous/saprophytic, exogenous conidia & endogenous ascospores', '1 Mark'],
    ['Basidiomycetes: septate, somatogamy, exogenous basidiospores on basidium', '1 Mark'],
    ['Deuteromycetes: imperfect fungi, conidia reproduction, absence of sexual stage', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch2-q10', 'Question 10', 'NCERT Exercise',
  'What are the characteristic features of Euglenoids?',
  `<div class="step">
    <strong>Key Characteristic Features of Euglenoids:</strong><br>
    Euglenoids (e.g., <em>Euglena viridis</em>) are distinctive unicellular, flagellated protists primarily found in stagnant freshwater bodies:
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Absence of Cell Wall (Pellicle):</strong> Instead of a cellulosic cell wall, their body is bounded by a protein-rich flexible membrane layer called the <strong>pellicle</strong>, which permits active changes in cell shape (metaboly or euglenoid movement).</li>
      <li><strong>Heterokont Flagella:</strong> They bear two unequal flagella inserted in an anterior invagination (reservoir): one long, active, locomotory flagellum extending outward, and one short, non-emergent flagellum.</li>
      <li><strong>Mixotrophic Nutrition:</strong> They exhibit a remarkable dual mode of nutrition:
        <ul style="margin:4px 0 6px 20px;">
          <li>In the presence of sunlight, they are <strong>photoautotrophic</strong>, possessing chlorophyll $a$ and $b$ identical to those in higher plants.</li>
          <li>When deprived of sunlight in dark or nutrient-rich waters, they become <strong>heterotrophic predators</strong>, capturing and ingesting smaller organisms (saprotrophic / phagotrophic).</li>
        </ul>
      </li>
      <li><strong>Photosensitive Stigma (Eye-Spot):</strong> An orange-red pigmented carotenoid eye-spot (stigma) located near the reservoir detects light intensity and directs phototactic movement toward optimal light.</li>
      <li><strong>Reserve Food:</strong> Store carbohydrates in the form of unique $\\beta$-1,3-glucan granules called <strong>paramylon</strong> (paramylum).</li>
      <li><strong>Osmoregulation:</strong> Possess an anterior contractile vacuole to expel excess water entering hypotonic freshwater environments.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Proteinaceous pellicle replacing cell wall and providing body flexibility', '0.5 Mark'],
    ['Presence of two unequal flagella (one long, one short) & photoreceptive eye-spot', '1 Mark'],
    ['Mixotrophic nutrition (autotrophic in sunlight, heterotrophic in dark) with plant-like pigments', '1 Mark'],
    ['Paramylon reserve food and contractile vacuole osmoregulation', '0.5 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c11b-ch2-q11', 'Question 11', 'NCERT Exercise',
  'Give a brief account of viruses with respect to their structure and nature of genetic material. Also name four common viral diseases.',
  `<div class="step">
    <strong>Comprehensive Account of Viral Structure and Genetic Material:</strong><br>
    Viruses are non-cellular, sub-microscopic, obligate intracellular parasites that remain inert crystalline nucleoprotein structures outside living host cells:<br><br>
    <strong>1. Structural Organization:</strong>
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Core Genome (Nucleic Acid):</strong> Located internally, containing the infectious genetic blueprint. A single virus contains <em>either DNA or RNA</em>, never both simultaneously.</li>
      <li><strong>Protein Coat (Capsid):</strong> The protective shell surrounding the nucleic acid, composed of small repeating protein subunits called <strong>capsomeres</strong>. Capsomeres are arranged geometrically in helical (e.g., Tobacco Mosaic Virus) or polyhedral / icosahedral forms (e.g., Adenovirus, Poliovirus).</li>
      <li><strong>Viral Envelope:</strong> Some animal viruses (e.g., Influenza, HIV, SARS-CoV-2) possess an outer lipid-bilayer envelope derived from host membranes, studded with viral glycoproteins (spikes) facilitating host attachment.</li>
    </ul>
    <strong>2. Nature of Viral Genetic Material:</strong>
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Plant Viruses:</strong> Generally possess single-stranded RNA (ssRNA), e.g., Tobacco Mosaic Virus (TMV).</li>
      <li><strong>Bacteriophages (Bacterial Viruses):</strong> Usually possess double-stranded DNA (dsDNA), e.g., T4 bacteriophage.</li>
      <li><strong>Animal Viruses:</strong> May possess single-stranded RNA (ssRNA - Influenza, Rabies, Polio, Retroviruses like HIV), double-stranded RNA (dsRNA - Reovirus), or double-stranded DNA (dsDNA - Poxvirus, Herpesvirus, Hepatitis B).</li>
    </ul>
    <strong>3. Four Common Viral Diseases:</strong><br>
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>In Humans:</strong> (i) <em>Influenza</em> (Flu), (ii) <em>AIDS</em> (Acquired Immuno Deficiency Syndrome caused by HIV), (iii) <em>Smallpox / Chickenpox</em>, (iv) <em>Poliomyelitis</em> (Polio), (v) <em>Rabies</em>.</li>
      <li><strong>In Plants:</strong> Tobacco mosaic disease, Cucumber mosaic, Leaf curling and yellow vein mosaic in <em>Bhindi</em>.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Structure: Capsid made of capsomeres (helical/polyhedral) protecting internal genetic core', '1.5 Marks'],
    ['Genome nature: DNA or RNA (never both); ssRNA in plant viruses, dsDNA in bacteriophages, diverse in animals', '1.5 Marks'],
    ['Naming four common viral diseases in humans or plants', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c11b-ch2-q12', 'Question 12', 'NCERT Exercise',
  'Organise a discussion in your class on the topic - Are viruses living or non-living?',
  `<div class="step">
    <strong>Scientific Debate: Are Viruses Living or Non-Living Entities?</strong><br>
    Biologists describe viruses as entities existing at the <em>"threshold of life"</em> or biological twilight zone, because they exhibit a dual personality:<br><br>
    <strong>A. Arguments and Characteristics Supporting that Viruses are Non-Living:</strong>
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Lack of Cellular Organization:</strong> They are non-cellular (acellular); they have no cytoplasm, cell organelles (mitochondria, ribosomes, ER), or cell membrane.</li>
      <li><strong>Metabolic Inertia:</strong> Outside a host cell, they possess no metabolic activity, respiratory machinery, or autonomous enzyme systems for generating ATP.</li>
      <li><strong>Crystallizability:</strong> Like non-living chemical minerals, purified virus particles can be crystallized and stored indefinitely in bottles without losing infectious potential (first demonstrated by W.M. Stanley in 1935 for TMV).</li>
      <li><strong>No Independent Growth:</strong> They do not show independent growth or division outside host living cytoplasm.</li>
    </ul>
    <strong>B. Arguments and Characteristics Supporting that Viruses are Living:</strong>
    <ul style="margin:6px 0 10px 20px;">
      <li><strong>Genetic Material:</strong> They possess definite genetic material (either DNA or RNA) that encodes specific viral structural and functional proteins.</li>
      <li><strong>Replication &amp; Reproduction:</strong> Inside living host cells, they take over the host cell's metabolic machinery to replicate their genome and assemble thousands of viral progeny.</li>
      <li><strong>Mutation &amp; Evolution:</strong> Their genetic material undergoes spontaneous mutations and genetic recombination, evolving rapidly to evade host immune defenses (e.g., antigen drift in Influenza and HIV).</li>
      <li><strong>Infectivity &amp; Specificity:</strong> They exhibit strict host specificity and cause infectious, transmissible diseases in specific host organisms.</li>
    </ul>
    <strong>Scientific Conclusion:</strong><br>
    Viruses are best classified as <strong>obligate intracellular molecular parasites</strong> representing a vital evolutionary link between complex non-living prebiotic macromolecular assemblies and cellular living organisms.
  </div>`,
  '3 Marks',
  [
    ['Listing non-living attributes: acellular, no metabolism/respiration, crystallizable', '1.5 Marks'],
    ['Listing living attributes: genetic material (DNA/RNA), autonomous replication in host, mutation & evolution', '1.5 Marks']
  ]
));

// Save Chapter 2
saveChapter(
  2,
  'Biological Classification',
  svgCh2,
  'NCERT Textbook Exercise 1 to 12: Five Kingdom Scheme, Monera, Archaebacteria, Protista, Fungi, Viruses, Viroids & Lichens',
  questions,
  'Plant Kingdom'
);
