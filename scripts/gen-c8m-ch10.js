const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch10Html = `<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <h2>Chapter 10: Proportional Reasoning - 2</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 2) — Commercial Mathematics, Percentages, Profit &amp; Loss, Discount, GST &amp; Compound Interest | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Commercial Formulas &amp; Financial Mathematics</div>
    <ul class="concept-list">
      <li><strong>Discount &amp; Marked Price:</strong>
        <ul>
          <li><code>Discount = Marked Price (MP) − Selling Price (SP)</code></li>
          <li><code>Discount % = (Discount / MP) × 100</code></li>
          <li><code>SP = MP × (1 − Discount% / 100)</code></li>
        </ul>
      </li>
      <li><strong>Profit, Loss &amp; GST:</strong>
        <ul>
          <li><code>Profit = SP − CP</code> (if SP &gt; CP); <code>Profit % = (Profit / CP) × 100</code></li>
          <li><code>Loss = CP − SP</code> (if CP &gt; SP); <code>Loss % = (Loss / CP) × 100</code></li>
          <li><code>SP = CP × (100 ± Profit%/Loss%) / 100</code></li>
          <li><strong>Goods and Services Tax (GST):</strong> Levied on the selling price. <code>Bill Amount = SP + (GST% of SP)</code>.</li>
        </ul>
      </li>
      <li><strong>Compound Interest (CI):</strong> Interest calculated on the initial principal plus accumulated interest of prior periods.
        <ul>
          <li><strong>Compounded Annually:</strong> <code>A = P(1 + R/100)ⁿ</code>, where <em>P</em> = Principal, <em>R</em> = Annual Rate %, <em>n</em> = Time in years.</li>
          <li><strong>Compounded Half-Yearly:</strong> Rate is halved (R/2) and periods double (2n): <code>A = P(1 + R/200)²ⁿ</code>.</li>
          <li><code>Compound Interest (CI) = Amount (A) − Principal (P)</code>.</li>
          <li><strong>Depreciation:</strong> When value decreases at rate <em>R%</em> per year: <code>Value = Initial Value × (1 − R/100)ⁿ</code>.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 10: Compound Interest vs Simple Interest Growth -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Financial Divergence: Simple Interest (Linear) vs Compound Interest (Exponential)</text>
      
      <!-- Coordinate Axes -->
      <g transform="translate(60, 40)">
        <line x1="30" y1="120" x2="420" y2="120" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="120" x2="30" y2="15" stroke="#64748b" stroke-width="1.5"/>
        <text x="420" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#475569">Time (Years)</text>
        <text x="25" y="10" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#475569">Amount (₹)</text>

        <!-- Simple Interest Line -->
        <line x1="30" y1="100" x2="380" y2="55" stroke="#0284c7" stroke-width="2" stroke-dasharray="5,3"/>
        <text x="390" y="58" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0284c7">Simple Interest</text>

        <!-- Compound Interest Exponential Curve -->
        <path d="M 30,100 Q 220,95 380,20" fill="none" stroke="#16a34a" stroke-width="2.5"/>
        <text x="390" y="24" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#16a34a">Compound Interest</text>

        <!-- Divergence Area -->
        <text x="270" y="70" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#d97706">Interest on Interest</text>
        <path d="M 270,75 L 290,88" stroke="#d97706" stroke-width="1" stroke-dasharray="2,2"/>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 10.1: Compounding Effect Multiplying Wealth Over Extended Investment Horizons</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch10-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">An item marked at ₹ 840 is sold for ₹ 714. What are the discount and discount percentage?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Marked Price (MP) = ₹ 840.<br>
            Selling Price (SP) = ₹ 714.<br><br>
            2. <strong>Discount:</strong><br>
            Discount = MP − SP = 840 − 714 = <strong>₹ 126</strong>.<br><br>
            3. <strong>Discount Percentage:</strong><br>
            Discount % = (Discount / MP) × 100<br>
            Discount % = (126 / 840) × 100 = 1260 / 84 = <strong>15%</strong>.<br><br>
            Thus, the discount is <strong>₹ 126</strong> and the discount percentage is <strong>15%</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating Discount = ₹ 126</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Formula and solving Discount% = 15%</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch10-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">A shopkeeper bought two TV sets at ₹ 10,000 each. He sold one at a profit of 10% and the other at a loss of 10%. Find whether he made an overall profit or loss, and its percentage.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Total Cost Price (CP):<br>
            CP of 1st TV = ₹ 10,000.<br>
            CP of 2nd TV = ₹ 10,000.<br>
            Total CP = 10,000 + 10,000 = <strong>₹ 20,000</strong>.<br><br>
            2. Selling Price of TV 1 (Profit = 10%):<br>
            SP₁ = 10,000 + (10/100 × 10,000) = 10,000 + 1,000 = <strong>₹ 11,000</strong>.<br><br>
            3. Selling Price of TV 2 (Loss = 10%):<br>
            SP₂ = 10,000 − (10/100 × 10,000) = 10,000 − 1,000 = <strong>₹ 9,000</strong>.<br><br>
            4. Total Selling Price (SP):<br>
            Total SP = 11,000 + 9,000 = <strong>₹ 20,000</strong>.<br><br>
            5. Conclusion: Since Total SP = Total CP = ₹ 20,000, the shopkeeper made <strong>Neither profit nor loss (0%)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating SP₁ = ₹ 11,000 and SP₂ = ₹ 9,000</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Total SP = Total CP = ₹ 20,000 ⇒ No profit no loss</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch10-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">A washing machine is bought for ₹ 18,900 including 12% GST. Find the price of the washing machine before GST was added.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Let the original price of the washing machine before GST be <code>₹ x</code>.<br>
            GST Rate = 12%.<br>
            Total Bill = x + (12% of x) = x + 0.12x = <strong>1.12x</strong>.<br><br>
            2. Equating to given invoice amount:<br>
            1.12x = 18,900<br>
            x = 18,900 / 1.12 = 18,90,000 / 112 = <strong>₹ 16,875</strong>.<br><br>
            3. (Check: 12% of 16,875 = ₹ 2,025. Total = 16,875 + 2,025 = ₹ 18,900).<br><br>
            Therefore, the price before GST was <strong>₹ 16,875</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Equation setup: 1.12x = 18,900</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving x = ₹ 16,875</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch10-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Calculate the amount and compound interest on ₹ 10,800 for 3 years at 12 1/2% per annum compounded annually.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Given: Principal P = ₹ 10,800, Time n = 3 years, Rate R = 12.5% = 25/2% per annum.<br><br>
            2. Compound Interest Formula: <code>A = P(1 + R/100)ⁿ</code><br>
            A = 10800 × [1 + (25 / 200)]³<br>
            A = 10800 × [1 + 1/8]³ = 10800 × (9/8)³<br>
            A = 10800 × (729 / 512)<br>
            A = (10800 × 729) / 512 = 7873200 / 512 = <strong>₹ 15,377.34</strong>.<br><br>
            3. Compound Interest (CI):<br>
            CI = A − P = 15,377.34 − 10,800 = <strong>₹ 4,577.34</strong>.<br><br>
            Hence, Amount = <strong>₹ 15,377.34</strong> and Compound Interest = <strong>₹ 4,577.34</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula A = P(1 + R/100)ⁿ with substitution (9/8)³</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Amount = ₹ 15,377.34 and CI = ₹ 4,577.34</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch10-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Find the amount and compound interest on ₹ 8,000 for 1 1/2 years at 10% per annum compounded half-yearly.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Rule for Half-Yearly Compounding:</strong> Rate per half-year = R / 2; Number of half-years = 2 × n.</p>
          <div class="step">
            1. P = ₹ 8,000.<br>
            Half-yearly rate r = 10% / 2 = <strong>5%</strong>.<br>
            Periods m = 1.5 × 2 = <strong>3 half-years</strong>.<br><br>
            2. Amount Formula: <code>A = P(1 + r/100)ᵐ</code><br>
            A = 8000 × (1 + 5/100)³ = 8000 × (21/20)³<br>
            A = 8000 × (9261 / 8000) = <strong>₹ 9,261</strong>.<br><br>
            3. Compound Interest (CI):<br>
            CI = A − P = 9,261 − 8,000 = <strong>₹ 1,261</strong>.<br><br>
            Thus, Amount is <strong>₹ 9,261</strong> and Compound Interest is <strong>₹ 1,261</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Adjusting rate to 5% and periods to 3 half-years</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Evaluating A = ₹ 9,261 and CI = ₹ 1,261</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch10-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Fabina borrows ₹ 12,500 at 12% per annum for 3 years at simple interest and Radha borrows the same amount for the same time period at 10% per annum, compounded annually. Who pays more interest and by how much?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>Fabina's Simple Interest:</strong><br>
            P = ₹ 12,500, R = 12%, T = 3 years.<br>
            SI = (P × R × T) / 100 = (12500 × 12 × 3) / 100 = 125 × 36 = <strong>₹ 4,500</strong>.<br><br>

            • <strong>Radha's Compound Interest:</strong><br>
            P = ₹ 12,500, R = 10%, n = 3 years.<br>
            A = P(1 + R/100)ⁿ = 12500 × (1 + 10/100)³ = 12500 × (11/10)³<br>
            A = 12500 × (1331 / 1000) = 12.5 × 1331 = ₹ 16,637.50.<br>
            CI = A − P = 16,637.50 − 12,500 = <strong>₹ 4,137.50</strong>.<br><br>

            • <strong>Comparison:</strong><br>
            Fabina pays more interest than Radha.<br>
            Difference = 4,500 − 4,137.50 = <strong>₹ 362.50</strong>.<br><br>
            Hence, <strong>Fabina pays ₹ 362.50 more</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating Fabina's SI = ₹ 4,500</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculating Radha's CI = ₹ 4,137.50</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Difference = ₹ 362.50 paid more by Fabina</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch10-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">A scooter was bought at ₹ 42,000. Its value depreciated at the rate of 8% per annum. Find its value after one year.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Depreciation Formula:</strong> <code>Value after n years = Initial Value × (1 − R/100)ⁿ</code>.</p>
          <div class="step">
            1. Initial Value P = ₹ 42,000.<br>
            Depreciation Rate R = 8%, Time n = 1 year.<br><br>
            2. Value after 1 year = 42000 × (1 − 8/100)¹<br>
            = 42000 × (92 / 100)<br>
            = 420 × 92 = <strong>₹ 38,640</strong>.<br><br>
            (Alternative: Depreciation = 8% of 42000 = ₹ 3,360. Value = 42000 − 3360 = ₹ 38,640).<br><br>
            Hence, the value of the scooter after one year is <strong>₹ 38,640</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Depreciation calculation: 8% of 42000 = ₹ 3,360</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Remaining value = ₹ 38,640</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch10-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">The population of a city was 20,000 in the year 1997. It increased at the rate of 5% p.a. Find the population at the end of the year 2000.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Initial Population P = 20,000.<br>
            Growth Rate R = 5% per annum.<br>
            Time duration n = 2000 − 1997 = <strong>3 years</strong>.<br><br>
            2. Population in 2000 = <code>P × (1 + R/100)ⁿ</code><br>
            = 20000 × (1 + 5/100)³<br>
            = 20000 × (21/20)³<br>
            = 20000 × (9261 / 8000)<br>
            = (20 × 9261) / 8 = 185220 / 8 = <strong>23,152.5 ≈ 23,153</strong>.<br><br>
            Therefore, the estimated population at the end of 2000 was <strong>23,153</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Population growth formula with n = 3 years</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculating 23,152.5 ≈ 23,153</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch10-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">A VCR and TV were bought for ₹ 8,000 each. The shopkeeper made a loss of 4% on the VCR and a profit of 8% on the TV. Find the gain or loss percent on the whole transaction.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Total Cost Price CP = 8,000 + 8,000 = <strong>₹ 16,000</strong>.<br><br>
            2. SP of VCR (4% loss):<br>
            Loss = 4% of 8,000 = ₹ 320.<br>
            SP of VCR = 8,000 − 320 = <strong>₹ 7,680</strong>.<br><br>
            3. SP of TV (8% profit):<br>
            Profit = 8% of 8,000 = ₹ 640.<br>
            SP of TV = 8,000 + 640 = <strong>₹ 8,640</strong>.<br><br>
            4. Total Selling Price SP = 7,680 + 8,640 = <strong>₹ 16,320</strong>.<br><br>
            5. Overall Profit = Total SP − Total CP = 16,320 − 16,000 = <strong>₹ 320</strong>.<br>
            Profit % = (320 / 16000) × 100 = 32 / 16 = <strong>2%</strong>.<br><br>
            Hence, the shopkeeper gained <strong>2% profit</strong> on the whole transaction.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">SP of VCR (₹ 7,680) and SP of TV (₹ 8,640)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Total Profit ₹ 320 and Profit% = 2%</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch10-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch10-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Find the difference between Simple Interest and Compound Interest on ₹ 15,000 for 2 years at 8% per annum compounded annually. State the general algebraic shortcut for difference over 2 years.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Two-Year Shortcut Formula:</strong> <code>Difference (CI − SI) = P × (R / 100)²</code>.</p>
          <div class="step">
            1. P = ₹ 15,000, R = 8%, n = 2 years.<br><br>
            2. Using the direct formula:<br>
            CI − SI = 15000 × (8 / 100)²<br>
            = 15000 × (64 / 10000)<br>
            = (15000 × 64) / 10000 = 1.5 × 64 = <strong>₹ 96</strong>.<br><br>
            3. Verification:<br>
            SI = (15000 × 8 × 2) / 100 = ₹ 2,400.<br>
            A = 15000 × (1.08)² = 15000 × 1.1664 = ₹ 17,496.<br>
            CI = 17,496 − 15,000 = ₹ 2,496.<br>
            Difference = 2,496 − 2,400 = <strong>₹ 96</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formula Difference = P(R/100)²</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Evaluating Difference = ₹ 96</span><span class="marking-marks">1 Mark</span></div>
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
      <strong>Context — Entrepreneurial Capital &amp; Retail Pricing Dynamics:</strong> An electronics retail startup buys laptops from a manufacturer at a cost price (CP) of ₹ 50,000 each. The store manager sets the Marked Price (MP) 20% above the cost price. During a festival sale, the store offers a discount of 10% on the marked price. When a customer purchases the laptop, 18% GST is charged on the final discounted selling price.<br><br>
      (a) Calculate the Marked Price (MP) and the discounted Selling Price (SP) of the laptop.<br>
      (b) Calculate the final bill amount paid by the customer including 18% GST.<br>
      (c) Find the shopkeeper's actual profit percentage on the transaction (excluding tax).
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Marked Price and Discounted Selling Price:</strong><br>
        - MP = CP + 20% of CP = 50,000 + 10,000 = <strong>₹ 60,000</strong>.<br>
        - Discount = 10% of MP = 10% of 60,000 = ₹ 6,000.<br>
        - Selling Price SP = 60,000 − 6,000 = <strong>₹ 54,000</strong>.</p>

        <p><strong>(b) Customer Final Invoice with 18% GST:</strong><br>
        - GST = 18% of SP = 0.18 × 54,000 = ₹ 9,720.<br>
        - Bill Amount = SP + GST = 54,000 + 9,720 = <strong>₹ 63,720</strong>.</p>

        <p><strong>(c) Shopkeeper's Profit Percentage:</strong><br>
        - Profit = SP − CP = 54,000 − 50,000 = ₹ 4,000.<br>
        - Profit % = (4,000 / 50,000) × 100 = <strong>8% profit</strong>.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch10.html'), ch10Html, 'utf8');
console.log('Chapter 10 successfully written with 10 questions + CBQ.');
