// scripts/builders/gen-c11b-ch5.js
// Chapter 5: Morphology of Flowering Plants (All 14 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh5 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 2v20M8 8l4-4 4 4M8 16l4 4 4-4"/></svg>
      Floral Architecture &amp; Placentation Patterns in Angiosperms
    </div>
    <svg viewBox="0 0 850 240" width="100%" height="auto" style="max-height:240px; font-family:'Plus Jakarta Sans',sans-serif;">
      <rect x="10" y="10" width="830" height="220" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="425" y="30" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">FIVE MAJOR TYPES OF PLACENTATION IN ANGIOSPERM OVARY</text>

      <!-- 1. Marginal -->
      <g transform="translate(30, 45)">
        <rect x="0" y="0" width="140" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <path d="M 40,30 Q 30,80 40,130 Q 80,110 80,80 Q 80,50 40,30" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <circle cx="48" cy="55" r="4" fill="#ca8a04"/>
        <circle cx="48" cy="75" r="4" fill="#ca8a04"/>
        <circle cx="48" cy="95" r="4" fill="#ca8a04"/>
        <circle cx="48" cy="115" r="4" fill="#ca8a04"/>
        <text x="70" y="145" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">1. Marginal</text>
        <text x="70" y="160" font-size="8" fill="#64748b" text-anchor="middle">Ventral suture (Pea)</text>
      </g>

      <!-- 2. Axile -->
      <g transform="translate(195, 45)">
        <rect x="0" y="0" width="140" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <circle cx="70" cy="75" r="45" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
        <!-- 3 Septa -->
        <line x1="70" y1="75" x2="70" y2="30" stroke="#16a34a" stroke-width="1.5"/>
        <line x1="70" y1="75" x2="31" y2="97" stroke="#16a34a" stroke-width="1.5"/>
        <line x1="70" y1="75" x2="109" y2="97" stroke="#16a34a" stroke-width="1.5"/>
        <circle cx="63" cy="62" r="3.5" fill="#ca8a04"/><circle cx="77" cy="62" r="3.5" fill="#ca8a04"/>
        <circle cx="56" cy="85" r="3.5" fill="#ca8a04"/><circle cx="84" cy="85" r="3.5" fill="#ca8a04"/>
        <text x="70" y="145" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">2. Axile</text>
        <text x="70" y="160" font-size="8" fill="#64748b" text-anchor="middle">Multilocular (Tomato, Citrus)</text>
      </g>

      <!-- 3. Parietal -->
      <g transform="translate(360, 45)">
        <rect x="0" y="0" width="140" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <circle cx="70" cy="75" r="45" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
        <!-- Ovules on inner wall -->
        <circle cx="35" cy="60" r="3.5" fill="#ca8a04"/><circle cx="35" cy="90" r="3.5" fill="#ca8a04"/>
        <circle cx="105" cy="60" r="3.5" fill="#ca8a04"/><circle cx="105" cy="90" r="3.5" fill="#ca8a04"/>
        <text x="70" y="145" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">3. Parietal</text>
        <text x="70" y="160" font-size="8" fill="#64748b" text-anchor="middle">Inner ovary wall (Mustard)</text>
      </g>

      <!-- 4. Free Central -->
      <g transform="translate(525, 45)">
        <rect x="0" y="0" width="140" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <circle cx="70" cy="75" r="45" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
        <circle cx="70" cy="75" r="16" fill="#bfdbfe" stroke="#1d4ed8"/>
        <!-- Ovules on central column -->
        <circle cx="70" cy="65" r="3" fill="#ca8a04"/><circle cx="70" cy="85" r="3" fill="#ca8a04"/>
        <circle cx="60" cy="75" r="3" fill="#ca8a04"/><circle cx="80" cy="75" r="3" fill="#ca8a04"/>
        <text x="70" y="145" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">4. Free Central</text>
        <text x="70" y="160" font-size="8" fill="#64748b" text-anchor="middle">No septa (Dianthus, Primrose)</text>
      </g>

      <!-- 5. Basal -->
      <g transform="translate(685, 45)">
        <rect x="0" y="0" width="140" height="170" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <ellipse cx="70" cy="75" rx="35" ry="45" fill="#fdf4ff" stroke="#a21caf" stroke-width="1.5"/>
        <circle cx="70" cy="105" r="6" fill="#ca8a04"/>
        <line x1="70" y1="120" x2="70" y2="111" stroke="#a21caf" stroke-width="2"/>
        <text x="70" y="145" font-size="10" font-weight="bold" fill="#86198f" text-anchor="middle">5. Basal</text>
        <text x="70" y="160" font-size="8" fill="#64748b" text-anchor="middle">Single ovule at base (Sunflower)</text>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch5-q1', 'Question 1', 'NCERT Exercise',
  'What is meant by modification of root? What type of modification of root is found in the: (a) Banyan tree (b) Turnip (c) Mangrove trees?',
  `<div class="step">
    <strong>Definition of Root Modification:</strong><br>
    Root modification refers to permanent morphological, anatomical, and structural changes undergone by roots to perform specialized functions other than their normal physiological roles of water/mineral absorption and anchorage (such as mechanical support, food storage, and respiration).<br><br>
    <strong>Modifications in the Specified Plants:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>(a) Banyan tree (<em>Ficus benghalensis</em>) &mdash; Prop Roots (Pillar Roots):</strong><br>
      Massive, adventitious aerial roots arise from heavy horizontal branches and grow vertically downward into the soil. Upon entering the soil, they become thick, woody, and pillar-like, providing mechanical support to the colossal canopy.</li>
      <li><strong>(b) Turnip (<em>Brassica rapa</em>) &mdash; Napiform Tap Root:</strong><br>
      The primary tap root becomes spherical and swollen with stored carbohydrates (starch), narrowing abruptly at the lower tip into a slender tail.</li>
      <li><strong>(c) Mangrove trees (e.g., <em>Rhizophora</em>) &mdash; Pneumatophores (Respiratory Roots):</strong><br>
      In waterlogged, saline, oxygen-deficient coastal swamp soils, subterranean roots produce negatively geotropic, erect peg-like vertical aerial roots that emerge above water. They bear numerous aerating pores called <strong>lenticels (pneumathodes)</strong> to intake oxygen for underground tissue respiration.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Definition of root modification for secondary physiological/mechanical functions', '1 Mark'],
    ['(a) Banyan tree: Prop roots for mechanical support', '1 Mark'],
    ['(b) Turnip: Napiform tap root for food storage', '1 Mark'],
    ['(c) Mangroves: Pneumatophores with lenticels for oxygen intake', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch5-q2', 'Question 2', 'NCERT Exercise',
  'Justify the following statements on the basis of external features: (a) Underground parts of a plant are not always roots (b) Flower is a modified shoot.',
  `<div class="step">
    <strong>(a) Justification: Underground parts of a plant are not always roots:</strong><br>
    Roots lack nodes, internodes, leaves, and buds. In contrast, several underground plant structures are morphologically <strong>modified stems</strong> because they exhibit diagnostic stem characteristics:
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Potato Tuber:</strong> Bears "eyes", which are axillary buds situated in the axils of scale-leaf scars at definite nodes.</li>
      <li><strong>Ginger and Turmeric Rhizome:</strong> Horizontally growing underground stems with distinct nodes, internodes, scaly leaves, and terminal buds.</li>
      <li><strong>Colocasia and Corm of Amorphophallus:</strong> Vertically condensed underground stems with circular nodes and axillary buds.</li>
      <li><strong>Onion Bulb:</strong> Highly reduced disc-like stem bearing fleshy concentric scale leaves storing food.</li>
    </ul>
    <strong>(b) Justification: Flower is a modified shoot:</strong><br>
    Goethe first proposed that a flower is an indeterminate vegetative shoot condensed and modified for sexual reproduction:
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Condensation of Axis:</strong> The apical meristem transforms into a floral meristem; internodes do not elongate, condensing the floral axis into a swollen <strong>thalamus (receptacle)</strong>.</li>
      <li><strong>Homology with Leaves:</strong> Floral whorls (sepals, petals, stamens, and carpels) are borne successively at swollen nodes like modified leaves (phylls): sepals &asymp; microphylls, petals &asymp; leaves, stamens &asymp; microsporophylls, carpels &asymp; megasporophylls.</li>
      <li><strong>Axillary Position &amp; Reversion:</strong> Flowers arise in the axils of bracts (modified leaves), precisely where vegetative axillary branches normally emerge. In abnormal conditions (e.g., in <em>Cleome</em> or <em>Rosa</em>), floral axes occasionally elongate between whorls (anthophore, androphore, gynophore).</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['(a) Clear evidence of stem features (nodes, internodes, buds, scale leaves) in tubers/rhizomes', '2 Marks'],
    ['(b) Explanation of condensed axis (thalamus) and floral organs as homologous modified leaves', '2 Marks']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch5-q3', 'Question 3', 'NCERT Exercise',
  'How is a pinnately compound leaf different from a palmately compound leaf?',
  `<div class="step">
    <strong>Differences Between Pinnately and Palmately Compound Leaves:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Feature</th>
            <th style="padding:8px 12px; color:#065f46;">Pinnately Compound Leaf</th>
            <th style="padding:8px 12px; color:#065f46;">Palmately Compound Leaf</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">1. Arrangement of Leaflets</td>
            <td style="padding:8px 12px;">Leaflets (pinnae) are attached laterally along an elongated common central axis called the <strong>rachis</strong> (which represents the extended midrib).</td>
            <td style="padding:8px 12px;">Leaflets are articulated and radiate out from a <strong>single common point</strong> at the tip of the petiole (like fingers from a palm).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">2. Presence of Rachis</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:700;">Rachis is present, prominent, and bears leaflets at intervals.</td>
            <td style="padding:8px 12px; color:#dc2626; font-weight:700;">Rachis is completely absent or extremely reduced.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">3. Subdivisions</td>
            <td style="padding:8px 12px;">Can be unipinnate (paripinnate/imparipinnate), bipinnate, tripinnate, or decompound.</td>
            <td style="padding:8px 12px;">Classified based on leaflet number: unifoliolate, bifoliolate, trifoliolate, quadrifoliolate, or multifoliolate.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">4. Representative Examples</td>
            <td style="padding:8px 12px;"><strong>Neem</strong> (<em>Azadirachta indica</em>), Rose, Cassia, Tamarind, Gulmohar.</td>
            <td style="padding:8px 12px;"><strong>Silk cotton</strong> (<em>Bombax ceiba</em>), Citrus, <em>Oxalis</em>, <em>Marsilea</em>.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Arrangement: lateral along rachis vs radiating from single petiole tip', '1 Mark'],
    ['Presence vs absence of rachis', '1 Mark'],
    ['Correct botanical examples for both (Neem vs Silk Cotton)', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch5-q4', 'Question 4', 'NCERT Exercise',
  'Explain with suitable examples the different types of phyllotaxy.',
  `<div class="step">
    <strong>Definition of Phyllotaxy:</strong><br>
    <strong>Phyllotaxy</strong> is the pattern of arrangement of leaves on the stem or branch. Its primary adaptive objective is to position leaf blades in a non-overlapping configuration to maximize sunlight interception.<br><br>
    <strong>Three Major Types of Phyllotaxy:</strong><br><br>
    <strong>1. Alternate (Spiral) Phyllotaxy:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>A <strong>single leaf</strong> arises at each node in an alternate and spiral fashion along the stem axis.</li>
      <li><em>Examples:</em> <strong>China rose</strong> (<em>Hibiscus rosa-sinensis</em>), <strong>Mustard</strong> (<em>Brassica campestris</em>), and <strong>Sunflower</strong> (<em>Helianthus annuus</em>).</li>
    </ul>
    <strong>2. Opposite Phyllotaxy:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li>A <strong>pair of leaves</strong> arises at each node on opposite sides facing each other. Subtypes:
        <ul style="margin:2px 0 4px 15px;">
          <li><em>Opposite decussate:</em> Successive pairs lie at right angles to each other (e.g., <em>Calotropis</em>, <em>Ocimum</em> / Holy Basil).</li>
          <li><em>Opposite superposed:</em> Successive pairs lie in the exact same plane (e.g., <strong>Guava</strong> / <em>Psidium guajava</em>, <em>Syzygium</em>).</li>
        </ul>
      </li>
    </ul>
    <strong>3. Whorled Phyllotaxy:</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>More than two leaves</strong> arise at each node to form a circular ring or whorl around the stem.</li>
      <li><em>Examples:</em> <strong>Alstonia</strong> (Devil's tree), <em>Nerium</em> (Oleander).</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Definition of phyllotaxy and adaptive purpose', '0.5 Mark'],
    ['Alternate: single leaf per node, examples (China rose, Mustard, Sunflower)', '1 Mark'],
    ['Opposite: pair of leaves per node, examples (Calotropis, Guava)', '1 Mark'],
    ['Whorled: >2 leaves per node, example (Alstonia)', '0.5 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch5-q5', 'Question 5', 'NCERT Exercise',
  'Define the following terms: (a) aestivation (b) placentation (c) actinomorphic (d) zygomorphic (e) superior ovary (f) perigynous flower (g) epipetalous stamen.',
  `<div class="step">
    <strong>Precise Botanical Definitions of Floral Terms:</strong><br><br>
    <strong>(a) Aestivation:</strong><br>
    The mode of arrangement of accessory floral leaves (sepals or petals) in a floral bud with respect to other members of the same whorl. Major types: Valvate, Twisted, Imbricate, and Vexillary.<br><br>
    <strong>(b) Placentation:</strong><br>
    The pattern of distribution and attachment of ovules upon the fertile tissue called placenta within the ovary of a flower. Types: Marginal, Axile, Parietal, Free-central, and Basal.<br><br>
    <strong>(c) Actinomorphic (Radial Symmetry):</strong><br>
    A flower that can be divided into two equal radial halves in <strong>any vertical plane</strong> passing through the central axis (represented by $\\oplus$). <em>Examples: Mustard, Datura, Chilli.</em><br><br>
    <strong>(d) Zygomorphic (Bilateral Symmetry):</strong><br>
    A flower that can be divided into two similar halves in <strong>only one vertical plane</strong> (represented by $\%$). <em>Examples: Pea, Gulmohar, Bean, Cassia.</em><br><br>
    <strong>(e) Superior Ovary (Hypogynous Flower):</strong><br>
    An ovary that occupies the highest apical position on the convex thalamus, while sepals, petals, and stamens are inserted below it. Symbolized as $\\underline{\\text{G}}$. <em>Examples: Mustard, China rose, Brinjal.</em><br><br>
    <strong>(f) Perigynous Flower:</strong><br>
    A flower in which the gynoecium is situated at the center, and other floral parts are located on the rim or margin of a saucer- or cup-shaped thalamus at approximately the same level. The ovary is termed <strong>half-inferior</strong>. <em>Examples: Plum, Rose, Peach.</em><br><br>
    <strong>(g) Epipetalous Stamen:</strong><br>
    A condition in which the filaments of stamens are fused or attached to the inner face of the corolla petals (represented by $\\overgroup{\\text{C}\\quad\\text{A}}$). <em>Example: Brinjal (Solanaceae), Datura.</em>
  </div>`,
  '4 Marks',
  [
    ['(a) Aestivation & (b) Placentation definitions', '1 Mark'],
    ['(c) Actinomorphic & (d) Zygomorphic with symmetry planes & examples', '1 Mark'],
    ['(e) Superior ovary & (f) Perigynous flower / half-inferior ovary', '1 Mark'],
    ['(g) Epipetalous stamen definition with Brinjal example', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch5-q6', 'Question 6', 'NCERT Exercise',
  'Differentiate between: (a) Racemose and cymose inflorescence (b) Apocarpous and syncarpous ovary.',
  `<div class="step">
    <strong>(a) Differences Between Racemose and Cymose Inflorescence:</strong><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:6px 0; font-size:0.84rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:6px 10px;">Feature</th><th style="padding:6px 10px;">Racemose Inflorescence</th><th style="padding:6px 10px;">Cymose Inflorescence</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 10px; font-weight:700;">Peduncle Growth</td><td style="padding:6px 10px;">Main axis shows <strong>unlimited continuous growth</strong>; does not terminate in a flower.</td><td style="padding:6px 10px;">Main axis has <strong>limited growth</strong>; terminates in a flower.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 10px; font-weight:700;">Order of Flower Opening</td><td style="padding:6px 10px;"><strong>Acropetal succession</strong> (oldest flowers at base, youngest near apex) and centripetal.</td><td style="padding:6px 10px;"><strong>Basipetal succession</strong> (oldest flower at apex, youngest towards base) and centrifugal.</td></tr>
          <tr><td style="padding:6px 10px; font-weight:700;">Examples</td><td style="padding:6px 10px;">Radish, Mustard, Crotalaria.</td><td style="padding:6px 10px;">Jasmine, Teak, Bougainvillea, <em>Solanum</em>.</td></tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>(b) Differences Between Apocarpous and Syncarpous Ovary:</strong><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:6px 0; font-size:0.84rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:6px 10px;">Feature</th><th style="padding:6px 10px;">Apocarpous Ovary</th><th style="padding:6px 10px;">Syncarpous Ovary</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 10px; font-weight:700;">Carpel Fusion</td><td style="padding:6px 10px;">Carpels are multiple (multicarpellary) and <strong>completely free</strong> from one another.</td><td style="padding:6px 10px;">Two or more carpels are <strong>fused together</strong> to form a single compound pistil.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 10px; font-weight:700;">Fruit Formation</td><td style="padding:6px 10px;">Gives rise to an aggregate of fruitlets (etaerio of achenes, berries, or follicles).</td><td style="padding:6px 10px;">Develops into a single simple fruit (e.g., berry, capsule, drupe).</td></tr>
          <tr><td style="padding:6px 10px; font-weight:700;">Examples</td><td style="padding:6px 10px;"><strong>Lotus</strong> (<em>Nelumbo</em>), <strong>Rose</strong>, <em>Michelia</em> (Champa).</td><td style="padding:6px 10px;"><strong>Mustard</strong>, <strong>Tomato</strong>, <em>Hibiscus</em>, Brinjal.</td></tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '4 Marks',
  [
    ['(a) Racemose vs Cymose: peduncle termination, succession order (acropetal vs basipetal), examples', '2 Marks'],
    ['(b) Apocarpous vs Syncarpous: free vs fused carpels, aggregate vs simple fruit, examples', '2 Marks']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch5-q7', 'Question 7', 'NCERT Exercise',
  'Draw the labelled diagram of the following: (i) gram seed (ii) V.S. of maize grain.',
  `<div class="step">
    <strong>Morphological and Anatomical Architecture of Seeds:</strong><br><br>
    <strong>(i) Non-Endospermic Dicot Seed &mdash; Gram Seed (<em>Cicer arietinum</em>):</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Seed Coat:</strong> Double-layered; outer thick brownish <strong>testa</strong> and inner thin membranous <strong>tegmen</strong>.</li>
      <li><strong>Hilum &amp; Micropyle:</strong> Hilum is the scar of stalk attachment; just above it lies a minute pore, the <strong>micropyle</strong> (for water/oxygen entry).</li>
      <li><strong>Embryo:</strong> Consists of two massive, fleshy, starch-rich <strong>cotyledons</strong> enclosing an embryonal axis (tigellum).
        <ul style="margin:2px 0 4px 15px;">
          <li>Upper conical tip: <strong>Plumule</strong> (future shoot).</li>
          <li>Lower pointed tip: <strong>Radicle</strong> (future root).</li>
          <li><em>Endosperm:</em> Completely absorbed during embryogeny (exalbuminous / non-endospermic).</li>
        </ul>
      </li>
    </ul>
    <strong>(ii) Endospermic Monocot Seed &mdash; V.S. of Maize Grain (<em>Zea mays</em>):</strong>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>Fused Pericarp &amp; Testa:</strong> Single-seeded fruit (caryopsis) where fruit wall is fused with seed coat.</li>
      <li><strong>Aleurone Layer:</strong> A specialized protein-rich outer layer separating the endosperm from the embryo.</li>
      <li><strong>Endosperm:</strong> Large, bulky tissue storing starch, occupying two-thirds of the grain volume.</li>
      <li><strong>Embryo:</strong> Shield-shaped single cotyledon called the <strong>scutellum</strong> positioned laterally against the endosperm.
        <ul style="margin:2px 0 4px 15px;">
          <li><strong>Coleoptile:</strong> Protective hollow sheath enclosing the plumule.</li>
          <li><strong>Coleorhiza:</strong> Protective parenchymatous sheath enclosing the radicle and root cap.</li>
        </ul>
      </li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(i) Gram seed components: testa, tegmen, hilum, micropyle, 2 cotyledons, radicle, plumule', '1.5 Marks'],
    ['(ii) Maize grain: fused pericarp, aleurone layer, endosperm, scutellum, coleoptile, coleorhiza', '1.5 Marks']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch5-q8', 'Question 8', 'NCERT Exercise',
  'Describe modifications of stem with suitable examples.',
  `<div class="step">
    <strong>Diverse Morphological Modifications of Stem:</strong><br><br>
    <strong>1. Underground Modifications (Storage &amp; Perennation):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Tuber:</strong> Swollen terminal ends of underground branches storing starch, bearing buds/eyes. <em>Example: Potato (Solanum tuberosum).</em></li>
      <li><strong>Rhizome:</strong> Fleshy, prostrate dorsiventral horizontal stem with distinct nodes, internodes, and scaly leaves. <em>Example: Ginger (Zingiber officinale), Turmeric.</em></li>
      <li><strong>Corm:</strong> Unbranched, stout, vertically growing condensed underground stem. <em>Example: Colocasia, Amorphophallus (Zamikand).</em></li>
      <li><strong>Bulb:</strong> Highly reduced discoid stem bearing fleshy scale leaves. <em>Example: Onion (Allium cepa), Garlic.</em></li>
    </ul>
    <strong>2. Sub-Aerial Modifications (Vegetative Propagation):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Runner:</strong> Creeping prostrate branch rooting at nodes. <em>Example: Grass (Cynodon dactylon), Oxalis.</em></li>
      <li><strong>Stolon:</strong> Slender lateral branch arching downward to touch the ground. <em>Example: Mint (Mentha), Jasmine.</em></li>
      <li><strong>Offset:</strong> Short, thick lateral branch of one internode length with a rosette of leaves and a tuft of roots. <em>Example: Pistia, Eichhornia (Water hyacinth).</em></li>
      <li><strong>Sucker:</strong> Arises from underground stem, grows horizontally, then emerges obliquely upward. <em>Example: Chrysanthemum, Banana, Pineapple.</em></li>
    </ul>
    <strong>3. Aerial Modifications (Specialised Adaptive Functions):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Stem Tendrils:</strong> Axillary buds modified into slender spirally coiled climbing structures. <em>Example: Gourds (cucumber, pumpkin, watermelon) and Grapevine.</em></li>
      <li><strong>Thorns:</strong> Axillary buds modified into woody, straight, pointed protective organs preventing grazing. <em>Example: Citrus, Bougainvillea.</em></li>
      <li><strong>Phylloclades:</strong> Green, flattened or cylindrical succulent stems taking over photosynthesis and storing water in xerophytes. <em>Example: Opuntia (flattened), Euphorbia (cylindrical).</em></li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Underground stem modifications (Tuber, Rhizome, Corm, Bulb) with examples', '1.5 Marks'],
    ['Sub-aerial modifications (Runner, Stolon, Offset, Sucker) with examples', '1.5 Marks'],
    ['Aerial modifications (Tendrils, Thorns, Phylloclades) with examples', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch5-q9', 'Question 9', 'NCERT Exercise',
  'Take one flower each of the families Fabaceae and Solanaceae and write its semi-technical description. Also give their floral formula.',
  `<div class="step">
    <strong>1. Family Fabaceae (e.g., <em>Pisum sativum</em> &mdash; Pea Flower):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Inflorescence:</strong> Racemose.</li>
      <li><strong>Flower:</strong> Bisexual, zygomorphic, hypogynous, bracteate, pentamerous.</li>
      <li><strong>Calyx:</strong> Sepals 5, gamosepalous (fused), valvate or imbricate aestivation.</li>
      <li><strong>Corolla:</strong> Petals 5, polypetalous, papilionaceous consisting of a large posterior <strong>standard</strong> (vexillum), two lateral <strong>wings</strong> (alae), and two anterior fused petals forming a <strong>keel</strong> (carina); vexillary aestivation.</li>
      <li><strong>Androecium:</strong> Stamens 10, <strong>diadelphous</strong> [9 + 1] (9 filaments fused into a tube, 1 free posterior stamen), dithecous anthers.</li>
      <li><strong>Gynoecium:</strong> Monocarpellary, superior unilocular ovary with marginal placentation, single style.</li>
    </ul>
    <strong>Floral Formula of Fabaceae:</strong><br>
    $$\\% \\; \\text{ \u26A5 } \\; \\text{K}_{(5)} \\; \\text{C}_{1+2+(2)} \\; \\text{A}_{(9)+1} \\; \\underline{\\text{G}}_{1}$$
    <br>
    <strong>2. Family Solanaceae (e.g., <em>Solanum nigrum</em> &mdash; Makoi / Black Nightshade):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Inflorescence:</strong> Solitary, axillary or cymose (as in <em>Solanum</em>).</li>
      <li><strong>Flower:</strong> Bisexual, actinomorphic, hypogynous, ebracteate, pentamerous.</li>
      <li><strong>Calyx:</strong> Sepals 5, gamosepalous, persistent, valvate aestivation.</li>
      <li><strong>Corolla:</strong> Petals 5, gamopetalous, rotate or infundibuliform, valvate aestivation.</li>
      <li><strong>Androecium:</strong> Stamens 5, <strong>epipetalous</strong> (attached to corolla tube), alternating with petals, free (polyandrous), anthers dithecous.</li>
      <li><strong>Gynoecium:</strong> Bicarpellary, syncarpous, superior ovary, bilocular, obliquely placed ovary with <strong>swollen placenta</strong> bearing numerous ovules with axile placentation.</li>
    </ul>
    <strong>Floral Formula of Solanaceae:</strong><br>
    $$\\oplus \\; \\text{ \u26A5 } \\; \\text{K}_{(5)} \\; \\overgroup{\\text{C}_{(5)} \\quad \\text{A}_{5}} \\; \\underline{\\text{G}}_{(2)}$$
  </div>`,
  '4 Marks',
  [
    ['Semi-technical description of Fabaceae (papilionaceous, diadelphous 9+1, monocarpellary)', '1.5 Marks'],
    ['Accurate floral formula of Fabaceae', '0.5 Mark'],
    ['Semi-technical description of Solanaceae (actinomorphic, persistent calyx, epipetalous, swollen placenta)', '1.5 Marks'],
    ['Accurate floral formula of Solanaceae', '0.5 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch5-q10', 'Question 10', 'NCERT Exercise',
  'Describe the various types of placentations found in flowering plants.',
  `<div class="step">
    <strong>Detailed Description of the Five Primary Types of Placentation:</strong><br><br>
    <strong>1. Marginal Placentation:</strong><br>
    The placenta forms a continuous ridge along the <strong>ventral suture</strong> of a monocarpellary unilocular ovary, and ovules are borne in two alternating rows along the ridge. <em>Example: Pea (Pisum), Gram, Bean.</em><br><br>
    <strong>2. Axile Placentation:</strong><br>
    The ovary is multicarpellary, syncarpous, and partitioned into two or more chambers (multilocular) by radial septa. The walls of carpels meet at the central axis where the placenta forms, bearing ovules in each locule. <em>Examples: Tomato, China rose, Lemon, Orange.</em><br><br>
    <strong>3. Parietal Placentation:</strong><br>
    The ovules develop on the <strong>inner peripheral wall</strong> of a syncarpous, unilocular ovary. In some cases (such as Brassicaceae), the ovary becomes falsely two-chambered due to the development of a false septum called the <strong>replum</strong>. <em>Examples: Mustard, Argemone.</em><br><br>
    <strong>4. Free Central Placentation:</strong><br>
    The ovules are borne on a distinct central axis column in a unilocular ovary, and septa are completely absent. <em>Examples: Dianthus, Primrose (Primula).</em><br><br>
    <strong>5. Basal Placentation:</strong><br>
    The placenta develops directly at the <strong>base of the ovary</strong> and bears a <strong>single solitary ovule</strong>. <em>Examples: Sunflower (Helianthus), Marigold (Tagetes).</em>
  </div>`,
  '4 Marks',
  [
    ['Marginal placentation with Pea example', '0.8 Mark'],
    ['Axile placentation with Tomato/Citrus example', '0.8 Mark'],
    ['Parietal placentation and false septum (replum) with Mustard example', '0.8 Mark'],
    ['Free central placentation with Dianthus example', '0.8 Mark'],
    ['Basal placentation with Sunflower example', '0.8 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c11b-ch5-q11', 'Question 11', 'NCERT Exercise',
  'What is a flower? Describe the parts of a typical angiosperm flower.',
  `<div class="step">
    <strong>Definition of a Flower:</strong><br>
    A flower is a specialized, condensed reproductive shoot of angiosperms, bearing modified leaves adapted for sexual reproduction and the subsequent production of seeds and fruits.<br><br>
    <strong>Four Concentric Whorls of a Typical Flower (from Outermost to Innermost):</strong><br><br>
    <strong>1. Calyx (Outermost Non-Essential Whorl):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Composed of individual units called <strong>sepals</strong>, which are typically green and leaf-like.</li>
      <li>Protects the delicate internal floral organs in the bud condition.</li>
    </ul>
    <strong>2. Corolla (Second Non-Essential Whorl):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Composed of individual units called <strong>petals</strong>, brightly colored and often fragrant.</li>
      <li>Attracts pollinating agents (insects, birds) and shields sexual organs.</li>
    </ul>
    <strong>3. Androecium (Male Reproductive Whorl):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Composed of <strong>stamens</strong> (microsporophylls). Each stamen consists of a slender stalk (filament) and a terminal bilobed <strong>anther</strong>.</li>
      <li>Each anther lobe contains two pollen sacs (microsporangia) producing haploid pollen grains.</li>
    </ul>
    <strong>4. Gynoecium / Pistil (Female Reproductive Whorl):</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Composed of one or more <strong>carpels</strong> (megasporophylls). Each carpel consists of three parts:
        <ul style="margin:2px 0 4px 15px;">
          <li><strong>Stigma:</strong> Sticky receptive terminal landing platform for pollen grains.</li>
          <li><strong>Style:</strong> Slender elongated neck through which the pollen tube travels.</li>
          <li><strong>Ovary:</strong> Swollen basal portion containing one or more ovules attached to the placenta.</li>
        </ul>
      </li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Definition of flower as modified reproductive shoot', '1 Mark'],
    ['Calyx (sepals) and Corolla (petals) descriptions and functions', '1 Mark'],
    ['Androecium (stamens, filament, anther, pollen sacs)', '1 Mark'],
    ['Gynoecium (carpels, stigma, style, ovary with ovules)', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c11b-ch5-q12', 'Question 12', 'NCERT Exercise',
  'How do the various leaf modifications help plants?',
  `<div class="step">
    <strong>Adaptive Value of Diverse Leaf Modifications:</strong><br>
    Leaves frequently undergo structural modifications beyond photosynthesis to aid survival:<br><br>
    <strong>1. Leaf Tendrils (Climbing Support):</strong><br>
    In weak-stemmed plants, entire leaves or leaflets modify into slender, sensitive, coiling filaments that twine around supports to elevate the photosynthetic foliage towards light. <em>Example: Wild pea (Lathyrus), Garden pea (Pisum sativum).</em><br><br>
    <strong>2. Leaf Spines (Defense &amp; Xerophytic Water Conservation):</strong><br>
    In arid xerophytes, leaves are reduced to sharp, stiff spines. This dramatically minimizes surface area for transpiration and protects succulents from herbivorous predators. <em>Example: Opuntia, Cactus, Aloe.</em><br><br>
    <strong>3. Fleshy Storage Leaves (Food &amp; Water Reserves):</strong><br>
    Fleshy scale leaves store reserves of water, mucilage, and carbohydrates. <em>Example: Onion and Garlic bulbs, Bryophyllum.</em><br><br>
    <strong>4. Phyllodes (Photosynthesis with Reduced Transpiration):</strong><br>
    In <em>Acacia auriculiformis</em> (Australian acacia), the bipinnate lamina sheds early. The petiole flattens into a sickle-shaped green blade called a <strong>phyllode</strong>, which synthesizes food while losing minimal water through transpiration.<br><br>
    <strong>5. Insect Traps (Carnivorous Nitrogen Supplementation):</strong><br>
    Leaves modify into pitchers (<em>Nepenthes</em>), bladders (<em>Utricularia</em>), or snapping traps (<em>Dionaea</em>) to capture insects and digest them to obtain nitrogenous compounds in nutrient-poor bogs.
  </div>`,
  '3 Marks',
  [
    ['Leaf tendrils for climbing support (Pea) and leaf spines for defense/water saving (Opuntia)', '1 Mark'],
    ['Fleshy leaves for food/water storage (Onion, Aloe)', '1 Mark'],
    ['Phyllode (Australian Acacia) and insectivorous modifications (Nepenthes, Utricularia)', '1 Mark']
  ]
));

// Q13
questions.push(createQCard(
  'c11b-ch5-q13', 'Question 13', 'NCERT Exercise',
  'Define the term inflorescence. Explain the basis for the different types of inflorescence in flowering plants.',
  `<div class="step">
    <strong>Definition of Inflorescence:</strong><br>
    An <strong>inflorescence</strong> is the natural arrangement and mode of distribution of a cluster of flowers on the floral axis (called the <strong>peduncle</strong> or mother axis) of a plant.<br><br>
    <strong>Basis of Classification into Major Types:</strong><br>
    Inflorescences are classified primarily on whether the main growing apex continues to grow indefinitely or terminates in the formation of a flower:<br><br>
    <strong>1. Racemose Inflorescence (Indeterminate / Indefinite Growth):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>The main axis (peduncle) <strong>continues to grow</strong> continuously by its apical bud and does not terminate in a flower.</li>
      <li>Flowers are produced laterally in <strong>acropetal succession</strong> (oldest flowers at the base, youngest buds towards the growing apex).</li>
      <li>In flat-topped inflorescences, the opening of flowers is <strong>centripetal</strong> (from periphery towards center).</li>
    </ul>
    <strong>2. Cymose Inflorescence (Determinate / Definite Growth):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>The apical bud of the main axis <strong>terminates in a flower</strong>, arresting further vertical growth of the peduncle.</li>
      <li>Further growth continues via lateral branches arising below the terminal flower, each also terminating in a flower.</li>
      <li>Flowers are arranged in <strong>basipetal succession</strong> (terminal apical flower is the oldest, youngest flowers are towards the base).</li>
      <li>In flat-topped cymes, flower opening is <strong>centrifugal</strong> (from center towards periphery).</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Accurate definition of inflorescence and floral axis (peduncle)', '1 Mark'],
    ['Racemose criteria: continuous apical growth, acropetal succession, centripetal opening', '1 Mark'],
    ['Cymose criteria: apical flower termination, basipetal succession, centrifugal opening', '1 Mark']
  ]
));

// Q14
questions.push(createQCard(
  'c11b-ch5-q14', 'Question 14', 'NCERT Exercise',
  'Write the floral formula of an actinomorphic, bisexual, hypogynous flower with five united sepals, five free petals, five free stamens and two united carpels with superior ovary and axile placentation.',
  `<div class="step">
    <strong>Step-by-Step Derivation of the Floral Formula:</strong><br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>1. Actinomorphic (Radial Symmetry):</strong> Represented by the symbol &mdash; $\\oplus$</li>
      <li><strong>2. Bisexual (Hermaphrodite / Perfect Flower):</strong> Represented by &mdash; $\\text{\u26A5}$</li>
      <li><strong>3. Calyx:</strong> 5 united sepals (gamosepalous) &mdash; $\\text{K}_{(5)}$</li>
      <li><strong>4. Corolla:</strong> 5 free petals (polypetalous) &mdash; $\\text{C}_{5}$</li>
      <li><strong>5. Androecium:</strong> 5 free stamens (polyandrous, not epipetalous) &mdash; $\\text{A}_{5}$</li>
      <li><strong>6. Gynoecium:</strong> Bicarpellary (2), united carpels (syncarpous &mdash; enclosed in brackets), superior ovary (hypogynous &mdash; line under G) &mdash; $\\underline{\\text{G}}_{(2)}$</li>
    </ul>
    <br>
    <strong>Final Accurate Floral Formula:</strong><br>
    $$\\oplus \\; \\text{ \u26A5 } \\; \\text{K}_{(5)} \\; \\text{C}_{5} \\; \\text{A}_{5} \\; \\underline{\\text{G}}_{(2)}$$
  </div>`,
  '2 Marks',
  [
    ['Correct symbols for symmetry (\\oplus) and sexuality (\\text{\u26A5})', '0.5 Mark'],
    ['Correct representation of calyx K(5) and corolla C5', '0.5 Mark'],
    ['Correct representation of androecium A5', '0.5 Mark'],
    ['Correct representation of gynoecium \\underline{G}(2)', '0.5 Mark']
  ]
));

// Save Chapter 5
saveChapter(
  5,
  'Morphology of Flowering Plants',
  svgCh5,
  'NCERT Textbook Exercise 1 to 14: Roots, Stems, Leaves, Inflorescence, Flowers, Placentation & Floral Formulas',
  questions,
  'Anatomy of Flowering Plants'
);
