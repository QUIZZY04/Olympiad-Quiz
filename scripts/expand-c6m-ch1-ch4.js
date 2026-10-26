// scripts/expand-c6m-ch1-ch4.js
// Generates Chapters 1 to 4 of Class 6 Ganita Prakash with 100% NCERT exercise coverage
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
// CHAPTER 1: Patterns in Mathematics
// ============================================================================
const ch1Html = `<section class="chapter-section" id="ch1">
  <div class="chapter-header">
    <div class="ch-badge">1</div>
    <div class="chapter-header-info">
      <h2>Chapter 1: Patterns in Mathematics</h2>
      <p>NCERT Ganita Prakash (Class 6) — Number Sequences, Triangular &amp; Square Numbers, Matchstick Patterns, Palindromes &amp; Rule Formulation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Mathematical Concepts &amp; Formulas</div>
    <ul class="concept-list">
      <li><strong>Patterns:</strong> A sequence of numbers, geometric shapes, or designs that follow a definite, repeatable rule.</li>
      <li><strong>Triangular Numbers:</strong> Numbers that can be arranged in the shape of an equilateral triangle: 1, 3, 6, 10, 15, 21, 28, 36, ... The n-th triangular number is given by $T_n = \\frac{n(n + 1)}{2}$.</li>
      <li><strong>Square Numbers:</strong> Numbers formed by multiplying an integer by itself: $1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25, ...$ ($S_n = n^2$). Sum of two consecutive triangular numbers gives a square number: $T_{n-1} + T_n = n^2$.</li>
      <li><strong>Sum of First n Odd Numbers:</strong> The sum of the first $n$ odd consecutive numbers equals $n^2$: $1 + 3 + 5 + \\dots + (2n - 1) = n^2$.</li>
      <li><strong>Matchstick Patterns &amp; Algebraic Rules:</strong> If each additional unit requires a fixed number of sticks $d$, the rule for $n$ shapes is given by $d \\cdot n + c$. For example, a row of $n$ squares requires $3n + 1$ matchsticks; a row of $n$ triangles requires $2n + 1$ matchsticks.</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Visual Pattern: Triangular Numbers Sequence (T₁ to T₄)</text>
      <!-- T1 = 1 -->
      <circle cx="50" cy="90" r="7" fill="#2563eb"/>
      <text x="50" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">T₁ = 1</text>
      <!-- T2 = 3 -->
      <circle cx="140" cy="76" r="7" fill="#2563eb"/>
      <circle cx="128" cy="100" r="7" fill="#2563eb"/>
      <circle cx="152" cy="100" r="7" fill="#2563eb"/>
      <text x="140" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">T₂ = 3</text>
      <!-- T3 = 6 -->
      <circle cx="260" cy="64" r="7" fill="#2563eb"/>
      <circle cx="248" cy="86" r="7" fill="#2563eb"/>
      <circle cx="272" cy="86" r="7" fill="#2563eb"/>
      <circle cx="236" cy="108" r="7" fill="#2563eb"/>
      <circle cx="260" cy="108" r="7" fill="#2563eb"/>
      <circle cx="284" cy="108" r="7" fill="#2563eb"/>
      <text x="260" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">T₃ = 6</text>
      <!-- T4 = 10 -->
      <circle cx="420" cy="52" r="7" fill="#2563eb"/>
      <circle cx="408" cy="72" r="7" fill="#2563eb"/>
      <circle cx="432" cy="72" r="7" fill="#2563eb"/>
      <circle cx="396" cy="92" r="7" fill="#2563eb"/>
      <circle cx="420" cy="92" r="7" fill="#2563eb"/>
      <circle cx="444" cy="92" r="7" fill="#2563eb"/>
      <circle cx="384" cy="112" r="7" fill="#2563eb"/>
      <circle cx="408" cy="112" r="7" fill="#2563eb"/>
      <circle cx="432" cy="112" r="7" fill="#2563eb"/>
      <circle cx="456" cy="112" r="7" fill="#2563eb"/>
      <text x="420" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">T₄ = 10</text>
      <text x="270" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">General Rule: Tₙ = n(n + 1)/2 | Sum of Two Consecutive Triangular Numbers = Square Number</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 1.1: Dot Array Models for Triangular Numbers Sequence</div>
  </div>

  <div class="ex-div">NCERT Exercise 1.1: Number Patterns &amp; Triangular Numbers</div>

  ${qCard('c6m-ch1-q1', 1, 
    'Observe the number sequence: 1, 3, 6, 10, 15, ...<br>(i) Write the next three numbers of this sequence.<br>(ii) What is the special mathematical name given to these numbers?<br>(iii) Show that the sum of the 3ʳᵈ and 4ᵗʰ numbers forms a perfect square.', 3,
    `<div class="step">
      <strong>(i) Pattern Rule &amp; Next Three Numbers:</strong><br>
      Let us find the difference between consecutive terms:<br>
      3 - 1 = 2, 6 - 3 = 3, 10 - 6 = 4, 15 - 10 = 5.<br>
      Each step adds the next natural number (+2, +3, +4, +5).<br>
      Therefore:<br>
      - Next term: 15 + 6 = <strong>21</strong><br>
      - Next term: 21 + 7 = <strong>28</strong><br>
      - Next term: 28 + 8 = <strong>36</strong><br>
      The next three numbers are <strong>21, 28, and 36</strong>.
    </div>
    <div class="step">
      <strong>(ii) Mathematical Name:</strong><br>
      These numbers are called <strong>Triangular Numbers</strong> because dots representing them can be arranged into an equilateral triangle.
    </div>
    <div class="step">
      <strong>(iii) Sum of 3ʳᵈ and 4ᵗʰ Triangular Numbers:</strong><br>
      3ʳᵈ triangular number = 6; 4ᵗʰ triangular number = 10.<br>
      Sum = 6 + 10 = 16 = 4².<br>
      Since 16 = 4 × 4, the sum is indeed a <strong>perfect square</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Identifying pattern and writing 21, 28, 36</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Stating "Triangular Numbers"</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Computing 6 + 10 = 16 and verifying 4²</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q2', 2,
    'Find the 10ᵗʰ triangular number using the formula $T_n = \\frac{n(n+1)}{2}$. Verify your answer by summing the first 10 natural numbers.', 2,
    `<div class="step">
      <strong>Step 1: Formula Calculation:</strong><br>
      Given $n = 10$,<br>
      $T_{10} = \\frac{10 \\times (10 + 1)}{2} = \\frac{10 \\times 11}{2} = 5 \\times 11 = \\mathbf{55}$.
    </div>
    <div class="step">
      <strong>Step 2: Verification by Addition:</strong><br>
      $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = (1 + 10) + (2 + 9) + (3 + 8) + (4 + 7) + (5 + 6)$<br>
      $= 11 \\times 5 = \\mathbf{55}$.<br>
      Both methods yield <strong>55</strong>. Hence verified.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Correct substitution in formula yielding 55</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Verification by grouping or consecutive addition</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 140" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Matchstick Square Pattern Sequence: Rule Formulation</text>
      <!-- 1 Square: 4 sticks -->
      <rect x="35" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <circle cx="35" cy="45" r="3.5" fill="#eab308"/><circle cx="75" cy="45" r="3.5" fill="#eab308"/><circle cx="35" cy="85" r="3.5" fill="#eab308"/><circle cx="75" cy="85" r="3.5" fill="#eab308"/>
      <text x="55" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">n = 1 (4 sticks)</text>
      <!-- 2 Squares: 7 sticks -->
      <rect x="150" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <rect x="190" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <text x="190" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">n = 2 (7 sticks)</text>
      <!-- 3 Squares: 10 sticks -->
      <rect x="300" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <rect x="340" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <rect x="380" y="45" width="40" height="40" fill="#f8fafc" stroke="#dc2626" stroke-width="3" rx="2"/>
      <text x="360" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">n = 3 (10 sticks)</text>
      <text x="270" y="132" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#0284c7" text-anchor="middle">Rule for n Squares: 3n + 1 matchsticks (First square takes 4, each extra square adds 3)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 1.2: Matchstick Pattern of Connected Squares</div>
  </div>

  <div class="ex-div">NCERT Exercise 1.2: Matchstick Patterns &amp; Algebraic Generalization</div>

  ${qCard('c6m-ch1-q3', 3,
    'A student makes a row of connected squares using matchsticks as shown in Figure 1.2.<br>(i) Find the number of matchsticks required for 1 square, 2 squares, 3 squares, and 4 squares.<br>(ii) Write the general rule for the number of matchsticks required to make n squares.<br>(iii) How many matchsticks are needed to make a row of 25 connected squares?', 3,
    `<div class="step">
      <strong>(i) Count of Matchsticks:</strong><br>
      - For 1 square: 4 matchsticks.<br>
      - For 2 connected squares: 4 + 3 = 7 matchsticks (1 edge shared).<br>
      - For 3 connected squares: 7 + 3 = 10 matchsticks.<br>
      - For 4 connected squares: 10 + 3 = 13 matchsticks.
    </div>
    <div class="step">
      <strong>(ii) Formulation of General Rule:</strong><br>
      Notice: 4 = 3(1) + 1, 7 = 3(2) + 1, 10 = 3(3) + 1, 13 = 3(4) + 1.<br>
      Therefore, for $n$ connected squares, the general rule is:<br>
      <strong>Number of matchsticks = 3n + 1</strong>.
    </div>
    <div class="step">
      <strong>(iii) Calculation for n = 25:</strong><br>
      Matchsticks = 3(25) + 1 = 75 + 1 = <strong>76 matchsticks</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Tabulating stick counts (4, 7, 10, 13)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Deriving formula 3n + 1</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Correct calculation yielding 76</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q4', 4,
    'A series of connected equilateral triangles is formed using matchsticks.<br>(i) How many matchsticks are required for 1, 2, 3, and 4 triangles?<br>(ii) Find the rule for the number of matchsticks needed for n triangles.<br>(iii) If 41 matchsticks are used, how many triangles are formed in the row?', 3,
    `<div class="step">
      <strong>(i) Count of Matchsticks for Triangles:</strong><br>
      - 1 triangle requires 3 matchsticks.<br>
      - 2 connected triangles share 1 common side: 3 + 2 = 5 matchsticks.<br>
      - 3 connected triangles: 5 + 2 = 7 matchsticks.<br>
      - 4 connected triangles: 7 + 2 = 9 matchsticks.
    </div>
    <div class="step">
      <strong>(ii) General Rule:</strong><br>
      Observe: 3 = 2(1) + 1, 5 = 2(2) + 1, 7 = 2(3) + 1, 9 = 2(4) + 1.<br>
      Therefore, for $n$ triangles: <strong>Matchsticks = 2n + 1</strong>.
    </div>
    <div class="step">
      <strong>(iii) Finding n when 41 matchsticks are used:</strong><br>
      $2n + 1 = 41 \\implies 2n = 40 \\implies n = 20$.<br>
      Therefore, <strong>20 triangles</strong> are formed.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Correct counts (3, 5, 7, 9)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Writing general rule 2n + 1</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Solving 2n + 1 = 41 to get n = 20</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q5', 5,
    'Observe the pattern in the following number pyramid:<br>1 × 8 + 1 = 9<br>12 × 8 + 2 = 98<br>123 × 8 + 3 = 987<br>1234 × 8 + 4 = 9876<br>Write down the next two lines of this pattern without actual multiplication, and describe the rule.', 2,
    `<div class="step">
      <strong>Pattern Rule Analysis:</strong><br>
      - In the first factor, digits 1, 2, 3, ... are appended in ascending sequence.<br>
      - The number added is the next natural number (1, 2, 3, 4, 5, 6).<br>
      - The product digits decrease consecutively starting from 9.<br>
      <strong>Line 5:</strong> 12345 × 8 + 5 = <strong>98765</strong><br>
      <strong>Line 6:</strong> 123456 × 8 + 6 = <strong>987654</strong>
    </div>`,
    `<div class="marking-row"><span class="marking-key">Line 5 correct: 12345 × 8 + 5 = 98765</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Line 6 correct: 123456 × 8 + 6 = 987654</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q6', 6,
    'A sequence is defined by the rule: "Multiply the term number by 4 and then subtract 3".<br>(i) Write the first 5 terms of this sequence.<br>(ii) Find the 20ᵗʰ term.<br>(iii) Is the number 85 a term in this sequence? Justify your answer.', 3,
    `<div class="step">
      <strong>(i) First 5 Terms:</strong><br>
      Formula: $a_n = 4n - 3$.<br>
      - For $n = 1$: $4(1) - 3 = 1$<br>
      - For $n = 2$: $4(2) - 3 = 5$<br>
      - For $n = 3$: $4(3) - 3 = 9$<br>
      - For $n = 4$: $4(4) - 3 = 13$<br>
      - For $n = 5$: $4(5) - 3 = 17$<br>
      The first 5 terms are <strong>1, 5, 9, 13, 17</strong>.
    </div>
    <div class="step">
      <strong>(ii) 20ᵗʰ Term:</strong><br>
      $a_{20} = 4(20) - 3 = 80 - 3 = \\mathbf{77}$.
    </div>
    <div class="step">
      <strong>(iii) Checking if 85 is in the sequence:</strong><br>
      Set $4n - 3 = 85 \\implies 4n = 88 \\implies n = 22$.<br>
      Since $n = 22$ is a whole number, <strong>Yes, 85 is the 22ⁿᵈ term</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Computing first 5 terms (1, 5, 9, 13, 17)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Finding a₂₀ = 77</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Solving 4n - 3 = 85 and concluding n = 22</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q7', 7,
    'Observe the dot pattern for square numbers: 1, 4, 9, 16, 25, 36, ...<br>(i) Express 25 as the sum of consecutive odd natural numbers.<br>(ii) Express 36 as the sum of two consecutive triangular numbers.<br>(iii) Express 49 as the sum of consecutive odd natural numbers.', 3,
    `<div class="step">
      <strong>(i) Expressing 25 as sum of odd numbers:</strong><br>
      $25 = 5^2$. It is the sum of the first 5 odd natural numbers:<br>
      $25 = \\mathbf{1 + 3 + 5 + 7 + 9}$.
    </div>
    <div class="step">
      <strong>(ii) Expressing 36 as sum of two consecutive triangular numbers:</strong><br>
      $36 = 6^2$. A square number $n^2$ is the sum of the $(n-1)$-th and $n$-th triangular numbers.<br>
      $T_5 = \\frac{5 \\times 6}{2} = 15$; $T_6 = \\frac{6 \\times 7}{2} = 21$.<br>
      $36 = \\mathbf{15 + 21}$.
    </div>
    <div class="step">
      <strong>(iii) Expressing 49 as sum of odd numbers:</strong><br>
      $49 = 7^2$. It is the sum of the first 7 odd natural numbers:<br>
      $49 = \\mathbf{1 + 3 + 5 + 7 + 9 + 11 + 13}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Writing 1 + 3 + 5 + 7 + 9 = 25</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Writing 15 + 21 = 36</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Writing 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q8', 8,
    'Observe the palindromic multiplication pattern:<br>11 × 11 = 121<br>111 × 111 = 12321<br>1111 × 1111 = 1234321<br>(i) Without actual calculation, predict the value of 11111 × 11111.<br>(ii) What is the square root of 12345654321?', 2,
    `<div class="step">
      <strong>(i) Value of 11111 × 11111:</strong><br>
      Since there are 5 ones, digits increase from 1 up to 5 and then decrease back to 1:<br>
      $11111 \\times 11111 = \\mathbf{123454321}$.
    </div>
    <div class="step">
      <strong>(ii) Square root of 12345654321:</strong><br>
      The peak middle digit is 6, which indicates the number is the square of a 6-digit number consisting of all 1s:<br>
      $\\sqrt{12345654321} = \\mathbf{111111}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Stating 123454321 correctly</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Identifying 111111</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q9', 9,
    'A calendar page displays a 3 × 3 square of dates as follows:<br>&nbsp;&nbsp;4 &nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp; 6<br>&nbsp;11 &nbsp;&nbsp; 12 &nbsp;&nbsp; 13<br>&nbsp;18 &nbsp;&nbsp; 19 &nbsp;&nbsp; 20<br>(i) Find the sum of all 9 numbers in this square.<br>(ii) Relate this total sum to the central number (12).<br>(iii) Does this rule hold true for any 3 × 3 date block on a calendar? Give a mathematical reason.', 3,
    `<div class="step">
      <strong>(i) Sum of all 9 numbers:</strong><br>
      $4 + 5 + 6 + 11 + 12 + 13 + 18 + 19 + 20 = 108$.
    </div>
    <div class="step">
      <strong>(ii) Relationship to central number:</strong><br>
      Notice that $108 = 9 \\times 12$.<br>
      The total sum of all 9 numbers equals <strong>9 times the central number</strong>.
    </div>
    <div class="step">
      <strong>(iii) Mathematical Justification:</strong><br>
      Let the central number be $x$. The 8 surrounding numbers are symmetric around $x$:<br>
      $(x-8) + (x-7) + (x-6) + (x-1) + x + (x+1) + (x+6) + (x+7) + (x+8) = 9x$.<br>
      The positive and negative offsets cancel out completely. Hence, the rule holds true for <strong>any 3 × 3 square</strong> on any calendar month.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Calculating total sum 108</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Stating Sum = 9 × Central Number (9 × 12 = 108)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Algebraic proof with cancellation of symmetric offsets</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q10', 10,
    'A pattern of "matchstick houses" is built in a row. The first house requires 6 matchsticks. Each subsequent connected house requires 5 additional matchsticks.<br>(i) Write the rule for the number of matchsticks required for h houses.<br>(ii) Find the number of matchsticks needed to build 12 houses.<br>(iii) If a student has 106 matchsticks, how many complete houses can be built?', 3,
    `<div class="step">
      <strong>(i) Rule Formulation:</strong><br>
      For 1 house: 6 matchsticks.<br>
      For 2 houses: 6 + 5 = 11 matchsticks.<br>
      For 3 houses: 11 + 5 = 16 matchsticks.<br>
      Rule for $h$ houses: $6 + 5(h - 1) = \\mathbf{5h + 1}$.
    </div>
    <div class="step">
      <strong>(ii) Matchsticks for 12 houses:</strong><br>
      $5(12) + 1 = 60 + 1 = \\mathbf{61\\text{ matchsticks}}$.
    </div>
    <div class="step">
      <strong>(iii) Houses from 106 matchsticks:</strong><br>
      $5h + 1 = 106 \\implies 5h = 105 \\implies h = 21$.<br>
      Thus, <strong>21 complete houses</strong> can be built.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Deriving rule 5h + 1</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Finding 61 matchsticks</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Solving for h = 21</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch1-q11', 11,
    'Consider the Fibonacci-like pattern: 1, 1, 2, 3, 5, 8, 13, 21, ...<br>(i) Explain the rule used to generate each subsequent term.<br>(ii) Write the next two terms of this sequence.<br>(iii) What is the sum of the first 6 terms? Verify that it equals the 8ᵗʰ term minus 1.', 3,
    `<div class="step">
      <strong>(i) Generation Rule:</strong><br>
      Each term after the first two is obtained by adding the two immediately preceding terms:<br>
      $1 + 1 = 2$, $1 + 2 = 3$, $2 + 3 = 5$, $3 + 5 = 8$, $5 + 8 = 13$, $8 + 13 = 21$.
    </div>
    <div class="step">
      <strong>(ii) Next Two Terms:</strong><br>
      - 9ᵗʰ term: $13 + 21 = \\mathbf{34}$<br>
      - 10ᵗʰ term: $21 + 34 = \\mathbf{55}$
    </div>
    <div class="step">
      <strong>(iii) Sum and Verification:</strong><br>
      Sum of first 6 terms = $1 + 1 + 2 + 3 + 5 + 8 = 20$.<br>
      8ᵗʰ term = 21.<br>
      Verification: $21 - 1 = 20$. Hence verified.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Stating addition of previous two terms</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Calculating 34 and 55</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Verifying Sum = 20 = 21 - 1</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Real-Life Case Study)',
    `<strong>Case Study: School Auditorium Seating Arrangement:</strong><br>
    In a newly constructed school auditorium, the chairs in the rows are arranged in a triangular stage pattern. Row 1 has 3 chairs, Row 2 has 5 chairs, Row 3 has 7 chairs, and so on.<br>
    (a) Formulate the algebraic rule for the number of chairs in Row n.<br>
    (b) How many chairs are in the 15ᵗʰ row?<br>
    (c) If the last row contains 41 chairs, find the total number of rows in the auditorium.<br>
    (d) Calculate the total seating capacity of the first 10 rows.`,
    `<p><strong>(a) Algebraic Rule:</strong><br>
    The number of chairs in consecutive rows is 3, 5, 7, 9, ...<br>
    Common difference $d = 2$. For Row 1: $2(1) + 1 = 3$.<br>
    Therefore, for Row $n$: <strong>Chairs = 2n + 1</strong>.</p>
    <p><strong>(b) Chairs in 15ᵗʰ Row:</strong><br>
    Substitute $n = 15$: Chairs = $2(15) + 1 = 30 + 1 = \\mathbf{31\\text{ chairs}}$.</p>
    <p><strong>(c) Total Number of Rows when Last Row has 41 Chairs:</strong><br>
    $2n + 1 = 41 \\implies 2n = 40 \\implies n = \\mathbf{20\\text{ rows}}$.</p>
    <p><strong>(d) Total Seating Capacity of First 10 Rows:</strong><br>
    Sum = $3 + 5 + 7 + \\dots + 21$.<br>
    Notice this is $(1 + 3 + 5 + \\dots + 21) - 1 = 11^2 - 1 = 121 - 1 = \\mathbf{120\\text{ seats}}$.</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 2: Lines and Angles
// ============================================================================
const ch2Html = `<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <h2>Chapter 2: Lines and Angles</h2>
      <p>NCERT Ganita Prakash (Class 6) — Points, Lines, Rays, Angle Classifications, Clock Revolutions, Protractor Measurement, Linear Pairs &amp; Intersecting Lines | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geometric Concepts &amp; Angle Classifications</div>
    <ul class="concept-list">
      <li><strong>Point, Line, Ray &amp; Line Segment:</strong> A point marks a fixed position with zero dimensions. A line extends infinitely in both directions ($\overleftrightarrow{AB}$). A line segment has two fixed endpoints ($\overline{AB}$). A ray has one initial point and extends indefinitely in one direction ($\vec{AB}$).</li>
      <li><strong>Angle Classifications:</strong>
        <ul>
          <li><em>Acute Angle:</em> Greater than 0° and less than 90°.</li>
          <li><em>Right Angle:</em> Exactly equal to 90° ($\\frac{1}{4}$ of a full revolution).</li>
          <li><em>Obtuse Angle:</em> Greater than 90° and less than 180°.</li>
          <li><em>Straight Angle:</em> Exactly equal to 180° ($\\frac{1}{2}$ of a full revolution).</li>
          <li><em>Reflex Angle:</em> Greater than 180° and less than 360°.</li>
          <li><em>Complete Angle:</em> Exactly equal to 360° (1 full revolution).</li>
        </ul>
      </li>
      <li><strong>Complementary &amp; Supplementary Angles:</strong> Two angles are complementary if their sum is 90°. Two angles are supplementary if their sum is 180°.</li>
      <li><strong>Linear Pair &amp; Vertically Opposite Angles:</strong> When two lines intersect, adjacent angles forming a straight line add to 180° (linear pair), and vertically opposite angles are equal.</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 560px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 170" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Types of Angles: Visual Classification with Standard Measures</text>
      <!-- Acute Angle (45°) -->
      <path d="M 30,120 L 95,120 M 30,120 L 76,74" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 50,120 A 20,20 0 0,0 44,106" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="50" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Acute (&lt; 90°)</text>
      <!-- Right Angle (90°) -->
      <path d="M 140,120 L 205,120 M 140,120 L 140,55" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="140" y="105" width="15" height="15" fill="none" stroke="#16a34a" stroke-width="1.8"/>
      <text x="170" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Right (= 90°)</text>
      <!-- Obtuse Angle (135°) -->
      <path d="M 275,120 L 340,120 M 275,120 L 229,74" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 295,120 A 20,20 0 0,0 261,106" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="285" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Obtuse (&gt; 90°, &lt; 180°)</text>
      <!-- Straight Angle (180°) -->
      <path d="M 380,120 L 510,120" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="445" cy="120" r="4" fill="#7c3aed"/>
      <path d="M 465,120 A 20,20 0 0,0 425,120" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="445" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Straight (= 180°)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 2.1: Geometric Representation of Acute, Right, Obtuse, and Straight Angles</div>
  </div>

  <div class="ex-div">NCERT Exercise 2.1: Angle Types &amp; Identification</div>

  ${qCard('c6m-ch2-q1', 1,
    'Classify each of the following angles into acute, obtuse, right, straight, or reflex:<br>(i) 35° &nbsp;&nbsp; (ii) 90° &nbsp;&nbsp; (iii) 142° &nbsp;&nbsp; (iv) 180° &nbsp;&nbsp; (v) 245° &nbsp;&nbsp; (vi) 89°', 3,
    `<div class="step"><strong>(i) 35°:</strong> Since 35° &lt; 90°, it is an <strong>Acute Angle</strong>.</div>
    <div class="step"><strong>(ii) 90°:</strong> Exactly 90°, it is a <strong>Right Angle</strong>.</div>
    <div class="step"><strong>(iii) 142°:</strong> Since 90° &lt; 142° &lt; 180°, it is an <strong>Obtuse Angle</strong>.</div>
    <div class="step"><strong>(iv) 180°:</strong> Exactly 180°, it is a <strong>Straight Angle</strong>.</div>
    <div class="step"><strong>(v) 245°:</strong> Since 180° &lt; 245° &lt; 360°, it is a <strong>Reflex Angle</strong>.</div>
    <div class="step"><strong>(vi) 89°:</strong> Since 89° &lt; 90°, it is an <strong>Acute Angle</strong>.</div>`,
    `<div class="marking-row"><span class="marking-key">Each correct classification with reason</span><span class="marking-marks">0.5 Mark each (Total 3 Marks)</span></div>`
  )}

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 520px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 480 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="240" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Clock Hand Revolutions and Corresponding Angles</text>
      <!-- Clock 1: 12 to 3 -->
      <circle cx="120" cy="95" r="50" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="120" cy="95" r="3" fill="#0f172a"/>
      <line x1="120" y1="95" x2="155" y2="95" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <line x1="120" y1="95" x2="120" y2="55" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="120" y="85" width="10" height="10" fill="none" stroke="#16a34a" stroke-width="1.5"/>
      <text x="120" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">12 to 3: 1/4 Rev = 90°</text>
      <!-- Clock 2: 12 to 6 -->
      <circle cx="360" cy="95" r="50" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="360" cy="95" r="3" fill="#0f172a"/>
      <line x1="360" y1="95" x2="360" y2="55" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="360" y1="95" x2="360" y2="135" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <path d="M 375,95 A 15,15 0 0,0 345,95" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="360" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">12 to 6: 1/2 Rev = 180°</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 2.2: Clock Face Revolutions: Quarter and Half Turns</div>
  </div>

  <div class="ex-div">NCERT Exercise 2.2: Clock Angles &amp; Direction Revolutions</div>

  ${qCard('c6m-ch2-q2', 2,
    'What fraction of a clockwise revolution does the hour hand of a clock turn through, when it goes from:<br>(a) 3 to 9<br>(b) 4 to 7<br>(c) 7 to 10<br>(d) 12 to 9', 3,
    `<div class="step">
      <strong>Formula:</strong> A clock has 12 equal hours. 1 full revolution = 12 hours = 360°.<br>
      Fraction of revolution = $\\frac{\\text{Number of hours passed}}{12}$.<br>
      <strong>(a) From 3 to 9:</strong> Hours passed = $9 - 3 = 6$. Fraction = $\\frac{6}{12} = \\mathbf{\\frac{1}{2}}$ revolution (180°).<br>
      <strong>(b) From 4 to 7:</strong> Hours passed = $7 - 4 = 3$. Fraction = $\\frac{3}{12} = \\mathbf{\\frac{1}{4}}$ revolution (90°).<br>
      <strong>(c) From 7 to 10:</strong> Hours passed = $10 - 7 = 3$. Fraction = $\\frac{3}{12} = \\mathbf{\\frac{1}{4}}$ revolution (90°).<br>
      <strong>(d) From 12 to 9 (clockwise):</strong> Hours passed = 9. Fraction = $\\frac{9}{12} = \\mathbf{\\frac{3}{4}}$ revolution (270°).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Formula statement: Hours / 12</span><span class="marking-marks">0.5 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Parts (a), (b), (c), (d) correct simplified fractions</span><span class="marking-marks">2.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch2-q3', 3,
    'Where will the hand of a clock stop if it:<br>(a) Starts at 12 and makes 1/2 of a revolution, clockwise?<br>(b) Starts at 2 and makes 1/2 of a revolution, clockwise?<br>(c) Starts at 5 and makes 1/4 of a revolution, clockwise?<br>(d) Starts at 8 and makes 3/4 of a revolution, clockwise?', 3,
    `<div class="step">
      <strong>(a) Starts at 12, 1/2 revolution:</strong><br>
      Hours moved = $\\frac{1}{2} \\times 12 = 6$ hours. $12 + 6 = 18 \\equiv 6$. Stops at <strong>6</strong>.
    </div>
    <div class="step">
      <strong>(b) Starts at 2, 1/2 revolution:</strong><br>
      Hours moved = $\\frac{1}{2} \\times 12 = 6$ hours. $2 + 6 = 8$. Stops at <strong>8</strong>.
    </div>
    <div class="step">
      <strong>(c) Starts at 5, 1/4 revolution:</strong><br>
      Hours moved = $\\frac{1}{4} \\times 12 = 3$ hours. $5 + 3 = 8$. Stops at <strong>8</strong>.
    </div>
    <div class="step">
      <strong>(d) Starts at 8, 3/4 revolution:</strong><br>
      Hours moved = $\\frac{3}{4} \\times 12 = 9$ hours. $8 + 9 = 17 \\equiv 5$. Stops at <strong>5</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct position with clear calculation</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>`
  )}

  ${qCard('c6m-ch2-q4', 4,
    'In Figure 2.3, two lines AB and CD intersect at point O. If ∠AOC = 50°, find the measures of ∠BOD, ∠AOD, and ∠BOC. Give reasons for each step.', 3,
    `<div class="step">
      <strong>Step 1: Vertically Opposite Angle:</strong><br>
      $\\angle BOD$ and $\\angle AOC$ are vertically opposite angles.<br>
      Therefore, $\\angle BOD = \\angle AOC = \\mathbf{50^\\circ}$.
    </div>
    <div class="step">
      <strong>Step 2: Linear Pair with ∠AOC:</strong><br>
      $AB$ is a straight line, so ray $OC$ stands on it.<br>
      $\\angle AOC + \\angle BOC = 180^\\circ$ (Linear pair property).<br>
      $50^\\circ + \\angle BOC = 180^\\circ \\implies \\angle BOC = 180^\\circ - 50^\\circ = \\mathbf{130^\\circ}$.
    </div>
    <div class="step">
      <strong>Step 3: Vertically Opposite Angle for ∠AOD:</strong><br>
      $\\angle AOD = \\angle BOC = \\mathbf{130^\\circ}$ (Vertically opposite angles).<br>
      <strong>Summary:</strong> $\\angle BOD = 50^\\circ$, $\\angle AOD = 130^\\circ$, $\\angle BOC = 130^\\circ$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">∠BOD = 50° with vertically opposite angles reason</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">∠BOC = 130° using linear pair property</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">∠AOD = 130° with proper geometrical reason</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch2-q5', 5,
    'Explain the step-by-step procedure to measure an angle ∠PQR using a protractor. Also describe how to avoid parallax error during reading.', 2,
    `<div class="step">
      <strong>Procedure for Protractor Measurement:</strong><br>
      1. Place the centre point of the protractor directly on the vertex $Q$ of the angle.<br>
      2. Adjust the protractor so that the base line (zero-edge) lies precisely along one arm, $QR$.<br>
      3. Look at the scale where the zero mark coincides with arm $QR$.<br>
      4. Read the mark on that scale where the second arm, $QP$, crosses the curved edge.<br>
      <strong>Avoiding Parallax Error:</strong> Position your eye directly perpendicular above the scale reading mark rather than viewing at an angle.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Accurate 4-step protractor alignment procedure</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Explanation of perpendicular eye position for zero parallax</span><span class="marking-marks">0.5 Mark</span></div>`
  )}

  ${qCard('c6m-ch2-q6', 6,
    '(a) Find the complement of: (i) 28° &nbsp;&nbsp; (ii) 63°<br>(b) Find the supplement of: (i) 105° &nbsp;&nbsp; (ii) 82°<br>(c) An angle is equal to its supplement. Find the measure of this angle.', 3,
    `<div class="step">
      <strong>(a) Complementary Angles (Sum = 90°):</strong><br>
      (i) Complement of 28° = $90^\\circ - 28^\\circ = \\mathbf{62^\\circ}$.<br>
      (ii) Complement of 63° = $90^\\circ - 63^\\circ = \\mathbf{27^\\circ}$.
    </div>
    <div class="step">
      <strong>(b) Supplementary Angles (Sum = 180°):</strong><br>
      (i) Supplement of 105° = $180^\\circ - 105^\\circ = \\mathbf{75^\\circ}$.<br>
      (ii) Supplement of 82° = $180^\\circ - 82^\\circ = \\mathbf{98^\\circ}$.
    </div>
    <div class="step">
      <strong>(c) Angle equal to its supplement:</strong><br>
      Let the angle be $x$. $x + x = 180^\\circ \\implies 2x = 180^\\circ \\implies x = \\mathbf{90^\\circ}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): Both complementary calculations correct</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): Both supplementary calculations correct</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (c): Equation 2x = 180° and x = 90°</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch2-q7', 7,
    'You are standing facing North.<br>(a) If you turn clockwise to face East, what fraction of a revolution have you turned? What angle is this?<br>(b) If you turn anti-clockwise from North to South, what angle have you turned?<br>(c) If you face West and turn 270° clockwise, which direction do you face?', 3,
    `<div class="step">
      <strong>(a) North to East (Clockwise):</strong><br>
      Turn = 1 right turn = $90^\\circ$. Fraction = $\\frac{90}{360} = \\mathbf{\\frac{1}{4}}$ revolution.
    </div>
    <div class="step">
      <strong>(b) North to South (Anti-clockwise):</strong><br>
      North to South is a straight half turn = $\\mathbf{180^\\circ}$ (Straight angle = $\\frac{1}{2}$ revolution).
    </div>
    <div class="step">
      <strong>(c) West turning 270° clockwise:</strong><br>
      - West to North = 90°<br>
      - North to East = 90° (cumulative 180°)<br>
      - East to South = 90° (cumulative 270°)<br>
      Therefore, you will be facing <strong>South</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): 1/4 revolution and 90°</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): 180° straight angle</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (c): Step-by-step turn leading to South</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch2-q8', 8,
    'Two angles form a linear pair. If one angle is 36° more than the other angle, find the measure of both angles.', 2,
    `<div class="step">
      Let the smaller angle be $x$.<br>
      Then the larger angle is $(x + 36^\\circ)$.<br>
      Since they form a linear pair, their sum is $180^\\circ$:<br>
      $x + (x + 36^\\circ) = 180^\\circ$<br>
      $2x + 36^\\circ = 180^\\circ \\implies 2x = 180^\\circ - 36^\\circ = 144^\\circ$<br>
      $x = \\frac{144^\\circ}{2} = 72^\\circ$.<br>
      Larger angle = $72^\\circ + 36^\\circ = 108^\\circ$.<br>
      <strong>Answer:</strong> The two angles are <strong>72° and 108°</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Formulating equation: x + (x + 36°) = 180°</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Solving to get 72° and 108°</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch2-q9', 9,
    'Four rays meet at a common point O, forming four angles: ∠AOB = 110°, ∠BOC = 80°, ∠COD = 95°, and ∠DOA = x. Find the value of x. Give the geometrical property used.', 2,
    `<div class="step">
      <strong>Geometrical Property:</strong> The sum of all angles formed around a single point equals a complete angle ($360^\\circ$).<br>
      $\\angle AOB + \\angle BOC + \\angle COD + \\angle DOA = 360^\\circ$<br>
      $110^\\circ + 80^\\circ + 95^\\circ + x = 360^\\circ$<br>
      $285^\\circ + x = 360^\\circ \\implies x = 360^\\circ - 285^\\circ = \\mathbf{75^\\circ}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Stating property: Sum of angles around a point is 360°</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Computing x = 75° accurately</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch2-q10', 10,
    'Differentiate clearly between a line, a ray, and a line segment in terms of: (i) Number of endpoints, (ii) Definite length, (iii) Standard symbolic notation.', 3,
    `<div class="step">
      <table style="width:100%; border-collapse:collapse; margin-top:8px;">
        <tr style="background:#f1f5f9;">
          <th style="padding:6px; border:1px solid #cbd5e1;">Property</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Line Segment</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Ray</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Line</th>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;"><strong>Endpoints</strong></td>
          <td style="padding:6px; border:1px solid #cbd5e1;">2 fixed endpoints</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">1 initial endpoint</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">0 endpoints (extends infinitely)</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;"><strong>Definite Length</strong></td>
          <td style="padding:6px; border:1px solid #cbd5e1;">Yes, measurable</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">No, infinite length</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">No, infinite length</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1;"><strong>Symbolic Notation</strong></td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\overline{AB}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\vec{AB}$</td>
          <td style="padding:6px; border:1px solid #cbd5e1;">$\\overleftrightarrow{AB}$</td>
        </tr>
      </table>
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per correct comparison row</span><span class="marking-marks">3 Marks</span></div>`
  )}

  ${qCard('c6m-ch2-q11', 11,
    'Identify the types of angles formed by the hour hand and minute hand of a clock at the following exact times:<br>(a) 3:00 &nbsp;&nbsp; (b) 6:00 &nbsp;&nbsp; (c) 1:00 &nbsp;&nbsp; (d) 5:00', 2,
    `<div class="step">
      Each 1-hour interval on a clock represents $\\frac{360^\\circ}{12} = 30^\\circ$.<br>
      <strong>(a) At 3:00:</strong> Hands are 3 hours apart: $3 \\times 30^\\circ = 90^\\circ$ $\\implies$ <strong>Right Angle</strong>.<br>
      <strong>(b) At 6:00:</strong> Hands are 6 hours apart: $6 \\times 30^\\circ = 180^\\circ$ $\\implies$ <strong>Straight Angle</strong>.<br>
      <strong>(c) At 1:00:</strong> Hands are 1 hour apart: $1 \\times 30^\\circ = 30^\\circ$ $\\implies$ <strong>Acute Angle</strong>.<br>
      <strong>(d) At 5:00:</strong> Hands are 5 hours apart: $5 \\times 30^\\circ = 150^\\circ$ $\\implies$ <strong>Obtuse Angle</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct time classification with angle calculation</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch2-q12', 12,
    'Define the following geometric terms with an illustrative sketch:<br>(i) Collinear Points<br>(ii) Concurrent Lines', 2,
    `<div class="step">
      <strong>(i) Collinear Points:</strong> Three or more points that lie on the same straight line are called collinear points. If no single straight line can pass through all of them, they are non-collinear.<br>
      <strong>(ii) Concurrent Lines:</strong> Three or more lines that intersect at a single common point are called concurrent lines. The common point of intersection is called the <em>point of concurrence</em>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Definition of Collinear Points</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Definition of Concurrent Lines with point of concurrence</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Real-World Application)',
    `<strong>Case Study: Ship Navigation Compass &amp; Lighthouse Bearings:</strong><br>
    A mariner's magnetic compass has four cardinal directions (North, South, East, West) and four intercardinal directions (NE, SE, SW, NW).<br>
    (a) A ship sails facing North. What angle does the ship turn through if it turns clockwise to face South-East (SE)? What type of angle is this?<br>
    (b) If the ship is initially facing West and turns anti-clockwise through 270°, in which direction is it now facing?<br>
    (c) Two ships leave harbour along bearings of North-East and South-East. What is the angle between their routes?`,
    `<p><strong>(a) North to South-East (Clockwise):</strong><br>
    - North to East = 90°<br>
    - East to South-East = 45°<br>
    - Total angle = $90^\\circ + 45^\\circ = \\mathbf{135^\\circ}$.<br>
    Since $90^\\circ &lt; 135^\\circ &lt; 180^\\circ$, it is an <strong>Obtuse Angle</strong>.</p>
    <p><strong>(b) West turning anti-clockwise through 270°:</strong><br>
    - West to South = 90°<br>
    - South to East = 90° (cumulative 180°)<br>
    - East to North = 90° (cumulative 270°)<br>
    The ship is now facing <strong>North</strong>.</p>
    <p><strong>(c) Angle between NE and SE routes:</strong><br>
    NE is 45° north of East. SE is 45° south of East.<br>
    Angle = $45^\\circ + 45^\\circ = \\mathbf{90^\\circ}$ (A <strong>Right Angle</strong>).</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 3: Number Play
// ============================================================================
const ch3Html = `<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <h2>Chapter 3: Number Play</h2>
      <p>NCERT Ganita Prakash (Class 6) — Place Value Systems, Large Numbers, Estimation, Brackets, Roman Numerals &amp; Magic Squares | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Number Concepts &amp; Place Value Systems</div>
    <ul class="concept-list">
      <li><strong>Indian System of Numeration:</strong> Commas after Hundreds (3 digits), then after every 2 digits: Crores, Ten Lakhs, Lakhs, Ten Thousands, Thousands, Hundreds, Tens, Ones. (e.g., $7,34,56,819$).</li>
      <li><strong>International System of Numeration:</strong> Commas after every 3 digits from right: Billions, Millions (Hundred, Ten, One), Thousands (Hundred, Ten, One), Hundreds, Tens, Ones. (e.g., $73,456,819$).</li>
      <li><strong>Estimation (Rounding Off):</strong> To round off to nearest 10, look at ones digit (&lt; 5 round down, $\\ge$ 5 round up). To nearest 100, look at tens digit; to nearest 1000, look at hundreds digit.</li>
      <li><strong>Use of Brackets &amp; Order of Operations:</strong> Brackets indicate precedence. Rule: $\\text{Bar} \\to \\text{Round}() \\to \\text{Curly}\\{\\} \\to \\text{Square}[]$. Within brackets, follow DMAS (Division, Multiplication, Addition, Subtraction).</li>
      <li><strong>Roman Numerals:</strong> $I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000$. Symbol cannot be repeated more than 3 times; $V, L, D$ are never repeated or subtracted.</li>
      <li><strong>Magic Squares:</strong> A square grid where numbers in each row, column, and both diagonals sum to the exact same constant (Magic Constant). For a $3 \\times 3$ grid using numbers $1$ to $9$, Magic Sum $= 15$.</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 3.1: Large Numbers &amp; Numeration Systems</div>

  ${qCard('c6m-ch3-q1', 1,
    'Write the number 8,75,95,762 according to:<br>(i) Indian System of Numeration with commas and in words.<br>(ii) International System of Numeration with commas and in words.', 3,
    `<div class="step">
      <strong>(i) Indian System of Numeration:</strong><br>
      Placement of commas: <strong>8,75,95,762</strong><br>
      In words: <strong>Eight crore, seventy-five lakh, ninety-five thousand, seven hundred sixty-two</strong>.
    </div>
    <div class="step">
      <strong>(ii) International System of Numeration:</strong><br>
      Re-grouping in sets of 3 digits from right: <strong>87,595,762</strong><br>
      In words: <strong>Eighty-seven million, five hundred ninety-five thousand, seven hundred sixty-two</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Correct commas and words in Indian system</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Correct commas and words in International system</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch3-q2', 2,
    'Find the difference between the place value and the face value of the digit 7 in the number 5,78,49,236.', 2,
    `<div class="step">
      Given number: 5,78,49,236.<br>
      The digit 7 is at the <strong>Ten Lakhs</strong> position.<br>
      - Place Value of 7 = $7 \\times 10,00,000 = \\mathbf{70,00,000}$.<br>
      - Face Value of 7 = $\\mathbf{7}$.<br>
      Difference = $70,00,000 - 7 = \\mathbf{69,99,993}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Identifying place value (70,00,000) and face value (7)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Subtracting to get 69,99,993</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch3-q3', 3,
    'Use the digits 4, 0, 7, 1, 9, 5 to form:<br>(i) The greatest 6-digit number using each digit only once.<br>(ii) The smallest 6-digit number using each digit only once.<br>(iii) Find the difference between the greatest and smallest numbers formed.', 3,
    `<div class="step">
      <strong>(i) Greatest 6-digit number:</strong><br>
      Arrange digits in descending order: 9, 7, 5, 4, 1, 0 $\\implies \\mathbf{9,75,410}$.
    </div>
    <div class="step">
      <strong>(ii) Smallest 6-digit number:</strong><br>
      Since 0 cannot be the leading digit, start with the smallest non-zero digit 1, followed by 0, then remaining digits in ascending order: 1, 0, 4, 5, 7, 9 $\\implies \\mathbf{1,04,579}$.
    </div>
    <div class="step">
      <strong>(iii) Difference:</strong><br>
      $9,75,410 - 1,04,579 = \\mathbf{8,70,831}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Forming 9,75,410</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Forming 1,04,579 (noting 0 cannot lead)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Accurate difference 8,70,831</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 3.2: Estimation &amp; Rounding Off</div>

  ${qCard('c6m-ch3-q4', 4,
    'Round off the number 73,485 to the nearest:<br>(a) Tens<br>(b) Hundreds<br>(c) Thousands<br>(d) Ten thousands', 2,
    `<div class="step">
      <strong>(a) Nearest 10:</strong> Ones digit is 5 $\\implies$ round up $\\implies \\mathbf{73,490}$.<br>
      <strong>(b) Nearest 100:</strong> Tens digit is 8 (&gt; 5) $\\implies$ round up $\\implies \\mathbf{73,500}$.<br>
      <strong>(c) Nearest 1000:</strong> Hundreds digit is 4 (&lt; 5) $\\implies$ round down $\\implies \\mathbf{73,000}$.<br>
      <strong>(d) Nearest 10,000:</strong> Thousands digit is 3 (&lt; 5) $\\implies$ round down $\\implies \\mathbf{70,000}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct rounding with stated reason</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch3-q5', 5,
    'Estimate the following using the general rule:<br>(a) 730 + 998<br>(b) 7,961 - 428<br>(c) 578 × 161', 3,
    `<div class="step">
      <strong>General Rule:</strong> Round off each number to its greatest place value.<br>
      <strong>(a) 730 + 998:</strong><br>
      - 730 rounds off to nearest 100 $\\implies$ 700.<br>
      - 998 rounds off to nearest 100 $\\implies$ 1,000.<br>
      Estimated Sum = $700 + 1,000 = \\mathbf{1,700}$.
    </div>
    <div class="step">
      <strong>(b) 7,961 - 428:</strong><br>
      - 7,961 rounds to nearest 1,000 $\\implies$ 8,000.<br>
      - 428 rounds to nearest 100 $\\implies$ 400.<br>
      Estimated Difference = $8,000 - 400 = \\mathbf{7,600}$.
    </div>
    <div class="step">
      <strong>(c) 578 × 161:</strong><br>
      - 578 rounds to nearest 100 $\\implies$ 600.<br>
      - 161 rounds to nearest 100 $\\implies$ 200.<br>
      Estimated Product = $600 \\times 200 = \\mathbf{1,20,000}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): 1,700</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): 7,600</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (c): 1,20,000</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 3.3: Roman Numerals &amp; Brackets</div>

  ${qCard('c6m-ch3-q6', 6,
    'Write the following in Roman numerals:<br>(a) 69 &nbsp;&nbsp; (b) 98 &nbsp;&nbsp; (c) 144 &nbsp;&nbsp; (d) 490', 2,
    `<div class="step">
      <strong>(a) 69:</strong> $60 + 9 = (50 + 10) + (10 - 1) = \\text{LX} + \\text{IX} = \\mathbf{LXIX}$.<br>
      <strong>(b) 98:</strong> $90 + 8 = (100 - 10) + 8 = \\text{XC} + \\text{VIII} = \\mathbf{XCVIII}$.<br>
      <strong>(c) 144:</strong> $100 + 40 + 4 = \\text{C} + (50 - 10) + (5 - 1) = \\text{C} + \\text{XL} + \\text{IV} = \\mathbf{CXLIV}$.<br>
      <strong>(d) 490:</strong> $400 + 90 = (500 - 100) + (100 - 10) = \\text{CD} + \\text{XC} = \\mathbf{CDXC}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct Roman numeral with expansion</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch3-q7', 7,
    'Simplify the following expressions using brackets and order of operations:<br>(i) 15 + (12 - 3) × 4<br>(ii) 45 - [38 - {60 ÷ 3 - (6 - 9 ÷ 3)}]', 3,
    `<div class="step">
      <strong>(i) 15 + (12 - 3) × 4:</strong><br>
      Step 1 (Inside bracket): $12 - 3 = 9$.<br>
      Step 2 (Multiplication): $9 \\times 4 = 36$.<br>
      Step 3 (Addition): $15 + 36 = \\mathbf{51}$.
    </div>
    <div class="step">
      <strong>(ii) 45 - [38 - {60 ÷ 3 - (6 - 9 ÷ 3)}]:</strong><br>
      Innermost round bracket $(6 - 9 \\div 3)$: $9 \\div 3 = 3$, so $6 - 3 = 3$.<br>
      Next curly bracket: $\\{60 \\div 3 - 3\\} = \\{20 - 3\\} = 17$.<br>
      Next square bracket: $[38 - 17] = 21$.<br>
      Final subtraction: $45 - 21 = \\mathbf{24}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Step-by-step simplification to 51</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Nested bracket hierarchy correctly executed to 24</span><span class="marking-marks">2 Marks</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 3.4: Magic Squares &amp; Word Problems</div>

  ${qCard('c6m-ch3-q8', 8,
    'A 3 × 3 magic square contains numbers 1 to 9 without repetition. The sum of numbers in every row, column, and diagonal is 15.<br>(i) Explain why the central number must be 5.<br>(ii) Construct the complete 3 × 3 magic square.', 3,
    `<div class="step">
      <strong>(i) Proof that Central Number is 5:</strong><br>
      The sum of numbers 1 to 9 is: $\\frac{9 \\times 10}{2} = 45$.<br>
      Since there are 3 rows, Magic Sum = $\\frac{45}{3} = 15$.<br>
      The center cell belongs to 4 lines (row 2, col 2, and both diagonals). Adding these 4 lines:<br>
      $4 \\times 15 = 60$.<br>
      In this sum, all 9 cells are covered, plus the center cell is counted 3 extra times:<br>
      $45 + 3 \\times (\\text{Center}) = 60 \\implies 3 \\times (\\text{Center}) = 15 \\implies \\mathbf{\\text{Center} = 5}$.
    </div>
    <div class="step">
      <strong>(ii) Completed 3 × 3 Magic Square:</strong><br>
      <div style="font-family:monospace; font-size:1.1rem; background:#f8fafc; padding:10px; border:1px solid #cbd5e1; border-radius:6px; display:inline-block;">
        &nbsp;8 &nbsp;|&nbsp; 1 &nbsp;|&nbsp; 6<br>
        ---+---+---<br>
        &nbsp;3 &nbsp;|&nbsp; 5 &nbsp;|&nbsp; 7<br>
        ---+---+---<br>
        &nbsp;4 &nbsp;|&nbsp; 9 &nbsp;|&nbsp; 2
      </div><br>
      Row sums: $8+1+6=15$; $3+5+7=15$; $4+9+2=15$. Diagonals: $8+5+2=15$; $6+5+4=15$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Mathematical proof that Center = 5</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Correct 3 × 3 grid verification</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch3-q9', 9,
    'A medicine manufacturing company packs tablets in boxes. Each box contains 2,00,000 tablets, and each tablet weighs 20 mg. Find the total weight of all tablets in the box in:<br>(i) Milligrams &nbsp;&nbsp; (ii) Grams &nbsp;&nbsp; (iii) Kilograms', 3,
    `<div class="step">
      <strong>(i) Total weight in milligrams:</strong><br>
      Weight = $2,00,000 \\times 20\\text{ mg} = \\mathbf{40,00,000\\text{ mg}}$.
    </div>
    <div class="step">
      <strong>(ii) Total weight in grams:</strong><br>
      Since $1\\text{ g} = 1,000\\text{ mg}$:<br>
      Weight = $\\frac{40,00,000}{1,000} = \\mathbf{4,000\\text{ grams}}$.
    </div>
    <div class="step">
      <strong>(iii) Total weight in kilograms:</strong><br>
      Since $1\\text{ kg} = 1,000\\text{ g}$:<br>
      Weight = $\\frac{4,000}{1,000} = \\mathbf{4\\text{ kilograms}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): 40,00,000 mg</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): 4,000 g</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): 4 kg</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch3-q10', 10,
    'A merchant had ₹ 78,592 with her. She placed an order for purchasing 40 radio sets at ₹ 1,200 each. How much money will remain with her after the purchase?', 2,
    `<div class="step">
      Total money with merchant = ₹ 78,592.<br>
      Cost of 1 radio set = ₹ 1,200.<br>
      Cost of 40 radio sets = $40 \\times 1,200 = \\text{₹ } 48,000$.<br>
      Money remaining = ₹ 78,592 - ₹ 48,000 = <strong>₹ 30,592</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Calculating total expenditure ₹ 48,000</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Subtracting to get ₹ 30,592</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch3-q11', 11,
    'A vessel has 4 litres and 500 mL of curd. In how many glasses, each of 25 mL capacity, can it be filled?', 2,
    `<div class="step">
      Total capacity of vessel = 4 L 500 mL.<br>
      Convert to millilitres: $4 \\times 1,000\\text{ mL} + 500\\text{ mL} = 4,500\\text{ mL}$.<br>
      Capacity of each glass = 25 mL.<br>
      Number of glasses = $\\frac{4,500}{25} = \\mathbf{180\\text{ glasses}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Conversion: 4 L 500 mL = 4,500 mL</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Division yielding 180 glasses</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch3-q12', 12,
    'To stitch a shirt, 2 m 15 cm cloth is needed. Out of 40 m cloth, how many shirts can be stitched and how much cloth will remain?', 2,
    `<div class="step">
      Convert measurements into centimetres:<br>
      - Cloth for 1 shirt = $2\\text{ m } 15\\text{ cm} = 200 + 15 = 215\\text{ cm}$.<br>
      - Total available cloth = $40\\text{ m} = 40 \\times 100 = 4,000\\text{ cm}$.<br>
      Dividing 4,000 by 215:<br>
      $4,000 = 215 \\times 18 + 130$.<br>
      Quotient = 18; Remainder = 130 cm = 1 m 30 cm.<br>
      <strong>Answer:</strong> <strong>18 shirts</strong> can be stitched and <strong>1 m 30 cm</strong> cloth will remain.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Conversion to centimetres (215 cm and 4,000 cm)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Concluding 18 shirts and 1 m 30 cm cloth left</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Electoral Data Case Study)',
    `<strong>Case Study: Assembly Election Voter Turnout Analysis:</strong><br>
    In an assembly election, the winning candidate registered 5,77,500 votes and his nearest rival secured 3,48,700 votes. A third independent candidate secured 42,350 votes, while 7,450 votes were declared invalid.<br>
    (a) By what margin of votes did the successful candidate win the election?<br>
    (b) Find the total number of votes polled in the constituency.<br>
    (c) Express the total votes polled in the International System of Numeration.`,
    `<p><strong>(a) Victory Margin:</strong><br>
    Margin = Winning votes - Nearest rival votes<br>
    Margin = $5,77,500 - 3,48,700 = \\mathbf{2,28,800\\text{ votes}}$.</p>
    <p><strong>(b) Total Votes Polled:</strong><br>
    Total votes = $5,77,500 + 3,48,700 + 42,350 + 7,450 = \\mathbf{9,76,000\\text{ votes}}$.</p>
    <p><strong>(c) International System Notation:</strong><br>
    Grouping by sets of three digits: <strong>976,000</strong>.<br>
    In words: <strong>Nine hundred seventy-six thousand</strong>.</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 4: Data Handling and Presentation
// ============================================================================
const ch4Html = `<section class="chapter-section" id="ch4">
  <div class="chapter-header">
    <div class="ch-badge">4</div>
    <div class="chapter-header-info">
      <h2>Chapter 4: Data Handling and Presentation</h2>
      <p>NCERT Ganita Prakash (Class 6) — Tally Marks, Frequency Tables, Pictographs with Scales, Bar Graphs &amp; Statistical Interpretation | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Statistical Concepts &amp; Representations</div>
    <ul class="concept-list">
      <li><strong>Data:</strong> A collection of numbers gathered to give information. Raw data is unorganized data.</li>
      <li><strong>Tally Marks:</strong> Marks used for counting in groups of five: $\\text{I, II, III, IIII, } \\cancel{\\text{IIII}}$ (fifth mark crosses the four vertical strokes).</li>
      <li><strong>Pictograph:</strong> Represents data through pictures or symbols of objects. A scale or key must indicate what each symbol represents (e.g., $\\bigstar = 10\\text{ books}$).</li>
      <li><strong>Bar Graph:</strong> A visual representation of numbers using bars of uniform width drawn horizontally or vertically with equal spacing between them. The length of each bar represents the given quantity according to a chosen scale on the axis.</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 4.1: Tally Marks &amp; Frequency Distribution</div>

  ${qCard('c6m-ch4-q1', 1,
    'In a class of 30 students, the shoe sizes recorded are:<br>5, 4, 6, 5, 7, 6, 5, 4, 5, 6, 7, 5, 4, 6, 5, 5, 6, 7, 4, 5, 6, 5, 4, 6, 7, 5, 6, 5, 4, 5.<br>(i) Organize the data in a frequency table using tally marks.<br>(ii) Which shoe size is worn by the maximum number of students?<br>(iii) Which shoe size is worn by the minimum number of students?', 3,
    `<div class="step">
      <strong>(i) Frequency Distribution Table:</strong><br>
      <table style="width:100%; border-collapse:collapse; margin-top:8px;">
        <tr style="background:#f1f5f9;">
          <th style="padding:6px; border:1px solid #cbd5e1;">Shoe Size</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Tally Marks</th>
          <th style="padding:6px; border:1px solid #cbd5e1;">Number of Students (Frequency)</th>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">4</td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">卌</td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">6</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">5</td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">卌 卌 II</td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">12</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">6</td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">卌 III</td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">8</td>
        </tr>
        <tr>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">7</td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">IIII</td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">4</td>
        </tr>
        <tr style="font-weight:700; background:#f8fafc;">
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">Total</td>
          <td style="padding:6px; border:1px solid #cbd5e1;"></td>
          <td style="padding:6px; border:1px solid #cbd5e1; text-align:center;">30</td>
        </tr>
      </table>
    </div>
    <div class="step">
      <strong>(ii) Maximum shoe size:</strong> Size <strong>5</strong> (worn by 12 students).<br>
      <strong>(iii) Minimum shoe size:</strong> Size <strong>7</strong> (worn by 4 students).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Accurate tally marks table summing to 30</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Size 5 (Maximum)</span><span class="marking-marks">0.75 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Size 7 (Minimum)</span><span class="marking-marks">0.75 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 4.2: Pictograph Interpretation &amp; Construction</div>

  ${qCard('c6m-ch4-q2', 2,
    'The following pictograph shows the number of tractors in 5 villages:<br>Village A: 🚜 🚜 🚜 🚜 🚜 🚜<br>Village B: 🚜 🚜 🚜 🚜 🚜<br>Village C: 🚜 🚜 🚜 🚜 🚜 🚜 🚜 🚜<br>Village D: 🚜 🚜 🚜<br>Village E: 🚜 🚜 🚜 🚜 🚜 🚜<br>(Scale: 1 🚜 symbol = 1 tractor)<br>(i) Which village has the minimum number of tractors?<br>(ii) Which village has the maximum number of tractors?<br>(iii) How many more tractors does Village C have than Village B?<br>(iv) What is the total number of tractors in all 5 villages?', 3,
    `<div class="step">
      <strong>Data from Pictograph:</strong><br>
      - Village A = 6 tractors<br>
      - Village B = 5 tractors<br>
      - Village C = 8 tractors<br>
      - Village D = 3 tractors<br>
      - Village E = 6 tractors<br>
      <strong>(i) Minimum tractors:</strong> <strong>Village D</strong> (3 tractors).<br>
      <strong>(ii) Maximum tractors:</strong> <strong>Village C</strong> (8 tractors).<br>
      <strong>(iii) Difference (C vs B):</strong> $8 - 5 = \\mathbf{3\\text{ more tractors}}$.<br>
      <strong>(iv) Total tractors:</strong> $6 + 5 + 8 + 3 + 6 = \\mathbf{28\\text{ tractors}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each sub-part correct</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>`
  )}

  ${qCard('c6m-ch4-q3', 3,
    'The total number of animals in five villages are as follows:<br>Village A: 80, Village B: 120, Village C: 90, Village D: 40, Village E: 60.<br>(i) Prepare a pictograph of these animals using one symbol ⨂ to represent 10 animals.<br>(ii) Which village has the maximum number of animals?<br>(iii) Which village has more animals: Village A or Village C?', 3,
    `<div class="step">
      <strong>Scale:</strong> 1 symbol ⨂ = 10 animals.<br>
      - Village A (80 animals): $\\frac{80}{10} = 8$ symbols: ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂<br>
      - Village B (120 animals): $\\frac{120}{10} = 12$ symbols: ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂<br>
      - Village C (90 animals): $\\frac{90}{10} = 9$ symbols: ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂ ⨂<br>
      - Village D (40 animals): $\\frac{40}{10} = 4$ symbols: ⨂ ⨂ ⨂ ⨂<br>
      - Village E (60 animals): $\\frac{60}{10} = 6$ symbols: ⨂ ⨂ ⨂ ⨂ ⨂ ⨂
    </div>
    <div class="step">
      <strong>(ii) Maximum animals:</strong> <strong>Village B</strong> (120 animals).<br>
      <strong>(iii) Comparison:</strong> Village C has 90 animals, Village A has 80 animals. Therefore, <strong>Village C</strong> has more animals.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Pictograph with chosen scale symbol</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Village B</span><span class="marking-marks">0.75 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Village C</span><span class="marking-marks">0.75 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 4.3: Bar Graph Interpretation &amp; Drawing</div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 580px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Bar Graph: Marks Obtained by a Student in Different Subjects</text>
      <!-- Axes -->
      <line x1="60" y1="35" x2="60" y2="180" stroke="#334155" stroke-width="2"/>
      <line x1="60" y1="180" x2="500" y2="180" stroke="#334155" stroke-width="2"/>
      <!-- Y-Axis scale marks -->
      <text x="50" y="185" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="end">0</text>
      <text x="50" y="150" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="end">20</text>
      <text x="50" y="115" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="end">40</text>
      <text x="50" y="80" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="end">60</text>
      <text x="50" y="45" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="end">80</text>
      <!-- Bars -->
      <!-- Hindi: 45 -->
      <rect x="90" y="101" width="45" height="79" fill="#3b82f6" rx="3"/>
      <text x="112" y="95" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">45</text>
      <text x="112" y="198" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">Hindi</text>
      <!-- English: 60 -->
      <rect x="175" y="75" width="45" height="105" fill="#10b981" rx="3"/>
      <text x="197" y="69" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">60</text>
      <text x="197" y="198" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">English</text>
      <!-- Maths: 75 -->
      <rect x="260" y="49" width="45" height="131" fill="#f59e0b" rx="3"/>
      <text x="282" y="43" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">75</text>
      <text x="282" y="198" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">Maths</text>
      <!-- Science: 65 -->
      <rect x="345" y="66" width="45" height="114" fill="#8b5cf6" rx="3"/>
      <text x="367" y="60" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">65</text>
      <text x="367" y="198" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">Science</text>
      <!-- S.St: 50 -->
      <rect x="430" y="93" width="45" height="87" fill="#ef4444" rx="3"/>
      <text x="452" y="87" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">50</text>
      <text x="452" y="198" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#1e293b" text-anchor="middle">S.St</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 4.1: Bar Graph Representation of Student Examination Marks</div>
  </div>

  ${qCard('c6m-ch4-q4', 4,
    'Observe the bar graph given in Figure 4.1 and answer the following questions:<br>(a) What information does the bar graph give?<br>(b) In which subject has the student scored maximum marks?<br>(c) In which subject has the student scored minimum marks?<br>(d) State the marks obtained in Science and Social Studies.', 3,
    `<div class="step">
      <strong>(a) Information given:</strong> The bar graph represents the marks obtained by a student in 5 different school subjects in an examination.<br>
      <strong>(b) Maximum marks:</strong> <strong>Mathematics</strong> (75 marks).<br>
      <strong>(c) Minimum marks:</strong> <strong>Hindi</strong> (45 marks).<br>
      <strong>(d) Marks:</strong> In Science = <strong>65 marks</strong>; in Social Studies = <strong>50 marks</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each sub-part answered accurately</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>`
  )}

  ${qCard('c6m-ch4-q5', 5,
    'The number of mathematics books sold by a shopkeeper on six consecutive days is shown below:<br>Sunday: 65, Monday: 40, Tuesday: 30, Wednesday: 50, Thursday: 20, Friday: 70.<br>(i) Draw a vertical bar graph to represent this data with a scale of 1 unit length = 10 books.<br>(ii) On which day were the maximum number of books sold?<br>(iii) What was the total number of books sold during these 6 days?', 3,
    `<div class="step">
      <strong>(i) Bar Graph Specifications:</strong><br>
      - Horizontal Axis (X-axis): Days of the week.<br>
      - Vertical Axis (Y-axis): Number of books sold.<br>
      - Scale: 1 unit length = 10 books.<br>
      - Bar heights: Sunday = 6.5 units; Monday = 4 units; Tuesday = 3 units; Wednesday = 5 units; Thursday = 2 units; Friday = 7 units.
    </div>
    <div class="step">
      <strong>(ii) Day of maximum sales:</strong> <strong>Friday</strong> (70 books).<br>
      <strong>(iii) Total books sold:</strong> $65 + 40 + 30 + 50 + 20 + 70 = \\mathbf{275\\text{ books}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Scale selection and accurate bar heights</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): Friday</span><span class="marking-marks">0.75 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Total 275 books</span><span class="marking-marks">0.75 Mark</span></div>`
  )}

  ${qCard('c6m-ch4-q6', 6,
    'Explain the essential differences between a pictograph and a bar graph. What are the advantages of using a bar graph over a pictograph for large quantities?', 2,
    `<div class="step">
      <strong>Differences &amp; Advantages:</strong><br>
      1. <strong>Representation:</strong> A pictograph uses visual symbols or drawings, whereas a bar graph uses rectangular bars of uniform width and varying heights.<br>
      2. <strong>Precision for Large Quantities:</strong> In pictographs, fractional or intermediate values (e.g. 73 when 1 symbol = 10) require difficult partial drawings. In bar graphs, any precise value can be accurately marked on a calibrated continuous axis.<br>
      3. <strong>Speed of Construction:</strong> Drawing numerous detailed icons is time-consuming; bars can be drawn swiftly using a ruler.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Precise structural distinction</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Stating advantages of scale precision and speed</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch4-q7', 7,
    'The scores of 7 students in a science quiz out of 25 are: 18, 22, 14, 25, 19, 22, 20.<br>(a) Find the highest and lowest scores.<br>(b) Calculate the range of the scores.<br>(c) Find the average (mean) score of the group.', 3,
    `<div class="step">
      <strong>(a) Highest and Lowest:</strong><br>
      - Highest score = <strong>25</strong><br>
      - Lowest score = <strong>14</strong>
    </div>
    <div class="step">
      <strong>(b) Range:</strong><br>
      $\\text{Range} = \\text{Highest Score} - \\text{Lowest Score} = 25 - 14 = \\mathbf{11}$.
    </div>
    <div class="step">
      <strong>(c) Mean Score:</strong><br>
      $\\text{Mean} = \\frac{\\text{Sum of scores}}{\\text{Number of students}} = \\frac{18 + 22 + 14 + 25 + 19 + 22 + 20}{7} = \\frac{140}{7} = \\mathbf{20}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): Highest (25) and Lowest (14)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): Range = 11</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (c): Mean = 20 with formula</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch4-q8', 8,
    'What is meant by "scale" on a bar graph? Why is choosing an appropriate scale critical when representing large statistical datasets?', 2,
    `<div class="step">
      <strong>Definition of Scale:</strong><br>
      The scale of a bar graph is the ratio that compares the unit length on the axis to the actual quantity represented (e.g., 1 cm = 100 people).<br>
      <strong>Importance:</strong><br>
      If the scale chosen is too small (e.g. 1 unit = 1 person for 50,000 people), the graph will not fit on paper. If the scale is too large (e.g. 1 unit = 20,000 for values differing by 50), the bars will look identical and differences cannot be distinguished.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Definition of scale</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Importance for legibility and graphical proportion</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch4-q9', 9,
    'A researcher records modes of transport used by 250 school students:<br>School Bus: 100, Walking: 60, Bicycle: 50, Car: 25, Public Bus: 15.<br>(i) What fraction of students travel by School Bus?<br>(ii) What percentage of students walk to school?<br>(iii) Which mode of transport is used least?', 2,
    `<div class="step">
      Total students = 250.<br>
      <strong>(i) School Bus fraction:</strong> $\\frac{100}{250} = \\mathbf{\\frac{2}{5}}$ (or 40%).<br>
      <strong>(ii) Walking percentage:</strong> $\\frac{60}{250} \\times 100 = \\frac{600}{25} = \\mathbf{24\\%}$.<br>
      <strong>(iii) Least used mode:</strong> <strong>Public Bus</strong> (used by only 15 students).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (i): Fraction 2/5</span><span class="marking-marks">0.75 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (ii): 24%</span><span class="marking-marks">0.75 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (iii): Public Bus</span><span class="marking-marks">0.5 Mark</span></div>`
  )}

  ${qCard('c6m-ch4-q10', 10,
    'State whether each of the following statements is True or False. Justify your answer:<br>(a) In a bar graph, the widths of the bars can vary according to preference.<br>(b) The spaces between adjacent bars must always be uniform.<br>(c) A pictograph can only be drawn horizontally.', 2,
    `<div class="step">
      <strong>(a) False:</strong> The widths of all bars must be strictly uniform. Width carries no numerical meaning, only the bar length or height represents data.<br>
      <strong>(b) True:</strong> Equal spacing between bars is mandatory to maintain visual clarity and fair comparison.<br>
      <strong>(c) False:</strong> Pictographs can be drawn either horizontally (rows) or vertically (columns).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each statement correctly evaluated with justification</span><span class="marking-marks">0.7 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch4-q11', 11,
    'Distinguish between qualitative data and quantitative data with two practical examples of each from school records.', 2,
    `<div class="step">
      <strong>Qualitative Data:</strong> Descriptive data that characterizes attributes or qualities without numerical measurement.<br>
      <em>Examples:</em> Blood group (A, B, AB, O), Grade awarded in art (A, B, C).<br>
      <strong>Quantitative Data:</strong> Numerical data that can be counted or measured directly on a scale.<br>
      <em>Examples:</em> Height of students in cm (142 cm, 150 cm), Marks obtained in mathematics (85/100).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Definition and examples of qualitative data</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Definition and examples of quantitative data</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (School Survey Case Study)',
    `<strong>Case Study: School Canteen Healthy Fruit Preference Survey:</strong><br>
    The school wellness committee surveyed 400 middle-school students regarding their preferred fruit choice for the subsidized canteen menu. The recorded preferences were:<br>
    - Apple: 120 students<br>
    - Banana: 100 students<br>
    - Orange: 80 students<br>
    - Guava: 60 students<br>
    - Papaya: 40 students<br>
    (a) If you choose a scale of 1 unit length = 20 students, what will be the heights of the bars for Apple and Orange?<br>
    (b) What percentage of the surveyed students selected either Apple or Banana?<br>
    (c) Formulate a recommendation for the canteen manager based on this data.`,
    `<p><strong>(a) Bar Heights (Scale: 1 unit = 20 students):</strong><br>
    - Height for Apple = $\\frac{120}{20} = \\mathbf{6\\text{ units}}$.<br>
    - Height for Orange = $\\frac{80}{20} = \\mathbf{4\\text{ units}}$.</p>
    <p><strong>(b) Percentage for Apple or Banana:</strong><br>
    Total choosing Apple or Banana = $120 + 100 = 220$ students.<br>
    Percentage = $\\frac{220}{400} \\times 100 = \\mathbf{55\\%}$.<br>
    More than half of the student population prefers Apple or Banana.</p>
    <p><strong>(c) Canteen Recommendation:</strong><br>
    The canteen manager should allocate at least 55% of the fruit procurement budget to Apples and Bananas to avoid food wastage, while stocking moderate quantities of Guava and Papaya.</p>`
  )}
</section>`;

// Write Chapters 1 to 4 to chapters-c6m
fs.writeFileSync(path.join(dir, 'ch1.html'), ch1Html, 'utf8');
console.log('Generated chapters-c6m/ch1.html with 11 exercise Qs + 1 CBQ (12 Total)');

fs.writeFileSync(path.join(dir, 'ch2.html'), ch2Html, 'utf8');
console.log('Generated chapters-c6m/ch2.html with 12 exercise Qs + 1 CBQ (13 Total)');

fs.writeFileSync(path.join(dir, 'ch3.html'), ch3Html, 'utf8');
console.log('Generated chapters-c6m/ch3.html with 12 exercise Qs + 1 CBQ (13 Total)');

fs.writeFileSync(path.join(dir, 'ch4.html'), ch4Html, 'utf8');
console.log('Generated chapters-c6m/ch4.html with 11 exercise Qs + 1 CBQ (12 Total)');

console.log('Chapters 1 to 4 expansion successfully completed!');
