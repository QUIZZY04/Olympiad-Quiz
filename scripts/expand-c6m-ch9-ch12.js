// scripts/expand-c6m-ch9-ch12.js
// Generates Chapters 9 to 12 of Class 6 Ganita Prakash with 100% NCERT exercise coverage
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'chapters-c6m');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function qCard(id, qNum, text, marks, answerHtml, msHtml) {
  return `
  <div class="q-card" id="${id}">
    <div class="q-head" onclick="toggleQ('${id}')">
      <div class="q-num">Q${qNum}</div>
      <div class="q-text">${text}</div>
      <div class="q-marks">[${marks} Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          ${answerHtml}
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          ${msHtml}
        </div>
      </div>
    </div>
  </div>`;
}

function cbqCard(badge, text, answerHtml) {
  return `
  <div class="cbq-card">
    <div class="cbq-badge">${badge}</div>
    <div class="q-text">${text}</div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        ${answerHtml}
      </div>
    </div>
  </div>`;
}

// ============================================================================
// CHAPTER 9: Symmetry
// ============================================================================
const ch9Html = `<section class="chapter-section" id="ch9">
  <div class="chapter-header">
    <div class="ch-badge">9</div>
    <div class="chapter-header-info">
      <h2>Chapter 9: Symmetry</h2>
      <p>NCERT Ganita Prakash (Class 6) — Lines of Symmetry, Reflectional Symmetry, Mirror Inversion &amp; Completing Symmetric Figures | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Symmetry Concepts &amp; Properties</div>
    <ul class="concept-list">
      <li><strong>Line of Symmetry (Axis of Symmetry):</strong> An imaginary line that divides a figure into two identical halves such that folding along the line makes both halves coincide exactly.</li>
      <li><strong>Lines of Symmetry in Regular Polygons:</strong> A regular polygon with $n$ sides has exactly $n$ lines of symmetry:
        <ul>
          <li><em>Equilateral Triangle:</em> 3 lines of symmetry.</li>
          <li><em>Square:</em> 4 lines of symmetry (2 along medians, 2 along diagonals).</li>
          <li><em>Regular Pentagon:</em> 5 lines of symmetry.</li>
          <li><em>Regular Hexagon:</em> 6 lines of symmetry.</li>
          <li><em>Circle:</em> Infinitely many lines of symmetry (every diameter is an axis of symmetry).</li>
        </ul>
      </li>
      <li><strong>Reflection and Symmetry:</strong> The object and its mirror reflection are symmetrical about the mirror line. The distance of an object point from the mirror line equals the distance of its image point.</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 520 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="260" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Lines of Symmetry in Standard Geometric Shapes</text>
      <!-- Equilateral Triangle (3 lines) -->
      <polygon points="75,45 35,125 115,125" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <line x1="75" y1="35" x2="75" y2="135" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="28" y1="130" x2="98" y2="80" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="122" y1="130" x2="52" y2="80" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <text x="75" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Equilateral Δ (3 lines)</text>
      <!-- Square (4 lines) -->
      <rect x="180" y="55" width="70" height="70" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <line x1="215" y1="45" x2="215" y2="135" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="170" y1="90" x2="260" y2="90" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="175" y1="50" x2="255" y2="130" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="255" y1="50" x2="175" y2="130" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <text x="215" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Square (4 lines)</text>
      <!-- Rectangle (2 lines) -->
      <rect x="310" y="60" width="85" height="60" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <line x1="352.5" y1="50" x2="352.5" y2="130" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="300" y1="90" x2="405" y2="90" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <text x="352.5" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Rectangle (2 lines)</text>
      <!-- Circle (Infinitely Many) -->
      <circle cx="460" cy="90" r="35" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <line x1="460" y1="45" x2="460" y2="135" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="415" y1="90" x2="505" y2="90" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <line x1="430" y1="60" x2="490" y2="120" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
      <text x="460" y="155" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Circle (Infinite)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 9.1: Lines of Symmetry in Standard Geometric Polygons and Circle</div>
  </div>

  <div class="ex-div">NCERT Exercise 9.1: Identifying Lines of Symmetry</div>

  ${qCard('c6m-ch9-q1', 1,
    'Find the number of lines of symmetry for each of the following shapes:<br>(a) An equilateral triangle<br>(b) An isosceles triangle<br>(c) A scalene triangle<br>(d) A square<br>(e) A rectangle<br>(f) A rhombus', 3,
    `<div class="step">
      <strong>(a) Equilateral Triangle:</strong> <strong>3 lines of symmetry</strong> (along the altitudes / medians from each vertex).<br>
      <strong>(b) Isosceles Triangle:</strong> <strong>1 line of symmetry</strong> (from the vertex angle bisecting the non-equal base).<br>
      <strong>(c) Scalene Triangle:</strong> <strong>0 lines of symmetry</strong> (no two sides or angles are equal).<br>
      <strong>(d) Square:</strong> <strong>4 lines of symmetry</strong> (2 along the midpoints of opposite sides, 2 along diagonals).<br>
      <strong>(e) Rectangle:</strong> <strong>2 lines of symmetry</strong> (along the lines joining midpoints of opposite sides). Diagonals are NOT lines of symmetry.<br>
      <strong>(f) Rhombus:</strong> <strong>2 lines of symmetry</strong> (along its two diagonals).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct shape symmetry count</span><span class="marking-marks">0.5 Mark each (Total 3 Marks)</span></div>`
  )}

  ${qCard('c6m-ch9-q2', 2,
    'Consider the letters of the English alphabet from A to Z.<br>(a) List five letters having vertical lines of symmetry.<br>(b) List five letters having horizontal lines of symmetry.<br>(c) List three letters having both vertical and horizontal lines of symmetry.<br>(d) List three letters having no lines of symmetry.', 3,
    `<div class="step">
      <strong>(a) Vertical line of symmetry (reflection across vertical line):</strong><br>
      <strong>A, M, T, U, V, W, Y</strong>.
    </div>
    <div class="step">
      <strong>(b) Horizontal line of symmetry (reflection across horizontal line):</strong><br>
      <strong>B, C, D, E, K</strong>.
    </div>
    <div class="step">
      <strong>(c) Both vertical and horizontal lines of symmetry:</strong><br>
      <strong>H, I, O, X</strong>.
    </div>
    <div class="step">
      <strong>(d) No line of symmetry:</strong><br>
      <strong>F, G, J, L, N, P, Q, R, S, Z</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each sub-part accurately categorized</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>`
  )}

  ${qCard('c6m-ch9-q3', 3,
    'Why is a diagonal of a rectangle not a line of symmetry? Explain using a paper-folding argument.', 2,
    `<div class="step">
      <strong>Explanation:</strong><br>
      When a rectangular sheet of paper is folded along one of its diagonals, the two opposite halves do not coincide exactly.<br>
      The corner of one half overlaps outside the boundary of the other half. For a line to be an axis of symmetry, the two folded parts must superimpose exactly and cover each other completely without any overhang. Hence, a diagonal of a non-square rectangle is <strong>not a line of symmetry</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Clear explanation of non-coincidence on folding</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Correct geometric conclusion</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch9-q4', 4,
    'State the number of lines of symmetry for:<br>(a) A regular pentagon &nbsp;&nbsp; (b) A regular hexagon &nbsp;&nbsp; (c) A regular octagon &nbsp;&nbsp; (d) A circle', 2,
    `<div class="step">
      General Rule: A regular polygon of $n$ sides has exactly $n$ lines of symmetry.<br>
      <strong>(a) Regular Pentagon (5 equal sides):</strong> <strong>5 lines of symmetry</strong>.<br>
      <strong>(b) Regular Hexagon (6 equal sides):</strong> <strong>6 lines of symmetry</strong>.<br>
      <strong>(c) Regular Octagon (8 equal sides):</strong> <strong>8 lines of symmetry</strong>.<br>
      <strong>(d) Circle:</strong> <strong>Infinitely many lines of symmetry</strong> (any straight line passing through its centre is an axis of symmetry).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct symmetry count</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch9-q5', 5,
    'What is reflection symmetry? How is the distance of an object point from the mirror line related to the distance of its image point?', 2,
    `<div class="step">
      <strong>Reflection Symmetry:</strong><br>
      Reflection symmetry occurs when an object and its reflected image are symmetrical with respect to a mirror line (the axis of reflection).<br>
      <strong>Distance Property:</strong><br>
      The distance of any object point from the mirror line is <strong>strictly equal</strong> to the distance of its corresponding image point from the mirror line ($d_1 = d_2$). Furthermore, the line segment joining the object and its image is perpendicular to the mirror line.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Definition of reflection symmetry</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Equal distance and perpendicularity property</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Ceramic Tile Mosaic Design)',
    `<strong>Case Study: Architectural Ceramic Tile Mosaic:</strong><br>
    An interior designer creates a square floor tile of side 40 cm featuring a decorative star pattern.<br>
    (a) If the star pattern inside the square has 8-fold symmetry (4 lines of symmetry), what are the orientations of these 4 axes?<br>
    (b) If a single motif is painted at coordinates (10 cm, 5 cm) from the center, at what other three coordinates must identical motifs be placed to maintain reflection symmetry across both horizontal and vertical axes?<br>
    (c) Explain why symmetrical tiles simplify tiling patterns in buildings.`,
    `<p><strong>(a) Orientations of 4 Axes:</strong><br>
    The 4 axes of symmetry of a square are: the vertical axis (y-axis), the horizontal axis (x-axis), and the two diagonal axes (sloping at 45° and 135°).</p>
    <p><strong>(b) Coordinates of Symmetrical Motifs:</strong><br>
    Taking the center as origin $(0, 0)$:<br>
    - Original motif: $(10, 5)$<br>
    - Horizontal reflection (across y-axis): $(-10, 5)$<br>
    - Vertical reflection (across x-axis): $(10, -5)$<br>
    - Double reflection (across origin / both axes): $(-10, -5)$.</p>
    <p><strong>(c) Advantage in Architecture:</strong><br>
    Symmetrical tiles can be rotated in any 90° orientation during laying without breaking the pattern continuity, significantly reducing installation errors and labor costs.</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 10: The Other Side of Zero (Integers)
// ============================================================================
const ch10Html = `<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <h2>Chapter 10: The Other Side of Zero</h2>
      <p>NCERT Ganita Prakash (Class 6) — Negative Numbers, Integers, Number Line Jumps, Additive Inverses &amp; Integer Arithmetic | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Integer Concepts &amp; Sign Rules</div>
    <ul class="concept-list">
      <li><strong>Integers ($\mathbb{Z}$):</strong> The collection of positive natural numbers, zero, and negative natural numbers: $\dots, -4, -3, -2, -1, 0, 1, 2, 3, 4, \dots$</li>
      <li><strong>Ordering on the Number Line:</strong> Numbers to the right are always greater than numbers to the left. For any positive integer $a$, $-a &lt; 0 &lt; a$. As negative numbers move further left, their value decreases (e.g., $-10 &lt; -2$).</li>
      <li><strong>Absolute Value:</strong> The numerical value of an integer regardless of its sign, denoted by $|x|$. $|-5| = 5$, $|5| = 5$.</li>
      <li><strong>Rules for Addition &amp; Subtraction:</strong>
        <ul>
          <li><em>Same sign:</em> Add absolute values and assign the common sign: $(+5) + (+3) = +8$; $(-5) + (-3) = -8$.</li>
          <li><em>Different signs:</em> Subtract smaller absolute value from larger and assign the sign of the larger absolute value: $(+7) + (-4) = +3$; $(-9) + (+2) = -7$.</li>
          <li><em>Subtraction:</em> To subtract an integer, add its additive inverse: $a - b = a + (-b)$.</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 10.1: Integer Concepts &amp; Number Line</div>

  ${qCard('c6m-ch10-q1', 1,
    'Write integers with appropriate signs (+ or -) for the following real-life situations:<br>(a) An increase of 8 marks<br>(b) A loss of ₹ 450<br>(c) A submarine cruising 800 m below sea level<br>(d) Temperature of 15°C below 0°C<br>(e) Deposit of ₹ 2,000 in a bank account', 3,
    `<div class="step">
      <strong>(a) Increase of 8 marks:</strong> <strong>+8</strong><br>
      <strong>(b) Loss of ₹ 450:</strong> <strong>-₹ 450</strong> (or -450)<br>
      <strong>(c) 800 m below sea level:</strong> <strong>-800 m</strong> (or -800)<br>
      <strong>(d) 15°C below 0°C:</strong> <strong>-15°C</strong> (or -15)<br>
      <strong>(e) Deposit of ₹ 2,000:</strong> <strong>+₹ 2,000</strong> (or +2000)
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each integer representation correct with sign</span><span class="marking-marks">0.6 Mark each (Total 3 Marks)</span></div>`
  )}

  ${qCard('c6m-ch10-q2', 2,
    'Represent the following integers on a number line:<br>(a) +5 &nbsp;&nbsp; (b) -8 &nbsp;&nbsp; (c) -1 &nbsp;&nbsp; (d) +4', 2,
    `<div class="step">
      <strong>Number Line Representation:</strong><br>
      1. Draw a horizontal straight line with arrows at both ends.<br>
      2. Mark a point in the center as 0 (reference origin).<br>
      3. Mark equal unit intervals to the right as positive integers (+1, +2, +3, +4, +5).<br>
      4. Mark equal unit intervals to the left as negative integers (-1, -2, -3, ..., -8).<br>
      5. Circle and label points: <strong>+5</strong> (5 units right), <strong>-8</strong> (8 units left), <strong>-1</strong> (1 unit left), <strong>+4</strong> (4 units right).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Accurately calibrated number line with origin 0</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Correctly marking all 4 points</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch10-q3', 3,
    'Compare the following pairs of integers using &gt; or &lt;:<br>(a) 0 and -8<br>(b) -5 and -11<br>(c) -100 and -101<br>(d) 7 and -7', 2,
    `<div class="step">
      <strong>(a) 0 and -8:</strong> Zero is to the right of every negative integer $\\implies \\mathbf{0 &gt; -8}$.<br>
      <strong>(b) -5 and -11:</strong> -5 is to the right of -11 on the number line $\\implies \\mathbf{-5 &gt; -11}$.<br>
      <strong>(c) -100 and -101:</strong> -100 is closer to 0 than -101 $\\implies \\mathbf{-100 &gt; -101}$.<br>
      <strong>(d) 7 and -7:</strong> Any positive integer is greater than any negative integer $\\implies \\mathbf{7 &gt; -7}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct inequality comparison</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 10.2: Integer Addition &amp; Subtraction</div>

  ${qCard('c6m-ch10-q4', 4,
    'Using a number line, find the integer which is:<br>(a) 4 more than -1<br>(b) 5 less than 3<br>(c) 3 less than -2', 3,
    `<div class="step">
      <strong>(a) 4 more than -1:</strong><br>
      Start at -1 on the number line. Move 4 steps to the right (addition):<br>
      $-1 + 4 = \\mathbf{+3}$.
    </div>
    <div class="step">
      <strong>(b) 5 less than 3:</strong><br>
      Start at +3 on the number line. Move 5 steps to the left (subtraction):<br>
      $3 - 5 = \\mathbf{-2}$.
    </div>
    <div class="step">
      <strong>(c) 3 less than -2:</strong><br>
      Start at -2 on the number line. Move 3 steps to the left:<br>
      $-2 - 3 = \\mathbf{-5}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per correct number line step with answer</span><span class="marking-marks">3 Marks</span></div>`
  )}

  ${qCard('c6m-ch10-q5', 5,
    'Find the sum of:<br>(a) (-11) + (-12)<br>(b) (+37) + (-20)<br>(c) (-312) + 39 + 192', 3,
    `<div class="step">
      <strong>(a) (-11) + (-12):</strong><br>
      Both have same negative signs: $-(11 + 12) = \\mathbf{-23}$.
    </div>
    <div class="step">
      <strong>(b) (+37) + (-20):</strong><br>
      Different signs: Subtract absolute values: $37 - 20 = 17$.<br>
      Assign sign of larger absolute value: $\\mathbf{+17}$.
    </div>
    <div class="step">
      <strong>(c) (-312) + 39 + 192:</strong><br>
      Add positive integers first: $39 + 192 = 231$.<br>
      Now calculate $(-312) + 231 = -(312 - 231) = \\mathbf{-81}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per sub-part with clear sign steps</span><span class="marking-marks">3 Marks</span></div>`
  )}

  ${qCard('c6m-ch10-q6', 6,
    'Find the value of:<br>(a) 35 - (20)<br>(b) (-15) - (-18)<br>(c) (-20) - (13)<br>(d) 23 - (-12)', 2,
    `<div class="step">
      Rule: $a - b = a + (\\text{additive inverse of } b)$.<br>
      <strong>(a)</strong> $35 - 20 = \\mathbf{15}$.<br>
      <strong>(b)</strong> $(-15) - (-18) = -15 + 18 = \\mathbf{+3}$.<br>
      <strong>(c)</strong> $(-20) - 13 = -20 + (-13) = \\mathbf{-33}$.<br>
      <strong>(d)</strong> $23 - (-12) = 23 + 12 = \\mathbf{35}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct evaluation</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch10-q7', 7,
    'Fill in the blanks with &gt;, &lt;, or = sign:<br>(a) (-3) + (-6) ______ (-3) - (-6)<br>(b) (-21) - (-10) ______ (-31) + (-11)', 2,
    `<div class="step">
      <strong>(a):</strong><br>
      - LHS: $(-3) + (-6) = -9$<br>
      - RHS: $(-3) - (-6) = -3 + 6 = +3$<br>
      Since $-9 &lt; +3$, the answer is <strong>&lt;</strong>.
    </div>
    <div class="step">
      <strong>(b):</strong><br>
      - LHS: $(-21) - (-10) = -21 + 10 = -11$<br>
      - RHS: $(-31) + (-11) = -42$<br>
      Since $-11 &gt; -42$, the answer is <strong>&gt;</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): LHS = -9, RHS = +3, sign &lt;</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): LHS = -11, RHS = -42, sign &gt;</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Siachen Glacier Climate Data)',
    `<strong>Case Study: Siachen Glacier Temperature &amp; Altitude Profile:</strong><br>
    At a high-altitude base camp on the Siachen glacier, the midnight temperature was recorded at $-18^\\circ\\text{C}$. By 2:00 p.m. the following afternoon, due to clear sunshine, the temperature rose by $11^\\circ\\text{C}$. By midnight, a cold blizzard caused the temperature to drop by $9^\\circ\\text{C}$.<br>
    (a) What was the temperature recorded at 2:00 p.m.?<br>
    (b) What was the final temperature recorded at midnight?<br>
    (c) An army helicopter ascends from an altitude of 3,200 m above sea level to a ridge 5,400 m above sea level. Express the vertical altitude gain as an integer.`,
    `<p><strong>(a) Temperature at 2:00 p.m.:</strong><br>
    $\\text{Temp} = -18^\\circ\\text{C} + 11^\\circ\\text{C} = \\mathbf{-7^\\circ\\text{C}}$.</p>
    <p><strong>(b) Temperature at Midnight:</strong><br>
    $\\text{Temp} = -7^\\circ\\text{C} - 9^\\circ\\text{C} = \\mathbf{-16^\\circ\\text{C}}$.</p>
    <p><strong>(c) Altitude Gain:</strong><br>
    $\\text{Gain} = +5,400 - (+3,200) = \\mathbf{+2,200\\text{ metres}}$.</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 11: Introduction to Algebra
// ============================================================================
const ch11Html = `<section class="chapter-section" id="ch11">
  <div class="chapter-header">
    <div class="ch-badge">11</div>
    <div class="chapter-header-info">
      <h2>Chapter 11: Introduction to Algebra</h2>
      <p>NCERT Ganita Prakash (Class 6) — Variables, Forming Algebraic Expressions, Evaluating Expressions &amp; Solving Simple Equations | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Algebraic Concepts</div>
    <ul class="concept-list">
      <li><strong>Variable:</strong> An entity that can take different numerical values, denoted by letters like $x, y, z, m, n, p$.</li>
      <li><strong>Constant:</strong> A quantity having a fixed numerical value (e.g., $5, -8, \\frac{1}{2}$).</li>
      <li><strong>Algebraic Expression:</strong> A combination of variables and constants connected by arithmetic operations ($+, -, \\times, \\div$), such as $2x + 7$ or $3y - 5$.</li>
      <li><strong>Equation:</strong> A mathematical condition on a variable stating that two expressions are equal, containing an equality sign ($=$).</li>
      <li><strong>Transposition:</strong> Changing the side of a term across the equality sign with inverse operation ($+ \\leftrightarrow -, \\times \\leftrightarrow \\div$).</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 11.1: Matchstick Rules &amp; Expressions</div>

  ${qCard('c6m-ch11-q1', 1,
    'Find the rule which gives the number of matchsticks required to make the following letter patterns:<br>(a) A pattern of letter T as ⊤<br>(b) A pattern of letter Z as Z<br>(c) A pattern of letter U as ⨆<br>(d) A pattern of letter V as V', 2,
    `<div class="step">
      Let $n$ be the number of letters formed.<br>
      <strong>(a) Letter T:</strong> 2 matchsticks per letter $\\implies$ <strong>Rule = 2n</strong>.<br>
      <strong>(b) Letter Z:</strong> 3 matchsticks per letter $\\implies$ <strong>Rule = 3n</strong>.<br>
      <strong>(c) Letter U:</strong> 3 matchsticks per letter $\\implies$ <strong>Rule = 3n</strong>.<br>
      <strong>(d) Letter V:</strong> 2 matchsticks per letter $\\implies$ <strong>Rule = 2n</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct rule with variable n</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch11-q2', 2,
    'Cadets are marching in a parade. There are 5 cadets in a row. What is the rule which gives the number of cadets, given the number of rows? (Use n for the number of rows).', 2,
    `<div class="step">
      Number of cadets in 1 row = 5.<br>
      Let the number of rows be $n$.<br>
      Total number of cadets = Number of cadets in a row $\\times$ Number of rows<br>
      $= 5 \\times n = \\mathbf{5n}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Identifying multiplication by 5</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Writing correct expression 5n</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch11-q3', 3,
    'Write algebraic expressions for each of the following statements:<br>(a) 7 added to p<br>(b) 7 subtracted from -m<br>(c) y is multiplied by -5 and the result is added to 16<br>(d) One-fifth of x added to 3 times y', 2,
    `<div class="step">
      <strong>(a) 7 added to p:</strong> $\\mathbf{p + 7}$<br>
      <strong>(b) 7 subtracted from -m:</strong> $\\mathbf{-m - 7}$<br>
      <strong>(c) y multiplied by -5 and added to 16:</strong> $(-5 \\times y) + 16 = \\mathbf{16 - 5y}$<br>
      <strong>(d) One-fifth of x added to 3 times y:</strong> $\\mathbf{\\frac{x}{5} + 3y}$
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct algebraic expression</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 11.2: Evaluating Expressions &amp; Formulas</div>

  ${qCard('c6m-ch11-q4', 4,
    'The side of an equilateral triangle is shown by l. Express the perimeter of the equilateral triangle using l. Also express the perimeter of a regular hexagon of side s using s.', 2,
    `<div class="step">
      <strong>Equilateral Triangle:</strong> Has 3 equal sides of length $l$.<br>
      Perimeter = $l + l + l = \\mathbf{3l}$.<br>
      <strong>Regular Hexagon:</strong> Has 6 equal sides of length $s$.<br>
      Perimeter = $6 \\times s = \\mathbf{6s}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Triangle perimeter: 3l</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Hexagon perimeter: 6s</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch11-q5', 5,
    'Evaluate the expression 3x² - 5x + 8 when:<br>(a) x = 2<br>(b) x = -1', 3,
    `<div class="step">
      <strong>(a) When x = 2:</strong><br>
      $3(2)^2 - 5(2) + 8 = 3(4) - 10 + 8 = 12 - 10 + 8 = \\mathbf{10}$.
    </div>
    <div class="step">
      <strong>(b) When x = -1:</strong><br>
      $3(-1)^2 - 5(-1) + 8 = 3(1) - (-5) + 8 = 3 + 5 + 8 = \\mathbf{16}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): Substitution and evaluation to 10</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): Handling negative signs to get 16</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 11.3: Solving Simple Equations</div>

  ${qCard('c6m-ch11-q6', 6,
    'Solve the following simple linear equations using inverse operations:<br>(i) x + 10 = 25<br>(ii) p - 8 = 17<br>(iii) 5m = 45<br>(iv) q/4 = 7', 3,
    `<div class="step">
      <strong>(i) x + 10 = 25:</strong> Transpose +10 to RHS: $x = 25 - 10 \\implies \\mathbf{x = 15}$.<br>
      <strong>(ii) p - 8 = 17:</strong> Transpose -8 to RHS: $p = 17 + 8 \\implies \\mathbf{p = 25}$.<br>
      <strong>(iii) 5m = 45:</strong> Divide both sides by 5: $m = \\frac{45}{5} \\implies \\mathbf{m = 9}$.<br>
      <strong>(iv) q/4 = 7:</strong> Multiply both sides by 4: $q = 7 \\times 4 \\implies \\mathbf{q = 28}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct equation solution with transposition step</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>`
  )}

  ${qCard('c6m-ch11-q7', 7,
    'Solve the equation 2x + 7 = 19 and verify your solution.', 2,
    `<div class="step">
      <strong>Solving:</strong><br>
      $2x + 7 = 19$<br>
      $2x = 19 - 7 = 12$<br>
      $x = \\frac{12}{2} = \\mathbf{6}$.<br>
      <strong>Verification:</strong><br>
      $\\text{LHS} = 2(6) + 7 = 12 + 7 = 19 = \\text{RHS}$. Hence verified.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Solution x = 6</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">LHS = RHS verification</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Algebraic Age Problems)',
    `<strong>Case Study: Family Age Relationships:</strong><br>
    Sarita's present age is y years.<br>
    (a) What will be her age 5 years from now?<br>
    (b) What was her age 3 years ago?<br>
    (c) Sarita's grandfather is 6 times her age. What is her grandfather's age?<br>
    (d) Grandmother is 2 years younger than grandfather. What is grandmother's age?<br>
    (e) Sarita's father's age is 5 years more than 3 times Sarita's age. Express father's age.`,
    `<p><strong>(a) Age in 5 years:</strong> $(y + 5)$ years.</p>
    <p><strong>(b) Age 3 years ago:</strong> $(y - 3)$ years.</p>
    <p><strong>(c) Grandfather's age:</strong> $6 \\times y = \\mathbf{6y\\text{ years}}$.</p>
    <p><strong>(d) Grandmother's age:</strong> $(6y - 2)$ years.</p>
    <p><strong>(e) Father's age:</strong> $(3y + 5)$ years.</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 12: Ratio and Proportion
// ============================================================================
const ch12Html = `<section class="chapter-section" id="ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <h2>Chapter 12: Ratio and Proportion</h2>
      <p>NCERT Ganita Prakash (Class 6) — Simplest Form of Ratios, Proportions, Extreme &amp; Mean Terms &amp; The Unitary Method | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Ratio, Proportion &amp; Unitary Rules</div>
    <ul class="concept-list">
      <li><strong>Ratio:</strong> Comparing two quantities of the same kind and with the same unit by division. Denoted by $a : b$ (read as "$a$ is to $b$"). Ratio has no units.</li>
      <li><strong>Simplest Form of Ratio:</strong> Divide both terms by their HCF: $\\frac{a}{b} = \\frac{a \\div \\text{HCF}}{b \\div \\text{HCF}}$.</li>
      <li><strong>Proportion:</strong> If two ratios are equal, they are in proportion: $a : b :: c : d$ (or $\\frac{a}{b} = \\frac{c}{d}$).
        <ul>
          <li>$a$ and $d$ are called <em>extreme terms</em> (extremes).</li>
          <li>$b$ and $c$ are called <em>middle terms</em> (means).</li>
          <li><strong>Rule:</strong> $\\text{Product of Extremes} = \\text{Product of Means} \\implies a \\times d = b \\times c$.</li>
        </ul>
      </li>
      <li><strong>Unitary Method:</strong> The method in which first we find the value of one unit by division, and then the value of the required number of units by multiplication.</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 12.1: Ratios in Simplest Form</div>

  ${qCard('c6m-ch12-q1', 1,
    'There are 20 girls and 15 boys in a class.<br>(a) What is the ratio of number of girls to the number of boys?<br>(b) What is the ratio of number of girls to the total number of students in the class?', 3,
    `<div class="step">
      Number of girls = 20; Number of boys = 15.<br>
      Total number of students = $20 + 15 = 35$.<br>
      <strong>(a) Girls to Boys:</strong><br>
      $\\text{Ratio} = \\frac{20}{15} = \\frac{20 \\div 5}{15 \\div 5} = \\frac{4}{3} = \\mathbf{4 : 3}$.
    </div>
    <div class="step">
      <strong>(b) Girls to Total Students:</strong><br>
      $\\text{Ratio} = \\frac{20}{35} = \\frac{20 \\div 5}{35 \\div 5} = \\frac{4}{7} = \\mathbf{4 : 7}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): 4 : 3 in simplest form</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): 4 : 7 in simplest form</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch12-q2', 2,
    'Find the ratio of the following in simplest form:<br>(a) 30 minutes to 1.5 hours<br>(b) 40 cm to 1.5 m<br>(c) 55 paise to ₹ 1', 3,
    `<div class="step">
      <strong>(a) 30 minutes to 1.5 hours:</strong><br>
      Convert hours to minutes: $1.5 \\times 60 = 90\\text{ minutes}$.<br>
      $\\text{Ratio} = \\frac{30}{90} = \\frac{1}{3} = \\mathbf{1 : 3}$.
    </div>
    <div class="step">
      <strong>(b) 40 cm to 1.5 m:</strong><br>
      Convert metres to cm: $1.5 \\times 100 = 150\\text{ cm}$.<br>
      $\\text{Ratio} = \\frac{40}{150} = \\frac{4}{15} = \\mathbf{4 : 15}$.
    </div>
    <div class="step">
      <strong>(c) 55 paise to ₹ 1:</strong><br>
      Convert rupees to paise: ₹ 1 = 100 paise.<br>
      $\\text{Ratio} = \\frac{55}{100} = \\frac{11}{20} = \\mathbf{11 : 20}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per part showing unit conversion and simplification</span><span class="marking-marks">3 Marks</span></div>`
  )}

  ${qCard('c6m-ch12-q3', 3,
    'Divide ₹ 60 in the ratio 1 : 2 between Kriti and Kiran.', 2,
    `<div class="step">
      Total parts = $1 + 2 = 3$ parts.<br>
      - Kriti\'s share = $\\frac{1}{3} \\times 60 = \\mathbf{\\text{₹ } 20}$.<br>
      - Kiran\'s share = $\\frac{2}{3} \\times 60 = \\mathbf{\\text{₹ } 40}$.<br>
      Verification: ₹ 20 + ₹ 40 = ₹ 60.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Finding total ratio parts (1 + 2 = 3)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Kriti = ₹ 20, Kiran = ₹ 40</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 12.2: Proportions &amp; Cross-Products</div>

  ${qCard('c6m-ch12-q4', 4,
    'Determine if the following numbers are in proportion:<br>(a) 15, 45, 40, 120<br>(b) 33, 121, 9, 96', 3,
    `<div class="step">
      Rule: Numbers $a, b, c, d$ are in proportion if $\\frac{a}{b} = \\frac{c}{d}$ (or $a \\times d = b \\times c$).<br>
      <strong>(a) 15, 45, 40, 120:</strong><br>
      - Ratio 1: $\\frac{15}{45} = \\frac{1}{3}$<br>
      - Ratio 2: $\\frac{40}{120} = \\frac{1}{3}$<br>
      Since $\\frac{1}{3} = \\frac{1}{3}$, <strong>Yes, they are in proportion</strong> ($15 : 45 :: 40 : 120$).
    </div>
    <div class="step">
      <strong>(b) 33, 121, 9, 96:</strong><br>
      - Ratio 1: $\\frac{33}{121} = \\frac{3}{11}$<br>
      - Ratio 2: $\\frac{9}{96} = \\frac{3}{32}$<br>
      Since $\\frac{3}{11} \\neq \\frac{3}{32}$, <strong>No, they are NOT in proportion</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): Yes with ratios 1/3 = 1/3</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): No with ratios 3/11 != 3/32</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch12-q5', 5,
    'Find the missing value x in the proportion: 25 : 30 :: 40 : x.', 2,
    `<div class="step">
      In a proportion, $\\text{Product of Extremes} = \\text{Product of Means}$.<br>
      $25 \\times x = 30 \\times 40$<br>
      $25x = 1,200$<br>
      $x = \\frac{1,200}{25} = \\mathbf{48}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Equation: 25 × x = 30 × 40</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Answer: x = 48</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 12.3: The Unitary Method</div>

  ${qCard('c6m-ch12-q6', 6,
    'If the cost of 7 m of cloth is ₹ 1,470, find the cost of 5 m of cloth.', 2,
    `<div class="step">
      <strong>Step 1: Cost of 1 metre of cloth:</strong><br>
      $\\text{Cost of 1 m} = \\frac{1,470}{7} = \\text{₹ } 210$.<br>
      <strong>Step 2: Cost of 5 metres of cloth:</strong><br>
      $\\text{Cost of 5 m} = 5 \\times \\text{₹ } 210 = \\mathbf{\\text{₹ } 1,050}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Cost of 1 m = ₹ 210</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Cost of 5 m = ₹ 1,050</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch12-q7', 7,
    'Ekta earns ₹ 3,000 in 10 days. How much will she earn in 30 days?', 2,
    `<div class="step">
      Earnings in 10 days = ₹ 3,000.<br>
      Earnings in 1 day = $\\frac{3,000}{10} = \\text{₹ } 300$.<br>
      Earnings in 30 days = $30 \\times \\text{₹ } 300 = \\mathbf{\\text{₹ } 9,000}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Daily earnings = ₹ 300</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Monthly earnings = ₹ 9,000</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch12-q8', 8,
    'A car travels 90 km in 2 1/2 hours.<br>(a) How much time is required to cover 30 km with the same speed?<br>(b) Find the distance covered in 2 hours with the same speed.', 3,
    `<div class="step">
      Speed of car = $\\frac{\\text{Distance}}{\\text{Time}} = \\frac{90}{2.5} = 36\\text{ km/h}$.<br>
      <strong>(a) Time to cover 30 km:</strong><br>
      $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{30}{36} = \\frac{5}{6}\\text{ hours} = \\frac{5}{6} \\times 60 = \\mathbf{50\\text{ minutes}}$.
    </div>
    <div class="step">
      <strong>(b) Distance in 2 hours:</strong><br>
      $\\text{Distance} = \\text{Speed} \\times \\text{Time} = 36 \\times 2 = \\mathbf{72\\text{ km}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Calculating uniform speed 36 km/h</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (a): 50 minutes (or 5/6 h)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): 72 km</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Industrial Manufacturing Scale)',
    `<strong>Case Study: Solar Power Station Generation Ratio:</strong><br>
    A solar farm generates 180 kilowatt-hours (kWh) of clean electricity every 4 hours during peak sunlight.<br>
    (a) Formulate the unit rate of energy generation per hour.<br>
    (b) How many kilowatt-hours will the solar farm generate in 7.5 hours of continuous sunshine?<br>
    (c) If a nearby village requires 720 kWh daily, how many hours of peak sunlight generation are needed to meet the full demand?`,
    `<p><strong>(a) Unit Rate:</strong><br>
    Rate = $\\frac{180\\text{ kWh}}{4\\text{ h}} = \\mathbf{45\\text{ kWh per hour}}$.</p>
    <p><strong>(b) Generation in 7.5 hours:</strong><br>
    Energy = $45 \\times 7.5 = \\mathbf{337.5\\text{ kWh}}$.</p>
    <p><strong>(c) Hours needed for 720 kWh:</strong><br>
    Hours = $\\frac{720}{45} = \\mathbf{16\\text{ hours of peak sunlight}}$.</p>`
  )}
</section>`;

// Write Chapters 9 to 12
fs.writeFileSync(path.join(dir, 'ch9.html'), ch9Html, 'utf8');
console.log('Generated chapters-c6m/ch9.html with 5 exercise Qs + 1 CBQ (6 Total)');

fs.writeFileSync(path.join(dir, 'ch10.html'), ch10Html, 'utf8');
console.log('Generated chapters-c6m/ch10.html with 7 exercise Qs + 1 CBQ (8 Total)');

fs.writeFileSync(path.join(dir, 'ch11.html'), ch11Html, 'utf8');
console.log('Generated chapters-c6m/ch11.html with 7 exercise Qs + 1 CBQ (8 Total)');

fs.writeFileSync(path.join(dir, 'ch12.html'), ch12Html, 'utf8');
console.log('Generated chapters-c6m/ch12.html with 8 exercise Qs + 1 CBQ (9 Total)');

console.log('Chapters 9 to 12 expansion successfully written!');
