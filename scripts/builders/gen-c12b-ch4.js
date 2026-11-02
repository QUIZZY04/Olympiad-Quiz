// scripts/builders/gen-c12b-ch4.js
// Chapter 4: Principles of Inheritance and Variation (16 Questions)
const { createQCard, saveChapter } = require('./c12b-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#059669; font-size:1.05rem;">🧬 Core Genetics Map: Mendelian Principles vs Morgan's Linkage & Sex Determination</h4>
  <svg viewBox="0 0 880 300" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #d1fae5;">
    <!-- Mendel's Laws Card -->
    <rect x="20" y="20" width="260" height="260" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="150" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">Mendelian Postulates</text>
    <line x1="35" y1="58" x2="265" y2="58" stroke="#10b981" stroke-width="1.5"/>
    <text x="35" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857">1. Law of Dominance:</text>
    <text x="35" y="98" font-family="sans-serif" font-size="11" fill="#334155">&bull; Factors occur in pairs</text>
    <text x="35" y="114" font-family="sans-serif" font-size="11" fill="#334155">&bull; One allele masks another in F1</text>
    <text x="35" y="138" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857">2. Law of Segregation:</text>
    <text x="35" y="156" font-family="sans-serif" font-size="11" fill="#334155">&bull; Purity of gametes (no blending)</text>
    <text x="35" y="172" font-family="sans-serif" font-size="11" fill="#334155">&bull; Alleles separate during meiosis</text>
    <text x="35" y="196" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857">3. Independent Assortment:</text>
    <text x="35" y="214" font-family="sans-serif" font-size="11" fill="#334155">&bull; Dihybrid ratio: 9 : 3 : 3 : 1</text>
    <text x="35" y="230" font-family="sans-serif" font-size="11" fill="#334155">&bull; Valid only for unlinked genes</text>
    <text x="35" y="250" font-family="sans-serif" font-size="11" font-weight="bold" fill="#059669">&bull; Test Cross Ratio: 1 : 1 (Monohybrid)</text>

    <!-- Morgan Linkage Card -->
    <rect x="310" y="20" width="260" height="260" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="440" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Morgan & Chromosomal Theory</text>
    <line x1="325" y1="58" x2="555" y2="58" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="325" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">Sutton & Boveri (1902):</text>
    <text x="325" y="98" font-family="sans-serif" font-size="11" fill="#334155">&bull; Parallelism: Chromosomes & genes</text>
    <text x="325" y="122" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">T.H. Morgan (Drosophila):</text>
    <text x="325" y="140" font-family="sans-serif" font-size="11" fill="#334155">&bull; Discovered Sex-linkage & Recombination</text>
    <text x="325" y="158" font-family="sans-serif" font-size="11" fill="#334155">&bull; Tight Linkage: 98.7% Parental (y-w)</text>
    <text x="325" y="176" font-family="sans-serif" font-size="11" fill="#334155">&bull; Loose Linkage: 62.8% Parental (w-m)</text>
    <text x="325" y="200" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">Alfred Sturtevant:</text>
    <text x="325" y="218" font-family="sans-serif" font-size="11" fill="#334155">&bull; Genetic Mapping (1% recombination</text>
    <text x="325" y="234" font-family="sans-serif" font-size="11" fill="#334155">  = 1 map unit or 1 centiMorgan)</text>

    <!-- Genetic Disorders Card -->
    <rect x="600" y="20" width="260" height="260" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
    <text x="730" y="48" font-family="sans-serif" font-size="14" font-weight="bold" fill="#991b1b" text-anchor="middle">Genetic Disorders</text>
    <line x1="615" y1="58" x2="845" y2="58" stroke="#ef4444" stroke-width="1.5"/>
    <text x="615" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">Mendelian Disorders:</text>
    <text x="615" y="98" font-family="sans-serif" font-size="11" fill="#334155">&bull; Haemophilia (X-linked recessive)</text>
    <text x="615" y="114" font-family="sans-serif" font-size="11" fill="#334155">&bull; Sickle-Cell (Autosomal recessive, GAG&rarr;GUG)</text>
    <text x="615" y="130" font-family="sans-serif" font-size="11" fill="#334155">&bull; Phenylketonuria (PAH gene, Chr 12)</text>
    <text x="615" y="146" font-family="sans-serif" font-size="11" fill="#334155">&bull; Thalassemia (Globin chain synthesis defect)</text>
    <text x="615" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">Chromosomal Aneuploidy:</text>
    <text x="615" y="188" font-family="sans-serif" font-size="11" fill="#334155">&bull; Down's Syndrome: Trisomy 21 (2n + 1 = 47)</text>
    <text x="615" y="204" font-family="sans-serif" font-size="11" fill="#334155">&bull; Klinefelter's Syndrome: XXY (47, XXY)</text>
    <text x="615" y="220" font-family="sans-serif" font-size="11" fill="#334155">&bull; Turner's Syndrome: XO (45, XO)</text>
    <text x="615" y="244" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b">Sex Determination: XX-XY, XX-XO, ZZ-ZW</text>
  </svg>
</div>`;

const questions = [];

// Q1
questions.push(createQCard(
  'c12b-ch4-q1',
  'Q1',
  'Exercises (NCERT Verbatim)',
  'Mention the advantages of selecting pea plant for experiment by Mendel.',
  `<p>Gregor Johann Mendel selected the garden pea (<em>Pisum sativum</em>) for his landmark hybridisation experiments due to several distinct morphological, reproductive, and practical advantages:</p>
  <ol>
    <li><strong>Well-Defined Contrasting Traits:</strong> Pea plants exhibit conspicuous, easily identifiable contrasting characters (e.g., tall vs dwarf, yellow vs green seeds, round vs wrinkled seeds, purple vs white flowers).</li>
    <li><strong>Naturally Self-Pollinating with Cleistogamous Tendency:</strong> The pea flower has a papilionaceous corolla (keel petals enclose the stamens and stigma), ensuring natural self-pollination and enabling the continuous generation of pure-breeding true lines.</li>
    <li><strong>Feasibility of Easy Artificial Hybridisation (Cross-Pollination):</strong> Manual cross-pollination can be conveniently carried out by <em>emasculation</em> (removal of anthers before dehiscence) followed by controlled dusting of desired pollen and <em>bagging</em>.</li>
    <li><strong>Short Life Cycle and Annual Habit:</strong> Peas complete their entire life cycle within 3–4 months, enabling Mendel to follow several successive generations within a few years.</li>
    <li><strong>High Fecundity (Abundant Progeny):</strong> A single plant produces numerous seeds in each pod, providing large sample sizes that permit statistical validity and reliable mathematical probability ratios.</li>
    <li><strong>Ease of Cultivation:</strong> Pea plants require simple cultivation conditions and small garden plots.</li>
  </ol>`,
  '3 Marks',
  [
    ['Presence of distinct, easily observable contrasting characters', '1 Mark'],
    ['Natural self-pollination (pure lines) and ease of artificial cross-pollination (emasculation/bagging)', '1 Mark'],
    ['Short life cycle (annual) and large number of offspring per plant for statistical analysis', '1 Mark']
  ]
));

// Q2
questions.push(createQCard(
  'c12b-ch4-q2',
  'Q2',
  'Exercises (NCERT Verbatim)',
  `Differentiate between the following:
  <br>(a) Dominance and Recessive
  <br>(b) Homozygous and Heterozygous
  <br>(c) Monohybrid and Dihybrid`,
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(a) Dominance vs Recessive</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">Dominant Character / Allele</th>
          <th style="padding:6px 10px; width:50%;">Recessive Character / Allele</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Expresses its phenotypic effect both in homozygous (TT) and heterozygous (Tt) conditions.</td>
          <td style="padding:6px 10px;">Expresses its phenotypic effect only in the homozygous condition (tt); suppressed in heterozygote.</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Produces a fully functional normal enzyme or structural protein.</td>
          <td style="padding:6px 10px;">Usually produces a non-functional enzyme, defective protein, or no enzyme at all.</td>
        </tr>
      </table>
    </div>

    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(b) Homozygous vs Heterozygous</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">Homozygous Individual / Genotype</th>
          <th style="padding:6px 10px; width:50%;">Heterozygous Individual / Genotype</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Possesses two identical alleles at a given locus (e.g., TT or tt).</td>
          <td style="padding:6px 10px;">Possesses two dissimilar/different alleles at a given locus (e.g., Tt).</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">Produces only one type of gamete (100% T or 100% t).</td>
          <td style="padding:6px 10px;">Produces two different types of gametes in equal proportion (50% T and 50% t).</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Breeds true upon selfing (pure breeding line).</td>
          <td style="padding:6px 10px;">Segregates into varied phenotypes upon selfing.</td>
        </tr>
      </table>
    </div>

    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(c) Monohybrid vs Dihybrid Cross</h5>
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <tr style="background:#ecfdf5; border-bottom:2px solid #059669;">
          <th style="padding:6px 10px; width:50%;">Monohybrid Cross</th>
          <th style="padding:6px 10px; width:50%;">Dihybrid Cross</th>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">A cross involving the study of the inheritance of a single pair of contrasting characters (e.g., Plant Height).</td>
          <td style="padding:6px 10px;">A cross involving the simultaneous study of the inheritance of two pairs of contrasting characters (e.g., Seed Shape and Seed Colour).</td>
        </tr>
        <tr style="border-bottom:1px solid #e2e8f0;">
          <td style="padding:6px 10px;">F2 Phenotypic ratio = <strong>3 : 1</strong><br>F2 Genotypic ratio = <strong>1 : 2 : 1</strong></td>
          <td style="padding:6px 10px;">F2 Phenotypic ratio = <strong>9 : 3 : 3 : 1</strong><br>F2 Genotypic ratio = <strong>(1:2:1) &times; (1:2:1) [9 genotypes]</strong></td>
        </tr>
        <tr>
          <td style="padding:6px 10px;">Monohybrid Test cross ratio = <strong>1 : 1</strong></td>
          <td style="padding:6px 10px;">Dihybrid Test cross ratio = <strong>1 : 1 : 1 : 1</strong></td>
        </tr>
      </table>
    </div>
  </div>`,
  '3 Marks',
  [
    ['(a) Clear differentiation between Dominance & Recessive with molecular basis/homozygous-heterozygous expression', '1 Mark'],
    ['(b) Differentiation between Homozygous & Heterozygous (allelic constitution and gamete production)', '1 Mark'],
    ['(c) Differentiation between Monohybrid & Dihybrid cross (number of gene pairs & classic F2 ratios)', '1 Mark']
  ]
));

// Q3
questions.push(createQCard(
  'c12b-ch4-q3',
  'Q3',
  'Exercises (NCERT Verbatim)',
  'A diploid organism is heterozygous for 4 loci, how many types of gametes can be produced?',
  `<p><strong>Formula and Calculation:</strong></p>
  <p>The number of genetically distinct gametes produced by an individual with independently assorting heterozygous gene loci is given by the formula:</p>
  <div style="background:#f8fafc; padding:12px; border-left:4px solid #059669; font-weight:700; margin:10px 0;">
    Number of gamete types = 2<sup>n</sup>
  </div>
  <p>Where <strong>n</strong> represents the number of heterozygous loci.</p>
  <ul>
    <li>Given: Diploid organism is heterozygous for 4 loci, so <strong>n = 4</strong>.</li>
    <li>Representative Genotype: <em>AaBbCcDd</em></li>
    <li>Calculation:
      <br>Number of gametes = 2<sup>4</sup> = 2 &times; 2 &times; 2 &times; 2 = <strong>16 types of gametes</strong>.</li>
  </ul>
  <p><strong>Conclusion:</strong> The organism can produce <strong>16 genetically distinct types of gametes</strong> (each with a probability of 1/16).</p>`,
  '2 Marks',
  [
    ['Correct formula stated: Number of gametes = 2^n, where n is number of heterozygous loci', '1 Mark'],
    ['Substitution with n = 4 leading to correct answer: 2^4 = 16 types of gametes', '1 Mark']
  ]
));

// Q4
questions.push(createQCard(
  'c12b-ch4-q4',
  'Q4',
  'Exercises (NCERT Verbatim)',
  'Explain the Law of Dominance using a monohybrid cross.',
  `<p><strong>Statement of Mendel's Law of Dominance:</strong></p>
  <ol>
    <li>Characters are controlled by discrete physical units called <strong>factors</strong> (now called genes).</li>
    <li>Factors occur in pairs in diploid organisms.</li>
    <li>In a dissimilar pair of factors (heterozygous condition), one member of the pair dominates (<strong>dominant factor</strong>) and expresses itself phenotypically, while the other member is masked/suppressed (<strong>recessive factor</strong>).</li>
  </ol>
  <p><strong>Demonstration Using Monohybrid Cross (Stem Height in <em>Pisum sativum</em>):</strong></p>
  <ul>
    <li><strong>Parents (P):</strong> Pure-breeding Tall (TT) &times; Pure-breeding Dwarf (tt)</li>
    <li><strong>Gametes:</strong> All 'T' from tall parent; all 't' from dwarf parent.</li>
    <li><strong>F1 Generation:</strong> All offspring are heterozygous <strong>Tt</strong>. Phenotypically, <strong>100% of the F1 plants are Tall</strong>. Despite carrying the allele for dwarfness ('t'), only the tall phenotype ('T') is expressed. This proves that 'T' is dominant over 't'.</li>
    <li><strong>F2 Generation (Selfing F1 &times; F1, Tt &times; Tt):</strong>
      <table style="width:240px; border-collapse:collapse; margin:10px 0; text-align:center;">
        <tr style="background:#ecfdf5; border:1px solid #10b981;">
          <th style="padding:6px; border:1px solid #10b981;">Gametes</th>
          <th style="padding:6px; border:1px solid #10b981;">T (&frac12;)</th>
          <th style="padding:6px; border:1px solid #10b981;">t (&frac12;)</th>
        </tr>
        <tr>
          <th style="padding:6px; background:#ecfdf5; border:1px solid #10b981;">T (&frac12;)</th>
          <td style="padding:6px; border:1px solid #cbd5e1; font-weight:700;">TT (Tall)</td>
          <td style="padding:6px; border:1px solid #cbd5e1; font-weight:700;">Tt (Tall)</td>
        </tr>
        <tr>
          <th style="padding:6px; background:#ecfdf5; border:1px solid #10b981;">t (&frac12;)</th>
          <td style="padding:6px; border:1px solid #cbd5e1; font-weight:700;">Tt (Tall)</td>
          <td style="padding:6px; border:1px solid #cbd5e1; font-weight:700;">tt (Dwarf)</td>
        </tr>
      </table>
      <p>In the F2 generation, the masked recessive trait reappears in the homozygous state (tt).<br>
      <strong>Phenotypic Ratio:</strong> 3 Tall : 1 Dwarf (3 : 1)<br>
      <strong>Genotypic Ratio:</strong> 1 TT : 2 Tt : 1 tt (1 : 2 : 1)</p>
    </li>
  </ul>`,
  '3 Marks',
  [
    ['Three postulates of Law of Dominance (factors in pairs, discrete units, dominant masks recessive)', '1 Mark'],
    ['P and F1 cross schematic (TT x tt -> 100% Tt tall) explaining dominant expression', '1 Mark'],
    ['F2 Punnett square with 3:1 phenotypic and 1:2:1 genotypic ratios', '1 Mark']
  ]
));

// Q5
questions.push(createQCard(
  'c12b-ch4-q5',
  'Q5',
  'Exercises (NCERT Verbatim)',
  'Define and design a test-cross.',
  `<p><strong>Definition:</strong></p>
  <p>A <strong>test cross</strong> is a cross between an individual showing a dominant phenotype (whose genotype is unknown, i.e., whether homozygous dominant or heterozygous) and the <strong>homozygous recessive parent</strong>.</p>
  <p><strong>Purpose of Test Cross:</strong> To determine the unknown genotype of the dominant parent.</p>

  <p><strong>Design of Test Cross for Flower Colour in Pea (Violet vs White):</strong></p>
  <p>Dominant flower colour is Violet (alleles: W), recessive is White (ww). An individual plant with violet flowers may have genotype <strong>WW</strong> (homozygous) or <strong>Ww</strong> (heterozygous).</p>
  
  <div style="display:flex; flex-wrap:wrap; gap:16px; margin-top:10px;">
    <div style="flex:1; min-width:260px; background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #cbd5e1;">
      <h5 style="color:#059669; margin:0 0 6px 0;">Case 1: If Unknown Plant is Homozygous (WW)</h5>
      <p style="font-size:0.88rem; margin:0 0 6px 0;">Cross: <strong>WW &times; ww</strong></p>
      <table style="width:100%; border-collapse:collapse; text-align:center; font-size:0.88rem;">
        <tr style="background:#ecfdf5;"><th style="border:1px solid #10b981; padding:4px;">&times;</th><th style="border:1px solid #10b981; padding:4px;">W</th><th style="border:1px solid #10b981; padding:4px;">W</th></tr>
        <tr><th style="border:1px solid #10b981; padding:4px; background:#ecfdf5;">w</th><td style="border:1px solid #cbd5e1; padding:4px;">Ww (Violet)</td><td style="border:1px solid #cbd5e1; padding:4px;">Ww (Violet)</td></tr>
        <tr><th style="border:1px solid #10b981; padding:4px; background:#ecfdf5;">w</th><td style="border:1px solid #cbd5e1; padding:4px;">Ww (Violet)</td><td style="border:1px solid #cbd5e1; padding:4px;">Ww (Violet)</td></tr>
      </table>
      <p style="font-size:0.85rem; font-weight:700; color:#065f46; margin:8px 0 0 0;">Result: 100% Violet Flowers &rarr; Unknown parent is homozygous dominant (WW).</p>
    </div>

    <div style="flex:1; min-width:260px; background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #cbd5e1;">
      <h5 style="color:#059669; margin:0 0 6px 0;">Case 2: If Unknown Plant is Heterozygous (Ww)</h5>
      <p style="font-size:0.88rem; margin:0 0 6px 0;">Cross: <strong>Ww &times; ww</strong></p>
      <table style="width:100%; border-collapse:collapse; text-align:center; font-size:0.88rem;">
        <tr style="background:#ecfdf5;"><th style="border:1px solid #10b981; padding:4px;">&times;</th><th style="border:1px solid #10b981; padding:4px;">W</th><th style="border:1px solid #10b981; padding:4px;">w</th></tr>
        <tr><th style="border:1px solid #10b981; padding:4px; background:#ecfdf5;">w</th><td style="border:1px solid #cbd5e1; padding:4px;">Ww (Violet)</td><td style="border:1px solid #cbd5e1; padding:4px;">ww (White)</td></tr>
        <tr><th style="border:1px solid #10b981; padding:4px; background:#ecfdf5;">w</th><td style="border:1px solid #cbd5e1; padding:4px;">Ww (Violet)</td><td style="border:1px solid #cbd5e1; padding:4px;">ww (White)</td></tr>
      </table>
      <p style="font-size:0.85rem; font-weight:700; color:#065f46; margin:8px 0 0 0;">Result: 50% Violet : 50% White (1 : 1) &rarr; Unknown parent is heterozygous (Ww).</p>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Precise definition of test cross (cross of unknown dominant phenotype with homozygous recessive)', '1 Mark'],
    ['Designing Case 1 (WW x ww) yielding 100% dominant phenotype', '1 Mark'],
    ['Designing Case 2 (Ww x ww) yielding 1 : 1 ratio confirming heterozygosity', '1 Mark']
  ]
));

// Q6
questions.push(createQCard(
  'c12b-ch4-q6',
  'Q6',
  'Exercises (NCERT Verbatim)',
  'Using a Punnett Square, workout the distribution of phenotypic features in the first filial generation after a cross between a homozygous female and a heterozygous male for a single locus.',
  `<p>Let the single locus be denoted by gene allele <strong>'A'</strong> (dominant) and <strong>'a'</strong> (recessive).</p>
  <p>The female is homozygous, which can be either <strong>Case I: Homozygous Dominant (AA)</strong> or <strong>Case II: Homozygous Recessive (aa)</strong>.</p>
  <p>The male parent is heterozygous: <strong>Aa</strong>.</p>

  <h5 style="color:#059669; margin:12px 0 6px 0;">Case I: Homozygous Dominant Female (AA) &times; Heterozygous Male (Aa)</h5>
  <ul>
    <li>Female Gametes: 100% <strong>A</strong></li>
    <li>Male Gametes: 50% <strong>A</strong>, 50% <strong>a</strong></li>
  </ul>
  <table style="width:280px; border-collapse:collapse; margin:8px 0; text-align:center;">
    <tr style="background:#ecfdf5; border:1px solid #10b981;">
      <th style="padding:6px; border:1px solid #10b981;">&#9792; \\ &#9794;</th>
      <th style="padding:6px; border:1px solid #10b981;">A (&frac12;)</th>
      <th style="padding:6px; border:1px solid #10b981;">a (&frac12;)</th>
    </tr>
    <tr>
      <th style="padding:6px; background:#ecfdf5; border:1px solid #10b981;">A (1)</th>
      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:700;">AA (Dominant)</td>
      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:700;">Aa (Dominant)</td>
    </tr>
  </table>
  <p><strong>F1 Phenotype:</strong> 100% show the <strong>Dominant Phenotype</strong> (Genotypes: 50% AA, 50% Aa).</p>

  <h5 style="color:#059669; margin:12px 0 6px 0;">Case II: Homozygous Recessive Female (aa) &times; Heterozygous Male (Aa) [Test Cross]</h5>
  <ul>
    <li>Female Gametes: 100% <strong>a</strong></li>
    <li>Male Gametes: 50% <strong>A</strong>, 50% <strong>a</strong></li>
  </ul>
  <table style="width:280px; border-collapse:collapse; margin:8px 0; text-align:center;">
    <tr style="background:#ecfdf5; border:1px solid #10b981;">
      <th style="padding:6px; border:1px solid #10b981;">&#9792; \\ &#9794;</th>
      <th style="padding:6px; border:1px solid #10b981;">A (&frac12;)</th>
      <th style="padding:6px; border:1px solid #10b981;">a (&frac12;)</th>
    </tr>
    <tr>
      <th style="padding:6px; background:#ecfdf5; border:1px solid #10b981;">a (1)</th>
      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:700;">Aa (Dominant)</td>
      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:700;">aa (Recessive)</td>
    </tr>
  </table>
  <p><strong>F1 Phenotype:</strong> 50% Dominant : 50% Recessive (Ratio = <strong>1 : 1</strong>).</p>`,
  '3 Marks',
  [
    ['Clear representation of genotypes for parents (AA or aa female, Aa male)', '0.5 Mark'],
    ['Punnett square and outcome for Case I (AA x Aa -> 100% dominant phenotype)', '1 Mark'],
    ['Punnett square and outcome for Case II (aa x Aa -> 1:1 dominant:recessive phenotype)', '1.5 Marks']
  ]
));

// Q7
questions.push(createQCard(
  'c12b-ch4-q7',
  'Q7',
  'Exercises (NCERT Verbatim)',
  `When a cross in made between tall plant with yellow seeds (TtYy) and tall plant with green seed (Ttyy), what proportions of phenotype in the offspring could be expected to be:
  <br>(a) tall and green.
  <br>(b) dwarf and green.`,
  `<p><strong>Parental Cross:</strong> Tall Yellow (<strong>TtYy</strong>) &times; Tall Green (<strong>Ttyy</strong>)</p>
  <p><strong>1. Gametes Produced:</strong></p>
  <ul>
    <li>Parent 1 (TtYy): <strong>TY, Ty, tY, ty</strong> (4 types in equal frequency of &frac14;)</li>
    <li>Parent 2 (Ttyy): <strong>Ty, ty</strong> (2 types in equal frequency of &frac12;)</li>
  </ul>

  <p><strong>2. Punnett Square (4 &times; 2 = 8 boxes):</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:10px 0; text-align:center; font-size:0.88rem;">
    <tr style="background:#ecfdf5; border:1px solid #10b981;">
      <th style="padding:6px; border:1px solid #10b981;">Gametes</th>
      <th style="padding:6px; border:1px solid #10b981;">TY (&frac14;)</th>
      <th style="padding:6px; border:1px solid #10b981;">Ty (&frac14;)</th>
      <th style="padding:6px; border:1px solid #10b981;">tY (&frac14;)</th>
      <th style="padding:6px; border:1px solid #10b981;">ty (&frac14;)</th>
    </tr>
    <tr>
      <th style="padding:6px; background:#ecfdf5; border:1px solid #10b981;">Ty (&frac12;)</th>
      <td style="padding:6px; border:1px solid #cbd5e1;">TTYy<br><strong>(Tall, Yellow)</strong></td>
      <td style="padding:6px; border:1px solid #cbd5e1;">TTyy<br><strong>(Tall, Green)</strong></td>
      <td style="padding:6px; border:1px solid #cbd5e1;">TtYy<br><strong>(Tall, Yellow)</strong></td>
      <td style="padding:6px; border:1px solid #cbd5e1;">Ttyy<br><strong>(Tall, Green)</strong></td>
    </tr>
    <tr>
      <th style="padding:6px; background:#ecfdf5; border:1px solid #10b981;">ty (&frac12;)</th>
      <td style="padding:6px; border:1px solid #cbd5e1;">TtYy<br><strong>(Tall, Yellow)</strong></td>
      <td style="padding:6px; border:1px solid #cbd5e1;">Ttyy<br><strong>(Tall, Green)</strong></td>
      <td style="padding:6px; border:1px solid #cbd5e1;">ttYy<br><strong>(Dwarf, Yellow)</strong></td>
      <td style="padding:6px; border:1px solid #cbd5e1;">ttyy<br><strong>(Dwarf, Green)</strong></td>
    </tr>
  </table>

  <p><strong>Phenotypic Analysis (Out of 8 total combinations):</strong></p>
  <ul>
    <li>Tall, Yellow: TTYy (1) + TtYy (2) = 3/8</li>
    <li><strong>Tall, Green:</strong> TTyy (1) + Ttyy (2) = <strong>3/8 (37.5%)</strong></li>
    <li>Dwarf, Yellow: ttYy (1) = 1/8</li>
    <li><strong>Dwarf, Green:</strong> ttyy (1) = <strong>1/8 (12.5%)</strong></li>
  </ul>
  <p><strong>Final Answers:</strong></p>
  <p><strong>(a) Proportion of Tall and Green:</strong> 3/8 or <strong>37.5%</strong><br>
  <strong>(b) Proportion of Dwarf and Green:</strong> 1/8 or <strong>12.5%</strong></p>`,
  '3 Marks',
  [
    ['Determining correct gametes for TtYy (4) and Ttyy (2)', '1 Mark'],
    ['Punnett square showing all 8 offspring combinations accurately', '1 Mark'],
    ['(a) Tall & green = 3/8; (b) Dwarf & green = 1/8 with correct deduction', '1 Mark']
  ]
));

// Q8
questions.push(createQCard(
  'c12b-ch4-q8',
  'Q8',
  'Exercises (NCERT Verbatim)',
  'Two heterozygous parents are crossed. If the two loci are linked what would be the distribution of phenotypic features in F1 generation for a dihybrid cross?',
  `<p>When two heterozygous parents (genotype: <em>AaBb</em>) are crossed and the two gene loci are <strong>linked</strong> (located on the same homologous chromosome pair):</p>
  <ol>
    <li><strong>Absence of Independent Assortment:</strong> The genes do not assort independently. The classical Mendelian dihybrid F2 ratio of <strong>9 : 3 : 3 : 1 will NOT be obtained</strong>.</li>
    <li><strong>Case 1: Complete Linkage (No crossing over):</strong>
      <ul>
        <li>If genes are in cis-coupling phase (<em>AB / ab</em>), gametes formed are only parental types: <em>AB</em> (50%) and <em>ab</em> (50%).</li>
        <li>Offspring produced upon crossing two heterozygous parents (<em>AB/ab &times; AB/ab</em>):
          <br>Genotypes: 1 <em>AB/AB</em> : 2 <em>AB/ab</em> : 1 <em>ab/ab</em>
          <br>Phenotypes: <strong>3 Parental Dominant (A_B_) : 1 Parental Double Recessive (aabb)</strong> (Ratio = <strong>3 : 1</strong>).
        </li>
        <li>Non-parental (recombinant) phenotypes are <strong>0%</strong>.</li>
      </ul>
    </li>
    <li><strong>Case 2: Incomplete Linkage (Crossing over occurs):</strong>
      <ul>
        <li>Parental phenotypes appear in a <strong>significantly higher proportion (&gt; 50%)</strong> than expected by independent assortment.</li>
        <li>Recombinant (non-parental) phenotypes appear in a <strong>lower frequency (&lt; 50%)</strong>, directly proportional to the physical distance between the linked loci on the chromosome.</li>
      </ul>
    </li>
  </ol>`,
  '3 Marks',
  [
    ['Explanation that linked genes violate independent assortment and deviate from 9:3:3:1', '1 Mark'],
    ['Complete linkage outcome: strictly parental phenotypes in 3:1 ratio (no recombinants)', '1 Mark'],
    ['Incomplete linkage outcome: parental phenotypes predominate (>50%) over recombinant types (<50%)', '1 Mark']
  ]
));

// Q9
questions.push(createQCard(
  'c12b-ch4-q9',
  'Q9',
  'Exercises (NCERT Verbatim)',
  'Briefly mention the contribution of T.H. Morgan in genetics.',
  `<p><strong>Thomas Hunt Morgan</strong> (awarded the Nobel Prize in Physiology or Medicine in 1933) is regarded as the <strong>Father of Experimental Genetics</strong>. His major contributions include:</p>
  <ol>
    <li><strong>Selection of <em>Drosophila melanogaster</em> (Fruit Fly) as Model Organism:</strong> Established fruit flies for genetic research due to their short 2-week life cycle, ease of synthetic medium culture, high progeny count, clear morphological sexual dimorphism, and easily visible hereditary variations under low-power microscopes.</li>
    <li><strong>Experimental Verification of Chromosomal Theory:</strong> Provided conclusive experimental proof for the Sutton-Boveri Chromosomal Theory of Inheritance.</li>
    <li><strong>Discovery of Sex-Linkage:</strong> Discovered X-linked inheritance in Drosophila (e.g., white-eye mutation discovered in males and tracing criss-cross inheritance).</li>
    <li><strong>Discovery of Linkage and Recombination:</strong> Demonstrated that genes located on the same chromosome do not assort independently, coining the term <strong>linkage</strong> to describe the physical association of genes on a chromosome, and <strong>recombination</strong> to describe generation of non-parental gene combinations due to crossing over.</li>
    <li><strong>Foundation of Chromosome Mapping:</strong> His student, <strong>Alfred Sturtevant</strong>, utilized Morgan's recombination frequencies as a measure of genetic distance to construct the first genetic linkage maps.</li>
  </ol>`,
  '3 Marks',
  [
    ['Experimental proof of Chromosomal Theory of Inheritance using Drosophila melanogaster', '1 Mark'],
    ['Discovery of sex-linked inheritance (white-eye mutation in fruit fly)', '1 Mark'],
    ['Formulation of concepts of Linkage and Recombination and laying groundwork for genetic mapping', '1 Mark']
  ]
));

// Q10
questions.push(createQCard(
  'c12b-ch4-q10',
  'Q10',
  'Exercises (NCERT Verbatim)',
  'What is pedigree analysis? Suggest how such an analysis, can be useful.',
  `<p><strong>Definition of Pedigree Analysis:</strong></p>
  <p><strong>Pedigree analysis</strong> is the systematic study and analysis of the inheritance of a specific trait, disease, or abnormality across multiple successive generations of a human family, represented in the form of a standardised genealogical family tree diagram.</p>

  <p><strong>Utility and Clinical Applications:</strong></p>
  <ol>
    <li><strong>Overcomes Limitations of Human Experimental Genetics:</strong> Controlled experimental breeding and hybridisation crosses are unethical and impossible in humans; furthermore, human families have small numbers of progeny. Pedigree charts allow geneticists to trace family history retrospectively.</li>
    <li><strong>Identification of Inheritance Patterns:</strong> Determines whether an inherited trait is:
      <ul>
        <li><strong>Autosomal dominant</strong> (e.g., Myotonic dystrophy)</li>
        <li><strong>Autosomal recessive</strong> (e.g., Sickle-cell anaemia, Cystic fibrosis)</li>
        <li><strong>Sex-linked (X-linked) recessive</strong> (e.g., Haemophilia, Red-green colour blindness)</li>
      </ul>
    </li>
    <li><strong>Genetic Counselling & Carrier Detection:</strong> Enables genetic counsellors to determine carrier status (heterozygous carriers) among prospective parents and assess the statistical probability/risk of conceiving an affected child.</li>
    <li><strong>Prenatal Decision Making:</strong> Guides informed decisions on prenatal amniocentesis, IVF with preimplantation genetic diagnosis (PGD), or family planning.</li>
  </ol>`,
  '3 Marks',
  [
    ['Clear definition of pedigree analysis (charting inheritance of traits across generations)', '1 Mark'],
    ['Overcoming limitations of human breeding experiments and identifying inheritance patterns (autosomal vs sex-linked, dominant vs recessive)', '1 Mark'],
    ['Application in genetic counselling, carrier detection, and assessing risk of congenital anomalies', '1 Mark']
  ]
));

// Q11
questions.push(createQCard(
  'c12b-ch4-q11',
  'Q11',
  'Exercises (NCERT Verbatim)',
  'How is sex determined in human beings?',
  `<p>Sex determination in human beings is based on the <strong>XX-XY chromosomal mechanism</strong>, characterized by <strong>male heterogamety</strong>.</p>
  <ol>
    <li><strong>Karyotypic Constitution:</strong>
      <ul>
        <li>Human somatic cells contain 23 pairs (46 chromosomes): <strong>22 pairs of autosomes</strong> and <strong>1 pair of sex chromosomes (allosomes)</strong>.</li>
        <li><strong>Females (Homogametic):</strong> Possess two identical X chromosomes (<strong>44 + XX</strong>). All ova produced during oogenesis carry an X chromosome (<strong>22 + X</strong>).</li>
        <li><strong>Males (Heterogametic):</strong> Possess one X and one significantly smaller Y chromosome (<strong>44 + XY</strong>). During spermatogenesis, males produce two distinct types of sperms in equal 50:50 proportion:
          <ul>
            <li>50% Gynomperms carrying <strong>22 + X</strong></li>
            <li>50% Androsperms carrying <strong>22 + Y</strong></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>Fertilisation & Sex Outcome:</strong>
      <ul>
        <li>If an ovum (22 + X) is fertilised by an X-bearing sperm (22 + X), the resulting zygote is <strong>44 + XX</strong>, which develops into a <strong>Female child</strong>.</li>
        <li>If an ovum (22 + X) is fertilised by a Y-bearing sperm (22 + Y), the resulting zygote is <strong>44 + XY</strong>, which develops into a <strong>Male child</strong> (due to presence of SRY gene on Y chromosome).</li>
      </ul>
    </li>
    <li><strong>Statistical Probability:</strong> Since X-bearing and Y-bearing sperms are produced in equal numbers, there is an exact <strong>50% (1 : 1) probability</strong> of having either a boy or a girl in each pregnancy.</li>
    <li><strong>Biological Fact:</strong> It is biologically the <strong>father's sperm</strong> that determines the sex of the child, not the mother.</li>
  </ol>`,
  '3 Marks',
  [
    ['Chromosomal constitution: Female (44+XX, homogametic) and Male (44+XY, heterogametic)', '1 Mark'],
    ['Sperm types (50% X and 50% Y) and fertilization outcomes (XX female, XY male)', '1 Mark'],
    ['Equal 50% statistical probability and establishing that father determines the sex of the child', '1 Mark']
  ]
));

// Q12
questions.push(createQCard(
  'c12b-ch4-q12',
  'Q12',
  'Exercises (NCERT Verbatim)',
  'A child has blood group O. If the father has blood group A and mother blood group B, work out the genotypes of the parents and the possible genotypes of the other offsprings.',
  `<p><strong>1. Determination of Parental Genotypes:</strong></p>
  <ul>
    <li>The child has blood group <strong>O</strong>. The genotype of blood group O is homozygous recessive: <strong>i i</strong>.</li>
    <li>The child receives one allele 'i' from the father and one allele 'i' from the mother.</li>
    <li>The father has blood group <strong>A</strong>. Therefore, the father must be heterozygous carrying the recessive allele: <strong>I<sup>A</sup>i</strong>.</li>
    <li>The mother has blood group <strong>B</strong>. Therefore, the mother must also be heterozygous carrying the recessive allele: <strong>I<sup>B</sup>i</strong>.</li>
  </ul>

  <p><strong>2. Genetic Cross & Punnett Square:</strong></p>
  <p>Cross: Father (<strong>I<sup>A</sup>i</strong>) &times; Mother (<strong>I<sup>B</sup>i</strong>)</p>
  <table style="width:300px; border-collapse:collapse; margin:10px 0; text-align:center;">
    <tr style="background:#ecfdf5; border:1px solid #10b981;">
      <th style="padding:6px; border:1px solid #10b981;">&#9794; \\ &#9792;</th>
      <th style="padding:6px; border:1px solid #10b981;">I<sup>B</sup> (&frac12;)</th>
      <th style="padding:6px; border:1px solid #10b981;">i (&frac12;)</th>
    </tr>
    <tr>
      <th style="padding:6px; background:#ecfdf5; border:1px solid #10b981;">I<sup>A</sup> (&frac12;)</th>
      <td style="padding:6px; border:1px solid #cbd5e1;"><strong>I<sup>A</sup>I<sup>B</sup></strong><br>(Blood Group AB)</td>
      <td style="padding:6px; border:1px solid #cbd5e1;"><strong>I<sup>A</sup>i</strong><br>(Blood Group A)</td>
    </tr>
    <tr>
      <th style="padding:6px; background:#ecfdf5; border:1px solid #10b981;">i (&frac12;)</th>
      <td style="padding:6px; border:1px solid #cbd5e1;"><strong>I<sup>B</sup>i</strong><br>(Blood Group B)</td>
      <td style="padding:6px; border:1px solid #cbd5e1;"><strong>i i</strong><br>(Blood Group O - given)</td>
    </tr>
  </table>

  <p><strong>3. Possible Genotypes and Phenotypes of Other Offspring:</strong></p>
  <ol>
    <li>Genotype <strong>I<sup>A</sup>I<sup>B</sup></strong> &rarr; Phenotype: <strong>Blood Group AB</strong> (Probability: 25%)</li>
    <li>Genotype <strong>I<sup>A</sup>i</strong> &rarr; Phenotype: <strong>Blood Group A</strong> (Probability: 25%)</li>
    <li>Genotype <strong>I<sup>B</sup>i</strong> &rarr; Phenotype: <strong>Blood Group B</strong> (Probability: 25%)</li>
  </ol>`,
  '3 Marks',
  [
    ['Deducing child genotype (ii) and heterozygous parental genotypes (I^A i and I^B i)', '1 Mark'],
    ['Punnett square showing all four allelic combinations', '1 Mark'],
    ['Correct listing of possible genotypes (I^A I^B, I^A i, I^B i) and phenotypes (AB, A, B) of other offspring', '1 Mark']
  ]
));

// Q13
questions.push(createQCard(
  'c12b-ch4-q13',
  'Q13',
  'Exercises (NCERT Verbatim)',
  `Explain the following terms with one example each:
  <br>(a) Co-dominance
  <br>(b) Incomplete dominance`,
  `<div style="display:flex; flex-direction:column; gap:16px;">
    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(a) Co-dominance</h5>
      <p><strong>Definition:</strong> Co-dominance is a phenomenon in which both alleles of a gene in a heterozygote express themselves equally and simultaneously in the phenotype. There is no dominant-recessive relationship, nor is there any blending of characters.</p>
      <p><strong>Example: ABO Blood Grouping in Humans:</strong></p>
      <ul>
        <li>The gene <em>I</em> controls ABO blood groups and has three alleles: <em>I<sup>A</sup>, I<sup>B</sup></em>, and <em>i</em>.</li>
        <li>Alleles <em>I<sup>A</sup></em> and <em>I<sup>B</sup></em> produce slightly different forms of surface sugar polymers on erythrocytes.</li>
        <li>When both <em>I<sup>A</sup></em> and <em>I<sup>B</sup></em> are present together in an individual (genotype <strong>I<sup>A</sup>I<sup>B</sup></strong>), both alleles express their respective sugars fully. As a consequence, the red blood cells have both A and B types of sugars, resulting in <strong>Blood Group AB</strong>.</li>
      </ul>
    </div>

    <div>
      <h5 style="color:#059669; margin:0 0 6px 0;">(b) Incomplete Dominance</h5>
      <p><strong>Definition:</strong> Incomplete dominance is an inheritance pattern in which neither allele of a gene is completely dominant over the other. The heterozygous F1 hybrid exhibits an intermediate, blending phenotype between the two homozygous parental phenotypes.</p>
      <p><strong>Example: Flower Colour in Snapdragon (<em>Antirrhinum majus</em>) or 4 O'clock Plant (<em>Mirabilis jalapa</em>):</strong></p>
      <ul>
        <li>A true-breeding red-flowered plant (<strong>RR</strong>) crossed with a true-breeding white-flowered plant (<strong>rr</strong>).</li>
        <li>The F1 hybrid (<strong>Rr</strong>) produces <strong>Pink flowers</strong> (intermediate between red and white).</li>
        <li>Selfing of F1 (Rr &times; Rr) produces F2 progeny with:
          <br><strong>Phenotypic ratio:</strong> 1 Red : 2 Pink : 1 White (<strong>1 : 2 : 1</strong>)
          <br><strong>Genotypic ratio:</strong> 1 RR : 2 Rr : 1 rr (<strong>1 : 2 : 1</strong>)
        </li>
        <li>Here, both phenotypic and genotypic ratios are identical (1:2:1), demonstrating that the recessive allele 'r' is not altered and segregates cleanly in F2.</li>
      </ul>
    </div>
  </div>`,
  '4 Marks',
  [
    ['(a) Co-dominance definition and ABO blood group AB (I^A I^B) explanation', '2 Marks'],
    ['(b) Incomplete dominance definition and Snapdragon/Mirabilis flower colour (RR red x rr white -> Rr pink) with 1:2:1 ratio', '2 Marks']
  ]
));

// Q14
questions.push(createQCard(
  'c12b-ch4-q14',
  'Q14',
  'Exercises (NCERT Verbatim)',
  'What is point mutation? Give one example.',
  `<p><strong>Definition:</strong></p>
  <p>A <strong>point mutation</strong> is a gene mutation that arises due to a change, substitution, insertion, or deletion of a <strong>single base pair</strong> in the DNA sequence of a gene.</p>

  <p><strong>Classic Example: Sickle-Cell Anaemia:</strong></p>
  <ol>
    <li>Sickle-cell anaemia is an autosomal recessive genetic disease caused by a point mutation (base substitution) in the gene coding for the &beta;-globin chain of haemoglobin located on chromosome 11.</li>
    <li>At the <strong>6th codon</strong> of the &beta;-globin gene, a transversion mutation converts the normal codon <strong>GAG to GUG</strong> (thymine substituted by adenine in the coding strand).</li>
    <li>This results in the substitution of <strong>Glutamic acid (Glu) by Valine (Val)</strong> at the sixth position of the &beta;-globin polypeptide chain:
      <div style="background:#f8fafc; padding:8px 12px; margin:8px 0; border-left:4px solid #059669; font-family:monospace;">
        Normal HbA gene: GAG (mRNA) &rarr; Glutamic Acid (Polar, hydrophilic)<br>
        Sickle HbS gene: GUG (mRNA) &rarr; Valine (Non-polar, hydrophobic)
      </div>
    </li>
    <li>Under low oxygen tension, the mutant haemoglobin (HbS) undergoes polymerisation, changing the shape of the erythrocyte from a flexible biconcave disc to an elongated, rigid <strong>sickle-like structure</strong>, leading to microvascular occlusion and haemolytic anaemia.</li>
  </ol>`,
  '2 Marks',
  [
    ['Accurate definition of point mutation (change/substitution of a single base pair in DNA)', '1 Mark'],
    ['Detailed example: Sickle-cell anaemia (GAG to GUG transversion at 6th codon of beta-globin replacing glutamic acid with valine)', '1 Mark']
  ]
));

// Q15
questions.push(createQCard(
  'c12b-ch4-q15',
  'Q15',
  'Exercises (NCERT Verbatim)',
  'Who had proposed the chromosomal theory of the inheritance?',
  `<p>The <strong>Chromosomal Theory of Inheritance</strong> was proposed independently in 1902 by:</p>
  <div style="background:#f0fdf4; padding:12px; border:1px solid #86efac; border-radius:8px; margin:10px 0; font-size:1.05rem; font-weight:700; color:#065f46;">
    Walter Sutton and Theodor Boveri (1902)
  </div>
  <p><strong>Core Concept:</strong></p>
  <ul>
    <li>They noticed that the behaviour of chromosomes during meiosis (gamete formation) was parallel to the behaviour of Mendelian factors (genes).</li>
    <li>They united chromosomal segregation during anaphase I & II with Mendelian principles and concluded that genes are linear physical entities carried upon chromosomes.</li>
    <li><em>Note:</em> Experimental verification of this theory was subsequently provided by <strong>Thomas Hunt Morgan</strong> and his colleagues using <em>Drosophila melanogaster</em>.</li>
  </ul>`,
  '1 Mark',
  [
    ['Identification of Walter Sutton and Theodor Boveri (1902)', '1 Mark']
  ]
));

// Q16
questions.push(createQCard(
  'c12b-ch4-q16',
  'Q16',
  'Exercises (NCERT Verbatim)',
  'Mention any two autosomal genetic disorders with their symptoms.',
  `<p>Two well-known autosomal genetic disorders are:</p>
  
  <div style="display:flex; flex-direction:column; gap:14px; margin-top:10px;">
    <!-- Disorder 1 -->
    <div style="background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #059669;">
      <h5 style="color:#059669; margin:0 0 4px 0;">1. Down's Syndrome (Autosomal Aneuploidy / Trisomy 21)</h5>
      <p style="margin:0 0 6px 0;"><strong>Genetic Basis:</strong> Presence of an additional copy of chromosome number 21 (karyotype: <strong>47, +21</strong>) due to non-disjunction of chromosomes during gametogenesis. First described by Langdon Down in 1866.</p>
      <p style="margin:0; font-weight:700; color:#334155;">Key Clinical Symptoms:</p>
      <ul style="margin:4px 0 0 0;">
        <li>Short stature with small round head.</li>
        <li>Furrowed tongue and partially open mouth.</li>
        <li>Broad palm with characteristic single transverse palmar crease (Simian crease).</li>
        <li>Physical, psychomotor, and mental development is retarded.</li>
      </ul>
    </div>

    <!-- Disorder 2 -->
    <div style="background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #059669;">
      <h5 style="color:#059669; margin:0 0 4px 0;">2. Phenylketonuria (PKU) (Autosomal Recessive Inborn Error of Metabolism)</h5>
      <p style="margin:0 0 6px 0;"><strong>Genetic Basis:</strong> Mutation in the gene coding for the hepatic enzyme <strong>phenylalanine hydroxylase</strong> located on chromosome 12.</p>
      <p style="margin:0; font-weight:700; color:#334155;">Key Clinical Symptoms:</p>
      <ul style="margin:4px 0 0 0;">
        <li>Inability to convert amino acid phenylalanine into tyrosine, causing accumulation of phenylalanine and its conversion to phenylpyruvic acid.</li>
        <li>Accumulation of these neurotoxic derivatives in brain leads to <strong>severe mental retardation</strong>.</li>
        <li>Excretion of phenyl derivatives in urine due to poor kidney tubular reabsorption.</li>
        <li>Hypopigmentation of hair and skin.</li>
      </ul>
    </div>
  </div>`,
  '3 Marks',
  [
    ['Disorder 1: Down syndrome (Trisomy 21) with genetic basis and symptoms (furrowed tongue, short stature, simian crease, mental retardation)', '1.5 Marks'],
    ['Disorder 2: Phenylketonuria / Sickle cell anaemia with genetic basis and symptoms (mental retardation, hypopigmentation / anaemia, RBC sickling)', '1.5 Marks']
  ]
));

saveChapter(
  4,
  'Principles of Inheritance and Variation',
  svgDiagram,
  'NCERT Exercises (16 Verbatim Questions)',
  questions,
  'Molecular Basis of Inheritance'
);
