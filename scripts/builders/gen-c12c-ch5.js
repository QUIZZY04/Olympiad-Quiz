// scripts/builders/gen-c12c-ch5.js
// Class 12 Chemistry Chapter 5: Coordination Compounds (उपसहसंयोजन यौगिक) (NCERT Rationalised 2026–27)
// Full Coverage: 11 In-Text Questions + 29 End-of-Chapter Exercises = 40 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 5;
const chTitle = 'Coordination Compounds (उपसहसंयोजन यौगिक)';
const exTitle = 'NCERT Chapter 5: In-Text Questions (5.1–5.11) & End-of-Chapter Exercises (5.1–5.29)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #f0fdf4, #dcfce7); border:1px solid #86efac; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#166534; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="7" y1="7" x2="10" y2="10"/><line x1="17" y1="7" x2="14" y2="10"/><line x1="7" y1="17" x2="10" y2="14"/><line x1="17" y1="17" x2="14" y2="14"/></svg>
    Coordination Chemistry: Bonding Theories, Splitting & Synergic Bonding
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Werner's Theory -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Werner's Dual Valency</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">Primary & Secondary</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Primary: Ionisable (Oxidation state)</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Secondary: Non-ionisable (Coord No.)</text>

    <!-- Box 2: Valence Bond Theory -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Valence Bond Theory</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">Inner vs Outer Orbital</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• d²sp³ (Inner, diamagnetic / low-spin)</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• sp³d² (Outer, paramagnetic / high-spin)</text>

    <!-- Box 3: Crystal Field Splitting -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">Crystal Field Theory</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">Octahedral Splitting (Δ_o)</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• e_g (+0.6 Δ_o) vs t_2g (-0.4 Δ_o)</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Δ_o > P (Low spin) | Δ_o < P (High spin)</text>

    <!-- Box 4: Metal Carbonyls & Synergic -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Metal Carbonyls</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">Synergic Bonding (M ⇄ CO)</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• σ-bond: CO lone pair → vacant metal d</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• π-backbonding: filled metal d → π* of CO</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (5.1 to 5.11)
// ============================================================================

// Question 5.1 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q1', 'In-Text 5.1', 'NCERT In-Text',
  'Write the formulas for the following coordination compounds:<br>(i) Tetraamminediaquacobalt(III) chloride<br>(ii) Potassium tetracyanonickelate(II)<br>(iii) Tris(ethane-1,2-diamine)chromium(III) chloride<br>(iv) Amminebromidochloridonitrito-N-platinate(II)<br>(v) Dichloridobis(ethane-1,2-diamine)platinum(IV) nitrate<br>(vi) Iron(III) hexacyanoferrate(II)',
  `<div class="step">
    <b>Formulas according to IUPAC Norms:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Tetraamminediaquacobalt(III) chloride:</strong> $[\\text{Co(NH}_3)_4(\\text{H}_2\\text{O})_2]\\text{Cl}_3$</li>
      <li><strong>Potassium tetracyanonickelate(II):</strong> $\\text{K}_2[\\text{Ni(CN)}_4]$</li>
      <li><strong>Tris(ethane-1,2-diamine)chromium(III) chloride:</strong> $[\\text{Cr(en)}_3]\\text{Cl}_3$</li>
      <li><strong>Amminebromidochloridonitrito-N-platinate(II):</strong> $[\\text{Pt(NH}_3)\\text{BrCl(NO}_2)]^-$</li>
      <li><strong>Dichloridobis(ethane-1,2-diamine)platinum(IV) nitrate:</strong> $[\\text{PtCl}_2(\\text{en})_2](\\text{NO}_3)_2$</li>
      <li><strong>Iron(III) hexacyanoferrate(II):</strong> $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Formulas (i) to (iii) correctly written with proper brackets and charges', '1½ Marks'],
    ['Formulas (iv) to (vi) correctly written with proper stoichiometry', '1½ Marks']
  ]
));

// Question 5.2 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q2', 'In-Text 5.2', 'NCERT In-Text',
  'Write the IUPAC names of the following coordination compounds:<br>(i) $[\\text{Co(NH}_3)_6]\\text{Cl}_3$<br>(ii) $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$<br>(iii) $\\text{K}_3[\\text{Fe(CN)}_6]$<br>(iv) $\\text{K}_3[\\text{Fe(C}_2\\text{O}_4)_3]$<br>(v) $\\text{K}_2[\\text{PdCl}_4]$<br>(vi) $[\\text{Pt(NH}_3)_2\\text{Cl(NH}_2\\text{CH}_3)]\\text{Cl}$',
  `<div class="step">
    <b>IUPAC Names:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{Co(NH}_3)_6]\\text{Cl}_3$:</strong> Hexaamminecobalt(III) chloride</li>
      <li><strong>$[\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$:</strong> Pentaamminechloridocobalt(III) chloride</li>
      <li><strong>$\\text{K}_3[\\text{Fe(CN)}_6]$:</strong> Potassium hexacyanidoferrate(III)</li>
      <li><strong>$\\text{K}_3[\\text{Fe(C}_2\\text{O}_4)_3]$:</strong> Potassium trioxalatotriferrate(III) (or Potassium trioxalatoferrate(III))</li>
      <li><strong>$\\text{K}_2[\\text{PdCl}_4]$:</strong> Potassium tetrachloridopalladate(II)</li>
      <li><strong>$[\\text{Pt(NH}_3)_2\\text{Cl(NH}_2\\text{CH}_3)]\\text{Cl}$:</strong> Diamminechlorido(methanamine)platinum(II) chloride</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Names (i) to (iii) with correct alphabetical order and oxidation state', '1½ Marks'],
    ['Names (iv) to (vi) with correct metal suffix (-ate for anion complexes)', '1½ Marks']
  ]
));

// Question 5.3 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q3', 'In-Text 5.3', 'NCERT In-Text',
  'Indicate the types of isomerism exhibited by the following complexes and draw the structures for these isomers:<br>(i) $\\text{K}[\\text{Cr(H}_2\\text{O)}_2(\\text{C}_2\\text{O}_4)_2]$<br>(ii) $[\\text{Co(en)}_3]\\text{Cl}_3$<br>(iii) $[\\text{Co(NH}_3)_5(\\text{NO}_2)](\\text{NO}_3)_2$<br>(iv) $[\\text{Pt(NH}_3)(\\text{H}_2\\text{O})\\text{Cl}_2]$',
  `<div class="step">
    <b>Types of Isomerism:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{K}[\\text{Cr(H}_2\\text{O)}_2(\\text{C}_2\\text{O}_4)_2]$:</strong>
        <br>• <em>Geometrical isomerism:</em> Exists as <b>cis</b> and <b>trans</b> isomers.
        <br>• <em>Optical isomerism:</em> The <b>cis</b> isomer is chiral and non-superimposable on its mirror image (exists as $d$ and $l$ optical isomers), while the trans isomer has a plane of symmetry and is optically inactive.</li>
      <li><strong>$[\\text{Co(en)}_3]\\text{Cl}_3$:</strong>
        <br>• Exhibits <b>Optical isomerism</b>. It exists as a pair of enantiomers: dextro ($d$) and laevo ($l$) forms. (No geometrical isomerism because all three ligands are identical bidentate ligands).</li>
      <li><strong>$[\\text{Co(NH}_3)_5(\\text{NO}_2)](\\text{NO}_3)_2$:</strong>
        <br>• <em>Linkage isomerism:</em> Due to ambidentate nitro ligand (bonded through N: nitro $[\\text{Co(NH}_3)_5(\\text{NO}_2)]^{2+}$ (yellow) vs bonded through O: nitrito $[\\text{Co(NH}_3)_5(\\text{ONO})]^{2+}$ (red)).
        <br>• <em>Ionisation isomerism:</em> $[\\text{Co(NH}_3)_5(\\text{NO}_2)](\\text{NO}_3)_2$ vs $[\\text{Co(NH}_3)_5(\\text{NO}_3)](\\text{NO}_2)(\\text{NO}_3)$.</li>
      <li><strong>$[\\text{Pt(NH}_3)(\\text{H}_2\\text{O})\\text{Cl}_2]$:</strong>
        <br>• Square planar complex of type $[\\text{MABX}_2]$. Exhibits <b>Geometrical isomerism</b>: <em>cis</em> (both $\\text{Cl}^-$ ligands adjacent) and <em>trans</em> (both $\\text{Cl}^-$ ligands opposite at $180^\\circ$).</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Geometrical (cis/trans) and Optical (cis form is chiral)', '1 Mark'],
    ['(ii) Optical isomerism with d/l enantiomer pair', '1 Mark'],
    ['(iii) Linkage isomerism (-NO₂ vs -ONO) and ionisation isomerism', '1 Mark'],
    ['(iv) Geometrical isomerism (cis and trans in square planar)', '1 Mark']
  ]
));

// Question 5.4 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q4', 'In-Text 5.4', 'NCERT In-Text',
  'Give evidence that $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{SO}_4$ and $[\\text{Co(NH}_3)_5\\text{SO}_4]\\text{Cl}$ are ionisation isomers.',
  `<div class="step">
    <b>Experimental Chemical Evidence:</b><br>
    Ionisation isomers produce different ions in aqueous solution that give distinct characteristic precipitation reactions:<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Testing with aqueous Barium Chloride ($\text{BaCl}_2$):</strong>
        <br>• $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{SO}_4$ ionises to give sulphate ion $\\text{SO}_4^{2-}$ outside the coordination sphere. It forms a <b>white precipitate of $\text{BaSO}_4$</b>:
        $$[\\text{Co(NH}_3)_5\\text{Cl}]\\text{SO}_4(aq) + \\text{BaCl}_2(aq) \\rightarrow \\mathbf{\\text{BaSO}_4 \\downarrow (\\text{white ppt})} + [\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$$
        • $[\\text{Co(NH}_3)_5\\text{SO}_4]\\text{Cl}$ gives <b>no precipitate</b> with $\\text{BaCl}_2$ because sulphate is coordinated inside the sphere.</li>
      <li><strong>Testing with aqueous Silver Nitrate ($\text{AgNO}_3$):</strong>
        <br>• $[\\text{Co(NH}_3)_5\\text{SO}_4]\\text{Cl}$ ionises to give free chloride ion $\\text{Cl}^-$. It reacts with $\\text{AgNO}_3$ to give a <b>curdy white precipitate of $\text{AgCl}$</b>:
        $$[\\text{Co(NH}_3)_5\\text{SO}_4]\\text{Cl}(aq) + \\text{AgNO}_3(aq) \\rightarrow \\mathbf{\\text{AgCl} \\downarrow (\\text{white ppt})} + [\\text{Co(NH}_3)_5\\text{SO}_4]\\text{NO}_3$$
        • $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{SO}_4$ gives <b>no precipitate</b> with $\\text{AgNO}_3$ as chloride is bonded inside.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['BaCl₂ test: [Co(NH₃)₅Cl]SO₄ yields white BaSO₄ ppt', '1 Mark'],
    ['AgNO₃ test: [Co(NH₃)₅SO₄]Cl yields white AgCl ppt', '1 Mark']
  ]
));

// Question 5.5 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q5', 'In-Text 5.5', 'NCERT In-Text',
  'Explain on the basis of valence bond theory that $[\\text{Ni(CN)}_4]^{2-}$ ion with square planar structure is diamagnetic and the $[\\text{NiCl}_4]^{2-}$ ion with tetrahedral geometry is paramagnetic.',
  `<div class="step">
    <b>VBT Analysis for Nickel ($Z = 28$, $\text{Ni}^{2+}: [\text{Ar}] 3d^8$):</b><br><br>
    <b>1. Case of $[\\text{Ni(CN)}_4]^{2-}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Cyanide ($\\text{CN}^-$) is a <b>strong field ligand</b>.</li>
      <li>It forces the two unpaired electrons in $3d^8$ subshell to pair up against Hund\'s rule, leaving one vacant $3d$ orbital.</li>
      <li>The central $\\text{Ni}^{2+}$ undergoes <b>$dsp^2$ hybridization</b> involving one $3d$, one $4s$, and two $4p$ orbitals.</li>
      <li>Geometry: <b>Square planar</b>.</li>
      <li>Magnetic property: Since all electrons are paired ($n = 0$), it is <b>diamagnetic</b>.</li>
    </ul>
    <br>
    <b>2. Case of $[\\text{NiCl}_4]^{2-}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Chloride ($\\text{Cl}^-$) is a <b>weak field ligand</b>.</li>
      <li>It cannot cause pairing of electrons in the $3d^8$ subshell. The electronic arrangement remains $3d^8$ with <b>2 unpaired electrons</b>.</li>
      <li>The central $\\text{Ni}^{2+}$ utilizes one $4s$ and three $4p$ orbitals for <b>$sp^3$ hybridization</b>.</li>
      <li>Geometry: <b>Tetrahedral</b>.</li>
      <li>Magnetic property: Because of 2 unpaired electrons ($n = 2$, $\\mu = \\sqrt{8} \\approx 2.83\\text{ BM}$), it is <b>paramagnetic</b>.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['[Ni(CN)₄]²⁻: CN⁻ causes pairing → dsp² hybridization, square planar, diamagnetic', '1½ Marks'],
    ['[NiCl₄]²⁻: Cl⁻ weak ligand, no pairing → sp³ hybridization, tetrahedral, 2 unpaired e⁻ (paramagnetic)', '1½ Marks']
  ]
));

// Question 5.6 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q6', 'In-Text 5.6', 'NCERT In-Text',
  '$[\\text{NiCl}_4]^{2-}$ is paramagnetic while $[\\text{Ni(CO)}_4]$ is diamagnetic though both are tetrahedral. Why?',
  `<div class="step">
    <b>Comparison:</b><br><br>
    <b>1. $[\\text{NiCl}_4]^{2-}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Oxidation state of $\\text{Ni} = +2$. Electronic configuration: $[\\text{Ar}] 3d^8 4s^0$.</li>
      <li>$\\text{Cl}^-$ is a weak field ligand and does not cause electron pairing in $3d^8$.</li>
      <li>There are <b>2 unpaired electrons</b> in $3d$ orbitals. It undergoes $sp^3$ hybridization (tetrahedral) and is <b>paramagnetic</b>.</li>
    </ul>
    <br>
    <b>2. $[\\text{Ni(CO)}_4]$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Oxidation state of $\\text{Ni} = 0$. Electronic configuration: $[\\text{Ar}] 3d^8 4s^2$.</li>
      <li>$\\text{CO}$ is an extremely <b>strong field ligand</b>. It forces both $4s$ electrons to shift into the $3d$ orbitals, fully pairing all electrons into a <b>$3d^{10}$ configuration</b>.</li>
      <li>Vacant $4s$ and three $4p$ orbitals undergo <b>$sp^3$ hybridization</b> (tetrahedral geometry).</li>
      <li>Since all electrons are completely paired ($n = 0$), $[\\text{Ni(CO)}_4]$ is <b>diamagnetic</b>.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Ni(II) in [NiCl₄]²⁻ has 3d⁸ with 2 unpaired electrons → paramagnetic', '1 Mark'],
    ['Ni(0) in [Ni(CO)₄] undergoes CO-induced 4s→3d pairing to give 3d¹⁰ → diamagnetic', '1 Mark']
  ]
));

// Question 5.7 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q7', 'In-Text 5.7', 'NCERT In-Text',
  '$[\\text{Fe(H}_2\\text{O)}_6]^{3+}$ is strongly paramagnetic whereas $[\\text{Fe(CN)}_6]^{3-}$ is weakly paramagnetic. Explain.',
  `<div class="step">
    <b>Oxidation State of Iron:</b> In both complexes, iron is in the $+3$ oxidation state ($\text{Fe}^{3+}: [\text{Ar}] 3d^5$).<br><br>
    <b>1. $[\\text{Fe(H}_2\\text{O)}_6]^{3+}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$\\text{H}_2\\text{O}$ is a <b>weak field ligand</b> ($\\Delta_o < P$).</li>
      <li>It cannot cause pairing of electrons. All 5 electrons in $3d^5$ remain unpaired ($n = 5$).</li>
      <li>It forms a high-spin outer orbital complex ($sp^3d^2$).</li>
      <li>Magnetic moment: $\\mu = \\sqrt{5(5+2)} = \\sqrt{35} \\approx \\mathbf{5.92\\text{ BM}}$ (<b>strongly paramagnetic</b>).</li>
    </ul>
    <br>
    <b>2. $[\\text{Fe(CN)}_6]^{3-}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$\\text{CN}^-$ is a <b>strong field ligand</b> ($\\Delta_o > P$).</li>
      <li>It causes pairing of $3d$ electrons, leaving only <b>1 unpaired electron</b> ($n = 1$).</li>
      <li>It forms a low-spin inner orbital complex ($d^2sp^3$, $t_{2g}^5$).</li>
      <li>Magnetic moment: $\\mu = \\sqrt{1(1+2)} = \\sqrt{3} \\approx \\mathbf{1.73\\text{ BM}}$ (<b>weakly paramagnetic</b>).</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['[Fe(H₂O)₆]³⁺: H₂O weak ligand → no pairing, 5 unpaired e⁻ (μ = 5.92 BM, strongly paramagnetic)', '1 Mark'],
    ['[Fe(CN)₆]³⁻: CN⁻ strong ligand → pairing occurs, 1 unpaired e⁻ (μ = 1.73 BM, weakly paramagnetic)', '1 Mark']
  ]
));

// Question 5.8 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q8', 'In-Text 5.8', 'NCERT In-Text',
  'Explain $[\\text{Co(NH}_3)_6]^{3+}$ is an inner orbital complex whereas $[\\text{Ni(NH}_3)_6]^{2+}$ is an outer orbital complex.',
  `<div class="step">
    <b>Explanation based on Hybridization:</b><br><br>
    <b>1. $[\\text{Co(NH}_3)_6]^{3+}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Cobalt is in $+3$ oxidation state: $\\text{Co}^{3+}: [\\text{Ar}] 3d^6$.</li>
      <li>With $\\text{Co}^{3+}$, $\\text{NH}_3$ behaves as a strong field ligand, forcing pairing of the six $3d$ electrons into three $3d$ orbitals.</li>
      <li>This vacates two inner $3d$ orbitals, allowing <b>$d^2sp^3$ hybridization</b> using inner $(n-1)d$ orbitals.</li>
      <li>Hence, it is an <b>inner orbital (low spin) complex</b>.</li>
    </ul>
    <br>
    <b>2. $[\\text{Ni(NH}_3)_6]^{2+}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Nickel is in $+2$ oxidation state: $\\text{Ni}^{2+}: [\\text{Ar}] 3d^8$.</li>
      <li>Even if pairing occurs, only one $3d$ orbital can become empty, but octahedral hybridization requires two vacant $d$-orbitals.</li>
      <li>Therefore, inner $3d$ orbitals cannot be used. The complex utilizes outer $4d$ orbitals, undergoing <b>$sp^3d^2$ hybridization</b>.</li>
      <li>Hence, it is an <b>outer orbital (high spin) complex</b>.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Co³⁺ (3d⁶): NH₃ causes pairing yielding two vacant 3d orbitals → d²sp³ (inner orbital)', '1 Mark'],
    ['Ni²⁺ (3d⁸): Cannot provide two inner 3d orbitals → forced sp³d² using 4d (outer orbital)', '1 Mark']
  ]
));

// Question 5.9 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q9', 'In-Text 5.9', 'NCERT In-Text',
  'Predict the number of unpaired electrons in the square planar $[\\text{Pt(CN)}_4]^{2-}$ ion.',
  `<div class="step">
    <b>Analysis:</b><br>
    Platinum belongs to the $5d$ transition series ($Z = 78$).<br>
    Oxidation state of $\\text{Pt} = +2$. Electronic configuration: $\\text{Pt}^{2+}: [\\text{Xe}] 5d^8$.<br><br>
    <b>Crystal Field & Spin Pairing:</b><br>
    For heavier transition metal ions ($4d$ and $5d$ series), crystal field splitting energy is exceptionally high ($\Delta$ is ~50% larger than $3d$). Furthermore, $\\text{CN}^-$ is a strong field ligand.<br>
    Consequently, electron pairing energy is much smaller than crystal field splitting ($P \\ll \\Delta$). All 8 electrons in the $5d^8$ configuration are completely paired up into the lower four $d$-orbitals, vacating the $d_{x^2-y^2}$ orbital for $dsp^2$ hybridization.<br><br>
    <b>Conclusion:</b> The number of unpaired electrons is <b>$n = 0$</b> (diamagnetic).
  </div>`,
  '2 Marks',
  [
    ['Configuration of Pt²⁺ (5d⁸) and square planar dsp² geometry', '1 Mark'],
    ['Complete spin-pairing due to large 5d splitting → 0 unpaired electrons', '1 Mark']
  ]
));

// Question 5.10 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q10', 'In-Text 5.10', 'NCERT In-Text',
  'The hexaquo manganese(II) ion contains five unpaired electrons, while the hexacyanoion contains only one unpaired electron. Explain using Crystal Field Theory.',
  `<div class="step">
    <b>CFT Explanation:</b><br>
    In both complexes, manganese is in $+2$ oxidation state: $\\text{Mn}^{2+}: [\\text{Ar}] 3d^5$.<br>
    In an octahedral crystal field, the $d$-orbitals split into lower energy $t_{2g}$ (triply degenerate) and higher energy $e_g$ (doubly degenerate) levels by energy $\\Delta_o$.<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{Mn(H}_2\\text{O)}_6]^{2+}$:</strong>
        <br>$\\text{H}_2\\text{O}$ is a weak field ligand, so $\\mathbf{\\Delta_o < P}$ (pairing energy is greater than crystal field splitting).
        <br>Electrons occupy orbitals singly following Hund\'s rule: configuration is $\\mathbf{t_{2g}^3 e_g^2}$.
        <br>Number of unpaired electrons = <b>5</b> (high spin).</li>
      <li><strong>$[\\text{Mn(CN)}_6]^{4-}$:</strong>
        <br>$\\text{CN}^-$ is a strong field ligand, so $\\mathbf{\\Delta_o > P}$ (crystal field splitting is greater than pairing energy).
        <br>Electrons pair up preferentially in lower $t_{2g}$ orbitals: configuration is $\\mathbf{t_{2g}^5 e_g^0}$.
        <br>Number of unpaired electrons = <b>1</b> (low spin).</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['[Mn(H₂O)₆]²⁺: Δ_o < P, weak field → t₂g³ e_g² configuration (5 unpaired e⁻)', '1 Mark'],
    ['[Mn(CN)₆]⁴⁻: Δ_o > P, strong field → t₂g⁵ e_g⁰ configuration (1 unpaired e⁻)', '1 Mark']
  ]
));

// Question 5.11 (In-Text)
questions.push(createQCard(
  'c12c-ch5-q11', 'In-Text 5.11', 'NCERT In-Text',
  'Calculate the overall complex dissociation equilibrium constant for the $[\\text{Cu(NH}_3)_4]^{2+}$ ion, given that $\\beta_4$ for this complex is $2.1 \\times 10^{13}$.',
  `<div class="step">
    <b>Relation between Formation and Dissociation Constants:</b><br>
    The overall complex formation (stability) constant $\\beta_4$ and the overall instability (dissociation) constant $K_d$ are reciprocal to each other:
    $$K_d = \\frac{1}{\\beta_4}$$
    <br>
    <b>Calculation:</b>
    Given: $\\beta_4 = 2.1 \\times 10^{13}$
    $$K_d = \\frac{1}{2.1 \\times 10^{13}} = \\frac{1}{2.1} \\times 10^{-13} = 0.476 \\times 10^{-13} = \\mathbf{4.76 \\times 10^{-14}}$$
    <b>Answer:</b> The overall dissociation equilibrium constant is <b>$4.76 \\times 10^{-14}$</b>.
  </div>`,
  '2 Marks',
  [
    ['Reciprocal formula $K_d = 1 / \\beta_4$', '1 Mark'],
    ['Accurate calculation yielding $4.76 \\times 10^{-14}$', '1 Mark']
  ]
));

// ============================================================================
// PART 2: NCERT END-OF-CHAPTER EXERCISES (5.1 to 5.29)
// ============================================================================

// Exercise 5.1
questions.push(createQCard(
  'c12c-ch5-q12', 'Exercise 5.1', 'NCERT Exercise',
  'Explain the bonding in coordination compounds in terms of Werner\'s postulates.',
  `<div class="step">
    <b>Werner\'s Postulates:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Two Types of Valencies:</strong> In coordination compounds, metals exhibit two types of valency: <b>Primary Valency</b> and <b>Secondary Valency</b>.</li>
      <li><strong>Primary Valency:</strong>
        <br>• Ionisable.
        <br>• Corresponds to the <b>oxidation state</b> of the central metal atom/ion.
        <br>• Satisfied only by negative ions (anions).</li>
      <li><strong>Secondary Valency:</strong>
        <br>• Non-ionisable.
        <br>• Corresponds to the <b>coordination number</b> of the central metal ion and is fixed for a metal in a given state.
        <br>• Satisfied by neutral molecules (e.g., $\text{NH}_3, \text{H}_2\text{O}$) or negative ions (e.g., $\text{Cl}^-, \text{CN}^-$).</li>
      <li><strong>Directional Nature & Geometry:</strong> Secondary valencies are directed towards fixed spatial positions around the central metal atom, giving rise to definite geometric shapes (octahedral, tetrahedral, square planar).</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Postulate 1 & 2: Primary valency (ionisable, oxidation state)', '1 Mark'],
    ['Postulate 3: Secondary valency (non-ionisable, coordination number)', '1 Mark'],
    ['Postulate 4: Directional character defining coordination polyhedra', '1 Mark']
  ]
));

// Exercise 5.2
questions.push(createQCard(
  'c12c-ch5-q13', 'Exercise 5.2', 'NCERT Exercise',
  '$\\text{FeSO}_4$ solution mixed with $(\\text{NH}_4)_2\\text{SO}_4$ in $1:1$ molar ratio gives the test of $\\text{Fe}^{2+}$ ion but $\\text{CuSO}_4$ solution mixed with aqueous ammonia in $1:4$ molar ratio does not give the test of $\\text{Cu}^{2+}$ ion. Explain why?',
  `<div class="step">
    <b>Reason:</b><br><br>
    <b>1. $\\text{FeSO}_4$ and $(\\text{NH}_4)_2\\text{SO}_4$ (Mohr\'s Salt):</b><br>
    When mixed in $1:1$ ratio, they form a <b>double salt</b>, Mohr\'s salt $[\\text{FeSO}_4 \\cdot (\\text{NH}_4)_2\\text{SO}_4 \\cdot 6\\text{H}_2\\text{O}]$.<br>
    Double salts dissociate completely into their individual constituent simple ions in aqueous solution:
    $$\\text{FeSO}_4 \\cdot (\\text{NH}_4)_2\\text{SO}_4 \\cdot 6\\text{H}_2\\text{O}(s) \\xrightarrow{\\text{water}} \\mathbf{\\text{Fe}^{2+}} + 2\\text{NH}_4^+ + 2\\text{SO}_4^{2-} + 6\\text{H}_2\\text{O}$$
    Because free $\\text{Fe}^{2+}$ ions exist in solution, it gives the characteristic test for $\\text{Fe}^{2+}$.<br><br>
    <b>2. $\\text{CuSO}_4$ and $\\text{NH}_3$ (Complex Compound):</b><br>
    When $\\text{CuSO}_4$ is mixed with aqueous ammonia in $1:4$ ratio, it forms a <b>coordination complex</b>, tetraamminecopper(II) sulphate:
    $$\\text{CuSO}_4 + 4\\text{NH}_3 \\rightarrow [\\text{Cu(NH}_3)_4]\\text{SO}_4$$
    In aqueous solution, the coordination entity $[\\text{Cu(NH}_3)_4]^{2+}$ does not dissociate into simple $\\text{Cu}^{2+}$ ions:
    $$[\\text{Cu(NH}_3)_4]\\text{SO}_4(aq) \\rightleftharpoons [\\text{Cu(NH}_3)_4]^{2+}(aq) + \\text{SO}_4^{2-}(aq)$$
    Due to the absence of free $\\text{Cu}^{2+}$ ions, it fails to give the test for $\\text{Cu}^{2+}$ ion.
  </div>`,
  '3 Marks',
  [
    ['Explanation of Mohr\'s salt as a double salt dissociating into free Fe²⁺ ions', '1½ Marks'],
    ['Explanation of [Cu(NH₃)₄]SO₄ as a complex that does not dissociate into free Cu²⁺', '1½ Marks']
  ]
));

// Exercise 5.3
questions.push(createQCard(
  'c12c-ch5-q14', 'Exercise 5.3', 'NCERT Exercise',
  'Explain with two examples each of the following: coordination entity, ligand, coordination number, coordination polyhedron, homoleptic and heteroleptic.',
  `<div class="step">
    <b>Definitions with Examples:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Coordination Entity:</strong> A central metal atom/ion bonded to a fixed number of ions or molecules enclosed in square brackets.<br>
        <em>Examples:</em> $[\\text{Co(NH}_3)_6]^{3+}, [\\text{Ni(CO)}_4]$.</li>
      <li><strong>Ligand:</strong> Neutral molecules or ions bound to the central metal atom/ion through coordinate bonds.<br>
        <em>Examples:</em> $\\text{Cl}^-, \\text{NH}_3, \\text{H}_2\\text{O}, \\text{CN}^-$.</li>
      <li><strong>Coordination Number (CN):</strong> Total number of ligand donor atoms directly bonded to the central metal ion.<br>
        <em>Examples:</em> In $[\\text{PtCl}_6]^{2-}$, $\\text{CN} = 6$; in $[\\text{Ni(NH}_3)_4]^{2+}$, $\\text{CN} = 4$.</li>
      <li><strong>Coordination Polyhedron:</strong> The spatial arrangement of the ligand donor atoms directly attached to the central metal ion.<br>
        <em>Examples:</em> Octahedral ($[\\text{Cr(NH}_3)_6]^{3+}$), Tetrahedral ($[\\text{Ni(CO)}_4]$), Square planar ($[\\text{PtCl}_4]^{2-}$).</li>
      <li><strong>Homoleptic Complex:</strong> Complexes in which the metal is bound to only one kind of donor ligand.<br>
        <em>Examples:</em> $[\\text{Co(NH}_3)_6]^{3+}, [\\text{Fe(CN)}_6]^{4-}$.</li>
      <li><strong>Heteroleptic Complex:</strong> Complexes in which the metal is bound to more than one kind of donor ligand.<br>
        <em>Examples:</em> $[\\text{Co(NH}_3)_4\\text{Cl}_2]^+, [\\text{Pt(NH}_3)_2\\text{Cl}_2]$.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Coordination entity, ligand, coordination number defined with 2 examples each', '1½ Marks'],
    ['Coordination polyhedron, homoleptic, heteroleptic defined with 2 examples each', '1½ Marks']
  ]
));

// Exercise 5.4
questions.push(createQCard(
  'c12c-ch5-q15', 'Exercise 5.4', 'NCERT Exercise',
  'What is meant by unidentate, didentate and ambidentate ligands? Give two examples for each.',
  `<div class="step">
    <b>Types of Ligands:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Unidentate (Monodentate) Ligand:</strong> A ligand that binds to the central metal ion through only a single donor atom.<br>
        <em>Examples:</em> Chloride ion ($\\text{Cl}^-$), Ammonia ($\\text{NH}_3$), Water ($\\text{H}_2\\text{O}$).</li>
      <li><strong>Didentate (Bidentate) Ligand:</strong> A ligand that can bind through two donor atoms simultaneously.<br>
        <em>Examples:</em>
        <br>• Ethane-1,2-diamine ($\text{H}_2\text{NCH}_2\text{CH}_2\text{NH}_2$, abbreviated as 'en').
        <br>• Oxalate ion ($\text{C}_2\text{O}_4^{2-}$ or $\text{ox}^{2-}$).</li>
      <li><strong>Ambidentate Ligand:</strong> A unidentate ligand that has two different donor atoms and can coordinate through either of the two atoms to the central metal atom.<br>
        <em>Examples:</em>
        <br>• $\\text{NO}_2^-$ ion: can bind through Nitrogen ($\\text{M}-\\text{NO}_2$, nitro) or Oxygen ($\\text{M}-\\text{ONO}$, nitrito).
        <br>• $\\text{SCN}^-$ ion: can bind through Sulfur ($\\text{M}-\\text{SCN}$, thiocyanato) or Nitrogen ($\\text{M}-\\text{NCS}$, isothiocyanato).</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Unidentate definition and examples (Cl⁻, NH₃)', '1 Mark'],
    ['Didentate definition and examples (en, C₂O₄²⁻)', '1 Mark'],
    ['Ambidentate definition and examples (NO₂⁻, SCN⁻)', '1 Mark']
  ]
));

// Exercise 5.5
questions.push(createQCard(
  'c12c-ch5-q16', 'Exercise 5.5', 'NCERT Exercise',
  'Specify the oxidation numbers of the metals in the following coordination entities:<br>(i) $[\\text{Co(H}_2\\text{O)(CN)(en)}_2]^{2+}$<br>(ii) $[\\text{CoBr}_2(\\text{en})_2]^+$<br>(iii) $[\\text{PtCl}_4]^{2-}$<br>(iv) $\\text{K}_3[\\text{Fe(CN)}_6]$<br>(v) $[\\text{Cr(NH}_3)_3\\text{Cl}_3]$',
  `<div class="step">
    <b>Calculations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{Co(H}_2\\text{O)(CN)(en)}_2]^{2+}$:</strong><br>
        $x + 0 + (-1) + 2(0) = +2 \\implies x - 1 = +2 \\implies \\mathbf{x = +3}$ (Cobalt is in <b>$+3$</b> state).</li>
      <li><strong>$[\\text{CoBr}_2(\\text{en})_2]^+$:</strong><br>
        $x + 2(-1) + 2(0) = +1 \\implies x - 2 = +1 \\implies \\mathbf{x = +3}$ (Cobalt is in <b>$+3$</b> state).</li>
      <li><strong>$[\\text{PtCl}_4]^{2-}$:</strong><br>
        $x + 4(-1) = -2 \\implies x - 4 = -2 \\implies \\mathbf{x = +2}$ (Platinum is in <b>$+2$</b> state).</li>
      <li><strong>$\\text{K}_3[\\text{Fe(CN)}_6]$:</strong><br>
        Coordination entity is $[\\text{Fe(CN)}_6]^{3-}$.<br>
        $x + 6(-1) = -3 \\implies x - 6 = -3 \\implies \\mathbf{x = +3}$ (Iron is in <b>$+3$</b> state).</li>
      <li><strong>$[\\text{Cr(NH}_3)_3\\text{Cl}_3]$:</strong><br>
        $x + 3(0) + 3(-1) = 0 \\implies x - 3 = 0 \\implies \\mathbf{x = +3}$ (Chromium is in <b>$+3$</b> state).</li>
    </ol>
  </div>`,
  '2½ Marks',
  [
    ['(i) Co = +3 and (ii) Co = +3', '1 Mark'],
    ['(iii) Pt = +2 and (iv) Fe = +3', '1 Mark'],
    ['(v) Cr = +3', '½ Mark']
  ]
));

// Exercise 5.6
questions.push(createQCard(
  'c12c-ch5-q17', 'Exercise 5.6', 'NCERT Exercise',
  'Using IUPAC norms write the formulas for the following:<br>(i) Tetrahydroxozincate(II)<br>(ii) Potassium tetrachloridopalladate(II)<br>(iii) Diamminedichloridoplatinum(II)<br>(iv) Potassium tetracyanonickelate(II)<br>(v) Pentaamminenitrito-O-cobalt(III)<br>(vi) Hexaamminecobalt(III) sulphate<br>(vii) Potassium tri(oxalato)chromate(III)<br>(viii) Hexaammineplatinum(IV)<br>(ix) Tetrabromidocuprate(II)<br>(x) Pentaamminenitrito-N-cobalt(III)',
  `<div class="step">
    <b>Formulas:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Tetrahydroxozincate(II):</strong> $[\\text{Zn(OH)}_4]^{2-}$</li>
      <li><strong>Potassium tetrachloridopalladate(II):</strong> $\\text{K}_2[\\text{PdCl}_4]$</li>
      <li><strong>Diamminedichloridoplatinum(II):</strong> $[\\text{Pt(NH}_3)_2\\text{Cl}_2]$</li>
      <li><strong>Potassium tetracyanonickelate(II):</strong> $\\text{K}_2[\\text{Ni(CN)}_4]$</li>
      <li><strong>Pentaamminenitrito-O-cobalt(III):</strong> $[\\text{Co(NH}_3)_5(\\text{ONO})]^{2+}$</li>
      <li><strong>Hexaamminecobalt(III) sulphate:</strong> $[\\text{Co(NH}_3)_6]_2(\\text{SO}_4)_3$</li>
      <li><strong>Potassium tri(oxalato)chromate(III):</strong> $\\text{K}_3[\\text{Cr(C}_2\\text{O}_4)_3]$</li>
      <li><strong>Hexaammineplatinum(IV):</strong> $[\\text{Pt(NH}_3)_6]^{4+}$</li>
      <li><strong>Tetrabromidocuprate(II):</strong> $[\\text{CuBr}_4]^{2-}$</li>
      <li><strong>Pentaamminenitrito-N-cobalt(III):</strong> $[\\text{Co(NH}_3)_5(\\text{NO}_2)]^{2+}$</li>
    </ol>
  </div>`,
  '5 Marks',
  [
    ['Formulas (i) to (v) correctly written with charges', '2½ Marks'],
    ['Formulas (vi) to (x) correctly written with charges', '2½ Marks']
  ]
));

// Exercise 5.7
questions.push(createQCard(
  'c12c-ch5-q18', 'Exercise 5.7', 'NCERT Exercise',
  'Using IUPAC norms write the systematic names of the following:<br>(i) $[\\text{Co(NH}_3)_6]\\text{Cl}_3$<br>(ii) $[\\text{Pt(NH}_3)_2\\text{Cl(NH}_2\\text{CH}_3)]\\text{Cl}$<br>(iii) $[\\text{Ti(H}_2\\text{O)}_6]^{3+}$<br>(iv) $[\\text{Co(NH}_3)_4\\text{Cl(NO}_2)]\\text{Cl}$<br>(v) $[\\text{Mn(H}_2\\text{O)}_6]^{2+}$<br>(vi) $[\\text{NiCl}_4]^{2-}$<br>(vii) $[\\text{Ni(NH}_3)_6]\\text{Cl}_2$<br>(viii) $[\\text{Co(en)}_3]^{3+}$<br>(ix) $[\\text{Ni(CO)}_4]$',
  `<div class="step">
    <b>Systematic IUPAC Names:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{Co(NH}_3)_6]\\text{Cl}_3$:</strong> Hexaamminecobalt(III) chloride</li>
      <li><strong>$[\\text{Pt(NH}_3)_2\\text{Cl(NH}_2\\text{CH}_3)]\\text{Cl}$:</strong> Diamminechlorido(methanamine)platinum(II) chloride</li>
      <li><strong>$[\\text{Ti(H}_2\\text{O)}_6]^{3+}$:</strong> Hexaaquatitanium(III) ion</li>
      <li><strong>$[\\text{Co(NH}_3)_4\\text{Cl(NO}_2)]\\text{Cl}$:</strong> Tetraamminechloridonitrito-N-cobalt(III) chloride</li>
      <li><strong>$[\\text{Mn(H}_2\\text{O)}_6]^{2+}$:</strong> Hexaaquamanganese(II) ion</li>
      <li><strong>$[\\text{NiCl}_4]^{2-}$:</strong> Tetrachloridonickelate(II) ion</li>
      <li><strong>$[\\text{Ni(NH}_3)_6]\\text{Cl}_2$:</strong> Hexaamminenickel(II) chloride</li>
      <li><strong>$[\\text{Co(en)}_3]^{3+}$:</strong> Tris(ethane-1,2-diamine)cobalt(III) ion</li>
      <li><strong>$[\\text{Ni(CO)}_4]$:</strong> Tetracarbonylnickel(0)</li>
    </ol>
  </div>`,
  '4½ Marks',
  [
    ['Names (i) to (iv) correct with Roman numerals and prefixes', '2 Marks'],
    ['Names (v) to (ix) correct with proper anion/neutral naming', '2½ Marks']
  ]
));

// Exercise 5.8
questions.push(createQCard(
  'c12c-ch5-q19', 'Exercise 5.8', 'NCERT Exercise',
  'List various types of isomerism possible for coordination compounds, giving an example of each.',
  `<div class="step">
    <b>Classification of Isomerism in Coordination Compounds:</b><br><br>
    <b>A. Structural Isomerism:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Ionisation Isomerism:</strong> Exchange of ligands between coordination sphere and ionisation sphere.<br>
        <em>Example:</em> $[\\text{Co(NH}_3)_5\\text{SO}_4]\\text{Br}$ and $[\\text{Co(NH}_3)_5\\text{Br}]\\text{SO}_4$.</li>
      <li><strong>Hydrate (Solvate) Isomerism:</strong> Water molecules act as ligands or as water of crystallization.<br>
        <em>Example:</em> $[\\text{Cr(H}_2\\text{O)}_6]\\text{Cl}_3$ (violet) and $[\\text{Cr(H}_2\\text{O)}_5\\text{Cl}]\\text{Cl}_2 \\cdot \\text{H}_2\\text{O}$ (grey-green).</li>
      <li><strong>Linkage Isomerism:</strong> Arises in complexes containing ambidentate ligands.<br>
        <em>Example:</em> $[\\text{Co(NH}_3)_5(\\text{NO}_2)]^{2+}$ (nitro, yellow) and $[\\text{Co(NH}_3)_5(\\text{ONO})]^{2+}$ (nitrito, red).</li>
      <li><strong>Coordination Isomerism:</strong> Interchange of ligands between cationic and anionic coordination spheres.<br>
        <em>Example:</em> $[\\text{Co(NH}_3)_6][\\text{Cr(CN)}_6]$ and $[\\text{Cr(NH}_3)_6][\\text{Co(CN)}_6]$.</li>
    </ol>
    <br>
    <b>B. Stereoisomerism:</b>
    <ol start="5" style="margin-left:20px; line-height:1.75;">
      <li><strong>Geometrical Isomerism:</strong> Different spatial arrangements of ligands around the metal ion (cis/trans or fac/mer).<br>
        <em>Example:</em> $cis\\text{-}[\\text{Pt(NH}_3)_2\\text{Cl}_2]$ and $trans\\text{-}[\\text{Pt(NH}_3)_2\\text{Cl}_2]$.</li>
      <li><strong>Optical Isomerism:</strong> Non-superimposable mirror images (enantiomers) that rotate plane-polarised light.<br>
        <em>Example:</em> $d\\text{-}$ and $l\\text{-}[\\text{Co(en)}_3]^{3+}$.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Four structural isomerisms with examples (ionisation, hydrate, linkage, coordination)', '2 Marks'],
    ['Two stereoisomerisms with examples (geometrical, optical)', '1 Mark']
  ]
));

// Exercise 5.9
questions.push(createQCard(
  'c12c-ch5-q20', 'Exercise 5.9', 'NCERT Exercise',
  'How many geometrical isomers are possible in the following coordination entities?<br>(i) $[\\text{Cr(C}_2\\text{O}_4)_3]^{3-}$<br>(ii) $[\\text{Co(NH}_3)_3\\text{Cl}_3]$',
  `<div class="step">
    <b>1. $[\\text{Cr(C}_2\\text{O}_4)_3]^{3-}$:</b><br>
    This is an octahedral complex of type $[\\text{M(AA)}_3]$ containing three symmetrical bidentate ligands.<br>
    Because all coordination positions are occupied symmetrically by identical chelating rings, <b>no geometrical isomerism is possible (0 geometrical isomers)</b>. (It only exhibits optical isomerism with $d$ and $l$ enantiomers).<br><br>
    <b>2. $[\\text{Co(NH}_3)_3\\text{Cl}_3]$:</b><br>
    This is an octahedral complex of type $[\\text{MA}_3\\text{B}_3]$. It exhibits <b>2 geometrical isomers</b>:
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Facial ($fac$) isomer:</strong> The three identical ligands ($\text{NH}_3$) occupy the corners of the same triangular face of the octahedron.</li>
      <li><strong>Meridional ($mer$) isomer:</strong> The three identical ligands occupy positions around the meridian of the octahedron (two trans to each other and one cis).</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['(i) [Cr(C₂O₄)₃]³⁻ has 0 geometrical isomers', '1 Mark'],
    ['(ii) [Co(NH₃)₃Cl₃] has 2 geometrical isomers (fac and mer)', '1 Mark']
  ]
));

// Exercise 5.10
questions.push(createQCard(
  'c12c-ch5-q21', 'Exercise 5.10', 'NCERT Exercise',
  'Draw the structures of optical isomers of:<br>(i) $[\\text{Cr(C}_2\\text{O}_4)_3]^{3-}$<br>(ii) $[\\text{PtCl}_2(\\text{en})_2]^{2+}$<br>(iii) $[\\text{Cr(NH}_3)_2\\text{Cl}_2(\\text{en})]^+$',
  `<div class="step">
    <b>Optical Isomers (Enantiomers):</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{Cr(C}_2\\text{O}_4)_3]^{3-}$:</strong><br>
        Complex of type $[\\text{M(AA)}_3]$. It lacks any plane or centre of symmetry and exists as a pair of non-superimposable mirror images: <b>$d\\text{-form}$ (dextro)</b> and <b>$l\\text{-form}$ (laevo)</b>.</li>
      <li><strong>$[\\text{PtCl}_2(\\text{en})_2]^{2+}$:</strong><br>
        • The <em>trans-isomer</em> has a plane of symmetry and is optically inactive.<br>
        • The <b>cis-isomer</b> is chiral and non-superimposable on its mirror image, exhibiting <b>$d$</b> and <b>$l$</b> optical isomers.</li>
      <li><strong>$[\\text{Cr(NH}_3)_2\\text{Cl}_2(\\text{en})]^+$:</strong><br>
        The isomer having both $\\text{NH}_3$ and $\\text{Cl}^-$ in <em>cis</em> positions relative to each other is asymmetric (chiral) and exists as <b>$d$ and $l$ enantiomeric pairs</b>.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) d and l forms for [Cr(ox)₃]³⁻', '1 Mark'],
    ['(ii) Optical resolution of cis-[PtCl₂(en)₂]²⁺ (trans is inactive)', '1 Mark'],
    ['(iii) Optical isomers of cis-[Cr(NH₃)₂Cl₂(en)]⁺', '1 Mark']
  ]
));

// Exercise 5.11
questions.push(createQCard(
  'c12c-ch5-q22', 'Exercise 5.11', 'NCERT Exercise',
  'Draw all the isomers (geometrical and optical) of:<br>(i) $[\\text{CoCl}_2(\\text{en})_2]^+$<br>(ii) $[\\text{Co(NH}_3)\\text{Cl(en)}_2]^{2+}$<br>(iii) $[\\text{Co(NH}_3)_2\\text{Cl}_2(\\text{en})]^+$',
  `<div class="step">
    <b>All Possible Isomers:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{CoCl}_2(\\text{en})_2]^+$ (Type $[\\text{M(AA)}_2\\text{X}_2]$):</strong>
        <br>• <em>trans-isomer:</em> Two $\\text{Cl}^-$ at $180^\\circ$ (achiral, optically inactive).
        <br>• <em>cis-isomer:</em> Two $\\text{Cl}^-$ adjacent at $90^\\circ$ (chiral, exists as $d$ and $l$ enantiomers).
        <br><em>Total isomers = 3 (1 trans + 2 cis enantiomers).</em></li>
      <li><strong>$[\\text{Co(NH}_3)\\text{Cl(en)}_2]^{2+}$ (Type $[\\text{M(AA)}_2\\text{XY}]$):</strong>
        <br>• <em>trans-isomer:</em> $\\text{NH}_3$ and $\\text{Cl}^-$ opposite to each other (optically inactive).
        <br>• <em>cis-isomer:</em> $\\text{NH}_3$ and $\\text{Cl}^-$ adjacent (optically active, $d$ and $l$ forms).
        <br><em>Total isomers = 3 (1 trans + 2 cis enantiomers).</em></li>
      <li><strong>$[\\text{Co(NH}_3)_2\\text{Cl}_2(\\text{en})]^+$ (Type $[\\text{M(AA)A}_2\\text{B}_2]$):</strong>
        <br>• trans-$\text{Cl}_2$, cis-$(\text{NH}_3)_2$ (achiral).
        <br>• trans-$(\text{NH}_3)_2$, cis-$\text{Cl}_2$ (achiral).
        <br>• cis-$\text{Cl}_2$, cis-$(\text{NH}_3)_2$ (chiral, exists as $d$ and $l$ optical isomers).
        <br><em>Total isomers = 4.</em></li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) 3 isomers for [CoCl₂(en)₂]⁺ (trans + cis-d + cis-l)', '1 Mark'],
    ['(ii) 3 isomers for [Co(NH₃)Cl(en)₂]²⁺ (trans + cis-d + cis-l)', '1 Mark'],
    ['(iii) 4 isomers for [Co(NH₃)₂Cl₂(en)]⁺', '1 Mark']
  ]
));

// Exercise 5.12
questions.push(createQCard(
  'c12c-ch5-q23', 'Exercise 5.12', 'NCERT Exercise',
  'Write all the geometrical isomers of $[\\text{Pt(NH}_3)(\\text{Br})(\\text{Cl})(\\text{py})]$ and how many of these will exhibit optical isomerism?',
  `<div class="step">
    <b>Geometrical Isomerism in Square Planar $[\\text{MABCD}]$:</b><br>
    The complex $[\\text{Pt(NH}_3)(\\text{Br})(\\text{Cl})(\\text{py})]$ is a square planar complex containing four different monodentate ligands ($[\\text{MABCD}]$).<br><br>
    By fixing the position of one ligand (e.g., $\\text{NH}_3$) and placing the other three ligands trans to it one by one, we obtain <b>3 geometrical isomers</b>:
    <ol style="margin-left:20px; line-height:1.75;">
      <li>Isomer 1: $\\text{NH}_3$ trans to $\\text{Cl}$ (with $\\text{Br}$ trans to $\\text{py}$).</li>
      <li>Isomer 2: $\\text{NH}_3$ trans to $\\text{Br}$ (with $\\text{Cl}$ trans to $\\text{py}$).</li>
      <li>Isomer 3: $\\text{NH}_3$ trans to $\\text{py}$ (with $\\text{Br}$ trans to $\\text{Cl}$).</li>
    </ol>
    <br>
    <b>Optical Isomerism:</b><br>
    Square planar complexes possess a plane of symmetry (the molecular plane itself contains all atoms). Therefore, <b>none of these isomers exhibits optical isomerism (0 optical isomers)</b>.
  </div>`,
  '2 Marks',
  [
    ['Identification of 3 geometrical isomers for square planar [MABCD]', '1 Mark'],
    ['Stating that none show optical isomerism due to molecular plane of symmetry', '1 Mark']
  ]
));

// Exercise 5.13
questions.push(createQCard(
  'c12c-ch5-q24', 'Exercise 5.13', 'NCERT Exercise',
  'Aqueous copper sulphate solution (blue in colour) gives:<br>(i) a green precipitate with aqueous potassium fluoride and<br>(ii) a bright green solution with aqueous potassium chloride.<br>Explain these experimental results.',
  `<div class="step">
    <b>Explanation:</b><br>
    Aqueous copper sulphate solution exists as the hexaaquacopper(II) complex $[\\text{Cu(H}_2\\text{O)}_6]^{2+}$ (or $[\\text{Cu(H}_2\\text{O)}_4]^{2+}$), which is blue in colour due to $d-d$ transitions.<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>With aqueous Potassium Fluoride ($\text{KF}$):</strong><br>
        Fluoride is a weak field ligand. When $\\text{KF}$ is added, $\\text{F}^-$ replaces water ligands to form green sparingly soluble tetrafluoridocuprate(II) complex precipitate:
        $$[\\text{Cu(H}_2\\text{O)}_4]^{2+} + 4\\text{F}^- \\rightarrow \\mathbf{[\\text{CuF}_4]^{2-} (\\text{green precipitate})} + 4\\text{H}_2\\text{O}$$
      </li>
      <li><strong>With aqueous Potassium Chloride ($\text{KCl}$):</strong><br>
        Chloride is a ligand that replaces water molecules to form the tetrachloridocuprate(II) complex, which has a flattened tetrahedral geometry and absorbs in the orange-red region, giving a <b>bright green solution</b>:
        $$[\\text{Cu(H}_2\\text{O)}_4]^{2+} + 4\\text{Cl}^- \\rightarrow \\mathbf{[\\text{CuCl}_4]^{2-} (\\text{bright green solution})} + 4\\text{H}_2\\text{O}$$
      </li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Formation of sparingly soluble [CuF₄]²⁻ green ppt with KF', '1 Mark'],
    ['Formation of soluble [CuCl₄]²⁻ bright green complex solution with KCl', '1 Mark']
  ]
));

// Exercise 5.14
questions.push(createQCard(
  'c12c-ch5-q25', 'Exercise 5.14', 'NCERT Exercise',
  'What is the coordination entity formed when excess of aqueous $\\text{KCN}$ is added to an aqueous solution of copper sulphate? Why is it that no precipitate of copper sulphide is obtained when $\\text{H}_2\\text{S}(g)$ is passed through this solution?',
  `<div class="step">
    <b>1. Reactions with Excess $\\text{KCN}$:</b><br>
    When $\\text{KCN}$ is added to $\\text{CuSO}_4$, cupric cyanide is initially formed, which decomposes into cuprous cyanide and cyanogen gas ($(\\text{CN})_2$):
    $$2\\text{CuSO}_4 + 4\\text{KCN} \\rightarrow 2\\text{Cu(CN)}_2 + 2\\text{K}_2\\text{SO}_4$$
    $$2\\text{Cu(CN)}_2 \\rightarrow 2\\text{CuCN} + (\\text{CN})_2 \\uparrow$$
    Cuprous cyanide dissolves in excess $\\text{KCN}$ to form the highly stable soluble complex <b>potassium tetracyanocuprate(I)</b>:
    $$\\text{CuCN} + 3\\text{KCN} \\rightarrow \\mathbf{\\text{K}_3[\\text{Cu(CN)}_4]}$$
    Coordination entity formed: $\\mathbf{[\\text{Cu(CN)}_4]^{3-}}$.<br><br>
    <b>2. Reason why $\\text{H}_2\\text{S}$ does not precipitate $\\text{CuS}$:</b><br>
    The complex $[\\text{Cu(CN)}_4]^{3-}$ is extremely stable with an extraordinarily high formation constant ($\\beta_4$). It undergoes negligible dissociation into free $\\text{Cu}^+$ or $\\text{Cu}^{2+}$ ions in solution:
    $$[\\text{Cu(CN)}_4]^{3-} \\rightleftharpoons \\text{Cu}^+ + 4\\text{CN}^- \\quad (\\text{negligible } [\\text{Cu}^+])$$
    The concentration of free copper ions is so minuscule that the ionic product $[\text{Cu}^+][\text{S}^{2-}]$ fails to exceed the solubility product ($K_{sp}$) of copper sulphide. Hence, no precipitate of copper sulphide is obtained.
  </div>`,
  '3 Marks',
  [
    ['Formation of [Cu(CN)₄]³⁻ (or K₃[Cu(CN)₄]) via redox and complexation', '1½ Marks'],
    ['Extremely high stability constant ensuring ionic product < Ksp for CuS', '1½ Marks']
  ]
));

// Exercise 5.15
questions.push(createQCard(
  'c12c-ch5-q26', 'Exercise 5.15', 'NCERT Exercise',
  'Discuss the nature of bonding in the following coordination entities on the basis of valence bond theory:<br>(i) $[\\text{Fe(CN)}_6]^{4-}$<br>(ii) $[\\text{FeF}_6]^{3-}$<br>(iii) $[\\text{Co(C}_2\\text{O}_4)_3]^{3-}$<br>(iv) $[\\text{CoF}_6]^{3-}$',
  `<div class="step">
    <b>VBT Analysis of Bonding:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{Fe(CN)}_6]^{4-}$:</strong><br>
        $\\text{Fe}^{2+} ([\\text{Ar}] 3d^6)$. $\\text{CN}^-$ is a strong field ligand, forcing pairing of six $3d$ electrons into three $3d$ orbitals. Two inner $3d$, one $4s$, and three $4p$ orbitals hybridise to form <b>$d^2sp^3$</b> hybrid orbitals. Geometry: Octahedral. Since all electrons are paired ($n = 0$), it is an <b>inner orbital, diamagnetic (low spin)</b> complex.</li>
      <li><strong>$[\\text{FeF}_6]^{3-}$:</strong><br>
        $\\text{Fe}^{3+} ([\\text{Ar}] 3d^5)$. $\\text{F}^-$ is a weak field ligand and cannot cause electron pairing. All 5 electrons in $3d$ remain unpaired. It uses one $4s$, three $4p$, and two outer $4d$ orbitals for <b>$sp^3d^2$</b> hybridization. Geometry: Octahedral. It is an <b>outer orbital, strongly paramagnetic (high spin, $\mu = 5.92\text{ BM}$)</b> complex.</li>
      <li><strong>$[\\text{Co(C}_2\\text{O}_4)_3]^{3-}$:</strong><br>
        $\\text{Co}^{3+} ([\\text{Ar}] 3d^6)$. Chelating oxalate ligand ($\\text{C}_2\\text{O}_4^{2-}$) exerts strong field on $\\text{Co}^{3+}$, forcing complete pairing of six $3d$ electrons. It undergoes <b>$d^2sp^3$</b> hybridization. Geometry: Octahedral. It is an <b>inner orbital, diamagnetic (low spin)</b> complex.</li>
      <li><strong>$[\\text{CoF}_6]^{3-}$:</strong><br>
        $\\text{Co}^{3+} ([\\text{Ar}] 3d^6)$. $\\text{F}^-$ is a weak field ligand and does not force pairing. The $3d^6$ configuration has 4 unpaired electrons. It undergoes <b>$sp^3d^2$</b> hybridization using outer $4d$ orbitals. Geometry: Octahedral. It is an <b>outer orbital, paramagnetic (high spin, $\mu = 4.90\text{ BM}$)</b> complex.</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) [Fe(CN)₆]⁴⁻: d²sp³, inner orbital, diamagnetic', '1 Mark'],
    ['(ii) [FeF₆]³⁻: sp³d², outer orbital, paramagnetic (n=5)', '1 Mark'],
    ['(iii) [Co(ox)₃]³⁻: d²sp³, inner orbital, diamagnetic', '1 Mark'],
    ['(iv) [CoF₆]³⁻: sp³d², outer orbital, paramagnetic (n=4)', '1 Mark']
  ]
));

// Exercise 5.16
questions.push(createQCard(
  'c12c-ch5-q27', 'Exercise 5.16', 'NCERT Exercise',
  'Draw figure to show the splitting of $d$ orbitals in an octahedral crystal field.',
  `<div class="step">
    <b>Octahedral Crystal Field Splitting:</b><br>
    In an octahedral field, six ligands approach the central metal along the Cartesian axes ($x, y, z$).<br>
    The orbitals pointing directly along the axes ($d_{x^2-y^2}$ and $d_{z^2}$) experience greater electrostatic repulsion and are raised in energy (called <b>$e_g$ set</b>).<br>
    The orbitals pointing between the axes ($d_{xy}, d_{yz}, d_{zx}$) experience lesser repulsion and are lowered in energy (called <b>$t_{2g}$ set</b>).<br><br>
    <b>Energy Balance:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Total crystal field splitting energy = $\\Delta_o$.</li>
      <li>$e_g$ orbitals are raised by $+\\frac{3}{5}\\Delta_o = +0.6\\Delta_o$ above the barycentre.</li>
      <li>$t_{2g}$ orbitals are stabilized by $-\\frac{2}{5}\\Delta_o = -0.4\\Delta_o$ below the barycentre.</li>
    </ul>
    <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; margin-top:10px; text-align:center;">
      <pre style="font-family:monospace; font-size:0.85rem; color:#1e293b; display:inline-block; text-align:left;">
                        --- ---  e_g (d_x²-y², d_z²)  [+0.6 Δ_o]
                         ^
                         |
      --- --- --- --- ---|---  Average energy in spherical field (Barycentre)
      (d_xy, d_yz, d_zx, |
       d_x²-y², d_z²)    |
                         v
                    --- --- ---  t_2g (d_xy, d_yz, d_zx) [-0.4 Δ_o]
      </pre>
    </div>
  </div>`,
  '2 Marks',
  [
    ['Splitting of 5 d-orbitals into t₂g (lower) and e_g (higher)', '1 Mark'],
    ['Correct labeling of barycentre, +0.6 Δ_o and -0.4 Δ_o energy shifts', '1 Mark']
  ]
));

// Exercise 5.17
questions.push(createQCard(
  'c12c-ch5-q28', 'Exercise 5.17', 'NCERT Exercise',
  'What is spectrochemical series? Explain the difference between a weak field ligand and a strong field ligand.',
  `<div class="step">
    <b>1. Spectrochemical Series:</b><br>
    An experimentally determined arrangement of ligands in the order of increasing crystal field splitting energy ($\\Delta_o$) values is called the <b>spectrochemical series</b>:
    $$\\text{I}^- < \\text{Br}^- < \\text{S}^{2-} < \\text{SCN}^- < \\text{Cl}^- < \\text{N}_3^- < \\text{F}^- < \\text{OH}^- < \\text{C}_2\\text{O}_4^{2-} < \\text{H}_2\\text{O} < \\text{NCS}^- < \\text{edta}^{4-} < \\text{NH}_3 < \\text{en} < \\text{CN}^- < \\text{CO}$$
    <br>
    <b>2. Weak Field vs Strong Field Ligands:</b><br>
    <table style="width:100%; border-collapse:collapse; margin:10px 0; border:1px solid #cbd5e1;">
      <tr style="background:#f1f5f9;">
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Feature</th>
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Weak Field Ligand</th>
        <th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Strong Field Ligand</th>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:8px;"><strong>Splitting Energy</strong></td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Causes small $\\Delta_o$ splitting ($\\mathbf{\\Delta_o < P}$).</td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Causes large $\\Delta_o$ splitting ($\\mathbf{\\Delta_o > P}$).</td>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:8px;"><strong>Electron Pairing</strong></td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Cannot force pairing of electrons; forms <b>high spin</b> complexes.</td>
        <td style="border:1px solid #cbd5e1; padding:8px;">Forces electron pairing in lower orbitals; forms <b>low spin</b> complexes.</td>
      </tr>
      <tr>
        <td style="border:1px solid #cbd5e1; padding:8px;"><strong>Examples</strong></td>
        <td style="border:1px solid #cbd5e1; padding:8px;">$\\text{I}^-, \\text{Br}^-, \\text{Cl}^-, \\text{F}^-, \\text{H}_2\\text{O}$</td>
        <td style="border:1px solid #cbd5e1; padding:8px;">$\\text{NH}_3, \\text{en}, \\text{CN}^-, \\text{CO}$</td>
      </tr>
    </table>
  </div>`,
  '3 Marks',
  [
    ['Definition of spectrochemical series with partial sequence', '1 Mark'],
    ['Weak field ligand definition: Δ_o < P, high spin complexes', '1 Mark'],
    ['Strong field ligand definition: Δ_o > P, low spin complexes', '1 Mark']
  ]
));

// Exercise 5.18
questions.push(createQCard(
  'c12c-ch5-q29', 'Exercise 5.18', 'NCERT Exercise',
  'What is crystal field splitting energy? How does the magnitude of $\\Delta_o$ decide the actual configuration of $d$ orbitals in a coordination entity?',
  `<div class="step">
    <b>1. Crystal Field Splitting Energy (CFSE / $\\Delta_o$):</b><br>
    The difference in energy between the two sets of degenerate $d$-orbitals ($t_{2g}$ and $e_g$ in octahedral fields) resulting from electrostatic repulsion of approaching ligands is called the <b>crystal field splitting energy</b> (symbolised by $\\Delta_o$).<br><br>
    <b>2. Role of $\\Delta_o$ vs Pairing Energy ($P$):</b><br>
    For a metal ion with $d^4$ to $d^7$ configuration, the actual orbital filling depends on the relative magnitudes of $\\Delta_o$ and pairing energy $P$:
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Case 1: When $\\mathbf{\\Delta_o < P}$ (Weak Field):</strong><br>
        It is energetically more favourable for the 4th electron to enter the higher energy $e_g$ orbital than to pair up in $t_{2g}$.<br>
        Configuration for $d^4$: $\\mathbf{t_{2g}^3 e_g^1}$.<br>
        Produces <b>high spin complexes</b> with maximum unpaired electrons.</li>
      <li><strong>Case 2: When $\\mathbf{\\Delta_o > P}$ (Strong Field):</strong><br>
        The energy gap $\\Delta_o$ is so large that it is energetically cheaper to pair up in lower $t_{2g}$ orbitals than to jump to $e_g$.<br>
        Configuration for $d^4$: $\\mathbf{t_{2g}^4 e_g^0}$.<br>
        Produces <b>low spin complexes</b> with minimum unpaired electrons.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Definition of CFSE (Δ_o)', '1 Mark'],
    ['Case 1 (Δ_o < P): high spin configuration (e.g. t₂g³ e_g¹)', '1 Mark'],
    ['Case 2 (Δ_o > P): low spin configuration (e.g. t₂g⁴ e_g⁰)', '1 Mark']
  ]
));

// Exercise 5.19
questions.push(createQCard(
  'c12c-ch5-q30', 'Exercise 5.19', 'NCERT Exercise',
  '$[\\text{Cr(NH}_3)_6]^{3+}$ is paramagnetic while $[\\text{Ni(CN)}_4]^{2-}$ is diamagnetic. Explain why?',
  `<div class="step">
    <b>Electronic Configurations & Hybridization:</b><br><br>
    <b>1. $[\\text{Cr(NH}_3)_6]^{3+}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Chromium is in $+3$ oxidation state: $\\text{Cr}^{3+}: [\\text{Ar}] 3d^3$.</li>
      <li>The three $d$-electrons occupy three separate $t_{2g}$ orbitals ($t_{2g}^3 e_g^0$).</li>
      <li>Two inner $3d$ orbitals are inherently vacant and combine with $4s$ and $4p$ orbitals for $d^2sp^3$ hybridization.</li>
      <li>Because of the <b>3 unpaired electrons</b> ($n = 3$, $\\mu = \\sqrt{15} = 3.87\\text{ BM}$), it is <b>paramagnetic</b>.</li>
    </ul>
    <br>
    <b>2. $[\\text{Ni(CN)}_4]^{2-}$:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Nickel is in $+2$ oxidation state: $\\text{Ni}^{2+}: [\\text{Ar}] 3d^8$.</li>
      <li>Cyanide ($\\text{CN}^-$) is a strong field ligand ($\\Delta > P$). It causes the pairing of the two unpaired $3d$ electrons, completely pairing all 8 electrons into four $3d$ orbitals.</li>
      <li>The vacant $3d$, $4s$, and two $4p$ orbitals form square planar $dsp^2$ hybrid orbitals.</li>
      <li>Since all electrons are paired ($n = 0$), it is <b>diamagnetic</b>.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Cr³⁺ (3d³) possesses 3 unpaired electrons in t₂g orbitals → paramagnetic', '1 Mark'],
    ['Ni²⁺ (3d⁸) with strong ligand CN⁻ pairs all electrons (dsp²) → diamagnetic', '1 Mark']
  ]
));

// Exercise 5.20
questions.push(createQCard(
  'c12c-ch5-q31', 'Exercise 5.20', 'NCERT Exercise',
  'A solution of $[\\text{Ni(H}_2\\text{O)}_6]^{2+}$ is green but a solution of $[\\text{Ni(CN)}_4]^{2-}$ is colourless. Explain.',
  `<div class="step">
    <b>Explanation based on $d-d$ Electronic Transitions:</b><br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{Ni(H}_2\\text{O)}_6]^{2+}$:</strong><br>
        $\\text{H}_2\\text{O}$ is a weak field ligand. The complex is octahedral with configuration $t_{2g}^6 e_g^2$, possessing <b>two unpaired electrons</b> in the $e_g$ set.<br>
        Electrons in the lower $t_{2g}$ level absorb red light from the visible spectrum and undergo promotion to the $e_g$ level (<b>$d-d$ transition</b>). The transmitted light is complementary green, giving the solution its green colour.</li>
      <li><strong>$[\\text{Ni(CN)}_4]^{2-}$:</strong><br>
        $\\text{CN}^-$ is an exceptionally strong field ligand. It causes complete pairing in the square planar geometry with <b>no unpaired electrons ($n = 0$)</b>.<br>
        Moreover, the energy gap between the highest occupied $d$-orbital and the lowest unoccupied orbital ($d_{x^2-y^2}$) is extraordinarily large. The radiation required to excite an electron falls in the <b>ultraviolet region</b>, not the visible region. Hence, no visible light is absorbed, and the solution appears <b>colourless</b>.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['[Ni(H₂O)₆]²⁺ has d-d transitions absorbing red light, transmitting green', '1 Mark'],
    ['[Ni(CN)₄]²⁻ has large square planar splitting; absorption occurs in UV region (colourless)', '1 Mark']
  ]
));

// Exercise 5.21
questions.push(createQCard(
  'c12c-ch5-q32', 'Exercise 5.21', 'NCERT Exercise',
  '$[\\text{Fe(CN)}_6]^{4-}$ and $[\\text{Fe(H}_2\\text{O)}_6]^{2+}$ are of different colours in dilute solutions. Why?',
  `<div class="step">
    <b>Reason:</b><br>
    In both complexes, iron is in the $+2$ oxidation state ($\text{Fe}^{2+}: [\text{Ar}] 3d^6$).<br>
    However, the colour of a coordination compound depends on the energy difference $\\Delta_o$ between the $t_{2g}$ and $e_g$ orbitals, because:
    $$\\Delta_o = h\\nu = \\frac{hc}{\\lambda}$$
    <ul style="margin-left:20px; line-height:1.75;">
      <li>$\\text{CN}^-$ is a <b>strong field ligand</b>, causing a very large crystal field splitting energy ($\\Delta_o$ is large). Consequently, it absorbs higher energy light (shorter wavelength, blue-violet region) and transmits yellow light.</li>
      <li>$\\text{H}_2\\text{O}$ is a <b>weak field ligand</b>, causing a much smaller crystal field splitting energy ($\\Delta_o$ is small). It absorbs lower energy light (longer wavelength, red region) and transmits pale green light.</li>
    </ul>
    Since different ligands create different magnitudes of crystal field splitting $\\Delta_o$, different wavelengths of light are absorbed, resulting in different observed complementary colours.
  </div>`,
  '2 Marks',
  [
    ['Ligand field strength governs crystal field splitting Δ_o = hc/λ', '1 Mark'],
    ['CN⁻ (strong field, large Δ_o) vs H₂O (weak field, small Δ_o) absorbing different wavelengths', '1 Mark']
  ]
));

// Exercise 5.22
questions.push(createQCard(
  'c12c-ch5-q33', 'Exercise 5.22', 'NCERT Exercise',
  'Discuss the nature of bonding in metal carbonyls.',
  `<div class="step">
    <b>Synergic Bonding in Metal Carbonyls:</b><br>
    The metal-carbon bond in metal carbonyls possesses both $\\sigma$ and $\\pi$ character, forming a self-reinforcing <b>synergic bond</b>:<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{M} \\leftarrow \\text{C} \\quad \\sigma\\text{-Bond (Dative covalent)}:</strong><br>
        Formed by the donation of a lone pair of electrons from the carbon atom of the carbonyl ligand into a suitable vacant hybrid orbital of the transition metal atom.</li>
      <li><strong>$\\text{M} \\rightarrow \\text{C} \\quad \\pi\\text{-Backbonding}:</strong><br>
        Formed by the back-donation of electrons from a filled non-bonding $d$-orbital of the metal into the vacant antibonding $\\pi^*$ ($2p$) molecular orbitals of the carbon monoxide molecule.</li>
    </ol>
    <br>
    <b>Synergic Effect:</b><br>
    The $\\sigma$-bond donation increases the electron density on the metal atom, which facilitates stronger $\\pi$-backdonation from metal to ligand. In return, $\\pi$-backdonation relieves excess negative charge on the metal, strengthening the $\\sigma$-bond. This mutual reinforcement (synergic effect) creates a remarkably strong $\\text{M}-\\text{C}$ bond while weakening the $\\text{C}\\equiv\\text{O}$ bond.
  </div>`,
  '3 Marks',
  [
    ['σ-bond description: CO lone pair donation into vacant metal orbital', '1 Mark'],
    ['π-backbonding: filled metal d-orbital donating into empty π* orbital of CO', '1 Mark'],
    ['Synergic effect concept: mutual strengthening of M-C bond', '1 Mark']
  ]
));

// Exercise 5.23
questions.push(createQCard(
  'c12c-ch5-q34', 'Exercise 5.23', 'NCERT Exercise',
  'Give the formula of each of the following complexes:<br>(i) Hexaamminecobalt(III) chloride<br>(ii) Pentaamminenitrito-N-cobalt(III) chloride<br>(iii) Potassium hexacyanoferrate(III)<br>(iv) Potassium tetrachloridonickelate(II)',
  `<div class="step">
    <b>Formulas:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Hexaamminecobalt(III) chloride:</strong> $[\\text{Co(NH}_3)_6]\\text{Cl}_3$</li>
      <li><strong>Pentaamminenitrito-N-cobalt(III) chloride:</strong> $[\\text{Co(NH}_3)_5(\\text{NO}_2)]\\text{Cl}_2$</li>
      <li><strong>Potassium hexacyanoferrate(III):</strong> $\\text{K}_3[\\text{Fe(CN)}_6]$</li>
      <li><strong>Potassium tetrachloridonickelate(II):</strong> $\\text{K}_2[\\text{NiCl}_4]$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Each correct formula with matching oxidation and counter-ion balance', '½ Mark × 4 = 2 Marks']
  ]
));

// Exercise 5.24
questions.push(createQCard(
  'c12c-ch5-q35', 'Exercise 5.24', 'NCERT Exercise',
  'Write down the IUPAC name for each of the following complexes and indicate the oxidation state, electronic configuration and coordination number of central metal atom:<br>(i) $\\text{K}[\\text{Cr(H}_2\\text{O)}_2(\\text{C}_2\\text{O}_4)_2] \\cdot 3\\text{H}_2\\text{O}$<br>(ii) $[\\text{CrCl}_3(\\text{py})_3]$<br>(iii) $\\text{K}_4[\\text{Mn(CN)}_6]$<br>(iv) $[\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$<br>(v) $\\text{Cs}[\\text{FeCl}_4]$',
  `<div class="step">
    <b>Details for Each Complex:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{K}[\\text{Cr(H}_2\\text{O)}_2(\\text{C}_2\\text{O}_4)_2] \\cdot 3\\text{H}_2\\text{O}$:</strong>
        <br>• IUPAC Name: Potassium diaquadioxalatochromate(III) trihydrate
        <br>• Oxidation state of $\\text{Cr} = +3$
        <br>• Coordination number = $2(1) + 2(2) = 6$
        <br>• Configuration: $3d^3 (t_{2g}^3)$</li>
      <li><strong>$[\\text{CrCl}_3(\\text{py})_3]$:</strong>
        <br>• IUPAC Name: Trichloridotri(pyridine)chromium(III)
        <br>• Oxidation state of $\\text{Cr} = +3$
        <br>• Coordination number = $3 + 3 = 6$
        <br>• Configuration: $3d^3 (t_{2g}^3)$</li>
      <li><strong>$\\text{K}_4[\\text{Mn(CN)}_6]$:</strong>
        <br>• IUPAC Name: Potassium hexacyanomanganate(II)
        <br>• Oxidation state of $\\text{Mn} = +2$
        <br>• Coordination number = $6$
        <br>• Configuration: $3d^5 (t_{2g}^5)$ (low spin)</li>
      <li><strong>$[\\text{Co(NH}_3)_5\\text{Cl}]\\text{Cl}_2$:</strong>
        <br>• IUPAC Name: Pentaamminechloridocobalt(III) chloride
        <br>• Oxidation state of $\\text{Co} = +3$
        <br>• Coordination number = $5 + 1 = 6$
        <br>• Configuration: $3d^6 (t_{2g}^6)$ (low spin)</li>
      <li><strong>$\\text{Cs}[\\text{FeCl}_4]$:</strong>
        <br>• IUPAC Name: Caesium tetrachloridoferrate(III)
        <br>• Oxidation state of $\\text{Fe} = +3$
        <br>• Coordination number = $4$
        <br>• Configuration: $3d^5 (e^2 t_2^3)$ (tetrahedral, high spin)</li>
    </ol>
  </div>`,
  '5 Marks',
  [
    ['(i) & (ii) IUPAC names, oxidation states, CN, and d-configurations', '2 Marks'],
    ['(iii) & (iv) IUPAC names, oxidation states, CN, and d-configurations', '2 Marks'],
    ['(v) IUPAC name, oxidation state (+3), CN (4), configuration (3d⁵)', '1 Mark']
  ]
));

// Exercise 5.25
questions.push(createQCard(
  'c12c-ch5-q36', 'Exercise 5.25', 'NCERT Exercise',
  'What is meant by stability of a coordination compound in solution? State the factors which govern stability of complexes.',
  `<div class="step">
    <b>1. Meaning of Stability:</b><br>
    The stability of a coordination compound in solution refers to the degree of association between the metal ion and the ligands involved in the state of equilibrium:
    $$\\text{M} + n\\text{L} \\rightleftharpoons \\text{ML}_n \\quad \\beta_n = \\frac{[\\text{ML}_n]}{[\\text{M}][\\text{L}]^n}$$
    A larger value of the stability constant $\\beta_n$ indicates greater thermodynamic stability of the complex.<br><br>
    <b>2. Factors Governing Stability:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Charge on Central Metal Ion:</strong> Higher positive charge increases electrostatic attraction for ligands, increasing stability ($\text{Fe}^{3+} > \text{Fe}^{2+}$).</li>
      <li><strong>Size of Metal Ion (Charge-to-Radius Ratio):</strong> Smaller metal ions have higher charge density, leading to more stable complexes (Irving-Williams order: $\text{Ba}^{2+} < \text{Sr}^{2+} < \text{Ca}^{2+} < \text{Mg}^{2+} < \text{Mn}^{2+} < \text{Fe}^{2+} < \text{Co}^{2+} < \text{Ni}^{2+} < \text{Cu}^{2+} > \text{Zn}^{2+}$).</li>
      <li><strong>Basic Nature of Ligand:</strong> More basic ligands donate their lone pairs more readily, forming more stable complexes ($\text{CN}^- > \text{NH}_3 > \text{H}_2\text{O}$).</li>
      <li><strong>Chelate Effect:</strong> Complexes containing multidentate (chelating) ligands that form 5- or 6-membered ring structures are significantly more stable than analogous monodentate complexes due to positive entropy change ($\Delta S > 0$).</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Thermodynamic definition of stability and formation constant β_n', '1 Mark'],
    ['Nature of metal ion (charge and size / charge density)', '1 Mark'],
    ['Nature of ligand (basic strength and chelate effect)', '1 Mark']
  ]
));

// Exercise 5.26
questions.push(createQCard(
  'c12c-ch5-q37', 'Exercise 5.26', 'NCERT Exercise',
  'What is the role of coordination compounds in:<br>(i) biological systems<br>(ii) medicinal chemistry<br>(iii) analytical chemistry<br>(iv) extraction/metallurgy of metals?',
  `<div class="step">
    <b>Roles of Coordination Compounds:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Biological Systems:</strong>
        <br>• <em>Chlorophyll:</em> Coordination complex of <b>Magnesium ($\text{Mg}^{2+}$)</b>, essential for photosynthesis.
        <br>• <em>Haemoglobin:</em> Coordination complex of <b>Iron ($\text{Fe}^{2+}$)</b>, acting as oxygen carrier in blood.
        <br>• <em>Vitamin $\text{B}_{12}$ (Cyanocobalamin):</em> Coordination complex of <b>Cobalt ($\text{Co}^{3+}$)</b>, essential for preventing pernicious anaemia.</li>
      <li><strong>Medicinal Chemistry:</strong>
        <br>• <em>Cisplatin ($cis\text{-}[\text{Pt(NH}_3)_2\text{Cl}_2]$):</em> Widely used anti-cancer (chemotherapeutic) agent.
        <br>• <em>EDTA ($\text{Ca-EDTA}^{2-}$):</em> Used in chelation therapy for lead poisoning.
        <br>• <em>D-Penicillamine & Desferrioxamine B:</em> Used to eliminate excess copper (Wilson\'s disease) and excess iron respectively.</li>
      <li><strong>Analytical Chemistry:</strong>
        <br>• Qualitative analysis: Detection of cations like $\text{Ni}^{2+}$ using dimethylglyoxime (DMG) forming a scarlet red complex $[\text{Ni(dmg)}_2]$.
        <br>• Quantitative estimation: Volumetric determination of water hardness using $\text{Na}_2\text{EDTA}$.</li>
      <li><strong>Metallurgy and Extraction:</strong>
        <br>• Extraction of gold and silver via cyanide process (MacArthur-Forrest process):
        $$4\\text{Au} + 8\\text{CN}^- + 2\\text{H}_2\\text{O} + \\text{O}_2 \\rightarrow 4[\\text{Au(CN)}_2]^- + 4\\text{OH}^-$$
        • Purification of nickel by Mond\'s process via volatile tetracarbonylnickel $[\\text{Ni(CO)}_4]$.</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Biological systems (chlorophyll-Mg, haemoglobin-Fe, vit B12-Co)', '1 Mark'],
    ['(ii) Medicinal chemistry (cisplatin, EDTA in lead poisoning)', '1 Mark'],
    ['(iii) Analytical chemistry (Ni-DMG scarlet ppt, EDTA water hardness)', '1 Mark'],
    ['(iv) Metallurgy (Au/Ag extraction as cyano complexes, Ni purification via Mond process)', '1 Mark']
  ]
));

// Exercise 5.27
questions.push(createQCard(
  'c12c-ch5-q38', 'Exercise 5.27', 'NCERT Exercise',
  'How many ions are produced from the complex $[\\text{Co(NH}_3)_6]\\text{Cl}_3$ in aqueous solution?',
  `<div class="step">
    <b>Ionisation Reaction:</b><br>
    The coordination compound $[\\text{Co(NH}_3)_6]\\text{Cl}_3$ ionises in water into one complex cation and three chloride anions:
    $$[\\text{Co(NH}_3)_6]\\text{Cl}_3(s) \\xrightarrow{\\text{water}} [\\text{Co(NH}_3)_6]^{3+}(aq) + 3\\text{Cl}^-(aq)$$
    Total number of ions produced = $1 + 3 = \\mathbf{4\\text{ ions}}$ per formula unit.
  </div>`,
  '1 Mark',
  [
    ['Ionisation equation showing 1 complex cation + 3 Cl⁻ anions = 4 ions', '1 Mark']
  ]
));

// Exercise 5.28
questions.push(createQCard(
  'c12c-ch5-q39', 'Exercise 5.28', 'NCERT Exercise',
  'Amongst the following ions which one has the highest magnetic moment value?<br>(i) $[\\text{Cr(H}_2\\text{O)}_6]^{3+}$<br>(ii) $[\\text{Fe(H}_2\\text{O)}_6]^{2+}$<br>(iii) $[\\text{Zn(H}_2\\text{O)}_6]^{2+}$',
  `<div class="step">
    <b>Calculations of Unpaired Electrons & Magnetic Moments:</b><br>
    Since $\\text{H}_2\\text{O}$ is a weak field ligand, no pairing occurs.<br><br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$[\\text{Cr(H}_2\\text{O)}_6]^{3+}$:</strong><br>
        $\\text{Cr}^{3+}: 3d^3 \\implies n = 3$ unpaired electrons.<br>
        $$\\mu = \\sqrt{3(3+2)} = \\sqrt{15} \\approx 3.87\\text{ BM}$$
      </li>
      <li><strong>$[\\text{Fe(H}_2\\text{O)}_6]^{2+}$:</strong><br>
        $\\text{Fe}^{2+}: 3d^6 \\implies n = 4$ unpaired electrons.<br>
        $$\\mu = \\sqrt{4(4+2)} = \\sqrt{24} \\approx \\mathbf{4.90\\text{ BM}}$$
      </li>
      <li><strong>$[\\text{Zn(H}_2\\text{O)}_6]^{2+}$:</strong><br>
        $\\text{Zn}^{2+}: 3d^{10} \\implies n = 0$ unpaired electrons.<br>
        $$\\mu = 0\\text{ BM} \\quad (\\text{diamagnetic})$$
      </li>
    </ol>
    <b>Answer:</b> <b>$[\\text{Fe(H}_2\\text{O)}_6]^{2+}$</b> has the highest magnetic moment ($4.90\\text{ BM}$).
  </div>`,
  '2 Marks',
  [
    ['Evaluating unpaired electrons for each ion: Cr³⁺ (3), Fe²⁺ (4), Zn²⁺ (0)', '1 Mark'],
    ['Identifying [Fe(H₂O)₆]²⁺ as highest with μ = 4.90 BM', '1 Mark']
  ]
));

// Exercise 5.29
questions.push(createQCard(
  'c12c-ch5-q40', 'Exercise 5.29', 'NCERT Exercise',
  'The oxidation number of cobalt in $\\text{K}[\\text{Co(CO)}_4]$ is:',
  `<div class="step">
    <b>Calculation:</b><br>
    In the compound $\\text{K}[\\text{Co(CO)}_4]$:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Potassium ($\text{K}$) has an oxidation state of $+1$.</li>
      <li>Carbonyl ($\text{CO}$) is a neutral ligand with charge $0$.</li>
    </ul>
    Let the oxidation state of cobalt be $x$:
    $$+1 + x + 4(0) = 0 \\implies 1 + x = 0 \\implies \\mathbf{x = -1}$$
    <b>Answer:</b> The oxidation number of cobalt in $\\text{K}[\\text{Co(CO)}_4]$ is <b>$-1$</b>.
  </div>`,
  '1 Mark',
  [
    ['Oxidation number calculation yielding x = -1', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 5: Coordination Compounds (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'Haloalkanes and Haloarenes');
console.log(`Chapter 5: Coordination Compounds successfully saved!`);
