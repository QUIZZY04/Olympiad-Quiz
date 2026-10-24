// scripts/expand-c6m-ch5-ch8.js
// Generates Chapters 5 to 8 of Class 6 Ganita Prakash with 100% NCERT exercise coverage
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
// CHAPTER 5: Prime Time
// ============================================================================
const ch5Html = `<section class="chapter-section" id="ch5">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <h2>Chapter 5: Prime Time</h2>
      <p>NCERT Ganita Prakash (Class 6) — Factors, Multiples, Prime &amp; Composite Numbers, Divisibility Rules, Prime Factor Tree, HCF &amp; LCM | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Number Theory &amp; Divisibility Rules</div>
    <ul class="concept-list">
      <li><strong>Factors &amp; Multiples:</strong> A factor of a number divides it exactly without a remainder. A multiple is obtained by multiplying the number by integers.</li>
      <li><strong>Prime &amp; Composite:</strong> A prime number has exactly two distinct factors: 1 and itself (e.g., $2, 3, 5, 7, 11$). 2 is the only even prime. 1 is neither prime nor composite.</li>
      <li><strong>Co-prime Numbers:</strong> Two numbers having only 1 as a common factor are called co-primes (e.g., 4 and 9).</li>
      <li><strong>Divisibility Tests:</strong>
        <ul>
          <li><em>By 2, 5, 10:</em> Last digit is even (for 2); 0 or 5 (for 5); 0 (for 10).</li>
          <li><em>By 3 &amp; 9:</em> Sum of digits is divisible by 3 (or 9).</li>
          <li><em>By 4 &amp; 8:</em> Last 2 digits divisible by 4; last 3 digits divisible by 8.</li>
          <li><em>By 6:</em> Divisible by both 2 and 3.</li>
          <li><em>By 11:</em> Difference between the sum of digits at odd places and sum of digits at even places is 0 or divisible by 11.</li>
        </ul>
      </li>
      <li><strong>HCF &amp; LCM:</strong> Highest Common Factor (HCF) is the greatest common divisor. Lowest Common Multiple (LCM) is the smallest common positive multiple. For two numbers $a$ and $b$: $\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$.</li>
    </ul>
  </div>

  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 500px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 440 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="220" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">Prime Factor Tree for 72 = 2³ × 3²</text>
      <!-- Root 72 -->
      <rect x="195" y="35" width="50" height="28" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="6"/>
      <text x="220" y="54" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0369a1" text-anchor="middle">72</text>
      <!-- Branch to 8 and 9 -->
      <line x1="205" y1="63" x2="130" y2="85" stroke="#64748b" stroke-width="1.8"/>
      <line x1="235" y1="63" x2="310" y2="85" stroke="#64748b" stroke-width="1.8"/>
      <rect x="105" y="85" width="50" height="26" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" rx="5"/>
      <text x="130" y="103" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">8</text>
      <rect x="285" y="85" width="50" height="26" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" rx="5"/>
      <text x="310" y="103" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">9</text>
      <!-- Sub-branches -->
      <line x1="120" y1="111" x2="70" y2="135" stroke="#64748b" stroke-width="1.8"/>
      <line x1="140" y1="111" x2="155" y2="135" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="70" cy="147" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="70" y="152" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">2</text>
      <rect x="135" y="135" width="40" height="24" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" rx="4"/>
      <text x="155" y="151" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">4</text>
      <!-- 4 to 2 and 2 -->
      <line x1="145" y1="159" x2="125" y2="175" stroke="#64748b" stroke-width="1.8"/>
      <line x1="165" y1="159" x2="185" y2="175" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="125" cy="184" r="11" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="125" y="188" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">2</text>
      <circle cx="185" cy="184" r="11" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="185" y="188" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">2</text>
      <!-- 9 to 3 and 3 -->
      <line x1="300" y1="111" x2="275" y2="135" stroke="#64748b" stroke-width="1.8"/>
      <line x1="320" y1="111" x2="345" y2="135" stroke="#64748b" stroke-width="1.8"/>
      <circle cx="275" cy="147" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="275" y="152" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">3</text>
      <circle cx="345" cy="147" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="345" y="152" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#15803d" text-anchor="middle">3</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 5.1: Prime Factor Tree Decomposition for 72</div>
  </div>

  <div class="ex-div">NCERT Exercise 5.1: Factors, Multiples &amp; Divisibility Tests</div>

  ${qCard('c6m-ch5-q1', 1,
    'Write all the factors of the following numbers:<br>(a) 24 &nbsp;&nbsp; (b) 36 &nbsp;&nbsp; (c) 48', 3,
    `<div class="step">
      <strong>(a) Factors of 24:</strong><br>
      $1 \\times 24 = 24$, $2 \\times 12 = 24$, $3 \\times 8 = 24$, $4 \\times 6 = 24$.<br>
      Factors of 24 are <strong>1, 2, 3, 4, 6, 8, 12, and 24</strong>.
    </div>
    <div class="step">
      <strong>(b) Factors of 36:</strong><br>
      $1 \\times 36 = 36$, $2 \\times 18 = 36$, $3 \\times 12 = 36$, $4 \\times 9 = 36$, $6 \\times 6 = 36$.<br>
      Factors of 36 are <strong>1, 2, 3, 4, 6, 9, 12, 18, and 36</strong>.
    </div>
    <div class="step">
      <strong>(c) Factors of 48:</strong><br>
      $1 \\times 48 = 48$, $2 \\times 24 = 48$, $3 \\times 16 = 48$, $4 \\times 12 = 48$, $6 \\times 8 = 48$.<br>
      Factors of 48 are <strong>1, 2, 3, 4, 6, 8, 12, 16, 24, and 48</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per part listing all factors completely</span><span class="marking-marks">3 Marks</span></div>`
  )}

  ${qCard('c6m-ch5-q2', 2,
    'Using divisibility tests, determine which of the following numbers are divisible by 6:<br>(a) 2,97,144<br>(b) 1,258<br>(c) 4,335', 3,
    `<div class="step">
      <strong>Divisibility Rule for 6:</strong> A number is divisible by 6 if it is divisible by both 2 and 3.<br>
      <strong>(a) 2,97,144:</strong><br>
      - Last digit is 4 (even) $\\implies$ Divisible by 2.<br>
      - Sum of digits = $2 + 9 + 7 + 1 + 4 + 4 = 27$. Since 27 is divisible by 3 $\\implies$ Divisible by 3.<br>
      Since it is divisible by both 2 and 3, <strong>2,97,144 is divisible by 6</strong>.
    </div>
    <div class="step">
      <strong>(b) 1,258:</strong><br>
      - Last digit is 8 (even) $\\implies$ Divisible by 2.<br>
      - Sum of digits = $1 + 2 + 5 + 8 = 16$. 16 is NOT divisible by 3.<br>
      Therefore, <strong>1,258 is NOT divisible by 6</strong>.
    </div>
    <div class="step">
      <strong>(c) 4,335:</strong><br>
      - Last digit is 5 (odd) $\\implies$ NOT divisible by 2.<br>
      Therefore, <strong>4,335 is NOT divisible by 6</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Part (a): Verified for 2 and 3 -> Divisible by 6</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (b): Fails test for 3 -> Not divisible</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Part (c): Fails test for 2 -> Not divisible</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch5-q3', 3,
    'Using divisibility tests, determine whether the number 71,38,965 is divisible by 11.', 2,
    `<div class="step">
      <strong>Divisibility Test for 11:</strong><br>
      Digits at odd places (from right): 5, 9, 3, 7.<br>
      Sum of odd-placed digits = $5 + 9 + 3 + 7 = 24$.<br>
      Digits at even places (from right): 6, 8, 1.<br>
      Sum of even-placed digits = $6 + 8 + 1 = 15$.<br>
      Difference = $24 - 15 = 9$.<br>
      Since 9 is neither 0 nor divisible by 11, the number <strong>71,38,965 is NOT divisible by 11</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Finding sum of odd places (24) and even places (15)</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Computing difference 9 and concluding not divisible</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 5.2: Prime Factorization &amp; HCF</div>

  ${qCard('c6m-ch5-q4', 4,
    'Find the prime factorization of 980 by drawing a factor tree or using the repeated division method.', 2,
    `<div class="step">
      Let us divide 980 by consecutive prime numbers:<br>
      $980 \\div 2 = 490$<br>
      $490 \\div 2 = 245$<br>
      $245 \\div 5 = 49$<br>
      $49 \\div 7 = 7$<br>
      $7 \\div 7 = 1$<br>
      Therefore, the prime factorization of 980 is:<br>
      <strong>980 = 2 × 2 × 5 × 7 × 7 = 2² × 5 × 7²</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Step-by-step prime factor division</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Final product expression 2² × 5 × 7²</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch5-q5', 5,
    'Find the Highest Common Factor (HCF) of 144, 180, and 192 using the prime factorization method.', 3,
    `<div class="step">
      <strong>Prime Factorization of each number:</strong><br>
      - $144 = 2 \\times 2 \\times 2 \\times 2 \\times 3 \\times 3 = 2^4 \\times 3^2$<br>
      - $180 = 2 \\times 2 \\times 3 \\times 3 \\times 5 = 2^2 \\times 3^2 \\times 5$<br>
      - $192 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 3 = 2^6 \\times 3^1$
    </div>
    <div class="step">
      <strong>Common Prime Factors with Lowest Powers:</strong><br>
      - Common factor 2: lowest power is $2^2 = 4$<br>
      - Common factor 3: lowest power is $3^1 = 3$<br>
      - Factor 5 is not common to all three.<br>
      $\\text{HCF} = 2^2 \\times 3^1 = 4 \\times 3 = \\mathbf{12}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Prime factorization of all three numbers</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Extracting common factors to get HCF = 12</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 5.3: LCM &amp; Practical Applications</div>

  ${qCard('c6m-ch5-q6', 6,
    'Find the Lowest Common Multiple (LCM) of 20, 25, and 30 using the common division method.', 3,
    `<div class="step">
      <strong>Common Division Method:</strong><br>
      Divide by primes (2, 2, 3, 5, 5):<br>
      - Divide by 2: (10, 25, 15)<br>
      - Divide by 2: (5, 25, 15)<br>
      - Divide by 3: (5, 25, 5)<br>
      - Divide by 5: (1, 5, 1)<br>
      - Divide by 5: (1, 1, 1)<br>
      $\\text{LCM} = 2 \\times 2 \\times 3 \\times 5 \\times 5 = 4 \\times 3 \\times 25 = 12 \\times 25 = \\mathbf{300}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Division grid showing prime factors</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Multiplying factors yielding LCM = 300</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch5-q7', 7,
    'The HCF and LCM of two numbers are 16 and 240 respectively. If one of the numbers is 48, find the other number.', 2,
    `<div class="step">
      <strong>Mathematical Property:</strong><br>
      $\\text{Product of two numbers} = \\text{HCF} \\times \\text{LCM}$<br>
      $48 \\times \\text{Other Number} = 16 \\times 240$<br>
      $\\text{Other Number} = \\frac{16 \\times 240}{48} = \\frac{1 \\times 240}{3} = \\mathbf{80}$.<br>
      The other number is <strong>80</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Stating formula HCF × LCM = Product of numbers</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Evaluation yielding 80</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch5-q8', 8,
    'Two tankers contain 850 litres and 680 litres of kerosene oil respectively. Find the maximum capacity of a container which can measure the kerosene of both tankers when used an exact number of times.', 3,
    `<div class="step">
      To find the maximum capacity of the measuring container, we must calculate the <strong>HCF of 850 and 680</strong>.<br>
      - Prime factorization of $850 = 2 \\times 5 \\times 5 \\times 17 = 2 \\times 5^2 \\times 17$<br>
      - Prime factorization of $680 = 2 \\times 2 \\times 2 \\times 5 \\times 17 = 2^3 \\times 5 \\times 17$<br>
      Common prime factors: $2^1 \\times 5^1 \\times 17^1 = 10 \\times 17 = \\mathbf{170}$.<br>
      Therefore, the maximum capacity of the container is <strong>170 litres</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Identifying problem requires HCF calculation</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Prime factorization of 850 and 680</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Answer: 170 litres with units</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch5-q9', 9,
    'Three boys step off together from the same spot. Their steps measure 63 cm, 70 cm, and 77 cm respectively. What is the minimum distance each should cover so that all can cover the distance in complete steps?', 3,
    `<div class="step">
      To find the minimum common distance, we must compute the <strong>LCM of 63, 70, and 77</strong>.<br>
      - Prime factors of $63 = 3^2 \\times 7$<br>
      - Prime factors of $70 = 2 \\times 5 \\times 7$<br>
      - Prime factors of $77 = 7 \\times 11$<br>
      $\\text{LCM} = 2 \\times 3^2 \\times 5 \\times 7 \\times 11 = 2 \\times 9 \\times 5 \\times 7 \\times 11 = 90 \\times 77 = \\mathbf{6,930\\text{ cm}}$.<br>
      In metres: $6,930\\text{ cm} = \\mathbf{69\\text{ m } 30\\text{ cm}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Recognizing need for LCM</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Calculating LCM = 6,930 cm</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Final answer in cm / m with units</span><span class="marking-marks">0.5 Mark</span></div>`
  )}

  ${qCard('c6m-ch5-q10', 10,
    'Define twin prime numbers and co-prime numbers. Give two examples of each.', 2,
    `<div class="step">
      <strong>Twin Primes:</strong> Two prime numbers whose difference is 2 are called twin primes.<br>
      <em>Examples:</em> (3, 5), (5, 7), (11, 13), (17, 19).<br>
      <strong>Co-prime Numbers:</strong> Two numbers that have only 1 as their common factor are called co-prime numbers. They do not need to be prime individually.<br>
      <em>Examples:</em> (4, 9), (8, 15), (7, 10).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Definition and examples of Twin Primes</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Definition and examples of Co-primes</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch5-q11', 11,
    'What is a "perfect number"? Show that 6 and 28 are perfect numbers by finding the sum of all their factors.', 2,
    `<div class="step">
      <strong>Definition:</strong> A number for which the sum of all its factors is equal to twice the number is called a <strong>Perfect Number</strong>.<br>
      - <strong>For 6:</strong> Factors are 1, 2, 3, 6.<br>
        Sum = $1 + 2 + 3 + 6 = 12 = 2 \\times 6$. Hence, 6 is a perfect number.<br>
      - <strong>For 28:</strong> Factors are 1, 2, 4, 7, 14, 28.<br>
        Sum = $1 + 2 + 4 + 7 + 14 + 28 = 56 = 2 \\times 28$. Hence, 28 is a perfect number.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Definition of perfect number</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Verifying sums for 6 (12) and 28 (56)</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch5-q12', 12,
    'Find the smallest 4-digit number which is divisible by 18, 24, and 32.', 3,
    `<div class="step">
      Step 1: Find the LCM of 18, 24, and 32.<br>
      - $18 = 2 \\times 3^2$<br>
      - $24 = 2^3 \\times 3$<br>
      - $32 = 2^5$<br>
      $\\text{LCM} = 2^5 \\times 3^2 = 32 \\times 9 = 288$.<br>
      Step 2: Smallest 4-digit number is 1,000.<br>
      Divide 1,000 by 288: $1,000 = 288 \\times 3 + 136$.<br>
      Required number = $1,000 + (288 - 136) = 1,000 + 152 = \\mathbf{1,152}$.<br>
      Verification: $1,152 = 288 \\times 4$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Calculating LCM(18, 24, 32) = 288</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Finding required smallest 4-digit multiple 1,152</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Traffic Signal Synchronization)',
    `<strong>Case Study: Smart City Traffic Signal Synchronization:</strong><br>
    The traffic lights at three different road crossings change after every 48 seconds, 72 seconds, and 108 seconds respectively.<br>
    (a) If they change simultaneously at 7:00:00 a.m., after how much time will they change simultaneously again?<br>
    (b) At what exact clock time will they change simultaneously next?<br>
    (c) How many times will they change simultaneously in 1 hour?`,
    `<p><strong>(a) Time Interval (LCM of 48, 72, 108):</strong><br>
    - $48 = 2^4 \\times 3$<br>
    - $72 = 2^3 \\times 3^2$<br>
    - $108 = 2^2 \\times 3^3$<br>
    $\\text{LCM} = 2^4 \\times 3^3 = 16 \\times 27 = \\mathbf{432\\text{ seconds}}$.<br>
    Convert to minutes and seconds: $432 = 7 \\times 60 + 12 = \\mathbf{7\\text{ minutes } 12\\text{ seconds}}$.</p>
    <p><strong>(b) Exact Next Clock Time:</strong><br>
    7:00:00 a.m. + 7 min 12 sec = <strong>7:07:12 a.m.</strong></p>
    <p><strong>(c) Occurrences in 1 hour (3600 seconds):</strong><br>
    $\\frac{3600}{432} \\approx 8.33$.<br>
    They will change simultaneously <strong>8 times</strong> in the next hour.</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 6: Perimeter and Area
// ============================================================================
const ch6Html = `<section class="chapter-section" id="ch6">
  <div class="chapter-header">
    <div class="ch-badge">6</div>
    <div class="chapter-header-info">
      <h2>Chapter 6: Perimeter and Area</h2>
      <p>NCERT Ganita Prakash (Class 6) — Perimeter of Polygons, Area of Rectangles &amp; Squares, Grid Estimation &amp; Mensuration Applications | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Mensuration Formulas &amp; Units</div>
    <ul class="concept-list">
      <li><strong>Perimeter:</strong> The distance covered along the boundary forming a closed figure when you go around the figure once. Units: cm, m, km.</li>
      <li><strong>Perimeter Formulas:</strong>
        <ul>
          <li><em>Rectangle:</em> $P = 2 \\times (\\text{Length} + \\text{Breadth}) = 2(l + b)$.</li>
          <li><em>Square:</em> $P = 4 \\times \\text{Side} = 4s$.</li>
          <li><em>Equilateral Triangle:</em> $P = 3 \\times \\text{Side} = 3s$.</li>
          <li><em>Regular Polygon of $n$ sides:</em> $P = n \\times \\text{Side}$.</li>
        </ul>
      </li>
      <li><strong>Area:</strong> The amount of surface enclosed by a closed figure. Units: sq cm ($\text{cm}^2$), sq m ($\text{m}^2$).</li>
      <li><strong>Area Formulas:</strong>
        <ul>
          <li><em>Rectangle:</em> $\\text{Area} = \\text{Length} \\times \\text{Breadth} = l \\times b$.</li>
          <li><em>Square:</em> $\\text{Area} = \\text{Side} \\times \\text{Side} = s^2$.</li>
        </ul>
      </li>
      <li><strong>Estimating Area on Squared Paper:</strong> Count fully covered squares as 1, more than half as 1, exactly half as $\\frac{1}{2}$, and ignore less than half.</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 6.1: Perimeter of Polygons</div>

  ${qCard('c6m-ch6-q1', 1,
    'Find the perimeter of each of the following figures:<br>(a) A rectangle of sides 15 cm and 9 cm.<br>(b) A square of side 8.5 cm.<br>(c) An equilateral triangle of side 12 cm.<br>(d) A regular hexagon of side 6 cm.', 3,
    `<div class="step">
      <strong>(a) Rectangle:</strong> $P = 2(l + b) = 2(15 + 9) = 2(24) = \\mathbf{48\\text{ cm}}$.<br>
      <strong>(b) Square:</strong> $P = 4s = 4 \\times 8.5 = \\mathbf{34\\text{ cm}}$.<br>
      <strong>(c) Equilateral Triangle:</strong> $P = 3s = 3 \\times 12 = \\mathbf{36\\text{ cm}}$.<br>
      <strong>(d) Regular Hexagon:</strong> $P = 6s = 6 \\times 6 = \\mathbf{36\\text{ cm}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct perimeter calculation with units</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>`
  )}

  ${qCard('c6m-ch6-q2', 2,
    'A piece of string is 30 cm long. What will be the length of each side if the string is used to form:<br>(a) A square?<br>(b) An equilateral triangle?<br>(c) A regular hexagon?', 3,
    `<div class="step">
      The perimeter of each figure equals the total string length = 30 cm.<br>
      <strong>(a) Square (4 equal sides):</strong> Side = $\\frac{30}{4} = \\mathbf{7.5\\text{ cm}}$.<br>
      <strong>(b) Equilateral Triangle (3 equal sides):</strong> Side = $\\frac{30}{3} = \\mathbf{10\\text{ cm}}$.<br>
      <strong>(c) Regular Hexagon (6 equal sides):</strong> Side = $\\frac{30}{6} = \\mathbf{5\\text{ cm}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per part with division and units</span><span class="marking-marks">3 Marks</span></div>`
  )}

  ${qCard('c6m-ch6-q3', 3,
    'Two sides of a triangle are 12 cm and 14 cm. The perimeter of the triangle is 36 cm. What is the length of its third side?', 2,
    `<div class="step">
      Perimeter of triangle = Sum of all three sides.<br>
      $12 + 14 + \\text{Third Side} = 36$<br>
      $26 + \\text{Third Side} = 36$<br>
      $\\text{Third Side} = 36 - 26 = \\mathbf{10\\text{ cm}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Setting up equation 26 + Third Side = 36</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Answer 10 cm</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch6-q4', 4,
    'Find the cost of fencing a rectangular park of length 175 m and breadth 125 m at the rate of ₹ 12 per metre.', 2,
    `<div class="step">
      Step 1: Find perimeter of rectangular park:<br>
      $P = 2(l + b) = 2(175 + 125) = 2(300) = 600\\text{ m}$.<br>
      Step 2: Cost of fencing:<br>
      $\\text{Cost} = 600 \\times \\text{₹ } 12 = \\mathbf{\\text{₹ } 7,200}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Perimeter calculation 600 m</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Cost calculation ₹ 7,200</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 6.2: Area of Rectangles &amp; Squares</div>

  ${qCard('c6m-ch6-q5', 5,
    'Find the area of a rectangle whose length and breadth are 12 cm and 4 cm respectively. Also find the area of a square of side 7 cm.', 2,
    `<div class="step">
      <strong>Rectangle:</strong> $\\text{Area} = l \\times b = 12\\text{ cm} \\times 4\\text{ cm} = \\mathbf{48\\text{ cm}^2}$.<br>
      <strong>Square:</strong> $\\text{Area} = s^2 = 7\\text{ cm} \\times 7\\text{ cm} = \\mathbf{49\\text{ cm}^2}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Rectangle area: 48 cm²</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Square area: 49 cm²</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch6-q6', 6,
    'The area of a rectangular garden 50 m long is 300 sq m. Find the width of the garden.', 2,
    `<div class="step">
      $\\text{Area} = \\text{Length} \\times \\text{Width}$<br>
      $300 = 50 \\times \\text{Width}$<br>
      $\\text{Width} = \\frac{300}{50} = \\mathbf{6\\text{ metres}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Formula substitution: 300 = 50 × Width</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Answer: 6 metres</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch6-q7', 7,
    'What is the cost of tiling a rectangular plot of land 500 m long and 200 m wide at the rate of ₹ 8 per hundred sq m?', 3,
    `<div class="step">
      Step 1: Calculate area of plot:<br>
      $\\text{Area} = 500\\text{ m} \\times 200\\text{ m} = 1,00,000\\text{ m}^2$.<br>
      Step 2: Cost rate is ₹ 8 per 100 sq m:<br>
      Number of hundreds = $\\frac{1,00,000}{100} = 1,000$.<br>
      Total Cost = $1,000 \\times \\text{₹ } 8 = \\mathbf{\\text{₹ } 8,000}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Area calculation: 1,00,000 m²</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Cost computation: ₹ 8,000</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch6-q8', 8,
    'A room is 4 m long and 3 m 50 cm wide. How many square metres of carpet is needed to cover the floor of the room?', 2,
    `<div class="step">
      Length $l = 4\\text{ m}$.<br>
      Breadth $b = 3\\text{ m } 50\\text{ cm} = 3.5\\text{ m}$.<br>
      $\\text{Area of floor} = l \\times b = 4 \\times 3.5 = \\mathbf{14\\text{ sq metres}}$.<br>
      Therefore, <strong>14 sq m</strong> of carpet is needed.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Converting breadth to 3.5 m</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Calculating area 14 m²</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch6-q9', 9,
    'How many tiles whose length and breadth are 12 cm and 5 cm respectively will be needed to fit in a rectangular region whose length and breadth are 100 cm and 144 cm?', 3,
    `<div class="step">
      Step 1: Area of the rectangular region = $100\\text{ cm} \\times 144\\text{ cm} = 14,400\\text{ cm}^2$.<br>
      Step 2: Area of one tile = $12\\text{ cm} \\times 5\\text{ cm} = 60\\text{ cm}^2$.<br>
      Step 3: Number of tiles needed = $\\frac{\\text{Area of region}}{\\text{Area of one tile}} = \\frac{14,400}{60} = \\mathbf{240\\text{ tiles}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Area of region (14,400) and tile (60)</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Division yielding 240 tiles</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch6-q10', 10,
    'Can two different rectangles have the same perimeter but different areas? Justify your answer with two concrete numerical examples.', 2,
    `<div class="step">
      <strong>Yes.</strong><br>
      Consider two rectangles with perimeter = 20 cm ($l + b = 10$):<br>
      - Rectangle 1: $l = 6\\text{ cm}, b = 4\\text{ cm}$.<br>
        Perimeter = $2(6+4) = 20\\text{ cm}$. Area = $6 \\times 4 = \\mathbf{24\\text{ cm}^2}$.<br>
      - Rectangle 2: $l = 8\\text{ cm}, b = 2\\text{ cm}$.<br>
        Perimeter = $2(8+2) = 20\\text{ cm}$. Area = $8 \\times 2 = \\mathbf{16\\text{ cm}^2}$.<br>
      Both have perimeter 20 cm, but their areas are 24 cm² and 16 cm².
    </div>`,
    `<div class="marking-row"><span class="marking-key">Affirmative statement "Yes"</span><span class="marking-marks">0.5 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Two numerical examples with equal perimeter and distinct areas</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch6-q11', 11,
    'A wire of length 36 cm is bent in the form of a square. If the same wire is straightened and rebent into a rectangle of breadth 6 cm, find the length of the rectangle and compare the areas of both shapes.', 3,
    `<div class="step">
      <strong>Square:</strong> $4s = 36 \\implies s = 9\\text{ cm}$.<br>
      Area of square = $9 \\times 9 = \\mathbf{81\\text{ cm}^2}$.<br>
      <strong>Rectangle:</strong> $2(l + 6) = 36 \\implies l + 6 = 18 \\implies l = \\mathbf{12\\text{ cm}}$.<br>
      Area of rectangle = $12 \\times 6 = \\mathbf{72\\text{ cm}^2}$.<br>
      <strong>Comparison:</strong> The square encloses more area than the rectangle ($81\\text{ cm}^2 &gt; 72\\text{ cm}^2$).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Square side 9 cm and area 81 cm²</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Rectangle length 12 cm and area 72 cm²</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Comparison conclusion</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Sports Field Budgeting)',
    `<strong>Case Study: School Football Ground &amp; Running Track:</strong><br>
    A standard school football pitch is 100 m long and 64 m wide. Surrounding the pitch is an athletics running track path of uniform width 3 m.<br>
    (a) Find the playing area of the football pitch.<br>
    (b) Find the outer perimeter of the running track.<br>
    (c) Calculate the total area of the running track path.`,
    `<p><strong>(a) Playing Area of Football Pitch:</strong><br>
    $\\text{Area} = 100\\text{ m} \\times 64\\text{ m} = \\mathbf{6,400\\text{ m}^2}$.</p>
    <p><strong>(b) Outer Dimensions &amp; Perimeter:</strong><br>
    - Outer length = $100 + 2(3) = 106\\text{ m}$.<br>
    - Outer breadth = $64 + 2(3) = 70\\text{ m}$.<br>
    Outer Perimeter = $2(106 + 70) = 2(176) = \\mathbf{352\\text{ metres}}$.</p>
    <p><strong>(c) Area of the Running Track Path:</strong><br>
    Outer Area = $106 \\times 70 = 7,420\\text{ m}^2$.<br>
    Inner Area = $6,400\\text{ m}^2$.<br>
    $\\text{Path Area} = 7,420 - 6,400 = \\mathbf{1,020\\text{ m}^2}$.</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 7: Fractions
// ============================================================================
const ch7Html = `<section class="chapter-section" id="ch7">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <h2>Chapter 7: Fractions</h2>
      <p>NCERT Ganita Prakash (Class 6) — Proper, Improper &amp; Mixed Fractions, Number Line Models, Equivalent Fractions, Simplest Form &amp; Arithmetic | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Fraction Concepts &amp; Operation Rules</div>
    <ul class="concept-list">
      <li><strong>Fraction:</strong> A number representing a part of a whole. In $\\frac{a}{b}$, $a$ is numerator and $b$ is denominator ($b \\neq 0$).</li>
      <li><strong>Types of Fractions:</strong>
        <ul>
          <li><em>Proper Fraction:</em> Numerator &lt; Denominator (value &lt; 1), e.g., $\\frac{3}{7}$.</li>
          <li><em>Improper Fraction:</em> Numerator $\\ge$ Denominator (value $\\ge$ 1), e.g., $\\frac{11}{4}$.</li>
          <li><em>Mixed Fraction:</em> Combination of a whole number and a proper fraction, e.g., $2\\frac{3}{4} = \\frac{2 \\times 4 + 3}{4} = \\frac{11}{4}$.</li>
        </ul>
      </li>
      <li><strong>Equivalent Fractions:</strong> Fractions having identical values, obtained by multiplying or dividing numerator and denominator by the same non-zero integer.</li>
      <li><strong>Simplest Form:</strong> A fraction $\\frac{a}{b}$ is in simplest form if $\\text{HCF}(a, b) = 1$.</li>
      <li><strong>Addition &amp; Subtraction:</strong> Convert unlike fractions to like fractions using the LCM of their denominators before adding or subtracting.</li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 7.1: Visual Fractions &amp; Number Line</div>

  ${qCard('c6m-ch7-q1', 1,
    'Write the fraction representing the shaded portion in the following figures:<br>(a) A circle divided into 8 equal parts with 3 parts shaded.<br>(b) A rectangle divided into 6 equal parts with 5 parts shaded.<br>(c) What fraction of a day is 8 hours?<br>(d) What fraction of an hour is 40 minutes?', 2,
    `<div class="step">
      <strong>(a) Circle:</strong> Shaded parts = 3, Total parts = 8 $\\implies \\mathbf{\\frac{3}{8}}$.<br>
      <strong>(b) Rectangle:</strong> Shaded parts = 5, Total parts = 6 $\\implies \\mathbf{\\frac{5}{6}}$.<br>
      <strong>(c) 8 hours of a day (24 hours):</strong> $\\frac{8}{24} = \\mathbf{\\frac{1}{3}}$.<br>
      <strong>(d) 40 minutes of an hour (60 minutes):</strong> $\\frac{40}{60} = \\mathbf{\\frac{2}{3}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct fraction in lowest form</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch7-q2', 2,
    'Represent the following fractions on a number line:<br>(a) 2/5 &nbsp;&nbsp; (b) 3/5 &nbsp;&nbsp; (c) 7/5', 2,
    `<div class="step">
      <strong>Construction on Number Line:</strong><br>
      1. Draw a straight line and mark 0, 1, and 2.<br>
      2. Divide the unit interval between 0 and 1 into 5 equal parts (each step is $\\frac{1}{5}$).<br>
      3. Point at 2 steps from 0 marks <strong>2/5</strong>.<br>
      4. Point at 3 steps from 0 marks <strong>3/5</strong>.<br>
      5. Divide the interval between 1 and 2 into 5 equal parts. Point at 2 steps beyond 1 ($1 + \\frac{2}{5} = \\frac{7}{5}$) marks <strong>7/5</strong>.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Dividing unit segment into 5 equal intervals</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Correctly locating 2/5, 3/5, and 7/5</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 7.2: Types of Fractions &amp; Conversions</div>

  ${qCard('c6m-ch7-q3', 3,
    '(a) Express the following as mixed fractions: (i) 20/3 &nbsp;&nbsp; (ii) 27/5<br>(b) Express the following as improper fractions: (i) 7 3/4 &nbsp;&nbsp; (ii) 5 6/7', 2,
    `<div class="step">
      <strong>(a) Mixed Fractions:</strong><br>
      (i) $20 \\div 3 = 6$ (quotient) with remainder 2 $\\implies \\mathbf{6\\frac{2}{3}}$.<br>
      (ii) $27 \\div 5 = 5$ (quotient) with remainder 2 $\\implies \\mathbf{5\\frac{2}{5}}$.
    </div>
    <div class="step">
      <strong>(b) Improper Fractions:</strong><br>
      (i) $7\\frac{3}{4} = \\frac{7 \\times 4 + 3}{4} = \\frac{28 + 3}{4} = \\mathbf{\\frac{31}{4}}$.<br>
      (ii) $5\\frac{6}{7} = \\frac{5 \\times 7 + 6}{7} = \\frac{35 + 6}{7} = \\mathbf{\\frac{41}{7}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each conversion correct</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 7.3: Equivalent Fractions &amp; Simplest Form</div>

  ${qCard('c6m-ch7-q4', 4,
    'Find the equivalent fraction of 3/5 having:<br>(a) Denominator 20<br>(b) Numerator 9<br>(c) Denominator 30', 3,
    `<div class="step">
      <strong>(a) Denominator 20:</strong> Multiply numerator and denominator by 4:<br>
      $\\frac{3 \\times 4}{5 \\times 4} = \\mathbf{\\frac{12}{20}}$.
    </div>
    <div class="step">
      <strong>(b) Numerator 9:</strong> Multiply numerator and denominator by 3:<br>
      $\\frac{3 \\times 3}{5 \\times 3} = \\mathbf{\\frac{9}{15}}$.
    </div>
    <div class="step">
      <strong>(c) Denominator 30:</strong> Multiply numerator and denominator by 6:<br>
      $\\frac{3 \\times 6}{5 \\times 6} = \\mathbf{\\frac{18}{30}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per correct equivalent fraction</span><span class="marking-marks">3 Marks</span></div>`
  )}

  ${qCard('c6m-ch7-q5', 5,
    'Reduce the following fractions to their simplest (lowest) form by dividing by HCF:<br>(a) 48/60 &nbsp;&nbsp; (b) 84/98 &nbsp;&nbsp; (c) 12/52', 3,
    `<div class="step">
      <strong>(a) 48/60:</strong> $\\text{HCF}(48, 60) = 12$.<br>
      $\\frac{48 \\div 12}{60 \\div 12} = \\mathbf{\\frac{4}{5}}$.
    </div>
    <div class="step">
      <strong>(b) 84/98:</strong> $\\text{HCF}(84, 98) = 14$.<br>
      $\\frac{84 \\div 14}{98 \\div 14} = \\mathbf{\\frac{6}{7}}$.
    </div>
    <div class="step">
      <strong>(c) 12/52:</strong> $\\text{HCF}(12, 52) = 4$.<br>
      $\\frac{12 \\div 4}{52 \\div 4} = \\mathbf{\\frac{3}{13}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per reduction with HCF step</span><span class="marking-marks">3 Marks</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 7.4: Fraction Comparison &amp; Ordering</div>

  ${qCard('c6m-ch7-q6', 6,
    'Compare the following pairs of fractions and place appropriate sign (&lt;, =, &gt;):<br>(a) 3/6 and 5/6<br>(b) 1/4 and 1/7<br>(c) 4/5 and 5/6', 3,
    `<div class="step">
      <strong>(a) 3/6 and 5/6:</strong> Like fractions; since $3 &lt; 5$, $\\mathbf{\\frac{3}{6} &lt; \\frac{5}{6}}$.
    </div>
    <div class="step">
      <strong>(b) 1/4 and 1/7:</strong> Same numerator; the fraction with the smaller denominator is larger: $\\mathbf{\\frac{1}{4} &gt; \\frac{1}{7}}$.
    </div>
    <div class="step">
      <strong>(c) 4/5 and 5/6:</strong> Unlike fractions. $\\text{LCM}(5, 6) = 30$.<br>
      $\\frac{4}{5} = \\frac{24}{30}$ and $\\frac{5}{6} = \\frac{25}{30}$.<br>
      Since $24 &lt; 25$, $\\mathbf{\\frac{4}{5} &lt; \\frac{5}{6}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">1 Mark per comparison with clear reasoning</span><span class="marking-marks">3 Marks</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 7.5: Addition &amp; Subtraction of Fractions</div>

  ${qCard('c6m-ch7-q7', 7,
    'Solve the following:<br>(a) 1/18 + 1/18<br>(b) 8/15 + 3/15<br>(c) 7/7 - 5/7<br>(d) 1 - 2/3', 2,
    `<div class="step">
      <strong>(a)</strong> $\\frac{1}{18} + \\frac{1}{18} = \\frac{2}{18} = \\mathbf{\\frac{1}{9}}$.<br>
      <strong>(b)</strong> $\\frac{8}{15} + \\frac{3}{15} = \\mathbf{\\frac{11}{15}}$.<br>
      <strong>(c)</strong> $\\frac{7}{7} - \\frac{5}{7} = \\mathbf{\\frac{2}{7}}$.<br>
      <strong>(d)</strong> $1 - \\frac{2}{3} = \\frac{3}{3} - \\frac{2}{3} = \\mathbf{\\frac{1}{3}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Each correct evaluation in simplest form</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>`
  )}

  ${qCard('c6m-ch7-q8', 8,
    'Find the sum: 2/3 + 3/4 + 1/2.', 2,
    `<div class="step">
      Step 1: Find LCM of denominators 3, 4, and 2:<br>
      $\\text{LCM}(3, 4, 2) = 12$.<br>
      Step 2: Convert to like fractions:<br>
      $\\frac{2}{3} = \\frac{8}{12}$; $\\frac{3}{4} = \\frac{9}{12}$; $\\frac{1}{2} = \\frac{6}{12}$.<br>
      Step 3: Add numerators:<br>
      $\\text{Sum} = \\frac{8 + 9 + 6}{12} = \\frac{23}{12} = \\mathbf{1\\frac{11}{12}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">LCM = 12 and conversion to like fractions</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Sum = 23/12 or 1 11/12</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch7-q9', 9,
    'Subtract 2 1/5 from 4 2/3.', 2,
    `<div class="step">
      Convert mixed numbers to improper fractions:<br>
      $4\\frac{2}{3} = \\frac{14}{3}$; $2\\frac{1}{5} = \\frac{11}{5}$.<br>
      $\\text{LCM}(3, 5) = 15$.<br>
      $\\frac{14}{3} = \\frac{70}{15}$; $\\frac{11}{5} = \\frac{33}{15}$.<br>
      Difference = $\\frac{70 - 33}{15} = \\frac{37}{15} = \\mathbf{2\\frac{7}{15}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Improper conversion and LCM = 15</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Answer 37/15 or 2 7/15</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch7-q10', 10,
    'Sarita bought 2/5 metre of ribbon and Lalita 3/4 metre of ribbon. What is the total length of the ribbon they bought?', 2,
    `<div class="step">
      Total length = $\\frac{2}{5} + \\frac{3}{4}\\text{ metres}$.<br>
      $\\text{LCM}(5, 4) = 20$.<br>
      $\\frac{2}{5} = \\frac{8}{20}$; $\\frac{3}{4} = \\frac{15}{20}$.<br>
      Total = $\\frac{8 + 15}{20} = \\frac{23}{20} = \\mathbf{1\\frac{3}{20}\\text{ metres}}$ (or 1.15 m).
    </div>`,
    `<div class="marking-row"><span class="marking-key">Formulating sum with LCM = 20</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Answer 23/20 m or 1 3/20 m</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch7-q11', 11,
    'A piece of wire 7/8 metre long broke into two pieces. One piece was 1/4 metre long. How long is the other piece?', 2,
    `<div class="step">
      Length of other piece = Total length - First piece<br>
      $= \\frac{7}{8} - \\frac{1}{4}$.<br>
      $\\text{LCM}(8, 4) = 8$.<br>
      $\\frac{1}{4} = \\frac{2}{8}$.<br>
      Length = $\\frac{7 - 2}{8} = \\mathbf{\\frac{5}{8}\\text{ metre}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Subtraction setup with LCM</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Answer: 5/8 metre</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Culinary Recipe Fractions)',
    `<strong>Case Study: Culinary Recipe Scaling &amp; Nutritional Fractions:</strong><br>
    A chef is baking a traditional carrot cake. The original recipe requires $2\\frac{1}{2}$ cups of flour, $\\frac{3}{4}$ cup of brown sugar, and $1\\frac{1}{4}$ cups of grated carrots.<br>
    (a) If the chef wants to bake double the batch (2 times), how much flour and brown sugar will be required?<br>
    (b) If the chef has only 3 cups of flour available, how much more flour is needed for the double batch?<br>
    (c) Express the total liquid sweetener and vegetable ratio as a combined fraction.`,
    `<p><strong>(a) Doubling the Ingredients:</strong><br>
    - Flour = $2 \\times 2\\frac{1}{2} = 2 \\times \\frac{5}{2} = \\mathbf{5\\text{ cups}}$.<br>
    - Sugar = $2 \\times \\frac{3}{4} = \\frac{6}{4} = \\frac{3}{2} = \\mathbf{1\\frac{1}{2}\\text{ cups}}$.</p>
    <p><strong>(b) Extra Flour Needed:</strong><br>
    $5\\text{ cups} - 3\\text{ cups} = \\mathbf{2\\text{ cups of flour}}$.</p>
    <p><strong>(c) Combined Sugar and Carrots:</strong><br>
    $\\frac{3}{4} + 1\\frac{1}{4} = \\frac{3}{4} + \\frac{5}{4} = \\frac{8}{4} = \\mathbf{2\\text{ cups}}$.</p>`
  )}
</section>`;

// ============================================================================
// CHAPTER 8: Playing with Constructions
// ============================================================================
const ch8Html = `<section class="chapter-section" id="ch8">
  <div class="chapter-header">
    <div class="ch-badge">8</div>
    <div class="chapter-header-info">
      <h2>Chapter 8: Playing with Constructions</h2>
      <p>NCERT Ganita Prakash (Class 6) — Compass &amp; Ruler Constructions, Perpendicular Bisectors, Angle Bisectors &amp; Standard Angle Geometry | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Geometrical Construction Instruments &amp; Rules</div>
    <ul class="concept-list">
      <li><strong>Instruments:</strong> Ruler (unmarked straightedge / calibrated scale in cm/mm), Compass (drawing arcs and circles of precise radii), Divider (comparing lengths), Set Squares (30°-60°-90° and 45°-45°-90°), Protractor (measuring/drawing angles).</li>
      <li><strong>Perpendicular Bisector:</strong> A line that divides a given line segment into two equal halves at right angles (90°). Every point on the perpendicular bisector is equidistant from the two endpoints.</li>
      <li><strong>Angle Bisector:</strong> A ray that divides an angle into two equal angles.</li>
      <li><strong>Standard Angles with Compass &amp; Ruler:</strong>
        <ul>
          <li><em>60°:</em> First arc cut from initial point on circumference of same radius.</li>
          <li><em>120°:</em> Second consecutive arc cut along circumference.</li>
          <li><em>90°:</em> Bisecting the interval between 60° and 120°.</li>
          <li><em>30°:</em> Bisecting 60°.</li>
          <li><em>45°:</em> Bisecting 90°.</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="ex-div">NCERT Exercise 8.1: Circle &amp; Line Segment Constructions</div>

  ${qCard('c6m-ch8-q1', 1,
    'Draw a circle of radius 3.5 cm using a ruler and compass. Mark its centre O, a radius OA, a diameter AB, and a chord CD.', 2,
    `<div class="step">
      <strong>Steps of Construction:</strong><br>
      1. Open the compass to measure exactly 3.5 cm on the ruler scale.<br>
      2. Mark a point $O$ on paper with a sharp pencil as the centre.<br>
      3. Place the compass needle at $O$ and rotate smoothly through 360° to draw the circle.<br>
      4. Draw segment from $O$ to any point on circle $A$ $\\implies$ Radius $OA = 3.5\\text{ cm}$.<br>
      5. Extend $AO$ in a straight line through $O$ to point $B$ on the circle $\\implies$ Diameter $AB = 7\\text{ cm}$.<br>
      6. Join any two points $C$ and $D$ on the circumference not passing through $O$ $\\implies$ Chord $CD$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Drawing circle of radius 3.5 cm</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Accurately labeling centre O, radius OA, diameter AB, and chord CD</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch8-q2', 2,
    'Draw a line segment AB of length 7.3 cm. Using ruler and compass, find its axis of symmetry (perpendicular bisector). Measure each half.', 3,
    `<div class="step">
      <strong>Steps of Construction:</strong><br>
      1. Draw a line segment $AB = 7.3\\text{ cm}$ using a calibrated ruler.<br>
      2. With $A$ as centre and radius more than half of $AB$ (approx. 4.5 cm), draw two arcs, one above and one below $AB$.<br>
      3. With $B$ as centre and the identical radius, draw two arcs intersecting the previous arcs at points $P$ and $Q$.<br>
      4. Join $P$ and $Q$ with a straight line. Let $PQ$ intersect $AB$ at point $M$.<br>
      5. Line $PQ$ is the required perpendicular bisector (axis of symmetry).<br>
      <strong>Measurement:</strong> $AM = MB = \\frac{7.3}{2} = \\mathbf{3.65\\text{ cm}}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Drawing segment AB = 7.3 cm</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Constructing intersecting arcs above and below</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Drawing line PQ and measuring AM = MB = 3.65 cm</span><span class="marking-marks">1 Mark</span></div>`
  )}

  <div class="ex-div">NCERT Exercise 8.2: Perpendiculars &amp; Angle Constructions</div>

  ${qCard('c6m-ch8-q3', 3,
    'Draw an angle of measure 80° using a protractor and construct its angle bisector using a compass.', 3,
    `<div class="step">
      <strong>Steps of Construction:</strong><br>
      1. Draw a ray $OA$. Using a protractor, draw ray $OB$ such that $\\angle AOB = 80^\\circ$.<br>
      2. With $O$ as centre and any convenient radius, draw an arc cutting ray $OA$ at $P$ and ray $OB$ at $Q$.<br>
      3. With $P$ as centre and radius more than $\\frac{1}{2}PQ$, draw an arc inside the angle.<br>
      4. With $Q$ as centre and the same radius, draw another arc intersecting the previous arc at point $R$.<br>
      5. Join $O$ and $R$ and produce it to form ray $OR$.<br>
      Ray $OR$ is the bisector of $\\angle AOB$.<br>
      Verification: $\\angle AOR = \\angle ROB = \\frac{80^\\circ}{2} = \\mathbf{40^\\circ}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Drawing ∠AOB = 80°</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Arc intersection steps for bisector</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Drawing ray OR and verifying 40°</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${qCard('c6m-ch8-q4', 4,
    'Construct an angle of 60° using only a ruler and a compass. Explain the geometric rationale for why this angle is exactly 60°.', 3,
    `<div class="step">
      <strong>Steps of Construction:</strong><br>
      1. Draw a straight line and mark a point $O$ on it, with ray $OA$.<br>
      2. With $O$ as centre and any convenient radius $r$, draw an arc cutting ray $OA$ at point $P$.<br>
      3. With $P$ as centre and the <em>same radius $r$</em>, draw an arc cutting the first arc at point $Q$.<br>
      4. Join $O$ and $Q$ and extend it to form ray $OB$.<br>
      Angle $\\angle AOB$ is exactly <strong>60°</strong>.<br>
      <strong>Geometric Rationale:</strong> Points $O, P, Q$ form an equilateral triangle because $OP = OQ = PQ = r$. In an equilateral triangle, each interior angle measures $180^\\circ / 3 = 60^\\circ$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Accurate construction steps with compass</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Geometric explanation using equilateral triangle property</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch8-q5', 5,
    'Construct an angle of 90° at the initial point of a given ray using only a ruler and compass. Then construct its bisector to obtain a 45° angle.', 3,
    `<div class="step">
      <strong>Steps of Construction:</strong><br>
      1. Draw ray $OA$. With $O$ as centre, draw a semicircle cutting $OA$ at $X$.<br>
      2. With $X$ as centre and same radius, cut the arc at $P$ (60°).<br>
      3. With $P$ as centre and same radius, cut the arc at $Q$ (120°).<br>
      4. From $P$ and $Q$, draw arcs of equal radius intersecting each other at $R$.<br>
      5. Join $OR$. Line $OR$ is perpendicular to $OA$ ($\\angle AOR = \\mathbf{90^\\circ}$).<br>
      6. To obtain 45°, bisect $\\angle AOR$: with $X$ and the intersection point on $OR$ as centres, draw intersecting arcs and join to $O$. Resulting angle = $\\frac{90^\\circ}{2} = \\mathbf{45^\\circ}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Constructing 90° using 60° and 120° arcs</span><span class="marking-marks">1.5 Marks</span></div>
    <div class="marking-row"><span class="marking-key">Bisecting 90° to construct 45°</span><span class="marking-marks">1.5 Marks</span></div>`
  )}

  ${qCard('c6m-ch8-q6', 6,
    'Explain how you would construct an angle of 30° using only a ruler and compass.', 2,
    `<div class="step">
      1. Draw ray $OA$.<br>
      2. Construct an angle of 60° ($\\angle AOB$) using ruler and compass as described in Q4.<br>
      3. Draw the angle bisector of $\\angle AOB$ by taking arcs from points on arms $OA$ and $OB$.<br>
      4. The bisector ray divides 60° into two equal angles of $\\frac{60^\\circ}{2} = \\mathbf{30^\\circ}$.
    </div>`,
    `<div class="marking-row"><span class="marking-key">Stating 60° construction step</span><span class="marking-marks">1 Mark</span></div>
    <div class="marking-row"><span class="marking-key">Bisection step yielding 30°</span><span class="marking-marks">1 Mark</span></div>`
  )}

  ${cbqCard('CBSE Competency-Based Question (Pergola Pergola Blueprint)',
    `<strong>Case Study: Botanical Garden Pergola Blueprint:</strong><br>
    A landscape architect is designing a semi-circular wooden pergola for a school botanical garden.<br>
    (a) The foundation requires two support pillars placed at endpoints A and B of a diameter of length 8 m. What radius must be used for the semi-circular arc?<br>
    (b) A central decorative arch must stand along the perpendicular bisector of AB. Describe the geometric steps to establish this axis on the ground using two equal measuring ropes.<br>
    (c) What angle does the central pillar make with ground line AB?`,
    `<p><strong>(a) Radius Required:</strong><br>
    $\\text{Radius} = \\frac{\\text{Diameter}}{2} = \\frac{8\\text{ m}}{2} = \\mathbf{4\\text{ metres}}$.</p>
    <p><strong>(b) Ground Perpendicular Bisector Construction:</strong><br>
    1. Fix pegs at endpoints $A$ and $B$.<br>
    2. Take two equal ropes of length greater than 4 m (e.g., 6 m). Anchor one at $A$ and the other at $B$.<br>
    3. Pull the ropes taut so their ends meet at a point $P$ on one side of $AB$, and peg point $P$.<br>
    4. Repeat on the other side to establish point $Q$.<br>
    5. The straight line string between $P$ and $Q$ defines the exact perpendicular bisector axis.</p>
    <p><strong>(c) Angle with Ground Line:</strong><br>
    The central axis makes an angle of exactly <strong>90° (Right Angle)</strong> with ground line $AB$.</p>`
  )}
</section>`;

// Write Chapters 5 to 8
fs.writeFileSync(path.join(dir, 'ch5.html'), ch5Html, 'utf8');
console.log('Generated chapters-c6m/ch5.html with 12 exercise Qs + 1 CBQ (13 Total)');

fs.writeFileSync(path.join(dir, 'ch6.html'), ch6Html, 'utf8');
console.log('Generated chapters-c6m/ch6.html with 11 exercise Qs + 1 CBQ (12 Total)');

fs.writeFileSync(path.join(dir, 'ch7.html'), ch7Html, 'utf8');
console.log('Generated chapters-c6m/ch7.html with 11 exercise Qs + 1 CBQ (12 Total)');

fs.writeFileSync(path.join(dir, 'ch8.html'), ch8Html, 'utf8');
console.log('Generated chapters-c6m/ch8.html with 6 exercise Qs + 1 CBQ (7 Total)');

console.log('Chapters 5 to 8 expansion successfully written!');
