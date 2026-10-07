const fs = require('fs');
const path = require('path');
const chDir = path.join(__dirname, '..', 'chapters-c8m');

const ch12Html = `<section class="chapter-section" id="ch12">
  <div class="chapter-header">
    <div class="ch-badge">12</div>
    <div class="chapter-header-info">
      <h2>Chapter 12: Tales by Dots and Lines</h2>
      <p>NCERT Ganita Prakash (Class 8 Part 2) — Cartesian Coordinate System, Ordered Pairs, Plotting Points &amp; Linear Graphs | CBSE 2026-27</p>
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-header">📌 Key Coordinate Geometry Principles &amp; Graphing Rules</div>
    <ul class="concept-list">
      <li><strong>Cartesian Coordinate System:</strong> A 2D planar system created by two mutually perpendicular number lines intersecting at the <strong>Origin O(0, 0)</strong>:
        <ul>
          <li><strong>X-axis:</strong> The horizontal number line.</li>
          <li><strong>Y-axis:</strong> The vertical number line.</li>
          <li>The two axes divide the plane into four <strong>Quadrants</strong> (I, II, III, IV).</li>
        </ul>
      </li>
      <li><strong>Ordered Pair (x, y):</strong>
        <ul>
          <li>The first coordinate <em>x</em> is the <strong>abscissa</strong> (perpendicular distance from the y-axis).</li>
          <li>The second coordinate <em>y</em> is the <strong>ordinate</strong> (perpendicular distance from the x-axis).</li>
          <li>Points lying on the x-axis always have ordinate <code>y = 0</code> (form: <code>(x, 0)</code>).</li>
          <li>Points lying on the y-axis always have abscissa <code>x = 0</code> (form: <code>(0, y)</code>).</li>
        </ul>
      </li>
      <li><strong>Linear Graphs:</strong> A line graph in which all data points lie on a single continuous straight line.
        <ul>
          <li>Direct proportional relationships (e.g., Perimeter of square <code>P = 4s</code>, Cost = k × Quantity) always form straight linear graphs passing through the origin.</li>
          <li>Non-linear relations (e.g., Area of square <code>A = s²</code>) form parabolic curves, not straight lines.</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- SVG Diagram 12: Cartesian Coordinate Plane with Quadrants -->
  <div class="math-diagram-wrap" style="margin: 20px auto; text-align: center; max-width: 620px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <svg viewBox="0 0 540 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <text x="270" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Cartesian Coordinate Framework &amp; Ordered Pair Positioning</text>
      
      <!-- Coordinate Grid and Axes -->
      <g transform="translate(270, 115)">
        <!-- Grid lines -->
        <line x1="-180" y1="-80" x2="180" y2="-80" stroke="#f1f5f9" stroke-width="1"/>
        <line x1="-180" y1="-40" x2="180" y2="-40" stroke="#f1f5f9" stroke-width="1"/>
        <line x1="-180" y1="40" x2="180" y2="40" stroke="#f1f5f9" stroke-width="1"/>
        <line x1="-180" y1="80" x2="180" y2="80" stroke="#f1f5f9" stroke-width="1"/>
        
        <!-- X and Y Axes -->
        <line x1="-200" y1="0" x2="200" y2="0" stroke="#334155" stroke-width="2"/>
        <line x1="0" y1="-95" x2="0" y2="95" stroke="#334155" stroke-width="2"/>
        <polygon points="205,0 195,-4 195,4" fill="#334155"/>
        <polygon points="0,-100 -4,-90 4,-90" fill="#334155"/>

        <text x="210" y="4" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">X</text>
        <text x="-215" y="4" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">X′</text>
        <text x="-4" y="-105" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">Y</text>
        <text x="-4" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">Y′</text>
        <text x="-12" y="15" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#64748b">O(0,0)</text>

        <!-- Quadrant labels -->
        <text x="90" y="-55" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#94a3b8">Quadrant I (+, +)</text>
        <text x="-90" y="-55" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#94a3b8" text-anchor="end">Quadrant II (−, +)</text>
        <text x="-90" y="65" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#94a3b8" text-anchor="end">Quadrant III (−, −)</text>
        <text x="90" y="65" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#94a3b8">Quadrant IV (+, −)</text>

        <!-- Plotted sample point P(3, 2) -->
        <circle cx="100" cy="-60" r="4.5" fill="#2563eb"/>
        <line x1="100" y1="0" x2="100" y2="-60" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="0" y1="-60" x2="100" y2="-60" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="110" y="-65" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1d4ed8">P(3, 2)</text>
      </g>
    </svg>
    <div style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-top: 6px;">Figure 12.1: Geometric Architecture of the 2D Cartesian Coordinate System</div>
  </div>

  <div class="ex-div">NCERT Ganita Prakash: Figure It Out &amp; Comprehensive Exercises (100% Questions Solved)</div>

  <!-- Q1 -->
  <div class="q-card" id="c8m-ch12-q1">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q1')">
      <div class="q-num">Q1</div>
      <div class="q-text">Plot the following points on a graph sheet and verify if they lie on a line:<br>(a) A(4, 0), B(4, 2), C(4, 6), D(4, 2.5)<br>(b) P(1, 1), Q(2, 2), R(3, 3), S(4, 4)<br>(c) K(2, 3), L(5, 3), M(5, 5), N(2, 5)</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(a) Points A(4, 0), B(4, 2), C(4, 6), D(4, 2.5):</strong><br>
            All these points share the exact same x-coordinate <code>x = 4</code>.<br>
            When plotted, they all lie on a single vertical line parallel to the y-axis, located 4 units to the right.<br>
            Conclusion: <strong>Yes, they lie on a straight line (the line x = 4)</strong>.<br><br>

            • <strong>(b) Points P(1, 1), Q(2, 2), R(3, 3), S(4, 4):</strong><br>
            For every point, the x-coordinate equals the y-coordinate (<code>y = x</code>).<br>
            When plotted and connected, they form a single straight line passing through the origin at an angle of 45°.<br>
            Conclusion: <strong>Yes, they lie on a straight line (the line y = x)</strong>.<br><br>

            • <strong>(c) Points K(2, 3), L(5, 3), M(5, 5), N(2, 5):</strong><br>
            Joining these four points in sequence creates four segments: KL is horizontal (y = 3), LM is vertical (x = 5), MN is horizontal (y = 5), and NK is vertical (x = 2).<br>
            Together they enclose a rectangle of length 3 units and breadth 2 units.<br>
            Conclusion: <strong>No, they do NOT lie on a single line; they form a rectangle</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">(a) Yes, vertical line x = 4</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">(b) Yes, line y = x; (c) No, forms a rectangle</span><span class="marking-marks">2 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q2 -->
  <div class="q-card" id="c8m-ch12-q2">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q2')">
      <div class="q-num">Q2</div>
      <div class="q-text">Draw the line passing through (2, 3) and (3, 2). Find the coordinates of the points at which this line meets the x-axis and the y-axis.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. Notice the sum of coordinates for both points: 2 + 3 = 5 and 3 + 2 = 5.<br>
            The equation of the straight line is: <code>x + y = 5</code>.<br><br>
            2. <strong>Intersection with x-axis:</strong><br>
            On the x-axis, the y-coordinate is 0.<br>
            Substituting y = 0 into x + y = 5:<br>
            x + 0 = 5 ⇒ x = 5.<br>
            Point of intersection with x-axis is <strong>(5, 0)</strong>.<br><br>
            3. <strong>Intersection with y-axis:</strong><br>
            On the y-axis, the x-coordinate is 0.<br>
            Substituting x = 0 into x + y = 5:<br>
            0 + y = 5 ⇒ y = 5.<br>
            Point of intersection with y-axis is <strong>(0, 5)</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Line equation x + y = 5</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Intercepts: (5, 0) on x-axis and (0, 5) on y-axis</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q3 -->
  <div class="q-card" id="c8m-ch12-q3">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q3')">
      <div class="q-num">Q3</div>
      <div class="q-text">Write the coordinates of the vertices of a triangle ABC where A lies on the y-axis at distance 4 units above origin, B lies at origin (0, 0), and C lies on the x-axis at distance 3 units to the right of origin. Also find the length of hypotenuse AC.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. <strong>Coordinates of vertices:</strong><br>
            - B is at the origin: <strong>B(0, 0)</strong>.<br>
            - A lies on y-axis at distance 4: <strong>A(0, 4)</strong>.<br>
            - C lies on x-axis at distance 3: <strong>C(3, 0)</strong>.<br><br>
            2. Since the x-axis and y-axis are perpendicular, ΔABC is right-angled at B(0, 0) with legs AB = 4 units and BC = 3 units.<br><br>
            3. By Pythagoras Theorem:<br>
            AC² = AB² + BC² = 4² + 3² = 16 + 9 = 25.<br>
            AC = √25 = <strong>5 units</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Coordinates: A(0, 4), B(0, 0), C(3, 0)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Hypotenuse AC = 5 units</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q4 -->
  <div class="q-card" id="c8m-ch12-q4">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q4')">
      <div class="q-num">Q4</div>
      <div class="q-text">State whether true or false. Correct that are false:<br>(i) A point whose x coordinate is zero and y-coordinate is non-zero will lie on the y-axis.<br>(ii) A point whose y coordinate is zero and x-coordinate is 5 will lie on y-axis.<br>(iii) The coordinates of the origin are (0, 0).</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(i) True:</strong> Any point of the form (0, y) where x = 0 has zero horizontal displacement from the y-axis, and therefore lies directly on the y-axis.<br><br>
            • <strong>(ii) False:</strong> A point with y = 0 and x = 5 has coordinates (5, 0). Since its vertical distance from the x-axis is zero, it lies on the <strong>x-axis</strong> (not the y-axis).<br><br>
            • <strong>(iii) True:</strong> The origin is the intersection of both the horizontal (x = 0) and vertical (y = 0) axes, hence its coordinates are precisely (0, 0).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">(i) True, (iii) True</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">(ii) False with correction (lies on x-axis)</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q5 -->
  <div class="q-card" id="c8m-ch12-q5">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q5')">
      <div class="q-num">Q5</div>
      <div class="q-text">Draw a graph for the following table of values, with suitable scales on the axes:<br>Side of square (in cm): 2 &nbsp;|&nbsp; 3 &nbsp;|&nbsp; 3.5 |&nbsp; 5 &nbsp;|&nbsp; 6<br>Perimeter (in cm): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 &nbsp;|&nbsp; 12 |&nbsp; 14 &nbsp;|&nbsp; 20 |&nbsp; 24<br>Is it a linear graph?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. <strong>Mathematical Relation:</strong> The perimeter of a square with side <em>s</em> is given by <code>P = 4s</code>.<br>
            Ratio <code>Perimeter / Side = 8/2 = 12/3 = 14/3.5 = 20/5 = 24/6 = 4</code> (Constant).<br><br>
            2. <strong>Graphing Protocol:</strong><br>
            - Plot Side (s) along the x-axis: Scale 1 cm = 1 unit.<br>
            - Plot Perimeter (P) along the y-axis: Scale 1 cm = 4 units.<br>
            - Plot the points: (2, 8), (3, 12), (3.5, 14), (5, 20), (6, 24).<br><br>
            3. Connecting the plotted points with a straightedge produces an unbroken, straight ray starting from origin (0, 0).<br><br>
            4. Conclusion: <strong>Yes, it is a linear graph</strong>, because Perimeter varies directly with side length.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Scale selection and plotting points correctly</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">Joining points to show straight line passing through (0,0)</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q6 -->
  <div class="q-card" id="c8m-ch12-q6">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q6')">
      <div class="q-num">Q6</div>
      <div class="q-text">Consider the relation between side of a square and its area:<br>Side of square (cm): 2 &nbsp;|&nbsp; 3 &nbsp;|&nbsp; 4 &nbsp;|&nbsp; 5 &nbsp;|&nbsp; 6<br>Area (cm²): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;|&nbsp; 9 &nbsp;|&nbsp; 16 |&nbsp; 25 |&nbsp; 36<br>Draw the graph. Is this a linear graph? Explain why.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. <strong>Mathematical Relation:</strong> <code>Area = s²</code> (quadratic relation).<br>
            Check the ratio <code>Area / Side</code>:<br>
            4/2 = 2; 9/3 = 3; 16/4 = 4; 25/5 = 5; 36/6 = 6.<br>
            The ratio is not constant; it increases continuously with side length.<br><br>
            2. When the points (2, 4), (3, 9), (4, 16), (5, 25), (6, 36) are plotted on coordinate axes, connecting them does not yield a straight line, but a curve bending upwards (a parabola).<br><br>
            3. Conclusion: <strong>No, it is NOT a linear graph</strong>, because the relationship between side and area is quadratic (Area ∝ side²), not directly proportional.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Plotting points and observing upward-curving path</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Justification: Area = s² is quadratic, not linear</span><span class="marking-marks">1 Mark</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q7 -->
  <div class="q-card" id="c8m-ch12-q7">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q7')">
      <div class="q-num">Q7</div>
      <div class="q-text">A courier-person cycles from a town to a neighbouring suburban area to deliver a parcel. His distance from the town at different times is shown by the following graph:<br>At 8:00 am: 0 km; at 9:00 am: 10 km; at 10:00 am: 16 km; at 10:30 am: 16 km; at 11:30 am: 22 km.<br>(a) What was the scale taken for the time axis?<br>(b) How much time did the person take for the travel?<br>(c) How far is the place of the merchant from the town?<br>(d) Did the person stop on his way? Explain.<br>(e) During which period did he ride fastest?</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(a) Scale for time axis:</strong> 4 units on grid = 1 hour (or 1 unit = 15 minutes).<br><br>
            • <strong>(b) Total travel time:</strong> The person started at 8:00 am and reached at 11:30 am.<br>
            Total time = 11:30 − 8:00 = <strong>3 1/2 hours (3 hours 30 minutes)</strong>.<br><br>
            • <strong>(c) Distance of destination:</strong> The final point at 11:30 am corresponds to <strong>22 km</strong>.<br><br>
            • <strong>(d) Stop during journey:</strong> <strong>Yes</strong>, between 10:00 am and 10:30 am, the graph is a horizontal flat line (distance remains constant at 16 km for 30 minutes).<br><br>
            • <strong>(e) Fastest period:</strong><br>
            - 8:00 am to 9:00 am: Speed = (10 − 0) / 1 = <strong>10 km/h</strong>.<br>
            - 9:00 am to 10:00 am: Speed = (16 − 10) / 1 = 6 km/h.<br>
            - 10:30 am to 11:30 am: Speed = (22 − 16) / 1 = 6 km/h.<br>
            He rode fastest between <strong>8:00 am and 9:00 am</strong> (speed = 10 km/h).
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">(a), (b), (c) answers</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">(d) Yes (horizontal line 10 to 10:30), (e) 8:00 to 9:00 am</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q8 -->
  <div class="q-card" id="c8m-ch12-q8">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q8')">
      <div class="q-num">Q8</div>
      <div class="q-text">A bank offers 8% simple interest per annum on deposits. Draw a linear graph to illustrate the relation between the deposit sum (Principal) and the annual Simple Interest earned:<br>Deposit (₹): 1000 &nbsp;|&nbsp; 2000 &nbsp;|&nbsp; 3000 &nbsp;|&nbsp; 4000 &nbsp;|&nbsp; 5000<br>Use the graph to find: (i) The annual interest on ₹ 2500, (ii) The investment needed to earn ₹ 280 interest.</div>
      <div class="q-marks">[3 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <p><strong>Formula:</strong> <code>SI = (P × 8 × 1) / 100 = 0.08 P</code>.</p>
          <div class="step">
            1. <strong>Table of Values:</strong><br>
            • P = ₹ 1000 ⇒ SI = ₹ 80.<br>
            • P = ₹ 2000 ⇒ SI = ₹ 160.<br>
            • P = ₹ 3000 ⇒ SI = ₹ 240.<br>
            • P = ₹ 4000 ⇒ SI = ₹ 320.<br>
            • P = ₹ 5000 ⇒ SI = ₹ 400.<br><br>
            2. <strong>Graph Readings:</strong><br>
            • <strong>(i) Interest on ₹ 2500:</strong><br>
            Find P = 2500 on the x-axis, trace vertically to the line and read the y-axis:<br>
            SI = 0.08 × 2500 = <strong>₹ 200</strong>.<br><br>
            • <strong>(ii) Investment to earn ₹ 280 interest:</strong><br>
            Find SI = 280 on the y-axis, trace horizontally to the line and read the x-axis:<br>
            P = 280 / 0.08 = <strong>₹ 3,500</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Graph values table and linear plotting through origin</span><span class="marking-marks">1.5 Marks</span></div>
          <div class="marking-row"><span class="marking-key">(i) ₹ 200, (ii) ₹ 3,500 derived from graph</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q9 -->
  <div class="q-card" id="c8m-ch12-q9">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q9')">
      <div class="q-num">Q9</div>
      <div class="q-text">In which quadrant or on which axis do each of the following points lie?<br>(a) (−2, 4) &nbsp;&nbsp;&nbsp; (b) (3, −1) &nbsp;&nbsp;&nbsp; (c) (−1, 0) &nbsp;&nbsp;&nbsp; (d) (1, 2) &nbsp;&nbsp;&nbsp; (e) (−3, −5) &nbsp;&nbsp;&nbsp; (f) (0, −4)</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            • <strong>(a) (−2, 4):</strong> x is negative, y is positive ⇒ <strong>Quadrant II</strong>.<br>
            • <strong>(b) (3, −1):</strong> x is positive, y is negative ⇒ <strong>Quadrant IV</strong>.<br>
            • <strong>(c) (−1, 0):</strong> y-coordinate is 0 ⇒ <strong>Negative x-axis</strong>.<br>
            • <strong>(d) (1, 2):</strong> Both x and y are positive ⇒ <strong>Quadrant I</strong>.<br>
            • <strong>(e) (−3, −5):</strong> Both x and y are negative ⇒ <strong>Quadrant III</strong>.<br>
            • <strong>(f) (0, −4):</strong> x-coordinate is 0 ⇒ <strong>Negative y-axis</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Sign analysis for 2D plane quadrants</span><span class="marking-marks">0.5 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Correct placement for all 6 points</span><span class="marking-marks">1.5 Marks</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Q10 -->
  <div class="q-card" id="c8m-ch12-q10">
    <div class="q-head" onclick="toggleQ('c8m-ch12-q10')">
      <div class="q-num">Q10</div>
      <div class="q-text">Find the coordinates of the fourth vertex D of a parallelogram ABCD, given that three vertices are A(1, 1), B(4, 1), and C(5, 4). Calculate the area of the parallelogram.</div>
      <div class="q-marks">[2 Marks]</div>
      <div class="q-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
    </div>
    <div class="q-answer">
      <div class="answer-box">
        <div class="answer-label">✅ CBSE Standard Step-by-Step Solution</div>
        <div class="answer-text">
          <div class="step">
            1. <strong>Locating Vertex D:</strong><br>
            - Side AB is horizontal along y = 1 from x = 1 to x = 4. Length AB = 4 − 1 = 3 units.<br>
            - Opposite side CD must also be horizontal of length 3 units.<br>
            - Since C is at (5, 4), moving 3 units to the left at the same height y = 4 gives:<br>
            x = 5 − 3 = 2, y = 4.<br>
            Therefore, <strong>D = (2, 4)</strong>.<br><br>
            2. <strong>Area of Parallelogram ABCD:</strong><br>
            Area = Base × Height.<br>
            Base = AB = 3 units.<br>
            Height = vertical distance between lines y = 4 and y = 1 = 4 − 1 = 3 units.<br>
            Area = 3 × 3 = <strong>9 square units</strong>.
          </div>
        </div>
        <div class="marking-scheme">
          <div class="marking-title">CBSE Board Marking Scheme 2026-27</div>
          <div class="marking-row"><span class="marking-key">Finding coordinates D(2, 4)</span><span class="marking-marks">1 Mark</span></div>
          <div class="marking-row"><span class="marking-key">Base × Height = 3 × 3 = 9 sq units</span><span class="marking-marks">1 Mark</span></div>
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
      <strong>Context — Electric Vehicle (EV) Rapid Charging Station Telemetry:</strong> An IoT telemetry sensor logs the battery charge state (in kWh) of an electric delivery van plugged into a DC fast charger over 50 minutes:<br>
      Time t (minutes): 0 &nbsp;|&nbsp; 10 |&nbsp; 20 |&nbsp; 30 |&nbsp; 40 |&nbsp; 50<br>
      Charge E (kWh): &nbsp; 10 |&nbsp; 24 |&nbsp; 38 |&nbsp; 52 |&nbsp; 62 |&nbsp; 68<br><br>
      (a) Plot the points on coordinate axes and state whether the entire 50-minute graph is strictly linear.<br>
      (b) Over which time interval is the charging rate constant, and what is the charging speed in kWh per minute during this phase?<br>
      (c) Explain physically why the graph flattens after 30 minutes (above 80% battery capacity).
    </div>
    <div class="answer-box" style="margin-top: 15px;">
      <div class="answer-label">Detailed Analytical Solution &amp; Marking Scheme</div>
      <div class="answer-text">
        <p><strong>(a) Linearity Analysis:</strong><br>
        - From t = 0 to 30 min: ΔE/Δt = (24 − 10)/10 = (38 − 24)/10 = (52 − 38)/10 = 1.4 kWh/min (Constant).<br>
        - From t = 30 to 40 min: ΔE/Δt = (62 − 52)/10 = 1.0 kWh/min.<br>
        - From t = 40 to 50 min: ΔE/Δt = (68 − 62)/10 = 0.6 kWh/min.<br>
        Because the slope decreases in the final 20 minutes, <strong>the overall graph is NOT strictly linear</strong>.</p>

        <p><strong>(b) Constant Rate Phase:</strong><br>
        The rate is constant from <strong>t = 0 to t = 30 minutes</strong>, charging at a linear rate of <strong>1.4 kWh/minute</strong> (or 84 kW power).</p>

        <p><strong>(c) Physical Interpretation:</strong><br>
        Lithium-ion batteries taper down charging current above ~80% state-of-charge (Constant Current to Constant Voltage CC-CV transition) to prevent lithium plating, overheating, and thermal degradation. This deliberate deceleration causes the curve to flatten.</p>
      </div>
    </div>
  </div>
</section>
`;

fs.writeFileSync(path.join(chDir, 'ch12.html'), ch12Html, 'utf8');
console.log('Chapter 12 successfully written with 10 questions + CBQ.');
