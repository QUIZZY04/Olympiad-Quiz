// scripts/builders/gen-c12b-ch6.js
// Chapter 6: Evolution (10 Questions)
const { createQCard, saveChapter } = require('./c12b-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#059669; font-size:1.05rem;">🧬 Evolutionary Biology: Adaptive Radiation, Natural Selection & Human Phylogeny</h4>
  <svg viewBox="0 0 880 300" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #d1fae5;">
    <!-- Darwin's Finches / Adaptive Radiation -->
    <rect x="20" y="20" width="260" height="260" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="150" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">Adaptive Radiation</text>
    <line x1="35" y1="58" x2="265" y2="58" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="150" cy="120" r="32" fill="#10b981"/>
    <text x="150" y="118" font-family="sans-serif" font-size="10" font-weight="bold" fill="white" text-anchor="middle">Common</text>
    <text x="150" y="130" font-family="sans-serif" font-size="10" font-weight="bold" fill="white" text-anchor="middle">Ancestor</text>

    <!-- Radiation arrows -->
    <line x1="150" y1="88" x2="150" y2="68" stroke="#059669" stroke-width="2"/>
    <text x="150" y="66" font-family="sans-serif" font-size="10" fill="#065f46" text-anchor="middle">Insectivorous Finch</text>

    <line x1="178" y1="105" x2="225" y2="90" stroke="#059669" stroke-width="2"/>
    <text x="240" y="88" font-family="sans-serif" font-size="10" fill="#065f46" text-anchor="start">Cactus Finch</text>

    <line x1="178" y1="135" x2="225" y2="150" stroke="#059669" stroke-width="2"/>
    <text x="240" y="155" font-family="sans-serif" font-size="10" fill="#065f46" text-anchor="start">Seed-eating Finch</text>

    <line x1="122" y1="135" x2="70" y2="150" stroke="#059669" stroke-width="2"/>
    <text x="65" y="155" font-family="sans-serif" font-size="10" fill="#065f46" text-anchor="end">Vegetarian Tree Finch</text>

    <text x="35" y="195" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Key Examples:</text>
    <text x="35" y="213" font-family="sans-serif" font-size="11" fill="#334155">&bull; Darwin's Finches (Galapagos Is.)</text>
    <text x="35" y="231" font-family="sans-serif" font-size="11" fill="#334155">&bull; Australian Marsupials</text>
    <text x="35" y="249" font-family="sans-serif" font-size="11" fill="#334155">&bull; Convergent Evolution: Placental mammals</text>

    <!-- Natural Selection Modes -->
    <rect x="310" y="20" width="260" height="260" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="440" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Modes of Natural Selection</text>
    <line x1="325" y1="58" x2="555" y2="58" stroke="#3b82f6" stroke-width="1.5"/>

    <!-- Curves -->
    <g transform="translate(325, 70)">
      <path d="M 10 50 Q 40 5, 70 50" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <text x="40" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">1. Stabilising</text>
      <text x="40" y="78" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">(Mean favoured)</text>

      <path d="M 90 50 Q 135 10, 150 50" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <text x="120" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">2. Directional</text>
      <text x="120" y="78" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">(One extreme)</text>

      <path d="M 170 45 Q 185 10, 195 40 Q 210 10, 225 45" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <text x="200" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">3. Disruptive</text>
      <text x="200" y="78" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">(Two extremes)</text>
    </g>

    <text x="325" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af">Hardy-Weinberg Principle:</text>
    <text x="325" y="195" font-family="sans-serif" font-size="11" fill="#334155">&bull; p + q = 1 and p&sup2; + 2pq + q&sup2; = 1</text>
    <text x="325" y="213" font-family="sans-serif" font-size="11" fill="#334155">&bull; Factors disrupting equilibrium:</text>
    <text x="335" y="229" font-family="sans-serif" font-size="10.5" fill="#475569">Gene flow, Genetic drift (Founder effect),</text>
    <text x="335" y="244" font-family="sans-serif" font-size="10.5" fill="#475569">Mutation, Recombination & Selection</text>

    <!-- Human Evolution Stages -->
    <rect x="600" y="20" width="260" height="260" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
    <text x="730" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">Chronology of Human Evolution</text>
    <line x1="615" y1="58" x2="845" y2="58" stroke="#ef4444" stroke-width="1.5"/>

    <text x="615" y="78" font-family="sans-serif" font-size="11" fill="#334155"><strong>15 mya:</strong> Dryopithecus & Ramapithecus</text>
    <text x="615" y="96" font-family="sans-serif" font-size="11" fill="#334155"><strong>3-4 mya:</strong> Australopithecines (walked upright)</text>
    <text x="615" y="114" font-family="sans-serif" font-size="11" fill="#334155"><strong>2 mya:</strong> <em>Homo habilis</em> (Tool maker)</text>
    <text x="630" y="130" font-family="sans-serif" font-size="10.5" fill="#047857">&bull; Brain capacity: 650 - 800 cc (did not eat meat)</text>

    <text x="615" y="152" font-family="sans-serif" font-size="11" fill="#334155"><strong>1.5 mya:</strong> <em>Homo erectus</em> (Java Man)</text>
    <text x="630" y="168" font-family="sans-serif" font-size="10.5" fill="#047857">&bull; Brain capacity: 900 cc (ate meat)</text>

    <text x="615" y="190" font-family="sans-serif" font-size="11" fill="#334155"><strong>100,000-40,000 ya:</strong> Neanderthal Man</text>
    <text x="630" y="206" font-family="sans-serif" font-size="10.5" fill="#047857">&bull; Brain capacity: 1,400 cc (buried dead)</text>

    <text x="615" y="228" font-family="sans-serif" font-size="11" fill="#334155"><strong>75,000-10,000 ya:</strong> <em>Homo sapiens</em></text>
    <text x="630" y="244" font-family="sans-serif" font-size="10.5" fill="#047857">&bull; Modern human (brain ~1,450 cc, agriculture)</text>
  </svg>
</div>`;

const questions = [];

// Q1
questions.push(createQCard(
  'c12b-ch6-q1',
  'Q1',
  'Exercises (NCERT Verbatim)',
  'Explain antibiotic resistance observed in bacteria in light of Darwinian selection theory.',
  `<p>The emergence of antibiotic resistance in bacterial colonies is a classic modern demonstration of <strong>natural selection in action (anthropogenic selection)</strong>:</p>
  <ol>
    <li><strong>Pre-existing Genetic Variation:</strong> In any large bacterial population, spontaneous gene mutations occur at a low background frequency. A microscopic fraction of individual bacteria fortuitously possess pre-existing mutant alleles that confer resistance to a specific antibiotic (e.g., enzyme breaking down penicillin or altered cell-wall permeability).</li>
    <li><strong>Environmental Selection Pressure:</strong> When the bacterial colony is exposed to an antibiotic, it creates a powerful selective environmental pressure.
      <ul>
        <li>Sensitive, non-resistant bacteria lack protective mutations and are killed off in large numbers.</li>
        <li>The pre-existing resistant mutant bacteria survive the lethal antibiotic exposure.</li>
      </ul>
    </li>
    <li><strong>Differential Reproduction (Survival of the Fittest):</strong> The surviving resistant individuals now have access to unhindered space and nutrients. They rapidly reproduce by binary fission and pass on the resistance genes to their progeny (and horizontally to other bacteria via R-plasmids).</li>
    <li><strong>Population Shift:</strong> Over successive generations, the proportion of antibiotic-resistant bacteria increases exponentially until the entire bacterial population becomes resistant.</li>
  </ol>
  <p><strong>Conclusion:</strong> Antibiotic resistance did not evolve <em>de novo</em> in response to the drug (Lamarckian need); rather, natural selection simply selected pre-existing resistant variants that possessed greater fitness under the altered environmental condition.</p>`,
  '3 Marks',
  [
    ['Pre-existing genetic variation (spontaneous mutations before antibiotic exposure)', '1 Mark'],
    ['Application of antibiotic as a selective agent eliminating non-resistant bacteria', '1 Mark'],
    ['Differential survival and reproduction of resistant mutants leading to population shift', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c12b-ch6-q2',
  'Q2',
  'Exercises (NCERT Verbatim)',
  'Find out from newspapers and popular science articles any new fossil discoveries or controversies about evolution.',
  `<p>Fossil discoveries and paleontological controversies continuously refine the tree of life:</p>
  <ol>
    <li><strong>Recent Landmark Fossil Discoveries:</strong>
      <ul>
        <li><strong><em>Homo naledi</em> (Rising Star Cave, South Africa):</strong> Primitive hominin fossils discovered by Lee Berger with a brain size resembling <em>Australopithecus</em> (450–550 cc) but exhibiting modern human-like wrist, hand, and foot bones, and evidence of intentional mortuary disposal of dead bodies.</li>
        <li><strong>Denisovans (Denisova Cave, Siberia):</strong> High-resolution DNA extracted from a finger bone and teeth revealed a distinct archaic human sister group that interbred with both Neanderthals and ancestors of modern Melanesians and Indigenous Australians.</li>
        <li><strong>Feathered Non-Avian Dinosaurs (Liaoning, China):</strong> Fossils such as <em>Microraptor gui</em> and <em>Anchiornis</em> possessing asymmetrical aerodynamic flight feathers, confirming the dinosaurian origin of birds.</li>
      </ul>
    </li>
    <li><strong>Major Scientific Controversies in Evolutionary Biology:</strong>
      <ul>
        <li><strong>Gradualism vs Punctuated Equilibrium:</strong> Debate between Darwin's model of slow, uniform phyletic gradualism versus Stephen Jay Gould and Niles Eldredge's model of long periods of stasis interrupted by rapid bursts of speciation.</li>
        <li><strong>Neanderthal-Modern Human Interbreeding:</strong> Whether archaic hominins were completely displaced (Out of Africa model) or underwent significant genetic admixture with migrating <em>Homo sapiens</em> (confirmed by genomic evidence: 1–2% Neanderthal DNA in non-African populations).</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['Mention of significant recent hominin or vertebrate fossil discoveries (e.g., Homo naledi / Denisovans / feathered dinosaurs)', '1.5 Marks'],
    ['Discussion of prominent evolutionary debates (Punctuated Equilibrium vs Phyletic Gradualism or Neanderthal admixture)', '1.5 Marks']
  ]
));

// Q3
questions.push(createQCard(
  'c12b-ch6-q3',
  'Q3',
  'Exercises (NCERT Verbatim)',
  'Attempt giving a clear definition of the term species.',
  `<p><strong>Biological Species Concept (Ernst Mayr, 1942):</strong></p>
  <div style="background:#f0fdf4; padding:12px 16px; border:1px solid #86efac; border-radius:8px; margin:10px 0; font-size:1.02rem; color:#065f46;">
    A <strong>species</strong> is a group of naturally occurring, interbreeding or potentially interbreeding natural populations that are <strong>reproductively isolated</strong> from other such groups, share a common gene pool, and produce <strong>viable, fertile offspring</strong>.
  </div>

  <p><strong>Key Essential Criteria of a Biological Species:</strong></p>
  <ol>
    <li><strong>Interbreeding:</strong> Members within the group can freely mate and exchange genes under natural conditions.</li>
    <li><strong>Production of Fertile Progeny:</strong> The offspring resulting from mating must be viable and capable of reproducing themselves (e.g., a cross between horse and donkey produces a sterile Mule; hence horse and donkey are distinct biological species).</li>
    <li><strong>Reproductive Isolation:</strong> Intrinsic biological isolating mechanisms (pre-zygotic or post-zygotic barriers like behavioural, mechanical, seasonal, or genetic incompatibility) prevent gene flow between different species.</li>
    <li><strong>Common Gene Pool & Evolutionary Ancestry:</strong> Members share common karyotypic and morphological homologies derived from a recent common ancestor.</li>
  </ol>`,
  '2 Marks',
  [
    ['Ernst Mayr biological species definition: naturally interbreeding populations producing fertile offspring', '1 Mark'],
    ['Criteria of reproductive isolation and shared common gene pool', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c12b-ch6-q4',
  'Q4',
  'Exercises (NCERT Verbatim)',
  'Try to trace the various components of human evolution (hint: brain size and function, skeletal structure, dietary preference, etc.)',
  `<p>Human evolution traces the anatomical and behavioural transition from arboreal primates to bipedal, tool-making, culturally sophisticated modern humans:</p>
  
  <table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:0.88rem;">
    <thead>
      <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
        <th style="padding:6px 10px; color:#065f46;">Stage & Geological Age</th>
        <th style="padding:6px 10px; color:#065f46;">Cranial Capacity (Brain Size)</th>
        <th style="padding:6px 10px; color:#065f46;">Skeletal & Locomotor Structure</th>
        <th style="padding:6px 10px; color:#065f46;">Dietary Habits & Key Traits</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;"><strong>1. Dryopithecus & Ramapithecus</strong><br>(~15 mya)</td>
        <td style="padding:6px 10px;">Ape-sized small brain (~350–400 cc)</td>
        <td style="padding:6px 10px;">Hairy, walked like gorillas/chimpanzees; Ramapithecus was more man-like with semi-erect posture.</td>
        <td style="padding:6px 10px;">Herbivorous, ate nuts, leaves, and tough vegetation.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;"><strong>2. Australopithecines</strong><br>(~3–4 mya, East Africa)</td>
        <td style="padding:6px 10px;">~450–500 cc</td>
        <td style="padding:6px 10px;">Full bipedal locomotion, erect posture, lumbar curve, height &lt; 4 feet.</td>
        <td style="padding:6px 10px;">Essentially ate fruits, hunted with stone weapons.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;"><strong>3. <em>Homo habilis</em></strong><br>(Handy Man, ~2 mya)</td>
        <td style="padding:6px 10px;"><strong>650–800 cc</strong></td>
        <td style="padding:6px 10px;">First human-like hominid; opposable thumb adapted for making stone tools.</td>
        <td style="padding:6px 10px;">Did <strong>not</strong> eat meat (largely vegetarian).</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;"><strong>4. <em>Homo erectus</em></strong><br>(Java Man, ~1.5 mya)</td>
        <td style="padding:6px 10px;"><strong>~900 cc</strong></td>
        <td style="padding:6px 10px;">Fully upright posture, robust skeleton, prominent supraorbital brow ridges.</td>
        <td style="padding:6px 10px;">Probably <strong>ate meat</strong>; first to harness and use fire for warmth and cooking.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;"><strong>5. Neanderthal Man</strong><br>(100,000–40,000 ya)</td>
        <td style="padding:6px 10px;"><strong>~1,400 cc</strong></td>
        <td style="padding:6px 10px;">Short, muscular, heavily built body adapted for harsh Ice Age cold.</td>
        <td style="padding:6px 10px;">Carnivorous hunters; used animal hides to protect bodies and <strong>buried their dead</strong> with rituals.</td>
      </tr>
      <tr style="background:#f8fafc;">
        <td style="padding:6px 10px;"><strong>6. <em>Homo sapiens</em></strong><br>(Modern Man, 75,000–10,000 ya)</td>
        <td style="padding:6px 10px;"><strong>~1,350–1,500 cc</strong></td>
        <td style="padding:6px 10px;">High forehead, distinct chin, reduced jaw, slender gracile skeleton.</td>
        <td style="padding:6px 10px;">Omnivorous; developed prehistoric cave art (18,000 ya), agriculture, and settled civilizations (10,000 ya).</td>
      </tr>
    </tbody>
  </table>`,
  '4 Marks',
  [
    ['Tracing chronological stages: Australopithecus, Homo habilis, Homo erectus, Neanderthal, Homo sapiens', '1 Mark'],
    ['Brain size progression (450 -> 650-800 -> 900 -> 1400 -> 1450 cc)', '1 Mark'],
    ['Skeletal modifications (bipedalism, upright posture, precision grip)', '1 Mark'],
    ['Dietary transitions (fruit eating -> meat eating) and cultural advances (fire, tools, burial, cave art)', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c12b-ch6-q5',
  'Q5',
  'Exercises (NCERT Verbatim)',
  'Find out through internet and popular science articles whether animals other than man have self-consciousness.',
  `<p><strong>Self-consciousness</strong> is the cognitive capacity of an organism to recognise itself as an individual separate from the environment and other individuals.</p>
  <ol>
    <li><strong>The Mirror Self-Recognition (MSR) Test:</strong>
      <ul>
        <li>Devised by Gordon Gallup Jr. in 1970. An odourless dye or mark is placed on a part of the animal's body that it can only see when looking in a mirror.</li>
        <li>If the animal touches or investigates the mark on its own body (rather than attacking the mirror image as a conspecific intruder), it demonstrates mirror self-recognition and bodily self-awareness.</li>
      </ul>
    </li>
    <li><strong>Animals Demonstrating Self-Consciousness:</strong>
      <ul>
        <li><strong>Great Apes:</strong> Chimpanzees, Bonobos, and Orangutans consistently pass the mirror test and demonstrate self-directed grooming.</li>
        <li><strong>Cetaceans (Marine Mammals):</strong> Bottlenose Dolphins and Killer Whales (Orcas) inspect marks on their bodies in underwater mirrors and possess complex social pods and vocal dialects.</li>
        <li><strong>Asian Elephants:</strong> Exhibit self-recognition in giant mirrors, show empathy, grieve their dead, and display metacognition.</li>
        <li><strong>Corvids (Birds):</strong> Eurasian Magpies are the only non-mammals verified to pass the mirror self-recognition test.</li>
      </ul>
    </li>
  </ol>
  <p><strong>Conclusion:</strong> While humans possess the most sophisticated, symbolic, and metacognitive self-consciousness, rudimentary to advanced self-consciousness is scientifically proven in several non-human mammals and birds.</p>`,
  '2 Marks',
  [
    ['Definition of self-consciousness and explanation of Mirror Self-Recognition (MSR) test', '1 Mark'],
    ['Listing proven animal examples: Chimpanzees, Dolphins, Elephants, and Eurasian Magpies', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c12b-ch6-q6',
  'Q6',
  'Exercises (NCERT Verbatim)',
  'List 10 modern-day animals and using the internet resources link it to a corresponding ancient fossil. Name both.',
  `<p>The genealogical relationship between modern animals and their ancient fossil ancestors provides conclusive palaeontological proof of common descent:</p>
  
  <table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:0.88rem;">
    <thead>
      <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
        <th style="padding:6px 10px; color:#065f46;">#</th>
        <th style="padding:6px 10px; color:#065f46;">Modern-Day Animal</th>
        <th style="padding:6px 10px; color:#065f46;">Ancient Fossil Ancestor</th>
        <th style="padding:6px 10px; color:#065f46;">Key Evolutionary Transition Feature</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;">1</td>
        <td style="padding:6px 10px;"><strong>Horse</strong> (<em>Equus</em>)</td>
        <td style="padding:6px 10px;"><em>Eohippus</em> (Hyracotherium)</td>
        <td style="padding:6px 10px;">Fox-sized, 4 toes on forelimb &rarr; single central hooved digit in modern horse.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;">2</td>
        <td style="padding:6px 10px;"><strong>Birds</strong> (Aves)</td>
        <td style="padding:6px 10px;"><em>Archaeopteryx lithographica</em></td>
        <td style="padding:6px 10px;">Connecting link between reptiles and birds (toothed beak, clawed wings, feathered tail).</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;">3</td>
        <td style="padding:6px 10px;"><strong>Whale</strong> (Cetacea)</td>
        <td style="padding:6px 10px;"><em>Pakicetus</em> / <em>Basilosaurus</em></td>
        <td style="padding:6px 10px;">Four-legged terrestrial artiodactyl &rarr; fully aquatic streamlined whale with vestigial pelvic bones.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;">4</td>
        <td style="padding:6px 10px;"><strong>Elephant</strong> (<em>Elephas</em>)</td>
        <td style="padding:6px 10px;"><em>Moeritherium</em> / <em>Mammuthus</em></td>
        <td style="padding:6px 10px;">Tapir-like animal &rarr; elongated proboscis (trunk) and enlarged second upper incisors (tusks).</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;">5</td>
        <td style="padding:6px 10px;"><strong>Modern Man</strong> (<em>Homo sapiens</em>)</td>
        <td style="padding:6px 10px;"><em>Australopithecus afarensis</em> ("Lucy")</td>
        <td style="padding:6px 10px;">Arboreal climber &rarr; upright obligate biped with expanding brain case.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;">6</td>
        <td style="padding:6px 10px;"><strong>Camel</strong> (<em>Camelus</em>)</td>
        <td style="padding:6px 10px;"><em>Protylopus</em></td>
        <td style="padding:6px 10px;">Rabbit-sized Eocene desert dweller with un-fused foot bones.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;">7</td>
        <td style="padding:6px 10px;"><strong>Amphibians</strong> (Frogs/Salamanders)</td>
        <td style="padding:6px 10px;"><em>Ichthyostega</em> / <em>Tiktaalik</em></td>
        <td style="padding:6px 10px;">Transition between lobe-finned fish (Sarcopterygii) and earliest 4-limbed tetrapods.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;">8</td>
        <td style="padding:6px 10px;"><strong>Mammals</strong></td>
        <td style="padding:6px 10px;"><em>Morganucodon</em> / Therapsids</td>
        <td style="padding:6px 10px;">Synapsid mammal-like reptiles evolving hair, heterodont dentition, and middle ear ossicles.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;">9</td>
        <td style="padding:6px 10px;"><strong>Giraffe</strong> (<em>Giraffa</em>)</td>
        <td style="padding:6px 10px;"><em>Sivatherium</em> / <em>Samotherium</em></td>
        <td style="padding:6px 10px;">Short-necked deer-like ungulate evolving elongated cervical vertebrae.</td>
      </tr>
      <tr style="background:#f8fafc;">
        <td style="padding:6px 10px;">10</td>
        <td style="padding:6px 10px;"><strong>Turtle</strong> (Testudines)</td>
        <td style="padding:6px 10px;"><em>Odontochelys</em> / <em>Proganochelys</em></td>
        <td style="padding:6px 10px;">Ancient toothed reptile with plastron (belly shell) before the evolution of the full dorsal carapace.</td>
      </tr>
    </tbody>
  </table>`,
  '3 Marks',
  [
    ['Accurately pairing modern animals with ancient fossil ancestors (Horse-Eohippus, Birds-Archaeopteryx, Whale-Pakicetus, etc.)', '2 Marks'],
    ['Describing key morphological transition traits for the lineage pairs', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c12b-ch6-q7',
  'Q7',
  'Exercises (NCERT Verbatim)',
  'Practise drawing various animals and plants.',
  `<p><strong>CBSE Pedagogical Guidelines for Biological Drawings:</strong></p>
  <p>Morphological and anatomical drawings in evolutionary biology provide visual comprehension of homologous structures, analogous adaptations, and vestigial remnants.</p>
  <ul>
    <li><strong>Homologous Anatomical Structures:</strong>
      <ul>
        <li><strong>Forelimb bones of Mammals:</strong> Draw the comparative skeletal framework of Man, Cheetah, Whale (flipper), and Bat (wing) highlighting the common structural pattern of <em>Humerus, Radius, Ulna, Carpals, Metacarpals, and Phalanges</em>, illustrating <strong>divergent evolution</strong>.</li>
        <li><strong>Plant Homologies:</strong> Bougainvillea thorns (stem adaptation) and Cucurbita tendrils (stem adaptation) arising from the axillary bud position.</li>
      </ul>
    </li>
    <li><strong>Analogous Structures:</strong>
      <ul>
        <li>Wings of butterfly (membranous fold of chitin with no skeleton) and wings of bird (feathers supported by bony limb bones), illustrating <strong>convergent evolution</strong>.</li>
        <li>Eye of octopus and eye of mammal; flippers of penguins and flippers of dolphins; sweet potato (root tuber) and potato (stem tuber).</li>
      </ul>
    </li>
  </ul>`,
  '2 Marks',
  [
    ['Homologous structures (mammalian forelimbs / Bougainvillea thorn & Cucurbita tendril)', '1 Mark'],
    ['Analogous structures (wings of insect & bird / eye of octopus & mammal)', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c12b-ch6-q8',
  'Q8',
  'Exercises (NCERT Verbatim)',
  'Describe one example of adaptive radiation.',
  `<p><strong>Definition:</strong></p>
  <p><strong>Adaptive radiation</strong> is the evolutionary process in which an ancestral stock radiates outward from a common point of origin into different geographical niches or habitats, diversifying into multiple morphologically distinct species adapted to specific ecological roles.</p>

  <p><strong>Classic Example: Darwin's Finches of the Galapagos Islands:</strong></p>
  <ol>
    <li>Charles Darwin observed an extraordinary variety of small black birds on the isolated Galapagos archipelago.</li>
    <li><strong>Common Origin:</strong> All the diverse finch species evolved on the island itself from an original seed-eating ancestral bird that had drifted from the South American mainland.</li>
    <li><strong>Radiative Specialisation:</strong> In the absence of mainland competitors, the birds radiated into diverse ecological niches on different islands:
      <ul>
        <li><strong>Vegetarian tree finches:</strong> Developed short, stout parrot-like beaks for consuming buds and leaves.</li>
        <li><strong>Insectivorous tree finches:</strong> Developed sharp, curved grasping beaks for plucking insects from bark crevices.</li>
        <li><strong>Woodpecker finches:</strong> Learned to hold cactus spines in their beaks to probe tree holes for grubs (tool use).</li>
        <li><strong>Cactus ground finches:</strong> Developed long, decurved beaks for opening cactus flowers and fruits.</li>
        <li><strong>Large, medium, and small ground finches:</strong> Developed heavily crushed crushing beaks of various sizes specialised for cracking tough seeds.</li>
      </ul>
    </li>
    <li><strong>Conclusion:</strong> From one original seed-eating ancestor, natural selection favoured diverse beak adaptations matching different feeding niches, exemplifying <em>adaptive radiation</em>.</li>
  </ol>`,
  '3 Marks',
  [
    ['Precise definition of adaptive radiation (evolution of different species starting from a point and radiating to other habitats)', '1 Mark'],
    ['Detailed example: Darwin\'s Finches in Galapagos archipelago with common seed-eating ancestor', '1 Mark'],
    ['Morphological differentiation in beaks matching distinct ecological/feeding niches (insectivorous, cactus, seed-eating)', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c12b-ch6-q9',
  'Q9',
  'Exercises (NCERT Verbatim)',
  'Can we call human evolution as adaptive radiation?',
  `<p><strong>No, human evolution is NOT considered a typical example of adaptive radiation.</strong></p>
  <p><strong>Scientific Justification:</strong></p>
  <ol>
    <li><strong>Definition of Adaptive Radiation:</strong> Adaptive radiation requires a single ancestral lineage to diverge and split simultaneously into multiple diverse, coexisting species that radiate outward into different ecological habitats and dietary niches (e.g., Darwin's finches or Australian marsupials).</li>
    <li><strong>Human Evolution is Primarily Anagenesis (Linear Chronological Progression):</strong>
      <ul>
        <li>The evolutionary trajectory from <em>Ramapithecus &rarr; Australopithecus &rarr; Homo habilis &rarr; Homo erectus &rarr; Homo sapiens</em> is largely anagenetic (chronological progressive succession of successive hominid species over time), with one species replacing another rather than radiating into multiple distinct ecological niches.</li>
      </ul>
    </li>
    <li><strong>Single Extant Species:</strong> Today, there is only <strong>one single extant human species</strong> across the entire planet: <em>Homo sapiens</em>. Humans did not undergo morphological diversification into separate species to occupy diverse habitats; instead, humans adapted through <strong>cultural, technological, and intellectual tools</strong> (fire, clothing, shelter, agriculture).</li>
  </ol>`,
  '2 Marks',
  [
    ['Clear negative answer (No, not an example of adaptive radiation)', '0.5 Mark'],
    ['Contrast between adaptive radiation (branching into many co-existing ecological species) vs human evolution (linear anagenesis/succession)', '1 Mark'],
    ['Only one extant species (Homo sapiens) adapted culturally and technologically across all habitats', '0.5 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c12b-ch6-q10',
  'Q10',
  'Exercises (NCERT Verbatim)',
  'Using various resources such as your school Library or the internet and discussions with your teacher, trace the evolutionary stages of any one animal say horse.',
  `<p>The evolutionary pedigree of the horse (family <strong>Equidae</strong>) represents one of the most complete and extensively documented fossil records in vertebrate palaeontology, spanning roughly 55 million years across the Cenozoic era:</p>

  <table style="width:100%; border-collapse:collapse; margin-top:10px; font-size:0.88rem;">
    <thead>
      <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
        <th style="padding:6px 10px; color:#065f46;">Stage / Genus</th>
        <th style="padding:6px 10px; color:#065f46;">Geological Epoch</th>
        <th style="padding:6px 10px; color:#065f46;">Body Height</th>
        <th style="padding:6px 10px; color:#065f46;">Digit (Foot) Morphology & Dentition</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;"><strong>1. <em>Eohippus</em></strong><br>(Hyracotherium / Dawn Horse)</td>
        <td style="padding:6px 10px;">Eocene (~55 mya)</td>
        <td style="padding:6px 10px;">~30 cm (size of fox/hare)</td>
        <td style="padding:6px 10px;">Forelimbs with <strong>4 functional digits</strong>, hindlimbs with 3 digits. Low-crowned (brachydont) teeth for browsing soft leaves.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;"><strong>2. <em>Mesohippus</em></strong><br>(Intermediate Horse)</td>
        <td style="padding:6px 10px;">Oligocene (~35 mya)</td>
        <td style="padding:6px 10px;">~60 cm (size of sheep)</td>
        <td style="padding:6px 10px;">3 digits on both fore and hind feet; middle digit (digit III) enlarged bearing most body weight.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:6px 10px;"><strong>3. <em>Merychippus</em></strong><br>(Ruminating Horse)</td>
        <td style="padding:6px 10px;">Miocene (~20 mya)</td>
        <td style="padding:6px 10px;">~100 cm</td>
        <td style="padding:6px 10px;">3 digits on all feet, but side digits reduced to non-touching splints; middle toe bears entire body weight. High-crowned (hypsodont) teeth with cement for grazing silica-rich grass.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:6px 10px;"><strong>4. <em>Pliohippus</em></strong><br>(First One-Toed Horse)</td>
        <td style="padding:6px 10px;">Pliocene (~5 mya)</td>
        <td style="padding:6px 10px;">~120 cm</td>
        <td style="padding:6px 10px;"><strong>Monodactyl:</strong> Single central toe (digit III) terminating in a hoof; lateral digits reduced to inner splint bones. Fast runner.</td>
      </tr>
      <tr style="background:#f8fafc;">
        <td style="padding:6px 10px;"><strong>5. <em>Equus</em></strong><br>(Modern Horse)</td>
        <td style="padding:6px 10px;">Pleistocene to Present</td>
        <td style="padding:6px 10px;">~150–160 cm</td>
        <td style="padding:6px 10px;">Single large hooved toe on each foot adapted for galloping on open grasslands. Complex folded enamel ridges on molars for grinding abrasive grasses.</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Summary of Major Evolutionary Trends in Horse Evolution:</strong></p>
  <ol>
    <li>Steady progressive increase in overall body size and limb length.</li>
    <li>Reduction in digit number from 4/3 to a single functional hooved digit (monodactyly).</li>
    <li>Elongation of head, neck, and cannon bones.</li>
    <li>Shift from browsing low-crowned teeth to grazing high-crowned (hypsodont) teeth with complex enamel folding.</li>
  </ol>`,
  '3 Marks',
  [
    ['Listing 5 chronological stages: Eohippus -> Mesohippus -> Merychippus -> Pliohippus -> Equus', '1 Mark'],
    ['Morphological shifts in digits (reduction from 4/3 toes to single central hooved digit)', '1 Mark'],
    ['Dental transition (brachydont browsing teeth to hypsodont grazing teeth) and size increase', '1 Mark']
  ]
));

saveChapter(
  6,
  'Evolution',
  svgDiagram,
  'NCERT Exercises (10 Verbatim Questions)',
  questions,
  'Human Health and Disease'
);
