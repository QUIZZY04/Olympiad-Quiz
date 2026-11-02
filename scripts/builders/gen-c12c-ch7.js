// scripts/builders/gen-c12c-ch7.js
// Class 12 Chemistry Chapter 7: Alcohols, Phenols and Ethers (ऐल्कोहॉल, फीनॉल एवं ईथर) (NCERT Rationalised 2026–27)
// Full Coverage: 9 In-Text Questions + 32 End-of-Chapter Exercises = 41 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 7;
const chTitle = 'Alcohols, Phenols and Ethers (ऐल्कोहॉल, फीनॉल एवं ईथर)';
const exTitle = 'NCERT Chapter 7: In-Text Questions (7.1–7.9) & End-of-Chapter Exercises (7.1–7.32)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #fefce8, #fef08a); border:1px solid #fde047; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#854d0e; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    Alcohols, Phenols & Ethers: Reactions, Acidity & Mechanisms
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Preparation of Phenol -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">Phenol from Cumene</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">Industrial Route</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Cumene + O₂ → Hydroperoxide</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Acid hydrolysis → Phenol + Acetone</text>

    <!-- Box 2: Acidity Comparison -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">Acidity of Phenol</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">Phenol > Alcohol</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Phenoxide stabilized by resonance</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• -NO₂ at o/p enhances acidity</text>

    <!-- Box 3: Kolbe & Reimer-Tiemann -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">Name Reactions</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">Salicylic Derivs</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Kolbe: CO₂ + NaOH → Salicylic acid</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Reimer-Tiemann: CHCl₃ → Salicylaldehyde</text>

    <!-- Box 4: Williamson Synthesis -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">Williamson Synthesis</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">R-ONa + R'-X → R-O-R'</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• R'-X must be 1° (SN2 attack)</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• 3° halide gives alkene (elimination)</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (7.1 to 7.9)
// ============================================================================

// Question 7.1 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q1', 'In-Text 7.1', 'NCERT In-Text',
  'Classify the following as primary, secondary and tertiary alcohols:<br>(i) $\\text{CH}_3-\\text{C(CH}_3)_2-\\text{CH}_2\\text{OH}$<br>(ii) $\\text{H}_2\\text{C}=\\text{CH}-\\text{CH}_2\\text{OH}$<br>(iii) $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2\\text{OH}$<br>(iv) 1-Methylcyclohexanol<br>(v) 1-Phenylethanol<br>(vi) 2-Phenylpropan-2-ol',
  `<div class="step">
    <b>Classification based on the degree of carbon attached to $-\\text{OH}$ group:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3-\\text{C(CH}_3)_2-\\text{CH}_2\\text{OH}$ (2,2-Dimethylpropan-1-ol):</strong> <b>Primary ($1^\\circ$) alcohol</b> (attached to a primary carbon).</li>
      <li><strong>$\\text{H}_2\\text{C}=\\text{CH}-\\text{CH}_2\\text{OH}$ (Prop-2-en-1-ol):</strong> <b>Primary ($1^\\circ$) alcohol</b> (allylic).</li>
      <li><strong>$\\text{CH}_3-\\text{CH}_2-\\text{CH}_2\\text{OH}$ (Propan-1-ol):</strong> <b>Primary ($1^\\circ$) alcohol</b>.</li>
      <li><strong>1-Methylcyclohexanol:</strong> <b>Tertiary ($3^\\circ$) alcohol</b> (carbon bearing $-\\text{OH}$ is attached to three carbons: two in the ring and one methyl).</li>
      <li><strong>1-Phenylethanol [$\\text{C}_6\\text{H}_5-\\text{CH(OH)}-\\text{CH}_3$]:</strong> <b>Secondary ($2^\\circ$) alcohol</b> (benzylic).</li>
      <li><strong>2-Phenylpropan-2-ol [$\\text{C}_6\\text{H}_5-\\text{C(OH)(CH}_3)_2$]:</strong> <b>Tertiary ($3^\\circ$) alcohol</b> (benzylic).</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) to (iii) classified correctly as 1° alcohols', '1½ Marks'],
    ['(iv) 3°, (v) 2°, (vi) 3° classified correctly', '1½ Marks']
  ]
));

// Question 7.2 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q2', 'In-Text 7.2', 'NCERT In-Text',
  'Identify allylic alcohols in the above examples of Question 7.1.',
  `<div class="step">
    <b>Definition of Allylic Alcohol:</b><br>
    Alcohols in which the $-\\text{OH}$ group is attached to an $sp^3$ hybridised carbon atom next to a carbon-carbon double bond ($-\\text{C}=\\text{C}-\\text{C}^*(\\text{OH})-$) are called <b>allylic alcohols</b>.<br><br>
    <b>Identification:</b><br>
    Compound (ii) <b>$\\text{H}_2\\text{C}=\\text{CH}-\\text{CH}_2\\text{OH}$ (Prop-2-en-1-ol / Allyl alcohol)</b> is an allylic alcohol.
  </div>`,
  '1 Mark',
  [
    ['Identification of prop-2-en-1-ol (ii) as allylic alcohol with definition', '1 Mark']
  ]
));

// Question 7.3 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q3', 'In-Text 7.3', 'NCERT In-Text',
  'Name the following compounds according to IUPAC system:<br>(i) $\\text{CH}_3-\\text{CH}_2-\\text{CH(OH)}-\\text{CH(CH}_2\\text{Cl})-\\text{CH}_3$<br>(ii) $\\text{CH}_3-\\text{CH(CH}_3)-\\text{CH(OH)}-\\text{CH}_2-\\text{C(CH}_3)_3$<br>(iii) 2,5-Dimethylphenol<br>(iv) 1-Methoxy-2-methylpropane',
  `<div class="step">
    <b>IUPAC Names:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3-\\text{CH}_2-\\text{CH(OH)}-\\text{CH(CH}_2\\text{Cl})-\\text{CH}_3$:</strong>
        <br>Longest carbon chain has 5 carbons: <b>4-(Chloromethyl)pentan-3-ol</b> (or 3-chloromethylpentan-2-ol numbering from right to give lowest locants). Correct IUPAC: <b>3-(Chloromethyl)pentan-2-ol</b>.</li>
      <li><strong>$\\text{CH}_3-\\text{CH(CH}_3)-\\text{CH(OH)}-\\text{CH}_2-\\text{C(CH}_3)_3$:</strong>
        <br>Numbering from right gives $-\\text{OH}$ at $C_3$: <b>2,2,5-Trimethylhexan-3-ol</b>.</li>
      <li><strong>2,5-Dimethylphenol:</strong>
        <br>Benzene ring with $-\\text{OH}$ at 1, and methyl groups at 2 and 5. IUPAC: <b>2,5-Dimethylphenol</b>.</li>
      <li><strong>1-Methoxy-2-methylpropane:</strong>
        <br>$$\\text{CH}_3-\\text{O}-\\text{CH}_2-\\text{CH(CH}_3)_2 \\quad (\\text{Isobutyl methyl ether})$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Each correct IUPAC name with proper locant numbers', '½ Mark × 4 = 2 Marks']
  ]
));

// Question 7.4 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q4', 'In-Text 7.4', 'NCERT In-Text',
  'Show how are the following alcohols prepared by the reaction of a suitable Grignard reagent on methanal?<br>(i) $(\\text{CH}_3)_2\\text{CHCH}_2\\text{OH}$<br>(ii) Cyclohexylmethanol',
  `<div class="step">
    <b>Principle:</b> Methanal (formaldehyde, $\\text{HCHO}$) reacts with Grignard reagent ($R-\\text{MgX}$) followed by hydrolysis to yield a <b>primary alcohol</b> with one additional carbon atom:
    $$\\text{HCHO} + R-\\text{MgX} \\rightarrow R-\\text{CH}_2\\text{OMgX} \\xrightarrow{\\text{H}_3\\text{O}^+} R-\\text{CH}_2\\text{OH} + \\text{Mg(OH)X}$$
    <br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Preparation of $(\\text{CH}_3)_2\\text{CHCH}_2\\text{OH}$ (2-Methylpropan-1-ol):</strong>
        <br>The $R$ group required is the <b>isopropyl group</b> ($(\\text{CH}_3)_2\\text{CH}-$).
        <br>Reagent: <b>Isopropylmagnesium bromide</b> [$(\\text{CH}_3)_2\\text{CHMgBr}$].
        $$(\\text{CH}_3)_2\\text{CHMgBr} + \\text{HCHO} \\xrightarrow{\\text{dry ether}} (\\text{CH}_3)_2\\text{CH}-\\text{CH}_2\\text{OMgBr} \\xrightarrow{\\text{H}_2\\text{O} / \\text{H}^+} \\mathbf{(\\text{CH}_3)_2\\text{CH}-\\text{CH}_2\\text{OH}} + \\text{Mg(OH)Br}$$
      </li>
      <li><strong>Preparation of Cyclohexylmethanol:</strong>
        <br>The $R$ group required is the <b>cyclohexyl group</b> ($\text{C}_6\text{H}_{11}-$).
        <br>Reagent: <b>Cyclohexylmagnesium bromide</b> [$\\text{C}_6\\text{H}_{11}\\text{MgBr}$].
        $$\\text{C}_6\\text{H}_{11}\\text{MgBr} + \\text{HCHO} \\xrightarrow{\\text{dry ether}} \\text{C}_6\\text{H}_{11}-\\text{CH}_2\\text{OMgBr} \\xrightarrow{\\text{H}_2\\text{O} / \\text{H}^+} \\mathbf{\\text{C}_6\\text{H}_{11}-\\text{CH}_2\\text{OH}} + \\text{Mg(OH)Br}$$
      </li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) Isopropylmagnesium halide + HCHO with equation', '1 Mark'],
    ['(ii) Cyclohexylmagnesium halide + HCHO with equation', '1 Mark']
  ]
));

// Question 7.5 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q5', 'In-Text 7.5', 'NCERT In-Text',
  'Write structures of the products of the following reactions:<br>(i) $\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+}$<br>(ii) Methylcyclohexanone + $\\text{NaBH}_4$<br>(iii) $\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)\\text{CHO} + \\text{NaBH}_4$',
  `<div class="step">
    <b>Products & Regioselectivity:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+}$:</strong>
        <br>Acid-catalysed hydration follows <b>Markovnikov\'s rule</b> via stable secondary carbocation:
        $$\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\mathbf{\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_3} \\quad (\\text{Propan-2-ol})$$</li>
      <li><strong>2-Methylcyclohexanone + $\\text{NaBH}_4$:</strong>
        <br>Sodium borohydride selectively reduces the ketone group to a secondary alcohol:
        $$\\mathbf{2-\\text{Methylcyclohexan-1-ol}}$$</li>
      <li><strong>$\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)\\text{CHO} + \\text{NaBH}_4$:</strong>
        <br>$\\text{NaBH}_4$ reduces the aldehyde group to a primary alcohol:
        $$\\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)\\text{CH}_2\\text{OH}} \\quad (\\text{2-Methylbutan-1-ol})$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Propan-2-ol (Markovnikov addition)', '1 Mark'],
    ['(ii) 2-Methylcyclohexanol (ketone reduction to 2° alcohol)', '1 Mark'],
    ['(iii) 2-Methylbutan-1-ol (aldehyde reduction to 1° alcohol)', '1 Mark']
  ]
));

// Question 7.6 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q6', 'In-Text 7.6', 'NCERT In-Text',
  'Give structures of the products you would expect when each of the following alcohol reacts with (a) $\\text{HCl}-\\text{ZnCl}_2$, (b) $\\text{HBr}$ and (c) $\\text{SOCl}_2$:<br>(i) Butan-1-ol<br>(ii) 2-Methylbutan-2-ol',
  `<div class="step">
    <b>Reactions:</b><br><br>
    <b>1. With Butan-1-ol (Primary alcohol, $\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{OH}$):</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>(a) With $\\text{HCl}-\\text{ZnCl}_2$ (Lucas reagent): Reacts very slowly; requires prolonged heating to form <b>1-Chlorobutane</b> [$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Cl}$].</li>
      <li>(b) With $\\text{HBr}$ (reflux with $\\text{H}_2\\text{SO}_4$): Forms <b>1-Bromobutane</b> [$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Br}$].</li>
      <li>(c) With $\\text{SOCl}_2$ (Darzens process): Forms <b>1-Chlorobutane</b> [$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{Cl}$] along with $\\text{SO}_2 \\uparrow$ and $\\text{HCl} \\uparrow$.</li>
    </ul>
    <br>
    <b>2. With 2-Methylbutan-2-ol (Tertiary alcohol, $\text{CH}_3-\text{C(OH)(CH}_3)-\text{CH}_2\text{CH}_3$):</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>(a) With $\\text{HCl}-\\text{ZnCl}_2$: Reacts <b>immediately at room temperature</b> producing turbidity of <b>2-Chloro-2-methylbutane</b> [$\\text{CH}_3-\\text{C(Cl)(CH}_3)-\\text{CH}_2\\text{CH}_3$].</li>
      <li>(b) With $\\text{HBr}$: Rapidly forms <b>2-Bromo-2-methylbutane</b> [$\\text{CH}_3-\\text{C(Br)(CH}_3)-\\text{CH}_2\\text{CH}_3$].</li>
      <li>(c) With $\\text{SOCl}_2$: Forms <b>2-Chloro-2-methylbutane</b> [$\\text{CH}_3-\\text{C(Cl)(CH}_3)-\\text{CH}_2\\text{CH}_3$].</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['All 3 products for Butan-1-ol (1-chlorobutane, 1-bromobutane)', '1½ Marks'],
    ['All 3 products for 2-Methylbutan-2-ol with immediate Lucas turbidity noted', '1½ Marks']
  ]
));

// Question 7.7 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q7', 'In-Text 7.7', 'NCERT In-Text',
  'Predict the major product of acid catalysed dehydration of:<br>(i) 1-methylcyclohexanol and<br>(ii) butan-1-ol.',
  `<div class="step">
    <b>Saytzeff Elimination & Carbocation Rearrangement:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>1-Methylcyclohexanol:</strong>
        <br>Protonation followed by loss of water generates a stable <b>tertiary carbocation</b> at the ring carbon.
        <br>Loss of a $\\beta$-proton from the ring carbon gives the more highly substituted, more stable endocyclic alkene:
        $$\\mathbf{1-\\text{Methylcyclohexene}} \\quad (\\text{Major, Saytzeff product})$$</li>
      <li><strong>Butan-1-ol:</strong>
        <br>Protonation of butan-1-ol followed by loss of water yields a primary carbocation [$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2^+$], which undergoes a <b>1,2-hydride shift</b> to form a much more stable secondary carbocation [$\\text{CH}_3\\text{CH}_2\\text{CH}^+\\text{CH}_3$].
        <br>Elimination of a $\\beta$-proton from $C_3$ follows Saytzeff\'s rule to give the more substituted alkene:
        $$\\mathbf{\\text{But-2-ene}} \\quad (\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_3) \\quad (\\text{Major})$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) 1-Methylcyclohexene (major Saytzeff alkene)', '1 Mark'],
    ['(ii) But-2-ene via 1,2-hydride shift to 2° carbocation', '1 Mark']
  ]
));

// Question 7.8 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q8', 'In-Text 7.8', 'NCERT In-Text',
  'Ortho and para nitrophenols are more acidic than phenol. Draw the resonance structures of the corresponding phenoxide ions.',
  `<div class="step">
    <b>Reason for Enhanced Acidity:</b><br>
    The nitro group ($-\\text{NO}_2$) possesses strong electron-withdrawing inductive ($-I$) and resonance ($-R$) effects.<br><br>
    <b>Resonance Stabilization of $o$- and $p$-Nitrophenoxide Ions:</b><br>
    In the phenoxide ion, the negative charge is delocalized over the ortho and para positions of the aromatic ring.<br>
    When the $-\\text{NO}_2$ group is located at the <b>ortho</b> or <b>para</b> position, the negative charge is delocalized directly onto the highly electronegative oxygen atoms of the nitro group:
    $$-\\text{C}^- - \\text{N}^+(=\\text{O})-\\text{O}^- \\longleftrightarrow -\\text{C}=\\text{N}^+(-\\text{O}^-)-\\text{O}^-$$
    This additional extended conjugation provides profound stabilization to the conjugate base (phenoxide ion), driving the equilibrium towards dissociation:
    $$\\text{ArOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{ArO}^- + \\text{H}_3\\text{O}^+$$
    Because the phenoxide ion is substantially more stabilized in $o$- and $p$-nitrophenol than in unsubstituted phenol, $o$- and $p$-nitrophenols are much stronger acids ($pK_a \\approx 7.2$) than phenol ($pK_a \\approx 10.0$).
  </div>`,
  '3 Marks',
  [
    ['Resonance structures of p-nitrophenoxide showing negative charge on oxygen of NO₂', '1½ Marks'],
    ['Resonance structures of o-nitrophenoxide with -R and -I stabilization explained', '1½ Marks']
  ]
));

// Question 7.9 (In-Text)
questions.push(createQCard(
  'c12c-ch7-q9', 'In-Text 7.9', 'NCERT In-Text',
  'Write the equations involved in the following reactions:<br>(i) Reimer-Tiemann reaction<br>(ii) Kolbe\'s reaction',
  `<div class="step">
    <b>Chemical Equations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Reimer-Tiemann Reaction:</strong>
        Treatment of phenol with chloroform in the presence of aqueous sodium hydroxide introduces an aldehyde group ($-\\text{CHO}$) at the ortho position:
        $$\\text{C}_6\\text{H}_5\\text{OH} + \\text{CHCl}_3 + 3\\text{NaOH} \\xrightarrow{340\\text{ K}} o\\text{-HO}-\\text{C}_6\\text{H}_4-\\text{CHO} \\quad (\\mathbf{\\text{Salicylaldehyde}}) + 3\\text{NaCl} + 2\\text{H}_2\\text{O}$$
        <em>Electrophile:</em> Dichlorocarbene ($:\\text{CCl}_2$).</li>
      <li><strong>Kolbe\'s Reaction:</strong>
        Phenol is treated with sodium hydroxide to form sodium phenoxide, which undergoes electrophilic substitution with carbon dioxide at $400\\text{ K}$ and $4-7\\text{ atm}$ pressure, followed by acidification to produce salicylic acid:
        $$\\text{C}_6\\text{H}_5\\text{ONa} + \\text{CO}_2 \\xrightarrow{400\\text{ K, } 4-7\\text{ atm}} o\\text{-HO}-\\text{C}_6\\text{H}_4-\\text{COONa} \\xrightarrow{\\text{H}^+} \\mathbf{o\\text{-HO}-\\text{C}_6\\text{H}_4-\\text{COOH}} \\quad (\\mathbf{\\text{Salicylic acid}})$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) Reimer-Tiemann equation with salicylaldehyde and :CCl₂ intermediate', '1 Mark'],
    ['(ii) Kolbe\'s reaction equation yielding salicylic acid', '1 Mark']
  ]
));

// ============================================================================
// PART 2: NCERT END-OF-CHAPTER EXERCISES (7.1 to 7.32)
// ============================================================================

// Exercise 7.1
questions.push(createQCard(
  'c12c-ch7-q10', 'Exercise 7.1', 'NCERT Exercise',
  'Write IUPAC names of the following compounds:<br>(i) $\\text{CH}_3-\\text{CH(CH}_3)-\\text{CH(OH)}-\\text{CH}_3$<br>(ii) $\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_2-\\text{CH(CH}_3)-\\text{CH}_3$<br>(iii) $\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_2-\\text{CH(OH)}-\\text{CH}_3$<br>(iv) $\\text{HO}-\\text{CH}_2-\\text{CH(OH)}-\\text{CH}_2\\text{OH}$<br>(v) 2-Methylphenol<br>(vi) 4-Methylphenol<br>(vii) 2,5-Dimethylphenol<br>(viii) 2,6-Dimethylphenol<br>(ix) 1-Methoxy-2-methylpropane<br>(x) Ethoxybenzene<br>(xi) 1-Phenoxyheptane<br>(xii) 2-Ethoxybutane',
  `<div class="step">
    <b>IUPAC Names:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{CH}_3-\\text{CH(CH}_3)-\\text{CH(OH)}-\\text{CH}_3$:</strong> 3-Methylbutan-2-ol</li>
      <li><strong>$\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_2-\\text{CH(CH}_3)-\\text{CH}_3$:</strong> 4-Methylpentan-2-ol</li>
      <li><strong>$\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_2-\\text{CH(OH)}-\\text{CH}_3$:</strong> Pentane-2,4-diol</li>
      <li><strong>$\\text{HO}-\\text{CH}_2-\\text{CH(OH)}-\\text{CH}_2\\text{OH}$:</strong> Propane-1,2,3-triol (Glycerol)</li>
      <li><strong>2-Methylphenol:</strong> 2-Methylphenol ($o$-cresol)</li>
      <li><strong>4-Methylphenol:</strong> 4-Methylphenol ($p$-cresol)</li>
      <li><strong>2,5-Dimethylphenol:</strong> 2,5-Dimethylphenol</li>
      <li><strong>2,6-Dimethylphenol:</strong> 2,6-Dimethylphenol</li>
      <li><strong>1-Methoxy-2-methylpropane:</strong> 1-Methoxy-2-methylpropane</li>
      <li><strong>Ethoxybenzene:</strong> Ethoxybenzene (Phenetole)</li>
      <li><strong>1-Phenoxyheptane:</strong> 1-Phenoxyheptane</li>
      <li><strong>2-Ethoxybutane:</strong> 2-Ethoxybutane</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) to (iv) alcohol nomenclature correct', '1½ Marks'],
    ['(v) to (viii) phenol derivatives named correctly', '1½ Marks'],
    ['(ix) to (xii) ether nomenclature correct', '1 Mark']
  ]
));

// Exercise 7.2
questions.push(createQCard(
  'c12c-ch7-q11', 'Exercise 7.2', 'NCERT Exercise',
  'Write structures of the compounds whose IUPAC names are as follows:<br>(i) 2-Methylbutan-2-ol<br>(ii) 1-Phenylpropan-2-ol<br>(iii) 3,5-Dimethylhexane-1,3,5-triol<br>(iv) 2,3-Diethylphenol<br>(v) 1-Ethoxypropane<br>(vi) 2-Ethoxy-3-methylpentane<br>(vii) Cyclohexylmethanol<br>(viii) 3-Cyclohexylpentan-3-ol<br>(ix) Cyclopent-3-en-1-ol<br>(x) 4-Chloro-3-ethylbutan-1-ol',
  `<div class="step">
    <b>Structural Formulas:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>2-Methylbutan-2-ol:</strong> $\\text{CH}_3-\\text{C(CH}_3)(\\text{OH})-\\text{CH}_2-\\text{CH}_3$</li>
      <li><strong>1-Phenylpropan-2-ol:</strong> $\\text{C}_6\\text{H}_5-\\text{CH}_2-\\text{CH(OH)}-\\text{CH}_3$</li>
      <li><strong>3,5-Dimethylhexane-1,3,5-triol:</strong> $\\text{HO}-\\text{CH}_2-\\text{CH}_2-\\text{C(CH}_3)(\\text{OH})-\\text{CH}_2-\\text{C(CH}_3)_2-\\text{OH}$</li>
      <li><strong>2,3-Diethylphenol:</strong> Benzene ring with $-\\text{OH}$ at 1, $-\\text{C}_2\\text{H}_5$ at 2, and $-\\text{C}_2\\text{H}_5$ at 3.</li>
      <li><strong>1-Ethoxypropane:</strong> $\\text{CH}_3\\text{CH}_2\\text{OCH}_2\\text{CH}_2\\text{CH}_3$</li>
      <li><strong>2-Ethoxy-3-methylpentane:</strong> $\\text{CH}_3-\\text{CH(OC}_2\\text{H}_5)-\\text{CH(CH}_3)-\\text{CH}_2-\\text{CH}_3$</li>
      <li><strong>Cyclohexylmethanol:</strong> $\\text{C}_6\\text{H}_{11}-\\text{CH}_2\\text{OH}$</li>
      <li><strong>3-Cyclohexylpentan-3-ol:</strong> $(\\text{CH}_3\\text{CH}_2)_2\\text{C(OH)}-\\text{C}_6\\text{H}_{11}$</li>
      <li><strong>Cyclopent-3-en-1-ol:</strong> 5-membered cyclopentane ring with double bond between $C_3-C_4$ and $-\\text{OH}$ at $C_1$.</li>
      <li><strong>4-Chloro-3-ethylbutan-1-ol:</strong> $\\text{Cl}-\\text{CH}_2-\\text{CH(C}_2\\text{H}_5)-\\text{CH}_2-\\text{CH}_2\\text{OH}$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) to (v) structures drawn accurately', '2 Marks'],
    ['(vi) to (x) structures drawn accurately', '2 Marks']
  ]
));

// Exercise 7.3
questions.push(createQCard(
  'c12c-ch7-q12', 'Exercise 7.3', 'NCERT Exercise',
  '(i) Draw the structures of all isomeric alcohols of molecular formula $\\text{C}_5\\text{H}_{12}\\text{O}$ and give their IUPAC names.<br>(ii) Classify them as primary, secondary and tertiary alcohols.',
  `<div class="step">
    <b>All 8 Isomeric Alcohols of $\\text{C}_5\\text{H}_{12}\\text{O}$:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Pentan-1-ol:</strong> $\\text{CH}_3(\\text{CH}_2)_4\\text{OH}$ [<b>Primary ($1^\\circ$)</b>]</li>
      <li><strong>Pentan-2-ol:</strong> $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH(OH)CH}_3$ [<b>Secondary ($2^\\circ$)</b>]</li>
      <li><strong>Pentan-3-ol:</strong> $\\text{CH}_3\\text{CH}_2\\text{CH(OH)CH}_2\\text{CH}_3$ [<b>Secondary ($2^\\circ$)</b>]</li>
      <li><strong>2-Methylbutan-1-ol:</strong> $\\text{CH}_3\\text{CH}_2\\text{CH(CH}_3)\\text{CH}_2\\text{OH}$ [<b>Primary ($1^\\circ$)</b>]</li>
      <li><strong>3-Methylbutan-1-ol:</strong> $(\\text{CH}_3)_2\\text{CHCH}_2\\text{CH}_2\\text{OH}$ [<b>Primary ($1^\\circ$)</b>]</li>
      <li><strong>2-Methylbutan-2-ol:</strong> $\\text{CH}_3\\text{CH}_2\\text{C(OH)(CH}_3)_2$ [<b>Tertiary ($3^\\circ$)</b>]</li>
      <li><strong>3-Methylbutan-2-ol:</strong> $(\\text{CH}_3)_2\\text{CHCH(OH)CH}_3$ [<b>Secondary ($2^\\circ$)</b>]</li>
      <li><strong>2,2-Dimethylpropan-1-ol (Neopentyl alcohol):</strong> $(\\text{CH}_3)_3\\text{CCH}_2\\text{OH}$ [<b>Primary ($1^\\circ$)</b>]</li>
    </ol>
    <b>Summary:</b> 4 Primary ($1^\\circ$), 3 Secondary ($2^\\circ$), and 1 Tertiary ($3^\\circ$) alcohol.
  </div>`,
  '4 Marks',
  [
    ['All 8 structural isomers drawn with IUPAC names', '2 Marks'],
    ['Correct classification into 4 primary, 3 secondary, and 1 tertiary alcohol', '2 Marks']
  ]
));

// Exercise 7.4
questions.push(createQCard(
  'c12c-ch7-q13', 'Exercise 7.4', 'NCERT Exercise',
  'Explain why propanol has higher boiling point than that of the hydrocarbon, butane?',
  `<div class="step">
    <b>Reason:</b><br>
    Both propanol ($\text{CH}_3\text{CH}_2\text{CH}_2\text{OH}$, $M = 60$) and butane ($\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_3$, $M = 58$) have comparable molecular masses.<br><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Propanol:</strong> Contains a polar $-\\text{O}-\\text{H}$ bond. The hydrogen atom bonded to electronegative oxygen forms extensive <b>intermolecular hydrogen bonds</b> between propanol molecules, creating associated molecular clusters.</li>
      <li><strong>Butane:</strong> A non-polar hydrocarbon whose molecules are held together only by weak <b>van der Waals dispersion forces</b>.</li>
    </ul>
    Significantly more thermal energy is required to break the strong intermolecular hydrogen bonds in propanol than the weak van der Waals forces in butane. Hence, propanol boils at a much higher temperature ($370\\text{ K}$) than butane ($272.5\\text{ K}$).
  </div>`,
  '2 Marks',
  [
    ['Intermolecular hydrogen bonding in propanol', '1 Mark'],
    ['Weak van der Waals forces in butane and comparison of energies', '1 Mark']
  ]
));

// Exercise 7.5
questions.push(createQCard(
  'c12c-ch7-q14', 'Exercise 7.5', 'NCERT Exercise',
  'Alcohols are comparatively more soluble in water than hydrocarbons of similar molecular masses. Explain this fact.',
  `<div class="step">
    <b>Reason:</b><br>
    Alcohols contain the polar hydroxyl group ($-\\text{O}^{\\delta-}-\\text{H}^{\\delta+}$).<br>
    This allows alcohol molecules to form <b>intermolecular hydrogen bonds with water molecules</b>:
    $$R-\\text{O}-\\text{H} \\cdots :\\text{O}(\\text{H})-\\text{H}$$
    The energy released during this hydrogen bond formation compensates for breaking the water-water hydrogen bonds and solute-solute interactions, allowing lower alcohols (methanol, ethanol, propanol) to be completely miscible with water.<br><br>
    In contrast, hydrocarbons are non-polar hydrophobic molecules that cannot form hydrogen bonds with water molecules, making them insoluble.
  </div>`,
  '2 Marks',
  [
    ['Formation of intermolecular hydrogen bonds with water molecules', '1 Mark'],
    ['Inability of non-polar hydrocarbons to form hydrogen bonds', '1 Mark']
  ]
));

// Exercise 7.6
questions.push(createQCard(
  'c12c-ch7-q15', 'Exercise 7.6', 'NCERT Exercise',
  'What is meant by hydroboration-oxidation reaction? Illustrate it with an example.',
  `<div class="step">
    <b>Definition:</b><br>
    The addition of diborane ($(\\text{BH}_3)_2$) to an alkene to form a trialkylborane, followed by its alkaline oxidation with hydrogen peroxide ($\\text{H}_2\\text{O}_2 / \\text{OH}^-$) to yield an alcohol, is known as the <b>Hydroboration-Oxidation Reaction</b>.<br>
    <em>Key feature:</em> The overall addition of water across the double bond follows <b>Anti-Markovnikov regioselectivity</b>.<br><br>
    <b>Illustration with Propene:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Hydroboration Step:</strong>
        $$3\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\frac{1}{2}(\\text{BH}_3)_2 \\rightarrow (\\text{CH}_3\\text{CH}_2\\text{CH}_2)_3\\text{B} \\quad (\\text{Tripropylborane})$$</li>
      <li><strong>Oxidation Step:</strong>
        $$(\\text{CH}_3\\text{CH}_2\\text{CH}_2)_3\\text{B} + 3\\text{H}_2\\text{O}_2 \\xrightarrow{\\text{OH}^-} \\mathbf{3\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH} (\\text{Propan-1-ol})} + \\text{B(OH)}_3$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Definition with Anti-Markovnikov regiochemistry noted', '1 Mark'],
    ['Hydroboration step equation forming trialkylborane', '1 Mark'],
    ['Oxidation with alkaline H₂O₂ producing primary alcohol (propan-1-ol)', '1 Mark']
  ]
));

// Exercise 7.7
questions.push(createQCard(
  'c12c-ch7-q16', 'Exercise 7.7', 'NCERT Exercise',
  'Give the structures and IUPAC names of monohydric phenols of molecular formula $\\text{C}_7\\text{H}_8\\text{O}$.',
  `<div class="step">
    <b>Monohydric Phenols of Formula $\\text{C}_7\\text{H}_8\\text{O}$ (Cresols):</b><br>
    There are three positional isomers:
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>2-Methylphenol ($o$-Cresol):</strong>
        <br>Benzene ring with $-\\text{OH}$ at position 1 and $-\\text{CH}_3$ at position 2.</li>
      <li><strong>3-Methylphenol ($m$-Cresol):</strong>
        <br>Benzene ring with $-\\text{OH}$ at position 1 and $-\\text{CH}_3$ at position 3.</li>
      <li><strong>4-Methylphenol ($p$-Cresol):</strong>
        <br>Benzene ring with $-\\text{OH}$ at position 1 and $-\\text{CH}_3$ at position 4.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['All 3 structures drawn (o-, m-, p-cresols)', '1 Mark'],
    ['Accurate IUPAC names (2-methylphenol, 3-methylphenol, 4-methylphenol)', '1 Mark']
  ]
));

// Exercise 7.8
questions.push(createQCard(
  'c12c-ch7-q17', 'Exercise 7.8', 'NCERT Exercise',
  'While separating a mixture of ortho and para nitrophenols by steam distillation, name the isomer which will be steam volatile. Give reason.',
  `<div class="step">
    <b>Answer: $o$-Nitrophenol is steam volatile.</b><br><br>
    <b>Scientific Reason:</b><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>$o$-Nitrophenol:</strong> The $-\\text{NO}_2$ and $-\\text{OH}$ groups are in close proximity, enabling intramolecular hydrogen bonding (chelation) within the same molecule. This prevents the molecule from associating with neighboring molecules. Because of the absence of intermolecular hydrogen bonding, it has a lower boiling point and is <b>steam volatile</b>.</li>
      <li><strong>$p$-Nitrophenol:</strong> The $-\\text{NO}_2$ and $-\\text{OH}$ groups are far apart ($180^\\circ$), forming strong <b>intermolecular hydrogen bonds</b> that link molecules into long chains. This extensive association gives $p$-nitrophenol a much higher boiling point and lower volatility, making it non-steam volatile.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Identifying o-nitrophenol as steam volatile', '½ Mark'],
    ['Intramolecular hydrogen bonding in o-nitrophenol vs intermolecular in p-nitrophenol', '1½ Marks']
  ]
));

// Exercise 7.9
questions.push(createQCard(
  'c12c-ch7-q18', 'Exercise 7.9', 'NCERT Exercise',
  'Give the equations of reactions for the preparation of phenol from cumene.',
  `<div class="step">
    <b>Industrial Manufacture from Cumene (Isopropylbenzene):</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Auto-oxidation of Cumene:</strong>
        Cumene is oxidised in the presence of air to cumene hydroperoxide:
        $$\\text{C}_6\\text{H}_5-\\text{CH(CH}_3)_2 + \\text{O}_2 \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5-\\text{C(CH}_3)_2-\\text{O}-\\text{O}-\\text{H}} \\quad (\\text{Cumene hydroperoxide})$$</li>
      <li><strong>Acid-Catalysed Cleavage:</strong>
        Treatment of cumene hydroperoxide with dilute sulphuric acid cleaves it cleanly into phenol and acetone:
        $$\\text{C}_6\\text{H}_5-\\text{C(CH}_3)_2-\\text{O}-\\text{O}-\\text{H} \\xrightarrow{\\text{H}^+ / \\text{H}_2\\text{O}} \\mathbf{\\text{C}_6\\text{H}_5\\text{OH} (\\text{Phenol})} + \\mathbf{\\text{CH}_3\\text{COCH}_3 (\\text{Acetone, valuable by-product})}$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Reaction 1: Cumene + O₂ → cumene hydroperoxide', '1 Mark'],
    ['Reaction 2: Acid cleavage yielding phenol + acetone', '1 Mark']
  ]
));

// Exercise 7.10
questions.push(createQCard(
  'c12c-ch7-q19', 'Exercise 7.10', 'NCERT Exercise',
  'Write chemical reaction for the preparation of phenol from chlorobenzene (Dow\'s process).',
  `<div class="step">
    <b>Dow\'s Process (Industrial Synthesis):</b><br>
    Chlorobenzene is heated with aqueous sodium hydroxide at $623\\text{ K}$ and $300\\text{ atm}$ pressure to form sodium phenoxide, which upon acidification yields phenol:
    $$\\text{C}_6\\text{H}_5\\text{Cl} + 2\\text{NaOH} \\xrightarrow{623\\text{ K, } 300\\text{ atm}} \\text{C}_6\\text{H}_5\\text{ONa} + \\text{NaCl} + \\text{H}_2\\text{O}$$
    $$\\text{C}_6\\text{H}_5\\text{ONa} + \\text{HCl} \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5\\text{OH} (\\text{Phenol})} + \\text{NaCl}$$
  </div>`,
  '2 Marks',
  [
    ['Reaction conditions: 623 K, 300 atm with NaOH forming sodium phenoxide', '1 Mark'],
    ['Acidification step yielding pure phenol', '1 Mark']
  ]
));

// Exercise 7.11
questions.push(createQCard(
  'c12c-ch7-q20', 'Exercise 7.11', 'NCERT Exercise',
  'Write the mechanism of hydration of ethene to yield ethanol.',
  `<div class="step">
    <b>Mechanism of Acid-Catalysed Hydration of Ethene:</b><br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Step 1: Protonation of alkene to form carbocation by electrophilic attack of $\\text{H}_3\\text{O}^+$:</strong>
        $$\\text{H}_2\\text{O} + \\text{H}^+ \\rightleftharpoons \\text{H}_3\\text{O}^+$$
        $$\\text{CH}_2=\\text{CH}_2 + \\text{H}-\\text{O}^+\\text{H}_2 \\rightleftharpoons \\mathbf{\\text{CH}_3-\\text{CH}_2^+} + \\text{H}_2\\text{O}$$</li>
      <li><strong>Step 2: Nucleophilic attack of water on the carbocation:</strong>
        $$\\text{CH}_3-\\text{CH}_2^+ + :\\text{O}\\text{H}_2 \\rightleftharpoons \\mathbf{\\text{CH}_3-\\text{CH}_2-\\text{O}^+\\text{H}_2} \\quad (\\text{Protonated alcohol})$$</li>
      <li><strong>Step 3: Deprotonation to form ethanol:</strong>
        $$\\text{CH}_3-\\text{CH}_2-\\text{O}^+\\text{H}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\mathbf{\\text{CH}_3\\text{CH}_2\\text{OH}} + \\text{H}_3\\text{O}^+$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Step 1: Electrophilic protonation forming ethyl carbocation', '1 Mark'],
    ['Step 2: Nucleophilic attack of H₂O forming oxonium ion', '1 Mark'],
    ['Step 3: Deprotonation regenerating H₃O⁺ and yielding ethanol', '1 Mark']
  ]
));

// Exercise 7.12
questions.push(createQCard(
  'c12c-ch7-q21', 'Exercise 7.12', 'NCERT Exercise',
  'You are given benzene, conc. $\\text{H}_2\\text{SO}_4$ and $\\text{NaOH}$. Write the equations for the preparation of phenol using these reagents.',
  `<div class="step">
    <b>Three-Step Synthesis:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Sulphonation of Benzene:</strong>
        Benzene is heated with concentrated $\\text{H}_2\\text{SO}_4$ (or oleum) to produce benzenesulphonic acid:
        $$\\text{C}_6\\text{H}_6 + \\text{H}_2\\text{SO}_4 (\\text{conc.}) \\xrightarrow{\\Delta} \\mathbf{\\text{C}_6\\text{H}_5\\text{SO}_3\\text{H}} + \\text{H}_2\\text{O}$$</li>
      <li><strong>Neutralization & Fusion with $\\text{NaOH}$:</strong>
        Benzenesulphonic acid is neutralised and then fused with molten $\\text{NaOH}$ at $573-623\\text{ K}$ to yield sodium phenoxide:
        $$\\text{C}_6\\text{H}_5\\text{SO}_3\\text{H} + \\text{NaOH} \\rightarrow \\text{C}_6\\text{H}_5\\text{SO}_3\\text{Na} + \\text{H}_2\\text{O}$$
        $$\\text{C}_6\\text{H}_5\\text{SO}_3\\text{Na} + 2\\text{NaOH} \\xrightarrow{573-623\\text{ K}} \\mathbf{\\text{C}_6\\text{H}_5\\text{ONa}} + \\text{Na}_2\\text{SO}_3 + \\text{H}_2\\text{O}$$</li>
      <li><strong>Acidification:</strong>
        Sodium phenoxide is acidified with dilute acid to liberate phenol:
        $$\\text{C}_6\\text{H}_5\\text{ONa} + \\text{H}^+ \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5\\text{OH} (\\text{Phenol})} + \\text{Na}^+$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Step 1: Sulphonation of benzene to benzenesulphonic acid', '1 Mark'],
    ['Step 2: Fusion with molten NaOH producing sodium phenoxide', '1 Mark'],
    ['Step 3: Acidification to yield pure phenol', '1 Mark']
  ]
));

// Exercise 7.13
questions.push(createQCard(
  'c12c-ch7-q22', 'Exercise 7.13', 'NCERT Exercise',
  'Show how will you synthesise:<br>(i) 1-phenylethanol from a suitable alkene<br>(ii) cyclohexylmethanol using an alkyl halide by an $S_N2$ reaction<br>(iii) pentan-1-ol using a suitable alkyl halide<br>(iv) 2-methylpropan-2-ol from a suitable carbonyl compound',
  `<div class="step">
    <b>Syntheses:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>1-Phenylethanol from an alkene:</strong>
        Acid-catalysed hydration of styrene (phenylethene) gives 1-phenylethanol via Markovnikov addition:
        $$\\text{C}_6\\text{H}_5-\\text{CH}=\\text{CH}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{H}^+} \\mathbf{\\text{C}_6\\text{H}_5-\\text{CH(OH)}-\\text{CH}_3}$$</li>
      <li><strong>Cyclohexylmethanol by $S_N2$:</strong>
        Reaction of (chloromethyl)cyclohexane with aqueous $\\text{NaOH}$:
        $$\\text{C}_6\\text{H}_{11}\\text{CH}_2\\text{Cl} + \\text{aq. NaOH} \\rightarrow \\mathbf{\\text{C}_6\\text{H}_{11}\\text{CH}_2\\text{OH}} + \\text{NaCl}$$</li>
      <li><strong>Pentan-1-ol from an alkyl halide:</strong>
        Nucleophilic substitution of 1-chloropentane with aqueous $\\text{KOH}$:
        $$\\text{CH}_3(\\text{CH}_2)_3\\text{CH}_2\\text{Cl} + \\text{aq. KOH} \\xrightarrow{\\Delta} \\mathbf{\\text{CH}_3(\\text{CH}_2)_3\\text{CH}_2\\text{OH}} + \\text{KCl}$$</li>
      <li><strong>2-Methylpropan-2-ol from a carbonyl compound:</strong>
        Reaction of acetone (propan-2-one) with methylmagnesium bromide followed by hydrolysis:
        $$\\text{CH}_3\\text{COCH}_3 + \\text{CH}_3\\text{MgBr} \\rightarrow (\\text{CH}_3)_3\\text{C}-\\text{OMgBr} \\xrightarrow{\\text{H}_2\\text{O}} \\mathbf{(\\text{CH}_3)_3\\text{C}-\\text{OH}} + \\text{Mg(OH)Br}$$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Hydration of styrene to 1-phenylethanol', '1 Mark'],
    ['(ii) SN2 hydrolysis of chloromethylcyclohexane', '1 Mark'],
    ['(iii) 1-chloropentane + aq. KOH to pentan-1-ol', '1 Mark'],
    ['(iv) Acetone + CH₃MgBr to 2-methylpropan-2-ol', '1 Mark']
  ]
));

// Exercise 7.14
questions.push(createQCard(
  'c12c-ch7-q23', 'Exercise 7.14', 'NCERT Exercise',
  'Give two reactions that show the acidic nature of phenol. Compare acidity of phenol with that of ethanol.',
  `<div class="step">
    <b>Reactions Demonstrating Acidic Nature of Phenol:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Reaction with Active Sodium Metal:</strong>
        Phenol reacts with sodium to liberate hydrogen gas:
        $$2\\text{C}_6\\text{H}_5\\text{OH} + 2\\text{Na} \\rightarrow \\mathbf{2\\text{C}_6\\text{H}_5\\text{ONa} (\\text{Sodium phenoxide})} + \\text{H}_2 \\uparrow$$</li>
      <li><strong>Reaction with Aqueous Sodium Hydroxide:</strong>
        Unlike alcohols, phenol is sufficiently acidic to dissolve in aqueous $\\text{NaOH}$ forming salt:
        $$\\text{C}_6\\text{H}_5\\text{OH} + \\text{NaOH} \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5\\text{ONa}} + \\text{H}_2\\text{O}$$</li>
    </ol>
    <br>
    <b>Comparison of Acidity: Phenol vs Ethanol:</b><br>
    <b>Phenol is approximately $10^6$ times more acidic than ethanol</b> ($pK_a \\text{ of phenol} \\approx 10$ vs $15.9$ for ethanol).<br>
    <em>Reasons:</em>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>In the phenoxide ion ($\\text{C}_6\\text{H}_5\\text{O}^-$), the negative charge is delocalized over the aromatic benzene ring across 4 resonance structures, providing strong stabilization.</li>
      <li>In the ethoxide ion ($\\text{C}_2\\text{H}_5\\text{O}^-$), the negative charge is localized entirely on the single oxygen atom and is further destabilized by the electron-releasing inductive effect ($+I$) of the ethyl group.</li>
    </ul>
  </div>`,
  '3 Marks',
  [
    ['Two reactions (with Na and with NaOH)', '1 Mark'],
    ['Resonance stabilization of phenoxide ion vs destabilization of ethoxide', '2 Marks']
  ]
));

// Exercise 7.15
questions.push(createQCard(
  'c12c-ch7-q24', 'Exercise 7.15', 'NCERT Exercise',
  'Explain why is ortho-nitrophenol more acidic than ortho-methoxyphenol?',
  `<div class="step">
    <b>Electronic Effects of Substituents:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>In $o$-Nitrophenol:</strong>
        The nitro group ($-\\text{NO}_2$) exerts strong electron-withdrawing inductive ($-I$) and resonance ($-R$) effects. It disperses the negative charge of the phenoxide ion, significantly stabilizing the conjugate base and increasing acidity ($pK_a = 7.2$).</li>
      <li><strong>In $o$-Methoxyphenol:</strong>
        The methoxy group ($-\\text{OCH}_3$) has lone pairs on oxygen that exert a strong electron-donating resonance ($+R$) effect. This pumps electron density into the ring, intensifying the negative charge on the phenoxide ion and destabilizing it. Furthermore, intramolecular hydrogen bonding between $-\\text{OCH}_3$ and the phenolic hydrogen hinders proton release. Consequently, its acidity is greatly diminished ($pK_a = 9.98$).</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['-I and -R electron withdrawing effects of NO₂ stabilizing phenoxide', '1 Mark'],
    ['+R electron donating effect of OCH₃ destabilizing phenoxide', '1 Mark']
  ]
));

// Exercise 7.16
questions.push(createQCard(
  'c12c-ch7-q25', 'Exercise 7.16', 'NCERT Exercise',
  'Explain how does the $-\\text{OH}$ group attached to a carbon of benzene ring activate it towards electrophilic substitution?',
  `<div class="step">
    <b>Resonance Activation by $-\\text{OH}$ Group:</b><br>
    The oxygen atom of the phenolic $-\\text{OH}$ group possesses two lone pairs of electrons.<br>
    One of these lone pairs enters into resonance (conjugation) with the $\\pi$-electron system of the benzene ring ($+R$ effect).<br><br>
    <b>Resonance Contributors:</b><br>
    Delocalization of the lone pair develops partial double bond character between carbon and oxygen ($\text{C}=\text{O}^+\text{H}$) and creates excess negative charge at the <b>ortho and para positions</b>.<br><br>
    <b>Consequences:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>The overall electron density on the benzene ring increases substantially compared to benzene itself, <b>activating the ring</b> towards attack by electrophiles.</li>
      <li>Because electron density is highest at the ortho and para positions, electrophilic substitution occurs selectively at these positions (<b>ortho, para-directing</b>).</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Resonance structures showing +R lone pair delocalization', '1 Mark'],
    ['Increased electron density at ortho/para positions explaining activation', '1 Mark']
  ]
));

// Exercise 7.17
questions.push(createQCard(
  'c12c-ch7-q26', 'Exercise 7.17', 'NCERT Exercise',
  'Give equations of the following reactions:<br>(i) Oxidation of propan-1-ol with alkaline $\\text{KMnO}_4$<br>(ii) Bromine in $\\text{CS}_2$ with phenol<br>(iii) Dilute $\\text{HNO}_3$ with phenol<br>(iv) Treating phenol with chloroform in presence of aqueous $\\text{NaOH}$',
  `<div class="step">
    <b>Equations:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Oxidation of propan-1-ol with alkaline $\\text{KMnO}_4$:</strong>
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH} \\xrightarrow{\\text{alk. } \\text{KMnO}_4, \\Delta} \\text{CH}_3\\text{CH}_2\\text{COOK} \\xrightarrow{\\text{H}^+} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{COOH}} \\quad (\\text{Propanoic acid})$$</li>
      <li><strong>Bromine in $\\text{CS}_2$ ($273\\text{ K}$) with phenol:</strong>
        $$\\text{C}_6\\text{H}_5\\text{OH} + \\text{Br}_2 \\xrightarrow{\\text{CS}_2, 273\\text{ K}} \\mathbf{p\\text{-Bromophenol (major)}} + o\\text{-Bromophenol (minor)} + \\text{HBr}$$</li>
      <li><strong>Dilute $\\text{HNO}_3$ ($298\\text{ K}$) with phenol:</strong>
        $$\\text{C}_6\\text{H}_5\\text{OH} + \\text{dil. HNO}_3 \\rightarrow \\mathbf{o\\text{-Nitrophenol}} + \\mathbf{p\\text{-Nitrophenol}} + \\text{H}_2\\text{O}$$</li>
      <li><strong>Phenol with chloroform and aqueous $\\text{NaOH}$ (Reimer-Tiemann Reaction):</strong>
        $$\\text{C}_6\\text{H}_5\\text{OH} + \\text{CHCl}_3 + 3\\text{NaOH} \\xrightarrow{340\\text{ K}} \\mathbf{o\\text{-HO}-\\text{C}_6\\text{H}_4-\\text{CHO}} \\quad (\\mathbf{\\text{Salicylaldehyde}}) + 3\\text{NaCl} + 2\\text{H}_2\\text{O}$$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Propanoic acid equation', '1 Mark'],
    ['(ii) Monobromination yielding p-bromophenol major', '1 Mark'],
    ['(iii) Nitration with dil. HNO₃ giving o- and p-nitrophenols', '1 Mark'],
    ['(iv) Reimer-Tiemann reaction giving salicylaldehyde', '1 Mark']
  ]
));

// Exercise 7.18
questions.push(createQCard(
  'c12c-ch7-q27', 'Exercise 7.18', 'NCERT Exercise',
  'Explain the following with an example:<br>(i) Kolbe\'s reaction<br>(ii) Reimer-Tiemann reaction<br>(iii) Williamson ether synthesis<br>(iv) Unsymmetrical ether',
  `<div class="step">
    <b>Definitions with Examples:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Kolbe\'s Reaction:</strong>
        Treatment of sodium phenoxide with carbon dioxide gas at $400\\text{ K}$ and $4-7\\text{ atm}$ pressure, followed by acidification, yields <b>salicylic acid</b> (2-hydroxybenzoic acid).</li>
      <li><strong>Reimer-Tiemann Reaction:</strong>
        Reaction of phenol with chloroform in the presence of aqueous $\\text{NaOH}$ introduces an aldehyde group ($-\\text{CHO}$) at the ortho position, producing <b>salicylaldehyde</b>.</li>
      <li><strong>Williamson Ether Synthesis:</strong>
        Reaction of an alkyl halide ($1^\\circ$) with a sodium alkoxide or sodium phenoxide to produce symmetrical or unsymmetrical ethers via an $S_N2$ mechanism:
        $$\\text{C}_2\\text{H}_5\\text{ONa} + \\text{CH}_3\\text{I} \\rightarrow \\mathbf{\\text{C}_2\\text{H}_5-\\text{O}-\\text{CH}_3} + \\text{NaI}$$</li>
      <li><strong>Unsymmetrical (Mixed) Ether:</strong>
        An ether in which the two alkyl or aryl groups attached to the oxygen atom are different ($R-\\text{O}-R'$ or $\\text{Ar}-\\text{O}-R$).
        <br><em>Examples:</em> Methoxyethane ($\\text{CH}_3\\text{OC}_2\\text{H}_5$), Anisole ($\\text{C}_6\\text{H}_5\\text{OCH}_3$).</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Kolbe\'s reaction with equation', '1 Mark'],
    ['(ii) Reimer-Tiemann reaction with equation', '1 Mark'],
    ['(iii) Williamson ether synthesis with equation', '1 Mark'],
    ['(iv) Unsymmetrical ether definition with 2 examples', '1 Mark']
  ]
));

// Exercise 7.19
questions.push(createQCard(
  'c12c-ch7-q28', 'Exercise 7.19', 'NCERT Exercise',
  'Write the mechanism of acid-catalysed dehydration of ethanol to yield:<br>(i) ethene at $443\\text{ K}$ and<br>(ii) ethoxyethane at $413\\text{ K}$.',
  `<div class="step">
    <b>Dehydration Pathways Depending on Temperature:</b><br><br>
    <b>1. At $443\\text{ K}$ (Elimination to Ethene):</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Step 1 (Protonation): $\\text{CH}_3\\text{CH}_2\\text{OH} + \\text{H}^+ \\rightleftharpoons \\text{CH}_3\\text{CH}_2\\text{O}^+\\text{H}_2$</li>
      <li>Step 2 (Carbocation formation, RDS): $\\text{CH}_3\\text{CH}_2\\text{O}^+\\text{H}_2 \\xrightarrow{\\text{slow}} \\text{CH}_3\\text{CH}_2^+ + \\text{H}_2\\text{O}$</li>
      <li>Step 3 (Elimination of proton): $\\text{CH}_3\\text{CH}_2^+ \\rightarrow \\mathbf{\\text{CH}_2=\\text{CH}_2} + \\text{H}^+$</li>
    </ul>
    <br>
    <b>2. At $413\\text{ K}$ (Substitution to Ethoxyethane via $S_N2$):</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Step 1 (Protonation): $\\text{CH}_3\\text{CH}_2\\text{OH} + \\text{H}^+ \\rightleftharpoons \\text{CH}_3\\text{CH}_2\\text{O}^+\\text{H}_2$</li>
      <li>Step 2 ($S_N2$ attack by unprotonated ethanol):
        $$\\text{CH}_3\\text{CH}_2\\ddot{\\text{O}}\\text{H} + \\text{CH}_3\\text{CH}_2\\text{O}^+\\text{H}_2 \\rightarrow \\text{CH}_3\\text{CH}_2-\\text{O}^+(\\text{H})-\\text{CH}_2\\text{CH}_3 + \\text{H}_2\\text{O}$$</li>
      <li>Step 3 (Deprotonation):
        $$\\text{CH}_3\\text{CH}_2-\\text{O}^+(\\text{H})-\\text{CH}_2\\text{CH}_3 \\rightarrow \\mathbf{\\text{CH}_3\\text{CH}_2-\\text{O}-\\text{CH}_2\\text{CH}_3} + \\text{H}^+$$</li>
    </ul>
  </div>`,
  '4 Marks',
  [
    ['Elimination mechanism at 443 K yielding ethene', '2 Marks'],
    ['SN2 bimolecular substitution mechanism at 413 K yielding diethyl ether', '2 Marks']
  ]
));

// Exercise 7.20
questions.push(createQCard(
  'c12c-ch7-q29', 'Exercise 7.20', 'NCERT Exercise',
  'How is 1-propoxypropane synthesised from propan-1-ol? Write mechanism.',
  `<div class="step">
    <b>Synthesis & Mechanism ($S_N2$):</b><br>
    Heating propan-1-ol with concentrated $\\text{H}_2\\text{SO}_4$ at $413\\text{ K}$ produces 1-propoxypropane (dipropyl ether):
    $$2\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, 413\\text{ K}} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2-\\text{O}-\\text{CH}_2\\text{CH}_2\\text{CH}_3} + \\text{H}_2\\text{O}$$
    <br>
    <b>Mechanism:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li>Protonation of propan-1-ol: $\\text{C}_3\\text{H}_7\\text{OH} + \\text{H}^+ \\rightleftharpoons \\text{C}_3\\text{H}_7\\text{O}^+\\text{H}_2$</li>
      <li>$S_N2$ attack: A second neutral molecule of propan-1-ol attacks the protonated alcohol:
        $$\\text{C}_3\\text{H}_7\\ddot{\\text{O}}\\text{H} + \\text{C}_3\\text{H}_7\\text{O}^+\\text{H}_2 \\rightarrow [\\text{C}_3\\text{H}_7-\\text{O}^+(\\text{H})-\\text{C}_3\\text{H}_7] + \\text{H}_2\\text{O}$$</li>
      <li>Loss of proton yields 1-propoxypropane:
        $$[\\text{C}_3\\text{H}_7-\\text{O}^+(\\text{H})-\\text{C}_3\\text{H}_7] \\rightarrow \\mathbf{\\text{C}_3\\text{H}_7-\\text{O}-\\text{C}_3\\text{H}_7} + \\text{H}^+$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Reaction equation with H₂SO₄ at 413 K', '1 Mark'],
    ['Complete 3-step SN2 mechanism with proton transfer', '2 Marks']
  ]
));

// Exercise 7.21
questions.push(createQCard(
  'c12c-ch7-q30', 'Exercise 7.21', 'NCERT Exercise',
  'Preparation of ethers by acid-catalysed dehydration of secondary or tertiary alcohols is not a suitable method. Give reason.',
  `<div class="step">
    <b>Reason:</b><br>
    Dehydration of secondary and tertiary alcohols in acidic medium proceeds via the formation of stable secondary ($2^\\circ$) or tertiary ($3^\\circ$) carbocations.<br>
    Because of steric hindrance and the high stability of the resulting alkenes, the elimination of a $\\beta$-proton ($\mathbf{E1}$ or $\mathbf{E2}$ elimination) occurs much faster than the nucleophilic attack by another bulky alcohol molecule.<br>
    Therefore, acid dehydration of $2^\\circ$ or $3^\\circ$ alcohols yields <b>alkenes as the predominant products</b> rather than ethers:
    $$(\\text{CH}_3)_3\\text{C}-\\text{OH} \\xrightarrow{\\text{H}^+, \\Delta} \\mathbf{\\text{CH}_2=\\text{C(CH}_3)_2} + \\text{H}_2\\text{O}$$
  </div>`,
  '2 Marks',
  [
    ['Steric crowding in 2°/3° alcohols hindering bimolecular attack', '1 Mark'],
    ['Facile elimination via stable carbocations producing alkenes', '1 Mark']
  ]
));

// Exercise 7.22
questions.push(createQCard(
  'c12c-ch7-q31', 'Exercise 7.22', 'NCERT Exercise',
  'Write the equation of the reaction of hydrogen iodide with:<br>(i) 1-propoxypropane<br>(ii) methoxybenzene<br>(iii) benzyl ethyl ether',
  `<div class="step">
    <b>Cleavage of Ethers with $\\text{HI}$:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>1-Propoxypropane:</strong>
        Symmetrical dialkyl ether; cleaved via $S_N2$ to give 1 mole of propan-1-ol and 1 mole of 1-iodopropane (or 2 moles of 1-iodopropane if $\text{HI}$ is in excess):
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2-\\text{O}-\\text{CH}_2\\text{CH}_2\\text{CH}_3 + \\text{HI} \\xrightarrow{\\Delta} \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{I}} + \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}}$$</li>
      <li><strong>Methoxybenzene (Anisole):</strong>
        The $\\text{C}_{\\text{aromatic}}-\\text{O}$ bond has partial double bond character due to resonance and cannot be cleaved. The alkyl-oxygen bond breaks:
        $$\\text{C}_6\\text{H}_5-\\text{O}-\\text{CH}_3 + \\text{HI} \\xrightarrow{\\Delta} \\mathbf{\\text{C}_6\\text{H}_5\\text{OH} (\\text{Phenol})} + \\mathbf{\\text{CH}_3\\text{I} (\\text{Iodomethane})}$$</li>
      <li><strong>Benzyl ethyl ether:</strong>
        Cleavage proceeds via an $S_N1$ pathway because the benzyl carbocation ($\\text{C}_6\\text{H}_5\\text{CH}_2^+$) is resonance-stabilized:
        $$\\text{C}_6\\text{H}_5\\text{CH}_2-\\text{O}-\\text{CH}_2\\text{CH}_3 + \\text{HI} \\xrightarrow{\\Delta} \\mathbf{\\text{C}_6\\text{H}_5\\text{CH}_2\\text{I} (\\text{Benzyl iodide})} + \\mathbf{\\text{CH}_3\\text{CH}_2\\text{OH} (\\text{Ethanol})}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) 1-iodopropane + propan-1-ol', '1 Mark'],
    ['(ii) Phenol + iodomethane (aromatic C-O bond resists cleavage)', '1 Mark'],
    ['(iii) Benzyl iodide + ethanol (benzylic carbocation stability)', '1 Mark']
  ]
));

// Exercise 7.23
questions.push(createQCard(
  'c12c-ch7-q32', 'Exercise 7.23', 'NCERT Exercise',
  'Explain the fact that in aryl alkyl ethers:<br>(i) the alkoxy group is ortho, para directing, and<br>(ii) it activates the benzene ring towards electrophilic aromatic substitution.',
  `<div class="step">
    <b>Resonance Analysis of Alkoxy Group ($-\\text{OR}$):</b><br>
    The oxygen atom of the alkoxy group has two lone pairs of electrons that are in conjugation with the aromatic ring ($+R$ effect).<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Activation of the Ring:</strong> Due to $+R$ donation of lone pair electrons from oxygen into the $\\pi$-system, electron density over the entire benzene ring increases relative to benzene. Hence, the ring is <b>activated</b> towards attack by electrophiles.</li>
      <li><strong>Ortho, Para-Directing Nature:</strong> Resonance structures show that the negative charge resides specifically on the <b>ortho and para carbons</b>. Since electrophiles ($E^+$) preferentially attack positions with higher electron density, electrophilic aromatic substitution occurs selectively at the ortho and para positions.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['+R effect increasing ring electron density (activation)', '1 Mark'],
    ['Negative charge localization at ortho/para positions (directing)', '1 Mark']
  ]
));

// Exercise 7.24
questions.push(createQCard(
  'c12c-ch7-q33', 'Exercise 7.24', 'NCERT Exercise',
  'Write the mechanism of the reaction of $\\text{HI}$ with methoxymethane.',
  `<div class="step">
    <b>$S_N2$ Cleavage Mechanism:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Step 1: Protonation of ether to form oxonium ion:</strong>
        $$\\text{CH}_3-\\ddot{\\text{O}}-\\text{CH}_3 + \\text{H}-\\text{I} \\rightleftharpoons \\mathbf{\\text{CH}_3-\\text{O}^+(\\text{H})-\\text{CH}_3} + \\text{I}^-$$</li>
      <li><strong>Step 2: Nucleophilic attack of iodide ion ($S_N2$):</strong>
        Iodide ion attacks the less hindered methyl carbon from the backside in a slow, rate-determining step:
        $$\\text{I}^- + \\text{CH}_3-\\text{O}^+(\\text{H})-\\text{CH}_3 \\xrightarrow{\\text{slow}} [\\text{I}^{\\delta-}\\cdots\\text{CH}_3\\cdots\\text{O}^{\\delta+}(\\text{H})\\text{CH}_3]^\\ddagger \\rightarrow \\mathbf{\\text{CH}_3\\text{I}} + \\mathbf{\\text{CH}_3\\text{OH}}$$</li>
      <li><strong>Step 3: Reaction with excess $\\text{HI}$ (if present):</strong>
        Methanol reacts with a second molecule of $\\text{HI}$ to convert to methyl iodide:
        $$\\text{CH}_3\\text{OH} + \\text{HI} \\rightarrow \\mathbf{\\text{CH}_3\\text{I}} + \\text{H}_2\\text{O}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Step 1: Protonation of ether', '1 Mark'],
    ['Step 2: SN2 attack of I⁻ on oxonium ion', '1 Mark'],
    ['Step 3: Final products CH₃I and CH₃OH (or 2 CH₃I with excess HI)', '1 Mark']
  ]
));

// Exercise 7.25
questions.push(createQCard(
  'c12c-ch7-q34', 'Exercise 7.25', 'NCERT Exercise',
  'Write equations of the following reactions:<br>(i) Friedel-Crafts alkylation of anisole<br>(ii) Nitration of anisole<br>(iii) Bromination of anisole in ethanoic acid medium<br>(iv) Friedel-Crafts acetylation of anisole',
  `<div class="step">
    <b>Electrophilic Substitutions of Anisole:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Friedel-Crafts Alkylation:</strong>
        $$\\text{C}_6\\text{H}_5\\text{OCH}_3 + \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{anhyd. AlCl}_3} \\mathbf{p\\text{-Methoxytoluene (major)}} + o\\text{-Methoxytoluene (minor)} + \\text{HCl}$$</li>
      <li><strong>Nitration of Anisole:</strong>
        $$\\text{C}_6\\text{H}_5\\text{OCH}_3 + \\text{HNO}_3 / \\text{H}_2\\text{SO}_4 \\rightarrow \\mathbf{p\\text{-Nitroanisole (major)}} + o\\text{-Nitroanisole (minor)} + \\text{H}_2\\text{O}$$</li>
      <li><strong>Bromination in Ethanoic Acid:</strong>
        $$\\text{C}_6\\text{H}_5\\text{OCH}_3 + \\text{Br}_2 \\xrightarrow{\\text{CH}_3\\text{COOH}} \\mathbf{p\\text{-Bromoanisole (90%, major)}} + o\\text{-Bromoanisole (minor)} + \\text{HBr}$$
        (No catalyst required due to high activation by $-\\text{OCH}_3$).</li>
      <li><strong>Friedel-Crafts Acetylation:</strong>
        $$\\text{C}_6\\text{H}_5\\text{OCH}_3 + \\text{CH}_3\\text{COCl} \\xrightarrow{\\text{anhyd. AlCl}_3} \\mathbf{4-\\text{Methoxyacetophenone (major)}} + 2-\\text{Methoxyacetophenone (minor)} + \\text{HCl}$$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) Alkylation forming 4-methoxytoluene major', '1 Mark'],
    ['(ii) Nitration forming 4-nitroanisole major', '1 Mark'],
    ['(iii) Bromination in ethanoic acid without catalyst (p-bromoanisole 90%)', '1 Mark'],
    ['(iv) Acetylation forming 4-methoxyacetophenone major', '1 Mark']
  ]
));

// Exercise 7.26
questions.push(createQCard(
  'c12c-ch7-q35', 'Exercise 7.26', 'NCERT Exercise',
  'Some ethers are prepared by Williamson synthesis. Which of the following is not a suitable Williamson synthesis? Explain:<br>(i) $(\\text{CH}_3)_3\\text{C-Br} + \\text{CH}_3\\text{ONa} \\rightarrow$<br>(ii) $\\text{CH}_3\\text{Br} + (\\text{CH}_3)_3\\text{C-ONa} \\rightarrow$',
  `<div class="step">
    <b>Analysis of Williamson Ether Synthesis:</b><br>
    The reaction proceeds via an <b>$S_N2$ displacement</b> of halide by alkoxide ion.<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Route (i): $(\\text{CH}_3)_3\\text{C-Br} + \\text{CH}_3\\text{ONa}$: (UNSUITABLE)</strong><br>
        tert-Butyl bromide is a tertiary ($3^\\circ$) alkyl halide. Sodium methoxide is not only a nucleophile but also a strong base. Due to severe steric hindrance to $S_N2$ attack, <b>elimination ($E2$) predominates completely</b>, yielding an alkene (2-methylpropene) instead of ether:
        $$(\\text{CH}_3)_3\\text{C-Br} + \\text{CH}_3\\text{ONa} \\rightarrow \\mathbf{\\text{CH}_2=\\text{C(CH}_3)_2} + \\text{CH}_3\\text{OH} + \\text{NaBr}$$</li>
      <li><strong>Route (ii): $\\text{CH}_3\\text{Br} + (\\text{CH}_3)_3\\text{C-ONa}$: (SUITABLE)</strong><br>
        Methyl bromide is an unhindered primary halide. The bulky tert-butoxide ion easily attacks the methyl carbon via $S_N2$ to form the desired ether in high yield:
        $$\\text{CH}_3\\text{Br} + (\\text{CH}_3)_3\\text{C-ONa} \\rightarrow \\mathbf{(\\text{CH}_3)_3\\text{C}-\\text{O}-\\text{CH}_3} + \\text{NaBr}$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Route (i) unsuitable because 3° halide undergoes E2 elimination to alkene', '1 Mark'],
    ['Route (ii) suitable because 1° halide undergoes clean SN2 substitution', '1 Mark']
  ]
));

// Exercise 7.27
questions.push(createQCard(
  'c12c-ch7-q36', 'Exercise 7.27', 'NCERT Exercise',
  'Name the reagents used in the following reactions:<br>(i) Oxidation of primary alcohol to carboxylic acid<br>(ii) Oxidation of primary alcohol to aldehyde<br>(iii) Bromination of phenol to 2,4,6-tribromophenol<br>(iv) Benzyl alcohol to benzoic acid<br>(v) Dehydration of propan-2-ol to propene<br>(vi) Butan-2-one to butan-2-ol',
  `<div class="step">
    <b>Reagents:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Primary alcohol to carboxylic acid:</strong> Acidified $\\text{KMnO}_4$ or acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$.</li>
      <li><strong>Primary alcohol to aldehyde:</strong> Pyridinium chlorochromate (<b>PCC</b>) in $\\text{CH}_2\\text{Cl}_2$ or Collin\'s reagent.</li>
      <li><strong>Phenol to 2,4,6-tribromophenol:</strong> Aqueous bromine (<b>Bromine water, $\text{Br}_2 / \text{H}_2\text{O}$</b>).</li>
      <li><strong>Benzyl alcohol to benzoic acid:</strong> Alkaline $\\text{KMnO}_4$ followed by dilute $\\text{H}_2\\text{SO}_4$.</li>
      <li><strong>Dehydration of propan-2-ol to propene:</strong> $85\\% \\text{ H}_3\\text{PO}_4$ at $440\\text{ K}$ (or conc. $\\text{H}_2\\text{SO}_4$ at $443\\text{ K}$).</li>
      <li><strong>Butan-2-one to butan-2-ol:</strong> Sodium borohydride (<b>$\\text{NaBH}_4$</b>) or lithium aluminium hydride ($\\text{LiAlH}_4$) or $\\text{H}_2 / \\text{Ni}$.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['All 6 reagents correctly specified', '½ Mark × 6 = 3 Marks']
  ]
));

// Exercise 7.28
questions.push(createQCard(
  'c12c-ch7-q37', 'Exercise 7.28', 'NCERT Exercise',
  'Give reasons for the higher boiling point of ethanol in comparison to methoxymethane.',
  `<div class="step">
    <b>Comparison:</b><br>
    Both ethanol ($\text{C}_2\text{H}_5\text{OH}$) and methoxymethane ($\text{CH}_3\text{OCH}_3$) are functional isomers with identical molecular formula ($\text{C}_2\text{H}_6\text{O}$) and molecular mass ($46$).<br><br>
    <ul style="margin-left:20px; line-height:1.75;">
      <li><strong>Ethanol:</strong> Possesses a hydrogen atom bonded to an electronegative oxygen atom ($-\\text{O}-\\text{H}$). It forms strong <b>intermolecular hydrogen bonds</b> that hold the molecules tightly together in liquid state. Boiling point = $351\\text{ K}$.</li>
      <li><strong>Methoxymethane:</strong> Oxygen is bonded only to carbon atoms ($\text{C}-\text{O}-\text{C}$); it lacks hydrogen bonded to oxygen and <b>cannot form intermolecular hydrogen bonds</b>. Its molecules are held together only by much weaker dipole-dipole attractions. Boiling point = $248\\text{ K}$.</li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Intermolecular hydrogen bonding in ethanol', '1 Mark'],
    ['Absence of hydrogen bonding in methoxymethane (dipole-dipole only)', '1 Mark']
  ]
));

// Exercise 7.29
questions.push(createQCard(
  'c12c-ch7-q38', 'Exercise 7.29', 'NCERT Exercise',
  'Give IUPAC names of the following ethers:<br>(i) $\\text{C}_2\\text{H}_5\\text{OCH}_2-\\text{CH(CH}_3)_2$<br>(ii) $\\text{CH}_3\\text{OCH}_2\\text{CH}_2\\text{Cl}$<br>(iii) $\\text{O}_2\\text{N}-\\text{C}_6\\text{H}_4-\\text{OCH}_3(p)$<br>(iv) $\\text{CH}_3\\text{O}-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$<br>(v) 1-Ethoxy-4,4-dimethylcyclohexane<br>(vi) Ethoxybenzene',
  `<div class="step">
    <b>IUPAC Names:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>$\\text{C}_2\\text{H}_5\\text{OCH}_2-\\text{CH(CH}_3)_2$:</strong> 1-Ethoxy-2-methylpropane</li>
      <li><strong>$\\text{CH}_3\\text{OCH}_2\\text{CH}_2\\text{Cl}$:</strong> 1-Chloro-2-methoxyethane</li>
      <li><strong>$\\text{O}_2\\text{N}-\\text{C}_6\\text{H}_4-\\text{OCH}_3(p)$:</strong> 1-Methoxy-4-nitrobenzene (or 4-nitroanisole)</li>
      <li><strong>$\\text{CH}_3\\text{O}-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$:</strong> 1-Methoxypropane</li>
      <li><strong>1-Ethoxy-4,4-dimethylcyclohexane:</strong> 1-Ethoxy-4,4-dimethylcyclohexane</li>
      <li><strong>Ethoxybenzene:</strong> Ethoxybenzene</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['All 6 IUPAC ether names correct', '½ Mark × 6 = 3 Marks']
  ]
));

// Exercise 7.30
questions.push(createQCard(
  'c12c-ch7-q39', 'Exercise 7.30', 'NCERT Exercise',
  'Write the names of reagents and equations for the preparation of the following ethers by Williamson\'s synthesis:<br>(i) 1-Propoxypropane<br>(ii) Ethoxybenzene<br>(iii) 2-Methoxy-2-methylpropane<br>(iv) 1-Methoxyethane',
  `<div class="step">
    <b>Williamson Syntheses:</b>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>1-Propoxypropane:</strong>
        <br>Reagents: Sodium propoxide and 1-bromopropane.
        $$\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{ONa} + \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{Br} \\rightarrow \\mathbf{\\text{CH}_3\\text{CH}_2\\text{CH}_2-\\text{O}-\\text{CH}_2\\text{CH}_2\\text{CH}_3} + \\text{NaBr}$$</li>
      <li><strong>Ethoxybenzene:</strong>
        <br>Reagents: Sodium phenoxide and bromoethane (ethyl bromide).
        $$\\text{C}_6\\text{H}_5\\text{ONa} + \\text{C}_2\\text{H}_5\\text{Br} \\rightarrow \\mathbf{\\text{C}_6\\text{H}_5-\\text{O}-\\text{C}_2\\text{H}_5} + \\text{NaBr}$$</li>
      <li><strong>2-Methoxy-2-methylpropane (tert-butyl methyl ether):</strong>
        <br>Reagents: Sodium tert-butoxide and bromomethane (methyl bromide).
        $$(\\text{CH}_3)_3\\text{C-ONa} + \\text{CH}_3\\text{Br} \\rightarrow \\mathbf{(\\text{CH}_3)_3\\text{C}-\\text{O}-\\text{CH}_3} + \\text{NaBr}$$</li>
      <li><strong>1-Methoxyethane:</strong>
        <br>Reagents: Sodium ethoxide and chloromethane (or sodium methoxide and bromoethane).
        $$\\text{CH}_3\\text{CH}_2\\text{ONa} + \\text{CH}_3\\text{I} \\rightarrow \\mathbf{\\text{CH}_3\\text{CH}_2-\\text{O}-\\text{CH}_3} + \\text{NaI}$$</li>
    </ol>
  </div>`,
  '4 Marks',
  [
    ['(i) to (iv) correct reagents and equations', '1 Mark × 4 = 4 Marks']
  ]
));

// Exercise 7.31
questions.push(createQCard(
  'c12c-ch7-q40', 'Exercise 7.31', 'NCERT Exercise',
  'Illustrate with examples the limitations of Williamson synthesis for the preparation of certain types of ethers.',
  `<div class="step">
    <b>Major Limitations:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Tertiary Alkyl Halides Yield Alkenes:</strong>
        Williamson synthesis is an $S_N2$ reaction. If a tertiary ($3^\\circ$) alkyl halide is used with an alkoxide ion, elimination ($E2$) predominates over substitution, producing an <b>alkene</b> instead of an ether:
        $$(\\text{CH}_3)_3\\text{C-Br} + \\text{CH}_3\\text{ONa} \\rightarrow \\mathbf{\\text{CH}_2=\\text{C(CH}_3)_2} + \\text{CH}_3\\text{OH} + \\text{NaBr}$$
        <em>Solution:</em> To prepare tert-butyl ethers, use a $3^\\circ$ alkoxide and a $1^\\circ$ methyl/alkyl halide.</li>
      <li><strong>Aryl Halides & Vinyl Halides Cannot Be Used:</strong>
        Aryl halides (e.g., chlorobenzene) and vinyl halides (e.g., chloroethene) cannot be used as substrates because their $\\text{C}-\\text{X}$ bond has partial double bond character due to resonance and does not undergo $S_N2$ displacement:
        $$\\text{C}_6\\text{H}_5\\text{Cl} + \\text{CH}_3\\text{ONa} \\rightarrow \\text{No reaction (under Williamson conditions)}$$
        Diaryl ethers (e.g., $\text{C}_6\text{H}_5-\text{O}-\text{C}_6\text{H}_5$) cannot be prepared by Williamson synthesis.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Tertiary halides yielding alkenes via elimination', '1 Mark'],
    ['Inertness of aryl and vinyl halides due to partial double bond character', '1 Mark']
  ]
));

// Exercise 7.32
questions.push(createQCard(
  'c12c-ch7-q41', 'Exercise 7.32', 'NCERT Exercise',
  'How is ethanal converted into butan-2-ol using Grignard reagent?',
  `<div class="step">
    <b>Reaction Sequence:</b><br>
    Ethanal ($\text{CH}_3\text{CHO}$) contains a 2-carbon carbonyl backbone. To prepare butan-2-ol ($\text{CH}_3\text{CH(OH)CH}_2\text{CH}_3$, 4 carbons), an <b>ethyl group</b> must be added using <b>ethylmagnesium bromide ($\text{C}_2\text{H}_5\text{MgBr}$)</b>:<br><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Nucleophilic Addition:</strong>
        The nucleophilic ethyl carbanion of ethylmagnesium bromide attacks the carbonyl carbon of ethanal in dry ether to form a magnesium adduct:
        $$\\text{CH}_3\\text{CHO} + \\text{CH}_3\\text{CH}_2\\text{MgBr} \\xrightarrow{\\text{dry ether}} \\text{CH}_3-\\text{CH(OMgBr)}-\\text{CH}_2\\text{CH}_3$$</li>
      <li><strong>Acid Hydrolysis:</strong>
        Hydrolysis of the adduct with dilute acid decomposes it to yield butan-2-ol:
        $$\\text{CH}_3-\\text{CH(OMgBr)}-\\text{CH}_2\\text{CH}_3 \\xrightarrow{\\text{H}_2\\text{O} / \\text{H}^+} \\mathbf{\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_2\\text{CH}_3 (\\text{Butan-2-ol})} + \\text{Mg(OH)Br}$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Identification of ethylmagnesium halide as Grignard reagent', '1 Mark'],
    ['Two-step addition and hydrolysis equations', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 7: Alcohols, Phenols and Ethers (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, 'Aldehydes, Ketones and Carboxylic Acids');
console.log(`Chapter 7: Alcohols, Phenols and Ethers successfully saved!`);
