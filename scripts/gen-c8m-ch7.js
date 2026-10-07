const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch7Html = `<section class="chapter-section" id="ch7">
  <div class="chapter-header">
    <div class="ch-badge">7</div>
    <div class="chapter-header-info">
      <h2>Chapter 7: Proportional Reasoning - 1</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 1) — Direct &amp; Inverse Proportion, Constant of Variation, Speed-Time &amp; Work-Time Relationships | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Mathematical Principles of Proportion</div>
    <ul class="concept-list">
      <li><strong>Direct Proportion:</strong> Two quantities <em>x</em> and <em>y</em> are said to be in direct proportion if they increase or decrease together such that their ratio remains constant:
        <ul>
          <li><code>x / y = k</code> (where <em>k</em> is a positive constant) or <code>x₁ / y₁ = x₂ / y₂</code>.</li>
          <li>Graphically, a directly proportional relationship is represented by a straight line passing through the origin <code>(0, 0)</code>.</li>
          <li>Common examples: Distance travelled at constant speed vs time; cost of items vs number of items; length of an object vs length of its shadow at a fixed time.</li>
        </ul>
      </li>
      <li><strong>Inverse Proportion:</strong> Two quantities <em>x</em> and <em>y</em> are said to be in inverse proportion if an increase in <em>x</em> causes a proportional decrease in <em>y</em> (and vice-versa) such that their product remains constant:
        <ul>
          <li><code>x × y = k</code> (where <em>k</em> is a constant) or <code>x₁ × y₁ = x₂ × y₂</code>.</li>
          <li>Graphically, an inverse relationship is represented by a smooth hyperbola curve in the first quadrant.</li>
          <li>Common examples: Speed vs time for a fixed distance; number of workers vs days required to complete a job; number of pipes vs time taken to fill a tank.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 7: Direct vs Inverse Proportion Graphs -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Comparative Profiles: Direct Proportion vs Inverse Proportion</text>
      
      <!-- Graph 1: Direct Proportion -->
      <g transform="translate(60, 40)">
        <line x1="20" y1="110" x2="180" y2="110" stroke="#64748b" stroke-width="1.5"/>
        <line x1="20" y1="110" x2="20" y2="10" stroke="#64748b" stroke-width="1.5"/>
        <!-- Direct line -->
        <line x1="20" y1="110" x2="160" y2="20" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="20" cy="110" r="3" fill="#2563eb"/>
        <text x="100" y="130" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e40af" text-anchor="middle">Direct: x / y = k</text>
        <text x="100" y="145" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">Linear through Origin</text>
      </g>

      <!-- Graph 2: Inverse Proportion -->
      <g transform="translate(300, 40)">
        <line x1="20" y1="110" x2="180" y2="110" stroke="#64748b" stroke-width="1.5"/>
        <line x1="20" y1="110" x2="20" y2="10" stroke="#64748b" stroke-width="1.5"/>
        <!-- Inverse Curve (Hyperbola) -->
        <path d="M 30,20 Q 40,80 160,100" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="100" y="130" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#991b1b" text-anchor="middle">Inverse: x × y = k</text>
        <text x="100" y="145" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b" text-anchor="middle">Hyperbolic Curve</text>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 7.1: Fundamental Difference in Mathematical Variation Geometries</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch7-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Following are the car parking charges near a railway station up to:<br>4 hours: ₹ 60<br>8 hours: ₹ 100<br>12 hours: ₹ 140<br>24 hours: ₹ 180<br>Check if the parking charges are in direct proportion to the parking time.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Criterion:</strong> For charges (y) to be in direct proportion to time (x), the ratio <code>y / x</code> must remain constant for all pairs.</p>
          <div class="step">
            1. Calculate the ratio <code>Charges / Time (₹/h)</code> for each interval:<br>
            • For 4 hours: 60 / 4 = <strong>₹ 15/h</strong>.<br>
            • For 8 hours: 100 / 8 = <strong>₹ 12.50/h</strong>.<br>
            • For 12 hours: 140 / 12 = 35 / 3 ≈ <strong>₹ 11.67/h</strong>.<br>
            • For 24 hours: 180 / 24 = 15 / 2 = <strong>₹ 7.50/h</strong>.<br><br>
            2. <strong>Conclusion:</strong> Since 60/4 ≠ 100/8 ≠ 140/12 ≠ 180/24 (the ratio is not constant), the parking charges <strong>are NOT in direct proportion</strong> to the parking time.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Calculating all 4 unit ratios</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Justification that ratios are unequal</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch7-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">A mixture of paint is prepared by mixing 1 part of red pigments with 8 parts of base. In the following table, find the parts of base that need to be added:<br>Parts of red pigment: 1 &nbsp;|&nbsp; 4 &nbsp;|&nbsp; 7 &nbsp;|&nbsp; 12 &nbsp;|&nbsp; 20<br>Parts of base: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 &nbsp;|&nbsp; x₁ |&nbsp; x₂ |&nbsp; x₃ &nbsp;|&nbsp; x₄</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Property:</strong> The mixture proportions remain constant throughout (Direct Proportion):<br>
          <code>(Parts of red pigment) / (Parts of base) = 1 / 8</code>, which means <code>Base = 8 × (Red pigment)</code>.</p>
          <div class="step">
            • <strong>For 4 parts of red pigment:</strong><br>
            x₁ = 4 × 8 = <strong>32 parts</strong>.<br><br>

            • <strong>For 7 parts of red pigment:</strong><br>
            x₂ = 7 × 8 = <strong>56 parts</strong>.<br><br>

            • <strong>For 12 parts of red pigment:</strong><br>
            x₃ = 12 × 8 = <strong>96 parts</strong>.<br><br>

            • <strong>For 20 parts of red pigment:</strong><br>
            x₄ = 20 × 8 = <strong>160 parts</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Direct proportion formula 1/8 = x/y</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Evaluations: 32, 56, 96, 160</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch7-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">A machine in a soft drink factory fills 840 bottles in 6 hours. How many bottles will it fill in 5 hours?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. As time decreases, the number of bottles filled decreases in the same ratio. Thus, time and number of bottles are in <strong>Direct Proportion</strong>.<br><br>
            2. Let the number of bottles filled in 5 hours be <code>x</code>.<br>
            Using direct proportion formula <code>x₁ / y₁ = x₂ / y₂</code>:<br>
            840 / 6 = x / 5<br><br>
            3. Solving for x:<br>
            140 = x / 5<br>
            x = 140 × 5 = <strong>700 bottles</strong>.<br><br>
            Hence, the machine will fill <strong>700 bottles</strong> in 5 hours.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Direct proportion formulation: 840/6 = x/5</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Finding x = 700 bottles</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch7-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">A loaded truck travels 14 km in 25 minutes. If the speed remains the same, how far can it travel in 5 hours?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Convert time into uniform units (minutes):<br>
            5 hours = 5 × 60 = <strong>300 minutes</strong>.<br><br>
            2. Distance travelled is in <strong>Direct Proportion</strong> to time at constant speed.<br>
            Let <code>d</code> be the distance travelled in 300 minutes.<br>
            14 / 25 = d / 300<br><br>
            3. Cross-multiplying:<br>
            d = (14 × 300) / 25<br>
            d = 14 × 12 = <strong>168 km</strong>.<br><br>
            Therefore, the loaded truck can travel <strong>168 km</strong> in 5 hours.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Converting 5 hours = 300 minutes</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Proportion equation and final distance 168 km</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch7-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">A 5 m 60 cm high vertical pole casts a shadow 3 m 20 cm long. Find at the same time: (i) the length of the shadow cast by another pole 10 m 50 cm high, (ii) the height of a pole which casts a shadow 5 m long.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Convert all dimensions to centimeters (cm):<br>
            Height of pole 1 = 5 m 60 cm = 560 cm.<br>
            Length of shadow 1 = 3 m 20 cm = 320 cm.<br>
            Ratio <code>Height / Shadow = 560 / 320 = 7 / 4 = 1.75</code>.<br><br>
            • <strong>(i) Shadow of pole 10 m 50 cm high:</strong><br>
            Height = 1050 cm. Let shadow length be <code>s</code>.<br>
            560 / 320 = 1050 / s<br>
            7 / 4 = 1050 / s ⇒ s = (1050 × 4) / 7 = 150 × 4 = <strong>600 cm = 6 meters</strong>.<br><br>
            • <strong>(ii) Height of pole casting a 5 m shadow:</strong><br>
            Shadow = 5 m = 500 cm. Let pole height be <code>h</code>.<br>
            7 / 4 = h / 500 ⇒ h = (7 × 500) / 4 = 3500 / 4 = <strong>875 cm = 8 m 75 cm</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Unit conversions to cm and direct proportion ratio 7/4</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">(i) Shadow = 6 m, (ii) Height = 8 m 75 cm</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch7-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Which of the following are in inverse proportion?<br>(i) The number of workers on a job and the time to complete the job.<br>(ii) The time taken for a fixed journey and the distance travelled at a uniform speed.<br>(iii) Area of cultivated land and the crop harvested.<br>(iv) The time taken for a fixed journey and the speed of the vehicle.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) Workers vs Time:</strong> More workers require fewer days to complete the same job. As workers increase, time decreases proportionally (<code>Workers × Time = Constant Total Work</code>). Thus, it is in <strong>Inverse Proportion</strong>.<br><br>
            • <strong>(ii) Time vs Distance (uniform speed):</strong> In more time, more distance is covered (<code>Distance = Speed × Time</code>). It is in <strong>Direct Proportion</strong> (Not inverse).<br><br>
            • <strong>(iii) Area vs Crop harvested:</strong> More land produces more crop. It is in <strong>Direct Proportion</strong> (Not inverse).<br><br>
            • <strong>(iv) Time vs Speed (fixed distance):</strong> At higher speed, less time is needed to travel the fixed distance (<code>Speed × Time = Distance</code>). Thus, it is in <strong>Inverse Proportion</strong>.<br><br>
            Therefore, <strong>(i) and (iv)</strong> are in inverse proportion.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Clear conceptual justification for each pair</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Identifying cases (i) and (iv)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch7-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">In a television game show, the prize money of ₹ 1,00,000 is to be divided equally amongst the winners. Complete the following table and find whether the prize money given to an individual winner is in direct or inverse proportion to the number of winners:<br>Number of winners: 1 &nbsp;|&nbsp; 2 &nbsp;|&nbsp; 4 &nbsp;|&nbsp; 5 &nbsp;|&nbsp; 8 &nbsp;|&nbsp; 10 &nbsp;|&nbsp; 20<br>Prize for each (₹): 1,00,000 | 50,000 | ? | ? | ? | ? | ?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Principle:</strong> Total prize pool is fixed at ₹ 1,00,000.<br>
          <code>(Number of winners) × (Prize per winner) = ₹ 1,00,000 (Constant)</code>.<br>
          Since their product is constant, the prize given to an individual winner is in <strong>Inverse Proportion</strong> to the number of winners.</p>
          <div class="step">
            • For 4 winners: 1,00,000 ÷ 4 = <strong>₹ 25,000</strong>.<br>
            • For 5 winners: 1,00,000 ÷ 5 = <strong>₹ 20,000</strong>.<br>
            • For 8 winners: 1,00,000 ÷ 8 = <strong>₹ 12,500</strong>.<br>
            • For 10 winners: 1,00,000 ÷ 10 = <strong>₹ 10,000</strong>.<br>
            • For 20 winners: 1,00,000 ÷ 20 = <strong>₹ 5,000</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Stating inverse proportion with product k = 1,00,000</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Accurately calculating all 5 prize amounts</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch7-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">A car takes 2 hours to reach a destination by travelling at the speed of 60 km/h. How long will it take when the car travels at the speed of 80 km/h?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. The distance to the destination is fixed.<br>
            Since speed and time are in <strong>Inverse Proportion</strong>:<br>
            <code>Speed₁ × Time₁ = Speed₂ × Time₂</code><br><br>
            2. Substituting the given values:<br>
            60 × 2 = 80 × t<br>
            120 = 80 × t<br>
            t = 120 / 80 = 3 / 2 = <strong>1.5 hours</strong> (or <strong>1 hour 30 minutes</strong>).<br><br>
            Therefore, at 80 km/h the car takes <strong>1 hour 30 minutes</strong> to reach the destination.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Inverse proportion formula: s₁ × t₁ = s₂ × t₂</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Calculating t = 1.5 hours (1 hr 30 min)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch7-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">A contractor estimates that 3 persons could rewire Jasminder's house in 4 days. If he uses 4 persons instead of three, how long should they take to complete the job?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. More persons will take less time to complete the rewiring job. Thus, the number of persons (x) and days taken (y) vary in <strong>Inverse Proportion</strong>.<br><br>
            2. Using inverse proportion formula <code>x₁ × y₁ = x₂ × y₂</code>:<br>
            3 × 4 = 4 × y₂<br>
            12 = 4 × y₂<br>
            y₂ = 12 / 4 = <strong>3 days</strong>.<br><br>
            Hence, 4 persons will complete the rewiring in <strong>3 days</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Formulating 3 × 4 = 4 × y</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Solving y = 3 days</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch7-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch7-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">A school has 8 periods a day each of 45 minutes duration. How long would each period be, if the school has 9 periods a day, assuming the total number of school hours to remain the same?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Total instructional duration in a school day is fixed.<br>
            As the number of periods increases, the duration of each period must decrease. Therefore, number of periods and duration per period are in <strong>Inverse Proportion</strong>.<br><br>
            2. Total school teaching minutes = 8 × 45 = <strong>360 minutes</strong>.<br><br>
            3. For 9 periods:<br>
            Duration per period = Total minutes / Number of periods = 360 / 9 = <strong>40 minutes</strong>.<br><br>
            Hence, each period would be <strong>40 minutes</strong> long.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Total time constant = 8 × 45 = 360 minutes</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">New duration = 360 / 9 = 40 minutes</span><span class="marking-marks">1 Mark</span></div>
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
      <strong>Context — Solar Microgrid Infrastructure &amp; Deployment:</strong> A renewable energy agency is executing a rural electrification project installing solar panels in a village. The installation contract specifies that 15 technicians can complete the entire microgrid wiring and setup in 24 days.<br>
      Each solar panel produces 400 W of electricity under 5 hours of peak sunlight.<br><br>
      (a) If the district administration insists that the project must be commissioned in just 18 days, how many total technicians must be deployed?<br>
      (b) If only 10 technicians report for work due to weather disruptions, by how many days will the original 24-day timeline be delayed?<br>
      (c) Explain why this workforce scenario represents inverse variation while energy generated versus sunlight hours represents direct variation.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Technicians required for 18-day completion:</strong><br>
        Total Work = Technicians × Days = 15 × 24 = <strong>360 person-days</strong>.<br>
        For 18 days completion:<br>
        Technicians required = 360 ÷ 18 = <strong>20 technicians</strong>.<br>
        (An additional 5 technicians must be deployed).</p>

        <p><strong>(b) Timeline delay with only 10 technicians:</strong><br>
        Days taken by 10 technicians = 360 ÷ 10 = <strong>36 days</strong>.<br>
        Delay compared to original schedule = 36 − 24 = <strong>12 days delay</strong>.</p>

        <p><strong>(c) Conceptual Justification:</strong><br>
        - Workforce &amp; Completion Time: Because the total workload is fixed (360 person-days), increasing technicians directly decreases days (their product is constant: <code>Workers × Days = 360</code>), which is the definition of <strong>Inverse Proportion</strong>.<br>
        - Solar Output &amp; Sunlight: Panel generation increases linearly with every additional hour of peak sun (<code>Energy = Rate × Time</code>), maintaining a constant ratio (<code>Energy / Time = 80 W/h</code>), which is the definition of <strong>Direct Proportion</strong>.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch7.html'), ch7Html, 'utf8');
console.log('Chapter 7 successfully written with 10 questions + CBQ.');
