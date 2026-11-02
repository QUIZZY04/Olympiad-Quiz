// scripts/builders/gen-c12b-ch5.js
// Chapter 5: Molecular Basis of Inheritance (14 Questions)
const { createQCard, saveChapter } = require('./c12b-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#059669; font-size:1.05rem;">🧬 Molecular Architecture: Central Dogma, Lac Operon & DNA Fingerprinting</h4>
  <svg viewBox="0 0 880 300" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #d1fae5;">
    <!-- Central Dogma -->
    <rect x="20" y="20" width="270" height="260" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="155" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">Central Dogma (Crick, 1958)</text>
    <line x1="35" y1="58" x2="275" y2="58" stroke="#10b981" stroke-width="1.5"/>
    
    <rect x="40" y="80" width="70" height="35" rx="6" fill="#10b981"/>
    <text x="75" y="102" font-family="sans-serif" font-size="12" font-weight="bold" fill="white" text-anchor="middle">DNA</text>

    <!-- Arrow Replication -->
    <path d="M 60 80 C 40 50, 90 50, 85 75" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="75" y="55" font-family="sans-serif" font-size="10" fill="#047857" text-anchor="middle">Replication</text>

    <line x1="110" y1="97" x2="155" y2="97" stroke="#059669" stroke-width="2"/>
    <polygon points="155,93 163,97 155,101" fill="#059669"/>
    <text x="135" y="90" font-family="sans-serif" font-size="10" fill="#065f46" text-anchor="middle">Transcription</text>

    <rect x="165" y="80" width="70" height="35" rx="6" fill="#3b82f6"/>
    <text x="200" y="102" font-family="sans-serif" font-size="12" font-weight="bold" fill="white" text-anchor="middle">mRNA</text>

    <line x1="200" y1="115" x2="200" y2="155" stroke="#3b82f6" stroke-width="2"/>
    <polygon points="196,155 200,163 204,155" fill="#3b82f6"/>
    <text x="238" y="140" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Translation</text>

    <rect x="155" y="165" width="90" height="35" rx="6" fill="#f59e0b"/>
    <text x="200" y="187" font-family="sans-serif" font-size="12" font-weight="bold" fill="white" text-anchor="middle">PROTEIN</text>

    <text x="40" y="230" font-family="sans-serif" font-size="11" fill="#334155">&bull; Reverse Transcription (Teminism):</text>
    <text x="40" y="248" font-family="sans-serif" font-size="11" fill="#334155">  RNA &rarr; cDNA (in Retroviruses)</text>
    <text x="40" y="266" font-family="sans-serif" font-size="11" font-weight="bold" fill="#059669">&bull; Chargaff Rule: [A]=[T], [G]=[C]</text>

    <!-- Lac Operon Card -->
    <rect x="310" y="20" width="270" height="260" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="445" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Lac Operon (Jacob & Monod)</text>
    <line x1="325" y1="58" x2="565" y2="58" stroke="#3b82f6" stroke-width="1.5"/>

    <!-- Gene segments -->
    <g transform="translate(325, 75)">
      <rect x="0" y="0" width="35" height="30" fill="#cbd5e1" stroke="#64748b"/>
      <text x="17" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">p</text>
      <rect x="35" y="0" width="35" height="30" fill="#fecaca" stroke="#dc2626"/>
      <text x="52" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">i</text>
      <rect x="70" y="0" width="35" height="30" fill="#cbd5e1" stroke="#64748b"/>
      <text x="87" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">p</text>
      <rect x="105" y="0" width="35" height="30" fill="#fed7aa" stroke="#ea580c"/>
      <text x="122" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="middle">o</text>
      <rect x="140" y="0" width="33" height="30" fill="#bbf7d0" stroke="#16a34a"/>
      <text x="156" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">z</text>
      <rect x="173" y="0" width="33" height="30" fill="#bfdbfe" stroke="#2563eb"/>
      <text x="189" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">y</text>
      <rect x="206" y="0" width="34" height="30" fill="#e9d5ff" stroke="#9333ea"/>
      <text x="223" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">a</text>
    </g>

    <text x="325" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af">Structural Genes & Products:</text>
    <text x="325" y="148" font-family="sans-serif" font-size="11" fill="#334155">&bull; <strong>z</strong> &rarr; &beta;-galactosidase (lactose &rarr; glu+gal)</text>
    <text x="325" y="165" font-family="sans-serif" font-size="11" fill="#334155">&bull; <strong>y</strong> &rarr; &beta;-galactoside permease (entry)</text>
    <text x="325" y="182" font-family="sans-serif" font-size="11" fill="#334155">&bull; <strong>a</strong> &rarr; &beta;-galactoside transacetylase</text>
    <text x="325" y="205" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">Regulation State:</text>
    <text x="325" y="223" font-family="sans-serif" font-size="11" fill="#334155">&bull; (-) Lactose: Repressor binds Operator (OFF)</text>
    <text x="325" y="240" font-family="sans-serif" font-size="11" fill="#334155">&bull; (+) Lactose/Allolactose: Inducer inactivates</text>
    <text x="325" y="256" font-family="sans-serif" font-size="11" fill="#334155">  repressor &rarr; Operon turns ON</text>

    <!-- Genetic Code & HGP Card -->
    <rect x="600" y="20" width="260" height="260" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
    <text x="730" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">Key Molecular Landmarks</text>
    <line x1="615" y1="58" x2="845" y2="58" stroke="#ef4444" stroke-width="1.5"/>
    <text x="615" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">Genetic Code Features:</text>
    <text x="615" y="98" font-family="sans-serif" font-size="11" fill="#334155">&bull; Triplet (61 codons amino acids, 3 STOP)</text>
    <text x="615" y="114" font-family="sans-serif" font-size="11" fill="#334155">&bull; Degenerate, Unambiguous & Universal</text>
    <text x="615" y="130" font-family="sans-serif" font-size="11" fill="#334155">&bull; Initiator: AUG (Methionine)</text>
    <text x="615" y="152" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">DNA Fingerprinting (Alec Jeffreys):</text>
    <text x="615" y="170" font-family="sans-serif" font-size="11" fill="#334155">&bull; VNTRs (Variable Number Tandem Repeats)</text>
    <text x="615" y="186" font-family="sans-serif" font-size="11" fill="#334155">&bull; Minisatellites (0.1 to 20 kb)</text>
    <text x="615" y="202" font-family="sans-serif" font-size="11" fill="#334155">&bull; Southern Blotting + Radio-labelled probe</text>
    <text x="615" y="225" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">Human Genome Project (HGP):</text>
    <text x="615" y="242" font-family="sans-serif" font-size="11" fill="#334155">&bull; 3.1647 billion bp, ~30,000 genes</text>
    <text x="615" y="258" font-family="sans-serif" font-size="11" fill="#334155">&bull; Chromosome 1 has highest (2,968 genes)</text>
  </svg>
</div>`;

const questions = [];

// Q1
questions.push(createQCard(
  'c12b-ch5-q1',
  'Q1',
  'Exercises (NCERT Verbatim)',
  'Group the following as nitrogenous bases and nucleosides:\nAdenine, Cytidine, Thymine, Guanosine, Uracil and Cytosine.',
  `<p>In nucleic acids, a <strong>nitrogenous base</strong> is a heterocyclic nitrogen-containing aromatic compound (purine or pyrimidine). A <strong>nucleoside</strong> is formed when a nitrogenous base is covalently linked to a pentose sugar (ribose or 2'-deoxyribose) through an <em>N-glycosidic bond</em>.</p>
  
  <div style="display:flex; flex-wrap:wrap; gap:16px; margin-top:12px;">
    <div style="flex:1; min-width:240px; background:#ecfdf5; padding:14px; border-radius:8px; border:1px solid #10b981;">
      <h5 style="color:#065f46; margin:0 0 8px 0; font-size:1rem;">1. Nitrogenous Bases</h5>
      <p style="font-size:0.85rem; color:#475569; margin:0 0 8px 0;">Heterocyclic aromatic bases without sugar linkage:</p>
      <ul style="margin:0; padding-left:20px; font-weight:700; color:#065f46;">
        <li>Adenine (Purine)</li>
        <li>Thymine (Pyrimidine - in DNA)</li>
        <li>Uracil (Pyrimidine - in RNA)</li>
        <li>Cytosine (Pyrimidine)</li>
      </ul>
    </div>

    <div style="flex:1; min-width:240px; background:#eff6ff; padding:14px; border-radius:8px; border:1px solid #3b82f6;">
      <h5 style="color:#1e40af; margin:0 0 8px 0; font-size:1rem;">2. Nucleosides</h5>
      <p style="font-size:0.85rem; color:#475569; margin:0 0 8px 0;">Base + Pentose Sugar (via N-glycosidic linkage):</p>
      <ul style="margin:0; padding-left:20px; font-weight:700; color:#1e40af;">
        <li>Cytidine (Cytosine + Ribose / Deoxyribose)</li>
        <li>Guanosine (Guanine + Ribose / Deoxyribose)</li>
      </ul>
    </div>
  </div>`,
  '2 Marks',
  [
    ['Correct grouping of nitrogenous bases: Adenine, Thymine, Uracil, Cytosine', '1 Mark'],
    ['Correct grouping of nucleosides: Cytidine, Guanosine', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c12b-ch5-q2',
  'Q2',
  'Exercises (NCERT Verbatim)',
  'If a double stranded DNA has 20 per cent of cytosine, calculate the per cent of adenine in the DNA.',
  `<p><strong>Application of Chargaff's Equimolar Rules:</strong></p>
  <p>Erwin Chargaff demonstrated that in any double-stranded DNA (dsDNA):</p>
  <ol>
    <li>The total purine content is always equal to total pyrimidine content: <strong>[A + G] = [T + C]</strong>.</li>
    <li>Adenine pairs exclusively with Thymine by two hydrogen bonds: <strong>% A = % T</strong>.</li>
    <li>Guanine pairs exclusively with Cytosine by three hydrogen bonds: <strong>% G = % C</strong>.</li>
  </ol>

  <p><strong>Step-by-Step Calculation:</strong></p>
  <ul>
    <li>Given: Cytosine (C) = <strong>20%</strong></li>
    <li>Since % G = % C, therefore: Guanine (G) = <strong>20%</strong></li>
    <li>Total percentage of (G + C) = 20% + 20% = <strong>40%</strong></li>
    <li>Total percentage of (A + T) = 100% - 40% = <strong>60%</strong></li>
    <li>Since % A = % T, therefore:
      <div style="background:#f8fafc; padding:10px 14px; border-left:4px solid #059669; font-weight:700; margin:8px 0; font-size:1.05rem;">
        % Adenine (A) = 60% / 2 = 30%
      </div>
    </li>
  </ul>
  <p><strong>Conclusion:</strong> The percentage of Adenine in this double-stranded DNA is <strong>30%</strong>.</p>`,
  '2 Marks',
  [
    ["Statement of Chargaff's rule: %G = %C and %A = %T; %A + %T + %G + %C = 100%", '1 Mark'],
    ['Calculation showing %G = 20%, %(A+T) = 60%, arriving at %Adenine = 30%', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c12b-ch5-q3',
  'Q3',
  'Exercises (NCERT Verbatim)',
  `If the sequence of one strand of DNA is written as follows:
  <br><strong>5' -ATGCATGCATGCATGCATGCATGCATGC-3'</strong>
  <br>Write down the sequence of complementary strand in 5' &rarr; 3' direction.`,
  `<p><strong>Rule of Complementary Base Pairing & Antiparallel Polarity:</strong></p>
  <ol>
    <li>DNA strands are <strong>antiparallel</strong> (if one strand is 5' &rarr; 3', the complementary strand is 3' &rarr; 5').</li>
    <li>Base-pairing rules state that Adenine (A) pairs with Thymine (T) and Guanine (G) pairs with Cytosine (C).</li>
  </ol>

  <p><strong>Step 1: Write the complementary strand in the 3' &rarr; 5' direction:</strong></p>
  <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; font-family:monospace; margin:8px 0;">
    Given strand:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5' -ATGCATGCATGCATGCATGCATGCATGC- 3'<br>
    Complementary (3' &rarr; 5'): 3' -TACGTACGTACGTACGTACGTACGTACG- 5'
  </div>

  <p><strong>Step 2: Invert the complementary strand into the requested 5' &rarr; 3' direction:</strong></p>
  <div style="background:#ecfdf5; padding:12px 14px; border-left:4px solid #059669; font-family:monospace; font-weight:700; margin:8px 0; font-size:1rem; color:#065f46;">
    5' -GCATGCATGCATGCATGCATGCATGCAT- 3'
  </div>`,
  '2 Marks',
  [
    ['Applying Watson-Crick base pairing rules (A-T and G-C) to find 3\'->5\' complement', '1 Mark'],
    ['Correctly writing the inverted sequence in the requested 5\' -> 3\' polarity', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c12b-ch5-q4',
  'Q4',
  'Exercises (NCERT Verbatim)',
  `If the sequence of the coding strand in a transcription unit is written as follows:
  <br><strong>5' -ATGCATGCATGCATGCATGCATGCATGC-3'</strong>
  <br>Write down the sequence of mRNA.`,
  `<p><strong>Transcription Polarity and mRNA Rule:</strong></p>
  <ul>
    <li>In a transcription unit, the <strong>template strand</strong> (3' &rarr; 5') is transcribed into mRNA.</li>
    <li>The <strong>coding strand</strong> (5' &rarr; 3') is <em>not</em> transcribed, but by scientific convention, the sequence of mRNA is <strong>identical to the coding strand</strong>, with only one chemical difference: <strong>Thymine (T) in DNA is replaced by Uracil (U) in RNA</strong>.</li>
    <li>The polarity of both the coding strand and the resulting mRNA is 5' &rarr; 3'.</li>
  </ul>

  <p><strong>Deduction:</strong></p>
  <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; font-family:monospace; margin:8px 0;">
    Coding strand (DNA):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5' -ATGCATGCATGCATGCATGCATGCATGC- 3'<br>
    Template strand (DNA):&nbsp;&nbsp;&nbsp;3' -TACGTACGTACGTACGTACGTACGTACG- 5'<br>
    mRNA transcribed:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5' -AUGCAUGCAUGCAUGCAUGCAUGCAUGC- 3'
  </div>

  <div style="background:#ecfdf5; padding:12px 14px; border-left:4px solid #059669; font-family:monospace; font-weight:700; margin:8px 0; font-size:1rem; color:#065f46;">
    Sequence of mRNA: 5' -AUGCAUGCAUGCAUGCAUGCAUGCAUGC- 3'
  </div>`,
  '2 Marks',
  [
    ['Explanation that mRNA sequence is identical to coding strand except T is replaced by U', '1 Mark'],
    ['Accurate mRNA sequence written with 5\' to 3\' polarity', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c12b-ch5-q5',
  'Q5',
  'Exercises (NCERT Verbatim)',
  'Which property of DNA double helix led Watson and Crick to hypothesise semi-conservative mode of DNA replication? Explain.',
  `<p><strong>The Core Property:</strong></p>
  <p>The property of <strong>complementary base pairing</strong> between the two antiparallel polynucleotide strands led James Watson and Francis Crick (1953) to immediately propose the semi-conservative mode of replication.</p>

  <p><strong>Explanation:</strong></p>
  <ol>
    <li>Watson and Crick famously noted in their 1953 Nature paper: <em>"It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material."</em></li>
    <li>Due to strict complementary base pairing (Adenine specifically pairing with Thymine via 2 H-bonds, and Guanine specifically pairing with Cytosine via 3 H-bonds), the sequence of bases in one strand automatically and precisely dictates the sequence of bases in the opposite strand.</li>
    <li>During replication:
      <ul>
        <li>The hydrogen bonds holding the two parental strands together uncoil and separate.</li>
        <li>Each separated parental strand acts as a <strong>template</strong> for the synthesis of a new complementary strand.</li>
        <li>Substrate deoxyribonucleoside triphosphates (dNTPs) align opposite the template according to base pairing rules and are joined by DNA polymerase.</li>
      </ul>
    </li>
    <li>Upon completion of replication, each daughter DNA duplex contains <strong>one conserved parental strand</strong> and <strong>one newly synthesised strand</strong>. Hence, the replication process is termed <strong>semi-conservative</strong> (experimentally verified later by Meselson and Stahl in 1958).</li>
  </ol>`,
  '3 Marks',
  [
    ['Identification of the property: Complementary base pairing between the two strands', '1 Mark'],
    ['Explanation of uncoiling and each strand serving as a template for synthesis of a new partner', '1 Mark'],
    ['Daughter molecule having one parental strand and one newly synthesised strand (semi-conservative)', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c12b-ch5-q6',
  'Q6',
  'Exercises (NCERT Verbatim)',
  'Depending upon the chemical nature of the template (DNA or RNA) and the nature of synthesized products (DNA or RNA), contemplate the types of nucleic acid polymerases.',
  `<p>Nucleic acid polymerases are classified strictly according to the substrate template they read and the type of macromolecule they synthesise:</p>
  
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem;">
    <thead>
      <tr style="background:#ecfdf5; border-bottom:2px solid #059669; text-align:left;">
        <th style="padding:8px 10px; color:#065f46;">Polymerase Class</th>
        <th style="padding:8px 10px; color:#065f46;">Template Used</th>
        <th style="padding:8px 10px; color:#065f46;">Product Synthesised</th>
        <th style="padding:8px 10px; color:#065f46;">Biological Example & Role</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:8px 10px; font-weight:700;">1. DNA-dependent DNA Polymerase</td>
        <td style="padding:8px 10px;">DNA (deoxypolynucleotide)</td>
        <td style="padding:8px 10px;">DNA</td>
        <td style="padding:8px 10px;"><strong>DNA Polymerase I, II, III (e.g. in <em>E. coli</em>):</strong> Catalyses semiconservative DNA replication.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc;">
        <td style="padding:8px 10px; font-weight:700;">2. DNA-dependent RNA Polymerase</td>
        <td style="padding:8px 10px;">DNA</td>
        <td style="padding:8px 10px;">RNA</td>
        <td style="padding:8px 10px;"><strong>RNA Polymerase:</strong> Catalyses transcription (mRNA, tRNA, rRNA synthesis) in prokaryotes & eukaryotes.</td>
      </tr>
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:8px 10px; font-weight:700;">3. RNA-dependent DNA Polymerase (Reverse Transcriptase)</td>
        <td style="padding:8px 10px;">RNA</td>
        <td style="padding:8px 10px;">DNA (cDNA)</td>
        <td style="padding:8px 10px;"><strong>Reverse Transcriptase:</strong> Present in retroviruses (e.g., HIV) to convert viral genomic RNA into cDNA.</td>
      </tr>
      <tr style="background:#f8fafc;">
        <td style="padding:8px 10px; font-weight:700;">4. RNA-dependent RNA Polymerase (RNA Replicase)</td>
        <td style="padding:8px 10px;">RNA</td>
        <td style="padding:8px 10px;">RNA</td>
        <td style="padding:8px 10px;"><strong>RNA Replicase:</strong> Used by RNA viruses (e.g., Poliovirus, TMV, Influenza) to replicate their RNA genomes.</td>
      </tr>
    </tbody>
  </table>`,
  '3 Marks',
  [
    ['DNA-dependent DNA polymerase (DNA template -> DNA product) with role in replication', '1 Mark'],
    ['DNA-dependent RNA polymerase (DNA template -> RNA product) with role in transcription', '1 Mark'],
    ['RNA-dependent DNA polymerase (Reverse Transcriptase) and RNA-dependent RNA polymerase (RNA Replicase)', '1 Mark']
  ]
));

// Q7
questions.push(createQCard(
  'c12b-ch5-q7',
  'Q7',
  'Exercises (NCERT Verbatim)',
  'How did Hershey and Chase differentiate between DNA and protein in their experiment while proving that DNA is the genetic material?',
  `<p>Alfred Hershey and Martha Chase (1952) worked with <strong>bacteriophage T2</strong> that infects <em>Escherichia coli</em> to provide unequivocal proof that DNA is the genetic material.</p>
  
  <p><strong>Chemical Differentiation Strategy Using Radioisotopes:</strong></p>
  <ul>
    <li><strong>Radioactive Phosphorus (<sup>32</sup>P) for DNA:</strong> DNA contains phosphorus as an integral constituent of its sugar-phosphate backbone, but contains <em>no sulphur</em>. Bacteriophages grown in a medium containing radioactive <strong><sup>32</sup>P</strong> incorporated radioactivity exclusively into their <strong>DNA</strong>.</li>
    <li><strong>Radioactive Sulphur (<sup>35</sup>S) for Protein:</strong> Proteins contain sulphur in amino acids (cysteine and methionine), but contain <em>no phosphorus</em>. Bacteriophages grown in a medium containing radioactive <strong><sup>35</sup>S</strong> incorporated radioactivity exclusively into their <strong>protein capsid coats</strong>.</li>
  </ul>

  <p><strong>Experimental Protocol & Results:</strong></p>
  <ol>
    <li><strong>Infection:</strong> Both batches of labeled phages were allowed to attach to separate cultures of <em>E. coli</em>.</li>
    <li><strong>Blending:</strong> The bacterial cultures were agitated in a kitchen blender to dislodge the empty viral coats (ghosts) from the surface of the bacterial cells.</li>
    <li><strong>Centrifugation:</strong> The viral ghosts (lighter supernatant) were separated from the heavier bacterial cells (pellet).</li>
    <li><strong>Observation:</strong>
      <ul>
        <li>Bacteria infected with <sup>32</sup>P-labeled phages showed <strong>radioactivity in the cell pellet</strong>, and subsequent progeny phages were radioactive.</li>
        <li>Bacteria infected with <sup>35</sup>S-labeled phages showed <strong>radioactivity in the supernatant</strong>; no radioactivity was detected in the bacterial cell pellet.</li>
      </ul>
    </li>
  </ol>
  <p><strong>Conclusion:</strong> This decisively proved that <strong>DNA (and not protein) enters the bacteria from the virus</strong>, confirming that DNA is the hereditary genetic material.</p>`,
  '3 Marks',
  [
    ['Radioactive labelling strategy: 32P labels DNA (contains phosphorus, no sulfur); 35S labels protein coat (contains sulfur, no phosphorus)', '1.5 Marks'],
    ['Three-step methodology: Infection, Blending, and Centrifugation', '0.5 Mark'],
    ['Experimental result: 32P in pellet (inside bacteria) and 35S in supernatant proving DNA is the genetic material', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c12b-ch5-q8',
  'Q8',
  'Exercises (NCERT Verbatim)',
  `Differentiate between the followings:
  <br>(a) Repetitive DNA and Satellite DNA
  <br>(b) mRNA and tRNA
  <br>(c) Template strand and Coding strand`,
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(a) Repetitive DNA vs Satellite DNA</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">Repetitive DNA</th>
          <th style="padding:6px 10px; width:50%;">Satellite DNA</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Broad category of DNA sequences that are repeated many times (from hundreds to millions of times) in the genome.</td>
          <td style="padding:6px 10px;">A specific sub-fraction of repetitive DNA that separates as distinct minor peaks during CsCl density gradient centrifugation.</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Can be interspersed or tandem; includes transposons, retrotransposons, and satellite sequences.</td>
          <td style="padding:6px 10px;">Highly tandemly repeated non-coding sequences (micro-satellites, mini-satellites/VNTRs) showing high polymorphism.</td>
        </tr>
      </table>
    </div>

    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(b) mRNA vs tRNA</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">mRNA (Messenger RNA)</th>
          <th style="padding:6px 10px; width:50%;">tRNA (Transfer / Adapter RNA)</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Linear, single-stranded molecule without secondary base-paired loops; accounts for ~5% of cellular RNA.</td>
          <td style="padding:6px 10px;">Clover-leaf shaped 2D (inverted L-shaped 3D) molecule with folded hydrogen-bonded arms; accounts for ~15% of cellular RNA.</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Carries genetic information in triplet <strong>codons</strong> from DNA to ribosomes for polypeptide synthesis.</td>
          <td style="padding:6px 10px;">Acts as an adapter molecule: reads mRNA codons via its <strong>anticodon loop</strong> and carries the cognate amino acid at its 3'-CCA end.</td>
        </tr>
      </table>
    </div>

    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(c) Template Strand vs Coding Strand</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">Template Strand (Antisense Strand)</th>
          <th style="padding:6px 10px; width:50%;">Coding Strand (Sense Strand)</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Has <strong>3' &rarr; 5' polarity</strong>.</td>
          <td style="padding:6px 10px;">Has <strong>5' &rarr; 3' polarity</strong>.</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Actively transcribed by RNA polymerase; base sequence is complementary to the synthesised mRNA.</td>
          <td style="padding:6px 10px;">Not transcribed into mRNA; its sequence is identical to the synthesised mRNA (with T instead of U).</td>
        </tr>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['(a) Clear differentiation between Repetitive DNA and Satellite DNA (CsCl density gradient peaks/VNTRs)', '1 Mark'],
    ['(b) Differentiation between mRNA and tRNA (structure and biological function as template vs adapter)', '1 Mark'],
    ['(c) Differentiation between Template strand (3\'->5\', transcribed) and Coding strand (5\'->3\', reference)', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c12b-ch5-q9',
  'Q9',
  'Exercises (NCERT Verbatim)',
  'List two essential roles of ribosome during translation.',
  `<p>During protein synthesis (translation), the ribosome acts as a complex cellular macromolecular machine performing the following two essential roles:</p>
  <ol>
    <li><strong>Structural Platform & Positioning of mRNA and Aminoacyl-tRNAs:</strong>
      <ul>
        <li>The smaller ribosomal subunit binds to the mRNA transcript, ensuring proper reading-frame alignment at the initiation codon (AUG).</li>
        <li>The larger ribosomal subunit contains two functional binding sites (<strong>A site</strong> for aminoacyl-tRNA and <strong>P site</strong> for peptidyl-tRNA), positioning adjacent aminoacyl-tRNAs close enough for peptide bond formation.</li>
      </ul>
    </li>
    <li><strong>Enzymatic Catalysis (Peptidyl Transferase Activity):</strong>
      <ul>
        <li>The ribosome acts as a <strong>ribozyme</strong>. In prokaryotes, the <strong>23S rRNA</strong> of the larger ribosomal subunit catalyses the formation of peptide bonds between the amino group of the incoming amino acid at the A site and the carboxyl group of the growing peptidyl chain at the P site.</li>
      </ul>
    </li>
  </ol>`,
  '2 Marks',
  [
    ['Providing structural framework/binding sites (A, P, E sites) and reading mRNA codons', '1 Mark'],
    ['Acting as a catalyst/ribozyme (23S rRNA peptidyl transferase) for peptide bond synthesis', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c12b-ch5-q10',
  'Q10',
  'Exercises (NCERT Verbatim)',
  'In the medium where E. coli was growing, lactose was added, which induced the lac operon. Then, why does lac operon shut down some time after addition of lactose in the medium?',
  `<p>The shut-down of the <em>lac</em> operon occurs through an intrinsic biochemical feedback loop:</p>
  <ol>
    <li><strong>Induction Phase:</strong> When lactose (allolactose) is added to the growth medium, it binds to the active repressor protein synthesised by the regulatory <em>i</em> gene. This alters the repressor's allosteric conformation, preventing it from binding to the operator region.</li>
    <li><strong>Transcription of Structural Genes:</strong> RNA polymerase accesses the promoter and transcribes the polycistronic mRNA, translating into:
      <ul>
        <li><strong>&beta;-galactosidase (<em>z</em> gene):</strong> Hydrolyses lactose into glucose and galactose.</li>
        <li><strong>Permease (<em>y</em> gene):</strong> Increases cell membrane permeability to &beta;-galactosides.</li>
        <li><strong>Transacetylase (<em>a</em> gene):</strong> Transfers an acetyl group to &beta;-galactosides.</li>
      </ul>
    </li>
    <li><strong>Metabolic Depletion of Inducer:</strong> As &beta;-galactosidase hydrolyses lactose, the intracellular concentration of lactose/allolactose declines steadily until all of it is metabolised into glucose and galactose.</li>
    <li><strong>Repressor Reactivation and Shut-Down:</strong> In the absence of lactose/inducer, the newly synthesized repressor protein remains free and in its active conformation. It binds tightly once again to the <strong>operator gene (<em>o</em>)</strong>, physically blocking RNA polymerase from transcribing the structural genes. Consequently, the <em>lac</em> operon is switched <strong>OFF</strong>.</li>
  </ol>`,
  '3 Marks',
  [
    ['Action of beta-galactosidase hydrolysing lactose into glucose and galactose', '1 Mark'],
    ['Gradual depletion of all lactose (inducer) molecules from the medium/bacterial cell', '1 Mark'],
    ['Free repressor binds back to operator, blocking RNA polymerase and turning operon OFF', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c12b-ch5-q11',
  'Q11',
  'Exercises (NCERT Verbatim)',
  `Explain (in one or two lines) the function of the followings:
  <br>(a) Promoter
  <br>(b) tRNA
  <br>(c) Exons`,
  `<div style="display:flex; flex-direction:column; gap:12px;">
    <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #059669;">
      <strong>(a) Promoter:</strong><br>
      A DNA sequence located towards the 5'-end (upstream) of the structural gene that provides the specific binding site for RNA polymerase and determines which DNA strand serves as the template for transcription.
    </div>
    <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #059669;">
      <strong>(b) tRNA (Transfer RNA):</strong><br>
      Acts as an adapter molecule that reads the genetic code on mRNA through its complementary anticodon triplet and transfers the corresponding cognate amino acid to the growing polypeptide chain during translation.
    </div>
    <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; border-left:4px solid #059669;">
      <strong>(c) Exons:</strong><br>
      The coding/expressed coding nucleotide sequences in eukaryotic split genes that appear in mature, spliced functional RNA and are translated into the final polypeptide sequence.
    </div>
  </div>`,
  '3 Marks',
  [
    ['(a) Promoter: Binding site for RNA polymerase initiating transcription', '1 Mark'],
    ['(b) tRNA: Adapter molecule matching anticodon to mRNA codon and delivering amino acid', '1 Mark'],
    ['(c) Exons: Coding/expressed regions retained in mature mRNA after splicing', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c12b-ch5-q12',
  'Q12',
  'Exercises (NCERT Verbatim)',
  'Why is the Human Genome Project called a mega project?',
  `<p>The <strong>Human Genome Project (HGP)</strong>, initiated in 1990 and completed in 2003, is termed a "Mega Project" because of its unprecedented scale, budget, data volume, and international logistical collaboration:</p>
  <ol>
    <li><strong>Enormous Scale and Target Size:</strong> The human haploid genome comprises approximately <strong>3 &times; 10<sup>9</sup> base pairs (3 billion bp)</strong>. Sequencing every individual nucleotide across all 24 chromosomes (22 autosomes + X + Y) was a monumental biological undertaking.</li>
    <li><strong>Colossal Financial Cost:</strong> The projected cost of sequencing was roughly <strong>US $3 per base pair</strong>, making the total estimated budget of the project nearly <strong>US $9 billion</strong>.</li>
    <li><strong>Immense Data Volume & Storage Requirements:</strong> If the sequence was printed in books containing 1,000 pages each, with 1,000 letters per page, sequencing one human cell would require <strong>3,300 books</strong>! This necessitated the development of novel computer algorithms, high-speed computational databases, and bioinformatics tools for storage, retrieval, and analysis.</li>
    <li><strong>Massive Global Collaboration:</strong> Coordinated by the US Department of Energy (DOE) and the National Institutes of Health (NIH), with key participation from the Wellcome Trust (UK), Japan, France, Germany, China, and thousands of international scientists over a 13-year timeline.</li>
    <li><strong>Associated Ethical, Legal, and Social Issues (ELSI):</strong> Required dedicated funding to address the societal, legal, and privacy implications of human genomic data.</li>
  </ol>`,
  '3 Marks',
  [
    ['Scale: Sequencing 3 x 10^9 base pairs across the human haploid genome', '1 Mark'],
    ['Huge estimated financial cost (~$9 billion at $3 per base pair)', '1 Mark'],
    ['Data volume (3300 books of 1000 pages each) spurring bioinformatics and global multi-country collaboration', '1 Mark']
  ]
));

// Q13
questions.push(createQCard(
  'c12b-ch5-q13',
  'Q13',
  'Exercises (NCERT Verbatim)',
  'What is DNA fingerprinting? Mention its application.',
  `<p><strong>Definition:</strong></p>
  <p><strong>DNA fingerprinting</strong> (DNA profiling), developed by <strong>Sir Alec Jeffreys</strong> in 1984, is a molecular diagnostic technique used to identify individuals based on unique variations and patterns in their DNA sequence, specifically targeting <strong>Variable Number of Tandem Repeats (VNTRs)</strong> in satellite DNA.</p>

  <p><strong>Underlying Scientific Principle:</strong></p>
  <ul>
    <li>99.9% of DNA sequence is identical among all human beings. Individual uniqueness resides in 0.1% polymorphic non-coding DNA.</li>
    <li>VNTRs (minisatellites) exhibit a very high degree of inheritable <strong>DNA polymorphism</strong>. The size and repeat number of VNTRs vary from person to person (ranging from 0.1 to 20 kb), yielding a unique banding pattern upon Southern blot hybridisation with a radio-labelled VNTR probe (except in monozygotic identical twins).</li>
  </ul>

  <p><strong>Major Practical Applications:</strong></p>
  <ol>
    <li><strong>Forensic Criminology:</strong> Identifying suspects or victims in criminal investigations (homicides, rapes, burglaries) by matching DNA extracted from trace biological evidence (blood drops, semen stains, hair roots, saliva).</li>
    <li><strong>Paternity and Maternity Dispute Resolution:</strong> Solving disputed lineage or custody cases, as an individual's VNTR bands are strictly inherited from biological parents (50% from mother, 50% from father).</li>
    <li><strong>Immigration Verification:</strong> Scientifically verifying biological kinship claims for immigration authorities.</li>
    <li><strong>Pedigree and Wildlife Conservation:</strong> Monitoring genetic diversity and parentage in captive breeding programmes of endangered species.</li>
    <li><strong>Evolutionary and Anthropological Studies:</strong> Tracing prehistoric human migrations and population genetics.</li>
  </ol>`,
  '3 Marks',
  [
    ['Definition of DNA fingerprinting (Alec Jeffreys) and basis in VNTR polymorphism', '1 Mark'],
    ['Forensic criminology and crime-scene individual identification application', '1 Mark'],
    ['Paternity dispute resolution and pedigree/biodiversity conservation applications', '1 Mark']
  ]
));

// Q14
questions.push(createQCard(
  'c12b-ch5-q14',
  'Q14',
  'Exercises (NCERT Verbatim)',
  `Briefly describe the following:
  <br>(a) Transcription
  <br>(b) Polymorphism
  <br>(c) Translation
  <br>(d) Bioinformatics`,
  `<div style="display:flex; flex-direction:column; gap:14px;">
    <div style="background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #059669;">
      <h5 style="color:#059669; margin:0 0 4px 0;">(a) Transcription</h5>
      <p style="margin:0;">The enzymatic process of copying genetic information from the template strand of DNA into a complementary single-stranded RNA molecule (mRNA), catalyzed by <strong>DNA-dependent RNA polymerase</strong>. It proceeds in three distinct phases: <em>initiation</em> (at promoter via &sigma;-factor), <em>elongation</em>, and <em>termination</em> (via &rho;-factor). In eukaryotes, primary transcripts (hnRNA) undergo post-transcriptional processing: 5'-capping, 3'-polyadenylation (tailing), and splicing to remove introns.</p>
    </div>

    <div style="background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #059669;">
      <h5 style="color:#059669; margin:0 0 4px 0;">(b) Polymorphism (DNA Polymorphism)</h5>
      <p style="margin:0;">Heritable genetic variation occurring at a frequency greater than 0.01 (1%) in a human population. It arises due to mutations that accumulate over generations in non-coding DNA sequences. DNA polymorphism ranges from single nucleotide polymorphisms (SNPs) to variable numbers of tandem repeats (VNTRs), and forms the scientific foundation for genetic linkage mapping and DNA fingerprinting.</p>
    </div>

    <div style="background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #059669;">
      <h5 style="color:#059669; margin:0 0 4px 0;">(c) Translation</h5>
      <p style="margin:0;">The cellular process wherein the sequence of nucleotide triplets (codons) in mRNA is decoded to synthesize a specific sequence of amino acids in a polypeptide chain. It requires ribosomes, aminoacyl-tRNAs, GTP, and initiation/elongation factors, proceeding through amino acid activation, charging of tRNA, initiation at AUG codon, peptide chain elongation (peptidyl transferase), and termination at stop codons (UAA, UAG, UGA).</p>
    </div>

    <div style="background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #059669;">
      <h5 style="color:#059669; margin:0 0 4px 0;">(d) Bioinformatics</h5>
      <p style="margin:0;">An interdisciplinary branch of science that combines computer science, mathematics, statistics, and molecular biology to acquire, store, organise, analyse, and model biological data, especially massive macromolecular datasets generated by high-throughput DNA sequencing (e.g., Human Genome Project).</p>
    </div>
  </div>`,
  '4 Marks',
  [
    ['(a) Transcription: DNA to RNA copying catalyzed by RNA polymerase with initiation, elongation, termination', '1 Mark'],
    ['(b) Polymorphism: Heritable variation (>1% frequency) in non-coding DNA forming basis of DNA fingerprinting', '1 Mark'],
    ['(c) Translation: Decoding mRNA triplets into polypeptide chains at the ribosome', '1 Mark'],
    ['(d) Bioinformatics: Computational and statistical analysis of massive genomic and biological datasets', '1 Mark']
  ]
));

saveChapter(
  5,
  'Molecular Basis of Inheritance',
  svgDiagram,
  'NCERT Exercises (14 Verbatim Questions)',
  questions,
  'Evolution'
);
