const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c6s');

// ==========================================
// CHAPTER 5: Measurement of Length and Motion (10 Questions + CBQ)
// ==========================================
const ch5Html = `<section class="chapter-section" id="ch5">
  <div class="chapter-header">
    <div class="ch-badge">5</div>
    <div class="chapter-header-info">
      <h2>Chapter 5: Measurement of Length and Motion</h2>
      <p>NCERT Curiosity (Class 6) — SI Standard Units, Metrology, Parallax Error, Measuring Curved Lines, Rest &amp; Motion, Types of Motion | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Metrological &amp; Kinematic Principles</div>
    <ul class="concept-list">
      <li><strong>Need for Standard Units:</strong> Ancient non-standard units (handspan, cubit, foot, pace) varied from person to person. The International System of Units (SI) standardized the <strong>metre (m)</strong> as the universal base unit of length.</li>
      <li><strong>Standard Length Conversions:</strong>
        <ul>
          <li>1 kilometre (km) = 1,000 metres (m)</li>
          <li>1 metre (m) = 100 centimetres (cm) = 1,000 millimetres (mm)</li>
          <li>1 centimetre (cm) = 10 millimetres (mm)</li>
        </ul>
      </li>
      <li><strong>Three Essential Rules for Accurate Ruler Measurement:</strong>
        <ul>
          <li><em>Alignment:</em> Place the ruler exactly parallel and touching the length being measured.</li>
          <li><em>Avoiding Damaged Ends:</em> If the zero mark is broken, start from any clear integer mark (e.g., 2.0 cm) and subtract that from the final reading: <code>True Length = Final Mark - Initial Mark</code>.</li>
          <li><em>Eliminating Parallax Error:</em> The eye must be placed vertically directly above the scale mark. Looking from an oblique angle gives false readings.</li>
        </ul>
      </li>
      <li><strong>Rest vs Motion:</strong> An object is in motion if its position changes relative to a stationary reference point (frame of reference) over time.</li>
      <li><strong>Classification of Motion:</strong>
        <ul>
          <li><em>Linear (Rectilinear) Motion:</em> Movement along a straight line (e.g., car moving on a straight road, falling apple).</li>
          <li><em>Circular Motion:</em> Movement along a circular path maintaining a constant distance from a fixed center (e.g., hands of a clock, blades of ceiling fan).</li>
          <li><em>Periodic / Oscillatory Motion:</em> Motion that repeats itself at regular fixed intervals of time (e.g., pendulum of a clock, child on a swing, vibrating guitar string).</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 1: Parallax Error and Eye Alignment -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 600px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Correct Eye Position to Avoid Parallax Error in Ruler Readings</text>
      
      <!-- Ruler bar -->
      <rect x="70" y="110" width="400" height="35" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      
      <!-- Ruler graduations -->
      <line x1="120" y1="110" x2="120" y2="125" stroke="#854d0e" stroke-width="2"/>
      <text x="120" y="138" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#854d0e" text-anchor="middle">5.0</text>

      <line x1="270" y1="110" x2="270" y2="132" stroke="#854d0e" stroke-width="2.5"/>
      <text x="270" y="140" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#854d0e" text-anchor="middle">6.0 cm</text>

      <line x1="420" y1="110" x2="420" y2="125" stroke="#854d0e" stroke-width="2"/>
      <text x="420" y="138" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#854d0e" text-anchor="middle">7.0</text>

      <!-- Eye Positions -->
      <!-- Position A (Left Oblique) -->
      <circle cx="170" cy="50" r="13" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <circle cx="170" cy="50" r="5" fill="#b91c1c"/>
      <line x1="170" y1="64" x2="265" y2="110" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="170" y="32" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c" text-anchor="middle">Position A (Wrong)</text>

      <!-- Position B (Directly Above) -->
      <circle cx="270" cy="45" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <circle cx="270" cy="45" r="5" fill="#15803d"/>
      <line x1="270" y1="60" x2="270" y2="110" stroke="#16a34a" stroke-width="2"/>
      <polygon points="266,104 270,111 274,104" fill="#16a34a"/>
      <text x="270" y="27" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#15803d" text-anchor="middle">Position B (Correct ✓)</text>

      <!-- Position C (Right Oblique) -->
      <circle cx="370" cy="50" r="13" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <circle cx="370" cy="50" r="5" fill="#b91c1c"/>
      <line x1="370" y1="64" x2="275" y2="110" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="370" y="32" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#b91c1c" text-anchor="middle">Position C (Wrong)</text>

      <rect x="130" y="152" width="280" height="22" rx="4" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="270" y="167" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#334155" text-anchor="middle">Eye must be vertically above the mark to eliminate error</text>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 5.1: Geometry of Correct Scale Reading &amp; Parallax Avoidance</div>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch5-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Some lengths are given in Column I. Some units are given in Column II. Match the lengths with the most appropriate units for measuring them: <br>• Distance between Delhi and Lucknow <br>• Thickness of a coin <br>• Length of an eraser <br>• Length of school playground</div>
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
                <th>Column I (Object / Distance)</th>
                <th>Column II (Most Suitable Unit)</th>
                <th>Scientific Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Distance between Delhi and Lucknow</td>
                <td><strong>Kilometre (km)</strong></td>
                <td>Large geographical and inter-city distances require the kilometre unit (1 km = 1,000 m).</td>
              </tr>
              <tr>
                <td>Thickness of a coin</td>
                <td><strong>Millimetre (mm)</strong></td>
                <td>Extremely tiny dimensions smaller than 1 cm require the precision of millimetres.</td>
              </tr>
              <tr>
                <td>Length of an eraser</td>
                <td><strong>Centimetre (cm)</strong></td>
                <td>Small handheld stationery items are conveniently measured in centimetres (1 cm = 10 mm).</td>
              </tr>
              <tr>
                <td>Length of school playground</td>
                <td><strong>Metre (m)</strong></td>
                <td>Medium outdoor human-scale distances are best measured using the SI standard unit of metre.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Each correct matching with scientific reason</span><span class="marking-marks">0.5 Mark each (Total 2 Marks)</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch5-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Read the following statements and mark True (T) or False (F) against each. Correct the false statement(s): <br>(i) The motion of a car moving on a straight road is an example of linear motion. <br>(ii) Any object which is changing its position with respect to a reference point with time is said to be in motion. <br>(iii) 1 km = 100 cm.</div>
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
                <th>Statement</th>
                <th>True / False</th>
                <th>Scientific Correction / Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>(i) The motion of a car moving on a straight road is an example of linear motion.</td>
                <td><strong>TRUE</strong></td>
                <td>Motion along a straight-line track is strictly rectilinear (linear) motion.</td>
              </tr>
              <tr>
                <td>(ii) Any object which is changing its position with respect to a reference point with time is said to be in motion.</td>
                <td><strong>TRUE</strong></td>
                <td>This is the fundamental physics definition of relative motion.</td>
              </tr>
              <tr>
                <td>(iii) 1 km = 100 cm.</td>
                <td><strong>FALSE</strong></td>
                <td><strong>Correction:</strong> 1 km = 1,000 m = 1,000 × 100 cm = <strong>100,000 cm</strong> (1 lakh cm).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Identifying True/False for parts (i) and (ii)</span><span class="marking-marks">0.5 Mark each</span></div>
          <div class="marking-row"><span class="marking-key">Marking False and providing correct conversion for part (iii)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch5-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Why cannot a handspan be used as a standard unit of length? Explain with a simple classroom example.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Scientific Reason:</strong><br>
            A handspan (the maximum distance between the tip of the thumb and the tip of the little finger when stretched out) varies widely from person to person depending on body size and age. An adult has a much longer handspan than a young child.
          </div>
          <div class="step">
            <strong>2. Classroom Example:</strong><br>
            If a teacher and a student both measure the length of the same classroom blackboard using their handspans:<br>
            • The teacher's handspan may measure 10 handspans.<br>
            • The student's smaller handspan may measure 14 handspans.<br>
            Because the value is not constant and cannot be universally reproduced, a handspan cannot serve as a standard scientific unit. Standard units like the <strong>metre (m)</strong> have fixed, constant lengths worldwide.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Explanation of variation in body dimensions</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Classroom example illustrating discrepancy</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch5-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">Take two measuring scales from your geometry box. Compare their smallest markings (divisions). What is the least count of each scale? Why is least count important in measurement?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Definition of Least Count:</strong><br>
            The smallest value of a physical quantity that can be measured directly and accurately using a measuring instrument is called its <strong>least count</strong>.
          </div>
          <div class="step">
            <strong>2. Comparison of Standard 15-cm School Rulers:</strong><br>
            • On a standard school plastic ruler, each 1 centimetre is subdivided into 10 equal divisions.<br>
            • Therefore, the value of 1 smallest division = 1 cm ÷ 10 = <strong>0.1 cm = 1 mm</strong>.<br>
            • The least count of a standard school ruler is <strong>1 mm</strong> (0.1 cm).
          </div>
          <div class="step">
            <strong>3. Importance of Least Count:</strong><br>
            Least count determines the maximum precision and resolution of an instrument. An object whose dimension is smaller than 1 mm cannot be accurately measured with a standard ruler without error.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct calculation of least count (1 mm or 0.1 cm)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Significance in precision and measurement limits</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch5-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">The distance between Radhika's home and her school is 1.5 km. Express this distance in: <br>(i) metres (m) <br>(ii) centimetres (cm)</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Given:</strong> Distance = 1.5 km
          </div>
          <div class="step">
            <strong>(i) Conversion into Metres (m):</strong><br>
            We know that 1 km = 1,000 m.<br>
            Therefore: Distance = 1.5 × 1,000 m = <strong>1,500 m</strong>.
          </div>
          <div class="step">
            <strong>(ii) Conversion into Centimetres (cm):</strong><br>
            We know that 1 m = 100 cm.<br>
            Therefore: Distance = 1,500 × 100 cm = <strong>150,000 cm</strong> (1.5 × 10⁵ cm).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Step-by-step conversion into metres (1,500 m)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Step-by-step conversion into centimetres (150,000 cm)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch5-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Explain with the help of a neat labelled diagram how you would measure the perimeter of the circular bottom of a drinking glass tumbler using a piece of thread and a metre scale.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <!-- SVG Diagram: Measuring Curved Rim with Thread -->
          <div class="math-diagram-wrap" style="margin: 15px auto; text-align: center; max-width: 520px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
            <svg viewBox="0 0 480 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
              <!-- Tumbler Base -->
              <ellipse cx="120" cy="75" rx="65" ry="40" fill="#f8fafc" stroke="#0284c7" stroke-width="2.5"/>
              <!-- Thread wrapped around -->
              <ellipse cx="120" cy="75" rx="67" ry="42" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
              <circle cx="53" cy="75" r="4" fill="#dc2626"/>
              <text x="40" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626">Mark A</text>
              <circle cx="187" cy="75" r="4" fill="#dc2626"/>
              <text x="195" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#dc2626">Mark B</text>
              <text x="120" y="80" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#0369a1" text-anchor="middle">Tumbler Rim</text>

              <!-- Arrow pointing to straight ruler -->
              <path d="M 230 75 L 260 75" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>
              
              <!-- Straightened thread on ruler -->
              <rect x="270" y="80" width="190" height="20" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
              <line x1="280" y1="80" x2="280" y2="92" stroke="#854d0e" stroke-width="1.5"/>
              <text x="280" y="98" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#854d0e" text-anchor="middle">0</text>
              <line x1="430" y1="80" x2="430" y2="92" stroke="#854d0e" stroke-width="1.5"/>
              <text x="430" y="98" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#854d0e" text-anchor="middle">L</text>
              <line x1="280" y1="70" x2="430" y2="70" stroke="#dc2626" stroke-width="2.5"/>
              <text x="355" y="62" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#dc2626" text-anchor="middle">Straightened Thread (Length = Perimeter)</text>
            </svg>
            <div style="font-size: 0.8rem; font-weight: 600; color: #64748b; margin-top: 4px;">Figure 5.2: Method of Measuring Curved Perimeter with Thread and Ruler</div>
          </div>

          <div class="step">
            <strong>Method &amp; Procedure:</strong><br>
            A straight rigid ruler cannot bend around the circular boundary of a glass tumbler. Therefore, we use an inelastic piece of cotton thread:
            <ol>
              <li>Tie a small knot or put an ink mark 'A' near one end of the thread.</li>
              <li>Place mark 'A' on any point along the rim of the tumbler base.</li>
              <li>Wrap the thread snugly all the way around the circular circumference without stretching or overlapping.</li>
              <li>Put a second ink mark 'B' where the thread meets mark 'A' to complete exactly one full turn.</li>
              <li>Unwind and stretch the thread straight along a standard metre scale, placing mark 'A' at 0 cm.</li>
              <li>The reading at mark 'B' directly gives the perimeter (circumference) of the tumbler base.</li>
            </ol>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Step-by-step description of thread wrapping &amp; marking</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Transferring to straight ruler &amp; reading procedure</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Neat labelled diagram</span><span class="marking-marks">0.5 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch5-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">The height of a person is 1.65 m. Express this height into centimetres (cm) and millimetres (mm).</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>Given:</strong> Height = 1.65 m
          </div>
          <div class="step">
            <strong>1. Conversion into Centimetres (cm):</strong><br>
            Since 1 m = 100 cm:<br>
            Height = 1.65 × 100 cm = <strong>165 cm</strong>.
          </div>
          <div class="step">
            <strong>2. Conversion into Millimetres (mm):</strong><br>
            Since 1 cm = 10 mm (or 1 m = 1,000 mm):<br>
            Height = 165 × 10 mm = <strong>1,650 mm</strong> (or 1.65 × 1,000 mm = 1,650 mm).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Height in centimetres (165 cm) with working</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Height in millimetres (1,650 mm) with working</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch5-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">A student wants to measure the thickness of a single 5-rupee coin using an ordinary 15-cm school ruler. How can this be done accurately? Explain with calculation steps.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <!-- SVG Diagram: Coin Stack Method -->
          <div class="math-diagram-wrap" style="margin: 15px auto; text-align: center; max-width: 480px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
            <svg viewBox="0 0 440 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg">
              <!-- Coin Stack -->
              <g id="coin-stack">
                <rect x="70" y="85" width="90" height="6" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="78" width="90" height="6" rx="2" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="71" width="90" height="6" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="64" width="90" height="6" rx="2" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="57" width="90" height="6" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="50" width="90" height="6" rx="2" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="43" width="90" height="6" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="36" width="90" height="6" rx="2" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="29" width="90" height="6" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
                <rect x="70" y="22" width="90" height="6" rx="2" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
              </g>
              <line x1="175" y1="22" x2="175" y2="91" stroke="#0284c7" stroke-width="2"/>
              <line x1="170" y1="22" x2="180" y2="22" stroke="#0284c7" stroke-width="2"/>
              <line x1="170" y1="91" x2="180" y2="91" stroke="#0284c7" stroke-width="2"/>
              <text x="190" y="60" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0369a1">Total Height H = 18 mm (10 coins)</text>

              <!-- Formula Box -->
              <rect x="250" y="25" width="180" height="75" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
              <text x="340" y="45" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#15803d" text-anchor="middle">Thickness of 1 Coin =</text>
              <text x="340" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#166534" text-anchor="middle">Total Height (H) ÷ n</text>
              <text x="340" y="85" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#15803d" text-anchor="middle">= 18 mm ÷ 10 = 1.8 mm</text>
            </svg>
            <div style="font-size: 0.8rem; font-weight: 600; color: #64748b; margin-top: 4px;">Figure 5.3: Method of Magnification via Multi-Coin Stacking</div>
          </div>

          <div class="step">
            <strong>1. Experimental Problem:</strong><br>
            A single coin is only about 1.5 to 2 mm thick. Because the smallest division on a standard school ruler is 1 mm, measuring a single coin directly carries high relative error.
          </div>
          <div class="step">
            <strong>2. Method of Multi-Coin Stacking:</strong><br>
            • Take 10 identical 5-rupee coins and stack them closely on top of each other without gaps.<br>
            • Place the ruler vertically along the stack and measure the total height <em>H</em> of the 10 coins (suppose <em>H</em> = 18 mm).<br>
            • Calculate the thickness of a single coin by dividing total height by 10:<br>
            <code>Thickness of 1 Coin = Total Stack Height (H) ÷ Number of Coins (n) = 18 mm ÷ 10 = 1.8 mm</code> (0.18 cm).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Concept of stacking multiple coins to minimize least-count error</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Formula and division step</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c6s-ch5-q9">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Differentiate between Rectilinear motion, Circular motion, and Periodic motion. Give two real-life examples for each type.</div>
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
                <th>Type of Motion</th>
                <th>Scientific Definition</th>
                <th>Two Real-Life Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rectilinear (Linear) Motion</strong></td>
                <td>Motion in which an object moves along a straight line path with all parts travelling in the same direction.</td>
                <td>1. A car moving on a straight highway.<br>2. An apple falling straight down from a tree.</td>
              </tr>
              <tr>
                <td><strong>Circular Motion</strong></td>
                <td>Motion in which an object moves along a circular path such that its distance from a fixed central point remains constant.</td>
                <td>1. The tip of the second hand of a watch.<br>2. A point marked on the blade of a rotating ceiling fan.</td>
              </tr>
              <tr>
                <td><strong>Periodic Motion</strong></td>
                <td>Motion that repeats itself at regular, equal intervals of time.</td>
                <td>1. The swinging of a clock pendulum.<br>2. A child swinging back and forth on a swing.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Rectilinear motion definition &amp; 2 examples</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Circular motion definition &amp; 2 examples</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Periodic motion definition &amp; 2 examples</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c6s-ch5-q10">
    <div class="q-head" onclick="toggleQ('c6s-ch5-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Observe different everyday objects around you. It is easier and more convenient to express the dimensions of some objects in mm, some in cm, and some in m. Make a list of three objects in each category with scientific reasons.</div>
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
                <th>Measurement Unit</th>
                <th>Objects Best Expressed in this Unit</th>
                <th>Scientific Convenience Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Millimetres (mm)</strong></td>
                <td>1. Thickness of a 10-rupee coin<br>2. Diameter of a ballpoint pen tip (0.5 mm or 0.7 mm)<br>3. Length of a tiny grain of rice</td>
                <td>These dimensions are extremely small (sub-centimetre); using cm would result in inconvenient decimal fractions.</td>
              </tr>
              <tr>
                <td><strong>Centimetres (cm)</strong></td>
                <td>1. Length of a pencil<br>2. Width of a science textbook<br>3. Length of a toothbrush</td>
                <td>Handheld personal items have lengths between 5 cm and 30 cm, making the centimetre scale easy to read and visualize.</td>
              </tr>
              <tr>
                <td><strong>Metres (m)</strong></td>
                <td>1. Length of a classroom blackboard<br>2. Height of a room door<br>3. Length of a curtain or saree</td>
                <td>Larger everyday dimensions exceed 100 cm; expressing them in metres avoids unwieldy large three- or four-digit numbers.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Three appropriate objects listed for millimetres (mm) with reason</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Three appropriate objects listed for centimetres (cm) with reason</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Three appropriate objects listed for metres (m) with reason</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Experimental Measurement Case Study)</div>
    <div class="q-text"><strong>Case Study: Measuring with a Broken Zero Mark:</strong><br>
      Sneha wanted to measure the length of her knitting needle using a 15-cm plastic ruler. However, the zero mark of the ruler was chipped and broken off. She placed the needle starting at the 2.0 cm mark and observed the other end at 14.3 cm.<br>
      (a) What is the true length of Sneha's knitting needle?<br>
      (b) What common error would occur if Sneha viewed the ruler mark from a side angle rather than vertically above?<br>
      (c) A tailor uses a flexible tape to measure chest size rather than a wooden metre ruler. Why?
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) True Length Calculation:</strong><br>
        When the zero mark is broken, subtract the initial reading from the final reading:<br>
        True Length = Final mark - Initial mark = 14.3 cm - 2.0 cm = <strong>12.3 cm</strong> (or 123 mm).</p>

        <p><strong>(b) Name of Error:</strong><br>
        Viewing from an oblique angle causes <strong>Parallax Error</strong>, leading to an inaccurate reading. The eye must be positioned perpendicularly directly above the measurement mark.</p>

        <p><strong>(c) Reason for Flexible Tape:</strong><br>
        The human body has curved surfaces. A rigid wooden ruler cannot bend around curves, whereas a flexible measuring tape bends smoothly along bodily contours to measure circumferences accurately.</p>
      </div>
    </div>
  </div>
</section>
`;

// ==========================================
// CHAPTER 10: Living Creatures: Exploring their Characteristics (9 Questions + CBQ)
// ==========================================
const ch10Html = `<section class="chapter-section" id="ch10">
  <div class="chapter-header">
    <div class="ch-badge">10</div>
    <div class="chapter-header-info">
      <h2>Chapter 10: Living Creatures: Exploring their Characteristics</h2>
      <p>NCERT Curiosity (Class 6) — Hallmarks of Life, Life Cycles, Metamorphosis, Seed Germination, Stimuli &amp; Plant Tropisms | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Biological Principles &amp; Life Processes</div>
    <ul class="concept-list">
      <li><strong>Hallmarks of Living Organisms:</strong> Cellular structure, Nutrition, Respiration, Growth, Excretion, Reproduction, Response to Stimuli, and a finite Lifespan ending in death.</li>
      <li><strong>Life Cycles:</strong> Every living creature undergoes sequential developmental changes from origin to maturity and reproduction:
        <ul>
          <li><em>Plants:</em> Seed → Germination (Radicle &amp; Plumule) → Seedling → Mature Plant → Flower &amp; Fruit → Seed.</li>
          <li><em>Animals with Metamorphosis:</em> Significant structural transformations between juvenile and adult stages (e.g., Frog: Egg → Aquatic Tadpole with tail &amp; gills → Four-legged Froglet → Terrestrial Adult Frog with lungs; Mosquito: Egg → Aquatic Larva → Pupa → Winged Adult).</li>
        </ul>
      </li>
      <li><strong>Conditions for Seed Germination:</strong> Moisture (water), warmth (suitable temperature), and air (oxygen). Light is not strictly required for initial germination under soil.</li>
      <li><strong>Plant Responses to Stimuli:</strong>
        <ul>
          <li><em>Geotropism:</em> Roots always grow downwards towards gravity (+ve geotropism), while shoots grow upwards away from gravity (-ve geotropism), regardless of how the seed is planted.</li>
          <li><em>Phototropism:</em> Plant shoots bend towards light sources to maximize photosynthetic light capture.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 1: Characteristics of Living Beings & Metamorphosis -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 580 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
      <text x="290" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Metamorphosis: Aquatic Tadpole to Terrestrial Adult Frog</text>
      
      <!-- Stage 1: Eggs -->
      <circle cx="60" cy="90" r="24" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <circle cx="53" cy="85" r="3" fill="#15803d"/>
      <circle cx="67" cy="86" r="3" fill="#15803d"/>
      <circle cx="60" cy="97" r="3" fill="#15803d"/>
      <text x="60" y="130" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">1. Eggs</text>
      <text x="60" y="142" font-family="system-ui, sans-serif" font-size="8.5" font-weight="500" fill="#64748b" text-anchor="middle">(in water)</text>

      <!-- Arrow 1 -->
      <path d="M 95 90 L 135 90" stroke="#047857" stroke-width="2" marker-end="url(#arrow)"/>

      <!-- Stage 2: Tadpole with Tail -->
      <g transform="translate(145, 65)">
        <ellipse cx="25" cy="25" rx="18" ry="12" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <path d="M 7 25 Q -15 20 -30 25 Q -15 30 7 25" fill="#86efac" stroke="#15803d" stroke-width="1.2"/>
        <circle cx="34" cy="22" r="2.5" fill="#0f172a"/>
        <text x="10" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">2. Tadpole</text>
        <text x="10" y="77" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#047857" text-anchor="middle">Long tail + Gills</text>
      </g>

      <!-- Arrow 2 -->
      <path d="M 235 90 L 275 90" stroke="#047857" stroke-width="2" marker-end="url(#arrow)"/>

      <!-- Stage 3: Tadpole with Legs -->
      <g transform="translate(290, 65)">
        <ellipse cx="25" cy="25" rx="18" ry="13" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
        <path d="M 8 25 Q -5 22 -15 25" stroke="#15803d" stroke-width="2"/>
        <line x1="20" y1="36" x2="16" y2="48" stroke="#15803d" stroke-width="2"/>
        <line x1="30" y1="36" x2="34" y2="48" stroke="#15803d" stroke-width="2"/>
        <circle cx="34" cy="21" r="2.5" fill="#0f172a"/>
        <text x="25" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">3. Froglet</text>
        <text x="25" y="77" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#047857" text-anchor="middle">Hind legs + Tail shrinking</text>
      </g>

      <!-- Arrow 3 -->
      <path d="M 385 90 L 425 90" stroke="#047857" stroke-width="2" marker-end="url(#arrow)"/>

      <!-- Stage 4: Adult Frog -->
      <g transform="translate(440, 60)">
        <ellipse cx="30" cy="30" rx="22" ry="16" fill="#4ade80" stroke="#166534" stroke-width="2"/>
        <!-- Eyes -->
        <circle cx="44" cy="20" r="4" fill="#ffffff" stroke="#166534" stroke-width="1.5"/>
        <circle cx="45" cy="20" r="2" fill="#0f172a"/>
        <!-- Legs -->
        <path d="M 16 35 Q 6 40 10 52" stroke="#166534" stroke-width="2.5" fill="none"/>
        <path d="M 38 38 Q 42 46 48 50" stroke="#166534" stroke-width="2.5" fill="none"/>
        <text x="30" y="70" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#166534" text-anchor="middle">4. Adult Frog</text>
        <text x="30" y="82" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#15803d" text-anchor="middle">Lungs + 4 Legs (No Tail)</text>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 10.1: Complete Metamorphic Life Cycle of a Frog</div>
  </div>

  <div class="ex-div">NCERT Exercise: Let Us Enhance Our Learning (100% Textbook Questions)</div>

  <!-- Q1 -->
  <div class="q-card" id="c6s-ch10-q1">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">List the similarities and differences in the life cycles of plants and animals.</div>
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
                <th>Feature / Aspect</th>
                <th>Similarities</th>
                <th>Differences (Plants vs Animals)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Beginning of Life</strong></td>
                <td>Both begin life from a single unit containing genetic material.</td>
                <td>• <strong>Plants:</strong> Begin from a seed or spore.<br>• <strong>Animals:</strong> Begin from an egg or direct birth (viviparous embryo).</td>
              </tr>
              <tr>
                <td><strong>Growth &amp; Development</strong></td>
                <td>Both grow irreversibly in size and complexity with time.</td>
                <td>• <strong>Plants:</strong> Indeterminate growth throughout life at meristems; produce new roots/branches continuously.<br>• <strong>Animals:</strong> Determinate growth; stop growing upon reaching adult maturity.</td>
              </tr>
              <tr>
                <td><strong>Metamorphosis / Stage Change</strong></td>
                <td>Both pass through distinct developmental phases.</td>
                <td>• <strong>Plants:</strong> Pass through germination, seedling, vegetative growth, flowering, and fruiting.<br>• <strong>Animals:</strong> Many undergo dramatic bodily metamorphosis (e.g., tadpole to frog, caterpillar to butterfly).</td>
              </tr>
              <tr>
                <td><strong>Reproduction &amp; Death</strong></td>
                <td>Both reproduce to continue their species and eventually experience natural death.</td>
                <td>• <strong>Plants:</strong> Reproduce via flowers, seeds, vegetative parts (cuttings, tubers).<br>• <strong>Animals:</strong> Reproduce sexually or asexually through specialized reproductive organs.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Key similarities listed (Growth, reproduction, life cycle progression)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Key differences listed (Beginning, growth pattern, mode of reproduction)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c6s-ch10-q2">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">The table given below shows some data. Study the data and try to find out examples appropriate for the conditions given in the second and third columns. If you think that an example for any of the conditions given below is not possible, explain why? <br>• Condition A: Does not move from place to place, but is living. <br>• Condition B: Moves from place to place, but is non-living. <br>• Condition C: Grows in size, but is non-living. <br>• Condition D: Does not grow, does not respire, does not reproduce, but is living.</div>
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
                <th>Condition</th>
                <th>Appropriate Example</th>
                <th>Scientific Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Condition A:</strong> Does not move from place to place, but is living.</td>
                <td><strong>Plants and Trees</strong> (e.g., Mango tree, Rose plant)</td>
                <td>Plants are rooted in soil and do not show locomotion, yet they perform all vital life functions (photosynthesis, respiration, internal growth, response to light).</td>
              </tr>
              <tr>
                <td><strong>Condition B:</strong> Moves from place to place, but is non-living.</td>
                <td><strong>Motor Car / Train / Cloud</strong></td>
                <td>Cars move on roads and clouds move across the sky due to external fuel energy or wind forces, but they lack cells, cannot reproduce, and do not respire.</td>
              </tr>
              <tr>
                <td><strong>Condition C:</strong> Grows in size, but is non-living.</td>
                <td><strong>Crystal growth (Alum) / Sand dune</strong></td>
                <td>A sand dune grows by external accumulation of wind-blown sand particles, and an alum crystal grows by deposition from solution; this is not internal biological cellular growth.</td>
              </tr>
              <tr>
                <td><strong>Condition D:</strong> Does not grow, does not respire, does not reproduce, but is living.</td>
                <td><strong>NOT POSSIBLE</strong></td>
                <td>An entity that lacks growth, respiration, and reproduction cannot be classified as living. These life processes are essential defining hallmarks of organismic life.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Correct identification of example for Condition A &amp; B</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct identification and explanation for Condition C</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Reasoned explanation why Condition D is scientifically impossible</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c6s-ch10-q3">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">You have learnt that different conditions are required for seed germination. How can we use this knowledge for the proper storage of grains and pulses?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Conditions Necessary for Germination:</strong><br>
            Seeds require <strong>moisture (water)</strong>, <strong>oxygen (air)</strong>, and <strong>warmth (suitable temperature)</strong> to break dormancy and germinate.
          </div>
          <div class="step">
            <strong>2. Application to Safe Grain Storage:</strong><br>
            To prevent grains and pulses from germinating (sprouting) or getting spoiled by fungi and pests during storage, we must intentionally deprive them of these germination conditions:
            <ul>
              <li><strong>Sun Drying:</strong> Grains are thoroughly dried in the sun to eliminate moisture content below 10-12%. Without water, seeds remain dormant and fungal mold cannot grow.</li>
              <li><strong>Airtight and Moisture-Proof Containers:</strong> Stored in sealed metal bins or dry silos to keep out atmospheric humidity and dampness.</li>
              <li><strong>Cool Storage:</strong> Kept in cool, well-ventilated granaries away from high heat.</li>
            </ul>
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Linking germination conditions (water, warmth, air) to dormancy</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Practical storage methods (sun drying, airtight bins, moisture prevention)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c6s-ch10-q4">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">You have learnt that a tail is present in a tadpole, but it disappears as it grows into a frog. What is the advantage of having a tail in the tadpole stage? Why is it lost in the adult frog?</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Advantage of a Tail in the Tadpole Stage:</strong><br>
            A tadpole is an exclusively aquatic organism with no limbs. Its long, finned muscular tail provides essential propulsion for swimming through water, escaping predators, and foraging for aquatic vegetation.
          </div>
          <div class="step">
            <strong>2. Reason for Loss of Tail in the Adult Frog:</strong><br>
            During metamorphosis, the frog develops powerful, muscular hind limbs designed for leaping on land and webbed feet for swimming. The tail is reabsorbed by the body tissues to recycle nutrients. On land, a long aquatic tail would be an unnecessary hindrance to hopping and locomotion.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Advantage of tail for aquatic propulsion in tadpole stage</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Reason for tail reabsorption (development of hopping limbs for terrestrial life)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c6s-ch10-q5">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Charan says that a wooden log is non-living as it cannot move. Charu counters it by saying that it is living because it is made of wood obtained from trees. Give your arguments in favour or against the two statements given by Charan and Charu.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Evaluation of Charan's Statement:</strong><br>
            • <em>Conclusion:</em> Charan is <strong>partially correct in his conclusion, but his reasoning is scientifically flawed.</strong><br>
            • <em>Scientific Argument:</em> A wooden log is indeed non-living, but lack of locomotion is NOT the reason. Many living organisms, such as trees and corals, do not move from place to place yet are living. The log is non-living because its cells are dead, it does not respire, does not take nutrients, and cannot reproduce.
          </div>
          <div class="step">
            <strong>2. Evaluation of Charu's Statement:</strong><br>
            • <em>Conclusion:</em> Charu is <strong>scientifically incorrect.</strong><br>
            • <em>Scientific Argument:</em> While wood was once part of a living tree, once severed from the tree and dried, the cells die. Something that originated from a living organism is not automatically living if it has permanently ceased all metabolic life processes (just as a fallen dry leaf or a bird's feather is non-living).
          </div>
          <div class="step">
            <strong>3. Final Verdict:</strong><br>
            A wooden log is classified as <strong>non-living (dead organic matter)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Analysis of Charan's argument (correct conclusion, incomplete reason)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Analysis of Charu's argument (distinguishing living origin from current living status)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct biological conclusion based on metabolic life processes</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c6s-ch10-q6">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">What are the similarities and distinguishing features in the life cycles of a mosquito and a frog?</div>
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
                <th>Aspect</th>
                <th>Mosquito Life Cycle</th>
                <th>Frog Life Cycle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Similarities</strong></td>
                <td colspan="2">• Both lay eggs in water (aquatic early development).<br>• Both undergo complete metamorphosis with distinct juvenile forms.<br>• The early stage looks entirely different from the adult form.<br>• Both require water bodies for species reproduction.</td>
              </tr>
              <tr>
                <td><strong>Stages of Development</strong></td>
                <td>4 distinct stages: <strong>Egg → Larva (wriggler) → Pupa (tumbler) → Adult</strong></td>
                <td>3 primary stages: <strong>Egg → Tadpole (with tail &amp; gills) → Adult Frog</strong></td>
              </tr>
              <tr>
                <td><strong>Taxonomic Group</strong></td>
                <td><strong>Insect</strong> (Invertebrate arthropod with 6 legs and wings)</td>
                <td><strong>Amphibian</strong> (Vertebrate animal with 4 legs and backbone)</td>
              </tr>
              <tr>
                <td><strong>Respiration in Adult</strong></td>
                <td>Breathes via <strong>spiracles and tracheal tubes</strong></td>
                <td>Breathes via <strong>lungs and moist skin</strong></td>
              </tr>
              <tr>
                <td><strong>Adult Habitat &amp; Locomotion</strong></td>
                <td>Terrestrial and aerial (flies using wings)</td>
                <td>Amphibious (hops on land, swims in water using webbed legs)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Key similarities listed (aquatic egg laying, metamorphosis)</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Key distinguishing features listed (stages, breathing organs, taxonomy)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c6s-ch10-q7">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">A potted plant is placed horizontally on its side and provided with all the conditions suitable for its growth (light, moisture, warmth). Draw what you expect to see in the shoot and the root of the plant after one week. Write down the scientific reasons.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <!-- SVG Diagram: Plant Geotropism and Phototropism -->
          <div class="math-diagram-wrap" style="margin: 15px auto; text-align: center; max-width: 500px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
            <svg viewBox="0 0 460 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
              <text x="230" y="20" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Response of Horizontally Placed Potted Plant After 1 Week</text>
              
              <!-- Horizontal Pot -->
              <rect x="60" y="70" width="70" height="50" rx="4" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
              <ellipse cx="130" cy="95" rx="8" ry="25" fill="#78350f"/>
              <text x="95" y="100" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#9a3412" text-anchor="middle">Horizontal Pot</text>

              <!-- Shoot bending upwards -->
              <path d="M 135 95 C 180 95, 200 80, 220 40" fill="none" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>
              <!-- Leaves on shoot -->
              <ellipse cx="220" cy="38" rx="8" ry="12" fill="#22c55e" transform="rotate(30 220 38)"/>
              <ellipse cx="205" cy="55" rx="7" ry="10" fill="#22c55e" transform="rotate(-40 205 55)"/>
              <text x="235" y="35" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#15803d">Shoot bends UP (+ve Phototropism, -ve Geotropism)</text>

              <!-- Root bending downwards -->
              <path d="M 135 95 C 160 95, 175 110, 190 145" fill="none" stroke="#92400e" stroke-width="4" stroke-linecap="round"/>
              <path d="M 180 130 Q 185 140 195 142" stroke="#b45309" stroke-width="2" fill="none"/>
              <text x="200" y="148" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#92400e">Root bends DOWN (+ve Geotropism)</text>
            </svg>
            <div style="font-size: 0.8rem; font-weight: 600; color: #64748b; margin-top: 4px;">Figure 10.2: Directional Growth Responses (Tropisms) in Horizontally Placed Plant</div>
          </div>

          <div class="step">
            <strong>Observations After One Week:</strong><br>
            • <strong>Stem / Shoot:</strong> The shoot curves and grows <strong>upward</strong> towards sunlight (away from gravity).<br>
            • <strong>Root:</strong> The root curves and grows <strong>downward</strong> into the soil (towards gravity).
          </div>
          <div class="step">
            <strong>Scientific Reasons:</strong><br>
            1. <strong>Negative Geotropism &amp; Positive Phototropism of Shoot:</strong> Shoots are programmed to grow upward against gravity (-ve geotropism) and towards light (+ve phototropism) so leaves can capture sunlight for photosynthesis.<br>
            2. <strong>Positive Geotropism of Root:</strong> Roots are programmed to grow towards gravity (+ve geotropism) into the ground to anchor the plant and absorb water and mineral salts from the soil.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Accurate diagram showing upward shoot and downward root</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Scientific reason for shoot growth (Phototropism / Negative geotropism)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Scientific reason for root growth (Positive geotropism)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c6s-ch10-q8">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">Tara and Vijay set up the experiment with soaked bean seeds planted in different orientations (micropyle pointing up, down, left, right). What do you think they want to find out? How will they know if their hypothesis is correct?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <!-- SVG Diagram: Tara & Vijay Seed Orientation Experiment -->
          <div class="math-diagram-wrap" style="margin: 15px auto; text-align: center; max-width: 520px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
            <svg viewBox="0 0 480 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
              <text x="240" y="20" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Tara &amp; Vijay's Seed Orientation Investigation</text>
              
              <!-- Seed A (Upright) -->
              <g transform="translate(60, 40)">
                <ellipse cx="25" cy="30" rx="15" ry="20" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
                <path d="M 25 10 Q 25 0 25 -10" stroke="#16a34a" stroke-width="3" fill="none"/>
                <path d="M 25 50 Q 25 70 25 80" stroke="#b45309" stroke-width="2.5" fill="none"/>
                <text x="25" y="100" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#475569" text-anchor="middle">Upright</text>
              </g>

              <!-- Seed B (Inverted / Upside Down) -->
              <g transform="translate(180, 40)">
                <ellipse cx="25" cy="30" rx="15" ry="20" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
                <!-- Plumule emerges down then bends UP -->
                <path d="M 25 50 Q 40 55 40 30 Q 40 5 40 -10" stroke="#16a34a" stroke-width="2.5" fill="none"/>
                <!-- Radicle emerges up then curves DOWN -->
                <path d="M 25 10 Q 10 5 10 30 Q 10 65 15 80" stroke="#b45309" stroke-width="2.5" fill="none"/>
                <text x="25" y="100" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#475569" text-anchor="middle">Inverted</text>
              </g>

              <!-- Seed C (Horizontal / Sideways) -->
              <g transform="translate(300, 40)">
                <ellipse cx="25" cy="30" rx="20" ry="15" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
                <path d="M 45 30 Q 55 25 55 -10" stroke="#16a34a" stroke-width="2.5" fill="none"/>
                <path d="M 5 30 Q -5 35 -5 80" stroke="#b45309" stroke-width="2.5" fill="none"/>
                <text x="25" y="100" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#475569" text-anchor="middle">Sideways</text>
              </g>

              <rect x="375" y="45" width="95" height="50" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
              <text x="422" y="65" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#15803d" text-anchor="middle">All Shoots → UP</text>
              <text x="422" y="80" font-family="system-ui, sans-serif" font-size="8.5" font-weight="700" fill="#92400e" text-anchor="middle">All Roots → DOWN</text>
            </svg>
            <div style="font-size: 0.8rem; font-weight: 600; color: #64748b; margin-top: 4px;">Figure 10.3: Gravitropic Response Irrespective of Seed Orientation</div>
          </div>

          <div class="step">
            <strong>1. Aim of the Experiment:</strong><br>
            Tara and Vijay want to investigate: <em>"Does the initial planting orientation or direction of a seed affect the direction in which its radicle (root) and plumule (shoot) emerge and grow?"</em>
          </div>
          <div class="step">
            <strong>2. How Will They Know If They Are Correct?</strong><br>
            • They will observe the seeds after 4 to 6 days of germination.<br>
            • In every single seed, regardless of whether it was planted pointing upwards, upside down, or horizontally sideways, the <strong>radicle always curves downward into the soil</strong> and the <strong>plumule always curves upward towards the air</strong>.<br>
            • This confirms their hypothesis that gravitational stimulus (geotropism) guides plant organ direction, not the physical orientation of the planted seed.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Clear statement of scientific aim / question being tested</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Criterion for confirmation (observing roots grow down, shoots grow up in all orientations)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c6s-ch10-q9">
    <div class="q-head" onclick="toggleQ('c6s-ch10-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">Design a scientific experiment to investigate the effect of temperature on the germination of seeds. Describe the materials required, step-by-step procedure, expected observations, and conclusion.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            <strong>1. Aim:</strong><br>
            To determine how temperature affects the rate and percentage of seed germination in gram (chana) or moong seeds.
          </div>
          <div class="step">
            <strong>2. Materials Required:</strong><br>
            3 identical Petri dishes or small bowls, moist cotton wool, 30 healthy soaked moong seeds (10 per dish), access to a refrigerator (cold, ~4 °C), an ordinary room (~22-25 °C), and a warm sunny area or incubator (~32-35 °C).
          </div>
          <div class="step">
            <strong>3. Step-by-Step Procedure:</strong><br>
            <ol>
              <li>Line all three Petri dishes with identical layers of wet cotton wool to ensure equal moisture.</li>
              <li>Place 10 soaked moong seeds in each dish with equal spacing.</li>
              <li><strong>Dish A (Cold Environment):</strong> Place inside a refrigerator at 4 °C.</li>
              <li><strong>Dish B (Room Temperature / Moderate Warmth):</strong> Place on a table in the classroom at 22-25 °C.</li>
              <li><strong>Dish C (Excessively Hot / Warm):</strong> Place on a hot window sill or near a heat source at 38-40 °C.</li>
              <li>Keep cotton moist in all dishes daily and record the number of sprouted seeds after 3 to 5 days.</li>
            </ol>
          </div>
          <div class="step">
            <strong>4. Expected Observations:</strong><br>
            • <em>Dish A (Refrigerator):</em> No germination or very sluggish emergence; cold temperature inhibits metabolic enzymes.<br>
            • <em>Dish B (Room Temperature):</em> Rapid and healthy germination; almost all seeds develop vigorous radicles and plumules.<br>
            • <em>Dish C (Very Hot):</em> Seeds dry out quickly or rot; poor germination.
          </div>
          <div class="step">
            <strong>5. Scientific Conclusion:</strong><br>
            Seeds require an optimal moderate temperature (around 20 °C to 28 °C) for enzyme activity and cellular growth during germination. Extreme cold prevents germination by arresting metabolic reactions.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Aim and materials required listed</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Controlled variable procedure with 3 temperature conditions</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Expected observations and biological conclusion on optimal temperature</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- CBQ Case Study -->
  <div class="cbq-card">
    <div class="cbq-badge">CBSE Competency-Based Question (Metamorphosis &amp; Amphibian Biology Case Study)</div>
    <div class="q-text"><strong>Case Study: Adaptation and Metamorphosis in Pond Ecosystems:</strong><br>
      During a monsoon ecology survey, students collected water samples from a local pond. They observed hundreds of tiny, fish-like tadpoles swimming actively using tails and breathing via external gills. Four weeks later, the pond began drying up, and they observed that the surviving creatures had grown four sturdy legs, lost their tails, and were leaping onto the muddy banks, breathing through lungs.<br>
      (a) What biological term describes this dramatic transformation from larva to adult?<br>
      (b) Why would an adult frog with gills have failed to survive once the pond dried up?<br>
      (c) Give one other example of an organism that undergoes a similar developmental transformation.
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Biological Term:</strong><br>
        The transformation is called <strong>Metamorphosis</strong> (the process of rapid biological transformation from an immature larval form to an adult form in two or more distinct stages).</p>

        <p><strong>(b) Survival Significance:</strong><br>
        Gills can only extract dissolved oxygen from liquid water. Once the pond dried up, gills would collapse and dry out, preventing oxygen uptake. Adult frogs develop <strong>lungs and moist skin</strong> to breathe atmospheric gaseous oxygen directly, allowing them to migrate and survive on land.</p>

        <p><strong>(c) Additional Example:</strong><br>
        • <strong>Butterfly / Silk moth:</strong> Undergoes complete metamorphosis from caterpillar (larva) to pupa (chrysalis/cocoon) and finally into a winged adult butterfly.<br>
        • (Or <strong>Mosquito:</strong> Aquatic wriggler larva and pupa transform into a winged terrestrial/aerial adult).
        </p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch5.html'), ch5Html, 'utf8');
console.log('Chapter 5 correctly written with 10 questions + CBQ.');

fs.writeFileSync(path.join(chDir, 'ch10.html'), ch10Html, 'utf8');
console.log('Chapter 10 correctly written with 9 questions + CBQ.');
