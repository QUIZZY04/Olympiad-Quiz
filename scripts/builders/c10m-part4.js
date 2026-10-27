// scripts/builders/c10m-part4.js
// Literal Verbatim Physical NCERT Questions for Class 10 Mathematics: Chapters 6, 7, 8, 10, 11 (Completing 100% Coverage)
// CBSE Step Marking Scheme 2026-27

const { renderQCard } = require('./c10s-part1.js');

function makeMathCard(id, num, text, marks, answerHtml, rubricRows) {
  return renderQCard(id, num, text, marks, answerHtml, rubricRows);
}

// ============================================================================
// CHAPTER 6: TRIANGLES (14 Additional NCERT Qs: Total 29 Qs = 100%)
// ============================================================================
function getChapter6ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch6-q16',
      'NCERT Exercise 6.2 • Q1',
      'In Fig, (i) and (ii), DE || BC. (i) In $\\Delta ABC$, $AD = 1.5\\text{ cm}, DB = 3\\text{ cm}, AE = 1\\text{ cm}$. Find $EC$. (ii) In $\\Delta ABC$, $DB = 7.2\\text{ cm}, AE = 1.8\\text{ cm}, EC = 5.4\\text{ cm}$. Find $AD$.',
      3,
      `<p><strong>Basic Proportionality Theorem (BPT):</strong> If a line is drawn parallel to one side of a triangle intersecting the other two sides, then it divides the two sides in the same ratio: $\\frac{AD}{DB} = \\frac{AE}{EC}$.</p>
<ol>
  <li><strong>(i) Find EC:</strong>
    $$\\frac{1.5}{3} = \\frac{1}{EC} \\implies \\frac{1}{2} = \\frac{1}{EC} \\implies \\mathbf{EC = 2\\text{ cm}}$$
  </li>
  <li><strong>(ii) Find AD:</strong>
    $$\\frac{AD}{7.2} = \\frac{1.8}{5.4} \\implies \\frac{AD}{7.2} = \\frac{1}{3} \\implies AD = \\frac{7.2}{3} = \\mathbf{2.4\\text{ cm}}$$
  </li>
</ol>`,
      [
        { key: 'Stating BPT: AD/DB = AE/EC', marks: '1 Mark' },
        { key: '(i) Solving EC = 2 cm', marks: '1 Mark' },
        { key: '(ii) Solving AD = 2.4 cm', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q17',
      'NCERT Exercise 6.2 • Q2',
      'E and F are points on the sides PQ and PR respectively of a $\\Delta PQR$. State whether $EF \\parallel QR$ in each case: (i) $PE = 3.9\\text{ cm}, EQ = 3\\text{ cm}, PF = 3.6\\text{ cm}, FR = 2.4\\text{ cm}$. (ii) $PE = 4\\text{ cm}, QE = 4.5\\text{ cm}, PF = 8\\text{ cm}, RF = 9\\text{ cm}$.',
      3,
      `<p><strong>Rule (Converse of BPT):</strong> If $\\frac{PE}{EQ} = \\frac{PF}{FR}$, then $EF \\parallel QR$.</p>
<ol>
  <li><strong>(i) Case 1:</strong>
    $$\\frac{PE}{EQ} = \\frac{3.9}{3} = 1.3$$
    $$\\frac{PF}{FR} = \\frac{3.6}{2.4} = \\frac{3}{2} = 1.5$$
    Since $\\frac{PE}{EQ} \\neq \\frac{PF}{FR}$, <strong>$EF$ is NOT parallel to $QR$</strong>.
  </li>
  <li><strong>(ii) Case 2:</strong>
    $$\\frac{PE}{QE} = \\frac{4}{4.5} = \\frac{8}{9}$$
    $$\\frac{PF}{RF} = \\frac{8}{9}$$
    Since $\\frac{PE}{QE} = \\frac{PF}{RF}$, <strong>$EF \\parallel QR$</strong>.
  </li>
</ol>`,
      [
        { key: '(i) Ratios 1.3 != 1.5 -> Not parallel', marks: '1.5 Marks' },
        { key: '(ii) Ratios 8/9 = 8/9 -> EF is parallel to QR', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q18',
      'NCERT Exercise 6.2 • Q5 & Q6',
      '(i) In Fig, $DE \\parallel OQ$ and $DF \\parallel OR$. Show that $EF \\parallel QR$. (ii) In Fig, A, B and C are points on OP, OQ and OR respectively such that $AB \\parallel PQ$ and $AC \\parallel PR$. Show that $BC \\parallel QR$.',
      4,
      `<p><strong>(i) Proof that $EF \\parallel QR$:</strong><br>
In $\\Delta POQ$, since $DE \\parallel OQ$, by BPT: $\\frac{PE}{EQ} = \\frac{PD}{DO} \\quad \\text{--- (1)}$.<br>
In $\\Delta POR$, since $DF \\parallel OR$, by BPT: $\\frac{PF}{FR} = \\frac{PD}{DO} \\quad \\text{--- (2)}$.<br>
From (1) and (2): $\\frac{PE}{EQ} = \\frac{PF}{FR}$.<br>
By Converse of BPT in $\\Delta PQR$: $\\mathbf{EF \\parallel QR}$. Hence proved.</p>
<p><strong>(ii) Proof that $BC \\parallel QR$:</strong><br>
In $\\Delta OPQ$, $AB \\parallel PQ \\implies \\frac{OA}{AP} = \\frac{OB}{BQ} \\quad \\text{--- (1)}$.<br>
In $\\Delta OPR$, $AC \\parallel PR \\implies \\frac{OA}{AP} = \\frac{OC}{CR} \\quad \\text{--- (2)}$.<br>
From (1) and (2): $\\frac{OB}{BQ} = \\frac{OC}{CR}$.<br>
By Converse of BPT in $\\Delta OQR$: $\\mathbf{BC \\parallel QR}$. Hence proved.</p>`,
      [
        { key: '(i) Equating PE/EQ and PF/FR to PD/DO and applying converse BPT', marks: '2 Marks' },
        { key: '(ii) Equating OB/BQ and OC/CR to OA/AP and applying converse BPT', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q19',
      'NCERT Exercise 6.2 • Q7 & Q8',
      '(i) Using Theorem 6.1 (BPT), prove that a line drawn through the mid-point of one side of a triangle parallel to another side bisects the third side. (ii) Prove that the line joining the mid-points of any two sides of a triangle is parallel to the third side.',
      4,
      `<p><strong>(i) Proof:</strong> Let D be mid-point of AB in $\\Delta ABC$, so $AD = DB \\implies \\frac{AD}{DB} = 1$.<br>
A line $l$ through D parallel to BC intersects AC at E ($DE \\parallel BC$).<br>
By BPT: $\\frac{AD}{DB} = \\frac{AE}{EC} \\implies 1 = \\frac{AE}{EC} \\implies AE = EC$.<br>
Thus, E is the mid-point of AC. The line bisects the third side. Hence proved.</p>
<p><strong>(ii) Proof:</strong> In $\\Delta ABC$, let D and E be mid-points of AB and AC respectively.<br>
Since D is mid-point of AB: $AD = DB \\implies \\frac{AD}{DB} = 1 \\quad \\text{--- (1)}$.<br>
Since E is mid-point of AC: $AE = EC \\implies \\frac{AE}{EC} = 1 \\quad \\text{--- (2)}$.<br>
From (1) and (2): $\\frac{AD}{DB} = \\frac{AE}{EC}$.<br>
By Converse of BPT: $\\mathbf{DE \\parallel BC}$. Hence proved.</p>`,
      [
        { key: '(i) Using AD/DB = 1 with BPT to prove AE = EC', marks: '2 Marks' },
        { key: '(ii) Using AD/DB = AE/EC = 1 with converse BPT to prove DE || BC', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q20',
      'NCERT Exercise 6.3 • Q1',
      'State which pairs of triangles are similar. Write the similarity criterion used: (i) $\\Delta ABC$ with angles 60°, 80°, 40° and $\\Delta PQR$ with angles 60°, 80°, 40°; (ii) $\\Delta ABC$ with sides 2, 3, 2.5 and $\\Delta PQR$ with sides 6, 4, 5; (iii) $\\Delta MNL$ with angle 70° between sides 2.5 and 5, and $\\Delta QPR$ with angle 70° between sides 5 and 10.',
      3,
      `<ol>
  <li><strong>(i) $\\Delta ABC$ and $\\Delta PQR$:</strong><br>
    $\\angle A = \\angle P = 60^\\circ, \\angle B = \\angle Q = 80^\\circ, \\angle C = \\angle R = 40^\\circ$.<br>
    By <strong>AAA (or AA) similarity criterion</strong>: $\\mathbf{\\Delta ABC \\sim \\Delta PQR}$.
  </li>
  <li><strong>(ii) $\\Delta ABC$ and $\\Delta PQR$:</strong><br>
    $$\\frac{AB}{QR} = \\frac{2}{4} = \\frac{1}{2}, \\quad \\frac{BC}{PR} = \\frac{2.5}{5} = \\frac{1}{2}, \\quad \\frac{CA}{PQ} = \\frac{3}{6} = \\frac{1}{2}$$
    By <strong>SSS similarity criterion</strong>: $\\mathbf{\\Delta ABC \\sim \\Delta QRP}$.
  </li>
  <li><strong>(iii) $\\Delta MNL$ and $\\Delta QPR$:</strong><br>
    $$\\frac{MN}{QP} = \\frac{2.5}{5} = \\frac{1}{2}, \\quad \\frac{ML}{QR} = \\frac{5}{10} = \\frac{1}{2}, \\quad \\text{and } \\angle M = \\angle Q = 70^\\circ$$
    By <strong>SAS similarity criterion</strong>: $\\mathbf{\\Delta MNL \\sim \\Delta QPR}$.
  </li>
</ol>`,
      [
        { key: '(i) AAA similarity criterion: triangle ABC ~ triangle PQR', marks: '1 Mark' },
        { key: '(ii) SSS similarity: ratio 1/2 -> triangle ABC ~ triangle QRP', marks: '1 Mark' },
        { key: '(iii) SAS similarity: ratio 1/2 with 70° angle -> triangle MNL ~ triangle QPR', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q21',
      'NCERT Exercise 6.3 • Q2',
      'In Fig, $\\Delta ODC \\sim \\Delta OBA, \\angle BOC = 125^\\circ$ and $\\angle CBO = 70^\\circ$. Find $\\angle DOC, \\angle DCO$ and $\\angle OAB$.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>$DOB$ is a straight line segment.
    $$\\angle DOC + \\angle BOC = 180^\\circ \\implies \\angle DOC + 125^\\circ = 180^\\circ \\implies \\mathbf{\\angle DOC = 55^\\circ}$$
  </li>
  <li>In $\\Delta DOC$, sum of interior angles is $180^\\circ$:
    $$\\angle DCO + \\angle CDO + \\angle DOC = 180^\\circ$$
    $$\\angle DCO + 70^\\circ + 55^\\circ = 180^\\circ \\implies \\angle DCO + 125^\\circ = 180^\\circ \\implies \\mathbf{\\angle DCO = 55^\\circ}$$
  </li>
  <li>Given $\\Delta ODC \\sim \\Delta OBA$. Corresponding angles of similar triangles are equal:
    $$\\mathbf{\\angle OAB = \\angle OCD = \\angle DCO = 55^\\circ}$$
  </li>
</ol>
<p><strong>Answer:</strong> $\\angle DOC = 55^\\circ, \\angle DCO = 55^\\circ, \\angle OAB = 55^\\circ$.</p>`,
      [
        { key: 'Linear pair: angle DOC = 55°', marks: '1 Mark' },
        { key: 'Angle sum property of triangle: angle DCO = 55°', marks: '1 Mark' },
        { key: 'Similarity property: angle OAB = angle DCO = 55°', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q22',
      'NCERT Exercise 6.3 • Q3',
      'Diagonals AC and BD of a trapezium ABCD with $AB \\parallel DC$ intersect each other at the point O. Using a similarity criterion for two triangles, show that $\\frac{OA}{OC} = \\frac{OB}{OD}$.',
      3,
      `<p><strong>Proof:</strong></p>
<ol>
  <li>In trapezium ABCD, $AB \\parallel DC$. Diagonals AC and BD intersect at O.</li>
  <li>Consider $\\Delta OAB$ and $\\Delta OCD$:
    <ul>
      <li>$\\angle OAB = \\angle OCD$ (alternate interior angles, since $AB \\parallel DC$ with AC as transversal).</li>
      <li>$\\angle OBA = \\angle ODC$ (alternate interior angles, with BD as transversal).</li>
      <li>$\\angle AOB = \\angle COD$ (vertically opposite angles).</li>
    </ul>
  </li>
  <li>By <strong>AAA similarity criterion</strong> (or AA similarity):
    $$\\Delta OAB \\sim \\Delta OCD$$
  </li>
  <li>Since corresponding sides of similar triangles are in the same ratio:
    $$\\frac{OA}{OC} = \\frac{OB}{OD} = \\frac{AB}{CD} \\implies \\mathbf{\\frac{OA}{OC} = \\frac{OB}{OD}}$$
  </li>
</ol>
<p>Hence proved.</p>`,
      [
        { key: 'Identifying alternate interior angles angle OAB = angle OCD and angle OBA = angle ODC', marks: '1 Mark' },
        { key: 'Applying AA similarity to show triangle OAB ~ triangle OCD', marks: '1 Mark' },
        { key: 'Using proportionality of sides to conclude OA/OC = OB/OD', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q23',
      'NCERT Exercise 6.3 • Q6',
      'In Fig, if $\\Delta ABE \\cong \\Delta ACD$, show that $\\Delta ADE \\sim \\Delta ABC$.',
      3,
      `<p><strong>Proof:</strong></p>
<ol>
  <li>Given: $\\Delta ABE \\cong \\Delta ACD$.<br>
    By CPCT (corresponding parts of congruent triangles):
    $$AB = AC \\quad \\text{--- (1)}$$
    $$AE = AD \\implies AD = AE \\quad \\text{--- (2)}$$
  </li>
  <li>Dividing equation (2) by equation (1):
    $$\\frac{AD}{AB} = \\frac{AE}{AC} \\quad \\text{--- (3)}$$
  </li>
  <li>In $\\Delta ADE$ and $\\Delta ABC$:
    $$\\frac{AD}{AB} = \\frac{AE}{AC} \\quad [\\text{from (3)}]$$
    $$\\angle DAE = \\angle BAC \\quad [\\text{common angle } \\angle A]$$
  </li>
  <li>Therefore, by <strong>SAS similarity criterion</strong>:
    $$\\mathbf{\\Delta ADE \\sim \\Delta ABC}$$
  </li>
</ol>
<p>Hence proved.</p>`,
      [
        { key: 'Using congruence CPCT: AB = AC and AD = AE', marks: '1 Mark' },
        { key: 'Dividing to obtain ratio AD/AB = AE/AC', marks: '1 Mark' },
        { key: 'Applying SAS similarity with common angle A', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q24',
      'NCERT Exercise 6.3 • Q7',
      'In Fig, altitudes AD and CE of $\\Delta ABC$ intersect each other at the point P. Show that: (i) $\\Delta AEP \\sim \\Delta CDP$, (ii) $\\Delta ABD \\sim \\Delta CBE$.',
      4,
      `<p><strong>(i) Proof that $\\Delta AEP \\sim \\Delta CDP$:</strong><br>
In $\\Delta AEP$ and $\\Delta CDP$:<br>
$\\angle AEP = \\angle CDP = 90^\\circ$ (given altitudes CE and AD)<br>
$\\angle APE = \\angle CPD$ (vertically opposite angles)<br>
By <strong>AA similarity criterion</strong>: $\\mathbf{\\Delta AEP \\sim \\Delta CDP}$. Hence proved.</p>
<p><strong>(ii) Proof that $\\Delta ABD \\sim \\Delta CBE$:</strong><br>
In $\\Delta ABD$ and $\\Delta CBE$:<br>
$\\angle ADB = \\angle CEB = 90^\\circ$<br>
$\\angle ABD = \\angle CBE$ (common angle $\\angle B$)<br>
By <strong>AA similarity criterion</strong>: $\\mathbf{\\Delta ABD \\sim \\Delta CBE}$. Hence proved.</p>`,
      [
        { key: '(i) Right angles and vertically opposite angles establish AA similarity', marks: '2 Marks' },
        { key: '(ii) Right angles and common angle B establish AA similarity', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q25',
      'NCERT Exercise 6.3 • Q9',
      'In Fig, ABC and AMP are two right triangles, right angled at B and M respectively. Prove that: (i) $\\Delta ABC \\sim \\Delta AMP$, (ii) $\\frac{CA}{PA} = \\frac{BC}{MP}$.',
      3,
      `<p><strong>Proof:</strong></p>
<ol>
  <li><strong>(i) Prove $\\Delta ABC \\sim \\Delta AMP$:</strong><br>
    In $\\Delta ABC$ and $\\Delta AMP$:
    $$\\angle ABC = \\angle AMP = 90^\\circ \\quad (\\text{given})$$
    $$\\angle BAC = \\angle MAP \\quad (\\text{common angle } \\angle A)$$
    By <strong>AA similarity criterion</strong>:
    $$\\mathbf{\\Delta ABC \\sim \\Delta AMP}$$
  </li>
  <li><strong>(ii) Prove $\\frac{CA}{PA} = \\frac{BC}{MP}$:</strong><br>
    Since $\\Delta ABC \\sim \\Delta AMP$, their corresponding sides are proportional:
    $$\\frac{AB}{AM} = \\frac{BC}{MP} = \\frac{CA}{PA}$$
    $$\\mathbf{\\frac{CA}{PA} = \\frac{BC}{MP}}$$
  </li>
</ol>
<p>Hence proved.</p>`,
      [
        { key: '(i) AA similarity via right angles and common angle A', marks: '1.5 Marks' },
        { key: '(ii) Proportionality of corresponding sides CA/PA = BC/MP', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q26',
      'NCERT Exercise 6.3 • Q10',
      'CD and GH are respectively the bisectors of $\\angle ACB$ and $\\angle EGF$ such that D and H lie on sides AB and FE of $\\Delta ABC$ and $\\Delta EFG$ respectively. If $\\Delta ABC \\sim \\Delta FEG$, show that: (i) $\\frac{CD}{GH} = \\frac{AC}{FG}$, (ii) $\\Delta DCB \\sim \\Delta HGE$.',
      4,
      `<p><strong>Proof:</strong><br>
Given $\\Delta ABC \\sim \\Delta FEG$:<br>
$\\angle A = \\angle F, \\quad \\angle B = \\angle E, \\quad \\angle ACB = \\angle FGE$.<br>
Since CD bisects $\\angle ACB$ and GH bisects $\\angle FGE$:<br>
$\\angle ACD = \\angle DCB = \\frac{1}{2}\\angle ACB = \\frac{1}{2}\\angle FGE = \\angle FGH = \\angle HGE$.</p>
<ol>
  <li><strong>(i) In $\\Delta ACD$ and $\\Delta FGH$:</strong><br>
    $\\angle A = \\angle F$ and $\\angle ACD = \\angle FGH$.<br>
    By AA similarity: $\\Delta ACD \\sim \\Delta FGH$.<br>
    Therefore: $\\mathbf{\\frac{CD}{GH} = \\frac{AC}{FG}}$.
  </li>
  <li><strong>(ii) In $\\Delta DCB$ and $\\Delta HGE$:</strong><br>
    $\\angle B = \\angle E$ and $\\angle DCB = \\angle HGE$.<br>
    By AA similarity: $\\mathbf{\\Delta DCB \\sim \\Delta HGE}$.
  </li>
</ol>
<p>Hence proved.</p>`,
      [
        { key: 'Relating bisected angles: angle ACD = angle FGH and angle DCB = angle HGE', marks: '1.5 Marks' },
        { key: '(i) Proving triangle ACD ~ triangle FGH to get CD/GH = AC/FG', marks: '1.5 Marks' },
        { key: '(ii) Proving triangle DCB ~ triangle HGE via AA similarity', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q27',
      'NCERT Exercise 6.3 • Q11',
      'In Fig, E is a point on side CB produced of an isosceles triangle ABC with $AB = AC$. If $AD \\perp BC$ and $EF \\perp AC$, prove that $\\Delta ABD \\sim \\Delta ECF$.',
      3,
      `<p><strong>Proof:</strong></p>
<ol>
  <li>In $\\Delta ABC$, $AB = AC$.<br>
    Angles opposite to equal sides are equal:
    $$\\angle B = \\angle C \\implies \\angle ABD = \\angle ECF \\quad \\text{--- (1)}$$
  </li>
  <li>Given: $AD \\perp BC \\implies \\angle ADB = 90^\\circ$.<br>
    Given: $EF \\perp AC \\implies \\angle EFC = 90^\\circ$.<br>
    $$\\angle ADB = \\angle EFC = 90^\\circ \\quad \\text{--- (2)}$$
  </li>
  <li>In $\\Delta ABD$ and $\\Delta ECF$:
    $$\\angle ABD = \\angle ECF \\quad [\\text{from (1)}]$$
    $$\\angle ADB = \\angle EFC \\quad [\\text{from (2)}]$$
  </li>
  <li>By <strong>AA similarity criterion</strong>:
    $$\\mathbf{\\Delta ABD \\sim \\Delta ECF}$$
  </li>
</ol>
<p>Hence proved.</p>`,
      [
        { key: 'Using isosceles property to show angle B = angle C', marks: '1 Mark' },
        { key: 'Identifying right angles angle ADB = angle EFC = 90°', marks: '1 Mark' },
        { key: 'Applying AA similarity to prove triangle ABD ~ triangle ECF', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q28',
      'NCERT Exercise 6.3 • Q12',
      'Sides AB and BC and median AD of a triangle ABC are respectively proportional to sides PQ and QR and median PM of $\\Delta PQR$. Show that $\\Delta ABC \\sim \\Delta PQR$.',
      4,
      `<p><strong>Proof:</strong></p>
<ol>
  <li>Given: $\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AD}{PM}$.</li>
  <li>Since AD is median of $\\Delta ABC$, $D$ is mid-point of $BC \\implies BC = 2BD$.<br>
    Since PM is median of $\\Delta PQR$, $M$ is mid-point of $QR \\implies QR = 2QM$.
  </li>
  <li>$$\\frac{AB}{PQ} = \\frac{2BD}{2QM} = \\frac{AD}{PM} \\implies \\frac{AB}{PQ} = \\frac{BD}{QM} = \\frac{AD}{PM}$$</li>
  <li>In $\\Delta ABD$ and $\\Delta PQM$, all three corresponding sides are in proportion.<br>
    By <strong>SSS similarity criterion</strong>: $\\Delta ABD \\sim \\Delta PQM$.<br>
    Therefore, corresponding angles are equal:
    $$\\angle B = \\angle Q \\quad \\text{--- (1)}$$
  </li>
  <li>Now in $\\Delta ABC$ and $\\Delta PQR$:
    $$\\frac{AB}{PQ} = \\frac{BC}{QR} \\quad (\\text{given})$$
    $$\\angle B = \\angle Q \\quad [\\text{from (1)}]$$
  </li>
  <li>By <strong>SAS similarity criterion</strong>:
    $$\\mathbf{\\Delta ABC \\sim \\Delta PQR}$$
  </li>
</ol>
<p>Hence proved.</p>`,
      [
        { key: 'Substituting BC = 2BD and QR = 2QM', marks: '1 Mark' },
        { key: 'Proving triangle ABD ~ triangle PQM via SSS to get angle B = angle Q', marks: '1.5 Marks' },
        { key: 'Applying SAS similarity on main triangles ABC and PQR', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch6-q29',
      'NCERT Exercise 6.3 • Q14',
      'Sides AB and AC and median AD of a triangle ABC are respectively proportional to sides PQ and PR and median PM of another triangle PQR. Show that $\\Delta ABC \\sim \\Delta PQR$.',
      5,
      `<p><strong>Construction & Proof:</strong></p>
<ol>
  <li>Given: $\\frac{AB}{PQ} = \\frac{AC}{PR} = \\frac{AD}{PM}$.</li>
  <li><strong>Construction:</strong> Produce AD to E such that $AD = DE$, and join EC. Produce PM to N such that $PM = MN$, and join NR.</li>
  <li>In $\\Delta ADB$ and $\\Delta EDC$: $AD = DE$ (by construction), $BD = DC$ (since AD is median), and $\\angle ADB = \\angle EDC$ (vertically opposite).<br>
    By SAS congruence: $\\Delta ADB \\cong \\Delta EDC \\implies AB = EC$.<br>
    Similarly, $\\Delta PQM \\cong \\Delta NRM \\implies PQ = NR$.
  </li>
  <li>Therefore, $\\frac{EC}{NR} = \\frac{AB}{PQ} = \\frac{AC}{PR} = \\frac{2AD}{2PM} = \\frac{AE}{PN}$.<br>
    In $\\Delta ACE$ and $\\Delta PRN$: $\\frac{AC}{PR} = \\frac{EC}{NR} = \\frac{AE}{PN}$.<br>
    By SSS similarity: $\\Delta ACE \\sim \\Delta PRN \\implies \\angle 1 = \\angle 2$.
  </li>
  <li>Similarly, producing on the other side yields $\\angle 3 = \\angle 4$.<br>
    Adding both: $\\angle 1 + \\angle 3 = \\angle 2 + \\angle 4 \\implies \\angle A = \\angle P$.
  </li>
  <li>Now in $\\Delta ABC$ and $\\Delta PQR$: $\\frac{AB}{PQ} = \\frac{AC}{PR}$ and $\\angle A = \\angle P$.<br>
    By <strong>SAS similarity criterion</strong>:
    $$\\mathbf{\\Delta ABC \\sim \\Delta PQR}$$
  </li>
</ol>
<p>Hence proved.</p>`,
      [
        { key: 'Construction producing medians to create congruent pairs', marks: '1.5 Marks' },
        { key: 'Proving triangle ACE ~ triangle PRN via SSS', marks: '1.5 Marks' },
        { key: 'Showing angle A = angle P', marks: '1 Mark' },
        { key: 'Concluding triangle ABC ~ triangle PQR by SAS similarity', marks: '1 Mark' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 7: COORDINATE GEOMETRY (7 Additional NCERT Qs: Total 20 Qs = 100%)
// ============================================================================
function getChapter7ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch7-q14',
      'NCERT Exercise 7.1 • Q1',
      'Find the distance between the following pairs of points: (i) $(2, 3), (4, 1)$, (ii) $(-5, 7), (-1, 3)$, (iii) $(a, b), (-a, -b)$.',
      3,
      `<p><strong>Distance Formula:</strong> $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</p>
<ol>
  <li><strong>(i) Points $(2, 3)$ and $(4, 1)$:</strong>
    $$d = \\sqrt{(4 - 2)^2 + (1 - 3)^2} = \\sqrt{2^2 + (-2)^2} = \\sqrt{4 + 4} = \\sqrt{8} = \\mathbf{2\\sqrt{2}\\text{ units}}$$
  </li>
  <li><strong>(ii) Points $(-5, 7)$ and $(-1, 3)$:</strong>
    $$d = \\sqrt{(-1 - (-5))^2 + (3 - 7)^2} = \\sqrt{4^2 + (-4)^2} = \\sqrt{16 + 16} = \\sqrt{32} = \\mathbf{4\\sqrt{2}\\text{ units}}$$
  </li>
  <li><strong>(iii) Points $(a, b)$ and $(-a, -b)$:</strong>
    $$d = \\sqrt{(-a - a)^2 + (-b - b)^2} = \\sqrt{(-2a)^2 + (-2b)^2} = \\sqrt{4a^2 + 4b^2} = \\mathbf{2\\sqrt{a^2 + b^2}\\text{ units}}$$
  </li>
</ol>`,
      [
        { key: '(i) d = 2*sqrt(2) units', marks: '1 Mark' },
        { key: '(ii) d = 4*sqrt(2) units', marks: '1 Mark' },
        { key: '(iii) d = 2*sqrt(a^2 + b^2) units', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q15',
      'NCERT Exercise 7.1 • Q2',
      'Find the distance between the points (0, 0) and (36, 15). Can you now find the distance between the two towns A and B discussed in Section 7.2?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let $A(0, 0)$ and $B(36, 15)$.</li>
  <li>Using distance formula:
    $$AB = \\sqrt{(36 - 0)^2 + (15 - 0)^2} = \\sqrt{36^2 + 15^2}$$
    $$AB = \\sqrt{1296 + 225} = \\sqrt{1521} = \\mathbf{39\\text{ km}}$$
  </li>
  <li><strong>Yes</strong>, the distance between town A and town B is <strong>39 km</strong>.</li>
</ol>`,
      [
        { key: 'Applying distance formula with (0,0) and (36,15)', marks: '1.5 Marks' },
        { key: 'Calculating sqrt(1521) = 39 km', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q16',
      'NCERT Exercise 7.1 • Q4',
      'Check whether (5, -2), (6, 4) and (7, -2) are the vertices of an isosceles triangle.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let points be $A(5, -2), B(6, 4), C(7, -2)$.</li>
  <li>Lengths of sides using distance formula:
    $$AB = \\sqrt{(6 - 5)^2 + (4 - (-2))^2} = \\sqrt{1^2 + 6^2} = \\sqrt{1 + 36} = \\mathbf{\\sqrt{37}}$$
    $$BC = \\sqrt{(7 - 6)^2 + (-2 - 4)^2} = \\sqrt{1^2 + (-6)^2} = \\sqrt{1 + 36} = \\mathbf{\\sqrt{37}}$$
    $$CA = \\sqrt{(7 - 5)^2 + (-2 - (-2))^2} = \\sqrt{2^2 + 0^2} = \\sqrt{4} = \\mathbf{2}$$
  </li>
  <li>Since $AB = BC = \\sqrt{37} \\neq CA$, two sides are equal.</li>
</ol>
<p><strong>Answer:</strong> <strong>Yes</strong>, the given points are the vertices of an <strong>isosceles triangle</strong>.</p>`,
      [
        { key: 'Calculating AB = sqrt(37)', marks: '1 Mark' },
        { key: 'Calculating BC = sqrt(37) and CA = 2', marks: '1 Mark' },
        { key: 'Concluding AB = BC implies isosceles triangle', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q17',
      'NCERT Exercise 7.1 • Q6',
      'Name the type of quadrilateral formed, if any, by the following points, and give reasons for your answer: (-1, -2), (1, 0), (-1, 2), (-3, 0).',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let $A(-1, -2), B(1, 0), C(-1, 2), D(-3, 0)$.</li>
  <li>Side lengths:
    $$AB = \\sqrt{(1 - (-1))^2 + (0 - (-2))^2} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$
    $$BC = \\sqrt{(-1 - 1)^2 + (2 - 0)^2} = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$
    $$CD = \\sqrt{(-3 - (-1))^2 + (0 - 2)^2} = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$$
    $$DA = \\sqrt{(-1 - (-3))^2 + (-2 - 0)^2} = \\sqrt{2^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$$
    All 4 sides are equal: $AB = BC = CD = DA = 2\\sqrt{2}$.
  </li>
  <li>Diagonals:
    $$AC = \\sqrt{(-1 - (-1))^2 + (2 - (-2))^2} = \\sqrt{0^2 + 4^2} = 4$$
    $$BD = \\sqrt{(-3 - 1)^2 + (0 - 0)^2} = \\sqrt{(-4)^2 + 0} = 4$$
    Diagonals are equal: $AC = BD = 4$.
  </li>
</ol>
<p><strong>Answer:</strong> Since all four sides are equal and diagonals are equal, the quadrilateral is a <strong>SQUARE</strong>.</p>`,
      [
        { key: 'Calculating 4 side lengths: AB = BC = CD = DA = 2*sqrt(2)', marks: '1.5 Marks' },
        { key: 'Calculating diagonals AC = BD = 4 and concluding Square', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q18',
      'NCERT Exercise 7.1 • Q10',
      'Find a relation between x and y such that the point (x, y) is equidistant from the point (3, 6) and (-3, 4).',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let $P(x, y)$ be equidistant from $A(3, 6)$ and $B(-3, 4)$.
    $$PA = PB \\implies PA^2 = PB^2$$
  </li>
  <li>Using distance formula:
    $$(x - 3)^2 + (y - 6)^2 = (x - (-3))^2 + (y - 4)^2$$
    $$(x^2 - 6x + 9) + (y^2 - 12y + 36) = (x^2 + 6x + 9) + (y^2 - 8y + 16)$$
  </li>
  <li>Cancelling $x^2 + y^2$:
    $$-6x - 12y + 45 = 6x - 8y + 25$$
    $$-6x - 6x - 12y + 8y + 45 - 25 = 0$$
    $$-12x - 4y + 20 = 0$$
  </li>
  <li>Dividing by $-4$:
    $$\\mathbf{3x + y - 5 = 0}$$
  </li>
</ol>
<p><strong>Answer:</strong> The relation is $\\mathbf{3x + y = 5}$.</p>`,
      [
        { key: 'Setting up PA^2 = PB^2', marks: '1 Mark' },
        { key: 'Expanding (x - 3)^2 + (y - 6)^2 = (x + 3)^2 + (y - 4)^2', marks: '1 Mark' },
        { key: 'Simplifying to 3x + y - 5 = 0', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q19',
      'NCERT Exercise 7.2 • Q1',
      'Find the coordinates of the point which divides the join of (-1, 7) and (4, -3) in the ratio 2 : 3.',
      3,
      `<p><strong>Section Formula:</strong> $P(x, y) = \\left(\\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2}\\right)$.</p>
<ol>
  <li>Here $x_1 = -1, y_1 = 7, x_2 = 4, y_2 = -3, m_1 = 2, m_2 = 3$.</li>
  <li>$x$-coordinate:
    $$x = \\frac{2(4) + 3(-1)}{2 + 3} = \\frac{8 - 3}{5} = \\frac{5}{5} = \\mathbf{1}$$
  </li>
  <li>$y$-coordinate:
    $$y = \\frac{2(-3) + 3(7)}{2 + 3} = \\frac{-6 + 21}{5} = \\frac{15}{5} = \\mathbf{3}$$
  </li>
</ol>
<p><strong>Answer:</strong> The coordinates of the dividing point are <strong>(1, 3)</strong>.</p>`,
      [
        { key: 'Stating section formula', marks: '1 Mark' },
        { key: 'Calculating x = 1', marks: '1 Mark' },
        { key: 'Calculating y = 3 -> point (1, 3)', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch7-q20',
      'NCERT Exercise 7.2 • Q6',
      'If (1, 2), (4, y), (x, 6) and (3, 5) are the vertices of a parallelogram taken in order, find x and y.',
      3,
      `<p><strong>Property:</strong> The diagonals of a parallelogram bisect each other. Therefore, the mid-point of diagonal AC is the same as the mid-point of diagonal BD.</p>
<ol>
  <li>Let $A(1, 2), B(4, y), C(x, 6), D(3, 5)$.</li>
  <li>Mid-point of AC:
    $$M_{AC} = \\left(\\frac{1 + x}{2}, \\frac{2 + 6}{2}\\right) = \\left(\\frac{1 + x}{2}, 4\\right)$$
  </li>
  <li>Mid-point of BD:
    $$M_{BD} = \\left(\\frac{4 + 3}{2}, \\frac{y + 5}{2}\\right) = \\left(\\frac{7}{2}, \\frac{y + 5}{2}\\right)$$
  </li>
  <li>Equating coordinates:
    $$\\frac{1 + x}{2} = \\frac{7}{2} \\implies 1 + x = 7 \\implies \\mathbf{x = 6}$$
    $$\\frac{y + 5}{2} = 4 \\implies y + 5 = 8 \\implies \\mathbf{y = 3}$$
  </li>
</ol>
<p><strong>Answer:</strong> $\\mathbf{x = 6}$ and $\\mathbf{y = 3}$.</p>`,
      [
        { key: 'Using property: diagonals bisect each other (midpoints equal)', marks: '1 Mark' },
        { key: 'Solving (1 + x)/2 = 7/2 -> x = 6', marks: '1 Mark' },
        { key: 'Solving (y + 5)/2 = 4 -> y = 3', marks: '1 Mark' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 8: TRIGONOMETRY (3 Additional NCERT Qs: Total 20 Qs = 100%)
// ============================================================================
function getChapter8ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch8-q18',
      'NCERT Exercise 8.1 • Q1',
      'In $\\Delta ABC$, right-angled at B, $AB = 24\\text{ cm}, BC = 7\\text{ cm}$. Determine: (i) $\\sin A, \\cos A$; (ii) $\\sin C, \\cos C$.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>By Pythagoras Theorem in right $\\Delta ABC$:
    $$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = \\mathbf{25\\text{ cm}}$$
  </li>
  <li><strong>(i) For angle A:</strong> Opposite side $= BC = 7$, Adjacent $= AB = 24$, Hypotenuse $= AC = 25$.
    $$\\mathbf{\\sin A = \\frac{7}{25}}, \\quad \\mathbf{\\cos A = \\frac{24}{25}}$$
  </li>
  <li><strong>(ii) For angle C:</strong> Opposite side $= AB = 24$, Adjacent $= BC = 7$, Hypotenuse $= AC = 25$.
    $$\\mathbf{\\sin C = \\frac{24}{25}}, \\quad \\mathbf{\\cos C = \\frac{7}{25}}$$
  </li>
</ol>`,
      [
        { key: 'Hypotenuse AC = 25 cm via Pythagoras theorem', marks: '1 Mark' },
        { key: '(i) sin A = 7/25, cos A = 24/25', marks: '1 Mark' },
        { key: '(ii) sin C = 24/25, cos C = 7/25', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch8-q19',
      'NCERT Exercise 8.1 • Q2',
      'In Fig, find $\\tan P - \\cot R$ where $\\Delta PQR$ is right-angled at Q with $PQ = 12\\text{ cm}$ and $PR = 13\\text{ cm}$.',
      2,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>In right $\\Delta PQR$:
    $$QR = \\sqrt{PR^2 - PQ^2} = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = \\mathbf{5\\text{ cm}}$$
  </li>
  <li>For angle P: $\\tan P = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{QR}{PQ} = \\frac{5}{12}$.</li>
  <li>For angle R: $\\cot R = \\frac{\\text{Adjacent}}{\\text{Opposite}} = \\frac{QR}{PQ} = \\frac{5}{12}$.</li>
  <li>$$\\tan P - \\cot R = \\frac{5}{12} - \\frac{5}{12} = \\mathbf{0}$$</li>
</ol>`,
      [
        { key: 'Finding QR = 5 cm via Pythagoras theorem', marks: '1 Mark' },
        { key: 'Evaluating tan P = 5/12, cot R = 5/12 and difference = 0', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch8-q20',
      'NCERT Exercise 8.3 • Q4(ii) & Q4(vi)',
      'Prove the following trigonometric identities: (i) $\\frac{\\cos A}{1 + \\sin A} + \\frac{1 + \\sin A}{\\cos A} = 2\\sec A$, (ii) $\\sqrt{\\frac{1 + \\sin A}{1 - \\sin A}} = \\sec A + \\tan A$.',
      4,
      `<p><strong>(i) Proof:</strong><br>
$$\\text{LHS} = \\frac{\\cos^2 A + (1 + \\sin A)^2}{\\cos A (1 + \\sin A)} = \\frac{\\cos^2 A + 1 + 2\\sin A + \\sin^2 A}{\\cos A (1 + \\sin A)}$$
Since $\\sin^2 A + \\cos^2 A = 1$:
$$= \\frac{1 + 1 + 2\\sin A}{\\cos A (1 + \\sin A)} = \\frac{2 + 2\\sin A}{\\cos A (1 + \\sin A)} = \\frac{2(1 + \\sin A)}{\\cos A (1 + \\sin A)} = \\frac{2}{\\cos A} = \\mathbf{2\\sec A} = \\text{RHS.}$$</p>
<p><strong>(ii) Proof:</strong><br>
Multiplying numerator and denominator inside radical by $(1 + \\sin A)$:<br>
$$\\text{LHS} = \\sqrt{\\frac{(1 + \\sin A)(1 + \\sin A)}{(1 - \\sin A)(1 + \\sin A)}} = \\sqrt{\\frac{(1 + \\sin A)^2}{1 - \\sin^2 A}} = \\sqrt{\\frac{(1 + \\sin A)^2}{\\cos^2 A}}$$
$$= \\frac{1 + \\sin A}{\\cos A} = \\frac{1}{\\cos A} + \\frac{\\sin A}{\\cos A} = \\mathbf{\\sec A + \\tan A} = \\text{RHS.}$$</p>`,
      [
        { key: '(i) Expanding numerator to 2(1 + sin A) / [cos A (1 + sin A)] = 2 sec A', marks: '2 Marks' },
        { key: '(ii) Rationalizing radicand to (1 + sin A)/cos A = sec A + tan A', marks: '2 Marks' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 10: CIRCLES (4 Additional NCERT Qs: Total 17 Qs = 100%)
// ============================================================================
function getChapter10ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch10-q14',
      'NCERT Exercise 10.2 • Q1 & Q2',
      '(i) From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is: (a) 7 cm (b) 12 cm (c) 15 cm (d) 24.5 cm. (ii) In Fig, if TP and TQ are the two tangents to a circle with centre O so that $\\angle POQ = 110^\\circ$, then $\\angle PTQ$ is equal to: (a) 60° (b) 70° (c) 80° (d) 90°.',
      3,
      `<ol>
  <li><strong>(i) Radius of circle:</strong><br>
    In right $\\Delta OPQ$ ($OP \\perp PQ$):
    $$OP = \\sqrt{OQ^2 - PQ^2} = \\sqrt{25^2 - 24^2} = \\sqrt{625 - 576} = \\sqrt{49} = \\mathbf{7\\text{ cm}}$$
    Correct option is <strong>(a) 7 cm</strong>.
  </li>
  <li><strong>(ii) Angle PTQ:</strong><br>
    Since radius is perpendicular to tangent at point of contact: $\\angle OPT = 90^\\circ$ and $\\angle OQT = 90^\\circ$.<br>
    In quadrilateral OPTQ, sum of interior angles is $360^\\circ$:
    $$\\angle PTQ + \\angle POQ + 90^\\circ + 90^\\circ = 360^\\circ$$
    $$\\angle PTQ + 110^\\circ = 180^\\circ \\implies \\mathbf{\\angle PTQ = 70^\\circ}$$
    Correct option is <strong>(b) 70°</strong>.
  </li>
</ol>`,
      [
        { key: '(i) Pythagoras theorem: radius = 7 cm [Option (a)]', marks: '1.5 Marks' },
        { key: '(ii) Quadrilateral supplementary angles: angle PTQ = 70° [Option (b)]', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch10-q15',
      'NCERT Exercise 10.2 • Q4 & Q5',
      '(i) Prove that the tangents drawn at the ends of a diameter of a circle are parallel. (ii) Prove that the perpendicular at the point of contact to the tangent to a circle passes through the centre.',
      4,
      `<p><strong>(i) Tangents at ends of diameter:</strong><br>
Let AB be a diameter of a circle with centre O. Let lines $l$ and $m$ be tangents at ends A and B respectively.<br>
Since radius is perpendicular to the tangent at point of contact:<br>
$OA \\perp l \\implies \\angle 1 = 90^\\circ$.<br>
$OB \\perp m \\implies \\angle 2 = 90^\\circ$.<br>
Here, $\\angle 1$ and $\\angle 2$ are alternate interior angles for lines $l$ and $m$ intersected by transversal AB.<br>
Since alternate interior angles are equal (both $90^\\circ$), the tangents are <strong>parallel ($l \\parallel m$)</strong>. Hence proved.</p>
<p><strong>(ii) Perpendicular passes through centre:</strong><br>
Let line $l$ be tangent at point P to circle with centre O. Let perpendicular to $l$ at P not pass through O, but pass through another point O\'.<br>
Then $\\angle O\'PB = 90^\\circ$.<br>
But by theorem, radius OP is perpendicular to tangent: $\\angle OPB = 90^\\circ$.<br>
This implies $\\angle O\'PB = \\angle OPB$, which is only possible if ray PO\' coincides with ray PO.<br>
Hence, the perpendicular at the point of contact <strong>must pass through the centre</strong>. Hence proved.</p>`,
      [
        { key: '(i) Proving tangents parallel via equal alternate angles 90°', marks: '2 Marks' },
        { key: '(ii) Contradiction proof showing perpendicular coincides with radius/centre', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch10-q16',
      'NCERT Exercise 10.2 • Q7 & Q8',
      '(i) Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the larger circle which touches the smaller circle. (ii) A quadrilateral ABCD is drawn to circumscribe a circle. Prove that $AB + CD = AD + BC$.',
      4,
      `<p><strong>(i) Concentric Circles:</strong><br>
Let chord AB of larger circle touch smaller circle at P. Since radius OP is perpendicular to tangent AB, $OP \\perp AB$ and OP bisects AB.<br>
In right $\\Delta OPA$ ($OA = 5\\text{ cm}, OP = 3\\text{ cm}$):<br>
$$AP = \\sqrt{OA^2 - OP^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4\\text{ cm}$$
Length of chord $AB = 2 \\times AP = 2 \\times 4 = \\mathbf{8\\text{ cm}}$.</p>
<p><strong>(ii) Quadrilateral ABCD circumscribing a circle:</strong><br>
Let circle touch sides AB, BC, CD, DA at P, Q, R, S respectively.<br>
Lengths of tangents drawn from an external point are equal:
$$AP = AS \\quad \\text{--- (1)}$$
$$BP = BQ \\quad \\text{--- (2)}$$
$$CR = CQ \\quad \\text{--- (3)}$$
$$DR = DS \\quad \\text{--- (4)}$$
Adding equations (1), (2), (3), and (4):
$$(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)$$
$$\\mathbf{AB + CD = AD + BC}$$
Hence proved.</p>`,
      [
        { key: '(i) AP = 4 cm -> chord AB = 8 cm', marks: '2 Marks' },
        { key: '(ii) Tangent equality from vertices AP=AS, BP=BQ, CR=CQ, DR=DS adding to AB + CD = AD + BC', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch10-q17',
      'NCERT Exercise 10.2 • Q12',
      'A triangle ABC is drawn to circumscribe a circle of radius 4 cm such that the segments BD and DC into which BC is divided by the point of contact D are of lengths 8 cm and 6 cm respectively. Find the sides AB and AC.',
      5,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let the circle touch AC at E and AB at F. Let $AF = AE = x\\text{ cm}$ (tangents from A).<br>
    Given $BD = BF = 8\\text{ cm}$ (tangents from B).<br>
    Given $CD = CE = 6\\text{ cm}$ (tangents from C).
  </li>
  <li>Sides of $\\Delta ABC$:
    $$a = BC = 6 + 8 = 14\\text{ cm}$$
    $$b = AC = x + 6\\text{ cm}$$
    $$c = AB = x + 8\\text{ cm}$$
  </li>
  <li>Semi-perimeter: $s = \\frac{a + b + c}{2} = \\frac{14 + (x + 6) + (x + 8)}{2} = \\frac{2x + 28}{2} = x + 14$.</li>
  <li>Area using Heron\'s formula:
    $$\\text{Area} = \\sqrt{s(s - a)(s - b)(s - c)} = \\sqrt{(x + 14)(x)(8)(6)} = \\sqrt{48x(x + 14)}$$
  </li>
  <li>Area using inradius $r = 4\\text{ cm}$:
    $$\\text{Area}(\\Delta ABC) = \\text{Area}(\\Delta OBC) + \\text{Area}(\\Delta OCA) + \\text{Area}(\\Delta OAB) = \\frac{1}{2} r (a + b + c) = r \\times s$$
    $$\\text{Area} = 4(x + 14)$$
  </li>
  <li>Equating both area formulas:
    $$4(x + 14) = \\sqrt{48x(x + 14)}$$
    Squaring both sides:
    $$16(x + 14)^2 = 48x(x + 14) \\implies x + 14 = 3x \\implies 2x = 14 \\implies \\mathbf{x = 7\\text{ cm}}$$
  </li>
  <li>Sides:
    $$\\mathbf{AB = x + 8 = 7 + 8 = 15\\text{ cm}}$$
    $$\\mathbf{AC = x + 6 = 7 + 6 = 13\\text{ cm}}$$
  </li>
</ol>
<p><strong>Answer:</strong> $AB = 15\\text{ cm}$ and $AC = 13\\text{ cm}$.</p>`,
      [
        { key: 'Setting up sides 14, x+6, x+8 and semi-perimeter s = x + 14', marks: '1.5 Marks' },
        { key: 'Equating Herons area sqrt(48x(x+14)) with r*s = 4(x+14)', marks: '2 Marks' },
        { key: 'Solving x = 7 cm to get AB = 15 cm, AC = 13 cm', marks: '1.5 Marks' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 11: AREAS RELATED TO CIRCLES (2 Additional NCERT Qs: Total 14 Qs = 100%)
// ============================================================================
function getChapter11ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch11-q13',
      'NCERT Exercise 11.1 • Q4',
      'A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the corresponding: (i) minor segment, (ii) major sector. (Use $\\pi = 3.14$)',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Given: radius $r = 10\\text{ cm}$, central angle $\\theta = 90^\\circ$.</li>
  <li>Area of sector $OAB$:
    $$A_{\\text{sector}} = \\frac{90^\\circ}{360^\\circ} \\pi r^2 = \\frac{1}{4} \\times 3.14 \\times 10^2 = \\frac{314}{4} = \\mathbf{78.5\\text{ cm}^2}$$
  </li>
  <li>Area of right $\\Delta OAB$ with legs $OA = OB = 10\\text{ cm}$:
    $$A_{\\Delta} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 10 \\times 10 = \\mathbf{50\\text{ cm}^2}$$
  </li>
  <li><strong>(i) Area of minor segment:</strong>
    $$\\text{Area} = A_{\\text{sector}} - A_{\\Delta} = 78.5 - 50 = \\mathbf{28.5\\text{ cm}^2}$$
  </li>
  <li><strong>(ii) Area of major sector:</strong>
    $$\\text{Angle} = 360^\\circ - 90^\\circ = 270^\\circ$$
    $$\\text{Area} = \\frac{270^\\circ}{360^\\circ} \\times 3.14 \\times 10^2 = \\frac{3}{4} \\times 314 = \\mathbf{235.5\\text{ cm}^2}$$
  </li>
</ol>`,
      [
        { key: '(i) Sector area 78.5 - Triangle area 50 = 28.5 cm^2 for minor segment', marks: '2 Marks' },
        { key: '(ii) Major sector angle 270° -> Area = 235.5 cm^2', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch11-q14',
      'NCERT Exercise 11.1 • Q5',
      'In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find: (i) the length of the arc, (ii) area of the sector formed by the arc, (iii) area of the segment formed by the corresponding chord. (Take $\\pi = 22/7$)',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Given: $r = 21\\text{ cm}, \\theta = 60^\\circ$.</li>
  <li><strong>(i) Length of arc:</strong>
    $$l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{60^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 132 = \\mathbf{22\\text{ cm}}$$
  </li>
  <li><strong>(ii) Area of sector:</strong>
    $$\\text{Area} = \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 21 \\times 21 = \\frac{1}{6} \\times 22 \\times 63 = \\mathbf{231\\text{ cm}^2}$$
  </li>
  <li><strong>(iii) Area of segment:</strong><br>
    In $\\Delta OAB$, $OA = OB = 21\\text{ cm}$ and $\\angle AOB = 60^\\circ$, so $\\Delta OAB$ is equilateral.<br>
    $$\\text{Area}(\\Delta OAB) = \\frac{\\sqrt{3}}{4} r^2 = \\frac{\\sqrt{3}}{4} \\times 21^2 = \\frac{441\\sqrt{3}}{4}\\text{ cm}^2$$
    $$\\text{Area of segment} = \\mathbf{\\left(231 - \\frac{441\\sqrt{3}}{4}\\right)\\text{ cm}^2} \\approx 231 - 190.95 = \\mathbf{40.05\\text{ cm}^2}$$
  </li>
</ol>`,
      [
        { key: '(i) Arc length = 22 cm', marks: '1 Mark' },
        { key: '(ii) Sector area = 231 cm^2', marks: '1.5 Marks' },
        { key: '(iii) Segment area = (231 - 441*sqrt(3)/4) cm^2 = 40.05 cm^2', marks: '1.5 Marks' }
      ]
    )
  ];
}

module.exports = {
  getChapter6ExtraAdditions,
  getChapter7ExtraAdditions,
  getChapter8ExtraAdditions,
  getChapter10ExtraAdditions,
  getChapter11ExtraAdditions
};
