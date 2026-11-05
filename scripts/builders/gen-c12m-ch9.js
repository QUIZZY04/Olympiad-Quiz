// scripts/builders/gen-c12m-ch9.js
// Chapter 9: Differential Equations (12 Questions)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Master Reference: Order, Degree & Solution Methods of Differential Equations</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Panel 1: Order & Degree -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">Order & Degree</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>
    <text x="35" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Order:</text>
    <text x="35" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">Highest derivative occurring in equation</text>
    <text x="35" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Degree:</text>
    <text x="35" y="145" font-family="sans-serif" font-size="10.5" fill="#334155">Power of the highest order derivative,</text>
    <text x="35" y="165" font-family="sans-serif" font-size="10.5" fill="#334155">provided equation is a polynomial in derivatives</text>
    <text x="35" y="195" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">⚠️ If $\\sin(y'), e^{y'}, \\log(y')$ present:</text>
    <text x="35" y="215" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">Degree is NOT DEFINED!</text>

    <!-- Panel 2: Variable Separable & Homogeneous -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5b21b6" text-anchor="middle">Separable & Homogeneous</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="325" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Variable Separable:</text>
    <text x="325" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">$f(y) \\, dy = g(x) \\, dx \\implies \\int f(y)dy = \\int g(x)dx$</text>
    <text x="325" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">Homogeneous DE:</text>
    <text x="325" y="145" font-family="sans-serif" font-size="10.5" fill="#334155">$\\frac{dy}{dx} = F\\left(\\frac{y}{x}\\right)$</text>
    <text x="325" y="170" font-family="sans-serif" font-size="10.5" fill="#1e293b">Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$</text>
    <text x="325" y="195" font-family="sans-serif" font-size="10.5" fill="#334155">Reduces to Variable Separable in $v$ and $x$</text>
    <text x="325" y="218" font-family="sans-serif" font-size="10" fill="#475569">For $dx/dy = F(x/y)$, put $x = vy$</text>

    <!-- Panel 3: Linear Differential Equation -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Linear Differential Equations</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#10b981" stroke-width="1.5"/>
    <text x="615" y="80" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Standard Form:</text>
    <text x="615" y="100" font-family="sans-serif" font-size="11" fill="#334155">$\\frac{dy}{dx} + Py = Q$ &nbsp; ($P, Q$ funcs of $x$)</text>
    <text x="615" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Integrating Factor (I.F.):</text>
    <text x="615" y="150" font-family="sans-serif" font-size="11" fill="#1e293b">$\\text{I.F.} = e^{\\int P \\, dx}$</text>
    <text x="615" y="180" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">General Solution Formula:</text>
    <text x="615" y="200" font-family="sans-serif" font-size="11" fill="#1e293b">$y \\cdot (\\text{I.F.}) = \\int Q \\cdot (\\text{I.F.}) \\, dx + C$</text>
    <text x="615" y="222" font-family="sans-serif" font-size="10" fill="#334155">Type 2: $\\frac{dx}{dy} + P_1 x = Q_1 \\implies \\text{I.F.} = e^{\\int P_1 dy}$</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 9.1 Q1-6 - Order and Degree Mastery)
questions.push(createQCard(
  'c12m-ch9-q1',
  'Q1',
  'Exercise 9.1 (Verbatim)',
  `Determine order and degree (if defined) of each of the following differential equations:<br>
  (i) $\\frac{d^4y}{dx^4} + \\sin(y''') = 0$<br>
  (ii) $y' + 5y = 0$<br>
  (iii) $\\left(\\frac{ds}{dt}\\right)^4 + 3s\\frac{d^2s}{dt^2} = 0$<br>
  (iv) $\\left(\\frac{d^2y}{dx^2}\\right)^2 + \\cos\\left(\\frac{dy}{dx}\\right) = 0$<br>
  (v) $\\frac{d^2y}{dx^2} = \\cos 3x + \\sin 3x$`,
  `<p><strong>Detailed Analysis of Order & Degree:</strong></p>
  <ol>
    <li><strong>(i) $\\frac{d^4y}{dx^4} + \\sin(y''') = 0$:</strong>
      <ul>
        <li>The highest order derivative is $\\frac{d^4y}{dx^4}$, which is of order 4. &rarr; <strong>Order = 4</strong>.</li>
        <li>The equation is not a polynomial equation in derivatives because of the term $\\sin(y''')$. &rarr; <strong>Degree is NOT DEFINED</strong>.</li>
      </ul>
    </li>
    <li><strong>(ii) $y' + 5y = 0$:</strong>
      <ul>
        <li>Highest derivative is $\\frac{dy}{dx}$ (order 1). &rarr; <strong>Order = 1</strong>.</li>
        <li>The highest power of $\\frac{dy}{dx}$ is 1. &rarr; <strong>Degree = 1</strong>.</li>
      </ul>
    </li>
    <li><strong>(iii) $\\left(\\frac{ds}{dt}\\right)^4 + 3s\\frac{d^2s}{dt^2} = 0$:</strong>
      <ul>
        <li>The highest order derivative present is $\\frac{d^2s}{dt^2}$. &rarr; <strong>Order = 2</strong>.</li>
        <li>The power of $\\frac{d^2s}{dt^2}$ is 1 (the power 4 is on the first derivative, which does not govern degree). &rarr; <strong>Degree = 1</strong>.</li>
      </ul>
    </li>
    <li><strong>(iv) $\\left(\\frac{d^2y}{dx^2}\\right)^2 + \\cos\\left(\\frac{dy}{dx}\\right) = 0$:</strong>
      <ul>
        <li>Highest order derivative is $\\frac{d^2y}{dx^2}$. &rarr; <strong>Order = 2</strong>.</li>
        <li>Because of the term $\\cos(dy/dx)$, the equation cannot be written as a polynomial in derivatives. &rarr; <strong>Degree is NOT DEFINED</strong>.</li>
      </ul>
    </li>
    <li><strong>(v) $\\frac{d^2y}{dx^2} = \\cos 3x + \\sin 3x$:</strong>
      <ul>
        <li>Highest order derivative is $\\frac{d^2y}{dx^2}$. &rarr; <strong>Order = 2</strong>.</li>
        <li>It is a polynomial equation in derivatives of degree 1 (the trig functions involve only independent variable $x$, which is allowed). &rarr; <strong>Degree = 1</strong>.</li>
      </ul>
    </li>
  </ol>`,
  '5 Marks',
  [
    ['(i) Order = 4, Degree not defined', '1 Mark'],
    ['(ii) Order = 1, Degree = 1', '1 Mark'],
    ['(iii) Order = 2, Degree = 1', '1 Mark'],
    ['(iv) Order = 2, Degree not defined', '1 Mark'],
    ['(v) Order = 2, Degree = 1', '1 Mark']
  ]
));

// Q2 (Ex 9.2 Q1, Q4 - Verifying Solutions)
questions.push(createQCard(
  'c12m-ch9-q2',
  'Q2',
  'Exercise 9.2 (Verbatim)',
  `(i) Verify that the function $y = e^x + 1$ is a solution of the differential equation $y'' - y' = 0$.<br>
  (ii) Verify that $y = \\sqrt{1 + x^2}$ is a solution of the differential equation $y' = \\frac{xy}{1 + x^2}$.<br>
  (iii) Verify that $xy = \\log y + C$ is a solution of the differential equation $y' = \\frac{y^2}{1 - xy} \\; (xy \\neq 1)$.`,
  `<p><strong>(i) $y = e^x + 1$:</strong></p>
  <ul>
    <li>$y' = \\frac{d}{dx}(e^x + 1) = e^x$.</li>
    <li>$y'' = \\frac{d}{dx}(e^x) = e^e = e^x$.</li>
    <li>$\\text{LHS} = y'' - y' = e^x - e^x = 0 = \\text{RHS}$.</li>
    <li>Hence verified.</li>
  </ul>

  <p><strong>(ii) $y = \\sqrt{1 + x^2}$:</strong></p>
  Differentiating with respect to $x$:
  $$y' = \\frac{1}{2\\sqrt{1 + x^2}} \\cdot (2x) = \\frac{x}{\\sqrt{1 + x^2}}$$
  Multiply numerator and denominator by $\\sqrt{1 + x^2}$:
  $$y' = \\frac{x\\sqrt{1 + x^2}}{(\\sqrt{1 + x^2})^2} = \\frac{xy}{1 + x^2} = \\text{RHS}$$
  Hence verified.

  <p><strong>(iii) $xy = \\log y + C$:</strong></p>
  Differentiating with respect to $x$ using product rule:
  $$x \\frac{dy}{dx} + y(1) = \\frac{1}{y} \\frac{dy}{dx}$$
  Collect terms with $\\frac{dy}{dx}$:
  $$y = \\frac{1}{y} \\frac{dy}{dx} - x \\frac{dy}{dx} = \\left( \\frac{1}{y} - x \\right) \\frac{dy}{dx} = \\left( \\frac{1 - xy}{y} \\right) \\frac{dy}{dx}$$
  Cross-multiplying:
  $$y' = \\frac{dy}{dx} = \\frac{y^2}{1 - xy}$$
  Hence verified.`,
  '3 Marks',
  [
    ['(i) Differentiating eˣ + 1 twice and verifying y\'\' - y\' = 0', '1 Mark'],
    ['(ii) Differentiating √(1+x²) and expressing as xy/(1+x²)', '1 Mark'],
    ['(iii) Implicit differentiation of xy = log y + C yielding y\' = y²/(1 - xy)', '1 Mark']
  ]
));

// Q3 (Ex 9.3/9.4 Q1, Q4 - Variable Separable Basics)
questions.push(createQCard(
  'c12m-ch9-q3',
  'Q3',
  'Exercise 9.3 (Verbatim)',
  `Find the general solution of the differential equations:<br>
  (i) $\\frac{dy}{dx} = \\frac{1 - \\cos x}{1 + \\cos x}$<br>
  (ii) $\\sec^2 x \\tan y \\, dx + \\sec^2 y \\tan x \\, dy = 0$`,
  `<p><strong>(i) $\\frac{dy}{dx} = \\frac{1 - \\cos x}{1 + \\cos x}$:</strong></p>
  Using half-angle trigonometric formulas:
  $$1 - \\cos x = 2\\sin^2(x/2) \\quad \\text{and} \\quad 1 + \\cos x = 2\\cos^2(x/2)$$
  $$\\frac{dy}{dx} = \\frac{2\\sin^2(x/2)}{2\\cos^2(x/2)} = \\tan^2(x/2) = \\sec^2(x/2) - 1$$
  Separating variables:
  $$dy = [\\sec^2(x/2) - 1] \\, dx$$
  Integrating both sides:
  $$\\int dy = \\int [\\sec^2(x/2) - 1] \\, dx$$
  $$y = \\frac{\\tan(x/2)}{1/2} - x + C = \\mathbf{2\\tan(x/2) - x + C}$$

  <p><strong>(ii) $\\sec^2 x \\tan y \\, dx + \\sec^2 y \\tan x \\, dy = 0$:</strong></p>
  Dividing the entire equation by $\\tan x \\tan y$:
  $$\\frac{\\sec^2 x}{\\tan x} \\, dx + \\frac{\\sec^2 y}{\\tan y} \\, dy = 0$$
  Integrating both sides:
  $$\\int \\frac{\\sec^2 x}{\\tan x} \\, dx + \\int \\frac{\\sec^2 y}{\\tan y} \\, dy = C_1$$
  Since $\\frac{d}{dx}(\\tan x) = \\sec^2 x$, this is of the form $\\int \\frac{f'(u)}{f(u)} \\, du = \\log|f(u)|$:
  $$\\log|\\tan x| + \\log|\\tan y| = \\log C$$
  $$\\log|\\tan x \\tan y| = \\log C$$
  $$\\mathbf{\\tan x \\tan y = C}$$`,
  '4 Marks',
  [
    ['(i) Half-angle conversion to sec²(x/2) - 1', '1 Mark'],
    ['(i) Integrating to get y = 2 tan(x/2) - x + C', '1 Mark'],
    ['(ii) Dividing by tan x tan y to separate variables', '1 Mark'],
    ['(ii) Integrating to log|tan x| + log|tan y| = log C => tan x tan y = C', '1 Mark']
  ]
));

// Q4 (Ex 9.3/9.4 Q9, Q11 - Particular Solution with Initial Conditions)
questions.push(createQCard(
  'c12m-ch9-q4',
  'Q4',
  'Exercise 9.3 (Verbatim)',
  `(i) Find the general solution of the differential equation $\\frac{dy}{dx} = \\sin^{-1} x$.<br>
  (ii) Find the particular solution of the differential equation $(x^3 + x^2 + x + 1)\\frac{dy}{dx} = 2x^2 + x$, given that $y = 1$ when $x = 0$.`,
  `<p><strong>(i) $\\frac{dy}{dx} = \\sin^{-1} x$:</strong></p>
  $$dy = (\\sin^{-1} x) \\, dx \\implies y = \\int (\\sin^{-1} x \\cdot 1) \\, dx$$
  Integrating by parts: $u = \\sin^{-1} x, \\; v = 1$:
  $$y = (\\sin^{-1} x) x - \\int \\frac{1}{\\sqrt{1 - x^2}} \\cdot x \\, dx$$
  For the second integral, let $1 - x^2 = t \\implies -2x \\, dx = dt \\implies x \\, dx = -\\frac{dt}{2}$:
  $$\\int \\frac{x}{\\sqrt{1 - x^2}} \\, dx = -\\frac{1}{2} \\int t^{-1/2} \\, dt = -\\sqrt{t} = -\\sqrt{1 - x^2}$$
  $$y = x\\sin^{-1} x - (-\\sqrt{1 - x^2}) + C = \\mathbf{x\\sin^{-1} x + \\sqrt{1 - x^2} + C}$$

  <p><strong>(ii) Particular Solution:</strong></p>
  $$\\frac{dy}{dx} = \\frac{2x^2 + x}{x^3 + x^2 + x + 1} = \\frac{2x^2 + x}{x^2(x + 1) + 1(x + 1)} = \\frac{2x^2 + x}{(x^2 + 1)(x + 1)}$$
  Resolving into partial fractions:
  $$\\frac{2x^2 + x}{(x^2 + 1)(x + 1)} = \\frac{A}{x + 1} + \\frac{Bx + C}{x^2 + 1}$$
  $$2x^2 + x = A(x^2 + 1) + (Bx + C)(x + 1)$$
  <ul>
    <li>Put $x = -1$: $2(-1)^2 + (-1) = A(1 + 1) \\implies 1 = 2A \\implies A = \\frac{1}{2}$.</li>
    <li>Equating coefficient of $x^2$: $A + B = 2 \\implies \\frac{1}{2} + B = 2 \\implies B = \\frac{3}{2}$.</li>
    <li>Put $x = 0$: $0 = A(1) + C(1) \\implies C = -A = -\\frac{1}{2}$.</li>
  </ul>
  Thus:
  $$dy = \\left[ \\frac{1/2}{x + 1} + \\frac{3/2 x - 1/2}{x^2 + 1} \\right] dx = \\left[ \\frac{1}{2(x + 1)} + \\frac{3}{4}\\frac{2x}{x^2 + 1} - \\frac{1}{2}\\frac{1}{x^2 + 1} \\right] dx$$
  Integrating:
  $$y = \\frac{1}{2}\\log|x + 1| + \\frac{3}{4}\\log(x^2 + 1) - \\frac{1}{2}\\tan^{-1} x + C$$
  <p>Apply initial condition $y = 1$ when $x = 0$:</p>
  $$1 = \\frac{1}{2}\\log(1) + \\frac{3}{4}\\log(1) - \\frac{1}{2}\\tan^{-1}(0) + C \\implies C = 1$$
  $$\\mathbf{y = \\frac{1}{4} [2\\log|x + 1| + 3\\log(x^2 + 1)] - \\frac{1}{2}\\tan^{-1} x + 1}$$
  $$\\mathbf{y = \\frac{1}{4} \\log\\left[(x + 1)^2 (x^2 + 1)^3\\right] - \\frac{1}{2}\\tan^{-1} x + 1}$$`,
  '5 Marks',
  [
    ['(i) Integration by parts yielding y = x sin⁻¹x + √(1-x²) + C', '1.5 Marks'],
    ['(ii) Factoring denominator into (x+1)(x²+1) and partial fractions A=1/2, B=3/2, C=-1/2', '1.5 Marks'],
    ['(ii) Integrating all terms correctly', '1 Mark'],
    ['(ii) Substituting x=0, y=1 to find C = 1 and final solution', '1 Mark']
  ]
));

// Q5 (Ex 9.4/9.5 Q1 - Homogeneous Differential Equation Testing & Solution)
questions.push(createQCard(
  'c12m-ch9-q5',
  'Q5',
  'Exercise 9.4 (Verbatim)',
  `Show that the differential equation $(x^2 + xy) \\, dy = (x^2 + y^2) \\, dx$ is homogeneous and solve it.`,
  `<p><strong>Step 1: Test for Homogeneity:</strong></p>
  Rewrite as:
  $$\\frac{dy}{dx} = \\frac{x^2 + y^2}{x^2 + xy} = F(x, y)$$
  Let $F(\\lambda x, \\lambda y) = \\frac{(\\lambda x)^2 + (\\lambda y)^2}{(\\lambda x)^2 + (\\lambda x)(\\lambda y)} = \\frac{\\lambda^2(x^2 + y^2)}{\\lambda^2(x^2 + xy)} = \\lambda^0 F(x, y)$.
  <br>Since $F(\\lambda x, \\lambda y) = \\lambda^0 F(x, y)$, the differential equation is <strong>homogeneous of degree $0$</strong>.

  <p><strong>Step 2: Substitution $y = vx$:</strong></p>
  $$\\frac{dy}{dx} = v + x\\frac{dv}{dx}$$
  Substitute into the equation:
  $$v + x\\frac{dv}{dx} = \\frac{x^2 + (vx)^2}{x^2 + x(vx)} = \\frac{x^2(1 + v^2)}{x^2(1 + v)} = \\frac{1 + v^2}{1 + v}$$
  $$x\\frac{dv}{dx} = \\frac{1 + v^2}{1 + v} - v = \\frac{1 + v^2 - v(1 + v)}{1 + v} = \\frac{1 + v^2 - v - v^2}{1 + v} = \\frac{1 - v}{1 + v}$$

  <p><strong>Step 3: Separate Variables & Integrate:</strong></p>
  $$\\frac{1 + v}{1 - v} \\, dv = \\frac{dx}{x}$$
  Rewrite $\\frac{1 + v}{1 - v} = \\frac{-(1 - v) + 2}{1 - v} = -1 + \\frac{2}{1 - v}$:
  $$\\int \\left( -1 + \\frac{2}{1 - v} \\right) dv = \\int \\frac{dx}{x}$$
  $$-v - 2\\log|1 - v| = \\log|x| + C_1$$
  $$-v = \\log|x| + 2\\log|1 - v| + C_1 = \\log|x(1 - v)^2| + C_1$$
  Substitute back $v = \\frac{y}{x}$:
  $$-\\frac{y}{x} = \\log\\left| x\\left( 1 - \\frac{y}{x} \\right)^2 \\right| + C_1 = \\log\\left| x \\cdot \\frac{(x - y)^2}{x^2} \\right| + C_1 = \\log\\left| \\frac{(x - y)^2}{x} \\right| + C_1$$
  $$\\log\\left| \\frac{(x - y)^2}{x} \\right| + \\frac{y}{x} = C$$
  $$\\mathbf{(x - y)^2 = C x e^{-y/x}}$$`,
  '5 Marks',
  [
    ['Proof of homogeneity using F(λx, λy) = λ⁰ F(x, y)', '1 Mark'],
    ['Substitution y = vx and reducing to x dv/dx = (1 - v)/(1 + v)', '1.5 Marks'],
    ['Separation of variables and integration of (-1 + 2/(1-v))', '1.5 Marks'],
    ['Substituting v = y/x and simplifying to final relation', '1 Mark']
  ]
));

// Q6 (Ex 9.4/9.5 Q3, Q5 - Trigonometric Homogeneous DE)
questions.push(createQCard(
  'c12m-ch9-q6',
  'Q6',
  'Exercise 9.4 (Verbatim)',
  `Solve the differential equation:
  $$x \\frac{dy}{dx} - y + x \\sin\\left(\\frac{y}{x}\\right) = 0$$`,
  `<p><strong>Step 1: Formulate $\\frac{dy}{dx}$:</strong></p>
  $$x \\frac{dy}{dx} = y - x \\sin\\left(\\frac{y}{x}\\right)$$
  $$\\frac{dy}{dx} = \\frac{y}{x} - \\sin\\left(\\frac{y}{x}\\right)$$
  This is a function of $\\left(\\frac{y}{x}\\right)$, hence it is homogeneous.

  <p><strong>Step 2: Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:</strong></p>
  $$v + x\\frac{dv}{dx} = v - \\sin v$$
  $$x\\frac{dv}{dx} = -\\sin v$$

  <p><strong>Step 3: Separate Variables:</strong></p>
  $$-\\frac{dv}{\\sin v} = \\frac{dx}{x} \\implies -\\operatorname{cosec} v \\, dv = \\frac{dx}{x}$$
  Integrating both sides:
  $$-\\int \\operatorname{cosec} v \\, dv = \\int \\frac{dx}{x}$$
  $$-\\log|\\operatorname{cosec} v - \\cot v| = \\log|x| + \\log C_1$$
  $$\\log|x| + \\log|\\operatorname{cosec} v - \\cot v| = -\\log C_1 = \\log C$$
  $$\\log|x(\\operatorname{cosec} v - \\cot v)| = \\log C$$
  $$x(\\operatorname{cosec} v - \\cot v) = C$$
  Using trigonometric identity $\\operatorname{cosec} v - \\cot v = \\frac{1 - \\cos v}{\\sin v} = \\tan(v/2)$:
  $$x \\tan\\left(\\frac{v}{2}\\right) = C$$
  Substitute back $v = \\frac{y}{x}$:
  $$\\mathbf{x \\tan\\left(\\frac{y}{2x}\\right) = C}$$`,
  '4 Marks',
  [
    ['Formulating dy/dx = y/x - sin(y/x)', '1 Mark'],
    ['Substitution y = vx leading to x dv/dx = -sin v', '1 Mark'],
    ['Separation of variables and integrating -cosec v dv', '1 Mark'],
    ['Trigonometric simplification yielding x tan(y/(2x)) = C', '1 Mark']
  ]
));

// Q7 (Ex 9.4/9.5 Q10 - Homogeneous DE in dx/dy Form)
questions.push(createQCard(
  'c12m-ch9-q7',
  'Q7',
  'Exercise 9.4 (Verbatim)',
  `Solve the differential equation:
  $$(1 + e^{x/y}) \\, dx + e^{x/y}\\left(1 - \\frac{x}{y}\\right) dy = 0$$`,
  `<p><strong>Step 1: Identify Type:</strong></p>
  Notice the appearance of $\\frac{x}{y}$. This signals that we should write the equation in $\\frac{dx}{dy}$ form rather than $\\frac{dy}{dx}$:
  $$(1 + e^{x/y}) \\, dx = -e^{x/y}\\left(1 - \\frac{x}{y}\\right) dy = e^{x/y}\\left(\\frac{x}{y} - 1\\right) dy$$
  $$\\frac{dx}{dy} = \\frac{e^{x/y}\\left(\\frac{x}{y} - 1\\right)}{1 + e^{x/y}} = F\\left(\\frac{x}{y}\\right)$$
  This is a homogeneous differential equation in $\\frac{x}{y}$.

  <p><strong>Step 2: Substitution $x = vy \\implies \\frac{dx}{dy} = v + y\\frac{dv}{dy}$:</strong></p>
  $$v + y\\frac{dv}{dy} = \\frac{e^v(v - 1)}{1 + e^v}$$
  $$y\\frac{dv}{dy} = \\frac{v e^v - e^v}{1 + e^v} - v = \\frac{v e^v - e^v - v(1 + e^v)}{1 + e^v} = \\frac{v e^v - e^v - v - v e^v}{1 + e^v} = -\\frac{v + e^v}{1 + e^v}$$

  <p><strong>Step 3: Separate Variables:</strong></p>
  $$\\frac{1 + e^v}{v + e^v} \\, dv = -\\frac{dy}{y}$$
  Integrating both sides:
  $$\\int \\frac{1 + e^v}{v + e^v} \\, dv = -\\int \\frac{dy}{y}$$
  Notice that $\\frac{d}{dv}(v + e^v) = 1 + e^v$:
  $$\\log|v + e^v| = -\\log|y| + \\log C = \\log\\left|\\frac{C}{y}\\right|$$
  $$v + e^v = \\frac{C}{y} \\implies y(v + e^v) = C$$
  Substitute back $v = \\frac{x}{y}$:
  $$y\\left( \\frac{x}{y} + e^{x/y} \\right) = C$$
  $$\\mathbf{x + y e^{x/y} = C}$$`,
  '4 Marks',
  [
    ['Recognizing dx/dy form with variable x/y', '1 Mark'],
    ['Substitution x = vy leading to y dv/dy = -(v + eᵛ)/(1 + eᵛ)', '1.5 Marks'],
    ['Direct logarithmic integration since numerator is exact derivative of denominator', '1 Mark'],
    ['Substituting back v = x/y yielding x + y e^(x/y) = C', '0.5 Mark']
  ]
));

// Q8 (Ex 9.5/9.6 Q1, Q2 - First Order Linear Differential Equation)
questions.push(createQCard(
  'c12m-ch9-q8',
  'Q8',
  'Exercise 9.5 (Verbatim)',
  `Find the general solution of the differential equations:<br>
  (i) $\\frac{dy}{dx} + 2y = \\sin x$<br>
  (ii) $\\frac{dy}{dx} + 3y = e^{-2x}$`,
  `<p><strong>(i) $\\frac{dy}{dx} + 2y = \\sin x$:</strong></p>
  This is a linear differential equation $\\frac{dy}{dx} + Py = Q$ with $P = 2$ and $Q = \\sin x$.
  <ol>
    <li>Integrating Factor (I.F.):
      $$\\text{I.F.} = e^{\\int P \\, dx} = e^{\\int 2 \\, dx} = e^{2x}$$
    </li>
    <li>General Solution:
      $$y \\cdot (\\text{I.F.}) = \\int Q \\cdot (\\text{I.F.}) \\, dx + C$$
      $$y e^{2x} = \\int e^{2x} \\sin x \\, dx + C$$
    </li>
    <li>We already know the standard integral $\\int e^{ax} \\sin bx \\, dx = \\frac{e^{ax}}{a^2 + b^2}(a\\sin bx - b\\cos bx)$:
      <br>Here $a = 2, b = 1$:
      $$\\int e^{2x} \\sin x \\, dx = \\frac{e^{2x}}{2^2 + 1^2}(2\\sin x - \\cos x) = \\frac{e^{2x}}{5}(2\\sin x - \\cos x)$$
    </li>
    <li>Substitute back:
      $$y e^{2x} = \\frac{e^{2x}}{5}(2\\sin x - \\cos x) + C$$
      $$\\mathbf{y = \\frac{1}{5}(2\\sin x - \\cos x) + C e^{-2x}}$$
    </li>
  </ol>

  <p><strong>(ii) $\\frac{dy}{dx} + 3y = e^{-2x}$:</strong></p>
  Here $P = 3, Q = e^{-2x}$.
  <ol>
    <li>$\\text{I.F.} = e^{\\int 3 \\, dx} = e^{3x}$.</li>
    <li>$$y e^{3x} = \\int e^{-2x} e^{3x} \\, dx + C = \\int e^x \\, dx + C = e^x + C$$</li>
    <li>Divide by $e^{3x}$:
      $$\\mathbf{y = e^{-2x} + C e^{-3x}}$$
    </li>
  </ol>`,
  '4 Marks',
  [
    ['(i) Calculating I.F. = e^(2x)', '1 Mark'],
    ['(i) Evaluating integral and obtaining y = 1/5(2sin x - cos x) + C e^(-2x)', '1.5 Marks'],
    ['(ii) I.F. = e^(3x) and solution y = e^(-2x) + C e^(-3x)', '1.5 Marks']
  ]
));

// Q9 (Ex 9.5/9.6 Q4, Q5 - Linear Differential Equation with Trigonometric P)
questions.push(createQCard(
  'c12m-ch9-q9',
  'Q9',
  'Exercise 9.5 (Verbatim)',
  `Find the general solution of the differential equations:<br>
  (i) $\\frac{dy}{dx} + (\\sec x)y = \\tan x, \\; \\left(0 \\le x < \\frac{\\pi}{2}\\right)$<br>
  (ii) $\\cos^2 x \\frac{dy}{dx} + y = \\tan x, \\; \\left(0 \\le x < \\frac{\\pi}{2}\\right)$`,
  `<p><strong>(i) $\\frac{dy}{dx} + (\\sec x)y = \\tan x$:</strong></p>
  Here $P = \\sec x, \\; Q = \\tan x$.
  <ol>
    <li>Integrating Factor:
      $$\\text{I.F.} = e^{\\int \\sec x \\, dx} = e^{\\log|\\sec x + \\tan x|} = \\sec x + \\tan x$$
    </li>
    <li>General Solution:
      $$y (\\sec x + \\tan x) = \\int \\tan x (\\sec x + \\tan x) \\, dx + C$$
      $$= \\int (\\sec x \\tan x + \\tan^2 x) \\, dx + C = \\int [\\sec x \\tan x + (\\sec^2 x - 1)] \\, dx + C$$
      $$= \\sec x + \\tan x - x + C$$
    </li>
    <li>$$\\mathbf{y (\\sec x + \\tan x) = \\sec x + \\tan x - x + C}$$</li>
  </ol>

  <p><strong>(ii) $\\cos^2 x \\frac{dy}{dx} + y = \\tan x$:</strong></p>
  Divide throughout by $\\cos^2 x$:
  $$\\frac{dy}{dx} + \\left(\\frac{1}{\\cos^2 x}\\right) y = \\frac{\\tan x}{\\cos^2 x}$$
  $$\\frac{dy}{dx} + (\\sec^2 x) y = \\tan x \\sec^2 x$$
  Here $P = \\sec^2 x, \\; Q = \\tan x \\sec^2 x$.
  <ol>
    <li>$$\\text{I.F.} = e^{\\int \\sec^2 x \\, dx} = e^{\\tan x}$$</li>
    <li>General Solution:
      $$y e^{\\tan x} = \\int (\\tan x \\sec^2 x) e^{\\tan x} \\, dx + C$$
      For the integral, put $t = \\tan x \\implies dt = \\sec^2 x \\, dx$:
      $$\\int t e^t \\, dt = t e^t - e^t = e^t (t - 1) = e^{\\tan x}(\\tan x - 1)$$
    </li>
    <li>$$y e^{\\tan x} = e^{\\tan x}(\\tan x - 1) + C$$
      $$\\mathbf{y = \\tan x - 1 + C e^{-\\tan x}}$$
    </li>
  </ol>`,
  '4 Marks',
  [
    ['(i) I.F. = sec x + tan x and integration to y(sec x + tan x) = sec x + tan x - x + C', '2 Marks'],
    ['(ii) Dividing by cos²x to get standard form and I.F. = e^(tan x)', '1 Mark'],
    ['(ii) Substitution t = tan x and evaluating y = tan x - 1 + C e^(-tan x)', '1 Mark']
  ]
));

// Q10 (Ex 9.5/9.6 Q10 - Linear DE in dx/dy Form)
questions.push(createQCard(
  'c12m-ch9-q10',
  'Q10',
  'Exercise 9.5 (Verbatim)',
  `Find the general solution of the differential equation:
  $$(x + y) \\frac{dy}{dx} = 1$$
  Also solve $(x + 2y^2) \\frac{dy}{dx} = y \\; (y > 0)$.`,
  `<p><strong>Part 1: $(x + y) \\frac{dy}{dx} = 1$:</strong></p>
  Invert to obtain $\\frac{dx}{dy}$:
  $$\\frac{dx}{dy} = x + y \\implies \\frac{dx}{dy} - x = y$$
  This is a linear differential equation of Type 2: $\\frac{dx}{dy} + P_1 x = Q_1$ with $P_1 = -1$ and $Q_1 = y$.
  <ol>
    <li>Integrating Factor:
      $$\\text{I.F.} = e^{\\int (-1) \\, dy} = e^{-y}$$
    </li>
    <li>General Solution:
      $$x \\cdot (\\text{I.F.}) = \\int Q_1 \\cdot (\\text{I.F.}) \\, dy + C$$
      $$x e^{-y} = \\int y e^{-y} \\, dy + C$$
    </li>
    <li>Integrating by parts:
      $$\\int y e^{-y} \\, dy = y(-e^{-y}) - \\int 1(-e^{-y}) \\, dy = -y e^{-y} - e^{-y} = -e^{-y}(y + 1)$$
    </li>
    <li>$$x e^{-y} = -e^{-y}(y + 1) + C$$
      $$\\mathbf{x = -(y + 1) + C e^y \\implies x + y + 1 = C e^y}$$
    </li>
  </ol>

  <p><strong>Part 2: $(x + 2y^2) \\frac{dy}{dx} = y$:</strong></p>
  $$\\frac{dx}{dy} = \\frac{x + 2y^2}{y} = \\frac{x}{y} + 2y \\implies \\frac{dx}{dy} - \\frac{1}{y} x = 2y$$
  Here $P_1 = -\\frac{1}{y}, \\; Q_1 = 2y$.
  <ol>
    <li>$$\\text{I.F.} = e^{\\int -\\frac{1}{y} \\, dy} = e^{-\\log y} = e^{\\log(y^{-1})} = \\frac{1}{y}$$</li>
    <li>$$x \\left(\\frac{1}{y}\\right) = \\int 2y \\left(\\frac{1}{y}\\right) dy + C = \\int 2 \\, dy + C = 2y + C$$</li>
    <li>$$\\mathbf{x = 2y^2 + C y}$$</li>
  </ol>`,
  '4 Marks',
  [
    ['Inverting dy/dx to get dx/dy - x = y', '1 Mark'],
    ['I.F. = e^(-y) and integration by parts yielding x + y + 1 = C eʸ', '1.5 Marks'],
    ['Part 2: dx/dy - x/y = 2y with I.F. = 1/y yielding x = 2y² + Cy', '1.5 Marks']
  ]
));

// Q11 (Ex 9.5/9.6 Q13, Q14 - Particular Solution of Linear DE)
questions.push(createQCard(
  'c12m-ch9-q11',
  'Q11',
  'Exercise 9.5 (Verbatim)',
  `Find the particular solution of the differential equation:
  $$\\frac{dy}{dx} + 2y\\tan x = \\sin x; \\quad y = 0 \\text{ when } x = \\frac{\\pi}{3}$$
  Also find particular solution of $(1 + x^2)\\frac{dy}{dx} + 2xy = \\frac{1}{1 + x^2}; \\; y = 0 \\text{ when } x = 1$.`,
  `<p><strong>Part 1: $\\frac{dy}{dx} + (2\\tan x)y = \\sin x$:</strong></p>
  Here $P = 2\\tan x, \\; Q = \\sin x$.
  <ol>
    <li>$$\\text{I.F.} = e^{\\int 2\\tan x \\, dx} = e^{2\\log|\\sec x|} = e^{\\log(\\sec^2 x)} = \\sec^2 x$$</li>
    <li>General Solution:
      $$y \\sec^2 x = \\int \\sin x \\sec^2 x \\, dx + C = \\int \\sec x \\tan x \\, dx + C = \\sec x + C$$
      $$y = \\frac{\\sec x + C}{\\sec^2 x} = \\cos x + C \\cos^2 x$$
    </li>
    <li>Substitute initial conditions $y = 0$ at $x = \\frac{\\pi}{3}$:
      $$0 = \\cos\\left(\\frac{\\pi}{3}\\right) + C \\cos^2\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2} + C\\left(\\frac{1}{4}\\right)$$
      $$\\frac{C}{4} = -\\frac{1}{2} \\implies C = -2$$
    </li>
    <li>$$\\mathbf{y = \\cos x - 2\\cos^2 x}$$</li>
  </ol>

  <p><strong>Part 2: $(1 + x^2)\\frac{dy}{dx} + 2xy = \\frac{1}{1 + x^2}$:</strong></p>
  $$\\frac{dy}{dx} + \\left(\\frac{2x}{1 + x^2}\\right) y = \\frac{1}{(1 + x^2)^2}$$
  <ol>
    <li>$$\\text{I.F.} = e^{\\int \\frac{2x}{1 + x^2} \\, dx} = e^{\\log(1 + x^2)} = 1 + x^2$$</li>
    <li>$$y(1 + x^2) = \\int \\frac{1}{(1 + x^2)^2} (1 + x^2) \\, dx + C = \\int \\frac{1}{1 + x^2} \\, dx + C = \\tan^{-1} x + C$$</li>
    <li>Given $y = 0$ when $x = 1$:
      $$0(1 + 1) = \\tan^{-1}(1) + C \\implies 0 = \\frac{\\pi}{4} + C \\implies C = -\\frac{\\pi}{4}$$
    </li>
    <li>$$\\mathbf{y(1 + x^2) = \\tan^{-1} x - \\frac{\\pi}{4}}$$</li>
  </ol>`,
  '5 Marks',
  [
    ['Part 1: I.F. = sec²x and general solution y = cos x + C cos²x', '1.5 Marks'],
    ['Part 1: Initial condition giving C = -2 and particular solution y = cos x - 2cos²x', '1 Mark'],
    ['Part 2: I.F. = 1 + x² and general solution y(1+x²) = tan⁻¹x + C', '1.5 Marks'],
    ['Part 2: Initial condition giving C = -π/4 and final particular solution', '1 Mark']
  ]
));

// Q12 (Ex 9.3/9.4 Q20, Q21 - Real World Growth & Decay Models)
questions.push(createQCard(
  'c12m-ch9-q12',
  'Q12',
  'Exercise 9.3 (Verbatim)',
  `In a bank, principal increases continuously at the rate of $r\\%$ per year. Find the value of $r$ if ₹$100$ double itself in $10\\text{ years}$ $(\\log_e 2 = 0.6931)$.<br>
  Also, in a culture, the bacteria count is $100{,}000$. The number is increased by $10\\%$ in $2\\text{ hours}$. In how many hours will the count reach $200{,}000$, if the rate of growth of bacteria is proportional to the number present?`,
  `<p><strong>Part 1: Bank Principal Doubling:</strong></p>
  Let $P$ be the principal at time $t$ (in years).
  $$\\frac{dP}{dt} = \\frac{r}{100} P$$
  Separating variables:
  $$\\frac{dP}{P} = \\frac{r}{100} \\, dt \\implies \\log P = \\frac{r}{100} t + C$$
  <ol>
    <li>At $t = 0, \\; P = 100$:
      $$\\log(100) = C \\implies \\log P - \\log(100) = \\frac{rt}{100} \\implies \\log\\left(\\frac{P}{100}\\right) = \\frac{rt}{100}$$
    </li>
    <li>At $t = 10$, principal doubles, so $P = 200$:
      $$\\log\\left(\\frac{200}{100}\\right) = \\frac{r(10)}{100} \\implies \\log 2 = \\frac{r}{10}$$
      $$r = 10 \\log 2 = 10(0.6931) = \\mathbf{6.931\\%}$$
    </li>
  </ol>

  <p><strong>Part 2: Bacterial Population Growth:</strong></p>
  Let $N$ be the number of bacteria at time $t$ (in hours).
  $$\\frac{dN}{dt} = k N \\implies \\frac{dN}{N} = k \\, dt \\implies \\log N = k t + C$$
  <ol>
    <li>At $t = 0, \\; N = 100{,}000 \\implies C = \\log(100{,}000)$.
      $$\\log\\left(\\frac{N}{100{,}000}\\right) = k t$$
    </li>
    <li>At $t = 2\\text{ hours}$, number increases by $10\\%$, so $N = 110{,}000$:
      $$\\log\\left(\\frac{110{,}000}{100{,}000}\\right) = 2k \\implies \\log(1.1) = 2k \\implies k = \\frac{1}{2}\\log\\left(\\frac{11}{10}\\right)$$
    </li>
    <li>We need time $t$ when count reaches $200{,}000$:
      $$\\log\\left(\\frac{200{,}000}{100{,}000}\\right) = k t \\implies \\log 2 = \\left[ \\frac{1}{2}\\log\\left(\\frac{11}{10}\\right) \\right] t$$
      $$\\mathbf{t = \\frac{2\\log 2}{\\log(11/10)}\\text{ hours}}$$
    </li>
  </ol>`,
  '4 Marks',
  [
    ['Formulating dP/dt = (r/100)P and solving log(P/100) = rt/100', '1 Mark'],
    ['Evaluating r = 10 log 2 = 6.931%', '1 Mark'],
    ['Formulating dN/dt = kN and determining growth constant k = (1/2)log(11/10)', '1 Mark'],
    ['Solving for doubling time t = 2 log 2 / log(1.1) hours', '1 Mark']
  ]
));

saveChapter(
  9,
  'Differential Equations',
  svgDiagram,
  'NCERT Exercises 9.1 to 9.5 (12 Verbatim Core Questions)',
  questions,
  'Vector Algebra'
);
