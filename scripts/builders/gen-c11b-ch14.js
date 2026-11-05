// scripts/builders/gen-c11b-ch14.js
// Chapter 14: Breathing and Exchange of Gases (All 10 Verbatim Questions)
const { createQCard, saveChapter } = require('./c11b-helper');

const questions = [];

const svgCh14 = `
  <div style="background:#f0fdf4; border:1.5px solid #86efac; border-radius:12px; padding:18px; margin-bottom:24px;">
    <div style="font-weight:800; color:#166534; font-size:0.95rem; margin-bottom:8px; display:flex; align-items:center; gap:8px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
      Alveolar Diffusion Boundary &amp; Oxygen-Hemoglobin Dissociation Curve
    </div>
    <svg viewBox="0 0 850 240" width="100%" height="auto" style="max-height:240px; font-family:'Plus Jakarta Sans',sans-serif;">
      <rect x="10" y="10" width="830" height="220" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="1.5"/>
      
      <!-- Oxygen Dissociation Curve on Left -->
      <g transform="translate(40, 20)">
        <text x="180" y="20" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">OXYGEN-HEMOGLOBIN DISSOCIATION CURVE (SIGMOID)</text>
        <!-- Axes -->
        <line x1="40" y1="180" x2="330" y2="180" stroke="#334155" stroke-width="2"/>
        <line x1="40" y1="180" x2="40" y2="35" stroke="#334155" stroke-width="2"/>
        <text x="35" y="30" font-size="8" fill="#334155" text-anchor="end">% Saturation of Hb</text>
        <text x="185" y="196" font-size="8.5" fill="#334155" text-anchor="middle">Partial Pressure of Oxygen (pO2 in mm Hg) &rarr;</text>

        <!-- Sigmoid Curve -->
        <path d="M 40,180 C 80,170 110,120 160,70 C 210,50 260,45 320,45" fill="none" stroke="#2563eb" stroke-width="3"/>
        
        <!-- P50 marker -->
        <line x1="125" y1="112" x2="125" y2="180" stroke="#dc2626" stroke-dasharray="3,2"/>
        <line x1="40" y1="112" x2="125" y2="112" stroke="#dc2626" stroke-dasharray="3,2"/>
        <text x="125" y="190" font-size="7.5" font-weight="bold" fill="#dc2626">P50 (~27 mm Hg)</text>

        <!-- Right Shift (Bohr Effect) -->
        <path d="M 60,180 C 100,175 140,135 190,85 C 240,60 280,50 320,50" fill="none" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="4,2"/>
        <text x="210" y="115" font-size="7.5" font-weight="bold" fill="#ea580c">Right Shift (Bohr Effect):</text>
        <text x="210" y="127" font-size="7" fill="#475569">&uarr; pCO2, &uarr; H+ (low pH), &uarr; Temp</text>
      </g>

      <!-- Diffusion Membrane on Right -->
      <g transform="translate(420, 20)">
        <rect x="0" y="0" width="400" height="195" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="200" y="22" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">THE RESPIRATORY DIFFUSION MEMBRANE (&lt; 1 mm THICK)</text>

        <!-- Alveolus Air Space -->
        <rect x="20" y="40" width="160" height="60" rx="6" fill="#eff6ff" stroke="#93c5fd"/>
        <text x="100" y="65" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">Alveolar Cavity</text>
        <text x="100" y="80" font-size="7.5" fill="#1d4ed8" text-anchor="middle">pO2 = 104 mm Hg | pCO2 = 40 mm Hg</text>

        <!-- Capillary Blood -->
        <rect x="220" y="40" width="160" height="60" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
        <text x="300" y="65" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Pulmonary Capillary</text>
        <text x="300" y="80" font-size="7.5" fill="#7f1d1d" text-anchor="middle">pO2 = 40 mm Hg | pCO2 = 45 mm Hg</text>

        <!-- Diffusion Membrane 3 Layers -->
        <rect x="20" y="115" width="360" height="70" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="30" y="132" font-size="8.5" font-weight="bold" fill="#059669">Three Essential Microscopic Diffusion Layers:</text>
        <text x="30" y="148" font-size="8" fill="#334155">1. <strong>Squamous epithelium</strong> of alveolar wall (single cell thin)</text>
        <text x="30" y="162" font-size="8" fill="#334155">2. <strong>Endothelium</strong> of alveolar blood capillaries</text>
        <text x="30" y="176" font-size="8" fill="#334155">3. <strong>Basement substance</strong> supporting both epithelial layers (Total &lt; 0.5 &mu;m)</text>
      </g>
    </svg>
  </div>
`;

// Q1
questions.push(createQCard(
  'c11b-ch14-q1', 'Question 1', 'NCERT Exercise',
  'Define vital capacity. What is its significance?',
  `<div class="step">
    <strong>1. Definition of Vital Capacity (VC):</strong><br>
    <strong>Vital Capacity (VC)</strong> is the maximum volume of air a person can breathe out after a forceful, maximal inhalation (or the maximum volume of air a person can breathe in after a forceful, maximal exhalation).<br>
    Mathematically, Vital Capacity is the sum of three pulmonary volumes:
    $$\\mathbf{VC = ERV + TV + IRV}$$
    <ul style="margin:2px 0 6px 20px;">
      <li><strong>TV (Tidal Volume):</strong> Volume of air inspired or expired during normal quiet breathing (~500 mL).</li>
      <li><strong>IRV (Inspiratory Reserve Volume):</strong> Extra volume that can be forcibly inspired (~2500 to 3000 mL).</li>
      <li><strong>ERV (Expiratory Reserve Volume):</strong> Extra volume that can be forcibly expired (~1000 to 1100 mL).</li>
      <li><em>Normal Value:</em> Approximately <strong>3500 mL to 4500 mL</strong> in healthy young adults (higher in athletes, divers, and males).</li>
    </ul>
    <strong>2. Clinical &amp; Physiological Significance of Vital Capacity:</strong><br>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>Index of Lung Functional Capacity:</strong> Serves as a vital diagnostic spirometric indicator of pulmonary fitness and respiratory reserve. High VC ensures superior oxygen supply during strenuous exercise.</li>
      <li><strong>Diagnosis of Restrictive Lung Diseases:</strong> Vital capacity is significantly reduced in restrictive pulmonary disorders (pulmonary fibrosis, silicosis, scoliosis) due to loss of alveolar elasticity and chest wall compliance.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Accurate definition of Vital Capacity (maximal exhalation after maximal inhalation)', '1 Mark'],
    ['Formula: VC = ERV + TV + IRV and normal range (3500–4500 mL)', '1 Mark'],
    ['Physiological significance: index of lung reserve and clinical diagnosis of restrictive disorders', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c11b-ch14-q2', 'Question 2', 'NCERT Exercise',
  'State the volume of air remaining in the lungs after a normal breathing.',
  `<div class="step">
    <strong>Functional Residual Capacity (FRC):</strong><br>
    The volume of air that remains in the lungs after a normal, quiet expiration is termed the <strong>Functional Residual Capacity (FRC)</strong>.<br><br>
    <strong>Formula and Numerical Calculation:</strong><br>
    $$\\mathbf{FRC = ERV + RV}$$
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>ERV (Expiratory Reserve Volume):</strong> The additional volume of air a person can expire by forceful expiration (~1000 to 1100 mL).</li>
      <li><strong>RV (Residual Volume):</strong> The volume of air that always remains in the lungs even after maximal forceful expiration, preventing alveolar collapse (~1100 to 1200 mL).</li>
    </ul>
    $$\\text{FRC} = 1000\\text{ mL (ERV)} + 1200\\text{ mL (RV)} = \\mathbf{2100 \\text{ to } 2300\\text{ mL}}$$
    <br>
    <strong>Physiological Importance:</strong><br>
    The presence of FRC ensures continuous, uninterrupted diffusion of oxygen and carbon dioxide across alveolar capillaries even during the expiratory pause between breaths.
  </div>`,
  '2 Marks',
  [
    ['Identification as Functional Residual Capacity (FRC)', '0.5 Mark'],
    ['Formula: FRC = ERV + RV with standard values (1000–1100 mL + 1100–1200 mL)', '1 Mark'],
    ['Final normal volume range (~2100 to 2300 mL) & physiological role preventing collapse', '0.5 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c11b-ch14-q3', 'Question 3', 'NCERT Exercise',
  'Diffusion of gases occurs only in alveolar region and not in other parts of respiratory system. Why?',
  `<div class="step">
    <strong>Why Gaseous Exchange is Confined Exclusively to the Alveolar Region:</strong><br><br>
    The human respiratory tract is anatomically divided into two distinct functional zones:<br>
    1. <strong>Conducting Zone:</strong> External nostrils &rarr; Pharynx &rarr; Larynx &rarr; Trachea &rarr; Bronchi &rarr; Terminal Bronchioles.<br>
    2. <strong>Respiratory (Exchange) Zone:</strong> Respiratory bronchioles &rarr; Alveolar ducts &rarr; <strong>Alveoli</strong>.<br><br>
    <strong>Scientific Reasons for Alveolar Exclusivity:</strong><br>
    <ul style="margin:4px 0 8px 20px;">
      <li><strong>1. Microscopic Thinness of Diffusion Membrane (&lt; 0.5 $\\mu m$):</strong><br>
      The conducting zone is lined by thick pseudostratified ciliated columnar epithelium with goblet cells, thick basement membranes, and rigid cartilaginous rings, creating an impenetrable physical barrier to diffusion. In contrast, the alveolar wall consists of an ultra-thin <strong>single layer of simple squamous epithelium</strong> closely apposed to capillary endothelium, with a total diffusion thickness of less than half a micrometer (0.2–0.5 $\\mu m$), minimizing diffusion resistance.</li>
      <li><strong>2. Immense Surface Area:</strong><br>
      The human lungs contain approximately <strong>300 million alveoli</strong>, providing a colossal combined exchange surface area of <strong>70 to 80 $\\text{m}^2$</strong> (equivalent to a tennis court). The conducting zone has negligible surface area.</li>
      <li><strong>3. Extensive Capillary Vascularization:</strong><br>
      Alveoli are completely enveloped by a dense, anastomosing sheet of pulmonary capillary networks where RBCs flow in single file, maximizing gas contact time.</li>
      <li><strong>4. Surfactant Lining:</strong><br>
      Alveoli are lined with dipalmitoylphosphatidylcholine (surfactant) which reduces surface tension and maintains alveolar patency.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Anatomical contrast: Conducting zone (thick, ciliated, cartilaginous) vs Alveoli', '1 Mark'],
    ['Ultra-thin diffusion membrane (<0.5 μm) composed of simple squamous epithelium', '1 Mark'],
    ['Colossal surface area (~70-80 m2 across 300 million alveoli) & dense capillary mesh', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c11b-ch14-q4', 'Question 4', 'NCERT Exercise',
  'What are the major transport mechanisms for $CO_2$? Explain.',
  `<div class="step">
    <strong>The Three Major Physiological Transport Mechanisms for Carbon Dioxide ($CO_2$) in Blood:</strong><br>
    Tissue cells produce $CO_2$ through catabolism, which is transported by blood to the lungs via three pathways:<br><br>
    <strong>1. As Bicarbonate Ions ($HCO_3^-$) &mdash; 70% of Total $CO_2$:</strong>
    <ul style="margin:2px 0 6px 20px;">
      <li>The primary and predominant mode. $CO_2$ diffuses into RBCs where the zinc-containing enzyme <strong>carbonic anhydrase</strong> accelerates the reversible hydration of $CO_2$ by 10 million times:
      $$\\text{CO}_2 + \\text{H}_2\\text{O} \\xrightleftharpoons{\\text{Carbonic Anhydrase}} \\text{H}_2\\text{CO}_3 \\xrightleftharpoons{\\text{Carbonic Anhydrase}} \\text{H}^+ + \\text{HCO}_3^-$$</li>
      <li>$HCO_3^-$ diffuses out of RBCs into blood plasma. To maintain electrical neutrality, chloride ions ($Cl^-$) diffuse from plasma into RBCs &mdash; a phenomenon called the <strong>Chloride Shift (Hamburger's Phenomenon)</strong>. At the alveoli, the reaction reverses, expelling $CO_2$.</li>
    </ul>
    <strong>2. As Carbamino-Hemoglobin ($Hb-CO_2$) &mdash; 20% to 25% of Total $CO_2$:</strong>
    <ul style="margin:2px 0 6px 20px;">
      <li>$CO_2$ binds reversibly to the free amino ($-NH_2$) groups of globin polypeptide chains (not to heme):
      $$\\text{Hb-NH}_2 + \\text{CO}_2 \\xrightleftharpoons{} \\text{Hb-NH-COO}^- + \\text{H}^+$$</li>
      <li>At tissue level ($pCO_2$ high, $pO_2$ low), binding is favored. At alveolar level ($pO_2$ high, $pCO_2$ low), $O_2$ binding to heme displaces $CO_2$ from globin (<strong>Haldane Effect</strong>).</li>
    </ul>
    <strong>3. In Dissolved State in Plasma &mdash; ~7% of Total $CO_2$:</strong>
    <ul style="margin:2px 0 6px 20px;">
      <li>Because $CO_2$ has a solubility roughly <strong>20 to 25 times higher than $O_2$</strong> in water, approximately 7% dissolves directly into the aqueous phase of blood plasma as carbonic acid.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['1. As bicarbonate ions (70%) via carbonic anhydrase & chloride shift (Hamburger phenomenon)', '2 Marks'],
    ['2. As carbamino-hemoglobin (20–25%) with Haldane effect explanation', '1 Mark'],
    ['3. In dissolved state in plasma (7%) due to high solubility of CO2', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c11b-ch14-q5', 'Question 5', 'NCERT Exercise',
  'What will be the $pO_2$ and $pCO_2$ in the atmospheric air compared to those in the alveolar air? Being:<br>(i) $pO_2$ lesser, $pCO_2$ higher<br>(ii) $pO_2$ higher, $pCO_2$ lesser<br>(iii) $pO_2$ higher, $pCO_2$ higher<br>(iv) $pO_2$ lesser, $pCO_2$ lesser.',
  `<div class="step">
    <strong>Correct Option: (ii) $pO_2$ higher, $pCO_2$ lesser</strong><br><br>
    <strong>Quantitative Comparison of Partial Pressures (in mm Hg):</strong><br><br>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem;">
        <thead>
          <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
            <th style="padding:8px 12px; color:#065f46;">Respiratory Gas</th>
            <th style="padding:8px 12px; color:#065f46;">Atmospheric Air (at Sea Level)</th>
            <th style="padding:8px 12px; color:#065f46;">Alveolar Air (Lungs)</th>
            <th style="padding:8px 12px; color:#065f46;">Net Diffusion Gradient</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 12px; font-weight:700;">$pO_2$ (Oxygen)</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">159 mm Hg (Higher)</td>
            <td style="padding:8px 12px; font-weight:700;">104 mm Hg (Lesser)</td>
            <td style="padding:8px 12px;">$O_2$ flows from atmosphere into alveoli.</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; font-weight:700;">$pCO_2$ (Carbon Dioxide)</td>
            <td style="padding:8px 12px; color:#16a34a; font-weight:800;">0.3 mm Hg (Lesser)</td>
            <td style="padding:8px 12px; font-weight:700;">40 mm Hg (Higher)</td>
            <td style="padding:8px 12px;">$CO_2$ flows from alveoli into atmosphere.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <em>Reason: Inhaled atmospheric air mixes with residual alveolar air (FRC) and becomes humidified with water vapor ($pH_2O = 47\\text{ mm Hg}$), which dilutes $pO_2$ down to 104 mm Hg, while continuous capillary excretion of $CO_2$ raises alveolar $pCO_2$ to 40 mm Hg.</em>
  </div>`,
  '2 Marks',
  [
    ['Identification of (ii) pO2 higher, pCO2 lesser in atmospheric air compared to alveolar air', '1 Mark'],
    ['Numerical values: Atmospheric (pO2 = 159, pCO2 = 0.3) vs Alveolar (pO2 = 104, pCO2 = 40 mm Hg)', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c11b-ch14-q6', 'Question 6', 'NCERT Exercise',
  'Explain the process of inspiration under normal conditions.',
  `<div class="step">
    <strong>Biomechanical Process of Normal Inspiration (Inhalation):</strong><br>
    Inspiration is an <strong>active process</strong> driven by the contraction of primary inspiratory muscles, which generates a negative intra-thoracic pressure gradient according to Boyle's Law ($P \\propto 1/V$):<br><br>
    <ol style="margin:4px 0 8px 20px;">
      <li><strong>Contraction and Flattening of the Diaphragm:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>The dome-shaped, muscular diaphragm contracts under motor stimulation from <strong>phrenic nerves</strong>, flattening downwards toward the abdominal cavity.</li>
          <li>This expands the volume of the thoracic cavity along the <strong>antero-posterior (vertical) axis</strong> (responsible for ~75% of air entry in quiet breathing).</li>
        </ul>
      </li>
      <li><strong>Contraction of External Intercostal Muscles:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Stimulated by intercostal nerves, the <strong>external intercostal muscles</strong> contract, pulling the ribs and the sternum upwards and outwards.</li>
          <li>This increases the volume of the thoracic cavity along the <strong>dorso-ventral axis</strong>.</li>
        </ul>
      </li>
      <li><strong>Expansion of Pulmonary Volume:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Because the parietal pleura adheres to the thoracic wall and visceral pleura adheres to lung tissue with pleural fluid between them, thoracic expansion forces the elastic lungs to expand proportionally.</li>
        </ul>
      </li>
      <li><strong>Negative Pressure Gradient:</strong>
        <ul style="margin:2px 0 4px 15px;">
          <li>Lung expansion drops intra-pulmonary pressure below atmospheric pressure (to about <strong>$-1 \\text{ to } -2\\text{ mm Hg}$</strong> relative to atmosphere).</li>
          <li>Atmospheric air rushes down its pressure gradient through the respiratory tract into the alveoli until pressures equalize (Tidal Volume ~500 mL).</li>
        </ul>
      </li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['Inspiration as an active process based on Boyle\'s law', '0.5 Mark'],
    ['Contraction and flattening of diaphragm expanding antero-posterior axis', '1.5 Marks'],
    ['Contraction of external intercostals elevating ribs/sternum along dorso-ventral axis', '1 Mark'],
    ['Drop in intra-pulmonary pressure below atmospheric causing air inflow', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c11b-ch14-q7', 'Question 7', 'NCERT Exercise',
  'How is respiration regulated? (Medullary rhythm center, pneumotaxic center in pons, chemosensitive area sensitive to $CO_2$ and $H^+$).',
  `<div class="step">
    <strong>Neural and Chemical Regulation of Respiration:</strong><br>
    Respiration is automatically adjusted to meet the body's metabolic oxygen demands and eliminate excess $CO_2$ through coordinated neural centers in the brainstem and peripheral chemoreceptors:<br><br>
    <strong>A. Neural Regulatory Centers:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>1. Respiratory Rhythm Center (Medulla Oblongata):</strong> The primary regulatory center responsible for generating the basic, involuntary rhythmic cycle of inspiration (dorsal respiratory group) and expiration (ventral respiratory group).</li>
      <li><strong>2. Pneumotaxic Center (Pons Varolii):</strong> Located dorsally in the upper pons. It acts as an off-switch: it transmits inhibitory signals to the inspiratory center, limiting the duration of inspiration and thereby <strong>altering respiratory rate</strong>. Strong signals produce rapid, shallow breathing.</li>
      <li><strong>3. Apneustic Center (Lower Pons):</strong> Sends stimulatory signals to prolong inspiration (acts antagonistically to the pneumotaxic center).</li>
    </ul>
    <strong>B. Chemical Regulation (Chemoreceptive Reflexes):</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>1. Central Chemosensitive Area:</strong> Situated adjacent to the medullary rhythm center. Highly sensitive to increases in <strong>$CO_2$ partial pressure ($pCO_2$)</strong> and <strong>hydrogen ion concentration ($[H^+]$ / decreased pH)</strong> in cerebrospinal fluid. Accumulation of $CO_2$ and $H^+$ triggers urgent nerve impulses to the rhythm center, accelerating depth and rate of breathing (hyperventilation) to blow off $CO_2$.</li>
      <li><strong>2. Peripheral Chemoreceptors:</strong> Receptors located in the <strong>carotid bodies</strong> (at bifurcation of carotid arteries, innervated by glossopharyngeal nerve IX) and <strong>aortic bodies</strong> (on aortic arch, innervated by vagus nerve X). They detect rising arterial $pCO_2$, acidosis, and severe hypoxemia ($pO_2 < 60\\text{ mm Hg}$), sending immediate reflex signals to the respiratory center.</li>
    </ul>
    <em>Critical Note: The role of oxygen ($pO_2$) in normal respiratory regulation is quite insignificant; $CO_2$ and $H^+$ are the true primary chemical drivers of human breathing.</em>
  </div>`,
  '4 Marks',
  [
    ['Medullary respiratory rhythm center generating basic rhythmic cycle', '1 Mark'],
    ['Pneumotaxic center in pons limiting inspiration duration and altering breathing rate', '1 Mark'],
    ['Central chemosensitive area responding to elevated CO2 and H+ ions', '1 Mark'],
    ['Peripheral chemoreceptors (aortic and carotid bodies) & insignificant role of O2 in routine regulation', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c11b-ch14-q8', 'Question 8', 'NCERT Exercise',
  'What is the effect of $pCO_2$ on oxygen transport? (Bohr effect, shift of oxygen dissociation curve).',
  `<div class="step">
    <strong>Effect of $pCO_2$ on Oxygen Transport &mdash; The Bohr Effect (Christian Bohr, 1904):</strong><br><br>
    <strong>1. The Bohr Effect Phenomenon:</strong><br>
    The affinity of hemoglobin for oxygen is inversely related to both blood acidity ($H^+$ concentration) and the partial pressure of carbon dioxide ($pCO_2$). An increase in $pCO_2$ causes the oxygen-hemoglobin dissociation curve to <strong>shift to the right</strong>, decreasing hemoglobin's oxygen-binding affinity and promoting the <strong>dissociation (unloading) of $O_2$</strong> to tissues.<br><br>
    <strong>2. Molecular Mechanism at the Tissue Level:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>Actively metabolizing tissues (e.g., exercising skeletal muscles) consume $O_2$ and generate large quantities of $CO_2$, raising local $pCO_2$ and $[H^+]$ (lactic acid, carbonic acid).</li>
      <li>$CO_2$ diffuses into erythrocytes and hydrates to form carbonic acid, releasing $H^+$ ions.</li>
      <li>$H^+$ ions bind specifically to histidine residues in deoxyhemoglobin, stabilizing the low-affinity <strong>T-state (tense conformation)</strong> of the hemoglobin tetramer.</li>
      <li>This conformational change forces hemoglobin to release its bound oxygen molecules precisely where active tissues require it most.</li>
    </ul>
    <strong>3. Reverse Effect at the Alveolar Level:</strong>
    <ul style="margin:4px 0 6px 20px;">
      <li>In the lungs, $CO_2$ is rapidly expired; hence, $pCO_2$ is low and pH is alkaline.</li>
      <li>This shifts the oxygen dissociation curve back to the <strong>left</strong>, stabilizing the high-affinity <strong>R-state (relaxed conformation)</strong> of hemoglobin, promoting maximal oxygen loading to form oxyhemoglobin.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Definition of Bohr effect: elevated pCO2 lowers hemoglobin-O2 affinity, shifting curve to the right', '1 Mark'],
    ['Tissue-level mechanism: high pCO2 and H+ induce O2 unloading to exercising cells', '1 Mark'],
    ['Alveolar reversal: low pCO2 and high pH shift curve left for maximal O2 loading', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c11b-ch14-q9', 'Question 9', 'NCERT Exercise',
  'What happens to the respiratory process in a man going up a hill? (High altitude sickness, hypoxia, hyperventilation, polycythemia).',
  `<div class="step">
    <strong>Physiological Responses &amp; Acclimatization at High Altitude:</strong><br><br>
    <strong>1. Environmental Challenge &mdash; Hypoxia:</strong><br>
    As an individual ascends a high mountain (>2500–3500 meters), the barometric atmospheric pressure drops significantly (from 760 mm Hg at sea level to &lt;500 mm Hg). Consequently, although the percentage of oxygen remains 21%, the <strong>partial pressure of oxygen ($pO_2$) declines sharply</strong>, leading to arterial oxygen desaturation, known as <strong>hypoxia</strong>.<br><br>
    <strong>2. Acute Effects &mdash; High Altitude Sickness:</strong><br>
    An un-acclimatized person rapidly develops <strong>Acute Mountain Sickness (AMS)</strong> within 8–24 hours, characterized by:
    <ul style="margin:2px 0 4px 20px;">
      <li>Severe breathlessness (dyspnea) and rapid fatigue.</li>
      <li>Nausea, vomiting, throbbing headache, dizziness, and insomnia.</li>
    </ul>
    <strong>3. Immediate Compensatory Physiological Mechanisms:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li><strong>Hyperventilation:</strong> Hypoxia stimulates peripheral carotid body chemoreceptors, driving the respiratory rhythm center to accelerate the rate and depth of breathing.</li>
      <li><strong>Tachycardia:</strong> Heart rate and cardiac output increase to accelerate oxygen delivery.</li>
    </ul>
    <strong>4. Long-Term Acclimatization Mechanisms:</strong>
    <ul style="margin:2px 0 4px 20px;">
      <li><strong>Polycythemia:</strong> Chronic renal hypoxia triggers the juxtaglomerular cells of kidneys to secrete the peptide hormone <strong>erythropoietin (EPO)</strong>. EPO stimulates bone marrow hematopoiesis, drastically increasing total RBC count and hemoglobin concentration (polycythemia).</li>
      <li><strong>Elevated 2,3-BPG:</strong> RBCs synthesize more 2,3-bisphosphoglycerate, shifting the oxygen dissociation curve to the right to enhance tissue $O_2$ release.</li>
      <li><strong>Breathing Rate Normalizes:</strong> Alveolar ventilation remains chronically elevated with increased vascular capillarization.</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Low atmospheric pressure causing hypoxia (reduced arterial pO2)', '1 Mark'],
    ['Acute mountain sickness symptoms: breathlessness, headache, fatigue, dizziness', '1 Mark'],
    ['Immediate compensatory hyperventilation via carotid chemoreceptors', '1 Mark'],
    ['Long-term acclimatization: Erythropoietin (EPO) release, polycythemia, and 2,3-BPG synthesis', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c11b-ch14-q10', 'Question 10', 'NCERT Exercise',
  'What is the site of gaseous exchange in an insect?',
  `<div class="step">
    <strong>Site and Working Mechanism of Gaseous Exchange in Insects:</strong><br><br>
    In insects (e.g., Cockroach, Grasshopper), the circulatory system lacks hemoglobin and plays zero role in gas transport. Instead, gas exchange occurs directly at the cellular level through an intricate network of internal air tubes called the <strong>Tracheal System</strong>:<br><br>
    <ul style="margin:4px 0 6px 20px;">
      <li><strong>1. Spiracles:</strong> Atmospheric air enters the body through 10 pairs of lateral valved openings called <strong>spiracles</strong> (2 pairs thoracic, 8 pairs abdominal).</li>
      <li><strong>2. Tracheal Trunks:</strong> Spiracles lead into wide internal longitudinal <strong>tracheae</strong>, reinforced by spiral cuticular chitinous rings (taenidia) that prevent tube collapse.</li>
      <li><strong>3. Tracheoles (The Actual Exchange Site):</strong><br>
      The tracheae branch repeatedly into microscopic, non-taenidial, blind-ended terminal tubes called <strong>tracheoles</strong> (diameter &lt; 1 $\\mu m$).
      <ul style="margin:2px 0 4px 15px;">
        <li>The tips of tracheoles are filled with watery <strong>tracheolar fluid</strong> and terminate in direct, intimate contact with the plasma membranes of individual body tissue cells.</li>
        <li><strong>Gaseous Exchange Mechanism:</strong> Oxygen diffuses directly from the air in tracheoles into the tracheolar fluid and across cell membranes into mitochondria. Simultaneously, metabolic carbon dioxide diffuses from tissue cells into tracheoles and is expelled through spiracles.</li>
      </ul>
      </li>
    </ul>
    <strong>Conclusion:</strong> The true microscopic sites of gaseous exchange are the <strong>thin, fluid-filled endings of tracheoles</strong> directly bathing tissues.
  </div>`,
  '2 Marks',
  [
    ['Identification of Tracheoles (tracheal system) as the microscopic site of gas exchange', '1 Mark'],
    ['Direct diffusion mechanism from tracheolar fluid into individual tissue cells without blood involvement', '1 Mark']
  ]
));

// Save Chapter 14
saveChapter(
  14,
  'Breathing and Exchange of Gases',
  svgCh14,
  'NCERT Textbook Exercise 1 to 10: Respiratory Volumes, Diffusion Membrane, CO2 Transport, Bohr Effect & Regulation',
  questions,
  'Body Fluids and Circulation'
);
