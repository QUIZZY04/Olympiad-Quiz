// scripts/builders/gen-c11b-ch17.js
// Chapter 17: Locomotion and Movement (All 12 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh17 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
      Sarcomere Architecture &amp; Sliding Filament Mechanism
    </div>
    <svg viewBox="0 0 850 240" width="100%" height="auto" style="max-height:240px; font-family:'Plus Jakarta Sans',sans-serif;">
      <rect x="10" y="10" width="830" height="220" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      
      <!-- Sarcomere Diagram on Left -->
      <g transform="translate(30, 20)">
        <text x="185" y="20" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">ANATOMY OF A RELAXED SARCOMERE (Z-LINE TO Z-LINE)</text>
        
        <!-- Left Z-line -->
        <path d="M 50,45 L 45,70 L 55,95 L 45,120 L 55,145 L 50,170" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="50" y="185" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="middle">Z-Line</text>

        <!-- Right Z-line -->
        <path d="M 320,45 L 315,70 L 325,95 L 315,120 L 325,145 L 320,170" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="320" y="185" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="middle">Z-Line</text>

        <!-- Thin Actin filaments (Blue) -->
        <line x1="50" y1="70" x2="160" y2="70" stroke="#2563eb" stroke-width="3"/>
        <line x1="50" y1="95" x2="160" y2="95" stroke="#2563eb" stroke-width="3"/>
        <line x1="50" y1="120" x2="160" y2="120" stroke="#2563eb" stroke-width="3"/>
        <line x1="50" y1="145" x2="160" y2="145" stroke="#2563eb" stroke-width="3"/>

        <line x1="210" y1="70" x2="320" y2="70" stroke="#2563eb" stroke-width="3"/>
        <line x1="210" y1="95" x2="320" y2="95" stroke="#2563eb" stroke-width="3"/>
        <line x1="210" y1="120" x2="320" y2="120" stroke="#2563eb" stroke-width="3"/>
        <line x1="210" y1="145" x2="320" y2="145" stroke="#2563eb" stroke-width="3"/>

        <!-- Thick Myosin filaments (Red/Purple) in middle -->
        <line x1="110" y1="82" x2="260" y2="82" stroke="#ea580c" stroke-width="6"/>
        <line x1="110" y1="107" x2="260" y2="107" stroke="#ea580c" stroke-width="6"/>
        <line x1="110" y1="132" x2="260" y2="132" stroke="#ea580c" stroke-width="6"/>

        <!-- M-line center -->
        <line x1="185" y1="60" x2="185" y2="155" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2,2"/>
        <text x="185" y="168" font-size="7.5" fill="#64748b" text-anchor="middle">M-Line</text>

        <!-- Band annotations -->
        <text x="185" y="40" font-size="8" font-weight="bold" fill="#ea580c" text-anchor="middle">&larr; A-Band (Anisotropic &mdash; constant length) &rarr;</text>
        <text x="185" y="76" font-size="7" fill="#b45309" text-anchor="middle">H-Zone</text>
      </g>

      <!-- Sliding Filament Steps on Right -->
      <g transform="translate(420, 20)">
        <rect x="0" y="0" width="400" height="195" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="200" y="22" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">CROSS-BRIDGE CYCLE OF MUSCLE CONTRACTION</text>

        <rect x="15" y="35" width="370" height="34" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="48" font-size="8" font-weight="bold" fill="#059669">1. Ca2+ Release &amp; Tropomyosin Displacement:</text>
        <text x="25" y="60" font-size="7.5" fill="#334155">Ca2+ binds Troponin C &rarr; unmasks myosin-binding sites on actin.</text>

        <rect x="15" y="74" width="370" height="34" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="87" font-size="8" font-weight="bold" fill="#2563eb">2. Cross-Bridge Formation:</text>
        <text x="25" y="99" font-size="7.5" fill="#334155">Myosin head hydrolyzes ATP (ADP + Pi) and binds actin filament.</text>

        <rect x="15" y="113" width="370" height="34" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="126" font-size="8" font-weight="bold" fill="#dc2626">3. Power Stroke (Sliding):</text>
        <text x="25" y="138" font-size="7.5" fill="#334155">Myosin head tilts 45&deg;, pulling actin toward M-line (H-zone &amp; I-band shorten).</text>

        <rect x="15" y="152" width="370" height="34" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="25" y="165" font-size="8" font-weight="bold" fill="#7c3aed">4. Cross-Bridge Detachment:</text>
        <text x="25" y="177" font-size="7.5" fill="#334155">Fresh ATP binds myosin head; cross-bridge breaks, resetting the cycle.</text>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch17-q1', 'Question 1', 'NCERT Exercise',
  'Suitable examples of amoeboid, ciliary and muscular movement.',
  `<div class="step">
    <strong>The Three Major Types of Movements Exhibited by Human Cells:</strong><br><br>
    <strong>1. Amoeboid Movement:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li><em>Mechanism:</em> Effected by the extension of blunt cytoplasmic projections called <strong>pseudopodia</strong>, driven by streaming movements of microfilaments (actin cytoskeleton).</li>
      <li><em>Examples in Humans:</em> <strong>Macrophage leukocytes</strong> and <strong>neutrophil leukocytes</strong> in blood and connective tissues crawling through capillary walls via <strong>diapedesis</strong> to phagocytose invading pathogens. Also in unicellular <em>Amoeba</em>.</li>
    </ul>
    <strong>2. Ciliary Movement:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li><em>Mechanism:</em> Driven by the coordinated, metachronal, rhythmic beating of thousands of hair-like <strong>cilia</strong> ($9 + 2$ axoneme structure).</li>
      <li><em>Examples in Humans:</em>
        <ul style="margin:2px 0 4px 15px;">
          <li>Inner ciliated lining of the <strong>respiratory tract (trachea and bronchioles)</strong> to sweep inhaled dust particles and trapped mucus upward toward the throat.</li>
          <li>Inner ciliated lining of the <strong>female Fallopian tubes (oviducts)</strong> to propel the ovum from the peritoneal cavity toward the uterus.</li>
        </ul>
      </li>
    </ul>
    <strong>3. Muscular Movement:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li><em>Mechanism:</em> Produced by the active, coordinated contraction and relaxation of specialized muscular tissues containing contractile actin-myosin myofibrils.</li>
      <li><em>Examples in Humans:</em> Movement of the <strong>jaw, tongue, limbs (arms and legs) during walking and running</strong>, peristaltic contractions of the gastrointestinal tract, and pumping of the heart.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Amoeboid movement: pseudopodia, actin microfilaments, macrophages/neutrophils (diapedesis)', '1 Mark'],
    ['Ciliary movement: coordinated cilia beating in trachea/bronchioles & fallopian tubes', '1 Mark'],
    ['Muscular movement: contractile actin-myosin in limbs, tongue, jaws, locomotion', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch17-q2', 'Question 2', 'NCERT Exercise',
  'Differentiate between: (a) Actin and Myosin (b) Red and White muscle (c) Pectoral and Pelvic girdle.',
  `<div class="step">
    <strong>(a) Differences Between Actin and Myosin Filaments:</strong><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:4px 0; font-size:0.83rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:4px 8px;">Feature</th><th style="padding:4px 8px;">Actin (Thin Filament)</th><th style="padding:4px 8px;">Myosin (Thick Filament)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:4px 8px; font-weight:700;">Diameter &amp; Band</td><td style="padding:4px 8px;">Thin (~7 nm); forms the isotropic <strong>I-band</strong>.</td><td style="padding:4px 8px;">Thick (~15 nm); forms the anisotropic <strong>A-band</strong>.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:4px 8px; font-weight:700;">Subunit Composition</td><td style="padding:4px 8px;">Polymer of 2 helically wound F-actins + <strong>tropomyosin</strong> + <strong>troponin</strong> complex.</td><td style="padding:4px 8px;">Polymer of ~300 <strong>meromyosin</strong> molecules (heavy meromyosin / HMM + light meromyosin / LMM).</td></tr>
          <tr><td style="padding:4px 8px; font-weight:700;">Enzymatic Activity</td><td style="padding:4px 8px;">Possesses no ATPase activity.</td><td style="padding:4px 8px;">Globular head possesses active <strong>ATPase enzyme</strong> site and actin-binding site.</td></tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>(b) Differences Between Red and White Muscle Fibres:</strong><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:4px 0; font-size:0.83rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:4px 8px;">Feature</th><th style="padding:4px 8px;">Red Muscle Fibres (Slow-Twitch / Type I)</th><th style="padding:4px 8px;">White Muscle Fibres (Fast-Twitch / Type II)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:4px 8px; font-weight:700;">Myoglobin Content</td><td style="padding:4px 8px; color:#b91c1c; font-weight:700;">Very high (deep red appearance).</td><td style="padding:4px 8px;">Very low / scarce (pale, whitish appearance).</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:4px 8px; font-weight:700;">Mitochondria &amp; Respiration</td><td style="padding:4px 8px;">Abundant mitochondria; relies on <strong>aerobic respiration</strong>.</td><td style="padding:4px 8px;">Few mitochondria; relies on <strong>anaerobic glycolysis</strong>.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:4px 8px; font-weight:700;">Fatigue Resistance</td><td style="padding:4px 8px;">Slow contraction velocity; <strong>highly resistant to fatigue</strong> (e.g., extensor back muscles, flight muscles of migratory birds).</td><td style="padding:4px 8px;">Rapid powerful contraction; <strong>fatigues quickly</strong> due to lactic acid accumulation (e.g., eye muscles, sparrow flight muscles).</td></tr>
          <tr><td style="padding:4px 8px; font-weight:700;">Sarcoplasmic Reticulum</td><td style="padding:4px 8px;">Moderate.</td><td style="padding:4px 8px;">Extensively developed for rapid $Ca^{2+}$ release.</td></tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>(c) Differences Between Pectoral and Pelvic Girdle:</strong><br>
    The <strong>Pectoral Girdle</strong> (shoulder) articulates the upper forelimbs; consists of 2 halves, each formed of a <strong>clavicle (collar bone)</strong> and a flat triangular <strong>scapula</strong> bearing a shallow <strong>glenoid cavity</strong> for the head of the humerus (allows extreme mobility).<br>
    The <strong>Pelvic Girdle</strong> (hip) articulates the lower hindlimbs; formed of 2 massive coxal bones united at the pubic symphysis, each formed by the fusion of three bones: <strong>ilium, ischium, and pubis</strong>, bearing a deep cup-shaped <strong>acetabulum</strong> for the head of the femur (built for heavy weight-bearing and stability).
  </div>`,
  '5 Marks',
  [
    ['(a) Actin (thin, I-band, troponin/tropomyosin) vs Myosin (thick, A-band, HMM/LMM, ATPase)', '1.5 Marks'],
    ['(b) Red muscle (high myoglobin, aerobic, fatigue-resistant) vs White muscle (anaerobic, rapid fatigue)', '2 Marks'],
    ['(c) Pectoral (clavicle, scapula, glenoid cavity) vs Pelvic (ilium/ischium/pubis, acetabulum)', '1.5 Marks']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch17-q3', 'Question 3', 'NCERT Exercise',
  'Match Column I with Column II:<br>(a) Fast muscle fibres &mdash;&mdash;&mdash;&mdash;&mdash; (i) Myoglobin<br>(b) Slow muscle fibres &mdash;&mdash;&mdash;&mdash;&mdash; (ii) Lactic acid<br>(c) Actin filament &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; (iii) I-band<br>(d) Sarcomere &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash; (iv) Between two Z-lines',
  `<div class="step">
    <strong>Accurate Column Matching:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Column I</th>
            <th style="padding:8px 12px; color:#065f46;">Column II (Correct Match)</th>
            <th style="padding:8px 12px; color:#065f46;">Biological Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(a) Fast muscle fibres</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(ii) Lactic acid</td>
            <td style="padding:8px 12px;">White fast-twitch fibers rely on anaerobic glycolysis, accumulating lactic acid during intense contraction.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(b) Slow muscle fibres</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(i) Myoglobin</td>
            <td style="padding:8px 12px;">Red slow-twitch fibers are richly packed with oxygen-storing red pigment myoglobin.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(c) Actin filament</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(iii) I-band</td>
            <td style="padding:8px 12px;">Thin actin filaments constitute the light, isotropic band (I-band) of the myofibril.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">(d) Sarcomere</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">(iv) Between two Z-lines</td>
            <td style="padding:8px 12px;">The functional contractile unit of a muscle fiber delimited between two successive Z-lines.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>Final Option Matching Sequence:</strong><br>
    <strong>(a) &rarr; (ii), &nbsp; (b) &rarr; (i), &nbsp; (c) &rarr; (iii), &nbsp; (d) &rarr; (iv)</strong>
  </div>`,
  '2 Marks',
  [
    ['(a) to (ii) Lactic acid', '0.5 Mark'],
    ['(b) to (i) Myoglobin', '0.5 Mark'],
    ['(c) to (iii) I-band', '0.5 Mark'],
    ['(d) to (iv) Between two Z-lines', '0.5 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch17-q4', 'Question 4', 'NCERT Exercise',
  'What are the key stages in the sliding filament theory of muscle contraction?',
  `<div class="step">
    <strong>Key Stages of the Sliding Filament Theory (Huxley &amp; Hanson, 1954):</strong><br>
    The sliding filament theory states that muscle contraction occurs by the sliding of thin actin filaments over thick myosin filaments toward the center of the sarcomere, without any change in the actual length of either filament:<br><br>
    <ol style="margin:4px 0 8px 20px;">
      <li><strong>Neuromuscular Transmission &amp; Action Potential:</strong><br>
      A nerve impulse arrives at the neuromuscular junction (motor end plate), stimulating synaptic release of the neurotransmitter <strong>acetylcholine (ACh)</strong>. ACh binds sarcolemmal receptors, generating an action potential that spreads deep into the muscle fiber via transverse (T) tubules.</li>
      <li><strong>Release of Calcium Ions ($Ca^{2+}$):</strong><br>
      Depolarization causes the <strong>sarcoplasmic reticulum</strong> to release a flood of stored $Ca^{2+}$ ions into the sarcoplasm.</li>
      <li><strong>Unmasking of Active Sites on Actin:</strong><br>
      $Ca^{2+}$ binds specifically to the subunit <strong>Troponin C</strong>. This induces a conformational shift that pulls the filamentous <strong>tropomyosin</strong> away from the active sites on actin, exposing the myosin-binding sites.</li>
      <li><strong>Cross-Bridge Formation &amp; Power Stroke:</strong><br>
      The globular head of myosin hydrolyzes ATP ($ATP \\xrightarrow{} ADP + P_i$) via its intrinsic ATPase enzyme. The energized myosin head binds to the exposed active site on actin, forming a <strong>cross-bridge</strong>.<br>
      Myosin releases $ADP + P_i$ and tilts its head $45^\\circ$ (<strong>power stroke</strong>), pulling the attached thin actin filaments inward toward the center of the sarcomere (M-line). This causes the <strong>I-bands to shorten</strong> and the <strong>H-zone to disappear</strong>, while the <strong>A-band length remains completely unchanged</strong>.</li>
      <li><strong>Cross-Bridge Detachment:</strong><br>
      A fresh molecule of ATP binds to the myosin head, breaking the cross-bridge. Hydrolysis of this ATP resets the myosin head to its energized upright state for the next cycle.</li>
      <li><strong>Relaxation:</strong><br>
      When motor nerve impulses cease, $Ca^{2+}$ ions are actively pumped back into the sarcoplasmic reticulum by $Ca^{2+}$-ATPase. Troponin resumes its inhibitory position, tropomyosin covers actin sites, and the sarcomere returns to its relaxed length.</li>
    </ol>
  </div>`,
  '5 Marks',
  [
    ['1. Neuromuscular impulse & acetylcholine release triggering action potential', '1 Mark'],
    ['2. Ca2+ release from sarcoplasmic reticulum and binding to Troponin C', '1 Mark'],
    ['3. Unmasking of actin sites and cross-bridge formation via ATP hydrolysis', '1 Mark'],
    ['4. Power stroke: sliding of actin over myosin, shortening of I-band & H-zone (A-band unchanged)', '1 Mark'],
    ['5. Cross-bridge detachment by fresh ATP & Ca2+ reuptake relaxation', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch17-q5', 'Question 5', 'NCERT Exercise',
  'Write true or false. If false change them into true:<br>(a) Actin is present in thin filament.<br>(b) H-zone of striated muscle fibre represents both thick and thin filaments.<br>(c) Human skeleton has 206 bones.<br>(d) There are 11 pairs of ribs in man.<br>(e) Sternum is present on ventral side of body.',
  `<div class="step">
    <strong>Evaluation and Corrections of Anatomical Statements:</strong><br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>(a) Actin is present in thin filament. &mdash; TRUE</strong><br>
      <em>Reason:</em> Thin filaments are primarily composed of two filamentous F-actin polymers wound together with tropomyosin and troponin.</li>
      <li><strong>(b) H-zone of striated muscle fibre represents both thick and thin filaments. &mdash; FALSE</strong><br>
      <strong>True Statement:</strong> The H-zone of a striated muscle fibre represents the central region of the A-band that consists <strong>strictly of thick (myosin) filaments only</strong>, not overlapped by thin actin filaments.</li>
      <li><strong>(c) Human skeleton has 206 bones. &mdash; TRUE</strong><br>
      <em>Reason:</em> The adult human skeleton consists of 206 distinct bones (80 in the axial skeleton and 126 in the appendicular skeleton).</li>
      <li><strong>(d) There are 11 pairs of ribs in man. &mdash; FALSE</strong><br>
      <strong>True Statement:</strong> There are <strong>12 pairs (24 total) of ribs</strong> in humans (7 pairs true ribs, 3 pairs vertebrochondral false ribs, and 2 pairs floating ribs).</li>
      <li><strong>(e) Sternum is present on ventral side of body. &mdash; TRUE</strong><br>
      <em>Reason:</em> The sternum (breastbone) is a flat bone located along the mid-ventral line of the thorax.</li>
    </ul>
  </div>`,
  '2.5 Marks',
  [
    ['(a) True', '0.5 Mark'],
    ['(b) False (Corrected: H-zone contains only thick myosin filaments without actin overlap)', '0.5 Mark'],
    ['(c) True', '0.5 Mark'],
    ['(d) False (Corrected: 12 pairs of ribs)', '0.5 Mark'],
    ['(e) True', '0.5 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch17-q6', 'Question 6', 'NCERT Exercise',
  'Write the differences between: (a) Flexor and Extensor muscle (b) Tendon and Ligament (c) Bone and Cartilage.',
  `<div class="step">
    <strong>(a) Differences Between Flexor and Extensor Muscles:</strong><br>
    <ul style="margin:2px 0 6px 20px;">
      <li><em>Flexor Muscle:</em> A muscle whose contraction <strong>decreases the angle</strong> at a joint, bending the limb (e.g., <strong>Biceps brachii</strong> flexing the forearm at the elbow joint; hamstrings flexing the knee).</li>
      <li><em>Extensor Muscle:</em> An antagonistic muscle whose contraction <strong>increases the angle</strong> at a joint, straightening the limb (e.g., <strong>Triceps brachii</strong> extending the forearm; quadriceps extending the leg).</li>
    </ul>
    <strong>(b) Differences Between Tendon and Ligament:</strong><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:4px 0; font-size:0.83rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:1.5px solid #059669; text-align:left;">
            <th style="padding:4px 8px;">Feature</th><th style="padding:4px 8px;">Tendon</th><th style="padding:4px 8px;">Ligament</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:4px 8px; font-weight:700;">Connection</td><td style="padding:4px 8px; color:#16a34a; font-weight:700;">Connects <strong>skeletal muscle to bone</strong>.</td><td style="padding:4px 8px; color:#2563eb; font-weight:700;">Connects <strong>bone to bone</strong> at a joint.</td></tr>
          <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:4px 8px; font-weight:700;">Fiber Type</td><td style="padding:4px 8px;">Composed of tough, inelastic, parallel bundles of <strong>white collagen fibers</strong>.</td><td style="padding:4px 8px;">Composed of elastic, flexible <strong>yellow elastin fibers</strong> with scattered collagen.</td></tr>
          <tr><td style="padding:4px 8px; font-weight:700;">Elasticity</td><td style="padding:4px 8px;">Inelastic with high tensile strength (transmits mechanical pull).</td><td style="padding:4px 8px;">Highly elastic and flexible (stabilizes joint while permitting movement).</td></tr>
        </tbody>
      </table>
    </div>
    <br>
    <strong>(c) Differences Between Bone and Cartilage:</strong><br>
    <ul style="margin:2px 0 4px 20px;">
      <li><em>Bone:</em> Hard, rigid, non-pliable matrix heavily impregnated with calcium phosphate salts ($Ca_3(PO_4)_2$ &mdash; hydroxyapatite) and ossein protein. Richly vascularized with <strong>Haversian systems (osteons)</strong>; living cells are <strong>osteocytes</strong>.</li>
      <li><em>Cartilage:</em> Solid, semi-rigid, but <strong>pliable matrix</strong> composed of <strong>chondroitin sulfate</strong> and collagen; completely avascular (lacks blood vessels and Haversian canals); living cells are <strong>chondrocytes</strong> residing in lacunae.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['(a) Flexor (decreases joint angle, biceps) vs Extensor (straightens limb, triceps)', '1 Mark'],
    ['(b) Tendon (muscle to bone, collagen, inelastic) vs Ligament (bone to bone, elastin, flexible)', '1.5 Marks'],
    ['(c) Bone (calcium hydroxyapatite, rigid, Haversian canals) vs Cartilage (chondroitin, pliable, avascular)', '1.5 Marks']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch17-q7', 'Question 7', 'NCERT Exercise',
  'What are the various types of joints in the human body? Give examples. (Fibrous/synarthrosis, Cartilaginous/amphiarthrosis, Synovial/diarthrosis: ball-and-socket, hinge, pivot, gliding, saddle).',
  `<div class="step">
    <strong>Classification of Skeletal Joints in the Human Body:</strong><br>
    Joints are structural points of articulation between two or more bones or between bone and cartilage. Classified into three major anatomical categories:<br><br>
    <strong>1. Fibrous (Immovable / Synarthrodial) Joints:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Bones are tightly interlocked and fused end-to-end by dense fibrous white collagenous connective tissue, permitting <strong>zero movement</strong>.</li>
      <li><em>Examples:</em> <strong>Sutures of the human cranium</strong> (skull bones); gomphoses (teeth in socket).</li>
    </ul>
    <strong>2. Cartilaginous (Slightly Movable / Amphiarthrodial) Joints:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Bones are joined together by a disc or pad of fibrocartilage, permitting <strong>limited, slight movement</strong>.</li>
      <li><em>Examples:</em> <strong>Intervertebral discs</strong> between adjacent vertebrae in the backbone; pubic symphysis.</li>
    </ul>
    <strong>3. Synovial (Freely Movable / Diarthrodial) Joints:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li>Characterized by the presence of a fluid-filled <strong>synovial cavity</strong> between the articulating surfaces of two bones, enclosed within a fibrous articular capsule and lined by synovial membrane secreting lubricating <strong>synovial fluid</strong>. Permits extensive mobility. Subtypes:
        <ul style="margin:2px 0 4px 15px;">
          <li><em>(i) Ball and Socket Joint:</em> Multiaxial movement in all planes (e.g., between humerus and glenoid cavity of pectoral girdle &mdash; <strong>shoulder joint</strong>; between femur and acetabulum of pelvic girdle &mdash; <strong>hip joint</strong>).</li>
          <li><em>(ii) Hinge Joint:</em> Uniaxial movement like a door hinge (e.g., <strong>knee joint</strong>, <strong>elbow joint</strong>, interphalangeal joints).</li>
          <li><em>(iii) Pivot Joint:</em> Rotational movement around a central axis (e.g., between <strong>atlas and axis</strong> vertebrae; radioulnar joint).</li>
          <li><em>(iv) Gliding Joint:</em> Flat bones slide over one another (e.g., between the <strong>carpals of the wrist</strong>).</li>
          <li><em>(v) Saddle Joint:</em> Biaxial joint where articulating surfaces are reciprocally saddle-shaped (e.g., between <strong>carpal and metacarpal of the human thumb</strong>).</li>
        </ul>
      </li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['1. Fibrous joints: zero movement, skull sutures', '1 Mark'],
    ['2. Cartilaginous joints: slight movement, intervertebral discs & pubic symphysis', '1 Mark'],
    ['3. Synovial joints: fluid cavity, capsule, full movement', '1 Mark'],
    ['Five synovial subtypes with examples: Ball & socket, Hinge, Pivot, Gliding, Saddle', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch17-q8', 'Question 8', 'NCERT Exercise',
  'Fill in the blank spaces:<br>(a) All mammals (except a few) have _______ cervical vertebra.<br>(b) The number of phalanges in each limb of human is _______.<br>(c) Thin filament of myofibril contains 2 \'F\' actins and two other proteins namely _______ and _______.<br>(d) In a muscle fibre $Ca^{++}$ is stored in _______.<br>(e) _______ and _______ pairs of ribs are called floating ribs.<br>(f) The human cranium is made of _______ bones.',
  `<div class="step">
    <strong>Accurate Textual Completions:</strong><br><br>
    <ul style="margin:4px 0 8px 20px;">
      <li>(a) All mammals (except a few like sloths and manatees) have <strong>7 (seven)</strong> cervical vertebrae.</li>
      <li>(b) The number of phalanges in each limb of human is <strong>14 (fourteen)</strong> &mdash; formula: $2, 3, 3, 3, 3$.</li>
      <li>(c) Thin filament of myofibril contains 2 'F' actins and two other proteins namely <strong>tropomyosin</strong> and <strong>troponin</strong>.</li>
      <li>(d) In a muscle fibre $Ca^{++}$ is stored in the <strong>sarcoplasmic reticulum</strong> (cisternae).</li>
      <li>(e) <strong>11th</strong> and <strong>12th</strong> pairs of ribs are called floating ribs (their anterior ends are completely free and not attached to sternum).</li>
      <li>(f) The human cranium is made of <strong>8 (eight)</strong> bones (1 frontal, 2 parietal, 2 temporal, 1 occipital, 1 sphenoid, 1 ethmoid).</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['(a) 7 cervical vertebrae & (b) 14 phalanges', '1 Mark'],
    ['(c) tropomyosin and troponin & (d) sarcoplasmic reticulum', '1 Mark'],
    ['(e) 11th and 12th floating ribs & (f) 8 cranial bones', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch17-q9', 'Question 9', 'NCERT Exercise',
  'Name the type of joint between:<br>(a) atlas / axis<br>(b) carpal / metacarpal of thumb<br>(c) between phalanges<br>(d) femur / acetabulum<br>(e) between cranial bones<br>(f) between pubic bones in the pelvic girdle.',
  `<div class="step">
    <strong>Precise Identification of Anatomical Joints:</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Articulating Bones</th>
            <th style="padding:8px 12px; color:#065f46;">Specific Joint Classification</th>
            <th style="padding:8px 12px; color:#065f46;">Biomechanical Movement Permitted</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(a) Atlas and Axis (C1 and C2)</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Pivot Joint (Synovial)</td>
            <td style="padding:8px 12px;">Allows side-to-side rotational movement ("no" movement of head).</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(b) Carpal and Metacarpal of Thumb</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Saddle Joint (Synovial)</td>
            <td style="padding:8px 12px;">Biaxial motion permitting opposable thumb grip and rotation.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(c) Between Phalanges</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Hinge Joint (Synovial)</td>
            <td style="padding:8px 12px;">Uniaxial flexion and extension in a single angular plane.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(d) Femur and Acetabulum</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Ball and Socket Joint (Hip Joint)</td>
            <td style="padding:8px 12px;">Multiaxial movement in all planes with high stability.</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">(e) Between Cranial Bones</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Fibrous Joint (Sutures)</td>
            <td style="padding:8px 12px;">Completely immovable synarthrosis protecting the brain.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">(f) Between Pubic Bones in Pelvic Girdle</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">Cartilaginous Joint (Pubic Symphysis)</td>
            <td style="padding:8px 12px;">Slightly movable amphiarthrosis; relaxes during parturition.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['(a) Pivot joint & (b) Saddle joint', '1 Mark'],
    ['(c) Hinge joint & (d) Ball and socket joint', '1 Mark'],
    ['(e) Fibrous joint (suture) & (f) Cartilaginous joint (pubic symphysis)', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch17-q10', 'Question 10', 'NCERT Exercise',
  'Describe the structure of a sarcomere.',
  `<div class="step">
    <strong>Microscopic Anatomy of a Sarcomere (The Functional Unit of Muscle Contraction):</strong><br>
    A <strong>sarcomere</strong> is the repeating structural and functional segment of a myofibril bounded between two successive <strong>Z-lines</strong>. A single muscle fiber contains thousands of linearly arranged sarcomeres:<br><br>
    <strong>Key Structural Zones and Lines of a Sarcomere:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>1. Z-Line (Zwischenscheibe / Krause's Membrane):</strong> A dark, thin, elastic proteinaceous zigzag partition line that bisects each I-band. Thin actin filaments are firmly anchored to the Z-line. The distance from one Z-line to the next constitutes <strong>one sarcomere (~2.5 $\\mu m$ long in relaxed state)</strong>.</li>
      <li><strong>2. I-Band (Isotropic Band):</strong> The light band containing <strong>only thin actin filaments</strong>, appearing isotropic under polarized light. Bisected centrally by the Z-line.</li>
      <li><strong>3. A-Band (Anisotropic Band):</strong> The dark band occupying the central region of the sarcomere, corresponding to the full length of the <strong>thick myosin filaments</strong>. In its peripheral overlapping zones, each thick filament is surrounded by six thin filaments.</li>
      <li><strong>4. H-Zone (Hensen's Zone):</strong> The paler central region of the A-band where thick myosin filaments are <strong>not overlapped by thin actin filaments</strong> in the relaxed state.</li>
      <li><strong>5. M-Line (Mittelscheibe):</strong> A fine, delicate proteinaceous line running down the exact center of the H-zone that holds adjacent thick myosin filaments together.</li>
    </ul>
    <em>During Contraction: The two Z-lines are pulled closer together; the I-bands shorten, the H-zone narrows and vanishes, while the A-band maintains a constant length.</em>
  </div>`,
  '4 Marks',
  [
    ['Definition of sarcomere as functional unit bounded between two successive Z-lines', '1 Mark'],
    ['Description of I-band (actin only) and A-band (full length of thick myosin filaments)', '1.5 Marks'],
    ['Description of H-zone (un-overlapped central myosin) and central M-line', '1 Mark'],
    ['Changes during contraction: shortening of sarcomere, I-band, H-zone; A-band unchanged', '0.5 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c11b-ch17-q11', 'Question 11', 'NCERT Exercise',
  'What is the role of $Ca^{2+}$ in muscle contraction? (Binding to troponin C, exposing myosin binding sites on actin).',
  `<div class="step">
    <strong>Crucial Regulatory Role of Calcium Ions ($Ca^{2+}$) in Excitation-Contraction Coupling:</strong><br><br>
    <strong>1. Resting State &mdash; Tropomyosin Steric Hindrance:</strong><br>
    In a resting, relaxed muscle fiber, the sarcoplasmic calcium concentration is kept extremely low ($<10^{-7}\\text{ M}$) by active SERCA pumps. Under these conditions, the filamentous protein <strong>tropomyosin</strong> physically covers and masks the myosin-binding sites on the actin filament, preventing cross-bridge formation.<br><br>
    <strong>2. Release of $Ca^{2+}$ from Sarcoplasmic Reticulum:</strong><br>
    When an action potential arrives via the T-tubule system, ryanodine receptor channels open, releasing massive quantities of $Ca^{2+}$ from the terminal cisternae of the sarcoplasmic reticulum into the sarcoplasm (raising $[Ca^{2+}]$ to $>10^{-5}\\text{ M}$).<br><br>
    <strong>3. Binding to Troponin C &amp; Conformational Shift:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li>Free $Ca^{2+}$ ions bind specifically to the <strong>Troponin C ($TnC$)</strong> subunit of the troponin complex.</li>
      <li>This binding induces an instantaneous conformational change in the troponin molecule.</li>
      <li>The conformational change pulls the attached <strong>tropomyosin filament away</strong> from its blocking position, completely exposing the active catalytic myosin-binding sites on the F-actin strands.</li>
    </ul>
    <strong>4. Cross-Bridge Cycling:</strong><br>
    Once sites are exposed, energized myosin heads bind to actin to initiate cross-bridge cycling and the power stroke. When $Ca^{2+}$ is actively pumped back into the sarcoplasmic reticulum, troponin resets, tropomyosin covers the sites, and the muscle relaxes.<br><br>
    <strong>Conclusion:</strong> Calcium acts as the indispensable <strong>molecular on-off switch</strong> that couples membrane electrical excitation directly to mechanical filament sliding.
  </div>`,
  '3 Marks',
  [
    ['Resting state inhibition: Tropomyosin physically masking myosin-binding sites on actin', '1 Mark'],
    ['Action potential triggering Ca2+ flood from sarcoplasmic reticulum', '1 Mark'],
    ['Ca2+ binding to Troponin C pulling tropomyosin aside to expose binding sites for contraction', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c11b-ch17-q12', 'Question 12', 'NCERT Exercise',
  'What are the common disorders of the muscular and skeletal system? (Myasthenia gravis, Tetany, Muscular dystrophy, Arthritis, Osteoporosis, Gout).',
  `<div class="step">
    <strong>Clinical Pathology of Muscular and Skeletal Disorders:</strong><br><br>
    <strong>A. Muscular Disorders:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li><strong>1. Myasthenia Gravis:</strong> An autoimmune disorder where the immune system produces autoantibodies against <strong>nicotinic acetylcholine receptors</strong> at the neuromuscular junction. Characterized by progressive muscle fatigue, weakness, and eventual paralysis of skeletal muscles (often affecting eyelid, facial, and swallowing muscles).</li>
      <li><strong>2. Tetany:</strong> Rapid, sustained, painful involuntary muscle spasms and twitches caused by <strong>hypocalcemia</strong> (low ionic calcium $[Ca^{2+}]$ in body fluids), which increases neuronal sodium permeability and causes repetitive spontaneous firing. (Common in hypoparathyroidism).</li>
      <li><strong>3. Muscular Dystrophy:</strong> Progressive, genetic, degenerative hereditary disorder of skeletal muscles, most commonly Duchenne Muscular Dystrophy (X-linked recessive) caused by a mutation in the gene encoding the structural protein <strong>dystrophin</strong>, causing muscle wasting and premature death.</li>
    </ul>
    <strong>B. Skeletal Disorders:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li><strong>4. Arthritis:</strong> Inflammation of one or more joints, causing swelling, stiffness, and severe pain. Types include:
        <ul style="margin:2px 0 4px 15px;">
          <li><em>Osteoarthritis:</em> Age-related degenerative wear-and-tear of articular cartilage.</li>
          <li><em>Rheumatoid Arthritis:</em> Autoimmune attack on the synovial membrane, forming inflammatory pannus.</li>
        </ul>
      </li>
      <li><strong>5. Osteoporosis:</strong> Age-related systemic skeletal disease characterized by <strong>reduced bone mineral density (BMD)</strong> and microarchitectural deterioration of bone tissue, making bones fragile and prone to fractures (especially hip, spine, and wrist). Common in post-menopausal women due to falling <strong>estrogen levels</strong>.</li>
      <li><strong>6. Gout (Gouty Arthritis):</strong> Inflammation and agonizing pain in joints (characteristically the big toe / metatarsophalangeal joint) caused by the deposition of sharp, needle-like <strong>monosodium urate crystals</strong> due to elevated blood uric acid levels (hyperuricemia).</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Myasthenia gravis (autoimmune anti-ACh receptor) & Tetany (hypocalcemic spasms)', '1.5 Marks'],
    ['Muscular dystrophy (genetic degenerative dystrophin mutation)', '0.5 Mark'],
    ['Arthritis (osteo vs rheumatoid synovial inflammation) & Osteoporosis (estrogen decline, bone mass loss)', '1 Mark'],
    ['Gout (uric acid crystal deposition in joints)', '1 Mark']
  ]
));

// Save Chapter 17
saveChapter(
  17,
  'Locomotion and Movement',
  svgCh17,
  'NCERT Textbook Exercise 1 to 12: Types of Movement, Sarcomere, Sliding Filament Theory, Joints & Skeletal Disorders',
  questions,
  'Neural Control and Coordination'
);
