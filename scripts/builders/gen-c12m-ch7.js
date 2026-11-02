// scripts/builders/gen-c12m-ch7.js
// Chapter 7: Integrals (16 Questions)
const { createQCard, saveChapter } = require('./c12m-helper');

const svgDiagram = `
<div class="chem-card" style="margin-bottom:24px; padding:20px; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
  <h4 style="margin:0 0 12px 0; color:#4f46e5; font-size:1.05rem;">📐 Master Reference: Indefinite & Definite Integration Toolkit</h4>
  <svg viewBox="0 0 880 260" style="width:100%; max-width:880px; height:auto; display:block; margin:0 auto; background:white; border-radius:8px; border:1px solid #c7d2fe;">
    <!-- Panel 1: Special Forms & Parts -->
    <rect x="20" y="20" width="260" height="220" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#3730a3" text-anchor="middle">By Parts & Exponential Rule</text>
    <line x1="35" y1="56" x2="265" y2="56" stroke="#6366f1" stroke-width="1.5"/>
    <text x="35" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Integration by Parts (ILATE):</text>
    <text x="35" y="96" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int u v \\, dx = u \\int v \\, dx - \\int \\left(u' \\int v \\, dx\\right) dx$</text>
    <text x="35" y="118" font-family="sans-serif" font-size="10" fill="#64748b">I: Inverse &bull; L: Log &bull; A: Alg &bull; T: Trig &bull; E: Exp</text>
    <text x="35" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Special Exponential Identity:</text>
    <text x="35" y="165" font-family="sans-serif" font-size="11" fill="#1e293b">$\\int e^x [f(x) + f'(x)] \\, dx = e^x f(x) + C$</text>
    <text x="35" y="195" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4338ca">Standard Substitution:</text>
    <text x="35" y="215" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int \\frac{f'(x)}{f(x)} \\, dx = \\log|f(x)| + C$</text>

    <!-- Panel 2: Standard Quadratic Forms -->
    <rect x="310" y="20" width="260" height="220" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="440" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#5b21b6" text-anchor="middle">Standard Quadratic Forms</text>
    <line x1="325" y1="56" x2="555" y2="56" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="325" y="78" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a} \\tan^{-1}\\left(\\frac{x}{a}\\right) + C$</text>
    <text x="325" y="108" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a} \\log\\left|\\frac{x-a}{x+a}\\right| + C$</text>
    <text x="325" y="138" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\left(\\frac{x}{a}\\right) + C$</text>
    <text x="325" y="168" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} = \\log|x + \\sqrt{x^2 \\pm a^2}| + C$</text>
    <text x="325" y="198" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#6d28d9">Partial Fractions Model:</text>
    <text x="325" y="218" font-family="sans-serif" font-size="10" fill="#334155">$\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$</text>

    <!-- Panel 3: Definite Integral Properties -->
    <rect x="600" y="20" width="260" height="220" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="730" y="46" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Definite Integral Properties</text>
    <line x1="615" y1="56" x2="845" y2="56" stroke="#10b981" stroke-width="1.5"/>
    <text x="615" y="78" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857">King's Property ($P_4$):</text>
    <text x="615" y="98" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int_0^a f(x) \\, dx = \\int_0^a f(a - x) \\, dx$</text>
    <text x="615" y="125" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857">Even / Odd Function ($P_7$):</text>
    <text x="615" y="145" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int_{-a}^a f(x) \\, dx = \\begin{cases} 2\\int_0^a f(x)dx & \\text{if even} \\\\ 0 & \\text{if odd} \\end{cases}$</text>
    <text x="615" y="180" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857">Splitting Property ($P_2$):</text>
    <text x="615" y="200" font-family="sans-serif" font-size="10.5" fill="#334155">$\\int_a^b f(x) \\, dx = \\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx$</text>
    <text x="615" y="220" font-family="sans-serif" font-size="9.5" fill="#047857">Crucial for piecewise & modulus functions</text>
  </svg>
</div>`;

const questions = [];

// Q1 (Ex 7.1 Q1-5, Q10 - Basic Inspection & Expansions)
questions.push(createQCard(
  'c12m-ch7-q1',
  'Q1',
  'Exercise 7.1 (Verbatim)',
  `Find an anti-derivative (or integral) of the following functions by the method of inspection / standard rules:<br>
  (i) $\\sin 2x$<br>
  (ii) $e^{2x}$<br>
  (iii) $(ax + b)^2$<br>
  (iv) Evaluate $\\int \\left(\\sqrt{x} - \\frac{1}{\\sqrt{x}}\\right)^2 dx$`,
  `<p><strong>(i) Anti-derivative of $\\sin 2x$:</strong></p>
  We seek a function whose derivative is $\\sin 2x$.
  <br>We know that $\\frac{d}{dx}(\\cos 2x) = -2\\sin 2x \\implies \\sin 2x = -\\frac{1}{2}\\frac{d}{dx}(\\cos 2x) = \\frac{d}{dx}\\left(-\\frac{1}{2}\\cos 2x\\right)$.
  <br>Therefore, an anti-derivative of $\\sin 2x$ is <strong>$-\\frac{1}{2}\\cos 2x$</strong>.

  <p><strong>(ii) Anti-derivative of $e^{2x}$:</strong></p>
  $\\frac{d}{dx}(e^{2x}) = 2e^{2x} \\implies e^{2x} = \\frac{d}{dx}\\left(\\frac{1}{2}e^{2x}\\right)$.
  <br>Therefore, an anti-derivative is <strong>$\\frac{1}{2}e^{2x}$</strong>.

  <p><strong>(iii) Anti-derivative of $(ax + b)^2$:</strong></p>
  $\\frac{d}{dx}(ax + b)^3 = 3a(ax + b)^2 \\implies (ax + b)^2 = \\frac{d}{dx}\\left(\\frac{1}{3a}(ax + b)^3\\right)$.
  <br>Therefore, an anti-derivative is <strong>$\\frac{1}{3a}(ax + b)^3$</strong>.

  <p><strong>(iv) $\\int \\left(\\sqrt{x} - \\frac{1}{\\sqrt{x}}\\right)^2 dx$:</strong></p>
  Expanding the integrand:
  $$\\left(\\sqrt{x} - \\frac{1}{\\sqrt{x}}\\right)^2 = x - 2\\sqrt{x}\\left(\\frac{1}{\\sqrt{x}}\\right) + \\frac{1}{x} = x - 2 + \\frac{1}{x}$$
  Integrating term-by-term:
  $$I = \\int x \\, dx - 2\\int 1 \\, dx + \\int \\frac{1}{x} \\, dx = \\mathbf{\\frac{x^2}{2} - 2x + \\log|x| + C}$$`,
  '4 Marks',
  [
    ['(i) & (ii) Anti-derivatives by inspection: -1/2 cos 2x and 1/2 e^(2x)', '1.5 Marks'],
    ['(iii) Anti-derivative (ax+b)³/(3a)', '1 Mark'],
    ['(iv) Expanding square and term-by-term integration: x²/2 - 2x + log|x| + C', '1.5 Marks']
  ]
));

// Q2 (Ex 7.2 Q1, Q5, Q7 - Substitution Basics)
questions.push(createQCard(
  'c12m-ch7-q2',
  'Q2',
  'Exercise 7.2 (Verbatim)',
  `Integrate the functions with respect to $x$:<br>
  (i) $\\frac{2x}{1 + x^2}$<br>
  (ii) $\\sin(ax + b) \\cos(ax + b)$<br>
  (iii) $x\\sqrt{x + 2}$`,
  `<p><strong>(i) $\\int \\frac{2x}{1 + x^2} \\, dx$:</strong></p>
  Let $1 + x^2 = t \\implies 2x \\, dx = dt$.
  $$I = \\int \\frac{dt}{t} = \\log|t| + C = \\mathbf{\\log(1 + x^2) + C}$$

  <p><strong>(ii) $\\int \\sin(ax + b) \\cos(ax + b) \\, dx$:</strong></p>
  Multiply and divide by $2$:
  $$I = \\frac{1}{2} \\int 2\\sin(ax + b) \\cos(ax + b) \\, dx = \\frac{1}{2} \\int \\sin(2(ax + b)) \\, dx$$
  $$I = \\frac{1}{2} \\left( -\\frac{\\cos(2ax + 2b)}{2a} \\right) + C = \\mathbf{-\\frac{\\cos(2ax + 2b)}{4a} + C}$$
  <em>(Alternatively: Let $\\sin(ax+b) = t \\implies I = \\frac{\\sin^2(ax+b)}{2a} + C_1$, which differs only by an arbitrary constant).</em>

  <p><strong>(iii) $\\int x\\sqrt{x + 2} \\, dx$:</strong></p>
  Let $x + 2 = t \\implies x = t - 2$ and $dx = dt$.
  $$I = \\int (t - 2)\\sqrt{t} \\, dt = \\int (t^{3/2} - 2t^{1/2}) \\, dt$$
  $$= \\frac{t^{5/2}}{5/2} - 2\\left(\\frac{t^{3/2}}{3/2}\\right) + C = \\frac{2}{5}t^{5/2} - \\frac{4}{3}t^{3/2} + C$$
  Substitute back $t = x + 2$:
  $$I = \\mathbf{\\frac{2}{5}(x + 2)^{5/2} - \\frac{4}{3}(x + 2)^{3/2} + C} = \\frac{2}{15}(x + 2)^{3/2}[3(x + 2) - 10] + C = \\frac{2}{15}(x + 2)^{3/2}(3x - 4) + C$$`,
  '4 Marks',
  [
    ['(i) Substitution 1+x² = t yielding log(1+x²) + C', '1 Mark'],
    ['(ii) Double angle identity or substitution yielding -cos(2ax+2b)/(4a) + C', '1.5 Marks'],
    ['(iii) Substitution x+2 = t and integrating fractional powers: 2/5(x+2)^(5/2) - 4/3(x+2)^(3/2) + C', '1.5 Marks']
  ]
));

// Q3 (Ex 7.2 Q32, Q33 - Classical Rational Trigonometric Integrals)
questions.push(createQCard(
  'c12m-ch7-q3',
  'Q3',
  'Exercise 7.2 (Verbatim)',
  `Integrate the following functions:<br>
  (i) $\\frac{1}{1 + \\cot x}$<br>
  (ii) $\\frac{1}{1 - \\tan x}$`,
  `<p><strong>(i) $\\int \\frac{1}{1 + \\cot x} \\, dx$:</strong></p>
  Convert $\\cot x = \\frac{\\cos x}{\\sin x}$:
  $$\\frac{1}{1 + \\frac{\\cos x}{\\sin x}} = \\frac{\\sin x}{\\sin x + \\cos x}$$
  Multiply numerator and denominator by $2$:
  $$I = \\frac{1}{2} \\int \\frac{2\\sin x}{\\sin x + \\cos x} \\, dx$$
  Express $2\\sin x = (\\sin x + \\cos x) - (\\cos x - \\sin x)$:
  $$I = \\frac{1}{2} \\int \\left[ \\frac{\\sin x + \\cos x}{\\sin x + \\cos x} - \\frac{\\cos x - \\sin x}{\\sin x + \\cos x} \\right] dx$$
  $$I = \\frac{1}{2} \\int 1 \\, dx - \\frac{1}{2} \\int \\frac{\\cos x - \\sin x}{\\sin x + \\cos x} \\, dx$$
  For the second integral, let $t = \\sin x + \\cos x \\implies dt = (\\cos x - \\sin x) \\, dx$:
  $$I = \\frac{1}{2} x - \\frac{1}{2} \\int \\frac{dt}{t} = \\mathbf{\\frac{x}{2} - \\frac{1}{2}\\log|\\sin x + \\cos x| + C}$$

  <p><strong>(ii) $\\int \\frac{1}{1 - \\tan x} \\, dx$:</strong></p>
  Convert $\\tan x = \\frac{\\sin x}{\\cos x}$:
  $$\\frac{1}{1 - \\frac{\\sin x}{\\cos x}} = \\frac{\\cos x}{\\cos x - \\sin x}$$
  Multiply and divide by $2$:
  $$I = \\frac{1}{2} \\int \\frac{2\\cos x}{\\cos x - \\sin x} \\, dx = \\frac{1}{2} \\int \\frac{(\\cos x - \\sin x) + (\\cos x + \\sin x)}{\\cos x - \\sin x} \\, dx$$
  $$I = \\frac{1}{2} \\int 1 \\, dx + \\frac{1}{2} \\int \\frac{\\cos x + \\sin x}{\\cos x - \\sin x} \\, dx$$
  In the second integral, let $t = \\cos x - \\sin x \\implies dt = (-\\sin x - \\cos x) \\, dx = -(\\cos x + \\sin x) \\, dx$:
  $$I = \\frac{1}{2} x - \\frac{1}{2} \\int \\frac{dt}{t} = \\mathbf{\\frac{x}{2} - \\frac{1}{2}\\log|\\cos x - \\sin x| + C}$$`,
  '4 Marks',
  [
    ['(i) Splitting 2sin x = (sin x + cos x) - (cos x - sin x)', '1 Mark'],
    ['(i) Evaluating both parts to get x/2 - 1/2 log|sin x + cos x| + C', '1 Mark'],
    ['(ii) Splitting 2cos x = (cos x - sin x) + (cos x + sin x)', '1 Mark'],
    ['(ii) Evaluating integral to get x/2 - 1/2 log|cos x - sin x| + C', '1 Mark']
  ]
));

// Q4 (Ex 7.3 Q1, Q7, Q13 - Trigonometric Products & Identities)
questions.push(createQCard(
  'c12m-ch7-q4',
  'Q4',
  'Exercise 7.3 (Verbatim)',
  `Find the integrals of the following functions:<br>
  (i) $\\sin^2(2x + 5)$<br>
  (ii) $\\sin 4x \\sin 8x$<br>
  (iii) $\\frac{\\cos 2x - \\cos 2\\alpha}{\\cos x - \\cos\\alpha}$`,
  `<p><strong>(i) $\\int \\sin^2(2x + 5) \\, dx$:</strong></p>
  Use identity $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$ with $\\theta = 2x + 5$:
  $$\\sin^2(2x + 5) = \\frac{1 - \\cos(4x + 10)}{2}$$
  $$I = \\frac{1}{2} \\int [1 - \\cos(4x + 10)] \\, dx = \\mathbf{\\frac{x}{2} - \\frac{\\sin(4x + 10)}{8} + C}$$

  <p><strong>(ii) $\\int \\sin 4x \\sin 8x \\, dx$:</strong></p>
  Use identity $2\\sin A \\sin B = \\cos(A - B) - \\cos(A + B)$:
  $$\\sin 8x \\sin 4x = \\frac{1}{2} [\\cos(8x - 4x) - \\cos(8x + 4x)] = \\frac{1}{2} [\\cos 4x - \\cos 12x]$$
  $$I = \\frac{1}{2} \\int [\\cos 4x - \\cos 12x] \\, dx = \\frac{1}{2} \\left[ \\frac{\\sin 4x}{4} - \\frac{\\sin 12x}{12} \\right] + C = \\mathbf{\\frac{\\sin 4x}{8} - \\frac{\\sin 12x}{24} + C}$$

  <p><strong>(iii) $\\int \\frac{\\cos 2x - \\cos 2\\alpha}{\\cos x - \\cos\\alpha} \\, dx$:</strong></p>
  Use $\\cos 2\\theta = 2\\cos^2\\theta - 1$:
  $$\\cos 2x - \\cos 2\\alpha = (2\\cos^2 x - 1) - (2\\cos^2\\alpha - 1) = 2(\\cos^2 x - \\cos^2\\alpha)$$
  $$= 2(\\cos x - \\cos\\alpha)(\\cos x + \\cos\\alpha)$$
  Substituting into integrand:
  $$\\frac{2(\\cos x - \\cos\\alpha)(\\cos x + \\cos\\alpha)}{\\cos x - \\cos\\alpha} = 2(\\cos x + \\cos\\alpha)$$
  Integrating with respect to $x$ (noting that $\\cos\\alpha$ is a constant):
  $$I = 2 \\int (\\cos x + \\cos\\alpha) \\, dx = \\mathbf{2\\sin x + 2x\\cos\\alpha + C}$$`,
  '4 Marks',
  [
    ['(i) Applying half-angle identity: x/2 - sin(4x+10)/8 + C', '1 Mark'],
    ['(ii) Product to sum identity: sin 4x / 8 - sin 12x / 24 + C', '1.5 Marks'],
    ['(iii) Factoring difference of cosines and integrating: 2sin x + 2x cos α + C', '1.5 Marks']
  ]
));

// Q5 (Ex 7.3 Q22 - Special Angle Difference Technique)
questions.push(createQCard(
  'c12m-ch7-q5',
  'Q5',
  'Exercise 7.3 (Verbatim)',
  `Find the integral:
  $$\\int \\frac{1}{\\cos(x - a) \\cos(x - b)} \\, dx$$`,
  `<p>This is a landmark CBSE exam question. We multiply and divide by $\\sin(a - b)$:</p>
  $$I = \\frac{1}{\\sin(a - b)} \\int \\frac{\\sin(a - b)}{\\cos(x - a) \\cos(x - b)} \\, dx$$
  Notice that $(a - b) = (x - b) - (x - a)$.
  <br>Rewrite the numerator:
  $$\\sin(a - b) = \\sin[(x - b) - (x - a)] = \\sin(x - b)\\cos(x - a) - \\cos(x - b)\\sin(x - a)$$
  Substitute into the integral:
  $$I = \\frac{1}{\\sin(a - b)} \\int \\left[ \\frac{\\sin(x - b)\\cos(x - a)}{\\cos(x - a)\\cos(x - b)} - \\frac{\\cos(x - b)\\sin(x - a)}{\\cos(x - a)\\cos(x - b)} \\right] dx$$
  $$I = \\frac{1}{\\sin(a - b)} \\int [\\tan(x - b) - \\tan(x - a)] \\, dx$$
  We know that $\\int \\tan u \\, du = -\\log|\\cos u| + C = \\log|\\sec u| + C$.
  $$I = \\frac{1}{\\sin(a - b)} [-\\log|\\cos(x - b)| + \\log|\\cos(x - a)|] + C$$
  Using log subtraction property $\\log A - \\log B = \\log(A/B)$:
  $$\\mathbf{I = \\frac{1}{\\sin(a - b)} \\log\\left|\\frac{\\cos(x - a)}{\\cos(x - b)}\\right| + C}$$`,
  '4 Marks',
  [
    ['Multiplying and dividing by sin(a - b)', '1 Mark'],
    ['Expressing (a - b) as (x - b) - (x - a) and expanding sin(A - B)', '1.5 Marks'],
    ['Separating into tan terms and integrating to log|sec| / log|cos|', '1 Mark'],
    ['Final simplified logarithmic expression', '0.5 Mark']
  ]
));

// Q6 (Ex 7.4 Q1, Q7, Q10 - Completing the Square & Particular Formulas)
questions.push(createQCard(
  'c12m-ch7-q6',
  'Q6',
  'Exercise 7.4 (Verbatim)',
  `Integrate the following functions:<br>
  (i) $\\frac{3x^2}{x^6 + 1}$<br>
  (ii) $\\frac{x - 1}{\\sqrt{x^2 - 1}}$<br>
  (iii) $\\frac{1}{\\sqrt{x^2 + 2x + 2}}$`,
  `<p><strong>(i) $\\int \\frac{3x^2}{x^6 + 1} \\, dx$:</strong></p>
  Write $x^6 = (x^3)^2$. Let $x^3 = t \\implies 3x^2 \\, dx = dt$.
  $$I = \\int \\frac{dt}{t^2 + 1} = \\tan^{-1}(t) + C = \\mathbf{\\tan^{-1}(x^3) + C}$$

  <p><strong>(ii) $\\int \\frac{x - 1}{\\sqrt{x^2 - 1}} \\, dx$:</strong></p>
  Split into two separate integrals:
  $$I = \\int \\frac{x}{\\sqrt{x^2 - 1}} \\, dx - \\int \\frac{1}{\\sqrt{x^2 - 1}} \\, dx$$
  <ul>
    <li>For first integral, let $x^2 - 1 = t \\implies 2x \\, dx = dt \\implies x \\, dx = \\frac{dt}{2}$:
      $$\\int \\frac{x}{\\sqrt{x^2 - 1}} \\, dx = \\frac{1}{2} \\int t^{-1/2} \\, dt = \\frac{1}{2} (2\\sqrt{t}) = \\sqrt{x^2 - 1}$$
    </li>
    <li>For second integral, apply standard formula $\\int \\frac{dx}{\\sqrt{x^2 - a^2}} = \\log|x + \\sqrt{x^2 - a^2}|$:
      $$\\int \\frac{1}{\\sqrt{x^2 - 1}} \\, dx = \\log|x + \\sqrt{x^2 - 1}|$$
    </li>
  </ul>
  $$I = \\mathbf{\\sqrt{x^2 - 1} - \\log|x + \\sqrt{x^2 - 1}| + C}$$

  <p><strong>(iii) $\\int \\frac{1}{\\sqrt{x^2 + 2x + 2}} \\, dx$:</strong></p>
  Completing the square in the denominator:
  $$x^2 + 2x + 2 = (x^2 + 2x + 1) + 1 = (x + 1)^2 + 1^2$$
  $$I = \\int \\frac{dx}{\\sqrt{(x + 1)^2 + 1^2}}$$
  Using formula $\\int \\frac{du}{\\sqrt{u^2 + a^2}} = \\log|u + \\sqrt{u^2 + a^2}| + C$:
  $$\\mathbf{I = \\log|(x + 1) + \\sqrt{x^2 + 2x + 2}| + C}$$`,
  '4 Marks',
  [
    ['(i) Substitution x³ = t yielding tan⁻¹(x³) + C', '1 Mark'],
    ['(ii) Splitting into derivative part and standard integral: √(x²-1) - log|x+√(x²-1)| + C', '1.5 Marks'],
    ['(iii) Completing the square (x+1)² + 1 and applying standard formula', '1.5 Marks']
  ]
));

// Q7 (Ex 7.4 Q18 - Linear over Quadratic Form)
questions.push(createQCard(
  'c12m-ch7-q7',
  'Q7',
  'Exercise 7.4 (Verbatim)',
  `Integrate the function:
  $$\\int \\frac{5x - 2}{1 + 2x + 3x^2} \\, dx$$`,
  `<p>This is of the form $\\int \\frac{px + q}{ax^2 + bx + c} \\, dx$.</p>
  <p><strong>Step 1: Express numerator as $A \\frac{d}{dx}(\\text{denominator}) + B$:</strong></p>
  $$5x - 2 = A \\frac{d}{dx}(3x^2 + 2x + 1) + B$$
  $$5x - 2 = A(6x + 2) + B = 6Ax + (2A + B)$$
  Equating coefficients:
  <ul>
    <li>$6A = 5 \\implies A = \\frac{5}{6}$</li>
    <li>$2A + B = -2 \\implies 2\\left(\\frac{5}{6}\\right) + B = -2 \\implies \\frac{5}{3} + B = -2 \\implies B = -2 - \\frac{5}{3} = -\\frac{11}{3}$</li>
  </ul>

  <p><strong>Step 2: Split the integral:</strong></p>
  $$I = \\frac{5}{6} \\int \\frac{6x + 2}{3x^2 + 2x + 1} \\, dx - \\frac{11}{3} \\int \\frac{1}{3x^2 + 2x + 1} \\, dx = \\frac{5}{6} I_1 - \\frac{11}{3} I_2$$
  <ol>
    <li><strong>For $I_1$:</strong>
      $$I_1 = \\int \\frac{6x + 2}{3x^2 + 2x + 1} \\, dx = \\log|3x^2 + 2x + 1|$$
    </li>
    <li><strong>For $I_2$:</strong>
      $$3x^2 + 2x + 1 = 3\\left( x^2 + \\frac{2}{3}x + \\frac{1}{3} \\right) = 3\\left[ \\left(x + \\frac{1}{3}\\right)^2 + \\frac{1}{3} - \\frac{1}{9} \\right] = 3\\left[ \\left(x + \\frac{1}{3}\\right)^2 + \\left(\\frac{\\sqrt{2}}{3}\\right)^2 \\right]$$
      $$I_2 = \\frac{1}{3} \\int \\frac{dx}{\\left(x + \\frac{1}{3}\\right)^2 + \\left(\\frac{\\sqrt{2}}{3}\\right)^2} = \\frac{1}{3} \\cdot \\frac{1}{\\sqrt{2}/3} \\tan^{-1}\\left( \\frac{x + 1/3}{\\sqrt{2}/3} \\right) = \\frac{1}{\\sqrt{2}} \\tan^{-1}\\left(\\frac{3x + 1}{\\sqrt{2}}\\right)$$
    </li>
  </ol>
  <p><strong>Step 3: Combine:</strong></p>
  $$I = \\frac{5}{6}\\log|3x^2 + 2x + 1| - \\frac{11}{3} \\left( \\frac{1}{\\sqrt{2}} \\tan^{-1}\\left(\\frac{3x + 1}{\\sqrt{2}}\\right) \\right) + C$$
  $$\\mathbf{I = \\frac{5}{6}\\log|3x^2 + 2x + 1| - \\frac{11}{3\\sqrt{2}} \\tan^{-1}\\left(\\frac{3x + 1}{\\sqrt{2}}\\right) + C}$$`,
  '4 Marks',
  [
    ['Determining coefficients A = 5/6 and B = -11/3', '1.5 Marks'],
    ['Evaluating I1 = log|3x² + 2x + 1|', '1 Mark'],
    ['Completing square and evaluating I2 via tan⁻¹ formula', '1 Mark'],
    ['Combining terms for final answer', '0.5 Mark']
  ]
));

// Q8 (Ex 7.5 Q1, Q3, Q16 - Partial Fractions)
questions.push(createQCard(
  'c12m-ch7-q8',
  'Q8',
  'Exercise 7.5 (Verbatim)',
  `Integrate the following rational functions using partial fractions:<br>
  (i) $\\frac{x}{(x + 1)(x + 2)}$<br>
  (ii) $\\frac{1}{x(x^n + 1)}$`,
  `<p><strong>(i) $\\int \\frac{x}{(x + 1)(x + 2)} \\, dx$:</strong></p>
  Decompose into partial fractions:
  $$\\frac{x}{(x + 1)(x + 2)} = \\frac{A}{x + 1} + \\frac{B}{x + 2}$$
  $$x = A(x + 2) + B(x + 1)$$
  <ul>
    <li>Put $x = -1$: $-1 = A(1) \\implies A = -1$</li>
    <li>Put $x = -2$: $-2 = B(-1) \\implies B = 2$</li>
  </ul>
  $$\\frac{x}{(x + 1)(x + 2)} = -\\frac{1}{x + 1} + \\frac{2}{x + 2}$$
  Integrating:
  $$I = -\\int \\frac{1}{x + 1} \\, dx + 2\\int \\frac{1}{x + 2} \\, dx = -\\log|x + 1| + 2\\log|x + 2| + C$$
  $$\\mathbf{I = \\log\\left|\\frac{(x + 2)^2}{x + 1}\\right| + C}$$

  <p><strong>(ii) $\\int \\frac{1}{x(x^n + 1)} \\, dx$:</strong></p>
  Multiply numerator and denominator by $x^{n-1}$:
  $$I = \\int \\frac{x^{n-1}}{x^n (x^n + 1)} \\, dx$$
  Let $x^n = t \\implies n x^{n-1} \\, dx = dt \\implies x^{n-1} \\, dx = \\frac{dt}{n}$.
  $$I = \\frac{1}{n} \\int \\frac{dt}{t(t + 1)}$$
  Decompose $\\frac{1}{t(t + 1)} = \\frac{1}{t} - \\frac{1}{t + 1}$:
  $$I = \\frac{1}{n} \\int \\left( \\frac{1}{t} - \\frac{1}{t + 1} \\right) dt = \\frac{1}{n} [\\log|t| - \\log|t + 1|] + C = \\frac{1}{n} \\log\\left|\\frac{t}{t + 1}\\right| + C$$
  Substitute back $t = x^n$:
  $$\\mathbf{I = \\frac{1}{n} \\log\\left|\\frac{x^n}{x^n + 1}\\right| + C}$$`,
  '4 Marks',
  [
    ['(i) Resolving into partial fractions A = -1, B = 2 and integrating to log|(x+2)²/(x+1)| + C', '2 Marks'],
    ['(ii) Multiplying by x^(n-1) and substituting xⁿ = t', '1 Mark'],
    ['(ii) Partial fractions in t and final answer: (1/n) log|xⁿ/(xⁿ+1)| + C', '1 Mark']
  ]
));

// Q9 (Ex 7.6 Q1, Q6, Q16 - Integration by Parts & e^x[f(x)+f'(x)])
questions.push(createQCard(
  'c12m-ch7-q9',
  'Q9',
  'Exercise 7.6 (Verbatim)',
  `Find the integrals of the following functions:<br>
  (i) $x \\sin x$<br>
  (ii) $x^2 \\log x$<br>
  (iii) $e^x (\\sin x + \\cos x)$<br>
  (iv) $\\frac{x e^x}{(1 + x)^2}$`,
  `<p><strong>(i) $\\int x \\sin x \\, dx$:</strong></p>
  Using ILATE: $u = x$ (Algebraic, 1st function), $v = \\sin x$ (Trigonometric, 2nd function).
  $$I = x \\int \\sin x \\, dx - \\int \\left( \\frac{d}{dx}(x) \\int \\sin x \\, dx \\right) dx$$
  $$= x(-\\cos x) - \\int 1(-\\cos x) \\, dx = -x\\cos x + \\int \\cos x \\, dx = \\mathbf{-x\\cos x + \\sin x + C}$$

  <p><strong>(ii) $\\int x^2 \\log x \\, dx$:</strong></p>
  Using ILATE: $u = \\log x$ (Logarithmic, 1st), $v = x^2$ (Algebraic, 2nd).
  $$I = (\\log x) \\int x^2 \\, dx - \\int \\left( \\frac{1}{x} \\cdot \\frac{x^3}{3} \\right) dx = \\frac{x^3}{3}\\log x - \\frac{1}{3} \\int x^2 \\, dx = \\mathbf{\\frac{x^3}{3}\\log x - \\frac{x^3}{9} + C}$$

  <p><strong>(iii) $\\int e^x (\\sin x + \\cos x) \\, dx$:</strong></p>
  This matches the theorem $\\int e^x [f(x) + f'(x)] \\, dx = e^x f(x) + C$.
  <br>Let $f(x) = \\sin x \\implies f'(x) = \\cos x$.
  <br>$$\\mathbf{I = e^x \\sin x + C}$$

  <p><strong>(iv) $\\int \\frac{x e^x}{(1 + x)^2} \\, dx$:</strong></p>
  Rewrite numerator: $x = (x + 1) - 1$.
  $$I = \\int e^x \\left[ \\frac{x + 1}{(x + 1)^2} - \\frac{1}{(x + 1)^2} \\right] dx = \\int e^x \\left[ \\frac{1}{x + 1} - \\frac{1}{(x + 1)^2} \\right] dx$$
  Let $f(x) = \\frac{1}{x + 1} \\implies f'(x) = -\\frac{1}{(x + 1)^2}$.
  <br>By the theorem $\\int e^x [f(x) + f'(x)] \\, dx = e^x f(x) + C$:
  $$\\mathbf{I = \\frac{e^x}{x + 1} + C}$$`,
  '4 Marks',
  [
    ['(i) By parts on x sin x: -x cos x + sin x + C', '1 Mark'],
    ['(ii) By parts on x² log x: x³/3 log x - x³/9 + C', '1 Mark'],
    ['(iii) Identifying eˣ[f(x)+f\'(x)] form yielding eˣ sin x + C', '1 Mark'],
    ['(iv) Splitting x/(1+x)² = 1/(x+1) - 1/(x+1)² yielding eˣ/(x+1) + C', '1 Mark']
  ]
));

// Q10 (Ex 7.6 Q21 - Exponential Times Trigonometric Cycle)
questions.push(createQCard(
  'c12m-ch7-q10',
  'Q10',
  'Exercise 7.6 (Verbatim)',
  `Integrate the function:
  $$I = \\int e^{2x} \\sin x \\, dx$$`,
  `<p>Let $I = \\int e^{2x} \\sin x \\, dx$.</p>
  <p>Using ILATE rule: $u = \\sin x$ (1st function), $v = e^{2x}$ (2nd function).</p>
  <p><strong>First Integration by Parts:</strong></p>
  $$I = \\sin x \\left(\\frac{e^{2x}}{2}\\right) - \\int \\cos x \\left(\\frac{e^{2x}}{2}\\right) dx$$
  $$I = \\frac{1}{2} e^{2x} \\sin x - \\frac{1}{2} \\int e^{2x} \\cos x \\, dx$$

  <p><strong>Second Integration by Parts:</strong></p>
  Now consider $I_1 = \\int e^{2x} \\cos x \\, dx$.
  <br>Let $u = \\cos x$ and $v = e^{2x}$:
  $$I_1 = \\cos x \\left(\\frac{e^{2x}}{2}\\right) - \\int (-\\sin x) \\left(\\frac{e^{2x}}{2}\\right) dx = \\frac{1}{2} e^{2x} \\cos x + \\frac{1}{2} \\int e^{2x} \\sin x \\, dx = \\frac{1}{2} e^{2x} \\cos x + \\frac{1}{2} I$$

  <p><strong>Substitute $I_1$ back into $I$:</strong></p>
  $$I = \\frac{1}{2} e^{2x} \\sin x - \\frac{1}{2} \\left( \\frac{1}{2} e^{2x} \\cos x + \\frac{1}{2} I \\right)$$
  $$I = \\frac{1}{2} e^{2x} \\sin x - \\frac{1}{4} e^{2x} \\cos x - \\frac{1}{4} I$$
  Add $\\frac{1}{4} I$ to both sides:
  $$I + \\frac{1}{4} I = \\frac{e^{2x}}{4} (2\\sin x - \\cos x)$$
  $$\\frac{5}{4} I = \\frac{e^{2x}}{4} (2\\sin x - \\cos x)$$
  $$\\mathbf{I = \\frac{e^{2x}}{5} (2\\sin x - \\cos x) + C}$$`,
  '4 Marks',
  [
    ['First application of integration by parts', '1.5 Marks'],
    ['Second application of integration by parts reproducing I', '1.5 Marks'],
    ['Algebraically solving for I to obtain (e^(2x)/5)(2sin x - cos x) + C', '1 Mark']
  ]
));

// Q11 (Ex 7.8/7.9 Q1, Q5, Q17 - Definite Integrals via FTC)
questions.push(createQCard(
  'c12m-ch7-q11',
  'Q11',
  'Exercise 7.8 (Verbatim)',
  `Evaluate the definite integrals:<br>
  (i) $\\int_{-1}^1 (x + 1) \\, dx$<br>
  (ii) $\\int_0^{\\pi/2} \\cos 2x \\, dx$<br>
  (iii) $\\int_0^{\\pi/4} (2\\sec^2 x + x^3 + 2) \\, dx$`,
  `<p><strong>(i) $\\int_{-1}^1 (x + 1) \\, dx$:</strong></p>
  $$I = \\left[ \\frac{x^2}{2} + x \\right]_{-1}^1 = \\left( \\frac{1^2}{2} + 1 \\right) - \\left( \\frac{(-1)^2}{2} + (-1) \\right) = \\left( \\frac{1}{2} + 1 \\right) - \\left( \\frac{1}{2} - 1 \\right) = \\frac{3}{2} - \\left(-\\frac{1}{2}\\right) = \\mathbf{2}$$

  <p><strong>(ii) $\\int_0^{\\pi/2} \\cos 2x \\, dx$:</strong></p>
  $$I = \\left[ \\frac{\\sin 2x}{2} \\right]_0^{\\pi/2} = \\frac{1}{2} \\left[ \\sin\\left(2 \\cdot \\frac{\\pi}{2}\\right) - \\sin(0) \\right] = \\frac{1}{2} [\\sin\\pi - \\sin 0] = \\frac{1}{2} [0 - 0] = \\mathbf{0}$$

  <p><strong>(iii) $\\int_0^{\\pi/4} (2\\sec^2 x + x^3 + 2) \\, dx$:</strong></p>
  $$I = \\left[ 2\\tan x + \\frac{x^4}{4} + 2x \\right]_0^{\\pi/4}$$
  $$= \\left[ 2\\tan\\left(\\frac{\\pi}{4}\\right) + \\frac{1}{4}\\left(\\frac{\\pi}{4}\\right)^4 + 2\\left(\\frac{\\pi}{4}\\right) \\right] - [0 + 0 + 0]$$
  $$= 2(1) + \\frac{1}{4}\\left(\\frac{\\pi^4}{256}\\right) + \\frac{\\pi}{2} = \\mathbf{2 + \\frac{\\pi}{2} + \\frac{\\pi^4}{1024}}$$`,
  '3 Marks',
  [
    ['(i) FTC antiderivative evaluation yielding 2', '1 Mark'],
    ['(ii) Antiderivative sin 2x / 2 evaluated between 0 and π/2 yielding 0', '1 Mark'],
    ['(iii) Antiderivative 2 tan x + x⁴/4 + 2x yielding 2 + π/2 + π⁴/1024', '1 Mark']
  ]
));

// Q12 (Ex 7.10 Q5 - Splitting Property P2 for Modulus Integral)
questions.push(createQCard(
  'c12m-ch7-q12',
  'Q12',
  'Exercise 7.10 (Verbatim)',
  `Evaluate the definite integral using properties:
  $$\\int_2^8 |x - 5| \\, dx$$
  Also evaluate $\\int_{-5}^5 |x + 2| \\, dx$.`,
  `<p><strong>Part 1: $\\int_2^8 |x - 5| \\, dx$:</strong></p>
  The integrand changes definition at $x = 5$:
  $$|x - 5| = \\begin{cases} -(x - 5) = 5 - x, & 2 \\le x < 5 \\\\ x - 5, & 5 \\le x \\le 8 \\end{cases}$$
  Using property $P_2$: $\\int_a^b f(x) \\, dx = \\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx$:
  $$I = \\int_2^5 (5 - x) \\, dx + \\int_5^8 (x - 5) \\, dx$$
  <ol>
    <li>$\\int_2^5 (5 - x) \\, dx = \\left[ 5x - \\frac{x^2}{2} \\right]_2^5 = \\left(25 - \\frac{25}{2}\\right) - (10 - 2) = \\frac{25}{2} - 8 = \\frac{9}{2}$.</li>
    <li>$\\int_5^8 (x - 5) \\, dx = \\left[ \\frac{x^2}{2} - 5x \\right]_5^8 = (32 - 40) - \\left(\\frac{25}{2} - 25\\right) = -8 - \\left(-\\frac{25}{2}\\right) = \\frac{9}{2}$.</li>
  </ol>
  $$I = \\frac{9}{2} + \\frac{9}{2} = \\mathbf{9}$$

  <p><strong>Part 2: $\\int_{-5}^5 |x + 2| \\, dx$:</strong></p>
  Partition at $x = -2$:
  $$|x + 2| = \\begin{cases} -(x + 2), & -5 \\le x < -2 \\\\ x + 2, & -2 \\le x \\le 5 \\end{cases}$$
  $$I = -\\int_{-5}^{-2} (x + 2) \\, dx + \\int_{-2}^5 (x + 2) \\, dx$$
  <ol>
    <li>$-\\left[ \\frac{(x + 2)^2}{2} \\right]_{-5}^{-2} = -\\left[ 0 - \\frac{(-3)^2}{2} \\right] = \\frac{9}{2}$.</li>
    <li>$\\left[ \\frac{(x + 2)^2}{2} \\right]_{-2}^5 = \\frac{(7)^2}{2} - 0 = \\frac{49}{2}$.</li>
  </ol>
  $$I = \\frac{9}{2} + \\frac{49}{2} = \\frac{58}{2} = \\mathbf{29}$$`,
  '4 Marks',
  [
    ['Part 1: Splitting integral at x = 5 into (2,5) and (5,8)', '1 Mark'],
    ['Part 1: Evaluating both integrals to get 9/2 + 9/2 = 9', '1 Mark'],
    ['Part 2: Splitting at x = -2 into (-5,-2) and (-2,5)', '1 Mark'],
    ['Part 2: Evaluating to get 9/2 + 49/2 = 29', '1 Mark']
  ]
));

// Q13 (Ex 7.10 Q1, Q2 - King's Property P4 on Trigonometric Integrals)
questions.push(createQCard(
  'c12m-ch7-q13',
  'Q13',
  'Exercise 7.10 (Verbatim)',
  `By using the properties of definite integrals, evaluate the integrals:<br>
  (i) $I = \\int_0^{\\pi/2} \\cos^2 x \\, dx$<br>
  (ii) $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx$`,
  `<p><strong>(i) $I = \\int_0^{\\pi/2} \\cos^2 x \\, dx$ ... (1):</strong></p>
  Using property $P_4$: $\\int_0^a f(x) \\, dx = \\int_0^a f(a - x) \\, dx$:
  $$I = \\int_0^{\\pi/2} \\cos^2\\left(\\frac{\\pi}{2} - x\\right) dx = \\int_0^{\\pi/2} \\sin^2 x \\, dx \\quad \\dots (2)$$
  Adding equations (1) and (2):
  $$2I = \\int_0^{\\pi/2} (\\cos^2 x + \\sin^2 x) \\, dx = \\int_0^{\\pi/2} 1 \\, dx = [x]_0^{\\pi/2} = \\frac{\\pi}{2}$$
  $$\\mathbf{I = \\frac{\\pi}{4}}$$

  <p><strong>(ii) $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx$ ... (1):</strong></p>
  Applying property $P_4$: $x \\to \\frac{\\pi}{2} - x$:
  $$I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin(\\pi/2 - x)}}{\\sqrt{\\sin(\\pi/2 - x)} + \\sqrt{\\cos(\\pi/2 - x)}} \\, dx = \\int_0^{\\pi/2} \\frac{\\sqrt{\\cos x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}} \\, dx \\quad \\dots (2)$$
  Adding equations (1) and (2):
  $$2I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x} + \\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} \\, dx = \\int_0^{\\pi/2} 1 \\, dx = [x]_0^{\\pi/2} = \\frac{\\pi}{2}$$
  $$\\mathbf{I = \\frac{\\pi}{4}}$$`,
  '4 Marks',
  [
    ['(i) Applying P4 King\'s property and adding integrals: 2I = π/2 => I = π/4', '2 Marks'],
    ['(ii) Applying P4, common denominator addition and evaluation: I = π/4', '2 Marks']
  ]
));

// Q14 (Ex 7.10 Q8 - Logarithmic Definite Integral King's Property)
questions.push(createQCard(
  'c12m-ch7-q14',
  'Q14',
  'Exercise 7.10 (Verbatim)',
  `Evaluate:
  $$I = \\int_0^{\\pi/4} \\log(1 + \\tan x) \\, dx$$`,
  `<p>Let $I = \\int_0^{\\pi/4} \\log(1 + \\tan x) \\, dx$ ... (1)</p>
  <p>Using property $P_4$: $\\int_0^a f(x) \\, dx = \\int_0^a f(a - x) \\, dx$ with $a = \\frac{\\pi}{4}$:</p>
  $$I = \\int_0^{\\pi/4} \\log\\left[ 1 + \\tan\\left(\\frac{\\pi}{4} - x\\right) \\right] dx$$
  We know that $\\tan\\left(\\frac{\\pi}{4} - x\\right) = \\frac{\\tan(\\pi/4) - \\tan x}{1 + \\tan(\\pi/4)\\tan x} = \\frac{1 - \\tan x}{1 + \\tan x}$.
  <br>Substitute inside the log:
  $$1 + \\tan\\left(\\frac{\\pi}{4} - x\\right) = 1 + \\frac{1 - \\tan x}{1 + \\tan x} = \\frac{1 + \\tan x + 1 - \\tan x}{1 + \\tan x} = \\frac{2}{1 + \\tan x}$$
  Thus:
  $$I = \\int_0^{\\pi/4} \\log\\left( \\frac{2}{1 + \\tan x} \\right) dx = \\int_0^{\\pi/4} [\\log 2 - \\log(1 + \\tan x)] \\, dx \\quad \\dots (2)$$

  <p>Adding equations (1) and (2):</p>
  $$2I = \\int_0^{\\pi/4} \\log 2 \\, dx = (\\log 2) [x]_0^{\\pi/4} = \\frac{\\pi}{4} \\log 2$$
  $$\\mathbf{I = \\frac{\\pi}{8} \\log 2}$$`,
  '4 Marks',
  [
    ['Applying P4 with x -> π/4 - x', '1 Mark'],
    ['Simplifying 1 + tan(π/4 - x) = 2/(1 + tan x)', '1.5 Marks'],
    ['Adding equations yielding 2I = (π/4) log 2', '1 Mark'],
    ['Final answer I = (π/8) log 2', '0.5 Mark']
  ]
));

// Q15 (Ex 7.10 Q16 - Landmark Board Integral of log sin x)
questions.push(createQCard(
  'c12m-ch7-q15',
  'Q15',
  'Exercise 7.10 (Verbatim)',
  `Evaluate:
  $$I = \\int_0^\\pi \\log(1 + \\cos x) \\, dx$$
  Also prove that $\\int_0^{\\pi/2} \\log \\sin x \\, dx = -\\frac{\\pi}{2} \\log 2$.`,
  `<p><strong>Part 1: $I = \\int_0^\\pi \\log(1 + \\cos x) \\, dx$ ... (1):</strong></p>
  Using $P_4$: $x \\to \\pi - x$:
  $$I = \\int_0^\\pi \\log(1 + \\cos(\\pi - x)) \\, dx = \\int_0^\\pi \\log(1 - \\cos x) \\, dx \\quad \\dots (2)$$
  Adding (1) and (2):
  $$2I = \\int_0^\\pi [\\log(1 + \\cos x) + \\log(1 - \\cos x)] \\, dx = \\int_0^\\pi \\log(1 - \\cos^2 x) \\, dx = \\int_0^\\pi \\log(\\sin^2 x) \\, dx$$
  $$2I = 2\\int_0^\\pi \\log(\\sin x) \\, dx \\implies I = \\int_0^\\pi \\log(\\sin x) \\, dx$$
  Using property $P_6$: Since $\\sin(\\pi - x) = \\sin x$:
  $$I = 2\\int_0^{\\pi/2} \\log(\\sin x) \\, dx$$

  <p><strong>Part 2: Evaluation of $J = \\int_0^{\\pi/2} \\log(\\sin x) \\, dx$:</strong></p>
  Using $P_4$:
  $$J = \\int_0^{\\pi/2} \\log(\\sin(\\pi/2 - x)) \\, dx = \\int_0^{\\pi/2} \\log(\\cos x) \\, dx$$
  Adding both expressions for $J$:
  $$2J = \\int_0^{\\pi/2} [\\log(\\sin x) + \\log(\\cos x)] \\, dx = \\int_0^{\\pi/2} \\log(\\sin x \\cos x) \\, dx$$
  $$= \\int_0^{\\pi/2} \\log\\left(\\frac{\\sin 2x}{2}\\right) dx = \\int_0^{\\pi/2} \\log(\\sin 2x) \\, dx - \\int_0^{\\pi/2} \\log 2 \\, dx$$
  Let $2x = t \\implies dx = dt/2$. When $x = 0 \\to t=0$, $x = \\pi/2 \\to t = \\pi$:
  $$\\int_0^{\\pi/2} \\log(\\sin 2x) \\, dx = \\frac{1}{2} \\int_0^\\pi \\log(\\sin t) \\, dt = \\frac{1}{2} \\left( 2\\int_0^{\\pi/2} \\log(\\sin t) \\, dt \\right) = J$$
  Thus:
  $$2J = J - \\frac{\\pi}{2}\\log 2 \\implies \\mathbf{J = -\\frac{\\pi}{2}\\log 2}$$

  <p><strong>Returning to Part 1:</strong></p>
  $$I = 2 J = 2\\left(-\\frac{\\pi}{2}\\log 2\\right) = \\mathbf{-\\pi \\log 2}$$`,
  '6 Marks',
  [
    ['Applying P4 to get log(1 - cos x) and adding: 2I = 2 int log(sin x)', '2 Marks'],
    ['Converting integral from 0 to π into 2 times 0 to π/2 using P6', '1 Mark'],
    ['Deriving J = int_0^(π/2) log sin x = -π/2 log 2 using double angle trick', '2 Marks'],
    ['Final answer I = -π log 2', '1 Mark']
  ]
));

// Q16 (Ex 7.10 Q11, Q13 - Even/Odd Functions P7)
questions.push(createQCard(
  'c12m-ch7-q16',
  'Q16',
  'Exercise 7.10 (Verbatim)',
  `Using properties of definite integrals, evaluate:<br>
  (i) $\\int_{-\\pi/2}^{\\pi/2} \\sin^7 x \\, dx$<br>
  (ii) $\\int_{-\\pi/2}^{\\pi/2} (x^3 + x\\cos x + \\tan^5 x + 1) \\, dx$`,
  `<p><strong>Property $P_7$:</strong>
  $$\\int_{-a}^a f(x) \\, dx = \\begin{cases} 2\\int_0^a f(x) \\, dx, & \\text{if } f(-x) = f(x) \\text{ (even function)} \\\\ 0, & \\text{if } f(-x) = -f(x) \\text{ (odd function)} \\end{cases}$$</p>

  <p><strong>(i) $I = \\int_{-\\pi/2}^{\\pi/2} \\sin^7 x \\, dx$:</strong></p>
  Let $f(x) = \\sin^7 x$.
  $$f(-x) = [\\sin(-x)]^7 = [-\\sin x]^7 = -\\sin^7 x = -f(x)$$
  Since $f(x)$ is an <strong>odd function</strong>:
  $$\\mathbf{I = 0}$$

  <p><strong>(ii) $I = \\int_{-\\pi/2}^{\\pi/2} (x^3 + x\\cos x + \\tan^5 x + 1) \\, dx$:</strong></p>
  Split the integral into separate components:
  $$I = \\int_{-\\pi/2}^{\\pi/2} x^3 \\, dx + \\int_{-\\pi/2}^{\\pi/2} x\\cos x \\, dx + \\int_{-\\pi/2}^{\\pi/2} \\tan^5 x \\, dx + \\int_{-\\pi/2}^{\\pi/2} 1 \\, dx$$
  <ul>
    <li>For $f_1(x) = x^3$: $f_1(-x) = (-x)^3 = -x^3 = -f_1(x)$ (Odd) $\\implies \\int_{-\\pi/2}^{\\pi/2} x^3 \\, dx = 0$.</li>
    <li>For $f_2(x) = x\\cos x$: $f_2(-x) = (-x)\\cos(-x) = -x\\cos x = -f_2(x)$ (Odd) $\\implies \\int_{-\\pi/2}^{\\pi/2} x\\cos x \\, dx = 0$.</li>
    <li>For $f_3(x) = \\tan^5 x$: $f_3(-x) = [\\tan(-x)]^5 = [-\\tan x]^5 = -\\tan^5 x = -f_3(x)$ (Odd) $\\implies \\int_{-\\pi/2}^{\\pi/2} \\tan^5 x \\, dx = 0$.</li>
    <li>For $f_4(x) = 1$: Constant is an even function:
      $$\\int_{-\\pi/2}^{\\pi/2} 1 \\, dx = 2\\int_0^{\\pi/2} 1 \\, dx = 2[x]_0^{\\pi/2} = 2\\left(\\frac{\\pi}{2}\\right) = \\pi$$
    </li>
  </ul>
  Summing all four terms:
  $$I = 0 + 0 + 0 + \\pi = \\mathbf{\\pi}$$`,
  '4 Marks',
  [
    ['(i) Testing odd function condition f(-x) = -f(x) and concluding 0', '1.5 Marks'],
    ['(ii) Identifying odd components x³, x cos x, tan⁵ x integrate to 0', '1.5 Marks'],
    ['(ii) Evaluating constant integral to obtain π', '1 Mark']
  ]
));

saveChapter(
  7,
  'Integrals',
  svgDiagram,
  'NCERT Exercises 7.1 to 7.10 (16 Verbatim Core Questions)',
  questions,
  'Application of Integrals'
);
