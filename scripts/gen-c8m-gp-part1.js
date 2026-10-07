const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

if (!fs.existsSync(chDir)) {
  fs.mkdirSync(chDir, { recursive: true });
}

// Read existing ch1Html from previous step or define it
const ch1File = path.join(chDir, 'ch1.html');
const ch1Html = fs.readFileSync(ch1File, 'utf8');

// ==========================================
// CHAPTER 2: Power Play (17 Questions + CBQ)
// ==========================================
const ch2Html = `<section class="chapter-section" id="ch2">
  <div class="chapter-header">
    <div class="ch-badge">2</div>
    <div class="chapter-header-info">
      <h2>Chapter 2: Power Play</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 1) — Exponents, Laws of Indices, Negative Powers, Scientific Notation &amp; Cyclicity of Digits | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Laws of Exponents &amp; Scientific Notation</div>
    <ul class="concept-list">
      <li><strong>Definition:</strong> For any non-zero real number <em>a</em> and integer <em>n</em>, <em>aⁿ</em> denotes repeated multiplication of <em>a</em> by itself <em>n</em> times (where <em>a</em> is the <strong>base</strong> and <em>n</em> is the <strong>exponent / power</strong>).</li>
      <li><strong>Fundamental Laws of Exponents (for non-zero a, b and integers m, n):</strong>
        <ul>
          <li><strong>Product Law:</strong> <code>aᵐ × aⁿ = aᵐ⁺ⁿ</code></li>
          <li><strong>Quotient Law:</strong> <code>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</code></li>
          <li><strong>Power of a Power Law:</strong> <code>(aᵐ)ⁿ = aᵐⁿ</code></li>
          <li><strong>Power of a Product:</strong> <code>aᵐ × bᵐ = (ab)ᵐ</code></li>
          <li><strong>Power of a Quotient:</strong> <code>aᵐ ÷ bᵐ = (a/b)ᵐ</code></li>
          <li><strong>Zero Exponent:</strong> <code>a⁰ = 1</code> (for any a ≠ 0)</li>
          <li><strong>Negative Exponent (Reciprocal):</strong> <code>a⁻ⁿ = 1 / aⁿ</code> and <code>(a/b)⁻ⁿ = (b/a)ⁿ</code></li>
        </ul>
      </li>
      <li><strong>Scientific Notation (Standard Form):</strong> Expressing numbers as <code>k × 10ᵐ</code> where <code>1 ≤ k &lt; 10</code> and <em>m</em> is an integer.</li>
      <li><strong>Cyclicity of Units Digits:</strong>
        <ul>
          <li>Powers of 2 repeat units digits in cycles of 4: 2, 4, 8, 6.</li>
          <li>Powers of 3 repeat in cycles of 4: 3, 9, 7, 1.</li>
          <li>Powers of 7 repeat in cycles of 4: 7, 9, 3, 1.</li>
          <li>Powers of 8 repeat in cycles of 4: 8, 4, 2, 6.</li>
          <li>Powers of 4 repeat in cycles of 2: 4, 6. Powers of 9 repeat in cycles of 2: 9, 1.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 2: Exponent Laws Wheel -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 560 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="280" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Summary of Fundamental Index Laws</text>
      
      <!-- Central Node -->
      <circle cx="280" cy="100" r="30" fill="#4f46e5" stroke="#4338ca" stroke-width="2"/>
      <text x="280" y="98" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">LAWS OF</text>
      <text x="280" y="112" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#c7d2fe" text-anchor="middle">EXPONENTS</text>

      <!-- Law 1: Product -->
      <rect x="40" y="45" width="130" height="32" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="105" y="66" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#1e40af" text-anchor="middle">aᵐ × aⁿ = aᵐ⁺ⁿ</text>
      <line x1="170" y1="65" x2="252" y2="90" stroke="#cbd5e1" stroke-width="1.5"/>

      <!-- Law 2: Quotient -->
      <rect x="390" y="45" width="130" height="32" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <text x="455" y="66" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">aᵐ ÷ aⁿ = aᵐ⁻ⁿ</text>
      <line x1="390" y1="65" x2="308" y2="90" stroke="#cbd5e1" stroke-width="1.5"/>

      <!-- Law 3: Power of Power -->
      <rect x="40" y="125" width="130" height="32" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="105" y="146" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle">(aᵐ)ⁿ = aᵐⁿ</text>
      <line x1="170" y1="135" x2="252" y2="110" stroke="#cbd5e1" stroke-width="1.5"/>

      <!-- Law 4: Negative Power -->
      <rect x="390" y="125" width="130" height="32" rx="6" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
      <text x="455" y="146" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#9d174d" text-anchor="middle">a⁻ⁿ = 1 / aⁿ</text>
      <line x1="390" y1="135" x2="308" y2="110" stroke="#cbd5e1" stroke-width="1.5"/>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 2.1: Interconnected Rules Governing Exponential Manipulations</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch2-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Express the following in exponential form: <br>(i) 6 × 6 × 6 × 6 &nbsp;&nbsp; (ii) y × y &nbsp;&nbsp; (iii) b × b × b × b <br>(iv) 5 × 5 × 7 × 7 × 7 &nbsp;&nbsp; (v) 2 × 2 × a × a &nbsp;&nbsp; (vi) a × a × a × c × c × c × c × d</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Expression</th>
                <th>Exponential Form</th>
                <th>Base and Power Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>(i) 6 × 6 × 6 × 6</td>
                <td><strong>6⁴</strong></td>
                <td>Base 6, exponent 4</td>
              </tr>
              <tr>
                <td>(ii) y × y</td>
                <td><strong>y²</strong></td>
                <td>Base y, exponent 2</td>
              </tr>
              <tr>
                <td>(iii) b × b × b × b</td>
                <td><strong>b⁴</strong></td>
                <td>Base b, exponent 4</td>
              </tr>
              <tr>
                <td>(iv) 5 × 5 × 7 × 7 × 7</td>
                <td><strong>5² × 7³</strong></td>
                <td>Product of two prime powers</td>
              </tr>
              <tr>
                <td>(v) 2 × 2 × a × a</td>
                <td><strong>2² × a²</strong> (or <strong>(2a)²</strong>)</td>
                <td>Base 2 squared times base a squared</td>
              </tr>
              <tr>
                <td>(vi) a × a × a × c × c × c × c × d</td>
                <td><strong>a³ × c⁴ × d</strong></td>
                <td>Powers 3, 4, and 1 respectively</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct exponential representation</span><span class="marking-marks">0.33 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch2-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Express each of the following composite numbers as a product of powers of their prime factors: <br>(i) 648 &nbsp;&nbsp;&nbsp;&nbsp; (ii) 405 &nbsp;&nbsp;&nbsp;&nbsp; (iii) 540 &nbsp;&nbsp;&nbsp;&nbsp; (iv) 3600</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 648:</strong><br>
            648 = 2 × 324 = 2 × 2 × 162 = 2³ × 81 = 2³ × 3⁴.<br>
            <strong>648 = 2³ × 3⁴</strong>.
          </div>
          <div class="step">
            <strong>(ii) 405:</strong><br>
            405 = 5 × 81 = 5 × 3⁴.<br>
            <strong>405 = 3⁴ × 5¹</strong>.
          </div>
          <div class="step">
            <strong>(iii) 540:</strong><br>
            540 = 10 × 54 = (2 × 5) × (2 × 27) = 2² × 3³ × 5¹.<br>
            <strong>540 = 2² × 3³ × 5</strong>.
          </div>
          <div class="step">
            <strong>(iv) 3600:</strong><br>
            3600 = 36 × 100 = (2² × 3²) × (2² × 5²) = 2⁴ × 3² × 5².<br>
            <strong>3600 = 2⁴ × 3² × 5²</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct prime factorisation in exponential form</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch2-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Find the numerical value of each of the following: <br>(i) 2 × 10³ &nbsp;&nbsp; (ii) 7² × 2³ &nbsp;&nbsp; (iii) 3 × 4⁴ <br>(iv) (−3)² × (−5)² &nbsp;&nbsp; (v) 3² × 10⁴ &nbsp;&nbsp; (vi) (−2)⁵ × (−10)⁶</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 2 × 10³</strong> = 2 × 1000 = <strong>2,000</strong>.<br>
            • <strong>(ii) 7² × 2³</strong> = 49 × 8 = <strong>392</strong>.<br>
            • <strong>(iii) 3 × 4⁴</strong> = 3 × 256 = <strong>768</strong>.<br>
            • <strong>(iv) (−3)² × (−5)²</strong> = 9 × 25 = <strong>225</strong>.<br>
            • <strong>(v) 3² × 10⁴</strong> = 9 × 10,000 = <strong>90,000</strong>.<br>
            • <strong>(vi) (−2)⁵ × (−10)⁶</strong> = (−32) × 1,000,000 = <strong>−32,000,000</strong> (−3.2 × 10⁷).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation with proper sign</span><span class="marking-marks">0.5 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch2-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Find the units digit in the evaluated value of 2²²⁴ ÷ 4³². [Hint: Express base 4 in base 2 and use cyclicity].</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Step 1: Simplify the expression using power laws:</strong><br>
            Since 4 = 2², we have 4³² = (2²)³² = 2²ˣ³² = 2⁶⁴.<br>
            Now: 2²²⁴ ÷ 4³² = 2²²⁴ ÷ 2⁶⁴ = 2²²⁴⁻⁶⁴ = <strong>2¹⁶⁰</strong>.
          </div>
          <div class="step">
            <strong>Step 2: Find the units digit using cyclicity of 2:</strong><br>
            The units digits of powers of 2 repeat in a cycle of length 4:<br>
            • 2¹ = 2 (unit digit 2)<br>
            • 2² = 4 (unit digit 4)<br>
            • 2³ = 8 (unit digit 8)<br>
            • 2⁴ = 16 (unit digit 6)<br>
            Cycle = {2, 4, 8, 6}.<br>
            Divide the exponent 160 by 4: 160 ÷ 4 = 40 (Remainder = 0).<br>
            A remainder of 0 corresponds to the 4th position in the cycle, which is <strong>6</strong>.
          </div>
          <p><strong>Answer:</strong> The units digit of 2²²⁴ ÷ 4³² is <strong>6</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Simplifying to 2¹⁶⁰ using exponent laws</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Using cyclicity of 4 to deduce units digit 6</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch2-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">There are 5 bottles in a container. Every day, a new container is brought into a storehouse. How many total bottles will be in the storehouse after 40 days?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Given:</strong><br>
            • Number of bottles per container = 5<br>
            • Number of containers added per day = 1<br>
            • Number of days = 40 days
          </div>
          <div class="step">
            <strong>Calculation:</strong><br>
            Total containers accumulated in 40 days = 40 × 1 = 40 containers.<br>
            Total number of bottles = 40 containers × 5 bottles/container = <strong>200 bottles</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Setting up product 40 × 5</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Final answer 200 bottles</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch2-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Write each given expression as the product of two or more powers in three different ways: <br>(i) 64³ &nbsp;&nbsp;&nbsp;&nbsp; (ii) 192⁸ &nbsp;&nbsp;&nbsp;&nbsp; (iii) 32⁻⁵</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>(i) 64³:</strong><br>
            Since 64 = 2⁶, 64³ = (2⁶)³ = 2¹⁸.<br>
            • Way 1: 2¹⁰ × 2⁸<br>
            • Way 2: (2³ × 2³)² = 8² × 8⁴ = 8⁶<br>
            • Way 3: (4³)³ = 4⁹ = 4⁴ × 4⁵
          </div>
          <div class="step">
            <strong>(ii) 192⁸:</strong><br>
            192 = 64 × 3 = 2⁶ × 3¹.<br>
            So 192⁸ = (2⁶ × 3)⁸ = 2⁴⁸ × 3⁸.<br>
            • Way 1: 2⁴⁸ × 3⁸<br>
            • Way 2: 64⁸ × 3⁸<br>
            • Way 3: (2⁶)⁸ × 3⁸ = (2²⁴)² × 3⁸
          </div>
          <div class="step">
            <strong>(iii) 32⁻⁵:</strong><br>
            32 = 2⁵, so 32⁻⁵ = (2⁵)⁻⁵ = 2⁻²⁵.<br>
            • Way 1: 2⁻¹⁵ × 2⁻¹⁰<br>
            • Way 2: (2⁻⁵)⁵<br>
            • Way 3: (1/2)²⁵ = (1/4)¹² × (1/2)¹
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Three valid representations for each part</span><span class="marking-marks">1 Mark per part (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch2-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Examine each statement below and state whether it is 'Always True', 'Only Sometimes True', or 'Never True'. Give mathematical justification: <br>(i) Cube numbers are also square numbers. <br>(ii) Fourth powers are also square numbers. <br>(iii) The fifth power of a number is divisible by the cube of that number. <br>(iv) The product of two cube numbers is a cube number. <br>(v) q⁴⁶ is both a 4th power and a 6th power (where q is a prime number).</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <table class="data-table">
            <thead>
              <tr>
                <th>Statement</th>
                <th>Classification</th>
                <th>Mathematical Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>(i) Cube numbers are square numbers.</td>
                <td><strong>Only Sometimes True</strong></td>
                <td>64 = 4³ = 8² is both; but 8 = 2³ or 27 = 3³ are cubes that are not squares. Only numbers of form k⁶ are both.</td>
              </tr>
              <tr>
                <td>(ii) Fourth powers are square numbers.</td>
                <td><strong>Always True</strong></td>
                <td>For any integer n, n⁴ = (n²)², which is always the square of n².</td>
              </tr>
              <tr>
                <td>(iii) Fifth power is divisible by cube.</td>
                <td><strong>Always True</strong></td>
                <td>a⁵ ÷ a³ = a⁵⁻³ = a² (an integer for any integer a ≠ 0).</td>
              </tr>
              <tr>
                <td>(iv) Product of two cubes is a cube.</td>
                <td><strong>Always True</strong></td>
                <td>a³ × b³ = (ab)³, which is the cube of the product ab.</td>
              </tr>
              <tr>
                <td>(v) q⁴⁶ is both 4th and 6th power.</td>
                <td><strong>Never True</strong></td>
                <td>For qᵐ to be both a 4th and 6th power, the exponent m must be a multiple of LCM(4, 6) = 12. 46 is not divisible by 12 (nor by 4). Hence impossible.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correctly categorizing all 5 statements with algebraic rationale</span><span class="marking-marks">0.6 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch2-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Simplify and write in exponential form: <br>(i) 10⁻² × 10⁻⁵ &nbsp;&nbsp;&nbsp;&nbsp; (ii) 5⁷ ÷ 5⁴ &nbsp;&nbsp;&nbsp;&nbsp; (iii) 9⁻⁷ ÷ 9⁴ <br>(iv) (13⁻²)⁻³ &nbsp;&nbsp;&nbsp;&nbsp; (v) m⁵ n¹² (mn)⁹</div>
      <div class="q-marks">[2.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 10⁻² × 10⁻⁵</strong> = 10^(−2 + (−5)) = <strong>10⁻⁷</strong> (or 1 / 10⁷).<br>
            • <strong>(ii) 5⁷ ÷ 5⁴</strong> = 5^(7 − 4) = <strong>5³</strong> (125).<br>
            • <strong>(iii) 9⁻⁷ ÷ 9⁴</strong> = 9^(−7 − 4) = <strong>9⁻¹¹</strong> (or 1 / 9¹¹).<br>
            • <strong>(iv) (13⁻²)⁻³</strong> = 13^(−2 × −3) = <strong>13⁶</strong>.<br>
            • <strong>(v) m⁵ n¹² (mn)⁹</strong> = m⁵ × n¹² × m⁹ × n⁹ = m^(5 + 9) × n^(12 + 9) = <strong>m¹⁴ n²¹</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct exponential simplification</span><span class="marking-marks">0.5 Mark each (Total 2.5 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch2-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">If 12² = 144, evaluate the following using decimal power rules without long multiplication: <br>(i) (1.2)² &nbsp;&nbsp;&nbsp;&nbsp; (ii) (0.12)² &nbsp;&nbsp;&nbsp;&nbsp; (iii) (0.012)² &nbsp;&nbsp;&nbsp;&nbsp; (iv) 120²</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) (1.2)²:</strong> (12 / 10)² = 144 / 100 = <strong>1.44</strong> (2 decimal places).<br>
            • <strong>(ii) (0.12)²:</strong> (12 / 100)² = 144 / 10,000 = <strong>0.0144</strong> (4 decimal places).<br>
            • <strong>(iii) (0.012)²:</strong> (12 / 1000)² = 144 / 1,000,000 = <strong>0.000144</strong> (6 decimal places).<br>
            • <strong>(iv) 120²:</strong> (12 × 10)² = 12² × 10² = 144 × 100 = <strong>14,400</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct decimal square</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch2-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Identify and group all expressions among the following that have the exact same value: <br>• 2⁴ × 3⁶ &nbsp;&nbsp;&nbsp;&nbsp; • 6⁴ × 3² &nbsp;&nbsp;&nbsp;&nbsp; • 6¹⁰ &nbsp;&nbsp;&nbsp;&nbsp; • 18² × 6² &nbsp;&nbsp;&nbsp;&nbsp; • 6²⁴</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Express each term into prime bases 2 and 3:</strong><br>
            1. <strong>2⁴ × 3⁶</strong> (already in prime base form).<br>
            2. <strong>6⁴ × 3²:</strong> (2 × 3)⁴ × 3² = 2⁴ × 3⁴ × 3² = <strong>2⁴ × 3⁶</strong>.<br>
            3. <strong>6¹⁰:</strong> (2 × 3)¹⁰ = 2¹⁰ × 3¹⁰.<br>
            4. <strong>18² × 6²:</strong> (2 × 3²)² × (2 × 3)² = (2² × 3⁴) × (2² × 3²) = 2⁴ × 3⁶ = <strong>2⁴ × 3⁶</strong>.<br>
            5. <strong>6²⁴:</strong> 2²⁴ × 3²⁴.<br><br>
            <strong>Conclusion:</strong> The three expressions <strong>(2⁴ × 3⁶)</strong>, <strong>(6⁴ × 3²)</strong>, and <strong>(18² × 6²)</strong> are all identical in value.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Converting each expression to prime base 2 and 3</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Concluding equivalence of 2⁴×3⁶, 6⁴×3², and 18²×6²</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q11 -->
  <div class="q-card" id="c8m-ch2-q11">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q11')">
      <div class="q-num">Q11</div>
      <div class="q-text">Identify the greater number in each pair: <br>(i) 4³ or 3⁴ &nbsp;&nbsp;&nbsp;&nbsp; (ii) 2⁸ or 8² &nbsp;&nbsp;&nbsp;&nbsp; (iii) 100² or 2¹⁰⁰</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 4³ vs 3⁴:</strong><br>
            4³ = 4 × 4 × 4 = 64.<br>
            3⁴ = 3 × 3 × 3 × 3 = 81.<br>
            Since 81 &gt; 64, <strong>3⁴ &gt; 4³</strong>.
          </div>
          <div class="step">
            • <strong>(ii) 2⁸ vs 8²:</strong><br>
            2⁸ = 256.<br>
            8² = 64.<br>
            Since 256 &gt; 64, <strong>2⁸ &gt; 8²</strong>.
          </div>
          <div class="step">
            • <strong>(iii) 100² vs 2¹⁰⁰:</strong><br>
            100² = 10,000 = 10⁴.<br>
            2¹⁰⁰ = (2¹⁰)¹⁰ = (1024)¹⁰ &gt; (1000)¹⁰ = (10³)¹⁰ = 10³⁰.<br>
            Clearly, 10³⁰ is vastly larger than 10⁴. Hence, <strong>2¹⁰⁰ &gt; 100²</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Evaluations for (i) 3⁴ and (ii) 2⁸</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Exponential reasoning for (iii) 2¹⁰⁰ &gt; 100²</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q12 -->
  <div class="q-card" id="c8m-ch2-q12">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q12')">
      <div class="q-num">Q12</div>
      <div class="q-text">A dairy plans to produce 8.5 billion packets of milk in a year. They want a unique numerical ID code for each packet using only the decimal digits 0–9. What is the minimum number of digits each code must consist of?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Packets Produced:</strong><br>
            8.5 billion = 8.5 × 10⁹ = 8,500,000,000 packets.
          </div>
          <div class="step">
            <strong>2. Capacity of an n-digit code:</strong><br>
            Using 10 decimal digits (0–9), an <em>n</em>-digit code allows <code>10ⁿ</code> unique combinations.<br>
            We require: <code>10ⁿ ≥ 8.5 × 10⁹</code>.<br>
            • If <em>n = 9</em>: 10⁹ = 1,000,000,000 (only 1 billion, which is strictly less than 8.5 billion).<br>
            • If <em>n = 10</em>: 10¹⁰ = 10,000,000,000 (10 billion, which comfortably exceeds 8.5 billion).
          </div>
          <p><strong>Answer:</strong> The code must have a minimum of <strong>10 digits</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Writing 8.5 billion in powers of 10</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Setting up 10ⁿ &gt; 8.5 × 10⁹ and finding n = 10 digits</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q13 -->
  <div class="q-card" id="c8m-ch2-q13">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q13')">
      <div class="q-num">Q13</div>
      <div class="q-text">64 is both a square number (8²) and a cube number (4³). Are there other numbers that are both squares and cubes? How can such numbers be described in general using exponent laws?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. General Exponent Rule:</strong><br>
            A number <em>N</em> is both a perfect square (<em>a²</em>) and a perfect cube (<em>b³</em>) if its prime powers are multiples of both 2 and 3.<br>
            Since LCM(2, 3) = 6, any such number must be a <strong>sixth power</strong>: <code>N = k⁶</code> for some integer <em>k</em>.
          </div>
          <div class="step">
            <strong>2. Examples of Numbers that are Both Squares and Cubes:</strong><br>
            • <em>k = 1:</em> 1⁶ = 1² = 1³ = <strong>1</strong><br>
            • <em>k = 2:</em> 2⁶ = (2³)² = 8² = 64, and 2⁶ = (2²)³ = 4³ = <strong>64</strong><br>
            • <em>k = 3:</em> 3⁶ = (3³)² = 27² = 729, and 3⁶ = (3²)³ = 9³ = <strong>729</strong><br>
            • <em>k = 4:</em> 4⁶ = (4³)² = 64² = 4096, and (4²)³ = 16³ = <strong>4096</strong><br>
            • <em>k = 5:</em> 5⁶ = 125² = 25³ = <strong>15625</strong>.
          </div>
          <p><strong>Conclusion:</strong> In general, all numbers of the form <strong>k⁶</strong> are both square numbers and cube numbers.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Deriving general form N = k⁶ via LCM(2, 3) = 6</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Providing examples (1, 64, 729, 4096)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q14 -->
  <div class="q-card" id="c8m-ch2-q14">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q14')">
      <div class="q-num">Q14</div>
      <div class="q-text">A digital smart locker uses an alphanumeric passcode of length 5 (each character can be any of 26 uppercase English letters A–Z or 10 digits 0–9). How many distinct passcodes are possible? Express in exponential form and compute its value.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Choices per character position:</strong><br>
            Total possible characters = 26 letters (A–Z) + 10 digits (0–9) = <strong>36 choices</strong>.
          </div>
          <div class="step">
            <strong>2. Total Passcodes of Length 5:</strong><br>
            By fundamental principle of counting, for 5 positions:<br>
            Total Passcodes = 36 × 36 × 36 × 36 × 36 = <strong>36⁵</strong>.<br>
            Computing value: 36⁵ = <strong>60,466,176</strong> (over 6 crore distinct passcodes).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Total choices per slot = 36 and expression 36⁵</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculating 60,466,176</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q15 -->
  <div class="q-card" id="c8m-ch2-q15">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q15')">
      <div class="q-num">Q15</div>
      <div class="q-text">The worldwide population of sheep is approximately 10⁹ and that of goats is also about 10⁹. What is the total combined population of sheep and goats? Choose all correct forms: <br>(i) 20⁹ &nbsp;&nbsp; (ii) 10¹¹ &nbsp;&nbsp; (iii) 10¹⁰ &nbsp;&nbsp; (iv) 10¹⁸ &nbsp;&nbsp; (v) 2 × 10⁹ &nbsp;&nbsp; (vi) 10⁹ + 10⁹</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Calculation:</strong><br>
            Total = Population of sheep + Population of goats<br>
            Total = 10⁹ + 10⁹<br>
            Factoring out 10⁹: 10⁹(1 + 1) = <strong>2 × 10⁹</strong>.<br>
            Common Error Warning: Exponents cannot be added when bases are added (10⁹ + 10⁹ ≠ 10¹⁸ and ≠ 20⁹).
          </div>
          <p><strong>Correct Options:</strong> <strong>(v) 2 × 10⁹</strong> and <strong>(vi) 10⁹ + 10⁹</strong>.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Showing 10⁹ + 10⁹ = 2 × 10⁹</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Selecting options (v) and (vi)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q16 -->
  <div class="q-card" id="c8m-ch2-q16">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q16')">
      <div class="q-num">Q16</div>
      <div class="q-text">Calculate and express each of the following in standard scientific notation (k × 10ᵐ): <br>(i) Total pieces of clothing in the world if each of 8 × 10⁹ humans owns 30 pieces. <br>(ii) Total honeybees in the world if there are 100 million colonies each with 50,000 bees. <br>(iii) Total bacterial cells in all humans if each human body hosts 38 trillion bacterial cells (human population ≈ 8 × 10⁹). <br>(iv) Total seconds spent eating in a 70-year lifespan (average 1.5 hours/day).</div>
      <div class="q-marks">[4 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) Total Clothing:</strong><br>
            30 × (8 × 10⁹) = 240 × 10⁹ = <strong>2.4 × 10¹¹ pieces</strong>.
          </div>
          <div class="step">
            • <strong>(ii) Total Honeybees:</strong><br>
            Colonies = 100 million = 10⁸.<br>
            Bees per colony = 50,000 = 5 × 10⁴.<br>
            Total = (10⁸) × (5 × 10⁴) = <strong>5 × 10¹² bees</strong>.
          </div>
          <div class="step">
            • <strong>(iii) Total Bacterial Population:</strong><br>
            Bacteria per body = 38 trillion = 3.8 × 10¹³.<br>
            Total = (8 × 10⁹) × (3.8 × 10¹³) = 30.4 × 10²² = <strong>3.04 × 10²³ bacterial cells</strong>.
          </div>
          <div class="step">
            • <strong>(iv) Seconds Spent Eating:</strong><br>
            Daily eating time = 1.5 h = 1.5 × 3600 s = 5400 seconds/day.<br>
            Days in 70 years = 70 × 365 = 25,550 days.<br>
            Total seconds = 5400 × 25550 = 137,970,000 seconds = <strong>1.3797 × 10⁸ seconds</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct evaluation in scientific notation</span><span class="marking-marks">1 Mark each (Total 4 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q17 -->
  <div class="q-card" id="c8m-ch2-q17">
    <div class="q-head" onclick="toggleQ('c8m-ch2-q17')">
      <div class="q-num">Q17</div>
      <div class="q-text">How long is 1 billion (10⁹ / 1 Arab) seconds? Convert it into years, and determine approximately what year it was 1 billion seconds ago.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Seconds in One Year:</strong><br>
            Seconds in 1 minute = 60 s<br>
            Seconds in 1 hour = 60 × 60 = 3600 s<br>
            Seconds in 1 day = 24 × 3600 = 86,400 s<br>
            Seconds in 1 regular year (365 days) = 365 × 86400 = 31,536,000 s (approx. 3.15 × 10⁷ s).
          </div>
          <div class="step">
            <strong>2. Converting 10⁹ seconds into years:</strong><br>
            Years = 1,000,000,000 ÷ 31,536,000 ≈ <strong>31.7 years</strong> (approx. 31 years and 8 months).
          </div>
          <div class="step">
            <strong>3. Historical Reference:</strong><br>
            From the 2026 academic year, 31.7 years ago corresponds to approximately late <strong>1994</strong>!
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating seconds per year (31,536,000 s)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Deducing 31.7 years and approx. 1994</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Computer Data Storage &amp; Powers of 2 Case Study)</div>
    <div class="q-text"><strong>Case Study: Binary Memory &amp; Powers of Two in Computing:</strong><br>
      Computers represent all text, audio, and video using binary bits (0 or 1). Memory architectures scale in powers of 2 rather than powers of 10. <br>
      • 1 Byte = 8 bits = 2³ bits<br>
      • 1 Kilobyte (KB) = 2¹⁰ bytes = 1,024 bytes<br>
      • 1 Megabyte (MB) = 2²⁰ bytes = 1,048,576 bytes<br>
      • 1 Gigabyte (GB) = 2³⁰ bytes<br>
      (a) Express the number of bytes in a 16 GB memory stick as a single power of 2.<br>
      (b) If an MP3 audio track is 4 MB in size, how many such tracks can be stored in 16 GB of memory? Use exponent laws.<br>
      (c) Why do hard drive manufacturers state 1 GB = 10⁹ bytes while operating systems read 1 GB = 2³⁰ bytes?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Bytes in 16 GB in base 2:</strong><br>
        16 = 2⁴, and 1 GB = 2³⁰ bytes.<br>
        Total bytes = 16 × 1 GB = 2⁴ × 2³⁰ = <strong>2³⁴ bytes</strong> (17,179,869,184 bytes).</p>

        <p><strong>(b) Tracks calculation using index division:</strong><br>
        Size of 1 track = 4 MB = 2² × 2²⁰ = 2²² bytes.<br>
        Number of tracks = Total Capacity ÷ Size per track = 2³⁴ ÷ 2²² = 2^(34 − 22) = <strong>2¹² tracks = 4,096 audio tracks</strong>.</p>

        <p><strong>(c) Discrepancy between Decimal and Binary Definitions:</strong><br>
        Manufacturers use decimal SI prefixes (1 GB = 10⁹ = 1,000,000,000 bytes) for marketing simplicity. Operating systems (Windows, Linux) allocate memory using binary addresses (1 GiB = 2³⁰ = 1,073,741,824 bytes). Thus, a drive marketed as 16 GB (1.6 × 10¹⁰ bytes) appears as approximately 14.9 GiB in the operating system.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch2.html'), ch2Html, 'utf8');
console.log('Chapter 2 correctly written with 17 questions + CBQ.');
