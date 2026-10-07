const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

// ==========================================
// CHAPTER 3: A Story of Numbers (15 Questions + CBQ)
// ==========================================
const ch3Html = `<section class="chapter-section" id="ch3">
  <div class="chapter-header">
    <div class="ch-badge">3</div>
    <div class="chapter-header-info">
      <h2>Chapter 3: A Story of Numbers</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 1) — History of Number Systems, Egyptian, Roman, Positional Base-5 &amp; Base-4, Place Value &amp; Landmark Numbers | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Historical &amp; Mathematical Number Systems</div>
    <ul class="concept-list">
      <li><strong>Evolution of Counting:</strong> Tally marks, Gumulgal binary counting (urapon = 1, ukasar = 2), Egyptian hieroglyphic additive system, Roman numerals, and the revolutionary Hindu-Arabic decimal positional system.</li>
      <li><strong>Additive vs Positional Systems:</strong>
        <ul>
          <li><em>Additive Systems (Egyptian, Roman):</em> Symbols have fixed values regardless of position. Values are summed together (e.g., Roman: XVI = 10 + 5 + 1 = 16). They require ever-new symbols for larger numbers and lack a zero placeholder.</li>
          <li><em>Positional Systems (Decimal, Base-5, Base-2):</em> The value of a symbol depends on its position (place value). Uses a base <em>b</em> and landmark numbers (powers of base: b⁰, b¹, b², b³...). Requires a dedicated symbol for <strong>Zero (0)</strong>.</li>
        </ul>
      </li>
      <li><strong>7 Hallmarks of the Hindu-Arabic Decimal System:</strong> Positional place value, zero as number and placeholder, base 10 (ten fingers), compact representation of huge numbers, simple algorithmic calculation rules (+, −, ×, ÷), and universal standardization.</li>
    </ul>
  </div>

  <!-- SVG Diagram 3: Evolution of Numeral Representations -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 600px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Comparative Evolution of Number Representation Systems</text>
      
      <!-- Box 1: Tally Sticks -->
      <rect x="30" y="45" width="100" height="80" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="80" y="68" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">Tally / Sticks</text>
      <text x="80" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#64748b" text-anchor="middle">|||| |||| ||</text>
      <text x="80" y="112" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#94a3b8" text-anchor="middle">No place value</text>

      <!-- Box 2: Roman -->
      <rect x="155" y="45" width="100" height="80" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="205" y="68" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#92400e" text-anchor="middle">Roman</text>
      <text x="205" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#b45309" text-anchor="middle">XII = 10+1+1</text>
      <text x="205" y="112" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#d97706" text-anchor="middle">Additive (No 0)</text>

      <!-- Box 3: Base-5 -->
      <rect x="280" y="45" width="110" height="80" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="335" y="68" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b21b6" text-anchor="middle">Base-5 (Penta)</text>
      <text x="335" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#7c3aed" text-anchor="middle">(22)₅ = 2×5+2</text>
      <text x="335" y="112" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#8b5cf6" text-anchor="middle">Powers of 5</text>

      <!-- Box 4: Hindu-Arabic -->
      <rect x="410" y="40" width="110" height="90" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="465" y="64" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" fill="#15803d" text-anchor="middle">Hindu-Arabic</text>
      <text x="465" y="86" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#166534" text-anchor="middle">12 (1×10+2)</text>
      <text x="465" y="104" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#15803d" text-anchor="middle">Zero + Base 10</text>
      <text x="465" y="118" font-family="system-ui, sans-serif" font-size="8" font-weight="600" fill="#16a34a" text-anchor="middle">Optimal Standard ✓</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 3.1: Structural Comparison of Additive vs Place-Value Numeral Frameworks</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch3-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Suppose you are using a tally stick system to represent numbers. Without using any numeral symbols, describe physical methods for performing: (i) Addition, (ii) Subtraction, (iii) Multiplication, and (iv) Division on collections of sticks.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) Addition (Combining Sets):</strong> Place the first collection of sticks together with the second collection into one single heap. The combined heap physically represents the sum. (e.g., |||| and ||| merged together form |||||||).<br><br>
            • <strong>(ii) Subtraction (Taking Away / Matching):</strong> From the larger heap, pair off and remove sticks one-by-one corresponding to each stick in the smaller heap. The remaining unpaired sticks represent the difference.<br><br>
            • <strong>(iii) Multiplication (Repeated Grouping):</strong> For <em>a × b</em>, create <em>a</em> separate heaps, each containing exactly <em>b</em> sticks. Collect all heaps together; the grand total count is the product.<br><br>
            • <strong>(iv) Division (Equal Sharing / Partitioning):</strong> To divide a heap into <em>n</em> parts, distribute sticks one by one into <em>n</em> piles until no full round can be made. The number of sticks in each pile is the quotient, and any leftover sticks represent the remainder.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Clear conceptual description of all 4 operations</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch3-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">One method of extending a single-letter system (a = 1, b = 2, ..., z = 26) is by using two-letter strings, such as 'aa' for 27. How can this system be systematically extended to represent any natural number? Explain its connection to base-26.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Base-26 Positional Interpretation:</strong><br>
            Just as the decimal system uses 10 digits (0–9) and advances to two digits (10 to 99), an alphabet system uses 26 letters (a to z).<br>
            • Length 1 strings: 'a' (1) to 'z' (26) → 26 numbers.<br>
            • Length 2 strings: 'aa' (27 = 1 × 26 + 1), 'ab' (28), ..., 'az' (52), 'ba' (53), ..., 'zz' (26 × 26 + 26 = 702).<br>
            • Length 3 strings: 'aaa' (703) to 'zzz' (26³ + 26² + 26 = 18,278).
          </div>
          <div class="step">
            <strong>2. Connection to Excel Column Names:</strong><br>
            This exact systematic bijective base-26 notation is used in modern computer spreadsheets (Microsoft Excel, Google Sheets) to label columns beyond Z (AA, AB... ZZ, AAA...).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining base-26 expansion logic</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Spreadsheet column connection and multi-letter string values</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch3-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Create your own positional number system called the "ABCDE System" using 5 symbols: A = 0, B = 1, C = 2, D = 3, E = 4. Explain how place value works in this base-5 system and evaluate the number 'BDC'.</div>
      <div class="q-marks">[2.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Place Values in Base-5:</strong><br>
            In a base-5 system, place values from right to left increase in powers of 5:<br>
            • 1st position (units): 5⁰ = 1<br>
            • 2nd position (fives): 5¹ = 5<br>
            • 3rd position (twenty-fives): 5² = 25<br>
            • 4th position: 5³ = 125, etc.
          </div>
          <div class="step">
            <strong>2. Evaluating 'BDC':</strong><br>
            Symbols: B = 1, D = 3, C = 2.<br>
            Value = (B × 5²) + (D × 5¹) + (C × 5⁰)<br>
            Value = (1 × 25) + (3 × 5) + (2 × 1)<br>
            Value = 25 + 15 + 2 = <strong>42</strong> (in standard decimal).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating base-5 place values (1, 5, 25, 125)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculating value of BDC = 42</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch3-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Represent the following numbers in Roman numerals: <br>(i) 1222 &nbsp;&nbsp;&nbsp;&nbsp; (ii) 2999 &nbsp;&nbsp;&nbsp;&nbsp; (iii) 302 &nbsp;&nbsp;&nbsp;&nbsp; (iv) 715</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            Roman symbols: M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1.<br>
            • <strong>(i) 1222:</strong> 1000 + 200 + 20 + 2 = M + CC + XX + II = <strong>MCCXXII</strong>.<br>
            • <strong>(ii) 2999:</strong> 2000 + 900 + 90 + 9 = MM + CM + XC + IX = <strong>MMCMXCIX</strong>.<br>
            • <strong>(iii) 302:</strong> 300 + 2 = CCC + II = <strong>CCCII</strong>.<br>
            • <strong>(iv) 715:</strong> 700 + 10 + 5 = DCC + X + V = <strong>DCCXV</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct Roman numeral translation</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch3-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">A group of indigenous people on a Pacific island use different sequences of number words depending on whether they are counting coconuts, fish, or days. Why do you think their culture developed this practice?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Anthropological and Linguistic Reasons:</strong><br>
            1. <strong>Embedded Qualitative Context:</strong> In many early languages, numbers were not abstract entities isolated from reality; counting was deeply intertwined with the physical nature of the object (e.g., counting pairs of fish vs heaps of coconuts vs cycles of days).<br>
            2. <strong>Practical Grouping and Trading:</strong> Coconuts are bundled in fours or tens, while fish are strung in pairs. Specialized counting words served as an inherent measurement unit, preventing trading errors in oral communication before written bookkeeping existed.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explanation of numbers tied to concrete physical categories</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Role in trade, bundling, and cultural measurement</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch3-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">In the Gumulgal number system, counting is done in groups of two: 'urapon' = 1, 'ukasar' = 2, 'ukasar-urapon' = 3 (2+1), 'ukasar-ukasar' = 4 (2+2), etc. Evaluate the following operations directly: <br>(i) (ukasar-ukasar-ukasar-ukasar-urapon) + (ukasar-ukasar-ukasar-urapon) <br>(ii) (ukasar-ukasar-ukasar-ukasar-urapon) − (ukasar-ukasar-ukasar) <br>(iii) (ukasar-ukasar-ukasar-ukasar-urapon) × (ukasar-ukasar)</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Translation to numerical values:</strong><br>
            • Term A: 4 ukasars + 1 urapon = (4 × 2) + 1 = <strong>9</strong>.<br>
            • Term B: 3 ukasars + 1 urapon = (3 × 2) + 1 = <strong>7</strong>.<br>
            • Term C: 3 ukasars = 3 × 2 = <strong>6</strong>.<br>
            • Term D: 2 ukasars = 2 × 2 = <strong>4</strong>.
          </div>
          <div class="step">
            <strong>Operations:</strong><br>
            • <strong>(i) Addition:</strong> 9 + 7 = 16. In Gumulgal, 16 = 8 ukasars = <strong>ukasar-ukasar-ukasar-ukasar-ukasar-ukasar-ukasar-ukasar</strong>.<br>
            • <strong>(ii) Subtraction:</strong> 9 − 6 = 3. In Gumulgal, 3 = <strong>ukasar-urapon</strong>.<br>
            • <strong>(iii) Multiplication:</strong> 9 × 4 = 36. In Gumulgal, 36 = 18 ukasars.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Translating Gumulgal expressions into decimal equivalents</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Evaluating and writing back in Gumulgal terms</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch3-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">Identify and explain 5 distinct structural features of the Hindu-Arabic decimal numeral system that make it vastly superior and more computationally efficient than the Roman numeral system.</div>
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
                <th>Feature</th>
                <th>Hindu-Arabic Decimal System</th>
                <th>Roman Numeral System</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Place Value Principle</strong></td>
                <td>Value of a digit depends on its position (units, tens, hundreds).</td>
                <td>Non-positional additive/subtractive; symbols have rigid fixed values.</td>
              </tr>
              <tr>
                <td><strong>2. Role of Zero (0)</strong></td>
                <td>Zero functions as both an independent number and an essential placeholder.</td>
                <td>No zero exists; cannot represent an empty place value.</td>
              </tr>
              <tr>
                <td><strong>3. Economy of Symbols</strong></td>
                <td>Only 10 basic symbols (0–9) can represent any number, however large.</td>
                <td>Requires new letter symbols (I, V, X, L, C, D, M) and becomes unmanageable for huge numbers.</td>
              </tr>
              <tr>
                <td><strong>4. Arithmetic Efficiency</strong></td>
                <td>Vertical column addition, long multiplication, and division algorithms are simple and fast.</td>
                <td>Simple arithmetic operations like CCXLVIII × LXXIV are excruciatingly slow and impractical.</td>
              </tr>
              <tr>
                <td><strong>5. Compactness</strong></td>
                <td>Every number has a concise, unique, standard representation (e.g., 2999).</td>
                <td>Lengthy and cumbersome strings (e.g., MMCMXCIX).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing 5 distinct comparative features with explanations</span><span class="marking-marks">0.6 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch3-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Why was the invention of a dedicated symbol for Zero ('Shunya') the most critical breakthrough in the history of mathematics? Explain its dual mathematical role.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>The Dual Role of Zero:</strong><br>
            1. <strong>As a Positional Placeholder:</strong> Without zero, it is impossible to distinguish between numbers like 5, 50, 500, and 505 in a positional system without ambiguous spacing. Zero preserves the correct powers of ten in empty columns.<br>
            2. <strong>As an Algebraic Number:</strong> Ancient Indian mathematicians (Brahmagupta in 628 CE) formally defined zero as an actual number with defined arithmetic operations: <code>a + 0 = a</code>, <code>a − a = 0</code>, <code>a × 0 = 0</code>, enabling negative integers, algebraic equations, and modern calculus.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explaining placeholder function in place-value systems</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining zero as an algebraic quantity with rules of arithmetic</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch3-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">In ancient Egyptian hieroglyphic numerals: Staff = 1, Heel bone = 10, Coiled rope = 100, Lotus flower = 1000, Pointing finger = 10,000. Describe the Egyptian representation for: (i) 10,458, (ii) 1,023, and (iii) 784.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) 10,458:</strong><br>
            10,000 + 400 + 50 + 8<br>
            = 1 Pointing Finger (10,000) + 4 Coiled Ropes (400) + 5 Heel Bones (50) + 8 Staffs (8).<br><br>
            • <strong>(ii) 1,023:</strong><br>
            1000 + 20 + 3 (Note: No coiled ropes since hundreds digit is 0!)<br>
            = 1 Lotus Flower (1000) + 2 Heel Bones (20) + 3 Staffs (3).<br><br>
            • <strong>(iii) 784:</strong><br>
            700 + 80 + 4<br>
            = 7 Coiled Ropes (700) + 8 Heel Bones (80) + 4 Staffs (4).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct Egyptian symbol breakdown</span><span class="marking-marks">1 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch3-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Convert the following decimal numbers into the base-5 (quinary) system: <br>(i) 15 &nbsp;&nbsp;&nbsp;&nbsp; (ii) 50 &nbsp;&nbsp;&nbsp;&nbsp; (iii) 137 &nbsp;&nbsp;&nbsp;&nbsp; (iv) 293</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Method of Successive Division by 5:</strong><br>
            • <strong>(i) 15:</strong><br>
            15 ÷ 5 = 3 with remainder <strong>0</strong>; 3 ÷ 5 = 0 with remainder <strong>3</strong>.<br>
            Reading remainders bottom-to-top: 15₁₀ = <strong>(30)₅</strong>. (3 × 5 + 0 = 15).<br><br>
            • <strong>(ii) 50:</strong><br>
            50 ÷ 5 = 10 rem <strong>0</strong>; 10 ÷ 5 = 2 rem <strong>0</strong>; 2 ÷ 5 = 0 rem <strong>2</strong>.<br>
            50₁₀ = <strong>(200)₅</strong>. (2 × 25 + 0 + 0 = 50).<br><br>
            • <strong>(iii) 137:</strong><br>
            137 ÷ 5 = 27 rem <strong>2</strong>; 27 ÷ 5 = 5 rem <strong>2</strong>; 5 ÷ 5 = 1 rem <strong>0</strong>; 1 ÷ 5 = 0 rem <strong>1</strong>.<br>
            137₁₀ = <strong>(1022)₅</strong>. (1×125 + 0×25 + 2×5 + 2 = 137).<br><br>
            • <strong>(iv) 293:</strong><br>
            293 ÷ 5 = 58 rem <strong>3</strong>; 58 ÷ 5 = 11 rem <strong>3</strong>; 11 ÷ 5 = 2 rem <strong>1</strong>; 2 ÷ 5 = 0 rem <strong>2</strong>.<br>
            293₁₀ = <strong>(2133)₅</strong>. (2×125 + 1×25 + 3×5 + 3 = 250 + 25 + 15 + 3 = 293).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Division steps and remainders for each number</span><span class="marking-marks">0.75 Mark each (Total 3 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q11 -->
  <div class="q-card" id="c8m-ch3-q11">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q11')">
      <div class="q-num">Q11</div>
      <div class="q-text">Is there any natural number that cannot be represented in a base-5 positional number system? Why or why not? Give a clear mathematical proof.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Proof of Completeness:</strong><br>
            <strong>No, there is NO natural number that cannot be represented in base-5.</strong><br>
            1. By the Euclidean Division Algorithm, any positive integer <em>N</em> can be successively divided by 5, producing unique remainders <em>r₀, r₁, r₂, ...</em> where each remainder is strictly an element of {0, 1, 2, 3, 4}.<br>
            2. The sequence of powers of 5 (1, 5, 25, 125, 625, 3125...) grows without upper bound (unbounded). For any given number <em>N</em>, there always exists a power <em>5ᵏ &gt; N</em>.<br>
            3. Therefore, every natural number has a unique, finite positional expansion in base-5: <code>N = dₖ·5ᵏ + ... + d₁·5¹ + d₀·5⁰</code>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating 'No' with Euclidean division remainder property</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Unbounded growth of powers of 5 and unique representation</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q12 -->
  <div class="q-card" id="c8m-ch3-q12">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q12')">
      <div class="q-num">Q12</div>
      <div class="q-text">What are the "landmark numbers" of a base-7 system? In general, define what the landmark numbers of any base-n positional system are.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Definition:</strong><br>
            In any positional number system of base <em>n</em>, the <strong>landmark numbers</strong> are the consecutive integer powers of the base: <code>n⁰, n¹, n², n³, n⁴, ...</code>. In base 10, landmark numbers are 1, 10, 100, 1000, 10000...
          </div>
          <div class="step">
            <strong>2. Landmark Numbers of Base-7:</strong><br>
            • 7⁰ = <strong>1</strong><br>
            • 7¹ = <strong>7</strong><br>
            • 7² = <strong>49</strong><br>
            • 7³ = <strong>343</strong><br>
            • 7⁴ = <strong>2,401</strong><br>
            • 7⁵ = <strong>16,807</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">General definition of landmark numbers as powers of base n</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Listing powers of 7 (1, 7, 49, 343, 2401)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q13 -->
  <div class="q-card" id="c8m-ch3-q13">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q13')">
      <div class="q-num">Q13</div>
      <div class="q-text">Perform addition directly in the base-5 system: <br>(i) (32)₅ + (14)₅ &nbsp;&nbsp;&nbsp;&nbsp; (ii) (234)₅ + (342)₅. Show step-by-step regrouping (carrying).</div>
      <div class="q-marks">[2.5 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Rule:</strong> In base 5, carrying occurs whenever the sum of digits reaches or exceeds 5 (since 5₁₀ = 10₅).
          </div>
          <div class="step">
            • <strong>(i) (32)₅ + (14)₅:</strong><br>
            Units place: 2 + 4 = 6. 6 = 1 × 5 + 1 → Write <strong>1</strong>, carry <strong>1</strong>.<br>
            Fives place: 3 + 1 + 1 (carry) = 5. 5 = 1 × 5 + 0 → Write <strong>0</strong>, carry <strong>1</strong>.<br>
            Result = <strong>(101)₅</strong>.<br>
            (Verification: (32)₅ = 17₁₀, (14)₅ = 9₁₀; 17 + 9 = 26₁₀; (101)₅ = 25 + 0 + 1 = 26₁₀. Correct!).
          </div>
          <div class="step">
            • <strong>(ii) (234)₅ + (342)₅:</strong><br>
            Units place: 4 + 2 = 6 = 1 × 5 + 1 → Write <strong>1</strong>, carry <strong>1</strong>.<br>
            Fives place: 3 + 4 + 1 = 8 = 1 × 5 + 3 → Write <strong>3</strong>, carry <strong>1</strong>.<br>
            Twenty-fives place: 2 + 3 + 1 = 6 = 1 × 5 + 1 → Write <strong>1</strong>, carry <strong>1</strong>.<br>
            One-hundred-twenty-fives place: 1.<br>
            Result = <strong>(1131)₅</strong>.<br>
            (Verification: (234)₅ = 69₁₀, (342)₅ = 97₁₀; 69 + 97 = 166₁₀; (1131)₅ = 125 + 25 + 15 + 1 = 166₁₀. Correct!).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Evaluation of (i) = (101)₅ with carrying</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Evaluation of (ii) = (1131)₅ with verification</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q14 -->
  <div class="q-card" id="c8m-ch3-q14">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q14')">
      <div class="q-num">Q14</div>
      <div class="q-text">Can there be an integer whose Egyptian numeral representation has any single symbol occurring 10 or more times? Explain why or why not based on the structure of Egyptian numerals.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Scientific Reason:</strong><br>
            <strong>No, a correctly written Egyptian numeral never contains any symbol repeated 10 or more times.</strong><br>
            The Egyptian system was an additive decimal system with specific hieroglyphic symbols for powers of ten (1, 10, 100, 1000, 10000, 100000, 1000000).<br>
            Whenever 10 of any unit accumulated (e.g., 10 staffs = 10 ones), the scribe immediately replaced them with exactly <strong>one symbol of the next higher landmark</strong> (1 heel bone = 10). Thus, each individual symbol was used at most 9 times.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating 'No'</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Explaining grouping by 10 and replacement by next landmark symbol</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q15 -->
  <div class="q-card" id="c8m-ch3-q15">
    <div class="q-head" onclick="toggleQ('c8m-ch3-q15')">
      <div class="q-num">Q15</div>
      <div class="q-text">Construct a "Quad-Code" number system based on base-4 using the four symbols: A = 0, B = 1, C = 2, D = 3. Write down the numbers from 1 to 16 in this system and explain the transition from 1-digit to 2-digit and 3-digit representations.</div>
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
                <th>Decimal Number</th>
                <th>Base-4 Breakdown</th>
                <th>Quad-Code (Base-4)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>1</td><td><strong>B</strong></td></tr>
              <tr><td>2</td><td>2</td><td><strong>C</strong></td></tr>
              <tr><td>3</td><td>3</td><td><strong>D</strong></td></tr>
              <tr><td>4</td><td>1×4 + 0</td><td><strong>BA</strong></td></tr>
              <tr><td>5</td><td>1×4 + 1</td><td><strong>BB</strong></td></tr>
              <tr><td>6</td><td>1×4 + 2</td><td><strong>BC</strong></td></tr>
              <tr><td>7</td><td>1×4 + 3</td><td><strong>BD</strong></td></tr>
              <tr><td>8</td><td>2×4 + 0</td><td><strong>CA</strong></td></tr>
              <tr><td>9</td><td>2×4 + 1</td><td><strong>CB</strong></td></tr>
              <tr><td>10</td><td>2×4 + 2</td><td><strong>CC</strong></td></tr>
              <tr><td>11</td><td>2×4 + 3</td><td><strong>CD</strong></td></tr>
              <tr><td>12</td><td>3×4 + 0</td><td><strong>DA</strong></td></tr>
              <tr><td>13</td><td>3×4 + 1</td><td><strong>DB</strong></td></tr>
              <tr><td>14</td><td>3×4 + 2</td><td><strong>DC</strong></td></tr>
              <tr><td>15</td><td>3×4 + 3</td><td><strong>DD</strong></td></tr>
              <tr><td>16</td><td>1×4² + 0×4 + 0</td><td><strong>BAA</strong></td></tr>
            </tbody>
          </table>
          <p><strong>Note on Transitions:</strong> At 4 (the base), numbers roll over from 1-digit to 2-digit (BA). At 16 (4²), the 2-digit combinations (ending at DD) are exhausted, and numbers roll over to 3-digit (BAA), demonstrating positional place value.</p>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Listing all 16 representations accurately</span><span class="marking-marks">2 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Explaining transition to 2-digit at 4 and 3-digit at 16</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Binary &amp; Hexadecimal Computing Case Study)</div>
    <div class="q-text"><strong>Case Study: Binary (Base-2) &amp; Hexadecimal (Base-16) in Modern Computer Science:</strong><br>
      While humans count in base-10 due to ten fingers, computer processors use microscopic transistors that act as electronic switches having only two electrical states: OFF (voltage 0) and ON (voltage 1). Thus, computing operates intrinsically in the binary (base-2) positional system.<br>
      (a) Convert the decimal number 25 into its binary representation.<br>
      (b) In web design, colors are expressed as 6-digit Hexadecimal (Base-16) codes such as #FFFFFF (White) or #000000 (Black). Why do software engineers prefer base-16 over binary for writing large memory addresses?<br>
      (c) Convert binary (1101)₂ into its decimal equivalent.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Decimal 25 into Binary:</strong><br>
        25 ÷ 2 = 12 rem 1; 12 ÷ 2 = 6 rem 0; 6 ÷ 2 = 3 rem 0; 3 ÷ 2 = 1 rem 1; 1 ÷ 2 = 0 rem 1.<br>
        Reading remainders from bottom to top: 25₁₀ = <strong>(11001)₂</strong>.<br>
        Check: 1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 25.</p>

        <p><strong>(b) Why Hexadecimal is Preferred:</strong><br>
        Because 16 = 2⁴, exactly 4 binary bits correspond directly to a single hexadecimal digit (e.g., 1111₂ = F₁₆). A long 32-bit binary memory address like 11111111000010101100111100000000 can be compactly written as FF0ACF00, making it far easier for human programmers to read, debug, and remember without errors.</p>

        <p><strong>(c) Binary (1101)₂ into Decimal:</strong><br>
        (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰) = 8 + 4 + 0 + 1 = <strong>13</strong>.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch3.html'), ch3Html, 'utf8');
console.log('Chapter 3 correctly written with 15 questions + CBQ.');
