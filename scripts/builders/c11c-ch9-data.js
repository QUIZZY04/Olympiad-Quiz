/**
 * NCERT Class 11 Chemistry Chapter 9: Hydrocarbons Data
 * All 25 Verbatim Questions (9.1 to 9.25) with Official CBSE Marking Schemes
 */

function getQuestions() {
  return [
    {
      id: "c11c-ch9-q1",
      ncertRef: "9.1",
      marks: "3 Marks",
      questionHtml: "How do you account for the formation of ethane during chlorination of methane?",
      solutionStepsHtml: `<p><b>Mechanism of Free Radical Chlorination of Methane:</b><br>
The chlorination of methane in the presence of diffuse sunlight or ultraviolet light proceeds through a free radical chain mechanism consisting of three distinct steps:</p>
<p>1. <b>Chain Initiation Step:</b> Homolytic fission of the chlorine-chlorine bond generates chlorine free radicals:<br>
$$\\text{Cl}-\\text{Cl} \\xrightarrow{h\\nu} \\dot{\\text{Cl}} + \\dot{\\text{Cl}}$$</p>
<p>2. <b>Chain Propagation Steps:</b><br>
(a) $\\dot{\\text{Cl}} + \\text{CH}_4 \\rightarrow \\dot{\\text{C}}\\text{H}_3 + \\text{HCl}$<br>
(b) $\\dot{\\text{C}}\\text{H}_3 + \\text{Cl}_2 \\rightarrow \\text{CH}_3\\text{Cl} + \\dot{\\text{Cl}}$</p>
<p>3. <b>Chain Termination Step:</b><br>
As the reaction progresses, collisions between two reactive free radicals consume the radicals and terminate the chain. When two methyl free radicals collide with each other, they combine to form a molecule of <b>ethane</b>:<br>
$$\\mathbf{\\dot{\\text{C}}\\text{H}_3 + \\dot{\\text{C}}\\text{H}_3 \\rightarrow \\text{CH}_3-\\text{CH}_3 \\text{ (Ethane)}}$$
This coupling of two methyl radicals in the chain termination step accounts for the presence of ethane as a minor by-product in the chlorination of methane.</p>`,
      rubricRows: [
        { key: "Identification of free-radical chain mechanism", marks: "1 Mark" },
        { key: "Propagation step generating methyl free radical (•CH3)", marks: "1 Mark" },
        { key: "Termination step coupling equation: •CH3 + •CH3 -> C2H6", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q2",
      ncertRef: "9.2",
      marks: "5 Marks",
      questionHtml: "Write IUPAC names of the following compounds:<br>(a) $\\text{CH}_3\\text{CH}=\\text{C}(\\text{CH}_3)_2$<br>(b) $\\text{CH}_2=\\text{CH}-\\text{C}\\equiv\\text{C}-\\text{CH}_3$<br>(c) $\\text{C}_6\\text{H}_5-\\text{CH}_2-\\text{CH}_2-\\text{CH}=\\text{CH}_2$<br>(d) $\\text{o-H}_3\\text{C}-\\text{C}_6\\text{H}_4-\\text{OH}$<br>(e) $4\\text{-Ethyl-1-fluoro-2-nitrobenzene}$<br>(f) $\\text{CH}_3(\\text{CH}_2)_4\\text{CH}(\\text{CH}_3)_2$.",
      solutionStepsHtml: `<p><b>(a) $\\overset{4}{\\text{CH}_3}\\overset{3}{\\text{CH}}=\\overset{2}{\\text{C}}(\\text{CH}_3)_2$:</b><br>
Longest chain containing the double bond has 4 carbons (butene); numbering from the right gives double bond at $\\text{C}_2$ and methyl substituent at $\\text{C}_2$ $\\implies$ <b>2-Methylbut-2-ene</b>.</p>
<p><b>(b) $\\overset{1}{\\text{CH}_2}=\\overset{2}{\\text{CH}}-\\overset{3}{\\text{C}}\\equiv\\overset{4}{\\text{C}}-\\overset{5}{\\text{CH}_3}$:</b><br>
Contains both double and triple bonds equidistant from the ends (locants 1 and 3 from left vs 1 and 3 from right). When there is a choice, the double bond gets the lower locant $\\text{C}_1$ $\\implies$ <b>Pent-1-en-3-yne</b>.</p>
<p><b>(c) $\\overset{4}{\\text{C}}_6\\text{H}_5-\\overset{4}{\\text{CH}_2}-\\overset{3}{\\text{CH}_2}-\\overset{2}{\\text{CH}}=\\overset{1}{\\text{CH}_2}$:</b><br>
Principal aliphatic chain has 4 carbons containing the double bond at $\\text{C}_1$; phenyl group is a substituent at carbon 4 $\\implies$ <b>4-Phenylbut-1-ene</b>.</p>
<p><b>(d) $2\\text{-Methylphenol}$:</b><br>
Benzene ring with $-\\text{OH}$ as principal functional group at $\\text{C}_1$ and methyl at $\\text{C}_2$ $\\implies$ <b>2-Methylphenol</b> (common name: <i>o</i>-cresol).</p>
<p><b>(e) 4-Ethyl-1-fluoro-2-nitrobenzene:</b><br>
Substituents at positions 1 (fluoro), 2 (nitro), and 4 (ethyl) arranged in alphabetical order $\\implies$ <b>4-Ethyl-1-fluoro-2-nitrobenzene</b>.</p>
<p><b>(f) $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}_2-\\text{CH}(\\text{CH}_3)_2$:</b><br>
Longest continuous chain has 7 carbons (heptane) with a methyl group at position 2 $\\implies$ <b>2-Methylheptane</b>.</p>`,
      rubricRows: [
        { key: "Part (a): 2-Methylbut-2-ene", marks: "1 Mark" },
        { key: "Part (b): Pent-1-en-3-yne (double bond priority)", marks: "1 Mark" },
        { key: "Part (c): 4-Phenylbut-1-ene", marks: "1 Mark" },
        { key: "Part (d): 2-Methylphenol", marks: "0.5 Mark" },
        { key: "Part (e): 4-Ethyl-1-fluoro-2-nitrobenzene", marks: "0.75 Mark" },
        { key: "Part (f): 2-Methylheptane", marks: "0.75 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q3",
      ncertRef: "9.3",
      marks: "4 Marks",
      questionHtml: "For the following compounds, write structural formulas and IUPAC names for all possible isomers having the number of double or triple bond as indicated:<br>(a) $\\text{C}_4\\text{H}_8$ (one double bond)<br>(b) $\\text{C}_5\\text{H}_8$ (one triple bond).",
      solutionStepsHtml: `<p><b>(a) Isomers of $\\text{C}_4\\text{H}_8$ containing one double bond:</b><br>
1. $\\text{CH}_3-\\text{CH}_2-\\text{CH}=\\text{CH}_2$ &rarr; <b>But-1-ene</b><br>
2. $\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_3$ &rarr; <b>But-2-ene</b> (exists as stereoisomers <i>cis</i>-But-2-ene and <i>trans</i>-But-2-ene)<br>
3. $\\text{CH}_2=\\text{C}(\\text{CH}_3)_2$ &rarr; <b>2-Methylprop-1-ene</b> (Isobutylene)</p>
<p><b>(b) Isomers of $\\text{C}_5\\text{H}_8$ containing one triple bond:</b><br>
1. $\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{C}\\equiv\\text{CH}$ &rarr; <b>Pent-1-yne</b> (terminal alkyne)<br>
2. $\\text{CH}_3-\\text{CH}_2-\\text{C}\\equiv\\text{C}-\\text{CH}_3$ &rarr; <b>Pent-2-yne</b> (internal alkyne)<br>
3. $(\\text{CH}_3)_2\\text{CH}-\\text{C}\\equiv\\text{CH}$ &rarr; <b>3-Methylbut-1-yne</b> (branched terminal alkyne)</p>`,
      rubricRows: [
        { key: "Part (a): 3 structural alkene isomers with IUPAC names", marks: "2 Marks" },
        { key: "Part (b): 3 alkyne isomers with IUPAC names", marks: "2 Marks" }
      ]
    },
    {
      id: "c11c-ch9-q4",
      ncertRef: "9.4",
      marks: "4 Marks",
      questionHtml: "Write IUPAC names of the products obtained by the ozonolysis of the following compounds:<br>(i) Pent-2-ene<br>(ii) 3,4-Dimethylhept-3-ene<br>(iii) 2-Ethylbut-1-ene<br>(iv) 1-Phenylbut-1-ene.",
      solutionStepsHtml: `<p><i>Principle: Ozonolysis followed by reductive cleavage with $\\text{Zn}/\\text{H}_2\\text{O}$ cleaves the $\\text{C}=\\text{C}$ double bond, converting each carbon of the double bond into a carbonyl group ($=\\text{O}$).</i></p>
<p><b>(i) Pent-2-ene ($\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_2-\\text{CH}_3$):</b><br>
Cleavage yields ethanal and propanal:<br>
$$\\mathbf{\\text{Ethanal} \\quad (\\text{CH}_3\\text{CHO}) \\quad \\text{and} \\quad \\text{Propanal} \\quad (\\text{CH}_3\\text{CH}_2\\text{CHO})}$$</p>
<p><b>(ii) 3,4-Dimethylhept-3-ene ($\\text{CH}_3-\\text{CH}_2-\\text{C}(\\text{CH}_3)=\\text{C}(\\text{CH}_3)-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$):</b><br>
Cleavage yields butan-2-one and pentan-2-one:<br>
$$\\mathbf{\\text{Butan-2-one} \\quad (\\text{CH}_3\\text{COCH}_2\\text{CH}_3) \\quad \\text{and} \\quad \\text{Pentan-2-one} \\quad (\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CH}_3)}$$</p>
<p><b>(iii) 2-Ethylbut-1-ene ($\\text{CH}_2=\\text{C}(\\text{C}_2\\text{H}_5)_2$):</b><br>
Cleavage yields methanal and pentan-3-one:<br>
$$\\mathbf{\\text{Methanal} \\quad (\\text{HCHO}) \\quad \\text{and} \\quad \\text{Pentan-3-one} \\quad (\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3)}$$</p>
<p><b>(iv) 1-Phenylbut-1-ene ($\\text{C}_6\\text{H}_5-\\text{CH}=\\text{CH}-\\text{CH}_2-\\text{CH}_3$):</b><br>
Cleavage yields benzaldehyde and propanal:<br>
$$\\mathbf{\\text{Benzaldehyde} \\quad (\\text{C}_6\\text{H}_5\\text{CHO}) \\quad \\text{and} \\quad \\text{Propanal} \\quad (\\text{CH}_3\\text{CH}_2\\text{CHO})}$$</p>`,
      rubricRows: [
        { key: "Part (i): Ethanal and Propanal", marks: "1 Mark" },
        { key: "Part (ii): Butan-2-one and Pentan-2-one", marks: "1 Mark" },
        { key: "Part (iii): Methanal and Pentan-3-one", marks: "1 Mark" },
        { key: "Part (iv): Benzaldehyde and Propanal", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q5",
      ncertRef: "9.5",
      marks: "3 Marks",
      questionHtml: "An alkene 'A' on ozonolysis gives a mixture of ethanal and pentan-3-one. Write structure and IUPAC name of 'A'.",
      solutionStepsHtml: `<p><b>Deducing the Alkene Structure from Ozonolysis Products:</b><br>
To determine the parent alkene, write the structures of the two carbonyl products with their carbonyl oxygen atoms facing each other, then remove both oxygen atoms and join the carbons with a double bond ($=\\text{C}=\\text{C}=$):</p>
<p>• Product 1: Ethanal $\\rightarrow \\text{CH}_3-\\text{CH}=\\mathbf{O}$<br>
• Product 2: Pentan-3-one $\\rightarrow \\mathbf{O}=\\text{C}(\\text{CH}_2\\text{CH}_3)_2$</p>
<p>Joining the fragments at the carbonyl carbons:<br>
$$\\text{CH}_3-\\overset{2}{\\text{CH}}=\\overset{3}{\\text{C}}(\\text{CH}_2\\text{CH}_3)_2$$
Expanding the ethyl groups:<br>
$$\\overset{1}{\\text{CH}_3}-\\overset{2}{\\text{CH}}=\\overset{3}{\\text{C}}(\\text{CH}_2\\text{CH}_3)-\\overset{4}{\\text{CH}_2}-\\overset{5}{\\text{CH}_3}$$
The longest continuous carbon chain containing the double bond has 5 carbons (pentene); the double bond is between $\\text{C}_2$ and $\\text{C}_3$, with an ethyl group at $\\text{C}_3$.</p>
<p><b>IUPAC Name:</b> <b>3-Ethylpent-2-ene</b>.<br>
<b>Structure:</b> $\\text{CH}_3-\\text{CH}=\\text{C}(\\text{C}_2\\text{H}_5)-\\text{CH}_2-\\text{CH}_3$.</p>`,
      rubricRows: [
        { key: "Joining carbonyl fragments: Ethanal + Pentan-3-one", marks: "1 Mark" },
        { key: "Correct structural formula", marks: "1 Mark" },
        { key: "Accurate IUPAC name: 3-Ethylpent-2-ene", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q6",
      ncertRef: "9.6",
      marks: "3 Marks",
      questionHtml: "An alkene 'A' contains three $\\text{C}-\\text{C}$, eight $\\text{C}-\\text{H}\\ \\sigma$ bonds and one $\\text{C}-\\text{C}\\ \\pi$ bond. 'A' on ozonolysis gives two moles of an aldehyde of molar mass $44\\text{ u}$. Write IUPAC name of 'A'.",
      solutionStepsHtml: `<p><b>Step 1: Identify the aldehyde product:</b><br>
General formula of an aliphatic aldehyde is $\\text{C}_n\\text{H}_{2n}\\text{O}$.<br>
Molar mass $= 12n + 2n + 16 = 14n + 16 = 44\\text{ u}$<br>
$$14n = 44 - 16 = 28 \\implies n = 2$$
The aldehyde is <b>Ethanal ($\\text{CH}_3\\text{CHO}$)</b>, molar mass $= 12(2) + 4(1) + 16 = 44\\text{ g mol}^{-1}$.</p>
<p><b>Step 2: Reconstruct the alkene:</b><br>
Since ozonolysis of 1 mole of 'A' yields 2 moles of ethanal:<br>
$$\\text{CH}_3-\\text{CH}=\\text{O} + \\text{O}=\\text{CH}-\\text{CH}_3 \\xrightarrow{-\\text{O}_2} \\mathbf{\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_3}$$</p>
<p><b>Step 3: Verify the bond count for But-2-ene:</b><br>
• Number of carbons = 4; molecular formula = $\\text{C}_4\\text{H}_8$.<br>
• $\\text{C}-\\text{C}\\ \\sigma$ bonds: $3$ (one $\\text{C}_1-\\text{C}_2$, one $\\text{C}_2-\\text{C}_3$, one $\\text{C}_3-\\text{C}_4$). &check;<br>
• $\\text{C}-\\text{H}\\ \\sigma$ bonds: $8$. &check;<br>
• $\\text{C}-\\text{C}\\ \\pi$ bonds: $1$ (in $\\text{C}_2=\\text{C}_3$). &check;</p>
<p><b>Final Answer:</b> Alkene 'A' is <b>But-2-ene</b>.</p>`,
      rubricRows: [
        { key: "Molar mass 44 u identified as Ethanal (CH3CHO)", marks: "1 Mark" },
        { key: "Deducing symmetrical alkene: But-2-ene", marks: "1 Mark" },
        { key: "Verification of bond count (3 C-C, 8 C-H, 1 pi) and IUPAC name", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q7",
      ncertRef: "9.7",
      marks: "3 Marks",
      questionHtml: "Propanal and pentan-3-one are the ozonolysis products of an alkene. What is the structural formula of the alkene?",
      solutionStepsHtml: `<p><b>Reconstructing the parent alkene:</b><br>
Write the structures of the two carbonyl products with their oxygen atoms facing each other:</p>
<p>• Product 1: Propanal $\\rightarrow \\text{CH}_3-\\text{CH}_2-\\text{CH}=\\mathbf{O}$<br>
• Product 2: Pentan-3-one $\\rightarrow \\mathbf{O}=\\text{C}(\\text{CH}_2\\text{CH}_3)_2$</p>
<p>Remove the two oxygen atoms and connect the carbons by a double bond:<br>
$$\\text{CH}_3-\\text{CH}_2-\\overset{3}{\\text{CH}}=\\overset{4}{\\text{C}}(\\text{CH}_2\\text{CH}_3)-\\text{CH}_2-\\text{CH}_3$$
Expanding the main chain: a 6-carbon chain (hexene) with the double bond at $\\text{C}_3$ and an ethyl group at $\\text{C}_3$ (or $\\text{C}_4$ depending on numbering):<br>
$$\\overset{1}{\\text{CH}_3}-\\overset{2}{\\text{CH}_2}-\\overset{3}{\\text{C}}(\\text{C}_2\\text{H}_5)=\\overset{4}{\\text{CH}}-\\overset{5}{\\text{CH}_2}-\\overset{6}{\\text{CH}_3}$$
<b>IUPAC Name:</b> <b>3-Ethylhex-3-ene</b>.<br>
<b>Structural Formula:</b> $\\mathbf{\\text{CH}_3\\text{CH}_2\\text{C}(\\text{C}_2\\text{H}_5)=\\text{CHCH}_2\\text{CH}_3}$.</p>`,
      rubricRows: [
        { key: "Alignment of propanal and pentan-3-one carbonyl groups", marks: "1 Mark" },
        { key: "Correct structural formula", marks: "1 Mark" },
        { key: "IUPAC naming: 3-Ethylhex-3-ene", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q8",
      ncertRef: "9.8",
      marks: "4 Marks",
      questionHtml: "Write chemical equations for combustion reaction of the following hydrocarbons:<br>(i) Butane<br>(ii) Pentene<br>(iii) Hexyne<br>(iv) Toluene.",
      solutionStepsHtml: `<p><i>General combustion formula for a hydrocarbon $\\text{C}_x\\text{H}_y$:</i><br>
$$\\text{C}_x\\text{H}_y + \\left(x + \\frac{y}{4}\\right)\\text{O}_2 \\rightarrow x\\text{CO}_2 + \\frac{y}{2}\\text{H}_2\\text{O}$$</p>
<p><b>(i) Butane ($\\text{C}_4\\text{H}_{10}$):</b><br>
$$\\text{C}_4\\text{H}_{10}(\\text{g}) + \\frac{13}{2}\\text{O}_2(\\text{g}) \\rightarrow 4\\text{CO}_2(\\text{g}) + 5\\text{H}_2\\text{O}(\\text{l})$$
$$2\\text{C}_4\\text{H}_{10}(\\text{g}) + 13\\text{O}_2(\\text{g}) \\rightarrow 8\\text{CO}_2(\\text{g}) + 10\\text{H}_2\\text{O}(\\text{l})$$</p>
<p><b>(ii) Pentene ($\\text{C}_5\\text{H}_{10}$):</b><br>
$$\\text{C}_5\\text{H}_{10}(\\text{l}) + \\frac{15}{2}\\text{O}_2(\\text{g}) \\rightarrow 5\\text{CO}_2(\\text{g}) + 5\\text{H}_2\\text{O}(\\text{l})$$
$$2\\text{C}_5\\text{H}_{10}(\\text{l}) + 15\\text{O}_2(\\text{g}) \\rightarrow 10\\text{CO}_2(\\text{g}) + 10\\text{H}_2\\text{O}(\\text{l})$$</p>
<p><b>(iii) Hexyne ($\\text{C}_6\\text{H}_{10}$):</b><br>
$$\\text{C}_6\\text{H}_{10}(\\text{l}) + \\frac{17}{2}\\text{O}_2(\\text{g}) \\rightarrow 6\\text{CO}_2(\\text{g}) + 5\\text{H}_2\\text{O}(\\text{l})$$
$$2\\text{C}_6\\text{H}_{10}(\\text{l}) + 17\\text{O}_2(\\text{g}) \\rightarrow 12\\text{CO}_2(\\text{g}) + 10\\text{H}_2\\text{O}(\\text{l})$$</p>
<p><b>(iv) Toluene ($\\text{C}_7\\text{H}_8$):</b><br>
$$\\text{C}_7\\text{H}_8(\\text{l}) + 9\\text{O}_2(\\text{g}) \\rightarrow 7\\text{CO}_2(\\text{g}) + 4\\text{H}_2\\text{O}(\\text{l})$$</p>`,
      rubricRows: [
        { key: "Part (i): Balanced equation for butane combustion", marks: "1 Mark" },
        { key: "Part (ii): Balanced equation for pentene combustion", marks: "1 Mark" },
        { key: "Part (iii): Balanced equation for hexyne combustion", marks: "1 Mark" },
        { key: "Part (iv): Balanced equation for toluene combustion", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q9",
      ncertRef: "9.9",
      marks: "3 Marks",
      questionHtml: "Draw the cis and trans structures for hex-2-ene. Which isomer will have higher b.p. and why?",
      solutionStepsHtml: `<p><b>Structures of Hex-2-ene ($\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_2\\text{CH}_2\\text{CH}_3$):</b></p>
<p>1. <b>cis-Hex-2-ene:</b><br>
Both alkyl groups ($-\\text{CH}_3$ and $-\\text{CH}_2\\text{CH}_2\\text{CH}_3$) are on the <b>same side</b> of the double bond:<br>
$$\\begin{matrix} \\text{H}_3\\text{C} & & \\text{CH}_2\\text{CH}_2\\text{CH}_3 \\\\ & \\backslash / & \\\\ & \\text{C}=\\text{C} & \\\\ & / \\backslash & \\\\ \\text{H} & & \\text{H} \\end{matrix}$$</p>
<p>2. <b>trans-Hex-2-ene:</b><br>
The two alkyl groups are on <b>opposite sides</b> of the double bond:<br>
$$\\begin{matrix} \\text{H}_3\\text{C} & & \\text{H} \\\\ & \\backslash / & \\\\ & \\text{C}=\\text{C} & \\\\ & / \\backslash & \\\\ \\text{H} & & \\text{CH}_2\\text{CH}_2\\text{CH}_3 \\end{matrix}$$</p>
<p><b>Boiling Point Comparison:</b><br>
<b>cis-Hex-2-ene has a higher boiling point</b> than trans-hex-2-ene.<br>
<b>Reason:</b> In the <i>cis</i> isomer, the dipole moments of the two alkyl groups reinforce each other, resulting in a significant net permanent dipole moment ($\\mu_{\\text{cis}} > 0$). In the <i>trans</i> isomer, the bond dipoles oppose each other, largely cancelling out ($\\mu_{\\text{trans}} \\approx 0$). Due to stronger dipole-dipole attractions in the polar <i>cis</i> isomer, more heat energy is required to vaporise it, giving it a higher boiling point.</p>`,
      rubricRows: [
        { key: "Drawings of cis and trans hex-2-ene", marks: "1 Mark" },
        { key: "Identifying cis isomer as having higher boiling point", marks: "1 Mark" },
        { key: "Explanation via net dipole moment and stronger dipole-dipole attractions", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q10",
      ncertRef: "9.10",
      marks: "3 Marks",
      questionHtml: "Why is benzene extraordinarily stable though it contains three double bonds?",
      solutionStepsHtml: `<p><b>Reasons for Extraordinary Stability of Benzene:</b></p>
<p>1. <b>Resonance Energy:</b> Benzene is a resonance hybrid of two equivalent Kekulé structures and three minor Dewar structures. The continuous cyclic delocalisation of six $\\pi$ electrons lowers the potential energy of the molecule by <b>$150.6\\text{ kJ mol}^{-1}$ ($36\\text{ kcal mol}^{-1}$)</b>, known as its resonance energy.</p>
<p>2. <b>Complete $\\pi$-Electron Delocalisation:</b> All six carbon atoms are $sp^2$ hybridised, forming a completely planar regular hexagon (bond angles $120^\\circ$). The unhybridised $2p_z$ orbitals overlap sideways continuously in a cyclic doughnut-shaped electron cloud above and below the ring plane. All $\\text{C}-\\text{C}$ bond lengths are identical ($139\\text{ pm}$), intermediate between single ($154\\text{ pm}$) and double ($134\\text{ pm}$) bonds.</p>
<p>3. <b>Aromatic Sextet (Hückel's Rule):</b> Benzene possesses a closed, completely filled bonding molecular orbital shell of $(4n+2) = 6\\ \\pi$ electrons ($n = 1$), conferring extraordinary aromatic stability and making it resist addition reactions in favour of electrophilic substitutions.</p>`,
      rubricRows: [
        { key: "High resonance stabilization energy (150.6 kJ/mol)", marks: "1 Mark" },
        { key: "Cyclic delocalisation of 6 pi electrons in unhybridised p-orbitals", marks: "1 Mark" },
        { key: "Hückel's aromatic sextet and uniform C-C bond length (139 pm)", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q11",
      ncertRef: "9.11",
      marks: "3 Marks",
      questionHtml: "What are the necessary conditions for any system to be aromatic?",
      solutionStepsHtml: `<p>According to <b>Hückel's Rule</b> and modern orbital theory, a compound is aromatic if it fulfills all four of the following criteria:</p>
<p>1. <b>Cyclic Structure:</b> The molecule or ion must possess a ring of atoms.</p>
<p>2. <b>Planarity:</b> The ring must be planar (flat) so that the $p$-orbitals on every ring atom remain parallel to allow maximum continuous sideways overlap.</p>
<p>3. <b>Complete Conjugation:</b> There must be a continuous, uninterrupted ring of $p$-orbitals (every atom in the ring must be $sp^2$ or $sp$ hybridised, possessing an unhybridised $p$-orbital; no $sp^3$ saturated carbons in the conjugated loop).</p>
<p>4. <b>Hückel's Rule of $(4n + 2)\\ \\pi$ Electrons:</b> The closed cyclic $\\pi$-system must contain <b>$(4n + 2)$</b> delocalised electrons, where $n$ is a non-negative integer ($n = 0, 1, 2, 3, \\dots$).<br>
Allowed aromatic numbers of $\\pi$ electrons: <b>$2, 6, 10, 14, 18$</b>.</p>`,
      rubricRows: [
        { key: "Cyclic and Planar structure requirements", marks: "1 Mark" },
        { key: "Complete conjugation throughout the cyclic ring (sp2 hybridisation)", marks: "1 Mark" },
        { key: "Hückel's rule: (4n + 2) pi electrons with allowed numbers 2, 6, 10, 14...", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q12",
      ncertRef: "9.12",
      marks: "3 Marks",
      questionHtml: "Explain why the following systems are not aromatic:<br>(i) Cyclooctatetraene<br>(ii) Cyclopentadiene<br>(iii) Cycloheptatriene.",
      solutionStepsHtml: `<p><b>(i) Cyclooctatetraene (COT, $\\text{C}_8\\text{H}_8$):</b><br>
• Contains $8\\ \\pi$ electrons, which fits $4n$ ($n = 2$), not $(4n + 2)$.<br>
• To avoid anti-aromatic instability, the molecule adopts a non-planar <b>tub-shaped conformation</b>.<br>
• Because it is non-planar, the $p$-orbitals cannot overlap continuously $\\implies$ <b>Non-aromatic</b>.</p>
<p><b>(ii) Cyclopentadiene:</b><br>
• Contains a saturated methylene carbon ($-\\text{CH}_2-$) which is <b>$sp^3$ hybridised</b>.<br>
• This $sp^3$ carbon lacks an unhybridised $p$-orbital, which breaks the continuity of the conjugated ring system $\\implies$ <b>Non-aromatic</b>.<br>
<i>(Note: Cyclopentadienyl anion formed by loss of $\\text{H}^+$ is aromatic with $6\\ \\pi$ electrons).</i></p>
<p><b>(iii) Cycloheptatriene:</b><br>
• Contains three conjugated double bonds ($6\\ \\pi$ electrons), but also contains an <b>$sp^3$ hybridised $-\\text{CH}_2-$ carbon</b> in the 7-membered ring.<br>
• Because conjugation is interrupted by the saturated $sp^3$ carbon, the system is non-planar and lacks complete cyclic delocalisation $\\implies$ <b>Non-aromatic</b>.<br>
<i>(Note: Tropylium cation $\\text{C}_7\\text{H}_7^+$ formed by loss of $\\text{H}^-$ is fully conjugated and aromatic).</i></p>`,
      rubricRows: [
        { key: "Cyclooctatetraene: Tub-shaped non-planar geometry, 8 pi electrons", marks: "1 Mark" },
        { key: "Cyclopentadiene: Presence of sp3 CH2 carbon breaking conjugation", marks: "1 Mark" },
        { key: "Cycloheptatriene: Non-planar due to sp3 CH2 carbon", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q13",
      ncertRef: "9.13",
      marks: "4 Marks",
      questionHtml: "How will you convert benzene into:<br>(i) p-nitrobromobenzene<br>(ii) m-nitrochlorobenzene<br>(iii) p-nitrotoluene<br>(iv) acetophenone?",
      solutionStepsHtml: `<p><b>(i) Benzene to p-nitrobromobenzene:</b><br>
Step 1: Bromination of benzene with $\\text{Br}_2 / \\text{FeBr}_3$ gives bromobenzene (bromine is ortho/para-directing):<br>
$$\\text{C}_6\\text{H}_6 + \\text{Br}_2 \\xrightarrow{\\text{FeBr}_3} \\text{C}_6\\text{H}_5\\text{Br} + \\text{HBr}$$
Step 2: Nitration of bromobenzene with conc. $\\text{HNO}_3 + \\text{H}_2\\text{SO}_4$ at $50^\\circ\\text{C}$ gives <b>p-nitrobromobenzene</b> (major) and o-nitrobromobenzene (minor, separated by fractional distillation).</p>
<p><b>(ii) Benzene to m-nitrochlorobenzene:</b><br>
Step 1: Nitration of benzene with conc. $\\text{HNO}_3 + \\text{H}_2\\text{SO}_4$ gives nitrobenzene (nitro group is strongly meta-directing):<br>
$$\\text{C}_6\\text{H}_6 + \\text{HNO}_3 \\xrightarrow{\\text{H}_2\\text{SO}_4, 55^\\circ\\text{C}} \\text{C}_6\\text{H}_5\\text{NO}_2 + \\text{H}_2\\text{O}$$
Step 2: Chlorination of nitrobenzene with $\\text{Cl}_2 / \\text{anhyd. AlCl}_3$ directs incoming chloro group to the meta position, giving <b>m-nitrochlorobenzene</b>.</p>
<p><b>(iii) Benzene to p-nitrotoluene:</b><br>
Step 1: Friedel-Crafts alkylation of benzene with $\\text{CH}_3\\text{Cl} / \\text{anhyd. AlCl}_3$ gives toluene (methyl group is activating and ortho/para-directing):<br>
$$\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{Cl} \\xrightarrow{\\text{AlCl}_3} \\text{C}_6\\text{H}_5\\text{CH}_3 + \\text{HCl}$$
Step 2: Nitration of toluene with conc. $\\text{HNO}_3 + \\text{H}_2\\text{SO}_4$ at low temperature gives <b>p-nitrotoluene</b> as major product.</p>
<p><b>(iv) Benzene to Acetophenone:</b><br>
Friedel-Crafts acylation of benzene with acetyl chloride in the presence of anhydrous aluminium chloride:<br>
$$\\mathbf{\\text{C}_6\\text{H}_6 + \\text{CH}_3\\text{COCl} \\xrightarrow{\\text{anhyd. AlCl}_3} \\text{C}_6\\text{H}_5\\text{COCH}_3 \\text{ (Acetophenone)} + \\text{HCl}}$$</p>`,
      rubricRows: [
        { key: "Part (i): Bromination first, then nitration (o/p director)", marks: "1 Mark" },
        { key: "Part (ii): Nitration first, then chlorination (meta director)", marks: "1 Mark" },
        { key: "Part (iii): Friedel-Crafts alkylation first, then nitration", marks: "1 Mark" },
        { key: "Part (iv): Direct Friedel-Crafts acylation with CH3COCl/AlCl3", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q14",
      ncertRef: "9.14",
      marks: "4 Marks",
      questionHtml: "In the alkane $\\text{H}_3\\text{C}-\\text{CH}_2-\\text{C}(\\text{CH}_3)_2-\\text{CH}_2-\\text{CH}(\\text{CH}_3)_2$, identify $1^\\circ, 2^\\circ, 3^\\circ, 4^\\circ$ carbon atoms and find the total number of each type.",
      solutionStepsHtml: `<p><b>Carbon Degree Definitions:</b><br>
• $1^\\circ$ (Primary): Bonded to 1 other carbon atom.<br>
• $2^\\circ$ (Secondary): Bonded to 2 other carbon atoms.<br>
• $3^\\circ$ (Tertiary): Bonded to 3 other carbon atoms.<br>
• $4^\\circ$ (Quaternary): Bonded to 4 other carbon atoms.</p>
<p><b>Structural Analysis of 2,2,4-Trimethylhexane:</b><br>
$$\\overset{1}{\\text{CH}_3}-\\overset{2}{\\text{CH}_2}-\\overset{3}{\\text{C}}(\\text{CH}_3)_2-\\overset{4}{\\text{CH}_2}-\\overset{5}{\\text{CH}}(\\text{CH}_3)_2$$
1. <b>Primary ($1^\\circ$) Carbons:</b><br>
All terminal methyl groups ($-\\text{CH}_3$):<br>
• Carbon 1: $-\\text{CH}_3$<br>
• Two methyl carbons attached to $\\text{C}_3$: $2 \\times (-\\text{CH}_3)$<br>
• Two methyl carbons attached to $\\text{C}_5$: $2 \\times (-\\text{CH}_3)$<br>
$$\\mathbf{\\text{Total } 1^\\circ\\text{ Carbons} = 5}$$
2. <b>Secondary ($2^\\circ$) Carbons:</b><br>
Methylene carbons ($-\\text{CH}_2-$):<br>
• Carbon 2 ($-\\text{CH}_2-$ bonded to $\\text{C}_1$ and $\\text{C}_3$)<br>
• Carbon 4 ($-\\text{CH}_2-$ bonded to $\\text{C}_3$ and $\\text{C}_5$)<br>
$$\\mathbf{\\text{Total } 2^\\circ\\text{ Carbons} = 2}$$
3. <b>Tertiary ($3^\\circ$) Carbon:</b><br>
Methine carbon ($>\\text{CH}-$):<br>
• Carbon 5 (bonded to $\\text{C}_4$ and two methyl carbons)<br>
$$\\mathbf{\\text{Total } 3^\\circ\\text{ Carbons} = 1}$$
4. <b>Quaternary ($4^\\circ$) Carbon:</b><br>
Fully substituted carbon ($>\\text{C}<$):<br>
• Carbon 3 (bonded to $\\text{C}_2, \\text{C}_4$, and two methyl carbons)<br>
$$\\mathbf{\\text{Total } 4^\\circ\\text{ Carbons} = 1}$$</p>`,
      rubricRows: [
        { key: "Correct count of 1° carbons = 5", marks: "1 Mark" },
        { key: "Correct count of 2° carbons = 2", marks: "1 Mark" },
        { key: "Correct count of 3° carbons = 1", marks: "1 Mark" },
        { key: "Correct count of 4° carbons = 1", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q15",
      ncertRef: "9.15",
      marks: "2 Marks",
      questionHtml: "What effect does branching of an alkane chain have on its boiling point?",
      solutionStepsHtml: `<p><b>Effect:</b> With increase in branching, the <b>boiling point of isomeric alkanes decreases</b>.</p>
<p><b>Reason:</b><br>
1. <b>More Spherical Shape & Reduced Surface Area:</b> Branching makes the alkane molecule more compact and spherical. A sphere has the minimum surface area for a given volume.<br>
2. <b>Weaker van der Waals Forces:</b> Since intermolecular attractive forces (London dispersion forces) operate across molecular contact surfaces, the reduced surface area results in significantly weaker attractive forces between adjacent molecules.<br>
Consequently, less thermal energy is required to overcome these attractions, lowering the boiling point.</p>
<p><b>Example (Pentane isomers, $\\text{C}_5\\text{H}_{12}$):</b><br>
• n-Pentane (straight chain): $\\text{b.p.} = 309.1\\text{ K}$ ($36^\\circ\\text{C}$)<br>
• Isopentane (one branch): $\\text{b.p.} = 301\\text{ K}$ ($28^\\circ\\text{C}$)<br>
• Neopentane (two branches, highly spherical): $\\text{b.p.} = 282.5\\text{ K}$ ($9.5^\\circ\\text{C}$)</p>`,
      rubricRows: [
        { key: "Stating boiling point decreases with increased branching", marks: "1 Mark" },
        { key: "Explanation via spherical shape, lower surface area, and weaker van der Waals forces", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q16",
      ncertRef: "9.16",
      marks: "2 Marks",
      questionHtml: "How will you convert ethyne into benzene?",
      solutionStepsHtml: `<p><b>Conversion: Cyclic Polymerisation / Trimerisation of Ethyne:</b><br>
When ethyne (acetylene) gas is passed through a <b>red hot iron (or copper) tube at $873\\text{ K}$ ($600^\\circ\\text{C}$)</b>, three molecules of ethyne undergo cyclic oligomerisation to produce benzene:<br>
$$\\mathbf{3\\text{CH}\\equiv\\text{CH} \\xrightarrow{\\text{Red hot Fe tube, } 873\\text{ K}} \\text{C}_6\\text{H}_6 \\text{ (Benzene)}}$$</p>
<p>This reaction represents the classic synthetic pathway bridging the aliphatic alkyne family to aromatic hydrocarbons.</p>`,
      rubricRows: [
        { key: "Reagent and condition: Red hot iron tube at 873 K", marks: "1 Mark" },
        { key: "Balanced equation 3C2H2 -> C6H6", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q17",
      ncertRef: "9.17",
      marks: "4 Marks",
      questionHtml: "Write down the products of ozonolysis of 1,2-dimethylbenzene (o-xylene). How does the result support the Kekulé structure for benzene?",
      solutionStepsHtml: `<p><b>Kekulé Resonance Forms of o-Xylene:</b><br>
o-Xylene exists as a resonance hybrid of two Kekulé forms (I and II):<br>
• <b>Structure I:</b> Double bond is present between the two methyl-bearing ring carbons ($\\,\\text{C}_1=\\text{C}_2\\,$).<br>
• <b>Structure II:</b> Single bond is present between the two methyl-bearing ring carbons ($\\,\\text{C}_1-\\text{C}_2\\,$).</p>
<p><b>Ozonolysis Products:</b><br>
1. <b>From Structure I:</b><br>
Cleavage of $\\text{C}_1=\\text{C}_2, \\text{C}_3=\\text{C}_4, \\text{C}_5=\\text{C}_6$ yields:<br>
• One mole of <b>Butane-2,3-dione (Dimethylglyoxal, $\\text{CH}_3\\text{COCOCH}_3$)</b><br>
• Two moles of <b>Glyoxal (Ethanedial, $\\text{CHO}-\\text{CHO}$)</b></p>
<p>2. <b>From Structure II:</b><br>
Cleavage of $\\text{C}_2=\\text{C}_3, \\text{C}_4=\\text{C}_5, \\text{C}_6=\\text{C}_1$ yields:<br>
• Two moles of <b>Methylglyoxal (2-Oxopropanal, $\\text{CH}_3\\text{COCHO}$)<br>
• One mole of <b>Glyoxal ($\\text{CHO}-\\text{CHO}$)</b></p>
<p><b>Support for Kekulé Resonance:</b><br>
Experimentally, the ozonolysis of o-xylene affords a mixture of all three products: <b>glyoxal, methylglyoxal, and dimethylglyoxal in a $3 : 2 : 1$ molar ratio</b>.<br>
If o-xylene possessed a single static ring structure, it could yield at most two products. The formation of three distinct carbonyl products strictly confirms that benzene exists in a state of dynamic oscillation/resonance between the two Kekulé structures.</p>`,
      rubricRows: [
        { key: "Identification of the two Kekulé forms of o-xylene", marks: "1 Mark" },
        { key: "Products from Form I: Dimethylglyoxal + 2 Glyoxal", marks: "1 Mark" },
        { key: "Products from Form II: 2 Methylglyoxal + Glyoxal", marks: "1 Mark" },
        { key: "Explanation of 3:2:1 ratio confirming resonance hybrid concept", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q18",
      ncertRef: "9.18",
      marks: "3 Marks",
      questionHtml: "Arrange benzene, n-hexane and ethyne in decreasing order of acidic behaviour. Also give reason for this behaviour.",
      solutionStepsHtml: `<p><b>Decreasing Order of Acidity:</b><br>
$$\\mathbf{\\text{Ethyne } (\\text{HC}\\equiv\\text{CH}) > \\text{Benzene } (\\text{C}_6\\text{H}_6) > \\text{n-Hexane } (\\text{C}_6\\text{H}_{14})}$$</p>
<p><b>Reason based on Hybridisation and s-Character:</b><br>
The acidity of a hydrocarbon depends on the ease with which it releases a proton, which is governed by the stability of the resulting conjugate base (carbanion). Carbanion stability is directly proportional to the electronegativity and <b>percentage $s$-character</b> of the carbon holding the negative charge:</p>
<p>1. <b>Ethyne:</b> Carbon is <b>$sp$ hybridised</b> ($50\\%\\ s$-character). High $s$-character draws the electron pair tightly towards the carbon nucleus, making the $\\text{C}-\\text{H}$ bond strongly polarised and allowing $\\text{H}^+$ to be readily released (reacts with $\\text{NaNH}_2$).<br>
2. <b>Benzene:</b> Carbon is <b>$sp^2$ hybridised</b> ($33.3\\%\\ s$-character). It is intermediate in electronegativity and acidity.<br>
3. <b>n-Hexane:</b> Carbon is <b>$sp^3$ hybridised</b> ($25\\%\\ s$-character). Least electronegative, firmly holds hydrogen, least acidic.</p>`,
      rubricRows: [
        { key: "Correct order: Ethyne > Benzene > n-Hexane", marks: "1 Mark" },
        { key: "Correlation of acidity with % s-character: sp (50%) > sp2 (33.3%) > sp3 (25%)", marks: "1.5 Marks" },
        { key: "Conjugate carbanion stability justification", marks: "0.5 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q19",
      ncertRef: "9.19",
      marks: "3 Marks",
      questionHtml: "Why does benzene undergo electrophilic substitution reactions easily and nucleophilic substitutions with difficulty?",
      solutionStepsHtml: `<p><b>1. Ease of Electrophilic Substitution ($\\text{S}_\\text{E}\\text{Ar}$):</b><br>
• Benzene possesses a continuous ring of 6 delocalised $\\pi$ electrons forming a planar electron cloud of high electron density above and below the carbon ring.<br>
• This electron-rich cloud acts as a source of electrons, readily attracting electron-deficient reagents (<b>electrophiles</b>, $E^+$).<br>
• Crucially, substitution of a hydrogen atom by the electrophile preserves the aromatic sextet and resonance stabilization energy ($150.6\\text{ kJ mol}^{-1}$), making electrophilic substitution energetically favourable.</p>
<p><b>2. Difficulty of Nucleophilic Substitution:</b><br>
• <b>Electrostatic Repulsion:</b> Nucleophiles are electron-rich species (negative ions or molecules with lone pairs). As a nucleophile approaches benzene, it experiences strong electrostatic repulsion from the $\\pi$-electron cloud.<br>
• <b>Thermodynamic Barrier:</b> Nucleophilic attack would force a pair of electrons into the aromatic system, generating an anti-aromatic or non-aromatic intermediate with high activation energy.<br>
Therefore, nucleophilic substitution occurs only under extreme conditions or when strongly electron-withdrawing groups (like $-\\text{NO}_2$) are present at ortho/para positions.</p>`,
      rubricRows: [
        { key: "High pi-electron density attracting electrophiles and retaining aromaticity", marks: "1.5 Marks" },
        { key: "Electrostatic repulsion with nucleophiles and loss of resonance stability", marks: "1.5 Marks" }
      ]
    },
    {
      id: "c11c-ch9-q20",
      ncertRef: "9.20",
      marks: "3 Marks",
      questionHtml: "How would you convert the following compounds into benzene?<br>(i) Ethyne<br>(ii) Ethene<br>(iii) Hexane.",
      solutionStepsHtml: `<p><b>(i) Ethyne to Benzene:</b><br>
By cyclic polymerisation through a red hot iron tube at $873\\text{ K}$:<br>
$$\\mathbf{3\\text{CH}\\equiv\\text{CH} \\xrightarrow{\\text{Red hot Fe tube, } 873\\text{ K}} \\text{C}_6\\text{H}_6}$$</p>
<p><b>(ii) Ethene to Benzene:</b><br>
Step 1: Bromination of ethene gives 1,2-dibromoethane:<br>
$$\\text{CH}_2=\\text{CH}_2 + \\text{Br}_2 \\xrightarrow{\\text{CCl}_4} \\text{BrCH}_2-\\text{CH}_2\\text{Br}$$
Step 2: Dehydrohalogenation with alcoholic $\\text{KOH}$ followed by $\\text{NaNH}_2$ gives ethyne:<br>
$$\\text{BrCH}_2-\\text{CH}_2\\text{Br} \\xrightarrow{\\text{alc. KOH, } \\Delta} \\text{CH}_2=\\text{CHBr} \\xrightarrow{\\text{NaNH}_2} \\text{CH}\\equiv\\text{CH}$$
Step 3: Cyclic polymerisation of ethyne in a red hot iron tube yields <b>benzene</b>.</p>
<p><b>(iii) n-Hexane to Benzene (Aromatisation / Catalytic Reforming):</b><br>
Passing n-hexane vapours over heated oxides of chromium, vanadium, or molybdenum supported on alumina at $773\\text{ K}$ and $10-20\\text{ atm}$ pressure causes simultaneous cyclisation and dehydrogenation:<br>
$$\\mathbf{\\text{CH}_3(\\text{CH}_2)_4\\text{CH}_3 \\xrightarrow{\\text{Cr}_2\\text{O}_3 / \\text{V}_2\\text{O}_5 / \\text{Al}_2\\text{O}_3, 773\\text{ K}, 10-20\\text{ atm}} \\text{C}_6\\text{H}_6 + 4\\text{H}_2}$$</p>`,
      rubricRows: [
        { key: "Part (i): Ethyne cyclic trimerisation", marks: "1 Mark" },
        { key: "Part (ii): Ethene -> dibromoethane -> ethyne -> benzene", marks: "1 Mark" },
        { key: "Part (iii): Aromatisation of n-hexane using Cr2O3/Al2O3 at 773 K", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q21",
      ncertRef: "9.21",
      marks: "3 Marks",
      questionHtml: "Write structures of all the alkenes which on hydrogenation give 2-methylbutane.",
      solutionStepsHtml: `<p><b>Structure of Target Alkane: 2-Methylbutane:</b><br>
$$\\overset{1}{\\text{CH}_3}-\\overset{2}{\\text{CH}}(\\text{CH}_3)-\\overset{3}{\\text{CH}_2}-\\overset{4}{\\text{CH}_3}$$</p>
<p>Any alkene that yields 2-methylbutane upon catalytic hydrogenation (addition of $\\text{H}_2$ across a double bond) must have the exact same 5-carbon branched skeleton with a double bond between adjacent carbons:</p>
<p>1. <b>Double bond between $\\text{C}_1$ and $\\text{C}_2$:</b><br>
$$\\mathbf{\\text{CH}_2=\\text{C}(\\text{CH}_3)-\\text{CH}_2-\\text{CH}_3} \\quad \\text{(2-Methylbut-1-ene)}$$</p>
<p>2. <b>Double bond between $\\text{C}_2$ and $\\text{C}_3$:</b><br>
$$\\mathbf{(\\text{CH}_3)_2\\text{C}=\\text{CH}-\\text{CH}_3} \\quad \\text{(2-Methylbut-2-ene)}$$</p>
<p>3. <b>Double bond between $\\text{C}_3$ and $\\text{C}_4$:</b><br>
$$\\mathbf{(\\text{CH}_3)_2\\text{CH}-\\text{CH}=\\text{CH}_2} \\quad \\text{(3-Methylbut-1-ene)}$$</p>
<p><b>Conclusion:</b> There are exactly <b>three</b> alkenes that yield 2-methylbutane on hydrogenation.</p>`,
      rubricRows: [
        { key: "Structure 1: 2-Methylbut-1-ene", marks: "1 Mark" },
        { key: "Structure 2: 2-Methylbut-2-ene", marks: "1 Mark" },
        { key: "Structure 3: 3-Methylbut-1-ene", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q22",
      ncertRef: "9.22",
      marks: "4 Marks",
      questionHtml: "Arrange the following sets of compounds in order of their decreasing relative reactivity with an electrophile, $E^+$:<br>(a) Chlorobenzene, 2,4-dinitrochlorobenzene, p-nitrochlorobenzene<br>(b) Toluene, $p-\\text{H}_3\\text{C}-\\text{C}_6\\text{H}_4-\\text{NO}_2$, $p-\\text{O}_2\\text{N}-\\text{C}_6\\text{H}_4-\\text{NO}_2$.",
      solutionStepsHtml: `<p><b>Principle:</b> Electron-donating groups ($+I, +R$) increase electron density on the aromatic ring, activating it towards electrophilic attack. Electron-withdrawing groups ($-I, -R$) like $-\\text{NO}_2$ strongly deactivate the ring.</p>
<p><b>(a) Chlorobenzene, 2,4-dinitrochlorobenzene, p-nitrochlorobenzene:</b><br>
• Chlorobenzene has only the weakly deactivating chloro substituent.<br>
• p-Nitrochlorobenzene has one strongly deactivating $-\\text{NO}_2$ group.<br>
• 2,4-Dinitrochlorobenzene has two strongly deactivating $-\\text{NO}_2$ groups.<br>
<b>Decreasing Reactivity Order:</b><br>
$$\\mathbf{\\text{Chlorobenzene} > p\\text{-Nitrochlorobenzene} > 2,4\\text{-Dinitrochlorobenzene}}$$</p>
<p><b>(b) Toluene, $p-\\text{H}_3\\text{C}-\\text{C}_6\\text{H}_4-\\text{NO}_2$, $p-\\text{O}_2\\text{N}-\\text{C}_6\\text{H}_4-\\text{NO}_2$:</b><br>
• Toluene has an electron-donating methyl group ($+I$ and hyperconjugation) $\\implies$ Activated ring.<br>
• $p$-Nitrotoluene has one electron-donating $-\\text{CH}_3$ and one electron-withdrawing $-\\text{NO}_2$ group.<br>
• $p$-Dinitrobenzene has two strongly electron-withdrawing $-\\text{NO}_2$ groups $\\implies$ Severely deactivated ring.<br>
<b>Decreasing Reactivity Order:</b><br>
$$\\mathbf{\\text{Toluene} > p\\text{-Nitrotoluene} > p\\text{-Dinitrobenzene}}$$</p>`,
      rubricRows: [
        { key: "Part (a): Chlorobenzene > p-nitrochlorobenzene > 2,4-dinitrochlorobenzene", marks: "2 Marks" },
        { key: "Part (b): Toluene > p-nitrotoluene > p-dinitrobenzene", marks: "2 Marks" }
      ]
    },
    {
      id: "c11c-ch9-q23",
      ncertRef: "9.23",
      marks: "3 Marks",
      questionHtml: "Out of benzene, m-dinitrobenzene and toluene, which will undergo nitration most easily and why?",
      solutionStepsHtml: `<p><b>Answer:</b> <b>Toluene</b> will undergo nitration most easily.</p>
<p><b>Order of Reactivity towards Nitration:</b><br>
$$\\mathbf{\\text{Toluene} > \\text{Benzene} > m\\text{-Dinitrobenzene}}$$</p>
<p><b>Reasons:</b><br>
1. <b>Toluene:</b> The methyl group ($-\\text{CH}_3$) is an <b>activating group</b>. It donates electron density into the benzene ring through inductive ($+I$) and hyperconjugative ($\sigma \rightarrow \pi$) effects, increasing electron density especially at ortho and para positions. This facilitates rapid attack by the incoming nitronium ion ($\\text{NO}_2^+$).<br>
2. <b>Benzene:</b> Standard unsubstituted aromatic system.<br>
3. <b>m-Dinitrobenzene:</b> Contains two strongly <b>electron-withdrawing nitro groups</b> ($-I$ and $-R$ effects), which drain electron density from the ring, making it severely deactivated towards electrophilic attack.</p>`,
      rubricRows: [
        { key: "Identifying Toluene as reacting most easily", marks: "1 Mark" },
        { key: "Activating effect of methyl group (+I and hyperconjugation)", marks: "1 Mark" },
        { key: "Deactivating effect of nitro groups (-I, -R) in dinitrobenzene", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q24",
      ncertRef: "9.24",
      marks: "2 Marks",
      questionHtml: "Suggest the name of a Lewis acid other than anhydrous aluminium chloride which can be used during ethylation of benzene.",
      solutionStepsHtml: `<p><b>Alternative Lewis Acids for Friedel-Crafts Ethylation:</b><br>
Any strong anhydrous Lewis acid containing an incomplete octet or vacant orbital capable of polarising the alkyl halide ($\\text{CH}_3\\text{CH}_2\\text{Cl}$) and accepting a chloride ion to generate the ethyl carbocation/complex can be used:</p>
<p>1. <b>Anhydrous Ferric Chloride ($\\mathbf{FeCl_3}$)</b><br>
2. <b>Anhydrous Aluminium Bromide ($\\mathbf{AlBr_3}$)</b><br>
3. <b>Boron Trifluoride ($\\mathbf{BF_3}$)</b><br>
4. <b>Stannic Chloride ($\\mathbf{SnCl_4}$)</b><br>
5. <b>Antimony Pentachloride ($\\mathbf{SbCl_5}$)</b></p>
<p><i>Example reaction:</i> $\\text{C}_6\\text{H}_6 + \\text{C}_2\\text{H}_5\\text{Cl} \\xrightarrow{\\text{anhyd. } \\text{FeCl}_3} \\text{C}_6\\text{H}_5\\text{C}_2\\text{H}_5 + \\text{HCl}$.</p>`,
      rubricRows: [
        { key: "Naming anhydrous FeCl3 / AlBr3 / BF3", marks: "1 Mark" },
        { key: "Role of Lewis acid in generating ethyl carbocation electrophile", marks: "1 Mark" }
      ]
    },
    {
      id: "c11c-ch9-q25",
      ncertRef: "9.25",
      marks: "4 Marks",
      questionHtml: "Why is Wurtz reaction not preferred for the preparation of alkanes containing odd number of carbon atoms? Illustrate your answer by taking one example.",
      solutionStepsHtml: `<p><b>Explanation:</b><br>
Wurtz reaction involves coupling of alkyl halides with sodium in dry ether:<br>
$$\\text{R}-\\text{X} + 2\\text{Na} + \\text{X}-\\text{R} \\xrightarrow{\\text{dry ether}} \\text{R}-\\text{R} + 2\\text{NaX}$$
When used for preparing symmetrical alkanes with an even number of carbon atoms ($\\text{R}=\\text{R}'$), a single alkyl halide is used, giving a high yield of a single pure alkane.</p>
<p>To prepare an alkane with an <b>odd number of carbon atoms</b> (such as propane or heptane), a mixture of two different alkyl halides ($\\text{R}-\\text{X}$ and $\\text{R}'-\\text{X}$) must be used. Coupling occurs in three competing ways:<br>
1. Self-coupling of $\\text{R}-\\text{X} \\rightarrow \\mathbf{\\text{R}-\\text{R}}$<br>
2. Cross-coupling of $\\text{R}-\\text{X}$ with $\\text{R}'-\\text{X} \\rightarrow \\mathbf{\\text{R}-\\text{R}'}$ (desired odd alkane)<br>
3. Self-coupling of $\\text{R}'-\\text{X} \\rightarrow \\mathbf{\\text{R}'-\\text{R}'}$</p>
<p><b>Illustration: Preparation of Propane ($\\text{CH}_3\\text{CH}_2\\text{CH}_3$):</b><br>
Reacting bromomethane ($\\text{CH}_3\\text{Br}$) and bromoethane ($\\text{C}_2\\text{H}_5\\text{Br}$) with sodium yields a mixture of three alkanes:<br>
• $\\text{CH}_3\\text{Br} + 2\\text{Na} + \\text{BrCH}_3 \\rightarrow \\mathbf{\\text{CH}_3-\\text{CH}_3}$ (Ethane)<br>
• $\\text{CH}_3\\text{Br} + 2\\text{Na} + \\text{BrC}_2\\text{H}_5 \\rightarrow \\mathbf{\\text{CH}_3-\\text{C}_2\\text{H}_5}$ (Propane, desired)<br>
• $\\text{C}_2\\text{H}_5\\text{Br} + 2\\text{Na} + \\text{BrC}_2\\text{H}_5 \\rightarrow \\mathbf{\\text{C}_2\\text{H}_5-\\text{C}_2\\text{H}_5}$ (Butane)</p>
<p>Because these alkanes belong to the same homologous series, their boiling points are very close to one another, making fractional separation extremely difficult and lowering the practical yield of the desired odd-carbon alkane.</p>`,
      rubricRows: [
        { key: "Explanation of three competing coupling reactions (two self + one cross)", marks: "1.5 Marks" },
        { key: "Propane example equations (producing ethane, propane, and butane)", marks: "1.5 Marks" },
        { key: "Difficulty of separation due to close boiling points and poor yield", marks: "1 Mark" }
      ]
    }
  ];
}

module.exports = { getQuestions };
