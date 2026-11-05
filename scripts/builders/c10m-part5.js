// scripts/builders/c10m-part5.js
// Literal Verbatim Physical NCERT Questions for Class 10 Mathematics: Chapters 12, 13, 14 (Completing 100% Coverage)
// CBSE Step Marking Scheme 2026-27

const { renderQCard } = require('./c10s-part1.js');

function makeMathCard(id, num, text, marks, answerHtml, rubricRows) {
  return renderQCard(id, num, text, marks, answerHtml, rubricRows);
}

// ============================================================================
// CHAPTER 12: SURFACE AREAS AND VOLUMES (10 Additional NCERT Qs: Total 17 Qs = 100%)
// ============================================================================
function getChapter12ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch12-q12',
      'NCERT Exercise 12.1 • Q1',
      '2 cubes each of volume $64\\text{ cm}^3$ are joined end to end. Find the surface area of the resulting cuboid.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Volume of cube $= a^3 = 64\\text{ cm}^3 \\implies a = \\sqrt[3]{64} = 4\\text{ cm}$.</li>
  <li>When two identical cubes of side 4 cm are joined end to end, the resulting cuboid has:
    <ul>
      <li>Length $l = 4 + 4 = 8\\text{ cm}$</li>
      <li>Breadth $b = 4\\text{ cm}$</li>
      <li>Height $h = 4\\text{ cm}$</li>
    </ul>
  </li>
  <li>Total surface area of cuboid:
    $$\\text{TSA} = 2(lb + bh + hl) = 2(8 \\times 4 + 4 \\times 4 + 4 \\times 8)$$
    $$\\text{TSA} = 2(32 + 16 + 32) = 2(80) = \\mathbf{160\\text{ cm}^2}$$
  </li>
</ol>
<p><strong>Answer:</strong> Surface area of the resulting cuboid is <strong>$160\\text{ cm}^2$</strong>.</p>`,
      [
        { key: 'Finding cube edge a = 4 cm', marks: '1 Mark' },
        { key: 'Dimensions of cuboid: l = 8, b = 4, h = 4', marks: '1 Mark' },
        { key: 'Calculating TSA = 2(32 + 16 + 32) = 160 cm^2', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q13',
      'NCERT Exercise 12.1 • Q2',
      'A vessel is in the form of a hollow hemisphere mounted by a hollow cylinder. The diameter of the hemisphere is 14 cm and the total height of the vessel is 13 cm. Find the inner surface area of the vessel.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Diameter $= 14\\text{ cm} \\implies$ radius $r = 7\\text{ cm}$.</li>
  <li>Height of hemispherical part $= r = 7\\text{ cm}$.<br>
    Height of cylindrical part $h = 13 - 7 = 6\\text{ cm}$.
  </li>
  <li>Inner surface area of vessel:
    $$\\text{Area} = \\text{CSA of cylinder} + \\text{CSA of hemisphere} = 2\\pi r h + 2\\pi r^2 = 2\\pi r(h + r)$$
    $$\\text{Area} = 2 \\times \\frac{22}{7} \\times 7 \\times (6 + 7) = 44 \\times 13 = \\mathbf{572\\text{ cm}^2}$$
  </li>
</ol>
<p><strong>Answer:</strong> Inner surface area of the vessel is <strong>$572\\text{ cm}^2$</strong>.</p>`,
      [
        { key: 'Identifying cylinder height h = 13 - 7 = 6 cm and r = 7 cm', marks: '1 Mark' },
        { key: 'Formula: 2*pi*r*h + 2*pi*r^2 = 2*pi*r(h + r)', marks: '1 Mark' },
        { key: 'Calculating 44 * 13 = 572 cm^2', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q14',
      'NCERT Exercise 12.1 • Q4',
      'A cubical block of side 7 cm is surmounted by a hemisphere. What is the greatest diameter the hemisphere can have? Find the surface area of the solid.',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>The greatest diameter the hemisphere can have is equal to the edge of the cubical block, which is <strong>$7\\text{ cm}$</strong> ($r = 3.5\\text{ cm}$).</li>
  <li>Surface area of solid:
    $$\\text{Total Area} = \\text{Total surface area of cube} + \\text{CSA of hemisphere} - \\text{Base area of hemisphere}$$
    $$\\text{Area} = 6a^2 + 2\\pi r^2 - \\pi r^2 = 6a^2 + \\pi r^2$$
  </li>
  <li>$$6a^2 = 6 \\times 7^2 = 6 \\times 49 = 294\\text{ cm}^2$$
    $$\\pi r^2 = \\frac{22}{7} \\times \\frac{7}{2} \\times \\frac{7}{2} = \\frac{77}{2} = 38.5\\text{ cm}^2$$
    $$\\text{Total Surface Area} = 294 + 38.5 = \\mathbf{332.5\\text{ cm}^2}$$
  </li>
</ol>`,
      [
        { key: 'Greatest diameter = 7 cm', marks: '1 Mark' },
        { key: 'Area formula: 6a^2 + pi*r^2', marks: '1.5 Marks' },
        { key: 'Evaluation: 294 + 38.5 = 332.5 cm^2', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q15',
      'NCERT Exercise 12.1 • Q5',
      'A hemispherical depression is cut out from one face of a cubical wooden block such that the diameter l of the hemisphere is equal to the edge of the cube. Determine the surface area of the remaining solid.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Edge of cube $= l$, diameter of hemisphere $= l \\implies$ radius $r = l/2$.</li>
  <li>Surface area of remaining solid:
    $$\\text{Area} = \\text{TSA of cube} - \\text{Base area of hemisphere} + \\text{Inner curved area of depression}$$
    $$\\text{Area} = 6l^2 - \\pi r^2 + 2\\pi r^2 = 6l^2 + \\pi r^2$$
  </li>
  <li>Substituting $r = l/2$:
    $$\\text{Area} = 6l^2 + \\pi\\left(\\frac{l}{2}\\right)^2 = 6l^2 + \\frac{\\pi l^2}{4} = \\mathbf{\\frac{l^2}{4}(24 + \\pi)\\text{ square units}}$$
  </li>
</ol>`,
      [
        { key: 'Formula: 6*l^2 + pi*r^2', marks: '1.5 Marks' },
        { key: 'Substituting r = l/2 to get (l^2 / 4)(24 + pi)', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q16',
      'NCERT Exercise 12.1 • Q6',
      'A medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The length of the entire capsule is 14 mm and the diameter of the capsule is 5 mm. Find its surface area.',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Diameter $= 5\\text{ mm} \\implies$ radius $r = 2.5\\text{ mm} = 5/2\\text{ mm}$.</li>
  <li>Length of cylinder part $h = 14 - (2.5 + 2.5) = 14 - 5 = 9\\text{ mm}$.</li>
  <li>Surface area of capsule:
    $$\\text{TSA} = \\text{CSA of cylinder} + 2 \\times \\text{CSA of hemisphere}$$
    $$\\text{TSA} = 2\\pi r h + 2(2\\pi r^2) = 2\\pi r(h + 2r)$$
    $$\\text{TSA} = 2 \\times \\frac{22}{7} \\times \\frac{5}{2} \\times (9 + 5) = \\frac{110}{7} \\times 14 = 110 \\times 2 = \\mathbf{220\\text{ mm}^2}$$
  </li>
</ol>
<p><strong>Answer:</strong> The surface area of the capsule is <strong>$220\\text{ mm}^2$</strong>.</p>`,
      [
        { key: 'Identifying r = 2.5 mm and cylinder length h = 9 mm', marks: '1.5 Marks' },
        { key: 'Formula: 2*pi*r*h + 4*pi*r^2 = 2*pi*r(h + 2r)', marks: '1.5 Marks' },
        { key: 'Calculating 110/7 * 14 = 220 mm^2', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q17',
      'NCERT Exercise 12.1 • Q8 & Q9',
      '(i) From a solid cylinder of height 2.4 cm and diameter 1.4 cm, a conical cavity of same height and base is hollowed out. Find the total surface area of the remaining solid. (ii) A wooden article was made by scooping out a hemisphere from each end of a solid cylinder of height 10 cm and base radius 3.5 cm. Find total surface area.',
      4,
      `<p><strong>(i) Remaining solid TSA:</strong><br>
Radius $r = 0.7\\text{ cm}$, height $h = 2.4\\text{ cm}$.<br>
Slant height $l = \\sqrt{h^2 + r^2} = \\sqrt{2.4^2 + 0.7^2} = \\sqrt{5.76 + 0.49} = \\sqrt{6.25} = 2.5\\text{ cm}$.<br>
$$\\text{TSA} = \\text{CSA of cylinder} + \\text{Base area} + \\text{CSA of cone} = 2\\pi r h + \\pi r^2 + \\pi r l$$
$$= \\pi r(2h + r + l) = \\frac{22}{7} \\times 0.7 \\times [2(2.4) + 0.7 + 2.5] = 2.2 \\times 8.0 = \\mathbf{17.6\\text{ cm}^2}$$</p>
<p><strong>(ii) Wooden article TSA:</strong><br>
$$\\text{TSA} = \\text{CSA of cylinder} + 2(\\text{CSA of hemisphere}) = 2\\pi r h + 4\\pi r^2 = 2\\pi r(h + 2r)$$
$$= 2 \\times \\frac{22}{7} \\times 3.5 \\times [10 + 2(3.5)] = 22 \\times 17 = \\mathbf{374\\text{ cm}^2}$$</p>`,
      [
        { key: '(i) Cone slant height 2.5 cm; Area = 17.6 cm^2', marks: '2 Marks' },
        { key: '(ii) Cylinder CSA + 2 hemisphere CSA = 374 cm^2', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q18',
      'NCERT Exercise 12.2 • Q1',
      'A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. Find the volume of the solid in terms of $\\pi$.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Given: radius of hemisphere $r = 1\\text{ cm}$, radius of cone $r = 1\\text{ cm}$, height of cone $h = r = 1\\text{ cm}$.</li>
  <li>Volume of solid:
    $$V = V_{\\text{cone}} + V_{\\text{hemisphere}} = \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3$$
    $$V = \\frac{1}{3}\\pi (1)^2(1) + \\frac{2}{3}\\pi (1)^3 = \\frac{\\pi}{3} + \\frac{2\\pi}{3} = \\frac{3\\pi}{3} = \\mathbf{\\pi\\text{ cm}^3}$$
  </li>
</ol>
<p><strong>Answer:</strong> The volume of the solid is <strong>$\\pi\\text{ cm}^3$</strong>.</p>`,
      [
        { key: 'Formula: 1/3*pi*r^2*h + 2/3*pi*r^3', marks: '1.5 Marks' },
        { key: 'Evaluating with r = 1, h = 1 to get pi cm^3', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q19',
      'NCERT Exercise 12.2 • Q2',
      'Rachel, an engineering student, was asked to make a model shaped like a cylinder with two cones attached at its two ends by using a thin aluminum sheet. The diameter of the model is 3 cm and its length is 12 cm. If each cone has a height of 2 cm, find the volume of air contained in the model.',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Diameter $= 3\\text{ cm} \\implies$ radius $r = 1.5\\text{ cm} = 3/2\\text{ cm}$.</li>
  <li>Height of each cone $h_1 = 2\\text{ cm}$.<br>
    Height of cylindrical part $H = 12 - (2 + 2) = 12 - 4 = 8\\text{ cm}$.
  </li>
  <li>Total volume:
    $$V = V_{\\text{cylinder}} + 2 \\times V_{\\text{cone}} = \\pi r^2 H + 2\\left(\\frac{1}{3}\\pi r^2 h_1\\right) = \\pi r^2\\left(H + \\frac{2}{3}h_1\\right)$$
    $$V = \\frac{22}{7} \\times \\left(\\frac{3}{2}\\right)^2 \\left(8 + \\frac{4}{3}\\right) = \\frac{22}{7} \\times \\frac{9}{4} \\times \\frac{28}{3}$$
    $$V = \\frac{22 \\times 3 \\times 4}{4} = 22 \\times 3 = \\mathbf{66\\text{ cm}^3}$$
  </li>
</ol>
<p><strong>Answer:</strong> The volume of air contained in the model is <strong>$66\\text{ cm}^3$</strong>.</p>`,
      [
        { key: 'Identifying r = 1.5 cm, H = 8 cm, h1 = 2 cm', marks: '1.5 Marks' },
        { key: 'Total volume formula: pi*r^2(H + 2/3*h1)', marks: '1.5 Marks' },
        { key: 'Computing 66 cm^3', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q20',
      'NCERT Exercise 12.2 • Q3',
      'A gulab jamun, contains sugar syrup up to about 30% of its volume. Find approximately how much syrup would be found in 45 gulab jamuns, each shaped like a cylinder with two hemispherical ends with length 5 cm and diameter 2.8 cm.',
      5,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Diameter $= 2.8\\text{ cm} \\implies$ radius $r = 1.4\\text{ cm}$.<br>
    Total length $= 5\\text{ cm}$.<br>
    Length of cylindrical part $h = 5 - 2(1.4) = 5 - 2.8 = 2.2\\text{ cm}$.
  </li>
  <li>Volume of 1 gulab jamun:
    $$V_1 = \\pi r^2 h + 2\\left(\\frac{2}{3}\\pi r^3\\right) = \\pi r^2\\left(h + \\frac{4}{3}r\\right)$$
    $$V_1 = \\frac{22}{7} \\times (1.4)^2 \\left(2.2 + \\frac{4}{3}(1.4)\\right) = \\frac{22}{7} \\times 1.96 \\times \\left(2.2 + \\frac{5.6}{3}\\right)$$
    $$V_1 = 6.16 \\times \\frac{12.2}{3} = \\frac{75.152}{3} \\approx 25.05\\text{ cm}^3$$
  </li>
  <li>Volume of 45 gulab jamuns:
    $$V_{45} = 45 \\times \\frac{75.152}{3} = 15 \\times 75.152 = 1127.28\\text{ cm}^3$$
  </li>
  <li>Volume of sugar syrup (30% of total volume):
    $$\\text{Syrup Volume} = \\frac{30}{100} \\times 1127.28 = 338.184 \\approx \\mathbf{338\\text{ cm}^3}$$
  </li>
</ol>
<p><strong>Answer:</strong> Approximately <strong>$338\\text{ cm}^3$</strong> of sugar syrup would be found.</p>`,
      [
        { key: 'Finding r = 1.4 cm and cylinder height h = 2.2 cm', marks: '1.5 Marks' },
        { key: 'Calculating volume of 1 gulab jamun = 25.05 cm^3', marks: '1.5 Marks' },
        { key: 'Total volume for 45 = 1127.28 cm^3 and 30% syrup = 338 cm^3', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch12-q21',
      'NCERT Exercise 12.2 • Q4 & Q7',
      '(i) A pen stand made of wood is in the shape of a cuboid with four conical depressions to hold pens. Dimensions of cuboid are $15\\text{ cm} \\times 10\\text{ cm} \\times 3.5\\text{ cm}$. Radius of each depression is 0.5 cm and depth is 1.4 cm. Find volume of wood in entire stand. (ii) A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, surmounted by another cylinder of height 60 cm and radius 8 cm. Find mass of the pole given that $1\\text{ cm}^3$ of iron has approx 8 g mass.',
      5,
      `<p><strong>(i) Pen stand wood volume:</strong><br>
$$V_{\\text{cuboid}} = 15 \\times 10 \\times 3.5 = 525\\text{ cm}^3$$
Volume of 4 conical depressions:
$$4 \\times \\left(\\frac{1}{3}\\pi r^2 h\\right) = 4 \\times \\frac{1}{3} \\times \\frac{22}{7} \\times (0.5)^2 \\times 1.4 = \\frac{4}{3} \\times \\frac{22}{7} \\times 0.25 \\times 1.4 = 1.47\\text{ cm}^3$$
$$V_{\\text{wood}} = 525 - 1.47 = \\mathbf{523.53\\text{ cm}^3}$$</p>
<p><strong>(ii) Solid iron pole:</strong><br>
Bottom cylinder: $R = 12\\text{ cm}, H = 220\\text{ cm} \\implies V_1 = \\pi (12)^2(220) = 31680\\pi\\text{ cm}^3$.<br>
Top cylinder: $r = 8\\text{ cm}, h = 60\\text{ cm} \\implies V_2 = \\pi (8)^2(60) = 3840\\pi\\text{ cm}^3$.<br>
Total Volume $= 35520\\pi = 35520 \\times 3.14 = 111532.8\\text{ cm}^3$.<br>
$$\\text{Mass} = 111532.8 \\times 8\\text{ g} = 892262.4\\text{ g} = \\mathbf{892.26\\text{ kg}}$$</p>`,
      [
        { key: '(i) Cuboid volume 525 - 4 cones (1.47) = 523.53 cm^3', marks: '2.5 Marks' },
        { key: '(ii) Total volume 111532.8 cm^3 -> Mass = 892.26 kg', marks: '2.5 Marks' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 13: STATISTICS (12 Additional NCERT Qs: Total 22 Qs = 100%)
// ============================================================================
function getChapter13ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch13-q11',
      'NCERT Exercise 13.1 • Q1',
      'A survey was conducted by a group of students as a part of their environment awareness programme, in which they collected the following data regarding the number of plants in 20 houses in a locality. Find the mean number of plants per house: Plants (0-2: 1, 2-4: 2, 4-6: 1, 6-8: 5, 8-10: 6, 10-12: 2, 12-14: 3). Which method did you use for finding the mean, and why?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<p>We use the <strong>Direct Method</strong> because both class marks ($x_i$) and frequencies ($f_i$) are small numerical values.</p>
<table style="width:100%; border-collapse:collapse; margin:10px 0;">
  <tr style="background:#f1f5f9;"><th>Class</th><th>$f_i$</th><th>$x_i$</th><th>$f_i x_i$</th></tr>
  <tr><td>0 - 2</td><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>2 - 4</td><td>2</td><td>3</td><td>6</td></tr>
  <tr><td>4 - 6</td><td>1</td><td>5</td><td>5</td></tr>
  <tr><td>6 - 8</td><td>5</td><td>7</td><td>35</td></tr>
  <tr><td>8 - 10</td><td>6</td><td>9</td><td>54</td></tr>
  <tr><td>10 - 12</td><td>2</td><td>11</td><td>22</td></tr>
  <tr><td>12 - 14</td><td>3</td><td>13</td><td>39</td></tr>
  <tr style="font-weight:bold;"><td>Total</td><td>$\\sum f_i = 20$</td><td>—</td><td>$\\sum f_i x_i = 162$</td></tr>
</table>
$$\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i} = \\frac{162}{20} = \\mathbf{8.1\\text{ plants}}$$`,
      [
        { key: 'Justifying Direct Method for small numerical values', marks: '1 Mark' },
        { key: 'Calculating sum f_i x_i = 162 and sum f_i = 20', marks: '1 Mark' },
        { key: 'Mean = 162/20 = 8.1 plants', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q12',
      'NCERT Exercise 13.1 • Q2',
      'Consider the following distribution of daily wages of 50 workers of a factory: Daily wages in ₹ (500-520: 12, 520-540: 14, 540-560: 8, 560-580: 6, 580-600: 10). Find the mean daily wages of the workers of the factory by using an appropriate method.',
      4,
      `<p><strong>Solution using Assumed Mean Method ($A = 550, h = 20$):</strong></p>
<ol>
  <li>Mid-values ($x_i$): $510, 530, 550, 570, 590$.</li>
  <li>Deviations $d_i = x_i - 550$: $-40, -20, 0, 20, 40$.</li>
  <li>$u_i = d_i / 20$: $-2, -1, 0, 1, 2$.</li>
  <li>$f_i u_i$:
    $$12(-2) = -24, \\quad 14(-1) = -14, \\quad 8(0) = 0, \\quad 6(1) = 6, \\quad 10(2) = 20$$
    $$\\sum f_i u_i = -38 + 26 = -12, \\quad \\sum f_i = 50$$
  </li>
  <li>$$\\bar{x} = A + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\times h = 550 + \\left(\\frac{-12}{50}\\right) \\times 20 = 550 - 4.8 = \\mathbf{₹\\ 545.20}$$</li>
</ol>`,
      [
        { key: 'Setting up midpoints and deviations with assumed mean A = 550', marks: '1.5 Marks' },
        { key: 'Computing sum f_i u_i = -12', marks: '1.5 Marks' },
        { key: 'Mean wage = ₹ 545.20', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q13',
      'NCERT Exercise 13.1 • Q3',
      'The following distribution shows the daily pocket allowance of children of a locality. The mean pocket allowance is ₹ 18. Find the missing frequency f: Daily allowance in ₹ (11-13: 7, 13-15: 6, 15-17: 9, 17-19: 13, 19-21: f, 21-23: 5, 23-25: 4).',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Let assumed mean $A = 18$.
    <ul>
      <li>$11-13: x_1 = 12, d_1 = -6, f_1 = 7 \\implies f_1 d_1 = -42$</li>
      <li>$13-15: x_2 = 14, d_2 = -4, f_2 = 6 \\implies f_2 d_2 = -24$</li>
      <li>$15-17: x_3 = 16, d_3 = -2, f_3 = 9 \\implies f_3 d_3 = -18$</li>
      <li>$17-19: x_4 = 18, d_4 = 0, f_4 = 13 \\implies f_4 d_4 = 0$</li>
      <li>$19-21: x_5 = 20, d_5 = 2, f_5 = f \\implies f_5 d_5 = 2f$</li>
      <li>$21-23: x_6 = 22, d_6 = 4, f_6 = 5 \\implies f_6 d_6 = 20$</li>
      <li>$23-25: x_7 = 24, d_7 = 6, f_7 = 4 \\implies f_7 d_7 = 24$</li>
    </ul>
  </li>
  <li>$$\\sum f_i = 7 + 6 + 9 + 13 + f + 5 + 4 = 44 + f$$
    $$\\sum f_i d_i = (-42 - 24 - 18) + (2f + 20 + 24) = -84 + 44 + 2f = 2f - 40$$
  </li>
  <li>Given mean $\\bar{x} = 18$:
    $$\\bar{x} = A + \\frac{\\sum f_i d_i}{\\sum f_i} \\implies 18 = 18 + \\frac{2f - 40}{44 + f}$$
    $$\\frac{2f - 40}{44 + f} = 0 \\implies 2f - 40 = 0 \\implies \\mathbf{f = 20}$$
  </li>
</ol>
<p><strong>Answer:</strong> The missing frequency $f$ is <strong>20</strong>.</p>`,
      [
        { key: 'Setting up mid-values and deviations around A = 18', marks: '1.5 Marks' },
        { key: 'Finding sum f_i = 44 + f and sum f_i d_i = 2f - 40', marks: '1.5 Marks' },
        { key: 'Solving 2f - 40 = 0 -> f = 20', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q14',
      'NCERT Exercise 13.1 • Q4 & Q5',
      '(i) 30 women were examined in a hospital by a doctor and the number of heart beats per minute were recorded: (65-68: 2, 68-71: 4, 71-74: 3, 74-77: 8, 77-80: 7, 80-83: 4, 83-86: 2). Find the mean heart beats per minute for these women. (ii) Explain why step deviation method is preferred when class marks are large multiples of h.',
      4,
      `<p><strong>(i) Mean Heart Beats:</strong><br>
Here $h = 3$. Let $A = 75.5$ (midpoint of $74-77$).<br>
$u_i = (x_i - 75.5) / 3$: $-3, -2, -1, 0, 1, 2, 3$.<br>
$f_i u_i$: $2(-3) = -6, 4(-2) = -8, 3(-1) = -3, 8(0) = 0, 7(1) = 7, 4(2) = 8, 2(3) = 6$.<br>
$$\\sum f_i u_i = -17 + 21 = 4, \\quad \\sum f_i = 30$$
$$\\bar{x} = A + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\times h = 75.5 + \\left(\\frac{4}{30}\\right) \\times 3 = 75.5 + 0.4 = \\mathbf{75.9\\text{ beats/min}}$$</p>
<p><strong>(ii) Rationale:</strong> The step-deviation method reduces large product computations by dividing deviations by the class size $h$, drastically simplifying manual arithmetic and avoiding error.</p>`,
      [
        { key: '(i) Calculating sum f_i u_i = 4, mean = 75.9 beats/min', marks: '3 Marks' },
        { key: '(ii) Step-deviation rationale', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q15',
      'NCERT Exercise 13.1 • Q6',
      'The table below shows the daily expenditure on food of 25 households in a locality: Daily expenditure in ₹ (100-150: 4, 150-200: 5, 200-250: 12, 250-300: 2, 300-350: 2). Find the mean daily expenditure on food by a suitable method.',
      3,
      `<p><strong>Step-by-step Solution (Assumed Mean Method, $A = 225, h = 50$):</strong></p>
<ol>
  <li>Midpoints $x_i$: $125, 175, 225, 275, 325$.</li>
  <li>$u_i = (x_i - 225) / 50$: $-2, -1, 0, 1, 2$.</li>
  <li>$f_i u_i$: $4(-2) = -8, 5(-1) = -5, 12(0) = 0, 2(1) = 2, 2(2) = 4$.<br>
    $$\\sum f_i u_i = -13 + 6 = -7, \\quad \\sum f_i = 25$$
  </li>
  <li>$$\\bar{x} = A + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\times h = 225 + \\left(\\frac{-7}{25}\\right) \\times 50 = 225 - 14 = \\mathbf{₹\\ 211}$$</li>
</ol>
<p><strong>Answer:</strong> The mean daily expenditure on food is <strong>₹ 211</strong>.</p>`,
      [
        { key: 'Midpoints and step deviations around A = 225', marks: '1 Mark' },
        { key: 'Sum f_i u_i = -7 with sum f_i = 25', marks: '1 Mark' },
        { key: 'Mean = 225 - 14 = ₹ 211', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q16',
      'NCERT Exercise 13.2 • Q1',
      'The following table shows the ages of the patients admitted in a hospital during a year: Age in years (5-15: 6, 15-25: 11, 25-35: 21, 35-45: 23, 45-55: 14, 55-65: 5). Find the mode and the mean of the data given above. Compare and interpret the two measures of central tendency.',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li><strong>Mode:</strong> Maximum frequency is $23$ in class interval <strong>$35 - 45$</strong>.<br>
    Modal class $= 35 - 45, l = 35, f_1 = 23, f_0 = 21, f_2 = 14, h = 10$.
    $$\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h = 35 + \\left(\\frac{23 - 21}{2(23) - 21 - 14}\\right) \\times 10$$
    $$\\text{Mode} = 35 + \\left(\\frac{2}{46 - 35}\\right) \\times 10 = 35 + \\frac{20}{11} = 35 + 1.82 = \\mathbf{36.82\\text{ years}}$$
  </li>
  <li><strong>Mean:</strong> $\\sum f_i = 80$, using $A = 30$: $\\sum f_i d_i = 430 \\implies \\bar{x} = 30 + \\frac{430}{80} = 30 + 5.375 = \\mathbf{35.37\\text{ years}}$.</li>
  <li><strong>Interpretation:</strong> Maximum number of patients admitted were of age <strong>$36.82\\text{ years}$</strong>, while average age of all patients was <strong>$35.37\\text{ years}$</strong>.</li>
</ol>`,
      [
        { key: 'Mode formula calculation = 36.82 years', marks: '2 Marks' },
        { key: 'Mean calculation = 35.37 years', marks: '1 Mark' },
        { key: 'Interpretation comparing mode and mean', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q17',
      'NCERT Exercise 13.2 • Q2',
      'The following data gives the information on the observed lifetimes (in hours) of 225 electrical components: Lifetimes (0-20: 10, 20-40: 35, 40-60: 52, 60-80: 61, 80-100: 38, 100-120: 29). Determine the modal lifetimes of the components.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Maximum frequency is $61$, which belongs to the class interval <strong>$60 - 80$</strong>.</li>
  <li>Modal class $= 60 - 80$.<br>
    Lower limit $l = 60$, frequency $f_1 = 61$, preceding frequency $f_0 = 52$, succeeding frequency $f_2 = 38$, class size $h = 20$.
  </li>
  <li>$$\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h$$
    $$\\text{Mode} = 60 + \\left(\\frac{61 - 52}{2(61) - 52 - 38}\\right) \\times 20 = 60 + \\left(\\frac{9}{122 - 90}\\right) \\times 20$$
    $$\\text{Mode} = 60 + \\frac{180}{32} = 60 + 5.625 = \\mathbf{65.625\\text{ hours}}$$
  </li>
</ol>
<p><strong>Answer:</strong> The modal lifetime of the components is <strong>$65.625\\text{ hours}$</strong>.</p>`,
      [
        { key: 'Identifying modal class 60 - 80 and parameters', marks: '1 Mark' },
        { key: 'Applying mode formula: 60 + [9 / 32] * 20', marks: '1 Mark' },
        { key: 'Final answer: 65.625 hours', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q18',
      'NCERT Exercise 13.2 • Q3',
      'The following data gives the distribution of total monthly household expenditure of 200 families of a village: (1000-1500: 24, 1500-2000: 40, 2000-2500: 33, 2500-3000: 28, 3000-3500: 30, 3500-4000: 22, 4000-4500: 16, 4500-5000: 7). Find the modal monthly expenditure of the families.',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Maximum frequency is $40$, corresponding to class interval <strong>$1500 - 2000$</strong>.</li>
  <li>Modal class: $1500 - 2000$.<br>
    $l = 1500, f_1 = 40, f_0 = 24, f_2 = 33, h = 500$.
  </li>
  <li>$$\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h = 1500 + \\left(\\frac{40 - 24}{2(40) - 24 - 33}\\right) \\times 500$$
    $$\\text{Mode} = 1500 + \\left(\\frac{16}{80 - 57}\\right) \\times 500 = 1500 + \\frac{8000}{23} = 1500 + 347.83 = \\mathbf{₹\\ 1847.83}$$
  </li>
</ol>
<p><strong>Answer:</strong> The modal monthly expenditure is <strong>₹ 1847.83</strong>.</p>`,
      [
        { key: 'Modal class 1500-2000 and parameters', marks: '1 Mark' },
        { key: 'Formula calculation 1500 + (16/23)*500', marks: '1 Mark' },
        { key: 'Final value ₹ 1847.83', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q19',
      'NCERT Exercise 13.2 • Q4',
      'The following distribution gives the state-wise teacher-student ratio in higher secondary schools of India. Find the mode of this data: Number of students per teacher (15-20: 3, 20-25: 8, 25-30: 9, 30-35: 10, 35-40: 3, 40-45: 0, 45-50: 0, 50-55: 2).',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Maximum frequency is $10$ in class interval <strong>$30 - 35$</strong>.</li>
  <li>Modal class: $30 - 35$.<br>
    $l = 30, f_1 = 10, f_0 = 9, f_2 = 3, h = 5$.
  </li>
  <li>$$\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h = 30 + \\left(\\frac{10 - 9}{20 - 9 - 3}\\right) \\times 5$$
    $$\\text{Mode} = 30 + \\left(\\frac{1}{8}\\right) \\times 5 = 30 + 0.625 = \\mathbf{30.6}$$
  </li>
</ol>
<p><strong>Answer:</strong> The mode of the data is <strong>30.6</strong>.</p>`,
      [
        { key: 'Identifying modal class 30 - 35', marks: '1 Mark' },
        { key: 'Evaluating 30 + (1/8)*5 = 30.625', marks: '1 Mark' },
        { key: 'Stating final mode = 30.6', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q20',
      'NCERT Exercise 13.3 • Q1',
      'The following frequency distribution gives the monthly consumption of electricity of 68 consumers of a locality. Find the median of the data: Monthly consumption in units (65-85: 4, 85-105: 5, 105-125: 13, 125-145: 20, 145-165: 14, 165-185: 8, 185-205: 4).',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Cumulative frequencies ($cf$):
    $$4, \\quad 4+5=9, \\quad 9+13=22, \\quad 22+20=42, \\quad 42+14=56, \\quad 56+8=64, \\quad 64+4=68$$
  </li>
  <li>Total $N = 68 \\implies N/2 = 34$.<br>
    The cumulative frequency just greater than 34 is $42$, which belongs to class interval <strong>$125 - 145$</strong>.<br>
    Median class $= 125 - 145, l = 125, cf = 22, f = 20, h = 20$.
  </li>
  <li>$$\\text{Median} = l + \\left(\\frac{N/2 - cf}{f}\\right) \\times h = 125 + \\left(\\frac{34 - 22}{20}\\right) \\times 20 = 125 + 12 = \\mathbf{137\\text{ units}}$$</li>
</ol>
<p><strong>Answer:</strong> Median monthly consumption is <strong>137 units</strong>.</p>`,
      [
        { key: 'Cumulative frequencies calculation with N = 68', marks: '1 Mark' },
        { key: 'Median class 125 - 145 with N/2 = 34, cf = 22, f = 20', marks: '1 Mark' },
        { key: 'Median = 125 + 12 = 137 units', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q21',
      'NCERT Exercise 13.3 • Q3',
      'A life insurance agent found the following data for distribution of ages of 100 policy holders. Calculate the median age, if policies are given only to persons having age 18 years on wards but less than 60 year: (Below 20: 2, Below 25: 6, Below 30: 24, Below 35: 45, Below 40: 78, Below 45: 89, Below 50: 92, Below 55: 98, Below 60: 100).',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Convert cumulative frequency distribution to class intervals ($h = 5$):
    <ul>
      <li>$15-20: f = 2$ ($cf = 2$)</li>
      <li>$20-25: f = 6 - 2 = 4$ ($cf = 6$)</li>
      <li>$25-30: f = 24 - 6 = 18$ ($cf = 24$)</li>
      <li>$30-35: f = 45 - 24 = 21$ ($cf = 45$)</li>
      <li>$35-40: f = 78 - 45 = 33$ ($cf = 78$)</li>
      <li>$40-45: f = 89 - 78 = 11$ ($cf = 89$)</li>
      <li>$45-50: f = 92 - 89 = 3$ ($cf = 92$)</li>
      <li>$50-55: f = 98 - 92 = 6$ ($cf = 98$)</li>
      <li>$55-60: f = 100 - 98 = 2$ ($cf = 100$)</li>
    </ul>
  </li>
  <li>$N = 100 \\implies N/2 = 50$. Cumulative frequency just greater than 50 is $78$.<br>
    Median class $= 35 - 40, l = 35, cf = 45, f = 33, h = 5$.
  </li>
  <li>$$\\text{Median} = l + \\left(\\frac{N/2 - cf}{f}\\right) \\times h = 35 + \\left(\\frac{50 - 45}{33}\\right) \\times 5 = 35 + \\frac{25}{33} = 35 + 0.76 = \\mathbf{35.76\\text{ years}}$$</li>
</ol>
<p><strong>Answer:</strong> The median age is <strong>35.76 years</strong>.</p>`,
      [
        { key: 'Converting below-type distribution to frequencies: 2, 4, 18, 21, 33...', marks: '1.5 Marks' },
        { key: 'Median class 35-40 with N/2 = 50, cf = 45, f = 33', marks: '1.5 Marks' },
        { key: 'Evaluating median = 35.76 years', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch13-q22',
      'NCERT Exercise 13.3 • Q4',
      'The lengths of 40 leaves of a plant are measured correct to the nearest millimetre, and the data is obtained: (118-126: 3, 127-135: 5, 136-144: 9, 145-153: 12, 154-162: 5, 163-171: 4, 172-180: 2). Find the median length of the leaves.',
      4,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>The classes are non-continuous. Subtract 0.5 from lower limits and add 0.5 to upper limits:
    <ul>
      <li>$117.5 - 126.5: f = 3$ ($cf = 3$)</li>
      <li>$126.5 - 135.5: f = 5$ ($cf = 8$)</li>
      <li>$135.5 - 144.5: f = 9$ ($cf = 17$)</li>
      <li>$144.5 - 153.5: f = 12$ ($cf = 29$)</li>
      <li>$153.5 - 162.5: f = 5$ ($cf = 34$)</li>
      <li>$162.5 - 171.5: f = 4$ ($cf = 38$)</li>
      <li>$171.5 - 180.5: f = 2$ ($cf = 40$)</li>
    </ul>
  </li>
  <li>$N = 40 \\implies N/2 = 20$. The $cf$ just greater than 20 is $29$.<br>
    Median class $= 144.5 - 153.5, l = 144.5, cf = 17, f = 12, h = 9$.
  </li>
  <li>$$\\text{Median} = l + \\left(\\frac{N/2 - cf}{f}\\right) \\times h = 144.5 + \\left(\\frac{20 - 17}{12}\\right) \\times 9 = 144.5 + \\frac{27}{12} = 144.5 + 2.25 = \\mathbf{146.75\\text{ mm}}$$</li>
</ol>
<p><strong>Answer:</strong> The median length of the leaves is <strong>$146.75\\text{ mm}$</strong>.</p>`,
      [
        { key: 'Making classes continuous with adjustment factor 0.5', marks: '1.5 Marks' },
        { key: 'Median class 144.5 - 153.5 with N/2 = 20, cf = 17, f = 12', marks: '1.5 Marks' },
        { key: 'Calculating median = 146.75 mm', marks: '1 Mark' }
      ]
    )
  ];
}

// ============================================================================
// CHAPTER 14: PROBABILITY (20 Additional NCERT Qs: Total 25 Qs = 100%)
// ============================================================================
function getChapter14ExtraAdditions() {
  return [
    makeMathCard(
      'c10m-ch14-q9',
      'NCERT Exercise 14.1 • Q1',
      'Complete the following statements: (i) Probability of an event E + Probability of the event \'not E\' = _____. (ii) The probability of an event that cannot happen is _____. Such an event is called _____. (iii) The probability of an event that is certain to happen is _____. Such an event is called _____. (iv) The sum of the probabilities of all the elementary events of an experiment is _____. (v) The probability of an event is greater than or equal to _____ and less than or equal to _____.',
      3,
      `<p><strong>Answers:</strong></p>
<ol>
  <li>(i) $P(E) + P(\\text{not } E) = \\mathbf{1}$.</li>
  <li>(ii) The probability of an event that cannot happen is $\\mathbf{0}$. Such an event is called an <strong>impossible event</strong>.</li>
  <li>(iii) The probability of an event that is certain to happen is $\\mathbf{1}$. Such an event is called a <strong>sure event (or certain event)</strong>.</li>
  <li>(iv) The sum of the probabilities of all elementary events is $\\mathbf{1}$.</li>
  <li>(v) The probability of an event is greater than or equal to $\\mathbf{0}$ and less than or equal to $\\mathbf{1}$ ($0 \\le P(E) \\le 1$).</li>
</ol>`,
      [
        { key: 'Parts (i) and (iv): sum equals 1', marks: '1 Mark' },
        { key: 'Parts (ii) and (iii): 0 (impossible) and 1 (sure)', marks: '1 Mark' },
        { key: 'Part (v): bounded between 0 and 1', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q10',
      'NCERT Exercise 14.1 • Q2',
      'Which of the following experiments have equally likely outcomes? Explain. (i) A driver attempts to start a car. The car starts or does not start. (ii) A player attempts to shoot a basketball. She/he shoots or misses the shot. (iii) A trial is made to answer a true-false question. The answer is right or wrong. (iv) A baby is born. It is a boy or a girl.',
      3,
      `<ol>
  <li><strong>(i) Not equally likely:</strong> Whether a car starts depends on its mechanical condition, fuel, battery, etc. It is not an equally likely 50-50 chance.</li>
  <li><strong>(ii) Not equally likely:</strong> A player\'s success depends on skill, practice, and defense. The chances are not equally likely.</li>
  <li><strong>(iii) Equally likely:</strong> For a true-false question with only two possible alternatives, the chances of being right or wrong are exactly equal ($1/2$).</li>
  <li><strong>(iv) Equally likely:</strong> A newborn baby has an equal natural likelihood of being a boy or a girl ($1/2$).</li>
</ol>`,
      [
        { key: '(i) and (ii) Not equally likely with explanation', marks: '1.5 Marks' },
        { key: '(iii) and (iv) Equally likely with explanation', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q11',
      'NCERT Exercise 14.1 • Q3 & Q4',
      '(i) Why is tossing a coin considered to be a fair way of deciding which team should get the ball at the beginning of a football game? (ii) Which of the following cannot be the probability of an event? (a) $2/3$, (b) $-1.5$, (c) $15\\%$, (d) $0.7$.',
      2,
      `<p><strong>(i) Fairness of Coin Toss:</strong> When a fair coin is tossed, the only two possible outcomes—head and tail—are mutually exclusive and <strong>equally likely</strong> ($P(H) = P(T) = 0.5$). The outcome cannot be predicted beforehand, making it completely fair and unbiased.</p>
<p><strong>(ii) Probability bounds:</strong> The probability of any event must satisfy $0 \\le P(E) \\le 1$.<br>
Therefore, <strong>(b) -1.5</strong> cannot be the probability of an event, because probability can never be negative.</p>`,
      [
        { key: '(i) Equally likely outcomes justify fair coin toss', marks: '1 Mark' },
        { key: '(ii) Option (b) -1.5 cannot be probability as P(E) >= 0', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q12',
      'NCERT Exercise 14.1 • Q5 & Q6',
      '(i) If $P(E) = 0.05$, what is the probability of \'not E\'? (ii) A bag contains lemon flavoured candies only. Malini takes out one candy without looking into the bag. What is the probability that she takes out: (a) an orange flavoured candy? (b) a lemon flavoured candy?',
      2,
      `<p><strong>(i) Probability of \'not E\':</strong><br>
$$P(\\text{not } E) = 1 - P(E) = 1 - 0.05 = \\mathbf{0.95}$$</p>
<p><strong>(ii) Candies in bag:</strong><br>
(a) Since the bag contains <em>only</em> lemon flavoured candies, taking out an orange flavoured candy is an impossible event:
$$P(\\text{orange candy}) = \\mathbf{0}$$
(b) Taking out a lemon flavoured candy is a certain (sure) event:
$$P(\\text{lemon candy}) = \\mathbf{1}$$</p>`,
      [
        { key: '(i) P(not E) = 1 - 0.05 = 0.95', marks: '1 Mark' },
        { key: '(ii) (a) 0 and (b) 1', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q13',
      'NCERT Exercise 14.1 • Q7 & Q8',
      '(i) It is given that in a group of 3 students, the probability of 2 students not having the same birthday is 0.992. What is the probability that the 2 students have the same birthday? (ii) A bag contains 3 red balls and 5 black balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is: (a) red? (b) not red?',
      3,
      `<p><strong>(i) Same Birthday:</strong><br>
Let $E$ be the event of having the same birthday. Given $P(\\text{not } E) = 0.992$.<br>
$$P(E) = 1 - P(\\text{not } E) = 1 - 0.992 = \\mathbf{0.008}$$</p>
<p><strong>(ii) Balls in bag ($3 + 5 = 8$ balls):</strong><br>
(a) $P(\\text{red}) = \\frac{\\text{Red balls}}{\\text{Total balls}} = \\mathbf{\\frac{3}{8}}$.<br>
(b) $P(\\text{not red}) = 1 - P(\\text{red}) = 1 - \\frac{3}{8} = \\mathbf{\\frac{5}{8}}$.</p>`,
      [
        { key: '(i) P(same birthday) = 1 - 0.992 = 0.008', marks: '1.5 Marks' },
        { key: '(ii) P(red) = 3/8 and P(not red) = 5/8', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q14',
      'NCERT Exercise 14.1 • Q9',
      'A box contains 5 red marbles, 8 white marbles and 4 green marbles. One marble is taken out at random from the box. What is the probability that the marble taken out will be: (i) red? (ii) white? (iii) not green?',
      3,
      `<p><strong>Total marbles $= 5 + 8 + 4 = 17$ marbles.</strong></p>
<ol>
  <li><strong>(i) Red marble:</strong> 5 red marbles $\\implies P(\\text{red}) = \\mathbf{\\frac{5}{17}}$.</li>
  <li><strong>(ii) White marble:</strong> 8 white marbles $\\implies P(\\text{white}) = \\mathbf{\\frac{8}{17}}$.</li>
  <li><strong>(iii) Not green marble:</strong> Number of non-green marbles $= 5 + 8 = 13$.
    $$P(\\text{not green}) = \\mathbf{\\frac{13}{17}}$$
  </li>
</ol>`,
      [
        { key: '(i) P(red) = 5/17', marks: '1 Mark' },
        { key: '(ii) P(white) = 8/17', marks: '1 Mark' },
        { key: '(iii) P(not green) = 13/17', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q15',
      'NCERT Exercise 14.1 • Q10',
      'A piggy bank contains hundred 50p coins, fifty ₹ 1 coins, twenty ₹ 2 coins and ten ₹ 5 coins. If it is equally likely that one of the coins will fall out when the bank is turned upside down, what is the probability that the coin: (i) will be a 50p coin? (ii) will not be a ₹ 5 coin?',
      3,
      `<p><strong>Total Coins $= 100 + 50 + 20 + 10 = 180$ coins.</strong></p>
<ol>
  <li><strong>(i) Will be a 50p coin:</strong> 100 coins of 50p.
    $$P(50\\text{p}) = \\frac{100}{180} = \\mathbf{\\frac{5}{9}}$$
  </li>
  <li><strong>(ii) Will not be a ₹ 5 coin:</strong> Non-₹ 5 coins $= 180 - 10 = 170$ coins.
    $$P(\\text{not } ₹ 5) = \\frac{170}{180} = \\mathbf{\\frac{17}{18}}$$
  </li>
</ol>`,
      [
        { key: 'Total coins = 180', marks: '1 Mark' },
        { key: '(i) P(50p) = 5/9', marks: '1 Mark' },
        { key: '(ii) P(not ₹ 5) = 17/18', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q16',
      'NCERT Exercise 14.1 • Q11',
      'Gopi buys a fish from a shop for his aquarium. The shopkeeper takes out one fish at random from a tank containing 5 male fish and 8 female fish. What is the probability that the fish taken out is a male fish?',
      2,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Number of male fish $= 5$.</li>
  <li>Number of female fish $= 8$.</li>
  <li>Total number of fish in tank $= 5 + 8 = 13$.</li>
  <li>Probability of getting a male fish:
    $$P(\\text{male fish}) = \\frac{\\text{Number of male fish}}{\\text{Total fish}} = \\mathbf{\\frac{5}{13}}$$
  </li>
</ol>
<p><strong>Answer:</strong> The probability is <strong>5/13</strong>.</p>`,
      [
        { key: 'Total outcomes = 5 + 8 = 13', marks: '1 Mark' },
        { key: 'P(male fish) = 5/13', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q17',
      'NCERT Exercise 14.1 • Q12',
      'A game of chance consists of spinning an arrow which comes to rest pointing at one of the numbers 1, 2, 3, 4, 5, 6, 7, 8, and these are equally likely outcomes. What is the probability that it will point at: (i) 8? (ii) an odd number? (iii) a number greater than 2? (iv) a number less than 9?',
      4,
      `<p><strong>Total possible outcomes: $S = \\{1, 2, 3, 4, 5, 6, 7, 8\\} \\implies n(S) = 8$.</strong></p>
<ol>
  <li><strong>(i) Pointing at 8:</strong> Favourable outcome $\\{8\\} \\implies P(8) = \\mathbf{\\frac{1}{8}}$.</li>
  <li><strong>(ii) An odd number:</strong> Odd numbers are $\\{1, 3, 5, 7\\}$ (4 outcomes) $\\implies P(\\text{odd}) = \\frac{4}{8} = \\mathbf{\\frac{1}{2}}$.</li>
  <li><strong>(iii) A number greater than 2:</strong> Numbers are $\\{3, 4, 5, 6, 7, 8\\}$ (6 outcomes) $\\implies P(> 2) = \\frac{6}{8} = \\mathbf{\\frac{3}{4}}$.</li>
  <li><strong>(iv) A number less than 9:</strong> All 8 numbers are less than 9 (sure event) $\\implies P(< 9) = \\frac{8}{8} = \\mathbf{1}$.</li>
</ol>`,
      [
        { key: '(i) P(8) = 1/8', marks: '1 Mark' },
        { key: '(ii) P(odd) = 4/8 = 1/2', marks: '1 Mark' },
        { key: '(iii) P(> 2) = 6/8 = 3/4', marks: '1 Mark' },
        { key: '(iv) P(< 9) = 1', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q18',
      'NCERT Exercise 14.1 • Q13',
      'A die is thrown once. Find the probability of getting: (i) a prime number, (ii) a number lying between 2 and 6, (iii) an odd number.',
      3,
      `<p><strong>Total Outcomes on a single die:</strong> $S = \\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$.</p>
<ol>
  <li><strong>(i) A prime number:</strong> Prime numbers are $\\{2, 3, 5\\}$ (3 outcomes).
    $$P(\\text{prime}) = \\frac{3}{6} = \\mathbf{\\frac{1}{2}}$$
  </li>
  <li><strong>(ii) A number lying between 2 and 6:</strong> Numbers are $\\{3, 4, 5\\}$ (3 outcomes).
    $$P(\\text{between 2 and 6}) = \\frac{3}{6} = \\mathbf{\\frac{1}{2}}$$
  </li>
  <li><strong>(iii) An odd number:</strong> Odd numbers are $\\{1, 3, 5\\}$ (3 outcomes).
    $$P(\\text{odd}) = \\frac{3}{6} = \\mathbf{\\frac{1}{2}}$$
  </li>
</ol>`,
      [
        { key: '(i) Primes {2, 3, 5} -> P = 1/2', marks: '1 Mark' },
        { key: '(ii) Between 2 and 6 {3, 4, 5} -> P = 1/2', marks: '1 Mark' },
        { key: '(iii) Odds {1, 3, 5} -> P = 1/2', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q19',
      'NCERT Exercise 14.1 • Q14',
      'One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting: (i) a king of red colour, (ii) a face card, (iii) a red face card, (iv) the jack of hearts, (v) a spade, (vi) the queen of diamonds.',
      3,
      `<p><strong>Total cards $= 52$.</strong></p>
<ol>
  <li><strong>(i) King of red colour:</strong> 2 kings (hearts, diamonds) $\\implies P = \\frac{2}{52} = \\mathbf{\\frac{1}{26}}$.</li>
  <li><strong>(ii) A face card:</strong> 12 face cards (4 Kings, 4 Queens, 4 Jacks) $\\implies P = \\frac{12}{52} = \\mathbf{\\frac{3}{13}}$.</li>
  <li><strong>(iii) A red face card:</strong> 6 red face cards $\\implies P = \\frac{6}{52} = \\mathbf{\\frac{3}{26}}$.</li>
  <li><strong>(iv) The jack of hearts:</strong> exactly 1 card $\\implies P = \\mathbf{\\frac{1}{52}}$.</li>
  <li><strong>(v) A spade:</strong> 13 spades $\\implies P = \\frac{13}{52} = \\mathbf{\\frac{1}{4}}$.</li>
  <li><strong>(vi) The queen of diamonds:</strong> exactly 1 card $\\implies P = \\mathbf{\\frac{1}{52}}$.</li>
</ol>`,
      [
        { key: 'Probabilities (i) 1/26, (ii) 3/13, (iii) 3/26', marks: '1.5 Marks' },
        { key: 'Probabilities (iv) 1/52, (v) 1/4, (vi) 1/52', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q20',
      'NCERT Exercise 14.1 • Q15',
      'Five cards—the ten, jack, queen, king and ace of diamonds, are well-shuffled with their face downwards. One card is then picked up at random. (i) What is the probability that the card is the queen? (ii) If the queen is drawn and put aside, what is the probability that the second card picked up is (a) an ace? (b) a queen?',
      3,
      `<ol>
  <li><strong>(i) Total cards $= 5$ (10, J, Q, K, A):</strong>
    $$P(\\text{Queen}) = \\frac{1}{5}$$
  </li>
  <li><strong>(ii) Queen is put aside $\\implies$ remaining cards $= 4$ (10, J, K, A):</strong><br>
    (a) Probability of an ace:
    $$P(\\text{Ace}) = \\mathbf{\\frac{1}{4}}$$
    (b) Probability of a queen (since queen was already removed):
    $$P(\\text{Queen}) = \\frac{0}{4} = \\mathbf{0}$$
  </li>
</ol>`,
      [
        { key: '(i) P(Queen) = 1/5', marks: '1 Mark' },
        { key: '(ii)(a) P(Ace) = 1/4', marks: '1 Mark' },
        { key: '(ii)(b) P(Queen) = 0 (impossible)', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q21',
      'NCERT Exercise 14.1 • Q16',
      '12 defective pens are accidentally mixed with 132 good ones. It is not possible to just look at a pen and tell whether or not it is defective. One pen is taken out at random from this lot. Determine the probability that the pen taken out is a good one.',
      2,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Number of good pens $= 132$.</li>
  <li>Number of defective pens $= 12$.</li>
  <li>Total number of pens $= 132 + 12 = 144$.</li>
  <li>Probability of picking a good pen:
    $$P(\\text{good pen}) = \\frac{132}{144} = \\frac{11}{12} = \\mathbf{\\frac{11}{12}}$$
  </li>
</ol>
<p><strong>Answer:</strong> Probability of a good pen is <strong>11/12</strong>.</p>`,
      [
        { key: 'Total pens = 144', marks: '1 Mark' },
        { key: 'P(good pen) = 132/144 = 11/12', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q22',
      'NCERT Exercise 14.1 • Q17',
      '(i) A lot of 20 bulbs contain 4 defective ones. One bulb is drawn at random from the lot. What is the probability that this bulb is defective? (ii) Suppose the bulb drawn in (i) is not defective and is not replaced. Now one bulb is drawn at random from the rest. What is the probability that this bulb is not defective?',
      3,
      `<ol>
  <li><strong>(i) Defective bulb:</strong><br>
    Total bulbs $= 20$, defective $= 4$.
    $$P(\\text{defective}) = \\frac{4}{20} = \\mathbf{\\frac{1}{5}}$$
  </li>
  <li><strong>(ii) Non-defective drawn and not replaced:</strong><br>
    Remaining total bulbs $= 20 - 1 = 19$.<br>
    Remaining non-defective bulbs $= 16 - 1 = 15$.<br>
    $$P(\\text{not defective}) = \\mathbf{\\frac{15}{19}}$$
  </li>
</ol>`,
      [
        { key: '(i) P(defective) = 4/20 = 1/5', marks: '1.5 Marks' },
        { key: '(ii) Remaining 19 bulbs, 15 non-defective -> P = 15/19', marks: '1.5 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q23',
      'NCERT Exercise 14.1 • Q18',
      'A box contains 90 discs which are numbered from 1 to 90. If one disc is drawn at random from the box, find the probability that it bears: (i) a two-digit number, (ii) a perfect square number, (iii) a number divisible by 5.',
      3,
      `<p><strong>Total possible outcomes: 90 discs (1 to 90).</strong></p>
<ol>
  <li><strong>(i) A two-digit number:</strong> Numbers from 10 to 90 $= 90 - 9 = 81$ numbers.
    $$P(\\text{two-digit}) = \\frac{81}{90} = \\mathbf{\\frac{9}{10}}$$
  </li>
  <li><strong>(ii) A perfect square number:</strong> $1, 4, 9, 16, 25, 36, 49, 64, 81$ (9 numbers).
    $$P(\\text{perfect square}) = \\frac{9}{90} = \\mathbf{\\frac{1}{10}}$$
  </li>
  <li><strong>(iii) A number divisible by 5:</strong> $5, 10, 15, \\dots, 90$ ($90/5 = 18$ numbers).
    $$P(\\text{divisible by 5}) = \\frac{18}{90} = \\mathbf{\\frac{1}{5}}$$
  </li>
</ol>`,
      [
        { key: '(i) P(two-digit) = 81/90 = 9/10', marks: '1 Mark' },
        { key: '(ii) P(perfect square) = 9/90 = 1/10', marks: '1 Mark' },
        { key: '(iii) P(divisible by 5) = 18/90 = 1/5', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q24',
      'NCERT Exercise 14.1 • Q19',
      'A child has a die whose six faces show the letters as given below: [A, B, C, D, E, A]. The die is thrown once. What is the probability of getting: (i) A? (ii) D?',
      2,
      `<p><strong>Total outcomes: 6 faces {A, B, C, D, E, A}</strong></p>
<ol>
  <li><strong>(i) Probability of getting A:</strong> Letter A appears on 2 faces.
    $$P(A) = \\frac{2}{6} = \\mathbf{\\frac{1}{3}}$$
  </li>
  <li><strong>(ii) Probability of getting D:</strong> Letter D appears on 1 face.
    $$P(D) = \\mathbf{\\frac{1}{6}}$$
  </li>
</ol>`,
      [
        { key: '(i) P(A) = 2/6 = 1/3', marks: '1 Mark' },
        { key: '(ii) P(D) = 1/6', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q25',
      'NCERT Exercise 14.1 • Q20',
      'Suppose you drop a die at random on the rectangular region of length 3 m and breadth 2 m. What is the probability that it will land inside the circle with diameter 1 m?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Area of entire rectangular region:
    $$A_{\\text{rectangle}} = l \\times b = 3 \\times 2 = \\mathbf{6\\text{ m}^2}$$
  </li>
  <li>Diameter of circle $= 1\\text{ m} \\implies$ radius $r = 1/2\\text{ m} = 0.5\\text{ m}$.<br>
    Area of circular region:
    $$A_{\\text{circle}} = \\pi r^2 = \\pi \\left(\\frac{1}{2}\\right)^2 = \\mathbf{\\frac{\\pi}{4}\\text{ m}^2}$$
  </li>
  <li>Probability that die lands inside circle:
    $$P = \\frac{A_{\\text{circle}}}{A_{\\text{rectangle}}} = \\frac{\\pi / 4}{6} = \\mathbf{\\frac{\\pi}{24}} \\approx 0.1309$$
  </li>
</ol>
<p><strong>Answer:</strong> The probability is <strong>$\\pi/24$</strong>.</p>`,
      [
        { key: 'Area of rectangle = 6 m^2', marks: '1 Mark' },
        { key: 'Area of circle = pi*(1/2)^2 = pi/4 m^2', marks: '1 Mark' },
        { key: 'P = (pi/4) / 6 = pi/24', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q26',
      'NCERT Exercise 14.1 • Q21',
      'A lot consists of 144 ball pens of which 20 are defective and the others are good. Nuri will buy a pen if it is good, but will not buy if it is defective. The shopkeeper draws one pen at random and gives it to her. What is the probability that: (i) She will buy it? (ii) She will not buy it?',
      3,
      `<p><strong>Step-by-step Solution:</strong></p>
<ol>
  <li>Total ball pens $= 144$.</li>
  <li>Defective pens $= 20$.</li>
  <li>Good pens $= 144 - 20 = 124$.</li>
  <li><strong>(i) Probability that she will buy it (pen is good):</strong>
    $$P(\\text{buys}) = \\frac{124}{144} = \\mathbf{\\frac{31}{36}}$$
  </li>
  <li><strong>(ii) Probability that she will not buy it (pen is defective):</strong>
    $$P(\\text{will not buy}) = \\frac{20}{144} = \\mathbf{\\frac{5}{36}}$$
  </li>
</ol>`,
      [
        { key: 'Good pens = 124 out of 144', marks: '1 Mark' },
        { key: '(i) P(buys) = 124/144 = 31/36', marks: '1 Mark' },
        { key: '(ii) P(will not buy) = 20/144 = 5/36', marks: '1 Mark' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q27',
      'NCERT Exercise 14.1 • Q22 & Q23',
      '(i) Two dice are thrown at the same time. Find the probability of getting sum of numbers as: (a) 2, (b) 8, (c) 13. (ii) A game consists of tossing a one rupee coin 3 times and noting its outcome each time. Hanif wins if all the tosses give the same result (three heads or three tails), and loses otherwise. Calculate the probability that Hanif will lose the game.',
      4,
      `<p><strong>(i) Two dice sum ($6 \\times 6 = 36$ outcomes):</strong><br>
(a) Sum $= 2$: pair $(1, 1) \\implies P = \\mathbf{\\frac{1}{36}}$.<br>
(b) Sum $= 8$: pairs $(2, 6), (3, 5), (4, 4), (5, 3), (6, 2) \\implies P = \\frac{5}{36} = \\mathbf{\\frac{5}{36}}$.<br>
(c) Sum $= 13$: impossible $\\implies P = \\mathbf{0}$.</p>
<p><strong>(ii) Hanif\'s coin toss game (8 outcomes):</strong><br>
$S = \\{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT\\} \\implies n(S) = 8$.<br>
Wins: $\\{HHH, TTT\\}$ (2 outcomes).<br>
Loses: remaining 6 outcomes.<br>
$$P(\\text{Hanif loses}) = \\frac{6}{8} = \\mathbf{\\frac{3}{4}}$$</p>`,
      [
        { key: '(i) Sum 2 -> 1/36; Sum 8 -> 5/36; Sum 13 -> 0', marks: '2 Marks' },
        { key: '(ii) Losing outcomes = 6/8 = 3/4', marks: '2 Marks' }
      ]
    ),
    makeMathCard(
      'c10m-ch14-q28',
      'NCERT Exercise 14.1 • Q24 & Q25',
      '(i) A die is thrown twice. What is the probability that: (a) 5 will not come up either time? (b) 5 will come up at least once? (ii) Which of the following arguments are correct and which are not? Give reasons: (a) If two coins are tossed simultaneously there are three possible outcomes—two heads, two tails or one of each. Therefore, each has probability 1/3. (b) If a die is thrown, there are two possible outcomes—an odd number or an even number. Therefore, probability of odd number is 1/2.',
      4,
      `<p><strong>(i) Die thrown twice (36 outcomes):</strong><br>
Outcomes with at least one 5: $(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (1, 5), (2, 5), (3, 5), (4, 5), (6, 5)$ (11 outcomes).<br>
(a) $P(\\text{5 not either time}) = \\frac{36 - 11}{36} = \\mathbf{\\frac{25}{36}}$.<br>
(b) $P(\\text{5 at least once}) = \\mathbf{\\frac{11}{36}}$.</p>
<p><strong>(ii) Arguments:</strong><br>
(a) <strong>Incorrect:</strong> The sample space $\\{HH, HT, TH, TT\\}$ has 4 equally likely outcomes, so "one of each" has probability $2/4 = 1/2$, not $1/3$.<br>
(b) <strong>Correct:</strong> There are 3 odd $\\{1, 3, 5\\}$ and 3 even $\\{2, 4, 6\\}$ numbers, giving equal probability $3/6 = 1/2$.</p>`,
      [
        { key: '(i) (a) 25/36 and (b) 11/36', marks: '2 Marks' },
        { key: '(ii) (a) Incorrect with justification; (b) Correct with justification', marks: '2 Marks' }
      ]
    )
  ];
}

module.exports = {
  getChapter12ExtraAdditions,
  getChapter13ExtraAdditions,
  getChapter14ExtraAdditions
};
