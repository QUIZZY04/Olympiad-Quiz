// scripts/builders/gen-c11b-ch4.js
// Chapter 4: Animal Kingdom (All 14 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh4 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      Fundamental Basis of Animal Classification &amp; Coelom Types
    </div>
    <svg viewBox="0 0 850 250" width="100%" height="auto" style="max-height:250px; font-family:'Plus Jakarta Sans',sans-serif;">
      <!-- Coelom Architecture (3 Types) -->
      <rect x="10" y="10" width="830" height="230" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="425" y="30" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">PRIMARY CRITERIA: BODY CAVITY (COELOM) ORGANISATION</text>

      <!-- 1. Acoelomate -->
      <g transform="translate(60, 45)">
        <circle cx="80" cy="70" r="60" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
        <circle cx="80" cy="70" r="42" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
        <circle cx="80" cy="70" r="20" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="80" y="150" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">1. ACOELOMATE</text>
        <text x="80" y="166" font-size="8.5" fill="#7f1d1d" text-anchor="middle">No body cavity</text>
        <text x="80" y="180" font-size="8" fill="#475569" text-anchor="middle">Mesoderm forms solid parenchyma</text>
        <text x="80" y="194" font-size="8.5" font-weight="bold" fill="#0f172a" text-anchor="middle">e.g., Platyhelminthes</text>
      </g>

      <!-- 2. Pseudocoelomate -->
      <g transform="translate(325, 45)">
        <circle cx="80" cy="70" r="60" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
        <!-- Scattered pouches -->
        <circle cx="60" cy="45" r="10" fill="#fed7aa" stroke="#ea580c"/>
        <circle cx="100" cy="45" r="10" fill="#fed7aa" stroke="#ea580c"/>
        <circle cx="50" cy="80" r="10" fill="#fed7aa" stroke="#ea580c"/>
        <circle cx="110" cy="80" r="10" fill="#fed7aa" stroke="#ea580c"/>
        <circle cx="80" cy="70" r="20" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="80" y="150" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">2. PSEUDOCOELOMATE</text>
        <text x="80" y="166" font-size="8.5" fill="#713f12" text-anchor="middle">False body cavity</text>
        <text x="80" y="180" font-size="8" fill="#475569" text-anchor="middle">Mesoderm in scattered pouches</text>
        <text x="80" y="194" font-size="8.5" font-weight="bold" fill="#0f172a" text-anchor="middle">e.g., Aschelminthes</text>
      </g>

      <!-- 3. Eucoelomate -->
      <g transform="translate(590, 45)">
        <circle cx="80" cy="70" r="60" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <!-- True cavity with peritoneal mesodermal lining -->
        <path d="M 45,70 A 35,35 0 0,1 115,70 A 35,35 0 0,1 45,70" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
        <circle cx="80" cy="70" r="20" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="80" y="150" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">3. COELOMATE (EUCOELOM)</text>
        <text x="80" y="166" font-size="8.5" fill="#047857" text-anchor="middle">True body cavity</text>
        <text x="80" y="180" font-size="8" fill="#475569" text-anchor="middle">Completely lined by mesoderm</text>
        <text x="80" y="194" font-size="8.5" font-weight="bold" fill="#0f172a" text-anchor="middle">e.g., Annelida to Chordata</text>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch4-q1', 'Question 1', 'NCERT Exercise',
  'What are the difficulties that you would face in classification of animals, if common fundamental features are not taken into account?',
  `<div class="step">
    <strong>Difficulties in Animal Classification Without Fundamental Features:</strong><br>
    The animal kingdom encompasses over a million described species displaying astounding morphological diversity. Without standard, universally accepted fundamental criteria (such as levels of organization, symmetry, germ layers, coelom, and body segmentation), biological classification would encounter severe obstacles:<br><br>
    <strong>1. Overwhelming Chaos and Confusion:</strong><br>
    Animals sharing superficial or convergent adaptations (e.g., bats, birds, and flying insects) would be erroneously grouped together due to the presence of wings, masking their true genetic lineages.<br><br>
    <strong>2. Misleading Grouping Based on Habitat:</strong><br>
    Classifying solely by habitat would group jellyfish, whales, sharks, and squids together as "aquatic animals," despite jellyfish lacking organs and whales being air-breathing placental mammals.<br><br>
    <strong>3. Inability to Track Evolutionary Phylogeny:</strong><br>
    Fundamental homologies—such as the emergence of bilateral symmetry, cephalization, true triploblastic coelom, and the notochord—allow scientists to map out evolutionary descent. Ignoring these would erase phylogenetic lineages.<br><br>
    <strong>4. Impossibility of Placing Newly Discovered Species:</strong><br>
    Every year thousands of new marine and terrestrial invertebrates are cataloged. Without fundamental architectural hallmarks, there would be no objective taxonomic rubric to assign new specimens to their correct phylum or class.
  </div>`,
  '3 Marks',
  [
    ['Risk of grouping unrelated species based on superficial analogies (e.g. wings/habitat)', '1 Mark'],
    ['Loss of phylogenetic and evolutionary relationships', '1 Mark'],
    ['Impossibility of systematic placement of newly discovered species', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch4-q2', 'Question 2', 'NCERT Exercise',
  'If you are given a specimen, what are the steps that you would follow to classify it?',
  `<div class="step">
    <strong>Hierarchical Scientific Steps to Classify an Unknown Animal Specimen:</strong><br><br>
    <strong>Step 1: Determine the Level of Structural Organisation:</strong>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Cellular level:</em> Cells aggregate loosely without forming true tissues (Phylum Porifera).</li>
      <li><em>Tissue level:</em> Cells performing similar functions form specialized tissues (Cnidaria, Ctenophora).</li>
      <li><em>Organ / Organ-system level:</em> Tissues group into functional organs and systems (Platyhelminthes to Chordata).</li>
    </ul>
    <strong>Step 2: Assess Body Symmetry:</strong>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Asymmetrical:</em> Cannot be divided into equal halves through any central plane (most Sponges).</li>
      <li><em>Radial symmetry:</em> Any plane passing through central longitudinal axis divides body into identical halves (Cnidaria, Ctenophores, Adult Echinoderms).</li>
      <li><em>Bilateral symmetry:</em> Body can be divided into identical right and left halves in only one plane (Platyhelminthes to Chordates).</li>
    </ul>
    <strong>Step 3: Identify Germ Layer Organisation:</strong>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Diploblastic:</em> Developed from two embryonic layers—outer ectoderm and inner endoderm, separated by undifferentiated mesoglea (Cnidaria, Ctenophora).</li>
      <li><em>Triploblastic:</em> Possesses three distinct germ layers—ectoderm, mesoderm, and endoderm (Platyhelminthes to Chordata).</li>
    </ul>
    <strong>Step 4: Examine Nature of the Body Cavity (Coelom):</strong>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Acoelomate:</em> No cavity between gut and body wall (Platyhelminthes).</li>
      <li><em>Pseudocoelomate:</em> Mesoderm exists as scattered pouches, not a true continuous peritoneal lining (Aschelminthes / Roundworms).</li>
      <li><em>Eucoelomate:</em> True cavity completely lined by mesodermal peritoneum (Annelids, Arthropods, Molluscs, Echinoderms, Chordates).</li>
    </ul>
    <strong>Step 5: Inspect Metameric Segmentation &amp; Notochord Presence:</strong>
    <ul style="margin:2px 0 6px 20px;">
      <li>Check for true internal and external segmentation (metamerism) as seen in Annelids and Arthropods.</li>
      <li>Check for a dorsal rod-like <strong>notochord</strong> derived from mesoderm: if present, classify under <strong>Chordata</strong>; if absent, classify under <strong>Non-chordata</strong>.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Level of organisation (cellular, tissue, organ system)', '1 Mark'],
    ['Body symmetry (asymmetrical, radial, bilateral)', '1 Mark'],
    ['Germ layers (diploblastic vs triploblastic) and coelom (acoelomate, pseudocoelomate, eucoelomate)', '1 Mark'],
    ['Segmentation and presence/absence of notochord (Chordate vs Non-chordate)', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch4-q3', 'Question 3', 'NCERT Exercise',
  'How useful is the study of the nature of body cavity and coelom in the classification of animals?',
  `<div class="step">
    <strong>Diagnostic Significance of the Body Cavity (Coelom) in Animal Classification:</strong><br>
    The presence or absence of a fluid-filled cavity between the body wall and the gut wall (the <strong>coelom</strong>) is one of the most decisive diagnostic benchmarks in zoological taxonomy:<br><br>
    <strong>1. Fundamental Primary Categorisation:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Acoelomates:</strong> Animals in which the blastocoel is completely obliterated by solid mesodermal mesenchymal parenchyma cells. There is no cavity around internal organs, limiting their size and mechanical independence (e.g., <em>Platyhelminthes</em> / Flatworms).</li>
      <li><strong>Pseudocoelomates:</strong> Animals in which the body cavity is derived directly from the persistent embryonic blastocoel rather than splitting of mesoderm. The mesoderm appears only as scattered pouches beneath the body wall, lacking an inner visceral mesodermal lining (e.g., <em>Aschelminthes</em> / Roundworms).</li>
      <li><strong>Eucoelomates (True Coelomates):</strong> The coelom is a true fluid-filled body space arising entirely within embryonic mesoderm and lined on both parietal (body wall) and visceral (gut wall) sides by mesodermal epithelium (peritoneum). Subdivided into:
        <ul style="margin:2px 0 4px 15px;">
          <li><em>Schizocoelomates:</em> Formed by the splitting of mesodermal bands (Annelida, Arthropoda, Mollusca).</li>
          <li><em>Enterocoelomates:</em> Formed by outpocketings of the embryonic archenteron (Echinodermata, Hemichordata, Chordata).</li>
        </ul>
      </li>
    </ul>
    <strong>2. Physiological and Functional Utility:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>The coelom provides room for the suspension, enlargement, muscular pulsation, and independent peristaltic movement of vital visceral organs (heart, gut, lungs).</li>
      <li>Coelomic fluid acts as a hydrostatic skeleton (e.g., in annelids) providing locomotion and turgor, acts as a shock absorber against mechanical concussions, and facilitates metabolic exchange and excretion.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Clear definition of coelom (space lined by mesoderm between body wall and alimentary canal)', '1 Mark'],
    ['Three major categories: Acoelomate (Platyhelminthes), Pseudocoelomate (Aschelminthes), Eucoelomate', '1 Mark'],
    ['Physiological advantages of coelom (space for organ growth, hydrostatic skeleton, shock protection)', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch4-q4', 'Question 4', 'NCERT Exercise',
  'Distinguish between intracellular and extracellular digestion.',
  `<div class="step">
    <strong>Differences Between Intracellular and Extracellular Digestion:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Parameter</th>
            <th style="padding:8px 12px; color:#065f46;">Intracellular Digestion</th>
            <th style="padding:8px 12px; color:#065f46;">Extracellular Digestion</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">1. Site of Digestion</td>
            <td style="padding:8px 12px;">Occurs <strong>inside the cell cytoplasm</strong> within specialized food vacuoles or phagosomes.</td>
            <td style="padding:8px 12px;">Occurs <strong>outside cells</strong> within the specialized lumen of a gastrovascular cavity or tubular alimentary canal.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">2. Enzyme Action</td>
            <td style="padding:8px 12px;">Lysosomal enzymes are secreted directly into the intracellular food vacuole.</td>
            <td style="padding:8px 12px;">Digestive glands and mucosal cells secrete enzymes into an open digestive cavity.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">3. Size of Ingested Food</td>
            <td style="padding:8px 12px;">Can digest only microscopic food particles or single-celled organisms ingested by phagocytosis.</td>
            <td style="padding:8px 12px;">Capable of breaking down large, complex macroscopic food chunks or prey.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">4. Efficiency &amp; Regional Specialisation</td>
            <td style="padding:8px 12px;">Relatively less efficient; no regional differentiation for digestion and absorption.</td>
            <td style="padding:8px 12px;">Highly efficient; permits extensive regional organ specialization (mouth, stomach, intestine, glands).</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">5. Occurrence / Examples</td>
            <td style="padding:8px 12px;">Protozoans and <strong>Porifera</strong> (sponges via choanocytes). Also initial phase in Cnidaria and Ctenophora.</td>
            <td style="padding:8px 12px;"><strong>Annelida, Arthropoda, Mollusca, Echinodermata, and all Chordates</strong> (also partly in Cnidaria/Platyhelminthes).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Site comparison: inside food vacuole vs outside cells in cavity/gut lumen', '1 Mark'],
    ['Mechanism & prey size: phagocytosis of microscopic particles vs enzyme secretion on large prey', '1 Mark'],
    ['Accurate animal examples for both types', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch4-q5', 'Question 5', 'NCERT Exercise',
  'What are the difference between direct and indirect development?',
  `<div class="step">
    <strong>Comparative Differences Between Direct and Indirect Development:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Parameter</th>
            <th style="padding:8px 12px; color:#065f46;">Direct Development</th>
            <th style="padding:8px 12px; color:#065f46;">Indirect Development</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">1. Larval Stage</td>
            <td style="padding:8px 12px; color:#dc2626; font-weight:700;">Completely absent.</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:700;">Involves one or more distinct, free-living intermediate <strong>larval stages</strong>.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">2. Resemblance of Young to Adult</td>
            <td style="padding:8px 12px;">The hatchling or newborn closely resembles the adult in body plan and morphology, differing only in size and sexual maturity.</td>
            <td style="padding:8px 12px;">The larva looks morphologically very different from the adult in structure, feeding apparatus, and locomotion.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">3. Metamorphosis</td>
            <td style="padding:8px 12px;">No metamorphosis occurs; growth is continuous and isometric.</td>
            <td style="padding:8px 12px;">Undergoes dramatic transformation called <strong>metamorphosis</strong> (retrogressive or progressive) to reach adulthood.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">4. Representative Examples</td>
            <td style="padding:8px 12px;"><em>Hydra</em>, Earthworms, Birds, Reptiles, and <strong>Mammals</strong> (including humans).</td>
            <td style="padding:8px 12px;">Porifera (amphiblastula), Cnidaria (planula), Platyhelminthes (miracidium), Insects (caterpillar, maggot), Frogs (tadpole), Echinoderms (bipinnaria).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Absence of larva in direct vs presence of morphologically distinct larva in indirect', '1 Mark'],
    ['Resemblance of newborn to adult vs requirement of metamorphosis', '1 Mark'],
    ['Accurate animal examples for both categories', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch4-q6', 'Question 6', 'NCERT Exercise',
  'What are the peculiar features that you find in parasitic platyhelminthes?',
  `<div class="step">
    <strong>Morphological, Physiological &amp; Anatomical Adaptations in Parasitic Platyhelminthes:</strong><br>
    Endoparasitic flatworms (e.g., <em>Taenia solium</em> / tapeworm and <em>Fasciola hepatica</em> / liver fluke) inhabit hostile microenvironments such as the human bile ducts or intestinal lumen. They exhibit remarkable evolutionary modifications:<br><br>
    <strong>1. Organs of Adhesion (Hooks and Suckers):</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Possess specialized muscular <strong>suckers</strong> (acetabula) and chitinous <strong>hooks</strong> (rostellum) to firmly anchor themselves to the intestinal mucosa, preventing expulsion by peristalsis.</li>
    </ul>
    <strong>2. Protective Thick Tegument:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Body is covered by a living syncytial, metabolically active outer coating called the <strong>tegument</strong>, which is resistant to digestive enzymes, bile salts, and host immune surveillance.</li>
    </ul>
    <strong>3. Extreme Degeneration or Total Loss of Digestive System:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Since they bathe in predigested chyme in the host small intestine, <em>Taenia</em> completely lacks a mouth and alimentary canal; it absorbs dissolved nutrients directly across its microtriches-covered body surface.</li>
    </ul>
    <strong>4. Highly Developed Reproductive System and Fecundity:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Reproductive organs are enormously enlarged. They are hermaphroditic, with each mature proglottid containing both male and female systems, producing millions of fertilized eggs to ensure high transmission probability despite hazards of finding new hosts.</li>
    </ul>
    <strong>5. Anaerobic Respiration:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Adapted to thrive in virtually oxygen-free intestinal lumen via facultative or obligate anaerobic glycolysis.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Presence of hooks and suckers for anchorage to host mucosa', '1 Mark'],
    ['Thick protective syncytial tegument and absence/reduction of digestive system', '1 Mark'],
    ['Huge reproductive potential (hermaphroditism, millions of eggs) and anaerobic metabolism', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch4-q7', 'Question 7', 'NCERT Exercise',
  'What are the reasons that you can think of for the arthropods to constitute the largest group of the animal kingdom?',
  `<div class="step">
    <strong>Evolutionary Success Factors Accounting for Arthropod Dominance (>80% of All Animal Species):</strong><br>
    Phylum Arthropoda constitutes over two-thirds of all named living organisms on Earth. Their unprecedented evolutionary triumph is attributed to several key biological adaptations:<br><br>
    <strong>1. Tough Chitinous Cuticular Exoskeleton:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>The outer body is enveloped by an impermeable, hardened chitin-protein exoskeleton. It provides structural support, protection against mechanical injury and predators, and, crucially, prevents desiccation (water loss), allowing colonization of arid terrestrial habitats.</li>
    </ul>
    <strong>2. Jointed Appendages (Extensive Diversification):</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Paired, segmented, jointed limbs operated by internal striated muscles have been modified into diverse specialized tools: walking legs, jumping legs, swimming paddles, grasping claws (chelae), biting mandibles, and piercing-sucking proboscises.</li>
    </ul>
    <strong>3. Highly Efficient Tracheal Respiratory System:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Insects possess a network of branching air tubes (tracheae and spiracles) that deliver oxygen directly to tissues without relying on blood circulatory speed, supporting exceptionally high metabolic rates.</li>
    </ul>
    <strong>4. Flight (Wings in Insects):</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Insects were the first animals to evolve powered flight, enabling rapid dispersal, escaping predators, foraging over vast geographic ranges, and finding mates.</li>
    </ul>
    <strong>5. Compound Eyes and Advanced Sensory Systems:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Possess mosaic-forming <strong>compound eyes</strong> (composed of thousands of ommatidia), sensitive antennae detecting pheromones, statocysts for balance, and auditory organs.</li>
    </ul>
    <strong>6. High Reproductive Output and Metamorphosis:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Short generation times, vast egg counts, and complete metamorphosis (holometabolous development: egg &rarr; larva &rarr; pupa &rarr; adult) eliminate competitive resource overlap between larvae (leaf-feeders) and adults (nectar-feeders).</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Chitinous exoskeleton preventing water loss and offering protection', '1 Mark'],
    ['Jointed appendages adapted for diverse functions (walking, feeding, defense)', '1 Mark'],
    ['Tracheal respiratory system and evolution of powered flight in insects', '1 Mark'],
    ['Compound eyes, pheromone detection, and high fecundity with niche-differentiating metamorphosis', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch4-q8', 'Question 8', 'NCERT Exercise',
  'Water vascular system is the characteristic of which group of the following: (a) Porifera (b) Ctenophora (c) Echinodermata (d) Chordata?',
  `<div class="step">
    <strong>Correct Option: (c) Echinodermata</strong><br><br>
    <strong>Detailed Biological Explanation &amp; Working Mechanism:</strong>
    <ul style="margin:6px 0 10px 20px;">
      <li>The <strong>water vascular system</strong> (also known as the <strong>ambulacral system</strong>) is an exclusive, diagnostic hallmark of <strong>Phylum Echinodermata</strong> (e.g., <em>Asterias</em> / Starfish, <em>Echinus</em> / Sea urchin, <em>Antedon</em> / Sea lily, <em>Cucumaria</em> / Sea cucumber).</li>
      <li>It is a specialized hydrostatic coelomic network consisting of:
        <ul style="margin:2px 0 4px 15px;">
          <li>A sieve-like perforated plate on the aboral surface called the <strong>madreporite</strong>.</li>
          <li>A stone canal connecting to a central circular <strong>ring canal</strong>.</li>
          <li>Five <strong>radial canals</strong> extending into the arms.</li>
          <li>Hundreds of hydraulic, muscular, sucker-bearing <strong>tube feet (podia)</strong> operated by contractile ampullae.</li>
        </ul>
      </li>
      <li><strong>Functions of Water Vascular System:</strong>
        <ol style="margin:2px 0 4px 15px;">
          <li>Locomotion and adhesion to rocky seabeds.</li>
          <li>Capture, handling, and transport of prey (such as prying open bivalve molluscs).</li>
          <li>Gas exchange (respiration) through the thin walls of tube feet and dermal branchiae.</li>
          <li>Excretion of nitrogenous wastes via diffusion.</li>
        </ol>
      </li>
    </ul>
    <em>Clarification Note: In contrast, Porifera (sponges) possess a <strong>water canal system</strong> (Ostia &rarr; Spongocoel &rarr; Osculum) driven by choanocyte flagella, which is completely distinct from the hydraulic water vascular system of echinoderms.</em>
  </div>`,
  '2 Marks',
  [
    ['Identification of (c) Echinodermata', '1 Mark'],
    ['Explanation of ambulacral mechanism (madreporite, tube feet) and functions (locomotion, food capture, respiration)', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch4-q9', 'Question 9', 'NCERT Exercise',
  '"All vertebrates are chordates but all chordates are not vertebrates". Justify the statement.',
  `<div class="step">
    <strong>Rigorous Justification of the Statement:</strong><br><br>
    <strong>1. Fundamental Hallmarks of Phylum Chordata:</strong><br>
    All animals placed under Phylum Chordata must possess the following three diagnostic features at some stage in their life cycle:
    <ul style="margin:4px 0 6px 20px;">
      <li>A solid, dorsal, longitudinal rod called the <strong>notochord</strong>.</li>
      <li>A dorsal, hollow, single <strong>nerve cord</strong>.</li>
      <li>Paired <strong>pharyngeal gill slits</strong> (and a post-anal tail).</li>
    </ul>
    <strong>2. Classification of Phylum Chordata into Subphyla:</strong><br>
    Phylum Chordata is subdivided into three distinct subphyla:
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>(i) Urochordata (Tunicata):</strong> The notochord is present <em>only in the larval tail</em> and disappears during retrogressive metamorphosis in the sessile adult (e.g., <em>Ascidia</em>, <em>Salpa</em>, <em>Doliolum</em>).</li>
      <li><strong>(ii) Cephalochordata:</strong> The notochord extends from head to tail tip (<em>rostrum</em> to tail) and persists throughout life, without ever being transformed into a backbone (e.g., <em>Branchiostoma</em> / Amphioxus).</li>
      <li><strong>(iii) Vertebrata (Craniata):</strong> The embryonic notochord is completely replaced by a cartilaginous or bony <strong>vertebral column (backbone)</strong> in the adult.</li>
    </ul>
    <strong>Logical Conclusion:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li>Since all members of Vertebrata possess a notochord during their embryonic phase, <strong>all vertebrates are fundamentally chordates</strong>.</li>
      <li>However, the protochordates (Urochordata and Cephalochordata) possess a notochord but <em>never develop a vertebral column</em>. Hence, <strong>all chordates are NOT vertebrates</strong>.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Definition of chordate hallmarks (notochord, dorsal hollow nerve cord, pharyngeal slits)', '1 Mark'],
    ['Account of Protochordates (Urochordata & Cephalochordata) lacking a vertebral column', '1 Mark'],
    ['Explanation that Vertebrata replaces embryonic notochord with bony/cartilaginous backbone', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch4-q10', 'Question 10', 'NCERT Exercise',
  'How important is the presence of air bladder in Pisces?',
  `<div class="step">
    <strong>Functional Importance of the Air Bladder (Swim Bladder) in Pisces:</strong><br>
    The air bladder (or swim bladder) is a hydrostatic, gas-filled sac situated dorsally in the body cavity between the alimentary canal and the vertebral column in bony fishes (Class <strong>Osteichthyes</strong>):<br><br>
    <strong>1. Hydrostatic Organ for Neutral Buoyancy:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>By regulating the volume and pressure of oxygen, nitrogen, and carbon dioxide within the bladder (via the gas gland and ovale or pneumatic duct), the fish adjusts its specific gravity to match the density of water at various depths.</li>
      <li>This achieves <strong>neutral buoyancy</strong>, allowing the fish to hover effortlessly at any chosen water depth without constantly exerting muscular swimming effort.</li>
    </ul>
    <strong>2. Contrast with Chondrichthyes (Cartilaginous Fishes):</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Cartilaginous fishes (e.g., sharks, dogfish <em>Scoliodon</em>, stingrays) <strong>lack an air bladder</strong>. Consequently, they are heavier than water and must swim continuously to generate hydrodynamic lift, otherwise they sink to the bottom.</li>
    </ul>
    <strong>3. Energy Conservation:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>The buoyancy conferred by the air bladder allows bony fishes to rest motionlessly in the water column, conserving substantial metabolic energy.</li>
    </ul>
    <strong>4. Accessory Respiratory &amp; Auditory Roles:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>In lungfishes (Dipnoi, e.g., <em>Protopterus</em>), the air bladder is heavily vascularized and functions as an accessory lung during seasonal droughts.</li>
      <li>In many teleosts, the air bladder connects to the inner ear via <strong>Weberian ossicles</strong>, acting as a sound resonator to enhance auditory acuity.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Primary function: hydrostatic buoyancy regulation allowing effortless hovering', '1 Mark'],
    ['Contrast with cartilaginous fishes (sharks) which must swim continuously to avoid sinking', '1 Mark'],
    ['Accessory functions: energy conservation, auditory perception (Weberian ossicles), and respiration in lungfishes', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c11b-ch4-q11', 'Question 11', 'NCERT Exercise',
  'What are the modifications that are observed in birds that help them fly?',
  `<div class="step">
    <strong>Anatomical, Physiological &amp; Morphological Flight Adaptations in Birds (Class Aves):</strong><br><br>
    <strong>1. Forelimbs Modified into Wings:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Forelimbs are completely modified into aerofoil wings covered with flight feathers (remiges and rectrices) that generate lift and thrust.</li>
    </ul>
    <strong>2. Pneumatic (Hollow) Skeleton:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Long bones are hollow and filled with air cavities (<strong>pneumatic bones</strong>) rather than heavy bone marrow, drastically reducing specific body weight while retaining high tensile strength.</li>
    </ul>
    <strong>3. Streamlined Spindle-Shaped Body:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Streamlined contour offers minimum aerodynamic resistance during flight through air.</li>
    </ul>
    <strong>4. Powerful Flight Muscles &amp; Keeled Sternum:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Breastbone (sternum) is modified into a massive ventral ridge called a <strong>keel</strong> (carina), which anchors colossal flight muscles: <em>Pectoralis major</em> (depresses the wing) and <em>Pectoralis minor</em> (elevates the wing).</li>
    </ul>
    <strong>5. Air Sacs and Continuous Biphasic Respiration:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Lungs are supplemented by 9 interconnected membranous <strong>air sacs</strong> that extend into bones. They ensure continuous unidirectional airflow across parabronchi, allowing gas exchange during both inhalation and exhalation to fulfill intense flight metabolic demands.</li>
    </ul>
    <strong>6. Weight-Reduction Adaptations:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Absence of heavy jaws and teeth; replaced by a lightweight keratinous <strong>beak</strong>.</li>
      <li>Absence of a urinary bladder; nitrogenous wastes are excreted as semisolid paste of insoluble <strong>uric acid</strong> (uricotelism).</li>
      <li>Females possess only a single functional <strong>left ovary and oviduct</strong>, shedding the weight of the right reproductive tract.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Forelimbs modified into wings and pneumatic (hollow air-filled) bones', '1 Mark'],
    ['Streamlined body, keeled sternum, and powerful flight pectoralis muscles', '1 Mark'],
    ['Air sacs connected to lungs ensuring continuous double respiration', '1 Mark'],
    ['Weight reduction: toothless beak, absence of urinary bladder, single functional left ovary', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c11b-ch4-q12', 'Question 12', 'NCERT Exercise',
  'Could the number of eggs or young ones produced by an oviparous and viviparous mother be equal? Why?',
  `<div class="step">
    <strong>Answer: No, the number of eggs produced by an oviparous mother is vastly greater than the number of young ones produced by a viviparous mother.</strong><br><br>
    <strong>Biological and Evolutionary Reasons:</strong><br><br>
    <strong>1. High Vulnerability and Predation Risk in Oviparous Species:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Oviparous animals (e.g., frogs, bony fishes, reptiles, birds) lay eggs outside the maternal body in aquatic or terrestrial environments.</li>
      <li>These eggs are exposed to severe environmental fluctuations (temperature, desiccation, floods) and intense predation by aquatic and terrestrial carnivores.</li>
      <li>A huge percentage of eggs and hatched larvae perish before reaching reproductive maturity. Therefore, oviparous mothers must produce thousands to millions of eggs (e.g., millions of eggs in teleosts) to ensure that at least a small fraction survives to perpetuate the species.</li>
    </ul>
    <strong>2. Internal Protection and High Survival Rate in Viviparous Species:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>Viviparous animals (e.g., eutherian mammals) retain the fertilized zygote internally within the female uterus.</li>
      <li>The developing embryo receives continuous physiological protection, optimal temperature, oxygen, and nourishment directly from maternal blood via the <strong>placenta</strong>.</li>
      <li>After birth, young ones receive intensive parental care and lactation, ensuring an extraordinarily high survival rate. Consequently, producing 1 to few offspring per reproductive cycle is evolutionarily optimal and conserves maternal resources.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Direct answer: No, oviparous mothers produce significantly more eggs than viviparous young', '1 Mark'],
    ['Oviparous hazards: external development, environmental threats, high predation loss requiring large numbers', '1 Mark'],
    ['Viviparous advantages: intrauterine embryonic protection, placenta, parental care giving high survival', '1 Mark']
  ]
));

// Q13
questions.push(createQCard(
  'c11b-ch4-q13', 'Question 13', 'NCERT Exercise',
  'Segmentation in the body is first observed in which of the following: (a) Platyhelminthes (b) Aschelminthes (c) Annelida (d) Arthropoda?',
  `<div class="step">
    <strong>Correct Option: (c) Annelida</strong><br><br>
    <strong>Scientific Justification:</strong>
    <ul style="margin:6px 0 10px 20px;">
      <li>True <strong>metameric segmentation</strong> (metamerism) is an evolutionary hallmark first exhibited by animals belonging to <strong>Phylum Annelida</strong> (e.g., <em>Pheretima</em> / Earthworm, <em>Hirudinaria</em> / Leech, <em>Nereis</em>).</li>
      <li><strong>Definition of Metamerism:</strong> The body is divided both externally (by grooves/annuli) and internally (by intersegmental septa) into a linear series of repeating segments called <strong>metameres</strong> or somites, with serial repetition of at least some organs (such as nephridia, ganglia, and blood vessels).</li>
      <li><em>Platyhelminthes</em> exhibit pseudo-segmentation (proglottids in tapeworms formed by strobilization, not true metamerism).</li>
      <li><em>Aschelminthes</em> are unsegmented roundworms.</li>
      <li><em>Arthropoda</em> display metamerism, but evolved chronologically after Annelida.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Correct choice: (c) Annelida', '1 Mark'],
    ['Definition of true metameric segmentation with serial repetition of internal organs', '1 Mark']
  ]
));

// Q14
questions.push(createQCard(
  'c11b-ch4-q14', 'Question 14', 'NCERT Exercise',
  'Match the following:<br>(a) Operculum — (i) Ctenophora<br>(b) Parapodia — (ii) Mollusca<br>(c) Scales — (iii) Porifera<br>(d) Comb plates — (iv) Reptilia<br>(e) Radula — (v) Annelida<br>(f) Hairs — (vi) Cyclostomata and Chondrichthyes<br>(g) Choanocytes — (vii) Osteichthyes<br>(h) Gill slits — (viii) Mammalia',
  `<div class="step">
    <strong>Accurate Matching of Anatomical Structures with Phyla / Classes:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Structure</th>
            <th style="padding:8px 12px; color:#065f46;">Correct Match</th>
            <th style="padding:8px 12px; color:#065f46;">Biological Function &amp; Significance</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(a) Operculum</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(vii) Osteichthyes</td>
            <td style="padding:8px 12px;">Bony protective gill cover covering 4 pairs of gills in bony fishes.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(b) Parapodia</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(v) Annelida</td>
            <td style="padding:8px 12px;">Lateral, paddle-like fleshy appendages for swimming in marine annelids like <em>Nereis</em>.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(c) Scales</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(iv) Reptilia</td>
            <td style="padding:8px 12px;">Epidermal dry, cornified scales or scutes preventing evaporative water loss.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(d) Comb plates</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(i) Ctenophora</td>
            <td style="padding:8px 12px;">Eight external rows of ciliated comb plates helping in locomotion in sea walnuts.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(e) Radula</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(ii) Mollusca</td>
            <td style="padding:8px 12px;">Rasping, file-like chitinous feeding organ present in the mouth of molluscs.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(f) Hairs</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(viii) Mammalia</td>
            <td style="padding:8px 12px;">Keratinous epidermal hair coat providing thermal insulation and sensory reception.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(g) Choanocytes</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(iii) Porifera</td>
            <td style="padding:8px 12px;">Collar cells lining the spongocoel maintaining water currents and trapping food particles.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">(h) Gill slits</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(vi) Cyclostomata &amp; Chondrichthyes</td>
            <td style="padding:8px 12px;">Separate, un-operculated exposed pharyngeal gill slits for aquatic respiration.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>Final Option Matching Sequence:</strong><br>
    <strong>(a) &rarr; (vii), &nbsp; (b) &rarr; (v), &nbsp; (c) &rarr; (iv), &nbsp; (d) &rarr; (i), &nbsp; (e) &rarr; (ii), &nbsp; (f) &rarr; (viii), &nbsp; (g) &rarr; (iii), &nbsp; (h) &rarr; (vi)</strong>
  </div>`,
  '4 Marks',
  [
    ['(a) to (vii) Osteichthyes & (b) to (v) Annelida', '1 Mark'],
    ['(c) to (iv) Reptilia & (d) to (i) Ctenophora', '1 Mark'],
    ['(e) to (ii) Mollusca & (f) to (viii) Mammalia', '1 Mark'],
    ['(g) to (iii) Porifera & (h) to (vi) Cyclostomata/Chondrichthyes', '1 Mark']
  ]
));

// Save Chapter 4
saveChapter(
  4,
  'Animal Kingdom',
  svgCh4,
  'NCERT Textbook Exercise 1 to 14: Non-Chordates, Chordates, Coelom, Symmetry, Flight Adaptations & Taxonomic Identification',
  questions,
  'Morphology of Flowering Plants'
);
