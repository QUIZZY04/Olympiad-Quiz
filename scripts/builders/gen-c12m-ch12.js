// scripts/builders/gen-c12m-ch12.js
// Chapter 12: Linear Programming (10 Questions)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Master Reference: Linear Programming & The Corner Point Method</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Panel 1: Fundamentals & Terminology -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">LPP Terminology</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>
    <text x="35" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Objective Function:</text>
    <text x="35" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">$Z = ax + by$ (to maximize/minimize)</text>
    <text x="35" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Linear Constraints:</text>
    <text x="35" y="145" font-family="sans-serif" font-size="10.5" fill="#334155">Inequalities representing limitations</text>
    <text x="35" y="175" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Non-negative Constraints:</text>
    <text x="35" y="195" font-family="sans-serif" font-size="10.5" fill="#1e293b">$x \\ge 0, \\quad y \\ge 0$ (Quadrant I)</text>
    <text x="35" y="218" font-family="sans-serif" font-size="10" fill="#047857">Feasible Region: Common intersection</text>

    <!-- Panel 2: Corner Point Theorem -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5b21b6" text-anchor="middle">Corner Point Theorem</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="325" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Theorem 1:</text>
    <text x="325" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">If feasible region is bounded, $Z$ attains</text>
    <text x="325" y="116" font-family="sans-serif" font-size="10.5" fill="#1e293b">both a maximum and minimum at</text>
    <text x="325" y="134" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#4338ca">Corner (Extreme) Points</text>
    <text x="325" y="165" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Theorem 2:</text>
    <text x="325" y="185" font-family="sans-serif" font-size="10.5" fill="#334155">If two corner points give the same</text>
    <text x="325" y="205" font-family="sans-serif" font-size="10.5" fill="#334155">optimal value, all points on the segment</text>
    <text x="325" y="223" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857">connecting them give optimal value!</text>

    <!-- Panel 3: Unbounded Feasible Region Test -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Unbounded Region Check</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#10b981" stroke-width="1.5"/>
    <text x="615" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">When Region is Unbounded:</text>
    <text x="615" y="100" font-family="sans-serif" font-size="10.5" fill="#334155">Let $M$ be max and $m$ be min at corners</text>
    <text x="615" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Maximum Validation:</text>
    <text x="615" y="150" font-family="sans-serif" font-size="10" fill="#1e293b">$M$ is max $\\iff ax + by > M$ has</text>
    <text x="615" y="168" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">NO common point with region</text>
    <text x="615" y="195" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Minimum Validation:</text>
    <text x="615" y="215" font-family="sans-serif" font-size="10" fill="#1e293b">$m$ is min $\\iff ax + by < m$ has</text>
    <text x="615" y="233" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">NO common point with region</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 12.1 Q1 - Basic Bounded Maximization)
questions.push(createQCard(
  'c12m-ch12-q1',
  'Q1',
  'Exercise 12.1 (Verbatim)',
  `Maximize $Z = 3x + 4y$<br>
  subject to the constraints:<br>
  $$x + y \\le 4, \\quad x \\ge 0, \\quad y \\ge 0$$`,
  `<p><strong>Step 1: Feasible Region:</strong></p>
  <ul>
    <li>The non-negativity constraints $x \\ge 0, y \\ge 0$ restrict the region to the first quadrant.</li>
    <li>Draw the boundary line $x + y = 4$:
      <br>When $x = 0 \\implies y = 4$, point $(0, 4)$.
      <br>When $y = 0 \\implies x = 4$, point $(4, 0)$.
    </li>
    <li>Testing the origin $(0, 0)$: $0 + 0 = 0 \\le 4$, which is true. Therefore, the half plane containing $(0, 0)$ is the solution region.</li>
    <li>The feasible region $OAB$ is bounded by the polygon with vertices $O(0, 0)$, $A(4, 0)$, and $B(0, 4)$.</li>
  </ul>

  <p><strong>Step 2: Corner Point Table:</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#eef2ff;">
        <th style="border:1px solid #c7d2fe; padding:8px;">Corner Point</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Value of $Z = 3x + 4y$</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Verdict</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$O(0, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$3(0) + 4(0) = 0$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">Minimum</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$A(4, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$3(4) + 4(0) = 12$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;"></td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$B(0, 4)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">$3(0) + 4(4) = 16$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">Maximum</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Conclusion:</strong></p>
  The maximum value of $Z$ is <strong>$16$</strong>, which occurs at the point <strong>$(0, 4)$</strong>.`,
  '3 Marks',
  [
    ['Graphing constraint line x + y = 4 and shading bounded feasible region', '1 Mark'],
    ['Listing all corner points: (0,0), (4,0), (0,4) and evaluating Z', '1 Mark'],
    ['Declaring maximum value Z = 16 at (0, 4)', '1 Mark']
  ]
));

// Q2 (Ex 12.1 Q2 - Minimization with Multiple Constraints)
questions.push(createQCard(
  'c12m-ch12-q2',
  'Q2',
  'Exercise 12.1 (Verbatim)',
  `Minimize $Z = -3x + 4y$<br>
  subject to:<br>
  $$x + 2y \\le 8, \\quad 3x + 2y \\le 12, \\quad x \\ge 0, \\quad y \\ge 0$$`,
  `<p><strong>Step 1: Constraint Lines and Intersection:</strong></p>
  <ol>
    <li>Line $L_1 : x + 2y = 8$:
      <br>Intercepts: $(8, 0)$ and $(0, 4)$. Origin $(0, 0)$ satisfies $0 \le 8$.
    </li>
    <li>Line $L_2 : 3x + 2y = 12$:
      <br>Intercepts: $(4, 0)$ and $(0, 6)$. Origin $(0, 0)$ satisfies $0 \le 12$.
    </li>
    <li>Intersection of $L_1$ and $L_2$:
      <br>Subtracting $L_1$ from $L_2$: $(3x + 2y) - (x + 2y) = 12 - 8 \implies 2x = 4 \implies x = 2$.
      <br>From $L_1$: $2 + 2y = 8 \implies 2y = 6 \implies y = 3$.
      <br>Point of intersection: $B(2, 3)$.
    </li>
  </ol>
  <p>The bounded feasible region is quadrilateral $OABC$ where:</p>
  $$O(0, 0), \\quad A(4, 0), \\quad B(2, 3), \\quad C(0, 4)$$

  <p><strong>Step 2: Corner Point Table:</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#eef2ff;">
        <th style="border:1px solid #c7d2fe; padding:8px;">Corner Point</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Value of $Z = -3x + 4y$</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Verdict</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$O(0, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$-3(0) + 4(0) = 0$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;"></td>
      </tr>
      <tr style="background:#fef2f2;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$A(4, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">$-3(4) + 4(0) = -12$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">Minimum</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$B(2, 3)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$-3(2) + 4(3) = -6 + 12 = 6$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;"></td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$C(0, 4)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$-3(0) + 4(4) = 16$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">Maximum</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Conclusion:</strong></p>
  The minimum value of $Z$ is <strong>$-12$</strong> at the point <strong>$(4, 0)$</strong>.`,
  '4 Marks',
  [
    ['Graphing constraint lines and finding intersection point B(2, 3)', '1.5 Marks'],
    ['Identifying corner points O(0,0), A(4,0), B(2,3), C(0,4)', '1 Mark'],
    ['Evaluating Z at all corners', '1 Mark'],
    ['Stating minimum value -12 at (4, 0)', '0.5 Mark']
  ]
));

// Q3 (Ex 12.1 Q3 - Maximization with Fractional Intersection)
questions.push(createQCard(
  'c12m-ch12-q3',
  'Q3',
  'Exercise 12.1 (Verbatim)',
  `Maximize $Z = 5x + 3y$<br>
  subject to:<br>
  $$3x + 5y \\le 15, \\quad 5x + 2y \\le 10, \\quad x \\ge 0, \\quad y \\ge 0$$`,
  `<p><strong>Step 1: Lines and Intersection:</strong></p>
  <ul>
    <li>Line $L_1 : 3x + 5y = 15$: Intercepts $(5, 0)$ and $(0, 3)$. Origin satisfies $0 \le 15$.</li>
    <li>Line $L_2 : 5x + 2y = 10$: Intercepts $(2, 0)$ and $(0, 5)$. Origin satisfies $0 \le 10$.</li>
    <li>Intersection of $L_1$ and $L_2$:
      $$2(3x + 5y) - 5(5x + 2y) = 2(15) - 5(10)$$
      $$6x + 10y - 25x - 10y = 30 - 50 \implies -19x = -20 \implies x = \\frac{20}{19}$$
      Substitute into $5x + 2y = 10$:
      $$2y = 10 - 5\\left(\\frac{20}{19}\\right) = 10 - \\frac{100}{19} = \\frac{90}{19} \implies y = \\frac{45}{19}$$
      Point of intersection: $B\\left(\\frac{20}{19}, \\frac{45}{19}\\right)$.
    </li>
  </ul>
  <p>Feasible corner points are: $O(0, 0), \\; A(2, 0), \\; B\\left(\\frac{20}{19}, \\frac{45}{19}\\right), \\; C(0, 3)$.</p>

  <p><strong>Step 2: Corner Point Table:</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#eef2ff;">
        <th style="border:1px solid #c7d2fe; padding:8px;">Corner Point</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Value of $Z = 5x + 3y$</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$O(0, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$5(0) + 3(0) = 0$</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$A(2, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$5(2) + 3(0) = 10$</td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$B\\left(\\frac{20}{19}, \\frac{45}{19}\\right)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">$5\\left(\\frac{20}{19}\\right) + 3\\left(\\frac{45}{19}\\right) = \\frac{100 + 135}{19} = \\frac{235}{19} \\approx 12.37$ (Max)</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$C(0, 3)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$5(0) + 3(3) = 9$</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Conclusion:</strong></p>
  The maximum value of $Z$ is <strong>$\\frac{235}{19}$</strong> at the point <strong>$\\left(\\frac{20}{19}, \\frac{45}{19}\\right)$</strong>.`,
  '4 Marks',
  [
    ['Plotting lines and solving intersection to obtain (20/19, 45/19)', '1.5 Marks'],
    ['Corner points identification: O(0,0), A(2,0), B(20/19, 45/19), C(0,3)', '1 Mark'],
    ['Evaluating Z and finding maximum value 235/19', '1.5 Marks']
  ]
));

// Q4 (Ex 12.1 Q4 - Unbounded Region Minimization)
questions.push(createQCard(
  'c12m-ch12-q4',
  'Q4',
  'Exercise 12.1 (Verbatim)',
  `Minimize $Z = 3x + 5y$<br>
  such that:<br>
  $$x + 3y \\ge 3, \\quad x + y \\ge 2, \\quad x, y \\ge 0$$`,
  `<p><strong>Step 1: Graphing Constraints & Feasible Region:</strong></p>
  <ul>
    <li>Line $L_1 : x + 3y = 3$: Intercepts $(3, 0)$ and $(0, 1)$. Since $0 + 0 \not\ge 3$, origin is excluded. Region lies away from origin.</li>
    <li>Line $L_2 : x + y = 2$: Intercepts $(2, 0)$ and $(0, 2)$. Origin is excluded.</li>
    <li>Intersection of $L_1$ and $L_2$:
      $$(x + 3y) - (x + y) = 3 - 2 \implies 2y = 1 \implies y = \\frac{1}{2}$$
      $$x = 2 - y = 2 - \\frac{1}{2} = \\frac{3}{2}$$
      Intersection point: $B\\left(\\frac{3}{2}, \\frac{1}{2}\\right)$.
    </li>
    <li>The feasible region is <strong>unbounded</strong> with corner points $A(3, 0)$, $B\\left(\\frac{3}{2}, \\frac{1}{2}\\right)$, and $C(0, 2)$.</li>
  </ul>

  <p><strong>Step 2: Corner Point Table:</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#eef2ff;">
        <th style="border:1px solid #c7d2fe; padding:8px;">Corner Point</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Value of $Z = 3x + 5y$</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$A(3, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$3(3) + 5(0) = 9$</td>
      </tr>
      <tr style="background:#fef2f2;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$B\\left(\\frac{3}{2}, \\frac{1}{2}\\right)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">$3\\left(\\frac{3}{2}\\right) + 5\\left(\\frac{1}{2}\\right) = \\frac{9 + 5}{2} = 7$ (Candidate Min)</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$C(0, 2)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$3(0) + 5(2) = 10$</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Step 3: Validation for Unbounded Region:</strong></p>
  Since the feasible region is unbounded, we must check whether the open half plane:
  $$3x + 5y < 7$$
  has any points in common with the feasible region.
  <ul>
    <li>Draw the dotted line $3x + 5y = 7$.
      <br>When $x = 0 \implies y = 1.4$. When $y = 0 \implies x = 7/3 \approx 2.33$.
    </li>
    <li>Test $(0, 0)$: $0 < 7$ is true, so the open half plane lies strictly below the line $3x + 5y = 7$.</li>
    <li>Observing the graph, the open half plane $3x + 5y < 7$ has <strong>no common point</strong> with the feasible region.</li>
  </ul>
  <p><strong>Conclusion:</strong></p>
  The minimum value of $Z$ is <strong>$7$</strong> at the point <strong>$\\left(\\frac{3}{2}, \\frac{1}{2}\\right)$</strong>.`,
  '4 Marks',
  [
    ['Graphing constraint lines and identifying unbounded region with corners (3,0), (3/2, 1/2), (0,2)', '1.5 Marks'],
    ['Corner point evaluation showing candidate min = 7', '1 Mark'],
    ['Drawing open half plane 3x + 5y < 7 and verifying no common points with feasible region', '1.5 Marks']
  ]
));

// Q5 (Ex 12.1 Q6 - Dual Optimality on Line Segment)
questions.push(createQCard(
  'c12m-ch12-q5',
  'Q5',
  'Exercise 12.1 (Verbatim)',
  `Minimize $Z = x + 2y$<br>
  subject to:<br>
  $$2x + y \\ge 3, \\quad x + 2y \\ge 6, \\quad x, y \\ge 0$$
  Show that the minimum of $Z$ occurs at more than two points.`,
  `<p><strong>Step 1: Constraint Lines & Corners:</strong></p>
  <ul>
    <li>Line $L_1 : 2x + y = 3$: Intercepts $(1.5, 0)$ and $(0, 3)$. Half plane away from $(0, 0)$.</li>
    <li>Line $L_2 : x + 2y = 6$: Intercepts $(6, 0)$ and $(0, 3)$. Half plane away from $(0, 0)$.</li>
    <li>Intersection of $L_1$ and $L_2$:
      <br>From $L_1$, $y = 3 - 2x$.
      <br>Substitute into $L_2$: $x + 2(3 - 2x) = 6 \implies x + 6 - 4x = 6 \implies -3x = 0 \implies x = 0, y = 3$.
      <br>The two lines intersect on the y-axis at $(0, 3)$.
    </li>
    <li>Feasible region is unbounded with corner points:
      $$A(6, 0) \\quad \\text{and} \\quad B(0, 3)$$
    </li>
  </ul>

  <p><strong>Step 2: Value of $Z = x + 2y$ at Corners:</strong></p>
  <ul>
    <li>At $A(6, 0)$: $Z = 6 + 2(0) = \\mathbf{6}$</li>
    <li>At $B(0, 3)$: $Z = 0 + 2(3) = \\mathbf{6}$</li>
  </ul>

  <p><strong>Step 3: Verification of Unbounded Region:</strong></p>
  Draw open half plane $x + 2y < 6$.
  <br>The line $x + 2y = 6$ is one of the boundary lines of the feasible region itself!
  <br>The open inequality $x + 2y < 6$ has no points in common with the feasible region $x + 2y \ge 6$.
  <br>Therefore, the minimum value of $Z$ is <strong>$6$</strong>.

  <p><strong>Conclusion:</strong></p>
  Since the minimum value $Z = 6$ is attained at two distinct corner points $A(6, 0)$ and $B(0, 3)$, by the fundamental theorem of LPP, $Z$ attains the same minimum value $6$ at <strong>every single point on the line segment joining $A(6, 0)$ and $B(0, 3)$</strong>.
  <br>Hence, the minimum occurs at infinitely many points (more than two points).`,
  '4 Marks',
  [
    ['Graphing constraint lines and finding corner points A(6, 0) and B(0, 3)', '1.5 Marks'],
    ['Evaluating Z = 6 at both corner points', '1 Mark'],
    ['Checking open half plane x + 2y < 6', '0.5 Mark'],
    ['Applying Theorem 2 to conclude minimum occurs at all points along line segment AB', '1 Mark']
  ]
));

// Q6 (Ex 12.1 Q7 - Simultaneous Maximize and Minimize)
questions.push(createQCard(
  'c12m-ch12-q6',
  'Q6',
  'Exercise 12.1 (Verbatim)',
  `Minimize and Maximize $Z = 5x + 10y$<br>
  subject to:<br>
  $$x + 2y \\le 120, \\quad x + y \\ge 60, \\quad x - 2y \\ge 0, \\quad x, y \\ge 0$$`,
  `<p><strong>Step 1: Constraint Lines & Intersection:</strong></p>
  <ol>
    <li>$L_1 : x + 2y = 120$: Passes through $(120, 0)$ and $(0, 60)$. Origin $(0,0)$ satisfies $0 \le 120$.</li>
    <li>$L_2 : x + y = 60$: Passes through $(60, 0)$ and $(0, 60)$. Origin $(0, 0)$ does not satisfy $0 \not\ge 60$.</li>
    <li>$L_3 : x - 2y = 0 \implies x = 2y$: Line through origin passing through $(60, 30), (120, 60)$. Test point $(10, 0)$: $10 - 0 = 10 \ge 0$, region lies towards positive x-axis.</li>
  </ol>

  <p><strong>Step 2: Finding Corner Points:</strong></p>
  <ul>
    <li>Intersection of $x + y = 60$ and $x - 2y = 0$:
      <br>$2y + y = 60 \implies 3y = 60 \implies y = 20, x = 40$. Point $A(40, 20)$.
    </li>
    <li>Intersection of $x + 2y = 120$ and $x - 2y = 0$:
      <br>$2y + 2y = 120 \implies 4y = 120 \implies y = 30, x = 60$. Point $B(60, 30)$.
    </li>
    <li>Intersection of $x + 2y = 120$ with x-axis ($y = 0$): Point $C(120, 0)$.</li>
    <li>Intersection of $x + y = 60$ with x-axis ($y = 0$): Point $D(60, 0)$.</li>
  </ul>
  <p>The bounded feasible region is polygon $ABCD$.</p>

  <p><strong>Step 3: Corner Point Table:</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#eef2ff;">
        <th style="border:1px solid #c7d2fe; padding:8px;">Corner Point</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Value of $Z = 5x + 10y$</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Verdict</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$A(40, 20)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$5(40) + 10(20) = 200 + 200 = 400$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;"></td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$B(60, 30)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">$5(60) + 10(30) = 300 + 300 = 600$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">Maximum</td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$C(120, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">$5(120) + 10(0) = 600$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">Maximum</td>
      </tr>
      <tr style="background:#fef2f2;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$D(60, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">$5(60) + 10(0) = 300$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">Minimum</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Conclusion:</strong></p>
  <ul>
    <li>The <strong>minimum value</strong> of $Z$ is <strong>$300$</strong> at the point <strong>$(60, 0)$</strong>.</li>
    <li>The <strong>maximum value</strong> of $Z$ is <strong>$600$</strong> at all points on the line segment joining <strong>$(60, 30)$ and $(120, 0)$</strong>.</li>
  </ul>`,
  '4 Marks',
  [
    ['Graphing all three lines and identifying bounded quadrilateral ABCD', '1.5 Marks'],
    ['Accurately calculating intersection points A(40,20) and B(60,30)', '1 Mark'],
    ['Evaluating Z at all corners', '1 Mark'],
    ['Final statement: Min = 300 at (60,0) and Max = 600 at segment joining (60,30) and (120,0)', '0.5 Mark']
  ]
));

// Q7 (Ex 12.1 Q8 - Simultaneous Max & Min with 4 Constraints)
questions.push(createQCard(
  'c12m-ch12-q7',
  'Q7',
  'Exercise 12.1 (Verbatim)',
  `Minimize and Maximize $Z = x + 2y$<br>
  subject to:<br>
  $$x + 2y \\ge 100, \\quad 2x - y \\le 0, \\quad 2x + y \\le 200, \\quad x, y \\ge 0$$`,
  `<p><strong>Step 1: Lines and Intersection:</strong></p>
  <ol>
    <li>$L_1 : x + 2y = 100$: Passes through $(100, 0)$ and $(0, 50)$. Region lies away from origin.</li>
    <li>$L_2 : 2x - y = 0 \implies y = 2x$: Passes through origin and $(50, 100)$. Test point $(0, 10)$: $2(0) - 10 = -10 \le 0$ (true, region lies above line).</li>
    <li>$L_3 : 2x + y = 200$: Passes through $(100, 0)$ and $(0, 200)$. Region lies towards origin.</li>
  </ol>

  <p><strong>Step 2: Finding Corner Points of the Feasible Polygon:</strong></p>
  <ul>
    <li>Intersection of $x + 2y = 100$ and $2x - y = 0$ ($y = 2x$):
      <br>$x + 2(2x) = 100 \implies 5x = 100 \implies x = 20, y = 40$. Point $A(20, 40)$.
    </li>
    <li>Intersection of $2x - y = 0$ and $2x + y = 200$:
      <br>$2x + 2x = 200 \implies 4x = 200 \implies x = 50, y = 100$. Point $B(50, 100)$.
    </li>
    <li>Intersection of $2x + y = 200$ and y-axis or $x + 2y = 100$:
      <br>Subtracting: $(2x + y) - (x + 2y) = 200 - 100 \implies x - y = 100$.
      <br>Solving: $x = \\frac{200 - 100}{...}$ wait:
      <br>From $L_1$: $x = 100 - 2y$. Put in $L_3$: $2(100 - 2y) + y = 200 \implies 200 - 4y + y = 200 \implies -3y = 0 \implies y = 0, x = 100$.
      <br>Point $C(100, 0)$ is on the x-axis, but at $C(100, 0)$, $2x - y = 2(100) - 0 = 200 \not\le 0$, which violates $2x - y \le 0$!
      <br>Let's check the y-intercepts:
      <br>Notice $x \ge 0$. The feasible region is bounded by $L_1, L_2, L_3$ and the y-axis:
      <br>Point on $L_1$ with $x = 0$: $(0, 50)$. Check $2(0) - 50 = -50 \le 0$ (satisfied), $2(0) + 50 = 50 \le 200$ (satisfied). So $D(0, 50)$ is a corner!
      <br>Point on $L_3$ with $x = 0$: $(0, 200)$. Check $0 + 2(200) = 400 \ge 100$ (satisfied), $2(0) - 200 = -200 \le 0$ (satisfied). So $C(0, 200)$ is a corner!
    </li>
  </ul>
  <p>The four corner points are: $A(20, 40), \\; B(50, 100), \\; C(0, 200), \\; D(0, 50)$.</p>

  <p><strong>Step 3: Corner Point Table:</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#eef2ff;">
        <th style="border:1px solid #c7d2fe; padding:8px;">Corner Point</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Value of $Z = x + 2y$</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Verdict</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#fef2f2;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$A(20, 40)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">$20 + 2(40) = 100$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">Minimum</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$B(50, 100)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$50 + 2(100) = 250$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;"></td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$C(0, 200)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">$0 + 2(200) = 400$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">Maximum</td>
      </tr>
      <tr style="background:#fef2f2;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$D(0, 50)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">$0 + 2(50) = 100$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#dc2626;">Minimum</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Conclusion:</strong></p>
  <ul>
    <li>The <strong>maximum value</strong> of $Z$ is <strong>$400$</strong> at <strong>$(0, 200)$</strong>.</li>
    <li>The <strong>minimum value</strong> of $Z$ is <strong>$100$</strong> at all points on the line segment joining <strong>$(20, 40)$ and $(0, 50)$</strong>.</li>
  </ul>`,
  '5 Marks',
  [
    ['Graphing all three lines and identifying the correct bounded feasible region', '2 Marks'],
    ['Determining corners A(20,40), B(50,100), C(0,200), D(0,50)', '1.5 Marks'],
    ['Evaluating Z at all corners and identifying minimum = 100 and maximum = 400', '1.5 Marks']
  ]
));

// Q8 (Ex 12.1 Q9 - Unbounded Region with No Maximum)
questions.push(createQCard(
  'c12m-ch12-q8',
  'Q8',
  'Exercise 12.1 (Verbatim)',
  `Maximize $Z = -x + 2y$, subject to the constraints:<br>
  $$x \\ge 3, \\quad x + y \\ge 5, \\quad x + 2y \\ge 6, \\quad y \\ge 0$$`,
  `<p><strong>Step 1: Constraint Lines & Graphing:</strong></p>
  <ul>
    <li>$x \\ge 3$: Vertical line $x = 3$. Half plane to the right.</li>
    <li>$x + y \\ge 5$: Intercepts $(5, 0)$ and $(0, 5)$. Half plane away from origin.</li>
    <li>$x + 2y \\ge 6$: Intercepts $(6, 0)$ and $(0, 3)$. Half plane away from origin.</li>
    <li>Intersection of $x = 3$ and $x + y = 5$: $x = 3, y = 2$. Point $A(3, 2)$.</li>
    <li>Intersection of $x + y = 5$ and $x + 2y = 6$:
      <br>$(x + 2y) - (x + y) = 6 - 5 \implies y = 1, x = 4$. Point $B(4, 1)$.
    </li>
    <li>Intersection of $x + 2y = 6$ with x-axis ($y = 0$): Point $C(6, 0)$.</li>
  </ul>
  <p>The feasible region is <strong>unbounded</strong> with corner points $A(3, 2), \\; B(4, 1), \\; C(6, 0)$ and extending infinitely as $x, y \\to \\infty$.</p>

  <p><strong>Step 2: Corner Point Table:</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#eef2ff;">
        <th style="border:1px solid #c7d2fe; padding:8px;">Corner Point</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Value of $Z = -x + 2y$</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$A(3, 2)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$-(3) + 2(2) = 1$</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$B(4, 1)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$-(4) + 2(1) = -2$</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$C(6, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$-(6) + 2(0) = -6$</td>
      </tr>
    </tbody>
  </table>
  <p>The maximum value among corner points is $M = 1$ at $(3, 2)$.</p>

  <p><strong>Step 3: Verification for Unbounded Region:</strong></p>
  We draw the open half plane:
  $$-x + 2y > 1$$
  Notice that point $(3, 3)$ lies in the feasible region because:
  $$3 \\ge 3, \\quad 3 + 3 = 6 \\ge 5, \\quad 3 + 2(3) = 9 \\ge 6$$
  Now evaluate $-x + 2y$ at $(3, 3)$:
  $$-3 + 2(3) = 3 > 1$$
  Indeed, for any point $(3, y)$ with $y > 2$, $-3 + 2y$ can be made arbitrarily large!
  <br>The open half plane $-x + 2y > 1$ has <strong>infinitely many points in common</strong> with the feasible region.
  <br><strong>Conclusion:</strong> $Z$ has <strong>NO MAXIMUM VALUE</strong> subject to the given constraints.`,
  '4 Marks',
  [
    ['Graphing constraint lines and finding corner points A(3,2), B(4,1), C(6,0)', '1.5 Marks'],
    ['Evaluating Z at corner points with candidate max = 1', '1 Mark'],
    ['Drawing open half plane -x + 2y > 1 and showing common points with feasible region', '1 Mark'],
    ['Concluding that Z has no maximum value', '0.5 Mark']
  ]
));

// Q9 (Ex 12.1 Q10 - Infeasible Constraints / Empty Feasible Region)
questions.push(createQCard(
  'c12m-ch12-q9',
  'Q9',
  'Exercise 12.1 (Verbatim)',
  `Maximize $Z = x + y$, subject to:<br>
  $$x - y \\le -1, \\quad -x + y \\le 0, \\quad x, y \\ge 0$$`,
  `<p><strong>Step 1: Analysis of Constraints:</strong></p>
  <ol>
    <li>Constraint 1: $x - y \\le -1 \\implies y - x \\ge 1 \\implies y \\ge x + 1$.
      <br>This half plane lies strictly on and above the line $y = x + 1$.
    </li>
    <li>Constraint 2: $-x + y \\le 0 \\implies y \\le x$.
      <br>This half plane lies strictly on and below the line $y = x$.
    </li>
    <li>Non-negativity: $x \\ge 0, \\; y \\ge 0$.</li>
  </ol>

  <p><strong>Step 2: Checking for Common Region:</strong></p>
  <ul>
    <li>The line $y = x + 1$ and the line $y = x$ are two parallel lines with identical slope $m = 1$.</li>
    <li>The vertical distance between them is $1$ unit.</li>
    <li>Constraint 1 requires all points to lie on or above $y = x + 1$ ($y - x \\ge 1$).</li>
    <li>Constraint 2 requires all points to lie on or below $y = x$ ($y - x \\le 0$).</li>
  </ul>
  <p>There are <strong>no points $(x, y)$</strong> in the coordinate plane that can simultaneously satisfy $y - x \\ge 1$ and $y - x \\le 0$.
  <br>The intersection of the half-planes is the <strong>empty set ($\\emptyset$)</strong>.</p>

  <p><strong>Conclusion:</strong></p>
  There is <strong>no feasible region</strong>. Hence, there exists <strong>no maximum value</strong> of $Z$.`,
  '3 Marks',
  [
    ['Graphing parallel lines y = x + 1 and y = x', '1.5 Marks'],
    ['Showing opposite half-planes have no intersection', '1 Mark'],
    ['Concluding feasible region is empty and no maximum exists', '0.5 Mark']
  ]
));

// Q10 (Classic LPP Formulation Problem)
questions.push(createQCard(
  'c12m-ch12-q10',
  'Q10',
  'NCERT Chapter 12 Landmark Word Problem',
  `A merchant plans to sell two types of personal computers — a desktop model and a portable model that will cost ₹$25{,}000$ and ₹$40{,}000$ respectively. He estimates that the total monthly demand of computers will not exceed $250$ units. Determine the number of units of each type of computers which the merchant should stock to get maximum profit if he does not want to invest more than ₹$70\\text{ lakhs}$ and if his profit on the desktop model is ₹$4{,}500$ and on portable model is ₹$5{,}000$. Formulate this problem as an LPP and solve it graphically.`,
  `<p><strong>Step 1: Mathematical Formulation:</strong></p>
  Let $x$ be the number of desktop models and $y$ be the number of portable models stocked.
  <ul>
    <li><strong>Objective Function:</strong> Maximize total profit:
      $$Z = 4500x + 5000y$$
    </li>
    <li><strong>Constraints:</strong>
      <ol>
        <li>Investment constraint: $25000x + 40000y \\le 70{,}00{,}000$.
          <br>Divide by $5000$:
          $$5x + 8y \\le 1400$$
        </li>
        <li>Storage / demand constraint:
          $$x + y \\le 250$$
        </li>
        <li>Non-negativity: $x \\ge 0, \\; y \\ge 0$.</li>
      </ol>
    </li>
  </ul>

  <p><strong>Step 2: Finding Corner Points of Feasible Region:</strong></p>
  <ul>
    <li>Line $L_1 : 5x + 8y = 1400$:
      <br>When $x = 0 \\implies y = 175$, point $(0, 175)$.
      <br>When $y = 0 \\implies x = 280$, point $(280, 0)$.
    </li>
    <li>Line $L_2 : x + y = 250$:
      <br>When $x = 0 \\implies y = 250$, point $(0, 250)$.
      <br>When $y = 0 \\implies x = 250$, point $(250, 0)$.
    </li>
    <li>Intersection of $L_1$ and $L_2$:
      <br>Multiply $L_2$ by 5: $5x + 5y = 1250$.
      <br>Subtract from $L_1$: $(5x + 8y) - (5x + 5y) = 1400 - 1250 \implies 3y = 150 \implies y = 50$.
      <br>Then $x = 250 - 50 = 200$.
      <br>Point of intersection: $B(200, 50)$.
    </li>
  </ul>
  <p>The bounded feasible region has vertices: $O(0, 0), \\; A(250, 0), \\; B(200, 50), \\; C(0, 175)$.</p>

  <p><strong>Step 3: Corner Point Table:</strong></p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#eef2ff;">
        <th style="border:1px solid #c7d2fe; padding:8px;">Corner Point</th>
        <th style="border:1px solid #c7d2fe; padding:8px;">Profit $Z = 4500x + 5000y$ (in ₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$O(0, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$0$</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$A(250, 0)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$4500(250) + 0 = 11{,}25{,}000$</td>
      </tr>
      <tr style="background:#f0fdf4;">
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold;">$B(200, 50)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center; font-weight:bold; color:#047857;">$4500(200) + 5000(50) = 9{,}00{,}000 + 2{,}50{,}000 = 11{,}50{,}000$ (Max)</td>
      </tr>
      <tr>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$C(0, 175)$</td>
        <td style="border:1px solid #e2e8f0; padding:8px; text-align:center;">$0 + 5000(175) = 8{,}75{,}000$</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Final Answer:</strong></p>
  The merchant should stock <strong>$200$ desktop models</strong> and <strong>$50$ portable models</strong> to obtain a <strong>maximum profit of ₹$11{,}50{,}000$</strong>.`,
  '5 Marks',
  [
    ['Formulation of objective function Z = 4500x + 5000y and constraints', '1.5 Marks'],
    ['Graphing constraint lines 5x + 8y <= 1400 and x + y <= 250 and finding corners', '1.5 Marks'],
    ['Corner point evaluation table', '1 Mark'],
    ['Final answer: 200 desktops, 50 portables with max profit of ₹11,50,000', '1 Mark']
  ]
));

saveChapter(
  12,
  'Linear Programming',
  svgDiagram,
  'NCERT Exercises 12.1 (10 Verbatim Core Questions)',
  questions,
  'Probability'
);
