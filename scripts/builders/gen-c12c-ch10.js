// scripts/builders/gen-c12c-ch10.js
// Class 12 Chemistry Chapter 10: Biomolecules (जैव-अणु) (NCERT Rationalised 2026–27)
// Full Coverage: 6 In-Text Questions + 25 End-of-Chapter Exercises = 31 Questions Verbatim
const { createQCard, saveChapter } = require('./c12c-helper');

const chNum = 10;
const chTitle = 'Biomolecules (जैव-अणु)';
const exTitle = 'NCERT Chapter 10: In-Text Questions (10.1–10.6) & End-of-Chapter Exercises (10.1–10.25)';

const svgDiagram = `
<div style="background:linear-gradient(135deg, #f0fdf4, #dcfce7); border:1px solid #bbf7d0; border-radius:12px; padding:20px; margin-bottom:24px;">
  <h3 style="font-size:1.05rem; color:#166534; margin-bottom:12px; font-weight:800; display:flex; align-items:center; gap:8px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    Biomolecules: Carbohydrates, Proteins, Nucleic Acids &amp; Vitamins
  </h3>
  <svg viewBox="0 0 850 160" style="width:100%; height:auto; font-family:'Plus Jakarta Sans', sans-serif;">
    <!-- Box 1: Carbohydrates -->
    <rect x="15" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <text x="110" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#14532d">Carbohydrates</text>
    <text x="110" y="70" text-anchor="middle" font-size="11" fill="#334155">Aldoses &amp; Ketoses</text>
    <text x="110" y="94" text-anchor="middle" font-size="10" fill="#64748b">• Glucose (Aldohexose), Fructose</text>
    <text x="110" y="112" text-anchor="middle" font-size="10" fill="#64748b">• Glycosidic linkage: Maltose, Lactose</text>

    <!-- Box 2: Proteins -->
    <rect x="225" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="320" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Amino Acids &amp; Proteins</text>
    <text x="320" y="72" text-anchor="middle" font-size="11" fill="#334155">Peptide Bond (-CONH-)</text>
    <text x="320" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Zwitterion &amp; Isoelectric point</text>
    <text x="320" y="114" text-anchor="middle" font-size="10" fill="#64748b">• 1°, 2° (α-helix, β-sheet), 3°, 4°</text>

    <!-- Box 3: Nucleic Acids -->
    <rect x="435" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
    <text x="530" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b21a8">Nucleic Acids</text>
    <text x="530" y="72" text-anchor="middle" font-size="11" fill="#334155">DNA &amp; RNA (Phosphodiester)</text>
    <text x="530" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Base + Sugar = Nucleoside</text>
    <text x="530" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Double Helix: A=T (2 H-bonds), G≡C</text>

    <!-- Box 4: Vitamins & Enzymes -->
    <rect x="645" y="20" width="190" height="115" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
    <text x="740" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">Vitamins &amp; Enzymes</text>
    <text x="740" y="72" text-anchor="middle" font-size="11" fill="#334155">Biocatalysts &amp; Nutrients</text>
    <text x="740" y="96" text-anchor="middle" font-size="10" fill="#64748b">• Water sol: B, C | Fat sol: A, D, E, K</text>
    <text x="740" y="114" text-anchor="middle" font-size="10" fill="#64748b">• Denaturation destroys 2° &amp; 3° struct.</text>
  </svg>
</div>`;

const questions = [];

// ============================================================================
// PART 1: NCERT IN-TEXT QUESTIONS (10.1 to 10.6)
// ============================================================================

// Question 10.1 (In-Text)
questions.push(createQCard(
  'c12c-ch10-q1', 'In-Text 10.1', 'NCERT In-Text',
  'Glucose or sucrose are soluble in water but cyclohexane or benzene (simple six-membered ring compounds) are insoluble in water. Explain.',
  `<div class="step">
    <b>Reason for Solubility Difference:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Glucose and Sucrose:</strong> A molecule of glucose ($\text{C}_6\text{H}_{12}\text{O}_6$) contains five polar hydroxyl ($-\text{OH}$) groups, and sucrose ($\text{C}_{12}\text{H}_{22}\text{O}_{11}$) contains eight $-\text{OH}$ groups. Because of these multiple polar hydroxyl groups, glucose and sucrose form extensive and strong <b>intermolecular hydrogen bonds</b> with polar water molecules ($\text{H}_2\text{O}$). This favorable hydration energy overcomes the solute-solute forces, making them readily soluble in water.</li>
      <li><strong>Cyclohexane and Benzene:</strong> Cyclohexane ($\text{C}_6\text{H}_{12}$) and benzene ($\text{C}_6\text{H}_6$) are non-polar hydrocarbon molecules without any polar functional groups or hydrogen-bonding groups. They cannot form hydrogen bonds with water molecules and cannot disrupt the existing strong hydrogen-bonding network among water molecules. Hence, based on the principle "like dissolves like", they are insoluble in water.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Presence of multiple -OH groups in glucose/sucrose forming extensive H-bonds with water', '1 Mark'],
    ['Non-polar nature of cyclohexane/benzene unable to form H-bonds with water', '1 Mark']
  ]
));

// Question 10.2 (In-Text)
questions.push(createQCard(
  'c12c-ch10-q2', 'In-Text 10.2', 'NCERT In-Text',
  'What are the expected products of hydrolysis of lactose?',
  `<div class="step">
    <b>Hydrolysis of Lactose:</b><br>
    Lactose is a disaccharide found in milk (milk sugar). It is composed of one unit of $\beta$-D-galactose and one unit of $\beta$-D-glucose linked together by a $\beta$-1,4-glycosidic bond.<br><br>
    On acid hydrolysis or hydrolysis catalyzed by the enzyme <i>lactase</i>, one mole of lactose yields an equimolar mixture of <b>$\beta$-D-galactose</b> and <b>$\beta$-D-glucose</b>:
    $$\text{C}_{12}\text{H}_{22}\text{O}_{11} \text{ (Lactose)} + \text{H}_2\text{O} \\overset{}{\\longrightarrow}^+ \text{ or Lactase}} {\text{C}_6\text{H}_{12}\text{O}_6}_{\beta\text{-D-Galactose}} + {\text{C}_6\text{H}_{12}\text{O}_6}_{\beta\text{-D-Glucose}}$$
  </div>`,
  '1 Mark',
  [
    ['Identification of hydrolysis products: β-D-galactose and β-D-glucose (equimolar)', '1 Mark']
  ]
));

// Question 10.3 (In-Text)
questions.push(createQCard(
  'c12c-ch10-q3', 'In-Text 10.3', 'NCERT In-Text',
  'How do you explain the absence of aldehyde group in the pentaacetate of D-glucose?',
  `<div class="step">
    <b>Cyclic Hemiacetal Structure of Glucose:</b><br>
    D-Glucose exists primarily in two cyclic hemiacetal forms ($\alpha$-D-glucopyranose and $\beta$-D-glucopyranose) in equilibrium with a very tiny fraction of open-chain form containing a free $-\text{CHO}$ group at C-1.<br><br>
    When D-glucose is acetylated with acetic anhydride, all five hydroxyl groups are esterified to form <b>glucose pentaacetate</b>. 
    Crucially, the $-\text{OH}$ group at the anomeric carbon (C-1) is also acetylated to form an acetate ester:
    $$\text{Anomeric } -\text{OH} \text{ at C-1} \\overset{}{\\longrightarrow}_2\text{O}} \text{Anomeric } -\text{OCOCH}_3$$
    Because the C-1 position is now converted into an acetate (acetal-like linkage) and no longer a free hemiacetal $-\text{OH}$, it <b>cannot revert back (hydrolyse reversibly) into the open-chain free aldehyde form</b> in solution.<br><br>
    Consequently, glucose pentaacetate does not react with hydroxylamine ($\text{NH}_2\text{OH}$) to form an oxime or react with Schiff's reagent, confirming the complete absence of a free aldehyde ($-\text{CHO}$) group.
  </div>`,
  '2 Marks',
  [
    ['Acetylation of anomeric -OH at C-1 locks the ring into cyclic acetate', '1 Mark'],
    ['Ring cannot open to yield free -CHO group in solution (no oxime formation)', '1 Mark']
  ]
));

// Question 10.4 (In-Text)
questions.push(createQCard(
  'c12c-ch10-q4', 'In-Text 10.4', 'NCERT In-Text',
  'The melting points and solubility in water of amino acids are generally higher than that of the corresponding halo acids. Explain.',
  `<div class="step">
    <b>Dipolar Zwitterion Structure of Amino Acids:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Zwitterion Formation:</strong> Amino acids contain both a basic amino group ($-\text{NH}_2$) and an acidic carboxyl group ($-\text{COOH}$). In aqueous solution and in the crystalline solid state, an internal proton transfer takes place:
      $$\text{H}_2\text{N}-\text{CH}(R)-\text{COOH} \rightleftharpoons \mathbf{H_3N^+-\text{CH}(R)-\text{COO}^-} \quad (\text{Zwitterion})$$
      Thus, amino acids exist as dipolar internal salts rather than simple neutral covalent molecules.</li>
      <li><strong>High Melting Points:</strong> Because of the presence of positive ($-\text{NH}_3^+$) and negative ($-\text{COO}^-$) charges, solid amino acids possess strong electrostatic (ionic) attractions between oppositely charged ends in their crystal lattice, similar to inorganic ionic salts. In contrast, halo acids (such as $\text{CH}_3\text{CH(Cl)COOH}$) are covalent molecules held by weak dipole-dipole forces. Hence, amino acids have much higher melting points.</li>
      <li><strong>High Water Solubility:</strong> The dipolar ionic Zwitterions interact very strongly with polar water molecules through strong ion-dipole interactions (high hydration energy), making them highly soluble in water compared to halo acids.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Explanation of dipolar Zwitterion structure (H₃N⁺-CH(R)-COO⁻)', '1 Mark'],
    ['Strong electrostatic lattice forces & strong ion-dipole hydration with water', '1 Mark']
  ]
));

// Question 10.5 (In-Text)
questions.push(createQCard(
  'c12c-ch10-q5', 'In-Text 10.5', 'NCERT In-Text',
  'Where does the water present in the egg go after boiling the egg?',
  `<div class="step">
    <b>Protein Denaturation and Entrapment of Water:</b><br>
    The raw egg white contains water-soluble globular proteins (chiefly <b>albumin</b>) suspended in water.<br><br>
    When the egg is boiled (heated):
    <ol style="margin-left:20px; line-height:1.75;">
      <li>The thermal energy disrupts the weak hydrogen bonds, ionic bonds, and hydrophobic interactions stabilizing the secondary and tertiary structures of albumin proteins.</li>
      <li>The compact globular polypeptide chains unfold, denature, and coagulate into a random, fibrous, cross-linked three-dimensional network.</li>
      <li>During this denaturation and coagulation process, the water present in the egg white is <b>adsorbed, bound and physically trapped</b> within the porous interstices of the coagulated protein matrix via hydrogen bonding. It does not escape or evaporate; it becomes chemically and physically entrapped.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Denaturation of globular albumin into cross-linked coagulated protein network', '1 Mark'],
    ['Water is physically and chemically trapped / adsorbed within the coagulated gel matrix', '1 Mark']
  ]
));

// Question 10.6 (In-Text)
questions.push(createQCard(
  'c12c-ch10-q6', 'In-Text 10.6', 'NCERT In-Text',
  'Why cannot vitamin C be stored in our body?',
  `<div class="step">
    <b>Water Solubility and Excretion:</b><br>
    Vitamin C (<b>ascorbic acid</b>) is a <b>water-soluble vitamin</b> containing multiple polar hydroxyl ($-\text{OH}$) groups that form extensive hydrogen bonds with water.<br><br>
    Unlike fat-soluble vitamins (A, D, E, K) which dissolve in lipids and are safely stored in adipose tissues and liver:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Water-soluble vitamins readily dissolve in body fluids and blood.</li>
      <li>Any excess quantity of vitamin C beyond immediate metabolic requirements cannot be held by fatty tissues and is <b>readily filtered by the kidneys and excreted in urine</b>.</li>
    </ul>
    Therefore, vitamin C cannot be stored in the body and must be regularly supplied in the daily diet (citrus fruits, amla, tomatoes, green leafy vegetables).
  </div>`,
  '1 Mark',
  [
    ['Vitamin C is water-soluble, so excess is regularly excreted in urine and not stored', '1 Mark']
  ]
));

// ============================================================================
// PART 2: NCERT END-OF-CHAPTER EXERCISES (10.1 to 10.25)
// ============================================================================

// Exercise 10.1
questions.push(createQCard(
  'c12c-ch10-q7', 'Exercise 10.1', 'NCERT Exercise',
  'What are monosaccharides?',
  `<div class="step">
    <b>Definition:</b><br>
    Monosaccharides are the simplest carbohydrate units that <b>cannot be hydrolysed further</b> into simpler units of polyhydroxy aldehydes or polyhydroxy ketones.<br><br>
    <b>General Characteristics:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>They generally have the molecular formula $(\text{CH}_2\text{O})_n$, where $n = 3 \text{ to } 7$.</li>
      <li>If they contain an aldehyde group ($-\\text{CHO}$), they are called <b>aldoses</b>; if they contain a keto group ($>\\text{C}=\\text{O}$), they are called <b>ketoses</b>.</li>
      <li><b>Examples:</b> Glucose ($\text{C}_6\text{H}_{12}\text{O}_6$, an aldohexose), Fructose ($\text{C}_6\text{H}_{12}\text{O}_6$, a ketohexose), Ribose ($\text{C}_5\text{H}_{10}\text{O}_5$, an aldopentose).</li>
    </ul>
  </div>`,
  '1 Mark',
  [
    ['Definition: carbohydrates that cannot be hydrolysed into simpler polyhydroxy aldehydes/ketones', '1 Mark']
  ]
));

// Exercise 10.2
questions.push(createQCard(
  'c12c-ch10-q8', 'Exercise 10.2', 'NCERT Exercise',
  'What are reducing sugars?',
  `<div class="step">
    <b>Definition:</b><br>
    All carbohydrates which reduce <b>Tollens\' reagent</b> (to metallic silver mirror) and <b>Fehling\'s solution</b> (to a red precipitate of $\text{Cu}_2\text{O}$) are termed <b>reducing sugars</b>.<br><br>
    <b>Essential Chemical Requirement:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>The molecule must possess a free (or potentially free via hemiacetal equilibrium) aldehyde ($-\\text{CHO}$) or $\alpha$-hydroxy ketone group.</li>
      <li><b>Examples:</b>
        <ul>
          <li>All monosaccharides (glucose, fructose, galactose, ribose) are reducing sugars.</li>
          <li>Disaccharides like <b>maltose</b> and <b>lactose</b> are reducing sugars because one of the hemiacetal anomeric carbons is free.</li>
          <li><b>Sucrose</b> is a non-reducing sugar because both anomeric carbons (C-1 of glucose and C-2 of fructose) are mutually bonded in the glycosidic link.</li>
        </ul>
      </li>
    </ul>
  </div>`,
  '2 Marks',
  [
    ['Definition: sugars that reduce Tollens\' reagent and Fehling\'s solution', '1 Mark'],
    ['Requirement: free anomeric hemiacetal aldehyde/ketone group + examples (glucose, maltose)', '1 Mark']
  ]
));

// Exercise 10.3
questions.push(createQCard(
  'c12c-ch10-q9', 'Exercise 10.3', 'NCERT Exercise',
  'Write two main functions of carbohydrates in plants.',
  `<div class="step">
    <b>Two Main Functions of Carbohydrates in Plants:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Storage of Energy (Reserve Food Material):</strong> <b>Starch</b> is the major storage polysaccharide in plants. Plants synthesise glucose during photosynthesis and store it as starch in seeds, tubers, and roots, which serves as a reserve energy source for plant growth and germination.</li>
      <li><strong>Structural Framework:</strong> <b>Cellulose</b> is a fibrous polysaccharide that forms the rigid cell walls of plant cells and plant tissues (wood, cotton, bark), providing structural rigidity, mechanical strength, and protection to plant cells.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Energy storage as starch in tubers/seeds', '1 Mark'],
    ['Structural framework as cellulose forming plant cell walls', '1 Mark']
  ]
));

// Exercise 10.4
questions.push(createQCard(
  'c12c-ch10-q10', 'Exercise 10.4', 'NCERT Exercise',
  'Classify the following into monosaccharides and disaccharides: Ribose, 2-deoxyribose, maltose, galactose, fructose and lactose.',
  `<div class="step">
    <b>Classification:</b><br>
    <table style="width:100%; border-collapse:collapse; margin-top:8px;">
      <tr style="background:#f1f5f9; text-align:left;">
        <th style="padding:8px; border:1px solid #cbd5e1;">Class</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Compounds</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Molecular Formula</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700; color:#059669;">Monosaccharides</td>
        <td style="padding:8px; border:1px solid #cbd5e1;"><b>Ribose, 2-Deoxyribose, Galactose, Fructose</b></td>
        <td style="padding:8px; border:1px solid #cbd5e1;">$\text{C}_5\text{H}_{10}\text{O}_5$, $\text{C}_5\text{H}_{10}\text{O}_4$, $\text{C}_6\text{H}_{12}\text{O}_6$, $\text{C}_6\text{H}_{12}\text{O}_6$</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700; color:#2563eb;">Disaccharides</td>
        <td style="padding:8px; border:1px solid #cbd5e1;"><b>Maltose, Lactose</b></td>
        <td style="padding:8px; border:1px solid #cbd5e1;">$\text{C}_{12}\text{H}_{22}\text{O}_{11}$ (yield two monosaccharides on hydrolysis)</td>
      </tr>
    </table>
  </div>`,
  '2 Marks',
  [
    ['Correct grouping of Monosaccharides: Ribose, 2-deoxyribose, Galactose, Fructose', '1 Mark'],
    ['Correct grouping of Disaccharides: Maltose, Lactose', '1 Mark']
  ]
));

// Exercise 10.5
questions.push(createQCard(
  'c12c-ch10-q11', 'Exercise 10.5', 'NCERT Exercise',
  'What do you understand by the term glycosidic linkage?',
  `<div class="step">
    <b>Definition:</b><br>
    A <b>glycosidic linkage</b> is an oxide linkage ($-\\text{C}-\\text{O}-\\text{C}-$) formed between two monosaccharide units through the loss of a water molecule during condensation.<br><br>
    <b>Formation Mechanism:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>It involves the hemiacetal (or hemiketal) hydroxyl group at the anomeric carbon (C-1 of aldose or C-2 of ketose) of one monosaccharide unit condensing with an $-\\text{OH}$ group of another monosaccharide unit.</li>
      <li><b>Example in Sucrose:</b> An oxide link between C-1 of $\alpha$-D-glucose and C-2 of $\beta$-D-fructose ($\alpha, \beta$-1,2-glycosidic bond).</li>
      <li><b>Example in Maltose:</b> An oxide link between C-1 of one $\alpha$-D-glucose unit and C-4 of another $\alpha$-D-glucose unit ($\alpha$-1,4-glycosidic linkage).</li>
    </ul>
  </div>`,
  '1 Mark',
  [
    ['Definition: ether/oxide linkage (-C-O-C-) joining two monosaccharide units via condensation', '1 Mark']
  ]
));

// Exercise 10.6
questions.push(createQCard(
  'c12c-ch10-q12', 'Exercise 10.6', 'NCERT Exercise',
  'What is glycogen? How is it different from starch?',
  `<div class="step">
    <b>What is Glycogen?</b><br>
    Glycogen is a polysaccharide that serves as the primary carbohydrate storage compound in animals and humans (hence also known as <b>animal starch</b>). It is stored predominantly in the liver and muscles. When the body requires glucose, enzymes break down glycogen to glucose.<br><br>
    <b>Differences between Glycogen and Starch:</b>
    <table style="width:100%; border-collapse:collapse; margin-top:8px;">
      <tr style="background:#f1f5f9; text-align:left;">
        <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Glycogen</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Starch</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Occurrence</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Found in animals, fungi, and bacteria.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Found in plants (cereals, roots, tubers).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Components</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Single homogenous branched polymer of $\alpha$-D-glucose.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Consists of two fractions: water-soluble <b>amylose</b> (15–20%) and insoluble <b>amylopectin</b> (80–85%).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Branching Degree</td>
        <td style="padding:8px; border:1px solid #cbd5e1;"><b>Highly branched</b> with branching points ($\alpha$-1,6) every 8–12 glucose units.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Amylose is unbranched ($\alpha$-1,4); amylopectin is moderately branched ($\alpha$-1,6 every 24–30 units).</td>
      </tr>
    </table>
  </div>`,
  '2 Marks',
  [
    ['Definition of glycogen as animal storage polysaccharide of glucose', '1 Mark'],
    ['Comparison with starch (occurrence, amylose/amylopectin composition, and higher branching)', '1 Mark']
  ]
));

// Exercise 10.7
questions.push(createQCard(
  'c12c-ch10-q13', 'Exercise 10.7', 'NCERT Exercise',
  'What are the hydrolysis products of (i) sucrose and (ii) lactose?',
  `<div class="step">
    <b>Hydrolysis Products:</b><br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Sucrose ($\text{C}_{12}\text{H}_{22}\text{O}_{11}$):</strong><br>
      On hydrolysis with dilute acid or invertase enzyme, sucrose yields an equimolar mixture of <b>$\alpha$-D-glucose</b> and <b>$\beta$-D-fructose</b>:
      $$\text{C}_{12}\text{H}_{22}\text{O}_{11} + \text{H}_2\text{O} \\overset{}{\\longrightarrow}^+ / \text{Invertase}} {\text{C}_6\text{H}_{12}\text{O}_6}_{\alpha\text{-D-(+)-Glucose } (+52.5^\circ)} + {\text{C}_6\text{H}_{12}\text{O}_6}_{\beta\text{-D-(-)-Fructose } (-92.4^\circ)}$$
      (The resulting mixture is levorotatory, hence known as <i>invert sugar</i>).</li>
      <li><strong>Lactose ($\text{C}_{12}\text{H}_{22}\text{O}_{11}$):</strong><br>
      On hydrolysis with dilute acid or lactase enzyme, lactose yields an equimolar mixture of <b>$\beta$-D-galactose</b> and <b>$\beta$-D-glucose</b>:
      $$\text{C}_{12}\text{H}_{22}\text{O}_{11} + \text{H}_2\text{O} \\overset{}{\\longrightarrow}^+ / \text{Lactase}} {\text{C}_6\text{H}_{12}\text{O}_6}_{\beta\text{-D-Galactose}} + {\text{C}_6\text{H}_{12}\text{O}_6}_{\beta\text{-D-Glucose}}$$</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['(i) Sucrose gives α-D-glucose + β-D-fructose (equimolar)', '1 Mark'],
    ['(ii) Lactose gives β-D-galactose + β-D-glucose (equimolar)', '1 Mark']
  ]
));

// Exercise 10.8
questions.push(createQCard(
  'c12c-ch10-q14', 'Exercise 10.8', 'NCERT Exercise',
  'What is the basic structural difference between starch and cellulose?',
  `<div class="step">
    <b>Structural Difference between Starch and Cellulose:</b><br>
    Both are linear/branched high polymers of glucose, but they differ fundamentally in the monomer anomer and the stereochemistry of the glycosidic linkage:
    <table style="width:100%; border-collapse:collapse; margin-top:8px;">
      <tr style="background:#f1f5f9; text-align:left;">
        <th style="padding:8px; border:1px solid #cbd5e1;">Property</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Starch</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Cellulose</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Monomer Unit</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Consists of <b>$\alpha$-D-glucose</b> units.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Consists of <b>$\beta$-D-glucose</b> units.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Glycosidic Bond</td>
        <td style="padding:8px; border:1px solid #cbd5e1;"><b>$\alpha$-1,4-glycosidic linkages</b> (linear amylose) and <b>$\alpha$-1,6-linkages</b> (branched amylopectin).</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Exclusively <b>$\beta$-1,4-glycosidic linkages</b> forming straight unbranched polymer chains.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Conformation</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Helical coil secondary structure (amylose traps $\text{I}_2$ giving blue color).</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Rigid, linear, extended ribbons stabilized by extensive inter-chain H-bonds forming microfibrils.</td>
      </tr>
    </table>
  </div>`,
  '2 Marks',
  [
    ['Monomer: Starch has α-D-glucose whereas Cellulose has β-D-glucose', '1 Mark'],
    ['Linkage: Starch has α-1,4/α-1,6 links while Cellulose has β-1,4 links', '1 Mark']
  ]
));

// Exercise 10.9
questions.push(createQCard(
  'c12c-ch10-q15', 'Exercise 10.9', 'NCERT Exercise',
  'What happens when D-glucose is treated with the following reagents?<br>(i) $\\text{HI}$ (prolonged heating)<br>(ii) Bromine water<br>(iii) Concentrated $\\text{HNO}_3$',
  `<div class="step">
    <b>Reactions of D-Glucose:</b><br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Reaction with $\\text{HI}$ (prolonged heating):</strong><br>
      Prolonged heating with hydroiodic acid ($\text{HI}$) and red phosphorus reduces all hydroxyl and aldehyde groups to saturated hydrocarbons, yielding <b>n-hexane</b>. This proves that all six carbons in glucose are linked in a straight, unbranched chain:
      $$\\text{CHO}-(\\text{CHOH})_4-\\text{CH}_2\\text{OH} + 14\\text{HI} \\overset{}{\\longrightarrow} \\mathbf{\\text{CH}_3-(\\text{CH}_2)_4-\\text{CH}_3 \\text{ (n-hexane)}} + 7\\text{I}_2 + 6\\text{H}_2\\text{O}$$</li>
      <li><strong>Reaction with Bromine water (mild oxidising agent):</strong><br>
      Bromine water selectively oxidises the terminal aldehyde group ($-\\text{CHO}$) to a carboxylic acid group ($-\\text{COOH}$) without affecting the secondary alcohol groups, yielding <b>gluconic acid</b>:
      $$\\text{CHO}-(\\text{CHOH})_4-\\text{CH}_2\\text{OH} + [\\text{O}] \\overset{}{\\longrightarrow}_2 / \\text{H}_2\\text{O}} \\mathbf{\\text{COOH}-(\\text{CHOH})_4-\\text{CH}_2\\text{OH} \\text{ (Gluconic acid)}}$$</li>
      <li><strong>Reaction with Conc. $\\text{HNO}_3$ (strong oxidising agent):</strong><br>
      Nitric acid oxidises both the terminal aldehyde group at C-1 and the terminal primary alcohol group at C-6 to carboxylic acid groups, forming a dicarboxylic acid called <b>saccharic acid (glucaric acid)</b>:
      $$\\text{CHO}-(\\text{CHOH})_4-\\text{CH}_2\\text{OH} + 3[\\text{O}] \\overset{}{\\longrightarrow} \\text{HNO}_3} \\mathbf{\\text{COOH}-(\\text{CHOH})_4-\\text{COOH} \\text{ (Saccharic acid)}} + \\text{H}_2\\text{O}$$</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) HI reduction yields n-hexane (proving straight chain)', '1 Mark'],
    ['(ii) Bromine water oxidation yields gluconic acid (proves -CHO)', '1 Mark'],
    ['(iii) Conc. HNO₃ oxidation yields saccharic acid (dicarboxylic acid)', '1 Mark']
  ]
));

// Exercise 10.10
questions.push(createQCard(
  'c12c-ch10-q16', 'Exercise 10.10', 'NCERT Exercise',
  'Enumerate the reactions of D-glucose which cannot be explained by its open chain structure.',
  `<div class="step">
    <b>Reactions Inconsistent with Open Chain Structure:</b><br>
    Although glucose behaves like an open-chain aldehyde in many reactions, the following observations cannot be explained by the simple open-chain pentahydroxy aldehyde formula:
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Does not form 2,4-DNP adduct or Schiff\'s test:</strong> Despite having an aldehyde group, glucose does not give Schiff\'s test with Schiff\'s reagent and does not form an addition product with sodium hydrogen sulphite ($\text{NaHSO}_3$).</li>
      <li><strong>Pentaacetate does not form an oxime:</strong> The pentaacetate derivative of glucose does not react with hydroxylamine ($\text{NH}_2\text{OH}$), indicating the absence of a free $-\text{CHO}$ group.</li>
      <li><strong>Existence of two isomeric crystalline forms ($\alpha$ and $\beta$):</strong> Glucose exists in two distinct stereoisomeric forms:
        <ul>
          <li>$\alpha$-D-glucose (m.p. $419\text{ K}$, specific rotation $+112^\circ$) obtained by crystallisation from ethanol at $303\text{ K}$.</li>
          <li>$\beta$-D-glucose (m.p. $423\text{ K}$, specific rotation $+19^\circ$) obtained by crystallisation from hot pyridine at $371\text{ K}$.</li>
        </ul>
      </li>
      <li><strong>Mutarotation:</strong> When either pure $\alpha$ or pure $\beta$ form is dissolved in water, the specific optical rotation slowly changes over time until reaching an equilibrium value of $+52.7^\circ$.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['Negative Schiff\'s test & no reaction with NaHSO₃', '1 Mark'],
    ['Pentaacetate does not form an oxime with NH₂OH', '1 Mark'],
    ['Existence in two crystalline forms (α & β) and phenomenon of mutarotation', '1 Mark']
  ]
));

// Exercise 10.11
questions.push(createQCard(
  'c12c-ch10-q17', 'Exercise 10.11', 'NCERT Exercise',
  'What are essential and non-essential amino acids? Give two examples of each type.',
  `<div class="step">
    <b>Classification of Amino Acids:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Essential Amino Acids:</strong><br>
      Those amino acids which <b>cannot be synthesised by the human body</b> and must necessarily be obtained through dietary sources are called essential amino acids.<br>
      <i>Examples:</i> <b>Valine</b>, <b>Leucine</b>, Isoleucine, Lysine, Phenylalanine.</li>
      <li><strong>Non-Essential Amino Acids:</strong><br>
      Those amino acids which <b>can be synthesised within the body</b> from metabolic intermediates and carbohydrates and therefore need not be supplied in the diet are called non-essential amino acids.<br>
      <i>Examples:</i> <b>Glycine</b>, <b>Alanine</b>, Aspartic acid, Glutamic acid.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Definition of essential amino acids + 2 examples (Valine, Leucine)', '1 Mark'],
    ['Definition of non-essential amino acids + 2 examples (Glycine, Alanine)', '1 Mark']
  ]
));

// Exercise 10.12
questions.push(createQCard(
  'c12c-ch10-q18', 'Exercise 10.12', 'NCERT Exercise',
  'Define the following as related to proteins: (i) Peptide linkage (ii) Primary structure (iii) Denaturation.',
  `<div class="step">
    <b>Definitions:</b><br>
    <ol type="i" style="margin-left:20px; line-height:1.75;">
      <li><strong>Peptide Linkage:</strong> An amide linkage ($-\\text{CO}-\\text{NH}-$) formed between the carboxyl group ($-\\text{COOH}$) of one $\alpha$-amino acid and the amino group ($-\\text{NH}_2$) of an adjacent $\alpha$-amino acid via the elimination of a molecule of water:
      $$\\text{H}_2\\text{N}-\\text{CH}(R_1)-\\text{COOH} + \\text{H}_2\\text{N}-\\text{CH}(R_2)-\\text{COOH} \\overset{}{\\longrightarrow}_2\\text{O}} \\text{H}_2\\text{N}-\\text{CH}(R_1)-\\mathbf{CO-NH}-\\text{CH}(R_2)-\\text{COOH}$$</li>
      <li><strong>Primary Structure:</strong> The primary structure of a protein refers to the <b>specific linear sequence of $\alpha$-amino acids</b> linked together by peptide bonds in one or more polypeptide chains. Any change in this specific sequence generates a different protein with altered biological activity (e.g., in sickle cell anaemia where glutamic acid is replaced by valine).</li>
      <li><strong>Denaturation:</strong> The process by which a native protein loses its unique three-dimensional conformation (secondary, tertiary, and quaternary structures) and biological activity due to physical changes (heating, pressure) or chemical changes ($\text{pH}$ alteration), while the primary structure remains completely intact.</li>
    </ol>
  </div>`,
  '3 Marks',
  [
    ['(i) Peptide linkage: amide bond (-CO-NH-) between amino acids with water loss', '1 Mark'],
    ['(ii) Primary structure: linear sequence of amino acids in polypeptide chain', '1 Mark'],
    ['(iii) Denaturation: disruption of 2° and 3° structures losing biological activity', '1 Mark']
  ]
));

// Exercise 10.13
questions.push(createQCard(
  'c12c-ch10-q19', 'Exercise 10.13', 'NCERT Exercise',
  'What are the common types of secondary structure of proteins?',
  `<div class="step">
    <b>Secondary Structure of Proteins:</b><br>
    The secondary structure of proteins refers to the shape or conformation in which a long polypeptide chain can exist due to regular folding stabilized by <b>hydrogen bonds</b> between the $>\text{C}=\text{O}$ and $-\text{NH}-$ groups of peptide bonds.<br><br>
    The two main types are:
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>$\alpha$-Helix Structure:</strong> A polypeptide chain twists into a right-handed screw (helix) such that all $-\text{NH}$ groups form intramolecular hydrogen bonds with the $>\text{C}=\text{O}$ groups of adjacent turns situated 4 amino acid residues ahead. (e.g., keratin in hair/wool, myosin in muscle).</li>
      <li><strong>$\beta$-Pleated Sheet Structure:</strong> Polypeptide chains are stretched out side by side to nearly maximum extension and laid parallel or antiparallel to one another, held together by intermolecular hydrogen bonds, resembling pleated drapery. (e.g., fibroin in silk).</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Identification of the two types: α-helix and β-pleated sheet', '1 Mark'],
    ['Role of hydrogen bonds between >C=O and -NH- stabilizing these conformations', '1 Mark']
  ]
));

// Exercise 10.14
questions.push(createQCard(
  'c12c-ch10-q20', 'Exercise 10.14', 'NCERT Exercise',
  'What type of bonding helps in stabilising the $\\alpha$-helix structure of proteins?',
  `<div class="step">
    <b>Stabilising Bonding in $\alpha$-Helix:</b><br>
    The $\alpha$-helix structure of proteins is stabilised primarily by <b>intramolecular hydrogen bonding</b>.<br><br>
    Specifically:
    <ul style="margin-left:20px; line-height:1.75;">
      <li>The hydrogen atom of the $-\text{NH}-$ group of each amino acid residue forms a hydrogen bond with the carbonyl oxygen atom of the $>\text{C}=\text{O}$ group of the fourth amino acid residue situated ahead along the helical turn:
      $$>\text{C}=\text{O} \\cdots \\text{H}-\\text{N}<$$</li>
      <li>These repeated, parallel intramolecular hydrogen bonds lock the right-handed coil into a remarkably rigid, stable cylindrical rod conformation.</li>
    </ul>
  </div>`,
  '1 Mark',
  [
    ['Intramolecular hydrogen bonding between >C=O of one residue and -NH- of the 4th residue', '1 Mark']
  ]
));

// Exercise 10.15
questions.push(createQCard(
  'c12c-ch10-q21', 'Exercise 10.15', 'NCERT Exercise',
  'Differentiate between globular and fibrous proteins.',
  `<div class="step">
    <b>Difference between Fibrous and Globular Proteins:</b><br>
    <table style="width:100%; border-collapse:collapse; margin-top:8px;">
      <tr style="background:#f1f5f9; text-align:left;">
        <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Fibrous Proteins</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Globular Proteins</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Molecular Shape</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Linear, fiber-like or rod-shaped polypeptide chains running parallel.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Polypeptide chains fold upon themselves into compact, spheroidal (spherical) balls.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Solubility in Water</td>
        <td style="padding:8px; border:1px solid #cbd5e1;"><b>Insoluble</b> in water (hydrophobic residues exposed on surface).</td>
        <td style="padding:8px; border:1px solid #cbd5e1;"><b>Soluble</b> in water (polar hydrophilic residues oriented outward).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Intermolecular Forces</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Strong intermolecular hydrogen bonds and disulphide bridges holding adjacent strands.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Internal hydrogen bonds, ionic interactions, and van der Waals hydrophobic attractions.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Examples</td>
        <td style="padding:8px; border:1px solid #cbd5e1;"><b>Keratin</b> (hair, nails, wool), <b>Myosin</b> (muscles), Collagen.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;"><b>Insulin</b>, <b>Albumin</b> (egg white), Haemoglobin, Enzymes.</td>
      </tr>
    </table>
  </div>`,
  '2 Marks',
  [
    ['Comparison of shape, water solubility, and forces (2 key points)', '1.5 Marks'],
    ['Representative examples (Keratin vs Insulin/Albumin)', '0.5 Mark']
  ]
));

// Exercise 10.16
questions.push(createQCard(
  'c12c-ch10-q22', 'Exercise 10.16', 'NCERT Exercise',
  'How do you explain the amphoteric behaviour of amino acids?',
  `<div class="step">
    <b>Amphoteric Nature of Amino Acids via Zwitterion:</b><br>
    Amino acids contain both a basic amino group ($-\\text{NH}_2$) and an acidic carboxyl group ($-\\text{COOH}$). In aqueous solution, the carboxyl group loses a proton while the amino group accepts a proton, creating a dipolar internal salt known as a <b>Zwitterion</b>:
    $$\\text{H}_2\\text{N}-\\text{CH}(R)-\\text{COOH} \\rightleftharpoons \\mathbf{H_3N^+-\\text{CH}(R)-\\text{COO}^-}$$
    Because of this dual ionic character, the Zwitterion can react with both acids and bases:
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>In Acidic Medium ($\text{Low pH}$):</strong> The basic carboxylate group ($-\\text{COO}^-$) acts as a proton acceptor (base) and takes up $\text{H}^+$ to form a <b>cation</b>:
      $$\\text{H}_3\\text{N}^+-\\text{CH}(R)-\\text{COO}^- + \\text{H}^+ \\rightleftharpoons \\mathbf{H_3N^+-\\text{CH}(R)-\\text{COOH} \\text{ (Cation)}}$$</li>
      <li><strong>In Basic Medium ($\text{High pH}$):</strong> The acidic ammonium group ($-\\text{NH}_3^+$) acts as a proton donor (acid) and releases $\text{H}^+$ to hydroxide ion ($^-\\text{OH}$) to form an <b>anion</b>:
      $$\\text{H}_3\\text{N}^+-\\text{CH}(R)-\\text{COO}^- + ^-\\text{OH} \\rightleftharpoons \\mathbf{H_2N-\\text{CH}(R)-\\text{COO}^- \\text{ (Anion)}} + \\text{H}_2\\text{O}$$</li>
    </ol>
    Since amino acids react with both acids and bases, they exhibit <b>amphoteric behaviour</b>.
  </div>`,
  '2 Marks',
  [
    ['Formation of dipolar Zwitterion (H₃N⁺-CH(R)-COO⁻)', '1 Mark'],
    ['Equations showing reaction with H⁺ (cation) and OH⁻ (anion)', '1 Mark']
  ]
));

// Exercise 10.17
questions.push(createQCard(
  'c12c-ch10-q23', 'Exercise 10.17', 'NCERT Exercise',
  'What are enzymes?',
  `<div class="step">
    <b>Definition:</b><br>
    Enzymes are <b>biological catalysts</b> produced by living cells that catalyze complex biochemical reactions with extraordinary efficiency and absolute stereochemical specificity.<br><br>
    <b>Chemical Nature & Characteristics:</b>
    <ul style="margin-left:20px; line-height:1.75;">
      <li>Chemically, almost all enzymes are <b>globular proteins</b>.</li>
      <li>They speed up biochemical reactions by a factor of $10^6$ to $10^{12}$ by lowering the activation energy barrier ($E_a$).</li>
      <li>They operate under mild physiological conditions ($\text{pH} \\approx 7.4$ and temperature $\\approx 310\text{ K}$ or $37^\circ\text{C}$).</li>
      <li>They are extremely specific: each enzyme catalyzes only one specific reaction or works on one specific substrate (e.g., <b>maltase</b> hydrolyses only maltose into glucose, not sucrose).</li>
    </ul>
  </div>`,
  '1 Mark',
  [
    ['Definition: biological catalysts (globular proteins) with high specificity and efficiency', '1 Mark']
  ]
));

// Exercise 10.18
questions.push(createQCard(
  'c12c-ch10-q24', 'Exercise 10.18', 'NCERT Exercise',
  'What is the effect of denaturation on the structure of proteins?',
  `<div class="step">
    <b>Structural Effects of Denaturation:</b><br>
    When a native protein is subjected to physical changes (such as change in temperature) or chemical changes (such as change in $\text{pH}$):
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Destruction of Higher Orders of Structure:</strong> The weak hydrogen bonds, ionic bonds, and hydrophobic interactions stabilizing the <b>secondary ($2^\\circ$)</b>, <b>tertiary ($3^\\circ$)</b>, and <b>quaternary ($4^\\circ$)</b> structures are ruptured. Globules unfold and helical structures uncoil.</li>
      <li><strong>Preservation of Primary Structure:</strong> The strong covalent peptide bonds ($-\\text{CO}-\\text{NH}-$) linking adjacent amino acids are NOT broken under denaturation conditions. Therefore, the <b>primary structure remains completely intact</b>.</li>
      <li><strong>Loss of Biological Activity:</strong> The destruction of the unique 3D active site conformation leads to the complete loss of biological function (e.g., coagulation of egg white on boiling; curdling of milk due to lactic acid bacteria).</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Rupture of 2° and 3° structures (unfolding/uncoiling) causing loss of biological activity', '1 Mark'],
    ['1° structure (covalent peptide sequence) remains completely undamaged', '1 Mark']
  ]
));

// Exercise 10.19
questions.push(createQCard(
  'c12c-ch10-q25', 'Exercise 10.19', 'NCERT Exercise',
  'How are vitamins classified? Name the vitamin responsible for the coagulation of blood.',
  `<div class="step">
    <b>Classification of Vitamins:</b><br>
    Vitamins are classified into two broad groups based on their solubility:
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Fat-Soluble Vitamins:</strong> Vitamins that are soluble in fats and oils (lipids) but insoluble in water. They are stored in adipose (fat) tissues and the liver.<br>
      <i>Members:</i> <b>Vitamin A, Vitamin D, Vitamin E, and Vitamin K</b>.</li>
      <li><strong>Water-Soluble Vitamins:</strong> Vitamins that are soluble in water. Because they are water-soluble, excess quantities are not stored in the body and are regularly excreted in urine, requiring constant dietary replenishment.<br>
      <i>Members:</i> <b>B-group vitamins</b> (B₁, B₂, B₆, B₁₂, etc.) and <b>Vitamin C</b> (ascorbic acid). <i>(Note: Vitamin B₁₂ is an exception that is stored in the liver for several months).</i></li>
    </ol>
    <b>Vitamin for Blood Coagulation:</b><br>
    <b>Vitamin K</b> (phylloquinone) is responsible for the coagulation/clotting of blood. Deficiency of Vitamin K increases blood clotting time and causes haemorrhage.
  </div>`,
  '2 Marks',
  [
    ['Classification: Fat-soluble (A, D, E, K) and Water-soluble (B-complex, C)', '1 Mark'],
    ['Identification of Vitamin K as responsible for blood coagulation', '1 Mark']
  ]
));

// Exercise 10.20
questions.push(createQCard(
  'c12c-ch10-q26', 'Exercise 10.20', 'NCERT Exercise',
  'Why are vitamin A and vitamin C essential to us? Give their important sources.',
  `<div class="step">
    <b>Importance and Sources of Vitamin A and Vitamin C:</b><br>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Vitamin A (Retinol):</strong><br>
        <ul>
          <li><i>Why Essential:</i> It is necessary for normal vision (synthesis of rhodopsin pigment in retina), maintenance of healthy epithelial tissues, and immune function. Its deficiency causes <b>night blindness (nyctalopia)</b> and xerophthalmia (hardening of the cornea).</li>
          <li><i>Important Sources:</i> Carrots, cod liver oil, milk, butter, egg yolk, papaya, and green leafy vegetables (spinach).</li>
        </ul>
      </li>
      <li><strong>Vitamin C (Ascorbic Acid):</strong><br>
        <ul>
          <li><i>Why Essential:</i> It is a powerful water-soluble antioxidant essential for collagen synthesis (connective tissue, bones, cartilage), wound healing, and resistance against infections. Its deficiency causes <b>scurvy</b> (bleeding gums and tooth loss).</li>
          <li><i>Important Sources:</i> Citrus fruits (oranges, lemons), <b>amla</b> (richest Indian gooseberry source), tomatoes, green chillies, and sprouted pulses.</li>
        </ul>
      </li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Vitamin A: Essential for vision (prevents night blindness); sources: fish oil, carrots', '1 Mark'],
    ['Vitamin C: Essential for collagen/immunity (prevents scurvy); sources: amla, citrus fruits', '1 Mark']
  ]
));

// Exercise 10.21
questions.push(createQCard(
  'c12c-ch10-q27', 'Exercise 10.21', 'NCERT Exercise',
  'What are nucleic acids? Mention their two important functions.',
  `<div class="step">
    <b>What are Nucleic Acids?</b><br>
    Nucleic acids are biopolymers (polynucleotides) found in the nuclei of all living cells, composed of repeating nucleotide monomers linked together by <b>$3\', 5\'-phosphodiester bridges</b>. They are of two types: Deoxyribonucleic acid (DNA) and Ribonucleic acid (RNA).<br><br>
    <b>Two Important Functions:</b>
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Heredity &amp; Transmission of Genetic Information:</strong> DNA is the chemical basis of heredity and serves as the reserve repository of genetic instructions. It replicates during cell division, transmitting identical genetic blueprints from parents to offspring.</li>
      <li><strong>Protein Biosynthesis:</strong> Nucleic acids direct and regulate protein synthesis in the cell. The genetic code stored in DNA is transcribed into messenger RNA ($\text{mRNA}$), which is subsequently translated into specific sequences of amino acids forming functional enzymes and structural proteins.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Definition of nucleic acids as polynucleotides (DNA & RNA)', '1 Mark'],
    ['Two functions: transmission of hereditary traits & protein synthesis regulation', '1 Mark']
  ]
));

// Exercise 10.22
questions.push(createQCard(
  'c12c-ch10-q28', 'Exercise 10.22', 'NCERT Exercise',
  'What is the difference between a nucleoside and a nucleotide?',
  `<div class="step">
    <b>Difference between Nucleoside and Nucleotide:</b><br>
    <table style="width:100%; border-collapse:collapse; margin-top:8px;">
      <tr style="background:#f1f5f9; text-align:left;">
        <th style="padding:8px; border:1px solid #cbd5e1;">Feature</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Nucleoside</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">Nucleotide</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Composition</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Consists of a <b>nitrogenous base + pentose sugar</b>.<br>$$\\text{Base} + \\text{Sugar} = \\mathbf{\\text{Nucleoside}}$$</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Consists of a <b>nitrogenous base + pentose sugar + phosphate group</b>.<br>$$\\text{Nucleoside} + \\text{Phosphate} = \\mathbf{\\text{Nucleotide}}$$</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Chemical Nature</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Slightly basic or neutral compound.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Acidic compound due to phosphoric acid moiety.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Linkage</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Base is attached to $1\'$-carbon of pentose sugar by an $\\text{N}$-glycosidic bond.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Phosphate group is esterified to the $5\'$-hydroxyl of the pentose sugar.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Examples</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Adenosine, Guanosine, Cytidine, Thymidine, Uridine.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Adenosine monophosphate (AMP), dATP, ATP.</td>
      </tr>
    </table>
  </div>`,
  '2 Marks',
  [
    ['Nucleoside = Nitrogenous Base + Sugar (N-glycosidic bond)', '1 Mark'],
    ['Nucleotide = Base + Sugar + Phosphoric acid (ester at 5\'-OH)', '1 Mark']
  ]
));

// Exercise 10.23
questions.push(createQCard(
  'c12c-ch10-q29', 'Exercise 10.23', 'NCERT Exercise',
  'The two strands in DNA are not identical but are complementary. Explain.',
  `<div class="step">
    <b>Complementary Nature of DNA Strands (Watson-Crick Model):</b><br>
    The two polynucleotide chains in the DNA double helix are anti-parallel and run in opposite directions ($5\' \\to 3\'$ and $3\' \\to 5\'$). They are not identical because their base sequences are different; instead, they are <b>complementary</b> due to specific hydrogen bonding between purine and pyrimidine base pairs:
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Specific Base Pairing Rule:</strong>
        <ul>
          <li><b>Adenine (A)</b> (a purine) always pairs exclusively with <b>Thymine (T)</b> (a pyrimidine) through <b>two hydrogen bonds</b> ($A = T$).</li>
          <li><b>Guanine (G)</b> (a purine) always pairs exclusively with <b>Cytosine (C)</b> (a pyrimidine) through <b>three hydrogen bonds</b> ($G \\equiv C$).</li>
        </ul>
      </li>
      <li><strong>Automatic Sequence Determination:</strong> Due to this strict base-pairing geometry, wherever adenine occurs on one strand, thymine is mandatory on the opposite strand; wherever guanine occurs, cytosine is mandatory on the opposite strand.</li>
    </ol>
    Therefore, the sequence of bases on one strand automatically dictates the unique, exact complementary sequence on the other strand.
  </div>`,
  '2 Marks',
  [
    ['Specific hydrogen bonding: A pairs with T (2 H-bonds) and G pairs with C (3 H-bonds)', '1 Mark'],
    ['Base sequence on one strand automatically dictates complementary base sequence on other', '1 Mark']
  ]
));

// Exercise 10.24
questions.push(createQCard(
  'c12c-ch10-q30', 'Exercise 10.24', 'NCERT Exercise',
  'Write the important structural and functional differences between DNA and RNA.',
  `<div class="step">
    <b>Differences between DNA and RNA:</b><br>
    <table style="width:100%; border-collapse:collapse; margin-top:8px;">
      <tr style="background:#f1f5f9; text-align:left;">
        <th style="padding:8px; border:1px solid #cbd5e1;">Parameter</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">DNA (Deoxyribonucleic Acid)</th>
        <th style="padding:8px; border:1px solid #cbd5e1;">RNA (Ribonucleic Acid)</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Pentose Sugar</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Contains <b>$\beta$-D-2-deoxyribose</b> (lacks oxygen at C-$2\'$).</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Contains <b>$\beta$-D-ribose</b> (possesses $-\text{OH}$ at C-$2\'$).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Nitrogenous Bases</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Adenine (A), Guanine (G), Cytosine (C), and <b>Thymine (T)</b>.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Adenine (A), Guanine (G), Cytosine (C), and <b>Uracil (U)</b> (in place of thymine).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Strandedness</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Typically <b>double-stranded</b> helical structure.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Typically <b>single-stranded</b> molecule (may fold upon itself).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #cbd5e1; font-weight:700;">Biological Function</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Acts as the master repository of hereditary genetic information and replicates during reproduction.</td>
        <td style="padding:8px; border:1px solid #cbd5e1;">Translates genetic code into amino acid sequence for protein synthesis.</td>
      </tr>
    </table>
  </div>`,
  '2 Marks',
  [
    ['Structural: Deoxyribose vs Ribose sugar, Thymine in DNA vs Uracil in RNA, Double vs Single stranded', '1 Mark'],
    ['Functional: Heredity transmission in DNA vs Protein synthesis execution in RNA', '1 Mark']
  ]
));

// Exercise 10.25
questions.push(createQCard(
  'c12c-ch10-q31', 'Exercise 10.25', 'NCERT Exercise',
  'What are the different types of RNA which are found in the cell?',
  `<div class="step">
    <b>Three Major Types of Cellular RNA:</b><br>
    The cell contains three major types of ribonucleic acids ($\text{RNA}$), each playing a distinct coordinated role in protein biosynthesis:
    <ol style="margin-left:20px; line-height:1.75;">
      <li><strong>Messenger RNA ($\text{mRNA}$):</strong><br>
      Synthesised in the nucleus as a complementary transcript of a specific DNA gene. It carries the transcribed genetic code (in triplets of bases called codons) from the chromosomal DNA to the ribosomes in the cytoplasm for translation.</li>
      <li><strong>Transfer RNA ($\text{tRNA}$) (also called Soluble or Adaptor RNA):</strong><br>
      Small, cloverleaf-shaped single-stranded RNA molecules that read the codons on $\text{mRNA}$ via their specific anticodon loop and transfer the appropriate activated amino acids to the growing polypeptide chain at the ribosome.</li>
      <li><strong>Ribosomal RNA ($\text{rRNA}$):</strong><br>
      The most abundant class of RNA (making up ~80% of total cellular RNA). Along with ribosomal proteins, it forms the structural and catalytic framework of ribosomes where peptide bond formation is enzymatically catalyzed.</li>
    </ol>
  </div>`,
  '2 Marks',
  [
    ['Identification of the 3 major RNA types: mRNA, tRNA, and rRNA', '1 Mark'],
    ['Specific functions of mRNA (code carrier), tRNA (amino acid adaptor), and rRNA (ribosome structure)', '1 Mark']
  ]
));

console.log(`\nCompiling Chapter 10: Biomolecules (Total: ${questions.length} Qs)...`);
saveChapter(chNum, chTitle, svgDiagram, exTitle, questions, '');
console.log(`Chapter 10: Biomolecules successfully saved!`);
