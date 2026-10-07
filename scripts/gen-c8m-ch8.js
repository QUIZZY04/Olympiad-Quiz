const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch8Html = `<section class="chapter-section" id="ch8">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <h2>Chapter 8: Fractions in Disguise</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 2) — Rational Numbers, Terminating &amp; Recurring Decimals, Converting Decimals to p/q Form &amp; Number Line Density | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Decimal Representations &amp; Rational Number Properties</div>
    <ul class="concept-list">
      <li><strong>Rational Numbers:</strong> Any number that can be expressed as <code>p/q</code> where <em>p</em> and <em>q</em> are integers and <code>q ≠ 0</code>.
        <ul>
          <li><strong>Terminating Decimals:</strong> The decimal terminates after a finite number of digits. A simplified fraction <code>p/q</code> terminates if and only if the prime factorization of <em>q</em> contains only powers of <strong>2 and/or 5</strong> (i.e., <code>q = 2ⁿ × 5ᵐ</code>).</li>
          <li><strong>Non-Terminating Repeating (Recurring) Decimals:</strong> The division continues infinitely with a repeating block of digits (the <em>period</em>). Every repeating decimal represents a rational number.</li>
        </ul>
      </li>
      <li><strong>Algorithm for Converting Recurring Decimals into p/q Form:</strong>
        <ol>
          <li>Let <code>x</code> be the given repeating decimal (e.g., <code>x = 0.3̄</code>).</li>
          <li>Multiply <em>x</em> by a power of 10 equal to the number of non-repeating decimal places to shift the repeating block right after the decimal point.</li>
          <li>Multiply by 10ᵖ (where <em>p</em> is the period length) to align identical repeating decimal tails.</li>
          <li>Subtract the equations so that the recurring fractional parts cancel out completely.</li>
          <li>Solve for <em>x</em> and reduce the fraction to lowest terms.</li>
        </ol>
      </li>
      <li><strong>Density Property of Rational Numbers:</strong> Between any two distinct rational numbers, there are <strong>infinitely many rational numbers</strong>. They can be found using the Mean Method <code>(a + b) / 2</code> or by equating denominators.</li>
    </ul>
  </div>

  <!-- SVG Diagram 8: Decimal Structure & Number Line Classification -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 170" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Taxonomy of Real Number Decimal Expansions</text>
      
      <!-- Box Top: Real Decimals -->
      <rect x="200" y="35" width="140" height="30" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
      <text x="270" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Decimal Numbers</text>

      <!-- Branches -->
      <line x1="240" y1="65" x2="130" y2="85" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="300" y1="65" x2="410" y2="85" stroke="#94a3b8" stroke-width="1.5"/>

      <!-- Level 2 Left: Terminating -->
      <rect x="50" y="85" width="160" height="55" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="130" y="106" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">Terminating</text>
      <text x="130" y="125" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#2563eb" text-anchor="middle">q = 2ⁿ × 5ᵐ (e.g. 0.75 = 3/4)</text>

      <!-- Level 2 Right: Non-Terminating -->
      <rect x="330" y="85" width="160" height="55" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="410" y="106" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#92400e" text-anchor="middle">Non-Terminating</text>
      <text x="410" y="125" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#b45309" text-anchor="middle">Repeating: 0.3̄ = 1/3 (Rational)</text>

      <!-- Footnote -->
      <text x="270" y="160" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">Both terminating and non-terminating repeating decimals are Fractions in Disguise (p/q ∈ ℚ)</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 8.1: Structural Criteria Governing Rational Decimal Behavior</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch8-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Without actual division, determine whether each of the following rational numbers has a terminating or a non-terminating repeating decimal expansion:<br>(i) 13 / 80 &nbsp;&nbsp;&nbsp; (ii) 7 / 75 &nbsp;&nbsp;&nbsp; (iii) 17 / 125 &nbsp;&nbsp;&nbsp; (iv) 29 / 343 &nbsp;&nbsp;&nbsp; (v) 23 / (2³ × 5²)</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Criterion:</strong> For a fraction in simplest form <code>p/q</code>, if prime factorisation of <code>q = 2ⁿ × 5ᵐ</code>, it is <strong>terminating</strong>; otherwise it is <strong>non-terminating repeating</strong>.</p>
          <div class="step">
            • <strong>(i) 13 / 80:</strong><br>
            Denominator 80 = 2⁴ × 5¹. The prime factors are only 2 and 5.<br>
            Therefore, it has a <strong>terminating decimal expansion</strong> (13/80 = 0.1625).<br><br>

            • <strong>(ii) 7 / 75:</strong><br>
            Denominator 75 = 3 × 5². Since factor 3 is present (not of form 2ⁿ × 5ᵐ), it has a <strong>non-terminating repeating decimal expansion</strong>.<br><br>

            • <strong>(iii) 17 / 125:</strong><br>
            Denominator 125 = 5³ = 2⁰ × 5³. Prime factors contain only 5.<br>
            Therefore, it has a <strong>terminating decimal expansion</strong> (17/125 = 0.136).<br><br>

            • <strong>(iv) 29 / 343:</strong><br>
            Denominator 343 = 7³. Contains prime factor 7.<br>
            Therefore, it has a <strong>non-terminating repeating decimal expansion</strong>.<br><br>

            • <strong>(v) 23 / (2³ × 5²):</strong><br>
            Denominator is already factored as 2³ × 5².<br>
            Therefore, it has a <strong>terminating decimal expansion</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Criterion q = 2ⁿ × 5ᵐ stated</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Prime factorisation and correct classification for all 5</span><span class="marking-marks">2.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch8-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Express the recurring decimal 0.3333... (or 0.3̄) in the form p/q, where p and q are integers and q ≠ 0.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let <code>x = 0.3333...</code> &nbsp;&nbsp;&nbsp; ...(Equation 1)<br><br>
            2. Since one digit repeats (period = 1), multiply Equation 1 by 10:<br>
            <code>10x = 3.3333...</code> &nbsp;&nbsp;&nbsp; ...(Equation 2)<br><br>
            3. Subtracting Equation 1 from Equation 2:<br>
            10x − x = (3.3333...) − (0.3333...)<br>
            9x = 3<br><br>
            4. Solving for x:<br>
            x = 3 / 9 = <strong>1 / 3</strong>.<br><br>
            Therefore, <code>0.3̄ = 1/3</code>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Setting up 10x = 3.333... and x = 0.333...</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Subtracting to get 9x = 3 and final answer 1/3</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch8-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Express 0.47̄ (i.e. 0.47777...) in the form p/q, where p and q are integers and q ≠ 0.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let <code>x = 0.4777...</code> &nbsp;&nbsp;&nbsp; ...(Equation 1)<br><br>
            2. Multiply by 10 to shift non-repeating digit 4 before the decimal point:<br>
            <code>10x = 4.7777...</code> &nbsp;&nbsp;&nbsp; ...(Equation 2)<br><br>
            3. Since one digit repeats, multiply Equation 2 by 10:<br>
            <code>100x = 47.7777...</code> &nbsp;&nbsp;&nbsp; ...(Equation 3)<br><br>
            4. Subtracting Equation 2 from Equation 3:<br>
            100x − 10x = (47.7777...) − (4.7777...)<br>
            90x = 47 − 4 = 43<br><br>
            5. Solving for x:<br>
            x = <strong>43 / 90</strong>.<br><br>
            Thus, <code>0.47̄ = 43/90</code>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Forming 100x = 47.77... and 10x = 4.77...</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Subtracting to get 90x = 43 ⇒ x = 43/90</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch8-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Show that 1.272727... = 1.27̄ can be expressed in the form p/q, where p and q are integers and q ≠ 0.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let <code>x = 1.272727...</code> &nbsp;&nbsp;&nbsp; ...(Equation 1)<br><br>
            2. Two digits repeat (27), so multiply Equation 1 by 100:<br>
            <code>100x = 127.272727...</code> &nbsp;&nbsp;&nbsp; ...(Equation 2)<br><br>
            3. Subtracting Equation 1 from Equation 2:<br>
            100x − x = (127.2727...) − (1.2727...)<br>
            99x = 126<br><br>
            4. Solving for x and simplifying:<br>
            x = 126 / 99.<br>
            Dividing numerator and denominator by 9:<br>
            x = (126 ÷ 9) / (99 ÷ 9) = <strong>14 / 11</strong>.<br><br>
            Hence, <code>1.27̄ = 14/11</code>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Multiplying by 100 to get 99x = 126</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Simplifying 126/99 to 14/11</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch8-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Find five rational numbers between 2/3 and 4/5.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. First convert both fractions to have a common denominator:<br>
            LCM of denominators 3 and 5 is 15.<br>
            2/3 = (2 × 5) / (3 × 5) = 10/15.<br>
            4/5 = (4 × 3) / (5 × 3) = 12/15.<br><br>
            2. Between 10/15 and 12/15, there is only one integer numerator (11).<br>
            To insert 5 rational numbers, multiply numerator and denominator of both by (5 + 1) = 6 (or 4):<br>
            Multiply by 4:<br>
            10/15 = (10 × 4) / (15 × 4) = 40/60.<br>
            12/15 = (12 × 4) / (15 × 4) = 48/60.<br><br>
            3. The integers between 40 and 48 are 41, 42, 43, 44, 45, 46, 47.<br>
            Therefore, five rational numbers between 2/3 and 4/5 are:<br>
            <strong>41/60, 42/60, 43/60, 44/60, and 45/60</strong><br>
            (or in lowest terms: <code>41/60, 7/10, 43/60, 11/15, 3/4</code>).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Equating denominators to 15, then expanding to 60</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Listing 5 distinct valid rational numbers</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch8-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">What can the maximum number of digits be in the repeating block of digits in the decimal expansion of 1/17? Perform the division to check your answer.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Theorem:</strong> The maximum number of digits in the repeating block of <code>1/q</code> is always strictly less than the divisor, i.e., at most <code>(q − 1)</code> digits, because there are only (q − 1) possible non-zero remainders.</p>
          <div class="step">
            1. For 1/17, the divisor is 17. Hence, the maximum possible number of digits in the repeating block is <code>17 − 1 = 16 digits</code>.<br><br>
            2. Performing long division of 1 by 17:<br>
            1 ÷ 17 = <strong>0.0588235294117647...</strong><br>
            Remainders sequence: 10, 15, 14, 4, 6, 9, 5, 16, 7, 2, 3, 13, 11, 8, 12, 1 (remainder 1 repeats after 16 steps!).<br><br>
            Therefore, <code>1/17 = 0.0588235294117647...</code> with a repeating period of exactly <strong>16 digits</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating max repeating digits = q − 1 = 16</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Division verifying the exact 16-digit recurring sequence</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch8-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Find the sum: 0.3̄ + 0.4̄ + 0.5̄ by converting each term into fractional form p/q.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Convert each repeating decimal to p/q:<br>
            • Let x = 0.3̄ ⇒ 10x − x = 3 ⇒ 9x = 3 ⇒ x = <strong>3/9</strong>.<br>
            • Let y = 0.4̄ ⇒ 10y − y = 4 ⇒ 9y = 4 ⇒ y = <strong>4/9</strong>.<br>
            • Let z = 0.5̄ ⇒ 10z − z = 5 ⇒ 9z = 5 ⇒ z = <strong>5/9</strong>.<br><br>
            2. Adding the fractions together:<br>
            Sum = 3/9 + 4/9 + 5/9 = (3 + 4 + 5) / 9 = <strong>12 / 9</strong>.<br><br>
            3. Reducing to simplest form:<br>
            12/9 = <strong>4 / 3</strong> (or 1.3̄).<br><br>
            Hence, the sum is <strong>4/3</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Converting to 3/9, 4/9, 5/9</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Summing and simplifying to 4/3</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch8-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Represent the rational numbers −2/5 and 7/4 on the number line.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) Representing −2/5:</strong><br>
            - Note that <code>−1 &lt; −2/5 &lt; 0</code>.<br>
            - Divide the unit segment between 0 and −1 into <strong>5 equal parts</strong>.<br>
            - Moving 2 parts to the left from 0 marks the point <strong>−2/5</strong>.<br><br>
            • <strong>(ii) Representing 7/4:</strong><br>
            - Write as a mixed fraction: <code>7/4 = 1 + 3/4</code>. It lies between 1 and 2.<br>
            - Divide the unit segment between 1 and 2 into <strong>4 equal parts</strong>.<br>
            - The 3rd division mark to the right of 1 represents <strong>1 3/4 = 7/4</strong> (or the 7th mark from 0 when every unit interval is partitioned into 4 quarters).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Interval identification: (−1 to 0) and (1 to 2)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Accurate partitioning and placement on number line</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch8-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Express 0.235̄ (i.e. 0.2353535...) in the form p/q, where p and q are integers and q ≠ 0.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let <code>x = 0.2353535...</code> &nbsp;&nbsp;&nbsp; ...(Equation 1)<br><br>
            2. Multiply by 10 to shift non-repeating digit 2 before decimal point:<br>
            <code>10x = 2.353535...</code> &nbsp;&nbsp;&nbsp; ...(Equation 2)<br><br>
            3. Two digits repeat (35), so multiply Equation 2 by 100:<br>
            <code>1000x = 235.353535...</code> &nbsp;&nbsp;&nbsp; ...(Equation 3)<br><br>
            4. Subtracting Equation 2 from Equation 3:<br>
            1000x − 10x = (235.3535...) − (2.3535...)<br>
            990x = 235 − 2 = 233<br><br>
            5. Solving for x:<br>
            x = <strong>233 / 990</strong>.<br><br>
            Hence, <code>0.235̄ = 233/990</code>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Setting 1000x = 235.35... and 10x = 2.35...</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">990x = 233 ⇒ x = 233/990</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch8-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch8-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Find a rational number lying between 1/4 and 1/3 using the Mean Method. Verify that it lies strictly between the two numbers.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. <strong>Mean Method Formula:</strong> If <em>a</em> and <em>b</em> are two rational numbers with a &lt; b, then <code>(a + b) / 2</code> is a rational number strictly between <em>a</em> and <em>b</em>.<br><br>
            2. Here a = 1/4, b = 1/3.<br>
            Sum = 1/4 + 1/3 = (3 + 4) / 12 = 7/12.<br>
            Mean = (7/12) ÷ 2 = <strong>7 / 24</strong>.<br><br>
            3. <strong>Verification:</strong><br>
            Convert all to common denominator 24:<br>
            1/4 = 6/24.<br>
            7/24 = 7/24.<br>
            1/3 = 8/24.<br>
            Clearly, <code>6/24 &lt; 7/24 &lt; 8/24</code>, which proves <code>1/4 &lt; 7/24 &lt; 1/3</code>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Applying Mean formula: (1/4 + 1/3)/2 = 7/24</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Verification: 6/24 &lt; 7/24 &lt; 8/24</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Competency-Based Case Study (CBQ) -->
  <div class="case-study-box" style="margin-top: 30px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 22px;">
    <div class="case-study-title" style="font-size: 1.15rem; font-weight: 800; color: #1e293b; margin-bottom: 10px;">
      🎯 Competency-Based Case Study Question (CBSE 2026-27 Pattern)
    </div>
    <div class="case-study-desc" style="font-size: 0.95rem; color: #475569; line-height: 1.6;">
      <strong>Context — Precision Aerospace Engineering Tolerances:</strong> A CNC machine fabricates titanium fuel pins whose specified diameter is <code>5/16</code> inches. Quality control measures readings using optical micrometers that output decimal measurements.<br>
      Two sample test pins report diameters of <code>0.3125</code> inches and <code>0.3181818... = 0.318̄</code> inches respectively.<br><br>
      (a) Convert the design specification 5/16 inches into its decimal equivalent without long division, and explain why it terminates.<br>
      (b) Convert the measurement of the second pin <code>0.318̄</code> into simplest fraction form <code>p/q</code>.<br>
      (c) Which pin is larger, and by what exact fraction of an inch?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Decimal of 5/16:</strong><br>
        16 = 2⁴. To convert to base 10 power without division, multiply numerator and denominator by 5⁴ = 625:<br>
        5/16 = (5 × 625) / (16 × 625) = 3125 / 10000 = <strong>0.3125 inches</strong>.<br>
        It terminates because denominator 16 contains exclusively powers of 2 (2⁴ × 5⁰).</p>

        <p><strong>(b) Converting 0.318̄ to p/q form:</strong><br>
        Let x = 0.3181818...<br>
        10x = 3.181818... &nbsp;&nbsp;&nbsp; ...(i)<br>
        1000x = 318.181818... &nbsp;&nbsp;&nbsp; ...(ii)<br>
        Subtracting (i) from (ii):<br>
        990x = 318 − 3 = 315.<br>
        x = 315 / 990 = 35 / 110 = <strong>7 / 22 inches</strong>.</p>

        <p><strong>(c) Comparison and exact fractional difference:</strong><br>
        - Pin 1 = 0.3125 = 5/16 inches.<br>
        - Pin 2 = 7/22 ≈ 0.31818... inches.<br>
        Clearly, Pin 2 is larger.<br>
        Difference = 7/22 − 5/16 = (7 × 8 − 5 × 11) / 176 = (56 − 55) / 176 = <strong>1 / 176 inches</strong>.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch8.html'), ch8Html, 'utf8');
console.log('Chapter 8 successfully written with 10 questions + CBQ.');
