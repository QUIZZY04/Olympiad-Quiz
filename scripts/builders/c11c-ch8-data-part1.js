/**
 * NCERT Class 11 Chemistry Chapter 8: Organic Chemistry - Some Basic Principles and Techniques
 * Part 1: Q8.1 to Q8.20 (Hybridisation, IUPAC, Isomerism, Electronic Effects, Intermediates)
 */

function getPart1Questions() {
  return [
    {
      id: "c11c-ch8-q1",
      ncertRef: "8.1",
      marks: "5 Marks",
      questionHtml: "What are the hybridisation states of each carbon atom in the following compounds?<br>(a) $\\text{CH}_2=\\text{C}=\\text{O}$<br>(b) $\\text{CH}_3\\text{CH}=\\text{CH}_2$<br>(c) $(\\text{CH}_3)_2\\text{CO}$<br>(d) $\\text{CH}_2=\\text{CHCN}$<br>(e) $\\text{C}_6\\text{H}_6$.",
      solutionStepsHtml: `<p><b>Rule:</b><br>
• Carbon with 4 $\\sigma$ bonds (0 $\\pi$ bonds) $\\rightarrow \\mathbf{sp^3}$ (tetrahedral, $109.5^\\circ$)<br>
• Carbon with 3 $\\sigma$ bonds (1 $\\pi$ bond) $\\rightarrow \\mathbf{sp^2}$ (trigonal planar, $120^\\circ$)<br>
• Carbon with 2 $\\sigma$ bonds (2 $\\pi$ bonds) $\\rightarrow \\mathbf{sp}$ (linear, $180^\\circ$)</p>
<p><b>(a) Ketene ($\\overset{1}{\\text{C}}\\text{H}_2=\\overset{2}{\\text{C}}=\\text{O}$):</b><br>
• $\\text{C}_1$ forms $3\\ \\sigma$ bonds ($2$ with $\\text{H}$, $1$ with $\\text{C}$) and $1\\ \\pi$ bond $\\implies \\mathbf{sp^2}$<br>
• $\\text{C}_2$ forms $2\\ \\sigma$ bonds ($1$ with $\\text{C}$, $1$ with $\\text{O}$) and $2\\ \\pi$ bonds $\\implies \\mathbf{sp}$</p>
<p><b>(b) Propene ($\\overset{3}{\\text{C}}\\text{H}_3-\\overset{2}{\\text{C}}\\text{H}=\\overset{1}{\\text{C}}\\text{H}_2$):</b><br>
• $\\text{C}_3$: $4\\ \\sigma$ bonds $\\implies \\mathbf{sp^3}$<br>
• $\\text{C}_2$: $3\\ \\sigma$ bonds, $1\\ \\pi$ bond $\\implies \\mathbf{sp^2}$<br>
• $\\text{C}_1$: $3\\ \\sigma$ bonds, $1\\ \\pi$ bond $\\implies \\mathbf{sp^2}$</p>
<p><b>(c) Acetone ($(\\overset{1,3}{\\text{C}}\\text{H}_3)_2\\overset{2}{\\text{C}}=\\text{O}$):</b><br>
• The two methyl carbons ($\\text{C}_1$ and $\\text{C}_3$) form $4\\ \\sigma$ bonds each $\\implies \\mathbf{sp^3}$<br>
• Carbonyl carbon ($\\text{C}_2$) forms $3\\ \\sigma$ bonds and $1\\ \\pi$ bond ($=\\text{O}$) $\\implies \\mathbf{sp^2}$</p>
<p><b>(d) Acrylonitrile ($\\overset{3}{\\text{C}}\\text{H}_2=\\overset{2}{\\text{C}}\\text{H}-\\overset{1}{\\text{C}}\\equiv\\text{N}$):</b><br>
• $\\text{C}_3$: $3\\ \\sigma$ bonds, $1\\ \\pi$ bond $\\implies \\mathbf{sp^2}$<br>
• $\\text{C}_2$: $3\\ \\sigma$ bonds, $1\\ \\pi$ bond $\\implies \\mathbf{sp^2}$<br>
• $\\text{C}_1$ (nitrile carbon): $2\\ \\sigma$ bonds ($1$ to $\\text{C}$, $1$ to $\\text{N}$) and $2\\ \\pi$ bonds $\\implies \\mathbf{sp}$</p>
<p><b>(e) Benzene ($\\text{C}_6\\text{H}_6$):</b><br>
All 6 ring carbon atoms form $3\\ \\sigma$ bonds ($2$ with adjacent carbons, $1$ with hydrogen) and share delocalised $\\pi$ bonds $\\implies$ <b>All 6 carbons are $\\mathbf{sp^2}$ hybridised</b>.</p>`,
      rubricRows: [
        { key: "Part (a): C1 is sp2, C2 is sp", marks: "1 Mark" },
        { key: "Part (b): C3 is sp3, C2 and C1 are sp2", marks: "1 Mark" },
        { key: "Part (c): Methyl carbons sp3, Carbonyl carbon sp2", marks: "1 Mark" },
        { key: "Part (d): C3 is sp2, C2 is sp2, C1 is sp", marks: "1 Mark" },
        { key: "Part (e): All 6 carbons in benzene are sp2", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q2",
      ncertRef: "8.2",
      marks: "5 Marks",
      questionHtml: "Indicate the $\\sigma$ and $\\pi$ bonds in the following molecules:<br>(a) $\\text{C}_6\\text{H}_6$<br>(b) $\\text{C}_6\\text{H}_{12}$<br>(c) $\\text{CH}_2\\text{Cl}_2$<br>(d) $\\text{CH}_2=\\text{C}=\\text{CH}_2$<br>(e) $\\text{CH}_3\\text{NO}_2$<br>(f) $\\text{HCONHCH}_3$.",
      solutionStepsHtml: `<p><b>Rule:</b> Every single bond is $1\\ \\sigma$ bond; every double bond has $1\\ \\sigma + 1\\ \\pi$ bond; every triple bond has $1\\ \\sigma + 2\\ \\pi$ bonds.</p>
<p><b>(a) Benzene ($\\text{C}_6\\text{H}_6$):</b><br>
$6\\ \\text{C}-\\text{C}\\ \\sigma$ bonds $+ 6\\ \\text{C}-\\text{H}\\ \\sigma$ bonds $= \\mathbf{12\\ \\sigma\\text{ bonds}}$, and $\\mathbf{3\\ \\pi\\text{ bonds}}$ (delocalised).</p>
<p><b>(b) Cyclohexane ($\\text{C}_6\\text{H}_{12}$):</b><br>
$6\\ \\text{C}-\\text{C}\\ \\sigma$ bonds $+ 12\\ \\text{C}-\\text{H}\\ \\sigma$ bonds $= \\mathbf{18\\ \\sigma\\text{ bonds}}$, and $\\mathbf{0\\ \\pi\\text{ bonds}}$.</p>
<p><b>(c) Dichloromethane ($\\text{CH}_2\\text{Cl}_2$):</b><br>
$2\\ \\text{C}-\\text{H}\\ \\sigma$ bonds $+ 2\\ \\text{C}-\\text{Cl}\\ \\sigma$ bonds $= \\mathbf{4\\ \\sigma\\text{ bonds}}$, and $\\mathbf{0\\ \\pi\\text{ bonds}}$.</p>
<p><b>(d) Allene ($\\text{CH}_2=\\text{C}=\\text{CH}_2$):</b><br>
$4\\ \\text{C}-\\text{H}\\ \\sigma$ bonds $+ 2\\ \\text{C}-\\text{C}\\ \\sigma$ bonds $= \\mathbf{6\\ \\sigma\\text{ bonds}}$, and $2\\ \\text{C}=\\text{C}\\ \\pi$ bonds $= \\mathbf{2\\ \\pi\\text{ bonds}}$.</p>
<p><b>(e) Nitromethane ($\\text{CH}_3\\text{NO}_2$):</b><br>
$3\\ \\text{C}-\\text{H}\\ \\sigma$ bonds $+ 1\\ \\text{C}-\\text{N}\\ \\sigma$ bond $+ 2\\ \\text{N}-\\text{O}\\ \\sigma$ bonds $= \\mathbf{6\\ \\sigma\\text{ bonds}}$, and $1\\ \\text{N}=\\text{O}\\ \\pi$ bond $= \\mathbf{1\\ \\pi\\text{ bond}}$.</p>
<p><b>(f) N-Methylformamide ($\\text{HCONHCH}_3$):</b><br>
$1\\ \\text{C}-\\text{H} + 1\\ \\text{C}=\\text{O}(\\sigma) + 1\\ \\text{C}-\\text{N} + 1\\ \\text{N}-\\text{H} + 1\\ \\text{N}-\\text{C} + 3\\ \\text{C}-\\text{H} = \\mathbf{8\\ \\sigma\\text{ bonds}}$, and $1\\ \\text{C}=\\text{O}\\ \\pi$ bond $= \\mathbf{1\\ \\pi\\text{ bond}}$.</p>`,
      rubricRows: [
        { key: "Part (a): 12 sigma, 3 pi bonds", marks: "1 Mark" },
        { key: "Part (b): 18 sigma, 0 pi bonds", marks: "1 Mark" },
        { key: "Part (c): 4 sigma, 0 pi bonds", marks: "0.5 Mark" },
        { key: "Part (d): 6 sigma, 2 pi bonds", marks: "1 Mark" },
        { key: "Part (e): 6 sigma, 1 pi bond", marks: "0.75 Mark" },
        { key: "Part (f): 8 sigma, 1 pi bond", marks: "0.75 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q3",
      ncertRef: "8.3",
      marks: "3 Marks",
      questionHtml: "Write bond-line formulas for:<br>(a) Isopropyl alcohol<br>(b) 2,3-Dimethylbutanal<br>(c) Heptan-4-one.",
      solutionStepsHtml: `<p><b>Representation in Bond-Line Notation:</b> Carbon-carbon bonds are drawn as lines/zig-zags; vertices and line ends represent carbon atoms with appropriate number of hydrogens; heteroatoms and functional groups are explicitly shown.</p>
<p><b>(a) Isopropyl alcohol (Propan-2-ol, $(\\text{CH}_3)_2\\text{CHOH}$):</b><br>
A 3-carbon chain (a 'V' shape) with an $-\\text{OH}$ group attached at the central vertex (carbon 2):<br>
$$\\begin{matrix} & \\text{OH} & \\\\ & | & \\\\ / & \\backslash & \\end{matrix}$$
<b>Formula:</b> $\\text{CH}_3-\\text{CH}(\\text{OH})-\\text{CH}_3$</p>
<p><b>(b) 2,3-Dimethylbutanal ($(\\text{CH}_3)_2\\text{CH}-\\text{CH}(\\text{CH}_3)-\\text{CHO}$):</b><br>
A 4-carbon chain ending in an aldehyde group ($=\\text{O}$ and $-\\text{H}$ on $\\text{C}_1$), with two methyl branch lines at $\\text{C}_2$ and $\\text{C}_3$.</p>
<p><b>(c) Heptan-4-one ($\\text{CH}_3\\text{CH}_2\\text{CH}_2-\\text{CO}-\\text{CH}_2\\text{CH}_2\\text{CH}_3$):</b><br>
A symmetrical 7-carbon zig-zag chain with a double-bonded oxygen ($=\\text{O}$) at the 4th (central) carbon vertex.</p>`,
      rubricRows: [
        { key: "Part (a): Correct bond-line for propan-2-ol", marks: "1 Mark" },
        { key: "Part (b): Correct bond-line for 2,3-dimethylbutanal", marks: "1 Mark" },
        { key: "Part (c): Correct bond-line for heptan-4-one", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q4",
      ncertRef: "8.4",
      marks: "5 Marks",
      questionHtml: "Give the IUPAC names of the following compounds:<br>(a) $\\text{CH}_3\\text{CH}(\\text{Cl})\\text{CH}_2\\text{CH}_3$<br>(b) $\\text{CH}_3\\text{CH}_2\\text{CH}=\\text{CHCHO}$<br>(c) $\\text{CH}_3\\text{CH}(\\text{OH})\\text{CH}_2\\text{CH}_2\\text{COOH}$<br>(d) $\\text{CH}_3\\text{COCH}_2\\text{COCH}_3$<br>(e) $\\text{CH}_3\\text{CH}_2\\text{CH}(\\text{CH}_3)\\text{CH}_2\\text{CH}(\\text{C}_2\\text{H}_5)\\text{CH}_3$<br>(f) $\\text{Cl}_2\\text{CHCH}_2\\text{OH}$.",
      solutionStepsHtml: `<p><b>(a) $\\overset{1}{\\text{CH}_3}\\overset{2}{\\text{CH}}(\\text{Cl})\\overset{3}{\\text{CH}_2}\\overset{4}{\\text{CH}_3}$:</b><br>
Longest chain = 4 carbons (butane); chlorine substituent at carbon 2 $\\implies$ <b>2-Chlorobutane</b>.</p>
<p><b>(b) $\\overset{5}{\\text{CH}_3}\\overset{4}{\\text{CH}_2}\\overset{3}{\\text{CH}}=\\overset{2}{\\text{CH}}\\overset{1}{\\text{C}}\\text{HO}$:</b><br>
Principal functional group is aldehyde ($-\\text{CHO}$ at $\\text{C}_1$); double bond between $\\text{C}_2$ and $\\text{C}_3$; 5-carbon chain $\\implies$ <b>Pent-2-en-1-al</b> (or <b>Pent-2-enal</b>).</p>
<p><b>(c) $\\overset{5}{\\text{CH}_3}\\overset{4}{\\text{CH}}(\\text{OH})\\overset{3}{\\text{CH}_2}\\overset{2}{\\text{CH}_2}\\overset{1}{\\text{C}}\\text{OOH}$:</b><br>
Carboxylic acid has highest priority ($-\\text{COOH}$ at $\\text{C}_1$); $-\\text{OH}$ acts as substituent (hydroxy) at $\\text{C}_4$; 5 carbons $\\implies$ <b>4-Hydroxypentanoic acid</b>.</p>
<p><b>(d) $\\overset{1}{\\text{CH}_3}\\overset{2}{\\text{C}}\\text{O}\\overset{3}{\\text{CH}_2}\\overset{4}{\\text{C}}\\text{O}\\overset{5}{\\text{CH}_3}$:</b><br>
Symmetrical 5-carbon chain with two ketone groups at carbons 2 and 4 $\\implies$ <b>Pentane-2,4-dione</b>.</p>
<p><b>(e) $\\text{CH}_3-\\text{CH}_2-\\text{CH}(\\text{CH}_3)-\\text{CH}_2-\\text{CH}(\\text{C}_2\\text{H}_5)-\\text{CH}_3$:</b><br>
Expanding $-\\text{C}_2\\text{H}_5$ as $-\\text{CH}_2-\\text{CH}_3$ gives the longest chain of 7 carbons (heptane):<br>
$$\\overset{7}{\\text{CH}_3}-\\overset{6}{\\text{CH}_2}-\\overset{5}{\\text{CH}}(\\text{CH}_3)-\\overset{4}{\\text{CH}_2}-\\overset{3}{\\text{CH}}(\\text{CH}_3)-\\overset{2}{\\text{CH}_2}-\\overset{1}{\\text{CH}_3}$$
Numbering from right gives substituents at $\\text{C}_3$ and $\\text{C}_5$ (locant set 3,5 from both sides) $\\implies$ <b>3,5-Dimethylheptane</b>.</p>
<p><b>(f) $\\overset{2}{\\text{Cl}_2\\text{CH}}-\\overset{1}{\\text{CH}_2}\\text{OH}$:</b><br>
Principal functional group is alcohol ($-\\text{OH}$ at $\\text{C}_1$); two chlorine atoms at $\\text{C}_2$ $\\implies$ <b>2,2-Dichloroethan-1-ol</b> (or <b>2,2-Dichloroethanol</b>).</p>`,
      rubricRows: [
        { key: "Part (a): 2-Chlorobutane", marks: "0.75 Mark" },
        { key: "Part (b): Pent-2-en-1-al", marks: "0.75 Mark" },
        { key: "Part (c): 4-Hydroxypentanoic acid", marks: "1 Mark" },
        { key: "Part (d): Pentane-2,4-dione", marks: "0.75 Mark" },
        { key: "Part (e): 3,5-Dimethylheptane (longest chain correctly identified)", marks: "1 Mark" },
        { key: "Part (f): 2,2-Dichloroethanol", marks: "0.75 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q5",
      ncertRef: "8.5",
      marks: "4 Marks",
      questionHtml: "Which of the following represents the correct IUPAC name for the compounds concerned?<br>(a) 2,2-Dimethylpentane or 2-Dimethylpentane<br>(b) 2,4,7-Trimethyloctane or 2,5,7-Trimethyloctane<br>(c) 2-Chloro-4-methylpentane or 4-Chloro-2-methylpentane<br>(d) But-3-yn-1-ol or But-4-ol-1-yne.",
      solutionStepsHtml: `<p><b>(a) 2,2-Dimethylpentane:</b><br>
<b>Correct: 2,2-Dimethylpentane.</b><br>
Reason: Every substituent must have a separate locant number. Since there are two methyl groups at carbon 2, both locants must be specified ('2,2-' rather than '2-').</p>
<p><b>(b) 2,4,7-Trimethyloctane:</b><br>
<b>Correct: 2,4,7-Trimethyloctane.</b><br>
Reason: Lowest locant rule. Comparing the two numbering sets from both ends: $(2, 4, 7)$ vs $(2, 5, 7)$. At the first point of difference, $4 < 5$. Therefore, the set $(2, 4, 7)$ is preferred.</p>
<p><b>(c) 2-Chloro-4-methylpentane:</b><br>
<b>Correct: 2-Chloro-4-methylpentane.</b><br>
Reason: Numbering from both ends gives the locant set $(2, 4)$. When locant sets are identical from both ends, the substituent that comes first alphabetically (<b>C</b>hloro before <b>M</b>ethyl) gets the lower number (position 2).</p>
<p><b>(d) But-3-yn-1-ol:</b><br>
<b>Correct: But-3-yn-1-ol.</b><br>
Reason: The principal functional group is alcohol ($-\\text{OH}$), which has higher priority than an alkyne (triple bond). The chain must be numbered to give $-\\text{OH}$ the lowest locant ($\text{C}_1$).</p>`,
      rubricRows: [
        { key: "Part (a): 2,2-Dimethylpentane with two-locant rule", marks: "1 Mark" },
        { key: "Part (b): 2,4,7-Trimethyloctane with lowest set of locants", marks: "1 Mark" },
        { key: "Part (c): 2-Chloro-4-methylpentane with alphabetical priority", marks: "1 Mark" },
        { key: "Part (d): But-3-yn-1-ol with functional group priority rule", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q6",
      ncertRef: "8.6",
      marks: "3 Marks",
      questionHtml: "Draw formulas for the first five members of each homologous series beginning with the following compounds:<br>(a) $\\text{H}-\\text{COOH}$<br>(b) $\\text{CH}_3\\text{COCH}_3$<br>(c) $\\text{H}-\\text{CH}=\\text{CH}_2$.",
      solutionStepsHtml: `<p><i>Homologous series members differ sequentially by a $-\\text{CH}_2-$ unit ($14\\text{ u}$).</i></p>
<p><b>(a) Carboxylic Acids (starting with $\\text{HCOOH}$):</b><br>
1. $\\text{H}-\\text{COOH}$ (Methanoic acid)<br>
2. $\\text{CH}_3-\\text{COOH}$ (Ethanoic acid)<br>
3. $\\text{CH}_3\\text{CH}_2-\\text{COOH}$ (Propanoic acid)<br>
4. $\\text{CH}_3(\\text{CH}_2)_2-\\text{COOH}$ (Butanoic acid)<br>
5. $\\text{CH}_3(\\text{CH}_2)_3-\\text{COOH}$ (Pentanoic acid)</p>
<p><b>(b) Ketones (starting with propanone, $\\text{CH}_3\\text{COCH}_3$):</b><br>
1. $\\text{CH}_3\\text{COCH}_3$ (Propan-2-one)<br>
2. $\\text{CH}_3\\text{COCH}_2\\text{CH}_3$ (Butan-2-one)<br>
3. $\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CH}_3$ (Pentan-2-one)<br>
4. $\\text{CH}_3\\text{CO}(\\text{CH}_2)_3\\text{CH}_3$ (Hexan-2-one)<br>
5. $\\text{CH}_3\\text{CO}(\\text{CH}_2)_4\\text{CH}_3$ (Heptan-2-one)</p>
<p><b>(c) Alkenes (starting with ethene, $\\text{CH}_2=\\text{CH}_2$):</b><br>
1. $\\text{CH}_2=\\text{CH}_2$ (Ethene)<br>
2. $\\text{CH}_3-\\text{CH}=\\text{CH}_2$ (Propene)<br>
3. $\\text{CH}_3\\text{CH}_2-\\text{CH}=\\text{CH}_2$ (But-1-ene)<br>
4. $\\text{CH}_3(\\text{CH}_2)_2-\\text{CH}=\\text{CH}_2$ (Pent-1-ene)<br>
5. $\\text{CH}_3(\\text{CH}_2)_3-\\text{CH}=\\text{CH}_2$ (Hex-1-ene)</p>`,
      rubricRows: [
        { key: "Part (a): 5 carboxylic acid homologues", marks: "1 Mark" },
        { key: "Part (b): 5 ketone homologues", marks: "1 Mark" },
        { key: "Part (c): 5 alkene homologues", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q7",
      ncertRef: "8.7",
      marks: "4 Marks",
      questionHtml: "Give condensed and bond-line structural formulas and identify the functional group(s) present, if any, for:<br>(a) 2,2,4-Trimethylpentane<br>(b) 2-Hydroxy-1,2,3-propanetricarboxylic acid<br>(c) Hexanedial.",
      solutionStepsHtml: `<p><b>(a) 2,2,4-Trimethylpentane (Isooctane):</b><br>
• <b>Condensed Formula:</b> $(\\text{CH}_3)_3\\text{C}-\\text{CH}_2-\\text{CH}(\\text{CH}_3)_2$<br>
• <b>Bond-Line:</b> A 5-carbon horizontal chain with two vertical branch dashes at carbon 2 and one branch dash at carbon 4.<br>
• <b>Functional Group:</b> None (Saturated hydrocarbon / alkane).</p>
<p><b>(b) 2-Hydroxy-1,2,3-propanetricarboxylic acid (Citric Acid):</b><br>
• <b>Condensed Formula:</b> $\\text{HOOC}-\\text{CH}_2-\\text{C}(\\text{OH})(\\text{COOH})-\\text{CH}_2-\\text{COOH}$<br>
• <b>Functional Groups:</b><br>
1. Carboxylic acid group ($-\\text{COOH}$, three groups)<br>
2. Alcoholic hydroxyl group ($-\\text{OH}$, tertiary alcohol)</p>
<p><b>(c) Hexanedial:</b><br>
• <b>Condensed Formula:</b> $\\text{OHC}-(\\text{CH}_2)_4-\\text{CHO}$<br>
• <b>Bond-Line:</b> A 6-carbon zig-zag chain terminated with $=\\text{O}$ at both ends.<br>
• <b>Functional Group:</b> Aldehydic group ($-\\text{CHO}$, two groups / dialdehyde).</p>`,
      rubricRows: [
        { key: "Part (a): Isooctane condensed formula, bond-line, and alkane classification", marks: "1 Mark" },
        { key: "Part (b): Citric acid formula, and identification of -COOH and -OH", marks: "1.5 Marks" },
        { key: "Part (c): Hexanedial formula, and identification of -CHO groups", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q8",
      ncertRef: "8.8",
      marks: "3 Marks",
      questionHtml: "Identify the functional groups in the following compounds:<br>(a) $\\text{CHO}-\\text{CH}=\\text{CH}-\\text{CH}(\\text{OH})-\\text{CH}_3$<br>(b) $\\text{CH}_3\\text{CH}_2\\text{NHCH}_2\\text{CH}_2\\text{OCH}_3$<br>(c) $\\text{CH}_3\\text{CH}_2\\text{NO}_2$.",
      solutionStepsHtml: `<p><b>(a) $\\text{CHO}-\\text{CH}=\\text{CH}-\\text{CH}(\\text{OH})-\\text{CH}_3$:</b><br>
1. Aldehyde group ($-\\text{CHO}$)<br>
2. Carbon-carbon double bond (alkenic group, $>\text{C}=\text{C}<$)<br>
3. Secondary alcohol group ($-\\text{OH}$)</p>
<p><b>(b) $\\text{CH}_3\\text{CH}_2\\text{NHCH}_2\\text{CH}_2\\text{OCH}_3$:</b><br>
1. Secondary amine group ($-\\text{NH}-$, $2^\\circ\\text{ amine}$)<br>
2. Ether linkage ($-\\text{O}-$, methoxy group)</p>
<p><b>(c) $\\text{CH}_3\\text{CH}_2\\text{NO}_2$:</b><br>
Nitro group ($-\\text{NO}_2$)</p>`,
      rubricRows: [
        { key: "Part (a): Aldehyde, alkene, and secondary alcohol identified", marks: "1 Mark" },
        { key: "Part (b): Secondary amine and ether identified", marks: "1 Mark" },
        { key: "Part (c): Nitro group identified", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q9",
      ncertRef: "8.9",
      marks: "2 Marks",
      questionHtml: "Which of the two: $\\text{O}_2\\text{NCH}_2\\text{CH}_2\\text{O}^-$ or $\\text{CH}_3\\text{CH}_2\\text{O}^-$ is expected to be more stable and why?",
      solutionStepsHtml: `<p><b>Answer:</b> $\\mathbf{O_2NCH_2CH_2O^-}$ is much more stable than $\\text{CH}_3\\text{CH}_2\\text{O}^-$.</p>
<p><b>Reason:</b><br>
1. In $\\text{O}_2\\text{NCH}_2\\text{CH}_2\\text{O}^-$, the nitro group ($-\\text{NO}_2$) possesses a powerful <b>electron-withdrawing inductive effect ($-I$ effect)</b>. It pulls electron density away from the negatively charged oxygen atom, dispersing the negative charge over a larger molecular volume and greatly stabilizing the alkoxide anion.<br>
2. In contrast, in ethoxide ion ($\\text{CH}_3\\text{CH}_2\\text{O}^-$), the ethyl group has an <b>electron-donating inductive effect ($+I$ effect)</b>. It pushes electrons toward the oxygen atom, intensifying the negative charge and destabilizing the ion.</p>`,
      rubricRows: [
        { key: "Identifying O2NCH2CH2O- as the more stable anion", marks: "1 Mark" },
        { key: "Justification via -I charge dispersal vs +I charge intensification", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q10",
      ncertRef: "8.10",
      marks: "2 Marks",
      questionHtml: "Explain why alkyl groups act as electron donors when attached to a $\\pi$ system.",
      solutionStepsHtml: `<p>Alkyl groups attached to an unsaturated $\\pi$ system (e.g., an alkene or benzene ring) donate electron density through two distinct mechanisms:</p>
<p>1. <b>Hyperconjugation (No-Bond Resonance / Baker-Nathan Effect):</b><br>
The $\\sigma$ electrons of the $\\text{C}-\\text{H}$ bond of the alkyl group (specifically at the $\\alpha$-carbon) overlap with the adjacent empty/partially filled $p$-orbital or the $\\pi^*$ antibonding orbital of the unsaturated system:<br>
$$\\text{H}-\\text{C}-\\text{C}=\\text{C} \\longleftrightarrow \\text{H}^+\\ \\text{C}=\\text{C}-\\text{C}^-$$
This delocalisation of $\\sigma$ electrons directly increases the electron density of the $\\pi$ system.</p>
<p>2. <b>Inductive Effect ($+I$ effect):</b><br>
$sp^3$ hybridised alkyl carbons are less electronegative than the $sp^2$ hybridised carbons of the $\\pi$ system, creating an electron push toward the double bond or aromatic ring.</p>`,
      rubricRows: [
        { key: "Hyperconjugation (sigma-pi orbital overlap / no-bond resonance) explained", marks: "1 Mark" },
        { key: "+I inductive effect due to sp3 vs sp2 electronegativity difference", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q11",
      ncertRef: "8.11",
      marks: "5 Marks",
      questionHtml: "Draw the resonance structures for the following compounds. Show the electron shift using curved-arrow notation:<br>(a) $\\text{C}_6\\text{H}_5\\text{OH}$<br>(b) $\\text{C}_6\\text{H}_5\\text{NO}_2$<br>(c) $\\text{CH}_3\\text{CH}=\\text{CHCHO}$<br>(d) $\\text{C}_6\\text{H}_5-\\text{CHO}$<br>(e) $\\text{C}_6\\text{H}_5-\\text{CH}_2^+$<br>(f) $\\text{CH}_3\\text{CH}=\\text{CH}\\text{CH}_2^+$.",
      solutionStepsHtml: `<p><b>(a) Phenol ($\\text{C}_6\\text{H}_5\\text{OH}$):</b><br>
The lone pair on oxygen delocalises into the ring ($+R$ effect), creating negative charge density at ortho and para positions:<br>
I (Neutral) $\\longleftrightarrow$ II (Ortho negative, $\\text{O}^+$) $\\longleftrightarrow$ III (Para negative, $\\text{O}^+$) $\\longleftrightarrow$ IV (Ortho' negative, $\\text{O}^+$) $\\longleftrightarrow$ V (Kekulé form).</p>
<p><b>(b) Nitrobenzene ($\\text{C}_6\\text{H}_5\\text{NO}_2$):</b><br>
The nitro group withdraws electron density from the ring ($-R$ effect), creating positive charge at ortho and para positions:<br>
I $\\longleftrightarrow$ II (Ortho positive) $\\longleftrightarrow$ III (Para positive) $\\longleftrightarrow$ IV (Ortho' positive) $\\longleftrightarrow$ V.</p>
<p><b>(c) Crotonaldehyde ($\\text{CH}_3\\text{CH}=\\text{CH}-\\text{CH}=\\text{O}$):</b><br>
$$\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}=\\text{O} \\longleftrightarrow \\text{CH}_3-\\overset{+}{\\text{C}}\\text{H}-\\text{CH}=\\text{CH}-\\text{O}^-$$</p>
<p><b>(d) Benzaldehyde ($\\text{C}_6\\text{H}_5\\text{CHO}$):</b><br>
Aldehyde group is electron-withdrawing by $-R$ effect; positive charges appear at ortho and para positions of the benzene ring.</p>
<p><b>(e) Benzyl carbocation ($\\text{C}_6\\text{H}_5\\text{CH}_2^+$):</b><br>
The empty $p$-orbital on the exocyclic carbon accepts $\\pi$ electrons from the ring; positive charge is delocalised over the ortho and para positions (4 resonance contributors).</p>
<p><b>(f) Allylic carbocation ($\\text{CH}_3\\text{CH}=\\text{CH}-\\text{CH}_2^+$):</b><br>
$$\\text{CH}_3-\\text{CH}=\\text{CH}-\\overset{+}{\\text{C}}\\text{H}_2 \\longleftrightarrow \\text{CH}_3-\\overset{+}{\\text{C}}\\text{H}-\\text{CH}=\\text{CH}_2$$</p>`,
      rubricRows: [
        { key: "Phenol +R resonance structures with ortho/para negative charges", marks: "1 Mark" },
        { key: "Nitrobenzene and Benzaldehyde -R resonance with ortho/para positive charges", marks: "1 Mark" },
        { key: "Crotonaldehyde conjugated system resonance", marks: "1 Mark" },
        { key: "Benzyl cation delocalisation across ring carbons", marks: "1 Mark" },
        { key: "Allylic carbocation two equivalent resonance contributors", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q12",
      ncertRef: "8.12",
      marks: "3 Marks",
      questionHtml: "What are electrophiles and nucleophiles? Explain with examples.",
      solutionStepsHtml: `<p><b>1. Electrophiles (Electron-seeking / Lewis acids):</b><br>
• <i>Definition:</i> Reagents that are electron-deficient and seek an electron pair from electron-rich centres to form a covalent bond.<br>
• <i>Positively charged electrophiles:</i> $\\text{H}^+, \\text{Cl}^+, \\text{Br}^+, \\text{NO}_2^+, \\text{CH}_3^+, \\text{R}_3\\text{C}^+$<br>
• <i>Neutral electrophiles (incomplete octet or polar centre):</i> $\\text{BF}_3, \\text{AlCl}_3, \\text{SO}_3, \\text{FeCl}_3, :\\text{CCl}_2$ (carbene), carbonyl carbon ($>\\overset{\\delta+}{\\text{C}}=\\text{O}$).</p>
<p><b>2. Nucleophiles (Nucleus-seeking / Lewis bases):</b><br>
• <i>Definition:</i> Reagents that are electron-rich, possessing at least one unshared lone pair of electrons or a $\\pi$ bond, which they donate to an electron-deficient centre.<br>
• <i>Negatively charged nucleophiles:</i> $\\text{OH}^-, \\text{OR}^-, \\text{CN}^-, \\text{Cl}^-, \\text{Br}^-, \\text{I}^-, \\text{CH}_3^-, \\text{NH}_2^-$<br>
• <i>Neutral nucleophiles with lone pairs:</i> $\\text{H}_2\\text{O}:, :\\text{NH}_3, \\text{R}-\\text{OH}:, \\text{R}-\\text{NH}_2, \\text{R}-\\text{SH}$.</p>`,
      rubricRows: [
        { key: "Electrophile definition and neutral/charged examples", marks: "1.5 Marks" },
        { key: "Nucleophile definition and neutral/charged examples", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q13",
      ncertRef: "8.13",
      marks: "3 Marks",
      questionHtml: "Identify the reagents shown in bold in the following equations as nucleophiles or electrophiles:<br>(a) $\\text{CH}_3\\text{COOH} + \\mathbf{HO^-} \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$<br>(b) $\\text{CH}_3\\text{COCH}_3 + \\mathbf{\\bar{C}N} \\rightarrow (\\text{CH}_3)_2\\text{C}(\\text{CN})(\\text{OH})$<br>(c) $\\text{C}_6\\text{H}_6 + \\mathbf{CH_3\\overset{+}{C}O} \\rightarrow \\text{C}_6\\text{H}_5\\text{COCH}_3 + \\text{H}^+$.",
      solutionStepsHtml: `<p><b>(a) $\\mathbf{HO^-}$:</b><br>
<b>Nucleophile:</b> Hydroxide ion carries a negative charge and unshared lone pairs; it attacks the acidic proton of acetic acid by donating an electron pair.</p>
<p><b>(b) $\\mathbf{\\bar{C}N}$:</b><br>
<b>Nucleophile:</b> Cyanide ion carries an unshared pair of electrons on carbon and acts as a nucleophile, attacking the electrophilic carbonyl carbon of acetone in nucleophilic addition.</p>
<p><b>(c) $\\mathbf{CH_3\\overset{+}{C}O}$ (Acetylium ion):</b><br>
<b>Electrophile:</b> Positively charged acylium carbocation generated in Friedel-Crafts acylation; it seeks electrons and attacks the $\\pi$-electron cloud of the benzene ring.</p>`,
      rubricRows: [
        { key: "Part (a): HO- identified as nucleophile", marks: "1 Mark" },
        { key: "Part (b): CN- identified as nucleophile", marks: "1 Mark" },
        { key: "Part (c): CH3CO+ identified as electrophile", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q14",
      ncertRef: "8.14",
      marks: "4 Marks",
      questionHtml: "Classify the following reactions into one of the reaction types studied:<br>(a) $\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{HS}^- \\rightarrow \\text{CH}_3\\text{CH}_2\\text{SH} + \\text{Br}^-$<br>(b) $(\\text{CH}_3)_2\\text{C}=\\text{CH}_2 + \\text{HCl} \\rightarrow (\\text{CH}_3)_2\\text{CCl}-\\text{CH}_3$<br>(c) $\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{HO}^- \\rightarrow \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + \\text{Br}^-$<br>(d) $(\\text{CH}_3)_3\\text{C}-\\text{CH}_2\\text{OH} + \\text{HBr} \\rightarrow (\\text{CH}_3)_2\\text{C}(\\text{Br})\\text{CH}_2\\text{CH}_3 + \\text{H}_2\\text{O}$.",
      solutionStepsHtml: `<p><b>(a) $\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{HS}^- \\rightarrow \\text{CH}_3\\text{CH}_2\\text{SH} + \\text{Br}^-$:</b><br>
<b>Nucleophilic Substitution Reaction ($\\text{S}_\\text{N}2$):</b> The nucleophile $\\text{HS}^-$ replaces the leaving bromide ion ($\\text{Br}^-$).</p>
<p><b>(b) $(\\text{CH}_3)_2\\text{C}=\\text{CH}_2 + \\text{HCl} \\rightarrow (\\text{CH}_3)_2\\text{CCl}-\\text{CH}_3$:</b><br>
<b>Electrophilic Addition Reaction:</b> $\\text{HCl}$ adds across the carbon-carbon double bond according to Markovnikov's rule.</p>
<p><b>(c) $\\text{CH}_3\\text{CH}_2\\text{Br} + \\text{HO}^- \\rightarrow \\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + \\text{Br}^-$:</b><br>
<b>Elimination Reaction ($\\beta$-Elimination / Dehydrohalogenation):</b> A proton and a bromide ion are eliminated from adjacent carbons to form an alkene.</p>
<p><b>(d) $(\\text{CH}_3)_3\\text{C}-\\text{CH}_2\\text{OH} + \\text{HBr} \\rightarrow (\\text{CH}_3)_2\\text{C}(\\text{Br})\\text{CH}_2\\text{CH}_3 + \\text{H}_2\\text{O}$:</b><br>
<b>Nucleophilic Substitution Reaction accompanied by Rearrangement:</b> Formation of neopentyl carbocation followed by a $1,2$-methyl shift (rearrangement) from a less stable $1^\\circ$ carbocation to a more stable $3^\\circ$ carbocation prior to nucleophilic attack by $\\text{Br}^-$.</p>`,
      rubricRows: [
        { key: "Part (a): Nucleophilic substitution", marks: "1 Mark" },
        { key: "Part (b): Electrophilic addition", marks: "1 Mark" },
        { key: "Part (c): Elimination reaction (dehydrohalogenation)", marks: "1 Mark" },
        { key: "Part (d): Substitution with carbocation rearrangement", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q15",
      ncertRef: "8.15",
      marks: "3 Marks",
      questionHtml: "What is the relationship between the members of following pairs of structures? Are they structural or stereoisomers or identical?<br>(a) Maleic acid and Fumaric acid<br>(b) Gauche and Anti butane conformations<br>(c) 1-Chloropropane and 2-Chloropropane.",
      solutionStepsHtml: `<p><b>(a) Maleic acid (cis) and Fumaric acid (trans):</b><br>
<b>Geometrical isomers (Stereoisomers / Diastereomers):</b> They have identical structural formula ($\\text{HOOC}-\\text{CH}=\\text{CH}-\\text{COOH}$) and connectivity, but differ in the spatial orientation of carboxylic groups across the rigid $\\text{C}=\\text{C}$ double bond.</p>
<p><b>(b) Gauche and Anti butane conformations:</b><br>
<b>Conformational isomers (Conformers / Rotamers):</b> They are different spatial arrangements of the exact same molecule resulting from free rotation around the central carbon-carbon single bond ($\\text{C}_2-\\text{C}_3$). They are interconvertible at room temperature.</p>
<p><b>(c) 1-Chloropropane and 2-Chloropropane:</b><br>
<b>Position isomers (Structural isomers):</b> They have the same molecular formula ($\\text{C}_3\\text{H}_7\\text{Cl}$) and identical carbon skeleton, but differ in the position of the chloro substituent ($\text{C}_1$ vs $\text{C}_2$).</p>`,
      rubricRows: [
        { key: "Part (a): Geometrical / stereoisomers (cis vs trans)", marks: "1 Mark" },
        { key: "Part (b): Conformational isomers (rotational conformers)", marks: "1 Mark" },
        { key: "Part (c): Position / structural isomers", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q16",
      ncertRef: "8.16",
      marks: "4 Marks",
      questionHtml: "For the following compounds, write structural formulas and IUPAC names for all possible isomers having the number of double or triple bond as indicated:<br>(a) $\\text{C}_4\\text{H}_8$ (one double bond)<br>(b) $\\text{C}_5\\text{H}_8$ (one triple bond).",
      solutionStepsHtml: `<p><b>(a) Isomers of $\\text{C}_4\\text{H}_8$ with one double bond (Alkenes):</b><br>
1. $\\text{CH}_3-\\text{CH}_2-\\text{CH}=\\text{CH}_2$ &rarr; <b>But-1-ene</b><br>
2. $\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_3$ &rarr; <b>But-2-ene</b> (exists as <i>cis</i>-But-2-ene and <i>trans</i>-But-2-ene)<br>
3. $\\text{CH}_2=\\text{C}(\\text{CH}_3)_2$ &rarr; <b>2-Methylprop-1-ene</b> (Isobutene)</p>
<p><b>(b) Isomers of $\\text{C}_5\\text{H}_8$ with one triple bond (Alkynes):</b><br>
1. $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{C}\\equiv\\text{CH}$ &rarr; <b>Pent-1-yne</b><br>
2. $\\text{CH}_3-\\text{CH}_2-\\text{C}\\equiv\\text{C}-\\text{CH}_3$ &rarr; <b>Pent-2-yne</b><br>
3. $(\\text{CH}_3)_2\\text{CH}-\\text{C}\\equiv\\text{CH}$ &rarr; <b>3-Methylbut-1-yne</b></p>`,
      rubricRows: [
        { key: "Part (a): But-1-ene, But-2-ene, and 2-Methylprop-1-ene with structures", marks: "2 Marks" },
        { key: "Part (b): Pent-1-yne, Pent-2-yne, and 3-Methylbut-1-yne with structures", marks: "2 Marks" }
      ]
    },
    {
      id: "c11c-ch8-q17",
      ncertRef: "8.17",
      marks: "3 Marks",
      questionHtml: "Which of the following carbocations is most stable and why?<br>$(\\text{CH}_3)_3\\text{C}^+$, $(\\text{CH}_3)_2\\text{CH}^+$, $\\text{CH}_3\\text{CH}_2^+$, $\\text{CH}_3^+$.",
      solutionStepsHtml: `<p><b>Stability Order:</b><br>
$$\\mathbf{(\\text{CH}_3)_3\\text{C}^+ > (\\text{CH}_3)_2\\text{CH}^+ > \\text{CH}_3\\text{CH}_2^+ > \\text{CH}_3^+}$$
$$\\text{Tertiary } (3^\\circ) > \\text{Secondary } (2^\\circ) > \\text{Primary } (1^\\circ) > \\text{Methyl}$$
<b>Most Stable:</b> <b>$(\\text{CH}_3)_3\\text{C}^+$ (tert-Butyl carbocation)</b>.</p>
<p><b>Reasons:</b><br>
1. <b>Hyperconjugation:</b> The stability of a carbocation increases with the number of $\\alpha$-hydrogen atoms capable of participating in $\\sigma-\\pi$ hyperconjugative delocalisation:<br>
• $(\\text{CH}_3)_3\\text{C}^+$ has $3$ methyl groups $\\implies \\mathbf{9\\ \\alpha\\text{-hydrogens}}$ (9 hyperconjugative structures)<br>
• $(\\text{CH}_3)_2\\text{CH}^+$ has $2$ methyl groups $\\implies \\mathbf{6\\ \\alpha\\text{-hydrogens}}$<br>
• $\\text{CH}_3\\text{CH}_2^+$ has $1$ methyl group $\\implies \\mathbf{3\\ \\alpha\\text{-hydrogens}}$<br>
• $\\text{CH}_3^+$ has $\\mathbf{0\\ \\alpha\\text{-hydrogens}}$<br>
2. <b>Inductive Effect ($+I$ effect):</b> Alkyl groups are electron-donating. Three methyl groups disperse the positive charge on the central carbon atom to the greatest extent.</p>`,
      rubricRows: [
        { key: "Correct stability order 3° > 2° > 1° > methyl", marks: "1 Mark" },
        { key: "Hyperconjugation explanation with alpha-hydrogen count (9 > 6 > 3 > 0)", marks: "1 Mark" },
        { key: "+I inductive charge dispersal explanation", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q18",
      ncertRef: "8.18",
      marks: "3 Marks",
      questionHtml: "The best and latest technique for isolation, purification and separation of organic compounds is: chromatography. Explain the principle of column chromatography.",
      solutionStepsHtml: `<p><b>Principle of Column Chromatography:</b><br>
Column chromatography is based on the principle of <b>differential adsorption</b> of components of a mixture on a stationary solid adsorbent phase.</p>
<p>1. <b>Setup:</b> A glass tube (column) is packed with a solid adsorbent (such as alumina, $\\text{Al}_2\\text{O}_3$, or silica gel, $\\text{SiO}_2$) forming the <b>stationary phase</b>. A plug of cotton or glass wool is placed at the bottom.</p>
<p>2. <b>Application & Elution:</b> The mixture to be separated is dissolved in a minimum amount of solvent and applied to the top of the column. A suitable eluent (liquid mobile phase) is then poured continuously down the column.</p>
<p>3. <b>Separation:</b> As the solvent flows down under gravity, components travel at different rates depending on their affinity for the stationary phase:<br>
• The component that is <b>more strongly adsorbed</b> moves down slowly and is held near the top.<br>
• The component that is <b>less strongly adsorbed</b> (more soluble in mobile phase) moves down rapidly and is eluted first.<br>
Distinct colored or visual bands form and are collected separately at the bottom outlet.</p>`,
      rubricRows: [
        { key: "Core principle: differential adsorption between mobile and stationary phases", marks: "1 Mark" },
        { key: "Description of stationary phase (silica gel/alumina) and mobile phase eluent", marks: "1 Mark" },
        { key: "Explanation of separation rate and selective collection of eluted bands", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q19",
      ncertRef: "8.19",
      marks: "2 Marks",
      questionHtml: "Explain the principle of paper chromatography.",
      solutionStepsHtml: `<p><b>Principle of Paper Chromatography:</b><br>
Paper chromatography is primarily a form of <b>partition chromatography</b>.</p>
<p>• <b>Stationary Phase:</b> A specially designed chromatography paper contains water trapped within its cellulose fibres, which acts as the stationary liquid phase.<br>
• <b>Mobile Phase:</b> A strip of paper spotted with the mixture at the baseline is suspended in an organic solvent (or solvent mixture) acting as the mobile phase.<br>
• <b>Separation Mechanism:</b> As the mobile phase ascends the paper by capillary action, the components of the mixture partition continuously between the stationary water phase and the moving solvent phase. Components with higher partition coefficient in the mobile phase move faster up the paper, resulting in distinct spots at characteristic $R_f$ values.</p>`,
      rubricRows: [
        { key: "Identification of partition chromatography mechanism", marks: "1 Mark" },
        { key: "Role of trapped water in cellulose as stationary phase and capillary migration", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch8-q20",
      ncertRef: "8.20",
      marks: "2 Marks",
      questionHtml: "Why is nitric acid added to sodium extract before adding silver nitrate for testing halogens?",
      solutionStepsHtml: `<p><b>Reason:</b><br>
During the preparation of Lassaigne's sodium fusion extract, if the organic compound contains nitrogen and/or sulphur, sodium cyanide ($\\text{NaCN}$) and/or sodium sulphide ($\\text{Na}_2\\text{S}$) are formed.<br>
If $\\text{AgNO}_3$ were added directly without acidification with $\\text{HNO}_3$, the cyanide and sulphide ions would react with silver ions to form precipitates:<br>
$$\\text{NaCN} + \\text{AgNO}_3 \\rightarrow \\text{AgCN}\\downarrow \\text{ (white ppt)} + \\text{NaNO}_3$$
$$\\text{Na}_2\\text{S} + 2\\text{AgNO}_3 \\rightarrow \\text{Ag}_2\\text{S}\\downarrow \\text{ (black ppt)} + 2\\text{NaNO}_3$$
These white and black precipitates interfere with and mask the identification of silver halides ($\\text{AgCl, AgBr, AgI}$).</p>
<p>Boiling the extract with concentrated $\\text{HNO}_3$ decomposes and expels these interfering ions as volatile gases:<br>
$$\\text{NaCN} + \\text{HNO}_3 \\rightarrow \\text{NaNO}_3 + \\text{HCN}\\uparrow$$
$$\\text{Na}_2\\text{S} + 2\\text{HNO}_3 \\rightarrow 2\\text{NaNO}_3 + \\text{H}_2\\text{S}\\uparrow$$</p>`,
      rubricRows: [
        { key: "Interference of NaCN (white AgCN) and Na2S (black Ag2S) precipitates", marks: "1 Mark" },
        { key: "Decomposition and expulsion of HCN and H2S gases upon boiling with HNO3", marks: "1 Mark" }
      ]
    }
  ];
}

module.exports = { getPart1Questions };
